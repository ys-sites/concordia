# Lesson 20: Laplace's Equation & Separation of Variables
### Professor Dave Explains Differential Equations Master Series · Lesson 20
> * **Direct Video Link**: [Laplace’s Equation: Separation of Variables](https://www.youtube.com/watch?v=8jOqXM8OFh8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=20)
> * **Target Exam Scope**: Advanced Boundary Value Problems Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that Laplace's Equation $
abla^2 u = u_{xx} + u_{yy} = 0$ governs static equilibria: the steady temperature distribution in a cooling metal plate, the electrostatic potential between high-voltage electrodes, or incompressible irrotational fluid flow. Solutions are called Harmonic Functions, possessing the remarkable Mean Value Property (the value at any point is the average of its neighbors). We solve Laplace's equation using Separation of Variables, assuming the 2D field factors into two 1D functions $u(x,y) = X(x) Y(y)$.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Separation of Variables Mechanism

Assume $u(x,y) = X(x) Y(y)$. Substitute into $u_{xx} + u_{yy} = 0$:

$$X''(x) Y(y) + X(x) Y''(y) = 0 \implies \frac{X''(x)}{X(x)} = -\frac{Y''(y)}{Y(y)} = -\lambda$$
where $-\lambda$ is the universal **Separation Constant**.

### 2. 1D Sturm-Liouville Eigenvalue Problems


  - Spatial ODE in $x$: $X''(x) + \lambda X(x) = 0$ with $X(0) = 0, X(L) = 0$.
  $$\lambda_n = \left(\frac{n\pi}{L}\right)^2, \quad X_n(x) = \sin\left(\frac{n\pi x}{L}\right) \quad (n = 1, 2, 3, \dots)$$
  - Spatial ODE in $y$: $Y''(y) - \lambda_n Y(y) = 0$ with $Y(0) = 0$.
  $$Y_n(y) = \sinh\left(\frac{n\pi y}{L}\right)$$
  - Superposition: $u(x,y) = \sum_{n=1}^\infty A_n \sin\left(\frac{n\pi x}{L}\right) \sinh\left(\frac{n\pi y}{L}\right)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Plate Problem: Steady-State Temperature on a Square Sheet
**Problem Statement**:
> Solve $\nabla^2 u = 0$ on the square domain $0 < x < \pi, 0 < y < \pi$ subject to zero temperature on three edges: $u(0,y) = 0, u(\pi,y) = 0, u(x,0) = 0$, and top temperature $u(x,\pi) = 100$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Identify Eigen-Coordinate Axis**:
  The homogeneous (zero) boundary conditions occur in $x$ at $x=0$ and $x=\pi$. Thus $X(x)$ must be sinusoidal: $X_n(x) = \sin(n x)$ with eigenvalues $\lambda_n = n^2$ ($n = 1, 2, \dots$).

* **Step 2: Solve for $Y_n(y)$ along Non-Homogeneous Axis**:
  $Y''(y) - n^2 Y(y) = 0 \implies Y(y) = a_n \cosh(n y) + b_n \sinh(n y)$. Enforce bottom condition $u(x,0) = 0 \implies Y(0) = a_n = 0$. Thus $Y_n(y) = \sinh(n y)$.

* **Step 3: Superposition of Normal Modes**:
  $u(x,y) = \sum_{n=1}^\infty c_n \sin(n x) \sinh(n y)$.

* **Step 4: Enforce Top Non-Homogeneous Boundary $u(x,\pi) = 100$**:
  $u(x,\pi) = \sum_{n=1}^\infty [c_n \sinh(n\pi)] \sin(n x) = 100$.

* **Step 5: Compute Fourier Sine Coefficients**:
  $c_n \sinh(n\pi) = \frac{2}{\pi}\int_0^\pi 100 \sin(nx) dx = \frac{200}{\pi} \left[\frac{1 - (-1)^n}{n}\right]$. For even $n$, the integral is 0. For odd $n = 1, 3, 5, \dots$: $c_n \sinh(n\pi) = \frac{400}{n\pi} \implies c_n = \frac{400}{n\pi \sinh(n\pi)}$.

* **Step 6: Write Final Fourier Series**:
  $u(x,y) = \frac{400}{\pi} \sum_{n=1,3,5,\dots}^\infty \frac{1}{n \sinh(n\pi)} \sin(n x) \sinh(n y)$.

> [!WARNING]
> **Common Exam Pitfall**: Always place the oscillating sinusoidal solutions on the coordinate axis that has TWO zero boundary conditions. Placing sines on the axis with the non-zero boundary will destroy the solution.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Laplace’s Equation: Separation of Variables](https://www.youtube.com/watch?v=8jOqXM8OFh8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=20)
- **Exam Takeaway**: Separation of variables converts 2D Laplace equations into 1D Sturm-Liouville problems solved by Fourier orthogonal expansion.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
