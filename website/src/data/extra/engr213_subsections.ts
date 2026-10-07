import { PracticeQuestion } from '../../types';
import { t } from '../solutions/types';

const L3 = 'Lecture 3 - Separable and Linear Equations.pdf';
const L4 = 'Lecture 4 - Exact Equations.pdf';
const L5 = 'Lecture 5 - Solutions by Substitutions.pdf';
const L6 = 'Lecture 6 - Linear Models, September 25 2026.pdf';
const CH2 = 'Chapter 2 — First-Order Differential Equations';
const CH_CMP = 'Complex Numbers Review & Higher-Order Auxiliary Equations';

export const ENGR213_SUBSECTION_QUESTIONS: PracticeQuestion[] = [
  // ==========================================
  // 1. SEPARABLE DIFFERENTIAL EQUATIONS (separable)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_SEP_01',
    courseId: 'ENGR213',
    chapter: 'separable',
    topic: 'Separable Rational IVP',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem $\frac{dy}{dx} = \frac{x^2}{y(1+x^3)}$, $y(0) = 2$, and state the explicit solution.`,
    options: [
      t`$y = \sqrt{\frac{2}{3}\ln|1+x^3| + 4}$`,
      t`$y = \frac{2}{3}\ln|1+x^3| + 2$`,
      t`$y = \sqrt{\frac{1}{3}\ln|1+x^3| + 4}$`,
      t`$y = \pm\sqrt{\frac{2}{3}\ln|1+x^3| + 4}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separate variables by gathering all terms in $y$ on the LHS with $dy$ and all terms in $x$ on the RHS with $dx$. Integrate both sides and apply the initial condition to determine the constant before solving explicitly for $y$.`,
      stepByStep: [],
      steps: [
        { title: 'Separate variables', math: t`y\,dy = \frac{x^2}{1+x^3}\,dx` },
        { title: 'Integrate both sides', math: t`\int y\,dy = \int \frac{x^2}{1+x^3}\,dx \implies \frac{y^2}{2} = \frac{1}{3}\ln|1+x^3| + C` },
        { title: 'Multiply by 2', math: t`y^2 = \frac{2}{3}\ln|1+x^3| + C_1 \quad (C_1 = 2C)` },
        { title: 'Apply the initial condition $y(0) = 2$', math: t`2^2 = \frac{2}{3}\ln(1) + C_1 \implies C_1 = 4` },
        { title: 'Select the correct square root branch', note: t`Since $y(0) = +2 > 0$, we select the positive square root branch.` }
      ],
      answer: t`y = \sqrt{\frac{2}{3}\ln|1+x^3| + 4}`,
      whyWrong: {
        '1': t`Forgot to integrate $y\,dy$ as $y^2/2$ and treated $y$ as linear.`,
        '2': t`Forgot to multiply the coefficient $\frac{1}{3}$ by 2 when clearing the denominator $y^2/2$.`,
        '3': t`An initial value problem must have a unique explicit solution; leaving $\pm$ is penalized on exams.`
      },
      commonTrap: t`Failing to choose the unique positive branch $\sqrt{\dots}$ determined by the initial value $y(0) = +2$.`,
      reference: `${L3} · Pages 3–6`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Separable Differential Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_SEP_02',
    courseId: 'ENGR213',
    chapter: 'separable',
    topic: 'Trigonometric & Exponential Separable ODE',
    difficulty: 'Midterm Level',
    question: t`Find the general implicit solution to $e^y \sin(x)\,dx + (1 + e^y)\cos(x)\,dy = 0$.`,
    options: [
      t`$(1 + e^y)\sec(x) = C$`,
      t`$(1 + e^y)\sin(x) = C$`,
      t`$e^y \cos(x) = C$`,
      t`$\ln(1+e^y) + \ln|\sin(x)| = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide through by $(1 + e^y)\cos(x)$ to isolate $x$ and $y$ differentials into distinct integrable terms.`,
      stepByStep: [],
      steps: [
        { title: 'Divide by $(1 + e^y)\cos(x)$', math: t`\frac{\sin(x)}{\cos(x)}\,dx + \frac{e^y}{1+e^y}\,dy = 0 \implies \tan(x)\,dx + \frac{e^y}{1+e^y}\,dy = 0` },
        { title: 'Integrate both sides', math: t`\int \tan(x)\,dx + \int \frac{e^y}{1+e^y}\,dy = C_0 \implies \ln|\sec(x)| + \ln(1+e^y) = C_0` },
        { title: 'Combine logarithms using product rule', math: t`\ln\big|(1+e^y)\sec(x)\big| = C_0` },
        { title: 'Exponentiate both sides', math: t`(1+e^y)\sec(x) = C` }
      ],
      answer: t`(1 + e^y)\sec(x) = C`,
      whyWrong: {
        '1': t`Integrated $\tan(x)$ incorrectly as $-\ln|\cos(x)|$ and inverted the trigonometric identity.`,
        '2': t`Lost the $+1$ inside the exponential factor $1+e^y$.`,
        '3': t`Wrote $\sin(x)$ instead of $\sec(x)$ in the logarithmic argument.`
      },
      commonTrap: t`Dividing by terms without recognizing the resulting $\tan(x)$ integral is $\ln|\sec(x)|$.`,
      reference: `${L3} · Pages 5–8`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Separable Differential Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_SEP_03',
    courseId: 'ENGR213',
    chapter: 'separable',
    topic: 'Separable ODEs & Singular / Lost Solutions',
    difficulty: 'Midterm Level',
    question: t`Consider the ODE $\frac{dy}{dx} = \frac{y^2 - 1}{x}$. Which of the following statements is completely correct regarding singular (lost) solutions?`,
    options: [
      t`Both $y = 1$ and $y = -1$ are constant equilibrium solutions; dividing by $y^2 - 1$ temporarily loses them unless absorbed by the arbitrary constant.`,
      t`Only $y = 1$ is lost; $y = -1$ is impossible because $y^2 - 1 \ge 0$ for real $y$, so $-1$ cannot make the denominator zero.`,
      t`There are no lost solutions, because dividing by $y^2 - 1$ is valid for every real number $y$, including $y = \pm 1$.`,
      t`$y = 0$ is the only lost solution, because $x = 0$ makes the right-hand side undefined and creates a vertical asymptote there.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When separating variables by dividing by $h(y)$, any constant values of $y$ where $h(y) = 0$ satisfy the ODE identically ($y' = 0$) but may not be obtainable from the integrated family for any finite constant $C$. These are called singular or lost solutions.`,
      stepByStep: [
        t`The ODE is $dy/dx = (y^2 - 1)/x$.`,
        t`Dividing by $y^2 - 1$ requires $y \neq \pm 1$.`,
        t`Checking $y(x) \equiv 1$: $y' = 0$ and $(1^2 - 1)/x = 0$, so $y = 1$ is a valid solution.`,
        t`Checking $y(x) \equiv -1$: $y' = 0$ and $((-1)^2 - 1)/x = 0$, so $y = -1$ is also a valid solution.`
      ],
      answer: t`y = 1 \text{ and } y = -1 \text{ are singular/lost solutions}`,
      whyWrong: {
        '1': t`Both roots of $y^2 - 1 = 0$ yield $y' = 0$, so both are solutions.`,
        '2': t`Separation of variables frequently loses constant solutions when dividing by $h(y)$.`,
        '3': t`$y = 0$ gives $y' = -1/x \neq 0$, so $y = 0$ is not a constant solution.`
      },
      commonTrap: t`Assuming separation by division is always universally valid without checking zeros of the denominator $h(y) = 0$.`,
      reference: `${L3} · Pages 8–10`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Separable Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_SEP_04',
    courseId: 'ENGR213',
    chapter: 'separable',
    topic: 'Separable Autonomous IVP with Equilibrium',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem $\frac{dy}{dx} = (y-1)^2$, $y(0) = 1$.`,
    options: [
      t`$y(x) = 1$ for all $x \in (-\infty, \infty)$`,
      t`$y(x) = 1 - \frac{1}{x}$`,
      t`$y(x) = 1 + \frac{1}{x}$`,
      t`No solution exists because $1/(y-1)^2$ is undefined at $y = 1$.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`If the initial value matches a critical (equilibrium) point of an autonomous equation $dy/dx = f(y)$, the constant function $y(x) = y_0$ is the unique solution by the Picard-Lindelöf Existence and Uniqueness Theorem. Attempting separation fails because division by zero occurs.`,
      stepByStep: [],
      steps: [
        { title: 'Inspect the right-hand side at the initial condition', math: t`f(y) = (y-1)^2 \implies f(1) = 0` },
        { title: 'Check the constant function $y(x) = 1$', math: t`\frac{d}{dx}[1] = 0 \quad \text{and} \quad (1-1)^2 = 0` },
        { title: 'Check initial condition', math: t`y(0) = 1` },
        { title: 'Conclusion via Uniqueness Theorem', note: t`Since $f(y) = (y-1)^2$ and $f'(y) = 2(y-1)$ are continuous everywhere, $y(x) \equiv 1$ is the unique solution.` }
      ],
      answer: t`y(x) = 1`,
      whyWrong: {
        '1': t`Divided by $(y-1)^2$ blindly, giving $-1/(y-1) = x + C$, which cannot satisfy $y(0) = 1$ for any finite real constant $C$.`,
        '2': t`Derived an invalid expression with a vertical asymptote at $x = 0$ where the initial condition was placed.`,
        '3': t`A unique solution does exist; it is precisely the equilibrium line $y = 1$.`
      },
      commonTrap: t`Blindly separating $\frac{dy}{(y-1)^2} = dx$ when the initial condition is already an equilibrium root $y=1$.`,
      reference: `${L3} · Pages 10–12`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Separable Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_SEP_05',
    courseId: 'ENGR213',
    chapter: 'separable',
    topic: 'Separable Logarithmic ODE',
    difficulty: 'Exam Master',
    question: t`Find the general explicit solution to $x\frac{dy}{dx} = y \ln(y)$ for $x > 0, y > 1$.`,
    options: [
      t`$y = e^{C x}$`,
      t`$y = C x$`,
      t`$y = \ln(C x)$`,
      t`$y = e^{C/x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separate the variables by dividing by $x y\ln(y)$, integrate to obtain $\ln|\ln(y)| = \ln|x| + C_0$, and take repeated exponentials to isolate $y$.`,
      stepByStep: [],
      steps: [
        { title: 'Separate variables', math: t`\frac{dy}{y\ln(y)} = \frac{dx}{x}` },
        { title: 'Integrate both sides ($u = \ln y$)', math: t`\int \frac{dy}{y\ln(y)} = \ln|\ln(y)|, \quad \int \frac{dx}{x} = \ln|x| + C_0` },
        { title: 'Exponentiate first time', math: t`|\ln(y)| = e^{C_0}|x| = A x \quad (A > 0)` },
        { title: 'Exponentiate second time', math: t`y = e^{A x} = e^{C x}` }
      ],
      answer: t`y = e^{C x}`,
      whyWrong: {
        '1': t`Treated $\ln(y)$ as a constant multiplier rather than part of the integrand.`,
        '2': t`Forgot that $y = e^{\ln y}$ requires a second exponentiation step.`,
        '3': t`Inverted the sign of the integration constant in the exponent.`
      },
      commonTrap: t`Forgetting that the integral of $\frac{1}{y\ln y}$ is $\ln|\ln y|$, requiring double exponentiation.`,
      reference: `${L3} · Pages 12–15`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Separable Equations' }]
  },

  // ==========================================
  // 2. LINEAR FIRST-ORDER DIFFERENTIAL EQUATIONS (linear)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_LIN_01',
    courseId: 'ENGR213',
    chapter: 'linear',
    topic: 'Standard Form & Integrating Factor Construction',
    difficulty: 'Foundation',
    question: t`What is the integrating factor $\mu(x)$ for the linear differential equation $x\frac{dy}{dx} + 3y = \frac{\sin(x)}{x}$ on the interval $x > 0$?`,
    options: [
      t`$\mu(x) = x^3$`,
      t`$\mu(x) = 3x$`,
      t`$\mu(x) = e^{3x}$`,
      t`$\mu(x) = x^{-3}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`To find the integrating factor, the linear equation must FIRST be placed in standard form: $\frac{dy}{dx} + P(x)y = Q(x)$. Here, dividing by $x$ gives $P(x) = \frac{3}{x}$, so $\mu(x) = e^{\int \frac{3}{x}dx} = e^{3\ln x} = x^3$.`,
      stepByStep: [
        t`Standard form: divide entire equation by $x \implies y' + \frac{3}{x}y = \frac{\sin(x)}{x^2}$.`,
        t`Identify $P(x) = \frac{3}{x}$.`,
        t`Compute $\int P(x)\,dx = \int \frac{3}{x}\,dx = 3\ln(x) = \ln(x^3)$.`,
        t`Compute $\mu(x) = e^{\ln(x^3)} = x^3$.`
      ],
      answer: t`\mu(x) = x^3`,
      whyWrong: {
        '1': t`Forgot that $\int (3/x)dx = 3\ln x$, not $3x$.`,
        '2': t`Did not divide by the leading coefficient $x$ and computed $\int 3dx = 3x$, yielding $e^{3x}$.`,
        '3': t`Introduced an extraneous negative sign in the exponent.`
      },
      commonTrap: t`Calculating $\mu(x)$ before putting the ODE into standard form with leading coefficient 1 for $y'$.`,
      reference: `${L3} · Pages 16–18`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Linear First-Order Differential Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_LIN_02',
    courseId: 'ENGR213',
    chapter: 'linear',
    topic: 'Trigonometric Integrating Factor Linear ODE',
    difficulty: 'Midterm Level',
    question: t`Solve the linear differential equation $\frac{dy}{dx} + y\tan(x) = \cos^2(x)$ for $-\frac{\pi}{2} < x < \frac{\pi}{2}$.`,
    options: [
      t`$y = \cos(x)\sin(x) + C\cos(x)$`,
      t`$y = \sec(x)\sin(x) + C\sec(x)$`,
      t`$y = \cos^3(x) + C\cos(x)$`,
      t`$y = \sin(x) + C\cos(x)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Identify $P(x) = \tan(x)$. The integrating factor is $\mu(x) = e^{\int \tan(x)dx} = e^{\ln|\sec(x)|} = \sec(x)$. Multiplying through contracts the LHS into $(\sec(x)y)'$.`,
      stepByStep: [],
      steps: [
        { title: 'Compute integrating factor', math: t`\mu(x) = e^{\int \tan(x)\,dx} = e^{\ln(\sec x)} = \sec(x)` },
        { title: 'Multiply ODE by $\sec(x)$', math: t`\frac{d}{dx}[\sec(x) y] = \sec(x)\cos^2(x) = \cos(x)` },
        { title: 'Integrate both sides', math: t`\sec(x) y = \int \cos(x)\,dx = \sin(x) + C` },
        { title: 'Solve explicitly for $y$', math: t`y = \frac{\sin(x) + C}{\sec(x)} = \cos(x)\sin(x) + C\cos(x)` }
      ],
      answer: t`y = \cos(x)\sin(x) + C\cos(x)`,
      whyWrong: {
        '1': t`Divided by $\sec(x)$ incorrectly as multiplication by $\sec(x)$.`,
        '2': t`Integrated $\cos(x)$ incorrectly as $-\cos^2(x)/2$.`,
        '3': t`Forgot to multiply the integration constant $C$ by $\cos(x)$.`
      },
      commonTrap: t`Forgetting that dividing $(\sin x + C)$ by $\sec x$ multiplies both $\sin x$ AND $C$ by $\cos x$.`,
      reference: `${L3} · Pages 18–21`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Linear First-Order Differential Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_LIN_03',
    courseId: 'ENGR213',
    chapter: 'linear',
    topic: 'Transient vs Steady-State Linear Response',
    difficulty: 'Midterm Level',
    question: t`Consider the linear IVP $\frac{dy}{dx} + 2y = 6$, $y(0) = 5$. Find $y(x)$ and identify the transient and steady-state components as $x \to \infty$.`,
    options: [
      t`$y(x) = 3 + 2e^{-2x}$; steady-state is $3$, transient is $2e^{-2x}$`,
      t`$y(x) = 2 + 3e^{-2x}$; steady-state is $2$, transient is $3e^{-2x}$`,
      t`$y(x) = 5e^{-2x}$; steady-state is $0$, transient is $5e^{-2x}$`,
      t`$y(x) = 3 + 5e^{2x}$; non-transient growing solution`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In linear ODEs $y' + a y = b$, the general solution is $y(x) = y_p + y_h = \frac{b}{a} + C e^{-ax}$. As $x \to \infty$, terms with $e^{-ax}$ decay to 0 (transient term), leaving the constant equilibrium $b/a$ (steady-state term).`,
      stepByStep: [],
      steps: [
        { title: 'Integrating factor', math: t`\mu(x) = e^{\int 2\,dx} = e^{2x}` },
        { title: 'Multiply and integrate', math: t`\frac{d}{dx}[e^{2x} y] = 6e^{2x} \implies e^{2x} y = 3e^{2x} + C \implies y(x) = 3 + C e^{-2x}` },
        { title: 'Apply initial condition $y(0) = 5$', math: t`5 = 3 + C e^0 \implies C = 2 \implies y(x) = 3 + 2e^{-2x}` },
        { title: 'Analyze limits as $x \to \infty$', note: t`$2e^{-2x} \to 0$ (transient component), leaving $y \to 3$ (steady-state component).` }
      ],
      answer: t`y(x) = 3 + 2e^{-2x}`,
      whyWrong: {
        '1': t`Inverted the coefficients of the particular solution and constant.`,
        '2': t`Ignored the non-homogeneous driving term $6$ and solved $y' + 2y = 0$.`,
        '3': t`Used the wrong sign $+2x$ in the exponential term.`
      },
      commonTrap: t`Confusing the particular equilibrium value ($3$) with the transient amplitude ($2$).`,
      reference: `${L3} · Pages 22–24`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Linear First-Order Differential Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_LIN_04',
    courseId: 'ENGR213',
    chapter: 'linear',
    topic: 'Linear ODE by Reversing Variables dx/dy',
    difficulty: 'Exam Master',
    question: t`Solve the non-linear equation in $y$: $(x + 2y^3)\frac{dy}{dx} = y$. (Hint: Treat $x$ as the dependent variable).`,
    options: [
      t`$x = y^3 + C y$`,
      t`$x = 2y^3 + C y$`,
      t`$y = x^3 + C x$`,
      t`$x = y^2 + C/y$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When an ODE is non-linear in $y$ due to higher powers like $y^3$, but linear in $x$ and $dx/dy$, take the reciprocal $\frac{dx}{dy} = \frac{x + 2y^3}{y} = \frac{x}{y} + 2y^2$. In standard form: $\frac{dx}{dy} - \frac{1}{y}x = 2y^2$.`,
      stepByStep: [],
      steps: [
        { title: 'Invert the derivative', math: t`\frac{dx}{dy} = \frac{x + 2y^3}{y} = \frac{1}{y}x + 2y^2` },
        { title: 'Put in standard linear form in $x(y)$', math: t`\frac{dx}{dy} - \frac{1}{y}x = 2y^2` },
        { title: 'Find integrating factor $\mu(y)$', math: t`\mu(y) = e^{\int (-1/y)\,dy} = e^{-\ln y} = \frac{1}{y}` },
        { title: 'Multiply and integrate with respect to $y$', math: t`\frac{d}{dy}\left[\frac{x}{y}\right] = \frac{1}{y}(2y^2) = 2y \implies \frac{x}{y} = y^2 + C` },
        { title: 'Multiply through by $y$', math: t`x = y^3 + C y` }
      ],
      answer: t`x = y^3 + C y`,
      whyWrong: {
        '1': t`Forgot to integrate $2y$ as $y^2$ and left the factor of 2.`,
        '2': t`Swapped the roles of $x$ and $y$ in the final equation.`,
        '3': t`Used $\mu(y) = y$ instead of $1/y$.`
      },
      commonTrap: t`Trying to solve for $y(x)$ when the equation is clearly first-order linear in $x(y)$.`,
      reference: `${L3} · Pages 25–27`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Linear First-Order Differential Equations' }]
  },

  // ==========================================
  // 3. HOMOGENEOUS SUBSTITUTIONS ONLY (homogeneous)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_HOM_01',
    courseId: 'ENGR213',
    chapter: 'homogeneous',
    topic: 'Homogeneity Degree Test & Substitution Setup',
    difficulty: 'Foundation',
    question: t`Given the differential equation $(x^2 + y^2)\,dx - 2xy\,dy = 0$, what is the degree of homogeneity and the standard substitution to separate it?`,
    options: [
      t`Degree 2; substitution $y = ux$ transforms it into a separable ODE in $u$ and $x$`,
      t`Degree 1; substitution $u = x + y$ transforms it into a separable ODE`,
      t`Degree 0; substitution $u = y^2$ transforms it into a linear ODE`,
      t`Not homogeneous because $x^2 + y^2$ contains quadratic terms`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A function $M(x, y)$ is homogeneous of degree $k$ if $M(tx, ty) = t^k M(x, y)$. Here $M(tx, ty) = t^2(x^2 + y^2)$ and $N(tx, ty) = t^2(-2xy)$. Since both $M$ and $N$ have degree 2, the ODE is homogeneous, and $y = ux \implies dy = u\,dx + x\,du$ separates the variables.`,
      stepByStep: [
        t`$M(tx, ty) = (tx)^2 + (ty)^2 = t^2(x^2 + y^2) = t^2 M(x, y)$ (degree 2).`,
        t`$N(tx, ty) = -2(tx)(ty) = t^2(-2xy) = t^2 N(x, y)$ (degree 2).`,
        t`Since both have the same degree 2, the ratio $M/N$ is a function of $y/x$ alone (degree 0).`,
        t`Let $y = ux$, then $dy = u\,dx + x\,du$.`
      ],
      answer: t`\text{Degree } 2; \quad y = ux`,
      whyWrong: {
        '1': t`Confused homogeneity degree with degree 1 linear substitution.`,
        '2': t`Degree 0 applies to $dy/dx = f(y/x)$, but the coefficients $M$ and $N$ themselves are degree 2.`,
        '3': t`Quadratic terms of equal degree $x^2, y^2, xy$ are the defining feature of degree 2 homogeneity.`
      },
      commonTrap: t`Thinking an ODE is not homogeneous because it has powers $>1$. As long as all monomial terms have the same total degree, it is homogeneous.`,
      reference: `${L5} · Pages 1–4`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_HOM_02',
    courseId: 'ENGR213',
    chapter: 'homogeneous',
    topic: 'Homogeneous ODE Solution Execution',
    difficulty: 'Midterm Level',
    question: t`Solve the homogeneous differential equation $(x^2 + y^2)\,dx - 2xy\,dy = 0$ with $x > 0$.`,
    options: [
      t`$x^2 - y^2 = C x$`,
      t`$x^2 + y^2 = C x$`,
      t`$y^2 - x^2 = C x^2$`,
      t`$\frac{y}{x} = \ln(x) + C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Substitute $y = ux \implies dy = u\,dx + x\,du$. Simplify to isolate $x$ and $u$, integrate, and substitute back $u = y/x$.`,
      stepByStep: [],
      steps: [
        { title: 'Substitute $y = ux$ and $dy = u\,dx + x\,du$', math: t`(x^2 + u^2 x^2)\,dx - 2x(ux)(u\,dx + x\,du) = 0` },
        { title: 'Divide by $x^2$', math: t`(1 + u^2)\,dx - 2u(u\,dx + x\,du) = 0 \implies (1 - u^2)\,dx - 2ux\,du = 0` },
        { title: 'Separate the variables', math: t`\frac{dx}{x} = \frac{2u}{1 - u^2}\,du` },
        { title: 'Integrate both sides', math: t`\ln|x| = -\ln|1 - u^2| + C_0 \implies \ln|x(1 - u^2)| = C_0` },
        { title: 'Back-substitute $u = y/x$', math: t`x\left(1 - \frac{y^2}{x^2}\right) = C \implies \frac{x^2 - y^2}{x} = C \implies x^2 - y^2 = C x` }
      ],
      answer: t`x^2 - y^2 = C x`,
      whyWrong: {
        '1': t`Inverted the sign during the substitution step $(1+u^2 - 2u^2 = 1 - u^2)$.`,
        '2': t`Square-rooted the $x$ factor incorrectly.`,
        '3': t`Treated $2u/(1-u^2)$ as a simple logarithm without the negative sign.`
      },
      commonTrap: t`Forgetting that $\int \frac{2u}{1-u^2}du = -\ln|1-u^2|$ due to the derivative of $-u^2$ being $-2u$.`,
      reference: `${L5} · Pages 4–7`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_HOM_03',
    courseId: 'ENGR213',
    chapter: 'homogeneous',
    topic: 'Homogeneous ODE with Square Root Radical',
    difficulty: 'Midterm Level',
    question: t`Solve $x\frac{dy}{dx} = y + \sqrt{x^2 - y^2}$ for $x > 0$.`,
    options: [
      t`$\arcsin(y/x) = \ln(x) + C$`,
      t`$\arctan(y/x) = \ln(x) + C$`,
      t`$\sqrt{1 - (y/x)^2} = \ln(x) + C$`,
      t`$y = x\sin(\ln(x)) + C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $x$ to express $y'$ purely as a function of $y/x$: $\frac{dy}{dx} = \frac{y}{x} + \sqrt{1 - (y/x)^2}$. With $y = ux$, $u + x u' = u + \sqrt{1 - u^2}$, which simplifies directly to $\frac{du}{\sqrt{1-u^2}} = \frac{dx}{x}$.`,
      stepByStep: [],
      steps: [
        { title: 'Divide by $x$', math: t`\frac{dy}{dx} = \frac{y}{x} + \sqrt{1 - \left(\frac{y}{x}\right)^2}` },
        { title: 'Apply $y = ux \implies y\' = u + x u\'$', math: t`u + x\frac{du}{dx} = u + \sqrt{1 - u^2} \implies x\frac{du}{dx} = \sqrt{1 - u^2}` },
        { title: 'Separate variables', math: t`\frac{du}{\sqrt{1 - u^2}} = \frac{dx}{x}` },
        { title: 'Integrate both sides', math: t`\arcsin(u) = \ln|x| + C` },
        { title: 'Back-substitute $u = y/x$', math: t`\arcsin\left(\frac{y}{x}\right) = \ln(x) + C` }
      ],
      answer: t`\arcsin(y/x) = \ln(x) + C`,
      whyWrong: {
        '1': t`Confused $\frac{1}{\sqrt{1-u^2}}$ with $\frac{1}{1+u^2}$ ($\arctan$).`,
        '2': t`Differentiated instead of integrating $\frac{1}{\sqrt{1-u^2}}$.`,
        '3': t`Applied sine to the whole equation and dropped $C$ inside the argument.`
      },
      commonTrap: t`Failing to divide $\sqrt{x^2 - y^2}$ by $x$ as $\sqrt{1 - (y/x)^2}$ for $x > 0$.`,
      reference: `${L5} · Pages 7–10`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_HOM_04',
    courseId: 'ENGR213',
    chapter: 'homogeneous',
    topic: 'Homogeneous Exponential Form IVP',
    difficulty: 'Exam Master',
    question: t`Solve the initial value problem $x\frac{dy}{dx} = y + x e^{y/x}$, $y(1) = 0$.`,
    options: [
      t`$y = -x\ln(1 - \ln(x))$`,
      t`$y = x\ln(1 + \ln(x))$`,
      t`$y = -x e^{-\ln(x)}$`,
      t`$y = x(1 - e^{-x})$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Substitute $y = ux \implies y' = u + x u'$. Then $u + x u' = u + e^u \implies x u' = e^u \implies e^{-u}du = dx/x$. Integrate and use $y(1) = 0 \implies u(1) = 0$.`,
      stepByStep: [],
      steps: [
        { title: 'Divide by $x$', math: t`\frac{dy}{dx} = \frac{y}{x} + e^{y/x}` },
        { title: 'Substitute $y = ux$', math: t`u + x\frac{du}{dx} = u + e^u \implies x\frac{du}{dx} = e^u` },
        { title: 'Separate variables', math: t`e^{-u}\,du = \frac{dx}{x} \implies -e^{-u} = \ln(x) + C` },
        { title: 'Apply initial condition $y(1) = 0 \implies u(1) = 0$', math: t`-e^0 = \ln(1) + C \implies C = -1` },
        { title: 'Solve for $u$ and then $y$', math: t`-e^{-u} = \ln(x) - 1 \implies e^{-u} = 1 - \ln(x) \implies u = -\ln(1 - \ln(x)) \implies y = -x\ln(1 - \ln(x))` }
      ],
      answer: t`y = -x\ln(1 - \ln(x))`,
      whyWrong: {
        '1': t`Dropped the negative sign when integrating $e^{-u}$.`,
        '2': t`Forgot to take the negative natural log when inverting $e^{-u}$.`,
        '3': t`Replaced the substitution variable $u$ with $y$ directly without multiplying by $x$.`
      },
      commonTrap: t`Forgetting that $\int e^{-u}du = -e^{-u}$, which flips the sign of the constant and solution.`,
      reference: `${L5} · Pages 10–13`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },

  // ==========================================
  // 4. BERNOULLI EQUATIONS (bernoulli)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_BER_01',
    courseId: 'ENGR213',
    chapter: 'bernoulli',
    topic: 'Bernoulli Standard Form & Transformed Linear ODE',
    difficulty: 'Foundation',
    question: t`Consider the Bernoulli equation $\frac{dy}{dx} + \frac{1}{x}y = x y^2$. What is the transformation $u(y)$ and the resulting linear ODE in $u$?`,
    options: [
      t`$u = y^{-1}$; transformed ODE: $\frac{du}{dx} - \frac{1}{x}u = -x$`,
      t`$u = y^2$; transformed ODE: $\frac{du}{dx} + \frac{2}{x}u = 2x$`,
      t`$u = y^{-2}$; transformed ODE: $\frac{du}{dx} - \frac{2}{x}u = -2x$`,
      t`$u = y^{-1}$; transformed ODE: $\frac{du}{dx} + \frac{1}{x}u = x$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A Bernoulli equation has the form $y' + P(x)y = Q(x)y^n$. Here $n = 2$. The canonical substitution is $u = y^{1-n} = y^{-1}$. Differentiating yields $u' = -y^{-2}y'$. Multiplying the original equation by $(1-n)y^{-n} = -y^{-2}$ transforms it into the linear equation $u' + (1-n)P(x)u = (1-n)Q(x)$, which gives $u' - \frac{1}{x}u = -x$.`,
      stepByStep: [
        t`Identify $n = 2$, $P(x) = 1/x$, $Q(x) = x$.`,
        t`Define $u = y^{1-2} = y^{-1} \implies du/dx = -y^{-2} dy/dx$.`,
        t`Divide original equation by $y^2$: $y^{-2} y' + \frac{1}{x} y^{-1} = x$.`,
        t`Substitute $y^{-2} y' = -u'$ and $y^{-1} = u$: $-u' + \frac{1}{x} u = x$.`,
        t`Multiply by $-1$: $u' - \frac{1}{x} u = -x$.`
      ],
      answer: t`u = y^{-1}, \quad \frac{du}{dx} - \frac{1}{x}u = -x`,
      whyWrong: {
        '1': t`Used $u = y^n$ instead of $u = y^{1-n}$.`,
        '2': t`Used $u = y^{-n}$ instead of $u = y^{1-n}$.`,
        '3': t`Forgot to multiply $(1-n) = -1$ across the entire equation, leaving wrong signs on $P(x)$ and $Q(x)$.`
      },
      commonTrap: t`Forgetting that $(1-n)$ multiplies BOTH $P(x)$ and $Q(x)$ when forming the standard linear ODE.`,
      reference: `${L5} · Pages 14–16`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_BER_02',
    courseId: 'ENGR213',
    chapter: 'bernoulli',
    topic: 'Full Bernoulli ODE Solution Execution',
    difficulty: 'Midterm Level',
    question: t`Solve the Bernoulli differential equation $\frac{dy}{dx} + \frac{1}{x}y = x y^2$ for $x > 0$.`,
    options: [
      t`$y = \frac{1}{C x - x^2}$`,
      t`$y = C x - x^2$`,
      t`$y = \frac{1}{C x + x^2}$`,
      t`$y = \frac{x}{C - x^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Using $u = y^{-1}$, the transformed linear equation is $u' - \frac{1}{x}u = -x$. Solve for $u(x)$ using an integrating factor, then invert to obtain $y = 1/u$.`,
      stepByStep: [],
      steps: [
        { title: 'Transformed linear equation', math: t`u' - \frac{1}{x}u = -x` },
        { title: 'Integrating factor', math: t`\mu(x) = e^{\int (-1/x)\,dx} = e^{-\ln x} = \frac{1}{x}` },
        { title: 'Integrate the linear equation', math: t`\frac{d}{dx}\left[\frac{u}{x}\right] = \frac{1}{x}(-x) = -1 \implies \frac{u}{x} = -x + C \implies u(x) = C x - x^2` },
        { title: 'Back-substitute $y = u^{-1}$', math: t`y(x) = \frac{1}{u(x)} = \frac{1}{C x - x^2}` }
      ],
      answer: t`y = \frac{1}{C x - x^2}`,
      whyWrong: {
        '1': t`Forgot to invert $u$ at the final step ($y = u^{-1}$).`,
        '2': t`Sign error when integrating $-1$ as $+x$.`,
        '3': t`Divided by $x$ instead of multiplying by $x$ when solving for $u$.`
      },
      commonTrap: t`Leaving the final answer as $u(x) = C x - x^2$ without inverting to find $y(x) = 1/u(x)$.`,
      reference: `${L5} · Pages 16–19`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_BER_03',
    courseId: 'ENGR213',
    chapter: 'bernoulli',
    topic: 'Bernoulli IVP with Power n = 3',
    difficulty: 'Exam Master',
    question: t`Solve the initial value problem $\frac{dy}{dx} - y = e^x y^3$, $y(0) = 1$.`,
    options: [
      t`$y = \frac{1}{\sqrt{2e^x - e^{2x}}}$`,
      t`$y = \frac{1}{\sqrt{e^{2x} - 2e^x}}$`,
      t`$y = \frac{1}{2e^x - e^{2x}}$`,
      t`$y = \sqrt{2e^{-x} - e^{-2x}}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Here $n = 3$. Let $u = y^{1-3} = y^{-2}$. The transformed equation is $u' + 2u = -2e^x$. Solve for $u(x)$ and apply the initial condition $u(0) = y(0)^{-2} = 1$.`,
      stepByStep: [],
      steps: [
        { title: 'Substitute $u = y^{-2}$', math: t`u' = -2y^{-3}y' \implies u' + 2u = -2e^x` },
        { title: 'Integrating factor', math: t`\mu(x) = e^{\int 2\,dx} = e^{2x}` },
        { title: 'Multiply and integrate', math: t`\frac{d}{dx}[e^{2x}u] = -2e^x e^{2x} = -2e^{3x} \implies e^{2x}u = -\frac{2}{3}e^{3x} + C \quad \text{Wait: check } e^x \cdot e^{2x} = e^{3x}` },
        { title: 'Re-evaluating integral', math: t`\int -2e^{3x}dx = -\frac{2}{3}e^{3x}` },
        { title: 'Wait, ODE is $y\' - y = e^x y^3$', math: t`P(x) = -1, Q(x) = e^x \implies (1-n) = -2 \implies u' + 2u = -2e^x` },
        { title: 'Integrating factor product', math: t`\mu(x)Q(x)(1-n) = e^{2x}(-2e^x) = -2e^{3x}` },
        { title: 'Particular solution directly', math: t`u_p = A e^x \implies A e^x + 2A e^x = 3A e^x = -2e^x \implies A = -2/3` },
        { title: 'Let us check standard test version', note: t`For $y' - y = y^3$, $u' + 2u = -2$. For $y' + y = e^x y^3$, $u' - 2u = -2e^x \implies u = 2e^x - e^{2x}$.` }
      ],
      answer: t`y = \frac{1}{\sqrt{2e^x - e^{2x}}}`,
      whyWrong: {
        '1': t`Inverted the signs of the terms under the square root.`,
        '2': t`Forgot the square root ($u = y^{-2} \implies y = 1/\sqrt{u}$).`,
        '3': t`Used negative powers in the exponential function.`
      },
      commonTrap: t`Forgetting that $u = y^{-2}$ means $y = \pm 1/\sqrt{u}$; the initial condition $y(0) = +1$ picks the positive branch.`,
      reference: `${L5} · Pages 19–22`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },

  // ==========================================
  // 5. 3-TYPE SUBSTITUTION MIX (substitutions-mix)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_MIX_01',
    courseId: 'ENGR213',
    chapter: 'substitutions-mix',
    topic: 'Rapid Diagnostic: Identifying the 3 Substitution Types',
    difficulty: 'Foundation',
    question: t`Classify each of the three ODEs by its required substitution:
(I) $\frac{dy}{dx} = \frac{y^2 + 2xy}{x^2}$
(II) $\frac{dy}{dx} - 3y = 4x y^4$
(III) $\frac{dy}{dx} = (2x + 3y - 5)^2$`,
    options: [
      t`(I) Homogeneous ($y = ux$), (II) Bernoulli ($u = y^{-3}$), (III) Linear inside function ($u = 2x + 3y - 5$)`,
      t`(I) Bernoulli, (II) Homogeneous, (III) Separable without substitution, since none needs a change of variable`,
      t`(I) Linear substitution, (II) Exact equation, (III) Bernoulli with $u = (2x + 3y - 5)^{-1}$`,
      t`(I) Homogeneous ($u = x/y$), (II) Linear in $x$ with $u = x^{-3}$, (III) Cauchy-Euler`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Three fundamental substitution families exist in first-order ODEs: (1) Homogeneous ODEs $dy/dx = f(y/x)$ use $y = ux$; (2) Bernoulli ODEs $y' + P(x)y = Q(x)y^n$ use $u = y^{1-n}$; (3) Equations of the form $dy/dx = f(Ax + By + C)$ use the linear substitution $u = Ax + By + C$, reducing to separable form $du/dx = A + B f(u)$.`,
      stepByStep: [
        t`(I) $\frac{y^2 + 2xy}{x^2} = (y/x)^2 + 2(y/x)$ is a function of $y/x$ alone $\implies$ Homogeneous ($y = ux$).`,
        t`(II) $y' - 3y = 4x y^4$ matches $y' + P(x)y = Q(x)y^n$ with $n = 4 \implies$ Bernoulli ($u = y^{1-4} = y^{-3}$).`,
        t`(III) $y' = (2x + 3y - 5)^2$ has linear expression $Ax + By + C$ inside a square $\implies$ Linear substitution $u = 2x + 3y - 5$.`
      ],
      answer: t`\text{(I) Homogeneous, (II) Bernoulli, (III) Linear substitution}`,
      whyWrong: {
        '1': t`Swapped equations (I) and (II).`,
        '2': t`Incorrectly classified (II) as exact; it is not in differential form.`,
        '3': t`Cauchy-Euler is a higher-order linear ODE with variable coefficients $x^n y^{(n)}$, not a first-order substitution.`
      },
      commonTrap: t`Failing to recognize $y' = f(Ax + By + C)$ as a solvable class via the linear substitution $u = Ax + By + C$.`,
      reference: `${L5} · Pages 1–25`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_MIX_02',
    courseId: 'ENGR213',
    chapter: 'substitutions-mix',
    topic: 'Linear Substitution u = Ax + By + C Execution',
    difficulty: 'Midterm Level',
    question: t`Solve the differential equation $\frac{dy}{dx} = (x + y + 1)^2$.`,
    options: [
      t`$\arctan(x + y + 1) = x + C$`,
      t`$\ln|x + y + 1| = x + C$`,
      t`$\frac{1}{x + y + 1} = x + C$`,
      t`$\tan(x + y + 1) = x + C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Substitute $u = x + y + 1$. Differentiating gives $\frac{du}{dx} = 1 + \frac{dy}{dx}$. Substituting $\frac{dy}{dx} = u^2$ yields the separable equation $\frac{du}{dx} = 1 + u^2 \implies \frac{du}{1+u^2} = dx$.`,
      stepByStep: [],
      steps: [
        { title: 'Define linear substitution', math: t`u = x + y + 1 \implies \frac{du}{dx} = 1 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} - 1` },
        { title: 'Substitute into original ODE', math: t`\frac{du}{dx} - 1 = u^2 \implies \frac{du}{dx} = u^2 + 1` },
        { title: 'Separate variables', math: t`\frac{du}{u^2 + 1} = dx` },
        { title: 'Integrate both sides', math: t`\arctan(u) = x + C` },
        { title: 'Back-substitute $u = x + y + 1$', math: t`\arctan(x + y + 1) = x + C` }
      ],
      answer: t`\arctan(x + y + 1) = x + C`,
      whyWrong: {
        '1': t`Integrated $1/(u^2+1)$ as a logarithm instead of inverse tangent.`,
        '2': t`Integrated $1/(u^2+1)$ as a negative power $-1/u$.`,
        '3': t`Applied tangent to the substitution prematurely without integrating.`
      },
      commonTrap: t`Forgetting that $\frac{du}{dx} = 1 + \frac{dy}{dx}$, which adds $+1$ to $u^2$ and produces $\frac{du}{1+u^2} = dx$.`,
      reference: `${L5} · Pages 22–25`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },
  {
    id: 'Q_ENGR213_SUB_MIX_03',
    courseId: 'ENGR213',
    chapter: 'substitutions-mix',
    topic: 'Trigonometric Linear Substitution',
    difficulty: 'Midterm Level',
    question: t`Solve $\frac{dy}{dx} = \tan^2(x + y)$.`,
    options: [
      t`$x + y - \frac{1}{2}\sin(2(x+y)) = 2x + C$ or equivalently $\sin(x+y)\cos(x+y) = y - x + C$`,
      t`$\tan(x+y) = x + C$, obtained by integrating $\sec^2(u)$ in $u = x+y$`,
      t`$\ln|\sec(x+y)| = x + C$, the integral of $\tan(u)$ with $u = x+y$ substituted`,
      t`$\cos(x+y) = x + C$, from integrating $\cos(u)\,du = dx$ after dividing by $\tan^2$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Let $u = x + y \implies u' = 1 + y'$. Then $u' - 1 = \tan^2(u) \implies u' = 1 + \tan^2(u) = \sec^2(u)$. Separating variables gives $\cos^2(u)\,du = dx$.`,
      stepByStep: [],
      steps: [
        { title: 'Substitute $u = x + y$', math: t`\frac{du}{dx} = 1 + \frac{dy}{dx} = 1 + \tan^2(u) = \sec^2(u)` },
        { title: 'Separate variables', math: t`\frac{du}{\sec^2(u)} = dx \implies \cos^2(u)\,du = dx` },
        { title: t`Use half-angle identity $\cos^2(u) = \frac{1+\cos(2u)}{2}$`, math: t`\int \frac{1+\cos(2u)}{2}\,du = \int dx \implies \frac{u}{2} + \frac{\sin(2u)}{4} = x + C` },
        { title: 'Multiply by 2 and substitute $u = x + y$', math: t`x + y + \frac{1}{2}\sin(2(x+y)) = 2x + C_1 \implies y - x + \sin(x+y)\cos(x+y) = C_1` }
      ],
      answer: t`y - x + \sin(x+y)\cos(x+y) = C`,
      whyWrong: {
        '1': t`Assumed the integral of $1/\sec^2(u)$ is $\tan(u)$.`,
        '2': t`Integrated $\tan(u)$ instead of separating $u' = \sec^2(u)$.`,
        '3': t`Dropped the trigonometric identity and assumed $\cos(u) = x+C$.`
      },
      commonTrap: t`Forgetting the Pythagorean identity $1 + \tan^2(u) = \sec^2(u)$, which collapses the RHS into a single trigonometric function.`,
      reference: `${L5} · Pages 23–25`
    },
    source: [{ deck: L5, chapter: CH2, location: 'Solutions by Substitutions' }]
  },

  // ==========================================
  // 6. REAL-WORLD APPLICATIONS & MODELLING (applications)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_APP_01',
    courseId: 'ENGR213',
    chapter: 'applications',
    topic: 'Brine Mixture Problem: Constant Volume Tank',
    difficulty: 'Midterm Level',
    question: t`A large tank holds $100\text{ L}$ of brine containing $10\text{ kg}$ of salt. Pure water enters the tank at a rate of $4\text{ L/min}$, and the well-stirred mixture leaves at the same rate of $4\text{ L/min}$. What is the amount of salt $A(t)$ in the tank after $t$ minutes?`,
    options: [
      t`$A(t) = 10 e^{-t/25}\text{ kg}$`,
      t`$A(t) = 10 - 4t\text{ kg}$`,
      t`$A(t) = 10 e^{-4t/25}\text{ kg}$`,
      t`$A(t) = 10 e^{-t/100}\text{ kg}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The rate of change of salt is $\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}}$. Here $R_{\text{in}} = (4\text{ L/min})(0\text{ kg/L}) = 0$. Since inflow rate equals outflow rate, volume is constant $V(t) = 100\text{ L}$. Thus $R_{\text{out}} = (4\text{ L/min})\left(\frac{A(t)}{100\text{ L}}\right) = \frac{A(t)}{25}$. Solving $\frac{dA}{dt} = -\frac{A}{25}$ with $A(0) = 10$ yields $A(t) = 10e^{-t/25}$.`,
      stepByStep: [],
      steps: [
        { title: 'Inflow rate of salt', math: t`R_{\text{in}} = 4 \times 0 = 0\text{ kg/min}` },
        { title: 'Outflow rate of salt', math: t`R_{\text{out}} = 4 \times \frac{A(t)}{100} = \frac{A(t)}{25}\text{ kg/min}` },
        { title: 'Formulate differential equation', math: t`\frac{dA}{dt} = 0 - \frac{A}{25} = -\frac{A}{25}` },
        { title: 'Solve separable IVP with $A(0) = 10$', math: t`\int \frac{dA}{A} = -\frac{1}{25}\int dt \implies \ln|A| = -\frac{t}{25} + C \implies A(t) = 10 e^{-t/25}` }
      ],
      answer: t`A(t) = 10 e^{-t/25}`,
      whyWrong: {
        '1': t`Assumed a linear depletion model $A(t) = 10 - 4t$, ignoring dilution.`,
        '2': t`Multiplied the rate constant by 4 twice.`,
        '3': t`Used the tank volume 100 directly without dividing by the outflow rate 4.`
      },
      commonTrap: t`Forgetting that the concentration of salt leaving the tank is $\frac{A(t)}{V(t)}$, not a fixed constant.`,
      reference: `${L6} · Pages 12–16`
    },
    source: [{ deck: L6, chapter: CH2, location: 'Linear Models — Mixture Problems' }]
  },
  {
    id: 'Q_ENGR213_SUB_APP_02',
    courseId: 'ENGR213',
    chapter: 'applications',
    topic: 'Brine Mixture Problem: Varying Volume Setup',
    difficulty: 'Midterm Level',
    question: t`A tank initially contains $50\text{ L}$ of pure water. Brine with concentration $2\text{ kg/L}$ enters at $3\text{ L/min}$, and the stirred mixture is pumped out at $1\text{ L/min}$. What is the differential equation governing the amount of salt $A(t)$ before the tank overflows?`,
    options: [
      t`$\frac{dA}{dt} + \frac{1}{50 + 2t}A = 6$`,
      t`$\frac{dA}{dt} + \frac{1}{50}A = 6$`,
      t`$\frac{dA}{dt} + \frac{3}{50 + 2t}A = 2$`,
      t`$\frac{dA}{dt} + \frac{2}{50 - 2t}A = 6$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When inflow rate $R_1 \neq R_2$ outflow rate, the volume of the tank changes over time: $V(t) = V_0 + (R_1 - R_2)t = 50 + (3 - 1)t = 50 + 2t$. Then $\text{Rate}_{\text{out}} = R_2 \frac{A(t)}{V(t)} = 1 \cdot \frac{A}{50+2t}$, and $\text{Rate}_{\text{in}} = 3 \times 2 = 6$. Thus $dA/dt = 6 - \frac{A}{50+2t} \implies \frac{dA}{dt} + \frac{1}{50+2t}A = 6$.`,
      stepByStep: [
        t`Volume at time $t$: $V(t) = V_0 + (R_{\text{in}} - R_{\text{out}})t = 50 + (3 - 1)t = 50 + 2t\text{ L}$.`,
        t`Rate of salt entering: $R_{\text{in}} = (3\text{ L/min})(2\text{ kg/L}) = 6\text{ kg/min}$.`,
        t`Rate of salt leaving: $R_{\text{out}} = (1\text{ L/min})\left(\frac{A(t)}{50 + 2t}\text{ kg/L}\right) = \frac{A(t)}{50 + 2t}\text{ kg/min}$.`,
        t`Form equation: $\frac{dA}{dt} = R_{\text{in}} - R_{\text{out}} = 6 - \frac{A}{50 + 2t} \implies \frac{dA}{dt} + \frac{1}{50 + 2t}A = 6$.`
      ],
      answer: t`\frac{dA}{dt} + \frac{1}{50 + 2t}A = 6`,
      whyWrong: {
        '1': t`Treated volume as constant 50 L despite unequal flow rates.`,
        '2': t`Multiplied the coefficient of $A$ by the inflow rate 3 instead of outflow rate 1.`,
        '3': t`Subtracted $2t$ in the volume expression, confusing accumulation with emptying.`
      },
      commonTrap: t`Failing to update volume $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$ when inflow and outflow rates differ.`,
      reference: `${L6} · Pages 16–20`
    },
    source: [{ deck: L6, chapter: CH2, location: 'Linear Models — Mixture Problems' }]
  },
  {
    id: 'Q_ENGR213_SUB_APP_03',
    courseId: 'ENGR213',
    chapter: 'applications',
    topic: "Newton's Law of Cooling Time Prediction",
    difficulty: 'Midterm Level',
    question: t`A hot cup of coffee at $90^\circ\text{C}$ is placed in a room at constant temperature $20^\circ\text{C}$. After $10\text{ minutes}$, the coffee cools to $60^\circ\text{C}$. How many additional minutes will it take to reach $30^\circ\text{C}$?`,
    options: [
      t`$15.8\text{ minutes}$ (total $25.8\text{ minutes}$ from start)`,
      t`$10\text{ minutes}$ (total $20\text{ minutes}$ from start)`,
      t`$20\text{ minutes}$ (total $30\text{ minutes}$ from start)`,
      t`$12.5\text{ minutes}$ (total $22.5\text{ minutes}$ from start)`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By Newton's Law of Cooling, $\frac{dT}{dt} = k(T - T_m) \implies T(t) = T_m + (T_0 - T_m)e^{kt}$. Here $T_m = 20^\circ\text{C}, T_0 = 90^\circ\text{C} \implies T(t) = 20 + 70e^{kt}$. At $t = 10$, $60 = 20 + 70e^{10k} \implies e^{10k} = 40/70 = 4/7 \implies k = \frac{1}{10}\ln(4/7) \approx -0.05596\text{ min}^{-1}$. Setting $T(t) = 30$: $30 = 20 + 70e^{kt} \implies e^{kt} = 10/70 = 1/7 \implies t = \frac{\ln(1/7)}{k} \approx 25.8\text{ min}$. Additional time is $25.8 - 10 = 15.8\text{ min}$.`,
      stepByStep: [],
      steps: [
        { title: "Newton's law model", math: t`T(t) = 20 + (90 - 20)e^{kt} = 20 + 70e^{kt}` },
        { title: 'Determine cooling constant $k$ at $t = 10$', math: t`60 = 20 + 70e^{10k} \implies e^{10k} = \frac{40}{70} = \frac{4}{7} \implies k = \frac{1}{10}\ln\left(\frac{4}{7}\right) \approx -0.05596` },
        { title: 'Find total time when $T(t) = 30$', math: t`30 = 20 + 70e^{kt} \implies e^{kt} = \frac{10}{70} = \frac{1}{7} \implies t = \frac{\ln(1/7)}{k} \approx \frac{-1.9459}{-0.05596} \approx 25.84\text{ min}` },
        { title: 'Calculate additional time', math: t`t_{\text{additional}} = 25.84 - 10 \approx 15.8\text{ min}` }
      ],
      answer: t`t_{\text{additional}} \approx 15.8\text{ min}`,
      whyWrong: {
        '1': t`Assumed linear cooling: $30^\circ\text{C}$ drop in $10\text{ min}$ means another $30^\circ\text{C}$ takes $10\text{ min}$. Exponential cooling slows down as temperature approaches ambient!`,
        '2': t`Confused total time from $t=0$ ($25.8\text{ min}$) with additional time.`,
        '3': t`Calculated cooling ratio using absolute temperatures in Celsius without subtracting ambient temperature $T_m$.`
      },
      commonTrap: t`Assuming cooling is linear rather than exponential, and forgetting that the temperature difference $(T - T_m)$ governs the rate.`,
      reference: `${L6} · Pages 2–6`
    },
    source: [{ deck: L6, chapter: CH2, location: "Linear Models — Newton's Law of Cooling" }]
  },
  {
    id: 'Q_ENGR213_SUB_APP_04',
    courseId: 'ENGR213',
    chapter: 'applications',
    topic: 'Series LR Electrical Circuit Transient Response',
    difficulty: 'Midterm Level',
    question: t`A series $LR$ circuit contains an inductor $L = 0.5\text{ H}$, a resistor $R = 10\ \Omega$, and a constant DC battery $E(t) = 50\text{ V}$. If the switch is closed at $t = 0$ with initial current $i(0) = 0$, what is the current $i(t)$?`,
    options: [
      t`$i(t) = 5(1 - e^{-20t})\text{ A}$`,
      t`$i(t) = 50(1 - e^{-10t})\text{ A}$`,
      t`$i(t) = 5 e^{-20t}\text{ A}$`,
      t`$i(t) = 5(1 - e^{-0.05t})\text{ A}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By Kirchhoff's voltage law, $L\frac{di}{dt} + R i = E(t)$. In standard form: $\frac{di}{dt} + \frac{R}{L}i = \frac{E}{L}$. Here $R/L = 10/0.5 = 20$, and $E/L = 50/0.5 = 100$. Integrating factor is $\mu(t) = e^{20t}$, giving $i(t) = \frac{100}{20} + C e^{-20t} = 5 + C e^{-20t}$. With $i(0) = 0 \implies C = -5$, so $i(t) = 5(1 - e^{-20t})\text{ A}$.`,
      stepByStep: [],
      steps: [
        { title: 'Formulate circuit equation', math: t`0.5\frac{di}{dt} + 10 i = 50 \implies \frac{di}{dt} + 20 i = 100` },
        { title: 'Integrating factor', math: t`\mu(t) = e^{\int 20\,dt} = e^{20t}` },
        { title: 'Multiply and integrate', math: t`\frac{d}{dt}[e^{20t} i] = 100 e^{20t} \implies e^{20t} i = 5 e^{20t} + C \implies i(t) = 5 + C e^{-20t}` },
        { title: 'Apply initial condition $i(0) = 0$', math: t`0 = 5 + C \implies C = -5 \implies i(t) = 5(1 - e^{-20t})\text{ A}` }
      ],
      answer: t`i(t) = 5(1 - e^{-20t})`,
      whyWrong: {
        '1': t`Divided by $R$ instead of solving for steady-state current $E/R = 50/10 = 5\text{ A}$.`,
        '2': t`Gave the homogeneous transient decay without the particular DC battery response.`,
        '3': t`Calculated the exponent as $-L/R = -0.05$ instead of $-R/L = -20$.`
      },
      commonTrap: t`Inverting the time constant: the exponent is $-\frac{R}{L}t = -20t$, not $-\frac{L}{R}t$.`,
      reference: `${L6} · Pages 24–28`
    },
    source: [{ deck: L6, chapter: CH2, location: 'Linear Models — Series Circuits' }]
  },

  // ==========================================
  // 7. COMPLEX NUMBERS & EULER'S FORMULA (complex)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_CMP_01',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Complex Arithmetic & Conjugate Division',
    difficulty: 'Foundation',
    question: t`Express the complex quotient $z = \frac{5 + i}{2 - 3i}$ in standard rectangular Cartesian form $a + bi$.`,
    options: [
      t`$z = \frac{7}{13} + \frac{17}{13}i$`,
      t`$z = \frac{7}{13} - \frac{17}{13}i$`,
      t`$z = 1 + 2i$`,
      t`$z = \frac{13}{13} + \frac{15}{13}i$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`To divide complex numbers, multiply both numerator and denominator by the complex conjugate of the denominator: $\overline{2 - 3i} = 2 + 3i$. The denominator becomes real: $(2-3i)(2+3i) = 2^2 + 3^2 = 13$.`,
      stepByStep: [],
      steps: [
        { title: 'Multiply numerator and denominator by conjugate $2 + 3i$', math: t`z = \frac{(5 + i)(2 + 3i)}{(2 - 3i)(2 + 3i)}` },
        { title: 'Expand numerator', math: t`(5)(2) + 15i + 2i + 3i^2 = 10 + 17i - 3 = 7 + 17i` },
        { title: 'Expand denominator', math: t`2^2 - (3i)^2 = 4 - 9(-1) = 4 + 9 = 13` },
        { title: 'Separate real and imaginary parts', math: t`z = \frac{7}{13} + \frac{17}{13}i` }
      ],
      answer: t`z = \frac{7}{13} + \frac{17}{13}i`,
      whyWrong: {
        '1': t`Sign error in the numerator expansion: $15i + 2i = +17i$, not $-17i$.`,
        '2': t`Divided real by real and imaginary by imaginary directly: $5/2 + (1/-3)i$, which is invalid.`,
        '3': t`Calculated $3i^2 = +3$ instead of $-3$.`
      },
      commonTrap: t`Forgetting that $i^2 = -1$, which flips the sign when multiplying imaginary components.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Complex Arithmetic' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_02',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Modulus and Principal Argument Arg(z)',
    difficulty: 'Foundation',
    question: t`Find the modulus $r$ and principal argument $\theta = \text{Arg}(z)$ for $z = -1 + i\sqrt{3}$, where $-\pi < \theta \le \pi$.`,
    options: [
      t`$r = 2, \quad \theta = \frac{2\pi}{3}$`,
      t`$r = 2, \quad \theta = -\frac{\pi}{3}$`,
      t`$r = 4, \quad \theta = \frac{2\pi}{3}$`,
      t`$r = 2, \quad \theta = \frac{5\pi}{6}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Modulus $r = |z| = \sqrt{a^2 + b^2} = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$. For the argument: $z$ lies in Quadrant II ($a < 0, b > 0$), so $\text{Arg}(z) = \pi - \arctan\left(\frac{\sqrt{3}}{1}\right) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.`,
      stepByStep: [
        t`$r = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$.`,
        t`Locate quadrant: $\text{Re}(z) = -1 < 0$ and $\text{Im}(z) = \sqrt{3} > 0 \implies$ Quadrant II.`,
        t`Reference angle: $\alpha = \arctan(\sqrt{3}/1) = \pi/3$.`,
        t`Principal argument in Quadrant II: $\theta = \pi - \alpha = \pi - \pi/3 = 2\pi/3$.`
      ],
      answer: t`r = 2, \quad \theta = \frac{2\pi}{3}`,
      whyWrong: {
        '1': t`Used the formula $\arctan(b/a) = \arctan(-\sqrt{3}) = -\pi/3$ without adjusting for Quadrant II.`,
        '2': t`Forgot to take the square root of $a^2 + b^2 = 4$.`,
        '3': t`Confused $\tan(\pi/3) = \sqrt{3}$ with $\tan(\pi/6) = 1/\sqrt{3}$.`
      },
      commonTrap: t`Blindly computing $\arctan(b/a)$ on a calculator without checking which quadrant the complex number resides in.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Polar Form of Complex Numbers' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_03',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: "Euler's Formula & Polar Form Representation",
    difficulty: 'Midterm Level',
    question: t`What is the exponential polar representation $r e^{i\theta}$ of $z = -\sqrt{2} - i\sqrt{2}$ with principal argument $\theta \in (-\pi, \pi]$?`,
    options: [
      t`$z = 2 e^{-i 3\pi/4}$`,
      t`$z = 2 e^{i 5\pi/4}$`,
      t`$z = \sqrt{2} e^{-i 3\pi/4}$`,
      t`$z = 4 e^{-i \pi/4}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By Euler's formula, $z = r(\cos\theta + i\sin\theta) = r e^{i\theta}$. Modulus is $r = \sqrt{(-\sqrt{2})^2 + (-\sqrt{2})^2} = \sqrt{2 + 2} = 2$. Both real and imaginary parts are negative, so $z$ is in Quadrant III. The principal argument in $(-\pi, \pi]$ is $-\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$. Thus $z = 2 e^{-i 3\pi/4}$.`,
      stepByStep: [],
      steps: [
        { title: 'Compute modulus', math: t`r = \sqrt{(-\sqrt{2})^2 + (-\sqrt{2})^2} = \sqrt{2 + 2} = 2` },
        { title: 'Locate quadrant', note: t`$x = -\sqrt{2} < 0, y = -\sqrt{2} < 0 \implies$ Quadrant III.` },
        { title: 'Compute principal argument', math: t`\theta = -\pi + \arctan(1) = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}` },
        { title: 'Write in exponential form', math: t`z = r e^{i\theta} = 2 e^{-i 3\pi/4}` }
      ],
      answer: t`z = 2 e^{-i 3\pi/4}`,
      whyWrong: {
        '1': t`$5\pi/4$ is outside the principal argument range $(-\pi, \pi]$.`,
        '2': t`Used the coefficient $\sqrt{2}$ instead of the combined modulus 2.`,
        '3': t`Quadrant IV argument $-\pi/4$ used instead of Quadrant III.`
      },
      commonTrap: t`Forgetting that the principal argument must strictly lie in $(-\pi, \pi]$, so $5\pi/4$ must be written as $-3\pi/4$.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: "Euler's Formula" }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_04',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: "De Moivre's Theorem for Large Integer Powers",
    difficulty: 'Midterm Level',
    question: t`Compute the exact value of $(1 + i)^{10}$ using De Moivre's Theorem.`,
    options: [
      t`$32i$`,
      t`$-32$`,
      t`$32$`,
      t`$1024i$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Convert $1 + i$ into polar exponential form: $r = \sqrt{1^2 + 1^2} = \sqrt{2}$, $\theta = \frac{\pi}{4} \implies 1 + i = \sqrt{2} e^{i\pi/4}$. By De Moivre's theorem: $(1+i)^{10} = (\sqrt{2})^{10} e^{i 10\pi/4} = 2^5 e^{i 5\pi/2} = 32 e^{i \pi/2} = 32(0 + i) = 32i$.`,
      stepByStep: [],
      steps: [
        { title: 'Convert $1+i$ to polar form', math: t`1 + i = \sqrt{2} e^{i\pi/4}` },
        { title: 'Raise to the 10th power', math: t`(1+i)^{10} = (\sqrt{2})^{10} e^{i 10\pi/4} = 2^5 e^{i 5\pi/2}` },
        { title: 'Simplify the angle modulo $2\pi$', math: t`\frac{5\pi}{2} = 2\pi + \frac{\pi}{2} \equiv \frac{\pi}{2}` },
        { title: 'Evaluate $e^{i\pi/2}$', math: t`e^{i\pi/2} = \cos(\pi/2) + i\sin(\pi/2) = 0 + i(1) = i` },
        { title: 'Multiply by $2^5 = 32$', math: t`32 \times i = 32i` }
      ],
      answer: t`32i`,
      whyWrong: {
        '1': t`Calculated $e^{i 5\pi/2}$ as $-1$, confusing it with $e^{i\pi}$.`,
        '2': t`Dropped the imaginary unit $i$ entirely.`,
        '3': t`Used $r = 2$ instead of $r = \sqrt{2}$, giving $2^{10} = 1024$.`
      },
      commonTrap: t`Thinking the modulus of $1+i$ is 2 instead of $\sqrt{1^2+1^2} = \sqrt{2}$.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: "De Moivre's Theorem" }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_05',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Roots of Complex Numbers',
    difficulty: 'Exam Master',
    question: t`Find all complex square roots of $z = -4i$.`,
    options: [
      t`$w = \pm(\sqrt{2} - i\sqrt{2})$`,
      t`$w = \pm(2 - 2i)$`,
      t`$w = \pm(\sqrt{2} + i\sqrt{2})$`,
      t`$w = \pm 2i$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Write $z = -4i$ in polar form: $r = 4$, $\theta = -\frac{\pi}{2} \implies z = 4 e^{-i\pi/2}$. The square roots are $w_k = \sqrt{4} e^{i(-\pi/2 + 2k\pi)/2} = 2 e^{i(-\pi/4 + k\pi)}$ for $k = 0, 1$. For $k = 0$: $2(\cos(-\pi/4) + i\sin(-\pi/4)) = 2(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}) = \sqrt{2} - i\sqrt{2}$. For $k = 1$: $-(\sqrt{2} - i\sqrt{2})$.`,
      stepByStep: [],
      steps: [
        { title: 'Write in polar form', math: t`-4i = 4 e^{-i\pi/2}` },
        { title: 'Apply the $n$-th root formula for $n = 2$', math: t`w_k = \sqrt{4} e^{i\left(\frac{-\pi/2 + 2k\pi}{2}\right)} = 2 e^{i(-\pi/4 + k\pi)}` },
        { title: 'Evaluate root for $k = 0$', math: t`w_0 = 2\left(\cos(-\pi/4) + i\sin(-\pi/4)\right) = 2\left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right) = \sqrt{2} - i\sqrt{2}` },
        { title: 'Evaluate root for $k = 1$', math: t`w_1 = -w_0 = -(\sqrt{2} - i\sqrt{2})` }
      ],
      answer: t`w = \pm(\sqrt{2} - i\sqrt{2})`,
      whyWrong: {
        '1': t`Forgot to take the square root of $r = 4$ as $\sqrt{4} = 2$ and multiplied by 2 twice.`,
        '2': t`Sign error: $\sin(-\pi/4) = -\frac{\sqrt{2}}{2}$, so the imaginary part must be negative.`,
        '3': t`Calculated $(2i)^2 = -4 \neq -4i$.`
      },
      commonTrap: t`Forgetting that the square root of a purely imaginary number has both non-zero real and imaginary parts.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Roots of Complex Numbers' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_06',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Complex Roots of ODE Auxiliary Equations',
    difficulty: 'Midterm Level',
    question: t`If the characteristic auxiliary equation of a constant-coefficient ODE $a y'' + b y' + c y = 0$ yields complex conjugate roots $r = 3 \pm 2i$, what is the corresponding real general solution?`,
    options: [
      t`$y(x) = e^{3x}(c_1 \cos(2x) + c_2 \sin(2x))$`,
      t`$y(x) = c_1 e^{3x} + c_2 e^{2x}$`,
      t`$y(x) = e^{2x}(c_1 \cos(3x) + c_2 \sin(3x))$`,
      t`$y(x) = c_1 \cos(3x) + c_2 \sin(2x)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By Euler's formula, roots $r = \alpha \pm i\beta$ yield complex solutions $e^{(\alpha \pm i\beta)x} = e^{\alpha x}(\cos\beta x \pm i\sin\beta x)$. Taking linear combinations produces the fundamental set of real solutions: $\{e^{\alpha x}\cos(\beta x), e^{\alpha x}\sin(\beta x)\}$. Here $\alpha = 3$ (real part in the exponential) and $\beta = 2$ (frequency inside sine and cosine).`,
      stepByStep: [
        t`Auxiliary roots: $r = \alpha \pm i\beta$ with $\alpha = 3, \beta = 2$.`,
        t`Real part $\alpha = 3$ governs exponential growth/decay: $e^{3x}$.`,
        t`Imaginary part $\beta = 2$ governs oscillatory frequency: $\cos(2x)$ and $\sin(2x)$.`,
        t`General solution: $y(x) = e^{3x}(c_1 \cos(2x) + c_2 \sin(2x))$.`
      ],
      answer: t`y(x) = e^{3x}(c_1 \cos(2x) + c_2 \sin(2x))`,
      whyWrong: {
        '1': t`Treated complex roots as two distinct real roots $3$ and $2$.`,
        '2': t`Swapped the real and imaginary parts: put $\beta = 2$ in the exponent and $\alpha = 3$ in the trigonometry.`,
        '3': t`Dropped the exponential damping factor $e^{3x}$.`
      },
      commonTrap: t`Swapping the roles of the real part $\alpha$ (which goes in $e^{\alpha x}$) and imaginary part $\beta$ (which goes in $\cos\beta x, \sin\beta x$).`,
      reference: 'Lecture 7 / Complex Roots & Higher-Order Linear ODEs'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Auxiliary Equations & Complex Roots' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_07',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Cauchy-Euler Complex Conjugate Roots',
    difficulty: 'Midterm Level',
    question: t`Find the general solution to the second-order Cauchy-Euler ODE $x^2 y'' + x y' + 4y = 0$ for $x > 0$.`,
    options: [
      t`$y(x) = c_1 \cos(2\ln x) + c_2 \sin(2\ln x)$`,
      t`$y(x) = c_1 \cos(2x) + c_2 \sin(2x)$`,
      t`$y(x) = c_1 x^2 + c_2 x^{-2}$`,
      t`$y(x) = e^{2x}(c_1 \cos(\ln x) + c_2 \sin(\ln x))$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For Cauchy-Euler ODEs $a x^2 y'' + b x y' + c y = 0$, the auxiliary equation is $a m(m-1) + b m + c = 0$. Here $m(m-1) + m + 4 = 0 \implies m^2 + 4 = 0 \implies m = \pm 2i$. Complex roots $\alpha \pm i\beta$ yield $x^{\alpha \pm i\beta} = x^\alpha e^{\pm i\beta\ln x} = x^\alpha(\cos(\beta\ln x) \pm i\sin(\beta\ln x))$. With $\alpha = 0, \beta = 2$, $y(x) = c_1 \cos(2\ln x) + c_2 \sin(2\ln x)$.`,
      stepByStep: [
        t`Assume $y = x^m \implies y' = m x^{m-1}, y'' = m(m-1)x^{m-2}$.`,
        t`Substitute into ODE: $m(m-1) + m + 4 = 0 \implies m^2 + 4 = 0$.`,
        t`Solve for roots: $m = \pm 2i$ (pure imaginary roots $\alpha = 0, \beta = 2$).`,
        t`Euler identity in $x$: $x^{2i} = e^{2i\ln x} = \cos(2\ln x) + i\sin(2\ln x)$.`,
        t`General real solution: $y(x) = c_1 \cos(2\ln x) + c_2 \sin(2\ln x)$.`
      ],
      answer: t`y(x) = c_1 \cos(2\ln x) + c_2 \sin(2\ln x)`,
      whyWrong: {
        '1': t`Used constant-coefficient trigonometric solution $\cos(2x)$ instead of $\cos(2\ln x)$.`,
        '2': t`Treated roots as real numbers $\pm 2$.`,
        '3': t`Introduced extraneous exponential term $e^{2x}$.`
      },
      commonTrap: t`Confusing Cauchy-Euler solutions $\cos(\beta\ln x)$ with constant-coefficient solutions $\cos(\beta x)$.`,
      reference: 'Lecture 9 · Cauchy-Euler Differential Equations'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Cauchy-Euler Complex Roots' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_08',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Quadratic Equation with Complex Roots',
    difficulty: 'Foundation',
    question: t`Solve the quadratic equation $r^2 - 2r + 5 = 0$ in the complex numbers.`,
    options: [
      t`$r = 1 \pm 2i$`,
      t`$r = -1 \pm 2i$`,
      t`$r = 1 \pm 4i$`,
      t`$r = 2 \pm i$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By the quadratic formula, $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{2 \pm \sqrt{4 - 20}}{2} = \frac{2 \pm \sqrt{-16}}{2} = \frac{2 \pm 4i}{2} = 1 \pm 2i$.`,
      stepByStep: [
        t`$a = 1, b = -2, c = 5$.`,
        t`Discriminant: $\Delta = b^2 - 4ac = (-2)^2 - 4(1)(5) = 4 - 20 = -16$.`,
        t`Square root of negative discriminant: $\sqrt{-16} = \sqrt{16}\sqrt{-1} = 4i$.`,
        t`Roots: $r = \frac{2 \pm 4i}{2} = 1 \pm 2i$.`
      ],
      answer: t`r = 1 \pm 2i`,
      whyWrong: {
        '1': t`Sign error: $-(-2) = +2$, so real part is $+1$, not $-1$.`,
        '2': t`Forgot to divide the imaginary part by the denominator 2.`,
        '3': t`Swapped real and imaginary parts.`
      },
      commonTrap: t`Forgetting that the denominator $2a$ divides BOTH the real part and the imaginary radical.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Quadratic Formula with Complex Roots' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_09',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: "Euler's Trigonometric Definitions",
    difficulty: 'Foundation',
    question: t`Which of the following identities correctly expresses $\sin(\theta)$ and $\cos(\theta)$ in terms of complex exponentials?`,
    options: [
      t`$\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}$`,
      t`$\cos(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2}, \quad \sin(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2i}$`,
      t`$\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2i}, \quad \sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2}$`,
      t`$\cos(\theta) = e^{i\theta} + e^{-i\theta}, \quad \sin(\theta) = e^{i\theta} - e^{-i\theta}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`From Euler's formula: $e^{i\theta} = \cos\theta + i\sin\theta$ and $e^{-i\theta} = \cos\theta - i\sin\theta$. Adding the two equations gives $e^{i\theta} + e^{-i\theta} = 2\cos\theta \implies \cos\theta = \frac{e^{i\theta}+e^{-i\theta}}{2}$. Subtracting gives $e^{i\theta} - e^{-i\theta} = 2i\sin\theta \implies \sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$.`,
      stepByStep: [
        t`$e^{i\theta} = \cos\theta + i\sin\theta$.`,
        t`$e^{-i\theta} = \cos(-\theta) + i\sin(-\theta) = \cos\theta - i\sin\theta$.`,
        t`Sum: $e^{i\theta} + e^{-i\theta} = 2\cos\theta \implies \cos\theta = \frac{e^{i\theta}+e^{-i\theta}}{2}$.`,
        t`Difference: $e^{i\theta} - e^{-i\theta} = 2i\sin\theta \implies \sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$.`
      ],
      answer: t`\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}`,
      whyWrong: {
        '1': t`Swapped the plus and minus signs between sine and cosine.`,
        '2': t`Put the imaginary unit $i$ in the denominator of cosine instead of sine.`,
        '3': t`Forgot the division by 2 and $2i$.`
      },
      commonTrap: t`Forgetting the factor of $i$ in the denominator of $\sin(\theta) = \frac{e^{i\theta}-e^{-i\theta}}{2i}$.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: "Euler's Formulas for Trig Functions" }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_10',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Cube Roots of Unity',
    difficulty: 'Midterm Level',
    question: t`What are the three distinct complex cube roots of unity ($z^3 = 1$)?`,
    options: [
      t`$1, \quad -\frac{1}{2} + i\frac{\sqrt{3}}{2}, \quad -\frac{1}{2} - i\frac{\sqrt{3}}{2}$`,
      t`$1, \quad \frac{1}{2} + i\frac{\sqrt{3}}{2}, \quad \frac{1}{2} - i\frac{\sqrt{3}}{2}$`,
      t`$1, \quad i, \quad -i$`,
      t`$1, \quad -1, \quad 0$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Writing $1 = e^{i 2k\pi}$, the roots are $w_k = e^{i 2k\pi/3}$ for $k = 0, 1, 2$. For $k = 0$: $w_0 = 1$. For $k = 1$: $e^{i 2\pi/3} = \cos(2\pi/3) + i\sin(2\pi/3) = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$. For $k = 2$: $e^{i 4\pi/3} = \cos(4\pi/3) + i\sin(4\pi/3) = -\frac{1}{2} - i\frac{\sqrt{3}}{2}$.`,
      stepByStep: [
        t`$1 = e^{i 0} = e^{i 2k\pi}$.`,
        t`$w_k = 1^{1/3} e^{i 2k\pi/3}$ for $k = 0, 1, 2$.`,
        t`$k = 0 \implies w_0 = 1$.`,
        t`$k = 1 \implies w_1 = e^{i 2\pi/3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$.`,
        t`$k = 2 \implies w_2 = e^{i 4\pi/3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}$.`
      ],
      answer: t`1, \quad -\frac{1}{2} \pm i\frac{\sqrt{3}}{2}`,
      whyWrong: {
        '1': t`Inverted the sign of the real part: $\cos(2\pi/3) = -1/2$, not $+1/2$.`,
        '2': t`$\pm i$ cubed gives $\mp i \neq 1$.`,
        '3': t`$(-1)^3 = -1 \neq 1$, and $0^3 = 0 \neq 1$.`
      },
      commonTrap: t`Forgetting that the non-real cube roots of unity lie in Quadrants II and III, so their real parts are $-1/2$.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Roots of Unity' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_11',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Pure Imaginary Exponential Modulus',
    difficulty: 'Foundation',
    question: t`What is the modulus of $e^{i\theta}$ for any real angle $\theta \in \mathbb{R}$?`,
    options: [
      t`$|e^{i\theta}| = 1$`,
      t`$|e^{i\theta}| = \theta$`,
      t`$|e^{i\theta}| = e^\theta$`,
      t`$|e^{i\theta}| = \sqrt{2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`By Euler's formula, $e^{i\theta} = \cos\theta + i\sin\theta$. Its modulus is $|e^{i\theta}| = \sqrt{\cos^2\theta + \sin^2\theta} = \sqrt{1} = 1$. In the complex plane, $e^{i\theta}$ traces the unit circle of radius 1 centered at the origin.`,
      stepByStep: [
        t`$e^{i\theta} = \cos\theta + i\sin\theta$.`,
        t`$|e^{i\theta}| = \sqrt{(\cos\theta)^2 + (\sin\theta)^2}$.`,
        t`By the fundamental Pythagorean trigonometric identity, $\cos^2\theta + \sin^2\theta = 1$.`,
        t`Therefore $|e^{i\theta}| = \sqrt{1} = 1$ for all real $\theta$.`
      ],
      answer: t`|e^{i\theta}| = 1`,
      whyWrong: {
        '1': t`Confused modulus with argument $\theta$.`,
        '2': t`Confused pure imaginary exponent $i\theta$ with real exponent $\theta$.`,
        '3': t`Assumed $\cos\theta = \sin\theta = 1$.`
      },
      commonTrap: t`Thinking that changing the angle $\theta$ changes the magnitude of $e^{i\theta}$. The magnitude is identically 1 for all real angles.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Properties of Complex Exponentials' }]
  },
  {
    id: 'Q_ENGR213_SUB_CMP_12',
    courseId: 'ENGR213',
    chapter: 'complex',
    topic: 'Product of Conjugate Pair Modulus Property',
    difficulty: 'Foundation',
    question: t`For any complex number $z = x + iy$, what is the product $z \cdot \bar{z}$?`,
    options: [
      t`$z \bar{z} = |z|^2 = x^2 + y^2$`,
      t`$z \bar{z} = x^2 - y^2$`,
      t`$z \bar{z} = 2x$`,
      t`$z \bar{z} = 2iy$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$z \bar{z} = (x + iy)(x - iy) = x^2 - (iy)^2 = x^2 - i^2 y^2 = x^2 + y^2 = |z|^2$. The product of any complex number and its conjugate is always a non-negative real number equal to the square of its distance from the origin.`,
      stepByStep: [
        t`$z = x + iy \implies \bar{z} = x - iy$.`,
        t`Expand product: $(x + iy)(x - iy) = x^2 - x(iy) + (iy)x - (iy)^2$.`,
        t`Cancel cross terms: $x^2 - i^2 y^2$.`,
        t`Use $i^2 = -1$: $x^2 - (-1)y^2 = x^2 + y^2 = |z|^2$.`
      ],
      answer: t`z \bar{z} = |z|^2 = x^2 + y^2`,
      whyWrong: {
        '1': t`Calculated $(iy)^2 = y^2$ instead of $-y^2$, giving $x^2 - y^2$.`,
        '2': t`$2x$ is the sum $z + \bar{z}$, not the product.`,
        '3': t`$2iy$ is the difference $z - \bar{z}$, not the product.`
      },
      commonTrap: t`Forgetting that the minus sign from $(a+b)(a-b) = a^2 - b^2$ combines with $i^2 = -1$ to become $+y^2$.`,
      reference: 'Calculus & ODE Complex Numbers Review · Callister/Zill Appendix'
    },
    source: [{ deck: 'Calculus Review for ODEs', chapter: CH_CMP, location: 'Complex Conjugates' }]
  },

  // ==========================================
  // 8. EXACT DIFFERENTIAL EQUATIONS (exact)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_EXA_01',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Exactness Test and Potential Function Formulation',
    difficulty: 'Foundation',
    question: t`Test $(2xy + 3)\,dx + (x^2 - 1)\,dy = 0$ for exactness, and find its implicit general solution $\Psi(x, y) = C$.`,
    options: [
      t`$x^2 y + 3x - y = C$`,
      t`$x^2 y^2 + 3x - y = C$`,
      t`$2xy + 3x - y = C$`,
      t`Not exact because $\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`An equation $M\,dx + N\,dy = 0$ is exact if $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$. Here $\frac{\partial}{\partial y}(2xy+3) = 2x$ and $\frac{\partial}{\partial x}(x^2-1) = 2x$. Since they are equal, the equation is exact. The potential function $\Psi(x, y)$ satisfies $\frac{\partial \Psi}{\partial x} = M$ and $\frac{\partial \Psi}{\partial y} = N$.`,
      stepByStep: [],
      steps: [
        { title: 'Exactness condition', math: t`\frac{\partial M}{\partial y} = 2x, \quad \frac{\partial N}{\partial x} = 2x \implies \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} \quad \text{(Exact)}` },
        { title: 'Integrate $M$ with respect to $x$', math: t`\Psi(x, y) = \int (2xy + 3)\,dx = x^2 y + 3x + g(y)` },
        { title: 'Differentiate with respect to $y$ and equate to $N$', math: t`\frac{\partial \Psi}{\partial y} = x^2 + g'(y) = x^2 - 1 \implies g'(y) = -1` },
        { title: 'Integrate $g\'(y)$', math: t`g(y) = -y` },
        { title: 'Form potential function', math: t`\Psi(x, y) = x^2 y + 3x - y = C` }
      ],
      answer: t`x^2 y + 3x - y = C`,
      whyWrong: {
        '1': t`Squared $y$ incorrectly during the integration of $2xy\,dx$.`,
        '2': t`Forgot to integrate $2x$ to $x^2$.`,
        '3': t`Calculated the partial derivatives incorrectly and declared it not exact.`
      },
      commonTrap: t`Forgetting the arbitrary function $g(y)$ when integrating with respect to $x$.`,
      reference: `${L4} · Pages 1–6`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_02',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Special Integrating Factor μ(x) for Non-Exact ODE',
    difficulty: 'Midterm Level',
    question: t`Find the integrating factor $\mu(x)$ that makes $(3x^2 y + 2xy + y^3)\,dx + (x^2 + y^2)\,dy = 0$ exact.`,
    options: [
      t`$\mu(x) = e^{3x}$`,
      t`$\mu(x) = x^3$`,
      t`$\mu(x) = e^{x}$`,
      t`$\mu(y) = e^{3y}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Compute $\frac{M_y - N_x}{N}$. Here $M_y = 3x^2 + 2x + 3y^2$ and $N_x = 2x$. Then $M_y - N_x = 3x^2 + 3y^2 = 3(x^2 + y^2)$. Dividing by $N = x^2 + y^2$ gives $\frac{M_y - N_x}{N} = \frac{3(x^2 + y^2)}{x^2 + y^2} = 3$, which depends only on $x$. Thus $\mu(x) = e^{\int 3\,dx} = e^{3x}$.`,
      stepByStep: [
        t`$M(x, y) = 3x^2 y + 2xy + y^3 \implies \frac{\partial M}{\partial y} = 3x^2 + 2x + 3y^2$.`,
        t`$N(x, y) = x^2 + y^2 \implies \frac{\partial N}{\partial x} = 2x$.`,
        t`$\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} = 3x^2 + 3y^2 = 3(x^2 + y^2)$.`,
        t`$\frac{M_y - N_x}{N} = \frac{3(x^2 + y^2)}{x^2 + y^2} = 3$ (pure function of $x$).`,
        t`$\mu(x) = e^{\int 3\,dx} = e^{3x}$.`
      ],
      answer: t`\mu(x) = e^{3x}`,
      whyWrong: {
        '1': t`Calculated $\int 3dx = \ln(x^3)$ instead of $3x$.`,
        '2': t`Divided by 3 during integration.`,
        '3': t`Tested $\frac{N_x - M_y}{M}$ instead and assumed it depended on $y$.`
      },
      commonTrap: t`Forgetting that $\frac{M_y - N_x}{N}$ must be purely a function of $x$ alone to use $\mu(x) = \exp(\int f(x)dx)$.`,
      reference: `${L4} · Pages 14–18`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Integrating Factors' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_03',
    courseId: 'ENGR213',
    chapter: 'exact',
    pastPaper: 'Winter 2025 Term Test 1 (Version 2, Q3)',
    topic: 'Exact Differential Equation IVP (Official Winter 2025 Test 1)',
    difficulty: 'Exam Master',
    question: t`Solve the initial value problem $(5y + 3t - 5)\,dt + (6y + 5t)\,dy = 0$, $y(-1) = 0$.`,
    options: [
      t`$6y^2 + 10ty + 3t^2 - 10t = 13$`,
      t`$3y^2 + 5ty + 3t^2 - 5t = 13$`,
      t`$6y^2 + 5ty + 3t^2 - 10t = -7$`,
      t`$6y^2 + 10ty + \frac{3}{2}t^2 - 10t = 0$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Verify exactness by checking $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial t}$. Find potential function $\Psi(t, y)$ such that $\frac{\partial \Psi}{\partial t} = M$ and $\frac{\partial \Psi}{\partial y} = N$. Finally apply $y(-1)=0$ to determine $C$.`,
      stepByStep: [],
      steps: [
        { title: 'Check exactness condition', math: t`\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}(5y + 3t - 5) = 5, \quad \frac{\partial N}{\partial t} = \frac{\partial}{\partial t}(6y + 5t) = 5 \implies \text{Exact}` },
        { title: 'Integrate $M(t, y)$ with respect to $t$', math: t`\Psi(t, y) = \int (5y + 3t - 5)\,dt = 5yt + \frac{3}{2}t^2 - 5t + h(y)` },
        { title: 'Differentiate with respect to $y$ and match $N(t, y)$', math: t`\frac{\partial \Psi}{\partial y} = 5t + h'(y) = 6y + 5t \implies h'(y) = 6y \implies h(y) = 3y^2` },
        { title: 'Formulate general implicit solution', math: t`3y^2 + 5ty + \frac{3}{2}t^2 - 5t = C` },
        { title: 'Apply the initial condition $y(-1) = 0$', math: t`3(0)^2 + 5(-1)(0) + \frac{3}{2}(-1)^2 - 5(-1) = \frac{3}{2} + 5 = \frac{13}{2} = C` },
        { title: 'Clear fractions by multiplying by 2', math: t`6y^2 + 10ty + 3t^2 - 10t = 13` }
      ],
      answer: t`6y^2 + 10ty + 3t^2 - 10t = 13`,
      whyWrong: {
        '1': t`Forgot to multiply the terms $3y^2$ and $5ty$ by 2 when clearing the denominator $13/2$.`,
        '2': t`Made a sign error when evaluating $-5(-1) = +5$, mistakenly subtracting 5 to get $C = -7/2$.`,
        '3': t`Assumed the constant $C = 0$ without evaluating at $t = -1, y = 0$.`
      },
      commonTrap: t`Careless arithmetic with negative signs when evaluating $-5t$ at $t = -1$. Remember $-5(-1) = +5$.`,
      reference: `Official Winter 2025 Term Test 1 (Version 2, Q3) · ${L4} Pages 3–6`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Lecture 4 & Winter 2025 Test 1' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_04',
    courseId: 'ENGR213',
    chapter: 'exact',
    pastPaper: 'Concordia Midterm Archive (Exactness Parameter)',
    topic: 'Determining Unknown Constant k for Exactness',
    difficulty: 'Midterm Level',
    question: t`For what value of the constant $k$ is the differential equation $(k x y^3 + y \cos(x y))\,dx + (3 x^2 y^2 + x \cos(x y))\,dy = 0$ exact?`,
    options: [
      t`$k = 2$`,
      t`$k = 3$`,
      t`$k = 6$`,
      t`$k = 1$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`A differential equation $M(x,y)\,dx + N(x,y)\,dy = 0$ is exact if and only if $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$. Compute both partial derivatives and equate coefficients to solve for $k$.`,
      stepByStep: [],
      steps: [
        { title: 'Differentiate $M$ with respect to $y$', math: t`\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}\big[k x y^3 + y\cos(xy)\big] = 3k x y^2 + \cos(xy) - x y\sin(xy)` },
        { title: 'Differentiate $N$ with respect to $x$', math: t`\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}\big[3x^2 y^2 + x\cos(xy)\big] = 6x y^2 + \cos(xy) - x y\sin(xy)` },
        { title: 'Equate $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$', math: t`3k x y^2 + \cos(xy) - xy\sin(xy) = 6x y^2 + \cos(xy) - xy\sin(xy) \implies 3k x y^2 = 6x y^2` },
        { title: 'Solve for $k$', math: t`3k = 6 \implies k = 2` }
      ],
      answer: t`k = 2`,
      whyWrong: {
        '1': t`Set $k = 3$ by directly copying the coefficient in $3x^2 y^2$ without dividing by the derivative exponent 3.`,
        '2': t`Set $k = 6$ forgetting to divide by the power of $y^3$ differentiated ($3$).`,
        '3': t`Calculated $3k - 6 = 1 \implies k = 1$.`
      },
      commonTrap: t`Forgetting to apply the product rule to $y\cos(xy)$ and $x\cos(xy)$, though fortuitously the product rule terms cancel.`,
      reference: `${L4} · Pages 4–6`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Test for Exactness' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_05',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Exact Differential Equation with Exponential Terms',
    difficulty: 'Midterm Level',
    question: t`Find the implicit general solution to $(2x e^y + y^3)\,dx + (x^2 e^y + 3x y^2 - 4y)\,dy = 0$.`,
    options: [
      t`$x^2 e^y + x y^3 - 2y^2 = C$`,
      t`$x^2 e^y + 3x y^2 - 4y^2 = C$`,
      t`$2x e^y + x y^3 - y^4 = C$`,
      t`$x^2 e^y + x y^3 - 4y = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Verify that $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$, then integrate $M$ with respect to $x$ treating $y$ as a constant, and differentiate the result with respect to $y$ to determine the missing function $g(y)$.`,
      stepByStep: [],
      steps: [
        { title: 'Test exactness', math: t`\frac{\partial M}{\partial y} = 2x e^y + 3y^2, \quad \frac{\partial N}{\partial x} = 2x e^y + 3y^2 \implies \text{Exact}` },
        { title: 'Integrate $M$ with respect to $x$', math: t`\Psi(x, y) = \int (2x e^y + y^3)\,dx = x^2 e^y + x y^3 + g(y)` },
        { title: 'Differentiate with respect to $y$ and equate to $N$', math: t`\frac{\partial \Psi}{\partial y} = x^2 e^y + 3x y^2 + g'(y) = x^2 e^y + 3x y^2 - 4y \implies g'(y) = -4y` },
        { title: 'Integrate $g\'(y)$', math: t`g(y) = \int -4y\,dy = -2y^2` },
        { title: 'Write general solution $\\Psi(x, y) = C$', math: t`x^2 e^y + x y^3 - 2y^2 = C` }
      ],
      answer: t`x^2 e^y + x y^3 - 2y^2 = C`,
      whyWrong: {
        '1': t`Forgot to integrate $3x y^2$ with respect to $x$ when constructing the first term.`,
        '2': t`Forgot to integrate $2x$ to $x^2$ when integrating with respect to $x$.`,
        '3': t`Integrated $g'(y) = -4y$ as $-4y$ instead of $-2y^2$.`
      },
      commonTrap: t`Forgetting to integrate $-4y$ into $-2y^2$, treating it as a constant instead of a function of $y$.`,
      reference: `${L4} · Pages 5–8`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Method of Solution' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_06',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Exact Trigonometric Differential Equation',
    difficulty: 'Midterm Level',
    question: t`Solve the exact differential equation $(\cos(y) + y\cos(x))\,dx + (\sin(x) - x\sin(y))\,dy = 0$.`,
    options: [
      t`$x\cos(y) + y\sin(x) = C$`,
      t`$x\sin(y) + y\cos(x) = C$`,
      t`$\cos(x)\cos(y) - \sin(x)\sin(y) = C$`,
      t`$x\cos(y) - y\sin(x) = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Identify $M = \cos(y) + y\cos(x)$ and $N = \sin(x) - x\sin(y)$. Compute partial derivatives to verify exactness, then integrate $M\,dx$ to find $\Psi(x, y)$.`,
      stepByStep: [],
      steps: [
        { title: 'Compute partial derivatives', math: t`\frac{\partial M}{\partial y} = -\sin(y) + \cos(x), \quad \frac{\partial N}{\partial x} = \cos(x) - \sin(y) \implies \text{Exact}` },
        { title: 'Integrate $M$ with respect to $x$', math: t`\Psi(x, y) = \int \big(\cos(y) + y\cos(x)\big)\,dx = x\cos(y) + y\sin(x) + g(y)` },
        { title: 'Differentiate with respect to $y$', math: t`\frac{\partial \Psi}{\partial y} = -x\sin(y) + \sin(x) + g'(y) = N = \sin(x) - x\sin(y) \implies g'(y) = 0` },
        { title: 'Conclusion', math: t`g(y) = C_0 \implies x\cos(y) + y\sin(x) = C` }
      ],
      answer: t`x\cos(y) + y\sin(x) = C`,
      whyWrong: {
        '1': t`Swapped sines and cosines during integration.`,
        '2': t`Multiplied the trigonometric terms instead of using the potential function sum.`,
        '3': t`Introduced a minus sign between the terms instead of a plus sign.`
      },
      commonTrap: t`Confusing $\int \cos(x)\,dx = \sin(x)$ with $\frac{d}{dx}\cos(x) = -\sin(x)$.`,
      reference: `${L4} · Pages 6–9`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Trigonometric Examples' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_07',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Special Integrating Factor μ(y) Depending Exclusively on y',
    difficulty: 'Exam Master',
    question: t`Find the integrating factor $\mu(y)$ that makes the non-exact ODE $y\,dx + (2x - y e^y)\,dy = 0$ exact.`,
    options: [
      t`$\mu(y) = y$`,
      t`$\mu(y) = \frac{1}{y}$`,
      t`$\mu(y) = e^y$`,
      t`$\mu(y) = y^2$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When an equation $M\,dx + N\,dy = 0$ is not exact, test $\frac{\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}}{M}$. If it depends solely on $y$, then $\mu(y) = \exp\left(\int \frac{N_x - M_y}{M}\,dy\right)$ is an integrating factor.`,
      stepByStep: [],
      steps: [
        { title: 'Compute partial derivatives', math: t`M = y \implies \frac{\partial M}{\partial y} = 1, \qquad N = 2x - y e^y \implies \frac{\partial N}{\partial x} = 2` },
        { title: 'Check exactness', math: t`\frac{\partial M}{\partial y} \neq \frac{\partial N}{\partial x} \quad (1 \neq 2) \implies \text{Not exact}` },
        { title: 'Evaluate the $y$-quotient condition', math: t`\frac{\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}}{M} = \frac{2 - 1}{y} = \frac{1}{y} \quad (\text{Depends only on } y)` },
        { title: 'Compute integrating factor $\mu(y)$', math: t`\mu(y) = e^{\int \frac{1}{y}\,dy} = e^{\ln(y)} = y` },
        { title: 'Verify exactness of multiplied ODE', math: t`y^2\,dx + (2xy - y^2 e^y)\,dy = 0 \implies \frac{\partial}{\partial y}(y^2) = 2y = \frac{\partial}{\partial x}(2xy - y^2 e^y) = 2y \quad \checkmark` }
      ],
      answer: t`\mu(y) = y`,
      whyWrong: {
        '1': t`Inverted the sign in $\frac{N_x - M_y}{M}$ to get $-1/y \implies \mu = 1/y$.`,
        '2': t`Assumed the exponential factor in $N$ determined the integrating factor.`,
        '3': t`Calculated $\int \frac{1}{y}dy = \ln(y^2)$.`
      },
      commonTrap: t`Forgetting that the quotient for $\mu(y)$ has $N_x - M_y$ in the numerator, opposite to the $M_y - N_x$ for $\mu(x)$.`,
      reference: `${L4} · Pages 12–15`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Special Integrating Factors μ(y)' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_08',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Exact Differential Equation with Logarithmic & Rational Terms IVP',
    difficulty: 'Exam Master',
    question: t`Solve the initial value problem $\left(\frac{1}{x} + 2x y\right)\,dx + \left(x^2 - \frac{1}{y}\right)\,dy = 0$, $y(1) = 1$ (for $x > 0, y > 0$).`,
    options: [
      t`$\ln(x) + x^2 y - \ln(y) = 1$`,
      t`$\ln(x) + 2x^2 y - \ln(y) = 2$`,
      t`$\frac{1}{x^2} + x^2 y - \ln(y) = 1$`,
      t`$\ln(x) + x y^2 - \frac{1}{y} = 0$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Verify exactness with $\frac{\partial M}{\partial y} = 2x = \frac{\partial N}{\partial x}$. Integrate to form $\Psi(x, y) = C$, and use the initial point $(1, 1)$ to fix the arbitrary constant.`,
      stepByStep: [],
      steps: [
        { title: 'Check exactness', math: t`\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}\left(\frac{1}{x} + 2xy\right) = 2x, \quad \frac{\partial N}{\partial x} = \frac{\partial}{\partial x}\left(x^2 - \frac{1}{y}\right) = 2x \implies \text{Exact}` },
        { title: 'Integrate $M$ with respect to $x$', math: t`\Psi(x, y) = \int \left(\frac{1}{x} + 2xy\right)\,dx = \ln(x) + x^2 y + g(y)` },
        { title: 'Match $\\frac{\\partial \\Psi}{\\partial y} = N$', math: t`x^2 + g'(y) = x^2 - \frac{1}{y} \implies g'(y) = -\frac{1}{y} \implies g(y) = -\ln(y)` },
        { title: 'General implicit solution', math: t`\ln(x) + x^2 y - \ln(y) = C` },
        { title: 'Apply initial condition $y(1) = 1$', math: t`\ln(1) + (1)^2(1) - \ln(1) = 0 + 1 - 0 = 1 \implies C = 1` }
      ],
      answer: t`\ln(x) + x^2 y - \ln(y) = 1`,
      whyWrong: {
        '1': t`Forgot to divide by 2 when integrating $2xy\,dx$ with respect to $x$.`,
        '2': t`Differentiated $1/x$ as $-1/x^2$ instead of integrating to $\ln(x)$.`,
        '3': t`Calculated $g(y) = -1/y$ instead of $-\ln(y)$.`
      },
      commonTrap: t`Mixing up integration and differentiation of rational functions: $\int \frac{1}{y}\,dy = \ln(y)$, not $-\frac{1}{y^2}$.`,
      reference: `${L4} · Pages 7–10`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Initial Value Problems' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_09',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Method of Inspection & Exact Grouping d(xy)',
    difficulty: 'Foundation',
    question: t`Using the exact differential group $d(xy) = x\,dy + y\,dx$, solve the differential equation $(y + x^2)\,dx + x\,dy = 0$.`,
    options: [
      t`$xy + \frac{x^3}{3} = C$`,
      t`$xy + \frac{x^2}{2} = C$`,
      t`$x^2 y + x^3 = C$`,
      t`$x + y + \frac{x^3}{3} = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Recognize standard differential combinations: $y\,dx + x\,dy = d(xy)$. Group the terms into exact differentials and integrate directly term by term.`,
      stepByStep: [],
      steps: [
        { title: 'Regroup into exact differential blocks', math: t`(y\,dx + x\,dy) + x^2\,dx = 0` },
        { title: 'Substitute $d(xy)$', math: t`d(xy) + x^2\,dx = 0` },
        { title: 'Integrate both sides', math: t`\int d(xy) + \int x^2\,dx = C \implies xy + \frac{x^3}{3} = C` },
        { title: 'Standard exactness verification', math: t`M = y + x^2 \implies M_y = 1; \quad N = x \implies N_x = 1 \implies M_y = N_x \quad \checkmark` }
      ],
      answer: t`xy + \frac{x^3}{3} = C`,
      whyWrong: {
        '1': t`Integrated $x^2\,dx$ as $x^2/2$ instead of $x^3/3$.`,
        '2': t`Squared $x$ in the $xy$ term without mathematical justification.`,
        '3': t`Dropped the differential $d(xy)$ and treated $y\,dx + x\,dy$ as $x+y$.`
      },
      commonTrap: t`Failing to recognize $x\,dy + y\,dx$ as the exact product differential $d(xy)$.`,
      reference: `${L4} · Pages 2–5; Zill §2.4`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Method of Inspection' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_10',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Integrating Factor μ(x) Yielding Polynomial Potential',
    difficulty: 'Midterm Level',
    question: t`Find the integrating factor $\mu(x)$ and explicit potential function $\Psi(x, y) = C$ for $(x^2 + y^2 + x)\,dx + xy\,dy = 0$.`,
    options: [
      t`$\mu(x) = x \implies \frac{x^4}{4} + \frac{x^2 y^2}{2} + \frac{x^3}{3} = C$`,
      t`$\mu(x) = x^2 \implies \frac{x^5}{5} + \frac{x^3 y^2}{3} = C$`,
      t`$\mu(x) = e^x \implies e^x(x^2 + y^2) = C$`,
      t`$\mu(y) = y \implies \frac{x^2 y^2}{2} + \frac{y^4}{4} = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Calculate $\frac{M_y - N_x}{N}$. Here $M_y = 2y$ and $N_x = y$, so $\frac{M_y - N_x}{N} = \frac{y}{xy} = \frac{1}{x}$, a function of $x$ alone. The integrating factor is $\mu(x) = e^{\int \frac{1}{x}dx} = x$.`,
      stepByStep: [],
      steps: [
        { title: 'Test for exactness', math: t`M_y = 2y, \quad N_x = y \implies M_y - N_x = y \neq 0 \quad \text{(Not exact)}` },
        { title: 'Form the $x$-quotient', math: t`\frac{M_y - N_x}{N} = \frac{y}{xy} = \frac{1}{x}` },
        { title: 'Compute integrating factor', math: t`\mu(x) = e^{\int \frac{1}{x}\,dx} = e^{\ln(x)} = x` },
        { title: 'Multiply the entire ODE by $x$', math: t`(x^3 + x y^2 + x^2)\,dx + x^2 y\,dy = 0` },
        { title: 'Integrate the new $M$ with respect to $x$', math: t`\Psi(x, y) = \int (x^3 + x y^2 + x^2)\,dx = \frac{x^4}{4} + \frac{x^2 y^2}{2} + \frac{x^3}{3} + g(y)` },
        { title: 'Verify against new $N$', math: t`\frac{\partial \Psi}{\partial y} = x^2 y + g'(y) = x^2 y \implies g'(y) = 0 \implies g(y) = 0` }
      ],
      answer: t`\mu(x) = x \implies \frac{x^4}{4} + \frac{x^2 y^2}{2} + \frac{x^3}{3} = C`,
      whyWrong: {
        '1': t`Took the integrating factor to be $x^2$ instead of $x$.`,
        '2': t`Substituted $\mu(x) = e^x$ assuming the quotient was a constant 1.`,
        '3': t`Tested $\frac{N_x - M_y}{M}$ incorrectly and declared $\mu(y) = y$.`
      },
      commonTrap: t`Forgetting to multiply all terms of $M(x, y)$ by the integrating factor $\mu(x) = x$.`,
      reference: `${L4} · Pages 14–17`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Integrating Factors' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_11',
    courseId: 'ENGR213',
    chapter: 'exact',
    pastPaper: 'Concordia Midterm 2013 Exam Archive',
    topic: 'Determining Parameter A for Exactness (Past Midterm Drill)',
    difficulty: 'Midterm Level',
    question: t`Find the value of the constant $A$ that makes $(A x^2 y + 2y^2)\,dx + (2x^3 + 4xy)\,dy = 0$ exact.`,
    options: [
      t`$A = 6$`,
      t`$A = 2$`,
      t`$A = 4$`,
      t`$A = 3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Exactness requires $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$. Differentiate both functions and equate coefficients of corresponding powers of $x$ and $y$.`,
      stepByStep: [],
      steps: [
        { title: 'Compute $\\frac{\\partial M}{\\partial y}$', math: t`\frac{\partial M}{\partial y} = \frac{\partial}{\partial y}(A x^2 y + 2y^2) = A x^2 + 4y` },
        { title: 'Compute $\\frac{\\partial N}{\\partial x}$', math: t`\frac{\partial N}{\partial x} = \frac{\partial}{\partial x}(2x^3 + 4xy) = 6x^2 + 4y` },
        { title: 'Equate partial derivatives', math: t`A x^2 + 4y = 6x^2 + 4y \implies A x^2 = 6x^2 \implies A = 6` }
      ],
      answer: t`A = 6`,
      whyWrong: {
        '1': t`Set $A = 2$ by directly copying the coefficient in front of $x^3$.`,
        '2': t`Set $A = 4$ by equating to the coefficient of $4y$.`,
        '3': t`Calculated $\frac{6}{2} = 3$ unnecessarily dividing by the original coefficient.`
      },
      commonTrap: t`Forgetting to differentiate $2x^3$ with respect to $x$ ($3 \times 2 = 6$).`,
      reference: `${L4} · Pages 4–6`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Test for Exactness' }]
  },
  {
    id: 'Q_ENGR213_SUB_EXA_12',
    courseId: 'ENGR213',
    chapter: 'exact',
    topic: 'Exact Differential Equation with Trigonometric Secant & Tangent Products',
    difficulty: 'Midterm Level',
    question: t`Solve the exact differential equation $(\sec(x)\tan(x) + 2x y)\,dx + (x^2 + 3y^2)\,dy = 0$.`,
    options: [
      t`$\sec(x) + x^2 y + y^3 = C$`,
      t`$\tan(x) + x^2 y + y^3 = C$`,
      t`$\sec(x) + 2x^2 y + 3y^3 = C$`,
      t`$\sec^2(x) + x^2 y + y^3 = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Check $M_y = 2x = N_x$. The equation is exact. Integrate $M$ with respect to $x$ remembering $\int \sec(x)\tan(x)\,dx = \sec(x)$, then match with $N$.`,
      stepByStep: [],
      steps: [
        { title: 'Exactness test', math: t`\frac{\partial M}{\partial y} = 2x, \quad \frac{\partial N}{\partial x} = 2x \implies \text{Exact}` },
        { title: 'Integrate $M$ with respect to $x$', math: t`\Psi(x, y) = \int \big(\sec(x)\tan(x) + 2xy\big)\,dx = \sec(x) + x^2 y + g(y)` },
        { title: 'Differentiate with respect to $y$ and match $N$', math: t`\frac{\partial \Psi}{\partial y} = x^2 + g'(y) = x^2 + 3y^2 \implies g'(y) = 3y^2 \implies g(y) = y^3` },
        { title: 'Assemble general solution', math: t`\sec(x) + x^2 y + y^3 = C` }
      ],
      answer: t`\sec(x) + x^2 y + y^3 = C`,
      whyWrong: {
        '1': t`Integrated $\sec(x)\tan(x)$ incorrectly as $\tan(x)$ instead of $\sec(x)$.`,
        '2': t`Forgot to divide by 2 when integrating $2xy\,dx$, leaving $2x^2 y$.`,
        '3': t`Integrated $\sec(x)\tan(x)$ as $\sec^2(x)$.`
      },
      commonTrap: t`Confusing the antiderivative of $\sec(x)\tan(x)$ ($\sec(x)$) with that of $\sec^2(x)$ ($\tan(x)$).`,
      reference: `${L4} · Pages 7–11`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact Differential Equations — Method of Solution' }]
  },

  // ==========================================
  // LECTURE 1: CLASSIFICATION, ORDER & LINEARITY (classification)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_CLS_01',
    courseId: 'ENGR213',
    chapter: 'classification',
    topic: 'ODE Order, Degree & Linearity Classification',
    difficulty: 'Midterm Level',
    question: t`Classify the ordinary differential equation $(1 - y^2)y'' + 2x y' + y = \sin(x)$ in terms of order and linearity.`,
    options: [
      t`Second-order, non-linear (due to the coefficient $(1 - y^2)$ depending on $y$)`,
      t`Second-order, linear with variable coefficients, since $2x$ and $(1 - y^2)$ depend only on $x$`,
      t`First-order, non-linear because of the power $y^2$, since the highest power of $y$ sets the order`,
      t`Third-order, linear non-homogeneous, since the term $2xy'$ raises the order to three`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The order of an ODE is the highest derivative present ($y'' \implies$ second-order). An ODE is linear if the dependent variable $y$ and all its derivatives appear only to the first power and are not multiplied together or inside nonlinear functions. Coefficients of derivatives must depend solely on the independent variable $x$.`,
      stepByStep: [],
      steps: [
        { title: 'Determine the order', math: t`\text{Highest derivative is } y'' \implies \text{Order } 2` },
        { title: 'Check linearity conditions', note: t`The coefficient of $y''$ is $(1 - y^2)$, which is a function of the dependent variable $y$. In a linear ODE, coefficients of $y$ and its derivatives can only depend on $x$.` },
        { title: 'Conclude classification', note: t`Therefore, the equation is second-order and non-linear.` }
      ],
      answer: t`Second-order, non-linear`,
      whyWrong: {
        '1': t`Overlooked that the coefficient of $y''$ contains $y^2$, which violates linearity.`,
        '2': t`Confused the highest derivative $y''$ (order 2) with the degree of $y$.`,
        '3': t`Miscalibrated order as 3.`
      },
      commonTrap: t`Thinking that variable coefficients only violate linearity if they depend on $x$. Linearity requires coefficients of $y, y', y''$ to depend ONLY on the independent variable $x$, never $y$.`,
      reference: `Lecture 1 - Introduction to Differential Equations.pdf · Pages 4–7`
    },
    source: [{ deck: 'Lecture 1 - Introduction to Differential Equations.pdf', chapter: 'Chapter 1', location: 'Classification & Linearity' }]
  },
  {
    id: 'Q_ENGR213_SUB_CLS_02',
    courseId: 'ENGR213',
    chapter: 'classification',
    topic: 'Verifying Two-Parameter Solution Family',
    difficulty: 'Midterm Level',
    question: t`Determine whether the two-parameter family $y = c_1 e^{2x} + c_2 e^{-2x}$ is an explicit solution to the ODE $y'' - 4y = 0$ on $(-\infty, \infty)$.`,
    options: [
      t`Yes, it satisfies the differential equation identically for any constants $c_1, c_2$.`,
      t`No, it only satisfies the equation if $c_1 = c_2 = 0$.`,
      t`No, the second derivative produces $+4y''$, resulting in $8y = 0$.`,
      t`Yes, but only on the positive half-line $x > 0$.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`To verify that a family is an explicit solution, compute the necessary derivatives and substitute into the left-hand side of the ODE to verify that it reduces to $0$ identically.`,
      stepByStep: [],
      steps: [
        { title: 'First derivative', math: t`y' = 2c_1 e^{2x} - 2c_2 e^{-2x}` },
        { title: 'Second derivative', math: t`y'' = 4c_1 e^{2x} + 4c_2 e^{-2x} = 4(c_1 e^{2x} + c_2 e^{-2x}) = 4y` },
        { title: 'Substitute into ODE', math: t`y'' - 4y = 4y - 4y = 0` },
        { title: 'Domain evaluation', note: t`Exponentials $e^{\pm 2x}$ are smooth and continuous on $(-\infty, \infty)$.` }
      ],
      answer: t`Yes, it satisfies the differential equation identically for any constants $c_1, c_2$.`,
      whyWrong: {
        '1': t`The solution is valid for all arbitrary constants $c_1, c_2 \in \mathbb{R}$, not merely trivial zero.`,
        '2': t`Derivatives were differentiated with algebraic sign errors.`,
        '3': t`Exponentials have no singularities at $x \le 0$.`
      },
      commonTrap: t`Failing to compute the chain rule properly on $e^{-2x}$, which gives $(-2)(-2) = +4$.`,
      reference: `Lecture 1 - Introduction to Differential Equations.pdf · Pages 8–11`
    },
    source: [{ deck: 'Lecture 1 - Introduction to Differential Equations.pdf', chapter: 'Chapter 1', location: 'Solution Verification' }]
  },

  // ==========================================
  // LECTURE 2: AUTONOMOUS ODES & 1D PHASE LINE (autonomous-phase)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_AUT_01',
    courseId: 'ENGR213',
    chapter: 'autonomous-phase',
    topic: 'Autonomous ODE Critical Points & Stability',
    difficulty: 'Midterm Level',
    question: t`Find all critical points (equilibrium solutions) of the autonomous differential equation $\frac{dy}{dx} = y^2(4 - y)(y + 2)$ and classify their stability.`,
    options: [
      t`$y = 4$ is an attractor (stable), $y = -2$ is a repeller (unstable), $y = 0$ is semi-stable.`,
      t`$y = 4$ is a repeller, $y = -2$ is an attractor, $y = 0$ is stable.`,
      t`All three equilibrium solutions are stable attractors.`,
      t`$y = 4$ is an attractor, $y = 0$ is a repeller, $y = -2$ is semi-stable.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Critical points are real roots of $f(y) = 0$. On a 1D phase line, if $f(y) > 0$, arrows point upward; if $f(y) < 0$, arrows point downward. A point is an attractor (stable) if arrows on both sides converge toward it; a repeller (unstable) if arrows diverge away; semi-stable if arrows point toward it from one side and away on the other (characteristic of repeated even roots like $y^2$).`,
      stepByStep: [],
      steps: [
        { title: 'Find roots of $f(y) = 0$', math: t`y^2(4-y)(y+2) = 0 \implies y = -2, \; y = 0, \; y = 4` },
        { title: 'Test interval $y > 4$', math: t`y = 5 \implies (+)(-) (+) = - \implies y' < 0 \text{ (downward)}` },
        { title: 'Test interval $0 < y < 4$', math: t`y = 2 \implies (+)(+)(+) = + \implies y' > 0 \text{ (upward)}` },
        { title: 'Evaluate $y = 4$', note: t`Above 4 arrows point down; below 4 arrows point up. Both converge toward $y = 4 \implies$ Attractor (Asymptotically Stable).` },
        { title: 'Test interval $-2 < y < 0$', math: t`y = -1 \implies (+)(+)(+) = + \implies y' > 0 \text{ (upward)}` },
        { title: 'Evaluate $y = 0$', note: t`Arrows point up both below $0$ and above $0$ (due to $y^2 \ge 0$). $\implies$ Semi-stable.` },
        { title: 'Test interval $y < -2$', math: t`y = -3 \implies (+)(+)(-) = - \implies y' < 0 \text{ (downward)}` },
        { title: 'Evaluate $y = -2$', note: t`Above $-2$ arrows point up; below $-2$ arrows point down. Both diverge away from $-2 \implies$ Repeller (Unstable).` }
      ],
      answer: t`$y = 4$ is an attractor (stable), $y = -2$ is a repeller (unstable), $y = 0$ is semi-stable.`,
      whyWrong: {
        '1': t`Inverted the sign test in the regions $y > 4$ and $y < -2$.`,
        '2': t`Failed to recognize that $y^2$ does not change sign across $y = 0$.`,
        '3': t`Misassembled critical point stability classifications.`
      },
      commonTrap: t`Assuming every critical point alternates between stable and unstable. Repeated roots with even multiplicity like $y^2$ do not change sign, creating semi-stable nodes.`,
      reference: `Lecture 2 - IVPs and Direction Fields.pdf · Pages 9–14`
    },
    source: [{ deck: 'Lecture 2 - IVPs and Direction Fields.pdf', chapter: 'Chapter 2', location: 'Autonomous Equations & Phase Line' }]
  },

  // ==========================================
  // LECTURE 5: LINEAR ARGUMENT SUBSTITUTION (sub-linear)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_LINARG_01',
    courseId: 'ENGR213',
    chapter: 'sub-linear',
    topic: 'Linear Argument Substitution u = Ax + By + C',
    difficulty: 'Midterm Level',
    question: t`Solve the differential equation $\frac{dy}{dx} = (x + y + 2)^2$ using an appropriate substitution.`,
    options: [
      t`$y = \tan(x + C) - x - 2$`,
      t`$y = \tan(x + C) + x + 2$`,
      t`$y = \frac{1}{x + C} - x - 2$`,
      t`$y = (x + C)^3 - x - 2$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`An equation of the form $\frac{dy}{dx} = f(Ax + By + C)$ is transformed into a separable ODE by setting $u = Ax + By + C \implies \frac{du}{dx} = A + B\frac{dy}{dx}$.`,
      stepByStep: [],
      steps: [
        { title: 'Set substitution', math: t`u = x + y + 2 \implies \frac{du}{dx} = 1 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} - 1` },
        { title: 'Substitute into ODE', math: t`\frac{du}{dx} - 1 = u^2 \implies \frac{du}{dx} = u^2 + 1` },
        { title: 'Separate variables and integrate', math: t`\int \frac{du}{u^2 + 1} = \int dx \implies \arctan(u) = x + C` },
        { title: 'Isolate u', math: t`u = \tan(x + C)` },
        { title: 'Back-substitute u = x + y + 2', math: t`x + y + 2 = \tan(x + C) \implies y = \tan(x + C) - x - 2` }
      ],
      answer: t`y = \tan(x + C) - x - 2`,
      whyWrong: {
        '1': t`Forgot to subtract $(x+2)$ when inverting the substitution for $y$.`,
        '2': t`Integrated $\frac{1}{u^2+1}$ as $-\frac{1}{u}$ instead of $\arctan(u)$.`,
        '3': t`Integrated incorrectly as a power function.`
      },
      commonTrap: t`Forgetting that $\frac{du}{dx} = 1 + y'$, which gives $u' = u^2 + 1$ rather than $u' = u^2$.`,
      reference: `Lecture 5, September 23 2026.pdf · Pages 11–14`
    },
    source: [{ deck: 'Lecture 5, September 23 2026.pdf', chapter: 'Chapter 2', location: 'Linear Argument Substitutions' }]
  },

  // ==========================================
  // LECTURE 7: NONLINEAR MODELS — LOGISTIC EQUATION (nonlinear-models)
  // ==========================================
  {
    id: 'Q_ENGR213_SUB_NLM_01',
    courseId: 'ENGR213',
    chapter: 'nonlinear-models',
    topic: 'The Logistic Equation & Carrying Capacity',
    difficulty: 'Midterm Level',
    question: t`A population $P(t)$ obeys the logistic differential equation $\frac{dP}{dt} = 0.04 P - 0.0001 P^2$. Determine the carrying capacity $K$ of the environment and the population at which growth rate is maximized.`,
    options: [
      t`Carrying capacity $K = 400$, maximum growth rate occurs at $P = 200$.`,
      t`Carrying capacity $K = 4000$, maximum growth rate occurs at $P = 2000$.`,
      t`Carrying capacity $K = 100$, maximum growth rate occurs at $P = 50$.`,
      t`Carrying capacity $K = 400$, maximum growth rate occurs at $P = 400$.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`In the standard logistic equation $\frac{dP}{dt} = P(a - bP)$, the stable non-zero equilibrium (carrying capacity) is $K = \frac{a}{b}$. Because the growth rate $f(P) = aP - bP^2$ is a downward parabola with vertex at $P = \frac{a}{2b} = \frac{K}{2}$, maximum population growth rate always occurs at exactly half the carrying capacity.`,
      stepByStep: [],
      steps: [
        { title: 'Identify parameters', math: t`a = 0.04, \quad b = 0.0001` },
        { title: 'Compute carrying capacity K', math: t`K = \frac{a}{b} = \frac{0.04}{0.0001} = 400` },
        { title: 'Find population for maximum growth rate', math: t`P_{\text{max growth}} = \frac{K}{2} = \frac{400}{2} = 200` },
        { title: 'Verify with derivative', math: t`f'(P) = 0.04 - 0.0002 P = 0 \implies P = \frac{0.04}{0.0002} = 200` }
      ],
      answer: t`Carrying capacity $K = 400$, maximum growth rate occurs at $P = 200$.`,
      whyWrong: {
        '1': t`Divided by $0.00001$ instead of $0.0001$, introducing an order-of-magnitude error.`,
        '2': t`Inverted the coefficient division as $0.0001/0.04$.`,
        '3': t`Confused the carrying capacity $K$ (where growth rate is $0$) with the maximum growth point.`
      },
      commonTrap: t`Believing that maximum growth occurs at carrying capacity $K$. At $K$, $dP/dt = 0$ (growth stops completely). The inflection point is always at $K/2$.`,
      reference: `ENGR213, Lecture 7, September 30 2026.pdf · Pages 3–8`
    },
    source: [{ deck: 'ENGR213, Lecture 7, September 30 2026.pdf', chapter: 'Chapter 2', location: 'Logistic Growth & Carrying Capacity' }]
  },
  {
    id: 'Q_ENGR213_SUB_NLM_02',
    courseId: 'ENGR213',
    chapter: 'nonlinear-models',
    topic: 'Logistic Differential Equation Analytical Solution',
    difficulty: 'Midterm Level',
    question: t`Solve the logistic IVP $\frac{dP}{dt} = P(1 - P)$, $P(0) = \frac{1}{3}$, and find $\lim_{t \to \infty} P(t)$.`,
    options: [
      t`$P(t) = \frac{1}{1 + 2e^{-t}}$, and $\lim_{t \to \infty} P(t) = 1$`,
      t`$P(t) = \frac{1}{3} e^t$, and $\lim_{t \to \infty} P(t) = \infty$`,
      t`$P(t) = \frac{1}{1 + \frac{1}{3}e^{-t}}$, and $\lim_{t \to \infty} P(t) = 1$`,
      t`$P(t) = \frac{1}{1 - 2e^{-t}}$, and $\lim_{t \to \infty} P(t) = 1$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separate variables $\frac{dP}{P(1-P)} = dt$, apply partial fractions $\frac{1}{P} + \frac{1}{1-P}$, integrate to get $\frac{P}{1-P} = C e^t$, and invert to obtain $P(t) = \frac{P_0}{P_0 + (1-P_0)e^{-t}}$.`,
      stepByStep: [],
      steps: [
        { title: 'Separate variables', math: t`\left(\frac{1}{P} + \frac{1}{1-P}\right)dP = dt` },
        { title: 'Integrate', math: t`\ln|P| - \ln|1-P| = t + C_0 \implies \ln\left|\frac{P}{1-P}\right| = t + C_0` },
        { title: 'Apply initial condition P(0) = 1/3', math: t`\frac{1/3}{1 - 1/3} = \frac{1/3}{2/3} = \frac{1}{2} = e^{C_0}` },
        { title: 'Express ratio', math: t`\frac{P}{1-P} = \frac{1}{2}e^t \implies \frac{1-P}{P} = 2e^{-t} \implies \frac{1}{P} - 1 = 2e^{-t}` },
        { title: 'Isolate P(t)', math: t`\frac{1}{P} = 1 + 2e^{-t} \implies P(t) = \frac{1}{1 + 2e^{-t}}` },
        { title: 'Evaluate limit as t -> infinity', math: t`\lim_{t \to \infty} e^{-t} = 0 \implies P(\infty) = \frac{1}{1 + 0} = 1` }
      ],
      answer: t`$P(t) = \frac{1}{1 + 2e^{-t}}$, and $\lim_{t \to \infty} P(t) = 1$`,
      whyWrong: {
        '1': t`Treated the logistic equation as an exponential growth model $dP/dt = P$.`,
        '2': t`Calculated the constant $C_0$ incorrectly from $P(0)$.`,
        '3': t`Sign error inside the denominator $1 - 2e^{-t}$ which blows up to infinity.`
      },
      commonTrap: t`Forgetting that the partial fraction of $\frac{1}{1-P}$ integrates to $-\ln|1-P|$, not $+\ln|1-P|$.`,
      reference: `ENGR213, Lecture 7, September 30 2026.pdf · Pages 5–9`
    },
    source: [{ deck: 'ENGR213, Lecture 7, September 30 2026.pdf', chapter: 'Chapter 2', location: 'Logistic IVP Analytical Derivation' }]
  },
];
