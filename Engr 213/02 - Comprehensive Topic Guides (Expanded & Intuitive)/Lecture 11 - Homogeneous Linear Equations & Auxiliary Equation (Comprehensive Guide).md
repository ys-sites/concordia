# ENGR 213: Applied Ordinary Differential Equations
# Lecture 11: Homogeneous Linear ODEs with Constant Coefficients & The Auxiliary Equation
**Concordia University · Gina Cody School of Engineering and Computer Science**  
*Curriculum Reference: Advanced Engineering Mathematics (D.G. Zill, 7th Edition, Section 3.3)*  
*Lecture Grounding: Dr. A. Haghighat M., Lecture 11 (October 21, 2026)*

---

## 1. Executive Conceptual Intuition & Physical Analogy

> [!IMPORTANT]
> **Core Concept Overview**:
> When an engineering system's restoring force, damping resistance, and inertia are strictly proportional to displacement, velocity, and acceleration with constant physical parameters (such as mass $m$, damping constant $c$, and spring stiffness $k$), the governing differential equation is **linear with constant coefficients**.
> Because the derivative of an exponential function reproduces itself scaled by a constant ($\frac{d}{dx}e^{mx} = m e^{mx}$), every solution to a constant-coefficient homogeneous linear ODE is built directly from exponential basis functions $e^{mx}$.

### The Intuitive Physical Analogy: The Tuned Tuning Fork & Damped Shock Absorber
Imagine striking a steel tuning fork or pressing down on a car's suspension strut:
* **Inertia ($a y''$)**: The mass of the car body resists acceleration.
* **Damping ($b y'$)**: The viscous fluid in the shock absorber resists velocity (speed of motion).
* **Restoring Elasticity ($c y$)**: The coiled coil spring resists displacement from equilibrium.

When released with no external engine shaking the system (the homogeneous case, where the right-hand side is $0$), the system balances its own internal energy:
$$a y'' + b y' + c y = 0$$

Three physical fates can occur based on how strong the shock absorber damping is relative to the spring:
1. **Case I: Overdamped (Real & Distinct Roots, $b^2 - 4ac > 0$)**: The fluid is thick and sluggish (like honey). The shock absorber slowly returns to equilibrium without ever oscillating: $y(x) = c_1 e^{m_1 x} + c_2 e^{m_2 x}$.
2. **Case II: Critically Damped (Real & Repeated Roots, $b^2 - 4ac = 0$)**: The optimal design point for vehicle suspension and door closers. The system returns to rest in the fastest possible time without overshoot. The second linearly independent solution gains a multiplier of $x$: $y(x) = c_1 e^{m x} + c_2 x e^{m x}$.
3. **Case III: Underdamped (Complex Conjugate Roots, $b^2 - 4ac < 0$)**: The damping is weak. The spring dominates, causing ringing oscillations that gradually decay: $y(x) = e^{\alpha x} (c_1 \cos \beta x + c_2 \sin \beta x)$.

---

## 2. In-Depth Curriculum & Slide-by-Slide Dissection

### Governing General $n$-th Order Linear Homogeneous Equation
From Slide 3, the general $n$-th order constant-coefficient equation is:
$$a_n \frac{d^n y}{dx^n} + a_{n-1} \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1 \frac{dy}{dx} + a_0 y = 0$$
where $a_n, a_{n-1}, \dots, a_0$ are real constants and $a_n \neq 0$.

### The Second-Order Auxiliary Equation
For the canonical second-order equation:
$$a y'' + b y' + c y = 0$$
We test the fundamental ansatz $y = e^{mx}$.
Differentiating using the chain rule:
$$y' = m e^{mx}$$
$$y'' = m^2 e^{mx}$$
Substituting into the ODE:
$$a(m^2 e^{mx}) + b(m e^{mx}) + c(e^{mx}) = 0$$
Factoring out the common exponential factor $e^{mx}$:
$$e^{mx} \left(a m^2 + b m + c\right) = 0$$

Since $e^{mx} \neq 0$ for all real or complex $x$, the quadratic bracket must vanish identically:
$$\boxed{a m^2 + b m + c = 0}$$
This algebraic equation is the **Auxiliary Equation** (or Characteristic Equation).

### The Quadratic Formula & Discriminant Analysis
The roots are determined by:
$$m_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}, \qquad m_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$$

The discriminant $\Delta = b^2 - 4ac$ governs the classification:

| Case | Condition | Nature of Roots | Linearly Independent Solutions $\{y_1, y_2\}$ | General Solution $y(x)$ |
| :---: | :---: | :---: | :---: | :---: |
| **Case I** | $b^2 - 4ac > 0$ | Real, distinct $m_1 \neq m_2$ | $\{e^{m_1 x}, e^{m_2 x}\}$ | $y = c_1 e^{m_1 x} + c_2 e^{m_2 x}$ |
| **Case II** | $b^2 - 4ac = 0$ | Real, repeated $m_1 = m_2 = -\frac{b}{2a}$ | $\{e^{mx}, x e^{mx}\}$ | $y = c_1 e^{mx} + c_2 x e^{mx}$ |
| **Case III** | $b^2 - 4ac < 0$ | Complex conjugates $m = \alpha \pm i\beta$ | $\{e^{\alpha x}\cos \beta x, e^{\alpha x}\sin \beta x\}$ | $y = e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$ |

---

## 3. Mathematical Foundations & The "Zero-Skip" Derivation Standard

### Derivation of Case II: Why Does the Second Solution Gain a Factor of $x$?
When $b^2 - 4ac = 0$, the quadratic formula gives a single root $m_1 = -\frac{b}{2a}$, yielding one solution:
$$y_1(x) = e^{-\frac{b}{2a}x}$$
By the Fundamental Existence and Uniqueness Theorem, a second-order linear ODE requires **two** linearly independent basis solutions ($y = c_1 y_1 + c_2 y_2$).

We apply **Reduction of Order** with $y_2(x) = u(x) y_1(x)$:
$$\text{Standard Form: } y'' + P(x) y' + Q(x) y = 0, \quad \text{where } P(x) = \frac{b}{a}$$
The reduction formula gives:
$$u(x) = \int \frac{e^{-\int P(x) dx}}{[y_1(x)]^2} dx$$
Step 1: Compute the numerator:
$$\int P(x) dx = \int \frac{b}{a} dx = \frac{b}{a}x \implies e^{-\int P dx} = e^{-\frac{b}{a}x}$$
Step 2: Compute the denominator:
$$[y_1(x)]^2 = \left(e^{-\frac{b}{2a}x}\right)^2 = e^{2 \cdot \left(-\frac{b}{2a}x\right)} = e^{-\frac{b}{a}x}$$
Step 3: Evaluate the quotient:
$$u(x) = \int \frac{e^{-\frac{b}{a}x}}{e^{-\frac{b}{a}x}} dx = \int 1 \, dx = x$$
Step 4: Form $y_2(x)$:
$$\boxed{y_2(x) = u(x) y_1(x) = x e^{-\frac{b}{2a}x}}$$
Thus, the general solution is rigorously:
$$y(x) = c_1 e^{mx} + c_2 x e^{mx} = (c_1 + c_2 x) e^{mx}$$

### Derivation of Case III: How Complex Exponentials Become Real Sines and Cosines
When $b^2 - 4ac < 0$, let:
$$\alpha = -\frac{b}{2a}, \qquad \beta = \frac{\sqrt{4ac - b^2}}{2a}$$
The roots are $m_1 = \alpha + i\beta$ and $m_2 = \alpha - i\beta$.
The complex general solution is:
$$y(x) = C_1 e^{(\alpha + i\beta)x} + C_2 e^{(\alpha - i\beta)x} = e^{\alpha x} \left(C_1 e^{i\beta x} + C_2 e^{-i\beta x}\right)$$
Applying **Euler's Formula** ($e^{i\theta} = \cos \theta + i \sin \theta$):
$$e^{i\beta x} = \cos(\beta x) + i \sin(\beta x)$$
$$e^{-i\beta x} = \cos(-\beta x) + i \sin(-\beta x) = \cos(\beta x) - i \sin(\beta x)$$
Substituting:
$$y(x) = e^{\alpha x} \left[C_1 (\cos \beta x + i\sin \beta x) + C_2 (\cos \beta x - i\sin \beta x)\right]$$
Regrouping terms:
$$y(x) = e^{\alpha x} \left[(C_1 + C_2) \cos(\beta x) + i(C_1 - C_2) \sin(\beta x)\right]$$
Defining real arbitrary constants $c_1 = C_1 + C_2$ and $c_2 = i(C_1 - C_2)$:
$$\boxed{y(x) = e^{\alpha x} \left(c_1 \cos \beta x + c_2 \sin \beta x\right)}$$

---

## 4. Complete Step-by-Step Solutions to All Lecture 11 Slide Examples

### Example 1 (Slide 7): Distinct Real Roots
**Problem**: Solve $2y'' - 5y' - 3y = 0$.

* **Step 1: Write the Auxiliary Equation**:
  $$2m^2 - 5m - 3 = 0$$
* **Step 2: Factor the Quadratic**:
  Find two numbers that multiply to $a \cdot c = 2 \cdot (-3) = -6$ and add to $b = -5$.
  The numbers are $-6$ and $+1$:
  $$2m^2 - 6m + m - 3 = 0$$
  $$2m(m - 3) + 1(m - 3) = 0$$
  $$(2m + 1)(m - 3) = 0$$
* **Step 3: Solve for the Roots**:
  $$2m + 1 = 0 \implies m_1 = -\frac{1}{2}$$
  $$m - 3 = 0 \implies m_2 = 3$$
  The roots are real and distinct ($m_1 \neq m_2$, Case I).
* **Step 4: Construct the General Solution**:
  $$\boxed{y(x) = c_1 e^{-\frac{1}{2}x} + c_2 e^{3x}}$$

---

### Example 2 (Slide 7): Repeated Real Roots
**Problem**: Solve $y'' - 10y' + 25y = 0$.

* **Step 1: Write the Auxiliary Equation**:
  $$m^2 - 10m + 25 = 0$$
* **Step 2: Factor the Perfect Square**:
  $$(m - 5)^2 = 0$$
* **Step 3: Identify the Multiplicity**:
  $$m_1 = m_2 = 5 \quad (\text{root of multiplicity } 2, \text{Case II})$$
* **Step 4: Construct the General Solution**:
  $$\boxed{y(x) = c_1 e^{5x} + c_2 x e^{5x} = (c_1 + c_2 x) e^{5x}}$$

---

### Example 3 (Slide 7): Complex Conjugate Roots
**Problem**: Solve $y'' + 4y' + 7y = 0$.

* **Step 1: Write the Auxiliary Equation**:
  $$m^2 + 4m + 7 = 0$$
* **Step 2: Apply the Quadratic Formula**:
  $$m = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-4 \pm \sqrt{4^2 - 4(1)(7)}}{2(1)}$$
  $$m = \frac{-4 \pm \sqrt{16 - 28}}{2} = \frac{-4 \pm \sqrt{-12}}{2}$$
* **Step 3: Simplify the Imaginary Radicand**:
  $$\sqrt{-12} = \sqrt{12} \cdot i = \sqrt{4 \cdot 3} \cdot i = 2\sqrt{3} \, i$$
  $$m = \frac{-4 \pm 2\sqrt{3} \, i}{2} = -2 \pm \sqrt{3} \, i$$
* **Step 4: Identify Real and Imaginary Parts**:
  $$\alpha = -2, \qquad \beta = \sqrt{3}$$
* **Step 5: Assemble the General Solution (Case III)**:
  $$\boxed{y(x) = e^{-2x} \left(c_1 \cos(\sqrt{3}x) + c_2 \sin(\sqrt{3}x)\right)}$$

---

### Example 4 (Slide 8): Initial-Value Problem (IVP)
**Problem**: Solve the IVP:
$$4y'' + 4y' + 17y = 0, \qquad y(0) = -1, \quad y'(0) = 2$$

* **Step 1: Auxiliary Equation and Roots**:
  $$4m^2 + 4m + 17 = 0$$
  $$m = \frac{-4 \pm \sqrt{4^2 - 4(4)(17)}}{2(4)} = \frac{-4 \pm \sqrt{16 - 272}}{8} = \frac{-4 \pm \sqrt{-256}}{8}$$
  $$\sqrt{-256} = 16i$$
  $$m = \frac{-4 \pm 16i}{8} = -\frac{4}{8} \pm \frac{16}{8}i = -\frac{1}{2} \pm 2i$$
  Therefore: $\alpha = -\frac{1}{2}, \quad \beta = 2$.

* **Step 2: Write the General Solution**:
  $$y(x) = e^{-\frac{1}{2}x} \left(c_1 \cos(2x) + c_2 \sin(2x)\right)$$

* **Step 3: Apply the First Initial Condition $y(0) = -1$**:
  $$y(0) = e^{0} \left(c_1 \cos(0) + c_2 \sin(0)\right) = 1 \cdot (c_1 \cdot 1 + c_2 \cdot 0) = c_1$$
  $$\boxed{c_1 = -1}$$

* **Step 4: Differentiate $y(x)$ to Find $y'(x)$**:
  Use the product rule: $\frac{d}{dx}[u \cdot v] = u' v + u v'$:
  $$u = e^{-\frac{1}{2}x} \implies u' = -\frac{1}{2} e^{-\frac{1}{2}x}$$
  $$v = c_1 \cos(2x) + c_2 \sin(2x) \implies v' = -2 c_1 \sin(2x) + 2 c_2 \cos(2x)$$
  $$y'(x) = -\frac{1}{2} e^{-\frac{1}{2}x} \left(c_1 \cos(2x) + c_2 \sin(2x)\right) + e^{-\frac{1}{2}x} \left(-2c_1 \sin(2x) + 2c_2 \cos(2x)\right)$$

* **Step 5: Apply the Second Initial Condition $y'(0) = 2$**:
  $$y'(0) = -\frac{1}{2}(1)(c_1 \cdot 1 + 0) + (1)(-0 + 2c_2 \cdot 1)$$
  $$y'(0) = -\frac{1}{2} c_1 + 2 c_2$$
  Substitute $c_1 = -1$:
  $$2 = -\frac{1}{2}(-1) + 2 c_2$$
  $$2 = \frac{1}{2} + 2 c_2$$
  $$2 - \frac{1}{2} = 2 c_2 \implies \frac{3}{2} = 2 c_2 \implies \boxed{c_2 = \frac{3}{4}}$$

* **Step 6: State the Unique Particular Solution**:
  $$\boxed{y(x) = e^{-\frac{1}{2}x} \left(-\cos(2x) + \frac{3}{4}\sin(2x)\right)}$$

---

### Example 5 (Slide 11): Third-Order ODE with Repeated Roots
**Problem**: Solve $y''' + 3y'' - 4y = 0$.

* **Step 1: Write the Auxiliary Equation**:
  $$m^3 + 3m^2 - 4 = 0$$
* **Step 2: Find a Rational Root**:
  By the Rational Roots Theorem, candidates dividing $-4$ are $\pm 1, \pm 2, \pm 4$.
  Test $m = 1$:
  $$(1)^3 + 3(1)^2 - 4 = 1 + 3 - 4 = 0 \quad \checkmark$$
  Therefore, $(m - 1)$ is a factor.
* **Step 3: Polynomial Division**:
  Divide $m^3 + 3m^2 + 0m - 4$ by $m - 1$:
  $$\frac{m^3 + 3m^2 - 4}{m - 1} = m^2 + 4m + 4$$
  Check: $(m - 1)(m^2 + 4m + 4) = m^3 + 4m^2 + 4m - m^2 - 4m - 4 = m^3 + 3m^2 - 4$.
* **Step 4: Factor the Quadratic Factor**:
  $$m^2 + 4m + 4 = (m + 2)^2$$
  The complete factorization is:
  $$(m - 1)(m + 2)^2 = 0$$
* **Step 5: List the Roots and Their Multiplicities**:
  $$m_1 = 1 \quad (\text{multiplicity } 1) \implies y_1 = e^x$$
  $$m_2 = -2, \quad m_3 = -2 \quad (\text{multiplicity } 2) \implies y_2 = e^{-2x}, \quad y_3 = x e^{-2x}$$
* **Step 6: Form the General Solution**:
  $$\boxed{y(x) = c_1 e^x + c_2 e^{-2x} + c_3 x e^{-2x}}$$

---

### Example 6 (Slide 12): Fourth-Order ODE with Repeated Complex Roots
**Problem**: Solve $y^{(4)} + 2y'' + y = 0$.

* **Step 1: Write the Auxiliary Equation**:
  $$m^4 + 2m^2 + 1 = 0$$
* **Step 2: Recognize Quadratic in $m^2$**:
  $$(m^2 + 1)^2 = 0$$
* **Step 3: Solve for the Roots**:
  $$m^2 + 1 = 0 \implies m^2 = -1 \implies m = \pm i$$
  Since the factor $(m^2 + 1)$ is squared, each root $\pm i$ has multiplicity 2:
  $$m_1 = +i, \quad m_2 = -i \quad (\text{multiplicity } 2)$$
  Here $\alpha = 0$ and $\beta = 1$.
* **Step 4: Construct the Basis Solutions**:
  For the first pair ($k=1$): $\{\cos x, \sin x\}$.
  For the repeated pair ($k=2$): $\{x \cos x, x \sin x\}$.
* **Step 5: Form the General Solution**:
  $$\boxed{y(x) = c_1 \cos x + c_2 \sin x + c_3 x \cos x + c_4 x \sin x = (c_1 + c_3 x)\cos x + (c_2 + c_4 x)\sin x}$$

---

### Example 7 (Slide 13): Third-Order ODE with Mixed Roots
**Problem**: Solve $3y''' + 5y'' + 10y' - 4y = 0$.

* **Step 1: Write the Auxiliary Equation**:
  $$3m^3 + 5m^2 + 10m - 4 = 0$$
* **Step 2: Find a Rational Root**:
  Possible rational roots $\frac{p}{q}$:
  $$p \in \{\pm 1, \pm 2, \pm 4\}, \quad q \in \{1, 3\} \implies m \in \left\{\pm 1, \pm 2, \pm 4, \pm \frac{1}{3}, \pm \frac{2}{3}, \pm \frac{4}{3}\right\}$$
  Test $m = \frac{1}{3}$:
  $$3\left(\frac{1}{3}\right)^3 + 5\left(\frac{1}{3}\right)^2 + 10\left(\frac{1}{3}\right) - 4 = 3\left(\frac{1}{27}\right) + 5\left(\frac{1}{9}\right) + \frac{10}{3} - 4$$
  $$= \frac{1}{9} + \frac{5}{9} + \frac{30}{9} - \frac{36}{9} = \frac{1 + 5 + 30 - 36}{9} = \frac{0}{9} = 0 \quad \checkmark$$
  Therefore, $\left(m - \frac{1}{3}\right)$ is a factor, or equivalently $(3m - 1)$.
* **Step 3: Factor the Polynomial**:
  Divide $3m^3 + 5m^2 + 10m - 4$ by $(3m - 1)$:
  $$3m^3 + 5m^2 + 10m - 4 = (3m - 1)(m^2 + 2m + 4)$$
  Check: $(3m - 1)(m^2 + 2m + 4) = 3m^3 + 6m^2 + 12m - m^2 - 2m - 4 = 3m^3 + 5m^2 + 10m - 4$.
* **Step 4: Solve the Quadratic Factor**:
  $$m^2 + 2m + 4 = 0$$
  $$m = \frac{-2 \pm \sqrt{2^2 - 4(1)(4)}}{2(1)} = \frac{-2 \pm \sqrt{4 - 16}}{2} = \frac{-2 \pm \sqrt{-12}}{2}$$
  $$\sqrt{-12} = 2\sqrt{3} \, i \implies m = \frac{-2 \pm 2\sqrt{3} \, i}{2} = -1 \pm \sqrt{3} \, i$$
* **Step 5: Assemble All Roots**:
  $$m_1 = \frac{1}{3} \quad (\text{Real distinct})$$
  $$m_{2,3} = -1 \pm \sqrt{3} \, i \quad (\text{Complex conjugate, } \alpha = -1, \beta = \sqrt{3})$$
* **Step 6: Form the General Solution**:
  $$\boxed{y(x) = c_1 e^{\frac{1}{3}x} + e^{-x}\left(c_2 \cos(\sqrt{3}x) + c_3 \sin(\sqrt{3}x)\right)}$$

---

## 5. Common Exam Pitfalls & Trap Analysis

| Exam Pitfall / Trap | Why Students Make This Mistake | How the Exam Sets the Trap | The Bulletproof Defense |
| :--- | :--- | :--- | :--- |
| **Omitting $x$ in Repeated Roots** | Treating repeated roots $(m-5)^2=0$ like distinct roots | Option A gives $c_1 e^{5x} + c_2 e^{5x}$, which collapses to a single constant $(c_1+c_2)e^{5x}$ | Count the order $n$. You MUST have $n$ linearly independent arbitrary constants. For repeated root multiplicity $k$, multiply by $1, x, x^2, \dots, x^{k-1}$. |
| **Sign Slip on $-b / 2a$ in Complex Roots** | Inverting the real part $\alpha$ during quadratic formula calculation | If $y'' + 4y' + 7y = 0$, student mistakenly writes $e^{+2x}$ instead of $e^{-2x}$ | Memorize: $\alpha = -b/(2a)$. Since $b = +4$, $\alpha = -4/2 = -2$, giving $e^{-2x}$. |
| **Including $i$ inside Cosine or Sine** | Carrying $i$ from the root into the trigonometric argument | Writing $\cos(\beta i x)$ or $i \sin(\beta x)$ with complex coefficients | Euler's formula guarantees the real basis is simply $\cos(\beta x)$ and $\sin(\beta x)$ where $\beta > 0$ is purely real! |
| **Improper Product Rule Differentiation in IVP** | Differentiating $e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$ without the product rule | Differentiating only the trig terms and omitting the exponential decay factor's derivative | Always write $u \cdot v$ explicitly: $(u v)' = u' v + u v'$ before plugging in $x=0$. |
| **Order Mismatch with Missing Terms** | Forgetting zero coefficients in higher-order ODEs (e.g., $y''' - 4y = 0$) | Writing $m^2 - 4 = 0$ instead of $m^3 - 4 = 0$ | Always check the highest derivative order: $y^{(n)}$ means the auxiliary equation has degree $n$. Include $0m^2$ placeholders when factoring. |

---

## 6. Self-Check Mastery Practice Problems

### Problem 1 (Distinct Roots)
Solve: $y'' - y' - 6y = 0, \quad y(0) = 5, \quad y'(0) = 5$.
* **Auxiliary Equation**: $m^2 - m - 6 = 0 \implies (m - 3)(m + 2) = 0 \implies m_1 = 3, m_2 = -2$.
* **General Solution**: $y(x) = c_1 e^{3x} + c_2 e^{-2x}$.
* **Apply $y(0) = 5$**: $c_1 + c_2 = 5$.
* **Derivative**: $y'(x) = 3c_1 e^{3x} - 2c_2 e^{-2x} \implies y'(0) = 3c_1 - 2c_2 = 5$.
* **System**: Multiply first equation by 2: $2c_1 + 2c_2 = 10$. Add: $5c_1 = 15 \implies c_1 = 3 \implies c_2 = 2$.
* **Boxed Verified Answer**:
  $$\boxed{y(x) = 3e^{3x} + 2e^{-2x}}$$

### Problem 2 (Complex Conjugate Roots)
Solve: $y'' + 9y = 0, \quad y(0) = 2, \quad y'(0) = -6$.
* **Auxiliary Equation**: $m^2 + 9 = 0 \implies m^2 = -9 \implies m = \pm 3i$ ($\alpha = 0, \beta = 3$).
* **General Solution**: $y(x) = c_1 \cos(3x) + c_2 \sin(3x)$.
* **Apply $y(0) = 2$**: $c_1 \cos(0) + c_2 \sin(0) = 2 \implies c_1 = 2$.
* **Derivative**: $y'(x) = -3c_1 \sin(3x) + 3c_2 \cos(3x) \implies y'(0) = 3c_2 = -6 \implies c_2 = -2$.
* **Boxed Verified Answer**:
  $$\boxed{y(x) = 2\cos(3x) - 2\sin(3x)}$$
