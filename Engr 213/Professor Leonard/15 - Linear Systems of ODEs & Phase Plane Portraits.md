# Topic 15: Linear Systems of ODEs & Phase Plane Portraits
### Professor Leonard Master Series
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Coupled Dynamics in the Phase Plane
Professor Leonard explains the matrix formulation of differential equations:
> *"When multiple physical quantities interact (like two connected springs or predators and prey), you don't have just one derivative—you have a coupled vector system $\mathbf{x}' = \mathbf{A} \mathbf{x}$. The eigenvalues $\lambda$ of matrix $\mathbf{A}$ are the growth/oscillation rates, and the eigenvectors $\mathbf{v}$ are the invariant directions in space! Solutions march along these straight-line eigen-tracks!"*

$$\det(\mathbf{A} - \lambda \mathbf{I}) = 0$$
$$\mathbf{x}(t) = c_1 e^{\lambda_1 t} \mathbf{v}_1 + c_2 e^{\lambda_2 t} \mathbf{v}_2$$

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 15.1: Real Distinct Eigenvalues & Saddle Point
**Statement**: Solve the system $\mathbf{x}' = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}\mathbf{x}$. Classify the equilibrium at the origin.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Characteristic Equation $\det(\mathbf{A} - \lambda \mathbf{I}) = 0$**:
  $$\begin{vmatrix} 1 - \lambda & 2 \\ 3 & 2 - \lambda \end{vmatrix} = (1 - \lambda)(2 - \lambda) - 6 = \lambda^2 - 3\lambda - 4 = 0$$
  $$(\lambda - 4)(\lambda + 1) = 0 \implies \lambda_1 = 4, \quad \lambda_2 = -1$$
* **Step 2: Find Eigenvector for $\lambda_1 = 4$**:
  $$(\mathbf{A} - 4\mathbf{I})\mathbf{v}_1 = \begin{pmatrix} -3 & 2 \\ 3 & -2 \end{pmatrix}\begin{pmatrix} v_{11} \\ v_{12} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$
  $$-3 v_{11} + 2 v_{12} = 0 \implies 2 v_{12} = 3 v_{11} \implies \mathbf{v}_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$
* **Step 3: Find Eigenvector for $\lambda_2 = -1$**:
  $$(\mathbf{A} - (-1)\mathbf{I})\mathbf{v}_2 = \begin{pmatrix} 2 & 2 \\ 3 & 3 \end{pmatrix}\begin{pmatrix} v_{21} \\ v_{22} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$
  $$2 v_{21} + 2 v_{22} = 0 \implies v_{22} = -v_{21} \implies \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$
* **Step 4: General Solution Vector**:
  $$\mathbf{x}(t) = c_1 e^{4t} \begin{pmatrix} 2 \\ 3 \end{pmatrix} + c_2 e^{-t} \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$
* **Step 5: Phase Portrait Classification**:
  - $\lambda_1 = +4 > 0$: Unstable direction along line $y = \frac{3}{2}x$.
  - $\lambda_2 = -1 < 0$: Stable direction along line $y = -x$.
  Opposite signs $\implies$ **SADDLE POINT (Unstable)**.

---

### Problem 15.2: Complex Conjugate Eigenvalues & Spiral Sink
**Statement**: Solve $\mathbf{x}' = \begin{pmatrix} -1 & -4 \\ 1 & -1 \end{pmatrix}\mathbf{x}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Characteristic Equation**:
  $$\det(\mathbf{A} - \lambda \mathbf{I}) = (-1 - \lambda)^2 - (-4) = (\lambda + 1)^2 + 4 = 0 \implies \lambda = -1 \pm 2i$$
* **Step 2: Stability**:
  Real part $\text{Re}(\lambda) = -1 < 0 \implies$ amplitudes decay exponentially $e^{-t}$.
  Imaginary part $\text{Im}(\lambda) = 2 \implies$ rotates with period $\pi$.
  **SPIRAL SINK (Asymptotically Stable Attractor)**.

---

### Problem 15.3: Converting 2nd-Order ODE to a First-Order System
**Statement**: Convert $y'' + 4y' + 3y = 0$ into a $2 \times 2$ first-order linear system.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Define state variables**:
  Let $x_1 = y$ and $x_2 = y'$.
* **Step 2: Differentiate state variables**:
  $$x_1' = y' = x_2$$
  $$x_2' = y'' = -3y - 4y' = -3x_1 - 4x_2$$
* **Step 3: Matrix form**:
  $$\begin{pmatrix} x_1' \\ x_2' \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -3 & -4 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Saddle Point Stability**: A saddle point is NEVER stable. Even though one direction decays ($e^{-t} \to 0$), almost all trajectories eventually get pulled into the expanding $e^{4t}$ mode.
- **Trap 2: Eigenvector Free Parameter**: If $-3v_1 + 2v_2 = 0$, you can choose $v_1 = 2, v_2 = 3$. Any non-zero multiple works!
