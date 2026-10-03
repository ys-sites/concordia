# Lesson 14: Systems of Differential Equations - Matrices & Stability
### Professor Dave Explains Differential Equations Master Series · Lesson 14
> * **Direct Video Link**: [Systems of Differential Equations Part 2: Matrices and Stability](https://www.youtube.com/watch?v=LrzyMJ8CS1g&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=14)
> * **Target Exam Scope**: Final Exam Scope · Chapter 10.3 & 10.4
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that matrix algebra is the native language of multivariable calculus. By packaging states into a vector $\mathbf{x}(t)$ and interaction rates into a matrix $\mathbf{A}$, the system becomes $\mathbf{x}' = \mathbf{A}\mathbf{x}$. The eigenvalues $\lambda$ represent the natural frequencies or growth rates of the system, while the eigenvectors $\mathbf{v}$ define the invariant directional axes of phase space. The trace and determinant of $\mathbf{A}$ instantly classify whether the origin is a stable sink, unstable source, or twisting spiral.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Matrix Eigensystem Formulation

$$\mathbf{x}' = \mathbf{A}\mathbf{x}, \quad \det(\mathbf{A} - \lambda \mathbf{I}) = \lambda^2 - \tau \lambda + \Delta = 0$$
where $\tau = \text{tr}(\mathbf{A}) = \lambda_1 + \lambda_2$ and $\Delta = \det(\mathbf{A}) = \lambda_1 \lambda_2$. General solution: $\mathbf{x}(t) = c_1 e^{\lambda_1 t} \mathbf{v}_1 + c_2 e^{\lambda_2 t} \mathbf{v}_2$.

### 2. Phase Plane Critical Point Classification


  | Eigenvalue Spectrum | Critical Point Type | Stability Regime 

  | $\lambda_1 < \lambda_2 < 0$ (Both Real Negative) | Nodal Sink | Asymptotically Stable 

  | $\lambda_1 > \lambda_2 > 0$ (Both Real Positive) | Nodal Source | Unstable 

  | $\lambda_1 < 0 < \lambda_2$ (Opposite Signs, $\Delta < 0$) | Saddle Point | Unstable (Hyperbolic) 

  | $\alpha \pm i\beta$ with $\alpha < 0$ | Spiral Sink | Asymptotically Stable 

  | $\alpha \pm i\beta$ with $\alpha > 0$ | Spiral Source | Unstable 

  | $\pm i\beta$ (Pure Imaginary, $\tau = 0, \Delta > 0$) | Center (Elliptic orbits) | Neutrally Stable

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Exam Problem: Complete Eigen-Decomposition and Phase Portrait Analysis
**Problem Statement**:
> Solve $\mathbf{x}' = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix} \mathbf{x}$, identify eigenvalues and eigenvectors, and classify the stability of the origin.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Compute Characteristic Polynomial**:
  $\tau = 1 + 2 = 3$. $\Delta = (1)(2) - (2)(3) = 2 - 6 = -4$. $\det(\mathbf{A} - \lambda \mathbf{I}) = \lambda^2 - 3\lambda - 4 = (\lambda - 4)(\lambda + 1) = 0$.

* **Step 2: Find Eigenvalues**:
  $\lambda_1 = 4, \quad \lambda_2 = -1$.

* **Step 3: Compute Eigenvectors**:
  For $\lambda_1 = 4$: $(\mathbf{A} - 4\mathbf{I})\mathbf{v}_1 = \begin{pmatrix} -3 & 2 \\ 3 & -2 \end{pmatrix}\mathbf{v}_1 = 0 \implies -3v_x + 2v_y = 0 \implies \mathbf{v}_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$. For $\lambda_2 = -1$: $(\mathbf{A} + \mathbf{I})\mathbf{v}_2 = \begin{pmatrix} 2 & 2 \\ 3 & 3 \end{pmatrix}\mathbf{v}_2 = 0 \implies v_x + v_y = 0 \implies \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

* **Step 4: Formulate General Vector Trajectory**:
  $\mathbf{x}(t) = c_1 e^{4t} \begin{pmatrix} 2 \\ 3 \end{pmatrix} + c_2 e^{-t} \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

* **Step 5: Stability Classification**:
  Since $\lambda_2 = -1 < 0 < \lambda_1 = 4$ (determinant $\Delta = -4 < 0$), the origin $(0,0)$ is a **Saddle Point**. It is unstable; trajectories approach along the stable axis $\mathbf{v}_2$ and diverge along the unstable axis $\mathbf{v}_1$.

> [!WARNING]
> **Common Exam Pitfall**: If determinant $\Delta < 0$, the origin is AUTOMATICALLY an unstable saddle point! You do not even need to calculate the trace to confirm instability.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Systems of Differential Equations Part 2: Matrices and Stability](https://www.youtube.com/watch?v=LrzyMJ8CS1g&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=14)
- **Exam Takeaway**: Eigenvalues dictate trajectory growth/decay rates; eigenvectors dictate the straight-line axes of phase space.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
