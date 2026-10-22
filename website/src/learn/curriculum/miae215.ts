// MIAE 215 — Programming for Mechanical & Industrial Engineers (C++). Order follows the teacher's slides and
// weeks 1–7. The teacher's midterm format: 40 % program-output tracing, 60 % writing programs.
import type { CourseSpec } from './types';

export const MIAE215_SPEC: CourseSpec = {
  id: 'MIAE215',
  whatYouLearn: [
    'Explain how a C++ program is built and run, and write a first program that compiles',
    'Choose the right type, predict overflow and round-off, and cast safely',
    'Evaluate any expression by hand: integer division, %, ++/--, precedence and cmath',
    'Trace if-else ladders, logical operators and every kind of loop, line by line',
    'Process 1-D and 2-D arrays and C-strings',
    'Write complete programs the way the midterm asks for them, and trace them under exam conditions'
  ],
  sections: [
    {
      id: 'getting-started',
      title: 'Getting started with C++',
      subtitle: 'Week 1 · Introduction',
      midterm: true,
      lessons: [
        {
          id: 'build-process',
          title: 'How a C++ program is built',
          summary: 'Source, object and executable files, the compiler versus an interpreter, and the anatomy of a first program.',
          bank: [{ ch: 'intro' }],
          read: [/^01 - Teacher Lecture Notes & Slides\/introduction\.pdf$/, /^Mini Course\/Lesson 1 - /, /^Mini Course\/Lesson 2 - /],
          resources: [/^Mini Course\/00 - Overview/, /^Mini Course\/MIAE 215 - C\+\+ Getting Started/, /^00 - Course Overview/]
        },
        {
          id: 'input-output',
          title: 'Input, output & formatting',
          summary: 'cout, cin and escape characters, and how the output is laid out character by character.',
          bank: [{ ch: 'intro', re: /cout|<<|control characters|white space/i }]
        }
      ]
    },
    {
      id: 'types',
      title: 'Variables & data types',
      subtitle: 'Weeks 1–2 · variable_types 1–2',
      midterm: true,
      lessons: [
        {
          id: 'data-types',
          title: 'Data types, sizes & overflow',
          summary: 'int, double, char, bool and their modifiers: ranges, sizeof, overflow and round-off.',
          gate: ['types'],
          bank: [{ ch: 'types' }],
          read: [/^Mini Course\/Lesson 3 - /],
          resources: [/^02 - Comprehensive Topic Guides[^/]*\/Part 1 - /, /^03 - 1-Page Rapid Review Sheets\/Part 1 - /]
        },
        {
          id: 'casting',
          title: 'Casting & mixed-type expressions',
          summary: 'Implicit promotion, explicit casts and the information a cast throws away.',
          gate: ['cast'],
          bank: [{ ch: 'types', re: /cast|conversion|implicit|information loss|division rounding/i }],
          resources: [/^02 - Comprehensive Topic Guides[^/]*\/Part 2 - /]
        }
      ]
    },
    {
      id: 'expressions',
      title: 'Expressions & operators',
      subtitle: 'Week 3',
      midterm: true,
      lessons: [
        {
          id: 'integer-division',
          title: 'Integer division & the % operator',
          summary: 'Why 7/2 is 3, what % really returns, peeling digits, and dividing by zero.',
          gate: ['intdiv'],
          bank: [{ ch: 'expr', re: /integer division|modulo|%|division by zero|mixed-type division|division with doubles|digits/i }]
        },
        {
          id: 'operators',
          title: '++, --, compound assignment & precedence',
          summary: 'Pre versus post increment, compound operators and the order C++ evaluates an expression in.',
          gate: ['ops'],
          bank: [{ ch: 'expr' }],
          read: [/^Mini Course\/Lesson 4 - /],
          resources: [/^02 - Comprehensive Topic Guides[^/]*\/Part 3 - /, /^03 - 1-Page Rapid Review Sheets\/Part 3 - /]
        },
        {
          id: 'math-library',
          title: 'The cmath library',
          summary: 'pow, sqrt, abs, log and friends: their types, their domains and the traps.',
          gate: ['math'],
          bank: [{ ch: 'expr', re: /pow|sqrt|\babs\b|absolute|logarithm|math library/i }, { ch: 'intro', re: /cmath/i }]
        }
      ]
    },
    {
      id: 'control',
      title: 'Control statements & loops',
      subtitle: 'Weeks 4–5 · control_statements 1–3',
      midterm: true,
      lessons: [
        {
          id: 'if-else',
          title: 'if / else-if ladders',
          summary: 'Which branch runs, in what order the tests happen, and the default else.',
          gate: ['ifelse'],
          bank: [{ ch: 'control', re: /\bif\b|ladder|else|fork|maximum of three|comparison|default/i }, { ch: 'control' }],
          read: [/^Mini Course\/Lesson 5 - /],
          resources: [/^02 - Comprehensive Topic Guides[^/]*\/Part 4 - /, /^03 - 1-Page Rapid Review Sheets\/Part 2 - /]
        },
        {
          id: 'logical-operators',
          title: 'Logical operators & short-circuit evaluation',
          summary: '&&, || and !, what short-circuiting skips, and comparing floating-point values safely.',
          gate: ['logic'],
          bank: [{ ch: 'control', re: /logical|NOT operator|multiple conditions|approximate|float equality|integer test|codeblock/i }]
        },
        {
          id: 'for-loops',
          title: 'for loops',
          summary: 'Trip counts, the value after the loop, accumulators and loops with unusual updates.',
          gate: ['for'],
          bank: [{ ch: 'control', re: /for loop|loop trip|execution count|stepped|bounds|exit value|steps|accumulator|factorial|counting|multiplicative|nonlinear update|index inside/i }],
          resources: [/^04 - Practice Problems & Code Solutions\/Week 4 /]
        },
        {
          id: 'while-loops',
          title: 'while, do-while & digit loops',
          summary: 'Loops that run until a condition changes: countdowns, sentinels and stripping digits.',
          gate: ['while'],
          bank: [{ ch: 'control', re: /while|countdown|when the test/i }]
        },
        {
          id: 'break-continue',
          title: 'break & continue',
          summary: 'Leaving a loop early or skipping one pass, and tracing what that does to the counters.',
          gate: ['breakcont']
        },
        {
          id: 'nested-loops',
          title: 'Nested loops',
          summary: 'Counting inner iterations, patterns and the classic exam traces with two counters.',
          gate: ['nested'],
          bank: [{ ch: 'control', re: /nested/i }, { ch: 'arrays' }]
        }
      ]
    },
    {
      id: 'arrays',
      title: 'Arrays & C-strings',
      subtitle: 'Weeks 6–7 · Mini Course Lesson 6',
      midterm: true,
      lessons: [
        {
          id: 'arrays-1d',
          title: '1-D arrays: sum, max, search & dot product',
          summary: 'Declaring, filling and traversing arrays, and the off-by-one errors that cost marks.',
          gate: ['arr1'],
          read: [/^Mini Course\/Lesson 6 - /]
        },
        {
          id: 'arrays-2d',
          title: '2-D arrays',
          summary: 'Rows and columns, nested traversal and row or column totals.',
          gate: ['arr2']
        },
        {
          id: 'c-strings',
          title: 'C-strings & the null terminator',
          summary: "char arrays, '\\0', and walking a string character by character.",
          gate: ['cstr']
        }
      ]
    },
    {
      id: 'programs',
      title: 'Writing complete programs',
      subtitle: 'All weeks · 60 % of the midterm',
      midterm: true,
      lessons: [
        {
          id: 'write-program',
          title: 'Writing a full program',
          summary: 'Read the specification, plan the variables and loops, write it, then trace it to be sure.',
          gate: ['write'],
          tools: ['cpp-lab'],
          resources: [/^04 - Practice Problems & Code Solutions\/MIAE 215 - Step-by-Step Code Execution/, /^02 - Comprehensive Topic Guides[^/]*\/Part 5 - /, /^04 - Practice Problems & Code Solutions\/Exercise Solutions Set 1/]
        },
        {
          id: 'flowcharts',
          title: 'Flowcharts & Flowgorithm',
          summary: 'The flowchart symbols and how a flowchart maps onto C++ control flow.',
          bank: [{ ch: 'flowcharts' }]
        }
      ]
    }
  ],
  examPrep: {
    bankPast: [{ ch: 'past', title: 'Exam-style tracing & programming questions', summary: 'Questions modelled on past MIAE 215 midterms and quizzes, each with a step-by-step trace.' }],
    mock: { title: 'Mock midterm', size: 15, minutes: 90 },
    extra: [
      {
        id: 'teacher-practice',
        title: "Teacher's midterm practice",
        subtitle: '34 questions from the teacher’s practice papers, each with a video solution',
        lessons: [
          { id: 'tp-output-tracing', title: 'Output tracing', summary: 'Predict exactly what each program prints.', steps: [{ kind: 'practice', title: 'Trace the programs', slug: 'practice', questions: { teacher: /^Output Tracing$/ }, ordered: true }] },
          { id: 'tp-nested-2d', title: 'Nested loops & 2-D arrays', summary: 'Two counters, one table: trace them together.', steps: [{ kind: 'practice', title: 'Trace the loops', slug: 'practice', questions: { teacher: /^Nested Loops & 2D Arrays$/ }, ordered: true }] },
          { id: 'tp-array-algorithms', title: 'Array algorithms', summary: 'Searching, shifting, counting and comparing arrays.', steps: [{ kind: 'practice', title: 'Solve the array questions', slug: 'practice', questions: { teacher: /^Array Algorithms$/ }, ordered: true }] },
          { id: 'tp-menus-validation', title: 'Loops, menus & input validation', summary: 'Menu loops and input checks the way the teacher writes them.', steps: [{ kind: 'practice', title: 'Solve the loop questions', slug: 'practice', questions: { teacher: /^Loops, Menus & Input Validation$/ }, ordered: true }] },
          { id: 'tp-input-output', title: 'Input, output & formatting', summary: 'What cout prints, character by character.', steps: [{ kind: 'practice', title: 'Predict the output', slug: 'practice', questions: { teacher: /^Input, Output & Formatting$/ }, ordered: true }] },
          { id: 'tp-limits-overflow', title: 'Variable limits & overflow', summary: 'What happens at the edge of a type.', steps: [{ kind: 'practice', title: 'Find the limits', slug: 'practice', questions: { teacher: /^Variable Limits & Overflow$/ }, ordered: true }] },
          {
            id: 'practice-midterm-2026',
            title: 'Practice midterm 2026',
            summary: "The teacher's Fall 2026 practice midterm: one program to write and two traces, each solved on video.",
            steps: [
              { kind: 'video', title: 'Q1 · Write the program (a–f)', slug: 'q1-video', videoId: 'pm215:pm26_q1' },
              { kind: 'video', title: 'Q2(a) · Output tracing', slug: 'q2a-video', videoId: 'pm215:pm26_q2a' },
              { kind: 'video', title: 'Q2(b) · Output tracing', slug: 'q2b-video', videoId: 'pm215:pm26_q2b' },
              { kind: 'exam', title: 'Sit the paper (3 questions)', slug: 'exam', questions: { teacher: /^(1D Arrays & Search Algorithms|If-Else Ladders & Integer Truncation|While Loops & Array Index Traversal)$/ }, ordered: true, timeLimit: 45 }
            ]
          }
        ]
      },
      {
        id: 'code-lab',
        title: 'C++ code lab: write the program',
        subtitle: '5 programming problems, each with a 7–11 minute walkthrough',
        lessons: [
          { id: 'lab-midterm-2022', title: 'Official midterm 2022 multi-part problem', summary: "The teacher's own 2022 midterm problem, part by part.", steps: [{ kind: 'video', title: 'Walkthrough', slug: 'video', videoId: 'lab215:c1_midterm2022' }, { kind: 'tool', title: 'Write it in the code lab', slug: 'lab', toolId: 'cpp-lab:c1_midterm2022', minutes: 20 }] },
          { id: 'lab-stats-shift', title: 'Array statistics & circular shift', summary: 'Midterm Review #4, Question 1.', steps: [{ kind: 'video', title: 'Walkthrough', slug: 'video', videoId: 'lab215:c2_stats_shift' }, { kind: 'tool', title: 'Write it in the code lab', slug: 'lab', toolId: 'cpp-lab:c2_stats_shift', minutes: 20 }] },
          { id: 'lab-histogram', title: 'Frequency histogram & sentinel input', summary: 'Midterm Review #4, Question 2.', steps: [{ kind: 'video', title: 'Walkthrough', slug: 'video', videoId: 'lab215:c3_histogram' }, { kind: 'tool', title: 'Write it in the code lab', slug: 'lab', toolId: 'cpp-lab:c3_histogram', minutes: 20 }] },
          { id: 'lab-equality', title: 'Array equality & first mismatch', summary: 'Built on Midterm Review #1, Question 1.', steps: [{ kind: 'video', title: 'Walkthrough', slug: 'video', videoId: 'lab215:c4_equality' }, { kind: 'tool', title: 'Write it in the code lab', slug: 'lab', toolId: 'cpp-lab:c4_equality', minutes: 20 }] },
          { id: 'lab-menu-series', title: 'Menu-driven validation & alternating series', summary: 'Patterns from the quizzes and midterm reviews.', steps: [{ kind: 'video', title: 'Walkthrough', slug: 'video', videoId: 'lab215:c5_menu_series' }, { kind: 'tool', title: 'Write it in the code lab', slug: 'lab', toolId: 'cpp-lab:c5_menu_series', minutes: 20 }] }
        ]
      },
      {
        id: 'gordon',
        title: "Dr. Gordon's past midterms",
        subtitle: 'What the teacher asked before, question by question',
        lessons: [
          { id: 'gordon-fall2026', title: 'Fall 2026 midterm (live revision paper)', summary: 'Program writing and two output traces.', steps: [{ kind: 'notes', title: 'How this paper is built', slug: 'notes', notesKey: 'gordon:gordon-fall2026' }, { kind: 'practice', title: 'Work the questions', slug: 'practice', questions: { gordonPaper: 'gordon-fall2026' }, ordered: true }] },
          { id: 'gordon-fall2023', title: 'Fall 2023 midterm, Question 2', summary: 'The output-tracing half of the paper.', steps: [{ kind: 'notes', title: 'How this paper is built', slug: 'notes', notesKey: 'gordon:gordon-fall2023' }, { kind: 'practice', title: 'Work the questions', slug: 'practice', questions: { gordonPaper: 'gordon-fall2023' }, ordered: true }] },
          { id: 'gordon-fall2022', title: 'Fall 2022 midterm, Question 1', summary: 'A five-part algorithmic programming problem.', steps: [{ kind: 'notes', title: 'How this paper is built', slug: 'notes', notesKey: 'gordon:gordon-fall2022' }, { kind: 'practice', title: 'Work the questions', slug: 'practice', questions: { gordonPaper: 'gordon-fall2022' }, ordered: true }] },
          { id: 'gordon-review1', title: 'Midterm Review #1', summary: 'The official study paper.', steps: [{ kind: 'notes', title: 'How this paper is built', slug: 'notes', notesKey: 'gordon:gordon-review1' }, { kind: 'practice', title: 'Work the questions', slug: 'practice', questions: { gordonPaper: 'gordon-review1' }, ordered: true }] },
          { id: 'gordon-review4', title: 'Midterm Review #4', summary: 'The exam preparation package.', steps: [{ kind: 'notes', title: 'How this paper is built', slug: 'notes', notesKey: 'gordon:gordon-review4' }, { kind: 'practice', title: 'Work the questions', slug: 'practice', questions: { gordonPaper: 'gordon-review4' }, ordered: true }] },
          { id: 'gordon-quizzes', title: '60-minute quizzes', summary: 'The quizzes that prototype the midterm.', steps: [{ kind: 'notes', title: 'How this paper is built', slug: 'notes', notesKey: 'gordon:gordon-quizzes' }, { kind: 'practice', title: 'Work the questions', slug: 'practice', questions: { gordonPaper: 'gordon-quizzes' }, ordered: true }] },
          { id: 'gordon-analytics', title: 'What Dr. Gordon tests, and the traps', summary: 'Topic frequencies, the most expensive traps and the strategy that follows.', steps: [{ kind: 'notes', title: 'Topics, traps & strategy', slug: 'notes', notesKey: 'gordon:analytics', minutes: 10 }, { kind: 'notes', title: 'Questions that came back word for word', slug: 'matches', notesKey: 'gordon:matches', minutes: 10 }] }
        ]
      },
      {
        id: 'exam-kit',
        title: 'Exam kit',
        subtitle: 'The one-page sheet you are allowed to bring',
        lessons: [
          {
            id: 'cheat-sheet',
            title: 'Your one-page formula sheet',
            summary: 'The teacher allows one single-sided sheet. These are ready to print, and what to put on yours.',
            steps: [
              { kind: 'reading', title: 'Read: Midterm Cheatsheet 2.0', slug: 'sheet2', docs: [/^03 - 1-Page Rapid Review Sheets\/MIAE 215 - Midterm Cheatsheet 2\.0/] },
              { kind: 'reading', title: 'Read: exam cheatsheet & survival guide', slug: 'survival', docs: [/^03 - 1-Page Rapid Review Sheets\/MIAE 215 - Midterm 1-Page Document Cheatsheet/] }
            ]
          }
        ]
      }
    ]
  }
};
