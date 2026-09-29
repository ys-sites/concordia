# ENGR 213: Chapter 1.1 & 1.2 Condensed Master Summary
*(Dennis G. Zill, Advanced Engineering Mathematics 7th ed. vs. Dr. A. Haghighat Lecture Notes)*

---

### 1. Differential Equation (DE) & Classification
* **Plain-English Concept:** An equation relating an unknown function to its rates of change (derivatives).
* **Classification Axes:**
  1. **Type:**
     * **ODE (Ordinary):** Derivatives with respect to a *single* independent variable (e.g., $y'(x) + y = x$).
     * **PDE (Partial):** Derivatives with respect to *two or more* independent variables (e.g., $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$).
  2. **Order:** The highest derivative present in the equation.
     * *Normal Form:* Solved for the highest derivative: $\frac{d^n y}{dx^n} = f(x, y, y', \dots, y^{(n-1)})$.
  3. **Linearity:** An ODE is **linear** if and only if it satisfies three strict rules:
     * (i) Dependent variable $y$ and all its derivatives have exponent $1$ (no $y^2$, $(y')^3$).
     * (ii) Coefficients $a_i(x)$ depend *only* on the independent variable $x$ (no $y y'$).
     * (iii) No nonlinear functions of $y$ (no $\sin(y), e^y, \sqrt{y}$).
* **Teacher Slide Correlation:**
  * **Lecture 1, Slides 6–11:** Covers definitions verbatim.
  * *Teacher Additions:* Slide 4 adds 4 physical engineering systems (Newton's cooling, vehicle motion, chemical kinetics, logistic population).

---

### 2. Solutions, Intervals of Definition, & Types
* **Plain-English Concept:** A function $y = \phi(x)$ that makes the equation true identically for all $x$ in an interval $I$.
* **Interval of Definition ($I$):** A solution is meaningless without its valid domain where $\phi$ and its derivatives are continuous.
  * *Example:* $y'' = 2/x^3 \implies y = 1/x$ is valid on $(-\infty, 0)$ or $(0, \infty)$, but **not** across $x=0$.
* **Explicit vs. Implicit:**
  * *Explicit:* $y = \phi(x)$ (e.g., $y = \sin x$).
  * *Implicit:* $G(x,y) = 0$ where no explicit algebra is forced (e.g., $x^2 + y^2 = 25$ for $y' = -x/y$).
* **Families vs. Singular Solutions:**
  * *General Family:* An $n$-th order ODE has an $n$-parameter family of solutions containing constants $c_1, \dots, c_n$.
  * *Trivial Solution:* $y \equiv 0$ when it identically solves a homogeneous DE.
  * *Singular Solution (Zill's Book Insight):* A valid solution that **cannot** be obtained by choosing any value of $c$ in the family (e.g., envelope curves).
* **Teacher Slide Correlation:**
  * **Lecture 1, Slides 13–19:** Covers solution definition, explicit/implicit, trivial solution, and solution families.
  * *Exact Match:* Slide 19 visualizes Zill's curves for $xy' - y = x^2\sin x$ ($y = cx - x\cos x$) and $y'' - 2y' + y = 0$ ($y = c_1 e^x + c_2 x e^x$).

---

### 3. Initial-Value Problems (IVPs)
* **Plain-English Concept:** A differential equation paired with auxiliary conditions at **one single starting point** $x_0$ to pinpoint one unique curve out of the infinite family.
* **$n$-th Order Condition:** An $n$-th order ODE requires $n$ conditions at the same point $x_0$: $y(x_0) = y_0, y'(x_0) = y_1, \dots, y^{(n-1)}(x_0) = y_{n-1}$.
* **Teacher Slide Correlation:**
  * **Lecture 2, Slides 3–5:**
    * *Slide 4:* 1st-order IVP: $y' = 2x, y(0)=3 \implies y = x^2 + 3$.
    * *Slide 5 (Verbatim from Zill Ex 3, p. 91):* 2nd-order IVP: $x'' + 16x = 0, x(\pi/2) = -2, x'(\pi/2) = 1 \implies x(t) = -2\cos(4t) + \frac{1}{4}\sin(4t)$.

---

### 4. Existence & Uniqueness Theorem (Picard's Theorem / Theorem 1.2.1)
* **Plain-English Concept:** Before spending hours trying to solve an IVP, this theorem tests: (1) Does an answer even exist? (2) Is it the only answer?
* **The Theorem Statement:**
  For the 1st-order IVP: $\frac{dy}{dx} = f(x,y), \quad y(x_0) = y_0$:
  * **Condition 1 (Existence):** If $f(x,y)$ is continuous on a rectangle $R$ enclosing $(x_0, y_0)$, then a solution **exists**.
  * **Condition 2 (Uniqueness):** If $\frac{\partial f}{\partial y}$ is *also* continuous on $R$, then the solution is **unique** on some subinterval $I_0$.
* **The Classic Failure Case (Zill Ex 4, p. 93 $\leftrightarrow$ Teacher Lecture 2, Slide 8):**
  * $\frac{dy}{dx} = x y^{1/2}, \quad y(0) = 0$.
  * $f(x,y) = x\sqrt{y}$ is continuous at $(0,0) \implies$ **A solution exists** ($y \equiv 0$ works!).
  * But $\frac{\partial f}{\partial y} = \frac{x}{2\sqrt{y}}$ is **undefined/discontinuous at $y=0$**!
  * **Consequence:** Uniqueness fails. There are *two* distinct solutions passing through $(0,0)$:
    $$y = 0 \quad \text{and} \quad y = \frac{1}{16}x^4$$

---

### 📊 Quick Cross-Reference Matrix

| Core Concept | Zill 7th Ed. Reference | Teacher's Notes Correlation | Key Takeaway / Test Trap |
| :--- | :--- | :--- | :--- |
| **Classification (Type/Order/Linearity)** | Section 1.1 (pp. 49–56) | Lecture 1, Slides 6–11 | Linearity only applies to $y$ and its derivatives; $x^3 \cos(x)$ on coefficients is completely linear! |
| **Interval of Definition** | Section 1.1 (pp. 57–60) | Lecture 1, Slide 15 | Solution curves cannot jump across vertical asymptotes or points of discontinuity. |
| **Implicit vs Explicit** | Section 1.1 (pp. 62–64) | Lecture 1, Slide 16 | Circles $x^2 + y^2 = 25$ are implicit; solving for $y$ requires choosing the positive or negative branch. |
| **Second-Order IVP** | Section 1.2, Ex 3 (p. 91) | Lecture 2, Slide 5 *(Identical)* | Both conditions must be at the **same** point $t = \pi/2$ to be an IVP (otherwise it's a BVP). |
| **Existence & Uniqueness** | Section 1.2, Thm 1.2.1 (p. 94) | Lecture 2, Slides 7–8 *(Identical Ex)* | Checking $\partial f/\partial y$ continuity is the golden test for uniqueness. |
