import { PracticeQuestion } from '../types';

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "courseId": "ENGR213",
    "topic": "Separable ODEs",
    "difficulty": "Foundation",
    "question": "Solve the initial value problem $\\frac{dy}{dx} = 2x(y^2 + 1)$ with $y(0) = 0$. What is $y(x)$?",
    "options": [
      "$y = \\tan(x^2)$",
      "$y = \\arctan(x^2)$",
      "$y = e^{x^2} - 1$",
      "$y = \\ln(x^2 + 1)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Separation of variables by integrating both sides.",
      "stepByStep": [
        "Separate: $\\frac{dy}{y^2+1} = 2x \\, dx$",
        "Integrate: $\\arctan(y) = x^2 + C$",
        "Apply $y(0) = 0 \\implies \\arctan(0) = 0 + C \\implies C = 0$",
        "Solve for $y$: $y = \\tan(x^2)$."
      ],
      "commonTrap": "Confusing $\\arctan(y)$ with $\\ln|y^2+1|$ which requires a factor of $2y$ in the numerator.",
      "reference": "Zill Section 2.2 / Dr. Haghighat Lecture 3"
    },
    "id": "Q_ENGR213_001"
  },
  {
    "courseId": "ENGR213",
    "topic": "Linear First-Order ODEs",
    "difficulty": "Midterm Level",
    "question": "Find the integrating factor $\\mu(x)$ for the linear ODE: $x \\frac{dy}{dx} + 3y = \\frac{\\sin x}{x^2}$ for $x > 0$.",
    "options": [
      "$\\mu(x) = x^3$",
      "$\\mu(x) = 3\\ln(x)$",
      "$\\mu(x) = x^{-3}$",
      "$\\mu(x) = e^{3x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "First divide by the leading coefficient to put into standard form $\\frac{dy}{dx} + P(x)y = Q(x)$.",
      "stepByStep": [
        "Standard form: $\\frac{dy}{dx} + \\frac{3}{x}y = \\frac{\\sin x}{x^3}$",
        "Identify $P(x) = \\frac{3}{x}$",
        "Compute $\\mu(x) = e^{\\int P(x)dx} = e^{\\int \\frac{3}{x}dx} = e^{3\\ln x} = e^{\\ln(x^3)} = x^3$."
      ],
      "commonTrap": "Forgetting to divide by $x$ before identifying $P(x)$, leading to $\\mu(x) = e^{3x}$.",
      "reference": "Zill Section 2.3 / Lecture 3"
    },
    "id": "Q_ENGR213_002"
  },
  {
    "courseId": "ENGR213",
    "topic": "Exact Equations",
    "difficulty": "Midterm Level",
    "question": "Which condition proves that $M(x, y)dx + N(x, y)dy = 0$ is an exact differential equation?",
    "options": [
      "$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$",
      "$\\frac{\\partial M}{\\partial x} = \\frac{\\partial N}{\\partial y}$",
      "$\\frac{\\partial M}{\\partial y} + \\frac{\\partial N}{\\partial x} = 0$",
      "$M(x, y) = N(x, y)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Clairaut's theorem on the equality of mixed partial derivatives for a potential function $f(x, y)$.",
      "stepByStep": [
        "If $df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy = M dx + N dy$",
        "Then $\\frac{\\partial M}{\\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$ and $\\frac{\\partial N}{\\partial x} = \\frac{\\partial^2 f}{\\partial x \\partial y}$",
        "Since mixed partials are equal for smooth functions: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$."
      ],
      "commonTrap": "Differentiating $M$ with respect to $x$ and $N$ with respect to $y$ (swapping the variables).",
      "reference": "Zill Section 2.4 / Lecture 4"
    },
    "id": "Q_ENGR213_003"
  },
  {
    "courseId": "ENGR213",
    "topic": "Integrating Factors",
    "difficulty": "Exam Master",
    "question": "If $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = g(x)$ depends only on $x$, what is the integrating factor $\\mu(x)$?",
    "options": [
      "$\\mu(x) = e^{\\int g(x)dx}$",
      "$\\mu(x) = e^{-\\int g(x)dx}$",
      "$\\mu(x) = \\int g(x)dx$",
      "$\\mu(x) = g'(x)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Integrating factor as a function of a single independent variable.",
      "stepByStep": [
        "Multiplying by $\\mu(x)$ yields $\\mu M dx + \\mu N dy = 0$.",
        "Exactness requires $\\frac{\\partial(\\mu M)}{\\partial y} = \\frac{\\partial(\\mu N)}{\\partial x} \\implies \\mu \\frac{\\partial M}{\\partial y} = N \\frac{d\\mu}{dx} + \\mu \\frac{\\partial N}{\\partial x}$",
        "Rearranging: $\\frac{1}{\\mu}\\frac{d\\mu}{dx} = \\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = g(x)$",
        "Integrating yields $\\mu(x) = e^{\\int g(x)dx}$."
      ],
      "commonTrap": "Using a negative sign in the exponent; the negative exponent belongs to the $y$-only integrating factor formula $\\mu(y) = e^{-\\int h(y)dy}$.",
      "reference": "Zill Section 2.4 / Lecture 4"
    },
    "id": "Q_ENGR213_004"
  },
  {
    "courseId": "ENGR213",
    "topic": "Bernoulli Equations",
    "difficulty": "Midterm Level",
    "question": "For the Bernoulli equation $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ with $n \\ne 0, 1$, what is the appropriate substitution to linearize it?",
    "options": [
      "$u = y^{1-n}$",
      "$u = y^{n-1}$",
      "$u = y^{-n}$",
      "$u = \\ln(y)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Transforming non-linear Bernoulli equations into standard linear first-order ODEs.",
      "stepByStep": [
        "Divide by $y^n$: $y^{-n}\\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$",
        "Let $u = y^{1-n}$, then $\\frac{du}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$",
        "Substituting gives the linear ODE: $\\frac{1}{1-n}\\frac{du}{dx} + P(x)u = Q(x)$."
      ],
      "commonTrap": "Setting $u = y^n$ or $u = y^{n-1}$, which fails to eliminate the non-linear derivative product.",
      "reference": "Zill Section 2.5 / Lecture 5"
    },
    "id": "Q_ENGR213_005"
  },
  {
    "courseId": "ENGR213",
    "topic": "Linear Models",
    "difficulty": "Midterm Level",
    "question": "A thermometer reading $70^\\circ\\text{F}$ is placed in an oven at constant temperature $T_m = 350^\\circ\\text{F}$. If $\\frac{dT}{dt} = k(T - T_m)$, what is the general form of $T(t)$?",
    "options": [
      "$T(t) = 350 - 280 e^{kt}$",
      "$T(t) = 350 + 70 e^{kt}$",
      "$T(t) = 70 + 280 e^{-kt}$",
      "$T(t) = 350 e^{kt}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Newton's Law of Cooling/Warming: rate of temperature change is proportional to the difference between object and ambient temperature.",
      "stepByStep": [
        "ODE: $\\frac{dT}{dt} - kT = -k(350)$",
        "Solution: $T(t) = T_m + C e^{kt} = 350 + C e^{kt}$",
        "Initial condition: $T(0) = 70 \\implies 350 + C = 70 \\implies C = -280$",
        "Hence: $T(t) = 350 - 280 e^{kt}$ (with $k < 0$ for cooling/warming towards equilibrium)."
      ],
      "commonTrap": "Setting $C = 70$ without subtracting the ambient oven temperature $350$.",
      "reference": "Zill Section 2.7 / Dr. Haghighat Lecture 6"
    },
    "id": "Q_ENGR213_006"
  },
  {
    "courseId": "ENGR213",
    "topic": "Mixture Problems",
    "difficulty": "Midterm Level",
    "question": "A 100-gallon tank contains 20 lbs of salt. Pure water enters at $3\\text{ gal/min}$, and the well-stirred mixture leaves at $3\\text{ gal/min}$. What is the salt amount $A(t)$ after $t$ minutes?",
    "options": [
      "$A(t) = 20 e^{-0.03t}$",
      "$A(t) = 20 e^{0.03t}$",
      "$A(t) = 20 - 3t$",
      "$A(t) = 20 e^{-3t}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Conservation of mass rate: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
      "stepByStep": [
        "$R_{\\text{in}} = (0\\text{ lb/gal})(3\\text{ gal/min}) = 0$",
        "$R_{\\text{out}} = \\left(\\frac{A(t)}{100}\\right)(3) = 0.03 A(t)$",
        "$\\frac{dA}{dt} = -0.03 A \\implies A(t) = A(0)e^{-0.03t} = 20 e^{-0.03t}$."
      ],
      "commonTrap": "Forgetting that volume is in the denominator ($100$), leading to an incorrect decay rate of $-3t$.",
      "reference": "Zill Section 2.7 / Team Project 1 Prep"
    },
    "id": "Q_ENGR213_007"
  },
  {
    "courseId": "ENGR213",
    "topic": "Mixture Problems",
    "difficulty": "Exam Master",
    "question": "In a brine tank with initial volume $V_0 = 500\\text{ L}$, solution enters at $r_{\\text{in}} = 5\\text{ L/min}$ and drains at $r_{\\text{out}} = 3\\text{ L/min}$. What is the volume $V(t)$ in the tank at time $t$?",
    "options": [
      "$V(t) = 500 + 2t$",
      "$V(t) = 500 - 2t$",
      "$V(t) = 500 + 8t$",
      "$V(t) = 500(1 + 0.02t)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rate of accumulation of liquid volume: $\\frac{dV}{dt} = r_{\\text{in}} - r_{\\text{out}}$.",
      "stepByStep": [
        "$\\frac{dV}{dt} = 5 - 3 = 2\\text{ L/min}$",
        "Integrate with $V(0) = 500$: $V(t) = 500 + 2t$."
      ],
      "commonTrap": "Subtracting $r_{\\text{in}} - r_{\\text{out}}$ in reverse order, which would imply the tank is emptying.",
      "reference": "Zill Section 2.7 / Lecture 6"
    },
    "id": "Q_ENGR213_008"
  },
  {
    "courseId": "ENGR213",
    "topic": "Electrical Circuits",
    "difficulty": "Midterm Level",
    "question": "An LR series circuit has inductance $L = 2\\text{ H}$, resistance $R = 10\\,\\Omega$, and constant voltage $E(t) = 60\\text{ V}$. What is the steady-state current $i_{\\text{ss}}$ as $t \\to \\infty$?",
    "options": [
      "$6\\text{ A}$",
      "$30\\text{ A}$",
      "$0\\text{ A}$",
      "$12\\text{ A}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Governing ODE: $L\\frac{di}{dt} + Ri = E(t)$. In steady state, $\\frac{di}{dt} \\to 0$.",
      "stepByStep": [
        "As $t \\to \\infty$, the transient current decays to zero.",
        "Steady state equation: $0 + R i_{\\text{ss}} = E \\implies 10 i_{\\text{ss}} = 60$",
        "$i_{\\text{ss}} = 6\\text{ A}$."
      ],
      "commonTrap": "Dividing $E$ by $L$ instead of $R$, or forgetting that the inductor behaves as a short circuit in DC steady state.",
      "reference": "Zill Section 2.7 / Lecture 6"
    },
    "id": "Q_ENGR213_009"
  },
  {
    "courseId": "ENGR213",
    "topic": "Substitutions",
    "difficulty": "Midterm Level",
    "question": "A function $f(x, y)$ is homogeneous of degree $k$ if $f(tx, ty) = t^k f(x, y)$. What substitution solves $(x^2 + y^2)dx + (x^2 - xy)dy = 0$?",
    "options": [
      "$y = ux$",
      "$y = u + x$",
      "$u = x^2 + y^2$",
      "$y = e^{ux}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "When $M(x, y)$ and $N(x, y)$ are homogeneous of the same degree, substituting $y = ux$ (or $x = vy$) reduces the equation to separable form.",
      "stepByStep": [
        "$M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$, degree $k = 2$.",
        "Substitute $y = ux \\implies dy = u dx + x du$.",
        "Factoring out $x^2$ leaves an ODE strictly in terms of $u$ and $x$ which is separable."
      ],
      "commonTrap": "Assuming $u = y/x$ requires implicit differentiation without transforming $dy$ into $u dx + x du$.",
      "reference": "Zill Section 2.5 / Lecture 5"
    },
    "id": "Q_ENGR213_010"
  },
  {
    "courseId": "ENGR213",
    "topic": "Linear Models",
    "difficulty": "Foundation",
    "question": "In the Malthusian population model $\\frac{dP}{dt} = kP$, if a culture doubles in 5 hours, what is the growth constant $k$?",
    "options": [
      "$k = \\frac{\\ln 2}{5}$",
      "$k = 5\\ln 2$",
      "$k = \\frac{2}{5}$",
      "$k = \\ln(2.5)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Exponential growth rate constant calculation from half-life or doubling time.",
      "stepByStep": [
        "$P(t) = P_0 e^{kt}$",
        "$P(5) = 2P_0 = P_0 e^{5k} \\implies e^{5k} = 2$",
        "Take natural log: $5k = \\ln 2 \\implies k = \\frac{\\ln 2}{5} \\approx 0.1386\\text{ hr}^{-1}$."
      ],
      "commonTrap": "Multiplying by the time interval instead of dividing: $k \\ne 5\\ln 2$.",
      "reference": "Zill Section 2.7 / Lecture 6"
    },
    "id": "Q_ENGR213_011"
  },
  {
    "courseId": "ENGR213",
    "topic": "Higher-Order ODEs",
    "difficulty": "Midterm Level",
    "question": "What is the general solution to $y'' - 6y' + 9y = 0$?",
    "options": [
      "$y = c_1 e^{3x} + c_2 x e^{3x}$",
      "$y = c_1 e^{3x} + c_2 e^{-3x}$",
      "$y = c_1 \\cos(3x) + c_2 \\sin(3x)$",
      "$y = c_1 e^{3x} + c_2 e^{3x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Characteristic auxiliary equation with repeated real roots $m_1 = m_2 = m$.",
      "stepByStep": [
        "Auxiliary equation: $m^2 - 6m + 9 = 0 \\implies (m - 3)^2 = 0$",
        "Double root: $m_1 = m_2 = 3$",
        "Linear independence requires multiplying the second solution by $x$: $y(x) = c_1 e^{3x} + c_2 x e^{3x}$."
      ],
      "commonTrap": "Omitting the factor of $x$ for repeated roots, which creates linearly dependent functions.",
      "reference": "Zill Chapter 3"
    },
    "id": "Q_ENGR213_012"
  },
  {
    "courseId": "ENGR213",
    "topic": "Higher-Order ODEs",
    "difficulty": "Midterm Level",
    "question": "If the auxiliary equation of $y'' + ay' + by = 0$ yields roots $m = 2 \\pm 5i$, what is the general solution?",
    "options": [
      "$y = e^{2x}(c_1 \\cos 5x + c_2 \\sin 5x)$",
      "$y = c_1 e^{2x} + c_2 e^{5x}$",
      "$y = e^{5x}(c_1 \\cos 2x + c_2 \\sin 2x)$",
      "$y = c_1 \\cos(2x) + c_2 \\sin(5x)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Euler's formula transformation of complex exponential roots $m = \\alpha \\pm i\\beta$ into real sinusoidal solutions.",
      "stepByStep": [
        "Real part $\\alpha = 2$ determines the exponential envelope $e^{\\alpha x} = e^{2x}$.",
        "Imaginary part $\\beta = 5$ determines the oscillation frequency: $\\cos(5x), \\sin(5x)$.",
        "General solution: $y = e^{2x}(c_1 \\cos 5x + c_2 \\sin 5x)$."
      ],
      "commonTrap": "Swapping the real and imaginary parts (putting $5$ in the exponential and $2$ in the trig arguments).",
      "reference": "Zill Chapter 3"
    },
    "id": "Q_ENGR213_013"
  },
  {
    "courseId": "ENGR213",
    "topic": "Non-Homogeneous ODEs",
    "difficulty": "Midterm Level",
    "question": "To find a particular solution $y_p$ for $y'' + 4y = 3\\cos(2x)$, what trial form should be used?",
    "options": [
      "$y_p = x(A \\cos 2x + B \\sin 2x)$",
      "$y_p = A \\cos 2x + B \\sin 2x$",
      "$y_p = A \\cos 2x$",
      "$y_p = A x^2 \\cos 2x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Resonance modification rule in the Method of Undetermined Coefficients.",
      "stepByStep": [
        "Complementary solution to $y'' + 4y = 0$ is $y_c = c_1 \\cos 2x + c_2 \\sin 2x$.",
        "The forcing term $3\\cos(2x)$ is already present in $y_c$.",
        "Therefore, multiply the standard trial form by $x$ to achieve linear independence: $y_p = x(A \\cos 2x + B \\sin 2x)$."
      ],
      "commonTrap": "Failing to check for duplication with $y_c$, leading to the trial form vanishing when substituted.",
      "reference": "Zill Chapter 3"
    },
    "id": "Q_ENGR213_014"
  },
  {
    "courseId": "ENGR213",
    "topic": "Cauchy-Euler Equations",
    "difficulty": "Exam Master",
    "question": "What is the auxiliary equation for the Cauchy-Euler differential equation $x^2 y'' + 5x y' + 4y = 0$ for $x > 0$?",
    "options": [
      "$m(m - 1) + 5m + 4 = 0$",
      "$m^2 + 5m + 4 = 0$",
      "$x^2 m^2 + 5x m + 4 = 0$",
      "$m^2 - 5m + 4 = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Trial solution $y = x^m$ leads to $y' = m x^{m-1}$ and $y'' = m(m-1)x^{m-2}$.",
      "stepByStep": [
        "Substitute: $x^2[m(m-1)x^{m-2}] + 5x[m x^{m-1}] + 4 x^m = 0$",
        "Factor out $x^m$: $[m(m-1) + 5m + 4] = 0$",
        "Simplify: $m^2 + 4m + 4 = 0 \\implies (m + 2)^2 = 0$."
      ],
      "commonTrap": "Assuming the characteristic polynomial is simply $m^2 + 5m + 4 = 0$, forgetting that $x^2 y''$ yields $m(m-1)$.",
      "reference": "Zill Chapter 3"
    },
    "id": "Q_ENGR213_015"
  },
  {
    "courseId": "ENGR213",
    "topic": "Separable ODEs",
    "difficulty": "Midterm Level",
    "question": "What is the singular solution (lost solution) of $\\frac{dy}{dx} = y^2 - 4$?",
    "options": [
      "$y = -2$ and $y = 2$",
      "$y = 0$",
      "$y = 4$",
      "None"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Singular solutions occur where dividing by $g(y) = 0$ is invalid.",
      "stepByStep": [
        "$y^2 - 4 = 0 \\implies y = \\pm 2$.",
        "Both are horizontal equilibrium solutions."
      ],
      "commonTrap": "Missing the negative root.",
      "reference": "Zill 2.2"
    },
    "id": "Q_ENGR213_016"
  },
  {
    "courseId": "ENGR213",
    "topic": "Exact Equations",
    "difficulty": "Exam Master",
    "question": "If $(2xy + 3)dx + (x^2 - 1)dy = 0$, find the potential function $f(x, y) = C$.",
    "options": [
      "$f(x,y) = x^2 y + 3x - y = C$",
      "$f(x,y) = x^2 y^2 + 3x = C$",
      "$f(x,y) = 2x^2 y - y = C$",
      "$f(x,y) = x^2 + 3xy = C$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Integrate $M$ with respect to $x$ and compare with $N$.",
      "stepByStep": [
        "$\\int (2xy + 3)dx = x^2 y + 3x + g(y)$",
        "$f_y = x^2 + g'(y) = x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y$",
        "$f(x, y) = x^2 y + 3x - y = C$."
      ],
      "commonTrap": "Forgetting to integrate $g'(y)$ to obtain $-y$.",
      "reference": "Zill 2.4"
    },
    "id": "Q_ENGR213_017"
  },
  {
    "courseId": "ENGR213",
    "topic": "Linear Models",
    "difficulty": "Midterm Level",
    "question": "A radioactive isotope has half-life $T_{1/2} = 1600\\text{ yrs}$. What percentage remains after $4800\\text{ yrs}$?",
    "options": [
      "$12.5\\%$",
      "$25\\%$",
      "$6.25\\%$",
      "$33.3\\%$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Number of half-lives elapsed: $n = 4800 / 1600 = 3$.",
      "stepByStep": [
        "$A = A_0 (1/2)^3 = A_0 / 8 = 12.5\\%$."
      ],
      "commonTrap": "Subtracting $1/3$ instead of raising $1/2$ to power 3.",
      "reference": "Zill 2.7"
    },
    "id": "Q_ENGR213_018"
  },
  {
    "courseId": "ENGR213",
    "topic": "Linear Models",
    "difficulty": "Foundation",
    "question": "In a cooling body with $T_m = 20^\\circ\\text{C}$ and $T(0) = 100^\\circ\\text{C}$, what is the initial temperature difference?",
    "options": [
      "$80^\\circ\\text{C}$",
      "$100^\\circ\\text{C}$",
      "$20^\\circ\\text{C}$",
      "$120^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Difference is $T(0) - T_m = 100 - 20 = 80^\\circ\\text{C}$.",
      "stepByStep": [
        "$T(0) - T_m = 80$."
      ],
      "commonTrap": "Thinking difference is $T(0)$.",
      "reference": "Lecture 6"
    },
    "id": "Q_ENGR213_019"
  },
  {
    "courseId": "ENGR213",
    "topic": "First-Order Modeling",
    "difficulty": "Midterm Level",
    "question": "What is the integrating factor for $\\frac{dy}{dx} - 2y = e^{2x}$?",
    "options": [
      "$\\mu(x) = e^{-2x}$",
      "$\\mu(x) = e^{2x}$",
      "$\\mu(x) = -2x$",
      "$\\mu(x) = e^{-x^2}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$P(x) = -2 \\implies \\mu(x) = e^{\\int -2 dx} = e^{-2x}$.",
      "stepByStep": [
        "$\\mu(x) = e^{-2x}$."
      ],
      "commonTrap": "Dropping the negative sign in $P(x)$.",
      "reference": "Zill 2.3"
    },
    "id": "Q_ENGR213_020"
  },
  {
    "courseId": "ENGR213",
    "topic": "Autonomous ODEs",
    "difficulty": "Midterm Level",
    "question": "For the autonomous ODE $\\frac{dy}{dx} = y(y - 3)$, what are the critical points?",
    "options": [
      "$y = 0$ (stable) and $y = 3$ (unstable)",
      "$y = 0$ (unstable) and $y = 3$ (stable)",
      "$y = 0$ and $y = -3$",
      "$y = 3$ only"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Roots of $f(y) = y(y - 3) = 0$ are $y = 0$ and $y = 3$.",
      "stepByStep": [
        "For $y < 0, f > 0$; $0 < y < 3, f < 0$; $y > 3, f > 0$.",
        "$y = 0$ is an attractor (asymptotically stable), $y = 3$ is a repeller (unstable)."
      ],
      "commonTrap": "Misinterpreting phase line arrows.",
      "reference": "Zill 2.1"
    },
    "id": "Q_ENGR213_021"
  },
  {
    "courseId": "ENGR213",
    "topic": "Differential Form",
    "difficulty": "Foundation",
    "question": "What is the order and linearity of $(y'')^3 + x y' + y = \\sin x$?",
    "options": [
      "Second order, non-linear",
      "Third order, linear",
      "Second order, linear",
      "Third order, non-linear"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The highest derivative is $y''$ (order 2), raised to power 3 (non-linear).",
      "stepByStep": [
        "Order = 2, non-linear due to $(y'')^3$."
      ],
      "commonTrap": "Confusing power of derivative with derivative order.",
      "reference": "Zill 1.1"
    },
    "id": "Q_ENGR213_022"
  },
  {
    "courseId": "ENGR213",
    "topic": "IVP Existence & Uniqueness",
    "difficulty": "Exam Master",
    "question": "By Picard's Theorem, for $\\frac{dy}{dx} = \\frac{y}{x}$, does a unique solution exist through $(0, 1)$?",
    "options": [
      "No, because $f(x, y)$ is discontinuous at $x = 0$",
      "Yes, unique solution exists",
      "Infinitely many solutions exist",
      "Only an imaginary solution exists"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Theorem requires $f$ and $\\partial f/\\partial y$ to be continuous in a rectangle containing $(x_0, y_0)$.",
      "stepByStep": [
        "$x = 0$ makes $f(x, y) = y/x$ undefined.",
        "Thus theorem does not guarantee existence."
      ],
      "commonTrap": "Attempting to solve before checking continuity.",
      "reference": "Zill 1.2"
    },
    "id": "Q_ENGR213_023"
  },
  {
    "courseId": "ENGR213",
    "topic": "Substitutions",
    "difficulty": "Midterm Level",
    "question": "What substitution linearizes $\\frac{dy}{dx} = \\sin(x + y)$?",
    "options": [
      "$u = x + y$",
      "$u = x - y$",
      "$u = \\sin(x)$",
      "$u = y/x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Equations of the form $\\frac{dy}{dx} = f(Ax + By + C)$ use $u = Ax + By + C$.",
      "stepByStep": [
        "$u = x + y \\implies \\frac{du}{dx} = 1 + \\frac{dy}{dx} \\implies \\frac{du}{dx} - 1 = \\sin(u)$.",
        "Separable: $\\frac{du}{1 + \\sin u} = dx$."
      ],
      "commonTrap": "Trying to expand $\\sin(x+y) = \\sin x \\cos y + \\cos x \\sin y$.",
      "reference": "Zill 2.5"
    },
    "id": "Q_ENGR213_024"
  },
  {
    "courseId": "ENGR213",
    "topic": "Reduction of Order",
    "difficulty": "Exam Master",
    "question": "If $y_1(x) = e^x$ is a known solution to $y'' - y = 0$, what formula finds $y_2(x)$?",
    "options": [
      "$y_2 = y_1 \\int \\frac{e^{-\\int P dx}}{y_1^2} dx$",
      "$y_2 = y_1^2 \\int e^{-P} dx$",
      "$y_2 = x y_1$",
      "$y_2 = y_1 \\cdot e^{-x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Abel's formula / Reduction of Order standard integral.",
      "stepByStep": [
        "$y_2(x) = y_1(x) \\int \\frac{e^{-\\int P(x)dx}}{[y_1(x)]^2} dx$."
      ],
      "commonTrap": "Neglecting the denominator $y_1^2$.",
      "reference": "Zill 3.2"
    },
    "id": "Q_ENGR213_025"
  },
  {
    "courseId": "ENGR213",
    "topic": "Wronskian",
    "difficulty": "Midterm Level",
    "question": "What is the Wronskian $W(e^{2x}, e^{-2x})$?",
    "options": [
      "$-4$",
      "$0$",
      "$4$",
      "$e^{4x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$W(y_1, y_2) = y_1 y_2' - y_1' y_2$.",
      "stepByStep": [
        "$W = e^{2x}(-2e^{-2x}) - (2e^{2x})(e^{-2x}) = -2 - 2 = -4 \\ne 0$."
      ],
      "commonTrap": "Arithmetic sign error resulting in $0$.",
      "reference": "Zill 3.1"
    },
    "id": "Q_ENGR213_026"
  },
  {
    "courseId": "ENGR213",
    "topic": "Laplace Transform",
    "difficulty": "Foundation",
    "question": "What is the Laplace transform $\\mathcal{L}\\{e^{3t}\\}$ for $s > 3$?",
    "options": [
      "$\\frac{1}{s - 3}$",
      "$\\frac{1}{s + 3}$",
      "$\\frac{3}{s^2 + 9}$",
      "$\\frac{1}{s^2}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Definition $\\int_0^\\infty e^{-st} e^{3t} dt = \\int_0^\\infty e^{-(s-3)t} dt = \\frac{1}{s-3}$.",
      "stepByStep": [
        "$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$."
      ],
      "commonTrap": "Sign confusion: choosing $s+3$.",
      "reference": "Zill Chapter 4"
    },
    "id": "Q_ENGR213_027"
  },
  {
    "courseId": "ENGR213",
    "topic": "Inverse Laplace",
    "difficulty": "Midterm Level",
    "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{4}{s^2 + 16}\\right\\}$.",
    "options": [
      "$\\sin(4t)$",
      "$\\cos(4t)$",
      "$e^{4t}$",
      "$4\\sin(t)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard transform $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$ with $\\omega = 4$.",
      "stepByStep": [
        "$\\omega = 4 \\implies \\sin(4t)$."
      ],
      "commonTrap": "Picking $\\cos(4t)$ which requires $s$ in numerator.",
      "reference": "Zill Chapter 4"
    },
    "id": "Q_ENGR213_028"
  },
  {
    "courseId": "ENGR213",
    "topic": "Series RLC Circuits",
    "difficulty": "Exam Master",
    "question": "In a series RLC circuit, what condition produces critical damping?",
    "options": [
      "$R = 2\\sqrt{\\frac{L}{C}}$",
      "$R > 2\\sqrt{\\frac{L}{C}}$",
      "$R < 2\\sqrt{\\frac{L}{C}}$",
      "$R = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Critical damping occurs when the discriminant of $L m^2 + R m + 1/C = 0$ is zero: $R^2 - 4L/C = 0$.",
      "stepByStep": [
        "$R^2 = 4L/C \\implies R = 2\\sqrt{L/C}$."
      ],
      "commonTrap": "Confusing over-damped ($>$) with critically damped ($=$).",
      "reference": "Zill 3.8"
    },
    "id": "Q_ENGR213_029"
  },
  {
    "courseId": "ENGR213",
    "topic": "Harmonic Motion",
    "difficulty": "Foundation",
    "question": "A mass-spring system governed by $x'' + 16x = 0$ has natural circular frequency $\\omega$ equal to:",
    "options": [
      "$4\\text{ rad/s}$",
      "$16\\text{ rad/s}$",
      "$2\\text{ rad/s}$",
      "$8\\pi\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard form is $x'' + \\omega^2 x = 0 \\implies \\omega^2 = 16 \\implies \\omega = 4$.",
      "stepByStep": [
        "$\\omega = \\sqrt{16} = 4$."
      ],
      "commonTrap": "Taking $16$ directly as $\\omega$.",
      "reference": "Zill 3.8"
    },
    "id": "Q_ENGR213_030"
  },
  {
    "courseId": "INDU211",
    "topic": "Break-Even Analysis",
    "difficulty": "Foundation",
    "question": "A manufacturing process has fixed costs $FC = $50,000$, variable cost $v = $15$/unit, and selling price $p = $25$/unit. What is the break-even volume $Q^*$?",
    "options": [
      "5,000 units",
      "2,000 units",
      "3,333 units",
      "10,000 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Break-even occurs where Total Revenue equals Total Cost: $pQ = FC + vQ$.",
      "stepByStep": [
        "$Q^* = \\frac{FC}{p - v} = \\frac{50,000}{25 - 15} = \\frac{50,000}{10} = 5,000$ units."
      ],
      "commonTrap": "Dividing $FC$ by price $p$ instead of unit contribution margin $(p - v)$.",
      "reference": "INDU 211 Ch. 3 / Slide 18"
    },
    "id": "Q_INDU211_031"
  },
  {
    "courseId": "INDU211",
    "topic": "Multi-Process Crossover",
    "difficulty": "Midterm Level",
    "question": "Process A has $FC_A = $10,000$, $v_A = $8$. Process B has $FC_B = $30,000$, $v_B = $4$. At what crossover volume $Q_{AB}$ are both processes economically equal?",
    "options": [
      "5,000 units",
      "4,000 units",
      "7,500 units",
      "10,000 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Equate total cost curves: $TC_A = TC_B \\implies FC_A + v_A Q = FC_B + v_B Q$.",
      "stepByStep": [
        "$10,000 + 8Q = 30,000 + 4Q$",
        "$4Q = 20,000 \\implies Q = 5,000$ units."
      ],
      "commonTrap": "Subtracting fixed costs in wrong direction.",
      "reference": "INDU 211 Ch. 3 / Worked Problem Guide"
    },
    "id": "Q_INDU211_032"
  },
  {
    "courseId": "INDU211",
    "topic": "Center of Gravity Location",
    "difficulty": "Midterm Level",
    "question": "Three retail stores at coordinates $(10, 20)$, $(30, 40)$, $(20, 10)$ have shipment volumes of $100, 200, 100$ tons. What is the optimal Center of Gravity $X^*$ coordinate?",
    "options": [
      "$22.5$",
      "$20.0$",
      "$25.0$",
      "$18.5$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Weighted average coordinate: $X^* = \\frac{\\sum W_i X_i}{\\sum W_i}$.",
      "stepByStep": [
        "$\\sum W_i X_i = (100)(10) + (200)(30) + (100)(20) = 1,000 + 6,000 + 2,000 = 9,000$",
        "$\\sum W_i = 100 + 200 + 100 = 400$",
        "$X^* = 9,000 / 400 = 22.5$."
      ],
      "commonTrap": "Computing unweighted average $(10+30+20)/3 = 20$.",
      "reference": "INDU 211 Ch. 4 Part 1"
    },
    "id": "Q_INDU211_033"
  },
  {
    "courseId": "INDU211",
    "topic": "Distance Metrics",
    "difficulty": "Foundation",
    "question": "What is the rectilinear (Manhattan) distance between facility A $(2, 3)$ and facility B $(8, 11)$?",
    "options": [
      "$14$",
      "$10$",
      "$8$",
      "$12$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rectilinear distance $d_R = |x_1 - x_2| + |y_1 - y_2|$.",
      "stepByStep": [
        "$d_R = |2 - 8| + |3 - 11| = 6 + 8 = 14$."
      ],
      "commonTrap": "Calculating Euclidean straight-line distance $\\sqrt{6^2 + 8^2} = 10$.",
      "reference": "INDU 211 Ch. 4 Part 1"
    },
    "id": "Q_INDU211_034"
  },
  {
    "courseId": "INDU211",
    "topic": "Facility Layouts",
    "difficulty": "Midterm Level",
    "question": "Which facility layout configuration is characterized by grouping machines by process function (e.g., all lathes in one department, all mills in another) for high-variety, low-volume production?",
    "options": [
      "Process Layout (Job Shop)",
      "Product Layout (Flow Line)",
      "Cellular Layout (Group Technology)",
      "Fixed-Position Layout"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Process layouts arrange departments by technological process function to handle diverse routings.",
      "stepByStep": [
        "Process layouts offer high flexibility for low-volume, high-variety custom parts."
      ],
      "commonTrap": "Confusing with Cellular layout, which groups dissimilar machines into dedicated part-family cells.",
      "reference": "INDU 211 Ch. 4 Part 2"
    },
    "id": "Q_INDU211_035"
  },
  {
    "courseId": "INDU211",
    "topic": "Material Handling Cost Rule",
    "difficulty": "Foundation",
    "question": "According to classic plant layout engineering, what proportion of total manufacturing operating expense is typically attributed to material handling?",
    "options": [
      "$30\\% \\text{ to } 75\\%$",
      "$5\\% \\text{ to } 10\\%$",
      "$90\\% \\text{ to } 95\\%$",
      "Less than $5\\%$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Material handling represents 30% to 75% of manufacturing operating costs.",
      "stepByStep": [
        "Material handling adds cost but zero direct value to the product."
      ],
      "commonTrap": "Underestimating material handling as a minor 5% overhead cost.",
      "reference": "INDU 211 Ch. 4 Part 2 / Tompkins"
    },
    "id": "Q_INDU211_036"
  },
  {
    "courseId": "INDU211",
    "topic": "Line Balancing Cycle Time",
    "difficulty": "Midterm Level",
    "question": "A production line operates 8 hours/day ($28,800\\text{ sec}$) and must satisfy customer demand of $720\\text{ units/day}$. What is the required line cycle time $T_c$?",
    "options": [
      "$40\\text{ seconds}$",
      "$60\\text{ seconds}$",
      "$24\\text{ seconds}$",
      "$45\\text{ seconds}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Takt time / cycle time formula: $T_c = \\frac{T_{\\text{available}}}{D}$.",
      "stepByStep": [
        "$T_c = 28,800\\text{ sec} / 720\\text{ units} = 40\\text{ seconds/unit}$."
      ],
      "commonTrap": "Multiplying demand by time rather than dividing.",
      "reference": "INDU 211 Ch. 4 / Assignment 1"
    },
    "id": "Q_INDU211_037"
  },
  {
    "courseId": "INDU211",
    "topic": "Theoretical Minimum Workstations",
    "difficulty": "Midterm Level",
    "question": "If total work content time $\\sum t_i = 135\\text{ seconds}$ and the cycle time is $T_c = 40\\text{ seconds}$, what is the theoretical minimum number of stations $N_{\\min}$?",
    "options": [
      "$4\\text{ stations}$",
      "$3.375\\text{ stations}$",
      "$3\\text{ stations}$",
      "$5\\text{ stations}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Minimum stations formula: $N_{\\min} = \\lceil \\sum t_i / T_c \\rceil$ (rounded up to next integer).",
      "stepByStep": [
        "$135 / 40 = 3.375$. Since fractional stations cannot exist, round up to $4$."
      ],
      "commonTrap": "Rounding down to 3, which would exceed cycle time.",
      "reference": "INDU 211 Ch. 4 / Worked Problems"
    },
    "id": "Q_INDU211_038"
  },
  {
    "courseId": "INDU211",
    "topic": "Line Balancing Efficiency",
    "difficulty": "Midterm Level",
    "question": "An assembly line has total work time $\\sum t_i = 100\\text{ s}$, utilizes $N = 4$ stations, and operates with cycle time $T_c = 30\\text{ s}$. What is the line balancing efficiency $E$?",
    "options": [
      "$83.33\\%$",
      "$75.00\\%$",
      "$90.00\\%$",
      "$80.00\\%$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Line efficiency formula: $E = \\frac{\\sum t_i}{N \\cdot T_c} \\times 100\\%$.",
      "stepByStep": [
        "$E = \\frac{100}{4 \\times 30} = \\frac{100}{120} = 0.8333 = 83.33\\%$."
      ],
      "commonTrap": "Dividing by total work time instead of total allocated capacity $N \\cdot T_c$.",
      "reference": "INDU 211 Assignment 1"
    },
    "id": "Q_INDU211_039"
  },
  {
    "courseId": "INDU211",
    "topic": "Economic Order Quantity (EOQ)",
    "difficulty": "Midterm Level",
    "question": "If annual demand $D = 10,000\\text{ units}$, ordering cost $S = $50$/order, and holding cost $H = $4$/unit/year, what is the Economic Order Quantity $EOQ$?",
    "options": [
      "$500\\text{ units}$",
      "$250\\text{ units}$",
      "$1,000\\text{ units}$",
      "$707\\text{ units}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Wilson EOQ formula: $EOQ = \\sqrt{\\frac{2DS}{H}}$.",
      "stepByStep": [
        "$EOQ = \\sqrt{\\frac{2 \\times 10,000 \\times 50}{4}} = \\sqrt{\\frac{1,000,000}{4}} = \\sqrt{250,000} = 500\\text{ units}$."
      ],
      "commonTrap": "Forgetting the factor of $2$ in the numerator, yielding $353$.",
      "reference": "INDU 211 Operations Guide"
    },
    "id": "Q_INDU211_040"
  },
  {
    "courseId": "INDU211",
    "topic": "Process Capability Index Cpk",
    "difficulty": "Exam Master",
    "question": "A machined pin has specification limits $USL = 10.5\\text{ mm}$, $LSL = 9.5\\text{ mm}$. If process mean $\\mu = 10.1\\text{ mm}$ and standard deviation $\\sigma = 0.1\\text{ mm}$, what is $C_{pk}$?",
    "options": [
      "$1.33$",
      "$1.67$",
      "$2.00$",
      "$1.00$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$C_{pk} = \\min\\left[\\frac{USL - \\mu}{3\\sigma}, \\frac{\\mu - LSL}{3\\sigma}\\right]$.",
      "stepByStep": [
        "Upper capability: $\\frac{10.5 - 10.1}{3(0.1)} = \\frac{0.4}{0.3} = 1.333$",
        "Lower capability: $\\frac{10.1 - 9.5}{3(0.1)} = \\frac{0.6}{0.3} = 2.00$",
        "$C_{pk} = \\min(1.333, 2.00) = 1.33$."
      ],
      "commonTrap": "Taking $C_p = \\frac{USL - LSL}{6\\sigma} = 1.67$, which ignores the mean shift.",
      "reference": "INDU 211 Term Paper / SQC"
    },
    "id": "Q_INDU211_041"
  },
  {
    "courseId": "INDU211",
    "topic": "Shewhart Control Charts",
    "difficulty": "Foundation",
    "question": "In an $\\bar{X}$ statistical quality control chart with sample size $n = 5$, what do the Upper and Lower Control Limits represent?",
    "options": [
      "$\\pm 3$ standard errors of the mean ($\\mu \\pm 3\\sigma_{\\bar{x}}$)",
      "Specification tolerance limits set by the customer",
      "Machine tool physical wear boundaries",
      "$\\pm 1$ standard deviation of individual parts"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Control limits are natural process limits derived from sampling statistics, representing $99.73\\%$ of sample means.",
      "stepByStep": [
        "$\text{UCL/LCL} = \\bar{\\bar{X}} \\pm A_2 \\bar{R} = \\mu \\pm 3\\sigma / \\sqrt{n}$."
      ],
      "commonTrap": "Confusing statistical process control limits with customer specification tolerance limits.",
      "reference": "INDU 211 Ch. 12 / SQC"
    },
    "id": "Q_INDU211_042"
  },
  {
    "courseId": "INDU211",
    "topic": "Concurrent Engineering",
    "difficulty": "Foundation",
    "question": "What is the primary operational advantage of Concurrent Engineering over traditional sequential 'over-the-wall' product development?",
    "options": [
      "Simultaneous cross-functional collaboration reducing time-to-market and design redesign iterations",
      "Eliminating the need for physical prototypes",
      "Outsourcing all fabrication to lowest bidder",
      "Replacing manufacturing engineers with sales reps"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Concurrent Engineering integrates product design, manufacturing engineering, quality, and procurement simultaneously.",
      "stepByStep": [
        "Parallel design workflows identify manufacturability conflicts early, drastically reducing engineering change orders (ECOs)."
      ],
      "commonTrap": "Believing it just means working faster without cross-functional integration.",
      "reference": "INDU 211 Ch. 3 / Slide 7"
    },
    "id": "Q_INDU211_043"
  },
  {
    "courseId": "INDU211",
    "topic": "Group Technology (GT)",
    "difficulty": "Midterm Level",
    "question": "What is the core principle of Group Technology (GT) in cellular manufacturing?",
    "options": [
      "Grouping parts with similar geometric shapes or manufacturing process steps into part families",
      "Arranging all machines in a single straight conveyor line",
      "Purchasing identical machine tools from one vendor",
      "Running only one single product all year long"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Group Technology exploits part similarities in design attributes and manufacturing processing routings.",
      "stepByStep": [
        "Part families are assigned to manufacturing cells, minimizing setup times and WIP."
      ],
      "commonTrap": "Confusing part families with product volume.",
      "reference": "INDU 211 Ch. 4 Part 2"
    },
    "id": "Q_INDU211_044"
  },
  {
    "courseId": "INDU211",
    "topic": "Bill of Materials (BOM)",
    "difficulty": "Foundation",
    "question": "In a multi-level Bill of Materials (BOM), what does Level 0 designate?",
    "options": [
      "The final finished product assembly",
      "Raw raw-material stock",
      "The first sub-assembly component",
      "Purchased fastener hardware"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In standard BOM tree hierarchy, Level 0 is the top-level parent end-item.",
      "stepByStep": [
        "Level 0 = Finished Product, Level 1 = Major Sub-assemblies, Level 2 = Components, Level 3 = Raw Materials."
      ],
      "commonTrap": "Thinking Level 0 is the bottom raw material.",
      "reference": "INDU 211 Ch. 3 / Assignment 1"
    },
    "id": "Q_INDU211_045"
  },
  {
    "courseId": "INDU211",
    "topic": "MOST Work Measurement",
    "difficulty": "Midterm Level",
    "question": "In the Maynard Operation Sequence Technique (MOST), one Time Measurement Unit (TMU) is equivalent to:",
    "options": [
      "$0.00001\\text{ hours} = 0.036\\text{ seconds}$",
      "$1.0\\text{ second}$",
      "$0.01\\text{ minutes} = 0.6\\text{ seconds}$",
      "$0.1\\text{ seconds}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$1\\text{ hour} = 100,000\\text{ TMU} \\implies 1\\text{ TMU} = 0.036\\text{ seconds}$.",
      "stepByStep": [
        "$1\\text{ TMU} = 10^{-5}\\text{ hr} = 0.0006\\text{ min} = 0.036\\text{ sec}$."
      ],
      "commonTrap": "Confusing TMU with standard decimal minutes.",
      "reference": "INDU 211 Work Measurement"
    },
    "id": "Q_INDU211_046"
  },
  {
    "courseId": "INDU211",
    "topic": "Ergonomics & RULA",
    "difficulty": "Foundation",
    "question": "What does a high score ($6\\text{ to }7$) in a Rapid Upper Limb Assessment (RULA) indicate to an Industrial Engineer?",
    "options": [
      "Investigate and implement workstation ergonomic redesign immediately",
      "The posture is acceptable and poses zero musculoskeletal risk",
      "The operator requires no breaks",
      "Workstation pace should be doubled"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "RULA scores 5-6 require investigation and change soon; scores 7+ require immediate ergonomic engineering intervention.",
      "stepByStep": [
        "High score indicates severe posture/load risk."
      ],
      "commonTrap": "Assuming higher score means better performance.",
      "reference": "INDU 211 Ergonomics"
    },
    "id": "Q_INDU211_047"
  },
  {
    "courseId": "INDU211",
    "topic": "Industry 5.0 Core Pillars",
    "difficulty": "Midterm Level",
    "question": "What are the three core foundational pillars defined by the European Commission for Industry 5.0?",
    "options": [
      "Human-Centricity, Sustainability, and Resilience",
      "Hyper-Automation, Zero-Labor, and 5G",
      "Cloud Computing, Big Data, and Cyber-Physical Systems",
      "Cost Reduction, Speed, and Global Sourcing"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Industry 5.0 elevates Industry 4.0 by prioritizing human well-being, ecological sustainability, and enterprise resilience.",
      "stepByStep": [
        "Human-centric, sustainable, and resilient."
      ],
      "commonTrap": "Selecting the purely technological pillars of Industry 4.0.",
      "reference": "INDU 211 Term Paper Section 6"
    },
    "id": "Q_INDU211_048"
  },
  {
    "courseId": "INDU211",
    "topic": "Human-in-the-Loop in IE",
    "difficulty": "Midterm Level",
    "question": "In an Industry 5.0 manufacturing system, what is the primary role of the Human-in-the-Loop (HITL) Industrial Engineer?",
    "options": [
      "Formulating system constraints, arbitrating edge-case disruptions, and validating life-safety and ethical compliance",
      "Manually typing CNC G-code line by line",
      "Executing repetitive stopwatch time studies",
      "Replacing AI algorithms with hand calculations"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Engineers transition from manual calculation executors to systemic constraint architects and edge-case governors.",
      "stepByStep": [
        "Humans define the 'what and why' while AI explores the 'how'."
      ],
      "commonTrap": "Viewing the human as a low-level computer.",
      "reference": "INDU 211 Term Paper Section 6"
    },
    "id": "Q_INDU211_049"
  },
  {
    "courseId": "INDU211",
    "topic": "AI Hallucinations in Manufacturing",
    "difficulty": "Exam Master",
    "question": "Why are generative AI hallucinations especially dangerous in physical manufacturing compared to web software?",
    "options": [
      "Ungrounded model outputs (e.g. invalid CNC feeds or robot paths) cause physical tool destruction, machine collisions, and worker injury",
      "They only cause minor text typos in marketing brochures",
      "They slow down internet bandwidth on the shop floor",
      "They have zero impact because machines ignore software code"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Software bugs cause software crashes; ungrounded physical commands cause catastrophic equipment collisions and life-safety hazards.",
      "stepByStep": [
        "Non-deterministic feed rates can shatter titanium cutters and spray shrapnel."
      ],
      "commonTrap": "Equating physical manufacturing with digital app development.",
      "reference": "INDU 211 Term Paper Section 5"
    },
    "id": "Q_INDU211_050"
  },
  {
    "courseId": "INDU211",
    "topic": "Bullwhip Effect",
    "difficulty": "Midterm Level",
    "question": "What is the Bullwhip Effect in industrial supply chain management?",
    "options": [
      "Increasing variance of demand orders as one moves upstream from consumer to raw material supplier",
      "A rapid increase in freight transport costs",
      "The sudden physical breakdown of conveyor belts",
      "Fluctuations in currency exchange rates"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Slight changes in customer retail demand amplify into massive swings in orders placed with upstream manufacturers and suppliers.",
      "stepByStep": [
        "Variance amplification upstream: $\\sigma^2_{\\text{orders}} > \\sigma^2_{\\text{demand}}$."
      ],
      "commonTrap": "Thinking it refers to physical factory whipping tools.",
      "reference": "INDU 211 Term Paper Section 3"
    },
    "id": "Q_INDU211_051"
  },
  {
    "courseId": "INDU211",
    "topic": "P.Eng. Legal Liability",
    "difficulty": "Midterm Level",
    "question": "Under Quebec engineering law (OIQ), can an autonomous AI platform legally stamp and sign off on a plant layout or safety system?",
    "options": [
      "No, professional engineering liability legally requires personal review and seal by a licensed human Professional Engineer (ing. / P.Eng.)",
      "Yes, if the algorithm achieves $99\\%$ accuracy",
      "Yes, if the software is approved by Microsoft",
      "Yes, under the federal copyright act"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Only licensed human members of the Ordre des ing\u00e9nieurs du Qu\u00e9bec hold legal accountability and liability.",
      "stepByStep": [
        "Algorithms cannot hold professional liability insurance or take an ethical oath."
      ],
      "commonTrap": "Believing software vendors assume statutory engineering liability.",
      "reference": "INDU 211 Term Paper Section 5"
    },
    "id": "Q_INDU211_052"
  },
  {
    "courseId": "INDU211",
    "topic": "Cellular Manufacturing Benefits",
    "difficulty": "Foundation",
    "question": "What is the primary metric improved by transitioning from a functional process layout to cellular manufacturing?",
    "options": [
      "Dramatic reduction in work-in-process (WIP) inventory and material transit lead time",
      "Increasing total factory floor space required",
      "Maximizing machine specialization",
      "Allowing workers to work in complete isolation"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cellular layouts place machines sequentially for a part family, slashing transit distances and queue times.",
      "stepByStep": [
        "Lower WIP, faster throughput, smaller batches."
      ],
      "commonTrap": "Thinking cellular layout requires more floor space.",
      "reference": "INDU 211 Ch. 4 Part 2"
    },
    "id": "Q_INDU211_053"
  },
  {
    "courseId": "INDU211",
    "topic": "Make-or-Buy Decision",
    "difficulty": "Midterm Level",
    "question": "An enterprise can buy a bracket for $7$/unit, or produce it in-house with $FC = $15,000$ and $v = $4$/unit. At what annual demand should the company manufacture in-house?",
    "options": [
      "At demand exceeding $5,000$ units/year",
      "At demand below $2,000$ units/year",
      "Always buy externally",
      "At exactly $1,000$ units/year"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cost to buy $TC_{\\text{buy}} = 7Q$; Cost to make $TC_{\\text{make}} = 15,000 + 4Q$. Equate: $7Q = 15,000 + 4Q \\implies 3Q = 15,000 \\implies Q = 5,000$.",
      "stepByStep": [
        "For $Q > 5,000$, in-house manufacturing yields lower total cost."
      ],
      "commonTrap": "Reversing the inequality (thinking low volume justifies large fixed cost).",
      "reference": "INDU 211 Worked Problems"
    },
    "id": "Q_INDU211_054"
  },
  {
    "courseId": "INDU211",
    "topic": "Jig vs Fixture",
    "difficulty": "Foundation",
    "question": "What is the fundamental engineering difference between a Jig and a Fixture?",
    "options": [
      "A Jig guides the cutting tool (e.g. drill bushing), whereas a Fixture only locates and holds the workpiece firmly in place",
      "A Fixture guides the tool, while a Jig only holds the part",
      "They are identical synonyms with no distinction",
      "Jigs are only used in woodworking, fixtures only in metalworking"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard manufacturing tooling definition: Jigs guide tools; Fixtures locate and clamp parts securely.",
      "stepByStep": [
        "Drill jig guides the bit; milling fixture clamps the casting."
      ],
      "commonTrap": "Swapping the definitions.",
      "reference": "INDU 211 Ch. 3 / Slide 24"
    },
    "id": "Q_INDU211_055"
  },
  {
    "courseId": "INDU211",
    "topic": "Taylor vs Gilbreth",
    "difficulty": "Foundation",
    "question": "While Frederick W. Taylor focused on stopwatch time study and task quotas, what was the primary innovation of Frank and Lillian Gilbreth?",
    "options": [
      "Micro-motion analysis and fundamental elemental motions called Therbligs",
      "Inventing the moving assembly line",
      "Formulating the Economic Order Quantity",
      "Developing the Simplex algorithm"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The Gilbreths developed motion study, filming workers to identify 17 fundamental micro-motions (Therbligs) to eliminate fatigue.",
      "stepByStep": [
        "Taylor = Time study; Gilbreths = Motion study and Therbligs."
      ],
      "commonTrap": "Attributing the moving assembly line to Gilbreth (that was Henry Ford).",
      "reference": "INDU 211 Ch. 1 & 2"
    },
    "id": "Q_INDU211_056"
  },
  {
    "courseId": "INDU211",
    "topic": "OIQ Professional Ethics",
    "difficulty": "Foundation",
    "question": "In the Code of Ethics of the Ordre des ing\u00e9nieurs du Qu\u00e9bec (OIQ), what is the engineer's paramount obligation?",
    "options": [
      "To prioritize the safety, health, and welfare of the public above all commercial or employer interests",
      "To maximize shareholder profitability at all costs",
      "To defend the employer in all legal disputes",
      "To file patents as quickly as possible"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Public protection is the supreme ethical canon of professional engineering worldwide.",
      "stepByStep": [
        "Article 2.01: In all aspects of work, the engineer must safeguard the public."
      ],
      "commonTrap": "Believing loyalty to the employer supersedes public safety.",
      "reference": "INDU 211 Ch. 1 & 2"
    },
    "id": "Q_INDU211_057"
  },
  {
    "courseId": "INDU211",
    "topic": "Takt Time",
    "difficulty": "Foundation",
    "question": "In Lean Manufacturing, Takt Time is best described as:",
    "options": [
      "The heartbeat rate at which products must be completed to exactly match customer demand pace",
      "The maximum mechanical speed of a machine",
      "The duration of an operator lunch break",
      "The time required to change a die"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Takt is German for musical beat/cadence: $Takt = T_{\\text{available}} / \\text{Customer Demand}$.",
      "stepByStep": [
        "Takt time aligns production rhythm with customer consumption."
      ],
      "commonTrap": "Confusing takt time with machine cycle time.",
      "reference": "INDU 211 Assignment 1"
    },
    "id": "Q_INDU211_058"
  },
  {
    "courseId": "INDU211",
    "topic": "Quadratic Assignment Problem (QAP)",
    "difficulty": "Exam Master",
    "question": "Why is the facility layout Quadratic Assignment Problem (QAP) computationally difficult for $M > 20$ departments?",
    "options": [
      "It is NP-hard, with $(M!)$ possible permutation arrangements leading to combinatorial explosion",
      "It cannot be solved because computers cannot multiply matrices",
      "It only has imaginary solutions",
      "It requires linear programming solvers that only handle 5 variables"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The QAP is one of the most notoriously intractable NP-hard combinatorial optimization problems.",
      "stepByStep": [
        "$20! \\approx 2.43 \\times 10^{18}$ configurations, requiring heuristic algorithms."
      ],
      "commonTrap": "Assuming simple linear solvers can find exact global optima in polynomial time.",
      "reference": "INDU 211 Term Paper Section 3"
    },
    "id": "Q_INDU211_059"
  },
  {
    "courseId": "INDU211",
    "topic": "DMAIC in Six Sigma",
    "difficulty": "Foundation",
    "question": "What do the five letters in the Six Sigma continuous improvement acronym DMAIC stand for?",
    "options": [
      "Define, Measure, Analyze, Improve, Control",
      "Design, Manufacture, Assemble, Inspect, Calibrate",
      "Determine, Model, Automate, Integrate, Check",
      "Draft, Monitor, Assess, Implement, Certify"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "DMAIC is the standard data-driven quality strategy for improving existing processes.",
      "stepByStep": [
        "Define customer problem, Measure baseline, Analyze root cause, Improve process, Control to sustain gains."
      ],
      "commonTrap": "Confusing DMAIC with DMADV (Design for Six Sigma).",
      "reference": "INDU 211 Ch. 12"
    },
    "id": "Q_INDU211_060"
  },
  {
    "courseId": "MIAE215",
    "topic": "IEEE 754 Float Limits",
    "difficulty": "Midterm Level",
    "question": "In C++, what happens when a float calculation yields a positive value smaller than the smallest normalized single-precision float ($1.17549 \\times 10^{-38}$)?",
    "options": [
      "It enters subnormal/denormal range, or underflows to zero ($0.0$)",
      "It throws a runtime exception and crashes",
      "It wraps around to positive infinity",
      "It automatically promotes to a 64-bit double"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IEEE 754 specifies gradual underflow using subnormal numbers until it flushes to signed zero.",
      "stepByStep": [
        "Values below FLT_MIN lose precision or underflow to 0.0."
      ],
      "commonTrap": "Assuming C++ throws a hardware exception like integer divide-by-zero.",
      "reference": "MIAE 215 Assignment 2 / Week 3 Lecture"
    },
    "id": "Q_MIAE215_061"
  },
  {
    "courseId": "MIAE215",
    "topic": "C++ Integer Division",
    "difficulty": "Foundation",
    "question": "What is the output of the C++ expression: `int result = 7 / 2;`?",
    "options": [
      "`3`",
      "`3.5`",
      "`4`",
      "Compilation error"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Integer division truncates the fractional decimal part completely towards zero.",
      "stepByStep": [
        "$7 / 2 = 3.5 \\to$ truncated to $3$."
      ],
      "commonTrap": "Assuming C++ automatically converts the result to float `3.5`.",
      "reference": "MIAE 215 Mini Course Lesson 4"
    },
    "id": "Q_MIAE215_062"
  },
  {
    "courseId": "MIAE215",
    "topic": "Type Casting",
    "difficulty": "Midterm Level",
    "question": "To obtain a floating-point result of $3.5$ from integers `int a = 7; int b = 2;`, which statement is correct?",
    "options": [
      "`float res = static_cast<float>(a) / b;`",
      "`float res = static_cast<float>(a / b);`",
      "`float res = (float)a / (float)b = 4;`",
      "`float res = float(a % b);`"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Casting operand `a` to float forces floating-point division before the division operator executes.",
      "stepByStep": [
        "`static_cast<float>(7) / 2 = 7.0f / 2 = 3.5f`."
      ],
      "commonTrap": "Casting after the integer division `static_cast<float>(a / b)`, which casts the already-truncated `3` to `3.0f`.",
      "reference": "MIAE 215 Topic Guide Part 2"
    },
    "id": "Q_MIAE215_063"
  },
  {
    "courseId": "MIAE215",
    "topic": "Logical Operator Precedence",
    "difficulty": "Foundation",
    "question": "In C++, which boolean operator has the highest precedence?",
    "options": [
      "`!` (Logical NOT)",
      "`&&` (Logical AND)",
      "`||` (Logical OR)",
      "`==` (Equality)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Unary operator `!` has higher precedence than relational, which in turn are higher than `&&`, and `||` is lowest.",
      "stepByStep": [
        "Order: `!` > relational (`<`, `==`) > `&&` > `||`."
      ],
      "commonTrap": "Thinking `&&` and `||` have identical precedence.",
      "reference": "MIAE 215 Rapid Review Sheet Part 3"
    },
    "id": "Q_MIAE215_064"
  },
  {
    "courseId": "MIAE215",
    "topic": "Switch Statement",
    "difficulty": "Midterm Level",
    "question": "What occurs if a `break;` statement is omitted at the end of a matched `case` block in C++?",
    "options": [
      "Execution falls through sequentially into the next case statement",
      "Compilation error",
      "The program exits immediately",
      "The switch statement restarts from the top"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C++ switch statements exhibit fall-through behavior unless explicitly terminated with `break`.",
      "stepByStep": [
        "Execution continues unconditionally into the subsequent case code."
      ],
      "commonTrap": "Believing C++ cases automatically break like modern Python or Swift match statements.",
      "reference": "MIAE 215 Topic Guide Part 4"
    },
    "id": "Q_MIAE215_065"
  },
  {
    "courseId": "MIAE215",
    "topic": "1D Array Bounds",
    "difficulty": "Exam Master",
    "question": "Given `int arr[5] = {10, 20, 30, 40, 50};`, what happens if you write `arr[5] = 99;` in C++?",
    "options": [
      "Undefined behavior: it writes past allocated memory bounds without compiler bounds-checking",
      "The array automatically resizes to size 6",
      "A compile-time error `IndexOutOfBounds` is triggered",
      "It replaces the last element `arr[4]`"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C++ does not perform runtime array boundary checks for raw static arrays; indexing is 0-based ($0$ to $4$).",
      "stepByStep": [
        "`arr[5]` accesses memory outside the allocated block, leading to memory corruption or segmentation fault."
      ],
      "commonTrap": "Assuming array indices run from 1 to 5.",
      "reference": "MIAE 215 Assignment 2 / Solutions"
    },
    "id": "Q_MIAE215_066"
  },
  {
    "courseId": "MIAE215",
    "topic": "For Loop Execution Count",
    "difficulty": "Foundation",
    "question": "How many times does the loop body execute: `for (int i = 0; i < 10; i += 2)`?",
    "options": [
      "$5$ times",
      "$10$ times",
      "$4$ times",
      "$6$ times"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Values of `i`: $0, 2, 4, 6, 8$. When `i = 10`, the condition `i < 10` is false.",
      "stepByStep": [
        "$5$ iterations total."
      ],
      "commonTrap": "Dividing $10/2$ and adding $1$, forgetting `i < 10` is strict inequality.",
      "reference": "MIAE 215 Mini Course Lesson 5"
    },
    "id": "Q_MIAE215_067"
  },
  {
    "courseId": "MIAE215",
    "topic": "Do-While Loop",
    "difficulty": "Foundation",
    "question": "What is the key structural distinction between a `do-while` loop and a standard `while` loop in C++?",
    "options": [
      "A `do-while` loop is guaranteed to execute its body at least once because the condition is evaluated at the bottom",
      "A `do-while` loop cannot use boolean conditions",
      "A `while` loop runs faster in memory",
      "A `do-while` loop only works with integers"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Post-test loop structure evaluates the termination condition after the first pass.",
      "stepByStep": [
        "`do { ... } while(cond);` always executes at least once."
      ],
      "commonTrap": "Thinking both loops are functionally identical under all initial conditions.",
      "reference": "MIAE 215 Rapid Review Part 2"
    },
    "id": "Q_MIAE215_068"
  },
  {
    "courseId": "MIAE215",
    "topic": "Flowgorithm Symbols",
    "difficulty": "Foundation",
    "question": "In Flowgorithm and standard flowcharting, which geometric shape represents a conditional decision branch (e.g. `if (x > 0)`)?",
    "options": [
      "Diamond",
      "Rectangle",
      "Parallelogram",
      "Oval / Rounded Capsule"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Diamonds represent decisions with True/False branches; Rectangles represent processes; Parallelograms represent I/O.",
      "stepByStep": [
        "Diamond = Decision logic."
      ],
      "commonTrap": "Selecting rectangle (which is an assignment/process).",
      "reference": "MIAE 215 Software & Flowcharts"
    },
    "id": "Q_MIAE215_069"
  },
  {
    "courseId": "MIAE215",
    "topic": "2D Array Row-Major Order",
    "difficulty": "Midterm Level",
    "question": "In C++, how is a 2D array `int matrix[3][4]` laid out in physical RAM memory?",
    "options": [
      "Row-major order: Row 0 elements sequentially, followed by Row 1, then Row 2",
      "Column-major order: Column 0 elements, then Column 1",
      "Scattered in random non-contiguous memory blocks",
      "As a binary tree structure"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C and C++ strictly store multidimensional arrays in contiguous row-major order.",
      "stepByStep": [
        "`matrix[0][0], matrix[0][1], ..., matrix[0][3], matrix[1][0]...`"
      ],
      "commonTrap": "Confusing C++ with Fortran or MATLAB which use column-major order.",
      "reference": "MIAE 215 Assignment 2 Q2_e"
    },
    "id": "Q_MIAE215_070"
  },
  {
    "courseId": "MIAE215",
    "topic": "Pass by Value vs Reference",
    "difficulty": "Midterm Level",
    "question": "In function signature `void update(int& x, int y)`, what happens when `x` and `y` are modified inside the function?",
    "options": [
      "Modifications to `x` alter the caller's actual variable; modifications to `y` only alter a local copy",
      "Both variables in caller are modified",
      "Neither variable in caller is modified",
      "The code fails to compile"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "`int& x` is passed by reference (alias to caller's variable), while `int y` is passed by value (copy).",
      "stepByStep": [
        "`x` changes outside; `y` does not."
      ],
      "commonTrap": "Confusing the address-of / reference operator `&` with bitwise AND.",
      "reference": "MIAE 215 Mini Course Lesson 6"
    },
    "id": "Q_MIAE215_071"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino analogRead() Resolution",
    "difficulty": "Foundation",
    "question": "The Arduino Uno has a 10-bit Analog-to-Digital Converter (ADC). What is the integer range returned by `analogRead(A0)`?",
    "options": [
      "$0\\text{ to } 1023$",
      "$0\\text{ to } 255$",
      "$0\\text{ to } 5000$",
      "$0\\text{ to } 4095$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "10-bit resolution provides $2^{10} = 1024$ discrete voltage quantization levels ($0$ to $1023$).",
      "stepByStep": [
        "$0\\text{ V} \\to 0$, $5\\text{ V} \\to 1023$."
      ],
      "commonTrap": "Confusing 10-bit ADC with 8-bit PWM `analogWrite()` which ranges from 0 to 255.",
      "reference": "MIAE 215 Arduino Lab 1 & 3"
    },
    "id": "Q_MIAE215_072"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino PWM analogWrite()",
    "difficulty": "Midterm Level",
    "question": "What does `analogWrite(9, 128)` output on digital pin 9 of an Arduino Uno?",
    "options": [
      "A 5V Pulse Width Modulated (PWM) square wave with a $50\\%$ duty cycle",
      "A steady DC analog voltage of $2.5\\text{ V}$ with zero ripple",
      "A sine wave of frequency $128\\text{ Hz}$",
      "A digital pulse lasting exactly $128\\text{ microseconds}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Arduino does not have a true DAC; it outputs a 490/980Hz PWM square wave. $128/255 \\approx 50\\%$ duty cycle.",
      "stepByStep": [
        "$50\\%$ duty cycle averages $2.5\\text{ V}$ over time."
      ],
      "commonTrap": "Believing Arduino pins output true variable continuous DC voltages.",
      "reference": "MIAE 215 Arduino Lab 2"
    },
    "id": "Q_MIAE215_073"
  },
  {
    "courseId": "MIAE215",
    "topic": "Baud Rate in Serial Communication",
    "difficulty": "Foundation",
    "question": "What does the parameter $9600$ represent in `Serial.begin(9600);` in an Arduino sketch?",
    "options": [
      "Communication data transfer speed in bits per second (baud)",
      "The clock frequency of the ATmega328P microcontroller in kHz",
      "The buffer memory allocated for serial transmission in bytes",
      "The delay in milliseconds before starting serial communication"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Baud rate specifies the transmission rate in symbols/bits per second over UART serial lines.",
      "stepByStep": [
        "9600 bits per second."
      ],
      "commonTrap": "Thinking it represents millisecond delay or CPU clock speed.",
      "reference": "MIAE 215 Arduino Hardware Guide"
    },
    "id": "Q_MIAE215_074"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino Pull-Up Resistor",
    "difficulty": "Midterm Level",
    "question": "Why configure a pushbutton pin with `pinMode(2, INPUT_PULLUP);`?",
    "options": [
      "It connects an internal $20\\text{k}\\Omega$ pull-up resistor to 5V, preventing a floating pin state when the switch is open",
      "It amplifies the input current to prevent LED burnout",
      "It converts analog signals into digital pulses",
      "It protects the button from static electricity"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Without a pull-up or pull-down resistor, an open mechanical switch leaves the microcontroller pin in a floating, noisy antenna state.",
      "stepByStep": [
        "Reads HIGH when open; reads LOW when pressed to ground."
      ],
      "commonTrap": "Thinking the button reads HIGH when pressed.",
      "reference": "MIAE 215 Arduino Lab 2"
    },
    "id": "Q_MIAE215_075"
  },
  {
    "courseId": "MIAE215",
    "topic": "C++ Short-Circuit Evaluation",
    "difficulty": "Exam Master",
    "question": "Given `int x = 0; if (x != 0 && (10 / x > 1))`, what happens when this condition is evaluated in C++?",
    "options": [
      "The condition evaluates to `false` without division by zero because `&&` short-circuits",
      "A fatal divide-by-zero runtime crash occurs",
      "Compilation error",
      "The condition evaluates to `true`"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Logical AND `&&` stops evaluating immediately if the left operand is `false`.",
      "stepByStep": [
        "`x != 0` is false $\\implies$ right side is never executed."
      ],
      "commonTrap": "Assuming both sides of boolean operators are always evaluated.",
      "reference": "MIAE 215 Topic Guide Part 3"
    },
    "id": "Q_MIAE215_076"
  },
  {
    "courseId": "MIAE215",
    "topic": "Float Equality Trap",
    "difficulty": "Midterm Level",
    "question": "Why is `if (a == 0.3)` considered an anti-pattern in C++ when `a` is a computed float (`0.1f + 0.2f`)?",
    "options": [
      "Floating-point numbers in base-2 binary cannot represent $0.1$ or $0.2$ exactly, causing rounding errors ($0.30000004$)",
      "C++ does not allow the `==` operator on floats",
      "It causes an infinite loop",
      "The compiler automatically rounds all floats to integers"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Binary floating point represents numbers as $m \\times 2^e$. Fractions with denominator factors other than 2 repeat infinitely in binary.",
      "stepByStep": [
        "Always compare $|a - b| < \\epsilon$ where $\\epsilon$ is a small tolerance like $10^{-6}$."
      ],
      "commonTrap": "Assuming base-10 decimals are represented exactly in binary registers.",
      "reference": "MIAE 215 Topic Guide Part 1"
    },
    "id": "Q_MIAE215_077"
  },
  {
    "courseId": "MIAE215",
    "topic": "Variable Lifetime & Scope",
    "difficulty": "Foundation",
    "question": "A variable declared inside the body of a `{ }` block in C++ has:",
    "options": [
      "Block/Local scope and automatic storage duration (destroyed when block exits)",
      "Global scope accessible across all functions",
      "Permanent lifetime in memory until the program terminates",
      "Static persistence"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Variables have automatic storage duration on the stack within their declaring curly brace scope.",
      "stepByStep": [
        "Local stack allocation freed upon exiting scope."
      ],
      "commonTrap": "Thinking variables remain alive throughout `main()`.",
      "reference": "MIAE 215 Mini Course Lesson 3"
    },
    "id": "Q_MIAE215_078"
  },
  {
    "courseId": "MIAE215",
    "topic": "C++ Modulo Operator",
    "difficulty": "Foundation",
    "question": "What operands are legally valid for the C++ modulo operator `%` (e.g. `a % b`)?",
    "options": [
      "Integer operands only (e.g. `int`, `char`, `short`, `long`)",
      "Floating point operands (`float`, `double`)",
      "Any numeric data type including strings",
      "Pointers and memory addresses"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In C++, the `%` operator requires integer operands. For floating-point remainder, `std::fmod()` from `<cmath>` is required.",
      "stepByStep": [
        "Integer types only."
      ],
      "commonTrap": "Trying to write `5.5 % 2.1` in C++, which causes a compiler error.",
      "reference": "MIAE 215 Topic Guide Part 3"
    },
    "id": "Q_MIAE215_079"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino setup() vs loop()",
    "difficulty": "Foundation",
    "question": "What is the execution order of `setup()` and `loop()` in an Arduino firmware program?",
    "options": [
      "`setup()` executes exactly once on boot/reset; `loop()` executes repeatedly forever",
      "`setup()` and `loop()` run simultaneously on dual cores",
      "`loop()` runs first to calibrate sensors, then `setup()` configures pins",
      "`setup()` runs once every second"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard Arduino runtime architecture: initialize hardware once in `setup()`, execute state machine in `loop()`.",
      "stepByStep": [
        "Single boot execution vs infinite recurring loop."
      ],
      "commonTrap": "Thinking `setup()` re-runs periodically.",
      "reference": "MIAE 215 Lab Overview Guide"
    },
    "id": "Q_MIAE215_080"
  },
  {
    "courseId": "MIAE215",
    "topic": "C++ Const Qualifier",
    "difficulty": "Foundation",
    "question": "What is the compiler behavior when declaring `const double PI = 3.14159;` followed by `PI = 3.0;`?",
    "options": [
      "Compilation error: assignment of read-only variable",
      "The value changes to $3.0$ with a compiler warning",
      "The program compiles but crashes at runtime",
      "A new variable named `PI` is shadowed"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The `const` qualifier locks variable mutability, instructing the compiler to reject any subsequent assignment.",
      "stepByStep": [
        "Compile-time read-only enforcement."
      ],
      "commonTrap": "Assuming `const` only acts as a documentation comment.",
      "reference": "MIAE 215 Topic Guide Part 1"
    },
    "id": "Q_MIAE215_081"
  },
  {
    "courseId": "MIAE215",
    "topic": "Sizeof Operator",
    "difficulty": "Midterm Level",
    "question": "What does `sizeof(double)` typically return on modern 64-bit systems in C++?",
    "options": [
      "`8` bytes ($64$ bits)",
      "`4` bytes ($32$ bits)",
      "`16` bytes ($128$ bits)",
      "`2` bytes ($16$ bits)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IEEE 754 double-precision floating-point format requires 64 bits = 8 bytes.",
      "stepByStep": [
        "1 sign bit, 11 exponent bits, 52 fraction bits."
      ],
      "commonTrap": "Confusing `double` (8 bytes) with `float` (4 bytes).",
      "reference": "MIAE 215 Rapid Review Part 1"
    },
    "id": "Q_MIAE215_082"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino Digital Pin Max Current",
    "difficulty": "Exam Master",
    "question": "What is the absolute maximum continuous DC current that a single digital I/O pin of an ATmega328P (Arduino Uno) can safely source or sink?",
    "options": [
      "$40\\text{ mA}$ (with $20\\text{ mA}$ recommended for safe continuous operation)",
      "$500\\text{ mA}$",
      "$1\\text{ A}$",
      "$5\\text{ mA}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The ATmega328P datasheet specifies $40\\text{ mA}$ absolute maximum per pin, above which internal transistor junctions melt.",
      "stepByStep": [
        "Safe continuous operation is limited to $20\\text{ mA}$."
      ],
      "commonTrap": "Assuming an Arduino pin can directly drive a high-power motor or solenoid.",
      "reference": "MIAE 215 Lab Overview & Hardware Guide"
    },
    "id": "Q_MIAE215_083"
  },
  {
    "courseId": "MIAE215",
    "topic": "Ternary Operator",
    "difficulty": "Foundation",
    "question": "What is the value of `int y = (x > 5) ? 10 : 20;` when `x = 3`?",
    "options": [
      "`20`",
      "`10`",
      "`3`",
      "`5`"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Ternary operator: `condition ? value_if_true : value_if_false`. Since `3 > 5` is false, it returns `20`.",
      "stepByStep": [
        "False branch selected."
      ],
      "commonTrap": "Selecting the true branch.",
      "reference": "MIAE 215 Topic Guide Part 4"
    },
    "id": "Q_MIAE215_084"
  },
  {
    "courseId": "MIAE215",
    "topic": "Sentinel Value Loop",
    "difficulty": "Midterm Level",
    "question": "In C++ programming, what is a 'sentinel value'?",
    "options": [
      "A predetermined special input value (such as `-1` or `999`) used to signal loop termination",
      "A security encryption key",
      "The loop iterator counter variable `i`",
      "A hardware watchdog timer"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Sentinel-controlled loops process unknown quantities of user data until the sentinel flag is encountered.",
      "stepByStep": [
        "While input is not sentinel, continue processing."
      ],
      "commonTrap": "Confusing sentinel with normal iteration counter.",
      "reference": "MIAE 215 Assignment 2"
    },
    "id": "Q_MIAE215_085"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino Millis vs Delay",
    "difficulty": "Exam Master",
    "question": "Why is `millis()` strongly preferred over `delay(1000)` in non-trivial Arduino robotics programming?",
    "options": [
      "`delay()` blocks the CPU completely, preventing sensor reading and button checking; `millis()` enables non-blocking asynchronous timing",
      "`millis()` requires less battery power",
      "`delay()` cannot wait for more than 100 milliseconds",
      "`millis()` is built into hardware interrupts"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Blocking vs non-blocking software architecture. `delay()` stops all CPU execution, freezing responsiveness.",
      "stepByStep": [
        "`millis()` allows multitasking by checking elapsed system clock time."
      ],
      "commonTrap": "Thinking `delay()` runs in the background.",
      "reference": "MIAE 215 Arduino Labs"
    },
    "id": "Q_MIAE215_086"
  },
  {
    "courseId": "MIAE215",
    "topic": "Pre-increment vs Post-increment",
    "difficulty": "Midterm Level",
    "question": "What are the values of `a` and `b` after: `int a = 5; int b = a++;`?",
    "options": [
      "`a = 6, b = 5`",
      "`a = 6, b = 6`",
      "`a = 5, b = 5`",
      "`a = 5, b = 6`"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Post-increment `a++` assigns the current value of `a` to `b`, then increments `a`.",
      "stepByStep": [
        "`b` receives $5$; `a` becomes $6$."
      ],
      "commonTrap": "Confusing post-increment `a++` with pre-increment `++a` which increments first.",
      "reference": "MIAE 215 Topic Guide Part 3"
    },
    "id": "Q_MIAE215_087"
  },
  {
    "courseId": "MIAE215",
    "topic": "Array Initialization",
    "difficulty": "Foundation",
    "question": "In `int list[10] = {1, 2};`, what are the values of the remaining 8 elements in C++?",
    "options": [
      "They are automatically initialized to `0`",
      "They contain random garbage values from RAM",
      "The code fails to compile",
      "They repeat `{1, 2, 1, 2...}`"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In C++, if an array is partially initialized with an initializer list, all remaining elements are zero-initialized.",
      "stepByStep": [
        "`list[2]` through `list[9]` are set to $0$."
      ],
      "commonTrap": "Assuming remaining elements contain garbage memory (which only occurs with uninitialized arrays `int list[10];`).",
      "reference": "MIAE 215 Mini Course Lesson 6"
    },
    "id": "Q_MIAE215_088"
  },
  {
    "courseId": "MIAE215",
    "topic": "Header Guards in C++",
    "difficulty": "Midterm Level",
    "question": "What is the purpose of `#ifndef HEADER_H` and `#define HEADER_H` in C++ header files?",
    "options": [
      "To prevent multiple inclusion of the same header file and avoid redefinition errors",
      "To speed up internet downloads",
      "To encrypt proprietary C++ code",
      "To force global variable declaration"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Include guards ensure the preprocessor pastes the header code only once per translation unit.",
      "stepByStep": [
        "Prevents duplicate struct/class definitions."
      ],
      "commonTrap": "Thinking it compiles faster on the GPU.",
      "reference": "MIAE 215 C++ Master Guide"
    },
    "id": "Q_MIAE215_089"
  },
  {
    "courseId": "MIAE215",
    "topic": "Arduino Debouncing",
    "difficulty": "Midterm Level",
    "question": "What physical phenomenon necessitates software or hardware 'switch debouncing' when reading mechanical pushbuttons?",
    "options": [
      "Mechanical spring contacts vibrate and bounce for several milliseconds upon closure, generating multiple false trigger pulses",
      "Buttons generate dangerous high voltage sparks",
      "Electrons travel too slowly through copper wires",
      "The microcontroller clock drifts over time"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Mechanical contacts bounce for 5\u201320ms, causing digital input pins to register 10+ rapid button presses per click.",
      "stepByStep": [
        "Debouncing waits out the settling time before reading stable state."
      ],
      "commonTrap": "Assuming electrical switches close instantaneously in a single clean step.",
      "reference": "MIAE 215 Arduino Lab 2"
    },
    "id": "Q_MIAE215_090"
  },
  {
    "courseId": "MIAE221",
    "topic": "Atomic Packing Factor (FCC)",
    "difficulty": "Foundation",
    "question": "What is the Atomic Packing Factor (APF) of a Face-Centered Cubic (FCC) crystal structure?",
    "options": [
      "$0.74$",
      "$0.68$",
      "$0.52$",
      "$0.78$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "FCC and HCP represent the maximum theoretical close-packed spherical packing factor.",
      "stepByStep": [
        "$\\text{APF} = \\frac{V_{\\text{atoms}}}{V_{\\text{unit cell}}} = \\frac{4 \\times \\frac{4}{3}\\pi R^3}{(2R\\sqrt{2})^3} = \\frac{16\\pi R^3 / 3}{16\\sqrt{2}R^3} = \\frac{\\pi}{3\\sqrt{2}} \\approx 0.74$."
      ],
      "commonTrap": "Confusing FCC (0.74) with BCC (0.68) or Simple Cubic (0.52).",
      "reference": "MIAE 221 Topic Guide Part 3 / Lecture 4"
    },
    "id": "Q_MIAE221_091"
  },
  {
    "courseId": "MIAE221",
    "topic": "Atomic Packing Factor (BCC)",
    "difficulty": "Foundation",
    "question": "What is the Atomic Packing Factor (APF) of a Body-Centered Cubic (BCC) crystal structure?",
    "options": [
      "$0.68$",
      "$0.74$",
      "$0.52$",
      "$0.64$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "BCC lattice has atoms touching along the body diagonal $\\sqrt{3}a = 4R$.",
      "stepByStep": [
        "$a = 4R/\\sqrt{3}$. Two atoms per unit cell.",
        "$\\text{APF} = \\frac{2 \\times \\frac{4}{3}\\pi R^3}{(4R/\\sqrt{3})^3} = \\frac{8\\pi / 3}{64 / (3\\sqrt{3})} = \\frac{\\pi\\sqrt{3}}{8} \\approx 0.68$."
      ],
      "commonTrap": "Confusing BCC with FCC close-packing.",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_092"
  },
  {
    "courseId": "MIAE221",
    "topic": "Coordination Number",
    "difficulty": "Foundation",
    "question": "What is the coordination number (number of nearest touching neighbor atoms) for an atom in an FCC crystal lattice?",
    "options": [
      "$12$",
      "$8$",
      "$6$",
      "$4$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In FCC, each atom touches 4 neighbors in its own close-packed plane, 4 in the plane above, and 4 in the plane below.",
      "stepByStep": [
        "$4 + 4 + 4 = 12$ nearest neighbors."
      ],
      "commonTrap": "Selecting 8 (which is the coordination number of BCC).",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_093"
  },
  {
    "courseId": "MIAE221",
    "topic": "FCC Lattice Parameter Relation",
    "difficulty": "Midterm Level",
    "question": "In an FCC crystal with atomic radius $R$, what is the relationship between lattice parameter $a$ and $R$?",
    "options": [
      "$a = 2R\\sqrt{2}$",
      "$a = \\frac{4R}{\\sqrt{3}}$",
      "$a = 2R$",
      "$a = 4R$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In FCC, atoms touch along the face diagonal: $d_{\\text{face}} = a\\sqrt{2} = 4R \\implies a = \\frac{4R}{\\sqrt{2}} = 2R\\sqrt{2}$.",
      "stepByStep": [
        "$a = 2\\sqrt{2}R$."
      ],
      "commonTrap": "Using the BCC body diagonal relationship $\\sqrt{3}a = 4R$.",
      "reference": "MIAE 221 Review Sheet Part 3"
    },
    "id": "Q_MIAE221_094"
  },
  {
    "courseId": "MIAE221",
    "topic": "BCC Lattice Parameter Relation",
    "difficulty": "Midterm Level",
    "question": "In a BCC crystal with atomic radius $R$, what is the relationship between unit cell edge length $a$ and $R$?",
    "options": [
      "$a = \\frac{4R}{\\sqrt{3}}$",
      "$a = 2R\\sqrt{2}$",
      "$a = 2R$",
      "$a = R\\sqrt{3}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In BCC, atoms touch along the body diagonal: $d_{\\text{body}} = a\\sqrt{3} = 4R \\implies a = \\frac{4R}{\\sqrt{3}}$.",
      "stepByStep": [
        "$a = 4R/\\sqrt{3}$."
      ],
      "commonTrap": "Using the face diagonal relationship.",
      "reference": "MIAE 221 Review Sheet Part 3"
    },
    "id": "Q_MIAE221_095"
  },
  {
    "courseId": "MIAE221",
    "topic": "Miller Indices - Directions",
    "difficulty": "Midterm Level",
    "question": "What are the Miller indices for a direction vector starting at the origin and passing through $(x = 1/2, y = 1, z = 0)$?",
    "options": [
      "$[1\\,2\\,0]$",
      "$[2\\,1\\,0]$",
      "$(1\\,2\\,0)$",
      "$[1/2\\,1\\,0]$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Direction indices $[uvw]$ are cleared of fractions to the smallest integer set and enclosed in square brackets.",
      "stepByStep": [
        "Vector components: $(1/2, 1, 0)$. Multiply by 2: $[1, 2, 0]$."
      ],
      "commonTrap": "Using parentheses $(120)$ which designate crystallographic planes, not directions.",
      "reference": "MIAE 221 Master Guide Part 3"
    },
    "id": "Q_MIAE221_096"
  },
  {
    "courseId": "MIAE221",
    "topic": "Miller Indices - Planes",
    "difficulty": "Midterm Level",
    "question": "A crystallographic plane intercepts the axes at $x = 1$, $y = 2$, and is parallel to the $z$-axis ($z = \\infty$). What are its Miller indices $(hkl)$?",
    "options": [
      "$(2\\,1\\,0)$",
      "$(1\\,2\\,0)$",
      "$(1\\,1/2\\,0)$",
      "$[2\\,1\\,0]$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Take reciprocals of axial intercepts: $1/1 = 1$, $1/2 = 1/2$, $1/\\infty = 0$. Clear fractions by multiplying by 2: $(2, 1, 0)$.",
      "stepByStep": [
        "Intercepts: $(1, 2, \\infty) \\to$ Reciprocals: $(1, 1/2, 0) \\to$ Scale: $(2, 1, 0)$."
      ],
      "commonTrap": "Forgetting to take reciprocals, writing $(1, 2, 0)$.",
      "reference": "MIAE 221 Master Guide Part 3"
    },
    "id": "Q_MIAE221_097"
  },
  {
    "courseId": "MIAE221",
    "topic": "Bragg's Law of X-Ray Diffraction",
    "difficulty": "Midterm Level",
    "question": "Bragg's law governing constructive interference of X-rays diffracted from crystal planes is given by:",
    "options": [
      "$n\\lambda = 2d_{hkl}\\sin\\theta$",
      "$n\\lambda = d_{hkl}\\cos\\theta$",
      "$\\lambda = 2d_{hkl}\\tan\\theta$",
      "$n\\lambda = \\frac{d_{hkl}}{2\\sin\\theta}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Constructive interference condition between atomic lattice planes separated by spacing $d_{hkl}$.",
      "stepByStep": [
        "Path difference $= 2d\\sin\\theta = n\\lambda$."
      ],
      "commonTrap": "Using cosine instead of sine.",
      "reference": "MIAE 221 Lecture 5 / Exam Prep"
    },
    "id": "Q_MIAE221_098"
  },
  {
    "courseId": "MIAE221",
    "topic": "Interplanar Spacing in Cubic Systems",
    "difficulty": "Exam Master",
    "question": "For a cubic crystal with lattice parameter $a = 0.40\\text{ nm}$, what is the interplanar spacing $d_{110}$?",
    "options": [
      "$0.283\\text{ nm}$",
      "$0.400\\text{ nm}$",
      "$0.231\\text{ nm}$",
      "$0.141\\text{ nm}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Formula for cubic systems: $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.",
      "stepByStep": [
        "$d_{110} = \\frac{0.40}{\\sqrt{1^2 + 1^2 + 0^2}} = \\frac{0.40}{\\sqrt{2}} = \\frac{0.40}{1.414} \\approx 0.2828\\text{ nm}$."
      ],
      "commonTrap": "Dividing by $(h+k+l) = 2$ instead of $\\sqrt{h^2+k^2+l^2}$.",
      "reference": "MIAE 221 Practice Problem Set 1"
    },
    "id": "Q_MIAE221_099"
  },
  {
    "courseId": "MIAE221",
    "topic": "Theoretical Density Formula",
    "difficulty": "Midterm Level",
    "question": "What is the theoretical density $\\rho$ formula for a crystal with $n$ atoms/unit cell, atomic weight $A$, unit cell volume $V_c$, and Avogadro's number $N_A$?",
    "options": [
      "$\\rho = \\frac{n A}{V_c N_A}$",
      "$\\rho = \\frac{V_c N_A}{n A}$",
      "$\\rho = \\frac{n N_A}{V_c A}$",
      "$\\rho = \\frac{A}{n V_c}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Mass of unit cell is $\\frac{n A}{N_A}$; density is mass divided by unit cell volume $V_c$.",
      "stepByStep": [
        "$\\rho = \\frac{\\text{Mass}}{\\text{Volume}} = \\frac{n A / N_A}{V_c} = \\frac{n A}{V_c N_A}$."
      ],
      "commonTrap": "Inverting Avogadro's number in the expression.",
      "reference": "MIAE 221 Quantitative Problem Guide"
    },
    "id": "Q_MIAE221_100"
  },
  {
    "courseId": "MIAE221",
    "topic": "Primary Chemical Bonding",
    "difficulty": "Foundation",
    "question": "Which type of primary chemical bond is characterized by non-directional electrostatic attraction between positively charged ion cores and a delocalized 'sea of valence electrons'?",
    "options": [
      "Metallic Bonding",
      "Ionic Bonding",
      "Covalent Bonding",
      "Hydrogen Bonding"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Metallic bonds feature delocalized electron gas granting high electrical and thermal conductivity and ductility.",
      "stepByStep": [
        "Delocalized electron sea = Metallic bond."
      ],
      "commonTrap": "Confusing with ionic bonding which features localized electron transfer between electronegative and electropositive atoms.",
      "reference": "MIAE 221 Topic Guide Part 2"
    },
    "id": "Q_MIAE221_101"
  },
  {
    "courseId": "MIAE221",
    "topic": "Secondary Bonding (van der Waals)",
    "difficulty": "Foundation",
    "question": "What physical mechanism creates London dispersion forces (secondary van der Waals bonds)?",
    "options": [
      "Fluctuating instantaneous induced atomic dipoles due to asymmetric electron cloud distributions",
      "Complete transfer of valence electrons",
      "Mutual sharing of directional electron pairs",
      "Nuclear magnetic resonance"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Instantaneous electron motion creates temporary electrical dipoles that induce complementary dipoles in adjacent atoms.",
      "stepByStep": [
        "Weak physical bonding ($\\sim 0.1\\text{ eV/atom}$)."
      ],
      "commonTrap": "Thinking secondary bonds involve permanent chemical reactions.",
      "reference": "MIAE 221 Topic Guide Part 2"
    },
    "id": "Q_MIAE221_102"
  },
  {
    "courseId": "MIAE221",
    "topic": "Interatomic Potential Well & Melting Temp",
    "difficulty": "Midterm Level",
    "question": "How does a deeper, narrower interatomic potential energy well ($E_0$) correlate with material physical properties?",
    "options": [
      "Higher melting temperature $T_m$, higher elastic modulus $E$, and lower thermal expansion coefficient $\\alpha$",
      "Lower melting temperature and higher thermal expansion",
      "Higher ductility and lower stiffness",
      "Lower density and lower bond energy"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A deeper potential energy trough requires more thermal energy $k_B T$ to break bonds, yielding high $T_m$ and stiffness.",
      "stepByStep": [
        "Deep well = High $T_m$, High $E$, Low $\\alpha$."
      ],
      "commonTrap": "Thinking thermal expansion increases with deeper wells (it decreases).",
      "reference": "MIAE 221 Review Sheet Part 2"
    },
    "id": "Q_MIAE221_103"
  },
  {
    "courseId": "MIAE221",
    "topic": "Linear Density",
    "difficulty": "Midterm Level",
    "question": "What is the linear density $LD$ along the $[110]$ direction in an FCC crystal with atomic radius $R$?",
    "options": [
      "$LD = \\frac{1}{2R}$",
      "$LD = \\frac{1}{4R}$",
      "$LD = \\frac{2}{R}$",
      "$LD = \\frac{1}{R\\sqrt{2}}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Along $[110]$ in FCC, atoms touch continuously: face diagonal length is $4R$ and contains $2$ equivalent atom diameters.",
      "stepByStep": [
        "$LD = \\frac{\\text{Number of atom diameters}}{\\text{Length of vector}} = \\frac{2}{4R} = \\frac{1}{2R}$."
      ],
      "commonTrap": "Using the full unit cell edge length instead of the direction vector length.",
      "reference": "MIAE 221 Practice Problem Set 1"
    },
    "id": "Q_MIAE221_104"
  },
  {
    "courseId": "MIAE221",
    "topic": "Planar Density",
    "difficulty": "Midterm Level",
    "question": "In an FCC crystal, which family of planes is the most densely packed close-packed plane?",
    "options": [
      "$\\{111\\}$",
      "$\\{100\\}$",
      "$\\{110\\}$",
      "$\\{112\\}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The $\\{111\\}$ planes in FCC have the maximum planar density with close-packed atomic arrangement ($APF = 0.74$).",
      "stepByStep": [
        "Close-packed stacking sequence $ABCABC...$ occurs along $\\{111\\}$ planes."
      ],
      "commonTrap": "Selecting $\\{100\\}$ planes.",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_105"
  },
  {
    "courseId": "MIAE221",
    "topic": "Point Defects: Vacancy Equilibrium",
    "difficulty": "Exam Master",
    "question": "The equilibrium number of vacancies $N_v$ in a crystal with $N$ atomic sites at temperature $T$ follows which thermodynamic relationship?",
    "options": [
      "$N_v = N \\exp\\left(-\\frac{Q_v}{k_B T}\\right)$",
      "$N_v = N \\exp\\left(+\\frac{Q_v}{k_B T}\\right)$",
      "$N_v = N \\left(1 - \\frac{Q_v}{k_B T}\\right)$",
      "$N_v = \\frac{N Q_v}{k_B T}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Boltzmann distribution governing thermally activated defect formation, where $Q_v$ is vacancy formation energy.",
      "stepByStep": [
        "$N_v$ increases exponentially with temperature $T$."
      ],
      "commonTrap": "Omitting the negative sign in the exponential.",
      "reference": "MIAE 221 Study Guide"
    },
    "id": "Q_MIAE221_106"
  },
  {
    "courseId": "MIAE221",
    "topic": "Schottky Defect",
    "difficulty": "Midterm Level",
    "question": "In an ionic ceramic crystal (e.g. NaCl), what constitutes a Schottky defect?",
    "options": [
      "A stoichiometric pair of one cation vacancy and one anion vacancy, preserving electrical neutrality",
      "A cation displaced into an interstitial site",
      "An extra electron trapped in an anion site",
      "A foreign substitutional metal atom"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Schottky defects maintain charge balance by creating paired cation and anion vacancies simultaneously.",
      "stepByStep": [
        "Preserves local electroneutrality."
      ],
      "commonTrap": "Confusing with Frenkel defect (cation vacancy + interstitial pair).",
      "reference": "MIAE 221 Topic Guide Part 1"
    },
    "id": "Q_MIAE221_107"
  },
  {
    "courseId": "MIAE221",
    "topic": "Frenkel Defect",
    "difficulty": "Midterm Level",
    "question": "What is a Frenkel defect in an ionic material?",
    "options": [
      "A cation-vacancy and cation-interstitial pair (cation leaves lattice site and lodges in nearby interstitial)",
      "A missing anion and cation pair",
      "An edge dislocation Burgers vector",
      "A grain boundary junction"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A Frenkel defect occurs when an ion (usually smaller cation) jumps into an interstitial void, leaving behind a vacancy.",
      "stepByStep": [
        "Vacancy-interstitial pair."
      ],
      "commonTrap": "Confusing with Schottky paired vacancies.",
      "reference": "MIAE 221 Topic Guide Part 1"
    },
    "id": "Q_MIAE221_108"
  },
  {
    "courseId": "MIAE221",
    "topic": "Hume-Rothery Rules for Solid Solution",
    "difficulty": "Midterm Level",
    "question": "According to Hume-Rothery rules, for two metals to form complete substitutional solid solubility, their atomic radii must differ by no more than:",
    "options": [
      "$\\pm 15\\%$",
      "$\\pm 50\\%$",
      "$\\pm 5\\%$",
      "$\\pm 30\\%$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Hume-Rothery rule 1: atomic radius difference $\\Delta R < 15\\%$ to avoid excessive lattice strain energy.",
      "stepByStep": [
        "Radius mismatch $< 15\\%$, same crystal structure, similar electronegativity, same valency."
      ],
      "commonTrap": "Selecting 50% which would force interstitial or phase separation.",
      "reference": "MIAE 221 Exam Prep"
    },
    "id": "Q_MIAE221_109"
  },
  {
    "courseId": "MIAE221",
    "topic": "Polymorphism & Allotropy",
    "difficulty": "Foundation",
    "question": "What does it mean that elemental iron is allotropic (polymorphic)?",
    "options": [
      "Iron changes its crystal structure with temperature: BCC ($\\alpha$-ferrite) below $912^\\circ\\text{C}$ and FCC ($\\gamma$-austenite) between $912^\\circ\\text{C}$ and $1394^\\circ\\text{C}$",
      "Iron has multiple chemical valencies in rust",
      "Iron can be magnetized",
      "Iron melts at two different temperatures"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Allotropy is the property of an elemental solid existing in more than one crystal lattice form depending on temperature/pressure.",
      "stepByStep": [
        "BCC $\\to$ FCC $\\to$ BCC with rising temperature."
      ],
      "commonTrap": "Confusing polymorphism with magnetic phase change.",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_110"
  },
  {
    "courseId": "MIAE221",
    "topic": "Edge vs Screw Dislocation",
    "difficulty": "Midterm Level",
    "question": "In an Edge dislocation, what is the geometric angle between the dislocation line vector and the Burgers vector $\\mathbf{b}$?",
    "options": [
      "Perpendicular ($90^\\circ$)",
      "Parallel ($0^\\circ$)",
      "$45^\\circ$",
      "$180^\\circ$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "By fundamental definition: for an Edge dislocation, $\\mathbf{b} \\perp$ line; for a Screw dislocation, $\\mathbf{b} \\parallel$ line.",
      "stepByStep": [
        "Edge = $90^\\circ$ perpendicular."
      ],
      "commonTrap": "Reversing edge and screw dislocation definitions.",
      "reference": "MIAE 221 Study Guide"
    },
    "id": "Q_MIAE221_111"
  },
  {
    "courseId": "MIAE221",
    "topic": "Slip Systems in Plastic Deformation",
    "difficulty": "Midterm Level",
    "question": "Why are FCC metals (like copper and aluminum) typically much more ductile than HCP metals (like zinc and magnesium) at room temperature?",
    "options": [
      "FCC possesses 12 independent close-packed slip systems $\\{111\\}\\langle 110\\rangle$, whereas HCP has only 3 basal slip systems",
      "FCC has stronger covalent bonds",
      "HCP has a higher melting point",
      "FCC metals have no dislocations"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Von Mises criterion: at least 5 independent slip systems are required for ductile polycrystal deformation. FCC has 12; HCP basal has only 3.",
      "stepByStep": [
        "12 slip systems enable dislocation glide along multiple directions."
      ],
      "commonTrap": "Believing HCP has more slip systems.",
      "reference": "MIAE 221 Exam Prep"
    },
    "id": "Q_MIAE221_112"
  },
  {
    "courseId": "MIAE221",
    "topic": "Electronegativity Difference & Ionicity",
    "difficulty": "Midterm Level",
    "question": "According to Pauling's equation, what happens to bond character as the electronegativity difference $|X_A - X_B|$ increases?",
    "options": [
      "The percent ionic character increases",
      "The bond becomes predominantly covalent",
      "The bond becomes metallic",
      "The bond strength drops to zero"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Pauling: $\\%\\text{ Ionic} = \\left(1 - e^{-0.25(X_A - X_B)^2}\\right) \\times 100\\%$. Large $\\Delta X$ creates strong ionic attraction.",
      "stepByStep": [
        "Higher $\\Delta X \\implies$ higher ionicity."
      ],
      "commonTrap": "Assuming covalent character increases with electronegativity difference.",
      "reference": "MIAE 221 Topic Guide Part 2"
    },
    "id": "Q_MIAE221_113"
  },
  {
    "courseId": "MIAE221",
    "topic": "Interstitial Sites in FCC",
    "difficulty": "Exam Master",
    "question": "In an FCC unit cell of lattice parameter $a$, where are the Octahedral interstitial sites located?",
    "options": [
      "At the center of the unit cell $(1/2, 1/2, 1/2)$ and at the midpoints of all 12 cube edges",
      "At the 8 sub-cube body centers",
      "Exclusively on the outer face centers",
      "At the 8 corner vertices"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "FCC has 4 octahedral sites per unit cell: $1$ at the center $+ 12 \\times (1/4) = 4$ total.",
      "stepByStep": [
        "Center $(1/2, 1/2, 1/2)$ and 12 edge centers."
      ],
      "commonTrap": "Confusing octahedral sites with tetrahedral sites (which reside at sub-cube centers).",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_114"
  },
  {
    "courseId": "MIAE221",
    "topic": "Interstitial Carbon in Iron",
    "difficulty": "Midterm Level",
    "question": "Why can FCC austenite ($\\gamma$-Fe) dissolve up to $2.14\\,\\text{wt}\\%$ carbon, while BCC ferrite ($\u0007lpha$-Fe) dissolves a maximum of only $0.022\\,\\text{wt}\\%$ carbon?",
    "options": [
      "FCC has much larger octahedral interstitial voids than BCC, accommodating small carbon atoms with far less lattice strain",
      "BCC iron has higher density than FCC iron",
      "Carbon reacts chemically with BCC iron to form gas",
      "BCC iron has no interstitial voids"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Although BCC has a lower APF (0.68 vs 0.74), its interstitial voids are smaller and highly asymmetric, severely limiting carbon solubility.",
      "stepByStep": [
        "Octahedral site radius is significantly larger in FCC ($r/R \\approx 0.414$ vs $0.155$ in BCC)."
      ],
      "commonTrap": "Assuming lower APF in BCC means it has more space for carbon atoms.",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_115"
  },
  {
    "courseId": "MIAE221",
    "topic": "Anisotropy in Single Crystals",
    "difficulty": "Foundation",
    "question": "What does it mean that a single crystal material is 'anisotropic'?",
    "options": [
      "Its physical and mechanical properties (e.g. elastic modulus, conductivity) vary depending on the crystallographic direction of measurement",
      "Its properties are identical in all directions",
      "It has no crystal defects",
      "It is completely transparent to light"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Anisotropy: direction-dependent properties resulting from asymmetric atomic spacing along different crystallographic vectors.",
      "stepByStep": [
        "Property depends on direction vector $[uvw]$."
      ],
      "commonTrap": "Confusing with isotropic (uniform properties in all directions, typical of fine polycrystals).",
      "reference": "MIAE 221 Review Sheet Part 3"
    },
    "id": "Q_MIAE221_116"
  },
  {
    "courseId": "MIAE221",
    "topic": "Grain Boundaries as Barriers",
    "difficulty": "Midterm Level",
    "question": "According to the Hall-Petch relationship $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$, why does refining grain size (reducing average grain diameter $d$) strengthen a metal?",
    "options": [
      "Grain boundaries act as physical barriers to dislocation motion, forcing dislocations to pile up and requiring higher stress to propagate slip",
      "Smaller grains eliminate all vacancies",
      "Smaller grains increase the atomic packing factor",
      "Grain boundaries transform metal into glass"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Grain boundary atomic disorder and crystallographic misorientation halt dislocation slip across grains.",
      "stepByStep": [
        "Smaller $d \\implies$ higher boundary area $\\implies$ higher yield strength $\\sigma_y$."
      ],
      "commonTrap": "Thinking smaller grains make metal softer.",
      "reference": "MIAE 221 Study Guide"
    },
    "id": "Q_MIAE221_117"
  },
  {
    "courseId": "MIAE221",
    "topic": "Diffusion: Fick's First Law",
    "difficulty": "Midterm Level",
    "question": "Fick's First Law for steady-state atomic diffusion is expressed as:",
    "options": [
      "$J = -D \\frac{dC}{dx}$",
      "$J = D \\frac{dC}{dx}$",
      "$J = -D \\frac{d^2C}{dx^2}$",
      "$J = -\\frac{D}{C} \\frac{dx}{dt}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Diffusion flux $J$ is directly proportional to the negative concentration gradient (atoms diffuse down the concentration gradient).",
      "stepByStep": [
        "Negative sign reflects flow from high to low concentration."
      ],
      "commonTrap": "Omitting the negative sign or confusing with Fick's Second Law for non-steady state.",
      "reference": "MIAE 221 Study Guide"
    },
    "id": "Q_MIAE221_118"
  },
  {
    "courseId": "MIAE221",
    "topic": "Temperature Dependence of Diffusion",
    "difficulty": "Midterm Level",
    "question": "The diffusion coefficient $D$ increases with temperature according to which equation?",
    "options": [
      "$D = D_0 \\exp\\left(-\\frac{Q_d}{R T}\\right)$",
      "$D = D_0 \\exp\\left(+\\frac{Q_d}{R T}\\right)$",
      "$D = D_0 \\left(1 + \\frac{Q_d}{T}\\right)$",
      "$D = \\frac{D_0 Q_d}{T}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Arrhenius relationship: atomic jump frequency is thermally activated past the activation energy barrier $Q_d$.",
      "stepByStep": [
        "$D$ increases exponentially with absolute temperature $T$ (Kelvin)."
      ],
      "commonTrap": "Using positive exponent which would falsely imply diffusion slows at high temperatures.",
      "reference": "MIAE 221 Study Guide"
    },
    "id": "Q_MIAE221_119"
  },
  {
    "courseId": "MIAE221",
    "topic": "Number of Atoms in Unit Cells",
    "difficulty": "Foundation",
    "question": "What are the effective numbers of atoms per unit cell for Simple Cubic (SC), Body-Centered Cubic (BCC), and Face-Centered Cubic (FCC)?",
    "options": [
      "SC: $1$, BCC: $2$, FCC: $4$",
      "SC: $8$, BCC: $9$, FCC: $14$",
      "SC: $1$, BCC: $4$, FCC: $2$",
      "SC: $2$, BCC: $4$, FCC: $8$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Corner atoms share $1/8$, face atoms share $1/2$, center atoms are $1$.",
      "stepByStep": [
        "SC: $8 \\times (1/8) = 1$",
        "BCC: $8 \\times (1/8) + 1 = 2$",
        "FCC: $8 \\times (1/8) + 6 \\times (1/2) = 1 + 3 = 4$."
      ],
      "commonTrap": "Counting shared corners as whole atoms ($8, 9, 14$).",
      "reference": "MIAE 221 Topic Guide Part 3"
    },
    "id": "Q_MIAE221_120"
  }
];
