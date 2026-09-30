# Chapter 01: Introduction to Differential Equations & Initial-Value Problems
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Dennis G. Zill (7th Ed., Chapter 1)

---

## 1. Executive Summary & First-Principles Philosophy
In engineering, physical laws rarely tell us directly what a quantity is; instead, they tell us **how that quantity changes**. Newton's second law ($F = m a = m \frac{d^2x}{dt^2}$), Fourier's law of heat conduction, and Kirchhoff's circuit laws are all equations relating an unknown function to its derivatives. A **Differential Equation (DE)** is simply an equation containing the derivatives of one or more unknown functions.

Solving a differential equation means working backwards: given the rates of change and geometrical constraints, discover the underlying function $y(x)$ that generated them.

---

## 2. Core Mechanics & Mathematical Engine

### A. Classification by Type, Order, and Linearity
Every differential equation in ENGR 213 must be classified across three fundamental axes:

1. **Type**:
   * **Ordinary Differential Equation (ODE)**: Contains only ordinary derivatives of one or more unknown functions with respect to a **single independent variable** (e.g., $\frac{dy}{dx} + 5y = e^x$).
   * **Partial Differential Equation (PDE)**: Involves partial derivatives of an unknown function with respect to **two or more independent variables** (e.g., $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$).

2. **Order**:
   * The order of a differential equation is the order of the **highest derivative** present in the equation.
   * *Example*: $\frac{d^2y}{dx^2} + 5\left(\frac{dy}{dx}\right)^3 - 4y = 0$ is **Second-Order** (because the highest derivative is $y''$, even though the first derivative is cubed).

3. **Linearity**:
   * An $n$-th order ODE is **linear** if it can be written in the form:
     $$a_n(x)\frac{d^ny}{dx^n} + a_{n-1}(x)\frac{d^{n-1}y}{dx^{n-1}} + \dots + a_1(x)\frac{dy}{dx} + a_0(x)y = g(x)$$
   * **Two Essential Non-Linearity Traps**:
     1. The dependent variable $y$ and all its derivatives $y', y'', \dots$ appear strictly to the **first power** (no $y^2, (y')^3, \sqrt{y}$).
     2. No nonlinear functions of the dependent variable exist (no $\sin(y), e^y, \ln(y)$) and no cross-products (no $y \cdot y'$).

### B. Initial-Value Problems & The Picard-Lindelöf Theorem
An **Initial-Value Problem (IVP)** seeks a solution $y(x)$ to an ODE subject to side conditions specified at a **single point** $x_0$:
$$y' = f(x, y), \quad y(x_0) = y_0$$

> **Theorem 1.2.1 (Existence and Uniqueness of a Unique Solution)**:
> Let $R$ be a rectangular region in the $xy$-plane defined by $a \le x \le b$, $c \le y \le d$ that contains the point $(x_0, y_0)$ in its interior. If both:
> 1. $f(x, y)$ is **continuous** on $R$, and
> 2. $\frac{\partial f}{\partial y}$ is **continuous** on $R$,
> 
> then there exists some open interval $I_0: (x_0 - h, x_0 + h)$ contained in $[a, b]$, and a **unique function** $y(x)$ defined on $I_0$ that solves the IVP.

---

## 3. Curriculum-Grounded Visual Reference

![Figure 2.1.1: Lineal element tangent to solution curve](./images/zill_fig_2_1_1_lineal_element.png)
*Figure 1.1: Lineal element indicating slope at point $(x, y)$ — from Zill 7th Ed. Chapter 2 (Fig. 2.1.1).*

### Deep Pedagogical Breakdown:
1. At any coordinate point $(x_0, y_0)$, the differential equation $\frac{dy}{dx} = f(x, y)$ assigns a numerical slope $m = f(x_0, y_0)$.
2. We represent this geometrically as a tiny line segment (lineal element) passing through $(x_0, y_0)$ with slope $m$.
3. Any valid solution curve $y(x)$ must pass through the field such that its tangent line at every point coincides exactly with the direction of the lineal element.

---

## 4. Fully Worked Exam Archetype

**Problem**: Determine whether Theorem 1.2.1 guarantees a unique solution for the IVP:
$$\frac{dy}{dx} = y^{1/3}, \quad y(0) = 0$$

### Step-by-Step Solution:
* **Step 1: Check continuity of $f(x, y)$**:
  $$f(x, y) = y^{1/3}$$
  $f(x, y)$ is continuous for all $(x, y) \in \mathbb{R}^2$, including at $(0, 0)$. Existence of a solution is guaranteed!
* **Step 2: Check continuity of $\frac{\partial f}{\partial y}$**:
  $$\frac{\partial f}{\partial y} = \frac{1}{3}y^{-2/3} = \frac{1}{3y^{2/3}}$$
  At the initial condition point $(0, 0)$, $y = 0$, so $\frac{\partial f}{\partial y}$ is **undefined** (division by zero) and discontinuous!
* **Step 3: Conclusion & Physical Consequence**:
  Uniqueness is **NOT guaranteed**. Indeed, separating variables gives:
  $$\int y^{-1/3}dy = \int dx \implies \frac{3}{2}y^{2/3} = x + C$$
  With $y(0) = 0$, we find $C = 0 \implies y(x) = \left(\frac{2}{3}x\right)^{3/2}$.
  Notice that $y(x) = 0$ is also an obvious valid solution satisfying $y(0) = 0$. Thus, there are infinitely many solutions passing through $(0, 0)$!

---

## 5. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Confusing Order and Degree**: $\left(\frac{dy}{dx}\right)^4 + y = 0$ is **First-Order**, degree 4. The order is determined solely by the number of tick marks / derivative order, not exponents.
* ⚠️ **Trap 2: Overlooking Explicit vs Implicit Solutions**: An equation $G(x, y) = 0$ is an implicit solution if it defines one or more explicit solutions without explicitly isolating $y$. On exams, always check whether the professor asks for an explicit solution ($y = \dots$) or accepts an implicit relation.
