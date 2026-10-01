/**
 * Visitor Tracking Engine for Concordia Engineering Hub
 * Tracks:
 * 1. Live active visitors right now (via 25-30s heartbeats)
 * 2. Daily unique visitors (resets at midnight)
 * 3. Cumulative total visitors
 * 
 * Automatically connects to Upstash Redis / Vercel KV when configured in Vercel,
 * with edge/local fallback.
 */

export interface LiveVisitorData {
  live: number;
  today: number;
  total: number;
  configured: boolean;
}

const STORAGE_KEYS = {
  TOTAL: 'concordia_eng_total_visits',
  TODAY: 'concordia_eng_today_visits',
  LAST_DATE: 'concordia_eng_last_visit_date',
  SESSION_FLAG: 'concordia_eng_session_counted',
  SESSION_ID: 'concordia_eng_session_id'
};

function getSessionId(): string {
  if (typeof window === 'undefined') return 'server_session';
  let sId = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!sId) {
    sId = 's_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sId);
  }
  return sId;
}

function getTodayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function getLocalFallbackStats(): LiveVisitorData {
  if (typeof window === 'undefined') {
    return { live: 1, today: 1, total: 1, configured: false };
  }

  const todayStr = getTodayString();
  const lastRecordedDate = localStorage.getItem(STORAGE_KEYS.LAST_DATE);
  const sessionCounted = sessionStorage.getItem(STORAGE_KEYS.SESSION_FLAG);

  let total = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL) || '1', 10);
  let today = parseInt(localStorage.getItem(STORAGE_KEYS.TODAY) || '1', 10);

  if (lastRecordedDate !== todayStr) {
    today = 1;
    localStorage.setItem(STORAGE_KEYS.LAST_DATE, todayStr);
    localStorage.setItem(STORAGE_KEYS.TODAY, '1');
  }

  if (!sessionCounted) {
    today += 1;
    total += 1;
    localStorage.setItem(STORAGE_KEYS.TODAY, today.toString());
    localStorage.setItem(STORAGE_KEYS.TOTAL, total.toString());
    localStorage.setItem(STORAGE_KEYS.LAST_DATE, todayStr);
    sessionStorage.setItem(STORAGE_KEYS.SESSION_FLAG, 'true');
  }

  return {
    live: 1,
    today,
    total,
    configured: false
  };
}

export async function pingAndGetStats(isHeartbeat = false): Promise<LiveVisitorData> {
  const sessionId = getSessionId();

  try {
    const res = await fetch('/api/visitors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, isHeartbeat }),
      keepalive: true
    });

    if (res.ok) {
      const data = await res.json();
      if (typeof data.total === 'number' && typeof data.today === 'number') {
        return {
          live: Math.max(1, data.live || 1),
          today: Math.max(1, data.today),
          total: Math.max(1, data.total),
          configured: Boolean(data.configured)
        };
      }
    }
  } catch {
    // Ignore network error and fall back to local
  }

  return getLocalFallbackStats();
}
