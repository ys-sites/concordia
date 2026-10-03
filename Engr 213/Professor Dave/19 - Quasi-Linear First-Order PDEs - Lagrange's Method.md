# Lesson 19: Quasi-Linear First-Order PDEs - Lagrange's Method
### Professor Dave Explains Differential Equations Master Series · Lesson 19
> * **Direct Video Link**: [Quasi-Linear First-Order Partial Differential Equations: Lagrange’s Method](https://www.youtube.com/watch?v=LzMCBbxSMts&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=19)
> * **Target Exam Scope**: Advanced PDE Scope · Method of Characteristics
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that a first-order PDE $P u_x + Q u_y = R$ represents a geometric condition: the normal vector to a 2D surface $u(x,y)$ must be perpendicular to a direction field vector $(P, Q, R)$. Joseph-Louis Lagrange realized that solving the PDE is equivalent to integrating the streamlines of this vector field, known as Characteristic Curves. By solving a system of ordinary differential equations $dx/P = dy/Q = du/R$, we construct characteristic tracks along which the PDE reduces to simple calculus!

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Lagrange-Charpit Characteristic System

For the quasi-linear PDE $P(x,y,u) \frac{\partial u}{\partial x} + Q(x,y,u) \frac{\partial u}{\partial y} = R(x,y,u)$:

$$\frac{dx}{P(x,y,u)} = \frac{dy}{Q(x,y,u)} = \frac{du}{R(x,y,u)}$$
### 2. Constructing the General Solution


  - Find two independent first integrals (conservation constants):
  $$u_1(x,y,u) = c_1, \quad u_2(x,y,u) = c_2$$
  - The general solution is an arbitrary functional relationship:
  $$F(u_1, u_2) = 0 \quad \Longleftrightarrow \quad u_1 = \Phi(u_2)$$
  - To satisfy a Cauchy initial curve $u(x,0) = f(x)$, use the initial condition to determine the specific functional form of $\Phi$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### PDE Problem: Solving a Transport Conservation Law via Characteristics
**Problem Statement**:
> Solve the quasi-linear PDE $x \dfrac{\partial u}{\partial x} + y \dfrac{\partial u}{\partial y} = 2u$ subject to the Cauchy boundary condition $u(x, 1) = x^3$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Set Up Characteristic Ratios**:
  $\frac{dx}{x} = \frac{dy}{y} = \frac{du}{2u}$.

* **Step 2: Solve First Characteristic Equation**:
  $\frac{dx}{x} = \frac{dy}{y} \implies \ln|x| = \ln|y| + C_1' \implies \frac{x}{y} = c_1$.

* **Step 3: Solve Second Characteristic Equation**:
  $\frac{dy}{y} = \frac{du}{2u} \implies 2\ln|y| = \ln|u| + C_2' \implies \frac{u}{y^2} = c_2$.

* **Step 4: Formulate General Implicit Solution**:
  $\frac{u}{y^2} = \Phi\left(\frac{x}{y}\right) \implies u(x,y) = y^2 \Phi\left(\frac{x}{y}\right)$.

* **Step 5: Enforce Cauchy Boundary Condition $u(x, 1) = x^3$**:
  Substitute $y = 1$: $u(x, 1) = 1^2 \Phi\left(\frac{x}{1}\right) = \Phi(x)$. We are given $u(x, 1) = x^3$, so $\Phi(x) = x^3$ identically.

* **Step 6: Assemble Explicit Unique Solution**:
  $u(x,y) = y^2 \Phi\left(\frac{x}{y}\right) = y^2 \left(\frac{x}{y}\right)^3 = y^2 \frac{x^3}{y^3} = \frac{x^3}{y}$. Check: $x u_x + y u_y = x(3x^2/y) + y(-x^3/y^2) = \frac{3x^3}{y} - \frac{x^3}{y} = \frac{2x^3}{y} = 2u$. Verified!

> [!WARNING]
> **Common Exam Pitfall**: When determining $\Phi(x)$ from the boundary curve, replace the entire dummy argument $w = x/y$ into $\Phi(w)$. Do not mistakenly replace $x$ inside the final answer before establishing the functional identity.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Quasi-Linear First-Order Partial Differential Equations: Lagrange’s Method](https://www.youtube.com/watch?v=LzMCBbxSMts&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=19)
- **Exam Takeaway**: Lagrange's method maps 1st-order PDEs into ODE characteristic tracks $dx/P = dy/Q = du/R$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
