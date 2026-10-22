# MIAE 215 · Programming for Mechanical & Industrial Engineers
## Midterm Cheatsheet 2.0 — Dr. Gordon Official Exam Blueprint & Master Problem Guide
*Concordia University · Gina Cody School of Engineering · Department of Mechanical, Industrial & Aerospace Engineering*

---

### 1. Essential C++ Header Libraries, Directive Reference & Core Boilerplate
```cpp
#include <iostream>  // cin, cout, cerr, endl, fixed
#include <cmath>     // pow(b,e), sqrt(x), fabs(x), sin(x), cos(x), atan(1.0)*4.0 (PI), floor(x), ceil(x)
#include <fstream>   // ifstream (file read), ofstream (file write), is_open(), close()
#include <iomanip>   // setprecision(n), setw(w), scientific, fixed
#include <cstdlib>   // exit(0), abs(int)
using namespace std;

int main() {
    // 1. Exact Floating-Point Equality: NEVER write a == b! Binary floating-point has roundoff error.
    const double EPS = 1.0e-7;
    if (fabs(a - b) < EPS) { /* roughly equal */ }

    // 2. PI Constant Generation (Mandatory Concordia Standard):
    const double PI = 4.0 * atan(1.0); // atan(1.0) is pi/4 radians -> multiplied by 4 yields 3.14159265...

    // 3. Formatted Console / File Decimal Output:
    cout << fixed << setprecision(4); // Prints doubles with exactly 4 decimal digits
    return 0;
}
```

#### Fundamental Data Types & Numerical Limits
| Type | Bytes | Range / Limits | Key Exam Rules & Concordia Traps |
| :--- | :---: | :--- | :--- |
| `bool` | **1** | `true` (1) or `false` (0) | Any non-zero integer is `true` (`-1` is `true`!). Only `0` is `false`. |
| `char` | **1** | -128 to 127 (`'0'`=48, `'A'`=65, `'a'`=97) | Single quotes (`'a'`). Case shift: `'a' - 32 == 'A'`, `'A' + 32 == 'a'`. |
| `int` | **4** | $-2.14 \times 10^9$ to $+2.14 \times 10^9$ | **Integer division truncates**: `7 / 2 == 3`, `1 / 3 == 0`. Overflow wraps to negative. |
| `double` | **8** | $\pm 1.7 \times 10^{308}$ (15-16 sig digits) | Default literal (`3.14`). Div by 0.0 evaluates to `inf` (does NOT crash!). |
| `sizeof(T)` | Op | Size in bytes | `sizeof(int) == 4`, `sizeof(double) == 8`. Array count: `sizeof(A) / sizeof(A[0])`. |

---

### 2. Complete Written Exam Exercises — The 10 Master Problem Blueprints

#### Blueprint 1: Live Midterm Exam Foundation (Fall 2026 Live Paper — 50% Weight)
*A complete 6-part algorithm unifying keyboard input, minimum search, range check, validation loops, swapping, and file persistence.*
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // a) Inputs a 1D array A of 10 doubles from keyboard:
    double A[10];
    for (int i = 0; i < 10; i++) cin >> A[i];

    // b) Determines minimum element A[i] and prints it out:
    // CRUCIAL TRAP: Initialize minVal = A[0], NEVER 0.0! (0.0 fails for positive arrays)
    double minVal = A[0];
    int minIndex = 0;
    for (int i = 1; i < 10; i++) {
        if (A[i] < minVal) { minVal = A[i]; minIndex = i; }
    }
    cout << "Minimum element: A[" << minIndex << "] = " << minVal << "\n";

    // c) Checks if all elements are between -7 and 7; otherwise stop immediately:
    bool allInRange = true;
    for (int i = 0; i < 10; i++) {
        if (A[i] < -7.0 || A[i] > 7.0) { allInRange = false; break; }
    }
    if (allInRange) cout << "elements of A are in range\n";
    else return 0; // Immediate program termination

    // d) Repeatedly input integers i1 and i2 until valid (0..9 and i1 != i2):
    // De Morgan loop continuation condition: continue while ANY condition fails!
    int i1, i2;
    do {
        cin >> i1 >> i2;
    } while (i1 < 0 || i1 > 9 || i2 < 0 || i2 > 9 || i1 == i2);

    // e) Swaps (exchanges) elements i1 and i2 of A:
    // MUST use a temporary variable to prevent overwriting/losing data!
    double temp = A[i1];
    A[i1] = A[i2];
    A[i2] = temp;

    // f) Saves the elements of A to a file called "A.txt":
    ofstream fout("A.txt");
    if (!fout) return 1;
    for (int i = 0; i < 10; i++) fout << A[i] << "\n";
    fout.close();

    return 0;
}
```

---

#### Blueprint 2: Validated Dynamic Size ($1 \le n \le 100$) & Two-Array Reading (Fall 2022 Q1a & Review 4 Q1)
```cpp
int n;
cout << "Enter array length n (1 to 100): ";
cin >> n;
while (n < 1 || n > 100) { // Sentinel guard
    cout << "Out of range. Re-enter n (1 to 100): ";
    cin >> n;
}
double A[100], B[100];
cout << "Enter " << n << " elements for A: ";
for (int i = 0; i < n; i++) cin >> A[i];
cout << "Enter " << n << " elements for B: ";
for (int i = 0; i < n; i++) cin >> B[i];
```

---

#### Blueprint 3: Strict Mathematical Range Filtering (Fall 2022 Q1c)
```cpp
// Determines the number of elements of B strictly between 0 and PI
const double PI = 4.0 * atan(1.0);
int count = 0;
for (int i = 0; i < n; i++) {
    if (B[i] > 0.0 && B[i] < PI) { // Strict inequality excludes boundary endpoints
        count++;
    }
}
cout << "Elements in (0, PI): " << count << "\n";
```

---

#### Blueprint 4: Forward Cyclic Array Shifting (Fall 2022 Q1d & Review 4 Q1)
*Shifts elements forward by 1 position: $A[n-1]$ moves to index $0$, and every $A[i]$ moves to $i+1$.*
```cpp
// Approach A: Dedicated Auxiliary Buffer (Dr. Gordon Preferred - 100% Data Safe)
double A_shift[100];
A_shift[0] = A[n - 1]; // Last element wraps to index 0
for (int i = 0; i < n - 1; i++) {
    A_shift[i + 1] = A[i]; // Forward copy
}

// Approach B: In-Place Shifting (Requires backward traversal)
double last = A[n - 1];
for (int i = n - 1; i > 0; i--) {
    A[i] = A[i - 1]; // Must traverse right-to-left to prevent cascading overwrite!
}
A[0] = last;
```

---

#### Blueprint 5: Array Concatenation / Merging (Fall 2022 Q1d)
*Merges two arrays $A$ and $B$ (each of size $n$) into array $C$ of size $2n$.*
```cpp
double C[200];
for (int i = 0; i < n; i++) {
    C[i]     = A[i];     // First half receives A
    C[i + n] = B[i];     // Second half receives B
}
```

---

#### Blueprint 6: Vector Dot Product Accumulator (Quiz 2 Wed Part f & Fall 2022 Q1b)
$$\text{dot} = \sum_{i=0}^{n-1} A[i] \cdot B[i] = A[0]B[0] + A[1]B[1] + \dots + A[n-1]B[n-1]$$
```cpp
double dot = 0.0;
for (int i = 0; i < n; i++) {
    dot += A[i] * B[i];
}
cout << "Dot Product = " << dot << "\n";
```

---

#### Blueprint 7: Menu Loop with De Morgan Completion Condition (Quiz 2 Wed Part h & Review 1)
*Repeats a menu until ALL three options (1, 2, and 3) have been executed at least once.*
```cpp
bool used[4] = { false, false, false, false }; // Flags for options 1, 2, 3
int choice;
do {
    cout << "Menu: 1=Average A, 2=Min B, 3=Dot Product. Choice: ";
    cin >> choice;
    if (choice == 1) {
        double s = 0; for(int i=0; i<n; i++) s += A[i];
        cout << "Avg A = " << s / n << "\n";
        used[1] = true;
    } else if (choice == 2) {
        double mn = B[0]; for(int i=1; i<n; i++) if (B[i] < mn) mn = B[i];
        cout << "Min B = " << mn << "\n";
        used[2] = true;
    } else if (choice == 3) {
        double d = 0; for(int i=0; i<n; i++) d += A[i]*B[i];
        cout << "Dot = " << d << "\n";
        used[3] = true;
    }
} while (!(used[1] && used[2] && used[3])); // Exit ONLY when all 3 flags are TRUE!
```

---

#### Blueprint 8: Comparing Two Integer Arrays for Equality (Midterm Review 1 Q1)
```cpp
int A1[5], A2[5];
for (int i = 0; i < 5; i++) cin >> A1[i];
for (int i = 0; i < 5; i++) cin >> A2[i];

bool equal = true; // Assume equal, search for one single mismatch
for (int i = 0; i < 5; i++) {
    if (A1[i] != A2[i]) {
        equal = false; // Mismatch found
        break;         // Stop checking immediately
    }
    // CRITICAL TRAP: NEVER put 'else equal = true;' here!
    // Placing else resets the flag if the final element matches!
}
if (equal) cout << "A1 and A2 are equal\n";
else       cout << "A1 and A2 are not equal\n";
```

---

#### Blueprint 9: Statistical Analysis on 1D Arrays (Mean, Variance, Std Dev) (Review 4 Q1)
```cpp
// 1. Mean (Average):
double sum = 0.0;
for (int i = 0; i < N; i++) sum += X[i];
double mean = sum / N;

// 2. Sample Variance s^2 = (1 / (N - 1)) * sum( (X[i] - mean)^2 ):
double varSum = 0.0;
for (int i = 0; i < N; i++) {
    varSum += pow(X[i] - mean, 2);
}
double variance = varSum / (N - 1);

// 3. Sample Standard Deviation:
double stdDev = sqrt(variance);
cout << "Mean: " << mean << ", StdDev: " << stdDev << "\n";
```

---

#### Blueprint 10: Frequency Counting Array for Integer Stream (Review 4 Q2)
*Reads integers between 1 and 7, counts how many times each number appears, and prints a formatted tally.*
```cpp
int freq[8] = { 0 }; // Indices 1..7 initialized to 0
int val;
cout << "Enter integers from 1 to 7 (terminate with 0 or out-of-range): ";
while (cin >> val && val >= 1 && val <= 7) {
    freq[val]++; // Direct index tally
}
for (int i = 1; i <= 7; i++) {
    cout << "Frequency of " << i << ": " << freq[i] << "\n";
}
```

---

#### Blueprint 11: Infinite Series Convergence with Tolerance $\varepsilon$ (Quiz 2 Thurs Part f)
$$e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \dots \quad \text{stopping when } |term| < 10^{-9}$$
```cpp
double x = 2.0;
double term = 1.0;
int k = 1;
while (1) {
    term *= x / k; // Successive ratio
    if (fabs(term) < 1.0e-9) {
        break; // Stop immediately upon meeting tolerance threshold
    }
    k++;
}
cout << "First integer k meeting tolerance: " << k << "\n"; // Prints 17
```

---

#### Blueprint 12: In-Place Array Reversal (Fall 2023 Q1c)
*Reverses elements of array $A$ of size $N$ completely in-place without auxiliary arrays:*
```cpp
// Iterate up to N / 2, swapping element i with symmetrical counterpart N - 1 - i
for (int i = 0; i < N / 2; i++) {
    double temp = A[i];
    A[i] = A[N - 1 - i];
    A[N - 1 - i] = temp;
}
```

---

#### Blueprint 13: Dynamic Memory Allocation Zero-Leak Protocol (1D & 2D Matrices)
```cpp
// 1. Dynamic 1D Array Allocation and Immediate Null Check:
double *A = new double[n];
if (A == nullptr) { cout << "Allocation failure\n"; return 1; }

// Freeing 1D Array:
delete[] A;
A = nullptr;

// 2. Dynamic 2D Matrix (R rows x C columns):
double **M = new double*[R];
for (int i = 0; i < R; i++) M[i] = new double[C];

// Freeing 2D Matrix (Free rows first, then row pointer array):
for (int i = 0; i < R; i++) delete[] M[i];
delete[] M;
M = nullptr;
```

---

### 3. Output Tracing Rules & Concordia Exam Traps (Question 2 — 40-50% Weight!)

#### The 8 Golden Rules of Dr. Gordon Output Tracing Tables
1. **Rule of Integer Truncation**: When dividing two integers, the result ALWAYS truncates toward zero:
   - `1 / (0 + 3) == 1 / 3 == 0` (NOT 0.333!).
   - `7 + 1 / (2 + 1) == 7 + 0 == 7` (NOT 7.333!).
   - Only floating-point operands preserve fractions: `7.0 / 2 == 3.5`.
2. **Rule of IEEE-754 Division by Zero**:
   - Floating-point division of a positive non-zero double by `+0.0` yields **`inf`** (or `1.#INF` in older MinGW compilers).
   - `7.0 / (1 - 1) == 7.0 / 0.0 == inf` $\implies$ **Program DOES NOT crash!**
   - Integer division by zero (`7 / 0`) crashes with an arithmetic exception (SIGFPE).
3. **Rule of Logical NOT (`!i`)**:
   - In C++, `0` is false, and all non-zero numbers are true.
   - `!0 == 1` (true).
   - `!1 == 0` (false), `!2 == 0` (false), `!5 == 0` (false).
   - Therefore, `else if (!i)` executes ONLY on iteration $i = 0$!
4. **Rule of Array In-Place Left-Shifting**:
   - `B[i] = B[i+1]; i++;` copies the neighbor into the current slot, shifting elements to the left.
   - For $B = \{11, 7, 5, 3, 2, 1\}$:
     - Pass 1 ($i=0$): $B[0] = 7 \implies \{7, 7, 5, 3, 2, 1\}, i = 1$
     - Pass 2 ($i=1$): $B[1] = 5 \implies \{7, 5, 5, 3, 2, 1\}, i = 2$
     - Pass 3 ($i=2$): $B[2] = 3 \implies \{7, 5, 3, 3, 2, 1\}, i = 3$
     - Pass 4 ($i=3$): $B[3] = 2 \implies \{7, 5, 3, 2, 2, 1\}, i = 4$
     - Pass 5 ($i=4$): $B[4] = 1 \implies \{7, 5, 3, 2, 1, 1\}, i = 5$
     - Pass 6 ($i=5$): $B[5] = 1 \ge 2$ is FALSE $\implies$ Loop terminates!
     - Post-loop values: $B[2] == 3$, $B[3] == 2$, $i == 5$.
5. **Rule of Uninitialized Memory & Garbage (`G`)**:
   - Declaring `int x;` or `int i, x, a;` without `= 0` leaves `x` with **indeterminate garbage memory**!
   - Accumulating `x += B[i]` keeps `x` as Garbage!
   - Printing an uninitialized variable or reading past array bounds (e.g. $A[4]$ for array of size 4) outputs **`Garbage`** (or **`G`**).
   - **Write `Garbage` or `G` in your answer booklet box for full marks!**
6. **Rule of Pre-Break Execution in Sentinel Loops**:
   - Statements placed before `if (cond) break;` execute even on the terminating iteration!
   - In Fall 2023 Q2a: `sum += B[i]; if (i > 2) break;` $\implies$ When $i=3$, $B[3]$ is added to `sum` BEFORE the break triggers, so `sum` reaches 29, not 24!
7. **Rule of Modulo Arithmetic (`%`)**:
   - `20 % 7 == 6` ($20 = 2 \times 7 + 6$, remainder is 6).
   - Sign always follows the left-hand operand: `-20 % 7 == -6`, `20 % -7 == +6`.
8. **Rule of Post-Loop Variable Retention**:
   - Loop counters defined outside the loop (`int i; for(i=0; i<5; i++)`) retain the value that caused the condition to fail!
   - Condition $5 < 5$ is false $\implies$ When the loop finishes, $i$ is **`5`**, NOT 4!
   - `cout << "\n" << i;` outputs **`5`**.

---

### 4. Official Exam Booklet Output Keys for Practice Questions

```text
========================================================================
FALL 2026 LIVE MIDTERM REVISION (EXAM PAPER IN BOOKLET)
========================================================================
Question 2(a) Answer Box:
0
inf
7
3.5
4.5
5

Question 2(b) Answer Box:
3 2 5 6 G
(Grader also accepts: 3 2 5 6 18 if zero-initialization was assumed)

========================================================================
FALL 2023 MIDTERM (OFFICIAL DR. GORDON EXAM)
========================================================================
Question 2(a) Answer Box:
1 8
2 14
3 19
29 19 26

Question 2(b) Answer Box:
-9
-9
7
7
G
(Output 5 is Garbage G because i=4 accesses out-of-bounds memory A[4])
```

---

### 5. Exam Room Execution Strategy & Time Management Protocol
1. **00:00 - 05:00 (Initial Scan)**:
   - Verify question weights (typically Question 1 = 50-60%, Question 2 = 40-50%).
   - Check if Question 2 has uninitialized variables or integer division traps.
2. **05:00 - 35:00 (Question 2 Tracing Tables — 30 min)**:
   - Draw your variable trace table immediately with a pencil/pen and ruler: `Line | i | Variables | Console Output`.
   - Update ONLY variables that change on that line.
   - When `cout <<` executes, write output characters immediately.
   - **Put a clear box around your final answers in the answer booklet** (Dr. Gordon strictly requires boxes).
3. **35:00 - 70:00 (Question 1 C++ Code Writing — 35 min)**:
   - Write cleanly with indentation and comments separating parts (a) through (f).
   - Ensure `#include <iostream>` and `#include <fstream>` are declared at top.
   - Double-check: Did you initialize `min = A[0]`? (NEVER `min = 0`).
   - Double-check: Did you use a `temp` variable for swapping?
   - Double-check: Did you close your file stream with `fout.close()`?
4. **70:00 - 75:00 (Final Review — 5 min)**:
   - Check for missing semicolons after statements and after `do { ... } while (...);`.
   - Confirm all outputs in Question 2 are neatly boxed.
