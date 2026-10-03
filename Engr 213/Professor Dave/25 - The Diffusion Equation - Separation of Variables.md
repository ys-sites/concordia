# Lesson 25: The Diffusion Equation - Separation of Variables
### Professor Dave Explains Differential Equations Master Series · Lesson 25
> * **Direct Video Link**: [The Diffusion Equation Part 1: Separation of Variables](https://www.youtube.com/watch?v=kRih2ctI3QM&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=25)
> * **Target Exam Scope**: Advanced Parabolic PDE Scope · Heat Transfer
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that while the wave equation is reversible and oscillatory ($u_{tt}$), the Diffusion (or Heat) Equation $u_t = lpha^2 u_{xx}$ is irreversible and dissipative. Heat flows from hot to cold, inexorably smoothing out sharp temperature spikes like milk diffusing into coffee. By separating variables into $u(x,t) = X(x) T(t)$, we see that higher spatial frequencies (rough, jagged gradients) decay exponentially faster in time ($\sim e^{-n^2 \pi^2 lpha^2 t / L^2}$), leaving only the smooth fundamental profile.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Heat Conduction Equation

$$\frac{\partial u}{\partial t} = \alpha^2 \frac{\partial^2 u}{\partial x^2}, \quad \alpha^2 = \frac{k}{\rho c_p} \quad \text{(Thermal Diffusivity)}$$
Boundary conditions: $u(0,t) = 0, u(L,t) = 0$. Initial profile: $u(x,0) = f(x)$.

### 2. Separation of Variables & Exponential Decay

$$u(x,t) = X(x) T(t) \implies \frac{T'(t)}{\alpha^2 T(t)} = \frac{X''(x)}{X(x)} = -\lambda$$

  - Spatial Modes: $X_n(x) = \sin\left(\frac{n\pi x}{L}\right), \quad \lambda_n = \left(\frac{n\pi}{L}\right)^2$
  - Temporal Decay: $T_n(t) = \exp\left(-\alpha^2 \lambda_n t\right) = \exp\left(-\frac{n^2 \pi^2 \alpha^2}{L^2} t\right)$
  - Full Solution: $u(x,t) = \sum_{n=1}^\infty c_n \exp\left(-\frac{n^2 \pi^2 \alpha^2}{L^2} t\right) \sin\left(\frac{n\pi x}{L}\right)$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Thermal Engineering Problem: Heat Dissipation in a Chilled Rod
**Problem Statement**:
> A metal bar of length $L = \pi$ with thermal diffusivity $\alpha^2 = 1$ has ends submerged in ice water ($u(0,t) = 0, u(\pi,t) = 0$). If initial temperature is $f(x) = 50\sin(x) - 20\sin(3x)$, find the temperature $u(x,t)$ for all $t > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Check Boundary Eigenmodes**:
  Length $L = \pi$, so $\sin(n\pi x/L) = \sin(nx)$, and decay rate is $\alpha^2 \lambda_n = (1)(n^2) = n^2$.

* **Step 2: Inspect Initial Condition for Orthogonal Harmonics**:
  $u(x,0) = 50\sin(x) - 20\sin(3x)$. Notice this is ALREADY an exact Fourier sine series! No integration required!

* **Step 3: Extract Fourier Coefficients Directly**:
  $c_1 = 50$, $c_3 = -20$, and $c_n = 0$ for all other $n$.

* **Step 4: Attach Specific Temporal Decay Factors**:
  For $n=1$: decay factor is $e^{-1^2 t} = e^{-t}$. For $n=3$: decay factor is $e^{-3^2 t} = e^{-9t}$.

* **Step 5: Assemble Complete Solution**:
  $u(x,t) = 50 e^{-t}\sin(x) - 20 e^{-9t}\sin(3x)$.

* **Step 6: Physical Dissipation Analysis**:
  The 3rd harmonic $\sin(3x)$ decays at rate $e^{-9t}$, which is $9$ times faster than the fundamental mode $e^{-t}$! For $t > 0.5$, $e^{-9(0.5)} = e^{-4.5} \approx 0.01$, so the 3rd harmonic has completely vanished, leaving only a pure smooth sine curve!

> [!WARNING]
> **Common Exam Pitfall**: Do not compute Fourier integrals $\int f(x)\sin(nx)dx$ if the initial condition is already expressed as a sum of sines. Simply read off the coefficients directly.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [The Diffusion Equation Part 1: Separation of Variables](https://www.youtube.com/watch?v=kRih2ctI3QM&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=25)
- **Exam Takeaway**: The diffusion equation acts as an exponential low-pass filter: high-frequency spatial wiggles ($n^2$) vanish almost instantly.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
