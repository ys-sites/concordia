# Lesson 06: Solving Basic Differential Equations with Integration
### Professor Leonard Differential Equations Master Series · Lesson 6
> * **Direct Video Link**: [Lesson 06: Solving Basic Differential Equations with Integration](https://www.youtube.com/watch?v=_4Bq6I68Yn4) · Duration: `39:21`
> * **Target Exam Scope**: 🎯 MIDTERM EXAM (Ch 1.2 — Direct Quadrature & Constant Management)
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213)

---

## 1. Whiteboard Lecture Intuition & Philosophical Framing
In this 39-minute lecture, Professor Leonard dives into the simplest class of differential equations: direct quadrature equations of the form $dy/dx = f(x)$. While conceptually straightforward, this lecture highlights the absolute necessity of rigorous integration constant management, tracking signs, and handling transcendental and rational antiderivatives.

---

## 2. Core Theoretical Concepts & Mathematical Formulations
### Direct Quadrature Form: $dy/dx = f(x)$
When the derivative depends strictly on the independent variable $x$ and contains no dependent variable $y$:
$$\frac{dy}{dx} = f(x) \implies dy = f(x) dx \implies y(x) = \int f(x) dx + C$$

### The 3 Crucial Rules of Direct Quadrature:
1. **Never Drop $+C$**: The integration constant is part of the antiderivative, not an add-on.
2. **Review Fundamental Integration Techniques**:
   - $u$-substitution: $\int g(u) u'(x) dx$.
   - Integration by parts: $\int u dv = u v - \int v du$.
   - Partial fractions: Decomposing rational functions $P(x)/Q(x)$.
   - Trigonometric substitutions and trigonometric identities.
3. **Repeated Quadrature for Higher-Order Equations**:
   - $y'' = f(x) \implies y'(x) = \int f(x) dx + C_1 \implies y(x) = \int y'(x) dx + C_2$.
   - Each integration produces an additional independent constant.

---

## 3. Classroom Chalkboard Examples (Solved in Complete Baby Steps)

### Problem 06.1: Chalkboard Problem 6.1: Direct Quadrature with Integration by Parts
**Problem Statement**:
> Solve the initial value problem: $\frac{dy}{dx} = x e^{-2x}$, subject to $y(0) = 1$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Separate Differentials and Set Up the Indefinite Integral**:
  $$dy = x e^{-2x} dx \implies y(x) = \int x e^{-2x} dx$$

* **Step 2: Apply Integration by Parts (IBP)**:
  Let $u = x \implies du = dx$
  Let $dv = e^{-2x} dx \implies v = -\frac{1}{2} e^{-2x}$
  $$\int u dv = u v - \int v du$$
  $$y(x) = x\left(-\frac{1}{2} e^{-2x}\right) - \int \left(-\frac{1}{2} e^{-2x}\right) dx$$
  $$y(x) = -\frac{1}{2} x e^{-2x} + \frac{1}{2} \int e^{-2x} dx$$
  $$y(x) = -\frac{1}{2} x e^{-2x} - \frac{1}{4} e^{-2x} + C$$

* **Step 3: Apply the Initial Condition $y(0) = 1$ to Determine $C$**:
  $$1 = -\frac{1}{2}(0) e^{0} - \frac{1}{4} e^{0} + C$$
  $$1 = 0 - \frac{1}{4}(1) + C \implies 1 = -\frac{1}{4} + C \implies C = \frac{5}{4}$$

* **Step 4: State the Particular Solution**:
  $$y(x) = -\frac{1}{2} x e^{-2x} - \frac{1}{4} e^{-2x} + \frac{5}{4} = -\frac{1}{4} e^{-2x}(2x + 1) + \frac{5}{4}$$

* **Step 5: Differentiate to Verify**:
  $$y'(x) = -\frac{1}{4}\left[-2 e^{-2x}(2x + 1) + e^{-2x}(2)\right] = -\frac{1}{4} e^{-2x}\left[-4x - 2 + 2\right] = -\frac{1}{4} e^{-2x}(-4x) = x e^{-2x} \quad \checkmark$$
  $$y(0) = -\frac{1}{4}(1)(1) + \frac{5}{4} = \frac{4}{4} = 1 \quad \checkmark$$

> [!WARNING]
> **Common Exam Pitfall**: Sign errors during integration by parts. Tracking the double negative $-\int v du = -\int (-1/2 e^{-2x})dx = +1/2 \int e^{-2x} dx$ is the most frequent student stumbling block.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- Watch the full whiteboard demonstration on YouTube: [Lesson 06: Solving Basic Differential Equations with Integration](https://www.youtube.com/watch?v=_4Bq6I68Yn4)
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
