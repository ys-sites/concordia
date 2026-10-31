// Hand-written course specs: the teaching order and what feeds each lesson. The builder
// (learn/build/buildCurriculum.ts) turns a spec plus the course data into the Curriculum the site shows.
import type { CourseId } from '../../types';
import type { StepKind } from '../model';

// Routes practice-bank questions: every question of chapter `ch` whose topic or text matches `re`
// (or every remaining question of `ch` when `re` is left out) belongs to the lesson.
export interface BankRule {
  ch: string;
  re?: RegExp;
  not?: RegExp;
}

// Routes ENGR 213 method-drill questions by `methodId`, optionally by topic
export interface DrillRule {
  method: string;
  re?: RegExp;
}

// A hand-placed step, for lessons the builder cannot derive (code lab, exam papers…)
export interface StepSpec {
  kind: StepKind;
  title: string;
  slug: string;
  minutes?: number;
  optional?: boolean;
  videoId?: string;
  youtubeId?: string;
  refVideoId?: string;
  docs?: RegExp[];
  notesKey?: string;
  questions?: { teacher?: RegExp; teacherIds?: string[]; gordonPaper?: string; ids?: string[]; examId?: string; gateTopics?: string[] };
  size?: number;
  timeLimit?: number;
  ordered?: boolean;
  toolId?: string;
}

export interface LessonSpec {
  id: string;
  title: string;
  summary: string;
  objectives?: string[];
  gate?: string[]; //        exam-prep topics (src/data/gates): notes, worked example, lesson items, past-exam questions, YouTube
  bank?: BankRule[];
  drill?: DrillRule[];
  teacher?: RegExp; //       teacher-paper questions whose topic matches
  videos?: string[]; //      motion-lesson ids from learn/videoSources.ts, in watching order
  youtube?: string[]; //     extra YouTube ids (MIAE 221 companion)
  read?: RegExp[]; //        documents to read as steps, matched against the path inside the course folder
  resources?: RegExp[]; //   documents listed under the lesson's Resources tab
  tools?: string[];
  steps?: StepSpec[]; //     replaces the derived steps entirely
  after?: StepSpec[]; //     appended after the derived steps
}

export interface SectionSpec {
  id: string;
  title: string;
  subtitle: string;
  midterm?: boolean;
  examPrep?: boolean;
  lessons: LessonSpec[];
}

export interface CourseSpec {
  id: CourseId;
  whatYouLearn: string[];
  sections: SectionSpec[];
  // exam prep, appended as the last sections: one lesson per past paper (from the exam-prep data), the
  // practice bank's past-paper chapters, a mock midterm over the midterm sections, plus course extras
  examPrep: {
    bankPast: { ch: string; title: string; summary: string }[];
    mock: { title: string; size: number; minutes: number };
    extra?: SectionSpec[];
  };
}
