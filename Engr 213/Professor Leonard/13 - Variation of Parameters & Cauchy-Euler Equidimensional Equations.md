# Topic 13: Variation of Parameters & Cauchy-Euler Equations
### Professor Leonard Master Series · Variation of Parameters
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: When Guessing Fails
What happens if the driving function $g(x)$ is $\tan(x), \sec(x), \frac{1}{x},$ or $\ln(x)$?
Derivatives of $\tan(x)$ produce $\sec^2(x), 2\sec^2(x)\tan(x), \dots$ — an infinite cascade of new functions! The Method of Undetermined Coefficients completely fails.

We need a **universal method**: **Variation of Parameters**.
Instead of constant parameters $C_1, C_2$, let them vary as functions:
$$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$$

---

## 2. The Universal Wronskian Formula
For $y'' + P(x)y' + Q(x)y = f(x)$:
$$W = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_1' y_2$$
$$u_1(x) = -\int \frac{y_2(x)f(x)}{W}dx, \quad u_2(x) = \int \frac{y_1(x)f(x)}{W}dx$$
Then:
$$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$$

---

## 3. Cauchy-Euler Equations: $a x^2 y'' + b x y' + c y = 0$
Notice that each power of $x$ matches the order of the derivative ($x^2 y'', x y', x^0 y$).
* Substitute $y = x^m \implies y' = m x^{m-1} \implies y'' = m(m-1)x^{m-2}$.
* Auxiliary equation:
  $$a m(m-1) + b m + c = 0 \iff a m^2 + (b - a)m + c = 0$$
* **Three Cases**:
  1. Distinct real $m_1 \neq m_2$: $y = C_1 x^{m_1} + C_2 x^{m_2}$
  2. Repeated real $m_1 = m_2 = m$: $y = C_1 x^m + C_2 x^m \ln x$
  3. Complex $m = \alpha \pm i\beta$: $y = x^\alpha\left(C_1 \cos(\beta\ln x) + C_2 \sin(\beta\ln x)\right)$
