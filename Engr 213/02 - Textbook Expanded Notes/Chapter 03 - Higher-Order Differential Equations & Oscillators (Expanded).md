# Chapter 03: Higher-Order Differential Equations & Oscillators
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering
**Course**: Applied Ordinary Differential Equations (ENGR 213) | **Textbook**: Official Course Textbook (7th Ed., Chapter 3)

---

## 1. Executive Summary & First-Principles Philosophy
Higher-order differential equations govern all vibrating engineering structures: car suspensions, skyscraper wind dampening, airplane wing flutter, and RLC electric circuits. The centerpiece of Chapter 3 is the **Linear Superposition Principle**: the general solution to a non-homogeneous linear equation is:
$$y(x) = y_c(x) + y_p(x)$$
where $y_c(x)$ (the complementary function) solves the homogeneous equation $L[y] = 0$, and $y_p(x)$ is any particular solution solving $L[y] = g(x)$.

---

## 2. Core Mechanics & Mathematical Engine

### A. The Wronskian & Linear Independence
Two solutions $y_1(x)$ and $y_2(x)$ to a second-order homogeneous linear ODE are **linearly independent** on an interval $I$ if and only if their Wronskian determinant is non-zero everywhere on $I$:
$$W(y_1, y_2)(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_1' y_2 \neq 0$$

### B. Constant-Coefficient Homogeneous Equations ($a y'' + b y' + c y = 0$)
Substitute trial solution $y = e^{rx}$, giving the **characteristic auxiliary equation**:
$$a r^2 + b r + c = 0$$
Three distinct physical cases arise from the roots $r_1, r_2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
1. **Case 1: Distinct Real Roots ($b^2 - 4ac > 0$)**:
   $$y_c(x) = c_1 e^{r_1 x} + c_2 e^{r_2 x}$$
2. **Case 2: Repeated Real Root ($b^2 - 4ac = 0, r_1 = r_2 = r$)**:
   $$y_c(x) = c_1 e^{r x} + c_2 x e^{r x}$$
3. **Case 3: Complex Conjugate Roots ($b^2 - 4ac < 0, r = \alpha \pm i\beta$)**:
   Using Euler's formula $e^{(\alpha \pm i\beta)x} = e^{\alpha x}(\cos(\beta x) \pm i\sin(\beta x))$:
   $$y_c(x) = e^{\alpha x}\left(c_1 \cos(\beta x) + c_2 \sin(\beta x)\right)$$

### C. Method of Undetermined Coefficients
Used when the driving term $g(x)$ is a polynomial, exponential, sine/cosine, or linear combinations/products thereof:
* **The Duplication / Modification Rule**: If any term in the trial particular solution $Y_p(x)$ duplicates a term in the complementary solution $y_c(x)$, that term (and its associated block) must be multiplied by $x^k$, where $k$ is the smallest positive integer that eliminates the duplication.

### D. Method of Variation of Parameters (Universal Method)
Works for **any** continuous driving function $g(x)$ (including $\tan(x), \sec(x), 1/x$):
Given standard form $y'' + P(x)y' + Q(x)y = f(x)$:
$$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$$
where:
$$u_1'(x) = -\frac{y_2(x)f(x)}{W(y_1, y_2)}, \quad u_2'(x) = \frac{y_1(x)f(x)}{W(y_1, y_2)}$$

---

## 3. Curriculum-Grounded Visual Reference

![Figure 3.8.2: Mass-Spring System](./images/textbook_fig_3_8_2_mass_spring_setup.png)
*Figure 3.1: Mass-spring equilibrium displacement coordinate system — from Textbook 7th Ed. Chapter 3 (Fig. 3.8.2).*

![Figure 3.8.4: Damped Oscillatory Motion](./images/textbook_fig_3_8_4_damped_motion.png)
*Figure 3.2: Damped oscillator decay curves (Underdamped vs Critically Damped vs Overdamped) — from Textbook 7th Ed. Chapter 3 (Fig. 3.8.4).*

---

## 4. Mechanical Oscillations: Classification of Damping
For a mass-spring-damper system governed by $m x'' + \beta x' + k x = 0$:
$$\omega_0 = \sqrt{\frac{k}{m}} \quad \text{(Natural Frequency)}, \quad 2\lambda = \frac{\beta}{m}$$

1. **Overdamped ($\beta^2 - 4mk > 0$)**: Two distinct negative real roots. The system slowly returns to equilibrium without oscillating.
2. **Critically Damped ($\beta^2 - 4mk = 0$)**: Repeated real root. Returns to equilibrium in the shortest possible time without oscillating.
3. **Underdamped ($\beta^2 - 4mk < 0$)**: Complex roots $\lambda \pm i\omega_d$. Oscillates with decaying amplitude envelope $x(t) = A e^{-\lambda t} \cos(\omega_d t - \phi)$, where quasi-frequency $\omega_d = \sqrt{\omega_0^2 - \lambda^2}$.

---

## 5. Rapid Exam Traps & Red Flags
* ⚠️ **Trap 1: Leading Coefficient in Variation of Parameters**: Standard form requires leading coefficient 1: $y'' + P y' + Q y = f(x)$. If the problem starts as $a(x)y'' + \dots = g(x)$, you **must divide through by $a(x)$** so that $f(x) = g(x)/a(x)$.
* ⚠️ **Trap 2: Forgetting the Duplication Rule**: If $y_c = c_1 e^{2x} + c_2 x e^{2x}$ and $g(x) = e^{2x}$, guessing $Y_p = A e^{2x}$ will completely collapse ($0 = e^{2x}$). You must multiply by $x^2$: $Y_p = A x^2 e^{2x}$.
