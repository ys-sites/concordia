# MIAE 221: Materials Science
## Master Formula Sheet & Complete Symbol Reference Guide (Chapters 1–6)
### Concordia University · Gina Cody School of Engineering and Computer Science

---

## Strategic Overview & Legend

This master formula sheet is tailored specifically for the **MIAE 221 Midterm Examination** covering **Chapters 1 through 6** (Callister 10th Edition: Atomic Bonding, Crystal Structures & Crystallography, Imperfections & Point Defects, Diffusion, Mechanical Properties, and Dislocations/Strengthening Mechanisms).

### Importance & Formula Sheet Status Legend:
- <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>: Explicitly printed on the official MECH/MIAE 221 midterm equation handout.
- <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET! MUST MEMORIZE]</span>: Extensively required for calculations, derivations, or unit conversions on the exam, but **omitted from the official equation sheet**. Memorizing these equations is mandatory for exam success.

---

## Chapter 1: Atomic Structure & Interatomic Bonding

### 1.1 Total Atoms, Mass & Molar Conversion <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{n_{\text{mol}} = \frac{m}{A} \qquad N_{\text{atoms}} = n_{\text{mol}} \cdot N_A = \frac{m}{A} N_A}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $m$ | Sample Mass | Total macroscopic mass of the metal specimen | $\text{g}$ or $\text{kg}$ |
| $A$ | Atomic Weight (Molar Mass) | Mass of one mole of pure element | $\text{g/mol}$ |
| $n_{\text{mol}}$ | Chemical Amount | Number of moles of substance | $\text{mol}$ |
| $N_{\text{atoms}}$ | Total Number of Atoms | Discrete count of individual atoms in sample | $\text{dimensionless (count)}$ |
| $N_A$ | Avogadro's Number | Universal constant | $6.022 \times 10^{23}\ \text{atoms/mol}$ |

> **💡 Quick Understanding Tip & Mental Model**:
> When an exam question specifies a cylindrical wire of radius $r$ and length $L$, calculate its volume $V = \pi r^2 L$, then mass $m = \rho V$, then find total atoms using $N = \frac{\rho V N_A}{A}$.

---

### 1.2 Percent Ionic Character (Pauling Electronegativity Relation) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{\% \text{Ionic Character} = \left[ 1 - \exp\left( -0.25 \left( \chi_A - \chi_B \right)^2 \right) \right] \times 100\%}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $\chi_A, \chi_B$ | Pauling Electronegativities | Tendency of bonded atoms to attract shared electrons | $\text{dimensionless}$ |
| $\Delta \chi$ | Electronegativity Difference | Magnitude $|\chi_A - \chi_B|$ driving electron transfer | $\text{dimensionless}$ |

> **💡 Quick Understanding Tip & Mental Model**:
> If $\Delta \chi = 0$, ionic character is $0\%$ (pure covalent or metallic). If $\Delta \chi \ge 1.7$, ionic character exceeds $50\%$ (predominantly ionic ceramic). Don't forget to square $\Delta \chi$ inside the exponential!

---

### 1.3 Net Interatomic Force & Equilibrium Spacing <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{F_N(r) = F_A(r) + F_R(r) = -\frac{A}{r^2} + \frac{B}{r^n} = 0 \quad \text{at } r = r_0}$$
$$\boxed{r_0 = \left( \frac{n B}{A} \right)^{\frac{1}{n-1}} \qquad E_0 = -\frac{A(n - 1)}{n r_0}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $F_N$ | Net Interatomic Force | Total force between two adjacent atomic nuclei | $\text{N}$ |
| $F_A$ | Attractive Force | Electrostatic Coulomb pull: $F_A = -\frac{k |z_1 z_2| e^2}{r^2}$ | $\text{N}$ |
| $F_R$ | Repulsive Force | Pauli exclusion electron-cloud overlap repulsion: $F_R = \frac{B}{r^n}$ | $\text{N}$ |
| $r_0$ | Equilibrium Spacing | Stable interatomic bond distance where $F_N = 0$ | $\text{m}$ or $\text{nm}$ |
| $E_0$ | Bond Energy (Well Depth) | Work required to separate bonded pair to infinity | $\text{eV/bond}$ or $\text{kJ/mol}$ |
| $k$ | Coulomb Constant | Universal electrostatic constant | $8.99 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$ |
| $e$ | Elementary Charge | Fundamental unit of electric charge | $1.602 \times 10^{-19}\ \text{C}$ |

---

## Chapter 2: Crystal Structures & Crystallography

### 2.1 Theoretical Density of Crystalline Solids <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{\rho = \frac{n \cdot A}{V_C \cdot N_A}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $\rho$ | Theoretical Density | Mass per unit volume of the perfect crystal | $\text{g/cm}^3$ |
| $n$ | Atoms Per Unit Cell | Net count: $\text{SC}=1$, $\text{BCC}=2$, $\text{FCC}=4$, $\text{HCP}=6$ | $\text{atoms/cell}$ |
| $A$ | Atomic Weight | Molar mass of constituent element | $\text{g/mol}$ |
| $V_C$ | Unit Cell Volume | Cubic lattice: $V_C = a^3$; HCP lattice: $V_C = \frac{3\sqrt{3}}{2} a^2 c$ | $\text{cm}^3$ |
| $N_A$ | Avogadro's Number | Entity conversion constant | $6.022 \times 10^{23}\ \text{atoms/mol}$ |

> **💡 Quick Understanding Tip & Mental Model**:
> 🚨 **Unit Conversion Trap**: Lattice parameter $a$ is usually given in $\text{nm}$ or $\text{Å}$.
> $1\text{ nm} = 10^{-7}\text{ cm} \implies 1\text{ nm}^3 = 10^{-21}\text{ cm}^3$.
> Always verify that $V_C$ is expressed in $\text{cm}^3$ so density computes cleanly in $\text{g/cm}^3$!

---

### 2.2 Total Unit Cells in a Solid Sample <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{N_{\text{cells}} = \frac{V_{\text{sample}}}{V_C} = \frac{m / \rho}{a^3}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $N_{\text{cells}}$ | Unit Cell Count | Total geometric unit cell repetitions in specimen | $\text{dimensionless}$ |
| $V_{\text{sample}}$ | Specimen Volume | Bulk physical volume ($m/\rho$) | $\text{cm}^3$ or $\text{m}^3$ |
| $V_C$ | Unit Cell Volume | Microscopic cube volume ($a^3$) | $\text{cm}^3$ or $\text{m}^3$ |

---

### 2.3 Comprehensive Crystal Structure Benchmark Table <span style="color:#dc2626; font-weight:bold;">[🚨 NUMBERS NOT ON SHEET!]</span>

$$\boxed{\text{APF} = \frac{V_{\text{atoms}}}{V_C} = \frac{n \left(\frac{4}{3}\pi R^3\right)}{V_C}}$$

| Crystal Structure | Atoms / Cell ($n$) | Coordination No. ($CN$) | Atomic Packing Factor ($\text{APF}$) | Lattice Parameter Relation ($a$) | Close-Packed Touching Direction | Common Metal Examples |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Simple Cubic (SC)** | **1** | **6** | **0.52** | $a = 2R$ | Cube Edge $\langle 100 \rangle$ | Polonium ($\text{Po}$) |
| **Body-Centered Cubic (BCC)** | **2** | **8** | **0.68** | $a = \frac{4R}{\sqrt{3}}$ | Body Diagonal $\langle 111 \rangle$ | $\alpha$-Fe, $\text{Cr}$, $\text{W}$, $\text{V}$, $\text{Mo}$ |
| **Face-Centered Cubic (FCC)** | **4** | **12** | **0.74** | $a = 2\sqrt{2}R = \frac{4R}{\sqrt{2}}$ | Face Diagonal $\langle 110 \rangle$ | $\text{Al}$, $\text{Cu}$, $\text{Au}$, $\text{Ag}$, $\text{Ni}$, $\text{Pt}$ |
| **Hexagonal Close-Packed (HCP)** | **6** | **12** | **0.74** | $a = 2R, \frac{c}{a} = 1.633$ | Basal Plane Edge $\langle 11\bar{2}0 \rangle$ | $\text{Mg}$, $\text{Zn}$, $\alpha$-Ti, $\text{Co}$ |

> **💡 Quick Understanding Tip & Mental Model**:
> - **Edge**: SC touches along $\langle 100 \rangle$ ($a = 2R$).
> - **Face Diagonal**: FCC touches along $\langle 110 \rangle$ ($\sqrt{2}a = 4R$).
> - **Body Diagonal**: BCC touches along $\langle 111 \rangle$ ($\sqrt{3}a = 4R$).
> - **Close-packed max APF**: Both FCC and HCP equal $0.74$ ($74\%$ solid sphere packing).

---

### 2.4 Miller Indices Rules for Directions and Planes <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
- **Directions $[uvw]$**:
  1. Determine coordinates of vector head $(x_2, y_2, z_2)$ and tail $(x_1, y_1, z_1)$.
  2. Subtract tail from head: $(x_2 - x_1, y_2 - y_1, z_2 - z_1)$.
  3. Clear fractions by multiplying through by the lowest common denominator.
  4. Enclose in square brackets $[uvw]$ (negative integers indicated with an overbar, e.g. $[\bar{1}10]$).
  5. Family of equivalent directions: $\langle uvw \rangle$.
- **Planes $(hkl)$**:
  1. If plane passes through the origin, shift coordinate origin to an adjacent unit cell corner!
  2. Determine axis intercepts in terms of lattice parameters $a, b, c$: $(x_0, y_0, z_0)$.
  3. **Parallel to axis?** Intercept is $\infty \implies$ reciprocal is $1/\infty = 0$!
  4. Take reciprocals of intercepts: $(1/x_0, 1/y_0, 1/z_0)$.
  5. Clear fractions to smallest integer ratio. **NEVER write fractions inside Miller indices!**
  6. Enclose in parentheses $(hkl)$. Family of equivalent planes: $\{hkl\}$.

---

### 2.5 Linear Atomic Density (LD) and Planar Atomic Density (PD) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{\text{LD} = \frac{\text{Number of atomic diameters centered on direction vector}}{\text{Length of direction vector}} = \frac{N_{\text{line}}}{L}}$$
$$\boxed{\text{PD} = \frac{\text{Number of atomic circle areas centered on plane}}{\text{Area of plane}} = \frac{N_{\text{plane}}}{A_{\text{plane}}}}$$

- **Benchmark Values**:
  - FCC $[110]$ direction: $\text{LD} = \frac{2\text{ atoms}}{4R} = \frac{1}{2R}$ (close-packed direction).
  - FCC $(111)$ plane: $\text{PD} = \frac{2\text{ atoms}}{\frac{\sqrt{3}}{2}a^2} = \frac{4}{\sqrt{3}a^2}$ (close-packed plane).

---

### 2.6 Bragg's Law of X-Ray Diffraction & Interplanar Spacing <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{n\lambda = 2 d_{hkl} \sin\theta \qquad d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $n$ | Diffraction Order | Integer order of constructive reflection ($n=1$ in all exam problems) | $\text{integer}$ |
| $\lambda$ | X-Ray Wavelength | Monochromatic incident radiation wavelength | $\text{nm}$ |
| $d_{hkl}$ | Interplanar Spacing | Perpendicular separation between adjacent parallel $(hkl)$ planes | $\text{nm}$ |
| $\theta$ | Bragg Angle | Angle between incident X-ray beam and crystal plane | $\text{degrees}$ |
| $a$ | Cubic Lattice Parameter | Edge length of cubic unit cell | $\text{nm}$ |
| $h, k, l$ | Miller Indices | Plane Miller coordinates | $\text{integers}$ |

> **💡 Quick Understanding Tip & Mental Model**:
> 🚨 **Diffractometer Detector Trap**: Diffractometer readouts give the **diffraction angle $2\theta$**! You MUST divide by 2 before taking the sine: $\theta = (2\theta)/2$.

---

## Chapter 3: Imperfections in Solids

### 3.1 Total Atomic Sites Density ($N$) <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{N = \frac{\rho \cdot N_A}{A}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $N$ | Atomic Sites Concentration | Total regular lattice sites available per unit volume | $\text{sites/m}^3$ or $\text{sites/cm}^3$ |
| $\rho$ | Mass Density | Bulk density of pure metal | $\text{g/cm}^3$ or $\text{kg/m}^3$ |
| $N_A$ | Avogadro's Number | Universal constant | $6.022 \times 10^{23}\ \text{atoms/mol}$ |
| $A$ | Atomic Weight | Molar mass from periodic table | $\text{g/mol}$ |

> **💡 Quick Understanding Tip & Mental Model**:
> 🚨 **2017 Midterm Question 2 Trap**: The official formula sheet only provides $N_v = N e^{-Q_v/kT}$. If you do not know $N = \frac{\rho N_A}{A}$, you cannot calculate $N_v$!

---

### 3.2 Equilibrium Vacancy Concentration <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{N_v = N \exp\left( -\frac{Q_v}{k T} \right) \qquad \frac{N_v}{N} = \exp\left( -\frac{Q_v}{k T} \right)}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $N_v$ | Equilibrium Vacancies | Number of vacant atomic sites per unit volume | $\text{vacancies/m}^3$ |
| $Q_v$ | Vacancy Formation Energy | Thermal energy required to displace atom to crystal surface | $\text{eV/atom}$ or $\text{J/mol}$ |
| $k$ | Boltzmann Constant | Energy-to-temperature constant | $8.62 \times 10^{-5}\ \text{eV/(atom}\cdot\text{K)}$ |
| $T$ | Absolute Temperature | Thermodynamic temperature in Kelvin | $\text{K} = T(^\circ\text{C}) + 273.15$ |

---

### 3.3 Amorphous vs. Crystalline Fundamental Distinction <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
- **Amorphous (Non-crystalline)**:
  - Possesses **short-range order ONLY** (nearest-neighbor coordination).
  - Has **NO crystalline grains** $\implies$ **NEVER has grain boundaries!**
  - Can contain micro-voids, bubbles, or cracks, but **zero grain boundaries**.
- **Crystalline**:
  - Possesses **short-range AND long-range 3D periodic order**.
  - **Single Crystal**: 1 continuous grain $\implies$ **Anisotropic** (properties depend on measurement direction).
  - **Polycrystalline**: Many grains with different crystallographic orientations separated by grain boundaries $\implies$ Macroscopically **Isotropic** if grains are randomly oriented.
  - **Polymorphism / Allotropy**: Ability of a solid composition to crystallize in more than one crystal structure at different temperature and pressure regimes (e.g. Iron $\alpha$-BCC $\to \gamma$-FCC at $912^\circ\text{C}$).

---

### 3.4 Dislocation Geometry & Burgers Vector Relationships <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{\text{Edge Dislocation: } \vec{b} \perp \vec{t} \qquad \text{Screw Dislocation: } \vec{b} \parallel \vec{t} \qquad \text{Mixed Dislocation: Neither } \perp \text{ nor } \parallel}$$

- **Edge Dislocation**: Extra half-plane of atoms; Burgers vector $\vec{b}$ is **perpendicular ($\perp$)** to dislocation line $\vec{t}$. Glides parallel to applied shear stress.
- **Screw Dislocation**: Helical spiral ramp; Burgers vector $\vec{b}$ is **parallel ($\parallel$)** to dislocation line $\vec{t}$. Glides perpendicular to applied shear stress.

---

## Chapter 4: Diffusion

### 4.1 Fick's First Law (Steady-State Diffusion) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{J = -D \frac{dC}{dx} \approx -D \frac{\Delta C}{\Delta x} = -D \frac{C_B - C_A}{x_B - x_A}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $J$ | Diffusion Mass Flux | Mass or atoms passing through unit area per second | $\text{kg/(m}^2\cdot\text{s)}$ or $\text{atoms/(m}^2\cdot\text{s)}$ |
| $D$ | Diffusion Coefficient | Diffusivity of solute in host matrix | $\text{m}^2/\text{s}$ |
| $\frac{dC}{dx}$ | Concentration Gradient | Slope of concentration profile across spatial thickness | $\text{kg/m}^4$ or $\text{atoms/m}^4$ |

> **💡 Quick Understanding Tip & Mental Model**:
> Steady state means concentration at any point is constant over time ($\frac{\partial C}{\partial t} = 0$). Flux $J$ is constant throughout the entire membrane thickness!

---

### 4.2 Fick's Second Law (Non-Steady-State Semi-Infinite Solid) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{\frac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left( \frac{x}{2\sqrt{Dt}} \right)}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $C_x$ | Concentration at Depth $x$ | Solute concentration at distance $x$ after soaking time $t$ | $\text{wt}\%$ or $\text{atoms/m}^3$ |
| $C_0$ | Initial Concentration | Uniform starting solute level throughout workpiece | $\text{wt}\%$ or $\text{atoms/m}^3$ |
| $C_s$ | Surface Concentration | Constant concentration imposed at workpiece boundary ($x=0$) | $\text{wt}\%$ or $\text{atoms/m}^3$ |
| $x$ | Penetration Depth | Perpendicular distance from external surface | $\text{m}$ |
| $t$ | Diffusion Time | Thermal soaking duration | $\text{s}$ |
| $\text{erf}(z)$ | Gaussian Error Function | Standard mathematical integral tabulated on exam sheet | $\text{dimensionless}$ |

> **💡 Quick Scaling Law**:
> When comparing two diffusion treatments achieving the same concentration at depth $x$:
> $$\frac{x_1^2}{D_1 t_1} = \frac{x_2^2}{D_2 t_2}$$

---

### 4.3 Temperature Dependence of Diffusion (Arrhenius Equation) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{D = D_0 \exp\left( -\frac{Q_d}{R T} \right) \qquad \ln D = \ln D_0 - \frac{Q_d}{R}\left(\frac{1}{T}\right)}$$

- **Two-Temperature Ratio**:
  $$\ln\left(\frac{D_2}{D_1}\right) = -\frac{Q_d}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) = \frac{Q_d}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$
- **Gas Constant**: $R = 8.314\ \text{J/(mol}\cdot\text{K)}$ if $Q_d$ is in $\text{J/mol}$; use $k = 8.62 \times 10^{-5}\ \text{eV/K}$ if $Q_d$ is in $\text{eV/atom}$.

---

## Chapter 5: Mechanical Properties

### 5.1 Engineering Stress & Strain Definitions <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{\sigma = \frac{F}{A_0} = \frac{F}{w_0 \cdot t_0} = \frac{F}{\frac{\pi}{4}d_0^2} \qquad \varepsilon = \frac{\Delta l}{l_0} = \frac{l_i - l_0}{l_0}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $\sigma$ | Engineering Stress | Load normalized to initial cross section $A_0$ | $\text{MPa} = 10^6\ \text{N/m}^2 = 1\ \text{N/mm}^2$ |
| $\varepsilon$ | Engineering Strain | Elongation normalized to original gauge length $l_0$ | $\text{dimensionless}$ |
| $F$ | Tensile Force | Applied external axial load | $\text{N}$ |
| $A_0$ | Original Cross Section | Initial cross-sectional area before loading | $\text{m}^2$ or $\text{mm}^2$ |

---

### 5.2 Hooke's Law (Linear Elasticity) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{\sigma = E \cdot \varepsilon \implies \Delta l = \frac{F \cdot l_0}{A_0 \cdot E}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $E$ | Modulus of Elasticity (Young's Modulus) | Slope of linear elastic regime; stiffness of interatomic bonds | $\text{GPa} = 10^9\ \text{Pa} = 10^3\ \text{MPa}$ |

---

### 5.3 Poisson's Ratio & Transverse Dimensional Contraction <span style="color:#059669; font-weight:bold;">[ON SHEET]</span> / <span style="color:#dc2626; font-weight:bold;">[🚨 WIDTH FORMULA NOT ON SHEET!]</span>
$$\boxed{\nu = -\frac{\varepsilon_x}{\varepsilon_z} = -\frac{\varepsilon_y}{\varepsilon_z} \implies \Delta w = -\nu \cdot w_0 \cdot \varepsilon_z = -\nu \cdot w_0 \frac{F}{A_0 E}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $\nu$ | Poisson's Ratio | Transverse contraction ratio (metals: $\nu \approx 0.25 - 0.35$) | $\text{dimensionless}$ |
| $\Delta w$ | Change in Specimen Width | Lateral dimensional contraction under tension | $\text{mm}$ or $\text{m}$ |
| $w_0$ | Original Width | Initial transverse specimen dimension | $\text{mm}$ or $\text{m}$ |

> **💡 2017 Midterm Question 38 Highlight**:
> Question 38 asks for the change in width $\Delta w$ of a rectangular bar under tension. Combine $\sigma = F/A_0$, $\varepsilon_z = \sigma/E$, and $\Delta w = -\nu w_0 \varepsilon_z$. The negative sign indicates contraction!

---

### 5.4 Modulus of Resilience ($U_r$) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{U_r = \int_0^{\varepsilon_y} \sigma \, d\varepsilon = \frac{1}{2}\sigma_y \varepsilon_y = \frac{\sigma_y^2}{2E}}$$

- **Resilience**: Elastic energy stored per unit volume without permanent deformation (springiness).
- **Toughness**: Total area under entire stress-strain curve up to fracture (energy absorbed before fracture).

---

### 5.5 True Stress ($\sigma_T$) and True Strain ($\varepsilon_T$) Conversions <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{\sigma_T = \sigma (1 + \varepsilon) \qquad \varepsilon_T = \ln(1 + \varepsilon)}$$

> **💡 Condition of Validity**:
> These conversion formulas are valid **ONLY up to the onset of necking (the UTS point)**! Beyond necking, deformation is localized and cross-sectional volume conservation fails.

---

## Chapter 6: Dislocations & Strengthening Mechanisms

### 6.1 Schmid's Law (Resolved Shear Stress on Slip System) <span style="color:#059669; font-weight:bold;">[ON OFFICIAL SHEET]</span>
$$\boxed{\tau_R = \sigma \cos\phi \cos\lambda = \frac{F}{A_0}\cos\phi \cos\lambda \quad \implies \quad \sigma_y = \frac{\tau_{\text{CRSS}}}{(\cos\phi \cos\lambda)_{\max}}}$$

| Symbol | Name & Meaning | Physical Role in Equation | SI Units & Constants |
| :--- | :--- | :--- | :--- |
| $\tau_R$ | Resolved Shear Stress | Driving shear stress parallel to slip direction on slip plane | $\text{MPa}$ |
| $\sigma$ | Applied Tensile Stress | Uniaxial tensile stress along specimen axis | $\text{MPa}$ |
| $\phi$ | Slip Plane Normal Angle | Angle between tensile axis and normal vector to slip plane | $\text{degrees}$ |
| $\lambda$ | Slip Direction Angle | Angle between tensile axis and slip direction vector | $\text{degrees}$ |
| $\tau_{\text{CRSS}}$ | Critical Resolved Shear Stress | Minimum intrinsic shear stress required to initiate dislocation slip | $\text{MPa}$ |

> **💡 Maximum Resolved Shear Stress Rule**:
> Maximum resolved shear stress occurs at **$\phi = \lambda = 45^\circ$**:
> $$(\cos\phi \cos\lambda)_{\max} = \cos 45^\circ \cos 45^\circ = \left(\frac{1}{\sqrt{2}}\right)\left(\frac{1}{\sqrt{2}}\right) = 0.5$$
> $$\tau_{R,\max} = 0.5 \sigma \implies \sigma_y = 2 \tau_{\text{CRSS}}$$
> If $\phi = 90^\circ$ or $\lambda = 90^\circ$, then $\tau_R = 0$ (no slip occurs!).

---

### 6.2 Close-Packed Slip Systems by Crystal Structure <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
- **FCC**: $\{111\}\langle 110 \rangle \implies 4\text{ planes} \times 3\text{ directions} = \mathbf{12\text{ slip systems}}$ (High 3D ductility at all temperatures).
- **BCC**: $\{110\}\langle 111 \rangle \implies 6\text{ planes} \times 2\text{ directions} = \mathbf{12\text{ primary slip systems}}$ (Higher strength, ductile-to-brittle transition).
- **HCP**: $\{0001\}\langle 11\bar{2}0 \rangle \implies 1\text{ basal plane} \times 3\text{ directions} = \mathbf{3\text{ active slip systems}}$ (Low ductility at room temperature due to $<5$ independent systems).

---

### 6.3 Universal Law of Metallic Strengthening <span style="color:#dc2626; font-weight:bold;">[🚨 RED ALERT - NOT ON SHEET!]</span>
$$\boxed{\text{Yield Strength } \sigma_y \propto \text{Resistance to Dislocation Motion}}$$
1. **Grain Boundary Strengthening (Hall-Petch)**: $\sigma_y = \sigma_0 + k_y d^{-1/2}$ (finer grains = more barrier interfaces).
2. **Solid-Solution Strengthening**: Solute atoms create local lattice strain fields that pin dislocations.
3. **Strain Hardening (Cold Work)**: Plastic deformation multiplies dislocation density ($\rho_{\text{disl}}$ from $10^6$ to $10^{12}\ \text{cm}^{-2}$), forming tangled dislocation forests.
4. **Precipitation Hardening**: Fine secondary phase particles force dislocations to cut or bow around obstacles (Orowan looping).
