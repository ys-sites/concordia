# Chapter 18, 19 & 21: Electrical, Thermal & Optical Properties of Materials
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Materials Science (MIAE 221)  
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Edition) by William D. Callister, Jr. & David G. Rethwisch — Chapters 18, 19 & 21

---

## 1. Executive Overview & First-Principles Philosophy

In previous chapters, we focused primarily on how materials respond to mechanical forces (stress, strain, dislocation slip). In modern high-technology engineering, materials must simultaneously fulfill critical **functional roles**:
* A microelectronic processor relies on millions of transistors operating at gigahertz switching speeds governed by **electronic bandgaps and semiconductor charge carrier mobilities**.
* A spacecraft thermal protection tile (e.g., Space Shuttle silica tiles) must withstand $1200^\circ\text{C}$ re-entry plasma while keeping the underlying aluminum fuselage cold, governed by **thermal conductivity, thermal expansion, and thermal shock resistance**.
* Optical fiber communications transmit terabits of data per second across oceans via laser pulses through ultra-pure silica glass, governed by **refractive indices, photon absorption bandgaps, and Rayleigh scattering**.

All of these physical phenomena are direct manifestations of **electronic energy band structures and quantized atomic vibrations (phonons)**.

---

## 2. Electrical Properties: Band Theory & Semiconductors (Callister Chapter 18)

### 2.1 Ohm's Law & Electrical Conductivity
The macroscopic electrical resistance $R$ of a conductor of length $l$ and uniform cross-sectional area $A$ is described by Ohm's Law:
$$V = I R \iff R = \frac{V}{I}$$
Because resistance depends on specimen geometry, materials engineers normalize by dimensions to define intrinsic **Electrical Resistivity ($\rho$)**:
$$\rho = \frac{R A}{l} \quad [\Omega\cdot\text{m}]$$
The inverse of resistivity is **Electrical Conductivity ($\sigma$)**:
$$\sigma = \frac{1}{\rho} = \frac{l}{R A} \quad [(\Omega\cdot\text{m})^{-1} \text{ or } \text{S/m}]$$
At the microscopic scale:
$$J = \sigma \mathcal{E}$$
where $J = I/A$ is current density ($\text{A/m}^2$) and $\mathcal{E} = V/l$ is electric field intensity ($\text{V/m}$).

#### The Microscopic Charge Carrier Equation:
Electrical conduction occurs via the drift of charged particles under an applied electric field:
$$\sigma = n |q| \mu_e$$
where:
* $n$ = number of free charge carriers per unit volume ($\text{m}^{-3}$).
* $q$ = carrier charge (for electrons, $e = 1.602 \times 10^{-19}\text{ C}$).
* $\mu_e$ = **carrier mobility** ($\text{m}^2/(\text{V}\cdot\text{s})$), defined as drift velocity per unit electric field: $v_d = \mu_e \mathcal{E}$.

---

### 2.2 Electron Energy Band Structures in Solids

In isolated atoms, electrons occupy discrete atomic quantum energy levels ($1s, 2s, 2p, \dots$). When $N$ atoms assemble into a solid crystal, the Pauli Exclusion Principle splits each atomic energy level into $N$ closely spaced, overlapping quantum states, forming continuous **Electron Energy Bands**:
* **Valence Band**: The highest occupied energy band filled with valence electrons at $0\text{ K}$.
* **Conduction Band**: The lowest unoccupied (or partially filled) energy band into which electrons can be promoted to move freely under an electric field.
* **Fermi Energy ($E_F$)**: The highest energy state occupied by electrons at absolute zero temperature ($0\text{ K}$).
* **Bandgap ($E_g$)**: An energetically forbidden gap of energy states separating the top of the valence band from the bottom of the conduction band.

![Callister Figure 18.4 - The Four Electron Energy Band Configurations](./images/callister_fig_18_4_energy_band_structures.png)
*Figure 18.4: Schematic representations of the four primary electron energy band structures: (a) Partially filled conduction band (Metals like Cu, Na), (b) Overlapping valence and conduction bands (Metals like Mg, Zn), (c) Wide bandgap Insulator ($E_g > 2\text{ eV}$), and (d) Narrow bandgap Semiconductor ($E_g < 2\text{ eV}$) — from Callister & Rethwisch 10th Ed. (Fig. 18.4).*

#### The Four Classification Regimes:
1. **Metals (Conductors)** ($\sigma \approx 10^7\ (\Omega\cdot\text{m})^{-1}$):
   * Possess either a **partially filled band** (Fig. 18.4a) or **overlapping valence and conduction bands** (Fig. 18.4b).
   * The Fermi level $E_F$ lies inside a continuous band. Countless vacant energy states exist immediately adjacent to $E_F$. Electrons need almost zero thermal energy to jump into empty states and conduct electricity.
2. **Insulators** ($\sigma \approx 10^{-20} - 10^{-10}\ (\Omega\cdot\text{m})^{-1}$):
   * Possess a completely filled valence band, a completely empty conduction band, and a **wide bandgap ($E_g > 2.0\text{ eV}$)** (e.g., Diamond $E_g = 5.5\text{ eV}$, Alumina $E_g = 9.0\text{ eV}$).
   * At room temperature, thermal kinetic energy ($k_B T \approx 0.026\text{ eV}$) is orders of magnitude smaller than $E_g$. Essentially zero electrons are promoted to the conduction band $\implies$ electrical conductivity is negligible.
3. **Semiconductors** ($\sigma \approx 10^{-6} - 10^4\ (\Omega\cdot\text{m})^{-1}$):
   * Possess a **narrow bandgap ($E_g < 2.0\text{ eV}$)** (e.g., Silicon $E_g = 1.1\text{ eV}$, Germanium $E_g = 0.67\text{ eV}$).
   * Modest thermal energy promotes a small but significant number of electrons across $E_g$ into the conduction band.

---

### 2.3 Intrinsic vs. Extrinsic Semiconductors

#### A. Intrinsic (Pure) Semiconductors
In an ultra-pure semiconductor (e.g., pure Silicon), electrical conduction relies solely on thermally excited charge carriers:
* When an electron jumps across $E_g$ into the conduction band, it leaves behind an empty electron state in the valence band—a positively charged entity called a **Hole ($h^\bullet$)**.
* Both electrons ($n$) and holes ($p$) drift under an applied electric field, contributing to total conductivity:
  $$\sigma = n |e| \mu_e + p |e| \mu_h$$
* In intrinsic material, electrons and holes are created in identical pairs:
  $$n = p = n_i$$
  $$\sigma = n_i |e| (\mu_e + \mu_h)$$
* **Temperature Dependence**: Intrinsic carrier concentration obeys an exponential Arrhenius relation:
  $$n_i \propto \exp\left( -\frac{E_g}{2 k_B T} \right)$$
* 🌟 **Crucial Contrast with Metals**:
  * In **metals**, increasing temperature increases lattice vibrations (phonons), which scatter electrons and **decrease conductivity** ($\sigma$ drops as $T$ rises).
  * In **intrinsic semiconductors**, increasing temperature exponentially multiplies the number of free carriers ($n_i$), causing **conductivity to surge exponentially** as temperature rises!

---

#### B. Extrinsic (Doped) Semiconductors
Commercial semiconductor devices are doped by intentionally introducing tiny concentrations (parts-per-million) of specific impurity atoms:

```
                            Extrinsic Semiconductors
                                       │
     ┌─────────────────────────────────┴─────────────────────────────────┐
     ▼                                                                   ▼
n-TYPE SEMICONDUCTOR                                            p-TYPE SEMICONDUCTOR
• Doped with Group V donor elements (P, As, Sb in Si)           • Doped with Group III acceptor elements (B, Al, Ga in Si)
• 5 valence electrons: 4 form covalent bonds, 1 is extra        • 3 valence electrons: 1 bond is missing an electron
• Donor energy level E_d sits just below conduction band (~0.05 eV)• Acceptor level E_a sits just above valence band (~0.05 eV)
• Donates conduction electrons: n ≫ p                           • Captures electrons, creating excess holes: p ≫ n
• Majority carriers: ELECTRONS                                  • Majority carriers: HOLES
• σ ≈ n |e| μ_e ≈ N_d |e| μ_e                                   • σ ≈ p |e| μ_h ≈ N_a |e| μ_h
```

#### C. The Three Temperature Regimes of Extrinsic Semiconductors:
1. **Freeze-Out Regime ($T < 100\text{ K}$)**: Thermal energy is too low to ionize dopant atoms ($k_B T < 0.05\text{ eV}$). Carriers remain trapped on impurity atoms; conductivity is low.
2. **Extrinsic / Saturation Regime ($100\text{ K} < T < 450\text{ K}$ — Normal Operating Window)**:
   * Thermal energy is sufficient to ionize virtually **all donor or acceptor atoms**:
     $$n \approx N_d \quad (\text{for } n\text{-type}) \qquad \text{or} \qquad p \approx N_a \quad (\text{for } p\text{-type})$$
   * Carrier concentration remains constant. In this regime, conductivity decreases slightly as temperature rises because increased lattice phonon vibrations reduce electron mobility ($\mu \propto T^{-3/2}$).
3. **Intrinsic Regime ($T > 450\text{ K}$)**:
   * Thermal excitation of electron-hole pairs across the full bandgap ($E_g = 1.1\text{ eV}$) completely overwhelms the dopant concentration ($n_i \gg N_d$).
   * The semiconductor loses its extrinsic $n$-type or $p$-type character and behaves as an intrinsic semiconductor, causing integrated circuit transistors to short-circuit and fail!

---

## 3. Thermal Properties of Materials (Callister Chapter 19)

### 3.1 Heat Capacity ($C_v, C_p$) & Phonons
**Heat capacity** represents a material's ability to absorb thermal energy from its surroundings:
$$C = \frac{dQ}{dT}$$
* At the atomic scale, thermal energy is stored primarily as **atomic lattice vibrations**. In a solid crystal, vibrations are coupled into traveling elastic waves called **Phonons** (quantized vibrational waves traveling at the speed of sound).
* **The Debye Temperature ($\theta_D$)**:
  * At cryogenic temperatures ($T < \theta_D$), heat capacity increases rapidly with the cube of temperature:
    $$C_v \propto T^3 \quad (\text{Debye } T^3 \text{ Law})$$
  * At temperatures well above $\theta_D$, heat capacity levels off to the constant classical **Dulong-Petit limit**:
    $$C_v \approx 3R \approx 3(8.314) \approx 25\text{ J/(mol}\cdot\text{K)}$$

---

### 3.2 Thermal Expansion & Potential Energy Well Asymmetry
When a solid is heated, its linear dimensions expand proportionally:
$$\frac{\Delta l}{l_0} = \alpha_l \Delta T \iff \Delta l = \alpha_l l_0 (T_f - T_0)$$
where $\alpha_l$ is the **Linear Coefficient of Thermal Expansion ($\text{K}^{-1}$ or $^\circ\text{C}^{-1}$)**.

![Callister Figure 19.3 - Origin of Thermal Expansion in Potential Energy Well](./images/callister_fig_19_3_thermal_expansion_well.png)
*Figure 19.3: Physical origin of thermal expansion: (a) Symmetric potential energy well yields zero net thermal expansion, whereas (b) Real asymmetric (anharmonic) potential energy well causes the average atomic separation distance to shift outward ($\bar{r}_T > r_0$) as thermal energy rises — from Callister & Rethwisch 10th Ed. (Fig. 19.3).*

* **Deep, narrow wells** (Diamond, Alumina, Tungsten) have high bonding energies, high symmetry, and very low thermal expansion ($\alpha_l \approx 1 - 8 \times 10^{-6}\text{ K}^{-1}$).
* **Shallow, wide wells** (Polymers) are highly asymmetric, yielding massive thermal expansion ($\alpha_l \approx 50 - 200 \times 10^{-6}\text{ K}^{-1}$).

---

### 3.3 Thermal Conductivity ($k$) & The Wiedemann-Franz Law
Thermal conduction is the transport of heat from high-temperature to low-temperature regions:
$$q = -k \frac{dT}{dx}$$
where $q$ is heat flux ($\text{W/m}^2$) and $k$ is **Thermal Conductivity ($\text{W/(m}\cdot\text{K)}$)**.

Heat is transported through solids via **two concurrent mechanisms**:
$$k = k_e + k_l$$
1. **Electronic Thermal Conduction ($k_e$)**: Carried by the kinetic energy of highly mobile free conduction electrons.
2. **Lattice Vibration Conduction ($k_l$)**: Carried by traveling phonon waves.

* **In Metals**: Free electrons are abundant $\implies k_e \gg k_l$. Electrons conduct heat and electricity via the exact same physical particles!
  * **The Wiedemann-Franz Law**: For pure metals, the ratio of thermal conductivity to electrical conductivity is directly proportional to absolute temperature:
    $$\frac{k}{\sigma T} = L \approx 2.44 \times 10^{-8} \ \Omega\cdot\text{W/K}^2 \quad (\text{Lorentz Number } L)$$
* **In Ceramics & Polymers**: Essentially zero free electrons exist $\implies k_e = 0$. Heat is conducted **purely by phonons ($k = k_l$)**. Because phonons scatter heavily at grain boundaries, voids, and disordered polymer chains, nonmetals generally exhibit low thermal conductivities ($k \approx 0.1 - 2\text{ W/(m}\cdot\text{K)}$).
  * *The Diamond Exception*: Pure single-crystal diamond has no grain boundaries and exceptionally stiff covalent bonds, yielding the highest thermal conductivity of any known bulk solid ($k \approx 2000\text{ W/(m}\cdot\text{K)}$) purely through ultra-fast phonon transport!

---

### 3.4 Thermal Stresses & Thermal Shock Resistance (TSR)
When a material is heated or cooled while mechanically constrained from expanding or contracting, **thermal stresses ($\sigma_{\text{thermal}}$)** develop:
$$\sigma = -E \alpha_l \Delta T$$
If the material is cooled rapidly ($\Delta T < 0$), tensile stresses develop on the surface. In brittle ceramics with low fracture toughness, these thermal tensile stresses can cause catastrophic cracking and shattering—a failure mode termed **Thermal Shock**.

**The Thermal Shock Resistance (TSR)** parameter measures a brittle material's ability to endure rapid temperature changes without fracture:
$$\text{TSR} \cong \frac{\sigma_f k}{E \alpha_l}$$
To maximize thermal shock resistance, an engineer must select a material with:
* High fracture strength ($\sigma_f$)
* High thermal conductivity ($k$) (rapidly dissipates temperature gradients)
* Low Young's modulus ($E$) (flexible, compliant)
* **Very low thermal expansion coefficient ($\alpha_l$)** (minimizes thermal strain!)
* *Engineering Example*: Why does borosilicate Pyrex glass endure oven-to-sink thermal shocks while ordinary soda-lime window glass shatters? Because Pyrex has an exceptionally low thermal expansion coefficient ($\alpha_{\text{Pyrex}} = 3.3 \times 10^{-6}\text{ K}^{-1}$ vs. $\alpha_{\text{soda-lime}} = 9.0 \times 10^{-6}\text{ K}^{-1}$), giving it roughly **three times higher TSR**!

---

## 4. Optical Properties of Materials (Callister Chapter 21)

When electromagnetic radiation (light) strikes a solid, the incident light intensity $I_0$ is partitioned among three physical processes:
$$I_0 = I_R + I_A + I_T \implies R + A + T = 1$$
where $R = I_R/I_0$ is **reflectivity**, $A = I_A/I_0$ is **absorptivity**, and $T = I_T/I_0$ is **transmissivity**.

```
                             Optical Material Classes
                                        │
     ┌──────────────────────────────────┼──────────────────────────────────┐
     ▼                                  ▼                                  ▼
TRANSPARENT                        TRANSLUCENT                         OPAQUE
Light transmits through with       Light transmits diffusely           Light is completely absorbed
minimal scattering. Objects        with internal scattering. Objects   and/or reflected. Zero light
clearly visible (e.g., Glass)      blurred (e.g., Frosted glass)       transmits (e.g., Metals)
```

---

### 4.1 Optical Properties of Metals: High Reflectivity & Opacity
* Metals are completely **opaque** across the entire visible spectrum ($0.4\ \mu\text{m} \le \lambda \le 0.7\ \mu\text{m}$) within a skin depth of only a few nanometers.
* *Physical Mechanism*: Because metals have continuous empty electron energy states immediately above the Fermi level, valence electrons absorb incident visible photons of all wavelengths ($h\nu$). The excited electrons immediately re-radiate electromagnetic waves of the identical frequency in the backward direction as **reflected light**, giving polished metals their characteristic shiny metallic luster ($R \approx 90 - 95\%$).

---

### 4.2 Optical Properties of Nonmetals: The Bandgap Criterion

In non-metallic materials (ceramics and polymers), optical absorption occurs via **interband electron transitions**: an incident photon can be absorbed only if its energy $E = h\nu$ is sufficient to excite an electron from the valence band across the bandgap into the conduction band:
$$h\nu \ge E_g$$

![Callister Figure 21.4 - Optical Absorption by Electron Bandgap Excitation](./images/callister_fig_21_4_optical_absorption_bandgap.png)
*Figure 21.4: Mechanism of optical absorption in nonmetallic solids: (a) An incident photon with energy $h\nu \ge E_g$ excites an electron across the bandgap. (b) If $h\nu < E_g$, the photon cannot be absorbed and passes through uninhibited — from Callister & Rethwisch 10th Ed. (Fig. 21.4).*

#### Mathematical Relationship Between Wavelength and Energy:
Photon energy is related to wavelength $\lambda$ by:
$$E = h\nu = \frac{h c}{\lambda}$$
where $h = 6.626 \times 10^{-34}\text{ J}\cdot\text{s} = 4.136 \times 10^{-15}\text{ eV}\cdot\text{s}$, $c = 3.0 \times 10^8\text{ m/s}$.
In practical engineering units:
$$E(\text{eV}) = \frac{1.24}{\lambda\ (\mu\text{m})} \iff \lambda(\mu\text{m}) = \frac{1.24}{E(\text{eV})}$$

The visible light spectrum spans photon energies from:
* Red edge ($\lambda = 0.7\ \mu\text{m}$): $E_{\min} \approx \frac{1.24}{0.7} \approx 1.8\text{ eV}$
* Violet edge ($\lambda = 0.4\ \mu\text{m}$): $E_{\max} \approx \frac{1.24}{0.4} \approx 3.1\text{ eV}$

#### The 3 Optical Regimes for Nonmetals:
1. **Wide Bandgap Insulators ($E_g > 3.1\text{ eV}$)**:
   * Visible photons ($1.8 - 3.1\text{ eV}$) have **insufficient energy to excite electrons across $E_g$**.
   * Photons pass through the solid without being absorbed!
   * *Conclusion*: Material is **completely transparent and colorless** (e.g., Diamond $E_g = 5.5\text{ eV}$, Quartz glass $E_g = 9.0\text{ eV}$, Sodium chloride $E_g = 7.3\text{ eV}$).
2. **Narrow Bandgap Semiconductors ($E_g < 1.8\text{ eV}$)**:
   * Every visible photon has energy $h\nu > E_g$.
   * **All visible light is absorbed** within a thin surface layer!
   * *Conclusion*: Material is **completely opaque** and appears black or dark metallic grey (e.g., Silicon $E_g = 1.1\text{ eV}$, Gallium arsenide $E_g = 1.4\text{ eV}$).
3. **Intermediate Bandgap Materials ($1.8\text{ eV} \le E_g \le 3.1\text{ eV}$)**:
   * The material absorbs higher-energy (shorter wavelength) visible photons (violet, blue, green), but transmits lower-energy (longer wavelength) photons (yellow, red).
   * *Conclusion*: Material is **colored and translucent/transparent**!
   * *Example*: Cadmium Sulfide ($\text{CdS}$) has $E_g = 2.42\text{ eV}$ ($\lambda_{\text{cutoff}} = 1.24 / 2.42 = 0.51\ \mu\text{m}$). It absorbs blue and violet light ($\lambda < 0.51\ \mu\text{m}$) and transmits yellow and red ($\lambda > 0.51\ \mu\text{m}$), giving $\text{CdS}$ crystals a brilliant, vivid **yellow-orange color**!

---

## 5. Comprehensive Step-by-Step Problem Walkthroughs

### 5.1 Problem 1: Electrical Conductivity of Extrinsic n-Type Silicon

**Problem Statement**: An n-type silicon semiconductor is doped with Phosphorus (P) at an impurity concentration of $N_d = 1.0 \times 10^{17}\text{ atoms/cm}^3 = 1.0 \times 10^{23}\text{ atoms/m}^3$ at room temperature ($300\text{ K}$).
Given:
* Pure intrinsic silicon carrier concentration at $300\text{ K}$: $n_i = 1.5 \times 10^{10}\text{ cm}^{-3} = 1.5 \times 10^{16}\text{ m}^{-3}$.
* Electron mobility: $\mu_e = 0.135\text{ m}^2/(\text{V}\cdot\text{s})$.
* Hole mobility: $\mu_h = 0.048\text{ m}^2/(\text{V}\cdot\text{s})$.
* Electron charge: $e = 1.602 \times 10^{-19}\text{ C}$.
1. Compute the electrical conductivity of **pure intrinsic silicon**.
2. Compute the electrical conductivity of the **doped n-type silicon**.
3. Determine the factor by which doping increased the electrical conductivity.

#### Step 1: Calculate Conductivity of Pure Intrinsic Silicon
$$\sigma_{\text{intrinsic}} = n_i |e| (\mu_e + \mu_h)$$
$$\sigma_{\text{intrinsic}} = (1.5 \times 10^{16}\text{ m}^{-3}) \times (1.602 \times 10^{-19}\text{ C}) \times (0.135 + 0.048\text{ m}^2/(\text{V}\cdot\text{s}))$$
$$\sigma_{\text{intrinsic}} = (2.403 \times 10^{-3}) \times (0.183) = 4.40 \times 10^{-4}\ (\Omega\cdot\text{m})^{-1}$$

#### Step 2: Calculate Conductivity of Doped n-Type Silicon
At room temperature ($300\text{ K}$), all phosphorus donor atoms are completely ionized in the extrinsic regime:
$$n \approx N_d = 1.0 \times 10^{23}\text{ electrons/m}^3$$
Notice that $n = 10^{23}$ is seven orders of magnitude greater than $n_i = 10^{16}$; hole conduction is completely negligible.
$$\sigma_{n\text{-type}} \approx n |e| \mu_e = (1.0 \times 10^{23}\text{ m}^{-3}) \times (1.602 \times 10^{-19}\text{ C}) \times (0.135\text{ m}^2/(\text{V}\cdot\text{s}))$$
$$\sigma_{n\text{-type}} = 16,020 \times 0.135 = 2,163\ (\Omega\cdot\text{m})^{-1} \approx 2.16 \times 10^3\ (\Omega\cdot\text{m})^{-1}$$

#### Step 3: Compute the Increase Factor
$$\text{Factor} = \frac{\sigma_{n\text{-type}}}{\sigma_{\text{intrinsic}}} = \frac{2,163\ (\Omega\cdot\text{m})^{-1}}{4.40 \times 10^{-4}\ (\Omega\cdot\text{m})^{-1}} = 4.92 \times 10^6 \approx 5,000,000\times$$
*Engineering Conclusion*: Doping silicon with merely **1 phosphorus atom per 500,000 silicon atoms** increased its electrical conductivity by **nearly 5 million times**!

---

### 5.2 Problem 2: Optical Bandgap Cutoff & Transparency Prediction

**Problem Statement**: Predict whether the following crystalline materials are optically transparent, colored, or opaque to visible light ($0.4\ \mu\text{m} \le \lambda \le 0.7\ \mu\text{m}$), and compute the cutoff absorption wavelength $\lambda_{\text{cutoff}}$ (in $\mu\text{m}$) for each:
1. Gallium Phosphide ($\text{GaP}$, $E_g = 2.26\text{ eV}$)
2. Zinc Selenide ($\text{ZnSe}$, $E_g = 2.70\text{ eV}$)
3. Silicon ($\text{Si}$, $E_g = 1.12\text{ eV}$)
4. Diamond ($\text{C}$, $E_g = 5.50\text{ eV}$)

#### Calculation Protocol:
$$\lambda_{\text{cutoff}} = \frac{1.24}{E_g\ (\text{eV})}$$

1. **Gallium Phosphide ($\text{GaP}$, $E_g = 2.26\text{ eV}$)**:
   $$\lambda_{\text{cutoff}} = \frac{1.24}{2.26} = 0.549\ \mu\text{m} = 549\text{ nm}$$
   *Analysis*: Photons with $\lambda < 0.549\ \mu\text{m}$ (violet, blue, cyan) are absorbed; photons with $\lambda > 0.549\ \mu\text{m}$ (yellow, orange, red) are transmitted.
   *Appearance*: **Translucent / Transparent with a vivid Orange-Red color**.

2. **Zinc Selenide ($\text{ZnSe}$, $E_g = 2.70\text{ eV}$)**:
   $$\lambda_{\text{cutoff}} = \frac{1.24}{2.70} = 0.459\ \mu\text{m} = 459\text{ nm}$$
   *Analysis*: Absorbs violet and deep blue light ($\lambda < 459\text{ nm}$); transmits green, yellow, orange, and red.
   *Appearance*: **Transparent Yellow crystal**.

3. **Silicon ($\text{Si}$, $E_g = 1.12\text{ eV}$)**:
   $$\lambda_{\text{cutoff}} = \frac{1.24}{1.12} = 1.107\ \mu\text{m}$$
   *Analysis*: Cutoff wavelength is in the infrared. All visible photons ($\lambda \le 0.7\ \mu\text{m}$) have energies $h\nu > 1.12\text{ eV}$ and are completely absorbed.
   *Appearance*: **Completely Opaque** (dark grey metallic sheen).

4. **Diamond ($\text{C}$, $E_g = 5.50\text{ eV}$)**:
   $$\lambda_{\text{cutoff}} = \frac{1.24}{5.50} = 0.225\ \mu\text{m} = 225\text{ nm}$$
   *Analysis*: Cutoff is deep in the ultraviolet. No visible photons can excite electrons across $5.5\text{ eV}$.
   *Appearance*: **Completely Transparent and Colorless**.

---

## 6. Critical Concordia Exam Traps & Red Flags

* ⚠️ **Trap 1: Temperature Effect on Conductivity: Metals vs. Semiconductors**:
  * In **metals**, heating **decreases** conductivity ($\sigma \propto 1/T$) due to increased electron-phonon scattering.
  * In **intrinsic semiconductors**, heating **exponentially increases** conductivity ($\sigma \propto e^{-E_g/2kT}$) due to exponential carrier generation.
  Stating that conductivity increases with temperature for a copper wire is a guaranteed loss of marks!
* ⚠️ **Trap 2: The Wiedemann-Franz Law Applies ONLY to Metals**:
  $\frac{k}{\sigma T} = L$ is valid **only when free electrons conduct both heat and electricity**. It is completely invalid for ceramics and polymers, where heat is carried by phonons and electrical conductivity is zero!
* ⚠️ **Trap 3: Wavelength vs. Energy Inverse Relationship**:
  Remember: $\lambda = 1.24 / E_g$.
  Shorter wavelength means **higher photon energy**! Blue light has more energy than red light. A material that absorbs blue light has a larger bandgap than one that absorbs red light.
* ⚠️ **Trap 4: Thermal Shock Resistance Formula Terms**:
  In $\text{TSR} \cong \frac{\sigma_f k}{E \alpha_l}$, $E$ and $\alpha_l$ are in the **denominator**! Higher elastic modulus or higher thermal expansion **drastically lowers** thermal shock resistance.
