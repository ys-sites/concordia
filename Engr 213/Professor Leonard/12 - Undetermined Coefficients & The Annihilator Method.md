# Topic 12: Method of Undetermined Coefficients & The Annihilator Method
### Professor Leonard Master Series
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Educated Guess & The Resonance Clash
Professor Leonard explains the non-homogeneous equation $a y'' + b y' + c y = g(x)$:
> *"The complete general solution is always a partnership: $y(x) = y_c(x) + y_p(x)$. $y_c$ is the complementary solution satisfying the homogeneous part $= 0$. $y_p$ is a particular solution engineered to match the forcing driving function $g(x)$. But here is the ultimate exam trap: If your guess for $y_p$ duplicates ANY term already living in $y_c$, the differential operator will wipe it out to zero! When a clash occurs, you MUST multiply your guess by $x$ (or $x^2$) until the collision is broken!"*

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 12.1: Polynomial & Exponential Driving Terms with Duplication Clash
**Statement**: Solve $y'' - 3y' - 4y = 2e^{-x} + 4x^2$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Solve Homogeneous Part $y_c(x)$**:
  $$r^2 - 3r - 4 = 0 \implies (r - 4)(r + 1) = 0 \implies r = 4, -1$$
  $$y_c(x) = c_1 e^{4x} + c_2 e^{-x}$$
* **Step 2: Inspect Driving Terms**:
  $g(x) = 2e^{-x} + 4x^2$.
  - Notice $e^{-x}$ is **already in $y_c(x)$**! A regular guess $A e^{-x}$ will give 0!
  - Therefore, multiply by $x$: Guess $y_{p1} = A x e^{-x}$.
  - For $4x^2$: Guess complete 2nd-degree polynomial: $y_{p2} = B x^2 + C x + D$.
  - Combined Guess:
    $$y_p(x) = A x e^{-x} + B x^2 + C x + D$$
* **Step 3: Differentiate $y_{p1} = A x e^{-x}$**:
  $$y_{p1}' = A(e^{-x} - x e^{-x})$$
  $$y_{p1}'' = A(-e^{-x} - e^{-x} + x e^{-x}) = A(x e^{-x} - 2e^{-x})$$
  Substitute into LHS:
  $$y'' - 3y' - 4y = A e^{-x}[(x - 2) - 3(1 - x) - 4x] = A e^{-x}[x - 2 - 3 + 3x - 4x] = -5A e^{-x}$$
  Set equal to $2e^{-x} \implies -5A = 2 \implies A = -\frac{2}{5}$.
* **Step 4: Differentiate $y_{p2} = B x^2 + C x + D$**:
  $$y_{p2}' = 2Bx + C, \qquad y_{p2}'' = 2B$$
  Substitute:
  $$2B - 3(2Bx + C) - 4(Bx^2 + Cx + D) = 4x^2$$
  $$-4B x^2 + (-6B - 4C)x + (2B - 3C - 4D) = 4x^2 + 0x + 0$$
* **Step 5: Equate Coefficients**:
  - $x^2$: $-4B = 4 \implies B = -1$.
  - $x$: $-6(-1) - 4C = 0 \implies 6 - 4C = 0 \implies C = \frac{3}{2}$.
  - Constant: $2(-1) - 3(3/2) - 4D = 0 \implies -2 - \frac{9}{2} - 4D = 0 \implies -\frac{13}{2} = 4D \implies D = -\frac{13}{8}$.
* **Step 6: Assemble Full General Solution**:
  $$y(x) = c_1 e^{4x} + c_2 e^{-x} - \frac{2}{5}x e^{-x} - x^2 + \frac{3}{2}x - \frac{13}{8}$$

---

### Problem 12.2: Pure Harmonic Resonance Clash
**Statement**: Solve $y'' + 4y = 3 \sin 2x$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Find $y_c(x)$**:
  $$r^2 + 4 = 0 \implies r = \pm 2i \implies y_c(x) = c_1 \cos 2x + c_2 \sin 2x$$
* **Step 2: Resonance Detection**:
  $g(x) = 3\sin 2x$ has natural frequency $\omega = 2$, which perfectly matches the natural frequency of the system!
  Standard guess $A \cos 2x + B \sin 2x$ is in $y_c$ and produces 0!
  **Multiply by $x$**:
  $$y_p(x) = x(A \cos 2x + B \sin 2x) = A x \cos 2x + B x \sin 2x$$
* **Step 3: Differentiate and Substitute**:
  $$y_p' = A(\cos 2x - 2x \sin 2x) + B(\sin 2x + 2x \cos 2x)$$
  $$y_p'' = -4A \sin 2x - 4A x \cos 2x + 4B \cos 2x - 4B x \sin 2x$$
  $$y_p'' + 4y_p = (-4A \sin 2x + 4B \cos 2x) = 3\sin 2x$$
* **Step 4: Match Coefficients**:
  - $\sin 2x$: $-4A = 3 \implies A = -\frac{3}{4}$.
  - $\cos 2x$: $4B = 0 \implies B = 0$.
* **Step 5: Particular and General Solution**:
  $$y_p(x) = -\frac{3}{4}x \cos 2x$$
  $$y(x) = c_1 \cos 2x + c_2 \sin 2x - \frac{3}{4}x \cos 2x$$

---

### Problem 12.3: Repeated Root Double Clash ($x^2$ Factor)
**Statement**: Solve $y'' - 2y' + y = 4e^x$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Complementary Solution**:
  $$r^2 - 2r + 1 = 0 \implies (r - 1)^2 = 0 \implies y_c(x) = c_1 e^x + c_2 x e^x$$
* **Step 2: Double Clash**:
  - Guess $A e^x$? Clashes with $c_1 e^x$!
  - Guess $A x e^x$? Clashes with $c_2 x e^x$!
  - Must multiply by $x$ AGAIN:
    $$y_p(x) = A x^2 e^x$$
* **Step 3: Substitute and Solve**:
  $$y_p' = A(2x e^x + x^2 e^x)$$
  $$y_p'' = A(2e^x + 4x e^x + x^2 e^x)$$
  $$y_p'' - 2y_p' + y_p = A e^x[(2 + 4x + x^2) - 2(2x + x^2) + x^2] = 2A e^x$$
  Set equal to $4e^x \implies 2A = 4 \implies A = 2$.
* **Step 4: Final Solution**:
  $$y(x) = c_1 e^x + c_2 x e^x + 2x^2 e^x$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Applying Initial Conditions to $y_c$ alone**: You CANNOT solve for $c_1, c_2$ until you have added $y_p$! Initial conditions apply to the TOTAL solution $y = y_c + y_p$.
- **Trap 2: Truncating Polynomial Guesses**: If $g(x) = 4x^2$, your guess MUST be $Ax^2 + Bx + C$, including the lower-order linear and constant terms!
