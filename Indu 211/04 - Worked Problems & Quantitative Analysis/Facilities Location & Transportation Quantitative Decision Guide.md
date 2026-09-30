# INDU 211 · Worked Problems & Quantitative Analysis
# Facilities Location & Transportation Quantitative Decision Guide
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)**

---

## 1. The Mathematical Framework of Facility Location

In industrial and systems engineering, locating a facility (a manufacturing plant, regional distribution warehouse, or emergency medical center) requires rigorous mathematical modeling. Quantitative decision models balance two primary elements:
1. **Spatial Geometry (Distance Metrics)**: How travel distance is measured between geographic coordinates $(x_1, y_1)$ and $(x_2, y_2)$.
2. **Economic Optimization (Objective Function)**: Minimizing the sum of volume-weighted transport costs, or minimizing the maximum response time.

### Fundamental Equations

$$\begin{aligned}
\text{Euclidean Distance (Straight-line, } L_2\text{): } & d_E = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} \\
\text{Rectilinear Distance (Manhattan / Grid, } L_1\text{): } & d_R = |x_1 - x_2| + |y_1 - y_2| \\
\text{Unweighted Center of Gravity: } & \bar{x} = \frac{\sum_{i=1}^n x_i}{n}, \quad \bar{y} = \frac{\sum_{i=1}^n y_i}{n} \\
\text{Weighted Center of Gravity: } & \bar{x} = \frac{\sum_{i=1}^n Q_i x_i}{\sum_{i=1}^n Q_i}, \quad \bar{y} = \frac{\sum_{i=1}^n Q_i y_i}{\sum_{i=1}^n Q_i} \\
\text{Rectilinear 1-Median Problem: } & \min_{(x, y)} \sum_{i=1}^n Q_i \left( |x - x_i| + |y - y_i| \right) \\
\text{Transportation Model Objective: } & \min Z = \sum_{i=1}^m \sum_{j=1}^n c_{ij} x_{ij}
\end{aligned}$$

---

## 2. Problem 1: Center of Gravity Analysis (Blood Bank Case Study)

### Problem Statement (Lecture Slides 17–22)
A municipal public health authority needs to locate a new central blood bank to supply blood products to four regional hospitals: $D_1, D_2, D_3,$ and $D_4$. 
The city street network follows an orthogonal Cartesian grid with the following hospital coordinates:
* **Hospital $D_1$**: $(2, 2)$
* **Hospital $D_2$**: $(3, 5)$
* **Hospital $D_3$**: $(5, 4)$
* **Hospital $D_4$**: $(8, 5)$

```
   y ▲
   6 ┼
   5 ┼        D2 (3,5)                    D4 (8,5)
   4 ┼                              D3 (5,4)
   3 ┼
   2 ┼    D1 (2,2)
   1 ┼
   0 ┼───┼───┼───┼───┼───┼───┼───┼───┼───► x
     0   1   2   3   4   5   6   7   8
```

### Questions:
1. **Scenario A (Equal Shipments)**: Determine the optimal coordinates $(\bar{x}, \bar{y})$ if all four hospitals receive identical weekly blood shipments.
2. **Scenario B (Unequal Shipments)**: Determine the optimal coordinates $(\bar{x}, \bar{y})$ if weekly delivery requirements vary as follows:
   * $D_1$: 800 units/week
   * $D_2$: 900 units/week
   * $D_3$: 200 units/week
   * $D_4$: 100 units/week
3. **Managerial Analysis**: Explain the physical and economic reason why the location shifted between Scenario A and Scenario B.

---

### Step-by-Step Solution

#### Part 1: Scenario A (Equal Shipment Volumes)
When quantities are uniform ($Q_1 = Q_2 = Q_3 = Q_4$), the centroid formula is the simple arithmetic mean:
$$\bar{x} = \frac{\sum_{i=1}^n x_i}{n} = \frac{x_1 + x_2 + x_3 + x_4}{4}$$
$$\bar{x} = \frac{2 + 3 + 5 + 8}{4} = \frac{18}{4} = \mathbf{4.50}$$

$$\bar{y} = \frac{\sum_{i=1}^n y_i}{n} = \frac{y_1 + y_2 + y_3 + y_4}{4}$$
$$\bar{y} = \frac{2 + 5 + 4 + 5}{4} = \frac{16}{4} = \mathbf{4.00}$$

> **Result**: The optimal unweighted blood bank location is **$(\bar{x}, \bar{y}) = (4.50, 4.00)$**.

---

#### Part 2: Scenario B (Varying Shipment Volumes)
When shipment quantities differ, we compute the volume-weighted centroid. 

We construct a standardized calculation table:

| Hospital ($i$) | $x_i$ | $y_i$ | Volume $Q_i$ (units) | $Q_i \cdot x_i$ | $Q_i \cdot y_i$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **$D_1$** | 2 | 2 | 800 | $800 \times 2 = 1,600$ | $800 \times 2 = 1,600$ |
| **$D_2$** | 3 | 5 | 900 | $900 \times 3 = 2,700$ | $900 \times 5 = 4,500$ |
| **$D_3$** | 5 | 4 | 200 | $200 \times 5 = 1,000$ | $200 \times 4 = 800$ |
| **$D_4$** | 8 | 5 | 100 | $100 \times 8 = 800$ | $100 \times 5 = 500$ |
| **Total ($\sum$)** | — | — | **2,000** | **6,100** | **7,400** |

Now evaluate the weighted coordinates:
$$\bar{x} = \frac{\sum_{i=1}^4 Q_i x_i}{\sum_{i=1}^4 Q_i} = \frac{6,100}{2,000} = \mathbf{3.05}$$

$$\bar{y} = \frac{\sum_{i=1}^4 Q_i y_i}{\sum_{i=1}^4 Q_i} = \frac{7,400}{2,000} = \mathbf{3.70}$$

> **Result**: The optimal weighted blood bank location is **$(\bar{x}, \bar{y}) = (3.05, 3.70)$**.

---

#### Part 3: Engineering & Managerial Interpretation
* In Scenario A, hospital $D_4$ at $(8, 5)$ pulled the unweighted centroid far to the east ($\bar{x} = 4.50$).
* In Scenario B, hospitals $D_1$ and $D_2$ account for **85% of total demand** ($800 + 900 = 1,700$ out of $2,000$ units). Hospital $D_4$ represents only 5% of demand.
* Consequently, the weighted centroid moves significantly southwest from $(4.50, 4.00)$ to $(3.05, 3.70)$, positioning the facility close to the high-volume hospitals $D_1$ and $D_2$. This drastically minimizes weekly delivery miles.

---

## 3. Problem 2: Rectilinear 1-Median Location Heuristic

### Problem Statement (Textbook Example 4.3 / Slide 21)
Because city delivery takes place over an orthogonal grid, transportation costs are strictly proportional to **rectilinear distance**:
$$TC(x, y) = \sum_{i=1}^n Q_i \left( |x - x_i| + |y - y_i| \right)$$

1. Apply the **Rectilinear 1-Median Heuristic** to determine the optimal facility coordinates $(x^*, y^*)$ for the weighted hospital problem ($Q_1=800, Q_2=900, Q_3=200, Q_4=100$).
2. Compare the total weekly transport distance incurred at the **Median solution $(x^*, y^*)$** versus the **Center of Gravity solution $(3.05, 3.70)$**.

---

### Step-by-Step Solution

#### Part 1: Finding the Median Coordinates
Total weekly volume is $Q_{tot} = 2,000$ units.
The median threshold is **50% of total volume**:
$$\text{Threshold} = \frac{1}{2} \sum_{i=1}^n Q_i = \frac{2,000}{2} = 1,000 \text{ units}$$

##### Step 1: Solve for $x^*$ independently
Sort the destinations by ascending $x$-coordinate and accumulate weekly volume:

| Destination | $x_i$ | Volume $Q_i$ | Cumulative Volume $\sum Q$ | Condition ($\ge 1,000$) |
| :---: | :---: | :---: | :---: | :---: |
| **$D_1$** | 2 | 800 | 800 | No ($800 < 1,000$) |
| **$D_2$** | 3 | 900 | **1,700** | **YES ($1,700 \ge 1,000$)** |
| **$D_3$** | 5 | 200 | 1,900 | — |
| **$D_4$** | 8 | 100 | 2,000 | — |

The cumulative volume crosses the $1,000$-unit mark at $x = 3$.
$$\mathbf{x^* = 3}$$

##### Step 2: Solve for $y^*$ independently
Sort the destinations by ascending $y$-coordinate and accumulate weekly volume:

| Destination | $y_i$ | Volume $Q_i$ | Cumulative Volume $\sum Q$ | Condition ($\ge 1,000$) |
| :---: | :---: | :---: | :---: | :---: |
| **$D_1$** | 2 | 800 | 800 | No ($800 < 1,000$) |
| **$D_3$** | 4 | 200 | **1,000** | **YES ($1,000 \ge 1,000$)** |
| **$D_2$** | 5 | 900 | 1,900 | — |
| **$D_4$** | 5 | 100 | 2,000 | — |

The cumulative volume exactly reaches $1,000$ at $y = 4$ and continues to $y = 5$. Any coordinate in the closed interval $[4, 5]$ achieves the theoretical minimum cost. Selecting $y^* = 5$ collocates the facility with Hospital $D_2$ ($900$ units), eliminating delivery distance for the single largest customer.
$$\mathbf{y^* = 5 \quad (\text{or any } y \in [4, 5])}$$

> **Median Heuristic Solution**: Locating at **$(3, 5)$** (co-siting directly at Hospital $D_2$).

---

#### Part 2: Quantitative Distance Comparison

##### Evaluation at Median Solution $(3, 5)$:
$$TC(3, 5) = \sum_{i=1}^4 Q_i (|3 - x_i| + |5 - y_i|)$$
* To $D_1 (2, 2)$: $800 \times (|3 - 2| + |5 - 2|) = 800 \times (1 + 3) = 800 \times 4 = 3,200$
* To $D_2 (3, 5)$: $900 \times (|3 - 3| + |5 - 5|) = 900 \times (0 + 0) = 0$
* To $D_3 (5, 4)$: $200 \times (|3 - 5| + |5 - 4|) = 200 \times (2 + 1) = 200 \times 3 = 600$
* To $D_4 (8, 5)$: $100 \times (|3 - 8| + |5 - 5|) = 100 \times (5 + 0) = 100 \times 5 = 500$
$$\mathbf{TC(3, 5) = 3,200 + 0 + 600 + 500 = 4,300 \text{ unit-distance}}$$

##### Evaluation at Center of Gravity Solution $(3.05, 3.70)$:
$$TC(3.05, 3.70) = \sum_{i=1}^4 Q_i (|3.05 - x_i| + |3.70 - y_i|)$$
* To $D_1 (2, 2)$: $800 \times (|3.05 - 2| + |3.70 - 2|) = 800 \times (1.05 + 1.70) = 800 \times 2.75 = 2,200$
* To $D_2 (3, 5)$: $900 \times (|3.05 - 3| + |3.70 - 5|) = 900 \times (0.05 + 1.30) = 900 \times 1.35 = 1,215$
* To $D_3 (5, 4)$: $200 \times (|3.05 - 5| + |3.70 - 4|) = 200 \times (1.95 + 0.30) = 200 \times 2.25 = 450$
* To $D_4 (8, 5)$: $100 \times (|3.05 - 8| + |3.70 - 5|) = 100 \times (4.95 + 1.30) = 100 \times 6.25 = 625$
$$\mathbf{TC(3.05, 3.70) = 2,200 + 1,215 + 450 + 625 = 4,490 \text{ unit-distance}}$$

> ### Key Industrial Engineering Finding:
> The **Median location $(3, 5)$** yields **$4,300$ unit-distances**, saving **$190$ unit-distances per week** (a $4.2\%$ cost reduction) compared to the Center of Gravity centroid ($4,490$).
> 
> * **Theoretical Insight**: Center of Gravity minimizes *squared Euclidean distance* ($\sum d_i^2$). For rectilinear travel, the **1-Median method** is mathematically guaranteed to find the true cost-minimizing coordinate!

---

## 4. Problem 3: Multi-Facility Transportation Model (Plain View Manufacturing Co.)

### Problem Statement (Lecture Slides 10–16)
Plain View Manufacturing Company manufactures computer peripheral units at existing factories in **Amarillo** and **Waco**, Texas. Demand at its three distribution warehouses in **San Antonio**, **Dallas**, and **Houston** has exceeded factory output. 
The president proposes constructing a new plant in **Huntsville**, Texas, bringing total system capacity to 2,000 units/month.

#### Operational Data:
* **Monthly Factory Capacities**:
  * Amarillo ($F_1$): 400 units
  * Waco ($F_2$): 1,000 units
  * Huntsville ($F_3$): 600 units
  * **Total Supply = 2,000 units**
* **Monthly Warehouse Demands**:
  * San Antonio ($W_1$): 300 units
  * Dallas ($W_2$): 900 units
  * Houston ($W_3$): 800 units
  * **Total Demand = 2,000 units** *(Supply equals Demand $\implies$ Balanced model)*

#### Unit Shipping Cost Matrix ($c_{ij}$ in \$/unit):
| Factory \ Warehouse | San Antonio ($W_1$) | Dallas ($W_2$) | Houston ($W_3$) | Factory Capacity ($S_i$) |
| :--- | :---: | :---: | :---: | :---: |
| **Amarillo ($F_1$)** | \$31 | \$21 | \$42 | **400** |
| **Waco ($F_2$)** | \$20 | \$21 | \$30 | **1,000** |
| **Huntsville ($F_3$)** | \$23 | \$20 | \$15 | **600** |
| **Warehouse Demand ($D_j$)** | **300** | **900** | **800** | **2,000** |

### Questions:
1. Apply the **Least-Cost Assignment Method** to find a feasible initial shipment allocation and compute the total monthly transportation cost.
2. Demonstrate how an alternative tie-break choice affects the total cost.

---

### Step-by-Step Solution

#### Iteration 1:
* Find the global minimum unit cost in the active matrix:
  $$c_{33} = \$15 \quad (\text{Huntsville } \to \text{Houston})$$
* Maximum possible allocation:
  $$x_{33} = \min(S_3, D_3) = \min(600, 800) = \mathbf{600 \text{ units}}$$
* Update balances:
  * Huntsville remaining capacity: $600 - 600 = 0$ **(Row 3 satisfied & eliminated)**.
  * Houston remaining demand: $800 - 600 = 200$ units.

#### Iteration 2:
* Scan remaining active cells (Amarillo and Waco rows):
  * Amarillo: \$31, \$21, \$42
  * Waco: \$20, \$21, \$30
* Minimum active unit cost:
  $$c_{21} = \$20 \quad (\text{Waco } \to \text{San Antonio})$$
* Maximum possible allocation:
  $$x_{21} = \min(S_2, D_1) = \min(1,000, 300) = \mathbf{300 \text{ units}}$$
* Update balances:
  * San Antonio remaining demand: $300 - 300 = 0$ **(Column 1 satisfied & eliminated)**.
  * Waco remaining capacity: $1,000 - 300 = 700$ units.

#### Iteration 3:
* Remaining active cells:
  * Amarillo $\to$ Dallas ($c_{12} = \$21$)
  * Amarillo $\to$ Houston ($c_{13} = \$42$)
  * Waco $\to$ Dallas ($c_{22} = \$21$)
  * Waco $\to$ Houston ($c_{23} = \$30$)
* Minimum cost is a tie at **\$21/unit**:
  * Option A: Allocate to Amarillo $\to$ Dallas ($c_{12} = \$21$).
* Maximum allocation:
  $$x_{12} = \min(S_1, D_2) = \min(400, 900) = \mathbf{400 \text{ units}}$$
* Update balances:
  * Amarillo remaining capacity: $400 - 400 = 0$ **(Row 1 satisfied & eliminated)**.
  * Dallas remaining demand: $900 - 400 = 500$ units.

#### Iteration 4:
* Only Waco remains active with $700$ units of supply.
* Warehouse requirements remaining:
  * Dallas needs: $500$ units ($c_{22} = \$21$)
  * Houston needs: $200$ units ($c_{23} = \$30$)
* Complete assignments from Waco:
  $$x_{22} = \mathbf{500 \text{ units}} \quad (\text{Dallas demand satisfied to 0})$$
  $$x_{23} = \mathbf{200 \text{ units}} \quad (\text{Houston demand satisfied to 0})$$
* Waco capacity: $700 - 500 - 200 = 0$ **(Row 2 satisfied & exhausted)**.

---

### Final Assignment Tableau (Primary Solution)

| Factory \ Warehouse | San Antonio ($W_1$) | Dallas ($W_2$) | Houston ($W_3$) | Total Shipped |
| :--- | :---: | :---: | :---: | :---: |
| **Amarillo ($F_1$)** | — | **400** [@ \$21] | — | **400** |
| **Waco ($F_2$)** | **300** [@ \$20] | **500** [@ \$21] | **200** [@ \$30] | **1,000** |
| **Huntsville ($F_3$)** | — | — | **600** [@ \$15] | **600** |
| **Total Received** | **300** | **900** | **800** | **2,000** |

#### Total Monthly Shipping Cost:
$$\begin{aligned}
TC &= (x_{33} \times c_{33}) + (x_{21} \times c_{21}) + (x_{12} \times c_{12}) + (x_{22} \times c_{22}) + (x_{23} \times c_{23}) \\
&= (600 \times \$15) + (300 \times \$20) + (400 \times \$21) + (500 \times \$21) + (200 \times \$30) \\
&= \$9,000 + \$6,000 + \$8,400 + \$10,500 + \$6,000 \\
&= \mathbf{\$39,900 \text{ per month}}
\end{aligned}$$

*(Note: In lecture slides, this is expressed as $6 \times 15 + 3 \times 20 + 4 \times 21 + 5 \times 21 + 2 \times 30 = \$399 \times 100 = \$39,900$).*

---

### Alternative Tie-Break Allocation (Lecture Slide 16)
In Iteration 3, suppose the tie at $\$21$ was broken by allocating all available capacity of Waco ($700$ units) to Dallas:
1. Allocate Waco $\to$ Dallas: $x_{22} = \min(700, 900) = \mathbf{700}$ units. (Waco exhausted).
2. Dallas still requires: $900 - 700 = 200$ units.
3. Allocate Amarillo $\to$ Dallas: $x_{12} = \min(400, 200) = \mathbf{200}$ units [@ \$21]. (Dallas satisfied).
4. Amarillo still has: $400 - 200 = 200$ units.
5. Houston still needs: $800 - 600 = 200$ units.
6. Force Amarillo $\to$ Houston: $x_{13} = \mathbf{200}$ units [@ \$42].

#### Total Cost for Alternative Solution:
$$\begin{aligned}
TC_{\text{alt}} &= (600 \times \$15) + (300 \times \$20) + (200 \times \$21) + (700 \times \$21) + (200 \times \$42) \\
&= \$9,000 + \$6,000 + \$4,200 + \$14,700 + \$8,400 \\
&= \mathbf{\$42,300 \text{ per month}}
\end{aligned}$$

*(Expressed as $\$423 \times 100$ in lecture slides).*

> ### Critical Managerial Takeaway:
> Breaking the tie sub-optimally forced 200 units onto the very expensive Amarillo-to-Houston route at **\$42/unit**, incurring an extra **$\$2,400/\text{month}$ ($\$28,800/\text{year}$)** in avoidable transportation waste! This underscores why linear programming solvers (e.g., the Simplex-based Transportation Algorithm) are essential to find the true global optimum.

---

## 5. Problem 4: Quantitative Distance Metric Comparison & Grid Distortion

### Problem Statement
A manufacturing engineer is analyzing part transit between Workstation A $(10, 15)$ and Workstation B $(70, 95)$ (coordinates in meters).
1. Calculate the straight-line Euclidean distance $d_E$.
2. Calculate the factory aisle Rectilinear distance $d_R$.
3. Compute the percentage elongation penalty imposed by the orthogonal factory grid.
4. If an AGV travels at $1.5\text{ m/s}$, calculate the transit time difference between the two paths.

---

### Step-by-Step Solution

#### Part 1: Coordinate Deltas
$$\Delta x = |70 - 10| = 60 \text{ meters}$$
$$\Delta y = |95 - 15| = 80 \text{ meters}$$

#### Part 2: Distance Calculations
* **Euclidean Distance**:
  $$d_E = \sqrt{\Delta x^2 + \Delta y^2} = \sqrt{60^2 + 80^2} = \sqrt{3,600 + 6,400} = \sqrt{10,000} = \mathbf{100.0 \text{ meters}}$$
* **Rectilinear Distance**:
  $$d_R = |\Delta x| + |\Delta y| = 60 + 80 = \mathbf{140.0 \text{ meters}}$$

#### Part 3: Elongation Penalty
$$\text{Penalty Ratio} = \frac{d_R}{d_E} = \frac{140}{100} = \mathbf{1.40}$$
$$\text{Percentage Increase} = \frac{140 - 100}{100} \times 100\% = \mathbf{+40.0\%}$$

#### Part 4: AGV Transit Time Difference
$$t_E = \frac{100 \text{ m}}{1.5 \text{ m/s}} = 66.67 \text{ seconds}$$
$$t_R = \frac{140 \text{ m}}{1.5 \text{ m/s}} = 93.33 \text{ seconds}$$
$$\Delta t = 93.33 - 66.67 = \mathbf{26.66 \text{ seconds per transit}}$$

> **Industrial Engineering Impact**: Over 500 AGV runs per day, rectilinear grid routing consumes an additional **3.7 hours of daily AGV travel time**, proving why aisle layout design directly affects fleet sizing and capital equipment expenditures.
