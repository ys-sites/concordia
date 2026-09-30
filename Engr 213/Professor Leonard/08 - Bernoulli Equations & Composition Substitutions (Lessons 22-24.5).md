# Topic 08: Bernoulli Equations & Composition Substitutions
### Professor Leonard Master Series · Lessons 22 to 24.5
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Taming Non-Linear Powers
Professor Leonard introduces Bernoulli equations with high drama:
> *"Look at this equation: $y' + P(x)y = Q(x)y^n$. It is so close to being a friendly linear differential equation, but that nasty $y^n$ on the right ruins everything! James Bernoulli showed us that if we divide by $y^n$ and substitute $u = y^{1-n}$, the non-linear power collapses, the derivative aligns perfectly, and the equation magically turns into a 100% standard linear ODE in $u$!"*

$$y' + P(x)y = Q(x)y^n$$
Divide by $y^n$:
$$y^{-n}y' + P(x)y^{1-n} = Q(x)$$
Let $u = y^{1-n} \implies \frac{du}{dx} = (1 - n)y^{-n}\frac{dy}{dx} \implies y^{-n}y' = \frac{1}{1-n}u'$
$$\frac{1}{1 - n}u' + P(x)u = Q(x) \implies u' + (1 - n)P(x)u = (1 - n)Q(x)$$

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 8.1: Classic Bernoulli ($n = 2$)
**Statement**: Solve $\frac{dy}{dx} - y = e^x y^2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Identify Bernoulli Form**:
  $P(x) = -1, Q(x) = e^x, n = 2$.
* **Step 2: Divide by $y^2$**:
  $$y^{-2} \frac{dy}{dx} - y^{-1} = e^x$$
* **Step 3: Define $u$ and $du/dx$**:
  $$u = y^{1-2} = y^{-1} \implies \frac{du}{dx} = -y^{-2}\frac{dy}{dx} \implies y^{-2}\frac{dy}{dx} = -\frac{du}{dx}$$
* **Step 4: Substitute into ODE**:
  $$-\frac{du}{dx} - u = e^x \implies \frac{du}{dx} + u = -e^x$$
* **Step 5: Solve Linear ODE for $u(x)$**:
  $$\mu(x) = e^{\int 1 dx} = e^x$$
  $$\frac{d}{dx}[e^x u] = e^x(-e^x) = -e^{2x}$$
  $$e^x u = -\int e^{2x} dx = -\frac{1}{2}e^{2x} + C$$
  $$u(x) = -\frac{1}{2}e^x + C e^{-x}$$
* **Step 6: Back-substitute $u = 1/y$**:
  $$\frac{1}{y} = -\frac{1}{2}e^x + C e^{-x} = \frac{2C e^{-x} - e^x}{2} = \frac{C_1 e^{-x} - e^x}{2}$$
  $$y(x) = \frac{2}{C_1 e^{-x} - e^x}$$
  *(Also note singular equilibrium solution $y \equiv 0$)*.

---

### Problem 8.2: Bernoulli ($n = 3$) with Polynomial Coefficients
**Statement**: Solve $x \frac{dy}{dx} + y = x y^3$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Standardize**:
  $$\frac{dy}{dx} + \frac{1}{x}y = y^3 \quad (n = 3)$$
* **Step 2: Divide by $y^3$**:
  $$y^{-3}\frac{dy}{dx} + \frac{1}{x}y^{-2} = 1$$
* **Step 3: Substitute $u = y^{1-3} = y^{-2}$**:
  $$\frac{du}{dx} = -2 y^{-3}\frac{dy}{dx} \implies y^{-3}\frac{dy}{dx} = -\frac{1}{2}\frac{du}{dx}$$
* **Step 4: Substitute**:
  $$-\frac{1}{2}\frac{du}{dx} + \frac{1}{x}u = 1 \implies \frac{du}{dx} - \frac{2}{x}u = -2$$
* **Step 5: Integrating Factor**:
  $$\mu(x) = e^{\int -\frac{2}{x}dx} = e^{-2\ln x} = x^{-2} = \frac{1}{x^2}$$
  $$\frac{d}{dx}\left[\frac{u}{x^2}\right] = -\frac{2}{x^2} = -2x^{-2}$$
  $$\frac{u}{x^2} = \int -2x^{-2}dx = 2x^{-1} + C = \frac{2}{x} + C$$
  $$u(x) = 2x + C x^2$$
* **Step 6: Back-substitute $u = y^{-2} = 1/y^2$**:
  $$\frac{1}{y^2} = 2x + C x^2 \implies y^2 = \frac{1}{2x + C x^2} \implies y(x) = \pm \frac{1}{\sqrt{2x + C x^2}}$$

---

### Problem 8.3: Linear Combination Substitution $y' = f(Ax + By + C)$
**Statement**: Solve $\frac{dy}{dx} = (x + y + 3)^2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Recognize Linear Argument**:
  The argument inside the square is $x + y + 3$.
* **Step 2: Substitute $u = x + y + 3$**:
  $$\frac{du}{dx} = 1 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} - 1$$
* **Step 3: Substitute into ODE**:
  $$\frac{du}{dx} - 1 = u^2 \implies \frac{du}{dx} = u^2 + 1$$
* **Step 4: Separate variables**:
  $$\frac{du}{u^2 + 1} = dx$$
* **Step 5: Integrate**:
  $$\arctan(u) = x + C \implies u(x) = \tan(x + C)$$
* **Step 6: Back-substitute $u = x + y + 3$**:
  $$x + y + 3 = \tan(x + C) \implies y(x) = \tan(x + C) - x - 3$$

---

### Problem 8.4: Trigonometric Linear Argument
**Statement**: Solve $\frac{dy}{dx} = \sin^2(x - y + 1)$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Let $u = x - y + 1$**:
  $$\frac{du}{dx} = 1 - \frac{dy}{dx} \implies \frac{dy}{dx} = 1 - \frac{du}{dx}$$
* **Step 2: Substitute**:
  $$1 - \frac{du}{dx} = \sin^2 u \implies \frac{du}{dx} = 1 - \sin^2 u = \cos^2 u$$
* **Step 3: Separate**:
  $$\frac{du}{\cos^2 u} = dx \implies \sec^2 u du = dx$$
* **Step 4: Integrate**:
  $$\tan(u) = x + C$$
* **Step 5: Back-substitute**:
  $$\tan(x - y + 1) = x + C \implies x - y + 1 = \arctan(x + C) \implies y(x) = x + 1 - \arctan(x + C)$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Dropping the $(1 - n)$ Factor**: Forgetting that $du/dx = (1-n) y^{-n} y'$. If $n=3$, that factor of $-2$ must multiply the RHS!
- **Trap 2: Forgetting Singular Solution $y = 0$**: When dividing by $y^n$, you assumed $y \neq 0$. Check if $y \equiv 0$ solves the original ODE.
