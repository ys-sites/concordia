# Topic 02: Slope Fields, Solution Curves & Qualitative Behavior
### Professor Leonard Master Series · Lessons 5 & 6
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: Seeing Without Solving
Professor Leonard begins qualitative analysis with an eye-opening question:
> *"What if an equation is so nasty that no algebraic trick on Earth can integrate it? Do we give up? Absolutely not! The differential equation $dy/dx = f(x,y)$ is an explicit formula for slope. At every single coordinate $(x,y)$ in the Cartesian plane, the equation hands you a tiny tangent vector. If you drop a particle into that ocean of vectors, the fluid current carries it along the exact solution curve!"*

A **slope field** (or direction field) is a visual grid of short line segments whose slopes equal $f(x,y)$.
- **Isoclines**: Curves along which the slope is constant: $f(x,y) = c$.
- **Equilibrium Solutions**: Horizontal lines $y = c$ where $f(x,y) = 0$ for all $x$. Solutions starting on an equilibrium line stay there forever.

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 2.1: Isocline Construction & The Straight-Line Solution
**Statement**: 
1. Sketch the slope field for $\frac{dy}{dx} = x - y$ using the method of isoclines for $c = -1, 0, 1, 2$.
2. Determine if any solution curve is a straight line $y = mx + b$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Set up the isocline equations $x - y = c$**:
  $$y = x - c$$
  - For $c = 0$: $y = x$. Along the line $y = x$, all slope segments are perfectly horizontal ($m = 0$).
  - For $c = 1$: $y = x - 1$. Along this line, every tangent segment has slope $m = 1$.
  - For $c = -1$: $y = x + 1$. Tangent slope is $m = -1$.
  - For $c = 2$: $y = x - 2$. Tangent slope is $m = 2$.
* **Step 2: Check for a straight-line solution $y = mx + b$**:
  If $y = mx + b$, then $dy/dx = m$.
  Substitute into the ODE:
  $$m = x - (mx + b) \implies m = (1 - m)x - b$$
  This must hold for all $x$. Equating coefficients:
  - $1 - m = 0 \implies m = 1$.
  - $-b = m \implies b = -1$.
* **Step 3: Professor Leonard's Epiphany**:
  $$y(x) = x - 1$$
  Notice that the isocline for $c = 1$ is *identically* the line $y = x - 1$. Because every slope tick mark on this line has slope 1, the curve never leaves the line! It is an exact straight-line solution!
* **Step 4: Asymptotic Funnel**:
  Any solution starting above $y = x - 1$ bends down toward it; any solution starting below bends up toward it. As $x \to \infty$, all solution curves converge asymptotically to $y = x - 1$.

---

### Problem 2.2: Autonomous ODE & Stability Classification
**Statement**: For the autonomous differential equation $\frac{dy}{dx} = y(y - 2)(y + 1)$:
1. Find all equilibrium solutions.
2. Construct the one-dimensional phase line.
3. Classify each equilibrium as asymptotically stable (sink), unstable (source), or semi-stable (node).
4. Sketch the qualitative behavior of solutions $y(x)$ for various initial values.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Find critical equilibrium points**:
  Set $\frac{dy}{dx} = 0 \implies y(y - 2)(y + 1) = 0$.
  Equilibrium solutions are the three horizontal lines:
  $$y = -1, \quad y = 0, \quad y = 2$$
* **Step 2: Sign analysis across the intervals**:
  - **Interval $(2, \infty)$**: Test $y = 3 \implies (3)(1)(4) = +12 > 0$. Slopes are positive ($\uparrow$). Solutions grow to $+\infty$.
  - **Interval $(0, 2)$**: Test $y = 1 \implies (1)(-1)(2) = -2 < 0$. Slopes are negative ($\downarrow$). Solutions fall toward $y = 0$.
  - **Interval $(-1, 0)$**: Test $y = -0.5 \implies (-0.5)(-2.5)(0.5) = +0.625 > 0$. Slopes are positive ($\uparrow$). Solutions rise toward $y = 0$.
  - **Interval $(-\infty, -1)$**: Test $y = -2 \implies (-2)(-4)(-1) = -8 < 0$. Slopes are negative ($\downarrow$). Solutions dive toward $-\infty$.
* **Step 3: Classify stability on the Phase Line**:
  - At $y = 2$: Arrows point away ($\uparrow$ above, $\downarrow$ below) $\implies$ **Unstable (Source)**.
  - At $y = 0$: Arrows point toward $y = 0$ ($\downarrow$ from above, $\uparrow$ from below) $\implies$ **Asymptotically Stable (Sink / Attractor)**.
  - At $y = -1$: Arrows point away ($\uparrow$ above, $\downarrow$ below) $\implies$ **Unstable (Source)**.

---

### Problem 2.3: Second Derivative Test & Inflection Points of Solution Curves
**Statement**: For the autonomous ODE $\frac{dy}{dt} = y^2 - 4$:
1. Determine the concavity of the solution curves in terms of $y$.
2. Find any inflection points where the concavity changes.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Differentiate both sides with respect to $t$ using the Chain Rule**:
  $$\frac{d^2 y}{dt^2} = \frac{d}{dt}\left(y^2 - 4\right) = 2y \frac{dy}{dt}$$
* **Step 2: Substitute $dy/dt = y^2 - 4$ into the second derivative**:
  $$\frac{d^2 y}{dt^2} = 2y(y^2 - 4) = 2y(y - 2)(y + 2)$$
* **Step 3: Analyze concavity across regions**:
  - $y > 2$: $2y(y-2)(y+2) > 0 \implies$ **Concave Up**.
  - $0 < y < 2$: $y > 0, y-2 < 0, y+2 > 0 \implies \frac{d^2y}{dt^2} < 0 \implies$ **Concave Down**.
  - $-2 < y < 0$: $y < 0, y-2 < 0, y+2 > 0 \implies \frac{d^2y}{dt^2} > 0 \implies$ **Concave Up**.
  - $y < -2$: all three factors negative $\implies \frac{d^2y}{dt^2} < 0 \implies$ **Concave Down**.
* **Step 4: Inflection points**:
  Inflection occurs where $\frac{d^2 y}{dt^2} = 0$ while $dy/dt \neq 0$.
  $2y = 0 \implies y = 0$.
  As curves cross $y = 0$, they change from concave down to concave up!

---

### Problem 2.4: Circular Slope Field & Orthogonal Trajectories
**Statement**: Sketch and analyze the slope field for $\frac{dy}{dx} = -\frac{x}{y}$. Show that solution curves form concentric circles.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Evaluate slopes along rays**:
  - On the $x$-axis ($y = 0$): slope is undefined (vertical tangents).
  - On the $y$-axis ($x = 0$): slope is $0$ (horizontal tangents).
  - Along the line $y = x$: slope is $-x/x = -1$.
  - Along the line $y = -x$: slope is $-x/(-x) = +1$.
* **Step 2: Analytical verification**:
  $$y dy = -x dx \implies \int y dy = -\int x dx \implies \frac{y^2}{2} = -\frac{x^2}{2} + C_1 \implies x^2 + y^2 = C$$
  The solution curves are concentric circles of radius $R = \sqrt{C}$ centered at the origin.

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting the Chain Rule for Concavity**: Students write $\frac{d^2 y}{dt^2} = 2y$, completely forgetting $\frac{dy}{dt}$! You must multiply by $y'$ via the chain rule: $y'' = 2y \cdot y'$.
- **Trap 2: Semi-stable Equilibria**: If an equilibrium has the same sign on both sides (e.g., $y' = (y-1)^2$), arrows point up on both sides. A solution from below hits $y=1$, but a solution from above moves away. This is **semi-stable**.
