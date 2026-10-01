# MIAE 221: Materials Science for Engineers
# Part 6: Mechanical Properties of Metals Master Guide

---

## Executive Overview & Core Engineering Principles

In engineering design, structural integrity is paramount. Whether sizing an aircraft spar, selecting a pressure vessel alloy, or designing automotive suspension coils, materials must withstand operational loads without catastrophic failure or excessive deflection.

The mechanical properties of materials characterize how they deform and resist applied external loads. These properties are measured via standardized laboratory destructive tests (primarily the **uniaxial tensile test**, **hardness test**, and **impact/flexure tests**) governed by international standards (ASTM / ISO).

This master guide provides a comprehensive, mathematically rigorous breakdown of:
1. **Stress and Strain Concepts**: Tension, compression, shear, engineering definitions vs. instantaneous true variables.
2. **Elastic Deformation**: Hooke's Law, Young's Modulus ($E$), Poisson's Ratio ($\nu$), shear modulus ($G$), and their direct physical origin in the curvature of the interatomic potential energy well ($E \propto [dF/dr]_{r_0}$).
3. **Plastic Deformation & Yielding**: Proportional limit, the standardized $0.002$ ($0.2\%$) strain offset yield strength ($\sigma_y$), upper and lower yield phenomena (Lüders bands in low-carbon steel).
4. **Tensile Strength & Ductility**: Ultimate tensile strength (UTS), plastic instability criterion (necking), percent elongation ($\%EL$), and percent reduction in area ($\%RA$).
5. **Resilience & Toughness**: Modulus of resilience ($U_r = \sigma_y^2 / 2E$) vs. total fracture toughness (area under the complete stress-strain curve).
6. **True Stress-Strain Mechanics**: The Hollomon strain-hardening power law ($\sigma_T = K \epsilon_T^n$) and physical reasons for the divergence between true and engineering curves.
7. **Hardness Testing**: Principles, loading geometries, and mathematical formulas for Brinell ($HB$), Rockwell ($HRA, HRB, HRC$), Vickers, and Knoop tests, and empirical relations to tensile strength.
8. **Fully Solved Calculation Archetypes**: Step-by-step solutions to past Concordia midterm problems.

---

## 1. Concepts of Stress and Strain

When an external force $F$ is applied to a structural member, the internal atoms resist displacement by generating opposing interatomic bonding forces. To make measurements independent of specimen geometry, engineering forces and deformations are normalized into **stress** and **strain**.

### Engineering Stress ($\sigma$)
Engineering stress is defined as the instantaneous applied instantaneous normal load $F$ divided by the **original, undeformed cross-sectional area** $A_0$:

$$\sigma = \frac{F}{A_0}$$

* **SI Units**: Pascals ($\text{Pa} = \text{N/m}^2$). In materials engineering, standard stresses are expressed in **Megapascals** ($1\text{ MPa} = 10^6\text{ Pa} = 1\text{ N/mm}^2$) or **Gigapascals** ($1\text{ GPa} = 10^9\text{ Pa} = 10^3\text{ MPa}$).
* **Imperial Units**: Pounds per square inch ($\text{psi}$) or kilopounds per square inch ($1\text{ ksi} = 1000\text{ psi} \approx 6.895\text{ MPa}$).

### Engineering Strain ($\epsilon$)
Engineering strain is the fractional elongation or contraction along the loading axis, defined as the change in gauge length $\Delta l$ divided by the **original gauge length** $l_0$:

$$\epsilon = \frac{l_i - l_0}{l_0} = \frac{\Delta l}{l_0}$$

* **Units**: Dimensionless ($\text{m/m}$ or $\text{mm/mm}$), often expressed as a percentage ($\epsilon \times 100\%$).

### Shear Stress ($\tau$) and Shear Strain ($\gamma$)
When forces act parallel (tangential) to the planar surface rather than perpendicular:
* **Shear Stress**: $\tau = \dfrac{F_s}{A_0}$
* **Shear Strain**: $\gamma = \tan \theta \approx \theta$ (in radians), where $\theta$ is the angular distortion produced by the shear force.

---

## 2. Elastic Deformation & The Physics of Stiffness

### Hooke's Law & Young's Modulus ($E$)
For most engineering metals subjected to relatively low tensile stresses, deformation is **elastic** (completely reversible). When the applied load is released, the specimen snaps back instantly to its exact original dimensions.

In this linear regime, stress and strain obey **Hooke's Law**:

$$\sigma = E \cdot \epsilon$$

Where:
* $E$ = **Modulus of Elasticity** (also known as **Young's Modulus**), representing the slope of the linear elastic region on a $\sigma - \epsilon$ plot:
  $$E = \frac{\Delta \sigma}{\Delta \epsilon}$$
* Physical meaning: $E$ is a direct macroscopic measure of a material's **stiffness**—its resistance to elastic stretching.

| Material Class | Typical Young's Modulus $E$ ($\text{GPa}$) | Interatomic Bond Type |
| :--- | :--- | :--- |
| **Ceramics & Diamond** (Diamond, $\text{Al}_2\text{O}_3$, $\text{SiC}$) | $300 - 1000$ | Covalent / Strong Ionic |
| **Refractory Metals** (Tungsten, Osmium, Molybdenum) | $320 - 410$ | Very Strong Metallic |
| **Structural Steels** (Carbon & Alloy Steels) | $200 - 210$ | Strong Metallic |
| **Titanium Alloys** | $105 - 120$ | Metallic |
| **Copper & Brasses** | $95 - 130$ | Metallic |
| **Aluminum Alloys** | $69 - 73$ | Metallic |
| **Polymers** (PE, PP, Nylon, PTFE) | $0.1 - 4.0$ | Weak Secondary (van der Waals) |

### The Atomic Origin of Elastic Modulus
Why does diamond have $E \approx 1000\text{ GPa}$ while lead has $E \approx 16\text{ GPa}$?

Macroscopic elastic deformation corresponds microscopically to slightly stretching the equilibrium interatomic distance $r_0$ between bonded atoms against their mutual potential well:
1. At equilibrium separation $r_0$, the net interatomic force is zero: $F_{\text{net}}(r_0) = 0$.
2. For small atomic displacements $\Delta r = r - r_0$, Taylor expansion of the force curve yields:
   $$F(\Delta r) \approx \left(\frac{dF}{dr}\right)_{r_0} \cdot \Delta r$$
3. Because stress $\sigma \propto F/r_0^2$ and strain $\epsilon \propto \Delta r / r_0$, Young's modulus is directly proportional to the slope of the net force curve at equilibrium:
   $$E \propto \left(\frac{dF}{dr}\right)_{r_0} = \left(\frac{d^2 E_{\text{pot}}}{dr^2}\right)_{r_0}$$

> [!IMPORTANT]
> **Golden Principle**: The elastic modulus $E$ is directly determined by the **curvature (steepness)** of the interatomic potential energy well at its minimum.
> * A deep, narrow potential well (strong chemical bonds) has a steep force-displacement slope $\implies$ **High $E$ and High Melting Temperature $T_m$**.
> * A shallow, wide potential well (weak chemical bonds) has a gentle slope $\implies$ **Low $E$ and Low $T_m$**.
> * Because $E$ is an intrinsic atomic property, it cannot be significantly altered by cold working, heat treating, or minor alloying. (All carbon steels have $E \approx 207\text{ GPa}$, whether annealed or hardened!).

### Poisson's Ratio ($\nu$)
When a prismatic bar is pulled in uniaxial tension along the $z$-axis, it elongates axially ($\epsilon_z > 0$). Simultaneously, its cross-sectional dimensions must contract laterally ($\epsilon_x < 0, \epsilon_y < 0$) to conserve mass and volume.

**Poisson's ratio** ($\nu$) is defined as the negative ratio of the lateral (transverse) strain to the axial (longitudinal) strain:

$$\nu = -\frac{\epsilon_x}{\epsilon_z} = -\frac{\epsilon_y}{\epsilon_z}$$

* Because $\epsilon_x$ is compressive (negative) during tensile elongation, the minus sign ensures that $\nu$ is a **positive constant** for normal engineering materials.
* For typical isotropic metals: $\nu \approx 0.25 - 0.35$ (for steels, $\nu \approx 0.30$; for brass and aluminum, $\nu \approx 0.33$).
* The theoretical thermodynamic upper limit for incompressible elastic materials is $\nu = 0.50$ (e.g. natural rubber).

### Elastic Relationships for Isotropic Materials
For an isotropic material (properties identical in all crystallographic directions), the elastic constants are related by:

$$G = \frac{E}{2(1 + \nu)}$$

Where $G$ is the **Shear Modulus** ($\tau = G \cdot \gamma$).

---

## 3. Plastic Deformation & Yielding Criteria

Once the applied stress exceeds the elastic limit, bonds do not merely stretch—entire planes of atoms slide irreversibly past one another via the movement of **dislocations**. This irreversible, permanent deformation is **plastic deformation**.

```
Stress (σ)
  ▲
  │               UTS (Necking begins)
  │              .---.
  │            /       \
  │          /           \ Fracture (σ_f)
  │  σ_y .-'               X
  │     /│
  │    / │
  │   /  │
  │  /   │
  │ /    │
  │/     │
  └──────┴──────────────────────► Strain (ε)
  0    0.002
```

### 1. Yield Strength ($\sigma_y$) and the $0.002$ Offset Method
In most metals (copper, aluminum, austenitic stainless steel), the transition from elastic to plastic behavior is smooth and gradual. To establish an unambiguous, reproducible engineering definition:

1. Locate $\epsilon = 0.002$ ($0.2\%$) on the horizontal strain axis.
2. Draw a straight line parallel to the elastic modulus slope ($E$): $\sigma = E(\epsilon - 0.002)$.
3. The stress at the intersection of this line with the experimental stress-strain curve is defined as the **$0.2\%$ Offset Yield Strength ($\sigma_y$)**.

### 2. Yield Point Phenomenon (Upper & Lower Yield in Low-Carbon Steels)
In certain annealed low-carbon steels, the stress-strain curve displays a distinct upper yield point followed by a sudden drop to a fluctuating lower yield plateau:
* **Upper Yield Point**: Interstitial carbon and nitrogen atoms cluster around dislocation cores (forming **Cottrell atmospheres**), pinning them securely. A high stress is required to tear dislocations free from these solute clusters.
* **Lower Yield Point**: Once free, dislocations multiply rapidly and glide at significantly lower stress levels, creating visible discrete bands of localized plastic deformation across the specimen termed **Lüders bands**.
* For design of low-carbon steels, the **lower yield point** is conventionally used as the conservative yield strength $\sigma_y$.

---

## 4. Tensile Strength, Ductility, Resilience & Toughness

### Ultimate Tensile Strength (UTS, $\sigma_{\text{UTS}}$)
The **tensile strength** is the maximum engineering stress sustained by the specimen, corresponding to the peak of the engineering stress-strain curve:

$$\sigma_{\text{UTS}} = \frac{F_{\max}}{A_0}$$

* **Prior to UTS**: Plastic deformation is uniform across the entire gauge length. Strain hardening strengthens the metal faster than the cross-section shrinks.
* **At UTS**: A geometric instability occurs—the rate of strain hardening can no longer compensate for the reduction in cross-sectional area.
* **Beyond UTS**: Deformation concentrates exclusively into a localized region known as the **neck**, where the cross-sectional area contracts rapidly until rupture.

### Ductility ($\%EL$ and $\%RA$)
Ductility is the degree of plastic deformation a material can endure before fracture. Materials that experience little or no plastic strain prior to breaking are termed **brittle** ($\%EL < 5\%$).

Ductility is quantified by two parameters measured on the fractured specimen:
1. **Percent Elongation ($\%EL$)**:
   $$\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\%$$
   * $l_0$ = Original gauge length (typically $50\text{ mm}$ or $2\text{ inches}$).
   * $l_f$ = Gauge length after fracture (measured by fitting the broken pieces back together).

2. **Percent Reduction in Area ($\%RA$)**:
   $$\%RA = \left(\frac{A_0 - A_f}{A_0}\right) \times 100\% = \left(1 - \frac{d_f^2}{d_0^2}\right) \times 100\%$$
   * $A_0 = \frac{\pi}{4}d_0^2$ = Original cross-sectional area.
   * $A_f = \frac{\pi}{4}d_f^2$ = Minimum cross-sectional area measured at the fracture neck.

> [!WARNING]
> Always verify whether a question asks for reduction in diameter or reduction in area! Area scales with $d^2$. For example, a specimen necking from $d_0 = 12.8\text{ mm}$ to $d_f = 6.6\text{ mm}$ undergoes a $48.4\%$ reduction in diameter, but a **$73.4\%$ reduction in area**!

### Modulus of Resilience ($U_r$)
**Resilience** is the capacity of a material to absorb energy when deformed elastically and then release that energy upon unloading without permanent deformation (crucial for springs, shock absorbers, and tennis rackets).

The **Modulus of Resilience ($U_r$)** is the strain energy per unit volume absorbed up to yielding, represented by the area under the linear elastic portion of the stress-strain curve:

$$U_r = \int_0^{\epsilon_y} \sigma \, d\epsilon = \frac{1}{2} \sigma_y \cdot \epsilon_y = \frac{1}{2} \sigma_y \left(\frac{\sigma_y}{E}\right) = \frac{\sigma_y^2}{2E}$$

* **Units**: Joules per cubic meter ($\text{J/m}^3$) or $\text{kJ/m}^3$ ($1\text{ Pa} = 1\text{ J/m}^3$).
* To maximize resilience: A material must have a **high yield strength ($\sigma_y$)** combined with a **low modulus of elasticity ($E$)** (e.g. spring steels, titanium alloys).

### Toughness
**Toughness** is the ability of a material to absorb energy and deform plastically before fracturing. It is represented by the **total area under the complete stress-strain curve** from zero to fracture:
* A strong, ductile material (such as medium-carbon steel) exhibits high toughness.
* A high-strength ceramic may have high yield and tensile strength, but near-zero ductility, making its area small and its toughness very low (brittle).

---

## 5. True Stress and True Strain Mechanics

On an engineering stress-strain curve, the stress appears to decrease after the UTS until fracture occurs. This is an artifact of the calculation method, because the engineering formula divides load by the *initial* undeformed area $A_0$.

In reality, the metal continues to work-harden vigorously inside the neck. To describe true mechanical state, we use **true stress** and **true strain**.

### True Stress ($\sigma_T$)
The applied load divided by the **actual, instantaneous cross-sectional area** $A_i$:

$$\sigma_T = \frac{F}{A_i}$$

### True Strain ($\epsilon_T$)
The instantaneous rate of change in length integrated over the deformation history:

$$\epsilon_T = \int_{l_0}^{l_i} \frac{dl}{l} = \ln\left(\frac{l_i}{l_0}\right)$$

### Conversion Relationships (Valid Prior to Necking)
Assuming constant specimen volume during plastic deformation ($A_0 l_0 = A_i l_i$):

$$\sigma_T = \sigma(1 + \epsilon)$$

$$\epsilon_T = \ln(1 + \epsilon)$$

> [!CAUTION]
> These conversion formulas are **only valid up to the onset of necking (UTS)**! Once localized necking begins, strain is no longer uniform along the gauge length, and $A_i$ must be measured directly with an optical or mechanical extensometer at the neck.

### The Hollomon Power Law for Strain Hardening
For many metals in the region of uniform plastic deformation between yielding and necking, the true stress-strain curve follows the empirical **Hollomon equation**:

$$\sigma_T = K \cdot \epsilon_T^n$$

Where:
* $K$ = **Strength Coefficient** ($\text{MPa}$).
* $n$ = **Strain-Hardening Exponent** (dimensionless, typically $0.10 - 0.50$). A higher $n$ indicates greater work-hardening capacity (e.g., $n \approx 0.50$ for annealed copper/brass vs. $n \approx 0.15$ for high-strength steels).

---

## 6. Hardness Testing: Mechanics & Correlations

**Hardness** is a measure of a material's resistance to localized permanent surface indentation or scratching. Because hardness tests are non-destructive, inexpensive, and require no special specimen geometry, they are universally used in quality control.

### Comparison of Standard Hardness Testing Methods

| Test Method | Indenter Geometry | Applied Load | Measurement Metric | Typical Use / Applications |
| :--- | :--- | :--- | :--- | :--- |
| **Rockwell** (ASTM E18) | Diamond cone ($120^\circ$) or hardened steel sphere ($1/16''$) | Minor: $10\text{ kgf}$<br>Major: $60, 100, 150\text{ kgf}$ | **Depth of indentation** (read directly on dial/digital gauge) | Standard workshop QC; Scales: **HRA** (hard carbides), **HRB** (brass/Al), **HRC** (hardened steels). |
| **Brinell** (ASTM E10) | Hardened steel or tungsten carbide ball ($D = 10\text{ mm}$) | $500 - 3000\text{ kgf}$ (held for $10-15\text{ s}$) | **Diameter of indentation ($d$)** measured with optical microscope | Cast irons, forged structural steels, coarse-grained alloys. |
| **Vickers** (ASTM E92) | Diamond square-based pyramid ($136^\circ$ face angle) | $1 - 120\text{ kgf}$ | Both diagonal lengths of the square impression ($d = [d_1+d_2]/2$) | All metals; creates a continuous single scale from soft lead to hard ceramic. |
| **Knoop** (ASTM E384) | Elongated rhombic diamond pyramid | $10 - 1000\text{ gf}$ | Long diagonal length under high-magnification microscope | **Microhardness**: thin coatings, individual microstructural phases, brittle glass. |

### Mathematical Derivation of Brinell Hardness Number ($HB$)
The Brinell Hardness Number is defined as the applied load $P$ (in $\text{kgf}$) divided by the curved surface area of the spherical cap impression $A_{\text{cap}}$:

1. Surface area of a spherical cap of depth $h$ cut from a sphere of diameter $D$:
   $$A_{\text{cap}} = \pi D h$$
2. From the Pythagorean theorem on the indenter geometry:
   $$\left(\frac{D}{2} - h\right)^2 + \left(\frac{d}{2}\right)^2 = \left(\frac{D}{2}\right)^2$$
   $$\frac{D^2}{4} - Dh + h^2 + \frac{d^2}{4} = \frac{D^2}{4} \implies Dh - h^2 = \frac{d^2}{4}$$
   Solving for depth $h$:
   $$h = \frac{D - \sqrt{D^2 - d^2}}{2}$$
3. Substituting $h$ into the cap area formula:
   $$A_{\text{cap}} = \pi D \left(\frac{D - \sqrt{D^2 - d^2}}{2}\right) = \frac{\pi D}{2}\left(D - \sqrt{D^2 - d^2}\right)$$
4. Dividing load $P$ by $A_{\text{cap}}$ gives the standard **Brinell Hardness Formula**:

$$HB = \frac{2P}{\pi D \left(D - \sqrt{D^2 - d^2}\right)}$$

### Empirical Correlation Between Hardness and Tensile Strength
For most structural steels and cast irons, there is an empirical linear relationship between Brinell hardness and ultimate tensile strength ($TS$):

$$TS\,(\text{MPa}) \approx 3.45 \times HB$$

$$TS\,(\text{psi}) \approx 500 \times HB$$

---

## 7. Fully Solved Master Problems (Curriculum Grounded)

### Problem 1: Complete 4-Part Brass Tensile Analysis (Chapter 6 Slide 38)
**Problem Statement**:
A cylindrical specimen of a brass alloy with initial diameter $d_0 = 12.8\text{ mm}$ and original length $l_0 = 250\text{ mm}$ is pulled in tension. From its experimental $\sigma-\epsilon$ curve:
* At stress $\sigma_1 = 150\text{ MPa}$, the engineering strain is $\epsilon_1 = 0.0016$.
* The $0.002$ offset line intersects the curve at $250\text{ MPa}$.
* The ultimate tensile strength is $\sigma_{\text{UTS}} = 450\text{ MPa}$.
* At tensile stress $\sigma = 345\text{ MPa}$, the total strain is $\epsilon = 0.060$.

Determine:
1. The modulus of elasticity ($E$).
2. The yield strength at $0.002$ strain offset ($\sigma_y$).
3. The maximum tensile load ($F_{\max}$) sustainable before necking.
4. The total elongation ($\Delta l$) of the specimen under a tensile stress of $345\text{ MPa}$.

#### Step-by-Step Solution:
**Part 1: Modulus of Elasticity ($E$)**
Within the initial linear elastic portion:
$$E = \frac{\Delta \sigma}{\Delta \epsilon} = \frac{150\text{ MPa} - 0}{0.0016 - 0} = \frac{150 \times 10^6\text{ N/m}^2}{0.0016} = 9.375 \times 10^{10}\text{ Pa} = \mathbf{93.8\text{ GPa}}$$

**Part 2: Yield Strength ($\sigma_y$)**
Directly read at the intersection of the $0.002$ strain offset line with the curve:
$$\sigma_y = \mathbf{250\text{ MPa}}$$

**Part 3: Maximum Tensile Load ($F_{\max}$)**
First calculate the original cross-sectional area:
$$A_0 = \frac{\pi d_0^2}{4} = \frac{\pi (12.8 \times 10^{-3}\text{ m})^2}{4} = 1.2868 \times 10^{-4}\text{ m}^2$$
The maximum load occurs at the ultimate tensile strength ($\sigma_{\text{UTS}} = 450\text{ MPa}$):
$$F_{\max} = \sigma_{\text{UTS}} \cdot A_0 = (450 \times 10^6\text{ N/m}^2) \times (1.2868 \times 10^{-4}\text{ m}^2) = 57,906\text{ N} \approx \mathbf{57.9\text{ kN}}$$

**Part 4: Elongation ($\Delta l$) at $345\text{ MPa}$**
Because $345\text{ MPa} > \sigma_y$ ($250\text{ MPa}$), deformation is plastic, so we cannot use Hooke's law! Reading directly from the stress-strain curve, $\sigma = 345\text{ MPa}$ corresponds to $\epsilon = 0.060$.
$$\Delta l = \epsilon \cdot l_0 = 0.060 \times 250\text{ mm} = \mathbf{15.0\text{ mm}}$$

---

### Problem 2: Ductility Metrics (Chapter 6 Slide 45)
**Problem Statement**:
A cylindrical metal specimen having an initial diameter $d_0 = 12.80\text{ mm}$ and gauge length $l_0 = 50.80\text{ mm}$ is pulled in tension to fracture. The broken pieces are fitted together:
* Fractured gauge length: $l_f = 72.14\text{ mm}$
* Minimum diameter at fracture neck: $d_f = 6.60\text{ mm}$

Calculate the ductility in terms of:
1. Percent elongation ($\%EL$)
2. Percent reduction in area ($\%RA$)

#### Step-by-Step Solution:
**1. Percent Elongation**:
$$\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\% = \left(\frac{72.14 - 50.80}{50.80}\right) \times 100\% = \left(\frac{21.34}{50.80}\right) \times 100\% = \mathbf{42.01\%}$$

**2. Percent Reduction in Area**:
$$\%RA = \left(\frac{A_0 - A_f}{A_0}\right) \times 100\% = \left(1 - \frac{d_f^2}{d_0^2}\right) \times 100\%$$
$$\%RA = \left(1 - \frac{6.60^2}{12.80^2}\right) \times 100\% = \left(1 - \frac{43.56}{163.84}\right) \times 100\% = (1 - 0.26587) \times 100\% = \mathbf{73.41\%}$$

---

### Problem 3: Modulus of Resilience Calculation
**Problem Statement**:
A high-strength alloy has a yield strength $\sigma_y = 300\text{ MPa}$ and a modulus of elasticity $E = 100\text{ GPa}$. Calculate its modulus of resilience $U_r$.

#### Step-by-Step Solution:
$$U_r = \frac{\sigma_y^2}{2E} = \frac{(300 \times 10^6\text{ Pa})^2}{2 \times (100 \times 10^9\text{ Pa})} = \frac{9.0 \times 10^{16}}{2.0 \times 10^{11}} = 4.5 \times 10^5\text{ J/m}^3 = \mathbf{450\text{ kJ/m}^3}$$

---

## 8. Exam Pitfalls & High-Yield Summary Table

| Metric | Formula | Key Units | Frequent Exam Pitfall |
| :--- | :--- | :--- | :--- |
| **Engineering Stress** | $\sigma = F / A_0$ | $\text{MPa}$ | Using instantaneous area $A_i$ instead of original area $A_0$. |
| **Young's Modulus** | $E = \Delta \sigma / \Delta \epsilon$ | $\text{GPa}$ | Unit conversion errors ($1\text{ GPa} = 10^3\text{ MPa} = 10^9\text{ Pa}$). |
| **Poisson's Ratio** | $\nu = -\epsilon_{\text{lateral}} / \epsilon_{\text{axial}}$ | Dimensionless | Dropping the negative sign (tensile lateral strain is negative). |
| **Yield Strength** | Read at $\epsilon = 0.002$ offset | $\text{MPa}$ | Drawing the offset line vertically rather than parallel to slope $E$. |
| **Tensile Strength** | $\sigma_{\text{UTS}} = F_{\max} / A_0$ | $\text{MPa}$ | Dividing by fracture area $A_f$ instead of original area $A_0$. |
| **Ductility ($\%RA$)** | $\%RA = (1 - d_f^2/d_0^2) \times 100\%$ | $\%$ | Subtracting diameters linearly instead of squaring to compute areas! |
| **Resilience** | $U_r = \sigma_y^2 / (2E)$ | $\text{kJ/m}^3$ | Forgetting the $1/2$ factor in the triangular elastic energy area. |
| **True Stress** | $\sigma_T = \sigma(1 + \epsilon)$ | $\text{MPa}$ | Applying this conversion beyond the UTS (invalid in the neck!). |
| **Brinell Hardness** | $HB = \frac{2P}{\pi D (D - \sqrt{D^2 - d^2})}$ | $\text{kgf/mm}^2$ | Using flat circle area ($\frac{\pi}{4}d^2$) instead of spherical cap area. |
