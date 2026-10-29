# MIAE 221: Materials Science
## 2017 Midterm Theory & Past Exam Master Explainer
### Concordia University · Gina Cody School of Engineering and Computer Science

---

## Executive Guide & Theory Exam Strategy

Theory and conceptual questions comprise **$40\%$ to $50\%$ of the total marks** on the MIAE 221 Midterm. Unlike numerical problems where a calculator can be used to recheck steps, theory questions feature carefully designed distractor options designed to trap students who rely on rote memorization without understanding the physical mechanism.

This guide provides an exhaustive pedagogical breakdown of every conceptual question from the **2017 Sample Midterm**, followed by high-yield recurring patterns from historical past papers (Fall 2017 Final, Winter 2026, 2018 Midterm).

---

## Part 1: 2017 Sample Midterm Theory Breakdown (By Chapter)

### Chapter 1: Atomic Structure & Interatomic Bonding

#### Question 1 (2017 Midterm · Q1)
> **Problem Statement**:
> Which of the following substances exhibits the lowest melting temperature, and which bonding mechanism accounts for this behavior?
> - **(A)** Argon ($\text{Ar}$), due to weak van der Waals London dispersion bonds
> - **(B)** Sodium Chloride ($\text{NaCl}$), due to ionic bonding
> - **(C)** Silicon ($\text{Si}$), due to strong directional covalent bonding
> - **(D)** Tungsten ($\text{W}$), due to high-electron-density metallic bonding
> - **(E)** Alumina ($\text{Al}_2\text{O}_3$), due to mixed ionic-covalent bonding

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Argon ($\text{Ar}$) is a noble gas with a stable, fully filled valence octet ($1s^2 2s^2 2p^6 3s^2 3p^6$). Argon atoms cannot form primary chemical bonds (they do not share, donate, or accept valence electrons). Consequently, condensed solid argon is held together exclusively by weak fluctuating induced dipole-dipole attractions (London dispersion secondary van der Waals forces). The bond energy is minute ($\approx 0.1 - 10\ \text{kJ/mol}$), meaning minimal thermal vibrational energy ($k T$) is required to break the lattice. Argon melts at $-189.3^\circ\text{C}$ ($84\ \text{K}$). In contrast, $\text{NaCl}$ ($T_m = 801^\circ\text{C}$), $\text{Si}$ ($T_m = 1414^\circ\text{C}$), and $\text{W}$ ($T_m = 3422^\circ\text{C}$) are held by primary bonds with bond energies ranging from $200$ to $>800\ \text{kJ/mol}$.
- **The Theory Behind It**:
  The melting temperature $T_m$ of any solid directly reflects the depth of its interatomic potential energy well $E_0$. A shallow energy well requires little thermal kinetic energy to shake atoms free from their equilibrium lattice sites.
- **💡 Quick Understanding Tip & Mnemonic**:
  *Noble gases ($\text{He}, \text{Ne}, \text{Ar}, \text{Kr}, \text{Xe}$) = London dispersion secondary bonds only = Rock-bottom melting point near absolute zero!*

---

#### Question 3 (2017 Midterm · Q3)
> **Problem Statement**:
> At the equilibrium interatomic separation distance $r_0$ between two bonded atoms, which of the following thermodynamic and mechanical conditions is satisfied?
> - **(A)** The net interatomic force is zero ($F_N = 0$) and the net potential energy is at its minimum ($E_N = -E_0$)
> - **(B)** The net interatomic force is at its maximum and the potential energy is zero
> - **(C)** The repulsive force is greater than the attractive force to prevent atomic collapse
> - **(D)** The potential energy is positive and the force derivative is zero
> - **(E)** Both attractive and repulsive forces reach their absolute maximum values

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Interatomic force is related to potential energy by the spatial derivative: $F_N(r) = -\frac{dE_N}{dr}$. At equilibrium separation $r_0$, the attractive electrostatic pull exactly equals the repulsive electron-cloud overlap: $F_A(r_0) + F_R(r_0) = 0$. Because $\frac{dE_N}{dr} = 0$ and the curvature $\frac{d^2E_N}{dr^2} > 0$, the potential energy curve reaches its deepest negative trough (the bond energy well, $E_N = -E_0$).
- **The Theory Behind It**:
  If atoms are pushed closer than $r_0$ ($r < r_0$), electron clouds overlap, causing strong Pauli repulsion ($F_N > 0$, pushing them apart). If atoms are pulled apart ($r > r_0$), electrostatic attraction pulls them back ($F_N < 0$). Thus, $r_0$ represents a stable mechanical equilibrium position.
- **💡 Quick Understanding Tip & Mnemonic**:
  *Think of a ball resting at the bottom of a bowl! At the bottom: Slope = Force = 0. Position = Minimum potential energy $E_0$. Curvature of the bowl = Young's modulus $E$!*

---

### Chapter 2: Crystal Structures & Crystallography

#### Question 5 (2017 Midterm · Q5)
> **Problem Statement**:
> In three-dimensional crystallography, all possible periodic arrangements of points in space are classified into how many distinct crystal systems and how many Bravais space lattices?
> - **(A)** 7 crystal systems and 14 Bravais lattices
> - **(B)** 14 crystal systems and 7 Bravais lattices
> - **(C)** 6 crystal systems and 12 Bravais lattices
> - **(D)** 32 point groups and 230 space groups
> - **(E)** 4 crystal systems and 8 Bravais lattices

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Unit cell geometry is classified by the relationships between axial lengths ($a, b, c$) and interaxial angles ($\alpha, \beta, \gamma$). There are exactly **7 crystal systems**: Cubic, Tetragonal, Orthorhombic, Hexagonal, Rhombohedral (Trigonal), Monoclinic, and Triclinic. When lattice centering types (Primitive P, Body-centered I, Face-centered F, Base-centered C) are accounted for, Auguste Bravais proved mathematically that only **14 unique space lattices** can fill 3D space without violating translational and rotational symmetry.
- **💡 Quick Understanding Tip & Mnemonic**:
  *Remember: 7 Days in a Week, 14 Days in a Fortnight! 7 Crystal Systems, 14 Bravais Lattices.*

---

#### Question 6 (2017 Midterm · Q6)
> **Problem Statement**:
> What are the stacking sequences of close-packed atomic planes for the Face-Centered Cubic (FCC) and Hexagonal Close-Packed (HCP) crystal structures, respectively?
> - **(A)** FCC is $ABCABC\dots$ and HCP is $ABABAB\dots$
> - **(B)** FCC is $ABABAB\dots$ and HCP is $ABCABC\dots$
> - **(C)** FCC is $AAAA\dots$ and HCP is $ABABAB\dots$
> - **(D)** FCC is $ABACABAC\dots$ and HCP is $ABCABC\dots$
> - **(E)** Both FCC and HCP have the identical $ABCABC\dots$ stacking sequence

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Both FCC and HCP possess the maximum possible atomic packing factor ($\text{APF} = 0.74$) and coordination number ($CN = 12$). Both are constructed by stacking 2D close-packed hexagonal sheets of spheres.
  - In **HCP**, the atoms of the third layer are placed directly over the atoms of the first layer ($A$), generating a two-layer repeating sequence: $ABABAB\dots$.
  - In **FCC**, the atoms of the third layer are placed over the unoccupied triangular interstitial sites of the first layer ($C$), not repeating until the fourth layer ($A$), generating a three-layer repeating sequence: $ABCABC\dots$.
- **The Theory Behind It**:
  The close-packed planes in FCC are the $\{111\}$ family; in HCP they are the basal $\{0001\}$ planes. In FCC, four non-parallel $\{111\}$ planes intersect in 3D, providing 12 independent slip systems and yielding high ductility. In HCP, basal planes are parallel with only 3 coplanar slip systems at room temperature, making HCP metals ($\text{Mg}, \text{Zn}$) significantly more brittle.
- **💡 Quick Understanding Tip & Mnemonic**:
  - *FCC has 3 letters $\implies$ 3 repeating layers: $ABCABC\dots$*
  - *HCP has 2 syllables (Hex-Pack) $\implies$ 2 repeating layers: $ABABAB\dots$*

---

#### Question 8 (2017 Midterm · Q8)
> **Problem Statement**:
> Regarding crystallographic directionality of properties, a single crystal is generally __________, whereas a fine-grained polycrystalline material with randomly oriented grains is generally __________:
> - **(A)** Anisotropic; Isotropic
> - **(B)** Isotropic; Anisotropic
> - **(C)** Amorphous; Crystalline
> - **(D)** Isotropic; Isotropic
> - **(E)** Homogeneous; Heterogeneous

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  In a **single crystal**, atoms lie on an uninterrupted, continuous 3D periodic lattice. Properties such as elastic modulus $E$, electrical resistivity, and refractive index depend on the direction of measurement because interatomic spacing and linear density differ along $[100]$, $[110]$, and $[111]$ (this directionality is **ANISOTROPY**). In a **polycrystalline material**, millions of microscopic single-crystal grains are randomly oriented in 3D space; their directional variations average out, creating macroscopic **ISOTROPY**.
- **💡 Quick Understanding Tip (from handwritten notes)**:
  *Single crystal = 1 grain $\implies$ ANISOTROPIC (direction dependent).*
  *Polycrystal = many random grains $\implies$ ISOTROPIC (same in all directions).*

---

#### Question 11 (2017 Midterm · Q11)
> **Problem Statement**:
> A crystallographic plane within a cubic unit cell intersects the $x$-axis at 1, the $y$-axis at 2, and is parallel to the $z$-axis. What are its Miller indices $(hkl)$?
> - **(A)** $(210)$
> - **(B)** $(120)$
> - **(C)** $(1\ \frac{1}{2}\ 0)$
> - **(D)** $(21\infty)$
> - **(E)** $(012)$

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  1. **Intercepts**: $x = 1$, $y = 2$, $z = \infty$ (parallel to an axis means it intercepts at $\infty$).
  2. **Reciprocals**: $1/1 = 1$, $1/2 = 1/2$, $1/\infty = 0$.
  3. **Clear Fractions**: Multiply by the common denominator ($2$):
     $1 \times 2 = 2$, $\frac{1}{2} \times 2 = 1$, $0 \times 2 = 0$.
  4. **Enclose**: $(210)$.
  Option C is a trap: Miller indices must NEVER contain fractions.
- **💡 Quick Understanding Tip (from handwritten notes)**:
  *Parallel to axis $\implies$ Intercept $= \infty \implies$ Index $= 0$. Always take reciprocal and clear fractions!*

---

#### Question 14 (2017 Midterm · Q14)
> **Problem Statement**:
> Under what physical condition does constructive interference occur when monochromatic X-rays of wavelength $\lambda$ scatter from parallel atomic planes separated by spacing $d_{hkl}$?
> - **(A)** When the path length difference between scattered waves is an integer multiple of the wavelength: $n\lambda = 2 d_{hkl} \sin\theta$
> - **(B)** When the angle of incidence equals the critical angle: $\sin\theta_c = n_2/n_1$
> - **(C)** When the interplanar spacing equals the X-ray wavelength: $d_{hkl} = \lambda$
> - **(D)** When the path length difference is a half-integer multiple: $(n + 1/2)\lambda = 2 d_{hkl} \cos\theta$
> - **(E)** When the diffraction angle $2\theta$ is exactly $90^\circ$

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  X-rays penetrate the crystal lattice and scatter elastically off electrons in parallel lattice planes. Rays penetrating to the second plane travel an additional path distance equal to $2 d_{hkl} \sin\theta$. For constructive interference (where wave crests reinforce to create a sharp diffraction intensity peak), this extra path distance must equal an exact integer number of whole wavelengths $n\lambda$. At all other angles, the scattered waves are out of phase and destructively cancel each other out.
- **💡 Quick Understanding Tip & Trap Alert**:
  *The diffractometer measures $2\theta$! Always divide the peak angle by 2 to get $\theta$ before calculating $\sin\theta$!*

---

### Chapter 3: Imperfections in Solids

#### Question 15 (2017 Midterm · Q15)
> **Problem Statement**:
> Why are atomic vacancies classified as thermodynamic equilibrium defects that are intrinsically present in all crystalline materials above absolute zero ($T > 0\ \text{K}$)?
> - **(A)** Because introducing vacancies increases configurational entropy ($\Delta S$), which minimizes total Gibbs free energy ($\Delta G = \Delta H - T\Delta S < 0$)
> - **(B)** Because vacancies reduce the enthalpy of the crystal by releasing internal bonding strain
> - **(C)** Because vacancy formation energy $Q_v$ is negative at elevated temperatures
> - **(D)** Because dislocations constantly generate vacancies through mechanical work
> - **(E)** Because vacancies prevent grain boundary migration

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Creating a vacancy requires breaking atomic bonds and displacing an atom, which costs enthalpy ($\Delta H_v > 0$). However, distributing vacant sites randomly among $N$ lattice positions dramatically increases the number of available microstates $W$, creating a positive configurational entropy of mixing ($\Delta S = k \ln W > 0$). In the Gibbs free energy relationship $G = H - TS$, the $-T\Delta S$ term dominates at small vacancy concentrations, driving $\Delta G$ negative. The equilibrium vacancy concentration $N_v/N = \exp(-Q_v/kT)$ corresponds to the thermodynamic minimum where $dG/dN_v = 0$.
- **The Theory Behind It**:
  Dislocations, grain boundaries, and voids are NOT equilibrium defects (their formation enthalpy is too high and entropy gain too small; annealing always drives them out). Vacancies are the ONLY defects guaranteed by the second law of thermodynamics to exist at thermal equilibrium.
- **💡 Quick Understanding Tip & Mnemonic**:
  *Why do vacancies exist? ENTROPY! Thermal randomness favors disorder at any temperature above $0\ \text{K}$.*

---

#### Question 17 (2017 Midterm · Q17)
> **Problem Statement**:
> According to the Hume-Rothery rules, which of the following is a necessary requirement for two metallic elements to exhibit complete (unlimited) substitutional solid solubility across all compositions?
> - **(A)** The difference in atomic radii of the two elements must not exceed $\pm 15\%$
> - **(B)** The two metals must possess different crystal structures to stabilize the mixture
> - **(C)** The electronegativity difference between the elements must be as large as possible
> - **(D)** The solute metal must have a lower valence than the solvent metal
> - **(E)** The melting point of the solute must be twice that of the solvent

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  For complete substitutional solid solubility (such as $\text{Cu}-\text{Ni}$), Hume-Rothery established 4 mandatory conditions:
  1. **Atomic Size Factor**: $\Delta R = \frac{|R_{\text{solute}} - R_{\text{solvent}}|}{R_{\text{solvent}}} \le 15\%$.
  2. **Crystal Structure Rule**: Both metals must have the same crystal structure (e.g. both FCC for $\text{Cu}$ and $\text{Ni}$).
  3. **Electronegativity Rule**: Small difference in electronegativity (otherwise an intermetallic compound forms).
  4. **Valency Rule**: A metal dissolves another metal of higher valency more readily than one of lower valency.
- **💡 Quick Understanding Tip**:
  *Hume-Rothery Size Rule: $\Delta R \le 15\%$. If size difference exceeds $15\%$, lattice strain forces phase separation!*

---

#### Question 18 (2017 Midterm · Q18)
> **Problem Statement**:
> What is the geometric relationship between the Burgers vector $\vec{b}$ and the dislocation line vector $\vec{t}$ for a pure screw dislocation and a pure edge dislocation, respectively?
> - **(A)** Screw: $\vec{b}$ is parallel to $\vec{t}$; Edge: $\vec{b}$ is perpendicular to $\vec{t}$
> - **(B)** Screw: $\vec{b}$ is perpendicular to $\vec{t}$; Edge: $\vec{b}$ is parallel to $\vec{t}$
> - **(C)** Both screw and edge dislocations have $\vec{b}$ parallel to $\vec{t}$
> - **(D)** Both screw and edge dislocations have $\vec{b}$ perpendicular to $\vec{t}$
> - **(E)** Screw: $\vec{b}$ is at $45^\circ$ to $\vec{t}$; Edge: $\vec{b}$ is parallel to $\vec{t}$

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  - In an **edge dislocation**, an extra half-plane of atoms is inserted into the lattice; the displacement $\vec{b}$ is **perpendicular ($\perp$)** to the dislocation line $\vec{t}$.
  - In a **screw dislocation**, the crystal lattice is sheared around the line like a spiral staircase / helical ramp; the displacement $\vec{b}$ is **parallel ($\parallel$)** to the dislocation line $\vec{t}$.
  - In a **mixed dislocation**, $\vec{b}$ and $\vec{t}$ are neither perpendicular nor parallel.
- **💡 Quick Understanding Tip & Mnemonic (from handwritten notes)**:
  *EDGE = Perpendicular ($\perp$, like a sharp table edge).*
  *SCREW = Parallel ($\parallel$, turns along its axis).*

---

#### Question 20 (2017 Midterm · Q20)
> **Problem Statement**:
> Why do grain boundaries possess higher energy per unit area than the interior of crystalline grains, and how does this affect atomic diffusion and chemical reactivity?
> - **(A)** Grain boundaries have less dense atomic packing and disrupted, strained interatomic bonds; this makes them preferred paths for rapid diffusion and preferential sites for chemical corrosion
> - **(B)** Grain boundaries have higher atomic packing factor than grain interiors, preventing diffusion
> - **(C)** Grain boundaries contain perfect metallic bonds that reflect diffusing atoms back into the grains
> - **(D)** Grain boundary energy is zero because grains share common lattice planes
> - **(E)** Grain boundaries only exist in single crystals, where they decrease reactivity

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Grain boundaries are 2D interfacial planar defects separating crystalline grains of different spatial orientations. Because of crystallographic mismatch, atoms at the boundary cannot achieve their optimal coordination number or equilibrium bond lengths. This disorder creates interfacial energy ($\gamma_{gb}$). The open atomic spacing provides a "short-circuit" highway for rapid diffusion ($D_{gb} \gg D_{\text{bulk}}$), and the higher chemical potential makes grain boundaries etch and corrode much faster than bulk grains.
- **💡 Quick Understanding Tip & Mental Model**:
  *Grain boundaries are atomic traffic jams with loose gaps. Atoms diffuse faster through gaps, and corrosive chemicals attack the high-energy broken bonds first!*

---

### Chapter 4: Diffusion

#### Question 22 (2017 Midterm · Q22)
> **Problem Statement**:
> In mass diffusion through a solid, what is the defining mathematical condition for steady-state diffusion, and which law governs it?
> - **(A)** The concentration profile does not change with time at any position ($\partial C / \partial t = 0$), governed by Fick’s First Law: $J = -D \frac{dC}{dx}$
> - **(B)** The concentration gradient is zero everywhere, governed by Fick’s Second Law
> - **(C)** The diffusion flux $J$ changes constantly with time, governed by Fick’s First Law
> - **(D)** The diffusion coefficient $D$ becomes infinite at the surface
> - **(E)** Atoms stop jumping between lattice sites

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Steady state means that at any spatial position $x$, the concentration $C$ remains completely constant over time: $\frac{\partial C}{\partial t} = 0$. The mass entering a slice of material equals the mass exiting ($J_{\text{in}} = J_{\text{out}}$). Flux $J$ is constant across the entire membrane and is directly proportional to the linear concentration gradient, described by **Fick’s First Law**: $J = -D \frac{dC}{dx}$. In non-steady state, concentration varies with both time and position ($\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$, **Fick’s Second Law**).
- **💡 Quick Understanding Tip**:
  *Steady State = No change with time ($\partial C/\partial t = 0$, straight line slope, Fick 1). Non-Steady State = Profile evolves over time (curved profile, erf function, Fick 2).*

---

#### Question 23 (2017 Midterm · Q23)
> **Problem Statement**:
> Why is interstitial diffusion (such as carbon diffusing in iron) typically several orders of magnitude faster than vacancy/substitutional diffusion (such as copper diffusing in nickel) at the same temperature?
> - **(A)** Interstitial solute atoms are significantly smaller than host atoms, and there are far more unoccupied interstitial sites than lattice vacancies
> - **(B)** Vacancy diffusion requires high pressures while interstitial diffusion does not
> - **(C)** Interstitial atoms do not need any activation energy to jump
> - **(D)** Substitutional atoms have zero mass and therefore cannot move
> - **(E)** Vacancy diffusion only occurs in liquid metals

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  For an atom to diffuse via the vacancy mechanism, two events must coincide: 1) a vacant site must be adjacent to the atom, and 2) the atom must have sufficient thermal energy to break bonds and squeeze through surrounding host atoms. Since equilibrium vacancy concentration is small ($\sim 10^{-5}$ near melting), finding an open site is rare. In contrast, small interstitial atoms ($\text{C}, \text{H}, \text{N}, \text{O}$) sit in interstitial voids; nearly ALL adjacent interstitial sites are permanently empty, and smaller atomic radii produce lower activation barrier energies ($Q_{\text{interstitial}} \ll Q_{\text{substitutional}}$).
- **💡 Quick Understanding Tip & Mental Model**:
  *Interstitial = small mouse scurrying through empty hallways. Vacancy = giant person trying to move in a packed crowd where someone must leave before anyone can step forward!*

---

#### Question 25 (2017 Midterm · Q25)
> **Problem Statement**:
> How does temperature affect the diffusion coefficient $D$, and what is the physical meaning of the activation energy $Q_d$ in the Arrhenius equation $D = D_0 \exp(-Q_d / RT)$?
> - **(A)** $D$ increases exponentially with temperature; $Q_d$ represents the thermal energy barrier that an atom must overcome to jump between adjacent positions
> - **(B)** $D$ decreases linearly with temperature; $Q_d$ is the heat released during cooling
> - **(C)** $D$ is independent of temperature for crystalline metals
> - **(D)** $D$ doubles for every $10^\circ\text{C}$ increase, regardless of material
> - **(E)** $Q_d$ is the melting point of the solute in Kelvin

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Atomic jump rate is governed by Maxwell-Boltzmann statistics: the probability of an atom possessing thermal vibrational energy equal to or greater than the barrier height $Q_d$ is proportional to $\exp(-Q_d / RT)$. Raising temperature increases the population of high-energy vibrating atoms exponentially. A plot of $\ln D$ versus $1/T$ yields a straight line with slope $-Q_d / R$.
- **💡 Quick Understanding Tip**:
  *Arrhenius Slope: Plot $\ln D$ vs $1/T$. Slope $= -\frac{Q_d}{R}$. Steeper slope = higher activation energy = diffusivity changes more drastically with temperature!*

---

### Chapter 5: Mechanical Properties

#### Question 27 (2017 Midterm · Q27)
> **Problem Statement**:
> For metallic materials that exhibit a continuous transition from elastic to plastic deformation without a distinct yield point drop, the yield strength $\sigma_y$ is standardly specified by:
> - **(A)** The 0.002 (0.2%) plastic strain offset method
> - **(B)** The ultimate tensile strength (UTS) peak point
> - **(C)** The fracture stress point where the specimen breaks
> - **(D)** The point where true strain equals engineering strain
> - **(E)** The 0.05 (5%) total strain method

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Most metals (like aluminum, copper, and austenitic stainless steels) do not exhibit a sharp upper and lower yield point. To establish a reproducible engineering yield strength, ASTM standardizes the offset method: on the engineering stress-strain curve, construct a straight line starting at $\varepsilon = 0.002$ ($0.2\%$) on the horizontal axis, parallel to the initial linear elastic slope (modulus $E$). The stress at the intersection of this offset line with the stress-strain curve is defined as the $0.2\%$ offset yield strength $\sigma_y$.
- **💡 Quick Understanding Tip**:
  *0.002 Offset Rule: Draw parallel to elastic slope from $\varepsilon = 0.002$ ($0.2\%$). The intersection is $\sigma_y$!*

---

#### Question 28 (2017 Midterm · Q28)
> **Problem Statement**:
> At the microscopic atomic level, what distinguishes reversible elastic deformation from irreversible plastic deformation in a metallic crystal?
> - **(A)** Elastic deformation involves temporary stretching of interatomic bonds without breaking them; plastic deformation involves permanent movement of dislocations and breaking/re-forming of bonds
> - **(B)** Elastic deformation creates new grains; plastic deformation destroys vacancies
> - **(C)** Elastic deformation occurs only under compression; plastic deformation occurs only under tension
> - **(D)** Elastic deformation breaks covalent bonds; plastic deformation stretches metallic bonds
> - **(E)** Elastic deformation increases dislocation density; plastic deformation reduces it

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  In the elastic regime ($\sigma < \sigma_y$), external force pulls atoms slightly away from their equilibrium spacing $r_0$ within their interatomic potential energy wells. When the force is released, interatomic bonding forces pull every atom back to its original lattice site (zero permanent strain). In plastic deformation ($\sigma \ge \sigma_y$), applied shear stresses cause dislocations to glide across slip planes; planes of atoms slide past each other, breaking bonds with old neighbors and forming bonds with new neighbors, permanently altering the geometry of the crystal.
- **The Theory Behind It**:
  Because elastic deformation only stretches bonds, Young's modulus $E$ is an structure-insensitive property (cannot be changed by heat treatment or cold work). Yield strength $\sigma_y$ depends directly on dislocation mobility, making it a highly structure-sensitive property.
- **💡 Quick Understanding Tip & Mental Model**:
  *Elastic = bond stretching (reversible like a spring, slope $E$). Plastic = dislocation slip (permanent sliding of atomic planes).*

---

#### Question 30 (2017 Midterm · Q30)
> **Problem Statement**:
> For the vast majority of isotropic polycrystalline engineering metals and alloys, what is the typical range of Poisson’s ratio $\nu$?
> - **(A)** 0.25 to 0.35
> - **(B)** 0.00 to 0.10
> - **(C)** 0.50 to 0.65
> - **(D)** 0.90 to 1.00
> - **(E)** -0.20 to -0.35

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Poisson’s ratio $\nu = -\varepsilon_{\text{lateral}} / \varepsilon_{\text{axial}}$ characterizes transverse contraction during uniaxial tension. For an ideal incompressible material (where volume is strictly conserved during elastic deformation), $\nu = 0.50$ (common in rubber). In metals, elastic stretching involves slight volume expansion ($\Delta V/V = \varepsilon(1 - 2\nu) > 0$), resulting in values tightly clustered between $0.25$ and $0.35$ (for example: steel $\approx 0.30$, aluminum $\approx 0.33$, titanium $\approx 0.34$).
- **💡 Quick Understanding Tip**:
  *For metals, always expect $\nu \approx 1/3 \approx 0.33$. If your calculation gives $0.05$ or $0.85$, recheck your math!*

---

#### Question 33 (2017 Midterm · Q33)
> **Problem Statement**:
> On an engineering stress-strain curve, the area under the linear elastic portion up to the yield point represents the __________, whereas the total area under the entire curve up to fracture represents the __________:
> - **(A)** Modulus of Resilience ($U_r$); Toughness
> - **(B)** Toughness; Modulus of Resilience ($U_r$)$
> - **(C)** Ductility; Hardness
> - **(D)** Modulus of Elasticity ($E$); Tensile Strength
> - **(E)** Plastic work; Elastic recovery

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Modulus of resilience $U_r = \int_0^{\varepsilon_y} \sigma d\varepsilon = \frac{\sigma_y^2}{2E}$ is the capacity of a material to store elastic strain energy per unit volume without permanent deformation (crucial for springs and shock absorbers). Toughness is the total mechanical energy per unit volume that a material can absorb before catastrophic fracture occurs; it requires a combination of BOTH high strength and high ductility. A ceramic has high strength but near-zero ductility, giving it very low toughness.
- **💡 Quick Understanding Tip**:
  *Small triangle under yield point = Resilience (springiness). Entire curve all the way to fracture = Toughness (resistance to breaking)!*

---

### Chapter 6: Dislocations & Strengthening Mechanisms

#### Question 39 (2017 Midterm · Q39)
> **Problem Statement**:
> What constitutes the primary slip system for Face-Centered Cubic (FCC) metals, and how many independent slip systems does this combination yield?
> - **(A)** $\{111\}$ close-packed planes and $\langle 110 \rangle$ close-packed directions, yielding 12 slip systems
> - **(B)** $\{110\}$ planes and $\langle 111 \rangle$ directions, yielding 12 slip systems
> - **(C)** $\{100\}$ planes and $\langle 100 \rangle$ directions, yielding 6 slip systems
> - **(D)** $\{0001\}$ basal planes and $\langle 11\bar{2}0 \rangle$ directions, yielding 3 slip systems
> - **(E)** $\{111\}$ planes and $\langle 111 \rangle$ directions, yielding 8 slip systems

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  Dislocation glide occurs preferentially on planes with the highest planar atomic density (greatest interplanar spacing $d_{hkl}$, requiring lowest critical shear stress) and in directions with the highest linear atomic density (shortest Burgers vector $\vec{b}$, minimizing dislocation line energy $E \propto G b^2$). In FCC, the close-packed planes are the 4 octahedral $\{111\}$ planes. On each $\{111\}$ plane, there are 3 close-packed $\langle 110 \rangle$ directions. Multiplying gives $4 \times 3 = 12$ independent slip systems.
- **The Theory Behind It**:
  Because FCC has 12 slip systems oriented symmetrically throughout 3D space, several slip systems are always favorably oriented relative to any applied stress (Schmid factor $m \approx 0.4 - 0.5$). This makes FCC metals ($\text{Cu}, \text{Al}, \text{Ni}, \text{Au}$) exceptionally ductile even at cryogenic temperatures, preventing brittle cleavage fracture.
- **💡 Quick Understanding Tip (from handwritten notes)**:
  *FCC Slip Rule: $\{111\}\langle 110 \rangle = 4\text{ planes} \times 3\text{ directions} = 12\text{ systems}$. Highest planar density plane + highest linear density direction!*

---

#### Question 40 (2017 Midterm · Q40)
> **Problem Statement**:
> According to Schmid’s Law ($\tau_R = \sigma \cos\phi \cos\lambda$), what are the angles $\phi$ (between tensile axis and slip plane normal) and $\lambda$ (between tensile axis and slip direction) that maximize the resolved shear stress $\tau_R$, and what is that maximum value?
> - **(A)** $\phi = \lambda = 45^\circ$, giving $\tau_{R,\max} = 0.5\sigma$ (meaning yield occurs at minimum applied stress $\sigma_y = 2\tau_{\text{CRSS}}$)
> - **(B)** $\phi = 0^\circ, \lambda = 90^\circ$, giving $\tau_{R,\max} = \sigma$
> - **(C)** $\phi = \lambda = 90^\circ$, giving $\tau_{R,\max} = 0$
> - **(D)** $\phi = 30^\circ, \lambda = 60^\circ$, giving $\tau_{R,\max} = 0.866\sigma$
> - **(E)** $\phi = \lambda = 0^\circ$, giving $\tau_{R,\max} = \sigma$

- **Correct Answer**: **(A)**
- **Pedagogical Explanation**:
  The Schmid factor is $m = \cos\phi \cos\lambda$. Because $\phi$ and $\lambda$ are geometric angles in 3D space, their sum must satisfy $\phi + \lambda \ge 90^\circ$. The product $\cos\phi \cos\lambda$ attains its absolute mathematical maximum when $\phi = \lambda = 45^\circ$, where $\cos 45^\circ \cos 45^\circ = (1/\sqrt{2})(1/\sqrt{2}) = 1/2 = 0.5$. Thus, $\tau_{R,\max} = 0.5\sigma$. When $\tau_R$ reaches $\tau_{\text{CRSS}}$, the single crystal yields. The minimum tensile stress required to cause yielding is therefore $\sigma_y = \tau_{\text{CRSS}} / 0.5 = 2\tau_{\text{CRSS}}$.
- **The Theory Behind It**:
  If the tensile axis is perpendicular to the slip plane ($\phi = 0^\circ \implies \lambda = 90^\circ$) or parallel to the slip plane ($\phi = 90^\circ$), the Schmid factor is $\cos 90^\circ = 0$, meaning resolved shear stress is zero and no slip can occur regardless of how high the tensile force is!
- **💡 Golden Schmid Rule**:
  *Max shear is always at $45^\circ$! $m_{\max} = 0.5$. Minimum yield stress is $\sigma_y = 2\tau_{\text{CRSS}}$. If either angle is $90^\circ$, shear stress is ZERO!*

---

## Part 2: High-Yield Recurring Theory Highlights from All Past Papers

### Pattern 1: Structure of Amorphous Materials & Glasses
> **Question**: Which statement is strictly TRUE regarding non-crystalline (amorphous) materials like silicate glasses?
- **Correct Answer**: *Amorphous materials have only short-range atomic order, have no grains, and NEVER possess grain boundaries (though they may contain physical voids).*
- **Theory & Tip (from user notes)**:
  *Amorphous $\implies$ NO grains $\implies$ NO grain boundaries. Can have voids, but NEVER grain boundaries! Amorphous solids lack periodic crystalline slip planes, which is why glass cannot deform by dislocation glide and is inherently brittle at room temperature.*

---

### Pattern 2: Polymorphism vs. Allotropy vs. Polycrystalline
> **Question**: What is the difference between polycrystalline, polymorphism, and allotropy?
- **Correct Answer**:
  - **Polycrystalline**: Many grains having the **SAME** crystal structure in different 3D orientations.
  - **Polymorphism**: The ability of a compound or material to exist in **MORE THAN ONE** crystal structure depending on temperature and pressure.
  - **Allotropy**: Polymorphism specifically occurring in a **PURE ELEMENTAL SOLID** (e.g. Iron $\alpha$-BCC to $\gamma$-FCC at $912^\circ\text{C}$; Carbon as graphite vs diamond).
- **Theory & Tip (from user notes)**:
  *Poly-crystal = many grains. Poly-morph = many structures (crystal forms at different $T, P$)!*

---

### Pattern 3: Universal Principle of Metallic Strengthening
> **Question**: How do solid-solution strengthening, cold work (strain hardening), grain size reduction, and precipitation hardening increase yield strength?
- **Correct Answer**:
  *Every commercial metallic strengthening mechanism works by restricting, pinning, or impeding the motion of dislocations.*
- **The 4 Classic Strengthening Mechanisms**:
  1. **Grain Boundary Strengthening (Hall-Petch)**: $\sigma_y = \sigma_0 + k_y d^{-1/2}$. Grain boundaries act as atomic barriers that stop slip dislocations from propagating into adjacent misoriented grains.
  2. **Solid-Solution Strengthening**: Solute atoms create localized tensile or compressive lattice strain fields that attract and pin dislocation strain fields.
  3. **Cold Working / Strain Hardening**: Plastic deformation multiplies dislocation density ($\rho$ rises from $10^6$ to $10^{12}\ \text{cm}^{-2}$), creating tangled dislocation forests that block further glide.
  4. **Precipitation Hardening**: Hard secondary phase precipitates act as physical pins that force dislocations to cut through or bow around them (Orowan looping).
- **💡 Golden Metallurgy Rule**:
  *Strength = Dislocation Resistance! If dislocations glide easily $\implies$ soft & ductile. If dislocations are blocked $\implies$ strong & hard!*
