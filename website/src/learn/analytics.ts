// Browser-local learning metrics. Nothing in this file is transmitted: the data
// stays beside progress in this browser and is used for the local funnel UI/QA.
// Never attach names, email addresses, search text, notes, or answers.
export type StudyEvent =
  | 'lesson_start'
  | 'step_complete'
  | 'quiz_start'
  | 'quiz_complete'
  | 'quiz_abandon'
  | 'video_progress'
  | 'search'
  | 'next_clicked'
  | 'helpful_yes'
  | 'helpful_no'
  | 'report_problem';

type Value = string | number | boolean | null | undefined;

const METRICS_KEY = 'concordia.metrics.v1';

interface LocalMetrics {
  counts: Partial<Record<StudyEvent, number>>;
  recent: { name: StudyEvent; at: number; properties: Record<string, Value> }[];
}

export function trackStudy(name: StudyEvent, properties: Record<string, Value> = {}) {
  try {
    const parsed = JSON.parse(localStorage.getItem(METRICS_KEY) ?? '{}') as Partial<LocalMetrics>;
    const metrics: LocalMetrics = { counts: parsed.counts ?? {}, recent: Array.isArray(parsed.recent) ? parsed.recent : [] };
    metrics.counts[name] = (metrics.counts[name] ?? 0) + 1;
    metrics.recent.push({ name, at: Date.now(), properties });
    if (metrics.recent.length > 500) metrics.recent.splice(0, metrics.recent.length - 500);
    localStorage.setItem(METRICS_KEY, JSON.stringify(metrics));
  } catch {
    // Metrics must never interrupt studying (including blocked/full storage).
  }
}

export function trackStudyOnce(key: string, name: StudyEvent, properties: Record<string, Value> = {}) {
  try {
    const storageKey = `concordia.event.${key}`;
    if (sessionStorage.getItem(storageKey)) return;
    sessionStorage.setItem(storageKey, '1');
  } catch {
    // A blocked session store should not block the event or learning flow.
  }
  trackStudy(name, properties);
}

export function scoreBucket(score: number, total: number) {
  if (!total) return 'empty';
  const pct = score / total;
  return pct < 0.4 ? '0-39' : pct < 0.6 ? '40-59' : pct < 0.8 ? '60-79' : pct < 1 ? '80-99' : '100';
}

export function countBucket(count: number) {
  return count === 0 ? '0' : count <= 5 ? '1-5' : count <= 20 ? '6-20' : count <= 50 ? '21-50' : '51+';
}
