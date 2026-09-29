# MIAE 221 · Rapid Review Sheet · Part 1
## Atomic Structure, Periodic Trends & Stoichiometry

---

### 1. Materials Classes Spectrum
* **Metals**: Non-directional metallic bonds ("sea of electrons"). High ductility, high thermal/electrical conductivity, opaque, moderate-to-high stiffness.
* **Ceramics**: Ionic/covalent bonds. High hardness, extreme melting points, electrical/thermal insulators, **very brittle** (cleave along charge planes).
* **Polymers**: Covalent hydrocarbon backbones held together by weak secondary bonds. Low density, flexible, low melting points, ductile/viscoelastic.
* **Composites**: Engineered combination of matrix + reinforcement (e.g. CFRP). High strength-to-weight ratio.

---

### 2. Quantum Mechanics & Orbitals
* **Principal ($n$)**: $n = 1, 2, 3\dots$ Main energy level and orbital size. Max electrons per shell $= 2n^2$.
* **Azimuthal ($l$)**: $l = 0\dots(n-1)$. Subshell geometry ($0 \to s, 1 \to p, 2 \to d, 3 \to f$).
* **Magnetic ($m_l$)**: $m_l = -l\dots+l$. Spatial orientation ($2l+1$ orbitals per subshell).
* **Spin ($m_s$)**: $m_s = \pm 1/2$. Intrinsic electron spin direction ($\uparrow\downarrow$).
* **Aufbau Principle**: $1s \to 2s \to 2p \to 3s \to 3p \to 4s \to 3d \to 4p \to 5s \to 4d\dots$ ($4s$ fills before $3d$!).
* **Pauli Exclusion**: No two electrons share all 4 quantum numbers $\implies \le 2\text{ electrons per orbital}$.
* **Hund's Rule**: Degenerate orbitals fill with parallel spins singly before pairing up.

---

### 3. Periodic Families & Electronegativity Trends
| Family | Outer Config | Valence | Chemical Tendency |
| :--- | :---: | :---: | :--- |
| **Inert Gas (Group 0)** | $s^2 p^6$ | 8 | Closed stable shell; chemically inert; high ionization energy. |
| **Halogens (Group VIIA)** | $s^2 p^5$ | 7 | Needs $1\text{ }e^-$; forms $-1$ anions ($F^-, Cl^-$); high electronegativity. |
| **Alkali Metals (Group IA)** | $s^1$ | 1 | Loses $1\text{ }e^-$; forms $+1$ cations ($Na^+, K^+$); low electronegativity. |
| **Alkaline Earth (Group IIA)** | $s^2$ | 2 | Loses $2\text{ }e^-$; forms $+2$ cations ($Mg^{2+}, Ca^{2+}$); reactive metal. |
| **Transition Metals** | $(n-1)d^{1-10}ns^2$ | Var | Incomplete inner $d$-orbitals; metallic bonds; multiple valences. |

* **Atomic Radius**: Decreases left-to-right ($\rightarrow$), increases top-to-bottom ($\downarrow$).
* **Electronegativity ($X$)**: Increases left-to-right ($\rightarrow$), decreases top-to-bottom ($\downarrow$). ($F = 4.0, Cs = 0.7$).

---

### 4. Quantitative Stoichiometry & Atom Count Formulas
$$\text{Moles: } n_{mol} = \frac{m}{A} = \frac{\rho \cdot V}{A} \qquad \text{Atoms: } N = n_{mol} \cdot N_A = \frac{\rho \cdot V \cdot N_A}{A}$$
* $N_A = 6.022 \times 10^{23}\text{ atoms/mol}$ | $1\text{ nm} = 10^{-7}\text{ cm} = 10^{-9}\text{ m}$ | $V_{cyl} = \frac{\pi}{4} d^2 L$

---

### 5. Interatomic Forces & Energy Derivations
* **Net Energy**: $E_N(r) = E_A(r) + E_R(r) = -\frac{A}{r} + \frac{B}{r^n}$ ($A$: attractive, $B$: repulsive, $n \approx 8 - 12$).
* **Net Force**: $F_N(r) = -\frac{dE_N}{dr} = -\frac{A}{r^2} + \frac{nB}{r^{n+1}} = F_A + F_R$.
* **Equilibrium Condition ($r_0$)**: $F_N(r_0) = 0 \iff \left.\frac{dE_N}{dr}\right|_{r_0} = 0 \implies \mathbf{r_0 = \left( \frac{nB}{A} \right)^{\frac{1}{n-1}}}$.
* **Bonding Energy ($E_0$)**: $E_0 = E_N(r_0) = -\frac{A}{r_0}\left(1 - \frac{1}{n}\right) = -\frac{A(n-1)}{n r_0}$.
