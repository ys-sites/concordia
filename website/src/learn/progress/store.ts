// Everything a student does, kept in this browser under one versioned key. No accounts: progress never leaves
// the device unless the student exports it. Every read and write is guarded, so the site works with storage
// blocked (private windows, previews): progress then lasts for the visit only.
import { useSyncExternalStore } from 'react';
import type { CourseId } from '../../types';

export const STORE_KEY = 'concordia.progress.v1';

export type Answer = number[] | string; // option indices, or the typed answer
export type Confidence = 'sure' | 'unsure';

export interface QuizSession {
  course: CourseId;
  lessonId: string;
  stepId: string;
  mode: 'check' | 'practice' | 'exam';
  order: string[]; // question ids, in the order asked (fixed for the session, so a reload returns to the same list)
  optionOrder: Record<string, number[]>; // shuffled option order per question
  i: number;
  answers: Record<string, Answer>;
  checked: Record<string, boolean>; // graded result per question (practice/check: when checked; exam: at the end)
  flags: string[];
  confidence: Record<string, Confidence>;
  hints: string[];
  revealed: string[]; // solutions shown before answering
  startedAt: number;
  elapsed: number; // seconds of active time
  timeLimit?: number; // seconds
  finished?: boolean;
  // "start easy, build up": the next question is picked after each answer, one level at a time
  adaptive?: { level: 1 | 2 | 3; size: number; pool: string[] };
  only?: 1 | 2 | 3; // a single difficulty level
}

export interface Attempt {
  course: CourseId;
  lessonId: string;
  stepId: string;
  mode: QuizSession['mode'];
  at: number;
  score: number;
  total: number;
  seconds: number;
  results: { q: string; ok: boolean }[];
}

export interface QuestionStat {
  seen: number;
  right: number;
  last: 0 | 1;
  lastAt: number;
  box: number; // Leitner box 1–5: wrong → 1, right → +1
  due: number; // when it should come back
  flagged?: boolean;
  unsure?: boolean;
  topic?: string;
  course?: CourseId;
}

export interface Place {
  course: CourseId;
  lessonId: string;
  stepId: string;
  title: string;
  lessonTitle: string;
  at: number;
}

export interface ProgressState {
  v: 1;
  steps: Record<string, number>; // `${course}/${stepId}` → completed at
  videos: Record<string, { t: number; d: number; at: number }>; // video id → position, duration
  quizzes: Record<string, QuizSession>; // `${course}/${stepId}` → session in progress (or just finished)
  attempts: Attempt[];
  questions: Record<string, QuestionStat>;
  last: Place | null;
  lastByCourse: Partial<Record<CourseId, Place>>;
  days: Record<string, number>; // YYYY-MM-DD → seconds studied
  notes: Record<string, string>; // `${course}/${lessonId}` → personal notes
  examDates: Partial<Record<CourseId, string>>;
  settings: { autoRead?: boolean; speed?: number; welcomed?: boolean };
  migrated?: number;
}

const empty = (): ProgressState => ({
  v: 1,
  steps: {},
  videos: {},
  quizzes: {},
  attempts: [],
  questions: {},
  last: null,
  lastByCourse: {},
  days: {},
  notes: {},
  examDates: {},
  settings: {}
});

const read = (): ProgressState => {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return empty();
    const s = JSON.parse(raw);
    return s && s.v === 1 ? { ...empty(), ...s } : empty();
  } catch {
    return empty();
  }
};

let state: ProgressState = typeof window === 'undefined' ? empty() : read();
const listeners = new Set<() => void>();
let saveTimer: ReturnType<typeof setTimeout> | null = null;

const persist = () => {
  saveTimer = null;
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked: keep the in-memory copy
  }
};

export const getProgress = () => state;

export function updateProgress(fn: (s: ProgressState) => ProgressState | void) {
  const draft = structuredClone(state);
  const next = fn(draft) ?? draft;
  state = next;
  listeners.forEach((l) => l());
  if (!saveTimer) saveTimer = setTimeout(persist, 250);
}

export function replaceProgress(next: ProgressState) {
  state = { ...empty(), ...next, v: 1 };
  listeners.forEach((l) => l());
  persist();
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => saveTimer && persist());
  // another tab changed progress
  window.addEventListener('storage', (e) => {
    if (e.key === STORE_KEY) {
      state = read();
      listeners.forEach((l) => l());
    }
  });
}

export function useProgress<T>(select: (s: ProgressState) => T): T {
  return useSyncExternalStore(subscribe, () => select(state), () => select(state));
}

// ── helpers ──────────────────────────────────────────────────────────────────────
export const stepKey = (course: CourseId, stepId: string) => `${course}/${stepId}`;
export const today = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const DAY = 86_400_000;
// Leitner intervals per box (days)
const INTERVAL = [0, 0, 1, 3, 7, 16];

export function markStep(course: CourseId, stepId: string, done = true) {
  updateProgress((s) => {
    const k = stepKey(course, stepId);
    if (done) s.steps[k] ??= Date.now();
    else delete s.steps[k];
  });
}

export function recordAnswer(id: string, ok: boolean, extra: { course?: CourseId; topic?: string; unsure?: boolean } = {}) {
  updateProgress((s) => {
    const q = (s.questions[id] ??= { seen: 0, right: 0, last: 0, lastAt: 0, box: 1, due: 0 });
    q.seen++;
    if (ok) q.right++;
    q.last = ok ? 1 : 0;
    q.lastAt = Date.now();
    // a right answer given while unsure only moves up once it is right and sure
    q.box = ok ? (extra.unsure ? Math.max(1, q.box) : Math.min(5, q.box + 1)) : 1;
    q.due = Date.now() + INTERVAL[q.box] * DAY;
    if (extra.unsure !== undefined) q.unsure = extra.unsure;
    if (extra.course) q.course = extra.course;
    if (extra.topic) q.topic = extra.topic;
  });
}

export function toggleFlag(id: string, course?: CourseId) {
  updateProgress((s) => {
    const q = (s.questions[id] ??= { seen: 0, right: 0, last: 0, lastAt: 0, box: 1, due: 0, course });
    q.flagged = !q.flagged;
  });
}

export function addStudyTime(seconds: number) {
  if (seconds <= 0) return;
  updateProgress((s) => {
    const d = today();
    s.days[d] = (s.days[d] ?? 0) + Math.round(seconds);
  });
}

export function streak(days: Record<string, number>): number {
  let n = 0;
  const d = new Date();
  // today counts if studied; otherwise the streak can still be alive from yesterday
  if (!days[today(d)]) d.setDate(d.getDate() - 1);
  while (days[today(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function setPlace(p: Omit<Place, 'at'>) {
  updateProgress((s) => {
    const place = { ...p, at: Date.now() };
    s.last = place;
    s.lastByCourse[p.course] = place;
  });
}

export function saveVideoPosition(id: string, t: number, d: number) {
  updateProgress((s) => {
    s.videos[id] = { t: Math.round(t), d: Math.round(d), at: Date.now() };
  });
}

export function exportProgress(): string {
  return JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 1);
}

export function importProgress(json: string): boolean {
  try {
    const s = JSON.parse(json);
    if (!s || s.v !== 1 || typeof s.steps !== 'object') return false;
    replaceProgress(s);
    return true;
  } catch {
    return false;
  }
}

export function resetCourse(course: CourseId) {
  updateProgress((s) => {
    const own = (k: string) => k.startsWith(course + '/');
    for (const k of Object.keys(s.steps)) if (own(k)) delete s.steps[k];
    for (const k of Object.keys(s.quizzes)) if (own(k)) delete s.quizzes[k];
    for (const k of Object.keys(s.notes)) if (own(k)) delete s.notes[k];
    for (const [k, q] of Object.entries(s.questions)) if (q.course === course) delete s.questions[k];
    s.attempts = s.attempts.filter((a) => a.course !== course);
    delete s.lastByCourse[course];
    if (s.last?.course === course) s.last = null;
  });
}
