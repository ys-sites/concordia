import { PracticeQuestion } from '../../types';
import { t } from '../solutions/types';

// MIAE 215 — questions adapted from the Fall 2023 midterm (Question 2, program output). The original
// uses arrays and while/break, which the teacher's slides have not covered yet, so these versions
// keep the same traps using only if/else ladders, for loops and mixed int/double arithmetic.
const CS = 'control_statements1.pdf';
const CS2 = 'control_statements1_part2.pdf';
const CH = '4 · Control Statements & Loops';

export const MIAE215_EXTRA: PracticeQuestion[] = [
  {
    id: 'Q_MIAE215_P01',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Fall 2023, Q2(b) (adapted)',
    topic: 'Tracing a for Loop with an if-else Ladder',
    difficulty: 'Exam Master',
    question: t`What does this program print?`,
    codeSnippet: `int i;
double x = 1.0;
for( i = 0; i < 4; i++ ) {
    if( i == 1 || i == 3 ) {
        x -= 10;
    } else {
        x = 7 + 1/(i+1);
    }
    cout << "\\n" << x;
}`,
    options: [t`8, −2, 7, −3`, t`8, −2, 7.33333, −2.66667`, t`8, −9, 7, −3`, t`7, −3, 7, −3`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Trace one iteration at a time, keeping x's current value. In $1/(i+1)$ both operands are int, so the division is integer division.`,
      stepByStep: [],
      steps: [
        { title: 'i = 0: else branch', math: t`x = 7 + \frac{1}{1} = 7 + 1 = 8 \quad\Rightarrow\quad \text{print } 8` },
        { title: 'i = 1: first branch', math: t`x = 8 - 10 = -2 \quad\Rightarrow\quad \text{print } -2` },
        { title: 'i = 2: else branch, integer division', math: t`\frac{1}{3} \to 0 \ (\text{int}) \quad\Rightarrow\quad x = 7 + 0 = 7` },
        { title: 'i = 3: first branch', math: t`x = 7 - 10 = -3 \quad\Rightarrow\quad \text{print } -3` },
        { title: 'i = 4: test fails, loop ends', note: t`Four values were printed.` }
      ],
      answer: t`8,\ -2,\ 7,\ -3`,
      whyWrong: {
        '1': t`$1/3$ with two ints is 0, not 0.333. Only $1.0/3$ would give 0.333.`,
        '2': t`At $i = 1$, x is already 8 (from $i = 0$), so $x - 10 = -2$, not $1 - 10 = -9$.`,
        '3': t`At $i = 0$, $1/(0+1) = 1$, so $x = 8$, not 7.`
      },
      commonTrap: t`Assuming that because x is a double, $1/(i+1)$ is computed in floating point. The type of the operands decides, not the variable on the left.`,
      reference: `${CS} · for loops and if-else ladders`
    },
    source: [
      { deck: CS, chapter: CH, location: 'if-else ladders' },
      { deck: CS2, chapter: CH, location: 'for loops' }
    ]
  },
  {
    id: 'Q_MIAE215_P02',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Fall 2023, Q2(b) (adapted)',
    topic: 'Comparing Negative Decimals',
    difficulty: 'Midterm Level',
    question: t`With a = −0.1, which line is printed?`,
    codeSnippet: `double a = -0.1;
if( a < -0.11 ) {
    cout << "branch 1";
} else if( a > 0.1 ) {
    cout << "branch 2";
} else {
    cout << "branch 3";
}`,
    options: [t`branch 3`, t`branch 1`, t`branch 2`, t`branch 1 and branch 3`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`On the number line, a less negative number is larger: $-0.1 > -0.11$.`,
      stepByStep: [],
      steps: [
        { title: 'Test 1', math: t`-0.1 < -0.11\ ? \quad -0.10 \text{ is to the right of } -0.11 \;\Rightarrow\; \text{false}` },
        { title: 'Test 2', math: t`-0.1 > 0.1\ ? \;\Rightarrow\; \text{false}` },
        { title: 'Neither is true, so the final else runs', note: t`Prints "branch 3".` }
      ],
      whyWrong: {
        '1': t`Comparing magnitudes (0.1 < 0.11) instead of values: for negatives the order flips, so $-0.1 > -0.11$.`,
        '2': t`$-0.1$ is negative, so it is not greater than 0.1.`,
        '3': t`An if-else ladder runs at most one branch.`
      },
      commonTrap: t`Ignoring the sign when comparing negative decimals.`,
      reference: `${CS} · comparison operators`
    },
    source: [{ deck: CS, chapter: CH, location: 'comparison operators, if-else ladders' }]
  },
  {
    id: 'Q_MIAE215_P03',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Fall 2023, Q2(b) (adapted)',
    topic: 'Integer Division Inside a double Expression',
    difficulty: 'Midterm Level',
    question: t`What is stored in x?`,
    codeSnippet: `int i = 2;
double x;
x = 7 + 1/(i+1);`,
    options: [t`7`, t`7.33333`, t`8`, t`7.5`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Each operation is typed by its operands: int / int is integer division, even when the result is later stored in a double.`,
      stepByStep: [],
      steps: [
        { title: 'Parentheses first', math: t`i + 1 = 3\ (\text{int})` },
        { title: 'Division of two ints', math: t`1 / 3 = 0\ \ (\text{remainder discarded})` },
        { title: 'Addition', math: t`7 + 0 = 7` },
        { title: 'Assignment converts to double', math: t`x = 7.0` },
        { title: 'Fix if 7.333 is wanted', note: t`Write 1.0/(i+1) or (double)1/(i+1).` }
      ],
      answer: t`x = 7`,
      whyWrong: {
        '1': t`7.33333 needs floating-point division; both operands of / are ints here.`,
        '2': t`8 uses $1/1$; with $i = 2$ the denominator is 3.`,
        '3': t`7.5 uses $1/2$; the denominator is $i + 1 = 3$.`
      },
      commonTrap: t`Thinking the double on the left makes the whole right side floating point.`,
      reference: 'variable_types2.pdf · mixed-type expressions'
    },
    source: [{ deck: 'variable_types2.pdf', chapter: '3 · Expressions & Operators', location: 'integer division, mixed-type expressions' }]
  }
];
