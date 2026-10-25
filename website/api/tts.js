const MAX_TEXT_LENGTH = 6000;
const MAX_REQUESTS_PER_MINUTE = 20;
const requestWindows = new Map();

const getBody = (body) => {
  if (typeof body !== 'string') return body || {};
  try {
    return JSON.parse(body || '{}');
  } catch {
    return {};
  }
};

const isSameOrigin = (req) => {
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};

const canGenerate = (req) => {
  const address = String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const window = requestWindows.get(address);
  if (!window || now - window.startedAt >= 60000) {
    requestWindows.set(address, { startedAt: now, count: 1 });
    return true;
  }
  window.count += 1;
  return window.count <= MAX_REQUESTS_PER_MINUTE;
};

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).end();
  }
  if (!isSameOrigin(req)) return res.status(403).json({ error: 'Cross-origin requests are not allowed.' });
  if (!canGenerate(req)) return res.status(429).json({ error: 'Too many voice requests. Please wait a moment.' });

  const apiKey = process.env.FISH_AUDIO_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'Fish Audio is not configured.' });

  const text = String(getBody(req.body).text || '').trim();
  if (!text) return res.status(400).json({ error: 'Text is required.' });
  if (text.length > MAX_TEXT_LENGTH) return res.status(413).json({ error: `Text must be ${MAX_TEXT_LENGTH} characters or fewer.` });

  try {
    const upstream = await fetch('https://api.fish.audio/v1/tts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        model: process.env.FISH_AUDIO_MODEL || 's2.1-pro-free'
      },
      body: JSON.stringify({ text, format: 'mp3' }),
      signal: AbortSignal.timeout(25000)
    });

    if (!upstream.ok) {
      console.error('Fish Audio TTS failed', { status: upstream.status });
      return res.status(upstream.status === 429 ? 429 : 502).json({ error: 'Voice generation is temporarily unavailable.' });
    }

    const audio = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'audio/mpeg');
    res.setHeader('Content-Length', String(audio.length));
    return res.status(200).send(audio);
  } catch (error) {
    console.error('Fish Audio TTS request failed', error);
    return res.status(502).json({ error: 'Voice generation is temporarily unavailable.' });
  }
}
