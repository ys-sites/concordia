# Topic 05: First-Order Linear Equations & The Integrating Factor Method
### Professor Leonard Master Series · Lessons 15 to 18
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Product Rule in Reverse
*"Have you ever looked at an expression and thought: 'Man, that looks ALMOST like the product rule, but something is missing'?"*

Consider the product rule from Calc 1:
$$\frac{d}{dx}[\mu(x) y(x)] = \mu(x) \frac{dy}{dx} + \mu'(x) y$$
Now look at a standard linear differential equation:
$$\frac{dy}{dx} + P(x) y = Q(x)$$
If we multiply the entire equation by a magic function $\mu(x)$:
$$\mu(x)\frac{dy}{dx} + \mu(x)P(x) y = \mu(x)Q(x)$$
We want the left-hand side to match the product rule exactly! That requires:
$$\mu'(x) = \mu(x) P(x) \implies \frac{d\mu}{\mu} = P(x)dx \implies \ln|\mu| = \int P(x)dx \implies \mu(x) = e^{\int P(x)dx}$$

That is the entire secret! $\mu(x)$ is not a magic trick; it is simply the exact factor needed to force the left side into the derivative of a single product!

---

## 2. Leonard's 5-Step Protocol

1. **Standard Form**: Make sure the coefficient of $y'$ is **1**:
   $$y' + P(x)y = Q(x)$$
2. **Find $\mu(x)$**:
   $$\mu(x) = e^{\int P(x)dx}$$
3. **Multiply Through**:
   $$\mu(x)y' + \mu(x)P(x)y = \mu(x)Q(x)$$
4. **Condense Left Side**:
   $$\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)$$
5. **Integrate and Divide**:
   $$\mu(x)y = \int \mu(x)Q(x)dx + C \implies y(x) = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x)dx + C\right]$$

---

## 3. Fully Worked Master Example

**Problem**: Solve $x \frac{dy}{dx} - 3y = x^4 e^x, \quad x > 0$.

* **Step 1: Put in standard form**: Divide every term by $x$:
  $$\frac{dy}{dx} - \frac{3}{x}y = x^3 e^x$$
  Here, $P(x) = -\frac{3}{x}$ and $Q(x) = x^3 e^x$.
* **Step 2: Calculate $\mu(x)$**:
  $$\int P(x)dx = \int -\frac{3}{x}dx = -3\ln x = \ln(x^{-3})$$
  $$\mu(x) = e^{\ln(x^{-3})} = x^{-3} = \frac{1}{x^3}$$
* **Step 3: Multiply through & condense**:
  $$\frac{1}{x^3}\frac{dy}{dx} - \frac{3}{x^4}y = \frac{1}{x^3}(x^3 e^x)$$
  $$\frac{d}{dx}\left[\frac{1}{x^3}y\right] = e^x$$
* **Step 4: Integrate both sides**:
  $$\frac{1}{x^3}y = \int e^x dx = e^x + C$$
* **Step 5: Multiply by $x^3$**:
  $$y(x) = x^3 e^x + C x^3$$

---

## 4. Leonard's Red Flag Alerts
* 🚩 **Red Flag 1: Forgetting the Minus Sign in $P(x)$**: If your equation is $y' - \frac{3}{x}y = \dots$, $P(x) = -3/x$, NOT $+3/x$. Dropping the negative sign inverts $\mu(x)$ and ruins the problem!
* 🚩 **Red Flag 2: Distributing $C$**: Notice that $y = x^3 e^x + C x^3$. The $+ C$ gets multiplied by $x^3$ too! Writing $y = x^3 e^x + C$ is a fatal error.
