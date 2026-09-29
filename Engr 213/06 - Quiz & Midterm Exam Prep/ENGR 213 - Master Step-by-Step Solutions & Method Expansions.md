# ENGR 213: Applied Ordinary Differential Equations
# Master Step-by-Step Solutions & Method Expansions Manual
**Concordia University · Department of Building, Civil & Environmental Engineering (BCEE)**  
**Standard**: Universal Step-by-Step Expansion Method (Lectures 1–5 · Tutorial 1 · Quiz 1 & Midterm 1 Prep)

---

## 📖 The Step-by-Step Expansion Methodology
Every problem in this compendium follows the exact pedagogical structure of `exact_ode_step_by_step.pdf`:
1. **Explicit Step Breakdown**: Every phase of the solution is numbered (`Step 1`, `Step 2`, `Step 3`...).
2. **Theory Before Algebra**: Each step explicitly defines the rule, standard form, or theorem being applied before executing calculations.
3. **Zero Skipped Calculations**: Every derivative, integral, sign distribution, and factoring step is displayed on its own line.
4. **"Pattern to Remember" Algorithm**: Every problem ends with an algorithmic checklist to reproduce during exams.

---

## Table of Contents
- [Problem 1: Exact Differential Equation (Potential Function Method)](#problem-1-exact-differential-equation-potential-function-method)
- [Problem 2: Non-Exact Differential Equation (Integrating Factor \mu(x))](#problem-2-non-exact-differential-equation-integrating-factor-mux)
- [Problem 3: Verification of a Two-Parameter Solution Family](#problem-3-verification-of-a-two-parameter-solution-family)
- [Problem 4: First-Order Non-Linear IVP & Maximal Interval of Definition](#problem-4-first-order-non-linear-ivp--maximal-interval-of-definition)
- [Problem 5: Second-Order Linear IVP (Harmonic / Exponential)](#problem-5-second-order-linear-ivp-harmonic--exponential)
- [Problem 6: Picard's Existence and Uniqueness Theorem Analysis](#problem-6-picards-existence-and-uniqueness-theorem-analysis)
- [Problem 7: Autonomous First-Order ODE & 1D Phase Line Stability](#problem-7-autonomous-first-order-ode--1d-phase-line-stability)
- [Problem 8: Autonomous Quadratic Factoring & Asymptotic Tracking](#problem-8-autonomous-quadratic-factoring--asymptotic-tracking)
- [Problem 9: Separable ODE & Recovering Lost Singular Solutions](#problem-9-separable-ode--recovering-lost-singular-solutions)
- [Problem 10: Separable IVP & Explicit Square-Root Branch Selection](#problem-10-separable-ivp--explicit-square-root-branch-selection)
- [Problem 11: First-Order Linear ODE (Integrating Factor Method)](#problem-11-first-order-linear-ode-integrating-factor-method)
- [Problem 12: Homogeneous Differential Equation (y = ux)](#problem-12-homogeneous-differential-equation-y--ux)
- [Problem 13: Bernoulli Differential Equation (u = y^(1-n))](#problem-13-bernoulli-differential-equation-u--y1-n)
- [Problem 14: Reduction to Separation of Variables (Linear Argument u = Ax + By + C)](#problem-14-reduction-to-separation-of-variables-linear-argument-u--ax--by--c)

---

## Problem 1: Exact Differential Equation (Potential Function Method)

### Problem Statement
Solve the differential equation:
$$2xy \, dx + (x^2 - 1) \, dy = 0$$

### Step 1: Identify $M(x,y)$ and $N(x,y)$
The standard differential form of a first-order equation is:
$$M(x, y) \, dx + N(x, y) \, dy = 0$$
Comparing with $2xy \, dx + (x^2 - 1) \, dy = 0$, we identify:
$$M(x, y) = 2xy \quad \text{and} \quad N(x, y) = x^2 - 1$$

### Step 2: Check whether the equation is exact
For an equation to be exact, the mixed second-order partial derivatives of the potential function must be equal, which gives Clairaut's condition:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
* Differentiate $M = 2xy$ with respect to $y$, treating $x$ as a constant:
  $$\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}[2xy] = 2x$$
* Differentiate $N = x^2 - 1$ with respect to $x$, treating $y$ as a constant:
  $$\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}[x^2 - 1] = 2x$$
Because $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} = 2x$, the differential equation is **exact**.

### Step 3: Find the potential function $F(x,y)$
For an exact equation, there exists a potential function $F(x, y)$ such that:
$$\frac{\partial F}{\partial x} = M(x, y) = 2xy \quad \text{and} \quad \frac{\partial F}{\partial y} = N(x, y) = x^2 - 1$$
Integrate $\frac{\partial F}{\partial x}$ with respect to $x$. During this integration, $y$ is treated as a constant:
$$F(x, y) = \int 2xy \, dx = y \int 2x \, dx = x^2 y + g(y)$$
The extra term $g(y)$ is included because any function depending solely on $y$ acts as a constant with respect to $x$ ($\frac{\partial}{\partial x}[g(y)] = 0$).

### Step 4: Differentiate $F(x,y)$ with respect to $y$
Now differentiate $F(x, y) = x^2 y + g(y)$ with respect to $y$:
$$\frac{\partial F}{\partial y} = \frac{\partial}{\partial y}[x^2 y + g(y)] = x^2 + g'(y)$$
By definition, $\frac{\partial F}{\partial y}$ must equal $N(x, y) = x^2 - 1$. Equating the two expressions:
$$x^2 + g'(y) = x^2 - 1$$
Subtract $x^2$ from both sides:
$$g'(y) = -1$$

### Step 5: Find $g(y)$
Integrate $g'(y)$ with respect to $y$:
$$g(y) = \int (-1) \, dy = -y$$
*(The constant of integration can be omitted here as it will be absorbed into the final constant $C$).*

### Step 6: Write the implicit and explicit solution
Substitute $g(y) = -y$ back into $F(x, y)$:
$$F(x, y) = x^2 y - y$$
For an exact differential equation, the general solution is defined implicitly by $F(x, y) = C$:
$$x^2 y - y = C$$
Factor out $y$:
$$y(x^2 - 1) = C$$
Solving explicitly for $y(x)$:
$$\mathbf{y(x) = \frac{C}{x^2 - 1}}$$

### 📌 Exact ODE Pattern to Remember
1. Identify $M$ and $N$ from $M \, dx + N \, dy = 0$.
2. Check $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.
3. Integrate $M$ with respect to $x$: $F(x, y) = \int M \, dx + g(y)$.
4. Differentiate $F$ with respect to $y$ and set equal to $N$ to isolate $g'(y)$.
5. Integrate $g'(y)$ to find $g(y)$.
6. Write the final solution as $F(x, y) = C$, and solve for $y$ if possible.

---

## Problem 2: Non-Exact Differential Equation (Integrating Factor $\mu(x)$)

### Problem Statement
Solve the differential equation:
$$(2x^2 + y) \, dx + (x^2 y - x) \, dy = 0$$

### Step 1: Identify $M(x,y)$ and $N(x,y)$
$$M(x, y) = 2x^2 + y \quad \text{and} \quad N(x, y) = x^2 y - x$$

### Step 2: Test for exactness
* $\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}[2x^2 + y] = 1$
* $\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}[x^2 y - x] = 2xy - 1$
Since $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$ ($1 \neq 2xy - 1$), the equation is **not exact**.

### Step 3: Find an integrating factor
Check whether $\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N}$ is a function of $x$ alone:
$$\frac{M_y - N_x}{N} = \frac{1 - (2xy - 1)}{x^2 y - x} = \frac{2 - 2xy}{x(xy - 1)} = \frac{-2(xy - 1)}{x(xy - 1)} = -\frac{2}{x}$$
Because this expression depends only on $x$, an integrating factor $\mu(x)$ exists:
$$\mu(x) = e^{\int \left(-\frac{2}{x}\right) dx} = e^{-2\ln|x|} = e^{\ln(x^{-2})} = \frac{1}{x^2}$$

### Step 4: Multiply the ODE by the integrating factor $\mu(x) = \frac{1}{x^2}$
$$\frac{1}{x^2}(2x^2 + y) \, dx + \frac{1}{x^2}(x^2 y - x) \, dy = 0$$
$$\left(2 + \frac{y}{x^2}\right) dx + \left(y - \frac{1}{x}\right) dy = 0$$
Re-test exactness for new coefficients $\tilde{M}$ and $\tilde{N}$:
* $\frac{\partial \tilde{M}}{\partial y} = \frac{1}{x^2}$
* $\frac{\partial \tilde{N}}{\partial x} = -\left(-\frac{1}{x^2}\right) = \frac{1}{x^2}$
Since $\tilde{M}_y = \tilde{N}_x$, the transformed equation is **exact**.

### Step 5: Integrate $\tilde{M}$ to find $F(x,y)$
$$F(x, y) = \int \left(2 + \frac{y}{x^2}\right) dx = 2x - \frac{y}{x} + g(y)$$

### Step 6: Differentiate with respect to $y$ and match with $\tilde{N}$
$$\frac{\partial F}{\partial y} = -\frac{1}{x} + g'(y)$$
Equating to $\tilde{N} = y - \frac{1}{x}$:
$$-\frac{1}{x} + g'(y) = y - \frac{1}{x} \implies g'(y) = y$$
Integrate to find $g(y)$:
$$g(y) = \int y \, dy = \frac{1}{2}y^2$$

### Step 7: Write the final solution
Substitute $g(y)$ into $F(x, y)$:
$$F(x, y) = 2x - \frac{y}{x} + \frac{1}{2}y^2$$
Set $F(x, y) = C$:
$$\mathbf{2x - \frac{y}{x} + \frac{1}{2}y^2 = C}$$

### 📌 Integrating Factor Pattern to Remember
1. Compute $M_y$ and $N_x$. If $M_y \neq N_x$, calculate $\frac{M_y - N_x}{N}$.
2. If it depends only on $x$, compute $\mu(x) = e^{\int \frac{M_y - N_x}{N} dx}$.
3. Multiply the entire ODE by $\mu(x)$ to produce an exact equation.
4. Integrate the new $\tilde{M}$ with respect to $x$, match $\frac{\partial F}{\partial y} = \tilde{N}$ to find $g(y)$, and write $F = C$.

---

## Problem 3: Verification of a Two-Parameter Solution Family

### Problem Statement
*(Tutorial 1 Handout · Section 1.1 #25)*  
Verify by direct differentiation that $y(x) = c_1 e^{2x} + c_2 x e^{2x}$ is an explicit solution of:
$$\frac{d^2 y}{dx^2} - 4 \frac{dy}{dx} + 4y = 0$$
on $(-\infty, \infty)$.

### Step 1: State the goal and count required derivatives
To verify that $y(x)$ is a solution to a second-order ODE, we must compute $y'(x)$ and $y''(x)$, substitute them into the left-hand side (LHS), and show that LHS identically reduces to $0$ for all $x \in \mathbb{R}$.

### Step 2: Compute the first derivative $y'(x)$
Given $y(x) = c_1 e^{2x} + c_2 x e^{2x}$:
* Differentiate $c_1 e^{2x}$ using the chain rule: $\frac{d}{dx}[c_1 e^{2x}] = 2c_1 e^{2x}$.
* Differentiate $c_2 x e^{2x}$ using the product rule: $\frac{d}{dx}[x \cdot e^{2x}] = (1)e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}$.
Combine:
$$y'(x) = 2c_1 e^{2x} + c_2(e^{2x} + 2x e^{2x}) = (2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}$$

### Step 3: Compute the second derivative $y''(x)$
Differentiate $y'(x) = (2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}$:
$$y''(x) = 2(2c_1 + c_2)e^{2x} + 2c_2(e^{2x} + 2x e^{2x})$$
Expand:
$$y''(x) = (4c_1 + 2c_2)e^{2x} + 2c_2 e^{2x} + 4c_2 x e^{2x} = (4c_1 + 4c_2)e^{2x} + 4c_2 x e^{2x}$$

### Step 4: Substitute into the left-hand side (LHS) of the ODE
$$\text{LHS} = y'' - 4y' + 4y$$
Substitute the derived expressions:
$$\text{LHS} = \left[(4c_1 + 4c_2)e^{2x} + 4c_2 x e^{2x}\right] - 4\left[(2c_1 + c_2)e^{2x} + 2c_2 x e^{2x}\right] + 4\left[c_1 e^{2x} + c_2 x e^{2x}\right]$$

### Step 5: Factor and group like terms
Group terms in $e^{2x}$ and terms in $x e^{2x}$:
$$\text{Coefficient of } e^{2x}: \quad (4c_1 + 4c_2) - 4(2c_1 + c_2) + 4c_1 = 4c_1 + 4c_2 - 8c_1 - 4c_2 + 4c_1 = (4 - 8 + 4)c_1 + (4 - 4)c_2 = 0$$
$$\text{Coefficient of } x e^{2x}: \quad 4c_2 - 4(2c_2) + 4c_2 = 4c_2 - 8c_2 + 4c_2 = (4 - 8 + 4)c_2 = 0$$

### Step 6: Conclude verification
$$\text{LHS} = 0 \cdot e^{2x} + 0 \cdot x e^{2x} = 0 = \text{RHS} \quad \blacksquare$$
Because the equality holds for all real numbers $x \in (-\infty, \infty)$ regardless of constants $c_1$ and $c_2$, $y(x)$ is a valid two-parameter solution family.

### 📌 Solution Verification Pattern to Remember
1. Compute the exact number of derivatives matching the order of the ODE.
2. Apply the product rule carefully on mixed terms like $x e^{kx}$.
3. Substitute into the LHS only.
4. Factor like terms and explicitly write $(a - b + c) = 0$.
5. State the interval of validity $I = (-\infty, \infty)$.

---

## Problem 4: First-Order Non-Linear IVP & Maximal Interval of Definition

### Problem Statement
*(Tutorial 1 Handout · Section 1.2 #1)*  
Given that $y(x) = \frac{1}{1 + c_1 e^{-x}}$ satisfies $y' = y - y^2$, solve the initial value problem with:
$$y(0) = -\frac{1}{3}$$
and determine its maximal connected interval of definition $I$.

### Step 1: State the initial condition
The initial condition is given as $x_0 = 0$ and $y_0 = -\frac{1}{3}$.

### Step 2: Substitute $(x_0, y_0)$ to solve for $c_1$
$$-\frac{1}{3} = \frac{1}{1 + c_1 e^{-(0)}} = \frac{1}{1 + c_1(1)} = \frac{1}{1 + c_1}$$
Cross-multiply:
$$1 + c_1 = -3 \implies c_1 = -3 - 1 = -4$$

### Step 3: Write the particular solution
Substitute $c_1 = -4$ into the family:
$$y(x) = \frac{1}{1 - 4e^{-x}}$$

### Step 4: Find all singular points (where the function blows up)
The denominator vanishes when:
$$1 - 4e^{-x} = 0 \implies 4e^{-x} = 1 \implies e^{-x} = \frac{1}{4} \implies e^x = 4 \implies x = \ln 4 \approx 1.386$$
The function has a vertical asymptote at $x = \ln 4$.

### Step 5: Select the maximal connected interval of definition $I$
By definition, the interval of definition of an IVP must be a single connected interval containing the initial point $x_0 = 0$.
Comparing $x_0 = 0$ with $x = \ln 4$:
$$0 < \ln 4$$
The initial point falls strictly inside the interval to the left of the singularity:
$$\mathbf{I = (-\infty, \ln 4)}$$

### 📌 IVP Interval Pattern to Remember
1. Plug $(x_0, y_0)$ into the general solution to solve for $c$.
2. Set denominators equal to 0 to identify singularities.
3. Locate $x_0$ on the real number line relative to the singularities.
4. The interval of definition is the single open interval containing $x_0$. Never write unions ($\cup$)!

---

## Problem 5: Second-Order Linear IVP (Harmonic / Exponential)

### Problem Statement
*(Tutorial 1 Handout · Section 1.2 #11)*  
Given that $y(x) = c_1 e^x + c_2 e^{-x}$ satisfies $y'' - y = 0$, solve the IVP satisfying:
$$y(0) = 1, \quad y'(0) = 2$$

### Step 1: Differentiate the general solution
Given $y(x) = c_1 e^x + c_2 e^{-x}$:
$$y'(x) = \frac{d}{dx}[c_1 e^x + c_2 e^{-x}] = c_1 e^x - c_2 e^{-x}$$

### Step 2: Apply the first initial condition $y(0) = 1$
$$y(0) = c_1 e^0 + c_2 e^0 = c_1 + c_2 = 1 \quad \text{--- [Equation 1]}$$

### Step 3: Apply the second initial condition $y'(0) = 2$
$$y'(0) = c_1 e^0 - c_2 e^0 = c_1 - c_2 = 2 \quad \text{--- [Equation 2]}$$

### Step 4: Solve the $2 \times 2$ system of equations
Add Equation 1 and Equation 2:
$$(c_1 + c_2) + (c_1 - c_2) = 1 + 2 \implies 2c_1 = 3 \implies c_1 = \frac{3}{2}$$
Subtract Equation 2 from Equation 1:
$$(c_1 + c_2) - (c_1 - c_2) = 1 - 2 \implies 2c_2 = -1 \implies c_2 = -\frac{1}{2}$$

### Step 5: Formulate the unique particular solution
$$\mathbf{y(x) = \frac{3}{2}e^x - \frac{1}{2}e^{-x} = \cosh(x) + 2\sinh(x)}, \quad I = (-\infty, \infty)$$

---

## Problem 6: Picard's Existence and Uniqueness Theorem Analysis

### Problem Statement
*(Dr. Haghighat Lecture 2 · Slide 8)*  
Consider $\frac{dy}{dx} = x \sqrt{y}$ with $y(x_0) = y_0$.  
(a) Determine if uniqueness is guaranteed for $y(0) = 0$. Show two solutions exist.  
(b) Determine if uniqueness is guaranteed for $y(2) = 1$.

### Step 1: Identify $f(x,y)$ and calculate $\frac{\partial f}{\partial y}$
$$f(x, y) = x y^{1/2}$$
Compute the partial derivative with respect to $y$, holding $x$ constant:
$$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}[x y^{1/2}] = x \cdot \frac{1}{2} y^{-1/2} = \frac{x}{2\sqrt{y}}$$

### Step 2: Establish the domains of continuity
* $f(x, y) = x\sqrt{y}$ is continuous for all points where $y \ge 0$ (the closed upper half-plane).
* $\frac{\partial f}{\partial y} = \frac{x}{2\sqrt{y}}$ requires $y > 0$ to avoid division by zero. It is continuous strictly in the open region $y > 0$. Along the line $y = 0$, $\frac{\partial f}{\partial y}$ is discontinuous.

### Step 3: Evaluate the initial condition $y(0) = 0$
The point $(x_0, y_0) = (0, 0)$ has $y_0 = 0$. Any rectangle $R$ centered at $(0, 0)$ contains points on the line $y = 0$ where $\frac{\partial f}{\partial y}$ does not exist.
Therefore, condition (2) of Picard's theorem fails. **Uniqueness is not guaranteed**.

### Step 4: Prove non-uniqueness by producing two distinct solutions
1. **Solution 1 (Trivial solution)**: $y_1(x) \equiv 0$.  
   $y_1(0) = 0$, and $\frac{dy_1}{dx} = 0 = x\sqrt{0} \implies 0 = 0$. (Valid!)
2. **Solution 2 (Separated solution)**: Separate $\frac{dy}{\sqrt{y}} = x \, dx \implies 2\sqrt{y} = \frac{1}{2}x^2 + C$.  
   Applying $y(0) = 0 \implies C = 0 \implies \sqrt{y} = \frac{1}{4}x^2 \implies y_2(x) = \frac{1}{16}x^4$ ($x \ge 0$).  
   Check: $y_2' = \frac{1}{4}x^3$ and $x\sqrt{y_2} = x(\frac{1}{4}x^2) = \frac{1}{4}x^3$. (Valid!)  
Since $y_1(x) \neq y_2(x)$, multiple solutions pass through $(0,0)$.

### Step 5: Evaluate the initial condition $y(2) = 1$
Here $(x_0, y_0) = (2, 1)$. Since $y_0 = 1 > 0$, we can choose an open rectangle $R$:
$$R = \{(x, y) \mid 1 < x < 3, \; 0.5 < y < 1.5\}$$
On $R$, $y \ge 0.5 > 0$, so both $f(x, y)$ and $\frac{\partial f}{\partial y}$ are continuous.
By Picard's Theorem, **a unique solution is guaranteed through $(2, 1)$**.

---

## Problem 7: Autonomous First-Order ODE & 1D Phase Line Stability

### Problem Statement
*(Tutorial 1 Handout · Section 2.1 #21)*  
For the autonomous differential equation $\frac{dy}{dx} = y^2 - 3y$, find critical points, construct the 1D phase line, and classify each equilibrium point.

### Step 1: Find all critical points (equilibrium solutions)
Set $f(y) = 0$:
$$f(y) = y^2 - 3y = y(y - 3) = 0$$
$$\implies y = 0 \quad \text{and} \quad y = 3$$
The horizontal equilibrium solutions are $y(x) \equiv 0$ and $y(x) \equiv 3$.

### Step 2: Determine the sign of $f(y)$ on each sub-interval
The critical points divide the $y$-axis into three regions:
* **Region $y > 3$**: Test $y = 4 \implies f(4) = 4(4 - 3) = +4 > 0$. Since $\frac{dy}{dx} > 0$, solutions are increasing ($\uparrow$).
* **Region $0 < y < 3$**: Test $y = 1 \implies f(1) = 1(1 - 3) = -2 < 0$. Since $\frac{dy}{dx} < 0$, solutions are decreasing ($\downarrow$).
* **Region $y < 0$**: Test $y = -1 \implies f(-1) = -1(-1 - 3) = +4 > 0$. Since $\frac{dy}{dx} > 0$, solutions are increasing ($\uparrow$).

### Step 3: Classify stability based on directional arrows
* **At $y = 3$**: Arrows below point DOWN ($\downarrow$) and arrows above point UP ($\uparrow$). Trajectories move away from $3$ on both sides $\implies \mathbf{y = 3 \text{ is UNSTABLE (Repeller / Source)}}$.
* **At $y = 0$**: Arrows above point DOWN ($\downarrow$) and arrows below point UP ($\uparrow$). Trajectories converge toward $0$ from both sides $\implies \mathbf{y = 0 \text{ is ASYMPTOTICALLY STABLE (Attractor / Sink)}}$.

### Step 4: Verify with the derivative test shortcut
Differentiate $f(y) = y^2 - 3y \implies f'(y) = 2y - 3$:
* $f'(0) = 2(0) - 3 = -3 < 0 \implies$ **Stable (Attractor)**
* $f'(3) = 2(3) - 3 = +3 > 0 \implies$ **Unstable (Repeller)**

---

## Problem 8: Autonomous Quadratic Factoring & Asymptotic Tracking

### Problem Statement
*(Tutorial 1 Handout · Section 2.1 #24)*  
For $\frac{dy}{dx} = 10 + 3y - y^2$, determine critical points, construct the phase portrait, and determine $\lim_{x \to \infty} y(x)$ if $y(0) = 1$.

### Step 1: Factor $f(y)$ carefully
$$f(y) = -(y^2 - 3y - 10) = -(y - 5)(y + 2) = (5 - y)(y + 2) = 0$$
Critical points: $\mathbf{y = 5}$ and $\mathbf{y = -2}$.

### Step 2: Sign analysis
* $y > 5$: Test $y = 6 \implies f(6) = (5 - 6)(6 + 2) = (-1)(8) = -8 < 0 \implies$ Arrow points **DOWN ($\downarrow$)**.
* $-2 < y < 5$: Test $y = 0 \implies f(0) = 10 + 0 - 0 = +10 > 0 \implies$ Arrow points **UP ($\uparrow$)**.
* $y < -2$: Test $y = -3 \implies f(-3) = (5 - (-3))(-3 + 2) = (8)(-1) = -8 < 0 \implies$ Arrow points **DOWN ($\downarrow$)**.

### Step 3: Classify stability
* **$y = 5$ is ASYMPTOTICALLY STABLE (Attractor)** (converging arrows $\uparrow \bullet \downarrow$).
* **$y = -2$ is UNSTABLE (Repeller)** (diverging arrows $\downarrow \bullet \uparrow$).

### Step 4: Determine asymptotic behavior for $y(0) = 1$
The initial value $y_0 = 1$ lies in the interval $(-2, 5)$.
In this interval, $\frac{dy}{dx} > 0$, so $y(x)$ is monotonically increasing.
Because $y = 5$ is an attractor and curves cannot cross equilibrium lines:
$$\mathbf{\lim_{x \to \infty} y(x) = 5}, \quad \mathbf{\lim_{x \to -\infty} y(x) = -2}$$

---

## Problem 9: Separable ODE & Recovering Lost Singular Solutions

### Problem Statement
*(Dr. Haghighat Lecture 3 · Slide 6)*  
Solve $\frac{dy}{dx} = y^2 - 4$ via separation of variables, and identify any singular solutions.

### Step 1: Pre-check for constant equilibrium solutions
Before dividing by $y^2 - 4$, set it equal to zero:
$$y^2 - 4 = 0 \implies (y - 2)(y + 2) = 0 \implies y = 2 \quad \text{and} \quad y = -2$$
Both are valid constant solutions to the differential equation.

### Step 2: Separate variables
For $y \neq \pm 2$:
$$\frac{dy}{y^2 - 4} = dx$$

### Step 3: Partial fraction decomposition
$$\frac{1}{(y - 2)(y + 2)} = \frac{A}{y - 2} + \frac{B}{y + 2} \implies 1 = A(y + 2) + B(y - 2)$$
* $y = 2 \implies 4A = 1 \implies A = 1/4$
* $y = -2 \implies -4B = 1 \implies B = -1/4$
$$\frac{1}{4}\left(\frac{1}{y - 2} - \frac{1}{y + 2}\right) dy = dx$$

### Step 4: Integrate both sides
$$\frac{1}{4}\left(\ln|y - 2| - \ln|y + 2|\right) = x + C_1$$
Multiply by 4:
$$\ln\left|\frac{y - 2}{y + 2}\right| = 4x + 4C_1$$
Exponentiate and remove absolute values with $c = \pm e^{4C_1}$:
$$\frac{y - 2}{y + 2} = c e^{4x}$$

### Step 5: Solve explicitly for $y(x)$
$$y - 2 = c e^{4x} y + 2c e^{4x} \implies y(1 - c e^{4x}) = 2(1 + c e^{4x})$$
$$\mathbf{y(x) = \frac{2(1 + c e^{4x})}{1 - c e^{4x}}}$$

### Step 6: Test equilibrium solutions for singular status
* If $c = 0 \implies y(x) = \frac{2(1)}{1} = 2$. Thus, $y = 2$ is included in the family.
* If we test $y = -2$: $\frac{2(1 + c e^{4x})}{1 - c e^{4x}} = -2 \implies 1 + c e^{4x} = -1 + c e^{4x} \implies 1 = -1$ (Impossible for finite $c$).
Therefore:
$$\mathbf{y(x) \equiv -2 \text{ is a SINGULAR (LOST) SOLUTION}}$$

---

## Problem 10: Separable IVP & Explicit Square-Root Branch Selection

### Problem Statement
*(Dr. Haghighat Lecture 3 · Slide 5)*  
Solve the IVP $\frac{dy}{dx} = -\frac{x}{y}$ with $y(4) = -3$. State the explicit solution and the interval of definition $I$.

### Step 1: Separate variables and integrate
$$y \, dy = -x \, dx \implies \int y \, dy = -\int x \, dx$$
$$\frac{1}{2}y^2 = -\frac{1}{2}x^2 + C_1 \implies x^2 + y^2 = C$$

### Step 2: Apply the initial condition $(4, -3)$ to find $C$
$$(4)^2 + (-3)^2 = 16 + 9 = 25 \implies C = 25$$
Implicit equation: $x^2 + y^2 = 25$ (a circle of radius 5).

### Step 3: Solve explicitly and select the sign branch
$$y^2 = 25 - x^2 \implies y(x) = \pm\sqrt{25 - x^2}$$
Since the initial condition specifies $y(4) = -3 < 0$, we **must choose the negative branch**:
$$\mathbf{y(x) = -\sqrt{25 - x^2}}$$

### Step 4: Determine the interval of definition $I$
In the original ODE $\frac{dy}{dx} = -x/y$, $y$ is in the denominator, so $y \neq 0$.
At $x = \pm 5$, $y = 0$, producing vertical tangents where $\frac{dy}{dx}$ is undefined.
A solution to an ODE must be differentiable on its interval:
$$\mathbf{I = (-5, 5)}$$

---

## Problem 11: First-Order Linear ODE (Integrating Factor Method)

### Problem Statement
*(Dr. Haghighat Lecture 3 · Slide 12)*  
Solve the IVP $x \frac{dy}{dx} + 2y = 4x^2$ with $y(1) = 2$.

### Step 1: Put in standard canonical form
Divide by the leading coefficient $x$ (for $x \neq 0$):
$$\frac{dy}{dx} + \frac{2}{x}y = 4x$$
Identify $P(x) = \frac{2}{x}$ and $Q(x) = 4x$.

### Step 2: Calculate the integrating factor $\mu(x)$
$$\mu(x) = e^{\int P(x) dx} = e^{\int \frac{2}{x} dx} = e^{2\ln|x|} = e^{\ln(x^2)} = \mathbf{x^2}$$

### Step 3: Multiply the standard ODE by $\mu(x) = x^2$
$$x^2 \frac{dy}{dx} + 2xy = 4x^3$$
Recognize the product rule on the LHS:
$$\frac{d}{dx}\left[x^2 y\right] = 4x^3$$

### Step 4: Integrate both sides
$$\int \frac{d}{dx}\left[x^2 y\right] dx = \int 4x^3 dx \implies x^2 y = x^4 + C$$
Divide by $x^2$:
$$y(x) = x^2 + \frac{C}{x^2}$$

### Step 5: Apply the initial condition $y(1) = 2$
$$2 = (1)^2 + \frac{C}{(1)^2} = 1 + C \implies C = 1$$
Particular solution:
$$\mathbf{y(x) = x^2 + \frac{1}{x^2}}, \quad \mathbf{I = (0, \infty)}$$

---

## Problem 12: Homogeneous Differential Equation ($y = ux$)

### Problem Statement
*(Dr. Haghighat Lecture 5 · Slide 9)*  
Solve the homogeneous equation $(x^2 + y^2)dx + (x^2 - xy)dy = 0$.

### Step 1: Verify homogeneity
Both $M(x, y) = x^2 + y^2$ and $N(x, y) = x^2 - xy$ have degree $\alpha = 2$.

### Step 2: Define substitution
Since $N(x, y) = x(x - y)$ factors easily, substitute $y = ux \implies dy = u \, dx + x \, du$.

### Step 3: Substitute and simplify
$$(x^2 + u^2 x^2)dx + (x^2 - x(ux))(u \, dx + x \, du) = 0$$
Divide by $x^2$:
$$(1 + u^2)dx + (1 - u)(u \, dx + x \, du) = 0$$
$$(1 + u^2 + u - u^2)dx + x(1 - u)du = 0 \implies (1 + u)dx + x(1 - u)du = 0$$

### Step 4: Separate variables
$$\frac{dx}{x} + \frac{u - 1}{u + 1}du = 0 \implies \frac{dx}{x} + \left(1 - \frac{2}{u + 1}\right)du = 0$$

### Step 5: Integrate and back-substitute
$$\ln|x| + u - 2\ln|u + 1| = C_1 \implies (u + 1)^2 = C x e^u$$
Back-substitute $u = y/x$:
$$\mathbf{(x + y)^2 = c x^3 e^{y/x}}$$

---

## Problem 13: Bernoulli Differential Equation ($u = y^{1-n}$)

### Problem Statement
*(Dr. Haghighat Lecture 5 · Slide 11)*  
Solve the Bernoulli equation $x \frac{dy}{dx} + y = x^2 y^2$.

### Step 1: Put in standard Bernoulli form
Divide by $x$:
$$\frac{dy}{dx} + \frac{1}{x}y = x y^2 \implies P(x) = \frac{1}{x}, \quad f(x) = x, \quad n = 2$$

### Step 2: Define substitution
$$u = y^{1-n} = y^{1-2} = y^{-1} = \frac{1}{y}$$

### Step 3: Linearize using $(1 - n) = -1$
$$\frac{du}{dx} + (-1)\left(\frac{1}{x}\right)u = (-1)(x) \implies \frac{du}{dx} - \frac{1}{x}u = -x$$

### Step 4: Solve linear ODE in $u$
$$\mu(x) = e^{\int -1/x \, dx} = \frac{1}{x} \implies \frac{d}{dx}\left[\frac{1}{x}u\right] = -1 \implies \frac{1}{x}u = -x + C \implies u(x) = C x - x^2$$

### Step 5: Back-substitute $u = 1/y$
$$\mathbf{y(x) = \frac{1}{C x - x^2} = \frac{1}{x(C - x)}} \quad \text{and singular solution } \mathbf{y(x) \equiv 0}$$

---

## Problem 14: Reduction to Separation of Variables ($u = Ax + By + C$)

### Problem Statement
*(Dr. Haghighat Lecture 5 · Slide 12)*  
Solve $\frac{dy}{dx} = (-2x + y)^2 - 7$.

### Step 1: Identify linear argument and substitute
$u = -2x + y \implies \frac{du}{dx} = -2 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} + 2$.

### Step 2: Transform to separable ODE
$$\frac{du}{dx} + 2 = u^2 - 7 \implies \frac{du}{dx} = u^2 - 9$$

### Step 3: Separate variables and partial fractions
$$\frac{du}{(u - 3)(u + 3)} = dx \implies \frac{1}{6}\left(\frac{1}{u - 3} - \frac{1}{u + 3}\right)du = dx$$

### Step 4: Integrate and solve for $u(x)$
$$\ln\left|\frac{u - 3}{u + 3}\right| = 6x + C_1 \implies \frac{u - 3}{u + 3} = c e^{6x} \implies u(x) = \frac{3(1 + c e^{6x})}{1 - c e^{6x}}$$

### Step 5: Back-substitute $u = -2x + y$
$$\mathbf{y(x) = 2x + \frac{3(1 + c e^{6x})}{1 - c e^{6x}}} \quad \text{and singular solution } \mathbf{y = 2x - 3}$$
