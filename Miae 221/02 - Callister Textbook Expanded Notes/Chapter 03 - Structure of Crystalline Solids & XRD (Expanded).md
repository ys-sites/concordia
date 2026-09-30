# MIAE 221: Materials Science for Engineers
## Chapter 3: The Structure of Crystalline Solids (Expanded & Condensed Guide)
### Concordia University · Gina Cody School of Engineering
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Ed., Callister & Rethwisch)  
**Instructor**: Dr. Mamoun Medraj, P.Eng | **Curriculum Alignment**: Concordia University

---

*(Aligned with Dr. Medraj Lectures 4, 5 & 6 · Weeks 2–3)*

### 1. 🎯 30-Second Core Intuition & Plain-English Concept
Atoms in solids don't arrange randomly (unless they are glass or polymers). Metals arrange in tightly ordered 3D repeating grids called **crystal lattices**. How tightly and efficiently atoms pack determines how dense the metal is, how easily it deforms under a hammer, and how it diffracts X-rays.

*Real-World Analogy*: Stacking oranges in a grocery store display. If you stack them directly on top of each other in a grid, you get Simple Cubic (very loose, wobbles easily). If you drop each orange into the valley between oranges in the layer below, you get close-packing (FCC or HCP, rock solid, maximum packing density).

### 2. ⚙️ High-Yield Mathematical Engine & Metallic Unit Cells

| Crystal Structure | Coordination Number (CN) | Atoms per Cell ($n$) | Lattice Parameter $a(R)$ | Atomic Packing Factor (APF) | Close-Packed Direction |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Simple Cubic (SC)** | 6 | 1 | $a = 2R$ | $\frac{\pi}{6} \approx 0.524$ | $\langle 100 \rangle$ |
| **Body-Centered Cubic (BCC)** | 8 | 2 | $a = \frac{4R}{\sqrt{3}}$ | $\frac{\pi\sqrt{3}}{8} \approx 0.680$ | $\langle 111 \rangle$ |
| **Face-Centered Cubic (FCC)** | 12 | 4 | $a = 2\sqrt{2}R$ | $\frac{\pi\sqrt{2}}{6} \approx 0.740$ | $\langle 110 \rangle$ |
| **Hexagonal Close-Packed (HCP)** | 12 | 6 | $a = 2R, c = 1.633a$ | $\frac{\pi\sqrt{3}}{8} \approx 0.740$ | $\langle 11\bar{2}0 \rangle$ |

#### Essential Crystallographic Equations:
1. **Theoretical Density**:
   $$\rho = \frac{n \cdot A}{V_c \cdot N_A}$$
   *(Units: $A$ in $\text{g/mol}$, $V_c$ in $\text{cm}^3$, $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$, yielding $\rho$ in $\text{g/cm}^3$)*.
2. **Linear Density (LD)**:
   $$\text{LD} = \frac{\text{number of atom diameters centered on direction vector}}{\text{length of direction vector}}$$
3. **Planar Density (PD)**:
   $$\text{PD} = \frac{\text{number of atom cross-sectional areas centered on plane}}{\text{area of plane}}$$
4. **Bragg's Law for X-Ray Diffraction (XRD)**:
   $$n\lambda = 2 d_{hkl} \sin\theta$$
   *Interplanar spacing for cubic systems*:
   $$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$
5. **Diffraction Reflection Selection Rules**:
   * **BCC**: Reflections occur **only** when $h + k + l = \text{even}$ (e.g., $(110), (200), (211), (220)$).
   * **FCC**: Reflections occur **only** when $h, k, l$ are **unmixed** (all odd or all even) (e.g., $(111), (200), (220), (311)$).

### 3. 🖼️ Textbook Reference Diagram & Visual Pedagogical Analysis

![Callister Figure 3.2 - Body-Centered Cubic (BCC) Unit Cell Geometry](./images/callister_fig_3_2_bcc_unit_cell.png)
*Figure 3.2: Body-Centered Cubic (BCC) unit cell: (a) Hard-sphere model, (b) Reduced-sphere unit cell, and (c) Aggregate of atoms highlighting center-corner contact along the body diagonal.*

![Callister Figure 3.22 - Schematic Diagram of an X-Ray Diffractometer](./images/callister_fig_3_22_xrd_diffractometer.png)
*Figure 3.22: Operating geometry of an X-ray diffractometer showing source $T$, specimen $S$, and detector $C$ rotating through angle $2	heta$.*

#### In-Depth Visual Breakdown:
* **BCC Unit Cell (Figure 3.2)**: Notice the hard-sphere contact. Atoms touch strictly along the cube **body diagonal** ($[111]$ direction). Therefore:
  $$\text{Body Diagonal} = \sqrt{a^2 + a^2 + a^2} = a\sqrt{3} = 4R \implies a = \frac{4R}{\sqrt{3}}$$
* **X-Ray Diffractometer (Figure 3.22)**: Monochromatic X-rays of known wavelength $\lambda$ strike the powder specimen at angle $\theta$. When the path difference between adjacent crystallographic planes equals an integer number of wavelengths ($n\lambda$), constructive interference produces an intense diffraction peak recorded at detector angle $2\theta$.

### 4. ⚖️ Teacher Notes Cross-Reference & Concordia Exam Traps
* **Dr. Medraj Lectures 4–6 Emphasis**:
  * Step-by-step procedure for planes passing through the origin: **You must translate the origin** to an adjacent corner before identifying intercepts!
  * Close-packed stacking sequences: HCP is $ABABAB\dots$, while FCC is $ABCABCABC\dots$.
  * Single crystals are **anisotropic** (properties like Young's modulus vary with crystallographic direction), whereas polycrystalline metals with random grain orientation are **isotropic** (quasi-isotropic) on a macro scale.
* **Concordia Exam Traps**:
  * **The $\theta$ vs. $2\theta$ Trap in XRD**: Diffractometer outputs plot intensity against $2\theta$ (the detector angle). You **must divide by 2** before plugging $\theta$ into Bragg's Law!
  * **Volume Unit Conversion**: Forgetting that $1\text{ nm} = 10^{-7}\text{ cm} \implies 1\text{ nm}^3 = 10^{-21}\text{ cm}^3$.

### 5. 💡 Master Exam Problem & Step-by-Step Solution Framework
**Problem**: *Iron has a BCC crystal structure with atomic radius $R = 0.1241\text{ nm}$ and atomic weight $A = 55.85\text{ g/mol}$. (a) Calculate its theoretical density. (b) For monochromatic X-radiation with $\lambda = 0.1542\text{ nm}$, compute the diffraction angle $2\theta$ for the first-order reflection ($n=1$) from the $(220)$ plane.*

* **Step 1: Compute BCC Lattice Parameter $a$**
  $$a = \frac{4R}{\sqrt{3}} = \frac{4(0.1241\text{ nm})}{\sqrt{3}} = 0.2866\text{ nm} = 2.866 \times 10^{-8}\text{ cm}$$
* **Step 2: Compute Unit Cell Volume $V_c$**
  $$V_c = a^3 = (2.866 \times 10^{-8}\text{ cm})^3 = 2.354 \times 10^{-23}\text{ cm}^3$$
* **Step 3: Compute Theoretical Density $\rho$**
  $$\rho = \frac{n \cdot A}{V_c \cdot N_A} = \frac{2 \times 55.85\text{ g/mol}}{(2.354 \times 10^{-23}\text{ cm}^3)(6.022 \times 10^{23}\text{ mol}^{-1})} = 7.88\text{ g/cm}^3$$
* **Step 4: Compute Interplanar Spacing $d_{220}$**
  $$d_{220} = \frac{a}{\sqrt{h^2 + k^2 + l^2}} = \frac{0.2866\text{ nm}}{\sqrt{2^2 + 2^2 + 0^2}} = \frac{0.2866}{\sqrt{8}} = 0.1013\text{ nm}$$
* **Step 5: Apply Bragg's Law for $\sin\theta$ and $2\theta$**
  $$\sin\theta = \frac{n\lambda}{2 d_{220}} = \frac{1(0.1542\text{ nm})}{2(0.1013\text{ nm})} = 0.7611$$
  $$\theta = \arcsin(0.7611) = 49.56^\circ \implies 2\theta = 99.12^\circ$$

---
