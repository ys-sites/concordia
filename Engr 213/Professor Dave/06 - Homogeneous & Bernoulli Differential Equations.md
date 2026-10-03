# Lesson 06: Homogeneous & Bernoulli Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 6
> * **Direct Video Link**: [Homogeneous Differential Equations and Bernoulli Differential Equations](https://www.youtube.com/watch?v=o1AHVHEEChA&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=6)
> * **Target Exam Scope**: Midterm 1 Scope · Chapter 2.5
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that when standard methods fail, change the variables! In mathematics, substitution is the art of transforming an impossible problem into an easy one you already know how to solve. Homogeneous equations possess scale symmetry, allowing the radial substitution $y = vx$ to collapse them into separable equations. Bernoulli equations possess a nonlinear power term $y^n$, which can be neutralized by the substitution $u = y^{1-n}$ to convert them directly into linear first-order equations.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### Transformation Engines

**1. Homogeneous Equations of Degree $n$**:

If $M(tx, ty) = t^n M(x,y)$ and $N(tx, ty) = t^n N(x,y)$, substitute:

$$y = v x \implies \frac{dy}{dx} = v + x \frac{dv}{dx}$$
This transforms the ODE into a separable equation in $v$ and $x$.

**2. Bernoulli Equations**:

$$\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0, 1)$$
Divide by $y^n$: $y^{-n} y' + P(x)y^{1-n} = Q(x)$. Substitute $u = y^{1-n} \implies \frac{du}{dx} = (1-n)y^{-n} \frac{dy}{dx}$.

This yields the linear first-order equation in $u(x)$:

$$\frac{du}{dx} + (1-n)P(x)u = (1-n)Q(x)$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia Midterm Problem: Solving a Bernoulli Equation
**Problem Statement**:
> Solve the nonlinear differential equation $\dfrac{dy}{dx} - \dfrac{1}{x} y = x y^2$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Identify Bernoulli Form and Exponent**:
  $y' - \frac{1}{x} y = x y^2$. Here $n = 2$, $P(x) = -\frac{1}{x}$, and $Q(x) = x$.

* **Step 2: Linearizing Substitution**:
  Divide by $y^2$: $y^{-2} y' - \frac{1}{x} y^{-1} = x$. Let $u = y^{1-2} = y^{-1} \implies \frac{du}{dx} = -y^{-2} \frac{dy}{dx}$.

* **Step 3: Construct Linear Equation in $u$**:
  Multiply by $-1$: $-y^{-2} y' + \frac{1}{x} y^{-1} = -x \implies \frac{du}{dx} + \frac{1}{x} u = -x$.

* **Step 4: Solve via Integrating Factor**:
  $\mu(x) = e^{\int \frac{1}{x} dx} = e^{\ln x} = x$. Multiply across: $\frac{d}{dx}[x u] = -x^2 \implies x u = -\frac{x^3}{3} + C$.

* **Step 5: Back-Substitute $u = y^{-1}$**:
  $u(x) = -\frac{x^2}{3} + \frac{C}{x} = \frac{3C - x^3}{3x} \implies y(x) = \frac{3x}{3C - x^3}$.

> [!WARNING]
> **Common Exam Pitfall**: When computing $du/dx = (1-n)y^{-n} dy/dx$, students frequently forget the chain rule factor $(1-n)$, which introduces a disastrous sign error in the transformed ODE.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Homogeneous Differential Equations and Bernoulli Differential Equations](https://www.youtube.com/watch?v=o1AHVHEEChA&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=6)
- **Exam Takeaway**: Bernoulli equations are linearized by $u = y^{1-n}$. Homogeneous equations are separated by $y = vx$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
