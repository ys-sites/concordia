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
- [Problem 1: Percent Ionic Character Calculation (Pauling Formula)](#problem-1-percent-ionic-character-calculation-pauling-formula)
- [Problem 2: Equilibrium Interionic Spacing and Bonding Energy](#problem-2-equilibrium-interionic-spacing-and-bonding-energy)
- [Problem 3: Coulombic Electrostatic Force Balance Between Ions](#problem-3-coulombic-electrostatic-force-balance-between-ions)
- [Problem 4: Wire Geometry to Microscopic Atom Count Stoichiometry](#problem-4-wire-geometry-to-microscopic-atom-count-stoichiometry)
- [Problem 5: Face-Centered Cubic (FCC) Lattice Parameter & APF Derivation](#problem-5-face-centered-cubic-fcc-lattice-parameter--apf-derivation)
- [Problem 6: Body-Centered Cubic (BCC) Lattice Parameter & APF Derivation](#problem-6-body-centered-cubic-bcc-lattice-parameter--apf-derivation)
- [Problem 7: Theoretical Density Computation of FCC Copper](#problem-7-theoretical-density-computation-of-fcc-copper)
- [Problem 8: Crystallographic Direction Miller Indices [uvw]](#problem-8-crystallographic-direction-miller-indices-uvw)
- [Problem 9: Crystallographic Plane Miller Indices (hkl)](#problem-9-crystallographic-plane-miller-indices-hkl)

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
