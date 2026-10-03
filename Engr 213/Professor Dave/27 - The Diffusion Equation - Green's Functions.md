# Lesson 27: The Diffusion Equation - Green's Functions
### Professor Dave Explains Differential Equations Master Series · Lesson 27
> * **Direct Video Link**: [The Diffusion Equation Part 3: Green’s Functions](https://www.youtube.com/watch?v=Ghobc7v1-Js&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=27)
> * **Target Exam Scope**: Advanced Theoretical Physics & Operators Scope
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave concludes the Differential Equations master series with the pinnacle of linear operator theory: Green's Functions. Imagine dropping a single concentrated microscopic speck of dye into an infinite pipe at $x = 0$ ($u(x,0) = \delta(x)$). The dye spreads out into a broadening bell-shaped Gaussian distribution called the Fundamental Solution or Heat Kernel. Because the diffusion equation is linear, ANY arbitrary initial temperature profile $f(x)$ is simply a collection of points; the solution is the continuous superposition (convolution) of heat kernels!

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Fundamental Solution (Heat Kernel)

The response of $u_t = D u_{xx}$ on $(-\infty, \infty)$ to a point impulse $u(x,0) = \delta(x)$ is the **Heat Kernel** $\Phi(x,t)$:

$$\Phi(x,t) = \frac{1}{\sqrt{4\pi D t}} \exp\left(-\frac{x^2}{4 D t}\right) \quad (t > 0)$$
Key properties: (1) Positivity $\Phi > 0$; (2) Total energy conservation $\int_{-\infty}^\infty \Phi(x,t) dx = 1$; (3) As $t \to 0^+$, $\Phi(x,t) \to \delta(x)$.

### 2. Green's Integral Representation

For an arbitrary initial Cauchy temperature distribution $u(x,0) = f(x)$:

$$u(x,t) = (\Phi * f)(x) = \int_{-\infty}^\infty \Phi(x - y, t) f(y) dy = \frac{1}{\sqrt{4\pi D t}} \int_{-\infty}^\infty \exp\left(-\frac{(x - y)^2}{4 D t}\right) f(y) dy$$
### 3. Method of Images for Semi-Infinite Domain


  - Dirichlet Boundary ($u(0,t) = 0$): Odd reflection $G(x,y,t) = \Phi(x - y, t) - \Phi(x + y, t)$.
  - Neumann Boundary ($u_x(0,t) = 0$, insulated): Even reflection $G(x,y,t) = \Phi(x - y, t) + \Phi(x + y, t)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Grand Synthesis Problem: Diffusive Dispersion of an Initial Gaussian Packet
**Problem Statement**:
> If initial temperature is already an unnormalized Gaussian $f(x) = e^{-x^2 / (4\sigma^2)}$, compute the temperature profile $u(x,t)$ at all subsequent times $t > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Set Up Green's Convolution Integral**:
  $u(x,t) = \frac{1}{\sqrt{4\pi D t}} \int_{-\infty}^\infty \exp\left(-\frac{(x - y)^2}{4 D t}\right) \exp\left(-\frac{y^2}{4\sigma^2}\right) dy$.

* **Step 2: Combine Exponents in $y$**:
  Exponent: $-\left[\frac{(y - x)^2}{4Dt} + \frac{y^2}{4\sigma^2}\right] = -\frac{1}{4}\left[ y^2\left(\frac{1}{Dt} + \frac{1}{\sigma^2}\right) - 2y\frac{x}{Dt} + \frac{x^2}{Dt} \right]$.

* **Step 3: Complete the Square in $y$**:
  Let $\frac{1}{S^2} = \frac{1}{Dt} + \frac{1}{\sigma^2} = \frac{\sigma^2 + Dt}{Dt \sigma^2} \implies S^2 = \frac{Dt \sigma^2}{\sigma^2 + Dt}$. Completing the square reveals: $-\frac{x^2}{4(\sigma^2 + Dt)}$ factors cleanly out of the integral!

* **Step 4: Evaluate Gaussian Kernel Integral**:
  $\int_{-\infty}^\infty \exp\left(-\frac{(y - y_0)^2}{4S^2}\right) dy = \sqrt{4\pi S^2} = \sqrt{\frac{4\pi D t \sigma^2}{\sigma^2 + Dt}}$.

* **Step 5: Multiply Pre-Factors and Cancel**:
  $u(x,t) = \frac{1}{\sqrt{4\pi D t}} \sqrt{\frac{4\pi D t \sigma^2}{\sigma^2 + Dt}} \exp\left(-\frac{x^2}{4(\sigma^2 + Dt)}\right) = \frac{\sigma}{\sqrt{\sigma^2 + Dt}} \exp\left(-\frac{x^2}{4(\sigma^2 + Dt)}\right)$.

* **Step 6: Physical Interpretation**:
  A Gaussian packet remains a Gaussian packet for all time! Its variance increases linearly: $\sigma^2(t) = \sigma^2 + Dt$ (broadening), while its peak amplitude drops as $\sigma / \sqrt{\sigma^2 + Dt}$ to conserve total thermal energy. The pinnacle of diffusion theory!

> [!WARNING]
> **Common Exam Pitfall**: Notice how the variance increases as $\sigma^2 + Dt$, NOT as $\sigma + Dt$. Diffusion variance scales linearly with time $t$, meaning spatial spread scales with $\sqrt{t}$.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [The Diffusion Equation Part 3: Green’s Functions](https://www.youtube.com/watch?v=Ghobc7v1-Js&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=27)
- **Exam Takeaway**: Green's function is the impulse response $\Phi(x,t)$. Any general diffusion solution is the convolution of initial conditions with this fundamental heat kernel.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
