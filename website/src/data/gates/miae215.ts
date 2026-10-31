// MIAE215 exam-prep content: past-exam questions, topics, lessons, repeat clusters and study videos.
// Formerly the encrypted Midterm Gate; migrated to plain data when the password was removed (see ARCHITECTURE.md, Part C).
import type { GateContent } from './types';

const content: GateContent = {
 "version": 2,
 "course": "MIAE215",
 "builtFor": "MIAE 215 · Fall 2026 midterm",
 "midterm": {
  "date": null,
  "label": "Date on Moodle · 33 % of the grade",
  "scope": "Weeks 1–5 for sure (types, expressions & operators, control statements). Arrays and C-strings (weeks 6–7) were on past midterms and the review."
 },
 "labTitle": "Code Tracing Lab",
 "labBlurb": "Every rule the output questions test, in course order. Each lesson: the idea, a past-exam example traced step by step, then a practice quiz where you type exactly what the program prints. Every expected output in this lab was produced by compiling the code with the course’s own MinGW g++, so the answers are what a real compiler prints.",
 "docs": {
  "roadmap": {
   "title": "C++ Master Study Guide & Roadmap",
   "path": "Miae 215/00 - Course Overview & Study Guide/MIAE 215 - C++ Master Study Guide & Programming Roadmap.pdf"
  },
  "intro": {
   "title": "Teacher · introduction",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/introduction.pdf"
  },
  "vt1": {
   "title": "Teacher · variable types 1",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/variable_types1.pdf"
  },
  "vt2": {
   "title": "Teacher · variable types 2",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/variable_types2.pdf"
  },
  "vt2mod": {
   "title": "Teacher · type modifiers",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/variable_types2_type_modifiers.pdf"
  },
  "cs1": {
   "title": "Teacher · control statements 1",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/control_statements1.pdf"
  },
  "cs2": {
   "title": "Teacher · control statements 2",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/control_statements1_part2.pdf"
  },
  "cs3": {
   "title": "Teacher · control statements 3",
   "path": "Miae 215/01 - Teacher Lecture Notes & Slides/control_statements1_part3.pdf"
  },
  "g1": {
   "title": "Part 1 guide · foundations & types",
   "path": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 1 - C++ Foundations, Memory Architecture & Data Types.pdf"
  },
  "g2": {
   "title": "Part 2 guide · casting & control flow",
   "path": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.pdf"
  },
  "g3": {
   "title": "Part 3 guide · expressions & operators",
   "path": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 3 - Expressions, Operators & Math Library Functions.pdf"
  },
  "g4": {
   "title": "Part 4 guide · control statements",
   "path": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 4 - Control Statements, Logic Flow & Flowcharts.pdf"
  },
  "g5": {
   "title": "Part 5 guide · output tracing & patterns",
   "path": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 5 - Program Architecture, Output Tracing & Algorithmic Patterns.pdf"
  },
  "r1": {
   "title": "Review sheet · types",
   "path": "Miae 215/03 - 1-Page Rapid Review Sheets/Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.pdf"
  },
  "r2": {
   "title": "Review sheet · operators & control flow",
   "path": "Miae 215/03 - 1-Page Rapid Review Sheets/Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.pdf"
  },
  "r3": {
   "title": "Review sheet · expressions & math",
   "path": "Miae 215/03 - 1-Page Rapid Review Sheets/Part 3 - Expressions, Precedence & Math Library - Review Sheet.pdf"
  },
  "trace": {
   "title": "Step-by-step code execution & trace manual",
   "path": "Miae 215/04 - Practice Problems & Code Solutions/MIAE 215 - Step-by-Step Code Execution & Trace Manual.pdf"
  },
  "w4": {
   "title": "Week 4 in-person problems (solved)",
   "path": "Miae 215/04 - Practice Problems & Code Solutions/Week 4 In-Person Lecture Problems - Fully Solved Master Guide.pdf"
  },
  "ex1": {
   "title": "Exercise solutions set 1",
   "path": "Miae 215/04 - Practice Problems & Code Solutions/Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.pdf"
  },
  "mini6": {
   "title": "Mini-course · arrays",
   "path": "Miae 215/Mini Course/Lesson 6 - Arrays/Lesson 6 - Arrays & Numerical Processing.pdf"
  }
 },
 "overview": {
  "headline": "One professor, one review sheet, the same five tricks",
  "points": [
   "★ VERIFIED GORDON EXAM MATCHES: Multiple questions from Dr. Gordon’s given midterm practice package are LITERALLY IDENTICAL to past midterms/quizzes. Fall 2023 Q2(a) and Q2(b) are 100% word-for-word identical to the actual exam paper. Midterm Review #1 Question 1 (array comparison) and Question 2(a) (2D array epsilon ladder) were handed out unchanged across multiple years. Quiz 2 (Wednesday) is the exact 60-minute menu program model.",
   "★ HIGH-YIELD SIMILAR QUESTIONS TO REVIEW FROM: The Winter 2024 Midterm questions (M24-1a through M24-3c) test the exact same structural templates and traps Dr. Gordon assigns (integer division truncation, cmath outputs, while-loop digit extraction, halving loop counter scope, and multi-variable accumulator table tracing).",
   "Past midterms are almost entirely “what does this print?”: 9 of 9 on W24 and both F23 questions.",
   "Prof. Gordon’s own Midterm Review #1 was handed out in 2021/22 and again, unchanged, in 2025/26. Treat it as a near-guaranteed source.",
   "The same five tricks recur: integer division inside an expression, an if/else-if ladder in a loop, break/continue, short-circuit side effects, and the index after a loop.",
   "Program writing (one question) always combines validated input, an array loop and an accumulator. Quiz 2 is the full version.",
   "Answers below were checked by compiling every program. Two past questions read past the end of an array (undefined behaviour); the notes say so."
  ]
 },
 "gordonMatches": {
  "summary": "Dr. Gordon directly reuses past midterms, quizzes, and review questions verbatim across academic years. Several questions in this vault are 100% identical to the materials given by Dr. Gordon, and the remaining past midterm questions are direct structural twins testing the exact same traps.",
  "identicalQuestions": [
   {
    "id": "F23-2a",
    "title": "Fall 2023 Midterm Q2(a) — while(1) Table Tracing with Break",
    "gordonSource": "Dr. Gordon Fall 2023 Midterm Handout & Official Solution .cpp (Part a)",
    "matchType": "100% Verbatim Identical",
    "codeSnippet": "int a=1, b=2, B[] = { 11, 7, 6, 5 };\nint i=0, sum = 0;\nwhile(1) {\n    sum += B[i];\n    if(i > 2) break;\n    a += B[i+1];\n    i++;\n    cout << \"\\n\" << i << \" \" << a;\n}\nb = sum - i;\ncout << \"\\n\" << sum << \" \" << a << \" \" << b;",
    "output": "1 8\\n2 14\\n3 19\\n29 19 26",
    "explanation": "Gordon’s official simplified table tracing approach. Notice that sum is updated on the breaking pass before break fires, so sum reaches 29 and b = 29 - 3 = 26."
   },
   {
    "id": "F23-2b",
    "title": "Fall 2023 Midterm Q2(b) — If-Ladder Tracing & Array Garbage Trap",
    "gordonSource": "Dr. Gordon Fall 2023 Midterm Handout & Official Solution .cpp (Part b)",
    "matchType": "100% Verbatim Identical",
    "codeSnippet": "int i;\ndouble A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;\nfor(i=0;i<4;i++) {\n    if(A[i] < -0.11) {\n        x += 1;\n    } else if (A[i] > 0.1) {\n        x -= 10;\n    } else {\n        x = 7 + 1/(i+1);\n    }\n    cout << \"\\n\" << x;\n}\ncout << \"\\n\" << A[i];",
    "output": "8\\n-2\\n7\\n-3\\nGarbage (A[4] out of bounds)",
    "explanation": "Two signature Gordon traps: integer division 1/(i+1) truncates to 0 for i=2, and post-loop cout << A[i] prints past the array bound (undefined garbage memory)."
   },
   {
    "id": "R21-1",
    "title": "Midterm Review #1 Question 1 — Comparing Two Integer Arrays",
    "gordonSource": "Dr. Gordon Midterm Review #1 PDF & 2025/26 Handout",
    "matchType": "100% Verbatim Identical",
    "codeSnippet": "// Input two 5-element integer arrays A1 and A2 from keyboard\n// Print \"A1 and A2 are equal\" or \"A1 and A2 are not equal\"",
    "output": "A1 and A2 are equal / not equal",
    "explanation": "Given verbatim in 2021/22 and re-assigned word-for-word in 2025/26. Gordon recommends trying both ways: flag check with early break vs. counting total matches."
   },
   {
    "id": "R21-2a",
    "title": "Midterm Review #1 Question 2(a) — 2D Array Output & Epsilon Conditions",
    "gordonSource": "Dr. Gordon Midterm Review #1 PDF Question 2(a)",
    "matchType": "100% Verbatim Identical",
    "codeSnippet": "int i, j;\ndouble A[2+1][2+1], x=1.0;\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        A[i][j] = j*i + j*j - 6;\n        cout << A[i][j] << \" \";\n    }\n    cout << endl;\n}\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        if(A[i][j] < -1.0e-7) x += A[i][j];\n        else if (A[i][j] > 1.0e-7) x -= 10;\n        else x -= 100;\n        cout << \"\\n\" << x;\n    }\n}",
    "output": "-4 0\\n-3 2\\n-3\\n-103\\n-106\\n-116",
    "explanation": "Gordon declares arrays 1 larger than needed (2+1 by 2+1) and loops from index 1 to 2. Float thresholds require exact zero checking."
   },
   {
    "id": "Q2-1",
    "title": "Quiz 2 (Wednesday Section) — Validated Array Menu Program",
    "gordonSource": "Dr. Gordon Quiz 2 Handout & Solution Reference",
    "matchType": "100% Verbatim Identical",
    "codeSnippet": "// Validated n <= 100, arrays A and B, menu k=1 (avg), k=2 (min), k=3 (dot product)",
    "output": "Interactive menu output",
    "explanation": "Gordon confirmed the midterm programming question mirrors his quiz questions. Covers while-loop input validation, 1D array reading, min/avg accumulation, and interactive loop menu."
   }
  ],
  "similarQuestionsToReview": [
   {
    "id": "M24-1a",
    "title": "Winter 2024 Midterm Q1(a) — Integer Division & Truncation Trap",
    "relatedGordonQuestion": "Fall 2023 Q2(b) & Review 1 Q2(c)",
    "similarity": "Exact same integer division truncation trap",
    "codeSnippet": "cout << (5%2)*int(1.5+2);",
    "output": "3",
    "studyNote": "Tests 5%2 = 1 and int(3.5) = 3 -> 1 * 3 = 3. Review this alongside Gordon’s 1/(i+1) = 0 trap."
   },
   {
    "id": "M24-1b",
    "title": "Winter 2024 Midterm Q1(b) — cmath Functions & Precision",
    "relatedGordonQuestion": "Quiz 1 & Review 4 Q1",
    "similarity": "Direct test of cmath library functions",
    "codeSnippet": "const double base = 2.75;\ncout << pow(base, 2);",
    "output": "7.5625",
    "studyNote": "pow(2.75, 2) = 7.5625. Gordon tests cmath functions (pow, sqrt, atan for PI) on quizzes and reviews."
   },
   {
    "id": "M24-1c",
    "title": "Winter 2024 Midterm Q1(c) — Loop Flow with Break & Continue",
    "relatedGordonQuestion": "Fall 2023 Q2(a) break control",
    "similarity": "Loops with continue skipping updates and dead break branches",
    "codeSnippet": "for (int i=1; i<=10; i++) {\n    if (i%4 != 2) continue;\n    else if (sqrt(i) == 3) break;\n    cout << i << \" \";\n}",
    "output": "2 6 10 ",
    "studyNote": "Break needs i=9, but 9%4 != 2, so the break branch is unreachable. Excellent test of Gordon loop flow tracing."
   },
   {
    "id": "M24-2a",
    "title": "Winter 2024 Midterm Q2(a) — Digit Peeling While-Loop",
    "relatedGordonQuestion": "Fall 2022 Midterm & Week 4/5 While-Loop Notes",
    "similarity": "Classic while-loop digit counter and condition check",
    "codeSnippet": "int num, a=0;\ncin >> num; // user enters 4321\nwhile (num > 0) {\n    num = num / 10;\n    a++;\n}\ncout << a;",
    "output": "4",
    "studyNote": "num shrinks 4321 -> 432 -> 43 -> 4 -> 0. Four passes. Core pattern for while-loop arithmetic."
   },
   {
    "id": "M24-2b",
    "title": "Winter 2024 Midterm Q2(b) — Halving Loop & Counter Scope Trap",
    "relatedGordonQuestion": "Dr. Gordon Table Tracing Rules",
    "similarity": "Integer halving loop with duplicate post-loop print",
    "codeSnippet": "int i, j=0;\nfor (i=5; i>0; i/=2) {\n    j++;\n    cout << j;\n}\ncout << j;",
    "output": "1233",
    "studyNote": "i passes: 5, 2, 1 (3 passes printing 123), then j=3 prints again outside the loop -> 1233. Essential review for table tracing."
   },
   {
    "id": "M24-2c",
    "title": "Winter 2024 Midterm Q2(c) — Nested Loops with Modulo Filter",
    "relatedGordonQuestion": "Review 1 Q2(a) Nested 2D Loops",
    "similarity": "Nested for-loop with conditional inner execution",
    "codeSnippet": "int result = 0;\nfor (int i=1; i<=10; i++) {\n    if (i%3 == 0) {\n        for (int j=i; j<=5; j++) result += j;\n    }\n}\ncout << \"The final answer is: \" << result;",
    "output": "The final answer is: 12",
    "studyNote": "Only i=3 executes the inner loop (j=3,4,5 adding to 12); for i=6,9 j starts > 5 so inner loop runs 0 times."
   },
   {
    "id": "M24-3a",
    "title": "Winter 2024 Midterm Q3(a) — Short-Circuit Logical Evaluation",
    "relatedGordonQuestion": "Week 4 Control Statements & Operator Precedence",
    "similarity": "Short-circuit evaluation side-effect on decrement",
    "codeSnippet": "int found = 1, count = 4;\nif (!found || --count == 0) cout << \"safe\\n\";\ncout << \"count = \" << count;",
    "output": "count = 3",
    "studyNote": "!found is false, forcing the right side to evaluate: --count reduces count to 3. Tests operator side-effects."
   },
   {
    "id": "M24-3c",
    "title": "Winter 2024 Midterm Q3(c) — Multi-Variable Compound Accumulator Trace",
    "relatedGordonQuestion": "Fall 2023 Q2(a) Multi-Variable Table Trace",
    "similarity": "Ideal candidate for Dr. Gordon’s Simplified Table Approach",
    "codeSnippet": "double x=4, y=4, z=4, q=4;\nfor(int i=0; i<4; i++) {\n    x = x * 1.5; y *= 2; z /= 2; q += 4;\n}\ncout << x << \" \" << y << \" \" << z << \" \" << q;",
    "output": "20.25 64 0.25 20",
    "studyNote": "Each variable follows its own progression per line. Directly train Gordon’s multi-column table tracing with this problem."
   }
  ]
 },
 "exams": [
  {
   "id": "M24",
   "short": "W24",
   "label": "Winter 2024 midterm (2024/02/22)",
   "kind": "midterm",
   "detail": "3 questions × 3 parts, all “what does this print?”; 2a and 2b were multiple choice",
   "count": 9
  },
  {
   "id": "F23",
   "short": "F23",
   "label": "Fall 2023 midterm, Question 2 (40 %)",
   "kind": "midterm",
   "detail": "Two output-tracing programs (only Q2 of the paper was posted)",
   "count": 2
  },
  {
   "id": "R21",
   "short": "Rev 21",
   "label": "Midterm Review #1, as posted in 2021/22",
   "kind": "quiz",
   "detail": "Prof. Gordon’s own review: one program to write, three outputs to trace",
   "count": 4
  },
  {
   "id": "R25",
   "short": "Rev 25",
   "label": "Midterm Review #1, as posted again in 2025/26",
   "kind": "quiz",
   "detail": "The same review handed out four years later: same program, same if-ladder question",
   "count": 2
  },
  {
   "id": "Q2",
   "short": "Quiz 2",
   "label": "Quiz #2 (60-minute programming quiz)",
   "kind": "quiz",
   "detail": "Write one program in the compiler and submit the .cpp",
   "count": 1
  }
 ],
 "subjects": [
  {
   "id": "basics",
   "name": "Data types & casting",
   "ch": "Weeks 1–2",
   "blurb": "What each type holds, chars as numbers, where a cast applies.",
   "topics": [
    "types",
    "cast"
   ]
  },
  {
   "id": "expr",
   "name": "Expressions & operators",
   "ch": "Week 3",
   "blurb": "Integer division, %, ++/--, compound assignment, precedence, cmath.",
   "topics": [
    "intdiv",
    "ops",
    "math"
   ]
  },
  {
   "id": "control",
   "name": "Control statements",
   "ch": "Weeks 4–5",
   "blurb": "Ladders, logical operators, for/while, break/continue, nested loops, and Week 4 systematic trace tables.",
   "topics": [
    "ifelse",
    "logic",
    "for",
    "while",
    "breakcont",
    "nested",
    "trace-tables"
   ]
  },
  {
   "id": "arrays",
   "name": "Arrays, File I/O & Matrix Algebra",
   "ch": "Weeks 6–7",
   "blurb": "1-D/2-D arrays, 6 initialization methods, compile vs. run-time array errors, <fstream> file I/O, matrix algebra, and C-strings.",
   "topics": [
    "arr1",
    "arr-errors",
    "arr2",
    "file-io",
    "matrix-alg",
    "cstr"
   ]
  },
  {
   "id": "programs",
   "name": "Writing programs",
   "ch": "All weeks",
   "blurb": "The one program-writing question: input validation, arrays, menus.",
   "topics": [
    "write"
   ]
  }
 ],
 "topics": [
  {
   "id": "types",
   "name": "Data types, sizes & overflow",
   "ch": "Week 2",
   "lec": [
    {
     "d": "vt1"
    },
    {
     "d": "vt2"
    }
   ],
   "cal": "Mini-course Lesson 3",
   "guide": "Part 1"
  },
  {
   "id": "cast",
   "name": "Casting & mixed-type expressions",
   "ch": "Week 2",
   "lec": [
    {
     "d": "vt2mod"
    }
   ],
   "cal": "Mini-course Lesson 3",
   "guide": "Part 2"
  },
  {
   "id": "intdiv",
   "name": "Integer division & %",
   "ch": "Week 3",
   "lec": [],
   "cal": "Mini-course Lesson 4",
   "guide": "Part 3"
  },
  {
   "id": "ops",
   "name": "++/--, compound assignment & precedence",
   "ch": "Week 3",
   "lec": [],
   "cal": "Mini-course Lesson 4",
   "guide": "Part 3"
  },
  {
   "id": "math",
   "name": "cmath functions (pow, sqrt, …)",
   "ch": "Week 3",
   "lec": [],
   "cal": "Mini-course Lesson 4",
   "guide": "Part 3"
  },
  {
   "id": "ifelse",
   "name": "if / else-if ladders",
   "ch": "Week 4",
   "lec": [
    {
     "d": "cs1"
    }
   ],
   "cal": "Mini-course Lesson 5",
   "guide": "Part 4"
  },
  {
   "id": "logic",
   "name": "Logical operators & short-circuit",
   "ch": "Week 4",
   "lec": [
    {
     "d": "cs1"
    }
   ],
   "cal": "Mini-course Lesson 5",
   "guide": "Part 4"
  },
  {
   "id": "for",
   "name": "for loops",
   "ch": "Week 4",
   "lec": [
    {
     "d": "cs2"
    }
   ],
   "cal": "Mini-course Lesson 5",
   "guide": "Part 4"
  },
  {
   "id": "while",
   "name": "while / do-while & digit loops",
   "ch": "Weeks 4–5",
   "lec": [
    {
     "d": "cs2"
    }
   ],
   "cal": "Mini-course Lesson 5",
   "guide": "Part 4"
  },
  {
   "id": "breakcont",
   "name": "break & continue",
   "ch": "Week 5",
   "lec": [
    {
     "d": "cs3"
    }
   ],
   "cal": "Mini-course Lesson 5",
   "guide": "Part 5"
  },
  {
   "id": "nested",
   "name": "Nested loops",
   "ch": "Week 5",
   "lec": [
    {
     "d": "cs3"
    }
   ],
   "cal": "Mini-course Lesson 5",
   "guide": "Part 5"
  },
  {
   "id": "arr1",
   "name": "1-D arrays (sum, max, dot product)",
   "ch": "Weeks 6–7",
   "lec": [
    {
     "d": "mini6"
    }
   ],
   "cal": "Mini-course Lesson 6",
   "guide": "Part 5"
  },
  {
   "id": "arr2",
   "name": "2-D arrays",
   "ch": "Weeks 6–7",
   "lec": [
    {
     "d": "mini6"
    }
   ],
   "cal": "Mini-course Lesson 6"
  },
  {
   "id": "cstr",
   "name": "C-strings & the null terminator",
   "ch": "Weeks 6–7",
   "lec": [
    {
     "d": "mini6"
    }
   ],
   "cal": "Mini-course Lesson 6"
  },
  {
   "id": "write",
   "name": "Writing a full program",
   "ch": "All weeks",
   "lec": [
    {
     "d": "trace"
    }
   ],
   "cal": "7-step recipe",
   "guide": "Part 5"
  },
  {
   "id": "trace-tables",
   "name": "Systematic trace tables, scientific tables & overflow checks (Week 4 Lec 2)",
   "ch": "Week 4",
   "lec": [],
   "cal": "Week 4 In-Person Lecture 2",
   "guide": "Part 5"
  },
  {
   "id": "arr-errors",
   "name": "6 array initialization methods & 8 compile vs. run-time errors (Week 7 Lec 1)",
   "ch": "Week 7",
   "lec": [],
   "cal": "Week 7 In-Person Lecture 1",
   "guide": "Part 5"
  },
  {
   "id": "file-io",
   "name": "Array File I/O with <fstream> (ifstream & ofstream 5-step recipe)",
   "ch": "Week 7",
   "lec": [],
   "cal": "Week 7 In-Person Lecture 2",
   "guide": "Part 5"
  },
  {
   "id": "matrix-alg",
   "name": "2-D matrix algebra: transpose, column sums, norms, swap & multiplication",
   "ch": "Week 7",
   "lec": [],
   "cal": "Week 7 In-Person Lecture 2 & Exercise Part 2",
   "guide": "Part 5"
  }
 ],
 "questions": [
  {
   "id": "M24-1a",
   "exam": "M24",
   "n": "1a",
   "topic": "intdiv",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "cout<<(5%2)*int(1.5+2);",
   "ans": "3",
   "status": "verified",
   "note": "$5\\%2 = 1$; $1.5 + 2 = 3.5$ and int() truncates to 3; $1 \\times 3 = 3$.",
   "f": [
    "L-intdiv"
   ]
  },
  {
   "id": "M24-1b",
   "exam": "M24",
   "n": "1b",
   "topic": "math",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "const double base = 2.75;\ncout<<pow(base, 2);",
   "ans": "7.5625",
   "status": "verified",
   "note": "$2.75^2 = 7.5625$; cout prints up to 6 significant digits.",
   "f": [
    "L-math"
   ]
  },
  {
   "id": "M24-1c",
   "exam": "M24",
   "n": "1c",
   "topic": "breakcont",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "for (int i = 1; i <= 10; i+=1) {\n    if (i%4!=2) {\n        continue; }\n    else if (sqrt(i) == 3) {\n        break; }\n    cout<<i <<\" \"; }",
   "ans": "2 6 10 ",
   "status": "verified",
   "note": "Only i with i%4 == 2 reach the cout: 2, 6, 10. The break needs sqrt(i) == 3 (i = 9), but 9%4 = 1 so i = 9 never gets that far.",
   "f": [
    "L-break"
   ]
  },
  {
   "id": "M24-2a",
   "exam": "M24",
   "n": "2a",
   "topic": "while",
   "kind": "mc",
   "q": "The user enters 4321. What is printed at the end?",
   "code": "int num;\nint a=0;\ncout<<\"Please Enter any number : \";\ncin >>num;\nwhile(num>0) {\n    num = num / 10;\n    a++;\n}\ncout<<a;",
   "opts": [
    "4321",
    "321",
    "4",
    "3"
   ],
   "ans": "c",
   "status": "verified",
   "note": "Each pass removes one digit (integer division by 10) and counts it: 4321 → 432 → 43 → 4 → 0, four passes, so a = 4. This loop counts digits.",
   "f": [
    "L-while"
   ]
  },
  {
   "id": "M24-2b",
   "exam": "M24",
   "n": "2b",
   "topic": "for",
   "kind": "mc",
   "q": "What is printed?",
   "code": "int i, j=0;\nfor(i=5; i>0; i/=2) {\n    j++;\n    cout<<j;\n}\ncout<<j;",
   "opts": [
    "01234",
    "12345",
    "1233",
    "1234"
   ],
   "ans": "c",
   "status": "verified",
   "note": "i = 5 → 2 → 1 → 0 (integer halving), so the body runs 3 times printing 1, 2, 3; then the final cout prints j = 3 again → 1233.",
   "f": [
    "L-for"
   ]
  },
  {
   "id": "M24-2c",
   "exam": "M24",
   "n": "2c",
   "topic": "nested",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int main() {\n    int result = 0;\n    for (int i = 1; i <= 10; i++) {\n        if (i % 3 == 0) {\n            for (int j = i; j <= 5; j++) {\n                result += j;\n            }\n        }\n    }\n    cout<<\"The final answer is: \"<<result<<endl;\n    return 0;\n}",
   "ans": "The final answer is: 12",
   "status": "verified",
   "note": "Only i = 3, 6, 9 enter the inner loop, and only i = 3 has j ≤ 5: 3 + 4 + 5 = 12.",
   "f": [
    "L-nested"
   ]
  },
  {
   "id": "M24-3a",
   "exam": "M24",
   "n": "3a",
   "topic": "logic",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int main() {\n    int found = 1, count = 4;\n    if (!found || --count==0)\n        cout<<\"safe\"<<endl;\n    cout<<\"count = \"<<count<<endl;\n}",
   "ans": "count = 3",
   "status": "verified",
   "note": "!found is false, so || must evaluate the right side: --count makes count 3, and 3 == 0 is false. No \"safe\", but count has changed to 3.",
   "f": [
    "L-logic"
   ]
  },
  {
   "id": "M24-3b",
   "exam": "M24",
   "n": "3b",
   "topic": "breakcont",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int main() {\n    int i = 2;\n    while(i <=20) {\n        if(i % 3 == 0) {\n            i += 2;\n            continue;\n        }\n        cout<<i <<\" \";\n        if(i == 20) break;\n        i += 2;\n    }\n    return 0;\n}",
   "ans": "2 4 8 10 14 16 20 ",
   "status": "verified",
   "note": "Multiples of 3 (6, 12, 18) jump +2 without printing; the loop prints 2 4 8 10 14 16 20 and breaks at 20.",
   "f": [
    "L-break"
   ]
  },
  {
   "id": "M24-3c",
   "exam": "M24",
   "n": "3c",
   "topic": "ops",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int main() {\n    int i;\n    double x, y, z, q;\n    q=x=y= z = 4;\n    for(i = 0; i < 4; i++) {\n        x=x * 1.5;\n        y *= 2;\n        z /= 2;\n        q += 4;\n    }\n    cout<<\"\\nx = \"<<x;\n    cout<<\"\\ny = \"<<y;\n    cout<<\"\\nz = \"<<z;\n    cout<<\"\\nq = \"<<q;\n}",
   "ans": "x = 20.25\ny = 64\nz = 0.25\nq = 20",
   "status": "verified",
   "note": "Four passes: $x = 4(1.5)^4 = 20.25$, $y = 4\\cdot2^4 = 64$, $z = 4/2^4 = 0.25$, $q = 4 + 4\\cdot4 = 20$.",
   "f": [
    "L-ops"
   ]
  },
  {
   "id": "F23-2a",
   "exam": "F23",
   "n": "2a",
   "topic": "while",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int a=1, b=2, B[] = { 11, 7, 6, 5 };\nint i=0 , sum = 0;\nwhile(1) {\n    sum += B[i];\n    if(i > 2) break;\n    a += B[i+1];\n    i++;\n    cout << \"\\n\" << i << \" \" << a;\n}\nb = sum-i;\ncout << \"\\n\" << sum << \" \" << a << \" \" << b;",
   "ans": "1 8\n2 14\n3 19\n29 19 26",
   "status": "verified",
   "note": "Trace table: i=0 sum 11 a 8 → prints \"1 8\"; i=1 sum 18 a 14 → \"2 14\"; i=2 sum 24 a 19 → \"3 19\"; i=3 sum 29 and break. b = 29 − 3 = 26.",
   "f": [
    "L-while"
   ]
  },
  {
   "id": "F23-2b",
   "exam": "F23",
   "n": "2b",
   "topic": "ifelse",
   "kind": "open",
   "q": "What does this print? Careful with the last line.",
   "code": "int i;\ndouble A[4] = { -0.1, 0.11, 0.0, 0.2 } , x = 1.0;\nfor(i=0;i<4;i++) {\n    if(A[i] < -0.11 ) {\n        x += 1;\n    } else if (A[i] > 0.1) {\n        x -= 10;\n    } else {\n        x = 7 + 1/(i+1);\n    }\n    cout << \"\\n\" << x;\n}\ncout << \"\\n\" << A[i];",
   "ans": "Inside the loop: 8, −2, 7, −3 (one per line). Then A[i] is printed with i = 4, past the end of a 4-element array: an undefined value (garbage).",
   "steps": [
    "i=0: −0.1 is neither < −0.11 nor > 0.1 → x = 7 + 1/1 = 8",
    "i=1: 0.11 > 0.1 → x = 8 − 10 = −2",
    "i=2: 0.0 → x = 7 + 1/3 = 7 (integer division!)",
    "i=3: 0.2 > 0.1 → x = −3",
    "after the loop i = 4: A[4] is out of bounds"
   ],
   "status": "verified",
   "note": "Two traps in one question: 1/(i+1) is integer division, and the loop leaves i one past the last index.",
   "f": [
    "L-ifelse",
    "L-intdiv"
   ]
  },
  {
   "id": "R21-1",
   "exam": "R21",
   "n": 1,
   "topic": "write",
   "kind": "open",
   "q": "Write a program that (a) inputs two 5-element integer arrays A1 and A2 from the keyboard; (b) prints “A1 and A2 are equal” if all elements are equal, otherwise “A1 and A2 are not equal”.",
   "ans": "Read both arrays with for loops, then look for one mismatch (flag + break).",
   "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int A1[5], A2[5], i;\n    cout << \"Enter the 5 integers of A1: \";\n    for (i = 0; i < 5; i++) cin >> A1[i];\n    cout << \"Enter the 5 integers of A2: \";\n    for (i = 0; i < 5; i++) cin >> A2[i];\n\n    bool equal = true;              // assume equal, look for one mismatch\n    for (i = 0; i < 5; i++) {\n        if (A1[i] != A2[i]) { equal = false; break; }\n    }\n    if (equal) cout << \"A1 and A2 are equal\\n\";\n    else       cout << \"A1 and A2 are not equal\\n\";\n    return 0;\n}",
   "status": "key",
   "note": "The hint on the review says try both ways: “all equal” (count matches) or “one not equal” (flag). The flag version is shorter.",
   "f": [
    "L-write"
   ]
  },
  {
   "id": "R21-2a",
   "exam": "R21",
   "n": "2a",
   "topic": "arr2",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int i, j;\ndouble A[2+1][2+1], x=1.0;\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        A[i][j] = j*i + j*j - 6;\n        cout << A[i][j] << \" \";\n    }\n    cout << endl;\n}\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        if(A[i][j] < -1.0e-7) {\n            x += A[i][j];\n        } else if (A[i][j] > 1.0e-7) {\n            x -= 10;\n        } else {\n            x -= 100;\n        }\n        cout << \"\\n\" << x;\n    }\n}",
   "ans": "-4 0 \n-3 2 \n\n-3\n-103\n-106\n-116",
   "status": "verified",
   "note": "A[1][1] = 1+1−6 = −4, A[1][2] = 2+4−6 = 0, A[2][1] = −3, A[2][2] = 2. Then x: −4 < 0 → −3; 0 → −100 → −103; −3 → −106; 2 > 0 → −116.",
   "f": [
    "L-arr2",
    "L-ifelse"
   ]
  },
  {
   "id": "R21-2b",
   "exam": "R21",
   "n": "2b",
   "topic": "cstr",
   "kind": "open",
   "q": "What does this print?",
   "code": "int i,k=0,n1=9,n2=5;\nchar s1[] = \"tangerine\", s2[]=\"orange\", s3[100];\nfor(i=0;i<n2;i++) {\n    s3[k] = s1[i];\n    k++;\n    s3[k] = s2[i];\n    k++;\n}\ncout << s3;",
   "ans": "“toarnagneg”, then whatever garbage follows in memory: s3 never gets a \\0 terminator.",
   "steps": [
    "The loop interleaves the first 5 letters: t-o a-r n-a g-n e-g → toarnagneg (10 chars)",
    "s3[10] is never set to '\\0', and s3 is an uninitialised local array, so cout keeps printing until it happens to meet a 0 byte"
   ],
   "status": "verified",
   "note": "With s3[k] = '\\0' added after the loop, the output is exactly toarnagneg (checked with g++).",
   "f": [
    "L-cstr"
   ]
  },
  {
   "id": "R21-2c",
   "exam": "R21",
   "n": "2c",
   "topic": "ifelse",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int i=9, j=4;\nif( i == j ) {\n    cout << \"1\\n\";\n} else if ( i/j < 2.1 ) {\n    cout << \"2\\n\";\n} else if ( j/i < 1 ) {\n    cout << \"3\\n\";\n} else {\n    cout << \"4\\n\";\n    cout << \"5\\n\";\n}\nint mycount , product = 2;\nfor( mycount = 3 ; mycount > 0 ; mycount-- ) {\n    cout << mycount;\n    if( mycount > 1 ) cout << \" * \";\n    product = product * mycount;\n}\ncout << \" != \" << product;",
   "ans": "2\n3 * 2 * 1 != 12",
   "status": "verified",
   "note": "i/j = 9/4 = 2 (integer), and 2 < 2.1 → prints 2. The loop prints 3 * 2 * 1 and multiplies product (starting at 2): 2·3·2·1 = 12.",
   "f": [
    "L-ifelse",
    "L-intdiv"
   ]
  },
  {
   "id": "R25-1",
   "exam": "R25",
   "n": 1,
   "topic": "write",
   "kind": "open",
   "q": "Write a program that inputs two 5-element integer arrays A1 and A2 from the keyboard and prints whether they are equal (same wording as Review #1, 2021/22).",
   "ans": "Same program as Rev 21 Q1.",
   "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int A1[5], A2[5], i;\n    cout << \"Enter the 5 integers of A1: \";\n    for (i = 0; i < 5; i++) cin >> A1[i];\n    cout << \"Enter the 5 integers of A2: \";\n    for (i = 0; i < 5; i++) cin >> A2[i];\n\n    bool equal = true;              // assume equal, look for one mismatch\n    for (i = 0; i < 5; i++) {\n        if (A1[i] != A2[i]) { equal = false; break; }\n    }\n    if (equal) cout << \"A1 and A2 are equal\\n\";\n    else       cout << \"A1 and A2 are not equal\\n\";\n    return 0;\n}",
   "status": "key",
   "f": [
    "L-write"
   ]
  },
  {
   "id": "R25-2",
   "exam": "R25",
   "n": 2,
   "topic": "ifelse",
   "kind": "output",
   "q": "What does this program print? (Type exactly what appears on the screen.)",
   "code": "int i=9, j=4;\nif( i == j ) {\n    cout << \"1\\n\";\n} else if ( i/j < 2.1 ) {\n    cout << \"2\\n\";\n} else if ( j/i < 1 ) {\n    cout << \"3\\n\";\n} else {\n    cout << \"4\\n\";\n    cout << \"5\\n\";\n}\nint mycount , product = 2;\nfor( mycount = 3 ; mycount > 0 ; mycount-- ) {\n    cout << mycount;\n    if( mycount > 1 ) cout << \" * \";\n    product = product * mycount;\n}\ncout << \" != \" << product;",
   "ans": "2\n3 * 2 * 1 != 12",
   "status": "verified",
   "note": "Identical to Rev 21 Q2c.",
   "f": [
    "L-ifelse"
   ]
  },
  {
   "id": "Q2-1",
   "exam": "Q2",
   "n": 1,
   "topic": "write",
   "kind": "open",
   "q": "Write a program that: inputs n (≤ 100), repeating until valid; inputs two double arrays A and B of size n; inputs k (1–3): k = 1 prints the average of A, k = 2 the minimum of B, k = 3 the dot product; any other k prints an error and stops; repeat the menu until every option has been used once.",
   "ans": "Validation loop → two input loops → menu loop with an if / else-if ladder and a “used” flag per option.",
   "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, k, i;\n    double A[100], B[100];\n    // a) validated input: repeat until 1 <= n <= 100\n    cout << \"n = \"; cin >> n;\n    while (n < 1 || n > 100) { cout << \"out of range, n = \"; cin >> n; }\n    // b) read both arrays\n    for (i = 0; i < n; i++) cin >> A[i];\n    for (i = 0; i < n; i++) cin >> B[i];\n    bool used[4] = { false, false, false, false };\n    // h) repeat the menu until every option has been chosen once\n    while (!(used[1] && used[2] && used[3])) {\n        cout << \"k (1 avg A, 2 min B, 3 dot) = \"; cin >> k;\n        if (k == 1) {\n            double sum = 0;\n            for (i = 0; i < n; i++) sum += A[i];\n            cout << \"average of A = \" << sum / n << \"\\n\";\n        } else if (k == 2) {\n            double mn = B[0];\n            for (i = 1; i < n; i++) if (B[i] < mn) mn = B[i];\n            cout << \"min of B = \" << mn << \"\\n\";\n        } else if (k == 3) {\n            double dot = 0;\n            for (i = 0; i < n; i++) dot += A[i] * B[i];\n            cout << \"A.B = \" << dot << \"\\n\";\n        } else {                       // g) bad menu choice ends the program\n            cout << \"error: k must be 1, 2 or 3\\n\";\n            return 1;\n        }\n        used[k] = true;\n    }\n    return 0;\n}",
   "status": "key",
   "note": "This is the program-writing pattern for the midterm: input validation (while), array input (for), accumulate (sum/min/dot), and a menu.",
   "f": [
    "L-write",
    "L-arr"
   ]
  }
 ],
 "clusters": [
  {
   "id": "c-gordon-exact",
   "topic": "while",
   "match": "exact",
   "expect": "Very likely",
   "title": "Dr. Gordon Midterm Handout: Fall 2023 Q2(a) & Q2(b) 100% Verbatim",
   "members": [
    "F23-2a",
    "F23-2b"
   ],
   "changes": "Literally 100% identical to Dr. Gordon’s official Fall 2023 Midterm exam file and official solution .cpp file. Part (a) is the while(1) table trace with break; Part (b) is the array threshold ladder with the index-4 out-of-bounds garbage trap.",
   "study": "Trace line-by-line using Dr. Gordon’s Simplified Table Approach: update only the variables that change per line and record outputs immediately when cout fires.",
   "trap": "In Part (a), sum updates on the breaking pass before break fires (sum=29). In Part (b), 1/(i+1) truncates to 0, and A[4] is undefined memory garbage.",
   "refs": {
    "lec": [
     {
      "d": "trace"
     }
    ],
    "guide": "Part 5"
   }
  },
  {
   "id": "c-review",
   "topic": "ifelse",
   "match": "exact",
   "expect": "Very likely",
   "title": "The professor’s own Midterm Review #1, handed out again four years later",
   "members": [
    "R21-2c",
    "R25-2"
   ],
   "changes": "Nothing changed: the 2025/26 review is the 2021/22 review. The if-ladder with i/j < 2.1 and the factorial loop are word for word.",
   "study": "Do every part of the review until you can trace it without the compiler. Your professor reuses his material.",
   "trap": "i/j is integer division (9/4 = 2) and product starts at 2, not 1.",
   "refs": {
    "lec": [
     {
      "d": "cs1"
     }
    ],
    "cal": "Mini-course Lesson 5",
    "guide": "Part 4"
   }
  },
  {
   "id": "c-compare",
   "topic": "write",
   "match": "exact",
   "expect": "Very likely",
   "title": "Write it: read two arrays, compare them",
   "members": [
    "R21-1",
    "R25-1"
   ],
   "changes": "Same program in both postings of the review.",
   "study": "Declare → input with for loops → flag loop with break → if/else output. The 7-step recipe.",
   "trap": "Printing “equal” inside the loop (prints 5 times) instead of after it.",
   "refs": {
    "lec": [
     {
      "d": "trace"
     }
    ],
    "guide": "Part 5"
   }
  },
  {
   "id": "c-program",
   "topic": "write",
   "match": "template",
   "expect": "Very likely",
   "title": "Program writing: input loop + array + accumulate",
   "members": [
    "R21-1",
    "Q2-1"
   ],
   "changes": "Review: compare two arrays. Quiz 2: validated n, two arrays, a menu for average / min / dot product.",
   "study": "Master the four building blocks: validation while-loop, array input for-loop, accumulator (sum, min, dot), menu ladder.",
   "trap": "Using double for loop counters, initialising min to 0 instead of B[0], dividing an int sum by n.",
   "refs": {
    "lec": [
     {
      "d": "trace"
     }
    ],
    "guide": "Part 5"
   }
  },
  {
   "id": "c-ladder",
   "topic": "ifelse",
   "match": "template",
   "expect": "Very likely",
   "title": "if / else-if ladder inside a loop, with tiny thresholds",
   "members": [
    "F23-2b",
    "R21-2a",
    "R21-2c"
   ],
   "changes": "F23: thresholds −0.11 / 0.1 on a 1-D array. Review: ±1.0e-7 on a 2-D array. Review Q2c: integer division inside the condition.",
   "study": "Evaluate the conditions top to bottom and stop at the first true one. Zero falls through to else.",
   "trap": "−0.1 is NOT < −0.11; 0.0 is neither < −1e-7 nor > 1e-7.",
   "refs": {
    "lec": [
     {
      "d": "cs1"
     }
    ],
    "cal": "Mini-course Lesson 5",
    "guide": "Part 4"
   }
  },
  {
   "id": "c-intdiv",
   "topic": "intdiv",
   "match": "concept",
   "expect": "Very likely",
   "title": "Integer division and % hidden inside expressions",
   "members": [
    "M24-1a",
    "F23-2b",
    "R21-2c"
   ],
   "changes": "W24: (5%2)*int(1.5+2). F23: 7 + 1/(i+1) inside the else. Review: i/j < 2.1.",
   "study": "int / int truncates toward zero before anything else happens. Only one double operand makes the whole operation double.",
   "trap": "1/3 = 0, so 7 + 1/3 = 7, and 9/4 = 2.",
   "refs": {
    "guide": "Part 3",
    "cal": "Mini-course Lesson 4"
   }
  },
  {
   "id": "c-break",
   "topic": "breakcont",
   "match": "template",
   "expect": "Very likely",
   "title": "Loops steered by break and continue",
   "members": [
    "M24-1c",
    "M24-3b",
    "F23-2a"
   ],
   "changes": "W24 1c: continue skips most i, break never fires. W24 3b: continue after a +2 jump. F23 2a: while(1) with break in the middle.",
   "study": "continue jumps to the next test or update; break leaves the loop. Write a trace table: i, condition, what prints.",
   "trap": "In a while loop, continue skips the i += 2 at the bottom, so the skip must update i itself.",
   "refs": {
    "lec": [
     {
      "d": "cs3"
     }
    ],
    "guide": "Part 5"
   }
  },
  {
   "id": "c-accum",
   "topic": "ops",
   "match": "concept",
   "expect": "Likely",
   "title": "Variables updated every pass (accumulators)",
   "members": [
    "M24-3c",
    "M24-2c",
    "F23-2a"
   ],
   "changes": "W24 3c: four compound assignments ×4 passes. W24 2c: nested sum. F23: sum and a both accumulate.",
   "study": "Make a trace table with one column per variable and one row per pass.",
   "trap": "z /= 2 on a double halves exactly (0.25), whereas on an int it would hit 0.",
   "refs": {
    "guide": "Part 3"
   }
  },
  {
   "id": "c-loopcount",
   "topic": "for",
   "match": "template",
   "expect": "Likely",
   "title": "How many times does the loop run?",
   "members": [
    "M24-2a",
    "M24-2b",
    "M24-2c"
   ],
   "changes": "Digit counting (num/10), halving (i/=2), and an inner loop that only runs for one value of i.",
   "study": "Write the sequence of loop-variable values first, then count.",
   "trap": "The last print outside the loop repeats the counter (1233, not 123).",
   "refs": {
    "lec": [
     {
      "d": "cs2"
     }
    ],
    "guide": "Part 4"
   }
  },
  {
   "id": "c-bounds",
   "topic": "arr1",
   "match": "concept",
   "expect": "Likely",
   "title": "Array indices and the end of the array",
   "members": [
    "F23-2a",
    "F23-2b",
    "R21-2b"
   ],
   "changes": "F23 2a reads B[i+1]; F23 2b prints A[i] after the loop (i = 4); the review prints a char array without a terminator.",
   "study": "An array of size n has indices 0 … n−1. After for(i=0;i<n;i++), i equals n.",
   "trap": "Reading A[n] or printing a char array with no \\0 is undefined: say so in your answer.",
   "refs": {
    "lec": [
     {
      "d": "mini6"
     }
    ]
   }
  }
 ],
 "formulas": [
  {
   "id": "L-intdiv",
   "topic": "intdiv",
   "name": "Integer division & %",
   "calc": null,
   "meaning": "int / int throws away the remainder; % gives the remainder.",
   "steps": [
    "Look at the TYPES of both operands before dividing.",
    "int / int → truncate toward zero; any double operand → real division.",
    "% only works on ints; the sign follows the left operand."
   ],
   "traps": [
    "1/(i+1) is 0 for every i ≥ 1.",
    "Storing the result in a double does not help: double c = 17/5 gives 3."
   ],
   "seen": [
    "M24-1a",
    "F23-2b",
    "R21-2c"
   ],
   "lec": [],
   "guide": "Part 3",
   "cal": "Mini-course Lesson 4",
   "learn": {
    "idea": "C++ decides how to divide from the types of the two numbers, before it looks at where the answer goes. Two ints → integer division: the fraction is dropped (truncated toward zero). The % operator returns the remainder of that division. This one rule produces a trap question on almost every past midterm.",
    "when": [
     "A / or % appears with integer variables or literals (no decimal point).",
     "An int expression feeds a comparison like i/j < 2.1."
    ],
    "example": {
     "title": "Winter 2024 midterm Q1a",
     "given": "cout << (5%2)*int(1.5+2);",
     "find": "the output",
     "code": "cout<<(5%2)*int(1.5+2);",
     "steps": [
      {
       "say": "5 % 2 is the remainder of 5 ÷ 2.",
       "tex": "5\\%2 = 1"
      },
      {
       "say": "1.5 + 2 is a double; int() truncates it.",
       "tex": "\\text{int}(3.5) = 3"
      },
      {
       "say": "Multiply.",
       "tex": "1\\times3 = 3"
      }
     ],
     "answer": "Prints 3"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-1a"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << 7/2 << \" \" << 7%2 << \" \" << 7.0/2;",
      "ans": "3 1 3.5",
      "why": "7/2 = 3 (int), 7%2 = 1, 7.0/2 = 3.5 (one double operand)."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int a=17, b=5;\ndouble c = a/b;\ncout << c << \" \" << a%b << \" \" << (double)a/b;",
      "ans": "3 2 3.4",
      "why": "17/5 = 3 is computed as int before it is stored in the double."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << (9%4)*int(2.7+1.5);",
      "ans": "4",
      "why": "9%4 = 1 and int(4.2) = 4."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double x = 7 + 1/2;\ncout << x;",
      "ans": "7",
      "why": "1/2 = 0, so x = 7."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i=11, j=4;\nif (i/j < 2.8) cout << \"A\";\nelse cout << \"B\";",
      "ans": "A",
      "why": "11/4 = 2 and 2 < 2.8."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << -7/2 << \" \" << -7%2;",
      "ans": "-3 -1",
      "why": "C++ truncates toward zero: −7/2 = −3 and the remainder takes the sign of −7."
     },
     {
      "type": "exam",
      "id": "R21-2c"
     }
    ]
   }
  },
  {
   "id": "L-cast",
   "topic": "cast",
   "name": "Casting & mixed types",
   "calc": null,
   "meaning": "Converting a value to another type: (double)x, int(x), static_cast.",
   "steps": [
    "A cast applies to what is immediately after it (or inside its parentheses).",
    "int(x) truncates toward zero, it does not round.",
    "Mixed int/double arithmetic promotes the int to double for that one operation."
   ],
   "traps": [
    "(double)(a/b) casts AFTER the integer division.",
    "Assigning a double to an int silently truncates."
   ],
   "seen": [
    "M24-1a"
   ],
   "lec": [
    {
     "d": "vt2mod"
    }
   ],
   "guide": "Part 2",
   "cal": "Mini-course Lesson 3",
   "learn": {
    "idea": "A cast converts a value for one expression. The position matters: (double)a/b casts a first, so the division is real; (double)(a/b) divides as ints first and only then converts the truncated result.",
    "when": [
     "You see (double), int( ), or a double assigned to an int."
    ],
    "example": {
     "title": "Where the cast sits",
     "given": "int a = 7, b = 2;",
     "find": "(double)(a/b) and (double)a/b",
     "code": "int a=7, b=2;\ncout << (double)(a/b) << \" \" << (double)a/b;",
     "steps": [
      {
       "say": "Inside the parentheses first: a/b = 3 (int).",
       "tex": "(\\text{double})(3) = 3"
      },
      {
       "say": "Second: a becomes 7.0, then 7.0/2.",
       "tex": "7.0/2 = 3.5"
      }
     ],
     "answer": "Prints “3 3.5”"
    },
    "quiz": [
     {
      "type": "output",
      "badge": "similar",
      "code": "int a=7, b=2;\ncout << (double)(a/b) << \" \" << (double)a/b;",
      "ans": "3 3.5",
      "why": "The first cast happens after the integer division."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << int(2.9) + int(-2.9);",
      "ans": "0",
      "why": "int() truncates toward zero: 2 + (−2) = 0."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double d = 1/3*3.0;\ncout << d;",
      "ans": "0",
      "why": "1/3 = 0 first, then 0 × 3.0 = 0."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << 1/3.0*3;",
      "ans": "1",
      "why": "1/3.0 is a real division."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int n = 3.99;\ncout << n;",
      "ans": "3",
      "why": "Assigning 3.99 to an int truncates to 3."
     }
    ]
   }
  },
  {
   "id": "L-types",
   "topic": "types",
   "name": "Types, sizes & ranges",
   "calc": null,
   "meaning": "What each basic type stores and how big it is.",
   "steps": [
    "int: 4 bytes, about ±2.1 billion. double: 8 bytes, ~16 significant digits. char: 1 byte. bool: 0 or 1.",
    "A char is a small integer (its ASCII code).",
    "Any non-zero value stored in a bool becomes 1."
   ],
   "traps": [
    "Overflow wraps around silently.",
    "cout prints a char as a letter but (int)c as its code."
   ],
   "seen": [],
   "lec": [
    {
     "d": "vt1"
    },
    {
     "d": "vt2"
    }
   ],
   "guide": "Part 1",
   "cal": "Mini-course Lesson 3",
   "learn": {
    "idea": "Each type is a fixed-size box. The size sets the range: an int cannot hold 3 billion, a char holds one byte, and a bool only ever holds 0 or 1. Characters are stored as numbers (ASCII), which is why you can add to them.",
    "when": [
     "Questions about sizeof, ranges, chars and ASCII, bool conversions."
    ],
    "example": {
     "title": "char arithmetic",
     "given": "char c = 'A' + 2;",
     "find": "c and (int)c",
     "code": "char c = 'A' + 2;\ncout << c << \" \" << (int)c;",
     "steps": [
      {
       "say": "'A' is 65 in ASCII; 65 + 2 = 67."
      },
      {
       "say": "67 is the code of C. cout of a char prints the letter, (int) prints the number."
      }
     ],
     "answer": "Prints “C 67”"
    },
    "quiz": [
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << sizeof(int) << \" \" << sizeof(double) << \" \" << sizeof(char);",
      "ans": "4 8 1",
      "why": "int 4, double 8, char 1 bytes on this compiler."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "char c = 'A' + 2;\ncout << c << \" \" << (int)c;",
      "ans": "C 67",
      "why": "'A' = 65, +2 = 67 = 'C'."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "bool b = 5;\ncout << b << \" \" << (b+b);",
      "ans": "1 2",
      "why": "Any non-zero value becomes true (1); 1 + 1 = 2 as an int."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "char c = 'a';\nc = c - 32;\ncout << c;",
      "ans": "A",
      "why": "Lower-case and upper-case letters are 32 apart in ASCII."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Which type would you use to store 3 000 000 000 safely?",
      "opts": [
       "int",
       "short",
       "long long",
       "char"
      ],
      "ans": "c",
      "why": "int tops out near 2.147 × 10⁹."
     }
    ]
   }
  },
  {
   "id": "L-ops",
   "topic": "ops",
   "name": "++/--, compound assignment & precedence",
   "calc": null,
   "meaning": "How C++ updates and evaluates expressions.",
   "steps": [
    "* / % happen before + −, left to right within a level.",
    "x *= 2 + 1 means x = x * (2 + 1).",
    "i++ uses the old value then increments; ++i increments first."
   ],
   "traps": [
    "Mixing i++ and i in one expression.",
    "Forgetting that compound assignment evaluates the whole right side first."
   ],
   "seen": [
    "M24-3c"
   ],
   "lec": [],
   "guide": "Part 3",
   "cal": "Mini-course Lesson 4",
   "learn": {
    "idea": "Operators have a pecking order: *, / and % bind tighter than + and −, and assignment happens last. Compound operators like x *= e compute e completely, then do x = x * e. Post-increment hands out the old value; pre-increment hands out the new one.",
    "when": [
     "A line mixes several operators, or a loop updates variables with +=, *=, /=."
    ],
    "example": {
     "title": "Winter 2024 midterm Q3c",
     "given": "x, y, z, q start at 4; four passes of x=x*1.5; y*=2; z/=2; q+=4;",
     "find": "the four values",
     "code": "int main() {\n    int i;\n    double x, y, z, q;\n    q=x=y= z = 4;\n    for(i = 0; i < 4; i++) {\n        x=x * 1.5;\n        y *= 2;\n        z /= 2;\n        q += 4;\n    }\n    cout<<\"\\nx = \"<<x;\n    cout<<\"\\ny = \"<<y;\n    cout<<\"\\nz = \"<<z;\n    cout<<\"\\nq = \"<<q;\n}",
     "steps": [
      {
       "say": "Each pass multiplies x by 1.5.",
       "tex": "x = 4(1.5)^4 = 20.25"
      },
      {
       "say": "y doubles and z halves four times.",
       "tex": "y = 4\\cdot2^4 = 64,\\quad z = 4/2^4 = 0.25"
      },
      {
       "say": "q gains 4 each pass.",
       "tex": "q = 4 + 4\\cdot4 = 20"
      }
     ],
     "answer": "x = 20.25, y = 64, z = 0.25, q = 20"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-3c"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i = 5;\nint j = i++ + 2;\ncout << i << \" \" << j;",
      "ans": "6 7",
      "why": "j gets the old i (5) + 2; i becomes 6."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i = 5;\nint j = ++i + 2;\ncout << i << \" \" << j;",
      "ans": "6 8",
      "why": "++i makes i 6 first, then j = 8."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double x=4, y=4, z=4, q=4;\nfor (int i = 0; i < 3; i++) {\n    x *= 2;\n    y /= 2;\n    z += 1.5;\n    q -= 1;\n}\ncout << x << \" \" << y << \" \" << z << \" \" << q;",
      "ans": "32 0.5 8.5 1",
      "why": "Three passes: 4·2³, 4/2³, 4 + 3·1.5, 4 − 3."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int a=2, b=3, c=4;\ncout << a + b*c % 5 - c/b;",
      "ans": "3",
      "why": "b*c % 5 = 12 % 5 = 2 and c/b = 1: 2 + 2 − 1."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << 10 - 4 / 2 * 3 + 1;",
      "ans": "5",
      "why": "4/2*3 = 6 (left to right), so 10 − 6 + 1."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int k = 3;\nk *= 2 + 1;\ncout << k;",
      "ans": "9",
      "why": "k *= 2 + 1 is k = k * 3."
     }
    ]
   }
  },
  {
   "id": "L-math",
   "topic": "math",
   "name": "cmath functions",
   "calc": null,
   "meaning": "pow, sqrt, floor, ceil, fabs and how cout prints their results.",
   "steps": [
    "#include <cmath>. They return double.",
    "cout prints up to 6 significant digits and drops trailing zeros.",
    "Storing a double result in an int truncates."
   ],
   "traps": [
    "pow(3,3) is 27 (prints 27, not 27.0).",
    "Comparing sqrt(i) == 3 only matches when i is exactly 9."
   ],
   "seen": [
    "M24-1b",
    "M24-1c"
   ],
   "lec": [],
   "guide": "Part 3",
   "cal": "Mini-course Lesson 4",
   "learn": {
    "idea": "The cmath functions all return doubles. cout shows a double with up to 6 significant digits and no trailing zeros, so 7.5625 prints as 7.5625 but 27.0 prints as 27.",
    "when": [
     "pow, sqrt, fabs, floor, ceil appear in an output question."
    ],
    "example": {
     "title": "Winter 2024 midterm Q1b",
     "given": "const double base = 2.75; cout << pow(base, 2);",
     "find": "the output",
     "code": "const double base = 2.75;\ncout<<pow(base, 2);",
     "steps": [
      {
       "say": "Square it.",
       "tex": "2.75^2 = 7.5625"
      },
      {
       "say": "Five significant digits, so it prints in full."
      }
     ],
     "answer": "Prints 7.5625"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-1b"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << pow(2.5, 2) << \" \" << sqrt(49.0);",
      "ans": "6.25 7",
      "why": "2.5² = 6.25, √49 = 7."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << pow(3, 3) - sqrt(16);",
      "ans": "23",
      "why": "27 − 4 = 23."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << floor(2.7) << \" \" << ceil(2.1) << \" \" << fabs(-3.5);",
      "ans": "2 3 3.5",
      "why": "floor rounds down, ceil rounds up, fabs drops the sign."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int r = sqrt(20);\ncout << r;",
      "ans": "4",
      "why": "√20 = 4.47… truncated to 4 when stored in an int."
     }
    ]
   }
  },
  {
   "id": "L-ifelse",
   "topic": "ifelse",
   "name": "if / else-if ladders",
   "calc": null,
   "meaning": "Exactly one branch of a ladder runs: the first true condition.",
   "steps": [
    "Test the conditions top to bottom.",
    "Stop at the first true one; skip the rest.",
    "If none is true, the else runs."
   ],
   "traps": [
    "= instead of == assigns and tests the assigned value.",
    "Never compare doubles with == (0.1 + 0.2 ≠ 0.3)."
   ],
   "seen": [
    "F23-2b",
    "R21-2a",
    "R21-2c",
    "R25-2"
   ],
   "lec": [
    {
     "d": "cs1"
    }
   ],
   "guide": "Part 4",
   "cal": "Mini-course Lesson 5",
   "learn": {
    "idea": "An if / else-if / else chain is a set of lanes: C++ checks the conditions in order and takes the first lane whose condition is true, then skips everything else. Put the ladder inside a loop and you get the most common midterm question: evaluate it once per pass and track the variable it changes.",
    "when": [
     "A loop contains if / else if / else that updates a variable and prints it."
    ],
    "example": {
     "title": "Review #1 Q2c (also 2025/26)",
     "given": "int i = 9, j = 4;",
     "find": "which branch prints",
     "code": "int i=9, j=4;\nif( i == j ) {\n    cout << \"1\\n\";\n} else if ( i/j < 2.1 ) {\n    cout << \"2\\n\";\n} else if ( j/i < 1 ) {\n    cout << \"3\\n\";\n} else {\n    cout << \"4\\n\";\n    cout << \"5\\n\";\n}\nint mycount , product = 2;\nfor( mycount = 3 ; mycount > 0 ; mycount-- ) {\n    cout << mycount;\n    if( mycount > 1 ) cout << \" * \";\n    product = product * mycount;\n}\ncout << \" != \" << product;",
     "steps": [
      {
       "say": "i == j? 9 == 4 is false."
      },
      {
       "say": "i/j < 2.1? Integer division: 9/4 = 2, and 2 < 2.1 is true → print 2. Stop."
      },
      {
       "say": "The loop prints 3 * 2 * 1 and product = 2·3·2·1 = 12."
      }
     ],
     "answer": "Prints “2” then “3 * 2 * 1 != 12”"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "R21-2c"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double A[4] = { 0.3, -0.2, 0.0, 0.05 }, x = 0;\nfor (int i = 0; i < 4; i++) {\n    if (A[i] < -0.1) x += 1;\n    else if (A[i] > 0.1) x -= 5;\n    else x = 3 + 2/(i+1);\n    cout << x << \" \";\n}",
      "ans": "-5 -4 3 3 ",
      "why": "Only the first true branch runs; 2/(i+1) is integer division."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i=7, j=3;\nif (i == j) cout << \"1\\n\";\nelse if (i/j < 2.5) cout << \"2\\n\";\nelse if (j/i < 1) cout << \"3\\n\";\nelse cout << \"4\\n\";",
      "ans": "2",
      "why": "7/3 = 2 < 2.5."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i=10, j=4;\nif (i/j > 2) cout << \"big\";\nelse if (i%j == 2) cout << \"rem\";\nelse cout << \"none\";",
      "ans": "rem",
      "why": "10/4 = 2 is not > 2; 10 % 4 = 2."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int x = 5;\nif (x = 0) cout << \"zero\";\nelse cout << \"x is \" << x;",
      "ans": "x is 0",
      "why": "x = 0 assigns 0, which is false, so the else runs and x is now 0."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double a = 0.1 + 0.2;\nif (a == 0.3) cout << \"equal\";\nelse cout << \"not equal\";",
      "ans": "not equal",
      "why": "Floating-point: 0.1 + 0.2 is not exactly 0.3."
     },
     {
      "type": "exam",
      "id": "R21-2a"
     }
    ]
   }
  },
  {
   "id": "L-logic",
   "topic": "logic",
   "name": "Logical operators & short-circuit",
   "calc": null,
   "meaning": "&&, || and ! stop evaluating as soon as the answer is known.",
   "steps": [
    "A && B: if A is false, B is never evaluated.",
    "A || B: if A is true, B is never evaluated.",
    "Side effects (++, --) in the skipped part do not happen."
   ],
   "traps": [
    "--count inside || only runs when the left side is false.",
    "cout << (a && b) prints 1 or 0."
   ],
   "seen": [
    "M24-3a"
   ],
   "lec": [
    {
     "d": "cs1"
    }
   ],
   "guide": "Part 4",
   "cal": "Mini-course Lesson 5",
   "learn": {
    "idea": "C++ evaluates && and || from left to right and stops as soon as the result is decided (short-circuit). That matters when the right side changes a variable: in a || --b, b only changes if a is false.",
    "when": [
     "A condition combines ||/&& with ++, --, or a division that could be by zero."
    ],
    "example": {
     "title": "Winter 2024 midterm Q3a",
     "given": "found = 1, count = 4; if (!found || --count == 0) …",
     "find": "what prints",
     "code": "int main() {\n    int found = 1, count = 4;\n    if (!found || --count==0)\n        cout<<\"safe\"<<endl;\n    cout<<\"count = \"<<count<<endl;\n}",
     "steps": [
      {
       "say": "!found = !1 = false, so || must look at the right side."
      },
      {
       "say": "--count makes count 3; 3 == 0 is false → no \"safe\"."
      },
      {
       "say": "The next line prints the changed count."
      }
     ],
     "answer": "Prints “count = 3”"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-3a"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int found = 0, count = 4;\nif (!found || --count == 0) cout << \"safe \";\ncout << count;",
      "ans": "safe 4",
      "why": "!0 is true, so --count is skipped: count stays 4."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int a = 0, b = 5;\nif (a != 0 && b/a > 1) cout << \"x\";\nelse cout << \"y\";\ncout << b;",
      "ans": "y5",
      "why": "a != 0 is false, so b/a is never evaluated (no divide-by-zero)."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int k = 3;\nbool r = (k > 2) || (++k > 3);\ncout << r << \" \" << k;",
      "ans": "1 3",
      "why": "k > 2 is true, so ++k never runs."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int k = 1;\nbool r = (k > 2) && (++k > 1);\ncout << r << k;",
      "ans": "01",
      "why": "k > 2 is false, so ++k never runs."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "cout << (5>3 && 2>4) << (5>3 || 2>4) << !(5>3);",
      "ans": "010",
      "why": "true is printed as 1, false as 0."
     }
    ]
   }
  },
  {
   "id": "L-for",
   "topic": "for",
   "name": "for loops & counting passes",
   "calc": null,
   "meaning": "init → test → body → update → test …",
   "steps": [
    "Write the values the loop variable takes, in order.",
    "The body runs once per value that passes the test.",
    "After the loop, the variable holds the first value that FAILED the test."
   ],
   "traps": [
    "A semicolon right after for( … ); makes the body empty.",
    "i /= 2 shrinks fast: 5 → 2 → 1 → 0."
   ],
   "seen": [
    "M24-2b"
   ],
   "lec": [
    {
     "d": "cs2"
    }
   ],
   "guide": "Part 4",
   "cal": "Mini-course Lesson 5",
   "learn": {
    "idea": "A for loop runs: initialise once, then test → body → update, until the test fails. The safest way to trace it is to list the loop variable’s values first (5, 2, 1, then 0 fails) and only then run the body for each one.",
    "when": [
     "“How many times…”, “what is printed…” with a for loop."
    ],
    "example": {
     "title": "Winter 2024 midterm Q2b",
     "given": "for (i=5; i>0; i/=2) { j++; cout << j; } cout << j;",
     "find": "the output",
     "code": "int i, j=0;\nfor(i=5; i>0; i/=2) {\n    j++;\n    cout<<j;\n}\ncout<<j;",
     "steps": [
      {
       "say": "Values of i: 5, 2, 1, then 0 fails the test."
      },
      {
       "say": "Three passes print 1, 2, 3."
      },
      {
       "say": "After the loop, cout << j prints 3 again."
      }
     ],
     "answer": "Prints 1233 (option c)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-2b"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i, j=0;\nfor (i=20; i>0; i/=3) {\n    j++;\n    cout << j;\n}\ncout << \" \" << j;",
      "ans": "123 3",
      "why": "i: 20, 6, 2, then 0 stops; j = 3."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int s = 0;\nfor (int i = 1; i <= 10; i += 3) s += i;\ncout << s;",
      "ans": "22",
      "why": "i = 1, 4, 7, 10."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i;\nfor (i = 0; i < 5; i++);\ncout << i;",
      "ans": "5",
      "why": "The semicolon makes the body empty; i ends at 5."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "for (int i = 10; i > 0; i -= 4) cout << i << \" \";",
      "ans": "10 6 2 ",
      "why": "i = 10, 6, 2."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int p = 1;\nfor (int k = 4; k > 1; k--) {\n    cout << k;\n    if (k > 2) cout << \"*\";\n    p *= k;\n}\ncout << \"=\" << p;",
      "ans": "4*3*2=24",
      "why": "k = 4, 3, 2: the * only prints for k > 2."
     }
    ]
   }
  },
  {
   "id": "L-while",
   "topic": "while",
   "name": "while / do-while & digit loops",
   "calc": null,
   "meaning": "Loops that run until a condition changes, including the classic digit loops.",
   "steps": [
    "while tests BEFORE the body; do-while runs the body once first.",
    "n % 10 is the last digit; n / 10 removes it.",
    "while(1) only stops at a break."
   ],
   "traps": [
    "do-while runs once even if the condition is false.",
    "Digit loops on 0 never execute (0 > 0 is false)."
   ],
   "seen": [
    "M24-2a",
    "F23-2a"
   ],
   "lec": [
    {
     "d": "cs2"
    }
   ],
   "guide": "Part 4",
   "cal": "Mini-course Lesson 5",
   "learn": {
    "idea": "A while loop is a for loop without the bookkeeping: you update the variable yourself. Combined with % 10 and / 10 it peels digits off a number, one per pass. That is how you count, sum or reverse digits.",
    "when": [
     "The loop condition depends on a value that changes inside the body.",
     "num % 10 or num / 10 appear."
    ],
    "example": {
     "title": "Winter 2024 midterm Q2a (input 4321)",
     "given": "while (num > 0) { num = num / 10; a++; }",
     "find": "a",
     "code": "int num;\nint a=0;\ncout<<\"Please Enter any number : \";\ncin >>num;\nwhile(num>0) {\n    num = num / 10;\n    a++;\n}\ncout<<a;",
     "steps": [
      {
       "say": "num: 4321 → 432 → 43 → 4 → 0."
      },
      {
       "say": "Four passes, so a = 4: the loop counts digits."
      }
     ],
     "answer": "Prints 4 (option c)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-2a"
     },
     {
      "type": "exam",
      "id": "F23-2a"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int num = 90817, a = 0;\nwhile (num > 0) {\n    num = num / 10;\n    a++;\n}\ncout << a;",
      "ans": "5",
      "why": "Five digits → five passes."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int n = 4321, s = 0;\nwhile (n > 0) {\n    s += n % 10;\n    n /= 10;\n}\ncout << s;",
      "ans": "10",
      "why": "1 + 2 + 3 + 4 = 10."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int n = 1203, r = 0;\nwhile (n > 0) {\n    r = r*10 + n%10;\n    n /= 10;\n}\ncout << r;",
      "ans": "3021",
      "why": "The digits come off in reverse: 3, 0, 2, 1 → 3021."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i = 10;\ndo {\n    cout << i << \" \";\n    i += 5;\n} while (i < 10);",
      "ans": "10 ",
      "why": "do-while runs once even though 10 < 10 is false."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int a=2, B[] = { 4, 3, 8, 1 }, i=0, sum=0;\nwhile (1) {\n    sum += B[i];\n    if (i > 1) break;\n    a += B[i+1];\n    i++;\n    cout << \"\\n\" << i << \" \" << a;\n}\ncout << \"\\n\" << sum << \" \" << a << \" \" << sum-i;",
      "ans": "1 5\n2 13\n15 13 13",
      "why": "Same structure as F23 Q2a; trace sum, a and i per pass."
     }
    ]
   }
  },
  {
   "id": "L-break",
   "topic": "breakcont",
   "name": "break & continue",
   "calc": null,
   "meaning": "continue skips to the next pass; break leaves the loop.",
   "steps": [
    "On continue in a for loop, the update (i++) still runs.",
    "On continue in a while loop, nothing below it runs, including your own i += …",
    "break exits only the innermost loop."
   ],
   "traps": [
    "A break that can never fire (W24 1c).",
    "break in a nested loop only leaves the inner loop."
   ],
   "seen": [
    "M24-1c",
    "M24-3b"
   ],
   "lec": [
    {
     "d": "cs3"
    }
   ],
   "guide": "Part 5",
   "cal": "Mini-course Lesson 5",
   "learn": {
    "idea": "continue means “skip the rest of this pass”; break means “leave the loop now”. Trace them with a table of i, which branch fires, and what prints. Most mistakes come from forgetting what still happens after a continue.",
    "when": [
     "A loop body contains continue or break."
    ],
    "example": {
     "title": "Winter 2024 midterm Q1c",
     "given": "for i = 1..10: if (i%4 != 2) continue; else if (sqrt(i) == 3) break; cout << i;",
     "find": "the output",
     "code": "for (int i = 1; i <= 10; i+=1) {\n    if (i%4!=2) {\n        continue; }\n    else if (sqrt(i) == 3) {\n        break; }\n    cout<<i <<\" \"; }",
     "steps": [
      {
       "say": "Only i with i % 4 == 2 get past the continue: 2, 6, 10."
      },
      {
       "say": "For those, sqrt(i) == 3 needs i = 9, which never gets this far. No break."
      }
     ],
     "answer": "Prints “2 6 10 ”"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-1c"
     },
     {
      "type": "exam",
      "id": "M24-3b"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "for (int i = 1; i <= 12; i++) {\n    if (i%3 != 0) continue;\n    else if (i == 9) break;\n    cout << i << \" \";\n}",
      "ans": "3 6 ",
      "why": "Multiples of 3 pass; 9 breaks."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i = 1;\nwhile (i <= 15) {\n    if (i % 4 == 0) {\n        i += 3;\n        continue;\n    }\n    cout << i << \" \";\n    if (i == 13) break;\n    i += 3;\n}",
      "ans": "1 7 10 13 ",
      "why": "i = 4 skips to 7; the loop breaks at 13."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int c = 0;\nfor (int i = 0; i < 10; i++) {\n    if (i == 6) break;\n    if (i % 2) continue;\n    c += i;\n}\ncout << c;",
      "ans": "6",
      "why": "Odd i are skipped; the loop stops at 6: 0 + 2 + 4."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 5; j++) {\n        if (j == 3) break;\n        cout << i*j << \" \";\n    }\n}",
      "ans": "1 2 2 4 3 6 ",
      "why": "break leaves only the inner loop, so every i prints two values."
     }
    ]
   }
  },
  {
   "id": "L-nested",
   "topic": "nested",
   "name": "Nested loops",
   "calc": null,
   "meaning": "For each pass of the outer loop, the inner loop runs completely.",
   "steps": [
    "Fix the outer variable, run the whole inner loop, then advance the outer one.",
    "The inner start can depend on the outer variable (j = i).",
    "Count total passes by adding the inner counts."
   ],
   "traps": [
    "An inner loop whose start is past its end runs zero times.",
    "endl/\\n placed after the inner loop makes one line per outer pass."
   ],
   "seen": [
    "M24-2c"
   ],
   "lec": [
    {
     "d": "cs3"
    }
   ],
   "guide": "Part 5",
   "cal": "Mini-course Lesson 5",
   "learn": {
    "idea": "A loop inside a loop: the inner one restarts from scratch on every pass of the outer one. When the inner range depends on the outer variable, some passes do nothing.",
    "when": [
     "Two for loops, one inside the other."
    ],
    "example": {
     "title": "Winter 2024 midterm Q2c",
     "given": "for i = 1..10, only i % 3 == 0: for j = i..5: result += j",
     "find": "result",
     "code": "int main() {\n    int result = 0;\n    for (int i = 1; i <= 10; i++) {\n        if (i % 3 == 0) {\n            for (int j = i; j <= 5; j++) {\n                result += j;\n            }\n        }\n    }\n    cout<<\"The final answer is: \"<<result<<endl;\n    return 0;\n}",
     "steps": [
      {
       "say": "i = 3: j = 3, 4, 5 → +12."
      },
      {
       "say": "i = 6 and 9: j starts above 5, so the inner loop runs 0 times."
      }
     ],
     "answer": "“The final answer is: 12”"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "M24-2c"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int result = 0;\nfor (int i = 1; i <= 8; i++) {\n    if (i % 4 == 0) {\n        for (int j = i; j <= 6; j++) result += j;\n    }\n}\ncout << result;",
      "ans": "15",
      "why": "Only i = 4 contributes: 4 + 5 + 6."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) cout << j;\n    cout << \"\\n\";\n}",
      "ans": "1\n12\n123",
      "why": "Row i prints 1..i."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int c = 0;\nfor (int i = 0; i < 4; i++)\n    for (int j = i; j < 4; j++) c++;\ncout << c;",
      "ans": "10",
      "why": "4 + 3 + 2 + 1 passes."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 5; j++) {\n        if (j == 3) break;\n        cout << i*j << \" \";\n    }\n}",
      "ans": "1 2 2 4 3 6 ",
      "why": "Rows stop early because of the inner break."
     }
    ]
   }
  },
  {
   "id": "L-arr",
   "topic": "arr1",
   "name": "1-D arrays: sum, max, dot product",
   "calc": null,
   "meaning": "The array patterns the midterm and Quiz 2 use.",
   "steps": [
    "Indices run 0 … n−1.",
    "Start max/min at A[0], not at 0.",
    "Missing initialisers become 0 (int Z[5] = {1} → 1 0 0 0 0)."
   ],
   "traps": [
    "Reading A[n].",
    "Dividing an int sum by n."
   ],
   "seen": [
    "F23-2a",
    "F23-2b",
    "Q2-1"
   ],
   "lec": [
    {
     "d": "mini6"
    }
   ],
   "guide": "Part 5",
   "cal": "Mini-course Lesson 6",
   "learn": {
    "idea": "Almost every array task is one loop with an accumulator: a sum, a running max or min, a count, or a dot product. Learn the four patterns and the two index traps (A[n] and starting max at 0).",
    "when": [
     "Average, max/min, count, dot product, swap/reverse."
    ],
    "example": {
     "title": "Mean and sample variance (cheat-sheet pattern)",
     "given": "A = {2, 4, 6, 8}",
     "find": "mean and sample variance",
     "code": "double A[4] = { 2, 4, 6, 8 }, sum = 0;\nint n = 4;\nfor (int i = 0; i < n; i++) sum += A[i];\ndouble ave = sum/n, s2 = 0;\nfor (int i = 0; i < n; i++) s2 += (A[i]-ave)*(A[i]-ave);\ncout << ave << \" \" << s2/(n-1);",
     "steps": [
      {
       "say": "Sum, then divide (as doubles).",
       "tex": "\\bar A = 20/4 = 5"
      },
      {
       "say": "Sum of squared deviations.",
       "tex": "9 + 1 + 1 + 9 = 20"
      },
      {
       "say": "Divide by n − 1.",
       "tex": "s^2 = 20/3 = 6.66667"
      }
     ],
     "answer": "Prints “5 6.66667”"
    },
    "quiz": [
     {
      "type": "output",
      "badge": "similar",
      "code": "int A[5] = { 3, -1, 4, 1, 5 };\nint mx = A[0];\nfor (int i = 1; i < 5; i++) if (A[i] > mx) mx = A[i];\ncout << mx;",
      "ans": "5",
      "why": "Running maximum."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double A[3] = {1, 2, 3}, B[3] = {4, 5, 6}, dot = 0;\nfor (int i = 0; i < 3; i++) dot += A[i]*B[i];\ncout << dot;",
      "ans": "32",
      "why": "1·4 + 2·5 + 3·6."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int A[6] = { 2, 7, 1, 8, 2, 8 }, cnt = 0;\nfor (int i = 0; i < 6; i++) if (A[i] > 2) cnt++;\ncout << cnt;",
      "ans": "3",
      "why": "Values greater than 2: 7, 8, 8."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int Z[5] = {1};\ncout << Z[0] << Z[1] << Z[4];",
      "ans": "100",
      "why": "Missing initialisers are 0."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int A[4] = {1, 2, 3, 4};\nfor (int i = 0; i < 2; i++) {\n    int t = A[i];\n    A[i] = A[3-i];\n    A[3-i] = t;\n}\nfor (int i = 0; i < 4; i++) cout << A[i];",
      "ans": "4321",
      "why": "Swapping the ends reverses the array."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "double A[4] = { 2, 4, 6, 8 }, sum = 0;\nint n = 4;\nfor (int i = 0; i < n; i++) sum += A[i];\ndouble ave = sum/n, s2 = 0;\nfor (int i = 0; i < n; i++) s2 += (A[i]-ave)*(A[i]-ave);\ncout << ave << \" \" << s2/(n-1);",
      "ans": "5 6.66667",
      "why": "Sample variance divides by n − 1."
     },
     {
      "type": "exam",
      "id": "F23-2b"
     }
    ]
   }
  },
  {
   "id": "L-arr2",
   "topic": "arr2",
   "name": "2-D arrays",
   "calc": null,
   "meaning": "A[row][col] with nested loops.",
   "steps": [
    "Outer loop = rows, inner loop = columns.",
    "The teacher often uses 1-based loops (i = 1..2) on an array declared one larger.",
    "Print a newline after each row."
   ],
   "traps": [
    "Unused row 0 / column 0 contain garbage: never print them."
   ],
   "seen": [
    "R21-2a"
   ],
   "lec": [
    {
     "d": "mini6"
    }
   ],
   "cal": "Mini-course Lesson 6",
   "learn": {
    "idea": "A 2-D array is a table. Fill or read it with two nested loops: the outer one picks the row, the inner one walks across the columns. Prof. Gordon declares arrays one size larger and loops from 1, so row and column 0 are never used.",
    "when": [
     "A[i][j] in an output question; matrix input or transpose."
    ],
    "example": {
     "title": "Review #1 Q2a, first loop",
     "given": "A[i][j] = j*i + j*j − 6 for i, j = 1, 2",
     "find": "the printed table",
     "code": "int i, j;\ndouble A[2+1][2+1], x=1.0;\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        A[i][j] = j*i + j*j - 6;\n        cout << A[i][j] << \" \";\n    }\n    cout << endl;\n}\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        if(A[i][j] < -1.0e-7) {\n            x += A[i][j];\n        } else if (A[i][j] > 1.0e-7) {\n            x -= 10;\n        } else {\n            x -= 100;\n        }\n        cout << \"\\n\" << x;\n    }\n}",
     "steps": [
      {
       "say": "Row 1: j=1 → 1+1−6 = −4; j=2 → 2+4−6 = 0."
      },
      {
       "say": "Row 2: j=1 → 2+1−6 = −3; j=2 → 4+4−6 = 2."
      },
      {
       "say": "Then the ladder updates x with each element in row order."
      }
     ],
     "answer": "−4 0 / −3 2, then x = −3, −103, −106, −116"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "R21-2a"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int i, j;\ndouble A[3][3];\nfor (i = 1; i <= 2; i++) {\n    for (j = 1; j <= 2; j++) {\n        A[i][j] = i*j - j - 1;\n        cout << A[i][j] << \" \";\n    }\n    cout << endl;\n}",
      "ans": "-1 -1 \n0 1 ",
      "why": "Row 1: −1 −1; row 2: 0 1."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int M[2][3] = { {1, 2, 3}, {4, 5, 6} }, s = 0;\nfor (int i = 0; i < 2; i++) s += M[i][2];\ncout << s;",
      "ans": "9",
      "why": "Last column: 3 + 6."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "int M[2][2] = { {1, 2}, {3, 4} };\ncout << M[1][0] << M[0][1];",
      "ans": "32",
      "why": "M[1][0] = 3, M[0][1] = 2."
     }
    ]
   }
  },
  {
   "id": "L-cstr",
   "topic": "cstr",
   "name": "C-strings & the null terminator",
   "calc": null,
   "meaning": "A char array is a string only if it ends with \\0.",
   "steps": [
    "char s[] = \"hello\" stores 6 chars: h e l l o \\0.",
    "cout << s prints until it meets \\0.",
    "Building a string by hand: put s[k] = '\\0' at the end."
   ],
   "traps": [
    "sizeof counts the \\0, strlen does not.",
    "A hand-built string without \\0 prints garbage after it."
   ],
   "seen": [
    "R21-2b"
   ],
   "lec": [
    {
     "d": "mini6"
    }
   ],
   "cal": "Mini-course Lesson 6",
   "learn": {
    "idea": "C-strings are char arrays with a hidden 0 byte at the end. Everything that prints or measures a string walks until that 0. Forget to add it and cout runs off into memory.",
    "when": [
     "char arrays, strlen, building a string in a loop."
    ],
    "example": {
     "title": "Review #1 Q2b",
     "given": "s1 = \"tangerine\", s2 = \"orange\", interleave 5 letters into s3",
     "find": "the output",
     "code": "int i,k=0,n1=9,n2=5;\nchar s1[] = \"tangerine\", s2[]=\"orange\", s3[100];\nfor(i=0;i<n2;i++) {\n    s3[k] = s1[i];\n    k++;\n    s3[k] = s2[i];\n    k++;\n}\ns3[k] = '\\0';\ncout << s3;",
     "steps": [
      {
       "say": "Pairs: t-o, a-r, n-a, g-n, e-g → toarnagneg."
      },
      {
       "say": "The original code never writes s3[10] = '\\0', so the real answer is “toarnagneg + garbage”. With the terminator it prints exactly toarnagneg."
      }
     ],
     "answer": "toarnagneg (followed by garbage in the original)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "R21-2b"
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "char s[] = \"hello\";\ncout << sizeof(s) << \" \" << strlen(s);",
      "ans": "6 5",
      "why": "sizeof counts the terminator: 6; strlen: 5."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "char s1[] = \"abcde\", s2[] = \"vwxyz\", s3[20];\nint k = 0;\nfor (int i = 0; i < 3; i++) {\n    s3[k++] = s1[i];\n    s3[k++] = s2[i];\n}\ns3[k] = '\\0';\ncout << s3;",
      "ans": "avbwcx",
      "why": "Interleave 3 letters, then terminate."
     },
     {
      "type": "output",
      "badge": "similar",
      "code": "char w[] = \"Engineer\";\nfor (int i = 0; w[i] != '\\0'; i += 2) cout << w[i];",
      "ans": "Egne",
      "why": "Every second letter of “Engineer”."
     }
    ]
   }
  },
  {
   "id": "L-write",
   "topic": "write",
   "name": "Writing a full program (7-step recipe)",
   "calc": null,
   "meaning": "Declare → initialise → input → control → expressions → output → test.",
   "steps": [
    "1 Declare every variable and array with the right type.",
    "2 Initialise accumulators (sum = 0, min = A[0]).",
    "3 Input with a for loop; validate with a while loop.",
    "4 Control: if/else ladder or loop.",
    "5 Expressions: the actual maths.",
    "6 Output: label it.",
    "7 Test with a small case you can check by hand."
   ],
   "traps": [
    "Printing inside the loop when the answer is only known after it.",
    "int sum / n."
   ],
   "seen": [
    "R21-1",
    "R25-1",
    "Q2-1"
   ],
   "lec": [
    {
     "d": "trace"
    }
   ],
   "guide": "Part 5",
   "cal": "7-step recipe",
   "learn": {
    "idea": "Program-writing questions are graded on structure, so follow the same seven steps every time. The midterm and Quiz 2 tasks all combine the same blocks: validated input, array input, one accumulator loop, and a decision.",
    "when": [
     "“Write a program that…”"
    ],
    "example": {
     "title": "Review #1 Q1: compare two arrays",
     "given": "two 5-element int arrays from the keyboard",
     "find": "print whether they are equal",
     "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int A1[5], A2[5], i;\n    cout << \"Enter the 5 integers of A1: \";\n    for (i = 0; i < 5; i++) cin >> A1[i];\n    cout << \"Enter the 5 integers of A2: \";\n    for (i = 0; i < 5; i++) cin >> A2[i];\n\n    bool equal = true;              // assume equal, look for one mismatch\n    for (i = 0; i < 5; i++) {\n        if (A1[i] != A2[i]) { equal = false; break; }\n    }\n    if (equal) cout << \"A1 and A2 are equal\\n\";\n    else       cout << \"A1 and A2 are not equal\\n\";\n    return 0;\n}",
     "steps": [
      {
       "say": "Declare A1[5], A2[5]; read each with a for loop."
      },
      {
       "say": "Assume equal = true; scan for one mismatch and break."
      },
      {
       "say": "Print once, after the loop."
      }
     ],
     "answer": "See the program above."
    },
    "quiz": [
     {
      "type": "exam",
      "id": "R21-1"
     },
     {
      "type": "exam",
      "id": "Q2-1"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "You need the minimum of B[0..n−1]. What should min start at?",
      "opts": [
       "0",
       "B[0]",
       "-1",
       "a very small number"
      ],
      "ans": "b",
      "why": "Starting at 0 gives the wrong answer when every element is positive."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Which loop is right for “repeat the input until n is between 1 and 100”?",
      "opts": [
       "for (i = 0; i < 100; i++)",
       "while (n < 1 || n > 100) { cin >> n; }",
       "if (n < 1 || n > 100) cin >> n;",
       "do { } while (n == 100);"
      ],
      "ans": "b",
      "why": "A while that re-reads n as long as it is out of range; an if only re-asks once."
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "double avg = sum / n; is correct when sum and n are both int.",
      "ans": false,
      "why": "int / int truncates first. Use (double)sum / n."
     }
    ]
   }
  },
  {
   "id": "L-trace-tables",
   "topic": "trace-tables",
   "name": "Systematic Line-by-Line Trace Tables, Scientific Formatting & Overflow Loops",
   "calc": null,
   "tex": "\\text{Trace Table: Line } \\to \\text{Variables } (i, j, x, y) \\to \\text{Output}",
   "meaning": "Systematic line-by-line trace tables track uninitialized variables (G = Garbage), loop update order, scientific table formatting, and overflow rollover.",
   "steps": [
      "Number every executable line including the three parts of for(init; cond; update).",
      "Track variable columns; mark uninitialized local variables as G (Garbage).",
      "Add roundoff guard (e.g. + 1.0e-5 * dx) to loop termination conditions on floating-point ranges.",
      "Trace integer wrap-around and double overflow (inf * 10 == inf)."
   ],
   "traps": [
      "Assuming an uninitialized variable starts at 0; it contains garbage bytes.",
      "Forgetting the loop update expression runs AFTER the loop body in each iteration."
   ],
   "seen": [],
   "lec": [],
   "guide": "Part 5",
   "cal": "Week 4 In-Person Lecture 2 & Quiz 1",
   "learn": {
      "idea": "On every quiz and midterm, output questions are designed to defeat mental guessing. Number each statement (giving the three parts of `for(a; b; c)` their own line numbers), write a column for each variable starting at `G` (Garbage) until initialized, and update only the variable modified on that line. For numerical programming questions, remember the floating-point loop guard `+ 1.0e-5` so the final table row is never lost to binary roundoff.",
      "when": [
         "Multi-variable `for` / `while` output tracing where indices, signs (`j *= -1`), or array elements mutate inside the loop",
         "Printing formatted tables of `x`, `sin(x)`, `exp(x)` in scientific notation with `N` intervals",
         "Finding hardware limits of `unsigned long int` or `double` using a `while(1)` loop"
      ],
      "example": {
         "title": "Week 4 Lecture 2 In-Person Q1 & Q2: Line-Numbered Variable Table Trace",
         "given": "A `for` loop flipping `j *= -1` and accumulating `x += y`, followed by a `while(x < 35)` loop writing into `A[5]`",
         "find": "Trace the exact console output and identify where `G` (Garbage) appears",
         "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Part 1: Sign-flipping accumulator\n    int i, j;       // 1: i=G, j=G\n    double x, y;    // 2: x=G, y=G\n    j = -1;         // 3\n    x = 0.0;        // 4\n    y = 2.5;        // 5\n    //   6     7    11\n    for(i=0; i<=3; i++) {\n        x += y;     // 8\n        j *= -1;    // 9\n        cout << j << \"\\t\" << x << \"\\n\"; // 10\n    }\n    cout << \"\\ni = \" << i << \"\\n\"; // 12 (prints i = 4!)\n\n    // Part 2: Array filling with selective if(i % 2 == 0)\n    int A[5];       // A[0..4] all start as G (Garbage)!\n    x = 1.5;\n    i = 0;\n    while(x < 35) {\n        i++;\n        x = 2*x + 1;\n        if(i % 2 == 0) A[i] = x;\n    }\n    for(i=0; i<5; i++) cout << A[i] << \" \";\n    return 0;\n}",
         "steps": [
            {
               "say": "In Part 1, `i` runs through `0, 1, 2, 3` (4 passes). On pass `i=0`: `x = 2.5`, `j = 1`. On pass `i=1`: `x = 5.0`, `j = -1`. On pass `i=2`: `x = 7.5`, `j = 1`. On pass `i=3`: `x = 10.0`, `j = -1`. After pass `i=3`, expression 11 increments `i` to `4`, condition 7 (`4 <= 3`) fails, and line 12 prints `i = 4`."
            },
            {
               "say": "In Part 2, `A[0..4]` is declared without an initializer list, so all 5 slots start as `G` (Garbage). Pass 1 (`x=1.5 < 35`): `i=1`, `x = 4.0`, `1%2==0` is false (`A[1]` stays `G`). Pass 2 (`x=4.0 < 35`): `i=2`, `x = 9.0`, `2%2==0` is true (`A[2] = int(9.0) = 9`). Pass 3 (`x=9.0 < 35`): `i=3`, `x = 19.0` (`A[3]` stays `G`). Pass 4 (`x=19.0 < 35`): `i=4`, `x = 39.0`, `4%2==0` is true (`A[4] = 39`)."
            },
            {
               "say": "When the final loop prints `A[0]` through `A[4]`, only `A[2] = 9` and `A[4] = 39` were assigned\u2014so the output is `G G 9 G 39`!"
            }
         ],
         "answer": "Part 1 prints: 1 2.5 / -1 5 / 1 7.5 / -1 10 / i = 4. Part 2 prints: G G 9 G 39."
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "concept",
            "q": "In Week 4 Lecture 2 Part 2 above, why does `cout << A[i]` print `G G 9 G 39`?",
            "opts": [
               "Because `int A[5];` is uninitialized and `if(i % 2 == 0)` only assigns `A[2]` and `A[4]`",
               "Because `A[0]` is automatically `0` in C++",
               "Because `while(x < 35)` never reaches `i = 4`",
               "Because `A` is a `double` array"
            ],
            "ans": "a",
            "why": "Local arrays without `{0}` contain garbage (`G`) in every element that is not explicitly written before being read."
         },
         {
            "type": "mc",
            "badge": "concept",
            "q": "In Quiz 1 (Tuesday), you print 11 equally spaced values from `x = 1.0` to `x = 3.0` (`dx = 0.2`) using `for(x = 1.0; x <= 3.0 + 1.0e-5; x += dx)`. Why is `+ 1.0e-5` added to the upper bound?",
            "opts": [
               "To prevent binary floating-point roundoff (e.g., `x = 3.0000000000000004`) from skipping the 11th row `x = 3.0`",
               "To print 12 rows instead of 11",
               "Because `sin(x)` is undefined at `3.0`",
               "To convert `x` from `float` to `int`"
            ],
            "ans": "a",
            "why": "0.2 has no exact binary fraction; adding `0.2` ten times slightly exceeds `3.0`, so `x <= 3.0` can fail on the final step without `+ 1.0e-5`."
         },
         {
            "type": "tf",
            "badge": "concept",
            "q": "For an `unsigned long int i`, when `i` reaches its maximum possible value, `(i + 1) == 0` evaluates to true.",
            "ans": true,
            "why": "Unsigned integers wrap around modulo $2^N$, so `MAX + 1` rolls over to `0`."
         }
      ]
   }
},
{
   "id": "L-arr-errors",
   "topic": "arr-errors",
   "name": "6 Ways to Initialize 1D/2D Arrays & 8 Compile-Time vs. Run-Time Errors",
   "calc": null,
   "tex": "\\text{double } B[2][3] = \\{0.0\\}; \\quad \\text{Compile-Time vs. Run-Time}",
   "meaning": "6 valid array initialization patterns and distinguishing compile-time syntax errors (non-const dimensions, missing column bounds, array assignment B=A) from run-time errors (out-of-bounds, stack overflow, uninitialized garbage).",
   "steps": [
      "Choose array initialization: brace list, {0}, formula loop, cin, or ifstream.",
      "Always specify the column dimension in 2D array declarations.",
      "Use const int for compile-time fixed dimensions.",
      "Copy arrays element-by-element with nested loops; never B = A."
   ],
   "traps": [
      "Writing B = A; array names decay to constant pointers and cannot be assigned.",
      "Omitting the column size in a 2D array: double B[2][] is a compile error."
   ],
   "seen": [],
   "lec": [],
   "guide": "Part 5",
   "cal": "Week 7 In-Person Lecture 1 & Array Exercise Part 1",
   "learn": {
      "idea": "Week 7 Lecture 1 and the Array Part 1 Exercise test two core skills: (1) knowing all 6 valid ways to populate a 1-D or 2-D array, and (2) distinguishing **compile-time errors** (compiler stops immediately) from **run-time errors** (program compiles and runs, but crashes or outputs garbage). Remember: C++ never checks array subscript bounds at compile time!",
      "when": [
         "Identifying whether a buggy array snippet fails at compile time or run time",
         "Fixing broken 1-D and 2-D array declarations, initializations, and copies",
         "Choosing between `{0.0}`, loop formulas, `cin`, and `ifstream` to initialize arrays"
      ],
      "example": {
         "title": "Week 7 Lecture 1 \u2014 Array Exercise Part 1 (Parts a\u2013h): Diagnose & Fix All 8 Errors",
         "given": "8 buggy 2-D array code fragments (a) through (h) from the in-person exercise",
         "find": "Classify each as Compile-Time or Run-Time, explain why, and write the exact C++ fix",
         "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // a) FIX: Initialize array to 0 so reading A1[1][1] doesn't print garbage (Run-time)\n    int A1[2][3] = { 0 };\n    cout << \"\\n\" << A1[1][1];\n\n    // b) FIX: Reduce dimension from 100000000 to <= 10000 to prevent stack crash (Run-time)\n    int A2[1000][3] = { 0 };\n\n    // c) FIX: Use double instead of int to store real matrix values (Run-time truncation)\n    double A3[2][3] = { 0.0 };\n\n    // d) FIX: Make n and m const so A4[n][m] has compile-time constant bounds (Compile-time)\n    const int n = 2, m = 3;\n    int A4[n][m] = { 0 };\n\n    // e) FIX: Provide constant row & column sizes when no brace list is given (Compile-time)\n    int A5[10][10], B5[3][10], C5[10][3];\n\n    // f) FIX: Keep row in 0..1, col in 0..2, and initialize k=0 (Run-time out-of-bounds)\n    int A6[2][3] = { 0 }, i = 1, k = 0;\n    cout << \"\\n\" << A6[i][i];\n    A6[0][i] = 1; A6[i][2] = 3; A6[1][k] = 7;\n\n    // g) & h) FIX: Cannot use A7 = {...} or B8 = A8 after declaration (Compile-time)\n    // Must copy element-by-element using nested for loops:\n    int A8[2][3] = { 1, 2, 3, 4, 5, 6 }, B8[2][3];\n    for (int r = 0; r < 2; r++)\n        for (int c = 0; c < 3; c++)\n            B8[r][c] = A8[r][c];\n    return 0;\n}",
         "steps": [
            {
               "say": "**Compile-time errors (d, e, g, h)**: `(d)` non-const variable dimensions `int A4[n][m]`; `(e)` empty dimensions `int A5[][]`, `B5[3][]`, `C5[][3]` without an initializer list; `(g)` assigning a brace list `A7 = {1,2,3,4,5,6}` after declaration; `(h)` whole-array assignment `B8 = A8`."
            },
            {
               "say": "**Run-time errors (a, b, c, f)**: `(a)` reading uninitialized `A1[1][1]` prints garbage; `(b)` `int A2[100000000][3]` overflows the program stack and crashes at startup; `(c)` storing a real matrix in `int A3[2][3]` silently chops off decimals; `(f)` `A6[i+1][i+1]` (`A6[2][2]`), `A6[-1][i]`, `A6[i][3]`, and uninitialized `A6[1][k]` access memory outside `0..1` \u00d7 `0..2`."
            },
            {
               "say": "Always remember: in C++, the array name by itself (`A8`) decays to a constant memory address, so it can **never** appear on the left-hand side of `=`!"
            }
         ],
         "answer": "Compile-time: (d), (e), (g), (h). Run-time: (a), (b), (c), (f)."
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "concept",
            "q": "Which of the following 2-D array declarations causes a **compile-time** error?",
            "opts": [
               "double B[][3] = { 1, 2, 3, 4, 5, 6 };",
               "double B[2][] = { 1, 2, 3, 4, 5, 6 };",
               "double B[2][3] = { 0.0 };",
               "const int r = 2, c = 3; double B[r][c];"
            ],
            "ans": "b",
            "why": "In C++, the column size (second dimension) must ALWAYS be specified so the compiler knows how many elements sit in each row in memory."
         },
         {
            "type": "mc",
            "badge": "concept",
            "q": "What kind of error is `int A[2][3]; int i = 1; A[i][3] = 5;`?",
            "opts": [
               "Run-time error (column index 3 is out of bounds for valid columns 0, 1, 2)",
               "Compile-time syntax error",
               "Linker error",
               "No error; C++ automatically resizes `A` to 4 columns"
            ],
            "ans": "a",
            "why": "C++ does not check array bounds at compile time. Writing to column index 3 (the 4th column of a 3-column row) overwrites adjacent stack memory at run time."
         },
         {
            "type": "tf",
            "badge": "concept",
            "q": "If `int A[5] = {1,2,3,4,5};` and `int B[5];`, you can copy `A` into `B` by writing `B = A;`.",
            "ans": false,
            "why": "`B = A;` is a compile-time error. You must copy element-by-element with a `for` loop: `for(i=0; i<5; i++) B[i] = A[i];`."
         }
      ]
   }
},
{
   "id": "L-file-io",
   "topic": "file-io",
   "name": "Array File I/O with <fstream>: The 5-Step ifstream & ofstream Recipe",
   "calc": null,
   "tex": "\\text{ifstream fin; fin.open(\"A.txt\"); if (!fin) exit(1); fin } \\gg A[i]; \\text{ fin.close();}",
   "meaning": "The 5-step recipe for reading and writing data files with ifstream and ofstream: include fstream, declare stream, open file, check (!stream), read/write in loop, close stream.",
   "steps": [
      "Step 0: #include <fstream> and #include <cstdlib>.",
      "Step 1: Declare ifstream fin; or ofstream fout;.",
      "Step 2: fin.open(\"filename.txt\");.",
      "Step 3: Check if (!fin) { cout << \"error\"; exit(1); }.",
      "Step 4: Read element count n first, verify n <= NMAX, then loop fin >> A[i].",
      "Step 5: fin.close(); so the stream object can be reused."
   ],
   "traps": [
      "Reading past array bounds when file count n exceeds declared capacity NMAX.",
      "Forgetting to call fin.close() before attempting to open a second file with fin."
   ],
   "seen": [],
   "lec": [],
   "guide": "Part 5",
   "cal": "Week 7 In-Person Lecture 2",
   "learn": {
      "idea": "Once you open a file stream in C++, reading from `fin >> x` is 100% identical to reading from the keyboard with `cin >> x`, and writing to `fout << x` is 100% identical to printing to the screen with `cout << x`! Follow Dr. Gordon's 5-step recipe every time: (0) `#include <fstream>`, (1) declare `ifstream fin;` / `ofstream fout;`, (2) `.open(\"filename.txt\")`, (3) check `if (!fin) exit(1);`, (4) read/write with `>>` or `<<` inside a `for` loop (checking `if (n > NMAX)` first when the file starts with a count `n`), and (5) `.close()`.",
      "when": [
         "Reading 1-D or 2-D arrays from `.txt` data files (`A.txt`, `B.txt`)",
         "Saving computed arrays or matrices to an output file (`C.txt`)",
         "Reusing a single `ifstream fin` variable to read multiple files sequentially"
      ],
      "example": {
         "title": "Week 7 Lecture 2 & Exercise Part 2 Q1: Read Two 3\u00d73 Matrices from A.txt and B.txt",
         "given": "`A.txt` and `B.txt` each contain 9 numbers (3 rows \u00d7 3 columns) without a leading size `n`",
         "find": "Read both 3\u00d73 matrices using 1-based indexing `A[1..3][1..3]`, compute the transpose $A^T$, and compute the column sums of $B$",
         "code": "#include <iostream>\n#include <fstream>\n#include <cstdlib>\nusing namespace std;\n\nint main() {\n    // Allocate 4x4 so we can use 1-based math indices 1..3 directly!\n    double A[4][4], B[4][4], At[4][4], S[4];\n    int i, j;\n    ifstream fin;\n\n    fin.open(\"A.txt\");\n    if (!fin) { cout << \"\\ninput file open error (A.txt)\"; exit(1); }\n    for (i = 1; i <= 3; i++)\n        for (j = 1; j <= 3; j++)\n            fin >> A[i][j];\n    fin.close();\n\n    fin.open(\"B.txt\");\n    if (!fin) { cout << \"\\ninput file open error (B.txt)\"; exit(1); }\n    for (i = 1; i <= 3; i++)\n        for (j = 1; j <= 3; j++)\n            fin >> B[i][j];\n    fin.close();\n\n    // Transpose: At[i][j] = A[j][i]\n    for (i = 1; i <= 3; i++)\n        for (j = 1; j <= 3; j++)\n            At[i][j] = A[j][i];\n\n    // Sum of each column j of B (spreadsheet column totals)\n    for (j = 1; j <= 3; j++) S[j] = 0.0;\n    for (i = 1; i <= 3; i++)\n        for (j = 1; j <= 3; j++)\n            S[j] += B[i][j];\n\n    return 0;\n}",
         "steps": [
            {
               "say": "Declare `double A[4][4], B[4][4];` (size `3+1` by `3+1`) so mathematical indices `1..3` map directly to C++ indices `1..3` without off-by-one confusion."
            },
            {
               "say": "Open `\"A.txt\"`, check `if (!fin)`, read all $3 \\times 3 = 9$ numbers with nested `i` and `j` loops (`fin >> A[i][j];`), and call `fin.close()` so `fin` can immediately open `\"B.txt\"`."
            },
            {
               "say": "Form the transpose via `At[i][j] = A[j][i];` and initialize `S[j] = 0.0` before accumulating each column sum `S[j] += B[i][j];`."
            }
         ],
         "answer": "See the complete 5-step `<fstream>` implementation above."
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "concept",
            "q": "What is the most common reason `if (!fin)` evaluates to `true` when opening an input file `fin.open(\"A.txt\");`?",
            "opts": [
               "`A.txt` is not in the program's working/project directory (or its name is misspelled)",
               "`A.txt` contains negative numbers",
               "`#include <cmath>` was omitted",
               "The array `A` was not initialized to `{0.0}`"
            ],
            "ans": "a",
            "why": "An input file stream fails to open if the file does not exist in the working directory or is locked by another process."
         },
         {
            "type": "mc",
            "badge": "concept",
            "q": "When `A.txt` starts with an integer `n` (the number of elements) followed by `n` doubles, why must you check `if (n > NMAX) exit(1);` BEFORE the `for(i=0; i<n; i++) fin >> A[i];` loop?",
            "opts": [
               "To prevent a run-time buffer overflow if the file specifies more elements than the declared capacity `A[NMAX]`",
               "Because `fin >> n` closes the file automatically",
               "Because `NMAX` is a floating-point variable",
               "To sort the array in ascending order"
            ],
            "ans": "a",
            "why": "If `A` has size `NMAX = 200` and the file says `n = 500`, reading 500 elements into `A[200]` writes past the end of the array and corrupts stack memory."
         },
         {
            "type": "tf",
            "badge": "concept",
            "q": "After calling `fin.close();` on `A.txt`, you can reuse the exact same `ifstream fin;` variable to open `B.txt` with `fin.open(\"B.txt\");`.",
            "ans": true,
            "why": "Closing the stream disconnects it from the first file so the same `ifstream` object can open another file."
         }
      ]
   }
},
{
   "id": "L-matrix-alg",
   "topic": "matrix-alg",
   "name": "2-D Matrix Algebra in C++: Multiplication, Column Norms & Column Swapping",
   "calc": null,
   "tex": "D_{ij} = \\sum_{k=1}^m A_{ik} B_{kj}, \\quad \\|\\mathbf{v}_j\\| = \\sqrt{\\sum_{i=1}^n A_{ij}^2}",
   "meaning": "1-based 2D matrix algorithms in C++: addition, triple-nested-loop matrix multiplication, Euclidean column norms, and in-place column swapping using temporary backups.",
   "steps": [
      "Allocate [NMAX+1][NMAX+1] for 1-based indexing matching math notation.",
      "Matrix addition: C[i][j] = A[i][j] + B[i][j] with double loop.",
      "Matrix multiplication: triple nested loop (i, j, k) with sum = 0.0 reset before k loop.",
      "Column swap: backup = A[i][c1]; A[i][c1] = A[i][c2]; A[i][c2] = backup; inside a row loop."
   ],
   "traps": [
      "Forgetting to reset sum = 0.0 inside the (i, j) loop before the k inner product loop.",
      "Overwriting a column without a backup variable: A[i][2] = A[i][3]; A[i][3] = A[i][2]; destroys data."
   ],
   "seen": [],
   "lec": [],
   "guide": "Part 5",
   "cal": "Week 7 In-Person Lecture 2 & Arrays Part 2 Exercise",
   "learn": {
      "idea": "2-D array algorithms translate linear algebra directly into nested `for` loops. Use 1-based indexing (`A[1..n][1..m]` inside an array declared as `A[NMAX+1][NMAX+1]`) whenever a problem gives mathematical formulas like $D_{ij} = \\sum_{k=1}^m A_{ik} B_{kj}$. For matrix multiplication, you need three nested loops (`i` for row of $A$, `j` for column of $B$, `k` for the dot-product summation). For single-column operations (like the norm of column 3 or swapping columns 2 and 3), only a single loop over the row index `i` is needed!",
      "when": [
         "Multiplying two matrices $D = A B$ or adding $C = A + B$",
         "Computing the Euclidean norm $\\|\\mathbf{a}_{\\cdot,3}\\|_2 = \\sqrt{\\sum_{i=1}^n A_{i,3}^2}$ of a specific matrix column",
         "Swapping two rows or two columns of a 2-D matrix in place"
      ],
      "example": {
         "title": "Arrays Part 2 Exercise Q2 & Q3: Matrix Multiplication, Column Norm & Column Swap",
         "given": "A $3 \\times 3$ matrix $A$ initialized by $A_{ij} = i + 10(j - 1)$ and $B_{ij} = i - 0.1(j - 1)$ for $i, j \\in \\{1, 2, 3\\}$",
         "find": "Compute $D = AB$, find the Euclidean norm of column 3 of $A$, and swap columns 2 and 3 of $A$",
         "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    const int NMAX = 20;\n    int i, j, k, n = 3, m = 3, p = 3;\n    double A[NMAX+1][NMAX+1], B[NMAX+1][NMAX+1], D[NMAX+1][NMAX+1];\n    double sum, norm, backup;\n\n    // Initialize A and B (1-based indices 1..3)\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= m; j++) {\n            A[i][j] = i + 10.0 * (j - 1);\n            B[i][j] = i - 0.1  * (j - 1);\n        }\n    }\n\n    // Matrix multiplication D = A * B\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= p; j++) {\n            sum = 0.0;\n            for (k = 1; k <= m; k++) {\n                sum += A[i][k] * B[k][j];\n            }\n            D[i][j] = sum;\n        }\n    }\n\n    // Euclidean norm of 3rd column of A: sqrt(21^2 + 22^2 + 23^2) = sqrt(1454) = 38.1314\n    sum = 0.0;\n    for (i = 1; i <= n; i++) sum += pow(A[i][3], 2);\n    norm = sqrt(sum);\n    cout << \"\\nnorm of col 3 = \" << norm << \"\\n\";\n\n    // Swap columns 2 and 3 of A\n    for (i = 1; i <= n; i++) {\n        backup  = A[i][2];\n        A[i][2] = A[i][3];\n        A[i][3] = backup;\n    }\n    return 0;\n}",
         "steps": [
            {
               "say": "With $A_{ij} = i + 10(j-1)$, column 1 is $[1, 2, 3]^T$, column 2 is $[11, 12, 13]^T$, and column 3 is $[21, 22, 23]^T$."
            },
            {
               "say": "For $D = AB$, each entry $D_{ij}$ resets `sum = 0.0` and loops `k = 1..3` to accumulate `A[i][k] * B[k][j]`."
            },
            {
               "say": "For the norm of column 3, fix the column index at `3` and loop `i = 1..3`: $21^2 + 22^2 + 23^2 = 441 + 484 + 529 = 1454$, so $\\text{norm} = \\sqrt{1454} \\approx 38.1314$. Then swap `A[i][2]` and `A[i][3]` across each row `i = 1..3` using `backup`."
            }
         ],
         "answer": "norm of col 3 = 38.1314; after swap, col 2 is [21, 22, 23]^T and col 3 is [11, 12, 13]^T."
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "concept",
            "q": "In the triple-nested loop for matrix multiplication $D_{ij} = \\sum_{k=1}^m A_{ik} B_{kj}$, where MUST `sum = 0.0;` be placed?",
            "opts": [
               "Inside the `i` and `j` loops, immediately BEFORE `for (k = 1; k <= m; k++)`",
               "Once at the very top of `main()` before all three loops",
               "Inside the innermost `k` loop on every pass",
               "After `D[i][j] = sum;` at the end of `main()`"
            ],
            "ans": "a",
            "why": "Each entry `D[i][j]` is a fresh dot product of row `i` and column `j`, so `sum` must be zeroed right before the `k` loop begins."
         },
         {
            "type": "mc",
            "badge": "concept",
            "q": "Given $A_{ij} = i + 10(j - 1)$ for $1 \\le i, j \\le 3$, what is $\\sum_{i=1}^3 A_{i,3}^2$ (the squared norm of column 3)?",
            "opts": [
               "1454 (since $21^2 + 22^2 + 23^2 = 441 + 484 + 529$)",
               "14 (since $1^2 + 2^2 + 3^2 = 14$)",
               "434 (since $11^2 + 12^2 + 13^2 = 434$)",
               "66 (since $21 + 22 + 23 = 66$)"
            ],
            "ans": "a",
            "why": "For $j = 3$, $A_{1,3} = 21$, $A_{2,3} = 22$, $A_{3,3} = 23$, and $21^2 + 22^2 + 23^2 = 1454$."
         },
         {
            "type": "tf",
            "badge": "concept",
            "q": "To compute the transpose $A^T$ of a $3 \\times 3$ matrix $A$ into a separate matrix `At`, you write `At[i][j] = A[j][i];` inside nested `i` and `j` loops.",
            "ans": true,
            "why": "Transposing swaps row and column indices: row `i`, column `j` of $A^T$ equals row `j`, column `i` of $A$."
         }
      ]
   }
}
 ],
 "videoStops": [
  {
   "topic": "types",
   "title": "Types & sizes",
   "why": "Type questions appear as warm-ups and inside every output trace.",
   "videos": [
    {
     "id": "QANQHxx9I8Y",
     "title": "C++ variables & data types (#3)",
     "channel": "Bro Code",
     "len": "15:21",
     "role": "learn",
     "watch": [
      "int vs double vs char vs bool, and what each can hold."
     ]
    }
   ],
   "after": "Do the Types lesson practice.",
   "gate": [],
   "formulas": [
    "L-types"
   ]
  },
  {
   "topic": "cast",
   "title": "Casting",
   "why": "Where the cast sits decides the answer.",
   "videos": [
    {
     "id": "Fj9HjbqHto8",
     "title": "What is C++ type conversion?",
     "channel": "Bro Code",
     "len": "3:47",
     "role": "learn",
     "watch": [
      "Implicit vs explicit conversion; watch the int → double examples."
     ]
    }
   ],
   "after": "Casting lesson practice.",
   "gate": [],
   "formulas": [
    "L-cast"
   ]
  },
  {
   "topic": "intdiv",
   "title": "Integer division & %",
   "why": "A hidden integer division sat inside questions on W24, F23 and the professor’s review.",
   "videos": [
    {
     "id": "dWSJqvFE7Cg",
     "title": "Integer division and remainders using the modulus (%) operator",
     "channel": "Engineer4Free",
     "len": "4:47",
     "role": "learn",
     "watch": [
      "Write each example’s answer before he shows it."
     ]
    }
   ],
   "after": "Integer division lesson, then W24 Q1a.",
   "gate": [
    "M24-1a",
    "R21-2c"
   ],
   "formulas": [
    "L-intdiv"
   ]
  },
  {
   "topic": "ops",
   "title": "++/-- and precedence",
   "why": "Accumulator traces (W24 Q3c) need these rules.",
   "videos": [
    {
     "id": "2Y-OZaxK4d0",
     "title": "C++ Programming - Pre Increment and Post Increment Operators Example",
     "channel": "SavvyNik",
     "len": "5:26",
     "role": "learn",
     "watch": [
      "i++ vs ++i inside an expression."
     ]
    },
    {
     "id": "i2i8YkFyLVs",
     "title": "Precedence and Associativity of Arithmetic Operators",
     "channel": "Neso Academy",
     "len": "9:05",
     "role": "extra",
     "watch": [
      "Left-to-right for * / %."
     ]
    }
   ],
   "after": "Operators lesson, then W24 Q3c.",
   "gate": [
    "M24-3c"
   ],
   "formulas": [
    "L-ops"
   ]
  },
  {
   "topic": "math",
   "title": "cmath",
   "why": "W24 opened with pow(2.75, 2).",
   "videos": [
    {
     "id": "LXq3OhajeeU",
     "title": "Useful math related functions in C++",
     "channel": "Bro Code",
     "len": "3:28",
     "role": "learn",
     "watch": [
      "pow, sqrt, abs, round, ceil, floor."
     ]
    }
   ],
   "after": "cmath lesson.",
   "gate": [
    "M24-1b"
   ],
   "formulas": [
    "L-math"
   ]
  },
  {
   "topic": "ifelse",
   "title": "if / else-if ladders",
   "why": "The professor’s favourite: on F23, and twice in Review #1.",
   "videos": [
    {
     "id": "ljEZlKU5XT4",
     "title": "C++ if statements (#6)",
     "channel": "Bro Code",
     "len": "14:05",
     "role": "learn",
     "watch": [
      "Only one branch of a chain runs."
     ]
    }
   ],
   "after": "Ladder lesson, then the three ladder questions.",
   "gate": [
    "F23-2b",
    "R21-2a",
    "R21-2c"
   ],
   "formulas": [
    "L-ifelse"
   ]
  },
  {
   "topic": "logic",
   "title": "Short-circuit evaluation",
   "why": "W24 Q3a turned on whether --count runs.",
   "videos": [
    {
     "id": "MHASR-lV1rM",
     "title": "Learn C++ Programming | Short Circuit Evaluation",
     "channel": "Shmeowlex",
     "len": "3:03",
     "role": "learn",
     "watch": [
      "When the right side of && / || is skipped."
     ]
    }
   ],
   "after": "Logic lesson.",
   "gate": [
    "M24-3a"
   ],
   "formulas": [
    "L-logic"
   ]
  },
  {
   "topic": "for",
   "title": "for loops",
   "why": "Every output question has a loop.",
   "videos": [
    {
     "id": "gP22X_ykkxI",
     "title": "C++ for loops explained",
     "channel": "Bro Code",
     "len": "3:39",
     "role": "learn",
     "watch": [
      "init → test → body → update."
     ]
    }
   ],
   "after": "for-loop lesson, then W24 Q2b.",
   "gate": [
    "M24-2b"
   ],
   "formulas": [
    "L-for"
   ]
  },
  {
   "topic": "while",
   "title": "while loops",
   "why": "Digit loops and while(1) with break (W24, F23).",
   "videos": [
    {
     "id": "3xcXse7DK5s",
     "title": "C++ while loops explained",
     "channel": "Bro Code",
     "len": "3:19",
     "role": "learn",
     "watch": [
      "When to use while instead of for."
     ]
    }
   ],
   "after": "while lesson, then W24 Q2a and F23 Q2a.",
   "gate": [
    "M24-2a",
    "F23-2a"
   ],
   "formulas": [
    "L-while"
   ]
  },
  {
   "topic": "breakcont",
   "title": "break & continue",
   "why": "Two W24 questions and F23 Q2a.",
   "videos": [
    {
     "id": "D2aQITtBhMM",
     "title": "C++ break & continue explained",
     "channel": "Bro Code",
     "len": "1:42",
     "role": "learn",
     "watch": [
      "What still runs after continue."
     ]
    }
   ],
   "after": "break/continue lesson.",
   "gate": [
    "M24-1c",
    "M24-3b"
   ],
   "formulas": [
    "L-break"
   ]
  },
  {
   "topic": "nested",
   "title": "Nested loops",
   "why": "W24 Q2c.",
   "videos": [
    {
     "id": "TdtFtPHeyZE",
     "title": "C++ nested loops explained",
     "channel": "Bro Code",
     "len": "4:17",
     "role": "learn",
     "watch": [
      "The inner loop restarts every outer pass."
     ]
    }
   ],
   "after": "Nested-loop lesson.",
   "gate": [
    "M24-2c"
   ],
   "formulas": [
    "L-nested"
   ]
  },
  {
   "topic": "arr1",
   "title": "Arrays",
   "why": "Quiz 2, Review #1 Q1 and F23 all use arrays.",
   "videos": [
    {
     "id": "QFrJQq6Iox8",
     "title": "C++ arrays explained",
     "channel": "Bro Code",
     "len": "5:29",
     "role": "learn",
     "watch": [
      "Indices from 0, size n."
     ]
    }
   ],
   "after": "Array lesson.",
   "gate": [
    "F23-2b"
   ],
   "formulas": [
    "L-arr"
   ]
  },
  {
   "topic": "arr2",
   "title": "2-D arrays",
   "why": "Review #1 Q2a.",
   "videos": [
    {
     "id": "fINt-nzR-o8",
     "title": "C++ multidimensional arrays explained",
     "channel": "Bro Code",
     "len": "7:41",
     "role": "learn",
     "watch": [
      "Rows × columns with nested loops."
     ]
    }
   ],
   "after": "2-D array lesson.",
   "gate": [
    "R21-2a"
   ],
   "formulas": [
    "L-arr2"
   ]
  },
  {
   "topic": "cstr",
   "title": "C-strings",
   "why": "Review #1 Q2b: the missing \\0.",
   "videos": [
    {
     "id": "teoPD81dD2Q",
     "title": "C++ tutorial 17 - C-style strings",
     "channel": "thecplusplusguy",
     "len": "12:18",
     "role": "learn",
     "watch": [
      "Why every C-string ends with \\0."
     ]
    }
   ],
   "after": "C-string lesson.",
   "gate": [
    "R21-2b"
   ],
   "formulas": [
    "L-cstr"
   ]
  },
  {
   "topic": "write",
   "title": "Writing programs",
   "why": "Review #1 Q1 (twice) and Quiz 2.",
   "videos": [
    {
     "id": "TdtFtPHeyZE",
     "title": "C++ nested loops explained",
     "channel": "Bro Code",
     "len": "4:17",
     "role": "extra",
     "watch": [
      "Revisit loops before writing the menu program."
     ]
    }
   ],
   "after": "Write Review #1 Q1 from a blank page, then compare.",
   "gate": [
    "R21-1",
    "Q2-1"
   ],
   "formulas": [
    "L-write"
   ]
  }
 ],
 "plan": {
  "intro": "The midterm (33 % of your grade) is almost entirely “what does this print?” plus one program to write. The fastest way to get there: learn each rule from the teacher’s slides and the expanded guide, trace the compiler-checked practice in each topic’s Learn panel, then drill the past papers. The professor reuses his own Midterm Review word for word, so finish that first. The exact date isn’t on Moodle yet; this plan takes about 9 study days.",
  "phases": [
   {
    "title": "Types, casting & operators",
    "when": "Days 1–2",
    "goal": "Weeks 1–3: the rules that every trace depends on.",
    "steps": [
     {
      "id": "s1",
      "kind": "doc",
      "doc": "roadmap",
      "text": "Skim the C++ roadmap so you know the whole course map.",
      "minutes": 10
     },
     {
      "id": "s2",
      "kind": "doc",
      "doc": "vt1",
      "text": "Teacher slides: variable types 1 & 2.",
      "minutes": 30
     },
     {
      "id": "s3",
      "kind": "lesson",
      "lesson": "L-types",
      "text": "Lesson: types, sizes & ranges.",
      "minutes": 15
     },
     {
      "id": "s4",
      "kind": "lesson",
      "lesson": "L-cast",
      "text": "Lesson: casting.",
      "minutes": 15
     },
     {
      "id": "s5",
      "kind": "doc",
      "doc": "g3",
      "text": "Part 3 guide: expressions, operators, cmath.",
      "minutes": 40
     },
     {
      "id": "s6",
      "kind": "lesson",
      "lesson": "L-intdiv",
      "text": "Lesson: integer division & % (the most-tested trap).",
      "minutes": 20
     },
     {
      "id": "s7",
      "kind": "lesson",
      "lesson": "L-ops",
      "text": "Lesson: ++/--, compound assignment, precedence.",
      "minutes": 20
     },
     {
      "id": "s8",
      "kind": "lesson",
      "lesson": "L-math",
      "text": "Lesson: cmath functions.",
      "minutes": 10
     },
     {
      "id": "s9",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "expr",
       "mode": "all"
      },
      "text": "Drill: Expressions & operators past-paper questions.",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Control statements",
    "when": "Days 3–5",
    "goal": "Weeks 4–5: ladders, loops, break/continue. This is most of the paper.",
    "steps": [
     {
      "id": "s10",
      "kind": "doc",
      "doc": "cs1",
      "text": "Teacher slides: control statements 1 (if, logical operators).",
      "minutes": 30
     },
     {
      "id": "s11",
      "kind": "lesson",
      "lesson": "L-ifelse",
      "text": "Lesson: if / else-if ladders.",
      "minutes": 20
     },
     {
      "id": "s12",
      "kind": "lesson",
      "lesson": "L-logic",
      "text": "Lesson: short-circuit evaluation.",
      "minutes": 15
     },
     {
      "id": "s13",
      "kind": "doc",
      "doc": "cs2",
      "text": "Teacher slides: control statements 2 (loops).",
      "minutes": 30
     },
     {
      "id": "s14",
      "kind": "lesson",
      "lesson": "L-for",
      "text": "Lesson: for loops & counting passes.",
      "minutes": 15
     },
     {
      "id": "s15",
      "kind": "lesson",
      "lesson": "L-while",
      "text": "Lesson: while / do-while & digit loops.",
      "minutes": 15
     },
     {
      "id": "s16",
      "kind": "doc",
      "doc": "cs3",
      "text": "Teacher slides: control statements 3.",
      "minutes": 25
     },
     {
      "id": "s17",
      "kind": "lesson",
      "lesson": "L-break",
      "text": "Lesson: break & continue.",
      "minutes": 15
     },
     {
      "id": "s18",
      "kind": "lesson",
      "lesson": "L-nested",
      "text": "Lesson: nested loops.",
      "minutes": 15
     },
     {
      "id": "s19",
      "kind": "doc",
      "doc": "trace",
      "text": "Trace manual: practise the trace-table method on two programs.",
      "minutes": 30
     },
     {
      "id": "s20",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "control",
       "mode": "all"
      },
      "text": "Drill: Control statements past-paper questions.",
      "minutes": 25
     }
    ]
   },
   {
    "title": "Arrays, C-strings & writing programs",
    "when": "Days 6–7",
    "goal": "Weeks 6–7 material that showed up on F23, the review and Quiz 2.",
    "steps": [
     {
      "id": "s21",
      "kind": "doc",
      "doc": "mini6",
      "text": "Mini-course Lesson 6: arrays.",
      "minutes": 30
     },
     {
      "id": "s22",
      "kind": "lesson",
      "lesson": "L-arr",
      "text": "Lesson: 1-D arrays.",
      "minutes": 20
     },
     {
      "id": "s23",
      "kind": "lesson",
      "lesson": "L-arr2",
      "text": "Lesson: 2-D arrays.",
      "minutes": 15
     },
     {
      "id": "s24",
      "kind": "lesson",
      "lesson": "L-cstr",
      "text": "Lesson: C-strings & the null terminator.",
      "minutes": 15
     },
     {
      "id": "s25",
      "kind": "lesson",
      "lesson": "L-write",
      "text": "Lesson: the 7-step program recipe. Write Review Q1 on paper.",
      "minutes": 30
     },
     {
      "id": "s26",
      "kind": "task",
      "text": "Type Quiz 2 (the menu program) into Code::Blocks from a blank file and run it.",
      "minutes": 45
     }
    ]
   },
   {
    "title": "Exam mode",
    "when": "Days 8–9",
    "goal": "Past papers under time, then only what you got wrong.",
    "steps": [
     {
      "id": "s27",
      "kind": "drill",
      "drill": {
       "scope": "repeats"
      },
      "text": "All repeated questions (the review is reused!).",
      "minutes": 25
     },
     {
      "id": "s28",
      "kind": "drill",
      "drill": {
       "scope": "mock"
      },
      "text": "Mock midterm.",
      "minutes": 40
     },
     {
      "id": "s29",
      "kind": "drill",
      "drill": {
       "scope": "missed"
      },
      "text": "Everything I missed, until it is empty.",
      "minutes": 30
     },
     {
      "id": "s30",
      "kind": "doc",
      "doc": "r2",
      "text": "One-page review sheets the night before.",
      "minutes": 15
     },
     {
      "id": "s31",
      "kind": "task",
      "text": "Exam habit: draw a trace table for every loop; never trace in your head.",
      "minutes": 1
     }
    ]
   }
  ]
 },
 "gordonExamsData": {
  "summary": "Complete archive of Dr. Brandon Gordon past midterms (Fall 2023, Fall 2022, Midterm Reviews & Quizzes), verified code solutions, step-by-step trace tables, topic frequency matrices, and empirical exam analytics.",
  "analytics": {
   "weightDistribution": {
    "tracingPercentage": 45,
    "codingPercentage": 55,
    "excludedPercentage": 0,
    "rulesSummary": [
     "Output Tracing Tables (40-50%): High-density loops and arrays. Answers inside the box only; no part marks for scratchpad tables.",
     "1D Array Algorithmic Programming (50-60%): Multi-part program-writing question with dynamic size validation (n <= 100).",
     "2D Arrays (0% on Midterm): Officially excluded from the midterm exam per Dr. Gordon notice; tested on final exams only.",
     "Simplified Table Approach: Only record variables that change on that line; do not waste time rewriting unchanged variables.",
     "Off-by-one & Memory: Uninitialized elements or out-of-bounds index reads must be identified as Garbage."
    ]
   },
   "topicFrequencies": [
    {
     "topic": "1D Array Traversal & Indexing",
     "frequency": 100,
     "frequencyLabel": "100% of Exams",
     "category": "Core Curriculum",
     "examOccurrences": [
      "Fall 2023 Q2(a)",
      "Fall 2023 Q2(b)",
      "Fall 2022 Q1",
      "Review 1",
      "Review 4"
     ],
     "description": "Reading arrays from keyboard, dot product accumulators, forward cyclic shifting, and element filtering.",
     "trapWarning": "Indices run 0 to n-1. Reading index n accesses out-of-bounds memory and yields garbage."
    },
    {
     "topic": "Sentinel Loops (while(1) + break)",
     "frequency": 100,
     "frequencyLabel": "100% of Exams",
     "category": "Control Flow",
     "examOccurrences": [
      "Fall 2023 Q2(a)",
      "Fall 2022 Q1(e)",
      "Review 4 Q2",
      "Quiz 2"
     ],
     "description": "Infinite while loops terminated by conditional break upon negative input or threshold crossing.",
     "trapWarning": "Statements placed before break execute even on the terminating iteration."
    },
    {
     "topic": "Integer Division & Truncation",
     "frequency": 100,
     "frequencyLabel": "100% of Exams",
     "category": "Arithmetic & Types",
     "examOccurrences": [
      "Fall 2023 Q2(b)",
      "Review 1 Q2(c)",
      "Winter 2024 M24-1a",
      "Review 4 Q1"
     ],
     "description": "Dividing integer by integer always truncates towards zero. Fractions like 1/(i+1) become 0 for all i >= 1.",
     "trapWarning": "7 + 1/(2+1) is 7 + 0 = 7, NOT 7.333."
    },
    {
     "topic": "Conditional Ladders (if / else-if)",
     "frequency": 95,
     "frequencyLabel": "95% of Exams",
     "category": "Control Flow",
     "examOccurrences": [
      "Fall 2023 Q2(b)",
      "Review 1 Q2(c)",
      "Quiz 2"
     ],
     "description": "Multi-branch decision structures with strict floating-point comparisons and fallback else clauses.",
     "trapWarning": "Order of branches matters: once a condition evaluates to true, subsequent branches are skipped."
    },
    {
     "topic": "Out-of-Bounds Memory & Garbage",
     "frequency": 85,
     "frequencyLabel": "85% of Exams",
     "category": "Memory & Arrays",
     "examOccurrences": [
      "Fall 2023 Q2(b)",
      "Review 1 Q2(b)"
     ],
     "description": "Printing array elements past the declared boundary (e.g. A[4] for an array of size 4).",
     "trapWarning": "Students must write \"Garbage\" or \"undefined\" in the answer box. Guessing a number loses all marks."
    },
    {
     "topic": "Array Concatenation & Auxiliary Arrays",
     "frequency": 80,
     "frequencyLabel": "80% of Exams",
     "category": "Algorithms",
     "examOccurrences": [
      "Fall 2022 Q1(d)",
      "Review 4 Q1"
     ],
     "description": "Combining two arrays into a third array C, or shifting elements forward using a temporary buffer.",
     "trapWarning": "In-place shifting overwrites elements before they can be copied. Always use an auxiliary array (A_shift)."
    },
    {
     "topic": "Dynamic Input Validation (n <= 100)",
     "frequency": 75,
     "frequencyLabel": "75% of Exams",
     "category": "I/O & Robustness",
     "examOccurrences": [
      "Fall 2022 Q1(a)",
      "Review 4 Q1",
      "Quiz 2"
     ],
     "description": "Prompting the user for array length n and looping with a while-check until 1 <= n <= 100.",
     "trapWarning": "Must loop until input is valid or terminate with an explicit error message."
    },
    {
     "topic": "Trigonometry & cmath Functions",
     "frequency": 60,
     "frequencyLabel": "60% of Exams",
     "category": "Math Library",
     "examOccurrences": [
      "Fall 2022 Q1(c)",
      "Review 4 Q1",
      "Quiz 1"
     ],
     "description": "Using pow(), sqrt(), and calculating PI dynamically via 4.0 * atan(1.0).",
     "trapWarning": "atan(1.0) returns pi/4 radians. Forgetting to multiply by 4 produces incorrect bounds."
    },
    {
     "topic": "2D Arrays & Matrices",
     "frequency": 0,
     "frequencyLabel": "0% on Midterm (Final Only)",
     "category": "Excluded Midterm Scope",
     "examOccurrences": [
      "Excluded per official Gordon Midterm Notice"
     ],
     "description": "Multi-dimensional arrays and matrix multiplication are tested strictly on the Final Exam.",
     "trapWarning": "Do not waste time practicing 2D array syntax for the midterm exam."
    }
   ],
   "topTraps": [
    {
     "trapName": "The Zero-Yield Fraction: 7 + 1/(i+1)",
     "severity": "CRITICAL",
     "exampleSnippet": "x = 7 + 1/(i+1); // when i = 2, 1/3 evaluates to 0 in integer division",
     "whatStudentsDoWrong": "Treat 1/3 as 0.333 and compute x = 7.333.",
     "correctBehavior": "Integer division truncates: 1/3 == 0, so x = 7 + 0 = 7.0.",
     "gordonQuote": "Pay careful attention to each line so you do not make an error on integer round down that propagates."
    },
    {
     "trapName": "Post-Loop Out-of-Bounds Print: A[i]",
     "severity": "CRITICAL",
     "exampleSnippet": "double A[4] = {-0.1, 0.11, 0.0, 0.2};\nfor(i=0; i<4; i++) { ... }\ncout << A[i]; // i is 4!",
     "whatStudentsDoWrong": "Assume it prints 0.2 (the last element) or 0.0.",
     "correctBehavior": "Index 4 is beyond the 4-element array (indices 0..3). The output is Garbage / undefined memory.",
     "gordonQuote": "The expected answer inside the box is Garbage."
    },
    {
     "trapName": "Data Corruption in Array In-Place Shifting",
     "severity": "HIGH",
     "exampleSnippet": "for(i=0; i<n-1; i++) A[i+1] = A[i]; // Corrupts A[1], A[2], etc.",
     "whatStudentsDoWrong": "Shift in place without a temporary variable, copying A[0] across the entire array.",
     "correctBehavior": "Store in a dedicated buffer: A_shift[i+1] = A[i]; A_shift[0] = A[n-1];",
     "gordonQuote": "The moral of the story is it is best to put the answer in a separate variable (A_shift)."
    },
    {
     "trapName": "while(1) Accumulator Pre-Break Execution",
     "severity": "HIGH",
     "exampleSnippet": "while(1) {\n    sum += B[i];\n    if(i > 2) break;\n    a += B[i+1];\n    i++;\n}",
     "whatStudentsDoWrong": "Assume the loop breaks before adding B[3] to sum.",
     "correctBehavior": "sum += B[3] executes BEFORE if(i > 2) break triggers, so B[3] is included in sum (sum = 29).",
     "gordonQuote": "Mark each line to keep track so you do not lose track of variables."
    },
    {
     "trapName": "Strict Mathematical Range Filtering",
     "severity": "MEDIUM",
     "exampleSnippet": "if( (B[i] > 0.0) && (B[i] < PI) ) count++;",
     "whatStudentsDoWrong": "Use <= or >= instead of strict inequalities, including boundary endpoints.",
     "correctBehavior": "Strict inequality excludes 0.0 and PI. Calculate PI as 4.0 * atan(1.0).",
     "gordonQuote": "Determines the number of elements of B that are strictly between 0 and PI."
    }
   ],
   "strategyTips": [
    "00:00 - 05:00: Scan the exam paper and identify output tracing vs code writing problems.",
    "05:00 - 40:00: Solve the output tracing problems using a clean variable-column table. Transfer clean values to the box.",
    "40:00 - 80:00: Implement the 5-part programming problem. Validate inputs, initialize accumulators to 0.0, and check sentinels.",
    "80:00 - 90:00: Review for off-by-one errors, semicolons, and integer division traps."
   ]
  },
  "papers": [
   {
    "id": "gordon-fall2026",
    "term": "Fall 2026",
    "title": "Fall 2026 Midterm Exam — Live Revision Paper (Section XX)",
    "officialWeight": "Official Midterm Exam Paper (100% Total Midterm Grade)",
    "format": "Question 1: 6-Part 1D Array Algorithmic Program · Question 2: Output Tracing Tables (Boxed Output)",
    "overview": "Official MIAE 215 Midterm Exam paper for Fall 2026. Consists of a comprehensive 6-part 1D array algorithmic programming problem (Question 1: keyboard input of 10 doubles, minimum search with non-zero initialization, mathematical interval verification [-7, 7] with immediate termination, repeated multi-variable index validation with De Morgan logic, in-place element swapping, and file persistence to A.txt via ofstream) and two multi-pass output tracing problems (Question 2: integer truncation vs floating-point division by zero yielding inf, and array left-shifting with uninitialized accumulator garbage memory).",
    "officialNotes": [
     "Time Allowed: 1 hour 15 minutes (75 minutes total).",
     "Permitted Aids: One-sided formula sheet and non-programmable faculty approved calculator.",
     "All answers must be written in the answer booklet. Indicate outputs by putting a box around your answers.",
     "You can assume the programs compile without errors and execute."
    ],
    "videoPlaceholder": {
     "title": "MIAE 215 Midterm Fall 2026 Walkthrough & Strategy Breakdown",
     "description": "Comprehensive line-by-line solution walkthrough of Questions 1 and 2, common exam traps, and past exam pattern correlations.",
     "duration": "Ready to attach video source"
    },
    "similarQuestionsAnalysis": [
     {
      "currentQuestionPart": "Q1(b) - Finding Minimum Element",
      "similarGordonExam": "Quiz 2 (Thursday) Part (c)",
      "whyItMatches": "Tests array traversal to find minimum. Crucial trap: initializing minimum to 0 fails for positive arrays. The correct pattern initializes min = A[0].",
      "coreLesson": "Never initialize min to 0.0 unless values are guaranteed negative. Always initialize to A[0]."
     },
     {
      "currentQuestionPart": "Q1(c) - Element Range Check & Immediate Stop",
      "similarGordonExam": "Fall 2022 Midterm Q1(c) & Q1(e)",
      "whyItMatches": "Validating array values against mathematical bounds (-7 to 7) and terminating program execution immediately upon violation.",
      "coreLesson": "Use boolean flag loop or exit(0) / return 0 immediately upon detecting out-of-range element."
     },
     {
      "currentQuestionPart": "Q1(d) - Repeated Input Validation for Two Indices",
      "similarGordonExam": "Fall 2022 Midterm Q1(a) & Quiz 2 (Wednesday) Part (h)",
      "whyItMatches": "Looping until input values meet strict range bounds (0 to 9) and inequality constraint (i1 != i2). Illustrates De Morgan loop continuation logic.",
      "coreLesson": "do { cin >> i1 >> i2; } while (i1 < 0 || i1 > 9 || i2 < 0 || i2 > 9 || i1 == i2);"
     },
     {
      "currentQuestionPart": "Q1(e) - In-Place Element Swapping",
      "similarGordonExam": "Fall 2022 Midterm Q1(d) & Review 4 Q1",
      "whyItMatches": "Exchanging two array elements. Gordon frequently tests array manipulation and shifting; swapping requires a temporary variable to prevent overwriting.",
      "coreLesson": "double temp = A[i1]; A[i1] = A[i2]; A[i2] = temp;"
     },
     {
      "currentQuestionPart": "Q1(f) - Writing Array Elements to File (A.txt)",
      "similarGordonExam": "Lab 5 & Midterm Review File I/O",
      "whyItMatches": "Persisting processed array results to disk using standard C++ file streams (#include <fstream>, ofstream).",
      "coreLesson": "ofstream fout(\"A.txt\"); for(int i=0; i<10; i++) fout << A[i] << \"\\n\"; fout.close();"
     },
     {
      "currentQuestionPart": "Q2(a) - Integer Division, Logical NOT (!i) & Division by Zero (inf)",
      "similarGordonExam": "Fall 2023 Midterm Q2(b) & Review 1 Q2(c)",
      "whyItMatches": "Tests integer division 1/(i+3) evaluating to 0 when i=0, !i evaluating to true only when i=0, and floating-point division by zero 7.0/(1-1) evaluating to inf (IEEE-754) without crashing.",
      "coreLesson": "Integer division truncates to 0; double division by 0.0 evaluates to inf; !0 is 1 (true) while !1 is 0 (false)."
     },
     {
      "currentQuestionPart": "Q2(b) - Array Left-Shift, Modulo & Uninitialized Accumulator",
      "similarGordonExam": "Fall 2023 Midterm Q2(a) & Fall 2023 Midterm Q2(b)",
      "whyItMatches": "B[i] = B[i+1] shifts array elements leftward; while loop terminates when B[4]=1 < 2; int x is uninitialized and holds garbage (G), a trademark Gordon trap.",
      "coreLesson": "Uninitialized local variables contain garbage memory; writing G or Garbage in the answer box earns full marks."
     }
    ],
    "fullProgramCode": "#include <iostream>\n#include <fstream>\n#include <cstdlib>\n\nusing namespace std;\n\nint main() {\n    // -------------------------------------------------------------\n    // Part (a): Input 1D array A of 10 doubles from the keyboard\n    // -------------------------------------------------------------\n    double A[10];\n    cout << \"Enter 10 doubles for array A:\\n\";\n    for (int i = 0; i < 10; i++) {\n        cin >> A[i];\n    }\n\n    // -------------------------------------------------------------\n    // Part (b): Determine minimum element A[i] and print it out\n    // TRAP ALERT: Initialize to A[0], NOT 0.0!\n    // -------------------------------------------------------------\n    double minVal = A[0];\n    int minIndex = 0;\n    for (int i = 1; i < 10; i++) {\n        if (A[i] < minVal) {\n            minVal = A[i];\n            minIndex = i;\n        }\n    }\n    cout << \"Minimum element: A[\" << minIndex << \"] = \" << minVal << \"\\n\";\n\n    // -------------------------------------------------------------\n    // Part (c): Check if all elements are between -7 and 7.\n    // If true, print message; otherwise stop the program immediately.\n    // -------------------------------------------------------------\n    bool allInRange = true;\n    for (int i = 0; i < 10; i++) {\n        if (A[i] < -7.0 || A[i] > 7.0) {\n            allInRange = false;\n            break;\n        }\n    }\n\n    if (allInRange) {\n        cout << \"elements of A are in range\\n\";\n    } else {\n        cout << \"Out of range element detected. Terminating program immediately.\\n\";\n        return 0; // Or exit(0);\n    }\n\n    // -------------------------------------------------------------\n    // Part (d): Repeatedly input two integers i1 and i2 until valid.\n    // Valid when 0 <= i1 <= 9, 0 <= i2 <= 9, and i1 != i2.\n    // -------------------------------------------------------------\n    int i1, i2;\n    do {\n        cout << \"Enter two distinct indices i1 and i2 (between 0 and 9): \";\n        cin >> i1 >> i2;\n    } while (i1 < 0 || i1 > 9 || i2 < 0 || i2 > 9 || i1 == i2);\n\n    // -------------------------------------------------------------\n    // Part (e): Swap elements i1 and i2 of A\n    // Must use temporary variable to prevent data loss!\n    // -------------------------------------------------------------\n    double temp = A[i1];\n    A[i1] = A[i2];\n    A[i2] = temp;\n    cout << \"Swapped A[\" << i1 << \"] and A[\" << i2 << \"].\\n\";\n\n    // -------------------------------------------------------------\n    // Part (f): Save the elements of A to a file called \\\"A.txt\\\"\n    // -------------------------------------------------------------\n    ofstream outFile(\"A.txt\");\n    if (!outFile) {\n        cerr << \"Error opening file A.txt for writing.\\n\";\n        return 1;\n    }\n\n    for (int i = 0; i < 10; i++) {\n        outFile << A[i] << \"\\n\";\n    }\n    outFile.close();\n    cout << \"Array elements successfully saved to A.txt.\\n\";\n\n    return 0;\n}",
    "questions": [
     {
      "id": "F26-Q1",
      "part": "Question 1",
      "title": "6-Part 1D Array Algorithmic Programming & File I/O",
      "points": "Complete C++ Program (Parts a to f)",
      "weight": "50% of Midterm Exam",
      "description": "Implement a comprehensive C++ program performing array input (10 doubles), robust minimum identification, mathematical interval validation [-7, 7] with early program termination, robust multi-variable input validation (distinct indices 0..9) using do-while loops, in-place element swapping, and disk persistence to A.txt via ofstream.",
      "codeSnippet": "// =========================================================================\n// QUESTION 1: FULL SOLUTION BREAKDOWN (PARTS a - f)\n// =========================================================================\n\n// a) Inputs a 1D array A of 10 doubles from keyboard\ndouble A[10];\nfor (int i = 0; i < 10; i++) {\n    cin >> A[i];\n}\n\n// b) Determines minimum element A[i] and prints it out\n// CRUCIAL TRAP: Initialize minVal = A[0], NEVER 0.0!\ndouble minVal = A[0];\nfor (int i = 1; i < 10; i++) {\n    if (A[i] < minVal) {\n        minVal = A[i];\n    }\n}\ncout << \"Minimum element: \" << minVal << \"\\n\";\n\n// c) Check if all elements of A are between -7 and 7\nbool allInRange = true;\nfor (int i = 0; i < 10; i++) {\n    if (A[i] < -7.0 || A[i] > 7.0) {\n        allInRange = false;\n        break;\n    }\n}\nif (allInRange) {\n    cout << \"elements of A are in range\\n\";\n} else {\n    return 0; // Terminate program immediately\n}\n\n// d) Repeatedly input i1 and i2 until 0 <= i1, i2 <= 9 and i1 != i2\nint i1, i2;\ndo {\n    cin >> i1 >> i2;\n} while (i1 < 0 || i1 > 9 || i2 < 0 || i2 > 9 || i1 == i2);\n\n// e) Swap elements i1 and i2 of A\ndouble temp = A[i1];\nA[i1] = A[i2];\nA[i2] = temp;\n\n// f) Save elements of A to a file called \"A.txt\"\nofstream outFile(\"A.txt\");\nfor (int i = 0; i < 10; i++) {\n    outFile << A[i] << \"\\n\";\n}\noutFile.close();",
      "conceptsTested": [
       "1D Array Keyboard Input",
       "Minimum Search Algorithm & Initializer Bounds",
       "Boolean Range Checking & Early Exit",
       "De Morgan Loop Guard Formulation",
       "In-Place Swapping with Temporary Storage",
       "File Output Streaming (ofstream)"
      ],
      "trapAlert": "Initializing minVal = 0 fails if all array numbers are positive (e.g. {2, 5, 8}). Initializing to A[0] is mathematically guaranteed to work. In part (d), ensure both indices are validated against bounds 0..9 AND that i1 != i2.",
      "solutionNotes": "Organize clearly in your answer booklet with comments corresponding to parts (a) through (f)."
     },
     {
      "id": "F26-Q2a",
      "part": "Question 2(a)",
      "title": "Conditional Ladder, Integer Truncation, !i Logic & Division by Zero",
      "points": "Output Tracing in Answer Booklet",
      "weight": "25% of Midterm Exam",
      "description": "Determine the exact console output produced by a for loop with array A[5] = {2, 3, 5, 7, 11}, testing branch conditions A[i] > 7, logical negation !i, integer division 1/(i+3), and floating-point division by zero 7.0/(i-1).",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    double A[5] = {2,3,5,7,11} , x = 0.0;\n    for(i=0;i<5;i++) {\n        if(A[i] > 7) {\n            x++;\n        } else if ( !i ) {\n            x = 1/(i+3);\n        } else {\n            x = 7.0/(i-1);\n        }\n        cout << \"\\n\" << x;\n    }\n    cout << \"\\n\" << i;\n    return 0;\n}",
      "expectedOutput": "0\ninf\n7\n3.5\n4.5\n5",
      "traceTable": {
       "headers": [
        "Pass",
        "i",
        "A[i]",
        "Condition Evaluated",
        "Branch Taken",
        "x Value",
        "Console Output"
       ],
       "rows": [
        [
         "Init",
         "uninit",
         "—",
         "—",
         "double A[5]={2,3,5,7,11}, x=0.0",
         0,
         "—"
        ],
        [
         "Pass 1",
         0,
         2,
         "A[0]>7 (F), !0 (T)",
         "else if (!i)",
         "1/(0+3) = 1/3 = 0 (int division)",
         "0"
        ],
        [
         "Pass 2",
         1,
         3,
         "A[1]>7 (F), !1 (F)",
         "else",
         "7.0/(1-1) = 7.0/0.0 = inf (IEEE 754)",
         "inf"
        ],
        [
         "Pass 3",
         2,
         5,
         "A[2]>7 (F), !2 (F)",
         "else",
         "7.0/(2-1) = 7.0/1.0 = 7.0",
         "7"
        ],
        [
         "Pass 4",
         3,
         7,
         "A[3]>7 (7>7 is FALSE)",
         "else",
         "7.0/(3-1) = 7.0/2.0 = 3.5",
         "3.5"
        ],
        [
         "Pass 5",
         4,
         11,
         "A[4]>7 (11>7 is TRUE)",
         "if (A[i] > 7)",
         "x++ -> 3.5 + 1.0 = 4.5",
         "4.5"
        ],
        [
         "Term.",
         5,
         "—",
         "5 < 5 is FALSE",
         "Loop Exits",
         4.5,
         "5 (post-loop cout << i)"
        ]
       ],
       "caption": "Detailed trace table verified against MinGW g++ compilation."
      },
      "conceptsTested": [
       "Array element addressing",
       "Logical NOT (!i is true only when i==0)",
       "Integer division truncation (1/3 == 0)",
       "Floating-point division by zero (7.0/0.0 == inf)",
       "Strict inequality (7 > 7 is false)",
       "Post-loop iterator persistence (i == 5)"
      ],
      "trapAlert": "Three major traps on this problem: (1) When i=0, 1/(0+3) is integer division 1/3 which yields 0, not 0.333! (2) When i=1, 7.0/(1-1) = 7.0/0.0 which yields inf in double (does not crash!). (3) When i=3, A[3] is 7, and 7 > 7 is false, so it takes the else branch!",
      "solutionNotes": "Box each number on its own line: 0, inf, 7, 3.5, 4.5, and 5."
     },
     {
      "id": "F26-Q2b",
      "part": "Question 2(b)",
      "title": "Array In-Place Left-Shift, Modulo & Uninitialized Accumulator Trap",
      "points": "Output Tracing in Answer Booklet",
      "weight": "25% of Midterm Exam",
      "description": "Trace a while loop that shifts array elements to the left (B[i] = B[i+1]), increments i, and accumulates B[i] into an uninitialized integer x. Evaluates modulo arithmetic 20 % 7 and examines post-loop array indexing.",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int B[] = {11,7,5,3,2,1}, i = 0, x, a = 20 % 7;\n\n    while( B[i] >= 2 ) {\n        B[i] = B[i+1];\n        i++;\n        x += B[i];\n    }\n\n    cout << \"\\n\" << B[2] << \" \" << B[3] << \" \" << i << \" \" << a << \" \" << x;\n    return 0;\n}",
      "expectedOutput": "3 2 5 6 G\n(or 3 2 5 6 18 if x is assumed 0)",
      "traceTable": {
       "headers": [
        "Pass",
        "i Before",
        "B[i] Tested",
        "Action B[i] = B[i+1]",
        "i After",
        "x Accumulator",
        "Array B State"
       ],
       "rows": [
        [
         "Init",
         0,
         "—",
         "—",
         0,
         "Garbage (uninitialized)",
         "{11, 7, 5, 3, 2, 1}"
        ],
        [
         "Pass 1",
         0,
         "B[0]=11 >= 2 (T)",
         "B[0] = B[1] (7)",
         1,
         "x + B[1] (7) = G + 7",
         "{7, 7, 5, 3, 2, 1}"
        ],
        [
         "Pass 2",
         1,
         "B[1]=7 >= 2 (T)",
         "B[1] = B[2] (5)",
         2,
         "x + B[2] (5) = G + 12",
         "{7, 5, 5, 3, 2, 1}"
        ],
        [
         "Pass 3",
         2,
         "B[2]=5 >= 2 (T)",
         "B[2] = B[3] (3)",
         3,
         "x + B[3] (3) = G + 15",
         "{7, 5, 3, 3, 2, 1}"
        ],
        [
         "Pass 4",
         3,
         "B[3]=3 >= 2 (T)",
         "B[3] = B[4] (2)",
         4,
         "x + B[4] (2) = G + 17",
         "{7, 5, 3, 2, 2, 1}"
        ],
        [
         "Pass 5",
         4,
         "B[4]=2 >= 2 (T)",
         "B[4] = B[5] (1)",
         5,
         "x + B[5] (1) = G + 18",
         "{7, 5, 3, 2, 1, 1}"
        ],
        [
         "Term.",
         5,
         "B[5]=1 >= 2 (F)",
         "Loop Terminates",
         5,
         "Final x = Garbage (or 18)",
         "{7, 5, 3, 2, 1, 1}"
        ]
       ],
       "caption": "Loop terminates on Pass 6 because B[5] is 1, which fails B[5] >= 2."
      },
      "conceptsTested": [
       "Array Left-Shifting (B[i] = B[i+1])",
       "Modulo Arithmetic (20 % 7 = 6)",
       "Loop Termination on Array Element Value",
       "Uninitialized Memory Accumulation Trap (Garbage)",
       "Post-Loop Array State Inspection"
      ],
      "trapAlert": "Crucial traps: (1) Notice x is declared as int x without an initializer (= 0). Therefore, x contains Garbage (undefined memory), and accumulating into x preserves garbage! Write \"Garbage\" (or \"G\") in the answer box. (2) Modulo: 20 % 7 = 6 (remainder when 20 is divided by 7). (3) Array shifting copies adjacent elements, so at termination B[2] is 3 and B[3] is 2.",
      "solutionNotes": "Boxed Answer: 3 2 5 6 G (write \"G\" or \"Garbage\" for x, or 18 if 0-initialization is assumed by grader)."
     }
    ]
   },
   {
    "id": "gordon-fall2023",
    "term": "Fall 2023",
    "title": "Fall 2023 Midterm Exam — Question 2 (Output Tracing Paper)",
    "officialWeight": "40% of Total Midterm Grade (14 Marks Total)",
    "format": "Output Tracing in Answer Booklet (Boxes Only)",
    "overview": "Dr. Gordon handed out this exact two-part output tracing question comprising 40% of the midterm exam. Part (a) tests a while(1) loop with array indexing and early break; Part (b) tests a conditional ladder with integer division and array boundary overflow.",
    "officialNotes": [
     "Answers must be placed inside the answer box to receive marks.",
     "No part marks are awarded for rough tables or scratchpad working.",
     "2D arrays will not appear on the midterm exam; 1D arrays will appear in both sections."
    ],
    "questions": [
     {
      "id": "F23-Q2a",
      "part": "Part (a)",
      "title": "while(1) Array Sum & Accumulator Tracing",
      "points": "9 Marks",
      "weight": "64% of Q2",
      "description": "Trace the execution of an infinite while loop that sums elements of array B = {11, 7, 6, 5}, updates accumulator a with adjacent elements, and computes b = sum - i upon break.",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a=1, b=2, B[] = { 11, 7, 6, 5 };\n    int i=0, sum = 0;\n    while(1) {\n        sum += B[i];\n        if(i > 2) break;\n        a += B[i+1];\n        i++;\n        cout << \"\\n\" << i << \" \" << a;\n    }\n    b = sum - i;\n    cout << \"\\n\" << sum << \" \" << a << \" \" << b;\n    return 0;\n}",
      "expectedOutput": "1 8\n2 14\n3 19\n29 19 26",
      "traceTable": {
       "headers": [
        "Pass / Step",
        "Line Action",
        "i",
        "sum",
        "a",
        "b",
        "Console Output"
       ],
       "rows": [
        [
         "Init",
         "Variable declaration",
         0,
         0,
         1,
         2,
         "—"
        ],
        [
         "Pass 1",
         "sum += B[0] (11)",
         0,
         11,
         1,
         2,
         "—"
        ],
        [
         "Pass 1",
         "i > 2 is false",
         0,
         11,
         1,
         2,
         "—"
        ],
        [
         "Pass 1",
         "a += B[1] (7)",
         0,
         11,
         8,
         2,
         "—"
        ],
        [
         "Pass 1",
         "i++ -> 1, print",
         1,
         11,
         8,
         2,
         "1 8"
        ],
        [
         "Pass 2",
         "sum += B[1] (7)",
         1,
         18,
         8,
         2,
         "—"
        ],
        [
         "Pass 2",
         "i > 2 is false",
         1,
         18,
         8,
         2,
         "—"
        ],
        [
         "Pass 2",
         "a += B[2] (6)",
         1,
         18,
         14,
         2,
         "—"
        ],
        [
         "Pass 2",
         "i++ -> 2, print",
         2,
         18,
         14,
         2,
         "2 14"
        ],
        [
         "Pass 3",
         "sum += B[2] (6)",
         2,
         24,
         14,
         2,
         "—"
        ],
        [
         "Pass 3",
         "2 > 2 is false",
         2,
         24,
         14,
         2,
         "—"
        ],
        [
         "Pass 3",
         "a += B[3] (5)",
         2,
         24,
         19,
         2,
         "—"
        ],
        [
         "Pass 3",
         "i++ -> 3, print",
         3,
         24,
         19,
         2,
         "3 19"
        ],
        [
         "Pass 4",
         "sum += B[3] (5)",
         3,
         29,
         19,
         2,
         "—"
        ],
        [
         "Pass 4",
         "3 > 2 is TRUE -> BREAK",
         3,
         29,
         19,
         2,
         "— (loop exits)"
        ],
        [
         "Post-Loop",
         "b = sum - i (29 - 3)",
         3,
         29,
         19,
         26,
         "—"
        ],
        [
         "Post-Loop",
         "print sum, a, b",
         3,
         29,
         19,
         26,
         "29 19 26"
        ]
       ],
       "caption": "Complete step-by-step trace verified against MinGW g++ compilation."
      },
      "conceptsTested": [
       "while(1) loop mechanics",
       "Array index addressing",
       "Pre-break accumulator updates",
       "Loop variable persistence"
      ],
      "trapAlert": "Notice that on Pass 4, sum += B[3] occurs before if(i > 2) break. Therefore, B[3] (5) is added to sum! Also, i remains 3 on break, making b = 29 - 3 = 26.",
      "solutionNotes": "Write 1 8, 2 14, 3 19 on separate lines, followed by 29 19 26."
     },
     {
      "id": "F23-Q2b",
      "part": "Part (b)",
      "title": "Conditional Ladder, Integer Truncation & Array Out-of-Bounds",
      "points": "5 Marks",
      "weight": "36% of Q2",
      "description": "Trace a 4-iteration for loop over double A[4] = {-0.1, 0.11, 0.0, 0.2}. Demonstrates integer division truncation in 7 + 1/(i+1) and post-loop out-of-bounds reading of A[i].",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;\n\n    for(i=0; i<4; i++) {\n        if(A[i] < -0.11) {\n            x += 1;\n        } else if (A[i] > 0.1) {\n            x -= 10;\n        } else {\n            x = 7 + 1/(i+1);\n        }\n        cout << \"\\n\" << x;\n    }\n    cout << \"\\n\" << A[i];\n    return 0;\n}",
      "expectedOutput": "8\n-2\n7\n-3\nGarbage",
      "traceTable": {
       "headers": [
        "Iteration",
        "i",
        "A[i]",
        "Condition Check",
        "Branch",
        "Calculation of x",
        "Console Output"
       ],
       "rows": [
        [
         "i = 0",
         0,
         -0.1,
         "-0.1 < -0.11 (F), > 0.1 (F)",
         "else",
         "x = 7 + 1/1 = 8.0",
         "8"
        ],
        [
         "i = 1",
         1,
         0.11,
         "0.11 > 0.1 (T)",
         "else if",
         "x = 8.0 - 10 = -2.0",
         "-2"
        ],
        [
         "i = 2",
         2,
         0,
         "0.0 < -0.11 (F), > 0.1 (F)",
         "else",
         "x = 7 + 1/3 = 7 + 0 = 7.0",
         "7"
        ],
        [
         "i = 3",
         3,
         0.2,
         "0.2 > 0.1 (T)",
         "else if",
         "x = 7.0 - 10 = -3.0",
         "-3"
        ],
        [
         "Post-Loop",
         4,
         "A[4]",
         "Loop terminates (4 < 4 is F)",
         "Exit",
         "cout << A[4] (Out of Bounds)",
         "Garbage"
        ]
       ],
       "caption": "Trace table highlighting the 1/3 integer truncation and index 4 memory overflow."
      },
      "conceptsTested": [
       "if/else-if branch evaluation",
       "Integer division truncation",
       "Floating point array traversal",
       "Array out-of-bounds access"
      ],
      "trapAlert": "Trap 1: 1/(2+1) is 1/3 = 0. x becomes 7, NOT 7.333! Trap 2: Loop exits with i=4. A[4] is beyond the array bounds; the answer is Garbage.",
      "solutionNotes": "Write 8, -2, 7, -3, Garbage on successive lines."
     }
    ]
   },
   {
    "id": "gordon-fall2022",
    "term": "Fall 2022",
    "title": "Fall 2022 Midterm Exam — Question 1 (5-Part Algorithmic Programming Paper)",
    "officialWeight": "50% of Total Midterm Grade (Full 50-Point Program)",
    "format": "Complete C++ Program Written from Scratch",
    "overview": "Dr. Gordon assigned this full comprehensive programming problem, which constituted exactly 50% of the Fall 2022 midterm exam. It tests keyboard input of two 1D double arrays, dot product calculation, trigonometric range filtering, array combination, and a sentinel-controlled while loop.",
    "officialNotes": [
     "This question was worth 50% of the Fall 2022 midterm exam.",
     "Input error checking and modular algorithm structure required.",
     "Use 4.0 * atan(1.0) for PI calculation."
    ],
    "fullProgramCode": "#include <iostream>\n#include <cmath>\n#include <cstdio>\n\nusing namespace std;\n\nint main() {\n    int i, n = 10, count, k, i_sum;\n    double A[10], B[10], C[20], sum, PI;\n\n    // Part (a): Input two 1D arrays of doubles A and B (size 10)\n    cout << \"\\ninput array A (10 elements) ?\\n\";\n    for(i = 0; i < n; i++) cin >> A[i];\n\n    cout << \"\\ninput array B (10 elements) ?\\n\";\n    for(i = 0; i < n; i++) cin >> B[i];\n\n    // Part (b): Dot product of A and B\n    sum = 0.0;\n    for(i = 0; i < n; i++) sum += A[i] * B[i];\n    cout << \"\\ndot product of A and B = \" << sum;\n\n    // Part (c): Count elements of B strictly between 0 and PI\n    count = 0;\n    PI = 4.0 * atan(1.0);\n    for(i = 0; i < n; i++) {\n        if((B[i] > 0.0) && (B[i] < PI)) count++;\n    }\n    cout << \"\\nnumber of elements of B between 0 and PI = \" << count;\n\n    // Part (d): Combine arrays A and B into 20-element array C\n    for(i = 0; i < n; i++) C[i] = A[i];\n    for(i = 0; i < n; i++) C[i + n] = B[i];\n\n    cout << \"\\nC =\\n\";\n    for(i = 0; i < 2 * n; i++) cout << C[i] << \" \";\n\n    // Part (e): Repeatedly input integer k until negative\n    count = 0;\n    i_sum = 0;\n    while(1) {\n        cout << \"\\ninput k ? \";\n        cin >> k;\n        if(k < 0) break;\n        count++;\n        i_sum += k;\n    }\n    cout << \"\\nnumber of positive integers entered = \" << count;\n    cout << \"\\nsum = \" << i_sum;\n\n    cout << \"\\ndone.\\n\\n\";\n    return 0;\n}",
    "questions": [
     {
      "id": "F22-Q1a",
      "part": "Part (a)",
      "title": "Array Input from Keyboard",
      "points": "10% of Midterm",
      "description": "Input two 1D arrays of doubles A and B (size 10) from the keyboard using standard cin in a for loop.",
      "codeSnippet": "cout << \"\\ninput array A (10 elements) ?\\n\";\nfor(i=0; i<n; i++) cin >> A[i];\n\ncout << \"\\ninput array B (10 elements) ?\\n\";\nfor(i=0; i<n; i++) cin >> B[i];",
      "conceptsTested": [
       "1D double array allocation",
       "cin stream reading",
       "Loop traversal"
      ]
     },
     {
      "id": "F22-Q1b",
      "part": "Part (b)",
      "title": "Dot Product Computation",
      "points": "10% of Midterm",
      "description": "Calculate the mathematical dot product sum = sum + A[i]*B[i] and print the result.",
      "codeSnippet": "sum = 0.0;\nfor(i=0; i<n; i++) sum += A[i] * B[i];\ncout << \"\\ndot product of A and B = \" << sum;",
      "conceptsTested": [
       "Accumulator initialization to 0.0",
       "Vector dot product mathematics",
       "Loop arithmetic"
      ]
     },
     {
      "id": "F22-Q1c",
      "part": "Part (c)",
      "title": "Strict Trigonometric Range Filtering (0 to PI)",
      "points": "10% of Midterm",
      "description": "Determine the number of elements of array B strictly between 0 and PI (0.0 < B[i] < PI) and print the count.",
      "codeSnippet": "count = 0;\nPI = 4.0 * atan(1.0);\nfor(i=0; i<n; i++) {\n    if( (B[i] > 0.0) && (B[i] < PI) ) count++;\n}\ncout << \"\\nnumber of elements of B between 0 and PI = \" << count;",
      "conceptsTested": [
       "Trigonometric constant PI calculation via atan",
       "Strict range compound boolean condition",
       "Counter increment pattern"
      ]
     },
     {
      "id": "F22-Q1d",
      "part": "Part (d)",
      "title": "Array Combination into 20-Element Array C",
      "points": "10% of Midterm",
      "description": "Combine arrays A and B into a single 20-element array C, where the first 10 elements are given by A and the next 10 are given by B.",
      "codeSnippet": "for(i=0; i<n; i++) C[i]     = A[i];\nfor(i=0; i<n; i++) C[i + n] = B[i];",
      "conceptsTested": [
       "Array merging and concatenation",
       "Offset index arithmetic C[i+n]",
       "Buffer size allocation"
      ]
     },
     {
      "id": "F22-Q1e",
      "part": "Part (e)",
      "title": "Sentinel while(1) Loop for Positive Integer Input",
      "points": "10% of Midterm",
      "description": "Repeatedly input an integer k from the keyboard until a negative value is entered. Print the count of positive integers and their sum.",
      "codeSnippet": "count = 0;\ni_sum = 0;\nwhile(1) {\n    cout << \"\\ninput k ? \";\n    cin >> k;\n    if(k < 0) break;\n    count++;\n    i_sum += k;\n}\ncout << \"\\nnumber of positive integers entered = \" << count;\ncout << \"\\nsum = \" << i_sum;",
      "conceptsTested": [
       "Infinite sentinel while loop",
       "Break control flow",
       "Running accumulator and counter",
       "Interactive keyboard I/O"
      ]
     }
    ]
   },
   {
    "id": "gordon-review1",
    "term": "Midterm Review #1",
    "title": "Dr. Gordon Midterm Review #1 (Official Study Paper)",
    "officialWeight": "Exam Blueprint Benchmark",
    "format": "1 Programming Problem + 3 Output Tracing Problems",
    "overview": "Dr. Gordon handed out this review paper as the official benchmark for the midterm exam. It includes array equality testing, 2D matrix formula generation, and multi-variable factorial arithmetic.",
    "questions": [
     {
      "id": "R1-Q1",
      "part": "Question 1",
      "title": "Comparing Two 5-Element Arrays for Equality",
      "points": "Programming Question",
      "description": "Write a program that inputs two 5-element integer arrays A1 and A2, and checks whether all elements are identical.",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int A1[5], A2[5], i;\n    bool equal = true;\n\n    cout << \"Enter 5 elements for A1: \";\n    for(i=0; i<5; i++) cin >> A1[i];\n\n    cout << \"Enter 5 elements for A2: \";\n    for(i=0; i<5; i++) cin >> A2[i];\n\n    for(i=0; i<5; i++) {\n        if(A1[i] != A2[i]) {\n            equal = false;\n            break;\n        }\n    }\n\n    if(equal) cout << \"A1 and A2 are equal\\n\";\n    else      cout << \"A1 and A2 are not equal\\n\";\n\n    return 0;\n}",
      "conceptsTested": [
       "Boolean flag verification",
       "Early loop exit on inequality",
       "Parallel array comparison"
      ]
     },
     {
      "id": "R1-Q2a",
      "part": "Question 2(a)",
      "title": "2D Array Formula & Floating Comparison Trace",
      "points": "Output Tracing",
      "description": "Evaluate 2D array elements defined by A[i][j] = j*i + j*j - 6, followed by threshold comparison against 1.0e-7.",
      "codeSnippet": "int i, j;\ndouble A[3][3], x=1.0;\nfor(i=1;i<=2;i++) {\n    for(j=1;j<=2;j++) {\n        A[i][j] = j*i + j*j - 6;\n        cout << A[i][j] << \" \";\n    }\n    cout << endl;\n}",
      "expectedOutput": "-4 0\n-3 2",
      "conceptsTested": [
       "Nested for loops",
       "2D array cell formula computation",
       "Matrix row-major printing"
      ]
     }
    ]
   },
   {
    "id": "gordon-review4",
    "term": "Midterm Review #4",
    "title": "Dr. Gordon Midterm Review #4 (Exam Preparation Package)",
    "officialWeight": "Exam Difficulty Benchmark",
    "format": "2 Advanced Algorithmic Array Problems",
    "overview": "Contains advanced array manipulation problems: standard deviation calculation with forward cyclic array shifting, and the coupon-collector frequency counting loop for integers 1 through 7.",
    "questions": [
     {
      "id": "R4-Q1",
      "part": "Question 1",
      "title": "Array Standard Deviation & Cyclic Forward Shift",
      "points": "Programming Problem",
      "description": "Calculates standard deviation of an array A (n <= 100), then performs a forward cyclic shift where elements move forward by 1 and the last element wraps around to index 0.",
      "codeSnippet": "#include <iostream>\n#include <cmath>\n#include <cstdlib>\n\nusing namespace std;\n\nint main() {\n    int i, n;\n    double A[100], sum, ave, stddev, A_shift[100];\n\n    cout << \"input n ? \";\n    cin >> n;\n    if(n <= 1 || n > 100) exit(1);\n\n    for(i=0; i<n; i++) cin >> A[i];\n\n    sum = 0.0;\n    for(i=0; i<n; i++) sum += A[i];\n    ave = sum / n;\n\n    sum = 0.0;\n    for(i=0; i<n; i++) sum += pow(A[i] - ave, 2);\n    stddev = sqrt(sum / (n - 1));\n    cout << \"\\nstddev = \" << stddev;\n\n    // Cyclic forward shift using auxiliary buffer\n    for(i=0; i<n-1; i++) A_shift[i+1] = A[i];\n    A_shift[0] = A[n-1];\n\n    cout << \"\\nA_shift = \";\n    for(i=0; i<n; i++) cout << A_shift[i] << \" \";\n\n    return 0;\n}",
      "conceptsTested": [
       "Statistical variance & standard deviation",
       "Auxiliary array buffering (A_shift)",
       "Cyclic boundary wrap-around"
      ]
     },
     {
      "id": "R4-Q2",
      "part": "Question 2",
      "title": "Integer Frequency Array & Coupon Collector Loop (1 to 7)",
      "points": "Programming Problem",
      "description": "Repeatedly inputs integer k (1 to 7) until every integer has been entered at least once. Uses frequency array A[7+1] and min-element checking.",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int k, i, A[8] = { 0 }, min_A;\n\n    while(1) {\n        cout << \"input k (1 to 7) ? \";\n        cin >> k;\n        if(k >= 1 && k <= 7) A[k]++;\n\n        min_A = A[1];\n        for(i=1; i<=7; i++) {\n            if(A[i] < min_A) min_A = A[i];\n        }\n        if(min_A > 0) break;\n    }\n    cout << \"All numbers between 1 and 7 have been entered!\\n\";\n    return 0;\n}",
      "conceptsTested": [
       "Direct-address table / frequency array",
       "Minimum finding algorithm",
       "Condition check for completion"
      ]
     }
    ]
   },
   {
    "id": "gordon-quizzes",
    "term": "Gordon Quizzes",
    "title": "Dr. Gordon 60-Minute Quizzes (The Midterm Exam Prototype)",
    "officialWeight": "Official Midterm Precursor",
    "format": "60-Minute Programming Papers",
    "overview": "Dr. Gordon stated in his midterm notice: \"The difficulty level of the programming questions will be similar to the old quizzes from the review material.\" These quizzes established the menu-driven 1D array format.",
    "questions": [
     {
      "id": "Q2-Wed",
      "part": "Quiz 2 (Wednesday)",
      "title": "Validated Menu Program for Arrays A and B (n <= 100)",
      "points": "60-Min Programming Quiz",
      "description": "Inputs arrays A and B with size validation (n <= 100), then provides a menu (k=1: average of A, k=2: min of B, k=3: dot product) repeating until all 3 options are selected.",
      "codeSnippet": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, k, i;\n    double A[100], B[100];\n\n    cout << \"n = \"; cin >> n;\n    while(n < 1 || n > 100) {\n        cout << \"out of range, n = \";\n        cin >> n;\n    }\n\n    for(i=0; i<n; i++) cin >> A[i];\n    for(i=0; i<n; i++) cin >> B[i];\n\n    bool used[4] = { false, false, false, false };\n\n    while(!(used[1] && used[2] && used[3])) {\n        cout << \"k (1 avg A, 2 min B, 3 dot) = \"; cin >> k;\n        if(k == 1) {\n            double sum = 0;\n            for(i=0; i<n; i++) sum += A[i];\n            cout << \"average = \" << sum / n << \"\\n\";\n        } else if(k == 2) {\n            double mn = B[0];\n            for(i=1; i<n; i++) if(B[i] < mn) mn = B[i];\n            cout << \"min = \" << mn << \"\\n\";\n        } else if(k == 3) {\n            double dot = 0;\n            for(i=0; i<n; i++) dot += A[i] * B[i];\n            cout << \"dot = \" << dot << \"\\n\";\n        } else {\n            return 1;\n        }\n        used[k] = true;\n    }\n    return 0;\n}",
      "conceptsTested": [
       "Input validation loop",
       "Menu-driven architecture",
       "Tracking state with boolean flags",
       "Array algorithms"
      ]
     }
    ]
   }
  ]
 }
};

export default content;
