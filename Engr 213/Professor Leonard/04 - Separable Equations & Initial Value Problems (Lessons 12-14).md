# Topic 04: Separable Equations & Initial Value Problems (The Clean Split)
### Professor Leonard Master Series · Lessons 12 to 14
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Great Divorce
Separable differential equations are the foundation of analytical ODEs.
Professor Leonard describes the process as **"The Great Divorce"**:
> *"You have an equation where $x$'s and $y$'s are mingled together. Your mission is to send all $y$'s to the left side with $dy$, and all $x$'s to the right side with $dx$. Once the divorce is finalized, you integrate both sides independently!"*

$$\frac{dy}{dx} = g(x) h(y) \implies \frac{1}{h(y)}dy = g(x)dx$$

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 4.1: Polynomial Separation & Cubic Roots
**Statement**: Solve $\frac{dy}{dx} = \frac{x^2}{y^2}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate**:
  $$y^2 dy = x^2 dx$$
* **Step 2: Integrate both sides**:
  $$\int y^2 dy = \int x^2 dx \implies \frac{y^3}{3} = \frac{x^3}{3} + C_1$$
* **Step 3: Clear denominators**:
  Multiply by 3:
  $$y^3 = x^3 + 3C_1 \implies y^3 = x^3 + C$$
* **Step 4: Solve explicitly for $y$**:
  $$y(x) = \sqrt[3]{x^3 + C}$$

---

### Problem 4.2: The "Lost" Singular Solution Trap
**Statement**: Find the complete general solution of $\frac{dy}{dx} = 6x(y - 1)^{2/3}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Note potential division by zero**:
  To separate, we must divide by $(y - 1)^{2/3}$. This assumes $y - 1 \neq 0$.
  *Check singular candidate*: If $y(x) \equiv 1$, then $y' = 0$ and $6x(1 - 1)^{2/3} = 0$.
  Thus, **$y = 1$ is an exact equilibrium solution**!
* **Step 2: Separate assuming $y \neq 1$**:
  $$(y - 1)^{-2/3} dy = 6x dx$$
* **Step 3: Integrate both sides**:
  $$\frac{(y - 1)^{1/3}}{1/3} = 3x^2 + C_1 \implies 3(y - 1)^{1/3} = 3x^2 + C_1$$
* **Step 4: Divide by 3 (relabeling $C = C_1 / 3$)**:
  $$(y - 1)^{1/3} = x^2 + C$$
* **Step 5: Cube both sides**:
  $$y - 1 = (x^2 + C)^3 \implies y(x) = (x^2 + C)^3 + 1$$
* **Note on Singular Solution**:
  Can $(x^2 + C)^3 + 1$ produce $y = 1$? Only if $x^2 + C = 0$ for all $x$, which is impossible for constant $C$.
  Therefore, $y = 1$ is a **singular solution** that cannot be obtained from the general family.
  Full answer: $y(x) = (x^2 + C)^3 + 1$ and $y = 1$.

---

### Problem 4.3: Initial Value Problem with Natural Logarithms
**Statement**: Solve the IVP:
$$\frac{dy}{dx} = \frac{2x(y^2 + 1)}{y}, \qquad y(0) = 1$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate variables**:
  $$\frac{y}{y^2 + 1}dy = 2x dx$$
* **Step 2: Integrate both sides**:
  $$\int \frac{y}{y^2 + 1}dy = \int 2x dx$$
  LHS: Let $u = y^2 + 1, du = 2y dy \implies y dy = \frac{1}{2}du$.
  $$\frac{1}{2}\ln(y^2 + 1) = x^2 + C_1$$
  *(No absolute value needed because $y^2 + 1 > 0$ for all real $y$)*.
* **Step 3: Clear the fraction and exponentiate**:
  $$\ln(y^2 + 1) = 2x^2 + 2C_1$$
  $$y^2 + 1 = e^{2x^2 + 2C_1} = e^{2C_1} \cdot e^{2x^2} = A e^{2x^2} \quad (A > 0)$$
  $$y^2 = A e^{2x^2} - 1$$
* **Step 4: Apply $y(0) = 1$**:
  $$1^2 = A e^0 - 1 \implies 1 = A - 1 \implies A = 2$$
  $$y^2 = 2e^{2x^2} - 1 \implies y(x) = \pm\sqrt{2e^{2x^2} - 1}$$
* **Step 5: Select the correct branch**:
  Because $y(0) = +1 > 0$, choose the positive square root:
  $$y(x) = \sqrt{2e^{2x^2} - 1}$$

---

### Problem 4.4: Trigonometric Separation & Domain Blow-Up
**Statement**: Solve $\frac{dy}{dx} = y^2 \sin x, \quad y(0) = 1$, and find the interval of definition.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate**:
  $$y^{-2} dy = \sin x dx$$
* **Step 2: Integrate**:
  $$-y^{-1} = -\cos x + C \implies \frac{1}{y} = \cos x - C$$
* **Step 3: Apply $y(0) = 1$**:
  $$\frac{1}{1} = \cos(0) - C \implies 1 = 1 - C \implies C = 0$$
* **Step 4: Invert**:
  $$\frac{1}{y} = \cos x \implies y(x) = \frac{1}{\cos x} = \sec x$$
* **Step 5: Interval of definition**:
  The function $\sec x$ blows up to $\infty$ at $x = \pm \frac{\pi}{2}, \pm \frac{3\pi}{2}, \dots$.
  The initial condition is given at $x_0 = 0$. The largest continuous open interval containing 0 is:
  $$I = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$$

---

### Problem 4.5: Integration by Substitution on the RHS
**Statement**: Solve the IVP:
$$\frac{dy}{dx} = \frac{x y^3}{\sqrt{1 + x^2}}, \qquad y(0) = -1$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate**:
  $$y^{-3} dy = \frac{x}{\sqrt{1 + x^2}} dx$$
* **Step 2: Integrate both sides**:
  $$\int y^{-3} dy = \int x(1 + x^2)^{-1/2} dx$$
  LHS: $\frac{y^{-2}}{-2} = -\frac{1}{2y^2}$.
  RHS: Let $u = 1 + x^2, du = 2x dx$. $\int \frac{1}{2} u^{-1/2} du = u^{1/2} + C = \sqrt{1 + x^2} + C$.
  $$-\frac{1}{2y^2} = \sqrt{1 + x^2} + C$$
* **Step 3: Apply $y(0) = -1$**:
  $$-\frac{1}{2(-1)^2} = \sqrt{1 + 0} + C \implies -\frac{1}{2} = 1 + C \implies C = -\frac{3}{2}$$
* **Step 4: Solve for $y(x)$**:
  $$-\frac{1}{2y^2} = \sqrt{1 + x^2} - \frac{3}{2} \implies \frac{1}{2y^2} = \frac{3 - 2\sqrt{1 + x^2}}{2}$$
  $$y^2 = \frac{1}{3 - 2\sqrt{1 + x^2}}$$
  Since $y(0) = -1 < 0$, choose the **negative square root**:
  $$y(x) = -\frac{1}{\sqrt{3 - 2\sqrt{1 + x^2}}}$$

---

### Problem 4.6: Implicit Factoring & Integration by Parts
**Statement**: Solve $e^x y \frac{dy}{dx} = e^{-y} + e^{-2x - y}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Factor the RHS**:
  $$e^{-y} + e^{-2x - y} = e^{-y}(1 + e^{-2x})$$
* **Step 2: Separate $x$ and $y$**:
  $$e^x y \frac{dy}{dx} = e^{-y}(1 + e^{-2x}) \implies \frac{y}{e^{-y}} dy = \frac{1 + e^{-2x}}{e^x} dx$$
  $$y e^y dy = (e^{-x} + e^{-3x}) dx$$
* **Step 3: Integrate LHS by parts**:
  Let $u = y, dv = e^y dy \implies du = dy, v = e^y$.
  $$\int y e^y dy = y e^y - \int e^y dy = (y - 1)e^y$$
* **Step 4: Integrate RHS**:
  $$\int (e^{-x} + e^{-3x}) dx = -e^{-x} - \frac{1}{3}e^{-3x} + C$$
* **Step 5: Full implicit general solution**:
  $$(y - 1)e^y + e^{-x} + \frac{1}{3}e^{-3x} = C$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Dropping $+C$ inside algebra**: Writing $\ln y = x \implies y = e^x + C$ instead of $y = e^{x+C} = A e^x$.
- **Trap 2: Ignoring Square Root Signs**: When taking $y = \pm \sqrt{\dots}$, you must check the initial condition $y(x_0) = y_0$ to choose the correct $+/-$ sign.
- **Trap 3: Forgetting Singular Solutions**: Always check if dividing by $h(y)$ throws away an equilibrium solution $h(y) = 0$.
