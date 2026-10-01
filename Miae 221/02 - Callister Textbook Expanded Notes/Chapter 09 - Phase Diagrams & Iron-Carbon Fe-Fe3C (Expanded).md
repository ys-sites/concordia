# Chapter 09: Phase Diagrams & The Iron-Carbon System
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Materials Science (MIAE 221)  
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Edition) by William D. Callister, Jr. & David G. Rethwisch — Chapter 9

---

## 1. Executive Overview & First-Principles Philosophy

In materials engineering, the macroscopic mechanical properties of an alloy—its strength, hardness, toughness, and ductility—are not governed solely by chemical composition. They depend overwhelmingly on its **microstructure**: the number of phases present, their relative amounts, and their spatial distribution (morphology).

A **Phase Diagram** (also called an **equilibrium diagram**) is the graphical "road map" of metallurgy:
* It maps the thermodynamically stable phases that exist at any combination of **temperature, pressure, and chemical composition** under equilibrium conditions.
* It enables metallurgical engineers to predict:
  1. What phases are present at temperature $T$.
  2. The exact chemical composition of each phase.
  3. The precise weight fraction of each phase using the **Inverse Lever Rule**.
  4. The microstructural evolution during solidification and heat treatment.

In ferrous metallurgy, the **Iron-Carbon ($\text{Fe}-\text{Fe}_3\text{C}$) Phase Diagram** forms the scientific bedrock of all carbon steels and cast irons—the structural backbone of civil infrastructure, transportation, and industrial machinery.

---

## 2. Fundamental Definitions & Phase Equilibria (Callister §9.2 – §9.5)

### 2.1 Component vs. Phase vs. Microstructure
* **Component**: Pure chemical elements or chemically stoichiometric compounds that constitute an alloy system (e.g., in a brass alloy, the components are $\text{Cu}$ and $\text{Zn}$; in carbon steel, the components are $\text{Fe}$ and $\text{C}$).
* **Phase**: A physically distinct, chemically homogeneous, and mechanically separable portion of matter:
  * Pure water containing ice cubes is a **two-phase system** (solid ice + liquid water), even though it has only **one component** ($\text{H}_2\text{O}$).
  * A solid solution of $\text{Ni}$ dissolved in $\text{Cu}$ is a **single-phase solid** ($\alpha$), even though it has **two components**.
* **Solubility Limit**: The maximum concentration of solute atoms that can dissolve into a solvent matrix at a specific temperature without forming a new second phase (analogous to the saturation limit of sugar dissolving in tea).

### 2.2 Gibbs Phase Rule (Callister §9.15)
The **Gibbs Phase Rule** defines the number of degrees of freedom ($F$)—the number of independent intensive variables (temperature, pressure, composition) that can be varied simultaneously without altering the number of phases in equilibrium:
$$P + F = C + 2$$
In metallurgical systems, pressure is held constant at atmospheric pressure ($P_{\text{atm}} = 1\text{ atm}$), eliminating one degree of freedom. This yields the **Condensed Gibbs Phase Rule**:
$$P + F = C + 1$$
where:
* $P$ = number of phases present in thermodynamic equilibrium.
* $F$ = degrees of freedom.
* $C$ = number of chemical components.
  * In a single-phase region ($P = 1, C = 2$): $F = 2 - 1 + 1 = 2$ (Both temperature and composition can vary independently).
  * In a two-phase region ($P = 2, C = 2$): $F = 2 - 2 + 1 = 1$ (Specifying temperature automatically fixes the compositions of both phases).
  * At an invariant reaction point ($P = 3, C = 2$): $F = 2 - 3 + 1 = 0$ (Zero degrees of freedom: reaction occurs at one unique temperature and composition).

---

## 3. Binary Isomorphous Systems: The Inverse Lever Rule (Callister §9.7 – §9.9)

A binary system is **isomorphous** when the two components exhibit complete, unlimited liquid and solid solubility across all compositions from $0\%$ to $100\%$ (e.g., the Copper-Nickel $\text{Cu-Ni}$ system).

![Callister Figure 9.3 - The Inverse Lever Rule Construction](./images/callister_fig_9_3_lever_rule.png)
*Figure 9.3: Schematic illustration of the Inverse Lever Rule applied across a two-phase $(L + \alpha)$ tie-line to determine phase weight fractions $W_L$ and $W_\alpha$ — from Callister & Rethwisch 10th Ed. (Fig. 9.3).*

### 3.1 Phase Boundaries
* **Liquidus Line**: The boundary above which the alloy is completely molten **liquid ($L$)**.
* **Solidus Line**: The boundary below which the alloy is completely solidified **solid ($\alpha$)**.
* **Two-Phase Region ($L + \alpha$)**: The coexistence zone between liquidus and solidus.

---

### 3.2 The 2-Step Protocol for Two-Phase Quantitative Analysis

Given an overall alloy composition $C_0$ at temperature $T$ inside a two-phase field:

#### Step 1: Determine Phase Compositions (The Tie-Line Rule)
1. Construct a horizontal isothermal line (a **tie-line**) at temperature $T$ across the two-phase field from boundary to boundary.
2. Drop vertical lines from the tie-line intersections to the horizontal composition axis:
   * Intersection with Liquidus line gives the composition of the liquid phase: $C_L$.
   * Intersection with Solidus line gives the composition of the solid phase: $C_\alpha$.

#### Step 2: Determine Phase Weight Fractions (The Inverse Lever Rule)
The weight fractions of the phases are determined by mechanical lever balance about the overall composition $C_0$:
$$W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L} \quad (\text{Weight fraction of Liquid})$$
$$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L} \quad (\text{Weight fraction of Solid } \alpha)$$
* 🌟 **The "Inverse" Lever Logic**:
  * To find the fraction of the **Liquid** phase (on the left side of the tie-line), measure the length of the tie-line segment on the **opposite (right) side**: $(C_\alpha - C_0)$.
  * To find the fraction of the **Solid** phase (on the right side), measure the segment on the **opposite (left) side**: $(C_0 - C_L)$.
  * **Sum Check**: The weight fractions must always sum to unity:
    $$W_L + W_\alpha = \frac{C_\alpha - C_0}{C_\alpha - C_L} + \frac{C_0 - C_L}{C_\alpha - C_L} = \frac{C_\alpha - C_L}{C_\alpha - C_L} = 1.000 \quad (100\%)$$

---

## 4. Binary Eutectic Systems & Microstructures (Callister §9.10 – §9.12)

In systems where components have limited solid solubility (e.g., Lead-Tin $\text{Pb-Sn}$), components form a **Binary Eutectic System**.

### 4.1 The Eutectic Invariant Reaction
At the **eutectic point** $(T_E, C_E)$, a liquid phase of unique eutectic composition solidifies isothermally into two distinctly different solid phases simultaneously:
$$L(C_E) \xrightarrow[\text{cooling}]{\text{at } T_E} \alpha(C_{\alpha E}) + \beta(C_{\beta E})$$
* For the $\text{Pb-Sn}$ system: $T_E = 183^\circ\text{C}$, $C_E = 61.9\text{ wt}\%\text{ Sn}$.
* The resulting solid microstructure consists of alternating microscopic plates (lamellae) of $\alpha$ and $\beta$, termed the **lamellar eutectic structure**.

### 4.2 Hypoeutectic vs. Hypereutectic Solidification
* **Hypoeutectic Alloys ($C_0 < C_E$)**:
  * Upon cooling below the liquidus, solid $\alpha$ nucleates first: called **primary (proeutectic) $\alpha$**.
  * As primary $\alpha$ grows, the remaining liquid is enriched in solute until it reaches the eutectic composition $C_E$ at $T_E$.
  * At $T_E$, all remaining liquid transforms into the lamellar eutectic mixture $(\alpha + \beta)$.
  * *Final Microstructure*: Large primary $\alpha$ grains surrounded by lamellar eutectic matrix.
* **Hypereutectic Alloys ($C_0 > C_E$)**:
  * Forms **primary (proeutectic) $\beta$** plus lamellar eutectic mixture $(\alpha + \beta)$.

---

## 5. The Iron-Carbon ($\text{Fe}-\text{Fe}_3\text{C}$) Phase Diagram (Callister §9.18 – §9.19)

The Iron-Iron Carbide system is the foundation of all steel metallurgy. The diagram extends from pure iron ($0\text{ wt}\%\text{ C}$) to the stoichiometric intermetallic compound **Cementite ($\text{Fe}_3\text{C}$)** containing **$6.70\text{ wt}\%\text{ C}$**.

![Callister Figure 9.24 - The Iron-Carbon (Fe-Fe3C) Phase Diagram](./images/callister_fig_9_24_iron_carbon_phase_diagram.png)
*Figure 9.24: The Iron-Iron Carbide ($\text{Fe}-\text{Fe}_3\text{C}$) phase diagram showing $\alpha$-ferrite, $\gamma$-austenite, cementite, and the eutectoid reaction at $727^\circ\text{C}$ ($0.76\text{ wt}\%\text{ C}$) — from Callister & Rethwisch 10th Ed. (Fig. 9.24).*

---

### 5.1 Phases of the Iron-Carbon System

| Phase Name | Common Symbol | Crystal Structure | Carbon Solubility Limit | Mechanical Characteristics |
| :--- | :---: | :---: | :--- | :--- |
| **Ferrite** | $\alpha$ | **BCC** | Max $0.022\text{ wt}\%\text{ C}$ at $727^\circ\text{C}$ ($0.008\%$ at RT) | Very soft, highly ductile, magnetic. |
| **Austenite** | $\gamma$ | **FCC** | Max $2.14\text{ wt}\%\text{ C}$ at $1147^\circ\text{C}$ | Ductile, easily hot-worked, non-magnetic. |
| **$\delta$-Ferrite** | $\delta$ | **BCC** | Max $0.09\text{ wt}\%\text{ C}$ at $1493^\circ\text{C}$ | Stable only at extreme temperatures ($>1394^\circ\text{C}$). |
| **Cementite** | $\text{Fe}_3\text{C}$ | Orthorhombic | Fixed at **$6.70\text{ wt}\%\text{ C}$** | Ceramic-like, extremely hard and brittle. |

---

### 5.2 The Three Invariant Reactions in $\text{Fe}-\text{Fe}_3\text{C}$

1. **Peritectic Reaction ($1493^\circ\text{C}$)**:
   $$L(0.53\text{ wt}\%\text{ C}) + \delta(0.09\text{ wt}\%\text{ C}) \xrightarrow{\text{cooling}} \gamma(0.16\text{ wt}\%\text{ C})$$
2. **Eutectic Reaction ($1147^\circ\text{C}$)**:
   $$L(4.30\text{ wt}\%\text{ C}) \xrightarrow{\text{cooling}} \gamma(2.14\text{ wt}\%\text{ C}) + \text{Fe}_3\text{C}(6.70\text{ wt}\%\text{ C})$$
   (The resulting eutectic product is called **Ledeburite**, found in cast irons).
3. **Eutectoid Reaction ($727^\circ\text{C}$ — THE CORE OF STEEL METALLURGY)**:
   A solid-state reaction where solid austenite ($\gamma$) decomposes into two different solid phases simultaneously:
   $$\gamma(0.76\text{ wt}\%\text{ C}) \xrightarrow[\text{cooling}]{\text{at } 727^\circ\text{C}} \alpha(0.022\text{ wt}\%\text{ C}) + \text{Fe}_3\text{C}(6.70\text{ wt}\%\text{ C})$$
   * **The Product: Pearlite**: The eutectoid product forms as alternating micro-layers (lamellae) of soft, ductile $\alpha$-ferrite and hard, rigid cementite ($\text{Fe}_3\text{C}$). Under optical microscopy, the lamellae diffract light with a pearly sheen, hence the name **Pearlite**.

---

### 5.3 Classification of Steels by Carbon Content

Engineering iron-carbon alloys are classified into:
* **Steels**: Carbon content $0.022\text{ wt}\% \le C_0 < 2.14\text{ wt}\%\text{ C}$.
* **Cast Irons**: Carbon content $2.14\text{ wt}\% < C_0 \le 6.70\text{ wt}\%\text{ C}$ (typically $3.0 - 4.5\%$).

Within steels, alloys are categorized relative to the eutectoid composition ($0.76\text{ wt}\%\text{ C}$):

```
                               Steels Classification
                                         │
     ┌───────────────────────────────────┼───────────────────────────────────┐
     ▼                                   ▼                                   ▼
HYPOEUTECTOID STEEL (< 0.76% C)    EUTECTOID STEEL (0.76% C)   HYPEREUTECTOID STEEL (> 0.76% C)
• e.g., AISI 1020, 1045            • Exactly 0.76 wt% C         • e.g., Tool steels (1095)
• Microstructure:                  • Microstructure:            • Microstructure:
  Proeutectoid Ferrite + Pearlite    100% Lamellar Pearlite       Proeutectoid Cementite + Pearlite
• Ductile, structural applications • High strength, rail steels • Ultra-hard, wear cutting tools
```

#### A. Hypoeutectoid Steel Microstructural Evolution ($C_0 < 0.76\text{ wt}\%\text{ C}$)
Consider cooling a steel with $C_0 = 0.40\text{ wt}\%\text{ C}$ (AISI 1040):
1. **Above $A_3$ ($T > 800^\circ\text{C}$)**: Microstructure is $100\%$ uniform austenite ($\gamma$).
2. **Between $A_3$ and $A_1$ ($727^\circ\text{C} < T < 800^\circ\text{C}$)**: Austenite enters the $(\alpha + \gamma)$ field. Solid $\alpha$-ferrite begins to nucleate and grow preferentially along the austenite grain boundaries. Because this ferrite forms **before (pro)** the eutectoid temperature, it is called **Proeutectoid Ferrite**.
   As proeutectoid ferrite grows, it rejects carbon into the surrounding austenite because ferrite can hold almost no carbon ($<0.022\%$). The carbon content of remaining austenite rises along the $A_3$ boundary from $0.40\%$ toward $0.76\%$.
3. **At $727^\circ\text{C}$ ($A_1$)**: The remaining austenite has reached the exact eutectoid composition ($0.76\text{ wt}\%\text{ C}$). It transforms completely into **Pearlite**.
4. **Final Room-Temperature Microstructure**: White islands of **Proeutectoid Ferrite** surrounded by dark colonies of **Pearlite**!

#### B. Hypereutectoid Steel Microstructural Evolution ($C_0 > 0.76\text{ wt}\%\text{ C}$)
Consider cooling a tool steel with $C_0 = 1.10\text{ wt}\%\text{ C}$:
1. **Between $A_{\text{cm}}$ and $A_1$ ($727^\circ\text{C} < T < 870^\circ\text{C}$)**: Enters the $(\gamma + \text{Fe}_3\text{C})$ field. Hard cementite nucleates along austenite grain boundaries, forming a continuous network of **Proeutectoid Cementite**.
2. **At $727^\circ\text{C}$**: Remaining austenite reaches $0.76\%$ and transforms into **Pearlite**.
3. **Final Microstructure**: A brittle boundary network of **Proeutectoid Cementite** encasing colonies of **Pearlite**.

---

## 6. Comprehensive Step-by-Step Problem Walkthroughs

### 6.1 Problem 1: Lever Rule Analysis of a Copper-Nickel Isomorphous Alloy

**Problem Statement**: A copper-nickel alloy containing $C_0 = 40\text{ wt}\%\text{ Ni}$ is slowly cooled to a temperature of $1250^\circ\text{C}$. At $1250^\circ\text{C}$, the liquidus line composition is $C_L = 32\text{ wt}\%\text{ Ni}$ and the solidus line composition is $C_\alpha = 45\text{ wt}\%\text{ Ni}$.
1. State the phases present.
2. Determine the chemical composition of each phase.
3. Calculate the weight fractions of liquid ($W_L$) and solid ($W_\alpha$).
4. For a $5.0\text{ kg}$ ingot, calculate the exact mass (in $\text{kg}$) of solid and liquid.

#### Step 1: Identify Phases Present
At $1250^\circ\text{C}$, $C_0 = 40\text{ wt}\%\text{ Ni}$ lies between $C_L = 32\%$ and $C_\alpha = 45\%$.
The alloy is in the **two-phase $(L + \alpha)$ field**. Both **Liquid ($L$)** and **Solid ($\alpha$)** coexist.

#### Step 2: Determine Phase Compositions via Tie-Line
* Composition of Liquid phase: $C_L = 32\text{ wt}\%\text{ Ni}$ ($68\text{ wt}\%\text{ Cu}$).
* Composition of Solid $\alpha$ phase: $C_\alpha = 45\text{ wt}\%\text{ Ni}$ ($55\text{ wt}\%\text{ Cu}$).

#### Step 3: Apply the Inverse Lever Rule
Total tie-line length: $C_\alpha - C_L = 45 - 32 = 13\text{ wt}\%$.
* **Weight fraction of Liquid ($W_L$)**:
  $$W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L} = \frac{45 - 40}{45 - 32} = \frac{5}{13} = 0.3846 \implies 38.5\%$$
* **Weight fraction of Solid $\alpha$ ($W_\alpha$)**:
  $$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L} = \frac{40 - 32}{45 - 32} = \frac{8}{13} = 0.6154 \implies 61.5\%$$
* Check: $W_L + W_\alpha = 0.3846 + 0.6154 = 1.0000$ ($100\%$).

#### Step 4: Calculate Component Masses in a $5.0\text{ kg}$ Ingot
* Mass of Liquid: $m_L = W_L \times m_{\text{total}} = 0.3846 \times 5.0\text{ kg} = 1.923\text{ kg}$.
* Mass of Solid: $m_\alpha = W_\alpha \times m_{\text{total}} = 0.6154 \times 5.0\text{ kg} = 3.077\text{ kg}$.

---

### 6.2 Problem 2: Complete Quantitative Microstructural Analysis of a Hypoeutectoid Steel

**Problem Statement**: A hypoeutectoid plain carbon steel containing $C_0 = 0.35\text{ wt}\%\text{ C}$ is slowly cooled to a temperature just below the eutectoid temperature ($727^\circ\text{C} - \epsilon$, say $725^\circ\text{C}$).
Given:
* Maximum solubility of carbon in ferrite at $727^\circ\text{C}$: $C_\alpha = 0.022\text{ wt}\%\text{ C}$.
* Eutectoid composition: $C_{\text{eutectoid}} = 0.76\text{ wt}\%\text{ C}$.
* Cementite composition: $C_{\text{cem}} = 6.70\text{ wt}\%\text{ C}$.

Calculate:
1. The weight fraction of **proeutectoid ferrite** ($W_{\alpha'}$).
2. The weight fraction of **pearlite** ($W_P$).
3. The **total weight fraction of ferrite** ($W_{\alpha,\text{total}}$).
4. The **total weight fraction of cementite** ($W_{\text{cem},\text{total}}$).

#### Step 1: Calculate Proeutectoid Ferrite ($W_{\alpha'}$) & Pearlite ($W_P$)
Proeutectoid ferrite forms between $A_3$ and $A_1$. To find its fraction, we apply the lever rule **just above the eutectoid temperature ($727^\circ\text{C} + \epsilon$)**, where the two phases are proeutectoid $\alpha$ ($C_\alpha = 0.022\%$) and austenite $\gamma$ ($C_\gamma = 0.76\%$):
* **Fraction of Proeutectoid Ferrite ($W_{\alpha'}$)**:
  $$W_{\alpha'} = \frac{C_\gamma - C_0}{C_\gamma - C_\alpha} = \frac{0.76 - 0.35}{0.76 - 0.022} = \frac{0.410}{0.738} = 0.5556 \implies 55.6\%$$
* **Fraction of Austenite ($\gamma$) Just Above $727^\circ\text{C}$**:
  $$W_\gamma = \frac{C_0 - C_\alpha}{C_\gamma - C_\alpha} = \frac{0.35 - 0.022}{0.76 - 0.022} = \frac{0.328}{0.738} = 0.4444 \implies 44.4\%$$
* **Fraction of Pearlite ($W_P$)**:
  At $727^\circ\text{C}$, all remaining austenite ($W_\gamma$) transforms into Pearlite:
  $$W_P = W_\gamma = 0.4444 \implies 44.4\%$$
* *Microstructure Check*: $W_{\alpha'} + W_P = 0.5556 + 0.4444 = 1.0000$ ($100\%$).

#### Step 2: Calculate TOTAL Ferrite ($W_{\alpha,\text{total}}$) & TOTAL Cementite ($W_{\text{cem},\text{total}}$)
Just below $727^\circ\text{C}$, the steel consists fundamentally of two equilibrium phases: Ferrite ($\alpha$, $0.022\%$) and Cementite ($\text{Fe}_3\text{C}$, $6.70\%$).
We apply the lever rule across the **entire bottom tie-line from $0.022\%$ to $6.70\%$**:
* **Total Ferrite ($W_{\alpha,\text{total}}$)**:
  $$W_{\alpha,\text{total}} = \frac{C_{\text{cem}} - C_0}{C_{\text{cem}} - C_\alpha} = \frac{6.70 - 0.35}{6.70 - 0.022} = \frac{6.350}{6.678} = 0.9509 \implies 95.1\%$$
* **Total Cementite ($W_{\text{cem},\text{total}}$)**:
  $$W_{\text{cem},\text{total}} = \frac{C_0 - C_\alpha}{C_{\text{cem}} - C_\alpha} = \frac{0.35 - 0.022}{6.70 - 0.022} = \frac{0.328}{6.678} = 0.0491 \implies 4.91\%$$
* *Phase Check*: $W_{\alpha,\text{total}} + W_{\text{cem},\text{total}} = 0.9509 + 0.0491 = 1.0000$ ($100\%$).

#### Step 3: Breakdown of Eutectoid Ferrite Inside Pearlite
Notice that total ferrite ($95.1\%$) is greater than proeutectoid ferrite ($55.6\%$). The difference is the **eutectoid ferrite residing within the pearlite lamellae**:
$$W_{\alpha,\text{eutectoid}} = W_{\alpha,\text{total}} - W_{\alpha'} = 0.9509 - 0.5556 = 0.3953 \implies 39.5\%$$
Pearlite itself consists of: $39.5\%$ ferrite $+ 4.91\%$ cementite $= 44.4\%$ pearlite!

---

## 7. Critical Concordia Exam Traps & Red Flags

* ⚠️ **Trap 1: Proeutectoid Ferrite vs. Total Ferrite**:
  This is the single most common failure point on Concordia materials midterms:
  * If asked for **Proeutectoid Ferrite ($W_{\alpha'}$)**, tie-line bounds are **$0.022\%$ and $0.76\%$** (using $C_\gamma$ at the eutectoid).
  * If asked for **Total Ferrite ($W_{\alpha,\text{total}}$)**, tie-line bounds are **$0.022\%$ and $6.70\%$** (using $C_{\text{cem}}$).
  Substituting $6.70\%$ when calculating proeutectoid ferrite will produce an answer of $95\%$ instead of $55.6\%$!
* ⚠️ **Trap 2: Pearlite is a Microstructure, NOT a Phase**:
  Pearlite is NOT a phase! It is a **two-phase mixture of Ferrite ($\alpha$) and Cementite ($\text{Fe}_3\text{C}$)**. If an exam question asks: "What phases are present at room temperature?", writing "Pearlite" is technically incorrect; the correct phases are **$\alpha$-ferrite and cementite**.
* ⚠️ **Trap 3: Inverting the Lever Rule Numerator**:
  Remember: to find the phase on the left side of the tie-line ($W_L$ or $W_\alpha$), take the segment on the **right side**: $(C_{\text{right}} - C_0)$. Always verify that your calculated fraction makes physical sense (if $C_0$ is close to the solidus, $W_\alpha$ should be $>50\%$).
* ⚠️ **Trap 4: Cementite Composition is Fixed at $6.70\text{ wt}\%\text{ C}$**:
  Cementite is a line compound ($\text{Fe}_3\text{C}$). Its carbon composition does not change with temperature; it is **always $6.70\text{ wt}\%\text{ C}$**.
