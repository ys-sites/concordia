# MIAE 215 · Programming for Mechanical & Industrial Engineers
## Official Midterm Master Document Cheatsheet & Exam Survival Guide
*Concordia University · Gina Cody School of Engineering · Department of MIAE*

---

### 1. Data Types, Memory Bounds & Numerical Limits
| Type | Bytes | Range / Precision | Key Exam Behavior & Concordia Traps |
| :--- | :---: | :--- | :--- |
| `bool` | **1** | `true` (1) or `false` (0) | Any non-zero integer evaluates to `true` (`-1` is `true`!). Only `0` is `false`. |
| `char` | **1** | -128 to 127 (`'0'`=48, `'A'`=65, `'a'`=97) | Single quotes (`'a'`). Promotion to int: `'a' + 1 == 98`. Case swap: `'a' - 32 == 'A'`. |
| `short` | **2** | $-32,768$ to $+32,767$ | 16-bit signed integer. |
| `int` | **4** | $-2,147,483,648$ to $+2,147,483,647$ | **Integer Division Truncates**: `7 / 2 == 3`, `1 / 3 == 0`. Overflow wraps around negative! |
| `unsigned int` | **4** | $0$ to $+4,294,967,295$ ($2^{32}-1$) | Modulo wrap-around on underflow: `0u - 1u == 4294967295`. |
| `float` | **4** | $\approx 1.2 \times 10^{-38}$ to $3.4 \times 10^{38}$ (7 dig) | Round-off error. Overflow = `+/-inf`, Underflow = `0.0`, Div by 0 = `inf`. Literal `3.14f`. |
| `double` | **8** | $\approx 2.3 \times 10^{-308}$ to $1.7 \times 10^{308}$ (15-16 dig) | Default literal (`3.14`). Always compare with tolerance $\varepsilon$, NEVER `==`! |
| `sizeof(T)` | Op | Size in bytes | `sizeof(int) == 4`, `sizeof(double) == 8`. Total elements: `sizeof(A) / sizeof(A[0])`. |

> ⚠️ **Floating Equality Trap**: Never write `if (a == b)`. Binary floating point has roundoff error! Always use:
> ```cpp
> const double EPS = 1.0e-7;
> if (fabs(a - b) < EPS) { /* roughly equal */ }
> ```

---

### 2. Truncating Integer Division & Explicit Type Casting
- **Rule of Integer Division**: When both operands are integers, C++ performs integer division and **discards the fractional part**:
  - `7 / 2 == 3` (NOT 3.5!)
  - `1 / 2 == 0` (NOT 0.5!)
  - `1 / (i + 1) == 0` for any integer $i \ge 1$!
- **Mixed Expressions (Implicit Promotion)**: If either operand is `float` or `double`, the other is promoted to floating-point:
  - `7.0 / 2 == 3.5`, `7 / 2.0 == 3.5`
- **Explicit Casting**:
  - C-Style: `(double)a / b`
  - Standard C++: `static_cast<double>(a) / b`

---

### 3. Complete Operator Precedence & Evaluation Rules
1. **Postfix**: `()` `[]` `x++` `x--` *(Left-to-Right)*
2. **Unary**: `++x` `--x` `+` `-` `!` `~` `&` (address-of) `*` (dereference) `sizeof` `(type)` *(Right-to-Left)*
3. **Multiplicative**: `*` `/` `%` *(Left-to-Right)* $\rightarrow$ Modulo `%` requires integer operands: `17 % 5 == 2`. Sign follows LHS: `-7 % 3 == -1`.
4. **Additive**: `+` `-` *(Left-to-Right)*
5. **Bitwise Shifts**: `<<` `>>` *(Left-to-Right)* $\rightarrow$ `x << 1` multiplies by 2; `x >> 1` divides by 2.
6. **Relational**: `<` `<=` `>` `>=` *(Left-to-Right)* $\rightarrow$ **Chained Trap**: `1 < x < 5` evaluates as `(1 < x) < 5` $\implies$ `(0 or 1) < 5` which is ALWAYS true! Must write `(1 < x) && (x < 5)`.
7. **Equality**: `==` `!=` *(Left-to-Right)*
8. **Bitwise AND / XOR / OR**: `&` then `^` then `|` *(Left-to-Right)*
9. **Logical AND**: `&&` *(Left-to-Right, **Short-circuit**: if LHS is false, RHS is NEVER evaluated!)*
10. **Logical OR**: `||` *(Left-to-Right, **Short-circuit**: if LHS is true, RHS is NEVER evaluated!)*
11. **Conditional (Ternary)**: `cond ? expr1 : expr2` *(Right-to-Left)*
12. **Assignment**: `=` `+=` `-=` `*=` `/=` `%=` *(Right-to-Left)*

> 🧠 **Prefix vs. Postfix Increment**:
> - `y = x++;` $\implies$ `y` receives current `x`, **then** `x` increments by 1.
> - `y = ++x;` $\implies$ `x` increments by 1 **first**, then `y` receives new `x`.

---

### 4. Control Statements & Branching Logic
- **`if-else` & Dangling Else**: `else` always matches the closest preceding unmatched `if`.
- **Assignment in `if` Trap**: `if (x = 5)` assigns 5 to `x`, evaluates to true! Always write `if (x == 5)`.
- **`switch(expr)`**:
  - `expr` MUST be integral (`int`, `char`, `bool`, `enum`). **CANNOT** switch on `float`, `double`, or `string`!
  - `case const_val:`
  - `break;` is **mandatory** to prevent fall-through! Without `break;`, execution continues into subsequent cases regardless of their condition.
  - `default:` handles any unmatched values.

---

### 5. Loops & Iteration Control
- **`for(init; cond; step)`**: Evaluates condition before body. Beware semicolon trap: `for(int i=0; i<5; i++); { cout << i; }` executes empty loop 5 times, then block once!
- **`while(cond)`**: 0 or more executions. Condition tested at the top.
- **`do { ... } while(cond);`**: **Guaranteed at least 1 execution!** Mandatory semicolon `;` after `while(cond);`.
- **`break;`**: Immediately exits the innermost enclosing loop or switch.
- **`continue;`**: Skips the remainder of the current iteration; jumps straight to loop update in `for`, or condition in `while`.

#### Essential Loop Patterns (Gordon Midterm Staples)
```cpp
// 1. Sentinel-Controlled Keyboard Input:
int k, count = 0, sum = 0;
while (1) {
    cin >> k;
    if (k < 0) break; // Sentinel terminates
    count++;
    sum += k;
}

// 2. Input Validation Loop:
int n;
do {
    cout << "Enter n (1-100): ";
    cin >> n;
} while (n < 1 || n > 100);
```

---

### 6. Dr. Gordon's Table Tracing Protocol (Signature Question 2 - 40% of Midterm!)
1. **Trace Table Structure**: Draw one column per variable (`i`, `sum`, `a`, `b`, `A[0]`, etc.) + an **Output** column.
2. **Line-by-Line State**: Write a new value **only when that variable updates**. Leave cells blank if unchanged.
3. **Cout Trigger**: The moment `cout <<` executes, immediately write characters into the Output column (watch newlines `\n` vs spaces!).
4. **ARRAY BOUNDARY & GARBAGE (`G`) RULE**:
   - For `double A[4] = {-0.1, 0.11, 0.0, 0.2};`, valid indices are `0, 1, 2, 3`.
   - When loop `for (i = 0; i < 4; i++)` finishes, variable `i` is **`4`**!
   - If the code executes `cout << A[i];`, it accesses `A[4]` which is unallocated memory $\implies$ **Output is Garbage (`G`)**!
   - Write **`G`** or **`garbage`** in your answer booklet for full marks!

---

### 7. 1D Array Algorithms (50% of Programming Problems!)
```cpp
// 1. Keyboard Input:
for (int i = 0; i < n; i++) cin >> A[i];

// 2. Dot Product:
double sum = 0.0;
for (int i = 0; i < n; i++) sum += A[i] * B[i];

// 3. Find Maximum Value and its Index (NEVER initialize max to 0!):
double maxVal = A[0]; int maxIdx = 0;
for (int i = 1; i < n; i++) {
    if (A[i] > maxVal) { maxVal = A[i]; maxIdx = i; }
}

// 4. Array Equality Test (Element-by-Element):
bool equal = true;
for (int i = 0; i < n; i++) {
    if (A1[i] != A2[i]) { equal = false; break; }
}
if (equal) cout << "A1 and A2 are equal"; else cout << "A1 and A2 are not equal";

// 5. Array Concatenation (Merge A and B of size n into C of size 2*n):
for (int i = 0; i < n; i++) C[i]     = A[i];
for (int i = 0; i < n; i++) C[i + n] = B[i];

// 6. In-Place Array Reversal:
for (int i = 0; i < n / 2; i++) {
    double temp = A[i];
    A[i] = A[n - 1 - i];
    A[n - 1 - i] = temp;
}

// 7. Range Filtering / Counting:
int count = 0;
for (int i = 0; i < n; i++) {
    if (B[i] > 0.0 && B[i] < PI) count++;
}
```

---

### 8. C-Strings (`char str[]`) & Space Removal
- **Null Terminator**: Strings MUST terminate with `'\0'` (ASCII 0). Array size must be at least `length + 1`.
- **String Length without Library**:
  ```cpp
  int len = 0;
  while (s[len] != '\0') len++;
  ```
- **In-Place Space Removal (`no_space`)**:
  ```cpp
  void no_space(char str[]) {
      int j = 0;
      for (int i = 0; str[i] != '\0'; i++) {
          if (str[i] != ' ') str[j++] = str[i];
      }
      str[j] = '\0'; // Crucial: Re-terminate with null character!
  }
  ```
- **Input Differences**:
  - `cin >> str;` $\rightarrow$ reads single word, stops at whitespace.
  - `cin.getline(str, 100);` $\rightarrow$ reads full line including spaces.
- **`<cstring>` Library**: `strlen(s)`, `strcpy(dest, src)`, `strcmp(s1, s2)` (0 if equal), `strcat(dest, src)`.

---

### 9. Functions & Parameter Passing Semantics
- **Pass-by-Value**: `void f(int x)` makes a local copy; changes inside DO NOT affect caller.
- **Pass-by-Reference**: `void f(int &x)` passes alias; modifications directly change caller's variable!
- **Passing Arrays to Functions**:
  - Arrays decay to pointers: `void process(double A[], int n)` or `void process(double *A, int n)`.
  - Changes inside the function directly modify the caller's array!
  - Array size cannot be determined inside function (`sizeof(A)` returns pointer size 8B!) $\implies$ Always pass size `n`!
- **Classic Value Swap**:
  ```cpp
  void swap(double &a, double &b) {
      double temp = a; a = b; b = temp;
  }
  ```

---

### 10. Pointers & Dynamic Memory Allocation
- `&x`: Address-of operator (returns memory address of variable `x`).
- `*p`: Dereference operator (accesses / modifies value stored at address `p`).
- **Pointer Arithmetic**: `p + 1` advances by `sizeof(*p)` bytes (+4 for int, +8 for double).
- **Array-Pointer Equivalence**: `A[i] == *(A + i) == p[i]`.
```cpp
int n; cin >> n;
double *A = new double[n]; // Dynamic allocation
if (A == NULL) { cout << "Memory allocation failed"; return 1; }

for (int i = 0; i < n; i++) A[i] = sin(1.1 * i);

delete[] A; // Crucial: Always deallocate dynamic arrays to prevent memory leaks!
```

---

### 11. File Input / Output (`<fstream>`) & Formatted Streams
```cpp
#include <fstream>
#include <iomanip>

// Writing to File:
ofstream fout("results.txt");
if (!fout) { cout << "File open error"; return 1; }
fout << scientific << setprecision(5);
for (int i = 0; i < n; i++) fout << A[i] << "\t" << B[i] << "\n";
fout.close();

// Reading from File:
ifstream fin("data.txt");
if (!fin) { cout << "File open error"; return 1; }
int i = 0;
while (fin >> A[i] && i < 100) i++;
fin.close();
```

---

### 12. Mathematical Library `<cmath>` & Constants
- `#include <cmath>` (angles are always in **radians**!)
- `sin(x)`, `cos(x)`, `tan(x)`, `asin(x)`, `acos(x)`, `atan(x)`
- `sqrt(x)`, `pow(base, exp)`, `exp(x)`, `log(x)` (natural $\ln$), `log10(x)`
- `fabs(x)` (floating-point absolute value)
- `floor(x)` (rounds down), `ceil(x)` (rounds up)
- $\pi$ calculation: `const double PI = 4.0 * atan(1.0);`

---

### 13. Flowchart Standard Symbols (Flowgorithm)
- **Oval / Pill**: Start / End / Return.
- **Parallelogram**: Input (`cin >> x`) / Output (`cout << y`).
- **Rectangle**: Process / Calculation / Assignment (`sum = 0`, `i = i + 1`).
- **Diamond**: Decision (`if (x > 0)`, `while condition`) with True and False branches.

---

### 14. Top 10 Concordia Exam Traps & Zero-Marks Gotchas
1. **Integer Division**: `double x = 1 / 2;` $\implies$ `x = 0.0`! Fix: `1.0 / 2` or `(double)1 / 2`.
2. **Loop Exit Index**: `for (i = 0; i < 4; i++)` $\implies$ After loop `i == 4`. `A[i]` is out-of-bounds $\implies$ **Garbage (`G`)**!
3. **Assignment vs Equality**: `if (x = 5)` assigns 5, evaluates to true! Fix: `if (x == 5)`.
4. **Exact Float Comparison**: `if (a == b)` fails due to precision limits. Fix: `fabs(a - b) < 1.0e-7`.
5. **Switch on Float/Double**: `switch (3.14)` is a compile error! Only integral types allowed.
6. **Missing `break;` in Switch**: Causes fall-through execution to all subsequent cases.
7. **Semicolon After `for` / `if`**: `for(int i=0; i<5; i++); { cout << i; }` runs loop with empty body!
8. **Initializing Min/Max to 0**: If all array numbers are negative, `maxVal = 0` gives wrong answer! Fix: `maxVal = A[0]`.
9. **Missing String Null-Terminator**: Without `str[j] = '\0'`, string functions read into unallocated memory.
10. **Memory Leak**: Using `new[]` without `delete[]` loses marks for resource management.
