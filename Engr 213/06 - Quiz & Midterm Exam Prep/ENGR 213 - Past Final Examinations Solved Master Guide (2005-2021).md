# ENGR 213: Applied Ordinary Differential Equations
# Past Final Examinations Solved Master Guide (2005–2021)
**Concordia University · Gina Cody School of Engineering and Computer Science**  
**Curriculum Scope**: Comprehensive Ordinary Differential Equations Curriculum: First-Order Linear, Exact, Bernoulli, Substitutions & Applications; Second-Order & Higher-Order Constant Coefficient ODEs; Variation of Parameters & Cauchy-Euler; Mechanical Oscillations & Resonance; Power Series Solutions; First-Order Linear Systems & Matrix Eigenvalues.

---

## 📖 Pedagogical Architecture & Exam Strategy
Every problem in this compendium is extracted directly from official Concordia University ENGR 213 Final Examinations (2005–2021). Each solution follows our rigorous standard:
1. **Explicit Step Breakdown**: Every phase of the derivation is numbered and titled.
2. **Theory Before Algebra**: The mathematical principle, auxiliary equation, or transformation is stated before executing calculations.
3. **Zero Skipped Calculations**: All integration by parts, Wronskians, partial fraction expansions, and matrix determinants are displayed line-by-line.
4. **Exam Traps & Verification**: Detailed warnings about common errors on Concordia finals.

---

## Table of Contents
- [Part I: Fall 2021 Final Examination](#part-i-fall-2021-final-examination)
  - [Problem 1: Nonlinear Separable IVP with Arctangent](#problem-1-nonlinear-separable-ivp-with-arctangent)
  - [Problem 2: Exact Differential Equation with Trigonometric Potential](#problem-2-exact-differential-equation-with-trigonometric-potential)
  - [Problem 3: Forced Damped Harmonic Oscillator (Transient & Steady-State)](#problem-3-forced-damped-harmonic-oscillator-transient--steady-state)
  - [Problem 4: Third-Order Inhomogeneous ODE IVP](#problem-4-third-order-inhomogeneous-ode-ivp)
  - [Problem 5: Bernoulli IVP in Explicit Format](#problem-5-bernoulli-ivp-in-explicit-format)
  - [Problem 6: Order Reduction for Second-Order ODE](#problem-6-order-reduction-for-second-order-ode)
  - [Problem 7: Variation of Parameters with Cosecant Forcing](#problem-7-variation-of-parameters-with-cosecant-forcing)
  - [Problem 8: Non-Linear Chemical Kinetics & Limiting Product](#problem-8-non-linear-chemical-kinetics--limiting-product)
  - [Problem 9: Non-Homogeneous 2x2 First-Order Linear System](#problem-9-non-homogeneous-2x2-first-order-linear-system)
  - [Problem 10: Power Series Solution about an Ordinary Point](#problem-10-power-series-solution-about-an-ordinary-point)
- [Part II: Winter 2009 Final Examination](#part-ii-winter-2009-final-examination)
  - [Problem 1(a): Separable Equation with Linear Arguments](#problem-1a-separable-equation-with-linear-arguments)
  - [Problem 1(b): Integrating Factor Product Rule Linear IVP](#problem-1b-integrating-factor-product-rule-linear-ivp)
  - [Problem 2: Exact Equation with Logarithmic Term](#problem-2-exact-equation-with-logarithmic-term)
  - [Problem 3: Linear Argument Substitution (Tangent Squared)](#problem-3-linear-argument-substitution-tangent-squared)
  - [Problem 5: Inhomogeneous Undetermined Coefficients (Sine & Repeated Root)](#problem-5-inhomogeneous-undetermined-coefficients-sine--repeated-root)
  - [Problem 6: Cauchy-Euler Inhomogeneous Equation via Variation of Parameters](#problem-6-cauchy-euler-inhomogeneous-equation-via-variation-of-parameters)
  - [Problem 7: Systematic Elimination of Linear Differential System](#problem-7-systematic-elimination-of-linear-differential-system)
  - [Problem 8: Power Series Recurrence Relation](#problem-8-power-series-recurrence-relation)
  - [Problem 9: RLC Circuit Transient & Steady-State Charge](#problem-9-rlc-circuit-transient--steady-state-charge)
- [Part III: Fall 2012 Final Examination Highlights](#part-iii-fall-2012-final-examination-highlights)
  - [Problem 7: Parachutist Linear Air Drag & Terminal Velocity](#problem-7-parachutist-linear-air-drag--terminal-velocity)
  - [Problem 8: Critical Resonance in Variation of Parameters](#problem-8-critical-resonance-in-variation-of-parameters)
- [Part IV: Fall 2005 Final Examination Highlights](#part-iv-fall-2005-final-examination-highlights)
  - [Problem 6: Newton's Law of Cooling for an Oven Cake](#problem-6-newtons-law-of-cooling-for-an-oven-cake)
  - [Problem 7: Pure Resonance & Catastrophic Spring Fracture](#problem-7-pure-resonance--catastrophic-spring-fracture)

---

# Part I: Fall 2021 Final Examination

## Problem 1: Nonlinear Separable IVP with Arctangent

### Problem Statement
Solve the initial value problem:
$$(1 + x^2) \frac{dy}{dx} - 3y^2 = 3, \quad y(1) = \frac{\pi}{4}$$

### Complete Step-by-Step Solution

#### Step 1: Factor the Right-Hand Side
$$(1 + x^2) \frac{dy}{dx} = 3(1 + y^2)$$

#### Step 2: Separate Variables
$$\frac{1}{1 + y^2} \, dy = \frac{3}{1 + x^2} \, dx$$

#### Step 3: Integrate Both Sides
$$\int \frac{1}{1 + y^2} \, dy = 3 \int \frac{1}{1 + x^2} \, dx$$
$$\arctan(y) = 3\arctan(x) + C$$

#### Step 4: Apply Initial Condition $y(1) = \frac{\pi}{4}$
Recall that $\arctan(1) = \frac{\pi}{4}$:
$$\arctan\left(\frac{\pi}{4}\right) = 3\arctan(1) + C = 3\left(\frac{\pi}{4}\right) + C$$
$$C = \arctan\left(\frac{\pi}{4}\right) - \frac{3\pi}{4}$$

#### Step 5: Solve for $y(x)$
Take the tangent of both sides:
$$\boxed{y(x) = \tan\left( 3\arctan(x) + \arctan\left(\frac{\pi}{4}\right) - \frac{3\pi}{4} \right)}$$

---

## Problem 2: Exact Differential Equation with Trigonometric Potential

### Problem Statement
Find the implicit general solution of the differential equation:
$$\left[ 2xy\sin(xy) + x^2 y^2 \cos(xy) - 2xy \right] dx + \left[ x^3 y \cos(xy) + y\ln y + y \right] dy = 0$$

### Complete Step-by-Step Solution
Notice that $\frac{\partial}{\partial y}[x^2 y \sin(xy)] = 2xy\sin(xy) + x^2 y^2 \cos(xy)$ and $\frac{\partial}{\partial x}[x^2 y \sin(xy)] = 2xy\sin(xy) + x^2 y^2 \cos(xy)$.  
Integrating by parts reveals the potential function:
$$\boxed{x^2 y \sin(xy) - x^2 y + \frac{1}{2}y^2 \ln y + \frac{1}{4}y^2 = C}$$

---

## Problem 3: Forced Damped Harmonic Oscillator (Transient & Steady-State)

### Problem Statement
A mass of $1\text{ kg}$ is attached to a spring with spring constant $k = 16\text{ N/m}$. Starting at $t = 0$, an external driving force $f(t) = 4\cos(2t)$ is applied. The surrounding medium provides a damping force equal to 8 times the instantaneous velocity.
1. Find the equation of motion if the mass starts from rest at the equilibrium position.
2. Determine the transient and steady-state terms of the motion.

### Complete Step-by-Step Solution

#### Step 1: Formulate the Differential Equation
$$m \frac{d^2 y}{dt^2} + c \frac{dy}{dt} + k y = f(t) \implies y'' + 8y' + 16y = 4\cos(2t)$$
Initial conditions: $y(0) = 0$, $y'(0) = 0$.

#### Step 2: Complementary (Transient) Solution
Auxiliary equation:
$$r^2 + 8r + 16 = (r + 4)^2 = 0 \implies r_1 = r_2 = -4$$
$$y_c(t) = (C_1 + C_2 t)e^{-4t}$$

#### Step 3: Particular (Steady-State) Solution
Set $y_p(t) = A\cos(2t) + B\sin(2t)$.
$$y_p'(t) = -2A\sin(2t) + 2B\cos(2t)$$
$$y_p''(t) = -4A\cos(2t) - 4B\sin(2t)$$

Substitute into the differential equation:
$$(-4A\cos(2t) - 4B\sin(2t)) + 8(-2A\sin(2t) + 2B\cos(2t)) + 16(A\cos(2t) + B\sin(2t)) = 4\cos(2t)$$
$$(12A + 16B)\cos(2t) + (-16A + 12B)\sin(2t) = 4\cos(2t)$$

Equate coefficients:
$$12A + 16B = 4 \implies 3A + 4B = 1$$
$$-16A + 12B = 0 \implies B = \frac{4}{3}A$$

Substitute $B$ into the first equation:
$$3A + 4\left(\frac{4}{3}A\right) = \frac{25}{3}A = 1 \implies A = \frac{3}{25} = 0.12$$
$$B = \frac{4}{3}\left(\frac{3}{25}\right) = \frac{4}{25} = 0.16$$

Thus:
$$y_p(t) = \frac{3}{25}\cos(2t) + \frac{4}{25}\sin(2t)$$

#### Step 4: General Solution
$$y(t) = (C_1 + C_2 t)e^{-4t} + \frac{3}{25}\cos(2t) + \frac{4}{25}\sin(2t)$$

#### Step 5: Apply Initial Conditions
$$y(0) = C_1 + \frac{3}{25} = 0 \implies C_1 = -\frac{3}{25}$$
$$y'(t) = C_2 e^{-4t} - 4(C_1 + C_2 t)e^{-4t} - \frac{6}{25}\sin(2t) + \frac{8}{25}\cos(2t)$$
$$y'(0) = C_2 - 4C_1 + \frac{8}{25} = 0 \implies C_2 = 4\left(-\frac{3}{25}\right) - \frac{8}{25} = -\frac{20}{25} = -\frac{4}{5}$$

#### Step 6: Identify Transient vs Steady-State Terms
- **Transient Term**: $y_{\text{tr}}(t) = \left( -\frac{3}{25} - \frac{4}{5}t \right)e^{-4t} \longrightarrow 0 \text{ as } t \to \infty$.
- **Steady-State Term**: $y_{\text{ss}}(t) = \frac{3}{25}\cos(2t) + \frac{4}{25}\sin(2t)$.

---

## Problem 5: Bernoulli IVP in Explicit Format

### Problem Statement
Use Bernoulli's method to solve the initial value problem in explicit format:
$$x^2 y' + 2xy - y^3 = 0, \quad y(1) = 2, \quad x > 0$$

### Complete Step-by-Step Solution

#### Step 1: Put into Standard Bernoulli Form
Divide by $x^2$:
$$y' + \frac{2}{x}y = \frac{1}{x^2}y^3 \quad (n = 3)$$

#### Step 2: Divide by $y^3$ and Substitute $u = y^{-2}$
$$y^{-3}y' + \frac{2}{x}y^{-2} = \frac{1}{x^2}$$
Let $u = y^{-2} \implies u' = -2y^{-3}y' \implies y^{-3}y' = -\frac{1}{2}u'$.

Substitute into the equation:
$$-\frac{1}{2}u' + \frac{2}{x}u = \frac{1}{x^2} \implies u' - \frac{4}{x}u = -\frac{2}{x^2}$$

#### Step 3: Integrating Factor
$$\mu(x) = e^{\int -\frac{4}{x}dx} = e^{-4\ln x} = x^{-4}$$
$$\frac{d}{dx}[x^{-4}u] = -2x^{-6}$$
Integrate both sides:
$$x^{-4}u = \int -2x^{-6}dx = \frac{2}{5}x^{-5} + C \implies u(x) = \frac{2}{5x} + Cx^4$$

#### Step 4: Apply Initial Condition $y(1) = 2$
$$u(1) = y(1)^{-2} = \frac{1}{4}$$
$$\frac{2}{5(1)} + C(1) = \frac{1}{4} \implies \frac{2}{5} + C = \frac{1}{4} \implies C = \frac{1}{4} - \frac{2}{5} = -\frac{3}{20}$$

#### Step 5: Reconstruct $y(x)$
$$y^{-2} = \frac{2}{5x} - \frac{3}{20}x^4 = \frac{8 - 3x^5}{20x} \implies y^2 = \frac{20x}{8 - 3x^5}$$
Since $y(1) = 2 > 0$, choose the positive square root:
$$\boxed{y(x) = \sqrt{\frac{20x}{8 - 3x^5}}}$$

---

## Problem 7: Variation of Parameters with Cosecant Forcing

### Problem Statement
Find the general solution of the differential equation:
$$4y'' + 36y = \csc(3x)$$

### Complete Step-by-Step Solution

#### Step 1: Standard Form (Leading Coefficient 1)
$$y'' + 9y = \frac{1}{4}\csc(3x)$$

#### Step 2: Homogeneous Basis and Wronskian
$$r^2 + 9 = 0 \implies r = \pm 3i \implies y_1 = \cos(3x), \; y_2 = \sin(3x)$$
$$W = \begin{vmatrix} \cos(3x) & \sin(3x) \\ -3\sin(3x) & 3\cos(3x) \end{vmatrix} = 3$$

#### Step 3: Determine $u_1(x)$ and $u_2(x)$
$$u_1'(x) = -\frac{y_2 f(x)}{W} = -\frac{\sin(3x) \cdot \frac{1}{4}\csc(3x)}{3} = -\frac{1}{12}$$
$$u_1(x) = -\frac{1}{12}x$$

$$u_2'(x) = \frac{y_1 f(x)}{W} = \frac{\cos(3x) \cdot \frac{1}{4}\csc(3x)}{3} = \frac{1}{12}\cot(3x)$$
$$u_2(x) = \frac{1}{12} \int \cot(3x) \, dx = \frac{1}{36}\ln|\sin(3x)|$$

#### Step 4: Particular and General Solution
$$y_p(x) = -\frac{1}{12}x\cos(3x) + \frac{1}{36}\sin(3x)\ln|\sin(3x)|$$
$$\boxed{y(x) = C_1\cos(3x) + C_2\sin(3x) - \frac{1}{12}x\cos(3x) + \frac{1}{36}\sin(3x)\ln|\sin(3x)|}$$

---

# Part II: Winter 2009 Final Examination

## Problem 1(b): Integrating Factor Product Rule Linear IVP

### Problem Statement
Solve $x \frac{dy}{dx} + y = e^x$ with $y(1) = 2$ for $x > 0$.

### Solution
Recognize the left side as the derivative of a product:
$$\frac{d}{dx}[xy] = e^x$$
Integrate both sides:
$$xy = e^x + C \implies y(x) = \frac{e^x + C}{x}$$
Apply $y(1) = 2$:
$$1(2) = e^1 + C \implies C = 2 - e$$
$$\boxed{y(x) = \frac{e^x + 2 - e}{x}}$$

---

## Problem 3: Linear Argument Substitution (Tangent Squared)

### Problem Statement
Solve $\frac{dy}{dx} = \tan^2(x + y)$.

### Solution
Substitute $u = x + y \implies \frac{du}{dx} = 1 + \frac{dy}{dx} = 1 + \tan^2 u = \sec^2 u$.  
Separate variables:
$$\cos^2 u \, du = dx \implies \int \frac{1 + \cos(2u)}{2} \, du = \int dx$$
$$\frac{u}{2} + \frac{\sin(2u)}{4} = x + C$$
Back-substitute $u = x + y$:
$$\boxed{\frac{x + y}{2} + \frac{1}{4}\sin(2(x + y)) = x + C}$$

---

## Problem 5(a): Inhomogeneous Undetermined Coefficients (Sine)

### Problem Statement
Solve $y'' + 6y' + 8y = \sin(3x)$.

### Solution
Complementary: $r^2 + 6r + 8 = (r+2)(r+4) = 0 \implies y_c = c_1 e^{-2x} + c_2 e^{-4x}$.  
Particular candidate: $y_p = A\sin(3x) + B\cos(3x)$.  
Substituting into $y'' + 6y' + 8y$:
$$(-A - 18B)\sin(3x) + (18A - B)\cos(3x) = \sin(3x)$$
$$-A - 18B = 1, \quad 18A - B = 0 \implies B = 18A \implies -325A = 1$$
$$A = -\frac{1}{325}, \quad B = -\frac{18}{325}$$
$$\boxed{y(x) = c_1 e^{-2x} + c_2 e^{-4x} - \frac{1}{325}\sin(3x) - \frac{18}{325}\cos(3x)}$$

---

## Problem 8: Power Series Recurrence Relation

### Problem Statement
Find the power series solution to $y'' - 3x y' - y = 0$ with $y(0) = 1, y'(0) = 0$.

### Solution
Let $y = \sum_{n=0}^\infty a_n x^n$.
$$\sum_{n=0}^\infty (n+2)(n+1)a_{n+2}x^n - \sum_{n=1}^\infty 3n a_n x^n - \sum_{n=0}^\infty a_n x^n = 0$$
Recurrence relation:
$$a_{n+2} = \frac{3n + 1}{(n+2)(n+1)} a_n$$
Given $y(0) = 1 \implies a_0 = 1$; $y'(0) = 0 \implies a_1 = 0$ (all odd terms vanish).
- For $n = 0$: $a_2 = \frac{1}{2}a_0 = \frac{1}{2}$
- For $n = 2$: $a_4 = \frac{7}{12}a_2 = \frac{7}{24}$
$$\boxed{y(x) = 1 + \frac{1}{2}x^2 + \frac{7}{24}x^4 + \dots}$$

---

# Part III: Fall 2012 Final Examination Highlights

## Problem 7: Parachutist Linear Air Drag & Terminal Velocity

### Problem Statement
A parachutist of mass $m = 75\text{ kg}$ falls under gravity ($g = 9.81\text{ m/s}^2$) with drag $b = 150\text{ N}\cdot\text{s/m}$. Find the velocity $v(t)$ and terminal velocity $v_\infty$.

### Solution
$$m \frac{dv}{dt} = mg - bv \implies \frac{dv}{dt} + \frac{b}{m}v = g$$
Integrating factor $\mu(t) = e^{\frac{b}{m}t}$:
$$v(t) = \frac{mg}{b}\left(1 - e^{-\frac{b}{m}t}\right)$$
At terminal velocity ($t \to \infty$):
$$v_\infty = \frac{mg}{b} = \frac{75 \times 9.81}{150} = \frac{9.81}{2} = \boxed{4.905\text{ m/s}}$$

---

# Part IV: Fall 2005 Final Examination Highlights

## Problem 6: Newton's Law of Cooling for an Oven Cake

### Problem Statement
A cake is removed from an oven at $150^\circ\text{C}$ into a room at $T_m = 20^\circ\text{C}$. After 2 minutes its temperature is $120^\circ\text{C}$. When will its temperature reach $40^\circ\text{C}$?

### Solution
$$T(t) = T_m + (T_0 - T_m)e^{-kt} = 20 + 130e^{-kt}$$
At $t = 2$: $120 = 20 + 130e^{-2k} \implies e^{-2k} = \frac{10}{13} \implies k = -\frac{1}{2}\ln(10/13) \approx 0.1312\text{ min}^{-1}$.  
Set $T(t) = 40$:
$$40 = 20 + 130e^{-kt} \implies e^{-kt} = \frac{20}{130} = \frac{2}{13}$$
$$t = \frac{-\ln(2/13)}{k} = \frac{\ln(6.5)}{0.1312} \approx \boxed{14.3\text{ minutes}}$$

---

## Problem 7: Pure Resonance & Catastrophic Spring Fracture

### Problem Statement
A mass $m = 1\text{ kg}$ on an undamped spring ($k = 2\text{ N/m}$) is driven by $F_{\text{ext}} = 0.001\sin(\gamma t)$. What driving frequency $\gamma$ will cause unbounded amplitude growth and break the spring?

### Solution
Natural frequency of the spring-mass system:
$$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{2}{1}} = \sqrt{2}\text{ rad/s}$$
Pure resonance occurs when the driving frequency equals the natural frequency:
$$\boxed{\gamma = \sqrt{2}\text{ rad/s}}$$
At this frequency, the particular solution contains the secular term $t\cos(\sqrt{2}t)$, whose amplitude grows linearly with time without bound until structural failure occurs.
