# ENGR 213: Applied Ordinary Differential Equations
## Master Study Guide & Curriculum-Grounded Textbook Companion
### Concordia University · Gina Cody School of Engineering · Department of Mechanical, Industrial & Aerospace Engineering
**Primary Textbook**: *Advanced Engineering Mathematics* (7th Ed.) by Dennis G. Zill & Warren S. Wright  
**Course Coordination**: Dr. Alireza Haghighat M. | **Academic Scope**: Fall 2026

---

## 🧭 Master Course Roadmap & Curriculum Matrix

| Textbook Section | Lecture Topic & Scope | Governing Mathematical Engine | Key Exam Archetype |
| :--- | :--- | :--- | :--- |
| **§1.1 & §1.2** | Definitions, Terminology & IVPs | Order, Linearity, Normal Form $\frac{dy}{dx} = f(x,y)$, Picard Existence | Continuity of $f$ and $\frac{\partial f}{\partial y}$ at $(x_0, y_0)$ |
| **§2.1** | Solution Curves Without a Solution | Direction Fields, Autonomous DEs, Phase Lines | Classifying attractors, repellers & semi-stable nodes |
| **§2.2** | Separable Equations | $\int \frac{dy}{h(y)} = \int g(x)dx + C$ | Tracking singular lost solutions when $h(y) = 0$ |
| **§2.3** | First-Order Linear Equations | Integrating Factor $\mu(x) = e^{\int P(x)dx}$, $\frac{d}{dx}[\mu y] = \mu Q$ | Standardizing leading coefficient to 1 |
| **§2.4** | Exact Differential Equations | Test $M_y = N_x$, Potential function $F(x,y) = C$ | Non-exact integrating factors $\mu(x)$ or $\mu(y)$ |
| **§2.5** | Solutions by Substitutions | Homogeneous ($y=ux$), Bernoulli ($u=y^{1-n}$), Linear ($u=Ax+By+C$) | Bernoulli linearization to 1st-order linear |
| **§2.7 & §2.8** | Linear & Non-Linear Physical Models | Mass balance $\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}}$, Logistic $\frac{dP}{dt} = r P(1 - P/K)$ | Draining brine tanks with dynamic liquid volumes |
| **§17.1 & §17.2** | Complex Numbers & Powers | Polar form $z = r e^{i\theta}$, De Moivre's $[r e^{i\theta}]^n = r^n e^{i n\theta}$ | Finding all $n$-th roots on symmetric circles |
| **§3.1 & §3.3** | Constant-Coefficient Linear Equations | Characteristic Eq $a r^2 + b r + c = 0$, Wronskian $W \neq 0$ | 3 Cases: Distinct real, repeated, complex conjugate |
| **§3.4 & §3.5** | Non-Homogeneous Equations | Undetermined Coefficients (Table/Annihilator), Variation of Params | Duplication rule ($x^k$) and universal Wronskian $u_1, u_2$ |
| **§3.6 & §3.7** | Cauchy-Euler & Reduction of Order | Equidimensional $a x^2 y'' + b x y' + c y = 0$, $y_2 = y_1 \int \frac{e^{-\int P dx}}{y_1^2}dx$ | Auxiliary eq $a m(m-1) + b m + c = 0$ |
| **§3.8** | Mechanical & Electrical Oscillators | Mass-Spring $m x'' + \beta x' + k x = F(t)$, RLC Circuit | Underdamped envelope decay, resonance envelope $t \sin(\omega t)$ |
| **§4.1 – §4.3** | The Laplace Transform Engine | $\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st}f(t)dt$, Frequency shift $\mathcal{L}\{e^{at}f\} = F(s-a)$ | Solving 2nd-order IVPs via algebraic partial fractions |
| **§5.1.2** | Power Series Solutions | $y = \sum c_n x^n$ about ordinary points, Recurrence relations | Aligning index shifts to $x^k$ and peeling off terms |
| **§10.1 – §10.4**| Systems of Linear DEs | Normal form $\mathbf{X}' = \mathbf{A}\mathbf{X}$, Eigenvalues $\det(\mathbf{A}-\lambda\mathbf{I})=0$ | Phase plane trajectories, nodes, saddles, centers, spirals |

---

## ⚙️ The 5 Fundamental Analytical Solution Engines

### 1. The Separation & Substitution Engine
When equations are non-linear or non-separable, substitutions convert them into standard separable or linear forms:
* **Homogeneous Functions**: If $f(tx, ty) = f(x, y)$, substitute $y = u x \implies dy = u dx + x du$. Then:
  $$u + x\frac{du}{dx} = f(1, u) \implies \frac{du}{f(1, u) - u} = \frac{dx}{x}$$
* **Bernoulli Equations**:
  $$\frac{dy}{dx} + P(x)y = Q(x)y^n \xrightarrow{w = y^{1-n}} \frac{dw}{dx} + (1-n)P(x)w = (1-n)Q(x)$$
* **Linear Composition**: $\frac{dy}{dx} = f(Ax + By + C) \xrightarrow{u = Ax + By + C} \frac{1}{B}\left(\frac{du}{dx} - A\right) = f(u) \implies \frac{du}{A + B f(u)} = dx$.

### 2. The Exact Potential Engine
For differential form $M(x, y)dx + N(x, y)dy = 0$:
1. Calculate $\frac{\partial M}{\partial y}$ and $\frac{\partial N}{\partial x}$.
2. If $M_y = N_x$, exactness holds. Integrate $M$ with respect to $x$:
   $$F(x, y) = \int M(x, y)dx + g(y)$$
3. Differentiate with respect to $y$ and set equal to $N(x, y)$:
   $$\frac{\partial F}{\partial y} = \frac{\partial}{\partial y}\left[\int M dx\right] + g'(y) = N(x, y)$$
4. Solve for $g'(y)$, integrate with respect to $y$, and state implicit solution $F(x, y) = C$.
5. If non-exact, find integrating factor:
   $$\mu(x) = \exp\left(\int \frac{M_y - N_x}{N}dx\right) \quad \text{or} \quad \mu(y) = \exp\left(\int \frac{N_x - M_y}{M}dy\right)$$

### 3. The Second-Order Constant-Coefficient Engine
For $a y'' + b y' + c y = g(x)$:
1. **Solve Homogeneous Equation**: $a r^2 + b r + c = 0$.
   * $r_1 \neq r_2$: $y_c = c_1 e^{r_1 x} + c_2 e^{r_2 x}$
   * $r_1 = r_2 = r$: $y_c = c_1 e^{r x} + c_2 x e^{r x}$
   * $r = \alpha \pm i\beta$: $y_c = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))$
2. **Find Particular Solution $y_p$**:
   * **Undetermined Coefficients**: Use standard table. Multiply by $x^k$ if any term duplicates $y_c$.
   * **Variation of Parameters**:
     $$y_p = -y_1 \int \frac{y_2 g(x)}{a W}dx + y_2 \int \frac{y_1 g(x)}{a W}dx, \quad W = y_1 y_2' - y_1' y_2$$
3. **Assemble General Solution**: $y(x) = y_c(x) + y_p(x)$. Apply initial conditions **only** to the full general solution!

### 4. The Laplace Operational Transform Engine
1. Transform differential equation using $\mathcal{L}\{y'\} = s Y(s) - y(0)$ and $\mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0)$.
2. Solve algebraically for $Y(s)$:
   $$Y(s) = \frac{P(s)}{Q(s)}$$
3. Complete squares in quadratic denominators or decompose via partial fractions.
4. Apply Inverse Laplace Transform using shifting theorems $\mathcal{L}^{-1}\{F(s-a)\} = e^{at}f(t)$.

### 5. The Linear Systems & Eigenvalue Engine
For $\mathbf{X}' = \mathbf{A}\mathbf{X}$:
1. Compute eigenvalues: $\det(\mathbf{A} - \lambda\mathbf{I}) = 0 \implies \lambda^2 - \text{Tr}(\mathbf{A})\lambda + \det(\mathbf{A}) = 0$.
2. For each $\lambda$, solve $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$ for eigenvector $\mathbf{v}$.
3. General solution: $\mathbf{X}(t) = \sum c_i \mathbf{v}_i e^{\lambda_i t}$.
4. If complex $\lambda = \alpha \pm i\beta$, split $\mathbf{v} e^{\lambda t} = (\mathbf{a} + i\mathbf{b})e^{\alpha t}(\cos\beta t + i\sin\beta t)$ into real and imaginary vector solutions.

---

## 🖼️ Curriculum-Grounded Visual Reference Gallery

![Figure 2.1.2: Direction Field](./images/zill_fig_2_1_2_direction_field.png)
*Figure M.1: Direction field and solution curves — from Zill 7th Ed. Chapter 2 (Fig. 2.1.2).*

![Figure 2.7.4: Mixture Tank Problem](./images/zill_fig_2_7_4_mixture_tank.png)
*Figure M.2: Liquid mass balance in tank with dynamic volume — from Zill 7th Ed. Chapter 2 (Fig. 2.7.4).*

![Figure 3.8.4: Damped Oscillatory Motion](./images/zill_fig_3_8_4_damped_motion.png)
*Figure M.3: Damped mechanical oscillator decay curves (Underdamped vs Critically Damped vs Overdamped) — from Zill 7th Ed. Chapter 3 (Fig. 3.8.4).*

![Figure 10.2.2: Phase Plane Trajectories](./images/zill_fig_10_2_2_phase_portrait.png)
*Figure M.4: Trajectories in phase plane for 2x2 linear system — from Zill 7th Ed. Chapter 10 (Fig. 10.2.2).*

---

## ⚡ Master Formula & Theorem Reference Card

| Mathematical Law | Formula / Criterion | Essential Exam Notes |
| :--- | :--- | :--- |
| **Separable ODE** | $\int \frac{1}{h(y)}dy = \int g(x)dx + C$ | Check $h(y) = 0$ for singular solutions |
| **Integrating Factor (1st-Order)**| $\mu(x) = \exp\left(\int P(x)dx\right)$ | Ensure leading coefficient of $y'$ is 1 |
| **Exactness Criterion** | $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ | Solution is implicit potential $F(x,y) = C$ |
| **Non-Exact Multipliers** | $\mu(x) = e^{\int \frac{M_y - N_x}{N}dx}, \quad \mu(y) = e^{\int \frac{N_x - M_y}{M}dy}$ | Expression must be purely single-variable |
| **Bernoulli Linearization** | $w = y^{1-n} \implies w' + (1-n)P w = (1-n)Q$ | Divide through by $y^n$ first |
| **Wronskian Determinant** | $W(y_1, y_2) = y_1 y_2' - y_1' y_2$ | $W \neq 0 \iff$ Linearly independent |
| **Cauchy-Euler Auxiliary Eq** | $a m(m-1) + b m + c = 0$ | Solution bases are $x^m, x^m \ln x, x^\alpha \cos(\beta\ln x)$ |
| **Mass-Spring Quasi-Frequency** | $\omega_d = \sqrt{\frac{k}{m} - \left(\frac{\beta}{2m}\right)^2}$ | Exists only when underdamped ($\beta^2 < 4mk$) |
| **Pure Resonance Growth** | $x(t) = \frac{F_0}{2m\omega_0} t \sin(\omega_0 t)$ | Amplitude grows linearly with time |
| **Laplace 1st Shift Theorem** | $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$ | Complete the square in denominator |
| **Laplace Derivative Formulas** | $\mathcal{L}\{y''\} = s^2 Y - s y(0) - y'(0)$ | Embeds initial conditions algebraically |
| **De Moivre's Theorem** | $[r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)$ | Roots spaced by $\Delta\theta = \frac{2\pi}{n}$ |

---

## 🚫 The 6 Fatal Exam Traps in ENGR 213
1. **The Premature Initial Condition Error**: Never plug $y(x_0) = y_0$ into the complementary solution $y_c(x)$ before finding the particular solution $y_p(x)$. Initial conditions apply **only to the full general solution** $y(x) = y_c(x) + y_p(x)$!
2. **The Non-Standard Integrating Factor Trap**: In $x y' + 2y = 4x^2$, $P(x)$ is **not** $2$; it is $\frac{2}{x}$! You must divide by $x$ before calculating $\mu(x)$.
3. **The Tank Volume Blindspot**: If $r_{\text{in}} \neq r_{\text{out}}$, volume is dynamic: $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$. Treating volume as constant destroys the differential equation.
4. **The Annihilator Duplication Trap**: If $g(x)$ matches any term in $y_c$, you must multiply your trial particular solution by $x$ (or $x^2$). If you do not, the left-hand side will annihilate to 0, producing a nonsense equation like $0 = 4 e^{2x}$.
5. **The Missing Generalized Eigenvector**: In a repeated eigenvalue system where only one independent eigenvector $\mathbf{v}$ exists, the second solution is $(\mathbf{v}t + \mathbf{u})e^{\lambda t}$, where $(\mathbf{A} - \lambda\mathbf{I})\mathbf{u} = \mathbf{v}$. Writing $\mathbf{v} t e^{\lambda t}$ is fatally incorrect.
6. **The Inverse Laplace Partial Fraction Sign Trap**: In $\frac{s}{(s+2)^2 + 9}$, split the numerator into $(s+2) - 2$. Then $\mathcal{L}^{-1} = e^{-2t}\cos(3t) - \frac{2}{3}e^{-2t}\sin(3t)$. Watch the sign of the exponential shift!
