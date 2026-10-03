# Lesson 18: Introduction to Partial Differential Equations & Differential Operators
### Professor Dave Explains Differential Equations Master Series · Lesson 18
> * **Direct Video Link**: [Introduction to Partial Differential Equations: Classification and Differential Operators](https://www.youtube.com/watch?v=4Ou2FtsD8X8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=18)
> * **Target Exam Scope**: Advanced Mathematics & PDE Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that ordinary differential equations describe point particles moving through time (0D spatial points). But the real universe consists of continuous fields: heat diffusing through an engine block, acoustic waves vibrating a concert hall, and gravitational fields warping spacetime. These require Partial Differential Equations (PDEs), which involve rates of change with respect to space and time simultaneously. Just like conic sections in geometry, second-order linear PDEs classify into Elliptic (steady state), Hyperbolic (waves), and Parabolic (diffusion).

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Second-Order Linear PDE Classification

For the general two-variable linear equation $A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$:


  | Discriminant $\Delta = B^2 - 4AC$ | Classification | Physical Prototype | Qualitative Behavior 

  | $\Delta < 0$ | **Elliptic** | Laplace's Eq: $u_{xx} + u_{yy} = 0$ | Smooth steady-state equilibrium; no real characteristics. 

  | $\Delta > 0$ | **Hyperbolic** | Wave Eq: $u_{tt} - c^2 u_{xx} = 0$ | Disturbances propagate along characteristics at finite speed $c$. 

  | $\Delta = 0$ | **Parabolic** | Heat/Diffusion Eq: $u_t - \alpha^2 u_{xx} = 0$ | Dissipative smoothing; infinite speed of propagation. 


### 2. Differential Vector Operators

$$\nabla = \left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right), \quad \nabla^2 = \Delta = \nabla \cdot \nabla = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia PDE Drill: Spatial Classification of Variable-Coefficient PDE
**Problem Statement**:
> Classify the PDE $x u_{xx} + u_{yy} = 0$ throughout the 2D Cartesian plane $\mathbb{R}^2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Identify Discriminant Coefficients**:
  $A = x, \quad B = 0, \quad C = 1$.

* **Step 2: Compute Discriminant Formula**:
  $\Delta(x,y) = B^2 - 4AC = 0^2 - 4(x)(1) = -4x$.

* **Step 3: Analyze Regions in the Cartesian Plane**:
  - For $x > 0$: $\Delta = -4x < 0 \implies$ The equation is **Elliptic** (behaves like Laplace's potential equation in the right half-plane).\n- For $x < 0$: $\Delta = -4x > 0 \implies$ The equation is **Hyperbolic** (behaves like the wave equation in the left half-plane).\n- For $x = 0$ (the $y$-axis): $\Delta = 0 \implies$ The equation is **Parabolic** (the transition boundary curve, known as the Tricomi equation in transonic aerodynamics!).

> [!WARNING]
> **Common Exam Pitfall**: The coefficients $A, B, C$ may vary across space. An equation can be elliptic in one region, parabolic on a curve, and hyperbolic elsewhere. Always evaluate the sign of $B^2 - 4AC$ as a function of coordinates.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Introduction to Partial Differential Equations: Classification and Differential Operators](https://www.youtube.com/watch?v=4Ou2FtsD8X8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=18)
- **Exam Takeaway**: $B^2 - 4AC < 0$ is Elliptic (Laplace); $B^2 - 4AC > 0$ is Hyperbolic (Wave); $B^2 - 4AC = 0$ is Parabolic (Diffusion).
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
