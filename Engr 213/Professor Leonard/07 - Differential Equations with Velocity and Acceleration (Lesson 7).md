# Lesson 07: Differential Equations with Velocity and Acceleration
### Professor Leonard Differential Equations Master Series · Lesson 7
> * **Direct Video Link**: [Lesson 07: Differential Equations with Velocity and Acceleration](https://www.youtube.com/watch?v=MlUDvnj4E1U) · Duration: `43:59`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.3 — Kinematics & Newton's 2nd Law)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this 44-minute lecture, Professor Leonard connects differential equations directly to Newton's Second Law ($F = ma$). He walks through vertical motion under gravity, projectile motion, and establishing consistent sign conventions for coordinate systems.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### The Kinematic Differential Hierarchy
$$s(t) \quad \xrightarrow{d/dt} \quad v(t) = \frac{ds}{dt} \quad \xrightarrow{d/dt} \quad a(t) = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

### Newton's Second Law for Vertical Free-Fall
$$\sum F = m a \implies m \frac{dv}{dt} = - m g \implies \frac{dv}{dt} = -g$$
Where:
- $g = 9.8 \text{ m/s}^2$ (metric) or $g = 32 \text{ ft/s}^2$ (imperial).
- Downward force of gravity is negative when upward direction is defined as positive.

### Two-Step Integration for Motion Under Constant Acceleration
1. **Velocity**:
   $$v(t) = \int a(t) dt = \int (-g) dt = -gt + v_0$$
2. **Position**:
   $$s(t) = \int v(t) dt = \int (-gt + v_0) dt = -\frac{1}{2}gt^2 + v_0 t + s_0$$

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 07.1: Chalkboard Problem 7.1: Vertical Projectile Launched from a Cliff
**Problem Statement**:
> A stone is thrown vertically upward from the top of a 100-meter-high cliff with an initial velocity of $20 \text{ m/s}$. Assuming downward gravitational acceleration $g = 9.8 \text{ m/s}^2$ with no air resistance:\n1. Formulate the IVP for velocity and position.\n2. Find the time at which the stone reaches its maximum height, and calculate that height.\n3. Find the stone's velocity when it strikes the ground at the base of the cliff.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Set Up Coordinate System and IVP**:
  Let the ground be $s = 0$, upward direction be positive ($+s$).
  - $a(t) = \frac{d^2s}{dt^2} = -9.8 \text{ m/s}^2$
  - Initial position: $s(0) = 100 \text{ m}$
  - Initial velocity: $v(0) = +20 \text{ m/s}$

* **Step 2: Integrate Acceleration to Determine Velocity Function**:
  $$v(t) = \int (-9.8) dt = -9.8t + C_1$$
  Using $v(0) = 20 \implies C_1 = 20$:
  $$v(t) = -9.8t + 20$$

* **Step 3: Integrate Velocity to Determine Position Function**:
  $$s(t) = \int (-9.8t + 20) dt = -4.9t^2 + 20t + C_2$$
  Using $s(0) = 100 \implies C_2 = 100$:
  $$s(t) = -4.9t^2 + 20t + 100$$

* **Step 4: Maximum Height Analysis**:
  Maximum height occurs when vertical velocity instantaneously vanishes: $v(t) = 0$:
  $$-9.8t + 20 = 0 \implies t_{\text{peak}} = \frac{20}{9.8} \approx 2.041 \text{ seconds}$$
  Substitute $t_{\text{peak}}$ into position equation:
  $$s_{\text{max}} = -4.9(2.041)^2 + 20(2.041) + 100 = -20.41 + 40.82 + 100 = 120.41 \text{ meters}$$

* **Step 5: Impact Velocity Analysis**:
  Impact occurs when stone strikes ground: $s(t) = 0$:
  $$-4.9t^2 + 20t + 100 = 0 \implies 4.9t^2 - 20t - 100 = 0$$
  Apply quadratic formula:
  $$t = \frac{20 \pm \sqrt{(-20)^2 - 4(4.9)(-100)}}{2(4.9)} = \frac{20 \pm \sqrt{400 + 1960}}{9.8} = \frac{20 \pm \sqrt{2360}}{9.8}$$
  Since time $t > 0$:
  $$t_{\text{impact}} = \frac{20 + 48.58}{9.8} \approx 6.998 \text{ seconds}$$
  Compute velocity at impact:
  $$v(6.998) = -9.8(6.998) + 20 = -68.58 + 20 = -48.58 \text{ m/s}$$
  The stone strikes the ground traveling downward at $48.58 \text{ m/s}$.

> [!WARNING]
> **Common Exam Pitfall**: Mismatched coordinate signs. If upward is positive, gravity must be $-g$. Choosing downward as positive is valid, but initial position and upward velocity must be appropriately adjusted.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 07: Differential Equations with Velocity and Acceleration](https://www.youtube.com/watch?v=MlUDvnj4E1U)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
