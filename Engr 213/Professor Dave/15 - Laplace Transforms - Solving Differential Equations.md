# Lesson 15: Laplace Transforms - Solving Differential Equations
### Professor Dave Explains Differential Equations Master Series · Lesson 15
> * **Direct Video Link**: [Laplace Transforms Part 1: Solving Differential Equations](https://www.youtube.com/watch?v=rrlBRs_etts&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=15)
> * **Target Exam Scope**: Final Exam Scope · Chapter 4.1, 4.2, 4.3
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave describes the Laplace Transform as a magical time-machine for calculus. Differentiating and integrating functions in the time domain $t$ is notoriously tedious. The Laplace transform acts as a mathematical lens that maps functions into the complex frequency domain $s$, where differentiation transforms into simple algebraic multiplication by $s$! We solve the problem using basic high-school algebra, and then use inverse transform lookup tables to snap back into the time domain.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Definition & Elementary Transforms

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt \quad (s > 0)$$

  | Time Domain $f(t)$ | Laplace Domain $F(s)$ 

  | $1$ | $\frac{1}{s}$ 

  | $t^n$ ($n \in \mathbb{Z}^+$) | $\frac{n!}{s^{n+1}}$ 

  | $e^{a t}$ | $\frac{1}{s - a}$ 

  | $\sin(k t)$ | $\frac{k}{s^2 + k^2}$ 

  | $\cos(k t)$ | $\frac{s}{s^2 + k^2}$ 

  | $e^{a t} f(t)$ (First Shift Theorem) | $F(s - a)$ 


### 2. Transform of Derivatives

$$\mathcal{L}\{y'\} = s Y(s) - y(0), \quad \mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0)$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia Final Exam Problem: Solving a Second-Order IVP via Laplace
**Problem Statement**:
> Solve $y'' - 4y' + 4y = 6e^{2t}$ with $y(0) = 1, y'(0) = 0$ using Laplace transforms.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Apply Laplace Transform to Both Sides**:
  $\mathcal{L}\{y''\} - 4\mathcal{L}\{y'\} + 4\mathcal{L}\{y\} = 6\mathcal{L}\{e^{2t}\}$. $[s^2 Y(s) - s(1) - 0] - 4[s Y(s) - 1] + 4Y(s) = \frac{6}{s-2}$.

* **Step 2: Collect Algebraic Terms in $Y(s)$**:
  $(s^2 - 4s + 4)Y(s) - s + 4 = \frac{6}{s-2} \implies (s-2)^2 Y(s) = s - 4 + \frac{6}{s-2}$.

* **Step 3: Combine and Isolate $Y(s)$**:
  $(s-2)^2 Y(s) = \frac{(s-4)(s-2) + 6}{s-2} = \frac{s^2 - 6s + 8 + 6}{s-2} = \frac{s^2 - 6s + 14}{s-2}$. Therefore: $Y(s) = \frac{s^2 - 6s + 14}{(s-2)^3}$.

* **Step 4: Shift Algebra to $u = s - 2$**:
  Let $s = (s - 2) + 2$: $s^2 - 6s + 14 = [(s-2)+2]^2 - 6[(s-2)+2] + 14 = (s-2)^2 + 4(s-2) + 4 - 6(s-2) - 12 + 14 = (s-2)^2 - 2(s-2) + 6$. Therefore: $Y(s) = \frac{(s-2)^2 - 2(s-2) + 6}{(s-2)^3} = \frac{1}{s-2} - \frac{2}{(s-2)^2} + \frac{6}{(s-2)^3}$.

* **Step 5: Apply Inverse Laplace Transform with First Shift Theorem**:
  Recall $\mathcal{L}^{-1}\{\frac{1}{s^3}\} = \frac{t^2}{2}$. By the shift theorem: $y(t) = e^{2t} - 2t e^{2t} + 6\left(\frac{t^2}{2}\right)e^{2t} = e^{2t}(1 - 2t + 3t^2)$.

> [!WARNING]
> **Common Exam Pitfall**: Always include initial conditions when transforming derivatives: $\mathcal{L}\{y''\} = s^2 Y(s) - s y(0) - y'(0)$. Forgetting the minus sign on $-4[-y(0)]$ causes a sign inversion error in $Y(s)$.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Laplace Transforms Part 1: Solving Differential Equations](https://www.youtube.com/watch?v=rrlBRs_etts&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=15)
- **Exam Takeaway**: Laplace transforms bake initial conditions directly into the algebraic setup, bypassing undetermined coefficients entirely.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
