# Lesson 23: The Wave Equation - Vibrations in 1D
### Professor Dave Explains Differential Equations Master Series · Lesson 23
> * **Direct Video Link**: [The Wave Equation Part 1: Vibrations in 1D](https://www.youtube.com/watch?v=ETowl5rNz40&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=23)
> * **Target Exam Scope**: Advanced Hyperbolic PDE Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that the Wave Equation $u_{tt} = c^2 u_{xx}$ is the defining law of sound, string instruments, seismic waves, and light. When you pluck a guitar string, tension pulls each curved segment back toward equilibrium: curvature $u_{xx}$ creates an accelerating force $u_{tt}$ with propagation speed $c = \sqrt{T/ho}$. Jean le Rond d'Alembert discovered that every disturbance splits into two counter-propagating traveling waves $f(x - ct) + g(x + ct)$, while separation of variables reveals musical standing harmonics.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The 1D Wave Equation Formulation

$$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}, \quad c = \sqrt{\frac{T}{\rho}}$$
Boundary conditions: $u(0,t) = 0, u(L,t) = 0$. Initial conditions: $u(x,0) = f(x), u_t(x,0) = g(x)$.

### 2. Standing Normal Modes of Vibration

$$u(x,t) = \sum_{n=1}^\infty \left[ A_n \cos\left(\frac{n\pi c t}{L}\right) + B_n \sin\left(\frac{n\pi c t}{L}\right) \right] \sin\left(\frac{n\pi x}{L}\right)$$
Natural angular frequencies: $\omega_n = \frac{n\pi c}{L}$. Fundamental frequency: $f_1 = \frac{c}{2L}$.

### 3. d'Alembert's Traveling Wave Formula

$$u(x,t) = \frac{1}{2}[f(x - ct) + f(x + ct)] + \frac{1}{2c} \int_{x - ct}^{x + ct} g(s) ds$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Vibrations Problem: Plucked Guitar String Released from Rest
**Problem Statement**:
> A string of length $L = 1$ with propagation speed $c = 2$ is plucked into an initial triangle shape $f(x) = \begin{cases} 2x, & 0 \le x \le 1/2 \\ 2(1-x), & 1/2 \le x \le 1 \end{cases}$ and released from rest ($g(x) = 0$). Determine the normal mode coefficients.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Evaluate Velocity Condition**:
  Since released from rest: $g(x) = 0 \implies B_n = 0$ for all $n$.

* **Step 2: Formulate Modal Expansion**:
  $u(x,t) = \sum_{n=1}^\infty A_n \cos(2n\pi t) \sin(n\pi x)$.

* **Step 3: Integrate Fourier Coefficient $A_n$**:
  $A_n = 2\int_0^1 f(x) \sin(n\pi x) dx = 2\left[\int_0^{1/2} 2x \sin(n\pi x)dx + \int_{1/2}^1 2(1-x)\sin(n\pi x)dx\right]$.

* **Step 4: Execute Integration by Parts**:
  Evaluating the integrals yields: $A_n = \frac{8}{n^2 \pi^2} \sin\left(\frac{n\pi}{2}\right)$.

* **Step 5: Parity Analysis of Normal Modes**:
  For even $n = 2, 4, 6$: $\sin(n\pi/2) = 0 \implies A_n = 0$ (no even harmonics excited!). For odd $n$: $A_1 = \frac{8}{\pi^2}$, $A_3 = -\frac{8}{9\pi^2}$, $A_5 = \frac{8}{25\pi^2}$.

* **Step 6: Assemble Full Modal Motion**:
  $u(x,t) = \frac{8}{\pi^2}\left(\cos(2\pi t)\sin(\pi x) - \frac{1}{9}\cos(6\pi t)\sin(3\pi x) + \frac{1}{25}\cos(10\pi t)\sin(5\pi x) - \dots\right)$.

> [!WARNING]
> **Common Exam Pitfall**: When evaluating $A_n$, remember that plucking at the exact midpoint $x = 1/2$ creates perfect symmetry, causing all even harmonics (octaves) to cancel out completely.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [The Wave Equation Part 1: Vibrations in 1D](https://www.youtube.com/watch?v=ETowl5rNz40&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=23)
- **Exam Takeaway**: The wave equation conserves mechanical energy indefinitely ($u_{tt} = c^2 u_{xx}$). Standing waves are linear superpositions of counter-propagating traveling waves.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
