# Topic 07: Homogeneous First-Order Equations & Geometric Substitutions
### Professor Leonard Master Series · Lessons 20 & 21
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Scaling Symmetry
*"What does 'homogeneous' mean here? It means that every term in your equation has the EXACT same total degree of variables!"*

For example, look at $(x^2 + y^2)dx - 2xy dy = 0$:
* $x^2$ has degree 2.
* $y^2$ has degree 2.
* $2xy$ has degree $1 + 1 = 2$.

Because all terms scale equally under zoom ($x \to tx, y \to ty$), the slope $\frac{dy}{dx}$ depends **only on the ratio** $\frac{y}{x}$!
If we set $u = \frac{y}{x}$, the equation collapses into a simple separable equation!

---

## 2. The Substitution Machine: $y = ux$

Whenever you recognize a homogeneous first-order equation:
1. Let $y = u(x) \cdot x$.
2. By the Product Rule:
   $$\frac{dy}{dx} = u + x\frac{du}{dx} \quad (\text{or } dy = u dx + x du)$$
3. Substitute both $y$ and $\frac{dy}{dx}$ into your equation.
4. All the $x$'s will factor out and cancel, leaving a clean separable equation for $u$ and $x$!
5. Solve for $u$, then remember to back-substitute $u = \frac{y}{x}$.
