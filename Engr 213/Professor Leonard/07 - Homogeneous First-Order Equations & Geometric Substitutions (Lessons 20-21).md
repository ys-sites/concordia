# Topic 07: Homogeneous First-Order Equations & Geometric Substitutions
### Professor Leonard Master Series · Lessons 20 & 21
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Radial Transformation
Professor Leonard introduces homogeneous substitutions by looking at slope along rays:
> *"What if an equation isn't separable, but every single term has the exact same total algebraic degree? That means along any radial line from the origin ($y = v x$), the slope $dy/dx$ is completely constant! If you change variables to the slope of that ray, $v = y/x$, the entire equation instantly collapses into a clean, separable ODE!"*

A function $f(x, y)$ is **homogeneous of degree $n$** if:
$$f(tx, ty) = t^n f(x, y)$$
If an ODE can be written as $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$, substitute:
$$y = v x \implies \frac{dy}{dx} = v + x \frac{dv}{dx}$$
$$v + x \frac{dv}{dx} = F(v) \implies \frac{dv}{F(v) - v} = \frac{dx}{x}$$

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 7.1: Homogeneous of Degree 2 (The Classic Circle Family)
**Statement**: Solve $(x^2 + y^2)dx - 2xy dy = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Check Homogeneity**:
  - $M(tx, ty) = t^2 x^2 + t^2 y^2 = t^2(x^2 + y^2)$ (degree 2).
  - $N(tx, ty) = -2(tx)(ty) = t^2(-2xy)$ (degree 2).
  Both terms have degree 2. The equation is homogeneous!
* **Step 2: Express $dy/dx$ as a function of $y/x$**:
  $$2xy dy = (x^2 + y^2)dx \implies \frac{dy}{dx} = \frac{x^2 + y^2}{2xy} = \frac{1 + (y/x)^2}{2(y/x)}$$
* **Step 3: Substitute $y = vx$ and $dy/dx = v + x dv/dx$**:
  $$v + x \frac{dv}{dx} = \frac{1 + v^2}{2v}$$
* **Step 4: Isolate $x dv/dx$**:
  $$x \frac{dv}{dx} = \frac{1 + v^2}{2v} - v = \frac{1 + v^2 - 2v^2}{2v} = \frac{1 - v^2}{2v}$$
* **Step 5: Separate variables**:
  $$\frac{2v}{1 - v^2} dv = \frac{dx}{x}$$
* **Step 6: Integrate both sides**:
  LHS: Let $u = 1 - v^2, du = -2v dv \implies -\ln|1 - v^2| = \ln|x| + C_1$.
  $$\ln|1 - v^2|^{-1} = \ln|x| + C_1 \implies \frac{1}{|1 - v^2|} = C |x|$$
  $$1 - v^2 = \frac{C_2}{x}$$
* **Step 7: Back-substitute $v = y/x$**:
  $$1 - \frac{y^2}{x^2} = \frac{C_2}{x} \implies \frac{x^2 - y^2}{x^2} = \frac{C_2}{x}$$
  Multiply by $x^2$:
  $$x^2 - y^2 = C_2 x \implies x^2 - C_2 x - y^2 = 0$$
  This represents a family of hyperbolas passing through the origin!

---

### Problem 7.2: Radical Homogeneous Equation & Arc-Sine
**Statement**: Solve $x \frac{dy}{dx} = y + \sqrt{x^2 - y^2}$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Divide by $x$ to create $y/x$ terms**:
  $$\frac{dy}{dx} = \frac{y}{x} + \frac{\sqrt{x^2 - y^2}}{x} = \frac{y}{x} + \sqrt{1 - \left(\frac{y}{x}\right)^2}$$
* **Step 2: Substitute $y = vx, dy/dx = v + x dv/dx$**:
  $$v + x \frac{dv}{dx} = v + \sqrt{1 - v^2}$$
* **Step 3: Subtract $v$ from both sides**:
  $$x \frac{dv}{dx} = \sqrt{1 - v^2}$$
* **Step 4: Separate**:
  $$\frac{dv}{\sqrt{1 - v^2}} = \frac{dx}{x}$$
* **Step 5: Integrate**:
  $$\arcsin(v) = \ln(x) + C \implies v(x) = \sin(\ln x + C)$$
* **Step 6: Back-substitute $v = y/x$**:
  $$\frac{y}{x} = \sin(\ln x + C) \implies y(x) = x \sin(\ln x + C)$$

---

### Problem 7.3: Linear Homogeneous Ratio
**Statement**: Solve $\frac{dy}{dx} = \frac{x + 3y}{3x + y}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Divide top and bottom by $x$**:
  $$\frac{dy}{dx} = \frac{1 + 3(y/x)}{3 + (y/x)}$$
* **Step 2: Substitute $y = vx$**:
  $$v + x \frac{dv}{dx} = \frac{1 + 3v}{3 + v}$$
  $$x \frac{dv}{dx} = \frac{1 + 3v}{3 + v} - v = \frac{1 + 3v - 3v - v^2}{3 + v} = \frac{1 - v^2}{3 + v}$$
* **Step 3: Separate**:
  $$\frac{3 + v}{1 - v^2} dv = \frac{dx}{x}$$
* **Step 4: Partial Fractions on LHS**:
  $$\frac{3 + v}{(1 - v)(1 + v)} = \frac{A}{1 - v} + \frac{B}{1 + v}$$
  $3 + v = A(1 + v) + B(1 - v)$.
  - $v = 1 \implies 4 = 2A \implies A = 2$.
  - $v = -1 \implies 2 = 2B \implies B = 1$.
  $$\int \left(\frac{2}{1 - v} + \frac{1}{1 + v}\right) dv = -2\ln|1 - v| + \ln|1 + v| = \ln \frac{|1 + v|}{(1 - v)^2}$$
* **Step 5: Equate to $\ln|x| + C$**:
  $$\frac{1 + v}{(1 - v)^2} = C x$$
* **Step 6: Replace $v = y/x$**:
  $$\frac{1 + y/x}{(1 - y/x)^2} = C x \implies \frac{\frac{x + y}{x}}{\frac{(x - y)^2}{x^2}} = C x \implies \frac{x(x + y)}{(x - y)^2} = C x$$
  Divide by $x$:
  $$x + y = C (x - y)^2$$

---

### Problem 7.4: Translation of Coordinates to Remove Non-Zero Intercepts
**Statement**: Transform $\frac{dy}{dx} = \frac{x - y + 1}{x + y - 3}$ into a homogeneous equation.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Find the intersection of the two lines**:
  - $x - y + 1 = 0 \implies y = x + 1$
  - $x + y - 3 = 0 \implies y = -x + 3$
  $x + 1 = -x + 3 \implies 2x = 2 \implies x_0 = 1, y_0 = 2$.
* **Step 2: Define translated variables**:
  Let $X = x - 1 \implies dX = dx$.
  Let $Y = y - 2 \implies dY = dy$.
  Then $x = X + 1$ and $y = Y + 2$.
* **Step 3: Substitute into the ODE**:
  $$\frac{dY}{dX} = \frac{(X + 1) - (Y + 2) + 1}{(X + 1) + (Y + 2) - 3} = \frac{X - Y}{X + Y}$$
  The constant offsets vanish completely! The equation is now homogeneous of degree 1 and solved with $Y = v X$!

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting the Product Rule for $dy/dx$**: Writing $dy/dx = dv/dx$ instead of $v + x \frac{dv}{dx}$.
- **Trap 2: Forgetting to Back-Substitute**: Leaving your final exam answer in terms of $v$. You must replace $v = y/x$!
