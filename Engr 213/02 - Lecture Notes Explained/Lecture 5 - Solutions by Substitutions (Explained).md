# ENGR 213: Applied Ordinary Differential Equations
# Lecture 5 Explained · Solutions by Substitutions
**Concordia University · Department of Building, Civil & Environmental Engineering (BCEE)**  
**Instructor**: Dr. A. Haghighat M. · **Lecture Date**: September 23, 2026  
**Textbook Reference**: Dennis G. Zill, *Advanced Engineering Mathematics* (7th Edition), Section 2.5

---

## Table of Contents
1. [Executive Summary & The Transformation Philosophy](#1-executive-summary--the-transformation-philosophy)
2. [Pattern Recognition & Diagnostic Framework](#2-pattern-recognition--diagnostic-framework)
   - [Example 1: Classification & Substitution Choice](#example-1-classification--substitution-choice)
3. [Method 1: Homogeneous Equations](#3-method-1-homogeneous-equations)
   - [Definition of Homogeneous Functions](#definition-of-homogeneous-functions)
   - [Differential Form Homogeneity Criterion](#differential-form-homogeneity-criterion)
   - [The Algebraic Transformations: $y = ux$ vs. $x = vy$](#the-algebraic-transformations-y--ux-vs-x--vy)
   - [Example 2: Complete Derivation of $(x^2 + y^2)dx + (x^2 - xy)dy = 0$](#example-2-complete-derivation)
4. [Method 2: Bernoulli's Differential Equation](#4-method-2-bernoullis-differential-equation)
   - [Standard Canonical Form](#standard-canonical-form)
   - [The Power-Shift Substitution: $u = y^{1-n}$](#the-power-shift-substitution-u--y1-n)
   - [Direct Formula for the Linear ODE in $u$](#direct-formula-for-the-linear-ode-in-u)
   - [Example 3: Complete Derivation of $x \frac{dy}{dx} + y = x^2 y^2$](#example-3-complete-derivation)
5. [Method 3: Reduction to Separation of Variables](#5-method-3-reduction-to-separation-of-variables)
   - [The Linear Argument Form: $\frac{dy}{dx} = f(Ax + By + C)$](#the-linear-argument-form)
   - [The Substitution Rule: $u = Ax + By + C$](#the-substitution-rule)
   - [Example 4: Complete Derivation of $\frac{dy}{dx} = (-2x + y)^2 - 7$](#example-4-complete-derivation)
6. [Comprehensive Comparative Matrix & Exam Traps](#6-comprehensive-comparative-matrix--exam-traps)

---

## 1. Executive Summary & The Transformation Philosophy

In previous lectures, three core analytical techniques were developed for first-order ordinary differential equations:
1. **Separable Equations**: $\frac{dy}{dx} = g(x)h(y) \implies \frac{dy}{h(y)} = g(x)dx$
2. **Linear Equations**: $\frac{dy}{dx} + P(x)y = Q(x) \implies \mu(x) = e^{\int P(x)dx}$
3. **Exact Equations**: $M(x, y)dx + N(x, y)dy = 0$ with $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$

Many real-world engineering models do not immediately fit these three forms. However, a large family of non-linear equations can be transformed into **separable** or **linear** equations via a strategic change of variables (substitution).

```
   [ Non-Linear / Complex ODE ]
                │
                ▼
   [ Pattern Recognition: Choose Substitution u ]
                │
                ▼
   [ Transformed ODE: Separable or Linear in u ]
                │
                ▼
   [ Standard Analytical Integration ]
                │
                ▼
   [ Back-Substitution: Replace u with x & y ]
                │
                ▼
   [ Final Solution in Original Variables ]
```

> [!IMPORTANT]
> **The Core Rule**: The goal of substitution is never to create an entirely new calculus method; it is strictly an algebraic bridge that converts an intractable non-linear problem into an elementary separable or linear ODE that we already know how to solve.

---

## 2. Pattern Recognition & Diagnostic Framework

Before computing derivatives, an engineer must instantly recognize which substitution applies by inspecting the mathematical structure of the equation.

### The Introductory Prototype (Lecture 5 Slide 4)
Consider the differential equation:
$$\frac{dy}{dx} = 1 + \frac{y}{x} + \left(\frac{y}{x}\right)^2$$
* This equation is **not linear** (due to $(y/x)^2$).
* It is **not separable** in $x$ and $y$ as written.
* However, the variable combinations appear exclusively as the ratio $\frac{y}{x}$.
* By substituting $u = \frac{y}{x} \iff y = ux$, direct differentiation gives $\frac{dy}{dx} = u + x \frac{du}{dx}$.
* Substituting this into the ODE collapses it into a clean separable equation:
  $$u + x \frac{du}{dx} = 1 + u + u^2 \implies x \frac{du}{dx} = 1 + u^2 \implies \frac{du}{1 + u^2} = \frac{dx}{x}$$
  $$\arctan(u) = \ln|x| + C \implies u = \tan(\ln|x| + C) \implies \mathbf{y(x) = x \tan(\ln|x| + C)}$$

---

### Example 1: Classification & Substitution Choice (Lecture 5 Slide 7)

Determine the appropriate substitution type and change of variable for each given ODE:

#### (a) $\frac{dy}{dx} = (x + y)^2$
* **Pattern**: The right-hand side is a function of the linear combination $Ax + By + C$ with $A = 1, B = 1, C = 0$.
* **Classification**: **Reduction to Separation of Variables**.
* **Substitution**: Let $u = x + y \implies \frac{du}{dx} = 1 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} - 1$.
* **Transformed ODE**: $\frac{du}{dx} - 1 = u^2 \implies \frac{du}{dx} = u^2 + 1$ (Separable).
* **Integration**: $\frac{du}{u^2 + 1} = dx \implies \arctan(u) = x + C \implies u = \tan(x + C)$.
* **Back-Substitution**: $x + y = \tan(x + C) \implies \mathbf{y(x) = \tan(x + C) - x}$.

#### (b) $\frac{dy}{dx} = 2 + e^{2x - y + 1}$
* **Pattern**: The exponent contains the linear form $Ax + By + C$ with $A = 2, B = -1, C = 1$.
* **Classification**: **Reduction to Separation of Variables**.
* **Substitution**: Let $u = 2x - y + 1 \implies \frac{du}{dx} = 2 - \frac{dy}{dx} \implies \frac{dy}{dx} = 2 - \frac{du}{dx}$.
* **Transformed ODE**: $2 - \frac{du}{dx} = 2 + e^u \implies \frac{du}{dx} = -e^u$ (Separable).
* **Integration**: $e^{-u} du = -dx \implies -e^{-u} = -x + c_1 \implies e^{-u} = x + c$.
* **Back-Substitution**: $-u = \ln|x + c| \implies 2x - y + 1 = -\ln|x + c| \implies \mathbf{y(x) = 2x + 1 + \ln|x + c|}$.

#### (c) $\frac{dy}{dx} + 2y = x y^3$
* **Pattern**: Matches the canonical Bernoulli form $\frac{dy}{dx} + P(x)y = f(x)y^n$ with $P(x) = 2, f(x) = x, n = 3$.
* **Classification**: **Bernoulli's Differential Equation**.
* **Substitution**: Let $u = y^{1-n} = y^{1-3} = y^{-2} = \frac{1}{y^2}$.
* **Transformed ODE**: $\frac{du}{dx} + (1 - n)P(x)u = (1 - n)f(x) \implies \frac{du}{dx} - 4u = -2x$ (Linear in $u$).

#### (d) $\frac{dy}{dx} = y(x + \ln y)$
* **Pattern**: Rewrite as $\frac{1}{y}\frac{dy}{dx} - \ln y = x$.
* **Classification**: **Logarithmic Substitution (Special Linear Form)**.
* **Substitution**: Let $v = \ln y \implies \frac{dv}{dx} = \frac{1}{y}\frac{dy}{dx}$.
* **Transformed ODE**: $\frac{dv}{dx} - v = x$ (Standard 1st-order linear ODE with $\mu(x) = e^{-x}$).

---

## 3. Method 1: Homogeneous Equations

### Definition of Homogeneous Functions
A function $f(x, y)$ is said to be **homogeneous of degree $\alpha$** if scaling both independent inputs by a parameter $t$ satisfies:
$$f(tx, ty) = t^\alpha f(x, y) \quad \text{for all real } t > 0$$

#### Verification Tests:
* $f(x, y) = x^3 + y^3 \implies f(tx, ty) = (tx)^3 + (ty)^3 = t^3(x^3 + y^3) = t^3 f(x, y)$ $\implies$ **Homogeneous of degree 3**.
* $f(x, y) = x^2 + 5xy \implies f(tx, ty) = t^2 x^2 + 5(tx)(ty) = t^2(x^2 + 5xy) = t^2 f(x, y)$ $\implies$ **Homogeneous of degree 2**.
* $f(x, y) = x^2 + y \implies f(tx, ty) = t^2 x^2 + ty \neq t^\alpha f(x, y)$ $\implies$ **NOT Homogeneous**.

### Differential Form Homogeneity Criterion
A first-order differential equation expressed in differential form:
$$M(x, y) dx + N(x, y) dy = 0$$
is **homogeneous** if both coefficient functions $M(x, y)$ and $N(x, y)$ are homogeneous functions of the **exact same degree $\alpha$**.

Equivalently, writing in derivative form:
$$\frac{dy}{dx} = -\frac{M(x, y)}{N(x, y)} = f\left(\frac{y}{x}\right)$$
The right-hand side can be expressed purely as a function of the single combined variable $\frac{y}{x}$.

---

### The Algebraic Transformations: $y = ux$ vs. $x = vy$

Either substitution will reduce any homogeneous equation to a separable equation:

| Criterion | Primary Substitution: $y = ux$ | Alternative Substitution: $x = vy$ |
| :--- | :--- | :--- |
| **When to Choose** | When $N(x, y)$ is simpler than $M(x, y)$ | When $M(x, y)$ is simpler than $N(x, y)$ |
| **Differential Relation** | $dy = u \, dx + x \, du$ | $dx = v \, dy + y \, dv$ |
| **Variable Reduced** | Replaces $y$ and $dy$ throughout | Replaces $x$ and $dx$ throughout |
| **Resulting ODE Form** | Separable in $u$ and $x$ | Separable in $v$ and $y$ |

---

### Example 2: Complete Derivation (Lecture 5 Slide 9)

#### Problem Statement
Solve the first-order differential equation:
$$(x^2 + y^2) dx + (x^2 - xy) dy = 0$$

#### Step-by-Step Solution

##### Step 1: Test for Homogeneity
Identify $M(x, y)$ and $N(x, y)$:
$$M(x, y) = x^2 + y^2 \implies M(tx, ty) = t^2(x^2 + y^2) = t^2 M(x, y) \quad (\alpha = 2)$$
$$N(x, y) = x^2 - xy \implies N(tx, ty) = (tx)^2 - (tx)(ty) = t^2(x^2 - xy) = t^2 N(x, y) \quad (\alpha = 2)$$
Both $M$ and $N$ are homogeneous of degree 2. The equation is **homogeneous**.

##### Step 2: Choose the Optimal Substitution
Comparing $M$ and $N$:
* $M(x, y) = x^2 + y^2$ (a sum of two squares)
* $N(x, y) = x^2 - xy = x(x - y)$ (factors easily)
Since $N(x, y)$ factors into a single term times $(x - y)$, substituting for $dy$ via $y = ux$ will cancel cleanly.
Let:
$$y = ux \implies dy = u \, dx + x \, du$$

##### Step 3: Substitute into the Differential Equation
$$(x^2 + (ux)^2) dx + (x^2 - x(ux))(u \, dx + x \, du) = 0$$
Factor out $x^2$:
$$x^2(1 + u^2) dx + x^2(1 - u)(u \, dx + x \, du) = 0$$
Assuming $x \neq 0$, divide both sides by $x^2$:
$$(1 + u^2) dx + (1 - u)(u \, dx + x \, du) = 0$$
Expand the second term:
$$(1 + u^2) dx + (u - u^2) dx + x(1 - u) du = 0$$
Combine the $dx$ terms:
$$[(1 + u^2) + (u - u^2)] dx + x(1 - u) du = 0$$
$$(1 + u) dx + x(1 - u) du = 0$$

##### Step 4: Separate the Variables
Rearrange terms to separate $x$ and $u$:
$$x(1 - u) du = -(1 + u) dx$$
Divide by $x(1 + u)$ (for $x \neq 0, u \neq -1$):
$$\frac{1 - u}{1 + u} du = -\frac{1}{x} dx \implies \frac{dx}{x} + \frac{u - 1}{u + 1} du = 0$$

##### Step 5: Perform Polynomial Division on the $u$-Fraction
$$\frac{u - 1}{u + 1} = \frac{(u + 1) - 2}{u + 1} = 1 - \frac{2}{u + 1}$$
Substitute back into the separated equation:
$$\frac{dx}{x} + \left(1 - \frac{2}{u + 1}\right) du = 0$$

##### Step 6: Integrate Both Sides
$$\int \frac{dx}{x} + \int \left(1 - \frac{2}{u + 1}\right) du = C_1$$
$$\ln|x| + u - 2\ln|u + 1| = C_1$$
Combine logarithms using log rules:
$$\ln\left|\frac{x}{(u + 1)^2}\right| + u = C_1$$
$$\ln\left|\frac{x}{(u + 1)^2}\right| = -u + C_1$$
Exponentiate both sides:
$$\left|\frac{x}{(u + 1)^2}\right| = e^{C_1} e^{-u} \implies \frac{(u + 1)^2}{|x|} = C_2 e^u \implies (u + 1)^2 = C x e^u$$

##### Step 7: Back-Substitute $u = \frac{y}{x}$
$$\left(\frac{y}{x} + 1\right)^2 = C x e^{y/x}$$
$$\left(\frac{x + y}{x}\right)^2 = C x e^{y/x} \implies \frac{(x + y)^2}{x^2} = C x e^{y/x}$$
Multiply both sides by $x^2$:
$$\mathbf{(x + y)^2 = c x^3 e^{y/x}}$$

##### Step 8: Check for Singular / Lost Solutions
During separation, we divided by $(u + 1) = 0 \implies u = -1 \implies y = -x$.
Check $y = -x$ in original ODE:
$$(x^2 + (-x)^2) dx + (x^2 - x(-x))(-dx) = (2x^2)dx + (2x^2)(-dx) = 0 \equiv 0$$
$y = -x$ is indeed a valid solution! In the final implicit relation, setting $(x + (-x))^2 = 0$ requires $c = 0$. Thus, $y = -x$ is included when $c = 0$.

---

## 4. Method 2: Bernoulli's Differential Equation

### Standard Canonical Form
A first-order non-linear differential equation of the form:
$$\frac{dy}{dx} + P(x) y = f(x) y^n$$
where $n \in \mathbb{R}$, is called **Bernoulli's Equation**.

#### Inspection of Cases:
* **If $n = 0$**: $\frac{dy}{dx} + P(x)y = f(x)$ $\implies$ **Linear 1st-Order ODE** (solved via $\mu(x) = e^{\int P dx}$).
* **If $n = 1$**: $\frac{dy}{dx} + [P(x) - f(x)]y = 0$ $\implies$ **Separable 1st-Order ODE**.
* **If $n \neq 0$ and $n \neq 1$**: The equation is **strictly non-linear**.

---

### The Power-Shift Substitution: $u = y^{1-n}$

#### The Derivation of the Linearization:
1. Divide the entire Bernoulli equation by $y^n$:
   $$y^{-n} \frac{dy}{dx} + P(x) y^{1-n} = f(x)$$
2. Define the new dependent variable:
   $$u = y^{1-n}$$
3. Differentiate $u$ with respect to $x$ using the chain rule:
   $$\frac{du}{dx} = (1 - n) y^{-n} \frac{dy}{dx} \implies y^{-n} \frac{dy}{dx} = \frac{1}{1 - n} \frac{du}{dx}$$
4. Substitute into the equation:
   $$\frac{1}{1 - n} \frac{du}{dx} + P(x) u = f(x)$$
5. Multiply through by $(1 - n)$:

$$\mathbf{\frac{du}{dx} + (1 - n)P(x) u = (1 - n)f(x)}$$

> [!TIP]
> **Exam Golden Formula**: Memorize this single line! It transforms *any* Bernoulli equation into a standard first-order linear ODE in one step without repeating the intermediate chain-rule algebra.

---

### Example 3: Complete Derivation (Lecture 5 Slide 11)

#### Problem Statement
Solve the differential equation:
$$x \frac{dy}{dx} + y = x^2 y^2$$

#### Step-by-Step Solution

##### Step 1: Put in Canonical Bernoulli Form
Divide through by the leading coefficient $x$ (for $x \neq 0$):
$$\frac{dy}{dx} + \frac{1}{x} y = x y^2$$
Identify the key components:
$$P(x) = \frac{1}{x}, \quad f(x) = x, \quad n = 2$$
Since $n = 2 \neq 0, 1$, this is a non-linear Bernoulli equation.

##### Step 2: Define the Substitution
$$u = y^{1-n} = y^{1-2} = y^{-1} = \frac{1}{y}$$

##### Step 3: Transform into a Linear ODE
Using $(1 - n) = 1 - 2 = -1$:
$$\frac{du}{dx} + (-1) P(x) u = (-1) f(x)$$
$$\frac{du}{dx} - \frac{1}{x} u = -x$$
This is a standard first-order linear ODE in the variable $u(x)$!

##### Step 4: Compute the Integrating Factor $\mu(x)$
$$P_u(x) = -\frac{1}{x}$$
$$\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln|x|} = e^{\ln(|x|^{-1})} = \frac{1}{|x|} \implies \mathbf{\mu(x) = \frac{1}{x}} \quad (\text{for } x > 0)$$

##### Step 5: Multiply and Integrate
Multiply the linear ODE by $\frac{1}{x}$:
$$\frac{1}{x} \frac{du}{dx} - \frac{1}{x^2} u = -1$$
Recognize the product rule on the LHS:
$$\frac{d}{dx}\left[\frac{1}{x} u\right] = -1$$
Integrate both sides with respect to $x$:
$$\frac{1}{x} u = \int -1 \, dx = -x + C$$
Multiply by $x$ to isolate $u(x)$:
$$u(x) = x(-x + C) = C x - x^2$$

##### Step 6: Back-Substitute $u = \frac{1}{y}$
$$\frac{1}{y} = C x - x^2$$
Take the reciprocal to find $y(x)$:
$$\mathbf{y(x) = \frac{1}{C x - x^2} = \frac{1}{x(C - x)}}$$

##### Step 7: The Trivial Solution
Notice that $y(x) \equiv 0$ satisfies the original equation: $x(0) + 0 = x^2(0)^2 \implies 0 = 0$.
Because $y = 0$ would cause division by zero in $u = 1/y$, it cannot be obtained from the general family for any finite constant $C$.
$$\text{Complete Solution: } \mathbf{y(x) = \frac{1}{C x - x^2}} \quad \text{and the singular solution } \mathbf{y(x) \equiv 0}$$

---

## 5. Method 3: Reduction to Separation of Variables

### The Linear Argument Form
Differential equations where the derivative depends strictly on a linear combination of $x$ and $y$:
$$\frac{dy}{dx} = f(Ax + By + C) \quad (B \neq 0)$$
can **always** be transformed into an elementary separable equation.

### The Substitution Rule
1. Define the substitute variable as the entire linear argument:
   $$u = Ax + By + C$$
2. Differentiate implicitly with respect to $x$:
   $$\frac{du}{dx} = A + B \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{B}\left(\frac{du}{dx} - A\right)$$
3. Substitute into the original equation:
   $$\frac{1}{B}\left(\frac{du}{dx} - A\right) = f(u)$$
4. Isolate $\frac{du}{dx}$:
   $$\frac{du}{dx} - A = B f(u) \implies \mathbf{\frac{du}{dx} = A + B f(u)}$$
5. The resulting equation is completely **separable**:
   $$\mathbf{\frac{du}{A + B f(u)} = dx}$$

---

### Example 4: Complete Derivation (Lecture 5 Slide 12)

#### Problem Statement
Solve the differential equation:
$$\frac{dy}{dx} = (-2x + y)^2 - 7$$

#### Step-by-Step Solution

##### Step 1: Identify the Linear Combination
The right-hand side is a function of $(-2x + y)$, which matches $Ax + By + C$ with:
$$A = -2, \quad B = 1, \quad C = 0$$

##### Step 2: Define the Substitution
Let:
$$u = -2x + y$$
Differentiate with respect to $x$:
$$\frac{du}{dx} = -2 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} + 2$$

##### Step 3: Substitute and Separate Variables
Substitute $\frac{dy}{dx} = \frac{du}{dx} + 2$ and $(-2x + y) = u$ into the ODE:
$$\frac{du}{dx} + 2 = u^2 - 7$$
Subtract 2 from both sides:
$$\frac{du}{dx} = u^2 - 9$$
This is a clean autonomous separable ODE!

##### Step 4: Constant Solutions Pre-Check
Before dividing by $u^2 - 9$, find where it equals zero:
$$u^2 - 9 = 0 \implies (u - 3)(u + 3) = 0 \implies u = 3 \quad \text{and} \quad u = -3$$
Since $u = -2x + y$:
* $u = 3 \implies -2x + y = 3 \implies \mathbf{y = 2x + 3}$
* $u = -3 \implies -2x + y = -3 \implies \mathbf{y = 2x - 3}$
Both are valid straight-line solutions to the ODE!

##### Step 5: Separate Variables & Partial Fractions
For $u \neq \pm 3$:
$$\frac{du}{u^2 - 9} = dx \implies \frac{du}{(u - 3)(u + 3)} = dx$$
Using partial fraction decomposition:
$$\frac{1}{(u - 3)(u + 3)} = \frac{A}{u - 3} + \frac{B}{u + 3} \implies 1 = A(u + 3) + B(u - 3)$$
* For $u = 3$: $1 = 6A \implies A = \frac{1}{6}$
* For $u = -3$: $1 = -6B \implies B = -\frac{1}{6}$
$$\frac{1}{6}\left(\frac{1}{u - 3} - \frac{1}{u + 3}\right) du = dx$$

##### Step 6: Integrate Both Sides
$$\frac{1}{6}\int \left(\frac{1}{u - 3} - \frac{1}{u + 3}\right) du = \int dx$$
$$\frac{1}{6}\left(\ln|u - 3| - \ln|u + 3|\right) = x + C_1$$
Multiply by 6 and combine logarithms:
$$\ln\left|\frac{u - 3}{u + 3}\right| = 6x + 6C_1$$
Exponentiate:
$$\left|\frac{u - 3}{u + 3}\right| = e^{6C_1} e^{6x} \implies \frac{u - 3}{u + 3} = c e^{6x} \quad (c = \pm e^{6C_1} \neq 0)$$

##### Step 7: Solve Explicitly for $u(x)$
$$u - 3 = c e^{6x}(u + 3) = c e^{6x} u + 3c e^{6x}$$
$$u - c e^{6x} u = 3 + 3c e^{6x}$$
$$u(1 - c e^{6x}) = 3(1 + c e^{6x})$$
$$u(x) = \frac{3(1 + c e^{6x})}{1 - c e^{6x}}$$

##### Step 8: Back-Substitute $u = -2x + y$
$$-2x + y = \frac{3(1 + c e^{6x})}{1 - c e^{6x}}$$
$$\mathbf{y(x) = 2x + \frac{3(1 + c e^{6x})}{1 - c e^{6x}}}$$

##### Step 9: Verify Equilibrium Inclusion
* Setting $c = 0 \implies y = 2x + \frac{3(1)}{1} = 2x + 3$ (Included in the family!).
* Setting $u = -3 \implies \frac{3(1 + c e^{6x})}{1 - c e^{6x}} = -3 \implies 1 + c e^{6x} = -1 + c e^{6x} \implies 1 = -1$ (Impossible for finite $c$).
* Therefore, $\mathbf{y = 2x - 3}$ is a **singular (lost) solution**.

---

## 6. Comprehensive Comparative Matrix & Exam Traps

### 📋 Rapid Method Comparison Table

| Feature | Homogeneous Equations | Bernoulli's Equations | Reduction to Separable |
| :--- | :--- | :--- | :--- |
| **Standard Form** | $M(x,y)dx + N(x,y)dy = 0$ with $M, N$ deg $\alpha$ | $\frac{dy}{dx} + P(x)y = f(x)y^n$ | $\frac{dy}{dx} = f(Ax + By + C)$ |
| **Substitution** | $y = ux \implies dy = u dx + x du$ | $u = y^{1-n}$ | $u = Ax + By + C$ |
| **Derivative Relation** | $\frac{dy}{dx} = u + x \frac{du}{dx}$ | $\frac{du}{dx} = (1-n)y^{-n}\frac{dy}{dx}$ | $\frac{du}{dx} = A + B \frac{dy}{dx}$ |
| **Transformed Form** | **Separable** in $u$ and $x$ | **Linear** in $u(x)$ | **Separable** in $u$ and $x$ |
| **Key Algebraic Step** | Factor out $x^\alpha$ and cancel | Divide standard form by $y^n$ | Isolate $\frac{du}{dx} = A + B f(u)$ |

---

### ⚠️ Top 5 Concordia Traps for Lecture 5 on Quizzes and Midterms

1. **Forgetting to Standardize Bernoulli Before Identifying $P(x)$**:
   * Given $x y' + y = x^2 y^2$, do NOT say $P(x) = 1$! You MUST divide by $x$ first: $y' + \frac{1}{x}y = x y^2 \implies P(x) = \frac{1}{x}$.
2. **The Product Rule in $y = ux$**:
   * Never write $dy = u \, dx$. You must apply the product rule: $dy = u \, dx + x \, du$.
3. **The Constant $C$ in Bernoulli General Solutions**:
   * When solving the linear equation for $u$, remember: $u(x) = \frac{1}{\mu(x)}\int \mu Q dx + \frac{C}{\mu(x)}$. You must add $C$ *before* dividing by $\mu(x)$, and back-substitute $y = u^{1/(1-n)}$ to the entire expression!
4. **Neglecting Trivial and Singular Solutions**:
   * For Bernoulli with $n > 0$, $y(x) \equiv 0$ is always a solution that is divided out during substitution.
   * For linear arguments, $u^2 - a^2 = 0 \implies u = -a$ produces a straight-line singular solution (e.g. $y = 2x - 3$).
5. **Sign Errors in $\frac{du}{dx} = A + B \frac{dy}{dx}$**:
   * If $u = 2x - y + 1$, then $\frac{du}{dx} = 2 - \frac{dy}{dx} \implies \frac{dy}{dx} = 2 - \frac{du}{dx}$. Missing the minus sign reverses the entire integral!
