// The one content model every course follows: course → sections → lessons → steps.
// The curriculum (ids, titles, order, durations, which questions/videos/documents each step uses) is computed
// at build time (virtual:curriculum, see build/buildCurriculum.ts); the content behind a step (question text,
// notes, worked examples) loads per course when the step opens.
import type { CourseId, SolutionStep } from '../types';

export type StepKind =
  | 'video' //    a motion lesson (the course's own narrated video)
  | 'notes' //    key ideas, when to use, the recipe and the traps, with the teacher's slides
  | 'reading' //  a document to read (teacher slides, guide), opened in the stage
  | 'worked' //   a worked example, one step at a time
  | 'check' //    3–5 questions with instant feedback
  | 'practice' // a practice set (feedback after each question)
  | 'exam' //     past-exam questions; timed when `timeLimit` is set
  | 'tool' //     an interactive tool (formula lab, C++ simulator, TSP simulator…)
  | 'extra'; //   an optional outside video (YouTube)

export interface DocRef {
  path: string; // CourseDocument.relativePath ("Miae 221/01 - Teacher Lecture Notes/…pdf")
  title: string;
  page?: number;
  label?: string; // what to look at ("Planes, worked example")
}

export interface YouTubeRef {
  id: string;
  title: string;
  channel: string;
  len: string;
  watch?: string[];
}

export interface Step {
  id: string; // stable within the course: `${lessonId}.${slug}`
  kind: StepKind;
  title: string;
  minutes: number;
  optional?: boolean;
  videoId?: string; // key in the video registry (learn/videos.ts)
  youtube?: YouTubeRef;
  docs?: DocRef[];
  formulaIds?: string[]; // exam-prep lesson ids (src/data/gates) behind notes / worked / tool steps
  notesKey?: string; // extra notes source ("gradesaver", "clusters", "gordon:<paper>")
  questionIds?: string[]; // LearnQuestion ids, in the order to ask them
  size?: number; // practice: how many to draw per attempt (0 = all)
  passMark?: number; // 0–1, for check / practice / exam
  timeLimit?: number; // minutes, exam mode
  ordered?: boolean; // keep the paper's order
  toolId?: string; // 'formula:<calcId>' | 'cpp-sim:<traceId>' | 'cpp-lab:<challengeId>' | 'tsp'
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  objectives: string[];
  topicTags: string[];
  minutes: number;
  steps: Step[];
  exam?: boolean; // lives in an exam-prep section
  thumb?: string; // poster path of the lesson's first video, if any
}

export interface Section {
  id: string;
  title: string;
  subtitle: string; // "Ch 2.2–2.5 · Lectures 3–5"
  midterm?: boolean; // in the midterm's scope
  examPrep?: boolean;
  lessons: Lesson[];
}

export interface ResourceGroup {
  title: string;
  docs: DocRef[];
}

export interface CourseStats {
  sections: number;
  lessons: number;
  steps: number;
  minutes: number;
  videos: number;
  videoMinutes: number;
  questions: number;
  documents: number;
}

// One card per video, at its one home in the curriculum (the Videos tab lists these by section)
export interface VideoCard {
  id: string; // video id (learn/videoSources.ts) or `yt:<youtube id>`
  kind: 'lesson' | 'solution' | 'walkthrough' | 'extra';
  title: string;
  source?: string;
  seconds: number;
  poster?: string;
  chapters?: number;
  sectionId: string;
  lessonId: string;
  stepId: string;
  questionId?: string; // solution videos: the question they solve
}

export interface Curriculum {
  id: CourseId;
  midterm: { label: string; date: string | null; scope: string };
  whatYouLearn: string[];
  sections: Section[];
  videos: VideoCard[];
  resources: ResourceGroup[];
  stats: CourseStats;
}

// ── questions ────────────────────────────────────────────────────────────────────
// Every question source is turned into this shape by learn/questions (bank, teacher papers, ENGR 213 method
// drills, past-exam questions, lesson practice items, Dr. Gordon's papers).
export type QuestionKind =
  | 'mc' //    one correct option
  | 'multi' // select all that apply
  | 'tf' //    true / false
  | 'num' //   type a number (tolerance)
  | 'text' //  type the program's output
  | 'self'; // open question: reveal the solution and mark yourself

export type QuestionOrigin = 'bank' | 'teacher' | 'drill' | 'exam' | 'lesson' | 'gordon';

export interface LearnQuestion {
  id: string;
  courseId: CourseId;
  origin: QuestionOrigin;
  kind: QuestionKind;
  prompt: string; // text with inline $…$ maths
  code?: string;
  formula?: string;
  figure?: { src: string; alt: string; caption?: string };
  options?: string[];
  correct: number[]; // option indices (mc, multi, tf: 0 = True, 1 = False)
  keepOrder?: boolean;
  value?: number; // num
  tol?: number; // relative tolerance, num
  unit?: string;
  answerText: string; // the answer as shown after checking
  topic: string;
  difficulty?: string;
  source?: string; // "Winter 2017 First Midterm · Q1a", "Lecture 3, Example 2"
  pastPaper?: boolean;
  hint?: string;
  explain: {
    concept?: string;
    lines?: string[]; // short reasoning lines with inline maths
    steps?: SolutionStep[]; // baby-step worked solution
    answerTex?: string;
    whyWrong?: Record<number, string>; // by option index (before shuffling)
    trap?: string;
    note?: string;
    solution?: string; // a full written solution (code or prose)
    reference?: string;
  };
  videoId?: string; // a solution video for exactly this question
  regen?: () => LearnQuestion | null; // "new numbers" for calculator items
  raw?: unknown; // the original object, for components that render it natively (WorkedSolution)
}

// Question ids say where a question comes from: b: bank · t: teacher paper · d: ENGR 213 method drill ·
// x:<COURSE>: past-exam question · l:<COURSE>:<lesson>: lesson practice item · g: Dr. Gordon paper
export const questionCourse = (id: string): CourseId | null => {
  const m = id.match(/^(?:x|l|g):([A-Z]+\d+):/);
  if (m) return m[1] as CourseId;
  const n = id.match(/_(ENGR213|INDU211|MIAE215|MIAE221)_/);
  if (n) return n[1] as CourseId;
  return id.startsWith('d:') ? 'ENGR213' : null;
};
