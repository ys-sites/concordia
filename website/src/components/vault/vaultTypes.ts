// Shape of the decrypted Midterm Gate content (see scripts/encrypt-vault.mjs).

export type ExamKind = 'midterm' | 'final' | 'homework';
export type QuestionKind = 'calc' | 'concept' | 'tf' | 'figure';
export type AnswerStatus = 'verified' | 'key' | 'corrected' | 'unofficial';
export type MatchType = 'exact' | 'template' | 'concept';
export type Expectation = 'Very likely' | 'Likely' | 'Possible';

export interface LectureRef {
  l: number;
  s: number;
  label?: string;
}

export interface Exam {
  id: string;
  short: string;
  label: string;
  kind: ExamKind;
  detail: string;
  count: number;
}

export interface Topic {
  id: string;
  name: string;
  ch: string;
  lec: LectureRef[];
  cal: string;
  guide?: string;
}

export interface Question {
  id: string;
  exam: string;
  n: number;
  topic: string;
  kind: QuestionKind;
  q: string;
  opts?: string[];
  ans: string;
  keyAns?: string;
  status: AnswerStatus;
  note?: string;
  f?: string[];
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

export interface Formula {
  id: string;
  topic: string;
  name: string;
  sheet: boolean;
  calc: string | null;
  tex: string;
  meaning: string;
  vars: [string, string, string][];
  presets: Preset[];
  steps: string[];
  traps: string[];
  seen: string[];
  lec: LectureRef[];
  guide?: string;
  cal: string;
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

export interface GateContent {
  version: number;
  builtFor: string;
  midtermDate: string;
  overview: { headline: string; points: string[] };
  exams: Exam[];
  topics: Topic[];
  questions: Question[];
  clusters: Cluster[];
  formulas: Formula[];
  videoStops: VideoStop[];
}

// Cross-document navigation inside the gate (e.g. a video stop linking to a question)
export type GateDoc = 'analyzer' | 'formulas' | 'videos';
export interface GateNav {
  openQuestion: (id: string) => void;
  openFormula: (id: string) => void;
  openTopicVideos: (topic: string) => void;
  openLecture: (ref: LectureRef) => void;
  openGuide: (part: string) => void;
}
