# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 04: Queuing Theory ($M/M/1$) System Evaluation
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 4: INDU 211 - Queuing Theory Problem](https://www.youtube.com/watch?v=XT1EgQRcqmU)
> * **Video ID**: `XT1EgQRcqmU` · **Duration**: 17:23
> * **Target Exam Scope**: 🏁 **FINAL EXAM (Weeks 7–12, Chapters 14, 15, 8, 17)**
> * **Curriculum Context**: Chapter 15 — Probabilistic Operations Research Models

---

## 1. Operating Parameters & Model Classification

A downtown takeout fast-food restaurant operates a single customer service window open daily from 11:00 AM to 11:00 PM:
* **Daily Operating Horizon**: $T = 12\text{ hours/day}$ ($720\text{ minutes}$).
* **Customer Arrival Distribution**: Poisson process with an average inter-arrival time of 10 minutes:
  $$\text{Mean Arrival Rate } \lambda = \frac{1\text{ customer}}{10\text{ minutes}} = \mathbf{6\text{ customers/hour}}$$
* **Customer Service Distribution**: Exponential service process with an average service time of 4 minutes (order entry, preparation, payment):
  $$\text{Mean Service Rate } \mu = \frac{60\text{ minutes/hour}}{4\text{ minutes/customer}} = \mathbf{15\text{ customers/hour}}$$
* **Queuing Model Classification**: Single server ($s=1$), Poisson arrivals ($M$), Exponential service times ($M$), infinite queue capacity, First-Come-First-Served (FCFS) discipline: **$M/M/1$ Queuing System**.

---

## 2. Step-by-Step Worked Solutions

### Part 5.1: Estimated Server Busy Time in the 12-Hour Day

* **Step 1: Calculate Traffic Intensity (Server Utilization Factor $\rho$)**:
  $$\rho = \frac{\lambda}{\mu} = \frac{6}{15} = \mathbf{0.40} \quad (40\%)$$
  *(Because $\rho = 0.40 < 1.0$, the queuing system reaches steady-state stability).*

* **Step 2: Calculate Daily Window Busy Time**:
  $$\text{Daily Busy Time} = \rho \times T = 0.40 \times 12\text{ hours} = \mathbf{4.80\text{ hours/day}}$$
  $$\text{In Minutes} = 4.80 \times 60 = \mathbf{288\text{ minutes/day}}$$

---

### Part 5.2: Expected Customer Waiting Time in Queue ($W_q$)

* **Formula**:
  $$W_q = \frac{\lambda}{\mu(\mu - \lambda)}$$
* **Calculation**:
  $$W_q = \frac{6}{15(15 - 6)} = \frac{6}{15 \times 9} = \frac{6}{135} = \frac{2}{45}\text{ hours} \approx 0.0444\text{ hours}$$
* **Convert to Minutes**:
  $$W_q = \frac{2}{45} \times 60 = \frac{120}{45} = \mathbf{2.67\text{ minutes}}$$
* **Interpretation**: An arriving customer waits in line an average of **2 minutes and 40 seconds** before reaching the service window.

---

### Part 5.3: Expected Total Time in the System ($W$)

* **Formula**:
  $$W = W_q + \frac{1}{\mu} = \frac{1}{\mu - \lambda}$$
* **Calculation**:
  $$W = \frac{1}{15 - 6} = \frac{1}{9}\text{ hours} \approx 0.1111\text{ hours}$$
* **Convert to Minutes**:
  $$W = \frac{1}{9} \times 60 = \mathbf{6.67\text{ minutes}}$$
* **Interpretation**: A customer spends an average of **6 minutes and 40 seconds** total at the restaurant (waiting in line plus ordering, paying, and receiving food).

---

### Part 5.4: Congestion Analysis — Daily Hours with $\ge 2$ Customers in the System

* **Step 1: State Probability for an $M/M/1$ Queue**:
  The steady-state probability of having exactly $n$ customers in the system is:
  $$P_n = (1 - \rho)\rho^n$$
* **Step 2: Probability of 2 or More Customers ($P(n \ge 2)$)**:
  $$\begin{aligned}
  P(n \ge 2) &= 1 - P_0 - P_1 \\
  &= 1 - (1 - \rho)\rho^0 - (1 - \rho)\rho^1 \\
  &= 1 - (1 - \rho) - \rho(1 - \rho) \\
  &= \rho - \rho(1 - \rho) = \mathbf{\rho^2}
  \end{aligned}$$
* **Substitute Utilization Factor $\rho = 0.40$**:
  $$P(n \ge 2) = (0.40)^2 = \mathbf{0.16} \quad (16\%)$$

* **Step 3: Calculate Daily Congestion Operating Hours**:
  $$\text{Daily Congestion Time} = P(n \ge 2) \times T = 0.16 \times 12\text{ hours} = \mathbf{1.92\text{ hours/day}}$$
  $$\text{In Minutes} = 1.92 \times 60 = \mathbf{115.2\text{ minutes/day}}$$
* **Conclusion**: During a typical 12-hour business day, the restaurant experiences a queue with two or more customers for approximately **1 hour and 55 minutes**.
