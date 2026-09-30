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
        '1': t`safe\\ncount = 4 assumes !found was true and short-circuited --count. But !1 is 0 (false).`,
        '2': t`safe\\ncount = 3 assumes the if condition evaluated to true.`,
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
  }
];
