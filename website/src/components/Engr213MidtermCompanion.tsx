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
  Timer,
  Clapperboard
} from 'lucide-react';
import { MathText } from '../utils/mathRenderer';
import { audio } from '../utils/audio';
import { CourseDocument, PracticeQuestion } from '../types';
import { WorkedSolution } from './WorkedSolution';
import { ENGR213_MIDTERM_DRILL_BANKS, CompanionDrillQuestion } from '../data/engr213_midterm_drill_banks';
import { MotionLessonPlayer, formatLessonTime } from './MotionLessonPlayer';
import { ENGR213_MOTION_LESSONS } from '../data/engr213Lessons';
import './Engr213MidtermCompanion.css';

interface Props {
  onViewPdf?: (doc: CourseDocument, page?: number) => void;
  onBack?: () => void;
  initialTab?: 'classifier' | 'tutor_videos' | 'tutorials' | 'tutor_hacks' | 'vault' | 'past_exams' | 'trainer';
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
      youtubeId: 'C7nuJcJriWM',
      url: 'https://www.youtube.com/watch?v=C7nuJcJriWM',
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
      youtubeId: 'gd1FYn86P0c',
      url: 'https://www.youtube.com/watch?v=gd1FYn86P0c',
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
      youtubeId: 'G7Y3KkEtwco',
      url: 'https://www.youtube.com/watch?v=G7Y3KkEtwco',
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
      title: 'First-Order Differential Equations Ultimate Summary',
      channel: 'bprp calculus basics',
      duration: '8 mins',
      youtubeId: 'AsVCAUq0lAc',
      url: 'https://www.youtube.com/watch?v=AsVCAUq0lAc',
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
    id: 'complex_numbers',
    name: '8. Complex Numbers: Arithmetic, Conjugates & Division (Sec 17.1)',
    standardForm: 'z = x + iy, \\quad \\bar{z} = x - iy, \\quad \\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2}',
    formulaDisplay: 'z_1 z_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + y_1 x_2), \\quad \\frac{z_1}{z_2} = \\frac{(x_1 + iy_1)(x_2 - iy_2)}{x_2^2 + y_2^2}, \\quad |z| = \\sqrt{x^2 + y^2}',
    difficulty: 'easy',
    diffLabel: 'High Frequency (Sec 17.1 Scope)',
    visualCue: 'Complex arithmetic operations, FOIL with i² = -1, complex conjugates z̄, algebraic division requiring real denominator, modulus |z|, or triangle inequality.',
    fastestMove: 'To divide, multiply top and bottom by the denominator’s conjugate z̄₂ so the denominator becomes the real number |z₂|² = x₂² + y₂². For i^n, divide n by 4 and evaluate i^r.',
    easiestVariant: 'Conjugate multiplication: (3 - 2i)(3 + 2i) = 3² + 2² = 13.',
    hardestTrapVariant: 'Division denominator slip: computing (3 - 4i)(3 + 4i) as 9 - 16 = -7 instead of 9 - (-16) = 25. And confusing imaginary part Im(z): Im(3 - 4i) is -4, NOT -4i.',
    recipeSteps: [
      { title: 'Step 1: Simplify Powers of i', desc: 'Use i¹ = i, i² = -1, i³ = -i, i⁴ = 1. For large power i^n, evaluate remainder n mod 4.' },
      { title: 'Step 2: Division via Conjugate', desc: 'Multiply numerator and denominator by denominator conjugate z̄ = x - iy.' },
      { title: 'Step 3: Expand Numerator & Real Denominator', desc: 'Expand numerator using i² = -1. Denominator is strictly the real positive number x² + y².' },
      { title: 'Step 4: Separate into Standard Form', desc: 'Split into real part Re(z) and imaginary part Im(z): a + bi.' }
    ],
    workedExample: {
      problem: 'Simplify the quotient $\\frac{4 + 2i}{1 - i}$ into standard rectangular form $a + bi$, and state its modulus $|z|$.',
      solution: [
        'Multiply numerator and denominator by conjugate of denominator $\\bar{z} = 1 + i$: $\\frac{(4 + 2i)(1 + i)}{(1 - i)(1 + i)}$',
        'Evaluate real denominator: $(1 - i)(1 + i) = 1^2 - i^2 = 1 - (-1) = 2$',
        'Expand numerator: $(4)(1) + 4(i) + 2i(1) + 2i^2 = 4 + 6i + 2(-1) = 2 + 6i$',
        'Divide each term by 2: $\\frac{2 + 6i}{2} = 1 + 3i$',
        'Compute modulus: $|z| = \\sqrt{1^2 + 3^2} = \\sqrt{10}$'
      ]
    },
    videoReview: {
      title: 'Complex Numbers - Operations, Conjugates & Modulus',
      channel: 'The Organic Chemistry Tutor',
      duration: '11 mins',
      youtubeId: 'bOC9w-aW2jQ',
      url: 'https://www.youtube.com/watch?v=bOC9w-aW2jQ',
      keyTakeaways: [
        'FOIL complex numbers and always replace i² with -1.',
        'Multiply by conjugate to turn the denominator into a real number x² + y².',
        'Extract real Re(z) and imaginary Im(z) parts cleanly without attaching i to Im(z).'
      ]
    },
    friendTip: 'Whenever you see a complex fraction on Midterm 1, never try to guess the answer. Write out (x₁ + iy₁)(x₂ - iy₂) / (x₂² + y₂²) immediately — it takes 30 seconds and guarantees 100% of the marks!',
    trapAlert: 'Never include "i" when stating the imaginary part! If z = 5 - 3i, Re(z) = 5 and Im(z) = -3 (NOT -3i). Writing -3i loses marks.'
  },
  {
    id: 'complex_numbers',
    name: '9. Polar Forms, De Moivre’s Powers & n-th Roots (Sec 17.2)',
    standardForm: 'z = a + bi = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)',
    formulaDisplay: 'r = |z| = \\sqrt{a^2 + b^2}, \\quad \\theta = \\text{Arg}(z) \\in (-\\pi, \\pi], \\quad e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\quad z^n = r^n e^{in\\theta}',
    difficulty: 'easy',
    diffLabel: 'Foundational (Sec 17.1 Scope)',
    visualCue: 'Complex numbers in Cartesian rectangular a + bi or polar exponential r e^{iθ}, modulus |z|, principal argument Arg(z), powers zⁿ via De Moivre, or complex roots in auxiliary equations.',
    fastestMove: 'Convert Cartesian (a, b) to polar radius r = √(a² + b²) and angle θ = atan2(b, a). When computing powers zⁿ, use De Moivre’s theorem (r e^{iθ})ⁿ = rⁿ e^{inθ}.',
    easiestVariant: 'Modulus and argument of z = 1 + i: r = √2, θ = π/4 ⟹ z = √2 e^{iπ/4}.',
    hardestTrapVariant: 'Failing to check the quadrant: if z = -1 + i√3 (Quadrant 2), writing arctan(√3 / -1) = -π/3 gives a Quadrant 4 angle (WRONG!). True principal argument is π - π/3 = 2π/3.',
    recipeSteps: [
      { title: 'Step 1: Calculate Modulus', desc: 'r = |z| = √(a² + b²). Modulus is always non-negative.' },
      { title: 'Step 2: Determine Quadrant & Argument', desc: 'Compute reference angle θ₀ = arctan(|b/a|). Check signs: Q1 (θ = θ₀), Q2 (θ = π - θ₀), Q3 (θ = -π + θ₀), Q4 (θ = -θ₀).' },
      { title: 'Step 3: Euler’s Exponential Form', desc: 'Express z = r e^{iθ} = r(cos θ + i sin θ).' },
      { title: 'Step 4: De Moivre’s Theorem for Powers', desc: 'zⁿ = rⁿ e^{inθ} = rⁿ(cos(nθ) + i sin(nθ)). Reduce angle modulo 2π.' }
    ],
    workedExample: {
      problem: 'Express $z = -2 + 2i\\sqrt{3}$ in polar exponential form $r e^{i\\theta}$, and evaluate $z^4$ in standard rectangular form $a + bi$.',
      solution: [
        'Calculate modulus: $r = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$',
        'Determine quadrant: $a = -2 < 0, b = 2\\sqrt{3} > 0 \\implies z$ lies in Quadrant 2',
        'Reference angle: $\\theta_0 = \\arctan\\left(\\frac{2\\sqrt{3}}{2}\\right) = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3} \\implies \\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$',
        'Polar exponential form: $z = 4 e^{i\\frac{2\\pi}{3}}$',
        'Apply De Moivre: $z^4 = 4^4 e^{i 4(2\\pi/3)} = 256 e^{i\\frac{8\\pi}{3}} = 256 e^{i\\left(2\\pi + \\frac{2\\pi}{3}\\right)} = 256 e^{i\\frac{2\\pi}{3}}$',
        'Convert to rectangular form: $256\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right) = 256\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = -128 + 128i\\sqrt{3}$'
      ]
    },
    videoReview: {
      title: 'Complex Numbers - Polar Form, Modulus, Argument & Euler’s Identity',
      channel: 'The Organic Chemistry Tutor',
      duration: '12 mins',
      youtubeId: 'bOC9w-aW2jQ',
      url: 'https://www.youtube.com/watch?v=bOC9w-aW2jQ',
      keyTakeaways: [
        'Converting Cartesian a + bi to polar form r(cos θ + i sin θ) and exponential r e^{iθ}.',
        'Determining the principal argument Arg(z) in (-π, π] with careful quadrant checks.',
        'Applying De Moivre’s theorem to evaluate high powers and roots in seconds.'
      ]
    },
    friendTip: 'Always sketch a quick 5-second Cartesian axis to place the point before writing down θ. Never trust raw arctan(b/a) on a calculator without checking your quadrant!',
    trapAlert: 'In De Moivre’s theorem (r e^{iθ})ⁿ, students often forget to raise r to the power n! It is rⁿ e^{inθ}, NOT r e^{inθ}.'
  }];

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
    whyItMatters: 'Crucial for First-Order Linear integrating factors: y\' + sec(x)y = f(x) where μ(x) = exp(∫ sec x dx) = |sec x + tan x|. You cannot deduce this on the fly under exam pressure; memorize it!'
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
    whyItMatters: 'Used in first-order integrating factors when evaluating ∫ μ(x) Q(x) dx with polynomial × exponential/trig functions (e.g. ∫ x² e^{3x} dx or ∫ x sin(2x) dx). Use the 2-column D and I ladder to integrate in 20 seconds!'
  },
  {
    id: 'f9',
    category: 'pillar',
    name: 'Heaviside Cover-Up Rule for Partial Fractions',
    latex: '\\frac{P(x)}{(x - a)(x - b)} = \\frac{P(a)/(a-b)}{x - a} + \\frac{P(b)/(b-a)}{x - b}',
    difficulty: 'easy',
    whyItMatters: 'Solves coefficients A and B in 10 seconds flat by covering the pole with your thumb. Avoids solving 2x2 linear systems entirely.'
  },
  {
    id: 'f_complex',
    category: 'pillar',
    name: 'Euler’s Formula & Complex Polar Form (Sec 17.1)',
    latex: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\quad z = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)',
    difficulty: 'easy',
    whyItMatters: 'Fundamental Section 17.1 identity. Converts Cartesian a + bi to polar exponential r e^{iθ}. Underpins complex roots in Section 17.2 auxiliary equations.'
  },
  {
    id: 'f_roots',
    category: 'pillar',
    name: 'The n-th Roots of Complex Numbers (Sec 17.2)',
    latex: 'w_k = r^{1/n}\\left[\\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right)\\right] = r^{1/n} e^{i\\frac{\\theta + 2k\\pi}{n}}, \\quad k = 0, 1, \\dots, n-1',
    difficulty: 'med',
    whyItMatters: 'Official Midterm 1 Section 17.2 scope. Finds all n distinct complex roots of w^n = z. All roots lie on a circle of radius r^{1/n} separated by 2π/n radians.'
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
    examUtility: 'Standard Concordia test question in first-order linear integrating factors: y\' + sec(x)y = f(x) where μ(x) = |sec(x) + tan(x)|.',
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
  },
  f_complex: {
    id: 'f_complex',
    name: 'Euler’s Formula: e^{iθ} = cos(θ) + i sin(θ)',
    mnemonic: 'Euler connects exponential magnitude to circular rotation: e^{iθ} = cos θ + i sin θ!',
    examUtility: 'Instantly computes powers via De Moivre (r e^{iθ})ⁿ = rⁿ e^{inθ} and derives real trigonometric solutions from complex auxiliary roots.',
    trapToAvoid: 'Forgetting the quadrant: if x < 0 and y > 0 (Quadrant 2), θ = π - arctan(|y/x|), not -arctan(|y/x|).',
    drillQuestionId: 'dq_formula_euler'
  },
  f_roots: {
    id: 'f_roots',
    name: 'All n-th Roots of Complex Numbers (Sec 17.2)',
    mnemonic: 'Radius is r^{1/n}, initial angle is θ/n, then advance by 2π/n radians to circle around n times!',
    examUtility: 'Guaranteed question on Midterm 1: finds all n roots of w^n = z without missing any roots.',
    trapToAvoid: 'Forgetting to divide the base argument θ by n, or calculating in degrees instead of radians.',
    drillQuestionId: 'cpx_41'
  }
};

// ----------------------------------------------------
// 3. DATA: Tutor's Secret Weapons & Speed-Hacks
// ----------------------------------------------------
export interface TutorHackVariant {
  id: string;
  name: string;
  problem: string;
  options: string[];
  correctIndex: number;
  babySteps: string[];
  trapExplanation: string;
}

export interface TutorHack {
  id: string;
  badge: string;
  title: string;
  latex?: string;
  sourceRef: string;
  explanation: string;
  mentalAnchor: string;
  exampleProblem: string;
  keyRule: string;
  standardMinutes: string;
  hackSeconds: string;
  longMethodText: string;
  hackMethodText: string;
  proof: string;
  drillQuestionId: string;
  variants: TutorHackVariant[];
}

const TUTOR_HACKS: TutorHack[] = [
  {
    id: 'th1',
    badge: 'Forensic Modeling Shortcut',
    title: 'Newton’s Law 3-Point Shortcut (Cancel Tm²)',
    latex: '(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2',
    sourceRef: 'Tutor Notes Page 35',
    explanation: 'When 3 temperatures are recorded at equal time steps (e.g. t = 0, 0.5, 1.0 min with T = 70°, 110°, 145°), never solve for decay constant k. Equating ratios and cross-multiplying cancels Tm² on both sides, yielding a simple linear equation for ambient oven temperature Tm in 30 seconds!',
    mentalAnchor: 'The Geometric Mean Balance: Remember that in exponential decay with equal time steps, (T₂ - Tm) is the exact geometric mean of (T₁ - Tm) and (T₃ - Tm). Just balance outer product = middle squared!',
    exampleProblem: '(145 - Tm)(70 - Tm) = (110 - Tm)² ⟹ 10150 - 215 Tm + Tm² = 12100 - 220 Tm + Tm² ⟹ 5 Tm = 1950 ⟹ Tm = 390°F.',
    keyRule: 'Strictly valid when time intervals are equal: Δt₁ = Δt₂. Cross-multiply and cancel the quadratic terms immediately.',
    standardMinutes: '12–15 Minutes',
    hackSeconds: '30 Seconds',
    longMethodText: 'Solve T(t) = Tm + (T0 - Tm)e^{-kt}. Form two non-linear equations for k and Tm. Take natural logarithms, substitute ratios of exponentials, and solve algebraically through transcendental terms.',
    hackMethodText: 'Because Δt is identical, e^{-k(2Δt)} = (e^{-kΔt})². Therefore (T3 - Tm)/(T2 - Tm) = (T2 - Tm)/(T1 - Tm). Cross-multiply: the Tm² terms cancel instantly into a 1-variable linear equation!',
    proof: 'Let r = e^{-kΔt}. Then T₁ - Tm = C, T₂ - Tm = Cr, T₃ - Tm = C r². Notice (T₁ - Tm)(T₃ - Tm) = C · C r² = (Cr)² = (T₂ - Tm)². Q.E.D.',
    drillQuestionId: 'dq_hack_newton',
    variants: [
      {
        id: 'v1',
        name: 'Variant A: Oven Thermometer Classic (Tutor Notes Ex 1)',
        problem: 'An oven thermometer reads $70^\\circ\\\\text{F}$ at $t = 0$, $110^\\circ\\\\text{F}$ at $t = 0.5\\\\text{ min}$, and $145^\\circ\\\\text{F}$ at $t = 1.0\\\\text{ min}$. Using the 3-point shortcut $(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2$, what is the ambient oven temperature $T_m$?',
        options: ['$390^\\circ\\\\text{F}$', '$360^\\circ\\\\text{F}$', '$420^\\circ\\\\text{F}$', '$340^\\circ\\\\text{F}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Notice the intervals are equal: $\\\\Delta t = 0.5\\\\text{ min}$ from $t=0$ to $0.5$, and $\\\\Delta t = 0.5\\\\text{ min}$ from $0.5$ to $1.0$.',
          'Step 2: Set up the 3-point balance identity: $$(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2 \\\\implies (145 - T_m)(70 - T_m) = (110 - T_m)^2$$',
          'Step 3: Expand the left-hand side: $$145 \\\\times 70 - 145 T_m - 70 T_m + T_m^2 = 10150 - 215 T_m + T_m^2$$',
          'Step 4: Expand the right-hand side: $$110^2 - 2(110)T_m + T_m^2 = 12100 - 220 T_m + T_m^2$$',
          'Step 5: Cancel the quadratic $T_m^2$ on both sides: $$10150 - 215 T_m = 12100 - 220 T_m$$',
          'Step 6: Group $T_m$ terms on the left: $$220 T_m - 215 T_m = 12100 - 10150 \\\\implies 5 T_m = 1950 \\\\implies T_m = 390^\\circ\\\\text{F}$$'
        ],
        trapExplanation: 'Standard exam mistake: Trying to solve for decay constant k using natural logarithms first. That takes 12 minutes and produces decimal rounding errors!'
      },
      {
        id: 'v2',
        name: 'Variant B: Forensic Cooling (Crime Scene Thermometer)',
        problem: 'A forensic investigator finds a cooling body. At $t = 0$, body temp is $85^\\circ\\\\text{F}$. At $t = 1\\\\text{ hr}$, it is $79^\\circ\\\\text{F}$. At $t = 2\\\\text{ hr}$, it is $74^\\circ\\\\text{F}$. Using the 3-point shortcut, what is the room ambient temperature $T_m$?',
        options: ['$49^\\circ\\\\text{F}$', '$64^\\circ\\\\text{F}$', '$55^\\circ\\\\text{F}$', '$70^\\circ\\\\text{F}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Check time steps: $t=0, 1, 2\\\\text{ hr}$. Equal step $\\\\Delta t = 1\\\\text{ hr}$.',
          'Step 2: Write formula: $$(74 - T_m)(85 - T_m) = (79 - T_m)^2$$',
          'Step 3: Expand LHS: $$74 \\\\times 85 - (74+85)T_m + T_m^2 = 6290 - 159 T_m + T_m^2$$',
          'Step 4: Expand RHS: $$79^2 - 2(79)T_m + T_m^2 = 6241 - 158 T_m + T_m^2$$',
          'Step 5: Cancel $T_m^2$: $$6290 - 159 T_m = 6241 - 158 T_m$$',
          'Step 6: Solve: $$6290 - 6241 = 159 T_m - 158 T_m \\\\implies T_m = 49^\\circ\\\\text{F}$$'
        ],
        trapExplanation: 'Watch for negative sign slips when isolating Tm: 159 - 158 = 1, giving Tm = 49°F directly.'
      },
      {
        id: 'v3',
        name: 'Variant C: Quenching Metal Ingot in Water Bath',
        problem: 'A hot metal alloy cools in a circulating bath. Temperatures at $t = 0, 2, 4\\\\text{ min}$ are $300^\\circ\\\\text{C}, 180^\\circ\\\\text{C}, 120^\\circ\\\\text{C}$. What is the water bath temperature $T_m$?',
        options: ['$60^\\circ\\\\text{C}$', '$50^\\circ\\\\text{C}$', '$75^\\circ\\\\text{C}$', '$40^\\circ\\\\text{C}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Equal intervals $\\\\Delta t = 2\\\\text{ min}$. Set up $$(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2 \\\\implies (120 - T_m)(300 - T_m) = (180 - T_m)^2$$',
          'Step 2: Expand LHS: $$36000 - 420 T_m + T_m^2$$',
          'Step 3: Expand RHS: $$32400 - 360 T_m + T_m^2$$',
          'Step 4: Cancel $T_m^2$: $$36000 - 420 T_m = 32400 - 360 T_m$$',
          'Step 5: Solve: $$36000 - 32400 = 420 T_m - 360 T_m \\\\implies 3600 = 60 T_m \\\\implies T_m = 60^\\circ\\\\text{C}$$'
        ],
        trapExplanation: 'Never square T1 or T3! The middle temperature T2 is the only term squared on the RHS.'
      }
    ]
  },
  {
    id: 'th2',
    badge: 'Linear Argument Shortcut',
    title: 'Hyperbolic Tangent Closed-Form Inversion',
    latex: 'u(x) = 2\\\\frac{1 - e^{-4x}}{1 + e^{-4x}} = 2\\\\tanh(2x)',
    sourceRef: 'Tutor Notes Page 32',
    explanation: "In y' - (4x - y + 1)² = 0, substituting u = 4x - y + 1 yields du/(u² - 4) = -dx. This separates into (u - 2)/(u + 2) = -e^{-4x}. Instead of doing messy fraction divisions, recognize the definition of tanh(w) = (1 - e^{-2w}) / (1 + e^{-2w}). It collapses directly into 2 tanh(2x), giving y(x) = 4x + 1 - 2 tanh(2x) with zero calculation errors.",
    mentalAnchor: 'The Tanh Shortcut: Whenever you see (u - a)/(u + a) = -e^{-2ax}, don\'t do 10 steps of algebra. It is ALWAYS u(x) = a tanh(ax).',
    exampleProblem: 'y(x) = 4x + 1 - 2\\\\tanh(2x). Verified: at x = 0, y(0) = 4(0) + 1 - 2 tanh(0) = 1.',
    keyRule: 'Whenever (u - a)/(u + a) = -e^{-2ax}, the solution is always u(x) = a tanh(ax).',
    standardMinutes: '10 Minutes',
    hackSeconds: '45 Seconds',
    longMethodText: 'Separate variables, compute partial fraction decomposition 1/(u-2)(u+2) = 1/4 [1/(u-2) - 1/(u+2)], integrate to logarithms, exponentiate, clear fractional denominators, and invert algebraically.',
    hackMethodText: 'Directly invoke the hyperbolic tangent identity tanh(z) = (e^z - e^{-z})/(e^z + e^{-z}) = (1 - e^{-2z})/(1 + e^{-2z}). Invert in one line.',
    proof: 'u - a = -e^{-2ax}(u + a) ⟹ u(1 + e^{-2ax}) = a(1 - e^{-2ax}) ⟹ u = a (1 - e^{-2ax})/(1 + e^{-2ax}) = a tanh(ax).',
    drillQuestionId: 'dq_linear_arg_1',
    variants: [
      {
        id: 'v1',
        name: 'Variant A: Concordia Midterm Classic (a = 2)',
        problem: 'After substituting $u = 4x - y + 1$ into $y\' - (4x - y + 1)^2 = 0$, you reach $\\\\frac{u - 2}{u + 2} = -e^{-4x}$. What is the closed-form expression for $u(x)$ using hyperbolic functions?',
        options: ['$u(x) = 2\\\\tanh(2x)$', '$u(x) = 2\\\\coth(2x)$', '$u(x) = \\\\tanh(4x)$', '$u(x) = 4\\\\tanh(2x)$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Recognize the ratio form $\\\\frac{u - a}{u + a} = -e^{-2ax}$ where $a = 2$.',
          'Step 2: Cross-multiply: $u - 2 = -e^{-4x}(u + 2) \\\\implies u(1 + e^{-4x}) = 2(1 - e^{-4x})$.',
          'Step 3: Solve for $u$: $$u(x) = 2\\\\frac{1 - e^{-4x}}{1 + e^{-4x}}$$',
          'Step 4: Recall the exponential definition of hyperbolic tangent: $$\\tanh(w) = \\\\frac{e^w - e^{-w}}{e^w + e^{-w}} = \\\\frac{1 - e^{-2w}}{1 + e^{-2w}}$$ with $w = 2x$.',
          'Step 5: Conclude immediately: $u(x) = 2\\\\tanh(2x)$.'
        ],
        trapExplanation: 'Confusing 2tanh(2x) with tanh(4x). Notice the coefficient is 2 out front and 2 inside!'
      },
      {
        id: 'v2',
        name: 'Variant B: Terminal Velocity Riccati (a = 3)',
        problem: 'In a terminal velocity problem, separation yields $\\\\frac{v - 3}{v + 3} = -e^{-6t}$. What is the explicit velocity $v(t)$?',
        options: ['$v(t) = 3\\\\tanh(3t)$', '$v(t) = 3\\\\tanh(6t)$', '$v(t) = 6\\\\tanh(3t)$', '$v(t) = \\\\tanh(3t)$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Here $a = 3$, so the exponent is $-2at = -2(3)t = -6t$.',
          'Step 2: By the Tanh Inversion Shortcut, $v(t) = a \\\\tanh(at) = 3\\\\tanh(3t)$.',
          'Step 3: Verify at $t=0$: $v(0) = 3\\\\tanh(0) = 0$. Matching physical rest!'
        ],
        trapExplanation: 'Students often write tanh(6t) forgetting that the argument inside tanh is at, not 2at.'
      },
      {
        id: 'v3',
        name: 'Variant C: Full Inversion for y(x)',
        problem: 'If $u(x) = 4x - y + 1$ and $u(x) = 2\\\\tanh(2x)$, what is the final explicit solution $y(x)$?',
        options: ['$y(x) = 4x + 1 - 2\\\\tanh(2x)$', '$y(x) = 4x - 1 + 2\\\\tanh(2x)$', '$y(x) = 2\\\\tanh(2x) - 4x - 1$', '$y(x) = \\\\frac{4x + 1}{2\\\\tanh(2x)}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Start from the substitution definition: $u = 4x - y + 1$.',
          'Step 2: Isolate $y$: $y = 4x + 1 - u$.',
          'Step 3: Substitute $u = 2\\\\tanh(2x)$: $$y(x) = 4x + 1 - 2\\\\tanh(2x)$$ Done!'
        ],
        trapExplanation: 'Signs: students occasionally add 2tanh(2x) instead of subtracting it when moving y across.'
      }
    ]
  },
  {
    id: 'th3',
    badge: 'Mixing Tank Shortcut',
    title: 'Time-Varying Volume Integrating Factor Shortcut',
    latex: 'V(t) = V_0 + (r_{\\\\text{in}} - r_{\\\\text{out}})t \\\\implies \\\\mu(t) = (V_0 + \\\\Delta r \\\\cdot t)^{-r_{\\\\text{out}}/\\\\Delta r}',
    sourceRef: 'Tutor Notes Page 39',
    explanation: 'When inflow rate rin ≠ outflow rate rout, volume is not constant: V(t) = 100 - t. The linear term P(t) = rout / (V_0 + Δr · t). Integrating P(t) produces a clean natural log: (rout / Δr) ln(V_0 + Δr · t). The integrating factor is a pure algebraic power without any exponentials remaining!',
    mentalAnchor: 'The Power Ratio: μ(t) is always (V(t))^{exponent} where exponent = -rout / (rin - rout). It is NEVER an exponential function of e^t!',
    exampleProblem: 'V_0 = 100, rin = 4, rout = 5 ⟹ Δr = -1. P(t) = 5/(100-t) ⟹ μ(t) = (100 - t)⁻⁵.',
    keyRule: 'The tank empties when V(t) = 0. Never evaluate your solution beyond the emptying time!',
    standardMinutes: '8 Minutes',
    hackSeconds: '20 Seconds',
    longMethodText: 'Derive volume function, set up differential equation dA/dt + (rout/V(t))A = rin cin, integrate P(t) by substitution u = 100 - t with du = -dt, simplify exp of ln.',
    hackMethodText: 'Direct power rule: μ(t) = (V₀ + Δr t)^{-rout / Δr}. For Δr = -1 and rout = 5, power is -5/(-1) = 5 with negative inner derivative, yielding μ(t) = (100 - t)⁻⁵.',
    proof: '∫ [rout / (V₀ + Δr t)] dt = (rout / Δr) ln(V₀ + Δr t). Then exp(ln(...)) = (V₀ + Δr t)^{rout / Δr}. With Δr < 0, absorbing sign yields (V₀ - |Δr|t)^{-rout/|Δr|}.',
    drillQuestionId: 'dq_hack_tank',
    variants: [
      {
        id: 'v1',
        name: 'Variant A: Draining Tank ($V_0 = 100, r_{\\\\text{in}} = 4, r_{\\\\text{out}} = 5$)',
        problem: 'A brine tank initially contains $100\\\\text{ L}$. Fresh brine enters at $4\\\\text{ L/min}$ and leaves at $5\\\\text{ L/min}$. What is the integrating factor $\\\\mu(t)$ for the amount of salt $A(t)$?',
        options: ['$\\\\mu(t) = (100 - t)^{-5}$', '$\\\\mu(t) = (100 - t)^5$', '$\\\\mu(t) = e^{-5t}$', '$\\\\mu(t) = \\\\frac{1}{100 - t}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Compute volume change rate: $\\\\Delta r = r_{\\\\text{in}} - r_{\\\\text{out}} = 4 - 5 = -1\\\\text{ L/min}$.',
          'Step 2: Volume at time $t$: $V(t) = V_0 + \\\\Delta r \\\\cdot t = 100 - t$.',
          'Step 3: Linear ODE term: $P(t) = \\\\frac{r_{\\\\text{out}}}{V(t)} = \\\\frac{5}{100 - t}$.',
          'Step 4: Integrate $P(t)$: $$\\int \\\\frac{5}{100 - t} dt = -5\\\\ln|100 - t| = \\\\ln((100 - t)^{-5})$$',
          'Step 5: Exponentiate: $\\\\mu(t) = e^{\\\\ln((100 - t)^{-5})} = (100 - t)^{-5}$.'
        ],
        trapExplanation: 'Missing the negative sign from du = -dt when integrating 1/(100-t). That error turns -5 into +5.'
      },
      {
        id: 'v2',
        name: 'Variant B: Filling Tank ($V_0 = 50, r_{\\\\text{in}} = 6, r_{\\\\text{out}} = 2$)',
        problem: 'A tank starts with $50\\\\text{ gal}$. Brine enters at $6\\\\text{ gal/min}$ and leaves at $2\\\\text{ gal/min}$. What is the integrating factor $\\\\mu(t)$?',
        options: ['$\\\\mu(t) = (50 + 4t)^{1/2}$', '$\\\\mu(t) = (50 + 4t)^2$', '$\\\\mu(t) = e^{2t}$', '$\\\\mu(t) = (50 + 4t)^{-1/2}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: $\\\\Delta r = 6 - 2 = +4\\\\text{ gal/min}$. Volume: $V(t) = 50 + 4t$.',
          'Step 2: Linear term: $P(t) = \\\\frac{r_{\\\\text{out}}}{V(t)} = \\\\frac{2}{50 + 4t}$.',
          'Step 3: Integrate: $$\\int \\\\frac{2}{50 + 4t} dt = \\\\frac{2}{4}\\\\ln(50 + 4t) = \\\\frac{1}{2}\\\\ln(50 + 4t)$$',
          'Step 4: Exponentiate: $\\\\mu(t) = (50 + 4t)^{1/2} = \\\\sqrt{50 + 4t}$.'
        ],
        trapExplanation: 'Forgetting to divide by the inner derivative 4 when evaluating the logarithm integral.'
      },
      {
        id: 'v3',
        name: 'Variant C: Tank Overflow / Emptying Boundary',
        problem: 'For the draining tank with $V(t) = 100 - t$, what is the maximal interval of validity $I$ for the differential equation?',
        options: ['$I = [0, 100)$', '$I = (0, \\\\infty)$', '$I = (-\\\\infty, 100)$', '$I = [0, 50)$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: The differential equation has a singularity where $V(t) = 0 \\\\implies 100 - t = 0 \\\\implies t = 100\\\\text{ min}$.',
          'Step 2: The physical experiment starts at $t = 0$.',
          'Step 3: Therefore, the model is strictly physically and mathematically valid on $[0, 100)$.'
        ],
        trapExplanation: 'Writing (0, ∞). Once the tank empties at t = 100 min, there is no more fluid!'
      }
    ]
  },
  {
    id: 'th4',
    badge: 'Logarithm Absorption',
    title: 'Negative Sign Absorption in Integrating Factors',
    latex: 'P(x) = -\\\\frac{k}{x} \\\\implies \\\\int P dx = -k\\\\ln x = \\\\ln(x^{-k}) \\\\implies \\\\mu(x) = x^{-k} = \\\\frac{1}{x^k}',
    sourceRef: 'Tutor Notes Page 7 & 11',
    explanation: 'Students lose 5 to 10 marks on midterms by writing e^{-3 ln x} = -x³ or e^{-3 ln x} = x³. The negative sign must be absorbed into the logarithm as a power first: e^{ln(x⁻³)} = x⁻³ = 1/x³.',
    mentalAnchor: 'The Power Lift: The number multiplying ln x must ALWAYS jump inside the logarithm as the exponent of x before e and ln cancel! -3 ln x = ln(x⁻³) = 1/x³.',
    exampleProblem: 'y\' - (3/x)y = x² ⟹ μ(x) = 1/x³. Then (d/dx)[y / x³] = 1/x ⟹ y/x³ = ln|x| + C ⟹ y = x³(ln|x| + C).',
    keyRule: 'Always absorb leading numbers and negative signs into the log exponent before applying e^{ln(...)}.',
    standardMinutes: '5 Minutes',
    hackSeconds: '15 Seconds',
    longMethodText: 'Writing intermediate exponent rules, splitting into e^{-1} · e^{3 ln x}, making algebraic errors.',
    hackMethodText: 'Immediate rule: -k ln(x) = ln(x^{-k}). The exp and ln cancel: μ(x) = 1 / x^k.',
    proof: 'exp(-k ln x) = exp(ln(x^{-k})) = x^{-k} = 1/x^k by inverse function identity exp(ln u) = u.',
    drillQuestionId: 'dq_linear_1',
    variants: [
      {
        id: 'v1',
        name: 'Variant A: Negative Coefficient k = 3',
        problem: 'Simplify $e^{-3\\\\ln(x)}$ into its simplest algebraic form without logarithms or exponentials:',
        options: ['$\\\\frac{1}{x^3}$', '$-x^3$', '$x^{-1/3}$', '$-3x$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Apply the logarithm power rule: $-3\\\\ln(x) = \\\\ln(x^{-3})$.',
          'Step 2: Apply the inverse function identity: $e^{\\\\ln(u)} = u$.',
          'Step 3: Evaluate: $e^{\\\\ln(x^{-3})} = x^{-3} = \\\\frac{1}{x^3}$.'
        ],
        trapExplanation: 'Never bring -3 out front as a coefficient! e^{-3 ln x} is NEVER -x³.'
      },
      {
        id: 'v2',
        name: 'Variant B: Negative Fraction k = 1/2',
        problem: 'Simplify $\\\\mu(x) = e^{-\\\\frac{1}{2}\\\\ln(x)}$:',
        options: ['$\\\\frac{1}{\\\\sqrt{x}}$', '$-\\\\sqrt{x}$', '$\\\\sqrt{x}$', '$\\\\frac{1}{2x}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Lift $-1/2$ into the exponent: $-\\\\frac{1}{2}\\\\ln(x) = \\\\ln(x^{-1/2})$.',
          'Step 2: Cancel $e$ and $\\\\ln$: $x^{-1/2} = \\\\frac{1}{\\\\sqrt{x}}$.'
        ],
        trapExplanation: 'Common slip: forgetting that power -1/2 puts the square root into the denominator.'
      },
      {
        id: 'v3',
        name: 'Variant C: Full ODE Collapse with Negative Sign',
        problem: 'For $y\' - \\\\frac{2}{x}y = 4$, after multiplying by $\\\\mu(x) = \\\\frac{1}{x^2}$, what does the LHS collapse to?',
        options: ['$\\\\frac{d}{dx}\\\\left[\\\\frac{y}{x^2}\\\\right]$', '$\\\\frac{d}{dx}[x^2 y]$', '$\\\\frac{d}{dx}\\\\left[\\\\frac{-y}{x^2}\\\\right]$', '$\\\\frac{d}{dx}[y - 2x]$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Standard linear form: $y\' + P(x)y = Q(x)$ with $P(x) = -2/x$.',
          'Step 2: Integrating factor: $\\\\mu(x) = e^{\\\\int -2/x dx} = x^{-2} = \\\\frac{1}{x^2}$.',
          'Step 3: Reverse product rule identity: $\\\\mu y\' + \\mu\' y = \\\\frac{d}{dx}[\\\\mu y] = \\\\frac{d}{dx}\\\\left[\\\\frac{y}{x^2}\\\\right]$.'
        ],
        trapExplanation: 'Dropping the minus sign in P(x) = -2/x gives mu = x^2, which leads to total failure.'
      }
    ]
  },
  {
    id: 'th5',
    badge: 'Partial Fractions Hack',
    title: 'Heaviside Cover-Up Rule (15 Seconds)',
    latex: '\\\\frac{P(x)}{(x - a)(x - b)} = \\\\frac{P(a)/(a-b)}{x - a} + \\\\frac{P(b)/(b-a)}{x - b}',
    sourceRef: 'Tutor Notes Page 9 & 19',
    explanation: 'To find the coefficient of 1/(x-a), cover up (x-a) with your thumb and evaluate the rest of the fraction at x = a. No common denominators, no system of equations, 100% foolproof.',
    mentalAnchor: 'The Thumb Cover-Up: Cover the denominator factor that equals zero with your thumb, and plug that root into everything that\'s left visible!',
    exampleProblem: '1/[(u-2)(u+2)] = A/(u-2) + B/(u+2). Cover (u-2), set u=2: A = 1/(2+2) = 1/4. Cover (u+2), set u=-2: B = 1/(-2-2) = -1/4.',
    keyRule: 'Applies to any non-repeated linear factors in separable and partial fraction problems.',
    standardMinutes: '6 Minutes',
    hackSeconds: '15 Seconds',
    longMethodText: 'Write A/(x-a) + B/(x-b), find common denominator, expand numerator A(x-b) + B(x-a), equate coefficients to constant and x, solve system of 2 equations.',
    hackMethodText: 'Multiply both sides by (x-a) and set x = a. The (x-b) term on RHS vanishes, directly isolating A = P(a)/(a-b).',
    proof: 'Multiply P(x)/[(x-a)Q(x)] by (x-a): P(x)/Q(x) = A + (x-a)[B/...]. Taking limit as x → a gives A = P(a)/Q(a).',
    drillQuestionId: 'dq_hack_heaviside',
    variants: [
      {
        id: 'v1',
        name: 'Variant A: Difference of Squares Factorization',
        problem: 'Decompose $\\\\frac{1}{(u - 3)(u + 3)}$ using the Heaviside Cover-Up rule. What are the coefficients $A$ and $B$?',
        options: ['$A = \\\\frac{1}{6}, \\\\; B = -\\\\frac{1}{6}$', '$A = \\\\frac{1}{3}, \\\\; B = -\\\\frac{1}{3}$', '$A = 1, \\\\; B = -1$', '$A = \\\\frac{1}{6}, \\\\; B = \\\\frac{1}{6}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Write form: $\\\\frac{A}{u - 3} + \\\\frac{B}{u + 3}$.',
          'Step 2: Cover $(u - 3)$ and evaluate at $u = 3$: $$A = \\\\left. \\\\frac{1}{u + 3} \\\\right|_{u=3} = \\\\frac{1}{3 + 3} = \\\\frac{1}{6}$$',
          'Step 3: Cover $(u + 3)$ and evaluate at $u = -3$: $$B = \\\\left. \\\\frac{1}{u - 3} \\\\right|_{u=-3} = \\\\frac{1}{-3 - 3} = -\\\\frac{1}{6}$$',
          'Step 4: Done in 10 seconds without any 2x2 matrix algebra!'
        ],
        trapExplanation: 'Watch the sign: when u = -3, denominator is -3 - 3 = -6, so B is negative -1/6.'
      },
      {
        id: 'v2',
        name: 'Variant B: Linear Numerator',
        problem: 'Find the partial fraction decomposition of $\\\\frac{2x + 1}{(x - 1)(x + 2)}$:',
        options: ['$\\\\frac{1}{x - 1} + \\\\frac{1}{x + 2}$', '$\\\\frac{2}{x - 1} - \\\\frac{1}{x + 2}$', '$\\\\frac{3}{x - 1} - \\\\frac{1}{x + 2}$', '$\\\\frac{1}{x - 1} + \\\\frac{2}{x + 2}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Cover $(x - 1)$ and evaluate at $x = 1$: $$A = \\\\frac{2(1) + 1}{1 + 2} = \\\\frac{3}{3} = 1$$',
          'Step 2: Cover $(x + 2)$ and evaluate at $x = -2$: $$B = \\\\frac{2(-2) + 1}{-2 - 1} = \\\\frac{-3}{-3} = 1$$',
          'Step 3: Result: $\\\\frac{1}{x - 1} + \\\\frac{1}{x + 2}$.'
        ],
        trapExplanation: 'Plugging x = -2 into the numerator: 2(-2) + 1 = -3, and denominator -2 - 1 = -3, yielding +1.'
      },
      {
        id: 'v3',
        name: 'Variant C: 3 Linear Factors Inspection',
        problem: 'What is the coefficient of $\\\\frac{1}{x - 2}$ in $\\\\frac{x^2}{(x - 1)(x - 2)(x + 1)}$?',
        options: ['$\\\\frac{4}{3}$', '$\\\\frac{2}{3}$', '$4$', '$\\\\frac{4}{5}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Target factor is $(x - 2)$. Its root is $x = 2$.',
          'Step 2: Cover $(x - 2)$ with your thumb in $\\\\frac{x^2}{(x - 1)(x + 1)}$.',
          'Step 3: Evaluate at $x = 2$: $$A_2 = \\\\frac{2^2}{(2 - 1)(2 + 1)} = \\\\frac{4}{(1)(3)} = \\\\frac{4}{3}$$'
        ],
        trapExplanation: 'For 3 linear factors, cover the single target factor and plug its root into the other two.'
      }
    ]
  },
  {
    id: 'th6',
    badge: 'Homogeneous Testing',
    title: 'Polynomial Degree Matching Test',
    latex: 'M(tx, ty) = t^k M(x, y) \\\\quad \\\\text{and} \\\\quad N(tx, ty) = t^k N(x, y)',
    sourceRef: 'Tutor Notes Page 23',
    explanation: 'In (x - y)dx + x dy = 0, both coefficients are homogeneous of degree 1. Substituting y = ux and dy = u dx + x du immediately reduces the equation to x dx + x² du = 0 ⟹ (1/x)dx + du = 0, solving in 3 lines: y(x) = x(C - ln|x|).',
    mentalAnchor: 'The Monomial Degree Check: Sum the exponents in each monomial: x² is 2, xy is 1+1=2, y² is 2. If every monomial has the identical sum, it\'s homogeneous! Substitute y = ux immediately.',
    exampleProblem: '(x² + y²)dx - 2xy dy = 0 ⟹ degrees are 2, 2, 2. Homogeneous of degree 2. Substitute y = ux ⟹ x² cancels.',
    keyRule: 'Every single monomial term must have the exact same combined power. No constants (+1) allowed!',
    standardMinutes: '8 Minutes',
    hackSeconds: '20 Seconds',
    longMethodText: 'Attempting separable methods, testing Clairaut mixed partial derivatives, calculating incorrect integrating factors.',
    hackMethodText: 'Add exponents of x and y in each term. If all equal k, write y = ux, dy = u dx + x du. x^k factors out and vanishes completely.',
    proof: 'M(tx, ty) = t^k M(x, y) ⟹ M(x, y) = x^k M(1, y/x) = x^k M(1, u). Both M and N have x^k, so dividing by x^k leaves an equation purely in u and x du/dx.',
    drillQuestionId: 'dq_homo_1',
    variants: [
      {
        id: 'v1',
        name: 'Variant A: Monomial Degree Audit',
        problem: 'Which of the following differential equations is NOT homogeneous?',
        options: ['$(x^2 + y^2)dx + (xy - 1)dy = 0$', '$(x^2 + y^2)dx - 2xy dy = 0$', '$(x^3 + y^3)dx - x y^2 dy = 0$', '$(x - y)dx + (x + y)dy = 0$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: Check Option A: $x^2$ (degree 2), $y^2$ (degree 2), $xy$ (degree 2), but $-1$ has degree 0! The constant $-1$ breaks homogeneity.',
          'Step 2: Check Option B: $x^2, y^2, 2xy$ are all degree 2. (Homogeneous)',
          'Step 3: Check Option C: $x^3, y^3, xy^2$ are all degree 3. (Homogeneous)',
          'Step 4: Check Option D: $x, y$ are all degree 1. (Homogeneous).'
        ],
        trapExplanation: 'Any isolated constant (+1, -5) immediately ruins homogeneity. Constants have degree 0!'
      },
      {
        id: 'v2',
        name: 'Variant B: The Substitution Product Rule',
        problem: 'When applying $y = ux$ to a homogeneous equation, what is the exact differential substitution for $dy$?',
        options: ['$dy = u\\\\,dx + x\\\\,du$', '$dy = u\\\\,du$', '$dy = x\\\\,du$', '$dy = u\\\\,dx$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: $y$ is the product of two functions: $u(x)$ and $x$.',
          'Step 2: Apply the product rule: $d(ux) = (du)x + u(dx) = u\\\\,dx + x\\\\,du$.',
          'Step 3: Never forget the $u\\\\,dx$ term!'
        ],
        trapExplanation: 'Number 1 student error: Writing dy = x du and omitting u dx. That ruins the entire calculation.'
      },
      {
        id: 'v3',
        name: 'Variant C: Final Explicit Inversion',
        problem: 'If $u(x) = C - \\\\ln|x|$ after solving the reduced separable equation, what is $y(x)$?',
        options: ['$y(x) = x(C - \\\\ln|x|)$', '$y(x) = \\\\frac{C - \\\\ln|x|}{x}$', '$y(x) = C x - \\\\ln|x|$', '$y(x) = e^{C - \\\\ln|x|}$'],
        correctIndex: 0,
        babySteps: [
          'Step 1: The original substitution was $y = ux$.',
          'Step 2: Multiply $u(x)$ by $x$: $$y(x) = u \\\\cdot x = x(C - \\\\ln|x|)$$'
        ],
        trapExplanation: 'Forgetting to back-substitute u = y/x into the final answer.'
      }
    ]
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
    title: 'Fall 2025 Midterm Test 1 (Dr. Alexey Kokotov)',
    year: 'Fall 2025',
    filename: '2025 Fall Midterm.pdf',
    relativePath: 'Engr 213/Midterm/2025 Fall Midterm.pdf',
    scope: 'Dr. Kokotov Exam: Separable IVP, Linear IF with Power Absorption, Exact Potential Function, Tank Mixture'
  },
  {
    title: 'Winter 2026 Midterm Term Test 1 (Section JB)',
    year: 'Winter 2026',
    filename: '2026 Winter Midterm.pdf',
    relativePath: 'Engr 213/Midterm/2026 Winter Midterm.pdf',
    scope: 'Non-Exact Integrating Factor, Bernoulli Reduction, Complex Characteristic Roots (λ = α ± iβ)'
  },
  {
    title: 'Fall 2024 Midterm II Examination (Section V)',
    year: 'Fall 2024',
    filename: '2024 Fall Midterm.pdf',
    relativePath: 'Engr 213/Midterm/2024 Fall Midterm.pdf',
    scope: 'Homogeneous Degree Matching (y = ux), Newton Cooling Temperature Kinetics, Steady-State Analysis'
  },
  {
    title: 'Fall 2021 Midterm Examination Type A (Dr. Sam Eskandarian)',
    year: 'Fall 2021',
    filename: '2021 Fall Midterm.pdf',
    relativePath: 'Engr 213/Midterm/2021 Fall Midterm.pdf',
    scope: 'Dr. Eskandarian Exam: Normalization Leading-Term Traps, Existence & Uniqueness Theorems, Linear Systems'
  },
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
    scope: 'Bernoulli Equations, Orthogonal Trajectories, Reduction to Separable, Complex Roots & Polar Forms'
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
// 5. DATA: Comprehensive 500-Question Interactive Drill Banks (50 per subject)
// ----------------------------------------------------
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
    exam: 'Fall 2025 Midterm Test 1 (Dr. Kokotov) · Problem 4',
    topic: 'Complex Numbers: Polar Form, De Moivre Power & Cube Roots (Sec 17.1 & 17.2)',
    problemStatement: 'Given the complex number $z = -2 + 2i\\sqrt{3}$:\n(a) Determine its modulus $|z|$ and principal argument $\\operatorname{Arg}(z)$ in radians, and express $z$ in polar exponential form $r e^{i\\theta}$.\n(b) Using De Moivre’s theorem, compute $z^4$ and express the result in standard rectangular form $a + bi$.\n(c) Find all three distinct cube roots of $z$ and sketch their locations on the complex plane.',
    methodId: 'complex_numbers',
    timeTarget: '10 minutes',
    difficulty: 'med',
    steps: [
      {
        title: 'Step 1: Compute Modulus |z|',
        content: 'Identify real part $x = -2$ and imaginary part $y = 2\\sqrt{3}$. $$r = |z| = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$$'
      },
      {
        title: 'Step 2: Determine Quadrant & Principal Argument Arg(z)',
        content: 'Since $x = -2 < 0$ and $y = 2\\sqrt{3} > 0$, the point lies in Quadrant II. Reference angle: $$\theta_0 = \\arctan\\left(\\frac{2\\sqrt{3}}{2}\\right) = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$$ Principal argument: $$\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3} \\text{ rad}$$ Polar exponential form: $$z = 4 e^{i\\frac{2\\pi}{3}}$$'
      },
      {
        title: 'Step 3: De Moivre’s Theorem for z⁴',
        content: 'Apply power $n = 4$: $$z^4 = 4^4 e^{i 4\\left(\\frac{2\\pi}{3}\\right)} = 256 e^{i\\frac{8\\pi}{3}}$$ Reduce angle modulo $2\\pi$: $\\frac{8\\pi}{3} - 2\\pi = \\frac{2\\pi}{3}$. Convert to rectangular form: $$z^4 = 256\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right) = 256\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = -128 + 128i\\sqrt{3}$$'
      },
      {
        title: 'Step 4: All Three Distinct Cube Roots (w³ = z)',
        content: 'By the $n$-th root formula with $n = 3, r = 4, \\theta = \\frac{2\\pi}{3}$: $$w_k = 4^{1/3} e^{i\\frac{2\\pi/3 + 2k\\pi}{3}} = \\sqrt[3]{4} e^{i\\frac{2\\pi + 6k\\pi}{9}}, \\quad k = 0, 1, 2$$ Explicit roots: $$w_0 = \\sqrt[3]{4} e^{i\\frac{2\\pi}{9}}, \\quad w_1 = \\sqrt[3]{4} e^{i\\frac{8\\pi}{9}}, \\quad w_2 = \\sqrt[3]{4} e^{i\\frac{14\\pi}{9}} = \\sqrt[3]{4} e^{-i\\frac{4\\pi}{9}}$$'
      },
      {
        title: 'Step 5: Geometric Interpretation',
        content: 'All three roots lie on a circle of radius $R = \\sqrt[3]{4} \\approx 1.587$ centered at the origin, forming an equilateral triangle with equal angular separation $\\Delta\\theta = \\frac{2\\pi}{3} = 120^\\circ$.'
      }
    ],
    friendIntuition: 'Always sketch the point on axes first to avoid quadrant traps! In Quadrant II, Arg(z) is π - θ₀. In De Moivre\'s theorem, always raise the modulus: 4⁴ = 256, and 4^{1/3} = ∛4. Never forget that angles must strictly be in radians!',
    concordiaTrap: 'Writing θ = -π/3 from a raw calculator arctan. Calculator arctan(y/x) cannot distinguish Quadrant II from Quadrant IV. Always check signs: x < 0, y > 0 is Quadrant II, so θ = 2π/3!'
  },
  {
    id: 'p5',
    exam: 'Fall 2012 Midterm (Unofficial) · Problem 5',
    topic: 'Mixing Tank Model with Time-Varying Volume (Chapter 2.7 / 2.8)',
    problemStatement: 'A tank initially contains 100 L of pure water. Brine containing 2 kg/L of salt flows in at 3 L/min, and the well-stirred mixture drains at 4 L/min. Find the amount of salt $A(t)$ in the tank at any time $t$ until the tank empties.',
    methodId: 'tank',
    timeTarget: '12 minutes',
    difficulty: 'med',
    steps: [
      {
        title: 'Step 1: Formulate Time-Dependent Tank Volume V(t)',
        content: 'Initial volume $V_0 = 100$ L, flow in $r_{\\text{in}} = 3$ L/min, flow out $r_{\\text{out}} = 4$ L/min. $$V(t) = V_0 + (r_{\\text{in}} - r_{\\text{out}})t = 100 + (3 - 4)t = 100 - t \\text{ liters}$$ The tank empties completely when $V(t) = 0 \\implies t = 100$ minutes.'
      },
      {
        title: 'Step 2: Rate Equation Setup (dA/dt = Rin - Rout)',
        content: 'Salt input rate: $R_{\\text{in}} = c_{\\text{in}} \\cdot r_{\\text{in}} = (2 \\text{ kg/L})(3 \\text{ L/min}) = 6 \\text{ kg/min}$. Salt output rate: $R_{\\text{out}} = \\frac{A(t)}{V(t)} \\cdot r_{\\text{out}} = \\frac{4A(t)}{100 - t}$. Rate balance: $$\frac{dA}{dt} = 6 - \\frac{4}{100 - t}A \\implies \\frac{dA}{dt} + \\frac{4}{100 - t}A = 6$$'
      },
      {
        title: 'Step 3: Integrating Factor with Power Absorption',
        content: 'Compute integrating factor: $$\mu(t) = \\exp\\left(\\int \\frac{4}{100 - t}dt\\right) = \\exp(-4\\ln|100 - t|) = (100 - t)^{-4}$$'
      },
      {
        title: 'Step 4: Reverse Product Rule & Integration',
        content: 'Multiply ODE by $\\mu(t)$: $$\frac{d}{dt}[(100 - t)^{-4}A] = 6(100 - t)^{-4}$$ Integrate both sides: $$(100 - t)^{-4}A = 6 \\int (100 - t)^{-4}dt = 6 \\frac{(100 - t)^{-3}}{(-3)(-1)} + C = 2(100 - t)^{-3} + C$$ Multiply by $(100 - t)^4$: $$A(t) = 2(100 - t) + C(100 - t)^4$$'
      },
      {
        title: 'Step 5: Apply Initial Condition A(0) = 0 & Final Form',
        content: 'Initially pure water: $A(0) = 0$: $$0 = 2(100) + C(100)^4 \\implies C = -\\frac{200}{100^4} = -2 \\times 10^{-6}$$ Final explicit formula: $$A(t) = 2(100 - t) - 2\\left(\\frac{100 - t}{100}\\right)^4 \\times 100 \\text{ kg} \\quad (0 \\le t < 100)$$'
      }
    ],
    friendIntuition: 'When integrating 1/(100 - t), the derivative of denominator is -1. That creates a minus sign: -4 ln|100 - t|, which becomes the power (100 - t)^{-4}. Never forget that negative sign!',
    concordiaTrap: 'Forgetting that volume changes with time: writing A/100 instead of A/(100 - t). If inflow ≠ outflow, volume is NEVER constant!'
  },
  {
    id: 'p6',
    exam: 'Winter 2013 Midterm (Unofficial) · Problem 3',
    topic: 'Newton’s Law of Cooling (Chapter 2.7 Linear Models)',
    problemStatement: 'A thermometer reading 70°F is placed in an oven preheated to 350°F. After 1 minute, the thermometer reads 110°F. How long will it take for the thermometer to reach 300°F?',
    methodId: 'newton',
    timeTarget: '10 minutes',
    difficulty: 'easy',
    steps: [
      {
        title: 'Step 1: Newton Cooling Differential Equation',
        content: '$$\\frac{dT}{dt} = k(T - T_m), \\quad T_m = 350^\\circ\\text{F}, \\; T(0) = 70^\\circ\\text{F}$$ Standard solution form: $$T(t) = T_m + (T_0 - T_m)e^{kt} = 350 + (70 - 350)e^{kt} = 350 - 280 e^{kt}$$'
      },
      {
        title: 'Step 2: Determine Decay Rate Constant k',
        content: 'At $t = 1$, $T(1) = 110^\\circ\\text{F}$: $$110 = 350 - 280 e^{k(1)} \\implies 280 e^k = 240 \\implies e^k = \\frac{240}{280} = \\frac{6}{7} \\implies k = \\ln\\left(\\frac{6}{7}\\right) \\approx -0.15415$$'
      },
      {
        title: 'Step 3: Solve for Target Time t when T = 300°F',
        content: 'Set $T(t) = 300^\\circ\\text{F}$: $$300 = 350 - 280 e^{kt} \\implies 280 e^{kt} = 50 \\implies e^{kt} = \\frac{50}{280} = \\frac{5}{28}$$ Take natural logarithm: $$kt = \\ln\\left(\\frac{5}{28}\\right) \\implies t = \\frac{\\ln(5/28)}{\\ln(6/7)} = \\frac{-\\ln(28/5)}{-\\ln(7/6)} = \\frac{\\ln(5.6)}{\\ln(1.1667)} \\approx 11.2 \\text{ minutes}$$'
      }
    ],
    friendIntuition: 'T(t) - T_m always decays exponentially: ΔT(t) = ΔT(0) · (6/7)^t. You can solve target time directly: (350 - 300)/(350 - 70) = 50/280 = 5/28 = (6/7)^t!',
    concordiaTrap: 'Confusing T_m with T_0. T_m is the fixed surrounding medium (350°F), while T_0 is the initial body temperature (70°F).'
  },
  {
    id: 'p7',
    exam: 'Fall 2018 Midterm (Unofficial) · Problem 4',
    topic: 'Homogeneous Differential Equation via Degree Matching (Chapter 2.5)',
    problemStatement: 'Solve the homogeneous initial value problem: $(x^2 + y^2)dx - 2xy\\,dy = 0, \\quad y(1) = 2$',
    methodId: 'homogeneous',
    timeTarget: '12 minutes',
    difficulty: 'med',
    steps: [
      {
        title: 'Step 1: Verify Homogeneity of Degree 2',
        content: '$M(x,y) = x^2 + y^2$ (degree 2) and $N(x,y) = -2xy$ (degree 2). Since all polynomial terms have total degree 2, the equation is homogeneous!'
      },
      {
        title: 'Step 2: Substitute y = ux & Product Rule for dy',
        content: 'Let $y = ux \\implies dy = u\\,dx + x\\,du$. Substitute into the ODE: $$(x^2 + u^2 x^2)dx - 2x(ux)(u\\,dx + x\\,du) = 0$$ Factor out $x^2$: $$(1 + u^2 - 2u^2)dx - 2ux\\,du = 0 \\implies (1 - u^2)dx = 2ux\\,du$$'
      },
      {
        title: 'Step 3: Separate Variables u and x',
        content: '$$\\frac{1}{x}dx = \\frac{2u}{1 - u^2}du$$'
      },
      {
        title: 'Step 4: Integrate Both Sides via Logarithmic Shortcut',
        content: 'Notice the derivative of denominator $(1 - u^2)\' = -2u$. $$\int \\frac{1}{x}dx = -\\int \\frac{-2u}{1 - u^2}du \\implies \\ln|x| = -\\ln|1 - u^2| + C_1$$ Exponentiate: $$|x| \\cdot |1 - u^2| = C \\implies x(1 - u^2) = C$$'
      },
      {
        title: 'Step 5: Back-Substitute u = y/x & Apply y(1) = 2',
        content: 'Back-substitute $u = y/x$: $$x\\left(1 - \\frac{y^2}{x^2}\\right) = C \\implies x - \\frac{y^2}{x} = C \\implies x^2 - y^2 = Cx$$ Apply $y(1) = 2$: $1^2 - 2^2 = C(1) \\implies C = -3$. Final solution: $x^2 - y^2 = -3x \\implies y^2 = x^2 + 3x \\implies y(x) = \\sqrt{x^2 + 3x}$ (positive root since $y(1) = 2 > 0$).'
      }
    ],
    friendIntuition: `When you divide through by x², every term becomes a function of (y/x): (1 + (y/x)²) - 2(y/x) y' = 0. That confirms y = ux is the golden key.`,
    concordiaTrap: 'Forgetting the product rule for dy: writing dy = u du instead of u dx + x du.'
  },
  {
    id: 'p8',
    exam: 'Section 17.1 Practice · Problem 1',
    topic: 'Complex Numbers Polar Form, Modulus, Argument & De Moivre (Sec 17.1)',
    problemStatement: 'Express $z = -2 + 2i\\sqrt{3}$ in polar exponential form $r e^{i\\theta}$, and determine $z^6$ in rectangular form $a + bi$.',
    methodId: 'complex_numbers',
    timeTarget: '8 minutes',
    difficulty: 'easy',
    steps: [
      {
        title: 'Step 1: Compute Modulus r = |z|',
        content: '$$r = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$$'
      },
      {
        title: 'Step 2: Determine Quadrant & Principal Argument θ',
        content: 'Since $x = -2 < 0$ and $y = 2\\sqrt{3} > 0$, $z$ is in Quadrant 2. Reference angle $\\theta_0 = \\arctan\\left(\\frac{2\\sqrt{3}}{2}\\right) = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$. $$\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$$ Polar exponential form: $$z = 4 e^{i\\frac{2\\pi}{3}}$$'
      },
      {
        title: 'Step 3: Apply De Moivre’s Theorem for Power z⁶',
        content: '$$z^6 = (4 e^{i\\frac{2\\pi}{3}})^6 = 4^6 e^{i 6\\left(\\frac{2\\pi}{3}\\right)} = 4096 e^{i 4\\pi}$$'
      },
      {
        title: 'Step 4: Convert Back to Rectangular Form a + bi',
        content: 'Since $e^{i 4\\pi} = \\cos(4\\pi) + i\\sin(4\\pi) = 1 + 0i = 1$: $$z^6 = 4096(1) = 4096 + 0i$$'
      }
    ],
    friendIntuition: 'Angles that are multiples of 2π wrap all the way around back to the positive real axis! e^{i 4π} = 1, so the result is a purely real positive integer.',
    concordiaTrap: 'Forgetting to raise 4 to the 6th power. Some students write 4 e^{i 4π} = 4. Remember: (re^{iθ})ⁿ = rⁿ e^{inθ}!'
  }
];




// ----------------------------------------------------
// 4B. METHOD DIAGNOSTICS & RECOVERED TUTORIAL DATA
// ----------------------------------------------------
export interface MethodDiagnostic {
  correctChoice: string;
  distractorChoice: string;
  correctExplanation: string;
  distractorExplanation: string;
  implementationTips: string[];
}

export const METHOD_DIAGNOSTICS: Record<string, MethodDiagnostic> = {
  separable: {
    correctChoice: `Separable First-Order ODE: Separate into h(y) dy = g(x) dx and integrate both sides`,
    distractorChoice: `First-Order Linear ODE: Divide by leading term and apply integrating factor μ(x) = exp(∫P dx)`,
    correctExplanation: `🎯 Correct! This ODE can be factored cleanly so all y-terms multiply dy and all x-terms multiply dx. No integrating factor is required.`,
    distractorExplanation: `⚠️ Not linear with integrating factor! Notice there is no isolated y' + P(x)y = Q(x) structure; the variables are directly multiplicatively separable.`,
    implementationTips: [
      `1. Move all y and dy to LHS, all x and dx to RHS via multiplication/division only.`,
      `2. Integrate both sides: ∫ h(y) dy = ∫ g(x) dx + C.`,
      `3. Crucial Exam Trap: If y(x₀) < 0, pick the negative square root branch: y(x) = -√(2g(x) + C).`
    ]
  },
  linear_if: {
    correctChoice: `First-Order Linear ODE: Normalize to y' + P(x)y = Q(x) and compute μ(x) = exp(∫P dx)`,
    distractorChoice: `Separable First-Order ODE: Factor the right-hand side directly into g(x)h(y)`,
    correctExplanation: `🎯 Correct! The dependent variable y and derivative y' appear to the first degree and are linked by addition, requiring an integrating factor.`,
    distractorExplanation: `⚠️ Cannot be separated directly! The addition of P(x)y and Q(x) prevents factoring into pure separate single-variable products.`,
    implementationTips: [
      `1. Step 1 (Mandatory): Divide by the coefficient of y' so y' has unit coefficient 1.`,
      `2. Step 2: Compute μ(x) = exp(∫ P(x) dx). Watch negative signs: exp(-k ln x) = x⁻ᵏ = 1/xᵏ.`,
      `3. Step 3: Collapse LHS into d/dx [μ(x) y] = μ(x) Q(x) and integrate both sides.`,
      `4. Crucial Exam Trap: The integration constant C MUST be divided by μ(x): y = [∫ μQ dx + C] / μ(x).`
    ]
  },
  exact: {
    correctChoice: `Exact Differential Equation: Verify ∂M/∂y = ∂N/∂x and reconstruct potential function Ψ(x,y) = C`,
    distractorChoice: `Bernoulli ODE: Divide through by yⁿ and substitute u = y¹⁻ⁿ`,
    correctExplanation: `🎯 Correct! This equation is given in differential form M(x,y)dx + N(x,y)dy = 0 satisfying the Clairaut exactness condition My = Nx.`,
    distractorExplanation: `⚠️ Not a Bernoulli equation! Bernoulli ODEs are written in derivative form y' + P(x)y = Q(x)yⁿ, not in Pfaffian differential form M dx + N dy = 0.`,
    implementationTips: [
      `1. Compute partial derivatives My = ∂M/∂y and Nx = ∂N/∂x. Confirm My = Nx.`,
      `2. Integrate M with respect to x (holding y constant): Ψ(x,y) = ∫ M dx + g(y).`,
      `3. Differentiate Ψ by y and equate to N(x,y): ∂Ψ/∂y = N(x,y) to solve for g'(y).`,
      `4. Crucial Exam Trap: Always finish by setting the level curve family equal to C: Ψ(x,y) = C.`
    ]
  },
  non_exact: {
    correctChoice: `Non-Exact Equation: Compute (My - Nx)/N = f(x) to find special integrating factor μ(x) = exp(∫f dx)`,
    distractorChoice: `Homogeneous ODE: Check degree symmetry and substitute y = vx`,
    correctExplanation: `🎯 Correct! Clairaut test fails (My ≠ Nx), but (My - Nx)/N simplifies to a pure function of x, enabling an integrating factor μ(x).`,
    distractorExplanation: `⚠️ Homogeneous substitution is inefficient or invalid here! Checking (My - Nx)/N is the direct algorithmic path for non-exact differential forms.`,
    implementationTips: [
      `1. Test My and Nx. When My ≠ Nx, compute difference (My - Nx).`,
      `2. Divide by N: if (My - Nx)/N = f(x) depends only on x, μ(x) = exp(∫ f(x) dx).`,
      `3. Multiply original ODE by μ(x), then solve the resulting exact equation.`
    ]
  },
  bernoulli: {
    correctChoice: `Bernoulli Differential Equation: Divide by yⁿ and linearize via substitution u = y¹⁻ⁿ`,
    distractorChoice: `Direct Separation of Variables: Divide by (Q(x)yⁿ - P(x)y) and integrate`,
    correctExplanation: `🎯 Correct! It matches the classical nonlinear form y' + P(x)y = Q(x)yⁿ with n ≠ 0, 1.`,
    distractorExplanation: `⚠️ Direct separation is impossible because P(x) and Q(x) depend on x. The standard Bernoulli substitution u = y¹⁻ⁿ is mandatory.`,
    implementationTips: [
      `1. Divide whole equation by yⁿ: y⁻ⁿ y' + P(x) y¹⁻ⁿ = Q(x).`,
      `2. Let u = y¹⁻ⁿ, then du/dx = (1 - n) y⁻ⁿ (dy/dx).`,
      `3. Substitute to get linear ODE: (1/(1-n)) u' + P(x) u = Q(x) ⟹ u' + (1-n)P u = (1-n)Q.`,
      `4. Solve for u(x) using integrating factor, then back-substitute y = u^(1/(1-n)).`
    ]
  },
  homogeneous: {
    correctChoice: `Homogeneous First-Order ODE: Substitute y = vx (dy/dx = v + x dv/dx) to reduce to separable`,
    distractorChoice: `First-Order Linear ODE: Identify P(x) and integrate to find μ(x)`,
    correctExplanation: `🎯 Correct! Both coefficients M(x,y) and N(x,y) share the exact same algebraic degree k, meaning dy/dx = F(y/x).`,
    distractorExplanation: `⚠️ Not linear in y! Powers of y appear with degree > 1 or in nonlinear combinations with x.`,
    implementationTips: [
      `1. Express as dy/dx = F(y/x).`,
      `2. Substitute y = vx, which implies dy/dx = v + x (dv/dx).`,
      `3. Equate: v + x (dv/dx) = F(v) ⟹ x (dv/dx) = F(v) - v.`,
      `4. Separate variables: dv / (F(v) - v) = dx / x and integrate both sides.`
    ]
  },
  linear_arg: {
    correctChoice: `Linear Argument Substitution: Set u = Ax + By + C to transform y' = F(Ax + By + C) into separable`,
    distractorChoice: `Exact Differential Equation: Check partial derivatives ∂M/∂y and ∂N/∂x`,
    correctExplanation: `🎯 Correct! The ODE features a packaged linear combination (Ax + By + C) inside an outer function F.`,
    distractorExplanation: `⚠️ Not an exact equation form! The equation is given as y' = F(Ax + By + C), requiring the internal linear substitution.`,
    implementationTips: [
      `1. Define u = Ax + By + C.`,
      `2. Differentiate with respect to x: du/dx = A + B (dy/dx) ⟹ dy/dx = (1/B)(du/dx - A).`,
      `3. Replace dy/dx: (1/B)(du/dx - A) = F(u) ⟹ du/dx = A + B F(u).`,
      `4. Separate variables: du / (A + B F(u)) = dx, integrate, and replace u = Ax + By + C.`
    ]
  },
  applications: {
    correctChoice: `Physical Rate Balance / Mixing Model: Set up dA/dt = Rin - Rout = (Cin · Fin) - (A(t)/V(t) · Fout)`,
    distractorChoice: `Second-Order Harmonic Oscillator: Set up m x'' + c x' + k x = 0`,
    correctExplanation: `🎯 Correct! This is a first-order conservation rate balance model (mixing tank, cooling rate, or orthogonal trajectory).`,
    distractorExplanation: `⚠️ Not a second-order mechanical system! Salt mixing and thermal exchange are first-order single-rate differential equations.`,
    implementationTips: [
      `1. Rate in = (fluid flow in) × (salt concentration in).`,
      `2. Rate out = (fluid flow out) × (salt in tank A(t) / volume V(t)).`,
      `3. If Fin = Fout, volume V is constant. Solve linear ODE dA/dt + (Fout/V) A = Rin.`,
      `4. If Fin ≠ Fout, volume V(t) = V₀ + (Fin - Fout)t, leading to integrating factor with power of (V₀ + ΔF t).`
    ]
  },
  complex_numbers: {
    correctChoice: `Complex Analysis (Sec 17.1 & 17.2): Cartesian arithmetic, polar form r e^{iθ}, De Moivre powers, or n-th roots`,
    distractorChoice: `First-Order Linear ODE: Identify P(x) and integrate to find μ(x)`,
    correctExplanation: `🎯 Correct! This problem tests complex number algebra, polar representations, De Moivre's theorem, or n-th roots.`,
    distractorExplanation: `⚠️ Not a differential equation! This is a complex variables evaluation from Chapter 17.`,
    implementationTips: [
      `1. For division, multiply numerator and denominator by conjugate z̄.`,
      `2. For polar form, compute r = √(a² + b²) and check quadrant before finding θ in radians.`,
      `3. For powers zⁿ, use De Moivre: (r e^{iθ})ⁿ = rⁿ e^{inθ}.`,
      `4. For n-th roots, w_k = r^{1/n} exp(i(θ + 2kπ)/n) for k = 0, 1, ..., n-1.`
    ]
  },
  second_order: {
    correctChoice: `Complex Analysis (Sec 17.1 & 17.2): Cartesian arithmetic, polar form r e^{iθ}, De Moivre powers, or n-th roots`,
    distractorChoice: `First-Order Linear ODE: Identify P(x) and integrate to find μ(x)`,
    correctExplanation: `🎯 Correct! This problem tests complex number algebra, polar representations, De Moivre's theorem, or n-th roots.`,
    distractorExplanation: `⚠️ Not a differential equation! This is a complex variables evaluation from Chapter 17.`,
    implementationTips: [
      `1. For division, multiply numerator and denominator by conjugate z̄.`,
      `2. For polar form, compute r = √(a² + b²) and check quadrant before finding θ in radians.`,
      `3. For powers zⁿ, use De Moivre: (r e^{iθ})ⁿ = rⁿ e^{inθ}.`,
      `4. For n-th roots, w_k = r^{1/n} exp(i(θ + 2kπ)/n) for k = 0, 1, ..., n-1.`
    ]
  },
  formulas: {
    correctChoice: `Standard Integration Identity / Calculus Standard Form: Match formula directly from calculus tables`,
    distractorChoice: `Integration by Parts: Define u and dv and apply ∫ u dv = uv - ∫ v du`,
    correctExplanation: `🎯 Correct! This expression matches a standard antiderivative (such as inverse tangent, logarithmic quotient, or exponential polar form).`,
    distractorExplanation: `⚠️ Integration by parts is unnecessary and slow! Standard forms like ∫ du/(a² + u²) = (1/a) arctan(u/a) must be recognized immediately.`,
    implementationTips: [
      `1. Recognize standard inverse trig form: ∫ du/(a² + u²) = (1/a) arctan(u/a) + C.`,
      `2. Recognize log quotient form: ∫ du/(a² - u²) = (1/2a) ln|(a+u)/(a-u)| + C.`,
      `3. Watch pre-factors: students frequently forget the leading (1/a) multiplier.`
    ]
  }
};

export interface RecoveredTutorialProblem {
  num: number;
  title: string;
  equationType: string;
  question: string;
  initialCondition?: string;
  steps: string[];
  finalAnswer: string;
  trapAlert: string;
  drillKey: string;
}

export const RECOVERED_TUTORIAL_PROBLEMS: RecoveredTutorialProblem[] = [
  {
    num: 1,
    title: `1. Substitution (Recent Tutorial)`,
    equationType: `Type-1 Linear Argument Substitution`,
    question: `y' = (3x + y)^2 - 3, \quad \text{with } y(0) = 1`,
    initialCondition: `y(0) = 1`,
    steps: [
      `Step 1: Notice the repeated packaged linear argument (3x + y). Let u = 3x + y.`,
      `Step 2: Differentiate BOTH sides with respect to x using chain rule: u' = 3 + y'.`,
      `Step 3: Replace y' using the given ODE: u' = 3 + [(3x + y)^2 - 3] = u^2.`,
      `Step 4: Separate variables: du / u^2 = dx.`,
      `Step 5: Integrate both sides: ∫ u^{-2} du = ∫ dx ⟹ -1/u = x + C.`,
      `Step 6: Apply initial condition y(0) = 1. At x = 0, u = 3(0) + 1 = 1 ⟹ -1/1 = 0 + C ⟹ C = -1.`,
      `Step 7: Solve for u: -1/u = x - 1 ⟹ u = 1 / (1 - x).`,
      `Step 8: Replace u = 3x + y: 3x + y = 1 / (1 - x) ⟹ y(x) = 1 / (1 - x) - 3x.`
    ],
    finalAnswer: `y(x) = \frac{1}{1 - x} - 3x \quad \text{on } (-\infty, 1)`,
    trapAlert: `Never forget to differentiate the substitution: u' = 3 + y'. Forgetting the 3 is the most common exam mistake in this problem.`,
    drillKey: `linear_arg`
  },
  {
    num: 2,
    title: `2. Bernoulli Differential Equation (Recent Tutorial)`,
    equationType: `Bernoulli Nonlinear Power Reduction`,
    question: `y' - x^4 y = \frac{3}{5}x^4 y^{-4}`,
    steps: [
      `Step 1: Bernoulli standard form is y' + P(x)y = Q(x)y^n. Here n = -4, so 1 - n = 1 - (-4) = 5.`,
      `Step 2: Set u = y^{1-n} = y^5. Differentiate via chain rule: u' = 5y^4 y'.`,
      `Step 3: Multiply the ORIGINAL ODE by 5y^4: 5y^4 y' - 5x^4 y^5 = 3x^4.`,
      `Step 4: Substitute u' and u: u' - 5x^4 u = 3x^4. The equation is now strictly LINEAR!`,
      `Step 5: Find integrating factor with P(x) = -5x^4: μ(x) = exp(∫ -5x^4 dx) = exp(-x^5).`,
      `Step 6: Collapse into product rule derivative: (u · exp(-x^5))' = 3x^4 exp(-x^5).`,
      `Step 7: Integrate using substitution t = -x^5, dt = -5x^4 dx: u · exp(-x^5) = -(3/5)exp(-x^5) + C.`,
      `Step 8: Multiply through by exp(x^5) and replace u = y^5: y^5 = C exp(x^5) - 3/5.`
    ],
    finalAnswer: `y(x) = \left[ C e^{x^5} - \frac{3}{5} \right]^{1/5} \quad \text{(Real 5th root)}`,
    trapAlert: `Watch the sign of 1 - n! For y^{-4}, 1 - (-4) = +5, not -3. Check your exponent arithmetic.`,
    drillKey: `bernoulli`
  },
  {
    num: 3,
    title: `3. Separable Equation with Exponential & Initial Condition`,
    equationType: `Separable First-Order IVP`,
    question: `y' = (x - 3)e^{-2y}, \quad \text{with } y(3) = \ln 3`,
    initialCondition: `y(3) = ln 3`,
    steps: [
      `Step 1: Write y' = dy/dx and separate terms: e^{2y} dy = (x - 3) dx.`,
      `Step 2: Integrate both sides: ∫ e^{2y} dy = ∫ (x - 3) dx ⟹ (1/2)e^{2y} = (1/2)(x - 3)^2 + C_1.`,
      `Step 3: Multiply through by 2 and rename constant: e^{2y} = (x - 3)^2 + C.`,
      `Step 4: Plug in x = 3, y = ln 3: e^{2 ln 3} = (e^{ln 3})^2 = 3^2 = 9. Since (3 - 3)^2 = 0, C = 9.`,
      `Step 5: Solve for y: 2y = ln((x - 3)^2 + 9) ⟹ y(x) = (1/2) ln[(x - 3)^2 + 9].`
    ],
    finalAnswer: `y(x) = \frac{1}{2}\ln\left[(x - 3)^2 + 9\right]`,
    trapAlert: `Simplifying e^{2 ln 3}: Remember e^{2 ln 3} = e^{ln(3^2)} = 9, not 6!`,
    drillKey: `separable`
  },
  {
    num: 4,
    title: `4. Constant Equilibrium Solution (Initial Value Problem Trap)`,
    equationType: `Equilibrium Singular / Constant Solution`,
    question: `y' = y^2 - 4y + 3, \quad \text{with } y(0) = 3`,
    initialCondition: `y(0) = 3`,
    steps: [
      `Step 1: Factor the right-hand side polynomial: y' = (y - 1)(y - 3).`,
      `Step 2: Check equilibrium constant solutions where dy/dx = 0: y = 1 and y = 3.`,
      `Step 3: Notice the initial condition is y(0) = 3! The constant function y(x) = 3 satisfies y'(x) = 0 and (3-1)(3-3) = 0 identically for all x, and matches y(0) = 3.`,
      `Step 4: REMINDER: Do NOT divide by (y - 3) to separate variables! Dividing by (y - 3) assumes y ≠ 3 and throws away this exact valid constant solution!`
    ],
    finalAnswer: `y(x) \equiv 3 \quad \text{for all } x \in \mathbb{R}`,
    trapAlert: `CRITICAL CONCORDIA EXAM TRAP: Students who perform partial fractions ∫ dy/((y-1)(y-3)) waste 10 minutes and end up dividing by zero. Always check if y(x₀) is an equilibrium root first!`,
    drillKey: `separable`
  },
  {
    num: 5,
    title: `5. Linear ODE: Integrating Factor (from Tutor Notes)`,
    equationType: `First-Order Linear Differential Equation`,
    question: `y' + \frac{1}{x}y = x^2 - 1, \quad x > 0`,
    steps: [
      `Step 1: Identify standard form y' + P(x)y = Q(x) with P(x) = 1/x and Q(x) = x^2 - 1.`,
      `Step 2: Compute integrating factor for x > 0: μ(x) = exp(∫ (1/x) dx) = exp(ln x) = x.`,
      `Step 3: Multiply EVERY term by μ(x) = x: x y' + y = x^3 - x.`,
      `Step 4: Collapse LHS via product rule: (x y)' = x^3 - x.`,
      `Step 5: Integrate both sides: x y = x^4 / 4 - x^2 / 2 + C.`,
      `Step 6: Divide every term by x: y(x) = x^3 / 4 - x / 2 + C / x.`
    ],
    finalAnswer: `y(x) = \frac{x^3}{4} - \frac{x}{2} + \frac{C}{x}, \quad x > 0`,
    trapAlert: `Remember to divide C by x! Writing y = x^3/4 - x/2 + C loses full marks on the general solution.`,
    drillKey: `linear_if`
  },
  {
    num: 6,
    title: `6. Homogeneous Substitution (from Tutor Notes)`,
    equationType: `Homogeneous Degree 1 Differential Form`,
    question: `(x - y)dx + x\,dy = 0, \quad x \neq 0`,
    steps: [
      `Step 1: Divide by dx to express in derivative form: (x - y) + x y' = 0 ⟹ y' = (y - x)/x = y/x - 1.`,
      `Step 2: Since y' depends strictly on (y/x), substitute y = u x, which implies y' = u + x u'.`,
      `Step 3: Substitute into the ODE: u + x u' = u - 1.`,
      `Step 4: Cancel u on both sides: x u' = -1 ⟹ du = -(1/x) dx.`,
      `Step 5: Integrate both sides: u = -ln|x| + C = C - ln|x|.`,
      `Step 6: Back-substitute u = y/x: y/x = C - ln|x| ⟹ y(x) = x(C - ln|x|).`
    ],
    finalAnswer: `y(x) = x\left(C - \ln|x|\right)`,
    trapAlert: `Do not forget the product rule when differentiating y = ux: dy/dx = u + x(du/dx).`,
    drillKey: `homogeneous`
  },
  {
    num: 7,
    title: `7. Type-1 Substitution: y' = (x + y + 1)²`,
    equationType: `Type-1 Linear Substitution`,
    question: `y' = (x + y + 1)^2`,
    steps: [
      `Step 1: The linear package (x + y + 1) repeats. Let u = x + y + 1.`,
      `Step 2: Differentiate with respect to x: u' = 1 + y'.`,
      `Step 3: Replace y' using the ODE: u' = 1 + u^2.`,
      `Step 4: Separate variables: du / (1 + u^2) = dx.`,
      `Step 5: Integrate both sides: ∫ du / (1 + u^2) = ∫ dx ⟹ arctan(u) = x + C.`,
      `Step 6: Apply tangent to both sides: u = tan(x + C).`,
      `Step 7: Back-substitute u = x + y + 1: x + y + 1 = tan(x + C) ⟹ y(x) = tan(x + C) - x - 1.`
    ],
    finalAnswer: `y(x) = \tan(x + C) - x - 1 \quad \text{(where tangent is defined)}`,
    trapAlert: `The integral ∫ du/(1+u²) is arctan(u), NOT ln|1+u²|! Standard inverse trig forms must be recognized instantly.`,
    drillKey: `linear_arg`
  }
];

const ALL_COMPANION_QUESTIONS: CompanionDrillQuestion[] = Object.values(ENGR213_MIDTERM_DRILL_BANKS).flat();

// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------
export const Engr213MidtermCompanion: React.FC<Props> = ({ onViewPdf, onBack, initialTab }) => {
  const [activeTab, setActiveTab] = useState<'classifier' | 'tutor_videos' | 'tutorials' | 'tutor_hacks' | 'vault' | 'past_exams' | 'trainer'>(initialTab || 'classifier');
  const [selectedMethodId, setSelectedMethodId] = useState<string>('separable');
  const [selectedVideoMethodId, setSelectedVideoMethodId] = useState<string>('separable');
  const [vaultFilter, setVaultFilter] = useState<'all' | 'deriv' | 'integral' | 'pillar'>('all');
  const [blurFormulas, setBlurFormulas] = useState<boolean>(false);
  const [unblurredIds, setUnblurredIds] = useState<Set<string>>(new Set());

  // Video and modal interactions
  const [openVideoMethodId, setOpenVideoMethodId] = useState<string | null>(null);
  const [selectedHackForModal, setSelectedHackForModal] = useState<TutorHack | null>(null);
  const [selectedFormulaAi, setSelectedFormulaAi] = useState<string>('f4');

  // Interactive Brain Drill state
  const [drillSubjectFilter, setDrillSubjectFilter] = useState<string>('all');
  const [drillMode, setDrillMode] = useState<'specific' | 'sprint20' | 'bank50'>('sprint20');
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [showPastPapers, setShowPastPapers] = useState<boolean>(false);
  const [drillIdx, setDrillIdx] = useState<number>(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<string, number>>({});
  const [methodAnswers, setMethodAnswers] = useState<Record<string, 'correct' | 'distractor'>>({});
  const [activeTutorialTab, setActiveTutorialTab] = useState<'recovered7' | 'officialSets'>('recovered7');
  const [drillScore, setDrillScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [drillStreak, setDrillStreak] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [masteredMap, setMasteredMap] = useState<Record<string, boolean>>({});

  // Additional tools state
  const [vaultSearchQuery, setVaultSearchQuery] = useState<string>('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [selectedMidtermSubjectFilter, setSelectedMidtermSubjectFilter] = useState<string>('all');
  const [showEmergencyCheatSheet, setShowEmergencyCheatSheet] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(audio.enabled);

  // Tutor Hack Variant State
  const [activeHackVariantIdx, setActiveHackVariantIdx] = useState<number>(0);
  const [hackVariantAnswers, setHackVariantAnswers] = useState<Record<string, number>>({});

  // Vault Retention Sub-Sections & Repetition Counter
  const [vaultActiveSection, setVaultActiveSection] = useState<'catalog' | 'repetition_drill' | 'ai_assistant'>('catalog');
  const [vaultRepetitionCount, setVaultRepetitionCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('engr213_vault_rep_count') || '0', 10);
    } catch {
      return 0;
    }
  });

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

  function shuffleArray<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

  const filteredMidterms = useMemo(() => {
    if (selectedYearFilter === 'all') return UNOFFICIAL_MIDTERMS;
    return UNOFFICIAL_MIDTERMS.filter((m) => m.year.includes(selectedYearFilter));
  }, [selectedYearFilter]);

  // Filtered drill questions based on chosen subject, mode (specific / 20 / 50), and shuffle
  const activeDrillQuestions = useMemo(() => {
    let pool: CompanionDrillQuestion[] = [];
    if (drillSubjectFilter === 'all') {
      pool = ALL_COMPANION_QUESTIONS;
    } else if (drillSubjectFilter === 'newton') {
      pool = (ENGR213_MIDTERM_DRILL_BANKS['applications'] || []).filter(
        (q) => q.topic.toLowerCase().includes('newton') || q.question.toLowerCase().includes('cooling') || q.question.toLowerCase().includes('temperature')
      );
    } else if (drillSubjectFilter === 'tank') {
      pool = (ENGR213_MIDTERM_DRILL_BANKS['applications'] || []).filter(
        (q) => q.topic.toLowerCase().includes('tank') || q.question.toLowerCase().includes('tank') || q.question.toLowerCase().includes('brine') || q.question.toLowerCase().includes('salt')
      );
    } else if (drillSubjectFilter === 'complex_numbers') {
      pool = (ENGR213_MIDTERM_DRILL_BANKS['complex_numbers'] || []).filter(
        (q) => q.topic.includes('17.1') || q.topic.toLowerCase().includes('conjugate') || q.topic.toLowerCase().includes('multiplication') || q.topic.toLowerCase().includes('division') || q.topic.toLowerCase().includes('modulus') || q.topic.toLowerCase().includes('unit') || q.topic.toLowerCase().includes('inequality')
      );
    } else if (drillSubjectFilter === 'complex_roots') {
      pool = (ENGR213_MIDTERM_DRILL_BANKS['complex_numbers'] || []).filter(
        (q) => q.topic.includes('17.2') || q.topic.toLowerCase().includes('root') || q.topic.toLowerCase().includes('moivre') || q.topic.toLowerCase().includes('polar')
      );
    } else if (drillSubjectFilter === 'tutor_hacks') {
      pool = TUTOR_HACKS.flatMap((hack) =>
        hack.variants.map((v, vIdx) => ({
          id: `th_var_${hack.id}_${v.id}`,
          courseId: 'ENGR213' as const,
          chapter: 'midterm',
          methodId: (hack.id === 'th1' || hack.id === 'th3' ? 'applications' : hack.id === 'th6' ? 'homogeneous' : 'linear_if') as any,
          topic: `Tutor Hack: ${hack.title} · Variant ${String.fromCharCode(65 + vIdx)}`,
          difficulty: 'Midterm Level',
          question: v.problem,
          options: v.options,
          correctIndex: v.correctIndex,
          explanation: {
            coreConcept: hack.keyRule,
            stepByStep: v.babySteps,
            commonTrap: v.trapExplanation,
            reference: hack.sourceRef
          }
        }))
      );
    } else {
      pool = ENGR213_MIDTERM_DRILL_BANKS[drillSubjectFilter] || ALL_COMPANION_QUESTIONS.filter((q) => q.methodId === drillSubjectFilter);
    }
    if (!pool || pool.length === 0) pool = ALL_COMPANION_QUESTIONS;

    if (drillMode === 'specific') {
      return [pool[0]];
    }

    const shuffled = shuffleArray(pool);
    if (drillMode === 'sprint20') {
      return shuffled.slice(0, Math.min(20, shuffled.length));
    }
    return shuffled.slice(0, Math.min(50, shuffled.length));
  }, [drillSubjectFilter, drillMode, shuffleSeed]);

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

  const handleShuffleDrill = () => {
    audio.playClick();
    setShuffleSeed((s) => s + 1);
    setDrillIdx(0);
    setDrillAnswers({});
  };

  // Launch drill for a specific method from the top-right button
  const handleDrillMethod = (methodId: string, initialMode: 'specific' | 'sprint20' | 'bank50' = 'sprint20') => {
    audio.playClick();
    setDrillSubjectFilter(methodId);
    setDrillMode(initialMode);
    setShuffleSeed((s) => s + 1);
    setDrillIdx(0);
    setDrillAnswers({});
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
              <span className="ec-badge-copilot" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#ffffff' }}>
                <Sparkles size={14} /> 🎯 Confirmed Midterm 1 Scope (Lectures 1–8 · Weeks 1–4)
              </span>
              <span className="ec-badge-warning">
                <AlertTriangle size={14} /> NO Formula Sheet on Exam
              </span>
            </div>
            <h1 className="ec-main-title">ENGR 213 Midterm Mastery Companion</h1>
            <p className="ec-subtitle">
              Applied Ordinary Differential Equations · Concordia University · Official Midterm 1 Syllabus: Chapter 2 (First-Order ODEs &amp; Applications) + Sections 17.1 &amp; 17.2 (Complex Numbers &amp; Auxiliary Equations) · Lectures 1–8
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
            <strong>Official Midterm 1 Scope Confirmed (Lectures 1–8):</strong> This drill covers strictly <strong>Chapter 2</strong> (Classification, Separable, Linear, Exact, Homogeneous, Bernoulli, Substitutions, Linear &amp; Nonlinear Models/Applications) and <strong>Sections 17.1 &amp; 17.2</strong> (Complex Numbers, Modulus, Argument, Polar Form, Euler&apos;s Formula &amp; 2nd-Order Auxiliary Equations). All Midterm 2 topics (Higher-Order Non-Homogeneous, Undetermined Coefficients, Variation of Parameters, Cauchy-Euler, Laplace Transforms) are strictly excluded.
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
          className={`ec-tab-btn ${activeTab === 'tutor_videos' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('tutor_videos');
          }}
        >
          <Clapperboard size={17} />
          <span>🎬 AI Tutor Videos (8 Archetypes)</span>
        </button>
        <button
          className={`ec-tab-btn ${activeTab === 'tutorials' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('tutorials');
          }}
        >
          <BookOpen size={17} />
          <span>⭐ Tutorials &amp; Core Exercises</span>
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
                  {ENGR213_MOTION_LESSONS[m.id] && (
                    <div className="ec-method-lesson">
                      <Play size={10} fill="currentColor" /> {formatLessonTime(ENGR213_MOTION_LESSONS[m.id].duration)} video lesson
                    </div>
                  )}
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

              {ENGR213_MOTION_LESSONS[currentMethod.id] && (
                <MotionLessonPlayer key={currentMethod.id} lesson={ENGR213_MOTION_LESSONS[currentMethod.id]} />
              )}

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
      {/* TAB: AI-Generated Motion Video Lessons        */}
      {/* --------------------------------------------- */}
      {activeTab === 'tutor_videos' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Hero Banner with Mandatory AI Disclosure */}
          <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #581c87 100%)', borderRadius: '16px', padding: '24px 28px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', boxShadow: '0 8px 24px rgba(49, 46, 129, 0.25)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span className="ec-lesson-ai-badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)', padding: '4px 10px', fontSize: '11px' }}>
                  <Sparkles size={12} /> 100% Programmatically AI-Generated from Code
                </span>
                <span style={{ color: '#c084fc', fontSize: '12px', fontWeight: 600 }}>
                  8 Motion Lessons · Concordia Lecture Examples
                </span>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, margin: '0 0 6px', color: '#ffffff' }}>
                ENGR 213 · AI-Generated Motion Video Lessons (8 ODE Archetypes)
              </h2>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#e0e7ff', maxWidth: '820px', lineHeight: '1.5' }}>
                These video lessons were <strong>programmatically generated by AI from code</strong> (KaTeX &amp; SVG motion graphics rendered frame by frame, with AI narration), specifically designed to teach you how to spot each ODE archetype in under 10 seconds, master the algebraic recipe, and avoid Concordia zero-marks exam traps.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="ec-drill-btn"
                onClick={() => {
                  audio.playClick();
                  handleDrillMethod(selectedVideoMethodId);
                }}
                style={{ padding: '10px 18px', fontSize: '13.5px' }}
              >
                <Zap size={15} fill="currentColor" /> Drill Selected Archetype
              </button>
            </div>
          </div>

          {/* Video Selector Grid (8 Archetypes) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            {METHOD_ARCHETYPES.map((method) => {
              const lesson = ENGR213_MOTION_LESSONS[method.id];
              if (!lesson) return null;
              const isSelected = selectedVideoMethodId === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => {
                    audio.playClick();
                    setSelectedVideoMethodId(method.id);
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #9333ea' : '1px solid #e2e8f0',
                    background: isSelected ? 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)' : '#ffffff',
                    boxShadow: isSelected ? '0 4px 14px rgba(147, 51, 234, 0.18)' : '0 1px 3px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: isSelected ? '#7e22ce' : '#64748b' }}>
                      Lesson #{lesson.num}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, background: isSelected ? '#7e22ce' : '#f1f5f9', color: isSelected ? '#ffffff' : '#475569', padding: '2px 7px', borderRadius: '999px' }}>
                      ⏱ {formatLessonTime(lesson.duration)}
                    </span>
                  </div>
                  <strong style={{ fontSize: '13.5px', color: '#1e293b', marginBottom: '4px' }}>
                    {lesson.title}
                  </strong>
                  <span style={{ fontSize: '11.5px', color: '#64748b', lineHeight: '1.4' }}>
                    {lesson.source}
                  </span>
                  <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#9333ea', fontWeight: 700 }}>
                    <Sparkles size={11} /> AI Video from Code
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Video Player Stage */}
          {ENGR213_MOTION_LESSONS[selectedVideoMethodId] && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 4px', color: '#1e1b4b' }}>
                    Lesson #{ENGR213_MOTION_LESSONS[selectedVideoMethodId].num}: {ENGR213_MOTION_LESSONS[selectedVideoMethodId].title}
                  </h3>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>
                    {ENGR213_MOTION_LESSONS[selectedVideoMethodId].source} · {formatLessonTime(ENGR213_MOTION_LESSONS[selectedVideoMethodId].duration)} duration
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    className="ec-drill-btn"
                    onClick={() => {
                      setSelectedMethodId(selectedVideoMethodId);
                      setActiveTab('classifier');
                      audio.playClick();
                    }}
                    style={{ background: '#f8fafc', color: '#1e293b', border: '1px solid #cbd5e1' }}
                  >
                    <Compass size={14} /> Open Method Classifier
                  </button>
                  <button
                    type="button"
                    className="ec-drill-btn"
                    onClick={() => handleDrillMethod(selectedVideoMethodId)}
                  >
                    <Zap size={14} fill="currentColor" /> Practice Drill
                  </button>
                </div>
              </div>

              <MotionLessonPlayer
                key={selectedVideoMethodId}
                lesson={ENGR213_MOTION_LESSONS[selectedVideoMethodId]}
              />
            </div>
          )}
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

                  {/* Mental Retention Anchor */}
                  {selectedHackForModal.mentalAnchor && (
                    <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '8px', padding: '14px' }}>
                      <strong style={{ fontSize: '13px', color: '#92400e', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Brain size={16} /> 🧠 Mental Retention Anchor (How to Remember on Exam):
                      </strong>
                      <div style={{ fontSize: '13.5px', marginTop: '4px', color: '#78350f', lineHeight: '1.5' }}>
                        {selectedHackForModal.mentalAnchor}
                      </div>
                    </div>
                  )}

                  {/* Interactive Multi-Variant Problem Trainer */}
                  {selectedHackForModal.variants && selectedHackForModal.variants.length > 0 && (
                    <div style={{ background: '#ffffff', border: '1.5px solid #6366f1', borderRadius: '12px', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                        <strong style={{ fontSize: '14px', color: '#4338ca', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Target size={16} /> Interactive Multi-Variant Problem Drill:
                        </strong>
                        <span style={{ fontSize: '11.5px', color: '#64748b' }}>
                          Practice 3 exam variations of this hack
                        </span>
                      </div>

                      {/* Variant Tabs */}
                      <div className="ec-variant-tabs-row">
                        {selectedHackForModal.variants.map((v, vIdx) => (
                          <button
                            key={v.id}
                            type="button"
                            className={`ec-variant-pill-btn ${activeHackVariantIdx === vIdx ? 'active' : ''}`}
                            onClick={() => {
                              audio.playClick();
                              setActiveHackVariantIdx(vIdx);
                            }}
                          >
                            <span>{v.name.split(':')[0]}</span>
                          </button>
                        ))}
                      </div>

                      {/* Current Variant Card */}
                      {(() => {
                        const currentVariant = selectedHackForModal.variants[activeHackVariantIdx] || selectedHackForModal.variants[0];
                        const userChoice = hackVariantAnswers[currentVariant.id];
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', lineHeight: '1.5', background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                              <MathText text={currentVariant.problem} />
                            </div>

                            {/* Options */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                              {currentVariant.options.map((opt, oIdx) => {
                                const isSel = userChoice === oIdx;
                                const isCor = oIdx === currentVariant.correctIndex;
                                let optStyle: React.CSSProperties = {
                                  padding: '10px 14px',
                                  borderRadius: '8px',
                                  border: '1.5px solid #cbd5e1',
                                  background: '#ffffff',
                                  color: '#1e293b',
                                  fontSize: '13px',
                                  cursor: userChoice !== undefined ? 'default' : 'pointer',
                                  textAlign: 'left'
                                };
                                if (userChoice !== undefined) {
                                  if (isSel && isCor) {
                                    optStyle.borderColor = '#10b981';
                                    optStyle.background = '#dcfce7';
                                    optStyle.color = '#065f46';
                                    optStyle.fontWeight = 700;
                                  } else if (isSel && !isCor) {
                                    optStyle.borderColor = '#ef4444';
                                    optStyle.background = '#fee2e2';
                                    optStyle.color = '#991b1b';
                                  } else if (isCor) {
                                    optStyle.borderColor = '#10b981';
                                    optStyle.background = '#ecfdf5';
                                    optStyle.color = '#065f46';
                                  }
                                }
                                return (
                                  <button
                                    key={oIdx}
                                    type="button"
                                    style={optStyle}
                                    onClick={() => {
                                      if (userChoice !== undefined) return;
                                      if (oIdx === currentVariant.correctIndex) audio.playCorrect();
                                      else audio.playIncorrect();
                                      setHackVariantAnswers((prev) => ({ ...prev, [currentVariant.id]: oIdx }));
                                    }}
                                  >
                                    <strong>{['A', 'B', 'C', 'D'][oIdx]}. </strong>
                                    <MathText text={opt} />
                                  </button>
                                );
                              })}
                            </div>

                            {/* Baby Steps Breakdown on Answer */}
                            {userChoice !== undefined && (
                              <div className="ec-baby-step-box">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '13px', color: userChoice === currentVariant.correctIndex ? '#059669' : '#dc2626' }}>
                                  {userChoice === currentVariant.correctIndex ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
                                  <span>{userChoice === currentVariant.correctIndex ? 'Correct! Baby-Step Execution Protocol:' : 'Baby-Step Solution & Mistake Recovery:'}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', marginTop: '4px' }}>
                                  {currentVariant.babySteps.map((step, sIdx) => (
                                    <div key={sIdx} style={{ padding: '6px 10px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                      <MathText text={step} />
                                    </div>
                                  ))}
                                </div>
                                <div style={{ fontSize: '12px', color: '#b45309', background: '#fef3c7', padding: '8px 10px', borderRadius: '6px', marginTop: '4px' }}>
                                  <strong>⚠️ Exam Trap:</strong> {currentVariant.trapExplanation}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
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
          {/* Vault Top Hero & Sub-Navigation */}
          <div className="ec-retention-hero">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontWeight: 800 }}>
                  Active Formula Memory &amp; Functionality Retention Center
                </span>
                <h3 style={{ margin: '4px 0 0', fontSize: '18px', fontWeight: 800 }}>
                  Calculus Survival Vault (Zero Formula Sheet Permitted on Midterm)
                </h3>
              </div>
              <div className="ec-repetition-counter-badge" style={{ background: 'rgba(251, 191, 36, 0.15)', borderColor: '#fbbf24', color: '#fef08a' }}>
                <Brain size={14} /> Repetitions Completed: {vaultRepetitionCount}
              </div>
            </div>

            {/* Sub-Tabs Bar */}
            <div className="ec-retention-nav-tabs" style={{ borderBottomColor: 'rgba(255,255,255,0.15)', margin: '8px 0 0', paddingBottom: '0' }}>
              <button
                type="button"
                className={`ec-retention-nav-btn ${vaultActiveSection === 'catalog' ? 'active' : ''}`}
                style={{ color: vaultActiveSection === 'catalog' ? '#1e1b4b' : '#cbd5e1' }}
                onClick={() => {
                  audio.playClick();
                  setVaultActiveSection('catalog');
                }}
              >
                <BookOpen size={14} /> 1. Formula Directory &amp; Functionality
              </button>
              <button
                type="button"
                className={`ec-retention-nav-btn ${vaultActiveSection === 'repetition_drill' ? 'active' : ''}`}
                style={{ color: vaultActiveSection === 'repetition_drill' ? '#1e1b4b' : '#cbd5e1' }}
                onClick={() => {
                  audio.playClick();
                  setVaultActiveSection('repetition_drill');
                  setVaultRepetitionCount((c) => {
                    const next = c + 1;
                    try { localStorage.setItem('engr213_vault_rep_count', next.toString()); } catch(e){}
                    return next;
                  });
                }}
              >
                <Zap size={14} /> 2. Active Repetition Recall Drill
              </button>
              <button
                type="button"
                className={`ec-retention-nav-btn ${vaultActiveSection === 'ai_assistant' ? 'active' : ''}`}
                style={{ color: vaultActiveSection === 'ai_assistant' ? '#1e1b4b' : '#cbd5e1' }}
                onClick={() => {
                  audio.playClick();
                  setVaultActiveSection('ai_assistant');
                }}
              >
                <Sparkles size={14} /> 3. AI Diagnostic &amp; Fix Assistant
              </button>
            </div>
          </div>

          {/* Sub-Section 2: Active Repetition Recall Drill */}
          {vaultActiveSection === 'repetition_drill' && (
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span className="ec-card-tag" style={{ background: '#e0e7ff', color: '#4338ca' }}>
                    Active Formula Recall Drill
                  </span>
                  <h4 style={{ margin: '6px 0 0', fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                    Rapid Repetition Trainer · Cement Every Midterm 1 Formula
                  </h4>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    type="button"
                    className="ec-blur-toggle-btn"
                    onClick={() => {
                      audio.playClick();
                      handleDrillMethod('formulas');
                    }}
                  >
                    <Play size={13} fill="currentColor" /> Full Brain Drill Mode
                  </button>
                </div>
              </div>

              {/* Repetition Flashcard Quiz */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  Formula Functionality &amp; Recall Challenge:
                </span>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', marginTop: '6px', lineHeight: '1.5' }}>
                  <MathText text="In a non-exact equation $M(x,y)dx + N(x,y)dy = 0$, if $rac{M_y - N_x}{N} = f(x)$ is a function of $x$ alone, what is the exact integrating factor $\mu(x)$?" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginTop: '14px' }}>
                  {[
                    '\mu(x) = e^{\int f(x)dx}',
                    '\mu(x) = e^{-\int f(x)dx}',
                    '\mu(x) = \int f(x)dx',
                    '\mu(x) = \frac{1}{f(x)}'
                  ].map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      type="button"
                      style={{
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      onClick={() => {
                        if (oIdx === 0) {
                          audio.playCorrect();
                          setVaultRepetitionCount((c) => {
                            const next = c + 1;
                            try { localStorage.setItem('engr213_vault_rep_count', next.toString()); } catch(e){}
                            return next;
                          });
                        } else {
                          audio.playIncorrect();
                        }
                      }}
                    >
                      <strong>{['A', 'B', 'C', 'D'][oIdx]}. </strong>
                      <MathText text={`$${opt}$`} />
                    </button>
                  ))}
                </div>

                {/* Baby Steps & Meaning */}
                <div className="ec-baby-step-box" style={{ marginTop: '14px' }}>
                  <strong style={{ fontSize: '13px', color: '#065f46' }}>
                    💡 Functionality &amp; Meaning Breakdown:
                  </strong>
                  <div style={{ fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
                    <MathText text="Multiplying the non-exact equation by $\\mu(x) = e^{\\int f(x)dx}$ forces the Clairaut condition $(\\mu M)_y = (\\mu N)_x$ to hold identically, turning the equation into a solvable exact differential equation!" />
                  </div>
                  <div style={{ fontSize: '12px', color: '#b45309', background: '#fef3c7', padding: '6px 10px', borderRadius: '6px' }}>
                    <MathText text="⚠️ **Memory Trap:** Notice the order: $M_y - N_x$ divides by $N$. If you divide by $M$, you must reverse the numerator: $(N_x - M_y)/M = g(y) \\implies \\mu(y) = e^{\\int g(y)dy}$." />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sub-Section 3: AI Diagnostic Assistant */}
          {vaultActiveSection === 'ai_assistant' && (
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
          )}

          {/* Sub-Section 1: Formula Catalog & Functionality */}
          {vaultActiveSection === 'catalog' && (
            <>
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
            </>
          )}
        </div>
      )}

      {/* --------------------------------------------- */}
            {/* TAB: Official Fall 2025 Tutorial Exercises & Worked Solutions */}
      {activeTab === 'tutorials' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Hero Banner */}
          <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)', borderRadius: '16px', padding: '24px 28px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', boxShadow: '0 8px 24px rgba(49, 46, 129, 0.25)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ background: 'rgba(245, 158, 11, 0.25)', border: '1px solid #f59e0b', color: '#fef08a', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ⭐ Official Fall 2025 Curriculum
                </span>
                <span style={{ color: '#cbd5e1', fontSize: '12px' }}>
                  23 Complete Pages · Chapters 1 &amp; 2 Midterm 1 Scope
                </span>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, margin: '0 0 6px', color: '#ffffff' }}>
                ENGR 213 Official Tutorial Exercises &amp; Solutions
              </h2>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#e0e7ff', maxWidth: '780px', lineHeight: '1.5' }}>
                Extracted directly from the official Concordia Fall 2025 tutorial manual (<code>TutorialENGR 213.pdf</code>). Tutorial exercises represent the primary pool from which midterm exam problems are formulated.
              </p>
            </div>

            {onViewPdf && (
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="ec-blur-toggle-btn"
                  style={{ background: '#f59e0b', color: '#1e1b4b', border: 'none', fontWeight: 800, padding: '10px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                  onClick={() => {
                    audio.playClick();
                    onViewPdf({
                      id: '213-step-by-step-tutorial',
                      courseId: 'ENGR213',
                      categoryId: 'Tutorials',
                      categoryTitle: 'Tutor Step-by-Step Practice',
                      title: 'ENGR 213 - ODE Step-by-Step Tutorial Practice (Tutor Notes & Recent Exercises)',
                      filename: 'ENGR 213 - ODE Step-by-Step Tutorial Practice (Tutor Notes & Recent Exercises).pdf',
                      relativePath: 'Engr 213/04 - Tutorials/ENGR 213 - ODE Step-by-Step Tutorial Practice (Tutor Notes & Recent Exercises).pdf',
                      tags: ['Tutor Notes', 'Step-by-Step', '7 Core Exercises'],
                      summary: 'Recovered ODE tutorial exercises with micro-step derivations, equilibrium constant solution traps, and linear substitutions.'
                    });
                  }}
                >
                  <FileText size={16} />
                  <span>Open Tutor Practice PDF (4 Pages)</span>
                </button>
                <button
                  type="button"
                  className="ec-blur-toggle-btn"
                  style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', fontWeight: 700, padding: '10px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                  onClick={() => {
                    audio.playClick();
                    onViewPdf({
                      id: 'ENGR213:official_tutorial_manual',
                      courseId: 'ENGR213',
                      categoryId: 'Tutorials',
                      categoryTitle: 'Official Tutorial Manual',
                      title: 'ENGR 213 - Official Tutorial Exercises & Solutions Manual',
                      filename: 'ENGR 213 - Official Tutorial Exercises & Solutions Manual.pdf',
                      relativePath: 'Engr 213/04 - Tutorials/ENGR 213 - Official Tutorial Exercises & Solutions Manual.pdf',
                      tags: ['Official Tutorial', 'Fall 2025', 'Midterm Scope'],
                      summary: 'Complete official Concordia ENGR 213 tutorial problem manual covering all Chapter 1 and Chapter 2 midterm exercise sets and full solutions.'
                    });
                  }}
                >
                  <ExternalLink size={15} />
                  <span>Full Course Manual (23 Pages)</span>
                </button>
              </div>
            )}
          </div>

          {/* Sub-Navigation: 7 Core Tutor Exercises vs 8 Course Manual Sets */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={`ec-variant-pill-btn ${activeTutorialTab === 'recovered7' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setActiveTutorialTab('recovered7');
              }}
              style={{ padding: '8px 16px', fontSize: '13.5px', fontWeight: 700 }}
            >
              ⭐ 7 Core Tutorial Exercises (Tutor Notes &amp; Recent Sessions)
            </button>
            <button
              type="button"
              className={`ec-variant-pill-btn ${activeTutorialTab === 'officialSets' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setActiveTutorialTab('officialSets');
              }}
              style={{ padding: '8px 16px', fontSize: '13.5px', fontWeight: 700 }}
            >
              📚 Official Course Manual Sets (Exercises 1.1 to 2.6)
            </button>
          </div>

          {/* Part A: 7 Recovered Tutorial Problems with Step-by-Step Breakdown */}
          {activeTutorialTab === 'recovered7' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '18px' }}>
              {RECOVERED_TUTORIAL_PROBLEMS.map((tut) => (
                <div
                  key={tut.num}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', background: '#eef2ff', padding: '3px 8px', borderRadius: '6px' }}>
                        Exercise #{tut.num}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 600 }}>
                        {tut.equationType}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 10px', color: '#0f172a' }}>
                      {tut.title}
                    </h4>

                    {/* Question Box */}
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 14px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Given Differential Equation:
                      </span>
                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1e293b' }}>
                        <MathText text={tut.question} />
                      </div>
                    </div>

                    {/* Step-by-Step Derivation */}
                    <div style={{ background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '8px', padding: '12px 14px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#7e22ce', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        Step-by-Step Micro-Derivation:
                      </span>
                      <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12.5px', color: '#3b0764', lineHeight: '1.6' }}>
                        {tut.steps.map((step, sIdx) => (
                          <li key={sIdx} style={{ marginBottom: '4px' }}>
                            <MathText text={step} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Final Answer */}
                    <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '10px 12px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#065f46', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                        Final Answer:
                      </span>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#047857' }}>
                        <MathText text={tut.finalAnswer} />
                      </div>
                    </div>

                    {/* Exam Trap */}
                    <div style={{ fontSize: '12px', color: '#b45309', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px', padding: '8px 10px', lineHeight: '1.4' }}>
                      ⚠️ <strong>Crucial Exam Trap:</strong> {tut.trapAlert}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="ec-drill-btn"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
                    onClick={() => {
                      audio.playClick();
                      handleDrillMethod(tut.drillKey);
                    }}
                  >
                    <span>🎯 Drill {tut.equationType} in Practice Trainer</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Part B: Official 23-Page Course Manual Sets */}
          {activeTutorialTab === 'officialSets' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {[
              {
                exerciseNum: 'Exercise 1.1',
                chapter: 'Chapter 1: Introduction',
                topic: 'Order, Linearity & Verifying Solutions',
                problemStmt: 'Determine the order and linearity of (y\'\')³ + x y\' + y = \\sin x, and verify if y = c_1 e^{2x} + c_2 x e^{2x} satisfies y\'\' - 4y\' + 4y = 0.',
                solutionKey: 'Order is 2 (highest derivative); nonlinear because (y\'\') is cubed. Differentiating y via product rule verifies y\'\' - 4y\' + 4y = 0 identically.',
                examTip: 'Degree refers to the power of the highest derivative, whereas Order is the number of primes. Linearity requires degree 1 and no y-products!',
                drillKey: 'separable'
              },
              {
                exerciseNum: 'Exercise 1.2',
                chapter: 'Chapter 1: Existence & Uniqueness',
                topic: 'Picard Theorem for First-Order IVP',
                problemStmt: 'Determine whether dy/dx = y^{1/3}, y(0) = 0 has a unique solution on an interval containing x = 0.',
                solutionKey: 'f(x, y) = y^{1/3} is continuous everywhere, but ∂f/∂y = 1/(3 y^{2/3}) is discontinuous at y = 0. Uniqueness is NOT guaranteed! Indeed y = 0 and y = (2/3 x)^{3/2} are both solutions.',
                examTip: 'Always check both continuity of f(x, y) AND continuity of ∂f/∂y in an open rectangle around (x₀, y₀).',
                drillKey: 'separable'
              },
              {
                exerciseNum: 'Exercise 2.1',
                chapter: 'Chapter 2: Separable ODEs',
                topic: 'Separable IVP with Negative Square Root Branch',
                problemStmt: 'Solve the initial value problem: dy/dx = 2x/y with y(0) = -3.',
                solutionKey: 'y dy = 2x dx ⟹ y²/2 = x² + C₁ ⟹ y² = 2x² + 9. Since y(0) = -3 < 0, select the negative root branch: y(x) = -√(2x² + 9).',
                examTip: 'Missing the negative sign loses 2 marks. If y(x₀) is negative, the root branch MUST be negative.',
                drillKey: 'separable'
              },
              {
                exerciseNum: 'Exercise 2.2',
                chapter: 'Chapter 2: Linear ODEs',
                topic: 'Integrating Factor with Logarithmic Negative Power',
                problemStmt: 'Solve x y\' - 3y = x⁴ with y(1) = 2 for x > 0.',
                solutionKey: 'Normalize: y\' - (3/x)y = x³. P(x) = -3/x ⟹ μ(x) = exp(∫ -3/x dx) = x⁻³ = 1/x³. Then d/dx [y/x³] = 1 ⟹ y/x³ = x + C ⟹ y(x) = x⁴ + x³.',
                examTip: 'Always lift the negative multiplier into the log exponent: exp(-3 ln x) = x⁻³ = 1/x³.',
                drillKey: 'linear_if'
              },
              {
                exerciseNum: 'Exercise 2.3',
                chapter: 'Chapter 2: Exact Equations',
                topic: 'Exact Differential Form & Potential Function',
                problemStmt: 'Solve (2xy + 3)dx + (x² - 1)dy = 0 with y(0) = 1.',
                solutionKey: 'My = 2x = Nx. Exact! Ψ(x, y) = ∫ (2xy + 3)dx = x²y + 3x + g(y). ∂Ψ/∂y = x² + g\'(y) = x² - 1 ⟹ g(y) = -y. Solution: x²y + 3x - y = -1.',
                examTip: 'Equate ∂Ψ/∂y to N(x, y) to isolate g\'(y). All remaining terms in g\'(y) must depend purely on y.',
                drillKey: 'exact'
              },
              {
                exerciseNum: 'Exercise 2.4',
                chapter: 'Chapter 2: Special Integrating Factors',
                topic: 'Non-Exact ODE Linearized via μ(x)',
                problemStmt: 'Solve (3xy + y²)dx + (x² + xy)dy = 0.',
                solutionKey: 'My = 3x + 2y, Nx = 2x + y. (My - Nx)/N = (x + y)/(x(x + y)) = 1/x (purely in x!). μ(x) = exp(∫ 1/x dx) = x. Multiplying gives an exact equation.',
                examTip: 'If (My - Nx)/N depends only on x, μ(x) = exp(∫ f(x)dx). If (Nx - My)/M depends only on y, μ(y) = exp(∫ g(y)dy).',
                drillKey: 'non_exact'
              },
              {
                exerciseNum: 'Exercise 2.5',
                chapter: 'Chapter 2: Bernoulli ODE',
                topic: 'Nonlinear Bernoulli Power Reduction (u = y¹⁻ⁿ)',
                problemStmt: 'Solve y\' + (1/x)y = x y² for x > 0.',
                solutionKey: 'n = 2 ⟹ u = y¹⁻² = y⁻¹. Divide: y⁻² y\' + (1/x)y⁻¹ = x. Substitute: -u\' + (1/x)u = x ⟹ u\' - (1/x)u = -x. Linear equation in u!',
                examTip: 'Remember to multiply by (1 - n) = -1 when substituting u\' to avoid dropping minus signs on the RHS.',
                drillKey: 'bernoulli'
              },
              {
                exerciseNum: 'Exercise 2.6',
                chapter: 'Chapter 2: Engineering Models',
                topic: 'Salt Mixture Tank with Constant Volume',
                problemStmt: 'A 200 L tank has 10 kg salt. Brine with 0.5 kg/L enters at 4 L/min; well-stirred mixture leaves at 4 L/min. Find salt amount A(t).',
                solutionKey: 'dA/dt = Rin - Rout = (4)(0.5) - 4(A/200) = 2 - A/50. Linear ODE: dA/dt + A/50 = 2 ⟹ A(t) = 100 - 90 e^{-t/50}. As t → ∞, A → 100 kg.',
                examTip: 'Rin = (flow in) × (conc in). Rout = (flow out) × (A(t) / V(t)). When flow in = flow out, V(t) remains constant.',
                drillKey: 'applications'
              }
            ].map((tut, tIdx) => (
              <div key={tIdx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', background: '#eef2ff', padding: '3px 8px', borderRadius: '6px' }}>
                      {tut.exerciseNum}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                      {tut.chapter}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, margin: '0 0 8px', color: '#0f172a' }}>
                    {tut.topic}
                  </h4>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: '#334155', lineHeight: '1.5', marginBottom: '10px' }}>
                    <strong>Problem:</strong> {tut.problemStmt}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#065f46', background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '10px 12px', lineHeight: '1.5', marginBottom: '10px' }}>
                    <strong>Official Solution Step:</strong> {tut.solutionKey}
                  </div>
                  <div style={{ fontSize: '12px', color: '#b45309' }}>
                    ⚠️ <strong>Exam Trap:</strong> {tut.examTip}
                  </div>
                </div>

                <button
                  type="button"
                  className="ec-drill-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => handleDrillMethod(tut.drillKey)}
                >
                  <Play size={12} fill="currentColor" /> Drill Related Problem Variants
                </button>
              </div>
            ))}
          </div>
          )}
        </div>
      )}

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

          {/* Unofficial Extracted Past Papers Grid (Collapsible / Hidden by default) */}
          <div style={{ margin: '14px 0 8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, margin: 0, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>📁 Unofficial Past Midterm Exam Papers ({filteredMidterms.length} Papers)</span>
              </h4>
              <button
                type="button"
                className="ec-blur-toggle-btn"
                onClick={() => {
                  audio.playClick();
                  setShowPastPapers(!showPastPapers);
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}
              >
                {showPastPapers ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{showPastPapers ? 'Hide Past Exam Papers' : 'Show Unofficial Past Midterm Exam Papers (9)'}</span>
              </button>
            </div>

            {showPastPapers && (
              <div style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
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
            )}
          </div>

          {/* Subject Filter Bar Matching Midterm 1 Scope (Chapter 2 + Sec 17.1/17.2) */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <strong style={{ fontSize: '13.5px', color: '#1e293b' }}>
                  🎯 Filter Past Midterm Problems by Chapter 2 &amp; Sec 17.1–17.2 Subject:
                </strong>
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b' }}>
                  Select an individual topic or view the complete midterm blueprint:
                </p>
              </div>
              <button
                type="button"
                className="ec-drill-btn"
                onClick={() => {
                  audio.playClick();
                  handleDrillMethod(selectedMidtermSubjectFilter === 'all' ? 'all' : selectedMidtermSubjectFilter);
                }}
              >
                <Play size={12} fill="currentColor" /> Drill {selectedMidtermSubjectFilter === 'all' ? 'All Midterm 1 Scope' : selectedMidtermSubjectFilter} in Practice Trainer
              </button>
            </div>

            <div className="ec-subject-filter-bar" style={{ margin: '6px 0 0' }}>
              {[
                { id: 'all', label: 'All Midterm 1 Scope' },
                { id: 'separable', label: '1. Separable IVPs' },
                { id: 'linear_if', label: '2. Linear (IF)' },
                { id: 'exact', label: '3. Exact Potential' },
                { id: 'non_exact', label: '4. Non-Exact IF' },
                { id: 'bernoulli', label: '5. Bernoulli' },
                { id: 'homogeneous', label: '6. Homogeneous' },
                { id: 'linear_arg', label: '7. Substitutions' },
                { id: 'newton', label: '8. Newton Cooling' },
                { id: 'tank', label: '9. Mixing Tanks' },
                { id: 'complex_numbers', label: '10. Sec 17.1 & 17.2 Complex Numbers & Roots' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`ec-subject-filter-chip ${selectedMidtermSubjectFilter === s.id ? 'active' : ''}`}
                  onClick={() => {
                    audio.playClick();
                    setSelectedMidtermSubjectFilter(s.id);
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {PAST_PROBLEMS.filter((prob) => selectedMidtermSubjectFilter === 'all' || prob.methodId === selectedMidtermSubjectFilter).map((prob) => (
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
                { id: 'all', label: 'All Midterm 1 Scope (Full Exam)' },
                { id: 'separable', label: '1. Separable IVPs' },
                { id: 'linear_if', label: '2. Linear (IF)' },
                { id: 'exact', label: '3. Exact Potential' },
                { id: 'non_exact', label: '4. Non-Exact IF' },
                { id: 'bernoulli', label: '5. Bernoulli' },
                { id: 'homogeneous', label: '6. Homogeneous' },
                { id: 'linear_arg', label: '7. Substitutions' },
                { id: 'newton', label: '8. Newton Cooling' },
                { id: 'tank', label: '9. Mixing Tanks' },
                { id: 'complex_numbers', label: '10. Sec 17.1 Complex Arithmetic' },
                { id: 'complex_roots', label: '11. Sec 17.2 Powers & Roots' },
                { id: 'tutor_hacks', label: '⚡ Tutor Hacks & Variants' },
                { id: 'formulas', label: '🧠 Formula Retention Drill' }
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

          {/* Drill Mode Selection Bar & Shuffle Action */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px 16px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Practice Mode:
              </span>
              <button
                type="button"
                className={`ec-variant-pill-btn ${drillMode === 'specific' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setDrillMode('specific');
                  setDrillIdx(0);
                  setDrillAnswers({});
                }}
              >
                🎯 This Specific Problem (1)
              </button>
              <button
                type="button"
                className={`ec-variant-pill-btn ${drillMode === 'sprint20' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setDrillMode('sprint20');
                  setDrillIdx(0);
                  setDrillAnswers({});
                }}
              >
                ⚡ 20 Variants &amp; Similar (Shuffled)
              </button>
              <button
                type="button"
                className={`ec-variant-pill-btn ${drillMode === 'bank50' ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setDrillMode('bank50');
                  setDrillIdx(0);
                  setDrillAnswers({});
                }}
              >
                📚 50 Deep Bank (Shuffled)
              </button>
            </div>

            <button
              type="button"
              className="ec-blur-toggle-btn"
              style={{ background: '#4f46e5', color: '#ffffff', border: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
              onClick={handleShuffleDrill}
            >
              <RotateCcw size={14} />
              <span>🔀 Shuffle Questions</span>
            </button>
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

          {/* LAYER 1: Diagnostic Method Sub-Question (Midterm Recognition Layer) */}
          {(() => {
            const diag = METHOD_DIAGNOSTICS[currentDrillQuestion.methodId] || METHOD_DIAGNOSTICS.separable;
            const currentChoice = methodAnswers[currentDrillQuestion.id];
            // Deterministic flip based on question ID
            const isFlipped = (currentDrillQuestion.id.charCodeAt(currentDrillQuestion.id.length - 1) % 2) === 1;
            const choices = isFlipped
              ? [
                  { type: 'distractor' as const, label: diag.distractorChoice },
                  { type: 'correct' as const, label: diag.correctChoice }
                ]
              : [
                  { type: 'correct' as const, label: diag.correctChoice },
                  { type: 'distractor' as const, label: diag.distractorChoice }
                ];

            return (
              <div
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        background: '#e0e7ff',
                        color: '#4338ca',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      ⚡ Diagnostic Step 1 · Method Classifier
                    </span>
                    <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#1e293b' }}>
                      Which method or system is required to solve this ODE?
                    </span>
                  </div>
                  {currentChoice && (
                    <span style={{ fontSize: '12px', fontWeight: 700, color: currentChoice === 'correct' ? '#059669' : '#dc2626' }}>
                      {currentChoice === 'correct' ? '✓ Method Confirmed' : '⚠️ Misclassified — Check Strategy'}
                    </span>
                  )}
                </div>

                {/* 2 Choice Options */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                  {choices.map((c, cIdx) => {
                    const isSelected = currentChoice === c.type;
                    let cBorder = '#cbd5e1';
                    let cBg = '#f8fafc';
                    let cColor = '#1e293b';

                    if (isSelected) {
                      if (c.type === 'correct') {
                        cBorder = '#10b981';
                        cBg = '#ecfdf5';
                        cColor = '#065f46';
                      } else {
                        cBorder = '#ef4444';
                        cBg = '#fef2f2';
                        cColor = '#991b1b';
                      }
                    }

                    return (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => {
                          audio.playClick();
                          setMethodAnswers((prev) => ({ ...prev, [currentDrillQuestion.id]: c.type }));
                        }}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: `1.5px solid ${cBorder}`,
                          background: cBg,
                          color: cColor,
                          textAlign: 'left',
                          fontSize: '13px',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: isSelected ? (c.type === 'correct' ? '#10b981' : '#ef4444') : '#e2e8f0',
                            color: isSelected ? '#ffffff' : '#64748b',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '11px',
                            fontWeight: 800,
                            flexShrink: 0
                          }}
                        >
                          {isSelected ? (c.type === 'correct' ? '✓' : '✕') : cIdx + 1}
                        </span>
                        <span style={{ lineHeight: '1.4' }}>{c.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Feedback & Strategy Tips */}
                {currentChoice === 'correct' && (
                  <div
                    style={{
                      background: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      fontSize: '12.5px',
                      color: '#166534',
                      lineHeight: '1.5'
                    }}
                  >
                    <div style={{ fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={16} color="#16a34a" />
                      <span>{diag.correctExplanation}</span>
                    </div>
                    <div style={{ marginTop: '6px' }}>
                      <span style={{ fontWeight: 700 }}>Recommended Solving Strategy:</span>
                      <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                        {diag.implementationTips.map((tip, tIdx) => (
                          <li key={tIdx} style={{ margin: '2px 0' }}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {currentChoice === 'distractor' && (
                  <div
                    style={{
                      background: '#fff1f2',
                      border: '1px solid #fecdd3',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      fontSize: '12.5px',
                      color: '#9f1239',
                      lineHeight: '1.5'
                    }}
                  >
                    <div style={{ fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <AlertTriangle size={16} color="#e11d48" />
                      <span>{diag.distractorExplanation}</span>
                    </div>
                    <div style={{ marginTop: '4px', color: '#881337' }}>
                      👉 <em>Exam Tip: Review the visual cues and click the other option to examine its step-by-step method!</em>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

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
                  {currentDrillQuestion.explanation?.reference || 'Concordia ENGR 213 Curriculum'}
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
                    <span>1. First-Order Core Forms (CH 2.2–2.5)</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Separable:** $\\frac{dy}{dx} = g(x)h(y) \\implies \\int \\frac{dy}{h(y)} = \\int g(x)dx + C$" />
                    </div>
                    <div>
                      <MathText text="**Linear:** $y' + P(x)y = Q(x) \\implies \\mu = e^{\\int P dx}, \\; y = \\frac{1}{\\mu}[\\int \\mu Q dx + C]$" />
                    </div>
                    <div>
                      <MathText text="**Exact:** $M\\,dx + N\\,dy = 0 \\iff M_y = N_x \\implies \\Psi(x,y) = C$" />
                    </div>
                    <div>
                      <MathText text="**Bernoulli:** $y' + P(x)y = Q(x)y^n \\implies u = y^{1-n}, \\; u' + (1-n)Pu = (1-n)Q$" />
                    </div>
                  </div>
                </div>

                {/* Card 2: Must-Retain Antiderivatives */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Brain size={16} color="#059669" />
                    <span>2. Must-Retain Calculus Vault Integrals</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div><MathText text="$\\int \\tan(x)\\,dx = \\ln|\\sec(x)| = -\\ln|\\cos(x)| + C$" /></div>
                    <div><MathText text="$\\int \\sec(x)\\,dx = \\ln|\\sec(x) + \\tan(x)| + C$" /></div>
                    <div><MathText text="$\\int \\frac{1}{x^2 + a^2}\\,dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$" /></div>
                    <div><MathText text="$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\,dx = \\arcsin\\left(\\frac{x}{a}\\right) + C$" /></div>
                    <div><MathText text="$\\int \\frac{1}{a^2 - u^2}\\,du = \\frac{1}{2a}\\ln\\left|\\frac{a+u}{a-u}\\right| + C = \\frac{1}{a}\\tanh^{-1}\\left(\\frac{u}{a}\\right) + C$" /></div>
                  </div>
                </div>

                {/* Card 3: Non-Exact Integrating Factor Rules */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Zap size={16} color="#d97706" />
                    <span>3. Non-Exact Special Integrating Factors</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Condition 1 ($x$ only):** If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = e^{\\int f(x)dx}$" />
                    </div>
                    <div>
                      <MathText text="**Condition 2 ($y$ only):** If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = e^{\\int g(y)dy}$" />
                    </div>
                    <div style={{ color: '#b45309', background: '#fef3c7', padding: '6px 8px', borderRadius: '6px', fontSize: '11px' }}>
                      <MathText text="⚠️ **Rule:** Subtract partial of *other* variable, divide by matching letter ($M_y - N_x$ divides by $N$)." />
                    </div>
                  </div>
                </div>

                {/* Card 4: Chapter 2 Substitutions & Reductions */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Layers size={16} color="#0284c7" />
                    <span>4. Chapter 2 Substitutions &amp; Reductions</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Homogeneous:** $y = ux \\implies \\frac{dy}{dx} = u + x\\frac{du}{dx}$. Reduces equation to separable in $u$ and $x$." />
                    </div>
                    <div>
                      <MathText text="**Linear Argument:** $y' = f(Ax + By + C) \\implies u = Ax + By + C, \\; \\frac{du}{dx} = A + B f(u)$. Separates directly!" />
                    </div>
                    <div>
                      <MathText text="**Equilibrium Solutions:** Set $dy/dx = 0$. Never divide by an expression before checking if roots are lost singular solutions!" />
                    </div>
                  </div>
                </div>

                {/* Card 5: Physical Modeling & Applications (CH 2.7 & 2.8) */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <CheckCircle2 size={16} color="#8b5cf6" />
                    <span>5. Linear &amp; Nonlinear Models (CH 2.7–2.8)</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Mixing Tanks:** $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}} = c_{\\text{in}} r_{\\text{in}} - \\frac{A(t)}{V(t)} r_{\\text{out}}$, where $V(t) = V_0 + (r_{\\text{in}} - r_{\\text{out}})t$." />
                    </div>
                    <div>
                      <MathText text="**Newton’s Cooling:** $\\frac{dT}{dt} = k(T - T_m) \\implies T(t) = T_m + (T_0 - T_m)e^{kt}$." />
                    </div>
                    <div>
                      <MathText text="**Logistic Dynamics:** $\\frac{dP}{dt} = P(a - bP) = r P\\left(1 - \\frac{P}{K}\\right)$. Carrying capacity $K = a/b$, inflection at $P = K/2$." />
                    </div>
                  </div>
                </div>

                {/* Card 6: Sections 17.1 & 17.2 Complex Numbers & Auxiliary Equations */}
                <div className="ec-cheat-card">
                  <div className="ec-cheat-card-title">
                    <Sparkles size={16} color="#dc2626" />
                    <span>6. Complex Numbers &amp; Auxiliary ODEs (Sec 17.1–17.2)</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                      <MathText text="**Polar Form &amp; Euler:** $z = a + bi = r e^{i\\theta}$, $r = \\sqrt{a^2 + b^2}$, $\\theta = \\text{Arg}(z)$. $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$." />
                    </div>
                    <div>
                      <MathText text="**De Moivre Powers:** $(r e^{i\\theta})^n = r^n e^{in\\theta} = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$." />
                    </div>
                    <div>
                      <MathText text="**Auxiliary Equation:** $a r^2 + b r + c = 0$:" />
                    </div>
                    <div style={{ paddingLeft: '8px' }}>
                      <MathText text="• Real Distinct: $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$" />
                      <MathText text="• Repeated: $y = (C_1 + C_2 x)e^{rx}$ (notice the $x$ factor!)" />
                      <MathText text="• Complex $\\alpha \\pm i\\beta$: $y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$" />
                    </div>
                  </div>
                </div>              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
