import { CourseId, PracticeQuestion } from '../types';
import { PRACTICE_QUESTIONS } from './questionsData';

// Drill sections per course. Every question's `chapter` must match one of these ids.
// `midterm` lists the sections the midterm covers; a "Midterm Review" drill mixes them.
export interface QuizSection {
  id: string;
  label: string;
  detail: string; // lectures / textbook sections it is built from
}

export interface CourseQuizPlan {
  midterm: { label: string; detail: string; sections: string[] };
  sections: QuizSection[];
}

export const MIDTERM_SECTION_ID = 'midterm';
export const DRILL_LENGTH = 20;

export const QUIZ_PLANS: Record<CourseId, CourseQuizPlan> = {
  ENGR213: {
    midterm: {
      label: 'Midterm Review — Chapters 1 & 2',
      detail: 'Mixed questions from Lectures 1–6 (Textbook §1.1–2.7)',
      sections: ['ch1', 'ch2']
    },
    sections: [
      { id: 'ch1', label: 'Chapter 1 — Introduction to Differential Equations', detail: 'Lectures 1–2 · Textbook §1.1–1.2: terminology, solutions, IVPs, existence & uniqueness' },
      { id: 'ch2', label: 'Chapter 2 — First-Order Differential Equations', detail: 'Lectures 2–6 · Textbook §2.1–2.5, 2.7: direction fields, separable, linear, exact, substitutions, linear models' }
    ]
  },
  INDU211: {
    midterm: {
      label: 'Midterm Review — Chapters 1 to 5',
      detail: 'Mixed questions from lecture slides 1.0–5.0',
      sections: ['ch1-2', 'ch3', 'ch4', 'ch5']
    },
    sections: [
      { id: 'ch1-2', label: 'Chapters 1 & 2 — Engineering & IE Foundations', detail: 'Lecture 1.0: science vs engineering, ethics, IE chronology, systems, decision levels' },
      { id: 'ch3', label: 'Chapter 3 — Manufacturing Engineering', detail: 'Lecture 2.0: concurrent engineering, BOM, break-even, process selection, industrial processes' },
      { id: 'ch4', label: 'Chapter 4 — Facilities Location & Layout', detail: 'Lectures 3.0–4.0: distances, transportation method, center of gravity, layout types' },
      { id: 'ch5', label: 'Chapter 5 — Material Handling & Routing', detail: 'Lecture 5.0: handling equipment & principles, TSP, VRP, Clark-Wright' }
    ]
  },
  MIAE215: {
    midterm: {
      label: 'Midterm Review — All Topics So Far',
      detail: 'Mixed questions from every lecture posted so far',
      sections: ['intro', 'types', 'expr', 'control']
    },
    sections: [
      { id: 'intro', label: '1 · Computing Basics & the Build Process', detail: 'Introduction slides: compiler vs interpreter, program phases, file types' },
      { id: 'types', label: '2 · Variable Types', detail: 'Variable Types I & II: ranges, overflow, round-off, casts, modifiers' },
      { id: 'expr', label: '3 · Expressions & Operators', detail: 'Assignment, arithmetic, %, ++/--, precedence, mixed types, math library' },
      { id: 'control', label: '4 · Control Statements & Loops', detail: 'if / if-else / ladders, logical operators, flowcharts, for & nested loops' }
    ]
  },
  MIAE221: {
    midterm: {
      label: 'Midterm Review — Lectures 1 to 5',
      detail: 'Mixed questions from the lectures posted so far (Callister Ch. 1–3)',
      sections: ['intro', 'bonding', 'crystal']
    },
    sections: [
      { id: 'intro', label: 'Ch. 1 · Introduction & Classes of Materials', detail: 'Lectures 1–2: science vs engineering, properties, material classes, failures' },
      { id: 'bonding', label: 'Ch. 2 · Atomic Structure & Bonding', detail: 'Lectures 2–3: atomic structure, electronegativity, bond energy, bond types' },
      { id: 'crystal', label: 'Ch. 3 · Crystal Structures', detail: 'Lectures 4–5: unit cells, APF, CN, stacking, density, Miller indices' }
    ]
  }
};

export const sectionLabel = (courseId: CourseId, sectionId: string): string => {
  const plan = QUIZ_PLANS[courseId];
  if (sectionId === MIDTERM_SECTION_ID) return plan.midterm.label;
  return plan.sections.find((s) => s.id === sectionId)?.label ?? sectionId;
};

// All questions belonging to one course + section (the midterm mixes its sections)
export const questionPool = (courseId: CourseId, sectionId: string): PracticeQuestion[] => {
  const plan = QUIZ_PLANS[courseId];
  const chapters = sectionId === MIDTERM_SECTION_ID ? plan.midterm.sections : [sectionId];
  return PRACTICE_QUESTIONS.filter((q) => q.courseId === courseId && chapters.includes(q.chapter));
};

export const drillSize = (courseId: CourseId, sectionId: string): number =>
  Math.min(DRILL_LENGTH, questionPool(courseId, sectionId).length);
