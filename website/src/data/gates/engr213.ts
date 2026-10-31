// ENGR213 exam-prep content: past-exam questions, topics, lessons, repeat clusters and study videos.
// Formerly the encrypted Midterm Gate; migrated to plain data when the password was removed (see ARCHITECTURE.md, Part C).
import type { GateContent } from './types';

const content: GateContent = {
 "version": 2,
 "course": "ENGR213",
 "builtFor": "ENGR 213 · Fall 2026 Midterm 1",
 "midterm": {
  "date": "2026-10-23",
  "label": "Midterm 1 · Fri Oct 23, 2:00–3:45 PM · GNM 100",
  "scope": "Chapter 2 (separable, linear, exact, substitutions, linear & nonlinear models) and Sections 17.1–17.2 (complex numbers), with the Chapter 1 basics they build on"
 },
 "labTitle": "Method Lab",
 "labBlurb": "Every solving method on Midterm 1, in lecture order. Each one: the idea, a past-exam problem solved step by step (reveal one line at a time), a calculator where the problem is numeric, and a practice set of real past questions. For “solve” questions, work on paper, reveal the solution, and mark yourself honestly.",
 "docs": {
  "l1": {
   "title": "Lecture 1 · Introduction",
   "path": "Engr 213/01 - Teacher Lecture Notes/Lecture 1 - Introduction to Differential Equations.pdf"
  },
  "l2": {
   "title": "Lecture 2 · IVPs & direction fields",
   "path": "Engr 213/01 - Teacher Lecture Notes/Lecture 2 - IVPs and Direction Fields.pdf"
  },
  "l3": {
   "title": "Lecture 3 · Separable & linear",
   "path": "Engr 213/01 - Teacher Lecture Notes/Lecture 3 - Separable and Linear Equations.pdf"
  },
  "l4": {
   "title": "Lecture 4 · Exact",
   "path": "Engr 213/01 - Teacher Lecture Notes/Lecture 4 - Exact Equations.pdf"
  },
  "l5": {
   "title": "Lecture 5 · Substitutions",
   "path": "Engr 213/01 - Teacher Lecture Notes/Lecture 5, September 23 2026.pdf"
  },
  "l6": {
   "title": "Lecture 6 · Linear models",
   "path": "Engr 213/01 - Teacher Lecture Notes/Lecture 6 - Linear Models, September 25 2026.pdf"
  },
  "l7": {
   "title": "Lecture 7 · Nonlinear models",
   "path": "Engr 213/01 - Teacher Lecture Notes/ENGR213, Lecture 7, September 30 2026.pdf"
  },
  "l8": {
   "title": "Lecture 8 · Complex numbers",
   "path": "Engr 213/01 - Teacher Lecture Notes/ENGR213, Lecture 8, October 2 2026.pdf"
  },
  "e3": {
   "title": "Lecture 3 explained",
   "path": "Engr 213/02 - Lecture Notes Explained/Lecture 3 - Separable and Linear Equations (Explained).pdf"
  },
  "e4": {
   "title": "Lecture 4 explained",
   "path": "Engr 213/02 - Lecture Notes Explained/Lecture 4 - Exact Equations (Explained).pdf"
  },
  "e5": {
   "title": "Lecture 5 explained",
   "path": "Engr 213/02 - Lecture Notes Explained/Lecture 5 - Solutions by Substitutions (Explained).pdf"
  },
  "e6": {
   "title": "Lecture 6 explained",
   "path": "Engr 213/02 - Lecture Notes Explained/Lecture 6 - Linear Mathematical Models (Explained).pdf"
  },
  "e7": {
   "title": "Lecture 7 explained",
   "path": "Engr 213/02 - Lecture Notes Explained/Lecture 7 - Non-Linear Models (Explained).pdf"
  },
  "e8": {
   "title": "Lecture 8 explained",
   "path": "Engr 213/02 - Lecture Notes Explained/Lecture 8 - Complex Numbers, Powers & Roots (Explained).pdf"
  },
  "ch2": {
   "title": "Chapter 2 expanded",
   "path": "Engr 213/02 - Textbook Expanded Notes/Chapter 02 - First-Order Differential Equations & Modeling (Expanded).pdf"
  },
  "ch17": {
   "title": "Chapter 17 expanded",
   "path": "Engr 213/02 - Textbook Expanded Notes/Chapter 17 - Complex Numbers, Powers & De Moivre's Formula (Expanded).pdf"
  },
  "calc": {
   "title": "Calculus for ODEs master sheet",
   "path": "Engr 213/00 - Calculus Review for ODEs/Calculus for Differential Equations - Master Sheet.pdf"
  },
  "paradis": {
   "title": "Paradis notes · Midterm 1 compendium",
   "path": "Engr 213/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Paradis notes - ENGR 213 In-Class Lecture, Tutorial & Midterm 1 Preparation Master Compendium.pdf"
  },
  "pastmid": {
   "title": "Past midterms solved (2011–2018)",
   "path": "Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Past Midterm Examinations Solved Master Guide (2011-2018).pdf"
  },
  "bank": {
   "title": "Winter 2025 quizzes & tests solved",
   "path": "Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Quizzes & Term Tests Official Solved Examination Bank (Winter 2025).pdf"
  },
  "s25": {
   "title": "Topic 2.5 summary · substitutions",
   "path": "Engr 213/04 - Chapter 2 Summary/Topic 2.5 - Solutions by Substitution (Bernoulli & Homogeneous).pdf"
  }
 },
 "overview": {
  "headline": "Five problem types, every paper",
  "points": [
   "F18, W17 and W25 Term Test 1 each have five problems drawn from the same menu: separable, linear, exact, Bernoulli or homogeneous, and one model (growth/decay, cooling, logistic).",
   "Exact equations appeared on all three midterms; separable on every paper including the quizzes.",
   "Dr. Eskandarian’s quizzes recycle questions word for word: the same classification equations, “every IVP has a unique solution” (False), 5y′ + 30y = 6, dx/dt = t(x − 1).",
   "Complex numbers (CH 17.1–17.2) are new to this midterm’s scope and only appeared on W25: easy marks if you practise the four operations and De Moivre.",
   "For solve-questions this folder shows the answer and the key steps; drills ask you to mark yourself after revealing."
  ]
 },
 "exams": [
  {
   "id": "F18",
   "short": "F18 MT1",
   "label": "Fall 2018 Midterm 1 (Oct 19, 2018)",
   "kind": "midterm",
   "detail": "5 problems, all Chapter 2",
   "count": 5
  },
  {
   "id": "W17",
   "short": "W17 MT1",
   "label": "Winter 2017 First Midterm (Feb 5, 2017)",
   "kind": "midterm",
   "detail": "5 problems: classification, verify + interval, separable, exact, Bernoulli",
   "count": 9
  },
  {
   "id": "W25T",
   "short": "W25 T1",
   "label": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025)",
   "kind": "midterm",
   "detail": "5 problems: separable/linear, complex numbers, exact IVP, logistic, cooling",
   "count": 7
  },
  {
   "id": "W25Q",
   "short": "W25 Q",
   "label": "Winter 2025 Quizzes 1–2",
   "kind": "quiz",
   "detail": "15-minute in-class quizzes",
   "count": 2
  },
  {
   "id": "S21",
   "short": "S21 Q",
   "label": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian)",
   "kind": "quiz",
   "detail": "Classification, T/F, separable, linear, exact, Bernoulli, growth",
   "count": 9
  },
  {
   "id": "F21",
   "short": "F21 Q1",
   "label": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it",
   "kind": "quiz",
   "detail": "Almost the same paper as Summer 2021 Quiz 1",
   "count": 8
  },
  {
   "id": "OQ",
   "short": "Other Q",
   "label": "Other Concordia quizzes (2016–2022, WebWork)",
   "kind": "quiz",
   "detail": "Single problems from several sections",
   "count": 15
  }
 ],
 "subjects": [
  {
   "id": "basics",
   "name": "Chapter 1: terminology & IVPs",
   "ch": "Ch 1 · Lectures 1–2",
   "blurb": "Order, linearity, verifying solutions, existence and uniqueness.",
   "topics": [
    "classify",
    "solution"
   ]
  },
  {
   "id": "methods",
   "name": "Chapter 2: solving first-order ODEs",
   "ch": "Ch 2.2–2.5 · Lectures 3–5",
   "blurb": "Separable, linear, exact, Bernoulli, homogeneous: most of the paper.",
   "topics": [
    "sep",
    "lin",
    "exact",
    "bern",
    "homog"
   ]
  },
  {
   "id": "models",
   "name": "Chapter 2: models",
   "ch": "Ch 2.7–2.8 · Lectures 6–7",
   "blurb": "Growth/decay, cooling, logistic.",
   "topics": [
    "growth",
    "cool",
    "logis"
   ]
  },
  {
   "id": "complex",
   "name": "Complex numbers",
   "ch": "CH 17.1–17.2 · Lecture 8",
   "blurb": "Arithmetic, modulus, polar form, powers and roots.",
   "topics": [
    "cplx",
    "roots"
   ]
  },
  {
   "id": "higher-order",
   "name": "Chapter 3: Higher-order linear ODEs",
   "ch": "Ch 3.1–3.6 · Lectures 9–14",
   "blurb": "Wronskian, constant coefficients, undetermined coefficients, variation of parameters, and Cauchy–Euler equations.",
   "topics": [
    "wronskian",
    "const-coeff",
    "undet-coeff",
    "var-param",
    "cauchy-euler"
   ]
  }
 ],
 "topics": [
  {
   "id": "classify",
   "name": "Order, linearity & terminology",
   "ch": "Ch 1.1",
   "lec": [
    {
     "d": "l1"
    }
   ],
   "cal": "Zill 1.1"
  },
  {
   "id": "solution",
   "name": "Verifying solutions, IVPs, existence & uniqueness",
   "ch": "Ch 1.2–2.1",
   "lec": [
    {
     "d": "l2"
    }
   ],
   "cal": "Zill 1.2, 2.1"
  },
  {
   "id": "sep",
   "name": "Separable equations",
   "ch": "Ch 2.2",
   "lec": [
    {
     "d": "l3"
    }
   ],
   "cal": "Zill 2.2"
  },
  {
   "id": "lin",
   "name": "Linear equations (integrating factor)",
   "ch": "Ch 2.3",
   "lec": [
    {
     "d": "l3"
    }
   ],
   "cal": "Zill 2.3"
  },
  {
   "id": "exact",
   "name": "Exact equations",
   "ch": "Ch 2.4",
   "lec": [
    {
     "d": "l4"
    }
   ],
   "cal": "Zill 2.4"
  },
  {
   "id": "bern",
   "name": "Bernoulli equations",
   "ch": "Ch 2.5",
   "lec": [
    {
     "d": "l5"
    }
   ],
   "cal": "Zill 2.5"
  },
  {
   "id": "homog",
   "name": "Homogeneous substitution y = ux",
   "ch": "Ch 2.5",
   "lec": [
    {
     "d": "l5"
    }
   ],
   "cal": "Zill 2.5"
  },
  {
   "id": "growth",
   "name": "Growth & decay",
   "ch": "Ch 2.7",
   "lec": [
    {
     "d": "l6"
    }
   ],
   "cal": "Zill 2.7"
  },
  {
   "id": "cool",
   "name": "Newton’s law of cooling",
   "ch": "Ch 2.7",
   "lec": [
    {
     "d": "l6"
    }
   ],
   "cal": "Zill 2.7"
  },
  {
   "id": "logis",
   "name": "Logistic & nonlinear models",
   "ch": "Ch 2.8",
   "lec": [
    {
     "d": "l7"
    }
   ],
   "cal": "Zill 2.8"
  },
  {
   "id": "cplx",
   "name": "Complex arithmetic, modulus & polar form",
   "ch": "CH 17.1",
   "lec": [
    {
     "d": "l8"
    }
   ],
   "cal": "Zill 17.1"
  },
  {
   "id": "roots",
   "name": "Powers & roots (De Moivre)",
   "ch": "CH 17.2",
   "lec": [
    {
     "d": "l8"
    }
   ],
   "cal": "Zill 17.2"
  },
  {
   "id": "wronskian",
   "name": "Theory of higher-order linear equations & the Wronskian",
   "ch": "Ch 3.1–3.2 · Lectures 9–10",
   "lec": [],
   "cal": "Zill 3.1–3.2"
  },
  {
   "id": "const-coeff",
   "name": "Homogeneous linear ODEs with constant coefficients",
   "ch": "Ch 3.3 · Lecture 11",
   "lec": [],
   "cal": "Zill 3.3"
  },
  {
   "id": "undet-coeff",
   "name": "Undetermined coefficients (superposition approach)",
   "ch": "Ch 3.4 · Lecture 12",
   "lec": [],
   "cal": "Zill 3.4"
  },
  {
   "id": "var-param",
   "name": "Method of variation of parameters",
   "ch": "Ch 3.5 · Lecture 13",
   "lec": [],
   "cal": "Zill 3.5"
  },
  {
   "id": "cauchy-euler",
   "name": "Cauchy–Euler equations",
   "ch": "Ch 3.6 · Lecture 14",
   "lec": [],
   "cal": "Zill 3.6"
  }
 ],
 "questions": [
  {
   "id": "F18-1",
   "exam": "F18",
   "n": 1,
   "topic": "sep",
   "kind": "open",
   "q": "Solve the IVP $\\dfrac{dy}{dx} = \\dfrac{3x^2y}{1 + x^3}$, $y(1) = 2$.",
   "ans": "$y = 1 + x^3$",
   "steps": [
    "Separate: $\\frac{dy}{y} = \\frac{3x^2}{1+x^3}dx$",
    "Integrate (u = 1 + x³): $\\ln|y| = \\ln|1 + x^3| + C_1$",
    "Exponentiate: $y = C(1 + x^3)$; the constant multiplies.",
    "$y(1) = 2 \\Rightarrow 2 = 2C \\Rightarrow C = 1$"
   ],
   "status": "verified",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "F18-2",
   "exam": "F18",
   "n": 2,
   "topic": "bern",
   "kind": "open",
   "q": "Solve $\\dfrac{dy}{dx} + 2xy = -xy^4$.",
   "ans": "$y = \\left(-\\tfrac12 + Ce^{3x^2}\\right)^{-1/3}$",
   "steps": [
    "Bernoulli with $n = 4$: let $u = y^{-3}$, $u' = -3y^{-4}y'$",
    "Divide by $y^4$ and substitute: $-\\frac13u' + 2xu = -x \\Rightarrow u' - 6xu = 3x$",
    "Integrating factor $e^{-3x^2}$: $(ue^{-3x^2})' = 3xe^{-3x^2}$",
    "$ue^{-3x^2} = -\\frac12e^{-3x^2} + C \\Rightarrow u = -\\frac12 + Ce^{3x^2}$",
    "Back: $y^{-3} = u$"
   ],
   "status": "verified",
   "f": [
    "M-bern"
   ]
  },
  {
   "id": "F18-3",
   "exam": "F18",
   "n": 3,
   "topic": "exact",
   "kind": "open",
   "q": "Solve $(4x^3 + 3x^2 + 3y)\\,dx + (3x + 2y + 1)\\,dy = 0$.",
   "ans": "$x^4 + x^3 + 3xy + y^2 + y = C$",
   "steps": [
    "$M_y = 3 = N_x$: exact",
    "$F = \\int M\\,dx = x^4 + x^3 + 3xy + g(y)$",
    "$F_y = 3x + g'(y) = N \\Rightarrow g' = 2y + 1 \\Rightarrow g = y^2 + y$"
   ],
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "F18-4",
   "exam": "F18",
   "n": 4,
   "topic": "homog",
   "kind": "open",
   "q": "Solve $(x^3 + y^3)\\,dx - 3xy^2\\,dy = 0$, $y(1) = 1$.",
   "ans": "$y = \\sqrt[3]{\\dfrac{x^3 + x}{2}}$",
   "steps": [
    "Both coefficients are homogeneous of degree 3: put $y = vx$, $dy = v\\,dx + x\\,dv$",
    "Divide by $x^3$: $(1 - 2v^3)dx = 3v^2x\\,dv$",
    "Separate and integrate: $\\ln|x| = -\\frac12\\ln|1 - 2v^3| + c \\Rightarrow x^2(1 - 2v^3) = C$",
    "Back-substitute: $x^3 - 2y^3 = Cx$; $y(1) = 1 \\Rightarrow C = -1$"
   ],
   "status": "verified",
   "f": [
    "M-homog"
   ]
  },
  {
   "id": "F18-5",
   "exam": "F18",
   "n": 5,
   "topic": "growth",
   "kind": "num",
   "q": "Bacteria grow at a rate proportional to the number present. The number triples in 4 hours. How many times the initial population is there after 12 hours?",
   "ans": "27",
   "unit": "× initial",
   "status": "verified",
   "steps": [
    "$x = x_0e^{kt}$, $e^{4k} = 3$",
    "$x(12) = x_0(e^{4k})^3 = 27x_0$"
   ],
   "f": [
    "M-growth"
   ]
  },
  {
   "id": "W17-1a",
   "exam": "W17",
   "n": "1a",
   "topic": "classify",
   "kind": "mc",
   "q": "Order and linearity of $\\dfrac{d^2y}{dx^2} = \\left(\\dfrac{dy}{dx}\\right)^4$?",
   "opts": [
    "2nd order linear",
    "2nd order nonlinear",
    "4th order linear",
    "4th order nonlinear"
   ],
   "ans": "b",
   "status": "verified",
   "note": "Order = highest derivative (2nd). The 4th power of y′ makes it nonlinear; it is not a 4th derivative.",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "W17-1b",
   "exam": "W17",
   "n": "1b",
   "topic": "classify",
   "kind": "mc",
   "q": "Order and linearity of $y'' = \\sqrt{5x^6 + (\\sin x)\\,y^{(8)}}$?",
   "opts": [
    "2nd order nonlinear",
    "8th order linear",
    "8th order nonlinear",
    "2nd order linear"
   ],
   "ans": "c",
   "status": "verified",
   "note": "y⁽⁸⁾ is the highest derivative, and it sits inside a square root → nonlinear.",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "W17-1c",
   "exam": "W17",
   "n": "1c",
   "topic": "classify",
   "kind": "mc",
   "q": "Order and linearity of $e^{-x}y' + (4\\sin x)y = (\\tan x)y'' - 4e^{-x^2}$?",
   "opts": [
    "1st order linear",
    "1st order nonlinear",
    "2nd order linear",
    "2nd order nonlinear"
   ],
   "ans": "c",
   "status": "verified",
   "note": "Every y-term is (function of x) × (y or a derivative): linear. Highest derivative y″.",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "W17-1d",
   "exam": "W17",
   "n": "1d",
   "topic": "classify",
   "kind": "mc",
   "q": "Order and linearity of $\\dfrac{dy}{dt} = 1 - t^2$?",
   "opts": [
    "1st order linear",
    "1st order nonlinear",
    "2nd order linear",
    "2nd order nonlinear"
   ],
   "ans": "a",
   "status": "verified",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "W17-1e",
   "exam": "W17",
   "n": "1e",
   "topic": "classify",
   "kind": "mc",
   "q": "Order and linearity of $x^2y'' + xy' + (x^2 - \\nu^2)y = 0$?",
   "opts": [
    "1st order linear",
    "1st order nonlinear",
    "2nd order linear",
    "2nd order nonlinear"
   ],
   "ans": "c",
   "status": "verified",
   "note": "Bessel’s equation: coefficients may depend on x; still linear in y.",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "W17-2",
   "exam": "W17",
   "n": 2,
   "topic": "solution",
   "kind": "open",
   "q": "Show that $y = \\tfrac14e^{3x} + ce^{-x}$ solves $\\dfrac{dy}{dx} + y = e^{3x}$. What is the largest interval of existence for the IVP $y(-3) = 15$?",
   "ans": "It satisfies the ODE; the interval is $(-\\infty, \\infty)$.",
   "steps": [
    "$y' = \\frac34e^{3x} - ce^{-x}$, so $y' + y = \\frac34e^{3x} + \\frac14e^{3x} = e^{3x}$ ✓",
    "Linear with $P(x) = 1$, $f(x) = e^{3x}$, both continuous on all of $\\mathbb R$ → a unique solution exists on $(-\\infty, \\infty)$"
   ],
   "status": "verified",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "W17-3",
   "exam": "W17",
   "n": 3,
   "topic": "sep",
   "kind": "open",
   "q": "Solve $y' = y^2 - 4y + 3$ with $y(0) = 3$.",
   "ans": "$y(x) = 3$ for all x (an equilibrium solution).",
   "steps": [
    "Factor: $y' = (y - 1)(y - 3)$",
    "$y \\equiv 3$ makes the right side 0 and satisfies $y(0) = 3$",
    "Separating and using partial fractions divides by $(y - 3) = 0$ and loses exactly this solution"
   ],
   "status": "verified",
   "note": "A trap: students who separate get an answer that cannot satisfy y(0) = 3. Always check for constant solutions first.",
   "f": [
    "M-sep",
    "M-ivp"
   ]
  },
  {
   "id": "W17-4",
   "exam": "W17",
   "n": 4,
   "topic": "exact",
   "kind": "open",
   "q": "Solve $\\dfrac{dy}{dx} = \\dfrac{xy^2 - \\cos x\\sin x}{y(1 - x^2)}$, $y(0) = 2$.",
   "ans": "$y^2(1 - x^2) + \\sin^2x = 4$, i.e. $y = \\sqrt{\\dfrac{4 - \\sin^2x}{1 - x^2}}$",
   "steps": [
    "Rewrite: $(xy^2 - \\sin x\\cos x)\\,dx + (x^2y - y)\\,dy = 0$",
    "$M_y = 2xy = N_x$: exact",
    "$F = \\frac{x^2y^2}{2} - \\frac{\\sin^2x}{2} - \\frac{y^2}{2}$",
    "$y(0) = 2$: $-\\frac42 = C$ → $y^2(x^2 - 1) - \\sin^2x = -4$"
   ],
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "W17-5",
   "exam": "W17",
   "n": 5,
   "topic": "bern",
   "kind": "open",
   "q": "Solve $\\dfrac{dx}{dy} = x(yx^3 - 1)$.",
   "ans": "$x^{-3} = y + \\tfrac13 + Ce^{3y}$",
   "steps": [
    "Treat x as the unknown: $\\frac{dx}{dy} + x = yx^4$, Bernoulli with $n = 4$",
    "$u = x^{-3}$: $u' - 3u = -3y$",
    "$\\mu = e^{-3y}$: $(ue^{-3y})' = -3ye^{-3y} \\Rightarrow ue^{-3y} = ye^{-3y} + \\frac13e^{-3y} + C$"
   ],
   "status": "verified",
   "note": "The twist is that x is the dependent variable. The method does not change.",
   "f": [
    "M-bern"
   ]
  },
  {
   "id": "W25T-5a",
   "exam": "W25T",
   "n": "1.1",
   "topic": "sep",
   "kind": "open",
   "q": "General solution of $\\dfrac{dy}{dx} = \\sin(3x)$.",
   "ans": "$y = -\\tfrac13\\cos(3x) + C$",
   "status": "verified",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "W25T-5b",
   "exam": "W25T",
   "n": "1.2",
   "topic": "lin",
   "kind": "open",
   "q": "General solution of $y' + \\dfrac{3}{x}y = x^4$.",
   "ans": "$y = \\dfrac{x^5}{8} + \\dfrac{C}{x^3}$",
   "steps": [
    "$\\mu = e^{\\int 3/x\\,dx} = x^3$",
    "$(x^3y)' = x^7 \\Rightarrow x^3y = \\frac{x^8}{8} + C$"
   ],
   "status": "verified",
   "f": [
    "M-lin"
   ]
  },
  {
   "id": "W25T-6",
   "exam": "W25T",
   "n": 2,
   "topic": "cplx",
   "kind": "open",
   "q": "$z_1 = 4 + 5i$, $z_2 = -1 + 2i$. Find (a) $z_1 + z_2$, (b) $z_1/z_2$ and its modulus, (c) $z_1z_2$.",
   "ans": "(a) $3 + 7i$; (b) $\\tfrac65 - \\tfrac{13}{5}i$, modulus $\\sqrt{41/5} \\approx 2.864$; (c) $-14 + 3i$",
   "steps": [
    "Divide by multiplying top and bottom by $\\bar z_2 = -1 - 2i$: $\\frac{(4+5i)(-1-2i)}{5} = \\frac{6 - 13i}{5}$",
    "$|z_1/z_2| = |z_1|/|z_2| = \\sqrt{41}/\\sqrt5$"
   ],
   "status": "verified",
   "f": [
    "M-cplx"
   ]
  },
  {
   "id": "W25T-7",
   "exam": "W25T",
   "n": 3,
   "topic": "exact",
   "kind": "open",
   "q": "Solve $(5y + 3t - 5)\\,dt + (6y + 5t)\\,dy = 0$, $y(-1) = 0$.",
   "ans": "$6y^2 + 10ty + 3t^2 - 10t = 13$",
   "steps": [
    "$M_y = 5 = N_t$: exact",
    "$F = 5yt + \\frac32t^2 - 5t + 3y^2$",
    "$y(-1) = 0 \\Rightarrow C = \\frac32 + 5 = \\frac{13}{2}$"
   ],
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "W25T-8",
   "exam": "W25T",
   "n": 4,
   "topic": "logis",
   "kind": "num",
   "q": "Stores using a checkout system: $\\dfrac{dN}{dt} = N(1 - 0.0004N)$, $N(0) = 2$. Solve, then find $N(12)$.",
   "ans": "2481",
   "tol": 0.005,
   "unit": "stores",
   "steps": [
    "$K = 1/0.0004 = 2500$; partial fractions give $\\frac{N}{2500 - N} = \\frac{e^t}{1249}$",
    "$N(t) = \\dfrac{2500}{1 + 1249e^{-t}}$",
    "$N(12) = 2500/(1 + 1249e^{-12}) \\approx 2481$"
   ],
   "status": "verified",
   "f": [
    "M-logis"
   ]
  },
  {
   "id": "W25T-9",
   "exam": "W25T",
   "n": 5,
   "topic": "cool",
   "kind": "num",
   "q": "A body is found in a 20 °C room at 27 °C; one hour later it is 24 °C. A living body is 37 °C. How many hours passed between death and discovery?",
   "ans": "1.59",
   "tol": 0.02,
   "unit": "h",
   "steps": [
    "$T = 20 + Ae^{kt}$ with discovery at $t = 0$: $e^{k} = \\frac{24 - 20}{27 - 20} = \\frac47$",
    "Death when $T = 37$: $\\frac{37 - 20}{7} = e^{kt} \\Rightarrow t = \\frac{\\ln(17/7)}{\\ln(4/7)} = -1.59$",
    "So death was about 1.59 h (≈ 1 h 35 min) before the body was found."
   ],
   "status": "verified",
   "f": [
    "M-cool"
   ]
  },
  {
   "id": "W25Q-1",
   "exam": "W25Q",
   "n": 1,
   "topic": "sep",
   "kind": "open",
   "q": "Solve $yy' + x^2 = 4$, $y(0) = 2$, explicitly.",
   "ans": "$y = \\sqrt{4 + 8x - \\tfrac23x^3}$",
   "steps": [
    "$y\\,dy = (4 - x^2)\\,dx$",
    "$\\frac{y^2}{2} = 4x - \\frac{x^3}{3} + C$, $y(0) = 2 \\Rightarrow C = 2$",
    "Take the positive root because y(0) = 2 > 0."
   ],
   "status": "verified",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "W25Q-2",
   "exam": "W25Q",
   "n": 2,
   "topic": "growth",
   "kind": "num",
   "q": "The rate of change of $y$ is inversely proportional to $y^2$, with $y(0) = 1$ and $y(1) = 2$. Find $y(5)$.",
   "ans": "3.30",
   "tol": 0.01,
   "steps": [
    "$y' = k/y^2 \\Rightarrow y^3 = 3kt + C$",
    "$C = 1$; $8 = 3k + 1 \\Rightarrow 3k = 7$",
    "$y(5) = (35 + 1)^{1/3} = 36^{1/3} \\approx 3.30$"
   ],
   "status": "verified",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "S21-1",
   "exam": "S21",
   "n": "1.1",
   "topic": "classify",
   "kind": "mc",
   "q": "Classify $y'' = \\sqrt{5x^6 + (\\sin x)\\,y^{(8)}}$ by order and linearity.",
   "opts": [
    "8th order nonlinear",
    "4th order linear",
    "2nd order linear",
    "2nd order nonlinear"
   ],
   "ans": "a",
   "status": "key",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "S21-2a",
   "exam": "S21",
   "n": "1.2a",
   "topic": "solution",
   "kind": "tf",
   "q": "There is a constant solution to $2y'' - 3y' = y^2 - 6y + 9$.",
   "ans": "True",
   "status": "key",
   "note": "For constant y, y′ = y″ = 0, so $0 = (y - 3)^2$: y = 3.",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "S21-2b",
   "exam": "S21",
   "n": "1.2b",
   "topic": "solution",
   "kind": "tf",
   "q": "$y = \\dfrac{1}{x^2 + 4}$ is a solution of the IVP $y' + 2xy^2 = 0$, $y(-3) = \\tfrac15$.",
   "ans": "False",
   "status": "verified",
   "note": "It solves the ODE ($y' = -2xy^2$), but $y(-3) = 1/13 \\ne 1/5$. The IVP fails on the initial condition.",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "S21-2c",
   "exam": "S21",
   "n": "1.2c",
   "topic": "solution",
   "kind": "tf",
   "q": "Every initial value problem has a unique solution.",
   "ans": "False",
   "status": "key",
   "note": "Existence and uniqueness need f and ∂f/∂y continuous near the initial point (Picard).",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "S21-4",
   "exam": "S21",
   "n": "1.4",
   "topic": "sep",
   "kind": "open",
   "q": "Solve $\\dfrac{dx}{dt} = t(x - 1)$, $x(0) = 7$.",
   "ans": "$x = 1 + 6e^{t^2/2}$",
   "steps": [
    "$\\frac{dx}{x - 1} = t\\,dt \\Rightarrow \\ln|x - 1| = \\frac{t^2}{2} + c$",
    "$x - 1 = Ce^{t^2/2}$, $x(0) = 7 \\Rightarrow C = 6$"
   ],
   "status": "key",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "S21-5",
   "exam": "S21",
   "n": "1.5",
   "topic": "lin",
   "kind": "mc",
   "q": "The general solution of $5\\dfrac{dy}{dx} + 30y = 6$ is",
   "opts": [
    "$y = Ce^{-6x} + \\frac15$",
    "$y = \\frac15e^{6x} + C$",
    "$y = Ce^{-6x} + \\frac15e^{6x}$",
    "$y = \\frac15e^{12x} + Ce^{6x}$"
   ],
   "ans": "a",
   "status": "key",
   "note": "Standard form $y' + 6y = \\frac65$; $\\mu = e^{6x}$; equilibrium $y = 1/5$.",
   "f": [
    "M-lin"
   ]
  },
  {
   "id": "S21-6",
   "exam": "S21",
   "n": "2.1",
   "topic": "exact",
   "kind": "num",
   "q": "Find $k$ so that $\\left[8yt^5 + kt^2e^{ty}\\right]dy = \\left[\\frac2t - 20y^2t^4 - ktye^{ty} - 5e^{ty}\\right]dt$ is exact.",
   "ans": "5",
   "tol": 0.001,
   "steps": [
    "Move everything to one side: $M = 20y^2t^4 + ktye^{ty} + 5e^{ty} - \\frac2t$, $N = 8yt^5 + kt^2e^{ty}$",
    "$M_y = 40yt^4 + kte^{ty} + kt^2ye^{ty} + 5te^{ty}$; $N_t = 40yt^4 + 2kte^{ty} + kt^2ye^{ty}$",
    "Equal when $k + 5 = 2k$, so $k = 5$"
   ],
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "S21-7",
   "exam": "S21",
   "n": "2.2",
   "topic": "bern",
   "kind": "open",
   "q": "Using an appropriate substitution, solve $y' = -y + xy^5$.",
   "ans": "$y = \\left(x + \\tfrac14 + Ce^{4x}\\right)^{-1/4}$",
   "steps": [
    "$y' + y = xy^5$: Bernoulli $n = 5$, $u = y^{-4}$",
    "$u' - 4u = -4x$, $\\mu = e^{-4x}$",
    "$u = x + \\frac14 + Ce^{4x}$"
   ],
   "status": "verified",
   "f": [
    "M-bern"
   ]
  },
  {
   "id": "S21-8",
   "exam": "S21",
   "n": "2.3",
   "topic": "growth",
   "kind": "num",
   "q": "A population grows at a rate proportional to its size and doubles every 15 years. It is 32 000 now. What will it be in 11 years?",
   "ans": "53199",
   "tol": 0.002,
   "steps": [
    "$P = 32000\\cdot2^{t/15}$",
    "$P(11) = 32000\\cdot2^{11/15} \\approx 53199$"
   ],
   "status": "verified",
   "f": [
    "M-growth"
   ]
  },
  {
   "id": "F21-1",
   "exam": "F21",
   "n": 1,
   "topic": "classify",
   "kind": "mc",
   "q": "Classify $\\dfrac{d^2y}{dx^2} = \\left(\\dfrac{dy}{dx}\\right)^4$.",
   "opts": [
    "2nd order nonlinear",
    "4th order linear",
    "4th order nonlinear",
    "2nd order linear"
   ],
   "ans": "a",
   "status": "key",
   "f": [
    "M-classify"
   ]
  },
  {
   "id": "F21-2a",
   "exam": "F21",
   "n": "2a",
   "topic": "solution",
   "kind": "tf",
   "q": "$y = 2e^{-8x} + 3e^{2x}$ is a solution of $y'' + 6y' - 16y = 0$.",
   "ans": "True",
   "status": "verified",
   "note": "Roots of $m^2 + 6m - 16 = 0$ are $-8$ and $2$.",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "F21-2b",
   "exam": "F21",
   "n": "2b",
   "topic": "solution",
   "kind": "tf",
   "q": "Every initial value problem has a unique solution.",
   "ans": "False",
   "status": "key",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "F21-2c",
   "exam": "F21",
   "n": "2c",
   "topic": "solution",
   "kind": "tf",
   "q": "A singular solution is a solution that cannot be obtained by specialising the parameters in the family of solutions.",
   "ans": "True",
   "status": "key",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "F21-3",
   "exam": "F21",
   "n": 3,
   "topic": "homog",
   "kind": "mc",
   "q": "Which of the following is a homogeneous differential equation?",
   "opts": [
    "$\\frac{dy}{dx} = \\frac{2x + 7y}{7x + 2y}$",
    "$(x^2 + y^2)dy - x^4dx = 0$",
    "$\\frac{dy}{dx} + x^2y = xy^2$",
    "$(y^2 + x)dx = (x + y^2)dy$"
   ],
   "ans": "a",
   "status": "key",
   "note": "Divide top and bottom by x: $\\frac{2 + 7(y/x)}{7 + 2(y/x)}$, a function of y/x only.",
   "f": [
    "M-homog"
   ]
  },
  {
   "id": "F21-4",
   "exam": "F21",
   "n": 4,
   "topic": "lin",
   "kind": "mc",
   "q": "Rewrite $\\cos x\\,dy + (\\sin x)\\,y\\,dx = dx$ in the standard form of a linear equation.",
   "opts": [
    "$\\frac{dy}{dx} + (\\tan x)y = \\sec x$",
    "$\\frac{dy}{dx} + (\\sin x)y = \\cos x$",
    "$\\cos x\\frac{dy}{dx} + (\\sin x)y = 1$",
    "$\\cos x\\,dy = (1 - y\\sin x)dx$"
   ],
   "ans": "a",
   "status": "key",
   "note": "Standard form needs a leading coefficient of 1: divide by cos x dx.",
   "f": [
    "M-lin"
   ]
  },
  {
   "id": "F21-5",
   "exam": "F21",
   "n": 5,
   "topic": "sep",
   "kind": "mc",
   "q": "Which of the following is separable?",
   "opts": [
    "$x\\tan^{-1}(y)\\frac{dy}{dx} = e^{x+y}$",
    "$y' = \\sin(xy)$",
    "$(x^2 + 1)\\frac{dy}{dx} = \\sqrt{x + y}$",
    "$y' = \\frac{1}{x + y}$"
   ],
   "ans": "a",
   "status": "key",
   "note": "$e^{x+y} = e^xe^y$ splits into an x-part times a y-part.",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "F21-6",
   "exam": "F21",
   "n": 6,
   "topic": "exact",
   "kind": "open",
   "q": "Is $(2y\\sin x\\cos x - y + 2y^2e^{xy^2})\\,dx = (x - \\sin^2x - 4xye^{xy^2})\\,dy$ exact? Solve it.",
   "ans": "Yes. $y\\sin^2x - xy + 2e^{xy^2} = C$",
   "steps": [
    "$N = -x + \\sin^2x + 4xye^{xy^2}$",
    "$M_y = N_x = 2\\sin x\\cos x - 1 + 4ye^{xy^2} + 4xy^3e^{xy^2}$",
    "$F = y\\sin^2x - xy + 2e^{xy^2}$"
   ],
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "OQ-1",
   "exam": "OQ",
   "n": "2016 Q2-1",
   "topic": "homog",
   "kind": "open",
   "q": "Solve $x\\,dx + (y - 2x)\\,dy = 0$ by an appropriate substitution.",
   "ans": "$\\ln|y - x| + \\dfrac{x}{y - x} = C$",
   "steps": [
    "Homogeneous of degree 1: $y = ux$",
    "$\\frac{dx}{x} = -\\frac{u - 2}{(u - 1)^2}du = -\\left[\\frac{1}{u - 1} - \\frac{1}{(u - 1)^2}\\right]du$",
    "$\\ln|x| = -\\ln|u - 1| - \\frac{1}{u - 1} + c$, then $u = y/x$"
   ],
   "status": "verified",
   "f": [
    "M-homog"
   ]
  },
  {
   "id": "OQ-2",
   "exam": "OQ",
   "n": "2016 Q2-2",
   "topic": "bern",
   "kind": "open",
   "q": "Solve $\\dfrac{dy}{dx} - y = e^xy^2$.",
   "ans": "$y = \\dfrac{1}{Ce^{-x} - \\tfrac12e^x}$",
   "steps": [
    "$u = y^{-1}$: $u' + u = -e^x$",
    "$(ue^x)' = -e^{2x} \\Rightarrow u = -\\frac12e^x + Ce^{-x}$"
   ],
   "status": "verified",
   "f": [
    "M-bern"
   ]
  },
  {
   "id": "OQ-3",
   "exam": "OQ",
   "n": "2021 J-Q2-1",
   "topic": "exact",
   "kind": "open",
   "q": "Solve $\\dfrac yx\\,dx + (y^3 + \\ln x)\\,dy = 0$, $y(1) = -2$.",
   "ans": "$y\\ln x + \\dfrac{y^4}{4} = 4$",
   "steps": [
    "$M_y = \\frac1x = N_x$: exact",
    "$F = y\\ln x + \\frac{y^4}{4}$; at (1, −2): $0 + 4 = 4$"
   ],
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "OQ-4",
   "exam": "OQ",
   "n": "2021 J-Q2-2",
   "topic": "bern",
   "kind": "open",
   "q": "Solve $y' + 2y = e^xy^2$.",
   "ans": "$y = \\dfrac{1}{e^x + Ce^{2x}}$",
   "steps": [
    "$u = y^{-1}$: $u' - 2u = -e^x$",
    "$(ue^{-2x})' = -e^{-x} \\Rightarrow u = e^x + Ce^{2x}$"
   ],
   "status": "verified",
   "f": [
    "M-bern"
   ]
  },
  {
   "id": "OQ-5",
   "exam": "OQ",
   "n": "Quiz IVP",
   "topic": "lin",
   "kind": "open",
   "q": "Solve $(\\sin x)y' + (\\cos x)y = 2\\sin x\\cos x$, $y(\\pi/2) = 3$.",
   "ans": "$y = \\dfrac{5 - \\cos 2x}{2\\sin x}$",
   "steps": [
    "The left side is already $(y\\sin x)'$",
    "$y\\sin x = -\\frac12\\cos2x + C$; at $\\pi/2$: $3 = \\frac12 + C$"
   ],
   "status": "verified",
   "f": [
    "M-lin"
   ]
  },
  {
   "id": "OQ-6",
   "exam": "OQ",
   "n": "Quiz IVP 2",
   "topic": "lin",
   "kind": "open",
   "q": "Solve $y' = x^3 - 2xy$, $y(0) = 1$.",
   "ans": "$y = \\tfrac12(x^2 - 1) + \\tfrac32e^{-x^2}$",
   "steps": [
    "$y' + 2xy = x^3$, $\\mu = e^{x^2}$",
    "$\\int x^3e^{x^2}dx = \\frac12(x^2 - 1)e^{x^2}$",
    "$y(0) = 1 \\Rightarrow C = \\frac32$"
   ],
   "status": "verified",
   "f": [
    "M-lin"
   ]
  },
  {
   "id": "OQ-7",
   "exam": "OQ",
   "n": "Quiz exact",
   "topic": "exact",
   "kind": "open",
   "q": "Solve $(\\sin y - y\\sin x)\\,dx + (\\cos x + x\\cos y - y)\\,dy = 0$.",
   "ans": "$x\\sin y + y\\cos x - \\tfrac12y^2 = C$",
   "status": "verified",
   "f": [
    "M-exact"
   ]
  },
  {
   "id": "OQ-8",
   "exam": "OQ",
   "n": "W-Q1",
   "topic": "sep",
   "kind": "open",
   "q": "Solve $\\dfrac{dy}{dx} + \\cos(x)\\,y = 0$ explicitly.",
   "ans": "$y = Ke^{-\\sin x}$",
   "status": "verified",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "OQ-9",
   "exam": "OQ",
   "n": "2020 Q",
   "topic": "growth",
   "kind": "num",
   "q": "100 mg of a radioactive substance; 3 % has decayed after 6 hours. How much is left after 24 hours?",
   "ans": "88.53",
   "tol": 0.005,
   "unit": "mg",
   "steps": [
    "$A(6) = 97 \\Rightarrow e^{6k} = 0.97$",
    "$A(24) = 100(0.97)^4 = 88.5$"
   ],
   "status": "verified",
   "f": [
    "M-growth"
   ]
  },
  {
   "id": "OQ-10",
   "exam": "OQ",
   "n": "Quiz 4",
   "topic": "cool",
   "kind": "num",
   "q": "A body at 0 °C is brought into a 25 °C room and reaches 15 °C in 10 min. In another room it reaches 15 °C in 12 min. What is the temperature of the second room?",
   "ans": "22.49",
   "tol": 0.005,
   "unit": "°C",
   "steps": [
    "Room 1: $15 = 25 - 25e^{10k} \\Rightarrow e^{10k} = 0.4$",
    "Room 2: $15 = T_m(1 - e^{12k})$, $e^{12k} = 0.4^{1.2} = 0.333$",
    "$T_m = 15/0.667 = 22.5$ °C"
   ],
   "status": "verified",
   "f": [
    "M-cool"
   ]
  },
  {
   "id": "OQ-11",
   "exam": "OQ",
   "n": "Quiz 2 rabbits",
   "topic": "growth",
   "kind": "num",
   "q": "Rabbits: $\\dfrac{dy}{dx} = ky^{1.01}$, 2 rabbits at the start and 16 after 3 months. How many after 12 months?",
   "ans": "10761",
   "tol": 0.02,
   "unit": "rabbits",
   "steps": [
    "Separate: $y^{-0.01} = -0.01kx + 2^{-0.01}$",
    "$x = 3$, $y = 16$: $k = 0.681$",
    "$y(12) = (2^{-0.01} - 0.01k\\cdot12)^{-100} \\approx 10\\,761$"
   ],
   "status": "verified",
   "note": "The exponent −100 magnifies rounding: the student solution rounded mid-way and got 11 050. Keep full precision until the last step.",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "OQ-12",
   "exam": "OQ",
   "n": "WebWork 1",
   "topic": "sep",
   "kind": "open",
   "q": "Solve $\\dfrac{dy}{dx} = (x - 3)e^{-2y}$, $y(3) = \\ln 3$.",
   "ans": "$y = \\tfrac12\\ln\\!\\left((x - 3)^2 + 9\\right)$",
   "steps": [
    "$e^{2y}dy = (x - 3)dx \\Rightarrow \\frac12e^{2y} = \\frac12(x - 3)^2 + C$",
    "$y(3) = \\ln 3$: $C = \\frac92$"
   ],
   "status": "verified",
   "f": [
    "M-sep"
   ]
  },
  {
   "id": "OQ-13",
   "exam": "OQ",
   "n": "WebWork 2",
   "topic": "solution",
   "kind": "mc",
   "q": "Learning model $\\dfrac{dy}{dt} = 100 - y$ ($y$ = % learned). Which particular solution could describe a person learning?",
   "opts": [
    "y(0) = 10",
    "y(0) = 115",
    "either of these",
    "none of the above"
   ],
   "ans": "a",
   "status": "verified",
   "note": "$y = 100 - 90e^{-t}$ rises towards 100 %; the other starts above 100 %, which is impossible.",
   "f": [
    "M-ivp"
   ]
  },
  {
   "id": "OQ-14",
   "exam": "OQ",
   "n": "WebWork 3",
   "topic": "growth",
   "kind": "num",
   "q": "Find $k$ such that $x(t) = 2^t$ solves $\\dfrac{dx}{dt} = kx$.",
   "ans": "0.6931",
   "tol": 0.005,
   "steps": [
    "$\\frac{d}{dt}2^t = (\\ln 2)2^t$, so $k = \\ln 2$"
   ],
   "status": "verified",
   "f": [
    "M-growth"
   ]
  },
  {
   "id": "OQ-15",
   "exam": "OQ",
   "n": "WebWork 4",
   "topic": "solution",
   "kind": "num",
   "q": "Find the value of $k$ for which the constant function $x(t) = k$ solves $6t^2\\dfrac{dx}{dt} + 5x + 3 = 0$.",
   "ans": "-0.6",
   "tol": 0.001,
   "steps": [
    "Constant → $dx/dt = 0$, so $5k + 3 = 0$, $k = -\\frac35$"
   ],
   "status": "verified",
   "f": [
    "M-ivp"
   ]
  }
 ],
 "clusters": [
  {
   "id": "c-cls-a",
   "topic": "classify",
   "match": "exact",
   "expect": "Very likely",
   "title": "Classify $y'' = (y')^4$ (W17 and F21)",
   "members": [
    "W17-1a",
    "F21-1"
   ],
   "changes": "The identical equation on a midterm and a quiz four years apart.",
   "study": "Order = highest derivative. Any power of y or a derivative (other than 1) makes it nonlinear.",
   "trap": "Reading the power 4 as “4th order”.",
   "refs": {
    "lec": [
     {
      "d": "l1"
     }
    ],
    "cal": "Zill 1.1"
   }
  },
  {
   "id": "c-cls-b",
   "topic": "classify",
   "match": "exact",
   "expect": "Very likely",
   "title": "Classify $y'' = \\sqrt{5x^6 + (\\sin x)y^{(8)}}$ (W17 and S21)",
   "members": [
    "W17-1b",
    "S21-1"
   ],
   "changes": "Same equation, word for word, on the W17 midterm and the Summer 2021 quiz.",
   "study": "The highest derivative can hide inside a root: y⁽⁸⁾ makes it 8th order.",
   "trap": "Seeing y″ on the left and answering 2nd order.",
   "refs": {
    "lec": [
     {
      "d": "l1"
     }
    ],
    "cal": "Zill 1.1"
   }
  },
  {
   "id": "c-classify",
   "topic": "classify",
   "match": "concept",
   "expect": "Very likely",
   "title": "Linear or nonlinear?",
   "members": [
    "W17-1c",
    "W17-1d",
    "W17-1e",
    "W17-1a"
   ],
   "changes": "Coefficients that depend on x (tan x, x²) keep an equation linear; anything done TO y (powers, roots, sin y) makes it nonlinear.",
   "study": "Linear form: $a_n(x)y^{(n)} + \\dots + a_0(x)y = g(x)$.",
   "trap": "Calling Bessel’s equation nonlinear because of x².",
   "refs": {
    "lec": [
     {
      "d": "l1"
     }
    ]
   }
  },
  {
   "id": "c-unique",
   "topic": "solution",
   "match": "exact",
   "expect": "Very likely",
   "title": "“Every IVP has a unique solution” → False",
   "members": [
    "S21-2c",
    "F21-2b"
   ],
   "changes": "The same T/F on two quiz papers.",
   "study": "Picard: f and ∂f/∂y continuous near the initial point guarantee a unique solution; otherwise there may be none or many.",
   "trap": "Absolute words (“every”, “always”).",
   "refs": {
    "lec": [
     {
      "d": "l2"
     }
    ]
   }
  },
  {
   "id": "c-verify",
   "topic": "solution",
   "match": "template",
   "expect": "Very likely",
   "title": "Verify a solution / constant solutions",
   "members": [
    "S21-2a",
    "S21-2b",
    "F21-2a",
    "W17-2",
    "W17-3",
    "OQ-15"
   ],
   "changes": "Plug in and check (S21, F21, W17 P2); look for a constant y that makes the right side 0 (S21 2a, W17 P3, WebWork).",
   "study": "To verify: differentiate, substitute, AND check the initial condition. A constant solution has y′ = 0.",
   "trap": "S21 2b satisfies the ODE but not y(−3) = 1/5.",
   "refs": {
    "lec": [
     {
      "d": "l2"
     }
    ],
    "cal": "Zill 1.1–1.2"
   }
  },
  {
   "id": "c-sep",
   "topic": "sep",
   "match": "template",
   "expect": "Very likely",
   "title": "Separable IVP",
   "members": [
    "F18-1",
    "W25Q-1",
    "S21-4",
    "OQ-8",
    "OQ-12",
    "W17-3",
    "F21-5"
   ],
   "changes": "Every set of papers has one. The right side is always f(x)·g(y) after factoring.",
   "study": "Separate, integrate both sides, put the constant in (C, not +C after exponentiating), apply the IC, solve explicitly when asked.",
   "trap": "$\\ln|y| = \\ln|1 + x^3| + C$ gives $y = C(1 + x^3)$, not $1 + x^3 + C$.",
   "refs": {
    "lec": [
     {
      "d": "l3"
     }
    ],
    "cal": "Zill 2.2"
   }
  },
  {
   "id": "c-lin",
   "topic": "lin",
   "match": "template",
   "expect": "Very likely",
   "title": "Linear first-order: integrating factor",
   "members": [
    "W25T-5b",
    "S21-5",
    "OQ-5",
    "OQ-6",
    "F21-4"
   ],
   "changes": "Standard form first (F21 tests only that step), then μ = e^∫P.",
   "study": "$y' + P(x)y = f(x)$, $\\mu = e^{\\int P}$, $(\\mu y)' = \\mu f$.",
   "trap": "Forgetting to divide by the leading coefficient before reading P(x).",
   "refs": {
    "lec": [
     {
      "d": "l3"
     }
    ],
    "cal": "Zill 2.3"
   }
  },
  {
   "id": "c-exact",
   "topic": "exact",
   "match": "template",
   "expect": "Very likely",
   "title": "Exact equations",
   "members": [
    "F18-3",
    "W17-4",
    "W25T-7",
    "S21-6",
    "OQ-3",
    "OQ-7",
    "F21-6"
   ],
   "changes": "Three midterms in a row. Sometimes disguised as dy/dx = … (W17), sometimes “find k” (S21).",
   "study": "M_y = N_x? Integrate M in x, differentiate in y, match N, integrate g′(y).",
   "trap": "Not moving every term to one side before reading M and N (signs).",
   "refs": {
    "lec": [
     {
      "d": "l4"
     }
    ],
    "cal": "Zill 2.4"
   }
  },
  {
   "id": "c-bern",
   "topic": "bern",
   "match": "template",
   "expect": "Very likely",
   "title": "Bernoulli: u = y^(1−n)",
   "members": [
    "F18-2",
    "W17-5",
    "S21-7",
    "OQ-2",
    "OQ-4"
   ],
   "changes": "n changes (2, 4, 5); W17 swaps the roles of x and y.",
   "study": "Divide by $y^n$, $u = y^{1-n}$, get a linear equation in u, integrating factor, back-substitute.",
   "trap": "The factor $\\frac{1}{1-n}$ in $u' = (1 - n)y^{-n}y'$.",
   "refs": {
    "lec": [
     {
      "d": "l5"
     }
    ],
    "cal": "Zill 2.5"
   }
  },
  {
   "id": "c-homog",
   "topic": "homog",
   "match": "template",
   "expect": "Likely",
   "title": "Homogeneous: y = ux",
   "members": [
    "F18-4",
    "OQ-1",
    "F21-3"
   ],
   "changes": "Solve one (F18, 2016 quiz) or identify one (F21).",
   "study": "Check every term has the same degree, substitute y = ux, separate in u and x.",
   "trap": "dy = u dx + x du: forgetting the x du term.",
   "refs": {
    "lec": [
     {
      "d": "l5"
     }
    ],
    "cal": "Zill 2.5"
   }
  },
  {
   "id": "c-growth",
   "topic": "growth",
   "match": "template",
   "expect": "Very likely",
   "title": "Exponential growth / decay",
   "members": [
    "F18-5",
    "S21-8",
    "OQ-9",
    "OQ-14",
    "W25Q-2",
    "OQ-11"
   ],
   "changes": "Tripling in 4 h (F18), doubling in 15 years (S21), 3 % decay (2020), a power-law variant (W25, rabbits).",
   "study": "$P = P_0e^{kt}$; get $e^{k}$ from the given ratio, then raise it to the new time.",
   "trap": "For dy/dt = ky^p (p ≠ 1) the solution is not exponential: separate it.",
   "refs": {
    "lec": [
     {
      "d": "l6"
     }
    ],
    "cal": "Zill 2.7"
   }
  },
  {
   "id": "c-cool",
   "topic": "cool",
   "match": "template",
   "expect": "Very likely",
   "title": "Newton’s law of cooling",
   "members": [
    "W25T-9",
    "OQ-10"
   ],
   "changes": "Time of death (W25 T1) and an unknown room temperature (Quiz 4); the Gradesaver tutor notes add the 3-reading oven.",
   "study": "$T = T_m + (T_0 - T_m)e^{kt}$; use the ratio of differences from $T_m$.",
   "trap": "Using the temperatures instead of their differences from Tₘ.",
   "refs": {
    "lec": [
     {
      "d": "l6"
     }
    ],
    "cal": "Zill 2.7"
   }
  }
 ],
 "formulas": [
  {
   "id": "M-classify",
   "topic": "classify",
   "name": "Order & linearity",
   "calc": null,
   "meaning": "Read the order and decide linear or nonlinear.",
   "steps": [
    "Order = the highest derivative anywhere in the equation.",
    "Linear iff y and its derivatives appear only to the first power, multiplied by functions of x alone.",
    "Powers, roots, products like yy′, or sin(y) → nonlinear."
   ],
   "traps": [
    "A power on y′ is not an order.",
    "x-dependent coefficients do not break linearity."
   ],
   "seen": [
    "W17-1a",
    "W17-1b",
    "S21-1",
    "F21-1"
   ],
   "lec": [
    {
     "d": "l1"
    }
   ],
   "cal": "Zill 1.1",
   "learn": {
    "idea": "Classification is two quick reads. The order is the highest derivative that appears, wherever it hides. Linearity asks whether the equation can be written $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = g(x)$: the unknown and its derivatives may be multiplied by functions of x, but never raised to a power, multiplied together, or put inside another function.",
    "when": [
     "“Classify by order and linearity”, usually a 1-mark MC or a table."
    ],
    "example": {
     "title": "W17 Problem 1b (also Summer 2021 Quiz 1)",
     "given": "$y'' = \\sqrt{5x^6 + (\\sin x)y^{(8)}}$",
     "find": "order and linearity",
     "steps": [
      {
       "say": "Scan for the highest derivative: y⁽⁸⁾ inside the root.",
       "tex": "\\text{order} = 8"
      },
      {
       "say": "The unknown sits inside a square root, which is not linear."
      }
     ],
     "answer": "8th order, nonlinear"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W17-1a"
     },
     {
      "type": "exam",
      "id": "W17-1b"
     },
     {
      "type": "exam",
      "id": "W17-1c"
     },
     {
      "type": "exam",
      "id": "W17-1d"
     },
     {
      "type": "exam",
      "id": "W17-1e"
     },
     {
      "type": "exam",
      "id": "S21-1"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Classify $5x^6y^5 + y'' = \\sqrt{y^{(4)}}\\cos x$.",
      "opts": [
       "4th order nonlinear",
       "5th order nonlinear",
       "2nd order linear",
       "5th order linear"
      ],
      "ans": "a",
      "why": "Highest derivative y⁽⁴⁾; y⁵ and the root make it nonlinear (the copy of the F21 quiz)."
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Classify $y''' + (\\sin x)y' + e^xy = \\ln x$.",
      "opts": [
       "3rd order linear",
       "3rd order nonlinear",
       "1st order linear",
       "2nd order nonlinear"
      ],
      "ans": "a",
      "why": "Only functions of x multiply y and its derivatives."
     }
    ]
   }
  },
  {
   "id": "M-ivp",
   "topic": "solution",
   "name": "Verifying solutions, IVPs & uniqueness",
   "calc": null,
   "meaning": "Check a candidate, find constant solutions, and know when a unique solution exists.",
   "steps": [
    "Differentiate the candidate and substitute: both sides must agree.",
    "Then check the initial condition separately.",
    "Constant solutions: set every derivative to 0 and solve for y.",
    "Picard: f(x,y) and ∂f/∂y continuous near (x₀,y₀) → exactly one solution nearby."
   ],
   "traps": [
    "A function can solve the ODE but miss the IC (S21 2b).",
    "“Every IVP has a unique solution” is false."
   ],
   "seen": [
    "W17-2",
    "S21-2a",
    "S21-2b",
    "S21-2c",
    "F21-2a",
    "F21-2b",
    "F21-2c",
    "OQ-15"
   ],
   "lec": [
    {
     "d": "l2"
    }
   ],
   "cal": "Zill 1.2",
   "learn": {
    "idea": "An IVP is the ODE plus a starting point. A proposed solution must pass two checks: it satisfies the equation, and it passes through the starting point. Existence and uniqueness are guaranteed only when the right-hand side and its y-derivative are continuous around the start; for a linear equation that means wherever P(x) and f(x) are continuous.",
    "when": [
     "“Show that … is a solution”, “largest interval”, T/F on uniqueness, constant solutions."
    ],
    "example": {
     "title": "W17 Problem 2",
     "given": "$y = \\tfrac14e^{3x} + ce^{-x}$, ODE $y' + y = e^{3x}$, IC $y(-3) = 15$",
     "find": "verify, then the largest interval",
     "steps": [
      {
       "say": "Differentiate.",
       "tex": "y' = \\tfrac34e^{3x} - ce^{-x}"
      },
      {
       "say": "Add y: the c-terms cancel.",
       "tex": "y' + y = e^{3x}\\ \\checkmark"
      },
      {
       "say": "Linear with P = 1 and f = e^{3x}, continuous everywhere.",
       "tex": "I = (-\\infty, \\infty)"
      }
     ],
     "answer": "Valid solution; interval (−∞, ∞)"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "S21-2a"
     },
     {
      "type": "exam",
      "id": "S21-2b"
     },
     {
      "type": "exam",
      "id": "S21-2c"
     },
     {
      "type": "exam",
      "id": "F21-2a"
     },
     {
      "type": "exam",
      "id": "F21-2c"
     },
     {
      "type": "exam",
      "id": "OQ-15"
     },
     {
      "type": "exam",
      "id": "OQ-13"
     },
     {
      "type": "tf",
      "badge": "concept",
      "q": "$y' = \\dfrac{y}{x}$, $y(0) = 1$ is guaranteed a unique solution near x = 0.",
      "ans": false,
      "why": "f = y/x is not continuous at x = 0, so Picard gives no guarantee (in fact there is no solution)."
     }
    ]
   }
  },
  {
   "id": "M-sep",
   "topic": "sep",
   "name": "Separable equations",
   "calc": null,
   "meaning": "dy/dx = g(x)h(y) → separate and integrate.",
   "steps": [
    "Factor the right side into (x-part)(y-part).",
    "Move all y to the left with dy, all x to the right with dx.",
    "Integrate both sides; add one constant.",
    "Apply the IC before solving for y.",
    "Check for constant solutions h(y) = 0 that division removed."
   ],
   "traps": [
    "$\\ln|y| = F(x) + C$ gives $y = Ce^{F}$, not $e^F + C$.",
    "Losing the equilibrium solution by dividing by h(y)."
   ],
   "seen": [
    "F18-1",
    "W25Q-1",
    "S21-4",
    "OQ-8",
    "OQ-12",
    "W17-3",
    "F21-5",
    "W25T-5a"
   ],
   "lec": [
    {
     "d": "l3"
    }
   ],
   "cal": "Zill 2.2",
   "learn": {
    "idea": "If the slope dy/dx splits into a function of x times a function of y, you can put each variable on its own side and integrate. The only real dangers are the constant (it multiplies after exponentiating) and the solutions you divide away.",
    "when": [
     "The right side factors as $g(x)h(y)$ (watch for $e^{x+y} = e^xe^y$)."
    ],
    "example": {
     "title": "Fall 2018 Midterm 1, Problem 1",
     "given": "$\\dfrac{dy}{dx} = \\dfrac{3x^2y}{1 + x^3}$, $y(1) = 2$",
     "find": "y(x)",
     "steps": [
      {
       "say": "Separate.",
       "tex": "\\frac{dy}{y} = \\frac{3x^2}{1 + x^3}dx"
      },
      {
       "say": "Integrate (u = 1 + x³ on the right).",
       "tex": "\\ln|y| = \\ln|1 + x^3| + C_1"
      },
      {
       "say": "Exponentiate: the constant becomes a factor.",
       "tex": "y = C(1 + x^3)"
      },
      {
       "say": "Apply y(1) = 2.",
       "tex": "2 = 2C \\Rightarrow C = 1"
      }
     ],
     "answer": "$y = 1 + x^3$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F18-1"
     },
     {
      "type": "exam",
      "id": "W25Q-1"
     },
     {
      "type": "exam",
      "id": "S21-4"
     },
     {
      "type": "exam",
      "id": "OQ-8"
     },
     {
      "type": "exam",
      "id": "W17-3"
     },
     {
      "type": "exam",
      "id": "F21-5"
     },
     {
      "type": "exam",
      "id": "OQ-12"
     },
     {
      "type": "exam",
      "id": "W25Q-2"
     },
     {
      "type": "exam",
      "id": "OQ-11"
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 3, Example 2 (slides 3–7)",
      "q": "Solve $\\dfrac{dy}{dx} = -\\dfrac{x}{y}$.",
      "opts": [
       "$x^2 + y^2 = c$",
       "$y = -x + c$",
       "$x^2 - y^2 = c$",
       "$y = ce^{-x}$"
      ],
      "ans": "a",
      "why": "$y\\,dy = -x\\,dx$ → $\\frac{y^2}{2} = -\\frac{x^2}{2} + C$ → circles $x^2 + y^2 = c$."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 3, Example 3",
      "q": "Separating $\\dfrac{dy}{dx} = y^2 - 4$ means dividing by $y^2 - 4$. Which solutions can be lost and must be checked separately?",
      "opts": [
       "$y = 2$ and $y = -2$",
       "$y = 0$",
       "$y = 4$",
       "None: separation never loses solutions"
      ],
      "ans": "a",
      "why": "The constant solutions are where y² − 4 = 0. Partial fractions give the family, but y = ±2 must be added back."
     },
     {
      "type": "mc",
      "badge": "concept",
      "src": "Lecture 3, separable test (slide 3)",
      "q": "Which equation is separable?",
      "opts": [
       "$\\dfrac{dy}{dx} = x^2y^4e^{5x - 3y}$",
       "$\\dfrac{dy}{dx} = y + \\cos x$",
       "$\\dfrac{dy}{dx} = x + y$",
       "$\\dfrac{dy}{dx} = \\sin(xy)$"
      ],
      "ans": "a",
      "why": "It factors as $(x^2e^{5x})(y^4e^{-3y})$; the others cannot be written as $g(x)h(y)$."
     },
     {
      "type": "value",
      "badge": "similar",
      "src": "Written in the style of the past-paper separable IVPs",
      "q": "Solve $y' = 2xy$, $y(0) = 3$. Find $y(1)$.",
      "answer": 8.1548,
      "unit": "",
      "steps": [
       "$\\frac{dy}{y} = 2x\\,dx$ → $\\ln|y| = x^2 + C$",
       "$y = 3e^{x^2}$ (from $y(0) = 3$)",
       "$y(1) = 3e \\approx 8.155$"
      ]
     },
     {
      "type": "value",
      "badge": "similar",
      "src": "Written in the style of the past-paper separable IVPs",
      "q": "Solve $y' = xy^2$, $y(0) = 1$. Find $y(1)$.",
      "answer": 2,
      "unit": "",
      "steps": [
       "$\\frac{dy}{y^2} = x\\,dx$ → $-\\frac1y = \\frac{x^2}{2} + C$",
       "$y(0) = 1$ → $C = -1$",
       "$y = \\frac{2}{2 - x^2}$, so $y(1) = 2$"
      ]
     }
    ]
   }
  },
  {
   "id": "M-lin",
   "topic": "lin",
   "name": "Linear equations: integrating factor",
   "calc": null,
   "meaning": "y' + P(x)y = f(x), μ = e^∫P.",
   "tex": "y' + P(x)y = f(x),\\qquad \\mu = e^{\\int P\\,dx},\\qquad \\frac{d}{dx}[\\mu y] = \\mu f",
   "steps": [
    "Divide by the coefficient of y′ (standard form).",
    "μ = e^∫P (no constant needed).",
    "The left side collapses to (μy)′.",
    "Integrate the right side, then divide by μ.",
    "Apply the IC last."
   ],
   "traps": [
    "Reading P before dividing by the leading coefficient.",
    "Forgetting to divide C by μ too."
   ],
   "seen": [
    "W25T-5b",
    "S21-5",
    "OQ-5",
    "OQ-6",
    "F21-4"
   ],
   "lec": [
    {
     "d": "l3"
    }
   ],
   "cal": "Zill 2.3",
   "learn": {
    "idea": "Multiplying a linear equation by the right factor turns the left side into the derivative of a product. Then one integration finishes the job. The factor is always e to the integral of P(x), where P is read off the standard form.",
    "when": [
     "y and y′ appear only to the first power and are not multiplied together."
    ],
    "example": {
     "title": "Winter 2025 Term Test 1, Problem 1.2",
     "given": "$y' + \\frac3xy = x^4$",
     "find": "general solution",
     "steps": [
      {
       "say": "Integrating factor.",
       "tex": "\\mu = e^{\\int 3/x\\,dx} = x^3"
      },
      {
       "say": "Collapse the left side.",
       "tex": "(x^3y)' = x^7"
      },
      {
       "say": "Integrate and divide.",
       "tex": "x^3y = \\frac{x^8}{8} + C \\Rightarrow y = \\frac{x^5}{8} + \\frac{C}{x^3}"
      }
     ],
     "answer": "$y = \\frac{x^5}{8} + \\frac{C}{x^3}$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W25T-5b"
     },
     {
      "type": "exam",
      "id": "S21-5"
     },
     {
      "type": "exam",
      "id": "F21-4"
     },
     {
      "type": "exam",
      "id": "OQ-5"
     },
     {
      "type": "exam",
      "id": "OQ-6"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "Integrating factor of $xy' - 3y = x^3$ (x > 0)?",
      "opts": [
       "$x^{-3}$",
       "$x^3$",
       "$e^{-3x}$",
       "$e^{3x}$"
      ],
      "ans": "a",
      "why": "Standard form $y' - \\frac3xy = x^2$, so $\\mu = e^{-3\\ln x} = x^{-3}$ (Gradesaver exemplar)."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 3, Example 4",
      "q": "General solution of $\\dfrac{dy}{dx} - 3y = 6$?",
      "opts": [
       "$y = -2 + ce^{3x}$",
       "$y = 2 + ce^{3x}$",
       "$y = -2 + ce^{-3x}$",
       "$y = 6x + c$"
      ],
      "ans": "a",
      "why": "$\\mu = e^{-3x}$: $(e^{-3x}y)' = 6e^{-3x}$ → $e^{-3x}y = -2e^{-3x} + c$."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 3, Example 5",
      "q": "Solve $(x^2 - 9)\\dfrac{dy}{dx} + xy = 0$ for $x > 3$.",
      "opts": [
       "$y = \\dfrac{c}{\\sqrt{x^2 - 9}}$",
       "$y = c\\sqrt{x^2 - 9}$",
       "$y = c(x^2 - 9)$",
       "$y = ce^{-x}$"
      ],
      "ans": "a",
      "why": "Standard form $y' + \\frac{x}{x^2 - 9}y = 0$, $\\mu = e^{\\frac12\\ln(x^2 - 9)} = \\sqrt{x^2 - 9}$, so $\\sqrt{x^2 - 9}\\,y = c$."
     },
     {
      "type": "value",
      "badge": "similar",
      "src": "Written in the style of the past-paper linear IVPs",
      "q": "Solve $y' + 2y = 4$, $y(0) = 0$. Find $y(1)$.",
      "answer": 1.7293,
      "unit": "",
      "steps": [
       "$\\mu = e^{2x}$: $(e^{2x}y)' = 4e^{2x}$ → $e^{2x}y = 2e^{2x} + C$",
       "$y(0) = 0$ → $C = -2$, so $y = 2 - 2e^{-2x}$",
       "$y(1) = 2 - 2e^{-2} \\approx 1.729$"
      ]
     },
     {
      "type": "value",
      "badge": "similar",
      "src": "Written in the style of the past-paper linear IVPs",
      "q": "Solve $xy' + 2y = 3x$ ($x > 0$), $y(1) = 2$. Find $y(2)$.",
      "answer": 2.25,
      "unit": "",
      "steps": [
       "Standard form $y' + \\frac2xy = 3$, $\\mu = x^2$",
       "$(x^2y)' = 3x^2$ → $x^2y = x^3 + C$; $y(1) = 2$ → $C = 1$",
       "$y = x + \\frac{1}{x^2}$, so $y(2) = 2.25$"
      ]
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Lecture 3, standard form of a linear equation",
      "q": "$y' + (\\sin x)\\,y = x^3$ is a linear first-order equation.",
      "ans": true,
      "why": "It has the form $y' + P(x)y = f(x)$ with $P = \\sin x$, $f = x^3$."
     }
    ]
   }
  },
  {
   "id": "M-exact",
   "topic": "exact",
   "name": "Exact equations",
   "calc": null,
   "meaning": "M dx + N dy = 0 with M_y = N_x.",
   "tex": "M\\,dx + N\\,dy = 0,\\quad \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}\\ \\Rightarrow\\ F(x,y) = C",
   "steps": [
    "Put everything in the form M dx + N dy = 0 (watch signs).",
    "Test M_y = N_x.",
    "F = ∫M dx + g(y).",
    "Set F_y = N to find g′(y), integrate it.",
    "Answer F(x, y) = C; apply the IC if given."
   ],
   "traps": [
    "Moving terms across the = without changing their sign.",
    "Integrating g′(y) terms that contain x (they must cancel)."
   ],
   "seen": [
    "F18-3",
    "W17-4",
    "W25T-7",
    "S21-6",
    "OQ-3",
    "OQ-7",
    "F21-6"
   ],
   "lec": [
    {
     "d": "l4"
    }
   ],
   "cal": "Zill 2.4",
   "learn": {
    "idea": "An exact equation is the total differential of some function F(x, y): $dF = F_x\\,dx + F_y\\,dy = 0$, so the solution is just F = C. The cross-derivative test $M_y = N_x$ tells you whether such an F exists; then you rebuild it one variable at a time.",
    "when": [
     "The equation is written with dx and dy (or can be).",
     "“Find k so that it is exact.”"
    ],
    "example": {
     "title": "Winter 2025 Term Test 1, Problem 3",
     "given": "$(5y + 3t - 5)\\,dt + (6y + 5t)\\,dy = 0$, $y(-1) = 0$",
     "find": "the particular solution",
     "steps": [
      {
       "say": "Test.",
       "tex": "M_y = 5 = N_t"
      },
      {
       "say": "Integrate M in t.",
       "tex": "F = 5yt + \\tfrac32t^2 - 5t + g(y)"
      },
      {
       "say": "Match N.",
       "tex": "5t + g'(y) = 6y + 5t \\Rightarrow g = 3y^2"
      },
      {
       "say": "Apply y(−1) = 0.",
       "tex": "C = \\tfrac32 + 5 = \\tfrac{13}{2}"
      }
     ],
     "answer": "$6y^2 + 10ty + 3t^2 - 10t = 13$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F18-3"
     },
     {
      "type": "exam",
      "id": "W25T-7"
     },
     {
      "type": "exam",
      "id": "W17-4"
     },
     {
      "type": "exam",
      "id": "S21-6"
     },
     {
      "type": "exam",
      "id": "OQ-3"
     },
     {
      "type": "exam",
      "id": "OQ-7"
     },
     {
      "type": "exam",
      "id": "F21-6"
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 4, Example 1",
      "q": "Solve $2xy\\,dx + (x^2 - 1)\\,dy = 0$.",
      "opts": [
       "$x^2y - y = c$",
       "$x^2y = c$",
       "$x^2 - y = c$",
       "$xy^2 - y = c$"
      ],
      "ans": "a",
      "why": "$M_y = 2x = N_x$. $f = \\int 2xy\\,dx = x^2y + g(y)$; $f_y = x^2 + g' = x^2 - 1$ → $g = -y$."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 4, Example 3",
      "q": "$xy\\,dx + (2x^2 + 3y^2 - 20)\\,dy = 0$ is not exact. Which integrating factor makes it exact?",
      "opts": [
       "$\\mu = y^3$",
       "$\\mu = x^3$",
       "$\\mu = 1/y$",
       "$\\mu = e^{3x}$"
      ],
      "ans": "a",
      "why": "$\\frac{N_x - M_y}{M} = \\frac{4x - x}{xy} = \\frac3y$ depends on y only, so $\\mu = e^{\\int 3/y\\,dy} = y^3$."
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Lecture 4, test for exactness",
      "q": "$(3x^2y + 2)\\,dx + (x^3 + 4y)\\,dy = 0$ is exact.",
      "ans": true,
      "why": "$M_y = 3x^2 = N_x$."
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Lecture 4, test for exactness",
      "q": "$(x^2 + y)\\,dx + (x^2 - y)\\,dy = 0$ is exact.",
      "ans": false,
      "why": "$M_y = 1$ but $N_x = 2x$."
     },
     {
      "type": "value",
      "badge": "similar",
      "src": "Written in the style of the past-paper exact IVPs",
      "q": "$(2x + y)\\,dx + (x + 6y)\\,dy = 0$, $y(1) = 1$. The solution is $f(x, y) = c$. Find $c$.",
      "answer": 5,
      "unit": "",
      "steps": [
       "$M_y = 1 = N_x$: exact",
       "$f = x^2 + xy + g(y)$, $f_y = x + g' = x + 6y$ → $g = 3y^2$",
       "$f = x^2 + xy + 3y^2$; at (1, 1): $c = 5$"
      ]
     }
    ]
   }
  },
  {
   "id": "M-bern",
   "topic": "bern",
   "name": "Bernoulli equations",
   "calc": null,
   "meaning": "y' + P(x)y = f(x)yⁿ → u = y^(1−n) makes it linear.",
   "tex": "y' + P(x)y = f(x)y^n,\\qquad u = y^{1-n},\\qquad u' + (1-n)P\\,u = (1-n)f",
   "steps": [
    "Identify n (n ≠ 0, 1).",
    "u = y^(1−n); then u′ = (1 − n)y^(−n)y′.",
    "Divide the ODE by yⁿ and substitute: a linear equation in u.",
    "Solve with an integrating factor.",
    "Back-substitute u = y^(1−n)."
   ],
   "traps": [
    "Dropping the (1 − n) factor.",
    "x may be the dependent variable (W17 P5)."
   ],
   "seen": [
    "F18-2",
    "W17-5",
    "S21-7",
    "OQ-2",
    "OQ-4"
   ],
   "lec": [
    {
     "d": "l5"
    }
   ],
   "cal": "Zill 2.5",
   "learn": {
    "idea": "A Bernoulli equation is linear except for one yⁿ on the right. Dividing by yⁿ and renaming u = y^(1−n) cancels the nonlinearity exactly, and you are back to the integrating-factor method.",
    "when": [
     "y′ + P(x)y on the left and a power of y times f(x) on the right."
    ],
    "example": {
     "title": "Fall 2018 Midterm 1, Problem 2",
     "given": "$y' + 2xy = -xy^4$",
     "find": "y(x)",
     "steps": [
      {
       "say": "n = 4, so u = y⁻³.",
       "tex": "u' = -3y^{-4}y'"
      },
      {
       "say": "Divide by y⁴ and substitute.",
       "tex": "-\\tfrac13u' + 2xu = -x \\Rightarrow u' - 6xu = 3x"
      },
      {
       "say": "Integrating factor.",
       "tex": "(ue^{-3x^2})' = 3xe^{-3x^2}"
      },
      {
       "say": "Integrate and back-substitute.",
       "tex": "y^{-3} = -\\tfrac12 + Ce^{3x^2}"
      }
     ],
     "answer": "$y = \\left(-\\tfrac12 + Ce^{3x^2}\\right)^{-1/3}$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F18-2"
     },
     {
      "type": "exam",
      "id": "S21-7"
     },
     {
      "type": "exam",
      "id": "OQ-2"
     },
     {
      "type": "exam",
      "id": "OQ-4"
     },
     {
      "type": "exam",
      "id": "W17-5"
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "For $y' - y = e^xy^2$, the right substitution is",
      "opts": [
       "$u = y^{-1}$",
       "$u = y^2$",
       "$u = y/x$",
       "$u = e^xy$"
      ],
      "ans": "a",
      "why": "n = 2, so u = y^(1−2)."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 5, Example 3 (slide 11)",
      "q": "$x\\dfrac{dy}{dx} + y = x^2y^2$. With $u = y^{-1}$ the equation becomes",
      "opts": [
       "$u' - \\dfrac{u}{x} = -x$",
       "$u' + \\dfrac{u}{x} = x$",
       "$u' - \\dfrac{u}{x} = x$",
       "$u' + u = -x^2$"
      ],
      "ans": "a",
      "why": "Divide by x: $y' + \\frac yx = xy^2$ (n = 2). $y' = -u^{-2}u'$; multiply through by $-u^2$: $u' - \\frac ux = -x$."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 5, Example 1(c) (slide 7)",
      "q": "$\\dfrac{dy}{dx} + 2y = xy^3$ is a Bernoulli equation. Which substitution?",
      "opts": [
       "$u = y^{-2}$",
       "$u = y^3$",
       "$u = y^{-3}$",
       "$u = y/x$"
      ],
      "ans": "a",
      "why": "n = 3, so u = y^(1−n) = y⁻²."
     },
     {
      "type": "value",
      "badge": "similar",
      "src": "Written in the style of the past-paper Bernoulli IVPs",
      "q": "Solve $y' + y = y^2$, $y(0) = \\tfrac12$. Find $y(\\ln 3)$.",
      "answer": 0.25,
      "unit": "",
      "steps": [
       "n = 2, $u = y^{-1}$: $u' - u = -1$",
       "$u = 1 + Ce^x$; $u(0) = 2$ → $C = 1$",
       "$y = \\frac{1}{1 + e^x}$, so $y(\\ln 3) = \\frac14$"
      ]
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 5, Example 1(d) (slide 7)",
      "q": "$\\dfrac{dy}{dx} = y(x + \\ln y)$. Which substitution turns it into a linear equation?",
      "opts": [
       "$u = \\ln y$",
       "$u = y/x$",
       "$u = y^{-1}$",
       "$u = x + y$"
      ],
      "ans": "a",
      "why": "$u' = \\frac{y'}{y} = x + u$, i.e. $u' - u = x$: linear."
     }
    ]
   }
  },
  {
   "id": "M-homog",
   "topic": "homog",
   "name": "Homogeneous substitution",
   "calc": null,
   "meaning": "Every term has the same degree → y = ux makes it separable.",
   "steps": [
    "Check: M(tx, ty) = tᵏM and N(tx, ty) = tᵏN with the same k.",
    "y = ux, dy = u dx + x du.",
    "Divide by xᵏ; separate u and x.",
    "Integrate, then put u = y/x back."
   ],
   "traps": [
    "Forgetting the x du part of dy.",
    "Confusing “homogeneous” here with the linear-homogeneous meaning."
   ],
   "seen": [
    "F18-4",
    "OQ-1",
    "F21-3"
   ],
   "lec": [
    {
     "d": "l5"
    }
   ],
   "cal": "Zill 2.5",
   "learn": {
    "idea": "When dy/dx depends only on the ratio y/x, the substitution y = ux turns the equation separable in u and x. The test is degrees: every term in M and N must have the same total degree.",
    "when": [
     "dy/dx can be written as a function of $y/x$; every term has the same degree."
    ],
    "example": {
     "title": "Fall 2018 Midterm 1, Problem 4",
     "given": "$(x^3 + y^3)dx - 3xy^2dy = 0$, $y(1) = 1$",
     "find": "y(x)",
     "steps": [
      {
       "say": "Degree 3 everywhere: substitute y = vx.",
       "tex": "(1 + v^3)dx - 3v^2(v\\,dx + x\\,dv) = 0"
      },
      {
       "say": "Collect and separate.",
       "tex": "\\frac{dx}{x} = \\frac{3v^2}{1 - 2v^3}dv"
      },
      {
       "say": "Integrate.",
       "tex": "x^2(1 - 2v^3) = C \\Rightarrow x^3 - 2y^3 = Cx"
      },
      {
       "say": "IC: C = −1."
      }
     ],
     "answer": "$y = \\sqrt[3]{(x^3 + x)/2}$"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F18-4"
     },
     {
      "type": "exam",
      "id": "OQ-1"
     },
     {
      "type": "exam",
      "id": "F21-3"
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 5, Example 2 (slide 9)",
      "q": "$(x^2 + y^2)\\,dx + (x^2 - xy)\\,dy = 0$. After $y = ux$ and dividing by $x^2$, the separated equation is",
      "opts": [
       "$\\dfrac{dx}{x} + \\dfrac{1 - u}{1 + u}\\,du = 0$",
       "$\\dfrac{dx}{x} + \\dfrac{1 + u}{1 - u}\\,du = 0$",
       "$\\dfrac{dx}{x} - u\\,du = 0$",
       "$x\\,du + u\\,dx = 0$"
      ],
      "ans": "a",
      "why": "$dy = u\\,dx + x\\,du$ gives $(1 + u)\\,dx + x(1 - u)\\,du = 0$; divide by $x(1 + u)$."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 5, Example 1(a) (slide 7)",
      "q": "$\\dfrac{dy}{dx} = (x + y)^2$ is best solved with",
      "opts": [
       "$u = x + y$, which makes it separable",
       "$y = ux$",
       "$u = y^{-1}$",
       "an integrating factor"
      ],
      "ans": "a",
      "why": "$u' = 1 + y' = 1 + u^2$: separable."
     },
     {
      "type": "mc",
      "badge": "lecture",
      "src": "Lecture 5, Example 4",
      "q": "$\\dfrac{dy}{dx} = (-2x + y)^2 - 7$ with $u = -2x + y$ becomes",
      "opts": [
       "$\\dfrac{du}{dx} = u^2 - 9$",
       "$\\dfrac{du}{dx} = u^2 - 7$",
       "$\\dfrac{du}{dx} = u^2 - 5$",
       "$\\dfrac{du}{dx} = u^2$"
      ],
      "ans": "a",
      "why": "$u' = y' - 2 = u^2 - 7 - 2$."
     },
     {
      "type": "tf",
      "badge": "concept",
      "src": "Lecture 5, homogeneous functions",
      "q": "$f(x, y) = x^3 + 2xy^2 - \\dfrac{y^4}{x}$ is homogeneous of degree 3.",
      "ans": true,
      "why": "$f(tx, ty) = t^3 f(x, y)$: every term has degree 3."
     },
     {
      "type": "mc",
      "badge": "concept",
      "src": "Lecture 5, when to use y = ux",
      "q": "$M\\,dx + N\\,dy = 0$ is a homogeneous equation (use $y = ux$) when",
      "opts": [
       "M and N are homogeneous functions of the same degree",
       "$M_y = N_x$",
       "it has the form $y' + P(x)y = f(x)$",
       "$M = N$"
      ],
      "ans": "a",
      "why": "Same degree in M and N is the test; M_y = N_x is the exactness test."
     }
    ]
   }
  },
  {
   "id": "M-growth",
   "topic": "growth",
   "name": "Growth & decay",
   "calc": "growth",
   "meaning": "dP/dt = kP → P = P₀e^{kt}.",
   "tex": "\\frac{dP}{dt} = kP\\ \\Rightarrow\\ P(t) = P_0e^{kt},\\qquad e^{kt_1} = \\frac{P(t_1)}{P_0}",
   "steps": [
    "Write P = P₀e^{kt}.",
    "Use the given ratio at t₁ to get e^{k t₁} (or k).",
    "Raise to the new time: P(t₂) = P₀(ratio)^{t₂/t₁}."
   ],
   "traps": [
    "3 % decay means 97 % remains.",
    "Rates proportional to yⁿ (n ≠ 1) are not exponential."
   ],
   "seen": [
    "F18-5",
    "S21-8",
    "OQ-9",
    "OQ-14"
   ],
   "lec": [
    {
     "d": "l6"
    }
   ],
   "cal": "Zill 2.7",
   "presets": [
    {
     "label": "F18 Q5: triples in 4 h, at 12 h",
     "from": "F18-5",
     "values": {
      "P0": 1,
      "m": 3,
      "t1": 4,
      "t2": 12
     }
    },
    {
     "label": "S21: doubles every 15 yr, 32 000, in 11 yr",
     "from": "S21-8",
     "values": {
      "P0": 32000,
      "m": 2,
      "t1": 15,
      "t2": 11
     }
    },
    {
     "label": "2020 quiz: 3 % decayed in 6 h, at 24 h",
     "from": "OQ-9",
     "values": {
      "P0": 100,
      "m": 0.97,
      "t1": 6,
      "t2": 24
     }
    }
   ],
   "learn": {
    "idea": "When a quantity changes at a rate proportional to itself, it grows or decays exponentially. Every exam version gives you one ratio (triples, doubles, 97 % left) at one time; that fixes k, and the answer is the same ratio raised to (new time ÷ old time).",
    "when": [
     "“Rate proportional to the amount present”, half-life, doubling, % decayed."
    ],
    "example": {
     "title": "Fall 2018 Midterm 1, Problem 5",
     "given": "Triples in 4 h",
     "find": "factor after 12 h",
     "steps": [
      {
       "say": "Model.",
       "tex": "x = x_0e^{kt},\\ e^{4k} = 3"
      },
      {
       "say": "12 h is three 4-hour periods.",
       "tex": "x(12) = x_0(e^{4k})^3 = 27x_0"
      }
     ],
     "answer": "27 times"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "F18-5"
     },
     {
      "type": "exam",
      "id": "S21-8"
     },
     {
      "type": "exam",
      "id": "OQ-9"
     },
     {
      "type": "exam",
      "id": "OQ-14"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A population of {P0} grows proportionally to its size and is multiplied by {m} after {t1} years. What is it after {t2} years?",
      "calc": "growth",
      "values": {
       "P0": 32000,
       "m": 2,
       "t1": 15,
       "t2": 11
      },
      "vary": [
       {
        "key": "P0",
        "min": 500,
        "max": 50000,
        "dp": 0
       },
       {
        "key": "m",
        "pick": [
         1.5,
         2,
         3
        ]
       },
       {
        "key": "t1",
        "min": 2,
        "max": 20,
        "dp": 0
       },
       {
        "key": "t2",
        "min": 3,
        "max": 40,
        "dp": 0
       }
      ],
      "row": "P(t₂)",
      "unit": "",
      "tol": 0.01
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "{P0} mg of a substance: only a fraction {m} remains after {t1} h. How much is left after {t2} h?",
      "calc": "growth",
      "values": {
       "P0": 100,
       "m": 0.97,
       "t1": 6,
       "t2": 24
      },
      "vary": [
       {
        "key": "P0",
        "min": 20,
        "max": 500,
        "dp": 0
       },
       {
        "key": "m",
        "pick": [
         0.9,
         0.95,
         0.97,
         0.8,
         0.5
        ]
       },
       {
        "key": "t1",
        "min": 2,
        "max": 12,
        "dp": 0
       },
       {
        "key": "t2",
        "min": 10,
        "max": 60,
        "dp": 0
       }
      ],
      "row": "P(t₂)",
      "unit": "mg",
      "tol": 0.01
     }
    ]
   }
  },
  {
   "id": "M-cool",
   "topic": "cool",
   "name": "Newton’s law of cooling",
   "calc": "cooling",
   "meaning": "T' = k(T − Tₘ).",
   "tex": "\\frac{dT}{dt} = k(T - T_m)\\ \\Rightarrow\\ T(t) = T_m + (T_0 - T_m)e^{kt}",
   "steps": [
    "Write T = Tₘ + (T₀ − Tₘ)e^{kt}.",
    "Use the second reading to get e^k from the ratio of differences.",
    "Solve for the unknown time (ln) or temperature."
   ],
   "traps": [
    "Using temperatures instead of differences from Tₘ.",
    "A negative time means “before the first reading” (time of death)."
   ],
   "seen": [
    "W25T-9",
    "OQ-10"
   ],
   "lec": [
    {
     "d": "l6"
    }
   ],
   "cal": "Zill 2.7",
   "presets": [
    {
     "label": "W25 T1 Q5: body 27 → 24 °C, room 20 °C",
     "from": "W25T-9",
     "values": {
      "mode": "time",
      "Tm": 20,
      "T0": 27,
      "T1": 24,
      "t1": 1,
      "Tx": 37
     }
    },
    {
     "label": "Quiz 4 room 1: 0 → 15 °C in 10 min at 25 °C",
     "values": {
      "mode": "temp",
      "Tm": 25,
      "T0": 0,
      "T1": 15,
      "t1": 10,
      "t2": 12
     }
    },
    {
     "label": "Quiz 4 room 2: 0 → 15 °C in 12 min, k from room 1",
     "from": "OQ-10",
     "values": {
      "mode": "room",
      "T0": 0,
      "T1": 15,
      "t1": 12,
      "k": -0.0916290732
     }
    }
   ],
   "learn": {
    "idea": "An object approaches the temperature of its surroundings exponentially: the gap T − Tₘ shrinks by the same factor every equal time step. Every problem is solved with that ratio of gaps.",
    "when": [
     "A temperature changes towards a room/oven temperature over time."
    ],
    "example": {
     "title": "Winter 2025 Term Test 1, Problem 5",
     "given": "room 20 °C; body 27 °C at discovery, 24 °C one hour later; alive = 37 °C",
     "find": "hours since death",
     "steps": [
      {
       "say": "Gap ratio over one hour.",
       "tex": "e^k = \\frac{24 - 20}{27 - 20} = \\frac47"
      },
      {
       "say": "When was the gap 37 − 20 = 17?",
       "tex": "\\frac{17}{7} = e^{kt} \\Rightarrow t = \\frac{\\ln(17/7)}{\\ln(4/7)} = -1.59"
      }
     ],
     "answer": "≈ 1.59 h before discovery"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W25T-9"
     },
     {
      "type": "exam",
      "id": "OQ-10"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "A thermometer reads {T0}° when placed in a {Tm}° oven and {T1}° after {t1} min. What does it read after {t2} min?",
      "calc": "cooling",
      "values": {
       "mode": "temp",
       "Tm": 390,
       "T0": 70,
       "T1": 110,
       "t1": 0.5,
       "t2": 1
      },
      "vary": [
       {
        "key": "Tm",
        "pick": [
         300,
         350,
         390,
         400
        ]
       },
       {
        "key": "T0",
        "pick": [
         60,
         70,
         75
        ]
       },
       {
        "key": "T1",
        "pick": [
         100,
         110,
         120
        ]
       },
       {
        "key": "t1",
        "pick": [
         0.5,
         1,
         2
        ]
       },
       {
        "key": "t2",
        "pick": [
         3,
         4,
         5
        ]
       }
      ],
      "row": "T(",
      "unit": "°",
      "tol": 0.01,
      "hint": "The Gradesaver oven problem has the same structure."
     }
    ]
   }
  },
  {
   "id": "M-logis",
   "topic": "logis",
   "name": "Logistic equation",
   "calc": "logistic",
   "meaning": "N' = N(r − bN), carrying capacity K = r/b.",
   "tex": "\\frac{dN}{dt} = N(r - bN)\\ \\Rightarrow\\ N(t) = \\frac{K}{1 + Ae^{-rt}},\\quad K = \\frac rb,\\ A = \\frac{K}{N_0} - 1",
   "steps": [
    "Read r and b; K = r/b.",
    "Separate with partial fractions: 1/N + 1/(K − N).",
    "Solve for N; A from N(0).",
    "Evaluate."
   ],
   "traps": [
    "Mixing up r and b.",
    "Losing the minus sign in e^{−rt}."
   ],
   "seen": [
    "W25T-8"
   ],
   "lec": [
    {
     "d": "l7"
    }
   ],
   "cal": "Zill 2.8",
   "presets": [
    {
     "label": "W25 T1 Q4: checkout systems",
     "from": "W25T-8",
     "values": {
      "r": 1,
      "b": 0.0004,
      "N0": 2,
      "t": 12
     }
    }
   ],
   "learn": {
    "idea": "Logistic growth starts exponential and levels off at the carrying capacity K, where the growth rate falls to zero. Separation plus partial fractions gives the S-curve formula; memorise its shape so you can check your answer (it must stay below K).",
    "when": [
     "A rate like N(a − bN), “carrying capacity”, “market saturation”."
    ],
    "example": {
     "title": "Winter 2025 Term Test 1, Problem 4",
     "given": "$N' = N(1 - 0.0004N)$, $N(0) = 2$",
     "find": "N(12)",
     "steps": [
      {
       "say": "Capacity.",
       "tex": "K = 1/0.0004 = 2500"
      },
      {
       "say": "Partial fractions and solve.",
       "tex": "N(t) = \\frac{2500}{1 + 1249e^{-t}}"
      },
      {
       "say": "Evaluate.",
       "tex": "N(12) \\approx 2481"
      }
     ],
     "answer": "≈ 2481 stores"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W25T-8"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "$\\dfrac{dN}{dt} = N({r} - {b}N)$, $N(0) = {N0}$. Find $N({t})$.",
      "calc": "logistic",
      "values": {
       "r": 1,
       "b": 0.0004,
       "N0": 2,
       "t": 12
      },
      "vary": [
       {
        "key": "r",
        "pick": [
         0.5,
         0.8,
         1,
         1.2
        ]
       },
       {
        "key": "b",
        "pick": [
         0.0002,
         0.0004,
         0.001,
         0.002
        ]
       },
       {
        "key": "N0",
        "min": 1,
        "max": 20,
        "dp": 0
       },
       {
        "key": "t",
        "min": 3,
        "max": 15,
        "dp": 0
       }
      ],
      "row": "N(",
      "unit": "",
      "tol": 0.01
     }
    ]
   }
  },
  {
   "id": "M-cplx",
   "topic": "cplx",
   "name": "Complex arithmetic & modulus",
   "calc": "complex",
   "meaning": "Add, multiply, divide with the conjugate; modulus and polar form.",
   "tex": "\\frac{z_1}{z_2} = \\frac{z_1\\bar z_2}{|z_2|^2},\\qquad |z| = \\sqrt{a^2 + b^2},\\qquad z = r(\\cos\\theta + i\\sin\\theta)",
   "steps": [
    "Multiply out with i² = −1.",
    "Divide by multiplying top and bottom by the conjugate of the denominator.",
    "|z₁/z₂| = |z₁|/|z₂|.",
    "Polar: r = |z|, θ = arg z (check the quadrant)."
   ],
   "traps": [
    "Forgetting i² = −1 flips a sign.",
    "arctan(b/a) gives the wrong quadrant when a < 0."
   ],
   "seen": [
    "W25T-6"
   ],
   "lec": [
    {
     "d": "l8"
    }
   ],
   "cal": "Zill 17.1",
   "presets": [
    {
     "label": "W25 T1 Q2: 4 + 5i and −1 + 2i",
     "from": "W25T-6",
     "values": {
      "mode": "ops",
      "a": 4,
      "b": 5,
      "c": -1,
      "d": 2
     }
    }
   ],
   "learn": {
    "idea": "Complex numbers follow ordinary algebra with one extra rule, i² = −1. Division is the only operation that needs a trick: multiply top and bottom by the conjugate of the denominator to make it real.",
    "when": [
     "CH 17.1 questions: sums, products, quotients, modulus, polar form."
    ],
    "example": {
     "title": "Winter 2025 Term Test 1, Problem 2",
     "given": "z₁ = 4 + 5i, z₂ = −1 + 2i",
     "find": "z₁ + z₂, z₁/z₂ and its modulus, z₁z₂",
     "steps": [
      {
       "say": "Add.",
       "tex": "3 + 7i"
      },
      {
       "say": "Divide with the conjugate.",
       "tex": "\\frac{(4 + 5i)(-1 - 2i)}{5} = \\frac{6 - 13i}{5}"
      },
      {
       "say": "Modulus.",
       "tex": "\\sqrt{41}/\\sqrt5 \\approx 2.864"
      },
      {
       "say": "Multiply.",
       "tex": "-4 + 8i - 5i + 10i^2 = -14 + 3i"
      }
     ],
     "answer": "3 + 7i; 6/5 − 13i/5 (|·| ≈ 2.864); −14 + 3i"
    },
    "quiz": [
     {
      "type": "exam",
      "id": "W25T-6"
     },
     {
      "type": "calc",
      "badge": "similar",
      "q": "$z_1 = {a} + {b}i$, $z_2 = {c} + {d}i$. Find $|z_1/z_2|$.",
      "calc": "complex",
      "values": {
       "mode": "ops",
       "a": 4,
       "b": 5,
       "c": -1,
       "d": 2
      },
      "vary": [
       {
        "key": "a",
        "pick": [
         1,
         2,
         3,
         4,
         5,
         -2,
         -3
        ]
       },
       {
        "key": "b",
        "pick": [
         1,
         2,
         3,
         4,
         5,
         -1,
         -4
        ]
       },
       {
        "key": "c",
        "pick": [
         1,
         2,
         3,
         -1,
         -2
        ]
       },
       {
        "key": "d",
        "pick": [
         1,
         2,
         3,
         -1,
         -2
        ]
       }
      ],
      "row": "|z₁ / z₂|",
      "unit": "",
      "tol": 0.005
     },
     {
      "type": "value",
      "badge": "concept",
      "q": "$|3 - 4i|$ = ?",
      "answer": 5,
      "unit": "",
      "steps": [
       "$\\sqrt{9 + 16} = 5$"
      ]
     }
    ]
   }
  },
  {
   "id": "M-roots",
   "topic": "roots",
   "name": "Powers & roots (De Moivre)",
   "calc": "complex",
   "meaning": "zⁿ = rⁿ(cos nθ + i sin nθ); n roots spaced 360°/n.",
   "tex": "z^n = r^n(\\cos n\\theta + i\\sin n\\theta),\\qquad w_k = r^{1/n}\\left(\\cos\\frac{\\theta + 2\\pi k}{n} + i\\sin\\frac{\\theta + 2\\pi k}{n}\\right)",
   "steps": [
    "Convert to polar (r, θ).",
    "Power: raise r, multiply θ.",
    "Roots: take the n-th root of r, divide θ + 360°k by n for k = 0 … n−1.",
    "Convert back to a + bi if asked."
   ],
   "traps": [
    "Giving only one root.",
    "Forgetting the +360°k."
   ],
   "seen": [],
   "lec": [
    {
     "d": "l8"
    }
   ],
   "cal": "Zill 17.2",
   "presets": [
    {
     "label": "(1 + i)⁸",
     "values": {
      "mode": "power",
      "a": 1,
      "b": 1,
      "n": 8
     }
    },
    {
     "label": "Cube roots of 8i",
     "values": {
      "mode": "roots",
      "a": 0,
      "b": 8,
      "n": 3
     }
    }
   ],
   "learn": {
    "idea": "In polar form, multiplying complex numbers multiplies lengths and adds angles. So a power raises the length and multiplies the angle (De Moivre), and the n-th roots share one length and sit evenly around a circle, 360°/n apart.",
    "when": [
     "CH 17.2: large powers, square/cube/n-th roots."
    ],
    "example": {
     "title": "Cube roots of 8i",
     "given": "z = 8i (r = 8, θ = 90°)",
     "find": "all three cube roots",
     "steps": [
      {
       "say": "Root of the length.",
       "tex": "8^{1/3} = 2"
      },
      {
       "say": "Angles (90° + 360°k)/3.",
       "tex": "30^\\circ,\\ 150^\\circ,\\ 270^\\circ"
      },
      {
       "say": "Back to rectangular.",
       "tex": "\\sqrt3 + i,\\ -\\sqrt3 + i,\\ -2i"
      }
     ],
     "answer": "√3 + i, −√3 + i, −2i"
    },
    "quiz": [
     {
      "type": "value",
      "badge": "textbook",
      "q": "$(1 + i)^8$ = ?",
      "answer": 16,
      "unit": "",
      "steps": [
       "$1 + i = \\sqrt2\\,\\angle 45^\\circ$",
       "$(\\sqrt2)^8 = 16$, $8\\cdot45^\\circ = 360^\\circ$ → 16"
      ]
     },
     {
      "type": "mc",
      "badge": "concept",
      "q": "How many distinct 5th roots does a non-zero complex number have?",
      "opts": [
       "1",
       "2",
       "5",
       "infinitely many"
      ],
      "ans": "c",
      "why": "n roots, spaced 360°/n."
     },
     {
      "type": "open",
      "badge": "textbook",
      "q": "Find all square roots of $-4$.",
      "ans": "$2i$ and $-2i$",
      "steps": [
       "$-4 = 4\\angle180^\\circ$; roots $2\\angle90^\\circ$ and $2\\angle270^\\circ$"
      ]
     },
     {
      "type": "value",
      "badge": "similar",
      "q": "$\\left|(1 + i\\sqrt3)^6\\right|$ = ?",
      "answer": 64,
      "unit": "",
      "steps": [
       "$|1 + i\\sqrt3| = 2$, $2^6 = 64$"
      ]
     }
    ]
   }
  },
  {
   "id": "M-wronskian",
   "topic": "wronskian",
   "name": "Wronskian, Fundamental Set & Superposition",
   "calc": null,
   "tex": "W(y_1, y_2) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1 y_2' - y_2 y_1' \\neq 0 \\implies y(x) = c_1 y_1(x) + c_2 y_2(x) + y_p(x)",
   "meaning": "Wronskian tests linear independence of solutions y\u2081, y\u2082 on interval I; general solution of nonhomogeneous linear ODE is y = y_c + y_p.",
   "vars": [
      [
         "W(y_1, y_2)",
         "Wronskian determinant",
         "dimensionless / function of x"
      ],
      [
         "y_c(x)",
         "Complementary function",
         "dependent variable"
      ],
      [
         "y_p(x)",
         "Particular solution",
         "dependent variable"
      ]
   ],
   "steps": [
      "Check that the linear ODE has continuous coefficients and a_n(x) != 0 on interval I.",
      "Compute W(y_1, y_2) = y_1 y_2' - y_2 y_1' and confirm W != 0 on I.",
      "If only one solution y_1(x) is known, find y_2(x) via Reduction of Order: y_2 = y_1 * integral(e^(-integral P dx)/y_1^2 dx).",
      "Combine complementary solution y_c = c_1 y_1 + c_2 y_2 with particular solution y_p to write y = y_c + y_p."
   ],
   "traps": [
      "Computing Wronskian without putting equation in standard form first.",
      "Assuming y_1, y_2 are independent when W = 0."
   ],
   "seen": [],
   "lec": [],
   "cal": "Zill 4.1 & 4.2",
   "learn": {
      "idea": "Think of two vectors in a 2D plane: if they point in different directions (non-zero determinant), you can reach any point in the plane by combining them. The Wronskian is that exact determinant test for functions! And if the system has an external push g(x), you just add one particular response y_p to the free homogeneous motion y_c.",
      "when": [
         "Verifying linear independence of solutions y\u2081, y\u2082 on an interval",
         "Finding a second linearly independent solution using Reduction of Order",
         "Checking the existence and uniqueness of solutions to an IVP"
      ],
      "example": {
         "title": "Fundamental Set & Superposition of y'' - 9y = 0",
         "given": "$y_1 = e^{3x}$ and $y_2 = e^{-3x}$ for $y'' - 9y = 0$",
         "find": "verify fundamental set and write general solution",
         "steps": [
            {
               "say": "Substitute both into the homogeneous ODE to verify solutions.",
               "tex": "y_1'' - 9y_1 = 0,\\quad y_2'' - 9y_2 = 0"
            },
            {
               "say": "Compute the Wronskian determinant.",
               "tex": "W = e^{3x}(-3e^{-3x}) - e^{-3x}(3e^{3x}) = -6 \\neq 0"
            },
            {
               "say": "Form the general solution by superposition.",
               "tex": "y(x) = c_1 e^{3x} + c_2 e^{-3x}"
            }
         ],
         "answer": "$y(x) = c_1 e^{3x} + c_2 e^{-3x}$"
      },
      "quiz": [
         {
            "type": "value",
            "badge": "textbook",
            "q": "Evaluate the Wronskian $W(e^{2x}, e^{5x})$ at $x = 0$.",
            "answer": 3,
            "unit": "",
            "steps": [
               "$W(e^{2x}, e^{5x}) = e^{2x}(5e^{5x}) - e^{5x}(2e^{2x}) = 3e^{7x}$",
               "At $x = 0$: $W = 3e^0 = 3$"
            ]
         },
         {
            "type": "mc",
            "badge": "exam",
            "q": "Using Reduction of Order on $y'' - 4y' + 4y = 0$ given $y_1 = e^{2x}$, what is $y_2(x)$?",
            "opts": [
               "$x e^{2x}$",
               "$e^{-2x}$",
               "$x^2 e^{2x}$",
               "$\\ln(x) e^{2x}$"
            ],
            "ans": "a",
            "why": "Standard form has P(x) = -4, so e^(-int P dx) = e^(4x). y_2 = e^(2x) int (e^(4x)/e^(4x)) dx = x e^(2x)."
         }
      ]
   }
},
{
   "id": "M-const-coeff",
   "topic": "const-coeff",
   "name": "Homogeneous Linear ODEs with Constant Coefficients",
   "calc": null,
   "tex": "a m^2 + b m + c = 0 \\implies \\begin{cases} c_1 e^{m_1 x} + c_2 e^{m_2 x} & (\\Delta > 0) \\\\ c_1 e^{m_1 x} + c_2 x e^{m_1 x} & (\\Delta = 0) \\\\ e^{\\alpha x}(c_1 \\cos\\beta x + c_2 \\sin\\beta x) & (m = \\alpha \\pm i\\beta) \\end{cases}",
   "meaning": "Substituting y = e^(mx) into ay'' + by' + cy = 0 gives the auxiliary equation am^2 + bm + c = 0. Distinct real roots give exponentials, repeated roots gain powers of x, and complex conjugate roots give damped sinusoids.",
   "vars": [
      [
         "a m^2 + b m + c = 0",
         "Auxiliary (characteristic) equation",
         "algebraic equation"
      ],
      [
         "\\Delta = b^2 - 4ac",
         "Discriminant",
         "real number"
      ],
      [
         "\\alpha \\pm i\\beta",
         "Complex conjugate roots",
         "complex root"
      ]
   ],
   "steps": [
      "Replace y^(k) with m^k to write the auxiliary polynomial equation am^2 + bm + c = 0.",
      "Solve for roots using factoring or the quadratic formula.",
      "Case I (Distinct real m_1 != m_2): y = c_1 e^(m_1 x) + c_2 e^(m_2 x).",
      "Case II (Repeated real root m_1 of multiplicity k): multiply by ascending powers of x: (c_1 + c_2 x + ... + c_k x^(k-1))e^(m_1 x).",
      "Case III (Complex conjugate pair alpha +- i beta): write e^(alpha x)(c_1 cos beta x + c_2 sin beta x)."
   ],
   "traps": [
      "Mixing up e^(alpha x) and cos(beta x) by putting i inside the trig functions.",
      "Forgetting to multiply repeated roots by x."
   ],
   "seen": [],
   "lec": [],
   "cal": "Zill 4.3",
   "learn": {
      "idea": "An exponential e^(mx) is the only function whose shape doesn't change when you differentiate it\u2014it just drops down a factor of m. That lets us trade derivatives for powers of m and solve a regular quadratic equation!",
      "when": [
         "Any linear homogeneous differential equation with constant coefficients ay'' + by' + cy = 0"
      ],
      "example": {
         "title": "IVP for 4y'' + 4y' + 17y = 0",
         "given": "$4y'' + 4y' + 17y = 0$, $y(0) = -1$, $y'(0) = 2$",
         "find": "particular solution satisfying initial conditions",
         "steps": [
            {
               "say": "Solve the auxiliary quadratic equation.",
               "tex": "4m^2 + 4m + 17 = 0 \\implies m = -\\frac{1}{2} \\pm 2i"
            },
            {
               "say": "Write the general solution with alpha = -1/2, beta = 2.",
               "tex": "y(x) = e^{-x/2}(c_1 \\cos 2x + c_2 \\sin 2x)"
            },
            {
               "say": "Apply y(0) = -1 to find c_1, then y'(0) = 2 to find c_2.",
               "tex": "c_1 = -1,\\quad c_2 = \\frac{3}{4}"
            }
         ],
         "answer": "$y(x) = e^{-x/2}\\left(-\\cos 2x + \\frac{3}{4}\\sin 2x\\right)$"
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "lecture",
            "q": "What is the general solution of $y''' + 3y'' - 4y = 0$?",
            "opts": [
               "$y = c_1 e^x + c_2 e^{-2x} + c_3 x e^{-2x}$",
               "$y = c_1 e^x + c_2 e^{-2x} + c_3 e^{2x}$",
               "$y = c_1 e^{-x} + e^{2x}(c_2 \\cos x + c_3 \\sin x)$",
               "$y = (c_1 + c_2 x + c_3 x^2)e^{-2x}$"
            ],
            "ans": "a",
            "why": "Auxiliary equation is (m - 1)(m + 2)^2 = 0, giving m = 1 (simple) and m = -2 (multiplicity 2)."
         },
         {
            "type": "value",
            "badge": "exam",
            "q": "For $y'' - 6y' + 9y = 0$ with $y(0) = 2$ and $y'(0) = 8$, find $c_2$ in $y = c_1 e^{3x} + c_2 x e^{3x}$.",
            "answer": 2,
            "unit": "",
            "steps": [
               "$y(0) = c_1 = 2$.",
               "$y'(0) = 3c_1 + c_2 = 8 \\implies 6 + c_2 = 8 \\implies c_2 = 2$."
            ]
         }
      ]
   }
},
{
   "id": "M-undet-coeff",
   "topic": "undet-coeff",
   "name": "Method of Undetermined Coefficients (Superposition)",
   "calc": null,
   "tex": "a y'' + b y' + c y = g(x) \\implies y_p(x) = x^s \\cdot y_p^{\\text{trial}}(x), \\quad y(x) = y_c(x) + y_p(x)",
   "meaning": "When g(x) consists of polynomials, exponentials, or sines/cosines, guess trial solution y_p with unknown coefficients. If any term duplicates y_c, multiply by x^s.",
   "vars": [
      [
         "y_p^{\\text{trial}}(x)",
         "Initial trial particular solution",
         "function of x"
      ],
      [
         "x^s",
         "Duplication multiplier rule",
         "multiplier"
      ]
   ],
   "steps": [
      "Solve the homogeneous ODE ay'' + by' + cy = 0 first to find y_c(x).",
      "Set up the trial form for g(x): polynomials of degree n -> sum A_k x^k; e^(kx) -> A e^(kx); sines/cosines -> A cos beta x + B sin beta x.",
      "If any trial term duplicates a term in y_c, multiply the entire trial group by x^s.",
      "Substitute y_p into the ODE, equate like coefficients, and solve for constants."
   ],
   "traps": [
      "Guessing y_p before finding y_c and missing duplication.",
      "Only including sin(bx) instead of A cos(bx) + B sin(bx)."
   ],
   "seen": [],
   "lec": [],
   "cal": "Zill 4.4",
   "learn": {
      "idea": "If the right-hand side is e^(3x), plugging in A e^(3x) on the left will also produce e^(3x) terms\u2014unless e^(3x) gets wiped out to zero because it's already in y_c! When that happens, multiplying your guess by x prevents it from vanishing.",
      "when": [
         "Nonhomogeneous linear ODEs with constant coefficients and polynomial, exponential, or sinusoidal forcing"
      ],
      "example": {
         "title": "y'' - 5y' + 4y = 8e^x",
         "given": "$y'' - 5y' + 4y = 8e^x$",
         "find": "general solution including resonance multiplier",
         "steps": [
            {
               "say": "Find complementary function y_c.",
               "tex": "m^2 - 5m + 4 = 0 \\implies y_c = c_1 e^x + c_2 e^{4x}"
            },
            {
               "say": "Notice e^x duplicates y_c, so multiply trial by x.",
               "tex": "y_p = A x e^x"
            },
            {
               "say": "Substitute into ODE and equate coefficients.",
               "tex": "-3A e^x = 8e^x \\implies A = -\\frac{8}{3}"
            }
         ],
         "answer": "$y(x) = c_1 e^x + c_2 e^{4x} - \\frac{8}{3}x e^x$"
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "lecture",
            "q": "What is the correct form of $y_p(x)$ for $y'' - 6y' + 9y = 5x e^{3x}$?",
            "opts": [
               "$x^2(Ax + B)e^{3x} = (Ax^3 + Bx^2)e^{3x}$",
               "$(Ax + B)e^{3x}$",
               "$x(Ax + B)e^{3x}$",
               "$Ax^2 e^{3x}$"
            ],
            "ans": "a",
            "why": "Homogeneous roots are m = 3, 3 so y_c = c_1 e^(3x) + c_2 x e^(3x). Both terms of (Ax+B)e^(3x) duplicate y_c, requiring multiplication by x^2."
         },
         {
            "type": "value",
            "badge": "exam",
            "q": "For $y'' + 4y = 12$, what is the constant particular solution $y_p = A$?",
            "answer": 3,
            "unit": "",
            "steps": [
               "Try y_p = A => y_p'' = 0.",
               "0 + 4A = 12 => A = 3."
            ]
         }
      ]
   }
},
{
   "id": "M-var-param",
   "topic": "var-param",
   "name": "Method of Variation of Parameters (Lecture 13)",
   "calc": null,
   "tex": "y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x), \\quad u_1' = -\\frac{y_2 f(x)}{W}, \\quad u_2' = \\frac{y_1 f(x)}{W}",
   "meaning": "Universal method for finding a particular solution y_p to y'' + P(x)y' + Q(x)y = f(x) for ANY continuous forcing function f(x).",
   "vars": [
      [
         "f(x) = g(x)/a_2(x)",
         "Standard-form forcing function",
         "forcing per unit leading coeff"
      ],
      [
         "W(y_1, y_2)",
         "Wronskian of fundamental set",
         "determinant"
      ],
      [
         "W_1, W_2",
         "Cramer's rule determinants",
         "determinants"
      ]
   ],
   "steps": [
      "Divide ODE by leading coefficient a_2(x) to put in standard form y'' + P(x)y' + Q(x)y = f(x).",
      "Find fundamental set y_1, y_2 and compute Wronskian W = y_1 y_2' - y_2 y_1'.",
      "Compute u_1' = -y_2 f(x) / W and u_2' = y_1 f(x) / W.",
      "Integrate u_1 = int u_1' dx and u_2 = int u_2' dx.",
      "Assemble y_p = u_1 y_1 + u_2 y_2 and general solution y = y_c + y_p."
   ],
   "traps": [
      "Forgetting to divide the ODE by a_2(x) to get standard form f(x) = g(x)/a_2(x).",
      "Mixing up the negative sign: u_1' has the minus sign, u_2' is positive."
   ],
   "seen": [],
   "lec": [],
   "cal": "Zill 4.6",
   "learn": {
      "idea": "Think of c_1 y_1 + c_2 y_2 as a recipe with fixed weights. When an arbitrary outside force f(x) (like tan x or sec x) hits the system, we let the weights vary with x (u_1(x) and u_2(x)) to absorb the force at every instant.",
      "when": [
         "Nonhomogeneous 2nd-order ODEs where g(x) is not suitable for undetermined coefficients (e.g., sec x, tan x, 1/x)"
      ],
      "example": {
         "title": "4y'' + 36y = csc(3x)",
         "given": "$4y'' + 36y = \\csc(3x)$",
         "find": "general solution using variation of parameters",
         "steps": [
            {
               "say": "Standardize ODE by dividing by 4.",
               "tex": "y'' + 9y = \\frac{1}{4}\\csc(3x) \\implies f(x) = \\frac{1}{4}\\csc(3x)"
            },
            {
               "say": "Compute homogeneous fundamental set and Wronskian.",
               "tex": "y_1 = \\cos(3x),\\; y_2 = \\sin(3x),\\quad W = 3"
            },
            {
               "say": "Find u_1' and u_2' and integrate.",
               "tex": "u_1 = -\\frac{x}{12},\\quad u_2 = \\frac{1}{36}\\ln|\\sin 3x|"
            }
         ],
         "answer": "$y(x) = c_1\\cos(3x) + c_2\\sin(3x) - \\frac{x}{12}\\cos(3x) + \\frac{1}{36}\\sin(3x)\\ln|\\sin(3x)|$"
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "lecture",
            "q": "In Lecture 13 Example 2 ($y'' - 4y' + 4y = (x+1)e^{2x}$), given $y_1 = e^{2x}$ and $y_2 = x e^{2x}$, what is the Wronskian $W(y_1, y_2)$?",
            "opts": [
               "$e^{4x}$",
               "$2e^{4x}$",
               "$x e^{4x}$",
               "$1$"
            ],
            "ans": "a",
            "why": "W = e^(2x)(2x+1)e^(2x) - x e^(2x)(2e^(2x)) = e^(4x)."
         },
         {
            "type": "mc",
            "badge": "exam",
            "q": "For $y'' - 4y' + 4y = (x+1)e^{2x}$ with $W = e^{4x}$, what is the particular solution $y_p(x) = u_1 y_1 + u_2 y_2$?",
            "opts": [
               "$\\left(\\frac{x^3}{6} + \\frac{x^2}{2}\\right)e^{2x}$",
               "$\\left(\\frac{x^3}{3} + x^2\\right)e^{2x}$",
               "$\\left(-\\frac{x^3}{3} - \\frac{x^2}{2}\\right)e^{2x}$",
               "$(x^2 + x)e^{2x}$"
            ],
            "ans": "a",
            "why": "u_1 = -x^3/3 - x^2/2, u_2 = x^2/2 + x, so y_p = u_1 y_1 + u_2 y_2 = (x^3/6 + x^2/2)e^(2x)."
         }
      ]
   }
},
{
   "id": "M-cauchy-euler",
   "topic": "cauchy-euler",
   "name": "Cauchy\u2013Euler Equations (Lecture 14)",
   "calc": null,
   "tex": "a x^2 y'' + b x y' + c y = 0, \\quad y = x^m \\implies a m^2 + (b-a)m + c = 0",
   "meaning": "Equidimensional linear ODEs with power coefficients a_k x^k. Substituting y = x^m yields auxiliary quadratic am(m-1) + bm + c = am^2 + (b-a)m + c = 0.",
   "vars": [
      [
         "y = x^m",
         "Power trial solution",
         "power function"
      ],
      [
         "a m^2 + (b-a)m + c = 0",
         "Cauchy\u2013Euler auxiliary equation",
         "algebraic equation"
      ],
      [
         "\\ln x",
         "Logarithmic factor for repeated/complex roots",
         "logarithmic argument"
      ]
   ],
   "steps": [
      "Verify equidimensional Cauchy\u2013Euler form: x^2 y'', x y', y.",
      "Substitute y = x^m to obtain auxiliary equation am^2 + (b-a)m + c = 0.",
      "Case I (Distinct real m_1 != m_2): y = c_1 x^(m_1) + c_2 x^(m_2).",
      "Case II (Repeated real root m_1): y = c_1 x^(m_1) + c_2 x^(m_1) ln x.",
      "Case III (Complex roots alpha +- i beta): y = x^alpha [c_1 cos(beta ln x) + c_2 sin(beta ln x)].",
      "For nonhomogeneous ax^2 y'' + bxy' + cy = g(x), divide by ax^2 first to find f(x) before Variation of Parameters."
   ],
   "traps": [
      "Writing am^2 + bm + c = 0 instead of am^2 + (b-a)m + c = 0.",
      "Forgetting to divide nonhomogeneous equations by ax^2 before using Variation of Parameters."
   ],
   "seen": [],
   "lec": [],
   "cal": "Zill 4.7",
   "learn": {
      "idea": "In constant-coefficient ODEs, e^(mx) is the magic function because derivatives just pull down m. When every derivative y^(k) is multiplied by x^k, the power function x^m becomes the magic function: differentiating drops the exponent by 1, and multiplying by x puts it right back to x^m!",
      "when": [
         "Equidimensional ODEs where derivative order matches power of x: a x^2 y'' + b x y' + c y = g(x)"
      ],
      "example": {
         "title": "x^2 y'' - 3x y' + 3y = 2x^4 e^x",
         "given": "$x^2 y'' - 3x y' + 3y = 2x^4 e^x$ on $(0, \\infty)$",
         "find": "general solution via auxiliary equation and variation of parameters",
         "steps": [
            {
               "say": "Solve auxiliary equation m(m-1) - 3m + 3 = 0.",
               "tex": "m^2 - 4m + 3 = 0 \\implies y_c = c_1 x + c_2 x^3"
            },
            {
               "say": "Standardize ODE: divide by x^2 to get f(x).",
               "tex": "y'' - \\frac{3}{x}y' + \\frac{3}{x^2}y = 2x^2 e^x \\implies f(x) = 2x^2 e^x"
            },
            {
               "say": "Compute Wronskian W(x, x^3) and integrate u_1, u_2.",
               "tex": "W = 2x^3,\\; u_1 = (-x^2+2x-2)e^x,\\; u_2 = e^x"
            }
         ],
         "answer": "$y = c_1 x + c_2 x^3 + 2x(x-1)e^x$"
      },
      "quiz": [
         {
            "type": "mc",
            "badge": "lecture",
            "q": "What is the general solution of $4x^2 y'' + 8x y' + y = 0$ on $(0, \\infty)$ (Lecture 14 Example 2)?",
            "opts": [
               "$y = c_1 x^{-1/2} + c_2 x^{-1/2}\\ln x$",
               "$y = c_1 x^{-1/2} + c_2 x^{1/2}$",
               "$y = c_1 e^{-x/2} + c_2 x e^{-x/2}$",
               "$y = x^{-1/2}[c_1 \\cos(\\frac{1}{2}\\ln x) + c_2 \\sin(\\frac{1}{2}\\ln x)]$"
            ],
            "ans": "a",
            "why": "Auxiliary equation is 4m(m-1) + 8m + 1 = 4m^2 + 4m + 1 = (2m+1)^2 = 0, giving repeated root m = -1/2."
         },
         {
            "type": "mc",
            "badge": "exam",
            "q": "Solve the initial-value problem $4x^2 y'' + 17y = 0$, $y(1) = -1$, $y'(1) = -1/2$ (Lecture 14 Example 3).",
            "opts": [
               "$y = -x^{1/2}\\cos(2\\ln x)$",
               "$y = -x^{1/2}\\sin(2\\ln x)$",
               "$y = x^{1/2}[-\\cos(2\\ln x) + \\sin(2\\ln x)]$",
               "$y = -x^{-1/2}\\cos(2\\ln x)$"
            ],
            "ans": "a",
            "why": "Auxiliary equation: 4m^2 - 4m + 17 = 0 => m = 1/2 +- 2i. Applying y(1)=-1, y'(1)=-1/2 gives c_1 = -1, c_2 = 0."
         }
      ]
   }
}
 ],
 "videoStops": [
  {
   "topic": "classify",
   "title": "Classifying ODEs",
   "why": "Classification MCs repeated word for word (W17, S21, F21).",
   "videos": [
    {
     "id": "lwed4VVYuHo",
     "title": "Classification of Differential Equations",
     "channel": "Professor Dave Explains",
     "len": "7:33",
     "role": "learn",
     "watch": [
      "Order, linear vs nonlinear, ODE vs PDE."
     ]
    }
   ],
   "after": "Classification lesson practice.",
   "gate": [
    "W17-1a",
    "W17-1b",
    "S21-1"
   ],
   "formulas": [
    "M-classify"
   ]
  },
  {
   "topic": "solution",
   "title": "IVPs and existence/uniqueness",
   "why": "T/F on uniqueness and verifying solutions appear on every quiz.",
   "videos": [
    {
     "id": "HjioXdmwze0",
     "title": "Introduction to Initial Value Problems (Differential Equations 4)",
     "channel": "Professor Leonard",
     "len": "",
     "role": "learn",
     "watch": [
      "How the IC picks one curve from the family."
     ]
    },
    {
     "id": "BVKyaEu1FWk",
     "title": "Existence and Uniqueness of Solutions (Differential Equations 11)",
     "channel": "Professor Leonard",
     "len": "44:32",
     "role": "extra",
     "watch": [
      "The Picard conditions."
     ]
    }
   ],
   "after": "IVP lesson practice.",
   "gate": [
    "S21-2b",
    "S21-2c",
    "W17-2"
   ],
   "formulas": [
    "M-ivp"
   ]
  },
  {
   "topic": "sep",
   "title": "Separable equations",
   "why": "One on every paper.",
   "videos": [
    {
     "id": "C7nuJcJriWM",
     "title": "Separable First Order Differential Equations - Basic Introduction",
     "channel": "The Organic Chemistry Tutor",
     "len": "10:42",
     "role": "learn",
     "watch": [
      "Separate, integrate, constant placement."
     ]
    },
    {
     "id": "ZWXG3c7A_9s",
     "title": "Separable Equations with Initial Values (Differential Equations 13)",
     "channel": "Professor Leonard",
     "len": "35:01",
     "role": "worked",
     "watch": [
      "When and how to apply the IC."
     ]
    }
   ],
   "after": "Separable lesson, then F18 Q1 on paper.",
   "gate": [
    "F18-1",
    "W25Q-1",
    "W17-3"
   ],
   "formulas": [
    "M-sep"
   ]
  },
  {
   "topic": "lin",
   "title": "Linear equations",
   "why": "W25 T1 and four quizzes.",
   "videos": [
    {
     "id": "gd1FYn86P0c",
     "title": "First Order Linear Differential Equations",
     "channel": "The Organic Chemistry Tutor",
     "len": "22:28",
     "role": "learn",
     "watch": [
      "Standard form → μ → collapse → integrate."
     ]
    },
    {
     "id": "kATxKuVSc9I",
     "title": "Introduction to Linear Differential Equations and Integrating Factors (Differential Equations 15)",
     "channel": "Professor Leonard",
     "len": "1:07:16",
     "role": "extra",
     "watch": [
      "Why the integrating factor works."
     ]
    }
   ],
   "after": "Linear lesson.",
   "gate": [
    "W25T-5b",
    "S21-5",
    "OQ-6"
   ],
   "formulas": [
    "M-lin"
   ]
  },
  {
   "topic": "exact",
   "title": "Exact equations",
   "why": "On all three midterms.",
   "videos": [
    {
     "id": "UXMTYfQfU-c",
     "title": "Solving an Exact Differential Equation",
     "channel": "The Math Sorcerer",
     "len": "2:46",
     "role": "learn",
     "watch": [
      "The four-step method in under 3 minutes."
     ]
    },
    {
     "id": "7zOMnC-BAFY",
     "title": "Solving Exact Differential Equations (Differential Equations 29)",
     "channel": "Professor Leonard",
     "len": "51:46",
     "role": "worked",
     "watch": [
      "Several full examples; watch the signs."
     ]
    }
   ],
   "after": "Exact lesson, then W25 T1 Q3.",
   "gate": [
    "F18-3",
    "W25T-7",
    "W17-4"
   ],
   "formulas": [
    "M-exact"
   ]
  },
  {
   "topic": "bern",
   "title": "Bernoulli equations",
   "why": "F18, W17 and three quizzes.",
   "videos": [
    {
     "id": "BoI_ej-T0V4",
     "title": "Bernoulli's Equation For Differential Equations",
     "channel": "The Organic Chemistry Tutor",
     "len": "20:03",
     "role": "learn",
     "watch": [
      "u = y^(1−n) and the (1 − n) factor."
     ]
    },
    {
     "id": "bIQZ6yahKJk",
     "title": "Bernoulli Equations Made Easy (Differential Equations 24.5)",
     "channel": "Professor Leonard",
     "len": "1:05:35",
     "role": "extra",
     "watch": [
      "A shortcut once you know the method."
     ]
    }
   ],
   "after": "Bernoulli lesson.",
   "gate": [
    "F18-2",
    "S21-7",
    "W17-5"
   ],
   "formulas": [
    "M-bern"
   ]
  },
  {
   "topic": "homog",
   "title": "Homogeneous substitution",
   "why": "F18 Q4 and the F21 identification MC.",
   "videos": [
    {
     "id": "ZEJVyybsiT4",
     "title": "Homogeneous Differential Equations",
     "channel": "The Organic Chemistry Tutor",
     "len": "26:55",
     "role": "learn",
     "watch": [
      "y = vx, dy = v dx + x dv."
     ]
    },
    {
     "id": "IRNl1ynIgco",
     "title": "Substitutions for Homogeneous First Order Differential Equations (Differential Equations 20)",
     "channel": "Professor Leonard",
     "len": "1:05:45",
     "role": "extra",
     "watch": [
      "How to recognise one."
     ]
    }
   ],
   "after": "Homogeneous lesson.",
   "gate": [
    "F18-4",
    "OQ-1",
    "F21-3"
   ],
   "formulas": [
    "M-homog"
   ]
  },
  {
   "topic": "growth",
   "title": "Growth & decay",
   "why": "F18 Q5 and four quizzes.",
   "videos": [
    {
     "id": "M9rcYTuFG4w",
     "title": "Exponential Growth and Decay Calculus, Relative Growth Rate, Differential Equations, Word Problems",
     "channel": "The Organic Chemistry Tutor",
     "len": "13:02",
     "role": "learn",
     "watch": [
      "Get k from one data point."
     ]
    }
   ],
   "after": "Growth lesson + calculator.",
   "gate": [
    "F18-5",
    "S21-8",
    "OQ-9"
   ],
   "formulas": [
    "M-growth"
   ]
  },
  {
   "topic": "cool",
   "title": "Newton’s law of cooling",
   "why": "W25 T1 Q5 (time of death) and Quiz 4.",
   "videos": [
    {
     "id": "ejEXSjdMpck",
     "title": "Newton's Law of Cooling Calculus, Example Problems, Differential Equations",
     "channel": "The Organic Chemistry Tutor",
     "len": "23:06",
     "role": "learn",
     "watch": [
      "The ratio-of-differences trick."
     ]
    }
   ],
   "after": "Cooling lesson + calculator.",
   "gate": [
    "W25T-9",
    "OQ-10"
   ],
   "formulas": [
    "M-cool"
   ]
  },
  {
   "topic": "logis",
   "title": "Logistic equation",
   "why": "W25 T1 Q4 (25 marks).",
   "videos": [
    {
     "id": "JgMvB22XQs0",
     "title": "Logistic Growth Function and Differential Equations",
     "channel": "The Organic Chemistry Tutor",
     "len": "43:07",
     "role": "learn",
     "watch": [
      "Partial fractions, carrying capacity."
     ]
    }
   ],
   "after": "Logistic lesson.",
   "gate": [
    "W25T-8"
   ],
   "formulas": [
    "M-logis"
   ]
  },
  {
   "topic": "cplx",
   "title": "Complex numbers",
   "why": "W25 T1 Q2 (15 marks).",
   "videos": [
    {
     "id": "OQz1ydBcQSA",
     "title": "Complex Numbers - Basic Operations",
     "channel": "The Organic Chemistry Tutor",
     "len": "1:23:36",
     "role": "learn",
     "watch": [
      "Skip to multiplication and division."
     ]
    }
   ],
   "after": "Complex lesson + calculator.",
   "gate": [
    "W25T-6"
   ],
   "formulas": [
    "M-cplx"
   ]
  },
  {
   "topic": "roots",
   "title": "Powers & roots",
   "why": "CH 17.2 is in the scope of this midterm.",
   "videos": [
    {
     "id": "J6TnZxUUzqU",
     "title": "Complex Numbers In Polar - De Moivre's Theorem",
     "channel": "The Organic Chemistry Tutor",
     "len": "1:04:47",
     "role": "learn",
     "watch": [
      "Polar form and powers."
     ]
    },
    {
     "id": "JMnkW8Smf1I",
     "title": "How to Find the nth Roots of a Complex Number with the Formula",
     "channel": "The Math Sorcerer",
     "len": "11:27",
     "role": "worked",
     "watch": [
      "All n roots with +360°k."
     ]
    }
   ],
   "after": "Roots lesson.",
   "gate": [],
   "formulas": [
    "M-roots"
   ]
  }
 ],
 "plan": {
  "intro": "Midterm 1 is Monday Oct 19 in tutorial: 12 days. It is Chapter 2 plus CH 17.1–17.2, and three past midterms show the same five problem types every time: separable, linear, exact, Bernoulli/homogeneous, and one model (growth, cooling or logistic). Learn each method, do its lesson’s practice, then drill. Complex numbers are quick marks; do them early in the last weekend.",
  "phases": [
   {
    "title": "Foundations, separable & linear",
    "when": "Oct 7 – 9",
    "goal": "Ch 1 terminology, IVPs, separable and linear equations.",
    "steps": [
     {
      "id": "e1",
      "kind": "doc",
      "doc": "calc",
      "text": "Calculus refresher sheet: integrals you will need (partial fractions, u-sub, parts).",
      "minutes": 20
     },
     {
      "id": "e2",
      "kind": "doc",
      "doc": "l1",
      "text": "Lectures 1–2: terminology, solutions, IVPs.",
      "minutes": 40
     },
     {
      "id": "e3",
      "kind": "lesson",
      "lesson": "M-classify",
      "text": "Lesson: order & linearity.",
      "minutes": 10
     },
     {
      "id": "e4",
      "kind": "lesson",
      "lesson": "M-ivp",
      "text": "Lesson: verifying solutions & uniqueness.",
      "minutes": 15
     },
     {
      "id": "e5",
      "kind": "doc",
      "doc": "l3",
      "text": "Lecture 3: separable and linear.",
      "minutes": 40
     },
     {
      "id": "e6",
      "kind": "lesson",
      "lesson": "M-sep",
      "text": "Lesson: separable equations.",
      "minutes": 20
     },
     {
      "id": "e7",
      "kind": "lesson",
      "lesson": "M-lin",
      "text": "Lesson: linear equations.",
      "minutes": 20
     },
     {
      "id": "e8",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "basics",
       "mode": "all"
      },
      "text": "Drill: Chapter 1 questions.",
      "minutes": 15
     },
     {
      "id": "e9",
      "kind": "drill",
      "drill": {
       "scope": "topic",
       "id": "sep",
       "mode": "all"
      },
      "text": "Drill: separable questions.",
      "minutes": 25
     }
    ]
   },
   {
    "title": "Exact, Bernoulli & homogeneous",
    "when": "Oct 10 – 12",
    "goal": "The three methods that filled F18 and W17.",
    "steps": [
     {
      "id": "e10",
      "kind": "doc",
      "doc": "l4",
      "text": "Lecture 4: exact equations.",
      "minutes": 35
     },
     {
      "id": "e11",
      "kind": "lesson",
      "lesson": "M-exact",
      "text": "Lesson: exact equations.",
      "minutes": 20
     },
     {
      "id": "e12",
      "kind": "doc",
      "doc": "l5",
      "text": "Lecture 5: substitutions (Bernoulli, homogeneous).",
      "minutes": 35
     },
     {
      "id": "e13",
      "kind": "lesson",
      "lesson": "M-bern",
      "text": "Lesson: Bernoulli.",
      "minutes": 20
     },
     {
      "id": "e14",
      "kind": "lesson",
      "lesson": "M-homog",
      "text": "Lesson: homogeneous y = ux.",
      "minutes": 20
     },
     {
      "id": "e15",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "methods",
       "mode": "repeats"
      },
      "text": "Drill: all repeated method questions.",
      "minutes": 40
     },
     {
      "id": "e16",
      "kind": "task",
      "text": "Open the Gradesaver Tutor Vault and read “The move here” for all five equation types.",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Models",
    "when": "Oct 13 – 15",
    "goal": "Growth/decay, cooling, logistic: one of these is always worth 20–25 %.",
    "steps": [
     {
      "id": "e17",
      "kind": "doc",
      "doc": "l6",
      "text": "Lecture 6: linear models.",
      "minutes": 35
     },
     {
      "id": "e18",
      "kind": "lesson",
      "lesson": "M-growth",
      "text": "Lesson: growth & decay (+ calculator).",
      "minutes": 15
     },
     {
      "id": "e19",
      "kind": "lesson",
      "lesson": "M-cool",
      "text": "Lesson: Newton’s law of cooling (+ calculator).",
      "minutes": 20
     },
     {
      "id": "e20",
      "kind": "doc",
      "doc": "l7",
      "text": "Lecture 7: nonlinear models.",
      "minutes": 30
     },
     {
      "id": "e21",
      "kind": "lesson",
      "lesson": "M-logis",
      "text": "Lesson: logistic equation.",
      "minutes": 20
     },
     {
      "id": "e22",
      "kind": "drill",
      "drill": {
       "scope": "subject",
       "id": "models",
       "mode": "all"
      },
      "text": "Drill: models.",
      "minutes": 25
     }
    ]
   },
   {
    "title": "Complex numbers",
    "when": "Oct 16",
    "goal": "CH 17.1–17.2: quick, reliable marks.",
    "steps": [
     {
      "id": "e23",
      "kind": "doc",
      "doc": "l8",
      "text": "Lecture 8: complex numbers, powers & roots.",
      "minutes": 35
     },
     {
      "id": "e24",
      "kind": "lesson",
      "lesson": "M-cplx",
      "text": "Lesson: complex arithmetic.",
      "minutes": 15
     },
     {
      "id": "e25",
      "kind": "lesson",
      "lesson": "M-roots",
      "text": "Lesson: powers & roots.",
      "minutes": 15
     }
    ]
   },
   {
    "title": "Exam mode",
    "when": "Oct 17 – 18",
    "goal": "Full papers, then only your weak spots.",
    "steps": [
     {
      "id": "e26",
      "kind": "doc",
      "doc": "paradis",
      "text": "Paradis notes, Modules 8–9: the 7-day revision protocol and pitfalls.",
      "minutes": 40
     },
     {
      "id": "e27",
      "kind": "drill",
      "drill": {
       "scope": "mock"
      },
      "text": "Mock midterm.",
      "minutes": 60
     },
     {
      "id": "e28",
      "kind": "drill",
      "drill": {
       "scope": "missed"
      },
      "text": "Everything I missed.",
      "minutes": 30
     },
     {
      "id": "e29",
      "kind": "doc",
      "doc": "pastmid",
      "text": "Fall 2018 Midterm 1 under exam conditions (Part I of the solved guide), then check.",
      "minutes": 60
     },
     {
      "id": "e30",
      "kind": "task",
      "text": "Bring the approved calculator (Sharp EL-531 or Casio fx-300MS).",
      "minutes": 1
     }
    ]
   }
  ]
 },
 "gradesaver": {
  "intro": "Private tutor material (previously behind the separate “sobhi” vault in the Filtered document section): the raw 43-page handwritten notes, the typeset blueprint, and the tutor’s one-line “move” for each equation type.",
  "docs": [
   {
    "title": "Engr 213 Tutor: handwritten in-depth tutor notes",
    "path": "Engr 213/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Engr 213 Tutor.pdf",
    "size": 62357032,
    "tag": "Original notes · 62 MB · 43 pages",
    "blurb": "Complete derivations, substitution blueprints, the forensic oven problem, variable-volume tanks and circuits."
   },
   {
    "title": "Gradesaver Master Solving System & Exam Blueprint (Tutor Edition)",
    "path": "Engr 213/02 - Comprehensive Topic Guides (Expanded & Intuitive)/ENGR 213 - Gradesaver Master Solving System & Exam Blueprint (Tutor Edition).pdf",
    "size": 255853,
    "tag": "Typeset guide · 10 pages",
    "blurb": "The 5-phase solution protocol, the 4-gate classifier, “the move here” heuristics and 10 worked problems from the notebook."
   }
  ],
  "tabs": [
   {
    "label": "Separable",
    "move": "Factor onto differentials and check for equilibrium solutions $h(y) = 0$.",
    "sequence": "1) Factor into $M(x)dx + N(y)dy = 0$; 2) divide to separate; 3) integrate both sides; 4) exponentiate $\\ln|y|$ into $|y| = Ke^{\\int g}$; 5) apply the IVP before inverting.",
    "exemplar": {
     "title": "Tutor notes p. 7",
     "lines": [
      "Solve $\\frac{dy}{dx} = 3x^2(y^2 + 1)$, $y(0) = 1$.",
      "$\\int\\frac{dy}{y^2 + 1} = \\int3x^2dx \\Rightarrow \\arctan y = x^3 + C$; $C = \\pi/4$.",
      "$y = \\tan(x^3 + \\pi/4)$ on $(-(3\\pi/4)^{1/3}, (\\pi/4)^{1/3})$."
     ]
    }
   },
   {
    "label": "Linear",
    "move": "Standardise to $y' + P(x)y = f(x)$ and collapse the left side with $I = e^{\\int P}$.",
    "sequence": "1) Make the leading coefficient 1; 2) $I = e^{\\int P}$; 3) $(Iy)' = If$; 4) integrate; 5) divide by I and state the interval.",
    "exemplar": {
     "title": "Tutor notes pp. 6 & 8",
     "lines": [
      "$xy' - 3y = x^3 \\Rightarrow y' - \\frac3xy = x^2$.",
      "$I = x^{-3}$, $(x^{-3}y)' = \\frac1x \\Rightarrow x^{-3}y = \\ln x + C$.",
      "$y = x^3(\\ln x + C)$."
     ]
    }
   },
   {
    "label": "Exact & integrating factors",
    "move": "Test $M_y = N_x$. If not, build $\\mu(x) = e^{\\int (M_y - N_x)/N\\,dx}$.",
    "sequence": "1) Write $M\\,dx + N\\,dy = 0$; 2) compute $M_y$, $N_x$; 3) if unequal, a one-variable integrating factor; 4) $\\Psi = \\int M\\,dx + g(y)$; 5) $\\Psi = C$.",
    "exemplar": {
     "title": "Tutor notes pp. 20–21",
     "lines": [
      "$(x + y)dx + x\\ln x\\,dy = 0$: $\\frac{M_y - N_x}{N} = -\\frac1x$.",
      "$\\mu = \\frac1x$ → $(1 + \\frac yx)dx + \\ln x\\,dy = 0$, exact.",
      "$\\Psi = y\\ln x + x = C \\Rightarrow y = \\frac{C - x}{\\ln x}$."
     ]
    }
   },
   {
    "label": "Substitutions",
    "move": "Linear combination $u = Ax + By + C$; Bernoulli $u = y^{1-n}$; homogeneous $y = ux$.",
    "sequence": "1) Identify the structure; 2) compute du/dx; 3) substitute to get a separable or linear equation in u; 4) solve for u; 5) return to y.",
    "exemplar": {
     "title": "Tutor notes p. 32",
     "lines": [
      "$y' = (4x - y + 1)^2$, $y(0) = 1$: let $u = 4x - y + 1$, $y' = 4 - u'$.",
      "$\\frac{du}{u^2 - 4} = -dx \\Rightarrow u = 2\\tanh(2x)$.",
      "$y = 4x + 1 - 2\\tanh(2x)$."
     ]
    }
   },
   {
    "label": "Applications",
    "move": "Rate balance $dA/dt = R_{in} - R_{out}$, cooling $T' = k(T - T_m)$, circuits $Li' + Ri = E(t)$.",
    "sequence": "1) Physical law; 2) any changing volume V(t); 3) set up the linear ODE; 4) integrate with the IC; 5) evaluate at the asked time.",
    "exemplar": {
     "title": "Forensic oven, tutor notes p. 35",
     "lines": [
      "A thermometer reads 70 °F at t = 0, 110 °F at t = 0.5 min, 145 °F at t = 1 min. Oven temperature?",
      "$\\frac{145 - T_m}{70 - T_m} = \\left(\\frac{110 - T_m}{70 - T_m}\\right)^2$",
      "$5T_m = 1950 \\Rightarrow T_m = 390$ °F."
     ]
    }
   }
  ]
 },
 "solveVideos": {
  "W17-1a": {
   "num": 1,
   "title": "W17-1a · Order & Linearity",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Question 1a",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a7a09e507e1e.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a7a09e507e1e.jpg",
   "duration": 129,
   "sizeMB": 6.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.5
    },
    {
     "label": "Solve It",
     "start": 38.5
    },
    {
     "label": "Go Deeper",
     "start": 66
    },
    {
     "label": "Answer & Traps",
     "start": 104.6
    }
   ]
  },
  "W17-1b": {
   "num": 2,
   "title": "W17-1b · Order & Linearity",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Question 1b",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-9e6d73d6a483.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-9e6d73d6a483.jpg",
   "duration": 117,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.4
    },
    {
     "label": "Solve It",
     "start": 33.5
    },
    {
     "label": "Go Deeper",
     "start": 61.3
    },
    {
     "label": "Answer & Traps",
     "start": 91.1
    }
   ]
  },
  "W17-1c": {
   "num": 3,
   "title": "W17-1c · Order & Linearity",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Question 1c",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-d73a9e4ee664.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-d73a9e4ee664.jpg",
   "duration": 105,
   "sizeMB": 5.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 29.6
    },
    {
     "label": "Solve It",
     "start": 39.2
    },
    {
     "label": "Answer & Traps",
     "start": 78.3
    }
   ]
  },
  "W17-1d": {
   "num": 4,
   "title": "W17-1d · Order & Linearity",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Question 1d",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-778d1b40a3f2.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-778d1b40a3f2.jpg",
   "duration": 97,
   "sizeMB": 4.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.7
    },
    {
     "label": "Solve It",
     "start": 30.6
    },
    {
     "label": "Go Deeper",
     "start": 50.4
    },
    {
     "label": "Answer & Traps",
     "start": 73.6
    }
   ]
  },
  "W17-1e": {
   "num": 5,
   "title": "W17-1e · Order & Linearity",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Question 1e",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-7103ed230a0b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-7103ed230a0b.jpg",
   "duration": 119,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.2
    },
    {
     "label": "Solve It",
     "start": 33.4
    },
    {
     "label": "Go Deeper",
     "start": 59.7
    },
    {
     "label": "Answer & Traps",
     "start": 95.2
    }
   ]
  },
  "S21-1": {
   "num": 6,
   "title": "S21-1 · Order & Linearity",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 1.1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-126f573f1de6.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-126f573f1de6.jpg",
   "duration": 106,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 27.8
    },
    {
     "label": "Solve It",
     "start": 36.8
    },
    {
     "label": "Go Deeper",
     "start": 53
    },
    {
     "label": "Answer & Traps",
     "start": 82.8
    }
   ]
  },
  "F21-1": {
   "num": 7,
   "title": "F21-1 · Order & Linearity",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Problem 1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-da456fcbbba9.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-da456fcbbba9.jpg",
   "duration": 105,
   "sizeMB": 4.8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 23.5
    },
    {
     "label": "Solve It",
     "start": 31.8
    },
    {
     "label": "Go Deeper",
     "start": 45.6
    },
    {
     "label": "Answer & Traps",
     "start": 84.1
    }
   ]
  },
  "L:M-classify:6": {
   "num": 8,
   "title": "M-classify-1 · Order & Linearity",
   "source": "Order, linearity & terminology lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-1b98fb0f9ebd.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-1b98fb0f9ebd.jpg",
   "duration": 106,
   "sizeMB": 4.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22.5
    },
    {
     "label": "Solve It",
     "start": 27.7
    },
    {
     "label": "Go Deeper",
     "start": 49.2
    },
    {
     "label": "Answer & Traps",
     "start": 82.9
    }
   ]
  },
  "L:M-classify:7": {
   "num": 9,
   "title": "M-classify-2 · Order & Linearity",
   "source": "Order, linearity & terminology lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-35bd18ebf5e1.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-35bd18ebf5e1.jpg",
   "duration": 96,
   "sizeMB": 4.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.1
    },
    {
     "label": "Solve It",
     "start": 25
    },
    {
     "label": "Go Deeper",
     "start": 46.3
    },
    {
     "label": "Answer & Traps",
     "start": 73.2
    }
   ]
  },
  "W17-2": {
   "num": 10,
   "title": "W17-2 · Solutions & IVPs",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Problem 2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-6150a2ca0809.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-6150a2ca0809.jpg",
   "duration": 166,
   "sizeMB": 7.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 35.4
    },
    {
     "label": "Solve It",
     "start": 53.9
    },
    {
     "label": "Answer & Traps",
     "start": 129.9
    }
   ]
  },
  "S21-2a": {
   "num": 11,
   "title": "S21-2a · Solutions & IVPs",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 1.2a",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ded9caedf30b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ded9caedf30b.jpg",
   "duration": 121,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.6
    },
    {
     "label": "Solve It",
     "start": 36.5
    },
    {
     "label": "Go Deeper",
     "start": 67.5
    },
    {
     "label": "Answer & Traps",
     "start": 96.5
    }
   ]
  },
  "S21-2b": {
   "num": 12,
   "title": "S21-2b · Solutions & IVPs",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 1.2b",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-b794e48ab02e.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-b794e48ab02e.jpg",
   "duration": 104,
   "sizeMB": 4.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 30
    },
    {
     "label": "Solve It",
     "start": 42.4
    },
    {
     "label": "Answer & Traps",
     "start": 77.3
    }
   ]
  },
  "S21-2c": {
   "num": 13,
   "title": "S21-2c · Solutions & IVPs",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 1.2c",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-9ef9316817ae.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-9ef9316817ae.jpg",
   "duration": 103,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.4
    },
    {
     "label": "Solve It",
     "start": 32.2
    },
    {
     "label": "Answer & Traps",
     "start": 74.4
    }
   ]
  },
  "F21-2a": {
   "num": 14,
   "title": "F21-2a · Solutions & IVPs",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Question 2a",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-f047034de288.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-f047034de288.jpg",
   "duration": 116,
   "sizeMB": 5.1,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 28.5
    },
    {
     "label": "Solve It",
     "start": 38.4
    },
    {
     "label": "Answer & Traps",
     "start": 89.3
    }
   ]
  },
  "F21-2b": {
   "num": 15,
   "title": "F21-2b · Solutions & IVPs",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Question 2b",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-e2a66b6ffd67.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-e2a66b6ffd67.jpg",
   "duration": 114,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.6
    },
    {
     "label": "Solve It",
     "start": 29.4
    },
    {
     "label": "Go Deeper",
     "start": 54.1
    },
    {
     "label": "Answer & Traps",
     "start": 92.2
    }
   ]
  },
  "F21-2c": {
   "num": 16,
   "title": "F21-2c · Solutions & IVPs",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Question 2c",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-6bbdaca1a50a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-6bbdaca1a50a.jpg",
   "duration": 124,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.1
    },
    {
     "label": "Solve It",
     "start": 37.4
    },
    {
     "label": "Go Deeper",
     "start": 66.4
    },
    {
     "label": "Answer & Traps",
     "start": 96.5
    }
   ]
  },
  "OQ-13": {
   "num": 17,
   "title": "OQ-13 · Solutions & IVPs",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question WebWork 2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-f4602ddda32b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-f4602ddda32b.jpg",
   "duration": 109,
   "sizeMB": 5.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 27.2
    },
    {
     "label": "Solve It",
     "start": 40
    },
    {
     "label": "Answer & Traps",
     "start": 82.8
    }
   ]
  },
  "OQ-15": {
   "num": 18,
   "title": "OQ-15 · Solutions & IVPs",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question WebWork 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-c28a9a1fbadb.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-c28a9a1fbadb.jpg",
   "duration": 117,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 27.1
    },
    {
     "label": "Solve It",
     "start": 37.8
    },
    {
     "label": "Check It",
     "start": 53.8
    },
    {
     "label": "Go Deeper",
     "start": 63.2
    },
    {
     "label": "Answer & Traps",
     "start": 92.8
    }
   ]
  },
  "L:M-ivp:7": {
   "num": 19,
   "title": "M-ivp-1 · Solutions & IVPs",
   "source": "Verifying solutions, IVPs, existence & uniqueness lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-1add5f17931e.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-1add5f17931e.jpg",
   "duration": 126,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.7
    },
    {
     "label": "Solve It",
     "start": 38.3
    },
    {
     "label": "Go Deeper",
     "start": 69.4
    },
    {
     "label": "Answer & Traps",
     "start": 98.3
    }
   ]
  },
  "F18-1": {
   "num": 20,
   "title": "F18-1 · Separable",
   "source": "Fall 2018 Midterm 1 (Oct 19, 2018) · Problem 1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-48653a8a5882.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-48653a8a5882.jpg",
   "duration": 192,
   "sizeMB": 7.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.4
    },
    {
     "label": "The Plan",
     "start": 64.3
    },
    {
     "label": "Solve It",
     "start": 77.5
    },
    {
     "label": "Check It",
     "start": 143.6
    },
    {
     "label": "Answer & Traps",
     "start": 162.2
    }
   ]
  },
  "W17-3": {
   "num": 21,
   "title": "W17-3 · Separable",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Problem 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-4b8f9afa5b37.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-4b8f9afa5b37.jpg",
   "duration": 176,
   "sizeMB": 7.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 23.7
    },
    {
     "label": "The Plan",
     "start": 53.4
    },
    {
     "label": "Solve It",
     "start": 65.6
    },
    {
     "label": "Check It",
     "start": 131
    },
    {
     "label": "Answer & Traps",
     "start": 143.5
    }
   ]
  },
  "W25T-5a": {
   "num": 22,
   "title": "W25T-5a · Separable",
   "source": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025) · Question 1.1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-cd5ef707867a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-cd5ef707867a.jpg",
   "duration": 120,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.3
    },
    {
     "label": "The Plan",
     "start": 43
    },
    {
     "label": "Solve It",
     "start": 55.1
    },
    {
     "label": "Answer & Traps",
     "start": 90.7
    }
   ]
  },
  "W25Q-1": {
   "num": 23,
   "title": "W25Q-1 · Separable",
   "source": "Winter 2025 Quizzes 1–2 · Problem 1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a952dd8e9cfd.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a952dd8e9cfd.jpg",
   "duration": 143,
   "sizeMB": 5.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22.1
    },
    {
     "label": "The Plan",
     "start": 42.8
    },
    {
     "label": "Solve It",
     "start": 56
    },
    {
     "label": "Check It",
     "start": 105.9
    },
    {
     "label": "Answer & Traps",
     "start": 112.6
    }
   ]
  },
  "S21-4": {
   "num": 24,
   "title": "S21-4 · Separable",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 1.4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-7bfcbbbfc4f7.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-7bfcbbbfc4f7.jpg",
   "duration": 134,
   "sizeMB": 5.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24.4
    },
    {
     "label": "The Plan",
     "start": 41.1
    },
    {
     "label": "Solve It",
     "start": 49.8
    },
    {
     "label": "Check It",
     "start": 83.1
    },
    {
     "label": "Answer & Traps",
     "start": 104.1
    }
   ]
  },
  "F21-5": {
   "num": 25,
   "title": "F21-5 · Separable",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Problem 5",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-19e661258baa.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-19e661258baa.jpg",
   "duration": 125,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20
    },
    {
     "label": "Solve It",
     "start": 36.5
    },
    {
     "label": "Answer & Traps",
     "start": 97.3
    }
   ]
  },
  "OQ-8": {
   "num": 26,
   "title": "OQ-8 · Separable",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question W-Q1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-fe4553794547.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-fe4553794547.jpg",
   "duration": 131,
   "sizeMB": 5.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.5
    },
    {
     "label": "The Plan",
     "start": 47
    },
    {
     "label": "Solve It",
     "start": 57.3
    },
    {
     "label": "Check It",
     "start": 86.4
    },
    {
     "label": "Answer & Traps",
     "start": 100.4
    }
   ]
  },
  "OQ-12": {
   "num": 27,
   "title": "OQ-12 · Separable",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question WebWork 1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a11f1ec79162.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a11f1ec79162.jpg",
   "duration": 133,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24.7
    },
    {
     "label": "The Plan",
     "start": 36.1
    },
    {
     "label": "Solve It",
     "start": 48.5
    },
    {
     "label": "Check It",
     "start": 97.1
    },
    {
     "label": "Answer & Traps",
     "start": 106.5
    }
   ]
  },
  "L:M-sep:9": {
   "num": 28,
   "title": "M-sep-1 · Separable",
   "source": "Lecture 3, Example 2 (slides 3–7)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-742c2e83a041.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-742c2e83a041.jpg",
   "duration": 127,
   "sizeMB": 5.1,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 19.8
    },
    {
     "label": "Solve It",
     "start": 30.8
    },
    {
     "label": "Check It",
     "start": 56.4
    },
    {
     "label": "Go Deeper",
     "start": 69.1
    },
    {
     "label": "Answer & Traps",
     "start": 98.7
    }
   ]
  },
  "L:M-sep:10": {
   "num": 29,
   "title": "M-sep-2 · Separable",
   "source": "Lecture 3, Example 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ab8828209768.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ab8828209768.jpg",
   "duration": 136,
   "sizeMB": 5.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 23.5
    },
    {
     "label": "Solve It",
     "start": 34.2
    },
    {
     "label": "Go Deeper",
     "start": 70.6
    },
    {
     "label": "Answer & Traps",
     "start": 111.1
    }
   ]
  },
  "L:M-sep:11": {
   "num": 30,
   "title": "M-sep-3 · Separable",
   "source": "Lecture 3, separable test (slide 3)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-86b71162011a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-86b71162011a.jpg",
   "duration": 117,
   "sizeMB": 5.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 15.6
    },
    {
     "label": "Solve It",
     "start": 23.9
    },
    {
     "label": "Go Deeper",
     "start": 65.9
    },
    {
     "label": "Answer & Traps",
     "start": 92.9
    }
   ]
  },
  "L:M-sep:12": {
   "num": 31,
   "title": "M-sep-4 · Separable",
   "source": "Written in the style of the past-paper separable IVPs",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-0864510462f8.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-0864510462f8.jpg",
   "duration": 106,
   "sizeMB": 4.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.6
    },
    {
     "label": "The Plan",
     "start": 30.9
    },
    {
     "label": "Solve It",
     "start": 40.7
    },
    {
     "label": "Check It",
     "start": 73.4
    },
    {
     "label": "Answer & Traps",
     "start": 82.3
    }
   ]
  },
  "L:M-sep:13": {
   "num": 32,
   "title": "M-sep-5 · Separable",
   "source": "Written in the style of the past-paper separable IVPs",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-58cdcfba27ad.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-58cdcfba27ad.jpg",
   "duration": 133,
   "sizeMB": 5.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.2
    },
    {
     "label": "The Plan",
     "start": 32.6
    },
    {
     "label": "Solve It",
     "start": 46.7
    },
    {
     "label": "Check It",
     "start": 88.6
    },
    {
     "label": "Answer & Traps",
     "start": 104.6
    }
   ]
  },
  "W25T-5b": {
   "num": 33,
   "title": "W25T-5b · Linear (Integrating Factor)",
   "source": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025) · Question 1.2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-aab303476096.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-aab303476096.jpg",
   "duration": 173,
   "sizeMB": 7.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.9
    },
    {
     "label": "The Plan",
     "start": 63.9
    },
    {
     "label": "Solve It",
     "start": 81.3
    },
    {
     "label": "Check It",
     "start": 123.9
    },
    {
     "label": "Answer & Traps",
     "start": 143.5
    }
   ]
  },
  "S21-5": {
   "num": 34,
   "title": "S21-5 · Linear (Integrating Factor)",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 1.5",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-8702bf895356.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-8702bf895356.jpg",
   "duration": 108,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.1
    },
    {
     "label": "Solve It",
     "start": 35.8
    },
    {
     "label": "Answer & Traps",
     "start": 79.3
    }
   ]
  },
  "F21-4": {
   "num": 35,
   "title": "F21-4 · Linear (Integrating Factor)",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Problem 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-005bd477dc9d.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-005bd477dc9d.jpg",
   "duration": 112,
   "sizeMB": 5.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.4
    },
    {
     "label": "Solve It",
     "start": 40.6
    },
    {
     "label": "Answer & Traps",
     "start": 82.5
    }
   ]
  },
  "OQ-5": {
   "num": 36,
   "title": "OQ-5 · Linear (Integrating Factor)",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question Quiz IVP",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-8741e873fc71.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-8741e873fc71.jpg",
   "duration": 129,
   "sizeMB": 5.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.9
    },
    {
     "label": "The Plan",
     "start": 40.8
    },
    {
     "label": "Solve It",
     "start": 58
    },
    {
     "label": "Check It",
     "start": 91.5
    },
    {
     "label": "Answer & Traps",
     "start": 102.8
    }
   ]
  },
  "OQ-6": {
   "num": 37,
   "title": "OQ-6 · Linear (Integrating Factor)",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question Quiz IVP 2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a57802bca5a4.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a57802bca5a4.jpg",
   "duration": 161,
   "sizeMB": 6.8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.9
    },
    {
     "label": "The Plan",
     "start": 41
    },
    {
     "label": "Solve It",
     "start": 53.4
    },
    {
     "label": "Check It",
     "start": 115.8
    },
    {
     "label": "Answer & Traps",
     "start": 131.9
    }
   ]
  },
  "L:M-lin:5": {
   "num": 38,
   "title": "M-lin-1 · Linear (Integrating Factor)",
   "source": "Linear equations (integrating factor) lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-0c94102f8ef5.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-0c94102f8ef5.jpg",
   "duration": 113,
   "sizeMB": 4.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 19.4
    },
    {
     "label": "Solve It",
     "start": 29.9
    },
    {
     "label": "Go Deeper",
     "start": 64.7
    },
    {
     "label": "Answer & Traps",
     "start": 89.4
    }
   ]
  },
  "L:M-lin:6": {
   "num": 39,
   "title": "M-lin-2 · Linear (Integrating Factor)",
   "source": "Lecture 3, Example 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-7f4216c3b2a7.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-7f4216c3b2a7.jpg",
   "duration": 122,
   "sizeMB": 5.1,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 17.8
    },
    {
     "label": "Solve It",
     "start": 26.4
    },
    {
     "label": "Go Deeper",
     "start": 65
    },
    {
     "label": "Answer & Traps",
     "start": 93.2
    }
   ]
  },
  "L:M-lin:7": {
   "num": 40,
   "title": "M-lin-3 · Linear (Integrating Factor)",
   "source": "Lecture 3, Example 5",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-b5e05f4b3bb1.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-b5e05f4b3bb1.jpg",
   "duration": 102,
   "sizeMB": 4.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.5
    },
    {
     "label": "Solve It",
     "start": 32.5
    },
    {
     "label": "Answer & Traps",
     "start": 71
    }
   ]
  },
  "L:M-lin:8": {
   "num": 41,
   "title": "M-lin-4 · Linear (Integrating Factor)",
   "source": "Written in the style of the past-paper linear IVPs",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ac8e91e2015a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ac8e91e2015a.jpg",
   "duration": 115,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.7
    },
    {
     "label": "The Plan",
     "start": 31.4
    },
    {
     "label": "Solve It",
     "start": 38.3
    },
    {
     "label": "Check It",
     "start": 74.4
    },
    {
     "label": "Answer & Traps",
     "start": 85.1
    }
   ]
  },
  "L:M-lin:9": {
   "num": 42,
   "title": "M-lin-5 · Linear (Integrating Factor)",
   "source": "Written in the style of the past-paper linear IVPs",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a5fe3fdab087.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a5fe3fdab087.jpg",
   "duration": 117,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.5
    },
    {
     "label": "The Plan",
     "start": 32.3
    },
    {
     "label": "Solve It",
     "start": 41.6
    },
    {
     "label": "Check It",
     "start": 73.1
    },
    {
     "label": "Answer & Traps",
     "start": 88.1
    }
   ]
  },
  "L:M-lin:10": {
   "num": 43,
   "title": "M-lin-6 · Linear (Integrating Factor)",
   "source": "Lecture 3, standard form of a linear equation",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-08448aa8f695.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-08448aa8f695.jpg",
   "duration": 107,
   "sizeMB": 4.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.3
    },
    {
     "label": "Solve It",
     "start": 28.5
    },
    {
     "label": "Go Deeper",
     "start": 50.7
    },
    {
     "label": "Answer & Traps",
     "start": 82
    }
   ]
  },
  "F18-3": {
   "num": 44,
   "title": "F18-3 · Exact",
   "source": "Fall 2018 Midterm 1 (Oct 19, 2018) · Problem 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-58f17b3a0d36.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-58f17b3a0d36.jpg",
   "duration": 191,
   "sizeMB": 8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.8
    },
    {
     "label": "The Plan",
     "start": 64.8
    },
    {
     "label": "Solve It",
     "start": 85.4
    },
    {
     "label": "Check It",
     "start": 142.2
    },
    {
     "label": "Answer & Traps",
     "start": 156.1
    }
   ]
  },
  "W17-4": {
   "num": 45,
   "title": "W17-4 · Exact",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Problem 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-5ef712282b42.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-5ef712282b42.jpg",
   "duration": 200,
   "sizeMB": 8.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 28.4
    },
    {
     "label": "The Plan",
     "start": 77.3
    },
    {
     "label": "Solve It",
     "start": 87.2
    },
    {
     "label": "Check It",
     "start": 152
    },
    {
     "label": "Answer & Traps",
     "start": 159.6
    }
   ]
  },
  "W25T-7": {
   "num": 46,
   "title": "W25T-7 · Exact",
   "source": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025) · Problem 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-7f191379c850.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-7f191379c850.jpg",
   "duration": 129,
   "sizeMB": 5.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 29.8
    },
    {
     "label": "The Plan",
     "start": 44.1
    },
    {
     "label": "Solve It",
     "start": 49.5
    },
    {
     "label": "Check It",
     "start": 89.7
    },
    {
     "label": "Answer & Traps",
     "start": 99.6
    }
   ]
  },
  "S21-6": {
   "num": 47,
   "title": "S21-6 · Exact",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 2.1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-4f5059dcdc98.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-4f5059dcdc98.jpg",
   "duration": 166,
   "sizeMB": 6.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 34.5
    },
    {
     "label": "The Plan",
     "start": 49.3
    },
    {
     "label": "Solve It",
     "start": 60.6
    },
    {
     "label": "Answer & Traps",
     "start": 140.5
    }
   ]
  },
  "F21-6": {
   "num": 48,
   "title": "F21-6 · Exact",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Problem 6",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-d32e6b73e605.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-d32e6b73e605.jpg",
   "duration": 152,
   "sizeMB": 6.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 32.7
    },
    {
     "label": "The Plan",
     "start": 71.7
    },
    {
     "label": "Solve It",
     "start": 78.6
    },
    {
     "label": "Answer & Traps",
     "start": 117.8
    }
   ]
  },
  "OQ-3": {
   "num": 49,
   "title": "OQ-3 · Exact",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question 2021 J-Q2-1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-019cf7f0fc3d.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-019cf7f0fc3d.jpg",
   "duration": 109,
   "sizeMB": 4.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 27.3
    },
    {
     "label": "The Plan",
     "start": 43.5
    },
    {
     "label": "Solve It",
     "start": 49.1
    },
    {
     "label": "Answer & Traps",
     "start": 82.5
    }
   ]
  },
  "OQ-7": {
   "num": 50,
   "title": "OQ-7 · Exact",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question Quiz exact",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-93cc7ac9f244.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-93cc7ac9f244.jpg",
   "duration": 114,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24.3
    },
    {
     "label": "The Plan",
     "start": 46.7
    },
    {
     "label": "Solve It",
     "start": 50.5
    },
    {
     "label": "Check It",
     "start": 78.4
    },
    {
     "label": "Answer & Traps",
     "start": 85.7
    }
   ]
  },
  "L:M-exact:7": {
   "num": 51,
   "title": "M-exact-1 · Exact",
   "source": "Lecture 4, Example 1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-599de4cd9b2a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-599de4cd9b2a.jpg",
   "duration": 103,
   "sizeMB": 4.1,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 18
    },
    {
     "label": "Solve It",
     "start": 26.6
    },
    {
     "label": "Go Deeper",
     "start": 47.7
    },
    {
     "label": "Answer & Traps",
     "start": 78.2
    }
   ]
  },
  "L:M-exact:8": {
   "num": 52,
   "title": "M-exact-2 · Exact",
   "source": "Lecture 4, Example 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-213795ade47c.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-213795ade47c.jpg",
   "duration": 121,
   "sizeMB": 5.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 23.1
    },
    {
     "label": "Solve It",
     "start": 38.4
    },
    {
     "label": "Answer & Traps",
     "start": 92.7
    }
   ]
  },
  "L:M-exact:9": {
   "num": 53,
   "title": "M-exact-3 · Exact",
   "source": "Lecture 4, test for exactness",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ab646f9a6b4b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ab646f9a6b4b.jpg",
   "duration": 90,
   "sizeMB": 3.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.5
    },
    {
     "label": "Solve It",
     "start": 24.5
    },
    {
     "label": "Go Deeper",
     "start": 38.9
    },
    {
     "label": "Answer & Traps",
     "start": 67
    }
   ]
  },
  "L:M-exact:10": {
   "num": 54,
   "title": "M-exact-4 · Exact",
   "source": "Lecture 4, test for exactness",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-12bcd5b63540.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-12bcd5b63540.jpg",
   "duration": 93,
   "sizeMB": 3.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 19.6
    },
    {
     "label": "Solve It",
     "start": 23.6
    },
    {
     "label": "Go Deeper",
     "start": 38
    },
    {
     "label": "Answer & Traps",
     "start": 68.5
    }
   ]
  },
  "L:M-exact:11": {
   "num": 55,
   "title": "M-exact-5 · Exact",
   "source": "Written in the style of the past-paper exact IVPs",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a8366eddba1d.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a8366eddba1d.jpg",
   "duration": 115,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24.6
    },
    {
     "label": "The Plan",
     "start": 32.7
    },
    {
     "label": "Solve It",
     "start": 39
    },
    {
     "label": "Go Deeper",
     "start": 64.3
    },
    {
     "label": "Answer & Traps",
     "start": 95.2
    }
   ]
  },
  "F18-2": {
   "num": 56,
   "title": "F18-2 · Bernoulli",
   "source": "Fall 2018 Midterm 1 (Oct 19, 2018) · Problem 2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-fb8a5e7c68dc.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-fb8a5e7c68dc.jpg",
   "duration": 217,
   "sizeMB": 8.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22
    },
    {
     "label": "The Plan",
     "start": 62.1
    },
    {
     "label": "Solve It",
     "start": 78.5
    },
    {
     "label": "Check It",
     "start": 157
    },
    {
     "label": "Answer & Traps",
     "start": 180.4
    }
   ]
  },
  "W17-5": {
   "num": 57,
   "title": "W17-5 · Bernoulli",
   "source": "Winter 2017 First Midterm (Feb 5, 2017) · Problem 5",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-d3555d3307bf.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-d3555d3307bf.jpg",
   "duration": 148,
   "sizeMB": 6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22.3
    },
    {
     "label": "The Plan",
     "start": 55.8
    },
    {
     "label": "Solve It",
     "start": 63.6
    },
    {
     "label": "Answer & Traps",
     "start": 121.4
    }
   ]
  },
  "S21-7": {
   "num": 58,
   "title": "S21-7 · Bernoulli",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 2.2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-e2e83405344b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-e2e83405344b.jpg",
   "duration": 133,
   "sizeMB": 5.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24
    },
    {
     "label": "The Plan",
     "start": 41.3
    },
    {
     "label": "Solve It",
     "start": 48.2
    },
    {
     "label": "Answer & Traps",
     "start": 100.9
    }
   ]
  },
  "OQ-2": {
   "num": 59,
   "title": "OQ-2 · Bernoulli",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question 2016 Q2-2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-c9f229a47290.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-c9f229a47290.jpg",
   "duration": 104,
   "sizeMB": 4.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.7
    },
    {
     "label": "The Plan",
     "start": 28.8
    },
    {
     "label": "Solve It",
     "start": 34.7
    },
    {
     "label": "Answer & Traps",
     "start": 75.8
    }
   ]
  },
  "OQ-4": {
   "num": 60,
   "title": "OQ-4 · Bernoulli",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question 2021 J-Q2-2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-f9d7d18e0470.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-f9d7d18e0470.jpg",
   "duration": 120,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.5
    },
    {
     "label": "The Plan",
     "start": 29.6
    },
    {
     "label": "Solve It",
     "start": 33.6
    },
    {
     "label": "Check It",
     "start": 71.8
    },
    {
     "label": "Answer & Traps",
     "start": 95.6
    }
   ]
  },
  "L:M-bern:5": {
   "num": 61,
   "title": "M-bern-1 · Bernoulli",
   "source": "Bernoulli equations lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-c69e1d09e4e7.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-c69e1d09e4e7.jpg",
   "duration": 96,
   "sizeMB": 3.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 17.9
    },
    {
     "label": "Solve It",
     "start": 25.1
    },
    {
     "label": "Go Deeper",
     "start": 36.5
    },
    {
     "label": "Answer & Traps",
     "start": 72.9
    }
   ]
  },
  "L:M-bern:6": {
   "num": 62,
   "title": "M-bern-2 · Bernoulli",
   "source": "Lecture 5, Example 3 (slide 11)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-5636a71bda1e.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-5636a71bda1e.jpg",
   "duration": 104,
   "sizeMB": 4.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22.9
    },
    {
     "label": "Solve It",
     "start": 31.6
    },
    {
     "label": "Go Deeper",
     "start": 55.9
    },
    {
     "label": "Answer & Traps",
     "start": 77.6
    }
   ]
  },
  "L:M-bern:7": {
   "num": 63,
   "title": "M-bern-3 · Bernoulli",
   "source": "Lecture 5, Example 1(c) (slide 7)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-8f9dfb46ebeb.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-8f9dfb46ebeb.jpg",
   "duration": 99,
   "sizeMB": 4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.1
    },
    {
     "label": "Solve It",
     "start": 25.4
    },
    {
     "label": "Go Deeper",
     "start": 32.2
    },
    {
     "label": "Answer & Traps",
     "start": 75.2
    }
   ]
  },
  "L:M-bern:8": {
   "num": 64,
   "title": "M-bern-4 · Bernoulli",
   "source": "Written in the style of the past-paper Bernoulli IVPs",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-fd90dd162503.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-fd90dd162503.jpg",
   "duration": 108,
   "sizeMB": 4.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21
    },
    {
     "label": "The Plan",
     "start": 32.1
    },
    {
     "label": "Solve It",
     "start": 42.5
    },
    {
     "label": "Answer & Traps",
     "start": 78.9
    }
   ]
  },
  "L:M-bern:9": {
   "num": 65,
   "title": "M-bern-5 · Bernoulli",
   "source": "Lecture 5, Example 1(d) (slide 7)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-425e06568ae4.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-425e06568ae4.jpg",
   "duration": 109,
   "sizeMB": 4.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22.2
    },
    {
     "label": "Solve It",
     "start": 35.2
    },
    {
     "label": "Go Deeper",
     "start": 57.2
    },
    {
     "label": "Answer & Traps",
     "start": 82.6
    }
   ]
  },
  "F18-4": {
   "num": 66,
   "title": "F18-4 · Substitutions",
   "source": "Fall 2018 Midterm 1 (Oct 19, 2018) · Problem 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-7613fcc00fd1.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-7613fcc00fd1.jpg",
   "duration": 218,
   "sizeMB": 9.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.5
    },
    {
     "label": "The Plan",
     "start": 74.9
    },
    {
     "label": "Solve It",
     "start": 90.9
    },
    {
     "label": "Check It",
     "start": 169.8
    },
    {
     "label": "Answer & Traps",
     "start": 189.1
    }
   ]
  },
  "F21-3": {
   "num": 67,
   "title": "F21-3 · Substitutions",
   "source": "Fall 2021 Quiz 1 (Dr. Eskandarian) and a later copy of it · Problem 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-b71132582fc5.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-b71132582fc5.jpg",
   "duration": 114,
   "sizeMB": 5.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 20.9
    },
    {
     "label": "Solve It",
     "start": 31.6
    },
    {
     "label": "Answer & Traps",
     "start": 88.1
    }
   ]
  },
  "OQ-1": {
   "num": 68,
   "title": "OQ-1 · Substitutions",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question 2016 Q2-1",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-5146aebd53fe.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-5146aebd53fe.jpg",
   "duration": 150,
   "sizeMB": 6.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 23.8
    },
    {
     "label": "The Plan",
     "start": 41.8
    },
    {
     "label": "Solve It",
     "start": 50.3
    },
    {
     "label": "Answer & Traps",
     "start": 118.9
    }
   ]
  },
  "L:M-homog:3": {
   "num": 69,
   "title": "M-homog-1 · Substitutions",
   "source": "Lecture 5, Example 2 (slide 9)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-e63534e5c6e5.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-e63534e5c6e5.jpg",
   "duration": 121,
   "sizeMB": 5.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.9
    },
    {
     "label": "Solve It",
     "start": 32.7
    },
    {
     "label": "Go Deeper",
     "start": 66.1
    },
    {
     "label": "Answer & Traps",
     "start": 96.1
    }
   ]
  },
  "L:M-homog:4": {
   "num": 70,
   "title": "M-homog-2 · Substitutions",
   "source": "Lecture 5, Example 1(a) (slide 7)",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-e8df8fe7ecf0.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-e8df8fe7ecf0.jpg",
   "duration": 102,
   "sizeMB": 4.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 19.5
    },
    {
     "label": "Solve It",
     "start": 33.4
    },
    {
     "label": "Go Deeper",
     "start": 50.2
    },
    {
     "label": "Answer & Traps",
     "start": 77.4
    }
   ]
  },
  "L:M-homog:5": {
   "num": 71,
   "title": "M-homog-3 · Substitutions",
   "source": "Lecture 5, Example 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ef0341467fac.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ef0341467fac.jpg",
   "duration": 118,
   "sizeMB": 4.8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22
    },
    {
     "label": "Solve It",
     "start": 30.3
    },
    {
     "label": "Go Deeper",
     "start": 46
    },
    {
     "label": "Answer & Traps",
     "start": 92.3
    }
   ]
  },
  "L:M-homog:6": {
   "num": 72,
   "title": "M-homog-4 · Substitutions",
   "source": "Lecture 5, homogeneous functions",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-8596e1e774a3.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-8596e1e774a3.jpg",
   "duration": 115,
   "sizeMB": 4.5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22
    },
    {
     "label": "Solve It",
     "start": 35.9
    },
    {
     "label": "Go Deeper",
     "start": 61.2
    },
    {
     "label": "Answer & Traps",
     "start": 90.8
    }
   ]
  },
  "L:M-homog:7": {
   "num": 73,
   "title": "M-homog-5 · Substitutions",
   "source": "Lecture 5, when to use y = ux",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ad321751f48b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ad321751f48b.jpg",
   "duration": 125,
   "sizeMB": 5.9,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 21.1
    },
    {
     "label": "Solve It",
     "start": 28.3
    },
    {
     "label": "Go Deeper",
     "start": 53.4
    },
    {
     "label": "Answer & Traps",
     "start": 95.2
    }
   ]
  },
  "F18-5": {
   "num": 74,
   "title": "F18-5 · Growth & Decay",
   "source": "Fall 2018 Midterm 1 (Oct 19, 2018) · Problem 5",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-bb9731eefa9d.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-bb9731eefa9d.jpg",
   "duration": 122,
   "sizeMB": 5.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.7
    },
    {
     "label": "The Plan",
     "start": 49.1
    },
    {
     "label": "Solve It",
     "start": 58.5
    },
    {
     "label": "Answer & Traps",
     "start": 92.7
    }
   ]
  },
  "W25Q-2": {
   "num": 75,
   "title": "W25Q-2 · Growth & Decay",
   "source": "Winter 2025 Quizzes 1–2 · Problem 2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ea66602299bd.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ea66602299bd.jpg",
   "duration": 118,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.1
    },
    {
     "label": "The Plan",
     "start": 47.4
    },
    {
     "label": "Solve It",
     "start": 56.5
    },
    {
     "label": "Answer & Traps",
     "start": 91.6
    }
   ]
  },
  "S21-8": {
   "num": 76,
   "title": "S21-8 · Growth & Decay",
   "source": "Summer 2021 Quizzes 1–2 (Dr. Eskandarian) · Question 2.3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-77862c4fa009.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-77862c4fa009.jpg",
   "duration": 117,
   "sizeMB": 5.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 27.2
    },
    {
     "label": "The Plan",
     "start": 35.9
    },
    {
     "label": "Solve It",
     "start": 46.7
    },
    {
     "label": "Answer & Traps",
     "start": 86
    }
   ]
  },
  "OQ-9": {
   "num": 77,
   "title": "OQ-9 · Growth & Decay",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question 2020 Q",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-539fbed43c4a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-539fbed43c4a.jpg",
   "duration": 104,
   "sizeMB": 4.8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.4
    },
    {
     "label": "The Plan",
     "start": 39.2
    },
    {
     "label": "Solve It",
     "start": 50.6
    },
    {
     "label": "Answer & Traps",
     "start": 73.5
    }
   ]
  },
  "OQ-11": {
   "num": 78,
   "title": "OQ-11 · Growth & Decay",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question Quiz 2 rabbits",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-d44d88173244.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-d44d88173244.jpg",
   "duration": 149,
   "sizeMB": 6.8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.8
    },
    {
     "label": "The Plan",
     "start": 40.1
    },
    {
     "label": "Solve It",
     "start": 54.4
    },
    {
     "label": "Answer & Traps",
     "start": 119.4
    }
   ]
  },
  "OQ-14": {
   "num": 79,
   "title": "OQ-14 · Growth & Decay",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question WebWork 3",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-637cc5edc53b.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-637cc5edc53b.jpg",
   "duration": 119,
   "sizeMB": 4.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 22.8
    },
    {
     "label": "Solve It",
     "start": 33
    },
    {
     "label": "Go Deeper",
     "start": 58.8
    },
    {
     "label": "Answer & Traps",
     "start": 90.3
    }
   ]
  },
  "L:M-growth:4": {
   "num": 80,
   "title": "M-growth-1 · Growth & Decay",
   "source": "Growth & decay lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-79978c0e4b0a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-79978c0e4b0a.jpg",
   "duration": 122,
   "sizeMB": 5.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24.3
    },
    {
     "label": "The Plan",
     "start": 29.7
    },
    {
     "label": "Solve It",
     "start": 45.2
    },
    {
     "label": "Go Deeper",
     "start": 61.1
    },
    {
     "label": "Answer & Traps",
     "start": 91.4
    }
   ]
  },
  "L:M-growth:5": {
   "num": 81,
   "title": "M-growth-2 · Growth & Decay",
   "source": "Growth & decay lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-186fc5220d6a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-186fc5220d6a.jpg",
   "duration": 112,
   "sizeMB": 4.6,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 25.3
    },
    {
     "label": "The Plan",
     "start": 32.2
    },
    {
     "label": "Solve It",
     "start": 43.9
    },
    {
     "label": "Go Deeper",
     "start": 61.8
    },
    {
     "label": "Answer & Traps",
     "start": 91.4
    }
   ]
  },
  "W25T-9": {
   "num": 82,
   "title": "W25T-9 · Newton’s Cooling",
   "source": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025) · Problem 5",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-90b0fb88b60a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-90b0fb88b60a.jpg",
   "duration": 148,
   "sizeMB": 7.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 31.4
    },
    {
     "label": "The Plan",
     "start": 44
    },
    {
     "label": "Solve It",
     "start": 59.4
    },
    {
     "label": "Answer & Traps",
     "start": 120
    }
   ]
  },
  "OQ-10": {
   "num": 83,
   "title": "OQ-10 · Newton’s Cooling",
   "source": "Other Concordia quizzes (2016–2022, WebWork) · Question Quiz 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-621fb3f1fb51.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-621fb3f1fb51.jpg",
   "duration": 137,
   "sizeMB": 6.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 28
    },
    {
     "label": "The Plan",
     "start": 39.9
    },
    {
     "label": "Solve It",
     "start": 48.9
    },
    {
     "label": "Answer & Traps",
     "start": 109.9
    }
   ]
  },
  "L:M-cool:2": {
   "num": 84,
   "title": "M-cool-1 · Newton’s Cooling",
   "source": "Newton’s law of cooling lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-96ee0aaabbfd.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-96ee0aaabbfd.jpg",
   "duration": 116,
   "sizeMB": 5.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 23.9
    },
    {
     "label": "The Plan",
     "start": 32.5
    },
    {
     "label": "Solve It",
     "start": 39.9
    },
    {
     "label": "Answer & Traps",
     "start": 82.6
    }
   ]
  },
  "W25T-8": {
   "num": 85,
   "title": "W25T-8 · Logistic Model",
   "source": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025) · Problem 4",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-724fade36d63.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-724fade36d63.jpg",
   "duration": 186,
   "sizeMB": 8,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 33.8
    },
    {
     "label": "The Plan",
     "start": 58.2
    },
    {
     "label": "Solve It",
     "start": 67.2
    },
    {
     "label": "Answer & Traps",
     "start": 142.2
    }
   ]
  },
  "L:M-logis:1": {
   "num": 86,
   "title": "M-logis-1 · Logistic Model",
   "source": "Logistic & nonlinear models lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-b18c4859e986.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-b18c4859e986.jpg",
   "duration": 127,
   "sizeMB": 5,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 26.9
    },
    {
     "label": "The Plan",
     "start": 35.3
    },
    {
     "label": "Solve It",
     "start": 46.8
    },
    {
     "label": "Go Deeper",
     "start": 72.2
    },
    {
     "label": "Answer & Traps",
     "start": 103.8
    }
   ]
  },
  "W25T-6": {
   "num": 87,
   "title": "W25T-6 · Complex Numbers",
   "source": "Winter 2025 Term Test 1, version 2 (Feb 21, 2025) · Problem 2",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-0e625aabd30a.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-0e625aabd30a.jpg",
   "duration": 176,
   "sizeMB": 7.4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 32.9
    },
    {
     "label": "Solve It",
     "start": 51.2
    },
    {
     "label": "Check It",
     "start": 129.7
    },
    {
     "label": "Answer & Traps",
     "start": 142.4
    }
   ]
  },
  "L:M-cplx:1": {
   "num": 88,
   "title": "M-cplx-1 · Complex Numbers",
   "source": "Complex arithmetic, modulus & polar form lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-35e5243feb0c.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-35e5243feb0c.jpg",
   "duration": 113,
   "sizeMB": 4.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 24.2
    },
    {
     "label": "Solve It",
     "start": 35
    },
    {
     "label": "Go Deeper",
     "start": 58.8
    },
    {
     "label": "Answer & Traps",
     "start": 85.7
    }
   ]
  },
  "L:M-cplx:2": {
   "num": 89,
   "title": "M-cplx-2 · Complex Numbers",
   "source": "Complex arithmetic, modulus & polar form lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-32cf887b1370.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-32cf887b1370.jpg",
   "duration": 98,
   "sizeMB": 3.7,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 15.9
    },
    {
     "label": "Solve It",
     "start": 25.8
    },
    {
     "label": "Go Deeper",
     "start": 35.6
    },
    {
     "label": "Answer & Traps",
     "start": 74.3
    }
   ]
  },
  "L:M-roots:0": {
   "num": 90,
   "title": "M-roots-1 · De Moivre & Roots",
   "source": "Powers & roots (De Moivre) lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-a0ba62f582d4.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-a0ba62f582d4.jpg",
   "duration": 111,
   "sizeMB": 4.2,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 14.3
    },
    {
     "label": "Solve It",
     "start": 24.2
    },
    {
     "label": "Go Deeper",
     "start": 57.7
    },
    {
     "label": "Answer & Traps",
     "start": 83
    }
   ]
  },
  "L:M-roots:1": {
   "num": 91,
   "title": "M-roots-2 · De Moivre & Roots",
   "source": "Powers & roots (De Moivre) lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-2e377ae49a33.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-2e377ae49a33.jpg",
   "duration": 96,
   "sizeMB": 4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 16.1
    },
    {
     "label": "Solve It",
     "start": 29
    },
    {
     "label": "Go Deeper",
     "start": 43.2
    },
    {
     "label": "Answer & Traps",
     "start": 73.2
    }
   ]
  },
  "L:M-roots:2": {
   "num": 92,
   "title": "M-roots-3 · De Moivre & Roots",
   "source": "Powers & roots (De Moivre) lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-0679641cccb8.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-0679641cccb8.jpg",
   "duration": 110,
   "sizeMB": 4.3,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 13.9
    },
    {
     "label": "Solve It",
     "start": 25.3
    },
    {
     "label": "Check It",
     "start": 51.4
    },
    {
     "label": "Go Deeper",
     "start": 60.2
    },
    {
     "label": "Answer & Traps",
     "start": 87.2
    }
   ]
  },
  "L:M-roots:3": {
   "num": 93,
   "title": "M-roots-4 · De Moivre & Roots",
   "source": "Powers & roots (De Moivre) lesson",
   "video": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/v-ff5ae4232784.mp4",
   "poster": "Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Videos/posters/v-ff5ae4232784.jpg",
   "duration": 105,
   "sizeMB": 4,
   "chapters": [
    {
     "label": "The Question",
     "start": 0
    },
    {
     "label": "What Type Is It?",
     "start": 16.3
    },
    {
     "label": "Solve It",
     "start": 25.8
    },
    {
     "label": "Go Deeper",
     "start": 40.9
    },
    {
     "label": "Answer & Traps",
     "start": 80.2
    }
   ]
  }
 }
};

export default content;
