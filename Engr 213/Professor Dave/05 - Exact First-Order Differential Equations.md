# Lesson 05: Exact First-Order Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 5
> * **Direct Video Link**: [Exact First-Order Differential Equations](https://www.youtube.com/watch?v=sJQIH4m0L_c&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=5)
> * **Target Exam Scope**: Midterm 1 Scope · Chapter 2.4
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that an exact equation is a differential equation disguised as the total derivative of a topographic height map $\phi(x,y) = C$. Just as walking along a contour line on a mountain means your altitude change is zero ($d\phi = 0$), an exact differential equation represents movement along the level curves of a multivariable potential function. By testing mixed partial derivatives $\partial M/\partial y = \partial N/\partial x$, we verify exactness and reconstruct the hidden potential function.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### The Exact Differential Mechanism

An equation in differential form $M(x,y) dx + N(x,y) dy = 0$ is exact if and only if:

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
When exact, there exists a potential function $\phi(x,y)$ such that $\frac{\partial \phi}{\partial x} = M$ and $\frac{\partial \phi}{\partial y} = N$. The general solution is simply $\phi(x,y) = C$.

**Non-Exact Integrating Multipliers**:


  - If $\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = f(x)$, then $\mu(x) = \exp\left(\int f(x) dx\right)$.
  - If $\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right) = g(y)$, then $\mu(y) = \exp\left(\int g(y) dy\right)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Classroom Problem: Step-by-Step Exact ODE Reconstruction
**Problem Statement**:
> Verify that $(2xy + 3) dx + (x^2 - 1) dy = 0$ is exact, and solve with initial condition $y(1) = 4$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Test Clairaut Exactness Condition**:
  $M = 2xy + 3 \implies \frac{\partial M}{\partial y} = 2x$. $N = x^2 - 1 \implies \frac{\partial N}{\partial x} = 2x$. Since $\partial_y M = \partial_x N = 2x$, the equation is strictly exact.

* **Step 2: Partially Integrate $M$ with respect to $x$**:
  $\phi(x,y) = \int (2xy + 3) dx + g(y) = x^2 y + 3x + g(y)$.

* **Step 3: Differentiate with respect to $y$ and Equate to $N$**:
  $\frac{\partial \phi}{\partial y} = x^2 + g'(y) = N = x^2 - 1 \implies g'(y) = -1$.

* **Step 4: Integrate $g'(y)$ and Assemble General Solution**:
  $g(y) = -y$. Therefore, $\phi(x,y) = x^2 y + 3x - y = C$.

* **Step 5: Apply Initial Condition**:
  $y(1) = 4 \implies (1)^2(4) + 3(1) - 4 = C \implies C = 3$. Explicit form: $y(x)(x^2 - 1) + 3x = 3 \implies y(x) = \frac{3 - 3x}{x^2 - 1} = \frac{-3(x-1)}{(x-1)(x+1)} = \frac{-3}{x+1}$ for $x \neq 1$.

> [!WARNING]
> **Common Exam Pitfall**: When integrating $M(x,y)$ with respect to $x$, the constant of integration is an arbitrary function of $y$, denoted $g(y)$, NOT a scalar constant $+C$!

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Exact First-Order Differential Equations](https://www.youtube.com/watch?v=sJQIH4m0L_c&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=5)
- **Exam Takeaway**: Test mixed partials first. Integrate $M$ over $x$, match derivative to $N$ to find $g(y)$, and set $\phi(x,y) = C$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
