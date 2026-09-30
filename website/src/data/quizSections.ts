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
  // Optional cumulative review for courses whose teacher notes already cover the whole term
  final?: { label: string; detail: string; sections: string[] };
  sections: QuizSection[];
}

export const MIDTERM_SECTION_ID = 'midterm';
export const FINAL_SECTION_ID = 'final';
export const DRILL_LENGTH = 20;

export const QUIZ_PLANS: Record<CourseId, CourseQuizPlan> = {
  ENGR213: {
    midterm: {
      label: 'Midterm Review — Chapters 1 & 2',
      detail: 'Both chapters, mixed midterm-style questions and past-paper problems (Lectures 1–6)',
      sections: ['ch1', 'ch2', 'mixed', 'past']
    },
    sections: [
      { id: 'ch1', label: 'Chapter 1 — Introduction to Differential Equations', detail: 'Lectures 1–2 · Textbook §1.1–1.2: terminology, solutions, IVPs, existence & uniqueness' },
      { id: 'ch2', label: 'Chapter 2 — First-Order Differential Equations', detail: 'Lectures 2–6 · Textbook §2.1–2.5, 2.7: direction fields, separable, linear, exact, substitutions, linear models' },
      { id: 'past', label: "Past Papers — Previous Years' Quizzes & Tests", detail: 'Winter 2025 Quiz 1, Quiz 2 and Test 1 problems, limited to what Lectures 1–6 cover' }
    ]
  },
  INDU211: {
    midterm: {
      label: 'Midterm Review — Chapters 1 to 5',
      detail: 'Mixed questions from lecture slides 1.0–5.0 plus the 2019 midterm sample',
      sections: ['ch1-2', 'ch3', 'ch4', 'ch5', 'past-mid']
    },
    final: {
      label: 'Final Exam Review — All Chapters',
      detail: 'Every lecture deck (1.0–13) with textbook support, plus the Fall 2020 final exam problems',
      sections: ['ch1-2', 'ch3', 'ch4', 'ch5', 'ch7', 'ch14', 'ch15', 'ch8', 'ch6-11', 'ch17', 'past-mid', 'past-final']
    },
    sections: [
      { id: 'ch1-2', label: 'Chapters 1 & 2 — Engineering & IE Foundations', detail: 'Lecture 1.0: science vs engineering, ethics, IE chronology, systems, decision levels' },
      { id: 'ch3', label: 'Chapter 3 — Manufacturing Engineering', detail: 'Lecture 2.0: concurrent engineering, BOM, break-even, process selection, industrial processes' },
      { id: 'ch4', label: 'Chapter 4 — Facilities Location & Layout', detail: 'Lectures 3.0–4.0: distances, transportation method, center of gravity, layout types' },
      { id: 'ch5', label: 'Chapter 5 — Material Handling & Routing', detail: 'Lecture 5.0: handling equipment & principles, TSP, VRP, Clark-Wright' },
      { id: 'ch7', label: 'Chapter 7 — Operations Planning & Control', detail: 'Lectures 6.0–8.0: aggregate planning, EOQ, MRP, MRP II/ERP, JIT & Kanban, forecasting' },
      { id: 'ch14', label: 'Chapter 14 — Deterministic Operations Research', detail: 'Lecture 9.0: LP formulation, graphical solution, maximisation & minimisation' },
      { id: 'ch15', label: 'Chapter 15 — Queuing Models', detail: "Lecture 10: M/M/1 measures, Little's law, steady state, simulation" },
      { id: 'ch8', label: 'Chapter 8 — Quality Control', detail: 'Lecture 11: definitions, costs of quality, SPC, X-bar/R and p charts, capability, six sigma' },
      { id: 'ch6-11', label: 'Chapters 6 & 11 — Work Design & Human Factors', detail: 'Lecture 12: productivity, anthropometry, job design, motivation, time study' },
      { id: 'ch17', label: 'Chapter 17 — Project Management', detail: 'Lecture 13: CPM critical path, slack, PERT expected times' },
      { id: 'past-mid', label: 'Past Papers — Previous Midterm', detail: '2019 midterm sample questions (Chapters 1–5)' },
      { id: 'past-final', label: 'Past Papers — Previous Final Exam', detail: 'Fall 2020 final: forecasting, graphical LP, control charts, queuing' }
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
      label: 'Midterm Review — Lectures 1 to 7',
      detail: 'Every chapter so far, mixed midterm-style questions and past-midterm problems',
      sections: ['intro', 'bonding', 'crystal', 'densities', 'defects', 'mixed', 'past']
    },
    sections: [
      { id: 'intro', label: 'Ch. 1 · Introduction & Classes of Materials', detail: 'Lectures 1–2: science vs engineering, properties, material classes, failures' },
      { id: 'bonding', label: 'Ch. 2 · Atomic Structure & Bonding', detail: 'Lectures 2–3: atomic structure, electronegativity, bond energy, bond types' },
      { id: 'crystal', label: 'Ch. 3 · Crystal Structures', detail: 'Lectures 4–5: unit cells, APF, CN, stacking, density, Miller indices' },
      { id: 'densities', label: 'Ch. 3 · Atomic Densities & X-Ray Diffraction', detail: 'Lecture 6: linear & planar density, slip, single vs polycrystals, Bragg’s law, powder XRD' },
      { id: 'defects', label: 'Ch. 4 · Imperfections in Solids', detail: 'Lecture 7: vacancies & Arrhenius, impurities, solid solutions, Hume-Rothery, wt% ↔ at.%, dislocations' },
      { id: 'past', label: "Past Papers — Previous Years' Midterm", detail: '2025 Midterm (version A) questions on topics covered so far' }
    ]
  }
};

export const sectionLabel = (courseId: CourseId, sectionId: string): string => {
  const plan = QUIZ_PLANS[courseId];
  if (sectionId === MIDTERM_SECTION_ID) return plan.midterm.label;
  if (sectionId === FINAL_SECTION_ID && plan.final) return plan.final.label;
  return plan.sections.find((s) => s.id === sectionId)?.label ?? sectionId;
};

// All questions belonging to one course + section (the midterm mixes its sections)
export const questionPool = (courseId: CourseId, sectionId: string): PracticeQuestion[] => {
  const plan = QUIZ_PLANS[courseId];
  const chapters =
    sectionId === MIDTERM_SECTION_ID
      ? plan.midterm.sections
      : sectionId === FINAL_SECTION_ID && plan.final
        ? plan.final.sections
        : [sectionId];
  return PRACTICE_QUESTIONS.filter((q) => q.courseId === courseId && chapters.includes(q.chapter));
};

export const drillSize = (courseId: CourseId, sectionId: string): number =>
  Math.min(DRILL_LENGTH, questionPool(courseId, sectionId).length);
