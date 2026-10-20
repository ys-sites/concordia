# INDU 211 · Rapid Review Sheet (1-Page Cheatsheet)
## Part 4: Chapter 5 — Material Handling, Distribution & Routing

---

### 1. Why Material Handling Matters
* **Definition**: Using equipment to move materials inside and between facilities — receiving → storage → work centres → shipping.
* **Non-Value-Added**: Moving a part does not change it, yet material handling = **30% to 95% of production cost** → cut the number and length of moves.
* **Equipment Follows Layout**: Product layout → conveyors (fixed path); Process layout → industrial trucks (varying path).
* **Supply Chain Flow**: Supplier → Manufacturing → Wholesaler → Retailer → Consumer; the return arrow = end-of-life / damaged product (reverse logistics).

---

### 2. Equipment Comparison
| Equipment | Path Type | Typical Use |
| :--- | :--- | :--- |
| **Conveyors** | Fixed point-to-point, constant rate | Assembly lines, parcel sorting |
| **Industrial Trucks** (forklifts) | Varying paths, intermittent | Job shops, warehouses |
| **Cranes & Hoists** | Overhead lifting | Steel mills, heavy assembly |
| **AGV** | Driverless, predetermined guide paths | Automated plants, hospitals |
| **AS/RS** | Tall racks + computer-controlled crane | High-density storage — builds *up*, not out |
| **Containers / Racks** | Bulk storage & handling | Pallets, bins, carts |
| **Elevators / Lifts** | Fixed vertical moves | Multi-floor plants |

---

### 3. Principles of Material Handling (name the principle from the example)
* **Planning**: Handling is planned, not left to evolve | **Systems**: One cycle, receiving → shipping | **Material Flow**: Smooth flow, no back-tracking or cross-traffic | **Simplification**: Eliminate, combine, simplify moves.
* **Gravity**: Use gravity when possible (gravity-feed bins, sloped roller conveyors) | **Space Utilisation**: Use the cube, not just the floor (high racks) | **Unit Size**: Move the largest practical load (pallets, containers).
* **Automation** | **Equipment Selection** (weight, shape, frequency, distance) | **Standardisation** (standard pallets/containers) | **Adaptability** | **Maintenance** | **Safety**.

---

### 4. AGV Fleet Sizing (Turner §5.3)
* **Delivery Cycle Time**: $\mathbf{T_c = T_{load} + \frac{L_d}{v_c} + T_{unload} + \frac{L_e}{v_c}}$  *(loaded + empty travel both count)*
* **Hourly Workload**: $\mathbf{WL = \sum D_i \times T_{ci}}$ (min/hr), $D_i$ = deliveries/hr on loop $i$.
* **Available Vehicle Time**: $\mathbf{T_{avail} = 60 \times A \times TF}$ — $A$ = availability (0.90–0.98), $TF$ = traffic factor (0.85–0.95).
* **Fleet Size**: $\mathbf{N_v = \left\lceil \frac{WL}{T_{avail}} \right\rceil}$ — **always round UP** (a fractional vehicle cannot be deployed).
  * *Worked example*: $D = 24$/hr, $L_d = 120$ m, $L_e = 90$ m, $v_c = 40$ m/min, $T_{load} = 1.25$, $T_{unload} = 1.00$, $A = 0.95$, $TF = 0.90$ → $T_c = 1.25 + 3.00 + 1.00 + 2.25 = 7.50$ min; $WL = 24 \times 7.50 = 180$; $T_{avail} = 60 \times 0.95 \times 0.90 = 51.3$; $N_v = \lceil 180 / 51.3 \rceil = \lceil 3.51 \rceil = \mathbf{4}$ **AGVs**.

---

### 5. Conveyor System Analysis
* **Carrier Delivery Rate**: $\mathbf{R_d = \frac{v_c}{s_c}}$ (carriers/min) — $v_c$ = line speed, $s_c$ = carrier spacing.
* **Parts Delivery Rate**: $\mathbf{R_f = n_p \times R_d = n_p \frac{v_c}{s_c}}$ (parts/min), $n_p$ = parts per carrier.
* **Station Passage Time**: $\mathbf{T_p = \frac{L_c}{v_c}}$ — upper bound on loading/unloading time without stopping the line.

---

### 6. Routing — TSP & Nearest Neighbour
* **TSP**: One vehicle visits every location **exactly once** and returns to the depot, minimising total distance. Number of tours $= \frac{(n-1)!}{2}$ (7 stops → 360; 20 stops → $\approx 6 \times 10^{16}$) → **heuristics** are used: fast, feasible, not guaranteed optimal.
* **Nearest Neighbour Rule**: From the current location, always go to the **closest unvisited** location; when all are visited, return to the start. **Never forget the return leg.**
  * *Lecture example*: NN tour A–E–B–D–C–F–G–A = **64** vs optimal A–G–B–F–C–D–E–A = **60** → NN is 6.7% worse. **Tie-breaking matters**: breaking the E tie toward G instead of B gives 69 — greedy early choices force expensive late legs (F→G = 21).

---

### 7. Vehicle Routing — Clark-Wright Savings Method
* **Savings Formula**: $\mathbf{S_{ij} = C_{0i} + C_{0j} - C_{ij}}$ — joining stops $i$ and $j$ on one route removes two depot returns and adds the direct leg $i \to j$.
* **Procedure**: 1. Start with one out-and-back route per stop | 2. Compute $S_{ij}$ for every pair | 3. **Rank savings descending** | 4. Link pairs in that order — check **truck capacity** before every link; a stop can only join at a route **end**; skip pairs already on the same route.
* **Minimum Trucks**: $\mathbf{\left\lceil \frac{\text{Total Demand}}{\text{Capacity}} \right\rceil}$ (round up).
  * *Lecture example*: Capacity 25,000; demands B 5,000, C 7,000, D 10,000, E 4,000, F 6,000, G 10,000 (total 42,000 → ≥ 2 trucks). Top savings: $S_{CD} = 21 + 20 - 1 = 40$; $S_{CF} = 21 + 24 - 9 = 36$; $S_{DF} = 35$ (skip — same route); $S_{BF} = 28$ (**reject** — load would be 28,000 > 25,000). Final routes: Depot–F–C–D–Depot = 54 and Depot–E–B–G–Depot = 35 → **total 89**.

---

### 8. Exam Traps
* Rounding the AGV fleet **down** instead of up | Forgetting the **empty return** $L_e/v_c$ in $T_c$ | Forgetting the **return leg** in a TSP tour | Linking a Clark-Wright pair that **breaks capacity** | Revisiting an already-visited stop in Nearest Neighbour.
