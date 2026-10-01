# MIAE 221 · Rapid Review Sheet · Part 7
## Dislocations & Strengthening Mechanisms

---

### 1. Slip Systems & Crystal Architecture
* **Rule**: Plastic deformation occurs by dislocation glide on close-packed planes along close-packed directions.
* **Slip System Comparison**:
  | Structure | Slip Planes | Slip Directions | Total Systems | Ductility Character |
  | :--- | :--- | :--- | :---: | :--- |
  | **FCC** | $\{111\}$ (4) | $\langle 110 \rangle$ (3) | **12** | Highly ductile at all temperatures (satisfies Von Mises $\ge 5$). |
  | **BCC** | $\{110\}, \{112\}, \{123\}$ | $\langle 111 \rangle$ (2) | **48** | Strong; pronounced Ductile-to-Brittle Transition (DBTT) at low $T$. |
  | **HCP** | $\{0001\}$ basal (1) | $\langle 11\bar{2}0 \rangle$ (3) | **3** | Brittle at room temperature ($< 5$ systems; twinning required). |

---

### 2. Schmid's Law & Single Crystal Yielding
* **Resolved Shear Stress**: $\tau_R = \sigma \cos \phi \cos \lambda = \sigma \cdot m$
  * $\phi$ = Angle between tensile axis and slip plane normal.
  * $\lambda$ = Angle between tensile axis and slip direction.
  * $m = \cos \phi \cos \lambda$ = **Schmid Factor** ($\phi + \lambda \ge 90^\circ$).
* **Critical Resolved Shear Stress ($\tau_{\text{crss}}$)**: Minimum shear stress to initiate slip:
  $$\sigma_y = \frac{\tau_{\text{crss}}}{\cos \phi \cos \lambda} = \frac{\tau_{\text{crss}}}{m}$$
* **Maximum Schmid Factor**: At $\phi = \lambda = 45^\circ \implies m_{\max} = \mathbf{0.50} \implies \sigma_{y,\min} = 2\,\tau_{\text{crss}}$.

---

### 3. The 4 Metallurgical Strengthening Mechanisms
* **Core Principle**: Impede dislocation motion to increase yield strength!
1. **Grain Size Reduction (Hall-Petch)**:
   $$\sigma_y = \sigma_0 + k_y \cdot d^{-1/2}$$
   * Dislocation pile-ups at grain boundaries. ONLY mechanism that increases strength **AND** toughness!
2. **Solid Solution Strengthening**:
   * Solute atom size misfit ($\Delta r$) creates compressive/tensile lattice strain fields that pin dislocation cores.
3. **Strain Hardening / Cold Work**:
   $$\%CW = \left(\frac{A_0 - A_d}{A_0}\right) \times 100\% = \left(1 - \frac{d_d^2}{d_0^2}\right) \times 100\%$$
   * Dislocation density explodes: $\rho_d \approx 10^6 \to 10^{10}\text{ cm}^{-2}$. Dislocation tangles mutually obstruct slip ($\tau_y \propto G b \sqrt{\rho_d}$).
4. **Precipitation Hardening**:
   * Nanoscale particles impede dislocations via cutting or **Orowan looping** ($\tau \approx Gb/L$).

---

### 4. Annealing Stages of Cold-Worked Metals
| Stage | Temperature Range | Microstructure | Mechanical Property Evolution |
| :--- | :--- | :--- | :--- |
| **1. Recovery** | $T < T_R$ ($\approx 0.1-0.3\,T_m$) | Dislocation annihilation & polygonization. Grains unchanged. | Residual stresses relieve; conductivity restored; strength unchanged. |
| **2. Recrystallization** | $T_R \approx 0.3-0.4\,T_m$ | Nucleation of new strain-free equiaxed grains consuming cold-worked grains. | $\sigma_y$ and UTS drop sharply; **Ductility fully restored**! |
| **3. Grain Growth** | $T \gg T_R$ | Large grains coarsen ($d^n - d_0^n = Kt$) to reduce boundary energy. | Yield strength decreases slightly per Hall-Petch. |
