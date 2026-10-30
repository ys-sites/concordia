# MIAE 221: Materials Science
## Master Formula Sheet Past Exam Solved Companion (Chapters 1–6)
### Concordia University · Gina Cody School of Engineering and Computer Science

---

## Strategic Overview & Pedagogical Standard

This master companion manual is the complete numerical and derivation reference for the **MIAE 221 Midterm Examination** covering **Chapters 1 through 6** (Callister 10th Edition: Atomic Structure & Interatomic Bonding, Crystal Structures & Crystallography, Imperfections & Point Defects, Diffusion, Mechanical Properties of Metals, and Dislocations/Strengthening).

For every formula in the curriculum, this guide provides an authentic Concordia past examination question, accompanied by:
1. **Zero-Skip Mathematical Derivation**: Every intermediate arithmetic and algebraic operation is explicitly displayed with SI dimensional units.
2. **"Why This Method Works"**: The underlying physical and crystallographic mechanism.
3. **Common Exam Pitfalls & Traps**: Diagnostic warnings detailing exactly where students lose marks on Concordia midterms.

---

## Chapter 1: Atomic Structure & Interatomic Bonding

### 1.1 Total Atoms, Mass & Molar Conversion
$$\boxed{n_{\text{mol}} = \frac{m}{A} \qquad N_{\text{atoms}} = n_{\text{mol}} \cdot N_A = \frac{m}{A} N_A}$$

#### Past Exam Problem (Concordia Midterm)
A cylindrical wire of pure Platinum ($A_{\text{Pt}} = 195.08\text{ g/mol}$, density $\rho_{\text{Pt}} = 21.45\text{ g/cm}^3$) has a diameter of $d = 2.0\text{ mm}$ and a length of $L = 1.50\text{ m}$. Calculate (a) the total mass of the wire in grams, and (b) the total number of Platinum atoms contained within the specimen.

#### Zero-Skip Step-by-Step Solution
**Step 1: Calculate Specimen Cross-Sectional Area and Volume**
$$\text{Radius } r = \frac{d}{2} = \frac{2.0\text{ mm}}{2} = 1.0\text{ mm} = 0.10\text{ cm}$$
$$\text{Length } L = 1.50\text{ m} = 150.0\text{ cm}$$
$$V = \pi r^2 L = \pi \times (0.10\text{ cm})^2 \times 150.0\text{ cm} = \pi \times 0.010\text{ cm}^2 \times 150.0\text{ cm} = 1.50\pi\text{ cm}^3 = 4.71239\text{ cm}^3$$

**Step 2: Calculate Mass of the Specimen**
$$m = \rho \times V = (21.45\text{ g/cm}^3) \times (4.71239\text{ cm}^3) = 101.0807\text{ g} \approx \mathbf{101.08\text{ g}}$$

**Step 3: Calculate Moles and Total Atoms**
$$n_{\text{mol}} = \frac{m}{A} = \frac{101.0807\text{ g}}{195.08\text{ g/mol}} = 0.51815\text{ mol}$$
$$N_{\text{atoms}} = n_{\text{mol}} \times N_A = (0.51815\text{ mol}) \times (6.022 \times 10^{23}\text{ atoms/mol}) = \mathbf{3.120 \times 10^{23}\text{ atoms}}$$

> **Why This Method Works**: Mass represents the macroscopic sum of atomic nuclei. Dividing by molar mass normalizes the sample into molar packets, which Avogadro's number scales into discrete atomic counts.
>
> **Exam Trap**: Mixing centimeters and millimeters. Always convert length and diameter to centimeters when working with density given in $\text{g/cm}^3$.

---

### 1.2 Percent Ionic Character (Pauling Electronegativity Relation)
$$\boxed{\% \text{Ionic Character} = \left[ 1 - \exp\left( -0.25 \left( \chi_A - \chi_B \right)^2 \right) \right] \times 100\%}$$

#### Past Exam Problem (Concordia Midterm)
Compute the percent ionic character of the interatomic bond in:
1. Silicon Carbide ($\text{SiC}$), given $\chi_{\text{Si}} = 1.8$ and $\chi_{\text{C}} = 2.5$.
2. Titanium Dioxide ($\text{TiO}_2$), given $\chi_{\text{Ti}} = 1.5$ and $\chi_{\text{O}} = 3.5$.
State whether each material is classified as predominantly ionic or covalent.

#### Zero-Skip Step-by-Step Solution
**Part 1: Silicon Carbide ($\text{SiC}$)**
1. Electronegativity difference: $\Delta \chi = |1.8 - 2.5| = 0.7$.
2. Square difference: $(\Delta \chi)^2 = (0.7)^2 = 0.49$.
3. Exponent: $-0.25 \times 0.49 = -0.1225$.
4. Evaluate exponential: $\exp(-0.1225) = 0.88471$.
5. Compute ionic fraction:
   $$\% \text{IC} = [1 - 0.88471] \times 100\% = 0.11529 \times 100\% = \mathbf{11.53\%}$$
   *Classification*: Because $\% \text{IC} < 50\%$, $\text{SiC}$ is predominantly **covalent** ($88.47\%$ covalent).

**Part 2: Titanium Dioxide ($\text{TiO}_2$)**
1. Electronegativity difference: $\Delta \chi = |1.5 - 3.5| = 2.0$.
2. Square difference: $(\Delta \chi)^2 = (2.0)^2 = 4.0$.
3. Exponent: $-0.25 \times 4.0 = -1.00$.
4. Evaluate exponential: $\exp(-1.00) = 0.36788$.
5. Compute ionic fraction:
   $$\% \text{IC} = [1 - 0.36788] \times 100\% = 0.63212 \times 100\% = \mathbf{63.21\%}$$
   *Classification*: Because $\% \text{IC} > 50\%$, $\text{TiO}_2$ is predominantly **ionic** ($63.21\%$ ionic).

> **Why This Method Works**: Electronegativity quantifies an atom's affinity for bonding electrons. When $\Delta \chi > 1.7$, valence electrons are transferred rather than shared, generating localized electrostatic ionic bonds.
>
> **Exam Trap**: Never multiply $\Delta \chi$ by stoichiometric chemical subscripts (e.g., doubling for $\text{O}_2$). The Pauling equation calculates the character of an isolated pair bond between atom $A$ and atom $B$.

---

### 1.3 Net Interatomic Force, Derivative & Equilibrium Spacing
$$\boxed{E_N(r) = -\frac{A}{r} + \frac{B}{r^n} \qquad F_N(r) = \frac{dE_N}{dr} = \frac{A}{r^2} - \frac{nB}{r^{n+1}} = 0 \quad \text{at } r = r_0}$$
$$\boxed{r_0 = \left( \frac{n B}{A} \right)^{\frac{1}{n-1}} \qquad E_0 = -\frac{A}{r_0} \left( 1 - \frac{1}{n} \right)}$$

#### Past Exam Problem (Concordia Midterm)
The attractive and repulsive bonding energies between two isolated ions are given by:
$$E_A(r) = -\frac{1.436}{r}\text{ eV} \qquad E_R(r) = \frac{7.32 \times 10^{-6}}{r^8}\text{ eV} \quad (r\text{ in nm})$$
1. Determine the equilibrium interionic separation $r_0$ in nanometers ($\text{nm}$).
2. Calculate the bonding energy $E_0$ in electron-volts ($\text{eV}$) and Joules ($\text{J}$).

#### Zero-Skip Step-by-Step Solution
**Step 1: Set Up Net Potential Energy & Derivative**
$$E_N(r) = -1.436 r^{-1} + 7.32 \times 10^{-6} r^{-8}$$
$$\frac{dE_N}{dr} = (-1)(-1.436) r^{-2} + (-8)(7.32 \times 10^{-6}) r^{-9} = \frac{1.436}{r^2} - \frac{5.856 \times 10^{-5}}{r^9}$$

**Step 2: Solve for Equilibrium Separation $r_0$**
$$\frac{1.436}{r_0^2} = \frac{5.856 \times 10^{-5}}{r_0^9} \implies r_0^7 = \frac{5.856 \times 10^{-5}}{1.436} = 4.07799 \times 10^{-5}\text{ nm}^7$$
$$r_0 = (4.07799 \times 10^{-5})^{1/7} = \mathbf{0.23597\text{ nm} \approx 0.236\text{ nm}}$$

**Step 3: Evaluate Bonding Energy $E_0$**
$$E_A(r_0) = -\frac{1.436}{0.23597} = -6.0855\text{ eV}$$
$$E_R(r_0) = \frac{7.32 \times 10^{-6}}{(0.23597)^8} = \frac{7.32 \times 10^{-6}}{9.6229 \times 10^{-6}} = +0.7607\text{ eV}$$
$$E_0 = E_A(r_0) + E_R(r_0) = -6.0855 + 0.7607 = \mathbf{-5.325\text{ eV}}$$
Convert to Joules ($1\text{ eV} = 1.602 \times 10^{-19}\text{ J}$):
$$E_0 = (-5.3248\text{ eV}) \times (1.602 \times 10^{-19}\text{ J/eV}) = \mathbf{-8.530 \times 10^{-19}\text{ J}}$$

> **Why This Method Works**: At the bottom of the potential energy trough, the slope $dE/dr = 0$, meaning attractive and repulsive forces cancel exactly. The minimum energy well depth $E_0$ defines the cohesive bond energy.
>
> **Exam Trap**: Setting $E_N(r) = 0$ instead of $dE/dr = 0$. $E_N = 0$ is the crossover point where net energy vanishes, not the equilibrium bond distance.

---

## Chapter 2: Crystal Structures & Crystallography

### 2.1 Theoretical Density of Metals
$$\boxed{\rho = \frac{n A}{V_C N_A} = \frac{n A}{a^3 N_A}}$$

#### Past Exam Problem (Concordia Midterm)
Copper (Cu) has an FCC crystal structure, an atomic radius of $R = 0.1278\text{ nm}$, and an atomic weight of $A = 63.55\text{ g/mol}$. Calculate the theoretical density of Cu in $\text{g/cm}^3$ and compare it with the handbook experimental density of $8.94\text{ g/cm}^3$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Convert Radius to Centimeters & Find Lattice Parameter $a$**
$$R = 0.1278\text{ nm} = 0.1278 \times 10^{-7}\text{ cm} = 1.278 \times 10^{-8}\text{ cm}$$
For FCC, atoms touch along the face diagonal: $4R = a\sqrt{2}$:
$$a = 2R\sqrt{2} = 2 \times (1.278 \times 10^{-8}\text{ cm}) \times 1.414214 = 3.61473 \times 10^{-8}\text{ cm}$$

**Step 2: Calculate Unit Cell Volume $V_C$**
$$V_C = a^3 = (3.61473 \times 10^{-8}\text{ cm})^3 = 4.72314 \times 10^{-23}\text{ cm}^3$$

**Step 3: Calculate Density**
For FCC Cu, $n = 4\text{ atoms/cell}$:
$$\text{Numerator: } n \times A = 4 \times 63.55\text{ g/mol} = 254.20\text{ g/mol}$$
$$\text{Denominator: } V_C \times N_A = (4.72314 \times 10^{-23}\text{ cm}^3) \times (6.022 \times 10^{23}\text{ mol}^{-1}) = 28.4427\text{ cm}^3\text{/mol}$$
$$\rho = \frac{254.20\text{ g/mol}}{28.4427\text{ cm}^3\text{/mol}} = \mathbf{8.937\text{ g/cm}^3}$$
$$\% \text{ difference} = \frac{|8.937 - 8.94|}{8.94} \times 100\% = \mathbf{0.034\%}$$

> **Why This Method Works**: A macroscopic single crystal is an infinite tessellation of identical unit cells. Thus, bulk macroscopic density equals the density of a single unit cell.
>
> **Exam Trap**: Forgetting that $1\text{ nm}^3 = 10^{-21}\text{ cm}^3$. If you compute $a$ in meters, density outputs in $\text{kg/m}^3$ ($8937\text{ kg/m}^3$). Divide by $1000$ to get $\text{g/cm}^3$.

---

### 2.2 Total Unit Cells in a Solid Sample
$$\boxed{N_{\text{cells}} = \frac{V_{\text{sample}}}{V_C} = \frac{m / \rho}{a^3}}$$

#### Past Exam Problem (Concordia Midterm)
Calculate the total number of unit cells in a solid $1.0\text{ cm}^3$ cube of pure BCC Iron ($\alpha$-Fe) having a lattice parameter of $a = 0.2866\text{ nm}$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Calculate the Volume of a Single BCC Unit Cell**
$$a = 0.2866\text{ nm} = 0.2866 \times 10^{-7}\text{ cm} = 2.866 \times 10^{-8}\text{ cm}$$
$$V_C = a^3 = (2.866 \times 10^{-8}\text{ cm})^3 = 2.3541 \times 10^{-23}\text{ cm}^3$$

**Step 2: Divide Sample Volume by Cell Volume**
$$V_{\text{sample}} = 1.0\text{ cm}^3$$
$$N_{\text{cells}} = \frac{1.0\text{ cm}^3}{2.3541 \times 10^{-23}\text{ cm}^3} = \mathbf{4.248 \times 10^{22}\text{ unit cells}}$$

> **Exam Trap**: Confusing total unit cells ($N_{\text{cells}}$) with total atoms ($N_{\text{atoms}}$). For BCC, each cell has $2$ atoms, so $N_{\text{atoms}} = 2 \times N_{\text{cells}} = 8.496 \times 10^{22}\text{ atoms}$.

---

### 2.3 APF & Geometric Derivations ($a \leftrightarrow R$)
$$\boxed{\text{APF} = \frac{V_{\text{atoms}}}{V_C} = \frac{n \left(\frac{4}{3}\pi R^3\right)}{V_C}}$$

#### Past Exam Problem (Concordia Midterm)
Derive the expression relating the unit cell edge length $a$ to the atomic radius $R$ for BCC Tungsten ($R = 0.1371\text{ nm}$). Prove from first principles that the APF for BCC is identically $0.68$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Geometric Derivation of $a(R)$**
- Body diagonal passes through corners and center atom: $\text{Length} = R + 2R + R = 4R$.
- Face diagonal $f = \sqrt{a^2 + a^2} = a\sqrt{2}$.
- Body diagonal $b = \sqrt{f^2 + a^2} = \sqrt{2a^2 + a^2} = a\sqrt{3}$.
$$a\sqrt{3} = 4R \implies \mathbf{a = \frac{4R}{\sqrt{3}}}$$

**Step 2: Compute $a$ and $V_C$ for Tungsten**
$$a = \frac{4 \times 0.1371\text{ nm}}{\sqrt{3}} = \frac{0.5484}{1.73205} = 0.31662\text{ nm} = 3.1662 \times 10^{-10}\text{ m}$$
$$V_C = a^3 = (3.1662 \times 10^{-10}\text{ m})^3 = \mathbf{3.174 \times 10^{-29}\text{ m}^3}$$

**Step 3: Algebraic Proof of $\text{APF} = 0.68$**
$$n_{\text{BCC}} = 2\text{ atoms}, \quad V_S = 2 \times \left(\frac{4}{3}\pi R^3\right) = \frac{8}{3}\pi R^3$$
$$V_C = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64 R^3}{3\sqrt{3}}$$
$$\text{APF} = \frac{\frac{8}{3}\pi R^3}{\frac{64 R^3}{3\sqrt{3}}} = \frac{8\pi}{3} \times \frac{3\sqrt{3}}{64} = \frac{\sqrt{3}\pi}{8} = \frac{1.73205 \times 3.14159}{8} = \frac{5.4414}{8} = \mathbf{0.6802 \approx 0.68}$$

---

### 2.4 Linear Density ($\text{LD}$) & Planar Density ($\text{PD}$)
$$\boxed{\text{LD} = \frac{\text{Atoms centered on direction vector}}{\text{Length of vector } L} \qquad \text{PD} = \frac{\text{Atoms centered on plane}}{\text{Area of plane } A_p}}$$

#### Past Exam Problem (Concordia Midterm)
1. Calculate the linear density of the $[110]$ direction in FCC Aluminum ($R = 0.143\text{ nm}$).
2. Calculate the planar density of the $(110)$ plane in BCC Iron ($a = 0.2866\text{ nm}$).

#### Zero-Skip Step-by-Step Solution
**Part 1: Linear Density of $[110]$ in FCC**
- In FCC, $[110]$ runs along the face diagonal: $L = 4R = 4 \times 0.143\text{ nm} = 0.572\text{ nm}$.
- Intersected atoms: $\frac{1}{2}\text{ (corner)} + 1\text{ (face-center)} + \frac{1}{2}\text{ (corner)} = 2\text{ atoms}$.
$$\text{LD}_{[110]} = \frac{2\text{ atoms}}{0.572\text{ nm}} = \mathbf{3.50\text{ nm}^{-1}} = \mathbf{3.50 \times 10^9\text{ m}^{-1}}$$

**Part 2: Planar Density of $(110)$ in BCC**
- Dimensions of $(110)$ rectangular plane: Width $= a$, Height $= a\sqrt{2}$.
  $$A_p = a \times a\sqrt{2} = a^2\sqrt{2} = (0.2866\text{ nm})^2 \times 1.414214 = 0.08214 \times 1.414214 = 0.11616\text{ nm}^2$$
- Intersected atoms: $4\text{ corners} \times \frac{1}{4} + 1\text{ center} = 2\text{ atoms}$.
$$\text{PD}_{(110)} = \frac{2\text{ atoms}}{0.11616\text{ nm}^2} = \mathbf{17.22\text{ nm}^{-2}} = \mathbf{1.72 \times 10^{19}\text{ m}^{-2}}$$

---

### 2.5 Interplanar Spacing ($d_{hkl}$) & Bragg's Law
$$\boxed{d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}} \qquad n\lambda = 2d_{hkl}\sin\theta}$$
$$\text{Diffraction Rules: } \text{BCC: } h+k+l = \text{even} \qquad \text{FCC: } h,k,l \text{ all odd or all even}$$

#### Past Exam Problem (Concordia Midterm)
A monochromatic X-ray beam ($\lambda = 0.1542\text{ nm}$) reflects from the $(110)$ planes of a BCC metal at a two-theta diffraction angle of $2\theta = 44.50^\circ$. Calculate (a) $d_{110}$, (b) the unit cell parameter $a$, and (c) the atomic radius $R$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Bragg Angle & Interplanar Spacing**
$$\theta = \frac{44.50^\circ}{2} = 22.25^\circ \implies \sin(22.25^\circ) = 0.37865$$
$$d_{110} = \frac{\lambda}{2\sin\theta} = \frac{0.1542\text{ nm}}{2 \times 0.37865} = \frac{0.1542}{0.75730} = \mathbf{0.20362\text{ nm}}$$

**Step 2: Lattice Parameter $a$**
$$d_{110} = \frac{a}{\sqrt{1^2 + 1^2 + 0^2}} = \frac{a}{\sqrt{2}} \implies a = d_{110}\sqrt{2} = 0.20362\text{ nm} \times 1.414214 = \mathbf{0.28796\text{ nm} \approx 0.288\text{ nm}}$$

**Step 3: Atomic Radius $R$ for BCC**
$$a = \frac{4R}{\sqrt{3}} \implies R = \frac{a\sqrt{3}}{4} = \frac{0.28796\text{ nm} \times 1.73205}{4} = \mathbf{0.12469\text{ nm} \approx 0.125\text{ nm}}$$

> **Exam Trap**: Diffractometers output **$2\theta$**. Always divide by $2$ to obtain the Bragg angle $\theta$ before computing $\sin\theta$.

---

## Chapter 3: Imperfections in Solids

### 3.1 Equilibrium Vacancy Concentration & Atomic Site Density
$$\boxed{N_v = N \exp\left(-\frac{Q_v}{k T}\right) \qquad N = \frac{\rho N_A}{A}}$$

#### Past Exam Problem (Concordia Midterm)
Calculate the equilibrium concentration of vacancies per cubic meter in Copper at $850^\circ\text{C}$ ($1123.15\text{ K}$).
*Given*: $Q_v = 0.90\text{ eV/atom}$, $\rho = 8.40\text{ g/cm}^3 = 8.40 \times 10^6\text{ g/m}^3$, $A = 63.55\text{ g/mol}$, $k = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$, $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Calculate Total Atomic Sites per $\text{m}^3$ ($N$)**
$$N = \frac{(8.40 \times 10^6\text{ g/m}^3) \times (6.022 \times 10^{23}\text{ atoms/mol})}{63.55\text{ g/mol}} = \frac{5.05848 \times 10^{30}}{63.55} = 7.95984 \times 10^{28}\text{ atoms/m}^3$$

**Step 2: Evaluate the Exponential Factor**
$$k T = (8.62 \times 10^{-5}\text{ eV/K}) \times (1123.15\text{ K}) = 0.0968155\text{ eV}$$
$$-\frac{Q_v}{k T} = -\frac{0.90\text{ eV}}{0.0968155\text{ eV}} = -9.29603$$
$$\exp(-9.29603) = 9.1788 \times 10^{-5}$$

**Step 3: Calculate $N_v$**
$$N_v = (7.95984 \times 10^{28}\text{ atoms/m}^3) \times (9.1788 \times 10^{-5}) = \mathbf{7.306 \times 10^{24}\text{ vacancies/m}^3}$$

> **Exam Trap**: Pairing $Q_v$ in $\text{eV}$ with the gas constant $R = 8.314\text{ J/mol}\cdot\text{K}$. If $Q_v$ is in $\text{eV/atom}$, use $k = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$. If $Q_v$ is in $\text{J/mol}$, use $R = 8.314\text{ J/mol}\cdot\text{K}$.

---

### 3.2 Composition Conversions & Average Alloy Density
$$\boxed{C_1' = \frac{C_1 / A_1}{\frac{C_1}{A_1} + \frac{C_2}{A_2}} \times 100\% \qquad \rho_{\text{avg}} = \frac{100}{\frac{C_1}{\rho_1} + \frac{C_2}{\rho_2}}}$$

#### Past Exam Problem (Concordia Midterm)
An alloy contains $97.0\text{ wt}\%$ Al ($A = 26.98\text{ g/mol}$) and $3.0\text{ wt}\%$ Cu ($A = 63.55\text{ g/mol}$). Convert this composition into atomic percent ($\text{at}\%$). Furthermore, calculate the theoretical density of brass ($70.0\text{ wt}\%$ Cu, $\rho = 8.94\text{ g/cm}^3$; $30.0\text{ wt}\%$ Zn, $\rho = 7.13\text{ g/cm}^3$).

#### Zero-Skip Step-by-Step Solution
**Part 1: $\text{wt}\%$ to $\text{at}\%$ Conversion**
$$\text{Moles Al} = \frac{97.0}{26.98} = 3.59526\text{ mol} \qquad \text{Moles Cu} = \frac{3.0}{63.55} = 0.04721\text{ mol}$$
$$\text{Total moles} = 3.59526 + 0.04721 = 3.64247\text{ mol}$$
$$C_{\text{Cu}}' = \frac{0.04721}{3.64247} \times 100\% = \mathbf{1.30\text{ at}\%} \qquad C_{\text{Al}}' = 100\% - 1.30\% = \mathbf{98.70\text{ at}\%}$$

**Part 2: Average Density Calculation**
$$\frac{C_{\text{Cu}}}{\rho_{\text{Cu}}} = \frac{70.0}{8.94} = 7.82998\text{ cm}^3 \qquad \frac{C_{\text{Zn}}}{\rho_{\text{Zn}}} = \frac{30.0}{7.13} = 4.20757\text{ cm}^3$$
$$\rho_{\text{avg}} = \frac{100}{7.82998 + 4.20757} = \frac{100}{12.03755} = \mathbf{8.307\text{ g/cm}^3}$$

> **Exam Trap**: Never take the weighted arithmetic mean $\rho = 0.70(8.94) + 0.30(7.13) = 8.397\text{ g/cm}^3$ (WRONG). Mass fractions cannot weight volume directly; the reciprocal harmonic mean is required.

---

### 3.3 ASTM Grain Size Number
$$\boxed{N = 2^{n-1} \qquad N_M \left(\frac{M}{100}\right)^2 = 2^{n-1} \implies n = 1 + \frac{\ln\left[N_M (M/100)^2\right]}{\ln 2}}$$

#### Past Exam Problem (Concordia Midterm)
A micrograph taken at $250\times$ magnification reveals 40 grains in an area of exactly 1 square inch. Determine the ASTM grain size number $n$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Scale to Standard $100\times$ Magnification**
$$N = N_M \left(\frac{M}{100}\right)^2 = 40 \times \left(\frac{250}{100}\right)^2 = 40 \times (2.5)^2 = 40 \times 6.25 = 250\text{ grains/in}^2$$

**Step 2: Solve for $n$ Using Logarithms**
$$250 = 2^{n-1} \implies \ln(250) = (n - 1) \ln(2)$$
$$n - 1 = \frac{\ln(250)}{\ln(2)} = \frac{5.52146}{0.69315} = 7.9658 \implies n = 7.9658 + 1 = \mathbf{8.97 \approx 9.0}$$

---

## Chapter 4: Diffusion

### 4.1 Fick's First Law (Steady-State Flux) & Arrhenius Temperature Scaling
$$\boxed{J = -D \frac{dC}{dx} = D \frac{\Delta C}{\Delta x} \qquad D = D_0 \exp\left(-\frac{Q_d}{R T}\right)}$$
$$\boxed{\ln\left(\frac{D_2}{D_1}\right) = \frac{Q_d}{R} \left(\frac{1}{T_1} - \frac{1}{T_2}\right)}$$

#### Past Exam Problem (Concordia Midterm)
1. A sheet of BCC iron $1.5\text{ mm}$ thick has surface carbon concentrations of $C_A = 1.4\text{ kg/m}^3$ and $C_B = 0.2\text{ kg/m}^3$. At $700^\circ\text{C}$, $D = 1.2 \times 10^{-10}\text{ m}^2/\text{s}$. Calculate the steady-state diffusion flux $J$.
2. The diffusion coefficient of Zn in Cu is $5.0 \times 10^{-15}\text{ m}^2/\text{s}$ at $500^\circ\text{C}$ ($773.15\text{ K}$) and $2.0 \times 10^{-13}\text{ m}^2/\text{s}$ at $650^\circ\text{C}$ ($923.15\text{ K}$). Calculate $Q_d$ in $\text{kJ/mol}$ and $D_0$ in $\text{m}^2/\text{s}$.

#### Zero-Skip Step-by-Step Solution
**Part 1: Steady-State Flux**
$$\frac{\Delta C}{\Delta x} = \frac{1.4 - 0.2\text{ kg/m}^3}{1.5 \times 10^{-3}\text{ m}} = \frac{1.2}{1.5 \times 10^{-3}} = 800\text{ kg/m}^4$$
$$J = D \left(\frac{\Delta C}{\Delta x}\right) = (1.2 \times 10^{-10}\text{ m}^2/\text{s}) \times (800\text{ kg/m}^4) = \mathbf{9.60 \times 10^{-8}\text{ kg}/(\text{m}^2\cdot\text{s})}$$

**Part 2: Arrhenius Parameters**
$$\ln\left(\frac{D_2}{D_1}\right) = \ln\left(\frac{2.0 \times 10^{-13}}{5.0 \times 10^{-15}}\right) = \ln(40) = 3.68888$$
$$\frac{1}{T_1} - \frac{1}{T_2} = \frac{1}{773.15} - \frac{1}{923.15} = 0.0012934 - 0.0010833 = 2.1016 \times 10^{-4}\text{ K}^{-1}$$
$$Q_d = \frac{3.68888 \times 8.314\text{ J/mol}\cdot\text{K}}{2.1016 \times 10^{-4}\text{ K}^{-1}} = \frac{30.6723}{2.1016 \times 10^{-4}} = 145947\text{ J/mol} = \mathbf{145.95\text{ kJ/mol}}$$
Now solve for $D_0$:
$$D_0 = \frac{D_1}{\exp(-Q_d / RT_1)} = \frac{5.0 \times 10^{-15}}{\exp\left(-\frac{145947}{8.314 \times 773.15}\right)} = \frac{5.0 \times 10^{-15}}{\exp(-22.705)} = \frac{5.0 \times 10^{-15}}{1.3782 \times 10^{-10}} = \mathbf{3.63 \times 10^{-5}\text{ m}^2/\text{s}}$$

---

### 4.2 Fick's Second Law (Carburization & Error Function Interpolation)
$$\boxed{\frac{C_x - C_0}{C_s - C_0} = 1 - \operatorname{erf}\left(\frac{x}{2\sqrt{Dt}}\right) \qquad \frac{x_1^2}{D_1 t_1} = \frac{x_2^2}{D_2 t_2} = \text{const}}$$

#### Past Exam Problem (Concordia Final Exam)
Steel with initial carbon $C_0 = 0.20\text{ wt}\%$ is carburized at $950^\circ\text{C}$ ($D = 1.6 \times 10^{-11}\text{ m}^2/\text{s}$) with surface carbon $C_s = 1.00\text{ wt}\%$.
1. Calculate the time $t$ (in hours) to achieve $C_x = 0.60\text{ wt}\%$ at a case depth of $x = 0.75\text{ mm}$.
   Given: $\operatorname{erf}(0.45) = 0.4755$, $\operatorname{erf}(0.50) = 0.5205$.
2. At the same temperature, how many hours are required to reach the same carbon concentration at depth $x = 1.50\text{ mm}$?

#### Zero-Skip Step-by-Step Solution
**Part 1: Non-Steady-State Carburization Time**
$$\frac{C_x - C_0}{C_s - C_0} = \frac{0.60 - 0.20}{1.00 - 0.20} = \frac{0.40}{0.80} = 0.5000$$
$$1 - \operatorname{erf}(z) = 0.5000 \implies \operatorname{erf}(z) = 0.5000$$
Interpolate for $z$:
$$z = 0.45 + \frac{0.5000 - 0.4755}{0.5205 - 0.4755} \times (0.50 - 0.45) = 0.45 + \frac{0.0245}{0.0450} \times 0.05 = 0.45 + 0.02722 = 0.47722$$
Now invert $z = \frac{x}{2\sqrt{Dt}}$:
$$\sqrt{Dt} = \frac{x}{2z} = \frac{0.75 \times 10^{-3}\text{ m}}{2 \times 0.47722} = \frac{7.5 \times 10^{-4}}{0.95444} = 7.8580 \times 10^{-4}\text{ m}$$
$$D t = (7.8580 \times 10^{-4})^2 = 6.1748 \times 10^{-7}\text{ m}^2$$
$$t = \frac{6.1748 \times 10^{-7}\text{ m}^2}{1.6 \times 10^{-11}\text{ m}^2/\text{s}} = 38592.5\text{ seconds}$$
$$t_{\text{hours}} = \frac{38592.5}{3600} = \mathbf{10.72\text{ hours}}$$

**Part 2: Depth Scaling at Constant Temperature**
$$\frac{x_1^2}{t_1} = \frac{x_2^2}{t_2} \implies t_2 = t_1 \left(\frac{x_2}{x_1}\right)^2 = (10.72\text{ h}) \times \left(\frac{1.50\text{ mm}}{0.75\text{ mm}}\right)^2 = 10.72 \times (2)^2 = 10.72 \times 4 = \mathbf{42.88\text{ hours}}$$

---

## Chapter 5: Mechanical Properties of Metals

### 5.1 Engineering Stress, Strain, Modulus of Elasticity & Poisson's Ratio
$$\boxed{\sigma = \frac{F}{A_0} \qquad \epsilon_z = \frac{\Delta l}{l_0} \qquad E = \frac{\sigma}{\epsilon_z} \qquad \nu = -\frac{\epsilon_x}{\epsilon_z} \qquad G = \frac{E}{2(1 + \nu)}}$$

#### Past Exam Problem (Concordia Midterm)
A cylindrical titanium alloy rod ($d_0 = 10.0\text{ mm}$, $l_0 = 50.0\text{ mm}$, $E = 107\text{ GPa}$, $\nu = 0.34$) is pulled with an elastic tensile force of $F = 40.0\text{ kN}$. Calculate:
(a) Engineering stress $\sigma$ (in MPa), (b) Longitudinal extension $\Delta l$ (in mm), (c) Change in diameter $\Delta d$ (in mm), and (d) Shear modulus $G$ (in GPa).

#### Zero-Skip Step-by-Step Solution
**Step 1: Cross-Sectional Area and Stress**
$$A_0 = \frac{\pi d_0^2}{4} = \frac{\pi (10.0\text{ mm})^2}{4} = 25\pi\text{ mm}^2 = 78.5398\text{ mm}^2$$
$$\sigma = \frac{F}{A_0} = \frac{40000\text{ N}}{78.5398\text{ mm}^2} = \mathbf{509.30\text{ MPa}}$$

**Step 2: Elongation $\Delta l$**
$$\epsilon_z = \frac{\sigma}{E} = \frac{509.30\text{ MPa}}{107000\text{ MPa}} = 0.0047598$$
$$\Delta l = \epsilon_z \times l_0 = 0.0047598 \times 50.0\text{ mm} = \mathbf{0.238\text{ mm}}$$

**Step 3: Contraction in Diameter $\Delta d$**
$$\epsilon_x = -\nu \epsilon_z = -(0.34) \times (0.0047598) = -0.0016183$$
$$\Delta d = \epsilon_x \times d_0 = (-0.0016183) \times 10.0\text{ mm} = \mathbf{-0.0162\text{ mm}}$$

**Step 4: Shear Modulus $G$**
$$G = \frac{E}{2(1 + \nu)} = \frac{107\text{ GPa}}{2(1 + 0.34)} = \frac{107}{2.68} = \mathbf{39.93\text{ GPa}}$$

---

### 5.2 Ductility (%EL, %RA) & Modulus of Resilience ($U_r$)
$$\boxed{\%\text{EL} = \frac{l_f - l_0}{l_0} \times 100\% \qquad \%\text{RA} = \frac{A_0 - A_f}{A_0} \times 100\% \qquad U_r = \frac{\sigma_y^2}{2E}}$$

#### Past Exam Problem (Concordia Midterm)
A structural steel cylindrical specimen ($d_0 = 12.8\text{ mm}$, $l_0 = 50.8\text{ mm}$) has $\sigma_y = 450\text{ MPa}$ and $E = 207\text{ GPa}$. At fracture, $l_f = 67.2\text{ mm}$ and neck diameter $d_f = 8.5\text{ mm}$. Calculate (a) $U_r$ in $\text{kJ/m}^3$, (b) $\%\text{EL}$, and (c) $\%\text{RA}$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Modulus of Resilience $U_r$**
$$U_r = \frac{(450 \times 10^6\text{ Pa})^2}{2 \times (207 \times 10^9\text{ Pa})} = \frac{2.025 \times 10^{17}}{4.14 \times 10^{11}} = 489130\text{ J/m}^3 = \mathbf{489.1\text{ kJ/m}^3} = \mathbf{489.1\text{ kPa}}$$

**Step 2: Percent Elongation $\%\text{EL}$**
$$\%\text{EL} = \frac{67.2 - 50.8}{50.8} \times 100\% = \frac{16.4}{50.8} \times 100\% = \mathbf{32.28\%}$$

**Step 3: Percent Reduction in Area $\%\text{RA}$**
$$A_0 = \frac{\pi}{4}(12.8)^2 = 128.68\text{ mm}^2 \qquad A_f = \frac{\pi}{4}(8.5)^2 = 56.75\text{ mm}^2$$
$$\%\text{RA} = \frac{128.68 - 56.75}{128.68} \times 100\% = \frac{71.93}{128.68} \times 100\% = \mathbf{55.90\%}$$

---

### 5.3 True Stress, True Strain & Hollomon's Law
$$\boxed{\sigma_T = \sigma(1 + \epsilon) \qquad \epsilon_T = \ln(1 + \epsilon) \qquad \sigma_T = K \epsilon_T^n}$$

#### Past Exam Problem (Concordia Midterm)
Tensile plastic flow data for an annealed brass alloy prior to necking shows:
- Point 1: $\sigma_{T1} = 300\text{ MPa}$ at $\epsilon_{T1} = 0.10$
- Point 2: $\sigma_{T2} = 410\text{ MPa}$ at $\epsilon_{T2} = 0.25$
1. Determine the strain-hardening exponent $n$ and strength coefficient $K$ (in MPa).
2. Predict the true stress $\sigma_T$ required to produce a true strain of $\epsilon_T = 0.18$.
3. If an engineering strain of $\epsilon = 0.12$ is applied, determine the corresponding true stress $\sigma_T$.

#### Zero-Skip Step-by-Step Solution
**Step 1: Calculate $n$ and $K$**
$$n = \frac{\ln(\sigma_{T2} / \sigma_{T1})}{\ln(\epsilon_{T2} / \epsilon_{T1})} = \frac{\ln(410 / 300)}{\ln(0.25 / 0.10)} = \frac{\ln(1.36667)}{\ln(2.50)} = \frac{0.31238}{0.91629} = \mathbf{0.3409 \approx 0.341}$$
$$K = \frac{\sigma_{T1}}{\epsilon_{T1}^n} = \frac{300\text{ MPa}}{(0.10)^{0.3409}} = \frac{300}{0.45614} = \mathbf{657.7\text{ MPa}}$$

**Step 2: Predict True Stress at $\epsilon_T = 0.18$**
$$\sigma_T = 657.7 \times (0.18)^{0.3409} = 657.7 \times 0.55835 = \mathbf{367.23\text{ MPa}}$$

**Step 3: Convert Engineering Strain to True Strain & True Stress**
$$\epsilon_T = \ln(1 + 0.12) = \ln(1.12) = 0.11333$$
$$\sigma_T = 657.7 \times (0.11333)^{0.3409} = 657.7 \times 0.47648 = \mathbf{313.38\text{ MPa}}$$

> **Why This Method Works**: Hollomon's law models dislocation multiplication and entanglement during cold work. The slope of $\ln\sigma_T$ vs $\ln\epsilon_T$ is constant ($n$) throughout uniform plastic deformation.
>
> **Exam Trap**: Using Hollomon's equation beyond the ultimate tensile strength (necking). Once necking initiates, deformation is non-uniform and hydrostatic triaxial stress develops.

---

### 5.4 Factor of Safety & Safe Working Stress
$$\boxed{\sigma_w = \frac{\sigma_y}{N} \qquad A_{\text{min}} = \frac{F}{\sigma_w} = \frac{F \cdot N}{\sigma_y}}$$

#### Past Exam Problem (Concordia Midterm)
A structural tie-rod forged from heat-treated alloy steel (yield strength $\sigma_y = 750\text{ MPa}$) must safely support a static cyclic tensile load of $F = 65.0\text{ kN}$ ($65000\text{ N}$) with a design factor of safety of $N = 2.50$. Calculate (a) the maximum safe working stress $\sigma_w$, and (b) the minimum circular rod diameter $d_{\text{min}}$ in millimeters.

#### Zero-Skip Step-by-Step Solution
**Step 1: Calculate Safe Working Stress $\sigma_w$**
$$\sigma_w = \frac{\sigma_y}{N} = \frac{750\text{ MPa}}{2.50} = \mathbf{300.0\text{ MPa}} = 300.0\text{ N/mm}^2$$

**Step 2: Calculate Minimum Cross-Sectional Area $A_{\text{min}}$**
$$A_{\text{min}} = \frac{F}{\sigma_w} = \frac{65000\text{ N}}{300.0\text{ N/mm}^2} = 216.667\text{ mm}^2$$

**Step 3: Calculate Minimum Rod Diameter $d_{\text{min}}$**
$$A = \frac{\pi d^2}{4} \implies d_{\text{min}} = \sqrt{\frac{4 A_{\text{min}}}{\pi}} = \sqrt{\frac{4 \times 216.667\text{ mm}^2}{\pi}} = \sqrt{\frac{866.667}{3.14159}} = \sqrt{275.869} = \mathbf{16.61\text{ mm}}$$
*(A standard nominal rod diameter of $\ge 17.0\text{ mm}$ must be specified).*
