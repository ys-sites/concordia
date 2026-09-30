# Topic 16: The Laplace Transform (The Time-to-Frequency Machine)
### Professor Leonard Master Series · Laplace Transforms
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Frequency Machine
*"Differential equations are hard because derivatives tie things together. What if there was a machine that could turn derivatives into simple multiplication by $s$?"*

That machine is the **Laplace Transform**:
$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt$$

Under this transform:
* $\mathcal{L}\{y'\} = s Y(s) - y(0)$
* $\mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0)$

Notice what happened: the calculus operation of differentiation turned into **multiplication by $s$**, and the initial values $y(0), y'(0)$ were automatically injected right into the algebra!

---

## 2. The 3-Step Solve-and-Invert Protocol

1. **Transform**: Take $\mathcal{L}$ of every term in the ODE.
2. **Algebra**: Group terms and solve for $Y(s)$:
   $$Y(s) = \frac{\text{Numerator}(s)}{\text{Denominator}(s)}$$
3. **Invert**: Decompose using partial fractions or complete the square, then apply $\mathcal{L}^{-1}$ to return to $y(t)$.
