# MIAE 221: Materials Science for Engineers
# Part 8: Phase Diagrams & Iron-Carbon Systems Master Guide

---

## Executive Overview & Core Engineering Principles

A pure element has a fixed melting temperature and uniform properties. However, virtually all structural engineering alloys—from the titanium skins of high-performance aircraft to the reinforced structural steels of high-rise skyscrapers—are multiphase mixtures composed of two or more chemical components.

A **Phase Diagram** (also called an **equilibrium diagram** or **constitution diagram**) is a graphical map showing the relationships between environmental constraints (temperature, pressure) and composition, indicating the exact phases present in thermodynamic equilibrium.

Mastering phase diagrams enables an engineer to:
1. Predict what microstructural phases form when an alloy solidifies or cools slowly.
2. Determine the exact chemical compositions of each coexisting phase using a horizontal **tie line**.
3. Calculate the precise mass/weight fractions of each phase using the **inverse lever rule**.
4. Understand and control invariant reactions (**eutectic**, **eutectoid**, **peritectic**).
5. Master the **Iron-Carbon ($\text{Fe-Fe}_3\text{C}$) system**, the technological backbone of modern civilization.

---

## 1. Thermodynamic Definitions & The Gibbs Phase Rule

### Foundational Terminology
* **Component ($C$)**: A chemically independent constituent (pure element or stoichiometric chemical compound) that composes the system (e.g., in water-salt: $\text{H}_2\text{O}$ and $\text{NaCl}$; in brass: $\text{Cu}$ and $\text{Zn}$; in carbon steel: $\text{Fe}$ and $\text{C}$).
* **System**: A specific body of material under consideration.
* **Phase ($P$)**: A physically distinct, chemically homogeneous, and mechanically separable portion of a system with uniform crystal structure and atomic bonding throughout (e.g. solid $\alpha$, liquid $L$, solid $\text{Fe}_3\text{C}$).
* **Solubility Limit**: The maximum concentration of solute atoms that can dissolve into a solvent matrix at a given temperature to form a single-phase solid solution. Adding solute beyond this limit causes a second distinct phase to precipitate.

### The Gibbs Phase Rule
Formulated by J. Willard Gibbs, the phase rule governs the thermodynamic relationship between the number of coexisting phases ($P$), the number of components ($C$), and the number of independent externally controllable variables (degrees of freedom $F$):

$$P + F = C + N$$

Where $N$ is the number of external non-compositional variables (normally Temperature and Pressure, so $N = 2$).

#### The Condensed Gibbs Phase Rule for Metallurgy
In practical metallurgical and materials engineering, phase transformations occur at a constant atmospheric pressure of $1\text{ atm}$. Because pressure is held fixed, one degree of freedom is consumed, reducing the equation to the **condensed phase rule**:

$$P + F = C + 1$$

For a **binary alloy system** ($C = 2$):

$$P + F = 2 + 1 = 3 \implies F = 3 - P$$

| Number of Phases ($P$) | Degrees of Freedom ($F$) | Thermodynamic Classification | Physical Meaning |
| :---: | :---: | :---: | :--- |
| **$P = 1$** (Single Phase) | $F = 2$ | **Bivariant** | Both Temperature and Composition can be independently varied within the single-phase field without altering the phase state. |
| **$P = 2$** (Two Phases) | $F = 1$ | **Univariant** | Choosing Temperature automatically fixes the equilibrium compositions of both coexisting phases at the tie-line endpoints! |
| **$P = 3$** (Three Phases) | $F = 0$ | **Invariant** | Three phases coexist at only one unique, invariant temperature and unique invariant compositions (e.g., the eutectic point). |

---

## 2. Binary Isomorphous Systems & The Lever Rule

An **isomorphous system** exhibits complete liquid and solid solubility across the entire composition range ($0\%$ to $100\%$). The classic example is the **Copper-Nickel ($\text{Cu-Ni}$)** system, because both $\text{Cu}$ and $\text{Ni}$ satisfy all four Hume-Rothery rules (both FCC, atomic radius difference $< 2\%$, electronegativities $1.9$ vs $1.8$, same valency).

```
Temperature (T)
  ▲
  │              Liquid (L)
  │             .──────────.
  │            /  Liquidus   \
  │           /───────────────\  <-- Tie Line (T_0)
  │          /    (L + α)      \
  │         /    Solidus        \
  │        /─────────────────────\
  │               Solid (α)
  └────────┬──────────────────────┬──► wt% Ni
          0%                     100%
```

### Key Phase Boundaries
* **Liquidus Line**: The boundary line above which only liquid exists. Solidification begins when cooling through this line.
* **Solidus Line**: The boundary line below which the alloy is completely solid. Melting begins when heating through this line.
* **Two-Phase Region ($L + \alpha$)**: Between the liquidus and solidus lines, liquid and solid $\alpha$ coexist in equilibrium.

---

### The Tie-Line & Inverse Lever Rule Algorithm

When an alloy of overall composition $C_0$ is held at a temperature $T_0$ located within a two-phase region (e.g. $L + \alpha$), two fundamental questions must be answered:
1. **What are the compositions of the coexisting phases?**
2. **What are the relative mass fractions of each phase?**

#### Step 1: Draw the Horizontal Tie-Line (Isotherm)
Draw a horizontal line across the two-phase region at temperature $T_0$, terminating at the adjacent single-phase boundary lines.

#### Step 2: Determine Phase Compositions ($C_L$ and $C_\alpha$)
Drop perpendicular vertical lines from the tie-line intersections to the horizontal composition axis:
* The intersection with the liquidus gives the liquid composition: $C_L$.
* The intersection with the solidus gives the solid composition: $C_\alpha$.

#### Step 3: Compute Phase Weight Fractions via the Inverse Lever Rule
The overall tie-line acts as a mechanical lever balanced at the alloy's overall composition $C_0$:

```
          C_α                    C_0                    C_L
           ├──────────────────────┼──────────────────────┤
                  Arm R                   Arm S
           <──────────────────────><─────────────────────>
                               Total Length (R + S)
```

By conservation of mass:
* The mass fraction of the phase on the left ($\alpha$) is proportional to the length of the **opposite** tie-line arm on the right ($S = C_L - C_0$):

$$W_\alpha = \frac{C_L - C_0}{C_L - C_\alpha} = \frac{S}{R + S}$$

* The mass fraction of the phase on the right ($L$) is proportional to the length of the **opposite** tie-line arm on the left ($R = C_0 - C_\alpha$):

$$W_L = \frac{C_0 - C_\alpha}{C_L - C_\alpha} = \frac{R}{R + S}$$

* As a mandatory mathematical check:
  $$W_\alpha + W_L = 1.00 \quad (100\%)$$

---

## 3. Binary Eutectic Systems (Pb-Sn Phase Diagram)

In systems where components have limited solid solubility in one another (due to differences in atomic size, valence, or crystal structure), an intermediate invariant reaction occurs: the **eutectic reaction**.

The classic engineering benchmark is the **Lead-Tin ($\text{Pb-Sn}$)** soldering system:

```
  T (°C)
   327°C
    ▲\
    │ \   Liquid (L)                                   232°C
    │  \                       Liquidus               /│
    │   \                    .───────────.           / │
    │    \                  /   183°C     \         /  │
    │ α   \   (L + α)      /    61.9% Sn   \ (L + β)/  │ β
    │──────\──────────────*─────────────────\──────/───│
    │18.3%  \  Primary α  │                 │     /97.8%
    │        \  + Eutectic│   Eutectic      │    /     │
    │   (α + β)           │  Microstructure │   / (α+β)│
    └─────────────────────┴─────────────────┴──┴───────┴──► wt% Sn
    0% Pb                                             100% Sn
```

### Foundational Invariant Points in Pb-Sn
* **Eutectic Temperature**: $T_E = 183^\circ\text{C}$.
* **Eutectic Composition**: $C_E = 61.9\text{ wt}\%\text{ Sn}$.
* **Maximum Solid Solubility of Sn in Lead ($\alpha$)**: $C_{\alpha,\max} = 18.3\text{ wt}\%\text{ Sn}$ at $183^\circ\text{C}$.
* **Maximum Solid Solubility of Pb in Tin ($\beta$)**: $C_{\beta,\max} = 97.8\text{ wt}\%\text{ Sn}$ ($2.2\text{ wt}\%\text{ Pb}$) at $183^\circ\text{C}$.

### The Invariant Eutectic Reaction
Upon cooling through $183^\circ\text{C}$, liquid of composition $61.9\text{ wt}\%\text{ Sn}$ solidifies isothermally into two distinct solid phases:

$$L(61.9\text{ wt}\%\text{ Sn}) \xrightleftharpoons[\text{heat}]{\text{cool}} \alpha(18.3\text{ wt}\%\text{ Sn}) + \beta(97.8\text{ wt}\%\text{ Sn})$$

#### Why Does the Eutectic Microstructure Form Alternating Lamellae?
Because solid $\alpha$ is rich in lead ($81.7\text{ wt}\%\text{ Pb}$) while solid $\beta$ is rich in tin ($97.8\text{ wt}\%\text{ Sn}$), solidification requires rapid redistribution of atoms. Atoms diffuse sideways over minimal distances ahead of the advancing solidification interface, producing a characteristic **alternating lamellar (layered) structure** of $\alpha$ and $\beta$ plates.

---

### Primary (Proeutectic) Phase vs. Eutectic Microconstituent

For an alloy that is **hypoeutectic** ($C_0 < C_E$, e.g. $40\text{ wt}\%\text{ Sn}$):
1. **Between Liquidus and $183^\circ\text{C}$**: Primary (proeutectic) $\alpha$ dendrites nucleate and grow from the liquid. The remaining liquid becomes increasingly enriched in $\text{Sn}$ along the liquidus line until it reaches $61.9\text{ wt}\%\text{ Sn}$.
2. **At $183^\circ\text{C}$**: All remaining liquid freezes into the lamellar eutectic structure $(\alpha + \beta)$.
3. **Below $183^\circ\text{C}$**: The resulting room-temperature microstructure contains two distinct **microconstituents**:
   * **Primary (Proeutectic) $\alpha'$**: Large rounded dendritic grains.
   * **Eutectic Mixture**: Lamellar colonies of fine alternating $\alpha$ and $\beta$ plates.

#### Calculating Microconstituent Fractions (Lever Rule Just Above $183^\circ\text{C}$)
To find the amount of primary $\alpha'$ microconstituent (rather than total $\alpha$ phase), apply the lever rule at $T = 183^\circ\text{C} + \Delta T$, where the phases in equilibrium are primary $\alpha'$ and liquid of eutectic composition $L(C_E)$:

$$W_{\alpha'} = \frac{C_E - C_0}{C_E - C_\alpha} = \frac{61.9 - C_0}{61.9 - 18.3}$$

The mass fraction of the eutectic microconstituent is simply the fraction of liquid that transformed:

$$W_{\text{eutectic}} = 1 - W_{\alpha'} = \frac{C_0 - C_\alpha}{C_E - C_\alpha} = \frac{C_0 - 18.3}{61.9 - 18.3}$$

---

## 4. Classification of Invariant Three-Phase Reactions

An **invariant reaction** occurs at a unique temperature and composition ($F = 0$) where three phases coexist in equilibrium. The classical reactions are classified upon cooling:

| Reaction Name | Reaction Equation (Upon Cooling) | Key Feature | Classic Example |
| :--- | :--- | :--- | :--- |
| **Eutectic** | $\text{Liquid} \xrightarrow{\text{cool}} \text{Solid}_1 + \text{Solid}_2$ | Single liquid freezes into two distinct solids. | $\text{Pb-Sn}$ at $183^\circ\text{C}$ ($61.9\%\text{ Sn}$)<br>$\text{Fe-C}$ at $1147^\circ\text{C}$ ($4.3\%\text{ C}$) |
| **Eutectoid** | $\text{Solid}_1 \xrightarrow{\text{cool}} \text{Solid}_2 + \text{Solid}_3$ | Single solid decomposes into two distinct solids. | $\text{Fe-Fe}_3\text{C}$ at $727^\circ\text{C}$ ($0.76\%\text{ C}$) |
| **Peritectic** | $\text{Liquid} + \text{Solid}_1 \xrightarrow{\text{cool}} \text{Solid}_2$ | Liquid reacts with a solid to form a new single solid. | $\text{Fe-C}$ at $1493^\circ\text{C}$ ($0.16\%\text{ C}$) |
| **Peritectoid** | $\text{Solid}_1 + \text{Solid}_2 \xrightarrow{\text{cool}} \text{Solid}_3$ | Two distinct solids react to form a new single solid. | $\text{Cu-Sn}$ bronze system |
| **Monotectic** | $\text{Liquid}_1 \xrightarrow{\text{cool}} \text{Liquid}_2 + \text{Solid}_1$ | A liquid decomposes into a different liquid and a solid. | $\text{Cu-Pb}$ bearing alloys |

---

## 5. The Iron-Carbon ($\text{Fe-Fe}_3\text{C}$) Phase Diagram

The iron-carbon system forms the metallurgical bedrock of structural engineering. Steels contain between $0.02\text{ wt}\%\text{ C}$ and $2.14\text{ wt}\%\text{ C}$, while cast irons contain between $2.14\text{ wt}\%\text{ C}$ and $6.70\text{ wt}\%\text{ C}$.

```
  T (°C)
  1538°C ──┐
           │ δ
  1394°C ──┴──────┐
                  │                 Liquid (L)
                  │              .───────────────.
                  │  Austenite  /                 \
                  │     (γ)    / 1147°C  (Eutectic)\ 4.3% C
                  │           *─────────────────────*──── Cementite
                  │          /│                     │       (Fe3C)
   912°C ──┐      │         / │                     │       6.70% C
           │\     │        /  │                     │
    α      │ \    │       /   │                     │
  Ferrite  │  \   │      /    │                     │
  0.022% C └───*──┴─────*─────┴─────────────────────┴────────
   727°C       0.76% C  │
           (Eutectoid)  │  Ferrite (α) + Cementite (Fe3C)
                        │           [Pearlite]
           └────────────┴────────────────────────────────────► wt% C
           0% Fe        0.76% C           2.14% C            6.70% C
           <── Hypoeutectoid ──><── Hypereutectoid ──>
           <───────────── Steels ────────────><── Cast Irons ──>
```

### The Three Allotropes of Iron
1. **$\alpha$-Ferrite (BCC)**:
   * Stable from room temperature up to $912^\circ\text{C}$.
   * **Extremely low carbon solubility**: Maximum $0.022\text{ wt}\%\text{ C}$ at $727^\circ\text{C}$, dropping to $< 0.005\text{ wt}\%$ at room temperature!
   * Mechanical properties: Soft, ductile, ferromagnetic.
2. **$\gamma$-Austenite (FCC)**:
   * Stable from $912^\circ\text{C}$ to $1394^\circ\text{C}$.
   * **Substantially higher carbon solubility**: Maximum **$2.14\text{ wt}\%\text{ C}$** at $1147^\circ\text{C}$!
   * Mechanical properties: Non-magnetic, highly formable.
3. **$\delta$-Ferrite (BCC)**:
   * Stable at high temperatures ($1394^\circ\text{C}$ to melting point $1538^\circ\text{C}$).

> [!IMPORTANT]
> **Why Does Austenite (FCC) Dissolve $100\times$ More Carbon than Ferrite (BCC)?**
> * Although BCC has a lower atomic packing factor ($0.68$ vs $0.74$), its interstitial voids are fragmented into small, severely distorted sites ($r_{\text{site}} \approx 0.036\text{ nm}$). Inserting a carbon atom ($r_C \approx 0.071\text{ nm}$) causes severe tetragonal lattice strain.
> * In FCC austenite, the octahedral interstitial voids located at cube edge centers and body center are symmetrical and significantly larger ($r_{\text{site}} \approx 0.053\text{ nm}$), accommodating carbon with far lower strain energy!

### Cementite ($\text{Fe}_3\text{C}$)
* A metastable intermediate intermetallic compound containing exactly **$6.70\text{ wt}\%\text{ C}$** ($25\text{ at}\%\text{ C}$).
* Crystal structure: Orthorhombic.
* Properties: **Extremely hard and brittle**, providing the primary strengthening microconstituent in steels.

### The Invariant Eutectoid Reaction ($727^\circ\text{C}$, $0.76\text{ wt}\%\text{ C}$)
Upon slow cooling through $727^\circ\text{C}$, austenite of eutectoid composition transforms into **pearlite**:

$$\gamma(0.76\text{ wt}\%\text{ C}) \xrightleftharpoons[\text{heat}]{\text{cool}} \alpha(0.022\text{ wt}\%\text{ C}) + \text{Fe}_3\text{C}(6.70\text{ wt}\%\text{ C})$$

* **Pearlite** is NOT a single phase! It is a two-phase microconstituent consisting of alternating parallel lamellae of ductile $\alpha$-ferrite (approx. $88\text{ wt}\%$) and hard $\text{Fe}_3\text{C}$ cementite (approx. $12\text{ wt}\%$).

### Hypoeutectoid vs. Hypereutectoid Steels
* **Hypoeutectoid Steels ($C_0 < 0.76\text{ wt}\%\text{ C}$)**:
  * Slow cooling below the $A_3$ line produces **proeutectoid ferrite ($\alpha'$)** along austenite grain boundaries.
  * Below $727^\circ\text{C}$, the remaining austenite transforms into pearlite.
  * Final microstructure: **Proeutectoid ferrite + Pearlite**.
* **Hypereutectoid Steels ($0.76 < C_0 < 2.14\text{ wt}\%\text{ C}$)**:
  * Slow cooling below the $A_{cm}$ line produces a network of hard, brittle **proeutectoid cementite ($\text{Fe}_3\text{C}'$)** along grain boundaries.
  * Below $727^\circ\text{C}$, remaining austenite transforms into pearlite.
  * Final microstructure: **Proeutectoid cementite + Pearlite**.

---

## 6. Fully Solved Master Quantitative Archetypes

### Problem 1: Pb-Sn Lever Rule at 150°C in Two-Phase Solid Region (Slide 30)
**Problem Statement**:
An alloy of $40\text{ wt}\%\text{ Sn} - 60\text{ wt}\%\text{ Pb}$ ($C_0 = 40$) is cooled to $150^\circ\text{C}$. At $150^\circ\text{C}$, the tie line intersects the solid solubility curves at:
* $C_\alpha = 11\text{ wt}\%\text{ Sn}$
* $C_\beta = 99\text{ wt}\%\text{ Sn}$

Determine:
1. The phases present in equilibrium.
2. The chemical compositions of each phase.
3. The relative weight fractions ($W_\alpha$ and $W_\beta$).

#### Step-by-Step Solution:
**1. Phases Present**:
The state point ($T = 150^\circ\text{C}, C_0 = 40$) lies in the two-phase field: **$\alpha + \beta$**.

**2. Compositions of Phases**:
Read directly from the tie-line endpoints:
* **$C_\alpha = 11\text{ wt}\%\text{ Sn}$** ($89\text{ wt}\%\text{ Pb}$)
* **$C_\beta = 99\text{ wt}\%\text{ Sn}$** ($1\text{ wt}\%\text{ Pb}$)

**3. Weight Fractions (Inverse Lever Rule)**:
Total tie-line length:
$$L = C_\beta - C_\alpha = 99 - 11 = 88$$

Fraction of $\alpha$ (opposite right arm):
$$W_\alpha = \frac{C_\beta - C_0}{C_\beta - C_\alpha} = \frac{99 - 40}{99 - 11} = \frac{59}{88} \approx \mathbf{0.6705} \quad (\mathbf{67.0\text{ wt}\%})$$

Fraction of $\beta$ (opposite left arm):
$$W_\beta = \frac{C_0 - C_\alpha}{C_\beta - C_\alpha} = \frac{40 - 11}{99 - 11} = \frac{29}{88} \approx \mathbf{0.3295} \quad (\mathbf{33.0\text{ wt}\%})$$

Check: $67.0\% + 33.0\% = 100.0\%$. ✔

---

### Problem 2: Pb-Sn Lever Rule at 220°C in Solid + Liquid Region (Slide 31)
**Problem Statement**:
A $40\text{ wt}\%\text{ Sn} - 60\text{ wt}\%\text{ Pb}$ alloy is held at $220^\circ\text{C}$. At this temperature, the horizontal tie line intersects the solidus at $C_\alpha = 17\text{ wt}\%\text{ Sn}$ and the liquidus at $C_L = 46\text{ wt}\%\text{ Sn}$.
Calculate the weight fractions of solid $\alpha$ and liquid $L$.

#### Step-by-Step Solution:
Total tie-line length:
$$L = C_L - C_\alpha = 46 - 17 = 29$$

Weight fraction of liquid $W_L$:
$$W_L = \frac{C_0 - C_\alpha}{C_L - C_\alpha} = \frac{40 - 17}{46 - 17} = \frac{23}{29} \approx \mathbf{0.7931} \quad (\mathbf{79.3\text{ wt}\%})$$

Weight fraction of solid $\alpha$ $W_\alpha$:
$$W_\alpha = \frac{C_L - C_0}{C_L - C_\alpha} = \frac{46 - 40}{46 - 17} = \frac{6}{29} \approx \mathbf{0.2069} \quad (\mathbf{20.7\text{ wt}\%})$$

---

### Problem 3: Hypoeutectoid Steel Microconstituent Calculation (Slide 68)
**Problem Statement**:
A hypoeutectoid plain carbon steel containing $0.40\text{ wt}\%\text{ C}$ is slowly cooled to just below the eutectoid temperature ($727^\circ\text{C}$).
Given: $C_\alpha = 0.022\text{ wt}\%\text{ C}$, $C_{\text{eutectoid}} = 0.76\text{ wt}\%\text{ C}$, and $C_{\text{cementite}} = 6.70\text{ wt}\%\text{ C}$.
1. Calculate the weight fractions of **proeutectoid ferrite ($\alpha'$)** and **pearlite ($p$)**.
2. Calculate the **total weight fraction of ferrite ($\alpha$)** in the steel.

#### Step-by-Step Solution:
**Part 1: Proeutectoid Ferrite vs. Pearlite Fractions**
Apply the lever rule just above $727^\circ\text{C}$ between $\alpha$ ($0.022\%\text{ C}$) and austenite of eutectoid composition $\gamma$ ($0.76\%\text{ C}$):
$$W_{\alpha'} = \frac{C_{\text{eutectoid}} - C_0}{C_{\text{eutectoid}} - C_\alpha} = \frac{0.76 - 0.40}{0.76 - 0.022} = \frac{0.360}{0.738} \approx \mathbf{0.4878} \quad (\mathbf{48.8\%})$$

The pearlite fraction equals the fraction of austenite that transforms:
$$W_p = W_\gamma = 1 - W_{\alpha'} = \frac{0.40 - 0.022}{0.738} = \frac{0.378}{0.738} \approx \mathbf{0.5122} \quad (\mathbf{51.2\%})$$

**Part 2: Total Ferrite Phase Fraction**
Apply the lever rule across the entire phase diagram between $\alpha$ ($0.022\%\text{ C}$) and cementite ($6.70\%\text{ C}$):
$$W_{\alpha,\text{total}} = \frac{C_{\text{cementite}} - C_0}{C_{\text{cementite}} - C_\alpha} = \frac{6.70 - 0.40}{6.70 - 0.022} = \frac{6.30}{6.678} \approx \mathbf{0.9434} \quad (\mathbf{94.3\%})$$

Notice the crucial difference: Total ferrite is **$94.3\%$**, but proeutectoid ferrite is only **$48.8\%$**. The remaining $45.5\%$ of ferrite is packaged inside the pearlite lamellae!

---

## 7. Exam Pitfalls & High-Yield Summary Table

| Concept | Governing Formula | Key Mechanism | Common Exam Pitfall |
| :--- | :--- | :--- | :--- |
| **Phase Composition** | Endpoints of tie line | Horizontal line across two-phase region. | Confusing phase composition ($C_L$) with phase fraction ($W_L$). |
| **Inverse Lever Rule** | $W_A = \frac{\text{Opposite Arm}}{\text{Total Length}}$ | Proportional to opposite segment. | Using adjacent segment instead of opposite arm! |
| **Condensed Phase Rule** | $P + F = C + 1$ | Fixed 1 atm pressure consumes one variable. | Using $C+2$ (standard gas rule) instead of $C+1$. |
| **Eutectic Reaction** | $L \to \alpha + \beta$ | Liquid freezes into two distinct solid phases. | Confusing eutectic ($L \to 2\text{ solids}$) with eutectoid. |
| **Eutectoid Reaction** | $\gamma \to \alpha + \text{Fe}_3\text{C}$ | Solid decomposes into two distinct solid phases. | Calling pearlite a single phase (it is a two-phase mixture). |
| **Carbon Solubility** | Austenite ($2.14\%$) vs Ferrite ($0.022\%$) | FCC octahedral voids are larger and symmetric. | Believing lower APF of BCC means larger interstitial holes. |
| **Proeutectoid vs Total** | Lever rule at $0.76\%$ vs $6.70\%$ | Proeutectoid forms above $727^\circ\text{C}$; pearlite forms at $727^\circ\text{C}$. | Conflating proeutectoid ferrite ($\alpha'$) with total ferrite ($\alpha$). |
