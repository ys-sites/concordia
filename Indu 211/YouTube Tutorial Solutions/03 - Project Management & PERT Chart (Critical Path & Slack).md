# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 03: Project Management & PERT / CPM Scheduling
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 3: INDU 211 - PERT Chart](https://www.youtube.com/watch?v=b2g1kZrEYtk)
> * **Video ID**: `b2g1kZrEYtk` · **Duration**: 6:52
> * **Target Exam Scope**: 🏁 **FINAL EXAM (Weeks 7–12, Chapters 14, 15, 8, 17)**
> * **Curriculum Context**: Chapter 17 — Project Management

---

## 1. Project Description & Activity Precedence Table

An industrial engineering project proposal involves seven distinct activities (**A through G**). The durations (in weeks) and strict immediate predecessor prerequisites are summarized in the project table below:

| Activity | Name / Description | Immediate Predecessors | Duration (Weeks) |
| :---: | :--- | :---: | :---: |
| **A** | Assess Customer Needs | None | 2 |
| **B** | Write & Submit Proposal | A | 1 |
| **C** | Obtain Client Approval | B | 1 |
| **D** | Preliminary Engineering Design | C | 2 |
| **E** | Prototype Fabrication | C | 5 |
| **F** | System Testing & Validation | D, E | 5 |
| **G** | Final Client Delivery | F | 1 |

---

## 2. Activity-on-Node (AON) Network Construction

1. **Start of Project**:
   * Activity **A** has no prerequisites. Draw node **A** with duration $2\text{ weeks}$.
2. **Sequential Precedence**:
   * Activity **B** (duration $1$) requires **A** $\implies A \to B$.
   * Activity **C** (duration $1$) requires **B** $\implies B \to C$.
3. **Parallel Branching at Node C**:
   * Activities **D** and **E** both depend strictly upon **C** being completed.
   * Node **C** branches into two parallel trajectories:
     * Upper Branch: Node **D** (duration $2\text{ weeks}$).
     * Lower Branch: Node **E** (duration $5\text{ weeks}$).
4. **Network Re-Convergence at Node F**:
   * Activity **F** (duration $5$) requires **both** D and E to be 100% finished before it can begin.
   * Both paths converge into Node **F**.
5. **Final Project Completion**:
   * Activity **G** (duration $1$) depends upon **F** $\implies F \to G$.

---

## 3. Path Enumeration & Critical Path Identification

A path through the project network is any continuous sequence of activities from the project start (Node A) to the project conclusion (Node G):

| Path Number | Activity Sequence | Week Durations | Total Cumulative Duration |
| :---: | :--- | :---: | :---: |
| **Path 1** | $A \to B \to C \to \mathbf{D} \to F \to G$ | $2 + 1 + 1 + \mathbf{2} + 5 + 1$ | **12 Weeks** |
| **Path 2** | $A \to B \to C \to \mathbf{E} \to F \to G$ | $2 + 1 + 1 + \mathbf{5} + 5 + 1$ | **15 Weeks** |

### The Critical Path Decision:
* The **Critical Path** is defined as the sequence of dependent activities with the **longest total duration** through the network. It dictates the minimum calendar time required to complete the entire project.
* **Critical Path**:
  $$\mathbf{A \to B \to C \to E \to F \to G}$$
* **Minimum Project Completion Duration**:
  $$\text{Total Duration} = \mathbf{15\text{ Weeks}}$$

---

## 4. Total Slack & Delay Sensitivity Analysis

* **Why does the Critical Path route through E instead of D?**
  * Activity F cannot begin until **both** D and E are completed.
  * Even if Activity D finishes in 2 weeks, the project cannot advance to testing because Prototype Fabrication (E) requires 5 weeks.
* **Activity D Slack**:
  $$\text{Total Slack for Activity D} = 15 - 12 = \mathbf{3\text{ Weeks}}$$
  * Activity D can experience up to **3 weeks of delay** without extending the overall project completion deadline of 15 weeks.
* **Critical Activity Sensitivities**:
  * Activities on the critical path ($A, B, C, E, F, G$) have **zero slack** ($\text{Slack} = 0$).
  * Any delay in any of these critical activities causes a direct, day-for-day delay in the overall 15-week delivery date.
