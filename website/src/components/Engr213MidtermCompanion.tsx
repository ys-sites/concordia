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
  Printer
} from 'lucide-react';
import { MathText } from '../utils/mathRenderer';
import { audio } from '../utils/audio';
import { CourseDocument } from '../types';
import './Engr213MidtermCompanion.css';

interface Props {
  onViewPdf?: (doc: CourseDocument, page?: number) => void;
  onBack?: () => void;
}

// ----------------------------------------------------
// 1. DATA: 10-Second Method Classifier Archetypes
// ----------------------------------------------------
interface MethodArchetype {
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
    friendTip: 'If solving an IVP with y(0) and y\'(0), evaluate y(0) first to get C₁, then differentiate y(x) using product rule before plugging in y\'(0).',
    trapAlert: 'In complex roots α ± iβ, the exponential power is α, NOT β. The β goes inside cos(βx) and sin(βx).'
  }
];

// ----------------------------------------------------
// 2. DATA: Calculus Survival Vault (Zero Formula Sheet)
// ----------------------------------------------------
interface FormulaItem {
  id: string;
  category: 'deriv' | 'integral' | 'pillar' | 'trig';
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
    category: 'deriv',
    name: 'Derivative of Arctangent',
    latex: '\\frac{d}{dx}[\\arctan(u)] = \\frac{u\'}{1 + u^2}',
    difficulty: 'easy',
    whyItMatters: 'Used when checking potential functions or differentiating implicit solutions.'
  },
  {
    id: 'f7',
    category: 'deriv',
    name: 'Derivative of Natural Log',
    latex: '\\frac{d}{dx}[\\ln|u|] = \\frac{u\'}{u}',
    difficulty: 'easy',
    whyItMatters: 'Core building block of separable ODEs.'
  },
  {
    id: 'f8',
    category: 'pillar',
    name: 'Tabular (DI) Integration by Parts',
    latex: '\\int (\\text{poly}) \\cdot e^{ax} dx \\implies \\begin{array}{c|c} D & I \\\\ \\hline x^2 & e^{3x} \\\\ 2x & \\frac{1}{3}e^{3x} \\\\ 2 & \\frac{1}{9}e^{3x} \\\\ 0 & \\frac{1}{27}e^{3x} \\end{array}',
    difficulty: 'med',
    whyItMatters: 'Integrate polynomials times exponentials or sine/cosine in 15 seconds. Alternate signs (+, -, +, -) along downward diagonals!'
  },
  {
    id: 'f9',
    category: 'pillar',
    name: 'Heaviside Cover-Up Rule (Partial Fractions)',
    latex: '\\frac{1}{(y-a)(y-b)} = \\frac{A}{y-a} + \\frac{B}{y-b} \\implies A = \\frac{1}{a-b}, \\; B = \\frac{1}{b-a}',
    difficulty: 'easy',
    whyItMatters: 'Saves 3-5 minutes on separable logistic equations. Cover up (y-a) and plug in y = a to find A instantly without a system of equations.'
  },
  {
    id: 'f10',
    category: 'trig',
    name: 'Half-Angle Power Reductions',
    latex: '\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}, \\quad \\sin^2(x) = \\frac{1 - \\cos(2x)}{2}',
    difficulty: 'med',
    whyItMatters: 'Mandatory when integrating cos²(x) or sin²(x) terms in separable and exact ODE solutions.'
  },
  {
    id: 'f11',
    category: 'integral',
    name: 'Quadratic Partial Fractions Difference',
    latex: '\\int \\frac{1}{a^2 - u^2}du = \\frac{1}{2a}\\ln\\left|\\frac{a + u}{a - u}\\right| + C',
    difficulty: 'hard',
    whyItMatters: 'Encountered in velocity drag models (m dv/dt = mg - k v²).'
  },
  {
    id: 'f12',
    category: 'pillar',
    name: 'Completing the Square',
    latex: 'x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 + \\left(c - \\frac{b^2}{4}\\right)',
    difficulty: 'med',
    whyItMatters: 'Transforms irreducible quadratic denominators into (x + h)² + k² for immediate arctan integration.'
  }
];

// ----------------------------------------------------
// 3. DATA: Real Concordia Past Midterm Problems
// ----------------------------------------------------
interface PastProblem {
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

const PAST_PROBLEMS: PastProblem[] = [
  {
    id: 'p1',
    exam: 'Fall 2018 Midterm (Unofficial) · Problem 1',
    topic: 'Separable Initial Value Problem',
    problemStatement: 'Solve the initial value problem: $\\frac{dy}{dx} = \\frac{3x^2 y}{1 + x^3}, \\quad y(1) = 2$',
    methodId: 'separable',
    timeTarget: '8 minutes',
    difficulty: 'easy',
    steps: [
      {
        title: 'Step 1: Separate Variables',
        content: 'Divide by $y$ and multiply by $dx$: $$\\frac{1}{y}\\,dy = \\frac{3x^2}{1 + x^3}\\,dx$$'
      },
      {
        title: 'Step 2: Integrate Both Sides',
        content: 'Notice the numerator $3x^2$ is the exact derivative of denominator $(1 + x^3)$. Using the logarithmic shortcut $\\int \\frac{g\'(x)}{g(x)}dx = \\ln|g(x)|$: $$\\int \\frac{1}{y}\\,dy = \\int \\frac{3x^2}{1 + x^3}\\,dx \\implies \\ln|y| = \\ln|1 + x^3| + C_1$$'
      },
      {
        title: 'Step 3: Exponentiation & Constant Form',
        content: 'Exponentiating both sides: $$|y| = e^{C_1}|1 + x^3| \\implies y(x) = C(1 + x^3)$$ where $C = \\pm e^{C_1}$ absorbs the absolute value.'
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
// 4. DATA: Interactive Step-by-Step Trainer Questions
// ----------------------------------------------------
interface TrainerQuestion {
  id: string;
  equationDisplay: string;
  options: { methodId: string; label: string }[];
  correctMethodId: string;
  hint: string;
  stepClue1: string;
  stepClue2: string;
  fullSolution: string;
}

const TRAINER_QUESTIONS: TrainerQuestion[] = [
  {
    id: 't1',
    equationDisplay: 'x \\frac{dy}{dx} + 3y = \\frac{\\sin x}{x^2}',
    options: [
      { methodId: 'separable', label: 'Separable' },
      { methodId: 'linear_if', label: 'Linear 1st Order (Integrating Factor)' },
      { methodId: 'exact', label: 'Exact Differential Form' },
      { methodId: 'bernoulli', label: 'Bernoulli Equation' }
    ],
    correctMethodId: 'linear_if',
    hint: 'Notice y is to the power 1 with no y² or √y, and it appears with y\'. Can you isolate y\'?',
    stepClue1: 'Divide by x to get standard normal form: y\' + (3/x)y = (sin x)/x³.',
    stepClue2: 'Find integrating factor: μ(x) = e^{∫ (3/x)dx} = e^{3 ln x} = x³.',
    fullSolution: 'd/dx [x³ y] = x³ · (sin x / x³) = sin x. Integrate: x³ y = -cos x + C ⟹ y(x) = (-cos x + C) / x³.'
  },
  {
    id: 't2',
    equationDisplay: '\\frac{dy}{dx} = \\frac{x^2 + 3y^2}{2xy}',
    options: [
      { methodId: 'separable', label: 'Separable' },
      { methodId: 'linear_if', label: 'Linear 1st Order' },
      { methodId: 'homogeneous', label: 'Homogeneous (Degree 2)' },
      { methodId: 'linear_arg', label: 'Linear Argument (Ax+By+C)' }
    ],
    correctMethodId: 'homogeneous',
    hint: 'Look at the power of each term: x² (deg 2), y² (deg 2), and xy (1+1 = deg 2). All terms have equal degree!',
    stepClue1: 'Substitute y = ux and dy/dx = u + x(du/dx).',
    stepClue2: 'u + x(du/dx) = (x² + 3u²x²) / (2x · ux) = (1 + 3u²) / (2u).',
    fullSolution: 'x(du/dx) = (1 + 3u²)/(2u) - u = (1 + u²)/(2u). Separate: [2u / (1 + u²)] du = dx/x ⟹ ln(1 + u²) = ln|x| + C ⟹ 1 + u² = Kx ⟹ 1 + (y/x)² = Kx ⟹ x² + y² = K x³.'
  },
  {
    id: 't3',
    equationDisplay: '(e^y + y\\cos x)dx + (x e^y + \\sin x)dy = 0',
    options: [
      { methodId: 'exact', label: 'Exact Differential Equation' },
      { methodId: 'separable', label: 'Separable' },
      { methodId: 'non_exact', label: 'Non-Exact Integrating Factor' },
      { methodId: 'bernoulli', label: 'Bernoulli' }
    ],
    correctMethodId: 'exact',
    hint: 'It is written as M dx + N dy = 0. Check mixed partials: ∂M/∂y and ∂N/∂x.',
    stepClue1: 'M = e^y + y cos x ⟹ ∂M/∂y = e^y + cos x.',
    stepClue2: 'N = x e^y + sin x ⟹ ∂N/∂x = e^y + cos x. Since My = Nx, it is exact!',
    fullSolution: 'Ψ = ∫ (e^y + y cos x) dx = x e^y + y sin x + g(y). Differentiate by y: x e^y + sin x + g\'(y) = N = x e^y + sin x ⟹ g\'(y) = 0 ⟹ g(y) = 0. Final answer: x e^y + y sin x = C.'
  },
  {
    id: 't4',
    equationDisplay: '\\frac{dy}{dx} = (x + y + 2)^2',
    options: [
      { methodId: 'linear_arg', label: 'Linear Argument u = Ax + By + C' },
      { methodId: 'separable', label: 'Separable' },
      { methodId: 'bernoulli', label: 'Bernoulli' },
      { methodId: 'homogeneous', label: 'Homogeneous' }
    ],
    correctMethodId: 'linear_arg',
    hint: 'Notice (x + y + 2) is a linear bundle Ax + By + C. Can you substitute u = x + y + 2?',
    stepClue1: 'Let u = x + y + 2 ⟹ du/dx = 1 + dy/dx ⟹ dy/dx = du/dx - 1.',
    stepClue2: 'du/dx - 1 = u² ⟹ du/dx = u² + 1. Now separate: du / (u² + 1) = dx.',
    fullSolution: '∫ du / (1 + u²) = ∫ dx ⟹ arctan(u) = x + C ⟹ u = tan(x + C) ⟹ x + y + 2 = tan(x + C) ⟹ y(x) = tan(x + C) - x - 2.'
  },
  {
    id: 't5',
    equationDisplay: 'x \\frac{dy}{dx} + y = x^2 y^2',
    options: [
      { methodId: 'linear_if', label: 'Linear 1st Order' },
      { methodId: 'bernoulli', label: 'Bernoulli Equation (n = 2)' },
      { methodId: 'separable', label: 'Separable' },
      { methodId: 'exact', label: 'Exact Differential Form' }
    ],
    correctMethodId: 'bernoulli',
    hint: 'Look at the RHS: it has y² multiplied by a function of x. This is the unmistakable signature of a Bernoulli equation with power n = 2!',
    stepClue1: 'Divide the entire equation by x y²: (1/y²) (dy/dx) + (1/x) y⁻¹ = x. Substitute v = y¹⁻ⁿ = y⁻¹ ⟹ dv/dx = -y⁻² (dy/dx).',
    stepClue2: 'Substitute v: -dv/dx + (1/x) v = x ⟹ dv/dx - (1/x) v = -x. Integrating factor: μ(x) = e^{∫ -(1/x)dx} = 1/x.',
    fullSolution: 'd/dx [v / x] = (1/x)(-x) = -1. Integrate: v/x = -x + C ⟹ v(x) = Cx - x². Back-substitute y = v⁻¹: y(x) = 1 / (Cx - x²).'
  },
  {
    id: 't6',
    equationDisplay: '(3xy + y^2)dx + (x^2 + xy)dy = 0',
    options: [
      { methodId: 'exact', label: 'Exact Differential Equation' },
      { methodId: 'non_exact', label: 'Non-Exact ODE (Integrating Factor in x)' },
      { methodId: 'separable', label: 'Separable' },
      { methodId: 'linear_arg', label: 'Linear Argument u = Ax + By + C' }
    ],
    correctMethodId: 'non_exact',
    hint: 'Test mixed partials: My = 3x + 2y, Nx = 2x + y. They do not match! Can a 1-variable integrating factor rescue exactness?',
    stepClue1: 'Compute [My - Nx] / N = [(3x + 2y) - (2x + y)] / [x(x + y)] = (x + y) / [x(x + y)] = 1/x. This is a pure function of x only!',
    stepClue2: 'Integrating factor is μ(x) = e^{∫ (1/x)dx} = x. Multiply through by x: (3x²y + xy²)dx + (x³ + x²y)dy = 0.',
    fullSolution: 'Check new mixed partials: My = 3x² + 2xy, Nx = 3x² + 2xy (Exact!). Integrate M by x: Ψ = x³y + (1/2)x²y² + g(y). Differentiate by y: x³ + x²y + g\'(y) = N = x³ + x²y ⟹ g\'(y) = 0. Solution: x³y + (1/2)x²y² = C.'
  }
];

// ----------------------------------------------------
// 5. DATA: Tutor's Secret Weapons & Speed-Hacks (From Tutor Notes & Gradesaver)
// ----------------------------------------------------
interface TutorHack {
  id: string;
  badge: string;
  title: string;
  latex?: string;
  sourceRef: string;
  explanation: string;
  exampleProblem: string;
  keyRule: string;
}

const TUTOR_HACKS: TutorHack[] = [
  {
    id: 'th1',
    badge: 'Forensic Modeling Shortcut',
    title: 'Newton’s Law 3-Point Shortcut (Cancel Tm²)',
    latex: '(T_3 - T_m)(T_1 - T_m) = (T_2 - T_m)^2',
    sourceRef: 'Tutor Notes Page 35',
    explanation: 'When 3 temperatures are recorded at equal time steps (e.g. t = 0, 0.5, 1.0 min with T = 70°, 110°, 145°), never solve for decay constant k. Since e^k = (e^{0.5k})², equating the ratios and cross-multiplying cancels Tm² on both sides, yielding a simple linear equation for ambient oven temperature Tm in 30 seconds!',
    exampleProblem: '(145 - Tm)(70 - Tm) = (110 - Tm)² ⟹ 10150 - 215 Tm + Tm² = 12100 - 220 Tm + Tm² ⟹ 5 Tm = 1950 ⟹ Tm = 390°F.',
    keyRule: 'Strictly valid when time intervals are equal: Δt₁ = Δt₂. Cross-multiply and cancel the quadratic terms immediately.'
  },
  {
    id: 'th2',
    badge: 'Linear Argument Shortcut',
    title: 'Hyperbolic Tangent Closed-Form Inversion',
    latex: 'u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}} = 2\\tanh(2x)',
    sourceRef: 'Tutor Notes Page 32',
    explanation: 'In y\' - (4x - y + 1)² = 0, substituting u = 4x - y + 1 yields du/(u² - 4) = -dx. This separates into (u - 2)/(u + 2) = -e^{-4x}. Instead of doing messy fraction divisions, recognize the definition of tanh(w) = (1 - e^{-2w}) / (1 + e^{-2w}). It collapses directly into 2 tanh(2x), giving y(x) = 4x + 1 - 2 tanh(2x) with zero calculation errors.',
    exampleProblem: 'y(x) = 4x + 1 - 2\\tanh(2x). Verified: at x = 0, y(0) = 4(0) + 1 - 2 tanh(0) = 1.',
    keyRule: 'Whenever (u - a)/(u + a) = -e^{-2ax}, the solution is always u(x) = a tanh(ax).'
  },
  {
    id: 'th3',
    badge: 'Mixing Tank Shortcut',
    title: 'Time-Varying Volume Integrating Factor Shortcut',
    latex: 'V(t) = V_0 + (r_{\\text{in}} - r_{\\text{out}})t \\implies \\mu(t) = (V_0 + \\Delta r \\cdot t)^{-r_{\\text{out}}/\\Delta r}',
    sourceRef: 'Tutor Notes Page 39',
    explanation: 'When inflow rate rin ≠ outflow rate rout, volume is not constant: V(t) = 100 - t. The linear term P(t) = rout / (V_0 + Δr · t). Integrating P(t) produces a clean natural log: (rout / Δr) ln(V_0 + Δr · t). The integrating factor is a pure algebraic power without any exponentials remaining!',
    exampleProblem: 'V_0 = 100, rin = 4, rout = 5 ⟹ Δr = -1. P(t) = 5/(100-t) ⟹ μ(t) = (100 - t)⁻⁵.',
    keyRule: 'The tank empties when V(t) = 0. Never evaluate your solution beyond the emptying time!'
  },
  {
    id: 'th4',
    badge: 'Logarithm Absorption',
    title: 'Negative Sign Absorption in Integrating Factors',
    latex: 'P(x) = -\\frac{k}{x} \\implies \\int P dx = -k\\ln x = \\ln(x^{-k}) \\implies \\mu(x) = x^{-k} = \\frac{1}{x^k}',
    sourceRef: 'Tutor Notes Page 7 & 11',
    explanation: 'Students lose 5 to 10 marks on midterms by writing e^{-3 ln x} = -x³ or e^{-3 ln x} = x³. The negative sign must be absorbed into the logarithm as a power first: e^{ln(x⁻³)} = x⁻³ = 1/x³.',
    exampleProblem: 'y\' - (3/x)y = x² ⟹ μ(x) = 1/x³. Then (d/dx)[y / x³] = 1/x ⟹ y/x³ = ln|x| + C ⟹ y = x³(ln|x| + C).',
    keyRule: 'Always absorb leading numbers and negative signs into the log exponent before applying e^{ln(...)}.'
  },
  {
    id: 'th5',
    badge: 'Partial Fractions Hack',
    title: 'Heaviside Cover-Up Rule (15 Seconds)',
    latex: '\\frac{P(x)}{(x - a)(x - b)} = \\frac{P(a)/(a-b)}{x - a} + \\frac{P(b)/(b-a)}{x - b}',
    sourceRef: 'Tutor Notes Page 9 & 19',
    explanation: 'To find the coefficient of 1/(x-a), cover up (x-a) with your thumb and evaluate the rest of the fraction at x = a. No common denominators, no system of equations, 100% foolproof.',
    exampleProblem: '1/[(u-2)(u+2)] = A/(u-2) + B/(u+2). Cover (u-2), set u=2: A = 1/(2+2) = 1/4. Cover (u+2), set u=-2: B = 1/(-2-2) = -1/4.',
    keyRule: 'Applies to any non-repeated linear factors in separable and partial fraction problems.'
  },
  {
    id: 'th6',
    badge: 'Homogeneous Testing',
    title: 'Polynomial Degree Matching Test',
    latex: 'M(tx, ty) = t^k M(x, y) \\quad \\text{and} \\quad N(tx, ty) = t^k N(x, y)',
    sourceRef: 'Tutor Notes Page 23',
    explanation: 'In (x - y)dx + x dy = 0, both coefficients are homogeneous of degree 1. Substituting y = ux and dy = u dx + x du immediately reduces the equation to x dx + x² du = 0 ⟹ (1/x)dx + du = 0, solving in 3 lines: y(x) = x(C - ln|x|).',
    exampleProblem: 'In (x³ + y³)dx + (3xy²)dy = 0, each monomial has degree 3. Dividing by x³ yields (1 + u³)dx + 3u²(u dx + x du) = 0.',
    keyRule: 'Always divide through by x^k to verify that the equation is solely a function of u = y/x.'
  }
];

// ----------------------------------------------------
// 6. DATA: Unofficial Extracted Past Midterm Exam Papers
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
// MAIN COMPONENT
// ----------------------------------------------------
export const Engr213MidtermCompanion: React.FC<Props> = ({ onViewPdf, onBack }) => {
  const [activeTab, setActiveTab] = useState<'classifier' | 'tutor_hacks' | 'vault' | 'past_exams' | 'trainer'>('classifier');
  const [selectedMethodId, setSelectedMethodId] = useState<string>('separable');
  const [vaultFilter, setVaultFilter] = useState<'all' | 'deriv' | 'integral' | 'pillar'>('all');
  const [blurFormulas, setBlurFormulas] = useState<boolean>(false);
  const [unblurredIds, setUnblurredIds] = useState<Set<string>>(new Set());

  // Trainer state
  const [trainerIdx, setTrainerIdx] = useState<number>(0);
  const [trainerAnswers, setTrainerAnswers] = useState<Record<string, string>>({});
  const [showClue1, setShowClue1] = useState<boolean>(false);
  const [showClue2, setShowClue2] = useState<boolean>(false);
  const [showFullSol, setShowFullSol] = useState<boolean>(false);
  const [masteredMap, setMasteredMap] = useState<Record<string, boolean>>({});
  const [trainerStreak, setTrainerStreak] = useState<number>(0);

  // Additional companion tools state
  const [vaultSearchQuery, setVaultSearchQuery] = useState<string>('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [showEmergencyCheatSheet, setShowEmergencyCheatSheet] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(audio.enabled);

  // 10-Second Method Diagnostic Assistant
  const [diagStep, setDiagStep] = useState<number>(0);
  const [diagResult, setDiagResult] = useState<string | null>(null);

  // Load mastered state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('engr213_companion_mastery_v2');
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

  const currentTrainer = TRAINER_QUESTIONS[trainerIdx];

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

  const handleTrainerSelect = (optMethodId: string) => {
    const isCorrect = optMethodId === currentTrainer.correctMethodId;
    if (isCorrect) {
      audio.playCorrect();
      setTrainerStreak((s) => s + 1);
    } else {
      audio.playIncorrect();
      setTrainerStreak(0);
    }
    setTrainerAnswers((prev) => ({ ...prev, [currentTrainer.id]: optMethodId }));
  };

  const handleNextTrainer = () => {
    audio.playClick();
    if (trainerIdx < TRAINER_QUESTIONS.length - 1) {
      setTrainerIdx((i) => i + 1);
      setShowClue1(false);
      setShowClue2(false);
      setShowFullSol(false);
    }
  };

  const handlePrevTrainer = () => {
    audio.playClick();
    if (trainerIdx > 0) {
      setTrainerIdx((i) => i - 1);
      setShowClue1(false);
      setShowClue2(false);
      setShowFullSol(false);
    }
  };

  const toggleMastered = (id: string) => {
    setMasteredMap((prev) => {
      const willBeMastered = !prev[id];
      if (willBeMastered) {
        audio.playComplete();
      } else {
        audio.playClick();
      }
      const next = { ...prev, [id]: willBeMastered };
      try {
        localStorage.setItem('engr213_companion_mastery_v2', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
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
              Applied Ordinary Differential Equations · Concordia University · Fastest Solution Recipes, Method Diagnosis, Calculus Vault & Unofficial Exam Walkthroughs
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
            <strong>Hey there!</strong> In ENGR 213, there is <em>no formula sheet</em> on the midterm. The secret to scoring an A+ is not doing long algebra; it is <strong>recognizing the ODE archetype in under 10 seconds</strong> and executing the deterministic recipe without missing minus signs or constants. Let&apos;s master every method step-by-step!
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="ec-card-tag">{currentMethod.diffLabel}</span>
                <h2 className="ec-detail-title" style={{ marginTop: '6px' }}>{currentMethod.name}</h2>
              </div>
              <div style={{ background: '#f8fafc', padding: '8px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
                <MathText text={`$${currentMethod.formulaDisplay}$`} />
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
      {/* TAB: Tutor Hacks & Speed-Weapons Panel        */}
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
              <div key={hack.id} className="ec-hack-card">
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
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* TAB 2: Calculus Survival Vault (Must-Retain)    */}
      {/* --------------------------------------------- */}
      {activeTab === 'vault' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
      {/* TAB 3: Official Past Midterm Solver Walkthroughs */}
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
      {/* TAB 4: Interactive Practice Trainer (Solvely Style) */}
      {/* --------------------------------------------- */}
      {activeTab === 'trainer' && (
        <div className="ec-trainer-card">
          <div className="ec-trainer-nav">
            <div>
              <span className="ec-card-tag">Practice Question {trainerIdx + 1} of {TRAINER_QUESTIONS.length}</span>
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: '6px 0 0' }}>
                10-Second Method Identification & Step-by-Step Solver
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="ec-blur-toggle-btn"
                disabled={trainerIdx === 0}
                onClick={handlePrevTrainer}
              >
                Previous
              </button>
              <button
                type="button"
                className="ec-blur-toggle-btn"
                disabled={trainerIdx === TRAINER_QUESTIONS.length - 1}
                onClick={handleNextTrainer}
              >
                Next &rarr;
              </button>
            </div>
          </div>

          {/* Streak & Mastery Stats Banner */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '10px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Target size={15} color="#4f46e5" />
                <span>Mastered: <strong>{Object.values(masteredMap).filter(Boolean).length} / {TRAINER_QUESTIONS.length}</strong></span>
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ea580c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Flame size={16} />
                <span>Streak: <strong>{trainerStreak}</strong></span>
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              {trainerStreak >= 3 ? '🔥 You are on fire! Ready for exam day!' : 'Select the matching ODE type in under 10 seconds'}
            </div>
          </div>

          {/* Progress bar */}
          <div className="ec-progress-bar-container">
            <div
              className="ec-progress-bar-fill"
              style={{ width: `${((trainerIdx + 1) / TRAINER_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Equation Card */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Identify and solve this differential equation:
            </span>
            <div style={{ fontSize: '22px', fontWeight: 700, margin: '14px 0', color: '#0f172a' }}>
              <MathText text={`$$${currentTrainer.equationDisplay}$$`} />
            </div>
          </div>

          {/* Method Selection Options */}
          <div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, marginBottom: '6px' }}>
              Which method should you use to solve this equation?
            </div>
            <div className="ec-trainer-options-grid">
              {currentTrainer.options.map((opt) => {
                const userChoice = trainerAnswers[currentTrainer.id];
                const isSelected = userChoice === opt.methodId;
                const isCorrect = opt.methodId === currentTrainer.correctMethodId;
                let btnClass = 'ec-trainer-opt-btn';
                if (userChoice) {
                  if (isSelected && isCorrect) btnClass += ' correct';
                  else if (isSelected && !isCorrect) btnClass += ' wrong';
                  else if (isCorrect) btnClass += ' correct';
                }

                return (
                  <button
                    key={opt.methodId}
                    type="button"
                    className={btnClass}
                    onClick={() => handleTrainerSelect(opt.methodId)}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progressive Reveal Clues (Solvely AI Style) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            {/* Clue 1 Button */}
            <div>
              <button
                type="button"
                className="ec-blur-toggle-btn"
                style={{ width: '100%', justifyContent: 'space-between' }}
                onClick={() => {
                  audio.playClick();
                  setShowClue1((c) => !c);
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={16} /> <strong>Step 1: Normalization & Setup Clue</strong>
                </span>
                {showClue1 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showClue1 && (
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0 0 8px 8px', padding: '14px 18px', fontSize: '14px', lineHeight: '1.5' }}>
                  <p style={{ margin: '0 0 6px', color: '#2563eb', fontWeight: 600 }}>💡 Co-Pilot Hint: {currentTrainer.hint}</p>
                  <div><MathText text={currentTrainer.stepClue1} /></div>
                </div>
              )}
            </div>

            {/* Clue 2 Button */}
            <div>
              <button
                type="button"
                className="ec-blur-toggle-btn"
                style={{ width: '100%', justifyContent: 'space-between' }}
                onClick={() => {
                  audio.playClick();
                  setShowClue2((c) => !c);
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={16} /> <strong>Step 2: Integration & Transformation Clue</strong>
                </span>
                {showClue2 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showClue2 && (
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0 0 8px 8px', padding: '14px 18px', fontSize: '14px', lineHeight: '1.5' }}>
                  <MathText text={currentTrainer.stepClue2} />
                </div>
              )}
            </div>

            {/* Full Solution Button */}
            <div>
              <button
                type="button"
                className="ec-blur-toggle-btn"
                style={{ width: '100%', justifyContent: 'space-between', background: '#ecfdf5', borderColor: '#a7f3d0', color: '#065f46' }}
                onClick={() => {
                  audio.playClick();
                  setShowFullSol((s) => !s);
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} /> <strong>Reveal Full Step-by-Step Solution</strong>
                </span>
                {showFullSol ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showFullSol && (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0 0 8px 8px', padding: '16px 18px', fontSize: '14px', lineHeight: '1.6', color: '#14532d' }}>
                  <MathText text={currentTrainer.fullSolution} />
                </div>
              )}
            </div>
          </div>

          {/* Mark Mastery Toggle */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button
              type="button"
              className="ec-blur-toggle-btn"
              style={{
                background: masteredMap[currentTrainer.id] ? '#15803d' : '#f1f5f9',
                color: masteredMap[currentTrainer.id] ? '#ffffff' : '#334155',
                borderColor: masteredMap[currentTrainer.id] ? '#15803d' : '#cbd5e1'
              }}
              onClick={() => toggleMastered(currentTrainer.id)}
            >
              {masteredMap[currentTrainer.id] ? <Check size={16} /> : <Target size={16} />}
              <span>{masteredMap[currentTrainer.id] ? 'Mastered! ✓' : 'Mark as Mastered'}</span>
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
