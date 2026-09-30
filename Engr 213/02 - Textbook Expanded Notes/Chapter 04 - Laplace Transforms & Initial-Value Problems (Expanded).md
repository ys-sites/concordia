# Chapter 04: Laplace Transforms & Operational Calculus
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Official Course Textbook (7th Ed., Chapter 4)

---

## 1. Executive Summary & First-Principles Philosophy
The **Laplace Transform** is an operational integral transform that converts differential equations in the time domain ($t$) into algebraic equations in the frequency / complex $s$-domain. 

Instead of dealing with calculus operations (derivatives and integrals), we perform high school algebra, solve for $Y(s)$, and then apply the **Inverse Laplace Transform** via partial fractions to return to $y(t)$. Initial conditions are embedded directly into the transform step!

---

## 2. Core Mechanics & Mathematical Engine

### A. Formal Definition
Given a function $f(t)$ defined for $t \ge 0$:
$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt$$

### B. Master Transform Table of Elementary Functions
| Time Domain $f(t)$ | Laplace Domain $F(s)$ | Convergence Region |
| :--- | :--- | :--- |
| $1$ | $\frac{1}{s}$ | $s > 0$ |
| $t^n$ ($n \in \mathbb{Z}^+$) | $\frac{n!}{s^{n+1}}$ | $s > 0$ |
| $e^{at}$ | $\frac{1}{s - a}$ | $s > a$ |
| $\sin(kt)$ | $\frac{k}{s^2 + k^2}$ | $s > 0$ |
| $\cos(kt)$ | $\frac{s}{s^2 + k^2}$ | $s > 0$ |
| $\sinh(kt)$ | $\frac{k}{s^2 - k^2}$ | $s > |k|$ |
| $\cosh(kt)$ | $\frac{s}{s^2 - k^2}$ | $s > |k|$ |

### C. Operational Theorems
1. **First Translation (Frequency Shift) Theorem**:
   $$\mathcal{L}\{e^{at}f(t)\} = F(s - a)$$
2. **Transforms of Derivatives**:
   $$\mathcal{L}\{f'(t)\} = s F(s) - f(0)$$
   $$\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$$
   $$\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1}f(0) - \dots - f^{(n-1)}(0)$$

---

## 3. Fully Worked Exam Archetype: Solving a 2nd-Order IVP

**Problem**: Solve using Laplace transforms:
$$y'' - 4y' + 4y = e^{2t}, \quad y(0) = 0, \quad y'(0) = 1$$

### Step-by-Step Solution:
* **Step 1: Take Laplace transform of both sides**:
  $$\mathcal{L}\{y''\} - 4\mathcal{L}\{y'\} + 4\mathcal{L}\{y\} = \mathcal{L}\{e^{2t}\}$$
  $$(s^2 Y(s) - s y(0) - y'(0)) - 4(s Y(s) - y(0)) + 4Y(s) = \frac{1}{s - 2}$$
* **Step 2: Substitute initial values $y(0) = 0, y'(0) = 1$**:
  $$s^2 Y(s) - 1 - 4s Y(s) + 4Y(s) = \frac{1}{s - 2}$$
  $$(s^2 - 4s + 4)Y(s) - 1 = \frac{1}{s - 2}$$
  $$(s - 2)^2 Y(s) = 1 + \frac{1}{s - 2} = \frac{s - 1}{s - 2}$$
* **Step 3: Solve algebraically for $Y(s)$**:
  $$Y(s) = \frac{s - 1}{(s - 2)^3}$$
* **Step 4: Decompose via Partial Fractions / Shift Theorem**:
  Rewrite numerator in terms of $(s - 2)$:
  $$s - 1 = (s - 2) + 1$$
  $$Y(s) = \frac{(s - 2) + 1}{(s - 2)^3} = \frac{1}{(s - 2)^2} + \frac{1}{(s - 2)^3}$$
* **Step 5: Apply Inverse Transform**:
  By the First Translation Theorem, $\mathcal{L}^{-1}\left\{\frac{1}{(s-2)^2}\right\} = t e^{2t}$.
  For the second term: $\mathcal{L}\{t^2\} = \frac{2!}{s^3} \implies \mathcal{L}^{-1}\left\{\frac{1}{s^3}\right\} = \frac{1}{2}t^2$.
  Therefore, $\mathcal{L}^{-1}\left\{\frac{1}{(s-2)^3}\right\} = \frac{1}{2}t^2 e^{2t}$.
  $$y(t) = t e^{2t} + \frac{1}{2}t^2 e^{2t} = e^{2t}\left(t + \frac{1}{2}t^2\right)$$

---

## 4. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Dropping Negative Signs in Derivative Formulas**: The formula is $s^2 Y - s y(0) - y'(0)$. Both initial condition terms carry **negative signs**.
* ⚠️ **Trap 2: Completing the Square in Denominators**: For terms like $\frac{s}{s^2 + 4s + 13} = \frac{s}{(s+2)^2 + 9}$, split the numerator into $(s+2) - 2$ to apply $\cos$ and $\sin$ shift rules correctly.
