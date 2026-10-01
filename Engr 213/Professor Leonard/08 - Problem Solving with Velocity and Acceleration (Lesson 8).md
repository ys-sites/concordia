# Lesson 08: Problem Solving with Velocity and Acceleration (Multi-Stage Motion & Resistance)
### Professor Leonard Differential Equations Master Series · Lesson 8
> * **Direct Video Link**: [Lesson 08: Problem Solving with Velocity and Acceleration (Multi-Stage Motion & Resistance)](https://www.youtube.com/watch?v=pH7oxUCSfQY) · Duration: `1:25:57`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.3 — Advanced Kinematics)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this extensive 86-minute masterclass, Professor Leonard tackles multi-stage kinematic problems where acceleration is piecewise continuous or dependent on velocity. He demonstrates how to transition variables at piecewise boundaries and establish rigorous conservation checks.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### Multi-Stage Piecewise Kinematics
In complex engineering problems (such as rocket burns or braking systems), the governing ODE changes dynamically across distinct temporal regimes:
$$a(t) = \begin{cases}
a_1(t), & 0 \le t \le t_1 \quad (\text{Stage 1: Powered Phase}) \\
a_2(t), & t > t_1 \quad (\text{Stage 2: Coasting / Free-Fall Phase})
\end{cases}$$

### Continuity Across Boundary Points
Physics requires that **position and velocity must be continuous** across stage transitions:
$$s_1(t_1) = s_2(t_1), \quad v_1(t_1) = v_2(t_1)$$
The terminal state of Stage 1 forms the **initial condition** for Stage 2!

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 08.1: Chalkboard Problem 8.1: Two-Stage Model Rocket Flight
**Problem Statement**:
> A model rocket is launched vertically from rest from the ground. Its engine produces a net upward acceleration of $a_1 = +14.2 \text{ m/s}^2$ for $t_1 = 4$ seconds, after which burnout occurs and the rocket coasts freely under gravity ($g = 9.8 \text{ m/s}^2$).\n1. Find the altitude and velocity of the rocket at burnout.\n2. Determine the total maximum altitude attained by the rocket.\n3. Calculate the total time elapsed from launch until the rocket crashes back to earth.

**Step-by-Step Whiteboard Solution**:
* **Stage 1: Powered Flight ($0 \le t \le 4$)**:
  $$a_1(t) = 14.2, \quad v(0) = 0, \quad s(0) = 0$$
  - Velocity:
    $$v_1(t) = \int 14.2 dt = 14.2t$$
    At burnout ($t = 4$):
    $$v_1(4) = 14.2(4) = 56.8 \text{ m/s}$$
  - Altitude:
    $$s_1(t) = \int 14.2t dt = 7.1 t^2$$
    At burnout ($t = 4$):
    $$s_1(4) = 7.1(4)^2 = 7.1(16) = 113.6 \text{ meters}$$

* **Stage 2: Coasting Flight ($t > 4$)**:
  Let $\tau = t - 4$ be time elapsed since burnout.
  Initial conditions for Stage 2:
  $$s_2(0) = 113.6 \text{ m}, \quad v_2(0) = 56.8 \text{ m/s}, \quad a_2(\tau) = -9.8 \text{ m/s}^2$$
  - Velocity:
    $$v_2(\tau) = -9.8\tau + 56.8$$
  - Altitude:
    $$s_2(\tau) = -4.9\tau^2 + 56.8\tau + 113.6$$

* **Peak Altitude Calculation**:
  Peak occurs when $v_2(\tau) = 0$:
  $$-9.8\tau + 56.8 = 0 \implies \tau_{\text{peak}} = \frac{56.8}{9.8} \approx 5.796 \text{ seconds after burnout}$$
  Total time to peak: $t_{\text{total, peak}} = 4 + 5.796 = 9.796 \text{ seconds}$.
  Maximum altitude:
  $$s_{\text{max}} = -4.9(5.796)^2 + 56.8(5.796) + 113.6 = -164.6 + 329.2 + 113.6 = 278.2 \text{ meters}$$

* **Descent to Ground ($s_2(\tau) = 0$)**:
  $$-4.9\tau^2 + 56.8\tau + 113.6 = 0 \implies 4.9\tau^2 - 56.8\tau - 113.6 = 0$$
  $$\tau = \frac{56.8 \pm \sqrt{(-56.8)^2 - 4(4.9)(-113.6)}}{2(4.9)} = \frac{56.8 \pm \sqrt{3226.24 + 2226.56}}{9.8} = \frac{56.8 + \sqrt{5452.8}}{9.8}$$
  $$\tau = \frac{56.8 + 73.84}{9.8} \approx 13.33 \text{ seconds}$$
  Total flight time:
  $$t_{\text{total}} = 4 + 13.33 = 17.33 \text{ seconds}$$

> [!WARNING]
> **Common Exam Pitfall**: Restarting the time clock without tracking the offset. If using variable $t$, Stage 2 velocity is $-9.8(t - 4) + 56.8$. Keeping coordinate clocks clearly distinguished prevents costly algebra errors.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 08: Problem Solving with Velocity and Acceleration (Multi-Stage Motion & Resistance)](https://www.youtube.com/watch?v=pH7oxUCSfQY)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
