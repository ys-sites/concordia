# INDU 211: Introduction to Production & Manufacturing Systems
## Midterm Quantitative Problem Guide: Demand Forecasting & Warehouse TSP Routing
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

## Executive Summary & Midterm Exam Alignment

In the Concordia INDU 211 curriculum (under Dr. Masoumeh Kazemi Zanjani), the **Midterm Examination (Week 6, 35% of Total Grade)** encompasses all material taught in **Weeks 1 through 5** (Chapters 1, 2, 3, 4, 5, and 7):
* **Week 1**: Introduction to Industrial Engineering, Ethics, and Systems Thinking (Chapters 1 & 2)
* **Weeks 2–3**: Facilities Location, Plant Layout, Material Handling, Distribution & Routing (Chapters 3, 4, and 5)
* **Weeks 4–5**: Operations Planning and Control, Aggregate Planning, Inventory & Demand Forecasting (Chapter 7)

From the official INDU 211 Problem Solutions series, exactly **two video problems** directly cover the quantitative core of the Midterm Exam:
1. **Video 1: Forecasting Problem (`SOivSDdtTH8`)** — *Chapter 7: Operations Planning & Control*. Covers moving-average demand forecasting, forecast error evaluation, and competitive market share decomposition.
2. **Video 5: Traveling Salesperson Problem (TSP) (`ayqA56IHMZ0`)** — *Chapter 5: Materials Handling, Distribution & Routing*. Covers warehouse routing, asymmetric distance matrices, greedy nearest-neighbor heuristics, sub-optimality proofs, and combinatorial search complexity. *(Note: This video solves the exact 18-mark Problem 2 from the Concordia Midterm Exam!)*

Below is the exhaustive, step-by-step mathematical dissection, background theory, worked solutions, and exam trap analyses for both midterm topics.

---

# MODULE 1: Demand Forecasting & Market Share Modeling (Video 1)

### Curriculum Context: Chapter 7 — Operations Planning & Control
* **Video Reference**: `INDU 211 - Forecasting Problem` (Duration: 20:35)
* **Exam Weight**: High-frequency quantitative question (Typically 10–15 marks on Midterm)

---

### 1.1 Theoretical Engineering Principles

Demand forecasting forms the foundational bedrock of all aggregate production planning, master production scheduling (MPS), materials requirement planning (MRP), and capacity management. 

#### Core Characteristics of Forecasts in Industrial Engineering:
1. **Forecasts are almost always inaccurate**: They provide estimated mean values because real-world customer demand contains intrinsic stochastic randomness.
2. **Forecast accuracy decreases as the time horizon increases**: Short-term forecasts (e.g., next week) are significantly more accurate than long-term forecasts (e.g., 2 years out).
3. **Aggregate forecasts are more reliable than individual item forecasts**: Grouping product variants reduces overall variance ($\sigma_{\text{group}} < \sum \sigma_i$).

#### The Moving Average Method:
The simple $n$-period moving average is an objective time-series forecasting technique used when demand exhibits no noticeable long-term trend or seasonal pattern. It acts as a low-pass filter, smoothing out random noise by averaging the most recent $n$ observed historical demands:

$$\hat{X}_t = \frac{1}{n} \sum_{i=1}^{n} X_{t-i} = \frac{X_{t-1} + X_{t-2} + \dots + X_{t-n}}{n}$$

Where:
* $\hat{X}_t$ = Forecasted demand for period $t$
* $X_{t-i}$ = Actual realized historical demand in period $t-i$
* $n$ = Number of historical periods included in the moving average

> **The Responsiveness vs. Stability Trade-off:**
> * **Smaller $n$ (e.g., $n=2$ or $n=3$)**: High responsiveness to recent demand changes; reacts quickly to real shifts, but also overreacts to random fluctuations (noisy).
> * **Larger $n$ (e.g., $n=5$ or $n=10$)**: High stability and strong smoothing effect; dampens random variance effectively, but lags significantly behind real market trends.

---

### 1.2 Problem Statement & Historical Data

**Company ABC** manufactures and sells four distinct models of computer monitors (Product 1, Product 2, Product 3, and Product 4). The historical weekly sales figures recorded over the past five weeks are summarized in the master table below:

| Week ($t$) | Product 1 ($X_{1,t}$) | Product 2 ($X_{2,t}$) | Product 3 ($X_{3,t}$) | Product 4 ($X_{4,t}$) | Total ABC Sales ($X_{\text{total},t}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Week 1** | 20 | 55 | 42 | 48 | **165** |
| **Week 2** | 25 | 50 | 32 | 35 | **142** |
| **Week 3** | 50 | 80 | 65 | 80 | **275** |
| **Week 4** | 55 | 98 | 88 | 90 | **331** |
| **Week 5** | 45 | 95 | 72 | 90 | **302** |

---

### 1.3 Step-by-Step Problem Solutions

#### Part 2.1.1: 3-Period Moving Average Forecast for Product 1 in Week 6

* **Objective**: Forecast the expected sales of Product 1 for **Week 6** ($\hat{X}_{1,6}$) using a **3-period moving average** ($n=3$).
* **Selection of Historical Periods**:
  To forecast for period $t=6$, select the preceding $n=3$ consecutive periods: Week 5, Week 4, and Week 3.
  * $X_{1,5} = 45\text{ units}$ (Week 5)
  * $X_{1,4} = 55\text{ units}$ (Week 4)
  * $X_{1,3} = 50\text{ units}$ (Week 3)

* **Mathematical Calculation**:
  $$\hat{X}_{1,6} = \frac{X_{1,5} + X_{1,4} + X_{1,3}}{3} = \frac{45 + 55 + 50}{3} = \frac{150}{3} = 50\text{ units}$$

* **Conclusion**: Company ABC should plan production and component procurement to deliver **50 units** of Product 1 in Week 6.

---

#### Part 2.1.2: 3-Period Moving Average Forecast for Product 2 in Week 5 & Error Analysis

* **Objective**: Forecast the sales of Product 2 for **Week 5** ($\hat{X}_{2,5}$) using a **3-period moving average** ($n=3$), and evaluate the forecast error relative to actual sales.
* **Selection of Historical Periods**:
  To forecast for period $t=5$, select the preceding $n=3$ consecutive periods: Week 4, Week 3, and Week 2.
  * $X_{2,4} = 98\text{ units}$ (Week 4)
  * $X_{2,3} = 80\text{ units}$ (Week 3)
  * $X_{2,2} = 50\text{ units}$ (Week 2)

* **Mathematical Calculation**:
  $$\hat{X}_{2,5} = \frac{X_{2,4} + X_{2,3} + X_{2,2}}{3} = \frac{98 + 80 + 50}{3} = \frac{228}{3} = 76\text{ units}$$

* **Forecast Error & Business Implications**:
  * Realized Actual Demand in Week 5: $X_{2,5} = 95\text{ units}$
  * Absolute Forecast Error:
    $$e_5 = X_{2,5} - \hat{X}_{2,5} = 95 - 76 = +19\text{ units}$$
  * Percentage Error:
    $$\% \text{ Error} = \frac{95 - 76}{95} \times 100\% = +20.0\%$$

* **Industrial Engineering Interpretation**:
  The moving average method substantially **underestimated** actual customer demand by 19 units. In a manufacturing environment, an unhedged forecast underestimation causes:
  1. Stockouts and lost sales revenue.
  2. Diminished customer goodwill.
  3. Emergency overtime labor or expedited freight costs to meet unexpected demand.
  This demonstrates why growing demand requires trend-adjusted exponential smoothing rather than a static moving average.

---

#### Part 2.2: Competitive Market Share & Competitor Sales Forecast

* **Problem Context**:
  A local competitor, **Company XYZ**, produces and sells **Product 5** (a competing computer monitor). Historical industrial market research reveals:
  * Company XYZ's Product 5 consistently captures a **20% market share** ($MS_{\text{XYZ}} = 0.20$) of the regional monitor market.
  * Company ABC's four products (Products 1–4) collectively command the remaining **80% market share** ($MS_{\text{ABC}} = 0.80$).
  * Company ABC wishes to use its internal sales data with a **4-period moving average** ($n=4$) to estimate the total market volume and predict the number of units of Product 5 sold by XYZ in **Week 5**.

* **Step 1: Aggregate Historical Total Sales for Company ABC**:
  Sum all monitor sales (Products 1 through 4) for Weeks 1 through 4:
  * Week 1 Total: $X_{\text{total},1} = 20 + 55 + 42 + 48 = 165\text{ units}$
  * Week 2 Total: $X_{\text{total},2} = 25 + 50 + 32 + 35 = 142\text{ units}$
  * Week 3 Total: $X_{\text{total},3} = 50 + 80 + 65 + 80 = 275\text{ units}$
  * Week 4 Total: $X_{\text{total},4} = 55 + 98 + 88 + 90 = 331\text{ units}$

* **Step 2: 4-Period Moving Average Forecast for ABC in Week 5**:
  $$\hat{X}_{\text{total},5} = \frac{X_{\text{total},4} + X_{\text{total},3} + X_{\text{total},2} + X_{\text{total},1}}{4} = \frac{331 + 275 + 142 + 165}{4} = \frac{913}{4} = 228.25\text{ units}$$

* **Step 3: Total Market Volume Estimation ($W$)**:
  Since ABC's projected total sales represent 80% of the entire regional market:
  $$\hat{X}_{\text{total},5} = W \times 0.80 \implies W = \frac{\hat{X}_{\text{total},5}}{0.80} = \frac{228.25}{0.80} = 285.3125\text{ units}$$

* **Step 4: Competitor XYZ Product 5 Sales Forecast**:
  Company XYZ captures 20% of the total market $W$:
  $$\hat{Y}_{\text{XYZ},5} = W \times 0.20 = 285.3125 \times 0.20 = 57.0625\text{ units}$$

  Since manufactured physical products must be integer quantities:
  $$\hat{Y}_{\text{XYZ},5} \approx 57\text{ units}$$

---

### 1.4 High-Yield Midterm Exam Traps for Forecasting

| Trap Type | Common Student Error | Correct Exam Method |
| :--- | :--- | :--- |
| **Period Indexing** | Including period $t$ when computing the forecast for period $t$. | A forecast for period $t$ uses periods **strictly prior** to $t$ ($t-1, t-2, \dots, t-n$). |
| **Market Share Inversion** | Multiplying ABC's sales by 0.80 instead of dividing ($228.25 \times 0.80$). | ABC's sales represent a *subset* of the total market. You must divide by 0.80 to expand to 100% market size. |
| **Integer Rounding** | Leaving final physical goods answers as decimals (e.g., $57.06$ monitors). | State the exact calculation ($57.0625$), then state: *"Rounded to nearest integer = 57 physical units."* |

---

# MODULE 2: Traveling Salesperson Problem (TSP) & Warehouse Routing (Video 5)

### Curriculum Context: Chapter 5 — Materials Handling, Distribution & Routing
* **Video Reference**: `INDU 211 - TSP Problem` (Duration: 15:24)
* **Exam Weight**: Critical 18-mark problem on Concordia Midterm (Concordia 2020 Midterm Exam Problem 2)

---

### 2.1 Theoretical Foundations of Routing & Heuristics

In industrial facilities, material handling represents **30% to 95% of total manufacturing costs**, yet adds zero value to the finished product. Optimizing equipment routes (such as forklift trucks, automated guided vehicles [AGVs], and tugger trains) directly reduces operational operating expenses.

#### Mathematical Formulation of the Traveling Salesperson Problem (TSP):
Given a set of $n$ physical locations (a home depot/parking area $P$ and $n-1$ department pickup/drop-off points) and a distance matrix $D = [d_{ij}]$:
* The objective is to find a closed tour starting at $P$, visiting every department **exactly once**, and returning to $P$, such that total travel distance is minimized:
  $$\min Z = \sum_{i} \sum_{j} d_{ij} x_{ij}$$
* **Asymmetric Distance Matrix ($d_{ij} \neq d_{ji}$)**: Occurs in real-world factories due to **one-way warehouse corridors**, traffic lanes, elevation changes, or gravity conveyor slopes.

#### The Curse of Dimensionality & NP-Hardness:
TSP belongs to the class of **NP-hard** combinatorial optimization problems:
* For an asymmetric TSP with $n$ locations starting at fixed depot $P$, the number of unique possible closed tour permutations is:
  $$\text{Total Tours} = (n-1)!$$
* As $n$ increases, the search space grows factorially. Exact manual brute-force evaluation becomes physically impossible, necessitating **heuristic algorithms**.

#### The Nearest Neighbor (NN) Heuristic:
A greedy construction heuristic that builds a tour step-by-step:
1. Start at the depot $P$. Mark $P$ as visited.
2. From the current node $i$, find the unvisited node $j$ with the minimum travel distance $d_{ij}$.
3. Move to node $j$ and mark $j$ as visited.
4. Repeat Steps 2 and 3 until all nodes are visited.
5. Return from the final visited node back to the initial depot $P$.

---

### 2.2 The Concordia Midterm Problem & Distance Matrix

A warehouse forklift truck is parked at depot **P** and must visit five production departments (**A, B, C, D, E**) once per day to deliver batch supplies, returning to **P** at the conclusion of the shift. All warehouse corridors are strictly **one-way**, creating an asymmetric distance matrix:

#### Warehouse Asymmetric Distance Matrix ($d_{ij}$ in meters):

| From \ To | P | A | B | C | D | E |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P** | — | 15 | 18 | 20 | 25 | **13** |
| **A** | 24 | — | **12** | 16 | 13 | 14 |
| **B** | 19 | 14 | — | 18 | **15** | 17 |
| **C** | **22** | 16 | 21 | — | 19 | 15 |
| **D** | 20 | 17 | 19 | **20** | — | 12 |
| **E** | 18 | **9** | 15 | 13 | 16 | — |

---

### 2.3 Step-by-Step Problem Solutions

#### Part 2.1: Nearest Neighbor (NN) Heuristic Solution

* **Step 1: Start at Depot P**:
  Examine row **P** for all unvisited destinations $\{A, B, C, D, E\}$:
  $$d_{PA}=15, \quad d_{PB}=18, \quad d_{PC}=20, \quad d_{PD}=25, \quad d_{PE}=13$$
  * Minimum distance is to **E** ($d_{PE} = 13$).
  * Tour so far: $P \to E$. Visited: $\{P, E\}$. Remaining: $\{A, B, C, D\}$.

* **Step 2: Move from E**:
  Examine row **E** for unvisited destinations $\{A, B, C, D\}$:
  $$d_{EA}=9, \quad d_{EB}=15, \quad d_{EC}=13, \quad d_{ED}=16$$
  * Minimum distance is to **A** ($d_{EA} = 9$).
  * Tour so far: $P \to E \to A$. Visited: $\{P, E, A\}$. Remaining: $\{B, C, D\}$.

* **Step 3: Move from A**:
  Examine row **A** for unvisited destinations $\{B, C, D\}$:
  $$d_{AB}=12, \quad d_{AC}=16, \quad d_{AD}=13$$
  * Minimum distance is to **B** ($d_{AB} = 12$).
  * Tour so far: $P \to E \to A \to B$. Visited: $\{P, E, A, B\}$. Remaining: $\{C, D\}$.

* **Step 4: Move from B**:
  Examine row **B** for unvisited destinations $\{C, D\}$:
  $$d_{BC}=18, \quad d_{BD}=15$$
  * Minimum distance is to **D** ($d_{BD} = 15$).
  * Tour so far: $P \to E \to A \to B \to D$. Visited: $\{P, E, A, B, D\}$. Remaining: $\{C\}$.

* **Step 5: Move from D to Last Remaining Node C**:
  The only unvisited department remaining is **C**:
  $$d_{DC} = 20$$
  * Tour so far: $P \to E \to A \to B \to D \to C$. Visited: All nodes.

* **Step 6: Return from C to Depot P**:
  Examine distance from **C** back to home depot **P**:
  $$d_{CP} = 22$$

#### Total Distance Calculation for Nearest Neighbor Tour:
$$\text{Tour 1}: P \to E \to A \to B \to D \to C \to P$$
$$\text{Total Distance} = d_{PE} + d_{EA} + d_{AB} + d_{BD} + d_{DC} + d_{CP}$$
$$\text{Total Distance} = 13 + 9 + 12 + 15 + 20 + 22 = \mathbf{91\text{ meters}}$$

---

#### Part 2.2: Second-Nearest Neighbor Variant Solution

* **Method Specification**: Select the **second nearest neighbor** on the first leg out of depot P, then revert strictly to the nearest neighbor rule for all subsequent legs.

* **Step 1: First Leg from Depot P**:
  Distances from P: $E (13), A (15), B (18), C (20), D (25)$.
  * 1st nearest: E ($13$).
  * **2nd nearest: A ($15$)**.
  * Tour so far: $P \to A$. Visited: $\{P, A\}$. Remaining: $\{B, C, D, E\}$.

* **Step 2: Move from A (Nearest Neighbor)**:
  Examine row **A** for unvisited destinations $\{B, C, D, E\}$:
  $$d_{AB}=12, \quad d_{AC}=16, \quad d_{AD}=13, \quad d_{AE}=14$$
  * Minimum is **B** ($d_{AB} = 12$).
  * Tour so far: $P \to A \to B$. Visited: $\{P, A, B\}$. Remaining: $\{C, D, E\}$.

* **Step 3: Move from B (Nearest Neighbor)**:
  Examine row **B** for unvisited destinations $\{C, D, E\}$:
  $$d_{BC}=18, \quad d_{BD}=15, \quad d_{BE}=17$$
  * Minimum is **D** ($d_{BD} = 15$).
  * Tour so far: $P \to A \to B \to D$. Visited: $\{P, A, B, D\}$. Remaining: $\{C, E\}$.

* **Step 4: Move from D (Nearest Neighbor)**:
  Examine row **D** for unvisited destinations $\{C, E\}$:
  $$d_{DC}=20, \quad d_{DE}=12$$
  * Minimum is **E** ($d_{DE} = 12$).
  * Tour so far: $P \to A \to B \to D \to E$. Visited: $\{P, A, B, D, E\}$. Remaining: $\{C\}$.

* **Step 5: Move from E to Last Node C**:
  Only unvisited node is **C**:
  $$d_{EC} = 13$$
  * Tour so far: $P \to A \to B \to D \to E \to C$.

* **Step 6: Return from C to Depot P**:
  $$d_{CP} = 22$$

#### Total Distance Calculation for Variant Tour:
$$\text{Tour 2}: P \to A \to B \to D \to E \to C \to P$$
$$\text{Total Distance} = d_{PA} + d_{AB} + d_{BD} + d_{DE} + d_{EC} + d_{CP}$$
$$\text{Total Distance} = 15 + 12 + 15 + 12 + 13 + 22 = \mathbf{89\text{ meters}}$$

---

#### Part 2.3: Comparative Analysis & Rigorous Proof of Sub-Optimality

**Question**: *Are the solutions found in 2.1 ($91\text{ m}$) or 2.2 ($89\text{ m}$) optimal? Provide concise mathematical and engineering justifications.*

* **Evaluation**: **NEITHER solution is guaranteed to be optimal.**
* **Engineering Justification**:
  1. **Heuristic Nature**: The Nearest Neighbor method is a **greedy heuristic**, not an exact optimization algorithm. It makes purely local, short-sighted decisions at each step without considering the global network topology.
  2. **The "Greedy Trap"**: By greedily choosing short legs early in the tour, the algorithm inevitably leaves unvisited nodes that are distant from each other or distant from the depot, forcing extremely costly penalty legs at the end (e.g., $D \to C = 20$ and $C \to P = 22$).
  3. **Direct Counterproof**: The fact that **Tour 2 ($89\text{ m}$)** is shorter than **Tour 1 ($91\text{ m}$)** directly proves that making the optimal local choice at step 1 ($E$ at $13\text{ m}$) led to an overall *worse* global tour ($91\text{ m}$).
  4. To guarantee true mathematical optimality, one must evaluate all $(n-1)!$ permutations via exhaustive search, or apply an exact Mixed-Integer Linear Program (MILP) with Miller-Tucker-Zemlin (MTZ) subtour elimination constraints using branch-and-bound.

---

#### Part 2.4: Total Search Search Space & Combinatorial Explosion

**Question**: *A software developer proposes a "Total Search" app that enumerates every single possible route and selects the shortest. Evaluate its optimality and compute the search space for $n=6$ and $n=21$ locations.*

* **2.4.1 Is Total Search Guaranteed Optimal?**
  * **Yes**. Total exhaustive search evaluates the objective function for 100% of feasible tour permutations in the solution space. Since the true global optimum must belong to this finite set, selecting the minimum cost tour is mathematically guaranteed to be globally optimal.

* **2.4.2 Total Number of Routes for 6 Locations (Depot P + 5 Departments)**:
  * Since the starting and ending node is fixed at depot P, we must permute the remaining 5 departments:
    $$\text{Total Routes} = (n-1)! = (6-1)! = 5!$$
    $$5! = 5 \times 4 \times 3 \times 2 \times 1 = \mathbf{120\text{ possible tours}}$$
  * A modern computer can evaluate 120 tours in less than 1 millisecond.

* **2.4.3 Total Number of Routes for 20 Additional Departments (Depot P + 20 Departments = 21 Locations)**:
  * With 20 departments to visit after starting at P:
    $$\text{Total Routes} = (21-1)! = 20! = 20 \times 19 \times 18 \times \dots \times 1$$
    $$20! = 2,432,902,008,176,640,000 \approx \mathbf{2.433 \times 10^{18}\text{ routes}}$$
  * *(If the problem states 20 total locations including P, the calculation is $(20-1)! = 19! \approx \mathbf{1.216 \times 10^{17}\text{ routes}}$).*

* **Computational Runtime Analysis**:
  Assuming a supercomputer evaluates **1 billion ($10^9$) routes per second**:
  $$\text{Execution Time} = \frac{2.433 \times 10^{18}\text{ routes}}{10^9\text{ routes/second}} = 2.433 \times 10^9\text{ seconds} \approx \mathbf{77.1\text{ YEARS}}$$
  * **Conclusion**: This massive runtime demonstrates the **Combinatorial Explosion** of NP-hard problems. Exhaustive search collapses on industrial-scale networks, proving why industrial engineers rely on integer programming solvers (e.g., CPLEX, Gurobi) or meta-heuristics (Genetic Algorithms, Simulated Annealing).

---

### 2.5 Midterm Scoring Checklist for TSP Problem (18 Marks)

```
[+] Step 1 (4 Marks): Correct Nearest Neighbor sequence (P -> E -> A -> B -> D -> C -> P).
[+] Step 2 (2 Marks): Exact sum of distances for Tour 1 (91 meters).
[+] Step 3 (4 Marks): Correct 2nd-Nearest sequence (P -> A -> B -> D -> E -> C -> P).
[+] Step 4 (2 Marks): Exact sum of distances for Tour 2 (89 meters).
[+] Step 5 (2 Marks): Sub-optimality justification (greedy heuristic, local vs global, Tour 2 < Tour 1).
[+] Step 6 (2 Marks): Total search optimality confirmed + 5! = 120 calculation.
[+] Step 7 (2 Marks): Combinatorial explosion calculation (19! = 1.216 x 10^17 or 20! = 2.433 x 10^18).
Total: 18 / 18 Marks
```
