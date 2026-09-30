# MIAE 221: Materials Science for Engineers
## Chapter 6: Mechanical Properties of Metals (Expanded & Condensed Guide)
### Concordia University · Gina Cody School of Engineering
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Ed., Callister & Rethwisch)  
**Instructor**: Dr. Mamoun Medraj, P.Eng | **Curriculum Alignment**: Concordia University

---

*(Syllabus Week 6 · Core Midterm & Laboratory Topic)*

### 1. 🎯 30-Second Core Intuition & Plain-English Concept
When you pull a metal rod in tension, it initially stretches like a stiff rubber band: release the load, and it snaps back to its original length (**Elastic Deformation**). 

Pull it past its **Yield Strength ($\sigma_y$)**, and atomic planes permanently slide past one another via dislocation slip (**Plastic Deformation**). At the peak load (**Ultimate Tensile Strength, UTS**), the cross-section necks down until fracture occurs.

*Key Vocabulary Distinction*:
* **Stiffness** ($E$): Resistance to elastic stretching (slope of elastic region).
* **Strength** ($\sigma_y$, UTS): Resistance to permanent plastic deformation and tearing.
* **Ductility** ($\%EL$): Total plastic deformation sustained before snap.
* **Toughness**: Total energy absorbed up to fracture (area under entire curve).

### 2. ⚙️ High-Yield Mathematical Engine & Tensile Metrics

| Property | Formula | Description & Units |
| :--- | :--- | :--- |
| **Engineering Stress** | $\sigma = \frac{F}{A_0}$ | Force divided by *original* cross-sectional area ($	ext{MPa}$ or $	ext{N/mm}^2$) |
| **Engineering Strain** | $\epsilon = \frac{\Delta l}{l_0} = \frac{l_i - l_0}{l_0}$ | Elongation divided by *original* gage length (dimensionless or $	ext{mm/mm}$) |
| **Hooke's Law** | $\sigma = E \epsilon$ | Linear elastic response ($E$: Young's modulus, $	ext{GPa}$) |
| **Poisson's Ratio** | $\nu = -\frac{\epsilon_x}{\epsilon_z} = -\frac{\epsilon_y}{\epsilon_z}$ | Lateral contraction divided by longitudinal expansion (typically $\approx 0.33$) |
| **Yield Strength ($\sigma_y$)** | Stress at $0.002$ ($0.2\%$) offset | Parallel line with slope $E$ drawn starting at $\epsilon = 0.002$ |
| **Ductility (\%EL)** | $\%EL = \left(\frac{l_f - l_0}{l_0}\right) \times 100\%$ | Total permanent elongation at fracture |
| **Modulus of Resilience** | $U_r = \int_0^{\epsilon_y} \sigma d\epsilon \approx \frac{\sigma_y^2}{2E}$ | Elastic energy absorbed per unit volume without permanent deformation |
| **True Stress ($\sigma_T$)** | $\sigma_T = \frac{F}{A_i} = \sigma(1 + \epsilon)$ | Instantaneous force / instantaneous area (valid up to necking) |
| **True Strain ($\epsilon_T$)** | $\epsilon_T = \ln\left(\frac{l_i}{l_0}\right) = \ln(1 + \epsilon)$ | Logarithmic true strain (valid up to necking) |

### 3. 🖼️ Textbook Reference Diagram & Visual Pedagogical Analysis

![Callister Figure 6.11 - Typical Engineering Stress-Strain Curve](./images/callister_fig_6_11_tensile_stress_strain.png)
*Figure 6.11: Engineering stress-strain behavior to fracture: $P$ (proportional limit), $M$ (maximum load / tensile strength), and $F$ (fracture point).*

![Callister Figure 6.12 - 0.002 Strain Offset Yield Strength Construction](./images/callister_fig_6_12_yield_offset_brass.png)
*Figure 6.12: Determination of the $0.002$ ($0.2\%$) strain offset yield strength for brass.*

#### In-Depth Visual Breakdown:
* **The Engineering Curve (Figure 6.11)**:
  * The curve appears to drop after peak $M$ (Tensile Strength) because engineering stress uses *original area* $A_0$. In reality, the material continues to strain harden, but localized **necking** causes the cross-section to shrink faster than the load increases.
* **The $0.002$ Offset Method (Figure 6.12)**:
  * For metals without a sharp yield drop (like brass, aluminum, copper), yield strength is standardized by starting at $\epsilon = 0.002$ ($0.2\%$) on the horizontal axis and drawing a dashed line strictly **parallel** to the initial linear elastic slope $E$. The intersection with the experimental curve defines $\sigma_y$.

### 4. ⚖️ Teacher Notes Cross-Reference & Concordia Exam Traps
* **Concordia Exam & Lab Focus**:
  * Calculating Young's modulus, yield strength ($0.2\%$), UTS, and ductility directly from raw load-elongation tensile data.
  * Modulus of resilience calculation: $U_r = rac{\sigma_y^2}{2E}$.
  * Hardness correlations: For steel, $	ext{UTS (MPa)} pprox 3.45 	imes 	ext{HB}$ (Brinell Hardness).
* **Concordia Exam Traps**:
  * **True vs. Engineering Equations**: The equations $\sigma_T = \sigma(1+\epsilon)$ and $\epsilon_T = \ln(1+\epsilon)$ are **ONLY valid up to the onset of necking (UTS)**! After necking initiates, cross-sectional deformation is no longer uniform, and instantaneous cross-sectional area must be measured directly.

### 5. 💡 Master Exam Problem & Step-by-Step Solution Framework
**Problem**: *A cylindrical specimen of aluminum alloy with diameter $d_0 = 12.8	ext{ mm}$ and gage length $l_0 = 50.8	ext{ mm}$ is loaded in tension. An elastic load of $15,000	ext{ N}$ produces an elongation of $0.089	ext{ mm}$. The specimen yields at $30,000	ext{ N}$, reaches a maximum load of $45,000	ext{ N}$, and fractures at $l_f = 56.4	ext{ mm}$. Calculate: (a) Young's Modulus $E$, (b) Yield Strength $\sigma_y$, (c) Tensile Strength UTS, (d) Ductility $\%EL$, and (e) Modulus of Resilience $U_r$.*

* **Step 1: Compute Initial Area $A_0$**
  $$A_0 = \frac{\pi d_0^2}{4} = \frac{\pi (12.8\text{ mm})^2}{4} = 128.7\text{ mm}^2 = 1.287 \times 10^{-4}\text{ m}^2$$
* **Step 2: Compute Modulus of Elasticity $E$**
  $$\sigma_1 = \frac{15,000\text{ N}}{128.7\text{ mm}^2} = 116.55\text{ MPa}, \quad \epsilon_1 = \frac{0.089\text{ mm}}{50.8\text{ mm}} = 0.001752$$
  $$E = \frac{\sigma_1}{\epsilon_1} = \frac{116.55\text{ MPa}}{0.001752} = 66,524\text{ MPa} = 66.5\text{ GPa}$$
* **Step 3: Compute Yield Strength $\sigma_y$ and Tensile Strength UTS**
  $$\sigma_y = \frac{F_{\text{yield}}}{A_0} = \frac{30,000\text{ N}}{128.7\text{ mm}^2} = 233.1\text{ MPa}$$
  $$\text{UTS} = \frac{F_{\max}}{A_0} = \frac{45,000\text{ N}}{128.7\text{ mm}^2} = 349.6\text{ MPa}$$
* **Step 4: Compute Ductility $\%EL$**
  $$\%EL = \frac{l_f - l_0}{l_0} \times 100\% = \frac{56.4 - 50.8}{50.8} \times 100\% = 11.02\%$$
* **Step 5: Compute Modulus of Resilience $U_r$**
  $$U_r \approx \frac{\sigma_y^2}{2E} = \frac{(233.1 \times 10^6\text{ Pa})^2}{2(66.5 \times 10^9\text{ Pa})} = 4.08 \times 10^5\text{ J/m}^3 = 0.408\text{ MJ/m}^3$$

---
