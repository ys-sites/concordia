# Topic 13: Variation of Parameters & Cauchy-Euler Equidimensional Equations
### Professor Leonard Master Series
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: When Undetermined Coefficients Fails
Professor Leonard reveals why Variation of Parameters is the universal hammer:
> *"What do you do if $g(x) = \tan x, \sec x, \frac{1}{x}$, or $\ln x$? Derivatives of $\tan x$ never terminate—they blow up into $\sec^2 x, 2\sec^2 x\tan x$, and you can never make a finite guess! Variation of Parameters NEVER guesses. It replaces constants $c_1, c_2$ with unknown functions $u_1(x), u_2(x)$ and integrates directly using the Wronskian!"*

$$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)$$
$$u_1'(x) = -\frac{y_2(x) g(x)}{W(y_1, y_2)}, \qquad u_2'(x) = \frac{y_1(x) g(x)}{W(y_1, y_2)}$$
*(CRITICAL: The equation MUST be in standard form $y'' + P(x)y' + Q(x)y = g(x)$ with leading coefficient 1!)*

---

## 2. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 13.1: Variation of Parameters with $\tan x$
**Statement**: Solve $y'' + y = \tan x$ on $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Complementary Solution**:
  $$r^2 + 1 = 0 \implies y_1(x) = \cos x, \quad y_2(x) = \sin x$$
* **Step 2: Compute the Wronskian $W(y_1, y_2)$**:
  $$W = \begin{vmatrix} \cos x & \sin x \\ -\sin x & \cos x \end{vmatrix} = \cos^2 x - (-\sin^2 x) = \cos^2 x + \sin^2 x = 1$$
* **Step 3: Compute $u_1(x)$**:
  $$u_1'(x) = -\frac{y_2 g}{W} = -\frac{\sin x \tan x}{1} = -\frac{\sin^2 x}{\cos x} = -\frac{1 - \cos^2 x}{\cos x} = -\sec x + \cos x$$
  $$u_1(x) = \int (\cos x - \sec x) dx = \sin x - \ln|\sec x + \tan x|$$
* **Step 4: Compute $u_2(x)$**:
  $$u_2'(x) = \frac{y_1 g}{W} = \frac{\cos x \tan x}{1} = \sin x$$
  $$u_2(x) = \int \sin x dx = -\cos x$$
* **Step 5: Assemble $y_p = u_1 y_1 + u_2 y_2$**:
  $$y_p(x) = (\sin x - \ln|\sec x + \tan x|)\cos x + (-\cos x)\sin x$$
  $$y_p(x) = \sin x \cos x - \cos x \ln|\sec x + \tan x| - \sin x \cos x = -\cos x \ln|\sec x + \tan x|$$
* **Step 6: General Solution**:
  $$y(x) = c_1 \cos x + c_2 \sin x - \cos x \ln|\sec x + \tan x|$$

---

### Problem 13.2: Variation of Parameters with $\sec 2x$
**Statement**: Solve $y'' + 4y = \sec 2x$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: $y_1 = \cos 2x, y_2 = \sin 2x$**.
  $$W = \begin{vmatrix} \cos 2x & \sin 2x \\ -2\sin 2x & 2\cos 2x \end{vmatrix} = 2\cos^2 2x + 2\sin^2 2x = 2$$
* **Step 2: Compute $u_1(x)$**:
  $$u_1' = -\frac{\sin 2x \sec 2x}{2} = -\frac{1}{2}\tan 2x \implies u_1(x) = \frac{1}{4}\ln|\cos 2x|$$
* **Step 3: Compute $u_2(x)$**:
  $$u_2' = \frac{\cos 2x \sec 2x}{2} = \frac{1}{2} \implies u_2(x) = \frac{1}{2}x$$
* **Step 4: Final Solution**:
  $$y(x) = c_1 \cos 2x + c_2 \sin 2x + \frac{1}{4}(\cos 2x)\ln|\cos 2x| + \frac{1}{2}x \sin 2x$$

---

### Problem 13.3: Cauchy-Euler Equidimensional Equation (Distinct Real Powers)
**Statement**: Solve $x^2 y'' - 2x y' - 4y = 0$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Recognize Cauchy-Euler Form**:
  Coefficients match the derivative order: $x^2 y'', x y', y$.
* **Step 2: Trial Solution $y = x^m$**:
  $y' = m x^{m-1}, \quad y'' = m(m-1)x^{m-2}$.
  $$x^2[m(m-1)x^{m-2}] - 2x[m x^{m-1}] - 4x^m = 0$$
  $$[m(m-1) - 2m - 4]x^m = 0$$
* **Step 3: Auxiliary Equation (Watch the $-m$!)**:
  $$m^2 - 3m - 4 = 0 \implies (m - 4)(m + 1) = 0 \implies m_1 = 4, \quad m_2 = -1$$
* **Step 4: General Solution**:
  $$y(x) = c_1 x^4 + c_2 x^{-1} = c_1 x^4 + \frac{c_2}{x}$$

---

### Problem 13.4: Cauchy-Euler Repeated Roots (The $\ln x$ Factor)
**Statement**: Solve $x^2 y'' + 5x y' + 4y = 0$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Auxiliary Equation**:
  $$m(m - 1) + 5m + 4 = 0 \implies m^2 + 4m + 4 = 0 \implies (m + 2)^2 = 0 \implies m = -2, -2$$
* **Step 2: In Cauchy-Euler, repeated roots gain a factor of $\ln x$**:
  $$y(x) = c_1 x^{-2} + c_2 x^{-2} \ln x = \frac{c_1 + c_2 \ln x}{x^2}$$

---

### Problem 13.5: Cauchy-Euler Complex Conjugate Powers
**Statement**: Solve $x^2 y'' + x y' + 9y = 0$ for $x > 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Auxiliary Equation**:
  $$m(m - 1) + m + 9 = 0 \implies m^2 + 9 = 0 \implies m = \pm 3i$$
  Real part $\alpha = 0$, Imaginary part $\beta = 3$.
* **Step 2: General Solution via $x^{i\beta} = e^{i\beta \ln x} = \cos(\beta \ln x) + i\sin(\beta \ln x)$**:
  $$y(x) = c_1 \cos(3\ln x) + c_2 \sin(3\ln x)$$

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting to Divide by $a(x)$ in Variation of Parameters**: If $x^2 y'' + \dots = g(x)$, you MUST divide by $x^2$ to find the true forcing function $f(x) = g(x)/x^2$ before using $u_1', u_2'$!
- **Trap 2: Cauchy-Euler $m(m-1)$ vs $m^2$**: The auxiliary equation is $a m(m-1) + b m + c = a m^2 + (b - a)m + c = 0$. Students always forget to subtract $a$!
