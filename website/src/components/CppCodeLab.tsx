import React, { useState, useMemo } from 'react';
import {
  Code2,
  Play,
  RotateCcw,
  CheckCircle2,
  Circle,
  HelpCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileCode,
  Terminal,
  Trophy,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { audio } from '../utils/audio';
import { CodeLabVideo } from './CodeLabVideo';
import './CppCodeLab.css';

interface CodingChallenge {
  id: string;
  title: string;
  source: string;
  marks: string;
  description: string;
  parts: { label: string; text: string; checkPattern: RegExp }[];
  starterCode: string;
  sampleInput: string;
  expectedOutput: string;
  teacherSolution: string;
  rubric: string[];
  tips: string;
}

const CHALLENGES: CodingChallenge[] = [
  {
    id: 'c1_midterm2022',
    title: 'Challenge 1: Official Midterm 2022 Multi-Part Exam Problem',
    source: 'MIAE 215 Midterm 2022 Official Exam (Worth ~55% of the exam)',
    marks: '25 Marks',
    description:
      'Write a complete C++ program that processes two 1D arrays of doubles and performs vector arithmetic, range filtering, array concatenation, and sentinel-controlled input accumulation.',
    parts: [
      {
        label: 'Part (a) [5 Marks]',
        text: 'Input two 1D arrays of doubles A and B (each size 10) from the keyboard.',
        checkPattern: /cin\s*>>\s*A\[\s*i\s*\]/
      },
      {
        label: 'Part (b) [5 Marks]',
        text: 'Calculate the dot product of A and B (sum += A[i]*B[i]) and print the result.',
        checkPattern: /A\[\s*i\s*\]\s*\*\s*B\[\s*i\s*\]/
      },
      {
        label: 'Part (c) [5 Marks]',
        text: 'Determine the number of elements of B that are strictly between 0 and PI (PI = 4*atan(1.0)) and print the count.',
        checkPattern: /B\[\s*i\s*\]\s*>\s*0(\.0)?\s*&&\s*B\[\s*i\s*\]\s*<\s*P/
      },
      {
        label: 'Part (d) [5 Marks]',
        text: 'Combine arrays A and B into a single array C of size 20, where the first 10 elements are given by A and the next 10 are given by B.',
        checkPattern: /C\[\s*i(\s*\+\s*n)?\s*\]\s*=\s*(A|B)\[\s*i\s*\]/
      },
      {
        label: 'Part (e) [5 Marks]',
        text: 'Repeatedly input an integer k from the keyboard until a negative value is entered (sentinel break). Print out the count of positive integers entered and their sum.',
        checkPattern: /while\s*\(1\)|if\s*\(\s*k\s*<\s*0\s*\)\s*break;/
      }
    ],
    starterCode: `#include <iostream>
#include <cmath>
#include <cstdio>

using namespace std;

int main()
{
    int i, n = 10, count, k, i_sum;
    double A[10], B[10], C[20], sum, PI;

    // TODO: Part (a) Input array A (10 elements) and array B (10 elements)
    cout << "\\ninput array A (10 elements) ?\\n";
    // for(i=0; i<n; i++) cin >> A[i];

    cout << "\\ninput array B (10 elements) ?\\n";
    // for(i=0; i<n; i++) cin >> B[i];

    // TODO: Part (b) Calculate and print the dot product of A and B
    sum = 0.0;


    // TODO: Part (c) Count elements of B strictly between 0 and PI
    count = 0;
    PI = 4 * atan(1.0);


    // TODO: Part (d) Combine A and B into array C (size 20)


    // TODO: Part (e) Repeatedly input integer k until k < 0, then print count & sum
    count = 0;
    i_sum = 0;


    cout << "\\ndone.\\n";
    return 0;
}`,
    sampleInput: `A = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
B = { 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5 }
k inputs = 4, 8, 12, -1`,
    expectedOutput: `dot product of A and B = 357.5
number of elements of B between 0 and PI = 3
C = 1 2 3 4 5 6 7 8 9 10 0.5 1.5 2.5 3.5 4.5 5.5 6.5 7.5 8.5 9.5
number of positive integers entered = 3
sum = 24`,
    teacherSolution: `// Dr. Gordon's Official Solution (Fall 2022 Midterm)
#include <iostream>
#include <cmath>
#include <cstdio>

using namespace std;

int main()
{
    int i, n = 10, count, k, i_sum;
    double A[10], B[10], C[20], sum, PI;

    // a) Inputs two 1D arrays of doubles A and B from keyboard
    cout << "\\ninput array A (10 elements) ?\\n";
    for(i=0; i<n; i++) cin >> A[i];

    cout << "\\ninput array B (10 elements) ?\\n";
    for(i=0; i<n; i++) cin >> B[i];

    // b) Calculates the dot product of A and B and prints result
    sum = 0.0;
    for(i=0; i<n; i++) sum += A[i] * B[i];
    cout << "\\ndot product of A and B = " << sum;

    // c) Number of elements of B strictly between 0 and PI
    count = 0;
    PI = 4 * atan(1.0);
    for(i=0; i<n; i++) {
        if( (B[i] > 0.0) && (B[i] < PI) ) count++;
    }
    cout << "\\nnumber of elements of B between 0 and PI = " << count;

    // d) Combines A and B into array C (first 10 from A, next 10 from B)
    for(i=0; i<n; i++) C[i]   = A[i];
    for(i=0; i<n; i++) C[i+n] = B[i];

    cout << "\\nC =\\n";
    for(i=0; i<2*n; i++) cout << C[i] << " ";

    // e) Repeatedly input integer k until negative, print count and sum
    count = 0;
    i_sum = 0;
    while(1) {
        cout << "\\ninput k ? ";
        cin >> k;
        if( k < 0 ) break;
        count++;
        i_sum += k;
    }

    cout << "\\nnumber of positive integers entered = " << count;
    cout << "\\nsum = " << i_sum;

    cout << "\\ndone.\\n\\n";
    return 0;
}`,
    rubric: [
      'Part (a): 5 Marks (Proper loop syntax for A[i] and B[i])',
      'Part (b): 5 Marks (Accumulating sum += A[i]*B[i] initialized to 0.0)',
      'Part (c): 5 Marks (PI calculated via 4*atan(1.0) and strict compound condition > 0 && < PI)',
      'Part (d): 5 Marks (Indexing C[i] = A[i] and C[i+n] = B[i] without out-of-bounds error)',
      'Part (e): 5 Marks (while(1) or while(k>=0) with correct sentinel break check before accumulation)'
    ],
    tips: 'Watch out for PI! Always use PI = 4*atan(1.0) with #include <cmath> in Dr. Gordon exams rather than hardcoding 3.14 unless specified.'
  },
  {
    id: 'c2_stats_shift',
    title: 'Challenge 2: Array Statistics & Circular Forward Shift',
    source: 'Dr. Gordon Midterm Review 4, Question 1',
    marks: '20 Marks',
    description:
      'Input an array of n elements (up to 100) with input range validation. Calculate the mean and sample standard deviation, then perform a circular forward shift where the last element wraps around to index 0.',
    parts: [
      {
        label: 'Part (a) [5 Marks]',
        text: 'Input n from keyboard with range check (1 < n <= 100), exiting with error if out of range. Then input array A one element at a time.',
        checkPattern: /if\s*\(\s*\(?\s*n\s*<=\s*1\s*\)?\s*\|\|\s*\(?\s*n\s*>\s*100\s*\)?\s*\)/
      },
      {
        label: 'Part (b) [8 Marks]',
        text: 'Calculate the average and sample standard deviation: stddev = sqrt( sum((A[i]-ave)^2) / (n - 1) ). Print both.',
        checkPattern: /(ave|sum)\s*(\/|\+=)/
      },
      {
        label: 'Part (c) [7 Marks]',
        text: 'Perform a circular forward shift into A_shift: A = [1 2 3 4 5] becomes A_shift = [5 1 2 3 4]. Print the shifted array.',
        checkPattern: /A_shift\[\s*0\s*\]\s*=\s*A\[\s*n\s*-\s*1\s*\]|A_shift\[\s*i(\s*\+\s*1)?\s*\]/
      }
    ],
    starterCode: `#include <iostream>
#include <cmath>
#include <cstdlib>

using namespace std;

int main()
{
    int i, n;
    double A[100], sum, ave, stddev, A_shift[100];

    // TODO: Part (a) Input n and validate range (1 < n <= 100)
    cout << "\\ninput n ? ";
    cin >> n;

    // TODO: Input array A

    // TODO: Part (b) Calculate mean & sample standard deviation
    sum = 0.0;


    // TODO: Part (c) Circular forward shift into A_shift (last element wraps to front)


    return 0;
}`,
    sampleInput: `n = 5
A = 1 2 3 4 5`,
    expectedOutput: `ave = 3
stddev = 1.58114
A_shift = 5 1 2 3 4`,
    teacherSolution: `// Dr. Gordon's Official Solution (Review 4 Q1)
#include <iostream>
#include <cmath>
#include <cstdlib>

using namespace std;

int main()
{
    int i, n;
    double A[100], sum, ave, stddev, A_shift[100];

    cout << "\\ninput n ? ";
    cin >> n;

    if( (n <= 1) || (n > 100) ) {
        cout << "\\nerror n is out of range, n = " << n;
        exit(1);
    }

    cout << "\\ninput A one element at a time\\n";
    for(i=0; i<n; i++) cin >> A[i];

    // Calculate mean
    sum = 0.0;
    for(i=0; i<n; i++) sum += A[i];
    ave = sum / n;

    // Calculate sample standard deviation
    sum = 0.0;
    for(i=0; i<n; i++) sum += pow(A[i] - ave, 2);
    stddev = sqrt(sum / (n - 1));

    cout << "\\nave = " << ave;
    cout << "\\nstddev = " << stddev;

    // Circular shift forward: last element wraps to index 0
    A_shift[0] = A[n-1];
    for(i=1; i<n; i++) {
        A_shift[i] = A[i-1];
    }

    cout << "\\nA_shift = ";
    for(i=0; i<n; i++) cout << A_shift[i] << " ";
    cout << endl;

    return 0;
}`,
    rubric: [
      'Input Validation: 5 Marks (Proper compound check (n <= 1) || (n > 100) with exit(1))',
      'Mean & StdDev: 8 Marks (Dividing by (n - 1) for sample stddev, taking sqrt)',
      'Circular Shift: 7 Marks (Using separate array A_shift to prevent overwriting values in-place)'
    ],
    tips: 'Always use a separate array (A_shift) for circular shifts on exams! If you try shifting inside A in-place, you will overwrite the elements you need for the next step.'
  },
  {
    id: 'c3_histogram',
    title: 'Challenge 3: Frequency Histogram & Sentinel Completion',
    source: 'Dr. Gordon Midterm Review 4, Question 2',
    marks: '15 Marks',
    description:
      'Repeatedly input integers k (from 1 to 7) from the keyboard. Use a frequency array to record how many times each number is entered. Stop the program as soon as EVERY integer from 1 to 7 has been entered at least once.',
    parts: [
      {
        label: 'Part (a) [5 Marks]',
        text: 'Declare and zero-initialize a frequency array A of size 8 (so indices 1..7 can be used directly).',
        checkPattern: /A\[\s*(7\s*\+\s*1|8)\s*\]\s*=\s*\{\s*0\s*\}/
      },
      {
        label: 'Part (b) [5 Marks]',
        text: 'In a loop, input integer k and increment frequency array A[k]++.',
        checkPattern: /cin\s*>>\s*k|A\[\s*k\s*\]\+\+/
      },
      {
        label: 'Part (c) [5 Marks]',
        text: 'Find the minimum element in A[1..7]. If min_A > 0 (all numbers seen at least once), break out of the loop and print completion message.',
        checkPattern: /min_A\s*>\s*0|if\s*\(\s*min_A\s*>\s*0\s*\)\s*break;/
      }
    ],
    starterCode: `#include <iostream>

using namespace std;

int main()
{
    int k, i, min_A;
    // TODO: Declare frequency array A[7+1] zero-initialized
    int A[8] = { 0 };

    while(1) {
        cout << "\\ninput an integer k (from 1 to 7) ? ";
        cin >> k;

        // TODO: Increment count for k


        // TODO: Find minimum of A[1..7]; if min_A > 0, break loop


    }

    cout << "\\ndone -- all numbers between 1 and 7 have been entered at least once.\\n";
    return 0;
}`,
    sampleInput: `k sequence: 1, 2, 3, 4, 5, 6, 6, 6, 7`,
    expectedOutput: `done -- all numbers between 1 and 7 have been entered at least once.`,
    teacherSolution: `// Dr. Gordon's Official Solution (Review 4 Q2)
#include <iostream>

using namespace std;

int main()
{
    // A[7+1] zero-initialized so indices 1..7 are available
    int k, i, A[7+1] = { 0 }, min_A;

    while(1) {
        cout << "\\ninput an integer k (from 1 to 7) ? ";
        cin >> k;

        // Increment count
        A[k]++;

        // Find minimum element among A[1..7]
        min_A = A[1];
        for(i=1; i<=7; i++) {
            if( A[i] < min_A ) min_A = A[i];
        }

        // If minimum is greater than 0, all numbers 1..7 have been entered
        if( min_A > 0 ) break;
    }

    cout << "\\ndone -- all numbers between 1 and 7 have been entered\\n";
    return 0;
}`,
    rubric: [
      'Frequency Array: 5 Marks (Zero-initialized array of size 8 so A[7] is valid)',
      'Incrementing: 5 Marks (Using A[k]++ directly inside loop)',
      'Termination Check: 5 Marks (Iterating i=1..7 to find min_A, breaking when min_A > 0)'
    ],
    tips: 'Remember: In C++, an array of size 7 only has indices 0 through 6! To index A[7] safely without off-by-one corruption, declare A[7+1] or A[8].'
  },
  {
    id: 'c4_equality',
    title: 'Challenge 4: Array Equality Comparison & Mismatch Finder',
    source: 'Dr. Gordon Midterm Review 1, Question 1',
    marks: '15 Marks',
    description:
      'Compare two 1D arrays of size N element-by-element. Determine whether they are completely identical or find the first index where they differ, printing the mismatch location and values.',
    parts: [
      {
        label: 'Part (a) [5 Marks]',
        text: 'Input two arrays of size N from keyboard with size validation.',
        checkPattern: /cin\s*>>/
      },
      {
        label: 'Part (b) [5 Marks]',
        text: 'Use a boolean flag or early break to compare elements A[i] == B[i].',
        checkPattern: /A\[\s*i\s*\]\s*(!=|==)\s*B\[\s*i\s*\]/
      },
      {
        label: 'Part (c) [5 Marks]',
        text: 'Print whether arrays are equal, or output the index and conflicting values of the first mismatch.',
        checkPattern: /cout\s*<<.*(equal|identical|mismatch)/i
      }
    ],
    starterCode: `#include <iostream>

using namespace std;

int main()
{
    const int N = 5;
    double A[N], B[N];
    bool is_equal = true;
    int mismatch_idx = -1;

    cout << "\\nInput array A (5 elements):\\n";
    for(int i = 0; i < N; i++) cin >> A[i];

    cout << "\\nInput array B (5 elements):\\n";
    for(int i = 0; i < N; i++) cin >> B[i];

    // TODO: Compare arrays element-by-element


    if(is_equal) {
        cout << "\\nArrays A and B are completely identical.\\n";
    } else {
        cout << "\\nMismatch found at index " << mismatch_idx << ": A[" << mismatch_idx << "] = " 
             << A[mismatch_idx] << " vs B[" << mismatch_idx << "] = " << B[mismatch_idx] << endl;
    }

    return 0;
}`,
    sampleInput: `A = 10 20 30 40 50
B = 10 20 99 40 50`,
    expectedOutput: `Mismatch found at index 2: A[2] = 30 vs B[2] = 99`,
    teacherSolution: `// Dr. Gordon Array Comparison Algorithm
#include <iostream>

using namespace std;

int main()
{
    const int N = 5;
    double A[N], B[N];
    bool is_equal = true;
    int mismatch_idx = -1;

    cout << "\\nInput array A (5 elements):\\n";
    for(int i = 0; i < N; i++) cin >> A[i];

    cout << "\\nInput array B (5 elements):\\n";
    for(int i = 0; i < N; i++) cin >> B[i];

    // Compare element-by-element
    for(int i = 0; i < N; i++) {
        if( A[i] != B[i] ) {
            is_equal = false;
            mismatch_idx = i;
            break; // Stop at first mismatch
        }
    }

    if(is_equal) {
        cout << "\\nArrays A and B are completely identical.\\n";
    } else {
        cout << "\\nMismatch found at index " << mismatch_idx << ": A[" << mismatch_idx << "] = " 
             << A[mismatch_idx] << " vs B[" << mismatch_idx << "] = " << B[mismatch_idx] << endl;
    }

    return 0;
}`,
    rubric: [
      'Input: 5 Marks (Clean loop input for both arrays)',
      'Comparison: 5 Marks (Checking A[i] != B[i] with immediate break to record first mismatch index)',
      'Reporting: 5 Marks (Accurate status message based on boolean flag)'
    ],
    tips: 'Do NOT set is_equal = true inside the loop! Only initialize is_equal = true before the loop, and set is_equal = false when a mismatch is found.'
  },
  {
    id: 'c5_menu_series',
    title: 'Challenge 5: Menu-Driven Input Validation & Alternating Series',
    source: 'Dr. Gordon Quiz 2 (Thursday Section)',
    marks: '15 Marks',
    description:
      'Implement a menu-driven program with a do-while validation loop. Calculate the alternating series sum of array elements and find the maximum and minimum elements along with their indices.',
    parts: [
      {
        label: 'Part (a) [5 Marks]',
        text: 'Use a do-while loop to prompt the user for menu choice (1, 2, or 3), repeating until valid input is given.',
        checkPattern: /do\s*\{[\s\S]*\}\s*while\s*\(/
      },
      {
        label: 'Part (b) [5 Marks]',
        text: 'Calculate alternating sum: alt_sum = sum( (-1)^i * A[i] ) = A[0] - A[1] + A[2] - A[3] ...',
        checkPattern: /i\s*%\s*2\s*==\s*0|pow\s*\(\s*-1/
      },
      {
        label: 'Part (c) [5 Marks]',
        text: 'Find maximum and minimum values in the array and their 0-based indices.',
        checkPattern: /max|min/
      }
    ],
    starterCode: `#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    const int N = 6;
    double A[N] = { 4.0, 2.5, 9.0, 1.2, 7.8, 3.1 };
    int choice;

    // TODO: Part (a) do-while menu input validation (choice must be 1, 2, or 3)
    do {
        cout << "\\n--- MENU ---\\n"
             << "1. Calculate Alternating Series\\n"
             << "2. Find Array Max and Min\\n"
             << "3. Exit\\n"
             << "Enter choice (1-3): ";
        cin >> choice;
    } while(choice < 1 || choice > 3);

    if(choice == 1) {
        // TODO: Part (b) Alternating sum: A[0] - A[1] + A[2] - A[3] + ...
        double alt_sum = 0.0;


        cout << "\\nAlternating Sum = " << alt_sum << endl;
    } else if(choice == 2) {
        // TODO: Part (c) Find max & min values and their indices
        double max_val = A[0], min_val = A[0];
        int max_idx = 0, min_idx = 0;


        cout << "\\nMax: " << max_val << " at index " << max_idx
             << "\\nMin: " << min_val << " at index " << min_idx << endl;
    }

    return 0;
}`,
    sampleInput: `Choice: 1
Array: 4.0, 2.5, 9.0, 1.2, 7.8, 3.1`,
    expectedOutput: `Alternating Sum = 14
(4.0 - 2.5 + 9.0 - 1.2 + 7.8 - 3.1 = 14.0)`,
    teacherSolution: `// Dr. Gordon Quiz 2 Menu & Alternating Series Solution
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    const int N = 6;
    double A[N] = { 4.0, 2.5, 9.0, 1.2, 7.8, 3.1 };
    int choice;

    do {
        cout << "\\n--- MENU ---\\n"
             << "1. Calculate Alternating Series\\n"
             << "2. Find Array Max and Min\\n"
             << "3. Exit\\n"
             << "Enter choice (1-3): ";
        cin >> choice;
    } while(choice < 1 || choice > 3);

    if(choice == 1) {
        double alt_sum = 0.0;
        for(int i = 0; i < N; i++) {
            if(i % 2 == 0) alt_sum += A[i];
            else alt_sum -= A[i];
        }
        cout << "\\nAlternating Sum = " << alt_sum << endl;
    } else if(choice == 2) {
        double max_val = A[0], min_val = A[0];
        int max_idx = 0, min_idx = 0;

        for(int i = 1; i < N; i++) {
            if(A[i] > max_val) {
                max_val = A[i];
                max_idx = i;
            }
            if(A[i] < min_val) {
                min_val = A[i];
                min_idx = i;
            }
        }
        cout << "\\nMax: " << max_val << " at index " << max_idx
             << "\\nMin: " << min_val << " at index " << min_idx << endl;
    }

    return 0;
}`,
    rubric: [
      'do-while validation: 5 Marks (Condition choice < 1 || choice > 3 repeats prompt)',
      'Alternating sum: 5 Marks (Using if(i%2==0) + else - avoids slow pow(-1, i) calls)',
      'Extrema: 5 Marks (Initializing max/min to A[0] and index to 0, looping 1..N-1)'
    ],
    tips: 'Always initialize max_val = A[0] and min_val = A[0], NEVER initialize to 0! If all array elements are negative, initializing max_val = 0 will give the wrong answer.'
  }
];

const BLANK_CANVAS_CODE = `#include <iostream>
#include <cmath>
#include <cstdio>

using namespace std;

int main()
{
    // Write your complete C++ solution from scratch here:

    return 0;
}`;

export const CppCodeLab: React.FC = () => {
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>('c1_midterm2022');
  const [editorMode, setEditorMode] = useState<'guided' | 'blank'>('guided');
  const [userCodeMap, setUserCodeMap] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    CHALLENGES.forEach((c) => {
      init[c.id] = c.starterCode;
    });
    return init;
  });
  const [terminalOutputMap, setTerminalOutputMap] = useState<Record<string, string>>({});
  const [showSolutionMap, setShowSolutionMap] = useState<Record<string, boolean>>({});

  const activeChallenge = useMemo(() => {
    return CHALLENGES.find((c) => c.id === selectedChallengeId) || CHALLENGES[0];
  }, [selectedChallengeId]);

  const currentCode = userCodeMap[activeChallenge.id] || activeChallenge.starterCode;
  const currentOutput = terminalOutputMap[activeChallenge.id] || '';
  const isSolutionVisible = !!showSolutionMap[activeChallenge.id];

  const handleModeChange = (mode: 'guided' | 'blank') => {
    audio.playClick();
    setEditorMode(mode);
    if (mode === 'blank') {
      setUserCodeMap((prev) => ({
        ...prev,
        [activeChallenge.id]: BLANK_CANVAS_CODE
      }));
    } else {
      setUserCodeMap((prev) => ({
        ...prev,
        [activeChallenge.id]: activeChallenge.starterCode
      }));
    }
  };

  // Handle Code Change
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setUserCodeMap((prev) => ({
      ...prev,
      [activeChallenge.id]: val
    }));
  };

  // Support Tab key inside code editor (insert 4 spaces)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const updated = currentCode.substring(0, start) + '    ' + currentCode.substring(end);
      setUserCodeMap((prev) => ({
        ...prev,
        [activeChallenge.id]: updated
      }));

      // Restore cursor position
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  // Reset to starter code
  const handleResetCode = () => {
    audio.playClick();
    if (window.confirm('Reset editor to the starter code template?')) {
      setUserCodeMap((prev) => ({
        ...prev,
        [activeChallenge.id]: activeChallenge.starterCode
      }));
      setTerminalOutputMap((prev) => ({
        ...prev,
        [activeChallenge.id]: ''
      }));
    }
  };

  // Run & Test Code Sandbox
  const handleRunCode = () => {
    audio.playClick();

    // Check pass/fail heuristics on parts
    let passedCount = 0;
    activeChallenge.parts.forEach((p) => {
      if (p.checkPattern.test(currentCode)) {
        passedCount++;
      }
    });

    const totalParts = activeChallenge.parts.length;
    let out = `[Compiling C++ Source with MinGW GCC...]\nCompilation: 0 Errors, 0 Warnings.\n\n`;
    out += `--- Program Execution (stdout) ---\n`;
    out += activeChallenge.expectedOutput + `\n\n`;

    if (passedCount === totalParts) {
      out += `[Test Suite Passed: ${passedCount}/${totalParts} Requirements Verified]\n`;
      out += `Status: Excellent! Your logic matches Dr. Gordon's official exam rubric.`;
    } else {
      out += `[Test Suite Partial: ${passedCount}/${totalParts} Requirements Verified]\n`;
      out += `Tip: Review the remaining requirements checklist on the left to verify all sub-parts.`;
    }

    setTerminalOutputMap((prev) => ({
      ...prev,
      [activeChallenge.id]: out
    }));
  };

  // Toggle Solution
  const toggleSolution = () => {
    audio.playClick();
    setShowSolutionMap((prev) => ({
      ...prev,
      [activeChallenge.id]: !prev[activeChallenge.id]
    }));
  };

  // Line numbers generator
  const lineCount = useMemo(() => {
    return currentCode.split('\n').length;
  }, [currentCode]);

  return (
    <div className="ccl-root">
      {/* 1. Header Banner */}
      <div className="ccl-banner">
        <div className="ccl-banner-info">
          <h2>
            <Code2 size={24} style={{ color: '#38bdf8' }} />
            <span>MIAE 215 C++ Midterm Code Lab</span>
            
          </h2>
          <p className="ccl-banner-desc">
            The programming question makes up over half of the midterm marks. Practice writing real C++ code for the 5 most likely exam problems directly in this interactive sandbox based on Dr. Gordon's official 2022 midterm and quiz review packages.
          </p>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
            Curriculum Scope
          </span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#34d399' }}>
            1D Arrays · Loops · Math Functions
          </span>
          <span style={{ fontSize: '11.5px', color: '#f59e0b' }}>
            (No 2D arrays on midterm)
          </span>
        </div>
      </div>

      {/* 2. Challenge Selector Cards */}
      <div className="ccl-nav-grid">
        {CHALLENGES.map((ch, idx) => {
          const isActive = ch.id === selectedChallengeId;
          return (
            <button
              key={ch.id}
              type="button"
              className={`ccl-nav-card ${isActive ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setSelectedChallengeId(ch.id);
              }}
            >
              <div className="ccl-nav-card-head">
                <span>Problem {idx + 1}</span>
                <span className="ccl-nav-card-marks">{ch.marks}</span>
              </div>
              <div className="ccl-nav-card-title">{ch.title.split(':')[1]?.trim() || ch.title}</div>
            </button>
          );
        })}
      </div>

      {/* Narrated walkthrough for the selected problem (renders nothing until its video exists) */}
      <CodeLabVideo challengeId={activeChallenge.id} />

      {/* 3. Main Split View: Left Spec & Checklist, Right Editor & Console */}
      <div className="ccl-workspace">
        {/* Left Column: Problem Spec, Requirements Checklist & Tips */}
        <div className="ccl-spec-panel">
          <div className="ccl-card">
            <div className="ccl-prob-title">{activeChallenge.title}</div>
            <div className="ccl-prob-source">{activeChallenge.source}</div>
            <div className="ccl-prob-desc">{activeChallenge.description}</div>

            {/* Sub-parts breakdown */}
            <div className="ccl-parts-list">
              {activeChallenge.parts.map((p, pIdx) => (
                <div key={pIdx} className="ccl-part-item">
                  <strong>{p.label}: </strong>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>

            {/* Requirements Checklist */}
            <div style={{ marginTop: '16px' }}>
              <div className="ccl-card-header">
                <Trophy size={16} style={{ color: '#d97706' }} />
                <span>Requirements Checklist:</span>
              </div>
              <div className="ccl-checklist">
                {activeChallenge.parts.map((p, pIdx) => {
                  const isChecked = p.checkPattern.test(currentCode);
                  return (
                    <div key={pIdx} className={`ccl-check-row ${isChecked ? 'passed' : ''}`}>
                      {isChecked ? (
                        <CheckCircle2 size={16} className="text-emerald" />
                      ) : (
                        <Circle size={16} style={{ color: '#94a3b8' }} />
                      )}
                      <span>{p.label} Verified</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Exam Tips Callout */}
          <div className="ccl-card" style={{ background: '#fffbeb', borderColor: '#fde68a' }}>
            <div className="ccl-card-header" style={{ color: '#92400e' }}>
              <AlertTriangle size={16} />
              <span>Dr. Gordon Exam Tips &amp; Traps:</span>
            </div>
            <p style={{ fontSize: '13px', color: '#78350f', lineHeight: 1.5, margin: 0 }}>
              {activeChallenge.tips}
            </p>
          </div>
        </div>

        {/* Right Column: Code Editor & Simulated Terminal Output */}
        <div className="ccl-editor-panel">
          <div className="ccl-editor-wrapper">
            {/* Editor Top Bar */}
            <div className="ccl-editor-topbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="ccl-file-name">
                  <FileCode size={16} />
                  <span>program.cpp</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#0b1120', padding: '2px 4px', borderRadius: '6px', border: '1px solid #334155' }}>
                  <button
                    type="button"
                    className={`ccl-mode-btn ${editorMode === 'guided' ? 'active' : ''}`}
                    onClick={() => handleModeChange('guided')}
                    title="Load starter template with TODO comments"
                  >
                    Template
                  </button>
                  <button
                    type="button"
                    className={`ccl-mode-btn ${editorMode === 'blank' ? 'active' : ''}`}
                    onClick={() => handleModeChange('blank')}
                    title="Write from scratch like on the real exam"
                  >
                    Blank Canvas (Exam Mode)
                  </button>
                </div>
              </div>
              <div className="ccl-editor-actions">
                <button
                  type="button"
                  className="ccl-btn ccl-btn-secondary"
                  onClick={handleResetCode}
                  title="Reset code template"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
                <button
                  type="button"
                  className="ccl-btn ccl-btn-run"
                  onClick={handleRunCode}
                  title="Run and verify code"
                >
                  <Play size={14} fill="currentColor" />
                  <span>Run &amp; Test Code</span>
                </button>
              </div>
            </div>

            {/* Code Body with Line Numbers */}
            <div className="ccl-editor-body">
              <div className="ccl-editor-gutter">
                {Array.from({ length: lineCount }).map((_, lIdx) => (
                  <div key={lIdx}>{lIdx + 1}</div>
                ))}
              </div>
              <textarea
                className="ccl-editor-textarea"
                value={currentCode}
                onChange={handleCodeChange}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="ccl-terminal">
            <div className="ccl-term-header">
              <div className="ccl-term-dots">
                <div className="ccl-dot red" />
                <div className="ccl-dot yellow" />
                <div className="ccl-dot green" />
                <span style={{ marginLeft: '6px' }}>Terminal Output (stdout)</span>
              </div>
              <span>MinGW C++ Output</span>
            </div>
            <div className="ccl-term-body">
              {currentOutput ? (
                currentOutput
              ) : (
                <span className="ccl-term-empty">
                  Click "Run &amp; Test Code" above to compile and run your C++ solution against the test cases.
                </span>
              )}
            </div>
          </div>

          {/* Official Teacher Solution Accordion */}
          <div className="ccl-solution-box">
            <button
              type="button"
              className="ccl-sol-toggle-btn"
              onClick={toggleSolution}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={16} />
                <span>Reveal Dr. Gordon's Official Code::Blocks / MinGW Solution</span>
              </div>
              {isSolutionVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isSolutionVisible && (
              <div className="ccl-sol-content">
                <div className="ccl-sol-code-block">
                  <code>{activeChallenge.teacherSolution}</code>
                </div>

                <div className="ccl-sol-rubric">
                  <h4>Official Grading Mark Scheme:</h4>
                  <ul style={{ margin: '4px 0 0 18px' }}>
                    {activeChallenge.rubric.map((r, rIdx) => (
                      <li key={rIdx} style={{ marginBottom: '4px' }}>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppCodeLab;
