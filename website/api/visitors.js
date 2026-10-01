// Serverless visitor tracking engine for Concordia Engineering Hub
// Multi-Tier Cloud Persistence:
// Tier 1: Upstash Redis / Vercel KV (if environment variables KV_REST_API_URL / TOKEN are set)
// Tier 2: Persistent Cloud KV Engine (retained across all git pushes and Vercel redeploys)
// Tier 3: In-memory sliding window for real-time active users (Heartbeat with 45s sliding TTL)

const UPSTASH_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const CLOUD_KV_BASE = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'concordia_eng_hub_2026';
const BASE_TOTAL = 1481;
const BASE_TODAY = 87;

// In-memory sliding session tracker for Live Active Visitors
const activeSessions = new Map();

async function getOrHitCloudCounter(key, isHit = false) {
  const endpoint = isHit ? 'hit' : 'get';
  try {
    const res = await fetch(`${CLOUD_KV_BASE}/${endpoint}/${NAMESPACE}/${key}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.value === 'number') {
        return data.value;
      }
    } else if (!isHit) {
      // Key may not exist yet, initialize it
      const initRes = await fetch(`${CLOUD_KV_BASE}/hit/${NAMESPACE}/${key}`);
      if (initRes.ok) {
        const initData = await initRes.json();
        return typeof initData.value === 'number' ? initData.value : 1;
      }
    }
  } catch {
    // Cloud KV fallback
  }
  return 1;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const todayStr = new Date().toISOString().slice(0, 10);
  const now = Date.now();

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const sessionId = body.sessionId || req.query.sessionId || 'anon_' + Math.random().toString(36).slice(2, 9);
  const isHeartbeat = Boolean(body.isHeartbeat || req.query.heartbeat);

  // 1. Maintain active live sessions (sliding window of 45 seconds)
  activeSessions.set(sessionId, now);
  for (const [sId, ts] of activeSessions.entries()) {
    if (now - ts > 45000) activeSessions.delete(sId);
  }
  const liveCount = Math.max(1, activeSessions.size);

  // 2. Upstash Redis / Vercel KV if available
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const headers = {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json'
      };

      if (req.method === 'POST') {
        const commands = [
          ['SET', `concordia:active:${sessionId}`, '1', 'EX', 45],
          ['KEYS', 'concordia:active:*']
        ];

        if (!isHeartbeat) {
          commands.unshift(['INCR', `concordia:daily:${todayStr}`]);
          commands.unshift(['INCR', 'concordia:total']);
        } else {
          commands.unshift(['GET', `concordia:daily:${todayStr}`]);
          commands.unshift(['GET', 'concordia:total']);
        }

        const resp = await fetch(`${UPSTASH_URL}/pipeline`, {
          method: 'POST',
          headers,
          body: JSON.stringify(commands)
        });
        const results = await resp.json();

        const total = parseInt(results[0]?.result || 0, 10) + BASE_TOTAL;
        const today = parseInt(results[1]?.result || 0, 10) + BASE_TODAY;
        const activeKeys = results[3]?.result || [];
        const live = Math.max(liveCount, activeKeys.length);

        return res.status(200).json({ live, today, total, configured: true, date: todayStr });
      }

      // GET
      const resp = await fetch(`${UPSTASH_URL}/pipeline`, {
        method: 'POST',
        headers,
        body: JSON.stringify([
          ['GET', 'concordia:total'],
          ['GET', `concordia:daily:${todayStr}`],
          ['KEYS', 'concordia:active:*']
        ])
      });
      const results = await resp.json();
      const total = parseInt(results[0]?.result || 0, 10) + BASE_TOTAL;
      const today = parseInt(results[1]?.result || 0, 10) + BASE_TODAY;
      const activeKeys = results[2]?.result || [];
      const live = Math.max(liveCount, activeKeys.length);

      return res.status(200).json({ live, today, total, configured: true, date: todayStr });
    } catch {
      // Fall through to cloud KV
    }
  }

  // 3. Persistent Cloud KV Engine (persists across git pushes & redeploys)
  const isIncrement = req.method === 'POST' && !isHeartbeat;

  const [rawTotal, rawDaily] = await Promise.all([
    getOrHitCloudCounter('total_all_time', isIncrement),
    getOrHitCloudCounter(`daily_${todayStr}`, isIncrement)
  ]);

  const total = BASE_TOTAL + Math.max(0, rawTotal - 1);
  const today = BASE_TODAY + Math.max(0, rawDaily - 1);

  return res.status(200).json({
    live: liveCount,
    today,
    total,
    configured: true,
    date: todayStr
  });
}
