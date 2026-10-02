# ENGR 213: Applied Ordinary Differential Equations
## Quizzes & Term Tests Official Solved Examination Bank (Winter 2025)
### Department of Mechanical, Industrial & Aerospace Engineering · Concordia University
**Academic Session:** Winter 2025 / Fall 2026 · **Course:** ENGR 213  
**Curriculum Mapping:** In-Class Quizzes (Quizzes 1–4) · Term Test 1 (Version 2) · Term Test 2 · Comprehensive Step-by-Step Solutions

---

## Executive Summary & Examination Blueprint
This master document compiles and rigorously solves all official in-class quizzes and departmental term tests administered in ENGR 213 during the Winter 2025 academic session. Every problem is numbered sequentially from **Question 1 through Question 14**, providing verbatim problem statements, classification theorems, step-by-step mathematical derivations, boxed final explicit answers, and professor grading insights.

### Summary of Covered Examination Scope
* **Part I: Official In-Class Quizzes (Questions 1–4)**
  * **Question 1 (Quiz #1-G · 15 Min):** First-Order Nonlinear Separable Initial Value Problem ($y y' + x^2 = 4, y(0)=2$).
  * **Question 2 (Quiz #2-G · 15 Min):** Physical Modeling of Rates of Change Inversely Proportional to the Square of the Dependent Variable ($dy/dt = k/y^2, y(0)=1, y(1)=2$).
  * **Question 3 (Quiz #3-G · 15 Min):** Second-Order Constant-Coefficient Nonhomogeneous ODE via the Method of Undetermined Coefficients ($y'' + 5y' + 4y = \cos(3x)$).
  * **Question 4 (Quiz #4 · 20 Min):** Power Series Solution about the Ordinary Point $x_0 = 0$ ($y'' - (x+1)y = 0$, first 6 nonzero terms).
* **Part II: Official Term Test 1 — Version 2 (Questions 5–9 · Feb 21, 2025 · Marked on 100)**
  * **Question 5 (Test 1 #1/20):** First-Order ODEs: (1) Direct Integration $\frac{dy}{dx} = \sin(3x)$ and (2) First-Order Linear ODE via Integrating Factor $y' + \frac{3}{x}y = x^4$.
  * **Question 6 (Test 1 #2/15):** Complex Number Arithmetic: Addition, Division, Polar Modulus, and Multiplication ($z_1 = 4+5i, z_2 = -1+2i$).
  * **Question 7 (Test 1 #3/20):** Exact Differential Equation IVP: $(5y + 3t - 5)dt + (6y + 5t)dy = 0, y(-1)=0$.
  * **Question 8 (Test 1 #4/25):** Logistic Differential Equation IVP for Technology Adoption: $\frac{dN}{dt} = N(1 - 0.0004N), N(0)=2$.
  * **Question 9 (Test 1 #5/20):** Forensic Application of Newton's Law of Cooling: Time of Death and Ambient Thermal Decay.
* **Part III: Official Term Test 2 (Questions 10–14 · March 27, 2025 · Marked on 100)**
  * **Question 10 (Test 2 #1/20):** Cauchy-Euler Equidimensional Second-Order ODE: $x^2 y'' + 5x y' + 8y = 0$.
  * **Question 11 (Test 2 #2/20):** Variation of Parameters for Repeated Root Second-Order ODE: $y'' - 4y' + 4y = (x+1)e^{2x}$.
  * **Question 12 (Test 2 #3/20):** Second-Order Homogeneous Initial Value Problem with Critically Damped Roots: $y'' + y' + 0.25y = 0, y(0)=3, y'(0)=-3.5$.
  * **Question 13 (Test 2 #4/20):** Mechanical Vibrations of a Damped Spring-Mass System ($m=2\text{ kg}, k=72\text{ N/m}, c=4\text{ N}\cdot\text{s/m}$).
  * **Question 14 (Test 2 #5/20):** Forced Damped Harmonic Oscillator IVP: $x'' + 4x' + 4x = 10\cos(3t), x(0)=0, x'(0)=0$.

---

# Part I: Official In-Class Quizzes (Winter 2025)

### Question 1: First-Order Nonlinear Separable IVP (Official Quiz #1-G · 15 Minutes)
* **Score Weighting:** 10 Marks
* **Problem Statement:** Solve the following equation using a method seen during the lectures. Give your answer in explicit form:
  $$y y' + x^2 = 4, \quad y(0) = 2$$

#### 1. Mathematical Classification
This is a first-order, non-linear ordinary differential equation that is separable into the form $g(y) \, dy = f(x) \, dx$.

#### 2. Analytical Step-by-Step Derivation
1. **Isolate the differential terms:**
   Express $y'$ as $\frac{dy}{dx}$:
   $$y \frac{dy}{dx} = 4 - x^2$$
2. **Separate the variables:**
   Multiply both sides by $dx$:
   $$y \, dy = (4 - x^2) \, dx$$
3. **Integrate both sides:**
   $$\int y \, dy = \int (4 - x^2) \, dx$$
   $$\frac{y^2}{2} = 4x - \frac{x^3}{3} + C$$
4. **Solve algebraically for $y^2$:**
   Multiply the entire relation by 2:
   $$y^2 = 8x - \frac{2}{3}x^3 + C_1 \quad (\text{where } C_1 = 2C)$$
5. **Apply the initial condition $y(0) = 2$:**
   $$2^2 = 8(0) - \frac{2}{3}(0)^3 + C_1 \implies 4 = C_1$$
6. **Formulate the explicit solution:**
   $$y^2 = 8x - \frac{2}{3}x^3 + 4$$
   Taking the square root gives $y(x) = \pm \sqrt{8x - \frac{2}{3}x^3 + 4}$. Because the initial condition requires $y(0) = +2 > 0$, we must select the positive branch:
   $$y(x) = \sqrt{8x - \frac{2}{3}x^3 + 4}$$

#### 3. Verification & Interval of Definition
* Differentiating $y(x)$:
  $$y'(x) = \frac{8 - 2x^2}{2\sqrt{8x - \frac{2}{3}x^3 + 4}} = \frac{4 - x^2}{y(x)} \implies y y' = 4 - x^2 \implies y y' + x^2 = 4 \quad \checkmark$$
* The solution remains valid on the open interval containing $x=0$ where $8x - \frac{2}{3}x^3 + 4 > 0$.

> **Final Explicit Answer:**  
> $$y(x) = \sqrt{8x - \frac{2}{3}x^3 + 4}$$

---

### Question 2: Nonlinear Rate of Change & Proportionality IVP (Official Quiz #2-G · 15 Minutes)
* **Score Weighting:** 10 Marks
* **Problem Statement:** Consider a process ($y$) as a function of time ($t$). This process is known to behave in the following way: The rate of change of $y$ as a function of time is inversely proportional to the square of $y$.
  * (a) Find the expression of the process as a function of time.
  * (b) Find the value of $y$ at $t = 5$, if we know $y(0) = 1$ and $y(1) = 2$. Show all your steps.

#### 1. Mathematical Formulation
* The phrase "rate of change of $y$ is inversely proportional to the square of $y$" translates to:
  $$\frac{dy}{dt} \propto \frac{1}{y^2} \implies \frac{dy}{dt} = \frac{k}{y^2} = k y^{-2}$$
  where $k$ is a positive constant of proportionality.

#### 2. Analytical Step-by-Step Derivation
**Part (a): General and Particular Expression $y(t)$**
1. **Separate variables:**
   $$y^2 \, dy = k \, dt$$
2. **Integrate both sides:**
   $$\int y^2 \, dy = \int k \, dt \implies \frac{y^3}{3} = k t + C$$
   $$y^3 = 3kt + 3C = 3kt + C_1 \quad (\text{where } C_1 = 3C)$$
   $$y(t) = \sqrt[3]{3kt + C_1}$$
3. **Determine constant $C_1$ using initial condition $y(0) = 1$:**
   $$1 = \sqrt[3]{3k(0) + C_1} \implies 1 = \sqrt[3]{C_1} \implies C_1 = 1$$
   Thus, $y(t) = \sqrt[3]{3kt + 1}$.
4. **Determine the proportionality constant $k$ using condition $y(1) = 2$:**
   $$2 = \sqrt[3]{3k(1) + 1} \implies 2^3 = 3k + 1 \implies 8 = 3k + 1 \implies 3k = 7 \implies k = \frac{7}{3}$$
5. **Substitute $3k = 7$ back into the expression:**
   $$y(t) = \sqrt[3]{7t + 1}$$

**Part (b): Value of Process at $t = 5$**
Substitute $t = 5$ into the derived function:
$$y(5) = \sqrt[3]{7(5) + 1} = \sqrt[3]{35 + 1} = \sqrt[3]{36} \approx 3.3019$$

> **Final Explicit Answers:**  
> (a) $$y(t) = \sqrt[3]{7t + 1}$$  
> (b) $$y(5) = \sqrt[3]{36}$$

---

### Question 3: Second-Order Nonhomogeneous ODE via Undetermined Coefficients (Official Quiz #3-G · 15 Minutes)
* **Score Weighting:** 10 Marks
* **Problem Statement:** Find the general solution of the equation using the Undetermined Coefficient Technique:
  $$y'' + 5y' + 4y = \cos(3x)$$

#### 1. Method Overview
The complete general solution consists of the sum of the complementary homogeneous solution $y_c(x)$ and a particular solution $y_p(x)$:
$$y(x) = y_c(x) + y_p(x)$$

#### 2. Analytical Step-by-Step Derivation
1. **Find the Complementary Solution $y_c(x)$:**
   Set the right-hand side to zero: $y'' + 5y' + 4y = 0$.
   Auxiliary / Characteristic equation:
   $$m^2 + 5m + 4 = 0 \iff (m + 4)(m + 1) = 0$$
   The roots are distinct real numbers: $m_1 = -4$ and $m_2 = -1$.
   $$y_c(x) = C_1 e^{-4x} + C_2 e^{-x}$$
2. **Formulate the Particular Trial Solution $y_p(x)$:**
   The driving function is $g(x) = \cos(3x)$. Since $\pm 3i$ is not a root of the characteristic equation, no modification factor is needed.
   $$y_p(x) = A \cos(3x) + B \sin(3x)$$
3. **Compute the derivatives:**
   $$y_p'(x) = -3A \sin(3x) + 3B \cos(3x)$$
   $$y_p''(x) = -9A \cos(3x) - 9B \sin(3x)$$
4. **Substitute into the differential operator $L[y] = y'' + 5y' + 4y$:**
   $$(-9A \cos(3x) - 9B \sin(3x)) + 5(-3A \sin(3x) + 3B \cos(3x)) + 4(A \cos(3x) + B \sin(3x)) = \cos(3x)$$
   Group coefficients of $\cos(3x)$ and $\sin(3x)$:
   $$\cos(3x): \quad (-9A + 15B + 4A) = -5A + 15B = 1 \quad \text{--- [Eq. 1]}$$
   $$\sin(3x): \quad (-9B - 15A + 4B) = -15A - 5B = 0 \quad \text{--- [Eq. 2]}$$
5. **Solve the linear algebraic system:**
   From [Eq. 2]:
   $$-15A = 5B \implies B = -3A$$
   Substitute into [Eq. 1]:
   $$-5A + 15(-3A) = 1 \implies -5A - 45A = 1 \implies -50A = 1 \implies A = -\frac{1}{50}$$
   Calculate $B$:
   $$B = -3\left(-\frac{1}{50}\right) = \frac{3}{50}$$
   Thus, the particular solution is:
   $$y_p(x) = -\frac{1}{50}\cos(3x) + \frac{3}{50}\sin(3x)$$
6. **Form the full general solution:**
   $$y(x) = C_1 e^{-4x} + C_2 e^{-x} - \frac{1}{50}\cos(3x) + \frac{3}{50}\sin(3x)$$

> **Final Explicit Answer:**  
> $$y(x) = C_1 e^{-4x} + C_2 e^{-x} - \frac{1}{50}\cos(3x) + \frac{3}{50}\sin(3x)$$

---

### Question 4: Power Series Solution about Ordinary Point $x_0 = 0$ (Official Quiz #4 · 20 Minutes)
* **Score Weighting:** 10 Marks
* **Problem Statement:** Using Power Series, find the solution of the equation around the ordinary point 0 (first 6 non-zero terms):
  $$y'' - (x+1)y = 0$$
  *Steps Required:*
  1. Trial solution
  2. Sum the power series (adjust $k$ in the power and then align summation indices)
  3. Find the recurrence relation
  4. Write the answer

#### 1. Verification of Ordinary Point
The standard form is $y'' + P(x)y' + Q(x)y = 0$, where $P(x) = 0$ and $Q(x) = -(x+1)$. Both coefficients are polynomials and analytic everywhere. Hence, $x_0 = 0$ is an ordinary point with an infinite radius of convergence ($R = \infty$).

#### 2. Analytical Step-by-Step Derivation
1. **Trial Series and Derivatives:**
   $$y(x) = \sum_{n=0}^\infty c_n x^n, \quad y'(x) = \sum_{n=1}^\infty n c_n x^{n-1}, \quad y''(x) = \sum_{n=2}^\infty n(n-1) c_n x^{n-2}$$
2. **Substitute into $y'' - x y - y = 0$:**
   $$\sum_{n=2}^\infty n(n-1) c_n x^{n-2} - x \sum_{n=0}^\infty c_n x^n - \sum_{n=0}^\infty c_n x^n = 0$$
   Distribute $x$ into the second summation:
   $$\sum_{n=2}^\infty n(n-1) c_n x^{n-2} - \sum_{n=0}^\infty c_n x^{n+1} - \sum_{n=0}^\infty c_n x^n = 0$$
3. **Shift Indices to match power $x^k$:**
   * **Term 1:** Let $k = n - 2 \implies n = k + 2$. When $n = 2$, $k = 0$:
     $$\sum_{k=0}^\infty (k+2)(k+1) c_{k+2} x^k$$
   * **Term 2:** Let $k = n + 1 \implies n = k - 1$. When $n = 0$, $k = 1$:
     $$\sum_{k=1}^\infty c_{k-1} x^k$$
   * **Term 3:** Let $k = n$. When $n = 0$, $k = 0$:
     $$\sum_{k=0}^\infty c_k x^k$$
4. **Align Summation Indices to $k = 1$:**
   Extract the $k = 0$ terms from the first and third summations:
   * For $k = 0$: $(0+2)(0+1) c_2 - c_0 = 2 c_2 - c_0$
   Setting the constant term to zero gives:
   $$2 c_2 - c_0 = 0 \implies c_2 = \frac{c_0}{2}$$
   For powers $k \ge 1$, combine the summations:
   $$\sum_{k=1}^\infty \left[ (k+2)(k+1) c_{k+2} - c_k - c_{k-1} \right] x^k = 0$$
5. **Recurrence Relation:**
   Setting the coefficient of $x^k$ to zero for all $k \ge 1$:
   $$(k+2)(k+1) c_{k+2} - c_k - c_{k-1} = 0 \implies c_{k+2} = \frac{c_k + c_{k-1}}{(k+2)(k+1)}, \quad \text{for } k \ge 1$$
6. **Iterate to find higher-order coefficients in terms of $c_0$ and $c_1$:**
   * **$k = 1$:**
     $$c_3 = \frac{c_1 + c_0}{(3)(2)} = \frac{c_0}{6} + \frac{c_1}{6}$$
   * **$k = 2$:**
     $$c_4 = \frac{c_2 + c_1}{(4)(3)} = \frac{\frac{c_0}{2} + c_1}{12} = \frac{c_0}{24} + \frac{c_1}{12}$$
   * **$k = 3$:**
     $$c_5 = \frac{c_3 + c_2}{(5)(4)} = \frac{\left(\frac{c_0}{6} + \frac{c_1}{6}\right) + \frac{c_0}{2}}{20} = \frac{\frac{4 c_0}{6} + \frac{c_1}{6}}{20} = \frac{\frac{2}{3} c_0 + \frac{1}{6} c_1}{20} = \frac{c_0}{30} + \frac{c_1}{120}$$
7. **Assemble the General Solution:**
   Group terms by the two linearly independent arbitrary constants $c_0$ and $c_1$:
   $$y(x) = c_0 y_1(x) + c_1 y_2(x)$$
   where:
   $$y_1(x) = 1 + \frac{1}{2}x^2 + \frac{1}{6}x^3 + \frac{1}{24}x^4 + \frac{1}{30}x^5 + \dots$$
   $$y_2(x) = x + \frac{1}{6}x^3 + \frac{1}{12}x^4 + \frac{1}{120}x^5 + \dots$$

> **Final Explicit Answer:**  
> $$y(x) = c_0 \left(1 + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \frac{x^5}{30} + \dots\right) + c_1 \left(x + \frac{x^3}{6} + \frac{x^4}{12} + \frac{x^5}{120} + \dots\right)$$

---

# Part II: Official Term Test 1 — Version 2 (Winter 2025 · Feb 21, 2025)

### Question 5: First-Order Separable & Linear ODEs (Test 1 · Problem #1/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** Find the general solution of the first-order ODEs below:
  1. $\frac{dy}{dx} = \sin(3x)$
  2. $y' + \frac{3}{x}y = x^4$

#### 1. Solution to Sub-problem 1: $\frac{dy}{dx} = \sin(3x)$
* **Classification:** First-order directly integrable ordinary differential equation.
* **Derivation:**
  $$dy = \sin(3x) \, dx \implies y = \int \sin(3x) \, dx = -\frac{1}{3}\cos(3x) + C$$
* **Boxed Result:**
  $$y(x) = -\frac{1}{3}\cos(3x) + C$$

#### 2. Solution to Sub-problem 2: $y' + \frac{3}{x}y = x^4$
* **Classification:** First-order linear ODE in standard form $y' + P(x)y = Q(x)$, with $P(x) = \frac{3}{x}$ and $Q(x) = x^4$.
* **Derivation:**
  1. **Compute the Integrating Factor $I(x)$:**
     $$I(x) = e^{\int P(x) \, dx} = e^{\int \frac{3}{x} \, dx} = e^{3 \ln|x|} = |x|^3$$
     For $x > 0$, $I(x) = x^3$.
  2. **Multiply the differential equation by $I(x)$:**
     $$x^3 y' + 3x^2 y = x^3 \cdot x^4 \iff \frac{d}{dx}\left[ x^3 y \right] = x^7$$
  3. **Integrate both sides with respect to $x$:**
     $$x^3 y = \int x^7 \, dx = \frac{x^8}{8} + C$$
  4. **Solve explicitly for $y(x)$:**
     $$y(x) = \frac{x^5}{8} + C x^{-3} = \frac{x^5}{8} + \frac{C}{x^3}$$

> **Final Explicit Answers:**  
> 1. $$y(x) = -\frac{1}{3}\cos(3x) + C$$  
> 2. $$y(x) = \frac{x^5}{8} + \frac{C}{x^3}$$

---

### Question 6: Complex Numbers Arithmetic & Polar Modulus (Test 1 · Problem #2/15)
* **Score Weighting:** 15 Marks
* **Problem Statement:** Consider the following two complex numbers:
  $$z_1 = 4 + 5i \quad \text{and} \quad z_2 = -1 + 2i$$
  * (a) Find $z_1 + z_2$
  * (b) Find $\frac{z_1}{z_2}$ and the modulus of the ratio.
  * (c) Find $z_1 z_2$

#### Analytical Step-by-Step Derivation
**Part (a): Addition $z_1 + z_2$**
$$z_1 + z_2 = (4 + 5i) + (-1 + 2i) = (4 - 1) + (5 + 2)i = 3 + 7i$$

**Part (b): Division $\frac{z_1}{z_2}$ and Modulus $\left|\frac{z_1}{z_2}\right|$**
1. Multiply numerator and denominator by the complex conjugate $\bar{z}_2 = -1 - 2i$:
   $$\frac{z_1}{z_2} = \frac{4 + 5i}{-1 + 2i} = \frac{(4 + 5i)(-1 - 2i)}{(-1)^2 + (2)^2} = \frac{-4 - 8i - 5i - 10i^2}{1 + 4}$$
   Since $i^2 = -1$:
   $$\frac{z_1}{z_2} = \frac{-4 - 13i + 10}{5} = \frac{6 - 13i}{5} = \frac{6}{5} - \frac{13}{5}i$$
2. Modulus of the quotient:
   Using modulus properties $\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}$:
   $$|z_1| = \sqrt{4^2 + 5^2} = \sqrt{16 + 25} = \sqrt{41}$$
   $$|z_2| = \sqrt{(-1)^2 + 2^2} = \sqrt{1 + 4} = \sqrt{5}$$
   $$\left|\frac{z_1}{z_2}\right| = \frac{\sqrt{41}}{\sqrt{5}} = \sqrt{\frac{41}{5}} = \frac{\sqrt{205}}{5} \approx 2.8636$$
   *Direct Cartesian Check:*
   $$\sqrt{\left(\frac{6}{5}\right)^2 + \left(-\frac{13}{5}\right)^2} = \sqrt{\frac{36 + 169}{25}} = \sqrt{\frac{205}{25}} = \frac{\sqrt{205}}{5} \quad \checkmark$$

**Part (c): Multiplication $z_1 z_2$**
$$z_1 z_2 = (4 + 5i)(-1 + 2i) = 4(-1) + 4(2i) + 5i(-1) + 5i(2i) = -4 + 8i - 5i + 10(-1) = -14 + 3i$$

> **Final Explicit Answers:**  
> (a) $$z_1 + z_2 = 3 + 7i$$  
> (b) $$\frac{z_1}{z_2} = \frac{6}{5} - \frac{13}{5}i, \quad \left|\frac{z_1}{z_2}\right| = \sqrt{\frac{41}{5}} = \frac{\sqrt{205}}{5}$$  
> (c) $$z_1 z_2 = -14 + 3i$$

---

### Question 7: Exact Differential Equation IVP (Test 1 · Problem #3/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** Find the particular solution of the following IVP:
  $$(5y + 3t - 5) \, dt + (6y + 5t) \, dy = 0, \quad y(-1) = 0$$

#### 1. Test for Exactness
Let $M(t, y) = 5y + 3t - 5$ and $N(t, y) = 6y + 5t$.
$$\frac{\partial M}{\partial y} = 5, \quad \frac{\partial N}{\partial t} = 5$$
Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial t} = 5$ everywhere on $\mathbb{R}^2$, the differential equation is **exact**.

#### 2. Construction of the Potential Function $\Psi(t, y)$
There exists a potential function $\Psi(t, y)$ such that $\frac{\partial \Psi}{\partial t} = M$ and $\frac{\partial \Psi}{\partial y} = N$.
1. **Integrate $M(t, y)$ with respect to $t$:**
   $$\Psi(t, y) = \int (5y + 3t - 5) \, dt = 5yt + \frac{3}{2}t^2 - 5t + h(y)$$
2. **Differentiate $\Psi(t, y)$ with respect to $y$ and equate to $N(t, y)$:**
   $$\frac{\partial \Psi}{\partial y} = 5t + h'(y) = 6y + 5t \implies h'(y) = 6y$$
3. **Integrate $h'(y)$:**
   $$h(y) = 3y^2$$
4. **General Implicit Solution:**
   $$3y^2 + 5ty + \frac{3}{2}t^2 - 5t = C$$

#### 3. Apply the Initial Condition $y(-1) = 0$
Substitute $t = -1$ and $y = 0$:
$$3(0)^2 + 5(-1)(0) + \frac{3}{2}(-1)^2 - 5(-1) = C \implies 0 + 0 + \frac{3}{2} + 5 = C \implies C = \frac{13}{2}$$
Multiply through by 2 to clear fractions:
$$6y^2 + 10ty + 3t^2 - 10t - 13 = 0$$

#### 4. Explicit Formulation
Apply the quadratic formula to solve for $y$:
$$y(t) = \frac{-10t \pm \sqrt{(10t)^2 - 4(6)(3t^2 - 10t - 13)}}{2(6)} = \frac{-10t \pm \sqrt{100t^2 - 72t^2 + 240t + 312}}{12}$$
$$y(t) = \frac{-10t \pm \sqrt{28t^2 + 240t + 312}}{12} = \frac{-5t \pm \sqrt{7t^2 + 60t + 78}}{6}$$
To satisfy $y(-1) = 0$:
$$\frac{-5(-1) \pm \sqrt{7(-1)^2 + 60(-1) + 78}}{6} = \frac{5 \pm \sqrt{7 - 60 + 78}}{6} = \frac{5 \pm \sqrt{25}}{6} = \frac{5 \pm 5}{6}$$
Choosing the negative sign yields $\frac{5 - 5}{6} = 0$.

> **Final Explicit Answer:**  
> $$y(t) = \frac{-5t - \sqrt{7t^2 + 60t + 78}}{6} \quad \text{or implicitly: } 6y^2 + 10ty + 3t^2 - 10t = 13$$

---

### Question 8: Logistic Differential Equation for Technology Adoption (Test 1 · Problem #4/25)
* **Score Weighting:** 25 Marks
* **Problem Statement:** The number $N(t)$ of stores in Canada using a computerized checkout system is described by the initial value problem:
  $$\frac{dN}{dt} = N(1 - 0.0004N), \quad N(0) = 2$$
  Solve the initial value problem (show all your steps) to get $N(t)$, and find how many stores are expected to use this system for $t = 12$.

#### 1. Identification of Parameters
This is the Verhulst logistic growth model:
$$\frac{dN}{dt} = r N\left(1 - \frac{N}{K}\right)$$
Here, intrinsic growth rate $r = 1$, and $0.0004 = \frac{1}{2500}$, meaning the carrying capacity (maximum market saturation) is $K = 2500$ stores.

#### 2. Analytical Step-by-Step Derivation
1. **Separate variables:**
   $$\frac{dN}{N(1 - 0.0004N)} = dt \iff \frac{2500 \, dN}{N(2500 - N)} = dt$$
2. **Partial Fraction Decomposition:**
   $$\frac{2500}{N(2500 - N)} = \frac{A}{N} + \frac{B}{2500 - N}$$
   $$2500 = A(2500 - N) + B N$$
   Setting $N = 0 \implies A = 1$. Setting $N = 2500 \implies B = 1$.
   $$\left( \frac{1}{N} + \frac{1}{2500 - N} \right) dN = dt$$
3. **Integrate both sides:**
   $$\ln|N| - \ln|2500 - N| = t + C \implies \ln\left| \frac{N}{2500 - N} \right| = t + C$$
   $$\frac{N}{2500 - N} = C_0 e^t \quad (\text{where } C_0 = \pm e^C)$$
4. **Determine $C_0$ using $N(0) = 2$:**
   $$\frac{2}{2500 - 2} = C_0 e^0 \implies C_0 = \frac{2}{2498} = \frac{1}{1249}$$
5. **Solve explicitly for $N(t)$:**
   $$\frac{N}{2500 - N} = \frac{e^t}{1249} \implies 1249 N = 2500 e^t - N e^t \implies N(1249 + e^t) = 2500 e^t$$
   $$N(t) = \frac{2500 e^t}{1249 + e^t} = \frac{2500}{1 + 1249 e^{-t}}$$

#### 3. Evaluation at $t = 12$
Substitute $t = 12$:
$$N(12) = \frac{2500}{1 + 1249 e^{-12}}$$
Compute $e^{-12}$:
$$e^{-12} \approx 6.14421 \times 10^{-6}$$
$$1249 \times e^{-12} \approx 1249 \times 6.14421 \times 10^{-6} \approx 0.007674$$
$$N(12) = \frac{2500}{1 + 0.007674} = \frac{2500}{1.007674} \approx 2480.97 \approx 2481 \text{ stores}$$

> **Final Explicit Answers:**  
> $$N(t) = \frac{2500}{1 + 1249 e^{-t}}$$  
> At $t = 12$: $$N(12) \approx 2481 \text{ stores (99.24\% of market saturation)}$$

---

### Question 9: Forensic Newton's Law of Cooling (Test 1 · Problem #5/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** A dead body was found in a closed room having a constant temperature of $20^\circ\text{C}$. At the time of discovery, the body temperature was $27^\circ\text{C}$. One hour later, it was at $24^\circ\text{C}$. Assume the time of death is $t = 0$ and that a living body has a temperature of $37^\circ\text{C}$. How many hours elapsed before the body was found?  
  *(Hint: use Newton's law of cooling: $\frac{dT}{dt} = k(T - T_m)$)*

#### 1. Mathematical Formulation
* Ambient temperature: $T_m = 20^\circ\text{C}$.
* Initial body temperature at death ($t = 0$): $T(0) = 37^\circ\text{C}$.
* Discovery occurs at an unknown elapsed time $t_d$. Measured: $T(t_d) = 27^\circ\text{C}$.
* One hour post-discovery ($t = t_d + 1$): $T(t_d + 1) = 24^\circ\text{C}$.

#### 2. Analytical Step-by-Step Derivation
1. **Solve Newton's Law of Cooling:**
   $$\frac{dT}{dt} = k(T - 20) \implies \frac{dT}{T - 20} = k \, dt$$
   $$\ln|T - 20| = k t + C \implies T(t) - 20 = C_0 e^{kt} \implies T(t) = 20 + C_0 e^{kt}$$
2. **Apply Initial Condition $T(0) = 37$:**
   $$37 = 20 + C_0 e^0 \implies C_0 = 17$$
   Therefore, the temperature trajectory is:
   $$T(t) = 20 + 17 e^{kt}$$
3. **Formulate the system of two observation equations:**
   * At discovery $t = t_d$:
     $$27 = 20 + 17 e^{k t_d} \implies 17 e^{k t_d} = 7 \implies e^{k t_d} = \frac{7}{17} \quad \text{--- [Eq. A]}$$
   * One hour later $t = t_d + 1$:
     $$24 = 20 + 17 e^{k (t_d + 1)} \implies 17 e^{k t_d} e^k = 4 \quad \text{--- [Eq. B]}$$
4. **Determine the cooling constant $k$:**
   Substitute [Eq. A] into [Eq. B]:
   $$17 \left( \frac{7}{17} \right) e^k = 4 \implies 7 e^k = 4 \implies e^k = \frac{4}{7}$$
   $$k = \ln\left(\frac{4}{7}\right) \approx -0.559616 \text{ hr}^{-1}$$
5. **Calculate the elapsed time $t_d$:**
   From [Eq. A], take the natural logarithm:
   $$k t_d = \ln\left(\frac{7}{17}\right) \implies t_d = \frac{\ln(7/17)}{k} = \frac{\ln(7/17)}{\ln(4/7)}$$
   Evaluate numerical values:
   $$\ln\left(\frac{7}{17}\right) = \ln(0.411765) \approx -0.887303$$
   $$\ln\left(\frac{4}{7}\right) = \ln(0.571429) \approx -0.559616$$
   $$t_d = \frac{-0.887303}{-0.559616} \approx 1.58555 \text{ hours}$$
   Convert to hours and minutes:
   $$0.58555 \times 60 \approx 35.13 \text{ minutes} \implies 1 \text{ hour, } 35 \text{ minutes and } 8 \text{ seconds}$$

> **Final Explicit Answer:**  
> $$t_d = \frac{\ln(7/17)}{\ln(4/7)} \approx 1.59 \text{ hours (approximately 1 hour and 35 minutes)}$$

---

# Part III: Official Term Test 2 (Winter 2025 · March 27, 2025)

### Question 10: Cauchy-Euler Equidimensional ODE (Test 2 · Problem #1/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** Find the general solution of the ODE below:
  $$x^2 y'' + 5x y' + 8y = 0 \quad (x > 0)$$

#### 1. Mathematical Classification
This is a second-order homogeneous Cauchy-Euler (equidimensional) differential equation with constant coefficients $a = 1$, $b = 5$, and $c = 8$.

#### 2. Analytical Step-by-Step Derivation
1. **Trial Substitution:**
   Assume a solution of the form $y(x) = x^m$.
   $$y' = m x^{m-1}, \quad y'' = m(m-1) x^{m-2}$$
2. **Substitute into the differential equation:**
   $$x^2 [m(m-1) x^{m-2}] + 5x [m x^{m-1}] + 8 [x^m] = 0$$
   $$x^m [m(m-1) + 5m + 8] = 0$$
3. **Form and solve the auxiliary characteristic equation:**
   $$m^2 - m + 5m + 8 = 0 \iff m^2 + 4m + 8 = 0$$
   Use the quadratic formula:
   $$m = \frac{-4 \pm \sqrt{4^2 - 4(1)(8)}}{2} = \frac{-4 \pm \sqrt{16 - 32}}{2} = \frac{-4 \pm \sqrt{-16}}{2} = -2 \pm 2i$$
   The roots are complex conjugates: $\alpha = -2$ and $\beta = 2$.
4. **General Solution Formula for Complex Conjugate Roots:**
   For Cauchy-Euler equations with roots $\alpha \pm i\beta$:
   $$y(x) = x^\alpha \left[ C_1 \cos(\beta \ln x) + C_2 \sin(\beta \ln x) \right]$$
   Substitute $\alpha = -2$ and $\beta = 2$:
   $$y(x) = x^{-2} \left[ C_1 \cos(2 \ln x) + C_2 \sin(2 \ln x) \right] = \frac{C_1 \cos(2 \ln x) + C_2 \sin(2 \ln x)}{x^2}$$

> **Final Explicit Answer:**  
> $$y(x) = x^{-2} \left[ C_1 \cos(2\ln x) + C_2 \sin(2\ln x) \right]$$

---

### Question 11: Variation of Parameters for 2nd-Order ODE (Test 2 · Problem #2/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** Using Variation of parameter technique, solve:
  $$y'' - 4y' + 4y = (x+1)e^{2x}$$

#### 1. Homogeneous Solution and Basis Functions
Auxiliary equation:
$$m^2 - 4m + 4 = 0 \iff (m - 2)^2 = 0 \implies m_1 = m_2 = 2 \text{ (repeated real root)}$$
Fundamental set of solutions:
$$y_1(x) = e^{2x}, \quad y_2(x) = x e^{2x}$$
$$y_c(x) = C_1 e^{2x} + C_2 x e^{2x}$$

#### 2. Wronskian Determinant Calculation
$$W(y_1, y_2)(x) = \begin{vmatrix} e^{2x} & x e^{2x} \\ 2e^{2x} & (1 + 2x)e^{2x} \end{vmatrix} = e^{2x}(1 + 2x)e^{2x} - 2x e^{2x} e^{2x} = e^{4x}(1 + 2x - 2x) = e^{4x} \neq 0$$

#### 3. Variation of Parameters Formula
With driving term $g(x) = (x+1)e^{2x}$, particular solution is $y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$:
1. **Calculate $u_1(x)$:**
   $$u_1'(x) = -\frac{y_2(x) g(x)}{W(x)} = -\frac{(x e^{2x})(x+1)e^{2x}}{e^{4x}} = -\frac{x(x+1)e^{4x}}{e^{4x}} = -(x^2 + x)$$
   $$u_1(x) = \int -(x^2 + x) \, dx = -\frac{x^3}{3} - \frac{x^2}{2}$$
2. **Calculate $u_2(x)$:**
   $$u_2'(x) = \frac{y_1(x) g(x)}{W(x)} = \frac{(e^{2x})(x+1)e^{2x}}{e^{4x}} = \frac{(x+1)e^{4x}}{e^{4x}} = x + 1$$
   $$u_2(x) = \int (x + 1) \, dx = \frac{x^2}{2} + x$$
3. **Assemble and Simplify $y_p(x)$:**
   $$y_p(x) = \left(-\frac{x^3}{3} - \frac{x^2}{2}\right) e^{2x} + \left(\frac{x^2}{2} + x\right) x e^{2x} = e^{2x} \left( -\frac{x^3}{3} - \frac{x^2}{2} + \frac{x^3}{2} + x^2 \right)$$
   Combine like terms:
   $$-\frac{1}{3}x^3 + \frac{1}{2}x^3 = \frac{1}{6}x^3, \quad -\frac{1}{2}x^2 + x^2 = \frac{1}{2}x^2$$
   $$y_p(x) = e^{2x} \left( \frac{x^3}{6} + \frac{x^2}{2} \right)$$
4. **General Solution:**
   $$y(x) = C_1 e^{2x} + C_2 x e^{2x} + e^{2x}\left(\frac{x^3}{6} + \frac{x^2}{2}\right)$$

> **Final Explicit Answer:**  
> $$y(x) = C_1 e^{2x} + C_2 x e^{2x} + e^{2x}\left(\frac{x^3}{6} + \frac{x^2}{2}\right)$$

---

### Question 12: Second-Order Homogeneous IVP with Repeated Roots (Test 2 · Problem #3/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** Find the particular solution of the following IVP:
  $$y'' + y' + 0.25y = 0, \quad y(0) = 3, \; y'(0) = -3.5$$

#### 1. Analytical Step-by-Step Derivation
1. **Auxiliary Equation:**
   $$m^2 + m + 0.25 = 0 \iff m^2 + m + \frac{1}{4} = 0 \iff \left(m + \frac{1}{2}\right)^2 = 0$$
   Repeated real root: $m_1 = m_2 = -0.5 = -\frac{1}{2}$.
2. **General Solution:**
   $$y(x) = (C_1 + C_2 x) e^{-0.5x}$$
3. **Compute the Derivative $y'(x)$:**
   $$y'(x) = C_2 e^{-0.5x} - 0.5(C_1 + C_2 x) e^{-0.5x} = \left( C_2 - 0.5 C_1 - 0.5 C_2 x \right) e^{-0.5x}$$
4. **Apply Initial Conditions:**
   * $y(0) = 3$:
     $$(C_1 + C_2(0)) e^0 = 3 \implies C_1 = 3$$
   * $y'(0) = -3.5$:
     $$C_2 - 0.5(3) = -3.5 \implies C_2 - 1.5 = -3.5 \implies C_2 = -2$$
5. **Formulate the Particular Solution:**
   $$y(x) = (3 - 2x) e^{-0.5x}$$

> **Final Explicit Answer:**  
> $$y(x) = (3 - 2x) e^{-0.5x}$$

---

### Question 13: Mechanical Vibrations of Damped Spring-Mass System (Test 2 · Problem #4/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** A 2 kg mass is attached to a spring of constant 72 N/m. The system is horizontal and the ground provides a damping force equal to 4 times the velocity.
  * (a) Write the equation for the forces involved, starting with Newton's second law (sum of forces).
  * (b) Solve the equation found in (a).
  * (c) Find the velocity of the mass 1 s after release if the mass is released from a position $x(0) = 2\text{ m}$ (released from rest, $x'(0) = 0$).

#### Analytical Step-by-Step Derivation
**Part (a): Newton's Second Law Force Balance**
1. System parameters:
   * Mass: $m = 2\text{ kg}$
   * Damping coefficient: $c = 4\text{ N}\cdot\text{s/m}$ (damping force opposes velocity: $F_d = -c \frac{dx}{dt}$)
   * Spring constant: $k = 72\text{ N/m}$ (restoring force opposes displacement: $F_s = -k x$)
2. Sum of forces:
   $$\sum F = m a \implies -k x - c \frac{dx}{dt} = m \frac{d^2 x}{dt^2}$$
   $$m x'' + c x' + k x = 0 \implies 2 x'' + 4 x' + 72 x = 0$$
   Dividing by 2 gives the standard monic form:
   $$x'' + 2x' + 36x = 0$$

**Part (b): Solution of the Homogeneous ODE**
1. Characteristic equation:
   $$m^2 + 2m + 36 = 0 \implies m = \frac{-2 \pm \sqrt{2^2 - 4(1)(36)}}{2} = \frac{-2 \pm \sqrt{4 - 144}}{2} = \frac{-2 \pm \sqrt{-140}}{2} = -1 \pm i\sqrt{35}$$
2. Underdamped motion with decay factor $\alpha = 1$ and damped natural frequency $\omega_d = \sqrt{35} \approx 5.9161\text{ rad/s}$:
   $$x(t) = e^{-t} \left[ C_1 \cos(\sqrt{35}t) + C_2 \sin(\sqrt{35}t) \right]$$

**Part (c): Determination of Velocity at $t = 1\text{ s}$**
1. Apply initial conditions $x(0) = 2\text{ m}$ and $x'(0) = 0$:
   $$x(0) = C_1 = 2$$
2. Differentiate $x(t)$ using the product rule:
   $$x'(t) = -e^{-t} [C_1 \cos(\sqrt{35}t) + C_2 \sin(\sqrt{35}t)] + e^{-t} [-\sqrt{35} C_1 \sin(\sqrt{35}t) + \sqrt{35} C_2 \cos(\sqrt{35}t)]$$
   $$x'(t) = e^{-t} \left[ (\sqrt{35} C_2 - C_1)\cos(\sqrt{35}t) - (C_2 + \sqrt{35} C_1)\sin(\sqrt{35}t) \right]$$
3. Apply $x'(0) = 0$:
   $$\sqrt{35} C_2 - C_1 = 0 \implies \sqrt{35} C_2 - 2 = 0 \implies C_2 = \frac{2}{\sqrt{35}}$$
4. Simplified velocity function $v(t) = x'(t)$:
   Since $\sqrt{35} C_2 - C_1 = 0$, the cosine component vanishes completely:
   $$v(t) = x'(t) = -e^{-t} \left( C_2 + \sqrt{35} C_1 \right) \sin(\sqrt{35}t)$$
   Substitute $C_1 = 2$ and $C_2 = \frac{2}{\sqrt{35}}$:
   $$C_2 + \sqrt{35} C_1 = \frac{2}{\sqrt{35}} + 2\sqrt{35} = \frac{2 + 70}{\sqrt{35}} = \frac{72}{\sqrt{35}}$$
   $$v(t) = -\frac{72}{\sqrt{35}} e^{-t} \sin(\sqrt{35}t)$$
5. Evaluate at $t = 1\text{ s}$:
   $$v(1) = -\frac{72}{\sqrt{35}} e^{-1} \sin(\sqrt{35})$$
   Numerical values:
   $$\sqrt{35} \approx 5.91608 \text{ rad}$$
   $$\sin(5.91608\text{ rad}) \approx -0.35825$$
   $$e^{-1} \approx 0.367879$$
   $$\frac{72}{\sqrt{35}} \approx \frac{72}{5.91608} \approx 12.1699$$
   $$v(1) \approx -(12.1699) \times (0.367879) \times (-0.35825) \approx +1.604 \text{ m/s}$$

> **Final Explicit Answers:**  
> (a) $$2 x'' + 4 x' + 72 x = 0 \iff x'' + 2x' + 36x = 0$$  
> (b) $$x(t) = e^{-t} \left[ C_1 \cos(\sqrt{35}t) + C_2 \sin(\sqrt{35}t) \right]$$  
> (c) $$v(1) = -\frac{72}{\sqrt{35}} e^{-1} \sin(\sqrt{35}) \approx +1.60 \text{ m/s}$$

---

### Question 14: Forced Harmonic Oscillator with Damping IVP (Test 2 · Problem #5/20)
* **Score Weighting:** 20 Marks
* **Problem Statement:** A force is driving a system of mass and spring such as:
  $$x'' + 4x' + 4x = 10\cos(3t)$$
  Find the equation of motion if the initial position and velocity are 0 ($x(0) = 0, x'(0) = 0$).

#### Analytical Step-by-Step Derivation
1. **Homogeneous Complementary Solution $x_h(t)$:**
   Characteristic equation:
   $$m^2 + 4m + 4 = 0 \iff (m + 2)^2 = 0 \implies m_1 = m_2 = -2 \text{ (critically damped)}$$
   $$x_h(t) = (C_1 + C_2 t) e^{-2t}$$
2. **Particular Solution $x_p(t)$ via Undetermined Coefficients:**
   Driving frequency is $\omega = 3$. Assume:
   $$x_p(t) = A \cos(3t) + B \sin(3t)$$
   Compute derivatives:
   $$x_p'(t) = -3A \sin(3t) + 3B \cos(3t)$$
   $$x_p''(t) = -9A \cos(3t) - 9B \sin(3t)$$
   Substitute into $x'' + 4x' + 4x = 10\cos(3t)$:
   $$(-9A \cos(3t) - 9B \sin(3t)) + 4(-3A \sin(3t) + 3B \cos(3t)) + 4(A \cos(3t) + B \sin(3t)) = 10\cos(3t)$$
   Collect terms for $\cos(3t)$ and $\sin(3t)$:
   $$\cos(3t): \quad (-9A + 12B + 4A) = -5A + 12B = 10 \quad \text{--- [Eq. 1]}$$
   $$\sin(3t): \quad (-9B - 12A + 4B) = -12A - 5B = 0 \implies B = -\frac{12}{5}A \quad \text{--- [Eq. 2]}$$
3. **Solve for $A$ and $B$:**
   Substitute [Eq. 2] into [Eq. 1]:
   $$-5A + 12\left(-\frac{12}{5}A\right) = 10 \implies -5A - \frac{144}{5}A = 10 \implies -\frac{169}{5}A = 10$$
   $$A = -\frac{50}{169}$$
   Compute $B$:
   $$B = -\frac{12}{5}\left(-\frac{50}{169}\right) = \frac{120}{169}$$
   Therefore:
   $$x_p(t) = -\frac{50}{169}\cos(3t) + \frac{120}{169}\sin(3t)$$
4. **General Solution:**
   $$x(t) = (C_1 + C_2 t) e^{-2t} - \frac{50}{169}\cos(3t) + \frac{120}{169}\sin(3t)$$
5. **Apply Initial Conditions $x(0) = 0$ and $x'(0) = 0$:**
   * $x(0) = 0$:
     $$(C_1 + 0) e^0 - \frac{50}{169}(1) + \frac{120}{169}(0) = 0 \implies C_1 - \frac{50}{169} = 0 \implies C_1 = \frac{50}{169}$$
   * Differentiate $x(t)$:
     $$x'(t) = C_2 e^{-2t} - 2(C_1 + C_2 t)e^{-2t} + \frac{150}{169}\sin(3t) + \frac{360}{169}\cos(3t)$$
   * $x'(0) = 0$:
     $$C_2 - 2 C_1 + \frac{360}{169} = 0 \implies C_2 - 2\left(\frac{50}{169}\right) + \frac{360}{169} = 0$$
     $$C_2 - \frac{100}{169} + \frac{360}{169} = 0 \implies C_2 + \frac{260}{169} = 0 \implies C_2 = -\frac{260}{169} = -\frac{20}{13}$$
6. **Final Equation of Motion:**
   $$x(t) = \left(\frac{50}{169} - \frac{260}{169} t\right) e^{-2t} - \frac{50}{169}\cos(3t) + \frac{120}{169}\sin(3t)$$

> **Final Explicit Answer:**  
> $$x(t) = \left(\frac{50}{169} - \frac{260}{169} t\right) e^{-2t} - \frac{50}{169}\cos(3t) + \frac{120}{169}\sin(3t)$$

---
*Concordia University · Gina Cody School of Engineering and Computer Science · Academic Integrity Repository*
