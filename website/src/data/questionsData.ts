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
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 10"
      }
    ]
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
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 9"
      }
    ]
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
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 15"
      }
    ]
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
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 13"
      }
    ]
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
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 7"
      }
    ]
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
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 16"
      }
    ]
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
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 4"
      }
    ]
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
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 5"
      }
    ]
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
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 8"
      }
    ]
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
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 8"
      }
    ]
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
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 11"
      }
    ]
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
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 14"
      }
    ]
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
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 5"
      }
    ]
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
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 6"
      }
    ]
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
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 13"
      }
    ]
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
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 9"
      }
    ]
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
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 12"
      }
    ]
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
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 4"
      }
    ]
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
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 8"
      }
    ]
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
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 10"
      }
    ]
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
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 10"
      }
    ]
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
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 8"
      }
    ]
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
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 10"
      }
    ]
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
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 11"
      }
    ]
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
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 12"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 5"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 6"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 12"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 8"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 9"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 11"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 11"
      }
    ]
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
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_ENGR213_034",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Why Differential Equations",
    "difficulty": "Foundation",
    "question": "According to Lecture 1, what is a differential equation, in one phrase?",
    "options": [
      "A mathematical model of change",
      "A formula that gives constant values",
      "An equation with no unknown functions",
      "A table of experimental data"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The world does not just have values, it changes. DEs describe how quantities change, so once we know the rules governing change we can predict, design and control systems.",
      "stepByStep": [
        "Physical system \u2192 laws governing change \u2192 prediction."
      ],
      "commonTrap": "Thinking a DE gives values directly. It relates an unknown function to its derivatives.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_035",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Where DEs Appear",
    "difficulty": "Foundation",
    "question": "In the Lecture 1 examples, what do cooling, vehicle motion, chemical reactions and population growth have in common?",
    "options": [
      "An unknown quantity is related to one or more of its derivatives",
      "They all use the same equation",
      "They are all second-order equations",
      "None of them depends on time"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Different physical systems give different equations, but each relates an unknown quantity to its rate of change.",
      "stepByStep": [
        "Cooling: dT/dt depends on T \u2212 Tm.",
        "Population: dP/dt depends on P (limited resources)."
      ],
      "commonTrap": "Assuming one universal equation. Each system has its own law of change.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_ENGR213_036",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Dependent vs Independent Variables",
    "difficulty": "Foundation",
    "question": "In the population model $\\dfrac{dP}{dt} = rP\\left(1 - \\dfrac{P}{K}\\right)$, which is the dependent variable and which is the independent variable?",
    "options": [
      "$P$ is dependent; $t$ is independent",
      "$t$ is dependent; $P$ is independent",
      "$r$ and $K$ are the dependent variables",
      "Both $P$ and $t$ are independent"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A DE contains derivatives of one or more dependent variables with respect to one or more independent variables.",
      "stepByStep": [
        "$dP/dt$ is the derivative of $P$ (dependent) with respect to $t$ (independent); $r$ and $K$ are constants."
      ],
      "commonTrap": "Confusing the parameters $r, K$ with variables.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_ENGR213_037",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Ways to Classify a DE",
    "difficulty": "Foundation",
    "question": "Lecture 1 classifies differential equations by which three properties?",
    "options": [
      "Type, order and linearity",
      "Degree, slope and area",
      "Explicit, implicit and trivial",
      "Initial, boundary and final"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Type (ODE vs PDE), order (highest derivative) and linearity.",
      "stepByStep": [
        "Explicit/implicit describes solutions, not the equation."
      ],
      "commonTrap": "Mixing up how equations are classified with how solutions are described.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_ENGR213_038",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Derivative Notation",
    "difficulty": "Foundation",
    "question": "Which notation does Lecture 1 say is sometimes used for derivatives with respect to time $t$?",
    "options": [
      "Newton's dot notation (e.g. $\\dot{x}$, $\\ddot{x}$)",
      "Prime notation only ($y'$)",
      "Subscript notation ($u_{xx}$)",
      "Integral notation ($\\int y\\,dt$)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Leibniz ($dy/dx$) and prime ($y'$) notation are standard; Newton's dot is used for time derivatives; subscripts denote partial derivatives.",
      "stepByStep": [
        "$\\ddot{s} = -32$ means $d^2s/dt^2 = -32$."
      ],
      "commonTrap": "Using subscripts for ordinary derivatives. Subscripts are for partial derivatives.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_039",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Order of an ODE",
    "difficulty": "Foundation",
    "question": "What is the order of $\\dfrac{d^2y}{dx^2} + 5\\left(\\dfrac{dy}{dx}\\right)^3 - 4y = e^x$?",
    "options": [
      "Second order",
      "Third order",
      "First order",
      "Fifth order"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The order is the order of the highest derivative in the equation, not the highest power.",
      "stepByStep": [
        "$d^2y/dx^2$ is the highest derivative, so the order is 2. The cube on $dy/dx$ affects linearity, not order."
      ],
      "commonTrap": "Reading the exponent 3 as the order.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_040",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Normal Form",
    "difficulty": "Midterm Level",
    "question": "Written in normal form $y' = f(x, y)$, the ODE $4xy' + y = x$ becomes:",
    "options": [
      "$y' = \\dfrac{x - y}{4x}$",
      "$y' = 4x(x - y)$",
      "$y' = \\dfrac{x + y}{4x}$",
      "$y' = x - 4xy$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Normal form solves the ODE for the highest derivative: $y^{(n)} = f(x, y, \\dots, y^{(n-1)})$.",
      "stepByStep": [
        "$4xy' = x - y \\implies y' = (x - y)/(4x)$."
      ],
      "commonTrap": "Forgetting to move $y$ to the right side with a sign change.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_041",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Linear ODE Characteristics",
    "difficulty": "Foundation",
    "question": "Which condition is required for an $n$th-order ODE to be linear in $y$?",
    "options": [
      "The coefficients of $y, y', \\dots, y^{(n)}$ depend at most on the independent variable $x$",
      "All coefficients must be constants",
      "The right-hand side $g(x)$ must be zero",
      "The equation must be first order"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Linear: $y$ and its derivatives are first degree, their coefficients depend only on $x$, and no nonlinear functions of $y$ appear.",
      "stepByStep": [
        "Variable coefficients like $x^3$ are fine; constant coefficients are not required."
      ],
      "commonTrap": "Thinking $g(x) \\neq 0$ makes it nonlinear. That only makes it nonhomogeneous.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_042",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Order and Linearity",
    "difficulty": "Midterm Level",
    "question": "Classify $\\dfrac{d^4y}{dx^4} + y^2 = 0$.",
    "options": [
      "Fourth-order, nonlinear",
      "Fourth-order, linear",
      "Second-order, nonlinear",
      "First-order, nonlinear"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Order comes from the highest derivative; linearity fails if $y$ appears with a power other than 1.",
      "stepByStep": [
        "The highest derivative is 4 and $y^2$ is second degree, so it is nonlinear."
      ],
      "commonTrap": "Declaring it linear because the derivative term itself is first degree.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_ENGR213_043",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Requirements for a Solution",
    "difficulty": "Foundation",
    "question": "For a function $\\varphi$ to be a solution of an $n$th-order ODE on an interval $I$, it must:",
    "options": [
      "Possess at least $n$ derivatives continuous on $I$ and reduce the ODE to an identity on $I$",
      "Be a polynomial of degree $n$",
      "Satisfy the ODE at one point only",
      "Be defined only at $x = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Definition from Lecture 1: $\\varphi$ is a solution if it has the required derivatives and $F(x, \\varphi, \\varphi', \\dots, \\varphi^{(n)}) = 0$ for all $x$ in $I$.",
      "stepByStep": [
        "The interval $I$ is the interval of definition (domain of the solution)."
      ],
      "commonTrap": "Checking the equation at a single point only.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_ENGR213_044",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Trivial Solution",
    "difficulty": "Foundation",
    "question": "$y = \\sin x$ solves $y'' + y = 0$ on $(-\\infty, \\infty)$. What is the trivial solution of this ODE?",
    "options": [
      "$y = 0$, a solution that is identically zero on the interval",
      "$y = \\cos x$",
      "$y = 1$",
      "$y = x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A solution that is identically zero on the interval is called the trivial solution.",
      "stepByStep": [
        "$y = 0 \\implies y'' + y = 0 + 0 = 0$. \u2714"
      ],
      "commonTrap": "Calling $y = \\cos x$ trivial. It is a valid but non-trivial solution.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_ENGR213_045",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Checking a Solution",
    "difficulty": "Midterm Level",
    "question": "Verify: which statement about $y = \\sin x$ and the ODE $y'' + y = 0$ is correct?",
    "options": [
      "$y'' = -\\sin x$, so $y'' + y = -\\sin x + \\sin x = 0$: it is a solution on $(-\\infty, \\infty)$",
      "$y'' = \\sin x$, so it is not a solution",
      "It is a solution only for $x > 0$",
      "It is a solution only at $x = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Substitute the function and its derivatives. The result must be identically zero on the interval.",
      "stepByStep": [
        "$y' = \\cos x$, $y'' = -\\sin x$.",
        "Both are defined and continuous for all real $x$."
      ],
      "commonTrap": "Sign error on the second derivative of $\\sin x$.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_ENGR213_046",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "n-Parameter Families",
    "difficulty": "Foundation",
    "question": "When solving an $n$th-order ODE, what kind of solution family do we usually look for?",
    "options": [
      "An $n$-parameter family $G(x, y, c_1, \\dots, c_n) = 0$",
      "A one-parameter family, regardless of order",
      "A single particular solution only",
      "A family with $n^2$ constants"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A first-order ODE gives a one-parameter family; an $n$th-order ODE gives $n$ arbitrary constants.",
      "stepByStep": [
        "Like integration: each integration introduces a constant."
      ],
      "commonTrap": "Assuming every ODE has exactly one constant.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 18"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 18"
      }
    ]
  },
  {
    "id": "Q_ENGR213_047",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Families of Solutions",
    "difficulty": "Midterm Level",
    "question": "Which is a one-parameter family of solutions of $xy' - y = x^2 \\sin x$?",
    "options": [
      "$y = -x\\cos x + cx$",
      "$y = x\\sin x + c$",
      "$y = -\\cos x + c$",
      "$y = c\\,x^2 \\sin x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A one-parameter family has one arbitrary constant; each value of $c$ gives a particular solution.",
      "stepByStep": [
        "$y' = -\\cos x + x\\sin x + c$.",
        "$xy' - y = -x\\cos x + x^2\\sin x + cx + x\\cos x - cx = x^2\\sin x$. \u2714"
      ],
      "commonTrap": "Stopping after differentiating; the $cx$ terms must cancel.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_ENGR213_048",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Two-Parameter Family",
    "difficulty": "Midterm Level",
    "question": "$y = c_1 x + c_2 x^2$ solves $x^2y'' - 2xy' + 2y = 0$. How many initial conditions does an IVP for this ODE need?",
    "options": [
      "Two, because it is second order (two constants)",
      "One",
      "Three",
      "None; the family is already unique"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An $n$th-order IVP specifies $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$: $n$ conditions to fix $n$ constants.",
      "stepByStep": [
        "Check $y = x$: $0 - 2x + 2x = 0$. \u2714",
        "Check $y = x^2$: $2x^2 - 4x^2 + 2x^2 = 0$. \u2714"
      ],
      "commonTrap": "Counting terms instead of constants.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_ENGR213_049",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Systems of ODEs",
    "difficulty": "Foundation",
    "question": "According to Lecture 1, what is a system of ordinary differential equations?",
    "options": [
      "Two or more equations involving the derivatives of two or more unknown functions of a single independent variable",
      "One equation with two independent variables",
      "A single ODE solved twice",
      "A PDE written in differential form"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A solution of a system is a set of functions on a common interval that satisfies every equation of the system.",
      "stepByStep": [
        "E.g. $dx/dt = f(t,x,y)$, $dy/dt = g(t,x,y)$."
      ],
      "commonTrap": "Confusing a system with a PDE. A system still has one independent variable.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 20"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 20"
      }
    ]
  },
  {
    "id": "Q_ENGR213_050",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Initial Conditions",
    "difficulty": "Foundation",
    "question": "For an $n$th-order IVP, where are the initial conditions specified?",
    "options": [
      "$y$ and its first $n - 1$ derivatives at a single point $x_0$",
      "$y$ at $n$ different points",
      "Only $y^{(n)}$ at $x_0$",
      "At the endpoints of the interval"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IVP: solve $y^{(n)} = f(x, y, \\dots, y^{(n-1)})$ subject to $y(x_0) = y_0, \\dots, y^{(n-1)}(x_0) = y_{n-1}$.",
      "stepByStep": [
        "All conditions share the same $x_0$."
      ],
      "commonTrap": "Specifying values at different points (that would be a boundary-value problem).",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_051",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Existence\u2013Uniqueness Theorem",
    "difficulty": "Midterm Level",
    "question": "If $f$ and $\\partial f/\\partial y$ are continuous on a rectangle $R$ containing $(x_0, y_0)$, what does the theorem guarantee?",
    "options": [
      "A unique solution on some interval $I_0 = (x_0 - h, x_0 + h)$, $h > 0$",
      "A unique solution on all of $(-\\infty, \\infty)$",
      "Exactly two solutions",
      "A solution only at $x_0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The guarantee is local: some interval around $x_0$, not necessarily the whole region.",
      "stepByStep": [
        "The theorem answers both questions: existence and uniqueness."
      ],
      "commonTrap": "Assuming the solution exists everywhere $f$ is continuous.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_052",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Applying the Theorem",
    "difficulty": "Midterm Level",
    "question": "For $y' = x y^{1/2}$, is a unique solution guaranteed through the point $(2, 1)$?",
    "options": [
      "Yes. $f$ and $\\partial f/\\partial y = \\dfrac{x}{2\\sqrt{y}}$ are continuous near $(2, 1)$ since $y > 0$ there",
      "No, because the IVP with $y(0) = 0$ has two solutions",
      "No, because $f$ is nonlinear",
      "Only if $x = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Check the hypotheses at the specific initial point.",
      "stepByStep": [
        "$\\partial f/\\partial y$ is discontinuous only at $y = 0$; $(2, 1)$ lies in the region $y > 0$."
      ],
      "commonTrap": "Generalizing the failure at $(0, 0)$ to every point.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_053",
    "courseId": "ENGR213",
    "chapter": "ch1",
    "topic": "Existence Questions",
    "difficulty": "Foundation",
    "question": "What are the two fundamental questions asked about an initial-value problem?",
    "options": [
      "Does a solution exist? If so, is it unique?",
      "Is it linear? Is it separable?",
      "What is the order? What is the degree?",
      "Is it explicit? Is it implicit?"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Existence: do solution curves pass through $(x_0, y_0)$? Uniqueness: is there precisely one?",
      "stepByStep": [
        "The existence\u2013uniqueness theorem gives sufficient conditions for both."
      ],
      "commonTrap": "Listing classification questions instead.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 1 \u2014 Introduction to Differential Equations",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_ENGR213_054",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Direction Fields",
    "difficulty": "Foundation",
    "question": "What is a direction field (slope field)?",
    "options": [
      "The collection of lineal elements drawn at many points $(x, y)$ with slopes $f(x, y)$",
      "The graph of one particular solution",
      "A plot of $f(x, y) = 0$",
      "The set of critical points"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Evaluating $f(x, y)$ at many points and drawing a short tangent segment at each gives the direction field.",
      "stepByStep": [
        "Solution curves follow the flow of the field."
      ],
      "commonTrap": "Confusing the field with a single solution curve.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_ENGR213_055",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Phase Portrait Stability",
    "difficulty": "Midterm Level",
    "question": "For the autonomous ODE $y' = y(1 - y)$ (Lecture 2), classify the critical point $y = 0$.",
    "options": [
      "Unstable (repeller): solutions move away from 0 on both sides",
      "Asymptotically stable (attractor)",
      "Semi-stable",
      "Not a critical point"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Critical points: $f(y) = 0 \\implies y = 0, 1$. Check the sign of $f$ on each interval of the phase line.",
      "stepByStep": [
        "$y < 0$: $f < 0$ \u2192 decreasing (away from 0).",
        "$0 < y < 1$: $f > 0$ \u2192 increasing (away from 0, toward 1).",
        "$y > 1$: $f < 0$ \u2192 decreasing toward 1. So 1 is an attractor."
      ],
      "commonTrap": "Reading the arrows backwards.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 15"
      }
    ]
  },
  {
    "id": "Q_ENGR213_056",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Semi-Stable Critical Points",
    "difficulty": "Exam Master",
    "question": "Classify the critical point $y = 2$ of $y' = (y - 2)^2$.",
    "options": [
      "Semi-stable: solutions approach from below and move away above",
      "Asymptotically stable",
      "Unstable (repeller)",
      "It is not a critical point"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Semi-stable: arrows point toward $c$ on one side and away on the other.",
      "stepByStep": [
        "$f(y) = (y-2)^2 \\ge 0$ on both sides, so $y$ increases on both sides.",
        "Below 2 \u2192 moves up toward 2; above 2 \u2192 moves up away from 2."
      ],
      "commonTrap": "Calling it stable because solutions from below approach it.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_ENGR213_057",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Separable ODEs",
    "difficulty": "Foundation",
    "question": "Lecture 3, Example 1: solve $(1 + x)\\,dy - y\\,dx = 0$.",
    "options": [
      "$y = c(1 + x)$",
      "$y = c\\,e^{x}$",
      "$y = \\ln|1 + x| + c$",
      "$y = c/(1 + x)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Separate: $\\dfrac{dy}{y} = \\dfrac{dx}{1 + x}$, then integrate.",
      "stepByStep": [
        "$\\ln|y| = \\ln|1 + x| + c_1$.",
        "$y = c(1 + x)$."
      ],
      "commonTrap": "Dropping the logarithm and writing $y = \\ln|1+x| + c$.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_ENGR213_058",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Recognizing Separable Equations",
    "difficulty": "Foundation",
    "question": "Which equation is separable?",
    "options": [
      "$\\dfrac{dy}{dx} = y^2 x e^{3x + 4y}$",
      "$\\dfrac{dy}{dx} = y + \\sin x$",
      "$\\dfrac{dy}{dx} = x + y$",
      "$\\dfrac{dy}{dx} = \\sin(xy)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Separable: $\\dfrac{dy}{dx} = g(x)h(y)$.",
      "stepByStep": [
        "$y^2 x e^{3x+4y} = (x e^{3x})(y^2 e^{4y})$, a product of a function of $x$ and a function of $y$."
      ],
      "commonTrap": "Thinking a sum like $y + \\sin x$ can be separated.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_059",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Linear Equation Structure",
    "difficulty": "Midterm Level",
    "question": "For a linear first-order ODE in standard form $y' + P(x)y = f(x)$, how is the general solution built?",
    "options": [
      "$y = y_c + y_p$: $y_c$ solves the homogeneous equation and $y_p$ is a particular solution",
      "$y = y_c \\cdot y_p$",
      "Only $y_p$ is needed",
      "$y = y_c - y_p$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "When $f(x) = 0$ the equation is homogeneous, otherwise nonhomogeneous. The solution is the sum of the two parts.",
      "stepByStep": [
        "$y_c = c\\,e^{-\\int P dx}$ and $y_p$ comes from the integrating-factor method."
      ],
      "commonTrap": "Multiplying the two parts instead of adding them.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_060",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Piecewise-Linear ODE",
    "difficulty": "Exam Master",
    "question": "Lecture 3 piecewise example: $y' + y = f(x)$, $y(0) = 0$, with $f = 1$ for $0 \\le x \\le 1$ and $f = 0$ for $x > 1$. What is $y$ for $x > 1$?",
    "options": [
      "$y = (e - 1)e^{-x}$",
      "$y = 1 - e^{-x}$",
      "$y = e^{-x}$",
      "$y = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Solve on each interval, then choose the constant so the solution is continuous at the break point.",
      "stepByStep": [
        "$0 \\le x \\le 1$: $y = 1 - e^{-x}$ (using $y(0) = 0$).",
        "$x > 1$: $y = c\\,e^{-x}$.",
        "Continuity at $x = 1$: $c\\,e^{-1} = 1 - e^{-1} \\implies c = e - 1$."
      ],
      "commonTrap": "Restarting with $y(1) = 0$ instead of matching the value at $x = 1$.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_ENGR213_061",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Exact IVP",
    "difficulty": "Exam Master",
    "question": "Lecture 4, Example 2: solve $\\dfrac{dy}{dx} = \\dfrac{xy^2 - \\cos x \\sin x}{y(1 - x^2)}$, $y(0) = 2$.",
    "options": [
      "$y^2(1 - x^2) - \\cos^2 x = 3$",
      "$y^2(1 - x^2) + \\cos^2 x = 5$",
      "$y^2 - x^2 = 4$",
      "$y(1 - x^2) - \\sin^2 x = 2$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rewrite as $(\\cos x\\sin x - xy^2)dx + y(1 - x^2)dy = 0$ and check $M_y = N_x = -2xy$.",
      "stepByStep": [
        "$f = \\int y(1 - x^2)dy = \\tfrac{y^2}{2}(1 - x^2) + h(x)$.",
        "$f_x = -xy^2 + h'(x) = \\cos x\\sin x - xy^2 \\implies h = -\\tfrac12\\cos^2 x$.",
        "So $y^2(1 - x^2) - \\cos^2 x = c$; $y(0) = 2$ gives $4 - 1 = 3$."
      ],
      "commonTrap": "Forgetting the $\\cos^2 x$ term at $x = 0$ (giving $c = 4$).",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_062",
    "courseId": "ENGR213",
    "chapter": "ch2",
    "topic": "Reduction to Separable",
    "difficulty": "Midterm Level",
    "question": "Lecture 5, Example 4: with $u = -2x + y$, what does $\\dfrac{dy}{dx} = (-2x + y)^2 - 7$ become?",
    "options": [
      "$\\dfrac{du}{dx} = u^2 - 9$",
      "$\\dfrac{du}{dx} = u^2 - 7$",
      "$\\dfrac{du}{dx} = u^2 - 5$",
      "$\\dfrac{du}{dx} = 2u - 7$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$dy/dx = f(Ax + By + C)$ becomes separable with $u = Ax + By + C$.",
      "stepByStep": [
        "$u' = -2 + y' = -2 + u^2 - 7 = u^2 - 9$.",
        "Separable: $\\dfrac{du}{u^2 - 9} = dx$."
      ],
      "commonTrap": "Forgetting the $-2$ from differentiating $-2x$.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 \u2014 First-Order Differential Equations",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_ENGR213_063",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Choosing a Method",
    "difficulty": "Foundation",
    "question": "What is the most direct method for $\\dfrac{dy}{dx} = e^{3x + 2y}$?",
    "options": [
      "Separation of variables, since $e^{3x+2y} = e^{3x}e^{2y}$",
      "Integrating factor (linear)",
      "Exact equation",
      "Bernoulli substitution"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Look for the form $g(x)h(y)$ first.",
      "stepByStep": [
        "$e^{-2y}dy = e^{3x}dx$."
      ],
      "commonTrap": "Missing the exponent law $e^{a+b} = e^a e^b$.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 3; Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 3"
      },
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 (\u00a71.1)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_064",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Linear ODE",
    "difficulty": "Midterm Level",
    "question": "Solve $xy' + 4y = x^3 - x$ for $x > 0$.",
    "options": [
      "$y = \\dfrac{x^3}{7} - \\dfrac{x}{5} + c\\,x^{-4}$",
      "$y = \\dfrac{x^3}{4} - \\dfrac{x}{4} + c\\,x^{4}$",
      "$y = x^3 - x + c\\,e^{-4x}$",
      "$y = \\dfrac{x^3}{7} - \\dfrac{x}{5} + c\\,x^{4}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard form $y' + \\tfrac{4}{x}y = x^2 - 1$, $\\mu = x^4$.",
      "stepByStep": [
        "$(x^4 y)' = x^6 - x^4$.",
        "$x^4 y = \\tfrac{x^7}{7} - \\tfrac{x^5}{5} + c$."
      ],
      "commonTrap": "Using $\\mu = e^{4x}$ without dividing by $x$ first.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_065",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Exact and Separable",
    "difficulty": "Foundation",
    "question": "Solve $(2x - 1)\\,dx + (3y + 7)\\,dy = 0$.",
    "options": [
      "$x^2 - x + \\tfrac32 y^2 + 7y = c$",
      "$x^2 + \\tfrac32 y^2 = c$",
      "$2x^2 - x + 3y^2 + 7y = c$",
      "$x^2 - x - \\tfrac32 y^2 - 7y = c$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$M_y = 0 = N_x$, so the equation is exact (it is also separable).",
      "stepByStep": [
        "$f = x^2 - x + g(y)$, $g' = 3y + 7$."
      ],
      "commonTrap": "Halving only one of the terms.",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.4)",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_066",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Linear or Homogeneous",
    "difficulty": "Midterm Level",
    "question": "Solve $\\dfrac{dy}{dx} = \\dfrac{x - y}{x}$ for $x > 0$.",
    "options": [
      "$y = \\dfrac{x}{2} + \\dfrac{c}{x}$",
      "$y = x + c\\,e^{-x}$",
      "$y = \\dfrac{x}{2} + c\\,x$",
      "$y = x\\ln x + c$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rewrite as linear: $y' + \\tfrac{1}{x}y = 1$, $\\mu = x$.",
      "stepByStep": [
        "$(xy)' = x \\implies xy = \\tfrac{x^2}{2} + c$.",
        "It is also homogeneous, so $y = ux$ works too."
      ],
      "commonTrap": "Using $\\mu = e^{x}$.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 10; Lecture 5, September 23 2026.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 10"
      },
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_067",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Bernoulli with n = 4",
    "difficulty": "Exam Master",
    "question": "Solve $\\dfrac{dy}{dx} = y(xy^3 - 1)$.",
    "options": [
      "$y^{-3} = x + \\tfrac13 + c\\,e^{3x}$",
      "$y^{3} = x + \\tfrac13 + c\\,e^{-3x}$",
      "$y^{-3} = x - \\tfrac13 + c\\,e^{-3x}$",
      "$y = x + c\\,e^{3x}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rewrite $y' + y = xy^4$ (Bernoulli, $n = 4$); $u = y^{1-n} = y^{-3}$.",
      "stepByStep": [
        "$u' - 3u = -3x$, $\\mu = e^{-3x}$.",
        "$u = x + \\tfrac13 + ce^{3x}$."
      ],
      "commonTrap": "Using $u = y^{3}$ instead of $y^{-3}$.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_068",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Reduction u = x + y + 1",
    "difficulty": "Midterm Level",
    "question": "Solve $\\dfrac{dy}{dx} = (x + y + 1)^2$.",
    "options": [
      "$y = \\tan(x + c) - x - 1$",
      "$y = \\tan x + c$",
      "$y = -\\dfrac{1}{x + c} - x - 1$",
      "$y = (x + 1)^3/3 + c$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$u = x + y + 1 \\implies u' = 1 + u^2$, separable.",
      "stepByStep": [
        "$\\dfrac{du}{1 + u^2} = dx \\implies \\tan^{-1}u = x + c$.",
        "$x + y + 1 = \\tan(x + c)$."
      ],
      "commonTrap": "Forgetting the $+1$ in $u' = 1 + y'$.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_ENGR213_069",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Linear IVP",
    "difficulty": "Midterm Level",
    "question": "Solve $\\dfrac{dy}{dx} + 2xy = x$, $y(0) = -3$.",
    "options": [
      "$y = \\tfrac12 - \\tfrac72 e^{-x^2}$",
      "$y = \\tfrac12 + \\tfrac72 e^{-x^2}$",
      "$y = -3e^{-x^2}$",
      "$y = \\tfrac12 - 3e^{-x^2}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$\\mu = e^{x^2}$.",
      "stepByStep": [
        "$(e^{x^2}y)' = xe^{x^2} \\implies y = \\tfrac12 + ce^{-x^2}$.",
        "$y(0) = \\tfrac12 + c = -3 \\implies c = -\\tfrac72$."
      ],
      "commonTrap": "Setting $c = -3$ and forgetting the particular part.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 10; Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 10"
      },
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_ENGR213_070",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Uniqueness at a Point",
    "difficulty": "Exam Master",
    "question": "For $y' = \\sqrt{y - x}$, through which point is a unique solution guaranteed?",
    "options": [
      "$(2, 3)$",
      "$(2, 2)$",
      "$(3, 3)$",
      "$(5, 2)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Need $f = \\sqrt{y - x}$ and $f_y = \\dfrac{1}{2\\sqrt{y - x}}$ continuous in a rectangle around the point, i.e. $y > x$.",
      "stepByStep": [
        "$(2,3)$: $y - x = 1 > 0$. \u2714",
        "$(2,2)$, $(3,3)$: $f_y$ blows up on $y = x$.",
        "$(5,2)$: $f$ undefined."
      ],
      "commonTrap": "Checking only $f$ and forgetting $\\partial f/\\partial y$.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_071",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Classifying and Solving",
    "difficulty": "Midterm Level",
    "question": "Which description fits $(y^2 - 1)\\,dx + x\\,dy = 0$?",
    "options": [
      "First-order, nonlinear, separable",
      "First-order, linear, not separable",
      "Second-order, linear",
      "First-order, exact with $M_y = N_x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Order 1; the $y^2$ term makes it nonlinear; it separates as $\\dfrac{dy}{1 - y^2} = \\dfrac{dx}{x}$.",
      "stepByStep": [
        "$M_y = 2y$ and $N_x = 1$, so it is not exact as written."
      ],
      "commonTrap": "Calling it linear despite $y^2$.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 10; Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 (\u00a71.1)",
        "location": "Page 10"
      },
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_072",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Logistic Phase Line",
    "difficulty": "Midterm Level",
    "question": "For $\\dfrac{dP}{dt} = P(4 - P)$ with $P(0) = 1$, what does $P(t)$ approach as $t \\to \\infty$?",
    "options": [
      "4",
      "0",
      "1",
      "It grows without bound"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Critical points 0 (repeller) and 4 (attractor). A solution starting between them rises toward 4.",
      "stepByStep": [
        "$0 < P < 4 \\implies P' > 0$."
      ],
      "commonTrap": "Assuming exponential growth forever.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_ENGR213_073",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Mixture at a Given Time",
    "difficulty": "Midterm Level",
    "question": "In the Lecture 6 tank, $A(t) = 600 - 550e^{-t/100}$ lb. How much salt is present after 100 min?",
    "options": [
      "\u2248 397.7 lb",
      "\u2248 202.3 lb",
      "600 lb",
      "\u2248 550 lb"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Evaluate the solution at $t = 100$.",
      "stepByStep": [
        "$600 - 550e^{-1} = 600 - 202.3 = 397.7$ lb."
      ],
      "commonTrap": "Reporting $550e^{-1}$ (the decayed part).",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_ENGR213_074",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Cooling Time",
    "difficulty": "Exam Master",
    "question": "For the Lecture 6 cake, $T = 70 + 230e^{kt}$ with $k \\approx -0.19018$. When is the cake at 75 \u00b0F?",
    "options": [
      "\u2248 20.1 min",
      "\u2248 3 min",
      "\u2248 11 min",
      "Never"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Solve $5 = 230e^{kt}$.",
      "stepByStep": [
        "$t = \\ln(5/230)/k = -3.8286/-0.19018 \\approx 20.1$ min."
      ],
      "commonTrap": "Answering \"never\" \u2014 75 \u00b0F is reached; only 70 \u00b0F exactly is never reached.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_075",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Radioactive Decay",
    "difficulty": "Midterm Level",
    "question": "A radioactive substance decays by $dA/dt = kA$. If 3% has decayed after 100 years, what is its half-life?",
    "options": [
      "\u2248 2276 years",
      "\u2248 1667 years",
      "\u2248 3300 years",
      "\u2248 231 years"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$A = A_0e^{kt}$; half-life $T = \\ln 2/|k|$.",
      "stepByStep": [
        "$0.97 = e^{100k} \\implies k = \\ln 0.97/100 \\approx -3.046\\times10^{-4}$.",
        "$T = 0.6931/3.046\\times10^{-4} \\approx 2276$ yr."
      ],
      "commonTrap": "Using $0.03$ instead of $0.97$ remaining.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_ENGR213_076",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "LR Circuit Time",
    "difficulty": "Midterm Level",
    "question": "In the Lecture 6 LR circuit, $i(t) = 1.2(1 - e^{-20t})$ A. When does the current reach 1.0 A?",
    "options": [
      "$t = \\dfrac{\\ln 6}{20} \\approx 0.090$ s",
      "$t = \\dfrac{\\ln 1.2}{20} \\approx 0.009$ s",
      "$t = 0.05$ s",
      "Never"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Solve $1 = 1.2(1 - e^{-20t})$.",
      "stepByStep": [
        "$e^{-20t} = 1/6 \\implies t = \\ln 6/20$."
      ],
      "commonTrap": "Solving $e^{-20t} = 1/1.2$.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_ENGR213_077",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Doubling Growth",
    "difficulty": "Midterm Level",
    "question": "A population obeying $dP/dt = kP$ doubles in 3 h. How long until it is 10 times the initial size?",
    "options": [
      "\u2248 9.97 h",
      "15 h",
      "30 h",
      "\u2248 6.64 h"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$P = P_0 e^{kt}$ with $k = \\ln 2/3$.",
      "stepByStep": [
        "$t = \\ln 10/k = 3\\ln 10/\\ln 2 \\approx 9.97$ h."
      ],
      "commonTrap": "Assuming linear growth (15 h).",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_ENGR213_078",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Exact Equation",
    "difficulty": "Midterm Level",
    "question": "Solve $(5x + 4y)\\,dx + (4x - 8y^3)\\,dy = 0$.",
    "options": [
      "$\\tfrac52 x^2 + 4xy - 2y^4 = c$",
      "$5x^2 + 4xy - 8y^4 = c$",
      "$\\tfrac52 x^2 + 8xy - 2y^4 = c$",
      "$\\tfrac52 x^2 - 2y^4 = c$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$M_y = 4 = N_x$: exact.",
      "stepByStep": [
        "$f = \\tfrac52x^2 + 4xy + g(y)$.",
        "$f_y = 4x + g'(y) = 4x - 8y^3 \\implies g = -2y^4$."
      ],
      "commonTrap": "Counting the $4xy$ term twice.",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.4)",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_ENGR213_079",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Exact IVP",
    "difficulty": "Exam Master",
    "question": "Solve $(y^2\\cos x - 3x^2y - 2x)\\,dx + (2y\\sin x - x^3 + \\ln y)\\,dy = 0$, $y(0) = e$.",
    "options": [
      "$y^2\\sin x - x^3y - x^2 + y\\ln y - y = 0$",
      "$y^2\\sin x - x^3y - x^2 + y\\ln y = e$",
      "$y^2\\cos x - x^3y + y\\ln y = e$",
      "$y^2\\sin x - x^2 + \\ln y = 1$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Check $M_y = 2y\\cos x - 3x^2 = N_x$.",
      "stepByStep": [
        "$f = y^2\\sin x - x^3y - x^2 + h(y)$, $h' = \\ln y \\implies h = y\\ln y - y$.",
        "At $(0, e)$: $e\\cdot1 - e = 0 = c$."
      ],
      "commonTrap": "Integrating $\\ln y$ as $1/y$.",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.4)",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_ENGR213_080",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Integrating Factor \u03bc(x)",
    "difficulty": "Exam Master",
    "question": "Find the integrating factor and solution of $(2y^2 + 3x)\\,dx + 2xy\\,dy = 0$.",
    "options": [
      "$\\mu = x$; $x^2y^2 + x^3 = c$",
      "$\\mu = y$; $xy^3 + x^2 = c$",
      "$\\mu = e^x$; $e^x y^2 = c$",
      "$\\mu = 1/x$; $y^2 + 3\\ln x = c$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$(M_y - N_x)/N = (4y - 2y)/(2xy) = 1/x$, a function of $x$ alone.",
      "stepByStep": [
        "$\\mu = e^{\\int dx/x} = x$.",
        "$(2xy^2 + 3x^2)dx + 2x^2y\\,dy = 0$ is exact with $f = x^2y^2 + x^3$."
      ],
      "commonTrap": "Using $(N_x - M_y)/M$, which is not a function of $y$ alone here.",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.4)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_081",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Homogeneous Equation",
    "difficulty": "Exam Master",
    "question": "Lecture 5, Example 2: the solution of $(x^2 + y^2)\\,dx + (x^2 - xy)\\,dy = 0$ can be written as:",
    "options": [
      "$(x + y)^2 = c\\,x\\,e^{y/x}$",
      "$x^2 + y^2 = c\\,x$",
      "$(x - y)^2 = c\\,e^{x/y}$",
      "$y = x\\ln|cx|$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Both coefficients are homogeneous of degree 2, so use $y = ux$.",
      "stepByStep": [
        "$(1 + u)dx + x(1 - u)du = 0 \\implies \\dfrac{dx}{x} + \\left(-1 + \\dfrac{2}{1 + u}\\right)du = 0$.",
        "$\\ln|x| - u + 2\\ln|1 + u| = c$ \u2192 $(x+y)^2 = cxe^{y/x}$."
      ],
      "commonTrap": "Forgetting $dy = u\\,dx + x\\,du$.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_082",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Autonomous Model Equilibrium",
    "difficulty": "Midterm Level",
    "question": "For Newton's law $dT/dt = k(T - T_m)$ with $k < 0$, the constant solution $T = T_m$ is:",
    "options": [
      "An asymptotically stable critical point (attractor)",
      "An unstable critical point",
      "Semi-stable",
      "Not a solution"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The ODE is autonomous; $f(T) = k(T - T_m)$ vanishes at $T = T_m$.",
      "stepByStep": [
        "Above $T_m$: $T' < 0$; below: $T' > 0$ \u2192 both sides move toward $T_m$."
      ],
      "commonTrap": "Ignoring the sign of $k$.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 14; Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 14"
      },
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_083",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Mixture Setup, Unequal Rates",
    "difficulty": "Exam Master",
    "question": "A 500 L tank of pure water receives brine (2 kg/L) at 5 L/min and drains at 3 L/min. Which ODE models the salt $A(t)$?",
    "options": [
      "$A' = 10 - \\dfrac{3A}{500 + 2t}$",
      "$A' = 10 - \\dfrac{3A}{500}$",
      "$A' = 10 - \\dfrac{5A}{500 + 2t}$",
      "$A' = 6 - \\dfrac{3A}{500 - 2t}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$R_{in} = 5 \\times 2 = 10$ kg/min; $R_{out} = 3\\cdot A/V(t)$ with $V = 500 + 2t$.",
      "stepByStep": [
        "The volume grows because $Q_{in} > Q_{out}$."
      ],
      "commonTrap": "Using a constant volume of 500 L.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_ENGR213_084",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Bernoulli Identification",
    "difficulty": "Midterm Level",
    "question": "For $x\\dfrac{dy}{dx} - (1 + x)y = xy^2$, what are $n$ and the substitution?",
    "options": [
      "$n = 2$, $u = y^{-1}$",
      "$n = 2$, $u = y^{2}$",
      "$n = 1$, $u = \\ln y$",
      "$n = -1$, $u = y^{2}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard form $y' - \\tfrac{1+x}{x}y = y^2$: Bernoulli with $n = 2$, $u = y^{1-n}$.",
      "stepByStep": [
        "$u = y^{-1}$ gives a linear ODE in $u$."
      ],
      "commonTrap": "Using $u = y^n$.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_085",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Separable IVP",
    "difficulty": "Midterm Level",
    "question": "Solve $\\dfrac{dy}{dx} = 3x^2(1 + y^2)$, $y(0) = 1$.",
    "options": [
      "$y = \\tan\\left(x^3 + \\tfrac{\\pi}{4}\\right)$",
      "$y = \\tan(x^3) + 1$",
      "$y = \\arctan(x^3) + 1$",
      "$y = e^{x^3}$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$\\dfrac{dy}{1 + y^2} = 3x^2dx \\implies \\tan^{-1}y = x^3 + c$.",
      "stepByStep": [
        "$\\tan^{-1}1 = \\pi/4 = c$."
      ],
      "commonTrap": "Adding the IC value outside the tangent.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_ENGR213_086",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Interval of an IVP Solution",
    "difficulty": "Exam Master",
    "question": "$y = \\dfrac{1}{1 - x}$ solves $y' = y^2$, $y(0) = 1$. What is the largest interval of definition of this IVP solution?",
    "options": [
      "$(-\\infty, 1)$",
      "$(-\\infty, \\infty)$",
      "$(1, \\infty)$",
      "$(0, 1)$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The solution interval must contain $x_0 = 0$ and avoid the discontinuity at $x = 1$.",
      "stepByStep": [
        "The function is defined for $x \\ne 1$, but the IVP solution lives on the piece containing 0."
      ],
      "commonTrap": "Taking the domain of the function as the interval.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 13; Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 (\u00a71.1)",
        "location": "Page 13"
      },
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_087",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Homogeneous Substitution",
    "difficulty": "Exam Master",
    "question": "Solve $\\dfrac{dy}{dx} = \\dfrac{y^2 + xy}{x^2}$.",
    "options": [
      "$y = -\\dfrac{x}{\\ln|x| + c}$",
      "$y = x\\ln|x| + cx$",
      "$y = \\dfrac{x}{\\ln|x| + c}$",
      "$y = cx^2$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Degree-2 homogeneous; $y = ux$.",
      "stepByStep": [
        "$u + xu' = u^2 + u \\implies x\\,u' = u^2$.",
        "$-1/u = \\ln|x| + c \\implies y = -x/(\\ln|x| + c)$."
      ],
      "commonTrap": "Losing the minus sign from $\\int u^{-2}du = -u^{-1}$.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_088",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Which Methods Apply",
    "difficulty": "Midterm Level",
    "question": "Which statement about $\\dfrac{dy}{dx} = x + y$ is true?",
    "options": [
      "It is linear (and $u = x + y$ also reduces it to separable form), but it is not separable as written",
      "It is separable",
      "It is exact as written in the form $dy - (x + y)dx = 0$",
      "It is a Bernoulli equation with $n = 2$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Linear: $y' - y = x$. Reduction: $u = x + y \\implies u' = 1 + u$.",
      "stepByStep": [
        "For exactness: $M = -(x+y)$, $N = 1$: $M_y = -1 \\ne 0 = N_x$."
      ],
      "commonTrap": "Calling a sum separable.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 10; Lecture 5, September 23 2026.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 10"
      },
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_ENGR213_089",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Bacteria After 5 Hours",
    "difficulty": "Foundation",
    "question": "For the Lecture 6 culture ($P(1) = 1.5P_0$), how large is the population after 5 h?",
    "options": [
      "\u2248 $7.59P_0$",
      "$3.5P_0$",
      "$7.5P_0$",
      "\u2248 $4.48P_0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$P(t) = P_0(1.5)^t$ since $e^{k} = 1.5$.",
      "stepByStep": [
        "$1.5^5 = 7.59$."
      ],
      "commonTrap": "Adding $0.5P_0$ per hour (linear).",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_ENGR213_090",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Classifying a Model",
    "difficulty": "Foundation",
    "question": "Kirchhoff's law for an LR circuit, $L\\dfrac{di}{dt} + Ri = E(t)$, is:",
    "options": [
      "A first-order linear ODE in $i(t)$",
      "A second-order nonlinear ODE",
      "A PDE",
      "A first-order nonlinear ODE"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "One independent variable $t$, highest derivative $di/dt$, and $i$ appears to the first degree.",
      "stepByStep": [
        "The LRC version in $q(t)$ is second order."
      ],
      "commonTrap": "Confusing it with the second-order LRC equation.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 16; Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 16"
      },
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 (\u00a71.1)",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_ENGR213_091",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Critical Point Classification",
    "difficulty": "Exam Master",
    "question": "For $y' = y^2(4 - y^2)$, classify the critical point $y = 0$.",
    "options": [
      "Semi-stable",
      "Asymptotically stable",
      "Unstable",
      "Not a critical point"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Sign of $f$ near 0: $f = y^2(4 - y^2) > 0$ for $0 < |y| < 2$.",
      "stepByStep": [
        "Solutions increase on both sides: toward 0 from below, away above."
      ],
      "commonTrap": "Treating $y^2$ like $y$ (sign change).",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_ENGR213_092",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Choosing Between Exact and Linear",
    "difficulty": "Midterm Level",
    "question": "$(x^2 + 2y)\\,dx - x\\,dy = 0$ is best solved as:",
    "options": [
      "A linear equation $y' - \\tfrac{2}{x}y = x$ (it is not exact)",
      "An exact equation",
      "A separable equation",
      "A Bernoulli equation with $n = 2$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$M_y = 2$, $N_x = -1$: not exact. Dividing by $x\\,dx$ gives a linear ODE.",
      "stepByStep": [
        "$\\mu = x^{-2}$ \u2192 $y = x^2\\ln|x| + cx^2$."
      ],
      "commonTrap": "Assuming every $M\\,dx + N\\,dy$ form is exact.",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 4; Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.4)",
        "location": "Page 4"
      },
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_093",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Linear Solution Check",
    "difficulty": "Midterm Level",
    "question": "Which is the general solution of $x^2y' + xy = 1$ for $x > 0$?",
    "options": [
      "$y = \\dfrac{\\ln x + c}{x}$",
      "$y = \\dfrac{1}{x} + c$",
      "$y = x\\ln x + c$",
      "$y = \\ln x + c\\,x$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standard form $y' + \\tfrac1x y = \\tfrac{1}{x^2}$, $\\mu = x$.",
      "stepByStep": [
        "$(xy)' = \\tfrac1x \\implies xy = \\ln x + c$."
      ],
      "commonTrap": "Using $\\mu = x^2$.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_ENGR213_094",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Explicit vs Implicit",
    "difficulty": "Foundation",
    "question": "Solving $y\\,dy = -x\\,dx$ gives $x^2 + y^2 = c$. This relation is:",
    "options": [
      "An implicit solution (a one-parameter family)",
      "An explicit solution",
      "A singular solution",
      "Not a solution"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An implicit solution is a relation $G(x, y) = 0$; explicit solutions like $y = \\pm\\sqrt{c - x^2}$ can be extracted from it.",
      "stepByStep": [
        "It is a one-parameter family (circles)."
      ],
      "commonTrap": "Calling any solution with $y$ on both sides singular.",
      "reference": "Lecture 1 - Introduction to Differential Equations.pdf \u00b7 Page 16; Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 1 - Introduction to Differential Equations.pdf",
        "chapter": "Chapter 1 (\u00a71.1)",
        "location": "Page 16"
      },
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_ENGR213_095",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Exactness Test",
    "difficulty": "Foundation",
    "question": "For which equation is the exactness condition $M_y = N_x$ satisfied?",
    "options": [
      "$(2xy^2 + 1)\\,dx + 2x^2y\\,dy = 0$",
      "$xy\\,dx + (2x^2 + 3y^2)\\,dy = 0$",
      "$(x + y)\\,dx - x\\,dy = 0$",
      "$y\\,dx - x\\,dy = 0$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Compute $M_y$ and $N_x$ for each.",
      "stepByStep": [
        "$M_y = 4xy = N_x$. \u2714 The others fail."
      ],
      "commonTrap": "Differentiating $M$ with respect to $x$.",
      "reference": "Lecture 4 - Exact Equations.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "Lecture 4 - Exact Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.4)",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_ENGR213_096",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Warming Model",
    "difficulty": "Midterm Level",
    "question": "A 70 \u00b0F object is placed in a 350 \u00b0F oven: $T(t) = 350 - 280e^{kt}$. If $T(1) = 110$ \u00b0F, what is $k$?",
    "options": [
      "$k = \\ln(6/7) \\approx -0.154$",
      "$k = \\ln(7/6) \\approx 0.154$",
      "$k = \\ln(110/70)$",
      "$k = -280$"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Use the data point to find $k$.",
      "stepByStep": [
        "$110 = 350 - 280e^{k} \\implies e^{k} = 240/280 = 6/7$."
      ],
      "commonTrap": "Using $110/70$ (ignoring $T_m$).",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_ENGR213_097",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Order of an IVP",
    "difficulty": "Foundation",
    "question": "How many initial conditions does the IVP for $y''' - y = e^x$ need?",
    "options": [
      "Three: $y(x_0)$, $y'(x_0)$, $y''(x_0)$",
      "One",
      "Two",
      "Four"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An $n$th-order IVP needs $n$ conditions at a single point.",
      "stepByStep": [
        "Order 3 \u2192 3 conditions."
      ],
      "commonTrap": "Counting the right-hand side as a condition.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_098",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Separable with Lost Solution",
    "difficulty": "Exam Master",
    "question": "Separating $\\dfrac{dy}{dx} = xy^2$ gives $y = -\\dfrac{2}{x^2 + c}$. Which solution is lost?",
    "options": [
      "$y = 0$",
      "$y = 1$",
      "$y = -2$",
      "None is lost"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Dividing by $y^2$ discards the constant solution $y = 0$.",
      "stepByStep": [
        "No value of $c$ gives $y = 0$, so it is a singular solution."
      ],
      "commonTrap": "Assuming the family contains every solution.",
      "reference": "Lecture 3 - Separable and Linear Equations.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 3 - Separable and Linear Equations.pdf",
        "chapter": "Chapter 2 (\u00a72.2\u20132.3)",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_ENGR213_099",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Direction Field Reading",
    "difficulty": "Foundation",
    "question": "For $y' = x - y$, what is the slope of the lineal element at $(3, 1)$?",
    "options": [
      "2",
      "\u22122",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The slope at $(x, y)$ is $f(x, y)$.",
      "stepByStep": [
        "$f(3, 1) = 3 - 1 = 2$."
      ],
      "commonTrap": "Swapping $x$ and $y$.",
      "reference": "Lecture 2 - IVPs and Direction Fields.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "Lecture 2 - IVPs and Direction Fields.pdf",
        "chapter": "Chapters 1\u20132 (\u00a71.2, \u00a72.1)",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_ENGR213_100",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Model Building Steps",
    "difficulty": "Foundation",
    "question": "According to Lecture 6, what should you do if a model's predictions compare poorly with experimental data?",
    "options": [
      "Refine the assumptions or increase the model resolution",
      "Discard the differential equation",
      "Change the data to match",
      "Assume the model is correct"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Modeling cycle: assumptions \u2192 DE \u2192 solve \u2192 compare with data \u2192 refine.",
      "stepByStep": [
        "Better accuracy usually costs more mathematical complexity."
      ],
      "commonTrap": "Treating the first model as final.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_ENGR213_101",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Substitution Goal",
    "difficulty": "Foundation",
    "question": "According to Lecture 5, what is the goal of a substitution?",
    "options": [
      "To convert the ODE into a familiar solvable form, such as separable or linear",
      "To create a brand-new solution method",
      "To raise the order of the equation",
      "To remove the independent variable entirely"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Pattern recognition fails \u2192 new variable \u2192 simpler ODE \u2192 solve \u2192 back-substitute.",
      "stepByStep": [
        "Substitution is a bridge to methods you already know."
      ],
      "commonTrap": "Forgetting to back-substitute to the original variable.",
      "reference": "Lecture 5, September 23 2026.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "Lecture 5, September 23 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.5)",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_ENGR213_102",
    "courseId": "ENGR213",
    "chapter": "mixed",
    "topic": "Linear Model Identification",
    "difficulty": "Midterm Level",
    "question": "Which of these Lecture 6 models is NOT a linear first-order ODE?",
    "options": [
      "None: growth/decay, cooling, mixtures and LR circuits are all linear first-order models",
      "Newton's law of cooling",
      "The LR-series circuit",
      "The mixture model"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "All four are of the form $y' + P(t)y = f(t)$.",
      "stepByStep": [
        "That is why they are grouped as \"linear models\" (\u00a72.7)."
      ],
      "commonTrap": "Thinking the mixture model is nonlinear because of $A/V$.",
      "reference": "Lecture 6 - Linear Models, September 25 2026.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "chapter": "Chapter 2 (\u00a72.7)",
        "location": "Page 2"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 20"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 20"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 22"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 22"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 16"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 15"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 11"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 13"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 17"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 10"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 4"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 5"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 7"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 19"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 24"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 24"
      }
    ]
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
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 36"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 36"
      }
    ]
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
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 7"
      }
    ]
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
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 20"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 20"
      }
    ]
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
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 22"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 22"
      }
    ]
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
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Pages 14\u201315"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Pages 14\u201315"
      }
    ]
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
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 7"
      }
    ]
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
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 13"
      }
    ]
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
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 12"
      }
    ]
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
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 16"
      }
    ]
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
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 16"
      }
    ]
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
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 18"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 18"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 5"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 9"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 11"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 14"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 19"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 21"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 21"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 5"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 3"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 21"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 21"
      }
    ]
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
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 26"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 26"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 3"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 10"
      }
    ]
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
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 15"
      }
    ]
  },
  {
    "id": "Q_INDU211_038",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Early Engineering Marvels",
    "difficulty": "Foundation",
    "question": "Which of the following is listed in Chapter 1 as an early engineering marvel?",
    "options": [
      "Roman roads",
      "The steam engine",
      "The assembly line",
      "The Gantt chart"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Early marvels: Roman roads, the Great Wall of China, the Egyptian pyramids.",
      "stepByStep": [
        "The others come from the modern era / industrial revolution."
      ],
      "commonTrap": "Mixing up early marvels with industrial-era developments.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_INDU211_039",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Science vs Engineering Examples",
    "difficulty": "Foundation",
    "question": "In the lecture, which example is given as a SCIENCE development (rather than an engineering one)?",
    "options": [
      "The inclined plane and the wheel",
      "The Great Wall of China",
      "Roman construction projects",
      "The Egyptian pyramids"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Science: quest for basic knowledge (inclined plane, bow, wheel, water wheel). Engineering: applying it (Great Wall, Roman construction).",
      "stepByStep": [
        "Science and engineering work hand in hand."
      ],
      "commonTrap": "Treating any old invention as engineering.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_INDU211_040",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Foundation of Engineering",
    "difficulty": "Foundation",
    "question": "According to Chapter 1, what has been fundamental to all engineering developments?",
    "options": [
      "Advances made in mathematics",
      "Advances in marketing",
      "The invention of computers",
      "Government regulation"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The slide states that advances in mathematics are fundamental to all engineering developments.",
      "stepByStep": [
        "Mathematics is the common language of science and engineering."
      ],
      "commonTrap": "Choosing computers, which came much later.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_INDU211_041",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Scientific Theories",
    "difficulty": "Foundation",
    "question": "According to Chapter 1, what is a scientific theory?",
    "options": [
      "A scientific conjecture that has been verified through physical experiments",
      "Any idea proposed by a scientist",
      "An engineering design that works",
      "A conjecture that has never been tested"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Conjectures are derived with valid reasoning consistent with existing knowledge; theories are conjectures verified by physical experiments.",
      "stepByStep": [
        "Observation \u2192 conjecture \u2192 controlled experiments validate or nullify."
      ],
      "commonTrap": "Calling an untested conjecture a theory.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_042",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Behavioural Science",
    "difficulty": "Midterm Level",
    "question": "Why is behavioural science especially important to industrial engineers?",
    "options": [
      "Systems designed by IEs involve people as basic components",
      "IEs design only software",
      "IEs never work with machines",
      "It replaces mathematics in IE"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Behavioural science was the \"missing early development\"; IE systems always contain people.",
      "stepByStep": [
        "IEs must be more people-oriented in their solutions."
      ],
      "commonTrap": "Thinking IE is purely technical.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_INDU211_043",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Mass Production Drivers",
    "difficulty": "Midterm Level",
    "question": "After 1750, the increased size and complexity of manufacturing (mass production) created a need for:",
    "options": [
      "Interchangeability of parts, specialization of labour and better management systems",
      "Fewer workers and no management",
      "Only hand-crafted products",
      "Eliminating standard parts"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Rapid technological innovation \u2192 mass production \u2192 interchangeable parts, specialized labour, need for better management.",
      "stepByStep": [
        "This is the setting in which IE emerged."
      ],
      "commonTrap": "Forgetting the management dimension.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_INDU211_044",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Regulation of the Profession",
    "difficulty": "Foundation",
    "question": "How is engineering regulated in Canada, according to Chapter 1?",
    "options": [
      "It is a regulated profession, with provincial associations and a national organization (Engineers Canada)",
      "Anyone can practise engineering without a licence",
      "Only the federal government licenses engineers",
      "Universities license engineers directly"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Engineering is regulated provincially (e.g. OIQ in Quebec); Engineers Canada is the national organization of the associations.",
      "stepByStep": [
        "Licensing protects the public."
      ],
      "commonTrap": "Assuming a degree alone gives the right to practise.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_INDU211_045",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Practice of Engineering",
    "difficulty": "Midterm Level",
    "question": "The \"practice of engineering\" is any act of planning, designing, evaluating, advising, etc. that:",
    "options": [
      "Requires engineering principles and concerns safeguarding life, health, property, economic interests, public welfare or the environment",
      "Is done in a factory",
      "Involves computers",
      "Is paid by an employer"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The legal definition hinges on applying engineering principles to protect the public and environment.",
      "stepByStep": [
        "Managing any of those acts also counts."
      ],
      "commonTrap": "Defining it by workplace instead of by the act and its consequences.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_INDU211_046",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Analysis vs Synthesis",
    "difficulty": "Foundation",
    "question": "In the engineering process slide, what is the difference between analysis and synthesis?",
    "options": [
      "Analysis resolves something into basic elements (existing system); synthesis combines elements into a whole (new system)",
      "Analysis builds new systems; synthesis studies old ones",
      "They are two words for the same step",
      "Synthesis always comes before analysis"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Process: symptom \u2192 problem definition \u2192 analysis \u2192 synthesis of alternatives \u2192 decision \u2192 solution.",
      "stepByStep": [
        "Analysis examines; synthesis creates."
      ],
      "commonTrap": "Reversing the two definitions.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_INDU211_047",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Origins of IE as a Profession",
    "difficulty": "Foundation",
    "question": "Industrial Engineering emerged as a profession as a result of:",
    "options": [
      "The industrial revolution",
      "The invention of the internet",
      "World War II only",
      "The space age"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Large, complex operations needed people who could plan, organize and direct them to increase efficiency and effectiveness.",
      "stepByStep": [
        "Operations research came later (military applications)."
      ],
      "commonTrap": "Linking IE only to the computer age.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_INDU211_048",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Henry Ford",
    "difficulty": "Foundation",
    "question": "According to the chronology, what enabled Henry Ford's mass production and assembly lines?",
    "options": [
      "Interchangeable manufacture and machines that could be operated by workers with minimal training",
      "Hand-crafting every part to fit",
      "Statistical quality control charts",
      "Operations research software"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Mass production relied on interchangeable parts and simple machine operation.",
      "stepByStep": [
        "Babbage: division of labour. Ford: mass production and assembly lines."
      ],
      "commonTrap": "Crediting Ford with statistical quality control (Shewhart).",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_INDU211_049",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Frank Gilbreth",
    "difficulty": "Foundation",
    "question": "Which contribution is attributed to Frank B. Gilbreth in the chronology?",
    "options": [
      "Motion analysis and time study",
      "The Gantt chart",
      "Quality control",
      "Division of labour"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Taylor: job analysis/design for maximum efficiency. F.B. Gilbreth: motion analysis and time study. L. Gilbreth: human factors.",
      "stepByStep": [
        "Gantt: Gantt chart. Shewhart: quality control."
      ],
      "commonTrap": "Confusing Frank with Lillian Gilbreth.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_INDU211_050",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Operations Research",
    "difficulty": "Midterm Level",
    "question": "Where were the first applications of operations research (scientific research on operations)?",
    "options": [
      "In the military",
      "In hospitals",
      "In banking",
      "In agriculture"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The IE chronology lists OR as scientific research on operations, first applied in the military.",
      "stepByStep": [
        "Today OR extends to business and data analytics."
      ],
      "commonTrap": "Assuming OR started in manufacturing.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_INDU211_051",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Definition of IE",
    "difficulty": "Foundation",
    "question": "Industrial Engineering is concerned with the design, improvement and installation of integrated systems of:",
    "options": [
      "People, materials, information, equipment and energy",
      "Only machines and tools",
      "Only software and data",
      "Only buildings and roads"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IE draws on mathematical, physical and social sciences to specify, predict and evaluate such systems.",
      "stepByStep": [
        "The social sciences are included because people are part of the system."
      ],
      "commonTrap": "Leaving people out of the definition.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 18"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 18"
      }
    ]
  },
  {
    "id": "Q_INDU211_052",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Two Levels of IE Design",
    "difficulty": "Midterm Level",
    "question": "Forecasting, budgeting, inventory control and production scheduling belong to which level of IE system design?",
    "options": [
      "Management control systems",
      "Human activity systems (physical workplace)",
      "Civil infrastructure systems",
      "Electrical control systems"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IE designs (1) human activity systems \u2014 process, machines, layout, material handling \u2014 and (2) management control systems \u2014 procedures for planning, measuring and controlling.",
      "stepByStep": [
        "The listed items are planning/control procedures."
      ],
      "commonTrap": "Classifying planning procedures as physical workplace design.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_INDU211_053",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "IE Motto",
    "difficulty": "Foundation",
    "question": "Complete the Chapter 1 slogan: \"Industrial engineers work with PEOPLE to do things\u2026\"",
    "options": [
      "Better, faster, safer, cheaper",
      "Bigger, heavier, louder, costlier",
      "Only faster",
      "Only cheaper"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IEs solve problems with a broad engineering foundation, realizing that systems always contain people.",
      "stepByStep": [
        "Four goals: better, faster, safer, cheaper."
      ],
      "commonTrap": "Focusing only on cost.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 24"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 24"
      }
    ]
  },
  {
    "id": "Q_INDU211_054",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Mechanical vs Civil",
    "difficulty": "Foundation",
    "question": "In the discipline comparison, how are mechanical and civil engineering distinguished?",
    "options": [
      "Mechanical: products that move (dynamics); civil: products that do not move (statics)",
      "Mechanical: buildings; civil: machines",
      "Both deal only with electricity",
      "Civil uses dynamics, mechanical uses statics"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Mechanical \u2192 cars, trains, machines (physics/dynamics). Civil \u2192 buildings, bridges, roads (physics/statics).",
      "stepByStep": [
        "Industrial \u2192 systems operated by people (applied math/OR)."
      ],
      "commonTrap": "Swapping statics and dynamics.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 25"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 25"
      }
    ]
  },
  {
    "id": "Q_INDU211_055",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Human Engineering",
    "difficulty": "Foundation",
    "question": "According to the Dale Carnegie quote in Chapter 1, what share of financial success is due to \"human engineering\" (personality and ability to lead people)?",
    "options": [
      "About 85%",
      "About 15%",
      "About 50%",
      "About 100%"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "About 15% is due to technical knowledge and about 85% to skill in human engineering.",
      "stepByStep": [
        "The IISE advice slide also stresses communication."
      ],
      "commonTrap": "Swapping the 15% and 85%.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 31"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 31"
      }
    ]
  },
  {
    "id": "Q_INDU211_056",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Current Factors Affecting IE",
    "difficulty": "Foundation",
    "question": "Which of the following is listed as a current factor affecting IE?",
    "options": [
      "Large language models (generative AI)",
      "The decline of global competition",
      "The end of supply chains",
      "Elimination of computers"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Listed: computers and advanced production technology, global and time-based competition, supply chain management, sustainability, big data, smart cities/factories, generative AI.",
      "stepByStep": [
        "AI enhances IE rather than displacing it."
      ],
      "commonTrap": "Choosing the opposite of a listed trend.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 32"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 32"
      }
    ]
  },
  {
    "id": "Q_INDU211_057",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "IE in the Age of AI",
    "difficulty": "Midterm Level",
    "question": "What does Chapter 1 say about industrial engineering in the age of AI?",
    "options": [
      "AI is enhancing IE, not displacing it; IEs design and manage AI-powered systems",
      "AI will replace all industrial engineers",
      "AI is irrelevant to IE",
      "IEs are forbidden from using AI"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "IEs use AI to optimize production, reduce waste, predict failures and make data-driven decisions.",
      "stepByStep": [
        "Real-time data helps identify bottlenecks and optimize supply chains."
      ],
      "commonTrap": "Assuming automation replaces the engineer.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 33"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 33"
      }
    ]
  },
  {
    "id": "Q_INDU211_058",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Engineers Canada & CEAB",
    "difficulty": "Midterm Level",
    "question": "What is the role of the Canadian Engineering Accreditation Board (CEAB)?",
    "options": [
      "It accredits Canadian undergraduate engineering programs that meet the profession's education standards",
      "It licenses individual engineers in Quebec",
      "It sets engineering salaries",
      "It runs the IISE student chapters"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Through the CEAB, Engineers Canada accredits programs; graduates are deemed to have the academic qualifications for licensure.",
      "stepByStep": [
        "Licensing itself is done by provincial bodies such as the OIQ."
      ],
      "commonTrap": "Confusing accreditation of programs with licensing of people.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 36"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 36"
      }
    ]
  },
  {
    "id": "Q_INDU211_059",
    "courseId": "INDU211",
    "chapter": "ch1-2",
    "topic": "Engineers Canada",
    "difficulty": "Foundation",
    "question": "Engineers Canada is best described as:",
    "options": [
      "The national organization of the 12 provincial and territorial associations that regulate engineering",
      "The regulator of engineers in Quebec only",
      "A university",
      "An international IE society"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Its members are the regulatory associations; it delivers national programs for education standards and professional practice.",
      "stepByStep": [
        "In Quebec the regulator is the OIQ."
      ],
      "commonTrap": "Mixing it up with the OIQ or IISE.",
      "reference": "1.0.INDU_211_CH12_2025.pdf \u00b7 Page 35"
    },
    "source": [
      {
        "deck": "1.0.INDU_211_CH12_2025.pdf",
        "chapter": "Chapters 1 & 2 \u2014 Engineering & IE Foundations",
        "location": "Page 35"
      }
    ]
  },
  {
    "id": "Q_INDU211_060",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Scope of Manufacturing Engineering",
    "difficulty": "Foundation",
    "question": "Which task belongs to manufacturing engineering as defined in Chapter 3?",
    "options": [
      "Designing work-holding devices (jigs and fixtures) and selecting cutting speed and depth of cut",
      "Designing the product's marketing campaign",
      "Setting the company's stock price",
      "Recruiting sales staff"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Manufacturing engineering = designing the production process: manufacturability, process selection and parameters, tooling, jigs/fixtures, cost estimation, quality.",
      "stepByStep": [
        "It covers everything related to making the product."
      ],
      "commonTrap": "Confusing it with business functions.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_INDU211_061",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Product Design Role",
    "difficulty": "Foundation",
    "question": "In the product\u2013production design interaction, what does product design evaluate?",
    "options": [
      "The ability of the part to perform its function (size, shape, strength)",
      "The cost of producing the part",
      "The factory layout",
      "The shipping routes"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Product design uses physics and strength of materials to ensure function; manufacturing engineering evaluates production cost.",
      "stepByStep": [
        "The two interact from the very beginning."
      ],
      "commonTrap": "Assigning cost evaluation to the product designer.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_INDU211_062",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Concurrent Engineering in Industry",
    "difficulty": "Foundation",
    "question": "In which industry has concurrent engineering been applied most notably, according to Chapter 3?",
    "options": [
      "Aerospace",
      "Food service",
      "Retail",
      "Banking"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The slide notes concurrent engineering has been applied most notably in the aerospace industry.",
      "stepByStep": [
        "Its aim is to reduce time to market by integrating functions early."
      ],
      "commonTrap": "Guessing automotive \u2014 possible in practice, but not what the slide states.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_063",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Process Engineering Steps",
    "difficulty": "Midterm Level",
    "question": "Which list matches the elements of process engineering in Chapter 3?",
    "options": [
      "Product structure & specifications, component manufacturability, cost of each alternative process, operations sequence, documentation",
      "Marketing, sales, delivery, invoicing",
      "Only choosing a machine",
      "Hiring, training, payroll"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Process engineering designs the actual process used to manufacture the product.",
      "stepByStep": [
        "The BOM supports the product-structure step."
      ],
      "commonTrap": "Reducing it to machine selection only.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_INDU211_064",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Standardized Features",
    "difficulty": "Midterm Level",
    "question": "Why does Chapter 3 recommend standardized features (e.g. a hole size matching a commonly available drill size)?",
    "options": [
      "They improve component manufacturability and lower cost",
      "They make the part heavier",
      "They are required by law",
      "They increase the tolerance cost"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Manufacturability = relative ease of producing within tolerance. Tighter tolerances and non-standard features raise cost.",
      "stepByStep": [
        "Commonly available materials help for the same reason."
      ],
      "commonTrap": "Thinking custom features are always better.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_INDU211_065",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Fixed vs Variable Costs",
    "difficulty": "Foundation",
    "question": "Which item is a VARIABLE cost in the Chapter 3 cost\u2013volume model?",
    "options": [
      "Material used per unit",
      "Purchase of a machine",
      "Installation",
      "Jigs/fixtures"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Fixed: machine purchase, installation, jigs/fixtures, space occupied. Variable: material, labour, tools (per unit).",
      "stepByStep": [
        "Total cost Y = aX + b (a = variable cost per unit, b = fixed cost)."
      ],
      "commonTrap": "Counting jigs/fixtures as variable.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_INDU211_066",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Break-Even Example",
    "difficulty": "Foundation",
    "question": "Chapter 3 example: fixed cost $\\$28{,}000$, variable cost $\\$100$/unit, price $\\$200$/unit. What is the break-even volume?",
    "options": [
      "280 units",
      "140 units",
      "28 units",
      "560 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "BEP = FC / (p \u2212 v).",
      "stepByStep": [
        "28,000 / (200 \u2212 100) = 280 units."
      ],
      "commonTrap": "Dividing by the price only (140).",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_INDU211_067",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Interpreting the BEP",
    "difficulty": "Midterm Level",
    "question": "In the same example (BEP = 280 units), what should the company do if total estimated demand is below 280 units?",
    "options": [
      "Not set up the system, because the fixed cost cannot be recovered",
      "Set it up anyway to gain market share",
      "Double the price automatically",
      "Ignore the fixed cost"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Below the BEP, revenue never covers total cost.",
      "stepByStep": [
        "The slide: \"If estimated total demand is less than 280, the company should not set up the system.\""
      ],
      "commonTrap": "Assuming any sales volume is profitable.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_INDU211_068",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Process Choice at 10,000 Units",
    "difficulty": "Midterm Level",
    "question": "For processes A ($\\$110{,}000 + \\$2$/unit), B ($\\$80{,}000 + \\$4$/unit), C ($\\$75{,}000 + \\$5$/unit), which is cheapest at 10,000 units/year?",
    "options": [
      "B, with total cost $120,000",
      "A, with total cost $130,000",
      "C, with total cost $125,000",
      "All are equal"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Compute TC = FC + vQ for each process.",
      "stepByStep": [
        "A: 110,000 + 20,000 = 130,000.",
        "B: 80,000 + 40,000 = 120,000.",
        "C: 75,000 + 50,000 = 125,000."
      ],
      "commonTrap": "Choosing the lowest fixed cost (C) without computing totals.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_INDU211_069",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Minimum Selling Price",
    "difficulty": "Exam Master",
    "question": "In the same example, the slide says the selling price must be at least $12/unit when producing 10,000 units with process B. Why?",
    "options": [
      "Total cost of B at 10,000 units is $\\$120{,}000$, i.e. $\\$12$ per unit",
      "Variable cost of B is $12",
      "Fixed cost divided by 12 equals 10,000",
      "It is the price of process C"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Average cost per unit = TC / Q.",
      "stepByStep": [
        "120,000 / 10,000 = $12/unit."
      ],
      "commonTrap": "Using only the variable cost ($4).",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_INDU211_070",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Metal Bracket Alternatives",
    "difficulty": "Midterm Level",
    "question": "In the metal-bracket illustration, which process has a high set-up cost (dies, tooling) but a low production cost?",
    "options": [
      "Metal stamping and bending",
      "CNC machining",
      "3D printing",
      "Hand filing"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "CNC machining and 3D printing: high purchase and high production cost (slow cycle). Stamping: high set-up, low unit cost \u2192 best for high volume.",
      "stepByStep": [
        "This is the cost\u2013volume trade-off in action."
      ],
      "commonTrap": "Picking CNC because it is precise.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_INDU211_071",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Sequencing Principles",
    "difficulty": "Foundation",
    "question": "Which is a principle for determining the sequence of operations?",
    "options": [
      "Route the part along the shortest path without backtracking",
      "Maximize the number of machines each part visits",
      "Do finishing operations first",
      "Always change machines after each operation"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Principles: minimize material handling (no backtracking), no later operation harms earlier ones, do as many operations per machine as possible, ensure close tolerances.",
      "stepByStep": [
        "Fewer set-ups also help quality."
      ],
      "commonTrap": "Thinking more machine changes improve quality.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 18"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 18"
      }
    ]
  },
  {
    "id": "Q_INDU211_072",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Industrial Processes",
    "difficulty": "Foundation",
    "question": "Which of these is NOT in the Chapter 3 list of industrial processes?",
    "options": [
      "Photosynthesis",
      "Casting",
      "Metal forming",
      "3D printing (additive manufacturing)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Listed: refining and alloying, casting, metal forming, metal cutting, welding, assembly, finishing, 3D printing.",
      "stepByStep": [
        "Photosynthesis is not a manufacturing process."
      ],
      "commonTrap": "Forgetting that additive manufacturing is on the list.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 21"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 21"
      }
    ]
  },
  {
    "id": "Q_INDU211_073",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Refining vs Alloying",
    "difficulty": "Midterm Level",
    "question": "What is the difference between refining and alloying?",
    "options": [
      "Refining improves the usefulness of metal ore (e.g. iron ore \u2192 steel); alloying transforms metals (heat treating, combining metals) to improve hardness, strength, workability",
      "Refining combines metals; alloying removes impurities",
      "They are identical processes",
      "Alloying only applies to plastics"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Refining: blast furnace \u2192 steel mill. Alloying: metallurgical transformation because primary metals lack required properties.",
      "stepByStep": [
        "Different steels come from different furnace temperatures and compositions."
      ],
      "commonTrap": "Swapping the two definitions.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 21"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 21"
      }
    ]
  },
  {
    "id": "Q_INDU211_074",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Casting",
    "difficulty": "Foundation",
    "question": "What is casting, and when does Chapter 3 say sand casting becomes expensive?",
    "options": [
      "Pouring liquid metal into a mold to solidify into an approximate shape; sand casting is expensive for high production volumes (use permanent molds)",
      "Hammering metal repeatedly; expensive for small parts",
      "Cutting metal with a saw; expensive for thin parts",
      "Bonding two metals with heat; expensive for steel"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Mold design is critical in casting.",
      "stepByStep": [
        "Permanent molds suit high volume."
      ],
      "commonTrap": "Confusing casting with forging.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 23"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 23"
      }
    ]
  },
  {
    "id": "Q_INDU211_075",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Wire Drawing",
    "difficulty": "Foundation",
    "question": "Which metal-forming process reduces the cross-sectional diameter of a wire or rod by pulling it through a die?",
    "options": [
      "Wire drawing",
      "Extrusion",
      "Forging",
      "Rolling"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Wire drawing pulls the rod through a die; extrusion pushes metal through an opening.",
      "stepByStep": [
        "Both use a die, but the force direction differs."
      ],
      "commonTrap": "Choosing extrusion (pushing, not pulling).",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 24"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 24"
      }
    ]
  },
  {
    "id": "Q_INDU211_076",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Forging vs Extrusion",
    "difficulty": "Midterm Level",
    "question": "How does forging differ from extrusion?",
    "options": [
      "Forging applies single or intermittent applications of pressure (e.g. hammering a horseshoe); extrusion forces metal beyond its elastic limit through an opening",
      "Forging melts the metal; extrusion cuts it",
      "They are the same process",
      "Extrusion is intermittent hammering; forging is continuous pushing"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Forging: intermittent pressure. Extrusion: compress and force flow through a shaped opening.",
      "stepByStep": [
        "Both are metal-forming (pressure) processes."
      ],
      "commonTrap": "Reversing continuous and intermittent.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 27"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 27"
      }
    ]
  },
  {
    "id": "Q_INDU211_077",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Shaping vs Planing",
    "difficulty": "Midterm Level",
    "question": "In shaping and planing (metal cutting), which statement is correct?",
    "options": [
      "Shaping: the workpiece is stationary and the tool reciprocates; planing: the tool is stationary",
      "Shaping: the tool is stationary; planing: the workpiece is stationary",
      "Both use a rotating multi-tooth cutter",
      "Both are casting processes"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Surfaces are cut by a reciprocating action in both; what moves is different.",
      "stepByStep": [
        "Milling uses a revolving multi-tooth cutter."
      ],
      "commonTrap": "Swapping which part moves.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 30"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 30"
      }
    ]
  },
  {
    "id": "Q_INDU211_078",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Milling vs Broaching",
    "difficulty": "Midterm Level",
    "question": "What distinguishes broaching from milling?",
    "options": [
      "In broaching the cutting tool is pushed or pulled instead of revolved",
      "Broaching uses a revolving cutter with many teeth",
      "Milling does not remove metal",
      "Broaching is a welding process"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Milling: a revolving tool with many teeth takes intermittent, successive cuts. Broaching is similar but the tool is not revolved.",
      "stepByStep": [
        "Grinding removes small pieces to finish very hard metal."
      ],
      "commonTrap": "Assuming both rotate.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 31"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 31"
      }
    ]
  },
  {
    "id": "Q_INDU211_079",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Shearing",
    "difficulty": "Foundation",
    "question": "Which operation cuts metal by forcing it between two sharp edges (e.g. blanking, punching)?",
    "options": [
      "Shearing",
      "Turning",
      "Drilling",
      "Grinding"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Shearing: applying pressure and forcing the metal between two sharp edges \u2014 blanking, parting, punching, nibbling.",
      "stepByStep": [
        "Turning rotates the workpiece against a cutting tool."
      ],
      "commonTrap": "Choosing drilling because it makes holes like punching.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 29"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 29"
      }
    ]
  },
  {
    "id": "Q_INDU211_080",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Welding",
    "difficulty": "Foundation",
    "question": "According to Chapter 3, what is welding?",
    "options": [
      "Bonding two pieces of the same metal by applying heat, pressure or both",
      "Pouring liquid metal into a mold",
      "Removing metal with a revolving tool",
      "Forcing metal through a die"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Types listed: electric arc, resistance, beam, thermit, pressure, gas welding; brazing and soldering.",
      "stepByStep": [
        "Casting, milling and extrusion are other processes."
      ],
      "commonTrap": "Confusing welding with casting.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 32"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 32"
      }
    ]
  },
  {
    "id": "Q_INDU211_081",
    "courseId": "INDU211",
    "chapter": "ch3",
    "topic": "Ancillary Functions",
    "difficulty": "Midterm Level",
    "question": "Among the ancillary functions of manufacturing engineering, how does maintenance systems design treat machines?",
    "options": [
      "Preventive maintenance for exceptionally important machines; emergency maintenance for machines that occasionally break",
      "Emergency maintenance only",
      "No maintenance is planned",
      "Replace every machine yearly"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Ancillary functions: tool/jig/fixture design, cost estimating (material, labour, overhead), maintenance systems design, packaging systems.",
      "stepByStep": [
        "Packaging protects the product in transit."
      ],
      "commonTrap": "Applying the same maintenance policy to every machine.",
      "reference": "2.0.INDU_211_CH3_2025.pdf \u00b7 Page 34"
    },
    "source": [
      {
        "deck": "2.0.INDU_211_CH3_2025.pdf",
        "chapter": "Chapter 3 \u2014 Manufacturing Engineering",
        "location": "Page 34"
      }
    ]
  },
  {
    "id": "Q_INDU211_082",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Levels of Location Decisions",
    "difficulty": "Foundation",
    "question": "Chapter 4 separates facility location into:",
    "options": [
      "General location and exact site (long-term strategic), and internal location (facility layout, material handling)",
      "Only the building colour",
      "Daily scheduling decisions",
      "Only the choice of machines"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "External location uses investment and transportation costs with optimization models; internal location is the layout problem.",
      "stepByStep": [
        "It is team work: accountants, lawyers, marketing, executives, IEs."
      ],
      "commonTrap": "Treating location as a short-term decision.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_083",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Location Criteria",
    "difficulty": "Foundation",
    "question": "According to the location decision criteria, a steel mill is typically located near:",
    "options": [
      "Raw materials",
      "Its markets",
      "The coast only",
      "A university"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Location of markets (e.g. potato chips) vs raw materials (e.g. steel mill); also transportation, power, labour, laws, community, water.",
      "stepByStep": [
        "Heavy, bulky inputs favour locating near raw materials."
      ],
      "commonTrap": "Mixing up with potato chips (near markets).",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_INDU211_084",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Min-Max Objective",
    "difficulty": "Midterm Level",
    "question": "Which location objective is typical for public facilities (e.g. emergency services)?",
    "options": [
      "Minimize the maximum distance travelled",
      "Maximize total profit",
      "Minimize the number of facilities",
      "Maximize distance from customers"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Objectives: minimize a cost (distance) function, or minimize the maximum distance (public facilities).",
      "stepByStep": [
        "Emergency service location problems use this idea."
      ],
      "commonTrap": "Using a total-cost objective for fairness-driven public services.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_INDU211_085",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Choosing a Distance Measure",
    "difficulty": "Foundation",
    "question": "When is Euclidean (straight-line) distance appropriate rather than rectilinear?",
    "options": [
      "Intercity travel",
      "An urban street grid",
      "A factory floor with corridors",
      "Walking paths in a warehouse"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Euclidean \u2192 intercity travel. Rectilinear \u2192 urban grid, factory corridors, walk paths.",
      "stepByStep": [
        "Pick the metric that matches how travel actually happens."
      ],
      "commonTrap": "Using straight lines inside a building with corridors.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_INDU211_086",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Euclidean Distance",
    "difficulty": "Foundation",
    "question": "What is the Euclidean distance between (2, 3) and (8, 11)?",
    "options": [
      "10",
      "14",
      "8",
      "6"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$d = \\sqrt{(8-2)^2 + (11-3)^2}$.",
      "stepByStep": [
        "$\\sqrt{36 + 64} = \\sqrt{100} = 10$."
      ],
      "commonTrap": "Giving the rectilinear value (14).",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_INDU211_087",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Analytical Tools",
    "difficulty": "Foundation",
    "question": "Which analytical tools for locating facilities are listed in Chapter 4?",
    "options": [
      "Transportation method, center of gravity method, linear (mixed-integer) programming",
      "Gantt charts, PERT, CPM",
      "Break-even analysis only",
      "Time study and motion study"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Three tools on the slide.",
      "stepByStep": [
        "Gantt/PERT are project tools; time study belongs to work measurement."
      ],
      "commonTrap": "Listing Chapter 3 tools.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_INDU211_088",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Transportation Problem Setup",
    "difficulty": "Midterm Level",
    "question": "In the transportation method for facility location, what are the decision variables and goal?",
    "options": [
      "Units shipped from each source to each destination; minimize shipment cost (repeat for each candidate site)",
      "Number of factories; maximize distance",
      "Selling price; maximize revenue",
      "Number of workers; minimize wages"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Applicable to single-location, cost-minimization problems; the candidate with the lowest transportation cost is selected.",
      "stepByStep": [
        "Each candidate site is evaluated with its own transportation problem."
      ],
      "commonTrap": "Thinking the method chooses the site directly.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_INDU211_089",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Least-Cost Assignment Rule",
    "difficulty": "Foundation",
    "question": "In the least-cost assignment method, how is each allocation chosen?",
    "options": [
      "Select the smallest remaining unit cost and allocate as much as possible to meet demand or use up supply",
      "Allocate to the largest unit cost first",
      "Allocate equally to every cell",
      "Allocate in alphabetical order"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Repeat until all demand is met and supply used; ties may be broken arbitrarily.",
      "stepByStep": [
        "In Plain View, Huntsville\u2192Houston ($15) is filled first."
      ],
      "commonTrap": "Starting with the largest cost.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_INDU211_090",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "First Allocation",
    "difficulty": "Foundation",
    "question": "In the Plain View example, which cell does the least-cost method fill first?",
    "options": [
      "Huntsville \u2192 Houston ($15), 600 units",
      "Amarillo \u2192 Dallas ($21), 400 units",
      "Waco \u2192 San Antonio ($20), 300 units",
      "Amarillo \u2192 Houston ($42), 400 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The smallest unit cost in the table is $15.",
      "stepByStep": [
        "Huntsville supplies 600 \u2192 Houston still needs 200."
      ],
      "commonTrap": "Starting with the first row of the table.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_INDU211_091",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Balanced Transportation Problem",
    "difficulty": "Midterm Level",
    "question": "In the Plain View example with Huntsville added, total factory capacity equals total warehouse demand. What is it?",
    "options": [
      "2,000 units",
      "1,400 units",
      "2,600 units",
      "900 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Capacity: 400 + 1,000 + 600 = 2,000. Demand: 300 + 900 + 800 = 2,000.",
      "stepByStep": [
        "Without Huntsville, capacity (1,400) could not meet demand."
      ],
      "commonTrap": "Adding only two factories.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_INDU211_092",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Center of Gravity, Equal Quantities",
    "difficulty": "Midterm Level",
    "question": "Lecture example: D1 (2,2), D2 (3,5), D3 (5,4), D4 (8,5) with EQUAL shipments. Where is the center of gravity?",
    "options": [
      "(4.5, 4.0)",
      "(3.05, 3.70)",
      "(4.0, 4.5)",
      "(5.0, 4.0)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Equal quantities \u2192 simple averages.",
      "stepByStep": [
        "x\u0304 = (2 + 3 + 5 + 8)/4 = 4.5.",
        "\u0233 = (2 + 5 + 4 + 5)/4 = 4.0."
      ],
      "commonTrap": "Using the weighted result (3.05, 3.70) from the unequal case.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_INDU211_093",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Center of Gravity Purpose",
    "difficulty": "Foundation",
    "question": "In the blood-bank example, the center-of-gravity method treats distribution cost as a function of:",
    "options": [
      "Distance and quantity shipped",
      "Building height",
      "Number of employees",
      "Selling price"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "It finds a location minimizing distribution cost to destinations (hospitals), using rectilinear distances in an urban setting.",
      "stepByStep": [
        "Heavier destinations pull the location toward them."
      ],
      "commonTrap": "Ignoring quantities.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_INDU211_094",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Other Location Problems",
    "difficulty": "Foundation",
    "question": "Which of the following is listed among \"other location problems\"?",
    "options": [
      "Hub location and quadratic assignment problems",
      "Break-even problems",
      "Bill-of-material problems",
      "Jig and fixture problems"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Listed: hub location, min-max, emergency service facility location, quadratic assignment; balancing one-time investment vs transportation cost.",
      "stepByStep": [
        "The others belong to Chapter 3."
      ],
      "commonTrap": "Choosing a Chapter 3 topic.",
      "reference": "3.0.INDU_211_CH4_1-2025.pdf \u00b7 Page 23"
    },
    "source": [
      {
        "deck": "3.0.INDU_211_CH4_1-2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 23"
      }
    ]
  },
  {
    "id": "Q_INDU211_095",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Layout Solution Methods",
    "difficulty": "Foundation",
    "question": "According to Chapter 4 Part 2, which approaches are used for a systematic layout solution?",
    "options": [
      "Templates, computer simulation, optimization",
      "Guessing and trial only",
      "Break-even charts",
      "Transportation tables"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Facility layout = internal location problem (strategic, tactical or operational).",
      "stepByStep": [
        "Templates, simulation and optimization are the three methods listed."
      ],
      "commonTrap": "Using the location tools instead.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_INDU211_096",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Need for Layout Decisions",
    "difficulty": "Midterm Level",
    "question": "Which is listed as a reason a new layout decision may be needed?",
    "options": [
      "Changes in the volume of output or the mix of products",
      "A change in company logo",
      "A new CEO's preference only",
      "Lower interest rates"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Reasons: inefficient operations, high cost, bottlenecks, accidents/safety hazards, new products, design changes, volume/mix changes, method/equipment changes, environmental/legal changes, morale problems.",
      "stepByStep": [
        "Layouts must follow the production reality."
      ],
      "commonTrap": "Picking a cosmetic change.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_097",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Layout Constraints",
    "difficulty": "Foundation",
    "question": "According to the facility layout decision slide, layout alternatives are limited by:",
    "options": [
      "The amount and type of space required and available",
      "The colour of the machines",
      "The number of shareholders",
      "The product price"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Layout affects flow, productivity, costs (construction, installation, material handling), expansion, downtime, storage, safety, supervision.",
      "stepByStep": [
        "Space is the binding constraint."
      ],
      "commonTrap": "Thinking layouts are unconstrained.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_INDU211_098",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Product Layout Examples",
    "difficulty": "Foundation",
    "question": "Which facility is a typical product (line-flow / continuous) layout?",
    "options": [
      "A cement factory",
      "A hospital",
      "A machine shop",
      "A bank"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Product layout: mass production, large volume, continuous flow \u2014 paper mills, dairy, cement, automotive assembly.",
      "stepByStep": [
        "Hospitals, banks and machine shops are process layouts."
      ],
      "commonTrap": "Choosing a service facility with varied flows.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_INDU211_099",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Product Layout Advantages",
    "difficulty": "Midterm Level",
    "question": "Which is an ADVANTAGE of a product layout?",
    "options": [
      "Little operator skill is required and in-process inventory is small",
      "Very high flexibility for product changes",
      "Lower investment in machines",
      "Higher operator satisfaction"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Product layout advantages: smooth flow, small WIP, reduced production time and handling, little operator skill.",
      "stepByStep": [
        "Flexibility, lower investment and operator satisfaction are process-layout advantages."
      ],
      "commonTrap": "Mixing up the two advantage lists.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_INDU211_100",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Process Layout Advantages",
    "difficulty": "Midterm Level",
    "question": "Which is an ADVANTAGE of a process layout?",
    "options": [
      "Better machine utilization and a high degree of flexibility",
      "Small work-in-process inventory",
      "Cheap material handling",
      "Little operator skill needed"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Process layout advantages: better utilization, flexibility, lower machine investment, higher operator satisfaction.",
      "stepByStep": [
        "Its limitations: costly handling, harder planning, large WIP, higher skill."
      ],
      "commonTrap": "Choosing a product-layout advantage.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 15"
      }
    ]
  },
  {
    "id": "Q_INDU211_101",
    "courseId": "INDU211",
    "chapter": "ch4",
    "topic": "Mixed Layout",
    "difficulty": "Exam Master",
    "question": "In the automobile mixed-layout example, which layout is used for seat manufacturing in subassembly areas?",
    "options": [
      "Cellular layout",
      "Product layout",
      "Process layout",
      "Fixed-position layout"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Automobile: assembly line (product) for the body; process layout for support shops (welding, machining, painting, tool & die); cellular for subassemblies like seats.",
      "stepByStep": [
        "Smartphones: product layout for PCB lines, process for testing/repair, cellular for final assembly & customization."
      ],
      "commonTrap": "Assuming the whole plant uses one layout.",
      "reference": "4.0.INDU_211_CH4_2_2025.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "4.0.INDU_211_CH4_2_2025.pdf",
        "chapter": "Chapter 4 \u2014 Facilities Location & Layout",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_INDU211_102",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Industrial Trucks",
    "difficulty": "Foundation",
    "question": "Which material handling equipment suits varying paths and intermittent loads, e.g. in job shops?",
    "options": [
      "Industrial trucks",
      "Conveyors",
      "Elevators and lifts",
      "AS/RS"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Industrial trucks: varying paths, intermittent loads, job shops. Conveyors: fixed point to fixed point, constant rate.",
      "stepByStep": [
        "Match equipment to the flow pattern."
      ],
      "commonTrap": "Choosing conveyors for irregular flows.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_103",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Cranes and Hoists",
    "difficulty": "Foundation",
    "question": "Cranes and hoists are described in Chapter 5 as:",
    "options": [
      "Overhead lifting devices",
      "Driverless vehicles on predetermined paths",
      "Storage rack systems",
      "Gravity roller conveyors"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cranes and hoists lift overhead; containers and racks store bulk material and use space better.",
      "stepByStep": [
        "AGVs are driverless vehicles."
      ],
      "commonTrap": "Confusing cranes with AGVs.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_104",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Containers and Racks",
    "difficulty": "Foundation",
    "question": "What is the purpose of containers and racks as material handling equipment?",
    "options": [
      "Store and handle bulk material, and make better use of space",
      "Lift material vertically between floors",
      "Move material along a fixed path at a constant rate",
      "Guide vehicles automatically"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Containers and racks: storage and handling of bulk material; better space use.",
      "stepByStep": [
        "Elevators move material vertically."
      ],
      "commonTrap": "Confusing storage equipment with transport equipment.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_INDU211_105",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Elevators and Lifts",
    "difficulty": "Foundation",
    "question": "Which equipment vertically raises or lowers material and is fixed in location?",
    "options": [
      "Elevators and lifts",
      "Industrial trucks",
      "AGVs",
      "Conveyors"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Elevators and lifts: vertical movement, fixed location.",
      "stepByStep": [
        "Trucks and AGVs move horizontally along varying or predetermined paths."
      ],
      "commonTrap": "Picking a mobile device.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_INDU211_106",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Automatic Guided Vehicles",
    "difficulty": "Foundation",
    "question": "An AGV is:",
    "options": [
      "A driverless vehicle that follows predetermined paths",
      "A crane with a computer",
      "A manually driven forklift",
      "A gravity-fed bin"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "AGV = automatic guided vehicle.",
      "stepByStep": [
        "AS/RS combines racks, a computer control system and a crane."
      ],
      "commonTrap": "Confusing AGV with AS/RS.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_INDU211_107",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Planning Principle",
    "difficulty": "Foundation",
    "question": "The \"planning\" principle of materials handling says handling systems should be:",
    "options": [
      "Planned, not evolved",
      "Added only when problems appear",
      "Designed by the operators alone",
      "Avoided completely"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Principles: planning, systems, material flow, simplification, gravity, space utilization, unit size, automation, equipment selection, standardization, adaptability, maintenance, safety.",
      "stepByStep": [
        "Planning comes first."
      ],
      "commonTrap": "Letting handling \"evolve\" ad hoc.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_INDU211_108",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Gravity Principle",
    "difficulty": "Foundation",
    "question": "Gravity-feed bins and roller conveyors are examples of which materials-handling principle?",
    "options": [
      "Gravity",
      "Unit size",
      "Automation",
      "Standardization"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Use gravity to move material where possible.",
      "stepByStep": [
        "Powered conveyors would be automation."
      ],
      "commonTrap": "Choosing automation because conveyors are involved.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_INDU211_109",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Simplification Principle",
    "difficulty": "Midterm Level",
    "question": "Which principle of materials handling is associated with \"motion economy\"?",
    "options": [
      "Simplification",
      "Space utilization",
      "Maintenance",
      "Safety"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Simplification: reduce, combine or eliminate unnecessary movement (motion economy).",
      "stepByStep": [
        "Material flow: keep flow smooth."
      ],
      "commonTrap": "Picking space utilization.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_INDU211_110",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Standardization Principle",
    "difficulty": "Foundation",
    "question": "Using standard-sized pallets and stacking patterns applies which principle?",
    "options": [
      "Standardization",
      "Unit size",
      "Gravity",
      "Adaptability"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Standardization: standard pallets and stacking patterns. Unit size: largest accumulated load.",
      "stepByStep": [
        "Both may involve pallets \u2014 the idea differs."
      ],
      "commonTrap": "Confusing it with unit size.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_INDU211_111",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Adaptability Principle",
    "difficulty": "Midterm Level",
    "question": "Variable-speed conveyors that can perform a variety of tasks illustrate which principle?",
    "options": [
      "Adaptability",
      "Planning",
      "Gravity",
      "Safety"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Adaptability: equipment able to perform a variety of tasks.",
      "stepByStep": [
        "Automation would be powered conveyors and automatic pallet stackers."
      ],
      "commonTrap": "Choosing automation.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_INDU211_112",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Automation Principle",
    "difficulty": "Foundation",
    "question": "Powered conveyors and automatic pallet stackers are examples of which principle?",
    "options": [
      "Automation",
      "Gravity",
      "Standardization",
      "Simplification"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Automation principle.",
      "stepByStep": [
        "Equipment selection is based on all aspects of material and layout."
      ],
      "commonTrap": "Choosing gravity.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_INDU211_113",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Maintenance & Safety Principles",
    "difficulty": "Foundation",
    "question": "Which pair appears in the list of materials-handling principles?",
    "options": [
      "Maintenance (preventive and emergency) and safety (of the operator)",
      "Marketing and sales",
      "Break-even and pricing",
      "Forecasting and budgeting"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The final principles: maintenance planning and operator safety.",
      "stepByStep": [
        "The others are unrelated business topics."
      ],
      "commonTrap": "Choosing Chapter 3 or planning topics.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_INDU211_114",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "TSP Definition",
    "difficulty": "Foundation",
    "question": "In Chapter 5 Example 1, the travelling salesman problem asks the truck to:",
    "options": [
      "Start at the plant, visit every warehouse once, and return, minimizing total distance",
      "Visit only the nearest warehouse",
      "Deliver with several trucks under capacity limits",
      "Maximize the distance travelled"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "TSP: one truck can supply all warehouses; minimize the tour length.",
      "stepByStep": [
        "Several capacity-limited trucks \u2192 VRP."
      ],
      "commonTrap": "Confusing TSP with VRP.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_INDU211_115",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Why Heuristics",
    "difficulty": "Midterm Level",
    "question": "Why are heuristics such as the Nearest Neighbor method used for the TSP?",
    "options": [
      "The TSP is very difficult to solve optimally when the problem is large",
      "Heuristics always give the optimal route",
      "The TSP has no feasible solutions",
      "Computers cannot store distance matrices"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Optimization or heuristic methods; NN gives a feasible route quickly.",
      "stepByStep": [
        "In Example 1, NN gives 64 vs the optimum 60."
      ],
      "commonTrap": "Believing heuristics are exact.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_INDU211_116",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Heuristic Gap",
    "difficulty": "Exam Master",
    "question": "In Example 1, Nearest Neighbor gives 64 and the optimal route gives 60. How far above the optimum is the NN route?",
    "options": [
      "About 6.7%",
      "About 4%",
      "About 10%",
      "0%"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Gap = (heuristic \u2212 optimal)/optimal.",
      "stepByStep": [
        "(64 \u2212 60)/60 = 0.0667 \u2192 6.7%."
      ],
      "commonTrap": "Dividing by 64 instead of 60 (6.25%).",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_INDU211_117",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Nearest Neighbor Tie-Break",
    "difficulty": "Midterm Level",
    "question": "In Example 1, if the truck goes to G (not B) when E\u2192B and E\u2192G tie at 9, what is the Nearest Neighbor route length?",
    "codeSnippet": "      A   B   C   D   E   F   G\nA     -  14  21  20   6  24   9\nB    14   -  10   9   9  10  11\nC    21  10   -   1  15   9  21\nD    20   9   1   -  14   9  20\nE     6   9  15  14   -  19   9\nF    24  10   9   9  19   -  21\nG     9  11  21  20   9  21   -",
    "options": [
      "69",
      "64",
      "60",
      "72"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Route A-E-G-B-D-C-F-A.",
      "stepByStep": [
        "6 + 9 + 11 + 9 + 1 + 9 + 24 = 69."
      ],
      "commonTrap": "Forgetting the return leg F\u2192A (24).",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_INDU211_118",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Savings Calculation",
    "difficulty": "Midterm Level",
    "question": "Using the Example 2 distance matrix with depot A, what is the Clark-Wright saving for linking C and F?",
    "codeSnippet": "      A   B   C   D   E   F   G\nA     -  14  21  20   6  24   9\nB    14   -  10   9   9  10  11\nC    21  10   -   1  15   9  21\nD    20   9   1   -  14   9  20\nE     6   9  15  14   -  19   9\nF    24  10   9   9  19   -  21\nG     9  11  21  20   9  21   -",
    "options": [
      "36",
      "45",
      "9",
      "30"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "$s_{CF} = d_{AC} + d_{AF} - d_{CF}$.",
      "stepByStep": [
        "21 + 24 \u2212 9 = 36."
      ],
      "commonTrap": "Forgetting to subtract $d_{CF}$ (45).",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_INDU211_119",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Clark-Wright Steps",
    "difficulty": "Foundation",
    "question": "What is the correct order of the Clark-Wright procedure?",
    "options": [
      "Initial routes \u2192 compute pairing savings \u2192 rank savings descending \u2192 add links while capacity and feasibility hold",
      "Rank distances ascending \u2192 pick the shortest edge \u2192 stop",
      "Choose a random route \u2192 improve by swapping",
      "Assign each stop its own truck and stop"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Stops are added from the top of the ranked list until no more can be added (capacity, feasibility, all destinations visited).",
      "stepByStep": [
        "It starts from one route per stop (depot\u2013stop\u2013depot)."
      ],
      "commonTrap": "Ranking by distance instead of savings.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_INDU211_120",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Final Routes",
    "difficulty": "Exam Master",
    "question": "What total distance do the two Clark-Wright routes in Example 2 give?",
    "options": [
      "89 (i.e. 8,900 miles)",
      "60",
      "64",
      "120"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Routes: Depot\u2013F\u2013C\u2013D\u2013Depot and Depot\u2013E\u2013B\u2013G\u2013Depot.",
      "stepByStep": [
        "24 + 9 + 1 + 20 + 6 + 9 + 11 + 9 = 89."
      ],
      "commonTrap": "Adding only one route.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 21"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 21"
      }
    ]
  },
  {
    "id": "Q_INDU211_121",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Route Loads",
    "difficulty": "Midterm Level",
    "question": "In the final Clark-Wright solution, what is the load of the route Depot\u2013E\u2013B\u2013G\u2013Depot?",
    "options": [
      "19,000 units",
      "23,000 units",
      "25,000 units",
      "15,000 units"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "E 4,000 + B 5,000 + G 10,000.",
      "stepByStep": [
        "= 19,000 \u2264 25,000."
      ],
      "commonTrap": "Using the other route (23,000).",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 21"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 21"
      }
    ]
  },
  {
    "id": "Q_INDU211_122",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Minimum Number of Trucks",
    "difficulty": "Midterm Level",
    "question": "Example 2: total demand is 42,000 units and each truck carries 25,000. What is the minimum number of trucks?",
    "options": [
      "2",
      "1",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Minimum trucks = \u2308total demand / capacity\u2309.",
      "stepByStep": [
        "\u230842,000 / 25,000\u2309 = \u23081.68\u2309 = 2."
      ],
      "commonTrap": "Using one truck per warehouse (6).",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_INDU211_123",
    "courseId": "INDU211",
    "chapter": "ch5",
    "topic": "Solving TSP/VRP in Practice",
    "difficulty": "Foundation",
    "question": "What does Chapter 5 conclude about solving TSP and VRP problems?",
    "options": [
      "They are easy to formulate but very hard to solve optimally; simple methods can find good solutions",
      "They are always solved optimally by hand",
      "They cannot be formulated mathematically",
      "Only one version of each problem exists"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Many extended versions exist; practical solutions rely on simple heuristic methods.",
      "stepByStep": [
        "Nearest Neighbor (TSP) and Clark-Wright (VRP)."
      ],
      "commonTrap": "Assuming optimality is easy.",
      "reference": "5.0.INDU_211_CH5_2025.pdf \u00b7 Page 22"
    },
    "source": [
      {
        "deck": "5.0.INDU_211_CH5_2025.pdf",
        "chapter": "Chapter 5 \u2014 Material Handling & Routing",
        "location": "Page 22"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 6"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 5"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 5"
      }
    ]
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
      "reference": "introduction.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 4"
      }
    ]
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
      "reference": "extended_outline_introduction.txt (Course lecture outline) \u00b7 Line 24"
    },
    "source": [
      {
        "deck": "extended_outline_introduction.txt (Course lecture outline)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 24"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 2"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 3"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 2"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Pages 2\u20133"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Pages 2\u20133"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 3"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 5"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 6"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 7"
      }
    ]
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
      "reference": "variable_types1.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 7"
      }
    ]
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
      "reference": "variable_types2.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 1"
      }
    ]
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
      "reference": "variable_types2.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 3"
      }
    ]
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
      "reference": "variable_types2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 6"
      }
    ]
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
      "reference": "variable_types2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 6"
      }
    ]
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
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 66"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 66"
      }
    ]
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
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 88"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 88"
      }
    ]
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
      "reference": "expressions_operators_topics.txt (Expressions & operators lecture outline) \u00b7 Line 12"
    },
    "source": [
      {
        "deck": "expressions_operators_topics.txt (Expressions & operators lecture outline)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 12"
      }
    ]
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
      "reference": "expressions_operators_topics.txt (Expressions & operators lecture outline) \u00b7 Line 12"
    },
    "source": [
      {
        "deck": "expressions_operators_topics.txt (Expressions & operators lecture outline)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 12"
      }
    ]
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
      "reference": "expressions_operators_topics.txt (Expressions & operators lecture outline) \u00b7 Line 19"
    },
    "source": [
      {
        "deck": "expressions_operators_topics.txt (Expressions & operators lecture outline)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 19"
      }
    ]
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
      "reference": "expressions_operators_topics.txt (Expressions & operators lecture outline) \u00b7 Line 16"
    },
    "source": [
      {
        "deck": "expressions_operators_topics.txt (Expressions & operators lecture outline)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 16"
      }
    ]
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
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 52"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 52"
      }
    ]
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
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 120"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 120"
      }
    ]
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
      "reference": "expressions_operators_topics.txt (Expressions & operators lecture outline) \u00b7 Line 8"
    },
    "source": [
      {
        "deck": "expressions_operators_topics.txt (Expressions & operators lecture outline)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 8"
      }
    ]
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
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 136"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 136"
      }
    ]
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
      "reference": "control_statements1.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 3"
      }
    ]
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
      "reference": "control_statements1.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 4"
      }
    ]
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
      "reference": "control_statements1_part2.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 3"
      }
    ]
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
      "reference": "control_statements1_part2.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 4"
      }
    ]
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
      "reference": "control_statements1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 1"
      }
    ]
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
      "reference": "control_statements1.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 8"
      }
    ]
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
      "reference": "control_statements1_part2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 6"
      }
    ]
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
      "reference": "control_statements1_part2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 6"
      }
    ]
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
      "reference": "control_statements1_part2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 6"
      }
    ]
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
      "reference": "control_statements1_part2.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_042",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Course Objectives",
    "difficulty": "Foundation",
    "question": "Which of the following is NOT one of the MIAE 215 objectives on the introduction slide?",
    "options": [
      "Designing mechanical gearboxes",
      "Developing C++ programs and algorithms",
      "Solving engineering problems using C++",
      "Introduction to microcontroller (Arduino) programming"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Objectives: develop C++ programs and algorithms, solve engineering problems with C++, use a C++ compiler effectively, intro to microcontroller programming.",
      "stepByStep": [
        "Gearbox design belongs to other mechanical courses."
      ],
      "commonTrap": "Assuming every mechanical topic is covered.",
      "reference": "introduction.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE215_043",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Why Programming",
    "difficulty": "Foundation",
    "question": "Complete the slide: \"Programming is the language of\u2026\"",
    "options": [
      "automation",
      "mathematics",
      "hardware",
      "marketing"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Programming is very useful in industry and engineering (analysis, automation).",
      "stepByStep": [
        "Many well-paying Mech/Indu/Aero jobs require programming skills."
      ],
      "commonTrap": "Picking mathematics.",
      "reference": "introduction.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE215_044",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "MIAE Applications",
    "difficulty": "Foundation",
    "question": "On the \"Important MIAE Applications\" slide, the finite element method is an example of:",
    "options": [
      "Numerical analysis",
      "Instrumentation and measurement",
      "Automation",
      "Video games"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Applications: numerical analysis (FEM), simulation, optimization, automation, robotics/control, instrumentation and measurement.",
      "stepByStep": [
        "FEM is a numerical method."
      ],
      "commonTrap": "Choosing simulation, which is a separate item.",
      "reference": "introduction.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE215_045",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Languages Similar to C++",
    "difficulty": "Foundation",
    "question": "Why does the slide say other languages become easy once you learn C++?",
    "options": [
      "Many other languages (Java, JavaScript, etc.) have similar syntax",
      "C++ automatically converts itself to other languages",
      "Other languages are subsets of C++",
      "Other languages do not need compiling"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C++ is harder to learn, but its syntax carries over.",
      "stepByStep": [
        "Handwritten note on the slide: \"if you learn C++, other languages are easy\"."
      ],
      "commonTrap": "Believing C++ is the easiest language.",
      "reference": "introduction.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE215_046",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Computer Program",
    "difficulty": "Foundation",
    "question": "According to the Basics of Computing slide, a computer program is:",
    "options": [
      "A sequence of instructions for the computer, often referred to as software",
      "The CPU and memory",
      "Only the operating system",
      "A physical input device"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Computer = hardware (CPU, memory, I/O). Program = software (a sequence of instructions).",
      "stepByStep": [
        "The OS is a special program that manages the other programs."
      ],
      "commonTrap": "Confusing software with hardware.",
      "reference": "introduction.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE215_047",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Programming Language",
    "difficulty": "Foundation",
    "question": "What is a programming language, according to the introduction slides?",
    "options": [
      "A system that lets humans give written instructions that are then translated into a form the computer can use (machine language)",
      "The 1s and 0s the processor runs",
      "An operating system",
      "A type of computer memory"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Human-readable instructions \u2192 translated \u2192 machine language (1s and 0s).",
      "stepByStep": [
        "Translation is done by a compiler or an interpreter."
      ],
      "commonTrap": "Calling machine code itself the programming language.",
      "reference": "introduction.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_048",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Compiled Languages",
    "difficulty": "Foundation",
    "question": "Which languages does the slide list as translated by a compiler \"all at once\"?",
    "options": [
      "C, C++ and Fortran",
      "Python and MATLAB",
      "HTML and CSS",
      "Only Python"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Compiler: C, C++, Fortran \u2192 machine language all at once. Interpreter: Python, MATLAB \u2192 one instruction at a time.",
      "stepByStep": [
        "Interpreters are slower but flexible."
      ],
      "commonTrap": "Listing interpreted languages.",
      "reference": "introduction.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_049",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Interpreters",
    "difficulty": "Midterm Level",
    "question": "What trade-off does the slide give for interpreted languages such as Python and MATLAB?",
    "options": [
      "Slow but flexible",
      "Fast but inflexible",
      "Fast and flexible",
      "They cannot run programs"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Interpreters translate one instruction at a time using interpreter software.",
      "stepByStep": [
        "C++ is compiled, which is part of why it is fast."
      ],
      "commonTrap": "Assuming interpreted means faster.",
      "reference": "introduction.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_050",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Source File Types",
    "difficulty": "Foundation",
    "question": "In the C++ build process diagram, which file types does the editor produce?",
    "options": [
      "*.cpp and *.h (source/text files)",
      "*.obj",
      "*.exe",
      "*.lib"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Editor \u2192 .cpp/.h; compiler \u2192 .obj; libraries \u2192 .lib; linker \u2192 .exe.",
      "stepByStep": [
        "Source files are plain text."
      ],
      "commonTrap": "Confusing source files with the executable.",
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_051",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Object and Library Files",
    "difficulty": "Midterm Level",
    "question": "Which two kinds of files does the linker combine to make the executable?",
    "options": [
      "Object files (*.obj) and library files (*.lib)",
      "Source files (*.cpp) and header files (*.h)",
      "Two executables (*.exe)",
      "Text files and images"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The compiler turns source into .obj files; the linker joins them with .lib library files into the .exe.",
      "stepByStep": [
        "The .exe is then loaded into RAM and executed."
      ],
      "commonTrap": "Thinking the linker reads .cpp files directly.",
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_052",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Test, Debug, Optimize",
    "difficulty": "Foundation",
    "question": "What is the purpose of phase 6, \"Test, Debug, Optimize\"?",
    "options": [
      "To find and remove errors (bugs) and improve the program",
      "To type the program",
      "To translate text into machine language",
      "To load the program into memory"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Edit \u2192 Preprocess \u2192 Compile \u2192 Link \u2192 Execute \u2192 Test/Debug/Optimize.",
      "stepByStep": [
        "Debugging = removing errors/bugs."
      ],
      "commonTrap": "Confusing debugging with compiling.",
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_053",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Execution",
    "difficulty": "Foundation",
    "question": "During the Execute phase, what happens to the .exe file?",
    "options": [
      "It is loaded from disk into computer memory (RAM) and run by the processor",
      "It is converted back into .cpp",
      "It is sent to the linker",
      "It is deleted"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Load program: disk \u2192 RAM \u2192 processor.",
      "stepByStep": [
        "Execute is phase 5."
      ],
      "commonTrap": "Thinking the program runs directly from the source code.",
      "reference": "introduction.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "introduction.pdf",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_054",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Comments",
    "difficulty": "Foundation",
    "question": "In the teacher's lesson2.cpp, what are // comments used for?",
    "options": [
      "Documentation, and intentionally disabling parts of the program \u2014 they are not compiled",
      "Printing text to the screen",
      "Including libraries",
      "Ending a program line"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Comments are ignored by the compiler.",
      "stepByStep": [
        "Commenting out code is a handy way to test."
      ],
      "commonTrap": "Thinking comments are executed.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 4"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 4"
      }
    ]
  },
  {
    "id": "Q_MIAE215_055",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "#include and Header Files",
    "difficulty": "Foundation",
    "question": "What does an #include statement do, according to lesson2.cpp?",
    "options": [
      "It lets you use a built-in C++ library (e.g. iostream for console I/O); include files are called header files",
      "It declares a variable",
      "It starts the main function",
      "It pauses the program"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "#include <iostream> \u2192 console input/output; #include <cmath> \u2192 math functions like sin(x).",
      "stepByStep": [
        "Include statements go at the top of the program."
      ],
      "commonTrap": "Confusing #include with variable declarations.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 11"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 11"
      }
    ]
  },
  {
    "id": "Q_MIAE215_056",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "cmath Library",
    "difficulty": "Foundation",
    "question": "Which header must be included to use math functions such as sin(x)?",
    "options": [
      "<cmath>",
      "<iostream>",
      "<cstdio>",
      "<string>"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "<cmath> gives math functions; <iostream> gives cout/cin; <cstdio> is needed for getchar().",
      "stepByStep": [
        "Each library adds different built-in functions."
      ],
      "commonTrap": "Choosing <iostream> because it is always included.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 16"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 16"
      }
    ]
  },
  {
    "id": "Q_MIAE215_057",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "The main Function",
    "difficulty": "Foundation",
    "question": "What role does main() play in a C++ program?",
    "options": [
      "It is the starting point of the program; all C++ programs have one",
      "It is an optional comment",
      "It includes libraries",
      "It ends the program early"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Execution begins at main() and proceeds sequentially one line at a time until the end of main.",
      "stepByStep": [
        "The braces { } mark its beginning and end."
      ],
      "commonTrap": "Thinking a program can start anywhere.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 29"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 29"
      }
    ]
  },
  {
    "id": "Q_MIAE215_058",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "cout and <<",
    "difficulty": "Foundation",
    "question": "In cout << \"hello world\"; what is <<?",
    "options": [
      "The insertion operator, which sends text to the console output",
      "A comparison operator",
      "The extraction operator used for keyboard input",
      "A comment marker"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "cout = console output; << inserts what follows into the output stream.",
      "stepByStep": [
        "cin uses >> in the opposite direction for input."
      ],
      "commonTrap": "Mixing up << (output) and >> (input).",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 44"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 44"
      }
    ]
  },
  {
    "id": "Q_MIAE215_059",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Semicolons",
    "difficulty": "Foundation",
    "question": "According to lesson2.cpp, how does C++ know where a program line ends?",
    "options": [
      "Every program line ends with a semicolon ;",
      "At the end of each text line",
      "After every space",
      "When a comment appears"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C++ ignores blank/white space (except inside quotes); the semicolon marks the end of a statement.",
      "stepByStep": [
        "One statement can span several text lines."
      ],
      "commonTrap": "Assuming a new line ends a statement.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 47"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 47"
      }
    ]
  },
  {
    "id": "Q_MIAE215_060",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Case Sensitivity",
    "difficulty": "Foundation",
    "question": "Why does COUT << \"hi\"; fail to compile?",
    "options": [
      "C++ is case sensitive, so COUT is not the same as cout",
      "COUT needs a semicolon before it",
      "Text must use single quotes",
      "Programs cannot print text"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "C++ distinguishes upper and lower case in names and keywords.",
      "stepByStep": [
        "Variable names are case-sensitive too."
      ],
      "commonTrap": "Thinking capitalization does not matter.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 54"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 54"
      }
    ]
  },
  {
    "id": "Q_MIAE215_061",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "White Space",
    "difficulty": "Midterm Level",
    "question": "How does the compiler treat extra spaces and line breaks in a statement?",
    "options": [
      "It ignores blank/white space, except inside quotes \"\"",
      "Every extra space causes an error",
      "Spaces are printed to the screen",
      "Line breaks end the statement"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The semicolon, not the line layout, ends a statement.",
      "stepByStep": [
        "cout << \"a\" <<   \"b\"; works the same across several lines."
      ],
      "commonTrap": "Forgetting that spaces inside quotes are kept.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 58"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 58"
      }
    ]
  },
  {
    "id": "Q_MIAE215_062",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Control Characters",
    "difficulty": "Foundation",
    "question": "What do \\n and \\t do inside a cout string?",
    "options": [
      "\\n starts a new line; \\t inserts a tab",
      "\\n inserts a tab; \\t starts a new line",
      "Both end the program",
      "They are printed literally as \\n and \\t"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "They are control characters within text.",
      "stepByStep": [
        "cout << \"\\nyour text1\\n\"; prints on new lines."
      ],
      "commonTrap": "Swapping the two.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 52"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 52"
      }
    ]
  },
  {
    "id": "Q_MIAE215_063",
    "courseId": "MIAE215",
    "chapter": "intro",
    "topic": "Sequential Execution",
    "difficulty": "Midterm Level",
    "question": "How is a C++ program executed, according to the teacher's notes?",
    "options": [
      "Sequentially, one line at a time, from the start to the end of main",
      "All lines at the same time",
      "Starting from the last line",
      "Randomly"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Each line uses the current values of variables at that point.",
      "stepByStep": [
        "This is why x = 2*x + 1 is not a math equation."
      ],
      "commonTrap": "Treating a program like a set of simultaneous equations.",
      "reference": "lesson2.cpp (Mini-course Lesson 2) \u00b7 Line 36"
    },
    "source": [
      {
        "deck": "lesson2.cpp (Mini-course Lesson 2)",
        "chapter": "Topic 1 \u2014 Computing Basics & Build Process",
        "location": "Line 36"
      }
    ]
  },
  {
    "id": "Q_MIAE215_064",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Declaring Variables",
    "difficulty": "Foundation",
    "question": "What is the correct syntax to declare an integer variable x?",
    "options": [
      "int x;",
      "x int;",
      "integer x;",
      "x = int;"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Syntax: [variable type] [variable name]; \u2014 a variable must be declared before it is used.",
      "stepByStep": [
        "Variables are normally declared at the beginning of the program."
      ],
      "commonTrap": "Writing the name before the type.",
      "reference": "variable_types1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE215_065",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "int Range",
    "difficulty": "Foundation",
    "question": "What is the range of a 4-byte int on a 32/64-bit CPU?",
    "options": [
      "\u22122147483648 to 2147483647",
      "\u2212128 to 127",
      "0 to 4294967295",
      "\u221232768 to 32767"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "int holds negative, positive and zero integers (2 or 4 bytes).",
      "stepByStep": [
        "\u2212128..127 is char; 0..4294967295 is unsigned int; \u221232768..32767 is short int."
      ],
      "commonTrap": "Mixing up the ranges of different types.",
      "reference": "variable_types1.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE215_066",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "float Precision",
    "difficulty": "Foundation",
    "question": "How many bytes and digits of precision does a float have, according to the slides?",
    "options": [
      "4 bytes, about 8 digits",
      "8 bytes, about 16 digits",
      "2 bytes, about 4 digits",
      "1 byte, about 3 digits"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "float: single precision (4 bytes, ~8 digits). double: double precision (8 bytes, ~16 digits).",
      "stepByStep": [
        "Use double for engineering calculations."
      ],
      "commonTrap": "Swapping float and double.",
      "reference": "variable_types1.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE215_067",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "double Range",
    "difficulty": "Foundation",
    "question": "What is the range of a double on 32/64-bit processors?",
    "options": [
      "2.3e-308 to 1.7e+308",
      "1.2e-38 to 3.4e+38",
      "\u22122147483648 to 2147483647",
      "0 to 255"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "double: 8 bytes, ~16 digits, range 2.3e-308 to 1.7e+308.",
      "stepByStep": [
        "float: 1.2e-38 to 3.4e+38."
      ],
      "commonTrap": "Using the float range.",
      "reference": "variable_types1.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE215_068",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Scientific Notation",
    "difficulty": "Foundation",
    "question": "In C++, what does the constant 1.0e-38 mean?",
    "options": [
      "1.0 \u00d7 10\u207b\u00b3\u2078",
      "1.0 \u2212 38",
      "e (2.718) to the power \u221238",
      "1.0 \u00d7 38"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The e stands for \"times ten to the power\", as annotated on the float slide.",
      "stepByStep": [
        "1.7e308 = 1.7 \u00d7 10\u00b3\u2070\u2078."
      ],
      "commonTrap": "Reading e as Euler's number.",
      "reference": "variable_types1.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE215_069",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Integer Division Rounding",
    "difficulty": "Foundation",
    "question": "With int z; what is stored by z = 1/3; ?",
    "options": [
      "0",
      "0.333",
      "1",
      "An exception"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Typical int error (d): rounding down during integer division.",
      "stepByStep": [
        "1/3 = 0.333\u2026 \u2192 0."
      ],
      "commonTrap": "Expecting a fraction in an int.",
      "reference": "variable_types1.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE215_070",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "char Range",
    "difficulty": "Foundation",
    "question": "According to the slides, what is the range of a char (1 byte on most processors)?",
    "options": [
      "\u2212128 to 127",
      "0 to 255",
      "\u221232768 to 32767",
      "0 to 65535"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A char holds a single character; the range shown is its int equivalent.",
      "stepByStep": [
        "unsigned char is 0 to 255."
      ],
      "commonTrap": "Using the unsigned range.",
      "reference": "variable_types1.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE215_071",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Printing a bool",
    "difficulty": "Midterm Level",
    "question": "What does this print?",
    "codeSnippet": "bool b1, b2 = false;\nb1 = true;\ncout << \"\\nb1 = \" << b1 << \" , b2 = \" << b2;",
    "options": [
      "b1 = 1 , b2 = 0",
      "b1 = true , b2 = false",
      "b1 = 0 , b2 = 1",
      "Nothing; bools cannot be printed"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A bool is a binary/logical variable: true is stored and printed as 1, false as 0 (see the slide annotations).",
      "stepByStep": [
        "bool = boolean."
      ],
      "commonTrap": "Expecting the words true/false.",
      "reference": "variable_types1.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_072",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Ways to Set a Variable",
    "difficulty": "Foundation",
    "question": "Which is NOT listed on the slide as a way to initialize/set a variable?",
    "options": [
      "From the compiler's default value (variables start at 0 automatically)",
      "During declaration: int x = 1;",
      "From the keyboard: cin >> y;",
      "From an expression: y = x + 1;"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Listed: during declaration, from expressions, from the keyboard, from functions, from files.",
      "stepByStep": [
        "Uninitialized variables hold garbage, not 0."
      ],
      "commonTrap": "Believing C++ sets variables to 0 for you.",
      "reference": "variable_types1.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "variable_types1.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_073",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Characters as Integers",
    "difficulty": "Midterm Level",
    "question": "What value is stored in z?",
    "codeSnippet": "char ch = 'a';\nint z;\nz = (int)ch;",
    "options": [
      "97 (the ASCII code of 'a')",
      "'a'",
      "0",
      "1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Character constants convert to specific integers from the ASCII standard; (int)ch gives the integer equivalent.",
      "stepByStep": [
        "Useful for converting text to numbers."
      ],
      "commonTrap": "Thinking the cast fails for characters.",
      "reference": "variable_types2.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE215_074",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Information Loss in Casts",
    "difficulty": "Midterm Level",
    "question": "Why is the result of ch = (char)x; meaningless here?",
    "codeSnippet": "char ch;\nint x = 3000;\nch = (char)x;",
    "options": [
      "x is out of char's range (\u2212128..127), so only the first byte of x is used and information is lost",
      "Casting to char is not allowed",
      "x becomes 3000 characters long",
      "char and int are the same size"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Converting from a type with more bytes can lose information.",
      "stepByStep": [
        "int is 4 bytes (\u00b12 billion); char is 1 byte."
      ],
      "commonTrap": "Assuming casts always preserve the value.",
      "reference": "variable_types2.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE215_075",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Cast Expressions",
    "difficulty": "Midterm Level",
    "question": "After y = (int)x; with double x = 3.14; what are the types and values?",
    "options": [
      "y = 3 (int); x is still a double equal to 3.14",
      "x becomes an int equal to 3",
      "y = 3.14",
      "Both become doubles"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The cast instructs the compiler to convert the value; the variable x itself does not change type.",
      "stepByStep": [
        "Only the result of the cast expression is an int."
      ],
      "commonTrap": "Thinking the cast changes the variable permanently.",
      "reference": "variable_types2.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE215_076",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "short Modifier",
    "difficulty": "Foundation",
    "question": "What does short int x; typically give on a 32/64-bit CPU?",
    "options": [
      "A 2-byte integer with range \u221232768 to 32767",
      "A 1-byte integer",
      "A 4-byte integer with range \u00b12 billion",
      "An 8-byte integer"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "short makes the type smaller if possible, reducing memory use.",
      "stepByStep": [
        "long makes it larger if possible."
      ],
      "commonTrap": "Thinking short means fewer digits of a double.",
      "reference": "variable_types2.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE215_077",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "long Modifier",
    "difficulty": "Exam Master",
    "question": "On a 32/64-bit compiler, the slides note that sizeof(long int) == sizeof(int). Why?",
    "options": [
      "A long/short modifier changes the size only if possible \u2014 the compiler may ignore the request",
      "long is always half of int",
      "long only applies to doubles",
      "It is a compiler bug"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Type modifiers are requests; different processors give different sizes.",
      "stepByStep": [
        "Check with sizeof()."
      ],
      "commonTrap": "Assuming long always doubles the size.",
      "reference": "variable_types2.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE215_078",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "unsigned int Range",
    "difficulty": "Foundation",
    "question": "What is the range of unsigned int z; on a 32/64-bit CPU?",
    "options": [
      "0 to 4294967295",
      "\u22122147483648 to 2147483647",
      "0 to 255",
      "0 to 65535"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "unsigned restricts to non-negative values and typically doubles the positive range; size in bytes is unchanged.",
      "stepByStep": [
        "Main use: avoid negative numbers where they are invalid."
      ],
      "commonTrap": "Keeping the signed range.",
      "reference": "variable_types2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "variable_types2.pdf",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_079",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Lesson 3 Exercise Output",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson3_exercises.cpp, Question #1: what is printed?",
    "codeSnippet": "int x=1, y=-1, z=5;\nchar c1, c2, c3;\nc1 = '\\n';\nc2 = ' ';\nc3 = 'c';\ncout << x << c1 << y << c2 << z << c3;",
    "options": [
      "1, then a new line, then \u22121 5c",
      "1 \u22121 5 c on one line",
      "1\\n\u22121 5c (with the characters \\n shown)",
      "15c\u22121"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "c1 = '\\n' is a newline, c2 = ' ' is a space, c3 = 'c'.",
      "stepByStep": [
        "Output: \"1\" \u2192 newline \u2192 \"-1\" \u2192 space \u2192 \"5\" \u2192 \"c\"."
      ],
      "commonTrap": "Printing \\n literally instead of as a newline.",
      "reference": "lesson3_exercises.cpp (Mini-course Lesson 3) \u00b7 Line 12"
    },
    "source": [
      {
        "deck": "lesson3_exercises.cpp (Mini-course Lesson 3)",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Line 12"
      }
    ]
  },
  {
    "id": "Q_MIAE215_080",
    "courseId": "MIAE215",
    "chapter": "types",
    "topic": "Finding Errors",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson3_exercises.cpp, Question #2: what is wrong with this program?",
    "codeSnippet": "double a, b, c, d\nb = 1.0e308\nc = 2*b\nd = a + 77.7\ncout << \"\\nc = \" << c\ncout << \"\\nd = \" << d",
    "options": [
      "Missing semicolons, c = 2*b overflows the double range (\u2192 inf), and a is used uninitialized",
      "Only the variable names are invalid",
      "Nothing is wrong",
      "cout cannot print doubles"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Every statement needs ;. 2 \u00d7 1.0e308 exceeds 1.7e308 \u2192 overflow \u2192 inf. a has no value \u2192 garbage.",
      "stepByStep": [
        "Fix: add semicolons, keep values in range, initialize a."
      ],
      "commonTrap": "Spotting only the syntax errors.",
      "reference": "lesson3_exercises.cpp (Mini-course Lesson 3) \u00b7 Line 24"
    },
    "source": [
      {
        "deck": "lesson3_exercises.cpp (Mini-course Lesson 3)",
        "chapter": "Topic 2 \u2014 Variable Types",
        "location": "Line 24"
      }
    ]
  },
  {
    "id": "Q_MIAE215_081",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Operators and Expressions",
    "difficulty": "Foundation",
    "question": "According to lesson4.cpp, what is an expression?",
    "options": [
      "A combination of operators and operands (variables) that performs some task",
      "A single variable declaration",
      "A comment",
      "A header file"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "An operator performs an operation on operands; an expression combines them.",
      "stepByStep": [
        "e.g. i = 7 + 3;"
      ],
      "commonTrap": "Confusing expressions with declarations.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 18"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 18"
      }
    ]
  },
  {
    "id": "Q_MIAE215_082",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Assignment Order",
    "difficulty": "Foundation",
    "question": "In i = 7 + 3; which happens first?",
    "options": [
      "The addition, because arithmetic operators are executed before the assignment operator",
      "The assignment",
      "They happen at the same time",
      "Neither; it is a comparison"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The right side is evaluated first, then stored in the variable on the left.",
      "stepByStep": [
        "= has lower precedence than arithmetic operators."
      ],
      "commonTrap": "Thinking = acts first.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 49"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 49"
      }
    ]
  },
  {
    "id": "Q_MIAE215_083",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Division with doubles",
    "difficulty": "Foundation",
    "question": "What does x = 7.0 / 3.0; store?",
    "options": [
      "About 2.33333",
      "2",
      "2.0",
      "1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "With double operands, / is real division.",
      "stepByStep": [
        "Compare i = 7 / 3; \u2192 2 with ints."
      ],
      "commonTrap": "Applying integer division to doubles.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 84"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 84"
      }
    ]
  },
  {
    "id": "Q_MIAE215_084",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Mixed-Type Promotion",
    "difficulty": "Midterm Level",
    "question": "What is x after x = 3 * 3.5 * 7; ?",
    "options": [
      "73.5",
      "63",
      "73",
      "70"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In a mixed sub-expression, operands are converted to the more general type (double) before the operator is applied.",
      "stepByStep": [
        "3 \u2192 3.0; 3.0 \u00d7 3.5 = 10.5; 10.5 \u00d7 7 = 73.5."
      ],
      "commonTrap": "Truncating to an int.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 91"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 91"
      }
    ]
  },
  {
    "id": "Q_MIAE215_085",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Sequential Logic",
    "difficulty": "Midterm Level",
    "question": "What is printed?",
    "codeSnippet": "double x;\nx = 3;\nx = 2*x + 1;\ncout << x;",
    "options": [
      "7",
      "\u22121",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A program is evaluated sequentially with current variable values \u2014 not as a simultaneous math equation.",
      "stepByStep": [
        "x = 3 \u2192 x = 2*3 + 1 = 7."
      ],
      "commonTrap": "Solving x = 2x + 1 algebraically (x = \u22121).",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 108"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 108"
      }
    ]
  },
  {
    "id": "Q_MIAE215_086",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Increment and Decrement",
    "difficulty": "Foundation",
    "question": "What does x++; do?",
    "options": [
      "The same as x = x + 1",
      "The same as x = x * 2",
      "The same as x = x - 1",
      "Prints x twice"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "++ increments by 1; -- decrements by 1.",
      "stepByStep": [
        "Generalized forms: x += a, x -= a."
      ],
      "commonTrap": "Confusing ++ and --.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 124"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 124"
      }
    ]
  },
  {
    "id": "Q_MIAE215_087",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Logarithms in C++",
    "difficulty": "Midterm Level",
    "question": "In C++, what does log(x) compute?",
    "options": [
      "The natural logarithm (base e); use log10 for base 10",
      "The base-10 logarithm",
      "The base-2 logarithm",
      "x to the power 10"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Math functions from <cmath>: sin, cos, tan, exp, log (natural), log10, atan, abs, pow.",
      "stepByStep": [
        "log(2.718\u2026) \u2248 1."
      ],
      "commonTrap": "Assuming log is base 10 as on many calculators.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 152"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 152"
      }
    ]
  },
  {
    "id": "Q_MIAE215_088",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "pow Function",
    "difficulty": "Foundation",
    "question": "What does z = pow(x, y); compute?",
    "options": [
      "x to the power y",
      "y to the power x",
      "x times y",
      "The square root of x"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "pow(x, y) = x\u02b8 from <cmath>.",
      "stepByStep": [
        "C++ has no ^ power operator for this."
      ],
      "commonTrap": "Writing x^y (which is not exponentiation in C++).",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 161"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 161"
      }
    ]
  },
  {
    "id": "Q_MIAE215_089",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Absolute Value",
    "difficulty": "Foundation",
    "question": "What does abs(-x) return when x = 0.785?",
    "options": [
      "0.785",
      "\u22120.785",
      "0",
      "1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "abs returns the absolute value.",
      "stepByStep": [
        "|\u22120.785| = 0.785."
      ],
      "commonTrap": "Returning the negative value.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 158"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 158"
      }
    ]
  },
  {
    "id": "Q_MIAE215_090",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Lesson 4 Exercise: q",
    "difficulty": "Midterm Level",
    "question": "Teacher's lesson4_exercises.cpp, Question #1: with int q; what is q = 7 - (7/3)*3; ?",
    "options": [
      "1",
      "0",
      "7",
      "\u22122"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Integer division first: 7/3 = 2.",
      "stepByStep": [
        "2*3 = 6 \u2192 7 \u2212 6 = 1 (this is 7 % 3)."
      ],
      "commonTrap": "Using real division (7 \u2212 7 = 0).",
      "reference": "lesson4_exercises.cpp (Mini-course Lesson 4) \u00b7 Line 19"
    },
    "source": [
      {
        "deck": "lesson4_exercises.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 19"
      }
    ]
  },
  {
    "id": "Q_MIAE215_091",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Lesson 4 Exercise: x",
    "difficulty": "Exam Master",
    "question": "Same exercise: what is x = 1/3*10.0; ?",
    "options": [
      "0",
      "3.333",
      "3.0",
      "0.333"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "1/3 is int/int = 0, evaluated left to right before multiplying by 10.0.",
      "stepByStep": [
        "0 \u00d7 10.0 = 0."
      ],
      "commonTrap": "Assuming the 10.0 makes the whole expression real from the start.",
      "reference": "lesson4_exercises.cpp (Mini-course Lesson 4) \u00b7 Line 20"
    },
    "source": [
      {
        "deck": "lesson4_exercises.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 20"
      }
    ]
  },
  {
    "id": "Q_MIAE215_092",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Lesson 4 Exercise: y",
    "difficulty": "Midterm Level",
    "question": "Same exercise with double z = 0: what is y = -1.0/z; ?",
    "options": [
      "\u2212inf",
      "0",
      "An integer exception",
      "1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Floating-point division by zero gives an exception value such as Inf (here \u2212Inf).",
      "stepByStep": [
        "Integer division by zero is an exception instead."
      ],
      "commonTrap": "Expecting a crash as with ints.",
      "reference": "lesson4_exercises.cpp (Mini-course Lesson 4) \u00b7 Line 21"
    },
    "source": [
      {
        "deck": "lesson4_exercises.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 21"
      }
    ]
  },
  {
    "id": "Q_MIAE215_093",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Tracing Variables",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson4_exercises.cpp, Question #2: what is the final value of w?",
    "codeSnippet": "double u=0.0,v=1.1,w=1.0;\nu--;            // line 1\nw++;            // line 2\nv = v - u;      // line 3\nw = w*w + v + w; // line 4",
    "options": [
      "8.1",
      "5.1",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Trace each line with current values.",
      "stepByStep": [
        "u-- \u2192 u = \u22121.",
        "w++ \u2192 w = 2.",
        "v = v \u2212 u = 1.1 \u2212 (\u22121) = 2.1.",
        "w = w*w + v + w = 4 + 2.1 + 2 = 8.1."
      ],
      "commonTrap": "Using the old v (1.1) in line 4.",
      "reference": "lesson4_exercises.cpp (Mini-course Lesson 4) \u00b7 Line 26"
    },
    "source": [
      {
        "deck": "lesson4_exercises.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 26"
      }
    ]
  },
  {
    "id": "Q_MIAE215_094",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Invalid Assignment",
    "difficulty": "Midterm Level",
    "question": "Teacher's lesson4_exercises.cpp, Question #3: why is 2*a = a + 1; an error?",
    "options": [
      "The left side of = must be a variable, not an expression",
      "a is a double",
      "The semicolon is missing",
      "You cannot add 1 to a double"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Assignment stores a value into a variable (memory location).",
      "stepByStep": [
        "Also in that program: log(a) with a = \u22122 is undefined (nan)."
      ],
      "commonTrap": "Treating = as algebraic equality.",
      "reference": "lesson4_exercises.cpp (Mini-course Lesson 4) \u00b7 Line 45"
    },
    "source": [
      {
        "deck": "lesson4_exercises.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 45"
      }
    ]
  },
  {
    "id": "Q_MIAE215_095",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Integer Division Trap",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson4_more.cpp: with int q = 3; double r = 3; what is A = 1/q*r*r; ?",
    "options": [
      "0",
      "3",
      "1",
      "9"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "1/q is int/int = 0, so everything multiplied by it is 0.",
      "stepByStep": [
        "Then y = 1.0/A \u2192 inf."
      ],
      "commonTrap": "Assuming r being double changes 1/q.",
      "reference": "lesson4_more.cpp (Mini-course Lesson 4) \u00b7 Line 23"
    },
    "source": [
      {
        "deck": "lesson4_more.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 23"
      }
    ]
  },
  {
    "id": "Q_MIAE215_096",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Round-off Limits",
    "difficulty": "Exam Master",
    "question": "lesson4_more.cpp: why does r4 = 1.0 - (1.0 - 1.0e-20); give 0?",
    "options": [
      "A double keeps about 16 significant digits, so 1.0 \u2212 1.0e-20 rounds to exactly 1.0",
      "Subtraction is not allowed with doubles",
      "1.0e-20 is an integer",
      "The compiler removes the parentheses"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Round-off: 1e\u221220 is far below the 16th significant digit of 1.0.",
      "stepByStep": [
        "With 1.0e-15 the result is only approximately 1e\u221215."
      ],
      "commonTrap": "Expecting exactly 1.0e-20.",
      "reference": "lesson4_more.cpp (Mini-course Lesson 4) \u00b7 Line 21"
    },
    "source": [
      {
        "deck": "lesson4_more.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 21"
      }
    ]
  },
  {
    "id": "Q_MIAE215_097",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Tracing with abs",
    "difficulty": "Exam Master",
    "question": "lesson4_more.cpp, Question #2: what are u, v and w at the end?",
    "codeSnippet": "double u=0.0,v=2.0,w=-1.0;\nu = u + 3;        // line 1\nw = w / 2;        // line 2\nv = v * u + w;    // line 3\nv = 2*v;          // line 4\nw = -w*abs(-w);   // line 5",
    "options": [
      "u = 3, v = 11, w = 0.25",
      "u = 3, v = 5.5, w = \u22120.5",
      "u = 0, v = 2, w = \u22121",
      "u = 3, v = 11, w = \u22120.25"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Trace line by line with current values.",
      "stepByStep": [
        "u = 3; w = \u22120.5.",
        "v = 2\u00b73 + (\u22120.5) = 5.5; v = 11.",
        "w = \u2212(\u22120.5)\u00b7|0.5| = 0.25."
      ],
      "commonTrap": "Losing the sign in \u2212w.",
      "reference": "lesson4_more.cpp (Mini-course Lesson 4) \u00b7 Line 31"
    },
    "source": [
      {
        "deck": "lesson4_more.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 31"
      }
    ]
  },
  {
    "id": "Q_MIAE215_098",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Division by Zero",
    "difficulty": "Foundation",
    "question": "According to lesson4.cpp, what does dividing by zero produce?",
    "options": [
      "\"Exception\" values such as NaN (not a number) or Inf",
      "Always 0",
      "Always 1",
      "The largest int"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Be careful with the division operator.",
      "stepByStep": [
        "Integer divide-by-zero is an exception error; floating point gives Inf/NaN."
      ],
      "commonTrap": "Assuming the result is 0.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 70"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 70"
      }
    ]
  },
  {
    "id": "Q_MIAE215_099",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Generalized Operators",
    "difficulty": "Midterm Level",
    "question": "What is x at the end?",
    "codeSnippet": "double x = 20;\nx /= 4;\nx -= 2;",
    "options": [
      "3",
      "5",
      "\u22123",
      "18"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "x /= a means x = x / a; x -= a means x = x \u2212 a.",
      "stepByStep": [
        "20 / 4 = 5 \u2192 5 \u2212 2 = 3."
      ],
      "commonTrap": "Applying them in reverse order.",
      "reference": "expressions_operators_topics.txt (Expressions & operators lecture outline) \u00b7 Line 17"
    },
    "source": [
      {
        "deck": "expressions_operators_topics.txt (Expressions & operators lecture outline)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 17"
      }
    ]
  },
  {
    "id": "Q_MIAE215_100",
    "courseId": "MIAE215",
    "chapter": "expr",
    "topic": "Implicit Conversion on Assignment",
    "difficulty": "Foundation",
    "question": "What does y hold after double y; y = 3; ?",
    "options": [
      "3.0 (the int 3 is converted to a double before = is applied)",
      "3 as an int",
      "An error",
      "0"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "lesson4.cpp: \"3 is converted to 3.0 (a double) before = is applied\".",
      "stepByStep": [
        "Mixed types are promoted."
      ],
      "commonTrap": "Thinking the double becomes an int.",
      "reference": "lesson4.cpp (Mini-course Lesson 4) \u00b7 Line 96"
    },
    "source": [
      {
        "deck": "lesson4.cpp (Mini-course Lesson 4)",
        "chapter": "Topic 3 \u2014 Expressions & Operators",
        "location": "Line 96"
      }
    ]
  },
  {
    "id": "Q_MIAE215_101",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Purpose of Control Statements",
    "difficulty": "Foundation",
    "question": "What do control statements do?",
    "options": [
      "Allow specific parts of the program to be executed under certain conditions (control the flow of the program)",
      "Declare variables",
      "Include libraries",
      "Compile the program"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "if runs its codeblock when the test condition is true.",
      "stepByStep": [
        "Loops repeat parts of the program."
      ],
      "commonTrap": "Confusing control flow with declarations.",
      "reference": "control_statements1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE215_102",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "When the Test Is Evaluated",
    "difficulty": "Midterm Level",
    "question": "When is the test condition of an if statement evaluated?",
    "options": [
      "With the current values of the variables at that line of the program",
      "Once, when the program starts",
      "At the end of the program",
      "Every time a variable changes"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Results can change depending on where the if appears in the program.",
      "stepByStep": [
        "lesson5.cpp shows the same if printing or not after i and j change."
      ],
      "commonTrap": "Thinking the condition is re-checked automatically later.",
      "reference": "control_statements1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE215_103",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Comparison Operators",
    "difficulty": "Foundation",
    "question": "Which operator tests \"not equal\" in C++?",
    "options": [
      "!=",
      "=!",
      "<>",
      "=="
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Comparison operators: >, <, >=, <=, ==, !=.",
      "stepByStep": [
        "== tests equality; = is assignment."
      ],
      "commonTrap": "Using <> from other languages.",
      "reference": "control_statements1.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE215_104",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Approximate Equality",
    "difficulty": "Midterm Level",
    "question": "How do the slides check whether a double x is approximately equal to 5.5?",
    "options": [
      "if( abs(x - 5.5) < eps )",
      "if( x == 5.5 )",
      "if( x = 5.5 )",
      "if( abs(x) == 5.5 )"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Use a small positive constant epsilon; its value depends on the engineering application.",
      "stepByStep": [
        "eps = 1.0e-9 in the example."
      ],
      "commonTrap": "Using == with doubles.",
      "reference": "control_statements1.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE215_105",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Multiple Conditions",
    "difficulty": "Foundation",
    "question": "For if( (i > k) && (k <= 3) && (i < 10) ) to run, what must hold?",
    "options": [
      "All three conditions must be true",
      "At least one condition must be true",
      "Exactly two must be true",
      "None must be true"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "AND (&&): all parts true. OR (||): at least one true.",
      "stepByStep": [
        "Multiple ANDs and ORs can be combined."
      ],
      "commonTrap": "Reading && as OR.",
      "reference": "control_statements1.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE215_106",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "NOT Operator",
    "difficulty": "Foundation",
    "question": "With i = 1 and k = 2, does if( !(i > k) ) cout << \"yes\"; print?",
    "options": [
      "Yes, because i > k is false and ! makes it true",
      "No",
      "Only if k is 0",
      "It does not compile"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "NOT (!): the condition has to be false for the result to be true.",
      "stepByStep": [
        "i > k \u2192 1 > 2 \u2192 false \u2192 !false = true."
      ],
      "commonTrap": "Ignoring the !.",
      "reference": "control_statements1.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE215_107",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "if-else as a Fork",
    "difficulty": "Foundation",
    "question": "Why is an if-else statement described as a \"fork in the road\"?",
    "options": [
      "The program must follow exactly one of the two code paths",
      "Both blocks always run",
      "It repeats code",
      "It skips both blocks"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "If the test is true the 1st codeblock runs, otherwise the 2nd (else is the default option).",
      "stepByStep": [
        "An if-else ladder generalizes this to more paths."
      ],
      "commonTrap": "Thinking both blocks may run.",
      "reference": "control_statements1.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_108",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Decision Making Example",
    "difficulty": "Foundation",
    "question": "In the robot example on the slides, what does the else branch do?",
    "options": [
      "Stops the robot (it is at its destination)",
      "Moves the robot forward",
      "Restarts the program",
      "Prints an error"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "if (robot is not at destination) move forward; else stop robot.",
      "stepByStep": [
        "if/if-else statements are good for decision making."
      ],
      "commonTrap": "Swapping the branches.",
      "reference": "control_statements1.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE215_109",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Flowcharts",
    "difficulty": "Foundation",
    "question": "What does the slide say about flowchart representations made with Flowgorithm?",
    "options": [
      "Flowcharts are a universal programming language that improves organization and presentation; Flowgorithm is free",
      "Flowcharts only work for C++",
      "Flowgorithm is paid software for Python only",
      "Flowcharts replace compiling"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The same flowchart can be implemented in C++, Java or Python.",
      "stepByStep": [
        "Decision = diamond with True/False branches."
      ],
      "commonTrap": "Thinking flowcharts are language-specific.",
      "reference": "control_statements1.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "control_statements1.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_MIAE215_110",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Nested if-else",
    "difficulty": "Midterm Level",
    "question": "The nested if-else on the slides (if inside else inside else) is equivalent to:",
    "options": [
      "An if-else ladder: if \u2026 else if \u2026 else if \u2026 else",
      "Three separate if statements that can all run",
      "A for loop",
      "A single if with no else"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Only one of the code paths/blocks executes.",
      "stepByStep": [
        "The ladder form is easier to read."
      ],
      "commonTrap": "Thinking several blocks can run.",
      "reference": "control_statements1_part2.pdf \u00b7 Pages 2\u20133"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Pages 2\u20133"
      }
    ]
  },
  {
    "id": "Q_MIAE215_111",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Ladder Execution Order",
    "difficulty": "Midterm Level",
    "question": "How is an if-else ladder executed?",
    "options": [
      "One if statement at a time from the top down, until one condition is true",
      "All conditions are checked and all true blocks run",
      "From the bottom up",
      "In random order"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The first true condition wins; the rest are skipped.",
      "stepByStep": [
        "The final else runs only if none is true."
      ],
      "commonTrap": "Expecting every true condition to run.",
      "reference": "control_statements1_part2.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE215_112",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Switch Statements",
    "difficulty": "Midterm Level",
    "question": "What does the teacher say about switch statements?",
    "options": [
      "They are similar to if-else ladders but less general, since they cannot use variables in the test conditions \u2014 they are not recommended/taught",
      "They are the main tool of the course",
      "They replace for loops",
      "They are faster and always preferred"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The course uses if-else ladders instead.",
      "stepByStep": [
        "\"I don't recommend / teach switch statements.\""
      ],
      "commonTrap": "Assuming switch will be tested heavily.",
      "reference": "control_statements1_part2.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE215_113",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "for Loop Steps",
    "difficulty": "Foundation",
    "question": "In for( i = 0; i < 5; i++ ) { \u2026 }, which steps repeat until the test is false?",
    "options": [
      "Test the condition \u2192 execute the codeblock \u2192 update the index (initialization happens once)",
      "Initialize \u2192 update only",
      "Execute the codeblock once, then stop",
      "Initialize every time"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Step 0: initialize the index. Steps 1\u20133: test, execute codeblock, update \u2014 repeated.",
      "stepByStep": [
        "The loop ends when the test is false (i = 5)."
      ],
      "commonTrap": "Re-initializing each cycle.",
      "reference": "control_statements1_part2.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE215_114",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Counting Loop Values",
    "difficulty": "Foundation",
    "question": "How many values does for( i = 0; i <= 10; i += 2 ) cout << i; print?",
    "options": [
      "6 (0, 2, 4, 6, 8, 10)",
      "5",
      "10",
      "11"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Note <= includes 10.",
      "stepByStep": [
        "Compare with i < 10, which gives 5."
      ],
      "commonTrap": "Ignoring the = in <=.",
      "reference": "control_statements1_part2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_115",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Nonlinear Update",
    "difficulty": "Exam Master",
    "question": "How many values does this loop print?",
    "codeSnippet": "int k;\nfor( k = 0; k < 1000; k = k*k + 1 ) cout << \"\\n\" << k;",
    "options": [
      "6",
      "5",
      "1000",
      "Infinitely many"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Other expressions can be used as the update.",
      "stepByStep": [
        "k = 0, 1, 2, 5, 26, 677 are printed; the next k = 677\u00b2 + 1 = 458330 fails k < 1000."
      ],
      "commonTrap": "Stopping at 26.",
      "reference": "control_statements1_part2.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "control_statements1_part2.pdf",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE215_116",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Lesson 5 Exercise",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson5_exercises.cpp, Question #1 (first part): what is printed?",
    "codeSnippet": "double x=1.1, y=0.25, z=-3.0;\nif( (x/y) > 4 ) {\n    z = abs(z);\n    z = z*z;\n    x = -x;\n}\nif( (x/y) > 4 ) x = -x;\ncout << x << \"\\t\" << y << \"\\t\" << z << \"\\n\";",
    "options": [
      "\u22121.1  0.25  9",
      "1.1  0.25  \u22123",
      "\u22121.1  0.25  \u22123",
      "1.1  0.25  9"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "x/y = 4.4 > 4 \u2192 z = |\u22123| = 3 \u2192 z = 9 \u2192 x = \u22121.1.",
      "stepByStep": [
        "Second if: x/y = \u22124.4 > 4 is false, so x stays \u22121.1."
      ],
      "commonTrap": "Flipping x back in the second if.",
      "reference": "lesson5_exercises.cpp (Mini-course Lesson 5) \u00b7 Line 12"
    },
    "source": [
      {
        "deck": "lesson5_exercises.cpp (Mini-course Lesson 5)",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Line 12"
      }
    ]
  },
  {
    "id": "Q_MIAE215_117",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Countdown Loop Exit",
    "difficulty": "Midterm Level",
    "question": "lesson5_exercises.cpp: after for( i = 10; i > -1; i-- ) cout << i; what value of i is printed next?",
    "options": [
      "\u22121",
      "0",
      "10",
      "1"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The loop prints 10 down to 0; after i-- makes i = \u22121, the test i > \u22121 fails.",
      "stepByStep": [
        "Exit value = first value failing the condition."
      ],
      "commonTrap": "Answering 0 (the last printed value).",
      "reference": "lesson5_exercises.cpp (Mini-course Lesson 5) \u00b7 Line 24"
    },
    "source": [
      {
        "deck": "lesson5_exercises.cpp (Mini-course Lesson 5)",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Line 24"
      }
    ]
  },
  {
    "id": "Q_MIAE215_118",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Changing the Index Inside a Loop",
    "difficulty": "Exam Master",
    "question": "What does this loop print?",
    "codeSnippet": "for( i = -1; i <= 5; i = i + 2 ) {\n    cout << \"\\n\" << i;\n    if( i == 3 ) i = 7;\n}",
    "options": [
      "\u22121 1 3",
      "\u22121 1 3 5",
      "\u22121 1 3 7 9",
      "\u22121 3 5"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Setting the index inside the body changes the loop.",
      "stepByStep": [
        "i = \u22121, 1, 3 \u2192 at 3, i = 7 \u2192 update i = 9 \u2192 9 <= 5 false \u2192 stop."
      ],
      "commonTrap": "Ignoring the i = 7 assignment.",
      "reference": "lesson5_exercises.cpp (Mini-course Lesson 5) \u00b7 Line 29"
    },
    "source": [
      {
        "deck": "lesson5_exercises.cpp (Mini-course Lesson 5)",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Line 29"
      }
    ]
  },
  {
    "id": "Q_MIAE215_119",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Integer Test Condition",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson5_more.cpp, Question #1: what are x, y and z at the end?",
    "codeSnippet": "int i, x=1, y=2, z=3;\nif( (z/2) > 1 ) {\n    z = -z;\n    z++;\n    x = x + z;\n}\nif( x >= 1 ) x = -x;",
    "options": [
      "x = \u22121, y = 2, z = 3",
      "x = \u22121, y = 2, z = \u22122",
      "x = \u22123, y = 2, z = \u22122",
      "x = 1, y = 2, z = 3"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "z/2 is int division: 3/2 = 1, and 1 > 1 is false \u2192 the first block is skipped.",
      "stepByStep": [
        "x >= 1 \u2192 x = \u22121."
      ],
      "commonTrap": "Using real division (1.5 > 1).",
      "reference": "lesson5_more.cpp (Mini-course Lesson 5) \u00b7 Line 12"
    },
    "source": [
      {
        "deck": "lesson5_more.cpp (Mini-course Lesson 5)",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Line 12"
      }
    ]
  },
  {
    "id": "Q_MIAE215_120",
    "courseId": "MIAE215",
    "chapter": "control",
    "topic": "Nested Loop Counters",
    "difficulty": "Exam Master",
    "question": "Teacher's lesson5_more.cpp, Question #2: what are k1, k2 and k3 after the loops?",
    "codeSnippet": "int j,k1=0,k2=0,k3;\nk3 = 0;\nfor(i=1;i<=2;i++) {\n    k1 = k1 + 1;\n    k3 = k3 + 1;\n    for(j=1;j<=3;j++) {\n        k2 = k2 + 1;\n        k3 = k3 + 1;\n    }\n}",
    "options": [
      "k1 = 2, k2 = 6, k3 = 8",
      "k1 = 2, k2 = 3, k3 = 5",
      "k1 = 6, k2 = 2, k3 = 8",
      "k1 = 2, k2 = 6, k3 = 6"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The outer loop runs 2 times; the inner loop runs 3 times per outer pass.",
      "stepByStep": [
        "k1 = 2, k2 = 2 \u00d7 3 = 6, k3 = 2 + 6 = 8."
      ],
      "commonTrap": "Forgetting that k3 is incremented in both loops.",
      "reference": "lesson5_more.cpp (Mini-course Lesson 5) \u00b7 Line 33"
    },
    "source": [
      {
        "deck": "lesson5_more.cpp (Mini-course Lesson 5)",
        "chapter": "Topic 4 \u2014 Control Statements & Loops",
        "location": "Line 33"
      }
    ]
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
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 7"
      }
    ]
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
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 8"
      }
    ]
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
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 2"
      }
    ]
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
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 2"
      }
    ]
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
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Pages 12\u201314"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Pages 12\u201314"
      }
    ]
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
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 15"
      }
    ]
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
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 5"
      }
    ]
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
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 13"
      }
    ]
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
      "reference": "Practice Problem Set #1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "Practice Problem Set #1.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 1"
      }
    ]
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
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Pages 15\u201316"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Pages 15\u201316"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 10"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Pages 4\u20137"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Pages 4\u20137"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 9"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 9; Practice Problem Set #1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 9"
      },
      {
        "deck": "Practice Problem Set #1.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 1"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Pages 17\u201318"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Pages 17\u201318"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 13"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 13"
      }
    ]
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
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Pages 14\u201316"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Pages 14\u201316"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 3"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 13"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 12"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 12"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 1"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 4"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 10"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 7"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 9"
      }
    ]
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
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 19"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 12"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 11"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 16"
      }
    ]
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
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_MIAE221_036",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "What Is a Material",
    "difficulty": "Foundation",
    "question": "According to Lecture 1, which of these would be treated as a MATERIAL (rather than a substance like oils or gases)?",
    "options": [
      "Cement",
      "Natural gas",
      "Crude oil",
      "A pharmaceutical tablet's active chemical"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A material can be put into a certain geometric shape, and the product has some functionality \u2014 e.g. iron, copper, polymers, cement.",
      "stepByStep": [
        "Oils, gases and pharmaceuticals are substances, not engineering materials."
      ],
      "commonTrap": "Treating any chemical substance as a material.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE221_037",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Old vs New Materials",
    "difficulty": "Foundation",
    "question": "Which of the following is listed as a NEW material (not an old one) in Lecture 1?",
    "options": [
      "Synthetic polymers",
      "Wood",
      "Skins",
      "Papyrus"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Old: metals, wood, ceramics, skins, natural fibres, papyrus. New: metals, ceramics, natural & synthetic fibres, polymers.",
      "stepByStep": [
        "Metals and ceramics appear in both lists."
      ],
      "commonTrap": "Choosing a natural material.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE221_038",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Ages of Civilization",
    "difficulty": "Foundation",
    "question": "Lecture 1 says civilization is strongly linked with materials. Which of these is one of the named \"ages\"?",
    "options": [
      "The bronze age",
      "The plastic age",
      "The glass age",
      "The rubber age"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Stone age, bronze age, iron age \u2026 nuclear age, information age.",
      "stepByStep": [
        "Technological eras are named after the materials that defined them."
      ],
      "commonTrap": "Inventing an age not on the slide.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE221_039",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Early Materials: Sumerians",
    "difficulty": "Foundation",
    "question": "According to the historical perspective slide, which material is associated with the Sumerians?",
    "options": [
      "Ceramics",
      "Lime",
      "Iron",
      "Bronze"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Sumerians: ceramics. Egyptians: lime. Anatolians: iron (12th century BC). Earliest bronze: modern Iran/Iraq.",
      "stepByStep": [],
      "commonTrap": "Mixing up the Sumerians and the Egyptians.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE221_040",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Early Materials: Egyptians",
    "difficulty": "Foundation",
    "question": "Which material does the slide associate with the Egyptians?",
    "options": [
      "Lime",
      "Ceramics",
      "Iron",
      "Silicon"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Egyptians: lime.",
      "stepByStep": [
        "Sumerians: ceramics; Anatolians: iron."
      ],
      "commonTrap": "Choosing ceramics.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE221_041",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Early Materials: Iron",
    "difficulty": "Foundation",
    "question": "Who is credited on the slide with iron, around the 12th century BC?",
    "options": [
      "The Anatolians",
      "The Sumerians",
      "The Egyptians",
      "The Romans"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Anatolians: iron (12th century BC).",
      "stepByStep": [
        "The earliest known bronze is from what is now Iran and Iraq."
      ],
      "commonTrap": "Choosing the Romans.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE221_042",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Earliest Bronze",
    "difficulty": "Foundation",
    "question": "Where is the earliest known bronze from, according to Lecture 1?",
    "options": [
      "What is now Iran and Iraq",
      "Ancient Greece",
      "China",
      "Egypt"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Historical perspective slide.",
      "stepByStep": [],
      "commonTrap": "Guessing a well-known ancient civilization.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE221_043",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Materials-Driven Advances: Space",
    "difficulty": "Foundation",
    "question": "For space exploration, which materials-driven advances are listed?",
    "options": [
      "Shuttle tiles and high-temperature alloys",
      "Semiconductors only",
      "Batteries and solar power",
      "Auto bodies"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Transportation: engines, airframes, auto bodies. Space: shuttle tiles, high-temp alloys. Energy: solar power, batteries. Communications: semiconductors.",
      "stepByStep": [],
      "commonTrap": "Mixing up the categories.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE221_044",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Materials-Driven Advances: Communications",
    "difficulty": "Foundation",
    "question": "Which materials-driven advance is listed for communications?",
    "options": [
      "Semiconductors",
      "Shuttle tiles",
      "Airframes",
      "Batteries"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Communications \u2192 semiconductors.",
      "stepByStep": [
        "Energy \u2192 solar power, batteries."
      ],
      "commonTrap": "Choosing batteries.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE221_045",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Property Categories",
    "difficulty": "Foundation",
    "question": "Which is NOT one of the property categories listed in Lecture 1?",
    "options": [
      "Financial",
      "Mechanical",
      "Magnetic",
      "Optical"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Properties: mechanical, thermal, electrical, magnetic, optical \u2014 responses to an external stimulus.",
      "stepByStep": [
        "Properties are independent of shape and size."
      ],
      "commonTrap": "Counting cost as a material property.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_MIAE221_046",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Course Framework",
    "difficulty": "Midterm Level",
    "question": "The general course outline links which three ideas?",
    "options": [
      "Processing \u2192 structure \u2192 properties (structure at the atomic, molecular and microscopic levels)",
      "Cost \u2192 price \u2192 profit",
      "Design \u2192 marketing \u2192 sales",
      "Mass \u2192 volume \u2192 density only"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Processing controls structure; structure determines properties.",
      "stepByStep": [
        "Structure is studied from the atomic to the microscopic scale."
      ],
      "commonTrap": "Leaving processing out.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_MIAE221_047",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Course Outline Order",
    "difficulty": "Midterm Level",
    "question": "In the MIAE 221 outline, which topics come before the midterm exam?",
    "options": [
      "Introduction, chemistry review, crystalline solids, imperfections, diffusion, mechanical properties of metals",
      "Phase diagrams and ceramics only",
      "Thermal, electrical, magnetic and optical properties",
      "Polymers and composites only"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Midterm Exam: Friday October 30th, 2026.",
      "stepByStep": [
        "After the midterm: phase diagrams, ceramics, polymers, functional properties."
      ],
      "commonTrap": "Placing phase diagrams before the midterm.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_MIAE221_048",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Why Study Materials Science (1)",
    "difficulty": "Foundation",
    "question": "What is the first reason Lecture 1 gives for studying materials science?",
    "options": [
      "To understand the capabilities and limitations of materials",
      "To memorize the periodic table",
      "To avoid mathematics",
      "To learn programming"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Reasons: (1) capabilities and limitations (avoid catastrophic failures), (2) design better components, (3) it is interesting.",
      "stepByStep": [],
      "commonTrap": "Skipping the safety motivation.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_MIAE221_049",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Hyatt Regency Collapse",
    "difficulty": "Midterm Level",
    "question": "What caused the Hyatt Regency (Kansas City) walkway collapse in 1981?",
    "options": [
      "Overstressed, under-designed steel support rods",
      "Metal fatigue at rivet holes",
      "An inclusion in a turbine blade",
      "A failed polymer O-ring"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The collapse killed 114 people.",
      "stepByStep": [
        "Other failures: Comet (fatigue), DC-10 (turbine inclusion), Challenger (O-ring)."
      ],
      "commonTrap": "Attributing it to fatigue.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_MIAE221_050",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Alaska MD-80 Crash",
    "difficulty": "Midterm Level",
    "question": "What was the cause of the Alaska MD-80 crash (1999)?",
    "options": [
      "Excessive wear on the stabilizer jackscrew",
      "Crosswind stiffening",
      "Ductile-to-brittle transition in steel",
      "Rivet-hole fatigue"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The crash killed 88 people.",
      "stepByStep": [],
      "commonTrap": "Mixing it up with the Comet.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_MIAE221_051",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Tacoma Narrows Bridge",
    "difficulty": "Foundation",
    "question": "What caused the Tacoma Narrows Bridge collapse (1940)?",
    "options": [
      "Poor design \u2014 insufficient crosswind stiffening",
      "Corrosion of the cables",
      "A material inclusion",
      "Brittle fracture in the deck"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Listed under catastrophic failures.",
      "stepByStep": [],
      "commonTrap": "Assuming a material defect.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_MIAE221_052",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "DC-10 Crash",
    "difficulty": "Midterm Level",
    "question": "What caused the United DC-10 crash at Sioux City (1989)?",
    "options": [
      "An inclusion and cracking in the primary #2 engine turbine blade",
      "Walkway support rods",
      "A polymer seal",
      "Wind-induced vibration"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Inclusions are defects that can start cracks.",
      "stepByStep": [],
      "commonTrap": "Mixing it up with the Challenger.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_MIAE221_053",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "de Havilland Comet",
    "difficulty": "Foundation",
    "question": "Why did the de Havilland Comet (first commercial jet) fail in 1954?",
    "options": [
      "Metal fatigue, aggravated by high stresses around rivet holes near window openings",
      "Excessive jackscrew wear",
      "An O-ring failure",
      "Insufficient crosswind stiffening"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Stress concentrations at openings accelerate fatigue cracking.",
      "stepByStep": [],
      "commonTrap": "Choosing a structural design cause.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_MIAE221_054",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Why Study Materials Science (2)",
    "difficulty": "Foundation",
    "question": "According to Lecture 1, understanding materials science helps us design better parts by answering questions such as:",
    "options": [
      "How can we make something stronger or lighter? How do elements form alloys?",
      "How much should a part cost?",
      "Who should manufacture it?",
      "How should it be marketed?"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Reason (2): design better components, parts, devices.",
      "stepByStep": [
        "Example: turbine blades with controlled grain structure."
      ],
      "commonTrap": "Choosing business questions.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 15"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 15"
      }
    ]
  },
  {
    "id": "Q_MIAE221_055",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Stiffness by Material Class",
    "difficulty": "Foundation",
    "question": "According to the classes-of-materials table, which class has LOW stiffness?",
    "options": [
      "Polymers",
      "Ceramics",
      "Metals",
      "All are equal"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Stiffness: polymers low, ceramics high, metals fair.",
      "stepByStep": [
        "Polymers also have low conductivity."
      ],
      "commonTrap": "Picking metals.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_056",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Hardness by Material Class",
    "difficulty": "Foundation",
    "question": "Which class has very high hardness/strength in the Lecture 2 table?",
    "options": [
      "Ceramics",
      "Polymers",
      "Metals",
      "None"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Hardness/strength: polymers low\u2013medium, ceramics very high, metals medium\u2013high.",
      "stepByStep": [
        "But ceramics have poor ductility."
      ],
      "commonTrap": "Picking metals.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_057",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Machinability",
    "difficulty": "Foundation",
    "question": "Which class has POOR machinability?",
    "options": [
      "Ceramics",
      "Polymers",
      "Metals",
      "All classes"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Machinability: polymers good, ceramics poor, metals good.",
      "stepByStep": [
        "Hard and brittle materials are difficult to machine."
      ],
      "commonTrap": "Choosing metals.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_058",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Course Assessment",
    "difficulty": "Foundation",
    "question": "How is the MIAE 221 grade weighted, according to Lecture 1?",
    "options": [
      "In-tutorial problems 20%, term-assignment 10%, midterm 25%, final 45%",
      "Midterm 50%, final 50%",
      "Assignments 40%, final 60%",
      "Final 100%"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Assignments are not collected, but their questions are the basis of the in-tutorial problems.",
      "stepByStep": [
        "The midterm is done in class."
      ],
      "commonTrap": "Assuming assignments are collected and graded.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_059",
    "courseId": "MIAE221",
    "chapter": "intro",
    "topic": "Properties vs Size",
    "difficulty": "Foundation",
    "question": "A 1 cm and a 10 cm cube of the same copper are compared. What does Lecture 1 say about their properties?",
    "options": [
      "They are the same \u2014 properties are independent of shape and size",
      "The larger cube is always stronger",
      "The smaller cube conducts better",
      "Properties depend only on shape"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A property is the material's response to a stimulus, not a feature of the part geometry.",
      "stepByStep": [],
      "commonTrap": "Confusing properties with part performance.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction & Classes of Materials",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_MIAE221_060",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Why Study Bonding",
    "difficulty": "Foundation",
    "question": "Why does Lecture 2 say we study bonding?",
    "options": [
      "Material properties (strength, hardness, conductivity\u2026) are determined by how atoms are connected and arranged",
      "To memorize atomic masses",
      "Because all materials have the same bonds",
      "Only to calculate densities"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Properties come from the manner in which atoms are connected and how they are arranged in space.",
      "stepByStep": [
        "Bonding depends on electronic structure and electronegativity."
      ],
      "commonTrap": "Thinking bonding is unrelated to properties.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE221_061",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Nature of the Bond",
    "difficulty": "Midterm Level",
    "question": "What determines the nature of the chemical bond between atoms?",
    "options": [
      "Electronic structure (distribution of electrons in orbitals) and electronegativity",
      "The size of the sample",
      "The colour of the atoms",
      "Only the number of neutrons"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Electronegativity = tendency of an atom to attract an electron.",
      "stepByStep": [
        "The electronegativity difference sets the bond type."
      ],
      "commonTrap": "Choosing neutrons, which do not take part in bonding.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE221_062",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Bohr Model",
    "difficulty": "Foundation",
    "question": "In the Bohr model of the atom (1913), electrons:",
    "options": [
      "Revolve around the nucleus in discrete orbitals",
      "Are described only by probability distributions",
      "Sit inside the nucleus",
      "Have no energy levels"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Bohr built on Rutherford's work and spectral emission studies.",
      "stepByStep": [
        "The later wave-mechanical model uses probability distributions."
      ],
      "commonTrap": "Mixing up the Bohr and wave-mechanical models.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE221_063",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Wave-Mechanical Model",
    "difficulty": "Midterm Level",
    "question": "What is the key idea of the wave-mechanical (quantum-mechanical) model?",
    "options": [
      "An electron's position is known only as a probability distribution, and it has both particle and wave character",
      "Electrons move in fixed circular orbits",
      "Electrons are stationary",
      "Atoms have no nucleus"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Developed by Schr\u00f6dinger, Heisenberg, Planck and others (1927); more precise than Bohr.",
      "stepByStep": [],
      "commonTrap": "Describing the Bohr model instead.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE221_064",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Atomic Number",
    "difficulty": "Foundation",
    "question": "What is the atomic number Z?",
    "options": [
      "The number of protons (1 for hydrogen up to 94 for plutonium on the slide)",
      "The number of neutrons",
      "Protons plus neutrons",
      "The number of electron shells"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Atomic mass A \u2248 Z + N.",
      "stepByStep": [
        "Isotopes have the same Z but different N."
      ],
      "commonTrap": "Confusing Z with A.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 5"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 5"
      }
    ]
  },
  {
    "id": "Q_MIAE221_065",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Electronegativity Scale",
    "difficulty": "Foundation",
    "question": "According to Lecture 2, over what range do electronegativity values run?",
    "options": [
      "0.7 to 4.0",
      "0 to 1",
      "1 to 100",
      "\u22124.0 to 4.0"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Originally worked out by Linus Pauling (1939). Large values = strong tendency to acquire electrons.",
      "stepByStep": [],
      "commonTrap": "Assuming a 0\u20131 scale.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_MIAE221_066",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Electropositive Elements",
    "difficulty": "Foundation",
    "question": "Group IA elements such as Li, Na and K have low electronegativity. They are called:",
    "options": [
      "Electropositive \u2014 they readily give up electrons to become + ions",
      "Electronegative \u2014 they readily accept electrons",
      "Inert \u2014 they never bond",
      "Semiconductors"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "High EN (Group VIIA: F, Cl) \u2192 accept electrons. Low EN (Group IA) \u2192 give up electrons.",
      "stepByStep": [],
      "commonTrap": "Reversing the definitions.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_MIAE221_067",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Density of Solids",
    "difficulty": "Foundation",
    "question": "According to Lecture 2, most solids have densities in which range?",
    "options": [
      "About 1 to 23 g/cm\u00b3",
      "About 100 to 1000 g/cm\u00b3",
      "Less than 0.01 g/cm\u00b3",
      "Exactly 1 g/cm\u00b3"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Density is in g/cm\u00b3; many problems are solved by combining density, atomic mass and Avogadro's number.",
      "stepByStep": [],
      "commonTrap": "Confusing g/cm\u00b3 with kg/m\u00b3.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_MIAE221_068",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Avogadro's Number",
    "difficulty": "Foundation",
    "question": "What is Avogadro's number N_A?",
    "options": [
      "6.022 \u00d7 10\u00b2\u00b3 particles per mole",
      "6.022 \u00d7 10\u207b\u00b2\u00b3",
      "1.602 \u00d7 10\u207b\u00b9\u2079",
      "9.81"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "A mole contains N_A particles; atomic weight is in g/mol.",
      "stepByStep": [
        "1.602 \u00d7 10\u207b\u00b9\u2079 C is the electron charge."
      ],
      "commonTrap": "Mixing up constants.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_MIAE221_069",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Volume of a Mole of Gold",
    "difficulty": "Midterm Level",
    "question": "Lecture 2 review problem: what is the volume of 1 mole of gold (A = 196.97 g/mol, \u03c1 = 19.32 g/cm\u00b3)?",
    "options": [
      "\u2248 10.2 cm\u00b3",
      "\u2248 3805 cm\u00b3",
      "\u2248 0.098 cm\u00b3",
      "\u2248 19.3 cm\u00b3"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Volume = mass / density; 1 mole has a mass of A grams.",
      "stepByStep": [
        "196.97 / 19.32 \u2248 10.2 cm\u00b3."
      ],
      "commonTrap": "Multiplying instead of dividing.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_MIAE221_070",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Stable Electron Configurations",
    "difficulty": "Midterm Level",
    "question": "Which electron configurations are the most stable, according to Lecture 2?",
    "options": [
      "Those with complete s and p subshells (inert gases)",
      "Those with a single valence electron",
      "Those with half-filled p subshells",
      "All configurations are equally stable"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Electrons have discrete energy states and occupy the lowest available state.",
      "stepByStep": [
        "Other atoms gain, lose or share electrons to approach a stable configuration."
      ],
      "commonTrap": "Thinking alkali metals are most stable.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_MIAE221_071",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Bond Energy and State",
    "difficulty": "Midterm Level",
    "question": "How does bonding energy relate to the state of a substance at room temperature?",
    "options": [
      "Solids have large bonding energies, liquids moderate, gases small",
      "Gases have the largest bonding energies",
      "State does not depend on bonding energy",
      "Liquids always have zero bonding energy"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The higher the bond energy, the higher the melting temperature.",
      "stepByStep": [],
      "commonTrap": "Reversing the trend.",
      "reference": "lecture 2-review chemistry-students26.pdf \u00b7 Page 17"
    },
    "source": [
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 17"
      }
    ]
  },
  {
    "id": "Q_MIAE221_072",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Ionic Bond Energies",
    "difficulty": "Foundation",
    "question": "What is the typical range of ionic bonding energies given in Lecture 3?",
    "options": [
      "600 to 1500 kJ/mol (3\u20138 eV/atom)",
      "About 10 kJ/mol",
      "68 to 850 kJ/mol",
      "1 to 5 J/mol"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Ionic: electron transfer, large EN difference, metal + non-metal (NaCl, KF, CsBr, MgO).",
      "stepByStep": [
        "Secondary bonds are about 10 kJ/mol."
      ],
      "commonTrap": "Using the metallic range.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE221_073",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Variability of Covalent Materials",
    "difficulty": "Exam Master",
    "question": "Why is it hard to assign general characteristics to covalently bonded materials?",
    "options": [
      "Bond strength and properties vary widely: diamond (Tm > 3550 \u00b0C) vs bismuth (Tm = 270 \u00b0C); GaAs conducts while diamond insulates",
      "All covalent materials melt at the same temperature",
      "Covalent bonds are always weak",
      "Covalent materials are always metals"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Covalent bonds are directional and can be strong or weak.",
      "stepByStep": [],
      "commonTrap": "Assuming covalent means always strong.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_MIAE221_074",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Metallic Bond Strength",
    "difficulty": "Midterm Level",
    "question": "Which example shows that metallic bonding can be weak or strong?",
    "options": [
      "Hg \u2248 68 kJ/mol (0.7 eV/atom) vs W \u2248 850 kJ/mol (8.8 eV/atom)",
      "NaCl vs MgO",
      "Diamond vs bismuth",
      "H\u2082O vs HF"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Metallic bonding energy varies widely; higher E\u2080 means higher melting point (W vs Hg).",
      "stepByStep": [],
      "commonTrap": "Picking the covalent example.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_MIAE221_075",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Why Metals Are Ductile",
    "difficulty": "Midterm Level",
    "question": "Why does metallic bonding give rise to ductility?",
    "options": [
      "Valence electrons are loosely held and move easily, allowing atoms to slide past each other",
      "Metal atoms are not bonded at all",
      "Metallic bonds are highly directional",
      "Electrons are transferred permanently"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Each atom has several unoccupied valence orbitals; the electron sea lets atoms move relative to each other.",
      "stepByStep": [],
      "commonTrap": "Calling metallic bonds directional.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_MIAE221_076",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Secondary vs Primary Bond Strength",
    "difficulty": "Foundation",
    "question": "How do typical secondary bond strengths compare with primary bonds?",
    "options": [
      "Secondary \u2248 10 kJ/mol vs primary \u2248 50\u20131000 kJ/mol",
      "Secondary bonds are stronger",
      "They are equal",
      "Secondary \u2248 1000 kJ/mol"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Secondary (van der Waals) bonds are physical, not chemical, and exist between almost all atoms and molecules.",
      "stepByStep": [],
      "commonTrap": "Reversing the comparison.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_MIAE221_077",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Bond Type: AlP and BaS",
    "difficulty": "Exam Master",
    "question": "From their positions in the periodic table, what is the bonding in AlP and in BaS?",
    "options": [
      "AlP: predominantly covalent (some ionic); BaS: predominantly ionic (some covalent)",
      "Both purely ionic",
      "Both metallic",
      "AlP ionic; BaS van der Waals"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Elements near each other (Al, P) \u2192 small EN difference \u2192 covalent. Far apart (Ba, S) \u2192 ionic.",
      "stepByStep": [],
      "commonTrap": "Assuming every metal + non-metal pair is purely ionic.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 18"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 18"
      }
    ]
  },
  {
    "id": "Q_MIAE221_078",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Electron Configuration: Halogen",
    "difficulty": "Midterm Level",
    "question": "Practice Set #1: which group does 1s\u00b2 2s\u00b2 2p\u2075 belong to?",
    "options": [
      "Halogen (Group VIIA)",
      "Inert gas (Group 0)",
      "Alkali metal (Group IA)",
      "Transition metal"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "One electron short of a filled 2p subshell \u2192 accepts 1 electron (fluorine).",
      "stepByStep": [],
      "commonTrap": "Calling it inert because the shell is nearly full.",
      "reference": "Practice Problem Set #1.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "Practice Problem Set #1.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE221_079",
    "courseId": "MIAE221",
    "chapter": "bonding",
    "topic": "Atoms in a Gold Wire",
    "difficulty": "Exam Master",
    "question": "Practice Set #1, Q5a: how many atoms are in a gold wire 0.70 mm in diameter and 8.0 cm long (\u03c1 = 19.3 g/cm\u00b3, A = 196.97 g/mol)?",
    "options": [
      "\u2248 1.82 \u00d7 10\u00b2\u00b9 atoms",
      "\u2248 7.3 \u00d7 10\u00b2\u00b9 atoms",
      "\u2248 1.82 \u00d7 10\u00b2\u00b3 atoms",
      "\u2248 3.0 \u00d7 10\u00b9\u2078 atoms"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Volume \u2192 mass \u2192 moles \u2192 atoms.",
      "stepByStep": [
        "V = \u03c0(0.035 cm)\u00b2(8 cm) = 0.0308 cm\u00b3.",
        "m = 19.3 \u00d7 0.0308 = 0.594 g.",
        "n = (0.594/196.97) \u00d7 6.022 \u00d7 10\u00b2\u00b3 \u2248 1.82 \u00d7 10\u00b2\u00b9."
      ],
      "commonTrap": "Using the diameter as the radius (\u00d74).",
      "reference": "Practice Problem Set #1.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "Practice Problem Set #1.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_080",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Energy and Packing",
    "difficulty": "Foundation",
    "question": "According to Lecture 4, why do dense, regular-packed structures form?",
    "options": [
      "They tend to have lower energy",
      "They have higher energy",
      "Random packing is always more stable",
      "Density does not relate to energy"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Dense, regular packing \u2192 lower energy; non-dense, random packing \u2192 higher energy.",
      "stepByStep": [
        "Metals typically adopt dense crystal structures."
      ],
      "commonTrap": "Reversing the energy relation.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_081",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Crystal vs Atomic Structure",
    "difficulty": "Midterm Level",
    "question": "What is the difference between atomic structure and crystal structure?",
    "options": [
      "Atomic structure concerns protons, neutrons and electrons of an atom; crystal structure is the arrangement of atoms in the solid",
      "They are the same thing",
      "Crystal structure concerns the nucleus only",
      "Atomic structure is the arrangement of grains"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Many properties (especially mechanical) are determined by the arrangement of atoms.",
      "stepByStep": [],
      "commonTrap": "Using the terms interchangeably.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE221_082",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Simple Cubic",
    "difficulty": "Foundation",
    "question": "Which element is given as the (rare) example of a simple cubic structure?",
    "options": [
      "Polonium (\u03b1-Po)",
      "Iron",
      "Copper",
      "Magnesium"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Simple cubic: atoms touch along the cube edges; few examples in nature.",
      "stepByStep": [
        "CN = 6, APF = 0.52."
      ],
      "commonTrap": "Choosing a common metal.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 6"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 6"
      }
    ]
  },
  {
    "id": "Q_MIAE221_083",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Lattice Parameter",
    "difficulty": "Foundation",
    "question": "What is a lattice parameter?",
    "options": [
      "The length of a unit-cell axis \u2014 typically a few \u00e5ngstr\u00f6ms (a few tenths of a nanometre)",
      "The number of atoms per unit cell",
      "The angle between planes",
      "The density of the crystal"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "In cubic systems all three lattice parameters are equal (a = b = c).",
      "stepByStep": [],
      "commonTrap": "Confusing it with the atomic radius.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 7"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 7"
      }
    ]
  },
  {
    "id": "Q_MIAE221_084",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Simple Cubic CN and APF",
    "difficulty": "Midterm Level",
    "question": "What are the coordination number and APF of simple cubic?",
    "options": [
      "CN = 6, APF = 0.52",
      "CN = 8, APF = 0.68",
      "CN = 12, APF = 0.74",
      "CN = 4, APF = 0.34"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "APF_SC = (1 \u00d7 4/3 \u03c0(0.5a)\u00b3)/a\u00b3 = \u03c0/6 \u2248 0.52.",
      "stepByStep": [
        "CN = 6 nearest neighbours."
      ],
      "commonTrap": "Using the BCC values.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 8; lecture 5-crystal structure 2-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      },
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_085",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Counting Atoms per Cell",
    "difficulty": "Foundation",
    "question": "Which formula gives the number of atoms per unit cell?",
    "options": [
      "N = N\u1d62 + N_f/2 + N_c/8",
      "N = N\u1d62 + N_f + N_c",
      "N = N\u1d62/8 + N_f/2 + N_c",
      "N = 8N_c"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Interior atoms count fully, face atoms are shared by 2 cells, corner atoms by 8.",
      "stepByStep": [
        "SC = 1, BCC = 2, FCC = 4."
      ],
      "commonTrap": "Counting shared atoms fully.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 8"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      }
    ]
  },
  {
    "id": "Q_MIAE221_086",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "BCC Metals",
    "difficulty": "Foundation",
    "question": "Which metals are given as BCC examples in Lecture 4?",
    "options": [
      "Cr, W, Mo, Ta, and Fe below 912 \u00b0C",
      "Cu, Ni, Au, Ag",
      "Mg, Co, Ti, Zn",
      "Po only"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "BCC: atoms touch along the body diagonal (close-packed directions); CN = 8.",
      "stepByStep": [
        "FCC: Cu, Ni, Au, Ag. HCP: Mg, Co, Ti, Zn, Zr."
      ],
      "commonTrap": "Mixing up the lists.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_MIAE221_087",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "FCC Close-Packed Directions",
    "difficulty": "Midterm Level",
    "question": "Along which directions do atoms touch (close-packed directions) in FCC?",
    "options": [
      "Face diagonals",
      "Cube edges",
      "Body diagonals",
      "There are none"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "SC: cube edges. BCC: body diagonals. FCC: face diagonals.",
      "stepByStep": [
        "That is why a = 2R\u221a2 in FCC."
      ],
      "commonTrap": "Using the BCC answer.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_MIAE221_088",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "HCP Metals",
    "difficulty": "Foundation",
    "question": "Which metals are listed as HCP?",
    "options": [
      "Mg, Co, Ti, Zn, Zr",
      "Cu, Ni, Au, Ag",
      "Cr, W, Mo, Ta",
      "Fe at all temperatures"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "HCP: 6 atoms per cell, CN = 12, APF = 0.74, stacking ABAB\u2026",
      "stepByStep": [],
      "commonTrap": "Choosing FCC metals.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 13"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 13"
      }
    ]
  },
  {
    "id": "Q_MIAE221_089",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Tetragonal System",
    "difficulty": "Midterm Level",
    "question": "Which describes the tetragonal crystal system?",
    "options": [
      "a = b \u2260 c, \u03b1 = \u03b2 = \u03b3 = 90\u00b0",
      "a = b = c, \u03b1 = \u03b2 = \u03b3 = 90\u00b0",
      "a \u2260 b \u2260 c, all angles 90\u00b0",
      "a = b \u2260 c, \u03b3 = 120\u00b0"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cubic: a = b = c. Tetragonal: one axis different. Orthorhombic: all different, still 90\u00b0. Hexagonal: a = b \u2260 c, \u03b3 = 120\u00b0.",
      "stepByStep": [],
      "commonTrap": "Confusing tetragonal with hexagonal.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 16"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 16"
      }
    ]
  },
  {
    "id": "Q_MIAE221_090",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Direction Indices",
    "difficulty": "Midterm Level",
    "question": "A direction vector goes from the origin to the point (1, \u00bd, 1). What are its Miller indices?",
    "options": [
      "[212]",
      "[121]",
      "[1 \u00bd 1]",
      "(212)"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Take the projections, clear fractions by multiplying by the smallest factor, and use square brackets.",
      "stepByStep": [
        "(1, \u00bd, 1) \u00d7 2 = (2, 1, 2)."
      ],
      "commonTrap": "Leaving the fraction or using parentheses (which are for planes).",
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_MIAE221_091",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Plane Indices",
    "difficulty": "Midterm Level",
    "question": "A plane intercepts the axes at x = 1, y = 1 and z = \u00bd. What are its Miller indices?",
    "options": [
      "(112)",
      "(221)",
      "(11\u00bd)",
      "[112]"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Take reciprocals of the intercepts: 1/1, 1/1, 1/\u00bd.",
      "stepByStep": [
        "(1, 1, 2)."
      ],
      "commonTrap": "Forgetting the reciprocal of \u00bd.",
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_MIAE221_092",
    "courseId": "MIAE221",
    "chapter": "crystal",
    "topic": "Plane Through the Origin",
    "difficulty": "Midterm Level",
    "question": "What should you do if the plane passes through the origin?",
    "options": [
      "Select an equivalent plane or move the origin",
      "Its indices are (000)",
      "Take the reciprocal of zero",
      "Planes through the origin have no indices"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Method: move origin if needed \u2192 intercepts in a, b, c \u2192 reciprocals (1/\u221e = 0) \u2192 smallest integers \u2192 parentheses.",
      "stepByStep": [],
      "commonTrap": "Dividing by zero.",
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 19"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 19"
      }
    ]
  },
  {
    "id": "Q_MIAE221_093",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Copper: Structure and Bonding",
    "difficulty": "Midterm Level",
    "question": "Which description fits copper?",
    "options": [
      "Metallic bonding, FCC, CN = 12, APF = 0.74",
      "Ionic bonding, BCC, CN = 8",
      "Covalent bonding, SC, CN = 6",
      "Van der Waals bonding, HCP"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Cu is a metal (electron sea) with an FCC structure.",
      "stepByStep": [],
      "commonTrap": "Mixing up FCC and BCC values.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 10; lecture 4-crystal structure 1-students26.pdf \u00b7 Page 11"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 10"
      },
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 11"
      }
    ]
  },
  {
    "id": "Q_MIAE221_094",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Density of BCC Iron",
    "difficulty": "Exam Master",
    "question": "Iron is BCC with R = 0.124 nm and A = 55.85 g/mol. What is its theoretical density?",
    "options": [
      "\u2248 7.90 g/cm\u00b3",
      "\u2248 3.95 g/cm\u00b3",
      "\u2248 15.8 g/cm\u00b3",
      "\u2248 8.89 g/cm\u00b3"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "\u03c1 = nA / (V_C N_A), with n = 2 and a = 4R/\u221a3 for BCC.",
      "stepByStep": [
        "a = 4(0.124)/\u221a3 = 0.2864 nm \u2192 V_C = 2.349 \u00d7 10\u207b\u00b2\u00b3 cm\u00b3.",
        "\u03c1 = 2 \u00d7 55.85 / (2.349 \u00d7 10\u207b\u00b2\u00b3 \u00d7 6.022 \u00d7 10\u00b2\u00b3) \u2248 7.90 g/cm\u00b3."
      ],
      "commonTrap": "Using n = 4 (FCC), which doubles the answer.",
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 8; lecture 4-crystal structure 1-students26.pdf \u00b7 Page 10"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      },
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 10"
      }
    ]
  },
  {
    "id": "Q_MIAE221_095",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "FCC Cell Volume",
    "difficulty": "Midterm Level",
    "question": "What is the FCC unit-cell volume in terms of the atomic radius R?",
    "options": [
      "16\u221a2 R\u00b3",
      "64R\u00b3/(3\u221a3)",
      "8R\u00b3",
      "4R\u00b3"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "a = 2R\u221a2 \u2192 a\u00b3 = 8 \u00d7 2\u221a2 R\u00b3 = 16\u221a2 R\u00b3.",
      "stepByStep": [
        "64R\u00b3/(3\u221a3) is the BCC volume."
      ],
      "commonTrap": "Cubing only the 2.",
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 4"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 4"
      }
    ]
  },
  {
    "id": "Q_MIAE221_096",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Atoms per cm\u00b3",
    "difficulty": "Exam Master",
    "question": "Using the Lecture 5 copper example (4 atoms per cell, V_C = 4.75 \u00d7 10\u207b\u00b2\u00b3 cm\u00b3), how many atoms are in 1 cm\u00b3 of copper?",
    "options": [
      "\u2248 8.4 \u00d7 10\u00b2\u00b2 atoms",
      "\u2248 2.1 \u00d7 10\u00b2\u00b2 atoms",
      "\u2248 6.0 \u00d7 10\u00b2\u00b3 atoms",
      "\u2248 4.0 \u00d7 10\u00b2\u00b3 atoms"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Atoms per volume = n / V_C.",
      "stepByStep": [
        "4 / 4.75 \u00d7 10\u207b\u00b2\u00b3 \u2248 8.4 \u00d7 10\u00b2\u00b2; check: \u03c1N_A/A = 8.89 \u00d7 6.022 \u00d7 10\u00b2\u00b3 / 63.5 \u2248 8.4 \u00d7 10\u00b2\u00b2."
      ],
      "commonTrap": "Using Avogadro's number directly.",
      "reference": "lecture 5-crystal structure 2-students26.pdf \u00b7 Page 8; lecture 2-review chemistry-students26.pdf \u00b7 Page 12"
    },
    "source": [
      {
        "deck": "lecture 5-crystal structure 2-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 8"
      },
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 12"
      }
    ]
  },
  {
    "id": "Q_MIAE221_097",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Bond Energy and Melting",
    "difficulty": "Midterm Level",
    "question": "Using Lecture 3 data, which metal should have the higher melting temperature: Hg (\u2248 68 kJ/mol) or W (\u2248 850 kJ/mol)?",
    "options": [
      "W, because a larger bond energy E\u2080 gives a larger Tm",
      "Hg, because it is heavier",
      "They melt at the same temperature",
      "It cannot be predicted from bond energy"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Tm is larger if E\u2080 is larger (deeper potential well).",
      "stepByStep": [
        "Hg is liquid at room temperature; W melts above 3400 \u00b0C."
      ],
      "commonTrap": "Ignoring the bond-energy trend.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 11; lecture 3-review chemistry 2-students26.pdf \u00b7 Page 14"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 11"
      },
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 14"
      }
    ]
  },
  {
    "id": "Q_MIAE221_098",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Polymers: Bonding and Properties",
    "difficulty": "Midterm Level",
    "question": "Rubber and nylon are composed mainly of C and H. Which statement fits them?",
    "options": [
      "Covalent bonding within chains with some van der Waals bonding, giving low conductivity",
      "Metallic bonding, giving high conductivity",
      "Purely ionic bonding, making them brittle",
      "Hydrogen bonding only"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Lecture 3 summary: rubber and nylon \u2192 covalent with some van der Waals.",
      "stepByStep": [
        "Polymers have low electrical and thermal conductivity in the Lecture 2 table."
      ],
      "commonTrap": "Choosing metallic because polymers can be flexible.",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 18; lecture 2-review chemistry-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 18"
      },
      {
        "deck": "lecture 2-review chemistry-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 2"
      }
    ]
  },
  {
    "id": "Q_MIAE221_099",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Iron Polymorphism and Packing",
    "difficulty": "Exam Master",
    "question": "When iron transforms from BCC to FCC at 912 \u00b0C, how does its packing change?",
    "options": [
      "APF increases from 0.68 to 0.74 (denser packing)",
      "APF decreases from 0.74 to 0.68",
      "APF stays the same",
      "It becomes simple cubic"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Fe: BCC below 912 \u00b0C, FCC above.",
      "stepByStep": [
        "BCC APF 0.68; FCC APF 0.74."
      ],
      "commonTrap": "Reversing the two structures.",
      "reference": "lecture 4-crystal structure 1-students26.pdf \u00b7 Page 9; lecture 4-crystal structure 1-students26.pdf \u00b7 Page 1"
    },
    "source": [
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 9"
      },
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 1"
      }
    ]
  },
  {
    "id": "Q_MIAE221_100",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Liberty Ships and Crystal Structure",
    "difficulty": "Midterm Level",
    "question": "The Liberty ship failures (WWII) were caused by a ductile-to-brittle transition in which crystal structure of iron?",
    "options": [
      "BCC",
      "FCC",
      "HCP",
      "Simple cubic"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "Lecture 1: D-B-T in BCC Fe. Iron is BCC below 912 \u00b0C (Lecture 4).",
      "stepByStep": [
        "This links structure to catastrophic failure."
      ],
      "commonTrap": "Choosing FCC.",
      "reference": "lecture 1-introduction-2026-students (1).pdf \u00b7 Page 12; lecture 4-crystal structure 1-students26.pdf \u00b7 Page 9"
    },
    "source": [
      {
        "deck": "lecture 1-introduction-2026-students (1).pdf",
        "chapter": "Ch. 1 \u2014 Introduction",
        "location": "Page 12"
      },
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 9"
      }
    ]
  },
  {
    "id": "Q_MIAE221_101",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Ionic Character of MgO",
    "difficulty": "Exam Master",
    "question": "With X_Mg = 1.2 and X_O = 3.5, what is the percent ionic character of MgO?",
    "options": [
      "\u2248 73%",
      "\u2248 27%",
      "\u2248 50%",
      "100%"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "% IC = [1 \u2212 exp(\u22120.25 \u0394X\u00b2)] \u00d7 100%.",
      "stepByStep": [
        "\u0394X = 2.3 \u2192 0.25 \u00d7 5.29 = 1.3225 \u2192 1 \u2212 e^(\u22121.3225) = 1 \u2212 0.266 = 0.734."
      ],
      "commonTrap": "Reporting the covalent fraction (27%).",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 9; lecture 3-review chemistry 2-students26.pdf \u00b7 Page 3"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 9"
      },
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 3"
      }
    ]
  },
  {
    "id": "Q_MIAE221_102",
    "courseId": "MIAE221",
    "chapter": "mixed",
    "topic": "Why Metals Pack Densely",
    "difficulty": "Midterm Level",
    "question": "Why are metals usually found in dense structures such as FCC, BCC and HCP?",
    "options": [
      "Metallic bonding is non-directional, and dense regular packing has lower energy",
      "Metallic bonds are highly directional",
      "Metals have no bonding",
      "Dense packing has higher energy"
    ],
    "correctIndex": 0,
    "explanation": {
      "coreConcept": "The electron sea does not restrict bond angles, so atoms pack as closely as possible.",
      "stepByStep": [
        "Dense, regular packing \u2192 lower energy (Lecture 4)."
      ],
      "commonTrap": "Calling metallic bonds directional (that is covalent).",
      "reference": "lecture 3-review chemistry 2-students26.pdf \u00b7 Page 10; lecture 4-crystal structure 1-students26.pdf \u00b7 Page 2"
    },
    "source": [
      {
        "deck": "lecture 3-review chemistry 2-students26.pdf",
        "chapter": "Ch. 2 \u2014 Atomic Structure & Bonding",
        "location": "Page 10"
      },
      {
        "deck": "lecture 4-crystal structure 1-students26.pdf",
        "chapter": "Ch. 3 \u2014 Crystal Structures",
        "location": "Page 2"
      }
    ]
  }
];
