/**
 * Visitor Tracking Engine for Concordia Engineering Hub
 * Tracks:
 * 1. Live active visitors right now (via 25-30s heartbeats)
 * 2. Daily unique visitors (resets at midnight)
 * 3. Cumulative total visitors
 * 
 * Multi-Tier Persistence:
 * - Persistent Cloud KV (retained across all git pushes and Vercel rebuilds)
 * - LocalStorage sync (maintains values even offline or on refresh)
 */

export interface LiveVisitorData {
  live: number;
  today: number;
  total: number;
  configured: boolean;
}

const STORAGE_KEYS = {
  TOTAL: 'concordia_live_v3_total',
  TODAY: 'concordia_live_v3_today',
  LAST_DATE: 'concordia_live_v3_date',
  SESSION_FLAG: 'concordia_live_v3_session_counted',
  SESSION_ID: 'concordia_live_v3_session_id'
};

function cleanupOldKeys() {
  if (typeof window === 'undefined') return;
  try {
    const obsolete = [
      'concordia_real_total_visits_v2',
      'concordia_real_today_visits_v2',
      'concordia_real_last_visit_date_v2',
      'concordia_real_session_counted_v2',
      'concordia_real_session_id_v2',
      'concordia_eng_total_visits',
      'concordia_eng_today_visits',
      'concordia_eng_last_visit_date',
      'concordia_eng_session_counted',
      'concordia_eng_session_id'
    ];
    for (const k of obsolete) {
      localStorage.removeItem(k);
      sessionStorage.removeItem(k);
    }

    // Safety reset: if total or today in localStorage is greater than 100 (from previous artificial base), reset to 1
    const curTotal = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL) || '0', 10);
    if (curTotal > 100) {
      localStorage.setItem(STORAGE_KEYS.TOTAL, '1');
    }
    const curToday = parseInt(localStorage.getItem(STORAGE_KEYS.TODAY) || '0', 10);
    if (curToday > 100) {
      localStorage.setItem(STORAGE_KEYS.TODAY, '1');
    }
  } catch {
    // Ignore storage errors
  }
}

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
    return { live: 1, today: 1, total: 1, configured: true };
  }

  cleanupOldKeys();

  const todayStr = getTodayString();
  const lastRecordedDate = localStorage.getItem(STORAGE_KEYS.LAST_DATE);
  const sessionCounted = sessionStorage.getItem(STORAGE_KEYS.SESSION_FLAG);

  let total = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL) || '1', 10);
  let today = parseInt(localStorage.getItem(STORAGE_KEYS.TODAY) || '1', 10);

  if (isNaN(total) || total < 1) total = 1;
  if (isNaN(today) || today < 1) today = 1;

  if (lastRecordedDate !== todayStr) {
    today = 1;
    localStorage.setItem(STORAGE_KEYS.LAST_DATE, todayStr);
    localStorage.setItem(STORAGE_KEYS.TODAY, today.toString());
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
    configured: true
  };
}

export async function pingAndGetStats(isHeartbeat = false): Promise<LiveVisitorData> {
  const sessionId = getSessionId();
  const todayStr = getTodayString();

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
        const storedTotal = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL) || '1', 10);
        const storedToday = parseInt(localStorage.getItem(STORAGE_KEYS.TODAY) || '1', 10);

        const safeStoredTotal = (isNaN(storedTotal) || storedTotal > 100) ? 1 : storedTotal;
        const safeStoredToday = (isNaN(storedToday) || storedToday > 100) ? 1 : storedToday;

        const total = (data.total > 0 && data.total < 500) ? data.total : safeStoredTotal;
        const today = (data.today > 0 && data.today < 500) ? data.today : safeStoredToday;

        localStorage.setItem(STORAGE_KEYS.TOTAL, total.toString());
        localStorage.setItem(STORAGE_KEYS.TODAY, today.toString());
        localStorage.setItem(STORAGE_KEYS.LAST_DATE, todayStr);

        return {
          live: Math.max(1, data.live || 1),
          today,
          total,
          configured: Boolean(data.configured)
        };
      }
    }
  } catch {
    // Ignore network error and fall back to local
  }

  return getLocalFallbackStats();
}
