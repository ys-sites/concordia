# ENGR 213: Applied Ordinary Differential Equations
# Lecture 12: Nonhomogeneous Linear Equations & The Method of Undetermined Coefficients
**Concordia University · Gina Cody School of Engineering and Computer Science**  
*Curriculum Reference: Advanced Engineering Mathematics (D.G. Zill, 7th Edition, Section 3.4)*  
*Lecture Grounding: Dr. A. Haghighat M., Lecture 12 (October 23, 2026)*

---

## 1. Executive Conceptual Intuition & Physical Analogy

> [!IMPORTANT]
> **Core Concept Overview**:
> In Lecture 11, the right-hand side of our differential equation was $0$ (a system left alone to decay or oscillate based solely on its internal parameters).
> In Lecture 12, an external driving force $g(x)$ acts on the system:
> $$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = g(x)$$
> By the **Superposition Principle**, the total response of the system is the sum of two independent components:
> $$y(x) = y_c(x) + y_p(x)$$
> 1. $y_c(x)$ (**Complementary Function**): The system's natural free response to initial disturbances, governed by $a m^2 + b m + c = 0$.
> 2. $y_p(x)$ (**Particular Solution**): The steady-state forced response dictated by the driving force $g(x)$.

### The Intuitive Physical Analogy: Pushing a Child on a Swing
Imagine pushing a child on a playground swing:
* If you let the swing go from an initial angle without pushing, it swings and naturally slows down: that is the **natural response** $y_c(x)$.
* If you continuously push the swing with a rhythmic periodic force $g(x) = F_0 \sin(\omega t)$, the swing will eventually follow the rhythm of your pushes: that is the **particular response** $y_p(x)$.
* **Resonance & The Multiplication Rule**: What happens if your push frequency exactly matches the natural frequency of the swing ($\omega = \omega_0$)? The swing does not just oscillate with constant amplitude—it builds up higher and higher with each cycle! Mathematically, the driving force duplicates a term already present in $y_c(t)$, causing the amplitude to grow by a factor of $t$: $y_p(t) = t(A \cos \omega t + B \sin \omega t)$.

---

## 2. In-Depth Curriculum & Slide-by-Slide Dissection

### Governing General Nonhomogeneous Linear ODE
From Slide 3, an $n$-th order nonhomogeneous linear ODE with constant coefficients has the form:
$$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = g(x)$$
where $a_i$ are real constants and $a_n \neq 0$.

### The 3-Step Master Algorithm
To find the complete general solution:
1. **Step I**: Solve the associated homogeneous equation ($g(x) = 0$) to obtain the complementary function $y_c(x) = c_1 y_1 + c_2 y_2 + \dots + c_n y_n$.
2. **Step II**: Find any one particular solution $y_p(x)$ satisfying the nonhomogeneous equation using the **Method of Undetermined Coefficients**.
3. **Step III**: Form the complete general solution:
   $$\boxed{y(x) = y_c(x) + y_p(x)}$$
   *(Crucial Note: Initial conditions $y(x_0) = y_0, y'(x_0) = y_1$ must ALWAYS be applied to the combined solution $y = y_c + y_p$, never to $y_c$ alone!)*

---

## 3. The Method of Undetermined Coefficients

### Scope & Admissible Driving Functions
The method of undetermined coefficients makes an educated guess for $y_p$ based on the derivatives of $g(x)$. Because linear combinations of derivatives of polynomials, exponentials, sines, and cosines generate functions of the exact same family:
* Constants: $g(x) = k \implies y_p = A$
* Polynomials: $g(x) = a_n x^n + \dots + a_0 \implies y_p = A_n x^n + \dots + A_1 x + A_0$
* Exponentials: $g(x) = e^{\alpha x} \implies y_p = A e^{\alpha x}$
* Sines/Cosines: $g(x) = \sin(\beta x)$ or $\cos(\beta x) \implies y_p = A \cos(\beta x) + B \sin(\beta x)$
* Products: $g(x) = x^k e^{\alpha x} \cos(\beta x) \implies$ product of corresponding polynomial, exponential, and trig trial forms.

### Case I: The Form Rule (No Duplication)
When no term in the assumed trial form of $y_p(x)$ appears in the complementary function $y_c(x)$:
$$y_p(x) = y_{p1} + y_{p2} + \dots + y_{pm}$$
where each $y_{pi}$ corresponds directly to the driving term in $g(x)$.

### Case II: The Multiplication Rule (Resonance / Duplication)
When any term in the assumed trial form $y_{pi}$ is identical to a term in the complementary function $y_c(x)$ (meaning it satisfies the homogeneous equation and would simply give $0$ if plugged into the left side):
$$\boxed{y_{pi} \text{ must be multiplied by } x^n}$$
where $n$ is the smallest positive integer that eliminates all duplication with terms in $y_c(x)$.

---

## 4. Complete Step-by-Step Solutions to All Lecture 12 Slide Examples

### Example 1 (Slide 6): Polynomial Forcing Term
**Problem**: Solve $y'' + 4y' - 2y = 2x^2 - 3x + 6$.

* **Step 1: Complementary Solution $y_c$**:
  Auxiliary equation: $m^2 + 4m - 2 = 0$.
  Roots by quadratic formula:
  $$m = \frac{-4 \pm \sqrt{4^2 - 4(1)(-2)}}{2} = \frac{-4 \pm \sqrt{16 + 8}}{2} = \frac{-4 \pm \sqrt{24}}{2} = \frac{-4 \pm 2\sqrt{6}}{2} = -2 \pm \sqrt{6}$$
  $$y_c(x) = c_1 e^{(-2+\sqrt{6})x} + c_2 e^{(-2-\sqrt{6})x}$$

* **Step 2: Trial Form for $y_p$**:
  Since $g(x) = 2x^2 - 3x + 6$ is a second-degree polynomial, assume:
  $$y_p = A x^2 + B x + C$$
  No terms in $y_p$ duplicate $y_c$ (Case I).

* **Step 3: Differentiate $y_p$**:
  $$y_p' = 2A x + B$$
  $$y_p'' = 2A$$

* **Step 4: Substitute into the Differential Equation**:
  $$(2A) + 4(2Ax + B) - 2(Ax^2 + Bx + C) = 2x^2 - 3x + 6$$
  Expand and group like powers of $x$:
  $$(-2A) x^2 + (8A - 2B) x + (2A + 4B - 2C) = 2x^2 - 3x + 6$$

* **Step 5: Equate Coefficients**:
  * For $x^2$:
    $$-2A = 2 \implies \boxed{A = -1}$$
  * For $x^1$:
    $$8A - 2B = -3 \implies 8(-1) - 2B = -3 \implies -8 - 2B = -3 \implies -2B = 5 \implies \boxed{B = -\frac{5}{2}}$$
  * For $x^0$ (constants):
    $$2A + 4B - 2C = 6 \implies 2(-1) + 4\left(-\frac{5}{2}\right) - 2C = 6$$
    $$-2 - 10 - 2C = 6 \implies -12 - 2C = 6 \implies -2C = 18 \implies \boxed{C = -9}$$

* **Step 6: Assemble Particular and General Solutions**:
  $$y_p(x) = -x^2 - \frac{5}{2}x - 9$$
  $$\boxed{y(x) = c_1 e^{(-2+\sqrt{6})x} + c_2 e^{(-2-\sqrt{6})x} - x^2 - \frac{5}{2}x - 9}$$

---

### Example 2 (Slide 7): Trigonometric Forcing Term
**Problem**: Find a particular solution of $y'' - y' + y = 2\sin(3x)$.

* **Step 1: Check $y_c$ Roots**:
  $m^2 - m + 1 = 0 \implies m = \frac{1 \pm \sqrt{-3}}{2} = \frac{1}{2} \pm \frac{\sqrt{3}}{2}i$.
  Frequency is $\frac{\sqrt{3}}{2} \neq 3$, so no duplication exists.

* **Step 2: Trial Form**:
  Even though $g(x)$ only contains $\sin(3x)$, its first derivative produces $\cos(3x)$. Thus, the trial form MUST contain both:
  $$y_p = A \cos(3x) + B \sin(3x)$$

* **Step 3: Differentiate**:
  $$y_p' = -3A \sin(3x) + 3B \cos(3x)$$
  $$y_p'' = -9A \cos(3x) - 9B \sin(3x)$$

* **Step 4: Substitute into the ODE**:
  $$(-9A \cos 3x - 9B \sin 3x) - (-3A \sin 3x + 3B \cos 3x) + (A \cos 3x + B \sin 3x) = 2\sin 3x$$
  Group by $\cos(3x)$ and $\sin(3x)$:
  $$(-9A - 3B + A) \cos(3x) + (-9B + 3A + B) \sin(3x) = 2\sin(3x)$$
  $$(-8A - 3B) \cos(3x) + (3A - 8B) \sin(3x) = 0 \cos(3x) + 2\sin(3x)$$

* **Step 5: Equate Coefficients**:
  $$\begin{cases} -8A - 3B = 0 \implies B = -\frac{8}{3}A \\ 3A - 8B = 2 \end{cases}$$
  Substitute $B$ into the second equation:
  $$3A - 8\left(-\frac{8}{3}A\right) = 2 \implies 3A + \frac{64}{3}A = 2$$
  $$\frac{9 + 64}{3}A = 2 \implies \frac{73}{3}A = 2 \implies \boxed{A = \frac{6}{73}}$$
  Solve for $B$:
  $$B = -\frac{8}{3}\left(\frac{6}{73}\right) = -\frac{16}{73} \implies \boxed{B = -\frac{16}{73}}$$

* **Step 6: State the Particular Solution**:
  $$\boxed{y_p(x) = \frac{6}{73}\cos(3x) - \frac{16}{73}\sin(3x)}$$

---

### Example 3 (Slide 8): Sum of Polynomial and Exponential-Polynomial
**Problem**: Solve $y'' - 2y' - 3y = 4x - 5 + 6x e^{2x}$.

* **Step 1: Complementary Solution $y_c$**:
  Auxiliary equation: $m^2 - 2m - 3 = 0 \implies (m - 3)(m + 1) = 0 \implies m_1 = 3, m_2 = -1$.
  $$y_c(x) = c_1 e^{3x} + c_2 e^{-x}$$

* **Step 2: Trial Form for $y_p$**:
  The forcing term has two parts:
  1. $g_1(x) = 4x - 5 \implies y_{p1} = Ax + B$
  2. $g_2(x) = 6x e^{2x} \implies y_{p2} = (Cx + D)e^{2x}$
  Comparing with $y_c = c_1 e^{3x} + c_2 e^{-x}$, neither $1, x$ nor $e^{2x}, x e^{2x}$ duplicate terms in $y_c$.
  $$y_p = Ax + B + (Cx + D)e^{2x}$$

* **Step 3: Differentiate**:
  $$y_p' = A + C e^{2x} + 2(Cx + D)e^{2x} = A + (2Cx + C + 2D)e^{2x}$$
  $$y_p'' = 2C e^{2x} + 2(2Cx + C + 2D)e^{2x} = (4Cx + 4C + 4D)e^{2x}$$

* **Step 4: Substitute and Group**:
  * Polynomial part:
    $$-2(A) - 3(Ax + B) = 4x - 5 \implies -3Ax - (2A + 3B) = 4x - 5$$
    $$-3A = 4 \implies \boxed{A = -\frac{4}{3}}$$
    $$-(2A + 3B) = -5 \implies 2\left(-\frac{4}{3}\right) + 3B = 5 \implies -\frac{8}{3} + 3B = 5 \implies 3B = \frac{23}{3} \implies \boxed{B = \frac{23}{9}}$$
  * Exponential part:
    $$(4Cx + 4C + 4D)e^{2x} - 2(2Cx + C + 2D)e^{2x} - 3(Cx + D)e^{2x} = 6x e^{2x}$$
    Divide by $e^{2x}$:
    $$(4C - 4C - 3C)x + (4C + 4D - 2C - 4D - 3D) = 6x$$
    $$-3Cx + (2C - 3D) = 6x + 0$$
    $$-3C = 6 \implies \boxed{C = -2}$$
    $$2C - 3D = 0 \implies 2(-2) - 3D = 0 \implies 3D = -4 \implies \boxed{D = -\frac{4}{3}}$$

* **Step 5: Assemble General Solution**:
  $$\boxed{y(x) = c_1 e^{3x} + c_2 e^{-x} - \frac{4}{3}x + \frac{23}{9} - \left(2x + \frac{4}{3}\right)e^{2x}}$$

---

### Example 4 (Slide 9): Case II Duplication with Single Exponential
**Problem**: Find a particular solution of $y'' - 5y' + 4y = 8e^x$.

* **Step 1: Complementary Solution $y_c$**:
  $$m^2 - 5m + 4 = 0 \implies (m - 1)(m - 4) = 0 \implies m_1 = 1, m_2 = 4$$
  $$y_c(x) = c_1 e^x + c_2 e^{4x}$$

* **Step 2: Detect Duplication and Apply Multiplication Rule**:
  Naive guess: $y_p = A e^x$.
  **CRITICAL TRAP**: $e^x$ is already in $y_c(x)$! If we plug $A e^x$ into the left-hand side, it will equal $0$, not $8e^x$!
  Multiply by $x^1$:
  $$y_p = A x e^x$$
  Check: $x e^x$ is not in $y_c$. Duplication is eliminated!

* **Step 3: Differentiate $y_p$**:
  $$y_p' = A e^x + A x e^x = A(x + 1)e^x$$
  $$y_p'' = A e^x + A(x + 1)e^x = A(x + 2)e^x$$

* **Step 4: Substitute into the ODE**:
  $$A(x + 2)e^x - 5A(x + 1)e^x + 4A x e^x = 8e^x$$
  Divide by $e^x$:
  $$A(x + 2) - 5A(x + 1) + 4Ax = 8$$
  $$(A - 5A + 4A)x + (2A - 5A) = 8$$
  $$0x - 3A = 8 \implies -3A = 8 \implies \boxed{A = -\frac{8}{3}}$$

* **Step 5: State the Verified Particular Solution**:
  $$\boxed{y_p(x) = -\frac{8}{3}x e^x}$$

---

### Example 8 (Slide 14): Case II with Repeated Root in $y_c$
**Problem**: Find a particular solution of $y'' - 2y' + y = e^x$.

* **Step 1: Complementary Solution $y_c$**:
  $$m^2 - 2m + 1 = 0 \implies (m - 1)^2 = 0 \implies m_1 = m_2 = 1$$
  $$y_c(x) = c_1 e^x + c_2 x e^x$$

* **Step 2: Detect Duplication**:
  * Guess 1: $y_p = A e^x \implies$ duplicates $c_1 e^x$.
  * Guess 2: Multiply by $x \implies y_p = A x e^x \implies$ duplicates $c_2 x e^x$!
  * Guess 3: Multiply by $x^2 \implies y_p = A x^2 e^x$.
  $x^2 e^x$ is NOT in $y_c$, so multiplication rule index is $n = 2$!

* **Step 3: Differentiate $y_p = A x^2 e^x$**:
  $$y_p' = 2Ax e^x + Ax^2 e^x = A(x^2 + 2x)e^x$$
  $$y_p'' = A(2x + 2)e^x + A(x^2 + 2x)e^x = A(x^2 + 4x + 2)e^x$$

* **Step 4: Substitute into the ODE**:
  $$A(x^2 + 4x + 2)e^x - 2A(x^2 + 2x)e^x + A x^2 e^x = e^x$$
  Divide by $e^x$:
  $$A(x^2 + 4x + 2) - 2A(x^2 + 2x) + A x^2 = 1$$
  $$(A - 2A + A)x^2 + (4A - 4A)x + 2A = 1$$
  $$0x^2 + 0x + 2A = 1 \implies 2A = 1 \implies \boxed{A = \frac{1}{2}}$$

* **Step 5: Particular Solution**:
  $$\boxed{y_p(x) = \frac{1}{2}x^2 e^x}$$

---

### Example 11 (Slide 18): Resonance Initial-Value Problem
**Problem**: Solve the initial-value problem:
$$y'' + y = 4x + 10\sin x, \qquad y(\pi) = 0, \quad y'(\pi) = 2$$

* **Step 1: Complementary Solution $y_c$**:
  $$m^2 + 1 = 0 \implies m = \pm i \implies y_c(x) = c_1 \cos x + c_2 \sin x$$

* **Step 2: Trial Form for $y_p$**:
  * For $4x$: $y_{p1} = Ax + B$ (no duplication).
  * For $10\sin x$: standard guess is $C\cos x + D\sin x$, but both $\cos x$ and $\sin x$ are in $y_c$!
    Multiply by $x$: $y_{p2} = x(C\cos x + D\sin x) = Cx\cos x + Dx\sin x$.
  Combined trial form:
  $$y_p = Ax + B + Cx\cos x + Dx\sin x$$

* **Step 3: Solve for Coefficients**:
  * For $y_{p1} = Ax + B$:
    $$y_{p1}'' + y_{p1} = 0 + (Ax + B) = 4x \implies \boxed{A = 4}, \quad \boxed{B = 0}$$
  * For $y_{p2} = Cx\cos x + Dx\sin x$:
    $$y_{p2}' = C\cos x - Cx\sin x + D\sin x + Dx\cos x = (C + Dx)\cos x + (D - Cx)\sin x$$
    $$y_{p2}'' = -C\sin x + D\cos x - Dx\sin x + D\cos x - C\sin x - Cx\cos x$$
    $$y_{p2}'' = (2D - Cx)\cos x + (-2C - Dx)\sin x$$
    Substitute into $y'' + y$:
    $$(2D - Cx)\cos x + (-2C - Dx)\sin x + (Cx\cos x + Dx\sin x) = 10\sin x$$
    $$2D\cos x - 2C\sin x = 10\sin x$$
    Equate coefficients:
    $$2D = 0 \implies \boxed{D = 0}$$
    $$-2C = 10 \implies \boxed{C = -5}$$
  Thus:
  $$y_p(x) = 4x - 5x\cos x$$

* **Step 4: Form General Solution**:
  $$y(x) = c_1 \cos x + c_2 \sin x + 4x - 5x\cos x$$

* **Step 5: Apply Initial Conditions at $x = \pi$**:
  * $y(\pi) = 0$:
    $$c_1 \cos(\pi) + c_2 \sin(\pi) + 4\pi - 5\pi\cos(\pi) = 0$$
    $$c_1(-1) + c_2(0) + 4\pi - 5\pi(-1) = 0$$
    $$-c_1 + 4\pi + 5\pi = 0 \implies -c_1 + 9\pi = 0 \implies \boxed{c_1 = 9\pi}$$
  * Differentiate $y(x)$:
    $$y'(x) = -c_1 \sin x + c_2 \cos x + 4 - 5(\cos x - x\sin x) = -c_1 \sin x + (c_2 - 5)\cos x + 4 + 5x\sin x$$
  * $y'(\pi) = 2$:
    $$-c_1 \sin(\pi) + (c_2 - 5)\cos(\pi) + 4 + 5\pi\sin(\pi) = 2$$
    $$0 + (c_2 - 5)(-1) + 4 + 0 = 2$$
    $$-(c_2 - 5) + 4 = 2 \implies -c_2 + 5 + 4 = 2 \implies -c_2 + 9 = 2 \implies \boxed{c_2 = 7}$$

* **Step 6: State the Unique Solution**:
  $$\boxed{y(x) = 9\pi \cos x + 7\sin x + 4x - 5x\cos x}$$

---

## 5. Common Exam Pitfalls & Trap Analysis

| Exam Pitfall / Trap | Why Students Make This Mistake | How the Exam Sets the Trap | The Bulletproof Defense |
| :--- | :--- | :--- | :--- |
| **Solving for $c_1, c_2$ Before Finding $y_p$** | Instinctively applying initial conditions to $y_c$ as soon as the auxiliary roots are found | The exam gives an IVP ($y(0)=y_0, y'(0)=y_1$); student applies it to $y_c$, then adds $y_p$ | **GOLDEN RULE**: Constants $c_1, c_2$ can ONLY be determined from the TOTAL solution $y = y_c + y_p$. |
| **Omitting Cosine When Forcing Term Is Sine** | Assuming $g(x) = \sin(\omega x)$ only needs $y_p = A\sin(\omega x)$ | Derivative of $\sin$ produces $\cos$, leaving unpaired terms on the left side | Always include both: $A\cos(\beta x) + B\sin(\beta x)$. |
| **Missing Duplication with $y_c$** | Forgetting to find $y_c$ before guessing $y_p$ | When $g(x) = e^{x}$ and $m=1$ is a root of the auxiliary equation | Always find $y_c$ FIRST! Compare every term of your trial form against $y_c$. If identical, multiply by $x$. |
| **Failing to Multiply ALL Parts of a Product** | When multiplying by $x$ for duplication, only multiplying one term | If $g(x) = x e^x$ and $e^x \in y_c$, guessing $(Ax+B)e^x$ instead of $x(Ax+B)e^x$ | Multiply the ENTIRE trial block: $x(Ax+B)e^x = (Ax^2 + Bx)e^x$. |
| **Resonance Amplitude Calculation Slip** | In IVPs with $x\cos x$, forgetting product rule when evaluating $y'(x)$ | Forgets the derivative of $x$ in $\frac{d}{dx}[x\cos x] = \cos x - x\sin x$ | Write each derivative line-by-line using $(u v)' = u'v + uv'$ before setting $x=x_0$. |

---

## 6. Self-Check Mastery Practice Problems

### Problem 1 (Polynomial & Resonance)
Find the general solution of $y'' - 4y = 8e^{2x} + 4x$.
* **Complementary**: $m^2 - 4 = 0 \implies m = \pm 2 \implies y_c = c_1 e^{2x} + c_2 e^{-2x}$.
* **Forcing 1 ($4x$)**: $y_{p1} = Ax + B \implies -4(Ax+B) = 4x \implies A = -1, B = 0 \implies y_{p1} = -x$.
* **Forcing 2 ($8e^{2x}$)**: $e^{2x}$ duplicates $c_1 e^{2x} \implies y_{p2} = C x e^{2x}$.
  $y_{p2}' = C(1 + 2x)e^{2x}, \quad y_{p2}'' = C(4 + 4x)e^{2x}$.
  $y'' - 4y = C(4 + 4x)e^{2x} - 4C x e^{2x} = 4C e^{2x} = 8e^{2x} \implies C = 2$.
* **General Solution**:
  $$\boxed{y(x) = c_1 e^{2x} + c_2 e^{-2x} + 2x e^{2x} - x}$$
