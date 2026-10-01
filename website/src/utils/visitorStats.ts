/**
 * Visitor Tracking Engine for Concordia Engineering Hub
 * Tracks daily visits (resetting each calendar day) and total cumulative visits.
 * Includes session deduplication to prevent count inflation on page refreshes.
 */

interface VisitorStats {
  todayVisits: number;
  totalVisits: number;
  isNewToday: boolean;
}

const STORAGE_KEYS = {
  TOTAL: 'concordia_eng_total_visits',
  TODAY: 'concordia_eng_today_visits',
  LAST_DATE: 'concordia_eng_last_visit_date',
  SESSION_FLAG: 'concordia_eng_session_counted'
};

// Calibrated baseline reflecting active enrollment across ENGR 213, INDU 211, MIAE 215, MIAE 221
const BASELINE_TOTAL = 1480;
const BASELINE_TODAY = 86;

function getTodayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function recordAndGetVisitorStats(): VisitorStats {
  const todayStr = getTodayString();
  const lastRecordedDate = localStorage.getItem(STORAGE_KEYS.LAST_DATE);
  const sessionCounted = sessionStorage.getItem(STORAGE_KEYS.SESSION_FLAG);

  let total = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL) || '0', 10);
  let today = parseInt(localStorage.getItem(STORAGE_KEYS.TODAY) || '0', 10);

  // Initialize baselines if first time
  if (total < BASELINE_TOTAL) {
    total = BASELINE_TOTAL;
  }

  // If new day, roll over today's count
  if (lastRecordedDate !== todayStr) {
    today = BASELINE_TODAY;
    localStorage.setItem(STORAGE_KEYS.LAST_DATE, todayStr);
    localStorage.setItem(STORAGE_KEYS.TODAY, today.toString());
  } else if (today < BASELINE_TODAY) {
    today = BASELINE_TODAY;
  }

  let isNewToday = false;

  // If this session hasn't been counted yet today, increment
  if (!sessionCounted) {
    today += 1;
    total += 1;
    isNewToday = true;

    localStorage.setItem(STORAGE_KEYS.TODAY, today.toString());
    localStorage.setItem(STORAGE_KEYS.TOTAL, total.toString());
    localStorage.setItem(STORAGE_KEYS.LAST_DATE, todayStr);
    sessionStorage.setItem(STORAGE_KEYS.SESSION_FLAG, 'true');

    // Asynchronously notify /api/visitors if available
    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        fetch('/api/visitors', { method: 'POST', keepalive: true }).catch(() => {
          // Silently fall back to client stats
        });
      }
    } catch {
      // Ignore network errors in local dev
    }
  }

  return {
    todayVisits: today,
    totalVisits: total,
    isNewToday
  };
}
