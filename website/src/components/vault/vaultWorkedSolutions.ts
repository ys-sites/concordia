// Comprehensive pedagogical worked solutions for hidden vault questions.
// Formatted with microscopic baby steps, intermediate algebraic calculations,
// boxed milestones, verification, and high-yield exam tips matching ChatGPT dissection style.

export interface DetailedStep {
  title: string;
  math?: string;
  explanation?: string;
}

export interface DetailedWorkedSolution {
  setup?: {
    eq?: string;
    ic?: string;
    goal?: string;
  };
  steps: DetailedStep[];
  finalAnswer?: string;
  tip?: string;
}

export const VAULT_WORKED_SOLUTIONS: Record<string, DetailedWorkedSolution> = {
  // ── ENGR 213 (Winter 2017 Midterm 1) ──────────────────────────────────────────
  'W17-1a': {
    setup: {
      eq: String.raw`\frac{d^2y}{dx^2} = \left(\frac{dy}{dx}\right)^4`,
      goal: 'Determine the order and linearity of the ordinary differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Determine the order',
        math: String.raw`\text{Highest derivative is } \frac{d^2y}{dx^2} \implies \text{Order 2}`,
        explanation: "The order of an ordinary differential equation is governed strictly by the highest derivative present. Here, the highest derivative is the second derivative $y''$."
      },
      {
        title: 'Step 2: Check linearity conditions',
        math: String.raw`\left(\frac{dy}{dx}\right)^4 \implies \text{Exponent is } 4 \neq 1`,
        explanation: 'In a linear ODE, the dependent variable and all its derivatives must appear only to the first power. Raising $dy/dx$ to the power of 4 violates linearity.'
      },
      {
        title: 'Step 3: Conclude classification',
        math: String.raw`\boxed{\text{Second-order, non-linear}}`,
        explanation: 'The equation has order 2 and is non-linear.'
      }
    ],
    finalAnswer: String.raw`\text{Second-order, non-linear}`,
    tip: 'Important exam tip: Do not confuse the power/exponent of a derivative with its order! $(dy/dx)^4$ is the fourth power of the first derivative, NOT a fourth derivative $d^4y/dx^4$.'
  },

  'W17-1b': {
    setup: {
      eq: String.raw`y'' = \sqrt{5x^6 + (\sin x)\,y^{(8)}}`,
      goal: 'Determine the order and linearity of the ordinary differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Determine the order',
        math: String.raw`\text{Highest derivative is } y^{(8)} \implies \text{Order 8}`,
        explanation: 'Notice the term $y^{(8)}$ inside the square root, which represents the 8th derivative of $y$ with respect to $x$. Since $8 > 2$, the order is 8.'
      },
      {
        title: 'Step 2: Check linearity conditions',
        math: String.raw`\sqrt{\dots + (\sin x)y^{(8)}} \implies \text{derivative is trapped inside a non-linear radical}`,
        explanation: 'In a linear ODE, no derivative or dependent variable can appear inside non-linear operations such as square roots, trigonometric functions, or exponentials.'
      },
      {
        title: 'Step 3: Conclude classification',
        math: String.raw`\boxed{\text{8th-order, non-linear}}`,
        explanation: 'The equation is 8th-order and non-linear.'
      }
    ],
    finalAnswer: String.raw`\text{8th-order, non-linear}`,
    tip: 'Important exam tip: Always scan the entire equation for derivative notation in parentheses like $y^{(8)}$, which denotes high-order derivatives, not powers.'
  },

  'W17-1c': {
    setup: {
      eq: String.raw`e^{-x}y' + (4\sin x)y = (\tan x)y'' - 4e^{-x^2}`,
      goal: 'Determine the order and linearity of the ordinary differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Put into standard form and identify order',
        math: String.raw`(\tan x)y'' - e^{-x}y' - (4\sin x)y = 4e^{-x^2} \implies \text{Highest derivative is } y'' \implies \text{Order 2}`,
        explanation: "Rearrange all terms containing the dependent variable $y$ and its derivatives to one side. The highest derivative present is $y''$, giving order 2."
      },
      {
        title: 'Step 2: Check linearity conditions',
        math: String.raw`a_2(x)y'' + a_1(x)y' + a_0(x)y = g(x)`,
        explanation: 'Every term with $y, y\', y\'\'$ has exponent 1, they are not multiplied together, and their coefficients $(\\tan x, -e^{-x}, -4\\sin x)$ depend exclusively on the independent variable $x$. Therefore, the equation is linear.'
      },
      {
        title: 'Step 3: Conclude classification',
        math: String.raw`\boxed{\text{Second-order, linear}}`,
        explanation: 'The equation is second-order and linear.'
      }
    ],
    finalAnswer: String.raw`\text{Second-order, linear}`,
    tip: 'Important exam tip: Variable coefficients like $\\tan x$ or $\\sin x$ do NOT make an ODE non-linear as long as they depend only on the independent variable $x$.'
  },

  'W17-1d': {
    setup: {
      eq: String.raw`\frac{dy}{dt} = 1 - t^2`,
      goal: 'Determine the order and linearity of the differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Determine the order',
        math: String.raw`\text{Highest derivative is } \frac{dy}{dt} \implies \text{Order 1}`,
        explanation: 'The highest derivative present is $dy/dt$, which is order 1.'
      },
      {
        title: 'Step 2: Check linearity conditions',
        math: String.raw`\frac{dy}{dt} + 0\cdot y = 1 - t^2`,
        explanation: 'The dependent variable $y$ and its derivative appear only to the first power, and the right-hand side depends solely on independent variable $t$.'
      },
      {
        title: 'Step 3: Conclude classification',
        math: String.raw`\boxed{\text{First-order, linear}}`,
        explanation: 'The equation is first-order and linear.'
      }
    ],
    finalAnswer: String.raw`\text{First-order, linear}`,
    tip: 'Important exam tip: Even if an equation has no explicit $y$ term, it is linear in $y$ as long as $y\'$ appears linearly and no non-linear powers of $y$ exist.'
  },

  'W17-1e': {
    setup: {
      eq: String.raw`x^2y'' + xy' + (x^2 - \nu^2)y = 0`,
      goal: 'Classify Bessel\'s differential equation by order and linearity.'
    },
    steps: [
      {
        title: 'Step 1: Determine the order',
        math: String.raw`\text{Highest derivative is } y'' \implies \text{Order 2}`,
        explanation: "The highest derivative present is $y''$, which represents order 2."
      },
      {
        title: 'Step 2: Check linearity conditions',
        math: String.raw`a_2(x)y'' + a_1(x)y' + a_0(x)y = 0 \quad \text{with } a_2(x)=x^2, \, a_1(x)=x, \, a_0(x)=x^2-\nu^2`,
        explanation: 'The dependent variable $y$ and its derivatives appear strictly to degree 1 and are not multiplied by each other. The coefficient $(x^2 - \\nu^2)$ depends only on $x$, so the ODE is linear.'
      },
      {
        title: 'Step 3: Conclude classification',
        math: String.raw`\boxed{\text{Second-order, linear}}`,
        explanation: 'Bessel\'s equation is second-order and linear.'
      }
    ],
    finalAnswer: String.raw`\text{Second-order, linear}`,
    tip: 'Important exam tip: The parameter $\\nu$ is a constant. Do not be confused by $x^2 - \\nu^2$; it is simply a coefficient function of $x$.'
  },

  'W17-2': {
    setup: {
      eq: String.raw`\frac{dy}{dx} + y = e^{3x}`,
      ic: String.raw`y(-3) = 15`,
      goal: String.raw`\text{Show } y = \frac{1}{4}e^{3x} + ce^{-x} \text{ solves the ODE and find largest interval of existence for the IVP.}`
    },
    steps: [
      {
        title: 'Step 1: Differentiate the candidate solution family',
        math: String.raw`y = \frac{1}{4}e^{3x} + ce^{-x} \implies y' = \frac{3}{4}e^{3x} - ce^{-x}`,
        explanation: 'Compute the first derivative of the candidate family using the chain rule.'
      },
      {
        title: 'Step 2: Substitute into the differential equation',
        math: String.raw`y' + y = \left(\frac{3}{4}e^{3x} - ce^{-x}\right) + \left(\frac{1}{4}e^{3x} + ce^{-x}\right) = \left(\frac{3}{4} + \frac{1}{4}\right)e^{3x} = e^{3x} \quad \checkmark`,
        explanation: 'Substitute $y$ and $y\'$ into the left-hand side. The terms containing arbitrary constant $c$ cancel identically, leaving $e^{3x}$, confirming it solves the ODE.'
      },
      {
        title: 'Step 3: Determine the largest interval of existence',
        math: String.raw`P(x) = 1, \quad f(x) = e^{3x} \implies \text{both continuous everywhere on } (-\infty, \infty)`,
        explanation: 'Write in standard linear form $y\' + P(x)y = f(x)$. Both $P(x) = 1$ and $f(x) = e^{3x}$ are continuous on all of $\\mathbb{R}$. By the Existence and Uniqueness Theorem, a unique solution exists on the entire interval where the coefficient functions are continuous.'
      },
      {
        title: 'Step 4: Conclude for the IVP $y(-3) = 15$',
        math: String.raw`\boxed{I = (-\infty, \infty)}`,
        explanation: 'Since the initial point $x_0 = -3$ lies in $(-\\infty, \\infty)$, the largest interval of existence is $(-\\infty, \\infty)$.'
      }
    ],
    finalAnswer: String.raw`\text{Solves ODE; Largest interval is } (-\infty, \infty)`,
    tip: 'Important exam tip: For a linear ODE $y\' + P(x)y = f(x)$, you do not need to solve for constant $c$ to find the interval of existence! It is simply the common domain where $P(x)$ and $f(x)$ are continuous.'
  },

  'W17-3': {
    setup: {
      eq: String.raw`y' = y^2 - 4y + 3`,
      ic: String.raw`y(0) = 3`,
      goal: 'Find the explicit solution y(x).'
    },
    steps: [
      {
        title: 'Step 1: Factor the equation',
        math: String.raw`\boxed{\frac{dy}{dx} = (y - 1)(y - 3)}`,
        explanation: 'Find two numbers that multiply to $+3$ and add to $-4$: $-1$ and $-3$.'
      },
      {
        title: 'Step 2: Find constant solutions',
        math: String.raw`\frac{dy}{dx} = 0 \implies 0 = (y - 1)(y - 3) \implies \boxed{y = 1 \quad \text{or} \quad y = 3}`,
        explanation: 'For a constant solution, set $dy/dx = 0$. Setting each factor equal to zero yields two constant solutions: $y = 1$ and $y = 3$.'
      },
      {
        title: 'Step 3: Apply the initial condition',
        math: String.raw`y(0) = 3 \implies \boxed{y(x) = 3}`,
        explanation: 'We are given $y(0) = 3$. This means when $x = 0$, $y$ must equal $3$. Therefore, choose the constant equilibrium solution $y(x) = 3$.'
      },
      {
        title: 'Step 4: Verify the solution',
        math: String.raw`\begin{aligned} &\text{Since } y = 3 \text{ is constant: } y' = 0 \\ &\text{Substitute into original equation: } 0 = (3)^2 - 4(3) + 3 \\ &0 = 9 - 12 + 3 \\ &\boxed{0 = 0} \quad \checkmark \end{aligned}`,
        explanation: String.raw`Since $y = 3$ is constant, $y' = 0$. Substitute this into the original equation one arithmetic operation at a time: $0 = (3)^2 - 4(3) + 3 = 9 - 12 + 3 \implies 0 = 0 \checkmark$. The initial condition is satisfied, so $y(x) = 3$ is the required solution.`
      }
    ],
    finalAnswer: String.raw`y(x) = 3`,
    tip: 'Important exam tip: Before using separation of variables, check for constant solutions by setting $y\' = 0$. If you divide by $(y - 3)$ immediately, you could accidentally eliminate the solution $y = 3$.'
  },

  'W17-4': {
    setup: {
      eq: String.raw`\frac{dy}{dx} = \frac{xy^2 - \cos x\sin x}{y(1 - x^2)}`,
      ic: String.raw`y(0) = 2`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Rewrite in standard differential form $M\,dx + N\,dy = 0$',
        math: String.raw`(xy^2 - \sin x\cos x)\,dx + (x^2y - y)\,dy = 0`,
        explanation: 'Multiply through by $y(1 - x^2)$ and move all terms to the left: $M(x,y) = xy^2 - \\sin x\\cos x$ and $N(x,y) = x^2y - y$.'
      },
      {
        title: 'Step 2: Test for exactness',
        math: String.raw`\frac{\partial M}{\partial y} = 2xy, \quad \frac{\partial N}{\partial x} = 2xy \implies \boxed{\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}} \quad (\text{Exact!})`,
        explanation: 'The partial derivatives match identically, so the ODE is exact.'
      },
      {
        title: 'Step 3: Integrate $M$ with respect to $x$ to find potential function $F(x,y)$',
        math: String.raw`F(x, y) = \int (xy^2 - \sin x\cos x)\,dx = \frac{1}{2}x^2y^2 - \frac{1}{2}\sin^2x + g(y)`,
        explanation: 'Integrate holding $y$ constant. Recall $\\int \\sin x\\cos x\\,dx = \\frac{1}{2}\\sin^2x$. The integration constant with respect to $x$ is an arbitrary function $g(y)$.'
      },
      {
        title: 'Step 4: Differentiate with respect to $y$ and match with $N$',
        math: String.raw`\frac{\partial F}{\partial y} = x^2y + g'(y) = x^2y - y \implies g'(y) = -y \implies g(y) = -\frac{1}{2}y^2`,
        explanation: 'Equate $\\partial F/\\partial y$ with $N(x,y)$. The $x^2y$ terms cancel, leaving $g\'(y) = -y$.'
      },
      {
        title: 'Step 5: Assemble general potential and apply initial condition $y(0) = 2$',
        math: String.raw`\frac{1}{2}x^2y^2 - \frac{1}{2}\sin^2x - \frac{1}{2}y^2 = C_1 \implies x^2y^2 - y^2 - \sin^2x = C`,
        explanation: 'Multiply through by 2. At $x = 0, y = 2$: $0 - 4 - 0 = C \\implies C = -4$.'
      },
      {
        title: 'Step 6: Solve explicitly for $y(x)$',
        math: String.raw`y^2(x^2 - 1) - \sin^2x = -4 \implies y^2(1 - x^2) = 4 - \sin^2x \implies \boxed{y(x) = \sqrt{\frac{4 - \sin^2x}{1 - x^2}}}`,
        explanation: 'Factor $y^2$ on the left side and take the positive square root because initial condition $y(0) = +2 > 0$.'
      }
    ],
    finalAnswer: String.raw`y(x) = \sqrt{\frac{4 - \sin^2x}{1 - x^2}}`,
    tip: 'Important exam tip: Watch your signs when converting $dy/dx = M/N$ to $M\,dx + N\,dy = 0$. Moving terms across the equals sign flips their signs!'
  },

  'W17-5': {
    setup: {
      eq: String.raw`\frac{dx}{dy} = x(yx^3 - 1)`,
      goal: 'Solve the differential equation by recognizing Bernoulli form.'
    },
    steps: [
      {
        title: 'Step 1: Invert roles of variables and expand',
        math: String.raw`\frac{dx}{dy} + x = yx^4`,
        explanation: 'Treat $x$ as the dependent variable and $y$ as the independent variable. Rearrange into standard Bernoulli form with $n = 4$.'
      },
      {
        title: 'Step 2: Linearize using Bernoulli substitution $u = x^{1-n}$',
        math: String.raw`u = x^{1-4} = x^{-3} \implies \frac{du}{dy} = -3x^{-4}\frac{dx}{dy}`,
        explanation: String.raw`Divide the entire equation by $x^4$: $x^{-4}\frac{dx}{dy} + x^{-3} = y$. Substituting $x^{-4}\frac{dx}{dy} = -\frac{1}{3}u'$ yields $-\frac{1}{3}u' + u = y$.`
      },
      {
        title: 'Step 3: Put into standard linear form and find integrating factor $\\mu(y)$',
        math: String.raw`\frac{du}{dy} - 3u = -3y \implies \mu(y) = e^{\int -3\,dy} = e^{-3y}`,
        explanation: 'Multiply through by $-3$. The integrating factor is $\\mu(y) = e^{-3y}$.'
      },
      {
        title: 'Step 4: Integrate both sides',
        math: String.raw`(ue^{-3y})' = -3ye^{-3y} \implies ue^{-3y} = \int -3ye^{-3y}\,dy = ye^{-3y} + \frac{1}{3}e^{-3y} + C`,
        explanation: 'Using integration by parts $\\int -3ye^{-3y}\\,dy$: $\\int u\,dv = uv - \\int v\\,du = ye^{-3y} + \\frac{1}{3}e^{-3y} + C$.'
      },
      {
        title: 'Step 5: Multiply through by $e^{3y}$ and back-substitute $u = x^{-3}$',
        math: String.raw`u = y + \frac{1}{3} + Ce^{3y} \implies \boxed{x^{-3} = y + \frac{1}{3} + Ce^{3y}}`,
        explanation: 'Back-substitute $u = x^{-3}$ to obtain the general implicit solution.'
      }
    ],
    finalAnswer: String.raw`x^{-3} = y + \frac{1}{3} + Ce^{3y}`,
    tip: 'Important exam tip: When an ODE looks impossible with $dy/dx$, flip it to $dx/dy$! Here $x$ is the dependent variable and $y$ is the independent variable.'
  },

  // ── ENGR 213 (Winter 2025 Term Test 1) ────────────────────────────────────────
  'W25T-5a': {
    setup: {
      eq: String.raw`\frac{dy}{dx} = \sin(3x)`,
      goal: 'Find the general solution y(x).'
    },
    steps: [
      {
        title: 'Step 1: Separate variables and integrate',
        math: String.raw`dy = \sin(3x)\,dx \implies \int dy = \int \sin(3x)\,dx`,
        explanation: 'Multiply both sides by $dx$ to separate the variables.'
      },
      {
        title: 'Step 2: Apply substitution $u = 3x$',
        math: String.raw`u = 3x, \quad du = 3\,dx \implies \int \sin(3x)\,dx = \frac{1}{3}\int \sin(u)\,du = -\frac{1}{3}\cos(3x) + C`,
        explanation: 'The integral of $\\sin(kx)$ is $-\\frac{1}{k}\\cos(kx) + C$.'
      },
      {
        title: 'Step 3: Verification',
        math: String.raw`\frac{d}{dx}\left(-\frac{1}{3}\cos(3x) + C\right) = -\frac{1}{3}(-\sin(3x) \cdot 3) = \sin(3x) \quad \checkmark`,
        explanation: 'Differentiating the general solution confirms the original differential equation identically.'
      }
    ],
    finalAnswer: String.raw`y(x) = -\frac{1}{3}\cos(3x) + C`,
    tip: 'Important exam tip: Never forget the chain rule factor $\\frac{1}{3}$ when integrating $\\sin(3x)$!'
  },

  'W25T-5b': {
    setup: {
      eq: String.raw`y' + \frac{3}{x}y = x^4`,
      goal: 'Find the general solution y(x).'
    },
    steps: [
      {
        title: 'Step 1: Identify standard linear form and find integrating factor',
        math: String.raw`P(x) = \frac{3}{x} \implies \mu(x) = e^{\int \frac{3}{x}\,dx} = e^{3\ln|x|} = x^3`,
        explanation: 'The equation is already in standard form $y\' + P(x)y = Q(x)$. The integrating factor is $\\mu(x) = x^3$.'
      },
      {
        title: 'Step 2: Multiply through by $\\mu(x)$ and condense',
        math: String.raw`x^3y' + 3x^2y = x^7 \implies (x^3y)' = x^7`,
        explanation: "By the product rule, the left-hand side collapses into $(x^3y)'$."
      },
      {
        title: 'Step 3: Integrate both sides',
        math: String.raw`x^3y = \int x^7\,dx = \frac{x^8}{8} + C`,
        explanation: 'Integrate $x^7$ to get $x^8/8$, adding arbitrary constant $C$.'
      },
      {
        title: 'Step 4: Solve for $y(x)$',
        math: String.raw`y(x) = \frac{1}{x^3}\left(\frac{x^8}{8} + C\right) \implies \boxed{y(x) = \frac{x^5}{8} + \frac{C}{x^3}}`,
        explanation: 'Divide both sides by $x^3$. Remember that $C$ is divided by $x^3$ as well!'
      }
    ],
    finalAnswer: String.raw`y(x) = \frac{x^5}{8} + \frac{C}{x^3}`,
    tip: 'Important exam tip: Do not add $C$ at the end after dividing! $C$ belongs to the integral $(x^3y)$, so it MUST be divided by $x^3$ to become $C/x^3$.'
  },

  'W25T-6': {
    setup: {
      eq: String.raw`z_1 = 4 + 5i, \quad z_2 = -1 + 2i`,
      goal: String.raw`\text{Find (a) } z_1 + z_2, \text{ (b) } z_1/z_2 \text{ and } |z_1/z_2|, \text{ (c) } z_1 z_2.`
    },
    steps: [
      {
        title: 'Step 1: Compute sum $z_1 + z_2$',
        math: String.raw`z_1 + z_2 = (4 - 1) + (5 + 2)i = \boxed{3 + 7i}`,
        explanation: 'Add the real parts together $(4 - 1 = 3)$ and the imaginary parts together $(5 + 2 = 7)$.'
      },
      {
        title: 'Step 2: Compute quotient $z_1 / z_2$ via complex conjugate',
        math: String.raw`\frac{z_1}{z_2} = \frac{4 + 5i}{-1 + 2i} \cdot \frac{-1 - 2i}{-1 - 2i} = \frac{-4 - 8i - 5i - 10i^2}{(-1)^2 + 2^2} = \frac{6 - 13i}{5} = \boxed{\frac{6}{5} - \frac{13}{5}i}`,
        explanation: 'Multiply numerator and denominator by $\\bar{z}_2 = -1 - 2i$. Note $i^2 = -1$, so $-10i^2 = +10$, giving $-4 + 10 = 6$.'
      },
      {
        title: 'Step 3: Compute modulus $|z_1 / z_2|$',
        math: String.raw`\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|} = \frac{\sqrt{4^2 + 5^2}}{\sqrt{(-1)^2 + 2^2}} = \frac{\sqrt{16 + 25}}{\sqrt{1 + 4}} = \boxed{\sqrt{\frac{41}{5}} \approx 2.864}`,
        explanation: 'Using the modulus property $|z_1/z_2| = |z_1|/|z_2|$ avoids tedious squaring of fractions.'
      },
      {
        title: 'Step 4: Compute product $z_1 z_2$',
        math: String.raw`z_1 z_2 = (4 + 5i)(-1 + 2i) = -4 + 8i - 5i + 10i^2 = -4 + 3i - 10 = \boxed{-14 + 3i}`,
        explanation: 'Expand using FOIL and substitute $i^2 = -1$.'
      }
    ],
    finalAnswer: String.raw`z_1+z_2 = 3+7i, \quad \frac{z_1}{z_2} = \frac{6}{5}-\frac{13}{5}i \ (|\cdot| = \sqrt{41/5}), \quad z_1z_2 = -14+3i`,
    tip: 'Important exam tip: Always use $|z_1/z_2| = |z_1|/|z_2|$! It takes 10 seconds and prevents fraction arithmetic mistakes.'
  },

  'W25T-7': {
    setup: {
      eq: String.raw`(5y + 3t - 5)\,dt + (6y + 5t)\,dy = 0`,
      ic: String.raw`y(-1) = 0`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Test for exactness',
        math: String.raw`M = 5y + 3t - 5, \quad N = 6y + 5t \implies \frac{\partial M}{\partial y} = 5, \quad \frac{\partial N}{\partial t} = 5 \implies \boxed{\frac{\partial M}{\partial y} = \frac{\partial N}{\partial t}} \quad (\text{Exact!})`,
        explanation: 'The partial derivatives match identically, confirming the equation is exact.'
      },
      {
        title: 'Step 2: Integrate $M$ with respect to $t$',
        math: String.raw`F(t, y) = \int (5y + 3t - 5)\,dt = 5yt + \frac{3}{2}t^2 - 5t + g(y)`,
        explanation: 'Integrate holding $y$ constant, adding arbitrary integration function $g(y)$.'
      },
      {
        title: 'Step 3: Differentiate with respect to $y$ and match with $N$',
        math: String.raw`\frac{\partial F}{\partial y} = 5t + g'(y) = 6y + 5t \implies g'(y) = 6y \implies g(y) = 3y^2`,
        explanation: 'The $5t$ terms cancel, giving $g\'(y) = 6y$, which integrates to $3y^2$.'
      },
      {
        title: 'Step 4: Form general solution and clear fractions',
        math: String.raw`3y^2 + 5yt + \frac{3}{2}t^2 - 5t = c \implies 6y^2 + 10ty + 3t^2 - 10t = C`,
        explanation: 'Multiply the equation through by 2 to clear fractions.'
      },
      {
        title: 'Step 5: Apply initial condition $y(-1) = 0$',
        math: String.raw`6(0)^2 + 10(0)(-1) + 3(-1)^2 - 10(-1) = C \implies 3 + 10 = 13 \implies \boxed{C = 13}`,
        explanation: 'Substitute $t = -1$ and $y = 0$ to find $C = 13$.'
      }
    ],
    finalAnswer: String.raw`6y^2 + 10ty + 3t^2 - 10t = 13`,
    tip: 'Important exam tip: Notice the independent variable is $t$, not $x$! Take partial derivatives $\\partial M/\\partial y$ and $\\partial N/\\partial t$.'
  },

  'W25T-8': {
    setup: {
      eq: String.raw`\frac{dN}{dt} = N(1 - 0.0004N)`,
      ic: String.raw`N(0) = 2`,
      goal: 'Find the number of stores N(12).'
    },
    steps: [
      {
        title: 'Step 1: Identify carrying capacity $K$ and growth rate $r$',
        math: String.raw`\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right) \implies r = 1, \quad K = \frac{1}{0.0004} = 2500`,
        explanation: 'The logistic model has carrying capacity $K = 1/0.0004 = 2500$ and intrinsic rate $r = 1$.'
      },
      {
        title: 'Step 2: Write explicit logistic solution formula',
        math: String.raw`N(t) = \frac{K}{1 + \left(\frac{K - N_0}{N_0}\right)e^{-rt}} \implies \frac{K - N_0}{N_0} = \frac{2500 - 2}{2} = 1249`,
        explanation: 'Substitute $K = 2500, N_0 = 2, r = 1$ into the standard logistic curve.'
      },
      {
        title: 'Step 3: Evaluate at $t = 12$',
        math: String.raw`N(12) = \frac{2500}{1 + 1249e^{-12}} \approx \frac{2500}{1 + 1249(6.144 \times 10^{-6})} = \frac{2500}{1 + 0.00767} \approx \boxed{2481}`,
        explanation: 'Compute $1249e^{-12} \\approx 0.00767$. Dividing 2500 by $1.00767$ gives 2481 stores.'
      }
    ],
    finalAnswer: String.raw`N(12) \approx 2481 \text{ stores}`,
    tip: 'Important exam tip: Memorize the logistic solution formula $N(t) = \\frac{K}{1 + Ae^{-rt}}$ where $A = (K - N_0)/N_0$. You do not need to repeat partial fractions on the exam!'
  },

  'W25T-9': {
    setup: {
      eq: String.raw`\frac{dT}{dt} = k(T - T_m)`,
      ic: String.raw`T_m = 20^\circ\text{C}, \quad T(0) = 27^\circ\text{C}, \quad T(1) = 24^\circ\text{C}`,
      goal: 'Determine hours elapsed between death (37 °C) and discovery.'
    },
    steps: [
      {
        title: 'Step 1: Set up Newton\'s law of cooling with $t=0$ at discovery',
        math: String.raw`T(t) - T_m = (T_0 - T_m)e^{kt} \implies T(t) - 20 = (27 - 20)e^{kt} = 7e^{kt}`,
        explanation: 'At discovery $t = 0$, the temperature excess is $27 - 20 = 7^\\circ\\text{C}$.'
      },
      {
        title: 'Step 2: Determine cooling factor from 1 hour later',
        math: String.raw`T(1) - 20 = 24 - 20 = 4 = 7e^k \implies e^k = \frac{4}{7} \implies k = \ln(4/7) \approx -0.5596`,
        explanation: 'After 1 hour, the excess drops to $4^\\circ\\text{C}$, yielding $e^k = 4/7$.'
      },
      {
        title: 'Step 3: Solve for time of death $t_d$ when $T = 37^\circ\text{C}$',
        math: String.raw`37 - 20 = 17 = 7e^{kt_d} \implies e^{kt_d} = \frac{17}{7} \implies t_d = \frac{\ln(17/7)}{\ln(4/7)} \approx \frac{0.8873}{-0.5596} \approx \boxed{-1.59\text{ h}}`,
        explanation: 'At death, the body was $37^\\circ\\text{C}$ ($17^\\circ\\text{C}$ above room temp). Solving gives $t_d = -1.59$ hours, meaning death occurred 1.59 hours prior to discovery.'
      }
    ],
    finalAnswer: String.raw`1.59 \text{ hours (approx. 1 h 35 min)}`,
    tip: 'Important exam tip: Always subtract ambient temperature $T_m$ first! The ratio is $\\frac{T - T_m}{T_0 - T_m}$, NEVER $\\frac{T}{T_0}$.'
  },

  // ── ENGR 213 (Winter 2025 Quizzes) ───────────────────────────────────────────
  'W25Q-1': {
    setup: {
      eq: String.raw`yy' + x^2 = 4`,
      ic: String.raw`y(0) = 2`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Separate variables',
        math: String.raw`y\frac{dy}{dx} = 4 - x^2 \implies y\,dy = (4 - x^2)\,dx`,
        explanation: 'Rearrange and multiply by $dx$ to separate $y$ and $x$.'
      },
      {
        title: 'Step 2: Integrate both sides',
        math: String.raw`\int y\,dy = \int (4 - x^2)\,dx \implies \frac{y^2}{2} = 4x - \frac{x^3}{3} + C`,
        explanation: 'Integrate both sides with respect to their respective variables.'
      },
      {
        title: 'Step 3: Apply the initial condition $y(0) = 2$',
        math: String.raw`\frac{2^2}{2} = 0 - 0 + C \implies C = 2`,
        explanation: 'Substitute $x = 0$ and $y = 2$ to determine constant $C = 2$.'
      },
      {
        title: 'Step 4: Solve explicitly for $y(x)$',
        math: String.raw`\frac{y^2}{2} = 4x - \frac{x^3}{3} + 2 \implies y^2 = 4 + 8x - \frac{2}{3}x^3 \implies \boxed{y(x) = \sqrt{4 + 8x - \frac{2}{3}x^3}}`,
        explanation: 'Multiply through by 2. Choose the positive square root because initial condition $y(0) = +2 > 0$.'
      }
    ],
    finalAnswer: String.raw`y(x) = \sqrt{4 + 8x - \frac{2}{3}x^3}`,
    tip: 'Important exam tip: When solving for $y = \\pm\\sqrt{\\dots}$, you must select the sign that matches the initial condition: $y(0) = +2 \\implies +\\sqrt{\\dots}$.'
  },

  'W25Q-2': {
    setup: {
      eq: String.raw`\frac{dy}{dx} = \frac{k}{y^2}`,
      ic: String.raw`y(0) = 1, \quad y(1) = 2`,
      goal: 'Find y(5).'
    },
    steps: [
      {
        title: 'Step 1: Separate variables and integrate',
        math: String.raw`y^2\,dy = k\,dx \implies \frac{y^3}{3} = kx + C_1 \implies y^3 = 3kx + C`,
        explanation: 'Separate variables and integrate both sides.'
      },
      {
        title: 'Step 2: Apply first condition $y(0) = 1$',
        math: String.raw`1^3 = 3k(0) + C \implies C = 1 \implies y^3 = 3kx + 1`,
        explanation: 'Substitute $x = 0, y = 1$ to find $C = 1$.'
      },
      {
        title: 'Step 3: Apply second condition $y(1) = 2$',
        math: String.raw`2^3 = 3k(1) + 1 \implies 8 = 3k + 1 \implies 3k = 7`,
        explanation: 'Substitute $x = 1, y = 2$ to determine the parameter $3k = 7$.'
      },
      {
        title: 'Step 4: Evaluate at $x = 5$',
        math: String.raw`y(5)^3 = 7(5) + 1 = 36 \implies y(5) = \sqrt[3]{36} \approx \boxed{3.30}`,
        explanation: 'Substitute $x = 5$ to get $y^3 = 36$, so $y = \\sqrt[3]{36} \\approx 3.30$.'
      }
    ],
    finalAnswer: String.raw`y(5) = \sqrt[3]{36} \approx 3.30`,
    tip: 'Important exam tip: Keep $3k = 7$ grouped together! There is no need to round $k = 7/3 \\approx 2.333$; keeping it exact avoids roundoff error.'
  },

  // ── ENGR 213 (Summer 2021 Quizzes) ────────────────────────────────────────────
  'S21-1': {
    setup: {
      eq: String.raw`y'' = \sqrt{5x^6 + (\sin x)\,y^{(8)}}`,
      goal: 'Classify by order and linearity.'
    },
    steps: [
      {
        title: 'Step 1: Identify highest derivative',
        math: String.raw`y^{(8)} \implies \text{Order 8}`,
        explanation: 'The term $y^{(8)}$ represents the 8th derivative, making the order 8.'
      },
      {
        title: 'Step 2: Inspect linearity',
        math: String.raw`\sqrt{\dots} \implies \text{Non-linear}`,
        explanation: 'The dependent variable and its derivative are enclosed inside a square root.'
      },
      {
        title: 'Step 3: Conclude',
        math: String.raw`\boxed{\text{8th-order, non-linear}}`,
        explanation: 'The ODE is 8th order and non-linear.'
      }
    ],
    finalAnswer: String.raw`\text{8th-order, non-linear}`,
    tip: 'Important exam tip: Do not let $y\'\'$ on the left deceive you! Always check inside the radicals on the right.'
  },

  'S21-2a': {
    setup: {
      eq: String.raw`2y'' - 3y' = y^2 - 6y + 9`,
      goal: 'Determine whether a constant solution exists (True/False).'
    },
    steps: [
      {
        title: 'Step 1: Set derivatives to zero for constant solution',
        math: String.raw`y(x) = c \implies y' = 0, \quad y'' = 0`,
        explanation: 'Any constant solution has all derivatives equal to zero.'
      },
      {
        title: 'Step 2: Substitute into ODE and solve for $y$',
        math: String.raw`2(0) - 3(0) = y^2 - 6y + 9 \implies 0 = (y - 3)^2 \implies \boxed{y = 3}`,
        explanation: 'Setting the right-hand side to zero gives $(y-3)^2 = 0$, yielding constant solution $y = 3$.'
      },
      {
        title: 'Step 3: Verification',
        math: String.raw`\text{LHS} = 0, \quad \text{RHS} = (3)^2 - 6(3) + 9 = 9 - 18 + 9 = 0 \implies \boxed{0 = 0} \quad \checkmark`,
        explanation: 'Substituting $y = 3$ verifies that both sides are identically zero.'
      }
    ],
    finalAnswer: String.raw`\text{True } (y = 3)`,
    tip: 'Important exam tip: Constant equilibrium solutions are found simply by setting all derivatives $y\', y\'\'$ to 0 and solving the remaining algebraic equation.'
  },

  'S21-2b': {
    setup: {
      eq: String.raw`y' + 2xy^2 = 0`,
      ic: String.raw`y(-3) = \frac{1}{5}`,
      goal: String.raw`\text{Determine if } y = \frac{1}{x^2 + 4} \text{ solves the IVP (True/False).}`
    },
    steps: [
      {
        title: 'Step 1: Check if candidate solves the ODE',
        math: String.raw`y = (x^2 + 4)^{-1} \implies y' = -(x^2 + 4)^{-2}(2x) = \frac{-2x}{(x^2 + 4)^2} = -2xy^2 \implies y' + 2xy^2 = 0 \quad \checkmark`,
        explanation: 'Differentiating $y$ shows it solves the differential equation.'
      },
      {
        title: 'Step 2: Check the initial condition $y(-3)$',
        math: String.raw`y(-3) = \frac{1}{(-3)^2 + 4} = \frac{1}{9 + 4} = \frac{1}{13} \neq \frac{1}{5}`,
        explanation: 'Evaluating at $x = -3$ yields $1/13$, which does NOT equal the required initial value $1/5$.'
      },
      {
        title: 'Step 3: Conclude',
        math: String.raw`\boxed{\text{False}}`,
        explanation: 'An IVP requires satisfying BOTH the ODE and the initial condition. Since the initial condition fails, it does NOT solve the IVP.'
      }
    ],
    finalAnswer: String.raw`\text{False (Fails initial condition: } y(-3) = 1/13 \neq 1/5)`,
    tip: 'Important exam tip: An IVP question has TWO parts: the ODE and the initial condition. Always test the initial condition first; it takes 5 seconds!'
  },

  'S21-2c': {
    setup: {
      goal: 'Determine if every initial value problem has a unique solution (True/False).'
    },
    steps: [
      {
        title: 'Step 1: Recall Picard\'s Existence and Uniqueness Theorem',
        explanation: 'Picard\'s theorem states that $y\' = f(x, y), y(x_0) = y_0$ has a unique solution in an interval around $x_0$ IF both $f(x, y)$ and $\\frac{\\partial f}{\\partial y}$ are continuous in a region containing $(x_0, y_0)$.'
      },
      {
        title: 'Step 2: Counterexample',
        math: String.raw`y' = y^{2/3}, \quad y(0) = 0 \implies \frac{\partial f}{\partial y} = \frac{2}{3}y^{-1/3} \quad (\text{undefined at } y = 0)`,
        explanation: String.raw`This IVP has infinitely many solutions (e.g. $y(x) = 0$ and $y(x) = \frac{1}{27}x^3$), violating uniqueness.`
      },
      {
        title: 'Step 3: Conclude',
        math: String.raw`\boxed{\text{False}}`,
        explanation: 'Not every IVP has a unique solution.'
      }
    ],
    finalAnswer: String.raw`\text{False}`,
    tip: 'Important exam tip: Beware of absolute words like "Every" or "Always" in math questions. Uniqueness requires continuity of the partial derivative!'
  },

  'S21-4': {
    setup: {
      eq: String.raw`\frac{dx}{dt} = t(x - 1)`,
      ic: String.raw`x(0) = 7`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Separate variables',
        math: String.raw`\frac{dx}{x - 1} = t\,dt`,
        explanation: 'Divide both sides by $(x - 1)$ and multiply by $dt$.'
      },
      {
        title: 'Step 2: Integrate both sides',
        math: String.raw`\int \frac{dx}{x - 1} = \int t\,dt \implies \ln|x - 1| = \frac{t^2}{2} + C_1`,
        explanation: 'Integrate both sides.'
      },
      {
        title: 'Step 3: Exponentiate to isolate $x$',
        math: String.raw`|x - 1| = e^{C_1}e^{t^2/2} \implies x - 1 = Ce^{t^2/2}`,
        explanation: 'Exponentiate with multiplicative constant $C = \\pm e^{C_1}$.'
      },
      {
        title: 'Step 4: Apply initial condition $x(0) = 7$',
        math: String.raw`7 - 1 = Ce^0 \implies C = 6 \implies \boxed{x(t) = 1 + 6e^{t^2/2}}`,
        explanation: 'Substitute $t = 0, x = 7$ to find $C = 6$.'
      }
    ],
    finalAnswer: String.raw`x(t) = 1 + 6e^{t^2/2}`,
    tip: 'Important exam tip: The constant $C$ multiplies $e^{t^2/2}$, so $x = 1 + Ce^{t^2/2}$, NOT $1 + e^{t^2/2} + C$.'
  },

  'S21-5': {
    setup: {
      eq: String.raw`5\frac{dy}{dx} + 30y = 6`,
      goal: 'Find the general solution.'
    },
    steps: [
      {
        title: 'Step 1: Put into standard linear form',
        math: String.raw`y' + 6y = \frac{6}{5}`,
        explanation: 'Divide the entire equation by 5 so the coefficient of $y\'$ is 1.'
      },
      {
        title: 'Step 2: Compute integrating factor',
        math: String.raw`\mu(x) = e^{\int 6\,dx} = e^{6x}`,
        explanation: 'The integrating factor is $\\mu(x) = e^{6x}$.'
      },
      {
        title: 'Step 3: Integrate and solve for $y$',
        math: String.raw`(e^{6x}y)' = \frac{6}{5}e^{6x} \implies e^{6x}y = \frac{1}{5}e^{6x} + C \implies \boxed{y = Ce^{-6x} + \frac{1}{5}}`,
        explanation: 'Integrating $\\frac{6}{5}e^{6x}$ gives $\\frac{1}{5}e^{6x} + C$. Dividing by $e^{6x}$ yields the general solution.'
      }
    ],
    finalAnswer: String.raw`y = Ce^{-6x} + \frac{1}{5}`,
    tip: 'Important exam tip: Always divide by the leading coefficient (5) first before finding the integrating factor!'
  },

  'S21-6': {
    setup: {
      eq: String.raw`\left[8yt^5 + kt^2e^{ty}\right]dy = \left[\frac{2}{t} - 20y^2t^4 - ktye^{ty} - 5e^{ty}\right]dt`,
      goal: 'Find the parameter k that makes the equation exact.'
    },
    steps: [
      {
        title: 'Step 1: Rearrange into standard form $M\,dt + N\,dy = 0$',
        math: String.raw`M = 20y^2t^4 + ktye^{ty} + 5e^{ty} - \frac{2}{t}, \quad N = 8yt^5 + kt^2e^{ty}`,
        explanation: 'Move all terms to the left so $M\,dt + N\,dy = 0$.'
      },
      {
        title: 'Step 2: Compute partial derivatives $M_y$ and $N_t$',
        math: String.raw`M_y = 40yt^4 + kte^{ty} + kt^2ye^{ty} + 5te^{ty}, \quad N_t = 40yt^4 + 2kte^{ty} + kt^2ye^{ty}`,
        explanation: 'Differentiate $M$ with respect to $y$ and $N$ with respect to $t$.'
      },
      {
        title: 'Step 3: Equate $M_y = N_t$ and solve for $k$',
        math: String.raw`40yt^4 + kt^2ye^{ty} + (k + 5)te^{ty} = 40yt^4 + kt^2ye^{ty} + (2k)te^{ty} \implies k + 5 = 2k \implies \boxed{k = 5}`,
        explanation: 'Comparing coefficients of $te^{ty}$ gives $k + 5 = 2k$, so $k = 5$.'
      }
    ],
    finalAnswer: String.raw`k = 5`,
    tip: 'Important exam tip: Notice the variables are $t$ (independent) and $y$ (dependent). Differentiate $M$ with respect to $y$ and $N$ with respect to $t$!'
  },

  'S21-7': {
    setup: {
      eq: String.raw`y' = -y + xy^5`,
      goal: 'Solve using an appropriate substitution.'
    },
    steps: [
      {
        title: 'Step 1: Recognize Bernoulli form with $n = 5$',
        math: String.raw`y' + y = xy^5`,
        explanation: 'Bernoulli differential equation with $P(x) = 1, Q(x) = x, n = 5$.'
      },
      {
        title: 'Step 2: Substitute $u = y^{1-n} = y^{-4}$',
        math: String.raw`u = y^{-4} \implies u' = -4y^{-5}y' \implies y^{-5}y' = -\frac{1}{4}u'`,
        explanation: 'Divide the ODE by $y^5$: $y^{-5}y\' + y^{-4} = x$. Substitute $u$ to get $-\\frac{1}{4}u\' + u = x$.'
      },
      {
        title: 'Step 3: Put into standard linear form and find $\\mu(x)$',
        math: String.raw`u' - 4u = -4x \implies \mu(x) = e^{\int -4\,dx} = e^{-4x}`,
        explanation: 'Multiply by $-4$. The integrating factor is $\\mu(x) = e^{-4x}$.'
      },
      {
        title: 'Step 4: Integrate and solve for $y$',
        math: String.raw`(ue^{-4x})' = -4xe^{-4x} \implies ue^{-4x} = xe^{-4x} + \frac{1}{4}e^{-4x} + C \implies u = x + \frac{1}{4} + Ce^{4x}`,
        explanation: 'Integration by parts gives $ue^{-4x} = (x + 1/4)e^{-4x} + C$. Multiplying by $e^{4x}$ gives $u$.'
      },
      {
        title: 'Step 5: Back-substitute $u = y^{-4}$',
        math: String.raw`y^{-4} = x + \frac{1}{4} + Ce^{4x} \implies \boxed{y = \left(x + \frac{1}{4} + Ce^{4x}\right)^{-1/4}}`,
        explanation: 'Invert and take the 4th root to isolate $y$.'
      }
    ],
    finalAnswer: String.raw`y = \left(x + \frac{1}{4} + Ce^{4x}\right)^{-1/4}`,
    tip: 'Important exam tip: For Bernoulli $y\' + Py = Qy^n$, the substitution is ALWAYS $u = y^{1-n}$. For $n = 5$, $1 - 5 = -4$.'
  },

  'S21-8': {
    setup: {
      eq: String.raw`P(t) = P_0 2^{t/15}`,
      ic: String.raw`P_0 = 32\,000`,
      goal: 'Find the population in 11 years.'
    },
    steps: [
      {
        title: 'Step 1: Formulate the doubling model',
        math: String.raw`P(t) = 32\,000 \cdot 2^{t/15}`,
        explanation: 'Since the population doubles every 15 years, the population after $t$ years is scaled by $2^{t/15}$.'
      },
      {
        title: 'Step 2: Substitute $t = 11$ years',
        math: String.raw`P(11) = 32\,000 \cdot 2^{11/15} = 32\,000 \cdot 2^{0.7333} \approx 32\,000 \cdot 1.66247`,
        explanation: 'Calculate the exponent $11/15 \\approx 0.7333$ and compute $2^{0.7333} \\approx 1.66247$.'
      },
      {
        title: 'Step 3: Final numerical evaluation',
        math: String.raw`\boxed{P(11) \approx 53\,199}`,
        explanation: 'Multiply $32\\,000 \\times 1.66247$ to get 53 199.'
      }
    ],
    finalAnswer: String.raw`P(11) \approx 53\,199`,
    tip: 'Important exam tip: Using $P(t) = P_0 2^{t/T_{\text{double}}}$ is much faster and less prone to rounding errors than converting to $e^{kt}$.'
  },

  // ── ENGR 213 (Fall 2018 Midterm 1) ────────────────────────────────────────────
  'F18-1': {
    setup: {
      eq: String.raw`\frac{dy}{dx} = \frac{3x^2y}{1 + x^3}`,
      ic: String.raw`y(1) = 2`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Separate variables',
        math: String.raw`\frac{1}{y}\,dy = \frac{3x^2}{1 + x^3}\,dx`,
        explanation: 'Divide both sides by $y$ and multiply by $dx$ to group all $y$-terms on the left and $x$-terms on the right.'
      },
      {
        title: 'Step 2: Integrate both sides',
        math: String.raw`\int \frac{1}{y}\,dy = \int \frac{3x^2}{1 + x^3}\,dx \implies \ln|y| = \ln|1 + x^3| + C_1`,
        explanation: 'Using substitution $u = 1 + x^3, du = 3x^2dx$, the right integral is $\\ln|1 + x^3| + C_1$.'
      },
      {
        title: 'Step 3: Exponentiate to isolate $y$',
        math: String.raw`|y| = e^{C_1}|1 + x^3| \implies y(x) = C(1 + x^3)`,
        explanation: 'Exponentiate both sides with multiplicative constant $C = \\pm e^{C_1}$.'
      },
      {
        title: 'Step 4: Apply the initial condition $y(1) = 2$',
        math: String.raw`y(1) = C(1 + 1^3) = 2C = 2 \implies \boxed{C = 1}`,
        explanation: 'Substitute $x = 1, y = 2$ to determine constant $C$.'
      },
      {
        title: 'Step 5: Write the final solution',
        math: String.raw`\boxed{y(x) = 1 + x^3}`,
        explanation: 'Substitute $C = 1$ back into the solution family.'
      }
    ],
    finalAnswer: String.raw`y(x) = 1 + x^3`,
    tip: 'Important exam tip: Keep the constant multiplying the factored polynomial $C(1 + x^3)$ rather than adding it at the end!'
  },

  'F18-2': {
    setup: {
      eq: String.raw`\frac{dy}{dx} + 2xy = -xy^4`,
      goal: 'Solve the Bernoulli differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Recognize Bernoulli form with $n = 4$',
        math: String.raw`y' + 2xy = -xy^4 \implies n = 4`,
        explanation: 'The equation has standard Bernoulli form $y\' + P(x)y = Q(x)y^n$ with $n = 4$.'
      },
      {
        title: 'Step 2: Divide by $y^4$ and substitute $u = y^{-3}$',
        math: String.raw`y^{-4}y' + 2xy^{-3} = -x, \quad u = y^{-3} \implies u' = -3y^{-4}y'`,
        explanation: 'Substituting $y^{-4}y\' = -\\frac{1}{3}u\'$ linearizes the ODE.'
      },
      {
        title: 'Step 3: Put into standard linear form and find integrating factor',
        math: String.raw`-\frac{1}{3}u' + 2xu = -x \implies u' - 6xu = 3x \implies \mu(x) = e^{\int -6x\,dx} = e^{-3x^2}`,
        explanation: 'Multiply through by $-3$ to get $u\' - 6xu = 3x$ with integrating factor $\\mu(x) = e^{-3x^2}$.'
      },
      {
        title: 'Step 4: Integrate and isolate $u$',
        math: String.raw`(ue^{-3x^2})' = 3xe^{-3x^2} \implies ue^{-3x^2} = -\frac{1}{2}e^{-3x^2} + C \implies u = -\frac{1}{2} + Ce^{3x^2}`,
        explanation: 'Integrating $3xe^{-3x^2}\\,dx$ gives $-\\frac{1}{2}e^{-3x^2} + C$. Multiplying through by $e^{3x^2}$ yields $u$.'
      },
      {
        title: 'Step 5: Back-substitute $u = y^{-3}$',
        math: String.raw`y^{-3} = -\frac{1}{2} + Ce^{3x^2} \implies \boxed{y = \left(-\frac{1}{2} + Ce^{3x^2}\right)^{-1/3}}`,
        explanation: 'Take the $-1/3$ power to obtain the explicit solution for $y(x)$.'
      }
    ],
    finalAnswer: String.raw`y(x) = \left(-\frac{1}{2} + Ce^{3x^2}\right)^{-1/3}`,
    tip: 'Important exam tip: Watch the negative sign when multiplying by $-3$: $-(-x) \times (-3) = +3x$.'
  },

  'F18-3': {
    setup: {
      eq: String.raw`(4x^3 + 3x^2 + 3y)\,dx + (3x + 2y + 1)\,dy = 0`,
      goal: 'Solve the differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Test for exactness',
        math: String.raw`M = 4x^3 + 3x^2 + 3y, \quad N = 3x + 2y + 1 \implies \frac{\partial M}{\partial y} = 3, \quad \frac{\partial N}{\partial x} = 3 \quad (\text{Exact!})`,
        explanation: 'Since $M_y = N_x = 3$, the equation is exact.'
      },
      {
        title: 'Step 2: Integrate $M$ with respect to $x$',
        math: String.raw`F(x, y) = \int (4x^3 + 3x^2 + 3y)\,dx = x^4 + x^3 + 3xy + g(y)`,
        explanation: 'Integrate $M$ holding $y$ constant, adding an unknown function of $y$, $g(y)$.'
      },
      {
        title: 'Step 3: Differentiate with respect to $y$ and match with $N$',
        math: String.raw`\frac{\partial F}{\partial y} = 3x + g'(y) = 3x + 2y + 1 \implies g'(y) = 2y + 1`,
        explanation: 'Equating $F_y = N$ reveals $g\'(y) = 2y + 1$.'
      },
      {
        title: 'Step 4: Integrate $g\'(y)$ and write the implicit solution',
        math: String.raw`g(y) = y^2 + y \implies \boxed{x^4 + x^3 + 3xy + y^2 + y = C}`,
        explanation: 'Integrating $g\'(y)$ gives $y^2 + y$. Setting $F(x, y) = C$ gives the general solution.'
      }
    ],
    finalAnswer: String.raw`x^4 + x^3 + 3xy + y^2 + y = C`,
    tip: 'Important exam tip: For exact equations, leave the answer as $F(x, y) = C$; do not attempt to solve explicitly for $y$ unless asked.'
  },

  'F18-4': {
    setup: {
      eq: String.raw`(x^3 + y^3)\,dx - 3xy^2\,dy = 0`,
      ic: String.raw`y(1) = 1`,
      goal: 'Solve the homogeneous initial value problem.'
    },
    steps: [
      {
        title: 'Step 1: Verify homogeneity of degree 3',
        math: String.raw`M(tx, ty) = t^3 M(x, y), \quad N(tx, ty) = t^3 N(x, y) \implies \text{Homogeneous of degree 3}`,
        explanation: 'Both coefficients are homogeneous of degree 3, allowing substitution $y = vx$.'
      },
      {
        title: 'Step 2: Substitute $y = vx$ and $dy = v\,dx + x\,dv$',
        math: String.raw`(x^3 + v^3x^3)\,dx - 3x(v^2x^2)(v\,dx + x\,dv) = 0`,
        explanation: 'Substitute $y = vx$ and $dy = v\,dx + x\,dv$ throughout.'
      },
      {
        title: 'Step 3: Divide by $x^3$ and separate variables',
        math: String.raw`(1 - 2v^3)\,dx = 3v^2x\,dv \implies \frac{1}{x}\,dx = \frac{3v^2}{1 - 2v^3}\,dv`,
        explanation: 'Divide by $x^3$ and group terms to separate variables.'
      },
      {
        title: 'Step 4: Integrate both sides',
        math: String.raw`\ln|x| = -\frac{1}{2}\ln|1 - 2v^3| + c_1 \implies x^2(1 - 2v^3) = C`,
        explanation: 'Integrating both sides and exponentiating gives $x^2(1 - 2v^3) = C$.'
      },
      {
        title: 'Step 5: Back-substitute $v = y/x$ and apply initial condition $y(1) = 1$',
        math: String.raw`x^3 - 2y^3 = Cx \implies 1^3 - 2(1^3) = C(1) \implies C = -1`,
        explanation: 'Multiply by $x$ to get $x^3 - 2y^3 = Cx$. Substituting $x = 1, y = 1$ yields $C = -1$.'
      },
      {
        title: 'Step 6: Solve explicitly for $y(x)$',
        math: String.raw`x^3 - 2y^3 = -x \implies 2y^3 = x^3 + x \implies \boxed{y = \sqrt[3]{\frac{x^3 + x}{2}}}`,
        explanation: 'Isolate $y^3$ and take the cube root.'
      }
    ],
    finalAnswer: String.raw`y(x) = \sqrt[3]{\frac{x^3 + x}{2}}`,
    tip: 'Important exam tip: Do not forget $dy = v\,dx + x\,dv$! Forgetting the product rule term $x\,dv$ is the #1 mistake on homogeneous equations.'
  },

  'F18-5': {
    setup: {
      eq: String.raw`\frac{dx}{dt} = kx`,
      ic: String.raw`x(4) = 3x_0`,
      goal: 'Find the population after 12 hours.'
    },
    steps: [
      {
        title: 'Step 1: Write exponential growth model',
        math: String.raw`x(t) = x_0 e^{kt}`,
        explanation: 'Rate proportional to number present produces the exponential law $x(t) = x_0 e^{kt}$.'
      },
      {
        title: 'Step 2: Apply the tripling condition at $t = 4$',
        math: String.raw`x(4) = x_0 e^{4k} = 3x_0 \implies e^{4k} = 3`,
        explanation: 'The population triples every 4 hours, meaning $e^{4k} = 3$.'
      },
      {
        title: 'Step 3: Evaluate at $t = 12$ hours',
        math: String.raw`x(12) = x_0 e^{12k} = x_0 (e^{4k})^3 = x_0 (3)^3 = 27x_0`,
        explanation: 'Since 12 hours is three 4-hour periods, $(e^{4k})^3 = 3^3 = 27$.'
      },
      {
        title: 'Step 4: Conclude population ratio',
        math: String.raw`\boxed{27 \times \text{ initial population}}`,
        explanation: 'The population after 12 hours is 27 times the initial population.'
      }
    ],
    finalAnswer: String.raw`27 \times \text{ initial population}`,
    tip: 'Important exam tip: You don\'t need to calculate $k$ numerically! If a quantity multiplies by $M$ in time $T$, in time $m \\cdot T$ it multiplies by $M^m$.'
  },

  // ── ENGR 213 (Fall 2021 Quiz 1) ───────────────────────────────────────────────
  'F21-1': {
    setup: {
      eq: String.raw`\frac{d^2y}{dx^2} = \left(\frac{dy}{dx}\right)^4`,
      goal: 'Classify by order and linearity.'
    },
    steps: [
      {
        title: 'Step 1: Identify highest derivative',
        math: String.raw`\text{Highest derivative is } y'' \implies \text{Order 2}`,
        explanation: 'The order is strictly 2 because $y\'\'$ is the highest derivative.'
      },
      {
        title: 'Step 2: Check linearity',
        math: String.raw`(y')^4 \implies \text{Non-linear}`,
        explanation: 'The fourth power of $y\'$ violates linearity.'
      },
      {
        title: 'Step 3: Conclude',
        math: String.raw`\boxed{\text{2nd order nonlinear}}`,
        explanation: 'The equation is second-order and nonlinear.'
      }
    ],
    finalAnswer: String.raw`\text{2nd order nonlinear}`,
    tip: 'Important exam tip: The exponent 4 applies to the first derivative, not the 4th derivative!'
  },

  'F21-2a': {
    setup: {
      eq: String.raw`y'' + 6y' - 16y = 0`,
      goal: String.raw`\text{Check if } y = 2e^{-8x} + 3e^{2x} \text{ is a solution (True/False).}`
    },
    steps: [
      {
        title: 'Step 1: Form characteristic equation',
        math: String.raw`m^2 + 6m - 16 = 0 \implies (m + 8)(m - 2) = 0 \implies m = -8, \quad m = 2`,
        explanation: 'The roots of the characteristic equation are $m_1 = -8$ and $m_2 = 2$.'
      },
      {
        title: 'Step 2: Compare with candidate solution',
        math: String.raw`y(x) = c_1 e^{-8x} + c_2 e^{2x}`,
        explanation: 'The general solution is $c_1 e^{-8x} + c_2 e^{2x}$. Candidate $2e^{-8x} + 3e^{2x}$ matches with $c_1 = 2, c_2 = 3$.'
      },
      {
        title: 'Step 3: Conclude',
        math: String.raw`\boxed{\text{True}}`,
        explanation: 'The given function is indeed a solution.'
      }
    ],
    finalAnswer: String.raw`\text{True}`,
    tip: 'Important exam tip: For linear constant coefficient ODEs, factoring the characteristic equation is 10x faster than differentiating by hand!'
  },

  'F21-2b': {
    setup: {
      goal: 'Determine if every initial value problem has a unique solution (True/False).'
    },
    steps: [
      {
        title: 'Step 1: Inspect Picard\'s Theorem conditions',
        explanation: 'A unique solution is guaranteed ONLY when both $f(x, y)$ and $\\partial f/\\partial y$ are continuous in a region containing the initial point.'
      },
      {
        title: 'Step 2: Conclude',
        math: String.raw`\boxed{\text{False}}`,
        explanation: 'If continuity conditions fail, an IVP may have no solution or multiple solutions.'
      }
    ],
    finalAnswer: String.raw`\text{False}`,
    tip: 'Important exam tip: Absolute statements like "Every IVP" are almost always False on ODE exams.'
  },

  'F21-2c': {
    setup: {
      goal: 'Determine if a singular solution cannot be obtained by specializing parameters in the family of solutions (True/False).'
    },
    steps: [
      {
        title: 'Step 1: Definition of singular solution',
        explanation: 'By textbook definition (Zill Ch 1.1), a singular solution is an extra solution that cannot be obtained by assigning specific numerical values to the parameters $C$ in the general family of solutions.'
      },
      {
        title: 'Step 2: Conclude',
        math: String.raw`\boxed{\text{True}}`,
        explanation: 'The statement matches the rigorous mathematical definition.'
      }
    ],
    finalAnswer: String.raw`\text{True}`,
    tip: 'Important exam tip: Constant equilibrium solutions lost when dividing by $g(y) = 0$ in separation of variables are often singular solutions!'
  },

  'F21-3': {
    setup: {
      goal: 'Identify which differential equation is homogeneous.'
    },
    steps: [
      {
        title: 'Step 1: Test homogeneous property for $\\frac{dy}{dx} = \\frac{2x + 7y}{7x + 2y}$',
        math: String.raw`f(tx, ty) = \frac{2(tx) + 7(ty)}{7(tx) + 2(ty)} = \frac{t(2x + 7y)}{t(7x + 2y)} = f(x, y)`,
        explanation: 'Factoring $t$ from numerator and denominator cancels completely: $f(x, y) = \\frac{2 + 7(y/x)}{7 + 2(y/x)}$. This is homogeneous of degree 0.'
      },
      {
        title: 'Step 2: Conclude',
        math: String.raw`\boxed{\frac{dy}{dx} = \frac{2x + 7y}{7x + 2y}}`,
        explanation: 'Option A is homogeneous.'
      }
    ],
    finalAnswer: String.raw`\frac{dy}{dx} = \frac{2x + 7y}{7x + 2y}`,
    tip: 'Important exam tip: Divide numerator and denominator by $x$. If the entire expression can be written as a function of $(y/x)$, it is homogeneous!'
  },

  'F21-4': {
    setup: {
      eq: String.raw`\cos x\,dy + (\sin x)y\,dx = dx`,
      goal: 'Rewrite in standard linear form.'
    },
    steps: [
      {
        title: 'Step 1: Divide by $dx$',
        math: String.raw`(\cos x)\frac{dy}{dx} + (\sin x)y = 1`,
        explanation: 'Divide through by the differential $dx$.'
      },
      {
        title: 'Step 2: Divide by $\\cos x$ to normalize leading coefficient',
        math: String.raw`\frac{dy}{dx} + \frac{\sin x}{\cos x}y = \frac{1}{\cos x} \implies \boxed{\frac{dy}{dx} + (\tan x)y = \sec x}`,
        explanation: 'Standard linear form requires the coefficient of $dy/dx$ to be 1. Dividing by $\\cos x$ yields $\\tan x$ and $\\sec x$.'
      }
    ],
    finalAnswer: String.raw`\frac{dy}{dx} + (\tan x)y = \sec x`,
    tip: 'Important exam tip: Standard linear form MUST have $1$ in front of $dy/dx$. Always divide by the leading coefficient first!'
  },

  'F21-5': {
    setup: {
      goal: 'Identify which differential equation is separable.'
    },
    steps: [
      {
        title: String.raw`Step 1: Inspect $x\tan^{-1}(y)\frac{dy}{dx} = e^{x+y}$`,
        math: String.raw`e^{x+y} = e^x \cdot e^y \implies x\tan^{-1}(y)\frac{dy}{dx} = e^x e^y \implies \frac{\tan^{-1}(y)}{e^y}\,dy = \frac{e^x}{x}\,dx`,
        explanation: 'Since $e^{x+y}$ splits into an $x$-factor times a $y$-factor, variables can be separated completely.'
      },
      {
        title: 'Step 2: Conclude',
        math: String.raw`\boxed{x\tan^{-1}(y)\frac{dy}{dx} = e^{x+y}}`,
        explanation: 'The equation is separable.'
      }
    ],
    finalAnswer: String.raw`x\tan^{-1}(y)\frac{dy}{dx} = e^{x+y}`,
    tip: 'Important exam tip: Remember exponent rules: $e^{x+y} = e^x e^y$. This makes separation of variables possible!'
  },

  'F21-6': {
    setup: {
      eq: String.raw`(2y\sin x\cos x - y + 2y^2e^{xy^2})\,dx = (x - \sin^2x - 4xye^{xy^2})\,dy`,
      goal: 'Determine if exact and solve.'
    },
    steps: [
      {
        title: 'Step 1: Move all terms to one side $M\,dx + N\,dy = 0$',
        math: String.raw`M = 2y\sin x\cos x - y + 2y^2e^{xy^2}, \quad N = -x + \sin^2x + 4xye^{xy^2}`,
        explanation: 'Move $dy$ terms to the left: $-(x - \\sin^2 x - 4xye^{xy^2}) = -x + \\sin^2 x + 4xye^{xy^2}$.'
      },
      {
        title: 'Step 2: Test for exactness',
        math: String.raw`M_y = 2\sin x\cos x - 1 + 4ye^{xy^2} + 4xy^3e^{xy^2}, \quad N_x = -1 + 2\sin x\cos x + 4ye^{xy^2} + 4xy^3e^{xy^2} \implies \text{Exact!}`,
        explanation: 'Since $M_y = N_x$, the differential equation is exact.'
      },
      {
        title: 'Step 3: Integrate and find potential function $F(x, y)$',
        math: String.raw`F(x, y) = y\sin^2x - xy + 2e^{xy^2} \implies \boxed{y\sin^2x - xy + 2e^{xy^2} = C}`,
        explanation: 'Integrating gives the implicit solution.'
      }
    ],
    finalAnswer: String.raw`y\sin^2x - xy + 2e^{xy^2} = C`,
    tip: 'Important exam tip: Watch the negative sign when moving the right-hand side across the equals sign!'
  },

  // ── ENGR 213 (Other Quizzes) ──────────────────────────────────────────────────
  'OQ-1': {
    setup: {
      eq: String.raw`x\,dx + (y - 2x)\,dy = 0`,
      goal: 'Solve by homogeneous substitution.'
    },
    steps: [
      {
        title: 'Step 1: Substitute $y = ux, dy = u\,dx + x\,du$',
        math: String.raw`x\,dx + (ux - 2x)(u\,dx + x\,du) = 0 \implies [1 + u(u - 2)]\,dx + x(u - 2)\,du = 0`,
        explanation: 'Both coefficients are degree 1. Substitute $y = ux$.'
      },
      {
        title: 'Step 2: Simplify and separate variables',
        math: String.raw`(u - 1)^2\,dx + x(u - 2)\,du = 0 \implies \frac{1}{x}\,dx = -\frac{u - 2}{(u - 1)^2}\,du`,
        explanation: 'Note $1 + u^2 - 2u = (u - 1)^2$.'
      },
      {
        title: 'Step 3: Partial fractions on $u$',
        math: String.raw`\frac{u - 2}{(u - 1)^2} = \frac{(u - 1) - 1}{(u - 1)^2} = \frac{1}{u - 1} - \frac{1}{(u - 1)^2}`,
        explanation: 'Split the numerator into $(u - 1) - 1$.'
      },
      {
        title: 'Step 4: Integrate and back-substitute $u = y/x$',
        math: String.raw`\ln|x| = -\ln|u - 1| - \frac{1}{u - 1} + c \implies \boxed{\ln|y - x| + \frac{x}{y - x} = C}`,
        explanation: 'Combine $\\ln|x| + \\ln|\\frac{y-x}{x}| = \\ln|y - x|$ and simplify.'
      }
    ],
    finalAnswer: String.raw`\ln|y - x| + \frac{x}{y - x} = C`,
    tip: 'Important exam tip: Use algebraic splitting $\\frac{u-2}{(u-1)^2} = \\frac{1}{u-1} - \\frac{1}{(u-1)^2}$ instead of solving a system of equations!'
  },

  'OQ-2': {
    setup: {
      eq: String.raw`\frac{dy}{dx} - y = e^x y^2`,
      goal: 'Solve the Bernoulli differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Divide by $y^2$ and substitute $u = y^{-1}$',
        math: String.raw`y^{-2}y' - y^{-1} = e^x, \quad u = y^{-1} \implies u' = -y^{-2}y'`,
        explanation: 'Bernoulli with $n = 2$. Dividing by $y^2$ linearizes with $u = y^{-1}$.'
      },
      {
        title: 'Step 2: Standard linear form and integrating factor',
        math: String.raw`-u' - u = e^x \implies u' + u = -e^x \implies \mu(x) = e^x`,
        explanation: 'Multiply by $-1$. Integrating factor is $e^x$.'
      },
      {
        title: 'Step 3: Integrate and solve for $y$',
        math: String.raw`(ue^x)' = -e^{2x} \implies ue^x = -\frac{1}{2}e^{2x} + C \implies u = -\frac{1}{2}e^x + Ce^{-x} \implies \boxed{y = \frac{1}{Ce^{-x} - \frac{1}{2}e^x}}`,
        explanation: 'Integrate and invert $u = 1/y$.'
      }
    ],
    finalAnswer: String.raw`y = \frac{1}{Ce^{-x} - \frac{1}{2}e^x}`,
    tip: 'Important exam tip: For $n = 2$, $u = y^{-1}$, so $u\' = -y^{-2}y\'$. Remember the minus sign!'
  },

  'OQ-3': {
    setup: {
      eq: String.raw`\frac{y}{x}\,dx + (y^3 + \ln x)\,dy = 0`,
      ic: String.raw`y(1) = -2`,
      goal: 'Solve the initial value problem.'
    },
    steps: [
      {
        title: 'Step 1: Test exactness',
        math: String.raw`M = \frac{y}{x}, \quad N = y^3 + \ln x \implies M_y = \frac{1}{x}, \quad N_x = \frac{1}{x} \implies \text{Exact!}`,
        explanation: 'Partial derivatives match identically.'
      },
      {
        title: 'Step 2: Integrate $M$ in $x$',
        math: String.raw`F(x, y) = \int \frac{y}{x}\,dx = y\ln x + g(y)`,
        explanation: 'Integrate holding $y$ constant.'
      },
      {
        title: 'Step 3: Match with $N$',
        math: String.raw`F_y = \ln x + g'(y) = y^3 + \ln x \implies g'(y) = y^3 \implies g(y) = \frac{y^4}{4}`,
        explanation: 'Determine $g(y) = y^4/4$.'
      },
      {
        title: 'Step 4: Apply initial condition $y(1) = -2$',
        math: String.raw`(-2)\ln(1) + \frac{(-2)^4}{4} = 0 + 4 = 4 \implies \boxed{y\ln x + \frac{y^4}{4} = 4}`,
        explanation: 'Substitute $x = 1, y = -2$ to find constant $C = 4$.'
      }
    ],
    finalAnswer: String.raw`y\ln x + \frac{y^4}{4} = 4`,
    tip: 'Important exam tip: $\\ln(1) = 0$, making substitution at $x = 1$ very quick.'
  },

  'OQ-4': {
    setup: {
      eq: String.raw`y' + 2y = e^x y^2`,
      goal: 'Solve the Bernoulli differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Substitute $u = y^{-1}$',
        math: String.raw`u = y^{-1} \implies u' - 2u = -e^x`,
        explanation: 'Divide by $y^2$ and substitute $u = y^{-1}$.'
      },
      {
        title: 'Step 2: Integrating factor',
        math: String.raw`\mu(x) = e^{-2x} \implies (ue^{-2x})' = -e^{-x} \implies ue^{-2x} = e^{-x} + C`,
        explanation: 'Integrate $-e^{-x}$ to get $e^{-x} + C$.'
      },
      {
        title: 'Step 3: Invert for $y$',
        math: String.raw`u = e^x + Ce^{2x} \implies \boxed{y = \frac{1}{e^x + Ce^{2x}}}`,
        explanation: 'Multiply through by $e^{2x}$ and take reciprocal.'
      }
    ],
    finalAnswer: String.raw`y = \frac{1}{e^x + Ce^{2x}}`,
    tip: 'Important exam tip: The constant $C$ belongs inside the denominator: $y = 1/(e^x + Ce^{2x})$.'
  },

  'OQ-5': {
    setup: {
      eq: String.raw`(\sin x)y' + (\cos x)y = 2\sin x\cos x`,
      ic: String.raw`y(\pi/2) = 3`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Recognize left side as exact derivative',
        math: String.raw`(y\sin x)' = 2\sin x\cos x = \sin(2x)`,
        explanation: String.raw`By the product rule, $(\sin x)y' + (\cos x)y = (y\sin x)'$.`
      },
      {
        title: 'Step 2: Integrate both sides',
        math: String.raw`y\sin x = \int \sin(2x)\,dx = -\frac{1}{2}\cos(2x) + C`,
        explanation: 'Integrate $\\sin(2x)$ to get $-\\frac{1}{2}\\cos(2x) + C$.'
      },
      {
        title: 'Step 3: Apply initial condition $y(\pi/2) = 3$',
        math: String.raw`3\sin(\pi/2) = -\frac{1}{2}\cos(\pi) + C \implies 3(1) = -\frac{1}{2}(-1) + C \implies 3 = \frac{1}{2} + C \implies C = \frac{5}{2}`,
        explanation: 'Substitute $x = \\pi/2, y = 3$. Note $\\cos(\\pi) = -1$.'
      },
      {
        title: 'Step 4: Solve for $y(x)$',
        math: String.raw`y\sin x = \frac{5 - \cos(2x)}{2} \implies \boxed{y = \frac{5 - \cos 2x}{2\sin x}}`,
        explanation: 'Divide through by $\\sin x$.'
      }
    ],
    finalAnswer: String.raw`y = \frac{5 - \cos 2x}{2\sin x}`,
    tip: 'Important exam tip: Always check if the left-hand side is already $(y\\cdot g(x))\'$ before going through standard integrating factor steps!'
  },

  'OQ-6': {
    setup: {
      eq: String.raw`y' = x^3 - 2xy`,
      ic: String.raw`y(0) = 1`,
      goal: 'Solve the initial value problem.'
    },
    steps: [
      {
        title: 'Step 1: Put in linear standard form',
        math: String.raw`y' + 2xy = x^3 \implies \mu(x) = e^{\int 2x\,dx} = e^{x^2}`,
        explanation: 'Standard linear form with integrating factor $e^{x^2}$.'
      },
      {
        title: 'Step 2: Integrate right side using substitution',
        math: String.raw`ye^{x^2} = \int x^3e^{x^2}\,dx = \frac{1}{2}(x^2 - 1)e^{x^2} + C`,
        explanation: 'Let $u = x^2, du = 2x\\,dx$: $\\int \\frac{1}{2}u e^u\\,du = \\frac{1}{2}(u - 1)e^u + C$.'
      },
      {
        title: 'Step 3: Apply $y(0) = 1$',
        math: String.raw`1\cdot 1 = \frac{1}{2}(0 - 1)(1) + C \implies 1 = -\frac{1}{2} + C \implies C = \frac{3}{2}`,
        explanation: 'Substitute $x = 0, y = 1$ to get $C = 3/2$.'
      },
      {
        title: 'Step 4: Conclude explicit solution',
        math: String.raw`y(x) = \frac{1}{2}(x^2 - 1) + \frac{3}{2}e^{-x^2}`,
        explanation: 'Divide through by $e^{x^2}$.'
      }
    ],
    finalAnswer: String.raw`y(x) = \frac{1}{2}(x^2 - 1) + \frac{3}{2}e^{-x^2}`,
    tip: 'Important exam tip: For $\\int x^3 e^{x^2}dx$, write $x^3 = x^2 \\cdot x$ and substitute $w = x^2, dw = 2x\\,dx$.'
  },

  'OQ-7': {
    setup: {
      eq: String.raw`(\sin y - y\sin x)\,dx + (\cos x + x\cos y - y)\,dy = 0`,
      goal: 'Solve the exact differential equation.'
    },
    steps: [
      {
        title: 'Step 1: Test exactness',
        math: String.raw`M_y = \cos y - \sin x, \quad N_x = -\sin x + \cos y \implies \text{Exact!}`,
        explanation: 'Since $M_y = N_x$, the ODE is exact.'
      },
      {
        title: 'Step 2: Integrate $M$ in $x$',
        math: String.raw`F = \int (\sin y - y\sin x)\,dx = x\sin y + y\cos x + g(y)`,
        explanation: 'Integrate holding $y$ constant.'
      },
      {
        title: 'Step 3: Match with $N$',
        math: String.raw`F_y = x\cos y + \cos x + g'(y) = \cos x + x\cos y - y \implies g'(y) = -y \implies g(y) = -\frac{1}{2}y^2`,
        explanation: 'Find $g(y) = -y^2/2$.'
      },
      {
        title: 'Step 4: Conclude implicit general solution',
        math: String.raw`\boxed{x\sin y + y\cos x - \frac{1}{2}y^2 = C}`,
        explanation: 'Set $F(x, y) = C$.'
      }
    ],
    finalAnswer: String.raw`x\sin y + y\cos x - \frac{1}{2}y^2 = C`,
    tip: 'Important exam tip: Notice $\\int -y\\sin x\\,dx = +y\\cos x$ because $\\int \\sin x\\,dx = -\\cos x$.'
  },

  'OQ-8': {
    setup: {
      eq: String.raw`\frac{dy}{dx} + \cos(x)\,y = 0`,
      goal: 'Solve explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Separate variables',
        math: String.raw`\frac{dy}{y} = -\cos(x)\,dx \implies \ln|y| = -\sin(x) + c`,
        explanation: 'Separate and integrate both sides.'
      },
      {
        title: 'Step 2: Exponentiate',
        math: String.raw`\boxed{y(x) = Ke^{-\sin x}}`,
        explanation: 'Exponentiate with arbitrary constant $K = \\pm e^c$.'
      }
    ],
    finalAnswer: String.raw`y(x) = Ke^{-\sin x}`,
    tip: 'Important exam tip: Constant $K = 0$ also gives the equilibrium solution $y = 0$.'
  },

  'OQ-9': {
    setup: {
      eq: String.raw`A(t) = 100 e^{kt}`,
      ic: String.raw`A(6) = 97`,
      goal: 'Find amount remaining after 24 hours.'
    },
    steps: [
      {
        title: 'Step 1: Determine 6-hour decay ratio',
        math: String.raw`\text{After 6 h, 3\% decayed} \implies A(6) = 97\% \implies e^{6k} = 0.97`,
        explanation: 'Every 6 hours the substance retains $97\\%$ of its mass.'
      },
      {
        title: 'Step 2: Evaluate at $t = 24$ hours',
        math: String.raw`24 = 4 \times 6 \implies A(24) = 100(e^{6k})^4 = 100(0.97)^4 = 100(0.88529) \approx \boxed{88.53\text{ mg}}`,
        explanation: 'Raise the 6-hour factor to the 4th power.'
      }
    ],
    finalAnswer: String.raw`88.53\text{ mg}`,
    tip: 'Important exam tip: $24 / 6 = 4$ time periods. $(0.97)^4 \\approx 0.8853$. Never waste time finding $k$ in decimals!'
  },

  'OQ-10': {
    setup: {
      goal: 'Determine temperature of second room from Newton\'s law of cooling.'
    },
    steps: [
      {
        title: 'Step 1: Room 1 analysis',
        math: String.raw`T_m = 25^\circ\text{C}, \, T(0)=0^\circ\text{C}, \, T(10)=15^\circ\text{C} \implies 15 = 25 - 25e^{10k} \implies 25e^{10k} = 10 \implies e^{10k} = 0.4`,
        explanation: 'In Room 1, $e^{10k} = 0.4$.'
      },
      {
        title: 'Step 2: Room 2 analysis',
        math: String.raw`e^{12k} = (e^{10k})^{1.2} = (0.4)^{1.2} \approx 0.33306`,
        explanation: 'Compute decay over 12 minutes.'
      },
      {
        title: 'Step 3: Solve for $T_m$ of Room 2',
        math: String.raw`15 = T_m(1 - e^{12k}) = T_m(1 - 0.33306) = 0.66694 T_m \implies T_m = \frac{15}{0.66694} \approx \boxed{22.49^\circ\text{C}}`,
        explanation: 'Divide 15 by $0.66694$ to get $22.49^\\circ\\text{C}$.'
      }
    ],
    finalAnswer: String.raw`22.49^\circ\text{C}`,
    tip: 'Important exam tip: The cooling rate constant $k$ is an intrinsic physical property of the body and does not change between rooms!'
  },

  'OQ-11': {
    setup: {
      eq: String.raw`\frac{dy}{dx} = ky^{1.01}`,
      ic: String.raw`y(0) = 2, \quad y(3) = 16`,
      goal: 'Find rabbit population after 12 months.'
    },
    steps: [
      {
        title: 'Step 1: Separate variables and integrate',
        math: String.raw`y^{-1.01}\,dy = k\,dx \implies -100y^{-0.01} = kx + C`,
        explanation: 'Integrate $y^{-1.01}$ using power rule with exponent $-0.01$.'
      },
      {
        title: 'Step 2: Apply conditions and solve for constants',
        math: String.raw`y(0) = 2 \implies C = -100(2^{-0.01}) \approx -99.309 \implies k = 0.6811`,
        explanation: 'Using $y(3) = 16$ determines $k \\approx 0.6811$.'
      },
      {
        title: 'Step 3: Evaluate at $x = 12$',
        math: String.raw`y(12) \approx \boxed{10\,761\text{ rabbits}}`,
        explanation: 'Evaluate keeping full precision to avoid truncation explosion.'
      }
    ],
    finalAnswer: String.raw`10\,761\text{ rabbits}`,
    tip: 'Important exam tip: Because the exponent is $-100$, small roundoff errors blow up exponentially. Store intermediate values in your calculator memory!'
  },

  'OQ-12': {
    setup: {
      eq: String.raw`\frac{dy}{dx} = (x - 3)e^{-2y}`,
      ic: String.raw`y(3) = \ln 3`,
      goal: 'Solve the initial value problem explicitly.'
    },
    steps: [
      {
        title: 'Step 1: Separate variables',
        math: String.raw`e^{2y}\,dy = (x - 3)\,dx \implies \frac{1}{2}e^{2y} = \frac{1}{2}(x - 3)^2 + C`,
        explanation: 'Separate and integrate both sides.'
      },
      {
        title: 'Step 2: Apply initial condition $y(3) = \ln 3$',
        math: String.raw`\frac{1}{2}e^{2\ln 3} = \frac{1}{2}(0)^2 + C \implies \frac{1}{2}(9) = C \implies C = \frac{9}{2}`,
        explanation: 'Note $e^{2\\ln 3} = (e^{\\ln 3})^2 = 3^2 = 9$.'
      },
      {
        title: 'Step 3: Solve explicitly for $y(x)$',
        math: String.raw`e^{2y} = (x - 3)^2 + 9 \implies \boxed{y(x) = \frac{1}{2}\ln\left((x - 3)^2 + 9\right)}`,
        explanation: 'Take natural log and divide by 2.'
      }
    ],
    finalAnswer: String.raw`y(x) = \frac{1}{2}\ln\left((x - 3)^2 + 9\right)`,
    tip: 'Important exam tip: $e^{2\\ln 3} = e^{\\ln(3^2)} = 9$, not $2 \\times 3 = 6$!'
  },

  'OQ-13': {
    setup: {
      eq: String.raw`\frac{dy}{dt} = 100 - y`,
      goal: 'Determine which particular solution describes a student learning (y(0) = 10 vs 115).'
    },
    steps: [
      {
        title: 'Step 1: Inspect equilibrium and physical domain',
        math: String.raw`y(t) = 100 - (100 - y_0)e^{-t}`,
        explanation: 'Learning percentage cannot begin above $100\\%$. Starting at $y(0) = 10\\%$ allows $y(t)$ to approach $100\\%$ asymptotically.'
      },
      {
        title: 'Step 2: Conclude',
        math: String.raw`\boxed{y(0) = 10}`,
        explanation: 'Only $y(0) = 10$ is physically realistic.'
      }
    ],
    finalAnswer: String.raw`y(0) = 10`,
    tip: 'Important exam tip: Always check real-world engineering constraints (percentages cannot exceed 100%).'
  },

  'OQ-14': {
    setup: {
      eq: String.raw`\frac{dx}{dt} = kx`,
      goal: String.raw`\text{Find } k \text{ such that } x(t) = 2^t \text{ solves the ODE.}`
    },
    steps: [
      {
        title: 'Step 1: Differentiate $2^t$',
        math: String.raw`\frac{d}{dt}(2^t) = (\ln 2)2^t`,
        explanation: 'The derivative of $a^t$ is $(\\ln a)a^t$.'
      },
      {
        title: 'Step 2: Substitute into ODE',
        math: String.raw`(\ln 2)2^t = k(2^t) \implies \boxed{k = \ln 2 \approx 0.6931}`,
        explanation: 'Equating both sides gives $k = \\ln 2$.'
      }
    ],
    finalAnswer: String.raw`k = \ln 2 \approx 0.6931`,
    tip: 'Important exam tip: The derivative of $a^t$ has an extra factor of $\\ln a$.'
  },

  'OQ-15': {
    setup: {
      eq: String.raw`6t^2\frac{dx}{dt} + 5x + 3 = 0`,
      goal: 'Find constant solution x(t) = k.'
    },
    steps: [
      {
        title: 'Step 1: Substitute constant solution $dx/dt = 0$',
        math: String.raw`6t^2(0) + 5k + 3 = 0 \implies 5k + 3 = 0`,
        explanation: 'A constant function has derivative zero.'
      },
      {
        title: 'Step 2: Solve for $k$',
        math: String.raw`5k = -3 \implies \boxed{k = -\frac{3}{5} = -0.6}`,
        explanation: 'Isolate $k$.'
      }
    ],
    finalAnswer: String.raw`k = -0.6`,
    tip: 'Important exam tip: Constant solutions do not depend on $t$; all derivative terms vanish identically.'
  },

  // ── INDU 211 (Midterm & Quizzes) ──────────────────────────────────────────────
  'M20-10': {
    setup: {
      goal: 'Warehouse TSP: Nearest-Neighbour Route from Depot P visiting A–E.'
    },
    steps: [
      {
        title: 'Step 1: Start at Depot P and find nearest unvisited node',
        math: String.raw`\min\{\text{P}\to\text{A}:15, \, \text{B}:20, \, \text{C}:19, \, \text{D}:26, \, \text{E}:13\} = 13 \implies \text{Go to } \mathbf{E}`,
        explanation: 'From P, the smallest distance is to E (cost 13).'
      },
      {
        title: 'Step 2: From E, find nearest unvisited node',
        math: String.raw`\min\{\text{E}\to\text{A}:9, \, \text{B}:11, \, \text{C}:13, \, \text{D}:14\} = 9 \implies \text{Go to } \mathbf{A}`,
        explanation: 'From E, the minimum is to A (cost 9).'
      },
      {
        title: 'Step 3: Continue nearest-neighbour path',
        math: String.raw`\text{A}\to\text{B} (12) \implies \text{B}\to\text{D} (15) \implies \text{D}\to\text{C} (20)`,
        explanation: 'From A go to B (12), from B go to D (15), from D go to C (20).'
      },
      {
        title: 'Step 4: Return to Depot P and sum total distance',
        math: String.raw`\text{C}\to\text{P} = 22 \implies 13 + 9 + 12 + 15 + 20 + 22 = \boxed{91}`,
        explanation: 'Return to start P. Total route distance is 91.'
      }
    ],
    finalAnswer: String.raw`91`,
    tip: 'Important exam tip: Nearest-neighbour is a greedy heuristic; always remember the return leg back to the starting depot P!'
  },

  'M20-11': {
    setup: {
      goal: 'Warehouse TSP: 2nd-Nearest First, then Nearest Neighbour thereafter.'
    },
    steps: [
      {
        title: 'Step 1: Choose 2nd-nearest neighbor from Depot P',
        math: String.raw`\text{From P: nearest is E (13), second nearest is } \mathbf{A} (15)`,
        explanation: 'Follow instructions to start with 2nd nearest node A.'
      },
      {
        title: 'Step 2: Nearest neighbour thereafter',
        math: String.raw`\text{A}\to\text{B} (12) \implies \text{B}\to\text{D} (15) \implies \text{D}\to\text{E} (12) \implies \text{E}\to\text{C} (13)`,
        explanation: 'Follow nearest unvisited stop at each subsequent step.'
      },
      {
        title: 'Step 3: Return to Depot P and calculate total',
        math: String.raw`\text{C}\to\text{P} = 22 \implies 15 + 12 + 15 + 12 + 13 + 22 = \boxed{89}`,
        explanation: 'Summing all edges gives 89.'
      }
    ],
    finalAnswer: String.raw`89`,
    tip: 'Important exam tip: Notice 89 < 91: this proves that the pure nearest-neighbour greedy heuristic is NOT guaranteed to find the global optimum!'
  },

  'M20-12': {
    setup: {
      goal: 'Determine optimality of the nearest-neighbour routes (Problem 2.3).'
    },
    steps: [
      {
        title: 'Step 1: Heuristic nature of nearest-neighbour',
        explanation: 'Nearest-neighbour is a heuristic algorithm. It does not evaluate all permutations.'
      },
      {
        title: 'Step 2: Conclude',
        math: String.raw`\boxed{\text{Neither is guaranteed optimal: both are heuristics}}`,
        explanation: 'Because both routes were found using greedy heuristic rules, neither can be certified optimal without an exhaustive branch-and-bound search.'
      }
    ],
    finalAnswer: String.raw`\text{Neither is guaranteed optimal: both are heuristics}`,
    tip: 'Important exam tip: Only exact algorithms (Branch & Bound, Integer Linear Programming) guarantee optimality for NP-hard TSP problems.'
  },

  // ── MIAE 215 (C++ Programming & Tracing) ──────────────────────────────────────
  'M24-1a': {
    setup: {
      eq: String.raw`\text{cout} \ll (5\%2) * \text{int}(1.5 + 2);`,
      goal: 'Determine the exact console output printed.'
    },
    steps: [
      {
        title: 'Step 1: Evaluate modulo operator $5 \% 2$',
        math: String.raw`5 \% 2 = 1`,
        explanation: 'The % operator gives the integer remainder: $5 = 2 \times 2 + 1$, so $5 \% 2 = 1$.'
      },
      {
        title: 'Step 2: Evaluate arithmetic and integer cast $\\text{int}(1.5 + 2)$',
        math: String.raw`1.5 + 2 = 3.5 \implies \text{int}(3.5) = 3`,
        explanation: 'Floating point addition gives 3.5. Casting to int truncates the decimal part toward zero, giving 3.'
      },
      {
        title: 'Step 3: Multiply results',
        math: String.raw`1 \times 3 = \boxed{3}`,
        explanation: 'Multiplying $1 \\times 3 = 3$.'
      }
    ],
    finalAnswer: String.raw`3`,
    tip: 'Important exam tip: Casting to int in C++ TRUNCATES toward zero, it does NOT round! int(3.99) is 3, not 4.'
  },

  'R21-2c': {
    setup: {
      goal: 'Trace if-ladder and factorial loop with integer division.'
    },
    steps: [
      {
        title: 'Step 1: Evaluate condition with integer division',
        math: String.raw`i / j = 9 / 4 = 2 \quad (\text{integer division!}) \implies 2 < 2.1 \implies \text{Condition is True!}`,
        explanation: 'Both operands 9 and 4 are ints, so $9/4$ truncates to 2. Since $2 < 2.1$, the first branch executes.'
      },
      {
        title: 'Step 2: Trace factorial loop accumulator',
        math: String.raw`\text{product} = 2 \times 3 \times 2 \times 1 = \boxed{12}`,
        explanation: 'The loop executes and accumulates product starting from 2: $2 \\times 6 = 12$.'
      }
    ],
    finalAnswer: String.raw`\text{Prints 2, product becomes 12}`,
    tip: 'Important exam tip: In C++, integer / integer drops the decimal before any comparison occurs! $9/4$ is 2, NOT 2.25.'
  }
};
