# Topic 03: Existence and Uniqueness of Solutions
### Professor Leonard Master Series · Lesson 11
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Does a Solution Even Exist? And is it the Only One?
Professor Leonard always stresses the two foundational questions of mathematics:
1. **Existence**: Does at least one solution curve pass through the point $(x_0, y_0)$?
2. **Uniqueness**: Is that solution curve *the only one*, or do curves fork and branch out into multiple realities?

In physics and engineering, uniqueness is non-negotiable: if you release a pendulum with exact initial position and velocity, the universe doesn't pick between two different futures!

---

## 2. The Picard-Lindelöf Existence & Uniqueness Theorems

### Theorem A: First-Order Linear Equations (Global on Interval)
Consider the linear IVP in standard form:
$$y' + P(x) y = Q(x), \qquad y(x_0) = y_0$$
**Rule**: If $P(x)$ and $Q(x)$ are continuous on an open interval $I = (a, b)$ containing $x_0$, then there exists **one and only one** solution $y(x)$ valid across the **entire interval $I$**.
- The interval of existence is determined **solely by the coefficients $P(x)$ and $Q(x)$**, before you even solve the ODE!

### Theorem B: First-Order Non-Linear Equations (Local Theorem)
Consider the IVP:
$$\frac{dy}{dx} = f(x, y), \qquad y(x_0) = y_0$$
Let $R$ be an open rectangle $a < x < b$, $c < y < d$ containing $(x_0, y_0)$.
1. **Existence**: If $f(x, y)$ is continuous on $R$, then there exists *at least one* solution in an interval $(x_0 - h, x_0 + h)$.
2. **Uniqueness**: If **both** $f(x, y)$ **and** its partial derivative $\frac{\partial f}{\partial y}$ are continuous on $R$, then the solution is **unique** on that interval.

---

## 3. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 3.1: The Classic Failure of Uniqueness (The Cusp Fork)
**Statement**: Consider the IVP:
$$\frac{dy}{dx} = 3 y^{2/3}, \qquad y(0) = 0$$
1. Check the conditions of the Existence & Uniqueness Theorem at $(0, 0)$.
2. Demonstrate that this IVP possesses infinitely many distinct solutions!

**Step-by-Step Whiteboard Solution**:
* **Step 1: Check continuity of $f(x, y)$**:
  $$f(x, y) = 3 y^{2/3}$$
  $f(x, y)$ is continuous everywhere in the $xy$-plane. Therefore, **existence of a solution is guaranteed**!
* **Step 2: Check continuity of $\frac{\partial f}{\partial y}$**:
  $$\frac{\partial f}{\partial y} = 3 \cdot \frac{2}{3} y^{-1/3} = \frac{2}{y^{1/3}} = \frac{2}{\sqrt[3]{y}}$$
  At $y = 0$, the denominator is 0! $\frac{\partial f}{\partial y}$ **is discontinuous (blows up to $\infty$) along the entire $x$-axis ($y = 0$)**!
  The Uniqueness condition fails at $(0, 0)$. Uniqueness is **NOT** guaranteed.
* **Step 3: Find explicit multiple solutions**:
  - *Candidate 1 (Trivial Solution)*: $y_1(x) \equiv 0$.
    $y_1'(x) = 0$, and $3(0)^{2/3} = 0$. $y_1(0) = 0$. Valid!
  - *Candidate 2 (Separation of Variables)*:
    $$y^{-2/3} dy = 3 dx \implies 3 y^{1/3} = 3x + C \implies y^{1/3} = x + \frac{C}{3}$$
    Apply $y(0) = 0 \implies 0 = 0 + C/3 \implies C = 0$.
    $$y^{1/3} = x \implies y_2(x) = x^3$$
    $y_2'(x) = 3x^2$. Also $3(x^3)^{2/3} = 3x^2$. $y_2(0) = 0$. Valid!
  - *Candidate 3 (Branching Infinite Family)*:
    $$y_c(x) = \begin{cases} 0, & x \le c \\ (x - c)^3, & x > c \end{cases} \quad (\text{for any } c \ge 0)$$
    All satisfy $y(0) = 0$! A particle resting at $(0,0)$ can choose to sit still forever, or branch off along a cubic curve at any arbitrary time $c$!

---

### Problem 3.2: Finding the Maximum Guaranteed Interval for a Linear IVP
**Statement**: Without solving the equation, determine the largest interval in which the solution to the following IVP is guaranteed to exist and be unique:
$$(x^2 - 9)\frac{dy}{dx} + 2x y = \ln(x + 1), \qquad y(2) = 5$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Put the equation into standard linear form $y' + P(x)y = Q(x)$**:
  Divide through by the leading coefficient $(x^2 - 9)$:
  $$\frac{dy}{dx} + \frac{2x}{x^2 - 9}y = \frac{\ln(x + 1)}{x^2 - 9}$$
* **Step 2: Identify $P(x)$ and $Q(x)$ and their domains**:
  $$P(x) = \frac{2x}{(x - 3)(x + 3)}$$
  Continuous everywhere except $x = -3$ and $x = 3$.
  $$Q(x) = \frac{\ln(x + 1)}{(x - 3)(x + 3)}$$
  Requires $x + 1 > 0 \implies x > -1$, and denominator $\neq 0 \implies x \neq 3$.
* **Step 3: Find the intersection of continuity for both $P(x)$ and $Q(x)$**:
  - $x > -1$ and $x \neq 3$.
  - Continuous intervals are: $I_1 = (-1, 3)$ and $I_2 = (3, \infty)$.
* **Step 4: Check where the initial condition $x_0 = 2$ lives**:
  $x_0 = 2 \in (-1, 3)$.
* **Conclusion**: The theorem guarantees a unique solution on the interval:
  $$I = (-1, 3)$$

---

### Problem 3.3: Non-Linear Finite-Time Blow-Up (Why Nonlinear Intervals Depend on $y_0$)
**Statement**: Solve $y' = y^2, y(0) = y_0$. Show that unlike linear ODEs, the interval of existence depends directly on the initial value $y_0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate and integrate**:
  $$y^{-2} dy = dx \implies -\frac{1}{y} = x + C \implies y(x) = \frac{1}{-x - C} = \frac{1}{C_1 - x}$$
* **Step 2: Apply $y(0) = y_0$**:
  $$y_0 = \frac{1}{C_1} \implies C_1 = \frac{1}{y_0}$$
  $$y(x) = \frac{1}{\frac{1}{y_0} - x} = \frac{y_0}{1 - y_0 x}$$
* **Step 3: Analyze the domain of definition**:
  The solution blows up to $\infty$ at vertical asymptote $x = 1/y_0$.
  - If $y_0 = 1$, the solution exists only on $(-\infty, 1)$.
  - If $y_0 = 100$, it blows up at $x = 1/100 = 0.01$!
  Notice that $f(x,y) = y^2$ is smooth everywhere, but the solution cannot survive past $x = 1/y_0$!

---

### Problem 3.4: Discontinuous Leading Coefficient & The Zero-Crossing Trap
**Statement**: Find all solutions to $x \frac{dy}{dx} = y, y(0) = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate for $x \neq 0, y \neq 0$**:
  $$\frac{dy}{y} = \frac{dx}{x} \implies \ln|y| = \ln|x| + C \implies y(x) = k x \quad (k \in \mathbb{R})$$
* **Step 2: Apply $y(0) = 0$**:
  $0 = k(0)$ is identically true for EVERY real number $k$!
  Every line $y = kx$ passing through the origin is a solution!
* **Step 3: Why did uniqueness fail?**:
  In standard form, $y' - \frac{1}{x}y = 0$, $P(x) = -1/x$ is undefined and discontinuous at $x = 0$.

---

## 4. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting Standard Form**: If $(x-1)y' + y = 0$, you must divide by $(x-1)$ before checking continuity!
- **Trap 2: Ignoring Domain of $\ln$ and Roots**: $\ln(x)$ requires $x > 0$; $\sqrt{x}$ requires $x \ge 0$.
- **Trap 3: Assuming Non-Linear Interval is Constant**: In nonlinear ODEs, you cannot find the interval of existence without solving the IVP first.
