# MIAE 221 · Rapid Review Sheet · Part 5
## Imperfections in Solids, Point Defects, Solid Solutions & Dislocations

---

### 1. Thermodynamics & Point Defects
* **Thermodynamic Law**: A defect-free crystal is impossible at $T > 0\text{ K}$. Creating vacancies raises enthalpy ($\Delta H > 0$), but introduces configurational entropy ($\Delta S > 0$), lowering Gibbs free energy ($G = H - TS$).
* **Vacancy**: Missing lattice site; produces localized inward tensile strain.
* **Self-Interstitial**: Host atom squeezed into small interstitial void; produces severe compressive strain ($Q_{\text{interstitial}} \gg Q_v \implies$ negligible concentration).

---

### 2. Equilibrium Vacancy Concentration (Arrhenius Relation)
$$\frac{N_v}{N} = \exp\left(-\frac{Q_v}{k_B T}\right)$$
* $N = \frac{\rho \cdot N_A}{A}$ = Total lattice sites/unit volume.
* $Q_v$ = Vacancy formation energy ($\text{eV/atom}$ or $\text{J/mol}$).
* $k_B = 8.62 \times 10^{-5}\text{ eV/atom}\cdot\text{K} = 1.38 \times 10^{-23}\text{ J/atom}\cdot\text{K}$.
* **Arrhenius Slope**: Plotting $\ln(N_v/N)$ vs. $1/T$ yields a straight line with $\text{Slope} = -Q_v/k_B$.

---

### 3. Hume-Rothery Rules for Substitutional Solid Solubility
For two metals to form extensive/complete substitutional solid solution:
1. **Atomic Size Factor**: $\Delta r = \frac{|r_{\text{solute}} - r_{\text{solvent}}|}{r_{\text{solvent}}} \times 100\% < \mathbf{15\%}$.
2. **Crystal Structure Match**: Both metals must have the **same crystal structure** (e.g., both FCC for Cu and Ni).
3. **Electronegativity Proximity**: $\Delta X = |X_{\text{solute}} - X_{\text{solvent}}| \le \pm \mathbf{0.4}$. Large $\Delta X$ forms brittle intermetallic compounds.
4. **Valency Rule**: Higher solubility when solute has equal or **higher valency** than solvent ($V_{\text{solute}} \ge V_{\text{solvent}}$).
* *Exemplary System*: $\text{Cu-Ni}$ (FCC, $\Delta r = 2.3\%$, $\Delta X = 0.1 \implies 100\%$ miscible isomorphous system).

---

### 4. Composition Conversions
* **$wt\% \to at\%$**: $C'_1 = \frac{\frac{C_1}{A_1}}{\frac{C_1}{A_1} + \frac{C_2}{A_2}} \times 100\%$
* **$at\% \to wt\%$**: $C_1 = \frac{C'_1 A_1}{C'_1 A_1 + C'_2 A_2} \times 100\%$

---

### 5. Linear Defects: Dislocations & Plastic Slip
Dislocations allow atomic planes to slide one row at a time, lowering yield stress by $1000\times$:
| Dislocation Type | Dislocation Line ($\mathbf{t}$) vs. Burgers Vector ($\mathbf{b}$) | Local Strain Field | Slip Motion vs. Shear Stress ($\tau$) |
| :--- | :---: | :--- | :---: |
| **Edge ($\top$)** | **$\mathbf{b} \perp \mathbf{t}$** (Perpendicular) | Compressive above slip plane, Tensile below | **Parallel** to $\tau$ |
| **Screw** | **$\mathbf{b} \parallel \mathbf{t}$** (Parallel) | Pure Shear strain (helical spiral ramp) | **Perpendicular** to $\tau$ |
| **Mixed** | Angle $\theta \neq 0^\circ, 90^\circ$ | Combined Compressive, Tensile & Shear | Intermediate angle |
* **Invariance Law**: The Burgers vector $\mathbf{b}$ is **constant and uniform** along the entire length of any dislocation loop.
