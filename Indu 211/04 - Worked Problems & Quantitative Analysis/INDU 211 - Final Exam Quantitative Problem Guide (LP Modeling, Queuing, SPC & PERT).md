# INDU 211: Introduction to Production & Manufacturing Systems
## Final Exam Quantitative Problem Guide: Operations Research, Queuing, Quality Control & PERT
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

## Executive Summary & Final Exam Alignment

In the Concordia INDU 211 curriculum (under Dr. Masoumeh Kazemi Zanjani), the **Final Examination (50% of Total Grade)** is comprehensive but heavily concentrated on the post-midterm topics taught in **Weeks 7 through 12**:
* **Week 7**: Deterministic Operations Research Models & Linear Programming (Chapter 14)
* **Week 8**: Probabilistic Operations Research Models & Queuing Theory (Chapter 15)
* **Weeks 9–10**: Quality Control, Control Charts ($\bar{X}-R$) & Process Capability (Chapter 8)
* **Week 11**: Work Design, Work Measurement & Human Factors (Chapters 6 & 11)
* **Week 12**: Project Management, Network Scheduling, CPM & PERT (Chapter 17)

From the official INDU 211 Problem Solutions series, **five video problems** directly cover the core quantitative problem types that appear on the Final Exam:
1. **Video 2: Minimization Problem (`yTi70c0_cq8`)** — *Chapter 14: Deterministic OR Models*. Graphical method for linear programming, equality constraints, 1D line-segment feasible regions, and corner-point evaluation.
2. **Video 6: Modeling Problem (`Rwc_f6IzUQk`)** — *Chapter 14: Deterministic OR Models*. Multi-product linear programming formulation, profit maximization, material capacity, machine hour equivalence, demand thresholds, and proportional production ratios.
3. **Video 4: Queuing Theory Problem (`XT1EgQRcqmU`)** — *Chapter 15: Probabilistic OR Models*. $M/M/1$ queuing systems, traffic intensity, expected waiting and system times, multi-customer congestion probabilities, and daily operating performance.
4. **Video 7: Quality Control Problem (`1BcAZosLMb0`)** — *Chapter 8: Quality Control*. $\bar{X}-R$ control charts, out-of-control point elimination, revised process mean, process standard deviation estimation ($\hat{\sigma} = \bar{R}/d_2$), and process capability ratio ($C_p$) evaluation.
5. **Video 3: PERT Chart (`b2g1kZrEYtk`)** — *Chapter 17: Project Management*. Activity-on-Node (AON) network diagrams, precedence constraints, path enumeration, critical path identification, and project completion duration.

Below is the exhaustive mathematical dissection, step-by-step solutions, and exam scoring frameworks for each problem.

---

# MODULE 1: Linear Programming Minimization with Equality Constraints (Video 2)

### Curriculum Context: Chapter 14 — Deterministic Operations Research Models
* **Video Reference**: `INDU 211 - Minimization Problem` (Duration: 19:44)
* **Exam Weight**: High-yield 15–20 mark question on Graphical Linear Programming

---

### 1.1 Mathematical Formulation

The linear programming problem requires minimizing total cost subject to an equality constraint, an inequality constraint, and non-negativity:

$$\begin{aligned}
\text{Minimize } & Z = 4 X_1 + X_2 \\
\text{Subject to: } & X_1 + 3 X_2 = 9 \quad &\text{(Constraint 1: Equality)} \\
& X_1 + X_2 \le 5 \quad &\text{(Constraint 2: Capacity)} \\
& X_1 \ge 0, \quad X_2 \ge 0 \quad &\text{(Non-Negativity)}
\end{aligned}$$

---

### 1.2 Graphical Analysis & 1D Line-Segment Feasible Region

#### Step 1: Determine Boundary Intercepts
* **Constraint 1 ($X_1 + 3 X_2 = 9$)**:
  * Set $X_1 = 0 \implies 3 X_2 = 9 \implies X_2 = 3 \implies \mathbf{(0, 3)}$
  * Set $X_2 = 0 \implies X_1 = 9 \implies \mathbf{(9, 0)}$
  * *Crucial Realization*: Because this is a strict **equality ($=$)**, feasible points must lie **strictly ON** this line, not in a half-plane area.

* **Constraint 2 ($X_1 + X_2 \le 5$)**:
  * Set $X_1 = 0 \implies X_2 = 5 \implies \mathbf{(0, 5)}$
  * Set $X_2 = 0 \implies X_1 = 5 \implies \mathbf{(5, 0)}$
  * Feasible points lie on or below this line ($X_1 + X_2 \le 5$).

* **Non-Negativity ($X_1 \ge 0, X_2 \ge 0$)**: Restricts the solution space strictly to the First Quadrant.

#### Step 2: Determine Extremities (Corner Points) of the Feasible Region
Because of the equality constraint, the feasible region collapses from a 2D polygonal area into a **1-dimensional line segment** along $X_1 + 3 X_2 = 9$:
* **Extreme Point A (Left Bound)**:
  At the $X_2$-axis where $X_1 = 0$:
  $$0 + 3 X_2 = 9 \implies X_2 = 3 \implies \text{Point } A = \mathbf{(0, 3)}$$
  Check Constraint 2: $0 + 3 = 3 \le 5$ (Satisfied).

* **Extreme Point B (Right Bound)**:
  At the intersection of the two constraint boundaries:
  $$\begin{cases}
  X_1 + 3 X_2 = 9 \\
  X_1 + X_2 = 5 \implies X_1 = 5 - X_2
  \end{cases}$$
  Substitute $X_1$ into Constraint 1:
  $$(5 - X_2) + 3 X_2 = 9 \implies 5 + 2 X_2 = 9 \implies 2 X_2 = 4 \implies X_2 = 2$$
  $$X_1 = 5 - 2 = 3 \implies \text{Point } B = \mathbf{(3, 2)}$$
  Check Constraint 1: $3 + 3(2) = 9$ (Satisfied).

---

### 1.3 Objective Function Propagation & Optimal Solution

#### Graphical Iso-Cost Line Propagation:
Set $Z = 4 X_1 + X_2 = 5$ (arbitrary level):
* Intercepts: $(0, 5)$ and $(1.25, 0)$. Slope $= -4$.
* For a **minimization** problem, propagate the iso-cost line from the upper right inward toward the origin $(0,0)$.
* The **first point** of the feasible line segment that the iso-cost line touches (or the lowest value corner point) is the optimal minimum.

#### Corner Point Evaluation:

| Corner Point | Coordinates $(X_1, X_2)$ | Objective Function Value $Z = 4 X_1 + X_2$ | Evaluation |
| :---: | :---: | :---: | :---: |
| **Point A** | **$(0, 3)$** | $Z = 4(0) + 3 = \mathbf{3}$ | **GLOBAL MINIMUM (OPTIMAL)** |
| **Point B** | **$(3, 2)$** | $Z = 4(3) + 2 = \mathbf{14}$ | Sub-optimal |

* **Optimal Solution**:
  $$X_1^* = 0, \quad X_2^* = 3, \quad Z^* = 3$$

#### Part 3.2.3: Mathematical Characterization of All Feasible Solutions
The question asks to identify *all* feasible solutions of this linear program:
$$\text{Feasible Region } S = \left\{ (X_1, X_2) \in \mathbb{R}^2 \;\middle|\; X_1 + 3 X_2 = 9, \quad 0 \le X_1 \le 3, \quad 2 \le X_2 \le 3 \right\}$$
* **Written Explanation**: *"The feasible region consists of all points lying along the line segment $X_1 + 3 X_2 = 9$ bounded between the endpoints $(0, 3)$ and $(3, 2)$."*

---

# MODULE 2: Multi-Constraint Linear Programming Production Modeling (Video 6)

### Curriculum Context: Chapter 14 — Deterministic Operations Research Models
* **Video Reference**: `INDU 211 - Modeling Problem` (Duration: 18:11)
* **Exam Weight**: High-yield 15–20 mark LP formulation question on Final Exam

---

### 2.1 Problem Description & Technical Data

A pharmaceutical manufacturing company produces three distinct prescription drugs: **Drug A, Drug B, and Drug C**. The production process requires two specialized active ingredients (Ingredient 1 and Ingredient 2), specialized machine hours, minimum market demand thresholds, and strict proportional batch blending ratios:

* **Ingredient 1 Availability**: Maximum **4,000 grams** available.
* **Ingredient 2 Availability**: Maximum **6,000 grams** available.
* **Raw Material Usage Table (grams per unit)**:

| Ingredient | Drug A ($x_A$) | Drug B ($x_B$) | Drug C ($x_C$) | Available Supply |
| :--- | :---: | :---: | :---: | :---: |
| **Ingredient 1** | $20\text{ g}$ | $33\text{ g}$ | $50\text{ g}$ | $\le 4,000\text{ g}$ |
| **Ingredient 2** | $50\text{ g}$ | $20\text{ g}$ | $60\text{ g}$ | $\le 6,000\text{ g}$ |

* **Machine Hour Availability**:
  * One unit of Drug A requires **twice** the machine time of Drug B ($t_A = 2 t_B$).
  * One unit of Drug A requires **three times** the machine time of Drug C ($t_A = 3 t_C$).
  * Total machine time available in the factory is sufficient to produce **1,500 units of Drug A** if exclusively dedicated to Drug A.
* **Market Demand Requirements**:
  * Minimum sales demand for Drug A: at least **300 units**.
  * Minimum sales demand for Drug B: at least **400 units**.
  * Minimum sales demand for Drug C: at least **250 units**.
* **Relative Production Ratio**:
  * Production volumes must be maintained in the exact ratio:
    $$x_A : x_B : x_C = 2 : 1 : 3$$
* **Profit Margins**:
  * Profit per unit of Drug A = **$40**
  * Profit per unit of Drug B = **$30**
  * Profit per unit of Drug C = **$60**

---

### 2.2 Complete Mathematical Model Formulation

#### Step 1: Decision Variables
Let:
* $x_A$ = Number of units of Drug A produced
* $x_B$ = Number of units of Drug B produced
* $x_C$ = Number of units of Drug C produced

#### Step 2: Objective Function
Maximize total manufacturing profit:
$$\text{Maximize } Z = 40 x_A + 30 x_B + 60 x_C$$

#### Step 3: Raw Material Capacity Constraints
* **Ingredient 1**:
  $$20 x_A + 33 x_B + 50 x_C \le 4000$$
* **Ingredient 2**:
  $$50 x_A + 20 x_B + 60 x_C \le 6000$$

#### Step 4: Machine Hour Equivalence Constraint
* **Theoretical Derivation**:
  We are not provided raw hours (e.g., minutes per tablet), but rather **relative time equivalence**:
  * $t_A = 2 t_B \implies 1\text{ unit of B consumes } 0.5\text{ equivalent units of A capacity}$.
  * $t_A = 3 t_C \implies 1\text{ unit of C consumes } \frac{1}{3}\text{ equivalent units of A capacity}$.
  * Total capacity $= 1,500\text{ equivalent units of A}$.
* **Constraint Formulation**:
  $$x_A + 0.5 x_B + \frac{1}{3} x_C \le 1500$$
  *(Alternative integer form multiplying by 6: $6 x_A + 3 x_B + 2 x_C \le 9000$)*.

#### Step 5: Minimum Market Demand Constraints
To satisfy pre-committed customer orders:
$$x_A \ge 300$$
$$x_B \ge 400$$
$$x_C \ge 250$$

#### Step 6: Proportional Production Ratio Constraints
The production volumes must satisfy $x_A : x_B : x_C = 2 : 1 : 3$:
$$\frac{x_A}{2} = \frac{x_B}{1} = \frac{x_C}{3}$$
This yields two independent linear equality equations:
1. $\frac{x_A}{2} = x_B \implies x_A - 2 x_B = 0$
2. $\frac{x_C}{3} = x_B \implies 3 x_B - x_C = 0$
*(Or alternatively: $3 x_A - 2 x_C = 0$)*.

#### Step 7: Non-Negativity Constraints
Physical units cannot be negative:
$$x_A \ge 0, \quad x_B \ge 0, \quad x_C \ge 0$$

---

# MODULE 3: Queuing Theory ($M/M/1$) System Evaluation (Video 4)

### Curriculum Context: Chapter 15 — Probabilistic Operations Research Models
* **Video Reference**: `INDU 211 - Queuing Theory Problem` (Duration: 17:23)
* **Exam Weight**: High-yield 15-mark quantitative problem on Queuing Models

---

### 3.1 Operating Parameters & $M/M/1$ Assumptions

A takeout fast-food restaurant operates a single drive-through service window open daily from 11:00 AM to 11:00 PM:
* **Operating Horizon**: $T = 12\text{ hours/day}$ ($720\text{ minutes/day}$).
* **Customer Arrival Process**: Follows a Poisson distribution with an average inter-arrival time of 10 minutes:
  $$\text{Mean Arrival Rate } \lambda = \frac{1\text{ customer}}{10\text{ minutes}} = \mathbf{6\text{ customers/hour}}$$
* **Customer Service Process**: Follows an exponential service distribution with an average service time of 4 minutes:
  $$\text{Mean Service Rate } \mu = \frac{60\text{ minutes/hour}}{4\text{ minutes/customer}} = \mathbf{15\text{ customers/hour}}$$
* **Model Classification**: Single-server Poisson arrivals and exponential service times with infinite queue capacity and FIFO discipline: **$M/M/1$ Queuing System**.

---

### 3.2 Step-by-Step Problem Solutions

#### Part 5.1: Daily Busy Time of the Service Window

* **Step 1: Calculate Traffic Intensity (Server Utilization Factor $\rho$)**:
  $$\rho = \frac{\lambda}{\mu} = \frac{6}{15} = 0.40 \quad (40\%)$$
  *(Because $\rho = 0.40 < 1.0$, the queuing system is stable and will not experience infinite queue blow-up).*

* **Step 2: Calculate Total Daily Busy Hours**:
  $$\text{Daily Busy Time} = \rho \times T = 0.40 \times 12\text{ hours} = \mathbf{4.80\text{ hours/day}}$$
  *(Expressed in minutes: $4.80 \times 60 = 288\text{ minutes/day}$)*.

---

#### Part 5.2: Expected Waiting Time in Queue ($W_q$)

* **Formula**:
  $$W_q = \frac{\lambda}{\mu(\mu - \lambda)}$$
* **Calculation**:
  $$W_q = \frac{6}{15(15 - 6)} = \frac{6}{15 \times 9} = \frac{6}{135} = \frac{2}{45}\text{ hours} \approx 0.0444\text{ hours}$$
* **Convert to Minutes**:
  $$W_q = 0.0444 \times 60\text{ minutes} = \frac{120}{45} = \mathbf{2.67\text{ minutes}}$$
* **Interpretation**: An arriving customer waits in line an average of **2 minutes and 40 seconds** before being served at the window.

---

#### Part 5.3: Expected Total Time in the System ($W$)

* **Formula**:
  $$W = W_q + \frac{1}{\mu} = \frac{1}{\mu - \lambda}$$
* **Calculation**:
  $$W = \frac{1}{15 - 6} = \frac{1}{9}\text{ hours} \approx 0.1111\text{ hours}$$
* **Convert to Minutes**:
  $$W = \frac{1}{9} \times 60\text{ minutes} = \mathbf{6.67\text{ minutes}}$$
* **Interpretation**: A customer spends an average of **6 minutes and 40 seconds** total at the restaurant (waiting in line + ordering, preparing food, and paying).

---

#### Part 5.4: Congestion Analysis — Daily Time with $\ge 2$ Customers in the System

* **Step 1: Probability Formula for $n$ Customers in an $M/M/1$ System**:
  $$P_n = (1 - \rho)\rho^n$$
* **Step 2: Probability of 2 or More Customers in the System ($P(n \ge 2)$)**:
  $$\begin{aligned}
  P(n \ge 2) &= 1 - P_0 - P_1 \\
  &= 1 - (1 - \rho)\rho^0 - (1 - \rho)\rho^1 \\
  &= 1 - (1 - \rho) - \rho(1 - \rho) \\
  &= \rho - \rho + \rho^2 = \mathbf{\rho^2}
  \end{aligned}$$
* **Calculation**:
  $$P(n \ge 2) = (0.40)^2 = \mathbf{0.16} \quad (16\%)$$

* **Step 3: Calculate Estimated Daily Congestion Hours**:
  $$\text{Daily Congestion Time} = P(n \ge 2) \times T = 0.16 \times 12\text{ hours} = \mathbf{1.92\text{ hours/day}}$$
  *(Expressed in minutes: $1.92 \times 60 = 115.2\text{ minutes/day}$)*.

---

# MODULE 4: Statistical Quality Control ($\bar{X}-R$ Charts) & Process Capability (Video 7)

### Curriculum Context: Chapter 8 — Quality Control
* **Video Reference**: `INDU 211 - Quality Control Problem` (Duration: 18:10)
* **Exam Weight**: High-yield 15–20 mark question on Statistical Process Control (SPC)

---

### 4.1 Problem Description & Technical Data

**Bestwood Manufacturing** produces short wooden structural beams with a nominal design length of **$24.0\text{ cm}$**. Quality engineers gathered 15 sample subgroups ($m=15$), with each subgroup consisting of 4 randomly sampled beams ($n=4$):

* **Initial Process Statistics**:
  * Number of subgroups: $m = 15$
  * Subgroup sample size: $n = 4$
  * Initial grand mean (average of averages): $\bar{\bar{X}}_{\text{initial}} = 24.00\text{ cm}$
  * Initial average range: $\bar{R}_{\text{initial}} = 1.413\text{ cm}$
* **Control Chart Inspection**:
  * Construction of standard 3-sigma $\bar{X}$ and $R$ charts revealed that **Sample 4** ($\bar{X}_4 = 26.15\text{ cm}$) and **Sample 10** ($\bar{X}_{10} = 22.75\text{ cm}$) exceeded the Upper and Lower Control Limits (UCL / LCL).
  * Assignable causes were identified and eliminated. Standard industrial quality protocol requires **eliminating the out-of-control subgroups** and recalculating revised in-control process parameters with the remaining $m=13$ subgroups.
* **Engineering Design Specifications**:
  * Nominal length: $24.0\text{ cm} \pm 2.2\text{ cm}$
  * Upper Specification Limit: $\text{USL} = 24.0 + 2.2 = 26.2\text{ cm}$
  * Lower Specification Limit: $\text{LSL} = 24.0 - 2.2 = 21.8\text{ cm}$

---

### 4.2 Step-by-Step Problem Solutions

#### Part 4.1: Revised In-Control Average Length ($\bar{\bar{X}}_{\text{revised}}$)

* **Rapid Calculation Technique**:
  Rather than recalculating from 52 raw individual measurements:
  1. Calculate initial sum of all 15 subgroup means:
     $$\sum_{i=1}^{15} \bar{X}_i = m \times \bar{\bar{X}}_{\text{initial}} = 15 \times 24.00 = 360.00\text{ cm}$$
  2. Subtract the two out-of-control sample means:
     $$\sum_{\text{revised}} \bar{X} = 360.00 - \bar{X}_4 - \bar{X}_{10} = 360.00 - 26.15 - 22.75 = \mathbf{311.10\text{ cm}}$$
  3. Divide by the revised number of in-control subgroups ($m_{\text{new}} = 15 - 2 = 13$):
     $$\bar{\bar{X}}_{\text{revised}} = \frac{311.10}{13} = \mathbf{23.93\text{ cm}}$$

* **Engineering Conclusion**: When the process is operating in a state of statistical control, the true average beam length produced is **$23.93\text{ cm}$**.

---

#### Part 4.2: Estimation of Process Standard Deviation ($\hat{\sigma}$)

* **Theoretical Relationship**:
  In statistical process control, the population standard deviation is unbiasedly estimated from the average sample range using the Hartley factor $d_2$:
  $$\hat{\sigma} = \frac{\bar{R}}{d_2}$$
* **Constant Lookup**:
  From the Standard Control Chart Constants table for subgroup size $n=4$:
  $$d_2 = 2.059$$
* **Calculation**:
  $$\hat{\sigma} = \frac{1.413}{2.059} = \mathbf{0.686\text{ cm}}$$

---

#### Part 4.3: Process Capability Ratio ($C_p$) & Industrial Interpretation

* **Formula for Process Capability Ratio**:
  $$C_p = \frac{\text{USL} - \text{LSL}}{6 \hat{\sigma}} = \frac{\text{Total Tolerance Spread}}{\text{Process Natural Spread}}$$
* **Substitute Numerical Values**:
  $$C_p = \frac{26.2 - 21.8}{6 \times 0.686} = \frac{4.40}{4.116} = \mathbf{1.07}$$

* **Industrial Engineering Interpretation & Quality Benchmark**:
  * **The 1.33 Standard**: In modern manufacturing engineering, an existing process requires a minimum $C_p \ge 1.33$ (a 4-sigma safety margin) to be certified as "capable," and $C_p \ge 1.67$ for critical safety components.
  * **Assessment**: Because $C_p = 1.07 < 1.33$, the beam manufacturing process is **NOT CAPABLE** of consistently producing parts within specification limits.
  * **Practical Consequence**: A significant percentage of wood beams will fall outside the $\pm 2.2\text{ cm}$ tolerance band, leading to high scrap rates, rework costs, and customer rejection. Bestwood engineering must either reduce process variance ($\sigma$) or negotiate wider engineering tolerances.

---

# MODULE 5: Project Management & Critical Path Method / PERT (Video 3)

### Curriculum Context: Chapter 17 — Project Management
* **Video Reference**: `INDU 211 - PERT Chart` (Duration: 6:52)
* **Exam Weight**: High-yield 10–15 mark scheduling question on Final Exam

---

### 5.1 Project Network Data Table

Consider an engineering product proposal project with seven distinct activities (A through G):

| Activity | Description | Immediate Predecessors | Duration (Weeks) |
| :---: | :--- | :---: | :---: |
| **A** | Assess Customer Needs | None | 2 |
| **B** | Write & Submit Proposal | A | 1 |
| **C** | Obtain Client Approval | B | 1 |
| **D** | Preliminary Engineering Design | C | 2 |
| **E** | Prototype Fabrication | C | 5 |
| **F** | System Testing & Validation | D, E | 5 |
| **G** | Final Client Delivery | F | 1 |

---

### 5.2 Activity-on-Node (AON) Network & Path Enumeration

#### Step 1: Trace Sequential Network Topology
* Project starts at **A** (Duration 2).
* Moves to **B** (Duration 1).
* Moves to **C** (Duration 1).
* At **C**, the network branches into two parallel paths:
  * Upper Branch: Activity **D** (Duration 2 weeks).
  * Lower Branch: Activity **E** (Duration 5 weeks).
* Both paths must merge at **F**: Activity **F** cannot commence until **both** D and E are 100% complete.
* Finally, activity **G** concludes the project.

#### Step 2: Enumerate All Paths from Start to Finish

| Path Index | Sequence of Activities | Week Durations | Total Duration |
| :---: | :--- | :---: | :---: |
| **Path 1** | $A \to B \to C \to \mathbf{D} \to F \to G$ | $2 + 1 + 1 + \mathbf{2} + 5 + 1$ | **12 Weeks** |
| **Path 2** | $A \to B \to C \to \mathbf{E} \to F \to G$ | $2 + 1 + 1 + \mathbf{5} + 5 + 1$ | **15 Weeks** |

---

### 5.3 Critical Path & Slack Analysis

* **Critical Path Identification**:
  The **Critical Path** is defined as the sequence of dependent activities with the **longest total duration** through the network. It dictates the minimum possible time required to complete the overall project.
  $$\text{Critical Path} = \mathbf{A \to B \to C \to E \to F \to G}$$
  $$\text{Minimum Project Completion Time} = \mathbf{15\text{ Weeks}}$$

* **Engineering Rationale for the Branching Decision (D vs. E)**:
  Why does the critical path pass through E instead of D?
  Because Activity F requires *both* D and E to be complete before testing can begin. Even though Activity D completes in only 2 weeks, testing cannot start because Prototype Fabrication (E) requires 5 weeks.
  * Therefore, Activity D has a **Total Slack** of:
    $$\text{Slack}_D = 15 - 12 = \mathbf{3\text{ Weeks}}$$
  * Activity D can be delayed up to 3 weeks without impacting the 15-week project deadline.
  * In contrast, any delay in Activities A, B, C, E, F, or G will directly delay the final delivery to the client.
