# Topic 10: Population Models, The Logistic Equation & Phase-Line Stability
### Professor Leonard Master Series · Lessons 31 to 36
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Phase Lines & The Crowded Room
*"What is an Autonomous Differential Equation? It is an equation where the rate of change depends ONLY on the current state $y$, not on time $t$: $\frac{dy}{dt} = f(y)$."*

Think of a room with people:
* **Malthusian Exponential Growth**: $\frac{dP}{dt} = k P$. The more people, the faster it grows. But resources are not infinite!
* **Verhulst Logistic Growth**:
  $$\frac{dP}{dt} = r P\left(1 - \frac{P}{K}\right)$$
  Here, $K$ is the **Carrying Capacity**.
  * When population is small ($P \ll K$), $(1 - P/K) \approx 1 \implies \frac{dP}{dt} \approx r P$ (exponential takeoff!).
  * As population approaches $K$, $(1 - P/K) \to 0 \implies$ growth grinds to a halt!
  * If population exceeds $K$ ($P > K$), $(1 - P/K) < 0 \implies$ population starves and drops back towards $K$!

---

## 2. Curriculum Reference Diagram

![Figure 2.8.2: Logistic curve](./images/textbook_fig_2_8_2_logistic_curve.png)
*Figure 10.1: Logistic S-curve with inflection point at half the carrying capacity $P = K/2$ — from Textbook 7th Ed. Chapter 2 (Fig. 2.8.2).*

---

## 3. Phase Lines & Stability Classification
Set $f(y) = 0$ to find the **Critical / Equilibrium Points**:
Draw a vertical line (the phase line) marking the critical points:
1. **Asymptotically Stable (Attractor / Sink)**:
   * Arrows point towards the critical point from both above and below.
   * If perturbed, the system naturally returns to this state (like a ball at the bottom of a bowl).
2. **Unstable (Repeller / Source)**:
   * Arrows point away from the critical point on both sides.
   * Any tiny nudge causes the system to run away (like a pencil balanced on its tip).
3. **Semi-Stable**:
   * Arrows point towards it from one side, and away from the other.
