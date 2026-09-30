# Chapter 02: First-Order Differential Equations & Modeling
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Official Course Textbook (7th Ed., Chapter 2)

---

## 1. Executive Summary & First-Principles Philosophy
Chapter 2 forms the analytical and practical backbone of first-order differential equations. In this chapter, we master the 5 core analytical solution techniques:
1. **Separation of Variables** ($g(y)dy = f(x)dx$)
2. **Integrating Factors for Linear Equations** ($y' + P(x)y = Q(x)$)
3. **Exact Equations & Multipliers** ($M dx + N dy = 0$)
4. **Substitutions** (Homogeneous, Bernoulli, Linear Composition)
5. **Applied Physical Modeling** (Newton's cooling, brine tanks, logistic population dynamics)

---

## 2. Core Mechanics & Mathematical Engine

### A. Separation of Variables
If an ODE can be factored as $\frac{dy}{dx} = g(x)h(y)$, divide by $h(y)$ (noting any zero-division singular solutions where $h(y) = 0$) and integrate both sides:
$$\int \frac{1}{h(y)}dy = \int g(x)dx + C$$

### B. First-Order Linear ODEs & The Integrating Factor
Standard linear form requires the leading coefficient of $\frac{dy}{dx}$ to be strictly 1:
$$\frac{dy}{dx} + P(x)y = Q(x)$$
Multiply every term by the integrating factor $\mu(x) = e^{\int P(x)dx}$:
$$e^{\int P(x)dx}\frac{dy}{dx} + P(x)e^{\int P(x)dx}y = Q(x)e^{\int P(x)dx}$$
Recognize the left side as the product rule: $\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)$. Integrate and divide:
$$y(x) = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x)dx + C\right]$$

### C. Exact Equations & Integrating Multipliers
An equation $M(x, y)dx + N(x, y)dy = 0$ is **exact** if and only if:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
Then there exists a potential function $F(x, y)$ such that $\frac{\partial F}{\partial x} = M$ and $\frac{\partial F}{\partial y} = N$. The general solution is $F(x, y) = C$.

If not exact, calculate:
1. If $\frac{M_y - N_x}{N}$ depends only on $x$, then $\mu(x) = \exp\left(\int \frac{M_y - N_x}{N}dx\right)$.
2. If $\frac{N_x - M_y}{M}$ depends only on $y$, then $\mu(y) = \exp\left(\int \frac{N_x - M_y}{M}dy\right)$.

### D. Substitution Archetypes
1. **Homogeneous Equations**: If $M(tx, ty) = t^n M(x, y)$ and $N(tx, ty) = t^n N(x, y)$, substitute $y = ux \implies dy = u dx + x du$.
2. **Bernoulli Equation**:
   $$\frac{dy}{dx} + P(x)y = Q(x)y^n$$
   Divide by $y^n$: $y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$. Substitute $w = y^{1-n}$, which transforms into linear:
   $$\frac{dw}{dx} + (1-n)P(x)w = (1-n)Q(x)$$
3. **Linear Composition**: $\frac{dy}{dx} = f(Ax + By + C) \implies u = Ax + By + C \implies \frac{du}{dx} = A + B\frac{dy}{dx}$.

---

## 3. Curriculum-Grounded Visual Reference

![Figure 2.1.2: Direction field of dy/dx = 0.2xy](./images/textbook_fig_2_1_2_direction_field.png)
*Figure 2.1: Direction field and solution curves — from Textbook 7th Ed. Chapter 2 (Fig. 2.1.2).*

![Figure 2.7.4: Mixture tank problem](./images/textbook_fig_2_7_4_mixture_tank.png)
*Figure 2.2: Mixing tank schematic: Input brine rate vs output drain rate — from Textbook 7th Ed. Chapter 2 (Fig. 2.7.4).*

---

## 4. Fully Worked Exam Archetype: The Draining Mixture Tank

**Problem**: A tank initially contains $V_0 = 300\text{ gal}$ of brine in which $A_0 = 50\text{ lb}$ of salt is dissolved. Pure water flows in at $r_{\text{in}} = 3\text{ gal/min}$, and the thoroughly mixed solution pumps out at $r_{\text{out}} = 2\text{ gal/min}$. Find the salt content $A(t)$ at any time $t$.

### Step-by-Step Solution:
* **Step 1: Governing Mass Balance**:
  $$\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}} = (c_{\text{in}} r_{\text{in}}) - (c_{\text{out}}(t) r_{\text{out}})$$
  Since pure water enters, $c_{\text{in}} = 0 \implies R_{\text{in}} = 0$.
* **Step 2: Volume Formulation**:
  $$V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t = 300 + (3 - 2)t = 300 + t\text{ gal}$$
  Therefore, concentration at time $t$ is $c_{\text{out}}(t) = \frac{A(t)}{300 + t}$.
* **Step 3: Setup First-Order Linear ODE**:
  $$\frac{dA}{dt} = -\frac{2A}{300 + t} \implies \frac{dA}{dt} + \frac{2}{300 + t}A = 0$$
* **Step 4: Separation / Integrating Factor**:
  $$\frac{dA}{A} = -\frac{2}{300 + t}dt \implies \ln|A| = -2\ln(300 + t) + C_1$$
  $$A(t) = \frac{C}{(300 + t)^2}$$
* **Step 5: Apply Initial Condition**:
  $$A(0) = 50 \implies 50 = \frac{C}{300^2} \implies C = 50 \times 90000 = 4,500,000$$
  $$A(t) = \frac{4,500,000}{(300 + t)^2}\text{ lb}$$

---

## 5. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Dropping $+ C$ Before Exponentiating**: In separable equations, write $+ C$ immediately after integrating. $e^{\ln|y|} = e^{kt + C} = C_0 e^{kt}$. Never add $+ C$ at the very end as an afterthought!
* ⚠️ **Trap 2: Variable Volume Tank Denominators**: When inflow rate $\neq$ outflow rate, volume is dynamic: $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$. Forgetting this produces an incorrect constant denominator.
