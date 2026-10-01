# Lesson 02: Introduction to Differential Equations (Classification, Order & Linearity)
### Professor Leonard Differential Equations Master Series · Lesson 2
> * **Direct Video Link**: [Lesson 02: Introduction to Differential Equations (Classification, Order & Linearity)](https://www.youtube.com/watch?v=EWVSxND_iWA) · Duration: `9:56`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.1 — Definitions & Terminology)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this foundational lesson, Professor Leonard breaks down the universal classification system for differential equations. To successfully choose an integration technique on an exam, you must first immediately diagnose three critical attributes: the type (ODE vs. PDE), the order (highest derivative present), and whether the equation is strictly linear or nonlinear.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### 1. Classification by Type: ODE vs. PDE
- **Ordinary Differential Equation (ODE)**: Involves derivatives with respect to **only one** independent variable:
  $$\frac{d^2 y}{dx^2} + 5\frac{dy}{dx} + 6y = 0 \quad (x \text{ is the sole independent variable})$$
- **Partial Differential Equation (PDE)**: Involves partial derivatives of an unknown function with respect to **two or more** independent variables:
  $$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad (x \text{ and } y \text{ are independent spatial variables})$$

### 2. Classification by Order
The **order** of a differential equation is the order of the **highest derivative** appearing anywhere in the equation.
- **First-Order**: $\frac{dy}{dx} + P(x)y = Q(x)$
- **Second-Order**: $y'' + 4y' + 9y = 0$
- **Third-Order**: $y''' + x(y')^4 = \sin x$ (Note: the power 4 is the *degree*, not the order!)

### 3. Classification by Linearity
An $n$-th order ODE is **linear** if it can be written strictly in the form:
$$a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x)$$

**The Professor Leonard Linearity Rules**:
1. The dependent variable $y$ and every one of its derivatives ($y', y'', \dots, y^{(n)}$) must appear strictly to the **first power** ($y^1$).
2. The coefficients $a_i(x)$ and the forcing function $g(x)$ must depend **only on the independent variable $x$** (or be constant).
3. **No nonlinear transcendental functions of the dependent variable**: Expressions such as $\sin(y)$, $e^y$, $\ln(y)$, or $\sqrt{y}$ immediately make the equation nonlinear!
4. **No cross-multiplication of derivatives**: Terms like $y \cdot y'$, $y' \cdot y''$, or $(y')^2$ immediately destroy linearity!

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 02.1: Chalkboard Problem 2.1: Full Classification Battery (Order, Linearity & Type)
**Problem Statement**:
> Classify each of the following differential equations by type (ODE/PDE), order, and linearity. If nonlinear, explicitly identify every offending term:\n1. $y'' + 5y' + 6y = e^x$\n2. $t^2 \frac{d^2 y}{dt^2} + t \frac{dy}{dt} + (t^2 - n^2)y = 0$\n3. $\frac{d^3 y}{dx^3} + y \frac{dy}{dx} = \cos x$\n4. $\frac{d^2 y}{dx^2} + \sqrt{1 + \left(\frac{dy}{dx}\right)^2} = 0$\n5. $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$

**Step-by-Step Whiteboard Solution**:
* **Equation 1: $y'' + 5y' + 6y = e^x$**:
  - Type: **ODE** (single independent variable $x$).
  - Order: **2nd Order** (highest derivative is $y''$).
  - Linearity: **Linear** (dependent variable $y$, $y'$, $y''$ appear to degree 1 with constant coefficients).

* **Equation 2: $t^2 \frac{d^2 y}{dt^2} + t \frac{dy}{dt} + (t^2 - n^2)y = 0$ (Bessel's Equation)**:
  - Type: **ODE** (single independent variable $t$).
  - Order: **2nd Order** (highest derivative is $d^2y/dt^2$).
  - Linearity: **Linear** (the coefficients $t^2$, $t$, and $(t^2 - n^2)$ depend solely on independent variable $t$; $y, y', y''$ are all degree 1).

* **Equation 3: $\frac{d^3 y}{dx^3} + y \frac{dy}{dx} = \cos x$**:
  - Type: **ODE** (single independent variable $x$).
  - Order: **3rd Order** (highest derivative is $d^3y/dx^3$).
  - Linearity: **Nonlinear**!
  - *Offending Term*: The cross-product term $y \frac{dy}{dx}$ multiplies the dependent variable $y$ by its own derivative.

* **Equation 4: $\frac{d^2 y}{dx^2} + \sqrt{1 + \left(\frac{dy}{dx}\right)^2} = 0$**:
  - Type: **ODE** (single independent variable $x$).
  - Order: **2nd Order** (highest derivative is $d^2y/dx^2$).
  - Linearity: **Nonlinear**!
  - *Offending Terms*: $(dy/dx)^2$ has an exponent of 2, and the entire expression is trapped inside the nonlinear square-root function $\sqrt{\cdot}$.

* **Equation 5: $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$ (The 1D Wave Equation)**:
  - Type: **PDE** (two independent variables $t$ and $x$).
  - Order: **2nd Order** (second partial derivatives with respect to $t$ and $x$).
  - Linearity: **Linear** (dependent variable $u$ appears linearly in both partial derivatives with constant propagation speed $c^2$).

> [!WARNING]
> **Common Exam Pitfall**: Students frequently mistake the exponent of a derivative for its order. $(y')^4$ is a FIRST-ORDER term raised to the 4th degree, whereas $y^{(4)}$ is a FOURTH-ORDER derivative.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 02: Introduction to Differential Equations (Classification, Order & Linearity)](https://www.youtube.com/watch?v=EWVSxND_iWA)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
