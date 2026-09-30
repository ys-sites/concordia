# Topic 08: Bernoulli Equations & Composition Substitutions
### Professor Leonard Master Series · Lessons 22 to 24.5
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Bernoulli Transformation
A **Bernoulli Equation** looks almost linear, except for an annoying power of $y^n$ on the right side:
$$\frac{dy}{dx} + P(x)y = Q(x)y^n$$

Professor Leonard's 4-Step Whiteboard Recipe:
1. **Divide every single term by $y^n$**:
   $$y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$$
2. **Notice the magic substitution**: Let $w = y^{1-n}$.
3. **Differentiate using chain rule**:
   $$\frac{dw}{dx} = (1 - n)y^{-n}\frac{dy}{dx} \implies y^{-n}\frac{dy}{dx} = \frac{1}{1 - n}\frac{dw}{dx}$$
4. **Plug back in**:
   $$\frac{1}{1 - n}\frac{dw}{dx} + P(x)w = Q(x) \implies \frac{dw}{dx} + (1 - n)P(x)w = (1 - n)Q(x)$$
It has turned into a standard First-Order Linear ODE! Solve for $w$, then back-substitute $w = y^{1-n}$.

---

## 2. Composition Substitutions: $\frac{dy}{dx} = f(Ax + By + C)$
When you see an expression like $\frac{dy}{dx} = \tan^2(x + y)$ or $\frac{dy}{dx} = (2x + 3y + 1)^2$:
* Let $u = Ax + By + C$.
* Take derivative: $\frac{du}{dx} = A + B\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{B}\left(\frac{du}{dx} - A\right)$.
* Substitute to get:
  $$\frac{1}{B}\left(\frac{du}{dx} - A\right) = f(u) \implies \frac{du}{dx} = A + B f(u)$$
This is instantly separable:
$$\frac{du}{A + B f(u)} = dx$$
