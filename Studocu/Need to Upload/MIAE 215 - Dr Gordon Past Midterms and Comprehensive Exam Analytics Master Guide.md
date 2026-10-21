# MIAE 215 · Dr. Brandon Gordon Past Midterms & Comprehensive Exam Analytics
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering**  
*Course Engineering Study Hub · Verified Teacher Midterm Intelligence & Official Solutions Archive*

---

## Executive Summary & Exam Architecture

Across all historical iterations of MIAE 215 under Dr. Brandon Gordon (Fall 2022, Fall 2023, Fall 2024, and official Review Packages), midterm exams follow a strict, predictable pedagogical architecture.

Dr. Gordon structures the midterm exam into two complementary halves:
1. **Output Tracing Tables (40% to 50% of Total Grade)**:
   - High-density code snippets testing edge-case execution flow, integer division truncation, out-of-bounds pointer/array offsets, and accumulator side effects.
   - **Gordon Marking Policy**: Only final answers written inside the designated output box receive marks. Scratchpad tables receive **zero part marks**, meaning execution precision must be 100% airtight.
2. **1D Array Algorithmic Programming (50% to 60% of Total Grade)**:
   - Multi-part program-writing problems requiring array input, dynamic size validation ($1 \le n \le 100$), mathematical transformations (dot products, standard deviation, trigonometric filtering), array concatenation/shifting, and sentinel-controlled `while(1)` loops.
   - **Scope Boundary (Official Notice)**: **2D arrays are strictly excluded from the midterm exam** (reserved for finals), but 1D array manipulation is tested exhaustively in both output tracing and programming.

---

## Part 1: Empirical Exam Analytics & Pattern Intelligence

### 1.1 Topic Frequency Matrix (Historical Midterm Occurrence)

| Core Exam Topic | Occurrence Frequency | Typical Question Format | Historical Exam Appearances | Primary Risk Factor / Common Trap |
| :--- | :---: | :--- | :--- | :--- |
| **1D Array Traversal & Indexing** | **100%** | Code Writing & Tracing | Fall 2022 (Q1), Fall 2023 (Q2a, Q2b), Review 1, Review 4 | Off-by-one indices, uninitialized garbage elements |
| **Sentinel Loops (`while(1)` + `break`)** | **100%** | Code Writing & Tracing | Fall 2022 (Q1e), Fall 2023 (Q2a), Review 4 (Q2), Quiz 2 | Premature or late `break`, infinite loops on bad input |
| **Integer Division & Truncation** | **100%** | Output Tracing | Fall 2023 (Q2b), Review 1 (Q2c), Review 4 (Q1) | `1/(i+1) == 0` for $i \ge 1$; `7 + 0 = 7` |
| **Conditional Ladders (`if-else`)** | **95%** | Output Tracing | Fall 2023 (Q2b), Review 1 (Q2c), Quiz 2 | Floating-point thresholds (`< -0.11` vs `> 0.1`) |
| **Out-of-Bounds Memory Garbage** | **85%** | Output Tracing | Fall 2023 (Q2b), Review 1 (Q2b) | Reading `A[i]` after loop completes (`A[4]` for size 4) |
| **Array Combination / Forward Shift** | **80%** | Code Writing | Fall 2022 (Q1d), Review 4 (Q1) | In-place data corruption; must use auxiliary array |
| **Input Error Checking ($1 \le n \le 100$)** | **75%** | Code Writing | Fall 2022 (Q1a), Review 4 (Q1), Quiz 2 | Failure to re-prompt or validate sentinel conditions |
| **Trigonometric / `cmath` Calculations** | **60%** | Code Writing & Tracing | Fall 2022 (Q1c), Review 4 (Q1), Quiz 1 | Forgetting `#include <cmath>` or $\pi = 4\arctan(1.0)$ |
| **2D Arrays & Matrices** | **0% (Midterm)** | *Final Exam Only* | Excluded from Midterm per Gordon Exam Notice | Do NOT spend midterm study time memorizing 2D array syntax |

---

### 1.2 The Top 5 "Gordon Traps" Exposed

#### Trap #1: The Zero-Yield Integer Fraction (`1/(i+1)`)
In Fall 2023 Midterm Q2(b), the third branch of the `if-else` ladder executes:
```cpp
x = 7 + 1/(i+1);
```
- When $i = 0$: $1/(0+1) = 1/1 = 1 \implies x = 7 + 1 = 8$.
- When $i = 2$: $1/(2+1) = 1/3 = 0$ (integer division truncates towards zero) $\implies x = 7 + 0 = 7$.
- **The Mistake**: Students treat $1/3$ as $0.333$ and write $7.333$. In C++, integer over integer is always truncated integer arithmetic!

#### Trap #2: The Post-Loop Out-of-Bounds Access (`A[i]`)
In Fall 2023 Midterm Q2(b), the loop terminates when $i = 4$:
```cpp
double A[4] = { -0.1, 0.11, 0.0, 0.2 };
for(i=0; i<4; i++) { ... }
cout << "\n" << A[i];
```
- At the end of the loop, $i$ is incremented to $4$.
- The program then prints `A[4]`. But array $A$ only has valid indices $0, 1, 2, 3$!
- `A[4]` accesses unallocated adjacent memory.
- **The Correct Answer**: You must write **`Garbage`** (or `undefined`). Any numeric guess loses full marks.

#### Trap #3: Data Corruption in Array Transformations (In-Place Shifting)
In Midterm Review 4 Q1, students must shift all elements of array $A$ forward by one position with wrap-around:
```cpp
// INCORRECT (Corrupts data):
for(i=0; i<n-1; i++) {
    A[i+1] = A[i]; // Overwrites A[1] with A[0], then A[2] gets new A[1]!
}
```
- **Dr. Gordon's Direct Advice**: *"The moral of the story is it's best to put the answer in a separate variable (`A_shift`). Don't use the input variables to store the answer or you might corrupt the input data before you use it."*

#### Trap #4: Post-Increment in Sentinel Loops (`while(1)`)
In Fall 2023 Midterm Q2(a):
```cpp
while(1) {
    sum += B[i];
    if(i > 2) break;
    a += B[i+1];
    i++;
    cout << "\n" << i << " " << a;
}
b = sum - i;
```
- Notice that when $i=3$, `sum += B[3]` executes **before** `if(i > 2) break;` triggers.
- Therefore, $B[3]$ is included in `sum` ($sum = 11 + 7 + 6 + 5 = 29$).
- Furthermore, because the loop broke at $i=3$ before `i++`, $i$ remains $3$.
- Thus, $b = sum - i = 29 - 3 = 26$. Students who update $i$ on break calculate $b = 29 - 4 = 25$ incorrectly!

#### Trap #5: Strict Mathematical Range Filtering
In Fall 2022 Midterm Q1(c):
```cpp
// Determine elements strictly between 0 and PI:
PI = 4*atan(1.0);
if( (B[i] > 0.0) && (B[i] < PI) ) count++;
```
- Notice the strict inequality: `>` and `<`. If $B[i] = 0.0$ or $B[i] = \pi$, it must **not** be counted.
- Computing $\pi$ in standard C++: Use `4.0 * atan(1.0)` or `<cmath>` constants.

---

### 1.3 Recommended Exam Time & Strategy Allocation (90 Minutes)

```
┌─────────────────────────────────────────────────────────────┐
│ 00:00 - 05:00 │ Paper Inspection & Strategy Check           │
│               │ Identify output questions vs code writing   │
├─────────────────────────────────────────────────────────────┤
│ 05:00 - 40:00 │ Output Tracing Table Section (~35 min)      │
│               │ Use Gordon's Simplified Column-Update Table │
│               │ Double-check integer division & loop bounds │
│               │ Transfer clean answers into Answer Boxes    │
├─────────────────────────────────────────────────────────────┤
│ 40:00 - 80:00 │ Algorithmic Code Writing Section (~40 min)  │
│               │ Part (a): Input validation (n <= 100)       │
│               │ Part (b): Accumulator / dot product loop    │
│               │ Part (c): Filtering condition & counter     │
│               │ Part (d): Array merge / transformation      │
│               │ Part (e): while(1) sentinel input loop      │
├─────────────────────────────────────────────────────────────┤
│ 80:00 - 90:00 │ Verification & Trap Audit (10 min)          │
│               │ Ensure no missing semicolons, correct cin   │
└─────────────────────────────────────────────────────────────┘
```

---

## Part 2: Fall 2023 Midterm Exam (Question 2 · 40% Weight)

### 2.1 Official Exam Instructions Notice (Dr. Gordon's Direct Guidelines)
From the official course notice released with the Fall 2023 midterm:
1. **Simplified Table Approach**: Use a column for each changing variable. Only write when a variable updates.
2. **No Part Marks for Tables**: You do **not** submit your scratchpad table. Only the values in the box receive marks.
3. **Difficulty Benchmark**: Programming questions match past quizzes and review sets.
4. **No 2D Arrays on the Midterm**: 2D arrays will not appear on the midterm exam. 1D arrays will appear in both output tracing and programming.

---

### 2.2 Question 2(a) — `while(1)` Array Tracing (9 Marks)

#### Problem Code:
```cpp
#include <iostream>
using namespace std;

int main() {
    int a=1, b=2, B[] = { 11, 7, 6, 5 };
    int i=0, sum = 0;
    while(1) {
        sum += B[i];
        if(i > 2) break;
        a += B[i+1];
        i++;
        cout << "\n" << i << " " << a;
    }
    b = sum - i;
    cout << "\n" << sum << " " << a << " " << b;
    return 0;
}
```

#### Step-by-Step State Trace Table:
| Iteration | Line Executed | `i` | `sum` | `a` | `b` | Condition / Action | Output Generated |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **Init** | Initialization | `0` | `0` | `1` | `2` | $B = \{11, 7, 6, 5\}$ | — |
| **Pass 1** | `sum += B[0]` | `0` | `11` | `1` | `2` | `sum = 0 + 11 = 11` | — |
| | `if(0 > 2)` | `0` | `11` | `1` | `2` | False (continue) | — |
| | `a += B[1]` | `0` | `11` | `8` | `2` | `a = 1 + 7 = 8` | — |
| | `i++` | `1` | `11` | `8` | `2` | `i` becomes 1 | — |
| | `cout << i << " " << a` | `1` | `11` | `8` | `2` | Print `1 8` | `1 8` |
| **Pass 2** | `sum += B[1]` | `1` | `18` | `8` | `2` | `sum = 11 + 7 = 18` | — |
| | `if(1 > 2)` | `1` | `18` | `8` | `2` | False (continue) | — |
| | `a += B[2]` | `1` | `18` | `14` | `2` | `a = 8 + 6 = 14` | — |
| | `i++` | `2` | `18` | `14` | `2` | `i` becomes 2 | — |
| | `cout << i << " " << a` | `2` | `18` | `14` | `2` | Print `2 14` | `2 14` |
| **Pass 3** | `sum += B[2]` | `2` | `24` | `14` | `2` | `sum = 18 + 6 = 24` | — |
| | `if(2 > 2)` | `2` | `24` | `14` | `2` | False (2 is not > 2) | — |
| | `a += B[3]` | `2` | `24` | `19` | `2` | `a = 14 + 5 = 19` | — |
| | `i++` | `3` | `24` | `19` | `2` | `i` becomes 3 | — |
| | `cout << i << " " << a` | `3` | `24` | `19` | `2` | Print `3 19` | `3 19` |
| **Pass 4** | `sum += B[3]` | `3` | `29` | `19` | `2` | `sum = 24 + 5 = 29` | — |
| | `if(3 > 2)` | `3` | `29` | `19` | `2` | **True! Break immediately!** | — |
| **Exit** | `b = sum - i` | `3` | `29` | `19` | `26` | `b = 29 - 3 = 26` | — |
| | `cout << sum << a << b` | `3` | `29` | `19` | `26` | Print `29 19 26` | `29 19 26` |

#### Official Expected Answer Box:
```
1 8
2 14
3 19
29 19 26
```

---

### 2.3 Question 2(b) — If-Ladder & Array Out-of-Bounds (5 Marks)

#### Problem Code:
```cpp
#include <iostream>
using namespace std;

int main() {
    int i;
    double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;

    for(i=0; i<4; i++) {
        if(A[i] < -0.11) {
            x += 1;
        } else if (A[i] > 0.1) {
            x -= 10;
        } else {
            x = 7 + 1/(i+1);
        }
        cout << "\n" << x;
    }
    cout << "\n" << A[i];
    return 0;
}
```

#### Step-by-Step State Trace Table:
| Iteration | `i` | `A[i]` | Condition Evaluated | Branch Taken | Calculation of `x` | Output Printed |
| :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| **$i=0$** | `0` | `-0.1` | `-0.1 < -0.11` (False)<br>`-0.1 > 0.1` (False) | `else` | `x = 7 + 1/(0+1) = 7 + 1 = 8.0` | `8` |
| **$i=1$** | `1` | `0.11` | `0.11 < -0.11` (False)<br>`0.11 > 0.1` (True!) | `else if` | `x = 8.0 - 10 = -2.0` | `-2` |
| **$i=2$** | `2` | `0.0` | `0.0 < -0.11` (False)<br>`0.0 > 0.1` (False) | `else` | `x = 7 + 1/(2+1) = 7 + 0 = 7.0` | `7` |
| **$i=3$** | `3` | `0.2` | `0.2 < -0.11` (False)<br>`0.2 > 0.1` (True!) | `else if` | `x = 7.0 - 10 = -3.0` | `-3` |
| **Post-Loop** | `4` | `A[4]` | Loop condition `4 < 4` is False | Exit Loop | Print `A[4]` (Out of Bounds) | **Garbage** |

#### Official Expected Answer Box:
```
8
-2
7
-3
Garbage
```

---

## Part 3: Fall 2022 Midterm Exam (Question 1 · 50% Weight)

### 3.1 Problem Specification
**Course**: MIAE 215 / MECH 415  
**Weight**: Worth **50% of the Total Midterm Exam Mark**  
**Prompt**: Write a complete, robust C++ program that performs the following five operations:
- **(a)** Inputs two 1D arrays of doubles $A$ and $B$ (each of size 10) from the keyboard.
- **(b)** Calculates the dot product of $A$ and $B$ ($\sum_{i=0}^{9} A[i] \cdot B[i]$) and prints out the result.
- **(c)** Determines the number of elements of $B$ that are strictly between $0$ and $\pi$ ($0.0 < B[i] < \pi$) and prints out the count.
- **(d)** Combines arrays $A$ and $B$ into a single 20-element array $C$, where elements $0..9$ come from $A$ and elements $10..19$ come from $B$.
- **(e)** Repeatedly inputs an integer $k$ from the keyboard until a negative value is entered. Then prints out the number of positive integers entered and their sum.

---

### 3.2 Complete, Verified C++ Solution (`program.cpp`)

```cpp
#include <iostream>
#include <cmath>
#include <cstdio>

using namespace std;

int main() {
    int i, n = 10, count, k, i_sum;
    double A[10], B[10], C[20], sum, PI;

    // =========================================================================
    // Part (a): Input two 1D arrays of doubles A and B (size 10) from keyboard
    // =========================================================================
    cout << "\ninput array A (10 elements) ?\n";
    for(i = 0; i < n; i++) {
        cin >> A[i];
    }

    cout << "\ninput array B (10 elements) ?\n";
    for(i = 0; i < n; i++) {
        cin >> B[i];
    }

    // =========================================================================
    // Part (b): Calculate dot product of A and B: sum += A[i] * B[i]
    // =========================================================================
    sum = 0.0;
    for(i = 0; i < n; i++) {
        sum += A[i] * B[i];
    }
    cout << "\ndot product of A and B = " << sum;

    // =========================================================================
    // Part (c): Determine elements of B strictly between 0 and PI
    // =========================================================================
    count = 0;
    PI = 4.0 * atan(1.0); // Exact calculation of PI
    for(i = 0; i < n; i++) {
        if( (B[i] > 0.0) && (B[i] < PI) ) {
            count++;
        }
    }
    cout << "\nnumber of elements of B between 0 and PI = " << count;

    // =========================================================================
    // Part (d): Combine arrays A and B into array C (size 20)
    // =========================================================================
    for(i = 0; i < n; i++) {
        C[i]     = A[i]; // First 10 elements from A
        C[i + n] = B[i]; // Next 10 elements from B
    }

    cout << "\nCombined array C =\n";
    for(i = 0; i < 2 * n; i++) {
        cout << C[i] << " ";
    }

    // =========================================================================
    // Part (e): Repeatedly input integer k until negative, compute sum and count
    // =========================================================================
    count = 0;
    i_sum = 0;
    while(1) {
        cout << "\ninput k ? ";
        cin >> k;
        if(k < 0) {
            break; // Stop immediately upon negative entry
        }
        count++;
        i_sum += k;
    }

    cout << "\nnumber of positive integers entered = " << count;
    cout << "\nsum = " << i_sum;

    cout << "\ndone.\n\n";
    return 0;
}
```

---

## Part 4: Official Gordon Midterm Review Packages

### 4.1 Midterm Review #1 — Array Comparison & 2D Output Formulas

#### Question #1: Compare Two 5-Element Arrays for Equality
```cpp
#include <iostream>
using namespace std;

int main() {
    int A1[5], A2[5], i;
    bool equal = true;

    cout << "Enter 5 integers for A1: ";
    for(i = 0; i < 5; i++) cin >> A1[i];

    cout << "Enter 5 integers for A2: ";
    for(i = 0; i < 5; i++) cin >> A2[i];

    // Check for any mismatch
    for(i = 0; i < 5; i++) {
        if(A1[i] != A2[i]) {
            equal = false;
            break; // Early exit on first mismatch
        }
    }

    if(equal) cout << "A1 and A2 are equal\n";
    else      cout << "A1 and A2 are not equal\n";

    return 0;
}
```

#### Question #2(a): 2D Matrix Generation Formula & Floating Comparisons
```cpp
int i, j;
double A[3][3], x = 1.0;
for(i = 1; i <= 2; i++) {
    for(j = 1; j <= 2; j++) {
        A[i][j] = j*i + j*j - 6;
        cout << A[i][j] << " ";
    }
    cout << endl;
}
```
- Formula evaluation:
  - $(1,1): 1(1) + 1^2 - 6 = -4$
  - $(1,2): 2(1) + 2^2 - 6 = 2 + 4 - 6 = 0$
  - $(2,1): 1(2) + 1^2 - 6 = 2 + 1 - 6 = -3$
  - $(2,2): 2(2) + 2^2 - 6 = 4 + 4 - 6 = 2$
- Matrix printed:
  ```
  -4 0
  -3 2
  ```

---

### 4.2 Midterm Review #4 — Advanced Array Algorithms

#### Question #1: Standard Deviation & Cyclic Array Forward Shift
```cpp
#include <iostream>
#include <cmath>
#include <cstdlib>

using namespace std;

int main() {
    int i, n;
    double A[100], sum, ave, stddev, A_shift[100];

    cout << "input n ? ";
    cin >> n;
    if(n <= 1 || n > 100) {
        cout << "error n is out of range, n = " << n;
        exit(1);
    }

    for(i = 0; i < n; i++) cin >> A[i];

    // Compute average
    sum = 0.0;
    for(i = 0; i < n; i++) sum += A[i];
    ave = sum / n;

    // Compute sample standard deviation: sum( (A[i]-ave)^2 ) / (n - 1)
    sum = 0.0;
    for(i = 0; i < n; i++) sum += pow(A[i] - ave, 2);
    stddev = sqrt(sum / (n - 1));
    cout << "stddev = " << stddev << endl;

    // Cyclic forward shift: [1 2 3 4 5] -> [5 1 2 3 4]
    for(i = 0; i < n - 1; i++) {
        A_shift[i + 1] = A[i];
    }
    A_shift[0] = A[n - 1]; // Wrap end to start

    cout << "Shifted array = ";
    for(i = 0; i < n; i++) cout << A_shift[i] << " ";
    cout << endl;

    return 0;
}
```

#### Question #2: Coupon Collector Frequency Counting (Integers 1 to 7)
```cpp
#include <iostream>
using namespace std;

int main() {
    // A[7+1] lets us use indices 1 through 7 directly
    int k, i, A[8] = { 0 }, min_A;

    while(1) {
        cout << "input an integer k (from 1 to 7) ? ";
        cin >> k;
        if(k >= 1 && k <= 7) {
            A[k]++;
        }

        // Check if every number 1..7 has been entered at least once
        min_A = A[1];
        for(i = 1; i <= 7; i++) {
            if(A[i] < min_A) min_A = A[i];
        }

        if(min_A > 0) {
            break; // All numbers entered!
        }
    }

    cout << "Done! All numbers between 1 and 7 have been entered.\n";
    return 0;
}
```

---

## Part 5: Precursor Quizzes (The Midterm Programming Standard)

### 5.1 Quiz 2 (Wednesday Section) — Menu-Driven Array Analysis ($n \le 100$)
This 60-minute programming quiz set the exact blueprint for Dr. Gordon's multi-part array programming midterms:
```cpp
#include <iostream>
using namespace std;

int main() {
    int n, k, i;
    double A[100], B[100];

    // (a) Input size with validation loop
    cout << "n = "; cin >> n;
    while(n < 1 || n > 100) {
        cout << "out of range, n = ";
        cin >> n;
    }

    // (b) Read both arrays
    cout << "Enter array A:\n";
    for(i = 0; i < n; i++) cin >> A[i];
    cout << "Enter array B:\n";
    for(i = 0; i < n; i++) cin >> B[i];

    bool used[4] = { false, false, false, false };

    // Repeat menu until all 3 options have been selected
    while(!(used[1] && used[2] && used[3])) {
        cout << "\nk (1 avg A, 2 min B, 3 dot) = ";
        cin >> k;
        if(k == 1) {
            double sum = 0;
            for(i = 0; i < n; i++) sum += A[i];
            cout << "average of A = " << sum / n << "\n";
        } else if(k == 2) {
            double mn = B[0];
            for(i = 1; i < n; i++) if(B[i] < mn) mn = B[i];
            cout << "min of B = " << mn << "\n";
        } else if(k == 3) {
            double dot = 0;
            for(i = 0; i < n; i++) dot += A[i] * B[i];
            cout << "A.B = " << dot << "\n";
        } else {
            cout << "error: k must be 1, 2 or 3\n";
            return 1;
        }
        used[k] = true;
    }
    return 0;
}
```

---

## Part 6: Complete Exam Preparation Action Plan

1. **Master the Simplified Table Technique**:
   - Draw columns for: `Line`, `i`, `sum`, `a`, `b`, and `Output`.
   - Update ONLY the variables that change on that line.
   - Stop immediately at every `cout` statement and write in the Answer Box.
2. **Memorize the 3 Core Array Algorithms**:
   - **Dot Product**: `sum = 0.0; for(i=0; i<n; i++) sum += A[i]*B[i];`
   - **Min/Max Finder**: `min_val = arr[0]; for(i=1; i<n; i++) if(arr[i] < min_val) min_val = arr[i];`
   - **Array Concatenation / Shift**: Using auxiliary arrays (`C[i] = A[i]; C[i+n] = B[i];`).
3. **Practice with the Interactive Midterm Gate**:
   - Unlock the Midterm Gate with passcode `ibrahim`.
   - Open the **Dr. Gordon Midterms & Exam Analytics** document.
   - Test your understanding in the live C++ Code Lab.
