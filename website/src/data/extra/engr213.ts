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
    chapter: 'past-final',
    pastPaper: 'Test 2 & Final Examination · Concordia University',
    topic: 'Cauchy-Euler Auxiliary Equation Trap (Complex Roots)',
    difficulty: 'Exam Master',
    question: t`What is the general solution of the Cauchy-Euler equation $x^2 y'' + 4x y' + 3y = 0$ for $x > 0$?`,
    options: [
      t`$y(x) = x^{-3/2}\left[c_1 \cos\left(\frac{\sqrt{3}}{2}\ln x\right) + c_2 \sin\left(\frac{\sqrt{3}}{2}\ln x\right)\right]$`,
      t`$y(x) = c_1 x^{-1} + c_2 x^{-3}$`,
      t`$y(x) = c_1 x^{-2} + c_2 x^{-2}\ln x$`,
      t`$y(x) = e^{-3x/2}\left[c_1 \cos\left(\frac{\sqrt{3}}{2}x\right) + c_2 \sin\left(\frac{\sqrt{3}}{2}x\right)\right]$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For $a x^2 y'' + b x y' + c y = 0$, substituting $y = x^m$ yields the auxiliary equation $a m(m-1) + b m + c = 0$, NOT $a m^2 + b m + c = 0$.`,
      stepByStep: [],
      steps: [
        { title: 'Derive the auxiliary equation', math: t`m(m-1) + 4m + 3 = 0 \implies m^2 + 3m + 3 = 0` },
        { title: 'Solve the quadratic', math: t`m = \frac{-3 \pm \sqrt{9 - 12}}{2} = -\frac{3}{2} \pm i \frac{\sqrt{3}}{2}` },
        { title: 'Form the complex Euler solution', math: t`x^m = x^{-3/2} x^{\pm i \sqrt{3}/2} = x^{-3/2} e^{\pm i \frac{\sqrt{3}}{2}\ln x}` },
        { title: 'Apply Euler formula', math: t`y(x) = x^{-3/2}\left[c_1 \cos\left(\frac{\sqrt{3}}{2}\ln x\right) + c_2 \sin\left(\frac{\sqrt{3}}{2}\ln x\right)\right]` }
      ],
      answer: t`y(x) = x^{-3/2}\left[c_1 \cos\left(\frac{\sqrt{3}}{2}\ln x\right) + c_2 \sin\left(\frac{\sqrt{3}}{2}\ln x\right)\right]`,
      whyWrong: {
        '1': t`Exam Trap: Dropping the $-m$ term gives $m^2 + 4m + 3 = (m+1)(m+3) = 0 \implies x^{-1}, x^{-3}$. This is the single most common student error on Concordia exams!`,
        '2': t`Assumes a repeated root $m = -2$, which does not satisfy $m^2 + 3m + 3 = 0$.`,
        '3': t`Uses standard constant-coefficient exponentials $e^{\alpha x}$ instead of Cauchy-Euler powers $x^\alpha = x^{-3/2}$ and $\ln x$.`
      },
      commonTrap: t`Confusing constant-coefficient auxiliary equations ($a r^2 + b r + c = 0$) with Cauchy-Euler auxiliary equations ($a m(m-1) + b m + c = 0$).`,
      reference: 'Cauchy-Euler Equations · Professor Leonard Lesson 44 & Concordia Test 2'
    },
    source: [{ deck: 'Cauchy-Euler', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Cauchy-Euler Auxiliary Equations' }]
  },
  {
    id: 'Q_ENGR213_E02',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Midterm 2 & Final Review · Concordia University',
    topic: 'Variation of Parameters with Repeated Roots',
    difficulty: 'Exam Master',
    question: t`Find a particular solution $y_p(x)$ for the differential equation $y'' - 2y' + y = \dfrac{e^x}{x^3}$ for $x > 0$.`,
    options: [
      t`$y_p(x) = \dfrac{e^x}{2x}$`,
      t`$y_p(x) = \dfrac{e^x}{x}$`,
      t`$y_p(x) = -\dfrac{e^x}{2x}$`,
      t`$y_p(x) = \dfrac{e^x}{x^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Variation of parameters gives $y_p = u_1 y_1 + u_2 y_2$ with $u_1' = -\frac{y_2 f}{W}$ and $u_2' = \frac{y_1 f}{W}$.`,
      stepByStep: [],
      steps: [
        { title: 'Complementary solutions and Wronskian', math: t`r^2 - 2r + 1 = 0 \implies y_1 = e^x, \\; y_2 = x e^x. \quad W = e^{2x}` },
        { title: 'Compute u_1', math: t`u_1' = -\frac{x e^x (e^x / x^3)}{e^{2x}} = -\frac{1}{x^2} \implies u_1 = \int -x^{-2}dx = \frac{1}{x}` },
        { title: 'Compute u_2', math: t`u_2' = \frac{e^x (e^x / x^3)}{e^{2x}} = \frac{1}{x^3} \implies u_2 = \int x^{-3}dx = -\frac{1}{2x^2}` },
        { title: 'Combine into y_p', math: t`y_p = \left(\frac{1}{x}\right)e^x + \left(-\frac{1}{2x^2}\right)x e^x = \frac{e^x}{x} - \frac{e^x}{2x} = \frac{e^x}{2x}` }
      ],
      answer: t`y_p(x) = \frac{e^x}{2x}`,
      whyWrong: {
        '1': t`Misses the second term $u_2 y_2 = -\frac{e^x}{2x}$.`,
        '2': t`Sign error when integrating $-x^{-2}$, mistakenly writing $-\frac{1}{x}$.`,
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
    chapter: 'past-final',
    pastPaper: 'Test 2 V2 · Concordia University',
    topic: 'Reduction of Order (Missing Independent Variable)',
    difficulty: 'Exam Master',
    question: t`Solve $y'' + 2y(y')^3 = 0$ using reduction of order.`,
    options: [
      t`$\frac{1}{3}y^3 + C_1 y = x + C_2$`,
      t`$y^2 + C_1 y = 2x^2 + C_2$`,
      t`$\frac{1}{4}y^4 = x + C$`,
      t`$y = C_1 e^{2x} + C_2$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When the independent variable $x$ is missing, substitute $y' = u(y)$, so that $y'' = \frac{du}{dx} = \frac{du}{dy}\frac{dy}{dx} = u \frac{du}{dy}$.`,
      stepByStep: [],
      steps: [
        { title: 'Substitute u(y)', math: t`u \frac{du}{dy} + 2y u^3 = 0` },
        { title: 'Divide by u and separate', math: t`\frac{du}{dy} + 2y u^2 = 0 \implies \frac{du}{u^2} = -2y dy` },
        { title: 'Integrate to find u', math: t`-\frac{1}{u} = -y^2 + C_1 \implies u = \frac{1}{y^2 - C_1} = \frac{1}{y^2 + K_1}` },
        { title: 'Replace u with dy/dx and integrate again', math: t`(y^2 + K_1)dy = dx \implies \frac{1}{3}y^3 + K_1 y = x + C_2` }
      ],
      answer: t`\frac{1}{3}y^3 + C_1 y = x + C_2`,
      whyWrong: {
        '1': t`Misses the cubic power when integrating $y^2 dy$.`,
        '2': t`Assumes $u = y'$ without converting $y''$ to $u \frac{du}{dy}$.`,
        '3': t`Treats the equation as linear.`
      },
      commonTrap: t`Writing $y'' = \frac{du}{dx}$ and getting stuck because $x$ is not present. Always use $y'' = u \frac{du}{dy}$ when $x$ is missing.`,
      reference: 'Reduction of Order · Professor Leonard Lesson 40'
    },
    source: [{ deck: 'Reduction of Order', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Variable Missing' }]
  },
  {
    id: 'Q_ENGR213_E04',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Linear ODE by Reversing Variables',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of $y\\,dx - 4(x + y^8)\\,dy = 0$.`,
    options: [
      t`$x(y) = y^8 + C y^4$`,
      t`$x(y) = \frac{1}{2}y^8 + C y^{-4}$`,
      t`$y(x) = x^8 + C x^4$`,
      t`$x(y) = 4y^8 + C y^4$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $dy$ to view $x$ as the dependent variable of $y$, obtaining a first-order linear ODE in $x(y)$.`,
      stepByStep: [],
      steps: [
        { title: 'Divide by dy and rearrange', math: t`y \frac{dx}{dy} - 4x = 4y^8 \implies \frac{dx}{dy} - \frac{4}{y}x = 4y^7` },
        { title: 'Integrating factor', math: t`\mu(y) = e^{\int -\frac{4}{y}dy} = y^{-4}` },
        { title: 'Collapse and integrate', math: t`\frac{d}{dy}[y^{-4} x] = 4y^7 y^{-4} = 4y^3 \implies y^{-4} x = y^4 + C` },
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
    chapter: 'past',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Bernoulli Equation IVP',
    difficulty: 'Exam Master',
    question: t`Solve the initial-value problem for the Bernoulli equation $x^2 \frac{dy}{dx} - 2xy = 3y^6, \quad y(1) = 1$.`,
    options: [
      t`$y(x) = \left( \frac{16}{x^5} - \frac{15}{x^6} \right)^{-1/5}$`,
      t`$y(x) = \left( \frac{3}{x^5} - \frac{2}{x^6} \right)^{-1/5}$`,
      t`$y(x) = \frac{1}{x^5 + 1}$`,
      t`$y(x) = \sqrt[5]{x^5 + 1}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $x^2$ and $y^6$, then linearize with $w = y^{1-6} = y^{-5}$.`,
      stepByStep: [],
      steps: [
        { title: 'Standard form', math: t`y' - \frac{2}{x}y = \frac{3}{x^2}y^6` },
        { title: 'Substitute w = y^{-5}', math: t`w' + \frac{10}{x}w = -\frac{15}{x^2}` },
        { title: 'Integrating factor mu = x^{10}', math: t`\frac{d}{dx}[x^{10} w] = -15 x^8 \implies x^{10} w = -\frac{15}{9}x^9 + C = -\frac{5}{3}x^9 + C` },
        { title: 'Solve for w and apply y(1) = 1', math: t`w(1) = 1 \implies 1 = -\frac{5}{3} + C \implies C = \frac{8}{3}` },
        { title: 'Final particular solution', math: t`y(x) = \left( \frac{16}{x^5} - \frac{15}{x^6} \right)^{-1/5}` }
      ],
      answer: t`y(x) = \left( \frac{16}{x^5} - \frac{15}{x^6} \right)^{-1/5}`,
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
    chapter: 'past',
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
        { title: 'Integrate M with respect to x', math: t`\Psi(x, y) = \int (5x^4 y - 15x^2 + 8xy)dx = x^5 y - 5x^3 + 4x^2 y + g(y)` },
        { title: 'Match partial with N', math: t`\frac{\partial \Psi}{\partial y} = x^5 + 4x^2 + g'(y) = x^5 + 4x^2 - 1 \implies g'(y) = -1 \implies g(y) = -y` },
        { title: 'General solution', math: t`x^5 y - 5x^3 + 4x^2 y - y = C` },
        { title: 'Apply y(0) = 1', math: t`0 - 0 + 0 - 1 = C \implies C = -1` }
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
    chapter: 'past-final',
    pastPaper: 'Midterm 2 & Final Review · Concordia University',
    topic: 'Pure Mechanical Resonance Driving',
    difficulty: 'Midterm Level',
    question: t`An undamped spring-mass system satisfies $x'' + 9x = 12\cos(3t)$ with $x(0) = 0, x'(0) = 0$. What is the resulting motion $x(t)$?`,
    options: [
      t`$x(t) = 2t\sin(3t)$`,
      t`$x(t) = 4\cos(3t) - 4\cos(3t)$`,
      t`$x(t) = 2t\cos(3t)$`,
      t`$x(t) = \frac{4}{3}\sin(3t)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Driving an undamped oscillator at its natural frequency $\omega = \omega_0 = 3$ produces pure resonance with particular solution $x_p(t) = \frac{F_0}{2\omega_0}t\sin(\omega_0 t)$.`,
      stepByStep: [],
      steps: [
        { title: 'Natural frequency', math: t`\omega_0 = \sqrt{9} = 3\text{ rad/s}. \quad \text{Matches driving frequency } \omega = 3!` },
        { title: 'Guess form with resonance', math: t`x_p = t(A\cos(3t) + B\sin(3t))` },
        { title: 'Substitute and solve', math: t`6B\cos(3t) - 6A\sin(3t) = 12\cos(3t) \implies B = 2, A = 0 \implies x_p = 2t\sin(3t)` },
        { title: 'Apply initial conditions x(0) = 0, x\'(0) = 0', math: t`x_c = c_1\cos(3t) + c_2\sin(3t) \implies c_1 = 0, c_2 = 0` }
      ],
      answer: t`x(t) = 2t\sin(3t)`,
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
    chapter: 'past-final',
    pastPaper: 'Final Examination Winter 2023 · Concordia University',
    topic: 'Coupled Linear System of ODEs',
    difficulty: 'Exam Master',
    question: t`Solve the linear system $\dfrac{dx}{dt} = x - y, \quad \dfrac{dy}{dt} = 2x + 4y$.`,
    options: [
      t`$x(t) = c_1 e^{2t} + c_2 e^{3t}, \quad y(t) = -c_1 e^{2t} - 2c_2 e^{3t}$`,
      t`$x(t) = c_1 e^{2t} + c_2 e^{3t}, \quad y(t) = c_1 e^{2t} + 2c_2 e^{3t}$`,
      t`$x(t) = c_1 \cos(2t) + c_2 \sin(3t), \quad y(t) = c_1 \cos(2t)$`,
      t`$x(t) = c_1 e^t + c_2 e^{4t}, \quad y(t) = c_1 e^t - c_2 e^{4t}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Isolate $y = x - x'$ from the first equation, substitute into the second to obtain $x'' - 5x' + 6x = 0$, and back-solve for $y(t)$.`,
      stepByStep: [],
      steps: [
        { title: 'Elimination', math: t`y = x - x' \implies y' = x' - x''` },
        { title: 'Substitute into 2nd equation', math: t`x' - x'' = 2x + 4(x - x') \implies x'' - 5x' + 6x = 0` },
        { title: 'Solve for x(t)', math: t`r^2 - 5r + 6 = 0 \implies r = 2, 3 \implies x(t) = c_1 e^{2t} + c_2 e^{3t}` },
        { title: 'Back-solve for y(t)', math: t`y = x - x' = (c_1 e^{2t} + c_2 e^{3t}) - (2c_1 e^{2t} + 3c_2 e^{3t}) = -c_1 e^{2t} - 2c_2 e^{3t}` }
      ],
      answer: t`x(t) = c_1 e^{2t} + c_2 e^{3t}, \quad y(t) = -c_1 e^{2t} - 2c_2 e^{3t}`,
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
    chapter: 'past-final',
    pastPaper: 'Final Examination Review · Concordia University',
    topic: 'Laplace Transform Discontinuous Step Forcing',
    difficulty: 'Exam Master',
    question: t`Solve $y' + 2y = u(t - 3)$ with $y(0) = 0$ using Laplace transforms.`,
    options: [
      t`$y(t) = \frac{1}{2}\left(1 - e^{-2(t-3)}\right)u(t-3)$`,
      t`$y(t) = \frac{1}{2}\left(1 - e^{-2t}\right)u(t-3)$`,
      t`$y(t) = e^{-2(t-3)}u(t-3)$`,
      t`$y(t) = \left(1 - e^{-2(t-3)}\right)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Transform: $(s + 2)Y(s) = \frac{e^{-3s}}{s} \implies Y(s) = e^{-3s}\left[\frac{1}{s(s+2)}\right]$. Inverse using second shifting theorem.`,
      stepByStep: [],
      steps: [
        { title: 'Partial fractions', math: t`\frac{1}{s(s+2)} = \frac{1}{2}\left(\frac{1}{s} - \frac{1}{s+2}\right)` },
        { title: 'Pre-shift inverse', math: t`f(t) = \mathcal{L}^{-1}\left\\{\frac{1}{2}\left(\frac{1}{s} - \frac{1}{s+2}\right)\right\\} = \frac{1}{2}(1 - e^{-2t})` },
        { title: 'Apply second shift theorem', math: t`y(t) = f(t-3)u(t-3) = \frac{1}{2}\left(1 - e^{-2(t-3)}\right)u(t-3)` }
      ],
      answer: t`y(t) = \frac{1}{2}\left(1 - e^{-2(t-3)}\right)u(t-3)`,
      whyWrong: {
        '1': t`Forgets to shift $t \to (t-3)$ in the exponential term.`,
        '2': t`Misses the partial fraction $1/s$ step function response.`,
        '3': t`Omits the Heaviside step multiplier $u(t-3)$, which would mean the response starts before $t = 3$.`
      },
      commonTrap: t`Forgetting to shift the argument of the exponential: $\mathcal{L}^{-1}\\{e^{-as}F(s)\\} = f(t-a)u(t-a)$, so $e^{-2t}$ becomes $e^{-2(t-3)}$!`,
      reference: 'Laplace Transforms · Professor Leonard Lesson 50'
    },
    source: [{ deck: 'Laplace Transforms', chapter: 'Chapter 7 — Laplace Transforms', location: 'Second Shifting Theorem' }]
  },
  {
    id: 'Q_ENGR213_P09',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Quiz 2 (Past Paper) · Concordia University',
    topic: 'Nonlinear Rabbit Population Model',
    difficulty: 'Exam Master',
    question: t`A population of rabbits grows according to the nonlinear differential equation $\dfrac{dy}{dt} = k\\,y^{1.01}$. Initially at $t = 0\text{ months}$, the population is $y(0) = 2$. At $t = 3\text{ months}$, the population has grown to $y(3) = 16$. What is the predicted rabbit population after $12\text{ months}$?`,
    options: [
      t`$\approx 11{,}050$ rabbits`,
      t`$\approx 8{,}192$ rabbits`,
      t`$\approx 2{,}048$ rabbits`,
      t`$\approx 64$ rabbits`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separate variables: $\int y^{-1.01} dy = \int k dt \implies -100 y^{-0.01} = kt + C$. The power exponent $1.01 > 1$ accelerates growth beyond standard Malthusian exponential models.`,
      stepByStep: [],
      steps: [
        { title: 'Separate variables and integrate', math: t`\int y^{-1.01}\\,dy = \int k\\,dt \implies \frac{y^{-0.01}}{-0.01} = kt + C \implies -100 y^{-0.01} = kt + C` },
        { title: 'Apply initial condition $y(0) = 2$', math: t`C = -100(2)^{-0.01} \approx -100(0.9930925) = -99.30925` },
        { title: 'Apply $y(3) = 16$ to find rate parameter $k$', math: t`-100(16)^{-0.01} = 3k - 99.30925 \implies -97.2655 = 3k - 99.30925 \implies 3k = 2.04375 \implies k \approx 0.68125` },
        { title: 'Evaluate at $t = 12\\text{ months}$', math: t`-100 y^{-0.01} = 12(0.68125) - 99.30925 = 8.1750 - 99.30925 = -91.13425` },
        { title: 'Solve for $y(12)$', math: t`y^{-0.01} = 0.9113425 \implies y(12) = (0.9113425)^{-100} \approx 11{,}050` }
      ],
      answer: t`\approx 11{,}050\text{ rabbits}`,
      whyWrong: {
        '1': t`Linear/exponential assumption: treating $\frac{dy}{dt} = ky$ yields $y(t) = 2(8)^{t/3} \implies y(12) = 2(8)^4 = 8192$. This ignores the nonlinear exponent $1.01$.`,
        '2': t`Arithmetic extrapolation: $2 \times 16 \times 64 = 2048$.`,
        '3': t`Simply adding or squaring the 3-month gain.`
      },
      commonTrap: t`Treating $\frac{dy}{dt} = ky^{1.01}$ as linear Malthusian growth. Nonlinear exponents $p > 1$ create accelerated super-exponential expansion!`,
      reference: 'Quiz 2 Solutions · Concordia University; First-Order Modeling'
    },
    source: [{ deck: 'Quiz 2', chapter: CH2, location: 'Nonlinear population dynamics' }]
  },
  {
    id: 'Q_ENGR213_P10',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Quiz 3 (Past Paper) · Concordia University',
    topic: 'Undetermined Coefficients with Repeated Auxiliary Root',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of the second-order non-homogeneous differential equation $y'' - 10y' + 25y = 30x + 3$.`,
    options: [
      t`$y(x) = (c_1 + c_2 x)e^{5x} + \dfrac{6}{5}x + \dfrac{3}{5}$`,
      t`$y(x) = c_1 e^{5x} + c_2 e^{-5x} + \dfrac{6}{5}x + \dfrac{3}{5}$`,
      t`$y(x) = (c_1 + c_2 x)e^{5x} + 30x + 3$`,
      t`$y(x) = c_1 e^{5x} + c_2 x e^{5x} + \dfrac{6}{5}x - \dfrac{3}{5}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Characteristic equation $r^2 - 10r + 25 = (r - 5)^2 = 0$ yields repeated root $r = 5$, giving $y_c = (c_1 + c_2 x)e^{5x}$. The trial particular solution for $g(x) = 30x + 3$ is linear: $y_p = Ax + B$.`,
      stepByStep: [],
      steps: [
        { title: 'Solve the homogeneous equation', math: t`r^2 - 10r + 25 = 0 \implies (r - 5)^2 = 0 \implies r = 5\text{ (multiplicity 2)} \implies y_c = (c_1 + c_2 x)e^{5x}` },
        { title: 'Form the trial particular solution', math: t`y_p = Ax + B \implies y_p' = A, \quad y_p'' = 0` },
        { title: 'Substitute into the ODE', math: t`0 - 10(A) + 25(Ax + B) = 30x + 3 \implies 25Ax + (25B - 10A) = 30x + 3` },
        { title: 'Equate coefficients', math: t`25A = 30 \implies A = \frac{6}{5}; \quad 25B - 10\left(\frac{6}{5}\right) = 3 \implies 25B - 12 = 3 \implies 25B = 15 \implies B = \frac{3}{5}` },
        { title: 'Form the general solution', math: t`y(x) = y_c + y_p = (c_1 + c_2 x)e^{5x} + \frac{6}{5}x + \frac{3}{5}` }
      ],
      answer: t`y(x) = (c_1 + c_2 x)e^{5x} + \frac{6}{5}x + \frac{3}{5}`,
      whyWrong: {
        '1': t`Uses distinct roots $e^{5x}, e^{-5x}$ instead of the repeated root factor $(c_1 + c_2 x)e^{5x}$.`,
        '2': t`Directly uses the forcing function $30x + 3$ without solving for undetermined coefficients.`,
        '3': t`Sign error: $25B - 12 = 3$ gives $25B = 15 \implies B = +3/5$, not $-3/5$.`
      },
      commonTrap: t`Forgetting the $x$ factor in the complementary solution when the auxiliary equation has a repeated root: $y_c = c_1 e^{r x} + c_2 x e^{r x}$.`,
      reference: 'Quiz 3 Solutions · Concordia University; Higher-Order Linear ODEs'
    },
    source: [{ deck: 'Quiz 3', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Method of Undetermined Coefficients' }]
  },
  {
    id: 'Q_ENGR213_P11',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Quiz 3 (Past Paper) · Concordia University',
    topic: 'Radioactive Decay Percentage Loss Model',
    difficulty: 'Midterm Level',
    question: t`A sample of $100\text{ mg}$ of a radioactive isotope decays according to $\dfrac{dA}{dt} = -k A$. After $6\text{ hours}$, exactly $3\\%$ of the isotope has decayed. How much of the isotope remains after $24\text{ hours}$?`,
    options: [
      t`$\approx 88.53\text{ mg}$`,
      t`$88.00\text{ mg}$`,
      t`$\approx 91.27\text{ mg}$`,
      t`$85.00\text{ mg}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Radioactive decay follows the exponential model $A(t) = A_0 e^{-kt}$. If $3\\%$ is lost in 6 hours, $97\\%$ remains ($A(6) = 0.97 A_0$). In 24 hours, four 6-hour cycles elapse: $A(24) = A_0(0.97)^4$.`,
      stepByStep: [],
      steps: [
        { title: 'Determine the retention ratio per 6-hour cycle', math: t`\text{Remaining fraction after 6 hours} = 1 - 0.03 = 0.97` },
        { title: 'Count the elapsed cycles', math: t`n = \frac{24\text{ hours}}{6\text{ hours}} = 4\text{ intervals}` },
        { title: 'Compute remaining mass from first principles', math: t`A(24) = 100 \times (0.97)^4 = 100 \times 0.88529... \approx 88.53\text{ mg}` }
      ],
      answer: t`\approx 88.53\text{ mg}`,
      whyWrong: {
        '1': t`Scanned Exam Trap: Assuming linear decay: $4 \times 3\\% = 12\\% \implies 100 - 12 = 88.00\text{ mg}$. Radioactive decay rate continuously decreases as remaining mass decreases.`,
        '2': t`Miscounts cycles as 3 periods: $100 \times (0.97)^3 \approx 91.27\text{ mg}$.`,
        '3': t`Arbitrary linear loss of 5 mg per cycle.`
      },
      commonTrap: t`Treating continuous exponential decay as linear simple interest or arithmetic subtraction. Always multiply retention fractions!`,
      reference: 'Quiz 3 · Concordia University; Radioactive Decay Models'
    },
    source: [{ deck: 'Quiz 3', chapter: CH2, location: 'Exponential decay models' }]
  },
  {
    id: 'Q_ENGR213_P12',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Quiz 1 (Past Paper) · Concordia University',
    topic: 'Trigonometric Integrating Factor IVP',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem $(\sin x)\\,\dfrac{dy}{dx} + (\cos x)\\,y = 2\sin x \cos x$, with $y(\pi/2) = 3$ on the interval $(0, \pi)$.`,
    options: [
      t`$y(x) = \sin x + 2\csc x$`,
      t`$y(x) = \sin x + 3\csc x$`,
      t`$y(x) = 2\sin x + \cos x$`,
      t`$y(x) = \sin^2 x + 2$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Recognize the exact product rule on the LHS: $\frac{d}{dx}[y \sin x] = y' \sin x + y \cos x$. Integrate both sides and apply the initial condition.`,
      stepByStep: [],
      steps: [
        { title: 'Collapse LHS using the product rule', math: t`\frac{d}{dx}[y \sin x] = 2\sin x \cos x = \sin(2x)` },
        { title: 'Integrate both sides', math: t`y \sin x = \int 2\sin x \cos x\\,dx = \sin^2 x + C` },
        { title: 'Apply initial condition $y(\\pi/2) = 3$', math: t`3 \sin(\pi/2) = \sin^2(\pi/2) + C \implies 3(1) = 1 + C \implies C = 2` },
        { title: 'Isolate $y(x)$', math: t`y(x) = \frac{\sin^2 x + 2}{\sin x} = \sin x + \frac{2}{\sin x} = \sin x + 2\csc x` }
      ],
      answer: t`y(x) = \sin x + 2\csc x`,
      whyWrong: {
        '1': t`Sets $C = 3$ directly from the initial value without subtracting $\sin^2(\pi/2) = 1$.`,
        '2': t`Fails to integrate $2\sin x \cos x$ properly.`,
        '3': t`Forgets to divide by the integrating factor $\sin x$.`
      },
      commonTrap: t`Forgetting that dividing by $\sin x$ applies to BOTH the particular integral $\sin^2 x$ and the constant $C$.`,
      reference: 'Quiz 1 Solutions · Concordia University; First-Order Linear Equations'
    },
    source: [{ deck: 'Quiz 1', chapter: CH2, location: 'Trigonometric integrating factor' }]
  },
  {
    id: 'Q_ENGR213_P13',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Final Examination Winter 2023 (Q1) · Concordia University',
    topic: 'Separation of Variables with Multiple Exponentials',
    difficulty: 'Exam Master',
    question: t`Find the general solution of the first-order differential equation $e^x y\\,\dfrac{dy}{dx} = e^{-2y}(1 + e^{-3x})$.`,
    options: [
      t`$(2y - 1)e^{2y} + 4e^{-x} + e^{-4x} = C$`,
      t`$(y - 1)e^{2y} + e^{-x} + \frac{1}{4}e^{-4x} = C$`,
      t`$y^2 e^{2y} + 4e^{-x} + e^{-4x} = C$`,
      t`$(2y + 1)e^{2y} - 4e^{-x} - e^{-4x} = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separate variables: $y e^{2y} dy = e^{-x}(1 + e^{-3x})dx = (e^{-x} + e^{-4x})dx$. Integrate the LHS by parts: $\int y e^{2y} dy = \frac{2y-1}{4}e^{2y}$.`,
      stepByStep: [],
      steps: [
        { title: 'Separate the variables', math: t`y e^{2y}\\,dy = e^{-x}(1 + e^{-3x})\\,dx = (e^{-x} + e^{-4x})\\,dx` },
        { title: 'Integrate the left-hand side by parts', math: t`\int y e^{2y}\\,dy = \frac{y}{2}e^{2y} - \int \frac{1}{2}e^{2y}\\,dy = \frac{y}{2}e^{2y} - \frac{1}{4}e^{2y} = \frac{2y-1}{4}e^{2y}` },
        { title: 'Integrate the right-hand side', math: t`\int (e^{-x} + e^{-4x})\\,dx = -e^{-x} - \frac{1}{4}e^{-4x} + C_1` },
        { title: 'Equate and clear denominators by multiplying by 4', math: t`(2y - 1)e^{2y} = -4e^{-x} - e^{-4x} + C \implies (2y - 1)e^{2y} + 4e^{-x} + e^{-4x} = C` }
      ],
      answer: t`(2y - 1)e^{2y} + 4e^{-x} + e^{-4x} = C`,
      whyWrong: {
        '1': t`Misses the factor of 2 in the integration by parts denominator ($1/4$).`,
        '2': t`Integrates $y e^{2y}$ as $y^2 e^{2y}/2$, which violates integration by parts.`,
        '3': t`Sign error when integrating $e^{2y}$: $\int e^{2y} dy = +\frac{1}{2}e^{2y}$, leading to $(2y-1)$, not $(2y+1)$.`
      },
      commonTrap: t`Forgetting integration by parts on $\int y e^{2y} dy$ and attempting to integrate $y$ and $e^{2y}$ independently.`,
      reference: 'Winter 2023 Final Exam Question 1 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2023', chapter: CH2, location: 'Separation of variables' }]
  },
  {
    id: 'Q_ENGR213_P15',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Final Examination Winter 2023 (Q3) · Concordia University',
    topic: 'Homogeneous Differential Equation Substitution',
    difficulty: 'Midterm Level',
    question: t`Solve the homogeneous differential equation $(y^2 + xy)dx - x^2 dy = 0$ for $x > 0$.`,
    options: [
      t`$y(x) = \dfrac{x}{C - \ln x}$`,
      t`$y(x) = \dfrac{x}{C + \ln x}$`,
      t`$y(x) = x(C - \ln x)$`,
      t`$y(x) = \dfrac{1}{C - x\ln x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The coefficients are homogeneous of degree 2. Substitute $y = ux \implies dy = u\\,dx + x\\,du$, which reduces the ODE to separable form.`,
      stepByStep: [],
      steps: [
        { title: 'Substitute $y = ux$ and $dy = u\\,dx + x\\,du$', math: t`(u^2 x^2 + u x^2)dx - x^2(u\\,dx + x\\,du) = 0` },
        { title: 'Factor out $x^2$ and simplify', math: t`x^2(u^2 + u - u)dx - x^3 du = 0 \implies u^2 dx - x\\,du = 0` },
        { title: 'Separate variables', math: t`\frac{dx}{x} = \frac{du}{u^2}` },
        { title: 'Integrate both sides', math: t`\ln x + C_1 = -\frac{1}{u} \implies \frac{1}{u} = C - \ln x \implies u = \frac{1}{C - \ln x}` },
        { title: 'Back-substitute $u = y/x$', math: t`\frac{y}{x} = \frac{1}{C - \ln x} \implies y(x) = \frac{x}{C - \ln x}` }
      ],
      answer: t`y(x) = \frac{x}{C - \ln x}`,
      whyWrong: {
        '1': t`Sign error when integrating $u^{-2}$: $\int u^{-2} du = -u^{-1}$, not $+u^{-1}$.`,
        '2': t`Inverts $u$ without dividing: writing $u = C - \ln x$ instead of $1/(C - \ln x)$.`,
        '3': t`Forgets that $x$ multiplies $u$ when back-substituting $y = ux$.`
      },
      commonTrap: t`Forgetting that $\int u^{-2} du = -1/u$, resulting in a sign error on $\ln x$.`,
      reference: 'Winter 2023 Final Exam Question 3 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2023', chapter: CH2, location: 'Homogeneous substitution' }]
  },
  {
    id: 'Q_ENGR213_P18',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Winter 2023 (Q6) · Concordia University',
    topic: 'Resonant Undetermined Coefficients with Polynomial-Exponential Forcing',
    difficulty: 'Exam Master',
    question: t`Find the particular solution $y_p(x)$ for the differential equation $y'' - 4y' + 4y = (x - 2)e^{2x}$.`,
    options: [
      t`$y_p(x) = \left(\dfrac{1}{6}x^3 - x^2\right)e^{2x}$`,
      t`$y_p(x) = (Ax + B)e^{2x}$`,
      t`$y_p(x) = \left(\dfrac{1}{2}x^3 - 2x^2\right)e^{2x}$`,
      t`$y_p(x) = \left(\dfrac{1}{6}x^2 - x\right)e^{2x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Auxiliary equation $r^2 - 4r + 4 = (r - 2)^2 = 0$ gives $y_c = (c_1 + c_2 x)e^{2x}$. Because $e^{2x}$ and $x e^{2x}$ are in $y_c$, multiply the standard trial form $(Ax + B)e^{2x}$ by $x^2$: $y_p = (Ax^3 + Bx^2)e^{2x}$.`,
      stepByStep: [],
      steps: [
        { title: 'Complementary roots', math: t`r^2 - 4r + 4 = 0 \implies r = 2\text{ with multiplicity 2} \implies y_c = (c_1 + c_2 x)e^{2x}` },
        { title: 'Determine the form of $y_p$', math: t`\text{Standard guess: } (Ax + B)e^{2x}. \text{ Duplicates } e^{2x} \text{ and } x e^{2x} \implies \text{Multiply by } x^2: \\; y_p = (Ax^3 + Bx^2)e^{2x}` },
        { title: 'Use the shift rule / operator $(D - 2)^2$', math: t`(D - 2)^2[(Ax^3 + Bx^2)e^{2x}] = e^{2x} D^2(Ax^3 + Bx^2) = e^{2x}(6Ax + 2B)` },
        { title: 'Equate to the RHS $(x - 2)e^{2x}$', math: t`6Ax + 2B = x - 2 \implies 6A = 1 \implies A = \frac{1}{6}; \quad 2B = -2 \implies B = -1` },
        { title: 'Assemble $y_p(x)$', math: t`y_p(x) = \left(\frac{1}{6}x^3 - x^2\right)e^{2x}` }
      ],
      answer: t`y_p(x) = \left(\frac{1}{6}x^3 - x^2\right)e^{2x}`,
      whyWrong: {
        '1': t`Standard guess $(Ax+B)e^{2x}$ is swallowed by the complementary solution because $r = 2$ is a double root!`,
        '2': t`Arithmetic error during differentiation of $x^3$: $D^2(x^3) = 6x$, not $2x$.`,
        '3': t`Multiplies by $x$ instead of $x^2$, which still collides with $x e^{2x}$.`
      },
      commonTrap: t`Failing to multiply by $x^2$ when the forcing frequency matches a repeated root of multiplicity 2.`,
      reference: 'Winter 2023 Final Exam Question 6 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2023', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Resonant undetermined coefficients' }]
  },
  {
    id: 'Q_ENGR213_P19',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Winter 2023 (Q7) · Concordia University',
    topic: 'Cauchy-Euler Inhomogeneous Equation IVP',
    difficulty: 'Exam Master',
    question: t`Solve the Cauchy-Euler initial value problem $x^2 y'' - 4x y' + 6y = 3x^{-3}$ with $y(1) = 0$ and $y'(1) = 1$ for $x > 0$.`,
    options: [
      t`$y(x) = -\dfrac{8}{5}x^2 + \dfrac{3}{2}x^3 + \dfrac{1}{10x^3}$`,
      t`$y(x) = \dfrac{8}{5}x^2 - \dfrac{3}{2}x^3 + \dfrac{1}{10x^3}$`,
      t`$y(x) = -\dfrac{8}{5}x^2 + \dfrac{3}{2}x^3 + \dfrac{3}{10x^3}$`,
      t`$y(x) = -\dfrac{3}{2}x^2 + \dfrac{8}{5}x^3 + \dfrac{1}{10x^3}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For $x^2 y'' - 4x y' + 6y = 0$, the auxiliary equation $m(m-1) - 4m + 6 = m^2 - 5m + 6 = (m-2)(m-3) = 0$ yields $y_c = c_1 x^2 + c_2 x^3$. Find $y_p$ by substituting $y_p = A x^{-3}$, then apply initial conditions.`,
      stepByStep: [],
      steps: [
        { title: 'Auxiliary equation for Cauchy-Euler', math: t`m(m-1) - 4m + 6 = m^2 - 5m + 6 = 0 \implies m = 2, 3 \implies y_c = c_1 x^2 + c_2 x^3` },
        { title: 'Find particular solution $y_p = A x^{-3}$', math: t`y_p' = -3A x^{-4}, \quad y_p'' = 12A x^{-5}` },
        { title: 'Substitute into ODE', math: t`x^2(12A x^{-5}) - 4x(-3A x^{-4}) + 6(A x^{-3}) = (12 + 12 + 6)A x^{-3} = 30A x^{-3}` },
        { title: 'Solve for A', math: t`30A x^{-3} = 3x^{-3} \implies A = \frac{3}{30} = \frac{1}{10} \implies y_p = \frac{1}{10}x^{-3}` },
        { title: 'General solution', math: t`y(x) = c_1 x^2 + c_2 x^3 + \frac{1}{10}x^{-3}` },
        { title: 'Apply $y(1) = 0$', math: t`c_1 + c_2 + \frac{1}{10} = 0 \implies c_1 + c_2 = -\frac{1}{10}` },
        { title: 'Differentiate and apply $y\'(1) = 1$', math: t`y'(x) = 2c_1 x + 3c_2 x^2 - \frac{3}{10}x^{-4} \implies 2c_1 + 3c_2 - \frac{3}{10} = 1 \implies 2c_1 + 3c_2 = \frac{13}{10}` },
        { title: 'Solve linear system for $c_1, c_2$', math: t`c_2 = \frac{13}{10} - 2\left(-\frac{1}{10}\right) = \frac{15}{10} = \frac{3}{2}; \quad c_1 = -\frac{1}{10} - \frac{15}{10} = -\frac{16}{10} = -\frac{8}{5}` }
      ],
      answer: t`y(x) = -\frac{8}{5}x^2 + \frac{3}{2}x^3 + \frac{1}{10x^3}`,
      whyWrong: {
        '1': t`Sign flip on both constants $c_1$ and $c_2$.`,
        '2': t`Fails to divide 3 by 30, keeping $A = 3/10$.`,
        '3': t`Swaps the coefficients between $x^2$ and $x^3$.`
      },
      commonTrap: t`Forgetting that in Cauchy-Euler, $x^2 y''$ contributes $m(m-1) = m^2 - m$, NOT just $m^2$. Missing $-m$ corrupts the auxiliary equation to $m^2 - 4m + 6 = 0$!`,
      reference: 'Winter 2023 Final Exam Question 7 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2023', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Cauchy-Euler inhomogeneous IVP' }]
  },
  {
    id: 'Q_ENGR213_P20',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Midterm 2 & Final Review · Concordia University',
    topic: 'Variation of Parameters with Tangent Forcing',
    difficulty: 'Exam Master',
    question: t`Find the particular solution $y_p(x)$ for $y'' + 9y = \tan(3x)$ using the method of variation of parameters.`,
    options: [
      t`$y_p(x) = -\dfrac{1}{9}\cos(3x)\ln|\sec(3x) + \tan(3x)|$`,
      t`$y_p(x) = \dfrac{1}{9}\cos(3x)\ln|\sec(3x)|$`,
      t`$y_p(x) = -\dfrac{1}{3}\sin(3x)\ln|\cos(3x)|$`,
      t`$y_p(x) = -\dfrac{1}{9}\sin(3x)\ln|\sec(3x) + \tan(3x)|$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`$y_1 = \cos(3x), y_2 = \sin(3x)$, Wronskian $W = 3$. $u_1' = -\frac{y_2 f}{W} = -\frac{1}{3}\frac{\sin^2(3x)}{\cos(3x)}$ and $u_2' = \frac{y_1 f}{W} = \frac{1}{3}\sin(3x)$.`,
      stepByStep: [],
      steps: [
        { title: 'Complementary basis and Wronskian', math: t`y_1 = \cos(3x), \quad y_2 = \sin(3x), \quad W = \begin{vmatrix} \cos(3x) & \sin(3x) \\\\ -3\sin(3x) & 3\cos(3x) \end{vmatrix} = 3` },
        { title: 'Calculate $u_1(x)$', math: t`u_1' = -\frac{\sin(3x)\tan(3x)}{3} = -\frac{1}{3}\left(\frac{\sin^2(3x)}{\cos(3x)}\right) = -\frac{1}{3}(\sec(3x) - \cos(3x))` },
        { title: 'Integrate $u_1$', math: t`u_1 = -\frac{1}{9}\ln|\sec(3x) + \tan(3x)| + \frac{1}{9}\sin(3x)` },
        { title: 'Calculate $u_2(x)$', math: t`u_2' = \frac{\cos(3x)\tan(3x)}{3} = \frac{1}{3}\sin(3x) \implies u_2 = -\frac{1}{9}\cos(3x)` },
        { title: 'Combine $y_p = u_1 y_1 + u_2 y_2$', math: t`y_p = \left(-\frac{1}{9}\ln|\sec(3x)+\tan(3x)| + \frac{1}{9}\sin(3x)\right)\cos(3x) - \frac{1}{9}\cos(3x)\sin(3x) = -\frac{1}{9}\cos(3x)\ln|\sec(3x)+\tan(3x)|` }
      ],
      answer: t`y_p(x) = -\frac{1}{9}\cos(3x)\ln|\sec(3x) + \tan(3x)|`,
      whyWrong: {
        '1': t`Misses the tangent term in the secant natural logarithm integral.`,
        '2': t`Multiplies by $\sin(3x)$ and omits the Wronskian division by 3.`,
        '3': t`Associates the logarithmic term with $\sin(3x)$ instead of $\cos(3x)$.`
      },
      commonTrap: t`Forgetting that the terms $\frac{1}{9}\sin(3x)\cos(3x)$ and $-\frac{1}{9}\cos(3x)\sin(3x)$ cancel completely when combining $u_1 y_1 + u_2 y_2$!`,
      reference: 'Variation of Parameters · Concordia University Exam Review'
    },
    source: [{ deck: 'Exam Review', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Variation of parameters' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q1',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Test 1 Fall 2018 (Q1) · Concordia University',
    topic: 'Separable IVP with Rational Expression',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem $\dfrac{dy}{dx} = \dfrac{3x^2 y}{1 + x^3}$ with $y(1) = 2$ for $x > -1$.`,
    options: [
      t`$y(x) = 1 + x^3$`,
      t`$y(x) = 2(1 + x^3)$`,
      t`$y(x) = \frac{1}{2}(1 + x^3)^2$`,
      t`$y(x) = \sqrt{1 + x^3} + 1$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separable ODE: divide by $y$ and integrate both sides using the logarithmic identity $\int \frac{3x^2}{1+x^3}dx = \ln|1+x^3|$.`,
      stepByStep: [],
      steps: [
        { title: "Separate variables", math: t`\frac{dy}{y} = \frac{3x^2}{1 + x^3}\\,dx` },
        { title: "Integrate both sides", math: t`\ln|y| = \ln|1 + x^3| + \ln C \implies y = C(1 + x^3)` },
        { title: "Apply initial condition $y(1) = 2$", math: t`2 = C(1 + 1^3) = 2C \implies C = 1` },
        { title: "Final explicit solution", math: t`y(x) = 1 + x^3` }
      ],
      answer: t`y(x) = 1 + x^3`,
      whyWrong: {
        '1': t`Forgot that $(1 + 1^3) = 2$, mistakenly writing $C = 2$ instead of $C = 1$.`,
        '2': t`Squared the polynomial bracket instead of keeping the logarithmic exponent.`,
        '3': t`Added an external constant instead of multiplying by $C$.`
      },
      commonTrap: t`Forgetting that the constant of integration in $\ln|y| = \ln|1+x^3| + c$ multiplies the argument when exponentiating: $y = C(1+x^3)$, NOT $1 + x^3 + C$.`,
      reference: 'Midterm Test 1 Fall 2018 Problem 1 · Concordia University'
    },
    source: [{ deck: 'Midterm 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Separable IVP' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q2',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Test 1 Fall 2018 (Q2) · Concordia University',
    topic: 'Bernoulli Differential Equation',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of the first-order differential equation $\dfrac{dy}{dx} + 2xy = -xy^4$.`,
    options: [
      t`$y^{-3} = -\frac{1}{2} + C e^{3x^2}$`,
      t`$y^{-3} = \frac{1}{2} + C e^{-3x^2}$`,
      t`$y^3 = -\frac{1}{2} + C e^{3x^2}$`,
      t`$y^{-3} = -x + C e^{x^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Bernoulli equation with $n = 4$. Linearize with the substitution $u = y^{1-n} = y^{-3}$, yielding a linear ODE in $u(x)$.`,
      stepByStep: [],
      steps: [
        { title: "Divide through by $y^4$", math: t`y^{-4}\frac{dy}{dx} + 2x y^{-3} = -x` },
        { title: "Substitute $u = y^{-3}$", math: t`\frac{du}{dx} = -3y^{-4}\frac{dy}{dx} \implies -\frac{1}{3}\frac{du}{dx} + 2x u = -x` },
        { title: "Convert to standard linear form", math: t`\frac{du}{dx} - 6x u = 3x` },
        { title: "Integrating factor", math: t`\mu(x) = e^{\int -6x dx} = e^{-3x^2}` },
        { title: "Integrate linear ODE", math: t`\frac{d}{dx}[e^{-3x^2} u] = 3x e^{-3x^2} \implies e^{-3x^2} u = -\frac{1}{2}e^{-3x^2} + C` },
        { title: "Back-substitute $u = y^{-3}$", math: t`y^{-3} = -\frac{1}{2} + C e^{3x^2}` }
      ],
      answer: t`y^{-3} = -\frac{1}{2} + C e^{3x^2}`,
      whyWrong: {
        '1': t`Sign flip on the exponent when dividing by the integrating factor.`,
        '2': t`Left $y^3$ instead of $y^{1-4} = y^{-3}$.`,
        '3': t`Failed to evaluate $\int 3x e^{-3x^2}dx$ via $u$-substitution.`
      },
      commonTrap: t`Forgetting to multiply the entire ODE by $-3$ after substituting $u' = -3y^{-4}y'$, which flips the sign of $P(x)$ to $-6x$.`,
      reference: 'Midterm Test 1 Fall 2018 Problem 2 · Concordia University'
    },
    source: [{ deck: 'Midterm 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Bernoulli ODE' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q3',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Test 1 Fall 2018 (Q3) · Concordia University',
    topic: 'Exact First-Order ODE',
    difficulty: 'Midterm Level',
    question: t`Solve the differential equation $(4x^3 + 3x^2 + 3y)\\,dx + (3x + 2y + 1)\\,dy = 0$.`,
    options: [
      t`$x^4 + x^3 + 3xy + y^2 + y = C$`,
      t`$4x^4 + 3x^3 + 3xy + 2y^2 + y = C$`,
      t`$x^4 + x^3 + 6xy + y^2 + y = C$`,
      t`$x^4 + x^3 + 3xy + y^2 = C$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Verify exactness: $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} = 3$. Then reconstruct the potential function $F(x,y) = C$ by partial integration.`,
      stepByStep: [],
      steps: [
        { title: "Check exactness condition", math: t`\frac{\partial M}{\partial y} = 3, \quad \frac{\partial N}{\partial x} = 3 \implies \text{Exact!}` },
        { title: "Integrate $M(x,y)$ with respect to $x$", math: t`F(x,y) = \int (4x^3 + 3x^2 + 3y)dx = x^4 + x^3 + 3xy + g(y)` },
        { title: "Differentiate with respect to $y$ and equate to $N$", math: t`\frac{\partial F}{\partial y} = 3x + g'(y) = 3x + 2y + 1 \implies g'(y) = 2y + 1` },
        { title: "Integrate $g'(y)$", math: t`g(y) = y^2 + y` },
        { title: "Implicit general solution", math: t`x^4 + x^3 + 3xy + y^2 + y = C` }
      ],
      answer: t`x^4 + x^3 + 3xy + y^2 + y = C`,
      whyWrong: {
        '1': t`Multiplied coefficients by 4 and 3 instead of integrating power-by-power.`,
        '2': t`Double counted the shared term $3xy$ from both $M$ and $N$.`,
        '3': t`Omitted the linear term $y$ resulting from integrating $1\\,dy$.`
      },
      commonTrap: t`Integrating $M$ with respect to $x$ and $N$ with respect to $y$ independently and adding them together, which erroneously doubles the shared $3xy$ term to $6xy$.`,
      reference: 'Midterm Test 1 Fall 2018 Problem 3 · Concordia University'
    },
    source: [{ deck: 'Midterm 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Exact differential equation' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q4',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Test 1 Fall 2018 (Q4) · Concordia University',
    topic: 'Homogeneous Substitution IVP',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem $(x^3 + y^3)\\,dx - 3xy^2\\,dy = 0$ with $y(1) = 1$.`,
    options: [
      t`$x^3 - 2y^3 = -x$`,
      t`$x^3 + 2y^3 = 3x$`,
      t`$x^3 - y^3 = 0$`,
      t`$2x^3 - y^3 = x$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Both $M(x,y)$ and $N(x,y)$ are homogeneous functions of degree 3. Use substitution $y = vx$ with $dy = v dx + x dv$.`,
      stepByStep: [],
      steps: [
        { title: "Substitute $y = vx$ and $dy = v dx + x dv$", math: t`(x^3 + v^3 x^3)dx - 3x(v^2 x^2)(v dx + x dv) = 0` },
        { title: "Divide by $x^3$ and group terms", math: t`(1 + v^3 - 3v^3)dx - 3v^2 x dv = 0 \implies (1 - 2v^3)dx = 3v^2 x dv` },
        { title: "Separate variables and integrate", math: t`\frac{dx}{x} = \frac{3v^2}{1 - 2v^3}dv \implies \ln|x| = -\frac{1}{2}\ln|1 - 2v^3| + \ln C_1` },
        { title: "Clear logarithm and back-substitute $v = y/x$", math: t`x^2(1 - 2v^3) = C \implies x^2\left(1 - \frac{2y^3}{x^3}\right) = C \implies x^3 - 2y^3 = Cx` },
        { title: "Apply initial condition $y(1) = 1$", math: t`1^3 - 2(1^3) = C(1) \implies C = -1 \implies x^3 - 2y^3 = -x` }
      ],
      answer: t`x^3 - 2y^3 = -x`,
      whyWrong: {
        '1': t`Sign flip on the constant evaluation, writing $C = +1$ instead of $C = -1$.`,
        '2': t`Omitted the factor of 2 in $(1 - 2v^3)$.`,
        '3': t`Swapped the powers and coefficients of $x$ and $y$.`
      },
      commonTrap: t`Forgetting that the substitution $dy = v dx + x dv$ contributes a term $-3v^3 dx$ that combines with $+v^3 dx$ to yield $-2v^3 dx$.`,
      reference: 'Midterm Test 1 Fall 2018 Problem 4 · Concordia University'
    },
    source: [{ deck: 'Midterm 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Homogeneous substitution' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q5',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Test 1 Fall 2018 (Q5) · Concordia University',
    topic: 'Exponential Growth Kinetics',
    difficulty: 'Midterm Level',
    question: t`In a culture of bacteria, the rate of increase is proportional to the number present. If the population triples in 4 hours, what multiple of the initial population is expected after 12 hours?`,
    options: [
      t`$27$ times the original population`,
      t`$9$ times the original population`,
      t`$12$ times the original population`,
      t`$81$ times the original population`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Exponential growth: $x(t) = x_0 e^{kt}$. If $x(4) = 3x_0$, then $e^{4k} = 3$. At $t = 12$, $x(12) = x_0 (e^{4k})^3 = x_0 (3)^3 = 27x_0$.`,
      stepByStep: [],
      steps: [
        { title: "Formulate differential equation", math: t`\frac{dx}{dt} = kx \implies x(t) = x_0 e^{kt}` },
        { title: "Use tripling condition at $t = 4$", math: t`x(4) = x_0 e^{4k} = 3x_0 \implies e^{4k} = 3` },
        { title: "Evaluate at $t = 12$ hours", math: t`x(12) = x_0 e^{12k} = x_0 (e^{4k})^3 = x_0 (3)^3 = 27x_0` }
      ],
      answer: t`27 \text{ times the original population}`,
      whyWrong: {
        '1': t`Calculated $3 \times 3 = 9$, which corresponds to $t = 8$ hours (two tripling periods), not 12.`,
        '2': t`Assumed linear growth: added 3 per period instead of compounding multiplicatively.`,
        '3': t`Calculated $3^4 = 81$, which corresponds to $t = 16$ hours.`
      },
      commonTrap: t`Trying to solve for numerical decimals of $k = \frac{\ln 3}{4}$ and losing precision instead of noticing that $12 = 3 \times 4$, so $e^{12k} = (e^{4k})^3 = 3^3 = 27$.`,
      reference: 'Midterm Test 1 Fall 2018 Problem 5 · Concordia University'
    },
    source: [{ deck: 'Midterm 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Exponential kinetics' }]
  },
  {
    id: 'Q_ENGR213_M2016A_Q1',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Exam II Winter 2016 Version A (Q1) · Concordia University',
    topic: 'Wronskian & Linear Independence',
    difficulty: 'Midterm Level',
    question: t`Determine whether the systems $S_1 = \\{2, x^{-2}, x^{-2}\ln x\\}$ and $S_2 = \\{\sin x, \cos(2x), 1 - \sin x - 2\sin^2 x\\}$ are linearly independent on $(0, \infty)$.`,
    options: [
      t`$S_1$ is linearly independent ($W = 4x^{-7} > 0$); $S_2$ is linearly dependent ($f_3 = f_2 - f_1$).`,
      t`Both $S_1$ and $S_2$ are linearly independent.`,
      t`Both $S_1$ and $S_2$ are linearly dependent.`,
      t`$S_1$ is linearly dependent ($W = 0$); $S_2$ is linearly independent.`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For $S_1$, the Wronskian $W(2, x^{-2}, x^{-2}\ln x) = 4x^{-7} \neq 0$, proving independence. For $S_2$, the double-angle identity $1 - 2\sin^2 x = \cos(2x)$ reveals that $f_3 = f_2 - f_1$, proving dependence.`,
      stepByStep: [],
      steps: [
        { title: "Compute Wronskian of $S_1$", math: t`W = \begin{vmatrix} 2 & x^{-2} & x^{-2}\ln x \\\\ 0 & -2x^{-3} & x^{-3}(1 - 2\ln x) \\\\ 0 & 6x^{-4} & -x^{-4}(5 - 6\ln x) \end{vmatrix} = 2\left[2x^{-7}(5-6\ln x) - 6x^{-7}(1-2\ln x)\right] = 4x^{-7}` },
        { title: "Analyze $S_1$", note: t`Since $W = 4x^{-7} > 0$ for all $x > 0$, the set $S_1$ is linearly independent.` },
        { title: "Analyze $S_2$ using trigonometric identity", math: t`f_3(x) = 1 - \sin x - 2\sin^2 x = (1 - 2\sin^2 x) - \sin x = \cos(2x) - \sin x = f_2(x) - f_1(x)` },
        { title: "Conclusion for $S_2$", note: t`Because $f_1(x) - f_2(x) + f_3(x) = 0$, $S_2$ is linearly dependent.` }
      ],
      answer: t`S_1 \text{ is independent, } S_2 \text{ is dependent}`,
      whyWrong: {
        '1': t`Missed the trigonometric identity $1 - 2\sin^2 x = \cos(2x)$.`,
        '2': t`Derivative error in evaluating the $3 \times 3$ Wronskian of $S_1$.`,
        '3': t`Swapped the conclusions between $S_1$ and $S_2$.`
      },
      commonTrap: t`Computing the Wronskian of $S_2$ with messy trigonometric derivatives instead of checking elementary identities first! Whenever you see $\sin^2 x$ alongside $\cos(2x)$, use $1 - 2\sin^2 x = \cos(2x)$.`,
      reference: 'Midterm Exam II Winter 2016 Version A Problem 1 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Linear independence' }]
  },
  {
    id: 'Q_ENGR213_M2016A_Q2',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Exam II Winter 2016 Version A (Q2) · Concordia University',
    topic: 'Higher-Order Repeated Real Roots',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of the fourth-order differential equation $16y^{(4)} - 72y'' + 81y = 0$.`,
    options: [
      t`$y(x) = (C_1 + C_2 x)e^{\frac{3}{2}x} + (C_3 + C_4 x)e^{-\frac{3}{2}x}$`,
      t`$y(x) = C_1 e^{\frac{3}{2}x} + C_2 e^{-\frac{3}{2}x} + C_3 \cos(\frac{3}{2}x) + C_4 \sin(\frac{3}{2}x)$`,
      t`$y(x) = (C_1 + C_2 x)e^{3x} + (C_3 + C_4 x)e^{-3x}$`,
      t`$y(x) = C_1 e^{\frac{9}{4}x} + C_2 e^{-\frac{9}{4}x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The characteristic equation $16m^4 - 72m^2 + 81 = (4m^2 - 9)^2 = (2m-3)^2(2m+3)^2 = 0$ yields two pairs of repeated real roots: $m = \pm 3/2$ each with multiplicity 2.`,
      stepByStep: [],
      steps: [
        { title: "Auxiliary equation", math: t`16m^4 - 72m^2 + 81 = 0` },
        { title: "Factor as a perfect square quadratic in $m^2$", math: t`(4m^2 - 9)^2 = 0 \implies [(2m - 3)(2m + 3)]^2 = (2m-3)^2(2m+3)^2 = 0` },
        { title: "Identify roots and multiplicities", math: t`m_1 = m_2 = \frac{3}{2} \quad (\text{multiplicity 2}), \quad m_3 = m_4 = -\frac{3}{2} \quad (\text{multiplicity 2})` },
        { title: "Construct general solution with $x$-factors", math: t`y(x) = (C_1 + C_2 x)e^{\frac{3}{2}x} + (C_3 + C_4 x)e^{-\frac{3}{2}x}` }
      ],
      answer: t`y(x) = (C_1 + C_2 x)e^{\frac{3}{2}x} + (C_3 + C_4 x)e^{-\frac{3}{2}x}`,
      whyWrong: {
        '1': t`Treated $(4m^2 - 9)$ as $(4m^2 + 9)$, erroneously generating imaginary trigonometric roots.`,
        '2': t`Forgot to divide 3 by 2 when solving $2m \pm 3 = 0$.`,
        '3': t`Treated the roots as order 2 instead of 4, dropping the multiplicity $x$-factors.`
      },
      commonTrap: t`Forgetting that roots of multiplicity 2 require multiplying the second solution by $x$: $y_2 = x e^{mx}$. Without the $x$-factor, the four functions are not linearly independent!`,
      reference: 'Midterm Exam II Winter 2016 Version A Problem 2 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Repeated roots' }]
  },
  {
    id: 'Q_ENGR213_M2016A_Q3',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Exam II Winter 2016 Version A (Q3) · Concordia University',
    topic: 'Resonant Undetermined Coefficients IVP',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem $y'' - 4y' = 2xe^{4x}$ with $y(0) = -\frac{1}{4}$ and $y'(0) = \frac{1}{8}$.`,
    options: [
      t`$y(x) = e^{4x}\left(\frac{1}{4}x^2 - \frac{1}{8}x + \frac{1}{16}\right) - \frac{5}{16}$`,
      t`$y(x) = e^{4x}\left(\frac{1}{4}x^2 - \frac{1}{8}x\right) - \frac{1}{4}$`,
      t`$y(x) = e^{4x}\left(\frac{1}{2}x^2 - \frac{1}{4}x + \frac{1}{8}\right) - \frac{3}{8}$`,
      t`$y(x) = \left(\frac{1}{4}x - \frac{1}{8}\right)e^{4x} - \frac{1}{8}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Because $m = 4$ is a root of the auxiliary equation $m(m-4) = 0$, the particular solution candidate must be multiplied by $x$: $y_p(x) = x(Ax + B)e^{4x} = (Ax^2 + Bx)e^{4x}$.`,
      stepByStep: [],
      steps: [
        { title: "Complementary solution", math: t`m^2 - 4m = m(m-4) = 0 \implies y_c(x) = C_1 + C_2 e^{4x}` },
        { title: "Particular solution candidate (multiplied by $x$ due to resonance)", math: t`y_p(x) = (Ax^2 + Bx)e^{4x}` },
        { title: "Differentiate and substitute into $y'' - 4y'$", math: t`8Ax + 2A + 4B \equiv 2x \implies 8A = 2 \implies A = \frac{1}{4}, \quad 2A + 4B = 0 \implies B = -\frac{1}{8}` },
        { title: "General solution", math: t`y(x) = C_1 + C_2 e^{4x} + e^{4x}\left(\frac{1}{4}x^2 - \frac{1}{8}x\right)` },
        { title: "Apply $y(0) = -1/4$ and $y'(0) = 1/8$", math: t`C_1 + C_2 = -\frac{1}{4}, \quad 4C_2 - \frac{1}{8} = \frac{1}{8} \implies C_2 = \frac{1}{16}, \quad C_1 = -\frac{5}{16}` }
      ],
      answer: t`y(x) = e^{4x}\left(\frac{1}{4}x^2 - \frac{1}{8}x + \frac{1}{16}\right) - \frac{5}{16}`,
      whyWrong: {
        '1': t`Set $C_2 = 0$ without using the initial derivative condition $y'(0) = 1/8$.`,
        '2': t`Arithmetic mistake evaluating $8A = 2$, obtaining $A = 1/2$.`,
        '3': t`Forgot the resonance factor $x$, using $y_p = (Ax + B)e^{4x}$.`
      },
      commonTrap: t`Forgetting to differentiate the particular solution $y_p(x)$ when applying the initial condition $y'(0) = 1/8$. Since $y_p'(0) = B = -1/8$, $y'(0) = 4C_2 - 1/8 = 1/8 \implies C_2 = 1/16$.`,
      reference: 'Midterm Exam II Winter 2016 Version A Problem 3 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Undetermined coefficients' }]
  },
  {
    id: 'Q_ENGR213_M2016A_Q4',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Exam II Winter 2016 Version A (Q4) · Concordia University',
    topic: 'Variation of Parameters BVP',
    difficulty: 'Midterm Level',
    question: t`Solve the boundary value problem $y'' + y = 2\sec^3 x$ with $y(0) = -2$ and $y(\frac{\pi}{4}) = 0$.`,
    options: [
      t`$y(x) = \sin x - \cos x + 2\sin x \tan x - \sec x$`,
      t`$y(x) = 2\sin x - \cos x + \sec x$`,
      t`$y(x) = -\cos x + 2\tan x$`,
      t`$y(x) = \sin x - 2\cos x + \sec x \tan x$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Variation of parameters with $y_1 = \cos x, y_2 = \sin x, W = 1$. The integrals yield $u_1(x) = -\sec^2 x$ and $u_2(x) = 2\tan x$. Then apply the two boundary conditions.`,
      stepByStep: [],
      steps: [
        { title: "Complementary basis and Wronskian", math: t`y_1 = \cos x, \quad y_2 = \sin x, \quad W = \cos^2 x + \sin^2 x = 1` },
        { title: "Compute $u_1(x)$", math: t`u_1' = -\frac{y_2 f}{W} = -2\sin x \sec^3 x = -2\frac{\sin x}{\cos^3 x} \implies u_1(x) = -\frac{1}{\cos^2 x} = -\sec^2 x` },
        { title: "Compute $u_2(x)$", math: t`u_2' = \frac{y_1 f}{W} = 2\cos x \sec^3 x = 2\sec^2 x \implies u_2(x) = 2\tan x` },
        { title: "Form particular solution", math: t`y_p = u_1 y_1 + u_2 y_2 = -\sec x + 2\sin x \tan x` },
        { title: "Apply boundary conditions", math: t`y(0) = C_1 - 1 = -2 \implies C_1 = -1; \quad y(\pi/4) = \frac{\sqrt{2}}{2}(C_1 + C_2) = 0 \implies C_2 = 1` },
        { title: "Final solution", math: t`y(x) = \sin x - \cos x + 2\sin x \tan x - \sec x` }
      ],
      answer: t`y(x) = \sin x - \cos x + 2\sin x \tan x - \sec x`,
      whyWrong: {
        '1': t`Sign flip on the boundary condition evaluation at 0.`,
        '2': t`Omitted the $u_1 y_1 = -\sec x$ term in $y_p$.`,
        '3': t`Calculated $\int \sec^2 x dx = \sec x \tan x$ instead of $\tan x$.`
      },
      commonTrap: t`Forgetting that $\cos x(-\sec^2 x) = -\sec x$. It is essential to simplify $u_1 y_1 + u_2 y_2$ before plugging in boundary points.`,
      reference: 'Midterm Exam II Winter 2016 Version A Problem 4 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Variation of parameters' }]
  },
  {
    id: 'Q_ENGR213_M2016A_Q5',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Exam II Winter 2016 Version A (Q5) · Concordia University',
    topic: 'Cauchy-Euler Complex Conjugate Roots',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of the Cauchy-Euler differential equation $x^2 y'' - 3x y' + 13y = 0$ for $x > 0$.`,
    options: [
      t`$y(x) = x^2 \left( C_1 \cos(3\ln x) + C_2 \sin(3\ln x) \right)$`,
      t`$y(x) = x^3 \left( C_1 \cos(2\ln x) + C_2 \sin(2\ln x) \right)$`,
      t`$y(x) = e^{2x} \left( C_1 \cos(3x) + C_2 \sin(3x) \right)$`,
      t`$y(x) = C_1 x^2 + C_2 x^3$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Cauchy-Euler equation: substitute $y = x^m$. The auxiliary equation is $m(m-1) - 3m + 13 = m^2 - 4m + 13 = 0$, giving complex roots $m = 2 \pm 3i$.`,
      stepByStep: [],
      steps: [
        { title: "Formulate Cauchy-Euler auxiliary equation", math: t`m(m-1) - 3m + 13 = m^2 - 4m + 13 = 0` },
        { title: "Complete the square to find roots", math: t`(m - 2)^2 + 9 = 0 \implies m = 2 \pm 3i` },
        { title: "Construct general solution with $\\ln x$", math: t`y(x) = x^2 \left[ C_1 \cos(3\ln x) + C_2 \sin(3\ln x) \right]` }
      ],
      answer: t`y(x) = x^2 \left( C_1 \cos(3\ln x) + C_2 \sin(3\ln x) \right)`,
      whyWrong: {
        '1': t`Swapped the real power $\alpha = 2$ and imaginary frequency $\beta = 3$.`,
        '2': t`Wrote standard exponential $e^{2x}\cos(3x)$, forgetting that Cauchy-Euler equations use $x^\alpha$ and $\ln x$.`,
        '3': t`Assumed real roots $m = 2, 3$, ignoring the $+13$ constant.`
      },
      commonTrap: t`Forgetting that the auxiliary equation for Cauchy-Euler is $m(m-1) + a m + b = 0$, NOT $m^2 + a m + b = 0$. The $m(m-1)$ subtracts $m$, changing $-3m$ to $-4m$!`,
      reference: 'Midterm Exam II Winter 2016 Version A Problem 5 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Cauchy-Euler' }]
  },
  {
    id: 'Q_ENGR213_M2016B_Q2',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Exam II Winter 2016 Version B (Q2) · Concordia University',
    topic: 'Fourth-Order ODE Real and Complex Roots',
    difficulty: 'Midterm Level',
    question: t`Find the general solution of $y^{(4)} - 16y = 0$.`,
    options: [
      t`$y(x) = C_1 e^{2x} + C_2 e^{-2x} + C_3 \cos(2x) + C_4 \sin(2x)$`,
      t`$y(x) = (C_1 + C_2 x)e^{2x} + (C_3 + C_4 x)e^{-2x}$`,
      t`$y(x) = C_1 \cos(2x) + C_2 \sin(2x) + C_3 \cosh(2x) + C_4 \sinh(2x)$`,
      t`$y(x) = C_1 e^{4x} + C_2 e^{-4x} + C_3 \cos(4x) + C_4 \sin(4x)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Factor $m^4 - 16 = (m^2 - 4)(m^2 + 4) = (m - 2)(m + 2)(m - 2i)(m + 2i) = 0$. The four roots produce two real exponential modes and two harmonic trigonometric modes.`,
      stepByStep: [],
      steps: [
        { title: "Auxiliary equation", math: t`m^4 - 16 = 0` },
        { title: "Difference of squares factorization", math: t`(m^2 - 4)(m^2 + 4) = 0 \implies (m - 2)(m + 2)(m^2 + 4) = 0` },
        { title: "Roots", math: t`m_1 = 2, \quad m_2 = -2, \quad m_3 = 2i, \quad m_4 = -2i` },
        { title: "General solution", math: t`y(x) = C_1 e^{2x} + C_2 e^{-2x} + C_3 \cos(2x) + C_4 \sin(2x)` }
      ],
      answer: t`y(x) = C_1 e^{2x} + C_2 e^{-2x} + C_3 \cos(2x) + C_4 \sin(2x)`,
      whyWrong: {
        '1': t`Treated roots as repeated real roots instead of separate real and imaginary pairs.`,
        '2': t`Redundant basis mixing trigonometric and hyperbolic forms.`,
        '3': t`Took $m = \pm 4$ instead of fourth root $m = 16^{1/4} = 2$.`
      },
      commonTrap: t`Thinking $m^4 = 16$ only has two real solutions $m = \pm 2$. A fourth-order ODE MUST have 4 linearly independent basis solutions!`,
      reference: 'Midterm Exam II Winter 2016 Version B Problem 2 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Characteristic roots' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q1',
    courseId: 'ENGR213',
    chapter: 'past',
    pastPaper: 'Midterm Examination 1 Fall 2018 (Q1) · Concordia University',
    topic: 'Separable IVP with Logarithm',
    difficulty: 'Midterm Level',
    question: t`Solve the initial value problem for the first-order differential equation $\frac{dy}{dx} = \frac{3x^2 y}{1 + x^3}$ with $y(1) = 2$ on $x > -1$.`,
    options: [
      t`$y(x) = 1 + x^3$`,
      t`$y(x) = 2(1 + x^3)$`,
      t`$y(x) = 1 + x^3 + C$`,
      t`$y(x) = \sqrt{1 + x^3} + 1$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Separate variables as $\frac{1}{y}dy = \frac{3x^2}{1+x^3}dx$. Integrating gives $\ln|y| = \ln|1+x^3| + C_1 \implies y = C(1+x^3)$. Applying $y(1)=2$ determines $C = 1$.`,
      stepByStep: [],
      steps: [
        { title: "Separate variables", math: t`\frac{1}{y}\,dy = \frac{3x^2}{1 + x^3}\,dx` },
        { title: "Integrate both sides", math: t`\int \frac{1}{y}\,dy = \int \frac{3x^2}{1 + x^3}\,dx \implies \ln|y| = \ln|1 + x^3| + C_1` },
        { title: "Exponentiate", math: t`|y| = e^{C_1}|1 + x^3| \implies y(x) = C(1 + x^3)` },
        { title: "Apply initial condition $y(1) = 2$", math: t`2 = C(1 + 1^3) = 2C \implies C = 1` },
        { title: "Final explicit solution", math: t`y(x) = 1 + x^3` }
      ],
      answer: t`y(x) = 1 + x^3`,
      whyWrong: {
        '1': t`Forgot that $C(1 + 1^3) = 2C = 2 \implies C = 1$, not $C = 2$.`,
        '2': t`Added $C$ outside the logarithm without exponentiating correctly ($y = 1 + x^3 + C$). Constant enters in the exponent!`,
        '3': t`Incorrect integration power.`
      },
      commonTrap: t`Writing $\ln|y| = \ln|1+x^3| + C \implies y = 1 + x^3 + C$. In Concordia exams, failing to exponentiate $C$ properly is a major point deduction.`,
      reference: 'Fall 2018 Midterm Exam 1 Problem 1 · Concordia University'
    },
    source: [{ deck: 'Midterm Fall 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Separable IVP' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q1',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q1) · Concordia University',
    topic: 'Separable Nonlinear IVP with Arctan',
    difficulty: 'Exam Master',
    question: t`Solve the initial value problem $(1 + x^2) \dfrac{dy}{dx} - 3y^2 = 3$ with $y(1) = \frac{\pi}{4}$.`,
    options: [
      t`$y(x) = \tan\left( 3\arctan(x) + \arctan(\frac{\pi}{4}) - \frac{3\pi}{4} \right)$`,
      t`$y(x) = \tan\left( 3\arctan(x) \right)$`,
      t`$y(x) = 3\arctan(x) + \frac{\pi}{4}$`,
      t`$y(x) = \tan\left( \arctan(x) + \frac{\pi}{4} \right)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Factor $3(1 + y^2)$ to separate variables as $\frac{dy}{1 + y^2} = \frac{3}{1 + x^2}dx$. Integrating gives $\arctan(y) = 3\arctan(x) + C$.`,
      stepByStep: [],
      steps: [
        { title: "Rearrange and factor right-hand side", math: t`(1 + x^2)\frac{dy}{dx} = 3(1 + y^2)` },
        { title: "Separate variables", math: t`\frac{dy}{1 + y^2} = \frac{3}{1 + x^2}dx` },
        { title: "Integrate both sides", math: t`\arctan(y) = 3\arctan(x) + C` },
        { title: "Apply initial condition $y(1) = \\pi/4$", math: t`\arctan(\pi/4) = 3\arctan(1) + C = 3\left(\frac{\pi}{4}\right) + C \implies C = \arctan(\pi/4) - \frac{3\pi}{4}` },
        { title: "Invert arctan to solve for $y$", math: t`y(x) = \tan\left( 3\arctan(x) + \arctan(\frac{\pi}{4}) - \frac{3\pi}{4} \right)` }
      ],
      answer: t`y(x) = \tan\left( 3\arctan(x) + \arctan(\frac{\pi}{4}) - \frac{3\pi}{4} \right)`,
      whyWrong: {
        '1': t`Set $C = 0$ by forgetting to substitute the initial values $x = 1, y = \pi/4$.`,
        '2': t`Forgot to apply $\tan$ to both sides, leaving the equation in terms of $\arctan(y)$.`,
        '3': t`Dropped the factor of 3 on the right-hand side.`
      },
      commonTrap: t`Assuming $\arctan(\pi/4) = 1$! Note that $\arctan(1) = \pi/4$, NOT the reverse. $\arctan(\pi/4)$ is an irrational angle ($\approx 0.6657$).`,
      reference: 'Final Examination Fall 2021 Problem 1 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Separable IVP' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q3',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q3) · Concordia University',
    topic: 'Forced Damped Harmonic Oscillator (Transient & Steady-State)',
    difficulty: 'Exam Master',
    question: t`A $1\text{ kg}$ mass on a spring ($k = 16\text{ N/m}$) with damping $c = 8\text{ N}\cdot\text{s/m}$ is driven by external force $f(t) = 4\cos(2t)$. Find the steady-state equation of motion $y_{ss}(t)$.`,
    options: [
      t`$y_{ss}(t) = \frac{3}{25}\cos(2t) + \frac{4}{25}\sin(2t)$`,
      t`$y_{ss}(t) = \frac{4}{25}\cos(2t) - \frac{3}{25}\sin(2t)$`,
      t`$y_{ss}(t) = (C_1 + C_2 t)e^{-4t}$`,
      t`$y_{ss}(t) = \frac{1}{4}\cos(2t)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Equation of motion: $y'' + 8y' + 16y = 4\cos(2t)$. The complementary solution $y_c = (C_1 + C_2 t)e^{-4t}$ decays to 0 as $t \to \infty$ (transient). The steady-state motion is given solely by the particular solution $y_p(t)$.`,
      stepByStep: [],
      steps: [
        { title: "Formulate ODE", math: t`y'' + 8y' + 16y = 4\cos(2t)` },
        { title: "Identify steady-state candidate", math: t`y_p(t) = A\cos(2t) + B\sin(2t)` },
        { title: "Substitute into ODE", math: t`(-4A + 16B + 16A)\cos(2t) + (-4B - 16A + 16B)\sin(2t) = 4\cos(2t)` },
        { title: "Linear system for $A, B$", math: t`12A + 16B = 4 \implies 3A + 4B = 1; \quad -16A + 12B = 0 \implies B = \frac{4}{3}A` },
        { title: "Solve coefficients", math: t`3A + 4\left(\frac{4}{3}A\right) = \frac{25}{3}A = 1 \implies A = \frac{3}{25}, \quad B = \frac{4}{25}` },
        { title: "Steady-state solution", math: t`y_{ss}(t) = \frac{3}{25}\cos(2t) + \frac{4}{25}\sin(2t)` }
      ],
      answer: t`y_{ss}(t) = \frac{3}{25}\cos(2t) + \frac{4}{25}\sin(2t)`,
      whyWrong: {
        '1': t`Swapped the sine and cosine coefficients ($4/25$ and $3/25$).`,
        '2': t`Selected the complementary solution $y_c(t)$, which is the transient solution, not the steady-state.`,
        '3': t`Ignored damping term $8y'$ when matching coefficients.`
      },
      commonTrap: t`Confusing "transient" with "steady-state". The transient term contains the decaying exponential factor $e^{-4t} \to 0$, while the steady-state term persists forever under periodic forcing.`,
      reference: 'Final Examination Fall 2021 Problem 3 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 5 — Mechanical Vibrations & Harmonic Motion', location: 'Forced oscillations' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q5',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q5) · Concordia University',
    topic: 'Bernoulli IVP Explicit Solution',
    difficulty: 'Exam Master',
    question: t`Use Bernoulli's method to solve $x^2 y' + 2xy - y^3 = 0$ with $y(1) = 2$ in explicit format for $x > 0$.`,
    options: [
      t`$y(x) = \sqrt{\dfrac{4x}{4 - 3x^2}}$`,
      t`$y(x) = \sqrt{\dfrac{x}{1 + 3x^2}}$`,
      t`$y(x) = \dfrac{2x}{1 - x^2}$`,
      t`$y(x) = \sqrt{\dfrac{1}{x - \frac{3}{4}x^2}}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $x^2 y^3$ and substitute $u = y^{-2}$. The resulting linear equation $u' - \frac{4}{x}u = -\frac{2}{x^2}$ is solved with integrating factor $\mu = 1/x^4$, then solved explicitly for $y(x)$.`,
      stepByStep: [],
      steps: [
        { title: "Standard Bernoulli form ($n = 3$)", math: t`y' + \frac{2}{x}y = \frac{1}{x^2}y^3` },
        { title: "Divide by $y^3$ and substitute $u = y^{-2}$", math: t`y^{-3}y' + \frac{2}{x}y^{-2} = \frac{1}{x^2} \implies -\frac{1}{2}u' + \frac{2}{x}u = \frac{1}{x^2}` },
        { title: "Standard linear form in $u$", math: t`u' - \frac{4}{x}u = -\frac{2}{x^2}` },
        { title: "Integrating factor and solution", math: t`\mu(x) = x^{-4} \implies x^{-4} u = \int -2x^{-6}dx = \frac{2}{5}x^{-5} + C \quad \text{or via standard form } u = \frac{1}{x} + Cx` },
        { title: "Apply $y(1) = 2$", math: t`u(1) = \frac{1}{2^2} = \frac{1}{4} \implies 1 + C = \frac{1}{4} \implies C = -\frac{3}{4}` },
        { title: "Explicit form for $y(x)$", math: t`y^{-2} = \frac{1}{x} - \frac{3}{4}x = \frac{4 - 3x^2}{4x} \implies y(x) = \sqrt{\frac{4x}{4 - 3x^2}}` }
      ],
      answer: t`y(x) = \sqrt{\frac{4x}{4 - 3x^2}}`,
      whyWrong: {
        '1': t`Sign flip in the constant $C = +3/4$ instead of $-3/4$.`,
        '2': t`Forgot the square root when inverting $y^{-2}$.`,
        '3': t`Algebraic error finding a common denominator for $\frac{1}{x} - \frac{3}{4}x$.`
      },
      commonTrap: t`Leaving the answer in terms of $y^2 = \dots$ or $u = \dots$. Exam questions explicitly ask for "explicit format" ($y = f(x)$), requiring the square root!`,
      reference: 'Final Examination Fall 2021 Problem 5 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Bernoulli ODE' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q7',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q7) · Concordia University',
    topic: 'Variation of Parameters with Cosecant Forcing',
    difficulty: 'Exam Master',
    question: t`Find the particular solution $y_p(x)$ for the differential equation $4y'' + 36y = \csc(3x)$.`,
    options: [
      t`$y_p(x) = -\frac{x}{12}\cos(3x) + \frac{1}{36}\sin(3x)\ln|\sin(3x)|$`,
      t`$y_p(x) = -\frac{x}{3}\cos(3x) + \frac{1}{9}\sin(3x)\ln|\sin(3x)|$`,
      t`$y_p(x) = \frac{1}{12}\cos(3x)\ln|\csc(3x) - \cot(3x)|$`,
      t`$y_p(x) = -\frac{x}{12}\sin(3x) + \frac{1}{36}\cos(3x)\ln|\sin(3x)|$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by 4 into standard form $y'' + 9y = \frac{1}{4}\csc(3x)$. With $y_1 = \cos(3x), y_2 = \sin(3x), W = 3$, evaluate $u_1' = -\frac{y_2 f}{W}$ and $u_2' = \frac{y_1 f}{W}$.`,
      stepByStep: [],
      steps: [
        { title: "Standard form (leading coefficient 1)", math: t`y'' + 9y = \frac{1}{4}\csc(3x) = f(x)` },
        { title: "Complementary basis and Wronskian", math: t`y_1 = \cos(3x), \quad y_2 = \sin(3x), \quad W = \begin{vmatrix} \cos(3x) & \sin(3x) \\\\ -3\sin(3x) & 3\cos(3x) \end{vmatrix} = 3` },
        { title: "Compute $u_1(x)$", math: t`u_1' = -\frac{\sin(3x)\left[\frac{1}{4}\csc(3x)\right]}{3} = -\frac{1}{12} \implies u_1(x) = -\frac{1}{12}x` },
        { title: "Compute $u_2(x)$", math: t`u_2' = \frac{\cos(3x)\left[\frac{1}{4}\csc(3x)\right]}{3} = \frac{1}{12}\cot(3x) \implies u_2(x) = \frac{1}{36}\ln|\sin(3x)|` },
        { title: "Particular solution $y_p = u_1 y_1 + u_2 y_2$", math: t`y_p(x) = -\frac{x}{12}\cos(3x) + \frac{1}{36}\sin(3x)\ln|\sin(3x)|` }
      ],
      answer: t`y_p(x) = -\frac{x}{12}\cos(3x) + \frac{1}{36}\sin(3x)\ln|\sin(3x)|`,
      whyWrong: {
        '1': t`Forgot to divide by the leading coefficient 4 before applying variation of parameters.`,
        '2': t`Integrated cosecant directly instead of using variation of parameters.`,
        '3': t`Swapped the sine and cosine basis functions in $u_1 y_1 + u_2 y_2$.`
      },
      commonTrap: t`The #1 trap in variation of parameters is applying $f(x) = \csc(3x)$ directly without putting the ODE in standard form $y'' + P y' + Q y = f(x)$. Failing to divide by 4 inflates every term by a factor of 4!`,
      reference: 'Final Examination Fall 2021 Problem 7 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Variation of parameters' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q9',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q9) · Concordia University',
    topic: '2x2 Linear System Eigenvalues & Eigenvectors',
    difficulty: 'Exam Master',
    question: t`Find the complementary general solution $X_c(t)$ of the first-order linear system $X' = \begin{pmatrix} 1 & 8 \\\\ 1 & -1 \end{pmatrix} X$.`,
    options: [
      t`$X_c(t) = c_1 \begin{pmatrix} 4 \\\\ 1 \end{pmatrix} e^{3t} + c_2 \begin{pmatrix} -2 \\\\ 1 \end{pmatrix} e^{-3t}$`,
      t`$X_c(t) = c_1 \begin{pmatrix} 1 \\\\ 4 \end{pmatrix} e^{3t} + c_2 \begin{pmatrix} 1 \\\\ -2 \end{pmatrix} e^{-3t}$`,
      t`$X_c(t) = c_1 \begin{pmatrix} 4 \\\\ 1 \end{pmatrix} e^{-3t} + c_2 \begin{pmatrix} -2 \\\\ 1 \end{pmatrix} e^{3t}$`,
      t`$X_c(t) = c_1 \begin{pmatrix} 2 \\\\ 1 \end{pmatrix} e^{3t} + c_2 \begin{pmatrix} -4 \\\\ 1 \end{pmatrix} e^{-3t}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Characteristic equation $\det(A - \lambda I) = \lambda^2 - 9 = 0 \implies \lambda = \pm 3$. The corresponding eigenvectors are $\mathbf{v}_1 = \begin{pmatrix} 4 \\\\ 1 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} -2 \\\\ 1 \end{pmatrix}$.`,
      stepByStep: [],
      steps: [
        { title: "Characteristic polynomial", math: t`\det(A - \lambda I) = \begin{vmatrix} 1 - \lambda & 8 \\\\ 1 & -1 - \lambda \end{vmatrix} = -(1 - \lambda)(1 + \lambda) - 8 = \lambda^2 - 1 - 8 = \lambda^2 - 9 = 0` },
        { title: "Eigenvalues", math: t`\lambda_1 = 3, \quad \lambda_2 = -3` },
        { title: "Eigenvector for $\\lambda_1 = 3$", math: t`\begin{pmatrix} -2 & 8 \\\\ 1 & -4 \end{pmatrix}\begin{pmatrix} v_1 \\\\ v_2 \end{pmatrix} = 0 \implies v_1 = 4v_2 \implies \mathbf{K}_1 = \begin{pmatrix} 4 \\\\ 1 \end{pmatrix}` },
        { title: "Eigenvector for $\\lambda_2 = -3$", math: t`\begin{pmatrix} 4 & 8 \\\\ 1 & 2 \end{pmatrix}\begin{pmatrix} v_1 \\\\ v_2 \end{pmatrix} = 0 \implies v_1 = -2v_2 \implies \mathbf{K}_2 = \begin{pmatrix} -2 \\\\ 1 \end{pmatrix}` },
        { title: "Complementary solution", math: t`X_c(t) = c_1 \begin{pmatrix} 4 \\\\ 1 \end{pmatrix} e^{3t} + c_2 \begin{pmatrix} -2 \\\\ 1 \end{pmatrix} e^{-3t}` }
      ],
      answer: t`X_c(t) = c_1 \begin{pmatrix} 4 \\\\ 1 \end{pmatrix} e^{3t} + c_2 \begin{pmatrix} -2 \\\\ 1 \end{pmatrix} e^{-3t}`,
      whyWrong: {
        '1': t`Inverted the eigenvector elements ($v_2$ over $v_1$).`,
        '2': t`Swapped the positive and negative eigenvalue exponents.`,
        '3': t`Calculated scalar ratio incorrectly.`
      },
      commonTrap: t`Forgetting that the eigenvector equation $(A - \lambda I)\mathbf{v} = 0$ is homogeneous: both rows are linearly dependent, so solving either row yields the ratio $v_1 / v_2$.`,
      reference: 'Final Examination Fall 2021 Problem 9 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 8 — Systems of Linear First-Order Differential Equations', location: 'Eigenvalue method' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q2',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Midterm Examination 1 Fall 2018 (Q2) · Concordia University',
    topic: 'Bernoulli Differential Equation Transformation',
    difficulty: 'Exam Master',
    question: t`Solve the Bernoulli differential equation $\frac{dy}{dx} + 2xy = -xy^4$.`,
    options: [
      t`$y(x) = \left(-\frac{1}{2} + C e^{3x^2}\right)^{-1/3}$`,
      t`$y(x) = \left(-\frac{1}{2} + C e^{-3x^2}\right)^{-1/3}$`,
      t`$y(x) = \left(1 + C e^{3x^2}\right)^{-3}$`,
      t`$y(x) = -\frac{1}{2} + C e^{3x^2}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $y^4$ to obtain $y^{-4}y' + 2x y^{-3} = -x$. Substitute $u = y^{1-4} = y^{-3}$, which transforms the equation into the linear ODE $\frac{du}{dx} - 6xu = 3x$.`,
      stepByStep: [],
      steps: [
        { title: "Divide by $y^4$", math: t`y^{-4}\frac{dy}{dx} + 2x y^{-3} = -x` },
        { title: "Substitute $u = y^{-3}$", math: t`\frac{du}{dx} = -3y^{-4}\frac{dy}{dx} \implies y^{-4}\frac{dy}{dx} = -\frac{1}{3}\frac{du}{dx}` },
        { title: "Standard linear form for $u$", math: t`-\frac{1}{3}\frac{du}{dx} + 2xu = -x \implies \frac{du}{dx} - 6xu = 3x` },
        { title: "Integrating factor", math: t`\mu(x) = e^{\int -6x\,dx} = e^{-3x^2}` },
        { title: "Integrate", math: t`\frac{d}{dx}[u e^{-3x^2}] = 3x e^{-3x^2} \implies u e^{-3x^2} = -\frac{1}{2}e^{-3x^2} + C` },
        { title: "Solve for $u$ and $y$", math: t`u(x) = -\frac{1}{2} + C e^{3x^2} \implies y(x) = \left(-\frac{1}{2} + C e^{3x^2}\right)^{-1/3}` }
      ],
      answer: t`y(x) = \left(-\frac{1}{2} + C e^{3x^2}\right)^{-1/3}`,
      whyWrong: {
        '1': t`Sign error in exponent after dividing by $e^{-3x^2}$: $C / e^{-3x^2} = C e^{3x^2}$.`,
        '2': t`Forgot that $y = u^{-1/3}$, not $u^{-3}$.`,
        '3': t`Left the answer as $u(x)$ without inverting back to $y(x)$.`
      },
      commonTrap: t`Forgetting to multiply the entire ODE by $-3$ when substituting $y^{-4}y' = -\frac{1}{3}u'$. That changes the coefficient of $u$ from $+2x$ to $-6x$!`,
      reference: 'Fall 2018 Midterm Exam 1 Problem 2 · Concordia University'
    },
    source: [{ deck: 'Midterm Fall 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Bernoulli equation' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q4',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Midterm Examination 1 Fall 2018 (Q4) · Concordia University',
    topic: 'Homogeneous Degree-3 Equation IVP',
    difficulty: 'Exam Master',
    question: t`Solve the homogeneous initial value problem $(x^3 + y^3)\,dx - 3xy^2\,dy = 0$ with $y(1) = 1$.`,
    options: [
      t`$y(x) = x\left(\frac{1 + \ln|x|}{1}\right)^{1/3}$`,
      t`$y(x) = x\sqrt{1 + \ln|x|}$`,
      t`$y(x) = \left(x^3 + 2\ln|x|\right)^{1/3}$`,
      t`$y(x) = x\left(1 + 3\ln|x|\right)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Both $M(x,y) = x^3 + y^3$ and $N(x,y) = -3xy^2$ are homogeneous of degree 3. Setting $y = ux \implies dy = u\,dx + x\,du$ separates the equation into $\frac{3u^2}{1 - 2u^3}\,du = \frac{1}{x}\,dx$.`,
      stepByStep: [],
      steps: [
        { title: "Substitute $y = ux, dy = u\,dx + x\,du$", math: t`(x^3 + u^3 x^3)\,dx - 3x(u^2 x^2)(u\,dx + x\,du) = 0` },
        { title: "Divide by $x^3$ and group terms", math: t`(1 + u^3 - 3u^3)\,dx - 3u^2 x\,du = 0 \implies (1 - 2u^3)\,dx = 3u^2 x\,du` },
        { title: "Separate variables", math: t`\frac{dx}{x} = \frac{3u^2}{1 - 2u^3}\,du` },
        { title: "Integrate both sides", math: t`\ln|x| = -\frac{1}{2}\ln|1 - 2u^3| + C_1 \implies \ln|1 - 2u^3| = -2\ln|x| + C_2` },
        { title: "Apply $y(1) = 1 \implies u(1) = 1$", math: t`|1 - 2(1)^3| = 1 \implies C_2 = 0 \implies 1 - 2u^3 = \pm x^{-2}` },
        { title: "Solve for explicit $y(x)$", math: t`u(x) = \left(\frac{1 - x^{-2}}{2}\right)^{1/3} \implies y(x) = x\left(\frac{1 + \ln|x|}{1}\right)^{1/3}` }
      ],
      answer: t`y(x) = x\left(\frac{1 + \ln|x|}{1}\right)^{1/3}`,
      whyWrong: {
        '1': t`Square root power instead of cube root ($y^3 / x^3 = u^3$).`,
        '2': t`Lost the outer factor of $x$ when converting back from $u(x)$ to $y = ux$.`,
        '3': t`Incorrect chain rule during integration of $\frac{3u^2}{1-2u^3}$.`
      },
      commonTrap: t`Forgetting that in $y = ux$, the differential is $dy = u\,dx + x\,du$ (product rule). Leaving out $x\,du$ makes separation impossible.`,
      reference: 'Fall 2018 Midterm Exam 1 Problem 4 · Concordia University'
    },
    source: [{ deck: 'Midterm Fall 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Homogeneous substitution' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q3',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q3) · Concordia University',
    topic: 'Forced Damped Harmonic Oscillator Steady-State',
    difficulty: 'Exam Master',
    question: t`A $1\text{ kg}$ mass on a spring ($k = 16\text{ N/m}$) with damping coefficient $c = 8\text{ N}\cdot\text{s/m}$ satisfies $y'' + 8y' + 16y = 4\cos(2t)$. What is the steady-state amplitude $A$ of the forced motion?`,
    options: [
      t`$A = \frac{1}{5} = 0.20\text{ m}$`,
      t`$A = \frac{1}{4} = 0.25\text{ m}$`,
      t`$A = \frac{1}{8} = 0.125\text{ m}$`,
      t`$A = \frac{4}{15} \approx 0.27\text{ m}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The steady-state response $y_p(t) = A_1\cos(2t) + B_1\sin(2t)$ has amplitude $A = \sqrt{A_1^2 + B_1^2} = \frac{F_0}{\sqrt{(k - m\omega^2)^2 + (c\omega)^2}}$. Here $F_0 = 4, \omega = 2, k = 16, c = 8, m = 1$.`,
      stepByStep: [],
      steps: [
        { title: "Identify physical parameters", math: t`m = 1, \quad c = 8, \quad k = 16, \quad F_0 = 4, \quad \omega = 2` },
        { title: "Substitute candidate $y_p = A_1\cos(2t) + B_1\sin(2t)$", math: t`y_p' = -2A_1\sin(2t) + 2B_1\cos(2t), \quad y_p'' = -4A_1\cos(2t) - 4B_1\sin(2t)` },
        { title: "Substitute into $y'' + 8y' + 16y = 4\cos(2t)$", math: t`(12A_1 + 16B_1)\cos(2t) + (-16A_1 + 12B_1)\sin(2t) = 4\cos(2t)` },
        { title: "Equate coefficients", math: t`12A_1 + 16B_1 = 4, \quad -16A_1 + 12B_1 = 0 \implies B_1 = \frac{4}{3}A_1` },
        { title: "Solve system", math: t`12A_1 + 16\left(\frac{4}{3}A_1\right) = 4 \implies \frac{100}{3}A_1 = 4 \implies A_1 = \frac{3}{25}, \quad B_1 = \frac{4}{25}` },
        { title: "Compute overall amplitude $A$", math: t`A = \sqrt{A_1^2 + B_1^2} = \sqrt{\left(\frac{3}{25}\right)^2 + \left(\frac{4}{25}\right)^2} = \frac{\sqrt{9 + 16}}{25} = \frac{5}{25} = \frac{1}{5} = 0.20\text{ m}` }
      ],
      answer: t`A = \frac{1}{5} = 0.20\text{ m}`,
      whyWrong: {
        '1': t`Neglected damping entirely ($A = 4 / (16 - 4) = 4/12 = 1/3$).`,
        '2': t`Divided forcing by damping alone ($4 / (8 \times 2) = 1/4$).`,
        '3': t`Arithmetic error in $\sqrt{3^2 + 4^2}$.`
      },
      commonTrap: t`Thinking the steady-state motion includes the transient solution $y_c(t) = (c_1 + c_2 t)e^{-4t}$. As $t \to \infty$, $e^{-4t} \to 0$, leaving only $y_p(t)$!`,
      reference: 'Final Examination Fall 2021 Problem 3 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 5 — Mechanical Vibrations & Harmonic Motion', location: 'Forced oscillations' }]
  },
  {
    id: 'Q_ENGR213_F2021_Q7',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Fall 2021 (Q7) · Concordia University',
    topic: 'Variation of Parameters with Cosecant Forcing',
    difficulty: 'Exam Master',
    question: t`Find the general solution of $y'' + y = \csc x$ on the interval $0 < x < \pi$.`,
    options: [
      t`$y(x) = c_1\cos x + c_2\sin x - x\cos x + \sin x\ln(\sin x)$`,
      t`$y(x) = c_1\cos x + c_2\sin x + x\sin x - \cos x\ln(\sin x)$`,
      t`$y(x) = c_1\cos x + c_2\sin x - x\cos x$`,
      t`$y(x) = c_1\cos x + c_2\sin x + \cot x$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Complementary solutions are $y_1 = \cos x, y_2 = \sin x$ with Wronskian $W = 1$. Variation of parameters gives $u_1 = -\int \frac{\sin x\csc x}{1}dx = -x$ and $u_2 = \int \frac{\cos x\csc x}{1}dx = \int \cot x\,dx = \ln(\sin x)$.`,
      stepByStep: [],
      steps: [
        { title: "Complementary solutions and Wronskian", math: t`y_1 = \cos x, \quad y_2 = \sin x, \quad W = \cos x(\cos x) - (-\sin x)(\sin x) = 1` },
        { title: "Compute parameter $u_1(x)$", math: t`u_1 = -\int \frac{y_2 f(x)}{W}\,dx = -\int \sin x\csc x\,dx = -\int 1\,dx = -x` },
        { title: "Compute parameter $u_2(x)$", math: t`u_2 = \int \frac{y_1 f(x)}{W}\,dx = \int \cos x\csc x\,dx = \int \frac{\cos x}{\sin x}\,dx = \ln|\sin x|` },
        { title: "Construct particular solution $y_p$", math: t`y_p = u_1 y_1 + u_2 y_2 = -x\cos x + \sin x\ln(\sin x)` },
        { title: "General solution", math: t`y(x) = c_1\cos x + c_2\sin x - x\cos x + \sin x\ln(\sin x)` }
      ],
      answer: t`y(x) = c_1\cos x + c_2\sin x - x\cos x + \sin x\ln(\sin x)`,
      whyWrong: {
        '1': t`Swapped the signs on $u_1$ and $u_2$.`,
        '2': t`Omitted the logarithmic term $\sin x\ln(\sin x)$ from $\int \cot x\,dx$.`,
        '3': t`Used undetermined coefficients, which is invalid for non-elementary/fractional forcing like $\csc x$.`
      },
      commonTrap: t`Attempting undetermined coefficients for $\csc x$. Undetermined coefficients works ONLY for polynomials, exponentials, sines, and cosines. Any tangent, secant, or cosecant REQUIRES variation of parameters!`,
      reference: 'Final Examination Fall 2021 Problem 7 · Concordia University'
    },
    source: [{ deck: 'Final Exam 2021', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Variation of parameters' }]
  },
  {
    id: 'Q_ENGR213_M2018_Q5',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Midterm Examination 1 Fall 2018 (Q5) · Concordia University',
    topic: 'Bacterial Growth Kinetics & Doubling/Tripling Time',
    difficulty: 'Midterm Level',
    question: t`A bacterial culture grows at a rate proportional to its population $\frac{dP}{dt} = kP$. If the population doubles in 4 hours, what is its exact tripling period?`,
    options: [
      t`$t = 4\,\frac{\ln 3}{\ln 2} \approx 6.34\text{ hours}$`,
      t`$t = 6\text{ hours}$`,
      t`$t = 4\,\frac{\ln 2}{\ln 3} \approx 2.52\text{ hours}$`,
      t`$t = 8\text{ hours}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`The growth equation is $P(t) = P_0 e^{kt}$. Doubling in 4 hours means $e^{4k} = 2 \implies k = \frac{\ln 2}{4}$. Setting $P(t) = 3P_0$ gives $e^{kt} = 3 \implies t = \frac{\ln 3}{k} = 4\frac{\ln 3}{\ln 2}$.`,
      stepByStep: [],
      steps: [
        { title: "Exponential growth model", math: t`P(t) = P_0 e^{kt}` },
        { title: "Apply doubling condition $P(4) = 2P_0$", math: t`2P_0 = P_0 e^{4k} \implies e^{4k} = 2 \implies k = \frac{\ln 2}{4}` },
        { title: "Set tripling condition $P(t) = 3P_0$", math: t`3P_0 = P_0 e^{kt} \implies e^{kt} = 3 \implies kt = \ln 3` },
        { title: "Solve for $t$", math: t`t = \frac{\ln 3}{k} = \frac{\ln 3}{\frac{\ln 2}{4}} = 4\,\frac{\ln 3}{\ln 2} \approx 4 \times \frac{1.0986}{0.6931} \approx 6.34\text{ hours}` }
      ],
      answer: t`t = 4\,\frac{\ln 3}{\ln 2} \approx 6.34\text{ hours}`,
      whyWrong: {
        '1': t`Linear extrapolation: assumes if it takes 4 hours to double (+100%), it takes 6 hours to triple (+200%). Exponential growth accelerates!`,
        '2': t`Inverted the log ratio: $\frac{\ln 2}{\ln 3}$.`,
        '3': t`Calculated quadrupling time: 2 doublings = $2 \times 4 = 8\text{ hours}$.`
      },
      commonTrap: t`Linear thinking on exponential problems! In exponential growth, moving from $2P_0$ to $3P_0$ takes LESS time ($2.34\text{ hrs}$) than moving from $P_0$ to $2P_0$ ($4\text{ hrs}$) because the base population is larger.`,
      reference: 'Fall 2018 Midterm Exam 1 Problem 5 · Concordia University'
    },
    source: [{ deck: 'Midterm Fall 2018', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Linear growth model' }]
  },
  {
    id: 'Q_ENGR213_W2023_Q2',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Final Examination Winter 2023 (Q2) · Concordia University',
    topic: 'Integrating Factor Linear ODE IVP',
    difficulty: 'Exam Master',
    question: t`Solve the initial value problem $x\frac{dy}{dx} + 3y = \frac{\sin x}{x^2}$ with $y(\pi) = 0$ for $x > 0$.`,
    options: [
      t`$y(x) = -\frac{1 + \cos x}{x^3}$`,
      t`$y(x) = \frac{1 - \cos x}{x^3}$`,
      t`$y(x) = -\frac{\cos x}{x^3}$`,
      t`$y(x) = \frac{\sin x - \pi}{x^3}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Divide by $x$ to get $y' + \frac{3}{x}y = \frac{\sin x}{x^3}$. The integrating factor is $\mu(x) = e^{\int (3/x)dx} = x^3$. Multiplying gives $\frac{d}{dx}[x^3 y] = \sin x$.`,
      stepByStep: [],
      steps: [
        { title: "Standard linear form", math: t`\frac{dy}{dx} + \frac{3}{x}y = \frac{\sin x}{x^3}` },
        { title: "Integrating factor", math: t`\mu(x) = e^{\int \frac{3}{x}\,dx} = e^{3\ln x} = x^3` },
        { title: "Multiply and collapse", math: t`\frac{d}{dx}[x^3 y] = x^3 \cdot \frac{\sin x}{x^3} = \sin x` },
        { title: "Integrate both sides", math: t`x^3 y = -\cos x + C \implies y(x) = \frac{-\cos x + C}{x^3}` },
        { title: "Apply $y(\pi) = 0$", math: t`0 = \frac{-\cos(\pi) + C}{\pi^3} = \frac{-(-1) + C}{\pi^3} \implies 1 + C = 0 \implies C = -1` },
        { title: "Final explicit solution", math: t`y(x) = \frac{-\cos x - 1}{x^3} = -\frac{1 + \cos x}{x^3}` }
      ],
      answer: t`y(x) = -\frac{1 + \cos x}{x^3}`,
      whyWrong: {
        '1': t`Sign error on $\cos(\pi) = -1$, yielding $C = +1$.`,
        '2': t`Omitted the integration constant $C$.`,
        '3': t`Substituted $\sin x$ for the integral of $\sin x$.`
      },
      commonTrap: t`Forgetting that $\cos(\pi) = -1$, so $-(-\cos(\pi)) = -(-1) = +1$. Signs around $\cos(\pi)$ are one of the most common mark-losers on Concordia ODE finals.`,
      reference: 'Final Examination Winter 2023 Problem 2 · Concordia University'
    },
    source: [{ deck: 'Final Exam Winter 2023', chapter: 'Chapter 2 — First-Order Differential Equations', location: 'Linear IVP' }]
  },
  {
    id: 'Q_ENGR213_W2016_MA_Q5',
    courseId: 'ENGR213',
    chapter: 'past-final',
    pastPaper: 'Midterm Examination II Winter 2016 Version A (Q5) · Concordia University',
    topic: 'Cauchy-Euler Complex Conjugate Equation',
    difficulty: 'Exam Master',
    question: t`Find the general solution of the Cauchy-Euler differential equation $x^2 \frac{d^2y}{dx^2} + 3x \frac{dy}{dx} + 5y = 0$ for $x > 0$.`,
    options: [
      t`$y(x) = x^{-1}\left[c_1\cos(2\ln x) + c_2\sin(2\ln x)\right]$`,
      t`$y(x) = c_1\cos(2\ln x) + c_2\sin(2\ln x)$`,
      t`$y(x) = x^{-1}\left[c_1\cos(\sqrt{5}\ln x) + c_2\sin(\sqrt{5}\ln x)\right]$`,
      t`$y(x) = x^{-2}\left[c_1\cos(2x) + c_2\sin(2x)\right]$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`For Cauchy-Euler $a x^2 y'' + b x y' + c y = 0$, substitute $y = x^m$. The auxiliary equation is $a m(m-1) + b m + c = m^2 + 2m + 5 = 0$, giving roots $m = -1 \pm 2i$.`,
      stepByStep: [],
      steps: [
        { title: "Substitute $y = x^m$", math: t`x^2 m(m-1)x^{m-2} + 3x m x^{m-1} + 5x^m = 0` },
        { title: "Cauchy-Euler characteristic polynomial", math: t`m(m-1) + 3m + 5 = m^2 + 2m + 5 = 0` },
        { title: "Solve for roots $m$", math: t`m = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i` },
        { title: "Euler identity for $x^{-1 \pm 2i}$", math: t`x^{-1 \pm 2i} = x^{-1} e^{\pm 2i \ln x} = x^{-1}\left[\cos(2\ln x) \pm i\sin(2\ln x)\right]` },
        { title: "Real fundamental general solution", math: t`y(x) = x^{-1}\left[c_1\cos(2\ln x) + c_2\sin(2\ln x)\right]` }
      ],
      answer: t`y(x) = x^{-1}\left[c_1\cos(2\ln x) + c_2\sin(2\ln x)\right]`,
      whyWrong: {
        '1': t`Omitted the decay envelope factor $x^{-1}$.`,
        '2': t`Forgot that the linear term is $m(m-1) + 3m = m^2 + 2m$, not $m^2 + 3m$.`,
        '3': t`Used $\cos(2x)$ instead of $\cos(2\ln x)$ (Cauchy-Euler uses $\ln x$!).`
      },
      commonTrap: t`Using $\cos(2x)$ instead of $\cos(2\ln x)$. For constant-coefficient ODEs the argument is $2x$; for Cauchy-Euler equations the argument is ALWAYS $2\ln x$.`,
      reference: 'Winter 2016 Midterm Exam II Version A Problem 5 · Concordia University'
    },
    source: [{ deck: 'Midterm 2016 Version A', chapter: 'Chapter 4 — Higher-Order Linear Equations', location: 'Cauchy-Euler complex roots' }]
  },
];
