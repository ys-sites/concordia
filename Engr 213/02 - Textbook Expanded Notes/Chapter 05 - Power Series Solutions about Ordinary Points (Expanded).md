# Chapter 05: Power Series Solutions about Ordinary Points
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Official Course Textbook (7th Ed., Section 5.1.2)

---

## 1. Executive Summary & First-Principles Philosophy
When differential equations have variable coefficients (such as Airy's equation $y'' - x y = 0$ or Bessel's equation), closed-form elementary solutions (polynomials, sines, exponentials) generally do not exist. 

Instead, we represent the solution as an infinite **Power Series** centered at an ordinary point $x_0$:
$$y(x) = \sum_{n=0}^\infty c_n (x - x_0)^n$$
Substituting this series and its derivatives into the ODE allows us to shift summation indices, combine like powers of $x$, and derive a **Recurrence Relation** that expresses all higher coefficients $c_2, c_3, c_4, \dots$ in terms of the two fundamental arbitrary constants $c_0$ and $c_1$.

---

## 2. Core Mechanics & Mathematical Engine

### A. Ordinary vs Singular Points
Given standard form $y'' + P(x)y' + Q(x)y = 0$:
* A point $x_0$ is an **Ordinary Point** if both coefficient functions $P(x)$ and $Q(x)$ are **analytic** at $x_0$ (meaning they possess a convergent Taylor series; for rational functions, denominators must be non-zero at $x_0$).
* If either $P(x)$ or $Q(x)$ fails to be analytic at $x_0$, the point is a **Singular Point**.

### B. Index Shifting Mechanics
The key computational skill is shifting the summation index so that all sums share the common power $x^k$:
$$\sum_{n=2}^\infty n(n-1)c_n x^{n-2} \xrightarrow{k = n - 2} \sum_{k=0}^\infty (k+2)(k+1)c_{k+2} x^k$$
$$\sum_{n=1}^\infty n c_n x^n \xrightarrow{k = n} \sum_{k=1}^\infty k c_k x^k$$

---

## 3. Fully Worked Exam Archetype: Airy's Equation ($y'' - x y = 0$)

**Problem**: Find the first 4 non-zero terms of the general power series solution about $x_0 = 0$ for:
$$y'' - x y = 0$$

### Step-by-Step Solution:
* **Step 1: Assume power series representations**:
  $$y = \sum_{n=0}^\infty c_n x^n, \quad y' = \sum_{n=1}^\infty n c_n x^{n-1}, \quad y'' = \sum_{n=2}^\infty n(n-1)c_n x^{n-2}$$
* **Step 2: Substitute into ODE**:
  $$\sum_{n=2}^\infty n(n-1)c_n x^{n-2} - x\sum_{n=0}^\infty c_n x^n = 0$$
  $$\sum_{n=2}^\infty n(n-1)c_n x^{n-2} - \sum_{n=0}^\infty c_n x^{n+1} = 0$$
* **Step 3: Shift indices to common power $x^k$**:
  * First sum: let $k = n - 2 \implies n = k + 2$. Starts at $k = 0$:
    $$\sum_{k=0}^\infty (k+2)(k+1)c_{k+2} x^k$$
  * Second sum: let $k = n + 1 \implies n = k - 1$. Starts at $k = 1$:
    $$\sum_{k=1}^\infty c_{k-1} x^k$$
* **Step 4: Peel off the $k=0$ term from the first sum**:
  $$(2)(1)c_2 x^0 + \sum_{k=1}^\infty \left[(k+2)(k+1)c_{k+2} - c_{k-1}\right]x^k = 0$$
* **Step 5: Set coefficients to zero**:
  $$2c_2 = 0 \implies c_2 = 0$$
  $$(k+2)(k+1)c_{k+2} - c_{k-1} = 0 \implies c_{k+2} = \frac{c_{k-1}}{(k+2)(k+1)}, \quad k \ge 1$$
* **Step 6: Compute coefficients iteratively**:
  * For $k = 1$: $c_3 = \frac{c_0}{(3)(2)} = \frac{c_0}{6}$
  * For $k = 2$: $c_4 = \frac{c_1}{(4)(3)} = \frac{c_1}{12}$
  * For $k = 3$: $c_5 = \frac{c_2}{(5)(4)} = 0$ (since $c_2 = 0$)
  * For $k = 4$: $c_6 = \frac{c_3}{(6)(5)} = \frac{c_0 / 6}{30} = \frac{c_0}{180}$
* **Step 7: Assemble two linearly independent solutions**:
  $$y(x) = c_0\left(1 + \frac{x^3}{6} + \frac{x^6}{180} + \dots\right) + c_1\left(x + \frac{x^4}{12} + \dots\right)$$

---

## 4. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Peeling Off Terms**: Never combine sums before aligning their starting summation indices! If one sum starts at $k=0$ and the other at $k=1$, evaluate $k=0$ separately before combining.
* ⚠️ **Trap 2: Losing the Distinction between $c_0$ and $c_1$**: The general solution to a 2nd-order ODE must have exactly two independent arbitrary constants ($c_0$ and $c_1$). Every other coefficient $c_n$ must be expressed purely in terms of $c_0$ or $c_1$.
