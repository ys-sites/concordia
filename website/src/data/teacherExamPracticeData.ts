// Official Teacher Midterm Practice Data & Confirmed Exam Blueprint
// Concordia University · Semester 1 Engineering Courses

export interface TeacherExamFile {
  id: string;
  title: string;
  filename: string;
  relativePath: string;
  instructor: string;
  termYear: string;
  badge: 'Official Sample Midterm' | 'Marking Key' | 'Memory Trace Code' | 'Quiz Collection' | 'Review Pack' | 'Exam Bank';
  fileType: 'pdf' | 'cpp' | 'doc';
  description: string;
  keyTopics: string[];
  codeContent?: string;
}

export interface TeacherExamBlueprint {
  courseId: 'MIAE221' | 'MIAE215' | 'ENGR213' | 'INDU211';
  courseCode: string;
  courseName: string;
  confirmedDate: string | null;
  dateLabel: string;
  timeAndLocation: string;
  assignmentNotice?: string;
  confirmedScope: string;
  formatOverview: string;
  calculatorPolicy: string;
  instructorNotes: string[];
  trapsAndTricks: Array<{
    title: string;
    description: string;
    correctMethod: string;
    commonTrap: string;
  }>;
  practiceFiles: TeacherExamFile[];
  featuredDrillSectionId: string;
}

export const TEACHER_EXAM_PRACTICE_DATA: Record<string, TeacherExamBlueprint> = {
  MIAE221: {
    courseId: 'MIAE221',
    courseCode: 'MIAE 221',
    courseName: 'Materials Science and Engineering',
    confirmedDate: '2026-10-30',
    dateLabel: 'Friday, October 30, 2026',
    timeAndLocation: 'During regular lecture period (in-person examination)',
    assignmentNotice: 'Term Assignment is confirmed due on Friday, November 27, 2026.',
    confirmedScope: 'Lectures 1–12 (Callister Chapters 1 through 7.4): Material classes, bonding & potential curves, unit cells & crystal systems (FCC, BCC, HCP), Miller indices for directions & planes, linear/planar densities, XRD & Bragg’s Law, point defects & Arrhenius vacancy concentration, solid solutions (Hume-Rothery), dislocations, diffusion (steady-state & non-steady-state erf), mechanical properties & stress-strain curves, and slip systems (7.1–7.4).',
    formatOverview: '20 Multiple Choice questions (2 marks each = 40 marks) + 10 True/False questions (1 mark each = 10 marks), totaling 50 marks. Official formula sheet with crystal structure formulas, Bragg’s law, and error function table provided on exam paper.',
    calculatorPolicy: 'Standard ENCS Faculty-approved calculator (e.g. Sharp EL-531 or Casio fx-300MS) with sticker required.',
    instructorNotes: [
      'Instructors: Drs. Mamoun Medraj and Martin Pugh.',
      'The exam questions are grounded directly in the teacher lecture slide examples and Callister end-of-chapter concepts.',
      'Multiple choice questions often test subtle physical principles (e.g., interdiffusion in Cu-Ni couples, elastic modulus invariance among steels, equilibrium bonding distance on force vs energy curves).',
      'Pay extra attention to Miller indices plane drawings with negative intercepts and overbar notation.'
    ],
    trapsAndTricks: [
      {
        title: 'Cu-Ni Diffusion Couple (Interdiffusion)',
        description: 'Question 6 on the 2017 Sample Midterm asks what occurs when smooth copper and nickel blocks are pressed together and heated below melting points.',
        correctMethod: 'Copper atoms diffuse into nickel AND nickel atoms diffuse into copper simultaneously (interdiffusion across the interface).',
        commonTrap: 'Thinking only copper diffuses because it has a lower melting point, or that no diffusion occurs due to complete solubility.'
      },
      {
        title: 'Stress-Strain Curve Deformation Points (Figure 1)',
        description: 'Question 13 & 14 test distinguishing uniform plastic deformation from non-uniform plastic deformation on the engineering stress-strain curve.',
        correctMethod: 'Uniform plastic deformation occurs from the yield point (Point C) up to maximum tensile strength (Point E). Non-uniform plastic deformation (necking) occurs ONLY after Point E until fracture at Point F.',
        commonTrap: 'Confusing Point B (proportional elastic limit) with plastic deformation, or thinking necking starts before maximum tensile strength.'
      },
      {
        title: 'Plane Miller Indices with Negative Intercepts',
        description: 'Determining Miller indices when a plane does not pass through the chosen origin.',
        correctMethod: 'Move the origin to a corner of the unit cell such that all intercepts can be read unambiguously. Invert the intercepts, clear fractions, and write negatives with overbar notation (e.g., (1̄20) or (4̄23)).',
        commonTrap: 'Using regular negative signs like (-4, 2, 3) or direction brackets <...> instead of round parentheses (...).'
      },
      {
        title: 'Equilibrium Distance on Force vs. Energy Curves',
        description: 'Identifying equilibrium atomic spacing $r_0$ on interatomic curves.',
        correctMethod: 'On a NET FORCE curve ($F_N$), equilibrium is where $F_N = 0$ (crosses the horizontal axis). On a POTENTIAL ENERGY curve ($E_N$), equilibrium is at the MINIMUM energy trough ($dE/dr = 0$).',
        commonTrap: 'Looking for a minimum on the force curve or a zero-crossing on the energy curve.'
      }
    ],
    practiceFiles: [
      {
        id: '221-sample-2017',
        title: 'Official MECH/MIAE 221 Sample Midterm Exam (2017)',
        filename: 'MIAE 221 - Sample Midterm Exam 2017 (Drs. Pugh & Medraj).pdf',
        relativePath: 'Miae 221/04 - Practice Problems & Step-by-Step Solutions/MIAE 221 - Sample Midterm Exam 2017 (Drs. Pugh & Medraj).pdf',
        instructor: 'Drs. Martin Pugh & Mamoun Medraj',
        termYear: 'Midterm 2017 (Version A)',
        badge: 'Official Sample Midterm',
        fileType: 'pdf',
        description: 'Complete 6-page teacher-provided sample examination featuring 20 Multiple Choice questions, Figure X Miller indices identification, copper-nickel diffusion couple mechanics, Figure 1 stress-strain curve diagnostics, defect classifications, and official formula reference sheet.',
        keyTopics: ['Miller Indices (Planes & Directions)', 'Interatomic Force Curves', 'Bragg’s Law XRD', 'Cu-Ni Diffusion Couple', 'Stress-Strain Points', 'Defect Types']
      },
      {
        id: '221-sample-2017-sol',
        title: 'Official MECH/MIAE 221 Sample Midterm Solutions & Marking Key',
        filename: 'MIAE 221 - Sample Midterm Exam 2017 Official Solutions & Marking Key.pdf',
        relativePath: 'Miae 221/04 - Practice Problems & Step-by-Step Solutions/MIAE 221 - Sample Midterm Exam 2017 Official Solutions & Marking Key.pdf',
        instructor: 'Department of Mechanical & Industrial Engineering',
        termYear: 'Midterm 2017 Solutions',
        badge: 'Marking Key',
        fileType: 'pdf',
        description: 'Official solutions and marking rubric for the 2017 sample midterm with verified answer keys for all 20 multiple choice questions, step-by-step arithmetic proofs, and figure explanations.',
        keyTopics: ['Answer Key (Q1–Q20)', 'Verification Calculations', 'Marking Rubric']
      },
      {
        id: '221-fill-in-master',
        title: 'Dr. Medraj Teacher Lecture Notes Fill-in-the-Blank Master Solutions Key',
        filename: 'MIAE 221 - Teacher Lecture Notes Fill-in-the-Blank Master Solutions Key.pdf',
        relativePath: 'Miae 221/04 - Practice Problems & Step-by-Step Solutions/MIAE 221 - Step-by-Step Quantitative Problem Guide.pdf',
        instructor: 'Dr. Mamoun Medraj',
        termYear: 'Fall 2026 Core',
        badge: 'Review Pack',
        fileType: 'pdf',
        description: 'Comprehensive solutions manual containing every fill-in-the-blank value, in-class derivation, and worked textbook example from Dr. Medraj’s Lectures 1 through 12.',
        keyTopics: ['Lecture Fill-ins', 'In-Class Example Derivations', 'Formula Proofs']
      }
    ],
    featuredDrillSectionId: 'midterm'
  },
  MIAE215: {
    courseId: 'MIAE215',
    courseCode: 'MIAE 215',
    courseName: 'Programming for Mechanical & Industrial Engineers',
    confirmedDate: null,
    dateLabel: 'Fall 2026 Midterm Examination',
    timeAndLocation: 'In-person lab / lecture session',
    confirmedScope: 'C++ Fundamental Types, Operator Precedence, Control Flow (if/else, switch, while, for loops), Memory Tracing, 1D/2D Array Indexing & Bounds Checking, Variable Scoping, and Console I/O.',
    formatOverview: 'Two-part exam: Part 1 Hand-written code composition & logic formulation; Part 2 High-yield program output prediction and memory variable trace table (Question 2 signature problem).',
    calculatorPolicy: 'No calculators or electronic devices permitted. Pen, pencil, and ruler recommended for table tracing.',
    instructorNotes: [
      'Instructor: Dr. Brandon Gordon.',
      'Dr. Gordon emphasizes the "Simplified Table Approach" to trace multi-variable loop iterations.',
      'Stop at every single `cout` statement and write down the output immediately in the answer box.',
      'Out-of-bounds indexing (e.g. `double A[4]; cout << A[i]` when `i == 4`) results in undefined memory / Garbage value (`G`).'
    ],
    trapsAndTricks: [
      {
        title: 'Dr. Gordon’s Simplified Table Tracing System',
        description: 'How to reliably score 100% on Question 2 loop trace problems without losing track of numbers.',
        correctMethod: 'Draw a column for every variable (`i`, `sum`, `a`, `b`, array elements). Step line-by-line: write ONLY values that change on that line. Leave the cell blank if unchanged. Mark each line in code with a tick. Whenever `cout` occurs, immediately write the output into the box.',
        commonTrap: 'Trying to evaluate loop output in your head without a written table, or updating multiple variables out of order.'
      },
      {
        title: 'Array Boundary & Garbage Values (`G`)',
        description: 'Accessing an array beyond its declared size in loop termination.',
        correctMethod: 'For `double A[4]`, valid indices are `0, 1, 2, 3`. When `for(i=0; i<4; i++)` finishes, `i == 4`. Calling `cout << A[i]` reads memory outside `A`, which prints "Garbage" (or `G`).',
        commonTrap: 'Assuming `A[4]` contains `0.0` or causes a compiler error at compile time.'
      },
      {
        title: 'Integer Division Round Down in Expressions',
        description: 'Evaluating expressions with mixed integer and floating types: `x = 7 + 1/(i+1)`.',
        correctMethod: 'When `i = 1`, `1 / (1 + 1)` is `1 / 2` (both integers), which truncates to `0`. So `x = 7 + 0 = 7.0`.',
        commonTrap: 'Evaluating `1/2` as `0.5`, leading to `x = 7.5` and propagating the error through subsequent loop steps.'
      },
      {
        title: 'Dual Array Equality Algorithm (Midterm Review #1)',
        description: 'Checking whether two 5-element keyboard-input integer arrays `A1` and `A2` are identical.',
        correctMethod: 'Initialize a flag `bool equal = true;`. Loop `0` to `4`: `if (A1[i] != A2[i]) { equal = false; break; }`. Print message once after the loop finishes.',
        commonTrap: 'Printing "Equal" or "Not Equal" inside the loop on each iteration, producing 5 printed lines.'
      }
    ],
    practiceFiles: [
      {
        id: '215-q2-cpp',
        title: 'Dr. Gordon Fall 2023 Midterm Q2 Official Solution & Trace Manual',
        filename: 'MIAE-215-fall2023-Q2-solution.cpp',
        relativePath: 'teacher midterm practice given/MIAE-215/MIAE-215-fall2023-Q2-solution.cpp',
        instructor: 'Dr. Brandon Gordon',
        termYear: 'Fall 2023 Midterm Q2',
        badge: 'Memory Trace Code',
        fileType: 'cpp',
        description: 'Complete source code with Dr. Gordon’s pedagogical commentary explaining how to use the Simplified Table Approach, how each variable changes per line, and the exact output box values for Part (a) [14 marks] and Part (b) [5 marks].',
        keyTopics: ['While & For Loop Tracing', 'Output Box Format', 'Table Approach', 'Array Bounds & Garbage']
      },
      {
        id: '215-review-1',
        title: 'MIAE 215 Midterm Review #1 (Dual Array Equality Algorithm)',
        filename: 'MIAE_215_midterm_review1.pdf',
        relativePath: 'Miae 215/04 - Practice Problems & Code Solutions/MIAE_215_midterm_review1.pdf',
        instructor: 'Dr. Brandon Gordon',
        termYear: 'Midterm Review Pack',
        badge: 'Review Pack',
        fileType: 'pdf',
        description: 'Official practice problem statement challenging students to formulate an optimal C++ program comparing two 5-element arrays input from the keyboard, with early termination and single-message output.',
        keyTopics: ['Array Input (cin)', 'Equality Flags', 'Break Conditions', 'Console Formatting']
      },
      {
        id: '215-quiz1-tue',
        title: 'MIAE 215 Quiz #1 (Tuesday Section)',
        filename: 'MIAE_215_quiz1_Tuesday.pdf',
        relativePath: 'Miae 215/04 - Practice Problems & Code Solutions/MIAE_215_quiz1_Tuesday.pdf',
        instructor: 'Dr. Brandon Gordon',
        termYear: 'Quiz #1',
        badge: 'Quiz Collection',
        fileType: 'pdf',
        description: 'Handwritten programs: average of three real numbers with a 7.5 check, an 11-row x / sin(x) / exp(x) table in e-notation, and finding the largest unsigned long by counting up.',
        keyTopics: ['Console I/O', 'iomanip Formatting', 'Variable Limits', 'Overflow']
      },
      {
        id: '215-quiz1-wed',
        title: 'MIAE 215 Quiz #1 (Wednesday Section)',
        filename: 'MIAE_215_quiz1_Wednesday.pdf',
        relativePath: 'Miae 215/04 - Practice Problems & Code Solutions/MIAE_215_quiz1_Wednesday.pdf',
        instructor: 'Dr. Brandon Gordon',
        termYear: 'Quiz #1',
        badge: 'Quiz Collection',
        fileType: 'pdf',
        description: 'Handwritten programs: three characters printed in reverse with an ‘x’ check, counting cos(x) > 0.9 over a million-step loop, and estimating the largest double by multiplying by 10.',
        keyTopics: ['char Input', 'Counting Loops', 'Floating-Point Range', 'inf Detection']
      },
      {
        id: '215-quiz2-thu',
        title: 'MIAE 215 Quiz #2 (Thursday Section)',
        filename: 'MIAE_215_quiz2_Thursday.pdf',
        relativePath: 'Miae 215/04 - Practice Problems & Code Solutions/MIAE_215_quiz2_Thursday.pdf',
        instructor: 'Dr. Brandon Gordon',
        termYear: 'Quiz #2',
        badge: 'Quiz Collection',
        fileType: 'pdf',
        description: 'Compiler quiz: alternating input of two arrays with a sentinel, vector addition, minimum, sum, product, and an infinite loop for the first k with |x^k / k!| < 1e-9.',
        keyTopics: ['1D Arrays', 'Sentinel Input', 'Min / Sum / Product', 'Infinite Loops']
      },
      {
        id: '215-quiz2-wed',
        title: 'MIAE 215 Quiz #2 (Wednesday Section)',
        filename: 'MIAE_215_quiz2_Wednesday.pdf',
        relativePath: 'Miae 215/04 - Practice Problems & Code Solutions/MIAE_215_quiz2_Wednesday.pdf',
        instructor: 'Dr. Brandon Gordon',
        termYear: 'Quiz #2',
        badge: 'Quiz Collection',
        fileType: 'pdf',
        description: 'Compiler quiz: validated input of n ≤ 100, a k = 1/2/3 menu (average, minimum, dot product) that repeats until every item has been chosen.',
        keyTopics: ['Input Validation', 'Menus', 'Dot Product', 'Loop Conditions']
      }
    ],
    featuredDrillSectionId: 'midterm'
  },
  ENGR213: {
    courseId: 'ENGR213',
    courseCode: 'ENGR 213',
    courseName: 'Applied Ordinary Differential Equations',
    confirmedDate: null,
    dateLabel: 'Fall 2026 Midterm 1',
    timeAndLocation: 'In-person evening examination period',
    confirmedScope: 'Chapters 1 & 2 (Lectures 1–6): Differential equation classifications (order, linearity), Initial Value Problems, Direction Fields, Separable First-Order ODEs, Linear First-Order Equations (Integrating Factor Method), Exact Differential Equations & Test for Exactness, Substitutions (Bernoulli ODEs, Homogeneous Equations, Linear Coefficients), and Linear Mathematical Models (Tank Mixing, Heating/Cooling, Orthogonal Trajectories).',
    formatOverview: 'Written multi-part problem solving exam. Full marks require complete calculus derivations, stating integrating factor formulas, checking exactness conditions, and displaying boxed general & particular solutions with explicit intervals of definition.',
    calculatorPolicy: 'Standard ENCS-approved calculator with sticker. No formula sheet permitted.',
    instructorNotes: [
      'Course Coordinator: Dr. Paradis.',
      'Always verify exactness: check $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ before integrating.',
      'In linear equations, ALWAYS convert to standard form $\\frac{dy}{dx} + P(x)y = f(x)$ before finding $\\mu(x) = e^{\\int P(x)dx}$.',
      'For mixture problems, check if flow rates are equal. If $r_{in} \\neq r_{out}$, the volume is a function of time: $V(t) = V_0 + (r_{in}-r_{out})t$.'
    ],
    trapsAndTricks: [
      {
        title: 'Standard Form Coefficient Error',
        description: 'Forgetting to divide by the leading coefficient in linear ODEs: $x \\frac{dy}{dx} + 2y = 4x^2$.',
        correctMethod: 'Divide by $x$ first: $\\frac{dy}{dx} + \\frac{2}{x}y = 4x$. Then $P(x) = 2/x$, $\\mu(x) = e^{\\int (2/x)dx} = e^{2\\ln|x|} = x^2$.',
        commonTrap: 'Using $P(x) = 2$ without dividing by $x$, getting $\\mu = e^{2x}$ and obtaining a completely wrong solution.'
      },
      {
        title: 'Exactness Verification Form',
        description: 'Testing exactness on equations written with opposite signs: $M(x,y)dx - N(x,y)dy = 0$.',
        correctMethod: 'Rewrite into standard positive form $M(x,y)dx + (-N(x,y))dy = 0$. Compute $\\frac{\\partial M}{\\partial y}$ and compare with $\\frac{\\partial (-N)}{\\partial x}$.',
        commonTrap: 'Forgetting the minus sign when computing $\\frac{\\partial N}{\\partial x}$, wrongly concluding the equation is not exact.'
      },
      {
        title: 'Bernoulli Equation Power Substitution',
        description: 'Transforming Bernoulli ODE: $\\frac{dy}{dx} + P(x)y = Q(x)y^n$.',
        correctMethod: 'Divide by $y^n$ to get $y^{-n}\\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$. Substitute $u = y^{1-n}$, $\\frac{du}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$ to produce a linear ODE in $u$.',
        commonTrap: 'Using $u = y^n$ or forgetting the factor $(1-n)$ in the derivative.'
      }
    ],
    practiceFiles: [],
    featuredDrillSectionId: 'midterm'
  },
  INDU211: {
    courseId: 'INDU211',
    courseCode: 'INDU 211',
    courseName: 'Introduction to Production and Manufacturing Systems',
    confirmedDate: '2025-10-21',
    dateLabel: 'Official Midterm Examination (Paper A)',
    timeAndLocation: 'In-person examination hall (75 Minutes, Closed Book, 50 Marks)',
    confirmedScope: 'Chapters 1 through 5: Chapter 1 & 2 (Foundations of Engineering & IE, OIQ Professional Regulation, Human Activity Systems), Chapter 3 (Manufacturing & Process Selection, Concurrent Engineering, Break-Even Economics, Multi-Level Bill of Materials BOM Explosion), Chapter 4 (Facility Layout Types, Line vs Job Shop, Transportation Linear Programming & Northwest Corner / Lowest Cost Heuristics), and Chapter 5 (Material Handling Modernization, Automated Guided Vehicles AGVs, Traveling Salesperson Problem TSP Nearest-Neighbor Heuristics & Optimality Analysis).',
    formatOverview: '50 Total Marks: Problem 1 (12 MCQs, 12 marks) testing science vs engineering, professional licensure, single-product break-even, crossover volume, and layout types; Problem 2 (10 marks) on multi-level BOM explosion across Product 1 and Product 2; Problem 3 (16 marks) on Transportation Problem solving via Northwest Corner (S1 = $935) and Lowest Cost First (S2 = $725) with optimality true/false proofs; Problem 4 (12 marks) on AGV routing TSP sequences via Nearest-Neighbor heuristic from Storage S (T1 = 9.0 min) and from M1 (T2 = 7.9 min) with multi-start heuristic limits.',
    calculatorPolicy: 'Standard ENCS Faculty-approved calculator with sticker. Closed book, closed notes.',
    instructorNotes: [
      'Total value: 50 marks. Time limit: 1 hour 15 minutes (75 minutes).',
      'Problem 1 (12 Marks): 12 multiple choice questions (1 mark each). If more than one choice is circled, 0 marks are awarded.',
      'Problem 2 (10 Marks): Multi-level BOM table. Each subassembly and component cell carries 1 mark. Avoid inverted roll-up errors!',
      'Problem 3 (16 Marks): Transportation table. Verify total supply equals total demand (80 = 80, balanced problem). Compare Northwest Corner vs Least Cost first.',
      'Problem 4 (12 Marks): AGV routing. Note that the travel time matrix is ASYMMETRIC (c_ij != c_ji). Always read outwards along the row of the current vertex!'
    ],
    trapsAndTricks: [
      {
        title: 'Asymmetric Distance Matrix (TSP Directionality)',
        description: 'Question 4.1 on the midterm asks for the nearest neighbor tour starting from Storage room S.',
        correctMethod: 'Read along the ROW corresponding to the current station. From M3, look across row M3: to M4 is 1.0, to M1 is 1.3, to M2 is 1.6, and to M5 is 1.9. The minimum is M4 (1.0).',
        commonTrap: 'Looking down column M3 and seeing 0.6 (which is travel from M2 to M3, NOT from M3 to M2!). This single directional slip cost students 3 marks on the midterm.'
      },
      {
        title: 'BOM Hierarchy Inversion (Explosion vs Summation)',
        description: 'Problem 2 requires determining gross requirements for subassemblies S-1 to S-5 and components C-1 to C-5.',
        correctMethod: 'Multiply the parent product weekly demand by the parent branch bracket quantity: S-1 = 10 * 2 = 20. For common subassemblies like S-3, sum both parent contributions: (10 * 3) + (20 * 2) = 70. Explode components from subassemblies: C-1 = 20(3) + 20(2) + 40(2) + 60(2) = 300.',
        commonTrap: 'Summing child component multipliers underneath a subassembly (e.g. 3+3+2=8) and multiplying backwards into the subassembly cell, resulting in 0/10 on the problem.'
      },
      {
        title: 'Heuristics Do Not Guarantee Global Optimality',
        description: 'Questions 3.4 and 4.3 test whether heuristic solutions (Lowest Cost First, Nearest Neighbor) are optimal.',
        correctMethod: 'A heuristic provides a feasible starting solution; it may or may not be the global minimum. Its optimality without rigorous verification (e.g. MODI method for transportation, branch-and-bound for TSP) is MTF (May be True or False). If a strictly cheaper feasible tour exists, the worse tour is FALSE for optimal.',
        commonTrap: 'Assuming that because a heuristic found a low-cost solution, it is automatically True for optimal, or that multi-start nearest neighbor guarantees global optimum for NP-hard TSP.'
      },
      {
        title: 'Process Crossover Volume vs Annual Demand',
        description: 'Question 8 gives Process A ($50k fixed, $10/unit) and Process B ($80k fixed, $5/unit) at demand 5,200 units.',
        correctMethod: 'Calculate indifference crossover point: Q* = (80k - 50k) / (10 - 5) = 6,000 units. For demand Q = 5,200 < 6,000, Process A has lower total cost ($102k vs $106k) and reaches break-even earlier.',
        commonTrap: 'Selecting Process B blindly because its variable cost ($5) is lower than Process A ($10), ignoring the $30,000 higher fixed cost.'
      }
    ],
    practiceFiles: [
      {
        id: 'indu211-midterm-paper-a-2025',
        title: 'Official INDU 211 Midterm Exam (Paper A) — Master Solved Study Guide',
        filename: 'INDU 211 - Midterm Exam Master Study Guide & Complete Solved Practice Paper (Fall 2025 Paper A).pdf',
        relativePath: 'Indu 211/06 - Studocu - Midterms and Tests/INDU 211 - Midterm Exam Master Study Guide & Complete Solved Practice Paper (Fall 2025 Paper A).pdf',
        instructor: 'Concordia INDU 211 Faculty',
        termYear: 'Fall 2025 (Paper A)',
        badge: 'Official Sample Midterm',
        fileType: 'pdf',
        description: 'Complete 50-mark authentic midterm examination paper featuring 12 multiple choice questions (science vs engineering, provincial licensure, break-even pricing, process crossover, facility layout), 10-mark multi-level BOM explosion, 16-mark Transportation Linear Programming (Northwest Corner vs Lowest Cost First and optimality proofs), and 12-mark AGV routing via Nearest-Neighbor heuristics.',
        keyTopics: ['Break-Even & Crossover', 'Bill of Materials (BOM)', 'Transportation Tableaus', 'Northwest Corner & Least Cost', 'TSP & AGV Routing', 'OIQ Regulation']
      },
      {
        id: 'indu211-quant-guide',
        title: 'INDU 211 — Step-by-Step Quantitative Operations & Decision Guide',
        filename: 'INDU 211 - Step-by-Step Quantitative Operations Guide.pdf',
        relativePath: 'Indu 211/04 - Worked Problems & Quantitative Analysis/INDU 211 - Step-by-Step Quantitative Operations Guide.pdf',
        instructor: 'Concordia INDU 211 Faculty',
        termYear: 'Semester 1 Mastery',
        badge: 'Exam Bank',
        fileType: 'pdf',
        description: 'Comprehensive worked problem manual covering break-even volume, target pricing, process crossover selection, volume-weighted Center of Gravity, cycle time, line balancing, and material handling calculations.',
        keyTopics: ['Break-Even', 'Process Crossover', 'Center of Gravity', 'Line Balancing', 'Cycle Time']
      }
    ],
    featuredDrillSectionId: 'past-mid'
  }
};
