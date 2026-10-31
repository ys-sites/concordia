// ENGR 213 — Applied Ordinary Differential Equations. Teaching order follows the teacher's lectures 1–9.
import type { CourseSpec } from './types';

export const ENGR213_SPEC: CourseSpec = {
  id: 'ENGR213',
  whatYouLearn: [
    'Classify any ODE by order and linearity, and check a proposed solution',
    'Recognise a first-order equation on sight: separable, linear, exact, Bernoulli, homogeneous',
    'Solve each type with its recipe, and handle the initial condition and lost solutions',
    'Build and solve growth, decay, cooling, mixture and logistic models',
    'Work with complex numbers in polar form and find powers and roots with De Moivre',
    'Answer real past midterm and quiz questions under time pressure'
  ],
  sections: [
    {
      id: 'ch1',
      title: 'What a differential equation is',
      subtitle: 'Ch 1.1–1.2 · Lectures 1–2',
      midterm: true,
      lessons: [
        {
          id: 'classify',
          title: 'Order, linearity & the language of ODEs',
          summary: 'Read an equation and say its type, order and whether it is linear: the first question on almost every paper.',
          gate: ['classify'],
          bank: [{ ch: 'ch1', re: /order|linear|classif|type|notation|normal form|differential form|ways to classify|why differential|systems of|degree/i }, { ch: 'classification' }, { ch: 'ch1' }],
          read: [/^02 - Lecture Notes Explained\/Lecture 1 - /],
          resources: [/^03 - Chapter 1 Summary\//, /^02 - Textbook Expanded Notes\/Chapter 01 /, /^Professor Leonard\/01 - The Big Picture/, /^Professor Dave\/0[12] - /]
        },
        {
          id: 'solutions-ivps',
          title: 'Solutions, families & initial-value problems',
          summary: 'What it means to be a solution, explicit versus implicit, n-parameter families, and when an IVP has exactly one solution.',
          gate: ['solution'],
          bank: [
            { ch: 'ch1', re: /solution|verif|explicit|implicit|famil|interval|IVP|initial|existence|uniqueness|theorem|trivial|requirement|parameter|checking/i },
            { ch: 'classification', re: /verif|famil/i }
          ],
          read: [/^02 - Lecture Notes Explained\/Lecture 2 - /],
          resources: [/^Professor Leonard\/03 - /, /^Professor Leonard\/04 - Introduction to Initial/]
        },
        {
          id: 'direction-fields',
          title: 'Direction fields & autonomous equations',
          summary: 'Sketch solutions without solving: slope fields, critical points and the stability of each equilibrium.',
          bank: [{ ch: 'ch1', re: /direction|autonomous|critical|phase|stab|equilibri|semi/i }, { ch: 'autonomous-phase' }],
          read: [/^04 - Chapter 2 Summary\/Topic 2\.1 /],
          resources: [/^Professor Leonard\/02 - Slope Fields/, /^Professor Leonard\/(09|10) - (Introduction to|Applications of) Slope/]
        }
      ]
    },
    {
      id: 'ch2-methods',
      title: 'Solving first-order equations',
      subtitle: 'Ch 2.2–2.5 · Lectures 3–5',
      midterm: true,
      lessons: [
        {
          id: 'calculus-toolkit',
          title: 'The integration you need',
          summary: 'Every method ends in an integral: substitution, parts, partial fractions and the standard forms, drilled until they are automatic.',
          drill: [{ method: 'formulas' }],
          read: [/^00 - Calculus Review for ODEs\//]
        },
        {
          id: 'separable',
          title: 'Separable equations',
          summary: 'Split the variables, integrate both sides, apply the initial condition, and never lose the constant solutions.',
          gate: ['sep'],
          videos: ['tutor:separable'],
          bank: [{ ch: 'separable', not: /reduction/i }],
          drill: [{ method: 'separable' }],
          read: [/^02 - Lecture Notes Explained\/Lecture 3 - /],
          resources: [/^04 - Chapter 2 Summary\/Topic 2\.2 /, /^Professor Leonard\/04 - Separable/, /^Professor Dave\/03 - /]
        },
        {
          id: 'linear',
          title: 'Linear equations & the integrating factor',
          summary: "Put the equation in standard form y' + P(x)y = f(x), build the integrating factor, and read the interval of the solution.",
          gate: ['lin'],
          videos: ['tutor:linear_if'],
          bank: [{ ch: 'linear' }],
          drill: [{ method: 'linear_if' }],
          resources: [/^04 - Chapter 2 Summary\/Topic 2\.3 /, /^Professor Leonard\/05 - First-Order Linear/, /^Professor Dave\/04 - /]
        },
        {
          id: 'exact',
          title: 'Exact equations',
          summary: 'Test ∂M/∂y = ∂N/∂x, then build the potential function F(x, y) = C term by term.',
          gate: ['exact'],
          videos: ['tutor:exact'],
          bank: [{ ch: 'exact' }],
          drill: [{ method: 'exact' }],
          read: [/^02 - Lecture Notes Explained\/Lecture 4 - /],
          resources: [/^Professor Leonard\/09 - Exact/, /^Professor Dave\/05 - /]
        },
        {
          id: 'integrating-factors',
          title: 'Non-exact equations: special integrating factors',
          summary: 'When the test fails, a factor μ(x) or μ(y) can make the equation exact. Learn which one to try and why.',
          videos: ['tutor:non_exact'],
          bank: [{ ch: 'exact', re: /integrating factor|μ|non-exact|inspection|special/i }],
          drill: [{ method: 'non_exact' }],
          read: [/^04 - Chapter 2 Summary\/Topic 2\.4 /]
        },
        {
          id: 'bernoulli',
          title: 'Bernoulli equations',
          summary: "Spot y' + P(x)y = f(x)yⁿ, substitute u = y¹⁻ⁿ, and solve the linear equation that comes out.",
          gate: ['bern'],
          videos: ['tutor:bernoulli'],
          bank: [{ ch: 'bernoulli' }],
          drill: [{ method: 'bernoulli' }],
          read: [/^02 - Lecture Notes Explained\/Lecture 5 - /],
          resources: [/^04 - Chapter 2 Summary\/Topic 2\.5 /, /^Professor Leonard\/08 - Bernoulli/, /^Professor Dave\/06 - /]
        },
        {
          id: 'homogeneous',
          title: 'Homogeneous equations: y = ux',
          summary: 'Check that every term has the same degree, substitute y = ux, and separate.',
          gate: ['homog'],
          videos: ['tutor:homogeneous'],
          bank: [{ ch: 'homogeneous' }],
          drill: [{ method: 'homogeneous' }],
          resources: [/^Professor Leonard\/07 - Homogeneous/]
        },
        {
          id: 'reduction',
          title: "Reduction to separable: y' = f(Ax + By + C)",
          summary: 'A linear argument inside f becomes a new variable u, and the equation separates.',
          videos: ['tutor:linear_arg'],
          bank: [{ ch: 'sub-linear' }, { ch: 'separable', re: /reduction/i }],
          drill: [{ method: 'linear_arg' }]
        },
        {
          id: 'which-method',
          title: 'Which method? Recognising the equation',
          summary: 'Mixed first-order equations: decide the type in ten seconds, then solve. This is what the midterm actually tests.',
          bank: [{ ch: 'substitutions-mix' }, { ch: 'ch1', re: /method|choos/i }]
        }
      ]
    },
    {
      id: 'ch2-models',
      title: 'Modelling with first-order equations',
      subtitle: 'Ch 2.7–2.8 · Lectures 6–7',
      midterm: true,
      lessons: [
        {
          id: 'modelling',
          title: 'Building a model',
          summary: 'Turn a sentence about a rate into an equation: variables, proportionality and the initial condition.',
          bank: [{ ch: 'applications' }],
          read: [/^02 - Lecture Notes Explained\/Lecture 6 - /],
          resources: [/^04 - Chapter 2 Summary\/Topic 2\.7 /]
        },
        {
          id: 'growth-decay',
          title: 'Growth & decay',
          summary: 'dA/dt = kA: populations, bacteria, radioactive decay, half-life and doubling time.',
          gate: ['growth'],
          bank: [{ ch: 'applications', re: /growth|decay|bacteria|doubl|radioactiv|half-life/i }]
        },
        {
          id: 'cooling',
          title: "Newton's law of cooling",
          summary: 'dT/dt = k(T − Tₘ): find k from one reading, then predict a temperature or a time.',
          tools: ['3d:newton-cooling'],
          gate: ['cool'],
          bank: [{ ch: 'applications', re: /cool|warm|newton|temperature/i }],
          drill: [{ method: 'applications', re: /cool/i }]
        },
        {
          id: 'mixtures-circuits',
          title: 'Mixtures & circuits',
          summary: 'Rate in minus rate out for brine tanks, and the same linear equation for LR and RC circuits.',
          tools: ['3d:mixing-tank', '3d:lr-rc-circuit'],
          bank: [{ ch: 'applications', re: /mix|brine|tank|salt|circuit|\bLR\b|\bRC\b/i }],
          drill: [{ method: 'applications', re: /mix|tank/i }],
          resources: [/^Professor Leonard\/06 - Tank Mixing/]
        },
        {
          id: 'logistic',
          title: 'Logistic & nonlinear models',
          summary: 'dP/dt = P(a − bP): carrying capacity, the S-curve, equilibria and harvesting.',
          gate: ['logis'],
          bank: [{ ch: 'nonlinear-models' }, { ch: 'applications', re: /logistic|phase line|equilibrium/i }],
          read: [/^02 - Lecture Notes Explained\/Lecture 7 - /],
          resources: [/^Professor Leonard\/10 - Population/]
        }
      ]
    },
    {
      id: 'ch17',
      title: 'Complex numbers',
      subtitle: 'CH 17.1–17.2 · Lecture 8',
      midterm: true,
      lessons: [
        {
          id: 'complex-arithmetic',
          title: 'Complex arithmetic, modulus & polar form',
          summary: 'Add, multiply and divide; find |z| and Arg(z); move between a + bi and re^{iθ}.',
          gate: ['cplx'],
          bank: [{ ch: 'complex', re: /arith|modulus|arg|polar|euler|conjugate|division|product|imaginary|exponential/i }],
          drill: [{ method: 'complex_numbers', re: /17\.1/ }],
          read: [/^02 - Lecture Notes Explained\/Lecture 8 - /],
          resources: [/^02 - Textbook Expanded Notes\/Chapter 17 /]
        },
        {
          id: 'roots-de-moivre',
          title: 'Powers & roots: De Moivre',
          summary: 'zⁿ in one line, all n roots of a complex number, and the complex roots of auxiliary equations.',
          tools: ['3d:complex-roots'],
          gate: ['roots'],
          bank: [{ ch: 'complex' }],
          drill: [{ method: 'complex_numbers' }]
        }
      ]
    },
    {
      id: 'higher-order',
      title: 'Higher-order linear equations',
      subtitle: 'Ch 4 · Lectures 9–14 (Wronskian, Constant Coeffs, Undetermined Coeffs, Variation of Parameters, Cauchy–Euler)',
      lessons: [
        {
          id: 'higher-order-theory',
          title: 'Theory of higher-order linear equations & Wronskian',
          summary: 'Fundamental sets, the Wronskian determinant, reduction of order, and superposition: why n independent solutions span the full solution space.',
          gate: ['wronskian'],
          read: [/^02 - Lecture Notes Explained\/Lecture 9 - /]
        },
        {
          id: 'constant-coefficients',
          title: 'Homogeneous linear ODEs with constant coefficients',
          summary: 'The auxiliary equation am² + bm + c = 0 and its three root cases: distinct real, repeated real (x·e^{mx}), and complex conjugate roots.',
          tools: ['3d:mass-spring'],
          gate: ['const-coeff'],
          videos: ['tutor:second_order'],
          bank: [{ ch: 'lecture_11' }],
          read: [/^02 - Comprehensive Topic Guides.*Lecture 11/, /^02 - Textbook Expanded Notes\/Chapter 03 /]
        },
        {
          id: 'undetermined-coefficients',
          title: 'Nonhomogeneous ODEs: method of undetermined coefficients',
          summary: 'Superposition y = yc + yp, trial forms for polynomials, exponentials and sinusoids, and the x^s duplication rule when a trial term matches yc.',
          gate: ['undet-coeff'],
          bank: [{ ch: 'lecture_12' }],
          read: [/^02 - Comprehensive Topic Guides.*Lecture 12/]
        },
        {
          id: 'variation-of-parameters',
          title: 'Method of variation of parameters (Lecture 13)',
          summary: "Solve any nonhomogeneous 2nd-order linear ODE y'' + P(x)y' + Q(x)y = f(x) using yp = u₁(x)y₁(x) + u₂(x)y₂(x) and Cramer's rule Wronskians.",
          gate: ['var-param']
        },
        {
          id: 'cauchy-euler',
          title: 'Cauchy–Euler (equidimensional) equations (Lecture 14)',
          summary: 'Solve ax²y\'\' + bxy\' + cy = g(x) with the power trial y = x^m, auxiliary equation am(m−1) + bm + c = 0, logarithmic repeated/complex cases, and Variation of Parameters.',
          gate: ['cauchy-euler']
        },
        {
          id: 'laplace-preview',
          title: 'Looking ahead: Laplace transforms',
          summary: 'A first look at the integral transform that converts initial-value differential equations into algebraic equations in s.',
          read: [/^02 - Textbook Expanded Notes\/Chapter 04 /]
        }
      ]
    }
  ],
  examPrep: {
    bankPast: [
      { ch: 'past', title: 'Exam-style questions: midterms & quizzes', summary: 'Questions modelled on Concordia midterms and quizzes from 2011 to 2025, each with a worked solution.' },
      { ch: 'past-final', title: 'Exam-style questions: finals', summary: 'Questions modelled on past final examinations (2005–2023), for when the course moves past the midterm.' }
    ],
    mock: { title: 'Mock midterm', size: 15, minutes: 75 },
    extra: [
      {
        id: 'teacher-practice',
        title: 'Midterm practice by subject',
        subtitle: 'Past midterm and quiz questions grouped by ODE method, each with a worked solution and video explanation',
        lessons: [
          {
            id: 'tp-classify-ivp',
            title: 'Classification, solutions & IVPs',
            summary: 'Order, linearity, solution verification and existence-uniqueness intervals.',
            steps: [
              { kind: 'practice', title: 'Solve the classification & IVP questions', slug: 'practice', questions: { gateTopics: ['classify', 'solution'] }, ordered: true }
            ]
          },
          {
            id: 'tp-separable-linear',
            title: 'Separable & linear equations',
            summary: 'Separation of variables, integrating factors ?(x), and singular solutions.',
            steps: [
              { kind: 'practice', title: 'Solve the separable & linear questions', slug: 'practice', questions: { gateTopics: ['sep', 'lin'] }, ordered: true }
            ]
          },
          {
            id: 'tp-exact',
            title: 'Exact equations & integrating factors',
            summary: 'Exactness test ?M/?y = ?N/?x and reconstructing F(x, y) = C.',
            steps: [
              { kind: 'practice', title: 'Solve the exact ODE questions', slug: 'practice', questions: { gateTopics: ['exact'] }, ordered: true }
            ]
          },
          {
            id: 'tp-substitutions',
            title: 'Bernoulli & homogeneous substitutions',
            summary: 'Transforming Bernoulli (u = y???) and homogeneous (y = ux) ODEs.',
            steps: [
              { kind: 'practice', title: 'Solve the substitution questions', slug: 'practice', questions: { gateTopics: ['bern', 'homog'] }, ordered: true }
            ]
          },
          {
            id: 'tp-models-complex',
            title: 'Growth, cooling, logistic & complex numbers',
            summary: 'First-order physical models and De Moivre powers and roots.',
            steps: [
              { kind: 'practice', title: 'Solve the modelling & complex questions', slug: 'practice', questions: { gateTopics: ['growth', 'cool', 'logis', 'cplx', 'roots'] }, ordered: true }
            ]
          },
          {
            id: 'tp-full-paper',
            title: 'Complete midterm subject bundle',
            summary: 'All past midterm and quiz questions grouped by subject, with a timer, immediate feedback, and video solutions.',
            steps: [
              { kind: 'exam', title: 'Complete midterm subject bundle', slug: 'exam', questions: { gateTopics: ['classify', 'solution', 'sep', 'lin', 'exact', 'bern', 'homog', 'growth', 'cool', 'logis', 'cplx', 'roots'] }, ordered: false, timeLimit: 75 }
            ]
          }
        ]
      },
      {
        id: 'tutor-notes',
        title: 'Tutor notes & solving system',
        subtitle: 'How a tutor attacks each question type',
        lessons: [
          {
            id: 'gradesaver',
            title: 'The Gradesaver solving system',
            summary: "A tutor's move-by-move system for each question type, with an exemplar solution for every move.",
            steps: [
              { kind: 'notes', title: 'The moves, type by type', slug: 'moves', notesKey: 'gradesaver', minutes: 12 },
              { kind: 'reading', title: 'Read: Gradesaver Master Solving System', slug: 'read', docs: [/Gradesaver Master Solving System/] }
            ]
          },
          {
            id: 'tutorials',
            title: 'Tutorial exercises',
            summary: 'The official tutorial exercises and the tutor’s step-by-step notes on recent exercises.',
            steps: [
              { kind: 'reading', title: 'Read: tutorial exercises & solutions', slug: 'official', docs: [/^04 - Tutorials\/ENGR 213 - Official Tutorial/] },
              { kind: 'reading', title: 'Read: tutor notes on recent exercises', slug: 'tutor', docs: [/^04 - Tutorials\/ENGR 213 - ODE Step-by-Step/] },
              { kind: 'reading', title: 'Read: in-class lecture & tutorial compendium', slug: 'paradis', docs: [/Paradis notes/] }
            ]
          }
        ]
      },
      {
        id: 'exam-kit',
        title: 'Exam kit',
        subtitle: 'Master summary sheets and calculus review',
        lessons: [
          {
            id: 'cheat-sheet',
            title: 'Your master summary & review sheets',
            summary: 'Chapter 1 & 2 master summaries and the calculus toolkit sheet.',
            steps: [
              { kind: 'reading', title: 'Read: Chapter 1 Master Summary', slug: 'ch1', docs: [/^03 - Chapter 1 Summary\/Chapter 1 - Master Summary/] },
              { kind: 'reading', title: 'Read: Chapter 2 Master Summary', slug: 'ch2', docs: [/^04 - Chapter 2 Summary\/Chapter 2 - Master Summary/] },
              { kind: 'reading', title: 'Read: Calculus for ODEs Master Sheet', slug: 'calc', docs: [/^00 - Calculus Review for ODEs\/Calculus for Differential Equations - Master Sheet/] }
            ]
          }
        ]
      }
    ]
  }
};
