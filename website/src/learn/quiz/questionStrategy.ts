import { detectFastCrackType } from '../../data/miae221FastCrack';
import { getQuestionCrack } from '../../data/miae221QuestionCracks';

export interface QuestionStrategy {
  /** Section 1 badge / category label */
  category: string;
  /** 👀 Easy tip to spot THIS question in under 5 seconds */
  howToSpot: string;
  /** 🎯 How to tackle this type of question: 1-2 direct action moves */
  howToTackle: string;
  /** ⚡ Main fundamental knowledge to know (governing formula, theorem, or law) */
  fundamentalKnowledge: string;
  /** 💡 Tip to retain that knowledge (mnemonic, retention hook, unit check, or trap check) */
  retentionTip: string;
}

export interface StrategyInput {
  id: string;
  courseId?: string;
  prompt: string;
  topic?: string;
  formula?: string;
  code?: string;
  options?: string[];
  explain?: {
    concept?: string;
    trap?: string;
    note?: string;
    lines?: string[];
    steps?: any[];
    solution?: string;
    whyWrong?: Record<string | number, string>;
  };
}

/** Clean mathematical formulas or prompt strings for compact display */
function cleanSnippet(str: string, maxLen = 120): string {
  const clean = str.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

/** Extract prompt cues: numbers, variables, or key noun phrases */
function extractPromptCues(prompt: string): string {
  const mathMatches = prompt.match(/\$[^$]+\$/g);
  if (mathMatches && mathMatches.length > 0) {
    const unique = Array.from(new Set(mathMatches)).slice(0, 3).join(', ');
    return `key variables ${unique}`;
  }
  const clean = prompt.replace(/[?!.]/g, '').split(' ');
  const keywords = clean.filter((w) => w.length > 5 && !/^(which|following|statement|correct|calculate|determine|consider|suppose)/i.test(w)).slice(0, 3);
  return keywords.length > 0 ? `terms "${keywords.join(', ')}"` : 'the core question prompt';
}

/**
 * Resolves a compact, straight-to-the-point 4-part Section 1 strategy for ANY quiz question,
 * customized to that question's exact prompt and variables.
 */
export function resolveQuestionStrategy(input: StrategyInput): QuestionStrategy {
  const { id, prompt, topic = '', courseId = '', formula, code, explain = {} } = input;
  const pLower = prompt.toLowerCase();
  const tLower = topic.toLowerCase();
  const isMiae221 = courseId === 'MIAE221' || id.includes('MIAE221') || /^(F24|A25|W26|FX|F17|PPS1)-\d+/.test(id) || /crystal|dislocation|fick|tensile|miller|slip|vacancy|bragg|arrhenius/i.test(topic + ' ' + prompt);
  const isEngr213 = courseId === 'ENGR213' || id.includes('ENGR213') || /ode|differential|wronskian|laplace|bernoulli|cauchy|euler|auxiliary/i.test(topic + ' ' + prompt);
  const isMiae215 = courseId === 'MIAE215' || id.includes('MIAE215') || Boolean(code) || /c\+\+|pointer|destructor|constructor|polymorphism|array|recursion/i.test(topic + ' ' + prompt);
  const isIndu211 = courseId === 'INDU211' || id.includes('INDU211') || /eoq|inventory|little'?s law|cpm|pert|forecasting|smoothing|queue|ergonomics/i.test(topic + ' ' + prompt);

  // ──────────────────────────────────────────────────────────────────────────
  // 1. MIAE 221 (Materials Science)
  // ──────────────────────────────────────────────────────────────────────────
  if (isMiae221) {
    const qCrack = getQuestionCrack(id);
    const fastCrack = detectFastCrackType(prompt, topic, id);

    if (qCrack) {
      const ask = qCrack.ask;
      const trick = qCrack.trick;
      const spotCue = fastCrack ? fastCrack.howToSpot : 'Identify given crystallographic or mechanical parameters';
      const cat = fastCrack ? `${fastCrack.typeName} · ${fastCrack.system}` : 'MIAE 221 · Fast-Crack';
      const turboForm = fastCrack ? fastCrack.turboFormula : (formula || (explain.concept ? cleanSnippet(explain.concept, 90) : 'Governing Material Equation'));
      const tackleAction = fastCrack && fastCrack.steps?.length
        ? `${cleanSnippet(fastCrack.steps[0], 90)} ⇒ Solve for target.`
        : '1. Identify given crystal/mechanical parameters. 2. Substitute into governing relation with strict SI units.';

      return {
        category: cat,
        howToSpot: `${ask} (Spot cue: ${cleanSnippet(spotCue, 100)})`,
        howToTackle: tackleAction,
        fundamentalKnowledge: turboForm,
        retentionTip: `${trick}${fastCrack?.commonTrap ? ` ⚠️ Instant Trap Check: ${fastCrack.commonTrap}` : ''}`
      };
    }

    if (fastCrack) {
      const cues = extractPromptCues(prompt);
      return {
        category: `${fastCrack.typeName} · ${fastCrack.system}`,
        howToSpot: `Look for ${cues}. Prompt tests ${fastCrack.howToSpot.slice(0, 110)}.`,
        howToTackle: fastCrack.steps?.length ? fastCrack.steps.slice(0, 2).join(' ⇒ ') : '1. Identify given variables. 2. Apply the fast formula.',
        fundamentalKnowledge: fastCrack.turboFormula || formula || 'Governing Materials Relation',
        retentionTip: `${fastCrack.tips?.[0] || 'Keep units consistent.'} ⚠️ Trap Check: ${fastCrack.commonTrap || 'Watch out for geometric radius vs diameter and temperature in Kelvin.'}`
      };
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 2. ENGR 213 (Applied Ordinary Differential Equations)
  // ──────────────────────────────────────────────────────────────────────────
  if (isEngr213) {
    // 1st Order Linear ODE
    if (/first[- ]order|linear|integrating factor|dy\/dx\s*\+\s*p/i.test(pLower + ' ' + tLower) || /y'\s*\+/i.test(prompt)) {
      return {
        category: 'ENGR 213 · 1st-Order Linear ODE',
        howToSpot: `Form $y' + P(x)y = f(x)$ with single power $y$ and $y'$ (${extractPromptCues(prompt)}).`,
        howToTackle: '1. Put in standard form ($y\'$ coeff $= 1$). 2. Find integrating factor $\\mu(x) = e^{\\int P(x)dx}$. 3. Integrate $\\int \\mu f dx$ and divide by $\\mu$.',
        fundamentalKnowledge: '$\\frac{d}{dx}[\\mu(x)y] = \\mu(x)f(x)$ where $\\mu(x) = e^{\\int P(x)dx}$.',
        retentionTip: 'Standard Form First! Always divide by the coefficient of $y\'$ before identifying $P(x)$, and add $+ C$ inside the integral before dividing by $\\mu(x)$.'
      };
    }

    // Separable ODE
    if (/separab/i.test(pLower + ' ' + tLower) || /dy\/dx\s*=\s*[gx]\/[hy]/i.test(pLower)) {
      return {
        category: 'ENGR 213 · Separable ODE',
        howToSpot: 'All $y$\'s and $dy$ factor onto one side, all $x$\'s and $dx$ on the opposite side.',
        howToTackle: '1. Cross-multiply to $h(y)dy = g(x)dx$. 2. Integrate both sides directly. 3. Apply initial condition immediately to lock in $C$.',
        fundamentalKnowledge: '$\\int h(y)\\,dy = \\int g(x)\\,dx + C$.',
        retentionTip: 'Add $+ C$ on the very step of integration. Solving for $C$ immediately from $(x_0, y_0)$ prevents tedious algebraic rearrangement later.'
      };
    }

    // Exact ODE
    if (/exact|m\(x|n\(x|\bpartial\b/i.test(pLower + ' ' + tLower) || /dx\s*\+\s*.*dy\s*=\s*0/i.test(prompt)) {
      return {
        category: 'ENGR 213 · Exact Differential Equation',
        howToSpot: 'Equation written as $M(x,y)dx + N(x,y)dy = 0$.',
        howToTackle: '1. Verify $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$. 2. Integrate $M$ wrt $x$ treating $y$ as constant: $F(x,y) = \\int M dx + g(y)$. 3. Equate $\\frac{\\partial F}{\\partial y} = N$ to find $g(y)$.',
        fundamentalKnowledge: 'Exactness condition: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\iff F(x,y) = C$.',
        retentionTip: 'Cross-differentiation mnemonic: $M$ is paired with $dx$, so differentiate it by $y$; $N$ is paired with $dy$, so differentiate it by $x$.'
      };
    }

    // 2nd Order Homogeneous Auxiliary Equation
    if (/auxiliary|characteristic|homogeneous|second[- ]order|y''/i.test(pLower + ' ' + tLower) && !/nonhomogeneous|undetermined/i.test(pLower)) {
      return {
        category: 'ENGR 213 · 2nd-Order Auxiliary Equation',
        howToSpot: 'Linear constant-coefficient ODE $a y\'\' + b y\' + c y = 0$.',
        howToTackle: '1. Form auxiliary equation $a m^2 + b m + c = 0$. 2. Factor or use quadratic formula. 3. Match the root case (distinct, repeated, or complex).',
        fundamentalKnowledge: 'Distinct real: $C_1 e^{m_1 x} + C_2 e^{m_2 x}$; Repeated: $(C_1 + C_2 x)e^{mx}$; Complex $\\alpha \\pm i\\beta$: $e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.',
        retentionTip: 'Repeated roots require the extra $x$-factor ($x e^{mx}$) for linear independence. Complex roots: real part $\\alpha$ goes in exponential, imaginary $\\beta$ in sine/cosine.'
      };
    }

    // Undetermined Coefficients / Superposition
    if (/undetermined|nonhomogeneous|superposition|particular solution|y_p/i.test(pLower + ' ' + tLower)) {
      return {
        category: 'ENGR 213 · Undetermined Coefficients',
        howToSpot: 'Nonhomogeneous $a y\'\' + b y\' + c y = g(x)$ with polynomial, exponential, or sinusoidal forcing.',
        howToTackle: '1. Find $y_c$ from auxiliary equation. 2. Guess test $y_p$. 3. Multiply by $x$ or $x^2$ if any term duplicates $y_c$ (Resonance Rule). 4. Equate coefficients.',
        fundamentalKnowledge: 'General solution: $y(x) = y_c(x) + y_p(x)$. Multiplication rule prevents duplicate homogeneous modes.',
        retentionTip: 'Always solve $y_c$ BEFORE picking $y_p$! If $g(x) = e^{2x}$ and $y_c$ already contains $e^{2x}$, your test $y_p$ must be $A x e^{2x}$.'
      };
    }

    // Laplace Transforms
    if (/laplace|\\mathcal\{l\}|inverse laplace|heaviside|dirac/i.test(pLower + ' ' + tLower)) {
      return {
        category: 'ENGR 213 · Laplace Transform',
        howToSpot: 'Initial-value problem with discontinuous inputs or transform notations $\\mathcal{L}\\{f(t)\\}$.',
        howToTackle: '1. Transform both sides using $\\mathcal{L}\\{y\'\} = s Y(s) - y(0)$ and $\\mathcal{L}\\{y\'\'\} = s^2 Y(s) - s y(0) - y\'(0)$. 2. Solve for $Y(s)$. 3. Partial fractions and inverse transform.',
        fundamentalKnowledge: '$\\mathcal{L}\\{y\'\'\\} = s^2 Y(s) - s y(0) - y\'(0)$; $s$-shifting: $\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)$.',
        retentionTip: 'Laplace transforms automatically incorporate initial conditions algebraically: never add undetermined constants $C_1, C_2$!'
      };
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 3. MIAE 215 (C++ Programming for Engineers)
  // ──────────────────────────────────────────────────────────────────────────
  if (isMiae215) {
    if (code || /pointer|reference|memory|address|dynamic|destructor|class/i.test(pLower + ' ' + tLower)) {
      const isPtr = /\*|&|nullptr|pointer|address/i.test(pLower + ' ' + (code || ''));
      const isClass = /class|struct|constructor|destructor|private|public/i.test(pLower + ' ' + (code || ''));

      if (isPtr) {
        return {
          category: 'MIAE 215 · C++ Pointers & Memory',
          howToSpot: `Code contains pointer/reference operators \`*\` or \`&\` (${extractPromptCues(prompt)}).`,
          howToTackle: '1. Trace pointer addresses vs target values on scratch paper. 2. Distinguish pointer modification (\`ptr = &b\`) from target modification (\`*ptr = b\`).',
          fundamentalKnowledge: '\`&var\` extracts the memory address; \`*ptr\` dereferences and accesses the value at that address.',
          retentionTip: 'Declaration \`int* p\` means "pointer type"; Expression \`*p\` means "dereference value". Pass-by-reference (\`int&\`) alters the caller\'s variable directly.'
        };
      }

      if (isClass) {
        return {
          category: 'MIAE 215 · C++ OOP & Object Lifecycle',
          howToSpot: 'Class definitions testing constructors, destructors (\`~ClassName\`), or access control.',
          howToTackle: '1. Trace object creation order (base class first, then members). 2. Trace destructor order (exact reverse of constructor).',
          fundamentalKnowledge: 'Constructors initialize state; destructors release resources. Default copy constructor performs a shallow memberwise copy.',
          retentionTip: 'Order of construction is ALWAYS base-to-derived; order of destruction is ALWAYS derived-to-base (LIFO stack unwinding).'
        };
      }

      return {
        category: 'MIAE 215 · C++ Logic & Code Tracing',
        howToSpot: `Code snippet execution with ${extractPromptCues(prompt)}.`,
        howToTackle: '1. Track loop variables and array indices step-by-step. 2. Check for integer division truncation (\`5/2 = 2\`) and short-circuit evaluation.',
        fundamentalKnowledge: 'C++ evaluates expressions with strict operator precedence and 0-based array indexing.',
        retentionTip: 'Short-circuit trap: in \`A && B\`, if \`A\` is false, \`B\` is never evaluated; in \`A || B\`, if \`A\` is true, \`B\` is never evaluated.'
      };
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 4. INDU 211 (Production & Manufacturing Systems)
  // ──────────────────────────────────────────────────────────────────────────
  if (isIndu211) {
    if (/eoq|economic order|inventory|holding cost|setup cost/i.test(pLower + ' ' + tLower)) {
      return {
        category: 'INDU 211 · Inventory & EOQ Model',
        howToSpot: `Prompt provides annual demand $D$, ordering/setup cost $S$, and holding cost $H$ (${extractPromptCues(prompt)}).`,
        howToTackle: '1. Align time units (ensure demand $D$ and holding $H$ are both on an annual basis). 2. Compute $Q^* = \\sqrt{\\frac{2DS}{H}}$.',
        fundamentalKnowledge: '$\\text{EOQ} = \\sqrt{\\frac{2DS}{H}}$; Annual Total Cost $TC = \\frac{D}{Q}S + \\frac{Q}{2}H$.',
        retentionTip: 'At optimal EOQ, Annual Ordering Cost equals Annual Holding Cost ($(D/Q)S = (Q/2)H$). If they are unequal, $Q$ is not optimal!'
      };
    }

    if (/little'?s law|wip|throughput|flow time/i.test(pLower + ' ' + tLower)) {
      return {
        category: 'INDU 211 · Little\'s Law & Flow Dynamics',
        howToSpot: 'System relates work-in-process inventory ($L$), arrival/throughput rate ($\\lambda$), and flow time ($W$).',
        howToTackle: '1. Confirm rate $\\lambda$ and flow time $W$ share matching time units (e.g. hours). 2. Calculate $L = \\lambda W$.',
        fundamentalKnowledge: 'Little\'s Law: $L = \\lambda W$ (Average Inventory = Throughput $\\times$ Average Flow Time).',
        retentionTip: 'Units must match! If flow time is in minutes, throughput must be in units per minute, not units per hour.'
      };
    }

    if (/cpm|pert|critical path|slack|early start|late finish/i.test(pLower + ' ' + tLower)) {
      return {
        category: 'INDU 211 · Project Scheduling (CPM / PERT)',
        howToSpot: 'Activity precedence network with durations, Early/Late start and finish times.',
        howToTackle: '1. Forward pass: $EF = ES + t$. 2. Backward pass: $LS = LF - t$. 3. Slack $= LS - ES = LF - EF$. Critical path has Slack $= 0$.',
        fundamentalKnowledge: 'Critical path is the longest duration path through the network; any delay on it delays the whole project.',
        retentionTip: 'Zero Slack = Critical Activity. At a merge node during the forward pass, $ES = \\max(EF_{\\text{predecessors}})$.'
      };
    }

    if (/forecast|exponential smoothing|moving average/i.test(pLower + ' ' + tLower)) {
      return {
        category: 'INDU 211 · Demand Forecasting',
        howToSpot: 'Historical time series demand and smoothing parameter $\\alpha$.',
        howToTackle: '1. Compute $F_{t+1} = F_t + \\alpha (A_t - F_t) = \\alpha A_t + (1-\\alpha)F_t$. 2. Weight recent actual demand by $\\alpha$.',
        fundamentalKnowledge: '$F_{t+1} = \\alpha A_t + (1-\\alpha)F_t$. Higher $\\alpha$ places more weight on the most recent observation.',
        retentionTip: '$\\alpha$ always lies between $0$ and $1$. As $\\alpha \\to 1$, the forecast mirrors the naive model; as $\\alpha \\to 0$, it becomes a steady average.'
      };
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 5. Universal Prompt-Tailored Fallback
  // ──────────────────────────────────────────────────────────────────────────
  const coreConcept = explain.concept || explain.note || (formula ? `Governing formulation: ${formula}` : 'Standard Engineering Formulation');
  const trapTip = explain.trap || 'Check unit dimensions and sign conventions before selecting your final answer.';
  const cues = extractPromptCues(prompt);
  const cat = topic ? `${topic} · Fast Strategy` : (courseId ? `${courseId} · Problem Strategy` : 'Engineering Fast Strategy');

  let tackleStep = '1. Identify the given parameters and target variable. 2. Apply the core engineering formula step-by-step.';
  if (explain.lines && explain.lines.length > 0) {
    tackleStep = `1. ${cleanSnippet(explain.lines[0].replace(/^Step \d+:\s*/i, ''), 90)} 2. Evaluate final value.`;
  }

  return {
    category: cat,
    howToSpot: `Look for ${cues}. Prompt asks for ${cleanSnippet(prompt, 95)}.`,
    howToTackle: tackleStep,
    fundamentalKnowledge: formula || cleanSnippet(coreConcept, 110),
    retentionTip: `${cleanSnippet(trapTip, 130)}`
  };
}
