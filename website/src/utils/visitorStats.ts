/**
 * Live site activity, counted in people (devices), not page loads (see api/visitors.js):
 *   live   people with the site open right now (a browser with several tabs is one person)
 *   today  people who opened the site today, Montreal time (refreshing never adds)
 *   total  visits: one per person per day (coming back on another day is another visit)
 *
 * This browser keeps a random device id and the day it was last counted, and asks to be counted only on its
 * first load of a day; every other request just marks it live. Nothing personal is stored or sent.
 *
 * The numbers shown never go down within the count: the highest the server has reported is kept, so a slow or
 * failed request can never show a reset. On localhost the counter only reads the live site's numbers.
 */

export interface LiveVisitorData {
  live: number;
  today: number;
  total: number;
  configured: boolean;
}

interface Seen {
  total: number;
  today: number;
  date: string;
}

const DEVICE_KEY = 'concordia.device';
const COUNTED_KEY = 'concordia.visit.day';
const SEEN_KEY = 'concordia_people_v4_seen';
// keys of the earlier page-load counter in this browser, no longer used
const OBSOLETE = ['concordia_live_v3_seen', 'concordia_live_v3_total', 'concordia_live_v3_today', 'concordia_live_v3_date', 'concordia_live_v3_session_counted', 'concordia_live_v3_session_id'];

const montrealDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());

const store = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // storage blocked: this visit still shows the counts
    }
  }
};

let memoryDevice: string | null = null;
function deviceId(): string {
  let id = store.get(DEVICE_KEY);
  if (!id || !/^[A-Za-z0-9_-]{8,64}$/.test(id)) {
    id = memoryDevice ?? 'd_' + (crypto.randomUUID?.().replace(/-/g, '') ?? Math.random().toString(36).slice(2) + Date.now().toString(36));
    memoryDevice = id;
    store.set(DEVICE_KEY, id);
  }
  return id;
}

function readSeen(): Seen | null {
  try {
    for (const k of OBSOLETE) {
      localStorage.removeItem(k);
      sessionStorage.removeItem(k);
    }
  } catch {
    // ignore
  }
  try {
    const s = JSON.parse(store.get(SEEN_KEY) || 'null');
    return s && typeof s.total === 'number' ? s : null;
  } catch {
    return null;
  }
}

// What to paint before the server answers: the last real counts this browser saw, or nothing
export function getLastSeenStats(): LiveVisitorData | null {
  const s = readSeen();
  if (!s) return null;
  return { live: 1, total: s.total, today: s.date === montrealDate() ? s.today : 0, configured: true };
}

let last: LiveVisitorData | null = null;

export async function pingAndGetStats(isHeartbeat = false): Promise<LiveVisitorData | null> {
  const day = montrealDate();
  const visit = !isHeartbeat && store.get(COUNTED_KEY) !== day;
  try {
    // the local preview only reads the live counts (proxied to the live site by vite.config.ts)
    const res = import.meta.env.DEV
      ? await fetch('/api/visitors')
      : await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deviceId: deviceId(), visit }),
          keepalive: true
        });
    if (res.ok) {
      const data = await res.json();
      if (visit && !import.meta.env.DEV) store.set(COUNTED_KEY, day);
      const seen = readSeen();
      const date = typeof data.date === 'string' ? data.date : day;
      const serverTotal = typeof data.total === 'number' ? data.total : 0;
      const serverToday = typeof data.today === 'number' ? data.today : 0;
      const next: Seen = {
        total: Math.max(seen?.total ?? 0, serverTotal),
        today: seen && seen.date === date ? Math.max(seen.today, serverToday) : serverToday,
        date
      };
      store.set(SEEN_KEY, JSON.stringify(next));
      last = { live: Math.max(1, data.live || 1), today: Math.max(next.today, 1), total: Math.max(next.total, 1), configured: Boolean(data.configured) };
      return last;
    }
  } catch {
    // network error: keep showing the last real counts
  }
  return last ?? getLastSeenStats();
}
