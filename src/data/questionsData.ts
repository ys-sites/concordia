import { PracticeQuestion } from '../types';

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "Q_ENGR213_001",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Classification by Linearity",
    "difficulty": "Foundation",
    "question": "Which of the following ODEs is linear in $y$?",
    "options": [
      "$x^3 y''' + x y' - 5y = e^x$",
      "$(1 - y)\\,y' + 2y = e^x$",
      "$\\dfrac{d^2y}{dx^2} + \\sin y = 0$",
      "$\\dfrac{d^4y}{dx^4} + y^2 = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An ODE is linear in $y$ when $y$ and all its derivatives appear to the first degree, their coefficients depend at most on $x$, and no nonlinear functions of $y$ (like $\\sin y$ or $e^y$) appear.",
      "stepByStep": [
        "$x^3 y''' + x y' - 5y = e^x$: coefficients $x^3, x, -5$ depend only on $x$, so it is linear. \u2714",
        "$(1-y)y'$: the coefficient of $y'$ depends on $y$, so it is nonlinear.",
        "$\\sin y$ is a nonlinear function of $y$, so it is nonlinear.",
        "$y^2$ is second degree in $y$, so it is nonlinear."
      ],
      "commonTrap": "Thinking a variable coefficient like $x^3$ makes an equation nonlinear. Only dependence on $y$ breaks linearity.",
      "reference": "ENGR 213 Lecture 1 (Textbook \u00a71.1)"
    }
  },
  {
    "id": "Q_ENGR213_002",
    "courseId": "ENGR213",
    "chapter": "ch1",
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
      "coreConcept": "Order = the highest derivative present. Linearity fails when $y$ or a derivative is raised to a power other than 1.",
      "stepByStep": [
        "The highest derivative is $y''$, so the order is 2.",
        "$(y'')^3$ is third degree in $y''$, so the equation is nonlinear."
      ],
      "commonTrap": "Confusing power of derivative with derivative order.",
      "reference": "ENGR 213 Lecture 1 (Textbook \u00a71.1)"
    }
  },
  {
    "id": "Q_ENGR213_003",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Solutions & Interval of Definition",
    "difficulty": "Midterm Level",
    "question": "The function $\\varphi(x) = \\dfrac{1}{x}$ satisfies $x y' + y = 0$. What are the largest intervals on which it is a solution?",
    "options": [
      "$(-\\infty, 0)$ or $(0, \\infty)$",
      "$(-\\infty, \\infty)$",
      "$[0, \\infty)$",
      "$(-1, 1)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A solution must be defined and differentiable on its interval of definition $I$, and must reduce the ODE to an identity there.",
      "stepByStep": [
        "$\\varphi' = -\\dfrac{1}{x^2}$, so $x\\left(-\\dfrac{1}{x^2}\\right) + \\dfrac{1}{x} = 0$. \u2714",
        "$\\varphi$ is undefined at $x = 0$, so the interval cannot contain 0.",
        "The largest intervals are therefore $(-\\infty, 0)$ or $(0, \\infty)$."
      ],
      "commonTrap": "Treating the function and the solution as the same thing. The function $1/x$ has domain $x \\neq 0$, but a solution must live on a single interval.",
      "reference": "ENGR 213 Lecture 1 (Textbook \u00a71.1)"
    }
  },
  {
    "id": "Q_ENGR213_004",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Verifying a Solution",
    "difficulty": "Foundation",
    "question": "Which function is a solution of $y'' - 2y' + y = 0$ on $(-\\infty, \\infty)$?",
    "options": [
      "$y = x e^{x}$",
      "$y = e^{-x}$",
      "$y = \\sin x$",
      "$y = x^2 e^{x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Substitute the candidate and its derivatives into the ODE. It is a solution only if the left side is identically 0.",
      "stepByStep": [
        "$y = xe^x$: $y' = e^x + xe^x$, $y'' = 2e^x + xe^x$.",
        "$y'' - 2y' + y = (2e^x + xe^x) - 2(e^x + xe^x) + xe^x = 0$. \u2714",
        "Check $x^2e^x$: the left side becomes $2e^x \\neq 0$, so it is not a solution."
      ],
      "commonTrap": "Checking only the first derivative. Every term of the ODE must cancel.",
      "reference": "ENGR 213 Lecture 1 (Textbook \u00a71.1)"
    }
  },
  {
    "id": "Q_ENGR213_005",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Classification by Type",
    "difficulty": "Foundation",
    "question": "Which of the following is a partial differential equation (PDE)?",
    "options": [
      "$\\dfrac{\\partial^2 u}{\\partial x^2} + \\dfrac{\\partial^2 u}{\\partial y^2} = 0$",
      "$\\dfrac{dy}{dx} + 5y = e^x$",
      "$(y - x)\\,dx + 4x\\,dy = 0$",
      "$\\dfrac{d^2x}{dt^2} + 16x = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "ODE: derivatives with respect to a single independent variable. PDE: derivatives with respect to two or more independent variables.",
      "stepByStep": [
        "$u(x, y)$ is differentiated with respect to both $x$ and $y$, so it is a PDE.",
        "The other three involve only one independent variable ($x$ or $t$), so they are ODEs. The differential form $(y-x)dx + 4x\\,dy = 0$ is still an ODE."
      ],
      "commonTrap": "Thinking the differential form $M\\,dx + N\\,dy = 0$ is a PDE. It is an ODE for $y(x)$.",
      "reference": "ENGR 213 Lecture 1 (Textbook \u00a71.1)"
    }
  },
  {
    "id": "Q_ENGR213_006",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Explicit vs Implicit Solutions",
    "difficulty": "Foundation",
    "question": "The relation $x^2 + y^2 = 25$ is an implicit solution, on $-5 < x < 5$, of which ODE?",
    "options": [
      "$\\dfrac{dy}{dx} = -\\dfrac{x}{y}$",
      "$\\dfrac{dy}{dx} = \\dfrac{x}{y}$",
      "$\\dfrac{dy}{dx} = -\\dfrac{y}{x}$",
      "$\\dfrac{dy}{dx} = 2x + 2y$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$G(x, y) = 0$ is an implicit solution if it defines at least one function that satisfies the ODE on $I$. Verify by implicit differentiation.",
      "stepByStep": [
        "$\\dfrac{d}{dx}(x^2 + y^2) = 0 \\implies 2x + 2y\\,y' = 0 \\implies y' = -\\dfrac{x}{y}$.",
        "The explicit solutions hidden in the relation are $y = \\pm\\sqrt{25 - x^2}$."
      ],
      "commonTrap": "Dropping the minus sign when isolating $y'$.",
      "reference": "ENGR 213 Lecture 1 (Textbook \u00a71.1)"
    }
  },
  {
    "id": "Q_ENGR213_007",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "First-Order IVP",
    "difficulty": "Foundation",
    "question": "Lecture 2: $y = x^2 + c$ is a one-parameter family of solutions of $y' = 2x$. Which member satisfies $y(0) = 3$?",
    "options": [
      "$y = x^2 + 3$",
      "$y = x^2 - 3$",
      "$y = 3x^2$",
      "$y = x^2 + 3x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An initial condition picks one particular solution out of the family by fixing the constant.",
      "stepByStep": [
        "$y(0) = 0^2 + c = 3 \\implies c = 3$, so $y = x^2 + 3$."
      ],
      "commonTrap": "Putting the initial value into the coefficient ($3x^2$) instead of solving for $c$.",
      "reference": "ENGR 213 Lecture 2 (Textbook \u00a71.2)"
    }
  },
  {
    "id": "Q_ENGR213_008",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Second-Order IVP",
    "difficulty": "Midterm Level",
    "question": "Lecture 2 example: $x = c_1\\cos 4t + c_2 \\sin 4t$ is a two-parameter family of solutions of $x'' + 16x = 0$. Find the solution with $x(\\pi/2) = -2$ and $x'(\\pi/2) = 1$.",
    "options": [
      "$x = -2\\cos 4t + \\tfrac{1}{4}\\sin 4t$",
      "$x = -2\\cos 4t + 4\\sin 4t$",
      "$x = 2\\cos 4t + \\tfrac{1}{4}\\sin 4t$",
      "$x = -2\\cos 4t - \\tfrac{1}{4}\\sin 4t$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An $n$th-order IVP needs $n$ initial conditions to fix the $n$ constants of the family.",
      "stepByStep": [
        "$x(\\pi/2) = c_1\\cos 2\\pi + c_2\\sin 2\\pi = c_1 = -2$.",
        "$x' = -4c_1\\sin 4t + 4c_2\\cos 4t \\implies x'(\\pi/2) = 4c_2 = 1 \\implies c_2 = \\tfrac14$.",
        "$x = -2\\cos 4t + \\tfrac14 \\sin 4t$."
      ],
      "commonTrap": "Forgetting the chain-rule factor 4 in $x'$, which gives $c_2 = 1$ or $4$ instead of $\\tfrac14$.",
      "reference": "ENGR 213 Lecture 2 (Textbook \u00a71.2)"
    }
  },
  {
    "id": "Q_ENGR213_009",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "IVP Existence & Uniqueness",
    "difficulty": "Exam Master",
    "question": "For $\\dfrac{dy}{dx} = \\dfrac{y}{x}$, does the existence\u2013uniqueness theorem guarantee a unique solution through $(0, 1)$?",
    "options": [
      "No. $f(x,y) = y/x$ is not continuous at $x = 0$, so the theorem does not apply",
      "Yes, a unique solution exists",
      "Yes, because $\\partial f/\\partial y = 1/x$ exists",
      "The theorem guarantees infinitely many solutions"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Theorem: if $f$ and $\\partial f/\\partial y$ are continuous on a rectangle $R$ containing $(x_0, y_0)$, then the IVP has a unique solution on some interval around $x_0$.",
      "stepByStep": [
        "$f(x,y) = y/x$ is undefined at $x = 0$, so no rectangle around $(0,1)$ satisfies the hypotheses.",
        "In fact, the family of solutions $y = cx$ only passes through $(0, 0)$, so no solution passes through $(0, 1)$."
      ],
      "commonTrap": "Trying to solve before checking the hypotheses. The theorem gives no guarantee when $f$ is discontinuous at the initial point.",
      "reference": "ENGR 213 Lecture 2 (Textbook \u00a71.2)"
    }
  },
  {
    "id": "Q_ENGR213_010",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Uniqueness Failure",
    "difficulty": "Exam Master",
    "question": "Lecture 2: the IVP $\\dfrac{dy}{dx} = x y^{1/2}$, $y(0) = 0$ has two solutions, $y = 0$ and $y = \\dfrac{x^4}{16}$. Why doesn't this contradict the existence\u2013uniqueness theorem?",
    "options": [
      "$\\partial f/\\partial y = \\dfrac{x}{2\\sqrt{y}}$ is not continuous at $y = 0$, so uniqueness is not guaranteed at $(0,0)$",
      "$f(x, y) = x y^{1/2}$ is not continuous at $(0, 0)$",
      "$y = x^4/16$ does not actually satisfy the ODE",
      "The theorem only applies to linear equations"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Uniqueness needs both $f$ and $\\partial f/\\partial y$ to be continuous on a rectangle containing the initial point.",
      "stepByStep": [
        "$f = x\\sqrt{y}$ is continuous for $y \\ge 0$, so existence is fine.",
        "$\\partial f/\\partial y = \\dfrac{x}{2\\sqrt{y}}$ blows up at $y = 0$, so the uniqueness hypothesis fails at $(0,0)$.",
        "Check: $y = x^4/16 \\implies y' = x^3/4$ and $x\\sqrt{x^4/16} = x^3/4$. \u2714"
      ],
      "commonTrap": "Blaming $f$ itself. Here $f$ is continuous; it is the partial derivative $\\partial f/\\partial y$ that fails.",
      "reference": "ENGR 213 Lecture 2 (Textbook \u00a71.2)"
    }
  },
  {
    "id": "Q_ENGR213_011",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Direction Fields",
    "difficulty": "Foundation",
    "question": "For $\\dfrac{dy}{dx} = 0.2xy$, what is the slope of the lineal element at the point $(2, 3)$?",
    "options": [
      "$1.2$",
      "$0.2$",
      "$6$",
      "$1.0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In a direction field, the lineal element at $(x, y)$ has slope $f(x, y)$: the slope any solution curve through that point must have.",
      "stepByStep": [
        "$f(2, 3) = 0.2(2)(3) = 1.2$."
      ],
      "commonTrap": "Adding the coordinates ($0.2(2+3) = 1.0$) or forgetting the 0.2 factor ($6$).",
      "reference": "ENGR 213 Lecture 2 (Textbook \u00a72.1)"
    }
  },
  {
    "id": "Q_ENGR213_012",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "commonTrap": "Misreading the phase line. Arrows pointing toward $c$ from both sides mean an attractor (asymptotically stable); arrows pointing away mean a repeller (unstable).",
      "reference": "ENGR 213 Lecture 2 (Textbook \u00a72.1)"
    }
  },
  {
    "id": "Q_ENGR213_013",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Separable ODEs",
    "difficulty": "Midterm Level",
    "question": "Lecture 3, Example 2: solve the IVP $\\dfrac{dy}{dx} = -\\dfrac{x}{y}$, $y(4) = -3$.",
    "options": [
      "$y = -\\sqrt{25 - x^2}$, for $-5 < x < 5$",
      "$y = \\sqrt{25 - x^2}$, for $-5 < x < 5$",
      "$y = -\\sqrt{x^2 - 25}$, for $x > 5$",
      "$y = -3 + \\ln\\dfrac{x}{4}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Separable: $\\dfrac{dy}{dx} = g(x)h(y)$. Separate the variables, integrate both sides, then apply the initial condition.",
      "stepByStep": [
        "$y\\,dy = -x\\,dx \\implies \\dfrac{y^2}{2} = -\\dfrac{x^2}{2} + c_1 \\implies x^2 + y^2 = c$.",
        "$y(4) = -3 \\implies 16 + 9 = 25 = c$, so $x^2 + y^2 = 25$ (implicit).",
        "The IC has $y < 0$, so take the lower semicircle: $y = -\\sqrt{25 - x^2}$ on $(-5, 5)$."
      ],
      "commonTrap": "Taking the $+\\sqrt{\\ }$ branch. That curve passes through $(4, 3)$, not $(4, -3)$.",
      "reference": "ENGR 213 Lecture 3 (Textbook \u00a72.2)"
    }
  },
  {
    "id": "Q_ENGR213_014",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Separable ODEs \u2013 Lost Solutions",
    "difficulty": "Midterm Level",
    "question": "Lecture 3, Example 3: solving $\\dfrac{dy}{dx} = y^2 - 4$ by separation gives the family $y = 2\\,\\dfrac{1 + c e^{4x}}{1 - c e^{4x}}$. Which constant solution is a singular (lost) solution?",
    "options": [
      "$y = -2$ only",
      "$y = 2$ and $y = -2$",
      "$y = 2$ only",
      "$y = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Dividing by $g(y)$ can lose constant solutions where $g(y) = 0$. A constant solution is singular only if no choice of $c$ recovers it from the family.",
      "stepByStep": [
        "Constant solutions: $y^2 - 4 = 0 \\implies y = \\pm 2$.",
        "$c = 0$ gives $y = 2$, so $y = 2$ is in the family.",
        "No value of $c$ gives $y = -2$, so $y = -2$ is the singular solution."
      ],
      "commonTrap": "Declaring every root of $g(y) = 0$ lost. Always check whether the family already contains it.",
      "reference": "ENGR 213 Lecture 3 (Textbook \u00a72.2)"
    }
  },
  {
    "id": "Q_ENGR213_015",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Linear First-Order ODEs",
    "difficulty": "Exam Master",
    "question": "Lecture 3, Example 5: solve $(x^2 - 9)\\dfrac{dy}{dx} + xy = 0$ for $x > 3$.",
    "options": [
      "$y = \\dfrac{c}{\\sqrt{x^2 - 9}}$",
      "$y = c\\sqrt{x^2 - 9}$",
      "$y = \\dfrac{c}{x^2 - 9}$",
      "$y = c\\,e^{-x^2/2}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Divide by the lead coefficient to reach standard form $y' + P(x)y = f(x)$, then use $\\mu = e^{\\int P\\,dx}$.",
      "stepByStep": [
        "Standard form: $y' + \\dfrac{x}{x^2 - 9}\\,y = 0$, so $P(x) = \\dfrac{x}{x^2-9}$.",
        "$\\mu = e^{\\frac12\\ln|x^2 - 9|} = \\sqrt{x^2 - 9}$ for $x > 3$.",
        "$\\dfrac{d}{dx}\\left[\\sqrt{x^2-9}\\,y\\right] = 0 \\implies y = \\dfrac{c}{\\sqrt{x^2-9}}$."
      ],
      "commonTrap": "Forgetting to divide by $(x^2 - 9)$ first, which gives the wrong $P(x) = x$ and $\\mu = e^{x^2/2}$.",
      "reference": "ENGR 213 Lecture 3 (Textbook \u00a72.3)"
    }
  },
  {
    "id": "Q_ENGR213_016",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Linear First-Order ODEs",
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
      "coreConcept": "In standard form $y' + P(x)y = f(x)$, the integrating factor is $e^{\\int P(x)dx}$.",
      "stepByStep": [
        "$P(x) = -2 \\implies \\mu(x) = e^{\\int -2\\,dx} = e^{-2x}$."
      ],
      "commonTrap": "Dropping the negative sign in $P(x)$.",
      "reference": "ENGR 213 Lecture 3 (Textbook \u00a72.3)"
    }
  },
  {
    "id": "Q_ENGR213_017",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Linear First-Order ODEs",
    "difficulty": "Midterm Level",
    "question": "Lecture 3, Example 4: find the general solution of $\\dfrac{dy}{dx} - 3y = 6$.",
    "options": [
      "$y = -2 + c e^{3x}$",
      "$y = 2 + c e^{3x}$",
      "$y = -2 + c e^{-3x}$",
      "$y = 6x + c e^{3x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Put the equation in standard form, multiply by $e^{\\int P dx}$, recognise the left side as $\\frac{d}{dx}[\\mu y]$, then integrate.",
      "stepByStep": [
        "$P(x) = -3 \\implies \\mu = e^{-3x}$.",
        "$\\dfrac{d}{dx}\\left[e^{-3x}y\\right] = 6e^{-3x}$.",
        "$e^{-3x}y = -2e^{-3x} + c \\implies y = -2 + ce^{3x}$.",
        "Check: $y_p = -2$ gives $0 - 3(-2) = 6$. \u2714"
      ],
      "commonTrap": "Sign slip when integrating $6e^{-3x}$: $\\int 6e^{-3x}dx = -2e^{-3x}$, not $+2e^{-3x}$.",
      "reference": "ENGR 213 Lecture 3 (Textbook \u00a72.3)"
    }
  },
  {
    "id": "Q_ENGR213_018",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "coreConcept": "Criterion for an exact differential: with $M, N$ and their first partials continuous on $R$, $M\\,dx + N\\,dy$ is exact if and only if $\\partial M/\\partial y = \\partial N/\\partial x$.",
      "stepByStep": [
        "If $df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy = M dx + N dy$",
        "Then $\\frac{\\partial M}{\\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$ and $\\frac{\\partial N}{\\partial x} = \\frac{\\partial^2 f}{\\partial x \\partial y}$",
        "Since mixed partials are equal for smooth functions: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$."
      ],
      "commonTrap": "Differentiating $M$ with respect to $x$ and $N$ with respect to $y$ (swapping the variables).",
      "reference": "ENGR 213 Lecture 4 (Textbook \u00a72.4)"
    }
  },
  {
    "id": "Q_ENGR213_019",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Exact Equations",
    "difficulty": "Midterm Level",
    "question": "Lecture 4, Example 1: solve $2xy\\,dx + (x^2 - 1)\\,dy = 0$.",
    "options": [
      "$x^2 y - y = c$",
      "$x^2 y^2 - y = c$",
      "$2x^2 y - y = c$",
      "$x^2 - y = c$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Exact when $M_y = N_x$. Then find $f$ with $f_x = M$ and $f_y = N$; the solution is $f(x,y) = c$.",
      "stepByStep": [
        "$M_y = 2x = N_x$, so the equation is exact.",
        "$f = \\int 2xy\\,dx = x^2 y + g(y)$.",
        "$f_y = x^2 + g'(y) = x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y$.",
        "Solution: $x^2 y - y = c$."
      ],
      "commonTrap": "Forgetting $g(y)$, or not integrating $g'(y) = -1$ to get $-y$.",
      "reference": "ENGR 213 Lecture 4 (Textbook \u00a72.4)"
    }
  },
  {
    "id": "Q_ENGR213_020",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "commonTrap": "Mixing up the two tests. If instead $(N_x - M_y)/M$ depends only on $y$, the factor is $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M}dy}$.",
      "reference": "ENGR 213 Lecture 4 (Textbook \u00a72.4)"
    }
  },
  {
    "id": "Q_ENGR213_021",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Integrating Factor (Exact)",
    "difficulty": "Exam Master",
    "question": "Lecture 4, Example 3: which integrating factor makes $xy\\,dx + (2x^2 + 3y^2 - 20)\\,dy = 0$ exact?",
    "options": [
      "$\\mu = y^3$",
      "$\\mu = x^3$",
      "$\\mu = e^{3y}$",
      "$\\mu = y^{-3}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "If $(M_y - N_x)/N$ depends only on $x$, use $\\mu(x) = e^{\\int (M_y - N_x)/N\\,dx}$. If $(N_x - M_y)/M$ depends only on $y$, use $\\mu(y) = e^{\\int (N_x - M_y)/M\\,dy}$.",
      "stepByStep": [
        "$M_y = x$ and $N_x = 4x$, so the equation is not exact.",
        "$(M_y - N_x)/N = -3x/(2x^2 + 3y^2 - 20)$ depends on both variables, so no $\\mu(x)$ works.",
        "$(N_x - M_y)/M = 3x/(xy) = 3/y$ depends only on $y$.",
        "$\\mu(y) = e^{\\int 3/y\\,dy} = e^{3\\ln y} = y^3$."
      ],
      "commonTrap": "Stopping at the $x$-test, or writing $e^{3y}$ instead of $e^{3\\ln y} = y^3$.",
      "reference": "ENGR 213 Lecture 4 (Textbook \u00a72.4)"
    }
  },
  {
    "id": "Q_ENGR213_022",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "commonTrap": "Substituting $y = ux$ but forgetting that $dy = u\\,dx + x\\,du$.",
      "reference": "ENGR 213 Lecture 5 (Textbook \u00a72.5)"
    }
  },
  {
    "id": "Q_ENGR213_023",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "reference": "ENGR 213 Lecture 5 (Textbook \u00a72.5)"
    }
  },
  {
    "id": "Q_ENGR213_024",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Bernoulli's Equation",
    "difficulty": "Exam Master",
    "question": "Lecture 5, Example 3: solve $x\\dfrac{dy}{dx} + y = x^2 y^2$.",
    "options": [
      "$y = \\dfrac{1}{-x^2 + cx}$",
      "$y = \\dfrac{1}{x^2 + cx}$",
      "$y = -x^2 + cx$",
      "$y = \\dfrac{1}{-x + c}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Bernoulli with $n = 2$: substitute $u = y^{1-n} = y^{-1}$ to get a linear ODE in $u$.",
      "stepByStep": [
        "Standard form: $y' + \\tfrac{1}{x}y = x y^2$.",
        "With $u = y^{-1}$: $u' - \\tfrac{1}{x}u = -x$.",
        "$\\mu = e^{-\\ln x} = 1/x \\implies \\dfrac{d}{dx}\\left[\\dfrac{u}{x}\\right] = -1 \\implies u = -x^2 + cx$.",
        "Back-substitute: $y = 1/u = \\dfrac{1}{-x^2 + cx}$."
      ],
      "commonTrap": "Stopping at $u = -x^2 + cx$ without back-substituting, or missing the sign change that the substitution introduces.",
      "reference": "ENGR 213 Lecture 5 (Textbook \u00a72.5)"
    }
  },
  {
    "id": "Q_ENGR213_025",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Reduction to Separation of Variables",
    "difficulty": "Midterm Level",
    "question": "What substitution reduces $\\dfrac{dy}{dx} = \\sin(x + y)$ to a separable equation?",
    "options": [
      "$u = x + y$",
      "$u = x - y$",
      "$u = \\sin(x)$",
      "$u = y/x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An equation $\\dfrac{dy}{dx} = f(Ax + By + C)$ becomes separable with $u = Ax + By + C$ ($B \\neq 0$).",
      "stepByStep": [
        "$u = x + y \\implies \\dfrac{du}{dx} = 1 + \\dfrac{dy}{dx} = 1 + \\sin u$.",
        "Separable: $\\dfrac{du}{1 + \\sin u} = dx$."
      ],
      "commonTrap": "Trying to expand $\\sin(x+y) = \\sin x \\cos y + \\cos x \\sin y$.",
      "reference": "ENGR 213 Lecture 5 (Textbook \u00a72.5)"
    }
  },
  {
    "id": "Q_ENGR213_026",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_027",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Growth Model (Bacteria)",
    "difficulty": "Midterm Level",
    "question": "Lecture 6, Example 1: a culture starts with $P_0$ bacteria and has $\\tfrac32 P_0$ after 1 hour. If the growth rate is proportional to $P$, when does the population triple?",
    "options": [
      "$t = \\dfrac{\\ln 3}{\\ln 1.5} \\approx 2.71$ h",
      "$t = 4$ h",
      "$t = 3$ h",
      "$t = 2$ h"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$\\dfrac{dP}{dt} = kP \\implies P(t) = P_0 e^{kt}$.",
      "stepByStep": [
        "$P(1) = \\tfrac32 P_0 \\implies e^{k} = 1.5 \\implies k = \\ln 1.5 \\approx 0.4055$.",
        "$3P_0 = P_0 e^{kt} \\implies t = \\dfrac{\\ln 3}{\\ln 1.5} \\approx 2.71$ h."
      ],
      "commonTrap": "Assuming linear growth (adding $0.5P_0$ per hour gives 4 h). Proportional growth is exponential.",
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_028",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Mixture of Two Salt Solutions",
    "difficulty": "Midterm Level",
    "question": "Lecture 6, Example 3: a 300 gal tank starts with 50 lb of salt. Brine at 2 lb/gal enters at 3 gal/min, and the well-mixed solution leaves at 3 gal/min. How much salt is in the tank after a long time?",
    "options": [
      "600 lb",
      "50 lb",
      "300 lb",
      "6 lb"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$\\dfrac{dA}{dt} = R_{in} - R_{out} = Q_{in}C_{in} - Q_{out}\\dfrac{A}{V}$.",
      "stepByStep": [
        "$R_{in} = 3 \\times 2 = 6$ lb/min, and $R_{out} = 3\\cdot\\dfrac{A}{300} = \\dfrac{A}{100}$ lb/min.",
        "$A' + \\dfrac{A}{100} = 6 \\implies A(t) = 600 + ce^{-t/100}$.",
        "$A(0) = 50 \\implies c = -550$, so $A(t) = 600 - 550e^{-t/100} \\to 600$ lb."
      ],
      "commonTrap": "Answering 6 lb (the inflow rate). In the long run the tank concentration matches the inflow: $2 \\times 300 = 600$ lb.",
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_029",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_030",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Newton's Law of Cooling",
    "difficulty": "Exam Master",
    "question": "Lecture 6: a cake leaves the oven at $300^\\circ$F and is $200^\\circ$F three minutes later, in a $70^\\circ$F room. Which statement is correct?",
    "options": [
      "$k = \\tfrac13\\ln\\tfrac{13}{23} \\approx -0.190$, and $T(t)$ only approaches $70^\\circ$F as $t \\to \\infty$",
      "$k = \\tfrac13\\ln\\tfrac{2}{3} \\approx -0.135$, and the cake reaches $70^\\circ$F at about 11 min",
      "$k \\approx -0.190$, and the cake reaches exactly $70^\\circ$F at $t = 30$ min",
      "$k \\approx +0.190$, because the temperature difference is shrinking"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Newton's law: $\\dfrac{dT}{dt} = k(T - T_m) \\implies T(t) = T_m + (T_0 - T_m)e^{kt}$.",
      "stepByStep": [
        "$T(t) = 70 + 230e^{kt}$.",
        "$T(3) = 200 \\implies e^{3k} = \\tfrac{130}{230} = \\tfrac{13}{23} \\implies k = \\tfrac13\\ln\\tfrac{13}{23} \\approx -0.19018$.",
        "Since $230e^{kt} > 0$ for all $t$, $T > 70$ always. It is within $0.5^\\circ$F after about 32 min."
      ],
      "commonTrap": "Using $200/300$ instead of $(200-70)/(300-70)$. Always work with the difference $T - T_m$.",
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_031",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_032",
    "courseId": "ENGR213",
    "chapter": "ch2",
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
      "coreConcept": "When inflow and outflow rates differ, the volume changes: $\\dfrac{dV}{dt} = Q_{in} - Q_{out}$, and the outflow concentration becomes $A(t)/V(t)$.",
      "stepByStep": [
        "$\\frac{dV}{dt} = 5 - 3 = 2\\text{ L/min}$",
        "Integrate with $V(0) = 500$: $V(t) = 500 + 2t$."
      ],
      "commonTrap": "Subtracting $r_{\\text{in}} - r_{\\text{out}}$ in reverse order, which would imply the tank is emptying.",
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_ENGR213_033",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "LR-Series Circuit",
    "difficulty": "Midterm Level",
    "question": "Lecture 6, Example 4: a 12 V battery is connected to an LR-series circuit with $L = 0.5$ H and $R = 10\\,\\Omega$. If $i(0) = 0$, find $i(t)$.",
    "options": [
      "$i(t) = \\tfrac65 - \\tfrac65 e^{-20t}$",
      "$i(t) = \\tfrac65 e^{-20t}$",
      "$i(t) = 24 - 24e^{-20t}$",
      "$i(t) = \\tfrac65 - \\tfrac65 e^{-5t}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Kirchhoff's second law for an LR circuit: $L\\dfrac{di}{dt} + Ri = E(t)$, a linear first-order ODE.",
      "stepByStep": [
        "$0.5\\,i' + 10i = 12 \\implies i' + 20i = 24$.",
        "$\\mu = e^{20t} \\implies i = \\tfrac{24}{20} + ce^{-20t} = \\tfrac65 + ce^{-20t}$.",
        "$i(0) = 0 \\implies c = -\\tfrac65$. As $t \\to \\infty$, $i \\to E/R = 1.2$ A."
      ],
      "commonTrap": "Not dividing by $L$ first (giving $24$ as the steady state), or using $R/L = 5$ instead of $10/0.5 = 20$.",
      "reference": "ENGR 213 Lecture 6 (Textbook \u00a72.7)"
    }
  },
  {
    "id": "Q_INDU211_001",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Open vs Closed-Loop Systems",
    "difficulty": "Foundation",
    "question": "In the lecture, a car without a driver is used as an example of an open-loop system and a car with a driver as a closed-loop system. What makes the second one closed-loop?",
    "options": [
      "It uses feedback on its own output performance to adjust its behaviour",
      "It has more components interacting with each other",
      "It has no inputs from the outside environment",
      "It always produces a physical product rather than a service"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A closed-loop system is aware of, and influenced by, its past performance through feedback; an open-loop system has no means to monitor or control its output.",
      "stepByStep": [
        "Open loop: Input \u2192 System \u2192 Output (no performance measurement).",
        "Closed loop: Input \u2192 System \u2192 Output, with output performance fed back to the input side.",
        "The driver observes the car's behaviour and corrects it \u2014 that is the feedback path."
      ],
      "commonTrap": "Thinking \"closed\" means isolated from the environment. It refers to the feedback loop being closed, not the system being sealed off.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_002",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Decision-Making Levels",
    "difficulty": "Foundation",
    "question": "A plant manager must decide how much to produce next quarter and when to schedule preventive maintenance. According to the Chapter 2 decision hierarchy, these are:",
    "options": [
      "Tactical decisions (how much, when?)",
      "Strategic decisions (what, how, where?)",
      "Control decisions (day-to-day operations)",
      "Ethical decisions (public welfare)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Strategic = what, how, where (products, processes, facilities). Tactical = how much, when (production, inventory and maintenance planning). Control = planning and controlling daily operations.",
      "stepByStep": [
        "\"How much to produce\" \u2192 production planning to meet demand \u2192 tactical.",
        "\"When to do maintenance\" \u2192 maintenance planning \u2192 tactical."
      ],
      "commonTrap": "Labelling anything that sounds important as \"strategic\". Strategic decisions are about which products, which processes, and where the facilities go.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_003",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Chronology of Industrial Engineering",
    "difficulty": "Foundation",
    "question": "Which pioneer\u2013contribution pairing matches the Chronology of Industrial Engineering in the lecture?",
    "options": [
      "Walter Shewhart \u2014 Quality control",
      "Henry L. Gantt \u2014 Division of labour",
      "Charles Babbage \u2014 Mass production and assembly lines",
      "Lillian Gilbreth \u2014 Interchangeable manufacture"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Key pioneers from the slides: Babbage (division of labour, 1800s), Ford (mass production and assembly lines), F.W. Taylor (job analysis and design for maximum efficiency), F.B. Gilbreth (motion analysis and time study), L. Gilbreth (human factors), H.L. Gantt (Gantt chart), Shewhart (quality control).",
      "stepByStep": [
        "Shewhart \u2192 statistical quality control. \u2714",
        "Gantt \u2192 the Gantt chart, not division of labour (Babbage).",
        "Assembly lines \u2192 Henry Ford, not Babbage.",
        "Lillian Gilbreth \u2192 human factors."
      ],
      "commonTrap": "Mixing up Babbage (division of labour) with Ford (assembly lines), and Frank Gilbreth (motion study) with Lillian Gilbreth (human factors).",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_004",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Professional Ethics (OIQ)",
    "difficulty": "Foundation",
    "question": "An engineer's employer pushes for a cheaper design that would compromise user safety. According to the professional-ethics principles in Chapter 1 (and the OIQ regulating the profession in Quebec), what must take priority?",
    "options": [
      "Protecting the safety, health and welfare of the public",
      "Maximizing the employer's profitability",
      "Defending the employer in any resulting legal dispute",
      "Delivering the design as fast as possible"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Engineers make decisions with profound impact on society and carry a tremendous responsibility to protect the public welfare. That is why engineering is a regulated profession, governed in Quebec by the OIQ.",
      "stepByStep": [
        "The slides note that engineers are often caught between their employer and the public: a cheap design may mean an unsafe product.",
        "When cost and public safety conflict, public welfare comes first."
      ],
      "commonTrap": "Believing loyalty to the employer overrides public safety.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_005",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Break-Even Analysis",
    "difficulty": "Foundation",
    "question": "A manufacturing process has fixed cost $FC = \\$50{,}000$, variable cost $v = \\$15$/unit, and selling price $p = \\$25$/unit. What is the break-even volume $Q^*$?",
    "options": [
      "5,000 units",
      "2,000 units",
      "3,333 units",
      "10,000 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Break-even is the sales level at which total revenue equals total cost: $pQ = FC + vQ$.",
      "stepByStep": [
        "$Q^* = \\dfrac{FC}{p - v} = \\dfrac{50{,}000}{25 - 15} = \\dfrac{50{,}000}{10} = 5{,}000$ units."
      ],
      "commonTrap": "Dividing $FC$ by the price $p$ (giving 2,000) instead of by the unit contribution $(p - v)$.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Revenue-based BEP"
    }
  },
  {
    "id": "Q_INDU211_006",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Two-Process Crossover",
    "difficulty": "Midterm Level",
    "question": "Process A has $FC_A = \\$10{,}000$ and $v_A = \\$8$/unit. Process B has $FC_B = \\$30{,}000$ and $v_B = \\$4$/unit. At what volume do both processes have equal total cost?",
    "options": [
      "5,000 units",
      "4,000 units",
      "7,500 units",
      "2,500 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The cost-based BEP between two processes is where their total cost lines intersect: $FC_A + v_A Q = FC_B + v_B Q$.",
      "stepByStep": [
        "$10{,}000 + 8Q = 30{,}000 + 4Q$",
        "$4Q = 20{,}000 \\implies Q = 5{,}000$ units.",
        "Below 5,000 choose A (lower fixed cost); above 5,000 choose B (lower variable cost)."
      ],
      "commonTrap": "Dividing the fixed-cost difference by the sum of variable costs ($20{,}000/12$) instead of their difference.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Evaluating the cost of each process"
    }
  },
  {
    "id": "Q_INDU211_007",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Three-Process Selection",
    "difficulty": "Exam Master",
    "question": "Lecture example: Process A ($FC = \\$110{,}000$, $v = \\$2$), Process B ($FC = \\$80{,}000$, $v = \\$4$), Process C ($FC = \\$75{,}000$, $v = \\$5$). Over what range of annual volume is Process B the cheapest?",
    "options": [
      "Between 5,000 and 15,000 units",
      "Between 0 and 5,000 units",
      "Above 15,000 units",
      "Between 11,667 and 15,000 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Find the crossover between each pair of adjacent cost lines, then read off which process is lowest in each interval.",
      "stepByStep": [
        "$BEP_{BC}$: $80{,}000 + 4Q = 75{,}000 + 5Q \\implies Q = 5{,}000$.",
        "$BEP_{AB}$: $110{,}000 + 2Q = 80{,}000 + 4Q \\implies Q = 15{,}000$.",
        "0\u20135,000 \u2192 C; 5,000\u201315,000 \u2192 B; above 15,000 \u2192 A.",
        "Check at 10,000: $TC_A = 130{,}000$, $TC_B = 120{,}000$, $TC_C = 125{,}000$, so B is cheapest. \u2714"
      ],
      "commonTrap": "Using the A\u2013C crossover (11,667). That intersection lies above the B line, so it never decides anything.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Process selection example"
    }
  },
  {
    "id": "Q_INDU211_008",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Make-or-Buy Decision",
    "difficulty": "Midterm Level",
    "question": "A company can buy a bracket for $\\$7$/unit, or make it in-house with $FC = \\$15{,}000$ and $v = \\$4$/unit. Above what annual demand should it make the part in-house?",
    "options": [
      "Above 5,000 units/year",
      "Below 5,000 units/year",
      "Above 2,143 units/year",
      "It should always buy"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Buying is a cost line with zero fixed cost: $TC_{buy} = 7Q$. Making in-house: $TC_{make} = 15{,}000 + 4Q$.",
      "stepByStep": [
        "$7Q = 15{,}000 + 4Q \\implies 3Q = 15{,}000 \\implies Q = 5{,}000$.",
        "For $Q > 5{,}000$, making has the lower total cost."
      ],
      "commonTrap": "Reversing the logic. A large fixed cost is only justified at high volume, where it can be spread over many units.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Cost-volume relationships"
    }
  },
  {
    "id": "Q_INDU211_009",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Product\u2013Production Design Interaction",
    "difficulty": "Foundation",
    "question": "What is the classic tolerance conflict between the product designer and the manufacturing engineer?",
    "options": [
      "The designer opts for tight tolerances (high processing cost), while the manufacturing engineer opts for the largest possible tolerance",
      "The designer opts for loose tolerances, while the manufacturing engineer opts for the tightest possible tolerance",
      "Both prefer tight tolerances because they always reduce production cost",
      "Tolerances are set only by the customer, so there is no conflict"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Product design evaluates whether the part performs its function; manufacturing engineering evaluates the cost of producing it. Tighter tolerances are more expensive to produce.",
      "stepByStep": [
        "Designer: tight tolerance \u2192 better function, but higher processing cost.",
        "Manufacturing engineer: largest acceptable tolerance \u2192 easier and cheaper to produce.",
        "That is why the two must interact from the very beginning (Concurrent Engineering)."
      ],
      "commonTrap": "Assuming tighter tolerance is always better. It raises cost and hurts manufacturability.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0)"
    }
  },
  {
    "id": "Q_INDU211_010",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Concurrent Engineering",
    "difficulty": "Foundation",
    "question": "What is the main goal of Concurrent (simultaneous) Engineering?",
    "options": [
      "Integrate design, manufacturing and other functions from the outset to reduce the time needed to bring a new product to market",
      "Eliminate the need for manufacturing engineers",
      "Design the product first, then pass it to manufacturing when the design is frozen",
      "Outsource all fabrication to the lowest bidder"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "All life-cycle elements (functionality, producibility, assembly, testability, maintenance, environmental impact, disposal and recycling) are considered in the early design phases.",
      "stepByStep": [
        "Functions are integrated at the start of the process rather than working in sequence.",
        "Product and process are developed simultaneously, which reduces elapsed time to market.",
        "The slides note it has been applied most notably in the aerospace industry."
      ],
      "commonTrap": "Option C describes the traditional sequential approach that Concurrent Engineering replaces.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0)"
    }
  },
  {
    "id": "Q_INDU211_011",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Bill of Materials (BOM)",
    "difficulty": "Foundation",
    "question": "In a multi-level Bill of Materials (product structure tree), what does Level 0 represent?",
    "options": [
      "The final (end) product",
      "Raw material stock",
      "The first sub-assembly",
      "Purchased fasteners"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Level 0 is the top of the tree: the finished product. Each lower level breaks it into subassemblies, components and raw materials, with the quantity per parent shown in brackets.",
      "stepByStep": [
        "Level 0 = Product; Level 1 = subassemblies (S1, S2); lower levels = sub-subassemblies, components (C) and raw materials (R)."
      ],
      "commonTrap": "Thinking Level 0 is the bottom of the tree (raw material).",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) / Assignment 1"
    }
  },
  {
    "id": "Q_INDU211_012",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Sequence of Operations",
    "difficulty": "Midterm Level",
    "question": "In the lecture's steel-shaft sequence (cut stock \u2192 facing \u2192 turning \u2192 drilling \u2192 grooving \u2192 heat treatment \u2192 grinding \u2192 surface finishing \u2192 coating), why is grinding placed after heat treatment?",
    "options": [
      "Heat treatment hardens and can distort the part, so grinding is done afterwards to reach the final tolerance and surface finish on the hard metal",
      "Grinding softens the metal so that heat treatment is more effective",
      "Heat treatment is needed to remove the burrs left by grinding",
      "The order does not matter as long as all operations are completed"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Sequencing rule: no succeeding operation should adversely affect previous operations, and close tolerances must be achieved at the end.",
      "stepByStep": [
        "Grinding removes metal in small pieces to improve the surface finish on very hard metal.",
        "Grinding before heat treatment would let the heat treatment distort the finished dimensions.",
        "So it goes: rough machining (soft) \u2192 heat treat (hard) \u2192 grind (final tolerance)."
      ],
      "commonTrap": "Assuming the order is arbitrary. Operations sequencing is an explicit step in process engineering.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Determining the sequence of operations"
    }
  },
  {
    "id": "Q_INDU211_013",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Metal Forming: Hot vs Cold Working",
    "difficulty": "Foundation",
    "question": "Which statement correctly contrasts cold working with hot working in metal forming?",
    "options": [
      "Cold working holds close tolerances with a good surface finish; hot working (above recrystallization temperature) suits unusual shapes",
      "Cold working is done above the recrystallization temperature",
      "Hot working gives better surface finish and tighter tolerances than cold working",
      "Only hot working can be used for rolling"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In metal forming, the metal is worked under pressure, hot or cold, to form a shape and/or improve its properties.",
      "stepByStep": [
        "Hot working: above the recrystallization temperature, so the metal flows easily into unusual shapes.",
        "Cold working: holds close tolerances and gives a good surface finish.",
        "Rolling can be either hot or cold."
      ],
      "commonTrap": "Swapping the two. Heat makes the metal easy to shape, but it scales the surface and loosens tolerances.",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Metal forming"
    }
  },
  {
    "id": "Q_INDU211_014",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Jig vs Fixture",
    "difficulty": "Foundation",
    "question": "What is the difference between a jig and a fixture?",
    "options": [
      "A jig holds the workpiece and guides the cutting tool (e.g., a drilling jig); a fixture only holds and locates the workpiece (e.g., a vise)",
      "A fixture guides the cutting tool, while a jig only holds the workpiece",
      "They are synonyms with no technical distinction",
      "Jigs are used only for welding and fixtures only for casting"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Both are work-holding devices designed by the manufacturing engineer; only the jig also guides the tool.",
      "stepByStep": [
        "Fixture = hold + locate (vise).",
        "Jig = hold + guide the tool into the workpiece (drilling jig)."
      ],
      "commonTrap": "Swapping the definitions. Remember \"Jig guides\".",
      "reference": "INDU 211 Ch. 3 (Lecture 2.0) \u2013 Jig and fixture design"
    }
  },
  {
    "id": "Q_INDU211_015",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Distance Metrics",
    "difficulty": "Foundation",
    "question": "In an urban grid, what is the rectilinear distance between facility A $(2, 3)$ and facility B $(8, 11)$?",
    "options": [
      "$14$",
      "$10$",
      "$8$",
      "$12$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rectilinear distance (urban streets, factory corridors): $d = |x_1 - x_2| + |y_1 - y_2|$. Euclidean (straight-line, intercity): $d = \\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$.",
      "stepByStep": [
        "$d = |2 - 8| + |3 - 11| = 6 + 8 = 14$."
      ],
      "commonTrap": "Computing the Euclidean distance $\\sqrt{6^2 + 8^2} = 10$ when the setting calls for rectilinear.",
      "reference": "INDU 211 Ch. 4 Part 1 \u2013 Facilities Location (Lecture 3.0)"
    }
  },
  {
    "id": "Q_INDU211_016",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Center of Gravity (Unequal Quantities)",
    "difficulty": "Midterm Level",
    "question": "Three stores at $(10, 20)$, $(30, 40)$ and $(20, 10)$ receive $100$, $200$ and $100$ tons respectively. What is the $x$-coordinate of the center of gravity?",
    "options": [
      "$22.5$",
      "$20.0$",
      "$25.0$",
      "$18.5$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "With different quantities, use the weighted average: $\\bar{x} = \\dfrac{\\sum Q_i x_i}{\\sum Q_i}$.",
      "stepByStep": [
        "$\\sum Q_i x_i = 100(10) + 200(30) + 100(20) = 9{,}000$",
        "$\\sum Q_i = 400$",
        "$\\bar{x} = 9{,}000 / 400 = 22.5$"
      ],
      "commonTrap": "Using the equal-quantity formula $(10+30+20)/3 = 20$.",
      "reference": "INDU 211 Ch. 4 Part 1 \u2013 Facilities Location (Lecture 3.0) \u2013 Center of gravity method"
    }
  },
  {
    "id": "Q_INDU211_017",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Center of Gravity (Lecture Example)",
    "difficulty": "Exam Master",
    "question": "Lecture example: destinations D1 $(2,2)$, D2 $(3,5)$, D3 $(5,4)$, D4 $(8,5)$ receive 800, 900, 200 and 100 units/week. Where should the distribution center be located?",
    "options": [
      "$(3.05,\\ 3.70)$",
      "$(4.50,\\ 4.00)$",
      "$(3.70,\\ 3.05)$",
      "$(4.00,\\ 4.50)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Weighted center of gravity: $\\bar{x} = \\dfrac{\\sum Q_i x_i}{\\sum Q_i}$, $\\bar{y} = \\dfrac{\\sum Q_i y_i}{\\sum Q_i}$.",
      "stepByStep": [
        "$\\sum Q_i = 800 + 900 + 200 + 100 = 2{,}000$",
        "$\\sum Q_i x_i = 1{,}600 + 2{,}700 + 1{,}000 + 800 = 6{,}100 \\implies \\bar{x} = 3.05$",
        "$\\sum Q_i y_i = 1{,}600 + 4{,}500 + 800 + 500 = 7{,}400 \\implies \\bar{y} = 3.70$"
      ],
      "commonTrap": "$(4.5, 4.0)$ is the equal-quantity answer. The heavy demand at D1 and D2 pulls the location toward the lower left.",
      "reference": "INDU 211 Ch. 4 Part 1 \u2013 Facilities Location (Lecture 3.0) \u2013 Center of gravity example"
    }
  },
  {
    "id": "Q_INDU211_018",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Transportation Method (Least-Cost)",
    "difficulty": "Exam Master",
    "question": "Plain View example. Factories: Amarillo (400), Waco (1,000), Huntsville (600). Warehouses: San Antonio (300), Dallas (900), Houston (800). Unit costs are in the table. Using the least-cost assignment method (and allocating Amarillo\u2192Dallas first when the two cells costing 21 tie), what is the total monthly shipping cost?",
    "codeSnippet": "From \\ To     San Antonio   Dallas   Houston   Capacity\nAmarillo           31          21        42        400\nWaco               20          21        30      1,000\nHuntsville         23          20        15        600\nDemand            300         900       800      2,000",
    "options": [
      "$39,900",
      "$42,300",
      "$36,000",
      "$45,600"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Least-cost assignment: repeatedly pick the cheapest remaining cell and allocate as much as possible, until all demand is met and all supply is used.",
      "stepByStep": [
        "Cost 15: Huntsville\u2192Houston 600 (Huntsville used up; Houston needs 200 more).",
        "Cost 20: Waco\u2192San Antonio 300 (San Antonio done; Waco has 700 left).",
        "Cost 21 (tie): Amarillo\u2192Dallas 400, then Waco\u2192Dallas 500 (Dallas done; Waco has 200 left).",
        "Cost 30: Waco\u2192Houston 200 (Houston done).",
        "Cost $= 600(15) + 300(20) + 400(21) + 500(21) + 200(30) = 9{,}000 + 6{,}000 + 8{,}400 + 10{,}500 + 6{,}000 = \\$39{,}900$."
      ],
      "commonTrap": "Breaking the tie the other way (Waco\u2192Dallas first) forces Amarillo\u2192Houston at 42/unit and gives a total of 42,300. That is exactly why least-cost gives a good feasible solution, not a guaranteed optimum.",
      "reference": "INDU 211 Ch. 4 Part 1 \u2013 Facilities Location (Lecture 3.0) \u2013 Transportation model example"
    }
  },
  {
    "id": "Q_INDU211_019",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Material Handling Cost Rule",
    "difficulty": "Foundation",
    "question": "According to the Chapter 4 facility-layout lecture, material handling typically accounts for what share of production cost?",
    "options": [
      "30% to 95%",
      "5% to 10%",
      "10% to 20%",
      "Less than 5%"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Material handling cost (30 to 95% of production cost) is the main focus of the IE in layout design. It is a variable, quantifiable cost.",
      "stepByStep": [
        "Because it is so large and non-value-adding, layout and the material handling system are designed together."
      ],
      "commonTrap": "Treating material handling as a minor overhead.",
      "reference": "INDU 211 Ch. 4 Part 2 \u2013 Facility Layout (Lecture 4.0)"
    }
  },
  {
    "id": "Q_INDU211_020",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Process Layout",
    "difficulty": "Midterm Level",
    "question": "Which layout groups similar equipment together (all lathes in one area, all drills in another) to make a small volume of many different products?",
    "options": [
      "Process layout (job shop / intermittent)",
      "Product layout (line flow / continuous)",
      "Cellular layout (group technology)",
      "Fixed-position layout"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Process layout: similar processes grouped together, with flow that varies by item. Examples: machine shop, hospital, bank.",
      "stepByStep": [
        "Advantages: better machine utilization, high flexibility, lower machine investment.",
        "Limitations: expensive material handling, harder planning and control, large WIP, higher skill required."
      ],
      "commonTrap": "Confusing it with cellular layout, which groups different machines into cells that each process a family of similar parts.",
      "reference": "INDU 211 Ch. 4 Part 2 \u2013 Facility Layout (Lecture 4.0)"
    }
  },
  {
    "id": "Q_INDU211_021",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Product Layout Limitations",
    "difficulty": "Midterm Level",
    "question": "Which of the following is a limitation of a product (line-flow) layout?",
    "options": [
      "A breakdown of one machine can stop the entire line, and the pace of production is set by the slowest machine",
      "Large amounts of work-in-process inventory tie up capital",
      "Material handling is more expensive because flow varies by product",
      "Operators need a higher grade of skill"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Product layout limitations: one breakdown stops the whole line, less flexibility for product changes, pace set by the slowest machine, and high investment.",
      "stepByStep": [
        "Its advantages are the mirror image of process layout: smooth flow, small WIP, reduced handling, little operator skill.",
        "Options B, C and D are all limitations of the process layout."
      ],
      "commonTrap": "Mixing up the advantage/limitation lists of the product and process layouts.",
      "reference": "INDU 211 Ch. 4 Part 2 \u2013 Facility Layout (Lecture 4.0)"
    }
  },
  {
    "id": "Q_INDU211_022",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Group Technology (GT)",
    "difficulty": "Midterm Level",
    "question": "What is the core principle of a cellular layout (Group Technology)?",
    "options": [
      "Machines are grouped into cells, each designed to process a family of similar parts",
      "All machines are arranged in one straight line for a single product",
      "Identical machines are bought from the same vendor",
      "The product stays in place and equipment is brought to it"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cellular layout suits mass customization: many product variants that share similar processing steps. Flow is smooth within cells and inter-cell flow is minimized.",
      "stepByStep": [
        "Examples from the slides: dining chair, office chair and bar stool cells in furniture; gear and brake cells in automotive.",
        "It is more flexible (but less efficient) than a product layout, and more efficient (but less flexible) than a process layout."
      ],
      "commonTrap": "Confusing part families (similar processing) with high volume of a single product.",
      "reference": "INDU 211 Ch. 4 Part 2 \u2013 Facility Layout (Lecture 4.0)"
    }
  },
  {
    "id": "Q_INDU211_023",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Cellular vs Process Layout",
    "difficulty": "Foundation",
    "question": "Compared with a process layout, what is the main improvement of a cellular layout?",
    "options": [
      "Smoother flow within cells, with less material handling and work-in-process",
      "It needs much more floor space",
      "It maximizes the flexibility to make any product",
      "Workers operate in complete isolation"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cells co-locate the machines a part family needs, so parts no longer travel between distant functional departments.",
      "stepByStep": [
        "Shorter travel \u2192 lower handling cost, less WIP, faster throughput."
      ],
      "commonTrap": "Thinking cellular is the most flexible layout. The process layout is more flexible; cellular trades some flexibility for efficiency.",
      "reference": "INDU 211 Ch. 4 Part 2 \u2013 Facility Layout (Lecture 4.0)"
    }
  },
  {
    "id": "Q_INDU211_024",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Fixed-Position Layout",
    "difficulty": "Foundation",
    "question": "A shipyard is assembling a 200 m cargo vessel. Which layout is appropriate?",
    "options": [
      "Fixed-position layout",
      "Product layout",
      "Process layout",
      "Cellular layout"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In a fixed-position layout, the product stays in place and personnel, material and equipment come to it.",
      "stepByStep": [
        "It is used when the product is very bulky, large, heavy or fragile (ships, aircraft, buildings)."
      ],
      "commonTrap": "Choosing product layout just because the vessel is \"assembled\". The ship cannot move down a line.",
      "reference": "INDU 211 Ch. 4 Part 2 \u2013 Facility Layout (Lecture 4.0)"
    }
  },
  {
    "id": "Q_INDU211_025",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Material Handling Equipment",
    "difficulty": "Foundation",
    "question": "Homogeneous material must be moved from one fixed point to another at a constant rate. Which material handling equipment fits best?",
    "options": [
      "Conveyors",
      "Industrial trucks",
      "Cranes and hoists",
      "Containers and racks"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Conveyors: fixed point to fixed point, homogeneous material, constant rate.",
      "stepByStep": [
        "Industrial trucks: varying paths and intermittent loads (job shops).",
        "Cranes and hoists: overhead lifting.",
        "Containers and racks: store and handle bulk material, better use of space."
      ],
      "commonTrap": "Picking industrial trucks. They are for varying paths, not a fixed route at a constant rate.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0)"
    }
  },
  {
    "id": "Q_INDU211_026",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Automated Material Handling",
    "difficulty": "Foundation",
    "question": "A system made up of storage rack systems, a computer control system and a crane is called:",
    "options": [
      "An Automated Storage and Retrieval System (AS/RS)",
      "An Automatic Guided Vehicle (AGV)",
      "An elevator / lift",
      "A gravity roller conveyor"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "AS/RS = storage racks + computer control + crane. AGV = driverless vehicle following predetermined paths. Elevators/lifts = raise or lower material vertically, fixed in location.",
      "stepByStep": [
        "Match each piece of equipment to its defining characteristics from the Chapter 5 slides."
      ],
      "commonTrap": "Confusing an AGV (a moving vehicle) with an AS/RS (a storage system with a crane).",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0)"
    }
  },
  {
    "id": "Q_INDU211_027",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Principles of Materials Handling",
    "difficulty": "Midterm Level",
    "question": "A warehouse moves goods as the largest practical accumulated load, on pallets, instead of carton by carton. Which principle of materials handling is this?",
    "options": [
      "Unit size",
      "Standardization",
      "Gravity",
      "Space utilization"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Unit size: handle the largest accumulated load (pallets).",
      "stepByStep": [
        "Standardization = standard-sized pallets and stacking patterns (uniformity, not load size).",
        "Gravity = gravity-feed bins, roller conveyors.",
        "Space utilization = high racks with narrow-aisle stacking trucks."
      ],
      "commonTrap": "Choosing standardization because pallets are mentioned. The key idea here is the size of the load moved at once.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0) \u2013 Principles of materials handling"
    }
  },
  {
    "id": "Q_INDU211_028",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "TSP \u2013 Nearest Neighbor Heuristic",
    "difficulty": "Exam Master",
    "question": "A truck must leave plant A, visit warehouses B\u2013G once each, and return to A (distance matrix below). Using the Nearest Neighbor method from A, and going to B when E\u2192B and E\u2192G tie, what is the total route distance?",
    "codeSnippet": "      A   B   C   D   E   F   G\nA     -  14  21  20   6  24   9\nB    14   -  10   9   9  10  11\nC    21  10   -   1  15   9  21\nD    20   9   1   -  14   9  20\nE     6   9  15  14   -  19   9\nF    24  10   9   9  19   -  21\nG     9  11  21  20   9  21   -",
    "options": [
      "64",
      "60",
      "69",
      "55"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Nearest Neighbor: from the current node, always go to the closest unvisited node, then return to the start. It gives a feasible route quickly, but not necessarily the optimal one.",
      "stepByStep": [
        "A\u2192E (6) \u2192 B (9, tie with G) \u2192 D (9) \u2192 C (1) \u2192 F (9) \u2192 G (21) \u2192 A (9).",
        "Route A-E-B-D-C-F-G-A: $6 + 9 + 9 + 1 + 9 + 21 + 9 = 64$."
      ],
      "commonTrap": "60 is the optimal tour (A-G-B-F-C-D-E-A), which Nearest Neighbor does not find. 69 comes from taking G at the tie, and 55 forgets the return leg G\u2192A.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0) \u2013 Example 1 (TSP)"
    }
  },
  {
    "id": "Q_INDU211_029",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Clark-Wright Savings",
    "difficulty": "Midterm Level",
    "question": "Using the same distance matrix with depot A, what is the Clark-Wright savings from serving C and D on one route instead of two separate round trips?",
    "codeSnippet": "      A   B   C   D   E   F   G\nA     -  14  21  20   6  24   9\nB    14   -  10   9   9  10  11\nC    21  10   -   1  15   9  21\nD    20   9   1   -  14   9  20\nE     6   9  15  14   -  19   9\nF    24  10   9   9  19   -  21\nG     9  11  21  20   9  21   -",
    "options": [
      "40",
      "41",
      "1",
      "82"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Savings $s_{ij} = d_{Ai} + d_{Aj} - d_{ij}$: the distance saved by linking $i$ and $j$ instead of returning to the depot between them.",
      "stepByStep": [
        "$s_{CD} = d_{AC} + d_{AD} - d_{CD} = 21 + 20 - 1 = 40$.",
        "This is the highest saving in the example, so C\u2013D is the first pair joined into a route."
      ],
      "commonTrap": "Forgetting to subtract $d_{CD}$ (giving 41), or doubling the depot legs (82).",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0) \u2013 Clark-Wright procedure"
    }
  },
  {
    "id": "Q_INDU211_030",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "VRP \u2013 Capacity Feasibility",
    "difficulty": "Exam Master",
    "question": "VRP example: truck capacity is 25,000 units. Demands: B 5,000, C 7,000, D 10,000, E 4,000, F 6,000, G 10,000. Clark-Wright has built the route Depot\u2013F\u2013C\u2013D\u2013Depot. The next saving on the ranked list is B\u2013F (28). What happens to it?",
    "options": [
      "It is rejected: adding B raises the route load to 28,000 units, which exceeds the 25,000 truck capacity",
      "It is accepted, because it has the next-highest saving",
      "It is rejected, because B must always be served on its own truck",
      "It is accepted, and D is removed to make room"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Clark-Wright works down the ranked savings list. Each link is added only if the truck capacity is respected and the route stays feasible (joining at a route end).",
      "stepByStep": [
        "Current load F + C + D $= 6{,}000 + 7{,}000 + 10{,}000 = 23{,}000$.",
        "Adding B: $23{,}000 + 5{,}000 = 28{,}000 > 25{,}000$ \u2192 reject and move to the next saving.",
        "Final routes: Depot\u2013F\u2013C\u2013D\u2013Depot and Depot\u2013E\u2013B\u2013G\u2013Depot (19,000). Total distance $= 24+9+1+20+6+9+11+9 = 89$."
      ],
      "commonTrap": "Accepting savings purely by rank. The capacity check is what separates the VRP from the TSP.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0) \u2013 Example 2 (VRP)"
    }
  },
  {
    "id": "Q_INDU211_031",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Science vs Engineering",
    "difficulty": "Foundation",
    "question": "According to Chapter 1, what best distinguishes engineering from science?",
    "options": [
      "Engineering applies established scientific knowledge to solve real-world problems; science seeks basic knowledge validated by controlled experiments",
      "Science builds physical systems; engineering only develops theories",
      "Engineering relies only on experiments, never on mathematics",
      "There is no difference; the two terms are interchangeable"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Science: the quest for basic knowledge (conjectures \u2192 theories verified by physical experiments). Engineering: applying that knowledge to materials, power, structures and systems to make life better.",
      "stepByStep": [
        "The two work hand in hand: science receives feedback from engineering about where knowledge is needed.",
        "Advances in mathematics are fundamental to all engineering developments."
      ],
      "commonTrap": "Reversing the roles. The Great Wall is the lecture's engineering example; the inclined plane and the wheel are its science examples.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_032",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Origin of \"Engineer\"",
    "difficulty": "Foundation",
    "question": "The words \"engineer\" and \"ingenious\" both come from which Latin word?",
    "options": [
      "Ingenium (talent, natural capacity, cleverness)",
      "Ingenuus (freeborn)",
      "Genus (kind, type)",
      "Machina (device)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Ingenium means a talent or natural capacity: clever, innovative, creative, good for invention.",
      "stepByStep": [
        "\"Engineer\" \u2192 one with ingenium; \"ingenious\" \u2192 having ingenium."
      ],
      "commonTrap": "Assuming \"engineer\" comes from \"engine\". Both words share the older root ingenium.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_033",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Components of a Production System",
    "difficulty": "Midterm Level",
    "question": "In the Chapter 2 production-system model (Inputs \u2192 Conversion process \u2192 Outputs), what makes it a closed-loop system?",
    "options": [
      "Market feedback and performance monitoring that trigger corrective action on the inputs/process",
      "Using only primary resources as inputs",
      "Producing a physical product instead of a service",
      "Running the conversion process at constant speed"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Inputs (primary resources) enter a conversion process that produces products/services. Performance monitoring and market feedback lead to corrective action.",
      "stepByStep": [
        "The feedback path is what makes the system aware of, and influenced by, its own performance, i.e. closed loop."
      ],
      "commonTrap": "Thinking the type of output (product vs service) decides open vs closed loop. Only the feedback path does.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_034",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "IE vs Other Disciplines",
    "difficulty": "Foundation",
    "question": "In the lecture's comparison of engineering disciplines, which core scientific knowledge is associated with Industrial Engineering?",
    "options": [
      "Applied mathematics / operations research",
      "Physics \u2013 dynamics",
      "Physics \u2013 statics",
      "Physics \u2013 electromagnetics"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IE deals with products and processes as systems of connected components operated and managed by people (factories, hospitals, banks). Its core tool is applied math / OR.",
      "stepByStep": [
        "Mechanical \u2192 dynamics (products that move).",
        "Civil \u2192 statics (products that do not move).",
        "Electrical \u2192 electromagnetics.",
        "Industrial \u2192 applied math / operations research, used with and for people."
      ],
      "commonTrap": "Picking dynamics because IE works in factories. IE's distinguishing feature is systems that contain people.",
      "reference": "INDU 211 Ch. 1 & 2 (Lecture 1.0)"
    }
  },
  {
    "id": "Q_INDU211_035",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Nature of Material Handling",
    "difficulty": "Foundation",
    "question": "How does Chapter 5 classify material handling (using equipment to move materials internally)?",
    "options": [
      "Non-productive (non-value-added) activity that should be minimized",
      "The main value-adding step of manufacturing",
      "A purely external logistics activity between companies",
      "A fixed cost that is independent of the layout"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Material handling moves material between receiving, storage, work centers and shipping, but does not transform the product. It is non-value-added.",
      "stepByStep": [
        "That is why layout and material handling are designed together: less handling means lower cost, since handling can be 30\u201395% of production cost."
      ],
      "commonTrap": "Confusing necessary with value-adding. Handling is needed, but the customer does not pay for movement.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0)"
    }
  },
  {
    "id": "Q_INDU211_036",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Principles of Materials Handling",
    "difficulty": "Foundation",
    "question": "A warehouse installs high racks served by narrow-aisle stacking trucks. Which principle of materials handling does this apply?",
    "options": [
      "Space utilization",
      "Gravity",
      "Unit size",
      "Simplification"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Space utilization: make use of cubic space, e.g. high racks with narrow-aisle stacking trucks in warehouses.",
      "stepByStep": [
        "Gravity \u2192 gravity-feed bins, roller conveyors.",
        "Unit size \u2192 largest accumulated load (pallets).",
        "Simplification \u2192 motion economy."
      ],
      "commonTrap": "Picking gravity because the goods are stacked vertically. Gravity means using gravity to move material.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0) \u2013 Principles of materials handling"
    }
  },
  {
    "id": "Q_INDU211_037",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Multiple TSP vs Transportation Routing",
    "difficulty": "Midterm Level",
    "question": "What distinguishes a transportation routing problem (VRP) from a multiple travelling salesman problem?",
    "options": [
      "In the VRP one truck cannot carry the entire load, so vehicle capacity and demand satisfaction must be enforced",
      "The VRP always uses exactly one truck",
      "The multiple TSP has capacity constraints but the VRP does not",
      "The VRP ignores distances and only balances loads"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Multiple TSP: more than one truck, but one truck could handle the entire load. Transportation routing (VRP): one truck cannot handle the entire load, so capacity constraints and demand satisfaction apply.",
      "stepByStep": [
        "Clark-Wright is the heuristic the lecture uses for the capacity-constrained case."
      ],
      "commonTrap": "Thinking \"more than one truck\" is enough to make it a VRP. The key is that capacity binds.",
      "reference": "INDU 211 Ch. 5 \u2013 Materials Handling, Distribution & Routing (Lecture 5.0) \u2013 Vehicle routing problem"
    }
  },
  {
    "id": "Q_MIAE215_001",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Compiler vs Interpreter",
    "difficulty": "Foundation",
    "question": "According to the introduction slides, how does a compiler differ from an interpreter?",
    "options": [
      "A compiler translates the whole C/C++ program into machine language at once; an interpreter (e.g. Python) translates one instruction at a time, which is slower but flexible",
      "A compiler runs the program line by line; an interpreter translates it all at once",
      "Compilers are only used for Python; interpreters are only used for C++",
      "There is no difference; both terms describe the linker"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Programs are written in a language humans can read, then translated to machine language (1s and 0s) that the computer can execute directly.",
      "stepByStep": [
        "Compiler: C, C++, Fortran \u2192 machine language, all at once.",
        "Interpreter: Python, MATLAB \u2192 one instruction at a time (slow but flexible)."
      ],
      "commonTrap": "Reversing the two. C++ is a compiled language, which is part of why it is fast.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_002",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Phases of Program Development",
    "difficulty": "Foundation",
    "question": "What is the correct order of the phases of C++ program development shown in the introduction slides?",
    "options": [
      "Edit \u2192 Preprocess \u2192 Compile \u2192 Link \u2192 Execute \u2192 Test/Debug/Optimize",
      "Compile \u2192 Edit \u2192 Link \u2192 Preprocess \u2192 Execute",
      "Edit \u2192 Link \u2192 Compile \u2192 Execute \u2192 Preprocess",
      "Preprocess \u2192 Edit \u2192 Execute \u2192 Compile \u2192 Link"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Six phases: 1 Edit (text .cpp/.h), 2 Preprocess, 3 Compile, 4 Link, 5 Execute, 6 Test, Debug, Optimize.",
      "stepByStep": [
        "Preprocess + Compile + Link together form the \"Build\".",
        "The program is then loaded into memory (RAM) and executed by the processor."
      ],
      "commonTrap": "Putting Link before Compile. The linker combines the compiled object files (.obj) with libraries (.lib).",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_003",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Build Process Files",
    "difficulty": "Midterm Level",
    "question": "In the build process, which file does the linker produce from the .obj and .lib files?",
    "options": [
      "The executable (*.exe)",
      "The source file (*.cpp)",
      "The header file (*.h)",
      "The object file (*.obj)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Editor \u2192 .cpp/.h source files; compiler \u2192 .obj object files; linker combines .obj + .lib \u2192 .exe executable.",
      "stepByStep": [
        "The .exe is then loaded from disk into RAM and run by the processor."
      ],
      "commonTrap": "Thinking the compiler makes the .exe directly. It makes .obj files; linking produces the executable.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_004",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "What \"Build\" Means",
    "difficulty": "Foundation",
    "question": "On the slide, which phases does the \"Build\" bracket cover?",
    "options": [
      "Preprocess, Compile and Link",
      "Edit and Compile only",
      "Execute and Debug",
      "Edit, Execute and Optimize"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Building turns source text into an executable: preprocessing (#include etc.), compiling to machine code, and linking.",
      "stepByStep": [
        "Edit comes before the build; Execute and Test/Debug come after it."
      ],
      "commonTrap": "Including Edit. Writing the code is not part of the build.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_005",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Operating System",
    "difficulty": "Foundation",
    "question": "According to the Basics of Computing slide, what is an operating system (OS)?",
    "options": [
      "Software that manages all other programs and provides services (disk, graphics, etc.) for them",
      "The CPU and memory hardware of the computer",
      "A program that translates C++ into machine language",
      "Any sequence of instructions written by a user"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Computer = CPU + memory (RAM, disk) + I/O. Program = a sequence of instructions (software). OS = software that manages the other programs (Windows, OS X, Linux, Unix).",
      "stepByStep": [
        "Option C describes a compiler; option D describes a computer program."
      ],
      "commonTrap": "Confusing the OS with the compiler. The OS runs and manages programs; the compiler translates them.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_006",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Components of a Computer",
    "difficulty": "Foundation",
    "question": "The slides define a computer as a digital electronic device composed of:",
    "options": [
      "CPU (processors), memory (RAM, disk, etc.) and Input/Output (IO)",
      "Compiler, linker and editor",
      "Keyboard and monitor only",
      "Operating system and applications only"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Hardware view: processing (CPU), storage (memory) and communication with the outside world (I/O).",
      "stepByStep": [
        "Compiler, linker and editor are software tools, not components of the computer itself."
      ],
      "commonTrap": "Listing software (OS, compiler) as the computer's components.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_007",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Why C++",
    "difficulty": "Foundation",
    "question": "Why does the course use C++, according to the introduction slides?",
    "options": [
      "It is the fastest structured general-purpose language and suits applications needing speed or direct hardware access (mechatronics, IoT, simulation)",
      "It is the easiest language to learn",
      "It can only be used for video games",
      "It does not need to be compiled"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C++ is fast and gives direct hardware access: robotics, instrumentation, IoT, simulation, VR, operating systems. \"Programming is the language of automation.\"",
      "stepByStep": [
        "The slide notes other languages are easier; once you learn C++, others (Java, JavaScript) are easy because of similar syntax."
      ],
      "commonTrap": "Assuming C++ was chosen for being easy. The slide says the opposite.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_008",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Pausing a Console Program",
    "difficulty": "Foundation",
    "question": "According to the course outline, which function is used to pause a console program so its output window can be read?",
    "options": [
      "getchar()",
      "sizeof()",
      "abs()",
      "main()"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "getchar() waits for a key press, which keeps the console window open at the end of the program.",
      "stepByStep": [
        "This is covered in \"Writing, compiling, and debugging programs\" (the build process module)."
      ],
      "commonTrap": "Confusing it with sizeof(), which returns a size in bytes and does not pause anything.",
      "reference": "MIAE 215 \u2014 Introduction slides (Basics of Computing, Phases of C++ Program Development)"
    }
  },
  {
    "id": "Q_MIAE215_009",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "int Overflow",
    "difficulty": "Midterm Level",
    "question": "For a 4-byte int, what is stored in x after x = 2147483647 + 1; ?",
    "options": [
      "-2147483648 (it wraps around)",
      "2147483648",
      "An exception stops the program",
      "Inf"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "int range (4 bytes): \u22122147483648 to 2147483647. Out-of-range integer results wrap around (overflow).",
      "stepByStep": [
        "2147483647 is the maximum; adding 1 wraps to the minimum \u22122147483648."
      ],
      "commonTrap": "Expecting Inf. Only float/double overflow gives \u00b1Inf; ints wrap around.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_010",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "float Underflow & Overflow",
    "difficulty": "Midterm Level",
    "question": "The float range is about 1.2e-38 to 3.4e+38. What happens when a float calculation gives a positive value smaller than 1.2e-38, and what happens when it exceeds 3.4e+38?",
    "options": [
      "Underflow gives 0.0; overflow gives +Inf",
      "Both wrap around like an int",
      "Both stop the program with an exception",
      "Underflow gives -Inf; overflow gives 0.0"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Typical float/double out-of-range errors on the slides: overflow \u2192 \u00b1Inf, underflow \u2192 0.0.",
      "stepByStep": [
        "float: 4 bytes, about 8 digits of precision, range 1.2e-38 to 3.4e+38.",
        "double: 8 bytes, about 16 digits, range 2.3e-308 to 1.7e+308."
      ],
      "commonTrap": "Applying the int rule (wrap-around) to float/double.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_011",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Uninitialized Variables",
    "difficulty": "Foundation",
    "question": "What is printed?",
    "codeSnippet": "int y, z;\nz = y + 1;\ncout << z;",
    "options": [
      "An unpredictable \"garbage\" value",
      "1",
      "0",
      "A compiler error always stops the build"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A declared but uninitialized variable holds whatever was already in that memory location.",
      "stepByStep": [
        "y was never set, so z = y + 1 is also garbage.",
        "Rule from the slides: always initialize a variable to a valid value within its range before using it."
      ],
      "commonTrap": "Assuming C++ sets new variables to 0 automatically.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_012",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Divide by Zero",
    "difficulty": "Midterm Level",
    "question": "According to the slides, what happens in each case?",
    "codeSnippet": "// case 1\nint y = 0, z;\nz = 1/y;\n\n// case 2\nfloat fy = 0.0, fz;\nfz = 1/fy;",
    "options": [
      "The int version causes an exception; the float version gives Inf",
      "Both give Inf",
      "Both give 0",
      "The int version gives Inf; the float version causes an exception"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Integer divide-by-zero is an exception (error). Floating-point divide-by-zero produces Inf.",
      "stepByStep": [
        "int: y = 0; z = 1/y \u2192 exception.",
        "float/double: y = 0.0; z = 1/y \u2192 Inf."
      ],
      "commonTrap": "Thinking int and float handle division by zero the same way.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_013",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Round-off Error",
    "difficulty": "Midterm Level",
    "question": "Why does z print as 1.0000000?",
    "codeSnippet": "float y, z;\ny = 1.0e-10;\nz = 1.0 + y;\ncout << z;",
    "options": [
      "float keeps only about 8 significant digits, so the tiny 1.0e-10 is lost when added to 1.0 (round-off error)",
      "Adding a small number to 1.0 is illegal in C++",
      "y underflows to Inf",
      "cout always rounds to 7 decimal places"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "float: 4 bytes, about 8 digits of precision. double: 8 bytes, about 16 digits.",
      "stepByStep": [
        "1.0 + 0.0000000001 needs 11 significant digits, but float has about 8, so the result rounds back to 1.0.",
        "With double, the same loss happens for y = 1.0e-18."
      ],
      "commonTrap": "Calling this underflow. y itself is fine; the precision is lost in the addition.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_014",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "char Initialization",
    "difficulty": "Foundation",
    "question": "Which char declaration is correct?",
    "options": [
      "char c1 = 'a';",
      "char c1 = \"a\";",
      "char c2 = 'abc';",
      "char c3 = \"abc\";"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A char holds a single character in single quotes. Double quotes create text strings, not a char.",
      "stepByStep": [
        "The slides list \"a\", 'abc' and \"abc\" as incorrect char initializations."
      ],
      "commonTrap": "Using double quotes for a single character.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_015",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Logical Values with int",
    "difficulty": "Foundation",
    "question": "Does the if statement print?",
    "codeSnippet": "int logical1 = -7;\nif( logical1 ) cout << \"\\nlogical1 is true\";",
    "options": [
      "Yes. In C++ any non-zero int is considered true",
      "No. Only 1 is considered true",
      "No. Negative numbers are false",
      "It does not compile, because if() needs a bool"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "ints can represent logical variables: 0 is false and any non-zero value (1, \u22127, 11, \u2026) is true.",
      "stepByStep": [
        "logical1 = \u22127 is non-zero, so it is true and the message prints."
      ],
      "commonTrap": "Thinking only 1 counts as true.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_016",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Variable Naming Rules",
    "difficulty": "Foundation",
    "question": "Which of the following is NOT a valid C++ variable name?",
    "options": [
      "1st_value",
      "_1myint_1",
      "My_integer_1",
      "Apple"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Variable names are case-sensitive and may include underscores, but cannot start with a number.",
      "stepByStep": [
        "The slide lists My_integer_1, _1myint_1, a, A and Apple as valid."
      ],
      "commonTrap": "Thinking a leading underscore is illegal. It is allowed; a leading digit is not.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_017",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Sizeof Operator",
    "difficulty": "Midterm Level",
    "question": "What does sizeof(double) typically return on modern 64-bit systems in C++?",
    "options": [
      "8 bytes ($64$ bits)",
      "4 bytes ($32$ bits)",
      "16 bytes ($128$ bits)",
      "2 bytes ($16$ bits)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "sizeof() returns the size of a variable or type in bytes. On the slides: double = 8 bytes (about 16 digits), float = 4 bytes (about 8 digits).",
      "stepByStep": [
        "sizeof(double) \u2192 8."
      ],
      "commonTrap": "Confusing double (8 bytes) with float (4 bytes).",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_018",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Type Casting",
    "difficulty": "Midterm Level",
    "question": "With int a = 7, b = 2; which statement stores 3.5 in res?",
    "options": [
      "double res = (double)a / b;",
      "double res = (double)(a / b);",
      "double res = a / b;",
      "double res = (double)(a % b);"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A cast expression like (double)a converts the value for that expression only; a itself stays an int.",
      "stepByStep": [
        "(double)a / b \u2192 7.0 / 2 \u2192 3.5 (floating-point division).",
        "(double)(a / b) casts after the integer division: 7/2 = 3 \u2192 3.0."
      ],
      "commonTrap": "Casting the result of the division. By then the fraction is already lost.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_019",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Implicit Conversion",
    "difficulty": "Midterm Level",
    "question": "After this code, what is stored in i1?",
    "codeSnippet": "float f2 = 3.6;\nint i1;\ni1 = f2;",
    "options": [
      "3",
      "4",
      "3.6",
      "A compiler error"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "For similar types C++ performs an automatic (\"implicit\") conversion, possibly with a compiler warning.",
      "stepByStep": [
        "float \u2192 int: the fractional part is dropped (rounded down), so 3.6 \u2192 3.",
        "int \u2192 double: zeros are added, and double \u2192 float truncates extra digits."
      ],
      "commonTrap": "Expecting normal rounding to 4.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_020",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "unsigned Modifier",
    "difficulty": "Foundation",
    "question": "What is the range of unsigned char w = 237; according to the Variable Types II slides?",
    "options": [
      "0 to 255",
      "\u2212128 to 127",
      "0 to 127",
      "\u2212255 to 255"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "unsigned restricts a type to positive or zero values and typically doubles the positive range; the size in bytes is unchanged.",
      "stepByStep": [
        "char: 1 byte, \u2212128 to 127.",
        "unsigned char: 1 byte, 0 to 255, so 237 fits."
      ],
      "commonTrap": "Thinking unsigned adds bytes. It only shifts the range to non-negative values.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_021",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "C++ Const Qualifier",
    "difficulty": "Foundation",
    "question": "What is the compiler behavior when declaring const double PI = 3.14159; followed by PI = 3.0;?",
    "options": [
      "Compilation error: assignment of read-only variable",
      "The value changes to $3.0$ with a compiler warning",
      "The program compiles but crashes at runtime",
      "A new variable named PI is shadowed"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "const fixes a variable as a constant: it cannot be changed from its declared initialization value.",
      "stepByStep": [
        "const double PI = 3.14159; then PI = 1.7; \"can't be done -- generates a compiler error\"."
      ],
      "commonTrap": "Assuming const only acts as a documentation comment.",
      "reference": "MIAE 215 \u2014 Variable Types I & II slides"
    }
  },
  {
    "id": "Q_MIAE215_022",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "C++ Integer Division",
    "difficulty": "Foundation",
    "question": "What is the output of the C++ expression: int result = 7 / 2;?",
    "options": [
      "3",
      "3.5",
      "4",
      "Compilation error"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "When both operands are ints, / performs integer division and the fractional part is dropped (e.g. z = 1/3 \u2192 0 on the Variable Types slide).",
      "stepByStep": [
        "7 / 2 \u2192 3 (not 3.5)."
      ],
      "commonTrap": "Assuming C++ automatically converts the result to float 3.5.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_023",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Mixed-Type Expressions",
    "difficulty": "Midterm Level",
    "question": "What values are stored in d1 and d2?",
    "codeSnippet": "double d1 = 5 / 2;\ndouble d2 = 5 / 2.0;",
    "options": [
      "d1 = 2.0, d2 = 2.5",
      "d1 = 2.5, d2 = 2.5",
      "d1 = 2.0, d2 = 2.0",
      "d1 = 3.0, d2 = 2.5"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The type of an operation is decided by its operands, not by the variable that receives the result.",
      "stepByStep": [
        "5 / 2 is int / int \u2192 2, which is then stored as 2.0.",
        "5 / 2.0 is int / double \u2192 2.5."
      ],
      "commonTrap": "Assuming that assigning into a double makes the division floating-point.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_024",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "C++ Modulo Operator",
    "difficulty": "Foundation",
    "question": "What operands are legally valid for the C++ modulo operator % (e.g. a % b)?",
    "options": [
      "Integer operands only (e.g. int, char, short, long)",
      "Floating point operands (float, double)",
      "Any numeric data type including strings",
      "Pointers and memory addresses"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In C++, the % operator requires integer operands. For floating-point remainder, std::fmod() from <cmath> is required.",
      "stepByStep": [
        "Integer types only."
      ],
      "commonTrap": "Trying to write 5.5 % 2.1 in C++, which causes a compiler error.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_025",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "The % Operator",
    "difficulty": "Foundation",
    "question": "What is the value of r?",
    "codeSnippet": "int r = 17 % 5;",
    "options": [
      "2",
      "3",
      "3.4",
      "0"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "% (modulus) returns the remainder of integer division.",
      "stepByStep": [
        "17 = 3 \u00d7 5 + 2, so 17 % 5 = 2."
      ],
      "commonTrap": "Giving the quotient (3) instead of the remainder.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_026",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Pre-increment vs Post-increment",
    "difficulty": "Midterm Level",
    "question": "What are the values of a and b after: int a = 5; int b = a++;?",
    "options": [
      "a = 6, b = 5",
      "a = 6, b = 6",
      "a = 5, b = 5",
      "a = 5, b = 6"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Post-increment a++ assigns the current value of a to b, then increments a.",
      "stepByStep": [
        "b receives $5$; a becomes $6$."
      ],
      "commonTrap": "Confusing post-increment a++ with pre-increment ++a which increments first.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_027",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Generalized Increment Operators",
    "difficulty": "Midterm Level",
    "question": "What is the final value of x?",
    "codeSnippet": "int x = 10;\nx += 3;\nx *= 2;",
    "options": [
      "26",
      "23",
      "20",
      "16"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "x += a means x = x + a; x *= a means x = x * a. Statements run in sequence.",
      "stepByStep": [
        "x = 10.",
        "x += 3 \u2192 13.",
        "x *= 2 \u2192 26."
      ],
      "commonTrap": "Doing the operations out of order (10 \u00d7 2 + 3 = 23).",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_028",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Operator Precedence",
    "difficulty": "Midterm Level",
    "question": "What is the value of r?",
    "codeSnippet": "int r = 10 - 4 / 2 * 3;",
    "options": [
      "4",
      "9",
      "1",
      "12"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "* , / and % have higher precedence than + and \u2212; operators of equal precedence are evaluated left to right.",
      "stepByStep": [
        "4 / 2 = 2.",
        "2 * 3 = 6.",
        "10 \u2212 6 = 4."
      ],
      "commonTrap": "Evaluating strictly left to right: (10 \u2212 4) / 2 * 3 = 9.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_029",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Assignment vs Equality",
    "difficulty": "Foundation",
    "question": "What does the statement x = x + 1; do in C++?",
    "options": [
      "It reads the current value of x, adds 1, and stores the result back in x",
      "It tests whether x equals x + 1 (always false)",
      "It is a syntax error because x cannot appear on both sides",
      "It sets x to 1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "= is the assignment operator (sequential logic and memory): evaluate the right side with current values, then store it in the variable on the left.",
      "stepByStep": [
        "Equality is tested with ==, not =."
      ],
      "commonTrap": "Reading = as the mathematical equals sign.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_030",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Multiple Assignment",
    "difficulty": "Foundation",
    "question": "After this statement, what are a, b and c?",
    "codeSnippet": "int a, b, c;\na = b = c = 7;",
    "options": [
      "a = 7, b = 7, c = 7",
      "a = 7, b and c are unchanged",
      "c = 7, a and b are garbage",
      "It does not compile"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Extended / multiple assignment: = evaluates right to left, and each assignment passes its value on.",
      "stepByStep": [
        "c = 7 \u2192 b = 7 \u2192 a = 7."
      ],
      "commonTrap": "Thinking only the leftmost variable is set.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_031",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Math Library Errors",
    "difficulty": "Midterm Level",
    "question": "Why does this code NOT print 0.5?",
    "codeSnippet": "#include <cmath>\ndouble y = sin(30.0);\ncout << y;",
    "options": [
      "sin() expects its argument in radians, not degrees",
      "sin() only works with int arguments",
      "The <cmath> library returns degrees",
      "sin() cannot be stored in a double"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Math library functions such as sin, cos and tan take angles in radians; this is one of the \"typical errors with math functions\".",
      "stepByStep": [
        "sin(30 rad) \u2248 \u22120.988.",
        "Correct: sin(30 * 3.14159 / 180) \u2248 0.5."
      ],
      "commonTrap": "Assuming degrees because the calculator is in DEG mode.",
      "reference": "MIAE 215 \u2014 Expressions & Operators (lecture outline / Mini-course Lesson 4)"
    }
  },
  {
    "id": "Q_MIAE215_032",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Float Equality in Test Conditions",
    "difficulty": "Midterm Level",
    "question": "Why do the control-statement slides warn against if( x == 0.0 ) for float/double variables, and what should be used instead?",
    "options": [
      "Round-off error makes exact equality unlikely; use a tolerance: if( abs(x) < eps ) with a small eps such as 1.0e-9",
      "C++ does not allow == with doubles",
      "It causes an infinite loop; use a for loop instead",
      "0.0 is not a valid double constant; use 0 instead"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Equality conditions should normally not be used with float/double; round-off makes execution unlikely even when x is \"zero for engineering purposes\".",
      "stepByStep": [
        "double eps = 1.0e-9;",
        "if( abs(x) < eps ) \u2192 approximately zero.",
        "if( abs(x - 5.5) < eps ) \u2192 approximately 5.5.",
        "The slides say <= and >= should also normally be avoided for floats."
      ],
      "commonTrap": "Thinking == is illegal for doubles. It compiles, but is unreliable.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_033",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Logical Operators",
    "difficulty": "Foundation",
    "question": "With int i = 5, k = 3; which condition is TRUE?",
    "options": [
      "(i > k) && (k <= 3)",
      "!(i > k)",
      "(i < k) || (k > 3)",
      "(i == k) && (k == 3)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "AND (&&): both must be true. OR (||): at least one true. NOT (!): true when the condition is false.",
      "stepByStep": [
        "(5 > 3) && (3 <= 3) \u2192 true && true \u2192 true. \u2714",
        "!(5 > 3) \u2192 false.",
        "(5 < 3) || (3 > 3) \u2192 false || false \u2192 false."
      ],
      "commonTrap": "Reading k <= 3 as false when k equals 3.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_034",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "if-else Ladders",
    "difficulty": "Midterm Level",
    "question": "With i = 2, what is printed by this if-else ladder?",
    "codeSnippet": "if ( i == 1 ) {\n    cout << \"\\ni == 1\";\n} else if ( i == 2 ) {\n    cout << \"\\ni == 2\";\n} else if ( i == 3 ) {\n    cout << \"\\ni == 3\";\n} else {\n    cout << \"\\nnone of the above\";\n}",
    "options": [
      "i == 2 only",
      "i == 2 and none of the above",
      "i == 1, i == 2 and i == 3",
      "Nothing"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An if-else ladder is a fork in the road with more than two paths: conditions are checked top-down until one is true, and only that block runs.",
      "stepByStep": [
        "i == 1 \u2192 false.",
        "i == 2 \u2192 true \u2192 print, then skip the rest of the ladder."
      ],
      "commonTrap": "Thinking the final else also runs. It runs only when no condition is true.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_035",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Default else in a Ladder",
    "difficulty": "Foundation",
    "question": "The slides say the last else in an if-else ladder can be removed but is not recommended. Why?",
    "options": [
      "Without it the ladder is no longer a true fork, and the default case is often used to check for errors",
      "The program will not compile without it",
      "It makes the ladder run faster",
      "It forces every condition to be checked twice"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The final else is the default condition that runs when none of the tests is true.",
      "stepByStep": [
        "It is a natural place to catch unexpected values, i.e. error checking."
      ],
      "commonTrap": "Thinking the final else is required by C++ syntax.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_036",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Codeblocks & Braces",
    "difficulty": "Midterm Level",
    "question": "With i = -1, what is printed?",
    "codeSnippet": "if ( i > 0 ) cout << \"a\";\n    cout << \"b\";",
    "options": [
      "b",
      "ab",
      "Nothing",
      "a"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "{} is not required for a one-line codeblock, but then only the single next statement belongs to the if.",
      "stepByStep": [
        "i > 0 is false, so cout << \"a\" is skipped.",
        "cout << \"b\" is outside the if and always runs."
      ],
      "commonTrap": "Being misled by the indentation. Without braces only one statement is controlled by the if.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_037",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Flowgorithm Symbols",
    "difficulty": "Foundation",
    "question": "In Flowgorithm and standard flowcharting, which geometric shape represents a conditional decision branch (e.g. if (x > 0))?",
    "options": [
      "Diamond",
      "Rectangle",
      "Parallelogram",
      "Oval / Rounded Capsule"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The slides show if-else as a Flowgorithm flowchart: the diamond holds the test condition, with True/False branches to codeblock1/codeblock2.",
      "stepByStep": [
        "Diamond = Decision logic."
      ],
      "commonTrap": "Selecting rectangle (which is an assignment/process).",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_038",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "For Loop Execution Count",
    "difficulty": "Foundation",
    "question": "How many times does the loop body execute: for (int i = 0; i < 10; i += 2)?",
    "options": [
      "$5$ times",
      "$10$ times",
      "$4$ times",
      "$6$ times"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "for( initialize; test; update ): the codeblock repeats while the test is true, and the generalized increment i += 2 steps by 2.",
      "stepByStep": [
        "$5$ iterations total."
      ],
      "commonTrap": "Dividing $10/2$ and adding $1$, forgetting i < 10 is strict inequality.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_039",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "for Loop Exit Value",
    "difficulty": "Midterm Level",
    "question": "What is printed after the loop finishes?",
    "codeSnippet": "int i;\nfor( i = 0; i < 5; i++ ) cout << \"\\ni = \" << i;\ncout << \"\\nexit i = \" << i;",
    "options": [
      "5",
      "4",
      "0",
      "6"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The exit value of a for-loop index is the first incremented value that no longer satisfies the loop condition.",
      "stepByStep": [
        "The body runs for i = 0, 1, 2, 3, 4.",
        "After i++ makes i = 5, the test i < 5 fails, so the loop ends with i = 5."
      ],
      "commonTrap": "Answering 4, the last value inside the loop.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_040",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Loops with Multiplicative Update",
    "difficulty": "Exam Master",
    "question": "How many times does the loop body execute?",
    "codeSnippet": "double x;\nfor( x = 1.0; x < 1.0e5; x *= 10.0 ) cout << \"\\n\" << x;",
    "options": [
      "5",
      "4",
      "6",
      "Infinitely many"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Any expression can be the update step of a for loop, such as x *= 10.0.",
      "stepByStep": [
        "x = 1, 10, 100, 1000, 10000 \u2192 5 iterations.",
        "x becomes 1.0e5 \u2192 1.0e5 < 1.0e5 is false \u2192 stop."
      ],
      "commonTrap": "Counting 1.0e5 as an iteration. The test is a strict <.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE215_041",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Nested Loops",
    "difficulty": "Exam Master",
    "question": "After these nested loops (from the slides), what is A[2][1], and how many times does the inner body run?",
    "codeSnippet": "double A[3][3];\nfor(i=0;i<3;i++) {       // outer loop (i = row)\n    for(j=0;j<3;j++) {   // inner loop (j = col)\n        A[i][j] = 1.0 + i + j;\n    }\n}",
    "options": [
      "A[2][1] = 4.0; the inner body runs 9 times",
      "A[2][1] = 3.0; the inner body runs 6 times",
      "A[2][1] = 4.0; the inner body runs 3 times",
      "A[2][1] = 2.0; the inner body runs 9 times"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In a nested loop, the inner loop runs completely for each value of the outer index, so the 2D array is set one row at a time.",
      "stepByStep": [
        "A[2][1] = 1.0 + 2 + 1 = 4.0.",
        "Total inner iterations = 3 (rows) \u00d7 3 (columns) = 9."
      ],
      "commonTrap": "Adding the loop counts (3 + 3 = 6) instead of multiplying them.",
      "reference": "MIAE 215 \u2014 Control Statements slides (if, if-else ladders, for loops)"
    }
  },
  {
    "id": "Q_MIAE221_001",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Materials Science vs Materials Engineering",
    "difficulty": "Foundation",
    "question": "According to Lecture 1, what is the difference between materials science and materials engineering?",
    "options": [
      "Science studies the relationships between structure and properties; engineering designs the structure to obtain desired properties",
      "Science designs products; engineering studies atoms",
      "Science deals only with metals; engineering deals only with polymers",
      "They are identical fields with different names"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Materials science: structure \u2194 properties relationships. Materials engineering: use those structure\u2013property correlations to design a material with desired properties.",
      "stepByStep": [
        "The course is organized around the link Processing \u2192 Structure \u2192 Properties."
      ],
      "commonTrap": "Reversing the two definitions.",
      "reference": "MIAE 221 Lecture 1\u20132 \u2014 Introduction & Classes of Materials (Callister Ch. 1)"
    }
  },
  {
    "id": "Q_MIAE221_002",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Definition of a Property",
    "difficulty": "Foundation",
    "question": "How does Lecture 1 define a material property?",
    "options": [
      "The response of a material to an external stimulus (mechanical, thermal, electrical, magnetic, optical), independent of shape and size",
      "The shape and size of a part",
      "The chemical formula of a material",
      "The cost of a material per kilogram"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A property is a response to an external effect, and properties are independent of the material's shape and size.",
      "stepByStep": [
        "Categories: mechanical, thermal, electrical, magnetic, optical."
      ],
      "commonTrap": "Treating geometry (shape and size) as a material property.",
      "reference": "MIAE 221 Lecture 1\u20132 \u2014 Introduction & Classes of Materials (Callister Ch. 1)"
    }
  },
  {
    "id": "Q_MIAE221_003",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Classes of Materials \u2013 Ceramics",
    "difficulty": "Midterm Level",
    "question": "Based on the Lecture 2 comparison table, which class of materials has poor ductility, low electrical and thermal conductivity, high hardness and stiffness, and poor machinability?",
    "options": [
      "Ceramics",
      "Metals",
      "Polymers",
      "None; all classes are similar"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Ceramics: hard, stiff and brittle, with low conductivity and poor machinability. Metals: good ductility, very high conductivity, good machinability. Polymers: low stiffness, low conductivity, variable ductility.",
      "stepByStep": [
        "The combination of poor ductility and high hardness points to ceramics."
      ],
      "commonTrap": "Picking metals because they are also strong. Metals are ductile and conductive.",
      "reference": "MIAE 221 Lecture 1\u20132 \u2014 Introduction & Classes of Materials (Callister Ch. 1)"
    }
  },
  {
    "id": "Q_MIAE221_004",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Classes of Materials \u2013 Metals",
    "difficulty": "Foundation",
    "question": "Which class of materials has very high electrical and thermal conductivity and good ductility?",
    "options": [
      "Metals",
      "Ceramics",
      "Polymers",
      "Secondary-bonded solids"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The metallic \"electron sea\" gives metals high conductivity and ductility (Lecture 3 explains why).",
      "stepByStep": [
        "Ceramics and polymers both have low conductivity."
      ],
      "commonTrap": "Choosing polymers because some are flexible. Flexibility is not conductivity.",
      "reference": "MIAE 221 Lecture 1\u20132 \u2014 Introduction & Classes of Materials (Callister Ch. 1)"
    }
  },
  {
    "id": "Q_MIAE221_005",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Catastrophic Failures",
    "difficulty": "Midterm Level",
    "question": "Which pairing of failure and cause is given in Lecture 1?",
    "options": [
      "Liberty ships (WWII): ductile-to-brittle transition in BCC Fe; Challenger (1986): failure of a polymer O-ring seal",
      "Liberty ships: polymer O-ring failure; Challenger: metal fatigue at rivet holes",
      "Tacoma Narrows Bridge: turbine blade inclusion; DC-10: crosswind stiffening",
      "de Havilland Comet: overstressed walkway rods; Hyatt Regency: metal fatigue"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Failures from a lack of materials understanding: Liberty ships (D-B-T in BCC Fe), Challenger (O-ring), Hyatt Regency (overstressed support rods), Alaska MD-80 (jackscrew wear), Tacoma Narrows (insufficient crosswind stiffening), Comet (metal fatigue near window rivet holes), DC-10 (inclusion/cracking in a turbine blade).",
      "stepByStep": [
        "Match each failure to its material cause from the slides."
      ],
      "commonTrap": "Mixing up the Comet (fatigue) and the Challenger (polymer seal).",
      "reference": "MIAE 221 Lecture 1\u20132 \u2014 Introduction & Classes of Materials (Callister Ch. 1)"
    }
  },
  {
    "id": "Q_MIAE221_006",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Structure \u2192 Properties Example",
    "difficulty": "Exam Master",
    "question": "Lecture 1 turbine-blade example: removing grain boundaries (equiaxed \u2192 columnar \u2192 single crystal) let designers raise operating temperature by about 200 \u00b0C. Why?",
    "options": [
      "Grain boundaries creep at high temperature, so eliminating them improves high-temperature performance",
      "Single crystals are cheaper to cast",
      "Grain boundaries increase the melting point",
      "Columnar grains conduct heat away from the blade"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Understanding structure lets engineers design better parts: here, controlling grain structure improves creep resistance and engine efficiency.",
      "stepByStep": [
        "Fewer grain boundaries \u2192 less creep at high temperature \u2192 higher allowed operating temperature."
      ],
      "commonTrap": "Thinking grain boundaries raise the melting point. The issue is creep, not melting.",
      "reference": "MIAE 221 Lecture 1\u20132 \u2014 Introduction & Classes of Materials (Callister Ch. 1)"
    }
  },
  {
    "id": "Q_MIAE221_007",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Isotopes & Atomic Mass",
    "difficulty": "Foundation",
    "question": "Why is the reported atomic mass of carbon 12.011 g/mol rather than exactly 12?",
    "options": [
      "It is the abundance-weighted average of its isotopes (\u00b9\u00b2C and \u00b9\u00b3C), which have the same Z but different N",
      "Electrons add 0.011 g/mol",
      "Carbon has 12.011 protons on average",
      "It is a rounding error in the periodic table"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Isotopes: same atomic number Z (protons), different number of neutrons N. Atomic mass A \u2248 Z + N.",
      "stepByStep": [
        "0.989(12.000) + 0.011(13.003) \u2248 12.011 g/mol."
      ],
      "commonTrap": "Thinking the number of protons can vary. Z defines the element.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_008",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Mole & Avogadro's Number",
    "difficulty": "Midterm Level",
    "question": "Lecture 2 review problem: how many atoms are in 6 g of carbon (A = 12.011 g/mol)?",
    "options": [
      "\u2248 3.01 \u00d7 10\u00b2\u00b3 atoms",
      "\u2248 6.02 \u00d7 10\u00b2\u00b3 atoms",
      "\u2248 7.23 \u00d7 10\u00b2\u2074 atoms",
      "\u2248 0.5 atoms"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Number of atoms = (mass / atomic weight) \u00d7 N_A, with N_A = 6.022 \u00d7 10\u00b2\u00b3 atoms/mol. Use dimensional analysis.",
      "stepByStep": [
        "6 g \u00f7 12.011 g/mol = 0.4995 mol.",
        "0.4995 \u00d7 6.022 \u00d7 10\u00b2\u00b3 \u2248 3.01 \u00d7 10\u00b2\u00b3 atoms."
      ],
      "commonTrap": "Multiplying by the atomic weight instead of dividing (7.23 \u00d7 10\u00b2\u2074).",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_009",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Electron Configurations",
    "difficulty": "Midterm Level",
    "question": "Practice Set #1: the configuration 1s\u00b2 2s\u00b2 2p\u2076 3s\u00b2 3p\u2076 4s\u00b9 belongs to which group?",
    "options": [
      "Alkali metal (Group IA)",
      "Halogen (Group VIIA)",
      "Inert gas (Group 0)",
      "Alkaline earth metal (Group IIA)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Valence electrons decide the group: one s electron beyond a filled shell \u2192 alkali metal (gives up 1 e\u207b, electropositive).",
      "stepByStep": [
        "4s\u00b9 \u2192 one valence electron \u2192 Group IA (this is potassium).",
        "1s\u00b22s\u00b22p\u2075 would be a halogen (needs 1 e\u207b); a filled 3p\u2076 with nothing after it would be an inert gas."
      ],
      "commonTrap": "Counting total electrons instead of looking at the outermost shell.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_010",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Bonding Energy & Equilibrium Spacing",
    "difficulty": "Midterm Level",
    "question": "On the interatomic energy\u2013distance curve, what do the equilibrium separation r\u2080 and the bonding energy E\u2080 correspond to?",
    "options": [
      "r\u2080 is where the net force is zero (the energy minimum); E\u2080 is the depth of that minimum, the energy needed to separate the atoms completely",
      "r\u2080 is where the attractive force is maximum; E\u2080 is the repulsive energy at r\u2080",
      "r\u2080 is where the energy is zero; E\u2080 is the slope of the curve",
      "r\u2080 and E\u2080 are both measured at infinite separation"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Net force = attractive + repulsive. E = \u222bF dr, so the minimum of E is where F_net = 0.",
      "stepByStep": [
        "A deep well means strongly bonded; a shallow well means weakly bonded."
      ],
      "commonTrap": "Placing r\u2080 where E = 0 instead of at the minimum.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_011",
    "courseId": "MIAE221",
    "chapter": "bonding",
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
      "coreConcept": "Metallic bonding: valence electrons (1, 2 or 3 per atom) are not bound to any atom but free to drift, forming an \"electron sea\". This gives high electrical and thermal conductivity and ductility.",
      "stepByStep": [
        "Delocalized electron sea = Metallic bond."
      ],
      "commonTrap": "Confusing with ionic bonding which features localized electron transfer between electronegative and electropositive atoms.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_012",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Ionic vs Covalent Bonding",
    "difficulty": "Foundation",
    "question": "Which statement matches Lecture 3?",
    "options": [
      "Ionic bonding requires electron transfer and a large electronegativity difference; covalent bonding shares electrons and is highly directional",
      "Ionic bonding shares electrons; covalent bonding transfers them",
      "Covalent bonds are always weaker than van der Waals bonds",
      "Ionic materials are ductile and electrically conductive"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Ionic (e.g. NaCl, MgO): metal + non-metal, electron transfer, non-directional; hard, brittle, insulating, high Tm. Covalent (e.g. CH\u2084, diamond): shared electrons, comparable electronegativities, directional.",
      "stepByStep": [
        "Typical ionic bonding energies are 600\u20131500 kJ/mol."
      ],
      "commonTrap": "Calling ionic solids conductive. They are insulators in the solid state.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_013",
    "courseId": "MIAE221",
    "chapter": "bonding",
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
      "coreConcept": "Most materials are neither 100% ionic nor 100% covalent: % ionic character = [1 \u2212 exp(\u22120.25(X_A \u2212 X_B)\u00b2)] \u00d7 100%.",
      "stepByStep": [
        "Higher $\\Delta X \\implies$ higher ionicity."
      ],
      "commonTrap": "Assuming covalent character increases with electronegativity difference.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_014",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Percent Ionic Character",
    "difficulty": "Exam Master",
    "question": "Lecture 3 / Practice Set #1: with X_Ti = 1.5 and X_O = 3.5, what is the percent ionic character of the Ti\u2013O bond in TiO\u2082?",
    "options": [
      "\u2248 63.2%",
      "\u2248 36.8%",
      "\u2248 6.1%",
      "100%"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "% IC = [1 \u2212 exp(\u22120.25 \u0394X\u00b2)] \u00d7 100%.",
      "stepByStep": [
        "\u0394X = 3.5 \u2212 1.5 = 2.0 \u2192 0.25 \u00d7 4 = 1.0.",
        "1 \u2212 e\u207b\u00b9 = 1 \u2212 0.368 = 0.632 \u2192 63.2% ionic.",
        "For comparison, ZnTe (1.6 vs 2.1): \u0394X = 0.5 \u2192 6.1% ionic."
      ],
      "commonTrap": "Reporting e\u207b\u00b9 = 36.8% (the covalent fraction) as the ionic character.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_015",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Identifying Bond Types",
    "difficulty": "Midterm Level",
    "question": "Lecture 3 summary: what type of bonding holds solid xenon together?",
    "options": [
      "Secondary (van der Waals) bonding",
      "Metallic bonding",
      "Ionic bonding",
      "Covalent bonding"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Xenon is an inert gas with a full valence shell, so it forms no primary bonds; only weak induced-dipole (van der Waals) forces act between its atoms.",
      "stepByStep": [
        "Brass \u2192 metallic; rubber and nylon \u2192 covalent with some van der Waals; AlP \u2192 predominantly covalent; BaS \u2192 predominantly ionic."
      ],
      "commonTrap": "Choosing covalent because xenon is a non-metal. Inert gases do not share electrons.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_016",
    "courseId": "MIAE221",
    "chapter": "bonding",
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
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_017",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Hydrogen Bonding",
    "difficulty": "Foundation",
    "question": "Which statement about hydrogen bonding is correct, according to Lecture 3?",
    "options": [
      "It is a special, stronger case of secondary bonding, arising from the unshielded proton in H\u2013O, H\u2013F and H\u2013N bonds",
      "It is a primary bond stronger than ionic bonding",
      "It occurs only between metal atoms",
      "It is weaker than all other van der Waals interactions"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Secondary bonds (about 10 kJ/mol) come from dipoles. Polar molecules with H bonded to O, F or N form hydrogen bonds, generally the strongest secondary bond.",
      "stepByStep": [
        "Example: H\u2082O between molecules (Practice Set #1 Q2g) \u2192 hydrogen bonding; within the molecule \u2192 covalent."
      ],
      "commonTrap": "Classifying hydrogen bonding as a primary (chemical) bond.",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_018",
    "courseId": "MIAE221",
    "chapter": "bonding",
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
      "coreConcept": "Properties from bonding (Lecture 3): a larger bond energy E\u2080 gives a larger Tm and a larger elastic modulus E; the thermal expansion coefficient \u03b1 is larger when E\u2080 is smaller.",
      "stepByStep": [
        "Deep well = High $T_m$, High $E$, Low $\\alpha$."
      ],
      "commonTrap": "Thinking thermal expansion increases with deeper wells (it decreases).",
      "reference": "MIAE 221 Lectures 2\u20133 \u2014 Chemistry Review: Atomic Structure & Bonding (Callister Ch. 2) / Practice Set #1"
    }
  },
  {
    "id": "Q_MIAE221_019",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Crystalline vs Amorphous",
    "difficulty": "Foundation",
    "question": "According to Lecture 4, when do non-crystalline (amorphous) structures typically form?",
    "options": [
      "With complex structures or rapid cooling, when atoms have no periodic packing",
      "Only in pure metals cooled slowly",
      "Whenever the material is a metal",
      "Only above the melting temperature"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Crystalline: atoms pack in periodic 3D arrays with long-range order (metals, many ceramics, some polymers). Amorphous: no periodic packing.",
      "stepByStep": [
        "Dense, regular packing has lower energy, but rapid cooling or complex structures prevent atoms from ordering."
      ],
      "commonTrap": "Thinking all solids are crystalline. Glass (non-crystalline SiO\u2082) is the classic counter-example.",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_020",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_021",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "HCP Atoms per Unit Cell",
    "difficulty": "Midterm Level",
    "question": "How many atoms does the HCP unit cell contain?",
    "options": [
      "6",
      "2",
      "4",
      "12"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "HCP: 12 corner atoms (6 per hexagonal basal plane), 2 face-center atoms, and 3 interior atoms midway along the c-axis.",
      "stepByStep": [
        "(1/6)(12) + (1/2)(2) + 3 = 2 + 1 + 3 = 6."
      ],
      "commonTrap": "Confusing atoms per cell (6) with the coordination number (12).",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_022",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_023",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_024",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_025",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_026",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_027",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Stacking Sequence: FCC vs HCP",
    "difficulty": "Midterm Level",
    "question": "Both FCC and HCP have CN = 12 and APF = 0.74. What distinguishes them, according to Lecture 5?",
    "options": [
      "The stacking sequence: HCP is ABAB\u2026, FCC is ABCABC\u2026",
      "FCC has more atoms touching each atom",
      "HCP has a lower APF of 0.68",
      "FCC stacks as AAAA\u2026 with no offset"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Both start with a close-packed A layer and a B layer in the hollows. The third layer decides: directly over A (HCP) or in the empty C hollows (FCC).",
      "stepByStep": [
        "HCP: ABAB\u2026 (repeats every 2 layers).",
        "FCC: ABCABC\u2026 (repeats every 3 layers).",
        "The slide notes this is why FCC and HCP deform so differently."
      ],
      "commonTrap": "Thinking they differ in packing density. They are equally dense.",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_028",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "coreConcept": "Lecture 4: Fe is BCC below 912 \u00b0C and FCC above 912 \u00b0C. The same element can take more than one crystal structure (polymorphism/allotropy).",
      "stepByStep": [
        "BCC $\\to$ FCC $\\to$ BCC with rising temperature."
      ],
      "commonTrap": "Confusing polymorphism with magnetic phase change.",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_029",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Crystal Systems & Bravais Lattices",
    "difficulty": "Foundation",
    "question": "How many crystal systems and Bravais lattices are there, and what defines the cubic system?",
    "options": [
      "7 systems, 14 Bravais lattices; cubic has a = b = c and \u03b1 = \u03b2 = \u03b3 = 90\u00b0",
      "14 systems, 7 lattices; cubic has a \u2260 b \u2260 c",
      "3 systems (SC, BCC, FCC), 3 lattices",
      "7 systems, 7 lattices; cubic has a = b \u2260 c"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Seven crystal systems (cubic, tetragonal, orthorhombic, rhombohedral, hexagonal, monoclinic, triclinic) give 14 unique lattice types (Bravais lattices).",
      "stepByStep": [
        "Cubic contains SC, BCC and FCC as subsets.",
        "Tetragonal: a = b \u2260 c, all angles 90\u00b0."
      ],
      "commonTrap": "Treating SC, BCC and FCC as separate crystal systems. They are lattice types within the cubic system.",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_030",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_031",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Theoretical Density (Copper)",
    "difficulty": "Exam Master",
    "question": "Lecture 5 example: copper is FCC with R = 0.128 nm and A = 63.5 g/mol. What is its theoretical density?",
    "options": [
      "\u2248 8.89 g/cm\u00b3",
      "\u2248 4.45 g/cm\u00b3",
      "\u2248 17.8 g/cm\u00b3",
      "\u2248 2.22 g/cm\u00b3"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "\u03c1 = nA / (V_C \u00b7 N_A), with n = 4 for FCC and a = 2R\u221a2.",
      "stepByStep": [
        "a = 2(0.128)\u221a2 = 0.362 nm = 3.62 \u00d7 10\u207b\u2078 cm \u2192 V_C = a\u00b3 = 4.75 \u00d7 10\u207b\u00b2\u00b3 cm\u00b3.",
        "\u03c1 = (4 \u00d7 63.5) / (4.75 \u00d7 10\u207b\u00b2\u00b3 \u00d7 6.022 \u00d7 10\u00b2\u00b3) = 254 / 28.6 \u2248 8.89 g/cm\u00b3.",
        "The measured value is 8.94 g/cm\u00b3, which is very close."
      ],
      "commonTrap": "Using n = 2 (the BCC value), which halves the answer to about 4.45 g/cm\u00b3.",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_032",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_033",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_034",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Families of Directions",
    "difficulty": "Midterm Level",
    "question": "In a cubic crystal, which directions belong to the family \u27e8123\u27e9?",
    "options": [
      "[123], [213], [312], [132], [231], [321] (all orders, and signs)",
      "Only [123]",
      "[123] and [321] only",
      "Any direction with a 1 in it"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In the cubic system, directions with the same indices regardless of order or sign are equivalent; \u27e8 \u27e9 denotes the family.",
      "stepByStep": [
        "Planes work the same way: (hkl) is one plane, {hkl} is the family.",
        "This equivalence holds only in cubic crystals. In tetragonal, [100] \u2260 [001]."
      ],
      "commonTrap": "Applying cubic equivalence to non-cubic systems.",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  },
  {
    "id": "Q_MIAE221_035",
    "courseId": "MIAE221",
    "chapter": "crystal",
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
      "coreConcept": "Lecture 5: isotropic means properties are independent of direction; anisotropic means properties depend on direction (e.g. [100] vs [001] in a tetragonal crystal).",
      "stepByStep": [
        "Property depends on direction vector $[uvw]$."
      ],
      "commonTrap": "Confusing with isotropic (uniform properties in all directions, typical of fine polycrystals).",
      "reference": "MIAE 221 Lectures 4\u20135 \u2014 Structure of Crystalline Solids (Callister Ch. 3)"
    }
  }
];
