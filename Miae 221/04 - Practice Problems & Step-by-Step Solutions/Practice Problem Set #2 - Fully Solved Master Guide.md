# MIAE 221: Materials Science for Engineers
# Practice Problem Set #2: Fully Solved & Annotated Master Guide

*Tutorial 2 — Crystal Structures, Miller Indices, Densities & Defects (Fall 2026)*

> 📚 **How to use this guide:** Work each problem yourself first. After every question you will find a **Learn More** box pointing to the exact lecture slides and the Callister textbook expanded notes (with page numbers) where that concept is taught, so you can re-learn the theory behind any step you got wrong.

---

## Question 1: Unit Cell, Volume & Theoretical Density

### Problem Statement
Consider the unit cell of a metal shown below — atoms at the 8 corners and at the centre of each of the 6 faces.
* **(a)** Name the unit cell.
* **(b)** Derive an expression for the unit cell volume in terms of the atomic radius $R$.
* **(c)** Calculate the density of the material, given its atomic weight is $27\ \text{g/mol}$ and its atomic radius is $140\ \text{pm}$.

---

### Step-by-Step Solution

#### (a) Name of the Unit Cell
* Atoms sitting at the **8 corners** plus at the **centre of each of the 6 faces** define the **Face-Centered Cubic (FCC)** structure.
* Atoms per unit cell: corners are shared by 8 cells and face atoms by 2 cells:
$$n = 8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 1 + 3 = \mathbf{4\ atoms}$$

#### (b) Unit Cell Volume in Terms of $R$
* In FCC, neighbouring atoms **touch along the face diagonal** (corner → face-centre → corner), so the face diagonal contains $4R$:
$$a\sqrt{2} = 4R \quad\Longrightarrow\quad a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}\,R$$
* Volume of the cubic cell:
$$V_C = a^3 = \left(2\sqrt{2}\,R\right)^3 = \mathbf{16\sqrt{2}\,R^3}$$

#### (c) Theoretical Density
* Convert the radius: $R = 140\ \text{pm} = 1.40 \times 10^{-8}\ \text{cm}$
* Unit cell volume:
$$V_C = 16\sqrt{2}\,(1.40 \times 10^{-8})^3 = 6.209 \times 10^{-23}\ \text{cm}^3$$
* Theoretical density formula ($\rho = \dfrac{nA}{V_C N_A}$):
$$\rho = \frac{(4)(27)}{(6.209 \times 10^{-23})(6.022 \times 10^{23})} = \mathbf{2.89\ g/cm^3}$$
* **Sanity check:** $A \approx 27\ \text{g/mol}$ + FCC + $\rho \approx 2.7\text{–}2.9\ \text{g/cm}^3$ → this metal is **aluminium (Al)**.

---

### 📚 Learn More — Question 1
* **Teacher Lecture Notes:** *Lecture 4 — Crystal Structure 1*, **pp. 11–12** ("Face Centered Cubic Unit Cell" and "How many atoms per unit cell in the FCC structure?"). The density formula itself is worked as the "Example Problem" in *Lecture 5 — Crystal Structure 2*, **p. 8**.
* **Textbook (Expanded):** *Chapter 03 — Structure of Crystalline Solids & XRD (Expanded)*, **p. 2** (§2.2 — the FCC structure and atoms per cell) and **p. 8** (full worked example: unit cell edge length and density of an FCC metal).

---

## Question 2: Crystallographic Directions & Planes (Miller Indices)

### Problem Statement
* **(a)** Determine the indices for directions **A, B, C, D** in the cubic unit cell shown (fractional coordinates marked on the diagram).
* **(b)** Find the Miller indices for planes **A, B, C**.

---

### Step-by-Step Solution

#### Method for Directions $[uvw]$
$$\text{Direction} = \text{head coordinates} - \text{tail coordinates}$$
Then multiply through to clear fractions and reduce to the **smallest integers**, enclosed in square brackets $[ ]$. A negative component is written with a **bar** over the number.

#### (a) The Four Directions
* **Direction A:** tail $\left(\tfrac{2}{3}, 0, 1\right)$ → head $\left(\tfrac{1}{2}, 1, 1\right)$
$$\Delta = \left(\tfrac{1}{2} - \tfrac{2}{3},\ 1 - 0,\ 1 - 1\right) = \left(-\tfrac{1}{6},\ 1,\ 0\right) \xrightarrow{\times 6} \mathbf{[\bar{1}\ 6\ 0]}$$
* **Direction B:** tail $\left(\tfrac{1}{3}, 1, 0\right)$ → head $\left(1, 0, \tfrac{2}{3}\right)$
$$\Delta = \left(\tfrac{2}{3},\ -1,\ \tfrac{2}{3}\right) \xrightarrow{\times 3} \mathbf{[2\ \bar{3}\ 2]}$$
* **Direction C:** tail $\left(\tfrac{1}{3}, 1, 1\right)$ → head $\left(\tfrac{2}{3}, 0, 0\right)$
$$\Delta = \left(\tfrac{1}{3},\ -1,\ -1\right) \xrightarrow{\times 3} \mathbf{[1\ \bar{3}\ \bar{3}]}$$
* **Direction D:** tail $\left(\tfrac{1}{3}, 0, 1\right)$ → head $\left(\tfrac{1}{2}, \tfrac{1}{2}, 0\right)$
$$\Delta = \left(\tfrac{1}{6},\ \tfrac{1}{2},\ -1\right) \xrightarrow{\times 6} \mathbf{[1\ 3\ \bar{6}]}$$

#### Method for Planes $(hkl)$
1. Read the plane's **intercepts** on the $x$, $y$, $z$ axes (in units of the lattice parameters). A plane **parallel** to an axis intercepts it at $\infty$.
2. Take the **reciprocals** of the intercepts.
3. Clear fractions → smallest integers, enclosed in parentheses $( )$. *(If the plane passes through the origin, shift it parallel first.)*

#### (b) The Three Planes
* **Plane A:** intercepts $(1, \infty, -1)$ → reciprocals $(1, 0, -1)$ → $\mathbf{(1\ 0\ \bar{1})}$
* **Plane B:** intercepts $\left(\tfrac{1}{3}, \infty, 1\right)$ → reciprocals $(3, 0, 1)$ → $\mathbf{(3\ 0\ 1)}$
* **Plane C:** intercepts $\left(\infty, 1, \tfrac{1}{2}\right)$ → reciprocals $(0, 1, 2)$ → $\mathbf{(0\ 1\ 2)}$

---

### 📚 Learn More — Question 2
* **Teacher Lecture Notes:** *Lecture 5 — Crystal Structure 2*: directions method on **pp. 11–12** ("General Rules for Lattice Directions, Planes & Miller Indices", "Miller Indices for Directions"), worked example on **p. 13**; planes method on **pp. 18–20** ("Miller Indices for Planes").
* **Textbook (Expanded):** *Chapter 03 — Structure of Crystalline Solids & XRD (Expanded)*, **p. 5** (§3 — Crystallographic Directions & Planes: Miller Indices, Callister §3.8–§3.11, including the $[uvw]$ algorithm).

---

## Question 3: Linear & Planar Density

### Problem Statement
* **(a)** Derive the linear density for the $[111]$ direction of FCC in terms of $R$.
* **(b)** Derive the planar density of the BCC $(111)$ plane in terms of $R$.

---

### Step-by-Step Solution

$$\text{Linear Density (LD)} = \frac{\text{number of atoms centred on the direction vector}}{\text{length of the direction vector}} \qquad \text{Planar Density (PD)} = \frac{\text{number of atoms centred on the plane}}{\text{area of the plane}}$$

#### (a) $LD_{[111]}$ for FCC
* The $[111]$ direction is the **body diagonal**. In FCC it passes through only the **2 corner atoms** at its ends (no atom sits at the body centre), each contributing $\tfrac{1}{2}$:
$$\text{Atoms} = 2 \times \frac{1}{2} = 1\ \text{atom}$$
* Length of the body diagonal $= a\sqrt{3}$. For FCC, $a = 2\sqrt{2}\,R$:
$$\text{Length} = 2\sqrt{2}\,R \times \sqrt{3} = 2\sqrt{6}\,R$$
$$LD_{[111]} = \frac{1}{2\sqrt{6}\,R}\ \text{atoms per unit length}$$

#### (b) $PD_{(111)}$ for BCC
* The $(111)$ plane cuts **3 corners** of the cube. Each corner atom contributes only the sector lying inside the plane's triangle: a $60^\circ$ sector $= \tfrac{1}{6}$ of an atom:
$$\text{Atoms} = 3 \times \frac{1}{6} = \frac{1}{2}\ \text{atom}$$
* The plane is an **equilateral triangle** of side $a\sqrt{2}$ (a face diagonal), so its area is:
$$A_P = \frac{\sqrt{3}}{4}\left(a\sqrt{2}\right)^2 = \frac{\sqrt{3}}{2}\,a^2$$
* For BCC, atoms touch along the body diagonal: $a\sqrt{3} = 4R \Rightarrow a = \dfrac{4R}{\sqrt{3}}$, so $a^2 = \dfrac{16R^2}{3}$ and:
$$A_P = \frac{\sqrt{3}}{2} \times \frac{16R^2}{3} = \frac{8\sqrt{3}}{3}\,R^2$$
$$PD_{(111)} = \frac{1/2}{\dfrac{8\sqrt{3}}{3}R^2} = \mathbf{\frac{\sqrt{3}}{16\,R^2}}\ \text{atoms per unit area}$$

---

### 📚 Learn More — Question 3
* **Teacher Lecture Notes:** *Lecture 6 — Crystal Structure 3*, **pp. 3–7**: Linear Density defined on **p. 3** with the FCC $[100]$ worked example on **p. 4**; Planar Density with the FCC $(110)$ worked example on **pp. 5–6**; "why do we care" on **p. 7**.
* **Textbook (Expanded):** *Chapter 03 — Structure of Crystalline Solids & XRD (Expanded)*, **p. 6** (§3.3 — Linear & Planar Atomic Densities).

---

## Question 4: Line Defects (Dislocations)

### Problem Statement
Explain line defects and discuss its types.

---

### Step-by-Step Solution

* **Definition:** Line defects are **one-dimensional defects** in which rows of atoms are misaligned along a line inside the crystal. They are called **dislocations**.
* **How they form:** during solidification (rapid cooling from liquid to solid), from thermal stresses, and from mechanical deformation of the crystal.

#### Type 1 — Edge Dislocation
* An **extra half-plane of atoms** is inserted into the crystal; the atomic planes around the end of that half-plane are bent/misaligned.
* The **Burgers vector $\vec{b}$ is perpendicular** to the dislocation line ($\vec{b} \perp \vec{t}$).

#### Type 2 — Screw Dislocation
* The crystal is **cut partway and sheared by one atomic spacing**, so the atomic planes wind around the dislocation line like a **helical ramp** (a spiral parking-garage shape — hence "screw").
* The **Burgers vector $\vec{b}$ is parallel** to the dislocation line ($\vec{b} \parallel \vec{t}$).

#### Type 3 — Mixed Dislocation
* Most real dislocations are **mixed**: the line curves through the crystal, so it has **edge character in some regions and screw character in others** — the Burgers vector lies at an angle between perpendicular and parallel to the line.

| Type | Geometry | Burgers vector vs. line |
| :--- | :--- | :---: |
| **Edge** | Extra half-plane of atoms inserted | $\vec{b} \perp \vec{t}$ (perpendicular) |
| **Screw** | Planes spiral helically around the line | $\vec{b} \parallel \vec{t}$ (parallel) |
| **Mixed** | Curved line, both characters | At an angle |

---

### 📚 Learn More — Question 4
* **Teacher Lecture Notes:** *Lecture 7 — Defects 1*, **pp. 16–19**: "Linear Defects — Dislocations" on **p. 16**, Edge Dislocation on **p. 17**, Screw Dislocation on **p. 18**, and mixed dislocations on **p. 19**.
* **Textbook (Expanded):** *Chapter 04 — Imperfections in Solids & Defects (Expanded)*, **pp. 6–7** (§4.1 — the Burgers vector and Burgers circuit; how the dislocation character changes continuously from pure edge, $\vec{b} \perp \vec{t}$, to pure screw, $\vec{b} \parallel \vec{t}$).

---

## Question 5: Vacancy Concentration vs. Temperature

### Problem Statement
For a particular metal, there is **one vacancy every 15,000 atoms at $800^\circ\text{C}$**. At what temperature will there be **1 vacancy every 5,000 atoms**?

---

### Step-by-Step Solution

* The equilibrium vacancy fraction follows the Arrhenius law:
$$\frac{N_v}{N} = \exp\left(-\frac{Q_v}{kT}\right)$$
where $Q_v$ is the vacancy formation energy and $k$ is Boltzmann's constant.

* **At $T_1$:** $\quad T_1 = 800 + 273 = 1073\ \text{K}$, $\quad \dfrac{N_v}{N} = \dfrac{1}{15000}$:
$$-\ln(15000) = -\frac{Q_v}{kT_1} \qquad (1)$$
* **At $T_2$:** $\quad \dfrac{N_v}{N} = \dfrac{1}{5000}$:
$$-\ln(5000) = -\frac{Q_v}{kT_2} \qquad (2)$$
* **Divide (1) by (2)** — $Q_v$ and $k$ cancel, so the formation energy is never needed:
$$\frac{\ln(15000)}{\ln(5000)} = \frac{T_2}{T_1} = \frac{9.616}{8.517} = 1.129$$
* Solve for $T_2$:
$$T_2 = 1.129 \times 1073\ \text{K} = \mathbf{1211\ K} = \mathbf{938^\circ C}$$
*(In class the ratio was rounded to $1.12$ before multiplying, giving $T_2 \approx 1201\ \text{K} \approx 928^\circ\text{C}$ — same method, just earlier rounding.)*
* **Sanity check:** a higher temperature must give *more* vacancies, and $\tfrac{1}{5000} > \tfrac{1}{15000}$ ✓

---

### 📚 Learn More — Question 5
* **Teacher Lecture Notes:** *Lecture 7 — Defects 1*, **pp. 3–5**: types of imperfections on **p. 3**, the vacancy as a point defect on **p. 4**, and "Equilibrium Concentration: Point Defects" (the $N_v$ formula and its temperature dependence) on **p. 5**.
* **Textbook (Expanded):** *Chapter 04 — Imperfections in Solids & Defects (Expanded)*, **p. 3** (the $N_v = N\exp(-Q_v/kT)$ law) and **p. 9** (a fully worked equilibrium-vacancy example).

---

## Question 6: Single Crystals vs. Polycrystals

### Problem Statement
* **(a)** Explain the differences between single crystals and polycrystals.
* **(b)** Discuss how properties vary with the direction of measurement for each.

---

### Step-by-Step Solution

#### (a) Structural Difference
* **Single crystal:** the whole piece of material is **one single crystal** — every unit cell in it is aligned in the **same crystallographic orientation**, with no internal boundaries.
* **Polycrystal:** the material is made of **many small crystals called grains**, each with a **different (essentially random) orientation**, joined together at **grain boundaries**.

#### (b) Direction-Dependence of Properties
* **Single crystal → ANISOTROPIC:** properties (e.g., elastic modulus, conductivity) **change with the direction** in which they are measured, because atomic packing and spacing differ along different crystallographic directions.
* **Polycrystal → ISOTROPIC:** the individual grains are randomly oriented, so their direction-dependent properties **average out** — the bulk material shows the **same properties in every direction**. *(Caveat: if processing aligns the grains — a "texture" — a polycrystal can become anisotropic again.)*

| | Single Crystal | Polycrystal |
| :--- | :--- | :--- |
| **Structure** | One crystal, one orientation throughout | Many grains, random orientations |
| **Boundaries** | None | Grain boundaries between grains |
| **Properties vs. direction** | **Anisotropic** — vary with direction | **Isotropic** — same in all directions |

---

### 📚 Learn More — Question 6
* **Teacher Lecture Notes:** *Lecture 6 — Crystal Structure 3*, **pp. 8–9** ("Crystals As Building Blocks" — why engineering uses single crystals, e.g., turbine blades — and "Single Vs Polycrystals"); plus *Lecture 5 — Crystal Structure 2*, **p. 17** ("Isotropy vs. Anisotropy in Single Crystals").
* **Textbook (Expanded):** *Chapter 04 — Imperfections in Solids & Defects (Expanded)*, **p. 7** (§5/§4.6 — Interfacial Defects: grain boundaries separating the differently-oriented grains of a polycrystalline material).

---

*End of Practice Problem Set #2 — fully solved master guide. Source: MIAE 221 Tutorial 2 (Fall 2026), worked solutions as presented in class.*
