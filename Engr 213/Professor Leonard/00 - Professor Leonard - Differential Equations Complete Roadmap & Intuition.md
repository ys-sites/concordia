# Professor Leonard: Differential Equations Master Series
## Complete Course Roadmap, Whiteboard Philosophy & Intuition Guide
### Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (ENGR 213 Companion)

---

## 🌟 The Philosophy: Why Professor Leonard's Method Works
Most students struggle in Differential Equations not because the concepts are impossible, but because traditional textbooks dump abstract formulas without explaining **why** the steps work.

Professor Leonard's core teaching philosophy rests on three unbreakable pillars:
1. **The Big Picture Intuition First**: Before writing a single symbol, understand the physical meaning. What does $\frac{dy}{dx}$ represent? It is a slope, a speed, a rate of change. Solving a DE is not just symbol pushing; it is finding the original curve whose slopes match reality.
2. **Never Skip an Algebraic Step**: You will never see "it is obvious that..." or magical jumps. Every cross-multiplication, every distribution of negative signs, every $+ C$ is written out on the board so you see exactly how the mechanics work.
3. **The "Rules of the Road" (Spotting Traps Before They Happen)**: Knowing where students fail is 50% of passing exams. Professor Leonard constantly flags the classic trapdoors: forgetting the absolute value in $\ln|y|$, adding $+ C$ after exponentiating instead of before, or forgetting to check for lost equilibrium solutions.

---

## 🗺️ The Complete 50-Lesson Master Sequence

| Module | Core Concept | Physical / Whiteboard Intuition | Leonard's Golden Rule |
| :--- | :--- | :--- | :--- |
| **01. Foundations & Verification** | Definitions, Order, Linearity (Lessons 1-4) | A DE is a relationship between rates; verification is plugging $y$ and $y'$ back in | "Always verify by taking derivatives and checking equality!" |
| **02. Slope Fields & Flows** | Direction Fields & Solution Curves (Lessons 5-6) | Visualizing slopes across the plane as directional flow arrows | "Solution curves follow the wind like gliders in the air." |
| **03. Existence & Uniqueness** | Picard-Lindelöf Theorem (Lesson 11) | Continuity of $f$ and $\partial f/\partial y$; curves cannot cross | "If curves cross, uniqueness is shattered!" |
| **04. Separable Equations** | The Clean Split & Lost Solutions (Lessons 12-14) | Move all $y$'s and $dy$ to left, all $x$'s and $dx$ to right | "Write $+ C$ the instant you integrate, NOT at the end!" |
| **05. Linear First-Order** | Integrating Factor Method (Lessons 15-18) | Reverse Product Rule: creating $\frac{d}{dx}[\mu y]$ | "The coefficient of $y'$ MUST be 1 before calculating $\mu(x)$!" |
| **06. Tank Mixing Models** | Rate In minus Rate Out (Lesson 19) | Tracking mass of solute in changing liquid volume | "Concentration is mass over dynamic volume $V(t) = V_0 + \Delta r t$." |
| **07. Homogeneous First-Order** | Degree Matching & $y = ux$ (Lessons 20-21) | Replacing $y/x$ by $u$ collapses 2D equations into 1D | "Differentiate by product rule: $dy = u dx + x du$." |
| **08. Bernoulli & Composition** | Nonlinear Transformations (Lessons 22-24.5) | Dividing by $y^n$ sets up substitution $w = y^{1-n}$ | "Divide first, spot $y^{1-n}$, substitute, and it becomes linear!" |
| **09. Exact Equations** | Total Differentials & Potentials (Lessons 28-30) | Testing $M_y = N_x$; integrating to find potential $F(x,y)$ | "Set $\frac{\partial F}{\partial y} = N(x,y)$ to catch the missing $g'(y)$." |
| **10. Autonomous & Logistic** | Phase Lines & Stability (Lessons 31-36) | Equilibria $f(y) = 0$; attractors pull, repellers push | "Test the sign of $f(y)$ in each interval like Calc 1 sign charts!" |
| **11. Second-Order Homogeneous** | Characteristic Equation 3 Cases (Lessons 37-39)| Real distinct, repeated, complex roots with Euler | "Repeated roots need $x e^{rx}$; complex roots give sine and cosine!" |
| **12. Undetermined Coefficients** | The Educated Guess & Annihilator | Match the driving function form $g(x)$ | "If your guess duplicates $y_c$, multiply by $x$ until it is unique!" |
| **13. Variation of Parameters** | Universal Wronskian Solution | Integrating $u_1 = -\int \frac{y_2 g}{W}$, $u_2 = \int \frac{y_1 g}{W}$ | "Divide by the leading coefficient $a$ so $f(x) = g(x)/a$!" |
| **14. Oscillations & Resonance** | Mass-Spring Vibrations ($m x'' + \beta x' + k x = F$) | Damping types: underdamped, overdamped, resonance | "Driving at natural frequency creates linear growth $t \sin(\omega t)$!" |
| **15. Linear Systems** | Eigenvalues & Phase Portraits | Matrix $\mathbf{X}' = \mathbf{A}\mathbf{X}$; node, saddle, spiral | "Eigenvalues tell speed and growth; eigenvectors give the axis." |
| **16. Laplace Transforms** | Operational Frequency Calculus | Algebraic conversion $\mathcal{L}\{y'\} = s Y - y(0)$ | "Algebra in $s$-domain replaces calculus in $t$-domain!" |
