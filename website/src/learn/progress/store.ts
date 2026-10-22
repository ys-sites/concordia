// Everything a student does, kept in this browser only. There are no accounts and nothing is sent anywhere, so
// each visitor sees their own progress and nobody else's. Every read and write is guarded, so the site works with
// storage blocked (private windows, previews): progress then lasts for the visit only.
//
// Progress has to survive every future deploy untouched. The rules that make that true:
//   · the storage key never changes (it says v1 for history); the schema version lives inside the record (v)
//   · a change to the shape of stored data bumps VERSION and adds a step to MIGRATIONS, which upgrades old
//     records in place; nothing is dropped, and the record as it was before the upgrade is kept under BACKUP_KEY
//   · fields this build does not know are carried along untouched (changes edit the stored record in place)
//   · a tab still running an older build than the one that saved the record stops saving and asks for a reload
//   · each change is replayed onto the latest stored copy when saving, so two open tabs merge, not overwrite
//   · the ids progress points at (lessons, steps, questions, videos, schedule events) are locked by
//     `npm run validate:curriculum`; an id that has to change is mapped old → new in ./aliases.ts
import { useSyncExternalStore } from 'react';
import type { CourseId } from '../../types';
import { ID_ALIASES } from './aliases';

export const STORE_KEY = 'concordia.progress.v1';
const BACKUP_KEY = 'concordia.progress.backup';
export const VERSION = 2;

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

export type Urgency = 'low' | 'medium' | 'high';
export type ReminderKind = 'midterm' | 'final' | 'quiz' | 'assignment' | 'project' | 'other';

// A reminder the student added. Their changes to a course schedule event (src/learn/schedule.ts) are kept
// apart, in scheduleEdits, so a corrected course date still reaches them.
export interface Reminder {
  id: string;
  course: CourseId | null; // null: not tied to one course
  kind: ReminderKind;
  title: string; // "Midterm 1", "WeBWorK A5"
  date: string; // YYYY-MM-DD
  time?: string; // "2:00–3:45 PM"
  detail?: string; // what it covers, what to bring, where
  urgency: Urgency;
  done?: boolean;
  cancelled?: boolean; // hidden from the lists; can be restored
  createdAt: number;
}

export interface ProgressState {
  v: number;
  steps: Record<string, number>; // `${course}/${stepId}` → completed at
  videos: Record<string, { t: number; d: number; at: number }>; // video id → position, duration
  quizzes: Record<string, QuizSession>; // `${course}/${stepId}` → session in progress (or just finished)
  attempts: Attempt[];
  questions: Record<string, QuestionStat>;
  last: Place | null;
  lastByCourse: Partial<Record<CourseId, Place>>;
  days: Record<string, number>; // YYYY-MM-DD → seconds studied
  notes: Record<string, string>; // `${course}/${lessonId}` → personal notes
  reminders: Reminder[];
  scheduleEdits: Record<string, Partial<Reminder>>; // schedule event id → this student's changes (done, cancelled, urgency…)
  settings: { autoRead?: boolean; speed?: number; welcomed?: boolean };
  migrated?: number;
}

const empty = (): ProgressState => ({
  v: VERSION,
  steps: {},
  videos: {},
  quizzes: {},
  attempts: [],
  questions: {},
  last: null,
  lastByCourse: {},
  days: {},
  notes: {},
  reminders: [],
  scheduleEdits: {},
  settings: {}
});

// MIGRATIONS[n] upgrades a version-n record to version n + 1, in place. Add one whenever VERSION goes up.
const MIGRATIONS: Record<number, (s: Record<string, any>) => void> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  // v1 → v2: the single exam date per course becomes a reminder the student can edit and add detail to
  1: (s) => {
    s.reminders = Array.isArray(s.reminders) ? s.reminders : [];
    for (const [course, date] of Object.entries(s.examDates ?? {}))
      if (typeof date === 'string' && date) s.reminders.push({ id: `exam-${course}`, course, kind: 'midterm', title: 'Midterm', date, urgency: 'high', createdAt: Date.now() });
    delete s.examDates;
  }
};

const OBJECT_FIELDS = ['steps', 'videos', 'quizzes', 'questions', 'lastByCourse', 'days', 'notes', 'scheduleEdits', 'settings'] as const;
const ARRAY_FIELDS = ['attempts', 'reminders'] as const;
const isObj = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x);

// a renamed id keeps its progress: everything kept under the old id moves to the new one
function applyAliases(s: ProgressState) {
  const pairs = Object.entries(ID_ALIASES);
  if (!pairs.length) return;
  const rename = (id: string) => ID_ALIASES[id] ?? id;
  const local = (course: string, id: string) => ID_ALIASES[`${course}/${id}`]?.split('/')[1] ?? id;
  for (const rec of [s.steps, s.quizzes, s.notes, s.questions, s.videos, s.scheduleEdits] as Record<string, unknown>[])
    for (const [from, to] of pairs)
      if (from in rec) {
        if (!(to in rec)) rec[to] = rec[from];
        delete rec[from];
      }
  for (const pl of [s.last, ...Object.values(s.lastByCourse)]) if (pl) Object.assign(pl, { lessonId: local(pl.course, pl.lessonId), stepId: local(pl.course, pl.stepId) });
  for (const a of s.attempts) Object.assign(a, { lessonId: local(a.course, a.lessonId), stepId: local(a.course, a.stepId), results: a.results.map((r) => ({ ...r, q: rename(r.q) })) });
  for (const q of Object.values(s.quizzes)) q.order = q.order.map(rename);
  for (const r of s.reminders) r.id = rename(r.id);
}

interface Loaded {
  state: ProgressState;
  newer: boolean; // saved by a newer build than this one
}

// Parse, upgrade and repair a stored record. Never throws; a record it cannot read is backed up, not lost.
function load(raw: string | null): Loaded {
  if (!raw) return { state: empty(), newer: false };
  let s: Record<string, unknown>;
  try {
    s = JSON.parse(raw);
    if (!isObj(s)) throw new Error('not a progress record');
  } catch {
    safeSet(BACKUP_KEY, raw);
    return { state: empty(), newer: false };
  }
  const v = typeof s.v === 'number' && s.v >= 1 ? s.v : 1;
  if (v < VERSION) {
    safeSet(BACKUP_KEY, raw);
    for (let n = v; n < VERSION; n++) MIGRATIONS[n]?.(s);
    s.v = VERSION;
  }
  const out = { ...empty(), ...s } as ProgressState;
  const loose = out as unknown as Record<string, unknown>;
  for (const f of OBJECT_FIELDS) if (!isObj(loose[f])) loose[f] = {};
  for (const f of ARRAY_FIELDS) if (!Array.isArray(loose[f])) loose[f] = [];
  if (!isObj(out.last)) out.last = null;
  if (v <= VERSION) applyAliases(out);
  return { state: out, newer: v > VERSION };
}

function safeGet(): string | null | undefined {
  try {
    return localStorage.getItem(STORE_KEY);
  } catch {
    return undefined; // storage blocked
  }
}
function safeSet(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false; // storage full or blocked
  }
}

type Change = (s: ProgressState) => ProgressState | void;
const apply = (base: ProgressState, changes: Change[]) => {
  let d = structuredClone(base);
  for (const fn of changes) d = fn(d) ?? d;
  return d;
};

const initial: Loaded = typeof window === 'undefined' ? { state: empty(), newer: false } : load(safeGet() ?? null);
let state: ProgressState = initial.state;
let blocked = initial.newer; // a newer build owns the stored record: this tab must not write over it
let pending: Change[] = []; // changes made since the last save
const listeners = new Set<() => void>();
let saveTimer: ReturnType<typeof setTimeout> | null = null;
const notify = () => listeners.forEach((l) => l());

// Replay this tab's changes onto whatever is stored now: another tab may have saved since this one read it
const persist = () => {
  saveTimer = null;
  if (blocked || !pending.length) return;
  const raw = safeGet();
  if (raw === undefined) return; // storage blocked: the in-memory copy is all there is
  const latest = load(raw);
  if (latest.newer) {
    blocked = true;
    notify();
    return;
  }
  const next = apply(latest.state, pending);
  if (!safeSet(STORE_KEY, JSON.stringify(next))) return; // storage full: keep the changes pending, retry on the next one
  pending = [];
  state = next;
  notify();
};

export const getProgress = () => state;

export function updateProgress(fn: Change) {
  state = apply(state, [fn]);
  pending.push(fn);
  notify();
  if (!saveTimer) saveTimer = setTimeout(persist, 250);
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', persist);
  document.addEventListener('visibilitychange', () => document.visibilityState === 'hidden' && persist());
  // another tab saved: take its copy, with this tab's unsaved changes on top
  window.addEventListener('storage', (e) => {
    if (e.key !== STORE_KEY || e.newValue === null) return;
    const latest = load(e.newValue);
    blocked = blocked || latest.newer;
    state = apply(latest.state, pending);
    notify();
  });
}

// true when a newer build of the site saved progress after this tab loaded: this tab needs a reload to save again
export const useSaveBlocked = () => useSyncExternalStore(subscribe, () => blocked, () => false);

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

export function saveReminder(r: Reminder) {
  updateProgress((s) => {
    const i = s.reminders.findIndex((x) => x.id === r.id);
    if (i >= 0) s.reminders[i] = { ...s.reminders[i], ...r };
    else s.reminders.push(r);
  });
}

export function deleteReminder(id: string) {
  updateProgress((s) => {
    s.reminders = s.reminders.filter((x) => x.id !== id);
  });
}

// changes: the fields to set; null clears the student's change so the course value shows again
export function editScheduled(id: string, changes: { [K in keyof Reminder]?: Reminder[K] | null }) {
  updateProgress((s) => {
    const e = { ...s.scheduleEdits[id] } as Record<string, unknown>;
    for (const [k, v] of Object.entries(changes)) if (v === null) delete e[k];
    else e[k] = v;
    if (Object.keys(e).length) s.scheduleEdits[id] = e as Partial<Reminder>;
    else delete s.scheduleEdits[id];
  });
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
