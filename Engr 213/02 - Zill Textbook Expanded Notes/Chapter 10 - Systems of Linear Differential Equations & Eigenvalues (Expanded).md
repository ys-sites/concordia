# Chapter 10: Systems of Linear Differential Equations & Eigenvalues
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Dennis G. Zill (7th Ed., Chapter 10)

---

## 1. Executive Summary & First-Principles Philosophy
Physical systems rarely consist of a single isolated mass or single electrical loop. Coupled mechanical springs, multi-compartment pharmacokinetic models, and interconnected electrical networks produce **systems of coupled differential equations**.

In matrix normal form:
$$\mathbf{X}'(t) = \mathbf{A}\mathbf{X}(t)$$
Solving a linear system reduces to finding the **Eigenvalues $\lambda$ and Eigenvectors $\mathbf{v}$** of the coefficient matrix $\mathbf{A}$, transforming calculus into linear algebra!

---

## 2. Core Mechanics & Mathematical Engine

### A. Matrix Formulation
For a $2 \times 2$ system:
$$\begin{pmatrix} x_1' \\ x_2' \end{pmatrix} = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} \iff \mathbf{X}' = \mathbf{A}\mathbf{X}$$

### B. Eigenvalue Problem & Characteristic Equation
Substitute trial vector solution $\mathbf{X}(t) = \mathbf{v} e^{\lambda t}$:
$$\mathbf{A}\mathbf{v} e^{\lambda t} = \lambda \mathbf{v} e^{\lambda t} \implies (\mathbf{A} - \lambda \mathbf{I})\mathbf{v} = \mathbf{0}$$
For non-trivial solutions $\mathbf{v} \neq \mathbf{0}$:
$$\det(\mathbf{A} - \lambda \mathbf{I}) = 0$$

Three characteristic cases dictate the geometry of the phase plane:
1. **Distinct Real Eigenvalues ($\lambda_1 \neq \lambda_2$)**:
   $$\mathbf{X}(t) = c_1 \mathbf{v}_1 e^{\lambda_1 t} + c_2 \mathbf{v}_2 e^{\lambda_2 t}$$
   * Both $\lambda > 0$: **Unstable Node (Source)**
   * Both $\lambda < 0$: **Asymptotically Stable Node (Sink)**
   * Opposite signs $\lambda_1 > 0 > \lambda_2$: **Saddle Point (Always Unstable)**
2. **Complex Conjugate Eigenvalues ($\lambda = \alpha \pm i\beta$)**:
   Eigenvector $\mathbf{v}_1 = \mathbf{a} + i\mathbf{b}$. Then two real solutions are:
   $$\mathbf{X}_1 = e^{\alpha t}\left[\mathbf{a}\cos(\beta t) - \mathbf{b}\sin(\beta t)\right], \quad \mathbf{X}_2 = e^{\alpha t}\left[\mathbf{b}\cos(\beta t) + \mathbf{a}\sin(\beta t)\right]$$
   * $\alpha = 0$: **Stable Center (Elliptical Orbits)**
   * $\alpha < 0$: **Stable Spiral Sink**
   * $\alpha > 0$: **Unstable Spiral Source**
3. **Repeated Real Eigenvalues ($\lambda_1 = \lambda_2 = \lambda$)**:
   * If only one independent eigenvector exists, find generalized eigenvector $\mathbf{u}$ solving $(\mathbf{A} - \lambda \mathbf{I})\mathbf{u} = \mathbf{v}$:
     $$\mathbf{X}_2(t) = (\mathbf{v} t + \mathbf{u})e^{\lambda t}$$

---

## 3. Curriculum-Grounded Visual Reference

![Figure 10.2.2: Phase Plane Trajectories](./images/zill_fig_10_2_2_phase_portrait.png)
*Figure 10.1: Phase plane trajectories showing directional flow along eigenvector asymptotes — from Zill 7th Ed. Chapter 10 (Fig. 10.2.2).*

---

## 4. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Finding the Generalized Eigenvector**: In defective repeated eigenvalue cases, the second solution is $(\mathbf{v}t + \mathbf{u})e^{\lambda t}$, **NOT** $\mathbf{v}t e^{\lambda t}$. Forgetting $\mathbf{u}$ fails to satisfy $\mathbf{X}' = \mathbf{A}\mathbf{X}$.
* ⚠️ **Trap 2: Determinant Formula Sign**: For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, $\det(\mathbf{A} - \lambda \mathbf{I}) = \lambda^2 - \text{Tr}(\mathbf{A})\lambda + \det(\mathbf{A})$. Watch the signs of trace and determinant!
