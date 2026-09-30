# MIAE 221: Materials Science for Engineers
# Part 4: Crystallographic Densities, XRD, Anisotropy & Bragg's Law Master Guide

---

## Executive Overview & Core Concepts

In solid-state materials engineering, macroscopic mechanical, physical, and optical behavior stems directly from how atoms populate specific spatial lines and crystallographic planes. This master guide covers the rigorous foundations of:
1. **Linear and Planar Atomic Densities**: Quantitative derivations of atom packing along direction vectors and planes.
2. **Directional Anisotropy vs. Polycrystalline Isotropy**: Why elasticity varies with direction in single crystals (e.g., turbine blades) while bulk polycrystalline metals behave isotropically.
3. **Interplanar Spacing & X-Ray Diffraction (XRD)**: The wave-optics principles of constructive interference and the mathematical derivation of Bragg's Law.
4. **Powder Diffractometry & Crystal Identification**: How diffraction spectra and selection rules reveal unknown lattice parameters and crystal structures.
5. **Polymorphism & Allotropy**: Temperature/pressure-induced structural phase shifts in carbon and iron.

---

## 1. Linear Atomic Density ($LD$)

### Definition & Physical Principle
**Linear Density ($LD$)** is the number of atom diameters intercepted per unit length along a specific crystallographic direction vector:

$$LD = \frac{\text{Number of atomic diameters centered on the direction vector}}{\text{Length of the direction vector}} = \frac{n}{L}$$

* **Counting Rule**: For an atom to be counted toward linear density, its **center must lie directly on the direction vector**.
* End atoms whose centers terminate a line segment inside a unit cell contribute $\frac{1}{2}$ atom each.
* Atoms whose centers lie strictly along the interior of the line segment contribute $1$ full atom each.

---

### Quantitative Derivation: FCC [100] Direction

![Linear Density in FCC Unit Cell](./images/linear_density_fcc_100.png)
*Figure 4.1: Linear density calculation along the $[100]$ direction in a Face-Centered Cubic (FCC) unit cell (Dr. Medraj MIAE 221 Lecture 6). Atoms are centered only at the two cube corners along the edge length $a$.*

1. **Direction Vector Length**:
   The direction $[100]$ lies along the edge of the cubic unit cell.
   $$L = a$$
   In FCC, the lattice parameter relates to atomic radius $R$ by $a\sqrt{2} = 4R \implies a = 2\sqrt{2}R$.
   $$L = 2\sqrt{2}R$$

2. **Atoms Centered on the Vector**:
   The vector passes through two corner atoms. The face-center atoms do not lie on the edge.
   $$n = 2 \times \frac{1}{2} = 1 \text{ atom}$$

3. **Linear Density Formula**:
   $$LD_{[100]} = \frac{1}{a} = \frac{1}{2\sqrt{2}R}$$

4. **Numerical Example (FCC Aluminum)**:
   Given atomic radius $R = 0.143\text{ nm} = 0.143 \times 10^{-7}\text{ cm}$:
   $$a = 2\sqrt{2}(0.143\text{ nm}) = 0.4045\text{ nm}$$
   $$LD_{[100]} = \frac{1}{0.4045\text{ nm}} = \mathbf{2.47 \text{ nm}^{-1}} = 2.47 \times 10^7 \text{ cm}^{-1}$$

---

### Close-Packed Direction: FCC [110]

Along the $[110]$ face diagonal:
* Atoms touch continuously: $L = 4R$.
* Atom count: $2 \text{ corners} \times \frac{1}{2} + 1 \text{ face center} = 2 \text{ atoms}$.
* Linear Density:
  $$LD_{[110]} = \frac{2}{4R} = \frac{1}{2R}$$
* For Aluminum: $LD_{[110]} = \frac{1}{2(0.143\text{ nm})} = \mathbf{3.50 \text{ nm}^{-1}}$.
* **Physical Insight**: $LD_{[110]} > LD_{[100]}$ ($3.50\text{ nm}^{-1} > 2.47\text{ nm}^{-1}$). The $[110]$ direction is the **close-packed direction** in FCC; this is why plastic deformation (dislocation glide) occurs preferentially along $\langle 110 \rangle$.

---

## 2. Planar Atomic Density ($PD$)

### Definition & Physical Principle
**Planar Density ($PD$)** is the number of atoms centered on a crystallographic plane per unit area of that plane:

$$PD = \frac{\text{Number of atoms centered on the plane}}{\text{Area of the plane}} = \frac{n}{A}$$

* **Centering Law**: Only atoms whose centers lie strictly within the geometric boundary of the plane are counted.
* Corner atoms of a planar polygon contribute fractional areas based on their interior plane angles.

---

### Quantitative Derivation: FCC (110) Plane

![Planar Density in FCC Unit Cell](./images/planar_density_fcc_110.png)
*Figure 4.2: Planar density geometry for the $(110)$ plane in an FCC crystal (Dr. Medraj Lecture 6). The plane intersects the unit cell as a rectangle of dimensions $a$ by $a\sqrt{2}$.*

1. **Planar Geometry & Area**:
   The $(110)$ plane cuts diagonally across the FCC unit cell, forming a rectangle:
   * Vertical height = $a$
   * Horizontal width = Face diagonal $= a\sqrt{2}$
   $$\text{Area } A = a \times a\sqrt{2} = a^2\sqrt{2}$$
   Substituting $a = 2\sqrt{2}R$:
   $$A = (2\sqrt{2}R)^2 \sqrt{2} = 8R^2 \sqrt{2} = 8\sqrt{2}R^2$$

2. **Number of Centered Atoms ($n$)**:
   * $4$ corner atoms: each interior corner angle of the rectangle is $90^\circ$ ($\frac{90^\circ}{360^\circ} = \frac{1}{4}$ of a circle).
     $$4 \times \frac{1}{4} = 1 \text{ atom}$$
   * $2$ face-centered atoms: located on the top and bottom faces, each halved by the boundary edge of the rectangle.
     $$2 \times \frac{1}{2} = 1 \text{ atom}$$
   * Total centered atoms:
     $$n = 1 + 1 = 2 \text{ atoms}$$

3. **Planar Density Formula**:
   $$PD_{(110)} = \frac{n}{A} = \frac{2}{8\sqrt{2}R^2} = \frac{1}{4\sqrt{2}R^2}$$

4. **Numerical Example (FCC Aluminum)**:
   With $R = 0.143\text{ nm}$:
   $$PD_{(110)} = \frac{1}{4\sqrt{2}(0.143\text{ nm})^2} = \frac{1}{4(1.4142)(0.02045\text{ nm}^2)} = \mathbf{8.64 \text{ atoms/nm}^2}$$

---

### Engineering Significance of $LD$ and $PD$

1. **Slip Systems & Plastic Deformation**:
   * Dislocation motion requires overcoming lattice friction (Peierls-Nabarro stress $\tau_{PN} \propto \exp(-2\pi d / b)$).
   * Planes with the **highest planar density** have the widest interplanar spacing ($d$), minimizing lattice resistance.
   * Consequently, plastic slip occurs along **directions of highest linear density** within **planes of highest planar density**:
     * **FCC Slip System**: $\{111\} \langle 110 \rangle$ (12 slip systems $\implies$ high ductility).
     * **BCC Slip System**: $\{110\} \langle 111 \rangle$ (48 active slip systems at elevated temperatures).
2. **Speed of Sound**: Sound waves propagate via phonon atomic collisions; acoustic velocities are highest along densely packed directions.
3. **Surface Energy & Catalysis**: Low planar density planes expose more unsatisfied ("dangling") chemical bonds, resulting in higher surface energy and heightened catalytic reactivity.

---

## 3. Directional Anisotropy vs. Polycrystalline Isotropy

![Elastic Modulus Anisotropy in BCC Iron](./images/elastic_modulus_anisotropy_bcc_iron.png)
*Figure 4.3: Directional dependence (anisotropy) of the Elastic Modulus $E$ in single-crystal BCC Iron (Dr. Medraj Lecture 6). Left: 3D spatial stiffness surface showing dramatic variation between $[111]$ and $[100]$. Right: Polycrystalline aggregate exhibiting microscopic grain boundaries and macroscopic isotropy.*

### Single Crystals & Anisotropy
In a **single crystal**, the periodic arrangement of atoms is continuous across the entire volume without interruption:
* Physical properties (stiffness, electrical conductivity, magnetic susceptibility, refractive index) depend on the crystallographic direction along which they are measured. This directionality is called **anisotropy**.
* **BCC Iron ($Fe$) Case Study**:
  * $[111]$ direction (body diagonal, close-packed): $E_{[111]} = \mathbf{272.7 \text{ GPa}}$ (stiffest direction).
  * $[110]$ direction (face diagonal): $E_{[110]} = \mathbf{210.5 \text{ GPa}}$.
  * $[100]$ direction (cube edge, most open): $E_{[100]} = \mathbf{125.0 \text{ GPa}}$ (most compliant direction).
  * Ratio: $\frac{E_{[111]}}{E_{[100]}} = 2.18$! A single crystal of iron is more than twice as stiff along its body diagonal as along its cube edge.

### High-Performance Single Crystal Applications
* **Turbine Blades**: Modern aerospace jet engines operate at temperatures exceeding $1100^\circ\text{C}$. High-temperature creep occurs primarily via atomic diffusion along grain boundaries. By casting turbine blades as **single crystals** (e.g., PWA 1480, CMSX-4 nickel-base superalloys) oriented along the stiff $[001]$ growth direction, grain boundaries are eliminated, preventing creep failure.
* **Diamond Abrasives**: Industrial cutting tools exploit diamond's maximum hardness along specific crystallographic planes.

### Polycrystalline Aggregates & Isotropy
* Most engineering metals are **polycrystals** consisting of millions of microscopic grains separated by grain boundaries.
* If the grains are randomly oriented (equiaxed structure), directional variations average out over macroscopic dimensions, yielding **macroscopic isotropy**.
* When metals undergo heavy plastic deformation (e.g., cold rolling of sheet steel), grains develop a preferred crystallographic orientation (**texture**), reintroducing macroscopic anisotropy.

---

## 4. Interplanar Spacing ($d_{hkl}$)

In any crystal lattice, parallel atomic planes designated by Miller indices $(hkl)$ are separated by a constant perpendicular distance called the **interplanar spacing ($d_{hkl}$)**.

For **cubic crystal systems** ($a = b = c$):

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

### Key Geometric Relationships
* Higher Miller index planes have **smaller** interplanar spacings.
* For a cubic unit cell with lattice parameter $a$:
  * $d_{100} = \frac{a}{\sqrt{1^2 + 0^2 + 0^2}} = a$
  * $d_{110} = \frac{a}{\sqrt{1^2 + 1^2 + 0^2}} = \frac{a}{\sqrt{2}} \approx 0.707a$
  * $d_{111} = \frac{a}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{a}{\sqrt{3}} \approx 0.577a$
  * $d_{200} = \frac{a}{\sqrt{2^2 + 0^2 + 0^2}} = \frac{a}{2} = 0.500a$

---

## 5. X-Ray Diffraction (XRD) & Bragg's Law

X-ray diffraction is the definitive experimental technique used by materials scientists and engineers to identify unknown crystal structures, quantify lattice parameters, and measure residual stresses.

![Bragg's Law Path Difference Derivation](./images/braggs_law_path_difference_derivation.png)
*Figure 4.4: Derivation of Bragg's Law for X-ray diffraction from parallel crystallographic planes (Dr. Medraj Lecture 6). Constructive interference requires path difference $SQ + QT = 2d_{hkl}\sin\theta = n\lambda$.*

### Physical Mechanism of Diffraction
1. **Electromagnetic Wave Character**:
   X-rays are high-energy electromagnetic radiation with wavelengths ($\lambda \approx 0.05 - 0.2\text{ nm}$ or $0.5 - 2\text{ Å}$) on the same spatial scale as interatomic crystal spacings ($d \approx 0.1 - 0.3\text{ nm}$).
2. **Elastic Scattering**:
   When an incident X-ray beam strikes an atom, its electrons scatter the wave elastically without changing its wavelength.
3. **Constructive vs. Destructive Interference**:
   * Scattered rays from adjacent atomic planes travel different path lengths.
   * If the scattered waves emerge **out of phase**, destructive interference cancels their amplitude, yielding zero detected intensity.
   * If the scattered waves emerge **in phase**, constructive interference produces a sharp, intense diffracted beam.

---

### Mathematical Derivation of Bragg's Law

Consider two parallel planes of atoms with interplanar spacing $d_{hkl}$ struck by a monochromatic, in-phase X-ray beam at grazing angle $\theta$:
1. Ray 1 reflects from the top plane at point $P$.
2. Ray 2 reflects from the second plane at point $Q$, traveling an additional distance equal to $SQ + QT$.
3. From right triangles $\triangle SPQ$ and $\triangle TPQ$:
   $$\sin\theta = \frac{SQ}{d_{hkl}} \implies SQ = d_{hkl}\sin\theta$$
   $$\sin\theta = \frac{QT}{d_{hkl}} \implies QT = d_{hkl}\sin\theta$$
4. Total path difference ($\Delta$):
   $$\Delta = SQ + QT = 2 d_{hkl} \sin\theta$$
5. For the two waves to reinforce constructively, the extra distance must equal an integer number ($n$) of wavelengths:
   $$\Delta = n\lambda$$

$$\mathbf{n\lambda = 2 d_{hkl} \sin\theta}$$

Where:
* $n = 1, 2, 3\dots$ is the **order of reflection** (typically $n = 1$).
* $\lambda$ = Wavelength of the incident X-ray beam (commonly $Cu\text{-}K_\alpha: \lambda = 0.15418\text{ nm}$ or $Fe\text{-}K_\alpha: \lambda = 0.1790\text{ nm}$).
* $d_{hkl}$ = Interplanar spacing of the reflecting planes $(hkl)$.
* $\theta$ = **Bragg angle** (half of the detector angle $2\theta$).

---

## 6. Powder Diffractometry & Spectral Analysis

![XRD Diffractometer Geometry](./images/xrd_diffractometer_geometry.png)
*Figure 4.5: Goniometer geometry of an automated powder X-ray diffractometer (Dr. Medraj Lecture 6). The X-ray source, flat specimen, and scintillation detector rotate through angle $2\theta$.*

### The Powder Method
* A finely ground powder contains millions of microscopic, randomly oriented crystallites.
* By rotating the X-ray detector continuously across an angular sweep, every possible $(hkl)$ planar family will eventually satisfy Bragg's condition ($2d\sin\theta = \lambda$) at its specific angle $2\theta$.

![XRD Diffraction Spectrum Peaks](./images/xrd_diffraction_spectrum_peaks.png)
*Figure 4.6: Representative powder XRD diffractogram plotting diffracted intensity vs. diffraction angle $2\theta$ (Dr. Medraj Lecture 6). Each sharp peak corresponds to constructive diffraction from a specific crystallographic plane.*

---

### Systematic Reflection Rules (Extinction Conditions)

Due to destructive interference caused by atoms residing at center or face locations within a unit cell, certain $(hkl)$ reflections have exactly zero intensity:

| Crystal Structure | Allowed Reflections (Peaks Appear) | Forbidden Reflections (Extinct / Zero Intensity) |
| :--- | :--- | :--- |
| **BCC (Body-Centered Cubic)** | **$h + k + l = \text{Even}$**<br>$(110), (200), (211), (220), (310), (222)\dots$ | **$h + k + l = \text{Odd}$**<br>$(100), (111), (210), (300)\dots$ |
| **FCC (Face-Centered Cubic)** | **$h, k, l$ are all odd OR all even (Unmixed)**<br>$(111), (200), (220), (311), (222), (400)\dots$ | **$h, k, l$ are mixed (even and odd)**<br>$(100), (110), (210), (211)\dots$ |

> [!IMPORTANT]
> Notice that the **first diffraction peak** for BCC is always $(110)$, whereas the first diffraction peak for FCC is always $(111)$. This enables instant identification of unknown crystal lattices from experimental XRD patterns!

---

## 7. Step-by-Step Quantitative Exam Problem

*(Directly adapted from Dr. Medraj MIAE 221 Lecture 6, Slide 17)*

### Problem Statement
For Body-Centered Cubic (BCC) Iron ($\text{Fe}$):
1. Compute the **interplanar spacing** $d_{220}$ of the $(220)$ planes.
2. Determine the **diffraction angle ($2\theta$)** at which the $(220)$ reflection occurs.

**Given Data**:
* Lattice parameter of BCC Iron: $a = 0.2866\text{ nm}$ ($2.866 \times 10^{-10}\text{ m}$)
* X-ray radiation wavelength: $\lambda = 0.1790\text{ nm}$
* Reflection order: $n = 1$

---

### Step-by-Step Solution

#### Part (a): Compute Interplanar Spacing $d_{220}$
Using the cubic spacing formula for $(hkl) = (220)$:
$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

$$d_{220} = \frac{0.2866\text{ nm}}{\sqrt{2^2 + 2^2 + 0^2}} = \frac{0.2866\text{ nm}}{\sqrt{4 + 4 + 0}} = \frac{0.2866\text{ nm}}{\sqrt{8}}$$

$$\sqrt{8} = 2\sqrt{2} \approx 2.8284$$

$$d_{220} = \frac{0.2866}{2.8284} = \mathbf{0.1013 \text{ nm}} = \mathbf{1.013 \text{ \AA}}$$

---

#### Part (b): Compute the Diffraction Angle $2\theta$
Using Bragg's Law:
$$\lambda = 2 d_{220} \sin\theta$$

Solve for $\sin\theta$:
$$\sin\theta = \frac{\lambda}{2 d_{220}} = \frac{0.1790\text{ nm}}{2(0.1013\text{ nm})} = \frac{0.1790}{0.2026} \approx 0.8835$$

Compute $\theta$:
$$\theta = \arcsin(0.8835) = 62.07^\circ$$

The diffractometer instrument records the **diffraction angle $2\theta$**:
$$2\theta = 2 \times 62.07^\circ = \mathbf{124.14^\circ}$$

---

## 8. Polymorphism and Allotropy

![Polymorphism and Allotropy in Carbon and Iron](./images/polymorphism_allotropy_carbon_iron.png)
*Figure 4.7: Polymorphic structural allotropy (Dr. Medraj Lecture 6). Left: Carbon allotropes—Diamond (3D covalent network) vs. Graphite (2D hexagonal sheets). Right: Temperature-induced allotropic phase transformations in Iron.*

### Core Terminology
* **Polymorphism**: The phenomenon wherein a solid material can exist in more than one crystal structure depending on ambient temperature and pressure.
* **Allotropy**: Polymorphism occurring specifically in **elemental solids** (pure elements).

### Case Study 1: Carbon Allotropes
1. **Graphite**:
   * Atoms form 2D planar hexagonal arrays ($sp^2$ hybridized covalent bonding).
   * Parallel sheets are held together by exceptionally weak van der Waals secondary bonds.
   * *Properties*: Soft, slippery (superb solid lubricant), highly electrically conductive within basal planes.
2. **Diamond**:
   * Formed at high temperatures and extreme pressures ($> 1500^\circ\text{C}, > 5\text{ GPa}$).
   * Every carbon atom forms 4 rigid tetrahedral $sp^3$ covalent bonds ($109.5^\circ$).
   * *Properties*: Hardest known natural material ($10$ on Mohs scale), high thermal conductivity ($2000\text{ W/m}\cdot\text{K}$), wide-bandgap electrical insulator.

---

### Case Study 2: The Allotropy of Iron ($\text{Fe}$)

Iron exhibits three distinct crystalline allotropes between room temperature and its melting point ($1538^\circ\text{C}$):

| Phase | Temperature Range | Crystal Structure | Coordination Number ($CN$) | Atomic Packing Factor (APF) | Engineering Significance |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **$\alpha$-Ferrite** | Up to $912^\circ\text{C}$ | **BCC** | $8$ | $0.68$ | Ferromagnetic, low carbon solubility ($<0.022\text{ wt\%}$) |
| **$\gamma$-Austenite** | $912^\circ\text{C} - 1394^\circ\text{C}$ | **FCC** | $12$ | **$0.74$ (Denser!)** | Nonmagnetic, high carbon solubility (up to $2.14\text{ wt\%}$) |
| **$\delta$-Ferrite** | $1394^\circ\text{C} - 1538^\circ\text{C}$ | **BCC** | $8$ | $0.68$ | High-temperature stable BCC phase prior to melting |

> [!WARNING]
> **Volume Change During Heating ($\alpha \to \gamma$)**:
> When iron is heated through $912^\circ\text{C}$, it undergoes a phase transformation from BCC to FCC. Because FCC packs atoms more densely ($\text{APF} = 0.74$) than BCC ($\text{APF} = 0.68$), iron **contracts in volume** upon heating through $912^\circ\text{C}$! This phase transition is the fundamental basis for all steel heat treatment (quenching, tempering, martensitic transformation).

---

## 9. Master Synthesis & Exam Traps Matrix

| Exam Trap / Critical Concept | Common Student Error | Correct Physical Principle |
| :--- | :--- | :--- |
| **Diffraction Angle ($\theta$ vs. $2\theta$)** | Reporting $\theta$ as the final answer | The diffractometer records the detector angle **$2\theta$**. Always multiply $\theta$ by $2$! |
| **Centering Atoms in Planar Density** | Counting corner atoms on adjacent unit cells | Only atoms whose **centers** lie within the plane boundary contribute. |
| **BCC Systematic Extinctions** | Expecting $(100)$ or $(111)$ peaks in BCC iron | $h+k+l$ must be even! $(110)$ is the first allowed reflection; $(100)$ produces complete destructive interference. |
| **FCC Systematic Extinctions** | Expecting $(110)$ peaks in FCC aluminum | $h,k,l$ must be unmixed! $(111)$ is the first peak; $(110)$ is mixed (even+odd) and extinct. |
| **Single Crystal vs. Polycrystal** | Assuming all metals are anisotropic | Randomly oriented polycrystals exhibit **macroscopic isotropy** because directional variations cancel out. |
