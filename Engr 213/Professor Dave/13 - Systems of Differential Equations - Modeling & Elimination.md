# Lesson 13: Systems of Differential Equations - Modeling & Elimination
### Professor Dave Explains Differential Equations Master Series · Lesson 13
> * **Direct Video Link**: [Systems of Differential Equations Part 1: Modeling and Elimination](https://www.youtube.com/watch?v=MW97ZFavZ0g&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=13)
> * **Target Exam Scope**: Final Exam Scope · Chapter 10.1 & 10.2
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that in engineering, variables rarely change in isolation. In interconnected chemical reactors, cooling loops, or coupled predator-prey ecosystems, the rate of change of substance $x$ depends on $y$, and the rate of change of $y$ depends on $x$. By defining the differential operator $D = d/dt$, we treat derivatives as algebraic multipliers, allowing us to systematically eliminate one variable and collapse the coupled system into a single higher-order ODE.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Interconnected Fluid Mixing Model

$$\frac{dx_1}{dt} = \text{Rate In}_1 - \text{Rate Out}_1 = c_{in} R_{in} + \frac{x_2}{V_2} R_{21} - \frac{x_1}{V_1}(R_{12} + R_{1,out})$$
$$\frac{dx_2}{dt} = \text{Rate In}_2 - \text{Rate Out}_2 = \frac{x_1}{V_1} R_{12} - \frac{x_2}{V_2}(R_{21} + R_{2,out})$$
### 2. Differential Operator Elimination Method

Let $D = \frac{d}{dt}$. Write the linear system as:

$$L_1 x + L_2 y = g_1(t)$$
$$L_3 x + L_4 y = g_2(t)$$
Operate to eliminate $y$: $(L_1 L_4 - L_2 L_3) x = L_4 g_1(t) - L_2 g_2(t)$. Solve the scalar ODE for $x(t)$, then substitute back to find $y(t)$ without introducing redundant constants.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Exam Problem: Solving a Coupled 2x2 System by Systematic Elimination
**Problem Statement**:
> Solve the coupled system $\begin{cases} x' = 2x - y \\ y' = x \end{cases}$ with $x(0) = 1, y(0) = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Write in Differential Operator Notation**:
  $(D - 2)x + y = 0$ (Eq 1) and $-x + D y = 0$ (Eq 2).

* **Step 2: Eliminate $y$ by Algebraic Combination**:
  Operate on Eq 1 with $D$: $D(D - 2)x + D y = 0$. Subtract Eq 2: $D(D - 2)x - (-x) = 0 \implies (D^2 - 2D + 1)x = 0$.

* **Step 3: Solve Scalar Second-Order ODE for $x(t)$**:
  Characteristic equation: $r^2 - 2r + 1 = (r - 1)^2 = 0 \implies r = 1$ (repeated). $x(t) = c_1 e^t + c_2 t e^t$.

* **Step 4: Express $y(t)$ Directly from System**:
  From Eq 1: $y(t) = 2x - x'$. Compute $x'(t) = c_1 e^t + c_2(e^t + t e^t) = (c_1 + c_2)e^t + c_2 t e^t$. Therefore: $y(t) = 2(c_1 e^t + c_2 t e^t) - [(c_1 + c_2)e^t + c_2 t e^t] = (c_1 - c_2)e^t + c_2 t e^t$.

* **Step 5: Enforce Initial Conditions**:
  $x(0) = c_1 = 1$. $y(0) = c_1 - c_2 = 0 \implies c_2 = c_1 = 1$. Final solution: $x(t) = (1 + t)e^t, \quad y(t) = t e^t$.

> [!WARNING]
> **Common Exam Pitfall**: Never integrate a separate second-order ODE for $y(t)$ independently—doing so introduces two new constants ($c_3, c_4$) that must be laboriously eliminated. Always deduce $y(t)$ directly from the first-order coupling equation.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Systems of Differential Equations Part 1: Modeling and Elimination](https://www.youtube.com/watch?v=MW97ZFavZ0g&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=13)
- **Exam Takeaway**: Operator $D$ converts systems into single higher-order ODEs. Preserve constant dependency by expressing the second variable directly.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
