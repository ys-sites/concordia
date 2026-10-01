# Chapter 05: Diffusion in Solids & Industrial Carburization
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Materials Science (MIAE 221)  
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Edition) by William D. Callister, Jr. & David G. Rethwisch — Chapter 5

---

## 1. Executive Overview & First-Principles Philosophy

In crystalline solids at room temperature, matter appears completely rigid and stationary. Yet at the atomic scale, atoms vibrate incessantly around their equilibrium lattice positions at frequencies of $\approx 10^{13}\text{ Hz}$. Given sufficient thermal energy, atoms overcome potential energy barriers and hop from site to site.

**Diffusion** is the macroscopic phenomenon of material transport by atomic motion. It is the fundamental kinetic mechanism underpinning virtually all heat treatments and manufacturing processes in engineering:
* **Surface Hardening (Carburization & Nitriding)**: Infusing carbon or nitrogen atoms into the surface of low-carbon steel gears to create an ultra-hard, wear-resistant outer casing while preserving a shock-absorbing, ductile core.
* **Microelectronic Semiconductor Doping**: Introducing phosphorus or boron atoms into ultra-pure silicon wafers at nanometer depths to create $p-n$ junctions in microprocessors.
* **Sintering of Ceramic Powders**: Consolidating compressed ceramic powder into dense, pore-free components without melting.
* **Precipitation Hardening & Age Hardening**: Precipitating nanoscale intermetallic phases in aerospace aluminum alloys (Al 7075, Al 2024) to lock dislocations and quadruple yield strength.
* **Creep Rupture in Jet Engines**: High-temperature deformation governed by vacancy-assisted atomic diffusion under continuous centrifugal stress.

---

## 2. Diffusion Mechanisms: How Atoms Migrate (Callister §5.2)

Solid-state diffusion is divided into two broad categories:
1. **Self-Diffusion**: The migration of host atoms within a pure elemental metal (e.g., radioactive $^{64}\text{Cu}$ tracer atoms diffusing through a block of pure copper). There is no net chemical composition change.
2. **Interdiffusion (Impurity Diffusion)**: The migration of solute atoms through a solvent matrix driven by a concentration gradient (e.g., copper and nickel atoms interdiffusing across a bonded interface).

![Callister Figure 5.1 - Diffusion Couple of Copper and Nickel](./images/callister_fig_5_1_diffusion_couple.png)
*Figure 5.1: (a) A diffusion couple formed by joining pure copper and pure nickel bars. (b) Atomic mixing across the interface after prolonged high-temperature exposure. (c) Resulting smooth concentration profile — from Callister & Rethwisch 10th Ed. (Fig. 5.1).*

### The Two Foundational Atomic Hopping Mechanisms:

```
                            Diffusion Mechanisms
                                     │
     ┌───────────────────────────────┴───────────────────────────────┐
     ▼                                                               ▼
VACANCY DIFFUSION                                               INTERSTITIAL DIFFUSION
• Host & substitutional atoms (Cu in Ni, Fe in Fe)              • Small solute atoms (C, H, N, O in Fe)
• Atom hops into adjacent vacant lattice site                   • Atom hops between empty interstitial voids
• Requires presence of vacancies (N_v ∝ e^(-Q_v/kT))           • Millions of empty voids available
• High activation energy Q_d (Bond breaking + vacancy formation)• Low activation energy Q_d
• SLOW diffusion rate                                           • MUCH FASTER diffusion rate (10⁶× faster!)
```

#### A. Vacancy Diffusion
* **Physical Mechanism**: An atom residing on a normal lattice site jumps into an adjacent empty lattice vacancy.
* **Energetic Requirements**: For a jump to occur, two conditions must be satisfied simultaneously:
  1. An adjacent lattice site must be vacant (governed by vacancy formation energy $Q_v$).
  2. The atom must possess sufficient thermal vibrational energy to break bonds with its current neighbors and squeeze past surrounding lattice atoms into the vacancy (governed by migration energy $Q_m$).
* **Activation Energy**: The overall activation energy for vacancy diffusion is the sum of formation and migration energies:
  $$Q_d = Q_v + Q_m$$
* Operates for all **self-diffusion** and **substitutional solid solutions** (e.g., $\text{Ni}$ in $\text{Cu}$, $\text{Zn}$ in $\text{Cu}$).

#### B. Interstitial Diffusion
* **Physical Mechanism**: Small solute atoms (Carbon, Nitrogen, Hydrogen, Oxygen) migrate directly from one interstitial void site to an adjacent empty interstitial site.
* **Why Interstitial Diffusion is Orders of Magnitude Faster than Vacancy Diffusion**:
  1. **Void Availability**: In any crystal lattice, virtually all interstitial void sites are unoccupied. An interstitial atom never has to wait for a vacancy to arrive; adjacent vacant sites are always available!
  2. **Lower Activation Energy**: Small interstitial atoms do not have to break host lattice bonds to move; they merely squeeze between host atoms, requiring much lower migration energy:
     $$Q_{d,\text{interstitial}} \ll Q_{d,\text{vacancy}}$$
* *Dramatic Engineering Comparison*: At $1000^\circ\text{C}$ in iron:
  * Diffusion coefficient of interstitial Carbon: $D_{\text{C}} \approx 2.4 \times 10^{-11}\text{ m}^2/\text{s}$
  * Diffusion coefficient of self-diffusing Iron: $D_{\text{Fe}} \approx 2.3 \times 10^{-16}\text{ m}^2/\text{s}$
  * **Carbon diffuses 100,000 times faster than iron at the exact same temperature!**

---

## 3. Steady-State Diffusion: Fick's First Law (Callister §5.3)

### 3.1 The Concept of Diffusion Flux ($J$)
The rate of mass transfer is quantified by the **Diffusion Flux ($J$)**: the mass (or number of atoms) $M$ diffusing perpendicularly through a unit cross-sectional area $A$ per unit time $t$:
$$J = \frac{M}{A \cdot t} = \frac{1}{A} \frac{dM}{dt}$$
* **SI Units**: $\text{kg}/(\text{m}^2\cdot\text{s})$ or $\text{g}/(\text{cm}^2\cdot\text{s})$ (or $\text{atoms}/(\text{m}^2\cdot\text{s})$).

### 3.2 Fick's First Law
When conditions are **steady-state** (meaning the diffusion flux $J$ and the concentration profile do not change with time, $\frac{\partial C}{\partial t} = 0$), mass transport is governed by **Fick's First Law**:
$$J = -D \frac{dC}{dx}$$
where:
* $J$ = diffusion flux ($\text{kg}/(\text{m}^2\cdot\text{s})$).
* $D$ = **Diffusion Coefficient** ($\text{m}^2/\text{s}$ or $\text{cm}^2/\text{s}$).
* $\frac{dC}{dx}$ = **Concentration Gradient** ($\text{kg/m}^4$ or $\text{g/cm}^4$):
  $$\frac{dC}{dx} \approx \frac{\Delta C}{\Delta x} = \frac{C_{\text{low}} - C_{\text{high}}}{x_{\text{low}} - x_{\text{high}}}$$
* **The Negative Sign**: Reflects the physical reality that mass naturally diffuses **down the concentration gradient**—from regions of high chemical concentration to regions of low concentration. Because $\Delta C$ is negative in the direction of positive $x$, the negative sign ensures that the calculated mass flux $J$ is a positive quantity.

---

## 4. Nonsteady-State Diffusion: Fick's Second Law & Carburization (Callister §5.4)

In virtually all practical engineering applications, diffusion is **nonsteady-state**: the concentration of the diffusing species at any spatial location changes dynamically over time:
$$C = C(x, t)$$

### 4.1 Fick's Second Law
Applying mass conservation across an infinitesimal volume element yields **Fick's Second Law**:
$$\frac{\partial C}{\partial t} = \frac{\partial}{\partial x}\left( D \frac{\partial C}{\partial x} \right)$$
Assuming the diffusion coefficient $D$ is independent of concentration across the alloy range:
$$\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$$

![Callister Figure 5.5 - Concentration Profile During Nonsteady-State Diffusion](./images/callister_fig_5_5_carburizing_profile.png)
*Figure 5.5: Nonsteady-state diffusion concentration profiles $C(x, t)$ at successive times $t_1 < t_2 < t_3$ into a semi-infinite solid with constant surface concentration $C_s$ — from Callister & Rethwisch 10th Ed. (Fig. 5.5).*

---

### 4.2 The Semi-Infinite Solid Boundary-Value Problem (Industrial Carburization)

Consider a steel bar placed in a carbon-rich gas furnace atmosphere. The mathematical model assumes a **semi-infinite solid**:
* **Initial Condition**: Before diffusion begins ($t = 0$), the solute is uniformly distributed at initial bulk concentration $C_0$:
  $$C(x, 0) = C_0 \quad \text{for all } 0 \le x \le \infty$$
* **Boundary Conditions**:
  1. At the surface ($x = 0$), the concentration is instantaneously brought to and maintained at a constant surface concentration $C_s$ by the furnace gas:
     $$C(0, t) = C_s \quad \text{for all } t > 0$$
  2. Infinitely deep into the interior ($x \to \infty$), the concentration remains unaffected:
     $$C(\infty, t) = C_0 \quad \text{for all } t > 0$$

#### The Exact Analytical Solution:
Solving Fick's Second Law using Laplace transforms or similarity variables yields:
$$\frac{C_x - C_0}{C_s - C_0} = 1 - \operatorname{erf}\left( \frac{x}{2\sqrt{Dt}} \right)$$
where:
* $C_x = C(x, t)$ = concentration at depth $x$ after elapsed time $t$.
* $C_s$ = constant surface concentration.
* $C_0$ = uniform initial bulk concentration.
* $x$ = depth below surface ($\text{m}$).
* $D$ = diffusion coefficient at furnace temperature ($\text{m}^2/\text{s}$).
* $t$ = diffusion time ($\text{s}$).
* $\operatorname{erf}(z)$ = **Gaussian Error Function**, defined mathematically as:
  $$\operatorname{erf}(z) = \frac{2}{\sqrt{\pi}} \int_0^z e^{-y^2} \, dy$$

---

### 4.3 Tabulated Values of the Error Function & Linear Interpolation

| $z$ | $\operatorname{erf}(z)$ | $z$ | $\operatorname{erf}(z)$ | $z$ | $\operatorname{erf}(z)$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **$0.00$** | $0.0000$ | **$0.50$** | $0.5205$ | **$1.10$** | $0.8802$ |
| **$0.05$** | $0.0564$ | **$0.55$** | $0.5633$ | **$1.20$** | $0.9103$ |
| **$0.10$** | $0.1125$ | **$0.60$** | $0.6039$ | **$1.30$** | $0.9340$ |
| **$0.15$** | $0.1680$ | **$0.65$** | $0.6420$ | **$1.40$** | $0.9523$ |
| **$0.20$** | $0.2227$ | **$0.70$** | $0.6778$ | **$1.50$** | $0.9661$ |
| **$0.25$** | $0.2763$ | **$0.75$** | $0.7112$ | **$1.60$** | $0.9763$ |
| **$0.30$** | $0.3286$ | **$0.80$** | $0.7421$ | **$1.70$** | $0.9838$ |
| **$0.35$** | $0.3794$ | **$0.85$** | $0.7707$ | **$1.80$** | $0.9891$ |
| **$0.40$** | $0.4284$ | **$0.90$** | $0.7969$ | **$1.90$** | $0.9928$ |
| **$0.45$** | $0.4755$ | **$0.95$** | $0.8209$ | **$2.00$** | $0.9953$ |

#### Linear Interpolation Formula:
To find an argument $z$ corresponding to an error function value $\operatorname{erf}(z)$ lying between tabulated points $(z_1, \operatorname{erf}(z_1))$ and $(z_2, \operatorname{erf}(z_2))$:
$$\frac{z - z_1}{z_2 - z_1} = \frac{\operatorname{erf}(z) - \operatorname{erf}(z_1)}{\operatorname{erf}(z_2) - \operatorname{erf}(z_1)} \implies z = z_1 + (z_2 - z_1) \left[ \frac{\operatorname{erf}(z) - \operatorname{erf}(z_1)}{\operatorname{erf}(z_2) - \operatorname{erf}(z_1)} \right]$$

---

### 4.4 The Fundamental Scaling Law: $\frac{x^2}{Dt} = \text{Constant}$

Notice that in Fick's Second Law solution, the ratio $\frac{C_x - C_0}{C_s - C_0}$ depends solely on the dimensionless argument:
$$z = \frac{x}{2\sqrt{Dt}}$$
* **The Constant-Composition Law**: For a given alloy system, to achieve the **exact same concentration $C_x$** under different processing conditions:
  $$z = \text{constant} \iff \frac{x}{2\sqrt{Dt}} = \text{constant} \iff \frac{x^2}{D \cdot t} = \text{constant}$$
* **Case 1: Same Temperature ($D_1 = D_2 = D$), Changing Time and Depth**:
  $$\frac{x_1^2}{t_1} = \frac{x_2^2}{t_2} \iff \frac{x_1}{\sqrt{t_1}} = \frac{x_2}{\sqrt{t_2}}$$
  * *Profound Engineering Consequence*: Diffusion depth scales with the **square root of time** ($x \propto \sqrt{t}$). To double the carburization depth ($x_2 = 2x_1$), the required furnace time **quadruples**: $t_2 = 4 t_1$!
* **Case 2: Changing Temperature to Reduce Processing Time**:
  $$D_1 t_1 = D_2 t_2 \implies t_2 = t_1 \left( \frac{D_1}{D_2} \right)$$
  Increasing furnace temperature from $900^\circ\text{C}$ to $1000^\circ\text{C}$ drastically increases $D$, cutting required carburizing time from 20 hours to under 4 hours!

---

## 5. Factors Influencing Diffusion: Temperature & The Arrhenius Law (Callister §5.5)

### 5.1 Temperature Dependence: The Arrhenius Equation
Thermal energy facilitates atomic jumps over potential barriers. The diffusion coefficient $D$ obeys an exponential **Arrhenius relationship**:
$$D = D_0 \exp\left( -\frac{Q_d}{R T} \right)$$
where:
* $D$ = diffusion coefficient at temperature $T$ ($\text{m}^2/\text{s}$).
* $D_0$ = temperature-independent pre-exponential frequency factor ($\text{m}^2/\text{s}$).
* $Q_d$ = activation energy for diffusion ($\text{J/mol}$ or $\text{eV/atom}$).
* $R$ = universal gas constant $= 8.314\text{ J/(mol}\cdot\text{K)}$.
* $T$ = absolute temperature in **Kelvin (K)**.

#### Linear Form for Experimental Data Fitting:
Taking the natural logarithm of both sides:
$$\ln D = \ln D_0 - \frac{Q_d}{R} \left( \frac{1}{T} \right)$$
* A plot of $\ln D$ (vertical axis) versus $\frac{1}{T}$ (horizontal axis) produces a **straight line**:
  * Slope $= -\frac{Q_d}{R}$
  * Vertical y-intercept $= \ln D_0$
* Given diffusion coefficients $D_1$ and $D_2$ at two different temperatures $T_1$ and $T_2$:
  $$\ln\left(\frac{D_1}{D_2}\right) = -\frac{Q_d}{R} \left( \frac{1}{T_1} - \frac{1}{T_2} \right) \implies Q_d = -\frac{R \ln(D_1 / D_2)}{\frac{1}{T_1} - \frac{1}{T_2}}$$

---

### 5.2 Diffusion Pathways: Surface vs. Boundary vs. Volume
Atoms can migrate through different structural regions of a polycrystalline solid:
1. **Surface Diffusion**: Atoms migrate along external surfaces. Very low activation energy because surface atoms have few confining neighbor bonds.
2. **Grain Boundary Diffusion**: Atoms migrate along disordered grain boundary interfaces.
3. **Volume (Lattice / Bulk) Diffusion**: Atoms migrate directly through the interior of crystalline grains.

$$\text{Diffusion Rates: } D_{\text{surface}} > D_{\text{grain boundary}} \gg D_{\text{lattice}}$$
$$\text{Activation Energies: } Q_{\text{surface}} < Q_{\text{grain boundary}} \ll Q_{\text{lattice}}$$

* *Temperature Crossover*: At low temperatures ($T < 0.5 T_m$), grain boundary diffusion dominates because bulk atoms lack the thermal energy to overcome $Q_{\text{lattice}}$. At high temperatures ($T > 0.7 T_m$), volume diffusion dominates overall mass transport because the total volume of grains is hundreds of thousands of times greater than the volume of grain boundary interfaces.

---

## 6. Comprehensive Step-by-Step Problem Walkthroughs

### 6.1 Problem 1: Industrial Gas Carburization of a Steel Gear

**Problem Statement**: A gear manufactured from a low-carbon steel containing an initial uniform carbon concentration of $C_0 = 0.20\text{ wt}\%\text{ C}$ is placed in a carburizing gas atmosphere maintained at a constant surface concentration of $C_s = 1.20\text{ wt}\%\text{ C}$ at a temperature of $950^\circ\text{C}$ ($1223\text{ K}$).
1. Calculate the diffusion coefficient $D$ of carbon in FCC $\gamma$-iron at $950^\circ\text{C}$, given pre-exponential factor $D_0 = 2.3 \times 10^{-5}\text{ m}^2/\text{s}$ and activation energy $Q_d = 148\text{ kJ/mol}$ ($148,000\text{ J/mol}$).
2. Determine the time (in hours) required to achieve a carbon concentration of $C_x = 0.60\text{ wt}\%\text{ C}$ at a depth of $0.75\text{ mm}$ ($7.5 \times 10^{-4}\text{ m}$) beneath the surface.

#### Step 1: Calculate the Diffusion Coefficient $D$ at $950^\circ\text{C}$ ($1223\text{ K}$)
$$D = D_0 \exp\left( -\frac{Q_d}{R T} \right) = (2.3 \times 10^{-5}\text{ m}^2/\text{s}) \exp\left( -\frac{148,000\text{ J/mol}}{(8.314\text{ J/mol}\cdot\text{K}) \times (1223\text{ K})} \right)$$
Evaluate the exponent:
$$\frac{148,000}{8.314 \times 1223} = \frac{148,000}{10168.0} = 14.555$$
$$D = (2.3 \times 10^{-5}) \exp(-14.555) = (2.3 \times 10^{-5}) \times (4.773 \times 10^{-7}) = 1.098 \times 10^{-11}\text{ m}^2/\text{s}$$

#### Step 2: Set Up the Nonsteady-State Diffusion Equation
$$\frac{C_x - C_0}{C_s - C_0} = 1 - \operatorname{erf}\left( \frac{x}{2\sqrt{Dt}} \right)$$
Substitute the known concentration values:
$$\frac{0.60 - 0.20}{1.20 - 0.20} = \frac{0.40}{1.00} = 0.4000 = 1 - \operatorname{erf}(z)$$
Rearrange to isolate the error function:
$$\operatorname{erf}(z) = 1 - 0.4000 = 0.6000$$

#### Step 3: Determine $z$ via Linear Interpolation from Error Function Table
Look up $\operatorname{erf}(z) = 0.6000$ in the table:
* At $z_1 = 0.55$: $\operatorname{erf}(z_1) = 0.5633$
* At $z_2 = 0.60$: $\operatorname{erf}(z_2) = 0.6039$
Since $0.5633 < 0.6000 < 0.6039$, apply linear interpolation:
$$\frac{z - 0.55}{0.60 - 0.55} = \frac{0.6000 - 0.5633}{0.6039 - 0.5633}$$
$$\frac{z - 0.55}{0.05} = \frac{0.0367}{0.0406} = 0.9039$$
$$z = 0.55 + (0.05 \times 0.9039) = 0.55 + 0.0452 = 0.5952$$

#### Step 4: Solve for Diffusion Time $t$
Recall that $z = \frac{x}{2\sqrt{Dt}}$:
$$0.5952 = \frac{x}{2\sqrt{Dt}} \implies 2\sqrt{Dt} = \frac{x}{0.5952} \implies \sqrt{Dt} = \frac{x}{2 \times 0.5952} = \frac{x}{1.1904}$$
Square both sides:
$$D t = \left( \frac{x}{1.1904} \right)^2 \implies t = \frac{x^2}{(1.1904)^2 \cdot D}$$
Substitute $x = 0.75\text{ mm} = 7.5 \times 10^{-4}\text{ m}$ and $D = 1.098 \times 10^{-11}\text{ m}^2/\text{s}$:
$$x^2 = (7.5 \times 10^{-4}\text{ m})^2 = 5.625 \times 10^{-7}\text{ m}^2$$
$$(1.1904)^2 = 1.4171$$
$$t = \frac{5.625 \times 10^{-7}}{1.4171 \times (1.098 \times 10^{-11}\text{ m}^2/\text{s})} = \frac{5.625 \times 10^{-7}}{1.556 \times 10^{-11}} = 36,150\text{ seconds}$$
Convert seconds to hours:
$$t = \frac{36,150\text{ s}}{3600\text{ s/hr}} = 10.04\text{ hours} \approx 10\text{ hours}$$

---

### 6.2 Problem 2: Determining Activation Energy $Q_d$ and Pre-Exponential $D_0$

**Problem Statement**: The diffusion coefficient for diffusion of zinc in copper was experimentally measured at two temperatures:
* At $T_1 = 600^\circ\text{C}$ ($873\text{ K}$): $D_1 = 5.6 \times 10^{-16}\text{ m}^2/\text{s}$
* At $T_2 = 800^\circ\text{C}$ ($1073\text{ K}$): $D_2 = 1.8 \times 10^{-13}\text{ m}^2/\text{s}$
1. Calculate the activation energy $Q_d$ (in $\text{kJ/mol}$).
2. Determine the pre-exponential factor $D_0$ (in $\text{m}^2/\text{s}$).
3. Predict the diffusion coefficient at $T_3 = 900^\circ\text{C}$ ($1173\text{ K}$).

#### Step 1: Calculate Activation Energy $Q_d$
Using the two-point Arrhenius formula:
$$\ln\left( \frac{D_2}{D_1} \right) = -\frac{Q_d}{R} \left( \frac{1}{T_2} - \frac{1}{T_1} \right) = \frac{Q_d}{R} \left( \frac{1}{T_1} - \frac{1}{T_2} \right)$$
* $\ln\left( \frac{1.8 \times 10^{-13}}{5.6 \times 10^{-16}} \right) = \ln(321.43) = 5.7728$
* $\frac{1}{T_1} = \frac{1}{873} = 1.1455 \times 10^{-3}\text{ K}^{-1}$
* $\frac{1}{T_2} = \frac{1}{1073} = 0.9320 \times 10^{-3}\text{ K}^{-1}$
* $\frac{1}{T_1} - \frac{1}{T_2} = (1.1455 - 0.9320) \times 10^{-3} = 2.135 \times 10^{-4}\text{ K}^{-1}$
Solve for $Q_d$:
$$Q_d = \frac{R \ln(D_2 / D_1)}{\frac{1}{T_1} - \frac{1}{T_2}} = \frac{(8.314\text{ J/mol}\cdot\text{K}) \times 5.7728}{2.135 \times 10^{-4}\text{ K}^{-1}} = \frac{47.995}{2.135 \times 10^{-4}} = 224,800\text{ J/mol} \approx 225\text{ kJ/mol}$$

#### Step 2: Calculate Pre-Exponential Factor $D_0$
Using data at $T_2 = 1073\text{ K}$:
$$D_2 = D_0 \exp\left(-\frac{Q_d}{R T_2}\right) \implies D_0 = D_2 \exp\left( \frac{Q_d}{R T_2} \right)$$
$$\frac{Q_d}{R T_2} = \frac{224,800}{8.314 \times 1073} = \frac{224,800}{8920.9} = 25.199$$
$$D_0 = (1.8 \times 10^{-13}\text{ m}^2/\text{s}) \times \exp(25.199) = (1.8 \times 10^{-13}) \times (8.786 \times 10^{10}) = 1.58 \times 10^{-2}\text{ m}^2/\text{s}$$

#### Step 3: Predict Diffusion Coefficient at $900^\circ\text{C}$ ($1173\text{ K}$)
$$\frac{Q_d}{R T_3} = \frac{224,800}{8.314 \times 1173} = \frac{224,800}{9752.3} = 23.051$$
$$D_3 = D_0 \exp(-23.051) = (1.58 \times 10^{-2}) \times (9.752 \times 10^{-11}) = 1.54 \times 10^{-12}\text{ m}^2/\text{s}$$

---

## 7. Critical Concordia Exam Traps & Red Flags

* ⚠️ **Trap 1: Forgetting the $1 - \operatorname{erf}(z)$ Complement**:
  The formula is $\frac{C_x - C_0}{C_s - C_0} = 1 - \operatorname{erf}(z)$.
  Students routinely forget the $1 - \dots$ and set $\frac{C_x - C_0}{C_s - C_0} = \operatorname{erf}(z)$. In Problem 1, this would give $\operatorname{erf}(z) = 0.4000$ instead of $0.6000$, resulting in a completely erroneous time calculation!
* ⚠️ **Trap 2: Converting Hours to Seconds**:
  In Fick's Second Law, the diffusion coefficient $D$ has units of $\text{m}^2/\mathbf{s}$. Therefore, time $t$ in $\frac{x}{2\sqrt{Dt}}$ **MUST be converted to seconds**! If an exam problem specifies $t = 10\text{ hours}$, you must substitute $t = 10 \times 3600 = 36,000\text{ s}$.
* ⚠️ **Trap 3: Mixing Millimeters and Meters in Depth $x$**:
  Diffusion depths are typically specified in millimeters ($x = 0.5\text{ mm}$), but $D$ is in $\text{m}^2/\text{s}$. You must convert $x$ to meters ($x = 5 \times 10^{-4}\text{ m}$) before squaring. Forgetting this results in an error of $10^6$ ($1,000,000\times$) in calculated time!
* ⚠️ **Trap 4: Doubling Depth Requires 4× Time**:
  A classic multiple choice question asks: "If it takes 2 hours to achieve a depth of $0.5\text{ mm}$, how long does it take to achieve $1.0\text{ mm}$ at the same temperature?"
  Students incorrectly answer 4 hours (linear). The correct answer is **8 hours** ($x^2/t = \text{const} \implies (2)^2 \times 2 = 8\text{ hrs}$)!
