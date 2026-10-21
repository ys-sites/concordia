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
    '1 8 / 2 14 / 3 19 / 29 19 26',
    '1 8 / 2 14 / 3 19 / 24 19 21',
    '1 8 / 2 14 / 3 19 / 4 24 / 29 24 25',
    '0 1 / 1 8 / 2 14 / 29 19 26'
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

// Generic trace generator that works on ANY arbitrary C++ snippet
export function generateGenericTrace(codeSnippet: string, title = 'C++ Code Simulator'): SimulatorTrace {
  const lines = codeSnippet.split('\n');
  const steps: SimulatorStep[] = [];
  const variables: Record<string, string | number | boolean> = {};
  const consoleOutput: string[] = [];

  let stepIdx = 0;

  lines.forEach((rawLine, index) => {
    const lineNum = index + 1;
    const trimmed = rawLine.trim();

    // Skip empty lines or pure brace lines
    if (!trimmed || trimmed === '{' || trimmed === '}') {
      return;
    }

    const stepVars: Record<string, string | number | boolean> = { ...variables };
    const changed: string[] = [];
    let explanation = `Executing line ${lineNum}: ${trimmed}`;
    let newOut: string | undefined = undefined;
    let condEval: SimulatorStep['conditionEval'] | undefined = undefined;

    // Detect basic variable declaration: int x = 5; or double y = 2.5;
    const declMatch = trimmed.match(/(?:int|double|float|char|bool)\s+([a-zA-Z_]\w*)\s*=\s*([^;,]+)/);
    if (declMatch) {
      const varName = declMatch[1];
      const valStr = declMatch[2].trim();
      const numVal = Number(valStr);
      const val = !isNaN(numVal) ? numVal : valStr;
      stepVars[varName] = val;
      variables[varName] = val;
      changed.push(varName);
      explanation = `Initialize variable '${varName}' to ${val}.`;
    }

    // Detect cout statements: cout << "\n" << ... or cout << ...;
    if (trimmed.includes('cout')) {
      const coutContent = trimmed.replace(/cout\s*<<\s*/, '').replace(/;$/, '');
      const parts = coutContent.split('<<').map(p => p.trim());
      const printedParts: string[] = [];
      
      parts.forEach(p => {
        if (p.startsWith('"') && p.endsWith('"')) {
          printedParts.push(p.slice(1, -1).replace('\\n', ''));
        } else if (p === 'endl') {
          // newline
        } else if (variables[p] !== undefined) {
          printedParts.push(String(variables[p]));
        } else {
          printedParts.push(p);
        }
      });

      const printedStr = printedParts.join(' ').trim();
      if (printedStr) {
        consoleOutput.push(printedStr);
        newOut = printedStr;
        explanation = `Print to console: "${printedStr}".`;
      } else {
        explanation = `Print newline to console.`;
      }
    }

    // Detect if statement
    const ifMatch = trimmed.match(/^if\s*\((.*)\)/);
    if (ifMatch) {
      const cond = ifMatch[1];
      condEval = {
        expression: cond,
        evaluatedTo: cond,
        result: true
      };
      explanation = `Evaluating condition: if (${cond}).`;
    }

    // Detect for loop
    const forMatch = trimmed.match(/^for\s*\((.*?);(.*?);(.*?)\)/);
    if (forMatch) {
      explanation = `Loop header: for (${forMatch[1]}; ${forMatch[2]}; ${forMatch[3]}).`;
      condEval = {
        expression: forMatch[2].trim(),
        evaluatedTo: forMatch[2].trim(),
        result: true
      };
    }

    // Detect while loop
    const whileMatch = trimmed.match(/^while\s*\((.*)\)/);
    if (whileMatch) {
      explanation = `Loop condition: while (${whileMatch[1]}).`;
      condEval = {
        expression: whileMatch[1].trim(),
        evaluatedTo: whileMatch[1].trim(),
        result: true
      };
    }

    steps.push({
      stepIndex: stepIdx++,
      lineNumber: lineNum,
      lineContent: rawLine,
      variables: { ...stepVars },
      changedVars: changed.length > 0 ? changed : undefined,
      consoleOutput: [...consoleOutput],
      newOutput: newOut,
      conditionEval: condEval,
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

// Find pre-authored trace or synthesize one
export function getTraceForQuestion(
  codeSnippet: string,
  questionId?: string,
  questionTitle?: string
): SimulatorTrace {
  const normalized = codeSnippet.replace(/\s+/g, ' ').trim();

  // Match Fall 2023 Midterm Q2(a)
  if (normalized.includes('while(1)') && normalized.includes('sum += B[i]') && normalized.includes('i > 2')) {
    return F23_A_TRACE;
  }

  // Match Fall 2023 Midterm Q2(b)
  if (normalized.includes('A[i] < -0.11') && normalized.includes('7 + 1/(i+1)')) {
    return F23_B_TRACE;
  }

  // Match Midterm Review #1 Q2(a)
  if (normalized.includes('j*i + j*j - 6') && normalized.includes('1.0e-7')) {
    return REV_2A_TRACE;
  }

  // Default to dynamic trace generator
  return generateGenericTrace(codeSnippet, questionTitle || 'MIAE 215 C++ Code Simulator');
}
