# Lesson 10: Numerical Methods for Solving Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 10
> * **Direct Video Link**: [Numerical Methods for Solving Differential Equations](https://www.youtube.com/watch?v=A1JnGhaVJsQ&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=10)
> * **Target Exam Scope**: Midterm / Final Scope · Chapter 2.6
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that in the real world of engineering and aerospace, most nonlinear differential equations have no closed-form analytical formula. When exact integration is impossible, numerical algorithms march step-by-step through the slope field. Euler's method uses a simple tangent line approximation; Heun's method averages the starting and predicted ending slopes; and the industry gold-standard RK4 computes a weighted average of four trial slopes to achieve remarkable fourth-order accuracy.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Forward Euler's Method

$$y_{n+1} = y_n + h f(x_n, y_n), \quad x_{n+1} = x_n + h$$
Local truncation error: $\mathcal{O}(h^2)$; Global cumulative error: $\mathcal{O}(h)$.

### 2. Improved Euler (Heun's Predictor-Corrector Method)


  - Predictor: $y_{n+1}^* = y_n + h f(x_n, y_n)$
  - Corrector: $y_{n+1} = y_n + \frac{h}{2}\left[f(x_n, y_n) + f(x_{n+1}, y_{n+1}^*)\right]$

### 3. Runge-Kutta 4th Order (RK4)

$$y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$
where $k_1 = f(x_n, y_n)$, $k_2 = f(x_n + \frac{h}{2}, y_n + \frac{h}{2}k_1)$, $k_3 = f(x_n + \frac{h}{2}, y_n + \frac{h}{2}k_2)$, and $k_4 = f(x_n + h, y_n + h k_3)$. Global error: $\mathcal{O}(h^4)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Exam Drill: Comparative Stepping with Euler vs Improved Euler
**Problem Statement**:
> Given $y' = x + y$ with $y(0) = 1$, compute $y(0.2)$ using a step size $h = 0.1$ via (a) Forward Euler and (b) Improved Euler (Heun). Compare against exact analytical solution $y(x) = 2e^x - x - 1$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Forward Euler Step 1 ($x_0 = 0 \to x_1 = 0.1$)**:
  $f(0, 1) = 0 + 1 = 1$. $y_1 = 1 + 0.1(1) = 1.1000$.

* **Step 2: Forward Euler Step 2 ($x_1 = 0.1 \to x_2 = 0.2$)**:
  $f(0.1, 1.1) = 0.1 + 1.1 = 1.2$. $y_2 = 1.1 + 0.1(1.2) = 1.2200$.

* **Step 3: Improved Euler Step 1 ($x_0 = 0 \to x_1 = 0.1$)**:
  Predictor: $y_1^* = 1.1$. Corrector: $y_1 = 1 + \frac{0.1}{2}[f(0,1) + f(0.1, 1.1)] = 1 + 0.05[1 + 1.2] = 1 + 0.05(2.2) = 1.1100$.

* **Step 4: Improved Euler Step 2 ($x_1 = 0.1 \to x_2 = 0.2$)**:
  $f(0.1, 1.11) = 1.21$. Predictor: $y_2^* = 1.11 + 0.1(1.21) = 1.231$. Corrector: $y_2 = 1.11 + 0.05[1.21 + (0.2 + 1.231)] = 1.11 + 0.05[2.641] = 1.2421$.

* **Step 5: Exact Comparison**:
  Exact value: $y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.22140) - 1.2 = 1.2428$. Euler error: $|1.2428 - 1.2200| = 0.0228$; Heun error: $|1.2428 - 1.2421| = 0.0007$ (over 30x more accurate!).

> [!WARNING]
> **Common Exam Pitfall**: Never evaluate the corrector step using the previous $x_n$ coordinate. Heun's corrector requires $f(x_{n+1}, y_{n+1}^*)$ evaluated at the advanced coordinate $x_{n+1} = x_n + h$.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Numerical Methods for Solving Differential Equations](https://www.youtube.com/watch?v=A1JnGhaVJsQ&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=10)
- **Exam Takeaway**: Euler is 1st-order; Heun is 2nd-order; RK4 is 4th-order. Halving $h$ in RK4 slashes global error by a factor of 16 ($2^4$).
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
