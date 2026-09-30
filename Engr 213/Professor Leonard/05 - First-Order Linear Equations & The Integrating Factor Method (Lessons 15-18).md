# Topic 05: First-Order Linear Equations & The Integrating Factor Method
### Professor Leonard Master Series · Lessons 15 to 18
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Reverse Product Rule
Professor Leonard introduces the Integrating Factor method with a stroke of genius:
> *"Look at the Product Rule from Calculus 1: $\frac{d}{dx}[u(x) y(x)] = u y' + u' y$. Now look at a standard linear differential equation: $y' + P(x) y = Q(x)$. The left-hand side looks almost like the product rule, but the coefficients don't quite match! The Integrating Factor $\mu(x)$ is a magical mathematical catalyst. When you multiply the entire equation by $\mu(x)$, the left side instantly collapses into a single, perfect derivative!"*

$$\mu(x) = e^{\int P(x) dx}$$
$$\mu(x) y' + \mu(x) P(x) y = \frac{d}{dx}[\mu(x) y] = \mu(x) Q(x)$$
$$\mu(x) y = \int \mu(x) Q(x) dx + C \implies y(x) = \frac{1}{\mu(x)} \left[ \int \mu(x) Q(x) dx + C \right]$$

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 5.1: Polynomial Coefficients & Initial Value Problem
**Statement**: Solve the IVP:
$$x \frac{dy}{dx} + 2y = 4x^2, \qquad y(1) = 2$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Put into Standard Form (Mandatory Rule!)**:
  Divide through by $x$ (for $x > 0$):
  $$\frac{dy}{dx} + \frac{2}{x}y = 4x$$
  Identify $P(x) = \frac{2}{x}$ and $Q(x) = 4x$.
* **Step 2: Compute the Integrating Factor $\mu(x)$**:
  $$\mu(x) = e^{\int P(x) dx} = e^{\int \frac{2}{x} dx} = e^{2\ln|x|} = e^{\ln(x^2)} = x^2$$
* **Step 3: Multiply the standard form by $\mu(x) = x^2$**:
  $$x^2 \frac{dy}{dx} + 2x y = 4x^3$$
* **Step 4: Collapse LHS into the derivative of a product**:
  $$\frac{d}{dx}\left[x^2 y\right] = 4x^3$$
* **Step 5: Integrate both sides with respect to $x$**:
  $$x^2 y = \int 4x^3 dx = x^4 + C$$
* **Step 6: Solve for $y(x)$**:
  $$y(x) = x^2 + \frac{C}{x^2}$$
* **Step 7: Apply the Initial Condition $y(1) = 2$**:
  $$2 = 1^2 + \frac{C}{1^2} \implies 2 = 1 + C \implies C = 1$$
  $$y(x) = x^2 + \frac{1}{x^2}$$

---

### Problem 5.2: Exponential Integrating Factor with $u$-Substitution
**Statement**: Solve $\frac{dy}{dx} + 2x y = x$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Standard form check**: Already in standard form. $P(x) = 2x, Q(x) = x$.
* **Step 2: Integrating Factor**:
  $$\mu(x) = e^{\int 2x dx} = e^{x^2}$$
* **Step 3: Multiply and collapse**:
  $$\frac{d}{dx}\left[e^{x^2} y\right] = x e^{x^2}$$
* **Step 4: Integrate RHS**:
  $$e^{x^2} y = \int x e^{x^2} dx$$
  Let $u = x^2, du = 2x dx \implies x dx = \frac{1}{2} du$.
  $$e^{x^2} y = \frac{1}{2}e^{x^2} + C$$
* **Step 5: Divide by $e^{x^2}$**:
  $$y(x) = \frac{1}{2} + C e^{-x^2}$$
  Notice that as $x \to \pm\infty$, $y(x) \to \frac{1}{2}$ (the steady-state equilibrium!).

---

### Problem 5.3: Trigonometric Integrating Factor
**Statement**: Solve $(\cos x) \frac{dy}{dx} + (\sin x) y = 1$ on $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Standard Form**:
  Divide by $\cos x$:
  $$\frac{dy}{dx} + (\tan x) y = \sec x$$
* **Step 2: Integrating Factor**:
  $$\mu(x) = e^{\int \tan x dx} = e^{\ln|\sec x|} = \sec x$$
* **Step 3: Multiply and collapse**:
  $$\frac{d}{dx}\left[(\sec x) y\right] = \sec^2 x$$
* **Step 4: Integrate both sides**:
  $$(\sec x) y = \int \sec^2 x dx = \tan x + C$$
* **Step 5: Solve for $y(x)$**:
  $$y(x) = \frac{\tan x + C}{\sec x} = \sin x + C \cos x$$

---

### Problem 5.4: Integrating Factor with Integration by Parts
**Statement**: Solve $x \frac{dy}{dx} - y = x^2 \sin x$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Standard Form**:
  $$\frac{dy}{dx} - \frac{1}{x} y = x \sin x$$
* **Step 2: Integrating Factor (Watch the Negative Sign!)**:
  $$\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln x} = e^{\ln(x^{-1})} = x^{-1} = \frac{1}{x}$$
* **Step 3: Multiply and collapse**:
  $$\frac{d}{dx}\left[\frac{y}{x}\right] = \frac{1}{x}(x \sin x) = \sin x$$
* **Step 4: Integrate**:
  $$\frac{y}{x} = \int \sin x dx = -\cos x + C$$
* **Step 5: Multiply by $x$**:
  $$y(x) = -x \cos x + C x$$

---

### Problem 5.5: Inverting Variables ($x$ as a Function of $y$)
**Statement**: Solve $\frac{dy}{dx} = \frac{1}{x + y^2}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Recognize Non-Linearity in $y$**:
  $dy/dx$ has $y^2$ in the denominator. It is impossible to separate or make linear in $y$.
* **Step 2: Flip the derivative**:
  $$\frac{dx}{dy} = x + y^2 \implies \frac{dx}{dy} - x = y^2$$
  This is a **1st-order linear ODE for $x$ as a function of $y$**!
* **Step 3: Integrating Factor in terms of $y$**:
  $$\mu(y) = e^{\int -1 dy} = e^{-y}$$
* **Step 4: Multiply and collapse**:
  $$\frac{d}{dy}\left[e^{-y} x\right] = y^2 e^{-y}$$
* **Step 5: Integrate RHS using tabular integration by parts**:
  $$\int y^2 e^{-y} dy = -y^2 e^{-y} - 2y e^{-y} - 2 e^{-y} + C$$
  $$e^{-y} x = -e^{-y}(y^2 + 2y + 2) + C$$
* **Step 6: Multiply by $e^y$**:
  $$x(y) = -(y^2 + 2y + 2) + C e^y$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting to Divide by Leading Coefficient**: Finding $\mu(x)$ from the non-standard form is the #1 reason students fail this problem on exams!
- **Trap 2: Losing the Minus Sign**: $\int -\frac{2}{x}dx = -2\ln x = \ln(x^{-2})$. Do NOT write $x^2$!
- **Trap 3: Forgetting to Divide $+C$**: Writing $y = \int \mu Q dx + C$ instead of $y = \frac{1}{\mu}[\int \mu Q dx + C]$. $+C$ must be divided by $\mu(x)$!
