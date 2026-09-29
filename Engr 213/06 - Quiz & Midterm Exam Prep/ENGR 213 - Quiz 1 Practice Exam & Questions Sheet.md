# ENGR 213: Applied Ordinary Differential Equations
# Quiz 1 Practice Exam & Mock Test Sheet
**Concordia University · Department of Building, Civil & Environmental Engineering (BCEE)**  
**Target Assessment**: Quiz 1 (Week 1–2 Topics: Textbook Sections 1.1, 1.2, 2.1, 2.2, 2.3)  
**Time Allowed**: 50 Minutes · **Calculator**: Faculty Approved (Sharp EL-531 or Casio FX-300MS)

---

> [!IMPORTANT]
> **Instructions for the Student:**
> * This practice exam contains **12 high-yield exam problems** grouped into three strategic categories:
>   * **Part I: Official Tutorial 1 Handout Problems** (Directly reflecting your tutorial session).
>   * **Part II: Teacher Lecture Slide Core Exam Models** (Dr. Haghighat's tested classroom derivations).
>   * **Part III: High-Probability Quiz & Homework Essentials** (Selected from the official course outline).
> * Attempt all problems independently under timed conditions before consulting the companion document:  
>   `ENGR 213 - Quiz 1 Master Solutions & Theory Guide.md` / `.pdf`.

---

## Part I: Official Tutorial 1 Handout Problems

### Problem 1 · Verification of a Two-Parameter Family (8 Marks)
*(Tutorial 1 Handout · Section 1.1 Exercise 25)*

Verify by direct differentiation that the two-parameter family of functions
$$y(x) = c_1 e^{2x} + c_2 x e^{2x}$$
is an explicit solution of the second-order linear differential equation
$$\frac{d^2 y}{dx^2} - 4 \frac{dy}{dx} + 4y = 0$$
on the interval $(-\infty, \infty)$. State the order of the equation and specify whether it is linear or non-linear.

---

### Problem 2 · First-Order Non-Linear IVP & Interval of Definition (8 Marks)
*(Tutorial 1 Handout · Section 1.2 Problem 1)*

Given that $y = \frac{1}{1 + c_1 e^{-x}}$ is a one-parameter family of solutions of the first-order non-linear differential equation
$$y' = y - y^2$$
(a) Find the particular solution of the initial value problem (IVP) satisfying the initial condition:
$$y(0) = -\frac{1}{3}$$
(b) Determine the domain and the exact, maximal interval of definition $I$ for this particular solution.

---

### Problem 3 · Second-Order Linear IVP (8 Marks)
*(Tutorial 1 Handout · Section 1.2 Problem 11)*

Given that $y(x) = c_1 e^x + c_2 e^{-x}$ is a two-parameter family of solutions of the second-order differential equation
$$y'' - y = 0$$
Find the unique particular solution of the initial value problem satisfying the simultaneous initial conditions:
$$y(0) = 1, \quad y'(0) = 2$$

---

### Problem 4 · Autonomous DE, 1D Phase Line & Stability (10 Marks)
*(Tutorial 1 Handout · Section 2.1 Problem 21)*

Consider the autonomous first-order differential equation:
$$\frac{dy}{dx} = y^2 - 3y$$
(a) Determine all critical points (equilibrium solutions).  
(b) Draw the one-dimensional phase line (phase portrait) showing the sign of $\frac{dy}{dx}$ and directional arrows.  
(c) Classify each critical point as **asymptotically stable (attractor)**, **unstable (repeller)**, or **semi-stable**.  
(d) By hand, sketch representative solution curves in the $xy$-plane in each region separated by the equilibrium lines.

---

### Problem 5 · Autonomous DE with Quadratic Factorization (10 Marks)
*(Tutorial 1 Handout · Section 2.1 Problem 24)*

Consider the autonomous differential equation:
$$\frac{dy}{dx} = 10 + 3y - y^2$$
(a) Find all critical points.  
(b) Construct the 1D phase portrait and classify each critical point.  
(c) Using $y'' = f'(y)f(y)$, determine the inflection points and concavity of the non-constant solution curves.  
(d) If $y(0) = 1$, determine the asymptotic limit $\lim_{x \to \infty} y(x)$ without solving the ODE.

---

## Part II: Teacher Lecture Slide Core Exam Models

### Problem 6 · Picard's Existence & Uniqueness Theorem & Failure Cases (10 Marks)
*(Dr. Haghighat Lecture 2 · Slide 8)*

Consider the first-order initial value problem:
$$\frac{dy}{dx} = x \sqrt{y}, \quad y(x_0) = y_0$$
(a) State the conditions of Picard's Existence and Uniqueness Theorem for a first-order IVP.  
(b) Explain why the theorem **fails** to guarantee uniqueness for the initial condition $y(0) = 0$. Show by direct substitution that both $y(x) \equiv 0$ and $y(x) = \frac{1}{16} x^4$ ($x \ge 0$) are valid solutions passing through $(0,0)$.  
(c) Does Picard's theorem guarantee a unique solution for the initial condition $y(2) = 1$? Justify your answer mathematically.

---

### Problem 7 · Second-Order Harmonic Oscillator IVP (8 Marks)
*(Dr. Haghighat Lecture 2 · Slide 5)*

Given that $x(t) = c_1 \cos(4t) + c_2 \sin(4t)$ is the general solution of the undamped harmonic oscillator equation
$$x'' + 16x = 0$$
Solve the initial value problem with the initial conditions:
$$x\left(\frac{\pi}{2}\right) = -2, \quad x'\left(\frac{\pi}{2}\right) = 1$$

---

### Problem 8 · Autonomous Logistic Growth & Biological Equilibria (8 Marks)
*(Dr. Haghighat Lecture 1 Slide 6 & Lecture 2 Slide 15)*

The growth of a biological population is modeled by the autonomous differential equation:
$$\frac{dP}{dt} = r P\left(1 - \frac{P}{K}\right)$$
where $r > 0$ is the intrinsic growth rate and $K > 0$ is the environmental carrying capacity.  
(a) Identify the critical points.  
(b) Construct the phase portrait and classify the stability of each equilibrium point.  
(c) Describe the physical/biological behavior of $P(t)$ as $t \to \infty$ for initial populations satisfying:
1. $0 < P(0) < K$
2. $P(0) > K$

---

### Problem 9 · Separable DE, Partial Fractions & Singular Solutions (10 Marks)
*(Dr. Haghighat Lecture 3 · Slide 6)*

Consider the first-order differential equation:
$$\frac{dy}{dx} = y^2 - 4$$
(a) Identify all constant equilibrium solutions before separating variables.  
(b) Using separation of variables and partial fraction decomposition, obtain the one-parameter family of solutions.  
(c) Determine whether any equilibrium solution is a **singular (lost) solution** that cannot be obtained from the general family for any real constant $c$.

---

### Problem 10 · Separable IVP & Explicit Branch Selection (10 Marks)
*(Dr. Haghighat Lecture 3 · Slide 5)*

Solve the initial value problem:
$$\frac{dy}{dx} = -\frac{x}{y}, \quad y(4) = -3$$
(a) Find the explicit particular solution $y(x)$, explaining clearly how the initial condition determines the choice of sign ($\pm$).  
(b) State the geometric curve represented by the implicit family.  
(c) Determine the maximal open interval of definition $I$ on which this particular solution is valid and differentiable.

---

## Part III: High-Probability Quiz & Homework Essentials

### Problem 11 · Comprehensive DE Classification Matrix (10 Marks)
*(Textbook Section 1.1 Assigned Problems)*

Complete the classification table below for each given differential equation by identifying:
1. **Type**: Ordinary (ODE) or Partial (PDE)
2. **Order**: (Highest derivative present)
3. **Linearity**: Linear (L) or Non-Linear (NL)
4. **Dependent Variable(s)** and **Independent Variable(s)**

| Equation | Type | Order | Linearity | Dep. Var | Indep. Var | Non-Linear Reason (if applicable) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| (a) $(1 - x) y'' - 4x y' + 5y = \cos x$ | | | | | | |
| (b) $\frac{d^3 y}{dx^3} + y \frac{dy}{dx} = e^x$ | | | | | | |
| (c) $t^5 y^{(4)} - t^3 y'' + 6y = 0$ | | | | | | |
| (d) $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ | | | | | | |
| (e) $\frac{dy}{dx} = \sqrt{1 + y^2}$ | | | | | | |

---

### Problem 12 · First-Order Linear ODE via Integrating Factor (10 Marks)
*(Dr. Haghighat Lecture 3 Slide 12 & Textbook Section 2.3)*

Find the unique particular solution of the initial value problem:
$$x \frac{dy}{dx} + 2y = 4x^2, \quad y(1) = 2$$
(a) Write the equation in standard canonical linear form and identify $P(x)$ and $Q(x)$.  
(b) Compute the integrating factor $\mu(x)$.  
(c) Derive the general solution $y(x)$.  
(d) Apply the initial condition to find $c$, and state the maximal interval of definition $I$ containing $x_0 = 1$.

---

## Part IV: Lecture 4 Exact Equations & Integrating Factors (Quiz Cutoff Topic)

### Problem 13 · Exact Differential Equation & Initial Value Problem (10 Marks)
*(Dr. Haghighat Lecture 4 · Slide 9 & Textbook Section 2.4)*

Consider the first-order initial value problem:
$$\frac{dy}{dx} = \frac{xy^2 - \cos x \sin x}{y(1 - x^2)}, \quad y(0) = 2$$
(a) Rewrite the differential equation in standard differential form:
$$M(x, y) \, dx + N(x, y) \, dy = 0$$
and prove that it satisfies the criterion for an exact differential.  
(b) Derive the implicit one-parameter family of solutions $\psi(x, y) = C$ by integrating with respect to $x$ and determining the function of integration $g(y)$.  
(c) Apply the initial condition $y(0) = 2$ to find the constant $C$.  
(d) Solve explicitly for $y(x)$, justifying your choice of branch ($\pm$), and state the valid interval of definition $I$ containing $x_0 = 0$.

---

### Problem 14 · Non-Exact ODE Made Exact via Integrating Factor (10 Marks)
*(Dr. Haghighat Lecture 4 · Slides 10–11 & Textbook Section 2.4)*

Consider the differential equation:
$$xy \, dx + (2x^2 + 3y^2 - 20) \, dy = 0$$
(a) Show by calculating $\frac{\partial M}{\partial y}$ and $\frac{\partial N}{\partial x}$ that the equation is **not exact**.  
(b) Evaluate both potential single-variable integrating factor criteria:
$$\frac{M_y - N_x}{N} \quad \text{and} \quad \frac{N_x - M_y}{M}$$
State which expression depends solely on a single variable, and derive the corresponding integrating factor $\mu$.  
(c) Multiply the entire differential equation by $\mu$, verify that the resulting equation is strictly exact, and find the general implicit solution $\psi(x, y) = C$.
