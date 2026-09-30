# INDU 211: Introduction to Production & Manufacturing Systems
## Master Study Guide & Exam Strategy Guide
**Department of Mechanical, Industrial & Aerospace Engineering (MIAE) · Concordia University**

---

## 1. Welcome to INDU 211 — The Engineer’s Big Picture

If this is your first course in Industrial Engineering, welcome! Most engineering disciplines focus heavily on the physical object itself:
* **Mechanical Engineers** design moving mechanisms (gears, linkages, thermal cycles).
* **Civil Engineers** design stationary structural systems (bridges, foundations, skyscrapers).
* **Electrical Engineers** design circuits, electromagnetic paths, and signal processors.

**Industrial Engineers (IEs)** do something fundamentally different: **We design, analyze, and optimize the *entire system* that brings ideas into reality.** That system includes machines, materials, money, information, and most importantly—**people**.

> ### The IE Core Philosophy:
> *"Work with **PEOPLE** to make systems **BETTER, FASTER, SAFER, and CHEAPER**."*

---

## 2. The 5-Pillar Architecture of INDU 211

To succeed in INDU 211 without feeling overwhelmed by lecture slides, organize your mental model around five core pillars:

| Pillar 1: Identity & Ethics | Pillar 2: Systems & Decisions | Pillar 3: Process & Economics | Pillar 4: Industrial Processes | Pillar 5: Facilities & Logistics |
| :--- | :--- | :--- | :--- | :--- |
| • Latin root: *Ingenium*<br>• Science vs. Engineering<br>• OIQ & Engineers Canada<br>• Public safety vs. costs<br>• IE Pioneers (Babbage to AI) | • Open vs. Closed Loops<br>• Conversion Process Model<br>• Strategic, Tactical, Control<br>• Human Activity Systems<br>• Management Systems | • Design vs. Production<br>• Concurrent Engineering<br>• Bill of Materials (BOM)<br>• Fixed vs. Variable Costs<br>• Break-Even & Crossover | • Refining & Alloying<br>• Sand vs. Die Casting<br>• Hot vs. Cold Forming<br>• Machining (Turn/Mill/Drill)<br>• Jigs vs. Fixtures & Tooling | • Macro Location vs. Layout<br>• Euclidean vs. Rectilinear<br>• Center of Gravity & Medians<br>• Transportation Problem<br>• 5 Layout Configurations |

---

## 3. Master Glossary of High-Frequency Terms

Mastering INDU 211 exams requires fluent recall of exact terminology. Memorize these core concepts:

| Term | Exact Definition | Key Exam Identifier |
| :--- | :--- | :--- |
| **Ingenium** | Latin root of *engineer* and *ingenious*; means talent, natural capacity, or clever invention. | Etymology of engineering. |
| **Science** | Systematic quest for basic knowledge through observation, hypothesis, and controlled testing. | Goal: *Understanding / Theories*. |
| **Engineering** | Application of scientific and mathematical knowledge to create solutions for human welfare. | Goal: *Better life / Functional Systems*. |
| **Analysis** | Resolving or breaking down an existing system into its fundamental components. | Breaking down an *existing* system. |
| **Synthesis** | Combining disparate elements and concepts together to form a novel, unified whole. | Creating a *new* system. |
| **OIQ** | *Ordre des ingénieurs du Québec*; regulatory body overseeing ~55,000 professional engineers in Quebec. | Monitors ethics, public safety, and professional practice. |
| **Engineers Canada** | National federation of the 12 provincial and territorial engineering regulators. | National standards and practice. |
| **CEAB** | *Canadian Engineering Accreditation Board*; accredits undergraduate Canadian engineering degrees. | Validates academic qualifications for licensing. |
| **Practice of Engineering** | Any act of planning, designing, evaluating, advising, supervising requiring engineering principles. | Legal definition; public safety priority. |
| **Open-Loop System** | A system that executes an action without monitoring its output or course-correcting. | "Car without a driver"; no feedback. |
| **Closed-Loop System** | A system that measures its output, compares it to a goal, and applies feedback adjustments. | "Car with a driver"; feedback-driven. |
| **Strategic Decision** | Long-term, high-stakes executive choices: *What* to make, *How* to make it, *Where* to build. | 3–10 year horizon; plant location, product line. |
| **Tactical Decision** | Medium-term operational resource allocation: *How much* to produce and *When*. | Monthly/quarterly; aggregate planning, inventory. |
| **Control Decision** | Immediate, day-to-day management of shop-floor activities and line workflows. | Daily/hourly; shift scheduling, machine dispatching. |
| **Concurrent Engineering** | Simultaneous integration of design, manufacturing, testing, maintenance, and recycling from Day 1. | Eliminates "throwing design over the wall". |
| **Tolerance** | Total allowable variation in a physical dimension from its nominal specification. | Tighter tolerance = exponentially higher cost. |
| **Bill of Materials (BOM)** | Hierarchical product structure tree listing all assemblies, components, quantities, and raw materials. | Multi-level parts list / recipe. |
| **Fixed Cost ($FC$)** | Capital expenditures that do not vary with production output (machines, plant footprint, tooling). | $b$ in $Y = aX + b$. |
| **Variable Cost ($VC$)** | Per-unit expenses directly tied to volume (raw materials, direct labor, tool wear, consumable power). | $a$ in $Y = aX + b$. |
| **Break-Even Point (BEP)** | Production/sales volume where total revenue equals total costs ($TR = TC$), resulting in zero net profit. | $Q_{BEP} = \frac{FC}{P - v}$. |
| **Process Crossover Volume** | Output volume where two competing manufacturing processes yield identical total production costs. | $FC_1 + v_1 Q = FC_2 + v_2 Q$. |
| **Hot Working** | Plastic deformation performed *above* metal recrystallization temperature; low forces, rough surface. | No work hardening; high ductility. |
| **Cold Working** | Plastic deformation performed *below* recrystallization temperature; high forces, strain hardening. | Superior surface finish & tight tolerances. |
| **Casting** | Pouring molten metal into a hollow mold cavity where it solidifies to assume the shape. | Near-net-shape for complex geometries. |
| **Extrusion** | Forcing billet metal through a shaped die orifice under high compressive pressure. | Constant cross-section profiles (pipes, rails). |
| **Forging** | Shaping metal using localized compressive impact forces (hammering or pressing). | Exceptional grain flow, toughness & strength. |
| **Turning** | Machining operation where workpiece *rotates* against a stationary single-point cutting tool (Lathe). | Generates cylindrical geometries. |
| **Milling** | Workpiece feeds against a rapidly *rotating multi-tooth cutter* (Milling machine). | Generates flat faces, slots, contours. |
| **Shaping** | Reciprocating machining where **workpiece is stationary** and cutting tool reciprocates. | Low-volume flat surfacing. |
| **Planing** | Reciprocating machining where **tool is stationary** and heavy workpiece moves beneath it. | Large workpieces (rail tracks, large beds). |
| **Fixture** | Rigid production device that locates and securely clamps a workpiece in a fixed coordinate frame. | Holds & locates workpiece (e.g. vise, clamp). |
| **Jig** | Production device that locates/holds workpiece **AND** directly guides the cutting tool. | Holds + Locates + **Guides Tool** (e.g. drill bushing). |
| **Euclidean Distance ($L_2$)** | Geometric straight-line distance: $d_E = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$. | "As the crow flies"; intercity transit, pipelines. |
| **Rectilinear Distance ($L_1$)** | Orthogonal travel constrained to a grid: $d_R = \|x_1-x_2\| + \|y_1-y_2\|$. | Urban city blocks, factory floor aisles, AGVs. |
| **Center of Gravity (Centroid)** | Volume-weighted average coordinate minimizing squared Euclidean distance: $\bar{x} = \frac{\sum Q_i x_i}{\sum Q_i}$. | Siting central warehouses, distribution hubs. |
| **Rectilinear 1-Median** | Location minimizing weighted rectilinear distance; found at the coordinate-wise 50% cumulative volume point. | Optimal facility site in grid cities / plants. |
| **Transportation Problem** | Linear program optimizing shipments from $m$ sources to $n$ destinations to minimize freight costs. | Multi-plant, multi-warehouse distribution. |
| **Least-Cost Assignment** | Greedy heuristic allocating maximum units to the active cell with the lowest unit freight cost. | Initial feasible solution for transportation model. |
| **The 30% to 95% Rule** | **Material handling accounts for 30% to 95% of total manufacturing cost**; adds no value to product. | Core economic justification for layout design. |
| **Product Layout** | Sequential equipment layout following progressive operation order (assembly lines). | High volume, low variety, smooth flow, low WIP. |
| **Process Layout (Job Shop)** | Functional grouping of identical equipment into departments (lathes together, mills together). | Low volume, high variety, high WIP, flexible. |
| **Cellular Layout (GT)** | Grouping dissimilar machines into U-cells dedicated to part families (Group Technology). | Mass customization, low setup, agile flow. |
| **Fixed-Position Layout** | Product remains stationary; labor, equipment, and materials travel to the product. | Ships, large commercial aircraft, rockets, bridges. |
| **Mixed / Hybrid Layout** | Integrating multiple layout types across production stages (Process $\to$ Cellular $\to$ Product). | Modern automotive and electronics manufacturing. |

---

## 4. High-Yield Exam Question Archetypes & Winning Formats

### Archetype 1: Definitional & Etymological Questions
* **Example Question**: *"Define the practice of engineering and explain why licensing bodies like the OIQ exist."*
* **Scoring Formula**:
  1. Give the legal definition keyword set (*planning, designing, composing, evaluating, supervising requiring engineering principles*).
  2. State the primary mandate: safeguarding **life, health, property, public welfare, and the environment**.
  3. Address the conflict of interest: Engineers are employed by private corporations under cost pressure, but legally and ethically bound to public safety over company profits.

### Archetype 2: Comparative Distinction Questions
* **Example Question**: *"Contrast a Jig from a Fixture. Give an industrial example of each."*
* **Scoring Formula**:
  * Create a clean 3-row markdown table:
    * **Primary Function**: Fixture holds and locates; Jig holds, locates, AND mechanically guides the cutting tool.
    * **Complexity & Cost**: Jigs feature guide bushings or hardened guides; fixtures rely on machine kinematics.
    * **Examples**: Fixture = milling vise or welding clamp fixture; Jig = drill jig with hardened drill bushings.

### Archetype 3: Quantitative Process Selection / Break-Even Questions
* **Example Question**: *"Given Process A ($FC = \$110k, v = \$2$), Process B ($FC = \$80k, v = \$4$), Process C ($FC = \$75k, v = \$5$), determine the optimal process for any demand $Q$."*
* **Scoring Formula**:
  1. Calculate pairwise crossover points algebraically:
     $$Q_{B-C} = \frac{80,000 - 75,000}{5 - 4} = 5,000 \text{ units}, \quad Q_{A-B} = \frac{110,000 - 80,000}{4 - 2} = 15,000 \text{ units}$$
  2. State the final selection intervals clearly:
     * $0 \le Q < 5,000$: Select **Process C** (lowest fixed cost).
     * $5,000 < Q < 15,000$: Select **Process B** (balanced middle ground).
     * $Q > 15,000$: Select **Process A** (lowest variable cost dominates at scale).

### Archetype 4: Operation Sequencing Rules
* **Example Question**: *"State the fundamental rules for sequencing manufacturing operations on a raw steel shaft."*
* **Scoring Formula**:
  1. **Shortest path**: Minimize material handling distance; eliminate backtracking.
  2. **Non-interference**: Ensure subsequent operations do not damage previously finished surfaces.
  3. **Datum preservation**: Group as many cuts as possible on a single machine/setup before releasing the workpiece.
  4. **Rough before finish**: Heavy material removal before heat treatment and final precision cylindrical grinding.

### Archetype 5: Center of Gravity & Rectilinear Median Modeling
* **Example Question**: *"Given regional destinations with coordinates $(x_i, y_i)$ and demand volumes $Q_i$, calculate the optimal facility location under unweighted and weighted conditions. Explain how rectilinear distance differs."*
* **Scoring Formula**:
  1. Show clean tabular calculation of $\sum Q_i x_i$ and $\sum Q_i y_i$.
  2. Compute centroid: $\bar{x} = \frac{\sum Q_i x_i}{\sum Q_i}, \bar{y} = \frac{\sum Q_i y_i}{\sum Q_i}$.
  3. Explain that Center of Gravity minimizes *squared Euclidean distance*.
  4. Contrast with Rectilinear travel ($d_R = |\Delta x| + |\Delta y|$), explaining that the true rectilinear optimum is found by the independent weighted 50% median rule.

### Archetype 6: Transportation Tableau & Least-Cost Allocation
* **Example Question**: *"Using the Least-Cost assignment method, find an initial feasible solution for a balanced transportation matrix and evaluate total cost."*
* **Scoring Formula**:
  1. Confirm supply-demand balance ($\sum S_i = \sum D_j$).
  2. Greedily allocate maximum feasible units to the cell with lowest unit cost $c_{ij}$.
  3. Cross off exhausted row or column, adjust residual supply/demand, and repeat.
  4. Calculate total cost: $TC = \sum \sum c_{ij} x_{ij}$.
  5. Note that alternative tie-break choices can yield higher costs, demonstrating the need for exact linear programming algorithms.

### Archetype 7: Plant Layout Configuration Trade-Offs
* **Example Question**: *"Contrast Product Layout and Process Layout across volume, WIP inventory, material handling expense, and line failure vulnerability."*
* **Scoring Formula**:
  * Build a 4-point comparative breakdown:
    * **Volume/Variety**: Product = High vol/low variety; Process = Low vol/high variety.
    * **WIP Inventory**: Product = Minimal (continuous line); Process = Extremely high (parts wait in queues).
    * **Material Handling**: Product = Fixed conveyors (low cost/unit); Process = Forklifts/manual carts (high cost/unit; 30–95% rule).
    * **Line Stoppage**: Product = Catastrophic (1 machine stops entire plant); Process = Resilient (work is rerouted).

---

## 5. Course Timeline & Exam Study Strategy

| Phase 1: Foundations (Weeks 1–2) | Phase 2: Manufacturing (Weeks 3) | Phase 3: Facilities & Layout (Weeks 4–5) | Phase 4: Operations & Midterm (Weeks 6+) |
| :--- | :--- | :--- | :--- |
| • Science vs. Engineering<br>• OIQ Ethics & Regulations<br>• Systems & Feedback Loops<br>• Strategic/Tactical/Control<br>• 8 IE Historical Pioneers | • Concurrent Engineering<br>• Multi-level BOM Trees<br>• Cost-Volume Break-Even<br>• Metallurgy & Metal Forming<br>• Machining, Cutting & Welding | • Macro Location Criteria<br>• Euclidean vs. Rectilinear<br>• Center of Gravity & Medians<br>• Transportation Model<br>• 5 Layout Configurations | • Master 1-Page Cheatsheets<br>• Solve Multi-Process BEP<br>• Solve Transportation Tableaus<br>• Center of Gravity Drills<br>• High-Yield Term Flashcards |

1. **Deep Comprehension**: Read the [Comprehensive Topic Guides](./02%20-%20Comprehensive%20Topic%20Guides%20(Expanded%20&%20Intuitive)) to understand *why* each system behaves the way it does.
2. **Quantitative Muscle Memory**: Work through both quantitative guides in [04 - Worked Problems](./04%20-%20Worked%20Problems%20&%20Quantitative%20Analysis) for Cost-Volume crossover and Facilities Location/Transportation until you can solve them effortlessly.
3. **Rapid Recall**: Use the [1-Page Rapid Review Sheets](./03%20-%201-Page%20Rapid%20Review%20Sheets) 48 hours before exams to lock in key distinctions (Jig vs Fixture, Product vs Process layout, Center of Gravity vs Median).
