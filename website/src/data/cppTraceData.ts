import { SimulatorStep, SimulatorTrace } from '../types/cppSimulator';

// Pre-computed, high-fidelity traces for MIAE 215 Teacher Exam and Midterm questions
export const F23_A_TRACE: SimulatorTrace = {
  id: 'F23_A',
  title: 'Fall 2023 Midterm Q2(a) — while(1) Array Loop with Break',
  code: `int a=1, b=2, B[] = { 11, 7, 6, 5 };
int i=0, sum = 0;
while(1) {
    sum += B[i];
    if(i > 2) break;
    a += B[i+1];
    i++;
    cout << "\\n" << i << " " << a;
}
b = sum - i;
cout << "\\n" << sum << " " << a << " " << b;`,
  correctOptionIndex: 0,
  options: [
    `1 8
2 14
3 19
29 19 26`,
    `1 8
2 14
3 19
24 19 21`,
    `1 8
2 14
3 19
4 24
29 24 25`,
    `0 1
1 8
2 14
29 19 26`
  ],
  whyWrong: {
    '1': 'On the 4th pass, sum += B[3] executes BEFORE the break condition is checked. So sum becomes 29, not 24.',
    '2': 'The break fires before a and i are incremented on the 4th pass, so "4 24" is never printed.',
    '3': 'cout is at the end of the loop body after i++ and a += B[i+1], so the very first printed line is "1 8", not "0 1".'
  },
  coreConcept: 'In while(1), execution only terminates upon reaching break. Every statement before break runs on every pass including the final pass!',
  commonTrap: 'Assuming the loop exits immediately without updating sum on the 4th pass.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int a=1, b=2, B[] = { 11, 7, 6, 5 };',
      iterationLabel: 'Initialization',
      variables: { a: 1, b: 2 },
      changedVars: ['a', 'b', 'B'],
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: [],
      explanation: 'We declare integer variables a = 1, b = 2, and an array B with 4 elements {11, 7, 6, 5}.'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'int i=0, sum = 0;',
      iterationLabel: 'Initialization',
      variables: { a: 1, b: 2, i: 0, sum: 0 },
      changedVars: ['i', 'sum'],
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: [],
      explanation: 'We declare the loop index i = 0 and accumulator sum = 0.'
    },
    // Pass 1
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: 'while(1) {',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { a: 1, b: 2, i: 0, sum: 0 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: '1', evaluatedTo: '1', result: true },
      consoleOutput: [],
      explanation: 'while(1) is always true. We enter the loop body for Pass 1.'
    },
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: '    sum += B[i];',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { a: 1, b: 2, i: 0, sum: 11 },
      changedVars: ['sum'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 0 },
      consoleOutput: [],
      explanation: 'sum += B[0] (0 + 11 = 11). sum is now updated to 11.'
    },
    {
      stepIndex: 4,
      lineNumber: 5,
      lineContent: '    if(i > 2) break;',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { a: 1, b: 2, i: 0, sum: 11 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: 'i > 2', evaluatedTo: '0 > 2', result: false },
      consoleOutput: [],
      explanation: 'Condition 0 > 2 is false. The break does NOT trigger, so the loop continues.'
    },
    {
      stepIndex: 5,
      lineNumber: 6,
      lineContent: '    a += B[i+1];',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { a: 8, b: 2, i: 0, sum: 11 },
      changedVars: ['a'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 1 },
      consoleOutput: [],
      explanation: 'a += B[1] (1 + 7 = 8). a is now updated to 8.'
    },
    {
      stepIndex: 6,
      lineNumber: 7,
      lineContent: '    i++;',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { a: 8, b: 2, i: 1, sum: 11 },
      changedVars: ['i'],
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: [],
      explanation: 'We increment the counter i from 0 to 1.'
    },
    {
      stepIndex: 7,
      lineNumber: 8,
      lineContent: '    cout << "\\n" << i << " " << a;',
      iterationLabel: 'Pass 1 (i = 1)',
      variables: { a: 8, b: 2, i: 1, sum: 11 },
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8'],
      newOutput: '1 8',
      explanation: 'We print a newline followed by i (1) and a (8): "1 8".'
    },
    // Pass 2
    {
      stepIndex: 8,
      lineNumber: 3,
      lineContent: 'while(1) {',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { a: 8, b: 2, i: 1, sum: 11 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: '1', evaluatedTo: '1', result: true },
      consoleOutput: ['1 8'],
      explanation: 'Pass 2 starts: while(1) continues.'
    },
    {
      stepIndex: 9,
      lineNumber: 4,
      lineContent: '    sum += B[i];',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { a: 8, b: 2, i: 1, sum: 18 },
      changedVars: ['sum'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 1 },
      consoleOutput: ['1 8'],
      explanation: 'sum += B[1] (11 + 7 = 18). sum is now 18.'
    },
    {
      stepIndex: 10,
      lineNumber: 5,
      lineContent: '    if(i > 2) break;',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { a: 8, b: 2, i: 1, sum: 18 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: 'i > 2', evaluatedTo: '1 > 2', result: false },
      consoleOutput: ['1 8'],
      explanation: 'Condition 1 > 2 is false. The loop proceeds.'
    },
    {
      stepIndex: 11,
      lineNumber: 6,
      lineContent: '    a += B[i+1];',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { a: 14, b: 2, i: 1, sum: 18 },
      changedVars: ['a'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 2 },
      consoleOutput: ['1 8'],
      explanation: 'a += B[2] (8 + 6 = 14). a is now 14.'
    },
    {
      stepIndex: 12,
      lineNumber: 7,
      lineContent: '    i++;',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { a: 14, b: 2, i: 2, sum: 18 },
      changedVars: ['i'],
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8'],
      explanation: 'i is incremented from 1 to 2.'
    },
    {
      stepIndex: 13,
      lineNumber: 8,
      lineContent: '    cout << "\\n" << i << " " << a;',
      iterationLabel: 'Pass 2 (i = 2)',
      variables: { a: 14, b: 2, i: 2, sum: 18 },
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8', '2 14'],
      newOutput: '2 14',
      explanation: 'We print newline with i (2) and a (14): "2 14".'
    },
    // Pass 3
    {
      stepIndex: 14,
      lineNumber: 3,
      lineContent: 'while(1) {',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { a: 14, b: 2, i: 2, sum: 18 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: '1', evaluatedTo: '1', result: true },
      consoleOutput: ['1 8', '2 14'],
      explanation: 'Pass 3 starts: while(1) continues.'
    },
    {
      stepIndex: 15,
      lineNumber: 4,
      lineContent: '    sum += B[i];',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { a: 14, b: 2, i: 2, sum: 24 },
      changedVars: ['sum'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 2 },
      consoleOutput: ['1 8', '2 14'],
      explanation: 'sum += B[2] (18 + 6 = 24). sum is now 24.'
    },
    {
      stepIndex: 16,
      lineNumber: 5,
      lineContent: '    if(i > 2) break;',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { a: 14, b: 2, i: 2, sum: 24 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: 'i > 2', evaluatedTo: '2 > 2', result: false },
      consoleOutput: ['1 8', '2 14'],
      explanation: '2 > 2 is strictly false (2 is equal, not strictly greater). We continue!'
    },
    {
      stepIndex: 17,
      lineNumber: 6,
      lineContent: '    a += B[i+1];',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { a: 19, b: 2, i: 2, sum: 24 },
      changedVars: ['a'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 3 },
      consoleOutput: ['1 8', '2 14'],
      explanation: 'a += B[3] (14 + 5 = 19). a is now 19.'
    },
    {
      stepIndex: 18,
      lineNumber: 7,
      lineContent: '    i++;',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { a: 19, b: 2, i: 3, sum: 24 },
      changedVars: ['i'],
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8', '2 14'],
      explanation: 'i is incremented from 2 to 3.'
    },
    {
      stepIndex: 19,
      lineNumber: 8,
      lineContent: '    cout << "\\n" << i << " " << a;',
      iterationLabel: 'Pass 3 (i = 3)',
      variables: { a: 19, b: 2, i: 3, sum: 24 },
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8', '2 14', '3 19'],
      newOutput: '3 19',
      explanation: 'We print newline with i (3) and a (19): "3 19".'
    },
    // Pass 4 - Break pass!
    {
      stepIndex: 20,
      lineNumber: 3,
      lineContent: 'while(1) {',
      iterationLabel: 'Pass 4 (i = 3) - Final Pass',
      variables: { a: 19, b: 2, i: 3, sum: 24 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: '1', evaluatedTo: '1', result: true },
      consoleOutput: ['1 8', '2 14', '3 19'],
      explanation: 'Pass 4 begins. Note that i is already 3 entering this pass.'
    },
    {
      stepIndex: 21,
      lineNumber: 4,
      lineContent: '    sum += B[i];',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { a: 19, b: 2, i: 3, sum: 29 },
      changedVars: ['sum'],
      arrays: { B: [11, 7, 6, 5] },
      activeArrayIndices: { B: 3 },
      consoleOutput: ['1 8', '2 14', '3 19'],
      trapWarning: 'Crucial Trap: sum += B[3] executes BEFORE the break check! sum becomes 24 + 5 = 29.',
      explanation: 'sum += B[3] (24 + 5 = 29). This runs before the break check, so sum becomes 29!'
    },
    {
      stepIndex: 22,
      lineNumber: 5,
      lineContent: '    if(i > 2) break;',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { a: 19, b: 2, i: 3, sum: 29 },
      arrays: { B: [11, 7, 6, 5] },
      conditionEval: { expression: 'i > 2', evaluatedTo: '3 > 2', result: true },
      consoleOutput: ['1 8', '2 14', '3 19'],
      explanation: '3 > 2 is TRUE! The break statement executes, immediately exiting the while loop.'
    },
    // After loop
    {
      stepIndex: 23,
      lineNumber: 10,
      lineContent: 'b = sum - i;',
      iterationLabel: 'Post-Loop Calculation',
      variables: { a: 19, b: 26, i: 3, sum: 29 },
      changedVars: ['b'],
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8', '2 14', '3 19'],
      explanation: 'b = sum - i = 29 - 3 = 26. b is updated to 26.'
    },
    {
      stepIndex: 24,
      lineNumber: 11,
      lineContent: 'cout << "\\n" << sum << " " << a << " " << b;',
      iterationLabel: 'Final Output',
      variables: { a: 19, b: 26, i: 3, sum: 29 },
      arrays: { B: [11, 7, 6, 5] },
      consoleOutput: ['1 8', '2 14', '3 19', '29 19 26'],
      newOutput: '29 19 26',
      explanation: 'Final print: sum (29), a (19), and b (26). Output: "29 19 26".'
    }
  ]
};

export const F23_B_TRACE: SimulatorTrace = {
  id: 'F23_B',
  title: 'Fall 2023 Midterm Q2(b) — for Loop, Integer Division & Garbage Memory',
  code: `int i;
double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;
for(i=0;i<4;i++) {
    if(A[i] < -0.11) {
        x += 1;
    } else if (A[i] > 0.1) {
        x -= 10;
    } else {
        x = 7 + 1/(i+1);
    }
    cout << "\\n" << x;
}
cout << "\\n" << A[i];`,
  correctOptionIndex: 0,
  options: [
    '8, −2, 7, −3',
    '8, −2, 7.33333, −3',
    '2, −8, 7, −3',
    '8, −2, 8, −3'
  ],
  whyWrong: {
    '1': 'At i = 2, 1/(2+1) is int ÷ int (1/3 = 0 integer division truncation), so x = 7 + 0 = 7, NOT 7.33333.',
    '2': 'Negative comparison: -0.1 is GREATER than -0.11 on the number line. The first if does NOT trigger.',
    '3': 'At i = 2, 1/(2+1) is 0, so x = 7, not 8.'
  },
  coreConcept: 'Integer division truncation occurs whenever both operands are ints: 1/(i+1) gives 0 when i+1 > 1. And after for(i=0;i<4;i++), i equals 4, which is outside A[4] (prints Garbage / G)!',
  commonTrap: 'Comparing -0.1 < -0.11 (false!) or forgetting that 1/3 in C++ integer arithmetic truncates to 0.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int i;',
      iterationLabel: 'Declaration',
      variables: {},
      consoleOutput: [],
      explanation: 'We declare integer variable i for the loop counter.'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;',
      iterationLabel: 'Initialization',
      variables: { x: 1.0 },
      changedVars: ['x', 'A'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: [],
      explanation: 'We initialize array A with 4 doubles and double variable x = 1.0.'
    },
    // Iteration 0
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: 'for(i=0;i<4;i++) {',
      iterationLabel: 'Iteration 0 (i = 0)',
      variables: { i: 0, x: 1.0 },
      changedVars: ['i'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      conditionEval: { expression: 'i < 4', evaluatedTo: '0 < 4', result: true },
      consoleOutput: [],
      explanation: 'Loop begins: i is set to 0. Condition 0 < 4 is true.'
    },
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: '    if(A[i] < -0.11) {',
      iterationLabel: 'Iteration 0 (i = 0)',
      variables: { i: 0, x: 1.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 0 },
      conditionEval: { expression: 'A[0] < -0.11', evaluatedTo: '-0.1 < -0.11', result: false },
      consoleOutput: [],
      trapWarning: 'Number line trap: -0.10 is larger than -0.11, so -0.1 < -0.11 is FALSE!',
      explanation: 'Testing -0.1 < -0.11: on the number line -0.1 is to the right of -0.11, so this is FALSE.'
    },
    {
      stepIndex: 4,
      lineNumber: 6,
      lineContent: '    } else if (A[i] > 0.1) {',
      iterationLabel: 'Iteration 0 (i = 0)',
      variables: { i: 0, x: 1.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 0 },
      conditionEval: { expression: 'A[0] > 0.1', evaluatedTo: '-0.1 > 0.1', result: false },
      consoleOutput: [],
      explanation: 'Testing -0.1 > 0.1: negative is not greater than positive, so FALSE.'
    },
    {
      stepIndex: 5,
      lineNumber: 9,
      lineContent: '        x = 7 + 1/(i+1);',
      iterationLabel: 'Iteration 0 (i = 0)',
      variables: { i: 0, x: 8.0 },
      changedVars: ['x'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: [],
      explanation: 'Else branch executes: x = 7 + 1/(0+1) = 7 + 1/1 = 7 + 1 = 8.0.'
    },
    {
      stepIndex: 6,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Iteration 0 (i = 0)',
      variables: { i: 0, x: 8.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8'],
      newOutput: '8',
      explanation: 'Prints newline then x: "8".'
    },
    // Iteration 1
    {
      stepIndex: 7,
      lineNumber: 3,
      lineContent: 'for(i=0;i<4;i++) { // i becomes 1',
      iterationLabel: 'Iteration 1 (i = 1)',
      variables: { i: 1, x: 8.0 },
      changedVars: ['i'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      conditionEval: { expression: 'i < 4', evaluatedTo: '1 < 4', result: true },
      consoleOutput: ['8'],
      explanation: 'i increments to 1. Condition 1 < 4 is true.'
    },
    {
      stepIndex: 8,
      lineNumber: 4,
      lineContent: '    if(A[i] < -0.11) {',
      iterationLabel: 'Iteration 1 (i = 1)',
      variables: { i: 1, x: 8.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 1 },
      conditionEval: { expression: 'A[1] < -0.11', evaluatedTo: '0.11 < -0.11', result: false },
      consoleOutput: ['8'],
      explanation: '0.11 < -0.11 is false.'
    },
    {
      stepIndex: 9,
      lineNumber: 6,
      lineContent: '    } else if (A[i] > 0.1) {',
      iterationLabel: 'Iteration 1 (i = 1)',
      variables: { i: 1, x: 8.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 1 },
      conditionEval: { expression: 'A[1] > 0.1', evaluatedTo: '0.11 > 0.1', result: true },
      consoleOutput: ['8'],
      explanation: '0.11 > 0.1 is TRUE! We take this branch.'
    },
    {
      stepIndex: 10,
      lineNumber: 7,
      lineContent: '        x -= 10;',
      iterationLabel: 'Iteration 1 (i = 1)',
      variables: { i: 1, x: -2.0 },
      changedVars: ['x'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8'],
      explanation: 'x -= 10 (8.0 - 10 = -2.0). x is updated to -2.'
    },
    {
      stepIndex: 11,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Iteration 1 (i = 1)',
      variables: { i: 1, x: -2.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8', '-2'],
      newOutput: '-2',
      explanation: 'Prints newline then x: "-2".'
    },
    // Iteration 2 (THE TRUNCATION TRAP)
    {
      stepIndex: 12,
      lineNumber: 3,
      lineContent: 'for(i=0;i<4;i++) { // i becomes 2',
      iterationLabel: 'Iteration 2 (i = 2)',
      variables: { i: 2, x: -2.0 },
      changedVars: ['i'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      conditionEval: { expression: 'i < 4', evaluatedTo: '2 < 4', result: true },
      consoleOutput: ['8', '-2'],
      explanation: 'i increments to 2. Condition 2 < 4 is true.'
    },
    {
      stepIndex: 13,
      lineNumber: 4,
      lineContent: '    if(A[i] < -0.11) {',
      iterationLabel: 'Iteration 2 (i = 2)',
      variables: { i: 2, x: -2.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 2 },
      conditionEval: { expression: 'A[2] < -0.11', evaluatedTo: '0.0 < -0.11', result: false },
      consoleOutput: ['8', '-2'],
      explanation: '0.0 < -0.11 is false.'
    },
    {
      stepIndex: 14,
      lineNumber: 6,
      lineContent: '    } else if (A[i] > 0.1) {',
      iterationLabel: 'Iteration 2 (i = 2)',
      variables: { i: 2, x: -2.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 2 },
      conditionEval: { expression: 'A[2] > 0.1', evaluatedTo: '0.0 > 0.1', result: false },
      consoleOutput: ['8', '-2'],
      explanation: '0.0 > 0.1 is false. Neither branch matches, so else runs!'
    },
    {
      stepIndex: 15,
      lineNumber: 9,
      lineContent: '        x = 7 + 1/(i+1);',
      iterationLabel: 'Iteration 2 (i = 2)',
      variables: { i: 2, x: 7.0 },
      changedVars: ['x'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8', '-2'],
      trapWarning: 'Critical Trap: 1 and (2+1)=3 are both integers! 1/3 = 0 in C++ integer division, NOT 0.333! So x = 7 + 0 = 7.',
      explanation: 'x = 7 + 1/(2+1) = 7 + (1/3). Since 1 and 3 are int, 1/3 truncates to 0! x = 7 + 0 = 7.'
    },
    {
      stepIndex: 16,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Iteration 2 (i = 2)',
      variables: { i: 2, x: 7.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8', '-2', '7'],
      newOutput: '7',
      explanation: 'Prints newline then x: "7".'
    },
    // Iteration 3
    {
      stepIndex: 17,
      lineNumber: 3,
      lineContent: 'for(i=0;i<4;i++) { // i becomes 3',
      iterationLabel: 'Iteration 3 (i = 3)',
      variables: { i: 3, x: 7.0 },
      changedVars: ['i'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      conditionEval: { expression: 'i < 4', evaluatedTo: '3 < 4', result: true },
      consoleOutput: ['8', '-2', '7'],
      explanation: 'i increments to 3. Condition 3 < 4 is true.'
    },
    {
      stepIndex: 18,
      lineNumber: 4,
      lineContent: '    if(A[i] < -0.11) {',
      iterationLabel: 'Iteration 3 (i = 3)',
      variables: { i: 3, x: 7.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 3 },
      conditionEval: { expression: 'A[3] < -0.11', evaluatedTo: '0.2 < -0.11', result: false },
      consoleOutput: ['8', '-2', '7'],
      explanation: '0.2 < -0.11 is false.'
    },
    {
      stepIndex: 19,
      lineNumber: 6,
      lineContent: '    } else if (A[i] > 0.1) {',
      iterationLabel: 'Iteration 3 (i = 3)',
      variables: { i: 3, x: 7.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 3 },
      conditionEval: { expression: 'A[3] > 0.1', evaluatedTo: '0.2 > 0.1', result: true },
      consoleOutput: ['8', '-2', '7'],
      explanation: '0.2 > 0.1 is TRUE! We take this branch.'
    },
    {
      stepIndex: 20,
      lineNumber: 7,
      lineContent: '        x -= 10;',
      iterationLabel: 'Iteration 3 (i = 3)',
      variables: { i: 3, x: -3.0 },
      changedVars: ['x'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8', '-2', '7'],
      explanation: 'x -= 10 (7.0 - 10 = -3.0). x is updated to -3.'
    },
    {
      stepIndex: 21,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Iteration 3 (i = 3)',
      variables: { i: 3, x: -3.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      consoleOutput: ['8', '-2', '7', '-3'],
      newOutput: '-3',
      explanation: 'Prints newline then x: "-3".'
    },
    // Loop exit check: i = 4
    {
      stepIndex: 22,
      lineNumber: 3,
      lineContent: 'for(i=0;i<4;i++) { // i becomes 4',
      iterationLabel: 'Loop Termination (i = 4)',
      variables: { i: 4, x: -3.0 },
      changedVars: ['i'],
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      conditionEval: { expression: 'i < 4', evaluatedTo: '4 < 4', result: false },
      consoleOutput: ['8', '-2', '7', '-3'],
      explanation: 'i increments to 4. Test 4 < 4 is FALSE! Loop terminates. Note: i retains the value 4!'
    },
    // Final statement - Garbage memory access!
    {
      stepIndex: 23,
      lineNumber: 13,
      lineContent: 'cout << "\\n" << A[i];',
      iterationLabel: 'Garbage Value Trap (A[4])',
      variables: { i: 4, x: -3.0 },
      arrays: { A: [-0.1, 0.11, 0.0, 0.2] },
      activeArrayIndices: { A: 4 },
      trapWarning: 'Exam Classic: i is 4! Array A has only indices 0, 1, 2, 3. A[4] reads unallocated garbage memory (written as G or Garbage on the exam).',
      consoleOutput: ['8', '-2', '7', '-3', 'G (Garbage value)'],
      newOutput: 'G (Garbage value)',
      explanation: 'Array A has 4 elements (indices 0 to 3). Accessing A[4] is OUT OF BOUNDS! C++ prints uninitialized garbage memory (G).'
    }
  ]
};

export const REV_2A_TRACE: SimulatorTrace = {
  id: 'REV_2A',
  title: 'Midterm Review #1 Q2(a) — 2D Array Formula & Epsilon Tolerance Ladder',
  code: `int i, j;
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
        cout << "\\n" << x;
    }
}`,
  correctOptionIndex: 0,
  options: [
    '−4 0 / −3 2 and −3, −103, −106, −116',
    '−4 −3 / 0 2 and −3, −13, −16, −26',
    '−4 −1 / −1 2 and 5, −95, −92, −102',
    '−5 −2 / −5 −2 and −3, −103, −106, −104'
  ],
  whyWrong: {
    '1': 'When A[1][2] = 0, neither test is true (0 is not > 1e-7), so the else runs: x -= 100 giving -103, not -13.',
    '2': 'The formula is j*i + j*j - 6, using row-major loops (outer i, inner j).',
    '3': 'At the final element A[2][2]=2 (> 1e-7), x -= 10 runs (-106 - 10 = -116), not addition.'
  },
  coreConcept: 'Nested loops iterate over rows (i) and columns (j). Float comparisons use small tolerances (±1.0e-7) around zero; exact zero lands in the else branch.',
  commonTrap: 'Assuming A[i][j] == 0 goes into the positive branch, or confusing outer loop i with column.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int i, j;',
      iterationLabel: 'Declaration',
      variables: {},
      consoleOutput: [],
      explanation: 'We declare loop index variables i (row) and j (column).'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'double A[2+1][2+1], x=1.0;',
      iterationLabel: 'Initialization',
      variables: { x: 1.0 },
      changedVars: ['x'],
      consoleOutput: [],
      explanation: 'A is a 3x3 array (indices 0..2). 1-based indexing is used (row 0 and column 0 are unused).'
    },
    // Row 1, Col 1
    {
      stepIndex: 2,
      lineNumber: 5,
      lineContent: '        A[i][j] = j*i + j*j - 6;',
      iterationLabel: 'Loop 1: i=1, j=1',
      variables: { i: 1, j: 1, 'A[1][1]': -4 },
      changedVars: ['A[1][1]'],
      consoleOutput: [],
      explanation: 'A[1][1] = (1)(1) + 1*1 - 6 = 1 + 1 - 6 = -4.'
    },
    {
      stepIndex: 3,
      lineNumber: 6,
      lineContent: '        cout << A[i][j] << " ";',
      iterationLabel: 'Loop 1: i=1, j=1',
      variables: { i: 1, j: 1, 'A[1][1]': -4 },
      consoleOutput: ['-4 '],
      newOutput: '-4 ',
      explanation: 'Prints "-4 ".'
    },
    // Row 1, Col 2
    {
      stepIndex: 4,
      lineNumber: 5,
      lineContent: '        A[i][j] = j*i + j*j - 6;',
      iterationLabel: 'Loop 1: i=1, j=2',
      variables: { i: 1, j: 2, 'A[1][2]': 0 },
      changedVars: ['A[1][2]'],
      consoleOutput: ['-4 '],
      explanation: 'A[1][2] = (2)(1) + 2*2 - 6 = 2 + 4 - 6 = 0.'
    },
    {
      stepIndex: 5,
      lineNumber: 6,
      lineContent: '        cout << A[i][j] << " ";',
      iterationLabel: 'Loop 1: i=1, j=2',
      variables: { i: 1, j: 2, 'A[1][2]': 0 },
      consoleOutput: ['-4 0 '],
      newOutput: '0 ',
      explanation: 'Prints "0 " on the first row.'
    },
    {
      stepIndex: 6,
      lineNumber: 8,
      lineContent: '    cout << endl;',
      iterationLabel: 'Loop 1: Row 1 complete',
      variables: { i: 1 },
      consoleOutput: ['-4 0'],
      explanation: 'cout << endl ends the first row.'
    },
    // Row 2, Col 1
    {
      stepIndex: 7,
      lineNumber: 5,
      lineContent: '        A[i][j] = j*i + j*j - 6;',
      iterationLabel: 'Loop 1: i=2, j=1',
      variables: { i: 2, j: 1, 'A[2][1]': -3 },
      changedVars: ['A[2][1]'],
      consoleOutput: ['-4 0'],
      explanation: 'A[2][1] = (1)(2) + 1*1 - 6 = 2 + 1 - 6 = -3.'
    },
    {
      stepIndex: 8,
      lineNumber: 6,
      lineContent: '        cout << A[i][j] << " ";',
      iterationLabel: 'Loop 1: i=2, j=1',
      variables: { i: 2, j: 1, 'A[2][1]': -3 },
      consoleOutput: ['-4 0', '-3 '],
      newOutput: '-3 ',
      explanation: 'Prints "-3 " on the second row.'
    },
    // Row 2, Col 2
    {
      stepIndex: 9,
      lineNumber: 5,
      lineContent: '        A[i][j] = j*i + j*j - 6;',
      iterationLabel: 'Loop 1: i=2, j=2',
      variables: { i: 2, j: 2, 'A[2][2]': 2 },
      changedVars: ['A[2][2]'],
      consoleOutput: ['-4 0', '-3 '],
      explanation: 'A[2][2] = (2)(2) + 2*2 - 6 = 4 + 4 - 6 = 2.'
    },
    {
      stepIndex: 10,
      lineNumber: 6,
      lineContent: '        cout << A[i][j] << " ";',
      iterationLabel: 'Loop 1: i=2, j=2',
      variables: { i: 2, j: 2, 'A[2][2]': 2 },
      consoleOutput: ['-4 0', '-3 2 '],
      newOutput: '2 ',
      explanation: 'Prints "2 " on the second row.'
    },
    // Second Loop: Tolerance Ladder
    {
      stepIndex: 11,
      lineNumber: 13,
      lineContent: '        if(A[i][j] < -1.0e-7) {',
      iterationLabel: 'Ladder i=1, j=1 (val = -4)',
      variables: { i: 1, j: 1, x: 1.0 },
      conditionEval: { expression: '-4 < -1.0e-7', evaluatedTo: '-4 < -0.0000001', result: true },
      consoleOutput: ['-4 0', '-3 2'],
      explanation: '-4 is less than -1e-7: true! We add A[1][1] to x.'
    },
    {
      stepIndex: 12,
      lineNumber: 14,
      lineContent: '            x += A[i][j];',
      iterationLabel: 'Ladder i=1, j=1',
      variables: { i: 1, j: 1, x: -3.0 },
      changedVars: ['x'],
      consoleOutput: ['-4 0', '-3 2'],
      explanation: 'x = 1.0 + (-4) = -3.0.'
    },
    {
      stepIndex: 13,
      lineNumber: 20,
      lineContent: '        cout << "\\n" << x;',
      iterationLabel: 'Ladder i=1, j=1',
      variables: { i: 1, j: 1, x: -3.0 },
      consoleOutput: ['-4 0', '-3 2', '-3'],
      newOutput: '-3',
      explanation: 'Prints "-3".'
    },
    // Ladder i=1, j=2 (val = 0) -> THE ELSE TRAP!
    {
      stepIndex: 14,
      lineNumber: 13,
      lineContent: '        if(A[i][j] < -1.0e-7) {',
      iterationLabel: 'Ladder i=1, j=2 (val = 0)',
      variables: { i: 1, j: 2, x: -3.0 },
      conditionEval: { expression: '0 < -1.0e-7', evaluatedTo: '0 < -0.0000001', result: false },
      consoleOutput: ['-4 0', '-3 2', '-3'],
      explanation: '0 is not < -1e-7: false.'
    },
    {
      stepIndex: 15,
      lineNumber: 15,
      lineContent: '        } else if (A[i][j] > 1.0e-7) {',
      iterationLabel: 'Ladder i=1, j=2 (val = 0)',
      variables: { i: 1, j: 2, x: -3.0 },
      conditionEval: { expression: '0 > 1.0e-7', evaluatedTo: '0 > 0.0000001', result: false },
      consoleOutput: ['-4 0', '-3 2', '-3'],
      explanation: '0 is not > 1e-7: false! Both tolerance tests fail, so ELSE runs!'
    },
    {
      stepIndex: 16,
      lineNumber: 18,
      lineContent: '            x -= 100;',
      iterationLabel: 'Ladder i=1, j=2 (val = 0)',
      variables: { i: 1, j: 2, x: -103.0 },
      changedVars: ['x'],
      trapWarning: 'Tolerance trap: Exact 0 falls between -1e-7 and +1e-7, so the else branch (x -= 100) triggers!',
      consoleOutput: ['-4 0', '-3 2', '-3'],
      explanation: 'x = -3.0 - 100 = -103.0.'
    },
    {
      stepIndex: 17,
      lineNumber: 20,
      lineContent: '        cout << "\\n" << x;',
      iterationLabel: 'Ladder i=1, j=2',
      variables: { i: 1, j: 2, x: -103.0 },
      consoleOutput: ['-4 0', '-3 2', '-3', '-103'],
      newOutput: '-103',
      explanation: 'Prints "-103".'
    },
    // Ladder i=2, j=1 (val = -3)
    {
      stepIndex: 18,
      lineNumber: 14,
      lineContent: '            x += A[i][j];',
      iterationLabel: 'Ladder i=2, j=1 (val = -3)',
      variables: { i: 2, j: 1, x: -106.0 },
      changedVars: ['x'],
      consoleOutput: ['-4 0', '-3 2', '-3', '-103'],
      explanation: '-3 < -1e-7 is true. x = -103 + (-3) = -106.'
    },
    {
      stepIndex: 19,
      lineNumber: 20,
      lineContent: '        cout << "\\n" << x;',
      iterationLabel: 'Ladder i=2, j=1',
      variables: { i: 2, j: 1, x: -106.0 },
      consoleOutput: ['-4 0', '-3 2', '-3', '-103', '-106'],
      newOutput: '-106',
      explanation: 'Prints "-106".'
    },
    // Ladder i=2, j=2 (val = 2)
    {
      stepIndex: 20,
      lineNumber: 16,
      lineContent: '            x -= 10;',
      iterationLabel: 'Ladder i=2, j=2 (val = 2)',
      variables: { i: 2, j: 2, x: -116.0 },
      changedVars: ['x'],
      consoleOutput: ['-4 0', '-3 2', '-3', '-103', '-106'],
      explanation: '2 > 1e-7 is true. x = -106 - 10 = -116.'
    },
    {
      stepIndex: 21,
      lineNumber: 20,
      lineContent: '        cout << "\\n" << x;',
      iterationLabel: 'Ladder i=2, j=2',
      variables: { i: 2, j: 2, x: -116.0 },
      consoleOutput: ['-4 0', '-3 2', '-3', '-103', '-106', '-116'],
      newOutput: '-116',
      explanation: 'Prints "-116".'
    }
  ]
};

// -------------------------------------------------------------------------------------------------
// Pre-authored traces for Teacher Exam and Core Curriculum questions
// -------------------------------------------------------------------------------------------------

export const DOT_PRODUCT_TRACE: SimulatorTrace = {
  id: 'Q2W_DOT_PRODUCT',
  title: 'Quiz #2 (Wed) Part (f) — Vector Dot Product Accumulator',
  code: `double A[] = {1, 2, 3}, B[] = {4, -5, 6};
int n = 3;
double dot = 0;
for(int i=0; i<n; i++) {
    dot += A[i] * B[i];
}
cout << dot;`,
  correctOptionIndex: 0,
  options: ['12', '32', '30', '11'],
  whyWrong: {
    '1': 'This drops the negative sign on B[1] = -5: 4 + 10 + 18 = 32.',
    '2': 'This multiplies array sums: (1+2+3)*(4-5+6) = 6 * 5 = 30.',
    '3': 'This adds all elements without multiplying pairs: 1+2+3+4-5+6 = 11.'
  },
  coreConcept: 'The dot product multiplies corresponding elements pairwise and accumulates their sum: dot = sum_{i=0}^{n-1} A[i]*B[i].',
  commonTrap: 'Losing the negative sign of -5: (1*4) + (2*(-5)) + (3*6) = 4 - 10 + 18 = 12.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'double A[] = {1, 2, 3}, B[] = {4, -5, 6};',
      iterationLabel: 'Initialization',
      variables: {},
      changedVars: ['A', 'B'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      consoleOutput: [],
      explanation: 'Initialize array A = {1, 2, 3} and array B = {4, -5, 6}.'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'int n = 3;',
      iterationLabel: 'Initialization',
      variables: { n: 3 },
      changedVars: ['n'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      consoleOutput: [],
      explanation: 'Set vector dimension n = 3 (number of elements in each array).'
    },
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: 'double dot = 0;',
      iterationLabel: 'Initialization',
      variables: { n: 3, dot: 0 },
      changedVars: ['dot'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      consoleOutput: [],
      explanation: 'Initialize accumulator dot = 0. Accumulators for addition must start at 0 (the additive identity).'
    },
    // Pass 1 (i = 0)
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<n; i++) {',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { n: 3, dot: 0, i: 0 },
      changedVars: ['i'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      activeArrayIndices: { A: 0, B: 0 },
      conditionEval: { expression: 'i < n', evaluatedTo: '0 < 3', result: true },
      consoleOutput: [],
      explanation: 'Loop counter starts at i = 0. Test 0 < 3 is true: proceed to first vector element pair.'
    },
    {
      stepIndex: 4,
      lineNumber: 5,
      lineContent: '    dot += A[i] * B[i];',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { n: 3, dot: 4, i: 0 },
      changedVars: ['dot'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      activeArrayIndices: { A: 0, B: 0 },
      consoleOutput: [],
      explanation: 'Compute A[0]*B[0] = 1 * 4 = 4. Accumulate: dot = 0 + 4 = 4.'
    },
    // Pass 2 (i = 1) - Negative Trap
    {
      stepIndex: 5,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<n; i++) {',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { n: 3, dot: 4, i: 1 },
      changedVars: ['i'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      activeArrayIndices: { A: 1, B: 1 },
      conditionEval: { expression: 'i < n', evaluatedTo: '1 < 3', result: true },
      consoleOutput: [],
      explanation: 'Increment i to 1. Test 1 < 3 is true: proceed to second vector element pair.'
    },
    {
      stepIndex: 6,
      lineNumber: 5,
      lineContent: '    dot += A[i] * B[i];',
      iterationLabel: 'Pass 2 (i = 1) — Watch Negative Sign',
      variables: { n: 3, dot: -6, i: 1 },
      changedVars: ['dot'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      activeArrayIndices: { A: 1, B: 1 },
      trapWarning: 'Negative Sign Trap: A[1]*B[1] = 2 * (-5) = -10. Accumulating -10 gives dot = 4 + (-10) = -6.',
      consoleOutput: [],
      explanation: 'Compute A[1]*B[1] = 2 * (-5) = -10. Accumulate: dot = 4 + (-10) = -6.'
    },
    // Pass 3 (i = 2)
    {
      stepIndex: 7,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<n; i++) {',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { n: 3, dot: -6, i: 2 },
      changedVars: ['i'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      activeArrayIndices: { A: 2, B: 2 },
      conditionEval: { expression: 'i < n', evaluatedTo: '2 < 3', result: true },
      consoleOutput: [],
      explanation: 'Increment i to 2. Test 2 < 3 is true: proceed to third vector element pair.'
    },
    {
      stepIndex: 8,
      lineNumber: 5,
      lineContent: '    dot += A[i] * B[i];',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { n: 3, dot: 12, i: 2 },
      changedVars: ['dot'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      activeArrayIndices: { A: 2, B: 2 },
      consoleOutput: [],
      explanation: 'Compute A[2]*B[2] = 3 * 6 = 18. Accumulate: dot = -6 + 18 = 12.'
    },
    // Loop Exit (i = 3)
    {
      stepIndex: 9,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<n; i++) {',
      iterationLabel: 'Loop Exit (i = 3)',
      variables: { n: 3, dot: 12, i: 3 },
      changedVars: ['i'],
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      conditionEval: { expression: 'i < n', evaluatedTo: '3 < 3', result: false },
      consoleOutput: [],
      explanation: 'Increment i to 3. Test 3 < 3 is FALSE! The loop terminates cleanly with dot = 12.'
    },
    // Final Print
    {
      stepIndex: 10,
      lineNumber: 7,
      lineContent: 'cout << dot;',
      iterationLabel: 'Console Output',
      variables: { n: 3, dot: 12, i: 3 },
      arrays: { A: [1, 2, 3], B: [4, -5, 6] },
      consoleOutput: ['12'],
      newOutput: '12',
      explanation: 'Prints "12" to stdout: (1·4) + (2·(-5)) + (3·6) = 4 - 10 + 18 = 12.'
    }
  ]
};

export const ARRAY_EQUALITY_BUG_TRACE: SimulatorTrace = {
  id: 'REV1_ARRAY_EQ_BUG',
  title: 'Midterm Review #1 Q1 — Array Equality Else-Reset Bug',
  code: `int A1[5] = {1, 2, 3, 4, 5};
int A2[5] = {1, 9, 3, 4, 5};
bool eq = true;
for(int i=0; i<5; i++) {
    if(A1[i] != A2[i]) eq = false;
    else eq = true;
}
if(eq) cout << "A1 and A2 are equal";
else cout << "A1 and A2 are not equal";`,
  correctOptionIndex: 0,
  options: [
    '"A1 and A2 are equal": the flag is reset',
    '"A1 and A2 are not equal": element 2 differs',
    '"A1 and A2 are equal": the loop stops at i = 0',
    'Nothing: eq is never used after the loop'
  ],
  whyWrong: {
    '1': 'This is what a correct program would print. Here, the else branch resets eq to true on later matching pairs.',
    '2': 'There is no break statement; the loop runs all five iterations to completion.',
    '3': 'eq is checked after the loop in the if(eq) branch.'
  },
  coreConcept: 'Flag Search Trap: A flag checking for mismatches must NEVER be reset back to true in an else branch! The else branch overwrites earlier mismatches, so only the final element decides the result.',
  commonTrap: 'Adding "else eq = true;" inside a flag comparison loop.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int A1[5] = {1, 2, 3, 4, 5};',
      iterationLabel: 'Initialization',
      variables: {},
      changedVars: ['A1'],
      arrays: { A1: [1, 2, 3, 4, 5] },
      consoleOutput: [],
      explanation: 'Initialize array A1 with elements {1, 2, 3, 4, 5}.'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'int A2[5] = {1, 9, 3, 4, 5};',
      iterationLabel: 'Initialization',
      variables: {},
      changedVars: ['A2'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      consoleOutput: [],
      explanation: 'Initialize array A2 with elements {1, 9, 3, 4, 5}. Note that index 1 differs (2 vs 9).'
    },
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: 'bool eq = true;',
      iterationLabel: 'Initialization',
      variables: { eq: true },
      changedVars: ['eq'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      consoleOutput: [],
      explanation: 'Initialize flag eq = true. We assume arrays are equal until proven otherwise.'
    },
    // Pass 1 (i = 0)
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<5; i++) {',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { eq: true, i: 0 },
      changedVars: ['i'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 0, A2: 0 },
      conditionEval: { expression: 'i < 5', evaluatedTo: '0 < 5', result: true },
      consoleOutput: [],
      explanation: 'i = 0: Comparing A1[0] (1) with A2[0] (1).'
    },
    {
      stepIndex: 4,
      lineNumber: 6,
      lineContent: '    else eq = true;',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { eq: true, i: 0 },
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 0, A2: 0 },
      conditionEval: { expression: 'A1[0] != A2[0]', evaluatedTo: '1 != 1', result: false },
      consoleOutput: [],
      explanation: '1 != 1 is false. The else branch executes: eq stays true.'
    },
    // Pass 2 (i = 1) - Mismatch!
    {
      stepIndex: 5,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<5; i++) {',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { eq: true, i: 1 },
      changedVars: ['i'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 1, A2: 1 },
      conditionEval: { expression: 'i < 5', evaluatedTo: '1 < 5', result: true },
      consoleOutput: [],
      explanation: 'i = 1: Comparing A1[1] (2) with A2[1] (9).'
    },
    {
      stepIndex: 6,
      lineNumber: 5,
      lineContent: '    if(A1[i] != A2[i]) eq = false;',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { eq: false, i: 1 },
      changedVars: ['eq'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 1, A2: 1 },
      conditionEval: { expression: 'A1[1] != A2[1]', evaluatedTo: '2 != 9', result: true },
      consoleOutput: [],
      explanation: 'Mismatch found! 2 != 9 is TRUE. eq is correctly set to false!'
    },
    // Pass 3 (i = 2) - BUG TRIGGERS!
    {
      stepIndex: 7,
      lineNumber: 4,
      lineContent: 'for(int i=0; i<5; i++) {',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { eq: false, i: 2 },
      changedVars: ['i'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 2, A2: 2 },
      conditionEval: { expression: 'i < 5', evaluatedTo: '2 < 5', result: true },
      consoleOutput: [],
      explanation: 'i = 2: Comparing A1[2] (3) with A2[2] (3).'
    },
    {
      stepIndex: 8,
      lineNumber: 6,
      lineContent: '    else eq = true;',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { eq: true, i: 2 },
      changedVars: ['eq'],
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 2, A2: 2 },
      conditionEval: { expression: 'A1[2] != A2[2]', evaluatedTo: '3 != 3', result: false },
      trapWarning: 'FLAG RESET BUG: 3 == 3, so else executes and resets eq = true! The earlier mismatch (2 != 9) is wiped out!',
      consoleOutput: [],
      explanation: '3 != 3 is false. The else branch executes: eq is RESET BACK TO true! The mismatch at index 1 is lost.'
    },
    // Pass 4 (i = 3)
    {
      stepIndex: 9,
      lineNumber: 6,
      lineContent: '    else eq = true;',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { eq: true, i: 3 },
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 3, A2: 3 },
      consoleOutput: [],
      explanation: 'i = 3: 4 == 4, else branch runs, eq stays true.'
    },
    // Pass 5 (i = 4)
    {
      stepIndex: 10,
      lineNumber: 6,
      lineContent: '    else eq = true;',
      iterationLabel: 'Pass 5 (i = 4)',
      variables: { eq: true, i: 4 },
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      activeArrayIndices: { A1: 4, A2: 4 },
      consoleOutput: [],
      explanation: 'i = 4: 5 == 5, else branch runs, eq stays true. Loop completes.'
    },
    // Final check
    {
      stepIndex: 11,
      lineNumber: 8,
      lineContent: 'if(eq) cout << "A1 and A2 are equal";',
      iterationLabel: 'After Loop',
      variables: { eq: true, i: 5 },
      arrays: { A1: [1, 2, 3, 4, 5], A2: [1, 9, 3, 4, 5] },
      conditionEval: { expression: 'eq', evaluatedTo: 'true', result: true },
      consoleOutput: ['A1 and A2 are equal'],
      newOutput: 'A1 and A2 are equal',
      explanation: 'Since eq is true, the program prints "A1 and A2 are equal" despite the arrays having different elements!'
    }
  ]
};

export const MINIMUM_BUG_TRACE: SimulatorTrace = {
  id: 'Q2T_MINIMUM_BUG',
  title: 'Quiz #2 (Thurs) Part (c) — Running Minimum Initialized to Zero Bug',
  code: `double A[4] = {3.5, 2.0, 8.1, 4.4};
double m = 0;
for(int i=0; i<4; i++) {
    if(A[i] < m) m = A[i];
}
cout << m;`,
  correctOptionIndex: 0,
  options: ['0', '2', '3.5', '8.1'],
  whyWrong: {
    '1': '2 is the true minimum of A, but you only get 2 if m starts at A[0]. Starting at 0 leaves m = 0.',
    '2': '3.5 is A[0], but 3.5 < 0 is false, so m is never set to 3.5.',
    '3': '8.1 is the maximum element, not minimum.'
  },
  coreConcept: 'Running Minimum Trap: Initializing min to 0 fails whenever all elements are positive (A[i] > 0). The condition A[i] < 0 is never true, so m retains 0 (which is not even in the array!). Always initialize m = A[0].',
  commonTrap: 'Initializing min = 0 or max = 0 without considering the array data range.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'double A[4] = {3.5, 2.0, 8.1, 4.4};',
      iterationLabel: 'Initialization',
      variables: {},
      changedVars: ['A'],
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      consoleOutput: [],
      explanation: 'Initialize array A with 4 positive numbers: {3.5, 2.0, 8.1, 4.4}.'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'double m = 0;',
      iterationLabel: 'Initialization',
      variables: { m: 0 },
      changedVars: ['m'],
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      trapWarning: 'Bug Origin: m is set to 0. Since every element in A is > 0, no element will ever be smaller than 0!',
      consoleOutput: [],
      explanation: 'm is initialized to 0. This is the root cause of the bug.'
    },
    // Pass 1
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: 'for(int i=0; i<4; i++) {',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { m: 0, i: 0 },
      changedVars: ['i'],
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      activeArrayIndices: { A: 0 },
      conditionEval: { expression: 'i < 4', evaluatedTo: '0 < 4', result: true },
      consoleOutput: [],
      explanation: 'i = 0: Check A[0] (3.5).'
    },
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: '    if(A[i] < m) m = A[i];',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { m: 0, i: 0 },
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      activeArrayIndices: { A: 0 },
      conditionEval: { expression: 'A[0] < m', evaluatedTo: '3.5 < 0', result: false },
      consoleOutput: [],
      explanation: '3.5 < 0 is FALSE! m is not updated and stays 0.'
    },
    // Pass 2
    {
      stepIndex: 4,
      lineNumber: 4,
      lineContent: '    if(A[i] < m) m = A[i];',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { m: 0, i: 1 },
      changedVars: ['i'],
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      activeArrayIndices: { A: 1 },
      conditionEval: { expression: 'A[1] < m', evaluatedTo: '2.0 < 0', result: false },
      consoleOutput: [],
      explanation: '2.0 < 0 is FALSE! Even though 2.0 is the smallest element, it is greater than 0, so m is not updated.'
    },
    // Pass 3
    {
      stepIndex: 5,
      lineNumber: 4,
      lineContent: '    if(A[i] < m) m = A[i];',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { m: 0, i: 2 },
      changedVars: ['i'],
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      activeArrayIndices: { A: 2 },
      conditionEval: { expression: 'A[2] < m', evaluatedTo: '8.1 < 0', result: false },
      consoleOutput: [],
      explanation: '8.1 < 0 is FALSE! m stays 0.'
    },
    // Pass 4
    {
      stepIndex: 6,
      lineNumber: 4,
      lineContent: '    if(A[i] < m) m = A[i];',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { m: 0, i: 3 },
      changedVars: ['i'],
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      activeArrayIndices: { A: 3 },
      conditionEval: { expression: 'A[3] < m', evaluatedTo: '4.4 < 0', result: false },
      consoleOutput: [],
      explanation: '4.4 < 0 is FALSE! Loop terminates with m = 0.'
    },
    // Output
    {
      stepIndex: 7,
      lineNumber: 6,
      lineContent: 'cout << m;',
      iterationLabel: 'Console Output',
      variables: { m: 0, i: 4 },
      arrays: { A: [3.5, 2.0, 8.1, 4.4] },
      consoleOutput: ['0'],
      newOutput: '0',
      explanation: 'Prints "0". 0 was never in the array! Correct algorithm must initialize m = A[0] and loop from i = 1.'
    }
  ]
};

export const SERIES_TOLERANCE_TRACE: SimulatorTrace = {
  id: 'Q2T_SERIES_TOLERANCE',
  title: 'Quiz #2 (Thurs) Part (f) — Infinite Series Break Condition |x^k / k!| < 1.0e-9',
  code: `double x = 2.0, term = 1.0;
int k = 0;
while(1) {
    k++;
    term *= x / k;
    if(fabs(term) < 1.0e-9) break;
}
cout << k;`,
  correctOptionIndex: 0,
  options: ['17', '16', '18', '13'],
  whyWrong: {
    '1': 'At k = 16, 2^16 / 16! ≈ 3.136e-9, which is STILL GREATER than 1.0e-9. The break condition fails!',
    '2': 'k = 17 is the first k where term < 1e-9, so the break exits immediately with k = 17, never reaching 18.',
    '3': 'k = 13 is the solution when x = 1.0, not 2.0.'
  },
  coreConcept: 'In Taylor series approximations, each term relates recurrence-wise: term_k = term_{k-1} * (x / k). When while(1) break-testing on tolerance, check the exact threshold at the boundary.',
  commonTrap: 'Assuming k = 16 is small enough (3.14e-9 > 1e-9) or off-by-one by incrementing k in the wrong place.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'double x = 2.0, term = 1.0;',
      iterationLabel: 'Initialization',
      variables: { x: 2.0, term: 1.0 },
      changedVars: ['x', 'term'],
      consoleOutput: [],
      explanation: 'Initialize x = 2.0 (from A[0]) and initial term = 1.0 (representing 2^0 / 0!).'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'int k = 0;',
      iterationLabel: 'Initialization',
      variables: { x: 2.0, term: 1.0, k: 0 },
      changedVars: ['k'],
      consoleOutput: [],
      explanation: 'Initialize order counter k = 0.'
    },
    {
      stepIndex: 2,
      lineNumber: 5,
      lineContent: '    term *= x / k;',
      iterationLabel: 'Pass 1 (k = 1)',
      variables: { x: 2.0, term: 2.0, k: 1 },
      changedVars: ['k', 'term'],
      conditionEval: { expression: 'fabs(term) < 1.0e-9', evaluatedTo: '2.0 < 1.0e-9', result: false },
      consoleOutput: [],
      explanation: 'k = 1: term = 1.0 * (2.0 / 1) = 2.0. Test 2.0 < 1e-9 is false.'
    },
    {
      stepIndex: 3,
      lineNumber: 5,
      lineContent: '    term *= x / k;',
      iterationLabel: 'Pass 2 (k = 2)',
      variables: { x: 2.0, term: 2.0, k: 2 },
      changedVars: ['k', 'term'],
      conditionEval: { expression: 'fabs(term) < 1.0e-9', evaluatedTo: '2.0 < 1.0e-9', result: false },
      consoleOutput: [],
      explanation: 'k = 2: term = 2.0 * (2.0 / 2) = 2.0. Test 2.0 < 1e-9 is false.'
    },
    {
      stepIndex: 4,
      lineNumber: 5,
      lineContent: '    term *= x / k;',
      iterationLabel: 'Pass 3 (k = 3)',
      variables: { x: 2.0, term: 1.333333, k: 3 },
      changedVars: ['k', 'term'],
      conditionEval: { expression: 'fabs(term) < 1.0e-9', evaluatedTo: '1.3333 < 1.0e-9', result: false },
      consoleOutput: [],
      explanation: 'k = 3: term = 2.0 * (2.0 / 3) = 1.3333. Terms start shrinking rapidly.'
    },
    {
      stepIndex: 5,
      lineNumber: 5,
      lineContent: '    term *= x / k;',
      iterationLabel: 'Pass 15 (k = 15)',
      variables: { x: 2.0, term: '2.509e-08', k: 15 },
      changedVars: ['k', 'term'],
      conditionEval: { expression: 'fabs(term) < 1.0e-9', evaluatedTo: '2.509e-8 < 1.0e-9', result: false },
      consoleOutput: [],
      explanation: 'Fast-forward to pass 15: term = 2.509e-8. Still greater than 1e-9.'
    },
    // Pass 16 - CRITICAL TRAP
    {
      stepIndex: 6,
      lineNumber: 6,
      lineContent: '    if(fabs(term) < 1.0e-9) break;',
      iterationLabel: 'Pass 16 (k = 16) — Critical Boundary',
      variables: { x: 2.0, term: '3.136e-09', k: 16 },
      changedVars: ['k', 'term'],
      conditionEval: { expression: 'fabs(term) < 1.0e-9', evaluatedTo: '3.136e-9 < 1.0e-9', result: false },
      trapWarning: 'Crucial Exam Boundary: 2^16 / 16! = 65536 / 20,922,789,888,000 ≈ 3.136e-9. 3.136e-9 > 1.0e-9, so break does NOT fire!',
      consoleOutput: [],
      explanation: 'k = 16: term = 2.509e-8 * (2/16) ≈ 3.136e-9. Test 3.136e-9 < 1.0e-9 is FALSE! Loop continues to k = 17.'
    },
    // Pass 17 - BREAK FIRES
    {
      stepIndex: 7,
      lineNumber: 6,
      lineContent: '    if(fabs(term) < 1.0e-9) break;',
      iterationLabel: 'Pass 17 (k = 17) — Break Triggered',
      variables: { x: 2.0, term: '3.689e-10', k: 17 },
      changedVars: ['k', 'term'],
      conditionEval: { expression: 'fabs(term) < 1.0e-9', evaluatedTo: '3.689e-10 < 1.0e-9', result: true },
      consoleOutput: [],
      explanation: 'k = 17: term = 3.136e-9 * (2/17) ≈ 3.689e-10. Test 3.689e-10 < 1.0e-9 is TRUE! Break fires immediately!'
    },
    // Output
    {
      stepIndex: 8,
      lineNumber: 8,
      lineContent: 'cout << k;',
      iterationLabel: 'Console Output',
      variables: { x: 2.0, term: '3.689e-10', k: 17 },
      consoleOutput: ['17'],
      newOutput: '17',
      explanation: 'Prints "17" to stdout. The first positive integer where |x^k / k!| < 1.0e-9 is k = 17.'
    }
  ]
};

export const MENU_CONDITION_TRACE: SimulatorTrace = {
  id: 'Q2W_MENU_CONDITION',
  title: 'Quiz #2 (Wed) Part (h) — Input Validation & De Morgan Menu Condition',
  code: `bool done1=false, done2=false, done3=false;
int k;
do {
    // Menu executes: user inputs k
    if(k == 1) { done1 = true; }
    else if(k == 2) { done2 = true; }
    else if(k == 3) { done3 = true; }
} while( !(done1 && done2 && done3) );`,
  correctOptionIndex: 0,
  options: ['!(done1 && done2 && done3)', '!(done1 || done2 || done3)', 'done1 && done2 && done3', 'k != 1 && k != 2 && k != 3'],
  whyWrong: {
    '1': '!(done1 || done2 || done3) stops as soon as ANY ONE item is chosen.',
    '2': 'done1 && done2 && done3 only repeats if all are already done on the first pass (which is impossible since they start false).',
    '3': 'k != 1 && k != 2 && k != 3 checks the current input, not whether all options have been chosen over time.'
  },
  coreConcept: 'De Morgan’s Law in Loop Control: To repeat while at least one item remains undone, repeat while NOT(all done): !(done1 && done2 && done3). Equivalent to !done1 || !done2 || !done3.',
  commonTrap: 'Confusing "all done" (&&) with "any done" (||) when applying negation !.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'bool done1=false, done2=false, done3=false;',
      iterationLabel: 'Initialization',
      variables: { done1: false, done2: false, done3: false },
      changedVars: ['done1', 'done2', 'done3'],
      consoleOutput: [],
      explanation: 'Three boolean completion flags all start at false.'
    },
    {
      stepIndex: 1,
      lineNumber: 5,
      lineContent: '    if(k == 1) { done1 = true; }',
      iterationLabel: 'Pass 1 (User inputs k = 1)',
      variables: { done1: true, done2: false, done3: false, k: 1 },
      changedVars: ['done1', 'k'],
      conditionEval: { expression: '!(done1 && done2 && done3)', evaluatedTo: '!(true && false && false)', result: true },
      consoleOutput: [],
      explanation: 'Pass 1: User chose item 1. Flag done1 becomes true. Condition !(true && false && false) is !(false) = TRUE. Loop repeats!'
    },
    {
      stepIndex: 2,
      lineNumber: 7,
      lineContent: '    else if(k == 3) { done3 = true; }',
      iterationLabel: 'Pass 2 (User inputs k = 3)',
      variables: { done1: true, done2: false, done3: true, k: 3 },
      changedVars: ['done3', 'k'],
      conditionEval: { expression: '!(done1 && done2 && done3)', evaluatedTo: '!(true && false && true)', result: true },
      consoleOutput: [],
      explanation: 'Pass 2: User chose item 3. Flag done3 becomes true. Condition !(true && false && true) is !(false) = TRUE. Loop repeats!'
    },
    {
      stepIndex: 3,
      lineNumber: 6,
      lineContent: '    else if(k == 2) { done2 = true; }',
      iterationLabel: 'Pass 3 (User inputs k = 2)',
      variables: { done1: true, done2: true, done3: true, k: 2 },
      changedVars: ['done2', 'k'],
      conditionEval: { expression: '!(done1 && done2 && done3)', evaluatedTo: '!(true && true && true)', result: false },
      consoleOutput: [],
      explanation: 'Pass 3: User chose item 2. All 3 flags are now TRUE! Condition !(true && true && true) = !(true) = FALSE. The do-while loop ends!'
    }
  ]
};

// -------------------------------------------------------------------------------------------------
// Winter 2024 (M24) Midterm Traces
// -------------------------------------------------------------------------------------------------

export const M24_HALVING_LOOP_TRACE: SimulatorTrace = {
  id: 'M24_HALVING_LOOP',
  title: 'Winter 2024 Midterm Q2(b) — Halving Loop & Post-Loop Print Trap',
  code: `int i, j = 0;
for (i = 5; i > 0; i /= 2) {
    j++;
    cout << j;
}
cout << j;`,
  correctOptionIndex: 0,
  options: ['1233', '123', '1244', '3333'],
  whyWrong: {
    '1': 'Omits the final cout << j statement outside the loop body.',
    '2': 'j only increments 3 times (for i=5, 2, 1), not 4 times.',
    '3': 'j increments sequentially on each pass (1, then 2, then 3).'
  },
  coreConcept: 'Integer halving (i /= 2) truncates towards zero. The loop runs for i=5, i=2, i=1 (3 passes), then when i becomes 0 (1/2 = 0) it terminates. Outside the loop, cout << j prints the final value of j (3) once more, resulting in 1233.',
  commonTrap: 'Forgetting that cout << j appears BOTH inside the loop AND after the loop.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int i, j = 0;',
      iterationLabel: 'Initialization',
      variables: { j: 0 },
      changedVars: ['j'],
      consoleOutput: [],
      explanation: 'Initialize counter j = 0. i is uninitialized until loop header.'
    },
    // Pass 1: i = 5
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'for (i = 5; i > 0; i /= 2) {',
      iterationLabel: 'Pass 1 (i = 5)',
      variables: { i: 5, j: 0 },
      changedVars: ['i'],
      conditionEval: { expression: 'i > 0', evaluatedTo: '5 > 0', result: true },
      consoleOutput: [],
      explanation: 'Initialize i = 5. Condition 5 > 0 is true: enter loop body.'
    },
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: '    j++;',
      iterationLabel: 'Pass 1 (i = 5)',
      variables: { i: 5, j: 1 },
      changedVars: ['j'],
      consoleOutput: [],
      explanation: 'Increment j from 0 to 1.'
    },
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: '    cout << j;',
      iterationLabel: 'Pass 1 (i = 5)',
      variables: { i: 5, j: 1 },
      consoleOutput: ['1'],
      newOutput: '1',
      explanation: 'Print j (1) to console.'
    },
    // Pass 2: i = 2
    {
      stepIndex: 4,
      lineNumber: 2,
      lineContent: 'for (i = 5; i > 0; i /= 2) {',
      iterationLabel: 'Pass 2 (i = 2)',
      variables: { i: 2, j: 1 },
      changedVars: ['i'],
      conditionEval: { expression: 'i > 0', evaluatedTo: '2 > 0', result: true },
      consoleOutput: ['1'],
      explanation: 'Step i /= 2 (5 / 2 = 2 via integer division). Condition 2 > 0 is true: enter loop body.'
    },
    {
      stepIndex: 5,
      lineNumber: 3,
      lineContent: '    j++;',
      iterationLabel: 'Pass 2 (i = 2)',
      variables: { i: 2, j: 2 },
      changedVars: ['j'],
      consoleOutput: [],
      explanation: 'Increment j from 1 to 2.'
    },
    {
      stepIndex: 6,
      lineNumber: 4,
      lineContent: '    cout << j;',
      iterationLabel: 'Pass 2 (i = 2)',
      variables: { i: 2, j: 2 },
      consoleOutput: ['12'],
      newOutput: '2',
      explanation: 'Print j (2) to console. Accumulated output: "12".'
    },
    // Pass 3: i = 1
    {
      stepIndex: 7,
      lineNumber: 2,
      lineContent: 'for (i = 5; i > 0; i /= 2) {',
      iterationLabel: 'Pass 3 (i = 1)',
      variables: { i: 1, j: 2 },
      changedVars: ['i'],
      conditionEval: { expression: 'i > 0', evaluatedTo: '1 > 0', result: true },
      consoleOutput: ['12'],
      explanation: 'Step i /= 2 (2 / 2 = 1). Condition 1 > 0 is true: enter loop body.'
    },
    {
      stepIndex: 8,
      lineNumber: 3,
      lineContent: '    j++;',
      iterationLabel: 'Pass 3 (i = 1)',
      variables: { i: 1, j: 3 },
      changedVars: ['j'],
      consoleOutput: [],
      explanation: 'Increment j from 2 to 3.'
    },
    {
      stepIndex: 9,
      lineNumber: 4,
      lineContent: '    cout << j;',
      iterationLabel: 'Pass 3 (i = 1)',
      variables: { i: 1, j: 3 },
      consoleOutput: ['123'],
      newOutput: '3',
      explanation: 'Print j (3) to console. Accumulated output: "123".'
    },
    // Loop Exit: i = 0
    {
      stepIndex: 10,
      lineNumber: 2,
      lineContent: 'for (i = 5; i > 0; i /= 2) {',
      iterationLabel: 'Loop Exit (i = 0)',
      variables: { i: 0, j: 3 },
      changedVars: ['i'],
      conditionEval: { expression: 'i > 0', evaluatedTo: '0 > 0', result: false },
      trapWarning: 'Integer Division: 1 / 2 = 0. Since 0 > 0 is FALSE, loop terminates!',
      consoleOutput: ['123'],
      explanation: 'Step i /= 2 (1 / 2 = 0). Condition 0 > 0 is false! Loop exits.'
    },
    // Post-loop print
    {
      stepIndex: 11,
      lineNumber: 6,
      lineContent: 'cout << j;',
      iterationLabel: 'Post-Loop Final Print',
      variables: { i: 0, j: 3 },
      trapWarning: 'Post-Loop Trap: cout << j prints the final value of j (3) outside the loop!',
      consoleOutput: ['1233'],
      newOutput: '3',
      explanation: 'Prints j (3) again outside the loop. Final output stream: "1233".'
    }
  ]
};

export const M24_DIGIT_PEEL_TRACE: SimulatorTrace = {
  id: 'M24_DIGIT_PEEL',
  title: 'Winter 2024 Midterm Q2(a) — While Loop Digit Counter',
  code: `int num = 4321, a = 0;
while (num > 0) {
    num = num / 10;
    a++;
}
cout << a;`,
  correctOptionIndex: 0,
  options: ['4', '5', '3', '0'],
  whyWrong: {
    '1': 'Fence-post error: 4321 has exactly 4 digits, not 5.',
    '2': 'The loop continues until num reaches 0, executing for all 4 digits.',
    '3': 'a increments on every pass, ending at 4.'
  },
  coreConcept: 'Integer division by 10 (num = num / 10) peels off the least significant digit on every pass until num reaches 0. Counter a tracks the total number of digits.',
  commonTrap: 'Counting loop iterations incorrectly when num reaches single digits.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int num = 4321, a = 0;',
      iterationLabel: 'Initialization',
      variables: { num: 4321, a: 0 },
      changedVars: ['num', 'a'],
      consoleOutput: [],
      explanation: 'Initialize num = 4321 (simulating user input) and digit counter a = 0.'
    },
    // Pass 1
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'while (num > 0) {',
      iterationLabel: 'Pass 1 (num = 4321)',
      variables: { num: 4321, a: 0 },
      conditionEval: { expression: 'num > 0', evaluatedTo: '4321 > 0', result: true },
      consoleOutput: [],
      explanation: 'Condition 4321 > 0 is true. Enter loop body.'
    },
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: '    num = num / 10;',
      iterationLabel: 'Pass 1',
      variables: { num: 432, a: 0 },
      changedVars: ['num'],
      consoleOutput: [],
      explanation: 'num = 4321 / 10 = 432 (peels off digit 1).'
    },
    {
      stepIndex: 3,
      lineNumber: 4,
      lineContent: '    a++;',
      iterationLabel: 'Pass 1',
      variables: { num: 432, a: 1 },
      changedVars: ['a'],
      consoleOutput: [],
      explanation: 'Increment digit counter a to 1.'
    },
    // Pass 2
    {
      stepIndex: 4,
      lineNumber: 3,
      lineContent: '    num = num / 10;',
      iterationLabel: 'Pass 2',
      variables: { num: 43, a: 1 },
      changedVars: ['num'],
      conditionEval: { expression: 'num > 0', evaluatedTo: '432 > 0', result: true },
      consoleOutput: [],
      explanation: 'num = 432 / 10 = 43 (peels off digit 2).'
    },
    {
      stepIndex: 5,
      lineNumber: 4,
      lineContent: '    a++;',
      iterationLabel: 'Pass 2',
      variables: { num: 43, a: 2 },
      changedVars: ['a'],
      consoleOutput: [],
      explanation: 'Increment digit counter a to 2.'
    },
    // Pass 3
    {
      stepIndex: 6,
      lineNumber: 3,
      lineContent: '    num = num / 10;',
      iterationLabel: 'Pass 3',
      variables: { num: 4, a: 2 },
      changedVars: ['num'],
      conditionEval: { expression: 'num > 0', evaluatedTo: '43 > 0', result: true },
      consoleOutput: [],
      explanation: 'num = 43 / 10 = 4 (peels off digit 3).'
    },
    {
      stepIndex: 7,
      lineNumber: 4,
      lineContent: '    a++;',
      iterationLabel: 'Pass 3',
      variables: { num: 4, a: 3 },
      changedVars: ['a'],
      consoleOutput: [],
      explanation: 'Increment digit counter a to 3.'
    },
    // Pass 4
    {
      stepIndex: 8,
      lineNumber: 3,
      lineContent: '    num = num / 10;',
      iterationLabel: 'Pass 4',
      variables: { num: 0, a: 3 },
      changedVars: ['num'],
      conditionEval: { expression: 'num > 0', evaluatedTo: '4 > 0', result: true },
      consoleOutput: [],
      explanation: 'num = 4 / 10 = 0 (peels off final digit 4).'
    },
    {
      stepIndex: 9,
      lineNumber: 4,
      lineContent: '    a++;',
      iterationLabel: 'Pass 4',
      variables: { num: 0, a: 4 },
      changedVars: ['a'],
      consoleOutput: [],
      explanation: 'Increment digit counter a to 4.'
    },
    // Exit & print
    {
      stepIndex: 10,
      lineNumber: 2,
      lineContent: 'while (num > 0) {',
      iterationLabel: 'Loop Exit (num = 0)',
      variables: { num: 0, a: 4 },
      conditionEval: { expression: 'num > 0', evaluatedTo: '0 > 0', result: false },
      consoleOutput: [],
      explanation: 'Condition 0 > 0 is false! Loop terminates.'
    },
    {
      stepIndex: 11,
      lineNumber: 6,
      lineContent: 'cout << a;',
      iterationLabel: 'Console Output',
      variables: { num: 0, a: 4 },
      consoleOutput: ['4'],
      newOutput: '4',
      explanation: 'Prints "4" to stdout: 4321 has 4 digits.'
    }
  ]
};

export const M24_SHORT_CIRCUIT_TRACE: SimulatorTrace = {
  id: 'M24_SHORT_CIRCUIT',
  title: 'Winter 2024 Midterm Q3(a) — Short-Circuit Logical Evaluation & Decrement',
  code: `int found = 1, count = 4;
if (!found || --count == 0) cout << "safe\\n";
cout << "count = " << count;`,
  correctOptionIndex: 0,
  options: ['count = 3', 'count = 4', 'safe\\ncount = 3', 'safe\\ncount = 4'],
  whyWrong: {
    '1': 'Assumes || short-circuited and skipped --count. But !found is !1 = false, so RHS MUST be evaluated.',
    '2': 'Prints "safe" only if the condition is true. 3 == 0 is false, so "safe" does NOT print.',
    '3': 'Both wrong: "safe" does not print and count decrements to 3.'
  },
  coreConcept: 'Short-Circuit Rules: In A || B, if A is false, B MUST be evaluated. Since found = 1, !found is false, so --count executes, decrementing count from 4 to 3. Then 3 == 0 is false, so the if block is skipped.',
  commonTrap: 'Assuming logical OR always short-circuits without checking whether the left operand was true or false.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int found = 1, count = 4;',
      iterationLabel: 'Initialization',
      variables: { found: 1, count: 4 },
      changedVars: ['found', 'count'],
      consoleOutput: [],
      explanation: 'Initialize found = 1 and count = 4.'
    },
    {
      stepIndex: 1,
      lineNumber: 2,
      lineContent: 'if (!found || --count == 0) cout << "safe\\n";',
      iterationLabel: 'Left Operand Evaluation',
      variables: { found: 1, count: 4 },
      conditionEval: { expression: '!found', evaluatedTo: '!1 = false', result: false },
      trapWarning: '!found is FALSE! Logical OR (||) cannot short-circuit when the left side is false. It MUST evaluate the right operand!',
      consoleOutput: [],
      explanation: '!found evaluates to !1 = false. Therefore, C++ must evaluate the right operand (--count == 0).'
    },
    {
      stepIndex: 2,
      lineNumber: 2,
      lineContent: 'if (!found || --count == 0) cout << "safe\\n";',
      iterationLabel: 'Right Operand Pre-decrement',
      variables: { found: 1, count: 3 },
      changedVars: ['count'],
      conditionEval: { expression: '--count == 0', evaluatedTo: '3 == 0', result: false },
      consoleOutput: [],
      explanation: '--count decrements count from 4 to 3. Then 3 == 0 evaluates to false. Neither operand was true, so "safe" does not print!'
    },
    {
      stepIndex: 3,
      lineNumber: 3,
      lineContent: 'cout << "count = " << count;',
      iterationLabel: 'Console Output',
      variables: { found: 1, count: 3 },
      consoleOutput: ['count = 3'],
      newOutput: 'count = 3',
      explanation: 'Prints "count = 3" to stdout. count was decremented by the evaluated RHS expression.'
    }
  ]
};

export const M24_MULTI_VAR_ACCUMULATOR_TRACE: SimulatorTrace = {
  id: 'M24_MULTI_VAR',
  title: 'Winter 2024 Midterm Q3(c) — Multi-Variable Compound Accumulator Trace',
  code: `double x=4, y=4, z=4, q=4;
for(int i=0; i<4; i++) {
    x = x * 1.5;
    y *= 2;
    z /= 2;
    q += 4;
}
cout << x << " " << y << " " << z << " " << q;`,
  correctOptionIndex: 0,
  options: ['20.25 64 0.25 20', '20.25 32 0.5 16', '16 64 0.25 20', '20.25 64 0 20'],
  whyWrong: {
    '1': 'Only 3 passes traced instead of 4.',
    '2': 'x arithmetic error: 4 * 1.5^4 = 20.25, not 16.',
    '3': 'z is a double, so 4 / 2^4 = 4 / 16 = 0.25, not 0 integer truncation.'
  },
  coreConcept: 'Dr. Gordon Simplified Table Approach: Track each variable in its own column across all 4 iterations (i = 0, 1, 2, 3). x grows by 1.5x each time, y doubles, z halves (floating point), q increases by 4.',
  commonTrap: 'Thinking z /= 2 truncates to 0; z is declared as double, so 0.5 / 2 = 0.25.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'double x=4, y=4, z=4, q=4;',
      iterationLabel: 'Initialization',
      variables: { x: 4.0, y: 4.0, z: 4.0, q: 4.0 },
      changedVars: ['x', 'y', 'z', 'q'],
      consoleOutput: [],
      explanation: 'Initialize all four double variables x = 4, y = 4, z = 4, q = 4.'
    },
    // Pass 1
    {
      stepIndex: 1,
      lineNumber: 3,
      lineContent: '    x = x * 1.5; y *= 2; z /= 2; q += 4;',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { x: 6.0, y: 8.0, z: 2.0, q: 8.0, i: 0 },
      changedVars: ['x', 'y', 'z', 'q'],
      consoleOutput: [],
      explanation: 'Pass 1: x = 4*1.5 = 6; y = 4*2 = 8; z = 4/2 = 2; q = 4+4 = 8.'
    },
    // Pass 2
    {
      stepIndex: 2,
      lineNumber: 3,
      lineContent: '    x = x * 1.5; y *= 2; z /= 2; q += 4;',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { x: 9.0, y: 16.0, z: 1.0, q: 12.0, i: 1 },
      changedVars: ['x', 'y', 'z', 'q'],
      consoleOutput: [],
      explanation: 'Pass 2: x = 6*1.5 = 9; y = 8*2 = 16; z = 2/2 = 1; q = 8+4 = 12.'
    },
    // Pass 3
    {
      stepIndex: 3,
      lineNumber: 3,
      lineContent: '    x = x * 1.5; y *= 2; z /= 2; q += 4;',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { x: 13.5, y: 32.0, z: 0.5, q: 16.0, i: 2 },
      changedVars: ['x', 'y', 'z', 'q'],
      consoleOutput: [],
      explanation: 'Pass 3: x = 9*1.5 = 13.5; y = 16*2 = 32; z = 1/2 = 0.5; q = 12+4 = 16.'
    },
    // Pass 4
    {
      stepIndex: 4,
      lineNumber: 3,
      lineContent: '    x = x * 1.5; y *= 2; z /= 2; q += 4;',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { x: 20.25, y: 64.0, z: 0.25, q: 20.0, i: 3 },
      changedVars: ['x', 'y', 'z', 'q'],
      consoleOutput: [],
      explanation: 'Pass 4: x = 13.5*1.5 = 20.25; y = 32*2 = 64; z = 0.5/2 = 0.25; q = 16+4 = 20.'
    },
    // Output
    {
      stepIndex: 5,
      lineNumber: 9,
      lineContent: 'cout << x << " " << y << " " << z << " " << q;',
      iterationLabel: 'Console Output',
      variables: { x: 20.25, y: 64.0, z: 0.25, q: 20.0, i: 4 },
      consoleOutput: ['20.25 64 0.25 20'],
      newOutput: '20.25 64 0.25 20',
      explanation: 'Prints "20.25 64 0.25 20" to stdout.'
    }
  ]
};

// -------------------------------------------------------------------------------------------------
// Fall 2026 Midterm Traces (Live Exam Revision Paper)
// -------------------------------------------------------------------------------------------------

export const FALL2026_Q2A_TRACE: SimulatorTrace = {
  id: 'F26_Q2A',
  title: 'Fall 2026 Midterm Q2(a) — Integer Division, !i Logic & Division by Zero (inf)',
  code: `int i;
double A[5] = {2,3,5,7,11} , x = 0.0;
for(i=0;i<5;i++) {
    if(A[i] > 7) {
        x++;
    } else if ( !i ) {
        x = 1/(i+3);
    } else {
        x = 7.0/(i-1);
    }
    cout << "\\n" << x;
}
cout << "\\n" << i;`,
  correctOptionIndex: 0,
  options: [
    '0\ninf\n7\n3.5\n4.5\n5',
    '0.333\n0\n7\n3.5\n4.5\n5',
    '0\ninf\n7\n3.5\n4.5\n4',
    '0\n7\n7\n3.5\n4.5\n5'
  ],
  whyWrong: {
    '1': 'Integer division 1/(0+3) truncates to 0, NOT 0.333. And 7.0/(1-1) = 7.0/0.0 yields inf, not 0.',
    '2': 'The loop terminates when i reaches 5, so the post-loop print cout << i outputs 5, not 4.',
    '3': 'When i=1, !i is false, so it enters the else branch and computes 7.0/0.0 = inf, not 7.'
  },
  coreConcept: 'Key C++ Rules Tested: (1) Integer division 1/(0+3) evaluates to 0 because both operands are ints. (2) In C++, 0 is false, so !0 is true (branch taken for i=0). (3) Floating-point division by 0.0 (7.0/0.0) yields positive infinity (inf in IEEE-754) without crashing. (4) Strict inequality: when i=3, A[3] is 7, and 7 > 7 is false, directing execution to the else branch (7.0/2 = 3.5). (5) Loop counter i persists after the loop with value 5.',
  commonTrap: 'Assuming 1/3 gives 0.333, assuming 7.0/0.0 crashes the program, or forgetting that 7 > 7 is false.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int i;\ndouble A[5] = {2,3,5,7,11} , x = 0.0;',
      iterationLabel: 'Initialization',
      variables: { x: 0.0 },
      arrays: { A: [2, 3, 5, 7, 11] },
      changedVars: ['x', 'A'],
      consoleOutput: [],
      explanation: 'Declare i. Initialize array A = {2, 3, 5, 7, 11} and double x = 0.0.'
    },
    // Pass 1: i = 0
    {
      stepIndex: 1,
      lineNumber: 3,
      lineContent: 'for(i=0;i<5;i++) {',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { i: 0, x: 0.0 },
      changedVars: ['i'],
      conditionEval: { expression: 'i < 5', evaluatedTo: '0 < 5', result: true },
      consoleOutput: [],
      explanation: 'Initialize loop counter i = 0. Condition 0 < 5 is true: enter loop body.'
    },
    {
      stepIndex: 2,
      lineNumber: 4,
      lineContent: '    if(A[i] > 7) { ... } else if ( !i ) { x = 1/(i+3); }',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { i: 0, x: 0.0 },
      changedVars: ['x'],
      conditionEval: { expression: '!i', evaluatedTo: '!0 -> true', result: true },
      trapWarning: '⚠️ Integer Division Trap: 1/(0+3) is 1/3 between integers, which truncates to 0 (NOT 0.333)!',
      consoleOutput: [],
      explanation: 'A[0] is 2: 2 > 7 is false. Check else-if: !0 is true! Compute x = 1/(0+3) = 1/3. In C++, integer division truncates to 0. Thus x = 0.0.'
    },
    {
      stepIndex: 3,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { i: 0, x: 0.0 },
      consoleOutput: ['0'],
      newOutput: '0',
      explanation: 'Prints x (0) on a new line.'
    },
    // Pass 2: i = 1
    {
      stepIndex: 4,
      lineNumber: 3,
      lineContent: 'for(i=0;i<5;i++) { // i becomes 1',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { i: 1, x: 0.0 },
      changedVars: ['i'],
      conditionEval: { expression: 'i < 5', evaluatedTo: '1 < 5', result: true },
      consoleOutput: ['0'],
      explanation: 'Increment i to 1. Condition 1 < 5 is true: enter loop body.'
    },
    {
      stepIndex: 5,
      lineNumber: 8,
      lineContent: '    } else { x = 7.0/(i-1); }',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { i: 1, x: 'inf' },
      changedVars: ['x'],
      conditionEval: { expression: '7.0 / (1 - 1)', evaluatedTo: '7.0 / 0.0 -> inf', result: true },
      trapWarning: '⚠️ IEEE-754 Floating-Point Division by Zero: 7.0 / 0.0 evaluates to positive infinity (inf) without runtime error!',
      consoleOutput: ['0'],
      explanation: 'A[1] is 3: 3 > 7 is false. !1 is false. Enter else branch: compute x = 7.0 / (1 - 1) = 7.0 / 0.0. In IEEE-754 floating-point, positive double / 0.0 yields inf.'
    },
    {
      stepIndex: 6,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { i: 1, x: 'inf' },
      consoleOutput: ['0', 'inf'],
      newOutput: 'inf',
      explanation: 'Prints x ("inf") on a new line.'
    },
    // Pass 3: i = 2
    {
      stepIndex: 7,
      lineNumber: 3,
      lineContent: 'for(i=0;i<5;i++) { // i becomes 2',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { i: 2, x: 'inf' },
      changedVars: ['i'],
      conditionEval: { expression: 'i < 5', evaluatedTo: '2 < 5', result: true },
      consoleOutput: ['0', 'inf'],
      explanation: 'Increment i to 2. Condition 2 < 5 is true: enter loop body.'
    },
    {
      stepIndex: 8,
      lineNumber: 8,
      lineContent: '    } else { x = 7.0/(i-1); }',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { i: 2, x: 7.0 },
      changedVars: ['x'],
      consoleOutput: ['0', 'inf'],
      explanation: 'A[2] is 5: 5 > 7 false. !2 is false. Enter else: x = 7.0 / (2 - 1) = 7.0 / 1.0 = 7.0.'
    },
    {
      stepIndex: 9,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { i: 2, x: 7.0 },
      consoleOutput: ['0', 'inf', '7'],
      newOutput: '7',
      explanation: 'Prints x (7) on a new line.'
    },
    // Pass 4: i = 3
    {
      stepIndex: 10,
      lineNumber: 3,
      lineContent: 'for(i=0;i<5;i++) { // i becomes 3',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { i: 3, x: 7.0 },
      changedVars: ['i'],
      conditionEval: { expression: 'i < 5', evaluatedTo: '3 < 5', result: true },
      consoleOutput: ['0', 'inf', '7'],
      explanation: 'Increment i to 3. Condition 3 < 5 is true: enter loop body.'
    },
    {
      stepIndex: 11,
      lineNumber: 8,
      lineContent: '    } else { x = 7.0/(i-1); }',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { i: 3, x: 3.5 },
      changedVars: ['x'],
      conditionEval: { expression: 'A[3] > 7', evaluatedTo: '7 > 7 is FALSE', result: false },
      trapWarning: '⚠️ Strict Inequality Trap: A[3] is 7, and 7 > 7 is strictly FALSE! Execution falls to else.',
      consoleOutput: ['0', 'inf', '7'],
      explanation: 'A[3] is 7: 7 > 7 is false! !3 is false. Enter else: x = 7.0 / (3 - 1) = 7.0 / 2.0 = 3.5.'
    },
    {
      stepIndex: 12,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { i: 3, x: 3.5 },
      consoleOutput: ['0', 'inf', '7', '3.5'],
      newOutput: '3.5',
      explanation: 'Prints x (3.5) on a new line.'
    },
    // Pass 5: i = 4
    {
      stepIndex: 13,
      lineNumber: 3,
      lineContent: 'for(i=0;i<5;i++) { // i becomes 4',
      iterationLabel: 'Pass 5 (i = 4)',
      variables: { i: 4, x: 3.5 },
      changedVars: ['i'],
      conditionEval: { expression: 'i < 5', evaluatedTo: '4 < 5', result: true },
      consoleOutput: ['0', 'inf', '7', '3.5'],
      explanation: 'Increment i to 4. Condition 4 < 5 is true: enter loop body.'
    },
    {
      stepIndex: 14,
      lineNumber: 5,
      lineContent: '    if(A[i] > 7) { x++; }',
      iterationLabel: 'Pass 5 (i = 4)',
      variables: { i: 4, x: 4.5 },
      changedVars: ['x'],
      conditionEval: { expression: 'A[4] > 7', evaluatedTo: '11 > 7 -> TRUE', result: true },
      consoleOutput: ['0', 'inf', '7', '3.5'],
      explanation: 'A[4] is 11: 11 > 7 is true! Execute x++: x becomes 3.5 + 1.0 = 4.5.'
    },
    {
      stepIndex: 15,
      lineNumber: 11,
      lineContent: '    cout << "\\n" << x;',
      iterationLabel: 'Pass 5 (i = 4)',
      variables: { i: 4, x: 4.5 },
      consoleOutput: ['0', 'inf', '7', '3.5', '4.5'],
      newOutput: '4.5',
      explanation: 'Prints x (4.5) on a new line.'
    },
    // Loop Exit & Final Print
    {
      stepIndex: 16,
      lineNumber: 3,
      lineContent: 'for(i=0;i<5;i++) { // i becomes 5 -> exits',
      iterationLabel: 'Loop Termination',
      variables: { i: 5, x: 4.5 },
      changedVars: ['i'],
      conditionEval: { expression: 'i < 5', evaluatedTo: '5 < 5 -> FALSE', result: false },
      consoleOutput: ['0', 'inf', '7', '3.5', '4.5'],
      explanation: 'Increment i to 5. Condition 5 < 5 is false: loop exits. i retains value 5.'
    },
    {
      stepIndex: 17,
      lineNumber: 13,
      lineContent: 'cout << "\\n" << i;',
      iterationLabel: 'Post-Loop Output',
      variables: { i: 5, x: 4.5 },
      consoleOutput: ['0', 'inf', '7', '3.5', '4.5', '5'],
      newOutput: '5',
      explanation: 'Prints post-loop value of i (5) on a new line.'
    }
  ]
};

export const FALL2026_Q2B_TRACE: SimulatorTrace = {
  id: 'F26_Q2B',
  title: 'Fall 2026 Midterm Q2(b) — Array Left-Shift, Modulo & Uninitialized Variable Trap',
  code: `int B[] = {11,7,5,3,2,1}, i = 0, x, a = 20 % 7;

while( B[i] >= 2 ) {
    B[i] = B[i+1];
    i++;
    x += B[i];
}

cout << "\\n" << B[2] << " " << B[3] << " " << i << " " << a << " " << x;`,
  correctOptionIndex: 0,
  options: [
    '3 2 5 6 G (or 3 2 5 6 18)',
    '5 3 5 6 18',
    '3 2 4 6 17',
    '3 2 5 2 18'
  ],
  whyWrong: {
    '1': 'Array elements shift leftward: B[2] becomes 3 (copied from B[3]), not 5.',
    '2': 'The loop runs for 5 passes (i reaches 5), terminating when B[5]=1 < 2.',
    '3': '20 % 7 equals 6 (20 / 7 = 2 remainder 6), not 2.'
  },
  coreConcept: 'Key C++ Rules Tested: (1) Array left-shift: B[i] = B[i+1] copies each element into the predecessor index. (2) Loop continuation condition: B[i] >= 2 checks the updated element at the current index. (3) Uninitialized variable trap: int x is declared without = 0, so it starts with indeterminate Garbage memory (G); adding to x keeps it Garbage! (4) Modulo operator: 20 % 7 computes the integer remainder, which is 6.',
  commonTrap: 'Forgetting that x was never initialized to 0 (Dr. Gordon expects "Garbage" or "G" in the answer box), or computing 20 % 7 incorrectly.',
  steps: [
    {
      stepIndex: 0,
      lineNumber: 1,
      lineContent: 'int B[] = {11,7,5,3,2,1}, i = 0, x, a = 20 % 7;',
      iterationLabel: 'Initialization',
      variables: { i: 0, x: 'Garbage (uninitialized)', a: 6 },
      arrays: { B: [11, 7, 5, 3, 2, 1] },
      changedVars: ['B', 'i', 'x', 'a'],
      trapWarning: '⚠️ Uninitialized Variable Alert: int x has NO initial value! In C++, local automatic variables contain garbage memory.',
      consoleOutput: [],
      explanation: 'Initialize B = {11, 7, 5, 3, 2, 1}, i = 0, a = 20 % 7 = 6. Note: x is UNINITIALIZED (contains garbage memory).'
    },
    // Pass 1: i = 0
    {
      stepIndex: 1,
      lineNumber: 3,
      lineContent: 'while( B[i] >= 2 ) {',
      iterationLabel: 'Pass 1 (i = 0)',
      variables: { i: 0, x: 'Garbage', a: 6 },
      conditionEval: { expression: 'B[0] >= 2', evaluatedTo: '11 >= 2 -> TRUE', result: true },
      consoleOutput: [],
      explanation: 'Check loop condition: B[0] is 11 >= 2 is true. Enter loop body.'
    },
    {
      stepIndex: 2,
      lineNumber: 4,
      lineContent: '    B[i] = B[i+1];\n    i++;\n    x += B[i];',
      iterationLabel: 'Pass 1 (i = 0 -> 1)',
      variables: { i: 1, x: 'Garbage (G + 7)', a: 6 },
      arrays: { B: [7, 7, 5, 3, 2, 1] },
      changedVars: ['B', 'i', 'x'],
      consoleOutput: [],
      explanation: 'B[0] = B[1] = 7. Increment i to 1. Accumulate x += B[1] (7): x remains Garbage (or 7 if x was 0). Array is now {7, 7, 5, 3, 2, 1}.'
    },
    // Pass 2: i = 1
    {
      stepIndex: 3,
      lineNumber: 3,
      lineContent: 'while( B[i] >= 2 ) {',
      iterationLabel: 'Pass 2 (i = 1)',
      variables: { i: 1, x: 'Garbage (G + 7)', a: 6 },
      conditionEval: { expression: 'B[1] >= 2', evaluatedTo: '7 >= 2 -> TRUE', result: true },
      consoleOutput: [],
      explanation: 'Check condition: B[1] is 7 >= 2 is true. Enter loop body.'
    },
    {
      stepIndex: 4,
      lineNumber: 4,
      lineContent: '    B[i] = B[i+1];\n    i++;\n    x += B[i];',
      iterationLabel: 'Pass 2 (i = 1 -> 2)',
      variables: { i: 2, x: 'Garbage (G + 12)', a: 6 },
      arrays: { B: [7, 5, 5, 3, 2, 1] },
      changedVars: ['B', 'i', 'x'],
      consoleOutput: [],
      explanation: 'B[1] = B[2] = 5. Increment i to 2. x += B[2] (5): x is G + 12 (or 12). Array is {7, 5, 5, 3, 2, 1}.'
    },
    // Pass 3: i = 2
    {
      stepIndex: 5,
      lineNumber: 3,
      lineContent: 'while( B[i] >= 2 ) {',
      iterationLabel: 'Pass 3 (i = 2)',
      variables: { i: 2, x: 'Garbage (G + 12)', a: 6 },
      conditionEval: { expression: 'B[2] >= 2', evaluatedTo: '5 >= 2 -> TRUE', result: true },
      consoleOutput: [],
      explanation: 'Check condition: B[2] is 5 >= 2 is true. Enter loop body.'
    },
    {
      stepIndex: 6,
      lineNumber: 4,
      lineContent: '    B[i] = B[i+1];\n    i++;\n    x += B[i];',
      iterationLabel: 'Pass 3 (i = 2 -> 3)',
      variables: { i: 3, x: 'Garbage (G + 15)', a: 6 },
      arrays: { B: [7, 5, 3, 3, 2, 1] },
      changedVars: ['B', 'i', 'x'],
      consoleOutput: [],
      explanation: 'B[2] = B[3] = 3. Increment i to 3. x += B[3] (3): x is G + 15 (or 15). Array is {7, 5, 3, 3, 2, 1}.'
    },
    // Pass 4: i = 3
    {
      stepIndex: 7,
      lineNumber: 3,
      lineContent: 'while( B[i] >= 2 ) {',
      iterationLabel: 'Pass 4 (i = 3)',
      variables: { i: 3, x: 'Garbage (G + 15)', a: 6 },
      conditionEval: { expression: 'B[3] >= 2', evaluatedTo: '3 >= 2 -> TRUE', result: true },
      consoleOutput: [],
      explanation: 'Check condition: B[3] is 3 >= 2 is true. Enter loop body.'
    },
    {
      stepIndex: 8,
      lineNumber: 4,
      lineContent: '    B[i] = B[i+1];\n    i++;\n    x += B[i];',
      iterationLabel: 'Pass 4 (i = 3 -> 4)',
      variables: { i: 4, x: 'Garbage (G + 17)', a: 6 },
      arrays: { B: [7, 5, 3, 2, 2, 1] },
      changedVars: ['B', 'i', 'x'],
      consoleOutput: [],
      explanation: 'B[3] = B[4] = 2. Increment i to 4. x += B[4] (2): x is G + 17 (or 17). Array is {7, 5, 3, 2, 2, 1}.'
    },
    // Pass 5: i = 4
    {
      stepIndex: 9,
      lineNumber: 3,
      lineContent: 'while( B[i] >= 2 ) {',
      iterationLabel: 'Pass 5 (i = 4)',
      variables: { i: 4, x: 'Garbage (G + 17)', a: 6 },
      conditionEval: { expression: 'B[4] >= 2', evaluatedTo: '2 >= 2 -> TRUE', result: true },
      consoleOutput: [],
      explanation: 'Check condition: B[4] is 2 >= 2 is TRUE! Enter loop body.'
    },
    {
      stepIndex: 10,
      lineNumber: 4,
      lineContent: '    B[i] = B[i+1];\n    i++;\n    x += B[i];',
      iterationLabel: 'Pass 5 (i = 4 -> 5)',
      variables: { i: 5, x: 'Garbage (G + 18)', a: 6 },
      arrays: { B: [7, 5, 3, 2, 1, 1] },
      changedVars: ['B', 'i', 'x'],
      consoleOutput: [],
      explanation: 'B[4] = B[5] = 1. Increment i to 5. x += B[5] (1): x is G + 18 (or 18). Array is {7, 5, 3, 2, 1, 1}.'
    },
    // Termination: i = 5
    {
      stepIndex: 11,
      lineNumber: 3,
      lineContent: 'while( B[i] >= 2 ) {',
      iterationLabel: 'Loop Termination',
      variables: { i: 5, x: 'Garbage (G + 18)', a: 6 },
      conditionEval: { expression: 'B[5] >= 2', evaluatedTo: '1 >= 2 -> FALSE', result: false },
      consoleOutput: [],
      explanation: 'Check condition: B[5] is 1 >= 2 is FALSE! The while loop terminates.'
    },
    // Console Print
    {
      stepIndex: 12,
      lineNumber: 9,
      lineContent: 'cout << "\\n" << B[2] << " " << B[3] << " " << i << " " << a << " " << x;',
      iterationLabel: 'Console Output',
      variables: { i: 5, x: 'Garbage (or 18)', a: 6 },
      consoleOutput: ['3 2 5 6 G'],
      newOutput: '3 2 5 6 G',
      explanation: 'Prints: B[2]=3, B[3]=2, i=5, a=6, x=Garbage (G). Boxed answer in booklet: "3 2 5 6 G" (or "3 2 5 6 18").'
    }
  ]
};

// -------------------------------------------------------------------------------------------------
// Generic Trace Generator: Advanced C++ Simulation Engine
// -------------------------------------------------------------------------------------------------

export function generateGenericTrace(codeSnippet: string, title = 'C++ Code Simulator'): SimulatorTrace {
  const lines = codeSnippet.split('\n');
  const steps: SimulatorStep[] = [];
  const variables: Record<string, string | number | boolean> = {};
  const arrays: Record<string, (string | number)[]> = {};
  const consoleOutput: string[] = [];

  // Helper to safely evaluate mathematical or variable expressions in current environment
  const evalExpr = (exprStr: string): number | string | boolean => {
    let clean = exprStr.trim().replace(/;$/, '');
    // Replace boolean literals
    if (clean === 'true') return true;
    if (clean === 'false') return false;

    // Single character literal: 'a', '\n', ' '
    const charMatch = clean.match(/^'(\\n|\\t|\\r|\\0|.)'$/);
    if (charMatch) {
      if (charMatch[1] === '\\n') return '\n';
      if (charMatch[1] === '\\t') return '\t';
      return charMatch[1];
    }

    // Direct number check
    if (!isNaN(Number(clean)) && clean !== '') {
      return Number(clean);
    }

    // String literal check
    if (clean.startsWith('"') && clean.endsWith('"')) {
      return clean.slice(1, -1);
    }

    // Handle C++ casting: (int)ch or (int)f2 or (char)x
    const castMatch = clean.match(/^\(([a-zA-Z_]\w*)\)\s*(.+)$/);
    if (castMatch) {
      const targetType = castMatch[1];
      const innerVal = evalExpr(castMatch[2]);
      if (targetType === 'int') {
        if (typeof innerVal === 'string' && innerVal.length === 1) {
          return innerVal.charCodeAt(0);
        }
        return Math.trunc(Number(innerVal));
      }
      if (targetType === 'char') {
        return String.fromCharCode(Number(innerVal));
      }
      if (targetType === 'double' || targetType === 'float') {
        return Number(innerVal);
      }
    }

    // Check if it is a single variable name
    if (variables[clean] !== undefined) {
      return variables[clean];
    }

    // Check array indexing: A[i] or B[0]
    const arrMatch = clean.match(/^([a-zA-Z_]\w*)\s*\[\s*([^\]]+)\s*\]$/);
    if (arrMatch) {
      const arrName = arrMatch[1];
      const idxRaw = arrMatch[2];
      const idx = typeof evalExpr(idxRaw) === 'number' ? Number(evalExpr(idxRaw)) : Number(idxRaw);
      if (arrays[arrName] && arrays[arrName][idx] !== undefined) {
        return arrays[arrName][idx];
      }
    }

    // Evaluate basic math with variable replacement
    try {
      let mathExpr = clean;
      // Strip outer parens
      if (mathExpr.startsWith('(') && mathExpr.endsWith(')')) {
        mathExpr = mathExpr.slice(1, -1);
      }

      // Replace array accesses first
      mathExpr = mathExpr.replace(/([a-zA-Z_]\w*)\s*\[\s*([^\]]+)\s*\]/g, (_, arrName, idxExpr) => {
        const idx = Number(evalExpr(idxExpr));
        if (arrays[arrName] && arrays[arrName][idx] !== undefined) {
          return String(arrays[arrName][idx]);
        }
        return '0';
      });

      // Replace known variables
      Object.keys(variables).forEach((v) => {
        const regex = new RegExp(`\\b${v}\\b`, 'g');
        const vVal = variables[v];
        if (typeof vVal === 'string' && vVal.length === 1 && !isNaN(vVal.charCodeAt(0))) {
          // If char variable used in math context
          mathExpr = mathExpr.replace(regex, String(vVal.charCodeAt(0)));
        } else {
          mathExpr = mathExpr.replace(regex, String(vVal));
        }
      });

      // Replace C++ math functions
      mathExpr = mathExpr.replace(/\babs\b/g, 'Math.abs');
      mathExpr = mathExpr.replace(/\bfabs\b/g, 'Math.abs');
      mathExpr = mathExpr.replace(/\bsin\b/g, 'Math.sin');
      mathExpr = mathExpr.replace(/\bcos\b/g, 'Math.cos');
      mathExpr = mathExpr.replace(/\bexp\b/g, 'Math.exp');
      mathExpr = mathExpr.replace(/\bpow\b/g, 'Math.pow');

      // Check for integer division truncation: e.g. 5 / 2 -> Math.trunc(5 / 2)
      mathExpr = mathExpr.replace(/(\b\d+)\s*\/\s*(\b\d+)(?!\.)/g, 'Math.trunc($1 / $2)');

      // eslint-disable-next-line no-eval
      const res = Function(`"use strict"; return (${mathExpr});`)();
      if (typeof res === 'number') {
        return Number.isInteger(res) ? res : Number(res.toFixed(6));
      }
      return res;
    } catch {
      return clean;
    }
  };

  let stepIdx = 0;

  lines.forEach((rawLine, index) => {
    const lineNum = index + 1;
    const trimmed = rawLine.trim();

    // Skip empty lines or pure brace lines
    if (!trimmed || trimmed === '{' || trimmed === '}') {
      return;
    }

    // Separate executable code from inline comment (e.g. u--; // line 1)
    let codePart = trimmed;
    const commentIdx = trimmed.indexOf('//');
    if (commentIdx !== -1) {
      codePart = trimmed.slice(0, commentIdx).trim();
    }

    if (!codePart) {
      return;
    }

    const changed: string[] = [];
    let explanation = `Executing line ${lineNum}: ${trimmed}`;
    let newOut: string | undefined = undefined;
    let condEval: SimulatorStep['conditionEval'] | undefined = undefined;
    let trapWarn: string | undefined = undefined;

    // 1. Array declaration: double A[4] = { 1, 2, 3, 4 }; or int B[] = { 1, 2 };
    const arrDeclMatch = codePart.match(/(?:int|double|float|char|bool)\s+([a-zA-Z_]\w*)\s*(?:\[[^\]]*\])+\s*=\s*\{([^}]+)\}/);
    if (arrDeclMatch) {
      const arrName = arrDeclMatch[1];
      const elements = arrDeclMatch[2].split(',').map((s) => {
        const parsed = Number(s.trim());
        return isNaN(parsed) ? s.trim() : parsed;
      });
      arrays[arrName] = elements;
      changed.push(arrName);
      explanation = `Initialize array '${arrName}[]' with ${elements.length} elements: {${elements.join(', ')}}.`;
    }

    // 2. Chained assignment: a = b = c = 7;
    const chainedMatch = codePart.match(/^([a-zA-Z_]\w*\s*=\s*){2,}([^;]+);/);
    if (chainedMatch) {
      const varNames = [...codePart.matchAll(/([a-zA-Z_]\w*)\s*=/g)].map((m) => m[1]);
      const valPart = codePart.split('=').pop()!.replace(/;$/, '').trim();
      const evaluated = evalExpr(valPart);
      varNames.forEach((v) => {
        variables[v] = evaluated;
        changed.push(v);
      });
      explanation = `Chained assignment: set ${varNames.join(', ')} to ${evaluated}.`;
    }

    // 3. Variable declarations: int x = 10, y = 20; or double u=0.0, v=1.1; or int y, z;
    const typeDeclMatch = codePart.match(/^(?:int|double|float|char|bool)\s+([^;]+);/);
    if (typeDeclMatch && !arrDeclMatch && !chainedMatch) {
      const isIntType = codePart.startsWith('int') || codePart.startsWith('bool');
      const isCharType = codePart.startsWith('char');
      const declList = typeDeclMatch[1].split(',');
      declList.forEach((declItem) => {
        const parts = declItem.split('=').map((p) => p.trim());
        const varName = parts[0];
        if (parts.length > 1) {
          const evaluated = evalExpr(parts[1]);
          let finalVal = evaluated;
          if (isIntType && typeof evaluated === 'number') {
            finalVal = Math.trunc(evaluated);
          } else if (isCharType) {
            finalVal = String(evaluated);
          }
          variables[varName] = finalVal;
          changed.push(varName);
        } else {
          // Uninitialized variable
          variables[varName] = 'Garbage (uninitialized)';
          changed.push(varName);
          trapWarn = `⚠️ Uninitialized Variable: '${varName}' is not assigned! In C++, local uninitialized variables contain garbage memory.`;
        }
      });
      explanation = `Variable declaration: initialized ${changed.join(', ')}.`;
    }

    // 4. Increment / Decrement: u--; or w++; or ++i;
    const incDecMatch = codePart.match(/^([a-zA-Z_]\w*)(\+\+|--);/);
    if (incDecMatch) {
      const varName = incDecMatch[1];
      const op = incDecMatch[2];
      const currentVal = typeof variables[varName] === 'number' ? (variables[varName] as number) : 0;
      const nextVal = op === '++' ? currentVal + 1 : currentVal - 1;
      variables[varName] = nextVal;
      changed.push(varName);
      explanation = `${op === '++' ? 'Increment' : 'Decrement'} ${varName} from ${currentVal} to ${nextVal}.`;
    }

    // 5. Compound assignments: x += 3; x -= 2; x *= 2; x /= 4;
    const compoundMatch = codePart.match(/^([a-zA-Z_]\w*)\s*(\+=|-=|\*=|\/=)\s*([^;]+);/);
    if (compoundMatch) {
      const varName = compoundMatch[1];
      const op = compoundMatch[2];
      const rhs = evalExpr(compoundMatch[3]);
      const currentVal = typeof variables[varName] === 'number' ? (variables[varName] as number) : 0;
      let nextVal = currentVal;
      if (typeof rhs === 'number') {
        if (op === '+=') nextVal = currentVal + rhs;
        if (op === '-=') nextVal = currentVal - rhs;
        if (op === '*=') nextVal = currentVal * rhs;
        if (op === '/=') nextVal = Math.trunc(currentVal / rhs);
      }
      variables[varName] = nextVal;
      changed.push(varName);
      explanation = `Compound assignment: ${varName} ${op} ${rhs} ⟶ ${varName} = ${nextVal}.`;
    }

    // 6. Standard assignment: z = y + 1; or x = 2*x + 1;
    const assignMatch = codePart.match(/^([a-zA-Z_]\w*)\s*=\s*([^;]+);/);
    if (assignMatch && !codePart.startsWith('int') && !codePart.startsWith('double') && !codePart.startsWith('float') && !codePart.startsWith('char') && !chainedMatch) {
      const varName = assignMatch[1];
      const rhsExpr = assignMatch[2].trim();
      const rhsVal = evalExpr(rhsExpr);

      if (typeof variables[rhsExpr] === 'string' && String(variables[rhsExpr]).includes('Garbage')) {
        variables[varName] = 'Garbage (from ' + rhsExpr + ')';
        trapWarn = `⚠️ Garbage Propagation: Using uninitialized variable '${rhsExpr}' puts garbage into '${varName}'!`;
      } else {
        variables[varName] = rhsVal;
      }
      changed.push(varName);
      explanation = `Assign '${varName}' = ${variables[varName]} (evaluated from '${rhsExpr}').`;
    }

    // 7. Cout statements: cout << ...
    if (codePart.includes('cout')) {
      const coutContent = codePart.replace(/cout\s*<<\s*/, '').replace(/;$/, '');
      const parts = coutContent.split('<<').map((p) => p.trim());
      const printedParts: string[] = [];

      parts.forEach((p) => {
        if (p.startsWith('"') && p.endsWith('"')) {
          printedParts.push(p.slice(1, -1).replace(/\\n/g, '\n').replace(/\\t/g, '\t'));
        } else if (p.startsWith("'") && p.endsWith("'")) {
          printedParts.push(evalExpr(p) as string);
        } else if (p === 'endl') {
          printedParts.push('\n');
        } else {
          const evaluated = evalExpr(p);
          if (String(evaluated).includes('Garbage')) {
            printedParts.push('G (Garbage memory)');
            trapWarn = '⚠️ Output Trap: Printing an uninitialized or out-of-bounds variable produces Garbage (G)!';
          } else {
            printedParts.push(String(evaluated));
          }
        }
      });

      const fullPrinted = printedParts.join('');
      const printedLines = fullPrinted.split('\n');
      printedLines.forEach((pl) => {
        if (pl.length > 0) {
          consoleOutput.push(pl);
        }
      });

      newOut = fullPrinted.trim();
      explanation = `Print to console (stdout): "${newOut}".`;
    }

    // 8. If condition evaluation: if ( i == 1 ) or if ( (z/2) > 1 )
    const ifMatch = codePart.match(/^if\s*\((.*)\)/);
    if (ifMatch) {
      const cond = ifMatch[1];
      const res = Boolean(evalExpr(cond));
      condEval = {
        expression: cond,
        evaluatedTo: String(res),
        result: res
      };
      explanation = `Evaluate condition 'if (${cond})' ⟶ ${res ? 'TRUE (execute branch)' : 'FALSE (skip branch)'}.`;
    }

    // 9. For loop header: for(int i=0; i<5; i++)
    const forMatch = codePart.match(/^for\s*\((.*?);(.*?);(.*?)\)/);
    if (forMatch) {
      const iterInit = forMatch[1].trim();
      const iterCond = forMatch[2].trim();
      const iterStep = forMatch[3].trim();
      explanation = `Loop header: initialize (${iterInit}), test condition (${iterCond}), step (${iterStep}).`;
      condEval = {
        expression: iterCond,
        evaluatedTo: String(evalExpr(iterCond)),
        result: true
      };
    }

    // 10. While loop condition
    const whileMatch = codePart.match(/^while\s*\((.*)\)/);
    if (whileMatch) {
      explanation = `Loop condition: check while (${whileMatch[1]}).`;
      condEval = {
        expression: whileMatch[1].trim(),
        evaluatedTo: String(evalExpr(whileMatch[1].trim())),
        result: true
      };
    }

    steps.push({
      stepIndex: stepIdx++,
      lineNumber: lineNum,
      lineContent: rawLine,
      variables: { ...variables },
      changedVars: changed.length > 0 ? changed : undefined,
      arrays: Object.keys(arrays).length > 0 ? { ...arrays } : undefined,
      consoleOutput: [...consoleOutput],
      newOutput: newOut,
      conditionEval: condEval,
      trapWarning: trapWarn,
      explanation
    });
  });

  return {
    id: 'generic_' + Math.random().toString(36).substring(2, 7),
    title,
    code: codeSnippet,
    steps: steps.length > 0 ? steps : [
      {
        stepIndex: 0,
        lineNumber: 1,
        lineContent: lines[0] || '// C++ Code',
        variables: {},
        consoleOutput: [],
        explanation: 'Review the C++ code snippet.'
      }
    ]
  };
}

// -------------------------------------------------------------------------------------------------
// Trace Resolver: Matches questions to pre-computed traces or synthesizes dynamic trace
// -------------------------------------------------------------------------------------------------

export function getTraceForQuestion(
  codeSnippet: string,
  questionId?: string,
  questionTitle?: string
): SimulatorTrace {
  const normalized = codeSnippet.replace(/\s+/g, ' ').trim();
  const lowerTitle = (questionTitle || '').toLowerCase();
  const qid = questionId || '';

  // 1. Vector Dot Product Accumulator (Quiz 2 Wednesday Part f & Fall 2022 Q1(b))
  if (
    qid === 'TX_MIAE215_19' ||
    normalized.includes('dot += A[i] * B[i]') ||
    normalized.includes('dot product') ||
    lowerTitle.includes('dot product') ||
    (normalized.includes('double dot = 0') && normalized.includes('A[i] * B[i]'))
  ) {
    return DOT_PRODUCT_TRACE;
  }

  // 2. Fall 2023 Midterm Q2(a) — while(1) Array Loop with Break
  if (normalized.includes('while(1)') && normalized.includes('sum += B[i]') && normalized.includes('i > 2')) {
    return F23_A_TRACE;
  }

  // 3. Fall 2023 Midterm Q2(b) — Integer Division & Garbage Memory Trap
  if (normalized.includes('A[i] < -0.11') && normalized.includes('7 + 1/(i+1)')) {
    return F23_B_TRACE;
  }

  // 4. Midterm Review #1 Q2(a) — 2D Array & Epsilon Tolerance Ladder
  if (normalized.includes('j*i + j*j - 6') && normalized.includes('1.0e-7')) {
    return REV_2A_TRACE;
  }

  // 5. Midterm Review #1 Q1 — Array Equality Else-Reset Bug
  if (
    normalized.includes('A1[i] != A2[i]') ||
    normalized.includes('A1 and A2 are equal') ||
    lowerTitle.includes('arrays are equal')
  ) {
    return ARRAY_EQUALITY_BUG_TRACE;
  }

  // 6. Quiz #2 (Thursday) Part (c) — Running Minimum Initialized to Zero Bug
  if (
    (normalized.includes('A[i] < m') && normalized.includes('double m = 0')) ||
    lowerTitle.includes('minimum of a')
  ) {
    return MINIMUM_BUG_TRACE;
  }

  // 7. Quiz #2 (Thursday) Part (f) — Infinite Series Break Condition
  if (
    normalized.includes('term *= x / k') ||
    normalized.includes('fabs(term) < 1.0e-9') ||
    lowerTitle.includes('first positive integer k')
  ) {
    return SERIES_TOLERANCE_TRACE;
  }

  // 8. Quiz #2 (Wednesday) Part (h) — De Morgan Menu Condition
  if (
    (normalized.includes('done1') && normalized.includes('done2') && normalized.includes('done3')) ||
    lowerTitle.includes('menu (k = 1, 2, 3)')
  ) {
    return MENU_CONDITION_TRACE;
  }

  // 9. Winter 2024 Midterm Q2(b) — Halving Loop & Post-Loop Print
  if (
    qid === 'M24-2b' ||
    (normalized.includes('for (i=5; i>0; i/=2)') || (normalized.includes('i /= 2') && normalized.includes('cout << j')))
  ) {
    return M24_HALVING_LOOP_TRACE;
  }

  // 10. Winter 2024 Midterm Q2(a) — Digit Peeler
  if (
    qid === 'M24-2a' ||
    (normalized.includes('num = num / 10') && normalized.includes('a++'))
  ) {
    return M24_DIGIT_PEEL_TRACE;
  }

  // 11. Winter 2024 Midterm Q3(a) — Short-Circuit Logical Decrement
  if (
    qid === 'M24-3a' ||
    (normalized.includes('!found') && normalized.includes('--count'))
  ) {
    return M24_SHORT_CIRCUIT_TRACE;
  }

  // 12. Winter 2024 Midterm Q3(c) — Multi-Variable Compound Accumulator
  if (
    qid === 'M24-3c' ||
    (normalized.includes('x = x * 1.5') && normalized.includes('y *= 2') && normalized.includes('z /= 2'))
  ) {
    return M24_MULTI_VAR_ACCUMULATOR_TRACE;
  }

  // 13. Fall 2026 Midterm Q2(a) — Integer Division, !i Logic & Division by Zero (inf)
  if (
    qid === 'F26-Q2a' ||
    qid === 'TX_MIAE215_28' ||
    (normalized.includes('double A[5] = {2,3,5,7,11}') && normalized.includes('7.0/(i-1)')) ||
    (normalized.includes('1/(i+3)') && normalized.includes('7.0/(i-1)'))
  ) {
    return FALL2026_Q2A_TRACE;
  }

  // 14. Fall 2026 Midterm Q2(b) — Array Left-Shift, Modulo & Uninitialized Accumulator Trap
  if (
    qid === 'F26-Q2b' ||
    qid === 'TX_MIAE215_29' ||
    (normalized.includes('B[] = {11,7,5,3,2,1}') && normalized.includes('20 % 7')) ||
    (normalized.includes('B[i] = B[i+1]') && normalized.includes('20 % 7'))
  ) {
    return FALL2026_Q2B_TRACE;
  }

  // Default to dynamic trace generator
  return generateGenericTrace(codeSnippet, questionTitle || 'MIAE 215 C++ Code Simulator');
}


