# Lesson 26: The Diffusion Equation - Dimensional Analysis & Self-Similarity
### Professor Dave Explains Differential Equations Master Series · Lesson 26
> * **Direct Video Link**: [The Diffusion Equation Part 2: Dimensional Analysis and Self-Similarity](https://www.youtube.com/watch?v=mMVjgURyiB0&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=26)
> * **Target Exam Scope**: Advanced Materials Science & Transport Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that on an infinite line ($-\infty < x < \infty$), there is no physical length scale $L$. Without an $L$, Fourier separation of variables breaks down! How can we solve it? Through Dimensional Analysis! Thermal diffusivity $lpha^2$ has units $\text{m}^2/\text{s}$. To combine position $x$ [m] and time $t$ [s] into a dimensionless variable, nature demands the Similarity Variable $\eta = x / \sqrt{4lpha^2 t}$. This remarkable transformation collapses the 2D partial differential equation into a single 1D ordinary differential equation, giving birth to the Error Function $\text{erf}(z)$.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Similarity Transformation Engine

For $u_t = D u_{xx}$ on a semi-infinite rod ($x > 0$), let:

$$\eta = \frac{x}{\sqrt{4Dt}}, \quad u(x,t) = f(\eta)$$
By the chain rule: $\frac{\partial u}{\partial t} = -\frac{\eta}{2t} f'(\eta)$ and $\frac{\partial^2 u}{\partial x^2} = \frac{1}{4Dt} f''(\eta)$. Substituting collapses the PDE into the ODE:

$$f''(\eta) + 2\eta f'(\eta) = 0$$
### 2. Integration to the Error Function

$$\frac{f''}{f'} = -2\eta \implies \ln(f') = -\eta^2 + C_1 \implies f'(\eta) = A e^{-\eta^2}$$
$$f(\eta) = A \int_0^\eta e^{-s^2} ds + B$$
**The Gauss Error Function**: $\text{erf}(z) = \frac{2}{\sqrt{\pi}} \int_0^z e^{-s^2} ds, \quad \text{erfc}(z) = 1 - \text{erf}(z)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Materials Science Connection: Carbon Carburization in Steel (Callister Eq 5.5)
**Problem Statement**:
> Solve $u_t = D u_{xx}$ for $x > 0, t > 0$ subject to initial concentration $u(x,0) = C_0$ and constant surface boundary concentration $u(0,t) = C_s$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Formulate Boundary Conditions in Similarity Variable $\eta$**:
  At $x = 0$: $\eta = 0 \implies f(0) = C_s$. As $x \to \infty$ (or $t \to 0$): $\eta \to \infty \implies f(\infty) = C_0$.

* **Step 2: Apply General Error Function Solution**:
  $f(\eta) = A \int_0^\eta e^{-s^2} ds + B$. At $\eta = 0$: $f(0) = 0 + B = C_s \implies B = C_s$.

* **Step 3: Enforce Far-Field Asymptotic Condition**:
  As $\eta \to \infty$: $f(\infty) = A \int_0^\infty e^{-s^2} ds + C_s = A \frac{\sqrt{\pi}}{2} + C_s = C_0 \implies A = \frac{2(C_0 - C_s)}{\sqrt{\pi}}$.

* **Step 4: Substitute and Group into Error Function**:
  $u(x,t) = \frac{2(C_0 - C_s)}{\sqrt{\pi}} \int_0^\eta e^{-s^2} ds + C_s = (C_0 - C_s)\text{erf}(\eta) + C_s = C_s - (C_s - C_0)\text{erf}(\eta)$.

* **Step 5: Canonical Engineering Form**:
  $\frac{u(x,t) - C_0}{C_s - C_0} = 1 - \text{erf}\left(\frac{x}{\sqrt{4Dt}}\right) = \text{erfc}\left(\frac{x}{\sqrt{4Dt}}\right)$. Exactly Callister Equation 5.5 in materials science for case-hardening of gears!

> [!WARNING]
> **Common Exam Pitfall**: Remember that $\text{erf}(0) = 0$ and $\text{erf}(\infty) = 1$. Mixing up the limits or failing to normalize by $2/\sqrt{\pi}$ causes amplitude scaling errors.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [The Diffusion Equation Part 2: Dimensional Analysis and Self-Similarity](https://www.youtube.com/watch?v=mMVjgURyiB0&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=26)
- **Exam Takeaway**: Dimensional analysis collapses infinite-domain diffusion into $\eta = x/\sqrt{4Dt}$, yielding the universal Error Function $\text{erfc}(\eta)$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
