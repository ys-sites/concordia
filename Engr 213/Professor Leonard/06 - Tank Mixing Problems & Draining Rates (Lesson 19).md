# Topic 06: Tank Mixing Problems & Draining Rates
### Professor Leonard Master Series · Lesson 19
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Law of Conservation of Mass
Professor Leonard simplifies mixing problems down to a single undeniable physical truth:
> *"Rate of Accumulation = Rate of Input - Rate of Output"*

$$\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}}$$
Where:
- $A(t)$ is the mass of solute (pounds or kilograms) in the tank at time $t$.
- $R_{\text{in}} = (\text{Inflow fluid rate } r_{\text{in}}) \times (\text{Inflow concentration } c_{\text{in}})$.
- $R_{\text{out}} = (\text{Outflow fluid rate } r_{\text{out}}) \times (\text{Current tank concentration } c_{\text{out}}(t))$.
- If perfectly stirred: $c_{\text{out}}(t) = \frac{A(t)}{V(t)}$, where $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$.

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 6.1: Constant Volume Mixing Tank & Asymptotic Equilibrium
**Statement**: A 500-gallon tank initially contains 200 gallons of brine with 30 lbs of dissolved salt. Brine containing 2 lbs of salt per gallon enters at 3 gal/min. The well-stirred mixture leaves the tank at 3 gal/min.
1. Find the amount of salt $A(t)$ in the tank at any time $t \ge 0$.
2. Find the limiting amount of salt as $t \to \infty$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Check Tank Volume $V(t)$**:
  $r_{\text{in}} = 3$ gal/min, $r_{\text{out}} = 3$ gal/min $\implies \frac{dV}{dt} = 0 \implies V(t) = 200$ gallons (constant).
* **Step 2: Calculate Inflow Rate $R_{\text{in}}$**:
  $$R_{\text{in}} = (3\text{ gal/min}) \times (2\text{ lbs/gal}) = 6\text{ lbs/min}$$
* **Step 3: Calculate Outflow Rate $R_{\text{out}}$**:
  $$c_{\text{out}}(t) = \frac{A(t)}{200}\text{ lbs/gal}$$
  $$R_{\text{out}} = (3\text{ gal/min}) \times \left(\frac{A(t)}{200}\text{ lbs/gal}\right) = \frac{3}{200}A(t)\text{ lbs/min}$$
* **Step 4: Formulate the Differential Equation**:
  $$\frac{dA}{dt} = 6 - \frac{3}{200}A \implies \frac{dA}{dt} + \frac{3}{200}A = 6$$
  Initial condition: $A(0) = 30$ lbs.
* **Step 5: Solve using Integrating Factor**:
  $$\mu(t) = e^{\int \frac{3}{200} dt} = e^{\frac{3}{200}t}$$
  $$\frac{d}{dt}\left[e^{\frac{3}{200}t} A\right] = 6 e^{\frac{3}{200}t}$$
  $$e^{\frac{3}{200}t} A = 6 \left(\frac{200}{3}\right)e^{\frac{3}{200}t} + C = 400 e^{\frac{3}{200}t} + C$$
  $$A(t) = 400 + C e^{-\frac{3}{200}t}$$
* **Step 6: Apply $A(0) = 30$**:
  $$30 = 400 + C \implies C = -370$$
  $$A(t) = 400 - 370 e^{-\frac{3}{200}t}\text{ lbs}$$
* **Step 7: Physical Asymptotic Limit**:
  As $t \to \infty$, $e^{-\frac{3}{200}t} \to 0$.
  $$\lim_{t \to \infty} A(t) = 400\text{ lbs}$$
  *Sanity Check*: $V_{\text{final}} \times c_{\text{in}} = 200\text{ gal} \times 2\text{ lbs/gal} = 400\text{ lbs}$. Matches physics perfectly!

---

### Problem 6.2: Variable Volume Tank (The Overflow Catastrophe)
**Statement**: A large tank with a total capacity of 1000 Liters initially holds 500 L of pure water. Brine with 0.5 kg of salt per Liter enters at 4 L/min. The mixture leaves at 2 L/min.
1. When will the tank overflow?
2. What is the exact amount of salt in the tank at the moment of overflow?

**Step-by-Step Whiteboard Solution**:
* **Step 1: Determine the Volume Function $V(t)$**:
  $$\frac{dV}{dt} = r_{\text{in}} - r_{\text{out}} = 4 - 2 = 2\text{ L/min}$$
  $$V(t) = 500 + 2t$$
* **Step 2: Find Overflow Time $t_{\text{overflow}}$**:
  $$V(t) = 1000 \implies 500 + 2t = 1000 \implies 2t = 500 \implies t_{\text{overflow}} = 250\text{ minutes}$$
* **Step 3: Rates of Salt**:
  - $R_{\text{in}} = (4\text{ L/min}) \times (0.5\text{ kg/L}) = 2\text{ kg/min}$.
  - $R_{\text{out}} = (2\text{ L/min}) \times \left(\frac{A(t)}{500 + 2t}\text{ kg/L}\right) = \frac{2 A(t)}{500 + 2t} = \frac{A(t)}{250 + t}$.
* **Step 4: Differential Equation in Standard Form**:
  $$\frac{dA}{dt} + \frac{1}{250 + t}A = 2, \qquad A(0) = 0$$
* **Step 5: Integrating Factor**:
  $$\mu(t) = e^{\int \frac{1}{250 + t} dt} = e^{\ln(250 + t)} = 250 + t$$
* **Step 6: Multiply and Integrate**:
  $$\frac{d}{dt}[(250 + t) A] = 2(250 + t) = 500 + 2t$$
  $$(250 + t) A = \int (500 + 2t) dt = 500t + t^2 + C$$
  $$A(t) = \frac{500t + t^2 + C}{250 + t}$$
* **Step 7: Apply $A(0) = 0$**:
  $$0 = \frac{C}{250} \implies C = 0$$
  $$A(t) = \frac{500t + t^2}{250 + t} = \frac{t(500 + t)}{250 + t}\text{ kg}$$
* **Step 8: Evaluate at $t = 250$ min (Overflow)**:
  $$A(250) = \frac{250(500 + 250)}{250 + 250} = \frac{250(750)}{500} = \frac{750}{2} = 375\text{ kg}$$
  *Concentration at overflow*: $\frac{375\text{ kg}}{1000\text{ L}} = 0.375\text{ kg/L}$.

---

### Problem 6.3: Two-Tank Coupled Cascade
**Statement**: Tank 1 contains 100 L with 20 kg salt. Pure water flows into Tank 1 at 5 L/min. Tank 1 drains into Tank 2 (100 L, initially pure water) at 5 L/min. Tank 2 drains out at 5 L/min. Find the amount of salt $A_2(t)$ in Tank 2 at any time $t$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Solve Tank 1 First**:
  $$\frac{dA_1}{dt} = 0 - 5\left(\frac{A_1}{100}\right) = -\frac{1}{20}A_1 \implies A_1(t) = 20 e^{-t/20}$$
* **Step 2: Formulate Tank 2**:
  Input to Tank 2 is the output of Tank 1: $R_{\text{in}, 2} = \frac{5}{100}A_1(t) = \frac{1}{20}(20 e^{-t/20}) = e^{-t/20}$.
  Output of Tank 2: $R_{\text{out}, 2} = \frac{5}{100}A_2(t) = \frac{1}{20}A_2(t)$.
  $$\frac{dA_2}{dt} + \frac{1}{20}A_2 = e^{-t/20}, \qquad A_2(0) = 0$$
* **Step 3: Solve Tank 2 with Integrating Factor**:
  $$\mu(t) = e^{t/20}$$
  $$\frac{d}{dt}\left[e^{t/20} A_2\right] = e^{t/20} \cdot e^{-t/20} = 1$$
  $$e^{t/20} A_2 = t + C \implies A_2(t) = (t + C)e^{-t/20}$$
* **Step 4: Apply $A_2(0) = 0 \implies C = 0$**:
  $$A_2(t) = t e^{-t/20}\text{ kg}$$
  Notice that $A_2(t)$ peaks at $t = 20$ minutes with $A_{2,\text{max}} = 20/e \approx 7.36$ kg!

---

### Problem 6.4: Torricelli's Law for Tank Draining
**Statement**: A cylindrical water tank of height $H$ and radius $R$ drains through a small bottom hole of area $a$. If the water velocity exiting is $v = \sqrt{2gh}$, derive the time $T$ required to empty the tank completely.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Conservation of volume**:
  $$dV = A_{\text{tank}}(h) dh = - a v dt$$
  $$\pi R^2 dh = -a \sqrt{2gh} dt$$
* **Step 2: Separate variables**:
  $$h^{-1/2} dh = -\frac{a\sqrt{2g}}{\pi R^2} dt$$
* **Step 3: Integrate from $h = H$ at $t = 0$ to $h = 0$ at $t = T$**:
  $$\int_H^0 h^{-1/2} dh = -\frac{a\sqrt{2g}}{\pi R^2} \int_0^T dt$$
  $$\left[ 2h^{1/2} \right]_H^0 = -2\sqrt{H} = -\frac{a\sqrt{2g}}{\pi R^2} T$$
* **Step 4: Solve for $T$**:
  $$T = \frac{2\pi R^2 \sqrt{H}}{a \sqrt{2g}} = \frac{\pi R^2}{a} \sqrt{\frac{2H}{g}}$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Assuming Volume is Constant**: When $r_{\text{in}} \neq r_{\text{out}}$, $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$. The denominator is NOT constant!
- **Trap 2: Forgetting Inflow Concentration**: If pure water enters, $c_{\text{in}} = 0 \implies R_{\text{in}} = 0$. If brine enters, $R_{\text{in}} = r_{\text{in}} \cdot c_{\text{in}}$.
