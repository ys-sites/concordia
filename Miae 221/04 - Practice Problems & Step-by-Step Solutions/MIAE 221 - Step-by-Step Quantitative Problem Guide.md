# MIAE 221: Materials Science for Engineers
# Master Step-by-Step Quantitative Problem Guide
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)**  
**Standard**: Universal Step-by-Step Expansion Method (Practice Problems, Crystallography & Midterm Prep)

---

## 📖 The Step-by-Step Expansion Methodology
Following the universal standard established in `exact_ode_step_by_step.pdf`:
1. **Explicit Step Breakdown**: Every phase is numbered (`Step 1`, `Step 2`, `Step 3`...).
2. **Theory Before Calculation**: The governing physical law, formula, or geometric theorem is defined before substituting values.
3. **Zero Skipped Calculations**: All unit conversions, exponents, and intermediate products are fully displayed.
4. **"Pattern to Remember" Algorithm**: Every problem ends with an algorithmic checklist to reproduce during exams.

---

## Table of Contents
### Foundations & Bonding (Lectures 1–3)
- [Problem 1: Percent Ionic Character Calculation (Pauling Formula)](#problem-1-percent-ionic-character-calculation-pauling-formula)
- [Problem 2: Equilibrium Interionic Spacing and Bonding Energy](#problem-2-equilibrium-interionic-spacing-and-bonding-energy)
- [Problem 3: Coulombic Electrostatic Force Balance Between Ions](#problem-3-coulombic-electrostatic-force-balance-between-ions)
- [Problem 4: Wire Geometry to Microscopic Atom Count Stoichiometry](#problem-4-wire-geometry-to-microscopic-atom-count-stoichiometry)

### Crystal Lattices & Crystallography (Lectures 4–5)
- [Problem 5: Face-Centered Cubic (FCC) Lattice Parameter & APF Derivation](#problem-5-face-centered-cubic-fcc-lattice-parameter--apf-derivation)
- [Problem 6: Body-Centered Cubic (BCC) Lattice Parameter & APF Derivation](#problem-6-body-centered-cubic-bcc-lattice-parameter--apf-derivation)
- [Problem 7: Theoretical Density Computation of FCC Copper](#problem-7-theoretical-density-computation-of-fcc-copper)
- [Problem 8: Crystallographic Direction Miller Indices [uvw]](#problem-8-crystallographic-direction-miller-indices-uvw)
- [Problem 9: Crystallographic Plane Miller Indices (hkl)](#problem-9-crystallographic-plane-miller-indices-hkl)

### Atomic Densities, XRD & Phase Changes (Lecture 6)
- [Problem 10: Linear Density of Crystallographic Directions (FCC [100], [110] & BCC [111])](#problem-10-linear-density-of-crystallographic-directions)
- [Problem 11: Planar Density of Crystallographic Planes (FCC (110), (111) & BCC (110))](#problem-11-planar-density-of-crystallographic-planes)
- [Problem 12: X-Ray Diffraction, Interplanar Spacing & Bragg's Law](#problem-12-x-ray-diffraction-interplanar-spacing--braggs-law)
- [Problem 13: Allotropic / Polymorphic Volume Change (BCC ↔ FCC Iron Transformation)](#problem-13-allotropic--polymorphic-volume-change)

### Defects, Solid Solutions & Dislocations (Lecture 7)
- [Problem 14: Equilibrium Vacancy Concentration & Arrhenius Activation Energy](#problem-14-equilibrium-vacancy-concentration--arrhenius-activation-energy)
- [Problem 15: Hume-Rothery Quantitative Solid Solubility Evaluation](#problem-15-hume-rothery-quantitative-solid-solubility-evaluation)
- [Problem 16: Composition Conversions Between Weight Percent (wt%) and Atom Percent (at%)](#problem-16-composition-conversions-between-weight-percent-and-atom-percent)
- [Problem 17: Dislocation Burgers Vector Magnitude in FCC and BCC Slip Systems](#problem-17-dislocation-burgers-vector-magnitude-in-fcc-and-bcc-slip-systems)

---

## Problem 1: Percent Ionic Character Calculation (Pauling Formula)

### Problem Statement
Calculate the percent ionic character and percent covalent character of the chemical bond in Titanium Dioxide ($\text{TiO}_2$).  
*Given Pauling electronegativity values*: $X_{Ti} = 1.5, \; X_O = 3.5$.

### Step 1: Identify electronegativities and state Pauling's formula
The degree of ionic character between two bonded elements $A$ and $B$ is quantified by Pauling's empirical equation:
$$\% \text{ Ionic Character} = \left[ 1 - \exp\left( -0.25 (X_A - X_B)^2 \right) \right] \times 100\%$$
where $X_A$ and $X_B$ are the respective Pauling electronegativities.

### Step 2: Compute the absolute electronegativity difference $\Delta X$
$$\Delta X = |X_O - X_{Ti}| = |3.5 - 1.5| = 2.0$$

### Step 3: Compute the squared difference and the exponent
$$(\Delta X)^2 = (2.0)^2 = 4.0$$
$$\text{Exponent} = -0.25 \times (\Delta X)^2 = -0.25 \times 4.0 = -1.0$$

### Step 4: Evaluate the exponential term
$$\exp(-1.0) = e^{-1} \approx 0.36788$$

### Step 5: Calculate the percent ionic and covalent character
$$\% \text{ Ionic Character} = [1 - 0.36788] \times 100\% = 0.63212 \times 100\% = \mathbf{63.2\%}$$
Since total primary bonding character sums to $100\%$:
$$\% \text{ Covalent Character} = 100\% - 63.2\% = \mathbf{36.8\%}$$
**Conclusion**: $\text{TiO}_2$ possesses a mixed bond that is predominantly **ionic**.

### 📌 Pauling Ionic Character Pattern to Remember
1. Look up electronegativities $X_A$ and $X_B$.
2. Compute $\Delta X = |X_A - X_B|$.
3. Calculate the exponent $-0.25(\Delta X)^2$.
4. Evaluate $\% \text{Ionic} = [1 - e^{-0.25(\Delta X)^2}] \times 100\%$.
5. Deduce $\% \text{Covalent} = 100\% - \% \text{Ionic}$.

---

## Problem 2: Equilibrium Interionic Spacing and Bonding Energy

### Problem Statement
*(Practice Problem Set #1 · Question 3)*  
For a potassium-chloride ($K^+ - Cl^-$) ion pair, the attractive and repulsive potential energies vary with interionic separation $r$ according to:
$$E_A(r) = -\frac{1.436}{r} \quad (\text{eV}), \qquad E_R(r) = \frac{5.8 \times 10^{-6}}{r^9} \quad (\text{eV})$$
where $r$ is expressed in nanometers ($\text{nm}$).  
(a) Determine the equilibrium interionic separation $r_0$.  
(b) Determine the equilibrium bonding energy $E_0$.

### Step 1: State the equilibrium thermodynamic condition
The net potential energy is the sum of attractive and repulsive energies:
$$E_N(r) = E_A(r) + E_R(r) = -1.436 r^{-1} + 5.8 \times 10^{-6} r^{-9}$$
At the equilibrium distance $r_0$, the net interatomic force is zero ($F_N = -dE_N/dr = 0$). Therefore, the potential energy is at a minimum:
$$\left.\frac{dE_N}{dr}\right|_{r = r_0} = 0$$

### Step 2: Differentiate $E_N(r)$ with respect to $r$
$$\frac{dE_N}{dr} = \frac{d}{dr}\left[-1.436 r^{-1} + 5.8 \times 10^{-6} r^{-9}\right]$$
$$= (-1.436)(-1) r^{-2} + (5.8 \times 10^{-6})(-9) r^{-10}$$
$$\frac{dE_N}{dr} = \frac{1.436}{r^2} - \frac{5.22 \times 10^{-5}}{r^{10}}$$

### Step 3: Set the derivative equal to zero at $r = r_0$
$$\frac{1.436}{r_0^2} - \frac{5.22 \times 10^{-5}}{r_0^{10}} = 0 \implies \frac{1.436}{r_0^2} = \frac{5.22 \times 10^{-5}}{r_0^{10}}$$

### Step 4: Isolate and solve for $r_0$
Multiply both sides by $r_0^{10}$:
$$1.436 \, r_0^8 = 5.22 \times 10^{-5}$$
Divide by 1.436:
$$r_0^8 = \frac{5.22 \times 10^{-5}}{1.436} = 3.6351 \times 10^{-5}$$
Take the 8th root:
$$r_0 = (3.6351 \times 10^{-5})^{1/8} = \mathbf{0.2789\text{ nm}} \approx \mathbf{0.279\text{ nm}} \quad (2.79\text{ \AA})$$

### Step 5: Substitute $r_0$ into $E_N(r)$ to find the bonding energy $E_0$
$$E_0 = E_N(r_0) = -\frac{1.436}{0.2789} + \frac{5.8 \times 10^{-6}}{(0.2789)^9}$$
* Attractive term: $-\frac{1.436}{0.2789} = -5.1488\text{ eV}$
* Repulsive term: $\frac{5.8 \times 10^{-6}}{(0.2789)^9} = \frac{5.8 \times 10^{-6}}{1.0138 \times 10^{-5}} = +0.5721\text{ eV}$
Sum:
$$E_0 = -5.1488 + 0.5721 = \mathbf{-4.577\text{ eV}} \approx \mathbf{-4.58\text{ eV}}$$

### 📌 Potential Well Pattern to Remember
1. Formulate $E_N(r) = -A r^{-1} + B r^{-n}$.
2. Differentiate: $\frac{dE_N}{dr} = A r^{-2} - n B r^{-(n+1)}$.
3. Set equal to 0 at $r_0$ and isolate $r_0^{n-1} = \frac{n B}{A}$.
4. Solve for $r_0 = \left(\frac{n B}{A}\right)^{1/(n-1)}$.
5. Plug $r_0$ back into $E_N(r_0)$ to find bonding energy $E_0$.

---

## Problem 3: Coulombic Electrostatic Force Balance Between Ions

### Problem Statement
*(Practice Problem Set #1 · Question 4)*  
Calculate the electrostatic attractive force and repulsive force between a $K^+$ ion ($z_1 = +1$) and an $O^{2-}$ ion ($z_2 = -2$) at an equilibrium spacing of $r = 1.5\text{ nm}$.

### Step 1: State Coulomb's electrostatic force law
$$F_A = \frac{|z_1| |z_2| e^2}{4\pi \varepsilon_0 r^2}$$

### Step 2: List all physical constants and parameters in SI units
* Electronic charge: $e = 1.602 \times 10^{-19}\text{ C}$
* Permittivity of free space: $\varepsilon_0 = 8.854 \times 10^{-12}\text{ C}^2/(\text{N}\cdot\text{m}^2)$
* Valence magnitudes: $|z_1| = 1$, $|z_2| = 2 \implies |z_1 z_2| = 2$
* Distance: $r = 1.5\text{ nm} = 1.5 \times 10^{-9}\text{ m}$

### Step 3: Compute numerator and denominator separately
* Numerator:
  $$|z_1 z_2| e^2 = 2 \times (1.602 \times 10^{-19})^2 = 2 \times 2.5664 \times 10^{-38} = 5.1328 \times 10^{-38}\text{ C}^2$$
* Denominator:
  $$4\pi \varepsilon_0 r^2 = 4\pi \times (8.854 \times 10^{-12}) \times (1.5 \times 10^{-9})^2$$
  $$= 1.11265 \times 10^{-10} \times 2.25 \times 10^{-18} = 2.5035 \times 10^{-28}\text{ N}\cdot\text{m}^2$$

### Step 4: Compute the attractive force magnitude
$$F_A = \frac{5.1328 \times 10^{-38}}{2.5035 \times 10^{-28}} = \mathbf{2.05 \times 10^{-10}\text{ N}} \quad (\mathbf{0.205\text{ nN}})$$

### Step 5: Apply the equilibrium force balance condition
At the equilibrium distance $r_0$, the net force must be zero:
$$F_N = F_A + F_R = 0 \implies F_R = -F_A$$
Since attraction pulls inward ($F_A = 2.05 \times 10^{-10}\text{ N}$), repulsion pushes outward with equal magnitude:
$$F_R = \mathbf{+2.05 \times 10^{-10}\text{ N}} \quad (\mathbf{+0.205\text{ nN}})$$

### 📌 Coulomb Force Pattern to Remember
1. Convert distance $r$ from $\text{nm}$ to meters ($1\text{ nm} = 10^{-9}\text{ m}$).
2. Use $F_A = \frac{|z_1 z_2| e^2}{4\pi\varepsilon_0 r^2}$.
3. At equilibrium, $F_R = -F_A$ (equal magnitude, opposite sign).

---

## Problem 4: Wire Geometry to Microscopic Atom Count Stoichiometry

### Problem Statement
*(Practice Problem Set #1 · Question 5a)*  
Calculate the total number of gold ($\text{Au}$) atoms in a cylindrical gold wire with diameter $d = 0.70\text{ mm}$ and length $L = 8.0\text{ cm}$.  
*Given*: Density of gold $\rho = 19.3\text{ g/cm}^3$, atomic mass $A_{Au} = 196.97\text{ g/mol}$, Avogadro's number $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$.

### Step 1: Convert all dimensions to centimeters ($\text{cm}$)
* Diameter: $d = 0.70\text{ mm} = \frac{0.70}{10}\text{ cm} = 0.070\text{ cm}$
* Radius: $R = \frac{d}{2} = 0.035\text{ cm}$
* Length: $L = 8.0\text{ cm}$

### Step 2: Compute geometric cross-sectional area and volume
* Area: $A_{cross} = \pi R^2 = \pi (0.035\text{ cm})^2 = 3.8485 \times 10^{-3}\text{ cm}^2$
* Volume: $V = A_{cross} \times L = (3.8485 \times 10^{-3}\text{ cm}^2) \times 8.0\text{ cm} = 0.030788\text{ cm}^3$

### Step 3: Compute total mass from density
$$m = \rho \times V = 19.3\frac{\text{g}}{\text{cm}^3} \times 0.030788\text{ cm}^3 = 0.59421\text{ g}$$

### Step 4: Compute number of moles
$$n_{mol} = \frac{m}{A_{Au}} = \frac{0.59421\text{ g}}{196.97\text{ g/mol}} = 3.0167 \times 10^{-3}\text{ mol}$$

### Step 5: Compute total number of atoms
$$N = n_{mol} \times N_A = (3.0167 \times 10^{-3}\text{ mol}) \times (6.022 \times 10^{23}\text{ atoms/mol})$$
$$\mathbf{N = 1.82 \times 10^{21}\text{ atoms}}$$

### 📌 Macro-to-Micro Pattern to Remember
1. Convert all lengths to $\text{cm}$ to match density units ($\text{g/cm}^3$).
2. Compute volume $V = \frac{\pi}{4}d^2 L$.
3. Compute mass $m = \rho V$.
4. Compute atoms $N = \frac{m}{A} \times N_A$.

---

## Problem 5: Face-Centered Cubic (FCC) Lattice Parameter & APF Derivation

### Problem Statement
Prove from first geometric principles that the Atomic Packing Factor (APF) of a Face-Centered Cubic (FCC) metallic crystal is $\frac{\pi\sqrt{2}}{6} \approx 0.74$.

### Step 1: Count the number of atoms per unit cell ($n$)
* 8 corner atoms, each shared among 8 adjacent unit cells: $8 \times \frac{1}{8} = 1$ atom.
* 6 face-centered atoms, each shared between 2 adjacent unit cells: $6 \times \frac{1}{2} = 3$ atoms.
* Total atoms per unit cell:
  $$n = 1 + 3 = 4\text{ atoms/cell}$$

### Step 2: Identify the close-packed direction and touching geometry
In FCC, atoms touch along the **face diagonals** of the cube (the family $\langle 110 \rangle$).
Across any cube face of side length $a$, the face diagonal contains:
* 1 radius from one corner atom: $R$
* 1 full diameter from the central face atom: $2R$
* 1 radius from the opposite corner atom: $R$
Total diagonal length:
$$\text{Diagonal} = R + 2R + R = 4R$$

### Step 3: Relate lattice parameter $a$ to atomic radius $R$ via the Pythagorean Theorem
For a right triangle on the cube face with legs $a$ and $a$:
$$a^2 + a^2 = (4R)^2 \implies 2a^2 = 16R^2 \implies a^2 = 8R^2$$
Taking the square root:
$$\mathbf{a = \sqrt{8}R = 2\sqrt{2}R}$$

### Step 4: Calculate the volume of the unit cell ($V_c$)
$$V_c = a^3 = (2\sqrt{2}R)^3 = 2^3 \times (\sqrt{2})^3 \times R^3 = 8 \times 2\sqrt{2} \times R^3 = \mathbf{16\sqrt{2} R^3}$$

### Step 5: Calculate the total volume of atoms inside the unit cell ($V_s$)
Assuming hard spheres of radius $R$:
$$V_s = n \times \left(\frac{4}{3}\pi R^3\right) = 4 \times \frac{4}{3}\pi R^3 = \mathbf{\frac{16}{3}\pi R^3}$$

### Step 6: Compute the Atomic Packing Factor (APF)
$$\text{APF} = \frac{V_s}{V_c} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2} R^3} = \frac{16\pi}{3 \times 16\sqrt{2}} = \frac{\pi}{3\sqrt{2}}$$
Rationalize the denominator:
$$\text{APF} = \frac{\pi\sqrt{2}}{3 \times 2} = \mathbf{\frac{\pi\sqrt{2}}{6} \approx 0.7405 \implies 0.74 \quad (74\%)} \quad \blacksquare$$

---

## Problem 6: Body-Centered Cubic (BCC) Lattice Parameter & APF Derivation

### Problem Statement
Prove that for a Body-Centered Cubic (BCC) unit cell, $a = \frac{4R}{\sqrt{3}}$ and $\text{APF} = \frac{\pi\sqrt{3}}{8} \approx 0.68$.

### Step 1: Count the number of atoms per unit cell ($n$)
* 8 corner atoms: $8 \times \frac{1}{8} = 1$ atom.
* 1 central atom inside the body: $1 \times 1 = 1$ atom.
* Total atoms per unit cell:
  $$n = 1 + 1 = 2\text{ atoms/cell}$$

### Step 2: Identify the close-packed direction
In BCC, atoms touch along the **body diagonals** of the cube (family $\langle 111 \rangle$).
Along the 3D body diagonal:
$$\text{Body Diagonal} = R + 2R + R = 4R$$

### Step 3: Relate $a$ to $R$ using 3D Pythagorean Theorem
The body diagonal of a cube with edge $a$ satisfies:
$$a^2 + a^2 + a^2 = (4R)^2 \implies 3a^2 = 16R^2 \implies a\sqrt{3} = 4R$$
$$\mathbf{a = \frac{4R}{\sqrt{3}}}$$

### Step 4: Calculate unit cell volume ($V_c$)
$$V_c = a^3 = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64R^3}{3\sqrt{3}}$$

### Step 5: Calculate atomic volume ($V_s$)
$$V_s = n \times \left(\frac{4}{3}\pi R^3\right) = 2 \times \frac{4}{3}\pi R^3 = \frac{8}{3}\pi R^3$$

### Step 6: Compute APF
$$\text{APF} = \frac{V_s}{V_c} = \frac{\frac{8}{3}\pi R^3}{\frac{64}{3\sqrt{3}}R^3} = \frac{8\pi}{3} \times \frac{3\sqrt{3}}{64} = \mathbf{\frac{\pi\sqrt{3}}{8} \approx 0.6802 \implies 0.68 \quad (68\%)} \quad \blacksquare$$

---

## Problem 7: Theoretical Density Computation of FCC Copper

### Problem Statement
*(Lecture 5 · Example Problem)*  
Calculate the theoretical density of copper ($\text{Cu}$), given:  
* Atomic radius: $R = 0.128\text{ nm}$  
* Crystal structure: Face-Centered Cubic ($\text{FCC}$)  
* Atomic mass: $A_{Cu} = 63.55\text{ g/mol}$  
* Avogadro's number: $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$

### Step 1: Identify parameters from crystal structure
For FCC:
* Number of atoms per unit cell: $n = 4$
* Lattice parameter relation: $a = 2\sqrt{2}R$

### Step 2: Calculate lattice parameter $a$ in centimeters ($\text{cm}$)
$$a = 2\sqrt{2}(0.128\text{ nm}) = 2.8284 \times 0.128\text{ nm} = 0.36204\text{ nm}$$
Convert from $\text{nm}$ to $\text{cm}$ ($1\text{ nm} = 10^{-7}\text{ cm}$):
$$a = 0.36204 \times 10^{-7}\text{ cm} = 3.6204 \times 10^{-8}\text{ cm}$$

### Step 3: Calculate unit cell volume $V_c$ in $\text{cm}^3$
$$V_c = a^3 = (3.6204 \times 10^{-8}\text{ cm})^3 = 4.7454 \times 10^{-23}\text{ cm}^3$$

### Step 4: State the theoretical density formula
$$\rho = \frac{n \cdot A}{V_c \cdot N_A}$$

### Step 5: Substitute all values and compute $\rho$
* Mass of unit cell:
  $$n \cdot A = 4 \times 63.55\text{ g/mol} = 254.2\text{ g/mol}$$
* Denominator ($V_c \cdot N_A$):
  $$V_c \cdot N_A = (4.7454 \times 10^{-23}\text{ cm}^3) \times (6.022 \times 10^{23}\text{ mol}^{-1}) = 28.577\text{ cm}^3/\text{mol}$$
* Density:
  $$\rho = \frac{254.2}{28.577} = \mathbf{8.895\text{ g/cm}^3} \approx \mathbf{8.90\text{ g/cm}^3}$$
*(This theoretical value closely matches the experimental literature density of Copper: $8.94\text{ g/cm}^3$, confirming accuracy).*

---

## Problem 8: Crystallographic Direction Miller Indices $[uvw]$

### Problem Statement
Determine the Miller indices for the direction vector starting at coordinates $(0, 0, 1)$ and terminating at coordinates $(1, 1, 0)$.

### Step 1: Identify coordinates of Tail and Head
* **Tail**: $(x_1, y_1, z_1) = (0, 0, 1)$
* **Head**: $(x_2, y_2, z_2) = (1, 1, 0)$

### Step 2: Compute Head minus Tail differences
$$\Delta x = x_2 - x_1 = 1 - 0 = 1$$
$$\Delta y = y_2 - y_1 = 1 - 0 = 1$$
$$\Delta z = z_2 - z_1 = 0 - 1 = -1$$

### Step 3: Clear fractions and reduce to smallest integers
The vector components are already integers: $(1, 1, -1)$.

### Step 4: Format with square brackets and overbars
Enclose in square brackets with no commas; replace $-1$ with an overbar $\bar{1}$:
$$\mathbf{[11\bar{1}]}$$

---

## Problem 9: Crystallographic Plane Miller Indices $(hkl)$

### Problem Statement
Determine the Miller indices $(hkl)$ of a crystallographic plane that intersects the $x$-axis at $x = a$, the $y$-axis at $y = \frac{2}{3}b$, and is parallel to the $z$-axis.

### Step 1: Origin check
The plane does not pass through the coordinate origin $(0,0,0)$. No origin shift is required.

### Step 2: Determine axial intercepts in units of $a, b, c$
* $x$-intercept: $1$
* $y$-intercept: $\frac{2}{3}$
* $z$-intercept: $\infty$ (since the plane is parallel to the $z$-axis)

### Step 3: Take reciprocals of the intercepts
* $h = \frac{1}{1} = 1$
* $k = \frac{1}{2/3} = \frac{3}{2}$
* $l = \frac{1}{\infty} = 0$

### Step 4: Clear fractions by multiplying by the lowest common denominator
Multiply all three terms by $2$:
* $h = 1 \times 2 = 2$
* $k = \frac{3}{2} \times 2 = 3$
* $l = 0 \times 2 = 0$

### Step 5: Enclose in parentheses
$$\mathbf{(230)}$$
*(The family of all symmetrically equivalent planes in cubic crystals is denoted with braces: $\mathbf{\{230\}}$).*

---

## Problem 10: Linear Density of Crystallographic Directions

### Problem Statement
*(Lecture 6 · Slide 4 & Callister §3.11)*  
(a) Derive the expression for the **Linear Density** ($LD$) of the $[100]$ direction in an FCC unit cell in terms of the atomic radius $R$.  
(b) Calculate the numerical linear density for Copper ($R = 0.128\text{ nm}$).  
(c) Derive $LD$ for the close-packed $[110]$ direction in FCC and demonstrate that it attains the theoretical maximum packing of $LD = \dfrac{1}{2R}$.

---

### Part (a): Linear Density of $[100]$ in FCC

#### Step 1: State the governing equation for Linear Density
$$\text{LD} = \frac{\text{Number of atomic diameters along direction vector inside unit cell}}{\text{Length of the direction vector inside unit cell}} = \frac{n}{L_L}$$

#### Step 2: Count atoms centered on the $[100]$ vector segment
The $[100]$ direction vector runs along the bottom edge of the cubic unit cell from $(0,0,0)$ to $(1,0,0)$.
* It passes through two corner atoms.
* Each corner atom is centered at the vertex, contributing only $\frac{1}{2}$ of an atom to this line segment:
$$n = 2 \times \frac{1}{2} = \mathbf{1\text{ atom}}$$

#### Step 3: Determine the line length $L_L$
The vector length is equal to one lattice parameter $a$. For FCC, atoms touch along the face diagonal ($a\sqrt{2} = 4R$):
$$L_L = a = 2\sqrt{2}R$$

#### Step 4: Compute Linear Density
$$\text{LD}_{[100]} = \frac{n}{L_L} = \frac{1}{2\sqrt{2}R} = \frac{\sqrt{2}}{4R} \approx \mathbf{\frac{0.3536}{R}}$$

---

### Part (b): Numerical calculation for Copper
Given $R_{\text{Cu}} = 0.128\text{ nm} = 0.128 \times 10^{-9}\text{ m}$:
$$\text{LD}_{[100]} = \frac{1}{2\sqrt{2}(0.128\text{ nm})} = \frac{1}{0.36204\text{ nm}} = \mathbf{2.762\text{ atoms/nm}} = \mathbf{2.762 \times 10^9\text{ atoms/m}}$$

---

### Part (c): Linear Density of Close-Packed $[110]$ in FCC
* The $[110]$ vector runs diagonally across the cube face from $(0,0,0)$ to $(1,1,0)$.
* It passes through two corner atoms (each contributing $\frac{1}{2}$) and one full face-centered atom:
  $$n = 2 \left(\frac{1}{2}\right) + 1 = \mathbf{2\text{ atoms}}$$
* The length of the face diagonal is:
  $$L_L = a\sqrt{2} = (2\sqrt{2}R)\sqrt{2} = 4R$$
* Therefore:
  $$\text{LD}_{[110]} = \frac{2}{4R} = \mathbf{\frac{1}{2R}}$$
* For Copper:
  $$\text{LD}_{[110]} = \frac{1}{2(0.128\text{ nm})} = \mathbf{3.906\text{ atoms/nm}} = \mathbf{3.906 \times 10^9\text{ atoms/m}}$$
* *Significance*: Since atoms touch continuously along $[110]$ ($2R$ per atom), this is the close-packed direction where linear density is maximized!

---

## Problem 11: Planar Density of Crystallographic Planes

### Problem Statement
*(Lecture 6 · Slide 6 & Callister §3.11)*  
(a) Derive the **Planar Density** ($PD$) of the $(110)$ plane in an FCC crystal in terms of $R$.  
(b) Derive the Planar Density of the close-packed $(111)$ plane in an FCC crystal.  
(c) For Aluminum ($R = 0.143\text{ nm}$), compute the numerical planar density of $(111)$ in $\text{atoms/nm}^2$.

---

### Part (a): Planar Density of FCC $(110)$

#### Step 1: State the governing equation for Planar Density
$$\text{PD} = \frac{\text{Number of atoms centered on plane inside unit cell}}{\text{Area of the plane inside unit cell}} = \frac{n_P}{A_P}$$

#### Step 2: Count atoms centered on the $(110)$ plane
The $(110)$ plane cuts diagonally through the FCC cube, forming a rectangle of dimensions $a \times a\sqrt{2}$.
* 4 corner atoms: each shared by 4 adjacent unit cells on this plane $\to 4 \times \frac{1}{4} = 1$ atom.
* 2 face-centered atoms (top and bottom faces): cut in half by this plane $\to 2 \times \frac{1}{2} = 1$ atom.
* Total atoms centered on the plane:
$$n_P = 4\left(\frac{1}{4}\right) + 2\left(\frac{1}{2}\right) = 1 + 1 = \mathbf{2\text{ atoms}}$$

#### Step 3: Calculate the area of the $(110)$ rectangle
$$A_P = a \times a\sqrt{2} = \sqrt{2}\,a^2$$
Substitute $a = 2\sqrt{2}R$:
$$A_P = \sqrt{2}\,(2\sqrt{2}R)^2 = \sqrt{2}\,(8R^2) = 8\sqrt{2}\,R^2$$

#### Step 4: Compute Planar Density
$$\text{PD}_{(110)} = \frac{2}{8\sqrt{2}\,R^2} = \frac{1}{4\sqrt{2}\,R^2} = \frac{\sqrt{2}}{8R^2} \approx \mathbf{\frac{0.1768}{R^2}}$$

---

### Part (b): Planar Density of Close-Packed FCC $(111)$
* The $(111)$ plane passes through three face diagonals, forming an **equilateral triangle** with side length $s = a\sqrt{2} = 4R$.
* Atom count on the $(111)$ triangle:
  * 3 corner atoms, each interior angle is $60^\circ$ (contributes $\frac{60^\circ}{360^\circ} = \frac{1}{6}$): $3 \times \frac{1}{6} = \frac{1}{2}$.
  * 3 face-center atoms along the edges, each shared between 2 adjacent unit cell planes (contributes $\frac{1}{2}$): $3 \times \frac{1}{2} = \frac{3}{2}$.
  * Total atoms:
    $$n_P = \frac{1}{2} + \frac{3}{2} = \mathbf{2\text{ atoms}}$$
* Area of the equilateral triangle:
  $$A_P = \frac{\sqrt{3}}{4} s^2 = \frac{\sqrt{3}}{4} (4R)^2 = 4\sqrt{3}\,R^2$$
* Planar Density:
  $$\text{PD}_{(111)} = \frac{2}{4\sqrt{3}\,R^2} = \mathbf{\frac{1}{2\sqrt{3}\,R^2}} = \mathbf{\frac{\sqrt{3}}{6R^2}} \approx \mathbf{\frac{0.2887}{R^2}}$$

---

### Part (c): Numerical calculation for Aluminum
Given $R_{\text{Al}} = 0.143\text{ nm}$:
$$\text{PD}_{(111)} = \frac{1}{2\sqrt{3}\,(0.143\text{ nm})^2} = \frac{1}{3.4641 \times 0.020449} = \frac{1}{0.070838\text{ nm}^2} = \mathbf{14.12\text{ atoms/nm}^2} = \mathbf{1.412 \times 10^{19}\text{ atoms/m}^2}$$

---

## Problem 12: X-Ray Diffraction, Interplanar Spacing & Bragg's Law

### Problem Statement
*(Lecture 6 · Slide 14–17 & Callister §3.16)*  
Diffraction angles are measured for FCC Copper ($a = 0.3615\text{ nm}$) using monochromatic X-radiation with wavelength $\lambda = 0.1542\text{ nm}$ ($\text{Cu } K_\alpha$).  
(a) Calculate the interplanar spacing $d_{hkl}$ for the $(111)$ and $(200)$ planes.  
(b) Determine the diffraction angle ($2\theta$) for first-order ($n=1$) reflection from the $(111)$ plane.  
(c) State the diffraction selection rules for FCC and BCC crystals.

---

### Step 1: Calculate interplanar spacing $d_{hkl}$
For cubic crystal systems:
$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

* For $(111)$ plane:
  $$d_{111} = \frac{0.3615}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{0.3615}{\sqrt{3}} = \frac{0.3615}{1.73205} = \mathbf{0.2087\text{ nm}} \quad (2.087\text{ \AA})$$

* For $(200)$ plane:
  $$d_{200} = \frac{0.3615}{\sqrt{2^2 + 0^2 + 0^2}} = \frac{0.3615}{\sqrt{4}} = \frac{0.3615}{2} = \mathbf{0.1808\text{ nm}} \quad (1.808\text{ \AA})$$

---

### Step 2: Apply Bragg's Law to find $\theta$ and $2\theta$
Bragg's Law governs constructive interference of X-rays:
$$n\lambda = 2 d_{hkl} \sin\theta$$

For first-order diffraction ($n = 1$):
$$\sin\theta = \frac{n\lambda}{2 d_{111}} = \frac{1 \times 0.1542\text{ nm}}{2 \times 0.2087\text{ nm}} = \frac{0.1542}{0.4174} = 0.36943$$

Take the inverse sine:
$$\theta = \arcsin(0.36943) = \mathbf{21.68^\circ}$$

The detector angle recorded on a diffractometer is $2\theta$:
$$\mathbf{2\theta = 2 \times 21.68^\circ = 43.36^\circ}$$

---

### Step 3: Diffraction Reflection Selection Rules
Not all planes produce diffraction peaks due to destructive interference of waves scattered by interior atoms:

| Crystal System | Allowed Reflection Rule | First 6 Diffraction Peaks (Lowest to Highest $2\theta$) |
| :---: | :--- | :--- |
| **BCC** | $h + k + l = \text{even integer}$ | $(110), (200), (211), (220), (310), (222)$ |
| **FCC** | $h, k, l$ must be **all odd** OR **all even** | $(111), (200), (220), (311), (222), (400)$ |

*(Notice that for FCC, $(111)$ is the first peak because $1,1,1$ are all odd; $(200)$ is second because $2,0,0$ are all even; $(100)$ is forbidden because $1,0,0$ is mixed).*

---

## Problem 13: Allotropic / Polymorphic Volume Change

### Problem Statement
*(Lecture 6 · Slide 11 & Callister §3.10)*  
Pure Iron undergoes an allotropic phase transformation upon heating through $912^\circ\text{C}$ from $\alpha$-iron (BCC, $a_{\alpha} = 0.2866\text{ nm}$) to $\gamma$-iron (FCC, $a_{\gamma} = 0.3571\text{ nm}$).  
Calculate the percentage volume change ($\Delta V / V_{\alpha} \times 100\%$) that accompanies this transformation. State whether iron expands or contracts upon heating through $912^\circ\text{C}$.

---

### Step 1: Relate crystal volume to atomic volume
Mass is conserved during phase transformation. Therefore, the volume comparison must be made **per individual atom** (or per mole):
$$V_{\text{atom}} = \frac{V_{\text{unit cell}}}{n_{\text{atoms/cell}}} = \frac{a^3}{n}$$

---

### Step 2: Compute volume per atom in $\alpha$-iron (BCC)
In BCC, $n = 2$ atoms/cell:
$$V_{\text{cell, }\alpha} = a_{\alpha}^3 = (0.2866\text{ nm})^3 = 0.023542\text{ nm}^3$$
$$V_{\text{atom, }\alpha} = \frac{0.023542\text{ nm}^3}{2} = \mathbf{0.011771\text{ nm}^3/\text{atom}}$$

---

### Step 3: Compute volume per atom in $\gamma$-iron (FCC)
In FCC, $n = 4$ atoms/cell:
$$V_{\text{cell, }\gamma} = a_{\gamma}^3 = (0.3571\text{ nm})^3 = 0.045538\text{ nm}^3$$
$$V_{\text{atom, }\gamma} = \frac{0.045538\text{ nm}^3}{4} = \mathbf{0.011385\text{ nm}^3/\text{atom}}$$

---

### Step 4: Calculate percentage volume change
$$\% \Delta V = \frac{V_{\text{atom, }\gamma} - V_{\text{atom, }\alpha}}{V_{\text{atom, }\alpha}} \times 100\%$$
$$\% \Delta V = \frac{0.011385 - 0.011771}{0.011771} \times 100\% = \frac{-0.000386}{0.011771} \times 100\% = \mathbf{-3.28\%}$$
*(Using high-temperature thermal dilation values at exactly $912^\circ\text{C}$, $a_\alpha = 0.2892\text{ nm}$ and $a_\gamma = 0.3643\text{ nm}$, yielding $\approx -1.2\%$).*

#### Physical Conclusion:
**Iron CONTRACTS upon heating from BCC to FCC!**  
*Physical Reason*: FCC has an atomic packing factor of $\text{APF} = 0.74$, whereas BCC has $\text{APF} = 0.68$. Transforming into a closer-packed structure packs the atoms more tightly, causing a net volumetric shrinkage despite the increase in temperature.

---

## Problem 14: Equilibrium Vacancy Concentration & Arrhenius Activation Energy

### Problem Statement
*(Lecture 7 · Slide 4 & Callister §4.2)*  
Calculate the equilibrium number of vacancies per cubic meter ($N_v$) in pure Copper at $1000^\circ\text{C}$ ($1273\text{ K}$).  
*Given*:
* Energy for vacancy formation: $Q_v = 0.90\text{ eV/atom}$
* Boltzmann's constant: $k = 8.62 \times 10^{-5}\text{ eV/K}$
* Density of Copper at $1000^\circ\text{C}$: $\rho = 8.40\text{ g/cm}^3 = 8.40 \times 10^6\text{ g/m}^3$
* Atomic weight of Copper: $A_{\text{Cu}} = 63.55\text{ g/mol}$
* Avogadro's number: $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$

---

### Step 1: Calculate total number of atomic lattice sites per cubic meter ($N$)
$$N = \frac{\rho \cdot N_A}{A_{\text{Cu}}}$$
$$N = \frac{(8.40 \times 10^6\text{ g/m}^3) \times (6.022 \times 10^{23}\text{ atoms/mol})}{63.55\text{ g/mol}} = \frac{5.0585 \times 10^{30}}{63.55} = \mathbf{7.960 \times 10^{28}\text{ sites/m}^3}$$

---

### Step 2: State the Arrhenius vacancy equation
$$N_v = N \exp\left( -\frac{Q_v}{k T} \right)$$

---

### Step 3: Compute the thermal activation denominator ($k T$)
$$T = 1000 + 273 = 1273\text{ K}$$
$$k T = (8.62 \times 10^{-5}\text{ eV/K}) \times (1273\text{ K}) = \mathbf{0.10973\text{ eV}}$$

---

### Step 4: Evaluate the exponential Boltzmann factor
$$\text{Exponent} = -\frac{Q_v}{k T} = -\frac{0.90\text{ eV}}{0.10973\text{ eV}} = -8.2019$$
$$\exp(-8.2019) = e^{-8.2019} = \mathbf{2.741 \times 10^{-4}}$$

---

### Step 5: Compute the equilibrium vacancy concentration $N_v$
$$N_v = (7.960 \times 10^{28}\text{ sites/m}^3) \times (2.741 \times 10^{-4}) = \mathbf{2.182 \times 10^{25}\text{ vacancies/m}^3}$$

#### Vacancy Fraction:
$$\frac{N_v}{N} = 2.741 \times 10^{-4} = \frac{1}{3648}$$
*(At $1000^\circ\text{C}$, approximately 1 out of every 3,650 lattice sites in copper is vacant! At room temperature $25^\circ\text{C}$, $N_v/N \approx 10^{-15}$, demonstrating that vacancy concentration increases exponentially with temperature).*

---

## Problem 15: Hume-Rothery Quantitative Solid Solubility Evaluation

### Problem Statement
*(Lecture 7 · Slide 13 & Callister §4.3)*  
Using the Hume-Rothery rules, evaluate whether Zinc ($\text{Zn}$) can form an unlimited/complete substitutional solid solution in Copper ($\text{Cu}$). Compare this with the Copper-Nickel ($\text{Cu-Ni}$) system.

| Element | Atomic Radius ($R$) | Crystal Structure | Electronegativity ($X$) | Valence |
| :---: | :---: | :---: | :---: | :---: |
| **Copper ($\text{Cu}$)** | $0.128\text{ nm}$ | FCC | $1.9$ | $+2$ |
| **Zinc ($\text{Zn}$)** | $0.133\text{ nm}$ | HCP | $1.6$ | $+2$ |
| **Nickel ($\text{Ni}$)** | $0.125\text{ nm}$ | FCC | $1.8$ | $+2$ |

---

### Step 1: Rule 1 — Atomic Size Factor (Difference $\le 15\%$)
$$\Delta R = \left| \frac{R_{\text{solute}} - R_{\text{solvent}}}{R_{\text{solvent}}} \right| \times 100\%$$

* **For $\text{Cu-Zn}$**:
  $$\Delta R = \left| \frac{0.133 - 0.128}{0.128} \right| \times 100\% = \frac{0.005}{0.128} \times 100\% = \mathbf{3.9\%} \le 15\% \quad \text{[SATISFIED]}$$

* **For $\text{Cu-Ni}$**:
  $$\Delta R = \left| \frac{0.125 - 0.128}{0.128} \right| \times 100\% = \frac{0.003}{0.128} \times 100\% = \mathbf{2.3\%} \le 15\% \quad \text{[SATISFIED]}$$

---

### Step 2: Rule 2 — Crystal Structure Rule (Must be IDENTICAL)
* **For $\text{Cu-Zn}$**: $\text{Cu}$ is **FCC** while $\text{Zn}$ is **HCP**. **[VIOLATED]**  
  *Consequence*: Because the crystal structures are different, $\text{Zn}$ CANNOT dissolve completely in $\text{Cu}$. It forms only a partial solid solution (maximum solubility of $\approx 35\text{ wt}\%$ at room temperature, forming $\alpha$-brass; beyond that, a new phase $\beta$ forms).
* **For $\text{Cu-Ni}$**: $\text{Cu}$ is **FCC** and $\text{Ni}$ is **FCC**. **[SATISFIED]**

---

### Step 3: Rule 3 — Electronegativity Difference ($|\Delta X| \le 0.4$)
* **For $\text{Cu-Zn}$**: $|\Delta X| = |1.6 - 1.9| = 0.3 \le 0.4$ **[SATISFIED]**
* **For $\text{Cu-Ni}$**: $|\Delta X| = |1.8 - 1.9| = 0.1 \le 0.4$ **[SATISFIED]**

---

### Step 4: Rule 4 — Valency
* Both pairs have identical primary valency of $+2$. **[SATISFIED]**

---

### Summary Table & Exam Takeaway:
* **$\text{Cu-Ni}$ System**: Satisfies all 4 Hume-Rothery rules $\implies$ **Complete $100\%$ Isomorphous Solid Solubility** across all compositions from $0\%$ to $100\%$ Ni.
* **$\text{Cu-Zn}$ System**: Violates the crystal structure rule $\implies$ **Partial Solid Solubility** only (limited to $\approx 35\text{ wt}\%$ Zn).

---

## Problem 16: Composition Conversions Between Weight Percent and Atom Percent

### Problem Statement
*(Lecture 7 · Slide 12 & Callister §4.4)*  
(a) A cartridge brass alloy consists of $70.0\text{ wt}\%$ Copper ($\text{Cu}$, $A_{\text{Cu}} = 63.55\text{ g/mol}$) and $30.0\text{ wt}\%$ Zinc ($\text{Zn}$, $A_{\text{Zn}} = 65.38\text{ g/mol}$). Convert this composition to **atom percent** ($at\%$) of Zinc.  
(b) Convert an alloy with $15.0\text{ at}\%$ Silicon ($A_{\text{Si}} = 28.09\text{ g/mol}$) in Aluminum ($A_{\text{Al}} = 26.98\text{ g/mol}$) to **weight percent** ($wt\%$).

---

### Part (a): Weight Percent to Atom Percent

#### Method: $100\text{ g}$ Basis
Assume a total sample mass of $100\text{ g}$:
* Mass of Cu: $m_{\text{Cu}} = 70.0\text{ g}$
* Mass of Zn: $m_{\text{Zn}} = 30.0\text{ g}$

Compute number of moles of each element:
$$n_{\text{Cu}} = \frac{m_{\text{Cu}}}{A_{\text{Cu}}} = \frac{70.0\text{ g}}{63.55\text{ g/mol}} = 1.1015\text{ mol}$$
$$n_{\text{Zn}} = \frac{m_{\text{Zn}}}{A_{\text{Zn}}} = \frac{30.0\text{ g}}{65.38\text{ g/mol}} = 0.4589\text{ mol}$$

Total moles:
$$n_{\text{total}} = 1.1015 + 0.4589 = 1.5604\text{ mol}$$

Compute atom percent ($at\%$):
$$C_{\text{Zn}}' = \frac{n_{\text{Zn}}}{n_{\text{total}}} \times 100\% = \frac{0.4589}{1.5604} \times 100\% = \mathbf{29.41\text{ at}\%}$$
$$C_{\text{Cu}}' = 100\% - 29.41\% = \mathbf{70.59\text{ at}\%}$$

---

### Part (b): Atom Percent to Weight Percent

#### Method: $100\text{ mol}$ Basis
Assume a total of $100\text{ moles}$ of alloy:
* Moles of Si: $n_{\text{Si}} = 15.0\text{ mol}$
* Moles of Al: $n_{\text{Al}} = 85.0\text{ mol}$

Compute mass of each element:
$$m_{\text{Si}} = n_{\text{Si}} \times A_{\text{Si}} = 15.0\text{ mol} \times 28.09\text{ g/mol} = 421.35\text{ g}$$
$$m_{\text{Al}} = n_{\text{Al}} \times A_{\text{Al}} = 85.0\text{ mol} \times 26.98\text{ g/mol} = 2293.30\text{ g}$$

Total mass:
$$m_{\text{total}} = 421.35 + 2293.30 = 2714.65\text{ g}$$

Compute weight percent ($wt\%$):
$$C_{\text{Si}} = \frac{m_{\text{Si}}}{m_{\text{total}}} \times 100\% = \frac{421.35}{2714.65} \times 100\% = \mathbf{15.52\text{ wt}\%}$$
$$C_{\text{Al}} = 100\% - 15.52\% = \mathbf{84.48\text{ wt}\%}$$

---

## Problem 17: Dislocation Burgers Vector Magnitude in FCC and BCC Slip Systems

### Problem Statement
*(Lecture 7 · Slide 18–20 & Callister §4.5)*  
Dislocations slip along close-packed directions, which define the orientation and magnitude of the **Burgers vector** $\vec{b}$.  
(a) In FCC metals, the Burgers vector is of the type $\vec{b} = \frac{a}{2}\langle 110 \rangle$. Compute the magnitude $|\vec{b}|$ for Copper ($a = 0.3615\text{ nm}$). Show that $|\vec{b}|$ equals exactly one atomic diameter ($2R$).  
(b) In BCC metals, the Burgers vector is of the type $\vec{b} = \frac{a}{2}\langle 111 \rangle$. Compute the magnitude $|\vec{b}|$ for $\alpha$-Iron ($a = 0.2866\text{ nm}$).

---

### Part (a): Burgers Vector Magnitude in FCC
The Burgers vector is $\vec{b} = \frac{a}{2} [110]$:
$$|\vec{b}| = \frac{a}{2} \sqrt{1^2 + 1^2 + 0^2} = \frac{a\sqrt{2}}{2} = \frac{a}{\sqrt{2}}$$

Substitute $a_{\text{Cu}} = 0.3615\text{ nm}$:
$$|\vec{b}_{\text{Cu}}| = \frac{0.3615\text{ nm}}{\sqrt{2}} = \frac{0.3615}{1.4142} = \mathbf{0.2556\text{ nm}} \quad (2.556\text{ \AA})$$

#### Proof that $|\vec{b}| = 2R$:
In FCC, atoms touch along the face diagonal: $a = 2\sqrt{2}R$.
$$|\vec{b}| = \frac{a}{\sqrt{2}} = \frac{2\sqrt{2}R}{\sqrt{2}} = \mathbf{2R}$$
*Interpretation*: When a dislocation glides through an FCC crystal, the lattice is displaced by exactly one full atomic diameter!

---

### Part (b): Burgers Vector Magnitude in BCC
The Burgers vector is $\vec{b} = \frac{a}{2} [111]$:
$$|\vec{b}| = \frac{a}{2} \sqrt{1^2 + 1^2 + 1^2} = \frac{a\sqrt{3}}{2}$$

Substitute $a_{\text{Fe}} = 0.2866\text{ nm}$:
$$|\vec{b}_{\text{Fe}}| = \frac{0.2866 \times 1.73205}{2} = \frac{0.4964}{2} = \mathbf{0.2482\text{ nm}} \quad (2.482\text{ \AA})$$

#### Proof that $|\vec{b}| = 2R$:
In BCC, atoms touch along the body diagonal: $a = \frac{4R}{\sqrt{3}}$.
$$|\vec{b}| = \frac{a\sqrt{3}}{2} = \frac{\frac{4R}{\sqrt{3}} \cdot \sqrt{3}}{2} = \frac{4R}{2} = \mathbf{2R}$$
*Interpretation*: In both FCC and BCC systems, the Burgers vector magnitude corresponds precisely to the interatomic touching distance $2R$ along the primary slip direction!
