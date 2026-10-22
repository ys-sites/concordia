/**
 * Live site activity: visitors right now, today and all time.
 *
 * The counts live in an external store behind /api/visitors (see api/visitors.js), not in the deployment, so
 * every push and redeploy keeps them. Never rename the store's namespace or keys there: that would restart
 * the count from zero.
 *
 * The numbers shown never go down. This browser keeps the highest counts the server has reported, so a slow
 * or failed request, a cold server or a network hiccup can never show a reset count; only "today" starts
 * over, at midnight Montreal time. On localhost the counter reads the live site's numbers without adding a
 * visit, so the preview shows the real counts.
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
  date: string; // the day "today" counts, YYYY-MM-DD in Montreal
}

const SEEN_KEY = 'concordia_live_v3_seen';
const SESSION_ID = 'concordia_live_v3_session_id';
// numbers kept by earlier versions of this file: the local stand-in counts were not real, so they are dropped
const OBSOLETE = ['concordia_live_v3_total', 'concordia_live_v3_today', 'concordia_live_v3_date', 'concordia_live_v3_session_counted'];

const montrealDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());

function readSeen(): Seen | null {
  try {
    for (const k of OBSOLETE) localStorage.removeItem(k);
    const s = JSON.parse(localStorage.getItem(SEEN_KEY) || 'null');
    return s && typeof s.total === 'number' && s.total > 0 ? s : null;
  } catch {
    return null;
  }
}

function sessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_ID);
    if (!id) {
      id = 's_' + Math.random().toString(36).slice(2, 9) + '_' + Date.now().toString(36);
      sessionStorage.setItem(SESSION_ID, id);
    }
    return id;
  } catch {
    return 's_' + Math.random().toString(36).slice(2, 9);
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
  try {
    // the local preview only reads the live counts (proxied to the live site by vite.config.ts)
    const res = import.meta.env.DEV
      ? await fetch('/api/visitors')
      : await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: sessionId(), isHeartbeat }),
          keepalive: true
        });
    if (res.ok) {
      const data = await res.json();
      const seen = readSeen();
      const date = typeof data.date === 'string' ? data.date : montrealDate();
      const sameDay = seen?.date === date;
      const serverTotal = typeof data.total === 'number' ? data.total : 0;
      const serverToday = typeof data.today === 'number' ? data.today : 0;
      const next: Seen = {
        total: Math.max(seen?.total ?? 0, serverTotal),
        today: sameDay ? Math.max(seen!.today, serverToday) : serverToday,
        date
      };
      if (next.total > 0) {
        try {
          localStorage.setItem(SEEN_KEY, JSON.stringify(next));
        } catch {
          // storage blocked: the numbers still show for this visit
        }
        last = { live: Math.max(1, data.live || 1), today: Math.max(next.today, 1), total: next.total, configured: Boolean(data.configured) };
        return last;
      }
    }
  } catch {
    // network error: keep showing the last real counts
  }
  return last ?? getLastSeenStats();
}
