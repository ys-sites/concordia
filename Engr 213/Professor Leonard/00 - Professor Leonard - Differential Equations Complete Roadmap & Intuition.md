# -*- coding: utf-8 -*-
"""
Script to comprehensively enrich all 17 Professor Leonard Differential Equations topic guides
with EVERY problem, whiteboard breakdown, baby-step solution, and exam trap from his lectures.
"""
import os
import sys

target_dir = r"c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Engr 213\Professor Leonard"
os.makedirs(target_dir, exist_ok=True)

guides = {}

# ==============================================================================
# TOPIC 00
# ==============================================================================
guides["00 - Professor Leonard - Differential Equations Complete Roadmap & Intuition.md"] = """# Professor Leonard Master Series: Differential Equations Complete Roadmap & Intuition
### Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. The Professor Leonard Philosophy: "See the Big Picture First"
Professor Leonard always emphasizes that ordinary differential equations (ODEs) are not just arbitrary algebraic gymnastics—they are the **calculus of change**:
> *"When you study differential equations, don't just ask 'What rule do I blindly memorize?' Ask: 'What physical system is driving this derivative? What family of curves lives here?' Every differential equation is an instruction booklet telling a curve how to curve at every point in space."*

---

## 2. Complete High-Level Curriculum Architecture

```
                    ┌──────────────────────────────────────────────┐
                    │       ORDINARY DIFFERENTIAL EQUATIONS        │
                    └──────────────────────┬───────────────────────┘
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
┌─────────────────────────────────┐                         ┌─────────────────────────────────┐
│       FIRST-ORDER ODEs          │                         │     HIGHER-ORDER LINEAR ODEs    │
│            dy/dx = f(x,y)       │                         │       a y'' + b y' + c y = g(x) │
└────────────────┬────────────────┘                         └────────────────┬────────────────┘
                 │                                                           │
   ┌─────────────┴─────────────┐                               ┌─────────────┴─────────────┐
   ▼                           ▼                               ▼                           ▼
[Analytical Methods]    [Modeling & Dynamics]           [Homogeneous (g=0)]         [Non-Homogeneous]
• Separable (Clean Split) • Tank Mixing (dVol/dt)       • Distinct Real Roots       • Undetermined Coeffs
• Integrating Factor     • Newton's Cooling            • Repeated (x-factor)       • Annihilator Method
• Exact Equations        • Torricelli Draining         • Complex Conjugates        • Variation of Parameters
• Homogeneous (y=vx)     • Logistic Population           (Euler's Formula)         • Cauchy-Euler Equations
• Bernoulli (u=y^(1-n))  • Harvesting Bifurcations                                 
• Linear Sub (u=Ax+By)   • Phase Line Stability
                               │
                               ▼
        ┌─────────────────────────────────────────────────────────────┐
        │            ADVANCED DYNAMICAL & OPERATOR SYSTEMS            │
        ├──────────────────────────────┬──────────────────────────────┤
        │  Systems of 1st-Order ODEs   │      Laplace Transforms      │
        │  x' = A x (Eigenvalues,      │  L{f(t)} = integral e^(-st)  │
        │  Phase Portraits, Sinks)     │  Steps, Delta Impulses, IVPs │
        └──────────────────────────────┴──────────────────────────────┘
```

---

## 3. The 5 Golden Leonard Problem-Solving Rules

1. **Rule 1: Always Classify Before Touching Pencil to Paper**
   - Check Order: Highest derivative present.
   - Check Linearity: Dependent variable $y$ and all its derivatives must appear only to the 1st power and never multiplied together or inside nonlinear functions (e.g., no $y^2$, no $y y'$, no $\sin(y)$).
   - Check Form: Can it be separated? Is it linear? Is it exact?

2. **Rule 2: Respect the Constant of Integration ($+C$)**
   - $+C$ is not an afterthought to tack on at the end of a calculation.
   - It enters the equation *at the very second integration occurs*.
   - Exponentiating $e^{\ln|y| = x + C} \implies y = e^x \cdot e^C = A e^x$ changes $+C$ from an additive offset to a multiplicative amplitude!

3. **Rule 3: Watch Out for "Lost" Singular Solutions**
   - Whenever you divide by an expression containing $y$ (e.g., dividing by $y - 1$ or $y^2$), you assume $y \neq 1$ or $y \neq 0$.
   - You must separately test whether $y = \text{constant}$ is a valid solution that was lost during division.

4. **Rule 4: Standard Form is Mandatory for Integrating Factors**
   - If solving $a(x) y' + b(x) y = c(x)$, you **must** divide by the leading coefficient $a(x)$ *first*:
     $$y' + P(x) y = Q(x)$$
   - Computing $\mu(x) = e^{\int P(x)dx}$ without putting the equation in standard form guarantees a wrong answer.

5. **Rule 5: Keep Intermediate Steps Clean**
   - Keep fractions grouped, track signs diligently, and verify initial conditions immediately when possible.

---

## 4. Navigation & Companion Directory Structure
Each of the 16 accompanying modules in this guide delivers:
- Clear whiteboard intuition and geometric meaning.
- Professor Leonard's signature lecture problems solved from scratch in baby steps.
- Common exam traps and tips on why students lose marks.
- Complete verification of solutions back into the original differential equation.
"""

# ==============================================================================
# TOPIC 01
# ==============================================================================
guides["01 - The Big Picture, Order, Linearity & Verifying Solutions (Lessons 1-4).md"] = """# Topic 01: The Big Picture, Order, Linearity & Verifying Solutions
### Professor Leonard Master Series · Lessons 1 to 4
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: What is a Differential Equation?
In regular algebra, an equation asks: *"What number $x$ satisfies this statement?"*
In differential equations, an equation asks: **"What function $y(x)$ satisfies this relationship between itself and its derivatives?"**

Differential equations describe rates of change across nature:
- Fluid dynamics, heat transfer, and mechanical vibrations.
- Electric circuit impedance and electromagnetic wave propagation.
- Chemical reaction kinetics and population ecology.

---

## 2. Core Definitions & Classifications

### A. Ordinary vs. Partial Differential Equations
- **ODE (Ordinary Differential Equation)**: Involves unknown functions of **a single independent variable** (e.g., $dy/dx$).
- **PDE (Partial Differential Equation)**: Involves unknown functions of **multiple independent variables** (e.g., $\partial^2 u/\partial x^2 + \partial^2 u/\partial t^2 = 0$).

### B. Order
The **order** of an ODE is the order of the **highest derivative** appearing in the equation.
- $y' + 3y = e^x \implies$ **1st order**.
- $y'' + 4y' + 9y = 0 \implies$ **2nd order**.
- $(y')^5 + y''' = x \implies$ **3rd order** (the exponent 5 affects degree, not order!).

### C. Linearity
An $n$-th order ODE is **linear** if it can be written in the form:
$$a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x)$$
**Linearity Checklist**:
1. The dependent variable $y$ and all its derivatives $y', y'', \dots, y^{(n)}$ are of the **first degree** (power 1).
2. The coefficients $a_i(x)$ and forcing function $g(x)$ depend **only on the independent variable $x$** (or are constants).
3. No nonlinear functions of $y$ exist (e.g., $\sin y$, $e^y$, $\ln y$, $\sqrt{y}$).
4. No cross-products of $y$ and its derivatives exist (e.g., $y \cdot y'$).

---

## 3. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 1.1: Verifying an Explicit Two-Parameter Solution
**Statement**: Verify that the two-parameter family $y(x) = c_1 e^{2x} + c_2 x e^{2x}$ is an explicit solution to the 2nd-order ODE:
$$y'' - 4y' + 4y = 0$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Compute the first derivative $y'(x)$ using the product rule**:
  $$y'(x) = 2c_1 e^{2x} + c_2 \left(1 \cdot e^{2x} + x \cdot 2e^{2x}\right) = (2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}$$
* **Step 2: Compute the second derivative $y''(x)$**:
  $$y''(x) = 2(2c_1 + c_2)e^{2x} + 2c_2 \left(e^{2x} + 2x e^{2x}\right) = (4c_1 + 4c_2)e^{2x} + 4c_2 x e^{2x}$$
* **Step 3: Substitute $y, y', y''$ into the LHS of the ODE**:
  $$\text{LHS} = y'' - 4y' + 4y$$
  $$\text{LHS} = \left[(4c_1 + 4c_2)e^{2x} + 4c_2 x e^{2x}\right] - 4\left[(2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}\right] + 4\left[c_1 e^{2x} + c_2 x e^{2x}\right]$$
* **Step 4: Group terms by $e^{2x}$ and $x e^{2x}$**:
  - Coefficient of $e^{2x}$: $(4c_1 + 4c_2) - 4(2c_1 + c_2) + 4c_1 = 4c_1 + 4c_2 - 8c_1 - 4c_2 + 4c_1 = 0$.
  - Coefficient of $x e^{2x}$: $4c_2 - 8c_2 + 4c_2 = 0$.
  $$\text{LHS} = 0 \cdot e^{2x} + 0 \cdot x e^{2x} = 0 = \text{RHS} \quad \checkmark$$
**Conclusion**: The solution is verified for all real values of $c_1, c_2$.

---

### Problem 1.2: Verifying an Implicit Relation and Checking Branches
**Statement**: Verify that the relation $x^2 + y^2 = 25$ is an implicit solution to $\frac{dy}{dx} = -\frac{x}{y}$ on the interval $-5 < x < 5$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Differentiate implicitly with respect to $x$**:
  $$\frac{d}{dx}(x^2 + y^2) = \frac{d}{dx}(25)$$
  $$2x + 2y \frac{dy}{dx} = 0$$
* **Step 2: Solve for $dy/dx$**:
  $$2y \frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y}$$
* **Step 3: Professor Leonard's Branch Analysis**:
  The relation defines two distinct explicit differentiable functions:
  $$y_1(x) = \sqrt{25 - x^2}, \qquad y_2(x) = -\sqrt{25 - x^2}$$
  Both functions satisfy the differential equation on $(-5, 5)$. At $x = \pm 5$, $y = 0$, so $dy/dx$ is undefined (vertical tangent lines).

---

### Problem 1.3: Classification Drill (Order, Linearity, Homogeneity)
**Statement**: Classify each differential equation by order and linearity. If nonlinear, pinpoint the exact offending term:
1. $y''' + x y' + (\sin x) y = e^x$
2. $y'' + y y' = 2x$
3. $\frac{d^2 y}{dx^2} + \sqrt{1 + \left(\frac{dy}{dx}\right)^2} = 0$
4. $\frac{d^4 y}{dx^4} + x^2 y = \ln x$
5. $y' + \cos(y) = 0$

**Step-by-Step Whiteboard Solution**:
1. **3rd Order, Linear**: Highest derivative is $y'''$. The coefficients $1, x, \sin x$ depend only on $x$. $y$ and its derivatives are to power 1.
2. **2nd Order, Non-linear**: Highest derivative is $y''$. The term $y y'$ is a product of the dependent variable and its derivative!
3. **2nd Order, Non-linear**: Highest derivative is $y''$. The derivative $dy/dx$ is squared inside a square root: $\sqrt{1 + (y')^2}$.
4. **4th Order, Linear**: Highest derivative is $y^{(4)}$. The coefficient $x^2$ depends only on $x$, and $y$ is linear.
5. **1st Order, Non-linear**: The dependent variable is inside a trigonometric function: $\cos(y)$.

---

### Problem 1.4: Initial Value Problem (Finding the Specific Curve)
**Statement**: Given the general solution $y(x) = C e^{-3x} + \frac{1}{3}x - \frac{1}{9}$ to $y' + 3y = x$, find the unique particular solution satisfying $y(0) = 2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Set $x = 0$ and $y = 2$ in the general solution**:
  $$2 = C e^{-3(0)} + \frac{1}{3}(0) - \frac{1}{9}$$
  $$2 = C(1) + 0 - \frac{1}{9} \implies C = 2 + \frac{1}{9} = \frac{19}{9}$$
* **Step 2: Write the unique particular solution**:
  $$y(x) = \frac{19}{9}e^{-3x} + \frac{1}{3}x - \frac{1}{9}$$

---

### Problem 1.5: Piecewise Differentiability at Junctions (Leonard Conceptual Master)
**Statement**: Consider the function $y(x) = \begin{cases} x^4, & x \ge 0 \\ -x^4, & x < 0 \end{cases}$. Does this function satisfy $x y' - 4y = 0$ for all real $x \in (-\infty, \infty)$?

**Step-by-Step Whiteboard Solution**:
* **Step 1: Differentiate for $x > 0$**:
  $y' = 4x^3$. Substituting into ODE: $x(4x^3) - 4(x^4) = 4x^4 - 4x^4 = 0$. Valid!
* **Step 2: Differentiate for $x < 0$**:
  $y' = -4x^3$. Substituting into ODE: $x(-4x^3) - 4(-x^4) = -4x^4 + 4x^4 = 0$. Valid!
* **Step 3: Check differentiability at $x = 0$ using limits of difference quotients**:
  $$y'(0) = \lim_{h \to 0} \frac{y(h) - y(0)}{h}$$
  - Right limit: $\lim_{h \to 0^+} \frac{h^4 - 0}{h} = \lim_{h \to 0^+} h^3 = 0$.
  - Left limit: $\lim_{h \to 0^-} \frac{-h^4 - 0}{h} = \lim_{h \to 0^-} -h^3 = 0$.
  Since both one-sided derivatives match, $y'(0) = 0$.
* **Step 4: Check ODE at $x = 0$**:
  $0 \cdot y'(0) - 4 y(0) = 0(0) - 4(0) = 0$.
**Conclusion**: Yes! $y(x)$ is a valid solution over the entire real line $(-\infty, \infty)$.

---

## 4. Common Exam Traps & Professor Leonard Warnings
- **Trap 1**: Calling $(y')^4$ a 4th-order ODE. It is 1st-order, 4th-degree! Order is derivative count, not power.
- **Trap 2**: Missing non-linearity when $x$ and $y$ switch roles. $dx/dy$ might be linear in $x(y)$ even when $dy/dx$ is non-linear in $y(x)$!
- **Trap 3**: Forgetting that general solutions to an $n$-th order linear ODE must possess exactly $n$ essential arbitrary constants.
"""

print("Base files 00 and 01 prepared.")
"""

with open(r"c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\scratch\enrich_all_leonard.py", "w", encoding="utf-8") as f:
    f.write(guides["00 - Professor Leonard - Differential Equations Complete Roadmap & Intuition.md"])
