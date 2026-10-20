import React, { useState, useMemo, useEffect } from 'react';
import {
  Compass,
  Zap,
  Brain,
  FileText,
  Target,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  ArrowRight,
  RotateCcw,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Layers,
  Flame,
  Check,
  X,
  ArrowLeft,
  Volume2,
  VolumeX,
  Search,
  Printer,
  Play,
  ExternalLink,
  ListOrdered,
  Calculator,
  Timer
} from 'lucide-react';
import { MathText } from '../utils/mathRenderer';
import { audio } from '../utils/audio';
import { CourseDocument, PracticeQuestion } from '../types';
import { WorkedSolution } from './WorkedSolution';
import './Engr213MidtermCompanion.css';

interface Props {
  onViewPdf?: (doc: CourseDocument, page?: number) => void;
  onBack?: () => void;
}

// ----------------------------------------------------
// 1. DATA: 10-Second Method Classifier Archetypes
// ----------------------------------------------------
export interface VideoReview {
  title: string;
  channel: string;
  duration: string;
  youtubeId: string;
  url: string;
  keyTakeaways: string[];
}

export interface MethodArchetype {
  id: string;
  name: string;
  standardForm: string;
  formulaDisplay: string;
  difficulty: 'easy' | 'med' | 'hard';
  diffLabel: string;
  visualCue: string;
  fastestMove: string;
  easiestVariant: string;
  hardestTrapVariant: string;
  recipeSteps: { title: string; desc: string }[];
  workedExample: { problem: string; solution: string[] };
  videoReview: VideoReview;
  friendTip: string;
  trapAlert: string;
}

const METHOD_ARCHETYPES: MethodArchetype[] = [
  {
    id: 'separable',
    name: '1. Separable Differential Equations',
    standardForm: 'dy/dx = g(x) · h(y)  or  M(x)dx + N(y)dy = 0',
    formulaDisplay: '\\frac{dy}{dx} = g(x)h(y) \\implies \\int \\frac{dy}{h(y)} = \\int g(x)dx + C',
    difficulty: 'easy',
    diffLabel: 'Easiest (Guaranteed Q1)',
    visualCue: 'Can you move all y terms with dy to the LHS and all x terms with dx to the RHS purely by multiplication or division?',
    fastestMove: 'Separate variables immediately, integrate both sides, and combine the constants into a single +C on the x-side before exponentiating.',
    easiestVariant: 'dy/dx = x² y  ⟹  ln|y| = x³/3 + C  ⟹  y = K e^{x³/3}. Simple powers and logs.',
    hardestTrapVariant: 'Division by zero losing singular equilibrium solutions (where h(y) = 0), or exponentiation errors: writing ln|y| = f(x) + C ⟹ y = e^{f(x)} + C (WRONG! The C is in the exponent: y = C e^{f(x)}).',
    recipeSteps: [
      { title: 'Step 1: Check for Equilibrium Roots', desc: 'Find values of y where h(y) = 0. These constant functions y(x) = y* are valid solutions!' },
      { title: 'Step 2: Separate Integrals', desc: 'Write ∫ [1/h(y)] dy = ∫ g(x) dx + C. Evaluate both antiderivatives.' },
      { title: 'Step 3: Exponentiate & Absorb Constant', desc: 'If ln|y| appears, exponentiate: |y| = e^C · e^{G(x)} ⟹ y(x) = K e^{G(x)} where K = ±e^C.' },
      { title: 'Step 4: Branch Selection (if y²)', desc: 'If y² = f(x), select the positive or negative root based on the initial condition y(x₀) = y₀.' }
    ],
    workedExample: {
      problem: 'Solve the initial value problem: $\\frac{dy}{dx} = \\frac{2x}{y}, \\quad y(0) = -3$',
      solution: [
        'Separate variables by cross-multiplying: $y\\,dy = 2x\\,dx$',
        'Integrate both sides: $\\int y\\,dy = \\int 2x\\,dx \\implies \\frac{1}{2}y^2 = x^2 + C_1 \\implies y^2 = 2x^2 + C$',
        'Substitute initial condition $x = 0, y = -3$: $(-3)^2 = 2(0) + C \\implies C = 9$',
        'Solve for $y$: $y^2 = 2x^2 + 9$. Since the initial condition $y(0) = -3 < 0$, choose the negative square root branch: $y(x) = -\\sqrt{2x^2 + 9}$'
      ]
    },
    videoReview: {
      title: 'Separable First Order Differential Equations - Basic Introduction',
      channel: 'The Organic Chemistry Tutor',
      duration: '11 mins',
      youtubeId: 'Xh0oK8n0vDE',
      url: 'https://www.youtube.com/watch?v=Xh0oK8n0vDE',
      keyTakeaways: [
        'How to algebraically isolate dy and dx on opposite sides using multiplication/division only.',
        'Handling natural logarithm integration: ∫ (1/y) dy = ln|y| and exponentiating correctly as |y| = e^C e^{G(x)} = K e^{G(x)}.',
        'Plugging in the initial condition (x₀, y₀) immediately before complicated algebra to fix constant C.'
      ]
    },
    friendTip: 'On Concordia exams, question 1 is almost always a separable IVP. Do NOT expand complicated polynomials before checking if terms factor cleanly into an x-group and a y-group!',
    trapAlert: 'Never write ln|y| = ln|1+x³| + C ⟹ y = 1+x³+C. This is an immediate 0 marks. Constant C must multiply: y = C(1+x³).'
  },
  {
    id: 'linear_if',
    name: '2. First-Order Linear (Integrating Factor)',
    standardForm: 'dy/dx + P(x)y = Q(x)',
    formulaDisplay: '\\mu(x) = e^{\\int P(x)dx} \\implies y(x) = \\frac{1}{\\mu(x)}\\left[\\int \\mu(x)Q(x)dx + C\\right]',
    difficulty: 'easy',
    diffLabel: 'High Frequency (Fast)',
    visualCue: 'Single y\' and single y¹ with no powers, no √y, and no y · y\' products. May have a coefficient in front of y\'.',
    fastestMove: 'Divide by the leading coefficient so y\' has unit coefficient 1. Identify P(x) (WATCH THE NEGATIVE SIGN!), find μ(x) = e^{∫ P dx}, and collapse into d/dx [μ y] = μ Q.',
    easiestVariant: 'Constant P: y\' + 2y = 4 ⟹ μ = e^{2x}. Fast reverse product rule.',
    hardestTrapVariant: 'x y\' - 3y = x³. Students forget to divide by x first (using P = -3 instead of -3/x) OR miss the minus sign, getting μ = x³ instead of x⁻³.',
    recipeSteps: [
      { title: 'Step 1: Normalize (Crucial!)', desc: 'Divide through by whatever multiplies y\'. The coefficient of y\' must be strictly 1.' },
      { title: 'Step 2: Compute μ(x)', desc: 'μ(x) = exp(∫ P(x) dx). Do NOT add +C here. Simplify exponentials of logs: e^{k ln x} = x^k.' },
      { title: 'Step 3: Collapse by Product Rule', desc: 'Write d/dx [μ(x) y] = μ(x) Q(x). Integrate both sides.' },
      { title: 'Step 4: Divide by μ(x)', desc: 'y(x) = [∫ μ Q dx + C] / μ(x). The constant C MUST be divided by μ(x)!' }
    ],
    workedExample: {
      problem: 'Solve the IVP: $x\\frac{dy}{dx} + 2y = 4x^2, \\quad y(1) = 3$',
      solution: [
        'Normalize by dividing by $x$: $\\frac{dy}{dx} + \\frac{2}{x}y = 4x$',
        'Compute integrating factor: $\\mu(x) = e^{\\int \\frac{2}{x}dx} = e^{2\\ln|x|} = x^2$',
        'Collapse LHS via reverse product rule: $\\frac{d}{dx}[x^2 y] = x^2 (4x) = 4x^3$',
        'Integrate both sides: $x^2 y = \\int 4x^3\\,dx = x^4 + C \\implies y(x) = x^2 + \\frac{C}{x^2}$',
        'Apply $y(1) = 3$: $3 = 1^2 + \\frac{C}{1^2} \\implies C = 2$. Solution: $y(x) = x^2 + \\frac{2}{x^2}$ on $(0, \\infty)$'
      ]
    },
    videoReview: {
      title: 'First Order Linear Differential Equations',
      channel: 'The Organic Chemistry Tutor',
      duration: '10 mins',
      youtubeId: 'Zs4p6fwTcao',
      url: 'https://www.youtube.com/watch?v=Zs4p6fwTcao',
      keyTakeaways: [
        'Writing in standard form y\' + P(x)y = Q(x) by dividing by any leading x-terms.',
        'Properly absorbing negative signs: e^{-2 ln x} = e^{ln(x⁻²)} = x⁻² = 1/x².',
        'Ensuring the integration constant +C is divided by the integrating factor μ(x).'
      ]
    },
    friendTip: 'If your integral ∫ P dx produces -n ln|x|, rewrite it as ln|x⁻ⁿ| so e^{ln|x⁻ⁿ|} = x⁻ⁿ = 1/xⁿ. Do not get stuck with e^{-n ln x}!',
    trapAlert: 'Writing y(x) = [1/μ(x)] ∫ μ(x)Q(x)dx + C without brackets is fatal. C must be divided by μ(x): y(x) = [∫ μ Q dx] / μ(x) + C / μ(x).'
  },
  {
    id: 'exact',
    name: '3. Exact Differential Equations (Potential Function)',
    standardForm: 'M(x,y)dx + N(x,y)dy = 0  where  ∂M/∂y = ∂N/∂x',
    formulaDisplay: '\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies \\Psi(x,y) = \\int M dx + g(y) = C',
    difficulty: 'med',
    diffLabel: 'Algorithmic Standard',
    visualCue: 'Given in differential form M dx + N dy = 0 with multiple coupled x and y variables.',
    fastestMove: 'Check ∂M/∂y and ∂N/∂x immediately. If equal, integrate M with respect to x treating y as constant, differentiate with respect to y, match with N to find g\'(y), and set Ψ(x,y) = C.',
    easiestVariant: 'Polynomial terms: (2xy)dx + (x² - 1)dy = 0. My = 2x, Nx = 2x.',
    hardestTrapVariant: 'Minus sign in differential form: M dx - N dy = 0. Students forget that N = - (expression) when differentiating with respect to x!',
    recipeSteps: [
      { title: 'Step 1: Test Clairaut Exactness', desc: 'Compute ∂M/∂y (treat x as constant) and ∂N/∂x (treat y as constant). State: "Since My = Nx, the ODE is exact."' },
      { title: 'Step 2: Integrate M with respect to x', desc: 'Ψ(x,y) = ∫ M(x,y) dx + g(y). Add arbitrary function g(y) instead of constant C.' },
      { title: 'Step 3: Differentiate by y & Equate to N', desc: '∂Ψ/∂y = ∂/∂y [∫ M dx] + g\'(y) = N(x,y). All x terms MUST cancel out cleanly!' },
      { title: 'Step 4: Integrate g\'(y) & Write Level Curve', desc: 'g(y) = ∫ g\'(y) dy. Final general solution is Ψ(x,y) = C.' }
    ],
    workedExample: {
      problem: 'Solve the differential equation: $(3x^2 + 2y)\\,dx + (2x + 4y^3)\\,dy = 0$',
      solution: [
        'Clairaut exactness test: $M_y = \\frac{\\partial}{\\partial y}(3x^2 + 2y) = 2$ and $N_x = \\frac{\\partial}{\\partial x}(2x + 4y^3) = 2$. Since $M_y = N_x$, the ODE is exact!',
        'Integrate $M$ with respect to $x$: $\\Psi(x,y) = \\int (3x^2 + 2y)\\,dx = x^3 + 2xy + g(y)$',
        'Differentiate by $y$ and equate to $N$: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g\'(y) = 2x + 4y^3 \\implies g\'(y) = 4y^3$',
        'Integrate $g\'(y)$: $g(y) = y^4$. Write implicit level curve family: $x^3 + 2xy + y^4 = C$'
      ]
    },
    videoReview: {
      title: 'Exact Differential Equations - Intro',
      channel: 'The Organic Chemistry Tutor',
      duration: '13 mins',
      youtubeId: 'qpPoI9gFF0g',
      url: 'https://www.youtube.com/watch?v=qpPoI9gFF0g',
      keyTakeaways: [
        'Computing partial derivatives ∂M/∂y and ∂N/∂x cleanly without mixing variables.',
        'Integrating M(x, y) with respect to x while carrying an arbitrary function of y: g(y).',
        'Differentiating the result with respect to y and setting it equal to N to isolate g\'(y).'
      ]
    },
    friendTip: 'If your g\'(y) still has any x terms inside it after step 3, STOP! You either made an error in ∂M/∂y or your integration of M dx was wrong.',
    trapAlert: 'Forgetting "= C" at the end. An exact ODE solution is the family of level curves Ψ(x,y) = C. Do not leave just Ψ(x,y) with no equation!'
  },
  {
    id: 'non_exact',
    name: '4. Non-Exact Equations (Special Integrating Factor)',
    standardForm: 'M dx + N dy = 0  where  My ≠ Nx',
    formulaDisplay: '\\frac{M_y - N_x}{N} = f(x) \\implies \\mu(x) = e^{\\int f(x)dx} \\quad \\text{or} \\quad \\frac{N_x - M_y}{M} = g(y) \\implies \\mu(y) = e^{\\int g(y)dy}',
    difficulty: 'hard',
    diffLabel: 'Hard / Curveball',
    visualCue: 'Differential form M dx + N dy = 0 fails the exactness test, but differences divide by N or M cleanly.',
    fastestMove: 'Memorize the numerator rule: "My Next Neighbor" = (My - Nx) / N. If that leaves ONLY x, μ = exp(∫ ... dx). If not, reverse: (Nx - My) / M. If that leaves ONLY y, μ = exp(∫ ... dy).',
    easiestVariant: '(2x² + y)dx + (x²y - x)dy = 0 ⟹ (My - Nx)/N = (1 - (2xy - 1))/(x(xy - 1)) = -2/x ⟹ μ(x) = 1/x².',
    hardestTrapVariant: 'Mixing up which term divides which. Remember: If dividing by N, differentiate with respect to x. If dividing by M, differentiate with respect to y.',
    recipeSteps: [
      { title: 'Step 1: Confirm Non-Exactness', desc: 'Show My ≠ Nx explicitly on your exam paper.' },
      { title: 'Step 2: Test Single-Variable Quotients', desc: 'Compute (My - Nx)/N. If x only, μ(x) = e^{∫ [(My-Nx)/N] dx}. If not, compute (Nx - My)/M for y only.' },
      { title: 'Step 3: Multiply Entire ODE by μ', desc: 'Form the new (μM) dx + (μN) dy = 0. Verify that (μM)y = (μN)x now holds!' },
      { title: 'Step 4: Solve as Standard Exact ODE', desc: 'Apply the standard potential function method to the transformed equation.' }
    ],
    workedExample: {
      problem: 'Solve the non-exact equation: $(2x^2 + y)\\,dx + (x^2 y - x)\\,dy = 0$',
      solution: [
        'Confirm non-exactness: $M_y = 1, \\; N_x = 2xy - 1 \\implies M_y \\ne N_x$',
        'Evaluate quotient: $\\frac{M_y - N_x}{N} = \\frac{1 - (2xy - 1)}{x(xy - 1)} = \\frac{2(1 - xy)}{x(xy - 1)} = -\\frac{2}{x}$ (pure function of $x$)',
        'Integrating factor: $\\mu(x) = e^{\\int -\\frac{2}{x}dx} = e^{-2\\ln|x|} = x^{-2} = \\frac{1}{x^2}$',
        'Multiply entire equation by $\\frac{1}{x^2}$: $\\left(2 + \\frac{y}{x^2}\\right)dx + \\left(y - \\frac{1}{x}\\right)dy = 0$',
        'Solve transformed exact equation: $\\Psi(x,y) = 2x - \\frac{y}{x} + \\frac{1}{2}y^2 = C$'
      ]
    },
    videoReview: {
      title: 'Non-Exact Differential Equations with Integrating Factor',
      channel: 'Engineer4Free',
      duration: '7 mins',
      youtubeId: 'g7_liJ3zgg4',
      url: 'https://www.youtube.com/watch?v=g7_liJ3zgg4',
      keyTakeaways: [
        'How to test whether (My - Nx)/N yields a single-variable function in x.',
        'The reverse rule: testing (Nx - My)/M when the first test fails to extract μ(y).',
        'Multiplying the original equation by μ(x) to guarantee exactness before finding Ψ(x, y).'
      ]
    },
    friendTip: 'Once you multiply by μ, always take 10 seconds to re-check ∂(μM)/∂y = ∂(μN)/∂x. If they match, you are 100% guaranteed full marks on the rest!',
    trapAlert: 'Forgetting to multiply BOTH M and N by the integrating factor μ before solving the potential function.'
  },
  {
    id: 'bernoulli',
    name: '5. Bernoulli Differential Equations',
    standardForm: 'dy/dx + P(x)y = Q(x)yⁿ  (n ≠ 0, 1)',
    formulaDisplay: 'u = y^{1-n} \\implies \\frac{du}{dx} + (1-n)P(x)u = (1-n)Q(x)',
    difficulty: 'med',
    diffLabel: 'Medium-Hard (Midterm Classic)',
    visualCue: 'Looks almost like a linear ODE: y\' + P(x)y, but the right-hand side has an extra factor of yⁿ (e.g. y², y⁴, y⁻¹).',
    fastestMove: '1. Divide whole equation by yⁿ: y⁻ⁿ y\' + P y^{1-n} = Q.  2. Let u = y^{1-n}.  3. Notice u\' = (1-n) y⁻ⁿ y\'.  4. Multiply equation by (1-n) to produce standard linear in u!',
    easiestVariant: 'y\' + 2xy = -xy⁴ ⟹ n = 4 ⟹ u = y^{1-4} = y⁻³. Linear equation: u\' - 6xu = 3x.',
    hardestTrapVariant: 'Forgetting to multiply Q(x) by (1-n) when substituting! If n = 4, 1-n = -3. You must multiply EVERY term by -3.',
    recipeSteps: [
      { title: 'Step 1: Identify Power n', desc: 'Locate yⁿ on the RHS. State n clearly (e.g. n = 4).' },
      { title: 'Step 2: Divide by yⁿ', desc: 'Write y⁻ⁿ dy/dx + P(x) y^{1-n} = Q(x).' },
      { title: 'Step 3: Linearizing Substitution', desc: 'Set u = y^{1-n} ⟹ du/dx = (1-n) y⁻ⁿ (dy/dx). Substitute to obtain du/dx + (1-n)P(x)u = (1-n)Q(x).' },
      { title: 'Step 4: Solve Linear ODE for u(x)', desc: 'Use integrating factor μ = exp(∫ (1-n)P dx). Solve for u(x).' },
      { title: 'Step 5: Back-Substitute y = u^{1/(1-n)}', desc: 'Invert u = y^{1-n} to express the final answer in terms of y.' }
    ],
    workedExample: {
      problem: 'Solve the Bernoulli equation: $x\\frac{dy}{dx} + y = x^2 y^2$',
      solution: [
        'Divide whole equation by $x y^2$: $y^{-2}\\frac{dy}{dx} + \\frac{1}{x}y^{-1} = x$',
        'Set $u = y^{1-2} = y^{-1} \\implies \\frac{du}{dx} = -y^{-2}\\frac{dy}{dx}$. Multiply by $-1$: $\\frac{du}{dx} - \\frac{1}{x}u = -x$',
        'Integrating factor: $\\mu(x) = e^{\\int -\\frac{1}{x}dx} = \\frac{1}{x}$. Collapse: $\\frac{d}{dx}\\left[\\frac{u}{x}\\right] = \\frac{1}{x}(-x) = -1$',
        'Integrate: $\\frac{u}{x} = -x + C \\implies u(x) = Cx - x^2$',
        'Back-substitute $y = u^{-1}$: $y(x) = \\frac{1}{Cx - x^2}$'
      ]
    },
    videoReview: {
      title: 'Bernoulli Differential Equations',
      channel: 'The Organic Chemistry Tutor',
      duration: '12 mins',
      youtubeId: 'BoI_ej-T0V4',
      url: 'https://www.youtube.com/watch?v=BoI_ej-T0V4',
      keyTakeaways: [
        'Dividing through by yⁿ to prepare the linear substitution u = y^{1-n}.',
        'Multiplying the entire equation by (1-n) to produce standard unit derivative du/dx.',
        'Solving the resulting linear equation for u(x) and inverting back to y(x).'
      ]
    },
    friendTip: 'If n is negative (e.g. y\' + P y = Q / y), remember 1 - (-1) = 2. So u = y².',
    trapAlert: 'Leaving your final answer in terms of u! The question asked for y(x). Always back-substitute y = u^{1/(1-n)}.'
  },
  {
    id: 'homogeneous',
    name: '6. Homogeneous Equations (Degree Matching)',
    standardForm: 'dy/dx = g(y/x)  or  M(x,y)dx + N(x,y)dy = 0 (same degree k)',
    formulaDisplay: 'y = u \\cdot x \\implies \\frac{dy}{dx} = u + x\\frac{du}{dx} \\implies x\\frac{du}{dx} = g(u) - u',
    difficulty: 'hard',
    diffLabel: 'Algebra-Heavy',
    visualCue: 'Every term has the exact same total algebraic power (e.g. x², xy, y² are all degree 2). Or variables only appear in the ratio y/x.',
    fastestMove: 'Substitute y = u · x and dy/dx = u + x(du/dx). The x will cancel out completely, turning the equation into a separable ODE for u and x.',
    easiestVariant: 'dy/dx = (y/x) + (y/x)² ⟹ u + x u\' = u + u² ⟹ x u\' = u² ⟹ du/u² = dx/x.',
    hardestTrapVariant: 'Fraction algebra after separation: [1 / (g(u) - u)] du = dx/x often requires partial fraction decomposition or trig substitution.',
    recipeSteps: [
      { title: 'Step 1: Check Homogeneity', desc: 'Test M(tx, ty) = t^k M(x,y) and N(tx, ty) = t^k N(x,y). Confirm degree k matches.' },
      { title: 'Step 2: Substitution y = ux', desc: 'Write y = ux ⟹ dy/dx = u + x(du/dx). Replace all y/x with u.' },
      { title: 'Step 3: Separate Variables', desc: 'x(du/dx) = g(u) - u ⟹ [1 / (g(u) - u)] du = dx/x.' },
      { title: 'Step 4: Integrate & Back-Substitute u = y/x', desc: 'Integrate both sides, add +C, and replace u with y/x.' }
    ],
    workedExample: {
      problem: 'Solve the homogeneous equation: $(x^2 + y^2)\\,dx - 2xy\\,dy = 0$',
      solution: [
        'Check degree: each term is degree 2. Substitute $y = ux \\implies dy = u\\,dx + x\\,du$',
        '$(x^2 + u^2 x^2)dx - 2x(ux)(u\\,dx + x\\,du) = 0$',
        'Divide by $x^2$: $(1 + u^2)dx - 2u^2 dx - 2ux\\,du = 0 \\implies (1 - u^2)dx = 2ux\\,du$',
        'Separate variables: $\\frac{dx}{x} = \\frac{2u}{1 - u^2}du \\implies \\ln|x| = -\\ln|1 - u^2| + C_1 \\implies x(1 - u^2) = C$',
        'Back-substitute $u = y/x$: $x\\left(1 - \\frac{y^2}{x^2}\\right) = C \\implies x^2 - y^2 = Cx$'
      ]
    },
    videoReview: {
      title: 'Homogeneous Differential Equations',
      channel: 'The Organic Chemistry Tutor',
      duration: '13 mins',
      youtubeId: 'uI2xt8nTOlQ',
      url: 'https://www.youtube.com/watch?v=uI2xt8nTOlQ',
      keyTakeaways: [
        'Recognizing identical total algebraic degrees in polynomials (e.g. x² + y² over xy).',
        'Applying the product rule correctly to y = ux: dy/dx = u + x(du/dx).',
        'Separating the resulting u and x variables and back-substituting u = y/x.'
      ]
    },
    friendTip: 'If an equation has terms like x³ + y³, x²y, xy², they are all degree 3. Dividing numerator and denominator by x³ immediately reveals the g(y/x) structure!',
    trapAlert: 'Forgetting the product rule when differentiating y = ux. dy/dx is NOT just u(du/dx); it is u + x(du/dx).'
  },
  {
    id: 'linear_arg',
    name: '7. Reduction to Separable (Linear Argument)',
    standardForm: 'dy/dx = f(Ax + By + C)  (B ≠ 0)',
    formulaDisplay: 'u = Ax + By + C \\implies \\frac{du}{dx} = A + B f(u) \\implies \\int \\frac{du}{A + B f(u)} = \\int dx',
    difficulty: 'easy',
    diffLabel: 'Fast Trick (Secret Weapon)',
    visualCue: 'The variables x and y only appear bundled together as a linear line Ax + By + C inside a power, trig, or root function (e.g. cos(x+y), (2x+y-3)², √(x+y)).',
    fastestMove: 'Set u = Ax + By + C. Differentiate: du/dx = A + B(dy/dx). Substitute dy/dx = f(u), separate immediately: du / [A + B f(u)] = dx.',
    easiestVariant: 'dy/dx = (x + y)² ⟹ u = x + y ⟹ du/dx = 1 + u² ⟹ du/(1+u²) = dx ⟹ arctan(u) = x + C ⟹ y = tan(x+C) - x.',
    hardestTrapVariant: 'Forgetting to account for coefficient B when taking the derivative (e.g. if u = 2x - 3y, du/dx = 2 - 3 y\').',
    recipeSteps: [
      { title: 'Step 1: Set u = Ax + By + C', desc: 'Identify the bundled linear expression.' },
      { title: 'Step 2: Differentiate with respect to x', desc: 'du/dx = A + B(dy/dx) ⟹ dy/dx = (1/B)(du/dx - A).' },
      { title: 'Step 3: Substitute & Separate', desc: '(1/B)(du/dx - A) = f(u) ⟹ du/dx = A + B f(u) ⟹ du / [A + B f(u)] = dx.' },
      { title: 'Step 4: Integrate and Back-Substitute', desc: 'Evaluate integrals and replace u with Ax + By + C.' }
    ],
    workedExample: {
      problem: 'Solve the differential equation: $\\frac{dy}{dx} = (x + y + 2)^2$',
      solution: [
        'Substitute linear argument $u = x + y + 2 \\implies \\frac{du}{dx} = 1 + \\frac{dy}{dx} \\implies \\frac{dy}{dx} = \\frac{du}{dx} - 1$',
        'Substitute into ODE: $\\frac{du}{dx} - 1 = u^2 \\implies \\frac{du}{dx} = u^2 + 1$',
        'Separate: $\\frac{du}{u^2 + 1} = dx \\implies \\arctan(u) = x + C$',
        'Invert: $u = \\tan(x + C) \\implies x + y + 2 = \\tan(x + C) \\implies y(x) = \\tan(x + C) - x - 2$'
      ]
    },
    videoReview: {
      title: 'Differential Equations by Linear Substitution',
      channel: 'BlackPenRedPen',
      duration: '6 mins',
      youtubeId: 'k-a1o2K_gLw',
      url: 'https://www.youtube.com/watch?v=k-a1o2K_gLw',
      keyTakeaways: [
        'Spotting packaged linear expressions Ax + By inside powers or trigonometric arguments.',
        'Substituting du/dx = A + B(dy/dx) to eliminate both x and y simultaneously.',
        'Integrating via clean standard forms like arctan(u) or tanh(u).'
      ]
    },
    friendTip: 'Whenever you see (x + y)² or sin(x + y), it is NEVER separable as written. Use this substitution and it separates in exactly ONE line!',
    trapAlert: 'Trying to expand (Ax+By+C)³ into a giant polynomial. Don\'t do it! Keep it packaged as u.'
  },
  {
    id: 'second_order',
    name: '8. 2nd-Order Homogeneous Linear (Constant Coeffs)',
    standardForm: 'a y\'\' + b y\' + c y = 0',
    formulaDisplay: 'a r^2 + b r + c = 0 \\implies r = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    difficulty: 'easy',
    diffLabel: 'High Frequency (Midterm 2)',
    visualCue: 'Second derivative y\'\' with constant coefficients a, b, c and 0 on the right-hand side.',
    fastestMove: 'Write characteristic equation a r² + b r + c = 0. Solve for roots r. Check the discriminant Δ = b² - 4ac.',
    easiestVariant: 'Real distinct roots: r = 2, -3 ⟹ y = C₁ e^{2x} + C₂ e^{-3x}.',
    hardestTrapVariant: 'Repeated roots: students write y = C₁ e^{rx} + C₂ e^{rx} (WRONG: linearly dependent!). You MUST multiply the second solution by x: y = C₁ e^{rx} + C₂ x e^{rx}. Complex roots: α ± iβ ⟹ e^{α x}[C₁ cos(βx) + C₂ sin(βx)].',
    recipeSteps: [
      { title: 'Step 1: Characteristic Equation', desc: 'Substitute y = e^{rx} to get a r² + b r + c = 0.' },
      { title: 'Step 2: Solve Roots', desc: 'Use factoring or quadratic formula to find r₁, r₂.' },
      { title: 'Step 3: Build General Solution', desc: 'Case 1 (Real distinct): y = C₁ e^{r₁ x} + C₂ e^{r₂ x}. Case 2 (Repeated): y = (C₁ + C₂ x)e^{rx}. Case 3 (Complex α±iβ): y = e^{α x}(C₁ cos βx + C₂ sin βx).' }
    ],
    workedExample: {
      problem: 'Solve the initial value problem: $y\'\' - 4y\' + 13y = 0, \\quad y(0) = 2, \\; y\'(0) = 1$',
      solution: [
        'Characteristic equation: $r^2 - 4r + 13 = 0 \\implies r = \\frac{4 \\pm \\sqrt{16 - 52}}{2} = 2 \\pm 3i$',
        'Complex roots $\\alpha = 2, \\beta = 3$: $y(x) = e^{2x}(C_1 \\cos 3x + C_2 \\sin 3x)$',
        'Apply $y(0) = 2$: $2 = e^0 (C_1 (1) + 0) \\implies C_1 = 2$',
        'Differentiate via product rule: $y\'(x) = 2e^{2x}(2\\cos 3x + C_2 \\sin 3x) + e^{2x}(-6\\sin 3x + 3C_2 \\cos 3x)$',
        'Apply $y\'(0) = 1$: $1 = 2(2) + 3C_2 = 4 + 3C_2 \\implies C_2 = -1$. Final: $y(x) = e^{2x}(2\\cos 3x - \\sin 3x)$'
      ]
    },
    videoReview: {
      title: 'Second Order Linear Homogeneous Differential Equations',
      channel: 'The Organic Chemistry Tutor',
      duration: '14 mins',
      youtubeId: 'uI2xt8nTOlQ',
      url: 'https://www.youtube.com/watch?v=uI2xt8nTOlQ',
      keyTakeaways: [
        'Constructing the auxiliary/characteristic equation ar² + br + c = 0.',
        'Case 1: distinct real roots vs. Case 2: repeated roots requiring the x e^{rx} multiplier.',
        'Case 3: complex roots α ± iβ yielding exponential decay/growth modulated by sine and cosine.'
      ]
    },
    friendTip: 'If solving an IVP with y(0) and y\'(0), evaluate y(0) first to get C₁, then differentiate y(x) using product rule before plugging in y\'(0).',
    trapAlert: 'In complex roots α ± iβ, the exponential power is α, NOT β. The β goes inside cos(βx) and sin(βx).'
  }
];

// ----------------------------------------------------
// 2. DATA: Calculus Survival Vault (Zero Formula Sheet)
// ----------------------------------------------------
export interface FormulaItem {
  id: string;
  category: 'deriv' | 'integral' | 'pillar';
  name: string;
  latex: string;
  difficulty: 'easy' | 'med' | 'hard';
  whyItMatters: string;
}

const CALCULUS_VAULT: FormulaItem[] = [
  {
    id: 'f1',
    category: 'integral',
    name: 'Logarithmic Quotient Shortcut (#1 in ODEs!)',
    latex: '\\int \\frac{g\'(x)}{g(x)}dx = \\ln|g(x)| + C',
    difficulty: 'easy',
    whyItMatters: 'Appears in almost EVERY separable and integrating factor problem. If the numerator is proportional to the derivative of the denominator, write ln immediately without a full u-sub!'
  },
  {
    id: 'f2',
    category: 'integral',
    name: 'Standard Arctangent Integral',
    latex: '\\int \\frac{1}{x^2 + a^2}dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C',
    difficulty: 'med',
    whyItMatters: 'Essential for completing the square in 1st-order separable IVPs and 2nd-order characteristic equations with complex roots.'
  },
  {
    id: 'f3',
    category: 'integral',
    name: 'Standard Arcsine Integral',
    latex: '\\int \\frac{1}{\\sqrt{a^2 - x^2}}dx = \\arcsin\\left(\\frac{x}{a}\\right) + C',
    difficulty: 'med',
    whyItMatters: 'Notice: there is NO 1/a in front of arcsin! (Unlike arctan which has 1/a). Top exam memory trap.'
  },
  {
    id: 'f4',
    category: 'integral',
    name: 'Tangent Antiderivative',
    latex: '\\int \\tan(x)dx = \\ln|\\sec(x)| + C = -\\ln|\\cos(x)| + C',
    difficulty: 'easy',
    whyItMatters: 'Appears frequently as P(x) in linear equations: y\' + tan(x)y = cos²(x) ⟹ μ(x) = e^{∫ tan x dx} = e^{ln|sec x|} = sec(x).'
  },
  {
    id: 'f5',
    category: 'integral',
    name: 'Secant Antiderivative',
    latex: '\\int \\sec(x)dx = \\ln|\\sec(x) + \\tan(x)| + C',
    difficulty: 'hard',
    whyItMatters: 'Required for Variation of Parameters in y\'\' + y = sec(x). You cannot deduce this on the fly under exam pressure; memorize it!'
  },
  {
    id: 'f6',
    category: 'integral',
    name: 'Hyperbolicdenomiator Inversion (Difference of Squares)',
    latex: '\\int \\frac{1}{a^2 - u^2}du = \\frac{1}{2a}\\ln\\left|\\frac{a + u}{a - u}\\right| + C = \\frac{1}{a}\\tanh^{-1}\\left(\\frac{u}{a}\\right) + C',
    difficulty: 'hard',
    whyItMatters: 'Arises instantly in terminal velocity ODEs (dv/dt = g - k v²) and linear argument models. Saves 3 minutes of partial fraction algebra.'
  },
  {
    id: 'f7',
    category: 'deriv',
    name: 'Product Rule (Reverse for Integrating Factor)',
    latex: '\\frac{d}{dx}[\\mu(x) \\cdot y(x)] = \\mu(x) \\frac{dy}{dx} + \\mu\'(x) y(x)',
    difficulty: 'easy',
    whyItMatters: 'The entire justification of the integrating factor method. Once multiplied by μ, the LHS collapses to d/dx [μ y].'
  },
  {
    id: 'f8',
    category: 'pillar',
    name: 'Tabular Integration by Parts (DI Method)',
    latex: '\\int u \\, v\' \\, dx = u v - \\int u\' v \\, dx',
    difficulty: 'med',
    whyItMatters: 'Used in nonhomogeneous 2nd-order ODEs and integrating factors when Q(x) is x² e^{3x} or x sin(2x). Do not set up multiple lines of u and dv; use the 2-column D and I ladder!'
  },
  {
    id: 'f9',
    category: 'pillar',
    name: 'Heaviside Cover-Up Rule for Partial Fractions',
    latex: '\\frac{P(x)}{(x - a)(x - b)} = \\frac{P(a)/(a-b)}{x - a} + \\frac{P(b)/(b-a)}{x - b}',
    difficulty: 'easy',
    whyItMatters: 'Solves coefficients A and B in 10 seconds flat by covering the pole with your thumb. Avoids solving 2x2 linear systems entirely.'
  }
];

// AI Formula Diagnostic Data
export interface AiFormulaAdvice {
  id: string;
  name: string;
  mnemonic: string;
  examUtility: string;
  trapToAvoid: string;
  drillQuestionId: string;
}

const AI_FORMULA_ADVICE: Record<string, AiFormulaAdvice> = {
  f4: {
    id: 'f4',
    name: '∫ tan(x) dx = ln|sec(x)|',
    mnemonic: 'Think "Tan-Sec": tangent integrates into the logarithm of secant! If you write -ln|cos(x)|, the negative sign flips into the exponent cos(x)⁻¹ = sec(x).',
    examUtility: 'Frequently handed as P(x) in linear equations: y\' + tan(x)y = cos²(x). The integrating factor collapses instantly: μ(x) = exp(ln|sec x|) = sec(x).',
    trapToAvoid: 'Dropping the absolute value bars or confusing derivative (sec² x) with antiderivative (ln|sec x|).',
    drillQuestionId: 'dq_formula_tan'
  },
  f5: {
    id: 'f5',
    name: '∫ sec(x) dx = ln|sec(x) + tan(x)|',
    mnemonic: 'Secant integrates into the log of its SUM with tangent: ln|sec + tan|.',
    examUtility: 'Standard Concordia test question in Variation of Parameters: y\'\' + y = sec(x).',
    trapToAvoid: 'Trying to evaluate this via u-substitution during the exam. Memorize it like your phone number.',
    drillQuestionId: 'dq_formula_sec'
  },
  f2: {
    id: 'f2',
    name: '∫ 1/(x² + a²) dx = (1/a) arctan(x/a)',
    mnemonic: 'Plus sign = arctan! Notice the leading (1/a) out front!',
    examUtility: 'Appears whenever completing the square on quadratic denominators like x² + 4x + 13.',
    trapToAvoid: 'Forgetting the factor 1/a. Writing arctan(x/a) without dividing by a loses 2 marks.',
    drillQuestionId: 'dq_formula_arctan'
  },
  f9: {
    id: 'f9',
    name: 'Heaviside Cover-Up Rule',
    mnemonic: 'Cover the root factor with your thumb, evaluate the rest at that root. Instant coefficient!',
    examUtility: 'Turns a 4-minute linear algebra system into a 15-second inspection on separable and PFD problems.',
    trapToAvoid: 'Only valid for non-repeated linear factors (x - a). For repeated (x - a)², use standard matching.',
    drillQuestionId: 'dq_hack_heaviside'
  }
};

// ----------------------------------------------------
// 3. DATA: Tutor's Secret Weapons & Speed-Hacks
// ----------------------------------------------------
export interface TutorHack {
  id: string;
  badge: string;
  title: string;
  latex?: string;
  sourceRef: string;
  explanation: string;
  exampleProblem: string;
  keyRule: string;
  standardMinutes: string;
  hackSeconds: string;
  longMethodText: string;
  hackMethodText: string;
  proof: string;
  drillQuestionId: string;
}

const TUTOR_HACKS: TutorHack[] = [
  {
    id: 'th1',
    badge: 'Forensic Modeling Shortcut',
    title: 'Newton’s Law 3-Point Shortcut (Cancel Tm²)',
    latex: '(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2',
    sourceRef: 'Tutor Notes Page 35',
    explanation: 'When 3 temperatures are recorded at equal time steps (e.g. t = 0, 0.5, 1.0 min with T = 70°, 110°, 145°), never solve for decay constant k. Equating ratios and cross-multiplying cancels Tm² on both sides, yielding a simple linear equation for ambient oven temperature Tm in 30 seconds!',
    exampleProblem: '(145 - Tm)(70 - Tm) = (110 - Tm)² ⟹ 10150 - 215 Tm + Tm² = 12100 - 220 Tm + Tm² ⟹ 5 Tm = 1950 ⟹ Tm = 390°F.',
    keyRule: 'Strictly valid when time intervals are equal: Δt₁ = Δt₂. Cross-multiply and cancel the quadratic terms immediately.',
    standardMinutes: '12–15 Minutes',
    hackSeconds: '30 Seconds',
    longMethodText: 'Solve T(t) = Tm + (T0 - Tm)e^{-kt}. Form two non-linear equations for k and Tm. Take natural logarithms, substitute ratios of exponentials, and solve algebraically through transcendental terms.',
    hackMethodText: 'Because Δt is identical, e^{-k(2Δt)} = (e^{-kΔt})². Therefore (T3 - Tm)/(T2 - Tm) = (T2 - Tm)/(T1 - Tm). Cross-multiply: the Tm² terms cancel instantly into a 1-variable linear equation!',
    proof: 'Let r = e^{-kΔt}. Then T₁ - Tm = C, T₂ - Tm = Cr, T₃ - Tm = C r². Notice (T₁ - Tm)(T₃ - Tm) = C · C r² = (Cr)² = (T₂ - Tm)². Q.E.D.',
    drillQuestionId: 'dq_hack_newton'
  },
  {
    id: 'th2',
    badge: 'Linear Argument Shortcut',
    title: 'Hyperbolic Tangent Closed-Form Inversion',
    latex: 'u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}} = 2\\tanh(2x)',
    sourceRef: 'Tutor Notes Page 32',
    explanation: 'In y\' - (4x - y + 1)² = 0, substituting u = 4x - y + 1 yields du/(u² - 4) = -dx. This separates into (u - 2)/(u + 2) = -e^{-4x}. Instead of doing messy fraction divisions, recognize the definition of tanh(w) = (1 - e^{-2w}) / (1 + e^{-2w}). It collapses directly into 2 tanh(2x), giving y(x) = 4x + 1 - 2 tanh(2x) with zero calculation errors.',
    exampleProblem: 'y(x) = 4x + 1 - 2\\tanh(2x). Verified: at x = 0, y(0) = 4(0) + 1 - 2 tanh(0) = 1.',
    keyRule: 'Whenever (u - a)/(u + a) = -e^{-2ax}, the solution is always u(x) = a tanh(ax).',
    standardMinutes: '10 Minutes',
    hackSeconds: '45 Seconds',
    longMethodText: 'Separate variables, compute partial fraction decomposition 1/(u-2)(u+2) = 1/4 [1/(u-2) - 1/(u+2)], integrate to logarithms, exponentiate, clear fractional denominators, and invert algebraically.',
    hackMethodText: 'Directly invoke the hyperbolic tangent identity tanh(z) = (e^z - e^{-z})/(e^z + e^{-z}) = (1 - e^{-2z})/(1 + e^{-2z}). Invert in one line.',
    proof: 'u - a = -e^{-2ax}(u + a) ⟹ u(1 + e^{-2ax}) = a(1 - e^{-2ax}) ⟹ u = a (1 - e^{-2ax})/(1 + e^{-2ax}) = a tanh(ax).',
    drillQuestionId: 'dq_linear_arg_1'
  },
  {
    id: 'th3',
    badge: 'Mixing Tank Shortcut',
    title: 'Time-Varying Volume Integrating Factor Shortcut',
    latex: 'V(t) = V_0 + (r_{\\text{in}} - r_{\\text{out}})t \\implies \\mu(t) = (V_0 + \\Delta r \\cdot t)^{-r_{\\text{out}}/\\Delta r}',
    sourceRef: 'Tutor Notes Page 39',
    explanation: 'When inflow rate rin ≠ outflow rate rout, volume is not constant: V(t) = 100 - t. The linear term P(t) = rout / (V_0 + Δr · t). Integrating P(t) produces a clean natural log: (rout / Δr) ln(V_0 + Δr · t). The integrating factor is a pure algebraic power without any exponentials remaining!',
    exampleProblem: 'V_0 = 100, rin = 4, rout = 5 ⟹ Δr = -1. P(t) = 5/(100-t) ⟹ μ(t) = (100 - t)⁻⁵.',
    keyRule: 'The tank empties when V(t) = 0. Never evaluate your solution beyond the emptying time!',
    standardMinutes: '8 Minutes',
    hackSeconds: '20 Seconds',
    longMethodText: 'Derive volume function, set up differential equation dA/dt + (rout/V(t))A = rin cin, integrate P(t) by substitution u = 100 - t with du = -dt, simplify exp of ln.',
    hackMethodText: 'Direct power rule: μ(t) = (V₀ + Δr t)^{-rout / Δr}. For Δr = -1 and rout = 5, power is -5/(-1) = 5 with negative inner derivative, yielding μ(t) = (100 - t)⁻⁵.',
    proof: '∫ [rout / (V₀ + Δr t)] dt = (rout / Δr) ln(V₀ + Δr t). Then exp(ln(...)) = (V₀ + Δr t)^{rout / Δr}. With Δr < 0, absorbing sign yields (V₀ - |Δr|t)^{-rout/|Δr|}.',
    drillQuestionId: 'dq_hack_tank'
  },
  {
    id: 'th4',
    badge: 'Logarithm Absorption',
    title: 'Negative Sign Absorption in Integrating Factors',
    latex: 'P(x) = -\\frac{k}{x} \\implies \\int P dx = -k\\ln x = \\ln(x^{-k}) \\implies \\mu(x) = x^{-k} = \\frac{1}{x^k}',
    sourceRef: 'Tutor Notes Page 7 & 11',
    explanation: 'Students lose 5 to 10 marks on midterms by writing e^{-3 ln x} = -x³ or e^{-3 ln x} = x³. The negative sign must be absorbed into the logarithm as a power first: e^{ln(x⁻³)} = x⁻³ = 1/x³.',
    exampleProblem: 'y\' - (3/x)y = x² ⟹ μ(x) = 1/x³. Then (d/dx)[y / x³] = 1/x ⟹ y/x³ = ln|x| + C ⟹ y = x³(ln|x| + C).',
    keyRule: 'Always absorb leading numbers and negative signs into the log exponent before applying e^{ln(...)}.',
    standardMinutes: '5 Minutes',
    hackSeconds: '15 Seconds',
    longMethodText: 'Writing intermediate exponent rules, splitting into e^{-1} · e^{3 ln x}, making algebraic errors.',
    hackMethodText: 'Immediate rule: -k ln(x) = ln(x^{-k}). The exp and ln cancel: μ(x) = 1 / x^k.',
    proof: 'exp(-k ln x) = exp(ln(x^{-k})) = x^{-k} = 1/x^k by inverse function identity exp(ln u) = u.',
    drillQuestionId: 'dq_linear_1'
  },
  {
    id: 'th5',
    badge: 'Partial Fractions Hack',
    title: 'Heaviside Cover-Up Rule (15 Seconds)',
    latex: '\\frac{P(x)}{(x - a)(x - b)} = \\frac{P(a)/(a-b)}{x - a} + \\frac{P(b)/(b-a)}{x - b}',
    sourceRef: 'Tutor Notes Page 9 & 19',
    explanation: 'To find the coefficient of 1/(x-a), cover up (x-a) with your thumb and evaluate the rest of the fraction at x = a. No common denominators, no system of equations, 100% foolproof.',
    exampleProblem: '1/[(u-2)(u+2)] = A/(u-2) + B/(u+2). Cover (u-2), set u=2: A = 1/(2+2) = 1/4. Cover (u+2), set u=-2: B = 1/(-2-2) = -1/4.',
    keyRule: 'Applies to any non-repeated linear factors in separable and partial fraction problems.',
    standardMinutes: '6 Minutes',
    hackSeconds: '15 Seconds',
    longMethodText: 'Write A/(x-a) + B/(x-b), find common denominator, expand numerator A(x-b) + B(x-a), equate coefficients to constant and x, solve system of 2 equations.',
    hackMethodText: 'Multiply both sides by (x-a) and set x = a. The (x-b) term on RHS vanishes, directly isolating A = P(a)/(a-b).',
    proof: 'Multiply P(x)/[(x-a)Q(x)] by (x-a): P(x)/Q(x) = A + (x-a)[B/...]. Taking limit as x → a gives A = P(a)/Q(a).',
    drillQuestionId: 'dq_hack_heaviside'
  },
  {
    id: 'th6',
    badge: 'Homogeneous Testing',
    title: 'Polynomial Degree Matching Test',
    latex: 'M(tx, ty) = t^k M(x, y) \\quad \\text{and} \\quad N(tx, ty) = t^k N(x, y)',
    sourceRef: 'Tutor Notes Page 23',
    explanation: 'In (x - y)dx + x dy = 0, both coefficients are homogeneous of degree 1. Substituting y = ux and dy = u dx + x du immediately reduces the equation to x dx + x² du = 0 ⟹ (1/x)dx + du = 0, solving in 3 lines: y(x) = x(C - ln|x|).',
    exampleProblem: 'In (x³ + y³)dx + (3xy²)dy = 0, each monomial has degree 3. Dividing by x³ yields (1 + u³)dx + 3u²(u dx + x du) = 0.',
    keyRule: 'Always divide through by x^k to verify that the equation is solely a function of u = y/x.',
    standardMinutes: '8 Minutes',
    hackSeconds: '30 Seconds',
    longMethodText: 'Testing dy/dx derivatives, attempting separation, checking exactness test My and Nx (which fails), testing integrating factor formulas.',
    hackMethodText: 'Count exponents: if every term has sum of exponents equal to k (e.g. x², y², xy all equal 2), invoke y = ux immediately!',
    proof: 'M(x, y)/N(x, y) = [x^k M(1, y/x)] / [x^k N(1, y/x)] = g(y/x). Thus dy/dx depends solely on ratio y/x.',
    drillQuestionId: 'dq_homog_1'
  }
];

// ----------------------------------------------------
// 4. DATA: Unofficial Extracted Past Midterm Exam Papers
// ----------------------------------------------------
interface UnofficialExamFile {
  title: string;
  year: string;
  filename: string;
  relativePath: string;
  scope: string;
}

const UNOFFICIAL_MIDTERMS: UnofficialExamFile[] = [
  {
    title: 'Fall 2018 Midterm Examination (Unofficial)',
    year: 'Fall 2018',
    filename: '2018 Fall Problems.pdf',
    relativePath: 'Engr 213/Midterm/2018 Fall Problems.pdf',
    scope: 'Separable IVP, Bernoulli ODE, Exact Potential Function, Homogeneous IVP, Bacterial Kinetics'
  },
  {
    title: 'Winter 2017 Midterm Examination - Sec 1 (Unofficial)',
    year: 'Winter 2017',
    filename: '2017 Winter 1.pdf',
    relativePath: 'Engr 213/Midterm/2017 Winter 1.pdf',
    scope: '1st Order Linear Integrating Factor, Exact Differential Equations, Tank Mixture, Phase Line'
  },
  {
    title: 'Winter 2017 Midterm Examination - Sec 2 (Unofficial)',
    year: 'Winter 2017',
    filename: '2017 Winter 2.pdf',
    relativePath: 'Engr 213/Midterm/2017 Winter 2.pdf',
    scope: 'Bernoulli Equations, Orthogonal Trajectories, Reduction to Separable, Wronskian Test'
  },
  {
    title: 'Winter 2016 Midterm Examination - Ver A (Unofficial)',
    year: 'Winter 2016',
    filename: '2016 Winter Version A.pdf',
    relativePath: 'Engr 213/Midterm/2016 Winter Version A.pdf',
    scope: 'Trig Linear Independence, 4th-Order Linear ODE, Resonant Undetermined Coeffs, Cauchy-Euler'
  },
  {
    title: 'Winter 2016 Midterm Examination - Ver B (Unofficial)',
    year: 'Winter 2016',
    filename: '2016 Winter Version B.pdf',
    relativePath: 'Engr 213/Midterm/2016 Winter Version B.pdf',
    scope: 'Polynomial Basis Independence, Inhomogeneous 2nd Order Exponential, Variation of Parameters'
  },
  {
    title: 'Sample Midterm Examination (Unofficial Practice)',
    year: 'Sample Midterm',
    filename: 'Sample Midterm.pdf',
    relativePath: 'Engr 213/Midterm/Sample Midterm.pdf',
    scope: 'Student Practice Exam: Complete 5-problem comprehensive blueprint'
  },
  {
    title: 'Winter 2013 Midterm Examination (Unofficial)',
    year: 'Winter 2013',
    filename: '2013 Winter Problems.pdf',
    relativePath: 'Engr 213/Midterm/2013 Winter Problems.pdf',
    scope: 'First-Order Linear IVPs, Non-Exact Integrating Factor, Newton Cooling, Characteristic Roots'
  },
  {
    title: 'Fall 2012 Midterm Examination (Unofficial)',
    year: 'Fall 2012',
    filename: '2012 Fall Problems.pdf',
    relativePath: 'Engr 213/Midterm/2012 Fall Problems.pdf',
    scope: 'Homogeneous Ratio Substitution, Exactness, Mixing Tank Volume Variations'
  },
  {
    title: 'Fall 2011 Midterm Examination (Unofficial)',
    year: 'Fall 2011',
    filename: '2011 Fall Problems.pdf',
    relativePath: 'Engr 213/Midterm/2011 Fall Problems.pdf',
    scope: 'Initial Value Problems, Maximal Intervals of Definition, Linear Circuit Models'
  }
];

// ----------------------------------------------------
// 5. DATA: Comprehensive Interactive Brain Drill Questions
// ----------------------------------------------------
export interface CompanionDrillQuestion extends PracticeQuestion {
  methodId: 'separable' | 'linear_if' | 'exact' | 'non_exact' | 'bernoulli' | 'homogeneous' | 'linear_arg' | 'second_order' | 'tutor_hacks' | 'formulas';
}

const COMPANION_DRILL_QUESTIONS: CompanionDrillQuestion[] = [
  {
    id: 'dq_sep_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'separable',
    topic: 'Separable IVP · Negative Root Selection',
    difficulty: 'Midterm Level',
    question: 'Solve the initial value problem: $\\frac{dy}{dx} = \\frac{2x}{y}, \\quad y(0) = -3$. What is the explicit solution $y(x)$?',
    options: [
      '$y(x) = -\\sqrt{2x^2 + 9}$',
      '$y(x) = \\sqrt{2x^2 + 9}$',
      '$y(x) = -\\sqrt{x^2 + 9}$',
      '$y(x) = -2x - 3$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Cross-multiplying separates variables: $y\\,dy = 2x\\,dx$. Integrating yields $\\frac{1}{2}y^2 = x^2 + C$. The initial condition selects the negative branch.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Separate variables', math: 'y\\,dy = 2x\\,dx' },
        { title: 'Step 2: Integrate both sides', math: '\\int y\\,dy = \\int 2x\\,dx \\implies \\frac{1}{2}y^2 = x^2 + C_1 \\implies y^2 = 2x^2 + C' },
        { title: 'Step 3: Plug in initial condition $x = 0, y = -3$', math: '(-3)^2 = 2(0)^2 + C \\implies 9 = C' },
        { title: 'Step 4: Branch selection from initial condition', note: '$y^2 = 2x^2 + 9 \\implies y(x) = \\pm\\sqrt{2x^2 + 9}$. Because $y(0) = -3 < 0$, we must pick the negative root $y(x) = -\\sqrt{2x^2 + 9}$.' }
      ],
      answer: 'y(x) = -\\sqrt{2x^2 + 9}',
      whyWrong: {
        '1': 'You selected the positive branch $\\sqrt{2x^2 + 9}$, but at $x = 0$ this gives $+3$, violating $y(0) = -3$.',
        '2': 'You forgot to multiply $x^2$ by 2 when multiplying $\\frac{1}{2}y^2$ across.',
        '3': 'You treated the derivative linearly instead of integrating $y\\,dy$.'
      },
      commonTrap: 'Forgetting that $y^2 = f(x)$ gives two branches $\\pm\\sqrt{f(x)}$. The initial condition always chooses the sign.',
      reference: 'Lecture 3 · Separable Equations'
    }
  },
  {
    id: 'dq_sep_2',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'separable',
    topic: 'Separable ODEs · Singular Lost Solutions',
    difficulty: 'Midterm Level',
    question: 'Solving $\\frac{dy}{dx} = y^2 - 4$ by separation gives the family $y = 2\\frac{1 + c e^{4x}}{1 - c e^{4x}}$. Which constant equilibrium solution is a singular (lost) solution?',
    options: [
      '$y = -2$ only',
      '$y = 2$ only',
      '$y = 0$',
      'Both $y = 2$ and $y = -2$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Dividing by $h(y) = y^2 - 4$ assumes $y \\ne \\pm 2$. If no real constant $c$ can reproduce an equilibrium solution from the family, that solution is singular (lost).',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Equilibrium roots where $dy/dx = 0$', math: 'y^2 - 4 = 0 \\implies y = 2 \\quad \\text{or} \\quad y = -2' },
        { title: 'Step 2: Test $y = 2$ in the family', note: 'Setting $c = 0$ gives $y = 2\\frac{1 + 0}{1 - 0} = 2$. So $y = 2$ is included in the family!' },
        { title: 'Step 3: Test $y = -2$ in the family', math: '2\\frac{1 + c e^{4x}}{1 - c e^{4x}} = -2 \\implies 1 + c e^{4x} = -1 + c e^{4x} \\implies 1 = -1 \\; \\text{(Impossible!)}' },
        { title: 'Step 4: Conclusion', note: 'No finite choice of $c$ can produce $y = -2$. Therefore, $y = -2$ is a singular (lost) solution.' }
      ],
      answer: 'y = -2',
      whyWrong: {
        '1': '$y = 2$ is obtained by setting $c = 0$, so it is not lost.',
        '2': '$y = 0$ is not an equilibrium solution because $dy/dx = 0^2 - 4 = -4 \\ne 0$.',
        '3': '$y = 2$ is part of the general family when $c = 0$. Only $y = -2$ is lost.'
      },
      commonTrap: 'Assuming both equilibrium solutions are lost. Always test $c = 0$ and $c \\to \\infty$ against the general solution family.',
      reference: 'Lecture 3 · Page 6'
    }
  },
  {
    id: 'dq_linear_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'linear_if',
    topic: '1st-Order Linear · Integrating Factor in x',
    difficulty: 'Midterm Level',
    question: 'Solve the linear initial value problem: $x\\frac{dy}{dx} + 3y = \\frac{\\sin x}{x^2}, \\quad y(\\pi) = 0$. What is $y(x)$?',
    options: [
      '$y(x) = \\frac{-\\cos x - 1}{x^3}$',
      '$y(x) = \\frac{-\\cos x + 1}{x^3}$',
      '$y(x) = \\frac{\\cos x}{x^3}$',
      '$y(x) = -x^3 \\cos x$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Normalize by dividing by $x$ to achieve standard form $y\' + \\frac{3}{x}y = \\frac{\\sin x}{x^3}$. The integrating factor is $\\mu(x) = x^3$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Normalize with unit leading coefficient', math: '\\frac{dy}{dx} + \\frac{3}{x}y = \\frac{\\sin x}{x^3}' },
        { title: 'Step 2: Find integrating factor $\\mu(x)$', math: '\\mu(x) = e^{\\int \\frac{3}{x}dx} = e^{3\\ln|x|} = x^3' },
        { title: 'Step 3: Collapse by reverse product rule', math: '\\frac{d}{dx}[x^3 y] = x^3 \\left(\\frac{\\sin x}{x^3}\\right) = \\sin x' },
        { title: 'Step 4: Integrate and divide by $\\mu(x)$', math: 'x^3 y = -\\cos x + C \\implies y(x) = \\frac{-\\cos x + C}{x^3}' },
        { title: 'Step 5: Apply $y(\\pi) = 0$', math: '0 = \\frac{-\\cos(\\pi) + C}{\\pi^3} = \\frac{-(-1) + C}{\\pi^3} \\implies 1 + C = 0 \\implies C = -1' }
      ],
      answer: 'y(x) = \\frac{-\\cos x - 1}{x^3}',
      whyWrong: {
        '1': 'Sign slip with $\\cos(\\pi) = -1$. $-(-1) + C = 0 \\implies C = -1$, not $+1$.',
        '2': 'Forgetting to include the integration constant $C$ before dividing by $x^3$.',
        '3': 'Multiplying by $x^3$ instead of dividing by $\\mu(x)$.'
      },
      commonTrap: 'Forgetting to divide the constant $C$ by the integrating factor $\\mu(x) = x^3$.',
      reference: 'Lecture 3 · Linear Equations'
    }
  },
  {
    id: 'dq_exact_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'exact',
    topic: 'Exact Differential Equations · Potential Function',
    difficulty: 'Midterm Level',
    question: 'Solve $(2xy)\\,dx + (x^2 - 1)\\,dy = 0$. Which function represents the implicit level curves $\\Psi(x, y) = C$?',
    options: [
      '$x^2 y - y = C$',
      '$x^2 y + y = C$',
      '$2x^2 y - y = C$',
      '$\\frac{x^2}{y} = C$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Test exactness: $M_y = 2x, N_x = 2x$. Integrate $M$ by $x$: $\\Psi = x^2 y + g(y)$. Differentiate by $y$: $x^2 + g\'(y) = x^2 - 1 \\implies g(y) = -y$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Clairaut exactness test', math: 'M_y = \\frac{\\partial}{\\partial y}(2xy) = 2x, \\quad N_x = \\frac{\\partial}{\\partial x}(x^2 - 1) = 2x \\implies M_y = N_x' },
        { title: 'Step 2: Integrate $M$ with respect to $x$', math: '\\Psi(x,y) = \\int 2xy\\,dx = x^2 y + g(y)' },
        { title: 'Step 3: Differentiate by $y$ and equate to $N$', math: '\\frac{\\partial \\Psi}{\\partial y} = x^2 + g\'(y) = x^2 - 1 \\implies g\'(y) = -1' },
        { title: 'Step 4: Integrate $g\'(y)$ to find level curves', math: 'g(y) = -y \\implies \\Psi(x,y) = x^2 y - y = C' }
      ],
      answer: 'x^2 y - y = C',
      whyWrong: {
        '1': 'Sign slip on $N = x^2 - 1$. $g\'(y) = -1 \\implies g(y) = -y$, not $+y$.',
        '2': 'Extra factor of 2: $\\int 2x dx = x^2$, not $2x^2$.',
        '3': 'Incorrect quotient assumption instead of potential function.'
      },
      commonTrap: 'Forgetting to set $\\Psi(x, y) = C$. The general solution to an exact ODE is always a family of level curves equal to a constant.',
      reference: 'Lecture 4 · Exact Equations'
    }
  },
  {
    id: 'dq_nonexact_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'non_exact',
    topic: 'Non-Exact ODE · Special Integrating Factor in x',
    difficulty: 'Exam Master',
    question: 'For $(3xy + y^2)dx + (x^2 + xy)dy = 0$, what is the integrating factor $\\mu$ that transforms this equation into an exact ODE?',
    options: [
      '$\\mu(x) = x$',
      '$\\mu(x) = \\frac{1}{x}$',
      '$\\mu(y) = y$',
      '$\\mu(x) = x^2$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Compute mixed partials: $M_y = 3x + 2y, N_x = 2x + y$. The difference $(M_y - N_x)/N = 1/x$ depends on $x$ only, yielding $\\mu(x) = e^{\\int (1/x)dx} = x$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Check exactness', math: 'M_y = 3x + 2y, \\quad N_x = 2x + y \\implies M_y - N_x = x + y \\ne 0' },
        { title: 'Step 2: Divide by $N$', math: '\\frac{M_y - N_x}{N} = \\frac{x + y}{x(x + y)} = \\frac{1}{x} \\; (\\text{Pure function of } x)' },
        { title: 'Step 3: Compute integrating factor $\\mu(x)$', math: '\\mu(x) = e^{\\int \\frac{1}{x}dx} = e^{\\ln|x|} = x' },
        { title: 'Step 4: Verify new exactness', math: '(3x^2 y + xy^2)dx + (x^3 + x^2 y)dy = 0 \\implies M_y = 3x^2 + 2xy = N_x \\; \\checkmark' }
      ],
      answer: '\\mu(x) = x',
      whyWrong: {
        '1': 'Minus sign error in $(M_y - N_x)$. If you computed $(N_x - M_y)/N = -1/x$, you get $1/x$.',
        '2': 'Divided by $M$ instead of $N$. $(M_y - N_x)/M$ contains both $x$ and $y$.',
        '3': 'Forgot that $\\int (1/x)dx = \\ln x$, not $x^2/2$.'
      },
      commonTrap: 'Mixing up the numerator order: remember "My Next Neighbor" $M_y - N_x$ divides by $N$.',
      reference: 'Lecture 4 · Integrating Factors'
    }
  },
  {
    id: 'dq_bernoulli_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'bernoulli',
    topic: 'Bernoulli Equations · Linearizing Substitution',
    difficulty: 'Midterm Level',
    question: 'To solve the Bernoulli equation $x\\frac{dy}{dx} + y = x^2 y^2$, which substitution linearizes the differential equation?',
    options: [
      '$u = y^{-1}$',
      '$u = y^2$',
      '$u = y^{-2}$',
      '$u = \\frac{y}{x}$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'A Bernoulli equation $y\' + P(x)y = Q(x)y^n$ has power $n = 2$. The standard linearizing substitution is $u = y^{1-n} = y^{1-2} = y^{-1}$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Identify Bernoulli power $n$', math: 'x y\' + y = x^2 y^2 \\implies y\' + \\frac{1}{x}y = x y^2 \\implies n = 2' },
        { title: 'Step 2: Apply formula $u = y^{1-n}$', math: 'u = y^{1 - 2} = y^{-1} = \\frac{1}{y}' },
        { title: 'Step 3: Differentiate $u$', math: '\\frac{du}{dx} = -y^{-2}\\frac{dy}{dx} \\implies y^{-2}\\frac{dy}{dx} = -\\frac{du}{dx}' },
        { title: 'Step 4: Transformed linear ODE', math: '-\\frac{du}{dx} + \\frac{1}{x}u = x \\implies \\frac{du}{dx} - \\frac{1}{x}u = -x' }
      ],
      answer: 'u = y^{-1}',
      whyWrong: {
        '1': '$u = y^2$ is the nonlinear power on the right side, not $y^{1-n}$.',
        '2': '$u = y^{-2}$ would be for $n = 3$. Here $n = 2$, so $1 - 2 = -1$.',
        '3': '$u = y/x$ is for homogeneous equations, not Bernoulli equations.'
      },
      commonTrap: 'Using $u = y^n$ instead of $u = y^{1-n}$. Always subtract $n$ from 1.',
      reference: 'Lecture 5 · Bernoulli Equations'
    }
  },
  {
    id: 'dq_homog_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'homogeneous',
    topic: 'Homogeneous Equations · Degree 1 Substitution',
    difficulty: 'Midterm Level',
    question: 'Solve $(x - y)\\,dx + x\\,dy = 0$. Which function is the general solution?',
    options: [
      '$y(x) = x(C - \\ln|x|)$',
      '$y(x) = x(C + \\ln|x|)$',
      '$y(x) = C x - x^2$',
      '$y(x) = C e^{-x}$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Both terms have degree 1. Substitute $y = ux \\implies dy = u\\,dx + x\\,du$. It collapses into $dx/x + du = 0 \\implies u = C - \\ln|x|$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Test degree', math: 'M(x,y) = x - y \\; (\\text{deg } 1), \\quad N(x,y) = x \\; (\\text{deg } 1)' },
        { title: 'Step 2: Substitute $y = ux, \\; dy = u\\,dx + x\\,du$', math: '(x - ux)dx + x(u\\,dx + x\\,du) = 0' },
        { title: 'Step 3: Divide by $x$', math: '(1 - u)dx + u\\,dx + x\\,du = 0 \\implies dx + x\\,du = 0' },
        { title: 'Step 4: Separate and integrate', math: '\\frac{dx}{x} + du = 0 \\implies \\ln|x| + u = C \\implies u = C - \\ln|x|' },
        { title: 'Step 5: Back-substitute $u = y/x$', math: '\\frac{y}{x} = C - \\ln|x| \\implies y(x) = x(C - \\ln|x|)' }
      ],
      answer: 'y(x) = x(C - \\ln|x|)',
      whyWrong: {
        '1': 'Sign error: $\\ln|x| + u = C \\implies u = C - \\ln|x|$, not $C + \\ln|x|$.',
        '2': 'Attempted polynomial guess instead of homogeneous substitution.',
        '3': 'Confused with standard linear equation.'
      },
      commonTrap: 'Forgetting to substitute $dy = u\\,dx + x\\,du$ (product rule). Writing $dy = u\\,dx$ is an instant zero.',
      reference: 'Lecture 5 · Homogeneous Equations'
    }
  },
  {
    id: 'dq_linear_arg_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'linear_arg',
    topic: 'Linear Argument u = Ax + By + C',
    difficulty: 'Midterm Level',
    question: 'Solve $\\frac{dy}{dx} = (x + y + 2)^2$. What is the explicit solution $y(x)$?',
    options: [
      '$y(x) = \\tan(x + C) - x - 2$',
      '$y(x) = \\tan(x + C) + x + 2$',
      '$y(x) = \\frac{1}{3}(x + y + 2)^3 + C$',
      '$y(x) = \\arctan(x + C) - x - 2$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Linear bundle $u = x + y + 2 \\implies du/dx = 1 + dy/dx \\implies dy/dx = du/dx - 1$. Separates into $du/(u^2 + 1) = dx$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Set $u = x + y + 2$', math: '\\frac{du}{dx} = 1 + \\frac{dy}{dx} \\implies \\frac{dy}{dx} = \\frac{du}{dx} - 1' },
        { title: 'Step 2: Substitute into ODE', math: '\\frac{du}{dx} - 1 = u^2 \\implies \\frac{du}{dx} = u^2 + 1' },
        { title: 'Step 3: Separate variables', math: '\\frac{du}{u^2 + 1} = dx \\implies \\arctan(u) = x + C' },
        { title: 'Step 4: Solve for $y(x)$', math: 'u = \\tan(x + C) \\implies x + y + 2 = \\tan(x + C) \\implies y(x) = \\tan(x + C) - x - 2' }
      ],
      answer: 'y(x) = \\tan(x + C) - x - 2',
      whyWrong: {
        '1': 'Sign error when subtracting $x$ and $2$ over to the right side.',
        '2': 'Treated the derivative as an ordinary power rule integration $\\int u^2 du$, ignoring that $y$ depends on $x$.',
        '3': 'Inverted $\\arctan(u) = x+C$ incorrectly: taking tangent gives $u = \\tan(x+C)$, not $\\arctan$.'
      },
      commonTrap: 'Trying to expand $(x + y + 2)^2$ into 6 terms. Always package the linear line as $u$.',
      reference: 'Lecture 5 · Substitutions'
    }
  },
  {
    id: 'dq_second_order_1',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'second_order',
    topic: '2nd-Order Linear · Repeated Root Basis',
    difficulty: 'Midterm Level',
    question: 'Solve $y\'\' - 4y\' + 4y = 0$ with initial conditions $y(0) = 1, y\'(0) = 4$. What is $y(x)$?',
    options: [
      '$y(x) = (1 + 2x)e^{2x}$',
      '$y(x) = e^{2x} + 2e^{-2x}$',
      '$y(x) = (1 + 4x)e^{2x}$',
      '$y(x) = e^{2x} + e^{2x}$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Characteristic equation $r^2 - 4r + 4 = (r - 2)^2 = 0$ has a repeated root $r = 2$. The general solution is $y(x) = (C_1 + C_2 x)e^{2x}$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Auxiliary equation', math: 'r^2 - 4r + 4 = 0 \\implies (r - 2)^2 = 0 \\implies r_1 = r_2 = 2' },
        { title: 'Step 2: Basis functions', note: 'Because the root is repeated, basis is $\\{e^{2x}, x e^{2x}\\}$. General solution: $y(x) = (C_1 + C_2 x)e^{2x}$.' },
        { title: 'Step 3: Apply $y(0) = 1$', math: 'y(0) = (C_1 + 0)e^0 = C_1 \\implies C_1 = 1' },
        { title: 'Step 4: Differentiate via product rule', math: 'y\'(x) = C_2 e^{2x} + 2(1 + C_2 x)e^{2x}' },
        { title: 'Step 5: Apply $y\'(0) = 4$', math: '4 = C_2 (1) + 2(1 + 0)(1) = C_2 + 2 \\implies C_2 = 2 \\implies y(x) = (1 + 2x)e^{2x}' }
      ],
      answer: 'y(x) = (1 + 2x)e^{2x}',
      whyWrong: {
        '1': 'Assumed distinct roots $r = \\pm 2$. But $r^2 - 4r + 4 = 0$ has roots $+2, +2$.',
        '2': 'Forgot the product rule when differentiating $(1 + C_2 x)e^{2x}$, obtaining $C_2 = 4$.',
        '3': 'Repeated solution with no $x$ factor is linearly dependent.'
      },
      commonTrap: 'Forgetting the $x$ multiplier on the second root. $e^{2x}$ and $e^{2x}$ are linearly dependent and cannot span the solution space.',
      reference: 'Lecture 7 · 2nd Order Equations'
    }
  },
  {
    id: 'dq_hack_newton',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'tutor_hacks',
    topic: 'Tutor Hack · Newton 3-Point Temperature Cancel',
    difficulty: 'Exam Master',
    question: 'A cake is cooling in an oven. At equal 30-second intervals ($t = 0, 0.5, 1.0$ min), temperatures are recorded as $T_1 = 70^\\circ\\text{F}$, $T_2 = 110^\\circ\\text{F}$, and $T_3 = 145^\\circ\\text{F}$. Using the 3-point ratio shortcut, what is the ambient oven temperature $T_m$?',
    options: [
      '$T_m = 390^\\circ\\text{F}$',
      '$T_m = 350^\\circ\\text{F}$',
      '$T_m = 420^\\circ\\text{F}$',
      '$T_m = 300^\\circ\\text{F}$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Equal time intervals mean ratio $e^{-k\\Delta t}$ is squared. The formula $(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2$ cancels $T_m^2$ completely, yielding a 1-line linear equation!',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Set up the 3-point cancellation formula', math: '(145 - T_m)(70 - T_m) = (110 - T_m)^2' },
        { title: 'Step 2: Expand LHS and RHS', math: '10150 - 215 T_m + T_m^2 = 12100 - 220 T_m + T_m^2' },
        { title: 'Step 3: Cancel $T_m^2$ on both sides', math: '10150 - 215 T_m = 12100 - 220 T_m' },
        { title: 'Step 4: Solve the linear equation', math: '220 T_m - 215 T_m = 12100 - 10150 \\implies 5 T_m = 1950 \\implies T_m = 390^\\circ\\text{F}' }
      ],
      answer: 'T_m = 390^\\circ\\text{F}',
      whyWrong: {
        '1': 'Arithmetic slip: $12100 - 10150 = 1950$, not $1750$.',
        '2': 'Mixed up the middle temperature $T_2 = 110$ with $T_3 = 145$.',
        '3': 'Attempted linear interpolation which fails because Newton cooling is exponential.'
      },
      commonTrap: 'Solving for decay constant $k$ with natural logs on exam scrap paper. It takes 15 minutes and invites round-off errors. Cross-multiply and cancel $T_m^2$ instead!',
      reference: 'Tutor Notes · Page 35'
    }
  },
  {
    id: 'dq_hack_heaviside',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'tutor_hacks',
    topic: 'Tutor Hack · 15-Second Heaviside Cover-Up Rule',
    difficulty: 'Midterm Level',
    question: 'Decompose $\\frac{1}{(u - 2)(u + 2)}$ into partial fractions $\\frac{A}{u - 2} + \\frac{B}{u + 2}$. What are the coefficients $A$ and $B$?',
    options: [
      '$A = \\frac{1}{4}, \\; B = -\\frac{1}{4}$',
      '$A = \\frac{1}{2}, \\; B = -\\frac{1}{2}$',
      '$A = -\\frac{1}{4}, \\; B = \\frac{1}{4}$',
      '$A = 1, \\; B = -1$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Heaviside Cover-Up: Cover $(u - 2)$ and evaluate at $u = 2$: $A = 1/(2 + 2) = 1/4$. Cover $(u + 2)$ and evaluate at $u = -2$: $B = 1/(-2 - 2) = -1/4$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Evaluate $A$ at root $u = 2$', math: 'A = \\left.\\frac{1}{u + 2}\\right|_{u = 2} = \\frac{1}{2 + 2} = \\frac{1}{4}' },
        { title: 'Step 2: Evaluate $B$ at root $u = -2$', math: 'B = \\left.\\frac{1}{u - 2}\\right|_{u = -2} = \\frac{1}{-2 - 2} = -\\frac{1}{4}' },
        { title: 'Step 3: Verification', math: '\\frac{1/4}{u - 2} - \\frac{1/4}{u + 2} = \\frac{1}{4}\\left(\\frac{(u+2) - (u-2)}{u^2 - 4}\\right) = \\frac{1}{4}\\left(\\frac{4}{u^2 - 4}\\right) = \\frac{1}{u^2 - 4} \\; \\checkmark' }
      ],
      answer: 'A = 1/4, \\; B = -1/4',
      whyWrong: {
        '1': 'Forgot to add the denominator terms $2 + 2 = 4$, writing $2$ instead.',
        '2': 'Inverted the signs of $A$ and $B$.',
        '3': 'Assumed unit numerator without dividing by the root gap.'
      },
      commonTrap: 'Setting up a 2x2 linear system on scrap paper. The cover-up rule takes 10 seconds and is completely foolproof.',
      reference: 'Tutor Notes · Page 19'
    }
  },
  {
    id: 'dq_formula_tan',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'formulas',
    topic: 'Formula Retention · Tangent Antiderivative',
    difficulty: 'Foundation',
    question: 'What is the correct antiderivative of $\\int \\tan(x)\\,dx$ needed for integrating factors?',
    options: [
      '$\\ln|\\sec(x)| + C = -\\ln|\\cos(x)| + C$',
      '$\\sec^2(x) + C$',
      '$\\ln|\\sin(x)| + C$',
      '$\\frac{1}{2}\\tan^2(x) + C$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: '$\\tan(x) = \\frac{\\sin x}{\\cos x} = -\\frac{(\\cos x)\'}{\\cos x}$. Integrating yields $-\\ln|\\cos x| = \\ln|\\cos x|^{-1} = \\ln|\\sec x|$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Write in sine and cosine', math: '\\int \\tan(x)\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx' },
        { title: 'Step 2: Logarithmic quotient shortcut', math: '-\\int \\frac{-\\sin x}{\\cos x}\\,dx = -\\ln|\\cos x| + C = \\ln|\\cos(x)^{-1}| + C = \\ln|\\sec x| + C' }
      ],
      answer: '\\ln|\\sec(x)| + C',
      whyWrong: {
        '1': '$\\sec^2(x)$ is the derivative of $\\tan(x)$, not the antiderivative.',
        '2': '$\\ln|\\sin(x)|$ is the antiderivative of $\\cot(x)$.',
        '3': 'Power rule does not apply directly to $\\tan(x)$ without a $\\sec^2(x)$ factor.'
      },
      commonTrap: 'Mixing up derivative $\\frac{d}{dx}[\\tan x] = \\sec^2 x$ with the integral $\\int \\tan x dx = \\ln|\\sec x|$.',
      reference: 'Calculus Survival Vault'
    }
  },
  {
    id: 'dq_formula_sec',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'formulas',
    topic: 'Formula Retention · Secant Antiderivative',
    difficulty: 'Midterm Level',
    question: 'What is the exact antiderivative $\\int \\sec(x)\\,dx$ tested in Variation of Parameters?',
    options: [
      '$\\ln|\\sec(x) + \\tan(x)| + C$',
      '$\\ln|\\sec(x) - \\tan(x)| + C$',
      '$\\sec(x)\\tan(x) + C$',
      '$\\frac{1}{2}\\sec^2(x) + C$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Multiplying numerator and denominator by $(\\sec x + \\tan x)$ yields $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x}dx = \\ln|\\sec x + \\tan x| + C$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Algebraic trick', math: '\\int \\sec(x)\\,dx = \\int \\frac{\\sec x(\\sec x + \\tan x)}{\\sec x + \\tan x}\\,dx' },
        { title: 'Step 2: Recognize derivative in numerator', note: 'Notice $(d/dx)[\\sec x + \\tan x] = \\sec x \\tan x + \\sec^2 x$. The integral is of the form $\\int g\'/g dx = \\ln|g|$.' },
        { title: 'Step 3: Result', math: '\\int \\sec(x)\\,dx = \\ln|\\sec(x) + \\tan(x)| + C' }
      ],
      answer: '\\ln|\\sec(x) + \\tan(x)| + C',
      whyWrong: {
        '1': 'Minus sign is incorrect: the sum $(\\sec x + \\tan x)$ appears in the logarithm.',
        '2': '$\\sec(x)\\tan(x)$ is the derivative of $\\sec(x)$, not the integral.',
        '3': 'Power rule error.'
      },
      commonTrap: 'Trying to derive this from scratch during a 60-minute midterm. Commit it to memory!',
      reference: 'Calculus Survival Vault'
    }
  },
  {
    id: 'dq_formula_arctan',
    courseId: 'ENGR213',
    chapter: 'midterm',
    methodId: 'formulas',
    topic: 'Formula Retention · Standard Arctan Integral',
    difficulty: 'Foundation',
    question: 'Evaluate $\\int \\frac{1}{x^2 + 9}\\,dx$.',
    options: [
      '$\\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$',
      '$\\arctan\\left(\\frac{x}{3}\\right) + C$',
      '$\\frac{1}{9}\\arctan\\left(\\frac{x}{9}\\right) + C$',
      '$\\ln|x^2 + 9| + C$'
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: 'Standard formula $\\int \\frac{1}{x^2 + a^2}dx = \\frac{1}{a}\\arctan(x/a) + C$. Here $a^2 = 9 \\implies a = 3$.',
      stepByStep: [],
      steps: [
        { title: 'Step 1: Identify constant $a$', math: 'a^2 = 9 \\implies a = 3' },
        { title: 'Step 2: Apply formula with leading $1/a$', math: '\\int \\frac{1}{x^2 + 3^2}\\,dx = \\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C' }
      ],
      answer: '\\frac{1}{3}\\arctan(x/3) + C',
      whyWrong: {
        '1': 'Forgot the leading factor $1/a = 1/3$.',
        '2': 'Used $a^2 = 9$ as the divisor instead of $a = 3$.',
        '3': '$\\ln|x^2 + 9|$ requires a $2x$ in the numerator, which is absent.'
      },
      commonTrap: 'Forgetting $1/a$ in front of arctangent. (Note: $\\arcsin(x/a)$ does NOT have $1/a$, but $\\arctan(x/a)$ DOES have $1/a$).',
      reference: 'Calculus Survival Vault'
    }
  }
];

// Solved Past Midterm Problems
export interface SolvedProblem {
  id: string;
  exam: string;
  topic: string;
  problemStatement: string;
  methodId: string;
  timeTarget: string;
  difficulty: 'easy' | 'med' | 'hard';
  steps: { title: string; content: string }[];
  friendIntuition: string;
  concordiaTrap: string;
}

const PAST_PROBLEMS: SolvedProblem[] = [
  {
    id: 'p1',
    exam: 'Winter 2017 Midterm (Unofficial) · Problem 1',
    topic: 'Separable Differential Equation with Initial Value',
    problemStatement: 'Solve the initial value problem: $\\frac{dy}{dx} = \\frac{3x^2 y}{1 + x^3}, \\quad y(1) = 2$',
    methodId: 'separable',
    timeTarget: '8 minutes',
    difficulty: 'easy',
    steps: [
      {
        title: 'Step 1: Check for Equilibrium Solutions',
        content: 'Check where $h(y) = y = 0$. $y = 0$ is a constant equilibrium solution, but our initial value is $y(1) = 2 \\ne 0$.'
      },
      {
        title: 'Step 2: Separate Variables',
        content: 'Divide by $y$ and multiply by $dx$: $$\\frac{1}{y} dy = \\frac{3x^2}{1 + x^3} dx$$'
      },
      {
        title: 'Step 3: Integrate Both Sides',
        content: 'Integrate both sides using the logarithmic shortcut $\\int \\frac{g\'(x)}{g(x)}dx = \\ln|g(x)|$: $$\\int \\frac{1}{y} dy = \\int \\frac{3x^2}{1 + x^3} dx \\implies \\ln|y| = \\ln|1 + x^3| + C_1$$ Exponentiate both sides: $$|y| = e^{C_1} |1 + x^3| \\implies y(x) = C(1 + x^3)$$'
      },
      {
        title: 'Step 4: Apply Initial Condition y(1) = 2',
        content: 'Substitute $x = 1, y = 2$: $$2 = C(1 + 1^3) = 2C \\implies C = 1$$'
      },
      {
        title: 'Step 5: Final Explicit Solution & Maximal Interval',
        content: 'Final explicit solution: $$y(x) = 1 + x^3$$ on the maximal open interval $I = (-1, \\infty)$ containing the initial point $x_0 = 1$.'
      }
    ],
    friendIntuition: 'Look how fast this is when you use the logarithmic shortcut ∫ g\'/g dx = ln|g|! You do not even need to write u = 1+x³ on scrap paper.',
    concordiaTrap: 'Do not forget to state the interval of validity I = (-1, ∞). The differential equation has a singularity at 1 + x³ = 0 ⟹ x = -1. Since x₀ = 1 > -1, the solution is valid for x > -1.'
  },
  {
    id: 'p2',
    exam: 'Fall 2018 Midterm (Unofficial) · Problem 2',
    topic: 'Bernoulli Differential Equation',
    problemStatement: 'Solve the first-order differential equation: $\\frac{dy}{dx} + 2xy = -xy^4$',
    methodId: 'bernoulli',
    timeTarget: '12 minutes',
    difficulty: 'med',
    steps: [
      {
        title: 'Step 1: Identify Bernoulli Form',
        content: 'Standard form $y\' + P(x)y = Q(x)y^n$ with $P(x) = 2x$, $Q(x) = -x$, and power $n = 4$.'
      },
      {
        title: 'Step 2: Divide by y⁴',
        content: 'Divide the entire equation by $y^4$: $$y^{-4}\\frac{dy}{dx} + 2x y^{-3} = -x$$'
      },
      {
        title: 'Step 3: Linearizing Substitution u = y^{1-4} = y⁻³',
        content: 'Let $u = y^{-3} \\implies \\frac{du}{dx} = -3 y^{-4}\\frac{dy}{dx}$, so $y^{-4}\\frac{dy}{dx} = -\\frac{1}{3}\\frac{du}{dx}$. Substituting: $$-\\frac{1}{3}\\frac{du}{dx} + 2x u = -x \\implies \\frac{du}{dx} - 6x u = 3x$$'
      },
      {
        title: 'Step 4: Integrating Factor for u(x)',
        content: 'Integrating factor: $$\\mu(x) = e^{\\int -6x\\,dx} = e^{-3x^2}$$ Collapsing: $\\frac{d}{dx}[e^{-3x^2}u] = 3x e^{-3x^2}$. Integrating: $$e^{-3x^2}u = -\\frac{1}{2}e^{-3x^2} + C \\implies u(x) = -\\frac{1}{2} + C e^{3x^2}$$'
      },
      {
        title: 'Step 5: Back-Substitute y = u^{-1/3}',
        content: 'Back-substitute $y = u^{-1/3}$: $$y^{-3} = C e^{3x^2} - \\frac{1}{2} \\implies y(x) = \\left(C e^{3x^2} - \\frac{1}{2}\\right)^{-1/3}$$'
      }
    ],
    friendIntuition: 'When integrating 3x e^{-3x²}, notice (d/dx)[-3x²] = -6x. So 3x dx = -(1/2)(-6x dx). That makes the integral instant: -(1/2) e^{-3x²}.',
    concordiaTrap: 'Students frequently drop the minus sign when multiplying the whole equation by -3. Make sure -x becomes +3x on the right-hand side!'
  },
  {
    id: 'p3',
    exam: 'Fall 2018 Midterm (Unofficial) · Problem 3',
    topic: 'Exact Differential Equation',
    problemStatement: 'Solve the differential equation: $(2xy)\\,dx + (x^2 - 1)\\,dy = 0$',
    methodId: 'exact',
    timeTarget: '10 minutes',
    difficulty: 'easy',
    steps: [
      {
        title: 'Step 1: Clairaut Exactness Test',
        content: '$M = 2xy, \\; N = x^2 - 1$. Compute mixed partials: $$\\frac{\\partial M}{\\partial y} = 2x, \\quad \\frac{\\partial N}{\\partial x} = 2x$$ Since $M_y = N_x = 2x$, the equation is exact!'
      },
      {
        title: 'Step 2: Integrate M with respect to x',
        content: 'Integrate $M$ with respect to $x$: $$\\Psi(x,y) = \\int 2xy\\,dx = x^2 y + g(y)$$'
      },
      {
        title: 'Step 3: Differentiate by y & Equate to N',
        content: 'Differentiate $\\Psi$ by $y$: $$\\frac{\\partial \\Psi}{\\partial y} = x^2 + g\'(y) = N = x^2 - 1 \\implies g\'(y) = -1$$'
      },
      {
        title: 'Step 4: Integrate g\'(y) & Write General Solution',
        content: 'Integrate: $g(y) = -y$. General solution level curve: $$\\Psi(x,y) = x^2 y - y = C \\implies y(x^2 - 1) = C \\implies y(x) = \\frac{C}{x^2 - 1}$$'
      }
    ],
    friendIntuition: 'Exact ODEs are the cleanest marks on the exam. Follow the 4-step checklist: Test ⟹ Integrate M ⟹ Equate to N ⟹ Set = C.',
    concordiaTrap: 'Never forget to write "= C" at the end. Writing just "Ψ = x²y - y" with no equals sign loses 2 marks.'
  },
  {
    id: 'p4',
    exam: 'Winter 2016 Midterm (Unofficial) · Problem 3',
    topic: 'Resonant 2nd-Order IVP (Undetermined Coeffs)',
    problemStatement: 'Solve the initial value problem: $y\'\' + 4y = 3\\sin(2x), \\quad y(0) = 0, \\; y\'(0) = 0$',
    methodId: 'second_order',
    timeTarget: '15 minutes',
    difficulty: 'hard',
    steps: [
      {
        title: 'Step 1: Homogeneous Solution y_h',
        content: 'Characteristic equation $r^2 + 4 = 0 \\implies r = \\pm 2i$. Homogeneous solution: $$y_h(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$$'
      },
      {
        title: 'Step 2: Detect Resonance for Particular Solution y_p',
        content: 'The forcing term $3\\sin(2x)$ is ALREADY in the homogeneous solution! Multiply trial form by $x$: $$y_p(x) = x(A\\cos 2x + B\\sin 2x)$$'
      },
      {
        title: 'Step 3: Compute Derivatives & Substitute',
        content: 'Compute derivatives: $$y_p\' = (A\\cos 2x + B\\sin 2x) + x(-2A\\sin 2x + 2B\\cos 2x)$$ $$y_p\'\' = -4A\\sin 2x + 4B\\cos 2x - 4x(A\\cos 2x + B\\sin 2x)$$ Substituting into $y\'\' + 4y = 3\\sin 2x$: $$-4A\\sin 2x + 4B\\cos 2x = 3\\sin 2x \\implies A = -\\frac{3}{4}, \\; B = 0$$'
      },
      {
        title: 'Step 4: General Solution & Apply Initial Conditions',
        content: 'General solution: $$y(x) = C_1 \\cos 2x + C_2 \\sin 2x - \\frac{3}{4}x\\cos 2x$$ Initial condition $y(0) = 0 \\implies C_1 = 0$. Derivative: $y\'(0) = 2C_2 - \\frac{3}{4} = 0 \\implies C_2 = \\frac{3}{8}$.'
      },
      {
        title: 'Step 5: Final Solution',
        content: 'Final explicit solution: $$y(x) = \\frac{3}{8}\\sin(2x) - \\frac{3}{4}x\\cos(2x)$$'
      }
    ],
    friendIntuition: 'Whenever the frequency in the sine/cosine matches the root frequency (here 2 matches ±2i), that is pure RESONANCE. The amplitude grows linearly with x! Always multiply your guess by x.',
    concordiaTrap: 'Forgetting the product rule when differentiating y_p = x(A cos 2x + B sin 2x). If you do not differentiate the x factor, your cancellation fails completely.'
  }
];

// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------
export const Engr213MidtermCompanion: React.FC<Props> = ({ onViewPdf, onBack }) => {
  const [activeTab, setActiveTab] = useState<'classifier' | 'tutor_hacks' | 'vault' | 'past_exams' | 'trainer'>('classifier');
  const [selectedMethodId, setSelectedMethodId] = useState<string>('separable');
  const [vaultFilter, setVaultFilter] = useState<'all' | 'deriv' | 'integral' | 'pillar'>('all');
  const [blurFormulas, setBlurFormulas] = useState<boolean>(false);
  const [unblurredIds, setUnblurredIds] = useState<Set<string>>(new Set());

  // Video and modal interactions
  const [openVideoMethodId, setOpenVideoMethodId] = useState<string | null>(null);
  const [selectedHackForModal, setSelectedHackForModal] = useState<TutorHack | null>(null);
  const [selectedFormulaAi, setSelectedFormulaAi] = useState<string>('f4');

  // Interactive Brain Drill state
  const [drillSubjectFilter, setDrillSubjectFilter] = useState<string>('all');
  const [drillIdx, setDrillIdx] = useState<number>(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<string, number>>({});
  const [drillScore, setDrillScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [drillStreak, setDrillStreak] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [masteredMap, setMasteredMap] = useState<Record<string, boolean>>({});

  // Additional tools state
  const [vaultSearchQuery, setVaultSearchQuery] = useState<string>('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [showEmergencyCheatSheet, setShowEmergencyCheatSheet] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(audio.enabled);

  // 10-Second Method Diagnostic Assistant
  const [diagStep, setDiagStep] = useState<number>(0);
  const [diagResult, setDiagResult] = useState<string | null>(null);

  // Timer ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load mastered state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('engr213_companion_mastery_v3');
      if (saved) {
        setMasteredMap(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const currentMethod = useMemo(
    () => METHOD_ARCHETYPES.find((m) => m.id === selectedMethodId) || METHOD_ARCHETYPES[0],
    [selectedMethodId]
  );

  const filteredVault = useMemo(() => {
    let list = CALCULUS_VAULT;
    if (vaultFilter !== 'all') {
      list = list.filter((f) => f.category === vaultFilter);
    }
    if (vaultSearchQuery.trim()) {
      const q = vaultSearchQuery.toLowerCase();
      list = list.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.latex.toLowerCase().includes(q) ||
          f.whyItMatters.toLowerCase().includes(q)
      );
    }
    return list;
  }, [vaultFilter, vaultSearchQuery]);

  const filteredMidterms = useMemo(() => {
    if (selectedYearFilter === 'all') return UNOFFICIAL_MIDTERMS;
    return UNOFFICIAL_MIDTERMS.filter((m) => m.year.includes(selectedYearFilter));
  }, [selectedYearFilter]);

  // Filtered drill questions based on chosen subject or bundle
  const activeDrillQuestions = useMemo(() => {
    if (drillSubjectFilter === 'all') return COMPANION_DRILL_QUESTIONS;
    return COMPANION_DRILL_QUESTIONS.filter((q) => q.methodId === drillSubjectFilter);
  }, [drillSubjectFilter]);

  const currentDrillQuestion = useMemo(() => {
    return activeDrillQuestions[drillIdx] || activeDrillQuestions[0];
  }, [activeDrillQuestions, drillIdx]);

  const handleSelectMethod = (id: string) => {
    audio.playClick();
    setSelectedMethodId(id);
  };

  const toggleBlurFormula = (id: string) => {
    audio.playClick();
    setUnblurredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Launch drill for a specific method from the top-right button
  const handleDrillMethod = (methodId: string) => {
    audio.playClick();
    setDrillSubjectFilter(methodId);
    const matching = COMPANION_DRILL_QUESTIONS.filter((q) => q.methodId === methodId);
    if (matching.length > 0) {
      const randomIdx = Math.floor(Math.random() * matching.length);
      setDrillIdx(randomIdx);
    } else {
      setDrillIdx(0);
    }
    setActiveTab('trainer');
    setTimeout(() => {
      const el = document.getElementById('ec-drill-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (drillAnswers[currentDrillQuestion.id] !== undefined) return; // already answered

    const isCorrect = optionIdx === currentDrillQuestion.correctIndex;
    if (isCorrect) {
      audio.playCorrect();
      setDrillStreak((s) => s + 1);
      setDrillScore((sc) => ({ correct: sc.correct + 1, total: sc.total + 1 }));
    } else {
      audio.playIncorrect();
      setDrillStreak(0);
      setDrillScore((sc) => ({ correct: sc.correct, total: sc.total + 1 }));
    }

    setDrillAnswers((prev) => ({ ...prev, [currentDrillQuestion.id]: optionIdx }));
  };

  const toggleMastered = (id: string) => {
    setMasteredMap((prev) => {
      const willBeMastered = !prev[id];
      if (willBeMastered) audio.playComplete();
      else audio.playClick();
      const next = { ...prev, [id]: willBeMastered };
      try {
        localStorage.setItem('engr213_companion_mastery_v3', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="engr213-companion-container">
      {/* Top Header Card */}
      <div className="ec-header-card">
        <div className="ec-header-top">
          <div>
            <div className="ec-title-badge-group">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginRight: '8px'
                  }}
                >
                  <ArrowLeft size={14} /> Back
                </button>
              )}
              <span className="ec-badge-copilot">
                <Sparkles size={14} /> Midterm Study Co-Pilot
              </span>
              <span className="ec-badge-warning">
                <AlertTriangle size={14} /> NO Formula Sheet on Exam
              </span>
            </div>
            <h1 className="ec-main-title">ENGR 213 Midterm Mastery Companion</h1>
            <p className="ec-subtitle">
              Applied Ordinary Differential Equations · Concordia University · Fastest Solution Recipes, Method Diagnosis, Calculus Vault &amp; Unofficial Exam Walkthroughs
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setShowEmergencyCheatSheet(true);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff',
                border: 'none',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)'
              }}
            >
              <Sparkles size={14} /> 1-Page Emergency Cheat Sheet
            </button>
            <button
              type="button"
              onClick={() => {
                const next = !soundEnabled;
                audio.enabled = next;
                setSoundEnabled(next);
                if (next) audio.playClick();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span>{soundEnabled ? 'Sound ON' : 'Muted'}</span>
            </button>
          </div>
        </div>

        {/* AI Study Friend Speech Bubble */}
        <div className="ec-friend-speech-bubble">
          <div className="ec-friend-avatar">AI</div>
          <div>
            <strong>Hey there!</strong> In ENGR 213, there is <em>no formula sheet</em> on the midterm. The secret to scoring an A+ is <strong>recognizing the ODE archetype in under 10 seconds</strong> and executing the deterministic recipe without missing minus signs or constants. Let&apos;s master every method step-by-step!
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="ec-tabs-bar" role="tablist">
        <button
          className={`ec-tab-btn ${activeTab === 'classifier' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('classifier');
          }}
        >
          <Compass size={17} />
          <span>10-Second Method Classifier</span>
        </button>
        <button
          className={`ec-tab-btn ${activeTab === 'tutor_hacks' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('tutor_hacks');
          }}
        >
          <Sparkles size={17} />
          <span>Tutor Hacks &amp; Speed-Weapons</span>
        </button>
        <button
          className={`ec-tab-btn ${activeTab === 'vault' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('vault');
          }}
        >
          <Brain size={17} />
          <span>Calculus Survival Vault (Must-Retain)</span>
        </button>
        <button
          className={`ec-tab-btn ${activeTab === 'past_exams' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('past_exams');
          }}
        >
          <Target size={17} />
          <span>Unofficial Past Midterm Walkthroughs</span>
        </button>
        <button
          className={`ec-tab-btn ${activeTab === 'trainer' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('trainer');
          }}
        >
          <Zap size={17} />
          <span>Interactive Practice Trainer</span>
        </button>
      </div>

      {/* --------------------------------------------- */}
      {/* TAB 1: 10-Second Method Classifier Panel       */}
      {/* --------------------------------------------- */}
      {activeTab === 'classifier' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* 10-Second Diagnostic Assistant */}
          <div className="ec-diagnostic-assistant">
            <div className="ec-diagnostic-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={17} color="#38bdf8" />
                <strong>10-Second Method Diagnostic Assistant (Answer 3 Binary Questions):</strong>
              </div>
              <button
                type="button"
                className="ec-diag-btn reset"
                onClick={() => {
                  setDiagStep(0);
                  setDiagResult(null);
                  audio.playClick();
                }}
              >
                <RotateCcw size={13} style={{ display: 'inline', marginRight: '4px' }} /> Restart
              </button>
            </div>

            {!diagResult ? (
              <div className="ec-diagnostic-q-box">
                <div style={{ fontSize: '13.5px', color: '#e2e8f0', lineHeight: '1.5' }}>
                  {diagStep === 0 && (
                    <MathText text="**Question 1:** Can you group all terms with $y$ with $dy$ on one side and all terms with $x$ with $dx$ on the other side purely by multiplication or division?" />
                  )}
                  {diagStep === 1 && (
                    <MathText text="**Question 2:** Is $y$ and its derivative $y'$ strictly to the first power in the standard form $y' + P(x)y = Q(x)$?" />
                  )}
                  {diagStep === 2 && (
                    <MathText text="**Question 3:** In differential form $M(x,y)dx + N(x,y)dy = 0$, are the mixed partial derivatives equal: $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$?" />
                  )}
                  {diagStep === 3 && (
                    <MathText text="**Question 4:** Does every term in the equation have the exact same combined algebraic degree $k$ (e.g. $x^2 + y^2$ over $xy$)?" />
                  )}
                  {diagStep === 4 && (
                    <MathText text="**Question 5:** Does the right-hand side contain $y^n$ ($n \ne 0, 1$) multiplying $Q(x)$ (Bernoulli)?" />
                  )}
                </div>

                <div className="ec-diagnostic-actions">
                  <button
                    type="button"
                    className="ec-diag-btn yes"
                    onClick={() => {
                      audio.playClick();
                      if (diagStep === 0) setDiagResult('separable');
                      else if (diagStep === 1) setDiagResult('linear_if');
                      else if (diagStep === 2) setDiagResult('exact');
                      else if (diagStep === 3) setDiagResult('homogeneous');
                      else if (diagStep === 4) setDiagResult('bernoulli');
                    }}
                  >
                    YES ✓
                  </button>
                  <button
                    type="button"
                    className="ec-diag-btn no"
                    onClick={() => {
                      audio.playClick();
                      if (diagStep < 4) setDiagStep((s) => s + 1);
                      else setDiagResult('linear_arg');
                    }}
                  >
                    NO ✗
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', borderRadius: '10px', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#6ee7b7', fontWeight: 800 }}>
                    Diagnostic Match Found:
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                    🎯 {METHOD_ARCHETYPES.find((m) => m.id === diagResult)?.name}
                  </div>
                </div>
                <button
                  type="button"
                  className="ec-diag-btn yes"
                  onClick={() => {
                    audio.playClick();
                    setSelectedMethodId(diagResult);
                  }}
                >
                  Inspect Recipe &amp; Worked Example →
                </button>
              </div>
            )}
          </div>

          <div className="ec-classifier-panel">
            {/* Method List Column */}
            <div className="ec-method-list">
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary, #64748b)', padding: '0 4px', textTransform: 'uppercase' }}>
                Select an ODE Archetype:
              </span>
              {METHOD_ARCHETYPES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={`ec-method-btn ${selectedMethodId === m.id ? 'active' : ''}`}
                  onClick={() => handleSelectMethod(m.id)}
                >
                  <div className="ec-method-btn-top">
                    <span>{m.name}</span>
                    <span
                      className={`ec-diff-badge ${
                        m.difficulty === 'easy'
                          ? 'ec-diff-easy'
                          : m.difficulty === 'med'
                          ? 'ec-diff-med'
                          : 'ec-diff-hard'
                      }`}
                    >
                      {m.difficulty}
                    </span>
                  </div>
                  <div className="ec-method-formula">{m.standardForm}</div>
                </button>
              ))}
            </div>

            {/* Deep Dive Details Card */}
            <div className="ec-classifier-content">
              {/* Top Bar with Title, Formula, and Top-Right Drill Button (Matching Screenshot) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span className="ec-card-tag">{currentMethod.diffLabel}</span>
                  <h2 className="ec-detail-title" style={{ marginTop: '6px' }}>{currentMethod.name}</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="ec-drill-btn"
                    onClick={() => handleDrillMethod(currentMethod.id)}
                    title={`Test your skill on ${currentMethod.name}`}
                  >
                    <Play size={13} fill="currentColor" /> Drill this problem
                  </button>
                  <div style={{ background: '#f8fafc', padding: '8px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
                    <MathText text={`$${currentMethod.formulaDisplay}$`} />
                  </div>
                </div>
              </div>

              {/* 10-Second Diagnostic Cue */}
              <div className="ec-diagnostic-cue-box">
                <span className="ec-box-label">
                  <Compass size={15} /> 10-Second Visual Identification Cue:
                </span>
                <p className="ec-box-text">{currentMethod.visualCue}</p>
              </div>

              {/* The Fastest Attack Move */}
              <div style={{ background: 'rgba(79, 70, 229, 0.05)', border: '1px solid rgba(79, 70, 229, 0.2)', padding: '12px 16px', borderRadius: '8px' }}>
                <strong style={{ color: '#4338ca', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={15} /> The Fastest Solving Move:
                </strong>
                <div style={{ fontSize: '13.5px', marginTop: '4px', lineHeight: '1.5' }}>
                  {currentMethod.fastestMove}
                </div>
              </div>

              {/* Easiest vs Hardest Comparison */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '12px 14px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase' }}>
                    ✓ Easiest Straightforward Variant:
                  </span>
                  <div style={{ fontSize: '13px', marginTop: '4px', color: '#14532d' }}>
                    {currentMethod.easiestVariant}
                  </div>
                </div>
                <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', padding: '12px 14px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
                    ⚠ Hardest Exam Curveball / Trap:
                  </span>
                  <div style={{ fontSize: '13px', marginTop: '4px', color: '#881337' }}>
                    {currentMethod.hardestTrapVariant}
                  </div>
                </div>
              </div>

              {/* Step-by-Step Deterministic Recipe */}
              <div>
                <h3 style={{ fontSize: '14.5px', fontWeight: 700, margin: '0 0 10px 0' }}>
                  Deterministic Step-by-Step Execution Protocol:
                </h3>
                <div className="ec-steps-grid">
                  {currentMethod.recipeSteps.map((s, idx) => (
                    <div key={idx} className="ec-step-row">
                      <span className="ec-step-num">{idx + 1}</span>
                      <div className="ec-step-body">
                        <div className="ec-step-title">{s.title}</div>
                        <div className="ec-step-desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Worked Example Box */}
              {currentMethod.workedExample && (
                <div className="ec-worked-example-box">
                  <div className="ec-worked-example-header">
                    <CheckCircle2 size={16} color="#059669" />
                    <span>Mastery Worked Example:</span>
                  </div>
                  <div className="ec-worked-example-stmt">
                    <MathText text={currentMethod.workedExample.problem} />
                  </div>
                  <div className="ec-worked-example-steps">
                    {currentMethod.workedExample.solution.map((st, i) => (
                      <div key={i} className="ec-worked-example-step">
                        <span className="ec-example-step-num">Step {i + 1}:</span>
                        <MathText text={st} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Curated YouTube Video Review (< 15 mins) */}
              {currentMethod.videoReview && (
                <div className="ec-video-review-card">
                  <div className="ec-video-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="ec-video-play-icon">
                        <Play size={14} fill="#ffffff" color="#ffffff" />
                      </div>
                      <div>
                        <div className="ec-video-badge-row">
                          <span className="ec-video-channel-badge">{currentMethod.videoReview.channel}</span>
                          <span className="ec-video-duration-badge">⏱ {currentMethod.videoReview.duration}</span>
                          <span className="ec-video-quick-badge">Organic Chemistry Review</span>
                        </div>
                        <h4 className="ec-video-title">{currentMethod.videoReview.title}</h4>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="ec-video-toggle-btn"
                        onClick={() => {
                          audio.playClick();
                          setOpenVideoMethodId(openVideoMethodId === currentMethod.id ? null : currentMethod.id);
                        }}
                      >
                        {openVideoMethodId === currentMethod.id ? 'Close Player ✕' : '▶ Watch In-Portal'}
                      </button>
                      <a
                        href={currentMethod.videoReview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ec-video-external-btn"
                      >
                        <ExternalLink size={13} /> Open on YouTube
                      </a>
                    </div>
                  </div>

                  {openVideoMethodId === currentMethod.id && (
                    <div className="ec-video-embed-container">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${currentMethod.videoReview.youtubeId}?autoplay=1`}
                        title={currentMethod.videoReview.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="ec-video-iframe"
                      />
                    </div>
                  )}

                  <div className="ec-video-takeaways">
                    <strong style={{ fontSize: '12px', color: '#1e293b' }}>Key Video Takeaways for Midterm:</strong>
                    <ul style={{ margin: '4px 0 0', paddingLeft: '18px', fontSize: '12.5px', color: '#475569' }}>
                      {currentMethod.videoReview.keyTakeaways.map((point, kIdx) => (
                        <li key={kIdx} style={{ marginTop: '2px' }}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Friend Tip & Concordia Trap Callout */}
              <div className="ec-copilot-tip-box">
                <span className="ec-copilot-label">
                  <Sparkles size={15} /> Study Friend Co-Pilot Insight:
                </span>
                <div style={{ fontSize: '13.5px', lineHeight: '1.5' }}>{currentMethod.friendTip}</div>
              </div>

              <div className="ec-trap-box">
                <span className="ec-trap-label">
                  <AlertTriangle size={15} /> Concordia Exam Trap Alert:
                </span>
                <div style={{ fontSize: '13.5px', lineHeight: '1.5' }}>{currentMethod.trapAlert}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* TAB 2: Tutor Hacks & Speed-Weapons Panel      */}
      {/* --------------------------------------------- */}
      {activeTab === 'tutor_hacks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Universal Protocol Banner */}
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '12px', padding: '20px 24px', color: '#fff', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Sparkles size={16} /> Gradesaver Master Solving System
            </div>
            <h3 style={{ margin: '6px 0 10px', fontSize: '18px', fontWeight: 800 }}>
              The 5-Phase Universal Examination Execution Protocol
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginTop: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: '#60a5fa', display: 'block', fontSize: '12.5px' }}>Phase 1: Normalization</strong>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>Isolate y&apos; with unit coefficient 1 or standard M dx + N dy = 0.</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: '#34d399', display: 'block', fontSize: '12.5px' }}>Phase 2: 4-Gate Classifier</strong>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>Test Gate A (Separable), Gate B (Linear IF), Gate C (Exact), Gate D (Substitutions).</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: '#fbbf24', display: 'block', fontSize: '12.5px' }}>Phase 3: Integration (+C)</strong>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>Apply designated transform; evaluate antiderivatives with exact constant +C.</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: '#f472b6', display: 'block', fontSize: '12.5px' }}>Phase 4: Parameter C (IVP)</strong>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>Substitute (x₀, y₀) immediately before complicated algebraic inversion.</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <strong style={{ color: '#a78bfa', display: 'block', fontSize: '12.5px' }}>Phase 5: Interval Audit</strong>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>State the maximal open interval containing x₀ with no singularities.</span>
              </div>
            </div>
          </div>

          {/* Hacks Grid */}
          <div className="ec-hacks-grid">
            {TUTOR_HACKS.map((hack) => (
              <div
                key={hack.id}
                className="ec-hack-card ec-hack-card-clickable"
                onClick={() => {
                  audio.playClick();
                  setSelectedHackForModal(hack);
                }}
              >
                <div className="ec-hack-header">
                  <span className="ec-hack-badge">{hack.badge}</span>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>{hack.sourceRef}</span>
                </div>
                <h3 className="ec-hack-title">{hack.title}</h3>

                {hack.latex && (
                  <div className="ec-hack-formula-box">
                    <MathText text={`$${hack.latex}$`} />
                  </div>
                )}

                <div className="ec-hack-body">{hack.explanation}</div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 12px', fontSize: '12.5px' }}>
                  <strong style={{ color: '#1e293b' }}>Example Problem Walkthrough:</strong>
                  <div style={{ marginTop: '3px', color: '#475569', fontStyle: 'italic' }}>{hack.exampleProblem}</div>
                </div>

                <div className="ec-hack-tip-callout">
                  <strong>📌 Golden Rule:</strong> {hack.keyRule}
                </div>

                <div className="ec-hack-drill-bar">
                  <span className="ec-hack-expand-hint">
                    <Sparkles size={13} /> Click for Full Masterclass Breakdown
                  </span>
                  <button
                    type="button"
                    className="ec-drill-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDrillMethod('tutor_hacks');
                    }}
                  >
                    <Play size={12} fill="currentColor" /> Drill this hack
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Tutor Hack Deep Dive */}
          {selectedHackForModal && (
            <div className="ec-modal-overlay" onClick={() => setSelectedHackForModal(null)}>
              <div className="ec-modal-sheet" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
                <div className="ec-modal-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} color="#38bdf8" />
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800 }}>
                      Tutor Speed Masterclass: {selectedHackForModal.title}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      type="button"
                      className="ec-drill-btn"
                      onClick={() => {
                        setSelectedHackForModal(null);
                        handleDrillMethod('tutor_hacks');
                      }}
                    >
                      <Play size={12} fill="currentColor" /> Drill this problem
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedHackForModal(null)}
                      style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
                <div className="ec-modal-body">
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                      The 30-Second Solving Formula:
                    </span>
                    <div style={{ fontSize: '18px', fontWeight: 800, margin: '8px 0', color: '#0f172a' }}>
                      <MathText text={`$$${selectedHackForModal.latex}$$`} />
                    </div>
                  </div>

                  {/* Standard Exam Algebra vs Tutor Shortcut */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px', padding: '14px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
                        Standard Exam Method ({selectedHackForModal.standardMinutes})
                      </span>
                      <p style={{ fontSize: '13px', margin: '6px 0 0', color: '#881337', lineHeight: '1.5' }}>
                        {selectedHackForModal.longMethodText}
                      </p>
                    </div>
                    <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '14px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669', textTransform: 'uppercase' }}>
                        Tutor Shortcut ({selectedHackForModal.hackSeconds})
                      </span>
                      <p style={{ fontSize: '13px', margin: '6px 0 0', color: '#065f46', lineHeight: '1.5' }}>
                        {selectedHackForModal.hackMethodText}
                      </p>
                    </div>
                  </div>

                  {/* Proof */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
                    <strong style={{ fontSize: '13px', color: '#1e293b' }}>Mathematical Proof / Why It Works 100% of the Time:</strong>
                    <div style={{ fontSize: '13.5px', marginTop: '6px', color: '#334155' }}>
                      <MathText text={selectedHackForModal.proof} />
                    </div>
                  </div>

                  {/* Example */}
                  <div style={{ background: 'rgba(79, 70, 229, 0.05)', border: '1px solid rgba(79, 70, 229, 0.2)', borderRadius: '8px', padding: '14px' }}>
                    <strong style={{ fontSize: '13px', color: '#4338ca' }}>Concordia Exam Example Walkthrough:</strong>
                    <div style={{ fontSize: '13.5px', marginTop: '4px', color: '#1e293b' }}>
                      <MathText text={selectedHackForModal.exampleProblem} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* TAB 3: Calculus Survival Vault (Must-Retain)  */}
      {/* --------------------------------------------- */}
      {activeTab === 'vault' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* AI Formula Diagnostic Assistant at Top */}
          <div className="ec-formula-ai-assistant">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Brain size={18} color="#fbbf24" />
              <strong>AI Formula Diagnostic Assistant: Which formula would you like to master?</strong>
            </div>
            <div className="ec-formula-picker-row">
              {Object.keys(AI_FORMULA_ADVICE).map((fKey) => (
                <button
                  key={fKey}
                  type="button"
                  className={`ec-formula-pill-btn ${selectedFormulaAi === fKey ? 'active' : ''}`}
                  onClick={() => {
                    audio.playClick();
                    setSelectedFormulaAi(fKey);
                  }}
                >
                  {AI_FORMULA_ADVICE[fKey].name}
                </button>
              ))}
            </div>

            {selectedFormulaAi && AI_FORMULA_ADVICE[selectedFormulaAi] && (
              <div className="ec-formula-ai-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#fde68a', textTransform: 'uppercase' }}>
                    💡 Memory Mnemonic &amp; Lock-in Strategy
                  </span>
                  <button
                    type="button"
                    className="ec-drill-btn"
                    onClick={() => handleDrillMethod('formulas')}
                  >
                    <Play size={12} fill="currentColor" /> Drill This Formula Now
                  </button>
                </div>
                <div style={{ fontSize: '13.5px', color: '#f1f5f9', lineHeight: '1.5' }}>
                  {AI_FORMULA_ADVICE[selectedFormulaAi].mnemonic}
                </div>
                <div style={{ fontSize: '12.5px', color: '#cbd5e1', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '6px' }}>
                  <strong>Concordia Exam Context:</strong> {AI_FORMULA_ADVICE[selectedFormulaAi].examUtility}
                </div>
                <div style={{ fontSize: '12px', color: '#fca5a5' }}>
                  ⚠️ <strong>Dangerous Slip:</strong> {AI_FORMULA_ADVICE[selectedFormulaAi].trapToAvoid}
                </div>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="ec-vault-controls">
            <div className="ec-vault-filters">
              <button
                className={`ec-vault-filter-btn ${vaultFilter === 'all' ? 'active' : ''}`}
                onClick={() => setVaultFilter('all')}
              >
                All Must-Retain ({CALCULUS_VAULT.length})
              </button>
              <button
                className={`ec-vault-filter-btn ${vaultFilter === 'integral' ? 'active' : ''}`}
                onClick={() => setVaultFilter('integral')}
              >
                Antiderivatives
              </button>
              <button
                className={`ec-vault-filter-btn ${vaultFilter === 'deriv' ? 'active' : ''}`}
                onClick={() => setVaultFilter('deriv')}
              >
                Derivatives
              </button>
              <button
                className={`ec-vault-filter-btn ${vaultFilter === 'pillar' ? 'active' : ''}`}
                onClick={() => setVaultFilter('pillar')}
              >
                4 Pillars (DI &amp; PFD)
              </button>
            </div>

            {/* Formula Search Bar */}
            <div className="ec-vault-search-container">
              <Search size={15} color="#64748b" />
              <input
                type="text"
                className="ec-vault-search-input"
                placeholder="Search formulas (e.g. sec, ln, arctan)..."
                value={vaultSearchQuery}
                onChange={(e) => setVaultSearchQuery(e.target.value)}
              />
              {vaultSearchQuery && (
                <button
                  type="button"
                  onClick={() => setVaultSearchQuery('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#94a3b8' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Blur / Flashcard Test Button */}
            <button
              type="button"
              className={`ec-blur-toggle-btn ${blurFormulas ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setBlurFormulas((b) => !b);
              }}
            >
              {blurFormulas ? <Eye size={16} /> : <EyeOff size={16} />}
              <span>{blurFormulas ? 'Disable Flashcard Blur' : 'Flashcard Mode (Blur Formulas to Test Recall)'}</span>
            </button>
          </div>

          {blurFormulas && (
            <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', color: '#92400e', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={16} />
              <span><strong>Flashcard Mode Active:</strong> Try to recite the formula out loud, then click any blurred formula card to reveal its right-hand side!</span>
            </div>
          )}

          {/* Formulas Grid */}
          <div className="ec-formula-cards-grid">
            {filteredVault.map((item) => {
              const isBlurred = blurFormulas && !unblurredIds.has(item.id);
              return (
                <div key={item.id} className="ec-formula-card">
                  <div className="ec-formula-header">
                    <span className="ec-formula-name">{item.name}</span>
                    <span
                      className={`ec-diff-badge ${
                        item.difficulty === 'easy'
                          ? 'ec-diff-easy'
                          : item.difficulty === 'med'
                          ? 'ec-diff-med'
                          : 'ec-diff-hard'
                      }`}
                    >
                      {item.difficulty}
                    </span>
                  </div>

                  <div
                    className={`ec-formula-expression ${isBlurred ? 'blurred' : ''}`}
                    onClick={() => blurFormulas && toggleBlurFormula(item.id)}
                  >
                    <MathText text={`$${item.latex}$`} />
                    {isBlurred && <span className="ec-unblur-hint">Click to Reveal</span>}
                  </div>

                  <div className="ec-formula-application">
                    <strong>Exam Utility:</strong> {item.whyItMatters}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* TAB 4: Unofficial Past Midterm Solver Walkthroughs */}
      {/* --------------------------------------------- */}
      {activeTab === 'past_exams' && (
        <div className="ec-past-exams-container">
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800 }}>Concordia Unofficial Past Midterm Examination Bank</h3>
              <p style={{ margin: '3px 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
                Step-by-step expansions of actual questions handed out on ENGR 213 midterms (Unofficial Student-Collected Archives).
              </p>
            </div>
            {onViewPdf && (
              <button
                type="button"
                className="ec-blur-toggle-btn"
                style={{ background: '#4f46e5', color: '#fff', border: 'none' }}
                onClick={() => {
                  const doc: CourseDocument = {
                    id: 'ENGR213:past_midterms',
                    courseId: 'ENGR213',
                    categoryId: 'Midterm Prep',
                    categoryTitle: 'Midterm Prep',
                    title: 'Unofficial Past Midterm Examinations Solved Master Guide (2011–2018)',
                    filename: 'ENGR 213 - Past Midterm Examinations Solved Master Guide (2011-2018).pdf',
                    relativePath: 'Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Past Midterm Examinations Solved Master Guide (2011-2018).pdf',
                    tags: ['Midterm Prep', 'Unofficial Midterms'],
                    summary: 'Complete solved Concordia ENGR 213 past midterm examinations (unofficial student archives).'
                  };
                  onViewPdf(doc);
                }}
              >
                <FileText size={15} />
                <span>Open Solved Midterm Master PDF</span>
              </button>
            )}
          </div>

          {/* Unofficial Extracted Past Papers Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', margin: '14px 0 8px' }}>
              <h4 style={{ fontSize: '14.5px', fontWeight: 800, margin: 0, color: '#1e293b' }}>
                📁 Unofficial Past Midterm Exam Papers (Click to View in Portal):
              </h4>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['all', '2018', '2017', '2016', '2013', '2012', '2011'].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => {
                      audio.playClick();
                      setSelectedYearFilter(yr);
                    }}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: selectedYearFilter === yr ? '#4f46e5' : '#cbd5e1',
                      background: selectedYearFilter === yr ? '#4f46e5' : '#ffffff',
                      color: selectedYearFilter === yr ? '#ffffff' : '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    {yr === 'all' ? 'All Years' : yr}
                  </button>
                ))}
              </div>
            </div>

            <div className="ec-exam-papers-grid">
              {filteredMidterms.map((paper) => (
                <button
                  key={paper.filename}
                  type="button"
                  className="ec-paper-tile"
                  onClick={() => {
                    audio.playClick();
                    if (onViewPdf) {
                      onViewPdf({
                        id: `ENGR213:${paper.filename}`,
                        courseId: 'ENGR213',
                        categoryId: 'Midterm',
                        categoryTitle: 'Midterm Papers',
                        title: paper.title,
                        filename: paper.filename,
                        relativePath: paper.relativePath,
                        tags: ['Unofficial Exam', paper.year],
                        summary: paper.scope
                      });
                    }
                  }}
                >
                  <div className="ec-paper-info">
                    <div className="ec-paper-icon">
                      <FileText size={18} />
                    </div>
                    <div>
                      <div className="ec-paper-title">{paper.title}</div>
                      <div className="ec-paper-sub">{paper.scope}</div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="#94a3b8" />
                </button>
              ))}
            </div>
          </div>

          {PAST_PROBLEMS.map((prob) => (
            <div key={prob.id} className="ec-problem-card">
              <div className="ec-problem-top-bar">
                <div className="ec-problem-meta-group">
                  <span className="ec-exam-tag">{prob.exam}</span>
                  <span className="ec-topic-tag">{prob.topic}</span>
                  <span
                    className={`ec-diff-badge ${
                      prob.difficulty === 'easy'
                        ? 'ec-diff-easy'
                        : prob.difficulty === 'med'
                        ? 'ec-diff-med'
                        : 'ec-diff-hard'
                    }`}
                  >
                    {prob.difficulty}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    ⏱ Target: {prob.timeTarget}
                  </span>
                </div>
              </div>

              {/* Problem Statement Box */}
              <div className="ec-problem-stmt-box">
                <MathText text={prob.problemStatement} />
              </div>

              {/* Step by Step Breakdown */}
              <div className="ec-solution-drawer">
                {prob.steps.map((st, sIdx) => (
                  <div key={sIdx} className="ec-sol-step">
                    <div className="ec-sol-step-header">
                      <span className="ec-sol-step-title">
                        <CheckCircle2 size={16} color="#4f46e5" />
                        <span>{st.title}</span>
                      </span>
                    </div>
                    <div className="ec-sol-step-body">
                      <MathText text={st.content} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Friend Intuition & Concordia Trap */}
              <div className="ec-copilot-tip-box">
                <span className="ec-copilot-label">
                  <Sparkles size={15} /> Co-Pilot Think-Aloud:
                </span>
                <div style={{ fontSize: '13.5px' }}>{prob.friendIntuition}</div>
              </div>

              <div className="ec-trap-box">
                <span className="ec-trap-label">
                  <AlertTriangle size={15} /> Concordia Trap Warning:
                </span>
                <div style={{ fontSize: '13.5px' }}>{prob.concordiaTrap}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* TAB 5: Interactive Brain Drill & Baby Steps   */}
      {/* --------------------------------------------- */}
      {activeTab === 'trainer' && (
        <div id="ec-drill-section" className="ec-trainer-card">
          {/* Subject Filter Pills Bar */}
          <div>
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Choose a Subject to Drill or Practice All:
            </span>
            <div className="ec-subject-pills-bar" style={{ marginTop: '6px' }}>
              {[
                { id: 'all', label: 'All Midterm Practice (Full Exam)' },
                { id: 'separable', label: '1. Separable' },
                { id: 'linear_if', label: '2. Linear IF' },
                { id: 'exact', label: '3. Exact ODE' },
                { id: 'non_exact', label: '4. Non-Exact IF' },
                { id: 'bernoulli', label: '5. Bernoulli' },
                { id: 'homogeneous', label: '6. Homogeneous' },
                { id: 'linear_arg', label: '7. Linear Arg' },
                { id: 'second_order', label: '8. 2nd-Order' },
                { id: 'tutor_hacks', label: '⚡ Tutor Hacks' },
                { id: 'formulas', label: '🧠 Formula Retention' }
              ].map((subj) => (
                <button
                  key={subj.id}
                  type="button"
                  className={`ec-subject-pill-btn ${drillSubjectFilter === subj.id ? 'active' : ''}`}
                  onClick={() => {
                    audio.playClick();
                    setDrillSubjectFilter(subj.id);
                    setDrillIdx(0);
                  }}
                >
                  {subj.label}
                </button>
              ))}
            </div>
          </div>

          {/* Drill Top Bar (Brain Drill Style as shown in Screenshot 3) */}
          <div className="ec-drill-top-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Brain size={18} color="#4f46e5" />
              <div>
                <strong style={{ fontSize: '14px', color: '#1e293b' }}>
                  Brain Drill · {activeDrillQuestions.length} Questions
                </strong>
                <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                  ENGR 213 · {currentDrillQuestion.topic}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, color: '#475569' }}>
                <Timer size={15} color="#64748b" />
                <span>{formatTimer(timerSeconds)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                <Target size={15} color="#4f46e5" />
                <span>Score: {drillScore.correct} / {drillScore.total}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 700, color: '#ea580c' }}>
                <Flame size={15} />
                <span>Streak: {drillStreak}</span>
              </div>
            </div>
          </div>

          {/* Question Number Bubbles Pagination (Matching Screenshot 3) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <button
              type="button"
              className="ec-blur-toggle-btn"
              disabled={drillIdx === 0}
              onClick={() => {
                audio.playClick();
                setDrillIdx((i) => Math.max(0, i - 1));
              }}
            >
              &lt; Prev
            </button>

            <div className="ec-drill-bubbles-container">
              {activeDrillQuestions.map((q, idx) => {
                const ans = drillAnswers[q.id];
                let bubbleClass = 'ec-bubble-btn';
                if (drillIdx === idx) bubbleClass += ' active';
                else if (ans !== undefined) {
                  if (ans === q.correctIndex) bubbleClass += ' answered-correct';
                  else bubbleClass += ' answered-wrong';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    className={bubbleClass}
                    onClick={() => {
                      audio.playClick();
                      setDrillIdx(idx);
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="ec-blur-toggle-btn"
              disabled={drillIdx === activeDrillQuestions.length - 1}
              onClick={() => {
                audio.playClick();
                setDrillIdx((i) => Math.min(activeDrillQuestions.length - 1, i + 1));
              }}
            >
              Next &gt;
            </button>
          </div>

          {/* Question Card */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span className="ec-card-tag">{currentDrillQuestion.topic}</span>
              <span className="ec-card-tag" style={{ background: '#fef3c7', color: '#92400e' }}>
                {currentDrillQuestion.difficulty}
              </span>
            </div>
            <div style={{ fontSize: '16.5px', fontWeight: 600, color: '#0f172a', lineHeight: '1.6' }}>
              <MathText text={currentDrillQuestion.question} />
            </div>
          </div>

          {/* Options Grid (Letters A, B, C, D) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {currentDrillQuestion.options.map((opt, oIdx) => {
              const letter = ['A', 'B', 'C', 'D'][oIdx];
              const userChoice = drillAnswers[currentDrillQuestion.id];
              const isSelected = userChoice === oIdx;
              const isCorrect = oIdx === currentDrillQuestion.correctIndex;

              let btnStyle: React.CSSProperties = {
                padding: '12px 18px',
                borderRadius: '10px',
                border: '1.5px solid #cbd5e1',
                background: '#ffffff',
                cursor: userChoice !== undefined ? 'default' : 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '14.5px',
                transition: 'all 0.15s ease'
              };

              if (userChoice !== undefined) {
                if (isSelected && isCorrect) {
                  btnStyle.borderColor = '#10b981';
                  btnStyle.background = '#dcfce7';
                  btnStyle.color = '#065f46';
                  btnStyle.fontWeight = 700;
                } else if (isSelected && !isCorrect) {
                  btnStyle.borderColor = '#ef4444';
                  btnStyle.background = '#fee2e2';
                  btnStyle.color = '#991b1b';
                } else if (isCorrect) {
                  btnStyle.borderColor = '#10b981';
                  btnStyle.background = '#ecfdf5';
                  btnStyle.color = '#065f46';
                }
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  style={btnStyle}
                  onClick={() => handleOptionSelect(oIdx)}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isSelected ? (isCorrect ? '#10b981' : '#ef4444') : '#f1f5f9',
                      color: isSelected ? '#ffffff' : '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '12px'
                    }}
                  >
                    {letter}
                  </span>
                  <div>
                    <MathText text={opt} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Baby-Step Derivation and Mistake Analysis (WorkedSolution Integration) */}
          {drillAnswers[currentDrillQuestion.id] !== undefined && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '6px' }}>
              <div
                className={`ec-answer-feedback-banner ${
                  drillAnswers[currentDrillQuestion.id] === currentDrillQuestion.correctIndex ? 'correct' : 'wrong'
                }`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {drillAnswers[currentDrillQuestion.id] === currentDrillQuestion.correctIndex ? (
                    <CheckCircle2 size={18} color="#059669" />
                  ) : (
                    <AlertTriangle size={18} color="#dc2626" />
                  )}
                  <span>
                    {drillAnswers[currentDrillQuestion.id] === currentDrillQuestion.correctIndex
                      ? 'Correct! Spot on engineering reasoning.'
                      : "Incorrect! Let's analyze where the algebra slipped."}
                  </span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, opacity: 0.9 }}>
                  {currentDrillQuestion.explanation?.reference || currentDrillQuestion.topic}
                </span>
              </div>

              {/* Render the portal's complete WorkedSolution component */}
              <WorkedSolution
                question={currentDrillQuestion}
                selectedIndex={drillAnswers[currentDrillQuestion.id]}
                mode={drillAnswers[currentDrillQuestion.id] === currentDrillQuestion.correctIndex ? 'correct' : 'wrong'}
              />
            </div>
          )}

          {/* Mark Mastery Toggle */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button
              type="button"
              className="ec-blur-toggle-btn"
              style={{
                background: masteredMap[currentDrillQuestion.id] ? '#15803d' : '#f1f5f9',
                color: masteredMap[currentDrillQuestion.id] ? '#ffffff' : '#334155',
                borderColor: masteredMap[currentDrillQuestion.id] ? '#15803d' : '#cbd5e1'
              }}
              onClick={() => toggleMastered(currentDrillQuestion.id)}
            >
              {masteredMap[currentDrillQuestion.id] ? <Check size={16} /> : <Target size={16} />}
              <span>{masteredMap[currentDrillQuestion.id] ? 'Mastered! ✓' : 'Mark as Mastered'}</span>
            </button>
          </div>
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* 1-PAGE EMERGENCY CHEAT SHEET MODAL OVERLAY     */}
      {/* --------------------------------------------- */}
      {showEmergencyCheatSheet && (
        <div className="ec-modal-overlay" onClick={() => setShowEmergencyCheatSheet(false)}>
          <div className="ec-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="ec-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={20} color="#fbbf24" />
                <div>
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800 }}>
                    1-Page Emergency Midterm Cheat Sheet
                  </h3>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                    Everything you need to retain in your head for the ENGR 213 Midterm (No formula sheet allowed)
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => window.print()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Printer size={14} /> Print / Save PDF
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmergencyCheatSheet(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="ec-modal-body">
              <div className="ec-cheat-grid">
                {/* Card 1: 4 First-Order Master Forms */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Compass size={16} color="#4f46e5" />
                    <span>The 4 First-Order Master Forms</span>
                  </div>
                  <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**1. Separable:** $\frac{dy}{dx} = g(x)h(y) \implies \int \frac{dy}{h(y)} = \int g(x)dx + C$" />
                    </div>
                    <div>
                      <MathText text="**2. Linear:** $y' + P(x)y = Q(x) \implies \mu(x) = e^{\int P(x)dx}, \quad y = \frac{1}{\mu}[\int \mu Q dx + C]$" />
                    </div>
                    <div>
                      <MathText text="**3. Exact:** $M\,dx + N\,dy = 0 \iff M_y = N_x \implies \Psi(x,y) = C$" />
                    </div>
                    <div>
                      <MathText text="**4. Bernoulli:** $y' + P(x)y = Q(x)y^n \implies u = y^{1-n}, \quad u' + (1-n)Pu = (1-n)Q$" />
                    </div>
                  </div>
                </div>

                {/* Card 2: Essential Antiderivatives */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Brain size={16} color="#059669" />
                    <span>Must-Retain Antiderivatives</span>
                  </div>
                  <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div><MathText text="$\int \tan(x)\,dx = \ln|\sec(x)| = -\ln|\cos(x)| + C$" /></div>
                    <div><MathText text="$\int \sec(x)\,dx = \ln|\sec(x) + \tan(x)| + C$" /></div>
                    <div><MathText text="$\int \frac{1}{x^2 + a^2}\,dx = \frac{1}{a}\arctan\left(\frac{x}{a}\right) + C$" /></div>
                    <div><MathText text="$\int \frac{1}{\sqrt{a^2 - x^2}}\,dx = \arcsin\left(\frac{x}{a}\right) + C$" /></div>
                    <div><MathText text="$\int \frac{1}{a^2 - u^2}\,du = \frac{1}{2a}\ln\left|\frac{a+u}{a-u}\right| + C$" /></div>
                  </div>
                </div>

                {/* Card 3: Non-Exact Integrating Factor Rules */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Zap size={16} color="#d97706" />
                    <span>Non-Exact Integrating Factor Rules</span>
                  </div>
                  <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Condition 1 ($x$ only):** If $\frac{M_y - N_x}{N} = f(x)$, then $\mu(x) = e^{\int f(x)dx}$" />
                    </div>
                    <div>
                      <MathText text="**Condition 2 ($y$ only):** If $\frac{N_x - M_y}{M} = g(y)$, then $\mu(y) = e^{\int g(y)dy}$" />
                    </div>
                    <div style={{ color: '#b45309', background: '#fef3c7', padding: '6px 8px', borderRadius: '6px', fontSize: '11.5px' }}>
                      <MathText text="⚠️ **Mnemonic:** Subtract the partial of the *other* function, then divide by matching denominator: $M_y - N_x$ divides by $N$!" />
                    </div>
                  </div>
                </div>

                {/* Card 4: 2nd Order Constant Coeffs Quick Roots */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Layers size={16} color="#dc2626" />
                    <MathText text="2nd Order: $a y'' + b y' + c y = 0$" />
                  </div>
                  <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Real Distinct ($r_1 \ne r_2$):** $y_h = C_1 e^{r_1 x} + C_2 e^{r_2 x}$" />
                    </div>
                    <div>
                      <MathText text="**Repeated Root ($r_1 = r_2 = r$):** $y_h = C_1 e^{r x} + C_2 x e^{r x}$" />
                    </div>
                    <div>
                      <MathText text="**Complex Conjugate ($\alpha \pm i\beta$):** $y_h = e^{\alpha x}(C_1 \cos(\beta x) + C_2 \sin(\beta x))$" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
