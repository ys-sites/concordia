# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 06: Linear Programming Production Modeling
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 6: INDU 211 - Modeling Problem](https://www.youtube.com/watch?v=Rwc_f6IzUQk)
> * **Video ID**: `Rwc_f6IzUQk` · **Duration**: 18:11
> * **Target Exam Scope**: 🏁 **FINAL EXAM (Weeks 7–12, Chapters 14, 15, 8, 17)**
> * **Curriculum Context**: Chapter 14 — Deterministic Operations Research Models

---

## 1. Problem Description & Operational Data

A pharmaceutical manufacturing plant produces three commercial prescription drugs: **Drug A, Drug B, and Drug C**. The production process involves raw active ingredients, limited machine tool hours, market contract minimums, and strict proportional batch blending requirements:

* **Raw Active Ingredients**:
  * **Ingredient 1**: Maximum available supply $= \mathbf{4,000\text{ grams}}$.
  * **Ingredient 2**: Maximum available supply $= \mathbf{6,000\text{ grams}}$.

| Active Ingredient | Drug A ($x_A$) | Drug B ($x_B$) | Drug C ($x_C$) | Supply Limit |
| :--- | :---: | :---: | :---: | :---: |
| **Ingredient 1** | $20\text{ g/unit}$ | $33\text{ g/unit}$ | $50\text{ g/unit}$ | $\le 4,000\text{ g}$ |
| **Ingredient 2** | $50\text{ g/unit}$ | $20\text{ g/unit}$ | $60\text{ g/unit}$ | $\le 6,000\text{ g}$ |

* **Machine Time Availability**:
  * One unit of Drug A requires **twice** the machine time of Drug B ($t_A = 2 t_B$).
  * One unit of Drug A requires **three times** the machine time of Drug C ($t_A = 3 t_C$).
  * Total machine time available in the factory is sufficient to produce **1,500 units of Drug A** if 100% dedicated to Drug A.
* **Minimum Market Demand Thresholds**:
  * Demand for Drug A $\ge \mathbf{300\text{ units}}$.
  * Demand for Drug B $\ge \mathbf{400\text{ units}}$.
  * Demand for Drug C $\ge \mathbf{250\text{ units}}$.
* **Proportional Production Blend Ratio**:
  * Production volumes must be maintained in the exact ratio:
    $$x_A : x_B : x_C = 2 : 1 : 3$$
* **Profit Contribution Margins**:
  * Unit Profit for Drug A = **$40 / unit**
  * Unit Profit for Drug B = **$30 / unit**
  * Unit Profit for Drug C = **$60 / unit**

---

## 2. Complete Mathematical LP Model Formulation

### Step 1: Decision Variables
Let:
* $x_A$ = Number of units of Drug A produced
* $x_B$ = Number of units of Drug B produced
* $x_C$ = Number of units of Drug C produced

### Step 2: Objective Function
Maximize total company profit:
$$\text{Maximize } Z = 40 x_A + 30 x_B + 60 x_C$$

### Step 3: Raw Active Ingredient Constraints
* **Ingredient 1 Usage**:
  $$20 x_A + 33 x_B + 50 x_C \le 4000$$
* **Ingredient 2 Usage**:
  $$50 x_A + 20 x_B + 60 x_C \le 6000$$

### Step 4: Machine Hour Capacity Constraint
* **Relative Time Equivalence Derivation**:
  Because $t_A = 2 t_B$ and $t_A = 3 t_C$, producing 1 unit of Drug B consumes only $0.5$ equivalent units of Drug A machine capacity, and 1 unit of Drug C consumes $\frac{1}{3}$ equivalent units of Drug A capacity.
* **Capacity Inequality**:
  $$x_A + 0.5 x_B + \frac{1}{3} x_C \le 1500$$
  *(Or in integer form: $6 x_A + 3 x_B + 2 x_C \le 9000$)*.

### Step 5: Minimum Market Demand Constraints
To fulfill contracted customer shipments:
$$x_A \ge 300$$
$$x_B \ge 400$$
$$x_C \ge 250$$

### Step 6: Proportional Production Ratio Constraints
The production quantities must satisfy the ratio $x_A : x_B : x_C = 2 : 1 : 3$:
$$\frac{x_A}{2} = \frac{x_B}{1} = \frac{x_C}{3}$$
This breaks into two linear equality equations:
1. $\frac{x_A}{2} = x_B \implies x_A - 2 x_B = 0$
2. $\frac{x_C}{3} = x_B \implies 3 x_B - x_C = 0$

### Step 7: Non-Negativity Constraints
$$x_A \ge 0, \quad x_B \ge 0, \quad x_C \ge 0$$
