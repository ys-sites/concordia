# Lesson 17: Difference Equations and Z-Transforms
### Professor Dave Explains Differential Equations Master Series · Lesson 17
> * **Direct Video Link**: [Difference Equations and Z-Transforms](https://www.youtube.com/watch?v=7eZ3p5RM89s&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=17)
> * **Target Exam Scope**: Advanced Engineering Scope · Discrete Systems
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that while differential equations govern smooth continuous time (analog physics), computers, digital sensors, and financial markets operate in discrete clock ticks: $n = 0, 1, 2, \dots$. The discrete equivalent of a differential equation is a Difference Equation (or recurrence relation). Just as the Laplace transform solves continuous ODEs by mapping $t \to s$, the Z-Transform solves difference equations by mapping discrete sequences $x[n] \to z$ using complex power series.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. The Unilateral Z-Transform

$$\mathcal{Z}\{x[n]\} = X(z) = \sum_{n=0}^\infty x[n] z^{-n}$$
where $z \in \mathbb{C}$ and $|z| > R$ defines the **Region of Convergence (ROC)**.


  | Sequence $x[n]$ ($n \ge 0$) | Z-Transform $X(z)$ | ROC 

  | $1$ (Unit step) | $\frac{z}{z - 1} = \frac{1}{1 - z^{-1}}$ | $|z| > 1$ 

  | $a^n$ (Geometric growth/decay) | $\frac{z}{z - a} = \frac{1}{1 - a z^{-1}}$ | $|z| > |a|$ 

  | $\delta[n]$ (Unit sample impulse) | $1$ | All $z$ 


### 2. Time-Delay Shifting Property

$$\mathcal{Z}\{x[n-1]\} = z^{-1} X(z) + x[-1], \quad \mathcal{Z}\{x[n+1]\} = z X(z) - z x[0]$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Engineering Problem: Solving a First-Order Digital Filter Difference Equation
**Problem Statement**:
> Solve the discrete difference equation $y[n] - 0.5 y[n-1] = (0.2)^n$ for $n \ge 0$, with initial rest condition $y[-1] = 0$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Apply Z-Transform to Both Sides**:
  $Y(z) - 0.5 z^{-1} Y(z) = \mathcal{Z}\{(0.2)^n\} = \frac{1}{1 - 0.2 z^{-1}}$.

* **Step 2: Factor and Isolate $Y(z)$**:
  $(1 - 0.5 z^{-1}) Y(z) = \frac{1}{1 - 0.2 z^{-1}} \implies Y(z) = \frac{1}{(1 - 0.5 z^{-1})(1 - 0.2 z^{-1})}$.

* **Step 3: Partial Fraction Expansion in $z^{-1}$**:
  $\frac{1}{(1 - 0.5 z^{-1})(1 - 0.2 z^{-1})} = \frac{A}{1 - 0.5 z^{-1}} + \frac{B}{1 - 0.2 z^{-1}}$. Using the Heaviside cover-up method: $A = \frac{1}{1 - 0.2(2)} = \frac{1}{1 - 0.4} = \frac{1}{0.6} = \frac{5}{3}$. $B = \frac{1}{1 - 0.5(5)} = \frac{1}{1 - 2.5} = -\frac{1}{1.5} = -\frac{2}{3}$.

* **Step 4: Assemble Decomposed Z-Domain Response**:
  $Y(z) = \frac{5/3}{1 - 0.5 z^{-1}} - \frac{2/3}{1 - 0.2 z^{-1}}$.

* **Step 5: Inverse Z-Transform Lookup**:
  Using $\mathcal{Z}^{-1}\{\frac{1}{1 - a z^{-1}}\} = a^n$: $y[n] = \frac{5}{3}(0.5)^n - \frac{2}{3}(0.2)^n$ for $n \ge 0$.

> [!WARNING]
> **Common Exam Pitfall**: Be careful when choosing between formulations in $z$ versus $z^{-1}$. In digital signal processing, rational functions are conventionally expanded in negative powers $z^{-1}$.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Difference Equations and Z-Transforms](https://www.youtube.com/watch?v=7eZ3p5RM89s&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=17)
- **Exam Takeaway**: The Z-Transform is the discrete-time twin of the Laplace transform: continuous poles in the left-half $s$-plane map inside the unit circle $|z| < 1$.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
