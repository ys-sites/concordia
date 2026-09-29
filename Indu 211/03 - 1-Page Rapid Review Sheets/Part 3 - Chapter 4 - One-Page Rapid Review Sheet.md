# INDU 211 · Rapid Review Sheet (1-Page Cheatsheet)
## Part 3: Chapter 4 — Facilities Location, Layout & Material Handling

---

### 1. Strategic Levels & Location Drivers
* **3 Decision Levels**: 1. **General Location** (country/region) | 2. **Exact Site** (zoning, parcel, soil) | 3. **Internal Layout** (machines, aisles, utilities).
* **Time Horizon**: Strategic (3–10+ yrs); high sunk capital; requires IEs, accountants, legal, marketing, executives.
* **Proximity Rules**:
  * **Market-Oriented**: Bulky, fragile, perishable goods, or rapid delivery (potato chips, bakeries, beer).
  * **Raw Material-Oriented**: Weight-losing, bulky raw materials (steel mills, paper mills, ore smelters).
* **The 30% to 95% Rule**: **Material handling = 30% to 95% of manufacturing cost** (variable & quantifiable $\to$ prime IE focus).

---

### 2. Distance Metrics & Location Formulas
* **Euclidean Distance ($L_2$)**: Straight-line / "as the crow flies": $\mathbf{d_E = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}}$ (intercity, pipelines, air).
* **Rectilinear Distance ($L_1$)**: Orthogonal grid travel: $\mathbf{d_R = |x_1 - x_2| + |y_1 - y_2|}$ (urban streets, factory aisles, AGVs).
  * **Elongation Penalty**: $d_R \ge d_E$. Maximum ratio at $45^\circ$: $\mathbf{d_R / d_E = \sqrt{2} \approx 1.414}$ (up to 41.4% extra travel).
* **Center of Gravity (Centroid)**: Minimizes sum of squared Euclidean distances:
  * **Unweighted**: $\mathbf{\bar{x} = \frac{\sum x_i}{n}, \quad \bar{y} = \frac{\sum y_i}{n}}$
  * **Weighted**: $\mathbf{\bar{x} = \frac{\sum Q_i x_i}{\sum Q_i}, \quad \bar{y} = \frac{\sum Q_i y_i}{\sum Q_i}}$  *(High-volume destinations pull centroid toward them)*.
* **Rectilinear 1-Median Rule**: Minimizes weighted rectilinear distance $\sum Q_i (|x - x_i| + |y - y_i|)$.
  * Independently find $x^*$ and $y^*$ at the median coordinate where cumulative weight $\mathbf{\sum Q_i \ge 0.50 \cdot Q_{total}}$.
* **Transportation Model (Least-Cost Method)**:
  1. Find cell with lowest unit cost $c_{ij}$; 2. Allocate $\min(\text{Supply}_i, \text{Demand}_j)$; 3. Reduce row/col; 4. Repeat.

---

### 3. Master 5-Layout Configurations Comparison
| Layout Type | Operational Regime | Flow Pattern | WIP Inventory | Unit Handling Cost | Failure Sensitivity | Industrial Examples |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Product** *(Line / Continuous)* | High Volume, Low Variety | Progressive straight/U line | **Very Low** (smooth flow) | **Low** (fixed conveyors) | **Catastrophic** (1 machine halts line) | Paper mills, soft drinks, auto assembly lines. |
| **Process** *(Job Shop / Functional)* | Low Volume, High Variety | Intermittent / criss-crossing | **Extremely High** (queues) | **High** (variable forklifts) | **Low** (reroute to same bay) | Machine shops, hospitals, commercial banks. |
| **Cellular** *(Group Technology)* | Medium Vol, Medium Variety | U-shaped cell flow | **Low to Moderate** | **Low within cell** | **Isolated** to single cell | Furniture (chair cells), auto gear/brake cells. |
| **Fixed-Position** *(Project)* | Unit / Project, Heavy/Bulky | Stationary (resources come) | Project-based | **High** (mobile tools/rigs) | Schedule milestone delays | Shipbuilding, aircraft (Boeing 777), rockets. |
| **Mixed / Hybrid** | Multi-echelon manufacturing | Staged combination | Optimized per stage | Balanced | Isolated by buffer zones | Auto (Process $\to$ Cellular $\to$ Product). |

---

### 4. Layout Drivers & Industrial Work Environment
* **Drivers for Relayout**: Bottlenecks, high handling cost, safety hazards/accidents, product design changes, volume/mix shifts, morale.
* **IE Focus**: Simultaneous design of layout + material handling; utilities (power drops, compressed air, water); lighting & safety aisles.
