// Serverless visitor tracking engine for Concordia Engineering Hub
// Supports:
// 1. Upstash Redis / Vercel KV REST API (when env vars are present in Vercel):
//    - Real-time active users (Heartbeat with 45s sliding TTL window)
//    - Real unique daily visitors (auto-keyed by YYYY-MM-DD)
//    - Real cumulative total visits
// 2. In-memory fallback when running locally or before KV is connected

const UPSTASH_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

// In-memory fallback
const memoryActiveSessions = new Map();
let memoryDailyVisits = { date: new Date().toISOString().slice(0, 10), count: 0 };
let memoryTotalVisits = 0;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const todayStr = new Date().toISOString().slice(0, 10);
  const now = Date.now();

  // If Upstash / Vercel KV is configured in environment variables:
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const headers = {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json'
      };

      if (req.method === 'POST') {
        const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
        const sessionId = body.sessionId || req.query.sessionId || 'anon_' + Math.random().toString(36).slice(2, 9);
        const isHeartbeat = Boolean(body.isHeartbeat || req.query.heartbeat);

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

        const total = parseInt(results[0]?.result || 0, 10);
        const today = parseInt(results[1]?.result || 0, 10);
        const activeKeys = results[3]?.result || [];
        const live = Math.max(1, activeKeys.length);

        return res.status(200).json({
          live,
          today,
          total,
          configured: true,
          date: todayStr
        });
      }

      // GET request
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
      const total = parseInt(results[0]?.result || 0, 10);
      const today = parseInt(results[1]?.result || 0, 10);
      const activeKeys = results[2]?.result || [];
      const live = Math.max(1, activeKeys.length);

      return res.status(200).json({
        live,
        today,
        total,
        configured: true,
        date: todayStr
      });
    } catch (err) {
      console.error('KV Error, falling back to memory:', err);
    }
  }

  // Fallback in-memory
  for (const [sId, ts] of memoryActiveSessions.entries()) {
    if (now - ts > 45000) memoryActiveSessions.delete(sId);
  }

  if (memoryDailyVisits.date !== todayStr) {
    memoryDailyVisits.date = todayStr;
    memoryDailyVisits.count = 0;
  }

  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const sessionId = body.sessionId || req.query.sessionId || 'anon_' + Math.random().toString(36).slice(2, 9);
    const isHeartbeat = Boolean(body.isHeartbeat || req.query.heartbeat);

    memoryActiveSessions.set(sessionId, now);

    if (!isHeartbeat) {
      memoryDailyVisits.count += 1;
      memoryTotalVisits += 1;
    }

    return res.status(200).json({
      live: Math.max(1, memoryActiveSessions.size),
      today: memoryDailyVisits.count,
      total: memoryTotalVisits,
      configured: false,
      date: todayStr
    });
  }

  return res.status(200).json({
    live: Math.max(1, memoryActiveSessions.size),
    today: memoryDailyVisits.count,
    total: memoryTotalVisits,
    configured: false,
    date: todayStr
  });
}
