# MIAE 221 · Rapid Review Sheet · Part 9
## Diffusion in Solids

---

### 1. Fundamental Principles & Atomic Mechanisms
* **Diffusion Definition**: Mass transport through atomic motion driven by thermal energy and chemical potential / concentration gradients.
* **Self-Diffusion**: Atomic motion in pure elements with no net compositional change; tracked via radioactive isotopes.
* **Interdiffusion (Diffusion Couple)**: Net mass transport between dissimilar metals (e.g. $\text{Cu-Ni}$) smoothing initial step-function profiles into solid solutions.
* **Prerequisites for Atomic Jump**: (1) Adjacent empty site (vacancy or interstitial void); (2) Thermal vibrational energy $E \ge Q$ to overcome the barrier.
* **Vacancy Diffusion**: Host/substitutional atoms jump into neighboring vacancies. $\vec{J}_{\text{atoms}} = -\vec{J}_{\text{vacancies}}$. Requires vacancy formation + migration: $Q_d = Q_v + Q_m$. Slow rate.
* **Interstitial Diffusion**: Small solutes ($\text{C, H, N, O}$) jump between interstitial voids. No vacancies needed; $Q_d = Q_m$. Much faster ($10^2 - 10^5\times$) than vacancy diffusion.

---

### 2. Steady-State Diffusion & Fick's First Law
* **Diffusion Flux ($J$)**: Mass $M$ (or atoms) passing perpendicular to area $A$ per unit time $t$:
  $$J = \frac{M}{A t} = \frac{1}{A}\frac{dM}{dt} \quad \left[\frac{\text{kg}}{\text{m}^2\cdot\text{s}} \text{ or } \frac{\text{atoms}}{\text{m}^2\cdot\text{s}}\right]$$
* **Steady-State Definition**: Concentration profile does not vary with time: $\dfrac{\partial C}{\partial t} = 0 \implies J = \text{constant}$.
* **Fick's 1st Law**: Flux is proportional to the concentration gradient:
  $$J = -D \frac{dC}{dx} \approx -D\left(\frac{C_B - C_A}{x_B - x_A}\right)$$
  * $D$: Diffusion coefficient / diffusivity ($\text{m}^2/\text{s}$).
  * Negative sign: Mass spontaneously flows *down* the concentration gradient.
  * For flat membrane at steady state: $\dfrac{dC}{dx} = \text{constant}$ (linear profile).

---

### 3. Non-Steady State Diffusion & Fick's Second Law
* **Non-Steady State**: Concentration changes with time and location: $\dfrac{\partial C}{\partial t} \neq 0$.
* **Fick's 2nd Law (Constant $D$)**:
  $$\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$$
* **Semi-Infinite Solid Solution** ($l > 10\sqrt{Dt}$, uniform initial $C_0$, constant surface $C_s$ at $x=0$):
  $$\frac{C_x - C_0}{C_s - C_0} = 1 - \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right) \iff \frac{C_s - C_x}{C_s - C_0} = \text{erf}\left(\frac{x}{2\sqrt{Dt}}\right)$$
* **Gaussian Error Function**: $\text{erf}(z) = \dfrac{2}{\sqrt{\pi}}\int_0^z e^{-y^2}dy$ with $\text{erf}(0)=0$, $\text{erf}(\infty)=1$.
* **Linear Interpolation Formula**:
  $$z = z_1 + \left(\frac{\text{erf}(z) - \text{erf}(z_1)}{\text{erf}(z_2) - \text{erf}(z_1)}\right)(z_2 - z_1)$$
* **Quick Reference Table**:
  $$\begin{array}{c|c||c|c||c|c}
  z & \text{erf}(z) & z & \text{erf}(z) & z & \text{erf}(z) \\
  \hline
  0.20 & 0.2227 & 0.45 & 0.4755 & 0.80 & 0.7421 \\
  0.30 & 0.3286 & 0.50 & 0.5205 & 0.90 & 0.7969 \\
  0.40 & 0.4284 & 0.60 & 0.6039 & 1.00 & 0.8427 \\
  \end{array}$$

---

### 4. Constant-Concentration Scaling Laws
* If a specific target concentration $C_x$ is specified, then $\dfrac{C_x - C_0}{C_s - C_0} = \text{const} \implies \dfrac{x}{2\sqrt{Dt}} = \text{const}$:
  $$\frac{x^2}{Dt} = \text{constant} \iff \frac{x_1^2}{D_1 t_1} = \frac{x_2^2}{D_2 t_2}$$
* **Constant Temperature ($D_1 = D_2$)**: $\dfrac{x_1^2}{t_1} = \dfrac{x_2^2}{t_2} \implies \dfrac{x_1}{\sqrt{t_1}} = \dfrac{x_2}{\sqrt{t_2}}$.
  * To double case depth ($x_2 = 2 x_1$), required time **quadruples** ($t_2 = 4 t_1$).
* **Constant Depth ($x_1 = x_2$)**: $D_1 t_1 = D_2 t_2 \implies t_2 = t_1 \left(\dfrac{D_1}{D_2}\right)$.

---

### 5. Temperature Dependence & Activation Energy
* **Arrhenius Equation**: $D = D_0 \exp\left(-\dfrac{Q_d}{RT}\right) = D_0 \exp\left(-\dfrac{Q_d}{k_B T}\right)$
  * $D_0$: Pre-exponential frequency factor ($\text{m}^2/\text{s}$).
  * $Q_d$: Activation energy ($\text{J/mol}$, $\text{kJ/mol}$, or $\text{eV/atom}$).
  * $R = 8.314\text{ J/mol}\cdot\text{K}$; $k_B = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K}$; $T$ strictly in Kelvin!
* **Arrhenius Linearization**:
  * $\ln D = \ln D_0 - \dfrac{Q_d}{R}\left(\dfrac{1}{T}\right) \implies \text{Slope} = -\dfrac{Q_d}{R}, \quad \text{Intercept} = \ln D_0$
  * $\log_{10} D = \log_{10} D_0 - \dfrac{Q_d}{2.303 R}\left(\dfrac{1}{T}\right) \implies \text{Slope} = -\dfrac{Q_d}{2.303 R}, \quad \text{Intercept} = \log_{10} D_0$
* **Diffusion Pathway Rates**:
  $$D_{\text{surface}} > D_{\text{grain boundary}} > D_{\text{dislocation}} > D_{\text{lattice (bulk)}}$$
  $$Q_{\text{surface}} < Q_{\text{grain boundary}} < Q_{\text{dislocation}} < Q_{\text{lattice (bulk)}}$$

---

### 6. Quick Exam Rules of Thumb & Pitfalls
1. **Open vs Close-Packed**: Diffusion is **faster in open structures** (BCC $\text{APF}=0.68$ > FCC $\text{APF}=0.74$) due to larger interstitial voids and lower $Q_d$.
2. **Melting Temperature**: Diffusion is **faster in lower-$T_m$ materials** due to weaker bonds and lower $Q_d$.
3. **Bond Character**: Diffusion is **faster in secondary bonded solids** than strongly directional covalent solids.
4. **Units Check**: Convert $T \to \text{K}$, $t \to \text{s}$, $x \to \text{m}$, and ensure $Q_d$ ($\text{J}$ vs $\text{kJ}$) matches $R$.
