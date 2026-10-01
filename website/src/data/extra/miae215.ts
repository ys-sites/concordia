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
  },
  {
    id: 'Q_MIAE215_E01',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 · Concordia University',
    topic: 'Digit Counting via While Loop',
    difficulty: 'Foundation',
    question: t`What is the output of the following program fragment when the user enters 4321?`,
    codeSnippet: `int num;
int a = 0;
cout << "Please Enter any number : ";
cin >> num; // user enters 4321
while(num > 0) {
    num = num / 10;
    a++;
}
cout << a;`,
    options: [t`4`, t`4321`, t`321`, t`3`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Integer division by 10 truncates the least significant digit on each pass. The counter variable a counts the number of digits.`,
      stepByStep: [],
      steps: [
        { title: 'Pass 1', math: t`\text{num} = 4321 / 10 = 432, \quad a = 1` },
        { title: 'Pass 2', math: t`\text{num} = 432 / 10 = 43, \quad a = 2` },
        { title: 'Pass 3', math: t`\text{num} = 43 / 10 = 4, \quad a = 3` },
        { title: 'Pass 4', math: t`\text{num} = 4 / 10 = 0, \quad a = 4` },
        { title: 'Termination', note: t`Condition num > 0 is now false (0 > 0 is false). Prints a = 4.` }
      ],
      answer: t`4`,
      whyWrong: {
        '1': t`4321 is the input value itself, not the value of the counter variable a.`,
        '2': t`321 assumes the highest digit was removed without incrementing a.`,
        '3': t`3 is off by one, assuming the loop stops when num reaches single digits.`
      },
      commonTrap: t`Confusing the counter variable a with the digits of num, or miscounting the final iteration when num drops from 4 to 0.`,
      reference: 'MIAE 215 Midterm Exam 2024'
    },
    source: [{ deck: CS, chapter: CH, location: 'While loops and integer division' }]
  },
  {
    id: 'Q_MIAE215_E02',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 · Concordia University',
    topic: 'Loop Iteration Halving & Post-Loop Output',
    difficulty: 'Midterm Level',
    question: t`What does the following code snippet print to standard output?`,
    codeSnippet: `int i, j = 0;
for(i = 5; i > 0; i /= 2) {
    j++;
    cout << j;
}
cout << j;`,
    options: [t`1233`, t`1234`, t`01234`, t`12345`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Trace the loop step-by-step. i /= 2 halves i via integer division, and cout << j prints inside the loop as well as once more after termination.`,
      stepByStep: [],
      steps: [
        { title: 'Iteration 1', math: t`i = 5 > 0 \;\Rightarrow\; j = 1, \quad \text{prints } 1, \quad i \to 5/2 = 2` },
        { title: 'Iteration 2', math: t`i = 2 > 0 \;\Rightarrow\; j = 2, \quad \text{prints } 2, \quad i \to 2/2 = 1` },
        { title: 'Iteration 3', math: t`i = 1 > 0 \;\Rightarrow\; j = 3, \quad \text{prints } 3, \quad i \to 1/2 = 0` },
        { title: 'Termination', note: t`i = 0 > 0 is false. Loop exits with j = 3.` },
        { title: 'Post-Loop Output', note: t`cout << j; prints 3 again, yielding 1233.` }
      ],
      answer: t`1233`,
      whyWrong: {
        '1': t`1234 assumes the loop ran 4 times or that j was incremented post-loop.`,
        '2': t`01234 assumes j started printing at 0.`,
        '3': t`12345 assumes i decremented by 1 each time instead of dividing by 2.`
      },
      commonTrap: t`Forgetting that the post-loop statement cout << j prints the final value of j a second time.`,
      reference: 'MIAE 215 Midterm Exam 2024'
    },
    source: [{ deck: CS2, chapter: CH, location: 'For loops and loop termination' }]
  },
  {
    id: 'Q_MIAE215_E03',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 · Concordia University',
    topic: 'Nested Loops with Modulo Guard',
    difficulty: 'Midterm Level',
    question: t`What is the final answer output by this nested loop program?`,
    codeSnippet: `int result = 0;
for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        for (int j = i; j <= 5; j++) {
            result += j;
        }
    }
}
cout << "The final answer is: " << result << endl;`,
    options: [
      t`The final answer is: 12`,
      t`The final answer is: 45`,
      t`The final answer is: 24`,
      t`The final answer is: 15`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Check whether the inner loop's start condition j <= 5 is satisfied for each multiple of 3.`,
      stepByStep: [],
      steps: [
        { title: 'Multiples of 3 between 1 and 10', math: t`i = 3, 6, 9` },
        { title: 'When i = 3', math: t`j \text{ runs from } 3 \text{ to } 5: \quad \text{result} += 3 + 4 + 5 = 12` },
        { title: 'When i = 6', note: t`Inner loop starts at j = 6. The condition j <= 5 (6 <= 5) is immediately FALSE, so it does not run!` },
        { title: 'When i = 9', note: t`Inner loop starts at j = 9. Condition 9 <= 5 is FALSE, so it does not run!` },
        { title: 'Final Sum', math: t`\text{result} = 12` }
      ],
      answer: t`The final answer is: 12`,
      whyWrong: {
        '1': t`45 assumes the inner loop ran from j = 1 to 5 for every multiple of 3.`,
        '2': t`24 assumes the inner loop ran twice.`,
        '3': t`15 assumes j summed from 1 to 5 once.`
      },
      commonTrap: t`Failing to evaluate whether the inner loop condition j <= 5 is true when i = 6 and i = 9. When the initial value exceeds the upper bound, the loop body executes zero times.`,
      reference: 'MIAE 215 Midterm Exam 2024'
    },
    source: [{ deck: CS2, chapter: CH, location: 'Nested loops and modulo operators' }]
  },
  {
    id: 'Q_MIAE215_E04',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 · Concordia University',
    topic: 'Logical OR Short-Circuit Evaluation Trap',
    difficulty: 'Exam Master',
    question: t`What is the exact output of this C++ program fragment?`,
    codeSnippet: `int found = 1, count = 4;
if (!found || --count == 0)
    cout << "safe" << endl;
cout << "count = " << count << endl;`,
    options: [
      t`count = 3`,
      t`safe\ncount = 4`,
      t`safe\ncount = 3`,
      t`count = 4`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Short-circuit evaluation in C++: with logical OR (||), the right operand is ONLY skipped if the left operand evaluates to true. If the left operand is false, the right operand MUST be evaluated.`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate left side of ||', math: t`\text{found} = 1 \;\Rightarrow\; !\text{found} = 0\ (\text{false})` },
        { title: 'Right side MUST be evaluated', note: t`Because the left side was false, short-circuiting does NOT occur!` },
        { title: 'Execute pre-decrement --count', math: t`\text{count} \text{ decrements from } 4 \to 3` },
        { title: 'Compare with 0', math: t`3 == 0 \;\Rightarrow\; \text{false}` },
        { title: 'if condition outcome', note: t`false || false evaluates to false. "safe" is NOT printed!` },
        { title: 'Final output', note: t`Prints count = 3.` }
      ],
      answer: t`count = 3`,
      whyWrong: {
        '1': t`safe\ncount = 4 assumes !found was true and short-circuited --count. But !1 is 0 (false).`,
        '2': t`safe\ncount = 3 assumes the if condition evaluated to true.`,
        '3': t`count = 4 assumes that || always short-circuits, leaving count unmodified.`
      },
      commonTrap: t`Exam Trap: Believing || skips the second condition when the first is false. Logical OR only short-circuits on TRUE; if the first condition is false, it must evaluate the second!`,
      reference: 'MIAE 215 Midterm Exam 2024'
    },
    source: [{ deck: CS, chapter: CH, location: 'Short-circuit boolean logic and pre-decrement operators' }]
  },
  {
    id: 'Q_MIAE215_E05',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 · Concordia University',
    topic: 'While Loop with Continue & Break',
    difficulty: 'Midterm Level',
    question: t`What numbers are printed when this loop runs?`,
    codeSnippet: `int i = 2;
while(i <= 20) {
    if (i % 3 == 0) {
        i += 2;
        continue;
    }
    cout << i << " ";
    if (i == 20) break;
    i += 2;
}`,
    options: [
      t`2 4 8 10 14 16 20 `,
      t`2 4 6 8 10 12 14 16 18 20 `,
      t`2 4 8 10 14 16 `,
      t`2 4 8 10 14 16 20 22 `
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`continue skips the rest of the current iteration and jumps directly to the while loop condition. Multiples of 3 (6, 12, 18) are skipped.`,
      stepByStep: [],
      steps: [
        { title: 'i = 2, 4', note: t`Not divisible by 3: prints "2 4 "` },
        { title: 'i = 6', note: t`6 % 3 == 0: i becomes 8, continue skips printing!` },
        { title: 'i = 8, 10', note: t`Not divisible by 3: prints "8 10 "` },
        { title: 'i = 12', note: t`12 % 3 == 0: i becomes 14, continue skips printing!` },
        { title: 'i = 14, 16', note: t`Not divisible by 3: prints "14 16 "` },
        { title: 'i = 18', note: t`18 % 3 == 0: i becomes 20, continue skips printing!` },
        { title: 'i = 20', note: t`Prints "20 ". Then if (i == 20) break executes, terminating the loop.` }
      ],
      answer: t`2 4 8 10 14 16 20 `,
      whyWrong: {
        '1': t`Includes 6, 12, 18 which are skipped by the continue branch.`,
        '2': t`Omits 20, assuming break occurred before printing.`,
        '3': t`Includes 22, failing to recognize that break terminated the loop when i was 20.`
      },
      commonTrap: t`Forgetting that cout << i occurs before the break check in this loop structure.`,
      reference: 'MIAE 215 Midterm Exam 2024'
    },
    source: [{ deck: CS, chapter: CH, location: 'While loop control with continue and break' }]
  },
  {
    id: 'Q_MIAE215_E06',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam 2024 · Concordia University',
    topic: 'Compound Loop Arithmetic Multi-Variable Tracking',
    difficulty: 'Midterm Level',
    question: t`What are the final values of x, y, z, and q printed by this loop?`,
    codeSnippet: `int i;
double x, y, z, q;
q = x = y = z = 4;
for(i = 0; i < 4; i++) {
    x = x * 1.5;
    y *= 2;
    z /= 2;
    q += 4;
}
cout << "\\nx = " << x;
cout << "\\ny = " << y;
cout << "\\nz = " << z;
cout << "\\nq = " << q;`,
    options: [
      t`x = 20.25, y = 64, z = 0.25, q = 20`,
      t`x = 20.25, y = 32, z = 0.5, q = 16`,
      t`x = 24, y = 64, z = 0.25, q = 20`,
      t`x = 20.25, y = 64, z = 0, q = 20`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`All four variables are initialized to 4 and updated over 4 complete iterations (i = 0, 1, 2, 3).`,
      stepByStep: [],
      steps: [
        { title: 'x (geometric factor 1.5)', math: t`x = 4 \times (1.5)^{4} = 4 \times 5.0625 = 20.25` },
        { title: 'y (powers of 2)', math: t`y = 4 \times 2^{4} = 4 \times 16 = 64` },
        { title: 'z (floating division by 2)', math: t`z = 4 / 2^{4} = 4 / 16 = 0.25` },
        { title: 'q (arithmetic addition)', math: t`q = 4 + 4 \times 4 = 20` }
      ],
      answer: t`x = 20.25, y = 64, z = 0.25, q = 20`,
      whyWrong: {
        '1': t`Runs 3 iterations instead of 4 (i < 4 runs for i = 0, 1, 2, 3).`,
        '2': t`Miscalculates x as $4 + 4(5) = 24$ (treating multiplication as addition).`,
        '3': t`z = 0 assumes integer division, but z is declared as double!`
      },
      commonTrap: t`Assuming z becomes 0 due to integer division. Because z is declared as double, 4 / 2 / 2 / 2 / 2 maintains decimal precision yielding 0.25.`,
      reference: 'MIAE 215 Midterm Exam 2024'
    },
    source: [{ deck: CS2, chapter: CH, location: 'For loops and compound assignment operators' }]
  },
  {
    id: 'Q_MIAE215_E07',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Fall 2023, Q2(a) · Concordia University',
    topic: 'Array Traversal with Break Condition',
    difficulty: 'Exam Master',
    question: t`What is the exact output of the following C++ program?`,
    codeSnippet: `int a = 1, b = 2, B[] = { 11, 7, 6, 5 };
int i = 0, sum = 0;
while(1) {
    sum += B[i];
    if(i > 2) break;
    a += B[i+1];
    i++;
    cout << "\\n" << i << " " << a;
} 
b = sum - i;
cout << "\\n" << sum << " " << a << " " << b;`,
    options: [
      t`1 8\n2 14\n3 19\n29 19 26`,
      t`1 8\n2 14\n3 19\n4 24\n29 24 25`,
      t`0 8\n1 14\n2 19\n29 19 26`,
      t`1 8\n2 14\n3 19\n24 19 21`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Trace the infinite while(1) loop until the break condition i > 2 triggers.`,
      stepByStep: [],
      steps: [
        { title: 'Iteration 1 (i = 0)', math: t`\text{sum} = 0 + 11 = 11, \quad i > 2 \text{ is false}, \quad a = 1 + B[1] = 1 + 7 = 8, \quad i = 1 \;\Rightarrow\; \text{prints } 1\ 8` },
        { title: 'Iteration 2 (i = 1)', math: t`\text{sum} = 11 + 7 = 18, \quad i > 2 \text{ is false}, \quad a = 8 + B[2] = 8 + 6 = 14, \quad i = 2 \;\Rightarrow\; \text{prints } 2\ 14` },
        { title: 'Iteration 3 (i = 2)', math: t`\text{sum} = 18 + 6 = 24, \quad i > 2 \text{ is false}, \quad a = 14 + B[3] = 14 + 5 = 19, \quad i = 3 \;\Rightarrow\; \text{prints } 3\ 19` },
        { title: 'Iteration 4 (i = 3)', math: t`\text{sum} = 24 + 5 = 29, \quad i > 2 (3 > 2) \text{ is TRUE} \;\Rightarrow\; \text{break!}` },
        { title: 'Post-Loop Execution', math: t`b = \text{sum} - i = 29 - 3 = 26. \quad \text{Prints } 29\ 19\ 26` }
      ],
      answer: t`1 8\n2 14\n3 19\n29 19 26`,
      whyWrong: {
        '1': t`Assumes the loop ran a 4th time, updating a and printing 4 24 before breaking.`,
        '2': t`Prints i before incrementing (0 instead of 1).`,
        '3': t`sum = 24 missed adding B[3] = 5 on the break iteration.`
      },
      commonTrap: t`Forgetting that sum += B[i] executes BEFORE the break statement on the 4th iteration, so sum reaches 29, but a += B[i+1] is skipped by the break.`,
      reference: 'MIAE 215 Midterm Fall 2023'
    },
    source: [{ deck: CS, chapter: CH, location: 'Array indexing and while break execution' }]
  },
  {
    id: 'Q_MIAE215_E08',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Fall 2023, Q2(b) · Concordia University',
    topic: 'Post-Loop Out-of-Bounds Indexing',
    difficulty: 'Exam Master',
    question: t`What occurs when 'cout << A[i];' executes immediately after this for loop finishes?`,
    codeSnippet: `int i;
double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;
for(i = 0; i < 4; i++) {
    if(A[i] < -0.11) {
        x += 1;
    } else if (A[i] > 0.1) {
        x -= 10;
    } else {
        x = 7 + 1/(i+1);
    }
}
cout << A[i];`,
    options: [
      t`Undefined behavior / reads garbage data (out-of-bounds access at index 4)`,
      t`Prints 0.2 (the last element of the array)`,
      t`Prints -0.1 (the first element of the array)`,
      t`Compiler error because raw arrays cannot be read post-loop`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When a for loop with condition i < 4 terminates naturally, i has the value 4. Accessing A[4] on an array of length 4 is out-of-bounds.`,
      stepByStep: [],
      steps: [
        { title: 'Loop index on exit', note: t`The loop terminates when i < 4 becomes false, which occurs when i reaches 4.` },
        { title: 'Array bounds', note: t`Array A is declared as double A[4], so valid indices are 0, 1, 2, and 3.` },
        { title: 'Evaluating A[4]', note: t`Accessing index 4 is beyond the allocated memory of the array, triggering undefined behavior (garbage read or segmentation fault).` }
      ],
      answer: t`Undefined behavior / reads garbage data (out-of-bounds access at index 4)`,
      whyWrong: {
        '1': t`0.2 is at index 3 (A[3]). When the loop ends, i = 4, not 3!`,
        '2': t`-0.1 is at index 0.`,
        '3': t`C++ does not perform runtime array bounds checking by default; this compiles but causes undefined runtime behavior.`
      },
      commonTrap: t`Exam Trap: Students assume that after for(i=0; i<4; i++), the variable i retains the index of the last element processed (3). It actually holds 4!`,
      reference: 'MIAE 215 Midterm Fall 2023'
    },
    source: [{ deck: CS2, chapter: CH, location: 'Array boundaries and loop termination values' }]
  },
  {
    id: 'Q_MIAE215_P12',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1a) · Concordia University',
    topic: 'Operator Precedence and Explicit Type Casting',
    difficulty: 'Foundation',
    question: t`What is the exact numerical result of the C++ expression: \`(5 % 2) * int(1.5 + 2)\`?`,
    options: [
      t`\`3\``,
      t`\`3.5\``,
      t`\`4\``,
      t`\`1\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Operator precedence evaluates parentheses first: \`5 % 2 = 1\`, then \`1.5 + 2 = 3.5\`. The explicit functional cast \`int(3.5)\` truncates the fractional component to \`3\`. Finally, \`1 * 3 = 3\` (integer).`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate modulo in first parentheses', math: t`5 \\% 2 = 1` },
        { title: 'Evaluate arithmetic in second parentheses', math: t`1.5 + 2 = 3.5\text{ (promoted to double)}` },
        { title: 'Apply integer cast', math: t`\text{int}(3.5) = 3\text{ (fractional part truncated)}` },
        { title: 'Multiply results', math: t`1 \times 3 = 3` }
      ],
      answer: t`3`,
      whyWrong: {
        '1': t`3.5 assumes the explicit int cast was ignored or did not truncate.`,
        '2': t`4 assumes rounding up (round/ceil), but integer casting in C++ strictly truncates toward zero.`,
        '3': t`1 assumes int(1.5+2) was computed as int(1.5) = 1, forgetting the + 2 inside the parentheses.`
      },
      commonTrap: t`Thinking explicit \`int()\` rounds to the nearest integer. In C++, integer conversion always truncates (chops off) the decimal part toward zero!`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(a); Expressions & Operators'
    },
    source: [{ deck: 'Midterm 2024', chapter: '3 · Expressions & Operators', location: 'Question 1(a)' }]
  },
  {
    id: 'Q_MIAE215_P13',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1b) · Concordia University',
    topic: 'Math Library Floating Point Power Evaluation',
    difficulty: 'Foundation',
    question: t`What is the exact evaluation of the C++ function call \`pow(2.75, 2)\` from \`<cmath>\`?`,
    options: [
      t`\`7.5625\``,
      t`\`7.5\``,
      t`\`7\``,
      t`\`8.0\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`\`pow(double base, double exp)\` performs floating-point exponentiation. $2.75 = 11/4$, and $(11/4)^2 = 121/16 = 7.5625$. Both arguments are represented in double-precision without integer truncation.`,
      stepByStep: [],
      steps: [
        { title: 'Convert to fraction', math: t`2.75 = \frac{11}{4}` },
        { title: 'Square the fraction', math: t`\left(\frac{11}{4}\right)^2 = \frac{121}{16} = 7 + \frac{9}{16}` },
        { title: 'Convert back to decimal', math: t`\frac{9}{16} = 0.5625 \implies 7.5625` }
      ],
      answer: t`7.5625`,
      whyWrong: {
        '1': t`7.5 is an approximation that drops lower-order decimal places.`,
        '2': t`7 assumes integer truncation, but pow() returns a double.`,
        '3': t`8.0 assumes rounding up.`
      },
      commonTrap: t`Assuming \`pow\` truncates intermediate results to integers. It retains full double floating-point precision.`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(b); <cmath> Library'
    },
    source: [{ deck: 'Midterm 2024', chapter: '3 · Expressions & Operators', location: 'Question 1(b)' }]
  },
  {
    id: 'Q_MIAE215_P14',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1c) · Concordia University',
    topic: 'For Loop Control Flow with Dead Break Branch Trap',
    difficulty: 'Exam Master',
    question: t`What is printed by this C++ loop?`,
    codeSnippet: `for (int i = 0; i <= 10; i++) {
    if (i % 4 != 2)
        continue;
    else if (sqrt(i) == 3)
        break;
    cout << i << " ";
}`,
    options: [
      t`\`2 6 10 \``,
      t`\`2 6 \``,
      t`\`2 6 9 \``,
      t`\`2 6 9 10 \``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Scanned Exam Trap! At $i = 9$, $\sqrt{9} == 3$, but $9 \\% 4 = 1 \neq 2$, so the FIRST condition \`i % 4 != 2\` is true and executes \`continue\`! The \`else if (sqrt(i) == 3) break;\` branch is DEAD CODE and is never reached!`,
      stepByStep: [],
      steps: [
        { title: 'i = 0, 1', note: t`0%4 = 0 != 2, 1%4 = 1 != 2 -> continue` },
        { title: 'i = 2', note: t`2%4 = 2 -> else if: sqrt(2) != 3 -> prints "2 "` },
        { title: 'i = 3, 4, 5', note: t`3%4 = 3, 4%4 = 0, 5%4 = 1 -> continue` },
        { title: 'i = 6', note: t`6%4 = 2 -> else if: sqrt(6) != 3 -> prints "6 "` },
        { title: 'i = 7, 8', note: t`7%4 = 3, 8%4 = 0 -> continue` },
        { title: 'i = 9 (The Trap!)', note: t`9%4 = 1 != 2 -> triggers continue! The 'else if' with sqrt(9) == 3 is skipped!` },
        { title: 'i = 10', note: t`10%4 = 2 -> else if: sqrt(10) != 3 -> prints "10 "` }
      ],
      answer: t`2 6 10 `,
      whyWrong: {
        '1': t`Authentic Student Exam Error: Assuming the loop breaks when $i = 9$ because $\sqrt{9} = 3$. The first \`if\` condition executes \`continue\` before \`else if\` can ever be evaluated!`,
        '2': t`9 is not printed because $9 \\% 4 = 1 \neq 2$ triggers \`continue\`.`,
        '3': t`9 is never reached by \`cout\`.`
      },
      commonTrap: t`Failing to trace the \`if\` condition hierarchy. An \`else if\` branch will NEVER execute if the preceding \`if\` condition is met!`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(c); Control Statements'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(c)' }]
  },
  {
    id: 'Q_MIAE215_P15',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1d) · Concordia University',
    topic: 'While Loop Integer Division Digit Stripper',
    difficulty: 'Foundation',
    question: t`What is the final value of \`a\` after this loop completes?`,
    codeSnippet: `int num = 4321, a = 0;
while (num > 0) {
    num /= 10;
    a++;
}
cout << a;`,
    options: [
      t`\`4\``,
      t`\`3\``,
      t`\`5\``,
      t`\`0\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Each iteration divides \`num\` by 10 using integer division, stripping off one rightmost decimal digit. The loop runs exactly once per digit in the base-10 integer.`,
      stepByStep: [],
      steps: [
        { title: 'Iteration 1', math: t`num = 4321 / 10 = 432, \quad a = 1` },
        { title: 'Iteration 2', math: t`num = 432 / 10 = 43, \quad a = 2` },
        { title: 'Iteration 3', math: t`num = 43 / 10 = 4, \quad a = 3` },
        { title: 'Iteration 4', math: t`num = 4 / 10 = 0, \quad a = 4` },
        { title: 'Termination', note: t`num > 0 is now 0 > 0 (false). Loop exits with a = 4.` }
      ],
      answer: t`4`,
      whyWrong: {
        '1': t`Stopping early before stripping the final single digit 4.`,
        '2': t`Counting the terminating false condition as an extra iteration.`,
        '3': t`Confusing the final value of num (0) with the counter variable a.`
      },
      commonTrap: t`Forgetting that integer division $4 / 10 = 0$, which terminates the loop after precisely 4 iterations.`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(d); While Loops'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(d)' }]
  },
  {
    id: 'Q_MIAE215_P16',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1e) · Concordia University',
    topic: 'For Loop Halving Progression and Post-Loop Value',
    difficulty: 'Midterm Level',
    question: t`What is the exact output printed by this C++ code fragment?`,
    codeSnippet: `int i, j = 0;
for (i = 5; i > 0; i /= 2) {
    j++;
    cout << j;
}
cout << j;`,
    options: [
      t`\`1233\``,
      t`\`1234\``,
      t`\`123\``,
      t`\`0123\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Trace the loop step by step: $i = 5, 2, 1$. During the 3 iterations, $j$ becomes $1, 2, 3$, printing \`123\`. Post-loop, \`cout << j;\` prints the final value of $j$, which is \`3\`, yielding \`1233\`.`,
      stepByStep: [],
      steps: [
        { title: 'Iteration 1: i = 5 > 0', note: t`j = 1; prints 1; update i = 5/2 = 2` },
        { title: 'Iteration 2: i = 2 > 0', note: t`j = 2; prints 2; update i = 2/2 = 1` },
        { title: 'Iteration 3: i = 1 > 0', note: t`j = 3; prints 3; update i = 1/2 = 0` },
        { title: 'Exit: i = 0 (not > 0)', note: t`Loop terminates. j retains its value of 3.` },
        { title: 'Post-loop print', note: t`cout << j; prints 3. Total output: 1233.` }
      ],
      answer: t`1233`,
      whyWrong: {
        '1': t`Assuming j increments upon loop exit. j is only incremented inside the loop body.`,
        '2': t`Forgetting the post-loop statement \`cout << j;\` after the closing brace.`,
        '3': t`Printing j before incrementing.`
      },
      commonTrap: t`Overlooking the statement after the loop. Always check for code that executes immediately after loop termination!`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(e); For Loops'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(e)' }]
  },
  {
    id: 'Q_MIAE215_P17',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1f) · Concordia University',
    topic: 'Nested Loop Modulo Filter Accumulator',
    difficulty: 'Midterm Level',
    question: t`What is the value of \`result\` printed after this code executes?`,
    codeSnippet: `int result = 0;
for (int i = 1; i <= 4; i++) {
    if (i % 3 == 0) {
        for (int j = i; j <= 5; j++) {
            result += j;
        }
    }
}
cout << result;`,
    options: [
      t`\`12\``,
      t`\`15\``,
      t`\`9\``,
      t`\`0\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The outer loop tests $i = 1, 2, 3, 4$. Only $i = 3$ satisfies \`i % 3 == 0\`. The inner loop then executes with $j$ running from 3 to 5: $\\sum_{j=3}^5 j = 3 + 4 + 5 = 12$.`,
      stepByStep: [],
      steps: [
        { title: 'i = 1, 2', note: t`1%3 = 1 != 0, 2%3 = 2 != 0 -> inner loop skipped.` },
        { title: 'i = 3', note: t`3%3 = 0 -> enters inner loop for j = 3, 4, 5.` },
        { title: 'Inner loop accumulation', math: t`\text{result} = 3 + 4 + 5 = 12` },
        { title: 'i = 4', note: t`4%3 = 1 != 0 -> inner loop skipped.` }
      ],
      answer: t`12`,
      whyWrong: {
        '1': t`15 assumes j runs from 1 to 5 ($1+2+3+4+5=15$), ignoring the start condition \`j = i = 3\`.`,
        '2': t`9 drops the final iteration $j = 5$.`,
        '3': t`0 assumes the if condition is never satisfied.`
      },
      commonTrap: t`Misreading the inner loop initialization: \`int j = i\` starts at 3, NOT at 1!`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(f); Nested Loops'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(f)' }]
  },
  {
    id: 'Q_MIAE215_P18',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1g) · Concordia University',
    topic: 'Short-Circuit Logical Evaluation and Side-Effects',
    difficulty: 'Exam Master',
    question: t`What value of \`count\` is printed by the following code?`,
    codeSnippet: `int found = 1, count = 4;
if (!found || --count == 0) {
    count += 10;
}
cout << count;`,
    options: [
      t`\`3\``,
      t`\`4\``,
      t`\`14\``,
      t`\`13\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Short-circuit evaluation rule for \`||\`: if the first operand is false, the second operand MUST be evaluated! Here \`found = 1\`, so \`!found\` is \`0\` (false). Therefore, C++ evaluates \`--count == 0\`, decrementing \`count\` from 4 to 3. Since \`3 == 0\` is false, the \`if\` body is not entered, leaving \`count = 3\`.`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate first condition of ||', math: t`\text{found} = 1 \implies !\text{found} = 0\text{ (false)}` },
        { title: 'Check short-circuit rule', note: t`Because the LHS of || is false, C++ MUST evaluate the RHS to determine the boolean outcome!` },
        { title: 'Evaluate --count == 0', math: t`--\text{count} \text{ pre-decrements count from 4 to 3}. \\; 3 == 0 \text{ is false}.` },
        { title: 'Outcome', note: t`Both sides are false -> if-body (count += 10) is skipped. count remains 3.` }
      ],
      answer: t`3`,
      whyWrong: {
        '1': t`Exam Trap: Believing short-circuit occurred because \`found = 1\`, forgetting the \`!\` operator makes it FALSE, forcing the RHS decrement to execute!`,
        '2': t`14 assumes the if-body executed with an un-decremented count (4 + 10).`,
        '3': t`13 assumes the if-body executed after decrementing (3 + 10). But the condition was false!`
      },
      commonTrap: t`Overlooking the \`!\` negation operator in \`!found\`. Because \`!1\` is \`0\`, short-circuiting does NOT occur and \`--count\` executes!`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(g); Logical Operators'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(g)' }]
  },
  {
    id: 'Q_MIAE215_P19',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1h) · Concordia University',
    topic: 'While Loop with Continue Increment Skipping',
    difficulty: 'Midterm Level',
    question: t`What is the exact output printed by this while loop?`,
    codeSnippet: `int i = 2;
while (i <= 20) {
    if (i % 3 == 0) {
        i += 2;
        continue;
    }
    cout << i << " ";
    i += 2;
}`,
    options: [
      t`\`2 4 8 10 14 16 20 \``,
      t`\`2 4 6 8 10 12 14 16 18 20 \``,
      t`\`2 4 6 8 10 14 16 20 \``,
      t`Infinite loop at \`i = 6\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Even numbers up to 20 are tested. Whenever a number is a multiple of 3 (6, 12, 18), the \`if\` branch increments $i$ by 2 and calls \`continue\`, bypassing the \`cout\` statement. Because $i$ is incremented before \`continue\`, no infinite loop occurs.`,
      stepByStep: [],
      steps: [
        { title: 'i = 2, 4', note: t`Neither is divisible by 3 -> prints "2 4 "` },
        { title: 'i = 6', note: t`6%3 == 0 -> i becomes 8, continue skips cout` },
        { title: 'i = 8, 10', note: t`Neither is divisible by 3 -> prints "8 10 "` },
        { title: 'i = 12', note: t`12%3 == 0 -> i becomes 14, continue skips cout` },
        { title: 'i = 14, 16', note: t`Neither is divisible by 3 -> prints "14 16 "` },
        { title: 'i = 18', note: t`18%3 == 0 -> i becomes 20, continue skips cout` },
        { title: 'i = 20', note: t`20%3 == 2 != 0 -> prints "20 "` }
      ],
      answer: t`2 4 8 10 14 16 20 `,
      whyWrong: {
        '1': t`Prints all even numbers without filtering out multiples of 3 (6, 12, 18).`,
        '2': t`Fails to skip 6.`,
        '3': t`Infinite loop would only occur if \`i += 2\` was missing before \`continue\`.`
      },
      commonTrap: t`Thinking \`continue\` in a \`while\` loop always creates an infinite loop. Here \`i += 2\` explicitly executes inside the \`if\` block before \`continue\`!`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(h); While Loops'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(h)' }]
  },
  {
    id: 'Q_MIAE215_P20',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Exam Fall 2024 (Q1i) · Concordia University',
    topic: 'Compound Arithmetic Mutation over Multiple Iterations',
    difficulty: 'Midterm Level',
    question: t`What are the values of \`x, y, z, q\` after this loop executes?`,
    codeSnippet: `double x = 4;
int y = 4;
double z = 4;
int q = 4;
for (int k = 0; k < 4; k++) {
    x *= 1.5;
    y *= 2;
    z /= 2.0;
    q += 4;
}`,
    options: [
      t`\`x = 20.25, y = 64, z = 0.25, q = 20\``,
      t`\`x = 20.25, y = 32, z = 0.5, q = 16\``,
      t`\`x = 18.0, y = 64, z = 0.25, q = 20\``,
      t`\`x = 20.25, y = 64, z = 0, q = 20\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The loop executes exactly 4 times ($k = 0, 1, 2, 3$). Compute the closed form progression for each variable over 4 steps.`,
      stepByStep: [],
      steps: [
        { title: 'Variable x (geometric)', math: t`x = 4 \times (1.5)^4 = 4 \times 5.0625 = 20.25` },
        { title: 'Variable y (doubling)', math: t`y = 4 \times 2^4 = 4 \times 16 = 64` },
        { title: 'Variable z (floating halving)', math: t`z = 4 / 2^4 = 4 / 16 = 0.25` },
        { title: 'Variable q (arithmetic accumulation)', math: t`q = 4 + (4 \times 4) = 20` }
      ],
      answer: t`x = 20.25, y = 64, z = 0.25, q = 20`,
      whyWrong: {
        '1': t`Performs only 3 iterations ($k < 3$).`,
        '2': t`Computes x as $4 \times 1.5 \times 3 = 18.0$ linearly instead of multiplying by $1.5^4$.`,
        '3': t`Assumes integer truncation on z, but z is a double divided by 2.0.`
      },
      commonTrap: t`Treating geometric multiplication as linear addition, or truncating the double variable \`z\` to zero.`,
      reference: 'MIAE 215 Midterm Fall 2024 Question 1(i); Loops & Assignment'
    },
    source: [{ deck: 'Midterm 2024', chapter: '4 · Control Statements & Loops', location: 'Question 1(i)' }]
  },
  {
    id: 'Q_MIAE215_P21',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Examination Review (Q2) · Concordia University',
    topic: 'Integer Division Truncation in Relational Expressions',
    difficulty: 'Foundation',
    question: t`What is printed by the following code?`,
    codeSnippet: `int i = 9, j = 4;
if (i / j < 2.1) {
    cout << i / j;
} else {
    cout << double(i) / j;
}`,
    options: [
      t`\`2\``,
      t`\`2.25\``,
      t`\`2.1\``,
      t`Compiler error`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Scanned Exam Trap! In \`i / j\`, both \`i\` and \`j\` are \`int\`, so integer division truncates $9 / 4 = 2$. Then \`2 < 2.1\` is TRUE! The \`if\` branch executes, printing \`i / j = 2\`.`,
      stepByStep: [],
      steps: [
        { title: 'Evaluate i / j', math: t`9 / 4 = 2\text{ (integer division)}` },
        { title: 'Evaluate relational condition', math: t`2 < 2.1 \implies \text{TRUE}` },
        { title: 'Execute if branch', math: t`\text{cout} \ll i / j \implies \text{prints } 2` }
      ],
      answer: t`2`,
      whyWrong: {
        '1': t`Exam Trap: Mental math converts $9/4 = 2.25$, says $2.25 < 2.1$ is false, and selects the else branch. But C++ performs integer truncation first!`,
        '2': t`2.1 is the comparison threshold, not the printed value.`,
        '3': t`The code is completely valid C++.`
      },
      commonTrap: t`Forgetting that the division \`i / j\` inside the condition is integer division before being promoted to double for comparison with 2.1!`,
      reference: 'MIAE 215 Midterm Review Question 2; Expressions'
    },
    source: [{ deck: 'Midterm Review', chapter: '3 · Expressions & Operators', location: 'Question 2' }]
  },
  {
    id: 'Q_MIAE215_P22',
    courseId: 'MIAE215',
    chapter: 'past',
    pastPaper: 'Midterm Examination Review (Q4) · Concordia University',
    topic: 'Array Equality Verification Algorithm',
    difficulty: 'Midterm Level',
    question: t`Which code fragment correctly determines if two integer arrays \`A[5]\` and \`B[5]\` are completely equal?`,
    options: [
      t`\`bool eq = true; for(int i=0; i<5; i++) if(A[i] != B[i]) { eq = false; break; }\``,
      t`\`if (A == B) { eq = true; }\``,
      t`\`bool eq = false; for(int i=0; i<5; i++) if(A[i] == B[i]) eq = true;\``,
      t`\`bool eq = (sizeof(A) == sizeof(B));\``
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In C++, array names \`A\` and \`B\` decay to memory pointers. Comparing \`A == B\` compares memory addresses, not element values. To verify array equality, assume true, compare element-by-element, and break immediately upon finding any mismatch.`,
      stepByStep: [],
      steps: [
        { title: 'Pointer comparison trap', note: t`A == B checks whether both arrays reside at the same memory address, which is always false for two distinct arrays.` },
        { title: 'Correct linear scan', note: t`Initialize eq = true. If any A[i] != B[i], set eq = false and terminate early.` }
      ],
      answer: t`bool eq = true; for(int i=0; i<5; i++) if(A[i] != B[i]) { eq = false; break; }`,
      whyWrong: {
        '1': t`A == B compares memory addresses, never the array contents.`,
        '2': t`Setting eq = true on ANY match falsely reports arrays as equal if even just the last elements match.`,
        '3': t`sizeof() checks the allocated byte size of the types, not the values inside.`
      },
      commonTrap: t`Writing \`if (A == B)\` to compare two C-style arrays. This tests pointer address identity, not array equality!`,
      reference: 'MIAE 215 Midterm Review Question 4; Arrays & Algorithms'
    },
    source: [{ deck: 'Midterm Review', chapter: '4 · Control Statements & Loops', location: 'Question 4' }]
  }
];
