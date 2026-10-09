import { CourseId, PracticeQuestion } from '../types';
import { PRACTICE_QUESTIONS } from './questionsData';

// Drill sections per course. Every question's `chapter` must match one of these ids.
// `midterm` lists the sections the midterm covers; a "Midterm Review" drill mixes them.
export interface QuizSection {
  id: string;
  label: string;
  detail: string;
  group?: string;
  subSections?: string[];
}

export interface CourseQuizPlan {
  midterm: { label: string; detail: string; sections: string[] };
  final?: { label: string; detail: string; sections: string[] };
  sections: QuizSection[];
}

export const MIDTERM_SECTION_ID = 'midterm';
export const FINAL_SECTION_ID = 'final';
export const DRILL_LENGTH = 20;

export const QUIZ_PLANS: Record<CourseId, CourseQuizPlan> = {
  ENGR213: {
    midterm: {
      label: 'Midterm 1 Review — Chapter 2 & Sections 17.1, 17.2',
      detail: 'Official Midterm 1 syllabus: Chapter 2 (Separable, Linear, Exact, Substitutions, Linear & Nonlinear Models) and CH 17.1 & CH 17.2 (Complex Numbers & Auxiliary Equations), plus authentic past midterms',
      sections: [
        'classification',
        'autonomous-phase',
        'separable',
        'linear',
        'exact',
        'homogeneous',
        'bernoulli',
        'sub-linear',
        'substitutions-mix',
        'applications',
        'nonlinear-models',
        'complex',
        'past'
      ]
    },
    final: {
      label: 'Final Exam Review — Comprehensive All Topics',
      detail: 'Comprehensive ODE curriculum: first-order, higher-order, systems, Cauchy-Euler, resonance, complex numbers, and Laplace transforms',
      sections: [
        'classification',
        'autonomous-phase',
        'separable',
        'linear',
        'exact',
        'homogeneous',
        'bernoulli',
        'sub-linear',
        'substitutions-mix',
        'applications',
        'nonlinear-models',
        'complex',
        'past',
        'past-final'
      ]
    },
    sections: [
      // -----------------------------------------------------------------------
      // LECTURES 1 & 2: FOUNDATIONS, IVPS & AUTONOMOUS PHASE LINES
      // -----------------------------------------------------------------------
      {
        id: 'classification',
        label: 'Lecture 1 · ODE Order, Linearity & Solution Verification',
        detail: 'Classifying order, degree, linear vs nonlinear differential equations, and verifying explicit/implicit solutions',
        group: 'Lectures 1 & 2: Foundations & Phase Lines'
      },
      {
        id: 'autonomous-phase',
        label: 'Lecture 2 · Autonomous ODEs & 1D Phase Line Stability',
        detail: 'Equilibrium critical points, 1D phase portraits, and stability classification: attractor/sink, repeller/source, semi-stable',
        group: 'Lectures 1 & 2: Foundations & Phase Lines'
      },

      // -----------------------------------------------------------------------
      // LECTURES 3 & 4: FIRST-ORDER SOLVING METHODS (CH 2.2–2.4)
      // -----------------------------------------------------------------------
      {
        id: 'separable',
        label: 'Lecture 3 · Separable Equations & Singular Lost Solutions (CH 2.2)',
        detail: 'Separable ODEs, explicit vs implicit forms, singular/lost solutions, and initial value problems',
        group: 'Lectures 3 & 4: Core Solving Methods'
      },
      {
        id: 'linear',
        label: 'Lecture 3 · Linear First-Order ODEs & Integrating Factor (CH 2.3)',
        detail: 'Standard form y\' + P(x)y = f(x), integrating factor I(x) = exp(∫P dx), transient/steady-state, and continuity intervals',
        group: 'Lectures 3 & 4: Core Solving Methods'
      },
      {
        id: 'exact',
        label: 'Lecture 4 · Exact Equations & Potential Function Ψ(x,y) (CH 2.4)',
        detail: 'Exactness condition ∂M/∂y = ∂N/∂x, potential function Ψ(x,y) = C, and special factors μ(x), μ(y)',
        group: 'Lectures 3 & 4: Core Solving Methods'
      },

      // -----------------------------------------------------------------------
      // LECTURE 5: SUBSTITUTIONS & REDUCTIONS (CH 2.5)
      // -----------------------------------------------------------------------
      {
        id: 'homogeneous',
        label: 'Lecture 5 · Homogeneous Equations (y = ux) (CH 2.5)',
        detail: 'Testing homogeneity of degree k, transformations y = ux or x = vy, and separation of variables',
        group: 'Lecture 5: Substitutions & Reductions'
      },
      {
        id: 'bernoulli',
        label: 'Lecture 5 · Bernoulli Differential Equations (CH 2.5)',
        detail: 'Standard form y\' + P(x)y = f(x)y^n, canonical substitution u = y^(1-n), and reduction to linear ODE',
        group: 'Lecture 5: Substitutions & Reductions'
      },
      {
        id: 'sub-linear',
        label: 'Lecture 5 · Linear Arguments u = Ax + By + C (CH 2.5)',
        detail: 'Equations of the form y\' = f(Ax + By + C), substitution u = Ax + By + C, and reduction to separable form',
        group: 'Lecture 5: Substitutions & Reductions'
      },
      {
        id: 'substitutions-mix',
        label: 'Lecture 5 · 3-Type Substitution Synthesis Drill',
        detail: 'Synthesis drill mixing all 3 types: Homogeneous (y=ux), Bernoulli (u=y^(1-n)), and Linear (u=Ax+By+C)',
        group: 'Lecture 5: Substitutions & Reductions',
        subSections: ['substitutions-mix', 'homogeneous', 'bernoulli', 'sub-linear']
      },

      // -----------------------------------------------------------------------
      // LECTURES 6 & 7: PHYSICAL MODELING (CH 2.7 & CH 2.8)
      // -----------------------------------------------------------------------
      {
        id: 'applications',
        label: 'Lecture 6 · Linear Models: Cooling, Mixture Tanks & Circuits (CH 2.7)',
        detail: 'Newton\'s cooling, variable/constant volume mixture tanks, series LR/RC electric circuits, and decay',
        group: 'Lectures 6 & 7: Physical Modeling'
      },
      {
        id: 'nonlinear-models',
        label: 'Lecture 7 · Nonlinear Models: Logistic Population Dynamics (CH 2.8)',
        detail: 'The logistic equation dP/dt = P(a - bP), carrying capacity K = a/b, harvesting models, and inflection points',
        group: 'Lectures 6 & 7: Physical Modeling'
      },

      // -----------------------------------------------------------------------
      // LECTURE 8: COMPLEX NUMBERS & AUXILIARY EQUATIONS (CH 17.1 & CH 17.2)
      // -----------------------------------------------------------------------
      {
        id: 'complex',
        label: 'Lecture 8 · Complex Numbers, Euler, Roots & Auxiliary ODEs (CH 17.1–17.2)',
        detail: 'Cartesian/polar forms, Arg(z), Euler\'s formula, De Moivre powers, complex roots, and second-order auxiliary equations',
        group: 'Lecture 8: Complex Numbers (CH 17.1 & CH 17.2)'
      },

      // -----------------------------------------------------------------------
      // PAST EXAMINATION DRILLS
      // -----------------------------------------------------------------------
      {
        id: 'past',
        label: 'Past Papers · Midterm Exam Master Drill',
        detail: 'Authentic Concordia midterm exam drills (2011–2018 & Winter 2025)',
        group: 'Past Examination Drills'
      },
      {
        id: 'past-final',
        label: 'Past Papers · Final Exam Master Drill',
        detail: 'Authentic Concordia final exam drills (2005–2021)',
        group: 'Past Examination Drills'
      }
    ]
  },
  INDU211: {
    midterm: {
      label: 'Midterm Review — Chapters 1 to 5',
      detail: 'Mixed review from Chapters 1 to 5 plus midterm past papers',
      sections: ['ch1-2', 'ch3', 'ch4', 'ch5', 'past-mid']
    },
    final: {
      label: 'Final Exam Review — All Chapters',
      detail: 'Comprehensive review covering all course topics plus final exam past papers',
      sections: ['ch1-2', 'ch3', 'ch4', 'ch5', 'ch7', 'ch14', 'ch15', 'ch8', 'ch6-11', 'ch17', 'past-mid', 'past-final']
    },
    sections: [
      { id: 'ch1-2', label: 'Chapters 1 & 2 — Engineering & IE Foundations', detail: 'Science vs engineering, ethics, IE chronology, systems, decision levels' },
      { id: 'ch3', label: 'Chapter 3 — Manufacturing Engineering', detail: 'Concurrent engineering, BOM, break-even, process selection, industrial processes' },
      { id: 'ch4', label: 'Chapter 4 — Facilities Location & Layout', detail: 'Distances, transportation method, center of gravity, layout types' },
      { id: 'ch5', label: 'Chapter 5 — Material Handling & Routing', detail: 'Handling equipment & principles, TSP, VRP, Clark-Wright' },
      { id: 'ch7', label: 'Chapter 7 — Operations Planning & Control', detail: 'Aggregate planning, EOQ, MRP, MRP II/ERP, JIT & Kanban, forecasting' },
      { id: 'ch14', label: 'Chapter 14 — Deterministic Operations Research', detail: 'LP formulation, graphical solution, maximisation & minimisation' },
      { id: 'ch15', label: 'Chapter 15 — Queuing Models', detail: "M/M/1 measures, Little's law, steady state, simulation" },
      { id: 'ch8', label: 'Chapter 8 — Quality Control', detail: 'Definitions, costs of quality, SPC, X-bar/R and p charts, capability, six sigma' },
      { id: 'ch6-11', label: 'Chapters 6 & 11 — Work Design & Human Factors', detail: 'Productivity, anthropometry, job design, motivation, time study' },
      { id: 'ch17', label: 'Chapter 17 — Project Management', detail: 'CPM critical path, slack, PERT expected times' },
      { id: 'past-mid', label: 'Past Papers — Midterm', detail: 'Quiz drill from past papers' },
      { id: 'past-final', label: 'Past Papers — Final Exam', detail: 'Quiz drill from past papers' }
    ]
  },
  MIAE215: {
    midterm: {
      label: 'Midterm Review — All Topics So Far',
      detail: 'Mixed review from programming fundamentals, expressions, control flow, loops, and past papers',
      sections: ['intro', 'types', 'expr', 'control', 'past']
    },
    final: {
      label: 'Final Exam Review — All C++ Topics',
      detail: 'Comprehensive curriculum review: computing basics, types, expressions, control flow, loops, and arrays',
      sections: ['intro', 'types', 'expr', 'control', 'past']
    },
    sections: [
      { id: 'intro', label: '1 · Computing Basics & the Build Process', detail: 'Compiler vs interpreter, program phases, file types' },
      { id: 'types', label: '2 · Variable Types', detail: 'Variable types: ranges, overflow, round-off, casts, modifiers' },
      { id: 'expr', label: '3 · Expressions & Operators', detail: 'Assignment, arithmetic, %, ++/--, precedence, mixed types, math library' },
      { id: 'control', label: '4 · Control Statements & Loops', detail: 'if / if-else / ladders, logical operators, flowcharts, for & nested loops' },
      { id: 'past', label: 'Past Papers', detail: 'Quiz drill from past papers' }
    ]
  },
  MIAE221: {
    midterm: {
      label: 'Midterm Review — Chapters 1 to 7',
      detail: 'Comprehensive midterm review: bonding, crystals, XRD, defects, diffusion, mechanical properties, and past papers',
      sections: ['intro', 'bonding', 'crystal', 'densities', 'defects', 'mechanical', 'strengthening', 'phase', 'mixed', 'past', 'midterm-drill']
    },
    final: {
      label: 'Final Exam Review — All Materials Chapters',
      detail: 'Comprehensive materials science review across all course topics and past papers',
      sections: ['intro', 'bonding', 'crystal', 'densities', 'defects', 'mechanical', 'strengthening', 'phase', 'mixed', 'past', 'past-final', 'midterm-drill']
    },
    sections: [
      { id: 'intro', label: 'Ch. 1 · Introduction & Classes of Materials', detail: 'Science vs engineering, properties, material classes, failures' },
      { id: 'bonding', label: 'Ch. 2 · Atomic Structure & Bonding', detail: 'Atomic structure, electronegativity, bond energy, bond types' },
      { id: 'crystal', label: 'Ch. 3 · Crystal Structures', detail: 'Unit cells, APF, CN, stacking, density, Miller indices' },
      { id: 'densities', label: 'Ch. 3 · Atomic Densities & X-Ray Diffraction', detail: 'Linear & planar density, slip, single vs polycrystals, Bragg’s law, powder XRD' },
      { id: 'defects', label: 'Ch. 4 · Imperfections in Solids', detail: 'Vacancies & Arrhenius, impurities, solid solutions, Hume-Rothery, wt% ↔ at.%, dislocations' },
      { id: 'mechanical', label: 'Ch. 6 · Mechanical Properties of Metals', detail: 'Tensile test, Hooke’s law, Poisson’s ratio, yield strength 0.002 offset, ductility, hardness' },
      { id: 'strengthening', label: 'Ch. 7 · Dislocations & Strengthening', detail: 'Slip systems, Schmid’s law, Hall-Petch, cold work & recovery-recrystallization' },
      { id: 'phase', label: 'Ch. 9 · Phase Diagrams & Iron-Carbon', detail: 'Lever rule, binary eutectic (Pb-Sn), Fe-Fe3C system, pearlite, hypoeutectoid steels' },
      { id: 'midterm-drill', label: 'Midterm Exam Drill (Winter 2026 / 2025)', detail: 'Authentic 40-question midterm exam drill with solutions & video mappings' },
      { id: 'past', label: 'Past Papers', detail: 'Quiz drill from past papers' },
      { id: 'past-final', label: 'Past Papers — Final Exam', detail: 'Quiz drill from past papers' }
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
  if (!plan) return [];

  let chapters: string[] = [];
  if (sectionId === MIDTERM_SECTION_ID) {
    chapters = plan.midterm.sections;
  } else if (sectionId === FINAL_SECTION_ID && plan.final) {
    chapters = plan.final.sections;
  } else {
    const sec = plan.sections.find((s) => s.id === sectionId);
    if (sec?.subSections && sec.subSections.length > 0) {
      chapters = sec.subSections;
    } else {
      chapters = [sectionId];
    }
  }

  return PRACTICE_QUESTIONS.filter((q) => q.courseId === courseId && chapters.includes(q.chapter));
};

export const drillSize = (courseId: CourseId, sectionId: string): number =>
  Math.min(DRILL_LENGTH, questionPool(courseId, sectionId).length);
