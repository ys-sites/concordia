# ENGR 213: Applied Ordinary Differential Equations
## Paradis notes — In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium
### Department of Mechanical, Industrial & Aerospace Engineering · Concordia University
**Academic Session:** Fall 2026 / Winter 2025 · **Course:** ENGR 213  
**Instructor:** Dr. Alexandre Paradis, ing. Ph.D.  
**Curriculum Mapping:** Lectures 1–5 · Tutorials 1 & 3 · Homework Sets 1–3 · Midterm #1 Examination Scope (Oct 19: Chapter 2 + §17.1 & §17.2)

---

## Executive Blueprint & Pedagogical Architecture
This document provides a regenerated, rigorously structured, and comprehensive compendium of Dr. Alexandre Paradis's in-class lectures, weekly tutorials, assigned textbook homework sets, and Midterm #1 examination preparation. All handwritten whiteboard and OneNote derivations have been converted into standard mathematical typesetting with complete proofs, physical interpretations, verification steps, and high-yield examination strategies.

```
                      ENGR 213 MIDTERM 1 CURRICULUM ARCHITECTURE (OCTOBER 19)
                      =======================================================
                                                 |
         +---------------------------------------+---------------------------------------+
         |                                                                               |
[CHAPTER 1 & 2: FIRST-ORDER ODEs]                                            [CHAPTER 17: COMPLEX VARIABLES]
* §1.1: Order, Linearity & Intervals of Definition                           * §17.1: Complex Arithmetic & Cartesian Form
* §2.1: Direction Fields & Autonomous Critical Points                        * §17.2: Polar & Exponential Form (Euler's)
* §2.2: Separable Equations & Initial Value Problems                         * De Moivre's Theorem & n-th Roots
* §2.3: First-Order Linear Equations (Integrating Factor)                   * Characteristic Roots of 2nd-Order ODEs
* §2.4: Exact Differential Equations & Integrating Factors
* §2.5: Solutions by Substitution (Bernoulli, Homogeneous, Linear)
* §2.7: Linear Models (Radioactive Decay, Newton's Cooling)
* §2.8: Nonlinear Models (Logistic Growth, Torricelli's Law)
```

---

# Module 1: Fundamental Concepts & Classification (Lecture 1)
**Date Delivered:** September 8, 2026 · **Textbook Reference:** Zill, Sections 1.1, 1.2 & 2.1

### 1.1 Definition of Ordinary Differential Equations (ODEs)
A differential equation is a mathematical relation containing one or more dependent variables (functions) and one or more of their derivatives with respect to one or more independent variables.
* **Ordinary Differential Equation (ODE):** Involves derivatives with respect to a single independent variable (e.g., $x$ or $t$):
  $$rac{dy}{dx} + y = 0, \quad \left(rac{dy}{dx}ight)^2 + 2xy = \cos(x), \quad rac{d^2 y}{dt^2} + 4y = 0$$
* **Partial Differential Equation (PDE):** Involves partial derivatives of a multivariable function with respect to two or more independent variables:
  $$rac{\partial^2 u}{\partial x^2} + rac{\partial^2 u}{\partial y^2} = 0, \quad rac{\partial y}{\partial t} = lpha^2 rac{\partial^2 y}{\partial x^2}$$

### 1.2 Standard Derivative Notations
* **Leibniz Notation:** $rac{dy}{dx}, \; rac{d^2 y}{dx^2}, \; \dots, \; rac{d^n y}{dx^n}$ (essential for separation of variables and integrating factors).
* **Prime Notation:** $y', \; y'', \; y''', \; y^{(4)}, \; \dots, \; y^{(n)}$ (compact for linear constant-coefficient equations).
* **Newton Dot Notation (Time Derivatives):** $\dot{y} = rac{dy}{dt}, \; \ddot{y} = rac{d^2 y}{dt^2}$ (predominantly used in dynamics, vibrations, and mechatronics).

### 1.3 Order of a Differential Equation
The **order** of an ODE is defined strictly as the order of the highest derivative present in the equation:
$$rac{dy}{dx} - y^4 = 0 \implies \mathbf{1^{	ext{st}}	ext{ Order}} \quad (	ext{degree is } 1, 	ext{ power of } y 	ext{ does not alter order})$$
$$\left(rac{dy}{dx}ight)^3 + y = 0 \implies \mathbf{1^{	ext{st}}	ext{ Order, Degree 3}}$$
$$rac{d^4 y}{dx^4} + rac{d^2 y}{dx^2} + 1 = 0 \implies \mathbf{4^{	ext{th}}	ext{ Order}}$$

### 1.4 Linearity Criteria
An $n$-th order ODE is **linear** if it can be written in the form:
$$a_n(x) rac{d^n y}{dx^n} + a_{n-1}(x) rac{d^{n-1} y}{dx^{n-1}} + \dots + a_1(x) rac{dy}{dx} + a_0(x) y = g(x)$$
**The Two Golden Rules of Linearity:**
1. The dependent variable $y$ and all its derivatives $y', y'', \dots, y^{(n)}$ are of the **first power only** (no exponents like $(y')^2$ or $y^3$).
2. The coefficients $a_n(x), \dots, a_0(x)$ and the driving term $g(x)$ depend **solely on the independent variable $x$** (no products such as $y y'$ or nonlinear functions like $\sin(y)$ or $e^y$).

---

# Module 2: In-Class Tutorial 1 & Homework 1 Solutions
**Date Delivered:** September 14, 2026 · **Focus:** Solution Verification & Autonomous Phase Portraits

### 2.1 Problem §1.1 Q13: First-Order Linear Verification
* **Given ODE & Trial Solution:**
  $$2y' + y = 0, \quad y(x) = e^{-x/2}$$
* **Step-by-Step Derivation:**
  1. Differentiate the trial function: $y'(x) = -rac{1}{2} e^{-x/2}$.
  2. Substitute into the left-hand differential operator:
     $$2y' + y = 2\left(-rac{1}{2}e^{-x/2}ight) + e^{-x/2} = -e^{-x/2} + e^{-x/2} = 0$$
  3. The equation is identically satisfied for all $x \in \mathbb{R}$.
* **Suitable Interval of Definition:** $I = (-\infty, +\infty)$.

### 2.2 Problem §1.1 Q17: Radical Nonlinear Solution Verification
* **Given ODE & Trial Solution:**
  $$(y - x)y' = y - x + 8, \quad y(x) = x + 4\sqrt{x + 2}$$
* **Step-by-Step Derivation:**
  1. Compute the derivative:
     $$y'(x) = 1 + 4\left(rac{1}{2\sqrt{x + 2}}ight) = 1 + rac{2}{\sqrt{x + 2}}$$
  2. Evaluate the Left-Hand Side (LHS):
     $$(y - x)y' = \left(4\sqrt{x + 2}ight)\left(1 + rac{2}{\sqrt{x + 2}}ight) = 4\sqrt{x + 2} + rac{8\sqrt{x + 2}}{\sqrt{x + 2}} = 4\sqrt{x + 2} + 8$$
  3. Evaluate the Right-Hand Side (RHS):
     $$y - x + 8 = (x + 4\sqrt{x + 2}) - x + 8 = 4\sqrt{x + 2} + 8$$
  4. LHS $\equiv$ RHS identically.
* **Domain & Interval of Validity:** For real numbers, the radicand requires $x + 2 \ge 0 \implies x \ge -2$. Since the derivative requires $\sqrt{x+2} 
eq 0$ in the denominator, the solution exists on the open interval:
  $$I = (-2, +\infty)$$

### 2.3 Problem §1.1 Q25: Second-Order Homogeneous Verification
* **Given ODE & Trial Solution:**
  $$y'' - 4y' + 4y = 0, \quad y(x) = c_1 e^{2x} + c_2 x e^{2x}$$
* **Step-by-Step Derivation:**
  1. Factor the trial function: $y = (c_1 + c_2 x)e^{2x}$.
  2. First derivative: $y' = c_2 e^{2x} + 2(c_1 + c_2 x)e^{2x} = (2c_1 + c_2 + 2c_2 x)e^{2x}$.
  3. Second derivative:
     $$y'' = 2c_2 e^{2x} + 2(2c_1 + c_2 + 2c_2 x)e^{2x} = (4c_1 + 4c_2 + 4c_2 x)e^{2x}$$
  4. Substitute into the ODE:
     $$y'' - 4y' + 4y = e^{2x} \left[ (4c_1 + 4c_2 + 4c_2 x) - 4(2c_1 + c_2 + 2c_2 x) + 4(c_1 + c_2 x) ight]$$
     $$= e^{2x} \left[ (4c_1 - 8c_1 + 4c_1) + (4c_2 - 4c_2) + (4c_2 x - 8c_2 x + 4c_2 x) ight] = e^{2x}[0] \equiv 0$$
* **Interval of Definition:** $I = (-\infty, +\infty)$.

### 2.4 Problem §2.1 Q21: Autonomous Direction Fields & Stability Analysis
* **Given Autonomous ODE:**
  $$rac{dy}{dx} = y^2 - 3y = y(y - 3)$$
* **Phase Line & Critical Points:**
  Critical points occur where $rac{dy}{dx} = 0 \implies y_1 = 0$ and $y_2 = 3$.
* **Interval Sign Analysis:**
  * For $y < 0$: $f(y) = (-)(-) > 0 \implies rac{dy}{dx} > 0$ (solutions increase towards $0$).
  * For $0 < y < 3$: $f(y) = (+)(-) < 0 \implies rac{dy}{dx} < 0$ (solutions decrease towards $0$).
  * For $y > 3$: $f(y) = (+)(+) > 0 \implies rac{dy}{dx} > 0$ (solutions increase away from $3$).
* **Stability Classification:**
  * **$y = 0$ is an Asymptotically Stable Attractor (Sink).**
  * **$y = 3$ is an Unstable Repeller (Source).**

---

# Module 3: First-Order Solution Techniques (Lectures 2 & 3)
**Dates Delivered:** September 10 & 22, 2026 · **Textbook Reference:** Zill, Sections 2.2, 2.3 & 2.5

### 3.1 Separable Differential Equations (§2.2)
A first-order equation is separable if it can be written as:
$$rac{dy}{dx} = g(x) f(y)$$
**Standard 4-Step Solution Algorithm:**
1. Separate variables: $rac{1}{f(y)} \, dy = g(x) \, dx$ (provided $f(y) 
eq 0$).
2. Integrate both sides: $\int rac{dy}{f(y)} = \int g(x) \, dx + C$.
3. Check for singular solutions: Set $f(y) = 0$ to find equilibrium constant solutions that might not be contained in the family for any finite value of $C$.
4. Apply initial condition $y(x_0) = y_0$ to isolate $C$ and solve explicitly for $y(x)$.

### 3.2 Dr. Paradis In-Class Quiz 1 Master Problem
* **Problem Statement:** Solve $y y' + x^2 = 4, \; y(0) = 2$.
* **Full Derivation:**
  $$y rac{dy}{dx} = 4 - x^2 \implies y \, dy = (4 - x^2) \, dx$$
  $$\int y \, dy = \int (4 - x^2) \, dx \implies rac{y^2}{2} = 4x - rac{x^3}{3} + C$$
  $$y^2 = 8x - rac{2}{3}x^3 + C_1$$
  Apply $y(0) = 2$:
  $$2^2 = 8(0) - 0 + C_1 \implies C_1 = 4$$
  Because $y(0) = +2$, choose the positive branch:
  $$\mathbf{y(x) = \sqrt{8x - rac{2}{3}x^3 + 4}}$$

### 3.3 First-Order Linear Equations & The Integrating Factor Method (§2.3)
Standard form:
$$rac{dy}{dx} + P(x) y = Q(x)$$
**Integrating Factor Theorem:**
Multiplying by $I(x) = e^{\int P(x) \, dx}$ converts the left-hand side into the exact derivative of a product:
$$I(x) rac{dy}{dx} + I(x) P(x) y = rac{d}{dx} [I(x) y] = I(x) Q(x)$$
Integrating both sides:
$$I(x) y = \int I(x) Q(x) \, dx + C \implies \mathbf{y(x) = rac{1}{I(x)} \left[ \int I(x) Q(x) \, dx + C ight]}$$

### 3.4 Solutions by Substitution (§2.5)
Dr. Paradis highlights three primary substitution techniques:
1. **Bernoulli Equations:**
   $$y' + P(x)y = Q(x) y^n \quad (n 
eq 0, 1)$$
   *Substitution:* Let $u = y^{1-n} \implies u' = (1-n) y^{-n} y'$.
   Dividing the ODE by $y^n$ produces a linear ODE in $u$:
   $$rac{du}{dx} + (1-n) P(x) u = (1-n) Q(x)$$
2. **Homogeneous Differential Equations of Degree Zero:**
   $$M(x,y) dx + N(x,y) dy = 0 \iff rac{dy}{dx} = f\left(rac{y}{x}ight)$$
   *Substitution:* Let $u = rac{y}{x} \implies y = u x \implies rac{dy}{dx} = u + x rac{du}{dx}$.
   Substituted ODE separates immediately:
   $$u + x rac{du}{dx} = f(u) \implies rac{du}{f(u) - u} = rac{dx}{x}$$
3. **Linear Substitutions:**
   $$rac{dy}{dx} = f(Ax + By + C) \quad (B 
eq 0)$$
   *Substitution:* Let $u = Ax + By + C \implies rac{du}{dx} = A + B rac{dy}{dx} \implies rac{dy}{dx} = rac{1}{B}\left(rac{du}{dx} - Aight)$.
   Separable form:
   $$rac{du}{A + B f(u)} = dx$$

---

# Module 4: Exact Equations & Mathematical Modeling (Lectures 4 & Tutorial 3)
**Dates Delivered:** September 28 & 29, 2026 · **Textbook Reference:** Zill, Sections 2.4, 2.7 & 2.8

### 4.1 Exact Differential Equations (§2.4)
A differential expression $M(x,y)dx + N(x,y)dy = 0$ is an exact differential in a simply connected region $R$ if:
$$rac{\partial M}{\partial y} = rac{\partial N}{\partial x}$$
**Construction of Potential Function $\Psi(x,y)$:**
1. Integrate $M$ with respect to $x$: $\Psi(x,y) = \int M(x,y) \, dx + g(y)$.
2. Differentiate with respect to $y$: $rac{\partial \Psi}{\partial y} = rac{\partial}{\partial y}\int M(x,y) \, dx + g'(y) = N(x,y)$.
3. Integrate $g'(y)$ to find $g(y)$ and set $\Psi(x,y) = C$.

### 4.2 Integrating Factors for Non-Exact Equations
If $rac{\partial M}{\partial y} 
eq rac{\partial N}{\partial x}$, search for an integrating factor $\mu$:
* If $rac{M_y - N_x}{N} = f(x)$ (function of $x$ only):
  $$\mu(x) = e^{\int rac{M_y - N_x}{N} \, dx}$$
* If $rac{N_x - M_y}{M} = g(y)$ (function of $y$ only):
  $$\mu(y) = e^{\int rac{N_x - M_y}{M} \, dy}$$

### 4.3 Tutorial 3 Worked Problem 1: Radioactive Decay (§2.7)
* **Problem:** $A(0) = 100	ext{ mg}$. After 6 hours, mass decreases by $3\%$ ($97\%$ remains). Find $A(24)$.
* **Solution:**
  $$rac{dA}{dt} = k A \implies A(t) = A_0 e^{kt} = 100 e^{kt}$$
  $$A(6) = 100 e^{6k} = 97 \implies e^{6k} = 0.97 \implies k = rac{1}{6} \ln(0.97)$$
  $$A(24) = 100 e^{24k} = 100 (e^{6k})^4 = 100(0.97)^4 pprox \mathbf{88.53	ext{ mg}}$$

### 4.4 Tutorial 3 Worked Problem 2: Forensic Newton's Law of Cooling (§2.7)
* **Problem:** Normal temperature $T(0) = 98.6^\circ	ext{F}$. Body discovered at time $t_d$ at $85^\circ	ext{F}$. One hour later ($t_d + 1$) at $80^\circ	ext{F}$. Surrounding room temperature $T_s = 70^\circ	ext{F}$.
* **Solution:**
  $$rac{dT}{dt} = k(T - 70) \implies T(t) = 70 + C e^{kt}$$
  $$T(0) = 70 + C = 98.6 \implies C = 28.6 \implies T(t) = 70 + 28.6 e^{kt}$$
  At discovery $t_d$:
  $$85 = 70 + 28.6 e^{k t_d} \implies 28.6 e^{k t_d} = 15$$
  One hour later $t_d + 1$:
  $$80 = 70 + 28.6 e^{k(t_d + 1)} \implies 28.6 e^{k t_d} e^k = 10$$
  Dividing equations:
  $$rac{10}{15} = e^k \implies e^k = rac{2}{3} \implies k = \ln\left(rac{2}{3}ight)$$
  Determine $t_d$:
  $$e^{k t_d} = rac{15}{28.6} \implies k t_d = \ln\left(rac{15}{28.6}ight) \implies t_d = rac{\ln(15/28.6)}{\ln(2/3)} pprox \mathbf{1.59	ext{ hours (1 hr 36 min)}}$$

### 4.5 Nonlinear Models: Logistic Growth & Torricelli's Law (§2.8)
* **Logistic Growth:**
  $$rac{dP}{dt} = P(a - bP) = aP - bP^2 \implies P(t) = rac{a/b}{1 + C e^{-at}}$$
  Carrying capacity is $K = a/b$. If $P < a/b$, population increases ($P' > 0$). If $P > a/b$, population decreases ($P' < 0$).
* **Torricelli's Law (Leaking Tank):**
  $$rac{dV}{dt} = -A_h v = -A_h \sqrt{2gh}$$
  For cylindrical tank ($V = A_w h$):
  $$A_w rac{dh}{dt} = -A_h \sqrt{2gh} \implies rac{dh}{dt} = -rac{A_h}{A_w} \sqrt{2gh}$$

---

# Module 5: Complex Numbers & Polar Representations (Lectures 4 & 5)
**Dates Delivered:** September 29 & October 1, 2026 · **Textbook Reference:** Zill, Chapter 17 (Sections 17.1 & 17.2)

### 5.1 Cartesian Representation (§17.1)
A complex number $z \in \mathbb{C}$ is defined as:
$$z = x + iy \quad (i = \sqrt{-1}, \; i^2 = -1)$$
* Real Part: $	ext{Re}(z) = x$
* Imaginary Part: $	ext{Im}(z) = y$
* Complex Conjugate: $ar{z} = x - iy$
* Fundamental Identity: $z ar{z} = (x + iy)(x - iy) = x^2 + y^2 = |z|^2$

### 5.2 Polar Form & Geometric Modulus (§17.2)
Represented in the complex plane (Argand diagram):
* **Modulus (Absolute Value):**
  $$|z| = r = \sqrt{x^2 + y^2}$$
* **Argument (Phase Angle in Radians):**
  $$	heta = rg(z) = rctan\left(rac{y}{x}ight)$$
  **Crucial Rule:** In ENGR 213, angles must always be in **radians**, never degrees!
  * Principal Argument $	ext{Arg}(z) = \Theta \in (-\pi, \pi]$:
    $$\Theta = egin{cases} rctan(y/x) & x > 0 \ rctan(y/x) + \pi & x < 0, \; y \ge 0 \ rctan(y/x) - \pi & x < 0, \; y < 0 \ \pi/2 & x = 0, \; y > 0 \ -\pi/2 & x = 0, \; y < 0 \end{cases}$$
* **Polar & Euler Representation:**
  $$z = r(\cos	heta + i\sin	heta) = r e^{i	heta}$$

### 5.3 Complex Arithmetic in Polar Coordinates
Let $z_1 = r_1 e^{i	heta_1}$ and $z_2 = r_2 e^{i	heta_2}$:
1. **Multiplication:**
   $$z_1 z_2 = r_1 r_2 e^{i(	heta_1 + 	heta_2)} = r_1 r_2 [\cos(	heta_1 + 	heta_2) + i\sin(	heta_1 + 	heta_2)]$$
   *Moduli multiply, arguments add.*
2. **Division:**
   $$rac{z_1}{z_2} = rac{r_1}{r_2} e^{i(	heta_1 - 	heta_2)} = rac{r_1}{r_2} [\cos(	heta_1 - 	heta_2) + i\sin(	heta_1 - 	heta_2)]$$
   *Moduli divide, arguments subtract.*
3. **De Moivre's Theorem:**
   $$z^n = (r e^{i	heta})^n = r^n e^{in	heta} = r^n [\cos(n	heta) + i\sin(n	heta)]$$
4. **$n$-th Roots of Complex Numbers:**
   The $n$ distinct roots of $w = r e^{i	heta}$ are given by:
   $$z_k = \sqrt[n]{r} \exp\left(i rac{	heta + 2k\pi}{n}ight), \quad k = 0, 1, 2, \dots, n-1$$

---

# Midterm #1 Examination Strategic Checklist (October 19)
1. **Separation of Variables:** Isolate $dy$ and $dx$, integrate, and resolve arbitrary constants immediately with initial conditions.
2. **Integrating Factor Checklist:** Always ensure the coefficient of $rac{dy}{dx}$ is $+1$ before calculating $P(x)$ and $I(x) = e^{\int P dx}$.
3. **Exactness Verification:** Always write $rac{\partial M}{\partial y} = \dots$ and $rac{\partial N}{\partial x} = \dots$ clearly before integrating.
4. **Bernoulli Substitution:** Memorize $u = y^{1-n}$ and divide by $y^n$ first.
5. **Complex Numbers:** Keep angles in radians; use conjugates to divide Cartesian fractions.

---
*Concordia University · Gina Cody School of Engineering and Computer Science · Academic Integrity Repository*
