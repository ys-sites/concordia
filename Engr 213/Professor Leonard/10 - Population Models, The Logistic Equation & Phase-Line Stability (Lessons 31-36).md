# Topic 10: Population Models, The Logistic Equation & Phase-Line Stability
### Professor Leonard Master Series · Lessons 31 to 36
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: From Malthus to Verhulst
Professor Leonard introduces population dynamics with a reality check:
> *"Malthusian growth says $\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}$. That means bacteria would engulf the Earth in three days! In the real world, food runs out, space runs out, and competition kicks in. The Logistic Equation introduces a braking term $(1 - P/K)$, where $K$ is the Carrying Capacity. When $P \ll K$, growth is exponential. When $P \to K$, growth grinds to a halt!"*

$$\frac{dP}{dt} = r P \left(1 - \frac{P}{K}\right)$$

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 10.1: Derivation of the Logistic Solution & Inflection Point
**Statement**: Solve the logistic IVP $\frac{dP}{dt} = r P \left(1 - \frac{P}{K}\right), P(0) = P_0$. Show that the maximum growth rate occurs at $P = K/2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate variables**:
  $$\frac{dP}{P(1 - P/K)} = r dt \implies \frac{K dP}{P(K - P)} = r dt$$
* **Step 2: Partial Fractions**:
  $$\frac{K}{P(K - P)} = \frac{1}{P} + \frac{1}{K - P}$$
* **Step 3: Integrate**:
  $$\int \left(\frac{1}{P} + \frac{1}{K - P}\right) dP = \int r dt$$
  $$\ln|P| - \ln|K - P| = rt + C_1 \implies \ln\left|\frac{P}{K - P}\right| = rt + C_1$$
* **Step 4: Exponentiate**:
  $$\frac{P}{K - P} = A e^{rt} \quad \text{where } A = \frac{P_0}{K - P_0}$$
* **Step 5: Solve for $P(t)$**:
  $$P(t) = A e^{rt}(K - P) \implies P(1 + A e^{rt}) = A K e^{rt}$$
  $$P(t) = \frac{A K e^{rt}}{1 + A e^{rt}} = \frac{K}{1 + A^{-1}e^{-rt}} = \frac{K P_0}{P_0 + (K - P_0)e^{-rt}}$$
* **Step 6: Maximum Growth Rate (Inflection Point)**:
  Growth rate is $f(P) = r P - \frac{r}{K}P^2$.
  Maximize by differentiating with respect to $P$:
  $$f'(P) = r - \frac{2r}{K}P = 0 \implies P = \frac{K}{2}$$
  The population grows fastest when it reaches **exactly half of carrying capacity**!

---

### Problem 10.2: Constant Harvesting & Saddle-Node Bifurcation Catastrophe
**Statement**: A fishery grows logistically with $r = 1, K = 10$, but fish are harvested at a constant rate $h$:
$$\frac{dP}{dt} = P\left(1 - \frac{P}{10}\right) - h$$
1. Find the critical harvesting rate $h_c$ above which the population collapses to extinction.
2. Analyze the stability of equilibria for $h < h_c, h = h_c, h > h_c$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Find equilibrium points**:
  $$-\frac{1}{10}P^2 + P - h = 0 \implies P^2 - 10P + 10h = 0$$
  Using quadratic formula:
  $$P = \frac{10 \pm \sqrt{100 - 40h}}{2} = 5 \pm \sqrt{25 - 10h}$$
* **Step 2: Bifurcation Value $h_c$**:
  The discriminant must be non-negative for real equilibria:
  $$25 - 10h = 0 \implies h_c = 2.5$$
* **Step 3: Stability Analysis across Cases**:
  - **Case 1: $h < 2.5$ (Sustainable)**: Two equilibria $P_1 < 5 < P_2$.
    - $P_2 = 5 + \sqrt{25-10h}$ is **Stable Sink** (carrying capacity reduced by harvesting).
    - $P_1 = 5 - \sqrt{25-10h}$ is **Unstable Threshold** (if population drops below $P_1$, it collapses to 0).
  - **Case 2: $h = 2.5$ (Critical)**: One semi-stable equilibrium at $P = 5$.
  - **Case 3: $h > 2.5$ (Over-harvesting Catastrophe)**: No real equilibria exist. $\frac{dP}{dt} < 0$ everywhere. **Extinction is 100% guaranteed in finite time!**

---

### Problem 10.3: The Allee Effect (Extinction Threshold)
**Statement**: For $\frac{dP}{dt} = -k P \left(1 - \frac{P}{M}\right)\left(1 - \frac{P}{K}\right)$ with $0 < M < K$:
Classify the stability of $P = 0, M, K$.

**Step-by-Step Whiteboard Solution**:
* **Equilibria**: $P = 0, M, K$.
- $0 < P < M$: $\frac{dP}{dt} < 0 \implies$ population declines to 0! $M$ is the minimum viable population!
- $M < P < K$: $\frac{dP}{dt} > 0 \implies$ population rises to $K$.
- $P > K$: $\frac{dP}{dt} < 0 \implies$ population drops to $K$.
* **Conclusion**:
  - $P = 0$: **Stable Sink**.
  - $P = M$: **Unstable Source** (The Allee Threshold).
  - $P = K$: **Stable Sink** (Carrying Capacity).

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Partial Fractions Minus Sign**: $\int \frac{1}{K-P}dP = -\ln|K-P|$. Forgetting the minus sign ruins the exponent!
- **Trap 2: Confusing Rate with Population**: $P = K/2$ is the point of maximum *growth rate*, not maximum population.
