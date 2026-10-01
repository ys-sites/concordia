# Lesson 05: Introduction to Time Rate of Change
### Professor Leonard Differential Equations Master Series · Lesson 5
> * **Direct Video Link**: [Lesson 05: Introduction to Time Rate of Change](https://www.youtube.com/watch?v=yhklHobbuyg) · Duration: `19:24`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.3 — Differential Modeling Principles)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this 19-minute lecture, Professor Leonard transitions from abstract mathematical equations to applied physical modeling. He shows that the core of applied differential equations is translating verbal physical laws into derivative statements. Whenever a problem states 'the rate of change of quantity Q is proportional to...', it immediately dictates a differential equation $dQ/dt = k \cdot f(Q)$.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### 1. The Language of Rates: Verbal to Differential Translation
In physics and engineering, natural laws are formulated in terms of rates of change:
- **Verbal Statement**: "The rate of change of $y$ with respect to $t$ is directly proportional to $y$."
- **Differential Translation**:
  $$\frac{dy}{dt} \propto y \implies \frac{dy}{dt} = k y$$
  - If $k > 0$: Exponential Growth (unconstrained population, continuous compound interest).
  - If $k < 0$: Exponential Decay (radioactive decay, drug clearance from bloodstream).

### 2. Physical Balance Principles (Inflow vs. Outflow)
$$\frac{d(\text{Amount})}{dt} = \text{Rate of Inflow} - \text{Rate of Outflow}$$
- If Inflow $>$ Outflow $\implies d(\text{Amount})/dt > 0$ (accumulation).
- If Inflow $<$ Outflow $\implies d(\text{Amount})/dt < 0$ (depletion).
- If Inflow $=$ Outflow $\implies d(\text{Amount})/dt = 0$ (steady-state dynamic equilibrium).

### 3. Newton's Law of Cooling
"The rate of change of temperature $T(t)$ of an object is proportional to the difference between its temperature and the ambient medium temperature $T_m$."
$$\frac{dT}{dt} = -k (T - T_m), \quad k > 0$$
- If $T > T_m \implies dT/dt < 0$ (cooling down toward ambient).
- If $T < T_m \implies dT/dt > 0$ (warming up toward ambient).

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 05.1: Chalkboard Problem 5.1: Deriving and Solving the Exponential Growth Rate Law
**Problem Statement**:
> A bacterial culture initially contains 500 cells. The rate of growth is proportional to the current population. After 3 hours, the population reaches 1,500 cells. Formulate the initial value problem, solve for the population $P(t)$ at any time $t$, and determine when the population triples again (reaches 4,500 cells).

**Step-by-Step Whiteboard Solution**:
* **Step 1: Formulate the Differential Equation and Initial Conditions**:
  $$\frac{dP}{dt} = k P, \quad P(0) = 500, \quad P(3) = 1500$$

* **Step 2: Separate Variables and Integrate**:
  $$\frac{1}{P} dP = k dt \implies \int \frac{1}{P} dP = \int k dt$$
  $$\ln(P) = k t + C_1 \implies P(t) = C e^{kt} \quad (\text{since } P > 0)$$

* **Step 3: Apply Initial Condition $P(0) = 500$**:
  $$P(0) = C e^{0} = 500 \implies C = 500$$
  $$P(t) = 500 e^{kt}$$

* **Step 4: Apply Condition $P(3) = 1500$ to Find Growth Constant $k$**:
  $$1500 = 500 e^{3k} \implies 3 = e^{3k}$$
  Take the natural logarithm of both sides:
  $$\ln(3) = 3k \implies k = \frac{\ln(3)}{3} \approx 0.3662 \text{ hr}^{-1}$$
  Thus:
  $$P(t) = 500 e^{\left(\frac{\ln(3)}{3}\right)t} = 500 (3)^{t/3}$$

* **Step 5: Determine Time to Reach 4,500 Cells**:
  $$4500 = 500 (3)^{t/3} \implies 9 = 3^{t/3}$$
  Since $9 = 3^2$:
  $$2 = \frac{t}{3} \implies t = 6 \text{ hours}$$
  *(Notice the constant tripling period: 0 hr $\to$ 500; 3 hr $\to$ 1500; 6 hr $\to$ 4500; consistent with exponential scale!)*

> [!WARNING]
> **Common Exam Pitfall**: Forgetting to evaluate the units of $k$. $k$ carries inverse time units ($[\text{time}]^{-1}$). Keep $k$ in exact logarithmic form until final computation to eliminate rounding drift.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 05: Introduction to Time Rate of Change](https://www.youtube.com/watch?v=yhklHobbuyg)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
