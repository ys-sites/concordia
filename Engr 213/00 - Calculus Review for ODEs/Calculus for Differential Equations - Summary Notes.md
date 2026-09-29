# Calculus for Differential Equations: Master Reference Notes
## ENGR 213 Applied Ordinary Differential Equations · Concordia University

> **Exam Note:** In ENGR 213, **no formula sheet is permitted on midterm or final examinations**. This reference guide summarizes the essential calculus identities and their direct structural mechanics in solving differential equations.

---

## 📑 Part 1: Derivatives & The Differential Engine

### 1. Core Operational Differentiation Rules
* **Power Rule:** $\frac{d}{dx}[x^n] = n x^{n-1} \quad (n \in \mathbb{R})$
* **Constant Multiple:** $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$
* **Sum & Difference:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$
* **Product Rule:** $\frac{d}{dx}[u \cdot v] = u' v + u v'$ *(The forward operation of the Integrating Factor!)*
* **Quotient Rule:** $\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u' v - u v'}{v^2}$ *(Contracting $\frac{x y' - y}{x^2} = \frac{d}{dx}\left[\frac{y}{x}\right]$)*
* **Reciprocal Rule:** $\frac{d}{dx}\left[\frac{1}{v}\right] = -\frac{v'}{v^2}$
* **Chain Rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x) \quad \text{or} \quad \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
* **Differential Relation:** $dy = y'(x) \, dx \iff \frac{dy}{dx} = y'$

---

### 2. Transcendental Functions Catalog

#### Exponential & Logarithmic
* $\frac{d}{dx}[e^u] = e^u \cdot u'$
* $\frac{d}{dx}[a^u] = a^u \ln(a) \cdot u' \quad (a > 0)$
* $\frac{d}{dx}[\ln|u|] = \frac{u'}{u} \quad (u \neq 0)$ — **Top ODE Identity!**
* $\frac{d}{dx}[\log_a|u|] = \frac{u'}{u \ln(a)}$
* $\frac{d}{dx}[u^v] = u^v \left(v' \ln u + \frac{v u'}{u}\right)$

#### Trigonometric Functions
* $\frac{d}{dx}[\sin u] = \cos(u) \cdot u'$
* $\frac{d}{dx}[\cos u] = -\sin(u) \cdot u'$
* $\frac{d}{dx}[\tan u] = \sec^2(u) \cdot u'$
* $\frac{d}{dx}[\cot u] = -\csc^2(u) \cdot u'$
* $\frac{d}{dx}[\sec u] = \sec(u)\tan(u) \cdot u'$
* $\frac{d}{dx}[\csc u] = -\csc(u)\cot(u) \cdot u'$

#### Inverse Trigonometric & Hyperbolic
* $\frac{d}{dx}[\arcsin u] = \frac{u'}{\sqrt{1-u^2}} \quad (|u| < 1)$
* $\frac{d}{dx}[\arccos u] = -\frac{u'}{\sqrt{1-u^2}}$
* $\frac{d}{dx}[\arctan u] = \frac{u'}{1+u^2}$ *(Staple in separable ODEs)*
* $\frac{d}{dx}[\sinh u] = \cosh(u) \cdot u' \quad \left(\sinh x = \frac{e^x - e^{-x}}{2}\right)$
* $\frac{d}{dx}[\cosh u] = \sinh(u) \cdot u' \quad \left(\cosh x = \frac{e^x + e^{-x}}{2}\right)$
* $\frac{d}{dx}[\tanh u] = \text{sech}^2(u) \cdot u' \quad (\cosh^2 u - \sinh^2 u = 1)$

---

### 3. Multivariable, Implicit & Higher-Order Derivatives

#### Implicit Differentiation (Zill Section 1.1 Verification)
To find $\frac{dy}{dx}$ from an implicit relation $G(x,y) = 0$:
$$\frac{d}{dx}[G(x,y)] = \frac{\partial G}{\partial x} + \frac{\partial G}{\partial y}\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{G_x(x,y)}{G_y(x,y)} \quad (G_y \neq 0)$$

#### Total Differential & Clairaut's Symmetry (Zill Section 2.4 Exactness)
$$df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy$$
If $df = 0$, then $f(x,y) = C$ (level curves of potential function).
$$\text{Clairaut's Schwarz Theorem: } \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y} \iff \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

#### Higher Derivatives & Leibniz Rule
$$(uv)'' = u''v + 2u'v' + uv''$$
$$(uv)''' = u'''v + 3u''v' + 3u'v'' + uv'''$$
$$(uv)^{(n)} = \sum_{k=0}^n \binom{n}{k} u^{(n-k)} v^{(k)}$$

---

### 4. ⚡ SYSTEM 1: The ODE Derivative Bridge

| ODE Technique | Target Equation | Derivative Mechanism & Identity |
| :--- | :--- | :--- |
| **1. Integrating Factor (Zill Section 2.3)** | $y' + P(x)y = Q(x)$ | **Reverse Product Rule:** Multiply by $\mu(x) = e^{\int P dx}$. Since $\mu' = P\mu$, the LHS collapses to $\frac{d}{dx}[\mu(x) \cdot y] = \mu(x)Q(x)$. |
| **2. Exactness Condition (Zill Section 2.4)** | $M(x,y)dx + N(x,y)dy = 0$ | **Mixed Partials Symmetry:** Exact iff $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$, guaranteeing existence of potential $f(x,y)$. |
| **3. Bernoulli Substitution (Zill Section 2.5)** | $y' + P(x)y = Q(x)y^n$ | **Chain Rule Power Collapse:** Set $u = y^{1-n} \implies u' = (1-n)y^{-n}y'$. Eliminates $y^n$ and produces a 1st-order linear ODE in $u$. |
| **4. Homogeneous Substitution (Zill Section 2.5)** | $\frac{dy}{dx} = g(y/x)$ | **Product Rule Expansion:** Let $y = u \cdot x \implies \frac{dy}{dx} = u + x\frac{du}{dx}$. Converts to separable $x\frac{du}{dx} = g(u) - u$. |
| **5. Characteristic Equation (Zill Section 3.3)** | $a y'' + b y' + c y = 0$ | **Exponential Derivative Eigen-property:** Test $y = e^{rx} \implies y' = r e^{rx}, y'' = r^2 e^{rx} \implies a r^2 + b r + c = 0$. |
| **6. Reduction of Order (Zill Section 3.7)** | $y'' + P(x)y' + Q(x)y = 0$ | **Leibniz Product Derivatives:** Set $y_2 = u(x)y_1(x) \implies y_2' = u'y_1 + uy_1', y_2'' = u''y_1 + 2u'y_1' + uy_1''$. $u$-terms cancel completely, leaving 1st-order in $w=u'$. |

---

## 📑 Part 2: Integrals & The Integration Engine

### 1. Master Antiderivative Catalog

#### Power & Exponentials
* $\int u^n du = \frac{u^{n+1}}{n+1} + C \quad (n \neq -1)$
* $\int \frac{1}{u} du = \ln|u| + C \quad (u \neq 0)$
* $\int \frac{g'(x)}{g(x)}dx = \ln|g(x)| + C$ — **The #1 ODE Shortcut!**
* $\int e^{ku} du = \frac{1}{k}e^{ku} + C \quad (k \neq 0)$
* $\int a^u du = \frac{a^u}{\ln a} + C \quad (a > 0, a \neq 1)$
* $\int \ln(u) du = u \ln(u) - u + C$

#### Trigonometric Antiderivatives
* $\int \cos(u)du = \sin(u) + C$
* $\int \sin(u)du = -\cos(u) + C$
* $\int \sec^2(u)du = \tan(u) + C$
* $\int \csc^2(u)du = -\cot(u) + C$
* $\int \sec(u)\tan(u)du = \sec(u) + C$
* $\int \tan(u)du = \ln|\sec(u)| + C = -\ln|\cos(u)| + C$
* $\int \cot(u)du = \ln|\sin(u)| + C$
* $\int \sec(u)du = \ln|\sec(u) + \tan(u)| + C$

#### Quadratic & Inverse Trig Forms
* $\int \frac{du}{u^2 + a^2} = \frac{1}{a}\arctan\left(\frac{u}{a}\right) + C$
* $\int \frac{du}{\sqrt{a^2 - u^2}} = \arcsin\left(\frac{u}{a}\right) + C$
* $\int \frac{du}{u^2 - a^2} = \frac{1}{2a}\ln\left|\frac{u-a}{u+a}\right| + C \quad (u^2 > a^2)$
* $\int \frac{du}{a^2 - u^2} = \frac{1}{2a}\ln\left|\frac{a+u}{a-u}\right| + C \quad (u^2 < a^2)$
* $\int \frac{du}{\sqrt{u^2 \pm a^2}} = \ln\left|u + \sqrt{u^2 \pm a^2}\right| + C$
* $\int \frac{u\,du}{u^2 + a^2} = \frac{1}{2}\ln(u^2 + a^2) + C$

---

### 2. The 4 Pillar Integration Techniques for ODEs

#### Pillar 1: $u$-Substitution & The Logarithmic Shortcut
* **Rule:** If the numerator is proportional to the denominator's derivative:
  $$\int \frac{P(x)}{Q(x)}dx = \frac{k}{m}\ln|Q(x)| + C \quad \text{when } P(x) = \frac{k}{m}Q'(x)$$
* **Exam Examples:**
  * $\int \frac{x}{x^2+4}dx = \frac{1}{2}\ln(x^2+4) + C$
  * $\int \frac{\cos x}{2+\sin x}dx = \ln(2+\sin x) + C$

#### Pillar 2: Integration by Parts & The Tabular (DI) Method
* **Standard Formula:** $\int u\,dv = u v - \int v\,du$ with LIATE priority.
* **The Tabular (DI) Method:** For $\int (\text{poly}) \cdot e^{ax}dx$ or $\int (\text{poly}) \cdot \sin(bx)dx$:
  * Column D: Repeatedly differentiate polynomial to 0.
  * Column I: Repeatedly integrate exponential/trigonometric function.
  * Result: Sum products along diagonals with alternating signs $(+, -, +, -)$.
  $$\int x^2 e^{3x}dx = \frac{x^2}{3}e^{3x} - \frac{2x}{9}e^{3x} + \frac{2}{27}e^{3x} + C$$

#### Pillar 3: Partial Fraction Decomposition (PFD)
* **Distinct Linear:** $\frac{1}{(y-a)(y-b)} = \frac{A}{y-a} + \frac{B}{y-b}$ (Heaviside Cover-up: $A = \frac{1}{a-b}, B = \frac{1}{b-a}$).
* **Repeated Linear:** $\frac{P(x)}{(y-a)^2(y-b)} = \frac{A}{y-a} + \frac{B}{(y-a)^2} + \frac{C}{y-b}$.
* **Irreducible Quadratic:** $\frac{P(x)}{(y-a)(y^2+k^2)} = \frac{A}{y-a} + \frac{By+C}{y^2+k^2}$.
* **The Logistic Equation (Zill Section 2.8):**
  $$\frac{dy}{y(M-y)} = k dt \implies \frac{1}{M}\int\left(\frac{1}{y} + \frac{1}{M-y}\right)dy = \int k dt \implies \frac{y}{M-y} = C_1 e^{Mkt}$$

#### Pillar 4: Completing the Square & Trig Identities
* **Completing the Square:** $x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + \left(c - \frac{b^2}{4}\right)$.
  $$\int \frac{dx}{x^2+6x+25} = \int \frac{dx}{(x+3)^2+16} = \frac{1}{4}\arctan\left(\frac{x+3}{4}\right) + C$$
* **Half-Angle Identities:**
  $$\cos^2(x) = \frac{1+\cos(2x)}{2}, \quad \sin^2(x) = \frac{1-\cos(2x)}{2}$$

---

### 3. ⚡ SYSTEM 2: The ODE Integral Bridge

| ODE Method | Required Integration Role | Critical Exam Protocol & Traps |
| :--- | :--- | :--- |
| **1. Separable Equations (Zill Section 2.2)** | $\int \frac{1}{h(y)}dy = \int g(x)dx + C$ | Combine arbitrary constants into a single $+C$ on the $x$-side immediately before exponentiating or inverting. Check for lost singular solutions where $h(y) = 0$. |
| **2. Integrating Factor (Zill Section 2.3)** | Stage 1: $\mu(x) = e^{\int P(x)dx}$<br>Stage 2: $y = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x)dx + C\right]$ | **Stage 1:** Set $+C=0$ (constant cancels across both sides of ODE).<br>**Stage 2:** $+C$ is **strictly mandatory inside brackets** before dividing by $\mu(x)$! |
| **3. Exact Reconstruction (Zill Section 2.4)** | Step 1: $f = \int M dx + g(y)$<br>Step 2: $g'(y) = N - \frac{\partial}{\partial y}\int M dx$<br>Step 3: $g(y) = \int g'(y)dy$ | When computing $\int M dx$, treat $y$ as a pure constant. In Step 2, all $x$-terms in $g'(y)$ must completely cancel out; if any $x$ remains, check $M_y = N_x$ again! Implicit solution: $f(x,y)=C$. |
| **4. Picard Iterations (Zill Section 1.2)** | $y_{n+1}(x) = y_0 + \int_{x_0}^x f(t, y_n(t))dt$ | Definite integration from $x_0$ to $x$. Generates sequential Taylor series approximations of the unique solution. |
| **5. Variation of Parameters (Zill Section 3.5)** | $u_1 = -\int \frac{y_2 g}{W}dx, \quad u_2 = \int \frac{y_1 g}{W}dx$ | $W(x) = y_1 y_2' - y_1' y_2 \neq 0$. Particular solution is $y_p(x) = u_1 y_1 + u_2 y_2$. Always ensure the ODE is in standard form $y''+Py'+Qy=g(x)$ before identifying $g(x)$. |
| **6. Leibniz Integral Rule** | $\frac{d}{dx}\left[\int_{u(x)}^{v(x)} f(t)dt\right] = f(v(x))v'(x) - f(u(x))u'(x)$ | Used to differentiate general integral-defined solutions and verify IVPs with arbitrary forcing functions. |
