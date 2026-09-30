# MIAE 221 · Rapid Review Sheet · Part 4
## Crystallographic Densities, XRD, Anisotropy & Bragg's Law

---

### 1. Linear & Planar Atomic Densities
* **Linear Density ($LD$)**: Number of atom diameters centered on a direction vector per unit length:
  $$LD = \frac{n}{L}$$
  * *FCC $[100]$*: $L = a = 2\sqrt{2}R$, $n = 2(\frac{1}{2}) = 1 \implies LD_{[100]} = \frac{1}{2\sqrt{2}R}$.
  * *FCC $[110]$ (Close-Packed)*: $L = 4R$, $n = 2 \implies LD_{[110]} = \frac{2}{4R} = \frac{1}{2R}$.
* **Planar Density ($PD$)**: Number of atoms centered on a crystallographic plane per unit area of that plane:
  $$PD = \frac{n}{A}$$
  * *FCC $(110)$*: Area $A = a \cdot a\sqrt{2} = 8\sqrt{2}R^2$; Atoms $n = 4(\frac{1}{4}) + 2(\frac{1}{2}) = 2 \implies PD_{(110)} = \frac{2}{8\sqrt{2}R^2} = \frac{1}{4\sqrt{2}R^2}$.
  * *FCC $(111)$ (Close-Packed)*: Area $A = \frac{\sqrt{3}}{2}a^2\sqrt{2} = 4\sqrt{3}R^2$; Atoms $n = 3(\frac{1}{6}) + 3(\frac{1}{2}) = 2 \implies PD_{(111)} = \frac{1}{2\sqrt{3}R^2} \approx \frac{0.29}{R^2}$ (Maximum planar density in FCC).
* **Slip System Law**: Plastic deformation occurs along directions of **highest $LD$** within planes of **highest $PD$**.

---

### 2. Single Crystal Anisotropy vs. Polycrystalline Isotropy
* **Single Crystal Anisotropy**: Properties depend strongly on orientation:
  * BCC Iron: $E_{[111]} = 272.7\text{ GPa}$ (close-packed, stiffest) vs. $E_{[100]} = 125.0\text{ GPa}$ (most compliant) $\implies$ Ratio $\approx 2.18$.
  * Single-crystal turbine blades (CMSX-4) eliminate high-temperature grain-boundary creep along $[001]$.
* **Polycrystalline Isotropy**: Millions of randomly oriented microscopic grains average out directional stiffness, yielding macroscopic isotropy.

---

### 3. Interplanar Spacing & Bragg's Law
* **Cubic Interplanar Spacing ($d_{hkl}$)**:
  $$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$
* **Bragg's Law for Constructive Interference**:
  $$n\lambda = 2 d_{hkl} \sin\theta$$
  * $\lambda$ = X-ray wavelength (typically $0.15418\text{ nm}$ for $Cu\text{-}K_\alpha$ or $0.1790\text{ nm}$ for $Fe\text{-}K_\alpha$).
  * $d_{hkl}$ = Spacing between parallel $(hkl)$ planes.
  * $\theta$ = Bragg angle (half of the detector angle $2\theta$).
  * $n$ = Order of reflection (usually $n = 1$).

---

### 4. Diffractometry & Systematic Reflection Conditions
| Crystal Structure | Diffraction Selection Rule | First 4 Diffraction Peaks |
| :--- | :--- | :--- |
| **BCC (Body-Centered)** | **$h + k + l = \text{Even}$** | $(110), (200), (211), (220)$ |
| **FCC (Face-Centered)** | **$h, k, l$ unmixed (all even or all odd)** | $(111), (200), (220), (311)$ |
* *Exam Tip*: If the first peak has $h^2+k^2+l^2 = 2 \implies (110) \implies \mathbf{BCC}$. If $h^2+k^2+l^2 = 3 \implies (111) \implies \mathbf{FCC}$.

---

### 5. Polymorphism & Allotropy
* **Polymorphism**: Existence of $>1$ crystal structure depending on $T$ and $P$. In elements: **Allotropy**.
* **Carbon**: Graphite ($sp^2$ 2D sheets, van der Waals, conductive lubricant) vs. Diamond ($sp^3$ tetrahedral network, hardest, insulator).
* **Iron ($\text{Fe}$)**: $\alpha\text{-Fe}$ (BCC, $<912^\circ\text{C}$) $\to$ $\gamma\text{-Fe}$ (FCC, $912-1394^\circ\text{C}$) $\to$ $\delta\text{-Fe}$ (BCC, $>1394^\circ\text{C}$).
  * *Volume Contraction*: Heating through $912^\circ\text{C}$ causes iron to contract because FCC ($\text{APF} = 0.74$) is denser than BCC ($\text{APF} = 0.68$).
