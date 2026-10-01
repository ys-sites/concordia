# Chapter 02: Atomic Structure & Interatomic Bonding
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Materials Science (MIAE 221)  
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Edition) by William D. Callister, Jr. & David G. Rethwisch — Chapter 2

---

## 1. Executive Overview & First-Principles Philosophy

Why do solid objects have defined shapes and resist being crushed into zero volume or pulled apart into a cloud of atoms? Why does diamond scratch every other substance while lead can be scratched with a fingernail? Why does tungsten melt at $3410^\circ\text{C}$ while mercury melts at $-39^\circ\text{C}$?

All macroscopic mechanical, thermal, electrical, and chemical properties of engineering materials are direct manifestations of **atomic structure and the interatomic forces holding atoms together**:
* **Interatomic forces** govern stiffness (Young's modulus $E$), thermal expansion ($\alpha_l$), and melting temperature ($T_m$).
* **Electronic structures and bond directionality** dictate electrical conductivity ($\sigma$), optical transparency, and whether a material deforms plastically with high ductility (like copper) or fractures catastrophically with zero ductility (like quartz glass).

At the atomic scale, matter operates under a continuous dynamic balance between **attractive forces** (pulling oppositely charged electrons and nuclei together) and **repulsive forces** (quantum mechanical Pauli exclusion resisting the overlap of filled electron clouds). Solid materials settle at an equilibrium separation distance ($r_0$) where the net force is identically zero and the net potential energy is at an absolute minimum.

---

## 2. Mathematical Framework & Atomic Mechanics (Callister §2.2)

### 2.1 The Architecture of the Atom

#### A. Fundamental Subatomic Quantities
An atom consists of a dense, positively charged nucleus surrounded by a cloud of negatively charged electrons:
* Protons ($p^+$): Charge $= +1.602 \times 10^{-19}\text{ C}$, mass $= 1.673 \times 10^{-27}\text{ kg}$.
* Neutrons ($n^0$): Charge $= 0$, mass $= 1.675 \times 10^{-27}\text{ kg}$.
* Electrons ($e^-$): Charge $= -1.602 \times 10^{-19}\text{ C}$, mass $= 9.109 \times 10^{-31}\text{ kg}$ (roughly $1/1836$ the mass of a proton).
* **Atomic Number ($Z$)**: The number of protons in the nucleus, defining the chemical identity of the element.
* **Atomic Mass ($A$)**: The sum of protons and neutrons: $A \cong Z + N$.
* **The Mole & Avogadro's Number ($N_A$)**: One mole of any substance contains:
  $$N_A = 6.022 \times 10^{23} \text{ atoms/mol}$$
  The atomic weight of an element in grams per mole ($\text{g/mol}$) equals the mass in atomic mass units ($\text{amu}$) of a single atom ($1\text{ amu} = 1.6605 \times 10^{-24}\text{ g}$).

#### B. Wave-Mechanical Model & Quantum Numbers
In classical Bohr theory, electrons were envisioned as orbiting the nucleus in fixed circular planetary tracks. Modern quantum mechanics, established by de Broglie and Schrödinger, treats electrons with **wave-particle duality**: an electron's position cannot be localized precisely (Heisenberg Uncertainty Principle), but is described by a spatial probability density distribution called an **atomic orbital**.

Every electron in an atom is completely specified by a set of **four quantum numbers**:

| Quantum Number | Symbol | Allowed Values | Physical Meaning |
| :--- | :---: | :--- | :--- |
| **Principal** | $n$ | $1, 2, 3, 4, \dots$ | Shell energy level and average distance from nucleus ($K, L, M, N$ shells). |
| **Azimuthal (Angular)** | $l$ | $0, 1, 2, \dots, n-1$ | Subshell shape: $l=0$ ($s$, spherical), $l=1$ ($p$, dumbbell), $l=2$ ($d$), $l=3$ ($f$). |
| **Magnetic** | $m_l$ | $-l, \dots, 0, \dots, +l$ | Spatial orientation of the orbital in space ($2l+1$ orbitals per subshell). |
| **Spin** | $m_s$ | $+\frac{1}{2}, -\frac{1}{2}$ | Intrinsic angular momentum / spin orientation (spin up $\uparrow$ or spin down $\downarrow$). |

* **Shell Electron Capacity**:
  * Each individual orbital can accommodate at most **two electrons of opposite spin** (Pauli Exclusion Principle).
  * Subshell capacities: $s$ has 1 orbital (2 electrons); $p$ has 3 orbitals (6 electrons); $d$ has 5 orbitals (10 electrons); $f$ has 7 orbitals (14 electrons).
  * Maximum number of electrons in principal shell $n$:
    $$\text{Capacity} = 2n^2$$
    ($n=1 \to 2; \quad n=2 \to 8; \quad n=3 \to 18; \quad n=4 \to 32$).

#### C. Electron Configurations & The Periodic Table
Electrons populate energy states according to three foundational physical rules:
1. **Aufbau Principle**: Electrons fill the lowest available quantum energy states first:
   $$1s \to 2s \to 2p \to 3s \to 3p \to 4s \to 3d \to 4p \to 5s \to 4d \to 5p \dots$$
   *(Note that the $4s$ subshell is lower in energy than $3d$ when unoccupied!)*
2. **Pauli Exclusion Principle**: No two electrons in an atom can have the exact same set of all four quantum numbers ($n, l, m_l, m_s$).
3. **Hund's Rule**: In subshells containing degenerate orbitals ($p, d, f$), electrons occupy separate orbitals with parallel spins before pairing up.

* **Valence Electrons**: Electrons occupying the outermost unfilled principal shell. Valence electrons participate in chemical bonding and dictate the electrical, optical, and chemical properties of materials.
* **Stable Noble Gas Configurations**: Atoms with filled outer $s$ and $p$ subshells ($s^2 p^6$, 8 valence electrons) exhibit exceptional thermodynamic stability and near-zero chemical reactivity (He, Ne, Ar, Kr, Xe).

#### D. Electronegativity Trends
**Electronegativity ($X$)** is a measure of an atom's ability to attract shared electrons to itself in a chemical bond:
* **Periodic Trend**: Electronegativity **increases from left to right** across a period (increasing nuclear charge pulls electrons tighter) and **decreases from top to bottom** down a group (increased electron shielding weakens nuclear attraction).
* **Extremes**: Fluorine has the highest electronegativity ($X_{\text{F}} = 4.0$ on the Pauling scale), while Francium and Cesium have the lowest ($X \approx 0.7$).

---

## 3. Atomic Bonding in Solids: Forces & Potential Energies (Callister §2.3)

### 3.1 The Interatomic Force & Energy Engine

Consider two isolated atoms brought together from an infinite separation distance ($r = \infty$). The net interaction consists of two opposing forces:
$$F_N(r) = F_A(r) + F_R(r)$$
1. **Attractive Force ($F_A$)**: Operates at long and intermediate distances. Its physical origin depends on the bonding mechanism (electrostatic Coulomb attraction for ionic bonds; electron-nucleus sharing for covalent/metallic bonds).
2. **Repulsive Force ($F_R$)**: Operates at very short interatomic separations. When the outer electron clouds of adjacent atoms overlap, the **Pauli Exclusion Principle** violently resists forcing electrons into already occupied quantum states, creating a sharp electrostatic core repulsion.

#### Mathematical Potential Energy Relationship:
Potential energy $E$ is related to force $F$ by work integration:
$$E_N(r) = \int_\infty^r F_N(r') \, dr' = E_A(r) + E_R(r)$$
Conversely, force is the negative derivative of potential energy:
$$F_N(r) = -\frac{dE_N(r)}{dr}$$

For many engineering systems, the net potential energy is mathematically modeled by power-law potentials (e.g., Mie or Lennard-Jones potentials):
$$E_N(r) = -\frac{A}{r^m} + \frac{B}{r^n}$$
where $A, B > 0$ are material-specific constants, and $n > m$:
* For simple ionic bonding (Coulomb's Law): $m = 1$.
* The repulsive exponent $n$ typically ranges from $7$ to $12$ (reflecting the steepness of Pauli core repulsion).

Differentiating yields the net force:
$$F_N(r) = -\frac{d}{dr}\left[ -A r^{-m} + B r^{-n} \right] = -\left[ m A r^{-(m+1)} - n B r^{-(n+1)} \right] = -\frac{m A}{r^{m+1}} + \frac{n B}{r^{n+1}}$$

![Callister Figure 2.10 - Interatomic Force and Potential Energy Curves](./images/callister_fig_2_10_force_energy_curves.png)
*Figure 2.10: (a) Net interatomic force $F_N$ as a function of atomic separation distance $r$. (b) Net potential energy $E_N$ displaying the equilibrium potential well with bonding energy $E_0$ and equilibrium spacing $r_0$ — from Callister & Rethwisch 10th Ed. (Fig. 2.10).*

### 3.2 The Equilibrium State ($r = r_0$)
At the equilibrium interatomic separation $r = r_0$:
1. **Force Balance**: The attractive and repulsive forces exactly balance:
   $$F_N(r_0) = 0 \iff F_A(r_0) = -F_R(r_0)$$
2. **Energy Minimum**: The net potential energy reaches its absolute minimum (the bottom of the potential well):
   $$\left. \frac{dE_N}{dr} \right|_{r = r_0} = 0$$
   Setting the derivative to zero:
   $$\frac{m A}{r_0^{m+1}} = \frac{n B}{r_0^{n+1}} \implies r_0^{n-m} = \frac{n B}{m A} \implies r_0 = \left( \frac{n B}{m A} \right)^{\frac{1}{n-m}}$$
3. **Bonding Energy ($E_0$)**: The depth of the potential energy trough:
   $$E_0 = E_N(r_0) = -\frac{A}{r_0^m} + \frac{B}{r_0^n}$$
   Substituting $B = \frac{m A}{n} r_0^{n-m}$:
   $$E_0 = -\frac{A}{r_0^m} + \frac{m A}{n r_0^m} = -\frac{A}{r_0^m} \left( 1 - \frac{m}{n} \right)$$
   For simple ionic pairs ($m = 1$):
   $$E_0 = -\frac{A}{r_0}\left( 1 - \frac{1}{n} \right)$$
   The magnitude $|E_0|$ is the **bonding energy**—the precise energy required to pull the two bonded atoms infinitely far apart.

---

### 3.3 Translating the Potential Energy Well to Macroscopic Properties

The shape of the interatomic potential energy well $E_N(r)$ directly dictates three fundamental macroscopic engineering properties:

```
                            POTENTIAL ENERGY WELL
                                      │
     ┌────────────────────────────────┼────────────────────────────────┐
     ▼                                ▼                                ▼
1. WELL DEPTH (|E₀|)          2. WELL CURVATURE (d²E/dr²)       3. WELL ASYMMETRY
Melting Temperature (T_m)     Elastic Modulus (Stiffness E)    Thermal Expansion (α_l)
Deeper well = Higher T_m      Steeper curve = Stiffer material  Asymmetry = Expansion
```

#### 1. Melting Temperature ($T_m$)
* Temperature is a macroscopic measure of the average kinetic energy of atomic vibrations.
* To melt a solid, thermal vibrational energy ($k_B T$) must overcome the cohesive bonding energy holding atoms in their lattice sites.
* **Direct Law**: Materials with deep potential energy wells (large $|E_0|$) exhibit very high melting temperatures:
  * Diamond (Covalent): $|E_0| = 711\text{ kJ/mol} \implies T_m > 3550^\circ\text{C}$
  * Tungsten (Metallic): $|E_0| = 849\text{ kJ/mol} \implies T_m = 3410^\circ\text{C}$
  * Silicon Dioxide (Ionic/Covalent): $|E_0| = 464\text{ kJ/mol} \implies T_m = 1710^\circ\text{C}$
  * Lead (Weak Metallic): $|E_0| = 195\text{ kJ/mol} \implies T_m = 327^\circ\text{C}$
  * Polyethylene (Secondary vdW between chains): $|E_0| \approx 5\text{ kJ/mol} \implies T_m \approx 135^\circ\text{C}$

#### 2. Mechanical Stiffness / Elastic Modulus ($E$)
* When an external tensile force pulls atoms slightly apart by displacement $\Delta r = r - r_0$, the restoring force is governed by Hooke's Law at the atomic scale:
  $$F_N \approx \left( \left.\frac{dF_N}{dr}\right|_{r_0} \right) \Delta r = \left( \left.\frac{d^2E_N}{dr^2}\right|_{r_0} \right) \Delta r$$
* **Direct Law**: The macroscopic Young's modulus $E$ is directly proportional to the **curvature (second derivative) at the bottom of the potential energy well**:
  $$E \propto \left. \frac{d^2E_N}{dr^2} \right|_{r = r_0}$$
* A narrow, steep potential well acts like an extremely stiff spring, giving high elastic modulus (e.g., Diamond $E \approx 1000\text{ GPa}$, Alumina $E \approx 380\text{ GPa}$, Steel $E \approx 207\text{ GPa}$).
* A wide, shallow well acts like a soft spring, resulting in low modulus (e.g., Polymers $E \approx 1 - 3\text{ GPa}$).

#### 3. Coefficient of Linear Thermal Expansion ($\alpha_l$)
* In an ideal, symmetric parabolic harmonic well ($E = \frac{1}{2}k(r - r_0)^2$), heating causes atoms to oscillate back and forth with increasing amplitude, but the **mean equilibrium position $\bar{r}$ remains exactly at $r_0$**. A material with a perfectly symmetric well would exhibit **zero thermal expansion**!
* In real materials, the potential energy well is **asymmetric (anharmonic)**: The repulsive barrier at $r < r_0$ is extremely steep due to Pauli exclusion, while the attractive branch at $r > r_0$ flattens out gradually.
* As thermal energy increases, atoms oscillate with larger amplitude between $r_{\min}$ and $r_{\max}$. Because of the asymmetric flare on the right side:
  $$\bar{r}(T) = \frac{r_{\min} + r_{\max}}{2} > r_0$$
* **Direct Law**: As temperature rises, the mean interatomic separation $\bar{r}(T)$ shifts outward. The rate of expansion $\alpha_l = \frac{1}{L}\frac{dL}{dT}$ is proportional to the **asymmetry of the well**:
  * Deep, narrow wells are highly symmetric $\implies$ Low thermal expansion (e.g., Invar alloy $\alpha_l \approx 1.2 \times 10^{-6}\text{ K}^{-1}$, Ceramics $\alpha_l \approx 4 - 8 \times 10^{-6}\text{ K}^{-1}$).
  * Shallow, wide wells are highly asymmetric $\implies$ High thermal expansion (e.g., Polymers $\alpha_l \approx 50 - 200 \times 10^{-6}\text{ K}^{-1}$).

---

## 4. The Primary & Secondary Bonding Taxonomy

```
                              Chemical Bonding
                                      │
     ┌────────────────────────────────┴────────────────────────────────┐
     ▼                                                                 ▼
PRIMARY BONDS                                                   SECONDARY BONDS
(Large Energies: 100 - 1000 kJ/mol)                             (Small Energies: 0.1 - 50 kJ/mol)
• Ionic: e⁻ Transfer, Coulomb, Non-directional                  • London Dispersion: Fluctuating dipoles
• Covalent: e⁻ Sharing, Highly directional                      • Debye: Permanent-induced dipoles
• Metallic: Ion cores in free e⁻ sea, Non-directional           • Hydrogen Bonding: H to F, O, N
```

### 4.1 Primary Interatomic Bonds

#### A. Ionic Bonding
* **Mechanism**: Electron transfer from an electropositive metallic element (which loses electrons to form a stable cation, e.g., $\text{Na} \to \text{Na}^+ + e^-$) to an electronegative nonmetallic element (which gains electrons to form a stable anion, e.g., $\text{Cl} + e^- \to \text{Cl}^-$).
* **Attractive Coulomb Potential**:
  $$E_A(r) = -\frac{|z_1 z_2| e^2}{4\pi \varepsilon_0 r} = -\frac{A}{r}$$
  where $z_1, z_2$ are ionic valences, $e = 1.602 \times 10^{-19}\text{ C}$, $\varepsilon_0 = 8.854 \times 10^{-12}\text{ F/m}$.
  The constant $A$ for monovalent ions ($z_1 = +1, z_2 = -1$) is:
  $$A = \frac{(1.602 \times 10^{-19})^2}{4\pi (8.854 \times 10^{-12})} = 2.307 \times 10^{-28} \text{ J}\cdot\text{m} = 1.44 \text{ eV}\cdot\text{nm}$$
* **Characteristics**:
  * Non-directional: Each cation attracts anions equally in all directions in 3D space, governed strictly by geometric packing radius ratios.
  * Predominates in ceramic materials ($\text{NaCl}, \text{MgO}, \text{Al}_2\text{O}_3, \text{ZrO}_2$).
  * Hard and brittle; electrically insulating in solid state because ions are locked in crystal lattice positions.

#### B. Covalent Bonding
* **Mechanism**: Sharing of valence electrons between adjacent atoms with small electronegativity differences ($X_A \approx X_B$).
* **Characteristics**:
  * **Highly Directional**: Bonds form only along specific spatial angles corresponding to overlapping quantum hybrid orbitals (e.g., $sp^3$ tetrahedral hybridization in carbon/diamond and silicon with bond angles of $109.5^\circ$).
  * High bond strength: Diamond has the highest hardness and highest thermal conductivity of any known bulk material.
  * Low electrical conductivity at room temperature due to tightly bound valence electron pairs.

#### C. Pauling's Percent Ionic Character Formula
Real chemical bonds between dissimilar atoms are rarely $100\%$ purely ionic or $100\%$ purely covalent. The degree of ionic character depends exponentially on the **difference in Pauling electronegativities** $(\Delta X = |X_A - X_B|)$:
$$\% \text{ Ionic Character} = \left[ 1 - \exp\left( -0.25 (X_A - X_B)^2 \right) \right] \times 100\%$$
* If $\Delta X = 0$ (e.g., $\text{C-C}, \text{Si-Si}$): $\% \text{IC} = [1 - e^0] = 0\%$ (Pure Covalent).
* If $\Delta X \approx 1.7$: $\% \text{IC} \approx 50\%$ (Half ionic, half covalent).
* If $\Delta X > 2.0$ (e.g., $\text{NaCl}$ with $X_{\text{Cl}} = 3.0, X_{\text{Na}} = 0.9 \implies \Delta X = 2.1$): $\% \text{IC} \approx 67\%$ (Predominantly Ionic).

#### D. Metallic Bonding
* **Mechanism**: Valence electrons are shed by metallic atoms to form positive ion cores; the freed electrons delocalize into a shared, highly mobile **conduction electron gas (electron sea)**.
* **Characteristics**:
  * Non-directional: Ion cores are bound by electrostatic attraction to the pervasive negative electron gas.
  * Exceptional ductility and formability: When a shear stress is applied, planes of positive ion cores slide past one another smoothly because the flexible electron sea instantly readjusts without bond breakage.
  * High electrical and thermal conductivities: Free electrons move freely through the lattice under electric fields or temperature gradients.

---

### 4.2 Secondary (van der Waals) Bonding

Secondary bonds are physical bonds arising from **electrostatic attraction between atomic or molecular dipoles**. They are an order of magnitude weaker than primary chemical bonds ($0.1 - 50\text{ kJ/mol}$ vs. $100 - 1000\text{ kJ/mol}$):
1. **Fluctuating Induced Dipoles (London Dispersion Forces)**:
   * Instantaneous fluctuations in electron cloud symmetry generate temporary, short-lived dipoles that induce complementary dipoles in adjacent atoms.
   * Weakest bond; present in all matter, but the only bond holding liquid noble gases (Argon, Helium) and nonpolar polymer chains together.
2. **Permanent Dipole Bonds & Hydrogen Bonding**:
   * Polar molecules (e.g., $\text{HCl}, \text{H}_2\text{O}$) possess asymmetric charge distributions creating permanent electric dipoles.
   * **Hydrogen Bonding**: A special, exceptionally strong category of permanent dipole bonding occurring when hydrogen is covalently bonded to highly electronegative, small atoms (**Fluorine, Oxygen, Nitrogen**). The unshielded proton forms an intense localized positive charge that strongly attracts the negative lone-pair electrons of adjacent molecules.
   * Hydrogen bonding explains why water is liquid at room temperature ($T_b = 100^\circ\text{C}$) while heavier hydride analogs ($\text{H}_2\text{S}$) are gases ($T_b = -60^\circ\text{C}$).

---

## 5. Comprehensive Step-by-Step Problem Walkthroughs

### 5.1 Problem 1: Quantitative Interatomic Force & Energy Calculation

**Problem Statement**: The net potential energy $E_N(r)$ between two isolated monovalent ions ($K^+$ and $Cl^-$) is modeled by:
$$E_N(r) = -\frac{C}{r} + \frac{D}{r^8}$$
where $r$ is the interionic separation distance in nanometers ($\text{nm}$), attractive constant $C = 1.436\text{ eV}\cdot\text{nm}$, and repulsive constant $D = 7.32 \times 10^{-6}\text{ eV}\cdot\text{nm}^8$.
1. Derive the expression for the net interatomic force $F_N(r)$.
2. Calculate the equilibrium separation distance $r_0$ (in $\text{nm}$).
3. Calculate the bonding energy $E_0$ (in $\text{eV}$).
4. Calculate the net force at $r = 0.20\text{ nm}$ and state whether it is attractive or repulsive.

#### Step 1: Derive the Net Interatomic Force $F_N(r)$
Force is the negative gradient of potential energy:
$$F_N(r) = -\frac{dE_N}{dr} = -\frac{d}{dr}\left[ -C r^{-1} + D r^{-8} \right]$$
$$F_N(r) = -\left[ C r^{-2} - 8 D r^{-9} \right] = -\frac{C}{r^2} + \frac{8D}{r^9}$$
* Attractive force: $F_A(r) = -\frac{C}{r^2} = -\frac{1.436}{r^2}\text{ eV/nm}$
* Repulsive force: $F_R(r) = +\frac{8D}{r^9} = +\frac{8(7.32 \times 10^{-6})}{r^9} = +\frac{5.856 \times 10^{-5}}{r^9}\text{ eV/nm}$

#### Step 2: Calculate Equilibrium Separation Distance $r_0$
At equilibrium $r = r_0$, the net force is zero ($F_N(r_0) = 0$):
$$-\frac{1.436}{r_0^2} + \frac{5.856 \times 10^{-5}}{r_0^9} = 0$$
Multiply through by $r_0^9$:
$$-1.436 r_0^7 + 5.856 \times 10^{-5} = 0$$
$$r_0^7 = \frac{5.856 \times 10^{-5}}{1.436} = 4.078 \times 10^{-5}\text{ nm}^7$$
Take the 7th root of both sides:
$$r_0 = (4.078 \times 10^{-5})^{1/7} = 0.2364\text{ nm} = 2.364 \text{ Å}$$

#### Step 3: Calculate the Bonding Energy $E_0 = E_N(r_0)$
Substitute $r_0 = 0.2364\text{ nm}$ into the potential energy equation:
$$E_0 = -\frac{1.436}{0.2364} + \frac{7.32 \times 10^{-6}}{(0.2364)^8}$$
* Attractive potential: $E_A = -\frac{1.436}{0.2364} = -6.074\text{ eV}$
* Repulsive potential:
  $$(0.2364)^8 = 9.641 \times 10^{-6}\text{ nm}^8$$
  $$E_R = \frac{7.32 \times 10^{-6}}{9.641 \times 10^{-6}} = +0.759\text{ eV}$$
* Net bonding energy:
  $$E_0 = -6.074\text{ eV} + 0.759\text{ eV} = -5.315\text{ eV}$$
The depth of the potential energy well is $|E_0| = 5.32\text{ eV}$ ($513\text{ kJ/mol}$).

#### Step 4: Calculate Net Force at $r = 0.20\text{ nm}$
Since $r = 0.20\text{ nm} < r_0 = 0.2364\text{ nm}$, the ions are squeezed closer than equilibrium; we expect strong repulsion:
$$F_N(0.20) = -\frac{1.436}{(0.20)^2} + \frac{5.856 \times 10^{-5}}{(0.20)^9}$$
* $F_A = -\frac{1.436}{0.04} = -35.90\text{ eV/nm}$
* $(0.20)^9 = 5.12 \times 10^{-7}\text{ nm}^9$
* $F_R = \frac{5.856 \times 10^{-5}}{5.12 \times 10^{-7}} = +114.38\text{ eV/nm}$
$$F_N = -35.90 + 114.38 = +78.48\text{ eV/nm}$$
Convert to SI Newtons ($1\text{ eV} = 1.602 \times 10^{-19}\text{ J}$, $1\text{ nm} = 10^{-9}\text{ m}$):
$$F_N = 78.48 \times \frac{1.602 \times 10^{-19}\text{ J}}{10^{-9}\text{ m}} = 1.26 \times 10^{-8}\text{ N} = 12.6\text{ nN}$$
Because $F_N > 0$, the net force is **strongly repulsive**, acting to push the two ions back out to $r_0$.

---

### 5.2 Problem 2: Pauling's Percent Ionic Character for Engineering Ceramics

**Problem Statement**: Using the Pauling electronegativity values provided in the table below, compute the percent ionic character ($\% \text{IC}$) for the following engineering ceramics:
1. Silicon Carbide ($\text{SiC}$)
2. Aluminum Oxide ($\text{Al}_2\text{O}_3$)
3. Magnesium Oxide ($\text{MgO}$)
4. Gallium Arsenide ($\text{GaAs}$)

| Element | Electronegativity ($X$) | Element | Electronegativity ($X$) |
| :--- | :---: | :--- | :---: |
| Silicon ($\text{Si}$) | $1.8$ | Oxygen ($\text{O}$) | $3.5$ |
| Carbon ($\text{C}$) | $2.5$ | Magnesium ($\text{Mg}$) | $1.2$ |
| Aluminum ($\text{Al}$) | $1.5$ | Gallium ($\text{Ga}$) | $1.6$ |
| Arsenic ($\text{As}$) | $2.0$ | Chlorine ($\text{Cl}$) | $3.0$ |

#### Step-by-Step Computations via Pauling's Formula:
$$\% \text{IC} = \left[ 1 - \exp\left( -0.25 (X_A - X_B)^2 \right) \right] \times 100\%$$

1. **Silicon Carbide ($\text{SiC}$)**:
   $$\Delta X = |X_{\text{C}} - X_{\text{Si}}| = |2.5 - 1.8| = 0.7$$
   $$(\Delta X)^2 = 0.49$$
   $$\% \text{IC} = \left[ 1 - \exp(-0.25 \times 0.49) \right] \times 100\% = \left[ 1 - \exp(-0.1225) \right] \times 100\%$$
   $$\% \text{IC} = [1 - 0.8847] \times 100\% = 11.5\% \text{ Ionic} \quad (88.5\% \text{ Covalent})$$
   *Classification*: Highly covalent structural ceramic with extreme hardness.

2. **Aluminum Oxide ($\text{Al}_2\text{O}_3$)**:
   $$\Delta X = |X_{\text{O}} - X_{\text{Al}}| = |3.5 - 1.5| = 2.0$$
   $$(\Delta X)^2 = 4.0$$
   $$\% \text{IC} = \left[ 1 - \exp(-0.25 \times 4.0) \right] \times 100\% = \left[ 1 - \exp(-1.0) \right] \times 100\%$$
   $$\% \text{IC} = [1 - 0.3679] \times 100\% = 63.2\% \text{ Ionic} \quad (36.8\% \text{ Covalent})$$
   *Classification*: Predominantly ionic ceramic insulator.

3. **Magnesium Oxide ($\text{MgO}$)**:
   $$\Delta X = |X_{\text{O}} - X_{\text{Mg}}| = |3.5 - 1.2| = 2.3$$
   $$(\Delta X)^2 = 5.29$$
   $$\% \text{IC} = \left[ 1 - \exp(-0.25 \times 5.29) \right] \times 100\% = \left[ 1 - \exp(-1.3225) \right] \times 100\%$$
   $$\% \text{IC} = [1 - 0.2665] \times 100\% = 73.4\% \text{ Ionic} \quad (26.6\% \text{ Covalent})$$
   *Classification*: Strongly ionic refractory ceramic.

4. **Gallium Arsenide ($\text{GaAs}$)**:
   $$\Delta X = |X_{\text{As}} - X_{\text{Ga}}| = |2.0 - 1.6| = 0.4$$
   $$(\Delta X)^2 = 0.16$$
   $$\% \text{IC} = \left[ 1 - \exp(-0.25 \times 0.16) \right] \times 100\% = \left[ 1 - \exp(-0.04) \right] \times 100\%$$
   $$\% \text{IC} = [1 - 0.9608] \times 100\% = 3.9\% \text{ Ionic} \quad (96.1\% \text{ Covalent})$$
   *Classification*: Almost purely covalent compound semiconductor.

---

## 6. Critical Concordia Exam Traps & Red Flags

* ⚠️ **Trap 1: Transition Metal Ionization Order**:
  When determining electron configurations for transition metal cations (e.g., $\text{Fe}^{2+}$ or $\text{Cu}^+$), **electrons are always removed from the outermost valence shell ($4s$) before the underlying ($3d$) shell**:
  $$\text{Fe}: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6 \implies \text{Fe}^{2+}: 1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 \quad (\text{NOT } 4s^2 3d^4!)$$
  $$\text{Cu}: [Ar] 4s^1 3d^{10} \implies \text{Cu}^+: [Ar] 3d^{10}$$
* ⚠️ **Trap 2: Force Derivative Sign Confusion**:
  Remember that $F_N = -\frac{dE_N}{dr}$.
  The negative sign is crucial:
  * When $r > r_0$, the slope $\frac{dE_N}{dr}$ is positive $\implies F_N < 0$ (attractive force).
  * When $r < r_0$, the slope $\frac{dE_N}{dr}$ is negative $\implies F_N > 0$ (repulsive force).
  * If you omit the negative sign, you will report repulsive forces as attractive and vice versa!
* ⚠️ **Trap 3: Equating Bonding Energy to Melting Point Directly Without Well Depth**:
  Melting point scales with **well depth $|E_0|$**, NOT the separation distance $r_0$. Two materials can have the same $r_0$, but if material A has twice the well depth of material B, material A will have a drastically higher melting temperature.
* ⚠️ **Trap 4: Missing Units in Coulombic Constant $A$**:
  In $E_A = -\frac{A}{r}$, ensure that if $r$ is in $\text{nm}$, $A$ must be in $\text{eV}\cdot\text{nm}$ ($A \approx 1.44\text{ eV}\cdot\text{nm}$). If $r$ is in meters ($\text{m}$), $A$ must be in Joules-meters ($A = \frac{e^2}{4\pi\varepsilon_0} = 2.307 \times 10^{-28}\text{ J}\cdot\text{m}$). Mixing $\text{nm}$ with Joules produces errors of 9 orders of magnitude!
