# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solutions Video Series — Complete Roadmap & Curriculum Guide
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

## 1. Overview of the Video Tutorial Series

This master guide accompanies the official **INDU 211 Problem Solutions** video tutorial series for Concordia University. The series provides comprehensive walkthroughs of seven core quantitative problem types that appear on Concordia midterm and final examinations.

* **Full YouTube Playlist**: [INDU 211 - Problem Solutions Playlist](https://www.youtube.com/playlist?list=PLuGCuftTFDZz87QrfzlgnXXh6dTVS6Y11)
* **Total Duration**: ~1 hour 56 minutes of high-yield quantitative problem solving
* **Course Alignment**: Direct pedagogical correlation with Dr. Masoumeh Kazemi Zanjani's lecture curriculum and Turner, Mize, Case & Nazemetz's *Introduction to Industrial and Systems Engineering* (3rd Edition).

---

## 2. Curriculum Decoupling: Midterm vs. Final Exam Scope

To optimize your study strategy, the 7 problem types are strictly decoupled below into the **Midterm Exam (Week 6, 35% of Grade)** and the **Final Exam (Weeks 7–12, 50% of Grade)**:

| Guide # | Problem Title & Video Link | Duration | Curriculum Chapter | Target Exam | Core Method / Formula |
| :---: | :--- | :---: | :--- | :---: | :--- |
| **01** | [**Demand Forecasting**](https://www.youtube.com/watch?v=SOivSDdtTH8) | 20:35 | **Chapter 7**: Operations Planning & Control | 🎯 **MIDTERM** | $n$-Period Moving Average: $\hat{X}_t = \frac{1}{n}\sum_{i=1}^n X_{t-i}$, Forecast Error, Market Share $W = \frac{\text{Sales}}{\text{Share}}$ |
| **05** | [**Warehouse TSP Routing**](https://www.youtube.com/watch?v=ayqA56IHMZ0) | 15:24 | **Chapter 5**: Materials Handling & Routing | 🎯 **MIDTERM** | **2020 Midterm Exam Problem 2**: Nearest Neighbor Heuristic, Sub-optimality Proof, Tour Permutations $(n-1)!$ |
| **02** | [**Linear Programming Minimization**](https://www.youtube.com/watch?v=yTi70c0_cq8) | 19:44 | **Chapter 14**: Deterministic OR Models | 🏁 **FINAL** | Graphical Method with Equality Constraint ($X_1 + 3X_2 = 9$), 1D Line-Segment Feasible Space, Iso-Cost Propagation |
| **06** | [**LP Production Modeling**](https://www.youtube.com/watch?v=Rwc_f6IzUQk) | 18:11 | **Chapter 14**: Deterministic OR Models | 🏁 **FINAL** | Multi-Product Drug Formulation: Profit Objective, Raw Material Inequalities, Machine Time Equivalence, $2:1:3$ Ratio |
| **04** | [**Queuing Theory ($M/M/1$)**](https://www.youtube.com/watch?v=XT1EgQRcqmU) | 17:23 | **Chapter 15**: Probabilistic OR Models | 🏁 **FINAL** | Poisson Arrivals $\lambda$, Service Rate $\mu$, Traffic Intensity $\rho = \frac{\lambda}{\mu}$, $W_q = \frac{\lambda}{\mu(\mu-\lambda)}$, $P(n \ge 2) = \rho^2$ |
| **07** | [**Statistical Quality Control**](https://www.youtube.com/watch?v=1BcAZosLMb0) | 18:10 | **Chapter 8**: Quality Control & SPC | 🏁 **FINAL** | $\bar{X}-R$ Charts, Out-of-Control Sample Elimination, Process Standard Deviation $\hat{\sigma} = \frac{\bar{R}}{d_2}$, Capability $C_p = \frac{\text{USL}-\text{LSL}}{6\hat{\sigma}}$ |
| **03** | [**PERT / CPM Project Scheduling**](https://www.youtube.com/watch?v=b2g1kZrEYtk) | 6:52 | **Chapter 17**: Project Management | 🏁 **FINAL** | Activity-on-Node (AON) Network, Path Durations, Critical Path Identification (15 Weeks), Total Activity Slack |

---

## 3. Master Formula Quick Reference

### Module 1: Forecasting ($n$-Period Moving Average)
$$\hat{X}_t = \frac{X_{t-1} + X_{t-2} + \dots + X_{t-n}}{n}$$
$$\text{Forecast Error: } e_t = X_t - \hat{X}_t \quad (\text{Positive } e_t \implies \text{Underestimation / Stockout})$$
$$\text{Total Market Volume: } W = \frac{\text{Company Sales}}{\text{Company Market Share Percentage}}$$

### Module 2: Traveling Salesperson Problem & Search Space
$$\text{Total Closed Tours from Depot: } N_{\text{routes}} = (n-1)!$$
$$\text{Nearest Neighbor Rule: } \text{From current node } i, \text{ pick unvisited } j \text{ with } \min(d_{ij})$$

### Module 3: Linear Programming Graphical Corner Evaluation
$$\text{Objective Function: } \min Z = c_1 X_1 + c_2 X_2$$
$$\text{Corner Point Search: Evaluate } Z \text{ at all extreme boundary vertices; select minimum}$$

### Module 4: $M/M/1$ Standard Queuing Formulas
$$\text{Utilization Factor: } \rho = \frac{\lambda}{\mu} \quad (\text{Stable if } \rho < 1)$$
$$\text{Expected Waiting Time in Queue: } W_q = \frac{\lambda}{\mu(\mu - \lambda)}$$
$$\text{Expected Total Time in System: } W = W_q + \frac{1}{\mu} = \frac{1}{\mu - \lambda}$$
$$\text{Probability of Exactly } n \text{ Customers: } P_n = (1 - \rho)\rho^n$$
$$\text{Probability of } \ge k \text{ Customers: } P(n \ge k) = \rho^k$$

### Module 5: Statistical Process Control & Process Capability
$$\text{Revised Grand Mean: } \bar{\bar{X}}_{\text{revised}} = \frac{\sum \bar{X}_{\text{initial}} - \sum \bar{X}_{\text{out-of-control}}}{m - k}$$
$$\text{Estimated Process Standard Deviation: } \hat{\sigma} = \frac{\bar{R}}{d_2}$$
$$\text{Process Capability Ratio: } C_p = \frac{\text{USL} - \text{LSL}}{6 \hat{\sigma}} \quad (C_p \ge 1.33 \implies \text{Capable})$$

### Module 6: Project Scheduling (PERT / CPM)
$$\text{Critical Path: Sequence of dependent activities with the longest cumulative duration}$$
$$\text{Total Slack for Activity } i: \text{Slack}_i = \text{LS}_i - \text{ES}_i = \text{LF}_i - \text{EF}_i$$
