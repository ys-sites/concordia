import { CourseId, PracticeQuestion } from '../types';
import { t } from './solutions/types';
import { MIAE215_TEACHER_EXAM } from './teacherExamMiae215';
import { INDU211_TEACHER_EXAM } from './teacherExamIndu211';

// Questions taken from the practice papers the instructors handed out (Teacher Midterm Practice).
// MIAE 221, MIAE 215, and INDU 211 have teacher-provided papers.
// MIAE 221: 2017 sample midterm verbatim with official marking key.
// MIAE 215: Write-a-program quizzes and output-tracing problems.
// INDU 211: Official Fall 2025 Midterm Exam (Paper A, 50 Marks) verbatim with full step-by-step marking key.

export const TEACHER_EXAM_CHAPTER = 'teacher-exam';

export interface TeacherExamTopic {
  id: string; // [a-z-] only: it goes into the drill URL
  label: string; // equals the questions' `topic`
}

export interface TeacherExamSet {
  paper: string; // shown on the drill setup
  topics: TeacherExamTopic[];
}

export const TEACHER_EXAM_SETS: Partial<Record<CourseId, TeacherExamSet>> = {
  INDU211: {
    paper: 'Official Midterm Exam Paper A (Fall 2025, 50 Marks) with Complete Step-by-Step Marking Key',
    topics: [
      { id: 'foundations', label: 'Engineering Foundations & Ethics (Ch. 1–2)' },
      { id: 'systems', label: 'Industrial Systems & Human Activity (Ch. 2)' },
      { id: 'breakeven', label: 'Break-Even & Process Selection (Ch. 3)' },
      { id: 'bom', label: 'Bill of Materials (BOM) Explosion (Ch. 3)' },
      { id: 'layout', label: 'Facility Layout & Material Handling (Ch. 4–5)' },
      { id: 'transportation', label: 'Transportation Method & Feasibility (Ch. 4)' },
      { id: 'tsp', label: 'Traveling Salesperson AGV Routing (Ch. 5)' }
    ]
  },
  MIAE221: {
    paper: '2017 Sample Midterm, Version A (Drs. Pugh & Medraj) with the official marking key',
    topics: [
      { id: 'planes', label: 'Miller Indices — Planes' },
      { id: 'crystal', label: 'Crystal Structures & Densities' },
      { id: 'bonding', label: 'Atomic Bonding' },
      { id: 'defects', label: 'Defects & Solid Solutions' },
      { id: 'diffusion', label: 'Diffusion' },
      { id: 'curve', label: 'Stress–Strain Curve (Figure 1)' },
      { id: 'tensile', label: 'Tensile Test Calculations' },
      { id: 'slip', label: 'Dislocations & Slip' },
      { id: 'microscopy', label: 'Microscopy' }
    ]
  },
  MIAE215: {
    paper: 'Fall 2023 Midterm Q2, Midterm Review #1, Quiz #1 and Quiz #2 (both sections)',
    topics: [
      { id: 'trace', label: 'Output Tracing' },
      { id: 'nested', label: 'Nested Loops & 2D Arrays' },
      { id: 'arrays', label: 'Array Algorithms' },
      { id: 'limits', label: 'Variable Limits & Overflow' },
      { id: 'io', label: 'Input, Output & Formatting' },
      { id: 'loops', label: 'Loops, Menus & Input Validation' }
    ]
  }
};

const P221 = 'MIAE 221 Sample Midterm 2017 (Version A)';
const FIG_X = {
  src: '/teacher-exams/miae221-2017-figure-x.png',
  alt: 'Figure X: cubic unit cell with planes A, B and C. Plane A cuts the cell edges at 3/4 and 1/2; plane B is vertical through 1/4; plane C reaches y = 3/2.',
  caption: 'Figure X from the 2017 sample midterm'
};
const FIG_1 = {
  src: '/teacher-exams/miae221-2017-figure-1.png',
  alt: 'Figure 1: stress–strain curve for metal X with points O, A, B, C, D, E, F on the curve and G, H, I, J, K, L, M on the strain axis. Dashed unloading lines run from C to H, D to J and F to L.',
  caption: 'Figure 1: Stress vs strain curve for metal X (2017 sample midterm)'
};
const TF = ['True', 'False'];
const STRENGTHS = ['yield strength', 'tensile strength', 'toughness', 'stiffness', 'modulus of resilience'];

const m221 = (n: number, p: Omit<PracticeQuestion, 'courseId' | 'chapter' | 'pastPaper' | 'id' | 'keepOptionOrder'>): PracticeQuestion => ({
  id: `TX_MIAE221_2017_Q${String(n).padStart(2, '0')}`,
  courseId: 'MIAE221',
  chapter: TEACHER_EXAM_CHAPTER,
  pastPaper: `${P221}, Q${n}`,
  keepOptionOrder: true,
  ...p
});

const MIAE221_TEACHER_EXAM: PracticeQuestion[] = [
  // ------------------------------------------------------------------ Multiple choice (2 marks each)
  m221(1, {
    topic: 'Miller Indices — Planes',
    difficulty: 'Midterm Level',
    question: 'In the adjacent Figure X, what are the coordinates of plane A?',
    figure: FIG_X,
    options: ['$\\langle 111 \\rangle$', '$(\\bar{4}23)$', '$(423)$', '$(\\bar{3}64)$', '$(\\bar{1}20)$'],
    correctIndex: 3,
    explanation: {
      coreConcept: 'Miller indices of a plane are the reciprocals of its axis intercepts, cleared of fractions. If the plane passes through the origin, move the origin to a neighbouring corner first.',
      stepByStep: [],
      steps: [
        { title: 'Plane A touches the original origin edge, so shift the origin one cell along $x$', note: 'Measured from the new origin, the plane meets $x$ on the negative side.' },
        { title: 'Read the intercepts (marking key)', math: t`x = -1,\qquad y = \tfrac12,\qquad z = \tfrac34` },
        { title: 'Take reciprocals', math: t`\tfrac{1}{x},\ \tfrac{1}{y},\ \tfrac{1}{z} = -1,\ 2,\ \tfrac43` },
        { title: 'Multiply by 3 to clear the fraction', math: t`-3,\ 6,\ 4` },
        { title: 'Write with an overbar for the negative index', math: t`(\bar{3}64)` }
      ],
      answer: t`(\bar{3}64)`,
      whyWrong: {
        '0': 'Angle brackets $\\langle\\,\\rangle$ denote a family of directions, not a single plane.',
        '1': 'Those numbers come from not taking reciprocals of the intercepts before clearing fractions.',
        '2': 'This drops the negative sign: after the origin shift the $x$ intercept is $-1$.',
        '4': 'This is a plane parallel to $z$ (index 0), but plane A clearly cuts the $z$ axis at $\\tfrac34$.'
      },
      commonTrap: 'Forgetting to move the origin when the plane passes through it, which gives an intercept of 0 and an infinite index.',
      reference: 'Sample Midterm 2017 marking key Q1; Callister Ch. 3 (crystallographic planes); Lecture 5 (Miller indices)'
    }
  }),
  m221(2, {
    topic: 'Miller Indices — Planes',
    difficulty: 'Midterm Level',
    question: 'In the adjacent Figure X, what are the coordinates of plane B?',
    figure: FIG_X,
    options: ['$(140)$', '$(3\\bar{4}0)$', '$(14\\infty)$', '$(\\bar{1}20)$', '$(340)$'],
    correctIndex: 1,
    explanation: {
      coreConcept: 'A plane parallel to an axis has an infinite intercept on it, so its index on that axis is $1/\\infty = 0$.',
      stepByStep: [],
      steps: [
        { title: 'Plane B is vertical (parallel to $z$) and touches the original origin face, so shift the origin', note: 'From the shifted origin the plane cuts $x$ at 1 and $y$ on the negative side.' },
        { title: 'Intercepts (marking key)', math: t`x = 1,\qquad y = -\tfrac34,\qquad z = \infty` },
        { title: 'Reciprocals', math: t`1,\ -\tfrac43,\ 0` },
        { title: 'Multiply by 3', math: t`3,\ -4,\ 0` },
        { title: 'Result', math: t`(3\bar{4}0)` }
      ],
      answer: t`(3\bar{4}0)`,
      whyWrong: {
        '0': 'This uses the $\\tfrac14$ label directly instead of the intercept measured from the shifted origin.',
        '2': 'Miller indices never contain $\\infty$: an infinite intercept becomes index 0.',
        '3': 'This comes from using the wrong origin shift (or swapping which axis is negative).',
        '4': 'Correct magnitudes, but the $y$ intercept is negative after the origin shift, so it needs the overbar.'
      },
      commonTrap: 'Writing $\\infty$ as an index, or losing the minus sign after shifting the origin.',
      reference: 'Sample Midterm 2017 marking key Q2; Callister Ch. 3 (crystallographic planes)'
    }
  }),
  m221(3, {
    topic: 'Miller Indices — Planes',
    difficulty: 'Midterm Level',
    question: 'In the adjacent Figure X, what are the coordinates of plane C?',
    figure: FIG_X,
    options: ['$(346)$', '$(3\\bar{4}6)$', '$(223)$', '$(\\bar{1}23)$', 'impossible to determine as this plane extends outside of the unit cell.'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Intercepts may lie outside the unit cell; the procedure (reciprocals, clear fractions) is unchanged.',
      stepByStep: [],
      steps: [
        { title: 'Intercepts (marking key)', math: t`x = 2,\qquad y = \tfrac32,\qquad z = 1` },
        { title: 'Reciprocals', math: t`\tfrac12,\ \tfrac23,\ 1` },
        { title: 'Multiply by 6', math: t`3,\ 4,\ 6` },
        { title: 'Result', math: t`(346)` }
      ],
      answer: t`(346)`,
      whyWrong: {
        '1': 'All three intercepts are positive, so no index carries an overbar.',
        '2': 'This uses the intercepts themselves ($2, \\tfrac32, 1 \\to 4,3,2$ reordered) instead of their reciprocals.',
        '3': 'There is no negative intercept for plane C.',
        '4': 'A plane can extend beyond the cell; Miller indices only need its intercepts, which can be larger than 1.'
      },
      commonTrap: 'Thinking a plane must fit inside one unit cell to be indexed.',
      reference: 'Sample Midterm 2017 marking key Q3; Callister Ch. 3 (crystallographic planes)'
    }
  }),
  m221(4, {
    topic: 'Crystal Structures & Densities',
    difficulty: 'Midterm Level',
    question: 'The linear atomic density for the $[110]$ directions in BCC tungsten which has a lattice constant of $0.3165$ nm is:',
    options: ['$2.2341 \\times 10^{9}\\ \\text{m}^{-1}$', '$3.15 \\times 10^{9}\\ \\text{m}^{-1}$', '$3.15 \\times 10^{7}\\ \\text{m}^{-1}$', '$3.6483 \\times 10^{9}\\ \\text{m}^{-1}$', '$1.322 \\times 10^{9}\\ \\text{m}^{-1}$'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Linear density = number of atoms centred on the direction vector ÷ its length. In BCC the $[110]$ face diagonal does not pass through the body-centre atom.',
      stepByStep: [],
      steps: [
        { title: 'Length of the $[110]$ vector (face diagonal)', math: t`L = \sqrt2\,a = 1.4142 \times 0.3165\ \text{nm} = 0.4476\ \text{nm}` },
        { title: 'Atoms centred on it: half of each end corner atom', math: t`n = \tfrac12 + \tfrac12 = 1` },
        { title: 'Divide', math: t`LD_{[110]} = \frac{1}{0.4476 \times 10^{-9}\ \text{m}} = 2.2341 \times 10^{9}\ \text{m}^{-1}` }
      ],
      answer: t`2.2341 \times 10^{9}\ \text{m}^{-1}`,
      whyWrong: {
        '1': 'This is $1/a$: the linear density of $[100]$ (a cube edge), not $[110]$.',
        '2': 'Same as $1/a$ but with a unit slip: nm to m is $10^{-9}$, not $10^{-7}$.',
        '3': 'This is $2/(\\sqrt3\\,a)$, the close-packed $[111]$ body diagonal of BCC, which does pass through the centre atom.',
        '4': 'This does not correspond to the face-diagonal geometry; recheck $L = \\sqrt2\\,a$ and $n = 1$.'
      },
      commonTrap: 'Counting the BCC body-centre atom on the $[110]$ direction. It lies on the body diagonal $[111]$, not on a face diagonal.',
      reference: 'Sample Midterm 2017 marking key Q4; Lecture 6 (linear & planar densities); Callister §3.11'
    }
  }),
  m221(5, {
    topic: 'Diffusion',
    difficulty: 'Foundation',
    question: 'With regard to diffusion:',
    options: ['Diffusion is a time dependent process.', 'Diffusion is a temperature dependant process.', 'Diffusion occurs down a concentration gradient.', 'Answers (a) and (b) only.', 'Answers (a), (b), and (c).'],
    correctIndex: 4,
    explanation: {
      coreConcept: "Diffusion is net atomic migration driven by a concentration gradient (Fick's first law), it accumulates over time (Fick's second law) and its rate rises exponentially with temperature (Arrhenius).",
      stepByStep: [
        "(a) True: the amount diffused grows with time, e.g. the penetration depth scales with $\\sqrt{Dt}$.",
        '(b) True: $D = D_0 \\exp(-Q_d/RT)$, so $D$ rises sharply with $T$.',
        "(c) True: $J = -D\\,\\dfrac{dC}{dx}$, net flux runs from high to low concentration.",
        'All three statements hold, so the best answer is (e).'
      ],
      whyWrong: {
        '0': 'True, but not the best answer: (b) and (c) are also true.',
        '1': 'True, but not the best answer: (a) and (c) are also true.',
        '2': 'True, but not the best answer: (a) and (b) are also true.',
        '3': 'Leaves out (c), which is also true (Fick\'s first law).'
      },
      commonTrap: 'Picking the first true statement on a "select the best answer" paper. Read all options when (d)/(e) combine earlier ones.',
      reference: 'Sample Midterm 2017 marking key Q5; Callister Ch. 5 (diffusion)'
    }
  }),
  m221(6, {
    topic: 'Diffusion',
    difficulty: 'Midterm Level',
    question: 'If a smooth block of copper is pressed against a smooth block of nickel and both are heated to a high temperature (but below their melting points), and held for a long time:',
    options: [
      'Copper atoms will diffuse into nickel because copper has the lower melting point.',
      'Nickel atoms will diffuse into copper because copper has the lower melting point.',
      'Copper atoms will diffuse into the nickel and nickel atoms will diffuse into the copper.',
      'No diffusion will occur between these metals because they have complete solid solubility in each other.',
      'Nickel will diffuse into copper because copper has a lower packing factor and more empty space available for the nickel atoms.'
    ],
    correctIndex: 2,
    explanation: {
      coreConcept: 'In a Cu–Ni diffusion couple each species moves down its own concentration gradient: interdiffusion. Cu atoms migrate into Ni and Ni atoms into Cu.',
      stepByStep: [
        'At the interface Cu is at 100% on one side and 0% on the other, so Cu has a gradient pointing into the nickel.',
        'Ni has the mirror-image gradient pointing into the copper.',
        'At high temperature both species are mobile, so both diffuse (the classic Callister Cu–Ni couple).'
      ],
      whyWrong: {
        '0': 'Diffusion is driven by concentration gradients, and Ni also moves; it is not one-way.',
        '1': 'Cu also moves into Ni; melting point does not make diffusion one-directional.',
        '3': 'Complete solid solubility is exactly what lets them interdiffuse into a single solid solution.',
        '4': 'Cu and Ni are both FCC (APF 0.74), and diffusion here is not one-way.'
      },
      commonTrap: 'Assuming diffusion only goes one way. In a couple, both species move down their own gradients.',
      reference: 'Sample Midterm 2017 marking key Q6; Callister §5.2 (Cu–Ni diffusion couple)'
    }
  }),
  m221(7, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Foundation',
    question: 'In Figure 1, Point B indicates the metal’s:',
    figure: FIG_1,
    options: STRENGTHS,
    correctIndex: 0,
    explanation: {
      coreConcept: 'Point B is where the curve leaves its straight elastic line: the onset of plastic deformation, i.e. the yield strength.',
      stepByStep: [
        'From O to B the curve is linear: elastic (Hooke\'s law).',
        'Beyond B the curve bends over and the dashed unloading lines no longer return to O: plastic deformation has begun.',
        'The stress at that transition is the yield strength $\\sigma_y$.'
      ],
      whyWrong: {
        '1': 'Tensile strength is the maximum of the curve, at D.',
        '2': 'Toughness is an area (under the whole curve), not a point.',
        '3': 'Stiffness is the slope of the elastic line (e.g. at A), not a point value.',
        '4': 'Modulus of resilience is the area under the elastic part (O–B–G), not point B itself.'
      },
      commonTrap: 'Confusing the yield point B with the maximum D.',
      reference: 'Sample Midterm 2017 marking key Q7; Callister Ch. 6 (tensile properties)'
    }
  }),
  m221(8, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Foundation',
    question: 'In Figure 1, Point D indicates the metal’s:',
    figure: FIG_1,
    options: STRENGTHS,
    correctIndex: 1,
    explanation: {
      coreConcept: 'The highest point on the engineering stress–strain curve is the ultimate tensile strength (UTS).',
      stepByStep: [
        'D is the maximum engineering stress on the curve.',
        'The maximum engineering stress is the tensile strength; necking begins there.'
      ],
      whyWrong: {
        '0': 'Yield is at B, where plasticity starts.',
        '2': 'Toughness is the total area under the curve to fracture (O–B–F–M).',
        '3': 'Stiffness is the elastic slope, near A.',
        '4': 'Modulus of resilience is the elastic area O–B–G.'
      },
      commonTrap: 'Thinking fracture (F) is the strongest point. After D the engineering stress falls because the neck shrinks.',
      reference: 'Sample Midterm 2017 marking key Q8; Callister §6.6'
    }
  }),
  m221(9, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Foundation',
    question: 'In Figure 1, the slope of the curve at Point A indicates the metal’s:',
    figure: FIG_1,
    options: STRENGTHS,
    correctIndex: 3,
    explanation: {
      coreConcept: "In the elastic region $\\sigma = E\\varepsilon$, so the slope is Young's modulus $E$: the stiffness.",
      stepByStep: ['A lies on the linear elastic segment O–B.', 'Slope $= \\Delta\\sigma/\\Delta\\varepsilon = E$, which measures stiffness.'],
      whyWrong: {
        '0': 'Yield strength is a stress value (point B), not a slope.',
        '1': 'Tensile strength is the maximum stress (point D).',
        '2': 'Toughness is an area, not a slope.',
        '4': 'Resilience is the area under the elastic line, $\\sigma_y^2/2E$, not its slope.'
      },
      commonTrap: 'Mixing up "strength" (a stress) with "stiffness" (a slope).',
      reference: 'Sample Midterm 2017 marking key Q9; Callister §6.3'
    }
  }),
  m221(10, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Midterm Level',
    question: 'In Figure 1, Point L indicates the:',
    figure: FIG_1,
    options: ['elastic strain at the onset of necking', 'plastic strain at the onset of necking', 'elastic strain at fracture', 'plastic strain at fracture', 'total strain at fracture'],
    correctIndex: 3,
    explanation: {
      coreConcept: 'Unloading follows a line parallel to the elastic slope. Where that line meets the strain axis is the permanent (plastic) strain; the vertical drop gives the total strain.',
      stepByStep: [
        'F is fracture. Two lines drop from F: a vertical one to M and a sloped (parallel to O–B) one to L.',
        'The sloped line is the elastic recovery, so L is the strain left after the elastic part springs back: the plastic strain at fracture.',
        'M is the total strain at fracture; the gap L–M is the recovered elastic strain.'
      ],
      whyWrong: {
        '0': 'Necking starts at D; its lines meet the axis at J and K, not L.',
        '1': 'The plastic strain at necking onset is J.',
        '2': 'The elastic strain at fracture is the length L–M, not point L.',
        '4': 'Total strain at fracture is M (the vertical drop from F).'
      },
      commonTrap: 'Confusing the vertical drop (total strain) with the parallel unloading line (plastic strain).',
      reference: 'Sample Midterm 2017 marking key Q10; Callister §6.6 (ductility, elastic recovery)'
    }
  }),
  m221(11, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Midterm Level',
    question: 'In Figure 1, at Point C the metal has:',
    figure: FIG_1,
    options: [
      'stretched elastically and will return to its original length, O, when the load is removed.',
      'stretched elastically and plastically and will return to its original length, O, when the load is removed',
      'stretched elastically and will have a permanent strain, I, when the load is removed',
      'stretched elastically and plastically and will have a permanent strain, I, when the load is removed',
      'stretched elastically and plastically and will have a permanent strain, H, when the load is removed'
    ],
    correctIndex: 4,
    explanation: {
      coreConcept: 'Past the yield point the strain is part elastic, part plastic. On unloading only the elastic part recovers, along a line parallel to the elastic slope.',
      stepByStep: [
        'C lies beyond B, so the metal has deformed elastically and plastically.',
        'Unloading from C follows the dashed line parallel to O–B, reaching the axis at H.',
        'H is the permanent strain; I (the vertical drop) is the total strain while loaded at C.'
      ],
      whyWrong: {
        '0': 'C is past yield, so the deformation is not purely elastic and it will not return to O.',
        '1': 'Plastic strain is permanent; it cannot return to O.',
        '2': 'Purely elastic strain leaves no permanent strain, and I is the total strain anyway.',
        '3': 'I is the total strain under load; after unloading the elastic part recovers, leaving H.'
      },
      commonTrap: 'Reading the permanent strain from the vertical drop (I) instead of the parallel unloading line (H).',
      reference: 'Sample Midterm 2017 marking key Q11; Callister §6.6'
    }
  }),
  m221(12, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Foundation',
    question: 'In Figure 1, the metal begins to neck at Point:',
    figure: FIG_1,
    options: ['B', 'C', 'D', 'E', 'F'],
    correctIndex: 2,
    explanation: {
      coreConcept: 'Necking starts at the maximum engineering stress (tensile strength). After that, deformation concentrates in the neck and the load-bearing area shrinks quickly.',
      stepByStep: ['D is the maximum of the curve.', 'Necking begins at the tensile strength, so at D.'],
      whyWrong: {
        '0': 'B is yielding: plastic deformation starts but it is still uniform.',
        '1': 'At C deformation is plastic but still uniform (strain hardening outpaces area loss).',
        '3': 'At E the neck already exists; it began earlier at D.',
        '4': 'F is fracture.'
      },
      commonTrap: 'Thinking necking starts at yield.',
      reference: 'Sample Midterm 2017 marking key Q12; Callister §6.6'
    }
  }),
  m221(13, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Midterm Level',
    question: 'In Figure 1, there is uniform plastic deformation at the following Point(s):',
    figure: FIG_1,
    options: ['B', 'C', 'D and E', 'E', 'F'],
    correctIndex: 1,
    explanation: {
      coreConcept: 'Between yield (B) and the tensile strength (D) the specimen deforms plastically and uniformly along its gauge length.',
      stepByStep: ['B is the onset of plasticity (the boundary).', 'C lies between B and D: plastic and still uniform.', 'From D onward the deformation localises in the neck (non-uniform).'],
      whyWrong: {
        '0': 'B is the yield point, the boundary where plasticity just begins.',
        '2': 'From D onward deformation is non-uniform (necking).',
        '3': 'E is in the necking region: non-uniform.',
        '4': 'F is fracture, at the end of non-uniform deformation.'
      },
      commonTrap: 'Not linking "uniform" to the region before the tensile strength.',
      reference: 'Sample Midterm 2017 marking key Q13; Callister §6.6'
    }
  }),
  m221(14, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Midterm Level',
    question: 'In Figure 1, there is non-uniform plastic deformation at the following Point(s):',
    figure: FIG_1,
    options: ['B', 'C', 'C and D', 'D, E and F', 'F only'],
    correctIndex: 3,
    explanation: {
      coreConcept: 'Once necking starts at the tensile strength (D), deformation concentrates in the neck until fracture (F).',
      stepByStep: ['Necking begins at D.', 'E and F are on the falling part of the curve, inside the necking region.', 'So non-uniform deformation: D, E and F.'],
      whyWrong: {
        '0': 'At B plasticity is just starting and is uniform.',
        '1': 'C is before the tensile strength: uniform.',
        '2': 'C is still uniform.',
        '4': 'E (and D) are also in the necking region.'
      },
      commonTrap: 'Choosing only the fracture point.',
      reference: 'Sample Midterm 2017 marking key Q14; Callister §6.6'
    }
  }),
  m221(15, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Midterm Level',
    question: 'In Figure 1, the Modulus of Resilience can be approximated by the area bounded by the Points:',
    figure: FIG_1,
    options: ['OAG', 'OBG', 'OBDJ', 'OBDK', 'OBFM'],
    correctIndex: 1,
    explanation: {
      coreConcept: 'The modulus of resilience is the strain energy per unit volume absorbed up to yielding: the area under the elastic part of the curve, $U_r \\approx \\sigma_y^2/2E$.',
      stepByStep: ['The elastic region ends at B (yield).', 'G is the strain at B on the axis.', 'The triangle O–B–G is the area under the elastic line.'],
      whyWrong: {
        '0': 'A is part-way up the elastic line; the area must run to yield (B).',
        '2': 'O–B–D–J includes plastic work up to the tensile strength.',
        '3': 'O–B–D–K also includes plastic work.',
        '4': 'O–B–F–M is the whole curve: toughness.'
      },
      commonTrap: 'Swapping resilience (elastic area) and toughness (total area).',
      reference: 'Sample Midterm 2017 marking key Q15; Callister §6.6 (resilience)'
    }
  }),
  m221(16, {
    topic: 'Stress–Strain Curve (Figure 1)',
    difficulty: 'Midterm Level',
    question: 'In Figure 1, the toughness can be approximated by the area bounded by the Points:',
    figure: FIG_1,
    options: ['OBG', 'OCI', 'OBDJ', 'OBDK', 'OBFM'],
    correctIndex: 4,
    explanation: {
      coreConcept: 'Toughness is the energy absorbed per unit volume up to fracture: the total area under the stress–strain curve.',
      stepByStep: ['The curve runs from O through B and D to fracture at F.', 'M is the total strain at fracture.', 'Area O–B–F–M is under the entire curve.'],
      whyWrong: {
        '0': 'O–B–G is only the elastic area (modulus of resilience).',
        '1': 'O–C–I stops at C, long before fracture.',
        '2': 'O–B–D–J stops at the tensile strength.',
        '3': 'O–B–D–K also stops at D.'
      },
      commonTrap: 'Stopping the area at the tensile strength instead of fracture.',
      reference: 'Sample Midterm 2017 marking key Q16; Callister §6.6 (toughness)'
    }
  }),
  m221(17, {
    topic: 'Atomic Bonding',
    difficulty: 'Foundation',
    question: 'Which of the following statements regarding atomic bonding is correct?',
    options: [
      'The three atomic primary bonds are ionic bonds, metallic bonds and Van der Waals forces.',
      'Intermolecular bonds are usually stronger than atomic bonds.',
      'Metallic bonds are the result of attraction of ions of opposite charge.',
      'Atoms are subjected to attraction and repulsion forces between them and the lowest potential energy occurs when these forces cancel each other.',
      'For ionic bonding, the coordination is small because only positive and negative ions are in contact.'
    ],
    correctIndex: 3,
    explanation: {
      coreConcept: 'At the equilibrium spacing $r_0$ the net force $F_N = F_A + F_R = 0$, which is exactly where the potential energy $E_N$ is a minimum (since $F = dE/dr$).',
      stepByStep: ['$F_N = F_A + F_R$; at $r_0$, $F_N = 0$.', '$F = dE/dr$, so $F = 0$ is a stationary point of $E_N(r)$: the minimum (bonding energy $E_0$).'],
      whyWrong: {
        '0': 'The three primary bonds are ionic, covalent and metallic. Van der Waals is a secondary bond.',
        '1': 'Secondary (intermolecular) bonds are much weaker than primary bonds.',
        '2': 'That describes ionic bonding. Metallic bonding is positive ion cores in a sea of delocalised electrons.',
        '4': 'Ionic solids have relatively high coordination numbers (e.g. 6 in NaCl); the bonds are non-directional.'
      },
      commonTrap: 'Listing Van der Waals as a primary bond.',
      reference: 'Sample Midterm 2017 marking key Q17; Callister §2.5–2.6; Lectures 2–3'
    }
  }),
  m221(18, {
    topic: 'Tensile Test Calculations',
    difficulty: 'Midterm Level',
    question: 'A tensile specimen with a 50 mm gauge length and 12 mm diameter was fractured in a tensile test. After fracture the gauge length became 68 mm and the neck was 6.4 mm in diameter. Which of the following values are correct?',
    options: [
      '26.5% elongation and 87.5% reduction in area',
      '18% elongation and 32.2% reduction in area',
      '18% elongation and 46.7% reduction in area',
      '36% elongation and 46.7% reduction in area',
      '36% elongation and 71.6% reduction in area'
    ],
    correctIndex: 4,
    explanation: {
      coreConcept: 'Ductility: percent elongation compares lengths, percent reduction in area compares cross-sections (so diameters are squared).',
      stepByStep: [],
      steps: [
        { title: 'Percent elongation', math: t`\%EL = \frac{l_f - l_0}{l_0}\times 100 = \frac{68-50}{50}\times 100 = 36\%` },
        { title: 'Reduction in area uses $A \propto d^2$', math: t`\%RA = \left(1 - \frac{d_f^{2}}{d_0^{2}}\right)\times 100 = \left(1 - \frac{6.4^{2}}{12^{2}}\right)\times 100` },
        { title: 'Evaluate', math: t`\%RA = \left(1 - \frac{40.96}{144}\right)\times 100 = 71.6\%` }
      ],
      answer: t`36\%\ \text{elongation},\quad 71.6\%\ \text{RA}`,
      whyWrong: {
        '0': 'Neither value matches $\\Delta l / l_0$ or $1 - (d_f/d_0)^2$.',
        '1': '18 mm is the length change, not a percentage of the 50 mm gauge length.',
        '2': '46.7% is the reduction in diameter, $(12-6.4)/12$, not in area. Area goes as $d^2$.',
        '3': 'Elongation is right, but 46.7% forgets to square the diameters.'
      },
      commonTrap: 'Computing the reduction in diameter instead of the reduction in area.',
      reference: 'Sample Midterm 2017 marking key Q18; Callister §6.6 (ductility)'
    }
  }),
  m221(19, {
    topic: 'Tensile Test Calculations',
    difficulty: 'Exam Master',
    question: 'A cylindrical rod of copper ($E = 110$ GPa) having a yield strength of 240 MPa is to be subjected to a load of 6660 N. If the length of the rod is 380 mm, what must be the diameter to allow an elongation of 0.50 mm?',
    options: ['7.65 mm', '76.5 mm', '1.92 mm', '15.3 mm', 'The stress strain diagram of copper is needed to solve this question'],
    correctIndex: 0,
    explanation: {
      coreConcept: "Combine $\\sigma = F/A$, $\\varepsilon = \\Delta l/l_0$ and Hooke's law $\\sigma = E\\varepsilon$, then check the stress is below yield so Hooke's law applies.",
      stepByStep: [],
      steps: [
        { title: "Hooke's law with $A = \\pi d^2/4$", math: t`\frac{4F}{\pi d^{2}} = E\,\frac{\Delta l}{l_0}` },
        { title: 'Solve for $d$', math: t`d = \sqrt{\frac{4 F l_0}{\pi E\,\Delta l}}` },
        { title: 'Substitute (SI units)', math: t`d = \sqrt{\frac{4(6660)(0.380)}{\pi(110\times10^{9})(0.50\times10^{-3})}} = \sqrt{5.859\times10^{-5}}\ \text{m}` },
        { title: 'Diameter', math: t`d = 7.65\times10^{-3}\ \text{m} = 7.65\ \text{mm}` },
        { title: 'Check: is it still elastic?', math: t`\sigma = \frac{4(6660)}{\pi(7.65\times10^{-3})^{2}} = 145\ \text{MPa} < 240\ \text{MPa}\ \checkmark` }
      ],
      answer: t`d = 7.65\ \text{mm}`,
      whyWrong: {
        '1': 'A factor-of-10 slip from a unit conversion (mm vs m, or MPa vs GPa).',
        '2': 'This comes from forgetting the square root or the factor 4 in the area.',
        '3': 'This is $2\\times 7.65$: using the radius formula $A = \\pi r^2$ but reporting $2r$ incorrectly.',
        '4': 'Not needed: the stress (145 MPa) is below yield, so the linear relation $\\sigma = E\\varepsilon$ is enough.'
      },
      commonTrap: 'Skipping the yield check. If the computed stress exceeded 240 MPa, Hooke\'s law would not apply.',
      reference: 'Sample Midterm 2017 marking key Q19; Callister §6.3 (Example 6.1 type)'
    }
  }),
  m221(20, {
    topic: 'Defects & Solid Solutions',
    difficulty: 'Foundation',
    question: 'Crystals can contain a variety of defects: examples of 1) Point; 2) Linear; 3) Planar/Area defects are respectively:',
    options: [
      'Grain boundaries: vacancy: crystal',
      'Substitutional atom: vacancy: dislocation',
      'Vacancy: linear density: planar density',
      'Dislocation: substitutional atom: vacancy:',
      'Vacancy: dislocation: grain boundary'
    ],
    correctIndex: 4,
    explanation: {
      coreConcept: 'Defects are classified by dimension: 0-D point (vacancies, interstitials, substitutional atoms), 1-D linear (dislocations), 2-D planar (grain boundaries, surfaces, twin boundaries).',
      stepByStep: ['Point: vacancy.', 'Linear: dislocation.', 'Planar: grain boundary.'],
      whyWrong: {
        '0': 'The order is reversed, and a "crystal" is not a defect.',
        '1': 'A vacancy is a point defect, not linear; a dislocation is linear, not planar.',
        '2': 'Linear and planar density are geometric quantities, not defects.',
        '3': 'Order is wrong: a dislocation is linear and a vacancy is a point defect.'
      },
      commonTrap: 'Mixing up the dimensional classes.',
      reference: 'Sample Midterm 2017 marking key Q20; Callister Ch. 4; Lecture 7'
    }
  }),
  // ------------------------------------------------------------------ True / False (1 mark each)
  m221(21, {
    topic: 'Dislocations & Slip',
    difficulty: 'Midterm Level',
    question: 'True or False: Dislocations move most easily in a crystal along the highest density planes in the lowest density direction.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Slip occurs on the most densely packed planes and in the most densely packed directions on those planes (smallest atomic step, least distortion).',
      stepByStep: ['The plane part is right: highest planar density.', 'The direction is wrong: slip runs along the highest linear density (close-packed) direction.'],
      whyWrong: { '0': 'The slip direction is the highest density direction, not the lowest.' },
      commonTrap: 'Reading only the first half of the statement. The key underlines "lowest".',
      reference: 'Sample Midterm 2017 marking key Q21; Callister §7.4 (slip systems)'
    }
  }),
  m221(22, {
    topic: 'Crystal Structures & Densities',
    difficulty: 'Foundation',
    question: 'True or False: The $[111]$ direction in the FCC unit cell is parallel to the $(111)$ plane.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'In cubic crystals the direction $[hkl]$ is perpendicular (normal) to the plane $(hkl)$ with the same indices.',
      stepByStep: ['$[111]$ is the normal of $(111)$ in any cubic system.', 'So it is perpendicular, not parallel (the key writes ⊥).'],
      whyWrong: { '0': 'Same-index direction and plane in a cubic cell are perpendicular.' },
      commonTrap: 'Assuming matching indices mean parallel.',
      reference: 'Sample Midterm 2017 marking key Q22; Callister §3.10'
    }
  }),
  m221(23, {
    topic: 'Atomic Bonding',
    difficulty: 'Foundation',
    question: 'True or False: The valence electrons in a carbon atom can form four sp3 hybrid orbitals which form four directional ionic bonds.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'sp³ hybrid orbitals form directional covalent bonds (the tetrahedral bonds in diamond and CH₄). Ionic bonds are non-directional.',
      stepByStep: ['Hybridisation is right: carbon forms four sp³ orbitals at 109.5°.', 'They share electrons, so the bonds are covalent, not ionic.'],
      whyWrong: { '0': 'The bonds are covalent; ionic bonds are not directional.' },
      commonTrap: 'Missing the single wrong word "ionic".',
      reference: 'Sample Midterm 2017 marking key Q23; Callister §2.6; Lecture 3'
    }
  }),
  m221(24, {
    topic: 'Diffusion',
    difficulty: 'Foundation',
    question: 'True or False: The rate of diffusion in materials depends on their state: diffusion is fastest in the gaseous state, intermediate in the liquid state and slowest in the solid state all other factors being equal.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'Atomic mobility falls as packing and bonding increase: gas > liquid > solid.',
      stepByStep: ['Gas atoms move freely; liquids are denser; solid-state diffusion needs vacancies plus an activation energy.'],
      whyWrong: { '1': 'The ordering gas > liquid > solid is correct.' },
      commonTrap: 'Overthinking: the statement is a plain true fact.',
      reference: 'Sample Midterm 2017 marking key Q24; Callister Ch. 5'
    }
  }),
  m221(25, {
    topic: 'Crystal Structures & Densities',
    difficulty: 'Foundation',
    question: 'True or False: The Atomic Packing Factor (APF) in the FCC system is 0.74 whereas in BCC it is lower, at 0.68.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'APF = volume of atoms in the cell ÷ cell volume. FCC (and HCP) = 0.74, BCC = 0.68, SC = 0.52.',
      stepByStep: ['FCC: $4\\cdot\\tfrac43\\pi R^3 / (2\\sqrt2 R)^3 = 0.74$.', 'BCC: $2\\cdot\\tfrac43\\pi R^3 / (4R/\\sqrt3)^3 = 0.68$.'],
      whyWrong: { '1': 'Both values are the standard results.' },
      commonTrap: 'Swapping the FCC and BCC values.',
      reference: 'Sample Midterm 2017 marking key Q25; Callister §3.4; Lecture 4'
    }
  }),
  m221(26, {
    topic: 'Diffusion',
    difficulty: 'Foundation',
    question: 'True or False: Solid state diffusion of atoms requires the following: an adjacent vacant site and sufficient energy to move the atom.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'For an atom to jump: (1) there must be an empty adjacent site, and (2) it must have enough vibrational energy to break bonds and squeeze past its neighbours.',
      stepByStep: ['These are exactly Callister’s two conditions for atomic motion.'],
      whyWrong: { '1': 'Both conditions are required, as stated.' },
      commonTrap: 'Thinking interstitial diffusion needs no free site. It still needs an empty interstitial position.',
      reference: 'Sample Midterm 2017 marking key Q26; Callister §5.2'
    }
  }),
  m221(27, {
    topic: 'Dislocations & Slip',
    difficulty: 'Midterm Level',
    question: 'True or False: Movement of dislocations in crystals by slip occurs in metallically and ionically bonded materials relatively easily at room temperature but they cannot move in covalently bonded materials due to the strong directionality of the bonds.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Slip is easy in metals. In ionic solids, slip would bring like-charged ions next to each other (strong repulsion), so dislocation motion is difficult and ionic ceramics are brittle.',
      stepByStep: ['Metals: non-directional bonds, easy slip.', 'Ionic: slip is restricted by electrostatic repulsion, so not "relatively easy".', 'The key underlines "ionically".'],
      whyWrong: { '0': 'Ionic materials do not slip easily at room temperature.' },
      commonTrap: 'Grouping ionic with metallic because both are non-directional.',
      reference: 'Sample Midterm 2017 marking key Q27; Callister §7.2'
    }
  }),
  m221(28, {
    topic: 'Crystal Structures & Densities',
    difficulty: 'Midterm Level',
    question: 'True or False: $\\{100\\}$ represents the family of planes that make up the sides of the cube of the BCC unit cell and for the FCC unit cell it is the $\\{110\\}$ family of planes.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Miller indices describe geometry in the cubic lattice, not the atom arrangement. The cube faces are $\\{100\\}$ for every cubic cell: SC, BCC and FCC.',
      stepByStep: ['A cube face cuts one axis at 1 and is parallel to the other two, giving $(100)$, $(010)$, $(001)$.', 'That is independent of whether the cell is BCC or FCC.', '$\\{110\\}$ planes are diagonal planes through the cell.'],
      whyWrong: { '0': 'The cube faces are $\\{100\\}$ in FCC as well.' },
      commonTrap: 'Thinking the crystal structure changes the indices of the cube faces.',
      reference: 'Sample Midterm 2017 marking key Q28; Callister §3.10'
    }
  }),
  m221(29, {
    topic: 'Diffusion',
    difficulty: 'Exam Master',
    question: 'True or False: For a material where $D_0 = 1.6 \\times 10^{-4}\\ \\text{m}^2/\\text{s}$ and $Q_d = 181\\ \\text{kJ/mol}$ the diffusion coefficient at $1200^{\\circ}$C is $8.4 \\times 10^{-7}\\ \\text{m}^2\\,\\text{s}^{-1}$.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Use the Arrhenius form $D = D_0 \\exp(-Q_d/RT)$ with $T$ in kelvin.',
      stepByStep: [],
      steps: [
        { title: 'Convert the temperature', math: t`T = 1200 + 273 = 1473\ \text{K}` },
        { title: 'Exponent', math: t`\frac{Q_d}{RT} = \frac{181\,000}{8.314 \times 1473} = 14.78` },
        { title: 'Diffusion coefficient', math: t`D = 1.6\times10^{-4}\,e^{-14.78} = 1.6\times10^{-4}\times 3.81\times10^{-7} \approx 6.1\times10^{-11}\ \text{m}^2/\text{s}` },
        { title: 'Compare', note: '$6.1\\times10^{-11}$ is nowhere near $8.4\\times10^{-7}$, so the statement is false (the key underlines the exponent).' }
      ],
      answer: t`D \approx 6.1\times10^{-11}\ \text{m}^2/\text{s}\ \Rightarrow\ \text{False}`,
      whyWrong: { '0': 'The Arrhenius calculation gives about $6.1\\times10^{-11}$ m²/s.' },
      commonTrap: 'Using °C instead of K, or kJ instead of J for $Q_d$.',
      reference: 'Sample Midterm 2017 marking key Q29; Callister §5.5 (Eq. 5.8)'
    }
  }),
  m221(30, {
    topic: 'Crystal Structures & Densities',
    difficulty: 'Exam Master',
    question: 'True or False: Copper (which is FCC, and has an atomic mass of 63.5 g/mol and an atomic radius of 0.128 nm) has a theoretical crystal density of 8.89 Mg m⁻³.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'Theoretical density $\\rho = \\dfrac{nA}{V_C N_A}$, with $n = 4$ and $a = 2\\sqrt2\\,R$ for FCC.',
      stepByStep: [],
      steps: [
        { title: 'Lattice parameter', math: t`a = 2\sqrt2\,R = 2\sqrt2\,(0.128\ \text{nm}) = 0.3620\ \text{nm}` },
        { title: 'Cell volume', math: t`V_C = a^{3} = (0.3620\times10^{-7}\ \text{cm})^{3} = 4.745\times10^{-23}\ \text{cm}^{3}` },
        { title: 'Density', math: t`\rho = \frac{4(63.5)}{(4.745\times10^{-23})(6.023\times10^{23})} = 8.89\ \text{g/cm}^{3}` },
        { title: 'Units', note: '1 g/cm³ = 1 Mg/m³, so $\\rho = 8.89$ Mg m⁻³: true.' }
      ],
      answer: t`\rho = 8.89\ \text{Mg/m}^{3}\ \Rightarrow\ \text{True}`,
      whyWrong: { '1': 'The FCC density calculation gives exactly 8.89 g/cm³ = 8.89 Mg/m³.' },
      commonTrap: 'Using $n = 2$ (BCC) or $a = 4R/\\sqrt3$ for an FCC metal.',
      reference: 'Sample Midterm 2017 marking key Q30; Callister §3.5 (Example 3.3)'
    }
  }),
  m221(31, {
    topic: 'Dislocations & Slip',
    difficulty: 'Foundation',
    question: 'True or False: FCC metals and BCC metals are generally ductile because they have sufficient number of good slip systems (slip directions and slip planes) whereas HCP metals are generally more brittle as they have fewer independent slip systems and slip is more difficult.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'FCC has 12 slip systems and BCC 12 or more, so they are generally ductile. HCP has few independent (basal) slip systems, so it is generally less ductile.',
      stepByStep: ['Ductility needs enough independent slip systems to accommodate shape change.', 'FCC and BCC have them; HCP does not, at room temperature.'],
      whyWrong: { '1': 'The statement matches the slip-system argument in Callister Table 7.1.' },
      commonTrap: 'Overgeneralising: "brittle" here means comparatively less ductile.',
      reference: 'Sample Midterm 2017 marking key Q31; Callister §7.4 (Table 7.1)'
    }
  }),
  m221(32, {
    topic: 'Microscopy',
    difficulty: 'Foundation',
    question: 'True or False: Electron microscopes probe microstructures with greater resolution and magnification than optical microscopes.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'Resolution is limited by wavelength. Electron beams have far shorter wavelengths than visible light, so SEM and TEM resolve much finer detail at much higher magnification.',
      stepByStep: ['Optical: about 2000× at best.', 'Electron: up to about 1,000,000× (TEM).'],
      whyWrong: { '1': 'Electron microscopy has higher resolution and magnification.' },
      commonTrap: 'None: a straight fact.',
      reference: 'Sample Midterm 2017 marking key Q32; Callister §4.10'
    }
  }),
  m221(33, {
    topic: 'Microscopy',
    difficulty: 'Foundation',
    question: 'True or False: Etching is used only to reveal the microstructure of amorphous materials.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Etching a polished metal attacks grain boundaries and differently oriented grains at different rates, revealing the grains of crystalline (polycrystalline) materials under the optical microscope.',
      stepByStep: ['Amorphous materials have no grains to reveal.', 'Etching is the standard way to see grain structure in crystalline metals.'],
      whyWrong: { '0': 'Etching is mainly used on crystalline materials; "only amorphous" is wrong.' },
      commonTrap: 'Missing the word "amorphous", which the key underlines.',
      reference: 'Sample Midterm 2017 marking key Q33; Callister §4.10'
    }
  }),
  m221(34, {
    topic: 'Tensile Test Calculations',
    difficulty: 'Midterm Level',
    question: 'True or False: During a tensile test, engineering stress will always have an equal or higher value than true stress.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Engineering stress uses the original area $A_0$; true stress uses the instantaneous area $A_i$. In tension $A_i \\le A_0$, so $\\sigma_T \\ge \\sigma$.',
      stepByStep: ['$\\sigma = F/A_0$, $\\sigma_T = F/A_i$.', 'The specimen thins, so $A_i < A_0$ and the true stress is higher.', 'It is the reverse of the statement.'],
      whyWrong: { '0': 'True stress is equal or higher, not lower.' },
      commonTrap: 'Reversing the inequality. The key underlines "higher".',
      reference: 'Sample Midterm 2017 marking key Q34; Callister §6.7'
    }
  }),
  m221(35, {
    topic: 'Defects & Solid Solutions',
    difficulty: 'Foundation',
    question: 'True or False: In an alloy, the material that dissolves the alloying element is called the unit cell.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'The host that dissolves the alloying element is the solvent; the dissolved element is the solute.',
      stepByStep: ['Solvent: host, majority element.', 'Solute: minority element.', 'Unit cell is a crystallography term, unrelated.'],
      whyWrong: { '0': 'The correct term is solvent.' },
      commonTrap: 'None: vocabulary.',
      reference: 'Sample Midterm 2017 marking key Q35; Callister §4.3'
    }
  }),
  m221(36, {
    topic: 'Defects & Solid Solutions',
    difficulty: 'Midterm Level',
    question: 'True or False: A metallic solid solution is composed of two phases: the solute and the precipitate.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'A solid solution is a single phase: solute atoms sit in the solvent crystal (substitutional or interstitial) and the crystal structure is kept. A precipitate means a second phase has formed.',
      stepByStep: ['One phase, homogeneous composition.', 'A precipitate only appears when the solubility limit is exceeded, so it is not part of a solid solution.'],
      whyWrong: { '0': 'A solid solution is one phase.' },
      commonTrap: 'Thinking two elements means two phases.',
      reference: 'Sample Midterm 2017 marking key Q36; Callister §4.3'
    }
  }),
  m221(37, {
    topic: 'Atomic Bonding',
    difficulty: 'Midterm Level',
    question: 'True or False: Generally, weakly bonded solids have low melting point, low elastic modulus, and high thermal expansion coefficient.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'From the potential energy curve: a shallow, wide well (weak bond) means a low melting point, a small curvature at $r_0$ (low $E$) and a more asymmetric well (larger thermal expansion).',
      stepByStep: ['Bond energy $E_0$ ↓ → $T_m$ ↓.', 'Slope of $F(r)$ at $r_0$ ↓ → $E$ ↓.', 'Asymmetry ↑ → $\\alpha$ ↑.'],
      whyWrong: { '1': 'All three trends follow from a shallow energy well.' },
      commonTrap: 'Thinking a weak bond gives low thermal expansion.',
      reference: 'Sample Midterm 2017 marking key Q37; Callister §2.5, §6.3, §19.3; Lecture 3'
    }
  }),
  m221(38, {
    topic: 'Defects & Solid Solutions',
    difficulty: 'Midterm Level',
    question: 'True or False: When molten metals are solidified (frozen) into crystalline solids they do not contain any vacancies or dislocations: these defects are created when the solid metal is plastically deformed.',
    options: TF,
    correctIndex: 1,
    explanation: {
      coreConcept: 'Vacancies exist in equilibrium in every crystal above 0 K ($N_v = N\\exp(-Q_v/kT)$), and dislocations are introduced during solidification and by thermal stresses. Plastic deformation multiplies dislocations; it does not create the first ones.',
      stepByStep: ['Equilibrium vacancies: present at any $T > 0$ K.', 'As-solidified metals already contain dislocations.'],
      whyWrong: { '0': 'Freshly solidified metals contain both vacancies and dislocations.' },
      commonTrap: 'Thinking defects only come from deformation.',
      reference: 'Sample Midterm 2017 marking key Q38; Callister §4.2, §7.2'
    }
  }),
  m221(39, {
    topic: 'Diffusion',
    difficulty: 'Foundation',
    question: 'True or False: As temperature decreases, the fraction of the total number of atoms that are capable of diffusive motion decreases.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'Both the fraction of atoms with enough energy to jump and the vacancy concentration fall exponentially as temperature drops (Boltzmann factor $e^{-Q/kT}$).',
      stepByStep: ['Lower $T$ means fewer atoms above the activation barrier and fewer vacancies, so less diffusive motion.'],
      whyWrong: { '1': 'The fraction decreases with temperature, as stated.' },
      commonTrap: 'None: direct Arrhenius reasoning.',
      reference: 'Sample Midterm 2017 marking key Q39; Callister §5.5'
    }
  }),
  m221(40, {
    topic: 'Crystal Structures & Densities',
    difficulty: 'Foundation',
    question: 'True or False: The coordination number for the hexagonal close-packed structure is 12.',
    options: TF,
    correctIndex: 0,
    explanation: {
      coreConcept: 'HCP and FCC are both close-packed with coordination number 12 (6 in-plane + 3 above + 3 below).',
      stepByStep: ['Each atom touches 6 neighbours in its basal plane and 3 in each adjacent plane: 12.'],
      whyWrong: { '1': 'HCP coordination number is 12.' },
      commonTrap: 'Confusing with BCC (8).',
      reference: 'Sample Midterm 2017 marking key Q40; Callister §3.4'
    }
  })
];

export const TEACHER_EXAM_QUESTIONS: PracticeQuestion[] = [...MIAE221_TEACHER_EXAM, ...MIAE215_TEACHER_EXAM, ...INDU211_TEACHER_EXAM];

export const teacherQuestionsFor = (courseId: CourseId): PracticeQuestion[] =>
  TEACHER_EXAM_QUESTIONS.filter((q) => q.courseId === courseId);

// A teacher-exam drill is addressed as tx_<topic|all>_<count|all>_<o|s> (o = paper order, s = shuffled),
// so it fits the #/quiz/:course/:section route and survives reloads and the back button.
export interface TeacherDrillSpec {
  topic: string; // topic id or 'all'
  count: number | 'all';
  ordered: boolean;
}

export const teacherDrillId = ({ topic, count, ordered }: TeacherDrillSpec): string =>
  `tx_${topic}_${count}_${ordered ? 'o' : 's'}`;

export const parseTeacherDrillId = (sectionId: string): TeacherDrillSpec | null => {
  const m = sectionId.match(/^tx_([a-z-]+)_(all|\d+)_([os])$/);
  if (!m) return null;
  return { topic: m[1], count: m[2] === 'all' ? 'all' : Number(m[2]), ordered: m[3] === 'o' };
};

export const teacherTopicLabel = (courseId: CourseId, topic: string): string | undefined =>
  TEACHER_EXAM_SETS[courseId]?.topics.find((tp) => tp.id === topic)?.label;

// Questions in a drill's pool, in paper order
export const teacherDrillPool = (courseId: CourseId, spec: TeacherDrillSpec): PracticeQuestion[] => {
  const all = teacherQuestionsFor(courseId);
  if (spec.topic === 'all') return all;
  const label = teacherTopicLabel(courseId, spec.topic);
  return all.filter((q) => q.topic === label);
};

export const teacherDrillLabel = (courseId: CourseId, spec: TeacherDrillSpec): string => {
  const scope = spec.topic === 'all' ? 'All questions' : teacherTopicLabel(courseId, spec.topic) ?? spec.topic;
  return `Teacher Exam · ${scope}${spec.ordered ? ' (paper order)' : ''}`;
};
