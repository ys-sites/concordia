# INDU 211 · Rapid Review Sheet (1-Page Cheatsheet)
## Part 2: Chapter 3 — Manufacturing & Process Engineering

---

### 1. The Design-Manufacturing Interface
* **Core Friction**: Product Designer wants *tight tolerances* (high cost) $\longleftrightarrow$ Manufacturing Engineer wants *loose tolerances* (low cost, easy tooling).
* **Concurrent Engineering**: Simultaneous integration of design, manufacturing, testing, maintenance, and recycling from Day 1. Eliminates "throwing design over the wall"; pioneered in aerospace.
* **Bill of Materials (BOM)**: Inverted hierarchical tree: Product (L0) $\to$ Sub-assemblies (L1) $\to$ Components $\to$ Raw Materials.

---

### 2. Quantitative Economics & Break-Even Formulas
* **Linear Cost Model**: $\mathbf{TC(X) = a \cdot X + b}$  where $b = \text{Fixed Cost } (FC)$, $a = \text{Variable Cost/unit } (VC)$, $X = \text{volume}$.
* **Single-Process Break-Even**: $\mathbf{X_{BEP} = \frac{FC}{P - a}}$  where $P = \text{Selling Price/unit}$, $(P - a) = \text{Contribution Margin}$.
* **Multi-Process Crossover Volume**: Point where two processes cost the same:
  $$\mathbf{FC_1 + a_1 X = FC_2 + a_2 X \implies X_{crossover} = \frac{FC_1 - FC_2}{a_2 - a_1}}$$
* **Decision Golden Rule**:
  * **Low Volume**: Select process with **lowest Fixed Cost** (e.g., manual machining or 3D printing).
  * **High Volume**: Select process with **lowest Variable Cost** (e.g., automated die stamping / casting).

---

### 3. Operation Sequencing Rules & Steel Shaft Flow
* **3 Rules**: 1. Shortest path (no backtracking) | 2. Non-interference (subsequent ops don't ruin finishes/burrs) | 3. Datum preservation (group cuts per machine setup).
* **Steel Shaft Sequence**:
  $$\text{Cut Bar Stock (Bandsaw)} \to \text{Face Ends (Lathe)} \to \text{Turn Diameters (Lathe)} \to \text{Drill Holes (Lathe/Press)}$$
  $$\to \text{Groove Undercuts (Lathe)} \to \mathbf{\text{Heat Treatment (Furnace)}} \to \mathbf{\text{Cylindrical Grinding (Precision)}} \to \text{Protective Coating}$$

---

### 4. Master Manufacturing Processes Reference Table
| Process Family | Method | Core Characteristics | Industrial Applications |
| :--- | :--- | :--- | :--- |
| **Casting** | Molten liquid poured into mold cavity. | **Sand**: Low tooling cost, rough surface, expendable mold.<br>**Permanent / Die**: High tooling cost, smooth, high volume. | Engine blocks, pump housings, brackets, large machinery frames. |
| **Hot Working** | Formed **ABOVE** recrystallization temp ($T > 0.5 T_m$). | Low forces required; large deformations; rough scale surface. | Hot rolling, initial ingot breakdown, heavy railway rails, I-beams. |
| **Cold Working** | Formed **BELOW** recrystallization temp (room temp). | Strain hardening (stronger/harder); high forces; close tolerances. | Cold rolling, cold wire drawing, automotive body panels. |
| **Forging** | Intermittent impact hammering or continuous press. | Aligns internal grain flow with contours; high toughness. | Engine crankshafts, connecting rods, aircraft landing gear. |
| **Extrusion** | Compressed & forced through a shaped die orifice. | Constant cross-section; "toothpaste tube" mechanics. | Aluminum window frames, structural tubes, architectural trim. |
| **Wire Drawing** | Rod **pulled in tension** through conical die. | Reduces cross-sectional diameter; increases tensile strength. | Electrical copper wire, structural cable, steel wire ropes. |
| **Sheet Metal** | Shearing, bending, or deep drawing sheet. | **Punching**: cut hole is scrap. **Blanking**: cut piece is part.<br>**Deep Drawing**: seamless hollow vessels (cans, sinks). | Beverage cans, kitchen sinks, automotive hoods and fenders. |
| **Turning** | Lathe; **workpiece rotates**, single-point tool feeds. | Cylindrical profiles, tapers, external threads, shoulders. | Shafts, pins, axles, threaded studs, precision bushings. |
| **Milling** | Mill; **cutter rotates**, multi-tooth tool, part feeds. | High versatility: flat faces, keyway slots, pockets, 3D contours. | Engine heads, molds, brackets, transmission casings. |
| **Shaping vs Planing** | Reciprocating single-point flat cutting. | **Shaping**: Workpiece stationary; tool moves (smaller parts).<br>**Planing**: Tool stationary; heavy workpiece moves (huge beds). | Machine tool guide beds, railway track switches, flat slides. |
| **Broaching** | Multi-tooth straight bar pushed/pulled in **1 pass**. | Extremely fast; tight tolerances; expensive custom tool. | Internal splines, keyway slots, square/hexagonal holes. |
| **Grinding** | Rotating bonded abrasive wheel; microscopic chips. | Machining post-heat-treat hardened metals; mirror finish. | Bearing races, ground shafts, cutting tool sharpening. |
| **Welding** | Fusion bonding via thermal heat/pressure. | **Arc**: SMAW/MIG/TIG; **Resistance**: Spot welds on auto bodies.<br>**Thermit**: Track welding; **Beam**: Laser / Electron beam. | Structural steel buildings, pipelines, automotive chassis. |
| **Brazing / Soldering** | Base metal not melted; capillary filler flow. | **Brazing**: Filler melts $>450^\circ\text{C}$. **Soldering**: Filler $<450^\circ\text{C}$. | Plumbing copper joints, electronic PCB board circuits. |
| **3D Printing** | Additive layer-by-layer deposition. | Zero tooling, organic/lattice shapes; slow & costly at volume. | Rapid prototyping, custom medical implants, aerospace brackets. |

---

### 5. Ancillary Functions & Maintenance
* **Fixture**: **Holds & locates** workpiece (milling vise, chuck).
* **Jig**: **Holds, locates, AND GUIDES the cutting tool** (drill jig with hardened drill bushings).
* **Preventive Maintenance**: Scheduled periodic servicing for **bottleneck machines**.
* **Breakdown Maintenance**: "Run to failure" for **non-critical, redundant, low-cost machines**.
