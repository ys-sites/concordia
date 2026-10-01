# MIAE 221 · Rapid Review Sheet · Part 6
## Mechanical Properties of Metals

---

### 1. Stress, Strain & Elasticity
* **Engineering Stress**: $\sigma = \dfrac{F}{A_0}$ ($\text{MPa} = \text{N/mm}^2$ or $\text{GPa} = 10^3\text{ MPa}$).
* **Engineering Strain**: $\epsilon = \dfrac{\Delta l}{l_0} = \dfrac{l_i - l_0}{l_0}$ (dimensionless or $\%$).
* **Hooke's Law (Elasticity)**: $\sigma = E \cdot \epsilon \implies E = \dfrac{\Delta \sigma}{\Delta \epsilon}$ (Young's Modulus, measure of stiffness).
* **Atomic Origin of $E$**: $E \propto \left(\dfrac{dF}{dr}\right)_{r_0} = \left(\dfrac{d^2 E_{\text{pot}}}{dr^2}\right)_{r_0}$ (curvature of interatomic potential well). Deep, steep well $\implies$ High $E$, High $T_m$, Low $\alpha$.
* **Poisson's Ratio**: $\nu = -\dfrac{\epsilon_{\text{lateral}}}{\epsilon_{\text{axial}}} = -\dfrac{\Delta d / d_0}{\Delta l / l_0}$ (typically $0.25 - 0.35$ for metals).
* **Shear Modulus**: $G = \dfrac{E}{2(1 + \nu)}$ ($\tau = G \cdot \gamma$).

---

### 2. Plastic Deformation, Yielding & Tensile Strength
* **Yield Strength ($\sigma_y$)**: Standardized by the **$0.002$ ($0.2\%$) strain offset** line parallel to $E$: $\sigma = E(\epsilon - 0.002)$.
* **Upper & Lower Yield Point**: In annealed low-carbon steel due to interstitial carbon/nitrogen pinning (Cottrell atmospheres $\to$ Lüders bands). Lower yield is used for design.
* **Ultimate Tensile Strength ($\sigma_{\text{UTS}}$)**: Maximum engineering stress on curve: $\sigma_{\text{UTS}} = \dfrac{F_{\max}}{A_0}$. Marks the onset of **necking**.

---

### 3. Ductility, Resilience & Toughness
* **Percent Elongation**: $\%EL = \left(\dfrac{l_f - l_0}{l_0}\right) \times 100\%$
* **Percent Reduction in Area**: $\%RA = \left(\dfrac{A_0 - A_f}{A_0}\right) \times 100\% = \left(1 - \dfrac{d_f^2}{d_0^2}\right) \times 100\%$ (square diameters!).
* **Modulus of Resilience ($U_r$)**: Elastic energy absorbed up to yielding:
  $$U_r = \frac{1}{2} \sigma_y \epsilon_y = \frac{\sigma_y^2}{2E} \quad (\text{J/m}^3\text{ or }\text{kJ/m}^3)$$
* **Toughness**: Total area under the complete $\sigma - \epsilon$ curve up to fracture. Requires combination of strength AND ductility.

---

### 4. True Stress-Strain & Strain Hardening
* **True Stress**: $\sigma_T = \dfrac{F}{A_i} = \sigma(1 + \epsilon)$ (valid prior to necking).
* **True Strain**: $\epsilon_T = \ln\left(\dfrac{l_i}{l_0}\right) = \ln(1 + \epsilon)$ (valid prior to necking).
* **Hollomon Power Law**: $\sigma_T = K \cdot \epsilon_T^n$ ($n$ = strain hardening exponent, $0.10 - 0.50$).
* **Necking Criterion**: At UTS, $\dfrac{d\sigma_T}{d\epsilon_T} = \sigma_T \implies \epsilon_T = n$.

---

### 5. Hardness Testing Reference
* **Brinell ($HB$)**: Steel/tungsten ball ($D = 10\text{ mm}$):
  $$HB = \frac{2P}{\pi D \left(D - \sqrt{D^2 - d^2}\right)}$$
* **Rockwell**: Diamond cone ($120^\circ$) or steel ball ($1/16''$). Read depth directly: **HRA** (cemented carbides), **HRB** (brass/Al), **HRC** (hardened steels).
* **Vickers ($HV$)**: Diamond pyramid ($136^\circ$). Micro/macro hardness on a single scale.
* **Knoop ($HK$)**: Microhardness for thin coatings and brittle ceramics.
* **Empirical Correlation**: $TS\,(\text{MPa}) \approx 3.45 \times HB$.
