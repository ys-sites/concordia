# Lesson 03: Separable First-Order Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 3
> * **Direct Video Link**: [Separable First-Order Differential Equations](https://www.youtube.com/watch?v=lbAX_LDjV5o&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=3)
> * **Target Exam Scope**: Midterm 1 Scope · Chapter 2.2
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave highlights separable equations as the cleanest analytical tool in differential equations. If all dependent terms $y$ can be quarantined on the left with $dy$, and all independent terms $x$ placed on the right with $dx$, the problem reduces to two independent single-variable calculus integrals. However, Dave warns of the classic exam trap: whenever you divide by an expression involving $y$, you risk throwing away constant equilibrium solutions where that divisor equals zero!

---

## 2. Core Theoretical Framework & Rigorous Formulations
### Analytical Separation Mechanism

A first-order equation is separable if it factors as:

$$\frac{dy}{dx} = g(x) h(y) \implies \frac{1}{h(y)} dy = g(x) dx \quad (h(y) \neq 0)$$

  - **Singular Solutions**: Any real constant $y = c$ such that $h(c) = 0$ is an equilibrium solution that satisfies the ODE identically.
  - **Explicit Branch Selection**: When taking square roots or logarithms, the initial condition $y(x_0) = y_0$ dictates the proper sign ($\pm$) and branch.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Exam Problem: Solving a Nonlinear Separable IVP with Branch Selection
**Problem Statement**:
> Solve the initial value problem $\dfrac{dy}{dx} = \dfrac{2x + 1}{2y}$, with $y(0) = -3$. State the explicit solution and its interval of definition.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate Differentials**:
  $2y\,dy = (2x + 1)\,dx$.

* **Step 2: Direct Indefinite Integration**:
  $\int 2y\,dy = \int (2x + 1)\,dx \implies y^2 = x^2 + x + C$.

* **Step 3: Enforce Initial Condition**:
  $y(0) = -3 \implies (-3)^2 = 0 + 0 + C \implies C = 9$.

* **Step 4: Solve for $y(x)$ and Select Root Branch**:
  $y(x) = \pm\sqrt{x^2 + x + 9}$. Since $y(0) = -3 < 0$, we MUST select the negative square root branch: $y(x) = -\sqrt{x^2 + x + 9}$.

* **Step 5: Determine Domain of Existence**:
  The radicand $x^2 + x + 9$ has discriminant $\Delta = 1 - 36 = -35 < 0$, so it is strictly positive for all $x \in \mathbb{R}$. Interval of existence: $(-\infty, \infty)$.

> [!WARNING]
> **Common Exam Pitfall**: Leaving $\pm$ in your final answer on a Concordia quiz or midterm will lose marks. An initial condition picks exactly one branch of the square root.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Separable First-Order Differential Equations](https://www.youtube.com/watch?v=lbAX_LDjV5o&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=3)
- **Exam Takeaway**: Separate, integrate, add $+C$ immediately, and let the initial value dictate the explicit root sign.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
