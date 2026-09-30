# MIAE 221: Materials Science for Engineers
## Chapter 2: Atomic Structure and Interatomic Bonding (Expanded & Condensed Guide)
### Concordia University · Gina Cody School of Engineering
**Textbook**: *Materials Science and Engineering: An Introduction* (10th Ed., Callister & Rethwisch)  
**Instructor**: Dr. Mamoun Medraj, P.Eng | **Curriculum Alignment**: Concordia University

---

*(Aligned with Dr. Medraj Lectures 2 & 3 · Weeks 1–2)*

### 1. 🎯 30-Second Core Intuition & Plain-English Concept
Why do solid materials not collapse into nothingness or fly apart into space? Because atoms operate under a constant energetic balance between **electrostatic attraction** (pulling oppositely charged electrons and nuclei together) and **Pauli repulsion** (electron clouds resisting overlap). 

Solid materials settle at the exact separation distance ($r_0$) where the net interatomic force is **zero** and the net potential energy is at a **minimum**.

*Real-World Analogy*: Two billiard balls connected by a stiff spring. If you pull them apart, tension pulls them back (attractive force). If you shove them into each other, the spring fiercely pushes back (repulsive force). At rest, they sit at the equilibrium spring length ($r_0$).

### 2. ⚙️ High-Yield Mathematical Engine & Essential Laws

#### 1. Quantum Numbers & Shell Capacities
* $n$ (Principal): Shell energy level ($n = 1, 2, 3, 4, \dots$).
* $l$ (Azimuthal / Subshell): Orbit shape ($l = 0$ ($s$), $1$ ($p$), $2$ ($d$), $3$ ($f$); $0 \le l \le n-1$).
* $m_l$ (Magnetic): Spatial orientation ($-l \le m_l \le +l$; $2l+1$ orbitals per subshell).
* $m_s$ (Spin): Electron spin ($+1/2, -1/2$).
* *Total electrons per shell*: $2n^2$.

#### 2. Net Potential Energy and Interatomic Force
$$E_N(r) = E_A(r) + E_R(r) = -\frac{A}{r^m} + \frac{B}{r^n} \quad (m=1 \text{ for simple ions}, n \approx 8-12)$$
$$F_N(r) = -\frac{dE_N}{dr} = -\frac{mA}{r^{m+1}} + \frac{nB}{r^{n+1}}$$

#### 3. Equilibrium Conditions at $r = r_0$
$$F_N(r_0) = 0 \iff F_A(r_0) = -F_R(r_0)$$
$$\left.\frac{dE_N}{dr}\right|_{r=r_0} = 0 \implies r_0 = \left( \frac{nB}{mA} \right)^{\frac{1}{n-m}}$$
$$E_0 = E_N(r_0) = -\frac{A}{r_0}\left(1 - \frac{1}{n}\right) \quad (\text{for } m=1)$$

#### 4. Pauling's Percent Ionic Character
$$\% \text{ Ionic Character} = \left[ 1 - \exp\left( -0.25 (X_A - X_B)^2 \right) \right] \times 100\%$$
Where $X_A, X_B$ are the Pauling electronegativities of the two elements.

### 3. 🖼️ Textbook Reference Diagram & Visual Pedagogical Analysis

![Callister Figure 2.10 - Interatomic Force and Potential Energy Curves](./images/callister_fig_2_10_force_energy_curves.png)
*Figure 2.10: (a) Net interatomic force $F_N$ vs. separation distance $r$. (b) Net potential energy $E_N$ vs. separation distance $r$, displaying the equilibrium bonding well.*

#### In-Depth Visual Breakdown:
1. **Force Curve (Top Plot)**:
   * As $r \to \infty$, forces approach zero.
   * At large $r$, attractive force $F_A$ dominates (negative slope region).
   * At $r = r_0$, the net force curve crosses the horizontal axis: $F_N(r_0) = 0$.
   * For $r < r_0$, the curve shoots rapidly into positive territory (repulsive force dominates sharply due to overlapping closed electron shells).
2. **Potential Energy Well (Bottom Plot)**:
   * The trough of the curve defines the **Bonding Energy ($E_0$)** and **Equilibrium Spacing ($r_0$)**.
   * **Physical Property Links**:
     * **Melting Point ($T_m$)**: Proportional to the depth of the well ($|E_0|$). Deeper well = higher thermal energy required to break bonds = high $T_m$ (e.g., Diamond, Tungsten).
     * **Elastic Modulus ($E$)**: Proportional to the curvature at the bottom of the well (second derivative $\left.\frac{d^2E}{dr^2}\right|_{r_0}$). Steeper curvature = stiffer spring = high Young's modulus.
     * **Thermal Expansion Coefficient ($\alpha_l$)**: Governed by the **asymmetry (anharmonicity)** of the well. As temperature rises, atoms oscillate; because the repulsive side is steeper than the attractive side, the mean interatomic distance shifts outward ($r_T > r_0$). Highly symmetric wells exhibit near-zero thermal expansion.

### 4. ⚖️ Teacher Notes Cross-Reference & Concordia Exam Traps
* **Dr. Medraj Focus (Lectures 2 & 3)**:
  * Emphasizes the mathematical derivation connecting Coulomb's law ($F_A = \frac{|z_1 z_2| e^2}{4\pi \varepsilon_0 r^2}$) with repulsive power laws.
  * Practice Problem Set #1 contains exact calculation questions for $K^+ - Cl^-$ ion pairs and gold wire atomic counts.
* **Concordia Exam Traps**:
  * **Transition Metal Ionization Trap**: When writing electron configurations for cations (e.g., $Fe^{2+}$), electrons are always removed from the outermost valence shell **first**:
    $$Fe: [Ar] 4s^2 3d^6 \implies Fe^{2+}: [Ar] 3d^6 \quad (\text{NOT } [Ar] 4s^2 3d^4!)$$
  * **Force vs. Energy Derivative Sign**: Remember that $F = -\frac{dE}{dr}$. In many physics texts, $F = +\frac{dE}{dr}$ depending on sign conventions. In Callister and Dr. Medraj's slides, attractive force is negative, repulsive is positive, and equilibrium occurs at the zero-crossing.

### 5. 💡 Master Exam Problem & Step-by-Step Solution Framework
**Problem (Practice Problem Set #1 Archetype)**:
*Two isolated ions $K^+$ and $Cl^-$ experience an attractive potential energy $E_A = -\frac{1.436}{r}\text{ eV}$ and a repulsive potential energy $E_R = \frac{7.32 \times 10^{-6}}{r^8}\text{ eV}$ (where $r$ is in nm). Calculate: (a) Equilibrium interatomic separation $r_0$, and (b) Bonding energy $E_0$.*

* **Step 1: Formulate Net Potential Energy**
  $$E_N(r) = -1.436 r^{-1} + 7.32 \times 10^{-6} r^{-8}$$
* **Step 2: Differentiate with Respect to $r$ and Set to Zero**
  $$\frac{dE_N}{dr} = \frac{1.436}{r^2} - 8 \times \frac{7.32 \times 10^{-6}}{r^9} = 0$$
* **Step 3: Solve for Equilibrium Separation $r_0$**
  $$\frac{1.436}{r_0^2} = \frac{5.856 \times 10^{-5}}{r_0^9} \implies r_0^7 = \frac{5.856 \times 10^{-5}}{1.436} = 4.078 \times 10^{-5}\text{ nm}^7$$
  $$r_0 = (4.078 \times 10^{-5})^{1/7} = 0.236\text{ nm}$$
* **Step 4: Compute Bonding Energy $E_0 = E_N(r_0)$**
  $$E_0 = -\frac{1.436}{0.236} + \frac{7.32 \times 10^{-6}}{(0.236)^8} = -6.085\text{ eV} + 0.761\text{ eV} = -5.324\text{ eV}$$
  $$\text{Bonding energy magnitude } |E_0| = 5.32\text{ eV}$$

---
