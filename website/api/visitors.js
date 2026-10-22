// Live site activity for the Concordia Engineering Hub, counted in people (devices), not page loads:
//   live   devices with the site open in the last 90 s (one browser with several tabs is one person)
//   today  devices that opened the site today, Montreal time (refreshing never adds)
//   total  visits: one per device per day (the same person coming back on another day is another visit)
//
// Each browser keeps a random device id and the day it was last counted (src/utils/visitorStats.ts). It asks to
// be counted only on its first load of a day; every other request just marks it live. With Upstash the server
// also refuses a second count for the same device and day on its own, so a modified client cannot inflate it.
//
// THE COUNTS MUST SURVIVE EVERY DEPLOY. They live in an external store, never in this deployment, so a push
// keeps them as long as the namespace and key names below never change. This people-based count started from
// zero on 2026-10-22 at the owner's request; the earlier page-load counter (namespace concordia_live_v3,
// Upstash keys concordia:total / concordia:daily:*) is left untouched in the store. Never rename these keys.
// When a count cannot be read the response says null instead of inventing a number, and the page keeps the
// last real counts it saw.
//
// Cheap under traffic: live people are a Redis sorted set (no KEYS scans), heartbeats never touch the cloud
// counter (totals are cached per instance), and every outbound request has a short timeout.

const UPSTASH_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const CLOUD_KV_BASE = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'concordia_people_v4';
const KEY = { total: 'concordia:v4:visits', daily: (d) => `concordia:v4:daily:${d}`, live: 'concordia:v4:live', seen: (d, id) => `concordia:v4:seen:${d}:${id}` };

const LIVE_WINDOW_MS = 90000; // live for 90 s after the last heartbeat (clients beat every 60 s)
const UPSTREAM_TIMEOUT_MS = 2500;
const TOTALS_TTL_MS = 60000;

// Abuse guard (per warm instance): at most RATE_MAX counted visits a minute from one network address. Past it
// the request is answered but not counted; a lecture hall on one campus network stays far below it.
const RATE_WINDOW_MS = 60000;
const RATE_MAX = 120;
const visitsByAddress = new Map();
function countable(address, now) {
  const r = visitsByAddress.get(address);
  if (!r || now - r.start > RATE_WINDOW_MS) {
    visitsByAddress.set(address, { start: now, n: 1 });
    if (visitsByAddress.size > 5000) for (const [k, v] of visitsByAddress) if (now - v.start > RATE_WINDOW_MS) visitsByAddress.delete(k);
    return true;
  }
  r.n++;
  return r.n <= RATE_MAX;
}

// per warm instance: devices seen recently (live) and devices already counted today (fallback store only)
const liveDevices = new Map();
const countedToday = { date: '', ids: new Set() };
let lastPrune = 0;
let totalsCache = { date: '', total: null, today: null, at: 0 };

const montrealDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());
const withTimeout = (url, init = {}) => fetch(url, { ...init, signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS) });

// the cloud counter: read a key (missing = 0, never created by a read) or add one
async function cloud(key, hit) {
  try {
    const res = await withTimeout(`${CLOUD_KV_BASE}/${hit ? 'hit' : 'get'}/${NAMESPACE}/${key}`, { headers: { Accept: 'application/json' } });
    if (res.ok) {
      const data = await res.json();
      return typeof data.value === 'number' ? data.value : null;
    }
    if (!hit && res.status === 404) return 0;
  } catch {
    // unreachable: unknown
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    return res.status(405).end();
  }
  // reading the counts is public; counting a visit is for this site's own pages (same origin, no CORS needed)
  if (req.method === 'GET') res.setHeader('Access-Control-Allow-Origin', '*');

  const today = montrealDate();
  const now = Date.now();
  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch {
    body = {};
  }
  // device ids are our own random tokens; anything else (or an old page without one) is never counted
  const rawId = String(body.deviceId || '');
  const deviceId = /^[A-Za-z0-9_-]{8,64}$/.test(rawId) ? rawId : null;
  const address = String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const wantsCount = req.method === 'POST' && !!deviceId && body.visit === true && countable(address, now);

  // live people on this instance
  if (req.method === 'POST' && deviceId) liveDevices.set(deviceId, now);
  if (now - lastPrune > 15000) {
    lastPrune = now;
    for (const [id, ts] of liveDevices) if (now - ts > LIVE_WINDOW_MS) liveDevices.delete(id);
  }
  const liveHere = liveDevices.size;

  // 1. Upstash: exact live set, and the server refuses a second count for the same device and day
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const call = (commands) =>
        withTimeout(`${UPSTASH_URL}/pipeline`, { method: 'POST', headers: { Authorization: `Bearer ${UPSTASH_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(commands) }).then((r) => r.json());
      let fresh = false;
      if (wantsCount) {
        const [set] = await call([['SET', KEY.seen(today, deviceId), '1', 'NX', 'EX', String(2 * 86400)]]);
        fresh = set?.result === 'OK';
      }
      const commands = [];
      if (fresh) commands.push(['INCR', KEY.total], ['INCR', KEY.daily(today)]);
      else commands.push(['GET', KEY.total], ['GET', KEY.daily(today)]);
      if (req.method === 'POST' && deviceId) commands.push(['ZADD', KEY.live, String(now), deviceId]);
      else commands.push(['ECHO', '0']);
      commands.push(['ZREMRANGEBYSCORE', KEY.live, '0', String(now - LIVE_WINDOW_MS)], ['ZCARD', KEY.live], ['PEXPIRE', KEY.live, String(LIVE_WINDOW_MS * 2)]);
      const r = await call(commands);
      return res.status(200).json({
        live: Math.max(liveHere, parseInt(r[4]?.result || 0, 10)),
        today: parseInt(r[1]?.result || 0, 10),
        total: parseInt(r[0]?.result || 0, 10),
        configured: true,
        date: today
      });
    } catch {
      // fall through to the cloud counter
    }
  }

  // 2. Cloud counter: the browser asks only once per day; this instance also refuses repeats it has seen
  if (countedToday.date !== today) Object.assign(countedToday, { date: today, ids: new Set() });
  const count = wantsCount && !countedToday.ids.has(deviceId);
  if (count) countedToday.ids.add(deviceId);
  const fresh = totalsCache.date === today && now - totalsCache.at < TOTALS_TTL_MS;
  if (count || !fresh) {
    const [total, daily] = await Promise.all([cloud('visits_total', count), cloud(`today_${today}`, count)]);
    totalsCache = {
      date: today,
      total: total ?? totalsCache.total,
      today: daily ?? (totalsCache.date === today ? totalsCache.today : null),
      at: total == null ? 0 : now
    };
  }
  return res.status(200).json({ live: liveHere, today: totalsCache.today, total: totalsCache.total, configured: true, date: today });
}
