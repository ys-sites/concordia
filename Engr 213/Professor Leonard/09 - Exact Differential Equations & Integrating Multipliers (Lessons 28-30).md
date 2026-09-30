# Topic 09: Exact Differential Equations & Integrating Multipliers
### Professor Leonard Master Series · Lessons 28 to 30
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Topographic Mountain
*"Imagine a 3D mountain whose height above sea level is $F(x, y)$. If you walk along a level hiking trail that stays at the exact same elevation (say, $F(x, y) = C$), your change in elevation is ZERO: $dF = 0$."*

In multivariable calculus, the total differential of $F(x, y)$ is:
$$dF = \frac{\partial F}{\partial x}dx + \frac{\partial F}{\partial y}dy = 0$$
Now look at a differential equation written in differential form:
$$M(x, y)dx + N(x, y)dy = 0$$
If this matches $dF = 0$, then:
$$M(x, y) = \frac{\partial F}{\partial x} \quad \text{and} \quad N(x, y) = \frac{\partial F}{\partial y}$$

By Clairaut's Theorem on equality of mixed partial derivatives:
$$\frac{\partial}{\partial y}\left(\frac{\partial F}{\partial x}\right) = \frac{\partial}{\partial x}\left(\frac{\partial F}{\partial y}\right) \iff \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
That is the **Exactness Test**! If $M_y = N_x$, there is a single potential function $F(x, y)$ whose level curves $F(x, y) = C$ are the solutions to the differential equation!

---

## 2. Leonard's 4-Step Whiteboard Protocol

1. **Test Exactness**: Compute $\frac{\partial M}{\partial y}$ and $\frac{\partial N}{\partial x}$. If equal, celebrate!
2. **Partial Integration**: Integrate $M(x, y)$ with respect to $x$:
   $$F(x, y) = \int M(x, y)dx + g(y)$$
   *(Note: The integration constant is an unknown function of $y$, $g(y)$!)*
3. **Differentiate with respect to $y$**:
   $$\frac{\partial F}{\partial y} = \frac{\partial}{\partial y}\left[\int M dx\right] + g'(y)$$
   Set this equal to $N(x, y)$ and solve for $g'(y)$.
4. **Integrate $g'(y)$ & State Final Implicit Solution**:
   Integrate $g'(y)$ to find $g(y)$. Write the answer as:
   $$F(x, y) = C$$

---

## 3. What if it is NOT Exact? (Finding the Magic Multiplier)
If $M_y \neq N_x$, we seek a multiplying factor $\mu$:
* **Case 1**: If $\frac{M_y - N_x}{N}$ depends **only on $x$**, then:
  $$\mu(x) = e^{\int \frac{M_y - N_x}{N}dx}$$
* **Case 2**: If $\frac{N_x - M_y}{M}$ depends **only on $y$**, then:
  $$\mu(y) = e^{\int \frac{N_x - M_y}{M}dy}$$
Multiply the original equation through by $\mu$. It is now guaranteed to be exact!
