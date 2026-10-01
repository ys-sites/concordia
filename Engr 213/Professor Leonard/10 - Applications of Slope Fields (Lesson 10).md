# Lesson 10: Applications of Slope Fields (Qualitative Curve Tracing & Asymptotes)
### Professor Leonard Differential Equations Master Series · Lesson 10
> * **Direct Video Link**: [Lesson 10: Applications of Slope Fields (Qualitative Curve Tracing & Asymptotes)](https://www.youtube.com/watch?v=i_f6tC0BKxI) · Duration: `38:42`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.2 — Qualitative Asymptotic Behavior)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this 39-minute lecture, Professor Leonard demonstrates how to deduce the long-term qualitative behavior of solutions purely from slope fields. Without evaluating complicated integrals, engineers can predict limits as $x \to \infty$, identify attractor/repeller asymptotes, and guarantee stability.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### Qualitative Analysis Without Solving
Often, non-linear ODEs cannot be integrated in terms of elementary functions. Qualitative analysis answers the critical engineering questions:
1. Does the solution blow up to $\pm \infty$ in finite time?
2. Does the solution approach a steady-state equilibrium?
3. How sensitive is the final state to initial disturbances?

### Asymptotic Attractors vs. Repellers
- **Attractor (Stable Asymptote)**: Solution curves that start near the asymptote are channeled into it as $x \to \infty$.
- **Repeller (Unstable Asymptote)**: Solution curves diverge away from the curve as time progresses.
- **Funneling Theorem**: If two bounding trajectories converge, all intermediate solutions are trapped between them for all future time.

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 10.1: Chalkboard Problem 10.1: Predicting Asymptotic Limits from Slope Field Analysis
**Problem Statement**:
> Analyze the autonomous differential equation $\frac{dy}{dx} = y(2 - y)$:\n1. Find all equilibrium solutions (where $dy/dx = 0$).\n2. Determine the sign of $dy/dx$ across the regions separated by the equilibrium lines.\n3. Sketch the qualitative trajectories for initial values $y(0) = -1$, $y(0) = 1$, and $y(0) = 3$.\n4. State $\lim_{x \to \infty} y(x)$ for each initial condition.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Find Equilibrium Solutions**:
  Set $\frac{dy}{dx} = 0 \implies y(2 - y) = 0 \implies y = 0 \quad \text{and} \quad y = 2$
  These represent two horizontal straight-line solutions that partition the plane into 3 horizontal zones.

* **Step 2: Sign Analysis Across Zones**:
  - **Zone 1 ($y > 2$)**:
    Pick test point $y = 3$: $dy/dx = 3(2 - 3) = -3 < 0$.
    Slopes are negative; curves decrease toward $y = 2$.
  - **Zone 2 ($0 < y < 2$)**:
    Pick test point $y = 1$: $dy/dx = 1(2 - 1) = +1 > 0$.
    Slopes are positive; curves increase toward $y = 2$.
  - **Zone 3 ($y < 0$)**:
    Pick test point $y = -1$: $dy/dx = -1(2 - (-1)) = -3 < 0$.
    Slopes are negative; curves plunge toward $-\infty$.

* **Step 3: Evaluate Asymptotic Limits for Given Initial Conditions**:
  - For $y(0) = 3$ (in Zone 1):
    Since $dy/dx < 0$ and bounded below by $y = 2$:
    $$\lim_{x \to \infty} y(x) = 2$$
  - For $y(0) = 1$ (in Zone 2):
    Since $dy/dx > 0$ and bounded above by $y = 2$:
    $$\lim_{x \to \infty} y(x) = 2$$
  - For $y(0) = -1$ (in Zone 3):
    Since $dy/dx < 0$ and accelerating downwards:
    $$\lim_{x \to \infty} y(x) = -\infty$$

* **Conclusion**:
  $y = 2$ is an **asymptotically stable equilibrium (attractor / sink)**, while $y = 0$ is an **unstable equilibrium (repeller / source)**.

> [!WARNING]
> **Common Exam Pitfall**: Failing to recognize that distinct solution curves cannot intersect each other (by Picard's Uniqueness Theorem). A curve starting in Zone 2 can never cross the equilibrium line $y = 2$ or $y = 0$!

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 10: Applications of Slope Fields (Qualitative Curve Tracing & Asymptotes)](https://www.youtube.com/watch?v=i_f6tC0BKxI)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
