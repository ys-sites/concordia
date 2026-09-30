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

## 3. Curriculum-Grounded Visual Reference & Textbook Figure Breakdowns

### Visual 3.1: Direction Fields & Solution Curves (Textbook Fig. 2.1.2)
![Figure 2.1.2: Direction Field and Solution Curves](./images/textbook_fig_2_1_2_direction_field.png)
*Figure 2.1: Direction field and family of integral solution curves for $\frac{dy}{dx} = 0.2xy$ — extracted directly from Official Textbook (7th Ed., Chapter 2, Fig. 2.1.2).*

#### In-Depth Pedagogical Breakdown:
1. **Lineal Elements & Tangent Grids (Fig. 2.1.2a)**:
   - At every Cartesian coordinate $(x, y)$, the differential equation $\frac{dy}{dx} = 0.2xy$ prescribes a unique numerical slope.
   - **Coordinate Symmetries**:
     - On the axes ($x = 0$ or $y = 0$), the slope is $0.2(0) = 0$. Hence, every lineal element along the $x$-axis and $y$-axis is strictly horizontal.
     - In Quadrant I ($x > 0, y > 0$) and Quadrant III ($x < 0, y < 0$), the product $xy > 0$, so the slopes are strictly positive (pointing upward to the right).
     - In Quadrant II ($x < 0, y > 0$) and Quadrant IV ($x > 0, y < 0$), the product $xy < 0$, so the slopes are strictly negative (pointing downward to the right).
2. **Integral Solution Curves (Fig. 2.1.2b)**:
   - Solving $\frac{dy}{dx} = 0.2xy$ by separation of variables:
     $$\frac{dy}{y} = 0.2x dx \implies \ln|y| = 0.1x^2 + C_1 \implies y(x) = c e^{0.1x^2}$$
   - Any trajectory dropped into the direction field must remain everywhere tangent to the lineal elements.
   - For $c > 0$, the curves form upward-opening symmetric exponential wells.
   - For $c < 0$, the curves form downward-opening symmetric profiles.
   - The line $y \equiv 0$ ($c = 0$) serves as an exact equilibrium barrier that solution curves never cross due to Picard-Lindelöf uniqueness.

---

### Visual 3.2: Physical Mixing Tank Architecture & Salt Accumulation (Textbook Fig. 1.3.3 & Fig. 2.7.4)
![Figure 1.3.3: Mixing Tank Schematic](./images/textbook_fig_2_7_4_mixture_tank.png)
*Figure 2.2: Mixing tank schematic showing fluid inflow, impeller agitation, and bottom drainage — from Textbook 7th Ed. (Fig. 1.3.3).*

![Figure 2.7.4: Pounds of Salt vs Time Curve](./images/textbook_fig_2_7_4_salt_curve.png)
*Figure 2.3: Salt accumulation curve $x(t)$ approaching horizontal asymptote $x = 600\text{ lb}$ — from Textbook 7th Ed. (Fig. 2.7.4).*

#### In-Depth Pedagogical Breakdown:
1. **Fluid Dynamics & Mass Conservation (Fig. 1.3.3)**:
   - **Inflow Stream**: Brine enters the top pipe at volumetric flow rate $r_{\text{in}} = 3\text{ gal/min}$ with dissolved salt concentration $c_{\text{in}} = 2\text{ lb/gal}$, delivering salt input $R_{\text{in}} = r_{\text{in}} \cdot c_{\text{in}} = 6\text{ lb/min}$.
   - **Internal Tank Agitation**: An impeller continuously mixes the fluid to ensure uniform spatial concentration throughout the $300\text{ gallon}$ volume.
   - **Drainage Stream**: Well-stirred brine exits through the bottom pipe at $r_{\text{out}} = 3\text{ gal/min}$, carrying salt out at instantaneous rate $R_{\text{out}} = r_{\text{out}} \cdot \frac{A(t)}{V(t)} = \frac{3}{300}A(t) = \frac{1}{100}A(t)\text{ lb/min}$.
2. **Dynamic Trajectory to Equilibrium (Fig. 2.7.4)**:
   - The governing linear ODE $\frac{dA}{dt} + \frac{1}{100}A = 6$ yields the analytical solution $A(t) = 600 - (600 - A_0)e^{-t/100}$.
   - **Transient Phase**: As shown in the graph and table, the salt content rapidly climbs from $A(0) = 50\text{ lb}$ to $266.4\text{ lb}$ at $t = 50\text{ min}$, and $525.6\text{ lb}$ at $t = 200\text{ min}$.
   - **Steady-State Saturation**: As $t \to \infty$, the exponential transient dies out ($e^{-t/100} \to 0$), and the salt content asymptotically approaches $A_{\text{limit}} = 600\text{ lb}$ ($V \times c_{\text{in}} = 300\text{ gal} \times 2\text{ lb/gal} = 600\text{ lb}$).

---

### Visual 3.3: One-Dimensional Phase Line & Autonomous Trajectories (Textbook Fig. 2.1.6)
![Figure 2.1.6: Phase Portrait and Solution Curves](./images/textbook_fig_2_1_6_phase_curves.png)
*Figure 2.4: Autonomous phase line mapped to solution trajectories in the $tP$-plane across regions $R_1, R_2, R_3$ — from Textbook 7th Ed. (Fig. 2.1.6).*

#### In-Depth Pedagogical Breakdown:
1. **Equilibrium Lines**:
   - The horizontal dashed lines $P = 0$ and $P = a/b$ represent equilibrium solutions where $\frac{dP}{dt} = 0$.
   - These equilibrium lines partition the phase plane into three distinct invariant regions: $R_1$ ($P < 0$), $R_2$ ($0 < P < a/b$), and $R_3$ ($P > a/b$).
2. **Flow Direction & Stability**:
   - In region $R_2$, $\frac{dP}{dt} > 0$ (indicated by upward arrow on the phase line). Solutions starting at $P_0 \in (0, a/b)$ increase monotonically toward the carrying capacity $a/b$, exhibiting an S-shaped logistic curve with an inflection point.
   - In region $R_3$, $\frac{dP}{dt} < 0$ (indicated by downward arrow). Solutions starting above carrying capacity decrease asymptotically toward $a/b$.
   - Hence, $P = a/b$ is an **asymptotically stable sink (attractor)**, while $P = 0$ is an **unstable source (repeller)**.

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
