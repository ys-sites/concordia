import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

// ENGR 213 — Lecture 11: Homogeneous Linear ODEs with Constant Coefficients & Auxiliary Equation
const DECK = 'ENGR213, Lecture 11, October 21 2026.pdf';
const CHAPTER = 'Lecture 11 · Homogeneous Linear Higher-Order ODEs';
const src = (location: string): QuestionSource[] => [{ deck: DECK, chapter: CHAPTER, location }];
const ref = (slide: string) => `${DECK} · ${slide}`;

const q = (p: Omit<PracticeQuestion, 'courseId' | 'chapter'>): PracticeQuestion => ({
  courseId: 'ENGR213',
  chapter: 'lecture_11',
  ...p
});

export const ENGR213_LECTURE_11: PracticeQuestion[] = [
  q({
    id: 'Q_ENGR213_L11_01',
    topic: 'Auxiliary Equation: Distinct Real Roots',
    difficulty: 'Foundation',
    question: t`Find the general solution of the differential equation:
$$2y'' - 5y' - 3y = 0$$`,
    options: [
      t`$y(x) = c_1 e^{-\frac{1}{2}x} + c_2 e^{3x}$`,
      t`$y(x) = c_1 e^{\frac{1}{2}x} + c_2 e^{-3x}$`,
      t`$y(x) = c_1 e^{-x} + c_2 e^{\frac{3}{2}x}$`,
      t`$y(x) = (c_1 + c_2 x) e^{3x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Characteristic roots of a second-order linear constant-coefficient equation determine independent exponential solutions.`,
      stepByStep: [
        t`Step 1: Write the auxiliary equation by substituting $y = e^{mx}$: $2m^2 - 5m - 3 = 0$.`,
        t`Step 2: Factor the quadratic: $(2m + 1)(m - 3) = 0$.`,
        t`Step 3: Solve for the roots: $m_1 = -1/2$ and $m_2 = 3$.`,
        t`Step 4: Since $m_1 \neq m_2$ are real and distinct (Case I), the general solution is $y(x) = c_1 e^{-\frac{1}{2}x} + c_2 e^{3x}$.`
      ],
      whyWrong: {
        '1': t`Inverts the signs of the roots ($m = 1/2, -3$).`,
        '2': t`Incorrectly factors the quadratic equation.`,
        '3': t`Treats the equation as having repeated roots (Case II).`
      },
      commonTrap: t`Forgetting to set $(2m+1)=0 \implies m = -1/2$, leading to sign errors.`,
      reference: ref('Slide 7, Example 1')
    },
    source: src('Slide 7')
  }),

  q({
    id: 'Q_ENGR213_L11_02',
    topic: 'Auxiliary Equation: Repeated Roots & Multiplicity',
    difficulty: 'Midterm Level',
    question: t`What is the general solution of the second-order equation:
$$y'' - 10y' + 25y = 0$$`,
    options: [
      t`$y(x) = c_1 e^{5x} + c_2 x e^{5x}$`,
      t`$y(x) = c_1 e^{5x} + c_2 e^{-5x}$`,
      t`$y(x) = c_1 e^{5x} + c_2 e^{5x}$`,
      t`$y(x) = e^{5x} (c_1 \cos 5x + c_2 \sin 5x)$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`When the discriminant vanishes ($b^2 - 4ac = 0$), reduction of order generates the second linearly independent solution with a factor of $x$.`,
      stepByStep: [
        t`Step 1: Form auxiliary equation: $m^2 - 10m + 25 = 0$.`,
        t`Step 2: Factor: $(m - 5)^2 = 0 \implies m_1 = m_2 = 5$ (multiplicity 2).`,
        t`Step 3: A single root $m=5$ only provides $y_1 = e^{5x}$. By reduction of order, $y_2 = x e^{5x}$.`,
        t`Step 4: Superposition yields $y(x) = c_1 e^{5x} + c_2 x e^{5x} = (c_1 + c_2 x) e^{5x}$.`
      ],
      whyWrong: {
        '1': t`Assumes distinct roots $+5$ and $-5$.`,
        '2': t`Fails to include the factor of $x$, collapsing two constants into one: $(c_1+c_2)e^{5x}$.`,
        '3': t`Applies the complex conjugate formula to real repeated roots.`
      },
      commonTrap: t`Omitting the $x$ multiplier on the second repeated term.`,
      reference: ref('Slide 7, Example 2')
    },
    source: src('Slide 7')
  }),

  q({
    id: 'Q_ENGR213_L11_03',
    topic: 'Auxiliary Equation: Initial Value Problem with Complex Roots',
    difficulty: 'Exam Master',
    question: t`Solve the initial-value problem:
$$4y'' + 4y' + 17y = 0, \qquad y(0) = -1, \quad y'(0) = 2$$`,
    options: [
      t`$y(x) = e^{-\frac{1}{2}x} \left(-\cos 2x + \frac{3}{4}\sin 2x\right)$`,
      t`$y(x) = e^{\frac{1}{2}x} \left(-\cos 2x + 2\sin 2x\right)$`,
      t`$y(x) = e^{-2x} \left(-\cos 4x + \frac{1}{2}\sin 4x\right)$`,
      t`$y(x) = -\cos 2x + \frac{3}{4}\sin 2x$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Complex roots $m = \alpha \pm i\beta$ produce decaying harmonic oscillations scaled by initial conditions.`,
      stepByStep: [
        t`Step 1: Auxiliary equation: $4m^2 + 4m + 17 = 0$.`,
        t`Step 2: Roots: $m = \frac{-4 \pm \sqrt{16 - 272}}{8} = \frac{-4 \pm 16i}{8} = -\frac{1}{2} \pm 2i$.`,
        t`Step 3: Real part $\alpha = -1/2$, imaginary part $\beta = 2$. General solution: $y = e^{-x/2}(c_1 \cos 2x + c_2 \sin 2x)$.`,
        t`Step 4: Initial condition $y(0) = c_1 = -1$.`,
        t`Step 5: Differentiate: $y'(0) = -\frac{1}{2}c_1 + 2c_2 = 2 \implies -\frac{1}{2}(-1) + 2c_2 = 2 \implies 2c_2 = \frac{3}{2} \implies c_2 = \frac{3}{4}$.`,
        t`Step 6: Solution: $y(x) = e^{-\frac{1}{2}x} \left(-\cos 2x + \frac{3}{4}\sin 2x\right)$.`
      ],
      whyWrong: {
        '1': t`Wrong sign on exponential decay $\alpha = +1/2$ instead of $-1/2$.`,
        '2': t`Incorrectly computed $\alpha$ and $\beta$ by dividing by $a$ instead of $2a$.`,
        '3': t`Dropped the exponential decay factor $e^{-x/2}$.`
      },
      commonTrap: t`Forgetting the product rule when differentiating $e^{\alpha x} \cdot (\dots)$, missing the $-\frac{1}{2}c_1$ term in $y'(0)$.`,
      reference: ref('Slide 8, Example 4')
    },
    source: src('Slide 8')
  }),

  q({
    id: 'Q_ENGR213_L11_04',
    topic: 'Higher-Order ODE: Repeated Roots in Third-Order Polynomial',
    difficulty: 'Midterm Level',
    question: t`What is the general solution of the third-order differential equation:
$$y''' + 3y'' - 4y = 0$$`,
    options: [
      t`$y(x) = c_1 e^x + c_2 e^{-2x} + c_3 x e^{-2x}$`,
      t`$y(x) = c_1 e^x + c_2 e^{-2x} + c_3 e^{2x}$`,
      t`$y(x) = c_1 e^{-x} + c_2 e^{2x} + c_3 x e^{2x}$`,
      t`$y(x) = (c_1 + c_2 x + c_3 x^2) e^{-2x}$`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t`Higher-order auxiliary equations are factored into linear and irreducible quadratic factors; repeated roots accumulate powers of $x$.`,
      stepByStep: [
        t`Step 1: Write auxiliary equation: $m^3 + 3m^2 - 4 = 0$.`,
        t`Step 2: Test rational roots: $m=1 \implies 1 + 3 - 4 = 0$, so $(m-1)$ is a factor.`,
        t`Step 3: Long division: $(m^3 + 3m^2 - 4) / (m-1) = m^2 + 4m + 4 = (m+2)^2$.`,
        t`Step 4: Roots are $m_1 = 1$ (multiplicity 1) and $m_{2,3} = -2$ (multiplicity 2).`,
        t`Step 5: General solution: $y(x) = c_1 e^x + c_2 e^{-2x} + c_3 x e^{-2x}$.`
      ],
      whyWrong: {
        '1': t`Incorrectly assumes distinct roots $-2$ and $+2$.`,
        '2': t`Inverts the signs of the roots ($m=-1, +2$).`,
        '3': t`Treats $m=-2$ as a root of multiplicity 3 instead of 2.`
      },
      commonTrap: t`Forgetting the $0m$ placeholder when performing polynomial division on $m^3 + 3m^2 + 0m - 4$.`,
      reference: ref('Slide 11, Example 5')
    },
    source: src('Slide 11')
  })
];
