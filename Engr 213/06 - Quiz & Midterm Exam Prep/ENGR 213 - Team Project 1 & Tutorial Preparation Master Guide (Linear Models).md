# ENGR 213 · Applied Ordinary Differential Equations
# Team Project 1 & Tutorial Preparation Master Guide: Linear Mathematical Models
**Concordia University · Department of Building, Civil and Environmental Engineering**  
**Instructor**: Dr. A. Haghighat M. · **Curriculum**: Lecture 6 & Textbook Section 2.7 · **Deliverable**: 1-Hour In-Tutorial Team Project 1

---

## 1. Team Project 1 — Operational Rules & Strategic Playbook

### 1.1 Official Academic Regulations
```
┌────────────────────────────────────────────────────────────────────────┐
│                   TEAM PROJECT 1 TUTORIAL SPECIFICATIONS               │
├──────────────────────┬─────────────────────────────────────────────────┤
│ Delivery Mode        │ In-person during scheduled tutorial session     │
│ Time Duration        │ Exactly 1 hour (60 minutes)                     │
│ Team Size            │ Strictly 2 or 3 students (no solo, no 4+)       │
│ Submission Format    │ Physical paper submission at end of hour        │
│ Required Header      │ Full Names + Student IDs of ALL team members    │
│ Grading Policy       │ Identical grade assigned to all team members    │
└──────────────────────┴─────────────────────────────────────────────────┘
```

### 1.2 The 60-Minute Team Execution Protocol
To ensure top marks within the 1-hour time constraint, divide responsibilities dynamically:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE 60-MINUTE TUTORIAL TIME BUDGET                   │
├─────────┬───────────────────┬──────────────────────────────────────────┤
│ Window  │ Phase             │ Team Deliverables                        │
├─────────┼───────────────────┼──────────────────────────────────────────┤
│ 00–05 m │ Read & Classify   │ Identify archetype (Growth, Cool, Tank,  │
│         │                   │ Circuit). List given numeric parameters. │
│ 05–15 m │ Governing ODE     │ Write rate balance (Rin - Rout, KVL, etc)│
│         │ & Initial Cond.   │ Define variables with units [lb, gal, s] │
│ 15–35 m │ Analytic Solution │ Calculate integrating factor mu(t) or    │
│         │                   │ separate variables. Integrate completely.│
│ 35–45 m │ Evaluate Constants│ Apply IVP conditions to isolate c and k. │
│ 45–55 m │ Specific Answers  │ Solve for target time, limit, or amount. │
│ 55–60 m │ Audit & Header    │ Check units, box final answers, sign IDs.│
└─────────┴───────────────────┴──────────────────────────────────────────┘
```

> [!TIP]
> **Team Division Strategy**:
> * **Student A (Formulator / Lead)**: Sets up the differential equation, verifies signs (e.g., $k < 0$ in cooling, minus sign on outflow), and tracks boundary conditions.
> * **Student B (Algebraist / Integrator)**: Executes the calculus (integrating factor, definite/indefinite integrals, fractions).
> * **Student C (Validator / Auditor)**: Recalculates constants on a calculator, performs dimensional unit analysis, and checks limits as $t \to \infty$.

---

## 2. Core Mathematical Archetypes Summary

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 LINEAR MODELING MASTER FORMULARY (§2.7)                                      │
├──────────────────────┬───────────────────────────────┬───────────────────────────────────────────────────────┤
│ Archetype            │ Differential Equation         │ Master Integrated Solution                            │
├──────────────────────┼───────────────────────────────┼───────────────────────────────────────────────────────┤
│ Growth / Decay       │ dP/dt = k P                   │ P(t) = P0 * exp(k*t)                                  │
│ Newton's Cooling     │ dT/dt = k (T - Tm)            │ T(t) = Tm + (T0 - Tm) * exp(k*t)                      │
│ Tank (Equal Flow)    │ dA/dt + (Q/V0) A = cin * Q    │ A(t) = cin * V0 + (A0 - cin*V0) * exp(-(Q/V0)*t)      │
│ Tank (Unequal Flow)  │ dA/dt + [Qout/(V0+dQ*t)] A =  │ Integrate using mu(t) = [V0 + dQ*t]^(Qout/dQ)         │
│                      │ cin * Qin   (dQ = Qin - Qout) │                                                       │
│ LR Series Circuit    │ L (di/dt) + R i = E0          │ i(t) = (E0/R) * [1 - exp(-(R/L)*t)]  (if i(0) = 0)    │
│ RC Series Circuit    │ R (dq/dt) + (1/C) q = E0      │ q(t) = C*E0 * [1 - exp(-t/(R*C))]    (if q(0) = 0)    │
└──────────────────────┴───────────────────────────────┴───────────────────────────────────────────────────────┘
```

---

## 3. Deep Archetype Analysis & Step-by-Step Derivations

### Archetype 1: Exponential Growth, Decay & Half-Life
* **Governing Equation**: $\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}$.
* **Solving for Rate Constant $k$**: Given $P(t_1) = P_1$:
  $$k = \frac{1}{t_1} \ln\left(\frac{P_1}{P_0}\right)$$
* **Doubling Time**: $P(t) = 2P_0 \implies t_{\text{double}} = \frac{\ln 2}{k}$.
* **Half-Life ($t_{1/2}$)**: $P(t) = \frac{1}{2}P_0 \implies t_{1/2} = \frac{\ln(1/2)}{k} = -\frac{\ln 2}{k} \implies k = -\frac{\ln 2}{t_{1/2}}$.

---

### Archetype 2: Newton's Law of Cooling / Warming
* **Governing Equation**: $\frac{dT}{dt} = k(T - T_m)$.
* **General Solution**: $T(t) = T_m + (T_0 - T_m) e^{kt}$.
* **Crucial Sign Rules**:
  * In heat loss ($T > T_m$), $\frac{dT}{dt} < 0 \implies k < 0$.
  * In heat absorption ($T < T_m$), $(T - T_m) < 0$ and $\frac{dT}{dt} > 0 \implies k < 0$.
  * Therefore, **$k$ is always strictly negative**.
* **Variable Ambient Temperature $T_m(t)$**:
  If the ambient temperature changes with time (e.g., $T_m(t) = T_0 + A \sin(\omega t)$ or linear warming), the ODE becomes non-autonomous:
  $$\frac{dT}{dt} - k T = -k T_m(t)$$
  Solve using integrating factor $\mu(t) = e^{-kt}$.

---

### Archetype 3: Tank Mixture Problems (The #1 Tutorial Favorite)
* **General Mass Balance**:
  $$\frac{dA}{dt} = R_{in} - R_{out} = c_{in} Q_{in} - c_{out}(t) Q_{out}$$
* **Instantaneous Tank Volume**:
  $$V(t) = V_0 + (Q_{in} - Q_{out}) t = V_0 + \Delta Q \cdot t$$
* **Instantaneous Outflow Concentration**:
  $$c_{out}(t) = \frac{A(t)}{V(t)} = \frac{A(t)}{V_0 + \Delta Q \cdot t}$$

#### Sub-Case 3A: Equal Flow Rates ($Q_{in} = Q_{out} = Q \implies \Delta Q = 0$)
* Volume remains constant: $V(t) = V_0$.
* ODE: $\frac{dA}{dt} + \frac{Q}{V_0} A = c_{in} Q$.
* Integrating factor: $\mu(t) = e^{\frac{Q}{V_0} t}$.
* Analytic Solution:
  $$A(t) = c_{in} V_0 + (A_0 - c_{in} V_0) e^{-\frac{Q}{V_0} t}$$
* Steady-state limit: $\lim_{t \to \infty} A(t) = c_{in} V_0$.

#### Sub-Case 3B: Unequal Flow Rates ($Q_{in} \neq Q_{out}$)
* Volume is time-dependent: $V(t) = V_0 + (Q_{in} - Q_{out}) t$.
* ODE: $\frac{dA}{dt} + \frac{Q_{out}}{V_0 + \Delta Q t} A = c_{in} Q_{in}$.
* Integrating factor:
  $$P(t) = \frac{Q_{out}}{V_0 + \Delta Q t} \implies \int P(t) dt = \frac{Q_{out}}{\Delta Q} \ln(V_0 + \Delta Q t)$$
  $$\mu(t) = e^{\ln\left[(V_0 + \Delta Q t)^{\frac{Q_{out}}{\Delta Q}}\right]} = (V_0 + \Delta Q t)^{\frac{Q_{out}}{\Delta Q}}$$
* **Critical Boundary Check**:
  * If $Q_{in} > Q_{out}$, tank fills up! Valid only until overflow: $t_{\text{overflow}} = \frac{V_{\text{capacity}} - V_0}{Q_{in} - Q_{out}}$.
  * If $Q_{in} < Q_{out}$, tank empties! Valid only until dry: $t_{\text{empty}} = \frac{V_0}{Q_{out} - Q_{in}}$.

#### Sub-Case 3C: Pure Water Flush ($c_{in} = 0$)
* Input rate is zero: $R_{in} = 0$.
* $\frac{dA}{dt} = - \frac{Q}{V_0} A \implies A(t) = A_0 e^{-\frac{Q}{V_0} t}$ (pure exponential decay).

---

### Archetype 4: Series Electric Circuits (LR and RC)
* **Kirchhoff's Second Law**: $\sum V_{\text{drops}} = E(t)$.

#### LR Series Circuit:
$$L \frac{di}{dt} + R i = E(t) \implies \frac{di}{dt} + \frac{R}{L} i = \frac{E(t)}{L}$$
* Integrating factor: $\mu(t) = e^{\frac{R}{L} t}$.
* For constant DC voltage $E(t) = E_0$ and $i(0) = 0$:
  $$i(t) = \frac{E_0}{R}\left(1 - e^{-\frac{R}{L} t}\right)$$
* Steady-state current: $i_{ss} = \frac{E_0}{R}$. Transient current: $i_{tr}(t) = -\frac{E_0}{R} e^{-\frac{R}{L} t}$.
* Time constant: $\tau = \frac{L}{R}$ [seconds].

#### RC Series Circuit:
$$R \frac{dq}{dt} + \frac{1}{C} q = E(t) \quad \text{with } i(t) = \frac{dq}{dt}$$
* Integrating factor: $\mu(t) = e^{\frac{t}{RC}}$.
* For constant DC voltage $E_0$ and $q(0) = 0$:
  $$q(t) = C E_0 \left(1 - e^{-\frac{t}{RC}}\right)$$
  $$i(t) = \frac{dq}{dt} = \frac{E_0}{R} e^{-\frac{t}{RC}}$$
* Capacitive time constant: $\tau = R C$ [seconds].

---

## 4. Master Fully Solved Practice Problems (Tutorial & Exam Prep)

---

### Problem 1 (Bacterial Culture with Variable Benchmark)
**Statement**: A bacterial culture grows at a rate proportional to the population present. Initially, there are 500 bacteria. After 3 hours, the population reaches 1,500.
* (a) Find an explicit formula for population $P(t)$ at any time $t$ (in hours).
* (b) What will the population be after 8 hours?
* (c) When will the population reach 10,000?

#### Step-by-Step Solution:
* **Part (a)**:
  $$\frac{dP}{dt} = k P \implies P(t) = P_0 e^{kt}$$
  Given $P_0 = 500$:
  $$P(t) = 500 e^{kt}$$
  At $t = 3$, $P(3) = 1500$:
  $$1500 = 500 e^{3k} \implies e^{3k} = 3 \implies 3k = \ln 3 \implies k = \frac{\ln 3}{3} \approx 0.366204\text{ h}^{-1}$$
  Exact expression:
  $$P(t) = 500 e^{\left(\frac{\ln 3}{3}\right) t} = 500 \left(3^{t/3}\right)$$
* **Part (b)**:
  At $t = 8\text{ hours}$:
  $$P(8) = 500 \left(3^{8/3}\right) = 500 \times 3^{2.6667} \approx 500 \times 18.72075 \approx 9,360\text{ bacteria}$$
* **Part (c)**:
  Set $P(t) = 10,000$:
  $$10000 = 500 \left(3^{t/3}\right) \implies 3^{t/3} = \frac{10000}{500} = 20$$
  Take natural logarithm on both sides:
  $$\frac{t}{3} \ln 3 = \ln 20 \implies t = 3 \frac{\ln 20}{\ln 3} = 3 \times \frac{2.99573}{1.09861} \approx 8.18\text{ hours (8 h 11 min)}$$

---

### Problem 2 (Radioactive Half-Life & Forensic Isotope Decay)
**Statement**: A radioactive isotope decays at a rate proportional to the mass remaining. A sample initially has a mass of $120\text{ mg}$. After 24 hours, its mass has decayed to $90\text{ mg}$.
* (a) Determine the decay constant $k$ and the half-life $t_{1/2}$.
* (b) How much mass remains after 4 days?
* (c) How long will it take for $95\%$ of the original mass to decay?

#### Step-by-Step Solution:
* **Part (a)**:
  $$\frac{dA}{dt} = k A \implies A(t) = A_0 e^{kt} = 120 e^{kt}$$
  At $t = 24\text{ hours}$:
  $$90 = 120 e^{24k} \implies e^{24k} = \frac{90}{120} = 0.75 \implies 24k = \ln(0.75)$$
  $$k = \frac{\ln(0.75)}{24} = \frac{-0.287682}{24} \approx -0.0119868\text{ h}^{-1}$$
  Half-life $t_{1/2}$:
  $$t_{1/2} = \frac{-\ln 2}{k} = \frac{-0.693147}{-0.0119868} \approx 57.83\text{ hours (approx 2.41 days)}$$
* **Part (b)**:
  $4\text{ days} = 96\text{ hours}$:
  $$A(96) = 120 e^{(-0.0119868)(96)} = 120 e^{-1.15073} = 120 \times 0.316406 \approx 37.97\text{ mg}$$
  *(Notice: $96\text{ h} = 4 \times 24\text{ h}$, so $A = 120 \times (0.75)^4 = 120 \times 0.316406 = 37.97\text{ mg}$)*.
* **Part (c)**:
  When $95\%$ has decayed, $5\%$ remains:
  $$A(t) = 0.05 \times 120 = 6\text{ mg}$$
  $$120 e^{kt} = 6 \implies e^{kt} = 0.05 \implies kt = \ln(0.05)$$
  $$t = \frac{\ln(0.05)}{-0.0119868} = \frac{-2.99573}{-0.0119868} \approx 249.92\text{ hours (approx 10.41 days)}$$

---

### Problem 3 (Forensic Cooling & Time of Death)
**Statement**: A body is found in a room kept at a constant temperature of $68^\circ\text{F}$. At 9:00 AM, the body temperature is measured to be $85^\circ\text{F}$. At 11:00 AM, the temperature drops to $79^\circ\text{F}$. Assuming normal human body temperature at time of death was $98.6^\circ\text{F}$, estimate the time of death.

#### Step-by-Step Solution:
* **Step 1: Coordinate Frame**:
  Let $t = 0$ correspond to 9:00 AM.
  * $T_m = 68^\circ\text{F}$
  * $T(0) = 85^\circ\text{F}$
  * $T_0 - T_m = 85 - 68 = 17^\circ\text{F}$
  * General formula: $T(t) = 68 + 17 e^{kt}$
* **Step 2: Determine $k$ using 11:00 AM measurement ($t = 2\text{ hours}$)**:
  $$T(2) = 79 \implies 68 + 17 e^{2k} = 79 \implies 17 e^{2k} = 11$$
  $$e^{2k} = \frac{11}{17} \implies 2k = \ln\left(\frac{11}{17}\right) = -0.435318$$
  $$k = \frac{-0.435318}{2} \approx -0.217659\text{ h}^{-1}$$
* **Step 3: Solve for Time of Death $t_d$ when $T(t_d) = 98.6^\circ\text{F}$**:
  $$68 + 17 e^{k t_d} = 98.6 \implies 17 e^{k t_d} = 30.6 \implies e^{k t_d} = \frac{30.6}{17} = 1.8$$
  $$k t_d = \ln(1.8) \implies t_d = \frac{\ln(1.8)}{-0.217659} = \frac{0.587787}{-0.217659} \approx -2.7005\text{ hours}$$
* **Step 4: Clock Conversion**:
  $-2.7005\text{ hours}$ represents $2\text{ hours and } (0.7005 \times 60)\text{ min} = 2\text{ hours } 42\text{ minutes}$ before 9:00 AM:
  $$\text{9:00 AM} - 2\text{ h } 42\text{ min} = \mathbf{6:18\text{ AM}}$$

---

### Problem 4 (Brine Tank with Pure Water Washout)
**Statement**: A tank holds $200\text{ gal}$ of brine containing $40\text{ lb}$ of dissolved salt. Pure water is pumped into the tank at $4\text{ gal/min}$, and the thoroughly mixed solution is pumped out at the same rate.
* (a) Find the amount of salt $A(t)$ in the tank at any time $t$.
* (b) What is the salt concentration in the tank after 30 minutes?
* (c) At what time will the salt content be reduced to $5\text{ lb}$?

#### Step-by-Step Solution:
* **Part (a)**:
  * $V_0 = 200\text{ gal}$, $Q_{in} = Q_{out} = 4\text{ gal/min} \implies V(t) = 200\text{ gal}$.
  * Inflow is pure water: $c_{in} = 0 \implies R_{in} = 0$.
  * Outflow rate: $R_{out} = c_{out} Q_{out} = \left(\frac{A}{200}\right) \times 4 = \frac{A}{50}\text{ lb/min}$.
  $$\frac{dA}{dt} = - \frac{A}{50} \implies \frac{dA}{A} = - \frac{1}{50} dt$$
  $$A(t) = A_0 e^{-t/50} = 40 e^{-t/50}\text{ lb}$$
* **Part (b)**:
  At $t = 30\text{ min}$:
  $$A(30) = 40 e^{-30/50} = 40 e^{-0.6} = 40 \times 0.54881 = 21.95\text{ lb}$$
  Concentration:
  $$c(30) = \frac{A(30)}{V_0} = \frac{21.95\text{ lb}}{200\text{ gal}} \approx \mathbf{0.1098\text{ lb/gal}}$$
* **Part (c)**:
  Set $A(t) = 5\text{ lb}$:
  $$40 e^{-t/50} = 5 \implies e^{-t/50} = \frac{5}{40} = \frac{1}{8}$$
  $$-\frac{t}{50} = \ln\left(\frac{1}{8}\right) = -\ln 8 \implies t = 50 \ln 8 = 50(2.07944) \approx \mathbf{103.97\text{ minutes}}$$

---

### Problem 5 (Unequal Flow Rates — Accumulating Tank with Overflow)
**Statement**: A 500-gallon tank initially contains $200\text{ gallons}$ of pure water. A brine solution containing $3\text{ lb/gal}$ of salt is pumped in at $4\text{ gal/min}$. The well-stirred mixture is pumped out at $2\text{ gal/min}$.
* (a) Find the instantaneous volume $V(t)$ and the time when the tank begins to overflow.
* (b) Find the amount of salt $A(t)$ in the tank prior to overflow.
* (c) Determine the exact amount of salt in the tank at the instant of overflow.

#### Step-by-Step Solution:
* **Part (a): Volume & Overflow Time**:
  $$V(t) = V_0 + (Q_{in} - Q_{out}) t = 200 + (4 - 2)t = 200 + 2t\text{ gallons}$$
  Tank capacity is $500\text{ gallons}$. Overflow occurs when $V(t) = 500$:
  $$200 + 2t = 500 \implies 2t = 300 \implies t_{\text{overflow}} = \mathbf{150\text{ minutes}}$$
* **Part (b): Differential Equation Formulation**:
  * Inflow rate: $R_{in} = c_{in} Q_{in} = (3\text{ lb/gal}) \times (4\text{ gal/min}) = 12\text{ lb/min}$.
  * Outflow concentration: $c_{out}(t) = \frac{A(t)}{200 + 2t}$.
  * Outflow rate: $R_{out} = c_{out} Q_{out} = \frac{A(t)}{200 + 2t} \times 2 = \frac{2}{200 + 2t} A = \frac{1}{100 + t} A$.
  $$\frac{dA}{dt} + \frac{1}{100 + t} A = 12, \quad A(0) = 0$$
* **Integrating Factor Calculation**:
  $$\mu(t) = e^{\int \frac{1}{100 + t} dt} = e^{\ln(100 + t)} = 100 + t$$
* **Integration**:
  $$\frac{d}{dt}\left[ A(t)(100 + t) \right] = 12(100 + t)$$
  $$A(t)(100 + t) = 12 \int (100 + t) dt = 12\left[ 100t + \frac{t^2}{2} \right] + C = 1200t + 6t^2 + C$$
  $$A(t) = \frac{1200t + 6t^2 + C}{100 + t}$$
* **Initial Condition $A(0) = 0$**:
  $$0 = \frac{0 + C}{100} \implies C = 0$$
  $$A(t) = \frac{1200t + 6t^2}{100 + t} = \frac{6t(200 + t)}{100 + t}\text{ lb}, \quad \text{for } 0 \le t \le 150\text{ min}$$
* **Part (c): Salt at Overflow ($t = 150\text{ min}$)**:
  $$A(150) = \frac{1200(150) + 6(150)^2}{100 + 150} = \frac{180000 + 6(22500)}{250} = \frac{180000 + 135000}{250}$$
  $$A(150) = \frac{315000}{250} = \mathbf{1,260\text{ lb}}$$
  * Concentration at overflow: $c(150) = \frac{1260\text{ lb}}{500\text{ gal}} = \mathbf{2.52\text{ lb/gal}}$.

---

### Problem 6 (LR Series Circuit with Periodic AC Voltage)
**Statement**: An LR-series circuit contains an inductor $L = 1\text{ H}$ and resistor $R = 10\ \Omega$. An alternating voltage $E(t) = 100 \sin(10t)\text{ V}$ is applied. The initial current is $i(0) = 0$.
* Find the current $i(t)$ and identify the steady-state and transient components.

#### Step-by-Step Solution:
* **Step 1: Standard Linear ODE**:
  $$1 \frac{di}{dt} + 10 i = 100 \sin(10t) \implies \frac{di}{dt} + 10 i = 100 \sin(10t)$$
* **Step 2: Integrating Factor**:
  $$\mu(t) = e^{\int 10 dt} = e^{10t}$$
  $$\frac{d}{dt}\left[ i e^{10t} \right] = 100 e^{10t} \sin(10t)$$
* **Step 3: Evaluate Integral $\int e^{at} \sin(bt) dt$**:
  Using the standard formula $\int e^{at} \sin(bt) dt = \frac{e^{at}}{a^2 + b^2}[a \sin(bt) - b \cos(bt)]$:
  Here $a = 10, b = 10 \implies a^2 + b^2 = 100 + 100 = 200$:
  $$\int 100 e^{10t} \sin(10t) dt = 100 \times \frac{e^{10t}}{200} [10 \sin(10t) - 10 \cos(10t)] = 5 e^{10t} [\sin(10t) - \cos(10t)]$$
* **Step 4: Form General Solution**:
  $$i(t) e^{10t} = 5 e^{10t} [\sin(10t) - \cos(10t)] + C$$
  $$i(t) = 5\sin(10t) - 5\cos(10t) + C e^{-10t}$$
* **Step 5: Apply Initial Condition $i(0) = 0$**:
  $$0 = 5(0) - 5(1) + C \implies C = 5$$
  $$i(t) = \underbrace{5\sin(10t) - 5\cos(10t)}_{\text{Steady-State } i_{ss}(t)} + \underbrace{5 e^{-10t}}_{\text{Transient } i_{tr}(t)}\text{ Amperes}$$

---

### Problem 7 (RC Series Circuit Charging Dynamics)
**Statement**: A constant voltage $E_0 = 100\text{ V}$ is applied to a series circuit with resistance $R = 200\ \Omega$ and capacitance $C = 10^{-4}\text{ F}$ ($100\ \mu\text{F}$). If $q(0) = 0$:
* (a) Find charge $q(t)$ and current $i(t)$.
* (b) Find the maximum charge on the capacitor.
* (c) Calculate the time required for the capacitor to reach $90\%$ of its maximum charge.

#### Step-by-Step Solution:
* **Part (a)**:
  $$R \frac{dq}{dt} + \frac{1}{C} q = E_0 \implies 200 \frac{dq}{dt} + \frac{1}{10^{-4}} q = 100 \implies 200 \frac{dq}{dt} + 10000 q = 100$$
  Divide by 200:
  $$\frac{dq}{dt} + 50 q = 0.5$$
  Integrating factor: $\mu(t) = e^{50t}$.
  $$\frac{d}{dt}\left[ q e^{50t} \right] = 0.5 e^{50t} \implies q(t) e^{50t} = \frac{0.5}{50} e^{50t} + C_1 = 0.01 e^{50t} + C_1$$
  $$q(t) = 0.01 + C_1 e^{-50t}$$
  Using $q(0) = 0 \implies C_1 = -0.01$:
  $$q(t) = \mathbf{0.01\left(1 - e^{-50t}\right)\text{ Coulombs}}$$
  Current $i(t) = \frac{dq}{dt}$:
  $$i(t) = \frac{d}{dt}\left[ 0.01 - 0.01 e^{-50t} \right] = (-0.01)(-50) e^{-50t} = \mathbf{0.5 e^{-50t}\text{ Amperes}}$$
* **Part (b): Maximum Charge**:
  $$\lim_{t \to \infty} q(t) = q_{\max} = C E_0 = (10^{-4}\text{ F}) \times (100\text{ V}) = \mathbf{0.01\text{ Coulombs (10 mC)}}$$
* **Part (c): 90% Charge Horizon**:
  $$q(t) = 0.90 \times 0.01 = 0.009\text{ C}$$
  $$0.01(1 - e^{-50t}) = 0.009 \implies 1 - e^{-50t} = 0.9 \implies e^{-50t} = 0.1$$
  $$-50t = \ln(0.1) = -\ln(10) \implies t = \frac{\ln 10}{50} = \frac{2.302585}{50} \approx \mathbf{0.04605\text{ seconds (46.1 ms)}}$$

---

### Problem 8 (Two-Stage Environmental Reservoir Clean-up)
**Statement**: A chemical spill introduces $500\text{ kg}$ of a toxic industrial solvent into a $10,000\text{ m}^3$ settling pond. Remediation begins immediately by pumping clean water in at $50\text{ m}^3/\text{hour}$ and discharging treated water at the same rate. Safe environmental discharge mandates that solvent concentration must drop below $0.005\text{ kg/m}^3$.
* Determine how many hours and days the remediation pumps must operate continuously to achieve the safe threshold.

#### Step-by-Step Solution:
* **Step 1: Model Setup**:
  * Volume: $V_0 = 10,000\text{ m}^3$, $Q = 50\text{ m}^3/\text{h}$ (constant volume).
  * Initial solvent: $A_0 = 500\text{ kg}$.
  * Initial concentration: $c_0 = \frac{500}{10000} = 0.05\text{ kg/m}^3$.
  * Clean water inflow: $c_{in} = 0 \implies R_{in} = 0$.
  * Outflow rate: $R_{out} = \left(\frac{A}{10000}\right) \times 50 = \frac{A}{200}\text{ kg/h}$.
* **Step 2: Solve ODE**:
  $$\frac{dA}{dt} = - \frac{A}{200} \implies A(t) = 500 e^{-t/200}\text{ kg}$$
  Instantaneous concentration:
  $$c(t) = \frac{A(t)}{10000} = \frac{500 e^{-t/200}}{10000} = 0.05 e^{-t/200}\text{ kg/m}^3$$
* **Step 3: Solve for Target Threshold $c(t) = 0.005\text{ kg/m}^3$**:
  $$0.05 e^{-t/200} = 0.005 \implies e^{-t/200} = \frac{0.005}{0.05} = 0.1$$
  $$-\frac{t}{200} = \ln(0.1) = -\ln 10 \implies t = 200 \ln 10$$
  $$t = 200 \times 2.302585 = \mathbf{460.52\text{ hours}}$$
* **Step 4: Day Conversion**:
  $$\text{Days} = \frac{460.52}{24} \approx \mathbf{19.19\text{ days (approx 19 days and 5 hours)}}$$

---

## 5. Team Project 1 Pre-Submission Checklist

Before submitting your team's solution paper to the tutorial TA, verify each item:

* [ ] **All Team Members Listed**: Full Legal Names and 8-Digit Student ID Numbers clearly written at top right.
* [ ] **Model Stated Explicitly**: Did you write the differential equation with correct physical signs (e.g., $k < 0$, $-R_{out}$)?
* [ ] **Integrating Factor Complete**: Did you show the calculation of $\mu(t) = e^{\int P(t) dt}$?
* [ ] **Units on Every Constant**:
  * Rate constant $k$ has units $[1/\text{time}]$ ($\text{h}^{-1}$, $\text{min}^{-1}$, $\text{s}^{-1}$).
  * Mass $A(t)$ has units $[\text{lb}]$ or $[\text{kg}]$.
  * Current $i(t)$ has units $[\text{A}]$, charge $q(t)$ has units $[\text{C}]$.
* [ ] **Sanity Check on Limits**: Does your solution make physical sense as $t \to \infty$?
  * Mixture salt amount should approach $c_{in} V$.
  * Object temperature should approach $T_m$.
  * Current in LR circuit should approach $E_0/R$.
* [ ] **Boxed Final Answers**: Clearly box your final numerical answers and time horizons.

---
*Concordia University · Department of Building, Civil and Environmental Engineering · ENGR 213 Team Project 1 Master Guide*
