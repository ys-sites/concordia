// Shape of a decrypted Midterm Gate (see scripts/encrypt-vault.mjs). One blob per course.

export type ExamKind = 'midterm' | 'quiz' | 'final' | 'homework';
export type AnswerStatus = 'verified' | 'key' | 'corrected' | 'unofficial';
export type MatchType = 'exact' | 'template' | 'concept';
export type Expectation = 'Very likely' | 'Likely' | 'Possible';

// Slide reference: l = lecture number (resolved by course.lectureMatch) or d = key in course.docs; s = page
export interface LectureRef {
  l?: number;
  d?: string;
  s?: number;
  label?: string;
}

export interface Exam {
  id: string;
  short: string;
  label: string;
  kind: ExamKind;
  detail: string;
  count: number;
  // counts as a past paper even though it is a final (only its in-scope questions are included)
  counts?: boolean;
}

export interface Subject {
  id: string;
  name: string;
  ch: string;
  blurb?: string;
  topics: string[];
}

export interface Topic {
  id: string;
  name: string;
  ch: string;
  lec: LectureRef[];
  cal: string;
  guide?: string;
}

// kind: mc · multi · tf · num · output · open; MIAE 221 also uses calc/concept/figure (treated as mc when opts exist)
export interface Question {
  id: string;
  exam: string;
  n: number | string;
  topic: string;
  kind: string;
  q: string;
  code?: string;
  solution?: string;
  opts?: string[];
  ans: string;
  keyAns?: string;
  unit?: string;
  tol?: number;
  status: AnswerStatus;
  note?: string;
  steps?: string[];
  f?: string[];
  drill?: boolean;
}

export interface Cluster {
  id: string;
  topic: string;
  match: MatchType;
  expect: Expectation;
  title: string;
  members: string[];
  changes: string;
  study: string;
  trap: string;
  refs: { lec?: LectureRef[]; cal?: string; guide?: string };
}

export interface Preset {
  label: string;
  from?: string;
  values: Record<string, string | number>;
}

export type QuizItem =
  | { type: 'exam'; id: string }
  | {
      type: 'calc';
      badge: string;
      q: string;
      code?: string;
      calc: string;
      values: Record<string, string | number>;
      vary?: VarySpec[];
      row: string;
      unit: string;
      tol?: number;
      hint?: string;
      anySign?: boolean;
    }
  | { type: 'value'; badge: string; q: string; answer: number; unit: string; tol?: number; steps: string[] }
  | { type: 'mc'; badge: string; q: string; code?: string; opts: string[]; ans: string; why: string }
  | { type: 'tf'; badge: string; q: string; code?: string; ans: boolean; why: string }
  | { type: 'output'; badge: string; q?: string; code: string; ans: string; why?: string }
  | { type: 'open'; badge: string; q: string; ans: string; steps?: string[]; solution?: string };

export type VarySpec =
  | { key: string; min: number; max: number; dp: number; mul?: number }
  | { key: string; pick: (string | number)[] }
  | { keys: string[]; pick: (string | number)[][] };

export interface WorkedExample {
  title: string;
  given: string;
  find: string;
  code?: string;
  steps: { say: string; tex?: string }[];
  answer: string;
}

export interface Lesson {
  idea: string;
  when: string[];
  example: WorkedExample;
  quiz: QuizItem[];
}

export interface Formula {
  id: string;
  topic: string;
  name: string;
  sheet?: boolean;
  calc: string | null;
  tex?: string;
  meaning: string;
  vars?: [string, string, string][];
  presets?: Preset[];
  steps: string[];
  traps: string[];
  seen: string[];
  lec: LectureRef[];
  guide?: string;
  cal: string;
  learn?: Lesson;
}

export interface Video {
  id: string;
  title: string;
  channel: string;
  len: string;
  role: 'learn' | 'worked' | 'extra';
  watch: string[];
}

export interface VideoStop {
  topic: string;
  title: string;
  why: string;
  videos: Video[];
  after: string;
  gate: string[];
  formulas: string[];
}

export type DrillTarget =
  | { scope: 'subject' | 'topic' | 'cluster'; id: string; mode?: 'all' | 'repeats' | 'oneoffs' | 'practice' }
  | { scope: 'repeats' | 'mock' | 'missed' | 'all' };

export interface PlanStep {
  id: string;
  text: string;
  kind: 'doc' | 'lesson' | 'videos' | 'drill' | 'cluster' | 'task';
  doc?: string;
  page?: number;
  lesson?: string;
  topic?: string;
  drill?: DrillTarget;
  minutes?: number;
}

export interface PlanPhase {
  title: string;
  when: string;
  goal: string;
  steps: PlanStep[];
}

export interface GradesaverTab {
  label: string;
  move: string;
  sequence: string;
  exemplar: { title: string; lines: string[] };
}

export interface GateContent {
  version: number;
  course: string;
  builtFor: string;
  midterm: { date: string | null; label: string; scope: string };
  labTitle: string;
  labBlurb: string;
  lectureMatch?: string;
  docs: Record<string, { title: string; path: string }>;
  overview: { headline: string; points: string[] };
  exams: Exam[];
  subjects: Subject[];
  topics: Topic[];
  questions: Question[];
  clusters: Cluster[];
  formulas: Formula[];
  videoStops: VideoStop[];
  plan: { intro: string; phases: PlanPhase[] };
  gradesaver?: {
    intro: string;
    docs: { title: string; path: string; size: number; tag: string; blurb: string }[];
    tabs: GradesaverTab[];
  };
}

export type GateDoc = 'plan' | 'analyzer' | 'formulas' | 'videos' | 'gradesaver';
export interface GateNav {
  openQuestion: (id: string) => void;
  openFormula: (id: string) => void;
  openTopicVideos: (topic: string) => void;
  openLecture: (ref: LectureRef) => void;
  openDoc: (key: string, page?: number) => void;
  openGuide: (part: string) => void;
  startDrill: (target: DrillTarget, title: string) => void;
  showTopic: (topic: string) => void;
}
