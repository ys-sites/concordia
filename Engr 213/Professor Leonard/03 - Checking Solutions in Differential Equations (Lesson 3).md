# Lesson 03: Checking Solutions in Differential Equations (Explicit, Implicit & Families)
### Professor Leonard Differential Equations Master Series · Lesson 3
> * **Direct Video Link**: [Lesson 03: Checking Solutions in Differential Equations (Explicit, Implicit & Families)](https://www.youtube.com/watch?v=5LkQEOPwqfk) · Duration: `30:58`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.2 — Solutions & Verification)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this 31-minute whiteboard lecture, Professor Leonard teaches how to rigorously verify whether a candidate function satisfies a given differential equation. He demonstrates the structural difference between explicit solutions, implicit relations, and multi-parameter general families, emphasizing that verifying solutions is the ultimate sanity check for every exam problem.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### 1. Explicit Solutions vs. Implicit Solutions
- **Explicit Solution**: A function where the dependent variable is isolated entirely on one side of the equality:
  $$y = \phi(x) \quad \text{for all } x \in I$$
- **Implicit Solution**: A relation $G(x, y) = 0$ that defines one or more explicit solutions implicitly on an interval $I$, requiring implicit differentiation to verify:
  $$\frac{d}{dx}[G(x, y)] = 0 \implies \text{produces the original ODE}$$

### 2. General Solutions vs. Particular Solutions
- **General Solution**: An $n$-parameter family of functions $y = \phi(x, c_1, c_2, \dots, c_n)$ containing $n$ independent arbitrary constants, where $n$ is equal to the order of the ODE.
- **Particular Solution**: A specific trajectory obtained by assigning explicit numerical values to the arbitrary constants $c_1, \dots, c_n$, determined by initial or boundary constraints.
- **Singular Solution**: A valid solution that **cannot** be obtained from the general family for any finite choice of parameters $c_i$ (frequently arising as envelope curves or lost division asymptotes).

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 03.1: Chalkboard Problem 3.1: Explicit Verification of a Two-Parameter Family
**Problem Statement**:
> Verify that the two-parameter family $y(x) = c_1 e^{2x} + c_2 x e^{2x}$ is an explicit solution to the homogeneous 2nd-order ODE: $y'' - 4y' + 4y = 0$ for all real constants $c_1, c_2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Compute the First Derivative $y'(x)$ using the Product Rule**:
  $$y(x) = c_1 e^{2x} + c_2 x e^{2x}$$
  $$y'(x) = 2c_1 e^{2x} + c_2 \left[1 \cdot e^{2x} + x(2e^{2x})\right] = (2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}$$

* **Step 2: Compute the Second Derivative $y''(x)$**:
  $$y''(x) = 2(2c_1 + c_2)e^{2x} + 2c_2 \left[1 \cdot e^{2x} + x(2e^{2x})\right]$$
  $$y''(x) = (4c_1 + 2c_2)e^{2x} + 2c_2 e^{2x} + 4c_2 x e^{2x} = (4c_1 + 4c_2)e^{2x} + 4c_2 x e^{2x}$$

* **Step 3: Substitute $y, y', y''$ into the Left-Hand Side (LHS) of the ODE**:
  $$\text{LHS} = y'' - 4y' + 4y$$
  $$\text{LHS} = \left[(4c_1 + 4c_2)e^{2x} + 4c_2 x e^{2x}\right] - 4\left[(2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}\right] + 4\left[c_1 e^{2x} + c_2 x e^{2x}\right]$$

* **Step 4: Group Terms by Basis Functions ($e^{2x}$ and $x e^{2x}$)**:
  - Aggregate $e^{2x}$ coefficients:
    $$(4c_1 + 4c_2) - 4(2c_1 + c_2) + 4c_1 = 4c_1 + 4c_2 - 8c_1 - 4c_2 + 4c_1 = (4 - 8 + 4)c_1 + (4 - 4)c_2 = 0$$
  - Aggregate $x e^{2x}$ coefficients:
    $$4c_2 - 4(2c_2) + 4c_2 = 4c_2 - 8c_2 + 4c_2 = (4 - 8 + 4)c_2 = 0$$

* **Step 5: Verify Equality**:
  $$\text{LHS} = 0 \cdot e^{2x} + 0 \cdot x e^{2x} = 0 = \text{RHS} \quad \checkmark$$
  Therefore, $y(x) = c_1 e^{2x} + c_2 x e^{2x}$ is an explicit solution on $(-\infty, \infty)$ for any $c_1, c_2 \in \mathbb{R}$.

> [!WARNING]
> **Common Exam Pitfall**: Failing to apply the product rule to terms like $c_2 x e^{2x}$. Differentiating $x e^{2x}$ as just $e^{2x}$ will completely derail the cancellation.

---

### Problem 03.2: Chalkboard Problem 3.2: Implicit Verification and Domain Analysis
**Problem Statement**:
> Verify that the circle relation $x^2 + y^2 = 25$ defines an implicit solution to the first-order ODE $\frac{dy}{dx} = -\frac{x}{y}$. Determine the valid interval of definition.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Differentiate the Relation Implicitly with Respect to $x$**:
  $$\frac{d}{dx}\left[x^2 + y^2\right] = \frac{d}{dx}[25]$$
  $$2x + 2y \frac{dy}{dx} = 0$$

* **Step 2: Solve Algebraically for $dy/dx$**:
  $$2y \frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y}$$
  This identically reproduces the original differential equation!

* **Step 3: Analyze the Domain and Singularities**:
  Solving $x^2 + y^2 = 25$ explicitly for $y$ yields two separate branches:
  $$y_1(x) = +\sqrt{25 - x^2}, \quad y_2(x) = -\sqrt{25 - x^2}$$
  - For either branch, the derivative is $\frac{dy}{dx} = \mp \frac{x}{\sqrt{25 - x^2}} = -\frac{x}{y}$.
  - At $x = \pm 5$, $y = 0$, causing the denominator in $dy/dx = -x/y$ to vanish (vertical tangent lines).
  - Therefore, the solution is valid on the open interval $I = (-5, 5)$.

> [!WARNING]
> **Common Exam Pitfall**: Claiming the solution is valid on the closed interval $[-5, 5]$. Solutions to differential equations must be differentiable throughout their interval of definition; infinite derivatives at boundaries violate this condition.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 03: Checking Solutions in Differential Equations (Explicit, Implicit & Families)](https://www.youtube.com/watch?v=5LkQEOPwqfk)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
