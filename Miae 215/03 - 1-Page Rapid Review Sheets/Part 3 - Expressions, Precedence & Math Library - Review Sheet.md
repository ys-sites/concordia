# MIAE 215 · Rapid Review Sheet · Part 3
## Expressions, Precedence, Modulo & Math Functions

---

### 1. Operator Precedence Hierarchy (Top to Bottom)
| Precedence | Operators | Associativity | Key Rules & Notes |
| :---: | :--- | :---: | :--- |
| **1 (Highest)** | `()` `[]` `.` `->` `++` (post) `--` (post) | Left-to-Right | Postfix increments after expression evaluation |
| **2** | `+` `-` (unary) `++` (pre) `--` (pre) `!` `sizeof` | **Right-to-Left** | Prefix increments before evaluation; `!0 == 1` |
| **3** | `*` `/` `%` | Left-to-Right | Multiplicative; `%` is integer only |
| **4** | `+` `-` | Left-to-Right | Additive arithmetic |
| **5** | `<` `<=` `>` `>=` | Left-to-Right | Relational comparisons (yields `bool` 1 or 0) |
| **6** | `==` `!=` | Left-to-Right | Equality comparisons |
| **7** | `&&` | Left-to-Right | Logical AND (short-circuits on `false`) |
| **8** | `\|\|` | Left-to-Right | Logical OR (short-circuits on `true`) |
| **9 (Lowest)** | `=` `+=` `-=` `*=` `/=` `%=` | **Right-to-Left** | Chained: `x = y = z = 10;` assigns right-to-left |

---

### 2. Modulo (`%`) & Discrete Engineering Patterns
* **Digit Peeling (Reversal)**: `digit = n % 10; n /= 10;` (peels digits from right to left).
  * Example: For $237$, successive remainders are $7, 3, 2$.
* **Cyclic Buffer**: `idx = (idx + 1) % N;` wraps index safely within $[0, N-1]$.
* **Parity & Sign Flip**: `(k % 2 == 0) ? 1 : -1;` generates alternating series $(-1)^k$.

---

### 3. Division & Multi-Assignment Traps
* **Integer Truncation**: `1 / 3` is strictly `0`! Thus, `1 / 3 * 10.0 == 0.0`.
  * **Fix**: Force floating-point literal: `1.0 / 3.0 * 10.0 == 3.333333333333333`.
* **Right-Associative Assignment**: `int x, y, z; x = y = z = 5;` evaluates `z=5`, then `y=5`, then `x=5`.
* **Postfix in Expressions**: `q = 10; int r = q++;` $\implies r = 10, q = 11$.

---

### 4. `<cmath>` Functions & IEEE 754 Precision Quirks
* **Angle Units**: All trigonometric arguments must be in **radians** ($\text{rad} = \text{deg} \times \frac{\pi}{180}$).
* **Trig Functions**: `sin(x)`, `cos(x)`, `tan(x)`, `asin(x)`, `acos(x)`, `atan2(y, x)`.
* **Powers & Roots**: `pow(base, exp)`, `sqrt(x)`, `exp(x)`, `log(x)` (natural $\ln$), `log10(x)`.
* **Floating-Point Noise**: $\cos(\pi/2)$ evaluates to $\approx 6.12323\times 10^{-17}$ (NOT $0.0$).
* **Catastrophic Cancellation**: $1.234567890123456 - 1.234567890123455 = 1.0\times 10^{-15}$ (retains 1 digit).
* **Machine Epsilon**: For 64-bit `double`, $\epsilon \approx 2.22\times 10^{-16}$. Thus, $1.0 - (1.0 - 10^{-20}) = 0.0$.
