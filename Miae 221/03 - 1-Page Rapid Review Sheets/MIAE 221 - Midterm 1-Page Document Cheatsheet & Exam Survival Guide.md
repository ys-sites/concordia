# MIAE 221 · Materials Science & Engineering
## Midterm 1-Page Document Cheatsheet & Exam Survival Guide
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering**  
*Curriculum Grounded in Callister (Chapters 1–7.4) & Lecture Modules 1–12 (Drs. Mamoun Medraj & Martin Pugh)*

---

### 1. Bonding, Potential Energy Wells & Physical Property Correlations
* **Net Force & Equilibrium Spacing ($r_0$)**: $F_N(r) = F_A(r) + F_R(r) = 0$ at $r = r_0$. Net interatomic potential energy: $E_N(r) = \int F_N dr = E_A(r) + E_R(r)$.
* **Potential Energy Well Depth ($E_0$)**:
  * **Melting Temperature ($T_m$)**: Deeper energy trough $E_0 \implies$ higher bond energy $\implies$ higher $T_m$ ($E_0 \propto T_m$).
  * **Modulus of Elasticity ($E$)**: Curvature at trough minimum: $E \propto \left(\frac{d^2 E_N}{dr^2}\right)_{r_0} = \left(\frac{d F_N}{dr}\right)_{r_0}$. Steeper slope $\implies$ stiffer material.
  * **Thermal Expansion ($\alpha_L$)**: Governed by the **asymmetry** of the potential energy well. Highly symmetric well $\implies$ lower $\alpha_L$. Ceramics (deep, symmetric) have much lower $\alpha_L$ than polymers.
* **Primary Bonding Types**:
  * **Ionic**: Electron transfer between electropositive metal and electronegative nonmetal; nondirectional; high $E_0$ and $T_m$; brittle; electrical insulator.
  * **Covalent**: Electron sharing between atoms with small electronegativity differences; **directional** (fixed bond angles); diamond, polymers (chain backbone).
  * **Metallic**: Positive ion cores surrounded by a delocalized "sea of electrons"; nondirectional; good electrical/thermal conductors; ductile (slip without bond fracture).
* **Secondary (van der Waals & Hydrogen) Bonding**:
  * Dipole interactions (permanent or fluctuating). **Hydrogen bonding** (H bonded to F, O, or N) is the strongest secondary bond ($E \sim 50\text{ kJ/mol}$). Holds adjacent polymer chains together.

---

### 2. Crystal Lattices, Unit Cell Geometry & Density
| Crystal Structure | Coordinate Number ($CN$) | Atom Count ($n$) | Lattice Parameter $a(R)$ | Atomic Packing Factor ($APF$) | Close-Packed Direction | Close-Packed Plane |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **FCC** (Cu, Al, Ni, Au) | $12$ | $4$ | $a = 2R\sqrt{2}$ | $0.74$ | $\langle 110 \rangle$ | $\{111\}$ |
| **BCC** ($\alpha$-Fe, Cr, Mo, W) | $8$ | $2$ | $a = \frac{4R}{\sqrt{3}}$ | $0.68$ | $\langle 111 \rangle$ | $\{110\}$ (densest) |
| **HCP** (Ti, Mg, Zn, Co) | $12$ | $6$ | $a = 2R, \; c/a = 1.633$ | $0.74$ | $\langle 11\bar{2}0 \rangle$ | $(0001)$ (basal) |

* **Theoretical Density Formula**:
  $$\rho = \frac{n \cdot A}{V_c \cdot N_A} \quad \left[\text{g/cm}^3\right]$$
  Where $n$ = atoms/unit cell, $A$ = atomic weight ($\text{g/mol}$), $V_c$ = unit cell volume ($a^3$ for cubic), and $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$.
* **Stacking Sequences**:
  * **FCC**: $ABCABC\dots$ along $[111]$ direction.
  * **HCP**: $ABABAB\dots$ along $[0001]$ direction.

---

### 3. Crystallographic Directions, Planes & Miller Indices
* **Directions $[uvw]$ (Square Brackets)**:
  1. Position vector tail at coordinate origin $(0, 0, 0)$ (shift origin if vector has negative components).
  2. Read projection coordinates of vector head $(x_1, y_1, z_1)$ in terms of unit cell dimensions $a, b, c$.
  3. Clear fractions to achieve the smallest integer triad: $[uvw]$. Negative numbers carry an overbar: $[\bar{1}20]$.
  4. Family of equivalent directions: $\langle uvw \rangle$.
* **Planes $(hkl)$ (Round Parentheses)**:
  1. **Crucial Rule**: The plane must **NEVER** pass through the chosen origin. If it does, translate the origin to an adjacent unit cell corner.
  2. Determine axial intercepts in units of $a, b, c$: $(A, B, C)$. (If plane is parallel to an axis, intercept = $\infty$).
  3. Take the **reciprocals** of intercepts: $(1/A, 1/B, 1/C)$. Reciprocal of $\infty$ is $0$.
  4. Clear fractions to smallest integers: $(hkl)$. Negative intercepts carry an overbar: $(\bar{1}10)$.
  5. Family of equivalent planes: $\{hkl\}$.
* **Hexagonal Miller-Bravais System**:
  * 4 axes: $a_1, a_2, a_3$ (at $120^\circ$) and $z$.
  * Planar indices $(hkil)$ where index $i$ must always satisfy: **$i = -(h + k)$**.
  * Direction indices $[uvtw]$ satisfy: **$t = -(u + v)$**. Conversion from 3-axis $[u'v'w']$: $u = \frac{1}{3}(2u' - v')$, $v = \frac{1}{3}(2v' - u')$, $w = w'$.

---

### 4. Linear & Planar Densities, X-Ray Diffraction (XRD) & Bragg’s Law
* **Linear Density ($LD$)**:
  $$LD = \frac{\text{Number of atomic diameters centered along vector line}}{\text{Length of direction vector } L} \quad \left[\text{atoms/nm}\right]$$
* **Planar Density ($PD$)**:
  $$PD = \frac{\text{Number of atomic 2D circles centered on plane}}{\text{Area of plane } A} \quad \left[\text{atoms/nm}^2\right]$$
* **Bragg’s Law of Diffraction**:
  $$n\lambda = 2 d_{hkl} \sin\theta$$
  Where $n$ = order of reflection (usually $1$), $\lambda$ = X-ray wavelength, $\theta$ = diffraction (Bragg) angle, and $d_{hkl}$ = interplanar spacing.
* **Cubic Interplanar Spacing ($d_{hkl}$)**:
  $$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$
* **Diffraction Selection Rules (Systematic Absences)**:
  * **BCC**: Diffraction peaks occur **ONLY** when the sum of indices is even: $h + k + l = 2n$ (Allowed: $(110), (200), (211), (220)$; Forbidden: $(100), (111), (210)$).
  * **FCC**: Diffraction peaks occur **ONLY** when $h, k, l$ are all unmixed (either **all odd** or **all even**): (Allowed: $(111), (200), (220), (311)$; Forbidden: $(110), (210), (211)$).

---

### 5. Imperfections in Solids & Hume-Rothery Rules
* **Point Defects**:
  * **Vacancies**: Unoccupied atomic lattice sites. Equilibrium concentration follows Arrhenius temperature dependence:
    $$N_v = N \exp\left(-\frac{Q_v}{kT}\right) \quad \text{or} \quad N_v = N \exp\left(-\frac{Q_v}{RT}\right)$$
    Where $N = \frac{\rho N_A}{A}$ is the total number of atomic sites, $Q_v$ is vacancy formation activation energy, and $k = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$.
  * **Self-Interstitials**: Host atom squeezed into a small interstitial void; creates severe localized lattice distortion; concentration is extremely low in metals.
* **Substitutional vs. Interstitial Solid Solutions**:
  * **Hume-Rothery Rules for Complete Solid Solubility (e.g., Cu-Ni system)**:
    1. **Atomic Size Factor**: Radius difference $|\Delta r| = \frac{|r_{\text{solute}} - r_{\text{solvent}}|}{r_{\text{solvent}}} \times 100\% < 15\%$.
    2. **Crystal Structure**: Must possess identical crystal structure (e.g., Cu is FCC and Ni is FCC).
    3. **Electronegativity Difference**: Electronegativities must be comparable (otherwise an intermetallic compound forms rather than a solid solution).
    4. **Valency**: A metal dissolves another metal of higher valency more readily than one of lower valency.

---

### 6. Dislocations, Slip Systems & Strengthening Mechanisms
* **Dislocation Types**:
  * **Edge Dislocation**: Extra half-plane of atoms inserted into the lattice. Burgers vector $\vec{b}$ is strictly **perpendicular** ($\perp$) to the dislocation line.
  * **Screw Dislocation**: Helical/spiral ramp lattice distortion produced by shear stress. Burgers vector $\vec{b}$ is strictly **parallel** ($\parallel$) to the dislocation line.
  * **Mixed Dislocation**: Possesses both edge and screw character. Burgers vector $\vec{b}$ is neither $\perp$ nor $\parallel$ to the dislocation line, but maintains constant magnitude and direction everywhere along its length.
* **Slip Systems**:
  * A slip system consists of a **close-packed plane** and a **close-packed direction** (directions of highest linear density).
  * **FCC**: $\{111\}\langle 110 \rangle \implies 4 \text{ planes} \times 3 \text{ directions} = \mathbf{12} \text{ slip systems}$. High ductility.
  * **BCC**: $\{110\}\langle 111 \rangle \implies 6 \text{ planes} \times 2 \text{ directions} = 12 \text{ systems}$ (also $\{211\}$ and $\{321\}$, total 48 systems). High strength, moderate ductility.
* **Resolved Shear Stress (Schmid’s Law)**:
  $$\tau_R = \sigma \cos\phi \cos\lambda$$
  Where $\sigma$ is applied tensile stress, $\phi$ is angle between tensile axis and plane normal, and $\lambda$ is angle between tensile axis and slip direction. Yielding initiates when $\tau_R$ reaches the **Critical Resolved Shear Stress** ($\tau_{\text{CRSS}}$).
  * Yield occurs at lowest applied stress when $\phi = \lambda = 45^\circ \implies \cos\phi \cos\lambda = 0.5 \implies \sigma_y = 2 \tau_{\text{CRSS}}$.
  * If $\phi = 90^\circ$ or $\lambda = 90^\circ$, $\tau_R = 0$ (no slip occurs).
* **Primary Strengthening Mechanisms (All Impede Dislocation Motion)**:
  1. **Grain Boundary Strengthening (Hall-Petch Relation)**:
     $$\sigma_y = \sigma_0 + k_y d^{-1/2}$$
     Smaller average grain diameter $d \implies$ higher grain boundary surface area $\implies$ higher barrier to dislocation pile-ups $\implies$ higher yield strength $\sigma_y$.
  2. **Solid Solution Strengthening**: Solute atoms (substitutional or interstitial) generate localized tensile/compressive strain fields that pin and impede dislocations.
  3. **Strain Hardening / Cold Work ($CW$)**:
     $$\%CW = \left(\frac{A_0 - A_d}{A_0}\right) \times 100\%$$
     Deformation multiplies dislocation density from $\sim 10^5\text{ cm}^{-2}$ to $\sim 10^{10}\text{ cm}^{-2}$. Dislocation-dislocation interactions and tangles dramatically increase $\sigma_y$ and $\text{UTS}$, but **reduce ductility** ($\%EL$).

---

### 7. Diffusion in Solids
* **Diffusion Mechanisms**:
  * **Vacancy Diffusion**: Host or substitutional solute atoms jump into adjacent empty lattice vacancies. Requires both vacancy formation and atomic motion energy.
  * **Interstitial Diffusion**: Small impurity atoms (C, H, O, N) jump into adjacent interstitial void spaces. **Much faster** than vacancy diffusion ($D_{\text{interstitial}} \gg D_{\text{vacancy}}$) because interstitial voids are smaller, more numerous, and have lower activation energies.
  * **Interdiffusion in Couples**: In a copper-nickel diffusion couple pressed together below melting points, Cu atoms diffuse into the Ni matrix AND Ni atoms diffuse into the Cu matrix simultaneously across the concentration gradient.
* **Steady-State Diffusion (Fick’s 1st Law)**:
  $$J = -D \frac{dC}{dx} \quad \left[\text{kg/m}^2\cdot\text{s} \text{ or atoms/cm}^2\cdot\text{s}\right]$$
  Flux $J$ is constant with time. For a linear concentration profile: $J = -D \frac{C_A - C_B}{x_A - x_B}$.
* **Temperature Dependence of Diffusion Coefficient (Arrhenius Law)**:
  $$D = D_0 \exp\left(-\frac{Q_d}{RT}\right) \implies \ln D = \ln D_0 - \frac{Q_d}{R}\left(\frac{1}{T}\right)$$
  Plotting $\ln D$ versus $1/T$ yields a straight line with slope $= -Q_d / R$ and intercept $= \ln D_0$.
* **Non-Steady-State Diffusion (Fick’s 2nd Law for Semi-Infinite Solid)**:
  $$\frac{C(x, t) - C_0}{C_s - C_0} = 1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)$$
  Where $C_0$ = uniform initial bulk concentration, $C_s$ = constant surface concentration, $C(x,t)$ = concentration at depth $x$ after time $t$, and $\text{erf}(z)$ is the Gaussian Error Function.
  * Constant composition scaling rule: $\frac{x^2}{D t} = \text{constant} \implies \frac{x_1^2}{D_1 t_1} = \frac{x_2^2}{D_2 t_2}$.

---

### 8. Mechanical Properties, Tensile Testing & Stress-Strain Behavior
* **Engineering Stress & Strain**:
  $$\sigma = \frac{F}{A_0} \quad [\text{MPa}], \qquad \epsilon = \frac{l_i - l_0}{l_0} = \frac{\Delta l}{l_0} \quad [\text{dimensionless}]$$
* **Hooke’s Law & Elastic Modulus**:
  $$\sigma = E \epsilon \qquad \text{and shear stress: } \tau = G \gamma$$
  * Modulus of Elasticity $E$ depends **only on interatomic bond strength**. Cold working, grain size, and alloying have negligible effect on $E$! (All carbon and low-alloy steels have $E \approx 207\text{ GPa}$).
  * **Poisson’s Ratio**: $\nu = -\frac{\epsilon_x}{\epsilon_z} = -\frac{\epsilon_y}{\epsilon_z}$. For isotropic metals, $E = 2G(1 + \nu)$, with $\nu \approx 0.33$.
* **Key Landmarks on the Engineering Stress-Strain Curve**:
  1. **Point B (Proportional Limit)**: Onset of deviation from Hooke's linear elasticity.
  2. **Point C ($0.2\%$ Offset Yield Strength $\sigma_y$)**: Parallel offset line drawn at $\epsilon = 0.002$ intersects the curve at $\sigma_y$. Dictates design stress limits.
  3. **Point E (Ultimate Tensile Strength, UTS)**: Maximum engineering stress the material sustains before necking begins.
  4. **Uniform vs. Non-Uniform Plastic Deformation**:
     * **Uniform Plastic Deformation**: Occurs across the entire gauge length from yield ($\sigma_y$, Point C) up to maximum tensile strength ($\text{UTS}$, Point E).
     * **Non-Uniform Plastic Deformation (Necking)**: Occurs **strictly after Point E** until final fracture at Point F. Localized cross-sectional area decreases rapidly.
* **True Stress & True Strain (Valid Up to the Onset of Necking)**:
  $$\sigma_T = \sigma (1 + \epsilon), \qquad \epsilon_T = \ln(1 + \epsilon)$$
* **Ductility Indices**:
  $$\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\%, \qquad \%RA = \left(\frac{A_0 - A_f}{A_0}\right) \times 100\%$$
* **Modulus of Resilience ($U_r$) & Toughness**:
  * Resilience $U_r = \int_0^{\epsilon_y} \sigma d\epsilon \approx \frac{1}{2}\sigma_y \epsilon_y = \frac{\sigma_y^2}{2E}$ (elastic energy absorbed per unit volume).
  * Toughness = total area under the entire stress-strain curve up to fracture (energy absorbed before failure).

---

### 9. Top 8 Midterm Pitfalls & Exam Strategy
1. **Force vs. Energy Curve Equilibrium**: Net force curve crosses zero ($F_N = 0$) at $r_0$; potential energy curve reaches its minimum trough ($dE/dr = 0$) at $r_0$. Never confuse zero force with zero energy!
2. **Elastic Modulus Invariance**: Question: *"How does cold working change the elastic modulus $E$ of steel?"* Answer: It does **NOT** change $E$. $E$ is dictated by atomic bond stiffness, not dislocation density.
3. **Diffusion Couple Mechanism**: Copper and nickel undergo **interdiffusion** (both atoms diffuse across the boundary). It is never one-sided!
4. **Miller Indices Negative Origin Trap**: Never pass a plane through the origin. Move the origin to an adjacent corner, read intercepts, and invert.
5. **FCC vs. BCC XRD Peaks**: BCC first peak is always $(110)$ ($h+k+l = 2$). FCC first peak is always $(111)$ (unmixed odd).
6. **Necking Onset**: Necking begins at **Point E (UTS)**, NOT at the yield point.
7. **Temperature in Kelvin**: In all Arrhenius equations ($\exp(-Q/RT)$ or $\exp(-Q/kT)$), temperature $T$ must be converted to **Kelvin** ($T(\text{K}) = T(^\circ\text{C}) + 273.15$).
8. **Constant $R$ vs. $k$**: Use $R = 8.314\text{ J/mol}\cdot\text{K}$ when $Q$ is in $\text{J/mol}$ or $\text{kJ/mol}$; use $k = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$ when $Q$ is in $\text{eV/atom}$.
