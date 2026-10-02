# MIAE 221 · Rapid Review Sheet · Part 5B
## Grain Boundaries, Stacking Faults, Volume Defects & Microscopy (Lecture 8)

---

### 1. Polycrystals & Grain Boundaries (2-D defects)
* **Solidification**: random nuclei → grow → impinge → **grains** separated by **grain boundaries**. Most engineering materials are **polycrystalline**.
* **High-angle** GB: large misorientation. **Low-angle** GB: a few degrees, = **array of dislocations** — **tilt** (edge), **twist** (screw); $\theta \approx b/D$.
* GB atoms: less bonded, lower packing, lower coordination → **grain boundary energy** (J/m²) → GBs are **more reactive**, attract **impurity segregation**, are fast diffusion paths, and **grow** on heating.
* **Fine grains** = more GB area = stronger (Hall–Petch). **Coarse grains** = less GB area.

---

### 2. Observing Grains & Grain Size
* **Macrostructure**: visible to the naked eye (lead ingot, galvanized zinc). **Microstructure**: needs a microscope. Camera image = **photomicrograph**.
* **Preparation**: grind → polish (mirror, featureless) → **etch** (chemical reagents attack GBs preferentially → grooves **scatter light** → dark lines = **optical contrast**).
* **ASTM grain size** (at 100×): $N = 2^{G-1}$; other magnification: $N_M (M/100)^2 = 2^{G-1}$. **Larger $G$ = smaller grains.**
* **Intercept method**: $\bar{\ell} = \dfrac{L_T}{P\,M}$; $\ G = -6.6457\log_{10}\bar{\ell} - 3.298$ ($\bar{\ell}$ in mm).

---

### 3. Stacking Faults (planar)
* FCC: **…ABCABC…**; HCP: **…ABAB…**. Fault = wrong plane order, e.g. **…ABCAB|A…** (C missing) → thin **HCP-like** layer in FCC.
* Atoms stay in close-packed sites (12 neighbours) → **low energy → common**. Form during **solidification** and **plastic deformation**.
* **Intrinsic** (plane removed) vs. **extrinsic** (plane inserted). **Low SFE** (stainless, brass) → wide partials, little cross-slip, high work hardening; **high SFE** (Al) → easy cross-slip.

---

### 4. Volumetric (3-D) Defects
| Defect | Origin | Effect |
| :--- | :--- | :--- |
| **Inclusions** | Foreign particles (oxides, slag) | Stress raisers, lower toughness |
| **Precipitates** | Second phase from heat treatment | Usually **strengthen** |
| **Pores / voids** | Gas, shrinkage, sintering | Lower strength and density |
| **Cracks** | Thermal/mechanical stress | Most dangerous; fracture initiation |

---

### 5. Microscopy
* Resolution limited by wavelength: light $\lambda \approx 500\text{ nm}$ (max ≈ **2000×**); electrons $\lambda \approx 0.003\text{ nm}$ (up to ≈ **1 000 000×**).

| Microscope | Resolution | Key points |
| :--- | :--- | :--- |
| Human eye | ≈ 0.1 mm (~$10^6$ Å) | Macrostructure |
| **OLM** | **3000 Å** | Reflected light; polished + etched; shallow depth of field |
| **SEM** | **10–50 Å** | Scanned beam; **surfaces**, **fractography**; **large depth of field**; EDS composition |
| **TEM** | **2–5 Å**, near atomic | Electrons **through** thin (**electron-transparent**) samples; dislocations, GBs, diffraction contrast |
| **SPM** (STM/AFM) | ≈ 1 Å, atomic | Sharp probe + piezo scanner + feedback; **computer-built 3-D topography** |

* **Why SPM only in the 1980s**: TEM (≈1938) and SEM (≈1965) were **analog** (photographic film); SPM **depends on computers** to build the image.
* **Clicker answers**: etched grains visible → **C** (GBs scatter light); rough fracture surface in focus in SEM → **A** (depth of field).
