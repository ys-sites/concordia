# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 05: Traveling Salesperson Problem (Warehouse Forklift Routing)
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 5: INDU 211 - TSP Problem](https://www.youtube.com/watch?v=ayqA56IHMZ0)
> * **Video ID**: `ayqA56IHMZ0` · **Duration**: 15:24
> * **Target Exam Scope**: 🎯 **MIDTERM EXAM (Week 6, Chapters 1–5 & 7)**
> * **Exact Exam Match**: **Concordia 2020 Midterm Exam Problem 2 (18 Marks)**
> * **Curriculum Context**: Chapter 5 — Materials Handling, Distribution & Routing

---

## 1. Problem Description & Warehouse Asymmetric Distance Matrix

A warehouse forklift truck is stationed at parking depot **P** and must visit five production departments (**A, B, C, D, and E**) once per day to deliver batch parts, returning to **P** at the conclusion of the shift. All warehouse corridors are strictly **one-way**, producing an asymmetric distance matrix:

### Warehouse Asymmetric Distance Matrix ($d_{ij}$ in meters):

| From \ To | P | A | B | C | D | E |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P** | — | 15 | 18 | 20 | 25 | **13** |
| **A** | 24 | — | **12** | 16 | 13 | 14 |
| **B** | 19 | 14 | — | 18 | **15** | 17 |
| **C** | **22** | 16 | 21 | — | 19 | 15 |
| **D** | 20 | 17 | 19 | **20** | — | 12 |
| **E** | 18 | **9** | 15 | 13 | 16 | — |

---

## 2. Step-by-Step Problem Solutions

### Part 2.1: Nearest Neighbor (NN) Heuristic Solution

* **Leg 1 (Start at Depot P)**:
  Distances from P to $\{A, B, C, D, E\}$: $15, 18, 20, 25, \mathbf{13}$.
  * Minimum distance is to **E** ($d_{PE} = 13$).
  * Tour so far: $P \to E$. Visited: $\{P, E\}$. Remaining: $\{A, B, C, D\}$.

* **Leg 2 (Move from E)**:
  Distances from E to $\{A, B, C, D\}$: $\mathbf{9}, 15, 13, 16$.
  * Minimum distance is to **A** ($d_{EA} = 9$).
  * Tour so far: $P \to E \to A$. Visited: $\{P, E, A\}$. Remaining: $\{B, C, D\}$.

* **Leg 3 (Move from A)**:
  Distances from A to $\{B, C, D\}$: $\mathbf{12}, 16, 13$.
  * Minimum distance is to **B** ($d_{AB} = 12$).
  * Tour so far: $P \to E \to A \to B$. Visited: $\{P, E, A, B\}$. Remaining: $\{C, D\}$.

* **Leg 4 (Move from B)**:
  Distances from B to $\{C, D\}$: $18, \mathbf{15}$.
  * Minimum distance is to **D** ($d_{BD} = 15$).
  * Tour so far: $P \to E \to A \to B \to D$. Visited: $\{P, E, A, B, D\}$. Remaining: $\{C\}$.

* **Leg 5 (Move from D to Last Node C)**:
  Only remaining unvisited node is **C**:
  $$d_{DC} = 20$$
  * Tour so far: $P \to E \to A \to B \to D \to C$.

* **Leg 6 (Return from C to Depot P)**:
  Return to depot P:
  $$d_{CP} = 22$$

#### Total Distance for Nearest Neighbor Tour:
$$\text{Tour 1}: P \to E \to A \to B \to D \to C \to P$$
$$\text{Total Distance} = 13 + 9 + 12 + 15 + 20 + 22 = \mathbf{91\text{ meters}}$$

---

### Part 2.2: Second-Nearest Neighbor Variant Solution

* **Rule**: Choose the **second nearest neighbor** on the first step out of depot P, then revert strictly to the nearest neighbor rule for all remaining stops.

* **Leg 1 (Start at Depot P)**:
  Distances from P: E ($13$), A ($15$), B ($18$), C ($20$), D ($25$).
  * 1st nearest: E ($13$).
  * **2nd nearest: A ($15$)**.
  * Tour so far: $P \to A$. Visited: $\{P, A\}$. Remaining: $\{B, C, D, E\}$.

* **Leg 2 (Move from A)**:
  Unvisited $\{B, C, D, E\}$: $\mathbf{12}, 16, 13, 14 \implies \text{Pick } \mathbf{B}$ ($d_{AB} = 12$).
  * Tour so far: $P \to A \to B$.

* **Leg 3 (Move from B)**:
  Unvisited $\{C, D, E\}$: $18, \mathbf{15}, 17 \implies \text{Pick } \mathbf{D}$ ($d_{BD} = 15$).
  * Tour so far: $P \to A \to B \to D$.

* **Leg 4 (Move from D)**:
  Unvisited $\{C, E\}$: $20, \mathbf{12} \implies \text{Pick } \mathbf{E}$ ($d_{DE} = 12$).
  * Tour so far: $P \to A \to B \to D \to E$.

* **Leg 5 (Move from E to Last Node C)**:
  Only unvisited node is **C**: $d_{EC} = 13$.
  * Tour so far: $P \to A \to B \to D \to E \to C$.

* **Leg 6 (Return from C to Depot P)**:
  Return to depot P: $d_{CP} = 22$.

#### Total Distance for Variant Tour:
$$\text{Tour 2}: P \to A \to B \to D \to E \to C \to P$$
$$\text{Total Distance} = 15 + 12 + 15 + 12 + 13 + 22 = \mathbf{89\text{ meters}}$$

---

### Part 2.3: Mathematical Evaluation of Heuristic Optimality

**Question**: *Are the solutions found in 2.1 ($91\text{ m}$) or 2.2 ($89\text{ m}$) optimal? Explain why or why not.*

* **Evaluation**: **NEITHER solution is guaranteed to be optimal.**
* **Engineering Justification**:
  1. **Greedy Myopic Behavior**: The nearest neighbor method is a greedy heuristic that selects locally optimal short legs early, but completely ignores global network structure.
  2. **The End-of-Tour Penalty**: By making short hops early, the forklift is forced into extremely long, suboptimal penalty legs at the end to close the loop ($D \to C = 20\text{ m}$ and $C \to P = 22\text{ m}$).
  3. **Direct Empirical Proof**: The fact that **Tour 2 ($89\text{ m}$)** is shorter than **Tour 1 ($91\text{ m}$)** proves that choosing the local minimum at step 1 ($E$ at $13\text{ m}$) produced a *worse* global tour ($91\text{ m}$) than choosing the longer initial leg ($A$ at $15\text{ m}$).

---

### Part 2.4: Search Space & Combinatorial Explosion

**Question**: *A student builds a "Total Search" app that enumerates all possible routes. Evaluate its optimality and compute the search space for 6 and 21 locations.*

* **2.4.1 Is Total Search Guaranteed Optimal?**
  * **Yes**. Exhaustive total search evaluates every single feasible closed tour in the finite solution space and selects the minimum. It is mathematically guaranteed to find the true global optimum.

* **2.4.2 Total Number of Routes for 6 Locations (Depot P + 5 Departments)**:
  $$\text{Total Permutations} = (n-1)! = (6-1)! = 5! = \mathbf{120\text{ possible tours}}$$

* **2.4.3 Total Number of Routes for 20 Additional Departments (Depot P + 20 Departments = 21 Locations)**:
  $$\text{Total Permutations} = (21-1)! = 20! \approx \mathbf{2.433 \times 10^{18}\text{ tours}}$$
  *(Or if 20 locations total including P: $(20-1)! = 19! \approx \mathbf{1.216 \times 10^{17}\text{ tours}}$)*.
  * At 1 billion route evaluations per second, exhaustive total search would take **77.1 years**, proving the **Combinatorial Explosion** of NP-hard problems and why heuristics are essential in practice.
