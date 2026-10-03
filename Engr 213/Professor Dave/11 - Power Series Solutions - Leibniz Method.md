# Lesson 11: Power Series Solutions - Leibniz Method
### Professor Dave Explains Differential Equations Master Series · Lesson 11
> * **Direct Video Link**: [Power Series Solutions Part 1: Leibniz Method](https://www.youtube.com/watch?v=g8iReAhrJcE&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=11)
> * **Target Exam Scope**: Final Exam Scope · Chapter 5.1 & 5.2
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that when differential equations have variable coefficients (like Airy's equation $y'' - x y = 0$ in quantum mechanics), polynomial series expansions unlock exact solutions. By expressing the unknown solution as an infinite power series $y(x) = \sum c_n x^n$, differentiating term-by-term, and shifting summation indices, the differential equation transforms into an algebraic recurrence relation that generates every coefficient in terms of the initial conditions $c_0 = y(0)$ and $c_1 = y'(0)$.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### Power Series Algorithm around Ordinary Point $x_0 = 0$


  - **Series Expansion**: $y(x) = \sum_{n=0}^\infty c_n x^n, \quad y'(x) = \sum_{n=1}^\infty n c_n x^{n-1}, \quad y''(x) = \sum_{n=2}^\infty n(n-1) c_n x^{n-2}$.
  - **Index Shifting**: Shift indices to align powers of $x^k$. In $y''$, let $k = n-2 \implies n = k+2$:
  $$\sum_{n=2}^\infty n(n-1) c_n x^{n-2} = \sum_{k=0}^\infty (k+2)(k+1) c_{k+2} x^k$$
  - **Combine and Factor**: Group all sums under a single $\sum_{k=0}^\infty [\dots] x^k = 0$.
  - **Recurrence Relation**: Set the bracketed coefficient to zero to express $c_{k+2}$ in terms of earlier coefficients.
  - **Decompose into Independent Bases**: $y(x) = c_0 y_1(x) + c_1 y_2(x)$.

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia Final Exam Problem: Power Series for Airy-Type ODE
**Problem Statement**:
> Find the power series solution of $y'' - x y = 0$ about the ordinary point $x_0 = 0$ up to terms in $x^5$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Substitute Series Expansions**:
  $\sum_{n=2}^\infty n(n-1)c_n x^{n-2} - x \sum_{n=0}^\infty c_n x^n = 0 \implies \sum_{n=2}^\infty n(n-1)c_n x^{n-2} - \sum_{n=0}^\infty c_n x^{n+1} = 0$.

* **Step 2: Align Exponents to $x^k$**:
  For 1st sum: $k = n-2 \implies \sum_{k=0}^\infty (k+2)(k+1)c_{k+2} x^k$. For 2nd sum: $k = n+1 \implies \sum_{k=1}^\infty c_{k-1} x^k$.

* **Step 3: Peel Off $k=0$ Term and Combine for $k \ge 1$**:
  At $k=0$: $(2)(1)c_2 = 0 \implies c_2 = 0$. For $k \ge 1$: $(k+2)(k+1)c_{k+2} - c_{k-1} = 0 \implies c_{k+2} = \frac{c_{k-1}}{(k+2)(k+1)}$.

* **Step 4: Compute Higher Coefficients**:
  For $k=1$: $c_3 = \frac{c_0}{(3)(2)} = \frac{c_0}{6}$. For $k=2$: $c_4 = \frac{c_1}{(4)(3)} = \frac{c_1}{12}$. For $k=3$: $c_5 = \frac{c_2}{(5)(4)} = 0$ (since $c_2 = 0$).

* **Step 5: Assemble General Solution**:
  $y(x) = c_0\left(1 + \frac{x^3}{6} + \dots\right) + c_1\left(x + \frac{x^4}{12} + \dots\right)$.

> [!WARNING]
> **Common Exam Pitfall**: Always peel off mismatched low-order terms (like $k=0$) before combining summations into a single bracket. Forgetting to set isolated terms to zero causes coefficient chaos.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Power Series Solutions Part 1: Leibniz Method](https://www.youtube.com/watch?v=g8iReAhrJcE&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=11)
- **Exam Takeaway**: Ordinary points always yield two linearly independent analytic series $y_1(x)$ (even/odd branches) weighted by $c_0$ and $c_1$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
