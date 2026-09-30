import { PracticeQuestion } from '../../types';
import { t } from '../solutions/types';

// ENGR 213 — questions modelled on previous years' quizzes and tests (Winter 2025 Quiz 1-G,
// Quiz 2-G and Test 1 V2), restricted to what the teacher's Lectures 1–6 cover.
const L3 = 'Lecture 3 - Separable and Linear Equations.pdf';
const L4 = 'Lecture 4 - Exact Equations.pdf';
const L6 = 'Lecture 6 - Linear Models, September 25 2026.pdf';
const CH2 = 'Chapter 2 — First-Order Differential Equations';

export const ENGR213_EXTRA: PracticeQuestion[] = [
  {
    id: 'Q_ENGR213_P01',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Quiz 1 (version G), Winter 2025',
    topic: 'Separable IVP',
    difficulty: 'Midterm Level',
    question: t`Solve $yy' + x^{2} = 4$, $y(0) = 2$, and give the answer in explicit form.`,
    options: [
      t`$y = \sqrt{8x - \tfrac23 x^{3} + 4}$`,
      t`$y = \sqrt{4x - \tfrac13 x^{3} + 4}$`,
      t`$y = \sqrt{8x - \tfrac23 x^{3}} + 2$`,
      t`$y = -\sqrt{8x - \tfrac23 x^{3} + 4}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$y\,y' = 4 - x^{2}$ is separable: every $y$ goes with $dy$, every $x$ with $dx$. Solve for $y$ at the end and pick the root that matches the initial value.`,
      stepByStep: [],
      steps: [
        { title: 'Move $x^{2}$ to the right side', math: t`y\,\frac{dy}{dx} = 4 - x^{2}` },
        { title: 'Separate the variables', math: t`y\,dy = (4 - x^{2})\,dx` },
        { title: 'Integrate both sides', math: t`\int y\,dy = \int (4 - x^{2})\,dx \quad\Rightarrow\quad \frac{y^{2}}{2} = 4x - \frac{x^{3}}{3} + C` },
        { title: 'Multiply by 2 (rename $2C = C_1$)', math: t`y^{2} = 8x - \frac23 x^{3} + C_1` },
        { title: 'Apply $y(0) = 2$', math: t`2^{2} = 0 - 0 + C_1 \quad\Rightarrow\quad C_1 = 4` },
        { title: 'Take the square root', math: t`y = \pm\sqrt{8x - \tfrac23 x^{3} + 4}` },
        { title: 'Choose the sign from the initial value', note: t`$y(0) = +2 > 0$, so keep the positive root.` }
      ],
      answer: t`y = \sqrt{8x - \tfrac23 x^{3} + 4}`,
      whyWrong: {
        '1': t`You stopped at $\frac{y^{2}}{2} = 4x - \frac{x^{3}}{3} + C$ and square-rooted without multiplying the right side by 2.`,
        '2': t`The constant must go inside the root: $y^{2} = \dots + C_1$, so $C_1$ is found before taking $\sqrt{\ }$. Adding 2 outside gives $y(0) = 2$ but fails the ODE.`,
        '3': t`The negative root gives $y(0) = -2$. The initial value $y(0) = +2$ picks the positive branch.`
      },
      commonTrap: t`Forgetting that $y^{2} = \dots$ has two roots. The initial condition decides the sign, and quizzes deduct marks for leaving $\pm$ in the final answer.`,
      reference: `${L3} · Pages 3–5`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Pages 3–5 (separable equations)' }]
  },
  {
    id: 'Q_ENGR213_P02',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Quiz 2 (version G), Winter 2025',
    topic: 'Modelling: Rate ∝ 1/y²',
    difficulty: 'Midterm Level',
    question: t`A process $y(t)$ changes at a rate inversely proportional to the square of $y$. If $y(0) = 1$ and $y(1) = 2$, find $y(5)$.`,
    options: [t`$y(5) = \sqrt[3]{36} \approx 3.30$`, t`$y(5) = 4$`, t`$y(5) = -\tfrac23$`, t`$y(5) = 6$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`"Inversely proportional to the square of $y$" translates to $\dfrac{dy}{dt} = \dfrac{k}{y^{2}}$. Two conditions fix two constants: the integration constant and $k$.`,
      stepByStep: [],
      steps: [
        { title: 'Translate the words into an ODE', math: t`\frac{dy}{dt} = \frac{k}{y^{2}}` },
        { title: 'Separate', math: t`y^{2}\,dy = k\,dt` },
        { title: 'Integrate', math: t`\frac{y^{3}}{3} = kt + C \quad\Rightarrow\quad y^{3} = 3kt + C_1` },
        { title: 'Use $y(0) = 1$', math: t`1^{3} = 0 + C_1 \quad\Rightarrow\quad C_1 = 1` },
        { title: 'Use $y(1) = 2$', math: t`2^{3} = 3k(1) + 1 \quad\Rightarrow\quad 3k = 7 \quad\Rightarrow\quad k = \tfrac73` },
        { title: 'The model', math: t`y(t) = \sqrt[3]{7t + 1}` },
        { title: 'Evaluate at $t = 5$', math: t`y(5) = \sqrt[3]{7(5) + 1} = \sqrt[3]{36} \approx 3.30` }
      ],
      answer: t`y(5) = \sqrt[3]{36} \approx 3.30`,
      whyWrong: {
        '1': t`4 comes from $\dfrac{dy}{dt} = \dfrac{k}{y}$ (inverse, but not squared): $y^{2} = 3t + 1$ gives $y(5) = 4$. Re-read "the square of $y$".`,
        '2': t`$-\tfrac23$ comes from $\dfrac{dy}{dt} = k\,y^{2}$ (directly proportional). That model blows up at $t = 2$.`,
        '3': t`6 assumes $y$ grows by 1 per unit time (linear). The rate slows down as $y$ grows because it is divided by $y^{2}$.`
      },
      commonTrap: t`Mis-translating the sentence. "Proportional to" means multiply by $k$; "inversely proportional to" means divide.`,
      reference: `${L3} · Pages 3–5`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Pages 3–5 (separable equations)' }]
  },
  {
    id: 'Q_ENGR213_P03',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Test 1 V2, Q1.1, Winter 2025',
    topic: 'Direct Integration',
    difficulty: 'Foundation',
    question: t`Find the general solution of $\dfrac{dy}{dx} = \sin(3x)$.`,
    options: [t`$y = -\tfrac13\cos(3x) + c$`, t`$y = \tfrac13\cos(3x) + c$`, t`$y = -3\cos(3x) + c$`, t`$y = -\cos(3x) + c$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When the right side depends on $x$ only, the ODE is solved by integrating once. The chain rule in reverse divides by the inner coefficient.`,
      stepByStep: [],
      steps: [
        { title: 'Separate (trivially)', math: t`dy = \sin(3x)\,dx` },
        { title: 'Substitute $u = 3x$, $du = 3\,dx$', math: t`\int \sin(3x)\,dx = \frac13\int \sin u\,du` },
        { title: 'Integrate $\sin u$', math: t`= -\frac13\cos u + c` },
        { title: 'Back-substitute', math: t`y = -\frac13\cos(3x) + c` },
        { title: 'Check', note: t`$\frac{d}{dx}\left[-\tfrac13\cos 3x\right] = -\tfrac13(-3\sin 3x) = \sin 3x$ ✔` }
      ],
      answer: t`y = -\tfrac13\cos(3x) + c`,
      whyWrong: {
        '1': t`$\int \sin u\,du = -\cos u$: the minus sign was lost.`,
        '2': t`Reverse chain rule divides by 3; multiplying by 3 is what differentiation does.`,
        '3': t`The factor $\tfrac13$ from $du = 3\,dx$ was forgotten. Differentiate your answer: you would get $3\sin 3x$.`
      },
      commonTrap: t`Mixing up differentiation (multiply by the inner derivative) with integration (divide by it).`,
      reference: `${L3} · Page 3`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Page 3' }]
  },
  {
    id: 'Q_ENGR213_P04',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Test 1 V2, Q1.2, Winter 2025',
    topic: 'Linear First-Order ODE',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of $y' + \dfrac{3}{x}\,y = x^{4}$ for $x > 0$.`,
    options: [
      t`$y = \dfrac{x^{5}}{8} + c\,x^{-3}$`,
      t`$y = \dfrac{x^{2}}{5} + c\,x^{-3}$`,
      t`$y = \dfrac{x^{5}}{8} + c\,x^{3}$`,
      t`$y = \dfrac{x^{5}}{7} + c\,x^{-3}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Linear standard form $y' + P(x)y = f(x)$: multiply by $\mu = e^{\int P\,dx}$ so the left side becomes $(\mu y)'$, integrate, then divide by $\mu$.`,
      stepByStep: [],
      steps: [
        { title: 'Read off $P$ and $f$ (already in standard form)', math: t`P(x) = \frac3x, \qquad f(x) = x^{4}` },
        { title: 'Integrating factor', math: t`\mu(x) = e^{\int \frac3x dx} = e^{3\ln x} = x^{3}` },
        { title: 'Multiply the whole equation by $x^{3}$', math: t`x^{3}y' + 3x^{2}y = x^{7}` },
        { title: 'Recognise the product rule on the left', math: t`\frac{d}{dx}\left[x^{3}y\right] = x^{7}` },
        { title: 'Integrate', math: t`x^{3}y = \frac{x^{8}}{8} + c` },
        { title: 'Divide by $x^{3}$', math: t`y = \frac{x^{5}}{8} + c\,x^{-3}` }
      ],
      answer: t`y = \frac{x^{5}}{8} + cx^{-3}`,
      whyWrong: {
        '1': t`The right side was not multiplied by $\mu$: you integrated $x^{4}$ instead of $x^{3}\cdot x^{4} = x^{7}$.`,
        '2': t`Dividing $c$ by $x^{3}$ gives $c\,x^{-3}$. Writing $c\,x^{3}$ multiplies instead.`,
        '3': t`$\int x^{7}dx = \dfrac{x^{8}}{8}$: divide by the new power (8), not the old one (7).`
      },
      commonTrap: t`Multiplying only the left side by the integrating factor. Every term, including $f(x)$, gets multiplied.`,
      reference: `${L3} · Pages 8–10`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Pages 8–10 (linear equations)' }]
  },
  {
    id: 'Q_ENGR213_P05',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Test 1 V2, Q3, Winter 2025',
    topic: 'Exact IVP',
    difficulty: 'Exam Master',
    question: t`Find the particular solution of $(5y + 3t - 5)\,dt + (6y + 5t)\,dy = 0$, $y(-1) = 0$.`,
    options: [
      t`$5ty + \tfrac32 t^{2} - 5t + 3y^{2} = \tfrac{13}{2}$`,
      t`$5ty + \tfrac32 t^{2} - 5t + 3y^{2} = -\tfrac72$`,
      t`$10ty + \tfrac32 t^{2} - 5t + 3y^{2} = \tfrac{13}{2}$`,
      t`$5ty + \tfrac32 t^{2} - 5t = \tfrac{13}{2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Test $M_y = N_t$. If exact, build $f(t, y)$ with $f_t = M$ and $f_y = N$; the solution is $f(t, y) = c$ and the initial point fixes $c$.`,
      stepByStep: [],
      steps: [
        { title: 'Identify $M$ (multiplies $dt$) and $N$ (multiplies $dy$)', math: t`M = 5y + 3t - 5, \qquad N = 6y + 5t` },
        { title: 'Exactness test', math: t`\frac{\partial M}{\partial y} = 5, \qquad \frac{\partial N}{\partial t} = 5 \quad\Rightarrow\quad \text{exact}` },
        { title: 'Integrate $M$ with respect to $t$ ($y$ held constant)', math: t`f = \int (5y + 3t - 5)\,dt = 5ty + \frac32 t^{2} - 5t + g(y)` },
        { title: 'Differentiate with respect to $y$ and match $N$', math: t`f_y = 5t + g'(y) = 6y + 5t \quad\Rightarrow\quad g'(y) = 6y` },
        { title: 'Integrate', math: t`g(y) = 3y^{2}` },
        { title: 'General solution', math: t`5ty + \frac32 t^{2} - 5t + 3y^{2} = c` },
        { title: 'Apply $y(-1) = 0$ (careful with the signs)', math: t`5(-1)(0) + \frac32(-1)^{2} - 5(-1) + 3(0)^{2} = 0 + \frac32 + 5 + 0 = \frac{13}{2}` }
      ],
      answer: t`5ty + \tfrac32 t^{2} - 5t + 3y^{2} = \tfrac{13}{2}`,
      whyWrong: {
        '1': t`Sign slip at $t = -1$: $-5t = -5(-1) = +5$, so $c = \tfrac32 + 5 = \tfrac{13}{2}$, not $\tfrac32 - 5 = -\tfrac72$.`,
        '2': t`The cross term $5ty$ appears in both $\int M\,dt$ and $\int N\,dy$; it belongs in $f$ once. Check: $f_t$ would give $10y$, not $5y$.`,
        '3': t`$g(y)$ was never found. After $\int M\,dt$ you must match $f_y$ with $N$ to recover the $3y^{2}$.`
      },
      commonTrap: t`Evaluating the constant with a negative initial time. Substitute $t = -1$ with brackets: $(-1)^{2} = 1$ and $-5(-1) = +5$.`,
      reference: `${L4} · Pages 3–6`
    },
    source: [{ deck: L4, chapter: CH2, location: 'Pages 3–6 (method for exact equations)' }]
  },
  {
    id: 'Q_ENGR213_P06',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Test 1 V2, Q4, Winter 2025',
    topic: 'Logistic Model (Separable)',
    difficulty: 'Exam Master',
    question: t`The number of stores $N(t)$ using a computerized checkout satisfies $\dfrac{dN}{dt} = N(1 - 0.0004N)$, $N(0) = 2$. How many stores are expected at $t = 12$?`,
    options: [t`$\approx 2481$`, t`$2500$ exactly`, t`$\approx 325\,510$`, t`$\approx 1250$`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The equation is separable. Partial fractions split $\dfrac{1}{N(1 - bN)}$ into $\dfrac1N + \dfrac{b}{1 - bN}$. The population levels off at the carrying capacity $1/b = 2500$ but never exceeds it.`,
      stepByStep: [],
      steps: [
        { title: 'Separate the variables ($b = 0.0004$)', math: t`\frac{dN}{N(1 - bN)} = dt` },
        { title: 'Partial fractions', math: t`\frac{1}{N(1 - bN)} = \frac{1}{N} + \frac{b}{1 - bN}` },
        { title: 'Integrate', math: t`\ln|N| - \ln|1 - bN| = t + c_1 \quad\Rightarrow\quad \frac{N}{1 - bN} = C e^{t}` },
        { title: 'Use $N(0) = 2$', math: t`C = \frac{2}{1 - 0.0008} = \frac{2}{0.9992}` },
        { title: 'Solve for $N$', math: t`N = Ce^{t}(1 - bN) \;\Rightarrow\; N(t) = \frac{Ce^{t}}{1 + bCe^{t}} = \frac{2e^{t}}{0.9992 + 0.0008e^{t}}` },
        { title: 'Substitute $t = 12$ ($e^{12} \approx 162\,754.8$)', math: t`N(12) = \frac{325\,509.6}{0.9992 + 130.204} = \frac{325\,509.6}{131.203}` },
        { title: 'Evaluate', math: t`N(12) \approx 2481\ \text{stores}` }
      ],
      answer: t`N(12) \approx 2481`,
      whyWrong: {
        '1': t`2500 is the carrying capacity $1/b$. $N(t)$ approaches it as $t \to \infty$ but is still slightly below it at $t = 12$.`,
        '2': t`$2e^{12} \approx 325\,510$ is pure exponential growth ($N' = N$); the $-0.0004N^{2}$ term caps the growth.`,
        '3': t`1250 is half the capacity (the inflection point, reached near $t \approx 7.1$), not the value at $t = 12$.`
      },
      commonTrap: t`Stopping at the implicit form $\dfrac{N}{1 - bN} = Ce^{t}$. Solve for $N$ explicitly before substituting $t$.`,
      reference: `${L3} · Pages 3–5 (separation of variables)`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Pages 3–5 (separation of variables)' }]
  },
  {
    id: 'Q_ENGR213_P07',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Test 1 V2, Q5, Winter 2025',
    topic: "Newton's Law of Cooling: Time of Death",
    difficulty: 'Exam Master',
    question: t`A body is found in a room at a constant $20^\circ$C. At discovery it is $27^\circ$C; one hour later it is $24^\circ$C. A living body is $37^\circ$C (take death at $t = 0$). How long before discovery did death occur?`,
    options: [t`$\approx 1.59$ h`, t`$\approx 2.59$ h`, t`$\approx 2.68$ h`, t`$\approx 3.33$ h`],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Newton's law gives $T(t) = T_m + (T_0 - T_m)e^{kt}$. The two readings one hour apart fix $k$ (their ratio does not depend on when death occurred); then solve $T(t_d) = 27$.`,
      stepByStep: [],
      steps: [
        { title: 'Model with $T_m = 20$, $T(0) = 37$', math: t`T(t) = 20 + 17\,e^{kt}` },
        { title: 'Let discovery be at $t_d$', math: t`27 = 20 + 17e^{kt_d}, \qquad 24 = 20 + 17e^{k(t_d + 1)}` },
        { title: 'Divide the two differences from room temperature', math: t`\frac{24 - 20}{27 - 20} = \frac{17e^{k(t_d + 1)}}{17e^{kt_d}} = e^{k}` },
        { title: 'Solve for $k$', math: t`e^{k} = \frac47 \quad\Rightarrow\quad k = \ln\frac47 \approx -0.5596\ \text{h}^{-1}` },
        { title: 'Solve the discovery equation for $t_d$', math: t`e^{kt_d} = \frac{7}{17} \quad\Rightarrow\quad t_d = \frac{\ln(7/17)}{k} = \frac{-0.8873}{-0.5596}` },
        { title: 'Evaluate', math: t`t_d \approx 1.59\ \text{h} \approx 1\ \text{h}\ 35\ \text{min}` }
      ],
      answer: t`t_d \approx 1.59\ \text{h}`,
      whyWrong: {
        '1': t`2.59 h is the time of the second reading ($t_d + 1$), not of discovery.`,
        '2': t`2.68 h uses raw temperatures ($24/27 = e^{k}$). Newton's law is exponential in $T - T_m$, so use $\frac{24 - 20}{27 - 20}$.`,
        '3': t`3.33 h assumes a constant 3 °C/h cooling rate from 37 °C. Cooling is fastest when the body is hottest, so the true time is shorter.`
      },
      commonTrap: t`Forgetting to subtract the room temperature before taking ratios or logarithms.`,
      reference: `${L6} · Pages 8–9`
    },
    source: [{ deck: L6, chapter: CH2, location: "Pages 8–9 (Newton's law of cooling/warming)" }]
  },
  {
    id: 'Q_ENGR213_P08',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Test 1 V2, Q1.2 (variant), Winter 2025',
    topic: 'Linear IVP',
    difficulty: 'Midterm Level',
    question: t`Solve $y' + \dfrac{3}{x}\,y = x^{4}$, $y(1) = 1$, for $x > 0$.`,
    options: [
      t`$y = \dfrac{x^{5}}{8} + \dfrac{7}{8}x^{-3}$`,
      t`$y = \dfrac{x^{5}}{8} + x^{-3}$`,
      t`$y = \dfrac{x^{5}}{8} + \dfrac{9}{8}x^{-3}$`,
      t`$y = \dfrac{x^{5} + 7}{8}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Find the general solution first, then use the initial condition on the whole expression to fix $c$.`,
      stepByStep: [],
      steps: [
        { title: 'General solution (from $\\mu = x^{3}$)', math: t`y = \frac{x^{5}}{8} + c\,x^{-3}` },
        { title: 'Substitute $x = 1$, $y = 1$', math: t`1 = \frac{1}{8} + c(1)` },
        { title: 'Solve for $c$', math: t`c = 1 - \frac18 = \frac78` },
        { title: 'Particular solution', math: t`y = \frac{x^{5}}{8} + \frac78 x^{-3}` }
      ],
      answer: t`y = \frac{x^{5}}{8} + \frac78x^{-3}`,
      whyWrong: {
        '1': t`$c$ is not $y(1)$: the particular part contributes $\tfrac18$ at $x = 1$, so $c = 1 - \tfrac18$.`,
        '2': t`Sign slip: $1 = \tfrac18 + c$ gives $c = +\tfrac78$, not $1 + \tfrac18$.`,
        '3': t`The constant multiplies $x^{-3}$, not 1. Check: this option does not satisfy the ODE.`
      },
      commonTrap: t`Setting $c$ equal to the initial value without subtracting the particular solution's value.`,
      reference: `${L3} · Pages 8–10`
    },
    source: [{ deck: L3, chapter: CH2, location: 'Pages 8–10 (linear equations)' }]
  },
  {
    id: 'Q_ENGR213_E01',
    courseId: 'ENGR213',
    chapter: 'ch4',
    pastPaper: 'Test 2 & Final Examination · Concordia University',
    topic: 'Cauchy-Euler Auxiliary Equation Trap (Complex Roots)',
    difficulty: 'Exam Master',
    question: t`What is the general solution of the Cauchy-Euler equation $x^2 y'' + 4x y' + 3y = 0$ for $x > 0$?`,
    options: [
      t`$y(x) = x^{-3/2}\\left[c_1 \\cos\\left(\\frac{\\sqrt{3}}{2}\\ln x\\right) + c_2 \\sin\\left(\\frac{\\sqrt{3}}{2}\\ln x\\right)\\right]$`,
      t`$y(x) = c_1 x^{-1} + c_2 x^{-3}$`,
      t`$y(x) = c_1 x^{-2} + c_2 x^{-2}\\ln x$`,
      t`$y(x) = e^{-3x/2}\\left[c_1 \\cos\\left(\\frac{\\sqrt{3}}{2}x\\right) + c_2 \\sin\\left(\\frac{\\sqrt{3}}{2}x\\right)\\right]$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For $a x^2 y'' + b x y' + c y = 0$, substituting $y = x^m$ yields the auxiliary equation $a m(m-1) + b m + c = 0$, NOT $a m^2 + b m + c = 0$.`,
      stepByStep: [],
      steps: [
        { title: 'Derive the auxiliary equation', math: t`m(m-1) + 4m + 3 = 0 \\implies m^2 + 3m + 3 = 0` },
        { title: 'Solve the quadratic', math: t`m = \\frac{-3 \\pm \\sqrt{9 - 12}}{2} = -\\frac{3}{2} \\pm i \\frac{\\sqrt{3}}{2}` },
        { title: 'Form the complex Euler solution', math: t`x^m = x^{-3/2} x^{\\pm i \\sqrt{3}/2} = x^{-3/2} e^{\\pm i \\frac{\\sqrt{3}}{2}\\ln x}` },
        { title: 'Apply Euler formula', math: t`y(x) = x^{-3/2}\\left[c_1 \\cos\\left(\\frac{\\sqrt{3}}{2}\\ln x\\right) + c_2 \\sin\\left(\\frac{\\sqrt{3}}{2}\\ln x\\right)\\right]` }
      ],
      answer: t`y(x) = x^{-3/2}\\left[c_1 \\cos\\left(\\frac{\\sqrt{3}}{2}\\ln x\\right) + c_2 \\sin\\left(\\frac{\\sqrt{3}}{2}\\ln x\\right)\\right]`,
      whyWrong: {
        '1': t`Exam Trap: Dropping the $-m$ term gives $m^2 + 4m + 3 = (m+1)(m+3) = 0 \\implies x^{-1}, x^{-3}$. This is the single most common student error on Concordia exams!`,
        '2': t`Assumes a repeated root $m = -2$, which does not satisfy $m^2 + 3m + 3 = 0$.`,
        '3': t`Uses standard constant-coefficient exponentials $e^{\\alpha x}$ instead of Cauchy-Euler powers $x^\\alpha = x^{-3/2}$ and $\\ln x$.`
      },
      commonTrap: t`Confusing constant-coefficient auxiliary equations ($a r^2 + b r + c = 0$) with Cauchy-Euler auxiliary equations ($a m(m-1) + b m + c = 0$).`,
      reference: 'Cauchy-Euler Equations · Professor Leonard Lesson 44 & Concordia Test 2'
    },
    source: [{ deck: 'Cauchy-Euler', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Cauchy-Euler Auxiliary Equations' }]
  },
  {
    id: 'Q_ENGR213_E02',
    courseId: 'ENGR213',
    chapter: 'ch4',
    pastPaper: 'Midterm 2 & Final Review · Concordia University',
    topic: 'Variation of Parameters with Repeated Roots',
    difficulty: 'Exam Master',
    question: t`Find a particular solution $y_p(x)$ for the differential equation $y'' - 2y' + y = \\dfrac{e^x}{x^3}$ for $x > 0$.`,
    options: [
      t`$y_p(x) = \\dfrac{e^x}{2x}$`,
      t`$y_p(x) = \\dfrac{e^x}{x}$`,
      t`$y_p(x) = -\\dfrac{e^x}{2x}$`,
      t`$y_p(x) = \\dfrac{e^x}{x^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Variation of parameters gives $y_p = u_1 y_1 + u_2 y_2$ with $u_1' = -\\frac{y_2 f}{W}$ and $u_2' = \\frac{y_1 f}{W}$.`,
      stepByStep: [],
      steps: [
        { title: 'Complementary solutions and Wronskian', math: t`r^2 - 2r + 1 = 0 \\implies y_1 = e^x, \\; y_2 = x e^x. \\quad W = e^{2x}` },
        { title: 'Compute u_1', math: t`u_1' = -\\frac{x e^x (e^x / x^3)}{e^{2x}} = -\\frac{1}{x^2} \\implies u_1 = \\int -x^{-2}dx = \\frac{1}{x}` },
        { title: 'Compute u_2', math: t`u_2' = \\frac{e^x (e^x / x^3)}{e^{2x}} = \\frac{1}{x^3} \\implies u_2 = \\int x^{-3}dx = -\\frac{1}{2x^2}` },
        { title: 'Combine into y_p', math: t`y_p = \\left(\\frac{1}{x}\\right)e^x + \\left(-\\frac{1}{2x^2}\\right)x e^x = \\frac{e^x}{x} - \\frac{e^x}{2x} = \\frac{e^x}{2x}` }
      ],
      answer: t`y_p(x) = \\frac{e^x}{2x}`,
      whyWrong: {
        '1': t`Misses the second term $u_2 y_2 = -\\frac{e^x}{2x}$.`,
        '2': t`Sign error when integrating $-x^{-2}$, mistakenly writing $-\\frac{1}{x}$.`,
        '3': t`Fails to cancel the $x$ factor in $u_2 y_2$.`
      },
      commonTrap: t`Forgetting to combine like terms between $u_1 y_1$ and $u_2 y_2$.`,
      reference: 'Variation of Parameters · Professor Leonard Lesson 43'
    },
    source: [{ deck: 'Variation of Parameters', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Nonhomogeneous Equations' }]
  },
  {
    id: 'Q_ENGR213_E03',
    courseId: 'ENGR213',
    chapter: 'ch4',
    pastPaper: 'Test 2 V2 · Concordia University',
    topic: 'Reduction of Order (Missing Independent Variable)',
    difficulty: 'Exam Master',
    question: t`Solve $y'' + 2y(y')^3 = 0$ using reduction of order.`,
    options: [
      t`$\\frac{1}{3}y^3 + C_1 y = x + C_2$`,
      t`$y^2 + C_1 y = 2x^2 + C_2$`,
      t`$\\frac{1}{4}y^4 = x + C$`,
      t`$y = C_1 e^{2x} + C_2$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When the independent variable $x$ is missing, substitute $y' = u(y)$, so that $y'' = \\frac{du}{dx} = \\frac{du}{dy}\\frac{dy}{dx} = u \\frac{du}{dy}$.`,
      stepByStep: [],
      steps: [
        { title: 'Substitute u(y)', math: t`u \\frac{du}{dy} + 2y u^3 = 0` },
        { title: 'Divide by u and separate', math: t`\\frac{du}{dy} + 2y u^2 = 0 \\implies \\frac{du}{u^2} = -2y dy` },
        { title: 'Integrate to find u', math: t`-\\frac{1}{u} = -y^2 + C_1 \\implies u = \\frac{1}{y^2 - C_1} = \\frac{1}{y^2 + K_1}` },
        { title: 'Replace u with dy/dx and integrate again', math: t`(y^2 + K_1)dy = dx \\implies \\frac{1}{3}y^3 + K_1 y = x + C_2` }
      ],
      answer: t`\\frac{1}{3}y^3 + C_1 y = x + C_2`,
      whyWrong: {
        '1': t`Misses the cubic power when integrating $y^2 dy$.`,
        '2': t`Assumes $u = y'$ without converting $y''$ to $u \\frac{du}{dy}$.`,
        '3': t`Treats the equation as linear.`
      },
      commonTrap: t`Writing $y'' = \\frac{du}{dx}$ and getting stuck because $x$ is not present. Always use $y'' = u \\frac{du}{dy}$ when $x$ is missing.`,
      reference: 'Reduction of Order · Professor Leonard Lesson 40'
    },
    source: [{ deck: 'Reduction of Order', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Variable Missing' }]
  },
  {
    id: 'Q_ENGR213_E04',
    courseId: 'ENGR213',
    chapter: 'ch2',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Linear ODE by Reversing Variables',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of $y\\,dx - 4(x + y^8)\\,dy = 0$.`,
    options: [
      t`$x(y) = y^8 + C y^4$`,
      t`$x(y) = \\frac{1}{2}y^8 + C y^{-4}$`,
      t`$y(x) = x^8 + C x^4$`,
      t`$x(y) = 4y^8 + C y^4$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $dy$ to view $x$ as the dependent variable of $y$, obtaining a first-order linear ODE in $x(y)$.`,
      stepByStep: [],
      steps: [
        { title: 'Divide by dy and rearrange', math: t`y \\frac{dx}{dy} - 4x = 4y^8 \\implies \\frac{dx}{dy} - \\frac{4}{y}x = 4y^7` },
        { title: 'Integrating factor', math: t`\\mu(y) = e^{\\int -\\frac{4}{y}dy} = y^{-4}` },
        { title: 'Collapse and integrate', math: t`\\frac{d}{dy}[y^{-4} x] = 4y^7 y^{-4} = 4y^3 \\implies y^{-4} x = y^4 + C` },
        { title: 'Solve for x', math: t`x(y) = y^8 + C y^4` }
      ],
      answer: t`x(y) = y^8 + C y^4`,
      whyWrong: {
        '1': t`$C y^{-4}$ misses multiplying both sides by $y^4$.`,
        '2': t`Swaps the roles of $x$ and $y$.`,
        '3': t`Fails to divide $4y^8$ by $y$ to obtain $4y^7$.`
      },
      commonTrap: t`Trying to solve for $y(x)$ when the equation is nonlinear in $y$, instead of recognizing it is linear in $x(y)$.`,
      reference: 'First-Order Linear ODEs · Professor Leonard Lesson 18'
    },
    source: [{ deck: L3, chapter: CH2, location: 'Linear equations by variable reversal' }]
  },
  {
    id: 'Q_ENGR213_E05',
    courseId: 'ENGR213',
    chapter: 'ch2',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Bernoulli Equation IVP',
    difficulty: 'Exam Master',
    question: t`Solve the initial-value problem for the Bernoulli equation $x^2 \\frac{dy}{dx} - 2xy = 3y^6, \\quad y(1) = 1$.`,
    options: [
      t`$y(x) = \\left( \\frac{16}{x^5} - \\frac{15}{x^6} \\right)^{-1/5}$`,
      t`$y(x) = \\left( \\frac{3}{x^5} - \\frac{2}{x^6} \\right)^{-1/5}$`,
      t`$y(x) = \\frac{1}{x^5 + 1}$`,
      t`$y(x) = \\sqrt[5]{x^5 + 1}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $x^2$ and $y^6$, then linearize with $w = y^{1-6} = y^{-5}$.`,
      stepByStep: [],
      steps: [
        { title: 'Standard form', math: t`y' - \\frac{2}{x}y = \\frac{3}{x^2}y^6` },
        { title: 'Substitute w = y^{-5}', math: t`w' + \\frac{10}{x}w = -\\frac{15}{x^2}` },
        { title: 'Integrating factor mu = x^{10}', math: t`\\frac{d}{dx}[x^{10} w] = -15 x^8 \\implies x^{10} w = -\\frac{15}{9}x^9 + C = -\\frac{5}{3}x^9 + C` },
        { title: 'Solve for w and apply y(1) = 1', math: t`w(1) = 1 \\implies 1 = -\\frac{5}{3} + C \\implies C = \\frac{8}{3}` },
        { title: 'Final particular solution', math: t`y(x) = \\left( \\frac{16}{x^5} - \\frac{15}{x^6} \\right)^{-1/5}` }
      ],
      answer: t`y(x) = \\left( \\frac{16}{x^5} - \\frac{15}{x^6} \\right)^{-1/5}`,
      whyWrong: {
        '1': t`Misses the factor of $(1-n) = -5$ when substituting $w' = -5y^{-6}y'$.`,
        '2': t`Treats $y^6$ as linear.`,
        '3': t`Forgets to invert the exponent $-1/5$.`
      },
      commonTrap: t`Forgetting to multiply the entire ODE by $(1-n) = -5$ when converting Bernoulli to linear.`,
      reference: 'Bernoulli Equations · Professor Leonard Lesson 22'
    },
    source: [{ deck: 'Bernoulli Equations', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Bernoulli IVPs' }]
  },
  {
    id: 'Q_ENGR213_E06',
    courseId: 'ENGR213',
    chapter: 'ch2',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Exact Differential Equation IVP',
    difficulty: 'Midterm Level',
    question: t`Given that $(5x^4 y - 15x^2 + 8xy)dx + (x^5 + 4x^2 - 1)dy = 0$ is exact, find the implicit solution satisfying $y(0) = 1$.`,
    options: [
      t`$x^5 y - 5x^3 + 4x^2 y - y = -1$`,
      t`$x^5 y - 15x^3 + 8x^2 y - y = 0$`,
      t`$5x^4 y - 5x^3 + 4x^2 - y = -1$`,
      t`$x^5 y - 5x^3 + 4x^2 y + y = 1$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Integrate $M(x,y)$ with respect to $x$, match with $N(x,y)$ to find $g(y)$, and apply $y(0) = 1$.`,
      stepByStep: [],
      steps: [
        { title: 'Integrate M with respect to x', math: t`\\Psi(x, y) = \\int (5x^4 y - 15x^2 + 8xy)dx = x^5 y - 5x^3 + 4x^2 y + g(y)` },
        { title: 'Match partial with N', math: t`\\frac{\\partial \\Psi}{\\partial y} = x^5 + 4x^2 + g'(y) = x^5 + 4x^2 - 1 \\implies g'(y) = -1 \\implies g(y) = -y` },
        { title: 'General solution', math: t`x^5 y - 5x^3 + 4x^2 y - y = C` },
        { title: 'Apply y(0) = 1', math: t`0 - 0 + 0 - 1 = C \\implies C = -1` }
      ],
      answer: t`x^5 y - 5x^3 + 4x^2 y - y = -1`,
      whyWrong: {
        '1': t`Misses integrating $-15x^2$ to $-5x^3$.`,
        '2': t`Differentiates instead of integrating $M$.`,
        '3': t`Sign error on $g(y) = -y$.`
      },
      commonTrap: t`Forgetting that the constant of integration with respect to $x$ is a function $g(y)$.`,
      reference: 'Exact Differential Equations · Professor Leonard Lesson 28'
    },
    source: [{ deck: L4, chapter: CH2, location: 'Exact equations IVP' }]
  },
  {
    id: 'Q_ENGR213_E07',
    courseId: 'ENGR213',
    chapter: 'ch5',
    pastPaper: 'Midterm 2 & Final Review · Concordia University',
    topic: 'Pure Mechanical Resonance Driving',
    difficulty: 'Midterm Level',
    question: t`An undamped spring-mass system satisfies $x'' + 9x = 12\\cos(3t)$ with $x(0) = 0, x'(0) = 0$. What is the resulting motion $x(t)$?`,
    options: [
      t`$x(t) = 2t\\sin(3t)$`,
      t`$x(t) = 4\\cos(3t) - 4\\cos(3t)$`,
      t`$x(t) = 2t\\cos(3t)$`,
      t`$x(t) = \\frac{4}{3}\\sin(3t)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Driving an undamped oscillator at its natural frequency $\\omega = \\omega_0 = 3$ produces pure resonance with particular solution $x_p(t) = \\frac{F_0}{2\\omega_0}t\\sin(\\omega_0 t)$.`,
      stepByStep: [],
      steps: [
        { title: 'Natural frequency', math: t`\\omega_0 = \\sqrt{9} = 3\\text{ rad/s}. \\quad \\text{Matches driving frequency } \\omega = 3!` },
        { title: 'Guess form with resonance', math: t`x_p = t(A\\cos(3t) + B\\sin(3t))` },
        { title: 'Substitute and solve', math: t`6B\\cos(3t) - 6A\\sin(3t) = 12\\cos(3t) \\implies B = 2, A = 0 \\implies x_p = 2t\\sin(3t)` },
        { title: 'Apply initial conditions x(0) = 0, x\'(0) = 0', math: t`x_c = c_1\\cos(3t) + c_2\\sin(3t) \\implies c_1 = 0, c_2 = 0` }
      ],
      answer: t`x(t) = 2t\\sin(3t)`,
      whyWrong: {
        '1': t`Neglects the resonance multiplication by $t$, which would yield division by zero.`,
        '2': t`Cosine term corresponds to driving with sine, not cosine.`,
        '3': t`Assumes bounded periodic motion without resonance.`
      },
      commonTrap: t`Forgetting that when the driving frequency matches the natural frequency, the particular solution grows linearly with $t$.`,
      reference: 'Resonance · Professor Leonard Lesson 47'
    },
    source: [{ deck: 'Resonance', chapter: 'Chapter 5 — Modeling with Higher-Order ODEs', location: 'Resonance in Oscillators' }]
  },
  {
    id: 'Q_ENGR213_E08',
    courseId: 'ENGR213',
    chapter: 'ch10',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Coupled Linear System of ODEs',
    difficulty: 'Exam Master',
    question: t`Solve the linear system $\\dfrac{dx}{dt} = x - y, \\quad \\dfrac{dy}{dt} = 2x + 4y$.`,
    options: [
      t`$x(t) = c_1 e^{2t} + c_2 e^{3t}, \\quad y(t) = -c_1 e^{2t} - 2c_2 e^{3t}$`,
      t`$x(t) = c_1 e^{2t} + c_2 e^{3t}, \\quad y(t) = c_1 e^{2t} + 2c_2 e^{3t}$`,
      t`$x(t) = c_1 \\cos(2t) + c_2 \\sin(3t), \\quad y(t) = c_1 \\cos(2t)$`,
      t`$x(t) = c_1 e^t + c_2 e^{4t}, \\quad y(t) = c_1 e^t - c_2 e^{4t}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Isolate $y = x - x'$ from the first equation, substitute into the second to obtain $x'' - 5x' + 6x = 0$, and back-solve for $y(t)$.`,
      stepByStep: [],
      steps: [
        { title: 'Elimination', math: t`y = x - x' \\implies y' = x' - x''` },
        { title: 'Substitute into 2nd equation', math: t`x' - x'' = 2x + 4(x - x') \\implies x'' - 5x' + 6x = 0` },
        { title: 'Solve for x(t)', math: t`r^2 - 5r + 6 = 0 \\implies r = 2, 3 \\implies x(t) = c_1 e^{2t} + c_2 e^{3t}` },
        { title: 'Back-solve for y(t)', math: t`y = x - x' = (c_1 e^{2t} + c_2 e^{3t}) - (2c_1 e^{2t} + 3c_2 e^{3t}) = -c_1 e^{2t} - 2c_2 e^{3t}` }
      ],
      answer: t`x(t) = c_1 e^{2t} + c_2 e^{3t}, \\quad y(t) = -c_1 e^{2t} - 2c_2 e^{3t}`,
      whyWrong: {
        '1': t`Sign error when computing $x - x'$.`,
        '2': t`Assumes oscillatory complex eigenvalues.`,
        '3': t`Uses diagonal matrix entries 1 and 4 as eigenvalues, which ignores coupling.`
      },
      commonTrap: t`Forgetting that the constants in $y(t)$ are strictly tied to $c_1, c_2$ from $x(t)$. You cannot introduce new independent constants $c_3, c_4$!`,
      reference: 'Systems of ODEs · Professor Leonard Lesson 48'
    },
    source: [{ deck: 'Systems of ODEs', chapter: 'Chapter 10 — Systems of Linear ODEs', location: 'Elimination Method' }]
  },
  {
    id: 'Q_ENGR213_E09',
    courseId: 'ENGR213',
    chapter: 'ch7',
    pastPaper: 'Final Examination Review · Concordia University',
    topic: 'Laplace Transform Discontinuous Step Forcing',
    difficulty: 'Exam Master',
    question: t`Solve $y' + 2y = u(t - 3)$ with $y(0) = 0$ using Laplace transforms.`,
    options: [
      t`$y(t) = \\frac{1}{2}\\left(1 - e^{-2(t-3)}\\right)u(t-3)$`,
      t`$y(t) = \\frac{1}{2}\\left(1 - e^{-2t}\\right)u(t-3)$`,
      t`$y(t) = e^{-2(t-3)}u(t-3)$`,
      t`$y(t) = \\left(1 - e^{-2(t-3)}\\right)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Transform: $(s + 2)Y(s) = \\frac{e^{-3s}}{s} \\implies Y(s) = e^{-3s}\\left[\\frac{1}{s(s+2)}\\right]$. Inverse using second shifting theorem.`,
      stepByStep: [],
      steps: [
        { title: 'Partial fractions', math: t`\\frac{1}{s(s+2)} = \\frac{1}{2}\\left(\\frac{1}{s} - \\frac{1}{s+2}\\right)` },
        { title: 'Pre-shift inverse', math: t`f(t) = \\mathcal{L}^{-1}\\left\\{\\frac{1}{2}\\left(\\frac{1}{s} - \\frac{1}{s+2}\\right)\\right\\} = \\frac{1}{2}(1 - e^{-2t})` },
        { title: 'Apply second shift theorem', math: t`y(t) = f(t-3)u(t-3) = \\frac{1}{2}\\left(1 - e^{-2(t-3)}\\right)u(t-3)` }
      ],
      answer: t`y(t) = \\frac{1}{2}\\left(1 - e^{-2(t-3)}\\right)u(t-3)`,
      whyWrong: {
        '1': t`Forgets to shift $t \\to (t-3)$ in the exponential term.`,
        '2': t`Misses the partial fraction $1/s$ step function response.`,
        '3': t`Omits the Heaviside step multiplier $u(t-3)$, which would mean the response starts before $t = 3$.`
      },
      commonTrap: t`Forgetting to shift the argument of the exponential: $\\mathcal{L}^{-1}\\{e^{-as}F(s)\\} = f(t-a)u(t-a)$, so $e^{-2t}$ becomes $e^{-2(t-3)}$!`,
      reference: 'Laplace Transforms · Professor Leonard Lesson 50'
    },
    source: [{ deck: 'Laplace Transforms', chapter: 'Chapter 7 — Laplace Transforms', location: 'Second Shifting Theorem' }]
  }
];
