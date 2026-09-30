# Topic 03: Existence and Uniqueness of Solutions (Picard-Lindelöf)
### Professor Leonard Master Series · Lesson 11
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Two Big Questions
When an engineer writes down a differential equation for an airplane wing or a chemical reactor, they must know:
1. **Does a physical solution actually exist?** (Will the reactor blow up because math has no answer?)
2. **Is the solution unique?** (If I run the experiment twice under identical initial conditions, will I get the exact same behavior?)

Professor Leonard explains:
*"Picard's Theorem is like an insurance policy. It gives you conditions on your equation that guarantee you will get one and only one trajectory through your initial condition point."*

---

## 2. Picard-Lindelöf Theorem Protocol

Given the Initial-Value Problem:
$$\frac{dy}{dx} = f(x, y), \quad y(x_0) = y_0$$

### The Two Tests:
1. **Existence Test**: Is $f(x, y)$ continuous in a rectangle around $(x_0, y_0)$?
   * If **YES**, at least one solution exists!
2. **Uniqueness Test**: Is the partial derivative $\frac{\partial f}{\partial y}$ continuous in that same rectangle?
   * If **YES**, that solution is **strictly UNIQUE**! No other curve can pass through $(x_0, y_0)$.

---

## 3. The Classic Exam Trap: Branching Solutions

**Problem**: Examine $\frac{dy}{dx} = \frac{x}{y}$, with initial condition $y(0) = 0$.

* **Step 1: Inspect $f(x, y)$**:
  $$f(x, y) = \frac{x}{y}$$
  At $(0, 0)$, $y = 0$, which causes division by zero! $f(x, y)$ is **discontinuous** at the origin.
* **Step 2: Physical Consequence**:
  Separating variables: $y dy = x dx \implies \frac{1}{2}y^2 = \frac{1}{2}x^2 + C \implies y^2 - x^2 = 2C$.
  For $y(0) = 0$, $C = 0 \implies y^2 = x^2 \implies y = x$ or $y = -x$.
  Notice two distinct straight lines pass through $(0, 0)$! Uniqueness completely fails because the continuity condition was violated.

---

## 4. Leonard's Golden Rules
* ⭐ **Always compute $\frac{\partial f}{\partial y}$ immediately**: Do not try to solve the ODE first. Compute the derivative with respect to $y$, look at the denominator, and find where it equals zero. If your initial point $(x_0, y_0)$ makes that denominator zero, uniqueness is not guaranteed!
