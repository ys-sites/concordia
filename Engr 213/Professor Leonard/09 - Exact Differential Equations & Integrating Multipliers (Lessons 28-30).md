# Topic 09: Exact Differential Equations & Integrating Multipliers
### Professor Leonard Master Series · Lessons 28 to 30
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Gradient Vector Field
Professor Leonard bridges differential equations with Multivariable Calculus:
> *"Remember Clairaut's Theorem on mixed partials: $f_{xy} = f_{yx}$? An exact differential equation $M(x,y)dx + N(x,y)dy = 0$ is just the total differential $d\psi = 0$ of some hidden 3D potential surface $\psi(x,y) = C$. The solution curves are literally the contour lines (level curves) of that surface! If $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$, the vector field is conservative, and we can find $\psi(x,y)$ by integrating!"*

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 9.1: Standard Exact Differential Equation
**Statement**: Solve $(2xy + 3)dx + (x^2 - 1)dy = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Test for Exactness**:
  $$M(x, y) = 2xy + 3 \implies \frac{\partial M}{\partial y} = 2x$$
  $$N(x, y) = x^2 - 1 \implies \frac{\partial N}{\partial x} = 2x$$
  $$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} \implies \text{The equation is EXACT!}$$
* **Step 2: Integrate $M(x, y)$ with respect to $x$**:
  $$\psi(x, y) = \int (2xy + 3) dx = x^2 y + 3x + h(y)$$
  *(Notice $h(y)$ replaces the constant $+C$ because $y$ was held constant!)*
* **Step 3: Differentiate $\psi(x, y)$ with respect to $y$ and equate to $N(x, y)$**:
  $$\frac{\partial \psi}{\partial y} = x^2 + h'(y)$$
  Set equal to $N(x, y) = x^2 - 1$:
  $$x^2 + h'(y) = x^2 - 1 \implies h'(y) = -1$$
* **Step 4: Integrate $h'(y)$**:
  $$h(y) = -y$$
* **Step 5: Write the Level Curve Solution $\psi(x, y) = C$**:
  $$x^2 y + 3x - y = C$$
  Explicit solution: $y(x^2 - 1) = C - 3x \implies y(x) = \frac{C - 3x}{x^2 - 1}$.

---

### Problem 9.2: Trigonometric Exact Equation
**Statement**: Solve $(\cos y + y \cos x)dx + (\sin x - x \sin y)dy = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Exactness Test**:
  - $M_y = -\sin y + \cos x$.
  - $N_x = \cos x - \sin y$.
  $M_y = N_x \implies$ **Exact!**
* **Step 2: Integrate $M(x,y)$ with respect to $x$**:
  $$\psi(x, y) = \int (\cos y + y \cos x) dx = x \cos y + y \sin x + h(y)$$
* **Step 3: Match to $N(x,y)$**:
  $$\frac{\partial \psi}{\partial y} = -x \sin y + \sin x + h'(y)$$
  $$(\sin x - x \sin y) + h'(y) = \sin x - x \sin y \implies h'(y) = 0 \implies h(y) = 0$$
* **Step 4: General Solution**:
  $$x \cos y + y \sin x = C$$

---

### Problem 9.3: Non-Exact Equation with Integrating Factor $\mu(x)$
**Statement**: Solve $(3xy + y^2)dx + (x^2 + xy)dy = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Test Exactness**:
  $M_y = 3x + 2y, \quad N_x = 2x + y$.
  $M_y \neq N_x \implies$ **Not Exact!**
* **Step 2: Check Professor Leonard's Multiplier Formula for $\mu(x)$**:
  $$\frac{M_y - N_x}{N} = \frac{(3x + 2y) - (2x + y)}{x^2 + xy} = \frac{x + y}{x(x + y)} = \frac{1}{x}$$
  Depends *only on $x$*!
* **Step 3: Compute $\mu(x)$**:
  $$\mu(x) = e^{\int \frac{1}{x} dx} = e^{\ln x} = x$$
* **Step 4: Multiply the entire ODE by $x$**:
  $$(3x^2 y + x y^2)dx + (x^3 + x^2 y)dy = 0$$
  *Verify new exactness*:
  - New $M_y = 3x^2 + 2xy$.
  - New $N_x = 3x^2 + 2xy$. Exact!
* **Step 5: Integrate**:
  $$\psi(x, y) = \int (3x^2 y + x y^2) dx = x^3 y + \frac{1}{2}x^2 y^2 + h(y)$$
  $$\frac{\partial \psi}{\partial y} = x^3 + x^2 y + h'(y) = x^3 + x^2 y \implies h'(y) = 0$$
* **Step 6: Final Solution**:
  $$x^3 y + \frac{1}{2}x^2 y^2 = C$$

---

### Problem 9.4: Non-Exact Equation with Integrating Factor $\mu(y)$
**Statement**: Solve $(y^2 + 2xy)dx - x^2 dy = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Test Exactness**:
  $M_y = 2y + 2x, \quad N_x = -2x$. Not exact.
* **Step 2: Check $\frac{N_x - M_y}{M}$**:
  $$\frac{N_x - M_y}{M} = \frac{-2x - (2y + 2x)}{y^2 + 2xy} = \frac{-4x - 2y}{y(y + 2x)} = \frac{-2(2x + y)}{y(2x + y)} = -\frac{2}{y}$$
  Depends *only on $y$*!
* **Step 3: Compute $\mu(y)$**:
  $$\mu(y) = e^{\int -\frac{2}{y} dy} = e^{-2\ln y} = y^{-2} = \frac{1}{y^2}$$
* **Step 4: Multiply by $\mu(y) = 1/y^2$**:
  $$\left(1 + \frac{2x}{y}\right)dx - \frac{x^2}{y^2}dy = 0$$
* **Step 5: Integrate**:
  $$\psi(x, y) = \int \left(1 + \frac{2x}{y}\right) dx = x + \frac{x^2}{y} + h(y)$$
  $$\frac{\partial \psi}{\partial y} = -\frac{x^2}{y^2} + h'(y) = -\frac{x^2}{y^2} \implies h'(y) = 0$$
* **Step 6: General Solution**:
  $$x + \frac{x^2}{y} = C \implies y(x) = \frac{x^2}{C - x}$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting Negative Sign in $N(x,y)$**: If the equation is $M dx - N dy = 0$, $N(x,y)$ includes the negative sign!
- **Trap 2: Mixing up $\mu(x)$ vs $\mu(y)$ Formulas**:
  - For $\mu(x)$: use $\frac{M_y - N_x}{N}$.
  - For $\mu(y)$: use $\frac{N_x - M_y}{M}$. Notice the numerator signs flip!
