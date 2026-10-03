# Lesson 07: Linear Second-Order ODEs - Homogeneous Case
### Professor Dave Explains Differential Equations Master Series · Lesson 7
> * **Direct Video Link**: [Linear Second-Order Differential Equations Part 1: Homogeneous Case](https://www.youtube.com/watch?v=MaZatB5UiwU&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=7)
> * **Target Exam Scope**: Midterm 2 Scope · Chapter 3.1 & 3.3
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that second-order linear differential equations are the heartbeat of engineering—they govern mass-spring-damper suspensions, RLC radio tuning circuits, and seismic building vibrations. For constant coefficients $a y'' + b y' + c y = 0$, we test the exponential ansatz $y = e^{rx}$, converting calculus into simple quadratic algebra $a r^2 + b r + c = 0$. The roots of this characteristic equation govern whether the physical system decays monotonically, critically returns to rest, or oscillates sinusoidally.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### The 3 Characteristic Root Cases


  | Case | Roots of $a r^2 + b r + c = 0$ | General Complementary Solution $y_c(x)$ | Physical Behavior 

  | **Case 1** | Distinct Real $r_1 
eq r_2$ | $y_c = c_1 e^{r_1 x} + c_2 e^{r_2 x}$ | Overdamped non-oscillatory decay 

  | **Case 2** | Repeated Real $r_1 = r_2 = r$ | $y_c = c_1 e^{r x} + c_2 x e^{r x}$ | Critically damped rapid return 

  | **Case 3** | Complex Conjugates $lpha \pm ieta$ | $y_c = e^{lpha x}\left(c_1 \cos(eta x) + c_2 \sin(eta x)ight)$ | Underdamped sinusoidal oscillation 


**The Wronskian Determinant**: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 
eq 0$ proves linear independence.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Classroom Problem: Complete Solution of an Underdamped Oscillator IVP
**Problem Statement**:
> Solve the initial value problem $y'' + 4y' + 13y = 0$, with $y(0) = 2$ and $y'(0) = 1$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Form Characteristic Auxiliary Equation**:
  $r^2 + 4r + 13 = 0$.

* **Step 2: Solve Quadratic Roots**:
  $r = \frac{-4 \pm \sqrt{16 - 52}}{2} = \frac{-4 \pm \sqrt{-36}}{2} = -2 \pm 3i$. Here $\alpha = -2$ and $\beta = 3$.

* **Step 3: Write General Solution via Euler's Formula**:
  $y(t) = e^{-2t}\left(c_1 \cos(3t) + c_2 \sin(3t)\right)$.

* **Step 4: Enforce Initial Displacement $y(0) = 2$**:
  $y(0) = e^0(c_1 \cos 0 + c_2 \sin 0) = c_1 \implies c_1 = 2$.

* **Step 5: Differentiate and Enforce Initial Velocity $y'(0) = 1$**:
  $y'(t) = -2e^{-2t}(2\cos 3t + c_2\sin 3t) + e^{-2t}(-6\sin 3t + 3c_2\cos 3t)$. At $t = 0$: $y'(0) = -2(2) + 3c_2 = -4 + 3c_2 = 1 \implies 3c_2 = 5 \implies c_2 = \frac{5}{3}$.

* **Step 6: Assemble Final Response**:
  $y(t) = e^{-2t}\left(2\cos(3t) + \frac{5}{3}\sin(3t)\right)$.

> [!WARNING]
> **Common Exam Pitfall**: When differentiating $y(t) = e^{lpha t}(c_1 \cos eta t + c_2 \sin eta t)$ to enforce velocity conditions, ALWAYS apply the Product Rule carefully. Missing the derivative of the exponential envelope is a chronic error.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Linear Second-Order Differential Equations Part 1: Homogeneous Case](https://www.youtube.com/watch?v=MaZatB5UiwU&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=7)
- **Exam Takeaway**: Complex roots $lpha \pm ieta$ yield decaying sinusoidal oscillations with envelope $e^{lpha t}$ and frequency $eta$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
