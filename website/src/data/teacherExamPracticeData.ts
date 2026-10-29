// Official Teacher Midterm Practice Data & Confirmed Exam Blueprint
// Concordia University · Semester 1 Engineering Courses

export interface TeacherExamFile {
  id: string;
  title: string;
  filename: string;
  relativePath: string;
  instructor: string;
  termYear: string;
  badge: 'Official Sample Midterm' | 'Marking Key' | 'Memory Trace Code' | 'Quiz Collection' | 'Review Pack' | 'Exam Bank' | '1-Page Memory Aide';
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
    confirmedScope: 'Lectures 1–11 (Callister Chapters 1 through 6): Material classes, bonding & potential curves, unit cells & crystal systems (FCC, BCC, HCP), Miller indices for directions & planes, linear/planar densities, XRD & Bragg’s Law, point defects & Arrhenius vacancy concentration, solid solutions (Hume-Rothery), dislocations, diffusion (steady-state & non-steady-state erf), and mechanical properties & stress-strain curves.',
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
        id: '221-1page-exam-cheatsheet',
        title: 'MIAE 221 Official 1-Page Exam Cheatsheet (Single-Sided Master Reference)',
        filename: 'MIAE 221 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf',
        relativePath: 'Miae 221/03 - 1-Page Rapid Review Sheets/MIAE 221 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf',
        instructor: 'Drs. Martin Pugh & Mamoun Medraj',
        termYear: 'Midterm 2026 (Callister Ch 1–6)',
        badge: '1-Page Memory Aide',
        fileType: 'pdf',
        description: 'Strict single-sided 1-page master reference sheet (page count: 1) formatted at 10pt font on Letter paper covering Callister Chapters 1–6 and Lectures 1–11. Includes bonding potential wells, FCC/BCC/HCP lattice geometry table, Miller indices, Bragg’s law XRD peak rules, Hume-Rothery criteria, Fick’s diffusion laws, and stress-strain landmarks.',
        keyTopics: ['1-Page Only (Verified)', '10pt Font', 'Callister Modules 1–12', 'Crystal Geometry', 'Bragg XRD', 'Diffusion', 'Stress-Strain']
      },
      {
        id: '221-midterm-cheatsheet',
        title: 'MIAE 221 Midterm 1-Page Document Cheatsheet & Exam Survival Guide',
        filename: 'MIAE 221 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf',
        relativePath: 'Miae 221/03 - 1-Page Rapid Review Sheets/MIAE 221 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf',
        instructor: 'Drs. Martin Pugh & Mamoun Medraj',
        termYear: 'Midterm Survival Pack',
        badge: '1-Page Memory Aide',
        fileType: 'pdf',
        description: 'Comprehensive 1-page condensed document cheatsheet and exam survival guide for the MIAE 221 Midterm. Covers bonding curves & stiffness, FCC/BCC/HCP lattice geometry, Miller indices, linear/planar densities, Bragg’s law XRD peak rules, Hume-Rothery solubility criteria, Schmid’s law slip systems, Fick’s diffusion laws, and stress-strain curve landmarks.',
        keyTopics: ['Bonding & Potential Wells', 'FCC/BCC/HCP Lattices', 'Miller Indices (Planes/Directions)', 'Bragg XRD Selection Rules', 'Hume-Rothery Rules', 'Schmid’s Law Slip', 'Fick’s Diffusion', 'Stress-Strain Landmarks']
      },
      {
        id: '221-in-class-annotated-master',
        title: 'MIAE 221 In-Class Student Lecture Notes Master Compendium (Lectures 1–11 Annotated)',
        filename: 'MIAE 221 - In-Class Lecture Notes Master Compendium (Lectures 1-11 Annotated).pdf',
        relativePath: 'Miae 221/01 - In-Class Lecture Notes (Student Annotated)/MIAE 221 - In-Class Lecture Notes Master Compendium (Lectures 1-11 Annotated).pdf',
        instructor: 'Dr. Mamoun Medraj',
        termYear: 'Fall 2026 In-Class Notes',
        badge: 'Review Pack',
        fileType: 'pdf',
        description: 'Complete 168-page master compendium of handwritten in-class lecture notes and annotated slide decks from Dr. Medraj’s Lectures 1 through 11. Covers every chalkboard derivation, crystal structure sketch, planar/linear density formula, vacancy calculation, diffusion example, and stress-strain analysis.',
        keyTopics: ['In-Class Chalkboard Notes', 'Lectures 1–11', 'Derivations & Examples', 'BCC/FCC/HCP Lattices', 'Diffusion', 'Tensile Properties']
      },
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
    confirmedDate: '2026-10-22',
    dateLabel: 'Thursday, October 22, 2026',
    timeAndLocation: '8:45 – 10:00 AM (In-person, handwritten examination)',
    confirmedScope: 'C++ Fundamental Types, Operator Precedence, Control Flow (if/else, switch, while, for loops), Memory Tracing, 1D/2D Array Indexing & Bounds Checking, Variable Scoping, and Console I/O.',
    formatOverview: 'Handwritten examination: 40% program-output prediction & variable trace table; 60% write-a-program code composition.',
    calculatorPolicy: 'Faculty-approved calculator (with sticker) + One sheet of memory aide (cheat sheet).',
    instructorNotes: [
      'Instructor: Dr. Brandon Gordon.',
      'Official Moodle Cheat Sheet Rule: One side only of one sheet — front side only, back must be blank.',
      'Can be printed or hand-written. If printed, text must be no smaller than 10 pt — nothing tiny.',
      'That\'s the ONLY authorized aid besides a faculty-approved calculator.',
      'Exam reminder: Thursday Oct 22, 8:45–10:00 AM, handwritten — 40% program-output questions, 60% write-a-program.',
      'Compliance: The portal 1-Page Document Cheatsheet follows these rules strictly (one-sided, 10 pt font, Letter size).',
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
        id: '215-1page-exam-cheatsheet',
        title: 'MIAE 215 Official 1-Page Exam Cheatsheet (Single-Sided, 10pt Font)',
        filename: 'MIAE 215 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf',
        relativePath: 'Miae 215/03 - 1-Page Rapid Review Sheets/MIAE 215 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf',
        instructor: 'Dr. Brandon Gordon Scope',
        termYear: 'Midterm 2026 (Moodle Rule Compliant)',
        badge: '1-Page Memory Aide',
        fileType: 'pdf',
        description: 'Strict single-sided 1-page exam cheatsheet (page count: 1) formatted at 10pt font on Letter paper, compliant with Dr. Gordon\'s Moodle exam policy. Covers C++ data types, integer division truncation, operator precedence hierarchy, Dr. Gordon table tracing protocol with garbage detection, 1D/2D arrays, loops, functions, and file I/O.',
        keyTopics: ['1-Page Only (Verified)', '10pt Font', 'Moodle Compliant', 'Table Tracing', 'Integer Division', 'Precedence', 'Arrays & Loops']
      },
      {
        id: '215-document-cheatsheet',
        title: 'MIAE 215 Midterm 1-Page Document Cheatsheet & Exam Survival Guide',
        filename: 'MIAE 215 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf',
        relativePath: 'Miae 215/03 - 1-Page Rapid Review Sheets/MIAE 215 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf',
        instructor: 'Concordia Department of MIAE',
        termYear: 'Midterm 2026 Universal Cheatsheet',
        badge: '1-Page Memory Aide',
        fileType: 'pdf',
        description: 'Complete 1-page document cheatsheet containing EVERYTHING required for the MIAE 215 Midterm: C++ data types, integer division traps, floating-point epsilon comparisons, full operator precedence hierarchy, Dr. Gordon\'s Table Tracing protocol with garbage detection, 2D matrix transpose/reversal, C-strings and space removal, file I/O recipes (ofstream/ifstream), pointers & dynamic array memory management, and Flowgorithm flowchart symbols.',
        keyTopics: ['Data Types & Memory Bounds', 'Operator Precedence', 'Table Tracing & Garbage', 'Matrix Transpose & Arrays', 'File I/O (fstream)', 'Pointers & Dynamic Memory', 'Flowgorithm Symbols']
      },
      {
        id: '215-memory-aide',
        title: 'MIAE 215 Midterm 1-Page Memory Aide & Exam Survival Sheet',
        filename: 'MIAE 215 - Midterm 1-Page Memory Aide & Exam Survival Sheet.pdf',
        relativePath: 'Miae 215/03 - 1-Page Rapid Review Sheets/MIAE 215 - Midterm 1-Page Memory Aide & Exam Survival Sheet.pdf',
        instructor: 'Dr. Brandon Gordon Scope',
        termYear: 'Midterm 2026',
        badge: '1-Page Memory Aide',
        fileType: 'pdf',
        description: 'Comprehensive high-yield 1-page condensed memory aide and rapid review sheet covering C++ data types, integer division traps, operator precedence, Dr. Gordon’s Table Tracing Protocol, array boundary garbage detection, pass-by-reference functions, and Flowgorithm symbols.',
        keyTopics: ['Data Types & Precision', 'Operator Precedence', 'Table Tracing System', 'Array Bounds (Garbage)', 'Pass-by-Reference', 'Flowgorithm Symbols']
      },
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
    confirmedScope: 'Chapters 1 & 2 (Sections 1.1–1.3, 2.1–2.8) + Chapter 17 (Sections 17.1 & 17.2): Differential equation classifications (order, linearity), Initial Value Problems & Existence/Uniqueness, Direction Fields & Autonomous ODEs, Separable First-Order ODEs, Linear First-Order Equations (Integrating Factor Method), Exact Differential Equations & Integrating Factors, Substitutions (Bernoulli ODEs, Homogeneous Equations, Linear Arguments), Mathematical Models (Tank Mixing, Heating/Cooling, Orthogonal Trajectories, Logistic Population Dynamics), and Complex Numbers & Analysis (Cartesian Arithmetic, Complex Conjugates, Modulus & Triangle Inequality, Polar/Exponential Form, Principal Argument, De Moivre\'s Theorem for Powers, and Finding All n-th Roots).',
    formatOverview: 'Written multi-part problem solving exam. Full marks require complete calculus derivations, stating integrating factor formulas, checking exactness conditions, and displaying boxed general & particular solutions with explicit intervals of definition.',
    calculatorPolicy: 'Standard ENCS-approved calculator with sticker. No formula sheet permitted.',
    instructorNotes: [
      'Course Coordinator: Dr. Paradis.',
      'Always verify exactness: check $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ before integrating.',
      'In linear equations, ALWAYS convert to standard form $\\frac{dy}{dx} + P(x)y = f(x)$ before finding $\\mu(x) = e^{\\int P(x)dx}$.',
      'For mixture problems, check if flow rates are equal. If $r_{in} \\neq r_{out}$, the volume is a function of time: $V(t) = V_0 + (r_{in}-r_{out})t$.',
      'All complex arguments in Section 17.2 must strictly be computed in radians, never degrees (e.g. 2π/3, not 120°).'
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
      },
      {
        title: 'Complex Argument Quadrant Mistake (Sec 17.2)',
        description: 'Calculating the principal argument of $z = x + iy$ using raw calculator $\\arctan(y/x)$ without checking the quadrant.',
        correctMethod: 'Sketch the point in the complex plane first. If in Quadrant II ($x < 0, y > 0$), $\\operatorname{Arg}(z) = \\pi - \\arctan(|y/x|)$. If in Quadrant III ($x < 0, y < 0$), $\\operatorname{Arg}(z) = -\\pi + \\arctan(|y/x|)$. Always express angles in radians in $(-\\pi, \\pi]$.',
        commonTrap: 'For $z = -1 + i\\sqrt{3}$, writing $\\arctan(\\sqrt{3}/-1) = -\\pi/3$, which gives a Quadrant IV angle (error of $\\pi$). The correct angle is $2\\pi/3$.'
      },
      {
        title: 'De Moivre Modulus Power & Root Trap (Sec 17.2)',
        description: 'Forgetting to raise or root the modulus $r$ when applying De Moivre’s theorem.',
        correctMethod: 'For powers, $(r e^{i\\theta})^n = r^n e^{in\\theta}$. For $n$-th roots, $w_k = r^{1/n} e^{i\\frac{\\theta + 2k\\pi}{n}}$. The modulus must ALWAYS be raised to the power: $r^n$ or $r^{1/n}$.',
        commonTrap: 'Writing $(2 e^{i\\pi/3})^4 = 2 e^{i 4\\pi/3}$ without raising 2 to the 4th power (16).'
      }
    ],
    practiceFiles: [
      {
        id: '213-past-midterms',
        title: 'Past Midterm Examinations Solved Master Guide (2011–2018)',
        filename: 'ENGR 213 - Past Midterm Examinations Solved Master Guide (2011-2018).pdf',
        relativePath: 'Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Past Midterm Examinations Solved Master Guide (2011-2018).pdf',
        instructor: 'Dr. Paradis & BCEE Faculty',
        termYear: 'Midterms 2011–2018',
        badge: 'Exam Bank',
        fileType: 'pdf',
        description: 'Comprehensive line-by-line solutions to unofficial student-collected Concordia ENGR 213 midterm examination problems, covering Separable IVPs, Linear Integrating Factors, Bernoulli ODEs, Exact equations, Tank Mixing Models, Newton Cooling, and Complex Numbers (Polar Forms & De Moivre Powers).',
        keyTopics: ['Separable IVP', 'Linear Integrating Factor', 'Exact Equations', 'Bernoulli ODE', 'Tank Mixing', 'Complex Numbers (Sec 17.1 & 17.2)']
      },
      {
        id: '213-calculus-sheet',
        title: 'Calculus for Differential Equations - Master Sheet',
        filename: 'Calculus for Differential Equations - Master Sheet.pdf',
        relativePath: 'Engr 213/00 - Calculus Review for ODEs/Calculus for Differential Equations - Master Sheet.pdf',
        instructor: 'ENGR 213 Course Hub',
        termYear: 'Universal Reference',
        badge: 'Review Pack',
        fileType: 'pdf',
        description: 'Complete zero-formula-sheet calculus companion covering logarithmic quotient shortcuts, inverse trig antiderivatives, Tabular (DI) integration by parts, Heaviside cover-up partial fractions, and completing the square.',
        keyTopics: ['Logarithmic Antiderivatives', 'Tabular DI Method', 'Heaviside PFD', 'Inverse Trig Integrals']
      },
      {
        id: '213-gradesaver-system',
        title: 'Gradesaver Master Solving System & Exam Blueprint (Tutor Edition)',
        filename: 'ENGR 213 - Gradesaver Master Solving System & Exam Blueprint (Tutor Edition).pdf',
        relativePath: 'Engr 213/02 - Comprehensive Topic Guides (Expanded & Intuitive)/ENGR 213 - Gradesaver Master Solving System & Exam Blueprint (Tutor Edition).pdf',
        instructor: 'ENGR 213 Tutor Hub',
        termYear: 'Fall 2026 / Winter 2025',
        badge: 'Review Pack',
        fileType: 'pdf',
        description: 'The 5-phase universal solution protocol, 4-gate ODE diagnostic classifier, tutor heuristics, and solved student exam exemplar questions.',
        keyTopics: ['5-Phase Protocol', '4-Gate Classifier', 'Equilibrium Singular Solutions', 'Integrating Factor Normalization']
      },
      {
        id: '213-master-step-by-step',
        title: 'Master Step-by-Step Solutions & Method Expansions Manual',
        filename: 'ENGR 213 - Master Step-by-Step Solutions & Method Expansions.pdf',
        relativePath: 'Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Master Step-by-Step Solutions & Method Expansions.pdf',
        instructor: 'Department of BCEE',
        termYear: 'Midterm 1 Preparation',
        badge: 'Exam Bank',
        fileType: 'pdf',
        description: '14 multi-step problem expansions with explicit step breakdown, theory before algebra, and algorithmic patterns to remember.',
        keyTopics: ['Exact Potential Function', 'Non-Exact Integrating Factor', 'Picard Iterations', 'Autonomous Phase Line Stability']
      },
      {
        id: '213-step-by-step-tutorial',
        title: 'ENGR 213 - ODE Step-by-Step Tutorial Practice (Tutor Notes & Recent Exercises)',
        filename: 'ENGR 213 - ODE Step-by-Step Tutorial Practice (Tutor Notes & Recent Exercises).pdf',
        relativePath: 'Engr 213/04 - Tutorials/ENGR 213 - ODE Step-by-Step Tutorial Practice (Tutor Notes & Recent Exercises).pdf',
        instructor: 'ENGR 213 Tutor Notes',
        termYear: 'Fall 2025 Recent Tutorials',
        badge: 'Quiz Collection',
        fileType: 'pdf',
        description: 'Micro-step tutorial solutions recovered from student tutorials: linear substitution, Bernoulli power reduction, separable IVPs, equilibrium constant solutions, integrating factors, and homogeneous ODEs with crucial exam trap warnings.',
        keyTopics: ['Linear Substitution', 'Bernoulli Reduction', 'Separable IVP', 'Equilibrium Constant Solution', 'Homogeneous Substitution']
      },
      {
        id: '213-official-tutorial-manual',
        title: 'ENGR 213 - Official Tutorial Exercises & Solutions Manual',
        filename: 'ENGR 213 - Official Tutorial Exercises & Solutions Manual.pdf',
        relativePath: 'Engr 213/04 - Tutorials/ENGR 213 - Official Tutorial Exercises & Solutions Manual.pdf',
        instructor: 'Concordia BCEE Department',
        termYear: 'Fall 2025 Official Curriculum',
        badge: 'Review Pack',
        fileType: 'pdf',
        description: 'Official 23-page Concordia tutorial manual covering all Chapter 1 and Chapter 2 midterm exercise sets and full step-by-step solutions.',
        keyTopics: ['Picard Existence & Uniqueness', 'Exact & Non-Exact ODEs', 'Bernoulli Equations', 'Brine Tank Applications', 'Second-Order Auxiliary Roots']
      }
    ],
    featuredDrillSectionId: 'midterm'
  },
  INDU211: {
    courseId: 'INDU211',
    courseCode: 'INDU 211',
    courseName: 'Introduction to Production & Manufacturing Systems',
    confirmedDate: null,
    dateLabel: 'Fall 2026 Midterm Examination',
    timeAndLocation: 'In-person examination hall',
    confirmedScope: 'Chapters 1 through 5: Chapter 1 & 2 (Foundations of IE & Production Systems), Chapter 3 (Manufacturing & Process Engineering, Break-Even Analysis, Line Balancing), Chapter 4 (Facilities Location, Center of Gravity, Pairwise Exchange Layout), and Chapter 5 (Material Handling, Distribution Routing, Nearest Neighbor & Clarke-Wright TSP).',
    formatOverview: 'Multi-part calculation and design problem examination. Requires detailed formula statements, coordinate computations, routing sequence tables, and unit cost comparisons.',
    calculatorPolicy: 'Standard ENCS-approved calculator with faculty sticker.',
    instructorNotes: [
      'Break-even analysis frequently includes make-vs-buy decisions with multiple supplier cost structures.',
      'In warehouse TSP routing, state the complete distance matrix and show the step-by-step additions for Nearest Neighbor.',
      'Center of Gravity requires weighted coordinates: $x^* = \\frac{\\sum x_i W_i}{\\sum W_i}$ and $y^* = \\frac{\\sum y_i W_i}{\\sum W_i}$.'
    ],
    trapsAndTricks: [
      {
        title: 'Break-Even Cross-Over Points (3 Processes)',
        description: 'Determining which production process is most economical over different volume ranges.',
        correctMethod: 'Calculate pair-wise intersection volumes where total costs are equal: $TC_1(Q) = TC_2(Q)$ and $TC_2(Q) = TC_3(Q)$. Define explicit volume ranges for each optimal process.',
        commonTrap: 'Selecting a process based on lowest fixed cost alone without checking if expected demand exceeds the cross-over threshold.'
      },
      {
        title: 'Nearest Neighbor Return Leg',
        description: 'Calculating total tour distance for the Travelling Salesperson Problem.',
        correctMethod: 'After visiting all stops, you MUST add the return distance from the final node back to the originating depot (Node 1).',
        commonTrap: 'Stopping after reaching the last destination node and forgetting to close the loop back to the depot.'
      }
    ],
    practiceFiles: [],
    featuredDrillSectionId: 'midterm'
  }
};
