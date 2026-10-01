# Chapter 06: Mechanical Properties of Metals
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Materials Science (MIAE 221)  
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Edition) by William D. Callister, Jr. & David G. Rethwisch — Chapter 6

---

## 1. Executive Overview & First-Principles Philosophy

In engineering design, structural components are subjected to external mechanical forces during service: aircraft wing spars endure aerodynamic lift bending moments, automotive suspension control arms absorb road vibrations, and pressure vessels withstand internal fluid expansion.

To ensure safety and prevent catastrophic collapse, mechanical engineers must quantify **how materials deform (elastically or plastically) and fracture under load**.

Mechanical properties are not arbitrary numbers; they are fundamental material characteristics evaluated through standardized laboratory testing (ASTM standards). The cornerstone test is the **Uniaxial Tensile Test**:
* It separates **reversible elastic deformation** (stretching of atomic bonds) from **permanent plastic deformation** (irreversible dislocation slip).
* It provides quantitative design parameters: stiffness (Young's modulus $E$), load capacity before permanent distortion ($0.2\%$ offset yield strength $\sigma_y$), maximum load carrying capability (ultimate tensile strength $\sigma_u$), energy absorption capacity (resilience $U_r$ and toughness), and ductility ($\%EL, \%RA$).

---

## 2. Concepts of Stress and Strain (Callister §6.2)

To compare materials of different sizes and cross-sections objectively, testing loads ($F$) and deformations ($\Delta l$) are normalized by original specimen geometry into **Stress ($\sigma$)** and **Strain ($\epsilon$)**.

```
                             Mechanical Loading Modes
                                        │
     ┌──────────────────────┬───────────┴───────────┬──────────────────────┐
     ▼                      ▼                       ▼                      ▼
UNIAXIAL TENSION      COMPRESSION                 SHEAR                 TORSION
Pulls material apart  Squeezes material together  Opposing parallel face Pure rotational
σ = F / A₀ > 0        σ = -F / A₀ < 0             τ = F / A₀            shear stress
```

### 2.1 Engineering Stress & Engineering Strain

#### A. Engineering Stress ($\sigma$)
The instantaneous tensile force $F$ applied perpendicular to the original cross-sectional area $A_0$:
$$\sigma = \frac{F}{A_0}$$
* **SI Units**: Pascals ($\text{Pa} = \text{N/m}^2$). In engineering practice, we use Megapascals ($\text{MPa} = 10^6\text{ N/m}^2 = \text{N/mm}^2$) or Gigapascals ($\text{GPa} = 10^9\text{ N/m}^2 = 10^3\text{ MPa}$).

#### B. Engineering Strain ($\epsilon$)
The elongation of the specimen gauge length $\Delta l$ divided by the initial gauge length $l_0$:
$$\epsilon = \frac{l_i - l_0}{l_0} = \frac{\Delta l}{l_0}$$
* **Units**: Dimensionless ($\text{m/m}$ or $\text{mm/mm}$). Frequently expressed as a percentage: $\% \text{ Strain} = \epsilon \times 100\%$.

#### C. Shear Stress ($\tau$) & Shear Strain ($\gamma$)
* **Shear Stress ($\tau$)**: Force applied parallel to the planar cross-section:
  $$\tau = \frac{F}{A_0}$$
* **Shear Strain ($\gamma$)**: The tangent of the angular shear distortion angle $\theta$ (in radians):
  $$\gamma = \tan\theta \approx \theta$$

---

## 3. Elastic Deformation & Hooke's Law (Callister §6.3 – §6.5)

### 3.1 Hooke's Law in Uniaxial Tension
When a metal is subjected to low stress levels, deformation is **elastic**: stress and strain are linearly proportional. If the load is released, the specimen snaps back instantly to its original dimensions with zero permanent distortion.
$$\sigma = E \epsilon$$
where $E$ is the **Modulus of Elasticity (Young's Modulus)**.
* **Physical Origin**: $E$ represents the macroscopic stiffness of the material—the slope of the linear elastic region. At the atomic scale, $E$ is proportional to the curvature (second derivative) at the bottom of the interatomic potential energy well:
  $$E \propto \left. \frac{d^2E_N}{dr^2} \right|_{r_0}$$
* **Typical Modulus Values**:
  * Diamond: $E \approx 1000\text{ GPa}$
  * Tungsten: $E \approx 407\text{ GPa}$
  * Structural Steel: $E \approx 207\text{ GPa}$
  * Titanium Alloys: $E \approx 107 - 115\text{ GPa}$
  * Aluminum Alloys: $E \approx 69 - 72\text{ GPa}$
  * Polyethylene (Polymer): $E \approx 0.2 - 1.0\text{ GPa}$

---

### 3.2 Poisson's Ratio ($\nu$)
When a solid is pulled in tension along the $z$-axis, it elongates axially ($\epsilon_z > 0$). Concurrently, to conserve volume, it **contracts laterally** in the transverse $x$ and $y$ directions ($\epsilon_x < 0, \epsilon_y < 0$).

**Poisson's Ratio ($\nu$)** is defined as the negative ratio of lateral (transverse) strain to longitudinal (axial) strain:
$$\nu = -\frac{\epsilon_x}{\epsilon_z} = -\frac{\epsilon_y}{\epsilon_z} = -\frac{\Delta d / d_0}{\Delta l / l_0}$$
* **Theoretical Range**: For isotropic materials, $0 \le \nu \le 0.50$.
  * For ideal incompressible solids ($\Delta V = 0$): $\nu = 0.50$ (e.g., rubber).
  * For most engineering metals and alloys: $\nu \approx 0.25 - 0.35$ (typically $\nu \approx 0.33$).
  * For cork: $\nu \approx 0$ (does not expand laterally when compressed).

### 3.3 Elastic Relationships for Isotropic Materials
For an isotropic material (properties identical in all spatial directions), only two independent elastic constants exist. Young's modulus $E$, Shear modulus $G$, Bulk modulus $K$, and Poisson's ratio $\nu$ are mathematically linked:
$$G = \frac{E}{2(1 + \nu)}$$
$$K = \frac{E}{3(1 - 2\nu)}$$
* Since $\nu \approx 0.33$ for most metals:
  $$G \approx \frac{E}{2(1 + 0.33)} = \frac{E}{2.66} \approx 0.38 E \implies G \approx 0.4 E$$
  The shear modulus of a metal is roughly $40\%$ of its tensile elastic modulus!

---

## 4. Tensile Properties & The Stress-Strain Curve (Callister §6.6)

![Callister Figure 6.11 - Engineering Tensile Stress-Strain Behavior](./images/callister_fig_6_11_tensile_stress_strain.png)
*Figure 6.11: Typical engineering stress-strain curve for a ductile metal showing elastic deformation, proportional limit $P$, $0.2\%$ offset yield strength $\sigma_y$, ultimate tensile strength $M$, necking onset, and fracture point $F$ — from Callister & Rethwisch 10th Ed. (Fig. 6.11).*

### 4.1 Yielding & The $0.2\%$ Offset Yield Strength ($\sigma_y$)
As stress increases beyond the elastic limit, atomic planes begin to slide over one another via dislocation motion. The material undergoes **plastic deformation** (permanent, unrecoverable strain).

Because the transition from elastic to plastic behavior is gradual, engineers use the **$0.2\%$ Strain Offset Method** to define a reproducible yield strength:

![Callister Figure 6.12 - The 0.2% Offset Yield Strength Method](./images/callister_fig_6_12_yield_offset_brass.png)
*Figure 6.12: Determination of the $0.2\%$ offset yield strength $\sigma_y$ on a brass alloy stress-strain curve by drawing a line parallel to the elastic modulus starting at $\epsilon = 0.002$ — from Callister & Rethwisch 10th Ed. (Fig. 6.12).*

#### The 3-Step Offset Yield Algorithm:
1. Locate strain $\epsilon = 0.002$ ($0.2\%$) on the horizontal strain axis.
2. Construct a straight line starting at $\epsilon = 0.002$ with a slope exactly equal to the initial Young's modulus ($E$).
3. The stress at the intersection of this parallel line with the experimental stress-strain curve is the **$0.2\%$ Offset Yield Strength ($\sigma_y$)**.

* **Yield Point Phenomenon in Low-Carbon Steels**:
  Certain annealed steels display an abrupt transition: an **Upper Yield Point** followed by an immediate drop to a **Lower Yield Point** where plastic flow propagates at constant stress (Lüders bands).
  * *Physical Cause*: Small interstitial carbon and nitrogen atoms diffuse to the core of edge dislocations, forming dense **Cottrell atmospheres** that lock the dislocations. Once the stress reaches the upper yield point, dislocations break free from their carbon clouds and multiply rapidly, lowering the stress required to sustain plastic flow.

---

### 4.2 Ultimate Tensile Strength (UTS / $\sigma_u$) & Necking
The **Ultimate Tensile Strength ($\sigma_u$)** is the maximum engineering stress recorded on the engineering stress-strain curve:
$$\sigma_u = \frac{F_{\max}}{A_0}$$
* **Deformation Modes Before and After UTS**:
  * **From $\sigma = 0$ up to $\sigma_u$**: Plastic deformation is **uniform** along the entire gauge length. Strain hardening strengthens the metal faster than the cross-sectional area thins.
  * **At $\sigma = \sigma_u$**: Strain hardening can no longer compensate for cross-sectional thinning. A localized geometric instability occurs: **Necking initiates**.
  * **From $\sigma_u$ to Fracture**: All subsequent plastic deformation concentrates exclusively within the necked region. The engineering stress falsely appears to decrease until the specimen tears apart at the fracture stress $\sigma_f$.

---

### 4.3 Ductility: $\%EL$ and $\%RA$
**Ductility** measures the degree of plastic deformation a material can sustain before fracture:
1. **Percent Elongation ($\%EL$)**:
   $$\%EL = \frac{l_f - l_0}{l_0} \times 100\%$$
   where $l_f$ is the fracture gauge length measured after fitting the broken pieces back together.
2. **Percent Reduction in Area ($\%RA$)**:
   $$\%RA = \frac{A_0 - A_f}{A_0} \times 100\%$$
   where $A_f$ is the minimum cross-sectional area measured at the fracture neck.
* *Engineering Threshold*: Materials with $\%EL > 5\%$ are classified as **ductile**; materials with $\%EL < 5\%$ are classified as **brittle**.

---

### 4.4 Modulus of Resilience ($U_r$) & Modulus of Toughness

#### A. Modulus of Resilience ($U_r$)
Resilience is the capacity of a material to absorb energy when deformed elastically and release that energy upon unloading without permanent distortion.
Mathematically, $U_r$ is the area under the engineering stress-strain curve up to yielding:
$$U_r = \int_0^{\epsilon_y} \sigma \, d\epsilon = \frac{1}{2} \sigma_y \epsilon_y$$
Using Hooke's Law $\epsilon_y = \frac{\sigma_y}{E}$:
$$U_r = \frac{\sigma_y^2}{2E}$$
* **SI Units**: $\text{J/m}^3 = \text{Pa} = \text{N}\cdot\text{m/m}^3$.
* **Engineering Design**: High resilience requires a **high yield strength ($\sigma_y$)** combined with a **low elastic modulus ($E$)** (e.g., mechanical spring steels, archery bows).

#### B. Modulus of Toughness
Toughness is the total mechanical energy absorbed per unit volume up to the point of catastrophic fracture.
* Mathematically: The **total area under the entire engineering stress-strain curve** from $\epsilon = 0$ to $\epsilon_f$.
* **Requirement for High Toughness**: A material must exhibit **BOTH high strength AND high ductility**. A ceramic has high strength but zero ductility $\implies$ low toughness. Pure lead has extreme ductility but near-zero strength $\implies$ low toughness. Structural alloy steels possess high strength and high ductility $\implies$ exceptionally high toughness.

---

## 5. True Stress and True Strain (Callister §6.7)

Why does the engineering stress-strain curve show a drop in stress after necking ($\sigma_u \to \sigma_f$)?
Because engineering stress $\sigma = F/A_0$ divides the load by the **initial area $A_0$**, which ignores the dramatic thinning occurring in the neck! The actual load-bearing area $A_i$ decreases far faster than the load decreases, meaning the material inside the neck is actually becoming stronger right up to fracture!

To represent the true physical behavior of the metal, we define:
1. **True Stress ($\sigma_T$)**: Instantaneous load divided by instantaneous cross-sectional area:
   $$\sigma_T = \frac{F}{A_i}$$
2. **True Strain ($\epsilon_T$)**: Incremental logarithmic strain:
   $$\epsilon_T = \int_{l_0}^{l_i} \frac{dl}{l} = \ln\left( \frac{l_i}{l_0} \right)$$

### 5.1 Conversion Formulas (Valid ONLY up to Necking Onset)
Assuming plastic deformation occurs at **constant volume** ($V = A_0 l_0 = A_i l_i \implies \frac{A_0}{A_i} = \frac{l_i}{l_0}$):
$$\frac{l_i}{l_0} = \frac{l_0 + \Delta l}{l_0} = 1 + \epsilon$$
$$\sigma_T = \frac{F}{A_i} = \frac{F}{A_0} \left( \frac{A_0}{A_i} \right) = \sigma \left( \frac{l_i}{l_0} \right) = \sigma (1 + \epsilon)$$
$$\epsilon_T = \ln\left( \frac{l_i}{l_0} \right) = \ln(1 + \epsilon)$$
* ⚠️ **Critical Boundary Condition**: These formulas are strictly valid **only up to the onset of necking ($\sigma \le \sigma_u$)**. Once necking initiates, deformation is non-uniform, and true stress must be calculated directly from measured neck geometry: $\sigma_T = F / A_{\text{neck}}$ and $\epsilon_T = \ln(A_0 / A_{\text{neck}})$.

### 5.2 Strain Hardening & The Hollomon Power Law
For most metals in the plastic regime between yielding and necking, the true stress-true strain curve obeys the **Hollomon Equation**:
$$\sigma_T = K \epsilon_T^n$$
where:
* $K$ = **Strength Coefficient** ($\text{MPa}$).
* $n$ = **Strain-Hardening Exponent** ($0 \le n \le 1$). High $n$ means the material hardens rapidly with deformation.
* **Necking Criterion (Considère's Construction)**: Necking begins at the precise point where the true strain equals the strain-hardening exponent:
  $$\epsilon_{T,\text{neck}} = n$$

---

## 6. Hardness Testing (Callister §6.10)

**Hardness** is a measure of a material's resistance to localized surface plastic indentation (scratching, piercing, or denting).

| Hardness Test | Indenter Geometry | Applied Load | Measurement Metric |
| :--- | :--- | :--- | :--- |
| **Rockwell (HRA, HRB, HRC)** | Diamond cone ($120^\circ$) or hardened steel sphere ($1/16''$) | Minor load ($10\text{ kg}$) + Major load ($60 - 150\text{ kg}$) | **Depth of permanent indentation** read directly on dial. Fast, non-destructive. |
| **Brinell (HB)** | $10\text{ mm}$ tungsten carbide sphere | $500 - 3000\text{ kg}$ for $10 - 15\text{ s}$ | **Diameter of surface impression ($d$)** measured under optical microscope. |
| **Vickers (HV)** | Square-base diamond pyramid ($136^\circ$) | $1 - 120\text{ kg}$ | Diagonal impression lengths $d_1, d_2$. Microhardness of thin coatings. |
| **Knoop (HK)** | Elongated rhombohedral diamond pyramid | Micro-loads ($10 - 1000\text{ g}$) | Major diagonal length. Ideal for brittle ceramics and glass. |

### Correlation Between Hardness and Tensile Strength (for Steels)
For most structural steels, Brinell hardness ($\text{HB}$) correlates directly with Ultimate Tensile Strength:
$$\text{UTS (MPa)} \approx 3.45 \times \text{HB}$$
$$\text{UTS (psi)} \approx 500 \times \text{HB}$$

---

## 7. Comprehensive Step-by-Step Problem Walkthroughs

### 7.1 Problem 1: Full Tensile Data Reduction of an Aerospace Alloy

**Problem Statement**: A cylindrical tensile specimen of an aluminum alloy has an original diameter $d_0 = 12.8\text{ mm}$ and original gauge length $l_0 = 50.800\text{ mm}$. A tensile test produces the following mechanical data:
* Elastic linear slope: at load $F = 35.0\text{ kN}$, gauge length is $l = 50.985\text{ mm}$.
* $0.2\%$ strain offset load: $F_y = 51.0\text{ kN}$.
* Maximum load: $F_{\max} = 72.5\text{ kN}$ at gauge length $l = 56.400\text{ mm}$.
* Fracture load: $F_f = 61.0\text{ kN}$ at fracture length $l_f = 60.200\text{ mm}$ and fracture diameter $d_f = 10.4\text{ mm}$.

Calculate:
1. Young's modulus ($E$).
2. $0.2\%$ offset yield strength ($\sigma_y$).
3. Ultimate tensile strength ($\sigma_u$).
4. Percent elongation ($\%EL$) and percent reduction in area ($\%RA$).
5. Modulus of resilience ($U_r$).
6. True stress and true strain at the onset of necking (maximum load).

#### Step 1: Calculate Original Cross-Sectional Area $A_0$
$$A_0 = \frac{\pi d_0^2}{4} = \frac{\pi (12.8\text{ mm})^2}{4} = 128.68\text{ mm}^2 = 1.2868 \times 10^{-4}\text{ m}^2$$

#### Step 2: Calculate Young's Modulus ($E$)
At $F = 35.0\text{ kN} = 35,000\text{ N}$:
$$\sigma = \frac{35,000\text{ N}}{1.2868 \times 10^{-4}\text{ m}^2} = 2.720 \times 10^8\text{ Pa} = 272.0\text{ MPa}$$
$$\epsilon = \frac{l - l_0}{l_0} = \frac{50.985 - 50.800}{50.800} = \frac{0.185\text{ mm}}{50.800\text{ mm}} = 0.003642$$
$$E = \frac{\sigma}{\epsilon} = \frac{272.0\text{ MPa}}{0.003642} = 74,680\text{ MPa} \approx 74.7\text{ GPa}$$

#### Step 3: Calculate $0.2\%$ Offset Yield Strength ($\sigma_y$)
$$\sigma_y = \frac{F_y}{A_0} = \frac{51,000\text{ N}}{1.2868 \times 10^{-4}\text{ m}^2} = 3.963 \times 10^8\text{ Pa} = 396.3\text{ MPa} \approx 396\text{ MPa}$$

#### Step 4: Calculate Ultimate Tensile Strength ($\sigma_u$)
$$\sigma_u = \frac{F_{\max}}{A_0} = \frac{72,500\text{ N}}{1.2868 \times 10^{-4}\text{ m}^2} = 5.634 \times 10^8\text{ Pa} = 563.4\text{ MPa} \approx 563\text{ MPa}$$

#### Step 5: Calculate Ductility ($\%EL$ and $\%RA$)
* Percent Elongation:
  $$\%EL = \frac{l_f - l_0}{l_0} \times 100\% = \frac{60.200 - 50.800}{50.800} \times 100\% = \frac{9.400}{50.800} \times 100\% = 18.5\%$$
* Final Neck Area $A_f$:
  $$A_f = \frac{\pi d_f^2}{4} = \frac{\pi (10.4\text{ mm})^2}{4} = 84.95\text{ mm}^2$$
* Percent Reduction in Area:
  $$\%RA = \frac{A_0 - A_f}{A_0} \times 100\% = \frac{128.68 - 84.95}{128.68} \times 100\% = \frac{43.73}{128.68} \times 100\% = 34.0\%$$

#### Step 6: Calculate Modulus of Resilience ($U_r$)
$$U_r = \frac{\sigma_y^2}{2E} = \frac{(396.3 \times 10^6\text{ Pa})^2}{2 \times (74.7 \times 10^9\text{ Pa})} = \frac{1.5705 \times 10^{17}}{1.494 \times 10^{11}} = 1.051 \times 10^6\text{ J/m}^3 = 1.05\text{ MJ/m}^3$$

#### Step 7: Calculate True Stress and True Strain at Necking Onset
At maximum load ($l = 56.400\text{ mm}$), necking is just beginning, so conversion formulas are valid:
$$\epsilon = \frac{56.400 - 50.800}{50.800} = \frac{5.600}{50.800} = 0.1102$$
$$\sigma = \sigma_u = 563.4\text{ MPa}$$
* True Strain:
  $$\epsilon_T = \ln(1 + \epsilon) = \ln(1 + 0.1102) = \ln(1.1102) = 0.1045$$
* True Stress:
  $$\sigma_T = \sigma (1 + \epsilon) = 563.4 \times (1 + 0.1102) = 625.5\text{ MPa}$$
* Notice that at necking, true stress ($625.5\text{ MPa}$) is significantly higher than engineering UTS ($563.4\text{ MPa}$) due to cross-sectional reduction!

---

### 7.2 Problem 2: Lateral Contraction via Poisson's Ratio

**Problem Statement**: A cylindrical rod of titanium alloy ($E = 107\text{ GPa}$, $\nu = 0.34$) with initial diameter $d_0 = 10.000\text{ mm}$ is subjected to a tensile load of $F = 25.0\text{ kN}$.
1. Verify whether deformation is strictly elastic if the yield strength is $\sigma_y = 825\text{ MPa}$.
2. Calculate the change in diameter $\Delta d$ of the rod under this load.

#### Step 1: Check Elastic Condition
$$A_0 = \frac{\pi (0.010\text{ m})^2}{4} = 7.854 \times 10^{-5}\text{ m}^2$$
$$\sigma = \frac{25,000\text{ N}}{7.854 \times 10^{-5}\text{ m}^2} = 3.183 \times 10^8\text{ Pa} = 318.3\text{ MPa}$$
Since $\sigma = 318.3\text{ MPa} < \sigma_y = 825\text{ MPa}$, deformation is **strictly elastic**. Hooke's Law and Poisson's ratio apply!

#### Step 2: Calculate Axial Strain $\epsilon_z$
$$\epsilon_z = \frac{\sigma}{E} = \frac{318.3 \times 10^6\text{ Pa}}{107 \times 10^9\text{ Pa}} = 2.975 \times 10^{-3} = 0.002975$$

#### Step 3: Calculate Lateral Strain $\epsilon_x$ via Poisson's Ratio
$$\epsilon_x = -\nu \epsilon_z = -(0.34) \times (0.002975) = -1.0115 \times 10^{-3}$$

#### Step 4: Calculate Change in Diameter $\Delta d$
$$\epsilon_x = \frac{\Delta d}{d_0} \implies \Delta d = \epsilon_x \cdot d_0 = (-1.0115 \times 10^{-3}) \times (10.000\text{ mm}) = -0.0101\text{ mm} = -10.1\ \mu\text{m}$$
*Conclusion*: Under the $25\text{ kN}$ tensile load, the titanium rod diameter contracts by $10.1\ \mu\text{m}$.

---

## 8. Critical Concordia Exam Traps & Red Flags

* ⚠️ **Trap 1: Applying $\sigma_T = \sigma(1+\epsilon)$ Beyond Necking**:
  The equations $\sigma_T = \sigma(1+\epsilon)$ and $\epsilon_T = \ln(1+\epsilon)$ are based on uniform elongation and constant volume. **They are invalid beyond the maximum load (UTS)**! If an exam question asks for true stress at fracture, you **must** use $\sigma_{T,f} = F_f / A_f$, NOT $\sigma_f(1+\epsilon_f)$!
* ⚠️ **Trap 2: Forgetting to Convert $\text{GPa}$ to $\text{MPa}$**:
  In resilience $U_r = \frac{\sigma_y^2}{2E}$, students often square $\sigma_y$ in $\text{MPa}$ and divide by $E$ in $\text{GPa}$ without converting units.
  * Correct practice: Convert everything to pure SI units ($\text{Pa}$): $\sigma_y$ in $\text{Pa}$, $E$ in $\text{Pa} \implies U_r$ in $\text{J/m}^3 = \text{Pa}$.
* ⚠️ **Trap 3: Area Calculation with Diameter vs. Radius**:
  Area is $A = \frac{\pi d^2}{4}$, NOT $\pi d^2$. A missing factor of 4 causes stress to be underestimated by $400\%$!
* ⚠️ **Trap 4: Negative Sign in Poisson's Ratio**:
  Remember that $\Delta d$ is negative in tension (the rod gets thinner). A lateral strain $\epsilon_x = -\nu \epsilon_z$ is negative. Always report $\Delta d = -10.1\ \mu\text{m}$ (or explicitly state "a diameter reduction of $10.1\ \mu\text{m}$").
