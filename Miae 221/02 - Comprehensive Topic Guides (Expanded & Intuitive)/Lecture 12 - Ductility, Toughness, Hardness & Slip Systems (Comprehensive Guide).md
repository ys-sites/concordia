# MIAE 221: Materials Science for Engineers
# Lecture 12: Mechanical Properties III — Ductility, Resilience, Toughness, Hardness & Dislocation Slip Systems
**Concordia University · Gina Cody School of Engineering and Computer Science**  
*Curriculum Reference: Callister & Rethwisch, Materials Science and Engineering (10th/11th Edition), Chapters 6 & 7*  
*Lecture Grounding: Dr. M. Medraj, Lecture 12 (Mechanical Properties III & Slip Mechanics)*

---

## 1. Executive Conceptual Intuition & Physical Analogy

> [!IMPORTANT]
> **Core Concept Overview**:
> In Lecture 10, we examined the **elastic** regime where atomic bonds act like Hookean springs.
> In Lecture 11, we passed the **yield point** into permanent **plastic deformation**, strain hardening, and necking.
> Lecture 12 completes the mechanical characterization puzzle:
> 1. How much can the material stretch before it snaps? (**Ductility**)
> 2. How much energy can it bounce back elastically? (**Resilience**)
> 3. How much total energy can it absorb before catastrophically fracturing? (**Toughness**)
> 4. How well does its surface resist scratching and indentation? (**Hardness**)
> 5. **The Dislocation Mystery**: Why do real crystalline metals yield at stresses $1000\times$ lower than the theoretical force needed to pull atomic bonds apart? (**The Caterpillar & Rug Mechanism of Slip Systems**)

### The Intuitive Physical Analogy: The Heavy Rug & The Caterpillar
Imagine you have a huge, heavy carpet covering the floor of a large room, and you want to move it across the room by two inches:
* **The Theoretical Way (Brute Force)**: You grab one entire edge of the rug and try to pull the entire mass of the carpet across the floor simultaneously. The friction across the entire surface area is astronomical—you would need a bulldozer. This is the **theoretical shear strength** of a perfect crystal ($\sim G/10$), where all bonds across a plane would have to break at the same instant.
* **The Dislocation Way (The Smart Way)**: You push a small wrinkle or wave into one edge of the carpet. The wrinkle contains just a small bulge of extra material. You then easily tap the wrinkle with your foot, propagating it across the carpet one small fold at a time. When the wrinkle reaches the other wall, the entire carpet has moved by two inches!

In 1934, Taylor, Orowan, and Polanyi independently proved that metals deform plastically through this exact wrinkle mechanism: **the movement of dislocations**. Instead of breaking trillions of atomic bonds simultaneously, a dislocation moves by breaking only **one single line of atomic bonds at a time**, requiring orders of magnitude less shear stress.

---

## 2. In-Depth Curriculum & Slide Fill-in-the-Blank Reference

### Student Slide Reference (Dr. Medraj, Lecture 12)

| Slide | Blank / Topic Prompt | Master Answer | Physical Mechanism |
| :---: | :--- | :--- | :--- |
| **2** | *"The yield and tensile strengths …… with increasing temperature"* | **decrease** | Thermal energy expands atomic spacing and enhances dislocation mobility, weakening atomic resistance. |
| **2** | *"Ductility …… with temperature"* | **increases** | Elevated thermal activation allows dislocations to climb and cross-slip past obstacles, enabling greater plastic strain before void coalescence. |
| **3** | Two quantitative measures of ductility | **Percent Elongation (%EL)** and **Percent Reduction in Area (%RA)** | Quantifies plastic deformation accumulated up to the fracture point. |
| **4** | Classification thresholds | **Brittle: $\%EL \le 5\%$**; **Ductile: $\%EL \ge 25\%$ and $\%RA \ge 25\%$** | Engineering benchmark for distinguishing brittle ceramics/cast irons from ductile structural alloys. |
| **6** | *"Measured with Modulus of Resilience, $U_r$ ... Units are $\text{J/m}^3$ (equivalent to ……)"* | **$\text{Pa}$ ($\text{N/m}^2$)** | $1 \text{ J/m}^3 = 1 \frac{\text{N}\cdot\text{m}}{\text{m}^3} = 1 \text{ N/m}^2 = 1 \text{ Pa}$. |
| **7** | *"Larger area under curve $\implies$ …… material"* | **tougher** | Toughness requires a simultaneous combination of high yield/tensile strength AND high ductility. |
| **8** | Charpy and Izod impact test measurements | **Impact energy / notch toughness** | Weighted pendulum falls from height $h$, fractures notched specimen, swings to $h' < h$. Energy absorbed $= mg(h - h')$. |
| **9** | Qualitative vs Quantitative hardness | **Mohs scale (1=talc to 10=diamond)** vs **Rockwell (HR), Brinell (HB), Vickers (HV), Knoop (HK)** | Quantitative tests measure resistance to permanent surface indentation under standard indenter geometry and load. |
| **12** | *"Plastic deformation is due to the motion of a large number of ……"* | **dislocations** | Discovered by Taylor, Orowan, and Polanyi in 1934 to explain why experimental strength is $1/1000$ of theoretical strength. |
| **13** | *"Dislocations move in …… directions within …… planes"* | **close-packed directions** within **close-packed planes** | Maximum atomic density gives the smoothest glide path and smallest Burgers vector $\vec{b}$. |
| **14** | *"The combination of C-P plane and C-P direction is called a ……"* | **slip system** | The active crystallographic slip plane $\{\text{hkl}\}$ plus slip direction $\langle\text{uvw}\rangle$. |
| **15** | *"FCC and BCC metals are more ductile than HCP metals because……"* | **they possess more active independent slip systems** | FCC has 12 slip systems; BCC has 48 slip systems (elevated temp); HCP has only 3 basal slip systems at room temperature! |

---

## 3. Mathematical Foundations & The "Zero-Skip" Derivation Standard

### 1. Ductility: Formulas & Definitions
Ductility measures the degree of plastic deformation that a material sustains before fracture occurs.

#### Formula 1: Percent Elongation (%EL)
$$\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\%$$
* $l_0$ = Original gauge length (typically $50.0\text{ mm}$ or $2.000\text{ in}$)
* $l_f$ = Fracture gauge length measured by fitting the broken specimen pieces back together.
* *Note on Necking*: Because significant plastic strain localizes in the neck, $\%EL$ depends on $l_0$. Shorter gauge lengths report higher $\%EL$ values.

#### Formula 2: Percent Reduction in Area (%RA)
$$\%RA = \left(\frac{A_0 - A_f}{A_0}\right) \times 100\%$$
For a cylindrical tensile specimen of diameter $d$:
$$A_0 = \frac{\pi}{4} d_0^2, \qquad A_f = \frac{\pi}{4} d_f^2$$
Substituting into $\%RA$:
$$\%RA = \left(\frac{\frac{\pi}{4}d_0^2 - \frac{\pi}{4}d_f^2}{\frac{\pi}{4}d_0^2}\right) \times 100\% = \left(\frac{d_0^2 - d_f^2}{d_0^2}\right) \times 100\% = \left[1 - \left(\frac{d_f}{d_0}\right)^2\right] \times 100\%$$

---

### 2. Modulus of Resilience ($U_r$)
**Definition**: Resilience is the capacity of a material to absorb energy when deformed elastically and then release that energy upon unloading without permanent distortion.
The **Modulus of Resilience** $U_r$ is the strain energy per unit volume required to stress the material from zero to the yield point $\sigma_y$:
$$U_r = \int_0^{\varepsilon_y} \sigma \, d\varepsilon$$

#### Step-by-Step Zero-Skip Derivation
* **Step 1: Apply Hooke's Law in the linear elastic regime**:
  $$\sigma = E \varepsilon \implies \varepsilon = \frac{\sigma}{E}$$
* **Step 2: Evaluate the integral geometrically**:
  The area under the linear stress-strain curve from $\varepsilon = 0$ to $\varepsilon = \varepsilon_y$ forms a triangle with base $\varepsilon_y$ and height $\sigma_y$:
  $$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \sigma_y \varepsilon_y$$
* **Step 3: Substitute Hooke's Law for $\varepsilon_y = \frac{\sigma_y}{E}$**:
  $$U_r = \frac{1}{2} \sigma_y \left(\frac{\sigma_y}{E}\right) = \frac{\sigma_y^2}{2E}$$
* **Step 4: Dimensional & Unit Verification**:
  $$[U_r] = \frac{[\sigma_y]^2}{[E]} = \frac{(\text{N/m}^2)^2}{\text{N/m}^2} = \frac{\text{N}}{\text{m}^2} = \text{Pa}$$
  Equivalently, expressing as energy per volume:
  $$\text{Pa} = \frac{\text{N}}{\text{m}^2} = \frac{\text{N} \cdot \text{m}}{\text{m}^2 \cdot \text{m}} = \frac{\text{J}}{\text{m}^3}$$
$$\boxed{U_r = \frac{1}{2}\sigma_y \varepsilon_y = \frac{\sigma_y^2}{2E} \quad \left[\text{J/m}^3 \text{ or } \text{Pa}\right]}$$

---

### 3. Tensile Toughness ($U_t$) vs Notch Toughness
**Tensile Toughness**: The total mechanical energy per unit volume absorbed by the material up to the point of fracture:
$$U_t = \int_0^{\varepsilon_f} \sigma \, d\varepsilon \quad \left[\text{J/m}^3\right]$$
* **Approximation for Ductile Metals**:
  $$U_t \approx \left(\frac{\sigma_y + \sigma_{\text{UTS}}}{2}\right) \varepsilon_f \quad \text{or} \quad U_t \approx \sigma_{\text{avg}} \cdot \varepsilon_f$$
* **Notch Toughness (Impact Energy)**: Measured dynamically under high strain rates using a Charpy V-notch (CVN) pendulum test:
  $$\text{Impact Energy} = \Delta E_p = m g (h - h')$$
  where $m$ is hammer mass, $h$ is release height, and $h'$ is rebound height after breaking the notched specimen.

---

### 4. Hardness Testing Comparison

| Test | Indenter Geometry | Applied Load $P$ | Measurement Basis | Formula / Scale |
| :---: | :---: | :---: | :---: | :---: |
| **Brinell (HB)** | $10\text{ mm}$ hardened steel or tungsten carbide sphere | $500 - 3000\text{ kg}$ | Indentation surface diameter $d$ | $\text{HB} = \frac{2P}{\pi D [D - \sqrt{D^2 - d^2}]}$ |
| **Rockwell (HR)** | Diamond spheroconical Brale ($120^\circ$) or $1/16''$ steel ball | Minor $10\text{ kg}$, Major $60, 100, 150\text{ kg}$ | Depth of penetration $h$ under major load relative to minor load | Scales: HRA, HRB ($1/16''$ ball), HRC (Brale diamond) |
| **Vickers (HV)** | Square-base diamond pyramid (included angle $136^\circ$) | $1 - 120\text{ kg}$ | Average diagonal lengths $d = (d_1+d_2)/2$ | $\text{HV} = 1.854 \frac{P}{d^2}$ |
| **Knoop (HK)** | Elongated pyramidal diamond | $25\text{ g} - 1\text{ kg}$ (Microhardness) | Long diagonal length $l$ | $\text{HK} = 14.2 \frac{P}{l^2}$ (Brittle ceramics/coatings) |

* **Empirical Strength Correlation for Steels**:
  $$\sigma_{\text{UTS}} \approx 3.45 \times \text{HB} \quad [\text{MPa}] \quad \left(\text{or } \sigma_{\text{UTS}} \approx 500 \times \text{HB} \quad [\text{psi}]\right)$$

---

## 4. Worked Teacher Slide Example (Callister Example 6.4, Slide 11)

### Problem Statement
A cylindrical metal specimen having an original diameter of $d_0 = 12.8\text{ mm}$ ($0.505\text{ in}$) and original gauge length of $l_0 = 50.80\text{ mm}$ ($2.000\text{ in}$) is pulled in tension until fracture occurs.
At the point of fracture:
* Fractured gauge length: $l_f = 72.14\text{ mm}$ ($2.840\text{ in}$)
* Diameter at the point of fracture: $d_f = 6.60\text{ mm}$ ($0.260\text{ in}$)

Calculate the ductility in terms of:
1. Percent Elongation ($\%EL$)
2. Percent Reduction in Area ($\%RA$)

---

### Step-by-Step Zero-Skip Execution

#### Part 1: Calculate Percent Elongation (%EL)
* **Step 1: State the governing equation**:
  $$\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\%$$
* **Step 2: Substitute given metric values**:
  $$l_f = 72.14\text{ mm}, \qquad l_0 = 50.80\text{ mm}$$
  $$\Delta l = l_f - l_0 = 72.14\text{ mm} - 50.80\text{ mm} = 21.34\text{ mm}$$
* **Step 3: Calculator reduction line-by-line**:
  $$\frac{\Delta l}{l_0} = \frac{21.34\text{ mm}}{50.80\text{ mm}} = 0.4200787\dots$$
  $$\%EL = 0.4200787 \times 100\% = 42.01\%$$
* **Step 4: Boxed Verified Answer**:
  $$\boxed{\%EL = 42.0\%}$$

---

#### Part 2: Calculate Percent Reduction in Area (%RA)
* **Step 1: Calculate Initial Area $A_0$**:
  $$d_0 = 12.8\text{ mm} = 12.8 \times 10^{-3}\text{ m}$$
  $$A_0 = \frac{\pi}{4} d_0^2 = \frac{\pi}{4} (12.8\text{ mm})^2 = \frac{\pi}{4} (163.84\text{ mm}^2) = 128.6796\text{ mm}^2$$
* **Step 2: Calculate Fracture Neck Area $A_f$**:
  $$d_f = 6.60\text{ mm}$$
  $$A_f = \frac{\pi}{4} d_f^2 = \frac{\pi}{4} (6.60\text{ mm})^2 = \frac{\pi}{4} (43.56\text{ mm}^2) = 34.2119\text{ mm}^2$$
* **Step 3: Evaluate Area Difference $\Delta A = A_0 - A_f$**:
  $$\Delta A = 128.6796\text{ mm}^2 - 34.2119\text{ mm}^2 = 94.4677\text{ mm}^2$$
* **Step 4: Compute Ratio**:
  $$\frac{A_0 - A_f}{A_0} = \frac{94.4677\text{ mm}^2}{128.6796\text{ mm}^2} = 0.734131\dots$$
  $$\%RA = 0.734131 \times 100\% = 73.41\%$$
* **Step 5: Direct Verification via Diameter Ratio**:
  $$\%RA = \left[1 - \left(\frac{d_f}{d_0}\right)^2\right] \times 100\% = \left[1 - \left(\frac{6.60}{12.8}\right)^2\right] \times 100\%$$
  $$\frac{6.60}{12.8} = 0.515625 \implies (0.515625)^2 = 0.265869$$
  $$\%RA = [1 - 0.265869] \times 100\% = 0.734131 \times 100\% = 73.41\%$$
* **Step 6: Boxed Verified Answer**:
  $$\boxed{\%RA = 73.4\%}$$

* **Classification Assessment**:
  Since $\%EL = 42.0\% \ge 25\%$ and $\%RA = 73.4\% \ge 25\%$, this metal specimen is **highly ductile**.

---

## 5. Dislocation Mechanics & Crystallographic Slip Systems (Slides 12–15)

### Why Dislocation Motion Explains Real Metal Strength
If a crystal were perfect, plastic deformation would require shifting entire planes of atoms simultaneously:
$$\tau_{\text{theoretical}} \approx \frac{G}{2\pi} \approx \frac{G}{10} \approx 3\text{ to } 10\text{ GPa}$$
Yet real engineering metals yield at shear stresses of only $\tau_{\text{yield}} \approx 0.5\text{ to } 50\text{ MPa}$—a discrepancy of three orders of magnitude ($1/1000$)!
Taylor, Orowan, and Polanyi solved this paradox: **slip occurs by the motion of line defects (dislocations)**.
Only one row of atomic bonds breaks and reforms per step as the dislocation line sweeps through the crystal lattice.

### Crystallographic Anatomy of a Slip System
A **Slip System** consists of:
1. **Slip Plane**: The crystallographic plane of highest atomic planar density (the closest-packed plane).
   * *Why?* Maximum interplanar spacing $d_{hkl}$, which minimizes the Peierls-Nabarro lattice friction stress resisting dislocation movement.
2. **Slip Direction**: The direction within the slip plane having the highest linear atomic density.
   * *Why?* Corresponds to the shortest repeat distance in the lattice, minimizing the magnitude of the Burgers vector $|\vec{b}|$ (energy of a dislocation scales as $E \propto G |\vec{b}|^2$).

$$\boxed{\text{Slip System} = \{\text{Close-Packed Plane}\} \times \langle\text{Close-Packed Direction}\rangle}$$

---

### Crystal Structure Comparison Table

| Crystal Structure | Close-Packed Slip Plane | Close-Packed Slip Direction | Number of Slip Systems | Ductility Assessment |
| :---: | :---: | :---: | :---: | :---: |
| **FCC** (e.g. Cu, Al, Au, Ni, $\gamma$-Fe) | $\{111\}$ (4 planes) | $\langle 1\bar{1}0 \rangle$ (3 per plane) | $4 \times 3 = \mathbf{12}$ | **Extremely Ductile**: 12 independent, intersecting slip systems satisfy the von Mises criterion ($\ge 5$ independent systems) at all temperatures. |
| **BCC** (e.g. $\alpha$-Fe, W, Mo, Cr) | $\{110\}$ (6 planes), plus $\{112\}$ and $\{123\}$ | $\langle 1\bar{1}1 \rangle$ (2 per plane) | $6 \times 2 = \mathbf{12}$ (up to 48 at elevated $T$) | **Moderately Ductile at Room Temp, Brittle at Low Temp**: High thermal sensitivity; undergoes Ductile-to-Brittle Transition (DBTT). |
| **HCP** (e.g. Mg, Zn, Ti, Cd) | $\{0001\}$ Basal (1 plane) | $\langle 11\bar{2}0 \rangle$ (3 directions) | $1 \times 3 = \mathbf{3}$ (at room temp) | **Brittle / Low Ductility**: Only 3 independent slip systems at room temperature (fails von Mises criterion); prone to twinning. |

---

## 6. Common Exam Pitfalls & Trap Analysis

| Exam Pitfall / Trap | Why Students Make This Mistake | How the Exam Sets the Trap | The Bulletproof Defense |
| :--- | :--- | :--- | :--- |
| **Confusing Resilience with Toughness** | Both represent area under the stress-strain curve and share units of $\text{J/m}^3$ | Asks for energy stored up to *yielding* vs energy absorbed up to *fracture* | **Resilience** = ELASTIC ONLY (up to $\sigma_y$). **Toughness** = TOTAL AREA (elastic + plastic up to fracture). |
| **Mixing $\text{MPa}$ with $\text{GPa}$ in $U_r = \sigma_y^2 / 2E$** | Squaring $\sigma_y$ in $\text{MPa}$ while dividing by $E$ in $\text{GPa}$ without base unit conversion | Answers differ by $10^3$ or $10^6$ in multiple-choice | Convert BOTH to Pascals ($\text{Pa} = \text{N/m}^2$): $\sigma_y \times 10^6$, $E \times 10^9$. The resulting $U_r$ is in $\text{J/m}^3$. |
| **Forgetting to Square Diameters in %RA** | Calculating $\%RA$ using linear diameters: $(d_0 - d_f)/d_0$ | Puts the linear diameter ratio as Option A | Area scales as $d^2$! $\%RA = [1 - (d_f/d_0)^2] \times 100\%$. |
| **Claiming HCP Has 12 Slip Systems** | Confusing HCP geometry with FCC/BCC | Tricking students on why Mg or Zn is brittle at room temperature | HCP only has **3** basal slip systems active at room temperature ($1 \text{ plane} \times 3 \text{ directions}$). FCC has **12**. |
| **Confusing Mohs Hardness with Quantitative Hardness** | Believing Mohs 10 is twice as hard as Mohs 5 | Conceptual trap on linear vs ordinal scratch scales | Mohs is purely qualitative scratch ranking. Diamond (10) is actually $>4\times$ harder than Corundum (9) on absolute scales! |

---

## 7. Self-Check Mastery Practice Problems

### Problem 1 (Modulus of Resilience)
A high-strength alloy steel has a yield strength of $\sigma_y = 800\text{ MPa}$ and Young's modulus $E = 200\text{ GPa}$.
Calculate its Modulus of Resilience $U_r$ in $\text{kJ/m}^3$.

* **Step 1**: Convert to SI base units:
  $$\sigma_y = 800 \times 10^6\text{ Pa}$$
  $$E = 200 \times 10^9\text{ Pa}$$
* **Step 2**: Apply resilience formula:
  $$U_r = \frac{\sigma_y^2}{2E} = \frac{(800 \times 10^6\text{ Pa})^2}{2(200 \times 10^9\text{ Pa})} = \frac{640,000 \times 10^{12}}{400 \times 10^9} = 1.6 \times 10^6\text{ J/m}^3$$
* **Step 3**: Convert to $\text{kJ/m}^3$:
  $$U_r = \frac{1.6 \times 10^6\text{ J/m}^3}{10^3} = 1600\text{ kJ/m}^3$$
* **Boxed Verified Result**:
  $$\boxed{U_r = 1.6 \times 10^6\text{ J/m}^3 = 1600\text{ kJ/m}^3}$$

---

### Problem 2 (Dislocation Slip Systems)
Explain why an aluminum beverage can (FCC) can be easily deep-drawn and bent without cracking, whereas a magnesium sheet (HCP) tears unless heated above $200^\circ\text{C}$.

* **Answer**:
  1. Aluminum has an **FCC crystal structure** with 12 active, close-packed slip systems ($\{111\}\langle 1\bar{1}0 \rangle$). This exceeds the von Mises criterion (5 independent systems required for ductile polycrystalline deformation), allowing easy dislocation motion along intersecting glide planes at room temperature.
  2. Magnesium has an **HCP crystal structure** with only 3 active basal slip systems ($\{0001\}\langle 11\bar{2}0 \rangle$) at room temperature. Because these 3 systems are parallel, dislocations cannot navigate out-of-plane stress, causing grain boundary tearing. Heating above $200^\circ\text{C}$ activates non-basal pyramidal slip systems, restoring ductility.
