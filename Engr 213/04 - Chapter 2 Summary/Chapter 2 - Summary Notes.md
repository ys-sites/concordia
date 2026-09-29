# ENGR 213: Chapter 2 Condensed Master Executive Summary
*(Dennis G. Zill, Advanced Engineering Mathematics 7th ed. vs. Dr. A. Haghighat Lecture Notes 2, 3, 4 & Syllabus)*

---

### Executive Overview & Architecture of First-Order ODEs

Chapter 2 establishes the entire foundation for solving and analyzing first-order ordinary differential equations:
$$\frac{dy}{dx} = f(x,y) \quad \text{or} \quad M(x,y)\,dx + N(x,y)\,dy = 0$$

The course approaches first-order differential equations through three complementary lenses:
1. **Qualitative Analysis (Section 2.1):** Understanding the geometry of solutions without integrating (direction fields, isoclines, phase lines, and asymptotic stability).
2. **Analytical Methods (Section 2.2 – Section 2.5):** Exact symbolic solution algorithms (Separable, Linear Integrating Factors, Exact Equations, and Substitution Transformations).
3. **Engineering Modeling (Section 2.7 – Section 2.8):** Formulating real-world conservation laws (Newtonian cooling, brine dilution tanks, Torricelli draining tanks, and logistic population dynamics).

---

### 1. Qualitative Analysis & Autonomous Equations (Section 2.1)
* **Plain-English Concept:** When an ODE is impossible to integrate symbolically, we can determine the exact long-term fate of every solution curve by examining slopes directly from the differential equation.
* **Direction Fields & Isoclines:**
  * At any coordinate $(x,y)$, the derivative value $f(x,y)$ represents the slope of the tangent line (a *lineal element*).
  * **Isoclines:** Curves where the slope is constant: $f(x,y) = c$. Sketching several isoclines allows rapid drafting of the overall direction field.
* **Autonomous Differential Equations:**
  * **Definition:** An ODE where the rate of change depends *only* on the dependent variable $y$, with no explicit $x$:
    $$\frac{dy}{dx} = f(y)$$
  * **Critical Points (Equilibrium Solutions):** Any real number $c$ where $f(c) = 0$. The constant function $y(x) \equiv c$ is an equilibrium solution.
* **Phase Line Portraits & Stability Classification:**
  * **1D Phase Line:** Plot critical points on a vertical $y$-axis. In the intervals between critical points, evaluate the sign of $f(y)$:
    * If $f(y) > 0$: $\frac{dy}{dx} > 0 \implies y(x)$ increases (draw upward arrow $\uparrow$).
    * If $f(y) < 0$: $\frac{dy}{dx} < 0 \implies y(x)$ decreases (draw downward arrow $\downarrow$).
  * **The Three Stability Types:**
    1. **Attractor (Asymptotically Stable):** All nearby trajectories move toward $c$ from both above and below ($\downarrow \bullet \uparrow$). Solutions approach $c$ as $x \to \infty$.
    2. **Repeller (Unstable):** All nearby trajectories move away from $c$ on both sides ($\uparrow \bullet \downarrow$). Solutions diverge from $c$ as $x \to \infty$.
    3. **Semi-Stable:** Trajectories approach from one side but move away on the other side ($\uparrow \bullet \uparrow$ or $\downarrow \bullet \downarrow$).
* **Teacher Slide Correlation:**
  * **Lecture 2, Slides 9–17:** Direction field for $y' = 0.2xy$ and autonomous DE $y' = y(1-y)$ with critical points $y=0$ (unstable/repeller) and $y=1$ (asymptotically stable/attractor).

---

### 2. Separable Differential Equations (Section 2.2)
* **Plain-English Concept:** An ODE where all $y$'s can be isolated on one side with $dy$, and all $x$'s on the other side with $dx$.
* **Standard Form:**
  $$\frac{dy}{dx} = g(x)h(y) \implies \frac{1}{h(y)}\,dy = g(x)\,dx$$
* **Algorithmic Solution Protocol:**
  1. Identify $h(y)$ and find all roots $h(y) = 0$. These roots are **constant equilibrium solutions**.
  2. Divide by $h(y)$ and multiply by $dx$: $\int \frac{1}{h(y)}\,dy = \int g(x)\,dx + C$.
  3. Evaluate both antiderivatives: $H(y) = G(x) + C$.
  4. Solve for $y$ explicitly if requested, or state the implicit curve.
  5. Apply any initial condition $y(x_0) = y_0$ to isolate $C$.
* **The Dangerous Trap — Lost Singular Solutions:**
  * When you divide by $h(y)$, you assume $h(y) \neq 0$. Any constant solution $y = r$ where $h(r) = 0$ might not be reproducible by choosing a value of $C$. If it cannot be obtained from the general family, it is a **singular solution** and must be listed separately!
* **Teacher Slide Correlation:**
  * **Lecture 3, Slides 3–7:** Example 2 ($y' = -x/y \implies x^2 + y^2 = c$) and Example 3 ($y' = y^2 - 4 \implies$ partial fractions, with lost solutions $y = \pm 2$).

---

### 3. Linear First-Order Equations (Section 2.3)
* **Plain-English Concept:** An ODE where $y$ and $y'$ appear linearly (first power, never multiplied together, no transcendental functions of $y$).
* **Standard Canonical Form (MANDATORY FIRST STEP):**
  $$a_1(x)\frac{dy}{dx} + a_0(x)y = g(x) \xrightarrow{\div a_1(x)} \frac{dy}{dx} + P(x)y = f(x)$$
* **The Integrating Factor ($\mu(x)$):**
  * Multiplying the standard form by $\mu(x) = e^{\int P(x)\,dx}$ transforms the left-hand side into an exact derivative by the Product Rule:
    $$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \frac{d}{dx}\left[\mu(x)y\right] = \mu(x)f(x)$$
* **Closed-Form Solution Formula:**
  $$y(x) = \frac{1}{\mu(x)}\left[ \int \mu(x)f(x)\,dx + C \right] = e^{-\int P(x)dx}\int e^{\int P(x)dx}f(x)\,dx + C e^{-\int P(x)dx}$$
  * Notice the structure: $y(x) = y_h(x) + y_p(x)$ (homogeneous solution + particular solution).
* **Key Phenomena & Traps:**
  * **Transient Term:** Any component of $y(x)$ that decays to zero as $x \to \infty$ (e.g., $C e^{-kx} \to 0$).
  * **Forgetting to divide by $a_1(x)$:** If you calculate $\mu(x) = e^{\int a_0(x)dx}$, the entire problem is wrong. You must divide by $a_1(x)$ first!
  * **The Constant of Integration $C$:** Must be included *inside* the bracket before dividing by $\mu(x)$, yielding $+ \frac{C}{\mu(x)}$.
* **Teacher Slide Correlation:**
  * **Lecture 3, Slides 8–15:** Standard form, integrating factor derivation, Example 4 ($y' - 3y = 6$), Example 5 ($(x^2-9)y' + xy = 0$), and piecewise continuous forcing functions.

---

### 4. Exact Differential Equations & Integrating Factors (Section 2.4)
* **Plain-English Concept:** An expression representing the total differential of some multivariable potential surface $f(x,y) = C$, so $df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy = 0$.
* **Standard Form:**
  $$M(x,y)\,dx + N(x,y)\,dy = 0$$
* **Criterion for Exactness (Clairaut's Equality of Mixed Partials):**
  $$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
* **Reconstruction Protocol (5 Steps):**
  1. Verify $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.
  2. Integrate $M$ with respect to $x$: $f(x,y) = \int M(x,y)\,dx + g(y)$, where $g(y)$ is the constant of integration with respect to $x$.
  3. Differentiate $f(x,y)$ with respect to $y$: $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}\left[\int M(x,y)\,dx\right] + g'(y)$.
  4. Equate this to $N(x,y)$ to solve for $g'(y)$: $g'(y) = N(x,y) - \frac{\partial}{\partial y}\left[\int M(x,y)\,dx\right]$. (All $x$'s must cancel out!).
  5. Integrate $g'(y)$ to find $g(y)$, and write the implicit solution: $f(x,y) = C$.
* **Rescuing Non-Exact Equations via Integrating Factor $\mu$:**
  If $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$, multiply through by $\mu$:
  * **Case 1 (Function of $x$ alone):**
    $$\frac{M_y - N_x}{N} = p(x) \implies \mu(x) = e^{\int p(x)\,dx}$$
  * **Case 2 (Function of $y$ alone):**
    $$\frac{N_x - M_y}{M} = q(y) \implies \mu(y) = e^{\int q(y)\,dy}$$
  * *Mnemonic:* The denominator is the term with the opposite index ($N$ divides $M_y - N_x$; $M$ divides $N_x - M_y$).
* **Teacher Slide Correlation:**
  * **Lecture 4, Slides 3–11:** Criterion theorem, 5-step derivation, Example 1 ($2xy dx + (x^2-1)dy = 0$), Example 2 ($y' = \frac{xy^2 - \cos x\sin x}{y(1-x^2)}$), and Example 3 ($xy dx + (2x^2+3y^2-20)dy = 0 \implies \mu(y) = y^3$).

---

### 5. Solutions by Substitution (Section 2.5)
When an equation is neither separable, linear, nor exact, a smart change of variables transforms it into one that is.

1. **Homogeneous Equations:**
   * **Definition:** $M(x,y)\,dx + N(x,y)\,dy = 0$ where $M$ and $N$ are homogeneous functions of the same degree ($f(tx, ty) = t^n f(x,y)$), meaning $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$.
   * **Substitution:** Let $y = u x \implies dy = u\,dx + x\,du$ (or $x = v y \implies dx = v\,dy + y\,dv$ if $N$ is simpler).
   * **Result:** Always separates into an equation for $u$ and $x$.
2. **Bernoulli Equations:**
   * **Standard Form:** $\frac{dy}{dx} + P(x)y = f(x)y^n$ ($n \neq 0, 1$).
   * **Substitution:** Let $u = y^{1-n} \implies \frac{du}{dx} = (1-n)y^{-n}\frac{dy}{dx}$.
   * **Result:** Transforms directly into a **standard linear ODE** for $u(x)$:
     $$\frac{du}{dx} + (1-n)P(x)u = (1-n)f(x)$$
3. **Linear Arguments (Reduction to Separable):**
   * **Form:** $\frac{dy}{dx} = f(Ax + By + C)$ ($B \neq 0$).
   * **Substitution:** Let $u = Ax + By + C \implies \frac{du}{dx} = A + B\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{B}\left(\frac{du}{dx} - A\right)$.
   * **Result:** Always reduces to a separable equation: $\frac{du}{dx} = A + B f(u) \implies \frac{du}{A + B f(u)} = dx$.

---

### 6. First-Order Physical Modeling (Sections 2.7 & 2.8)
Mathematical formulation of real-world conservation laws:

1. **Newton's Law of Cooling / Warming:**
   $$\frac{dT}{dt} = k(T - T_m), \quad k < 0$$
   * $T(t)$ is temperature, $T_m$ is ambient surrounding temperature.
   * Solution: $T(t) = T_m + (T_0 - T_m)e^{kt}$. As $t \to \infty$, $T(t) \to T_m$.
2. **Mixture / Brine Dilution Tanks:**
   $$\frac{dA}{dt} = \text{Rate}_{\text{in}} - \text{Rate}_{\text{out}} = c_{\text{in}} \cdot r_{\text{in}} - \left(\frac{A(t)}{V(t)}\right) r_{\text{out}}$$
   * $A(t)$ is mass of solute (lbs or kg); $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$ is fluid volume.
   * If $r_{\text{in}} = r_{\text{out}}$, volume is constant $\implies$ equation is separable.
   * If $r_{\text{in}} \neq r_{\text{out}}$, volume varies $\implies$ equation is strictly **first-order linear**:
     $$\frac{dA}{dt} + \frac{r_{\text{out}}}{V_0 + (r_{\text{in}} - r_{\text{out}})t} A(t) = c_{\text{in}} r_{\text{in}}$$
3. **Torricelli’s Law (Draining Tanks — Nonlinear):**
   $$A(h)\frac{dh}{dt} = -a c \sqrt{2gh}$$
   * $A(h)$ is horizontal cross-sectional area at height $h$; $a$ is hole area; $c$ is discharge coefficient ($0 < c \le 1$); $g \approx 32\text{ ft/s}^2$ or $9.8\text{ m/s}^2$.
   * Solved by separation of variables: $\int \frac{A(h)}{\sqrt{h}}\,dh = -a c \sqrt{2g}\int dt$.
4. **Logistic Population Dynamics:**
   $$\frac{dP}{dt} = P(a - bP) = a P \left(1 - \frac{P}{K}\right), \quad K = \frac{a}{b}$$
   * Carrying capacity is $K = a/b$. Critical points: $P = 0$ (unstable) and $P = K$ (asymptotically stable).

---

### 📊 Master First-Order Diagnostic & Cross-Reference Matrix

| Method | Form to Spot | Key Transformation / Formula | Zill Reference | Teacher Lecture | Deadly Exam Pitfall |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Separable** | $\frac{dy}{dx} = g(x)h(y)$ | $\int \frac{1}{h(y)}dy = \int g(x)dx$ | Section 2.2 (p. 67) | Lecture 3, Slides 3–7 | Forgetting to test $h(y) = 0$ for lost singular solutions. |
| **Linear** | $a_1(x)y' + a_0(x)y = g(x)$ | $\mu(x) = e^{\int P(x)dx}$, $[y\mu]' = \mu f$ | Section 2.3 (p. 75) | Lecture 3, Slides 8–15 | Forgetting to divide by $a_1(x)$ to find true $P(x)$. |
| **Exact** | $M\,dx + N\,dy = 0$ | $M_y = N_x \implies f(x,y) = C$ | Section 2.4 (p. 86) | Lecture 4, Slides 3–9 | Sign errors when rearranging into $M dx + N dy = 0$. |
| **Non-Exact Rescue** | $M\,dx + N\,dy = 0$, $M_y \neq N_x$ | $\mu(x) = e^{\int \frac{M_y - N_x}{N}dx}$ or $\mu(y) = e^{\int \frac{N_x - M_y}{M}dy}$ | Section 2.4 (pp. 90–92) | Lecture 4, Slides 10–11 | Inverting the sign or dividing by the wrong term ($N$ vs $M$). |
| **Bernoulli** | $y' + P(x)y = f(x)y^n$ | $u = y^{1-n} \implies u' + (1-n)Pu = (1-n)f$ | Section 2.5 (pp. 95–97) | Syllabus W3 | Forgetting $(1-n)$ on both $P(x)$ and $f(x)$. |
| **Homogeneous** | $M(tx,ty) = t^n M(x,y)$ | $y = ux \implies dy = u\,dx + x\,du$ | Section 2.5 (pp. 93–95) | Syllabus W3 | Forgetting the product rule on $dy = u\,dx + x\,du$. |
| **Linear Argument** | $y' = f(Ax + By + C)$ | $u = Ax + By + C \implies u' = A + B y'$ | Section 2.5 (pp. 97–98) | Syllabus W3 | Forgetting to back-substitute $u$ into the final implicit answer. |
| **Mixing Tank** | $\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}}$ | $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$ | Section 2.7 (pp. 104–106) | Syllabus W4 | Using constant volume when $r_{\text{in}} \neq r_{\text{out}}$. |
