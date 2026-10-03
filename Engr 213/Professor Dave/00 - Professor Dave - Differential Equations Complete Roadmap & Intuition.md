# Professor Dave - Differential Equations Complete Roadmap & Intuition
### Applied Ordinary Differential Equations (ENGR 213 Companion)
> * **Direct Playlist Link**: [Differential Equations Complete Series Overview](https://www.youtube.com/playlist?list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1)
> * **Target Exam Scope**: Course Overview · Complete Syllabus Architecture
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave frames differential equations as the universal language of physical change. In ordinary algebra, we solve for an unknown number; in standard calculus, we calculate the slope or accumulated area of a known curve. In differential equations, nature provides the dynamical relationship between a quantity and its instantaneous rates of change, and our objective is to uncover the underlying function family that obeys that law. This roadmap breaks down the entire 27-lecture architecture across first-order engines, second-order oscillatory dynamics, power series, matrix systems, Laplace operational calculus, and continuum partial differential equations.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### The 5 Core Pillars of Differential Equations


  - **Pillar 1: First-Order Analytical & Qualitative Engines (Lessons 1–6)**: Separable equations, integrating factors for linear systems, exact differential potential functions, Bernoulli nonlinear reductions, and geometric homogeneous substitutions.
  - **Pillar 2: Higher-Order Linear Dynamics & Harmonic Oscillations (Lessons 7–9)**: Homogeneous characteristic equations, the three root cases (distinct real, repeated real, complex conjugates), non-homogeneous undetermined coefficients, variation of parameters via the Wronskian, and Cauchy-Euler equidimensional systems.
  - **Pillar 3: Numerical & Series Approximations (Lessons 10–12)**: Forward Euler, predictor-corrector Heun, Runge-Kutta 4th Order (RK4), power series around ordinary points via Leibniz recurrence, and regular singular points via the Method of Frobenius.
  - **Pillar 4: Coupled Systems & Transform Calculus (Lessons 13–17)**: Vector-matrix formulations $\mathbf{x}' = \mathbf{A}\mathbf{x}$, eigenvalue/eigenvector phase plane stability, operational Laplace transforms, convolutions, LTI transfer functions, and discrete-time Z-transforms.
  - **Pillar 5: Continuum Physics & Partial Differential Equations (Lessons 18–27)**: Second-order PDE classification (elliptic, hyperbolic, parabolic), quasi-linear characteristics, separation of variables, Fourier frequency analysis, wave propagation, and diffusion Green's functions.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Master Synthesis: The Universal Classification and Solution Selector Engine
**Problem Statement**:
> Given an arbitrary first or second order differential equation on an exam, formulate the systematic algorithmic decision tree required to classify its order, determine linearity, identify the governing method, and guard against singular solution loss.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Diagnose Order & Linearity**:
  Identify the highest derivative $y^{(n)}$. Verify if dependent variable $y$ and all derivatives appear strictly to degree 1 without transcendental entrapment ($\sin y, e^y$) or mutual cross-products ($y y'$).

* **Step 2: First-Order Selection Matrix**:
  If 1st order: test in sequence: (1) Separable $dy/dx = g(x)h(y)$; (2) Linear $y' + P(x)y = Q(x)$ using $\mu(x) = e^{\int P dx}$; (3) Exact $M dx + N dy = 0$ via $\partial_y M = \partial_x N$; (4) Bernoulli $y' + Py = Qy^n$ via $u = y^{1-n}$; (5) Homogeneous $y/x$ substitution.

* **Step 3: Second-Order Selection Matrix**:
  If 2nd order linear: solve characteristic equation $a r^2 + b r + c = 0$. Construct complementary base $y_c = c_1 y_1 + c_2 y_2$. For $y_p$: use Undetermined Coefficients for polynomial/exponential/sinusoidal forcing, or Variation of Parameters $u_1 y_1 + u_2 y_2$ via Wronskian $W$ for general forcing functions.

* **Step 4: Initial & Boundary Value Enforcement**:
  Apply initial conditions $y(x_0) = y_0$ only after complete general integration $+C$ is fully secured. Check for singular solutions set aside during algebraic division.

> [!WARNING]
> **Common Exam Pitfall**: Never apply an initial condition before completing the integration step. The constant $+C$ enters at the exact instant integration is performed, not as an afterthought at the end.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Differential Equations Complete Series Overview](https://www.youtube.com/playlist?list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1)
- **Exam Takeaway**: Classify first, choose the minimal robust engine, preserve all constant tracking, and verify candidate trajectories back into the original governing equation.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
