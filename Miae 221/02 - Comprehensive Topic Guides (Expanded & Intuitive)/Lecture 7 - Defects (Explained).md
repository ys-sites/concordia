# MIAE 221: Materials Science for Engineers
# Lecture 7: Defects — Imperfections in Solids & Dislocations (Explained)
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering**  
**Teacher Material: Lecture 7 (Prof. Mamoun Medraj) · Correlated with Callister Chapter 4**

---

## Executive Overview & Core Concepts

No engineering material is crystalline perfection; real materials contain structural imperfections that govern mechanical strength, electrical resistivity, semiconductor doping, and plastic deformation. This explained lecture guide covers:
1. **0D Point Defects**: Vacancies, self-interstitials, and the thermodynamic necessity of equilibrium vacancy concentrations.
2. **Arrhenius Thermodynamics & Activation Energy ($Q_v$)**: Mathematical formulation and Arrhenius slope analysis for vacancy quantification.
3. **Solid Solutions**: Substitutional and interstitial solid solution mechanisms.
4. **Hume-Rothery Rules**: The four empirical criteria governing solid solubility limits.
5. **1D Linear Defects (Dislocations)**: Edge, screw, and mixed dislocations, the Burgers vector ($\mathbf{b}$), and dislocation glide physics.

---

## 1. Zero-Dimensional Point Defects

Point defects are localized lattice disruptions involving one or two atomic diameters:

![Point Defects in Crystalline Solids](./images/point_defects_vacancy_self_interstitial.png)
*Figure 7.1: Zero-dimensional point defects in crystalline solids (Dr. Medraj MIAE 221 Lecture 7, Slide 4 & Callister Fig. 4.1). (a) Vacancy: an unoccupied atomic site causing inward compressive lattice distortion. (b) Self-interstitial: an extra atom squeezed into an interstitial site, causing severe outward tensile lattice strain.*

### 1. Vacancy
* An atomic site that is normally occupied in the perfect crystal lattice, but is missing an atom.
* Produced during solid-state crystallization, rapid quenching, or high-energy radiation damage.
* Causes adjacent surrounding atoms to relax inward, creating localized compressive strain fields.

### 2. Self-Interstitial
* A host atom squeezed into an interstitial void (a small empty space between lattice atoms) that is not normally occupied.
* Since the diameter of the host atom is substantially larger than the interstitial void space, introducing a self-interstitial causes **severe localized lattice strain**.
* **Thermodynamic Consequence**: The formation energy of a self-interstitial ($Q_i \approx 3 - 5\text{ eV}$) is far higher than that of a vacancy ($Q_v \approx 0.8 - 1.2\text{ eV}$). Consequently, the equilibrium concentration of self-interstitials is negligible under ordinary thermal conditions ($N_i/N \approx 10^{-30}$ at room temperature).

---

## 2. Equilibrium Vacancy Concentration & Arrhenius Thermodynamics

### Why Vacancies Exist in Thermodynamic Equilibrium
Unlike dislocations and grain boundaries (which are non-equilibrium defects), vacancies are **thermodynamically stable equilibrium defects**:
* Creating a vacancy requires an enthalpy expenditure ($\Delta H_v > 0$) to break interatomic bonds.
* However, distributing vacancies randomly throughout the lattice introduces spatial disorder, dramatically increasing the **configurational entropy** ($\Delta S_v > 0$).
* At any temperature $T > 0\text{ K}$, the Gibbs free energy of the crystal ($G = H - TS$) is minimized at a specific, non-zero concentration of vacancies:

![Equilibrium Vacancy Concentration Arrhenius Model](./images/equilibrium_vacancy_concentration_arrhenius.png)
*Figure 7.2: Thermodynamic equilibrium vacancy concentration curve (Dr. Medraj Lecture 7, Slide 5 & Callister Fig. 4.2). The vacancy fraction increases exponentially with absolute temperature according to the Boltzmann distribution.*

### The Governing Arrhenius Equation

$$\mathbf{\frac{N_v}{N} = \exp\left(-\frac{Q_v}{k_B T}\right)}$$

Where:
* $N_v$ = Number of equilibrium vacancies per unit volume ($\text{m}^{-3}$ or $\text{cm}^{-3}$).
* $N$ = Total number of atomic lattice sites per unit volume ($\text{m}^{-3}$ or $\text{cm}^{-3}$).
* $Q_v$ = Activation energy required to form one vacancy ($\text{J/atom}$ or $\text{eV/atom}$).
* $k_B$ = Boltzmann constant:
  * $k_B = 1.38 \times 10^{-23}\text{ J}/(\text{atom}\cdot\text{K})$ (use when $Q_v$ is given in Joules).
  * $k_B = 8.62 \times 10^{-5}\text{ eV}/(\text{atom}\cdot\text{K})$ (use when $Q_v$ is given in electron-volts).
* $T$ = Absolute temperature in **Kelvin** ($T(\text{K}) = T(^\circ\text{C}) + 273.15$).

---

### Step-by-Step Calculation: Total Atomic Sites ($N$)

To determine the absolute number of vacancies per cubic meter ($N_v$), one must first compute the total number of atomic sites $N$ per cubic meter from the material's bulk density ($\rho$), molar mass ($A$), and Avogadro's number ($N_A = 6.022 \times 10^{23}\text{ atoms/mol}$):

$$N = \frac{\rho \times N_A}{A}$$

*Dimensional Verification*:
$$N = \frac{[\text{g/m}^3] \times [\text{atoms/mol}]}{[\text{g/mol}]} = \text{atoms/m}^3$$

---

### Comprehensive Solved Problem: Vacancy Concentration in Copper (Dr. Medraj Lecture 7 Example)

**Problem Statement**:
Calculate the equilibrium number of vacancies per cubic meter ($N_v$) in pure copper at $1000^\circ\text{C}$.
Given data:
* Activation energy for vacancy formation: $Q_v = 0.90\text{ eV/atom}$
* Atomic weight of copper: $A_{Cu} = 63.55\text{ g/mol}$
* Density of copper at $1000^\circ\text{C}$: $\rho = 8.40\text{ g/cm}^3$

**Step-by-Step Solution**:

1. **Step 1: Convert Temperature to Absolute Kelvin**:
   $$T = 1000^\circ\text{C} + 273.15 = \mathbf{1273.15\text{ K}}$$

2. **Step 2: Convert Density to SI Units ($\text{g/m}^3$)**:
   $$\rho = 8.40\text{ g/cm}^3 \times \left(\frac{100\text{ cm}}{1\text{ m}}\right)^3 = 8.40 \times 10^6\text{ g/m}^3$$

3. **Step 3: Compute Total Atomic Lattice Sites ($N$)**:
   $$N = \frac{\rho N_A}{A_{Cu}} = \frac{(8.40 \times 10^6\text{ g/m}^3)(6.022 \times 10^{23}\text{ atoms/mol})}{63.55\text{ g/mol}}$$
   $$N = \frac{5.0585 \times 10^{30}}{63.55} = \mathbf{7.96 \times 10^{28}\text{ atoms/m}^3}$$

4. **Step 4: Compute the Exponential Arrhenius Argument**:
   Using $k_B = 8.62 \times 10^{-5}\text{ eV/K}$:
   $$\frac{Q_v}{k_B T} = \frac{0.90\text{ eV}}{(8.62 \times 10^{-5}\text{ eV/K})(1273.15\text{ K})} = \frac{0.90}{0.109745} = 8.2008$$

5. **Step 5: Compute the Equilibrium Vacancy Fraction ($N_v/N$)**:
   $$\frac{N_v}{N} = \exp(-8.2008) = e^{-8.2008} = \mathbf{2.744 \times 10^{-4}}$$
   *(Physical interpretation: at $1000^\circ\text{C}$, approximately $1$ out of every $3600$ lattice sites in copper is empty).*

6. **Step 6: Compute Absolute Number of Vacancies ($N_v$)**:
   $$N_v = N \times \left(\frac{N_v}{N}\right) = (7.96 \times 10^{28}\text{ m}^{-3}) \times (2.744 \times 10^{-4})$$
   $$\mathbf{N_v = 2.18 \times 10^{25}\text{ vacancies/m}^3}$$

---

### Measuring Activation Energy via Arrhenius Plots

![Measuring Activation Energy via Arrhenius Plot](./images/measuring_activation_energy_arrhenius_plot.png)
*Figure 7.3: Arrhenius plot of $\ln(N_v/N)$ versus inverse absolute temperature $1/T$ (Dr. Medraj Lecture 7, Slide 8 & Callister Fig. 4.3). The slope of the resulting linear curve yields the activation energy $-Q_v/k_B$.*

Taking the natural logarithm of both sides of the Arrhenius equation:

$$\ln\left(\frac{N_v}{N}\right) = \ln\left[\exp\left(-\frac{Q_v}{k_B T}\right)\right] = -\frac{Q_v}{k_B}\left(\frac{1}{T}\right)$$

This has the linear form $y = m x + b$, where:
* $y = \ln(N_v/N)$
* $x = \frac{1}{T}$
* **Slope $m = -\frac{Q_v}{k_B}$**

By measuring the vacancy concentration at two temperatures ($T_1$ and $T_2$):
$$\ln\left(\frac{N_{v1}}{N}\right) - \ln\left(\frac{N_{v2}}{N}\right) = -\frac{Q_v}{k_B}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$
$$\mathbf{Q_v = -k_B \frac{\ln(N_{v1}/N_{v2})}{\frac{1}{T_1} - \frac{1}{T_2}}}$$

---

## 3. Impurities in Solids & Solid Solutions

A pure elemental metal does not exist commercially; all engineering alloys consist of a **solvent** (host matrix) containing **solute** (minority guest atoms).

![Solid Solution Types: Substitutional vs Interstitial](./images/solid_solution_substitutional_vs_interstitial.png)
*Figure 7.4: Atomic mechanisms of solid solution formation (Dr. Medraj Lecture 7, Slide 9 & Callister Fig. 4.4). (a) Substitutional solid solution: solute atoms replace host solvent atoms in lattice positions. (b) Interstitial solid solution: small solute atoms occupy interstitial voids between host atoms.*

### 1. Substitutional Solid Solutions
Solute atoms directly replace host atoms at regular lattice positions:
* *Example*: Copper-Nickel ($\text{Cu-Ni}$) brass/monel alloys. Nickel atoms occupy regular FCC copper lattice sites.

### 2. Interstitial Solid Solutions
Solute atoms occupy the tiny empty spaces (interstitial sites) between the host atoms:
* Solute atoms must be substantially smaller than host atoms.
* The atomic radius ratio must satisfy:
  $$\frac{r_{\text{solute}}}{r_{\text{solvent}}} < 0.59$$
* *Engineering Example*: Carbon in Iron ($\text{C-Fe}$ steel). Carbon ($r = 0.071\text{ nm}$) fits interstitially into Iron ($r = 0.124\text{ nm}$).
  * **Solubility Limits**: In BCC $\alpha$-ferrite, interstitial sites are small and distorted; maximum carbon solubility is only **$0.022\text{ wt}\%$** at $727^\circ\text{C}$. In FCC $\gamma$-austenite, the octahedral interstitial void is larger; carbon solubility reaches **$2.14\text{ wt}\%$**.

---

## 4. The Hume-Rothery Rules for Substitutional Solid Solubility

For two metals to exhibit high or complete solid solubility in each other (e.g., forming an isomorphous phase diagram like $\text{Cu-Ni}$), they must satisfy the **four Hume-Rothery Rules**:

![Hume-Rothery Rules for Solid Solubility](./images/hume_rothery_rules_substitutional_solubility.png)
*Figure 7.5: Summary of the 4 Hume-Rothery empirical criteria for substitutional solid solubility (Dr. Medraj Lecture 7, Slide 11 & Callister Table 4.1).*

| Rule Number | Hume-Rothery Criterion | Physical Justification & Numerical Limit |
| :--- | :--- | :--- |
| **Rule 1: Atomic Size Factor** | The difference in atomic radii ($\Delta r$) must be **less than $15\%$** | $\Delta r = \frac{\|r_{\text{solute}} - r_{\text{solvent}}\|}{r_{\text{solvent}}} \times 100\% < 15\%$. If $\Delta r > 15\%$, lattice strain is too severe, forcing phase separation. |
| **Rule 2: Crystal Structure Match** | Both elements must possess the **same crystal structure** | E.g., both FCC, both BCC, or both HCP. Mismatched lattices cannot form an unbroken series of solid solutions across all compositions. |
| **Rule 3: Electronegativity Proximity** | Electronegativities must be **comparable** | If the electronegativity difference $\Delta X$ is large, the elements form a brittle **intermetallic compound** rather than a solid solution. |
| **Rule 4: Valency Rule** | A metal dissolves another metal of **higher valence** more readily than one of lower valence | Maximum solubility occurs when solute valency $\ge$ solvent valency. |

### Case Study: Cu-Ni Complete Solid Solubility
* $r_{Cu} = 0.128\text{ nm}$, $r_{Ni} = 0.125\text{ nm} \implies \Delta r = \frac{0.128 - 0.125}{0.128} = 2.3\% < 15\%$ (Passes Rule 1).
* Crystal structure: Both are FCC (Passes Rule 2).
* Electronegativities: $X_{Cu} = 1.9$, $X_{Ni} = 1.8 \implies \Delta X = 0.1$ (Passes Rule 3).
* Valences: $\text{Cu}^{+1} / \text{Cu}^{+2}$, $\text{Ni}^{+2}$ (Passes Rule 4).
* **Result**: Copper and Nickel form complete, continuous solid solutions across all proportions from $0\%$ to $100\%$ Ni.

---

## 5. One-Dimensional Linear Defects: Dislocations

A **dislocation** is a one-dimensional (linear) crystalline defect around which atoms are misaligned. Dislocations are the fundamental carriers of **plastic deformation (ductility)** in crystalline metals.

### 1. Edge Dislocation

![Edge Dislocation Extra Half Plane Burgers](./images/edge_dislocation_extra_half_plane_burgers.png)
*Figure 7.6: Atomic configuration of an edge dislocation (Dr. Medraj Lecture 7, Slide 16 & Callister Fig. 4.7). An extra half-plane of atoms terminates at line $\mathbf{t}$. Above the line, atoms are in compression; below, they are in tension. The Burgers vector $\mathbf{b}$ is strictly perpendicular to the dislocation line: $\mathbf{b} \perp \mathbf{t}$.*

* **Structure**: Formed by introducing an **extra half-plane of atoms** that terminates within the crystal.
* **Dislocation Line ($\mathbf{t}$)**: The line running along the bottom edge of the extra half-plane.
* **Strain Fields**:
  * Region **above** the slip plane: Atoms are squeezed together $\implies$ localized **compressive strain**.
  * Region **below** the slip plane: Atoms are pulled apart $\implies$ localized **tensile strain**.
* **Burgers Vector Relationship**:
  $$\mathbf{b} \perp \mathbf{t} \quad (\text{Burgers vector is PERPENDICULAR to dislocation line})$$

---

### 2. Screw Dislocation

![Screw Dislocation Helical Slip Burgers](./images/screw_dislocation_helical_slip_burgers.png)
*Figure 7.7: Atomic configuration of a screw dislocation (Dr. Medraj Lecture 7, Slide 18 & Callister Fig. 4.8). Formed by a shear cut and displacement, converting atomic planes into a continuous helical spiral ramp. The Burgers vector $\mathbf{b}$ is strictly parallel to the dislocation line: $\mathbf{b} \parallel \mathbf{t}$.*

* **Structure**: Formed by applying a shear stress that displaces one part of the crystal by one lattice spacing relative to the other, creating a continuous helical ramp.
* **Burgers Vector Relationship**:
  $$\mathbf{b} \parallel \mathbf{t} \quad (\text{Burgers vector is PARALLEL to dislocation line})$$

---

### 3. Mixed Dislocation

![Mixed Dislocation Curved Line Character](./images/mixed_dislocation_curved_line_character.png)
*Figure 7.8: Mixed dislocation loop in a crystalline solid (Dr. Medraj Lecture 7, Slide 20 & Callister Fig. 4.9). In real engineering alloys, dislocation lines are curved; the Burgers vector $\mathbf{b}$ remains invariant across the entire line, transitioning continuously from pure edge ($\mathbf{b} \perp \mathbf{t}$) to pure screw ($\mathbf{b} \parallel \mathbf{t}$).*

* Real dislocations in engineering metals are rarely purely edge or purely screw; they curve through the lattice as **mixed dislocations**.
* The **Burgers vector $\mathbf{b}$ is invariant** along the entire length of the dislocation line.
* At points where $\mathbf{b} \perp \mathbf{t}$, the character is pure edge.
* At points where $\mathbf{b} \parallel \mathbf{t}$, the character is pure screw.
* Everywhere else ($0^\circ < \theta < 90^\circ$), the character is **mixed**.

---

### The Burgers Circuit Algorithm

The **Burgers vector ($\mathbf{b}$)** denotes the magnitude and direction of the lattice distortion created by a dislocation:
1. Traverse equal numbers of lattice steps in a closed right-handed loop around the dislocation line in the real crystal ($m$ steps up, $n$ steps right, $m$ steps down, $n$ steps left).
2. Trace the exact same sequence of steps in a perfect reference crystal.
3. The closure failure vector pointing from the finish point to the starting point in the reference crystal is the **Burgers vector $\mathbf{b}$**.

---

## 6. Master Formula & High-Yield Summary Matrix

| Defect / Parameter | Governing Relationship | Physical Interpretation & Rules |
| :--- | :--- | :--- |
| **Equilibrium Vacancies** | $\dfrac{N_v}{N} = \exp\left(-\dfrac{Q_v}{k_B T}\right)$ | Exponential increase with $T$; $T$ must be in Kelvin. |
| **Lattice Site Density** | $N = \dfrac{\rho N_A}{A}$ | Convert $\rho$ to $\text{g/m}^3$ to find sites per $\text{m}^3$. |
| **Arrhenius Slope** | $\text{Slope } m = -\dfrac{Q_v}{k_B}$ | Plot $\ln(N_v/N)$ vs $1/T$; slope yields activation energy. |
| **Hume-Rothery Rules** | 1. $\Delta r < 15\%$, 2. Same crystal, 3. Low $\Delta X$, 4. Valency | Dictates complete vs limited substitutional solid solubility. |
| **Edge Dislocation** | $\mathbf{b} \perp \mathbf{t}$ | Extra half-plane; glide direction parallel to $\mathbf{b}$. |
| **Screw Dislocation** | $\mathbf{b} \parallel \mathbf{t}$ | Helical ramp; glide direction perpendicular to $\mathbf{b}$. |
| **Mixed Dislocation** | $0^\circ < \angle(\mathbf{b}, \mathbf{t}) < 90^\circ$ | Burgers vector $\mathbf{b}$ is constant; character transitions along curve. |
