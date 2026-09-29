# INDU 211: Introduction to Production and Manufacturing Systems
## Master Step-by-Step Quantitative Operations & Method Expansions Manual
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)**  
*Pedagogical Format Standard: Strict Step-by-Step Expansion with Zero Skipped Steps*

---

## Pedagogical Method & Formula Index

This manual applies the formal pedagogical step-by-step structure established in our master mathematics series to the quantitative engineering models of **INDU 211**. Every problem archetype follows four strict rules:
1. **Explicit Identification**: All given engineering parameters, economic coefficients, and constraints are declared with their exact physical units.
2. **Theory Before Algebra**: The governing governing law, economic definition, or geometric relationship is written in plain English before substituting numbers.
3. **Zero Skipped Calculations**: Every arithmetic step, intermediate fraction, conversion factor, and summation is written out completely.
4. **Pattern to Remember**: Every archetype concludes with an algorithmic memory box summarizing the decision rules for midterm and final exams.

---

## Archetype 1: Single-Process Break-Even Analysis & Viability

### Problem Statement
A precision aerospace manufacturing subcontractor is evaluating whether to acquire a computer-numerical-control (CNC) milling machine for a proprietary landing-gear titanium bracket. The accounting and industrial engineering departments provide the following annualized cost data:
* **Annual Fixed Overhead Cost ($FC$)**: $\$28,000$ (covers equipment lease, dedicated clean-room space, and calibration contracts).
* **Variable Production Cost per Bracket ($v$)**: $\$100.00 / \text{bracket}$ (direct aerospace alloy stock, CNC machinist wages, coolant, and cutting tool wear).
* **Contract Selling Price per Bracket ($P$)**: $\$200.00 / \text{bracket}$.

#### Required Questions:
1. Calculate the annual Break-Even production volume ($Q_{BEP}$) in units.
2. Calculate the financial outcome (annual profit or net operating loss) if the market demand is only $Q = 220\text{ units/year}$. State whether management should proceed with equipment installation.
3. Calculate the annual operating profit if customer demand reaches $Q = 500\text{ units/year}$.
4. If market analysis reveals that demand cannot exceed $Q = 200\text{ units/year}$, calculate the minimum contract selling price ($P_{\min}$) required to avoid financial loss.

---

### Step-by-Step Solution

#### Step 1: Identify all economic parameters and state the theoretical definitions of Total Cost, Total Revenue, and Operating Profit
* Fixed Capital Cost: $FC = \$28,000$
* Unit Variable Cost: $v = \$100.00/\text{unit}$
* Unit Selling Price: $P = \$200.00/\text{unit}$
* Unit Contribution Margin: $CM = P - v$ (the gross margin each unit contributes toward covering fixed capital costs).

We define the primary cost and revenue functions as linear functions of production volume $Q$:
$$\text{Total Cost Function: } TC(Q) = FC + (v \cdot Q)$$
$$\text{Total Revenue Function: } TR(Q) = P \cdot Q$$
$$\text{Operating Profit Function: } \Pi(Q) = TR(Q) - TC(Q) = (P \cdot Q) - [FC + (v \cdot Q)] = (P - v)Q - FC$$

---

#### Step 2: Formulate and solve the Break-Even Condition
**Theoretical Rule**: The Break-Even Point ($Q_{BEP}$) is defined as the unique production volume where Total Revenue exactly equals Total Cost, resulting in zero net operating profit ($\Pi = 0$).

Set $TR(Q) = TC(Q)$:
$$P \cdot Q = FC + (v \cdot Q)$$

Subtract the total variable cost $(v \cdot Q)$ from both sides of the equation:
$$P \cdot Q - v \cdot Q = FC$$

Factor out the common term $Q$:
$$Q \cdot (P - v) = FC$$

Divide both sides by the unit contribution margin $(P - v)$:
$$Q_{BEP} = \frac{FC}{P - v}$$

Substitute the numerical parameters into the formula:
$$Q_{BEP} = \frac{28,000}{200 - 100}$$

Compute the denominator:
$$200 - 100 = 100\text{ \$/unit}$$

Perform the division:
$$Q_{BEP} = \frac{28,000}{100} = 280\text{ units/year}$$

**Conclusion**: The facility must produce and sell exactly **$280\text{ brackets/year}$** to completely recover all fixed overhead expenses.

---

#### Step 3: Compute operating profit/loss under constrained volume ($Q = 220\text{ units/year}$)
**Theoretical Rule**: Substitute $Q = 220$ directly into the operating profit equation $\Pi(Q) = (P - v)Q - FC$.

Calculate Total Revenue at $Q = 220$:
$$TR(220) = P \cdot Q = 200 \times 220 = \$44,000$$

Calculate Total Variable Cost at $Q = 220$:
$$VC(220) = v \cdot Q = 100 \times 220 = \$22,000$$

Calculate Total Cost at $Q = 220$:
$$TC(220) = FC + VC(220) = 28,000 + 22,000 = \$50,000$$

Calculate Net Operating Profit $\Pi(220)$:
$$\Pi(220) = TR(220) - TC(220) = 44,000 - 50,000 = -\$6,000$$

Alternatively, using the contribution margin formula:
$$\Pi(220) = (200 - 100)(220) - 28,000 = (100)(220) - 28,000 = 22,000 - 28,000 = -\$6,000$$

**Managerial Decision**: Operating at $Q = 220\text{ units}$ results in an **annual net loss of $-\$6,000$**. Management must **reject installation** under this demand projection because the volume is strictly below the break-even threshold ($220 < 280$).

---

#### Step 4: Compute operating profit at expanded volume ($Q = 500\text{ units/year}$)
Substitute $Q = 500$ into the profit formula:
$$\Pi(500) = (P - v)Q - FC$$
$$\Pi(500) = (200 - 100)(500) - 28,000$$
$$\Pi(500) = (100 \times 500) - 28,000$$
$$\Pi(500) = 50,000 - 28,000 = +\$22,000$$

**Managerial Decision**: At $500\text{ units/year}$, the process generates a robust **annual operating profit of $+\$22,000$**.

---

#### Step 5: Reverse engineer the minimum selling price ($P_{\min}$) for $Q = 200\text{ units}$
**Theoretical Rule**: Set the operating profit $\Pi(Q) = 0$ at the fixed target volume $Q = 200$, treating price $P$ as the algebraic unknown:
$$(P - v)Q - FC = 0$$

Add $FC$ to both sides:
$$(P - v)Q = FC$$

Divide both sides by $Q$:
$$P - v = \frac{FC}{Q}$$

Add $v$ to both sides to isolate $P$:
$$P_{\min} = v + \frac{FC}{Q}$$

Substitute $FC = \$28,000$, $v = \$100$, and $Q = 200$:
$$P_{\min} = 100 + \frac{28,000}{200}$$

Compute the fraction:
$$\frac{28,000}{200} = \frac{280}{2} = 140$$

Perform the addition:
$$P_{\min} = 100 + 140 = \$240.00/\text{bracket}$$

**Conclusion**: If market volume cannot exceed $200\text{ units}$, management must negotiate a contract price of at least **$\$240.00/\text{bracket}$** to break even.

---

> ### Pattern to Remember: Single-Process Break-Even
> 1. Contribution margin represents the cash per unit available to pay down fixed costs: $CM = P - v$.
> 2. Break-Even Volume formula: $Q_{BEP} = \frac{FC}{P - v} = \frac{FC}{CM}$.
> 3. If $Q < Q_{BEP} \implies \text{Operating Loss}$. If $Q > Q_{BEP} \implies \text{Operating Profit}$.
> 4. To break even at a lower volume, you must either decrease fixed costs, decrease variable unit costs, or raise the selling price: $P_{\min} = v + \frac{FC}{Q}$.

---

## Archetype 2: Multi-Process Selection & Crossover Volume Analysis

### Problem Statement
A manufacturing plant needs to produce a standardized stamped automotive bracket. The plant manager is evaluating three distinct manufacturing process alternatives:
* **Process A (Manual Job-Shop)**:
  * Annual Fixed Cost: $FC_A = \$10,000$
  * Variable Cost per unit: $v_A = \$15.00/\text{unit}$
* **Process B (Semi-Automated Cellular Manufacturing)**:
  * Annual Fixed Cost: $FC_B = \$40,000$
  * Variable Cost per unit: $v_B = \$5.00/\text{unit}$
* **Process C (Fully Automated Transfer Line / Robotics)**:
  * Annual Fixed Cost: $FC_C = \$100,000$
  * Variable Cost per unit: $v_C = \$2.00/\text{unit}$

#### Required Questions:
1. State the Total Cost function for each of the three candidate processes.
2. Determine the algebraic Crossover Volume ($Q_{A,B}$) between Process A and Process B.
3. Determine the algebraic Crossover Volume ($Q_{B,C}$) between Process B and Process C.
4. Establish the comprehensive piecewise decision rule specifying which process minimizes total manufacturing cost across all possible annual volumes $Q \ge 0$.
5. If the forecasted market volume is $Q = 12,000\text{ units/year}$, verify algebraically which process delivers the lowest cost.

---

### Step-by-Step Solution

#### Step 1: Formulate the Total Cost functions
**Theoretical Rule**: The Total Cost $TC_i(Q)$ for any process $i$ is the linear sum of its annualized fixed investment and volume-dependent variable operating expenses:
$$TC_i(Q) = FC_i + v_i \cdot Q$$

Writing out the explicit equation for each alternative:
$$TC_A(Q) = 10,000 + 15 Q$$
$$TC_B(Q) = 40,000 + 5 Q$$
$$TC_C(Q) = 100,000 + 2 Q$$

---

#### Step 2: Calculate the Crossover Volume between Process A and Process B ($Q_{A,B}$)
**Theoretical Rule**: The crossover point between two processes is the production volume where both processes incur identical total operating costs:
$$TC_A(Q) = TC_B(Q)$$

Equate the two functions:
$$10,000 + 15 Q = 40,000 + 5 Q$$

Collect variable cost terms on the left side by subtracting $5 Q$ from both sides:
$$10,000 + 15 Q - 5 Q = 40,000$$
$$10,000 + 10 Q = 40,000$$

Collect fixed cost terms on the right side by subtracting $10,000$ from both sides:
$$10 Q = 40,000 - 10,000$$
$$10 Q = 30,000$$

Divide by the difference in variable costs:
$$Q_{A,B} = \frac{30,000}{10} = 3,000\text{ units/year}$$

**Verification of equality at $Q = 3,000$**:
$$TC_A(3,000) = 10,000 + (15 \times 3,000) = 10,000 + 45,000 = \$55,000$$
$$TC_B(3,000) = 40,000 + (5 \times 3,000) = 40,000 + 15,000 = \$55,000$$
Equality holds perfectly ($\$55,000 = \$55,000$).

---

#### Step 3: Calculate the Crossover Volume between Process B and Process C ($Q_{B,C}$)
Equate the total costs of Process B and Process C:
$$TC_B(Q) = TC_C(Q)$$
$$40,000 + 5 Q = 100,000 + 2 Q$$

Subtract $2 Q$ from both sides:
$$40,000 + 3 Q = 100,000$$

Subtract $40,000$ from both sides:
$$3 Q = 100,000 - 40,000$$
$$3 Q = 60,000$$

Divide by 3:
$$Q_{B,C} = \frac{60,000}{3} = 20,000\text{ units/year}$$

**Verification of equality at $Q = 20,000$**:
$$TC_B(20,000) = 40,000 + (5 \times 20,000) = 40,000 + 100,000 = \$140,000$$
$$TC_C(20,000) = 100,000 + (2 \times 20,000) = 100,000 + 40,000 = \$140,000$$
Equality holds perfectly ($\$140,000 = \$140,000$).

---

#### Step 4: Check for Process Dominance and formulate the Piecewise Decision Rule
Notice that the crossover quantities are strictly ascending:
$$Q_{A,B} = 3,000 < Q_{B,C} = 20,000$$
This confirms that Process B is not dominated and possesses an active economic range where it is the strictly cheapest option.

**Formal Piecewise Selection Rule**:
* **Interval 1: For $0 \le Q < 3,000\text{ units/year}$**:
  * Select **Process A (Manual Job-Shop)**. At low production volumes, low fixed capital cost dominates, and high variable cost is minimized.
* **Interval 2: For $3,000 < Q < 20,000\text{ units/year}$**:
  * Select **Process B (Semi-Automated Cellular)**. The higher fixed capital of $\$40,000$ is effectively amortized by the lower $\$5/\text{unit}$ variable cost.
* **Interval 3: For $Q > 20,000\text{ units/year}$**:
  * Select **Process C (Fully Automated Robotics)**. Mass-production volume fully absorbs the massive $\$100,000$ fixed tooling cost, leveraging the rock-bottom $\$2.00/\text{unit}$ variable cost.
* **At Transition Boundaries ($Q = 3,000$ and $Q = 20,000$)**:
  * Management is economically indifferent between the two adjacent alternatives based on cost alone (non-cost factors such as flexibility or ramp-up speed decide).

---

#### Step 5: Quantitative Evaluation at Projected Volume $Q = 12,000\text{ units/year}$
**Theoretical Rule**: Compare the total costs of all three options at $Q = 12,000$:
* **Process A**:
  $$TC_A(12,000) = 10,000 + 15(12,000) = 10,000 + 180,000 = \$190,000$$
* **Process B**:
  $$TC_B(12,000) = 40,000 + 5(12,000) = 40,000 + 60,000 = \$100,000$$
* **Process C**:
  $$TC_C(12,000) = 100,000 + 2(12,000) = 100,000 + 24,000 = \$124,000$$

Comparing the three total cost figures:
$$\$100,000\text{ (B)} < \$124,000\text{ (C)} < \$190,000\text{ (A)}$$

**Conclusion**: At $Q = 12,000\text{ units/year}$, **Process B is the optimal choice**, delivering a net annual cost savings of **$\$24,000$** over Process C and **$\$90,000$** over Process A.

---

> ### Pattern to Remember: Multi-Process Crossover
> 1. General crossover formula between any two processes 1 and 2:
>    $$Q_{1,2} = \frac{FC_2 - FC_1}{v_1 - v_2}$$
> 2. Order the processes by increasing fixed cost: $FC_A < FC_B < FC_C$.
> 3. Verify that the variable costs decrease in reverse order: $v_A > v_B > v_C$.
> 4. If $Q_{A,B} < Q_{B,C}$, all three processes have an active economic operating window. If $Q_{A,B} > Q_{B,C}$, the intermediate process (B) is economically dominated and should never be chosen!

---

## Archetype 3: Multi-Facility Center of Gravity (CoG) & Spatial Distance Metrics

### Problem Statement
A regional supply chain director must establish the optimal geographic location $(x^*, y^*)$ for a central distribution center (CDC) to supply four retail superstores ($S_1, S_2, S_3, S_4$) situated across an industrial corridor mapped onto a Cartesian coordinate grid (measured in kilometers):
* **Store $S_1$**: Located at $(x_1, y_1) = (2, 2)$, with weekly shipment demand $W_1 = 800\text{ pallets/week}$.
* **Store $S_2$**: Located at $(x_2, y_2) = (3, 5)$, with weekly shipment demand $W_2 = 900\text{ pallets/week}$.
* **Store $S_3$**: Located at $(x_3, y_3) = (5, 4)$, with weekly shipment demand $W_3 = 200\text{ pallets/week}$.
* **Store $S_4$**: Located at $(x_4, y_4) = (8, 5)$, with weekly shipment demand $W_4 = 100\text{ pallets/week}$.

#### Required Questions:
1. Explain the physical and engineering distinction between Euclidean distance ($L_2$) and Rectilinear distance ($L_1$), stating when each metric is applied.
2. Calculate the **Unweighted Centroid** $(\bar{x}_{unw}, \bar{y}_{unw})$ of the four stores.
3. Calculate the **Volume-Weighted Center of Gravity** $(x^*, y^*)$.
4. Compute the total rectilinear travel distance from the optimal weighted CDC location to Store $S_1$ and Store $S_4$.
5. Provide the engineering and economic rationale explaining why $(x^*, y^*)$ diverges substantially from $(\bar{x}_{unw}, \bar{y}_{unw})$.

---

### Step-by-Step Solution

#### Step 1: Define Spatial Distance Metrics (Euclidean vs Rectilinear)
**Theoretical Definition**:
* **Euclidean Distance ($L_2$ Metric - Straight-Line Distance)**:
  $$d_E(P_1, P_2) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$
  * *Application*: Used for direct airborne freight (drones, cargo planes), cross-country oil pipelines, line-of-sight telecommunications microwave links, or high-sea shipping routes where travel is unimpeded by ground obstacles.
* **Rectilinear Distance ($L_1$ Metric - Manhattan / City-Block / Orthogonal Grid)**:
  $$d_R(P_1, P_2) = |x_1 - x_2| + |y_1 - y_2|$$
  * *Application*: Used for urban truck delivery fleets navigating perpendicular street grids, factory floor automated guided vehicles (AGVs) navigating rectangular aisle networks, and microchip wire routing.

---

#### Step 2: Compute the Unweighted Geometric Centroid $(\bar{x}_{unw}, \bar{y}_{unw})$
**Theoretical Rule**: The unweighted centroid represents the purely geometric mean of the coordinates, treating every customer node with equal importance ($n = 4$):
$$\bar{x}_{unw} = \frac{\sum_{i=1}^n x_i}{n} = \frac{x_1 + x_2 + x_3 + x_4}{4}$$
$$\bar{y}_{unw} = \frac{\sum_{i=1}^n y_i}{n} = \frac{y_1 + y_2 + y_3 + y_4}{4}$$

Compute the x-coordinate:
$$\bar{x}_{unw} = \frac{2 + 3 + 5 + 8}{4} = \frac{18}{4} = 4.50\text{ km}$$

Compute the y-coordinate:
$$\bar{y}_{unw} = \frac{2 + 5 + 4 + 5}{4} = \frac{16}{4} = 4.00\text{ km}$$

**Result**: The unweighted geometric center is located at coordinates **$(4.50, 4.00)$**.

---

#### Step 3: Compute the Volume-Weighted Center of Gravity $(x^*, y^*)$
**Theoretical Rule**: The weighted center of gravity minimizes the total sum of squared Euclidean transport-work ($W_i \cdot d_i^2$). The optimal coordinates $(x^*, y^*)$ are given by the weighted averages:
$$x^* = \frac{\sum_{i=1}^n W_i x_i}{\sum_{i=1}^n W_i}, \quad y^* = \frac{\sum_{i=1}^n W_i y_i}{\sum_{i=1}^n W_i}$$

##### Part A: Compute the Total Demand Weight ($\sum W_i$)
$$\sum_{i=1}^4 W_i = W_1 + W_2 + W_3 + W_4$$
$$\sum_{i=1}^4 W_i = 800 + 900 + 200 + 100 = 2,000\text{ pallets/week}$$

##### Part B: Formulate and Compute the Weighted Sum for X ($\sum W_i x_i$)
$$\sum_{i=1}^4 W_i x_i = (W_1 \cdot x_1) + (W_2 \cdot x_2) + (W_3 \cdot x_3) + (W_4 \cdot x_4)$$
$$\sum_{i=1}^4 W_i x_i = (800 \times 2) + (900 \times 3) + (200 \times 5) + (100 \times 8)$$
$$\sum_{i=1}^4 W_i x_i = 1,600 + 2,700 + 1,000 + 800 = 6,100\text{ pallet}\cdot\text{km}$$

Calculate $x^*$:
$$x^* = \frac{6,100}{2,000} = \frac{61}{20} = 3.05\text{ km}$$

##### Part C: Formulate and Compute the Weighted Sum for Y ($\sum W_i y_i$)
$$\sum_{i=1}^4 W_i y_i = (W_1 \cdot y_1) + (W_2 \cdot y_2) + (W_3 \cdot y_3) + (W_4 \cdot y_4)$$
$$\sum_{i=1}^4 W_i y_i = (800 \times 2) + (900 \times 5) + (200 \times 4) + (100 \times 5)$$
$$\sum_{i=1}^4 W_i y_i = 1,600 + 4,500 + 800 + 500 = 7,400\text{ pallet}\cdot\text{km}$$

Calculate $y^*$:
$$y^* = \frac{7,400}{2,000} = \frac{74}{20} = 3.70\text{ km}$$

**Result**: The optimal volume-weighted Center of Gravity coordinates are **$(x^*, y^*) = (3.05, 3.70)$**.

---

#### Step 4: Compute Rectilinear Travel Distance to $S_1$ and $S_4$
Using the Manhattan metric $d_R = |x^* - x_i| + |y^* - y_i|$ from the weighted warehouse at $(3.05, 3.70)$:

##### To Store $S_1(2, 2)$:
$$d_R(S_1) = |3.05 - 2| + |3.70 - 2| = 1.05 + 1.70 = 2.75\text{ km}$$

##### To Store $S_4(8, 5)$:
$$d_R(S_4) = |3.05 - 8| + |3.70 - 5| = |-4.95| + |-1.30| = 4.95 + 1.30 = 6.25\text{ km}$$

---

#### Step 5: Engineering & Economic Sensitivity Analysis
Comparing the two solutions:
* Unweighted centroid: $(4.50, 4.00)$
* Weighted center of gravity: $(3.05, 3.70)$

**Why did the location shift?**
Notice that stores $S_1$ ($800\text{ pallets}$) and $S_2$ ($900\text{ pallets}$) together account for $\frac{800 + 900}{2,000} = \frac{1,700}{2,000} = 85\%$ of the total weekly delivery volume.
Because transportation cost is proportional to $\text{Weight} \times \text{Distance}$, the optimization algorithm shifts the warehouse strongly toward the high-volume cluster ($x \approx 2\text{ to }3$), rather than placing it near the distant low-volume store $S_4$ at $x = 8$ (which accounts for only $5\%$ of total shipments).

---

> ### Pattern to Remember: Facility Location & Center of Gravity
> 1. Always sum total volume first: $W_{total} = \sum W_i$.
> 2. Multiply each node coordinate by its respective weight: $W_i x_i$ and $W_i y_i$.
> 3. Divide weighted sums by total volume:
>    $$x^* = \frac{\sum W_i x_i}{\sum W_i}, \quad y^* = \frac{\sum W_i y_i}{\sum W_i}$$
> 4. Distance check:
>    * Euclidean (straight line): $d_E = \sqrt{\Delta x^2 + \Delta y^2}$
>    * Rectilinear (city grid): $d_R = |\Delta x| + |\Delta y|$

---

## Archetype 4: Manufacturing Cycle Time, Production Rate & Operational Availability

### Problem Statement
A dedicated automated manufacturing cell produces transmission shafts for heavy commercial vehicles. The cell operates on a standard **8-hour working shift** ($480\text{ minutes}$).
The industrial engineering time-study records the following operational parameters per shaft:
* **Basic Machining Time ($T_m$)**: $1.80\text{ min/piece}$
* **Workpart Handling / Clamping Time ($T_h$)**: $0.60\text{ min/piece}$
* **Tool Replacement Time Allocation ($T_t$)**: $0.10\text{ min/piece}$ (representing cutting insert indexation amortized per piece).

During a typical shift, the plant schedule includes:
* **Planned Downtime**: $30\text{ minutes}$ allocated for operator lunch and scheduled preventative maintenance.
* **Unplanned Downtime**: Due to chip clearing, sensor calibration faults, and tool jams, the machine experiences an average of $45\text{ minutes}$ of unexpected stoppage per shift.

#### Required Questions:
1. Determine the total operational Cycle Time ($T_c$) per piece in minutes and seconds.
2. Determine the cell's theoretical Hourly Production Rate ($R_p$) in pieces per hour.
3. Calculate the Machine Availability ($A$) for the shift.
4. Calculate the cell's actual net production output ($Q_{\text{actual}}$) in parts completed per 8-hour shift.

---

### Step-by-Step Solution

#### Step 1: Identify and define all production cycle time components
**Theoretical Rule**: The operational cycle time ($T_c$) is the total time elapsed from the moment one part enters the workstation until the next consecutive part is ready to begin:
$$T_c = T_m + T_h + T_t$$

Where:
* $T_m$: Actual cutting or processing time ($1.80\text{ min}$).
* $T_h$: Material handling, loading, orienting, and unloading time ($0.60\text{ min}$).
* $T_t$: Tool service time allocated per part ($0.10\text{ min}$).

Substitute the numerical values:
$$T_c = 1.80 + 0.60 + 0.10 = 2.50\text{ minutes/piece}$$

Convert decimal minutes to minutes and seconds:
$$0.50\text{ min} = 0.50 \times 60\text{ seconds} = 30\text{ seconds}$$
$$T_c = \mathbf{2\text{ minutes and } 30\text{ seconds/piece}}$$

---

#### Step 2: Compute the theoretical Hourly Production Rate ($R_p$)
**Theoretical Rule**: The production rate $R_p$ is the reciprocal of cycle time, scaled to one hour ($60\text{ minutes}$):
$$R_p = \frac{60\text{ minutes/hour}}{T_c\text{ minutes/piece}}$$

Substitute $T_c = 2.50\text{ min/piece}$:
$$R_p = \frac{60}{2.50} = \frac{60}{\frac{5}{2}} = 60 \times \frac{2}{5} = \frac{120}{5} = 24\text{ pieces/hour}$$

**Result**: Under continuous 100% operation, the cell produces exactly **$24\text{ finished transmission shafts per hour}$**.

---

#### Step 3: Compute Machine Availability ($A$)
**Theoretical Rule**: Machine Availability measures the fraction of planned operating time during which the equipment is physically running and operational:
$$A = \frac{\text{Actual Operating Time}}{\text{Planned Production Time}} = \frac{\text{Total Shift Time} - \text{Planned Downtime} - \text{Unplanned Downtime}}{\text{Total Shift Time} - \text{Planned Downtime}}$$

##### Part A: Compute Total Shift Time ($T_{shift}$)
$$T_{shift} = 8\text{ hours} \times 60\text{ min/hour} = 480\text{ minutes}$$

##### Part B: Compute Planned Production Time ($T_{planned}$)
Planned production time excludes scheduled lunch and preventative maintenance:
$$T_{planned} = T_{shift} - \text{Planned Downtime} = 480 - 30 = 450\text{ minutes}$$

##### Part C: Compute Actual Net Operating Time ($T_{operating}$)
Operating time is the remaining time the spindle is actually rotating after unplanned equipment breakdowns:
$$T_{operating} = T_{planned} - \text{Unplanned Downtime} = 450 - 45 = 405\text{ minutes}$$

##### Part D: Calculate Availability Ratio ($A$)
$$A = \frac{T_{operating}}{T_{planned}} = \frac{405}{450}$$

Divide numerator and denominator by 45:
$$A = \frac{405 / 45}{450 / 45} = \frac{9}{10} = 0.90\text{ or } \mathbf{90.0\%}$$

**Result**: The automated cell exhibits an availability of **$90.0\%$**.

---

#### Step 4: Calculate Actual Net Production Output per Shift ($Q_{\text{actual}}$)
**Theoretical Rule**: Actual output is the product of theoretical hourly production rate and total operational hours, or simply the operating time in minutes divided by cycle time:
$$Q_{\text{actual}} = R_p \times \left( \frac{T_{operating}}{60} \right) = \frac{T_{operating}}{T_c}$$

Method 1 (Using cycle time):
$$Q_{\text{actual}} = \frac{405\text{ minutes}}{2.50\text{ minutes/piece}} = \frac{405}{\frac{5}{2}} = \frac{810}{5} = 162\text{ pieces/shift}$$

Method 2 (Using hourly rate and available hours):
$$\text{Operating Hours} = \frac{405}{60} = 6.75\text{ hours}$$
$$Q_{\text{actual}} = 24\text{ pieces/hour} \times 6.75\text{ hours} = 162\text{ pieces/shift}$$

**Result**: The cell successfully produces **$162\text{ finished shafts}$** during the 8-hour shift.

---

> ### Pattern to Remember: Cycle Time & Availability
> 1. Total Unit Cycle Time: $T_c = T_m + T_h + T_t$ (Machining + Handling + Tool service).
> 2. Hourly Production Rate: $R_p = \frac{60}{T_c}$ (pieces/hour).
> 3. Availability Formula:
>    $$A = \frac{T_{operating}}{T_{planned}} = \frac{\text{Planned Time} - \text{Breakdowns}}{\text{Planned Time}}$$
> 4. Actual Shift Output:
>    $$Q = \frac{T_{operating}}{T_c} = R_p \times \text{Hours Operated}$$

---

## Archetype 5: Assembly Line Balancing & Minimum Workstation Formulation

### Problem Statement
An industrial appliance manufacturer is configuring a manual progressive assembly line to produce electric lawn mowers. The target production quota is $Q = 480\text{ units/day}$ operating on a single 8-hour shift ($480\text{ minutes/day}$).
The product structure consists of 8 elemental assembly tasks with a combined total work content time:
$$T_{wc} = \sum_{k=1}^8 t_k = 4.00\text{ minutes/unit}$$

The line designer initially proposes a configuration utilizing $N = 6$ sequential workstations.

#### Required Questions:
1. Calculate the required line Cycle Time ($T_c$) to achieve the daily production quota.
2. Determine the Theoretical Minimum Number of Workstations ($N_{\min}$).
3. Calculate the Assembly Line Balancing Efficiency ($E$) for the proposed $N = 6$ workstation layout.
4. Calculate the Total Balance Delay ($d$).

---

### Step-by-Step Solution

#### Step 1: Calculate the required line Cycle Time ($T_c$)
**Theoretical Rule**: The line cycle time represents the maximum allowable time a unit can remain at any workstation to meet the daily target volume $Q$:
$$T_c = \frac{\text{Available Daily Operating Time}}{\text{Target Daily Output Volume}} = \frac{T_{avail}}{Q}$$

Substitute $T_{avail} = 480\text{ minutes/day}$ and $Q = 480\text{ units/day}$:
$$T_c = \frac{480\text{ minutes}}{480\text{ units}} = 1.00\text{ minute/unit} = 60\text{ seconds/unit}$$

**Result**: Every workstation on the assembly line must complete its assigned tasks within **$1.00\text{ minute}$** ($60\text{ seconds}$).

---

#### Step 2: Determine Theoretical Minimum Workstations ($N_{\min}$)
**Theoretical Rule**: The theoretical minimum number of stations $N_{\min}$ is the total work content time divided by the cycle time, rounded up to the nearest integer ($\lceil \cdot \rceil$):
$$N_{\min} = \left\lceil \frac{T_{wc}}{T_c} \right\rceil$$

Substitute $T_{wc} = 4.00\text{ minutes}$ and $T_c = 1.00\text{ minute}$:
$$\frac{T_{wc}}{T_c} = \frac{4.00}{1.00} = 4.00$$

Since $4.00$ is already an integer:
$$N_{\min} = 4\text{ workstations}$$

**Result**: In an ideal, perfectly balanced assembly line with zero idle time, exactly **4 workstations** are required.

---

#### Step 3: Compute Line Balancing Efficiency ($E$) for $N = 6$ workstations
**Theoretical Rule**: Line Efficiency is the ratio of total productive work content to total available line capacity:
$$E = \frac{T_{wc}}{N \cdot T_c} \times 100\%$$

Where:
* $T_{wc} = 4.00\text{ minutes}$
* $N = 6\text{ workstations}$
* $T_c = 1.00\text{ minute/station}$

Calculate total available workstation time capacity:
$$N \cdot T_c = 6 \times 1.00 = 6.00\text{ minutes/unit}$$

Calculate Efficiency $E$:
$$E = \frac{4.00}{6.00} = \frac{2}{3} \approx 0.6667\text{ or } \mathbf{66.67\%}$$

**Result**: The proposed 6-station line operates at **$66.67\%$ line efficiency**.

---

#### Step 4: Compute Total Balance Delay ($d$)
**Theoretical Rule**: Balance Delay (also called Idle Time Percentage) is the fraction of workstation time lost to worker starvation or blocking:
$$d = 1 - E = 100\% - 66.67\% = \mathbf{33.33\%}$$

Alternatively:
$$d = \frac{N \cdot T_c - T_{wc}}{N \cdot T_c} = \frac{6.00 - 4.00}{6.00} = \frac{2.00}{6.00} = \frac{1}{3} \approx 33.33\%$$

**Managerial Insight**: One-third ($33.33\%$) of total paid labor time on this 6-station line is spent completely idle. An industrial engineer should rebalance tasks or combine operations closer to $N = 4$ or $N = 5$ to increase labor productivity.

---

> ### Pattern to Remember: Assembly Line Balancing
> 1. Required Cycle Time: $T_c = \frac{\text{Available Operating Time}}{\text{Demand Volume } Q}$.
> 2. Minimum Possible Stations: $N_{\min} = \left\lceil \frac{T_{wc}}{T_c} \right\rceil$ (always ceiling/round up).
> 3. Line Efficiency: $E = \frac{T_{wc}}{N \cdot T_c} \times 100\%$.
> 4. Balance Delay (Lost Time): $d = 100\% - E = \frac{N \cdot T_c - T_{wc}}{N \cdot T_c}$.

---

## Comprehensive Summary: Exam Formulas Quick-Reference

| Metric | Governing Formula | Key Physical Units | Exam Gotcha / Trap |
| :--- | :--- | :--- | :--- |
| **Break-Even Volume** | $Q_{BEP} = \frac{FC}{P - v}$ | units / year | Forgetting to subtract variable cost $v$ from selling price $P$. |
| **Target Selling Price** | $P_{\min} = v + \frac{FC}{Q}$ | \$ / unit | Forgetting that price must cover both variable cost and amortized fixed cost. |
| **Crossover Quantity** | $Q_{1,2} = \frac{FC_2 - FC_1}{v_1 - v_2}$ | units / year | Subtracting in the wrong direction ($FC$ high $-$ low, $v$ high $-$ low). |
| **Weighted Center of Gravity** | $x^* = \frac{\sum W_i x_i}{\sum W_i}, \, y^* = \frac{\sum W_i y_i}{\sum W_i}$ | km, miles, or grid units | Forgetting to divide by total weight $\sum W_i$. |
| **Manhattan Distance** | $d_R = \|x_1 - x_2\| + \|y_1 - y_2\|$ | km or miles | Squaring terms like Euclidean distance instead of taking absolute sums. |
| **Cycle Time** | $T_c = T_m + T_h + T_t$ | min / piece | Confusing cycle time with total shift operating time. |
| **Production Rate** | $R_p = \frac{60}{T_c}$ | pieces / hour | Leaving $T_c$ in seconds without converting to minutes. |
| **Machine Availability** | $A = \frac{T_{operating}}{T_{planned}}$ | dimensionless (%) | Including scheduled lunch/PM in the unplanned downtime denominator. |
| **Min Workstations** | $N_{\min} = \left\lceil \frac{T_{wc}}{T_c} \right\rceil$ | integer stations | Rounding down instead of rounding UP to the next integer. |
| **Line Efficiency** | $E = \frac{T_{wc}}{N \cdot T_c}$ | dimensionless (%) | Using $N_{\min}$ instead of the actual assigned stations $N$. |
