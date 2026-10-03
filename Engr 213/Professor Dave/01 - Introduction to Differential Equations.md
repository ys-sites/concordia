# Lesson 01: Introduction to Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 1
> * **Direct Video Link**: [Introduction to Differential Equations](https://www.youtube.com/watch?v=QbkWlNf2Xtw&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=1)
> * **Target Exam Scope**: Midterm 1 Scope · Chapter 1.1
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave introduces differential equations by contrasting them with ordinary algebra and standard calculus. In calculus, you are handed a curve and asked for its slope or curvature. In differential equations, nature hands you a rate equation—such as how speed changes with drag, or how cooling scales with temperature—and asks you to deduce the original motion or temperature curve. A differential equation defines an entire infinite family of curves filling the plane; it takes an initial condition (a single physical coordinate) to pin down the exact trajectory.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### Fundamental Mathematical Framework

An **ordinary differential equation (ODE)** expresses a relationship between an independent variable $x$, an unknown function $y(x)$, and its derivatives:

$$F\left(x, y, rac{dy}{dx}, rac{d^2y}{dx^2}, \dots, rac{d^n y}{dx^n}ight) = 0$$

  - **Explicit Solution**: A function $\phi(x)$ defined on an interval $I$ which, when substituted into the ODE, reduces it to an identity for all $x \in I$.
  - **General Solution**: An $n$-parameter family of functions $y = \phi(x, C_1, C_2, \dots, C_n)$ containing all possible particular solutions resulting from integration.
  - **Initial Value Problem (IVP)**: An ODE paired with auxiliary constraints specified at a single point $x_0$:
  $$y(x_0) = y_0, \quad y'(x_0) = y_1, \quad \dots, \quad y^{(n-1)}(x_0) = y_{n-1}$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Classroom Problem: Deriving and Verifying the Trajectory of a Growth-Decay System
**Problem Statement**:
> Consider the initial value problem $\dfrac{dy}{dt} = -2y + 4$, with $y(0) = 5$. Determine the general solution family, verify that it identically satisfies the differential equation, and evaluate the specific particular solution satisfying the initial condition.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Algebraic Separation of Variables**:
  Rewrite the differential equation: $\frac{dy}{dt} = -2(y - 2) \implies \frac{1}{y - 2} dy = -2 dt$.

* **Step 2: Indefinite Integration Both Sides**:
  $\int \frac{1}{y-2} dy = \int -2 dt \implies \ln|y - 2| = -2t + C_1$.

* **Step 3: Exponentiation and Arbitrary Constant Absorption**:
  $|y - 2| = e^{C_1} e^{-2t} \implies y(t) - 2 = A e^{-2t} \implies y(t) = 2 + A e^{-2t}$, where $A = \pm e^{C_1} \in \mathbb{R}$.

* **Step 4: Strict Identity Verification**:
  Differentiate: $y'(t) = -2A e^{-2t}$. Evaluate RHS: $-2y + 4 = -2(2 + A e^{-2t}) + 4 = -4 - 2A e^{-2t} + 4 = -2A e^{-2t}$. Both sides match identically for all $t$.

* **Step 5: Enforcement of Initial Condition**:
  $y(0) = 5 \implies 2 + A e^{0} = 5 \implies A = 3$. Particular solution: $y(t) = 2 + 3e^{-2t}$.

> [!WARNING]
> **Common Exam Pitfall**: Never forget that the integration constant $C_1$ is exponentiated into $A = e^{C_1}$. Adding $C$ outside the exponential (e.g. $y = 2 + e^{-2t} + C$) is a fatal algebraic error that fails the ODE.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Introduction to Differential Equations](https://www.youtube.com/watch?v=QbkWlNf2Xtw&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=1)
- **Exam Takeaway**: ODEs generate families of continuous trajectories. The initial condition chooses the unique physical path through state space.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
