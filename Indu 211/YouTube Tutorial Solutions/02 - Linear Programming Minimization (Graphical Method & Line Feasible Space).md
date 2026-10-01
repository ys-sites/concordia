# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 02: Linear Programming Minimization
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 2: INDU 211 - Minimization Problem](https://www.youtube.com/watch?v=yTi70c0_cq8)
> * **Video ID**: `yTi70c0_cq8` · **Duration**: 19:44
> * **Target Exam Scope**: 🏁 **FINAL EXAM (Weeks 7–12, Chapters 14, 15, 8, 17)**
> * **Curriculum Context**: Chapter 14 — Deterministic Operations Research Models

---

## 1. Problem Formulation

The linear programming problem requires finding the minimum cost point subject to an equality constraint, an inequality constraint, and non-negativity:

$$\begin{aligned}
\text{Minimize } & Z = 4 X_1 + X_2 \\
\text{Subject to: } & X_1 + 3 X_2 = 9 \quad &\text{(Constraint 1: Equality)} \\
& X_1 + X_2 \le 5 \quad &\text{(Constraint 2: Upper Bound)} \\
& X_1 \ge 0, \quad X_2 \ge 0 \quad &\text{(Non-Negativity)}
\end{aligned}$$

---

## 2. Graphical Representation & 1D Line-Segment Feasible Region

### Step 1: Plotting Constraint Lines

1. **Constraint 1 ($X_1 + 3 X_2 = 9$)**:
   * If $X_1 = 0 \implies 3 X_2 = 9 \implies X_2 = 3 \implies \mathbf{(0, 3)}$
   * If $X_2 = 0 \implies X_1 = 9 \implies \mathbf{(9, 0)}$
   * *Critical Mathematical Note*: Because this is a strict equality ($=$), feasible solutions must lie **strictly ON** this line segment, not over a 2D surface area.

2. **Constraint 2 ($X_1 + X_2 \le 5$)**:
   * If $X_1 = 0 \implies X_2 = 5 \implies \mathbf{(0, 5)}$
   * If $X_2 = 0 \implies X_1 = 5 \implies \mathbf{(5, 0)}$
   * Feasible solutions must lie on or below this line in the direction of the origin $(0,0)$.

3. **Non-Negativity Constraints ($X_1 \ge 0, X_2 \ge 0$)**:
   * Restricts solutions to the first quadrant ($X_1$-axis and $X_2$-axis).

---

### Step 2: Determining the Feasible Region Extremities (Corner Points)

Because of the equality constraint, the feasible space collapses into a **1-dimensional line segment** along $X_1 + 3 X_2 = 9$:

* **Extreme Point A (Left Endpoint)**:
  At the intersection with the $X_2$-axis ($X_1 = 0$):
  $$0 + 3 X_2 = 9 \implies X_2 = 3 \implies \text{Point } A = \mathbf{(0, 3)}$$
  Verify against Constraint 2: $0 + 3 = 3 \le 5$ (Valid).

* **Extreme Point B (Right Endpoint)**:
  At the intersection of the two constraint boundary lines:
  $$\begin{cases}
  X_1 + 3 X_2 = 9 \\
  X_1 + X_2 = 5 \implies X_1 = 5 - X_2
  \end{cases}$$
  Substitute $X_1$ into Constraint 1:
  $$(5 - X_2) + 3 X_2 = 9 \implies 5 + 2 X_2 = 9 \implies 2 X_2 = 4 \implies X_2 = 2$$
  $$X_1 = 5 - 2 = 3 \implies \text{Point } B = \mathbf{(3, 2)}$$
  Verify against Constraint 1: $3 + 3(2) = 9$ (Valid).

---

## 3. Objective Function Propagation & Optimal Solution

### Iso-Cost Line Propagation:
Set the objective function to an arbitrary value, say $Z = 5$:
$$4 X_1 + X_2 = 5 \implies \text{Intercepts: } (0, 5) \text{ and } (1.25, 0)$$
* The slope of the objective line is $m = -4$.
* For a **minimization** problem, propagate the iso-cost line from the upper right inward toward the origin $(0,0)$.
* The point on the feasible line segment that the iso-cost line touches at the lowest $Z$ value is the global optimum.

### Corner Point Evaluation Table:

| Corner Point | Coordinates $(X_1, X_2)$ | Objective Value $Z = 4 X_1 + X_2$ | Status |
| :---: | :---: | :---: | :---: |
| **Point A** | **$(0, 3)$** | $Z = 4(0) + 3 = \mathbf{3}$ | **GLOBAL MINIMUM (OPTIMAL)** |
| **Point B** | **$(3, 2)$** | $Z = 4(3) + 2 = \mathbf{14}$ | Sub-optimal |

### Optimal Solution:
$$X_1^* = 0, \quad X_2^* = 3, \quad Z^* = 3$$

---

## 4. Part 3.2.3: Characterization of All Feasible Solutions

**Question**: *Identify all feasible solutions of this linear programming problem using a mathematical expression or concise explanation.*

* **Mathematical Definition**:
  $$\text{Feasible Set } S = \left\{ (X_1, X_2) \in \mathbb{R}^2 \;\middle|\; X_1 + 3 X_2 = 9, \quad 0 \le X_1 \le 3, \quad 2 \le X_2 \le 3 \right\}$$
* **Concise Explanation**:
  *"The feasible region of this linear program is not a two-dimensional polygon, but rather a one-dimensional straight line segment lying along $X_1 + 3 X_2 = 9$ bounded between the extreme endpoints $(0, 3)$ and $(3, 2)$."*
