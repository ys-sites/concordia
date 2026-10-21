import { PracticeQuestion } from '../types';
import { t } from './solutions/types';

// MIAE 215 teacher practice papers (Dr. Gordon): Fall 2023 Midterm Q2, Midterm Review #1,
// Quiz #1 and Quiz #2 (Tuesday/Thursday and Wednesday sections). Every output, count and limit
// below was checked by compiling the code with the course's Code::Blocks MinGW compiler.

const F23 = 'MIAE 215 Midterm Fall 2023';
const REV = 'MIAE 215 Midterm Review #1';
const Q1T = 'MIAE 215 Quiz #1 (Tuesday section)';
const Q1W = 'MIAE 215 Quiz #1 (Wednesday section)';
const Q2T = 'MIAE 215 Quiz #2 (Thursday section)';
const Q2W = 'MIAE 215 Quiz #2 (Wednesday section)';

let n = 0;
const m215 = (pastPaper: string, p: Omit<PracticeQuestion, 'courseId' | 'chapter' | 'pastPaper' | 'id'>): PracticeQuestion => ({
  id: `TX_MIAE215_${String(++n).padStart(2, '0')}`,
  courseId: 'MIAE215',
  chapter: 'teacher-exam',
  pastPaper,
  ...p
});

const F23_A = t`int a=1, b=2, B[] = { 11, 7, 6, 5 };
int i=0, sum = 0;
while(1) {
    sum += B[i];
    if(i > 2) break;
    a += B[i+1];
    i++;
    cout << "\n" << i << " " << a;
}
b = sum - i;
cout << "\n" << sum << " " << a << " " << b;`;

const F23_B = t`int i;
double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;
for(i=0;i<4;i++) {
    if(A[i] < -0.11) {
        x += 1;
    } else if (A[i] > 0.1) {
        x -= 10;
    } else {
        x = 7 + 1/(i+1);
    }
    cout << "\n" << x;
}
cout << "\n" << A[i];`;

const REV_2A = t`int i, j;
double A[2+1][2+1], x=1.0;
for(i=1;i<=2;i++) {
    for(j=1;j<=2;j++) {
        A[i][j] = j*i + j*j - 6;
        cout << A[i][j] << " ";
    }
    cout << endl;
}
for(i=1;i<=2;i++) {
    for(j=1;j<=2;j++) {
        if(A[i][j] < -1.0e-7) {
            x += A[i][j];
        } else if (A[i][j] > 1.0e-7) {
            x -= 10;
        } else {
            x -= 100;
        }
        cout << "\n" << x;
    }
}`;

export const MIAE215_TEACHER_EXAM: PracticeQuestion[] = [
  // ------------------------------------------------------------------ Fall 2023 Midterm, Q2(a)
  m215(`${F23}, Q2(a)`, {
    topic: 'Output Tracing',
    difficulty: 'Midterm Level',
    question: 'Trace the program with the table method. What ends up in the output box?',
    codeSnippet: F23_A,
    options: [
      t`1 8
2 14
3 19
29 19 26`,
      t`1 8
2 14
3 19
24 19 21`,
      t`1 8
2 14
3 19
4 24
29 24 25`,
      t`0 1
1 8
2 14
29 19 26`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Table method: keep one column per variable, update only what changes on each line, and copy every cout into the output box as soon as it runs.',
      stepByStep: [
        'Start: i = 0, sum = 0, a = 1, b = 2.',
        'Pass 1: sum = 11; i > 2 is false; a = 1 + B[1] = 8; i = 1; print "1 8".',
        'Pass 2: sum = 18; a = 8 + B[2] = 14; i = 2; print "2 14".',
        'Pass 3: sum = 24; a = 14 + B[3] = 19; i = 3; print "3 19".',
        'Pass 4: sum = 24 + B[3] = 29; now i > 2 is true, so break.',
        'b = sum − i = 29 − 3 = 26; print "29 19 26".'
      ],
      whyWrong: {
        '1': 'The fourth pass still runs sum += B[3] before the break test, so sum is 29, not 24.',
        '2': 'The break happens before a and i change on the fourth pass, so there is no "4 24" line.',
        '3': 'The cout is the last line of the loop body, after i++ and a += ...: the first line is "1 8".'
      },
      commonTrap: 'Stopping the trace at the break test and forgetting that sum was already updated on that pass.',
      reference: 'Fall 2023 Midterm Q2(a) official solution (9 marks)'
    }
  }),
  m215(`${F23}, Q2(a)`, {
    topic: 'Output Tracing',
    difficulty: 'Midterm Level',
    question: 'In the same program, what are i and sum at the moment the loop breaks?',
    codeSnippet: F23_A,
    options: ['i = 3, sum = 29', 'i = 3, sum = 24', 'i = 4, sum = 29', 'i = 4, sum = 34'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Order matters inside a loop body: statements above the break run on the final pass, statements below it do not.',
      stepByStep: ['After pass 3, i = 3 and sum = 24.', 'Pass 4 adds B[3] = 5: sum = 29.', 'The test i > 2 is now true, so the loop exits before i++ runs: i stays 3.'],
      whyWrong: {
        '1': 'sum += B[i] sits above the break, so B[3] is added on the last pass.',
        '2': 'i++ is below the break and does not run on the last pass.',
        '3': 'There is no fifth element; the loop never reads B[4].'
      },
      commonTrap: 'Assuming the loop counter is always one past the last index used.',
      reference: 'Fall 2023 Midterm Q2(a) official solution, trace table'
    }
  }),
  m215(`${F23}, Q2(a)`, {
    topic: 'Output Tracing',
    difficulty: 'Foundation',
    question: 'How many times does the cout inside the while(1) loop run?',
    codeSnippet: F23_A,
    options: ['3 times', '4 times', '2 times', 'Forever: while(1) never ends'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'while(1) is an infinite loop that only ends through a break. Count the passes that reach the cout before the break fires.',
      stepByStep: ['Passes 1, 2 and 3 reach the cout (i = 0, 1, 2 at the break test).', 'On pass 4, i = 3 > 2, so the break exits before the cout.'],
      whyWrong: {
        '1': 'The fourth pass breaks out before reaching the cout.',
        '2': 'The break test fails for i = 0, 1 and 2: three full passes.',
        '3': 'The break statement ends the loop once i > 2.'
      },
      commonTrap: 'Counting loop passes instead of passes that reach the cout.',
      reference: 'Fall 2023 Midterm Q2(a) official solution'
    }
  }),
  // ------------------------------------------------------------------ Fall 2023 Midterm, Q2(b)
  m215(`${F23}, Q2(b)`, {
    topic: 'Output Tracing',
    difficulty: 'Midterm Level',
    question: 'Which four values does the for loop print (one per line)?',
    codeSnippet: F23_B,
    options: [
      t`8
−2
7
−3`,
      t`8
−2
7.33333
−3`,
      t`2
−8
7
−3`,
      t`8
−2
8
−3`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Check each condition with the exact numbers, and watch for integer division inside a double expression.',
      stepByStep: [
        'i = 0: −0.1 < −0.11? No. −0.1 > 0.1? No. Else: x = 7 + 1/1 = 8.',
        'i = 1: 0.11 > 0.1, so x = 8 − 10 = −2.',
        'i = 2: 0.0 matches neither test. Else: x = 7 + 1/3 = 7 + 0 = 7 (int ÷ int).',
        'i = 3: 0.2 > 0.1, so x = 7 − 10 = −3.'
      ],
      whyWrong: {
        '1': '1/(i+1) is int ÷ int, so 1/3 is 0, not 0.33333.',
        '2': '−0.1 is greater than −0.11, so the first branch does not run for i = 0.',
        '3': 'For i = 2, 1/(2+1) = 0, so x = 7, not 8.'
      },
      commonTrap: 'Comparing negatives the wrong way: −0.1 is greater than −0.11.',
      reference: 'Fall 2023 Midterm Q2(b) official solution (5 marks)'
    }
  }),
  m215(`${F23}, Q2(b)`, {
    topic: 'Output Tracing',
    difficulty: 'Foundation',
    question: 'At i = 2, what does the expression 1/(i+1) evaluate to?',
    codeSnippet: F23_B,
    options: ['0, because int ÷ int truncates', '0.333333, a double result', '1, because the result rounds up', '0.3, rounded to one decimal'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'When both operands are integers, / is integer division and the fraction is discarded, even if the result is later stored in a double.',
      stepByStep: ['1 and (i+1) = 3 are both int.', '1/3 is computed in integer arithmetic: 0.', 'Only then is 7 + 0 converted to double for x.'],
      whyWrong: {
        '1': 'The division is done before any conversion to double. Writing 1.0/(i+1) would give 0.333.',
        '2': 'Integer division truncates toward zero; it never rounds up.',
        '3': 'There is no rounding to decimals; the fraction is dropped completely.'
      },
      commonTrap: 'Thinking that assigning to a double makes the division a double division.',
      reference: 'Fall 2023 Midterm Q2(b) solution comment: "1/(i+1) integer truncates"'
    }
  }),
  m215(`${F23}, Q2(b)`, {
    topic: 'Output Tracing',
    difficulty: 'Midterm Level',
    question: 'What does the last statement, cout << "\\n" << A[i];, print?',
    codeSnippet: F23_B,
    options: ['A garbage value: i is 4, past the end', '0.2, the last element of A', '0: missing elements read as zero', 'Nothing: the program fails to compile'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'After for(i=0;i<4;i++) finishes, i equals 4. A has indices 0–3, so A[4] reads memory outside the array: undefined, written as G (garbage) on the exam.',
      stepByStep: ['The loop exits when i < 4 is false, so i = 4.', 'A[4] is out of bounds.', 'C++ does not check bounds: it prints whatever is in that memory.'],
      whyWrong: {
        '1': 'That would be A[3]; i is 4 after the loop.',
        '2': 'C++ does not zero-fill reads beyond the array.',
        '3': 'Out-of-bounds access compiles; the error only shows at run time.'
      },
      commonTrap: 'Forgetting that the loop variable keeps its final value after the loop.',
      reference: 'Fall 2023 Midterm Q2(b) official solution: output "G (garbage)"'
    }
  }),
  // ------------------------------------------------------------------ Midterm Review #1, Q2(a)
  m215(`${REV}, Q2(a)`, {
    topic: 'Nested Loops & 2D Arrays',
    difficulty: 'Midterm Level',
    question: 'What two lines does the first pair of nested loops print?',
    codeSnippet: REV_2A,
    options: [
      t`−4 0
−3 2`,
      t`−4 −3
0 2`,
      t`−4 −1
−1 2`,
      t`−5 −2
−5 −2`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'The outer loop picks the row i, the inner loop runs through the columns j, and endl closes each row.',
      stepByStep: [
        'i = 1, j = 1: 1·1 + 1 − 6 = −4. j = 2: 2·1 + 4 − 6 = 0. Row: "−4 0".',
        'i = 2, j = 1: 1·2 + 1 − 6 = −3. j = 2: 2·2 + 4 − 6 = 2. Row: "−3 2".'
      ],
      whyWrong: {
        '1': 'This is the transpose: each printed row has a fixed i, not a fixed j.',
        '2': 'This uses i*i instead of j*i.',
        '3': 'This drops the j*i term.'
      },
      commonTrap: 'Mixing up which index is the row (outer loop) and which is the column (inner loop).',
      reference: 'Midterm Review #1, Question 2(a)'
    }
  }),
  m215(`${REV}, Q2(a)`, {
    topic: 'Nested Loops & 2D Arrays',
    difficulty: 'Midterm Level',
    question: 'What four values of x does the second pair of nested loops print?',
    codeSnippet: REV_2A,
    options: [
      t`−3
−103
−106
−116`,
      t`−3
−13
−16
−26`,
      t`5
−95
−92
−102`,
      t`−3
−103
−106
−104`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Run each element through the if / else-if / else ladder in row order, carrying x forward.',
      stepByStep: [
        'A[1][1] = −4 < −1e−7: x = 1 + (−4) = −3.',
        'A[1][2] = 0: neither test is true, else: x = −3 − 100 = −103.',
        'A[2][1] = −3: x = −103 + (−3) = −106.',
        'A[2][2] = 2 > 1e−7: x = −106 − 10 = −116.'
      ],
      whyWrong: {
        '1': 'This treats 0 as positive (x −= 10). 0 is not greater than 1e−7, so the else branch subtracts 100.',
        '2': 'This subtracts A[i][j] instead of adding it in the first branch.',
        '3': 'The last element is positive, so x −= 10 runs: −116, not x += 2.'
      },
      commonTrap: 'Sending 0 into the "positive" branch.',
      reference: 'Midterm Review #1, Question 2(a)'
    }
  }),
  m215(`${REV}, Q2(a)`, {
    topic: 'Nested Loops & 2D Arrays',
    difficulty: 'Foundation',
    question: 'Why does the element equal to 0 end up in the final else branch?',
    codeSnippet: REV_2A,
    options: [
      'It is neither below −1e−7 nor above 1e−7',
      'Doubles equal to 0 are stored as −0.0',
      'Mixing int and double skips both tests',
      'An else always runs after an else-if'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Comparing a double against small tolerances (±1.0e−7) is the safe way to test for "zero"; values in that band fall through to the else.',
      stepByStep: ['0 < −1.0e−7 is false.', '0 > 1.0e−7 is false.', 'So the else (x −= 100) runs.'],
      whyWrong: {
        '1': 'j*i + j*j − 6 gives +0, and −0.0 would compare the same way anyway.',
        '2': 'The int result is converted to double; both comparisons are evaluated normally.',
        '3': 'Only one branch of an if / else-if / else ladder runs.'
      },
      commonTrap: 'Thinking == 0 is always reliable for doubles. Round-off can make "zero" slightly non-zero, which is why tolerances are used.',
      reference: 'Midterm Review #1, Question 2(a)'
    }
  }),
  m215(`${REV}, Q2(a)`, {
    topic: 'Nested Loops & 2D Arrays',
    difficulty: 'Foundation',
    question: 'Why is A declared as A[2+1][2+1] when the loops only run i and j up to 2?',
    codeSnippet: REV_2A,
    options: [
      'Index 2 needs size 3; index 0 just goes unused',
      'C++ needs one spare slot to end each array',
      'It makes A[3][3] a valid element to use',
      '2D arrays must be declared one size larger'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'An array of size N has indices 0 to N−1. To use index 2 you need size at least 3.',
      stepByStep: ['The loops use indices 1 and 2.', 'Size 3 gives indices 0, 1, 2.', 'Row/column 0 is allocated but never used: 1-based indexing.'],
      whyWrong: {
        '1': 'That is the null terminator of char strings, not numeric arrays.',
        '2': 'Size 3 gives indices 0–2; A[3][3] is out of bounds.',
        '3': 'There is no such rule; the size is whatever indices you need.'
      },
      commonTrap: 'Off-by-one: declaring A[2][2] and then writing A[2][2], which is out of bounds.',
      reference: 'Midterm Review #1, Question 2(a)'
    }
  }),
  // ------------------------------------------------------------------ Midterm Review #1, Q1
  m215(`${REV}, Q1`, {
    topic: 'Array Algorithms',
    difficulty: 'Midterm Level',
    question: 'A student checks whether two 5-element arrays are equal with this loop. For A1 = {1, 2, 3, 4, 5} and A2 = {1, 9, 3, 4, 5}, what is printed?',
    codeSnippet: t`bool eq = true;
for(int i=0; i<5; i++) {
    if(A1[i] != A2[i]) eq = false;
    else eq = true;
}
if(eq) cout << "A1 and A2 are equal";
else cout << "A1 and A2 are not equal";`,
    options: [
      '"A1 and A2 are equal": the flag is reset',
      '"A1 and A2 are not equal": element 2 differs',
      '"A1 and A2 are equal": the loop stops at i = 0',
      'Nothing: eq is never used after the loop'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'A flag search must only ever move one way. The else branch overwrites eq on every pass, so only the last pair decides the result.',
      stepByStep: ['i = 1 sets eq = false (2 ≠ 9).', 'i = 2, 3, 4 all match, and each sets eq = true again.', 'After the loop eq is true, so it wrongly prints "equal".', 'Fix: delete the else (or break on the first mismatch).'],
      whyWrong: {
        '1': 'That is what the correct program prints. This one resets eq on later passes.',
        '2': 'There is no break; the loop runs all five passes.',
        '3': 'eq selects which message prints after the loop.'
      },
      commonTrap: 'Adding an else that "resets" the flag. That is the bug the teacher’s hint is about.',
      reference: 'Midterm Review #1, Question 1(b) and its hint'
    }
  }),
  m215(`${REV}, Q1`, {
    topic: 'Array Algorithms',
    difficulty: 'Midterm Level',
    question: 'Which code correctly decides whether all 5 elements of A1 and A2 are equal?',
    options: [
      t`eq = true;
for (i = 0; i < 5; i++) {
    if (A1[i] != A2[i]) {
        eq = false;
        break;
    }
}`,
      t`eq = false;
for (i = 0; i < 5; i++) {
    if (A1[i] == A2[i]) {
        eq = true;
    }
}`,
      t`eq = true;
for (i = 0; i < 5; i++) {
    if (A1[i] == A2[i])
        eq = true;
    else
        break;
}`,
      t`eq = true;
if (A1 == A2) { // compares pointer addresses
    eq = true;
} else {
    eq = false;
}`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Assume "equal", then look for one counter-example; one mismatch is enough to stop. This is the teacher’s "check if one element is not equal" approach.',
      stepByStep: ['Start with eq = true.', 'The first mismatch sets eq = false and break skips the rest.', 'If no mismatch is found, eq stays true.'],
      whyWrong: {
        '1': 'This only checks that some element matches: {1,9,9,9,9} vs {1,2,3,4,5} would count as equal.',
        '2': 'eq is never set to false, so the result is always "equal".',
        '3': 'A1 == A2 compares the arrays’ addresses, not their contents: false for two different arrays.'
      },
      commonTrap: 'Writing A1 == A2 for arrays. You must compare element by element.',
      reference: 'Midterm Review #1, Question 1 (both methods in the hint)'
    }
  }),
  // ------------------------------------------------------------------ Quiz #2 (Thursday)
  m215(`${Q2T}, part (a)`, {
    topic: 'Array Algorithms',
    difficulty: 'Exam Master',
    question: 'Elements are input alternating A[0], B[0], A[1], B[1], … until a value below −1.0e6 is entered or n reaches 1000. Which loop does exactly that?',
    options: [
      t`n = 0;
while (n < 1000) {
    cin >> A[n];
    if (A[n] < -1.0e6) break;

    cin >> B[n];
    if (B[n] < -1.0e6) break;

    n++;
}`,
      t`for (n = 0; n <= 1000; n++) {
    cin >> A[n] >> B[n];
    if (A[n] < -1.0e6 || B[n] < -1.0e6) break;
}`,
      t`n = 0;
while (A[n] > -1.0e6 && n < 1000) { // test before input
    cin >> A[n] >> B[n];
    n++;
}`,
      t`n = 0;
do {
    cin >> A[n] >> B[n];
    n++;
} while (B[n] > -1.0e6 && n < 1000); // test after increment`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Test the sentinel right after each value is read, and keep the counter inside the array bounds (0–999).',
      stepByStep: ['n < 1000 keeps every index valid.', 'Each input is checked as soon as it arrives, so a sentinel in A stops before B is read.', 'n counts the complete A/B pairs read.'],
      whyWrong: {
        '1': 'n <= 1000 allows A[1000], one past the end, and it always waits for B even after A was the sentinel.',
        '2': 'A[n] is tested before anything has been read into it (uninitialised memory).',
        '3': 'After n++ the test looks at B[n], the next element, which has not been read yet.'
      },
      commonTrap: 'Testing an element before reading it, or after the index has already moved on.',
      reference: 'Quiz #2 (Thursday), part (a)'
    }
  }),
  m215(`${Q2T}, part (c)`, {
    topic: 'Array Algorithms',
    difficulty: 'Midterm Level',
    question: 'This code is meant to print the minimum of A = {3.5, 2.0, 8.1, 4.4}. What does it actually print?',
    codeSnippet: t`double m = 0;
for(int i=0; i<4; i++) {
    if(A[i] < m) m = A[i];
}
cout << m;`,
    options: ['0', '2', '3.5', '8.1'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'A running minimum must start from a real element (m = A[0]), never from an arbitrary value like 0.',
      stepByStep: ['m starts at 0.', 'Every element is positive, so A[i] < 0 is never true.', 'm stays 0, and 0 is not even in the array.', 'Fix: m = A[0]; then loop from i = 1.'],
      whyWrong: {
        '1': 'That is the true minimum, which you get only after starting from m = A[0].',
        '2': 'A[0] is never copied into m, because 3.5 < 0 is false.',
        '3': 'That would be a running maximum.'
      },
      commonTrap: 'Initialising min to 0 (or max to 0). It fails whenever all the values are on one side of 0.',
      reference: 'Quiz #2 (Thursday), part (c)'
    }
  }),
  m215(`${Q2T}, parts (d)–(e)`, {
    topic: 'Array Algorithms',
    difficulty: 'Foundation',
    question: 'Part (d) adds the elements of B and part (e) multiplies the elements of A. What must the two accumulators start at?',
    options: ['sum = 0, product = 1', 'sum = 0, product = 0', 'sum = 1, product = 1', 'sum = B[1], product = A[1]'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Start each accumulator at the identity of its operation: 0 for addition (x + 0 = x), 1 for multiplication (x · 1 = x).',
      stepByStep: ['sum = 0; for each i: sum += B[i].', 'product = 1; for each i: product *= A[i].'],
      whyWrong: {
        '1': 'Starting a product at 0 makes every result 0.',
        '2': 'Starting a sum at 1 adds an extra 1 to the answer.',
        '3': 'That skips (or double-counts) element 0 depending on the loop.'
      },
      commonTrap: 'Copy-pasting the sum loop for the product and leaving the 0.',
      reference: 'Quiz #2 (Thursday), parts (d) and (e)'
    }
  }),
  m215(`${Q2T}, part (f)`, {
    topic: 'Loops, Menus & Input Validation',
    difficulty: 'Exam Master',
    question: 'Using an infinite loop, find the first positive integer k for which |x^k / k!| < 1.0e−9, with x = A[0] = 2.0. What k does this program print?',
    codeSnippet: t`double x = 2.0, term = 1.0;
int k = 0;
while(1) {
    k++;
    term *= x / k;          // term = x^k / k!
    if(fabs(term) < 1.0e-9) break;
}
cout << k;`,
    options: ['17', '16', '18', '13'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Each term follows from the previous one: x^k/k! = (x^(k−1)/(k−1)!) · x/k. Stop the infinite loop with break when the condition first holds.',
      stepByStep: [],
      steps: [
        { title: 'k = 16 is still too big', math: t`\frac{2^{16}}{16!} = \frac{65\,536}{2.09\times10^{13}} = 3.1\times10^{-9} > 10^{-9}` },
        { title: 'k = 17 is the first below the tolerance', math: t`\frac{2^{17}}{17!} = \frac{131\,072}{3.56\times10^{14}} = 3.7\times10^{-10} < 10^{-9}` },
        { title: 'Result', note: 'The loop breaks with k = 17 (confirmed by running the program).' }
      ],
      answer: t`k = 17`,
      whyWrong: {
        '1': '2^16/16! ≈ 3.1e−9, which is not yet below 1.0e−9.',
        '2': 'The loop stops at the first k that works, which is 17.',
        '3': 'k = 13 is the answer for x = 1.0, not 2.0.'
      },
      commonTrap: 'Off-by-one from incrementing k after the test instead of before.',
      reference: 'Quiz #2 (Thursday), part (f)'
    }
  }),
  m215(`${Q2T}, part (f)`, {
    topic: 'Loops, Menus & Input Validation',
    difficulty: 'Midterm Level',
    question: 'Why update the term with term *= x / k; instead of computing pow(x, k) / factorial(k) with int factorials on every pass?',
    options: [
      'An int k! overflows once k ≥ 13',
      'pow() cannot take a double base',
      'Division is not allowed inside loops',
      'abs() only works on whole numbers'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Factorials grow faster than any int can hold: 13! = 6,227,020,800 is larger than INT_MAX = 2,147,483,647. The incremental update keeps every number small and needs one multiplication per pass.',
      stepByStep: ['12! = 479,001,600 still fits in an int.', '13! overflows, and the answer for x = 2 needs k = 17.', 'term *= x/k never builds the huge numbers.'],
      whyWrong: {
        '1': 'pow(double, int) is fine.',
        '2': 'There is no such restriction.',
        '3': 'Use fabs() for doubles. abs() on an int argument truncates, but that is not why the incremental form is used.'
      },
      commonTrap: 'Using abs() instead of fabs() on doubles. Use fabs (or std::abs from <cmath>).',
      reference: 'Quiz #2 (Thursday), part (f)'
    }
  }),
  // ------------------------------------------------------------------ Quiz #2 (Wednesday)
  m215(`${Q2W}, part (a)`, {
    topic: 'Loops, Menus & Input Validation',
    difficulty: 'Midterm Level',
    question: 'Part (a): input n where n ≤ 100; if it is out of range print an error and ask again, until a valid n is entered. Which loop does this?',
    options: [
      t`do {
    cin >> n;
    if (n > 100) cout << "error\n";
} while (n > 100);`,
      t`cin >> n;
if (n > 100) {
    cout << "error\n";
    cin >> n;
}`,
      t`while (n > 100) {
    cin >> n;
    cout << "error\n";
}`,
      t`do {
    cin >> n;
    cout << "error\n";
} while (n <= 100);`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Input validation needs a loop that runs at least once and repeats while the input is invalid: a do-while.',
      stepByStep: ['The do body always reads n first.', 'The error prints only for bad input.', 'while(n > 100) repeats only while n is still invalid.'],
      whyWrong: {
        '1': 'It only asks again once; a second bad value is accepted.',
        '2': 'n is tested before it is ever read, and "error" prints even after a good value.',
        '3': 'The condition is inverted: it repeats on valid input and stops on invalid input.'
      },
      commonTrap: 'Using an if (one retry) where a loop (unlimited retries) is needed.',
      reference: 'Quiz #2 (Wednesday), part (a)'
    }
  }),
  m215(`${Q2W}, part (f)`, {
    topic: 'Array Algorithms',
    difficulty: 'Foundation',
    question: 'Part (f) prints the dot product of A and B. For A = {1, 2, 3} and B = {4, −5, 6}, what is printed?',
    codeSnippet: t`double dot = 0;
for(int i=0; i<n; i++) dot += A[i] * B[i];
cout << dot;`,
    options: ['12', '32', '30', '11'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Dot product: multiply matching elements and add the products.',
      stepByStep: ['1·4 = 4', '2·(−5) = −10', '3·6 = 18', '4 − 10 + 18 = 12'],
      whyWrong: {
        '1': 'This drops the minus sign on −5.',
        '2': 'This is (sum of A) × (sum of B) = 6 × 5.',
        '3': 'This adds all the elements instead of multiplying pairs.'
      },
      commonTrap: 'Losing the sign of negative elements.',
      reference: 'Quiz #2 (Wednesday), part (f)'
    }
  }),
  m215(`${Q2W}, part (h)`, {
    topic: 'Loops, Menus & Input Validation',
    difficulty: 'Exam Master',
    question: 'Part (h): the menu (k = 1, 2, 3) repeats until every valid item has been chosen at least once. Each choice sets done1, done2 or done3 to true. Which do-while condition ends the loop at the right time?',
    codeSnippet: t`bool done1=false, done2=false, done3=false;
do {
    cin >> k;
    if(k == 1) { /* average of A */ done1 = true; }
    else if(k == 2) { /* min of B */ done2 = true; }
    else if(k == 3) { /* dot product */ done3 = true; }
    else { cout << "error"; return 0; }
} while( ???? );`,
    options: ['!(done1 && done2 && done3)', '!(done1 || done2 || done3)', 'done1 && done2 && done3', 'k != 1 && k != 2 && k != 3'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Repeat while NOT (all items done). By De Morgan this is the same as !done1 || !done2 || !done3.',
      stepByStep: ['The loop must continue while at least one item is still undone.', '"All done" is done1 && done2 && done3.', 'So repeat while !(done1 && done2 && done3).'],
      whyWrong: {
        '1': 'This stops as soon as any one item has been chosen.',
        '2': 'This repeats only when all are already done, so it exits after the first pass.',
        '3': 'Invalid k already ends the program (part g), and valid k would stop the loop immediately.'
      },
      commonTrap: 'Confusing "all done" (&&) with "any done" (||) when negating.',
      reference: 'Quiz #2 (Wednesday), parts (g)–(h)'
    }
  }),
  // ------------------------------------------------------------------ Quiz #1 (Tuesday)
  m215(`${Q1T}, Q1`, {
    topic: 'Input, Output & Formatting',
    difficulty: 'Foundation',
    question: 'Q1 inputs 3 real numbers and prints "input is greater than 7.5" for each input above 7.5. Which code does that?',
    options: [
      t`if (a > 7.5) cout << msg;
if (b > 7.5) cout << msg;
if (c > 7.5) cout << msg;`,
      t`if (a > 7.5) cout << msg;
else if (b > 7.5) cout << msg;
else if (c > 7.5) cout << msg;`,
      t`if ((a + b + c) / 3.0 > 7.5) { // compare average once
    cout << msg;
}`,
      t`if (a > 7.5 && b > 7.5 && c > 7.5) { // all three together
    cout << msg;
}`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Independent checks need independent if statements. An else-if chain stops at the first true test.',
      stepByStep: ['Each input gets its own test.', 'With inputs 8, 9, 2 the message prints twice, once for each large input.'],
      whyWrong: {
        '1': 'Once a > 7.5 is true the remaining tests are skipped: at most one message.',
        '2': 'This tests the average, not each input.',
        '3': 'This prints only when all three are above 7.5, and only once.'
      },
      commonTrap: 'Reaching for else-if when the conditions are not mutually exclusive.',
      reference: 'Quiz #1 (Tuesday), Question 1'
    }
  }),
  m215(`${Q1T}, Q1`, {
    topic: 'Input, Output & Formatting',
    difficulty: 'Foundation',
    question: 'A student declares int a, b, c; instead of double, then enters 7, 8, 8. What does cout << (a + b + c) / 3; print?',
    options: ['7', '7.66667', '8', '7.7'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'int / int is integer division. The quiz asks for real numbers, so use double (or divide by 3.0).',
      stepByStep: ['a + b + c = 23 (int).', '23 / 3 = 7 with the remainder discarded.', 'With double variables or / 3.0 the result is 7.66667.'],
      whyWrong: {
        '1': 'That needs a double division (double variables or 3.0).',
        '2': 'Integer division truncates; it does not round 7.67 up to 8.',
        '3': 'There is no rounding to one decimal, and the division is done in integers anyway.'
      },
      commonTrap: 'Declaring int for values the question calls "real numbers".',
      reference: 'Quiz #1 (Tuesday), Question 1'
    }
  }),
  m215(`${Q1T}, Q2`, {
    topic: 'Input, Output & Formatting',
    difficulty: 'Midterm Level',
    question: 'Q2 prints a table of x, sin(x) and exp(x) in e-notation with five digits after the decimal point (e.g. 9.98334e-2). Which statement formats sin(0.1) that way?',
    options: [
      t`cout << scientific << setprecision(5) << sin(0.1);`,
      t`cout << fixed << setprecision(5) << sin(0.1);`,
      t`cout << setprecision(5) << sin(0.1);`,
      t`cout << setw(5) << scientific << sin(0.1);`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'scientific switches to e-notation and then setprecision(n) sets the digits after the decimal point (needs #include <iomanip>). Columns are separated with the tab character \\t.',
      stepByStep: ['scientific << setprecision(5) gives 9.98334e-002 on the course compiler (MinGW prints three exponent digits).', 'Each row: cout << x << "\\t" << sin(x) << "\\t" << exp(x) << endl;'],
      whyWrong: {
        '1': 'fixed gives 0.09983: no exponent.',
        '2': 'Without scientific, setprecision counts significant digits: 0.099833.',
        '3': 'setw sets the field width, not the precision; you get the default 6 digits.'
      },
      commonTrap: 'Forgetting that setprecision means different things with and without scientific/fixed.',
      reference: 'Quiz #1 (Tuesday), Question 2'
    }
  }),
  m215(`${Q1T}, Q2`, {
    topic: 'Input, Output & Formatting',
    difficulty: 'Midterm Level',
    question: 'The table needs exactly 11 rows (x = 0, 0.1, …, 1.0). Why is a loop over int i = 0 … 10 with x = 0.1 * i safer than for(x = 0; x <= 1.0; x += 0.1)?',
    options: [
      '0.1 is not exact in binary, so x drifts',
      'A for loop cannot step by fractions',
      'The int version prints one row faster',
      'sin() and exp() only accept int input'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: '0.1 has no exact binary representation, so repeated additions accumulate round-off.',
      stepByStep: ['After ten additions x = 0.99999999999999989, not 1.0 (checked with setprecision(17)).', 'So tests like x == 1.0 or x <= 1.0 can give one row too many or too few.', 'With an int counter the row count is exact, and x = 0.1*i has no accumulated error.'],
      whyWrong: {
        '1': 'A for loop can step by any amount; the issue is precision.',
        '2': 'Speed is not the concern; the row count is.',
        '3': 'Both take double arguments.'
      },
      commonTrap: 'Using == or != with an accumulated double as a loop end condition.',
      reference: 'Quiz #1 (Tuesday), Question 2'
    }
  }),
  m215(`${Q1T}, Q3`, {
    topic: 'Variable Limits & Overflow',
    difficulty: 'Midterm Level',
    question: 'Q3 finds the largest unsigned long by counting up. On the course compiler (Code::Blocks / MinGW on Windows), what are the smallest value, the size, and the largest value of an unsigned long?',
    options: [
      '0;  4 bytes;  4,294,967,295',
      '0;  8 bytes;  18,446,744,073,709,551,615',
      '−2,147,483,648;  4 bytes;  2,147,483,647',
      '1;  4 bytes;  4,294,967,296'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'unsigned types have no negatives: range 0 … 2^(8·size) − 1. On Windows (MinGW, MSVC) long is 4 bytes, so 2^32 − 1.',
      stepByStep: ['sizeof(unsigned long) = 4 on the course compiler.', 'Smallest: 0.', 'Largest: 2^32 − 1 = 4,294,967,295 (ULONG_MAX).'],
      whyWrong: {
        '1': 'That is 64-bit Linux/macOS, where long is 8 bytes. Q3 asks about your compiler.',
        '2': 'That is the signed long range.',
        '3': 'The smallest value is 0, and the largest is 2^32 − 1, not 2^32.'
      },
      commonTrap: 'Assuming long is 8 bytes everywhere. Always check with sizeof.',
      reference: 'Quiz #1 (Tuesday), Question 3'
    }
  }),
  m215(`${Q1T}, Q3`, {
    topic: 'Variable Limits & Overflow',
    difficulty: 'Midterm Level',
    question: 'What happens when 1 is added to an unsigned long that already holds its largest value, and how can the counting program detect it?',
    options: [
      'It wraps to 0, so stop when i + 1 == 0',
      'It stays at the maximum value forever',
      'It turns into a negative value',
      'The program crashes with an overflow error'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Unsigned arithmetic is modular: max + 1 wraps around to 0 (and 0 − 1 wraps to max). That wrap is the signal that the maximum was reached.',
      stepByStep: ['ULONG_MAX + 1 → 0 (verified: 4294967295 + 1 prints 0).', 'Loop with a double counter x (as the hint says) and stop when i + 1 == 0; then i is the maximum.'],
      whyWrong: {
        '1': 'Integers do not saturate; floating-point inf is what "stays".',
        '2': 'An unsigned type cannot hold negatives.',
        '3': 'C++ does not trap integer overflow; it silently wraps.'
      },
      commonTrap: 'Expecting integer overflow to raise an error.',
      reference: 'Quiz #1 (Tuesday), Question 3'
    }
  }),
  // ------------------------------------------------------------------ Quiz #1 (Wednesday)
  m215(`${Q1W}, Q1`, {
    topic: 'Input, Output & Formatting',
    difficulty: 'Foundation',
    question: 'Q1 reads 3 characters one at a time, prints "input is equal to x" for each one that equals \'x\', then prints the characters in reverse order. For the input q, x, z what appears?',
    options: [
      'The message once, then z x q',
      'The message once, then q x z',
      'The message three times, then z x q',
      'No message at all, then z x q'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Compare each char with the character literal \'x\' (single quotes), and print c3, c2, c1 to reverse.',
      stepByStep: ['Only the second input equals \'x\': the message prints once.', 'Reverse order: cout << c3 << endl << c2 << endl << c1;'],
      whyWrong: {
        '1': 'That is the input order, not the reverse.',
        '2': 'Only one input equals \'x\'.',
        '3': 'c2 == \'x\' is true, so the message prints once.'
      },
      commonTrap: 'Writing c == "x" (a string) or c == x (a variable) instead of c == \'x\'.',
      reference: 'Quiz #1 (Wednesday), Question 1'
    }
  }),
  m215(`${Q1W}, Q2`, {
    topic: 'Loops, Menus & Input Validation',
    difficulty: 'Midterm Level',
    question: 'Q2 evaluates y = cos(x) for x = 0.0, 1.0e−3, 2.0e−3, …, 1000 and counts how many times y > 0.9. Which loop header gives exactly the right x values?',
    options: [
      t`for (int i = 0; i <= 1000000; i++) {
    x = i * 1.0e-3;
}`,
      t`for (x = 0.0; x != 1000.0; x += 1.0e-3) {
    // floating-point drift
}`,
      t`for (int i = 0; i < 1000; i++) {
    x = i * 1.0e-3;
}`,
      t`for (x = 0.0; x <= 1000.0; x++) {
    // step by 1
}`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Drive the loop with an integer counter and compute x from it. Steps of 1.0e−3 from 0 to 1000 inclusive give 1000/0.001 + 1 = 1,000,001 values.',
      stepByStep: ['i runs 0 … 1,000,000: 1,000,001 passes.', 'x = i·1.0e−3 has no accumulated round-off.', 'Running it gives a count of 143,878 values with cos(x) > 0.9.'],
      whyWrong: {
        '1': 'After a million additions of 1.0e−3, x is never exactly 1000.0, so x != 1000.0 may never become false.',
        '2': 'This stops at x = 0.999; the range must reach 1000.',
        '3': 'x++ steps by 1, not 1.0e−3.'
      },
      commonTrap: 'Ending a floating-point loop with != instead of using an integer counter.',
      reference: 'Quiz #1 (Wednesday), Question 2'
    }
  }),
  m215(`${Q1W}, Q2`, {
    topic: 'Loops, Menus & Input Validation',
    difficulty: 'Foundation',
    question: 'For x = 0.0, 1.0e−3, …, 1000 (inclusive), how many times does the loop body run?',
    options: ['1,000,001', '1,000,000', '999,999', '1,001'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Count of values from a to b inclusive in steps of h: (b − a)/h + 1. The +1 counts the starting value.',
      stepByStep: ['(1000 − 0) / 0.001 = 1,000,000 steps.', 'Add 1 for x = 0: 1,000,001 values.'],
      whyWrong: {
        '1': 'Forgets the starting value x = 0 (fence-post error).',
        '2': 'Drops both end points.',
        '3': 'That would be steps of 1.0, not 1.0e−3.'
      },
      commonTrap: 'The fence-post error: n intervals have n + 1 end points.',
      reference: 'Quiz #1 (Wednesday), Question 2'
    }
  }),
  m215(`${Q1W}, Q3`, {
    topic: 'Variable Limits & Overflow',
    difficulty: 'Midterm Level',
    question: 'Q3 estimates the largest double by repeatedly multiplying x = 1.0 by 10. After how many multiplications does x first become inf?',
    options: ['309', '308', '38', '310'],
    correctIndex: 0,
    explanation: {
      coreConcept: 'The largest double is about 1.8 × 10^308 (DBL_MAX). 10^308 still fits, but 10^309 does not, so it overflows to inf.',
      stepByStep: ['After 308 multiplications x = 1e+308 (finite).', 'The 309th gives 1e+309 > DBL_MAX, which becomes inf (checked by running it).'],
      whyWrong: {
        '1': 'After 308 multiplications x = 1e+308, which is still finite.',
        '2': 'That is the float limit (about 3.4 × 10^38), not double.',
        '3': 'x is already inf after 309; the 310th is the first pass where it stops changing.'
      },
      commonTrap: 'Confusing float and double ranges.',
      reference: 'Quiz #1 (Wednesday), Question 3'
    }
  }),
  m215(`${Q1W}, Q3(ii)`, {
    topic: 'Variable Limits & Overflow',
    difficulty: 'Midterm Level',
    question: 'Part (ii) must use the fact that a double no longer changes when multiplied by 10 once it is too large. Which test prints "double out of range" at the right moment?',
    options: [
      t`if (x * 10 == x)`,
      t`if (x * 10 < x)`,
      t`if (x * 10 > x)`,
      t`if (x == 0)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Once x has overflowed to inf, inf × 10 is still inf, so x * 10 == x becomes true. For every finite positive x, x * 10 > x.',
      stepByStep: ['Finite x: 10x > x, so the test is false and the loop keeps going.', 'x = inf: 10·inf = inf = x, so the test is true and the message prints.'],
      whyWrong: {
        '1': 'inf × 10 is inf, never less than inf.',
        '2': 'That is true for every finite x, so it would print immediately.',
        '3': 'Multiplying by 10 never produces 0 here.'
      },
      commonTrap: 'Thinking overflow wraps around like integers. Floating point saturates at inf.',
      reference: 'Quiz #1 (Wednesday), Question 3(ii)'
    }
  })
];
