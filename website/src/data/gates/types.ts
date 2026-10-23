// Shape of a course's exam-prep content (formerly the encrypted "Midterm Gate"). One module per course in this folder.
import type { MotionLesson } from '../engr213Lessons';

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
      src?: string;
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
  | { type: 'value'; badge: string; src?: string; q: string; answer: number; unit: string; tol?: number; steps: string[] }
  | { type: 'mc'; badge: string; src?: string; q: string; code?: string; opts: string[]; ans: string; why: string }
  | { type: 'tf'; badge: string; src?: string; q: string; code?: string; ans: boolean; why: string }
  | { type: 'output'; badge: string; src?: string; q?: string; code: string; ans: string; why?: string }
  | { type: 'open'; badge: string; src?: string; q: string; ans: string; steps?: string[]; solution?: string };

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
  | { scope: 'repeats' | 'mock' | 'missed' | 'all' }
  | { scope: 'custom'; items: any[] };

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
  // narrated solve video per question, keyed by drill key (exam question id or "L:<lesson>:<index>")
  solveVideos?: Record<string, MotionLesson>;
  plan: { intro: string; phases: PlanPhase[] };
  paperDoc?: PaperDoc;
  gradesaver?: {
    intro: string;
    docs: { title: string; path: string; size: number; tag: string; blurb: string }[];
    tabs: GradesaverTab[];
  };
  gordonMatches?: GordonMatchesData;
  gordonExamsData?: GordonExamsData;
}

export interface GordonTraceTable {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}

export interface GordonExamQuestion {
  id: string;
  part: string;
  title: string;
  points?: string;
  weight?: string;
  description: string;
  codeSnippet: string;
  expectedOutput?: string;
  traceTable?: GordonTraceTable;
  conceptsTested: string[];
  trapAlert?: string;
  solutionNotes?: string;
}

export interface GordonExamPaper {
  id: string;
  term: string;
  title: string;
  officialWeight: string;
  format: string;
  overview: string;
  officialNotes?: string[];
  questions: GordonExamQuestion[];
  fullProgramCode?: string;
  videoPlaceholder?: {
    title: string;
    description: string;
    duration: string;
  };
  similarQuestionsAnalysis?: {
    currentQuestionPart: string;
    similarGordonExam: string;
    whyItMatches: string;
    coreLesson: string;
  }[];
}

export interface GordonTopicFrequency {
  topic: string;
  frequency: number;
  frequencyLabel: string;
  category: string;
  examOccurrences: string[];
  description: string;
  trapWarning: string;
}

export interface GordonTrapAnalysis {
  trapName: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  exampleSnippet: string;
  whatStudentsDoWrong: string;
  correctBehavior: string;
  gordonQuote?: string;
}

export interface GordonExamsData {
  summary: string;
  analytics: {
    weightDistribution: {
      tracingPercentage: number;
      codingPercentage: number;
      excludedPercentage: number;
      rulesSummary: string[];
    };
    topicFrequencies: GordonTopicFrequency[];
    topTraps: GordonTrapAnalysis[];
    strategyTips: string[];
  };
  papers: GordonExamPaper[];
}

export interface GordonMatchItem {
  id: string;
  title: string;
  gordonSource?: string;
  matchType?: string;
  relatedGordonQuestion?: string;
  similarity?: string;
  codeSnippet: string;
  output: string;
  explanation?: string;
  studyNote?: string;
}

export interface GordonMatchesData {
  summary: string;
  identicalQuestions: GordonMatchItem[];
  similarQuestionsToReview: GordonMatchItem[];
}

// Skill Quiz question types: repeated on past papers, similar, asked once, other possible questions
export type QuizCat = 'repeat' | 'similar' | 'once' | 'possible';
export interface QuizPreset {
  topics?: string[];
  subjects?: string[];
  cats?: QuizCat[];
}

export type GateDoc = 'plan' | 'topics' | 'analyzer' | 'quiz' | 'gradesaver' | 'solved' | 'exam' | 'gordon';

// ── solved-paper page (course badge only; see paper-a.mjs in the INDU 211 gate source) ──
export type DocCell = string | { v: string; c?: number; hl?: boolean };
export interface BomNode {
  n: string;
  q?: number; // units per one unit of the parent
  note?: string;
  k?: BomNode[];
}
export type DocBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'steps'; title?: string; items: { say: string; tex?: string }[] }
  | { type: 'formula'; tex: string; caption?: string }
  | { type: 'callout'; tone: 'study' | 'trap' | 'tip'; title: string; text: string }
  | { type: 'compare'; cols: { title: string; items: string[] }[] }
  | { type: 'table'; head: string[]; rows: DocCell[][]; caption?: string }
  | { type: 'bom'; trees: BomNode[]; caption?: string }
  | { type: 'costchart'; caption?: string; qMax: number; demand?: number; lines: { name: string; F: number; v: number }[]; cross: { q: number; label: string }[] }
  | { type: 'ranges'; caption?: string; max: number; segs: { from: number; to: number; label: string }[] };

export interface PaperPart {
  id: string; // the drill question with the same id
  n: string;
  marks: number;
  part?: string;
  topic: string;
  lesson?: string;
  lec: LectureRef[];
  q: string;
  opts?: string[];
  ans?: string;
  figure?: DocBlock;
  answerTable?: { head: string[]; rows: string[][] };
  think: string[];
  steps: string[];
  trap?: string;
  graded?: string;
  // vs the earlier exams: asked before / same idea from a new angle / first time
  compare?: { match: 'repeat' | 'similar' | 'new'; with: { src: string; q: string }[]; changed: string };
}

// The exam itself, page by page as handed out ("**bold**" in text)
export type ExamCell = string | { v: string; i?: boolean };
export interface ExamTable {
  type: 'table';
  head: string[];
  rows: ExamCell[][];
  diag?: [string, string]; // top-left cell split diagonally, e.g. ["To", "From"]
  title?: string;
  wide?: boolean;
}
export type ExamBlock =
  | { type: 'instructions'; text: string }
  | { type: 'h'; text: string; after?: string }
  | { type: 'p'; text: string }
  | { type: 'note'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'mc'; n: string; q: string; opts: string[]; table?: ExamTable }
  | ExamTable
  | { type: 'bom'; trees: BomNode[] }
  | { type: 'sub'; n: string; text: string; answers?: string[] }
  | { type: 'tf'; items: [string, string][] };
export interface ExamDoc {
  header: string;
  pages: ExamBlock[][];
}

export interface PaperDoc {
  exam?: ExamDoc;
  compareIntro?: string;
  title: string;
  subtitle: string;
  facts: [string, string][];
  byChapter: { ch: string; name: string; marks: number; where: string }[];
  howTo: string[];
  problems: { id: string; title: string; marks: number; ch?: string; lec?: LectureRef[]; intro: string; figures?: DocBlock[]; note?: string; items: PaperPart[] }[];
  ch3: { title: string; intro: string; sections: { id: string; title: string; lec: LectureRef[]; blocks: DocBlock[] }[]; checklist: string[] };
}
export interface GateNav {
  openQuestion: (id: string) => void;
  openFormula: (id: string) => void;
  openTopicVideos: (topic: string) => void;
  openLecture: (ref: LectureRef) => void;
  openDoc: (key: string, page?: number) => void;
  openGuide: (part: string) => void;
  startDrill: (target: DrillTarget, title: string) => void;
  showTopic: (topic: string) => void;
  openQuiz: (preset?: QuizPreset) => void;
  openAnalytics: () => void;
  openGordon?: () => void;
}
