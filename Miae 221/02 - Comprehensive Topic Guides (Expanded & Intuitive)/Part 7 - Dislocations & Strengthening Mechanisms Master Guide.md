# MIAE 221: Materials Science for Engineers
# Part 7: Dislocations & Strengthening Mechanisms Master Guide

---

## Executive Overview & Core Engineering Principles

Why is pure copper so soft that it can be bent easily by hand, yet brass (copper alloyed with zinc) or cold-worked copper can form rigid structural pipes and resilient mechanical springs? Why does blacksmithing, hammer forging, or rolling sheet metal increase its strength?

In crystalline solids:
> **Plastic deformation occurs through the motion (slip) of microscopic linear defects known as dislocations.**

Therefore, the fundamental strategy to strengthen any crystalline metal is deceptively simple in concept, yet profound in physical application:
> **To make a metal stronger, you must impede, hinder, and pin the movement of dislocations!**

This comprehensive master guide covers:
1. **Dislocation Mechanics**: Edge, screw, and mixed dislocations; Burgers vector ($\mathbf{b}$) orientation; dislocation glide planes; and localized elastic lattice strain fields.
2. **Slip Systems**: Close-packed crystallographic planes and directions. Complete architectural comparison of **FCC** ($\{111\}\langle 110 \rangle$, 12 systems), **BCC** ($\{110\}\langle 111 \rangle$, 48 systems), and **HCP** ($\{0001\}\langle 11\bar{2}0 \rangle$, 3 systems), explaining ductility vs. brittleness and the Taylor / Von Mises criterion.
3. **Slip in Single Crystals & Schmid's Law**: Resolved shear stress ($\tau_R = \sigma \cos\phi \cos\lambda$), Critical Resolved Shear Stress ($\tau_{\text{crss}}$), and the maximum Schmid factor ($m = 0.5$).
4. **The Four Foundational Strengthening Mechanisms**:
   - **Grain Size Reduction**: Hall-Petch equation ($\sigma_y = \sigma_0 + k_y d^{-1/2}$) and grain boundary dislocation pile-ups.
   - **Solid Solution Strengthening**: Solute atom size misfit ($\Delta r$), lattice strain fields, and dislocation pinning.
   - **Strain Hardening (Cold Work)**: Dislocation multiplication ($\rho_d: 10^6 \to 10^{10}\text{ cm}^{-2}$), tangling, Frank-Read sources, and percent cold work ($\%CW$).
   - **Precipitation Hardening**: Orowan bowing vs. particle cutting.
5. **Annealing of Deformed Metals**: The three fundamental stages of thermal restoration: **Recovery**, **Recrystallization** ($T_R \approx 0.3 - 0.4\,T_m$), and **Grain Growth**.
6. **Fully Solved Quantitative Archetypes**: Step-by-step mathematical calculations.

---

## 1. Dislocation Mechanics & Lattice Strain Fields

A dislocation is a linear (one-dimensional) crystalline defect around which lattice atoms are misaligned. Plastic deformation in metals occurs through the progressive movement of dislocations along slip planes, requiring significantly lower shear stresses (typically $10^{-4}$ to $10^{-3}\,G$) than theoretical rigid body cleavage across an entire atomic plane simultaneously.

```
       Extra half-plane of atoms
              │
              ▼
    ●───●───●───●───●───●
    │   │   │ │ │   │   │   <-- Compressive strain field (atoms squeezed)
    ●───●───●───●───●───●
    │   │   │ ┴ │   │   │   <-- Dislocation core (symbol ┴)
    ●───●───●───────●───●
    │   │   │       │   │   <-- Tensile strain field (atoms pulled apart)
    ●───●───●───●───●───●
```

### The Three Dislocation Archetypes

| Dislocation Type | Geometry & Atomic Arrangement | Burgers Vector ($\mathbf{b}$) vs. Dislocation Line ($\mathbf{t}$) | Motion Direction under Applied Shear Stress |
| :--- | :--- | :--- | :--- |
| **Edge Dislocation** ($\bot$ or $\top$) | Extra half-plane of atoms inserted into the lattice. Atoms above the slip plane are compressed; atoms below are stretched. | **Perpendicular**: $\mathbf{b} \perp \mathbf{t}$ | **Parallel** to the applied shear stress vector $\tau$. |
| **Screw Dislocation** ($\circlearrowleft$) | Formed by cutting partway through the crystal and shifting one half by one lattice spacing relative to the other (spiral ramp / helical path). | **Parallel**: $\mathbf{b} \parallel \mathbf{t}$ | **Perpendicular** to the applied shear stress vector $\tau$. |
| **Mixed Dislocation** | Most real dislocations exhibit curved line geometry, transitioning continuously between pure edge character and pure screw character. | **At an angle $\theta$** ($0^\circ < \theta < 90^\circ$): $\mathbf{b} \cdot \mathbf{t} = b \cos\theta$. | Net macroscopic slip is still in the direction of the Burgers vector $\mathbf{b}$. |

### Elastic Strain Fields Around Dislocation Cores
Because atoms near dislocation cores are displaced from their equilibrium positions, localized elastic stress fields surround them:
1. **Edge Dislocation**:
   * Region **above** the slip plane (where the extra half-plane resides): Atoms are squeezed together $\implies$ **Hydrostatic Compression** ($\sigma_{xx} < 0, \sigma_{yy} < 0$).
   * Region **below** the slip plane: Atoms are pulled apart $\implies$ **Hydrostatic Tension** ($\sigma_{xx} > 0, \sigma_{yy} > 0$).
2. **Screw Dislocation**:
   * Pure shear strain fields with zero hydrostatic volume change.

These localized strain fields interact elastically with solute impurity atoms and neighboring dislocations, forming the thermodynamic foundation for solid-solution and work-hardening mechanisms.

---

## 2. Slip Systems in Crystalline Metals

Dislocations do not glide randomly through a crystal lattice; they move preferentially along specific crystallographic planes and in specific directions that minimize the energy barrier to glide.

A **Slip System** is defined as the combination of a **Slip Plane** and a **Slip Direction**:
* **Slip Plane**: The plane of **highest planar atomic density** (closest-packed plane), which has the widest interplanar spacing ($d_{hkl}$), minimizing the Peierls-Nabarro friction stress.
* **Slip Direction**: The direction on that plane having the **highest linear atomic density** (closest-packed direction), corresponding to the shortest Burgers vector magnitude ($|\mathbf{b}|$).

### Architectural Comparison: FCC vs. BCC vs. HCP

| Crystal Structure | Slip Plane Family | Slip Direction Family | Number of Slip Systems | Ductility & Mechanical Characteristics |
| :--- | :--- | :--- | :--- | :--- |
| **FCC**<br>(Cu, Al, Ni, Au, Ag, $\gamma$-Fe) | $\{111\}$<br>(4 distinct planes) | $\langle 110 \rangle$<br>(3 directions per plane) | **12**<br>($4 \times 3 = 12$) | **Exceptional Ductility at All Temperatures**: 12 close-packed systems satisfy the Von Mises criterion ($> 5$). No ductile-to-brittle transition; stays tough at cryogenic temps! |
| **BCC**<br>(W, Mo, V, Cr, $\alpha$-Fe) | $\{110\}$ (12)<br>$\{112\}$ (12)<br>$\{123\}$ (24) | $\langle 111 \rangle$<br>(2 directions per plane) | **48**<br>($12 + 12 + 24 = 48$) | **High Strength, Temperature-Sensitive**: No true close-packed planes; high Peierls barrier at cold temperatures leads to a dramatic **Ductile-to-Brittle Transition Temperature (DBTT)**. |
| **HCP**<br>(Zn, Mg, Cd, Ti) | $\{0001\}$ (Basal)<br>(1 plane) | $\langle 11\bar{2}0 \rangle$<br>(3 directions per plane) | **3**<br>($1 \times 3 = 3$) | **Low Ductility (Relatively Brittle)**: At room temperature, only 3 basal slip systems operate (fewer than the required 5 independent systems). Prone to twinning and cleavage. |

> [!IMPORTANT]
> **Von Mises Criterion**: For a polycrystalline aggregate to undergo uniform, arbitrary plastic deformation without grain boundary cracking, each grain must possess at least **5 independent slip systems**.
> * FCC easily satisfies this ($\ge 5$), explaining why copper and aluminum can be hammered, rolled, and drawn into extremely thin foils and wires.
> * HCP has only 3 active slip systems at room temperature ($< 5$), rendering zinc and magnesium comparatively brittle unless heated to activate non-basal pyramidal slip!

---

## 3. Slip in Single Crystals & Schmid's Law

Even when a tensile specimen is pulled under pure uniaxial normal stress ($\sigma = F/A_0$), dislocations within individual grains experience shear stresses along their inclined slip planes.

```
       Tensile Axis (Load F)
              ▲
              │
          ┌───┼───┐
          │   │   │  Slip Plane Normal (n)
          │   │  /        ^
          │   │ / φ      /
          │   │/________/
          │   /        /
          │  / λ      /
          │ /________/  Slip Direction (s)
          │   │   │
          └───┼───┘
              │
              ▼
       Tensile Axis (Load F)
```

### Mathematical Derivation of Schmid's Law
Consider a cylindrical single crystal with cross-sectional area $A_0$ loaded with tensile force $F$:
1. Let $\phi$ be the angle between the normal to the slip plane ($\mathbf{n}$) and the tensile loading axis.
2. Let $\lambda$ be the angle between the slip direction ($\mathbf{s}$) and the tensile loading axis.
3. The component of the applied force projected parallel to the slip direction is:
   $$F_s = F \cos \lambda$$
4. The area of the inclined slip plane is geometrically enlarged:
   $$A_s = \frac{A_0}{\cos \phi}$$
5. The **Resolved Shear Stress ($\tau_R$)** acting on the slip system is the projected force divided by the inclined slip plane area:

$$\tau_R = \frac{F_s}{A_s} = \frac{F \cos \lambda}{\dfrac{A_0}{\cos \phi}} = \left(\frac{F}{A_0}\right) \cos \phi \cos \lambda = \sigma \cdot m$$

Where:
* $m = \cos \phi \cos \lambda$ is defined as the **Schmid Factor**.
* Since the angle between the normal $\mathbf{n}$ and the direction $\mathbf{s}$ on the same plane is $90^\circ$, the sum of angles satisfies $\phi + \lambda \ge 90^\circ$.

### Critical Resolved Shear Stress ($\tau_{\text{crss}}$)
Plastic deformation (yielding) initiates when the resolved shear stress on the most favorably oriented slip system reaches a material-specific threshold: the **Critical Resolved Shear Stress ($\tau_{\text{crss}}$)**:

$$\tau_R = \tau_{\text{crss}} \implies \sigma_y = \frac{\tau_{\text{crss}}}{\cos \phi \cos \lambda} = \frac{\tau_{\text{crss}}}{m}$$

### Maximum Schmid Factor ($m_{\max}$)
To minimize the required external tensile yield stress $\sigma_y$, the Schmid factor must be maximized:
* Maximum value occurs when $\phi = \lambda = 45^\circ$:
  $$m_{\max} = \cos 45^\circ \cdot \cos 45^\circ = \left(\frac{1}{\sqrt2}\right)\left(\frac{1}{\sqrt2}\right) = \mathbf{0.50}$$
* Therefore, the absolute minimum applied tensile stress required to produce slip is:
  $$\sigma_{y,\min} = \frac{\tau_{\text{crss}}}{0.50} = 2\,\tau_{\text{crss}}$$
* If $\phi = 90^\circ$ (tensile axis in the slip plane) or $\lambda = 90^\circ$ (tensile axis perpendicular to the slip direction), $m = 0 \implies \tau_R = 0$, meaning no slip can occur on that system regardless of the applied load!

---

## 4. The Four Foundational Strengthening Mechanisms

To increase the yield strength $\sigma_y$ and hardness of a metallic material, we must create barriers that impede dislocation motion. The four classic mechanisms are:

---

### Mechanism 1: Grain Size Reduction (Hall-Petch Strengthening)

In a polycrystal, individual grains are separated by **grain boundaries**—narrow zones of atomic misalignment ($2-3$ atom diameters wide).

```
  Grain A (Orientation 1)       Grain B (Orientation 2)
  ══════════════════════════╦══════════════════════════
  Slip plane: \ \ \ \ \     ║   Slip plane: / / / / /
                            ║
      ●──●──●──●──●──●──> ║ [Dislocation Pile-up]
        Dislocation line    ║
  ══════════════════════════╩══════════════════════════
                      Grain Boundary
```

Grain boundaries serve as formidable barriers to slip for two reasons:
1. **Crystallographic Misorientation**: When a dislocation reaches a boundary, it cannot glide straight across into the neighboring grain because the slip planes and directions in Grain B do not align with those in Grain A. It must abruptly change direction, requiring substantial additional stress.
2. **Disordered Boundary Zone**: The atomic disorder at the grain boundary creates an absence of regular slip planes.

When dislocations are blocked, they pile up behind the boundary. The stress concentration at the head of the pile-up eventually triggers new dislocation sources in the adjacent grain. Finer grains produce shorter pile-ups, requiring a higher external stress to activate slip across the boundary!

#### The Hall-Petch Equation

$$\sigma_y = \sigma_0 + k_y \cdot d^{-1/2}$$

Where:
* $\sigma_y$ = Yield strength of the polycrystal.
* $\sigma_0$ = Friction stress (yield strength of a single crystal / lattice friction).
* $k_y$ = Hall-Petch strengthening coefficient (material constant measuring boundary resistance).
* $d$ = Average grain diameter ($\text{m}$ or $\text{mm}$).

> [!TIP]
> **The Unique Superpower of Grain Refinement**: Grain size reduction is the **ONLY strengthening mechanism** in metallurgy that simultaneously **increases yield strength AND increases toughness/ductility**! All other mechanisms (cold working, alloying, precipitation) increase strength at the cost of reduced ductility.

---

### Mechanism 2: Solid Solution Strengthening

Alloying high-purity metals with solute atoms (e.g. adding $\text{Zn}$ to $\text{Cu}$ to make brass, or adding $\text{C}$ to $\text{Fe}$ to make steel) produces a substantial increase in strength and hardness.

#### Physical Mechanism: Lattice Misfit Strain Interaction
Because solute atoms differ in atomic radius from solvent atoms:
1. **Substitutional Solute Smaller than Solvent**: Surrounding host atoms collapse slightly inward, producing a localized **tensile strain field**.
2. **Substitutional Solute Larger than Solvent**: Host atoms are pushed outward, creating a localized **compressive strain field**.

```
                Compressive Core Strain
                         ▼
        ●───●───●───●───●───●
        │   │   │ │ │   │   │
        ●───●───●───●───●───●
        │   │   │ ┴ │   │   │  <-- Edge Dislocation Core
        ●───●───●───────●───●
        │   │   │   o   │   │  <-- Smaller Solute Atom (Tensile Field)
        ●───●───●───●───●───●          (Diffuses to compressive core to cancel strain!)
```

* The compressive strain field of a large solute atom naturally migrates to the **tensile region** below an edge dislocation, canceling part of the lattice strain energy!
* Similarly, smaller solute atoms settle in the **compressive region** above the dislocation.
* This mutual strain relief locks (pins) the dislocation in a thermodynamic energy well. To move the dislocation, an increased external shear stress must be applied to tear it away from the solute atmosphere.

---

### Mechanism 3: Strain Hardening (Cold Work)

**Strain hardening** (also called **work hardening** or **cold work**) is the phenomenon whereby a ductile metal becomes stronger and harder as it is plastically deformed at temperatures below its recrystallization temperature (typically at room temperature).

#### Quantitative Metric: Percent Cold Work ($\%CW$)
Cold work is quantified by the percentage reduction in cross-sectional area:

$$\%CW = \left(\frac{A_0 - A_d}{A_0}\right) \times 100\%$$

Where:
* $A_0$ = Original cross-sectional area prior to deformation.
* $A_d$ = Deformed cross-sectional area after cold rolling, drawing, or swaging.

#### Dislocation Multiplication Mechanism
Why does deforming a metal make it harder?
1. In an annealed (undeformed) metal crystal, the dislocation density is relatively low: $\rho_d \approx 10^5 - 10^6\text{ cm/cm}^3$.
2. As the metal is rolled or forged, existing dislocations glide and interact with crystal defects, generating massive numbers of new dislocations via **Frank-Read sources**.
3. In a heavily cold-worked metal, dislocation density skyrockets by 4 to 5 orders of magnitude:
   $$\rho_d \approx 10^9 - 10^{10}\text{ cm/cm}^3 \quad (\approx 10,000\text{ km of dislocation lines per }\text{cm}^3!)$$
4. As dislocation density increases, the average spacing between dislocations shrinks drastically. Dislocation stress fields mutually intersect and entangle, forming dense, impenetrable tangles, sessile jogs, and cellular sub-boundaries.
5. Because dislocations mutually obstruct one another's motion, the shear stress required to produce further slip rises steadily according to the **Taylor equation**:

$$\tau_y = \tau_0 + \alpha \cdot G \cdot b \cdot \sqrt{\rho_d}$$

* Macroscopic consequence: **Yield strength $\sigma_y$ increases**, **Tensile strength UTS increases**, **Hardness increases**, but **Ductility ($\%EL$) decreases drastically** (the material becomes work-exhausted).

---

### Mechanism 4: Precipitation Hardening (Dispersion Strengthening)

In aerospace alloys (e.g. 2000 and 7000 series aluminum), extremely high strength is achieved by heat treating (solutionizing, quenching, and artificial aging) to precipitate billions of nanoscale, hard second-phase particles (e.g. $\text{CuAl}_2$ or $\text{MgZn}_2$) uniformly throughout the matrix.

Dislocations encounter these precipitate particles as obstacles:
1. **Particle Cutting (Shearing)**: When precipitates are very small and coherent, the dislocation cuts directly through the particle, creating new interfacial surface energy.
2. **Orowan Bowing (Looping)**: When precipitates are larger and incoherent, dislocations cannot cut through them. The dislocation line bows between the particles until the loops pinch off, leaving a residual dislocation loop around each particle:
   $$\tau_{\text{Orowan}} \approx \frac{G \cdot b}{L}$$
   Where $L$ is the interparticle spacing. Finer particle dispersions (smaller $L$) yield vastly higher strength!

---

## 5. Annealing of Cold-Worked Metals

When a metal is heavily cold-worked, approximately $95\%$ of the mechanical work input is dissipated as heat, while the remaining $5\%$ is stored internally as **elastic strain energy** associated with the massive tangle of dislocations.

This stored strain energy leaves the metal in a thermodynamically metastable, high-energy state. If the cold-worked metal is heated (annealed), atomic diffusion accelerates, allowing the material to revert to its low-energy, ductile state.

Annealing proceeds through three distinct, consecutive stages:

```
Strength / Hardness
  ▲
  │  Cold-Worked
  │  ─────────┐ [Recovery]
  │           │
  │           └───────────┐ [Recrystallization]
  │                       │
  │                       └──────────────► [Grain Growth]
  └───────────────────────────────────────► Annealing Temperature (T)
```

### Stage 1: Recovery ($T \lesssim 0.3\,T_m$)
* **Physical Process**: Enhanced thermal vibrations allow vacancies and atoms to diffuse over short distances. Dislocations rearrange themselves, annihilating opposite-sign pairs and polygonizing into organized low-energy, low-angle subgrain boundaries.
* **Property Changes**:
  * Residual internal stresses are significantly relieved.
  * Electrical and thermal conductivities are restored to nearly annealed levels.
  * **Microstructure and mechanical strength remain essentially unchanged** (no new grains form).

### Stage 2: Recrystallization ($T_R \approx 0.3 - 0.4\,T_m$ in Kelvin)
* **Physical Process**: Driven by the massive stored strain energy of cold work, a completely new set of **strain-free, equiaxed grains** nucleate and grow rapidly, consuming the deformed, high-dislocation cold-worked grains.
* **Property Changes**:
  * Dislocation density drops dramatically back to $\sim 10^5 - 10^6\text{ cm}^{-2}$.
  * **Yield strength and tensile strength drop sharply**.
  * **Ductility is fully restored** to pre-cold-work levels!
* **The Recrystallization Temperature ($T_R$)**: The temperature at which recrystallization reaches completion in exactly 1 hour.
  * For pure metals: $T_R \approx 0.3 - 0.4\,T_m$.
  * Higher $\%CW$ prior to annealing provides a greater driving force, lowering $T_R$ and refining the recrystallized grain size!

### Stage 3: Grain Growth ($T \gg T_R$)
* **Physical Process**: After recrystallization is complete, the strain-free grains continue to coarsen if held at elevated temperatures. Larger grains grow at the expense of smaller grains to minimize the total grain boundary surface area (reducing total interfacial energy).
* **Kinetic Law**: The average grain diameter $d$ grows with annealing time $t$ according to:
  $$d^n - d_0^n = K \cdot t$$
  Where $n \approx 2$ and $K$ follows an Arrhenius temperature dependence ($K = K_0 \exp[-Q/RT]$).

---

## 6. Fully Solved Quantitative Archetypes

### Problem 1: Schmid's Law & Yield Stress in a Single Crystal
**Problem Statement**:
A single crystal of an FCC metal is loaded in uniaxial tension along its $[001]$ axis. Slip occurs on the $(111)$ plane along the $[10\bar{1}]$ slip direction. The critical resolved shear stress is $\tau_{\text{crss}} = 0.80\text{ MPa}$.
1. Calculate the angle $\phi$ between the tensile axis $[001]$ and the slip plane normal $[111]$.
2. Calculate the angle $\lambda$ between the tensile axis $[001]$ and the slip direction $[10\bar{1}]$.
3. Determine the Schmid factor $m$.
4. Calculate the applied tensile stress $\sigma_y$ required to initiate plastic deformation.

#### Step-by-Step Solution:
**Step 1: Calculate $\cos \phi$**
Using the vector dot product formula $\cos \theta = \dfrac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}| |\mathbf{v}|}$:
* Tensile axis $\mathbf{u} = [001]$: $|\mathbf{u}| = \sqrt{0^2 + 0^2 + 1^2} = 1$.
* Slip plane normal $\mathbf{v} = [111]$: $|\mathbf{v}| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}$.
$$\cos \phi = \frac{(0)(1) + (0)(1) + (1)(1)}{(1)(\sqrt{3})} = \frac{1}{\sqrt{3}} \approx 0.5774 \implies \phi \approx 54.74^\circ$$

**Step 2: Calculate $\cos \lambda$**
* Tensile axis $\mathbf{u} = [001]$: $|\mathbf{u}| = 1$.
* Slip direction $\mathbf{w} = [10\bar{1}]$: $|\mathbf{w}| = \sqrt{1^2 + 0^2 + (-1)^2} = \sqrt{2}$.
$$\cos \lambda = \frac{(0)(1) + (0)(0) + (1)(-1)}{(1)(\sqrt{2})} = \frac{-1}{\sqrt{2}}$$
Taking the acute angle magnitude:
$$\cos \lambda = \frac{1}{\sqrt{2}} \approx 0.7071 \implies \lambda = 45^\circ$$

**Step 3: Calculate the Schmid Factor ($m$)**
$$m = \cos \phi \cdot \cos \lambda = \left(\frac{1}{\sqrt{3}}\right)\left(\frac{1}{\sqrt{2}}\right) = \frac{1}{\sqrt{6}} \approx \mathbf{0.4082}$$

**Step 4: Compute Tensile Yield Stress ($\sigma_y$)**
$$\sigma_y = \frac{\tau_{\text{crss}}}{m} = \frac{0.80\text{ MPa}}{0.4082} = \mathbf{1.96\text{ MPa}}$$

---

### Problem 2: Hall-Petch Grain Size Scaling Calculation
**Problem Statement**:
A brass alloy has an average grain diameter $d_1 = 100\ \mu\text{m}$ ($0.100\text{ mm}$) and exhibits a yield strength $\sigma_{y1} = 120\text{ MPa}$. When severe plastically deformed and recrystallized to $d_2 = 25\ \mu\text{m}$ ($0.025\text{ mm}$), the yield strength increases to $\sigma_{y2} = 180\text{ MPa}$.
1. Determine the Hall-Petch constants $\sigma_0$ and $k_y$.
2. Predict the yield strength if the grain size is further refined to $d_3 = 4\ \mu\text{m}$.

#### Step-by-Step Solution:
**Step 1: Convert grain diameters to $d^{-1/2}$ in $\text{mm}^{-1/2}$**
* $d_1 = 0.100\text{ mm} \implies d_1^{-1/2} = (0.100)^{-1/2} = \frac{1}{\sqrt{0.1}} \approx 3.1623\text{ mm}^{-1/2}$
* $d_2 = 0.025\text{ mm} \implies d_2^{-1/2} = (0.025)^{-1/2} = \frac{1}{\sqrt{0.025}} \approx 6.3246\text{ mm}^{-1/2}$

**Step 2: Set up system of linear equations**
$$\sigma_{y1} = \sigma_0 + k_y(3.1623) = 120\text{ MPa}$$
$$\sigma_{y2} = \sigma_0 + k_y(6.3246) = 180\text{ MPa}$$

Subtracting the first equation from the second:
$$k_y(6.3246 - 3.1623) = 180 - 120$$
$$k_y(3.1623) = 60 \implies k_y = \frac{60}{3.1623} = \mathbf{18.97\text{ MPa}\cdot\text{mm}^{1/2}}$$

Solving for $\sigma_0$:
$$\sigma_0 = 120 - (18.97)(3.1623) = 120 - 60 = \mathbf{60.0\text{ MPa}}$$

**Step 3: Predict $\sigma_y$ at $d_3 = 4\ \mu\text{m} = 0.004\text{ mm}$**
$$d_3^{-1/2} = (0.004)^{-1/2} = \frac{1}{\sqrt{0.004}} \approx 15.8114\text{ mm}^{-1/2}$$
$$\sigma_{y3} = \sigma_0 + k_y \cdot d_3^{-1/2} = 60.0 + (18.97)(15.8114) = 60.0 + 300.0 = \mathbf{360.0\text{ MPa}}$$

---

### Problem 3: Cold Work Reduction in Rod Drawing
**Problem Statement**:
A cylindrical copper rod originally having a diameter $d_0 = 15.0\text{ mm}$ is cold drawn through a die to a final diameter $d_d = 12.0\text{ mm}$. Calculate the percent cold work ($\%CW$).

#### Step-by-Step Solution:
$$\%CW = \left(\frac{A_0 - A_d}{A_0}\right) \times 100\% = \left(1 - \frac{d_d^2}{d_0^2}\right) \times 100\%$$
$$\%CW = \left(1 - \frac{12.0^2}{15.0^2}\right) \times 100\% = \left(1 - \frac{144}{225}\right) \times 100\% = (1 - 0.64) \times 100\% = \mathbf{36.0\%}$$

---

## 7. Exam Pitfalls & High-Yield Summary Table

| Concept | Governing Equation | Key Rule / Mechanism | Common Exam Pitfall |
| :--- | :--- | :--- | :--- |
| **Schmid's Law** | $\tau_R = \sigma \cos \phi \cos \lambda$ | Slip occurs when $\tau_R \ge \tau_{\text{crss}}$. Max $m = 0.5$ at $45^\circ$. | Confusing slip plane angle with slip direction angle. |
| **FCC Slip Systems** | $\{111\}\langle 110 \rangle$ (12) | 4 planes $\times$ 3 directions = 12 systems. High ductility. | Forgetting FCC has 12 systems, not 4. |
| **BCC Slip Systems** | $\{110\}\langle 111 \rangle$ (48) | 48 systems, but lacks close-packed planes; prone to DBTT. | Believing 48 systems guarantees cryogenic ductility. |
| **HCP Slip Systems** | $\{0001\}\langle 11\bar{2}0 \rangle$ (3) | Only 3 basal systems at room temperature; brittle. | Failing the 5 independent systems Von Mises rule. |
| **Hall-Petch** | $\sigma_y = \sigma_0 + k_y d^{-1/2}$ | Finer grains block dislocations. Increases strength AND ductility! | Forgetting the square root power (scaling with $d^{-1/2}$). |
| **Solid Solution** | Solute size misfit $\Delta r$ | Solute strain fields pin dislocation cores. | Assuming chemical bonding changes; it is elastic strain! |
| **Cold Work ($\%CW$)** | $\%CW = (1 - d_d^2/d_0^2) \times 100\%$ | Dislocation multiplication from $10^6$ to $10^{10}\text{ cm}^{-2}$. | Calculating linear diameter reduction instead of area! |
| **Recovery** | $T < T_R$ | Stress relief, polygonization; NO new grains form. | Confusing recovery with recrystallization. |
| **Recrystallization** | $T_R \approx 0.3-0.4\,T_m$ | New strain-free equiaxed grains form; ductility restored. | Calling it phase change (crystal structure is identical). |
