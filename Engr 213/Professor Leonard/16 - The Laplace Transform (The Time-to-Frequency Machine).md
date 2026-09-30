# Topic 16: The Laplace Transform (The Time-to-Frequency Machine)
### Professor Leonard Master Series
**Course**: Applied Ordinary Differential Equations (ENGR 213 Companion)

---

## 1. Whiteboard Intuition: The Algebraic Time Machine
Professor Leonard introduces the Laplace Transform with wonder:
> *"The Laplace Transform is a magical time machine. In the time domain ($t$), calculus is brutal: derivatives, integrals, initial conditions tangled together. The Laplace Transform beams your differential equation into the complex frequency domain ($s$), where derivatives turn into simple multiplication by $s$! You solve the equation using basic grade-school algebra, and then take the Inverse Laplace Transform to beam the solution back into real time!"*

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt$$

---

## 2. Fundamental Transform Dictionary & Operational Theorems

1. $\mathcal{L}\{1\} = \frac{1}{s}$
2. $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$
3. $\mathcal{L}\{e^{at}\} = \frac{1}{s - a}$
4. $\mathcal{L}\{\sin kt\} = \frac{k}{s^2 + k^2}, \qquad \mathcal{L}\{\cos kt\} = \frac{s}{s^2 + k^2}$
5. **Derivatives Theorem**:
   $$\mathcal{L}\{y'\} = s Y(s) - y(0)$$
   $$\mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0)$$
6. **First Shifting Theorem**: $\mathcal{L}\{e^{at} f(t)\} = F(s - a)$
7. **Second Shifting Theorem (Heaviside Step)**: $\mathcal{L}\{f(t - a)\mathcal{U}(t - a)\} = e^{-as} F(s)$
8. **Dirac Delta Impulse**: $\mathcal{L}\{\delta(t - t_0)\} = e^{-s t_0}$

---

## 3. Professor Leonard's Whiteboard Problem Walkthroughs

### Problem 16.1: Solving a 2nd-Order IVP with Repeated Root
**Statement**: Solve $y'' - 4y' + 4y = e^{2t}$ subject to $y(0) = 0, y'(0) = 1$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Take Laplace Transform of both sides**:
  $$\mathcal{L}\{y''\} - 4\mathcal{L}\{y'\} + 4\mathcal{L}\{y\} = \mathcal{L}\{e^{2t}\}$$
* **Step 2: Substitute Derivative Formulas & Initial Conditions**:
  $$(s^2 Y - s y(0) - y'(0)) - 4(s Y - y(0)) + 4Y = \frac{1}{s - 2}$$
  $$(s^2 Y - 0 - 1) - 4(s Y - 0) + 4Y = \frac{1}{s - 2}$$
  $$(s^2 - 4s + 4)Y - 1 = \frac{1}{s - 2}$$
* **Step 3: Solve algebraically for $Y(s)$**:
  $$(s - 2)^2 Y = 1 + \frac{1}{s - 2} = \frac{s - 2 + 1}{s - 2} = \frac{s - 1}{s - 2}$$
  $$Y(s) = \frac{1}{(s - 2)^2} + \frac{1}{(s - 2)^3}$$
* **Step 4: Take the Inverse Laplace Transform using First Shifting Theorem**:
  - For $\frac{1}{(s-2)^2}$: Since $\mathcal{L}\{t\} = \frac{1}{s^2}$, shifting by $a = 2$ gives $\mathcal{L}^{-1}\left\{\frac{1}{(s-2)^2}\right\} = t e^{2t}$.
  - For $\frac{1}{(s-2)^3}$: Since $\mathcal{L}\{t^2\} = \frac{2!}{s^3} = \frac{2}{s^3}$, $\frac{1}{(s-2)^3} = \frac{1}{2} \cdot \frac{2!}{(s-2)^3} \implies \frac{1}{2}t^2 e^{2t}$.
* **Step 5: Assemble Final Time-Domain Solution**:
  $$y(t) = t e^{2t} + \frac{1}{2}t^2 e^{2t} = t e^{2t}\left(1 + \frac{1}{2}t\right)$$

---

### Problem 16.2: Completing the Square for Underdamped Frequency
**Statement**: Find $\mathcal{L}^{-1}\left\{\frac{2s + 5}{s^2 + 4s + 13}\right\}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Complete the Square in the Denominator**:
  $$s^2 + 4s + 13 = (s + 2)^2 + 9 = (s + 2)^2 + 3^2$$
  This indicates an exponential shift by $a = -2$ and oscillation frequency $k = 3$.
* **Step 2: Express Numerator in terms of $(s + 2)$**:
  $$2s + 5 = 2(s + 2) - 4 + 5 = 2(s + 2) + 1$$
* **Step 3: Split into Cosine and Sine components**:
  $$\frac{2(s + 2) + 1}{(s + 2)^2 + 3^2} = 2 \frac{s + 2}{(s + 2)^2 + 3^2} + \frac{1}{3} \frac{3}{(s + 2)^2 + 3^2}$$
* **Step 4: Apply Inverse Laplace Transform**:
  $$f(t) = 2 e^{-2t} \cos 3t + \frac{1}{3}e^{-2t} \sin 3t = e^{-2t}\left(2\cos 3t + \frac{1}{3}\sin 3t\right)$$

---

### Problem 16.3: Discontinuous Forcing & The Unit Step Function
**Statement**: Solve $y' + 2y = g(t), y(0) = 0$ where $g(t) = \begin{cases} 1, & 0 \le t < 3 \\ 0, & t \ge 3 \end{cases}$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Express $g(t)$ using Heaviside Step Functions**:
  $$g(t) = 1 - \mathcal{U}(t - 3)$$
* **Step 2: Take Laplace Transform**:
  $$(s Y - 0) + 2Y = \frac{1}{s} - \frac{e^{-3s}}{s}$$
  $$(s + 2)Y = \frac{1 - e^{-3s}}{s} \implies Y(s) = (1 - e^{-3s})\frac{1}{s(s + 2)}$$
* **Step 3: Partial Fractions on $\frac{1}{s(s+2)}$**:
  $$\frac{1}{s(s+2)} = \frac{1}{2}\left(\frac{1}{s} - \frac{1}{s+2}\right)$$
  $$H(s) = \frac{1}{2}\left(\frac{1}{s} - \frac{1}{s+2}\right) \implies h(t) = \frac{1}{2}(1 - e^{-2t})$$
* **Step 4: Apply Second Shifting Theorem to $e^{-3s}H(s)$**:
  $$y(t) = h(t) - h(t - 3)\mathcal{U}(t - 3)$$
  $$y(t) = \frac{1}{2}(1 - e^{-2t}) - \frac{1}{2}(1 - e^{-2(t-3)})\mathcal{U}(t - 3)$$

---

### Problem 16.4: Dirac Delta Hammer Impulse
**Statement**: Solve $y'' + y = \delta(t - \pi), \quad y(0) = 0, y'(0) = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Take Laplace Transform**:
  $$(s^2 + 1)Y = e^{-\pi s} \implies Y(s) = e^{-\pi s} \frac{1}{s^2 + 1}$$
* **Step 2: Invert using Second Shifting Theorem**:
  Since $\mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\} = \sin t$:
  $$y(t) = \sin(t - \pi)\mathcal{U}(t - \pi) = -\sin(t)\mathcal{U}(t - \pi)$$
  The system sits completely motionless until $t = \pi$, when the hammer strikes, initiating pure sinusoidal oscillation!

---

## 3. Common Exam Traps & Professor Leonard Warnings
- **Trap 1: Forgetting Initial Conditions in Derivative Formulas**: $\mathcal{L}\{y'\} = sY - y(0)$. If $y(0) \neq 0$, you must subtract it!
- **Trap 2: Unit Step Shift Mismatch**: In $\mathcal{L}\{f(t)\mathcal{U}(t-a)\}$, the function must be shifted as $f(t - a)$ before applying $e^{-as}F(s)$!
