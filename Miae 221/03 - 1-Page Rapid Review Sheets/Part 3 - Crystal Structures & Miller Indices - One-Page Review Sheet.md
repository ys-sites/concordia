# MIAE 221 · Rapid Review Sheet · Part 3
## Crystal Structures, Unit Cells, Theoretical Density & Miller Indices

---

### 1. Metallic Unit Cell Crystal Geometries
| Structure | Coordination No. ($CN$) | Atoms/Cell ($n$) | Lattice Parameter $a(R)$ | Close-Packed Direction | APF | Stacking Sequence | Examples |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Simple Cubic (SC)** | 6 | 1 | $a = 2R$ | Cube edges $\langle 100 \rangle$ | $\frac{\pi}{6} \approx 0.52$ | AAAAA... | Polonium ($\alpha\text{-Po}$) |
| **Body-Centered Cubic (BCC)** | 8 | 2 | $a = \frac{4R}{\sqrt{3}}$ | Body diagonal $\langle 111 \rangle$ | $\frac{\pi\sqrt{3}}{8} \approx 0.68$ | ABABAB... | $\alpha\text{-Fe}, \text{Cr}, \text{W}, \text{Mo}, \text{Ta}$ |
| **Face-Centered Cubic (FCC)** | 12 | 4 | $a = 2\sqrt{2}R$ | Face diagonal $\langle 110 \rangle$ | $\frac{\pi\sqrt{2}}{6} \approx 0.74$ | ABCABC... (close-packed $\{111\}$) | $\text{Cu}, \text{Al}, \text{Au}, \text{Ag}, \text{Ni}, \gamma\text{-Fe}$ |
| **Hexagonal Close-Packed (HCP)**| 12 | 6 (2 in prim.) | $a = 2R,\; c/a = 1.633$ | Basal plane $\{0001\}$ | $0.74$ | ABABAB... (close-packed basal) | $\text{Ti}, \text{Mg}, \text{Zn}, \text{Be}, \text{Cd}, \text{Zr}$ |

---

### 2. Theoretical Density Formula & Unit Conversions
$$\rho = \frac{n \cdot A}{V_c \cdot N_A}$$
* **Parameters**: $n$ = atoms/unit cell ($SC=1, BCC=2, FCC=4, HCP=6$), $A$ = atomic mass ($\text{g/mol}$), $V_c$ = unit cell volume ($\text{cm}^3$), $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$.
* **Cubic Volume**: $V_c = a^3$. For BCC: $V_c = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64 R^3}{3\sqrt{3}}$. For FCC: $V_c = (2R\sqrt{2})^3 = 16\sqrt{2} R^3$.
* **Critical Conversions**: $1\text{ nm} = 10^{-7}\text{ cm} \implies 1\text{ nm}^3 = 10^{-21}\text{ cm}^3$; $1\text{ \AA} = 10^{-8}\text{ cm} \implies 1\text{ \AA}^3 = 10^{-24}\text{ cm}^3$. Target density units: $\mathbf{\text{g/cm}^3}$.

---

### 3. Seven Crystal Systems & 14 Bravais Lattices
| System | Axial Lengths | Interaxial Angles | Bravais Lattices |
| :--- | :--- | :--- | :--- |
| **Cubic** | $a = b = c$ | $\alpha = \beta = \gamma = 90^\circ$ | Simple, Body-Centered, Face-Centered (3) |
| **Tetragonal** | $a = b \neq c$ | $\alpha = \beta = \gamma = 90^\circ$ | Simple, Body-Centered (2) |
| **Orthorhombic** | $a \neq b \neq c$ | $\alpha = \beta = \gamma = 90^\circ$ | Simple, Body-Centered, Face-Centered, Base-Centered (4) |
| **Rhombohedral (Trigonal)** | $a = b = c$ | $\alpha = \beta = \gamma \neq 90^\circ$ | Simple (1) |
| **Hexagonal** | $a = b \neq c$ | $\alpha = \beta = 90^\circ, \gamma = 120^\circ$ | Simple (1) |
| **Monoclinic** | $a \neq b \neq c$ | $\alpha = \gamma = 90^\circ, \beta \neq 90^\circ$ | Simple, Base-Centered (2) |
| **Triclinic** | $a \neq b \neq c$ | $\alpha \neq \beta \neq \gamma \neq 90^\circ$ | Simple (1) |

---

### 4. Crystallographic Directions $[uvw]$ & Planes $(hkl)$
* **Directions $[uvw]$**: Vector from tail $(x_1, y_1, z_1)$ to head $(x_2, y_2, z_2) \implies \Delta x = x_2 - x_1$, $\Delta y = y_2 - y_1$, $\Delta z = z_2 - z_1$. Divide by $a, b, c$. Reduce to smallest integers $\implies \mathbf{[uvw]}$. Negative index denoted by overbar (e.g. $[\bar{1}10]$). Family of symmetrically equivalent directions: $\mathbf{\langle uvw \rangle}$.
* **Planes $(hkl)$ (Miller Indices)**:
  1. *Origin Check*: If plane passes through origin, shift origin to an adjacent corner along a unit cell edge.
  2. *Intercepts*: Determine intersection points with $x, y, z$ axes in units of $a, b, c$ (if parallel, intercept $= \infty$).
  3. *Reciprocals*: Take $1/\text{intercept}$ ($1/\infty \to 0$).
  4. *Enclose*: Clear fractions to obtain smallest integers and enclose in parentheses $\mathbf{(hkl)}$. Family of equivalent planes: $\mathbf{\{hkl\}}$.
* **Isotropy vs Anisotropy**: Single crystals are **anisotropic** (properties like modulus $E$ vary with crystallographic direction). Polycrystalline materials with randomly oriented grains are **isotropic** (uniform macro properties).
