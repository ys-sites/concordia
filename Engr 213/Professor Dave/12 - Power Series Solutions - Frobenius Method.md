# Lesson 12: Power Series Solutions - Frobenius Method
### Professor Dave Explains Differential Equations Master Series · Lesson 12
> * **Direct Video Link**: [Power Series Solutions Part 2: Frobenius Method](https://www.youtube.com/watch?v=58_qJyfVl-Y&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=12)
> * **Target Exam Scope**: Final Exam Scope · Chapter 5.3
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that when an ODE has a singular point (where leading coefficients vanish, like $x^2 y'' + x y' + (x^2 - 
u^2)y = 0$), regular Taylor series fail. If the singularity is 'regular' (tame enough that $x P(x)$ and $x^2 Q(x)$ remain analytic), Ferdinand Georg Frobenius showed that multiplying a power series by an unknown fractional or negative power $x^r$ rescues the solution: $y = x^r \sum c_n x^n$. The lowest-order balance yields the Indicial Equation, which dictates the fundamental physics of the solution.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### The Frobenius Framework at $x_0 = 0$

Given $x^2 y'' + x[x P(x)] y' + [x^2 Q(x)] y = 0$ with $p_0 = \lim_{x \to 0} x P(x)$ and $q_0 = \lim_{x \to 0} x^2 Q(x)$:

$$y(x) = \sum_{n=0}^\infty c_n x^{n+r}, \quad (c_0 \neq 0)$$
**The Indicial Equation** (from the lowest power $x^r$):

$$I(r) = r(r - 1) + p_0 r + q_0 = 0$$

  - **Case 1 ($r_1 - r_2 \notin \mathbb{Z}$)**: Two clean Frobenius series $y_1 = x^{r_1}\sum a_n x^n$ and $y_2 = x^{r_2}\sum b_n x^n$.
  - **Case 2 ($r_1 = r_2 = r$)**: Second solution requires a logarithm: $y_2 = y_1(x) \ln x + x^r \sum b_n x^n$.
  - **Case 3 ($r_1 - r_2 = N \in \mathbb{Z}^+$)**: $y_2 = C y_1(x) \ln x + x^{r_2} \sum b_n x^n$ (where $C$ may be zero).

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Frobenius Problem: Finding the Indicial Equation and Primary Series
**Problem Statement**:
> For $2x y'' + y' + x y = 0$, verify that $x = 0$ is a regular singular point, determine the indicial roots, and formulate the recurrence relation.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Verify Regular Singularity**:
  Normalize: $y'' + \frac{1}{2x} y' + \frac{1}{2} y = 0$. $p(x) = x P(x) = \frac{1}{2}$ (analytic). $q(x) = x^2 Q(x) = \frac{1}{2} x^2 \to 0$ as $x \to 0$ (analytic). Regular singular point confirmed!

* **Step 2: Derive Indicial Equation**:
  $r(r - 1) + p_0 r + q_0 = r(r - 1) + \frac{1}{2} r + 0 = r^2 - \frac{1}{2} r = r\left(r - \frac{1}{2}\right) = 0$.

* **Step 3: Evaluate Indicial Roots**:
  $r_1 = \frac{1}{2}, \quad r_2 = 0$. Since $r_1 - r_2 = \frac{1}{2} \notin \mathbb{Z}$, this falls under Frobenius Case 1 (two linearly independent non-logarithmic series!).

* **Step 4: Recurrence for $r_1 = 1/2$**:
  Substituting $y = \sum c_n x^{n+1/2}$ yields the recurrence $c_n = -\frac{c_{n-2}}{2n(2n+1)}$ for $n \ge 2$, generating alternating even-step coefficients.

> [!WARNING]
> **Common Exam Pitfall**: Never assume $c_0 = 0$ in a Frobenius problem. The entire method is premised on $c_0 \neq 0$ so that the indicial coefficient accurately isolates the roots $r_1, r_2$.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Power Series Solutions Part 2: Frobenius Method](https://www.youtube.com/watch?v=58_qJyfVl-Y&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=12)
- **Exam Takeaway**: Regular singular points require $y = x^r \sum c_n x^n$. The indicial equation $r(r-1) + p_0 r + q_0 = 0$ dictates whether logarithms appear.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
