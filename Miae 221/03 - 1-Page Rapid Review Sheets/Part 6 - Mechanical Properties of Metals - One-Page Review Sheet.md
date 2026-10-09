# MIAE 221 · Rapid Review Sheet · Part 6
## Mechanical Properties of Metals

---

### 1. Stress, Strain & Elasticity (Lecture 10)
* **Loading modes**: tension, compression (σ and ε negative by convention), shear, torsion (shafts, axles, drills).
* **Engineering Stress**: $\sigma = \dfrac{F}{A_0}$, shear $\tau = \dfrac{F_s}{A_0}$ ($\text{MPa} = \text{N/mm}^2$). Original area $A_0$; actual area gives true stress.
* **Engineering Strain**: $\epsilon = \dfrac{\Delta l}{l_0}$, lateral $\epsilon_L = \dfrac{-\delta_L}{w_0}$, shear $\gamma = \tan\theta$. Always dimensionless.
* **Hooke's Law**: $\sigma = E\epsilon \iff \dfrac{F}{A_0} = E\dfrac{\Delta l}{l_0}$. $E$ = stiffness = elastic slope: W, Ta, Mo **steep**; Al, Cu, Ag **shallow**. Ceramics 300, steel 207, Cu 110, plastics 3 GPa. Slide 11 wire: $E = \dfrac{17.24/0.55\text{ mm}^2}{1.68/10\,000} \approx 187$ GPa.
* **Atomic Origin of $E$**: $E \propto \left(\dfrac{dF}{dr}\right)_{r_0}$. Strong bonds $\implies$ high $E$, high $T_m$, low $\alpha$. **$E$ falls as $T$ rises**: thermal expansion moves atoms to a less steep part of the force curve.
* **Non-linear elastic** (cast iron, concrete, some polymers): **tangent** modulus = slope of tangent at $\sigma$; **secant** modulus = slope of line from origin to $\sigma$.
* **Poisson's Ratio**: $\nu = -\dfrac{\epsilon_x}{\epsilon_z} = -\dfrac{\Delta d / d_0}{\Delta l / l_0}$ (0.2–0.5; metals ≈ 0.3). **Isotropic**: $E = 2G(1 + \nu)$, $\tau = G\gamma$ (not for composites or single crystals).
* **Anelasticity**: time-dependent but fully recoverable elastic strain; small in metals, significant in polymers (viscoelastic).

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
