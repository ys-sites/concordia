# ENGR 213: Applied Ordinary Differential Equations
# Past Midterm Examinations Solved Master Guide (2011–2018)
**Concordia University · Gina Cody School of Engineering and Computer Science**  
**Curriculum Scope**: First-Order ODEs, Separable Equations, Integrating Factors, Exact Equations, Bernoulli & Homogeneous Substitutions, Linear Models & Kinematics, Higher-Order Linear ODEs, Linear Independence & Wronskians, Method of Undetermined Coefficients, Variation of Parameters, and Cauchy-Euler Equations.

---

## 📖 Pedagogical Architecture & Exam Strategy
Every problem in this compendium is extracted directly from official Concordia University ENGR 213 Midterm Examinations (2011–2018). Each solution follows our rigorous standard:
1. **Explicit Step Breakdown**: Every phase of the derivation is explicitly titled (`Step 1`, `Step 2`...).
2. **Theory Before Algebra**: The mathematical theorem, standard form, or substitution rule is stated before executing calculations.
3. **Zero Skipped Calculations**: All integrals, derivatives, partial derivatives, and fraction simplifications are displayed line-by-line.
4. **Exam Traps & Verification**: Common pitfalls that result in lost marks on Concordia exams are explicitly highlighted with cross-checks.

---

## Table of Contents
- [Part I: Fall 2018 Midterm Examination 1](#part-i-fall-2018-midterm-examination-1)
  - [Problem 1: Separable Initial Value Problem](#problem-1-separable-initial-value-problem)
  - [Problem 2: Bernoulli Differential Equation](#problem-2-bernoulli-differential-equation)
  - [Problem 3: Exact First-Order Differential Equation](#problem-3-exact-first-order-differential-equation)
  - [Problem 4: Homogeneous Degree-3 Equation IVP](#problem-4-homogeneous-degree-3-equation-ivp)
  - [Problem 5: Bacterial Growth Kinetics & Tripling Period](#problem-5-bacterial-growth-kinetics--tripling-period)
- [Part II: Winter 2016 Midterm Examination II (Version A)](#part-ii-winter-2016-midterm-examination-ii-version-a)
  - [Problem 1: Linear Independence via Wronskian & Trig Identities](#problem-1-linear-independence-via-wronskian--trig-identities)
  - [Problem 2: Fourth-Order Linear ODE with Repeated Real Roots](#problem-2-fourth-order-linear-ode-with-repeated-real-roots)
  - [Problem 3: Resonant Undetermined Coefficients IVP](#problem-3-resonant-undetermined-coefficients-ivp)
  - [Problem 4: Variation of Parameters Boundary Value Problem](#problem-4-variation-of-parameters-boundary-value-problem)
  - [Problem 5: Cauchy-Euler Complex Conjugate Equation](#problem-5-cauchy-euler-complex-conjugate-equation)
  - [Bonus Problem: Asymptotic Stability at Infinity](#bonus-problem-asymptotic-stability-at-infinity)
- [Part III: Winter 2016 Midterm Examination II (Version B)](#part-iii-winter-2016-midterm-examination-ii-version-b)
  - [Problem 1: Trigonometric Identity Dependence Analysis](#problem-1-trigonometric-identity-dependence-analysis)
  - [Problem 2: Fourth-Order Linear ODE (Real & Imaginary Roots)](#problem-2-fourth-order-linear-ode-real--imaginary-roots)
- [Part IV: Sample Midterm Examination II](#part-iv-sample-midterm-examination-ii)
  - [Problem 1: Polynomial Basis Linear Dependence](#problem-1-polynomial-basis-linear-dependence)
  - [Problem 2: Inhomogeneous Second-Order Exponential ODE](#problem-2-inhomogeneous-second-order-exponential-ode)
  - [Problem 3: Resonant Harmonic Boundary Value Problem](#problem-3-resonant-harmonic-boundary-value-problem)
  - [Problem 4: Variation of Parameters with Logistic Forcing](#problem-4-variation-of-parameters-with-logistic-forcing)
  - [Problem 5: Reduction of Order (Missing Dependent Variable)](#problem-5-reduction-of-order-missing-dependent-variable)

---

# Part I: Fall 2018 Midterm Examination 1

## Problem 1: Separable Initial Value Problem

### Problem Statement
Solve the initial value problem for the first-order differential equation:
$$\frac{dy}{dx} = \frac{3x^2 y}{1 + x^3}, \quad y(1) = 2$$

### Complete Step-by-Step Solution

#### Step 1: Separation of Variables
Move all terms in $y$ to the left-hand side and all terms in $x$ to the right-hand side:
$$\frac{1}{y} \, dy = \frac{3x^2}{1 + x^3} \, dx$$

#### Step 2: Integration of Both Sides
Integrate both sides independently:
$$\int \frac{1}{y} \, dy = \int \frac{3x^2}{1 + x^3} \, dx$$

On the right-hand side, substitute $u = 1 + x^3$, so $du = 3x^2 \, dx$:
$$\int \frac{du}{u} = \ln|u| + C_1 = \ln|1 + x^3| + C_1$$

On the left-hand side:
$$\ln|y| = \ln|1 + x^3| + C_1$$

#### Step 3: Exponentiation
Exponentiate both sides with base $e$:
$$|y| = e^{\ln|1 + x^3| + C_1} = e^{C_1} |1 + x^3|$$
Letting $C = \pm e^{C_1}$:
$$y(x) = C(1 + x^3)$$

#### Step 4: Apply Initial Condition $y(1) = 2$
Substitute $x = 1$ and $y = 2$:
$$2 = C(1 + 1^3) = 2C \implies C = 1$$

#### Step 5: Final Explicit Solution
$$y(x) = 1 + x^3 \quad \text{for } x > -1$$

> **Exam Trap Alert**: Writing $\ln|y| = \ln|1+x^3| + C \implies y = 1 + x^3 + C$ is an instant zero on Concordia exams! The constant $C$ enters the exponent, meaning $y = C(1+x^3)$.

---

## Problem 2: Bernoulli Differential Equation

### Problem Statement
Solve the first-order differential equation:
$$\frac{dy}{dx} + 2xy = -xy^4$$

### Complete Step-by-Step Solution

#### Step 1: Recognize Bernoulli Form
The equation matches standard Bernoulli form:
$$y' + P(x)y = Q(x)y^n \quad \text{with } P(x) = 2x, \; Q(x) = -x, \; n = 4$$

#### Step 2: Divide by $y^n = y^4$
$$y^{-4} \frac{dy}{dx} + 2x y^{-3} = -x$$

#### Step 3: Linearizing Substitution
Let $u = y^{1-n} = y^{1-4} = y^{-3}$.  
Differentiating with respect to $x$ via the chain rule:
$$\frac{du}{dx} = -3y^{-4} \frac{dy}{dx} \implies y^{-4} \frac{dy}{dx} = -\frac{1}{3} \frac{du}{dx}$$

Substitute into the differential equation:
$$-\frac{1}{3} \frac{du}{dx} + 2x u = -x$$

#### Step 4: Put into Standard Linear Form
Multiply by $-3$:
$$\frac{du}{dx} - 6x u = 3x$$

#### Step 5: Integrating Factor Method
Compute integrating factor $\mu(x)$:
$$\mu(x) = e^{\int -6x \, dx} = e^{-3x^2}$$

Multiply the linear ODE by $\mu(x)$:
$$e^{-3x^2} \frac{du}{dx} - 6x e^{-3x^2} u = 3x e^{-3x^2}$$
$$\frac{d}{dx} \left[ e^{-3x^2} u \right] = 3x e^{-3x^2}$$

#### Step 6: Integration
Integrate both sides with respect to $x$:
$$e^{-3x^2} u = \int 3x e^{-3x^2} \, dx$$

Let $w = -3x^2 \implies dw = -6x \, dx \implies 3x \, dx = -\frac{1}{2} \, dw$:
$$\int 3x e^{-3x^2} \, dx = -\frac{1}{2} \int e^w \, dw = -\frac{1}{2} e^{-3x^2} + C$$

Therefore:
$$e^{-3x^2} u = -\frac{1}{2} e^{-3x^2} + C \implies u(x) = -\frac{1}{2} + C e^{3x^2}$$

#### Step 7: Back-Substitute $u = y^{-3}$
$$y^{-3} = -\frac{1}{2} + C e^{3x^2} \iff \frac{1}{y^3} = \frac{2C e^{3x^2} - 1}{2}$$

$$\boxed{y(x) = \left( -\frac{1}{2} + C e^{3x^2} \right)^{-1/3}}$$

---

## Problem 3: Exact First-Order Differential Equation

### Problem Statement
Solve the differential equation:
$$(4x^3 + 3x^2 + 3y) \, dx + (3x + 2y + 1) \, dy = 0$$

### Complete Step-by-Step Solution

#### Step 1: Identify $M(x,y)$ and $N(x,y)$
$$M(x,y) = 4x^3 + 3x^2 + 3y$$
$$N(x,y) = 3x + 2y + 1$$

#### Step 2: Test for Exactness
$$\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}(4x^3 + 3x^2 + 3y) = 3$$
$$\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}(3x + 2y + 1) = 3$$
Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} = 3$, the equation is **exact**.

#### Step 3: Integrate $M(x,y)$ with Respect to $x$
A potential function $F(x,y)$ exists such that $\frac{\partial F}{\partial x} = M$:
$$F(x,y) = \int (4x^3 + 3x^2 + 3y) \, dx = x^4 + x^3 + 3xy + g(y)$$

#### Step 4: Differentiate $F(x,y)$ with Respect to $y$ and Equate to $N$
$$\frac{\partial F}{\partial y} = 0 + 0 + 3x + g'(y) = 3x + g'(y)$$
Equating to $N(x,y) = 3x + 2y + 1$:
$$3x + g'(y) = 3x + 2y + 1 \implies g'(y) = 2y + 1$$

#### Step 5: Integrate $g'(y)$
$$g(y) = \int (2y + 1) \, dy = y^2 + y$$

#### Step 6: Construct Potential Function and Final Implicit Solution
$$F(x,y) = x^4 + x^3 + 3xy + y^2 + y$$
The general solution is:
$$\boxed{x^4 + x^3 + 3xy + y^2 + y = C}$$

---

## Problem 4: Homogeneous Degree-3 Equation IVP

### Problem Statement
Solve the initial value problem:
$$(x^3 + y^3) \, dx - 3xy^2 \, dy = 0, \quad y(1) = 1$$

### Complete Step-by-Step Solution

#### Step 1: Verify Homogeneity
$$M(tx, ty) = t^3 x^3 + t^3 y^3 = t^3 M(x,y)$$
$$N(tx, ty) = -3(tx)(t^2 y^2) = t^3 N(x,y)$$
Both coefficients are homogeneous of degree 3.

#### Step 2: Apply Substitution $y = vx$
$$y = vx \implies dy = v \, dx + x \, dv$$

Substitute into the ODE:
$$(x^3 + v^3 x^3) \, dx - 3x(v^2 x^2)(v \, dx + x \, dv) = 0$$

#### Step 3: Divide by $x^3$ ($x \neq 0$)
$$(1 + v^3) \, dx - 3v^2(v \, dx + x \, dv) = 0$$
$$(1 + v^3 - 3v^3) \, dx - 3v^2 x \, dv = 0$$
$$(1 - 2v^3) \, dx = 3v^2 x \, dv$$

#### Step 4: Separate Variables
$$\frac{1}{x} \, dx = \frac{3v^2}{1 - 2v^3} \, dv$$

#### Step 5: Integrate Both Sides
$$\int \frac{1}{x} \, dx = \int \frac{3v^2}{1 - 2v^3} \, dv$$

On the right-hand side, substitute $w = 1 - 2v^3 \implies dw = -6v^2 \, dv \implies 3v^2 \, dv = -\frac{1}{2} \, dw$:
$$\ln|x| = -\frac{1}{2} \int \frac{dw}{w} = -\frac{1}{2} \ln|1 - 2v^3| + \ln C_1$$
$$\ln|x| + \frac{1}{2} \ln|1 - 2v^3| = \ln C_1$$
Multiply by 2:
$$2\ln|x| + \ln|1 - 2v^3| = 2\ln C_1 = \ln C$$
$$\ln|x^2(1 - 2v^3)| = \ln C \implies x^2(1 - 2v^3) = C$$

#### Step 6: Back-Substitute $v = \frac{y}{x}$
$$x^2 \left( 1 - 2\frac{y^3}{x^3} \right) = C \implies x^2 - \frac{2y^3}{x} = C \implies x^3 - 2y^3 = Cx$$

#### Step 7: Apply Initial Condition $y(1) = 1$
$$1^3 - 2(1^3) = C(1) \implies 1 - 2 = C \implies C = -1$$

Substitute $C = -1$:
$$x^3 - 2y^3 = -x \iff 2y^3 = x^3 + x$$
$$\boxed{y(x) = \sqrt[3]{\frac{x^3 + x}{2}}}$$

---

## Problem 5: Bacterial Growth Kinetics & Tripling Period

### Problem Statement
In a culture of bacteria, the rate of increase is proportional to the number present. If it is found that the number triples in 4 hours, how many times the initial population may be expected at the end of 12 hours?

### Complete Step-by-Step Solution

#### Step 1: Mathematical Model Formulation
Let $x(t)$ denote the population at time $t$ (in hours), and $x_0 = x(0)$ be the initial population:
$$\frac{dx}{dt} = kx$$

Separating and integrating:
$$\int \frac{dx}{x} = \int k \, dt \implies \ln|x| = kt + \ln C \implies x(t) = x_0 e^{kt}$$

#### Step 2: Apply the Tripling Condition at $t = 4$ hours
$$x(4) = 3x_0$$
$$x_0 e^{4k} = 3x_0 \implies e^{4k} = 3$$

#### Step 3: Evaluate at $t = 12$ hours
Notice that $12 = 3 \times 4$. Using properties of exponents:
$$x(12) = x_0 e^{12k} = x_0 \left( e^{4k} \right)^3$$

Substitute $e^{4k} = 3$:
$$x(12) = x_0 (3)^3 = 27 x_0$$

#### Step 4: Final Conclusion
$$\boxed{\text{At the end of 12 hours, the population will be } 27 \text{ times the original amount.}}$$

---

# Part II: Winter 2016 Midterm Examination II (Version A)

## Problem 1: Linear Independence via Wronskian & Trig Identities

### Problem Statement
Determine which system of functions is linearly independent and which is linearly dependent on $(0, \infty)$:
1. $S_1 = \left\{ 2, \, \frac{1}{x^2}, \, \frac{\ln x}{x^2} \right\}$
2. $S_2 = \left\{ \sin x, \, \cos(2x), \, 1 - \sin x - 2\sin^2 x \right\}$

### Complete Step-by-Step Solution

#### Analysis of $S_1$:
Let $f_1(x) = 2$, $f_2(x) = x^{-2}$, $f_3(x) = x^{-2}\ln x$. Compute the Wronskian:
$$W(x) = \begin{vmatrix} 2 & x^{-2} & x^{-2}\ln x \\ 0 & -2x^{-3} & x^{-3}(1 - 2\ln x) \\ 0 & 6x^{-4} & -x^{-4}(5 - 6\ln x) \end{vmatrix}$$

Expand along the first column:
$$W(x) = 2 \begin{vmatrix} -2x^{-3} & x^{-3}(1 - 2\ln x) \\ 6x^{-4} & -x^{-4}(5 - 6\ln x) \end{vmatrix}$$
$$W(x) = 2 \left[ (-2x^{-3})(-x^{-4}(5 - 6\ln x)) - (6x^{-4})(x^{-3}(1 - 2\ln x)) \right]$$
$$W(x) = 2 \left[ 2x^{-7}(5 - 6\ln x) - 6x^{-7}(1 - 2\ln x) \right]$$
$$W(x) = 2x^{-7} [10 - 12\ln x - 6 + 12\ln x] = 2x^{-7}(4) = 8x^{-7} > 0 \quad \forall x > 0$$
Since $W(x) \neq 0$, **$S_1$ is linearly independent**.

#### Analysis of $S_2$:
Let $f_1 = \sin x$, $f_2 = \cos(2x)$, $f_3 = 1 - \sin x - 2\sin^2 x$.  
Recall the double-angle trigonometric identity:
$$\cos(2x) = 1 - 2\sin^2 x$$

Substitute into $f_3$:
$$f_3(x) = (1 - 2\sin^2 x) - \sin x = \cos(2x) - \sin x = f_2(x) - f_1(x)$$

Rearranging:
$$f_1(x) - f_2(x) + f_3(x) = 0 \quad \text{for all } x$$
Because a non-trivial linear combination vanishes identically ($c_1 = 1, c_2 = -1, c_3 = 1$), **$S_2$ is linearly dependent**.

---

## Problem 2: Fourth-Order Linear ODE with Repeated Real Roots

### Problem Statement
Find the general solution of the differential equation:
$$16y^{(4)} - 72y'' + 81y = 0$$

### Complete Step-by-Step Solution

#### Step 1: Formulate the Auxiliary Equation
Let $y = e^{mx}$. Substituting gives:
$$16m^4 - 72m^2 + 81 = 0$$

#### Step 2: Factor as a Quadratic in $m^2$
$$(4m^2 - 9)^2 = 0$$
Factor each difference of squares:
$$\left[ (2m - 3)(2m + 3) \right]^2 = (2m - 3)^2 (2m + 3)^2 = 0$$

#### Step 3: Identify Roots and Multiplicities
- $m_1 = m_2 = \frac{3}{2}$ (real root, multiplicity 2)
- $m_3 = m_4 = -\frac{3}{2}$ (real root, multiplicity 2)

#### Step 4: Construct Fundamental Set of Solutions
- For $m = \frac{3}{2}$: $y_1(x) = e^{\frac{3}{2}x}$, $y_2(x) = x e^{\frac{3}{2}x}$
- For $m = -\frac{3}{2}$: $y_3(x) = e^{-\frac{3}{2}x}$, $y_4(x) = x e^{-\frac{3}{2}x}$

#### Step 5: General Solution
$$\boxed{y(x) = (C_1 + C_2 x)e^{\frac{3}{2}x} + (C_3 + C_4 x)e^{-\frac{3}{2}x}}$$

---

## Problem 3: Resonant Undetermined Coefficients IVP

### Problem Statement
Use the method of undetermined coefficients to solve the initial value problem:
$$y'' - 4y' = 2xe^{4x}, \quad y(0) = -\frac{1}{4}, \quad y'(0) = \frac{1}{8}$$

### Complete Step-by-Step Solution

#### Step 1: Solve the Homogeneous Equation
$$m^2 - 4m = m(m - 4) = 0 \implies m_1 = 0, \; m_2 = 4$$
$$y_c(x) = C_1 + C_2 e^{4x}$$

#### Step 2: Set Up Particular Solution Candidate $y_p(x)$
The forcing function is $g(x) = (2x)e^{4x}$. Normally, candidate would be $(Ax + B)e^{4x}$.  
However, $e^{4x}$ is already present in $y_c(x)$ (resonance). Multiply candidate by $x$:
$$y_p(x) = x(Ax + B)e^{4x} = (Ax^2 + Bx)e^{4x}$$

#### Step 3: Compute Derivatives
$$y_p'(x) = (2Ax + B)e^{4x} + 4(Ax^2 + Bx)e^{4x} = e^{4x} \left[ 4Ax^2 + (2A + 4B)x + B \right]$$
$$y_p''(x) = e^{4x} \left[ 16Ax^2 + (16A + 16B)x + 2A + 8B \right]$$

#### Step 4: Substitute into $y'' - 4y'$
$$y_p'' - 4y_p' = e^{4x} \left[ 8Ax + 2A + 4B \right] \equiv 2x e^{4x}$$

Equate coefficients:
$$8A = 2 \implies A = \frac{1}{4}$$
$$2A + 4B = 0 \implies 2\left(\frac{1}{4}\right) + 4B = 0 \implies 4B = -\frac{1}{2} \implies B = -\frac{1}{8}$$

Therefore:
$$y_p(x) = e^{4x} \left( \frac{1}{4}x^2 - \frac{1}{8}x \right)$$

#### Step 5: General Solution
$$y(x) = C_1 + C_2 e^{4x} + e^{4x} \left( \frac{1}{4}x^2 - \frac{1}{8}x \right)$$

#### Step 6: Apply Initial Conditions
$$y(0) = C_1 + C_2 = -\frac{1}{4}$$
Differentiate $y(x)$:
$$y'(x) = 4C_2 e^{4x} + 4e^{4x}\left(\frac{1}{4}x^2 - \frac{1}{8}x\right) + e^{4x}\left(\frac{1}{2}x - \frac{1}{8}\right)$$
At $x = 0$:
$$y'(0) = 4C_2 - \frac{1}{8} = \frac{1}{8} \implies 4C_2 = \frac{2}{8} = \frac{1}{4} \implies C_2 = \frac{1}{16}$$
$$C_1 = -\frac{1}{4} - C_2 = -\frac{4}{16} - \frac{1}{16} = -\frac{5}{16}$$

#### Step 7: Final Unique Solution
$$\boxed{y(x) = e^{4x} \left( \frac{1}{4}x^2 - \frac{1}{8}x + \frac{1}{16} \right) - \frac{5}{16}}$$

---

## Problem 4: Variation of Parameters Boundary Value Problem

### Problem Statement
Using the method of variation of parameters, solve the boundary value problem:
$$\frac{d^2y}{dx^2} + y = 2\sec^3 x, \quad y(0) = -2, \quad y\left(\frac{\pi}{4}\right) = 0$$

### Complete Step-by-Step Solution

#### Step 1: Homogeneous Solution and Wronskian
$$m^2 + 1 = 0 \implies m = \pm i \implies y_1 = \cos x, \; y_2 = \sin x$$
$$W(y_1, y_2) = \begin{vmatrix} \cos x & \sin x \\ -\sin x & \cos x \end{vmatrix} = \cos^2 x + \sin^2 x = 1$$

#### Step 2: Formulas for $u_1'(x)$ and $u_2'(x)$
$$u_1'(x) = -\frac{y_2 f(x)}{W} = -\frac{\sin x (2\sec^3 x)}{1} = -2\frac{\sin x}{\cos^3 x}$$
$$u_2'(x) = \frac{y_1 f(x)}{W} = \frac{\cos x (2\sec^3 x)}{1} = 2\sec^2 x$$

#### Step 3: Integrate to Find $u_1(x)$ and $u_2(x)$
$$u_1(x) = -2 \int \frac{\sin x}{\cos^3 x} \, dx = 2 \int (\cos x)^{-3} d(\cos x) = -\frac{1}{\cos^2 x} = -\sec^2 x$$
$$u_2(x) = 2 \int \sec^2 x \, dx = 2\tan x$$

#### Step 4: Particular Solution $y_p(x)$
$$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x) = (-\sec^2 x)(\cos x) + (2\tan x)(\sin x)$$
$$y_p(x) = -\sec x + 2\sin x \tan x$$

#### Step 5: General Solution
$$y(x) = C_1 \cos x + C_2 \sin x + 2\sin x \tan x - \sec x$$

#### Step 6: Apply Boundary Conditions
At $x = 0$:
$$y(0) = C_1(1) + C_2(0) + 0 - 1 = -2 \implies C_1 - 1 = -2 \implies C_1 = -1$$

At $x = \frac{\pi}{4}$:
$$y\left(\frac{\pi}{4}\right) = (-1)\frac{\sqrt{2}}{2} + C_2 \frac{\sqrt{2}}{2} + 2\left(\frac{\sqrt{2}}{2}\right)(1) - \sqrt{2} = 0$$
$$\frac{\sqrt{2}}{2} (C_2 - 1) + \sqrt{2} - \sqrt{2} = 0 \implies C_2 = 1$$

#### Step 7: Final Solution
$$\boxed{y(x) = \sin x - \cos x + 2\sin x \tan x - \sec x}$$

---

## Problem 5: Cauchy-Euler Complex Conjugate Equation

### Problem Statement
Solve the Cauchy-Euler differential equation:
$$x^2 \frac{d^2y}{dx^2} - 3x \frac{dy}{dx} + 13y = 0, \quad x > 0$$

### Complete Step-by-Step Solution

#### Step 1: Substitute $y = x^m$
$$y' = m x^{m-1}, \quad y'' = m(m-1)x^{m-2}$$
$$x^2 [m(m-1)x^{m-2}] - 3x [m x^{m-1}] + 13 x^m = 0$$
$$x^m \left[ m(m-1) - 3m + 13 \right] = 0$$

#### Step 2: Auxiliary Equation
$$m^2 - 4m + 13 = 0$$
Complete the square:
$$(m - 2)^2 + 9 = 0 \implies (m - 2)^2 = -9 \implies m = 2 \pm 3i$$

#### Step 3: Complex Roots Rule for Cauchy-Euler
For roots $m = \alpha \pm i\beta$, the basis solutions are $x^\alpha \cos(\beta \ln x)$ and $x^\alpha \sin(\beta \ln x)$.  
Here $\alpha = 2$ and $\beta = 3$:
$$\boxed{y(x) = x^2 \left[ C_1 \cos(3\ln x) + C_2 \sin(3\ln x) \right]}$$

---

## Bonus Problem: Asymptotic Stability at Infinity

### Problem Statement
For which real values of parameters $a$ and $b$ do all solutions of $y'' + ay' + by = 0$ approach 0 as $x \to \infty$?

### Complete Step-by-Step Solution
The auxiliary equation is $m^2 + am + b = 0$, with roots:
$$m_{1,2} = -\frac{a}{2} \pm \sqrt{\frac{a^2}{4} - b}$$

1. **Case 1: Complex Roots** ($b > \frac{a^2}{4}$):
   $$y(x) = e^{-\frac{a}{2}x} \left[ C_1 \cos(\omega x) + C_2 \sin(\omega x) \right]$$
   Approaches 0 as $x \to \infty$ if and only if the exponential decay rate is strictly positive: $-\frac{a}{2} < 0 \iff a > 0$. Since $b > a^2/4 > 0$, $b > 0$.

2. **Case 2: Repeated Real Root** ($b = \frac{a^2}{4}$):
   $$y(x) = (C_1 + C_2 x)e^{-\frac{a}{2}x}$$
   By L'Hôpital's Rule, $\lim_{x \to \infty} x e^{-\frac{a}{2}x} = 0$ if and only if $a > 0$. Since $b = a^2/4$, $b > 0$.

3. **Case 3: Distinct Real Roots** ($0 < b < \frac{a^2}{4}$):
   Both roots must be strictly negative:
   $$m_1 = -\frac{a}{2} + \sqrt{\frac{a^2}{4} - b} < 0 \iff \sqrt{\frac{a^2}{4} - b} < \frac{a}{2}$$
   Squaring requires $a > 0$ and $\frac{a^2}{4} - b < \frac{a^2}{4} \iff b > 0$.

#### Conclusion
$$\boxed{a > 0 \quad \text{and} \quad b > 0}$$

---

# Part III: Winter 2016 Midterm Examination II (Version B)

## Problem 1: Trigonometric Identity Dependence Analysis

### Problem Statement
Determine if $S = \left\{ 1, \, \sin(2x), \, (\sin x - \cos x)^2 \right\}$ is linearly independent or dependent.

### Solution
Expand the third function:
$$f_3(x) = (\sin x - \cos x)^2 = \sin^2 x - 2\sin x \cos x + \cos^2 x$$
Recall $\sin^2 x + \cos^2 x = 1$ and $2\sin x \cos x = \sin(2x)$:
$$f_3(x) = 1 - \sin(2x) = f_1(x) - f_2(x)$$
Rearranging gives $f_1(x) - f_2(x) - f_3(x) = 0$, so $\boxed{S \text{ is linearly dependent}}$.

---

## Problem 2: Fourth-Order Linear ODE (Real & Imaginary Roots)

### Problem Statement
Find the general solution of $y^{(4)} - 16y = 0$.

### Solution
Auxiliary equation:
$$m^4 - 16 = 0 \implies (m^2 - 4)(m^2 + 4) = 0 \implies (m - 2)(m + 2)(m - 2i)(m + 2i) = 0$$
Roots: $m = 2, -2, 2i, -2i$.
$$\boxed{y(x) = C_1 e^{2x} + C_2 e^{-2x} + C_3 \cos(2x) + C_4 \sin(2x)}$$

---

# Part IV: Sample Midterm Examination II

## Problem 1: Polynomial Basis Linear Dependence

### Problem Statement
Determine whether $f_1 = 1, f_2 = x, f_3 = x^2, f_4 = x^3, f_5 = 5x^3 + (x-2)^2$ are linearly independent on $(0, \infty)$.

### Solution
Expand $f_5(x)$:
$$f_5(x) = 5x^3 + x^2 - 4x + 4 = 5f_4(x) + f_3(x) - 4f_2(x) + 4f_1(x)$$
Since $f_5$ is an explicit linear combination of the first four polynomials, $\boxed{\text{The set is linearly dependent}}$.
