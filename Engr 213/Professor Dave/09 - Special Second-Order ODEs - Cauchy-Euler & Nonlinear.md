# Lesson 09: Special Second-Order ODEs - Cauchy-Euler & Nonlinear
### Professor Dave Explains Differential Equations Master Series · Lesson 9
> * **Direct Video Link**: [Special Second-Order Differential Equations: Cauchy-Euler, Nonlinear, and More](https://www.youtube.com/watch?v=fsjcKgXcTVg&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=9)
> * **Target Exam Scope**: Midterm 2 Scope · Chapter 3.6
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that when coefficients are not constant but scale powers of $x$ alongside derivatives ($a x^2 y'' + b x y' + c y = 0$), the equation possesses a beautiful dilation invariance called the Cauchy-Euler equidimensional form. Instead of the exponential ansatz $e^{rx}$, we test power functions $y = x^m$. Additionally, Dave covers reduction of order: when an equation is missing the dependent variable $y$, substitute $v = y'$ to drop the order from two to one!

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Cauchy-Euler Equidimensional Equations

$$a x^2 \frac{d^2 y}{dx^2} + b x \frac{dy}{dx} + c y = 0 \quad (x > 0)$$
Testing $y = x^m \implies y' = m x^{m-1}, y'' = m(m-1)x^{m-2}$ produces the **Cauchy-Euler Auxiliary Equation**:

$$a m(m-1) + b m + c = a m^2 + (b - a)m + c = 0$$

  - **Distinct Real Roots $m_1 
eq m_2$**: $y(x) = c_1 x^{m_1} + c_2 x^{m_2}$
  - **Repeated Real Root $m_1 = m_2 = m$**: $y(x) = c_1 x^m + c_2 x^m \ln x$
  - **Complex Conjugates $\alpha \pm i\beta$**: $y(x) = x^\alpha\left(c_1 \cos(\beta \ln x) + c_2 \sin(\beta \ln x)\right)$

### 2. Reduction of Order for Missing Dependent Variable

If $F(x, y', y'') = 0$ (no explicit $y$), substitute $v = y' \implies v' = y''$. This reduces the ODE to a 1st-order equation in $v(x)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia Exam Classic: Cauchy-Euler Auxiliary Equation Trap
**Problem Statement**:
> Solve the Cauchy-Euler differential equation $x^2 y'' + 5x y' + 4y = 0$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Derive Auxiliary Equation with $m(m-1)$ Factor**:
  $1 \cdot m(m-1) + 5m + 4 = 0 \implies m^2 - m + 5m + 4 = 0 \implies m^2 + 4m + 4 = 0$.

* **Step 2: Factor and Identify Root Multiplicity**:
  $(m + 2)^2 = 0 \implies m_1 = m_2 = -2$ (repeated real root).

* **Step 3: Construct Linearly Independent Fundamental Solution Set**:
  First solution: $y_1(x) = x^{-2}$. Second solution by reduction of order / dilation symmetry: $y_2(x) = x^{-2} \ln x$.

* **Step 4: Assemble General Solution**:
  $y(x) = c_1 x^{-2} + c_2 x^{-2} \ln x = \frac{c_1 + c_2 \ln x}{x^2}$ for $x > 0$.

> [!WARNING]
> **Common Exam Pitfall**: Dropping the $-m$ term from $m(m-1)$ (writing $m^2 + 5m + 4 = 0$ instead of $m^2 + 4m + 4 = 0$) is the single most pervasive Cauchy-Euler mistake in ENGR 213 exams!

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Special Second-Order Differential Equations: Cauchy-Euler, Nonlinear, and More](https://www.youtube.com/watch?v=fsjcKgXcTVg&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=9)
- **Exam Takeaway**: Always write $a m(m-1) + b m + c = 0$. In repeated roots, multiply by $\ln x$, not by $x$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
