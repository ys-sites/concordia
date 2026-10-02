# ENGR 213: Applied Ordinary Differential Equations
## Paradis notes — In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium
### Department of Mechanical, Industrial & Aerospace Engineering · Concordia University
**Academic Session:** Fall 2026 / Winter 2025 · **Course Code:** ENGR 213  
**Instructor:** Dr. Alexandre Paradis, ing. Ph.D.  
**Curriculum Mapping:** Lectures 1–5 · Tutorials 1 & 3 · Homework Sets 1–3 · Midterm #1 Examination Scope (October 19: Chapter 2 + §17.1 & §17.2)

---

## Executive Blueprint & Pedagogical Architecture
This compendium provides an authoritative, rigorously structured, and comprehensive mathematical synthesis of Dr. Alexandre Paradis's in-class lectures, weekly tutorials, assigned textbook homework sets, and Midterm #1 preparation. All handwritten derivations and whiteboard notes from the official course documentation have been transformed into publication-grade mathematical typesetting with complete proofs, physical interpretations, verification steps, and high-yield examination strategies.

| Curriculum Phase | Topics & Sections Covered | Primary Analytical Competencies |
| :--- | :--- | :--- |
| **Module 1 (Lecture 1)** | §1.1, §1.2: ODE vs. PDE, Order, Degree, Linearity | Classification criteria, Leibniz/Lagrange notations, Linearity Rules |
| **Module 2 (Tutorial 1 & HW 1)** | §1.1, §2.1: Solution Verification, Phase Line Stability | Radical domain restrictions, autonomous critical points, attractors vs. repellers |
| **Module 3 (Lecture 2 & HW 2)** | §2.2: Separation of Variables, Singular Solutions | Differential separation, lost equilibrium solutions, explicit IVP intervals |
| **Module 4 (Lecture 3 & HW 3)** | §2.3: First-Order Linear Equations & Integrating Factors | Standard form normalization, integrating factor $I(x) = e^{\int P(x)dx}$, transient terms |
| **Module 5 (Tutorial 3 & Lecture 4)** | §2.4, §2.7: Exact Equations & Physical Models | Test for exactness, potential function $\Psi(x,y)$, radioactive decay, Newton's cooling |
| **Module 6 (Lecture 4)** | §2.5, §2.8: Substitutions & Nonlinear Models | Bernoulli $u = y^{1-n}$, homogeneous $y = ux$, logistic growth, Torricelli's tank |
| **Module 7 (Lecture 5)** | §17.1, §17.2: Complex Variables & Polar Forms | Modulus, principal argument in radians, Euler's formula, De Moivre's theorem, $n$-th roots |
| **Module 8 (Midterm 1 Strategy)** | Midterm 1 Examination Synthesis & Pitfalls | 10 high-yield exam traps, rapid check algorithms, calculator policy |

---

# Module 1: Fundamental Concepts & Classification (Lecture 1)
**Date Delivered:** September 8, 2026 · **Textbook Reference:** Zill, Sections 1.1, 1.2 & 2.1

### 1.1 Course Administration & Policy
* **Approved Calculator Policy:** Concordia University Gina Cody School of Engineering enforces a strict calculator policy. Only standard approved models bearing the official ENCS faculty sticker are permitted in examinations.
* **Midterm #1 Date:** Monday, October 19, 2026.
* **Midterm #1 Scope:** Chapter 2 (Sections 2.1–2.8) + Chapter 17 (Sections 17.1 & 17.2).

### 1.2 Definition of Differential Equations
A differential equation is any mathematical relation involving one or more dependent variables (unknown functions) and one or more of their derivatives with respect to one or more independent variables.
* **Ordinary Differential Equation (ODE):** Involves derivatives with respect to only a single independent variable (e.g., $x$ or $t$):
  $$\frac{dy}{dx} + y = 0, \quad \left(\frac{dy}{dx}\right)^2 + 2xy = \cos(x), \quad \frac{d^2 y}{dt^2} + 4y = 0$$
* **Partial Differential Equation (PDE):** Involves partial derivatives of a multivariable function with respect to two or more independent variables:
  $$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0, \quad \frac{\partial y}{\partial t} = \alpha^2 \frac{\partial^2 y}{\partial x^2}$$

### 1.3 Standard Derivative Notations
* **Leibniz Notation:** $\frac{dy}{dx}, \; \frac{d^2 y}{dx^2}, \; \dots, \; \frac{d^n y}{dx^n}$ (essential for differential operations, separation of variables, and chain rule manipulations).
* **Prime (Lagrange) Notation:** $y', \; y'', \; y''', \; y^{(4)}, \; \dots, \; y^{(n)}$ (compact and standard for linear constant-coefficient ODEs).
* **Newton Dot Notation:** $\dot{y} = \frac{dy}{dt}, \; \ddot{y} = \frac{d^2 y}{dt^2}$ (standard in engineering dynamics, kinematics, and vibrations).

### 1.4 Order and Degree of an ODE
* **Order:** The order of an ODE is defined strictly as the order of the highest derivative present in the equation.
* **Degree:** The power (exponent) to which the highest derivative is raised, after the equation has been rationalized with respect to derivatives.

$$\frac{dy}{dx} - y^4 = 0 \implies \mathbf{1^{\text{st}}\text{ Order, Degree 1}} \quad (\text{power of } y \text{ does not alter order})$$
$$\left(\frac{dy}{dx}\right)^3 + y = 0 \implies \mathbf{1^{\text{st}}\text{ Order, Degree 3}}$$
$$\frac{d^4 y}{dx^4} + \frac{d^2 y}{dx^2} + 1 = 0 \implies \mathbf{4^{\text{th}}\text{ Order, Degree 1}}$$

### 1.5 Linearity Criteria
An $n$-th order ODE is **linear** if and only if it can be expressed in the standard canonical form:
$$a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1(x) \frac{dy}{dx} + a_0(x) y = g(x)$$

**The Two Golden Rules of Linearity:**
1. **Rule 1 (First Power Only):** The dependent variable $y$ and every single one of its derivatives $y', y'', \dots, y^{(n)}$ appear to the first power only (no terms like $(y')^2$, $y^3$, or $\sqrt{y}$).
2. **Rule 2 (Independent Coefficients):** The coefficient functions $a_n(x), \dots, a_0(x)$ and the non-homogeneous driving term $g(x)$ depend strictly and solely on the independent variable $x$ (no cross-products such as $y y'$ or transcendental functions of $y$ like $\sin(y)$ or $e^y$).

| Differential Equation | Order | Linear? | Mathematical Justification |
| :--- | :---: | :---: | :--- |
| $(y - x) dx + 4x dy = 0$ | 1 | **Yes** | Dividing by $dx$: $4x y' + y = x$ satisfies standard linear form. |
| $y' = y^2 - 3y$ | 1 | **No** | Nonlinear due to the quadratic power $y^2$. |
| $y'' + 4y = \sin(x)$ | 2 | **Yes** | Dependent variable $y$ and $y''$ are linear; $\sin(x)$ depends only on $x$. |
| $y'' + 4\sin(y) = 0$ | 2 | **No** | Nonlinear due to transcendental function $\sin(y)$ of the dependent variable. |
| $x^2 y''' + x y' - 5y = e^x$ | 3 | **Yes** | 3rd-order linear with variable coefficients $x^2, x, -5$. |

---

# Module 2: In-Class Tutorial 1 & Homework 1 Solutions
**Date Delivered:** September 14, 2026 · **Focus:** Solution Verification, Radical Domains & Autonomous Phase Portraits

### 2.1 Problem §1.1 Q13: First-Order Linear Verification
* **Given ODE & Trial Solution:**
  $$2y' + y = 0, \quad y(x) = e^{-x/2}$$
* **Step-by-Step Analytical Derivation:**
  1. Compute the first derivative using the exponential chain rule:
     $$y'(x) = \frac{d}{dx}\left[e^{-x/2}\right] = -\frac{1}{2} e^{-x/2}$$
  2. Substitute $y(x)$ and $y'(x)$ into the left-hand differential operator:
     $$\text{LHS} = 2y' + y = 2\left(-\frac{1}{2} e^{-x/2}\right) + e^{-x/2} = -e^{-x/2} + e^{-x/2} = 0$$
  3. Since $\text{LHS} = 0 = \text{RHS}$, the function satisfies the ODE identically for all $x \in \mathbb{R}$.
* **Interval of Definition:**
  $$I = (-\infty, +\infty)$$

### 2.2 Problem §1.1 Q17: Radical Solution & Domain Restriction
* **Given ODE & Trial Solution:**
  $$(y - x) y' = y - x + 8, \quad y(x) = x + 4\sqrt{x + 2}$$
* **Step-by-Step Analytical Derivation:**
  1. Differentiate the trial function:
     $$y'(x) = \frac{d}{dx}\left[x + 4(x + 2)^{1/2}\right] = 1 + 4\left(\frac{1}{2\sqrt{x + 2}}\right) = 1 + \frac{2}{\sqrt{x + 2}}$$
  2. Evaluate the Left-Hand Side (LHS):
     $$y - x = \left(x + 4\sqrt{x + 2}\right) - x = 4\sqrt{x + 2}$$
     $$\text{LHS} = (y - x) y' = \left(4\sqrt{x + 2}\right)\left(1 + \frac{2}{\sqrt{x + 2}}\right) = 4\sqrt{x + 2} + \frac{8\sqrt{x + 2}}{\sqrt{x + 2}} = 4\sqrt{x + 2} + 8$$
  3. Evaluate the Right-Hand Side (RHS):
     $$\text{RHS} = y - x + 8 = \left(x + 4\sqrt{x + 2}\right) - x + 8 = 4\sqrt{x + 2} + 8$$
  4. Notice $\text{LHS} \equiv \text{RHS}$ identically.
* **Interval of Validity Determination:**
  The square root $\sqrt{x+2}$ requires $x + 2 \ge 0 \implies x \ge -2$. However, in the derivative $y'(x) = 1 + \frac{2}{\sqrt{x+2}}$, the term $\sqrt{x+2}$ appears in the denominator, requiring $x + 2 \neq 0 \implies x > -2$.
  $$\mathbf{I = (-2, +\infty)}$$

### 2.3 Problem §1.1 Q25: Second-Order Homogeneous Verification
* **Given ODE & Trial Solution:**
  $$y'' - 4y' + 4y = 0, \quad y(x) = c_1 e^{2x} + c_2 x e^{2x}$$
* **Step-by-Step Analytical Derivation:**
  1. Write the trial function in factored form: $y(x) = (c_1 + c_2 x) e^{2x}$.
  2. Compute the first derivative via product rule:
     $$y'(x) = c_2 e^{2x} + 2(c_1 + c_2 x) e^{2x} = (2c_1 + c_2 + 2c_2 x) e^{2x}$$
  3. Compute the second derivative:
     $$y''(x) = 2c_2 e^{2x} + 2(2c_1 + c_2 + 2c_2 x) e^{2x} = (4c_1 + 4c_2 + 4c_2 x) e^{2x}$$
  4. Substitute into the differential operator:
     $$y'' - 4y' + 4y = e^{2x} \left[ (4c_1 + 4c_2 + 4c_2 x) - 4(2c_1 + c_2 + 2c_2 x) + 4(c_1 + c_2 x) \right]$$
     $$= e^{2x} \left[ (4c_1 - 8c_1 + 4c_1) + (4c_2 - 4c_2) + (4c_2 x - 8c_2 x + 4c_2 x) \right] = e^{2x} [0] \equiv 0$$
* **Interval of Definition:** $I = (-\infty, +\infty)$.

### 2.4 Problem §2.1 Q21: Autonomous Direction Fields & Stability
* **Given Autonomous ODE:**
  $$\frac{dy}{dx} = y^2 - 3y = y(y - 3)$$
* **Critical Points (Equilibrium Solutions):**
  Set $\frac{dy}{dx} = 0 \implies y(y - 3) = 0 \implies y_1 = 0 \quad \text{and} \quad y_2 = 3$.
* **Phase Line Sign Analysis:**
  * **Interval $(-\infty, 0)$:** Test $y = -1 \implies (-1)(-4) = +4 > 0 \implies \frac{dy}{dx} > 0$ (arrows point UP toward $y=0$).
  * **Interval $(0, 3)$:** Test $y = 1 \implies (1)(-2) = -2 < 0 \implies \frac{dy}{dx} < 0$ (arrows point DOWN toward $y=0$).
  * **Interval $(3, +\infty)$:** Test $y = 4 \implies (4)(1) = +4 > 0 \implies \frac{dy}{dx} > 0$ (arrows point UP away from $y=3$).
* **Stability Classification:**
  * **$y = 0$ is Asymptotically Stable (Attractor / Sink):** Nearby solution trajectories converge to $0$ as $x \to +\infty$.
  * **$y = 3$ is Unstable (Repeller / Source):** Nearby solution trajectories diverge away from $3$ as $x \to +\infty$.

---

# Module 3: Separable Differential Equations & IVPs (Lectures 2 & 3)
**Dates Delivered:** September 10 & 22, 2026 · **Textbook Reference:** Zill, Section 2.2

### 3.1 Mathematical Theory of Separable Equations
A first-order differential equation is **separable** if the right-hand side can be factored into a product of a function of $x$ and a function of $y$:
$$\frac{dy}{dx} = g(x) f(y)$$

**Standard 4-Step Analytical Algorithm:**
1. **Check for Singular Solutions:** Set $f(y) = 0$. Any constant root $y = c$ is an equilibrium solution. Check at the end whether it is included in the general family.
2. **Separate Differentials:** Divide by $f(y)$ and multiply by $dx$:
   $$\frac{1}{f(y)} \, dy = g(x) \, dx \quad (f(y) \neq 0)$$
3. **Integrate Both Sides:**
   $$\int \frac{1}{f(y)} \, dy = \int g(x) \, dx + C$$
4. **Isolate $y(x)$ and Apply Initial Conditions:** Use initial condition $y(x_0) = y_0$ to isolate $C$ and explicitly define the solution's interval of definition.

### 3.2 Dr. Paradis In-Class Quiz 1 Master Problem
* **Problem Statement:** Solve the initial value problem:
  $$y \frac{dy}{dx} + x^2 = 4, \quad y(0) = 2$$
* **Complete Step-by-Step Derivation:**
  1. Isolate the derivative term:
     $$y \frac{dy}{dx} = 4 - x^2$$
  2. Separate variables:
     $$y \, dy = (4 - x^2) \, dx$$
  3. Integrate both sides:
     $$\int y \, dy = \int (4 - x^2) \, dx \implies \frac{y^2}{2} = 4x - \frac{x^3}{3} + C_1$$
  4. Multiply by 2:
     $$y^2 = 8x - \frac{2}{3}x^3 + C$$
  5. Apply initial condition $y(0) = 2$:
     $$(2)^2 = 8(0) - \frac{2}{3}(0)^3 + C \implies 4 = C$$
  6. Substitute $C = 4$:
     $$y^2 = 8x - \frac{2}{3}x^3 + 4$$
  7. Since the initial condition specifies $y(0) = +2 > 0$, we select the positive branch:
     $$\mathbf{y(x) = \sqrt{8x - \frac{2}{3}x^3 + 4}}$$
* **Interval of Definition:**
  The solution is valid on the open interval containing $x = 0$ where the radicand remains strictly positive: $8x - \frac{2}{3}x^3 + 4 > 0$.

### 3.3 Problem §2.2 Q17: Algebraic Factorization Separable ODE
* **Given ODE:**
  $$\frac{dy}{dx} = \frac{xy + 3x - y - 3}{xy - 2x + 4y - 8}$$
* **Analytical Derivation:**
  1. Factor numerator and denominator by grouping:
     $$\text{Numerator} = x(y + 3) - (y + 3) = (x - 1)(y + 3)$$
     $$\text{Denominator} = x(y - 2) + 4(y - 2) = (x + 4)(y - 2)$$
  2. Rewrite the separated equation:
     $$\frac{y - 2}{y + 3} \, dy = \frac{x - 1}{x + 4} \, dx$$
  3. Perform polynomial division on both sides:
     $$\frac{y - 2}{y + 3} = \frac{(y + 3) - 5}{y + 3} = 1 - \frac{5}{y + 3}$$
     $$\frac{x - 1}{x + 4} = \frac{(x + 4) - 5}{x + 4} = 1 - \frac{5}{x + 4}$$
  4. Integrate both sides:
     $$\int \left(1 - \frac{5}{y + 3}\right) dy = \int \left(1 - \frac{5}{x + 4}\right) dx$$
     $$y - 5\ln|y + 3| = x - 5\ln|x + 4| + C$$
  5. Rearrange terms:
     $$\mathbf{y - x + C = 5\ln\left|\frac{y + 3}{x + 4}\right|}$$

---

# Module 4: First-Order Linear Equations & Integrating Factors (Lecture 3 & HW 3)
**Dates Delivered:** September 22 & 25, 2026 · **Textbook Reference:** Zill, Section 2.3

### 4.1 Standard Canonical Form
A first-order linear differential equation must always be written with the leading coefficient equal to $+1$:
$$\frac{dy}{dx} + P(x) y = Q(x)$$

### 4.2 The Integrating Factor Theorem
Multiply the entire equation by an unknown strictly positive integrating factor $I(x)$:
$$I(x) \frac{dy}{dx} + I(x) P(x) y = I(x) Q(x)$$
We demand that the left-hand side matches the derivative of the product $[I(x) y]$:
$$\frac{d}{dx}[I(x) y] = I(x) \frac{dy}{dx} + I'(x) y$$
Equating coefficients of $y$:
$$I'(x) = I(x) P(x) \implies \frac{dI}{I} = P(x) \, dx \implies \ln|I| = \int P(x) \, dx \implies \mathbf{I(x) = e^{\int P(x) \, dx}}$$

### 4.3 General Solution Formula
Integrating both sides of $\frac{d}{dx}[I(x) y] = I(x) Q(x)$:
$$I(x) y = \int I(x) Q(x) \, dx + C \implies \mathbf{y(x) = \frac{1}{I(x)} \left[ \int I(x) Q(x) \, dx + C \right]}$$

> [!IMPORTANT]
> **Dr. Paradis Exam Golden Rule:** The arbitrary constant $+ C$ MUST be placed inside the brackets before dividing by $I(x)$. Writing $y = \frac{1}{I(x)}\int I Q dx + C$ is an automatic deduction of full method marks!

### 4.4 Transient Terms vs. Steady-State Solutions
The general solution can be partitioned into:
$$y(x) = y_c(x) + y_p(x) = \frac{C}{I(x)} + \frac{1}{I(x)}\int I(x) Q(x) \, dx$$
* **Transient Term:** Any component of $y(x)$ that decays to zero as $x \to +\infty$ (typically terms with $e^{-kx}$ for $k > 0$):
  $$\lim_{x \to \infty} y_{\text{transient}}(x) = 0$$
* **Steady-State Term:** The persistent long-term behavior of the system as $x \to +\infty$.

### 4.5 Problem §2.3 Q21: Singular Points and Interval of Definition
* **Given Equation:**
  $$x \frac{dy}{dx} + 2y = 3, \quad x > 0$$
* **Step-by-Step Derivation:**
  1. Divide by $x$ to achieve standard form:
     $$\frac{dy}{dx} + \frac{2}{x} y = \frac{3}{x} \implies P(x) = \frac{2}{x}, \quad Q(x) = \frac{3}{x}$$
  2. Compute integrating factor:
     $$I(x) = \exp\left(\int \frac{2}{x} dx\right) = e^{2\ln|x|} = e^{\ln(x^2)} = x^2$$
  3. Apply product rule:
     $$\frac{d}{dx}[x^2 y] = x^2 \left(\frac{3}{x}\right) = 3x$$
  4. Integrate both sides:
     $$x^2 y = \int 3x \, dx + C = \frac{3}{2}x^2 + C \implies \mathbf{y(x) = \frac{3}{2} + \frac{C}{x^2}}$$
  5. The term $\frac{C}{x^2}$ is the **transient term** since $\lim_{x \to \infty} \frac{C}{x^2} = 0$. The **steady-state solution** is $y_{\text{ss}} = \frac{3}{2}$.
  6. The point $x = 0$ is a **singular point** where $P(x)$ and $Q(x)$ are discontinuous. Thus, the solution exists on $I = (0, +\infty)$.

---

# Module 5: Exact Equations & Physical Modeling (Tutorial 3 & Lecture 4)
**Dates Delivered:** September 28 & 29, 2026 · **Textbook Reference:** Zill, Sections 2.4, 2.7 & 2.8

### 5.1 Test for Exactness (§2.4)
A first-order differential expression in differential form:
$$M(x, y) \, dx + N(x, y) \, dy = 0$$
is an **exact differential** in a simply connected region $R$ if and only if:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

### 5.2 Construction of Potential Function $\Psi(x, y)$
When exactness holds, there exists a potential function $\Psi(x, y)$ such that $\frac{\partial \Psi}{\partial x} = M$ and $\frac{\partial \Psi}{\partial y} = N$.
1. Integrate $M(x, y)$ with respect to $x$, introducing an arbitrary function of integration $g(y)$:
   $$\Psi(x, y) = \int M(x, y) \, dx + g(y)$$
2. Differentiate $\Psi(x, y)$ with respect to $y$ and set equal to $N(x, y)$:
   $$\frac{\partial \Psi}{\partial y} = \frac{\partial}{\partial y}\left[\int M(x, y) \, dx\right] + g'(y) = N(x, y)$$
3. Isolate $g'(y)$ (verify all $x$ variables cancel out) and integrate to find $g(y)$.
4. The implicit solution is:
   $$\mathbf{\Psi(x, y) = C}$$

### 5.3 Special Integrating Factors for Non-Exact Equations
If $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, compute the test ratios:
* **Function of $x$ alone:**
  $$\frac{M_y - N_x}{N} = f(x) \implies \mathbf{\mu(x) = e^{\int f(x) \, dx}}$$
* **Function of $y$ alone:**
  $$\frac{N_x - M_y}{M} = g(y) \implies \mathbf{\mu(y) = e^{\int g(y) \, dy}}$$

### 5.4 Tutorial 3 Worked Problem 1: Radioactive Decay (§2.7)
* **Problem Statement:** An initial radioactive mass $A(0) = 100\text{ mg}$ decreases by $3\%$ after 6 hours. Find the remaining mass at $t = 24\text{ hours}$.
* **Analytical Derivation:**
  1. Decay model: $\frac{dA}{dt} = -k A \implies A(t) = A_0 e^{-kt} = 100 e^{-kt}$.
  2. At $t = 6\text{ h}$, $3\%$ has decayed, so $97\%$ remains:
     $$A(6) = 100 e^{-6k} = 97 \implies e^{-6k} = 0.97 \implies -k = \frac{1}{6}\ln(0.97)$$
  3. At $t = 24 = 4 \times 6\text{ hours}$:
     $$A(24) = 100 e^{-24k} = 100 \left(e^{-6k}\right)^4 = 100 (0.97)^4 \approx \mathbf{88.53\text{ mg}}$$

### 5.5 Tutorial 3 Worked Problem 2: Forensic Newton's Law of Cooling (§2.7)
* **Problem Statement:** A body is discovered in a room maintained at constant ambient temperature $T_m = 70^\circ\text{F}$. At time of discovery $t_d$, the body temperature is $85^\circ\text{F}$. One hour later ($t_d + 1$), the temperature drops to $80^\circ\text{F}$. Assuming living body temperature was $T(0) = 98.6^\circ\text{F}$, estimate the time of death.
* **Analytical Derivation:**
  1. Newton's Cooling ODE:
     $$\frac{dT}{dt} = -k(T - 70) \implies \int \frac{dT}{T - 70} = -k \int dt \implies T(t) = 70 + C e^{-kt}$$
  2. At time of death $t = 0$:
     $$T(0) = 70 + C = 98.6 \implies C = 28.6 \implies T(t) = 70 + 28.6 e^{-kt}$$
  3. At discovery $t_d$:
     $$85 = 70 + 28.6 e^{-k t_d} \implies 28.6 e^{-k t_d} = 15 \implies e^{-k t_d} = \frac{15}{28.6}$$
  4. One hour later at $t_d + 1$:
     $$80 = 70 + 28.6 e^{-k(t_d + 1)} \implies 28.6 e^{-k t_d} e^{-k} = 10$$
  5. Substitute $28.6 e^{-k t_d} = 15$:
     $$15 e^{-k} = 10 \implies e^{-k} = \frac{10}{15} = \frac{2}{3} \implies k = -\ln\left(\frac{2}{3}\right) \approx 0.4055\text{ hr}^{-1}$$
  6. Calculate elapsed time $t_d$:
     $$-k t_d = \ln\left(\frac{15}{28.6}\right) \implies t_d = \frac{\ln(15 / 28.6)}{\ln(2 / 3)} = \frac{-0.6453}{-0.4055} \approx \mathbf{1.59\text{ hours (1 hr 35 min)}}$$
* **Conclusion:** Death occurred approximately 1 hour and 35 minutes prior to discovery.

---

# Module 6: Solutions by Substitution & Nonlinear Models (Lectures 4 & 5)
**Dates Delivered:** September 29 & October 1, 2026 · **Textbook Reference:** Zill, Sections 2.5 & 2.8

### 6.1 Bernoulli Differential Equations
A first-order equation of the form:
$$\frac{dy}{dx} + P(x) y = Q(x) y^n \quad (n \neq 0, 1)$$
is transformed into a linear ODE via the substitution:
$$\mathbf{u = y^{1-n} \implies \frac{du}{dx} = (1-n) y^{-n} \frac{dy}{dx}}$$
Dividing the original ODE by $y^n$:
$$y^{-n} \frac{dy}{dx} + P(x) y^{1-n} = Q(x) \implies \mathbf{\frac{du}{dx} + (1-n) P(x) u = (1-n) Q(x)}$$

### 6.2 Homogeneous Differential Equations of Degree Zero
An ODE $M(x,y)dx + N(x,y)dy = 0$ where $M$ and $N$ are homogeneous functions of the exact same degree can be written as:
$$\frac{dy}{dx} = f\left(\frac{y}{x}\right)$$
Substitute:
$$\mathbf{y = u x \implies \frac{dy}{dx} = u + x \frac{du}{dx}}$$
Substituting into the ODE yields an immediately separable equation:
$$u + x \frac{du}{dx} = f(u) \implies \mathbf{\frac{du}{f(u) - u} = \frac{dx}{x}}$$

### 6.3 Linear Arguments: $y' = f(Ax + By + C)$
When the derivative depends strictly on a linear combination $Ax + By + C$ ($B \neq 0$), substitute:
$$\mathbf{u = Ax + By + C \implies \frac{du}{dx} = A + B \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{B}\left(\frac{du}{dx} - A\right)}$$
Separated form:
$$\mathbf{\frac{du}{A + B f(u)} = dx}$$

### 6.4 Nonlinear Physical Models (§2.8)
* **Logistic Population Growth:**
  $$\frac{dP}{dt} = P(a - bP) = aP\left(1 - \frac{P}{K}\right), \quad K = \frac{a}{b} \text{ (Carrying Capacity)}$$
  Analytical solution via partial fractions or Bernoulli substitution ($n=2$):
  $$P(t) = \frac{K}{1 + \left(\frac{K - P_0}{P_0}\right) e^{-at}}$$
* **Torricelli's Law (Draining Tank):**
  $$\frac{dV}{dt} = -A_h v_{\text{exit}} = -A_h \sqrt{2gh}$$
  For a cylindrical container with constant top surface area $A_w$:
  $$A_w \frac{dh}{dt} = -A_h \sqrt{2gh} \implies \frac{dh}{\sqrt{h}} = -\frac{A_h \sqrt{2g}}{A_w} \, dt$$

---

# Module 7: Complex Numbers & Polar Coordinates (Lectures 4 & 5)
**Dates Delivered:** September 29 & October 1, 2026 · **Textbook Reference:** Zill, Chapter 17 (Sections 17.1 & 17.2)

### 7.1 Cartesian Representation (§17.1)
A complex number $z \in \mathbb{C}$ is defined as an ordered pair of real numbers $(x, y)$:
$$z = x + iy \quad (i = \sqrt{-1}, \; i^2 = -1)$$
* **Real Part:** $\text{Re}(z) = x$
* **Imaginary Part:** $\text{Im}(z) = y$ (note: $\text{Im}(z)$ is the real coefficient $y$, NOT $iy$)
* **Complex Conjugate:** $\bar{z} = x - iy$
* **Fundamental Modulus Identity:**
  $$z \bar{z} = (x + iy)(x - iy) = x^2 - (iy)^2 = x^2 + y^2 = |z|^2$$
* **Division by Conjugate Rationalization:**
  $$\frac{z_1}{z_2} = \frac{z_1 \bar{z}_2}{z_2 \bar{z}_2} = \frac{(x_1 + i y_1)(x_2 - i y_2)}{x_2^2 + y_2^2} = \frac{(x_1 x_2 + y_1 y_2) + i(x_2 y_1 - x_1 y_2)}{x_2^2 + y_2^2}$$

### 7.2 Polar & Exponential Representation (§17.2)
* **Modulus (Length):**
  $$r = |z| = \sqrt{x^2 + y^2}$$
* **Argument (Phase Angle):**
  $$\theta = \arg(z) \implies \tan\theta = \frac{y}{x}$$

> [!WARNING]
> **Dr. Paradis Golden Rule on Angles:** All complex arguments in ENGR 213 MUST be computed in **radians**, never degrees ($\pi\text{ rad} = 180^\circ$).

* **Principal Argument $\text{Arg}(z) = \Theta \in (-\pi, \pi]$:**
  $$\Theta = \begin{cases} \arctan(y/x), & x > 0 \\ \arctan(y/x) + \pi, & x < 0, \; y \ge 0 \\ \arctan(y/x) - \pi, & x < 0, \; y < 0 \\ \pi/2, & x = 0, \; y > 0 \\ -\pi/2, & x = 0, \; y < 0 \end{cases}$$
* **Euler's Formula & Polar Form:**
  $$e^{i\theta} = \cos\theta + i\sin\theta \implies \mathbf{z = r(\cos\theta + i\sin\theta) = r e^{i\theta}}$$

### 7.3 Arithmetic Operations in Polar Coordinates
Let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$:
1. **Multiplication:**
   $$z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)} = r_1 r_2 [\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]$$
   *(Moduli multiply; arguments add)*
2. **Division:**
   $$\frac{z_1}{z_2} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)} = \frac{r_1}{r_2} [\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)]$$
   *(Moduli divide; arguments subtract)*
3. **De Moivre's Theorem:**
   $$z^n = (r e^{i\theta})^n = r^n e^{i n \theta} = \mathbf{r^n [\cos(n\theta) + i\sin(n\theta)]}$$
4. **$n$-th Roots of Complex Numbers:**
   The $n$ distinct roots $w_k = z^{1/n}$ of $z = r e^{i\theta}$ are given by:
   $$\mathbf{w_k = \sqrt[n]{r} \exp\left(i \frac{\theta + 2k\pi}{n}\right) = \sqrt[n]{r} \left[ \cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right) \right]}$$
   for $k = 0, 1, 2, \dots, n-1$.

---

# Module 8: Midterm #1 Strategic Preparation & Pitfall Elimination (October 19)

### 8.1 Ten High-Yield Examination Traps & Checklists
1. **Trap 1: Coefficient Normalization in Linear ODEs:** Never calculate $P(x)$ until the coefficient of $\frac{dy}{dx}$ has been divided out to equal $+1$.
2. **Trap 2: Bracketing the Integrating Factor:** The arbitrary constant $+ C$ belongs strictly inside the brackets: $y = \frac{1}{I(x)}\left[\int I Q dx + C\right]$.
3. **Trap 3: Absolute Values in Logarithms:** $\int \frac{1}{x} dx = \ln|x| \implies e^{\ln|x|} = |x|$. Specify whether $x > 0$ or $x < 0$ to drop the absolute value cleanly.
4. **Trap 4: Lost Singular Solutions:** When separating $\frac{dy}{f(y)} = g(x)dx$, immediately check if $f(y) = 0$ yields constant solutions that are not covered by any value of $C$.
5. **Trap 5: Exactness Cross-Derivative Signs:** Exactness requires $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$. Do not confuse the partial derivative order.
6. **Trap 6: Correct Bernoulli Exponent:** The substitution is $u = y^{1-n}$, which transforms the equation into $\frac{du}{dx} + (1-n)P(x)u = (1-n)Q(x)$.
7. **Trap 7: Radians vs. Degrees in Complex Arithmetic:** Dr. Paradis penalizes degrees on complex polar exam problems. Ensure calculator mode is in **radians**.
8. **Trap 8: Complex Roots Spacing:** When finding $n$-th roots, always add $\frac{2k\pi}{n}$ for $k = 0, 1, \dots, n-1$ to capture all $n$ distinct roots evenly distributed on the circle.
9. **Trap 9: Open Intervals of Definition:** Initial value problem solutions must be stated on open intervals ($I = (-2, \infty)$ rather than $[-2, \infty)$) where the derivative is defined.
10. **Trap 10: Sign Conventions in Decay & Cooling:** Rate constant $k > 0$ means decay is written as $\frac{dA}{dt} = -kA$. Cooling is $\frac{dT}{dt} = -k(T - T_m)$.

---
*Concordia University · Gina Cody School of Engineering and Computer Science · Department of MIAE*
