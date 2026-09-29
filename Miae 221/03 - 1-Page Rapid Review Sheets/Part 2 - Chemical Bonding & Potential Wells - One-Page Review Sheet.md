# MIAE 221 · Rapid Review Sheet · Part 2
## Chemical Bonding, Potential Energy Wells & Physical Properties

---

### 1. Primary Chemical Bonds
| Bond Type | Electron Mechanism | Directionality | Typical Materials | Key Properties |
| :--- | :--- | :--- | :--- | :--- |
| **Ionic** | Electron transfer ($\text{Metal} \to \text{Nonmetal}$) | **Non-directional** | $NaCl, MgO, Al_2O_3$ | Hard, high $T_m$, brittle, electrical insulator (solid) |
| **Covalent** | Electron sharing (comparable $\Delta X$) | **Highly Directional** | Diamond, $Si, SiC$, polymer chains | Very high hardness, high $T_m$, directional cleavage |
| **Metallic** | Valence electron pool ("sea of $e^-$") | **Non-directional** | $Fe, Al, Cu, Ti$, brass | High ductility, high thermal/electrical cond., luster |

---

### 2. Pauling Percent Ionic Character (%IC)
$$\% \text{ Ionic Character} = \left[ 1 - \exp\left( -0.25 (X_A - X_B)^2 \right) \right] \times 100\%$$
* If $\Delta X = |X_A - X_B| = 0 \implies \%IC = 0\%$ (Pure Covalent, e.g. Diamond).
* If $\Delta X \approx 1.7 \implies \%IC \approx 50\%$ (Half Ionic / Half Covalent).
* If $\Delta X > 2.0 \implies \%IC > 63\%$ (Predominantly Ionic, e.g. $TiO_2 = 63.2\%, NaCl = 70.3\%, CsCl = 75.3\%$).

---

### 3. Secondary (Intermolecular) Bonds ($4 - 40\text{ kJ/mol}$)
* **Fluctuating Induced Dipoles (London Dispersion)**: Instantaneous electron imbalances in symmetrical atoms (e.g. liquid Ar, solid Xenon). Weakest bond ($< 10\text{ kJ/mol}$).
* **Permanent Dipoles**: Asymmetrical charge distribution in polar molecules (e.g. $HCl$).
* **Hydrogen Bonding**: Hydrogen covalently bonded to $F, O, \text{ or } N$. Bare proton produces uniquely strong secondary bond ($10 - 40\text{ kJ/mol}$). Governs water boiling point, DNA structure, and nylon chain strength.

---

### 4. The Potential Energy Well $\longleftrightarrow$ Macroscopic Properties
```
  Deep & Steep Well (Ceramics, W)        Shallow & Broad Well (Polymers, Pb)
  ------------------------------------   -----------------------------------
  • High Bonding Energy (|E_0| large)    • Low Bonding Energy (|E_0| small)
  • High Melting Temperature (T_m)       • Low Melting Temperature (T_m)
  • High Elastic Modulus (Stiff)         • Low Elastic Modulus (Compliant)
  • Low Thermal Expansion (alpha small)  • High Thermal Expansion (alpha large)
```
1. **Melting Temperature ($T_m$)**: Directly proportional to well depth: $\mathbf{T_m \propto |E_0|}$.
2. **Elastic Modulus ($E$, Stiffness)**: Proportional to curve curvature at equilibrium: $\mathbf{E \propto \left.\frac{d^2E_N}{dr^2}\right|_{r_0} \propto \left.\frac{dF}{dr}\right|_{r_0}}$.
3. **Thermal Expansion ($\alpha_l$)**: Governed by **well asymmetry (anharmonicity)**:
   * Thermal vibration ($E_1 \to E_2$) pushes atoms wider on attractive side $\implies$ average separation $r_{mean}$ shifts outward.
   * Deep, symmetric well $\implies$ small outward shift $\implies \mathbf{\alpha_l \propto \frac{1}{|E_0|}}$.

---

### 5. Master Property Matrix
| Material Class | Primary Bond | Well Depth $|E_0|$ | Modulus ($E$) | Melting Point | Thermal Exp. ($\alpha_l$) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Ceramics** | Ionic / Covalent | Very Large | $150 - 500\text{ GPa}$ | High ($> 2000^\circ\text{C}$) | Low ($1 - 10 \times 10^{-6}/\text{K}$) |
| **Metals** | Metallic | Moderate–Large | $50 - 400\text{ GPa}$ | Moderate–High | Moderate ($10 - 25 \times 10^{-6}/\text{K}$) |
| **Polymers** | Secondary (chains) | Small | $0.1 - 5\text{ GPa}$ | Low ($100 - 300^\circ\text{C}$) | High ($50 - 200 \times 10^{-6}/\text{K}$) |
