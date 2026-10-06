# ENGR 213 · Gradesaver Master Solving System & Exam Blueprint
## Complete Analytical Framework, Step-by-Step Solution Protocols & Exam Problem Bank
**Concordia University · Gina Cody School of Engineering and Computer Science**  
*Course: Applied Ordinary Differential Equations (ENGR 213) · Fall 2026 / Winter 2025*

---

## Executive Overview: The Gradesaver Methodology

The **Gradesaver System** is a methodical, step-by-step problem-solving architecture developed to eliminate ambiguity and mechanical errors on ENGR 213 quizzes, midterms, and final examinations. Differential equations are frequently perceived as a collection of disjointed tricks; in reality, every first-order differential equation can be mapped into a deterministic decision matrix.

### The 5-Phase Universal Solution Protocol

Every single problem on the examination must be processed through these five distinct operational phases:

$$\boxed{\text{Phase 1: Standard Normalization}} \longrightarrow \boxed{\text{Phase 2: Diagnostic Form Test}} \longrightarrow \boxed{\text{Phase 3: Transformation / Integration}} \longrightarrow \boxed{\text{Phase 4: Parameter Determination}} \longrightarrow \boxed{\text{Phase 5: Interval of Validity Verification}}$$

1. **Phase 1: Standard Normalization**: Isolate $\frac{dy}{dx}$ with unit coefficient ($1 \cdot y'$), or express in symmetric differential form $M(x,y)\,dx + N(x,y)\,dy = 0$.
2. **Phase 2: Diagnostic Form Test**: Run the 4-Gate Classifier:
   - *Gate A*: Can variables be separated as $h(y)\,dy = g(x)\,dx$?
   - *Gate B*: Is it linear in $y$, $y' + P(x)y = f(x)$? (Or linear in $x$, $\frac{dx}{dy} + P(y)x = f(y)$?)
   - *Gate C*: Is it exact, $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$? If not, does a 1-variable integrating factor $\mu(x)$ or $\mu(y)$ exist?
   - *Gate D*: Is it reducible by substitution? ($u = Ax + By + C$, Homogeneous $y = ux$, or Bernoulli $u = y^{1-n}$).
3. **Phase 3: Transformation & Analytical Integration**: Apply the designated transformation, compute antiderivatives with exact constants $+ C$.
4. **Phase 4: Parameter Determination ($C$)**: If an Initial Value Problem (IVP) is given ($y(x_0) = y_0$), substitute immediately to find the unique constant $C$.
5. **Phase 5: Interval of Validity ($I$) & Singularities**: State the maximal open interval containing $x_0$ where the solution and its derivative are real, finite, and continuous.

---

## Section 1: Separable Differential Equations ($y' = g(x)h(y)$)

### 1.1 The Tutor Heuristic ("The Move Here")
A first-order equation is separable if all $y$-dependencies can be factored onto the differential $dy$ and all $x$-dependencies onto $dx$.

$$\frac{dy}{dx} = g(x)h(y) \implies \frac{1}{h(y)}\,dy = g(x)\,dx$$

**Critical Watch-Out (Equilibrium Singular Solutions):**  
Before dividing by $h(y)$, determine all roots $y^*$ such that $h(y^*) = 0$. These constant functions $y(x) = y^*$ are **equilibrium solutions**. If an equilibrium solution cannot be obtained by choosing any value of the integration constant $C$, it is a **singular solution**.

### 1.2 Step-by-Step Exam Protocol
- **Step 1 (Factorization)**: Rewrite into $M(x)\,dx + N(y)\,dy = 0$.
- **Step 2 (Division & Separation)**: Divide by $N(x)M(y)$ and set up integrals:
  $$\int \frac{1}{h(y)}\,dy = \int g(x)\,dx + C$$
- **Step 3 (Integration & Logarithmic Exponentiation)**: When integrals produce $\ln|y|$, exponentiate:
  $$|y| = e^{\int g(x)dx + C} = e^C e^{\int g(x)dx} = K e^{\int g(x)dx}, \quad K = \pm e^C \neq 0$$
  Allowing $K = 0$ frequently absorbs the equilibrium solution $y = 0$.
- **Step 4 (IVP Substitution)**: Plug in $x_0, y_0$ before complicating algebraic inversion.
- **Step 5 (Explicit Branch Selection)**: If $y^2 = f(x)$, select the sign $\pm \sqrt{f(x)}$ matching $y(x_0) = y_0$.

### 1.3 Exemplar Problems from Tutor Blueprint

#### Problem 1.1: Separable Trigonometric IVP
$$\frac{dy}{dx} = 3x^2(y^2 + 1), \quad y(0) = 1$$

*Solution Walkthrough:*
1. **Identify and Separate:**
   $$\frac{dy}{y^2 + 1} = 3x^2\,dx$$
2. **Integrate both sides:**
   $$\int \frac{dy}{y^2 + 1} = \int 3x^2\,dx \implies \arctan(y) = x^3 + C$$
3. **Apply Initial Condition $y(0) = 1$:**
   $$\arctan(1) = 0^3 + C \implies C = \frac{\pi}{4}$$
4. **Isolate $y$ explicitly:**
   $$y(x) = \tan\left(x^3 + \frac{\pi}{4}\right)$$
5. **Interval of Validity:**
   The tangent function has vertical asymptotes at $\pm \frac{\pi}{2}$. Therefore:
   $$-\frac{\pi}{2} < x^3 + \frac{\pi}{4} < \frac{\pi}{2} \implies -\frac{3\pi}{4} < x^3 < \frac{\pi}{4} \implies \left(-\frac{3\pi}{4}\right)^{1/3} < x < \left(\frac{\pi}{4}\right)^{1/3}$$
   Interval of definition: $I = \left(-\left(\frac{3\pi}{4}\right)^{1/3}, \left(\frac{\pi}{4}\right)^{1/3}\right)$.

---

## Section 2: First-Order Linear Equations ($y' + P(x)y = f(x)$)

### 2.1 The Integrating Factor Framework
For any linear first-order ODE:
$$a_1(x)\frac{dy}{dx} + a_0(x)y = g(x)$$

### 2.2 Step-by-Step Exam Protocol
- **Step 1 (Normalization)**: Divide by $a_1(x)$ to establish the standard canonical form:
  $$\frac{dy}{dx} + P(x)y = f(x), \quad P(x) = \frac{a_0(x)}{a_1(x)}, \quad f(x) = \frac{g(x)}{a_1(x)}$$
  *Singularity Audit:* Singularities occur wherever $a_1(x) = 0$.
- **Step 2 (Integrating Factor Computation)**:
  $$I(x) = e^{\int P(x)\,dx}$$
  *Rule:* Do not add a constant $+ C$ to the exponent of $I(x)$. Simplify $e^{n \ln|x|} = |x|^n \implies x^n$.
- **Step 3 (Product Rule Collapse)**:
  $$\frac{d}{dx}\Big[ I(x) y \Big] = I(x) f(x)$$
- **Step 4 (Integration)**:
  $$I(x) y = \int I(x) f(x)\,dx + C \implies y(x) = \frac{1}{I(x)}\left( \int I(x) f(x)\,dx + C \right)$$
- **Step 5 (Inversion & Interval of Definition)**:
  Interval $I$ is the continuous segment around $x_0$ where both $P(x)$ and $f(x)$ are continuous.

### 2.3 Exemplar Problems from Tutor Blueprint

#### Problem 2.1: Singular Linear ODE
$$x\frac{dy}{dx} - 3y = x^3, \quad x > 0$$

*Solution Walkthrough:*
1. **Normalize:**
   $$y' - \frac{3}{x}y = x^2$$
2. **Integrating Factor:**
   $$P(x) = -\frac{3}{x} \implies \int P(x)\,dx = -3\ln(x) = \ln(x^{-3})$$
   $$I(x) = e^{\ln(x^{-3})} = x^{-3} = \frac{1}{x^3}$$
3. **Multiply and Collapse:**
   $$\frac{d}{dx}\left[ x^{-3} y \right] = x^{-3} \cdot x^2 = \frac{1}{x}$$
4. **Integrate:**
   $$x^{-3} y = \int \frac{1}{x}\,dx + C = \ln|x| + C$$
5. **General Solution ($x > 0$):**
   $$y(x) = x^3(\ln(x) + C)$$

#### Problem 2.2: Trigonometric Linear IVP
$$y' + y\tan(x) = \cos^2(x), \quad y(0) = -1$$

*Solution Walkthrough:*
1. **Identify $P(x) = \tan(x)$ and $f(x) = \cos^2(x)$:**
2. **Integrating Factor:**
   $$I(x) = e^{\int \tan(x)dx} = e^{\ln|\sec(x)|} = \sec(x)$$
3. **Collapse and Integrate:**
   $$\frac{d}{dx}\big[ \sec(x) y \big] = \sec(x) \cos^2(x) = \cos(x)$$
   $$\sec(x) y = \int \cos(x) dx + C = \sin(x) + C$$
4. **General Solution:**
   $$y(x) = \frac{\sin(x) + C}{\sec(x)} = (\sin(x) + C)\cos(x)$$
5. **Apply Initial Condition $y(0) = -1$:**
   $$-1 = (0 + C)\cos(0) = C \implies C = -1$$
   $$y(x) = (\sin(x) - 1)\cos(x) = \sin(x)\cos(x) - \cos(x) = \frac{1}{2}\sin(2x) - \cos(x)$$
6. **Interval of Validity:** $I = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.

---

## Section 3: Exact Differential Equations & Integrating Factors

### 3.1 Test for Exactness
A differential equation written as:
$$M(x,y)\,dx + N(x,y)\,dy = 0$$
is **exact** if and only if:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
which guarantees the existence of a potential function $\Psi(x,y)$ such that $d\Psi = M\,dx + N\,dy = 0$, giving the implicit general solution:
$$\Psi(x,y) = C$$

### 3.2 Constructing $\Psi(x,y)$ (The Tutor Two-Path Method)
- **Path A (Integrating with respect to $x$):**
  $$\Psi(x,y) = \int M(x,y)\,dx + g(y)$$
  Differentiating with respect to $y$:
  $$\frac{\partial \Psi}{\partial y} = \frac{\partial}{\partial y}\left( \int M(x,y)\,dx \right) + g'(y) = N(x,y)$$
  Isolate $g'(y)$, verify that all $x$-terms cancel, integrate to find $g(y)$, and assemble $\Psi(x,y) = C$.

### 3.3 Non-Exact Equations & Special Integrating Factors
If $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$:
- **Case 1 (Function of $x$ alone):**
  $$\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N} = f(x) \implies \mu(x) = e^{\int f(x)\,dx}$$
- **Case 2 (Function of $y$ alone):**
  $$\frac{\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}}{M} = g(y) \implies \mu(y) = e^{\int g(y)\,dy}$$

### 3.4 Exemplar Problem from Tutor Blueprint

#### Problem 3.1: Non-Exact Equation with Integrating Factor
$$(x + y)\,dx + x\ln(x)\,dy = 0, \quad x > 1$$

*Solution Walkthrough:*
1. $M = x + y \implies \frac{\partial M}{\partial y} = 1$
2. $N = x\ln(x) \implies \frac{\partial N}{\partial x} = \ln(x) + 1$
3. Difference: $\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} = 1 - (\ln(x) + 1) = -\ln(x)$
4. Divide by $N$:
   $$\frac{-\ln(x)}{x \ln(x)} = -\frac{1}{x} = f(x)$$
5. Integrating factor:
   $$\mu(x) = e^{\int -\frac{1}{x}dx} = e^{-\ln(x)} = \frac{1}{x}$$
6. Multiply the entire ODE by $\frac{1}{x}$:
   $$\left( 1 + \frac{y}{x} \right)dx + \ln(x)\,dy = 0$$
   Now $\tilde{M} = 1 + \frac{y}{x} \implies \frac{\partial \tilde{M}}{\partial y} = \frac{1}{x}$; $\tilde{N} = \ln(x) \implies \frac{\partial \tilde{N}}{\partial x} = \frac{1}{x}$. Exact!
7. Integrate $\tilde{N}$ with respect to $y$:
   $$\Psi(x,y) = \int \ln(x)\,dy = y\ln(x) + h(x)$$
   $$\frac{\partial \Psi}{\partial x} = \frac{y}{x} + h'(x) = 1 + \frac{y}{x} \implies h'(x) = 1 \implies h(x) = x$$
8. General Solution:
   $$\Psi(x,y) = y\ln(x) + x = C \implies y(x) = \frac{C - x}{\ln(x)}$$

---

## Section 4: Solutions by Substitution

### 4.1 Type 1: Linear Combination $y' = f(Ax + By + C)$
When $x$ and $y$ only appear inside an expression of the form $Ax + By + C$:
- **The Move Here:** Let $u = Ax + By + C$.
- Then $\frac{du}{dx} = A + B\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{B}\left( \frac{du}{dx} - A \right)$.
- Substitution always converts the ODE into a **separable** differential equation in $u$ and $x$!

#### Problem 4.1: Linear Combination IVP
$$y' - (4x - y + 1)^2 = 0, \quad y(0) = 1$$
*(From Tutor Notes Page 32)*

*Solution Walkthrough:*
1. **Identify Form:** $y' = (4x - y + 1)^2$. Here $A = 4, B = -1, C = 1$.
2. **Substitute:**
   $$u = 4x - y + 1 \implies \frac{du}{dx} = 4 - \frac{dy}{dx} \implies \frac{dy}{dx} = 4 - \frac{du}{dx}$$
3. **Rewrite Differential Equation:**
   $$4 - \frac{du}{dx} = u^2 \implies \frac{du}{dx} = 4 - u^2 = -(u^2 - 4)$$
4. **Separate Variables:**
   $$\frac{du}{u^2 - 4} = -dx$$
5. **Partial Fraction Decomposition:**
   $$\frac{1}{(u-2)(u+2)} = \frac{1}{4}\left( \frac{1}{u-2} - \frac{1}{u+2} \right)$$
   $$\frac{1}{4}\ln\left| \frac{u-2}{u+2} \right| = -x + C_1 \implies \ln\left| \frac{u-2}{u+2} \right| = -4x + C_2$$
   $$\frac{u-2}{u+2} = K e^{-4x}, \quad K = \pm e^{C_2}$$
6. **Apply Initial Condition to Find $K$:**
   At $x = 0$: $y(0) = 1 \implies u(0) = 4(0) - 1 + 1 = 0$.
   $$\frac{0 - 2}{0 + 2} = K e^0 \implies -1 = K \implies K = -1$$
7. **Solve for $u$:**
   $$\frac{u-2}{u+2} = -e^{-4x} \implies u - 2 = -e^{-4x}(u + 2) = -u e^{-4x} - 2e^{-4x}$$
   $$u(1 + e^{-4x}) = 2 - 2e^{-4x} \implies u(x) = \frac{2(1 - e^{-4x})}{1 + e^{-4x}} = 2\tanh(2x)$$
8. **Back-Substitute $u = 4x - y + 1$ to Find $y(x)$:**
   $$4x - y + 1 = 2\tanh(2x) \implies y(x) = 4x + 1 - 2\tanh(2x)$$
   *(Note: $\tanh(0) = 0 \implies y(0) = 1$, verified perfectly!)*

---

### 4.2 Type 2: Homogeneous Differential Equations ($y/x$)
If $M(tx, ty) = t^k M(x,y)$ and $N(tx, ty) = t^k N(x,y)$:
- **The Move Here:** Let $y = ux \implies \frac{dy}{dx} = u + x\frac{du}{dx}$.
- The equation transforms into a separable ODE in $u$ and $x$.

#### Problem 4.2: Homogeneous Algebraic Equation
$$(x - y)\,dx + x\,dy = 0$$
*(From Tutor Notes Page 23)*

*Solution Walkthrough:*
1. **Check Homogeneity:** $M(tx, ty) = t(x-y)$ and $N(tx, ty) = tx$. Degree is 1.
2. **Substitute $y = ux \implies dy = u\,dx + x\,du$:**
   $$(x - ux)\,dx + x(u\,dx + x\,du) = 0$$
   $$x(1 - u)\,dx + x u\,dx + x^2\,du = 0$$
   $$x\,dx - x u\,dx + x u\,dx + x^2\,du = 0 \implies x\,dx + x^2\,du = 0$$
3. **Separate Variables ($x \neq 0$):**
   $$\frac{1}{x}\,dx + du = 0 \implies \int du = -\int \frac{1}{x}\,dx \implies u = -\ln|x| + C$$
4. **Back-Substitute $u = \frac{y}{x}$:**
   $$\frac{y}{x} = C - \ln|x| \implies y(x) = x(C - \ln|x|)$$

---

### 4.3 Type 3: Bernoulli Equations ($y' + P(x)y = f(x)y^n$)
- **The Move Here:** Divide by $y^n$:
  $$y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = f(x)$$
- Set $u = y^{1-n} \implies \frac{du}{dx} = (1-n)y^{-n}\frac{dy}{dx} \implies y^{-n}\frac{dy}{dx} = \frac{1}{1-n}\frac{du}{dx}$.
- Substitute to obtain a linear 1st-order equation:
  $$\frac{du}{dx} + (1-n)P(x)u = (1-n)f(x)$$

#### Problem 4.3: Bernoulli Equation from Tutor Notes
$$x\frac{dy}{dx} - (1+x)y = x y^2, \quad x > 0$$
*(From Tutor Notes Page 28)*

*Solution Walkthrough:*
1. **Normalize:**
   $$y' - \frac{1+x}{x}y = y^2 \implies n = 2$$
2. **Divide by $y^2$:**
   $$y^{-2}y' - \left(\frac{1}{x} + 1\right)y^{-1} = 1$$
3. **Substitute $u = y^{1-2} = y^{-1} \implies u' = -y^{-2}y'$:**
   $$-u' - \left(\frac{1}{x} + 1\right)u = 1 \implies u' + \left(\frac{1}{x} + 1\right)u = -1$$
4. **Integrating Factor:**
   $$I(x) = e^{\int (1/x + 1)dx} = e^{\ln(x) + x} = x e^x$$
5. **Collapse and Integrate:**
   $$\frac{d}{dx}\big[ x e^x u \big] = -x e^x$$
   $$x e^x u = -\int x e^x dx = -(x e^x - e^x) + C = -x e^x + e^x + C$$
6. **Solve for $u$:**
   $$u(x) = -1 + \frac{1}{x} + \frac{C}{x e^x} = \frac{1 - x + C e^{-x}}{x}$$
7. **Back-Substitute $y = \frac{1}{u}$:**
   $$y(x) = \frac{x}{1 - x + C e^{-x}}$$

---

## Section 5: Engineering Applications & Forensic Modeling

### 5.1 Newton's Law of Cooling / Heating ($dT/dt = k(T - T_m)$)
$$\frac{dT}{dt} = k(T - T_m) \implies T(t) = T_m + (T_0 - T_m)e^{kt}$$
*(Note: $k < 0$ for natural heat transfer toward medium temperature $T_m$).*

#### Problem 5.1: The 3-Point Forensic Oven Problem
*Problem Statement (Tutor Notes Page 35):*  
A thermometer reading $70^\circ\text{F}$ is placed in an oven preheated to an unknown constant temperature $T_m$. An observer through the oven window records that the thermometer reads $110^\circ\text{F}$ after $0.5\text{ min}$, and $145^\circ\text{F}$ after $1\text{ min}$. Determine the temperature of the oven $T_m$.

*Solution Walkthrough:*
1. **Model:**
   $$T(t) = T_m + C e^{kt}$$
2. **Point 1 ($t = 0, T = 70$):**
   $$70 = T_m + C \implies C = 70 - T_m$$
   $$T(t) = T_m + (70 - T_m)e^{kt}$$
3. **Point 2 ($t = 0.5, T = 110$):**
   $$110 - T_m = (70 - T_m)e^{0.5k} \implies e^{0.5k} = \frac{110 - T_m}{70 - T_m}$$
4. **Point 3 ($t = 1.0, T = 145$):**
   $$145 - T_m = (70 - T_m)e^{k} = (70 - T_m)(e^{0.5k})^2$$
5. **Substitute $(e^{0.5k})^2$:**
   $$145 - T_m = (70 - T_m)\left( \frac{110 - T_m}{70 - T_m} \right)^2 = \frac{(110 - T_m)^2}{70 - T_m}$$
6. **Cross-Multiply and Expand:**
   $$(145 - T_m)(70 - T_m) = (110 - T_m)^2$$
   $$10150 - 215 T_m + T_m^2 = 12100 - 220 T_m + T_m^2$$
7. **Cancel $T_m^2$ and Solve for $T_m$:**
   $$-215 T_m + 220 T_m = 12100 - 10150$$
   $$5 T_m = 1950 \implies T_m = 390^\circ\text{F}$$
The oven temperature is exactly $390^\circ\text{F}$.

---

### 5.2 Mixture Tanks
$$\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}} = (C_{\text{in}} \cdot r_{\text{in}}) - \left( \frac{A(t)}{V(t)} \cdot r_{\text{out}} \right)$$
Where $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$.

#### Problem 5.2: Evacuating Tank with Decreasing Volume
*Problem Statement (Tutor Notes Page 39):*  
A tank initially holds $100\text{ gal}$ of pure water. Brine containing $3\text{ lb/gal}$ of salt enters at $4\text{ gal/min}$, and the well-stirred mixture leaves at $5\text{ gal/min}$. Find the amount of salt in the tank after $30\text{ min}$.

*Solution Walkthrough:*
1. **Flow Rates & Volume:**
   $$r_{\text{in}} = 4, \quad r_{\text{out}} = 5 \implies \Delta r = -1 \implies V(t) = 100 - t$$
   Tank empties at $t = 100\text{ min}$.
2. **Rates:**
   $$R_{\text{in}} = 3 \times 4 = 12\text{ lb/min}$$
   $$R_{\text{out}} = \frac{A(t)}{100 - t} \times 5 = \frac{5}{100 - t}A(t)$$
3. **Differential Equation:**
   $$\frac{dA}{dt} + \frac{5}{100 - t}A = 12, \quad A(0) = 0$$
4. **Integrating Factor:**
   $$P(t) = \frac{5}{100-t} \implies \int P(t)dt = -5\ln(100-t) = \ln((100-t)^{-5})$$
   $$I(t) = (100 - t)^{-5}$$
5. **Integrate:**
   $$\frac{d}{dt}\Big[ (100 - t)^{-5} A \Big] = 12(100 - t)^{-5}$$
   $$(100 - t)^{-5} A = 12 \int (100 - t)^{-5} dt = 12 \cdot \frac{(100 - t)^{-4}}{(-4)(-1)} + C = 3(100 - t)^{-4} + C$$
   $$A(t) = 3(100 - t) + C(100 - t)^5$$
6. **Initial Condition $A(0) = 0$:**
   $$0 = 3(100) + C(100)^5 \implies C = -\frac{300}{100^5} = -\frac{3}{100^4} = -3 \times 10^{-8}$$
7. **Evaluate at $t = 30\text{ min}$:**
   $$100 - 30 = 70$$
   $$A(30) = 3(70) - 3 \times 10^{-8}(70)^5 = 210 - 3 \times 10^{-8}(1680700000) = 210 - 50.42 = 159.58\text{ lbs}$$
Amount of salt in tank at $t = 30\text{ min}$ is approximately $159.6\text{ lbs}$.

---

### 5.3 First-Order $LR$ Electric Circuits
$$L\frac{di}{dt} + R i = E(t)$$

#### Problem 5.3: Constant Voltage $LR$ Circuit
*Problem Statement (Tutor Notes Page 40):*  
An inductance $L = 20\text{ H}$ and resistance $R = 2\, \Omega$ are connected in series with an electromotive force $E(t) = 120\text{ V}$. Find $i(t)$ given initial current $i(0) = 0\text{ A}$, and find $i(2)$.

*Solution Walkthrough:*
1. **Model:**
   $$20\frac{di}{dt} + 2i = 120 \implies \frac{di}{dt} + 0.1i = 6$$
2. **Integrating Factor:** $I(t) = e^{0.1t}$.
   $$\frac{d}{dt}\big[ e^{0.1t} i \big] = 6e^{0.1t} \implies e^{0.1t} i = \frac{6}{0.1}e^{0.1t} + C = 60e^{0.1t} + C$$
   $$i(t) = 60 + C e^{-0.1t}$$
3. **Apply $i(0) = 0$:**
   $$0 = 60 + C \implies C = -60$$
   $$i(t) = 60(1 - e^{-0.1t})\text{ A}$$
4. **Current at $t = 2\text{ s}$:**
   $$i(2) = 60(1 - e^{-0.2}) = 60(1 - 0.81873) = 10.88\text{ A}$$
   Steady-state current: $\lim_{t \to \infty} i(t) = 60\text{ A}$.

---

### 5.4 Radioactive Decay Kinetics
$$\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}$$

#### Problem 5.4: Half-Life & Decay
*Problem Statement (Tutor Notes Page 42):*  
Initially $100\text{ mg}$ of a radioactive substance is present. After $6\text{ hours}$, the mass has decreased by $3\%$. Find the mass remaining after $24\text{ hours}$.

*Solution Walkthrough:*
1. **Model:** $P(t) = 100 e^{kt}$.
2. **At $t = 6$, mass decreased by $3\% \implies P(6) = 97\text{ mg}$:**
   $$97 = 100 e^{6k} \implies e^{6k} = 0.97 \implies k = \frac{\ln(0.97)}{6} \approx -0.005076\text{ h}^{-1}$$
3. **Amount after $t = 24\text{ hours}$:**
   Notice $24 = 4 \times 6$. Therefore:
   $$P(24) = 100 e^{24k} = 100 (e^{6k})^4 = 100(0.97)^4$$
   $$0.97^4 = 0.88529$$
   $$P(24) = 88.53\text{ mg}$$

---

## Section 6: Master Diagnostic Decision Matrix

| Differential Equation Form | Diagnostic Fingerprint | The Move Here | Core Formula / Transform |
| :--- | :--- | :--- | :--- |
| **Separable** | Products $f(x)g(y)$ | Separate variables | $\int \frac{dy}{g(y)} = \int f(x)dx + C$ |
| **Linear 1st Order** | Single $y$ with no powers | Integrating Factor | $I(x) = e^{\int P(x)dx}, \quad y = \frac{1}{I}\int I f dx$ |
| **Exact** | $M dx + N dy = 0$ | Cross-partial test $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ | $\Psi = \int M dx + g(y) = C$ |
| **Non-Exact** | Cross-partials unequal | Compute $\frac{M_y - N_x}{N}$ or $\frac{N_x - M_y}{M}$ | $\mu(x) = e^{\int f(x)dx}$ or $\mu(y) = e^{\int g(y)dy}$ |
| **Type 1 Linear** | $y' = f(Ax + By + C)$ | Substitute argument | $u = Ax + By + C \implies \frac{du}{dx} = A + B y'$ |
| **Homogeneous** | $M, N$ same polynomial degree | Substitute ratio | $y = ux \implies dy = u dx + x du$ |
| **Bernoulli** | $y' + P(x)y = f(x)y^n$ | Divide by $y^n$, substitute | $u = y^{1-n} \implies u' + (1-n)Pu = (1-n)f$ |
| **Newton Cooling** | Heat exchange with medium | Separation of variables | $T(t) = T_m + (T_0 - T_m)e^{kt}$ |
| **Mixture Tank** | Salt in liquid volume | Net rate equation | $\frac{dA}{dt} + \frac{r_{\text{out}}}{V(t)}A = C_{\text{in}}r_{\text{in}}$ |
| **LR Circuit** | Inductance & resistance | Linear 1st order | $i(t) = \frac{E}{R} + \left(i_0 - \frac{E}{R}\right)e^{-Rt/L}$ |

---
*Gradesaver Master Solving System · Concordia University Engineering Hub · Strictly for Academic Revision*
