# Lesson 08: Linear Second-Order ODEs - Non-Homogeneous Case
### Professor Dave Explains Differential Equations Master Series · Lesson 8
> * **Direct Video Link**: [Linear Second-Order Differential Equations Part 2: Non-Homogeneous Differential Equations](https://www.youtube.com/watch?v=bojO7brQtE8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=8)
> * **Target Exam Scope**: Midterm 2 Scope · Chapter 3.4 & 3.5
> * **Course Context**: Applied Ordinary Differential Equations (ENGR 213) · Concordia University

---

## 1. Video Intuition & Pedagogical Framing
Professor Dave explains that non-homogeneous ODEs $a y'' + b y' + c y = g(x)$ represent physical systems subjected to external forces—like a suspension driven by road bumps, or a circuit driven by an AC voltage. By the Superposition Principle, the general solution is the sum of the system's natural free response $y_c(x)$ and its forced response $y_p(x)$: $y(x) = y_c(x) + y_p(x)$. We use Undetermined Coefficients for standard polynomial/exponential/sinusoidal drives, and Variation of Parameters for arbitrary functions like $	an x$ or $\sec x$.

---

## 2. Core Theoretical Framework & Rigorous Formulations
### 1. Undetermined Coefficients Guess Table & Resonance Rule


  | Driving Function $g(x)$ | Initial Trial Guess $y_p(x)$ 

  | $P_n(x) = a_n x^n + \dots + a_0$ | $A_n x^n + \dots + A_1 x + A_0$ 

  | $e^{k x}$ | $A e^{k x}$ 

  | $\cos(k x)$ or $\sin(k x)$ | $A \cos(k x) + B \sin(k x)$ 

  | $e^{\alpha x} \cos(\beta x)$ | $e^{\alpha x}\left(A \cos(\beta x) + B \sin(\beta x)\right)$ 


**The Multiplication (Resonance) Rule**: If any term in the trial guess duplicates a solution in $y_c(x)$, multiply the entire trial guess by $x$ (or $x^2$ for double roots) until all duplication disappears!

### 2. Variation of Parameters Formula

$$y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x), \quad u_1' = -\frac{y_2 g(x)}{W(y_1, y_2)}, \quad u_2' = \frac{y_1 g(x)}{W(y_1, y_2)}$$

---

## 3. Fully Solved Whiteboard Problems (Step-by-Step)
### Concordia Exam Classic: Resonance Modification and Coefficient Matching
**Problem Statement**:
> Find the general solution of $y'' - 3y' + 2y = 4e^{2x} + 2x$.

**Step-by-Step Whiteboard Solution**:
* **Step 1: Solve Homogeneous Equation**:
  $r^2 - 3r + 2 = 0 \implies (r-1)(r-2) = 0 \implies y_c(x) = c_1 e^x + c_2 e^{2x}$.

* **Step 2: Formulate Trial Guess with Resonance Check**:
  For $2x$, guess $y_{p1} = Ax + B$. For $4e^{2x}$, naive guess $C e^{2x}$ duplicates $c_2 e^{2x}$ in $y_c$! By the resonance rule, multiply by $x$: $y_{p2} = C x e^{2x}$. Complete trial guess: $y_p = Ax + B + C x e^{2x}$.

* **Step 3: Differentiate Trial Guess**:
  $y_p' = A + C e^{2x} + 2C x e^{2x}$. $y_p'' = 4C e^{2x} + 4C x e^{2x}$.

* **Step 4: Substitute into ODE and Equate Coefficients**:
  $y'' - 3y' + 2y = (4C e^{2x} + 4C x e^{2x}) - 3(A + C e^{2x} + 2C x e^{2x}) + 2(Ax + B + C x e^{2x}) = C e^{2x} + 2Ax + (2B - 3A)$. Equate to $4e^{2x} + 2x$: $C = 4$, $2A = 2 \implies A = 1$, $2B - 3(1) = 0 \implies B = \frac{3}{2}$.

* **Step 5: Assemble General Solution**:
  $y(x) = c_1 e^x + c_2 e^{2x} + 4x e^{2x} + x + \frac{3}{2}$.

> [!WARNING]
> **Common Exam Pitfall**: Failure to apply the resonance multiplication rule when the driving function shares roots with the complementary solution is the #1 point-deduction trap on Concordia Test 2 and Final Exams.

---

## 4. Key Takeaways & Exam Strategy Formula Card
- **Video Lesson**: [Linear Second-Order Differential Equations Part 2: Non-Homogeneous Differential Equations](https://www.youtube.com/watch?v=bojO7brQtE8&list=PLybg94GvOJ9FwwFOmp8sGTHZRiTWPYSs1&index=8)
- **Exam Takeaway**: $y(x) = y_c(x) + y_p(x)$. Always compare your trial guess against $y_c$ and multiply by $x$ to resolve duplication.
- Master the classification and verification mechanics before attempting complex integrations.
- Always check domain restrictions and verify initial values back into the computed trajectory.
