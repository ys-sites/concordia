# MIAE 221: Materials Science for Engineers
# Part 2: Chemical Bonding, Potential Energy Wells & Physical Properties

---

## 1. The Three Primary (Strong) Chemical Bonds

Primary bonds are strong interatomic attachments involving valence electron transfers or sharing, with bond energies typically ranging from $100\text{ to }1000\text{ kJ/mol}$ ($1\text{ to }10\text{ eV/atom}$).

```
[ PRIMARY BONDS ]
  |-- IONIC BONDING: Complete transfer of electrons (Cation + Anion)
  |                  Non-directional, high melting point, brittle.
  |
  |-- COVALENT BONDING: Localized sharing of valence electrons
  |                     Highly directional, wide range of stiffness.
  |
  |-- METALLIC BONDING: Positive ion cores in a delocalized "sea of electrons"
                        Non-directional, ductile, highly conductive.
```

---

### A. Ionic Bonding (Electrostatic Attraction)

* **Physical Mechanism**: 
  Occurs between atoms with large differences in electronegativity ($\Delta X > 1.7$–$2.0$), typically a metallic element (electropositive, low ionization energy) and a nonmetallic element (electronegative, high electron affinity).
  $$\text{Metal (gives } e^-) + \text{Non-Metal (takes } e^-) \longrightarrow \text{Cation}^+ + \text{Anion}^-$$
  *Example*: Sodium ($Na: [Ne]3s^1$) transfers its outer electron to Chlorine ($Cl: [Ne]3s^2 3p^5$), producing mutually stable octets: $Na^+ ([Ne])$ and $Cl^- ([Ar])$.
* **Directionality**: **Non-directional**. 
  Because an electric field radiates symmetrically in all spherical directions, a positive ion attracts negative ions equally from every orientation in 3D space. The crystal structure is governed purely by ion size ratios (radius ratio $r_c/r_a$) and charge neutrality.
* **Coulombic Attractive Force**:
  $$F_A = \frac{|z_1| |z_2| e^2}{4\pi \varepsilon_0 r^2}$$
  Where $z_1, z_2$ are ionic valences, $e = 1.602 \times 10^{-19}\text{ C}$, $\varepsilon_0 = 8.854 \times 10^{-12}\text{ F/m}$ (permittivity of vacuum), and $r$ is interionic separation.

---

### B. Covalent Bonding (Electron Sharing)

* **Physical Mechanism**:
  Occurs between atoms with small differences in electronegativity located near each other on the right side of the periodic table (e.g., $C, Si, Ge, O_2, N_2, CH_4$, and polymer chains).
  Rather than giving up electrons, adjacent atoms share pairs of valence electrons such that each participating atom achieves a stable, closed-shell inert gas configuration.
* **Directionality**: **Highly Directional**.
  Covalent bonds form strictly along specific angles defined by quantum orbital overlap (e.g., $sp^3$ hybrid orbitals form a strict $109.5^\circ$ tetrahedral geometry in diamond and silicon).
* **Macroscopic Impact**:
  Because atoms cannot shift without breaking rigid directional orbital bonds, covalent crystals like diamond, silicon carbide ($SiC$), and silicon nitride ($Si_3N_4$) possess **enormous hardness**, **high melting temperatures**, but **no plastic slip**.

---

### C. Metallic Bonding (The Electron Cloud)

* **Physical Mechanism**:
  Occurs in pure metals and metallic alloys ($Fe, Cu, Al, Ti$, brass, bronze).
  Metallic elements have few valence electrons loosely bound to the nucleus. In a solid, these valence electrons detach from individual atoms and become completely delocalized, forming a mobile "sea of electrons" (or Fermi gas) that freely permeates the entire crystal. The positively charged ion cores (nucleus + inner core electrons) are held together by mutual electrostatic attraction to this permeating electron cloud.
* **Directionality**: **Non-directional**.
  The sea of electrons shields adjacent ion cores equally in all directions.
* **Engineering Properties Derived from Metallic Bonding**:
  1. **High Electrical & Thermal Conductivity**: The free valence electrons move instantly in response to electric fields or thermal gradients.
  2. **High Ductility & Formability**: When a shear stress is applied, crystal planes slide over one another (dislocation slip). Because the bonding is non-directional, the electron glue simply flows with the moving atoms—the crystal deforms plastically without cleaving.
  3. **Opaque & Lustrous**: Free electrons absorb and re-emit all visible photon wavelengths.

---

## 2. Mixed Bonding & Pauling's Percent Ionic Character

In reality, pure ionic and pure covalent bonds represent idealized extremes. Most chemical compounds exhibit **mixed bonding** characterized by partial ionic and partial covalent character.

Linus Pauling established an empirical equation relating the **Percent Ionic Character (%IC)** of an interatomic bond to the difference in Pauling electronegativities ($X_A$ and $X_B$):

$$\% \text{ Ionic Character} = \left[ 1 - \exp\left( -0.25 (X_A - X_B)^2 \right) \right] \times 100\%$$

```
   100% |                                      .--- (Pure Ionic: NaCl, CsCl)
        |                                .--'''
        |                           .--''
  % IC  |                      .---'
        |                 .---'
        |           .---''
     0% +----------'-------------------------------- (Pure Covalent: C-C, Si-Si)
        0.0        1.0        2.0        3.0        4.0
                        Electronegativity Difference |X_A - X_B|
```

### Reference Pauling Electronegativities

| Element | H | C | N | O | F | Na | Mg | Al | Si | Cl | K | Ti | Fe | Zn | Br | Te |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$X$** | 2.1 | 2.5 | 3.0 | 3.5 | 4.0 | 0.9 | 1.2 | 1.5 | 1.8 | 3.0 | 0.8 | 1.5 | 1.8 | 1.6 | 2.8 | 2.1 |

### Step-by-Step Calculation Examples

1. **Titanium Dioxide ($TiO_2$)**:
   * Electronegativities: $X_O = 3.5$, $X_{Ti} = 1.5 \implies \Delta X = 3.5 - 1.5 = 2.0$
   * $(\Delta X)^2 = 2.0^2 = 4.0$
   * $\% \text{IC} = [1 - \exp(-0.25 \times 4.0)] \times 100\% = [1 - \exp(-1.0)] \times 100\%$
   * $\% \text{IC} = [1 - 0.3679] \times 100\% = \mathbf{63.2\% \text{ Ionic}}$ (and $36.8\%$ Covalent).

2. **Zinc Telluride ($ZnTe$)**:
   * Electronegativities: $X_{Te} = 2.1$, $X_{Zn} = 1.6 \implies \Delta X = 2.1 - 1.6 = 0.5$
   * $(\Delta X)^2 = 0.25$
   * $\% \text{IC} = [1 - \exp(-0.25 \times 0.25)] \times 100\% = [1 - \exp(-0.0625)] \times 100\%$
   * $\% \text{IC} = [1 - 0.9394] \times 100\% = \mathbf{6.1\% \text{ Ionic}}$ (and $93.9\%$ Covalent).

---

## 3. Secondary (Weak) Intermolecular Bonds

Secondary bonds (often termed **van der Waals forces**) arise from electrostatic attraction between electric dipoles. They carry bond energies between $4\text{ and }40\text{ kJ/mol}$ ($0.04\text{ to }0.4\text{ eV/atom}$)—roughly an order of magnitude weaker than primary bonds.

```
       [ SECONDARY BOND TYPES ]
                  |
  +---------------+---------------+
  |                               |
[ FLUCTUATING DIPOLES ]       [ PERMANENT DIPOLES ]
(London Dispersion Forces)     (Polar molecules, e.g., HCl)
• Electrons shift momentarily             |
• Symmetrical atoms (Ar, Xe)   [ HYDROGEN BONDING ]
                               (Special, unusually strong dipole)
                               • H bonded to F, O, or N
```

1. **Fluctuating Induced Dipoles (London Dispersion Forces)**:
   Even in completely symmetric, nonpolar atoms (such as liquid Argon, liquid Helium, or solid Xenon), electrons constantly circulate. At any given instant, random fluctuations shift the electron cloud slightly off-center, creating a fleeting instantaneous dipole ($\delta^+ \dots \delta^-$). This induces a complementary dipole in the neighboring atom, creating a weak attractive force.
2. **Permanent Dipoles**:
   Molecules with asymmetric charge distributions (polar molecules, e.g., $HCl$) possess permanent dipole moments. The positive end of one molecule attracts the negative end of its neighbor.
3. **Hydrogen Bonding (The Strongest Secondary Bond)**:
   Occurs specifically when hydrogen is covalently bonded to small, aggressively electronegative atoms: **Fluorine ($F$), Oxygen ($O$), or Nitrogen ($N$)**. Because the electronegative atom pulls the shared electron density so intensely toward itself, the hydrogen atom is stripped down to an almost bare proton ($\delta^+$). This exposed positive charge exerts a uniquely strong attraction toward lone electron pairs on adjacent molecules.
   *Engineering Significance*:
   * Causes water's anomalously high boiling point ($100^\circ\text{C}$) and expansion upon freezing.
   * Holds the two strands of the DNA double helix together.
   * Binds adjacent polymer chains in **Nylon** and **Kevlar**, endowing them with extraordinary tensile strength.

---

## 4. The Potential Energy Well: The Rosetta Stone of Physical Properties

The shape of the net interatomic potential energy curve $E_N(r)$ directly dictates four major macroscopic engineering properties:

```
               POTENTIAL WELL ANATOMY
  
  Energy E(r)
     ^
     |         /
     |        /        E = 0
  ---+-------+---------------------------> Separation r
     |      / \         
     |     |   \_______  
     |     |     \      
-E_0 +-----+      \____  <-- Well Depth |E_0| = Bonding Energy (Tm)
     |    / \
     |   /   \           <-- Curvature (d^2E/dr^2) = Elastic Modulus (E)
     |  /     \          
     | /       \         <-- Asymmetry = Thermal Expansion (alpha)
     v          r_0 (Equilibrium Spacing)
```

---

### Property 1: Melting Temperature ($T_m$) $\longleftrightarrow$ Well Depth ($E_0$)

* **Physical Logic**: To melt a solid, thermal energy ($k_B T$) must overcome the interatomic bonding forces holding atoms locked in their lattice sites.
* **Rule**: The deeper the potential well ($|E_0|$ is large), the more thermal energy required to liberate the atoms:
  $$T_m \propto |E_0|$$
* **Examples**:
  * Tungsten ($W$): Very deep well ($E_0 \approx 850\text{ kJ/mol}$) $\implies T_m = 3422^\circ\text{C}$.
  * Aluminum ($Al$): Moderate well ($E_0 \approx 330\text{ kJ/mol}$) $\implies T_m = 660^\circ\text{C}$.
  * Mercury ($Hg$): Shallow well ($E_0 \approx 65\text{ kJ/mol}$) $\implies T_m = -39^\circ\text{C}$ (liquid at room temperature).

---

### Property 2: Stiffness & Elastic Modulus ($E$) $\longleftrightarrow$ Well Curvature

* **Physical Logic**: When an engineer loads a beam in tension, the external stress physically pulls atoms slightly away from their equilibrium spacing ($r_0$). The material's resistance to this displacement is its **atomic spring constant ($k_0$)**.
* **Derivation**:
  Near equilibrium ($r \approx r_0$), the net restoring force is approximately linear:
  $$F \approx -k_0 (r - r_0) \implies k_0 = \left.\frac{dF}{dr}\right|_{r_0}$$
  Since $F = -\frac{dE_N}{dr}$, the spring constant is directly the second derivative of the potential energy curve:
  $$k_0 = \left.\frac{d^2 E_N}{dr^2}\right|_{r = r_0}$$
* **Rule**: Young's Modulus $E$ is directly proportional to the **curvature (steepness of the bottom)** of the potential well:
  $$E \propto \left.\frac{d^2 E_N}{dr^2}\right|_{r = r_0}$$
  * A **steep, sharp, narrow well** (like diamond or ceramics) resists separation fiercely $\implies$ **High Elastic Modulus ($E = 300 - 1000\text{ GPa}$)**.
  * A **broad, shallow well** (like lead or polymers) separates easily $\implies$ **Low Elastic Modulus ($E = 1 - 20\text{ GPa}$)**.

---

### Property 3: Thermal Expansion Coefficient ($\alpha_l$) $\longleftrightarrow$ Well Asymmetry

Why do materials expand when heated? Most textbooks state: "atoms vibrate faster." But that alone does not explain expansion! If the potential well were a **perfectly symmetric parabola**, heating would cause atoms to vibrate symmetrically about $r_0$, and the average interatomic distance would **never change** ($\alpha_l = 0$)!

```
     SYMMETRIC WELL                       ASYMMETRIC (REAL) WELL
  (Hypothetical: alpha = 0)                   (Real: alpha > 0)

          |    |                                  |        /
          |    |                                  |       /
        --+----+-- E_3                          --+------+-- E_3  <-- r_mean3 > r_0
         /|    |\                                /|     /
        --+----+-- E_2                          --+----+--   E_2  <-- r_mean2 > r_0
       /  |    |  \                            /  |   /
      ----+----+---- E_1                      ----+--+----   E_1
         r_0                                     r_0  r_mean
  Mean distance is CONSTANT                Mean distance SHIFTS OUTWARD!
```

* **Physical Mechanism**:
  1. The repulsive side of the curve ($E_R \propto 1/r^n$) is exceptionally steep because electron clouds cannot interpenetrate.
  2. The attractive side ($E_A \propto -1/r$) is much gentler and slopes off gradually.
  3. Consequently, the potential well is **strongly asymmetric (anharmonic)**.
  4. As temperature rises, atoms gain vibrational energy ($E_1 \to E_2 \to E_3$). Because the curve is wider on the right than on the left, the **midpoint of the vibration shifts outward** to a larger average interatomic separation ($r_{mean}$).
* **Rule**:
  * Deep, steep wells (strong bonds, high $E_0$) are more symmetric $\implies$ **Low thermal expansion coefficient ($\alpha_l$ is small, e.g. fused silica $\alpha \approx 0.5 \times 10^{-6}\text{ /K}$)**.
  * Shallow, highly skewed wells (weak bonds, low $E_0$) are heavily asymmetric $\implies$ **High thermal expansion coefficient ($\alpha_l$ is large, e.g. polymers $\alpha \approx 100 \times 10^{-6}\text{ /K}$)**.

$$\alpha_l \propto \frac{1}{|E_0|}$$

---

## 5. Master Property-Bonding Correlation Table

| Material | Dominant Bonding | Well Depth $|E_0|$ | Well Curvature | Well Asymmetry | Melting Point ($T_m$) | Modulus ($E$) | Thermal Expansion ($\alpha_l$) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Diamond ($C$)** | Pure Covalent | Enormous | Very Steep | Very Low | $> 3550^\circ\text{C}$ | $1050\text{ GPa}$ | $1.2 \times 10^{-6}\text{ /K}$ |
| **Alumina ($Al_2O_3$)** | Ionic / Covalent | Very Large | Steep | Low | $2072^\circ\text{C}$ | $390\text{ GPa}$ | $8.0 \times 10^{-6}\text{ /K}$ |
| **Tungsten ($W$)** | Strong Metallic | Very Large | Steep | Low | $3422^\circ\text{C}$ | $410\text{ GPa}$ | $4.5 \times 10^{-6}\text{ /K}$ |
| **Aluminum ($Al$)** | Metallic | Moderate | Medium | Medium | $660^\circ\text{C}$ | $69\text{ GPa}$ | $23.1 \times 10^{-6}\text{ /K}$ |
| **Polyethylene ($PE$)**| Secondary (interchain) | Very Small | Shallow | Very High | $135^\circ\text{C}$ | $1.0\text{ GPa}$ | $200 \times 10^{-6}\text{ /K}$ |
