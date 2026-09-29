# ENGR 213: Applied Ordinary Differential Equations
# Quiz 1 Master Solutions & Comprehensive Theory Guide
**Concordia University · Department of Building, Civil & Environmental Engineering (BCEE)**  
**Coverage**: Quiz 1 Preparation (Textbook Sections 1.1, 1.2, 2.1, 2.2, 2.3 · Dr. Haghighat Lectures 1–3 · Tutorial 1)

---

## Table of Contents
1. [Part I: Official Tutorial 1 Handout Solutions](#part-i-official-tutorial-1-handout-solutions)
   - [Problem 1 · Verification of Solution Family ($y'' - 4y' + 4y = 0$)](#problem-1--verification-of-solution-family)
   - [Problem 2 · First-Order Non-Linear IVP ($y' = y - y^2, y(0) = -1/3$)](#problem-2--first-order-non-linear-ivp)
   - [Problem 3 · Second-Order Linear IVP ($y'' - y = 0, y(0) = 1, y'(0) = 2$)](#problem-3--second-order-linear-ivp)
   - [Problem 4 · Autonomous Phase Portrait & Stability ($\frac{dy}{dx} = y^2 - 3y$)](#problem-4--autonomous-phase-portrait--stability)
   - [Problem 5 · Autonomous Factorization & Concavity ($\frac{dy}{dx} = 10 + 3y - y^2$)](#problem-5--autonomous-factorization--concavity)
2. [Part II: Teacher Lecture Slide Core Exam Solutions](#part-ii-teacher-lecture-slide-core-exam-solutions)
   - [Problem 6 · Picard's Existence & Uniqueness Theorem & Failure Cases](#problem-6--picards-existence--uniqueness-theorem)
   - [Problem 7 · Second-Order Harmonic Oscillator IVP ($x'' + 16x = 0$)](#problem-7--second-order-harmonic-oscillator-ivp)
   - [Problem 8 · Autonomous Logistic Growth & Biological Equilibria](#problem-8--autonomous-logistic-growth)
   - [Problem 9 · Separable DE & Lost Singular Solutions ($\frac{dy}{dx} = y^2 - 4$)](#problem-9--separable-de--lost-singular-solutions)
   - [Problem 10 · Separable IVP & Domain Selection ($\frac{dy}{dx} = -x/y, y(4) = -3$)](#problem-10--separable-ivp--domain-selection)
3. [Part III: High-Probability Quiz & Homework Essentials](#part-iii-high-probability-quiz--homework-essentials)
   - [Problem 11 · Complete DE Classification Matrix](#problem-11--complete-de-classification-matrix)
   - [Problem 12 · First-Order Linear ODE via Integrating Factor ($x y' + 2y = 4x^2$)](#problem-12--first-order-linear-ode-via-integrating-factor)
4. [Part IV: Lecture 4 Exact Equations & Integrating Factors](#part-iv-lecture-4-exact-equations--integrating-factors)
   - [Problem 13 · Exact Differential Equation & IVP ($\frac{dy}{dx} = \frac{xy^2 - \cos x \sin x}{y(1-x^2)}, y(0)=2$)](#problem-13--exact-differential-equation--ivp)
   - [Problem 14 · Non-Exact ODE Made Exact via Integrating Factor ($xy dx + (2x^2+3y^2-20)dy = 0$)](#problem-14--non-exact-ode-made-exact-via-integrating-factor)

---

# Part I: Official Tutorial 1 Handout Solutions

---

### Problem 1 · Verification of Solution Family

#### Problem Statement
*(Tutorial 1 Handout · Section 1.1 Exercise 25)*  
Verify by direct differentiation that the two-parameter family of functions
$$y(x) = c_1 e^{2x} + c_2 x e^{2x}$$
is an explicit solution of the second-order linear differential equation
$$\frac{d^2 y}{dx^2} - 4 \frac{dy}{dx} + 4y = 0$$
on the interval $(-\infty, \infty)$. State the order of the equation and specify whether it is linear or non-linear.

---

#### Step-by-Step Solution

##### Step 1: Classification
* **Order**: The highest derivative present is $\frac{d^2 y}{dx^2}$, so this is a **second-order** ODE.
* **Linearity**: The dependent variable $y$ and its derivatives $y'$ and $y''$ appear only to the first power, have no products with each other (e.g. no $y y'$), and their coefficients are constants ($1, -4, 4$). Thus, the equation is **linear**.

##### Step 2: Compute the First Derivative $y'(x)$
Given:
$$y(x) = c_1 e^{2x} + c_2 x e^{2x}$$
Differentiate using the chain rule on the first term and the product rule on the second term:
$$\frac{d}{dx}\left[c_1 e^{2x}\right] = 2 c_1 e^{2x}$$
$$\frac{d}{dx}\left[c_2 x e^{2x}\right] = c_2 \left( \frac{d}{dx}[x] \cdot e^{2x} + x \cdot \frac{d}{dx}[e^{2x}] \right) = c_2 (e^{2x} + 2x e^{2x})$$
Summing these gives:
$$y'(x) = 2c_1 e^{2x} + c_2 e^{2x} + 2c_2 x e^{2x} = (2c_1 + c_2) e^{2x} + 2c_2 x e^{2x}$$

##### Step 3: Compute the Second Derivative $y''(x)$
Differentiate $y'(x)$:
$$y''(x) = \frac{d}{dx}\left[(2c_1 + c_2) e^{2x}\right] + 2c_2 \frac{d}{dx}\left[x e^{2x}\right]$$
$$= 2(2c_1 + c_2) e^{2x} + 2c_2 (e^{2x} + 2x e^{2x})$$
$$= (4c_1 + 2c_2) e^{2x} + 2c_2 e^{2x} + 4c_2 x e^{2x}$$
$$y''(x) = (4c_1 + 4c_2) e^{2x} + 4c_2 x e^{2x}$$

##### Step 4: Substitute into the Left-Hand Side (LHS) of the ODE
$$\text{LHS} = y'' - 4y' + 4y$$
Substitute $y$, $y'$, and $y''$:
$$\text{LHS} = \left[(4c_1 + 4c_2) e^{2x} + 4c_2 x e^{2x}\right] - 4\left[(2c_1 + c_2) e^{2x} + 2c_2 x e^{2x}\right] + 4\left[c_1 e^{2x} + c_2 x e^{2x}\right]$$
Group like terms in $e^{2x}$ and $x e^{2x}$:
$$\text{Term in } e^{2x}: \quad (4c_1 + 4c_2) - 4(2c_1 + c_2) + 4c_1 = 4c_1 + 4c_2 - 8c_1 - 4c_2 + 4c_1 = (4 - 8 + 4)c_1 + (4 - 4)c_2 = 0$$
$$\text{Term in } x e^{2x}: \quad 4c_2 - 4(2c_2) + 4c_2 = 4c_2 - 8c_2 + 4c_2 = (4 - 8 + 4)c_2 = 0$$
Therefore:
$$\text{LHS} = 0 \cdot e^{2x} + 0 \cdot x e^{2x} = 0 = \text{RHS}$$
Since this equality holds identically for all real numbers $x \in (-\infty, \infty)$ and for any arbitrary constants $c_1, c_2$, the function $y(x) = c_1 e^{2x} + c_2 x e^{2x}$ is an explicit two-parameter family of solutions. $\blacksquare$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Definition of a Solution**: A function $\phi(x)$ is a solution to an $n$-th order ODE on an interval $I$ if $\phi$ possesses at least $n$ continuous derivatives on $I$ and substituting $\phi$ and its derivatives into the ODE reduces it to an identity ($0 \equiv 0$).
> 2. **$n$-Parameter Families**: A linear ODE of order $n$ has a general solution containing exactly $n$ independent arbitrary constants. Here, order = 2, so the family has 2 parameters ($c_1, c_2$).
> 3. **Repeated Roots Intuition**: In Chapter 3, you will see that the characteristic equation for $y'' - 4y' + 4y = 0$ is $r^2 - 4r + 4 = (r - 2)^2 = 0$. The single repeated root $r = 2$ gives the first fundamental solution $y_1 = e^{2x}$. To find a second linearly independent solution, reduction of order multiplies by $x$, yielding $y_2 = x e^{2x}$.

> [!WARNING]
> **Concordia Exam Pitfalls & Grade Deduction Traps:**
> * **The Product Rule Omission**: Students frequently write $\frac{d}{dx}[x e^{2x}] = e^{2x}$ or $2x e^{2x}$. You **must** show both terms: $e^{2x} + 2x e^{2x}$.
> * **Lack of Grouping**: Do not just write "$= 0$" at the bottom of your page without explicitly factoring $e^{2x}$ and $x e^{2x}$. Concordia graders look specifically for the algebraic cancellation showing $(4 - 8 + 4) = 0$.
> * **Interval of Definition**: Exponential functions $e^{2x}$ and polynomials $x$ are infinitely differentiable everywhere. Always state the interval explicitly as $I = (-\infty, \infty)$ or $\mathbb{R}$.

---

### Problem 2 · First-Order Non-Linear IVP

#### Problem Statement
*(Tutorial 1 Handout · Section 1.2 Problem 1)*  
Given that $y(x) = \frac{1}{1 + c_1 e^{-x}}$ is a one-parameter family of solutions of the first-order differential equation
$$y' = y - y^2$$
(a) Find a solution of the first-order IVP consisting of this differential equation and the initial condition:
$$y(0) = -\frac{1}{3}$$
(b) Determine the domain and the exact, maximal interval of definition $I$ for this particular solution.

---

#### Step-by-Step Solution

##### Step 1: Apply the Initial Condition to Solve for $c_1$
We are given $y(0) = -\frac{1}{3}$. Substitute $x = 0$ and $y = -\frac{1}{3}$ into the given family of solutions:
$$-\frac{1}{3} = \frac{1}{1 + c_1 e^{-(0)}}$$
Since $e^0 = 1$:
$$-\frac{1}{3} = \frac{1}{1 + c_1}$$
Cross-multiply:
$$1 + c_1 = -3 \implies c_1 = -3 - 1 = -4$$

##### Step 2: Write the Particular Solution
Substitute $c_1 = -4$ back into the solution family:
$$y(x) = \frac{1}{1 - 4e^{-x}}$$

##### Step 3: Determine the Interval of Definition $I$
For a function to be a valid solution of an initial value problem, it must be continuous and differentiable on an open interval $I$ containing the initial point $x_0 = 0$.
The function $y(x)$ becomes undefined when its denominator equals zero:
$$1 - 4e^{-x} = 0 \implies 4e^{-x} = 1 \implies e^{-x} = \frac{1}{4} \implies e^x = 4$$
Taking the natural logarithm of both sides:
$$x = \ln(4) = 2\ln(2) \approx 1.3863$$
Thus, the domain of the function is all real numbers except $x = \ln 4$:
$$\text{Domain} = (-\infty, \ln 4) \cup (\ln 4, \infty)$$
However, by mathematical definition, the **interval of definition $I$ of an IVP must be a single connected interval** containing the initial value $x_0 = 0$.
Compare $x_0 = 0$ with the singularity $x = \ln 4$:
$$0 < \ln(4)$$
Therefore, the initial point $x = 0$ lies strictly inside the left interval:
$$I = (-\infty, \ln 4)$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Initial Value Problem (IVP)**: Finding a specific member of a family of curves that passes through a given coordinate point $(x_0, y_0)$.
> 2. **Interval of Definition ($I$)**: An ODE solution is NOT merely a formula; it is a pair $(\phi(x), I)$ where $I$ is a connected open interval on which $\phi(x)$ satisfies the ODE. A disconnected union of sets is never an interval of definition for an IVP.
> 3. **The Logistic / Bernoulli Structure**: The equation $y' = y - y^2$ is the standard autonomous logistic equation with $r=1, K=1$. When $y(0) = -1/3 < 0$, the population is negative (outside the physical carrying capacity), so the solution blows up to $-\infty$ in finite time at $x = \ln 4$.

> [!WARNING]
> **Concordia Exam Pitfalls & Grade Deduction Traps:**
> * **The Union Set Trap**: Writing $x \neq \ln 4$ or $(-\infty, \ln 4) \cup (\ln 4, \infty)$ as the answer to "interval of definition" will cost you 2 out of 5 marks! An interval of definition must be connected and contain $x_0$.
> * **Sign Error in Exponents**: Don't confuse $e^{-x} = 1/4$ with $e^x = 1/4$. Double-check: $e^{-x} = 1/4 \implies -x = \ln(1/4) = -\ln 4 \implies x = \ln 4$.

---

### Problem 3 · Second-Order Linear IVP

#### Problem Statement
*(Tutorial 1 Handout · Section 1.2 Problem 11)*  
Given that $y(x) = c_1 e^x + c_2 e^{-x}$ is a two-parameter family of solutions of the second-order differential equation
$$y'' - y = 0$$
Find a solution of the second-order IVP consisting of this differential equation and the given initial conditions:
$$y(0) = 1, \quad y'(0) = 2$$

---

#### Step-by-Step Solution

##### Step 1: Differentiate the General Solution
The general solution is:
$$y(x) = c_1 e^x + c_2 e^{-x}$$
Differentiate with respect to $x$:
$$y'(x) = c_1 e^x - c_2 e^{-x}$$

##### Step 2: Set Up the System of Linear Equations Using the Initial Conditions
Apply the first initial condition $y(0) = 1$:
$$y(0) = c_1 e^0 + c_2 e^0 = c_1 + c_2 = 1 \quad \text{--- (Equation 1)}$$
Apply the second initial condition $y'(0) = 2$:
$$y'(0) = c_1 e^0 - c_2 e^0 = c_1 - c_2 = 2 \quad \text{--- (Equation 2)}$$

##### Step 3: Solve the Linear System for $c_1$ and $c_2$
Add Equation (1) and Equation (2):
$$(c_1 + c_2) + (c_1 - c_2) = 1 + 2$$
$$2c_1 = 3 \implies c_1 = \frac{3}{2}$$
Subtract Equation (2) from Equation (1):
$$(c_1 + c_2) - (c_1 - c_2) = 1 - 2$$
$$2c_2 = -1 \implies c_2 = -\frac{1}{2}$$

##### Step 4: Formulate the Unique Particular Solution
Substitute $c_1 = \frac{3}{2}$ and $c_2 = -\frac{1}{2}$ into $y(x)$:
$$y(x) = \frac{3}{2} e^x - \frac{1}{2} e^{-x}$$
*(Alternative hyperbolic form: $y(x) = \cosh(x) + 2\sinh(x)$)*

##### Step 5: State the Interval of Definition
Since $e^x$ and $e^{-x}$ are continuous and infinitely differentiable on all of $\mathbb{R}$:
$$I = (-\infty, \infty)$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Second-Order IVP Requirements**: An $n$-th order linear ODE requires $n$ initial conditions specified at the **exact same point $x_0$** (e.g. $y(x_0)=y_0, y'(x_0)=y_1$) to uniquely determine the $n$ constants. If conditions were given at two different points (e.g. $y(0)=1, y(1)=2$), it would be a **Boundary Value Problem (BVP)**, which does not guarantee a unique solution.
> 2. **Superposition Principle**: For linear homogeneous equations, any linear combination of solutions $c_1 y_1 + c_2 y_2$ is also a solution.

> [!WARNING]
> **Concordia Exam Pitfalls & Grade Deduction Traps:**
> * **Forgetting the Negative Sign in $y'$**: $\frac{d}{dx}[e^{-x}] = -e^{-x}$. Missing this turns $c_1 - c_2 = 2$ into $c_1 + c_2 = 2$, which contradicts Equation 1 and makes the system inconsistent!
> * **Checking Your Work**: Always plug $x=0$ back into your final equation:
>   $y(0) = \frac{3}{2}(1) - \frac{1}{2}(1) = 1$ (Correct!)
>   $y'(0) = \frac{3}{2}(1) + \frac{1}{2}(1) = 2$ (Correct!)

---

### Problem 4 · Autonomous Phase Portrait & Stability

#### Problem Statement
*(Tutorial 1 Handout · Section 2.1 Problem 21)*  
Consider the autonomous first-order differential equation:
$$\frac{dy}{dx} = y^2 - 3y$$
(a) Find all critical points (equilibrium solutions).  
(b) Draw the one-dimensional phase line (phase portrait) showing the sign of $\frac{dy}{dx}$ and directional arrows.  
(c) Classify each critical point as asymptotically stable, unstable, or semi-stable.  
(d) By hand, sketch typical solution curves in the regions in the $xy$-plane determined by the graphs of the equilibrium solutions.

---

#### Step-by-Step Solution

##### Step 1: Find Critical Points
Set the autonomous rate function $f(y) = 0$:
$$f(y) = y^2 - 3y = y(y - 3) = 0$$
$$\implies y = 0 \quad \text{and} \quad y = 3$$
The horizontal equilibrium solutions are the constant functions:
$$y(x) \equiv 0 \quad \text{and} \quad y(x) \equiv 3$$

##### Step 2: Sign Analysis of $f(y)$ on the Sub-Intervals
The critical points divide the $y$-axis into three distinct intervals:
1. **Interval $(3, \infty)$**:
   * Pick test value $y = 4$: $f(4) = (4)^2 - 3(4) = 16 - 12 = +4 > 0$.
   * Since $y' > 0$, solutions are **increasing**. On the phase line, the arrow points **UP ($\uparrow$)**.
2. **Interval $(0, 3)$**:
   * Pick test value $y = 1$: $f(1) = (1)^2 - 3(1) = 1 - 3 = -2 < 0$.
   * Since $y' < 0$, solutions are **decreasing**. On the phase line, the arrow points **DOWN ($\downarrow$)**.
3. **Interval $(-\infty, 0)$**:
   * Pick test value $y = -1$: $f(-1) = (-1)^2 - 3(-1) = 1 + 3 = +4 > 0$.
   * Since $y' > 0$, solutions are **increasing**. On the phase line, the arrow points **UP ($\uparrow$)**.

##### Step 3: Construct the 1D Phase Line & Classify Stability

```
       y-axis            Sign of y'       Arrow       Classification
         │
         │  y > 3          f(y) > 0         ▲
         │                                  │
     ────┼──── y = 3 ───────────────────────●─────── UNSTABLE (Repeller / Source)
         │                                  │
         │  0 < y < 3      f(y) < 0         ▼
         │                                  │
     ────┼──── y = 0 ───────────────────────●─────── ASYMPTOTICALLY STABLE (Attractor / Sink)
         │                                  ▲
         │  y < 0          f(y) > 0         │
         │
```

* **At $y = 3$**: Solutions for $y > 3$ move upward away from 3 ($\uparrow$); solutions for $0 < y < 3$ move downward away from 3 ($\downarrow$). Because trajectories diverge away from $y = 3$ on both sides, **$y = 3$ is UNSTABLE (Repeller / Source)**.
* **At $y = 0$**: Solutions for $0 < y < 3$ move downward toward 0 ($\downarrow$); solutions for $y < 0$ move upward toward 0 ($\uparrow$). Because trajectories converge toward $y = 0$ from both sides, **$y = 0$ is ASYMPTOTICALLY STABLE (Attractor / Sink)**.

##### Step 4: Concavity Analysis & Solution Curve Sketching
To sketch realistic curves, find $y''$ using the chain rule:
$$y'' = \frac{d}{dx}[f(y)] = f'(y) \frac{dy}{dx} = f'(y) f(y)$$
$$f'(y) = \frac{d}{dy}[y^2 - 3y] = 2y - 3$$
$$y'' = (2y - 3)(y^2 - 3y) = (2y - 3)y(y - 3)$$
Setting $y'' = 0$ gives an **inflection point** at $y = \frac{3}{2} = 1.5$.
* In $(3, \infty)$: $(+) \cdot (+) \cdot (+) > 0 \implies y'' > 0$ (**Concave Up**). Solutions increase rapidly toward $+\infty$.
* In $(1.5, 3)$: $(+) \cdot (+) \cdot (-) < 0 \implies y'' < 0$ (**Concave Down**).
* In $(0, 1.5)$: $(-) \cdot (+) \cdot (-) > 0 \implies y'' > 0$ (**Concave Up**).
* In $(-\infty, 0)$: $(-) \cdot (-) \cdot (-) < 0 \implies y'' < 0$ (**Concave Down**). Solutions increase asymptotically toward the line $y = 0$ as $x \to \infty$.

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Autonomous Differential Equations**: Equations of the form $\frac{dy}{dx} = f(y)$ where the independent variable $x$ does not appear explicitly. This means slopes are identical along any horizontal line in the $xy$-plane!
> 2. **Derivative Test Shortcut for Stability**:
>    * If $f'(c) < 0 \implies$ Critical point $c$ is **Asymptotically Stable** (Attractor).
>    * If $f'(c) > 0 \implies$ Critical point $c$ is **Unstable** (Repeller).
>    * Quick check: $f'(y) = 2y - 3 \implies f'(0) = -3 < 0$ (Stable!), $f'(3) = 2(3) - 3 = +3 > 0$ (Unstable!). This 5-second check guarantees full marks.
> 3. **The No-Crossing Rule**: Because $f(y)$ and $f'(y)$ are smooth polynomials, Picard's Uniqueness Theorem holds everywhere. Therefore, **solution curves can never intersect each other, nor can they cross the equilibrium lines $y=0$ or $y=3$**.

> [!WARNING]
> **Concordia Exam Pitfalls & Grade Deduction Traps:**
> * **Arrow Direction Confusion**: Remember that on a phase line, an arrow points UP ($\uparrow$) when $dy/dx > 0$ (meaning $y$ is increasing), and DOWN ($\downarrow$) when $dy/dx < 0$ (meaning $y$ is decreasing). Never draw arrows horizontally!
> * **Neglecting Equilibrium Solutions**: When asked for the sketch, you must explicitly draw the horizontal dashed or solid equilibrium lines $y=0$ and $y=3$ first. Graders deduct marks if these asymptotes are missing.

---

### Problem 5 · Autonomous Factorization & Concavity

#### Problem Statement
*(Tutorial 1 Handout · Section 2.1 Problem 24)*  
Consider the autonomous first-order differential equation:
$$\frac{dy}{dx} = 10 + 3y - y^2$$
(a) Find all critical points.  
(b) Construct the 1D phase portrait and classify each critical point as asymptotically stable, unstable, or semi-stable.  
(c) Using $y'' = f'(y)f(y)$, determine the inflection point and the concavity behavior of the solution curves.  
(d) If an initial condition is given as $y(0) = 1$, determine the asymptotic limit $\lim_{x \to \infty} y(x)$ without solving the ODE.

---

#### Step-by-Step Solution

##### Step 1: Factor $f(y)$ to Find Critical Points
Set $f(y) = 0$:
$$10 + 3y - y^2 = 0 \implies -(y^2 - 3y - 10) = 0$$
$$-(y - 5)(y + 2) = (5 - y)(y + 2) = 0$$
$$\implies y = 5 \quad \text{and} \quad y = -2$$
The equilibrium solutions are $y(x) \equiv 5$ and $y(x) \equiv -2$.

##### Step 2: Sign Analysis of $f(y)$
1. **Region $y > 5$**:
   * Test $y = 6$: $f(6) = (5 - 6)(6 + 2) = (-1)(8) = -8 < 0 \implies$ Arrow points **DOWN ($\downarrow$)**.
2. **Region $-2 < y < 5$**:
   * Test $y = 0$: $f(0) = 10 + 0 - 0 = +10 > 0 \implies$ Arrow points **UP ($\uparrow$)**.
3. **Region $y < -2$**:
   * Test $y = -3$: $f(-3) = (5 - (-3))(-3 + 2) = (8)(-1) = -8 < 0 \implies$ Arrow points **DOWN ($\downarrow$)**.

##### Step 3: Phase Line & Classification
* **At $y = 5$**: Trajectories from below point UP ($\uparrow$), and trajectories from above point DOWN ($\downarrow$). Trajectories converge toward $y = 5$ from both directions.  
  $$\mathbf{y = 5 \text{ is ASYMPTOTICALLY STABLE (Attractor / Sink)}}$$
* **At $y = -2$**: Trajectories for $-2 < y < 5$ point UP ($\uparrow$), and trajectories for $y < -2$ point DOWN ($\downarrow$). Trajectories diverge away from $y = -2$ on both sides.  
  $$\mathbf{y = -2 \text{ is UNSTABLE (Repeller / Source)}}$$

*(Derivative test verification: $f'(y) = 3 - 2y \implies f'(5) = 3 - 10 = -7 < 0$ (Stable); $f'(-2) = 3 - 2(-2) = +7 > 0$ (Unstable).)*

##### Step 4: Inflection Point & Concavity
$$y'' = f'(y)f(y) = (3 - 2y)(10 + 3y - y^2) = -(2y - 3)(5 - y)(y + 2)$$
Setting $f'(y) = 0$:
$$3 - 2y = 0 \implies y = \frac{3}{2} = 1.5$$
The inflection point in the middle region occurs at $y = 1.5$.
* For $1.5 < y < 5$: $f'(y) < 0$ and $f(y) > 0 \implies y'' < 0$ (**Concave Down**).
* For $-2 < y < 1.5$: $f'(y) > 0$ and $f(y) > 0 \implies y'' > 0$ (**Concave Up**).

##### Step 5: Asymptotic Limit for $y(0) = 1$
The initial value $y(0) = 1$ falls strictly inside the interval $(-2, 5)$.
In this interval, $f(y) > 0$, so $y(x)$ is strictly increasing.
Since $y = 5$ is an asymptotically stable attractor and solution curves cannot cross equilibrium lines:
$$\lim_{x \to \infty} y(x) = 5$$
$$\lim_{x \to -\infty} y(x) = -2$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Quadratic Negative Sign Trap**: A common mistake is factoring $10 + 3y - y^2$ as $(y - 5)(y + 2)$. The coefficient of $y^2$ is $-1$, so the factors are $-(y - 5)(y + 2)$. Forgetting the minus sign completely reverses the stability classification!
> 2. **S-Shaped (Sigmoid) Curves**: Between the unstable source $y = -2$ and the stable sink $y = 5$, solutions exhibit a characteristic logistic "S" shape: they accelerate upward while concave up ($y < 1.5$), pass through the inflection point at $y = 1.5$ where growth rate is maximized, and then decelerate while concave down ($y > 1.5$) as they approach the carrying capacity $y = 5$.

---

# Part II: Teacher Lecture Slide Core Exam Solutions

---

### Problem 6 · Picard's Existence & Uniqueness Theorem

#### Problem Statement
*(Dr. Haghighat Lecture 2 · Slide 8)*  
Consider the first-order initial value problem:
$$\frac{dy}{dx} = x \sqrt{y}, \quad y(x_0) = y_0$$
(a) State the conditions of Picard's Existence and Uniqueness Theorem for a first-order IVP.  
(b) Explain why the theorem **fails** to guarantee uniqueness for the initial condition $y(0) = 0$. Show by direct substitution that both $y_1(x) \equiv 0$ and $y_2(x) = \frac{1}{16} x^4$ ($x \ge 0$) are valid solutions passing through $(0,0)$.  
(c) Does Picard's theorem guarantee a unique solution for the initial condition $y(2) = 1$? Justify your answer mathematically.

---

#### Step-by-Step Solution

##### Step 1: Formal Statement of Picard's Theorem
Let $R$ be a rectangular region in the $xy$-plane defined by $a \le x \le b,\; c \le y \le d$ that contains the point $(x_0, y_0)$ in its interior.
If:
1. $f(x, y)$ is **continuous** on $R$, and
2. $\frac{\partial f}{\partial y}$ is **continuous** on $R$,
then there exists an open interval $I_0 = (x_0 - h, x_0 + h)$ with $h > 0$ contained in $[a, b]$, on which there exists a **unique** function $y(x)$ that satisfies the initial value problem $\frac{dy}{dx} = f(x, y),\; y(x_0) = y_0$.

##### Step 2: Evaluation of the Functions for the Given ODE
Here:
$$f(x, y) = x y^{1/2}$$
* Continuity of $f$: $f(x, y)$ is continuous on the upper half-plane:
  $$\{(x, y) \in \mathbb{R}^2 \mid y \ge 0\}$$
Now compute the partial derivative with respect to $y$:
$$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}\left[x y^{1/2}\right] = x \cdot \frac{1}{2} y^{-1/2} = \frac{x}{2\sqrt{y}}$$
* Continuity of $\frac{\partial f}{\partial y}$: The term $\frac{x}{2\sqrt{y}}$ requires $y > 0$ to avoid division by zero. Thus, $\frac{\partial f}{\partial y}$ is continuous **only** on the open region:
  $$\{(x, y) \in \mathbb{R}^2 \mid y > 0\}$$
Along the line $y = 0$ (the $x$-axis), $\frac{\partial f}{\partial y}$ is undefined and therefore discontinuous.

##### Step 3: Analysis for Initial Condition $y(0) = 0$
The point $(x_0, y_0) = (0, 0)$ lies directly on the boundary $y = 0$.
Any open rectangle $R$ centered at $(0, 0)$ must contain points where $y \le 0$, which includes $y = 0$ where $\frac{\partial f}{\partial y}$ does not exist.
Since condition (2) of Picard's theorem is violated, **the theorem guarantees existence (since $f$ is continuous), but fails to guarantee uniqueness**.

##### Verification of Multiple Solutions Through $(0,0)$:
* **Candidate 1**: $y_1(x) \equiv 0$.
  * $y_1(0) = 0$.
  * $\frac{dy_1}{dx} = 0$.
  * $x \sqrt{y_1} = x \sqrt{0} = 0$.
  * $0 = 0 \implies$ Valid solution!
* **Candidate 2**: $y_2(x) = \frac{1}{16} x^4$ ($x \ge 0$).
  * $y_2(0) = \frac{1}{16}(0)^4 = 0$.
  * $\frac{dy_2}{dx} = \frac{4}{16} x^3 = \frac{1}{4} x^3$.
  * $x \sqrt{y_2} = x \sqrt{\frac{1}{16} x^4} = x \cdot \left(\frac{1}{4} x^2\right) = \frac{1}{4} x^3$.
  * $\frac{dy_2}{dx} = x \sqrt{y_2} \implies \frac{1}{4} x^3 = \frac{1}{4} x^3 \implies$ Valid solution!
Since $y_1(x) \neq y_2(x)$ for $x > 0$, **uniqueness is broken at $(0,0)$**.

##### Step 4: Analysis for Initial Condition $y(2) = 1$
Here $(x_0, y_0) = (2, 1)$.
The point $(2, 1)$ has $y_0 = 1 > 0$.
We can easily construct a rectangle $R$ around $(2, 1)$ that stays strictly above the $x$-axis, for instance:
$$R = \{(x, y) \mid 1 < x < 3, \; 0.5 < y < 1.5\}$$
On this rectangle:
1. $f(x, y) = x\sqrt{y}$ is a composition of continuous functions, hence **continuous**.
2. $\frac{\partial f}{\partial y} = \frac{x}{2\sqrt{y}}$ has no zero denominators because $y \ge 0.5 > 0$, hence **continuous**.
Because both conditions are satisfied on $R$, Picard's Theorem **guarantees that there exists a unique solution** to the IVP on some open interval containing $x_0 = 2$.

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Existence vs. Uniqueness**:
>    * Continuity of $f(x,y)$ alone guarantees that at least ONE solution exists (Peano's Theorem).
>    * Continuity of BOTH $f(x,y)$ and $\frac{\partial f}{\partial y}$ guarantees that PRECISELY ONE (unique) solution exists.
> 2. **Physical Meaning of Uniqueness Breaking**: If uniqueness breaks, solution curves can branch out or touch each other. Here, the non-trivial curve $y = \frac{1}{16}x^4$ tangentially touches the horizontal solution $y \equiv 0$ at $x = 0$.

> [!WARNING]
> **Concordia Exam Pitfalls & Grade Deduction Traps:**
> * **The "Theorem Proves No Solution" Error**: If $\frac{\partial f}{\partial y}$ is discontinuous, Picard's theorem is **inconclusive**; it does NOT say "a unique solution does not exist." It only says uniqueness is not *guaranteed*. You must state that explicitly to get full marks.
> * **Check Points Carefully**: When given $(x_0, y_0)$, always look immediately at $y_0$. If $y_0$ makes any denominator in $\frac{\partial f}{\partial y}$ zero, uniqueness is not guaranteed!

---

### Problem 7 · Second-Order Harmonic Oscillator IVP

#### Problem Statement
*(Dr. Haghighat Lecture 2 · Slide 5)*  
Given that $x(t) = c_1 \cos(4t) + c_2 \sin(4t)$ is the general solution of the second-order differential equation
$$x'' + 16x = 0$$
Solve the initial value problem with the initial conditions:
$$x\left(\frac{\pi}{2}\right) = -2, \quad x'\left(\frac{\pi}{2}\right) = 1$$

---

#### Step-by-Step Solution

##### Step 1: Differentiate $x(t)$
Given:
$$x(t) = c_1 \cos(4t) + c_2 \sin(4t)$$
Using the chain rule ($\frac{d}{dt}[4t] = 4$):
$$x'(t) = -4c_1 \sin(4t) + 4c_2 \cos(4t)$$

##### Step 2: Apply the First Initial Condition $x(\pi/2) = -2$
Substitute $t = \frac{\pi}{2}$:
$$4t = 4\left(\frac{\pi}{2}\right) = 2\pi$$
Recall the trigonometric values at $2\pi$:
$$\cos(2\pi) = 1, \quad \sin(2\pi) = 0$$
Substitute these into the equation for $x(t)$:
$$-2 = c_1 \cos(2\pi) + c_2 \sin(2\pi)$$
$$-2 = c_1(1) + c_2(0) \implies \mathbf{c_1 = -2}$$

##### Step 3: Apply the Second Initial Condition $x'(\pi/2) = 1$
Substitute $t = \frac{\pi}{2}$ into $x'(t)$:
$$1 = -4c_1 \sin(2\pi) + 4c_2 \cos(2\pi)$$
$$1 = -4c_1(0) + 4c_2(1)$$
$$1 = 4c_2 \implies \mathbf{c_2 = \frac{1}{4}}$$

##### Step 4: Write the Final Particular Solution
$$x(t) = -2\cos(4t) + \frac{1}{4}\sin(4t)$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Harmonic Motion**: The ODE $x'' + \omega^2 x = 0$ represents undamped simple harmonic motion with angular frequency $\omega = \sqrt{16} = 4\text{ rad/s}$ and period $T = \frac{2\pi}{\omega} = \frac{\pi}{2}\text{ s}$.
> 2. **Evaluation at Periodic Intervals**: Notice that $t = \pi/2$ corresponds to exactly one full period $T$. At $t = T$, the cosine term returns to its peak ($1$) and sine is at its zero crossing ($0$), which decouples the system of equations and allows $c_1$ and $c_2$ to be solved instantly!

---

### Problem 8 · Autonomous Logistic Growth

#### Problem Statement
*(Dr. Haghighat Lecture 1 Slide 6 & Lecture 2 Slide 15)*  
The population dynamics of a species in a constrained ecosystem is modeled by the autonomous differential equation:
$$\frac{dP}{dt} = r P\left(1 - \frac{P}{K}\right)$$
where $r > 0$ is the intrinsic growth rate and $K > 0$ is the carrying capacity.  
(a) Identify the critical points.  
(b) Construct the phase portrait and classify the stability of each equilibrium point.  
(c) Describe the asymptotic behavior of $P(t)$ as $t \to \infty$ for:
1. An initial population $0 < P(0) < K$.
2. An initial population $P(0) > K$.

---

#### Step-by-Step Solution

##### Step 1: Critical Points
Set $f(P) = 0$:
$$r P\left(1 - \frac{P}{K}\right) = 0$$
Since $r > 0$, this yields:
$$P = 0 \quad \text{and} \quad P = K$$

##### Step 2: Sign of $\frac{dP}{dt}$ in Each Region
1. **$P > K$**: $P > 0$, but $\left(1 - \frac{P}{K}\right) < 0 \implies \frac{dP}{dt} < 0$. Trajectories point **DOWN ($\downarrow$)**.
2. **$0 < P < K$**: $P > 0$ and $\left(1 - \frac{P}{K}\right) > 0 \implies \frac{dP}{dt} > 0$. Trajectories point **UP ($\uparrow$)**.
3. **$P < 0$**: (Unphysical for population, but mathematically): $P < 0$ and $\left(1 - \frac{P}{K}\right) > 0 \implies \frac{dP}{dt} < 0$. Trajectories point **DOWN ($\downarrow$)**.

##### Step 3: Phase Line & Stability Classification
* **At $P = 0$**: Trajectories move away from $0$ (downward for $P < 0$, upward for $P > 0$).  
  $$\mathbf{P = 0 \text{ is UNSTABLE (Repeller)}}$$
* **At $P = K$**: Trajectories move upward toward $K$ from below, and downward toward $K$ from above.  
  $$\mathbf{P = K \text{ is ASYMPTOTICALLY STABLE (Attractor)}}$$

##### Step 4: Long-Term Behavior Analysis
1. **If $0 < P(0) < K$**:
   * Since $\frac{dP}{dt} > 0$, the population monotonically increases.
   * As $t \to \infty$, the trajectory approaches the stable equilibrium:
     $$\lim_{t \to \infty} P(t) = K$$
   * The growth accelerates until the inflection point $P = K/2$, after which resource limitations cause growth to decelerate.
2. **If $P(0) > K$**:
   * Since $\frac{dP}{dt} < 0$, the population exceeds the carrying capacity (overcrowding, food scarcity) and monotonically decreases.
   * As $t \to \infty$:
     $$\lim_{t \to \infty} P(t) = K$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Carrying Capacity ($K$)**: The maximum sustainable population supported by the environment.
> 2. **Inflection Point Derivation**:
>    $$\frac{d^2 P}{dt^2} = \frac{d}{dP}\left[rP - \frac{r}{K}P^2\right] \frac{dP}{dt} = \left(r - \frac{2r}{K}P\right) \frac{dP}{dt} = r\left(1 - \frac{2P}{K}\right)\frac{dP}{dt}$$
>    Setting $\frac{d^2 P}{dt^2} = 0$ for non-equilibrium solutions gives $1 - \frac{2P}{K} = 0 \implies P = \frac{K}{2}$. The maximum population growth rate occurs exactly at half of the carrying capacity.

---

### Problem 9 · Separable DE & Lost Singular Solutions

#### Problem Statement
*(Dr. Haghighat Lecture 3 · Slide 6)*  
Consider the first-order differential equation:
$$\frac{dy}{dx} = y^2 - 4$$
(a) Identify all constant equilibrium solutions before separating variables.  
(b) Using separation of variables and partial fraction decomposition, obtain the one-parameter family of solutions.  
(c) Determine whether any equilibrium solution is a **singular (lost) solution** that cannot be obtained from the general family for any finite real constant $c$.

---

#### Step-by-Step Solution

##### Step 1: Find Constant Solutions
Before dividing by $(y^2 - 4)$, find where it vanishes:
$$y^2 - 4 = 0 \implies (y - 2)(y + 2) = 0 \implies y = 2 \quad \text{and} \quad y = -2$$
Both $y(x) \equiv 2$ and $y(x) \equiv -2$ are valid constant solutions.

##### Step 2: Separate Variables (for $y \neq \pm 2$)
$$\frac{dy}{y^2 - 4} = dx$$

##### Step 3: Partial Fraction Decomposition
$$\frac{1}{y^2 - 4} = \frac{1}{(y - 2)(y + 2)} = \frac{A}{y - 2} + \frac{B}{y + 2}$$
$$1 = A(y + 2) + B(y - 2)$$
* Setting $y = 2$: $1 = A(4) \implies A = \frac{1}{4}$
* Setting $y = -2$: $1 = B(-4) \implies B = -\frac{1}{4}$
Thus:
$$\frac{1}{4}\left(\frac{1}{y - 2} - \frac{1}{y + 2}\right) dy = dx$$

##### Step 4: Integrate Both Sides
$$\frac{1}{4}\int \left(\frac{1}{y - 2} - \frac{1}{y + 2}\right) dy = \int dx$$
$$\frac{1}{4}\left(\ln|y - 2| - \ln|y + 2|\right) = x + C_1$$
Multiply by 4 and combine logarithms:
$$\ln\left|\frac{y - 2}{y + 2}\right| = 4x + 4C_1$$
Exponentiate:
$$\left|\frac{y - 2}{y + 2}\right| = e^{4C_1} e^{4x}$$
Remove absolute values by defining $c = \pm e^{4C_1} \neq 0$:
$$\frac{y - 2}{y + 2} = c e^{4x}$$

##### Step 5: Solve Explicitly for $y(x)$
$$y - 2 = c e^{4x}(y + 2) = c e^{4x} y + 2c e^{4x}$$
$$y - c e^{4x} y = 2 + 2c e^{4x}$$
$$y(1 - c e^{4x}) = 2(1 + c e^{4x})$$
$$y(x) = \frac{2(1 + c e^{4x})}{1 - c e^{4x}}$$

##### Step 6: Test Equilibrium Solutions for Singular Status
* **Test $y = 2$**:
  If we set $c = 0$ in the formula:
  $$y(x) = \frac{2(1 + 0)}{1 - 0} = 2$$
  Since setting the arbitrary constant $c = 0$ reproduces $y = 2$, this solution is **included in the family**.
* **Test $y = -2$**:
  Can $y(x) = -2$ for some real number $c$?
  $$\frac{2(1 + c e^{4x})}{1 - c e^{4x}} = -2$$
  $$2(1 + c e^{4x}) = -2(1 - c e^{4x})$$
  $$1 + c e^{4x} = -1 + c e^{4x}$$
  Subtracting $c e^{4x}$ from both sides yields:
  $$1 = -1 \quad \text{(Contradiction!)}$$
  No finite real constant $c$ can ever generate the solution $y(x) \equiv -2$ (it corresponds to the formal limit $c \to \infty$).
  $$\mathbf{y(x) \equiv -2 \text{ is a SINGULAR (LOST) SOLUTION}}$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Singular Solution Definition**: A solution to an ODE that cannot be obtained from the general $n$-parameter family by assigning any finite real values to the constants.
> 2. **Where Lost Solutions Come From**: In step 2, dividing by $(y^2 - 4)$ is mathematically invalid when $y = \pm 2$. Thus, those solutions are stripped away from the algebra and must be tested manually at the end.

> [!WARNING]
> **Concordia Exam Pitfalls & Grade Deduction Traps:**
> * **The Partial Fractions Omission**: Don't guess the integral of $\frac{1}{y^2 - 4}$. Writing $\arctan$ or $\ln(y^2-4)$ is a severe error. You must use partial fractions: $\frac{1}{4}\ln|\frac{y-2}{y+2}|$.
> * **Absolute Values**: Always maintain absolute values $\ln|\dots|$ until you absorb the $\pm$ into the constant $c = \pm e^{4C_1}$.

---

### Problem 10 · Separable IVP & Explicit Branch Selection

#### Problem Statement
*(Dr. Haghighat Lecture 3 · Slide 5)*  
Solve the initial value problem:
$$\frac{dy}{dx} = -\frac{x}{y}, \quad y(4) = -3$$
(a) Find the explicit particular solution $y(x)$, explaining clearly how the initial condition determines the choice of sign ($\pm$).  
(b) State the geometric curve represented by the implicit family.  
(c) Determine the maximal open interval of definition $I$ on which this particular solution is valid and differentiable.

---

#### Step-by-Step Solution

##### Step 1: Separate Variables & Integrate
$$y \, dy = -x \, dx$$
$$\int y \, dy = -\int x \, dx$$
$$\frac{1}{2}y^2 = -\frac{1}{2}x^2 + C_1$$
Multiply by 2:
$$x^2 + y^2 = 2C_1 = C$$

##### Step 2: Determine $C$ Using the Initial Condition
Substitute $x_0 = 4$ and $y_0 = -3$:
$$(4)^2 + (-3)^2 = C$$
$$16 + 9 = C \implies C = 25$$
The implicit relation is the circle:
$$x^2 + y^2 = 25$$

##### Step 3: Solve Explicitly for $y(x)$ and Select the Sign Branch
$$y^2 = 25 - x^2 \implies y(x) = \pm \sqrt{25 - x^2}$$
Since the initial condition specifies $y(4) = -3$, which is strictly **negative**, we **must choose the negative branch**:
$$y(x) = -\sqrt{25 - x^2}$$
*(Verification: $y(4) = -\sqrt{25 - 16} = -\sqrt{9} = -3$. If you chose $+$, you would get $+3 \neq -3$.)*

##### Step 4: Determine the Maximal Interval of Definition $I$
For $y(x) = -\sqrt{25 - x^2}$ to be real, we require $25 - x^2 \ge 0 \implies -5 \le x \le 5$.
However, in the original differential equation:
$$\frac{dy}{dx} = -\frac{x}{y}$$
The dependent variable $y$ appears in the denominator! At $x = \pm 5$, $y = 0$, which causes division by zero.
Geometrically, the circle has **vertical tangents** ($\frac{dy}{dx} \to \pm \infty$) at $x = -5$ and $x = 5$.
By definition, a solution to a differential equation must be differentiable on its interval of definition.
Therefore, the boundary points must be excluded, giving the **open interval**:
$$I = (-5, 5)$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Explicit vs. Implicit Solutions**: An implicit relation like $x^2 + y^2 = 25$ defines two distinct functions: the upper hemisphere $y = +\sqrt{25-x^2}$ and the lower hemisphere $y = -\sqrt{25-x^2}$. The initial condition uniquely selects which hemisphere represents the physical trajectory.
> 2. **Differentiability Requirement**: The definition of an ODE solution requires $\frac{dy}{dx}$ to exist at every point in $I$. Thus, endpoints with vertical slopes can never be included in $I$.

---

# Part III: High-Probability Quiz & Homework Essentials

---

### Problem 11 · Complete DE Classification Matrix

#### Problem Statement
*(Textbook Section 1.1 Assigned Problems)*  
Classify each differential equation by Type, Order, Linearity, and identify the dependent and independent variables.

---

#### Solution Table

| Equation | Type | Order | Linearity | Dependent Variable | Independent Variable | Non-Linear Reason (if applicable) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **(a)** $(1 - x) y'' - 4x y' + 5y = \cos x$ | **ODE** | **2** | **Linear** | $y$ | $x$ | N/A (coefficients depend only on $x$) |
| **(b)** $\frac{d^3 y}{dx^3} + y \frac{dy}{dx} = e^x$ | **ODE** | **3** | **Non-Linear** | $y$ | $x$ | Product of dependent variable and derivative: $y \frac{dy}{dx}$ |
| **(c)** $t^5 y^{(4)} - t^3 y'' + 6y = 0$ | **ODE** | **4** | **Linear** | $y$ | $t$ | N/A ($y$ and derivatives are linear; powers are on $t$) |
| **(d)** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ | **PDE** | **2** | **Linear** | $u$ | $x, y$ | N/A (Laplace equation) |
| **(e)** $\frac{dy}{dx} = \sqrt{1 + y^2}$ | **ODE** | **1** | **Non-Linear** | $y$ | $x$ | Non-linear radical function of $y$: $\sqrt{1+y^2}$ |

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **The 3 Golden Rules of Linearity:**
> A differential equation in $y(x)$ is **linear** if and only if it can be written as:
> $$a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x)$$
> 1. $y$ and every derivative $y', y'', \dots$ appear strictly to the **first power** ($y^1$).
> 2. There are **no products** of $y$ with itself or its derivatives (e.g. $y y'$, $(y')^2$, $y y''$).
> 3. $y$ and its derivatives are **not enclosed in transcendental functions** (e.g. $\sin(y), e^y, \ln(y), \sqrt{y}, \frac{1}{y}$).
> 
> *Crucial*: Powers or functions of the independent variable $x$ (like $x^5$, $\cos x$, $e^x$) have **zero impact** on linearity! Equation (c) has $t^5$, but it is 100% linear because $t$ is independent.

---

### Problem 12 · First-Order Linear ODE via Integrating Factor

#### Problem Statement
*(Dr. Haghighat Lecture 3 Slide 12 & Textbook Section 2.3)*  
Find the unique particular solution of the initial value problem:
$$x \frac{dy}{dx} + 2y = 4x^2, \quad y(1) = 2$$
(a) Put the equation in standard form and identify $P(x)$ and $Q(x)$.  
(b) Compute the integrating factor $\mu(x)$.  
(c) Derive the general solution $y(x)$.  
(d) Find the particular solution and state the maximal interval of definition $I$.

---

#### Step-by-Step Solution

##### Step 1: Put in Standard Canonical Form
The standard form for a first-order linear ODE is:
$$\frac{dy}{dx} + P(x) y = Q(x)$$
Divide through by the leading coefficient $x$ (for $x \neq 0$):
$$\frac{dy}{dx} + \frac{2}{x} y = 4x$$
Here:
$$P(x) = \frac{2}{x}, \quad Q(x) = 4x$$

##### Step 2: Compute the Integrating Factor $\mu(x)$
$$\mu(x) = e^{\int P(x) dx} = e^{\int \frac{2}{x} dx} = e^{2\ln|x|} = e^{\ln(|x|^2)} = e^{\ln(x^2)} = x^2$$

##### Step 3: Multiply the Standard Form by $\mu(x)$
$$x^2 \left(\frac{dy}{dx} + \frac{2}{x} y\right) = x^2 (4x)$$
$$x^2 \frac{dy}{dx} + 2x y = 4x^3$$
Notice that the left-hand side is the exact product rule expansion of $\frac{d}{dx}[\mu(x) y]$:
$$\frac{d}{dx}\left[x^2 y\right] = 4x^3$$

##### Step 4: Integrate Both Sides
$$\int \frac{d}{dx}\left[x^2 y\right] dx = \int 4x^3 dx$$
$$x^2 y = x^4 + C$$
Divide by $x^2$:
$$y(x) = x^2 + \frac{C}{x^2}$$

##### Step 5: Apply the Initial Condition $y(1) = 2$
Substitute $x = 1, y = 2$:
$$2 = (1)^2 + \frac{C}{(1)^2} = 1 + C \implies C = 2 - 1 = 1$$
Particular solution:
$$\mathbf{y(x) = x^2 + \frac{1}{x^2} = x^2 + x^{-2}}$$

##### Step 6: Interval of Definition $I$
The coefficient $P(x) = \frac{2}{x}$ has a discontinuity at $x = 0$.
The initial condition is given at $x_0 = 1 > 0$.
By the Existence and Uniqueness Theorem for linear equations, the solution exists and is unique on the largest interval containing $x_0 = 1$ on which both $P(x)$ and $Q(x)$ are continuous.
$$\mathbf{I = (0, \infty)}$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Why the Integrating Factor Works**: The integrating factor $\mu(x)$ converts the sum $\mu y' + \mu P y$ into the derivative of a single product $(\mu y)'$ by forcing $\mu' = P \mu \implies \frac{\mu'}{\mu} = P \implies \ln \mu = \int P dx$.
> 2. **Standard Form Rule**: NEVER calculate $\mu(x) = e^{\int 2 dx} = e^{2x}$. You **must** divide by the leading coefficient first! Failing to divide by $x$ is the single most common error in Section 2.3.
> 3. **Logarithm Exponent Law**: $e^{a\ln x} = e^{\ln(x^a)} = x^a$. A common mistake is writing $e^{2\ln x} = 2e^{\ln x} = 2x$. The coefficient 2 must move inside the log as a power ($x^2$).

---

# Part IV: Lecture 4 Exact Equations & Integrating Factors (Quiz Cutoff Topic)

---

### Problem 13 · Exact Differential Equation & Initial Value Problem

#### Problem Statement
*(Dr. Haghighat Lecture 4 · Slide 9 & Textbook Section 2.4)*  
Consider the first-order initial value problem:
$$\frac{dy}{dx} = \frac{xy^2 - \cos x \sin x}{y(1 - x^2)}, \quad y(0) = 2$$
(a) Rewrite the differential equation in standard differential form $M(x, y) \, dx + N(x, y) \, dy = 0$ and prove that it satisfies the criterion for an exact differential.  
(b) Derive the implicit one-parameter family of solutions $\psi(x, y) = C$ by integrating with respect to $x$ and determining the function of integration $g(y)$.  
(c) Apply the initial condition $y(0) = 2$ to find the constant $C$.  
(d) Solve explicitly for $y(x)$, justifying your choice of branch ($\pm$), and state the valid interval of definition $I$ containing $x_0 = 0$.

---

#### Step-by-Step Solution

##### Step 1: Put in Differential Form $M(x, y) \, dx + N(x, y) \, dy = 0$
Cross-multiply the differential equation:
$$y(1 - x^2) \, dy = (xy^2 - \cos x \sin x) \, dx$$
Rearrange all terms to the left-hand side:
$$(\cos x \sin x - xy^2) \, dx + y(1 - x^2) \, dy = 0$$
Identify $M(x, y)$ and $N(x, y)$:
$$M(x, y) = \cos x \sin x - xy^2$$
$$N(x, y) = y(1 - x^2) = y - x^2 y$$

##### Step 2: Test Criterion for Exactness
Compute the partial derivative of $M$ with respect to $y$ (treating $x$ as constant):
$$\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}[\cos x \sin x - xy^2] = 0 - 2xy = -2xy$$
Compute the partial derivative of $N$ with respect to $x$ (treating $y$ as constant):
$$\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}[y - x^2 y] = 0 - 2xy = -2xy$$
Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} = -2xy$ throughout the domain, the differential form is **strictly exact**.

##### Step 3: Integrate $\frac{\partial \psi}{\partial x} = M(x, y)$ to Find Potential Function $\psi(x, y)$
$$\psi(x, y) = \int M(x, y) \, dx + g(y) = \int (\cos x \sin x - xy^2) \, dx + g(y)$$
Evaluate each integral with respect to $x$:
* For $\int \cos x \sin x \, dx$: let $u = \sin x$, $du = \cos x \, dx \implies \int u \, du = \frac{1}{2} u^2 = \frac{1}{2} \sin^2 x$.
* For $\int (-xy^2) \, dx$: treating $y$ as constant, $-y^2 \int x \, dx = -\frac{1}{2} x^2 y^2$.
$$\psi(x, y) = \frac{1}{2}\sin^2 x - \frac{1}{2} x^2 y^2 + g(y)$$

##### Step 4: Differentiate with Respect to $y$ and Equate to $N(x, y)$
$$\frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}\left[\frac{1}{2}\sin^2 x - \frac{1}{2} x^2 y^2 + g(y)\right] = 0 - x^2 y + g'(y)$$
Equate to $N(x, y) = y - x^2 y$:
$$-x^2 y + g'(y) = y - x^2 y$$
Subtract $-x^2 y$ from both sides:
$$g'(y) = y$$
Integrate with respect to $y$:
$$g(y) = \int y \, dy = \frac{1}{2} y^2$$

##### Step 5: State the General Implicit Solution
Substitute $g(y)$ back into $\psi(x, y)$:
$$\psi(x, y) = \frac{1}{2}\sin^2 x - \frac{1}{2} x^2 y^2 + \frac{1}{2} y^2 = C_1$$
Multiply through by 2 to clear fractions:
$$\sin^2 x - x^2 y^2 + y^2 = C$$
Factor $y^2$ from the second and third terms:
$$y^2(1 - x^2) + \sin^2 x = C$$

##### Step 6: Apply Initial Condition $y(0) = 2$
Substitute $x = 0$ and $y = 2$:
$$(2)^2 (1 - 0^2) + \sin^2(0) = C$$
$$4(1) + 0 = C \implies C = 4$$
The particular implicit solution is:
$$y^2(1 - x^2) + \sin^2 x = 4$$

##### Step 7: Isolate Explicit Solution $y(x)$ and Interval of Definition
Isolate $y^2$:
$$y^2(1 - x^2) = 4 - \sin^2 x$$
$$y^2 = \frac{4 - \sin^2 x}{1 - x^2}$$
Take square roots:
$$y(x) = \pm \sqrt{\frac{4 - \sin^2 x}{1 - x^2}}$$
Since the initial condition requires $y(0) = +2 > 0$, we select the **positive square root branch**:
$$\mathbf{y(x) = \sqrt{\frac{4 - \sin^2 x}{1 - x^2}}}$$

**Interval of Definition $I$**:
The denominator vanishes when $1 - x^2 = 0 \implies x = \pm 1$.
The initial condition is specified at $x_0 = 0 \in (-1, 1)$.
On the interval $(-1, 1)$, the denominator $1 - x^2 > 0$.
Furthermore, since $0 \le \sin^2 x \le 1$, the numerator satisfies $4 - \sin^2 x \ge 3 > 0$, ensuring the radicand is strictly positive.
Therefore, the maximal continuous interval of definition is:
$$\mathbf{I = (-1, 1)}$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **Potential Function Concept**: An exact equation represents the level curves $\psi(x, y) = C$ of a 3D surface. The total differential is $d\psi = \frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy = 0$, which implies $\psi(x, y) = C$.
> 2. **Symmetry of Mixed Partials (Clairaut's Theorem)**: $\frac{\partial M}{\partial y} = \frac{\partial^2 \psi}{\partial y \partial x}$ and $\frac{\partial N}{\partial x} = \frac{\partial^2 \psi}{\partial x \partial y}$. Continuity guarantees that mixed partials are equal, which is why $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ is both necessary and sufficient.
> 3. **The $g(y)$ Disappearance Verification**: When you equate $\frac{\partial \psi}{\partial y} = N(x, y)$, any terms containing $x$ MUST cancel out completely! If you are left with an $x$ inside $g'(y)$, you either made an algebra error when testing exactness or made an integration error in Step 3.

---

### Problem 14 · Non-Exact ODE Made Exact via Integrating Factor

#### Problem Statement
*(Dr. Haghighat Lecture 4 · Slides 10–11 & Textbook Section 2.4)*  
Consider the differential equation:
$$xy \, dx + (2x^2 + 3y^2 - 20) \, dy = 0$$
(a) Show by calculating $\frac{\partial M}{\partial y}$ and $\frac{\partial N}{\partial x}$ that the equation is **not exact**.  
(b) Evaluate both potential single-variable integrating factor criteria:
$$\frac{M_y - N_x}{N} \quad \text{and} \quad \frac{N_x - M_y}{M}$$
State which expression depends solely on a single variable, and derive the corresponding integrating factor $\mu$.  
(c) Multiply the entire differential equation by $\mu$, verify that the resulting equation is strictly exact, and find the general implicit solution $\psi(x, y) = C$.

---

#### Step-by-Step Solution

##### Step 1: Identify $M, N$ and Test for Exactness
$$M(x, y) = xy$$
$$N(x, y) = 2x^2 + 3y^2 - 20$$
Compute partial derivatives:
$$\frac{\partial M}{\partial y} = x$$
$$\frac{\partial N}{\partial x} = 4x$$
Since $\frac{\partial M}{\partial y} = x \neq 4x = \frac{\partial N}{\partial x}$, the equation is **not exact**.

##### Step 2: Test Integrating Factor Formulas
###### Test 1 (Function of $x$ alone?):
$$\frac{M_y - N_x}{N} = \frac{x - 4x}{2x^2 + 3y^2 - 20} = \frac{-3x}{2x^2 + 3y^2 - 20}$$
This expression depends on both $x$ and $y$. No single-variable integrating factor $\mu(x)$ exists.

###### Test 2 (Function of $y$ alone?):
$$\frac{N_x - M_y}{M} = \frac{4x - x}{xy} = \frac{3x}{xy} = \frac{3}{y}$$
This expression depends **solely on $y$**!

##### Step 3: Compute the Integrating Factor $\mu(y)$
$$\mu(y) = e^{\int \left(\frac{N_x - M_y}{M}\right) dy} = e^{\int \frac{3}{y} \, dy} = e^{3\ln|y|} = e^{\ln(|y|^3)} = y^3$$
*(Note: Choosing the positive branch $\mu(y) = y^3$ suffices to make the equation exact).*

##### Step 4: Multiply the Original Equation by $\mu(y) = y^3$
$$y^3 [xy \, dx + (2x^2 + 3y^2 - 20) \, dy] = 0$$
$$(x y^4) \, dx + (2x^2 y^3 + 3y^5 - 20y^3) \, dy = 0$$
Now define the new coefficient functions:
$$M_{new}(x, y) = x y^4$$
$$N_{new}(x, y) = 2x^2 y^3 + 3y^5 - 20y^3$$

Verify exactness of the new equation:
$$\frac{\partial M_{new}}{\partial y} = \frac{\partial}{\partial y}[x y^4] = 4x y^3$$
$$\frac{\partial N_{new}}{\partial x} = \frac{\partial}{\partial x}[2x^2 y^3 + 3y^5 - 20y^3] = 4x y^3$$
Since $\frac{\partial M_{new}}{\partial y} = \frac{\partial N_{new}}{\partial x} = 4x y^3$, the transformed differential equation is **strictly exact**!

##### Step 5: Integrate $M_{new}$ with respect to $x$ to find $\psi(x, y)$
$$\psi(x, y) = \int M_{new} \, dx + g(y) = \int (x y^4) \, dx + g(y) = \frac{1}{2} x^2 y^4 + g(y)$$

##### Step 6: Differentiate with respect to $y$ and equate to $N_{new}$
$$\frac{\partial \psi}{\partial y} = \frac{\partial}{\partial y}\left[\frac{1}{2} x^2 y^4 + g(y)\right] = 2x^2 y^3 + g'(y)$$
Equate to $N_{new}$:
$$2x^2 y^3 + g'(y) = 2x^2 y^3 + 3y^5 - 20y^3$$
Cancel the common term $2x^2 y^3$:
$$g'(y) = 3y^5 - 20y^3$$

##### Step 7: Integrate $g'(y)$ with respect to $y$
$$g(y) = \int (3y^5 - 20y^3) \, dy = 3\left(\frac{y^6}{6}\right) - 20\left(\frac{y^4}{4}\right) = \frac{1}{2} y^6 - 5y^4$$

##### Step 8: Assemble the General Solution $\psi(x, y) = C$
Substitute $g(y)$ back into $\psi(x, y)$:
$$\psi(x, y) = \frac{1}{2} x^2 y^4 + \frac{1}{2} y^6 - 5y^4 = C_1$$
Multiply through by 2 to clear fractions:
$$x^2 y^4 + y^6 - 10y^4 = C$$
Factoring out $y^4$:
$$\mathbf{y^4(x^2 + y^2 - 10) = C}$$

---

#### 💡 Underlying Material & Intuitive Explanation

> [!NOTE]
> **Theory & Concepts Tested:**
> 1. **The Formula Sign Trap**:
>    * When dividing by $N$, the numerator is $(M_y - N_x)$, leading to $\mu(x) = e^{\int \frac{M_y - N_x}{N} dx}$.
>    * When dividing by $M$, the numerator is REVERSED: $(N_x - M_y)$, leading to $\mu(y) = e^{\int \frac{N_x - M_y}{M} dy}$.
>    * *Mnemonic*: The subtracted partial corresponds to the denominator:
>      - Denominator $N \implies$ subtract $N_x$.
>      - Denominator $M \implies$ subtract $M_y$.
> 2. **Always Re-Verify Exactness**: After multiplying by $\mu$, compute $\frac{\partial M_{new}}{\partial y}$ and $\frac{\partial N_{new}}{\partial x}$ before integrating. It takes only 10 seconds and guarantees that your integrating factor was 100% correct.
