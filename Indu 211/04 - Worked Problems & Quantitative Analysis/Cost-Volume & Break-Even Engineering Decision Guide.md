# INDU 211 · Worked Problems & Quantitative Analysis
# Cost-Volume & Break-Even Engineering Decision Guide
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)**

---

## 1. The Mathematical Framework of Cost-Volume Analysis

In production systems, engineering decisions are justified by numbers. Every production engineer must master two quantitative models:
1. **Single-Process Revenue Break-Even Analysis** (Evaluating whether a product is economically viable against market price).
2. **Multi-Process Crossover Selection** (Choosing the most cost-effective manufacturing process at a given production volume).

### Fundamental Equations

$$\begin{aligned}
\text{Total Cost: } & TC(Q) = FC + v \cdot Q = b + a \cdot Q \\
\text{Total Revenue: } & TR(Q) = P \cdot Q \\
\text{Total Profit: } & \Pi(Q) = TR(Q) - TC(Q) = (P - v)Q - FC \\
\text{Break-Even Quantity: } & Q_{BEP} = \frac{FC}{P - v} = \frac{b}{P - a} \\
\text{Two-Process Crossover Volume: } & Q_{1,2} = \frac{FC_1 - FC_2}{v_2 - v_1}
\end{aligned}$$

Where:
* $Q$: Annual production volume (units/year).
* $FC$ (or $b$): Fixed annual capital cost ($\$$).
* $v$ (or $a$): Variable direct production cost per unit ($\$/\text{unit}$).
* $P$: Selling price per unit ($\$/\text{unit}$).
* $(P - v)$: Contribution margin per unit ($\$/\text{unit}$).

---

## 2. Problem 1: Single-Process Viability (Lecture Slide 12)

### Problem Statement
A manufacturing enterprise is considering producing a new mechanical component with the following financial parameters:
* **Annual Fixed Cost ($FC$)**: $\$28,000$ (tooling, machine rental, space).
* **Variable Cost per Unit ($v$)**: $\$100/\text{unit}$ (raw material, direct machining labor).
* **Selling Price ($P$)**: $\$200/\text{unit}$.

### Questions
1. Determine the annual Break-Even sales volume $Q_{BEP}$.
2. If projected market demand is $Q = 220$ units/year, what is the annual net profit or loss? Should the system be installed?
3. If market demand is $Q = 500$ units/year, calculate total profit.
4. What minimum selling price $P_{min}$ allows the company to break even at only $Q = 200$ units?

---

### Step-by-Step Solution

#### Part 1: Break-Even Volume
At break-even, total revenue equals total cost:
$$TR(Q) = TC(Q) \implies 200 Q = 100 Q + 28,000$$
$$100 Q = 28,000 \implies Q_{BEP} = \frac{28,000}{100} = \mathbf{280 \text{ units}}$$

#### Part 2: Profit at $Q = 220$ units
$$\Pi(220) = TR(220) - TC(220) = (200)(220) - [28,000 + 100(220)]$$
$$\Pi(220) = 44,000 - [28,000 + 22,000] = 44,000 - 50,000 = \mathbf{-\$6,000} \text{ (Loss!)}$$

> **Managerial Conclusion**: The company must **reject** installation. Selling 220 units fails to recover fixed overhead, resulting in an annual loss of $\$6,000$.

#### Part 3: Profit at $Q = 500$ units
$$\Pi(500) = (P - v)Q - FC = (200 - 100)(500) - 28,000 = 50,000 - 28,000 = \mathbf{+\$22,000 \text{ (Net Profit)}}$$

#### Part 4: Target Selling Price for $Q = 200$ units
$$P \cdot (200) = 28,000 + 100(200) \implies 200 P = 28,000 + 20,000 = 48,000$$
$$P_{min} = \frac{48,000}{200} = \mathbf{\$240/\text{unit}}$$

---

## 3. Problem 2: 3-Process Selection Problem (Lecture Slide 15)

### Problem Statement
A manufacturing firm can produce a stamped structural bracket using three alternative production methods:

| Process Option | Description | Fixed Annual Cost ($FC$) | Variable Cost ($v$) |
| :---: | :--- | :---: | :---: |
| **Process A** | High-speed automated stamping press | $\$110,000$ | $\$2.00/\text{unit}$ |
| **Process B** | Semi-automated CNC turret punch | $\$80,000$ | $\$4.00/\text{unit}$ |
| **Process C** | Manual brake press & notch tooling | $\$75,000$ | $\$5.00/\text{unit}$ |

---

### Question A: Annual demand is projected at $Q = 10,000$ units/year. Which process should be selected?

#### Step 1: Calculate Total Cost for each alternative at $Q = 10,000$ units
$$\begin{aligned}
TC_A(10,000) &= 110,000 + (2.00)(10,000) = 110,000 + 20,000 = \$130,000 \\
TC_B(10,000) &= 80,000 + (4.00)(10,000) = 80,000 + 40,000 = \mathbf{\$120,000} \quad \text{\textbf{(Minimum Cost!)}} \\
TC_C(10,000) &= 75,000 + (5.00)(10,000) = 75,000 + 50,000 = \$125,000
\end{aligned}$$

#### Step 2: Compare and Conclude
$$\mathbf{TC_B (\$120,000) < TC_C (\$125,000) < TC_A (\$130,000)}$$
**Optimal Decision at 10,000 units**: Select **Process B**. It saves $\$5,000$ compared to Process C and $\$10,000$ compared to Process A.

---

### Question B: At what production volume is each process preferred?

To determine the exact volume thresholds, we calculate the pairwise crossover points:

#### Crossover 1: Process B vs. Process C
Equating $TC_B(Q) = TC_C(Q)$:
$$80,000 + 4.00 Q = 75,000 + 5.00 Q$$
$$5.00 Q - 4.00 Q = 80,000 - 75,000$$
$$1.00 Q = 5,000 \implies \mathbf{Q_{BC} = 5,000 \text{ units}}$$

* At $Q = 5,000$: $TC_B = 80,000 + 4(5,000) = \$100,000$, and $TC_C = 75,000 + 5(5,000) = \$100,000$.

#### Crossover 2: Process A vs. Process B
Equating $TC_A(Q) = TC_B(Q)$:
$$110,000 + 2.00 Q = 80,000 + 4.00 Q$$
$$4.00 Q - 2.00 Q = 110,000 - 80,000$$
$$2.00 Q = 30,000 \implies \mathbf{Q_{AB} = 15,000 \text{ units}}$$

* At $Q = 15,000$: $TC_A = 110,000 + 2(15,000) = \$140,000$, and $TC_B = 80,000 + 4(15,000) = \$140,000$.

#### Verification: Is Process B ever dominated?
Let's check the direct crossover between Process A and Process C:
$$110,000 + 2.00 Q = 75,000 + 5.00 Q \implies 3.00 Q = 35,000 \implies Q_{AC} \approx 11,667 \text{ units}$$
Notice that $Q_{BC} (5,000) < Q_{AC} (11,667) < Q_{AB} (15,000)$.
Because the intersection $Q_{AC}$ lies strictly between $Q_{BC}$ and $Q_{AB}$, **Process B is NOT dominated** and forms an active middle operating zone.

---

### Final Decision Policy Table

| Production Range ($Q$ units/year) | Recommended Process | Economic Justification |
| :---: | :---: | :--- |
| **$0 \le Q < 5,000$** | **Process C** | Lowest fixed capital commitment ($\$75,000$). High variable cost does not accumulate sufficiently to overcome fixed savings. |
| **$Q = 5,000$** | **Either B or C** | Both yield identical total annual cost ($\$100,000$). |
| **$5,000 < Q < 15,000$** | **Process B** | Optimal balance between fixed setup and moderate variable production cost. |
| **$Q = 15,000$** | **Either A or B** | Both yield identical total annual cost ($\$140,000$). |
| **$Q > 15,000$** | **Process A** | Heavy initial fixed investment ($\$110,000$) is rapidly diluted across volume by the ultra-low variable rate ($\$2.00/\text{unit}$). |

---

## 4. Problem 3: Make-or-Buy Quantitative Decision

### Problem Statement
An industrial plant requires 12,000 precision aluminum bushings per year.
* **Option 1 (Buy from Supplier)**: Purchase price is $\$18.50$ per finished bushing, with zero in-house fixed capital costs.
* **Option 2 (Make In-House)**: Purchase a dedicated CNC lathe and bar feeder:
  * Annual machine depreciation, floor space & tooling: $FC = \$45,000/\text{year}$.
  * In-house raw bar stock, tooling insert wear, and operator wages: $v = \$14.00/\text{unit}$.

### Questions
1. At 12,000 units/year, should the company Make or Buy?
2. What is the Make-or-Buy crossover volume?

### Solution
#### Part 1: Cost Comparison at $Q = 12,000$
$$TC_{\text{Buy}}(12,000) = 18.50 \times 12,000 = \mathbf{\$222,000}$$
$$TC_{\text{Make}}(12,000) = 45,000 + (14.00 \times 12,000) = 45,000 + 168,000 = \mathbf{\$213,000}$$

$$\text{Annual Savings by Making In-House} = \$222,000 - \$213,000 = \mathbf{\$9,000/\text{year}}$$
**Decision**: **Make In-House**.

#### Part 2: Crossover Volume
$$TC_{\text{Buy}}(Q) = TC_{\text{Make}}(Q) \implies 18.50 Q = 45,000 + 14.00 Q$$
$$4.50 Q = 45,000 \implies \mathbf{Q_{\text{crossover}} = 10,000 \text{ units}}$$
* If demand $< 10,000$ units/year $\implies$ **Buy**.
* If demand $> 10,000$ units/year $\implies$ **Make**.

---

## 5. Problem 4: Multi-Level Bill of Materials (BOM) Explosion

### Problem Statement
An industrial furniture factory receives a contract to deliver **250 Industrial Workbenches (Product W)**. The hierarchical BOM structure is defined as follows:

* **Level 0: Workbench W (Qty: 1)**
  * **Tabletop Sub-Assembly T (Qty: 1)**
    * Wood Top (Qty: 1)
    * Steel Edging (Qty: 4)
  * **Leg Frame L (Qty: 2)**
    * Square Tube Sections (Qty: 2 per frame $\implies 4$ total)
    * Molded Foot Pads (Qty: 2 per frame $\implies 4$ total)
  * **Hardware Kit H (Qty: 1)**
    * M8 Bolts (Qty: 16)
    * M8 Locking Nuts (Qty: 16)

### Required Quantities for 250 End Units
To find total raw parts required, multiply down the tree branches:

| Part Code | Description | Quantity per End Unit | Total Required for 250 Workbenches |
| :--- | :--- | :---: | :---: |
| **Sub-Assy T** | Tabletop Assembly | $1$ | $250 \times 1 = \mathbf{250}$ |
| **Wood Top** | Core Timber Surface | $1 \times 1 = 1$ | $250 \times 1 = \mathbf{250}$ |
| **Steel Edging**| Protective Perimeter Trim | $4 \times 1 = 4$ | $250 \times 4 = \mathbf{1,000}$ |
| **Leg Frame L**| Welded Leg Frame | $2$ | $250 \times 2 = \mathbf{500}$ |
| **Square Tube**| 40mm Steel Tube Sections | $2 \times 2 = 4$ | $250 \times 4 = \mathbf{1,000}$ |
| **Foot Pad** | Molded Rubber Leveler | $2 \times 2 = 4$ | $250 \times 4 = \mathbf{1,000}$ |
| **Kit H** | Pre-packaged Hardware | $1$ | $250 \times 1 = \mathbf{250}$ |
| **M8 Bolts** | High-tensile fasteners | $16 \times 1 = 16$ | $250 \times 16 = \mathbf{4,000}$ |
| **M8 Nuts** | Locking Hex Nuts | $16 \times 1 = 16$ | $250 \times 16 = \mathbf{4,000}$ |

---

## 6. Common Quantitative Calculation Pitfalls on Exams

> [!WARNING]
> **Pitfall 1: Confusing Unit Contribution Margin with Total Revenue**
> In the formula $Q_{BEP} = \frac{FC}{P - v}$, students frequently forget to subtract $v$ from $P$ in the denominator, writing $\frac{FC}{P}$. This is catastrophic and produces a completely wrong volume!

> [!WARNING]
> **Pitfall 2: Forgetting to Check if an Intermediate Process is Dominated**
> When given 3 processes (like A, B, and C), always check whether the middle process actually has an active zone. If $Q_{BC} > Q_{AB}$, Process B is strictly dominated and should **never** be used at any volume!

> [!WARNING]
> **Pitfall 3: Inverting Fixed Cost Differences**
> When solving $Q = \frac{FC_1 - FC_2}{v_2 - v_1}$, ensure the numerators and denominators are matched in sign ($FC_{\text{high}} - FC_{\text{low}}$ divided by $v_{\text{high}} - v_{\text{low}}$). Volume must always be a positive integer!
