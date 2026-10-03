# Lesson 04: Linear First-Order Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 4
> * **Direct Video Link**: [Linear First-Order Differential Equations](https://www.youtube.com/watch?v=rO31HNxBedg&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=4)
> * **Target Exam Scope**: Midterm 1 Scope · Chapter 2.3
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that when an equation cannot be separated because $y$ and $dy/dx$ are locked together in a sum, we use the magic of the Integrating Factor. By multiplying the entire equation by an engineered factor $\mu(x) = e^{\int P(x)dx}$, the left side magically collapses into the derivative of a single product $rac{d}{dx}[\mu(x) y]$ via the reverse Product Rule. One simple integration then unlocks the solution!

---

## 2. Core Theoretical Framework & Rigorous Formulations
### The 5-Step Integrating Factor Recipe


  - **Standard Form**: Divide by the leading coefficient so that the coefficient of $y'$ is exactly 1:
  $$\frac{dy}{dx} + P(x)y = Q(x)$$
  - **Compute Integrating Factor**: $\mu(x) = \exp\left(\int P(x) dx\right)$ (do not add $+C$ here).
  - **Multiply and Collapse**: Multiply across by $\mu(x)$:
  $$\frac{d}{dx}[\mu(x) y] = \mu(x) Q(x)$$
  - **Integrate Both Sides**: $\mu(x) y = \int \mu(x) Q(x) dx + C$ (add $+C$ right here!).
  - **Isolate $y(x)$**: $y(x) = \frac{1}{\mu(x)} \int \mu(x) Q(x) dx + \frac{C}{\mu(x)}$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Exam Master Problem: First-Order Linear ODE with Discontinuous Interval
**Problem Statement**:
> Solve the initial value problem $x \dfrac{dy}{dx} + 2y = 4x^2$, with $y(1) = 3$ for $x > 0$. Identify transient vs steady-state terms.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Normalize to Standard Form**:
  Divide by $x$: $y' + \frac{2}{x} y = 4x$. Here $P(x) = \frac{2}{x}$ and $Q(x) = 4x$.

* **Step 2: Determine Integrating Factor**:
  $\mu(x) = e^{\int \frac{2}{x} dx} = e^{2\ln x} = e^{\ln(x^2)} = x^2$ (valid for $x > 0$).

* **Step 3: Multiply and Collapse**:
  $x^2 y' + 2x y = 4x^3 \implies \frac{d}{dx}[x^2 y] = 4x^3$.

* **Step 4: Integrate Both Sides**:
  $x^2 y = \int 4x^3 dx + C = x^4 + C$.

* **Step 5: Solve for $y(x)$ and Apply IVP**:
  $y(x) = x^2 + \frac{C}{x^2}$. Apply $y(1) = 3 \implies 1^2 + \frac{C}{1^2} = 3 \implies C = 2$. Final solution: $y(x) = x^2 + \frac{2}{x^2}$. Transient term: $2/x^2 \to 0$ as $x \to \infty$; steady-state response: $x^2$.

> [!WARNING]
> **Common Exam Pitfall**: Forgetting to divide by the leading coefficient $a_1(x)$ before finding $P(x)$ is the single most common student error in ENGR 213 exams!

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Linear First-Order Differential Equations](https://www.youtube.com/watch?v=rO31HNxBedg&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=4)
- **Exam Takeaway**: Always normalize to $y' + P(x)y = Q(x)$ before calculating $\mu(x) = e^{\int P dx}$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
