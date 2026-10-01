# MIAE 221 · Rapid Review Sheet · Part 8
## Phase Diagrams & Iron-Carbon Systems

---

### 1. Gibbs Phase Rule
* **Condensed Rule ($P = 1\text{ atm}$)**: $P + F = C + 1$
* For binary system ($C = 2$): $P + F = 3 \implies F = 3 - P$
  * Single Phase ($P = 1 \implies F = 2$, Bivariant): Both $T$ and composition can vary.
  * Two Phases ($P = 2 \implies F = 1$, Univariant): Selecting $T$ fixes both phase compositions!
  * Three Phases ($P = 3 \implies F = 0$, Invariant): Invariant point ($T$ and compositions fixed).

---

### 2. Tie Line & Inverse Lever Rule
In any two-phase region at temperature $T_0$ for alloy composition $C_0$:
1. **Compositions**: Read directly from the horizontal tie-line endpoints ($C_\alpha$ and $C_L$).
2. **Phase Fractions (Inverse Lever Rule)**:
   $$W_\alpha = \frac{C_L - C_0}{C_L - C_\alpha} = \frac{\text{Opposite Arm}}{\text{Total Length}}, \qquad W_L = \frac{C_0 - C_\alpha}{C_L - C_\alpha} = \frac{\text{Opposite Arm}}{\text{Total Length}}$$
   * Check: $W_\alpha + W_L = 1.00$ ($100\%$).

---

### 3. Binary Eutectic Invariant Reactions
* **Eutectic Reaction**: $L \xrightarrow{\text{cool}} \alpha + \beta$ (Liquid solidifies into two distinct solids).
* **Pb-Sn System**: Eutectic at $183^\circ\text{C}$ and $61.9\text{ wt}\%\text{ Sn}$ ($C_\alpha = 18.3\%$, $C_\beta = 97.8\%$).
* **Primary (Proeutectic) vs Eutectic Microconstituents** ($C_0 < 61.9\%$):
  $$W_{\alpha'} = \frac{61.9 - C_0}{61.9 - 18.3}, \qquad W_{\text{eutectic}} = 1 - W_{\alpha'} = \frac{C_0 - 18.3}{61.9 - 18.3}$$
* **Other Invariant Reactions**:
  * **Eutectoid**: $\text{Solid}_1 \to \text{Solid}_2 + \text{Solid}_3$ ($\gamma \to \alpha + \text{Fe}_3\text{C}$)
  * **Peritectic**: $L + \text{Solid}_1 \to \text{Solid}_2$ ($L + \delta \to \gamma$)

---

### 4. Iron-Carbon ($\text{Fe-Fe}_3\text{C}$) Phase Diagram
* **Allotropes of Iron**:
  * $\alpha$-Ferrite: BCC, max C solubility **$0.022\text{ wt}\%$** at $727^\circ\text{C}$. Soft, ductile.
  * $\gamma$-Austenite: FCC, max C solubility **$2.14\text{ wt}\%$** at $1147^\circ\text{C}$. Non-magnetic.
  * *Why FCC dissolves $100\times$ more C*: Octahedral voids in FCC are larger and symmetric ($r \approx 0.053\text{ nm}$ vs $0.019\text{ nm}$ in BCC).
  * Cementite ($\text{Fe}_3\text{C}$): Intermetallic, **$6.70\text{ wt}\%\text{ C}$**, hard and brittle.
* **Eutectoid Reaction ($727^\circ\text{C}$, $0.76\text{ wt}\%\text{ C}$)**:
  $$\gamma(0.76\%\text{ C}) \xrightleftharpoons[\text{heat}]{\text{cool}} \alpha(0.022\%\text{ C}) + \text{Fe}_3\text{C}(6.70\%\text{ C}) \quad \implies \text{\bf Pearlite}$$
  * Pearlite is a two-phase lamellar microconstituent ($\sim 88\%\ \alpha + 12\%\ \text{Fe}_3\text{C}$).
* **Hypoeutectoid Steels ($C_0 < 0.76\%\text{ C}$)**:
  * Proeutectoid ferrite: $W_{\alpha'} = \dfrac{0.76 - C_0}{0.76 - 0.022}$
  * Pearlite: $W_p = 1 - W_{\alpha'} = \dfrac{C_0 - 0.022}{0.76 - 0.022}$
  * Total ferrite: $W_{\alpha,\text{total}} = \dfrac{6.70 - C_0}{6.70 - 0.022}$
