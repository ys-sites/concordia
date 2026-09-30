# Topic 11: Second-Order Linear Homogeneous Equations & The 3 Characteristic Cases
### Professor Leonard Master Series · Lessons 37 to 39
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Characteristic Bridge
Professor Leonard reveals the core mystery of 2nd-order constant coefficient ODEs:
> *"Look at $a y'' + b y' + c y = 0$. What function on Earth has the property that its derivatives are multiples of itself, so they can add up to zero? The Exponential Function $e^{rx}$! If you test $y = e^{rx}$, the derivatives bring down powers of $r$: $y' = r e^{rx}$ and $y'' = r^2 e^{rx}$. Factoring out $e^{rx} \neq 0$ turns calculus into high school algebra: $a r^2 + b r + c = 0$! Every 2nd-order ODE is governed entirely by the roots of that quadratic polynomial!"*

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 11.1: Case 1 — Distinct Real Roots & Initial Value Problem
**Statement**: Solve the IVP:
$$y'' - 5y' + 6y = 0, \qquad y(0) = 2, \quad y'(0) = 5$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Write the Characteristic (Auxiliary) Equation**:
  $$r^2 - 5r + 6 = 0$$
* **Step 2: Factor and solve for roots**:
  $$(r - 2)(r - 3) = 0 \implies r_1 = 2, \quad r_2 = 3$$
* **Step 3: Write the General Solution**:
  Since roots are real and distinct:
  $$y(x) = c_1 e^{2x} + c_2 e^{3x}$$
* **Step 4: Compute $y'(x)$**:
  $$y'(x) = 2c_1 e^{2x} + 3c_2 e^{3x}$$
* **Step 5: Apply Initial Conditions at $x = 0$**:
  $$y(0) = c_1 + c_2 = 2$$
  $$y'(0) = 2c_1 + 3c_2 = 5$$
* **Step 6: Solve the $2 \times 2$ algebraic system**:
  From (1), $c_1 = 2 - c_2$. Substitute into (2):
  $$2(2 - c_2) + 3c_2 = 5 \implies 4 - 2c_2 + 3c_2 = 5 \implies c_2 = 1$$
  $$c_1 = 2 - 1 = 1$$
* **Step 7: Final Unique Solution**:
  $$y(x) = e^{2x} + e^{3x}$$

---

### Problem 11.2: Case 2 — Repeated Real Root & The Magic Factor of $x$
**Statement**: Solve the IVP:
$$y'' + 6y' + 9y = 0, \qquad y(0) = 1, \quad y'(0) = -1$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Characteristic Equation**:
  $$r^2 + 6r + 9 = 0 \implies (r + 3)^2 = 0 \implies r_1 = r_2 = -3$$
* **Step 2: Professor Leonard's Epiphany on Linear Independence**:
  We found only one exponential solution $y_1(x) = e^{-3x}$. But a 2nd-order ODE requires TWO linearly independent solutions!
  Using Reduction of Order: $y_2(x) = x e^{-3x}$.
  Fundamental Solution Set: $\{e^{-3x}, x e^{-3x}\}$.
* **Step 3: General Solution**:
  $$y(x) = c_1 e^{-3x} + c_2 x e^{-3x} = e^{-3x}(c_1 + c_2 x)$$
* **Step 4: Compute $y'(x)$ using Product Rule**:
  $$y'(x) = -3c_1 e^{-3x} + c_2 \left[e^{-3x} - 3x e^{-3x}\right] = e^{-3x}\left[(-3c_1 + c_2) - 3c_2 x\right]$$
* **Step 5: Apply Initial Conditions**:
  $$y(0) = c_1 = 1$$
  $$y'(0) = -3c_1 + c_2 = -1 \implies -3(1) + c_2 = -1 \implies c_2 = 2$$
* **Step 6: Final Solution**:
  $$y(x) = e^{-3x}(1 + 2x)$$

---

### Problem 11.3: Case 3 — Complex Conjugate Roots & Euler's Formula
**Statement**: Solve the IVP:
$$y'' + 4y' + 13y = 0, \qquad y(0) = 3, \quad y'(0) = -6$$

**Step-by-Step Whiteboard Solution**:
* **Step 1: Characteristic Equation**:
  $$r^2 + 4r + 13 = 0$$
* **Step 2: Quadratic Formula**:
  $$r = \frac{-4 \pm \sqrt{16 - 52}}{2} = \frac{-4 \pm \sqrt{-36}}{2} = \frac{-4 \pm 6i}{2} = -2 \pm 3i$$
  Real part $\alpha = -2$, Imaginary part $\beta = 3$.
* **Step 3: General Solution via Euler's Identity ($e^{i\theta} = \cos\theta + i\sin\theta$)**:
  $$y(x) = e^{\alpha x}\left(c_1 \cos \beta x + c_2 \sin \beta x\right) = e^{-2x}\left(c_1 \cos 3x + c_2 \sin 3x\right)$$
* **Step 4: Compute $y'(x)$ using Product and Chain Rules**:
  $$y'(x) = -2e^{-2x}\left(c_1 \cos 3x + c_2 \sin 3x\right) + e^{-2x}\left(-3c_1 \sin 3x + 3c_2 \cos 3x\right)$$
* **Step 5: Apply Initial Conditions**:
  $$y(0) = e^0(c_1 \cos 0 + c_2 \sin 0) = c_1 = 3$$
  $$y'(0) = -2(3)(1) + 3c_2(1) = -6 + 3c_2 = -6 \implies 3c_2 = 0 \implies c_2 = 0$$
* **Step 6: Final Solution (Pure Damped Cosine)**:
  $$y(x) = 3 e^{-2x} \cos 3x$$

---

### Problem 11.4: Reduction of Order (Deriving $y_2$ from $y_1$)
**Statement**: Given that $y_1(x) = x^2$ is a solution to $x^2 y'' - 3x y' + 4y = 0$ on $x > 0$, find the second linearly independent solution $y_2(x)$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Standard form**:
  $$y'' - \frac{3}{x}y' + \frac{4}{x^2}y = 0 \implies P(x) = -\frac{3}{x}$$
* **Step 2: Apply Professor Leonard's Reduction of Order Formula**:
  $$y_2(x) = y_1(x) \int \frac{e^{-\int P(x)dx}}{[y_1(x)]^2} dx$$
* **Step 3: Evaluate Numerator**:
  $$e^{-\int -\frac{3}{x}dx} = e^{3\ln x} = x^3$$
* **Step 4: Integrate**:
  $$y_2(x) = x^2 \int \frac{x^3}{(x^2)^2} dx = x^2 \int \frac{x^3}{x^4} dx = x^2 \int \frac{1}{x} dx = x^2 \ln x$$
* **Conclusion**: General solution is $y(x) = c_1 x^2 + c_2 x^2 \ln x$.

---

### Problem 11.5: The Wronskian & Abel's Theorem
**Statement**: For $x y'' + 2y' + x e^x y = 0$, compute the Wronskian $W(x)$ up to an arbitrary constant without solving the differential equation!

**Step-by-Step Whiteboard Solution**:
* **Step 1: Standard Form**:
  $$y'' + \frac{2}{x}y' + e^x y = 0 \implies P(x) = \frac{2}{x}$$
* **Step 2: Apply Abel's Formula**:
  $$W(x) = C e^{-\int P(x)dx} = C e^{-\int \frac{2}{x}dx} = C e^{-2\ln x} = C x^{-2} = \frac{C}{x^2}$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting the $x$-factor for repeated roots**: Writing $y = c_1 e^{rx} + c_2 e^{rx} = (c_1+c_2)e^{rx} = C e^{rx}$ leaves you with only ONE constant!
- **Trap 2: Imaginary unit $i$ in solution**: Do NOT include $i$ in your final solution for Case 3! Linear combinations of $e^{(\alpha \pm i\beta)x}$ cancel $i$, yielding real $\cos \beta x$ and $\sin \beta x$.
