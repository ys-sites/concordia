# Lesson 16: Laplace Transforms - Convolutions & LTI Systems
### Professor Dave Explains Differential Equations Master Series · Lesson 16
> * **Direct Video Link**: [Laplace Transforms Part 2: Convolutions and LTI Systems](https://www.youtube.com/watch?v=RecYAjxdcEg&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=16)
> * **Target Exam Scope**: Final Exam Scope · Chapter 4.4 & 4.5
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that in signal processing and control theory, multiplying two Laplace transforms in the frequency domain corresponds to a fascinating operation in the time domain called Convolution: $(f * g)(t)$. Convolution represents a 'sliding weighted memory'—how a physical system smudges or filters an incoming signal over time. Furthermore, the Dirac delta function $\delta(t)$ models sharp hammer blows or lightning strikes, allowing us to find the fundamental impulse response of any Linear Time-Invariant (LTI) system.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Convolution Theorem

$$\mathcal{L}\{(f * g)(t)\} = F(s) G(s), \quad (f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$$
Inverse property: $\mathcal{L}^{-1}\{F(s)G(s)\} = \int_0^t f(\tau) g(t - \tau) d\tau$.

### 2. Impulses, Switches & Transfer Functions


  - **Dirac Delta Function**: $\mathcal{L}\{\delta(t - t_0)\} = e^{-s t_0}$. Models an instantaneous unit impulse.
  - **Heaviside Step Function**: $\mathcal{L}\{\mathcal{U}(t - a) f(t - a)\} = e^{-a s} F(s)$. Models switches turned on at $t = a$.
  - **Transfer Function $H(s)$**: For an LTI system with zero initial conditions, $Y(s) = H(s) X(s) \implies y(t) = (h * x)(t)$, where $h(t) = \mathcal{L}^{-1}\{H(s)\}$ is the system's impulse response.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Exam Problem: Solving an IVP with a Sudden Impulse Spike
**Problem Statement**:
> Solve the oscillator $y'' + 9y = 4\delta(t - \pi)$ with $y(0) = 0, y'(0) = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Apply Laplace Transform with Impulse**:
  $(s^2 + 9)Y(s) = 4\mathcal{L}\{\delta(t - \pi)\} = 4e^{-\pi s}$.

* **Step 2: Isolate System Transfer Response**:
  $Y(s) = \frac{4e^{-\pi s}}{s^2 + 9} = \frac{4}{3} e^{-\pi s} \left(\frac{3}{s^2 + 9}\right)$.

* **Step 3: Identify Base Transform and Time Shift**:
  Base function: $\mathcal{L}^{-1}\{\frac{3}{s^2 + 9}\} = \sin(3t)$. Using the Second Translation Theorem: $\mathcal{L}^{-1}\{e^{-a s} F(s)\} = \mathcal{U}(t - a) f(t - a)$ with $a = \pi$.

* **Step 4: Compute Time-Shifted Sine**:
  $y(t) = \frac{4}{3} \mathcal{U}(t - \pi) \sin(3(t - \pi)) = \frac{4}{3} \mathcal{U}(t - \pi) \sin(3t - 3\pi)$.

* **Step 5: Simplify Trigonometric Phase**:
  Recall $\sin(\theta - 3\pi) = -\sin(\theta)$. Therefore: $y(t) = -\frac{4}{3} \mathcal{U}(t - \pi) \sin(3t)$. Before $t = \pi$, the system is completely at rest; at $t = \pi$, the hammer strikes, triggering perpetual harmonic oscillation!

> [!WARNING]
> **Common Exam Pitfall**: The shift theorem requires the argument of the function to be shifted by the EXACT same delay: $\mathcal{U}(t - a) f(t - a)$. Do not evaluate $\mathcal{U}(t - a) f(t)$ without shifting $t \to t - a$!

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Laplace Transforms Part 2: Convolutions and LTI Systems](https://www.youtube.com/watch?v=RecYAjxdcEg&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=16)
- **Exam Takeaway**: Convolution is frequency multiplication. $\delta(t-t_0)$ delivers an instantaneous kick creating response $h(t-t_0)$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
