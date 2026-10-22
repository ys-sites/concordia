// Serverless visitor tracking engine for Concordia Engineering Hub
// Multi-Tier Cloud Persistence:
// Tier 1: Upstash Redis / Vercel KV (if environment variables KV_REST_API_URL / TOKEN are set)
// Tier 2: Persistent Cloud KV Engine (retained across all git pushes and Vercel redeploys)
// Tier 3: In-memory sliding window for real-time active users
//
// THE COUNTS MUST SURVIVE EVERY DEPLOY. They live in the external store, never in this deployment, so a push
// keeps them, as long as NAMESPACE and the key names below never change (a new name restarts at zero). When the
// counts cannot be read, the response says so (null) instead of inventing a number, and the page keeps showing
// the last real counts it saw. If Upstash is connected later, its counter starts from the cloud counter's total.
//
// Built to stay cheap under traffic: live users are a Redis sorted set (no KEYS scans),
// heartbeats never call the external counter (totals are cached per instance), and every
// outbound request has a short timeout so a slow upstream can't hold the function open.

const UPSTASH_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const CLOUD_KV_BASE = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'concordia_live_v3';

// A visitor counts as live for 90 s after their last heartbeat (clients beat every 60 s)
const LIVE_WINDOW_MS = 90000;
const UPSTREAM_TIMEOUT_MS = 2500;
const TOTALS_TTL_MS = 60000;

// In-memory sliding session tracker for Live Active Visitors (per warm instance)
const activeSessions = new Map();
let lastPrune = 0;

// Per-instance cache of the external counter, so heartbeats cost no outbound calls
let totalsCache = { date: '', total: null, today: null, at: 0 };

// "today" is the day in Montreal, so it starts over at local midnight (not 8 PM, as UTC would)
const montrealDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());

const withTimeout = (url, init = {}) => fetch(url, { ...init, signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS) });

async function getOrHitCloudCounter(key, isHit = false) {
  const endpoint = isHit ? 'hit' : 'get';
  try {
    const res = await withTimeout(`${CLOUD_KV_BASE}/${endpoint}/${NAMESPACE}/${key}`, {
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.value === 'number') {
        return data.value;
      }
    } else if (!isHit && res.status === 404) {
      // Key does not exist yet, initialize it
      const initRes = await withTimeout(`${CLOUD_KV_BASE}/hit/${NAMESPACE}/${key}`);
      if (initRes.ok) {
        const initData = await initRes.json();
        return typeof initData.value === 'number' ? initData.value : 1;
      }
    }
  } catch {
    // Cloud KV fallback
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const todayStr = montrealDate();
  const now = Date.now();

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch {
    body = {};
  }
  const sessionId = String(body.sessionId || req.query.sessionId || 'anon_' + Math.random().toString(36).slice(2, 9)).slice(0, 64);
  const isHeartbeat = Boolean(body.isHeartbeat || req.query.heartbeat);

  // 1. Maintain active live sessions (pruned at most every 15 s)
  activeSessions.set(sessionId, now);
  if (now - lastPrune > 15000) {
    lastPrune = now;
    for (const [sId, ts] of activeSessions) {
      if (now - ts > LIVE_WINDOW_MS) activeSessions.delete(sId);
    }
  }
  const liveCount = Math.max(1, activeSessions.size);

  // 2. Upstash Redis / Vercel KV if available
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const headers = {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json'
      };
      const liveKey = 'concordia:live';
      const commands = [];
      if (req.method === 'POST') {
        if (isHeartbeat) {
          commands.push(['GET', 'concordia:total'], ['GET', `concordia:daily:${todayStr}`]);
        } else {
          commands.push(['INCR', 'concordia:total'], ['INCR', `concordia:daily:${todayStr}`]);
        }
        commands.push(['ZADD', liveKey, String(now), sessionId]);
      } else {
        commands.push(['GET', 'concordia:total'], ['GET', `concordia:daily:${todayStr}`], ['ECHO', '0']);
      }
      commands.push(['ZREMRANGEBYSCORE', liveKey, '0', String(now - LIVE_WINDOW_MS)], ['ZCARD', liveKey], ['PEXPIRE', liveKey, String(LIVE_WINDOW_MS * 2)]);

      const resp = await withTimeout(`${UPSTASH_URL}/pipeline`, {
        method: 'POST',
        headers,
        body: JSON.stringify(commands)
      });
      const results = await resp.json();

      let total = parseInt(results[0]?.result || 0, 10);
      const today = Math.max(1, parseInt(results[1]?.result || 1, 10));
      // a fresh Upstash store (no total yet, or this is its first visit) continues from the cloud counter
      if (total <= 1) {
        const carried = await getOrHitCloudCounter('total_all_time', false);
        if (carried && carried > total) {
          const seed = await withTimeout(`${UPSTASH_URL}/pipeline`, {
            method: 'POST',
            headers,
            body: JSON.stringify(total ? [['INCRBY', 'concordia:total', String(carried)]] : [['SET', 'concordia:total', String(carried), 'NX'], ['GET', 'concordia:total']])
          }).then((r) => r.json());
          total = parseInt(seed[seed.length - 1]?.result || carried, 10);
        }
      }
      total = Math.max(1, total);
      const live = Math.max(liveCount, parseInt(results[4]?.result || 0, 10));

      return res.status(200).json({ live, today, total, configured: true, date: todayStr });
    } catch {
      // Fall through to cloud KV
    }
  }

  // 3. Persistent Cloud KV Engine (persists across git pushes & redeploys)
  const isIncrement = req.method === 'POST' && !isHeartbeat;
  const fresh = totalsCache.date === todayStr && now - totalsCache.at < TOTALS_TTL_MS;

  if (isIncrement || !fresh) {
    const [rawTotal, rawDaily] = await Promise.all([
      getOrHitCloudCounter('total_all_time', isIncrement),
      getOrHitCloudCounter(`daily_${todayStr}`, isIncrement)
    ]);
    // a failed read keeps the last counts this instance had (or null: unknown, never a made-up number)
    totalsCache = {
      date: todayStr,
      total: rawTotal ?? totalsCache.total,
      today: rawDaily ?? (totalsCache.date === todayStr ? totalsCache.today : null),
      at: rawTotal == null ? 0 : now
    };
  }

  return res.status(200).json({
    live: liveCount,
    today: totalsCache.today,
    total: totalsCache.total,
    configured: true,
    date: todayStr
  });
}
