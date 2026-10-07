// Text-to-speech for quiz questions.
// - Splits text into prose and LaTeX math (same delimiters as MathText) and converts each separately,
//   so "material's" or "stress-strain" in prose are read normally while "$y'' + 4y = 0$" becomes
//   "y double prime plus 4 y equals 0".
// - Speaks with a human-quality neural voice (Kokoro-82M, 100% in-browser via ONNX — no server,
//   no API key). The model downloads once on first use (~90MB, cached afterwards).
// - Speaks long text as a queue of short generated chunks so playback starts fast.

import { splitMath } from './mathRenderer';
import { loadKokoroVoice, KOKORO_VOICE, unlockAudioPlayback } from './humanVoice';

/* ----------------------------------------------------------------------------
 * Math (LaTeX) -> spoken English
 * ------------------------------------------------------------------------- */

const COMMAND_WORDS: Record<string, string> = {
  // Greek
  alpha: 'alpha', beta: 'beta', gamma: 'gamma', Gamma: 'gamma', delta: 'delta', Delta: 'delta',
  epsilon: 'epsilon', varepsilon: 'epsilon', zeta: 'zeta', eta: 'eta', theta: 'theta', Theta: 'theta',
  vartheta: 'theta', iota: 'iota', kappa: 'kappa', lambda: 'lambda', Lambda: 'lambda', mu: 'mu',
  nu: 'nu', xi: 'xi', Xi: 'xi', pi: 'pi', Pi: 'pi', rho: 'rho', sigma: 'sigma', Sigma: 'sigma',
  tau: 'tau', upsilon: 'upsilon', phi: 'phi', varphi: 'phi', Phi: 'phi', chi: 'chi', psi: 'psi',
  Psi: 'psi', omega: 'omega', Omega: 'omega',
  // Operators / relations
  times: 'times', cdot: 'times', div: 'divided by', pm: 'plus or minus', mp: 'minus or plus',
  approx: 'is approximately', simeq: 'is approximately', sim: 'is about', propto: 'is proportional to',
  neq: 'is not equal to', ne: 'is not equal to', equiv: 'is equivalent to',
  leq: 'is less than or equal to', le: 'is less than or equal to', leqslant: 'is less than or equal to',
  geq: 'is greater than or equal to', ge: 'is greater than or equal to', geqslant: 'is greater than or equal to',
  ll: 'is much less than', gg: 'is much greater than', lt: 'is less than', gt: 'is greater than',
  to: 'approaches', rightarrow: 'goes to', longrightarrow: 'goes to', Rightarrow: 'implies',
  implies: 'implies', leftarrow: 'comes from', iff: 'if and only if', Leftrightarrow: 'if and only if',
  in: 'in', notin: 'not in', subset: 'subset of', cup: 'union', cap: 'intersection',
  forall: 'for all', exists: 'there exists', infty: 'infinity', partial: 'partial', nabla: 'del',
  circ: 'degrees', degree: 'degrees', prime: 'prime', ldots: 'and so on', cdots: 'and so on', dots: 'and so on',
  // Functions
  sin: 'sine', cos: 'cosine', tan: 'tangent', sec: 'secant', csc: 'cosecant', cot: 'cotangent',
  arcsin: 'arc sine', arccos: 'arc cosine', arctan: 'arc tangent',
  sinh: 'hyperbolic sine', cosh: 'hyperbolic cosine', tanh: 'hyperbolic tangent',
  ln: 'natural log of', log: 'log of', exp: 'exponential of', det: 'determinant of',
  max: 'maximum', min: 'minimum', lim: 'the limit', int: 'the integral of', iint: 'the double integral of',
  oint: 'the contour integral of', sum: 'the sum of', prod: 'the product of',
  // Formatting commands that should vanish
  displaystyle: '', textstyle: '', left: '', right: '', big: '', Big: '', bigg: '', Bigg: '',
  quad: ' ', qquad: ' ', limits: '', nolimits: ''
};

const ORDINAL: Record<string, string> = { '2': 'second', '3': 'third', '4': 'fourth', n: 'n-th' };

const unwrapTextCommands = (tex: string): string => {
  let prev = '';
  let out = tex;
  // Repeat to handle nesting, e.g. \mathbf{\text{F}}
  while (prev !== out) {
    prev = out;
    out = out.replace(
      /\\(?:text|textrm|textbf|textit|mathrm|mathbf|mathit|mathsf|mathcal|boldsymbol|operatorname|vec|hat|bar|overline|underline)\s*\{([^{}]*)\}/g,
      ' $1 '
    );
  }
  return out;
};

export function mathToSpeech(rawTex: string): string {
  let t = rawTex;

  // Double-escaped commands (\\frac) -> \frac, same normalization MathText uses
  t = t.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
  t = t.replace(/\\[dt]frac/g, '\\frac');
  t = unwrapTextCommands(t);

  // Spacing commands and line breaks
  t = t.replace(/\\[,;:! ]/g, ' ');
  t = t.replace(/\\\\/g, ', ');
  t = t.replace(/&/g, ' ');
  t = t.replace(/\\left|\\right/g, '');

  // Degrees: ^\circ, ^{\circ}
  t = t.replace(/\^\s*\{?\s*\\circ\s*\}?\s*C\b/g, ' degrees Celsius ');
  t = t.replace(/\^\s*\{?\s*\\circ\s*\}?\s*F\b/g, ' degrees Fahrenheit ');
  t = t.replace(/\^\s*\{?\s*\\circ\s*\}?/g, ' degrees ');

  // Derivatives (Leibniz notation) before generic fractions
  t = t.replace(/\\frac\{\s*d\^\{?(\w)\}?\s*(\w*)\s*\}\{\s*d\s*(\w)\^\{?\w\}?\s*\}/g, (_m, n, f, x) =>
    ` the ${ORDINAL[n] ?? n + '-th'} derivative of ${f} with respect to ${x} `.replace(/derivative of  with/, 'derivative with'));
  t = t.replace(/\\frac\{\s*d\s*(\w+)\s*\}\{\s*d\s*(\w)\s*\}/g, ' d $1 by d $2 ');
  t = t.replace(/\\frac\{\s*d\s*\}\{\s*d\s*(\w)\s*\}/g, ' the derivative with respect to $1 of ');
  t = t.replace(/\\frac\{\s*\\partial\^\{?(\w)\}?\s*(\w*)\s*\}\{\s*\\partial\s*(\w)\^\{?\w\}?\s*\}/g, ' the $1 partial derivative of $2 with respect to $3 ');
  t = t.replace(/\\frac\{\s*\\partial\s*(\w*)\s*\}\{\s*\\partial\s*(\w)\s*\}/g, ' partial $1 by partial $2 ');

  // Fractions, innermost first
  for (let i = 0; i < 6 && /\\frac/.test(t); i++) {
    t = t.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (_m, a, b) => {
      const simple = (s: string) => s.trim().length <= 3;
      return simple(a) && simple(b) ? ` ${a} over ${b} ` : ` the quantity ${a}, over ${b}, `;
    });
    t = t.replace(/\\frac\s*(\w)\s*(\w)/g, ' $1 over $2 ');
  }

  // Roots
  t = t.replace(/\\sqrt\s*\[\s*3\s*\]\s*\{([^{}]*)\}/g, ' the cube root of $1 ');
  t = t.replace(/\\sqrt\s*\[([^\]]*)\]\s*\{([^{}]*)\}/g, ' the $1-th root of $2 ');
  t = t.replace(/\\sqrt\s*\{([^{}]*)\}/g, ' the square root of $1 ');
  t = t.replace(/\\sqrt\s*(\w)/g, ' the square root of $1 ');

  // Big operators with limits (before generic sub/superscripts)
  const lim = (s: string) => s.replace(/^\{|\}$/g, '');
  const bound = '(\\{[^{}]*\\}|[^\\s{}^_\\\\])';
  t = t.replace(new RegExp(`\\\\int\\s*_\\s*${bound}\\s*\\^\\s*${bound}`, 'g'), (_m, a, b) => ` the integral from ${lim(a)} to ${lim(b)} of `);
  t = t.replace(new RegExp(`\\\\sum\\s*_\\s*${bound}\\s*\\^\\s*${bound}`, 'g'), (_m, a, b) => ` the sum from ${lim(a)} to ${lim(b)} of `);
  t = t.replace(/\\lim\s*_\s*\{([^{}]*)\}/g, ' the limit as $1 of ');

  // Primes (math context only, so prose apostrophes are untouched)
  t = t.replace(/'''/g, ' triple prime ');
  t = t.replace(/''/g, ' double prime ');
  t = t.replace(/'/g, ' prime ');

  // Superscripts
  t = t.replace(/\^\s*\{?\s*2\s*\}?(?![\d.])/g, ' squared ');
  t = t.replace(/\^\s*\{?\s*3\s*\}?(?![\d.])/g, ' cubed ');
  t = t.replace(/\^\s*\{\s*-\s*1\s*\}/g, ' inverse ');
  t = t.replace(/\^\s*\{\s*\\?prime\s*\}/g, ' prime ');
  t = t.replace(/\^\s*\{([^{}]*)\}/g, ' to the power ($1), ');
  t = t.replace(/\^\s*(\\[a-zA-Z]+|[a-zA-Z]|-?\d+(?:\.\d+)?)/g, ' to the power $1 ');

  // Subscripts
  t = t.replace(/_\s*\{?\s*0\s*\}?(?!\d)/g, ' naught ');
  t = t.replace(/_\s*\{([^{}]*)\}/g, ' sub $1 ');
  t = t.replace(/_\s*(\\[a-zA-Z]+|[a-zA-Z]|\d)/g, ' sub $1 ');

  // Function application: y(0), f(t) -> "y of 0", "f of t" (single-letter names directly followed by "(")
  t = t.replace(/(^|[^a-zA-Z\\])([a-zA-Z])\(/g, '$1$2 of (');
  t = t.replace(/(prime)\s*\(/g, '$1 of (');

  // Unary minus (start, after "(", "," or another operator) reads "negative"; all others read "minus"
  t = t.replace(/(^\s*|[(,=+<>]\s*)[-−]/g, '$1 negative ');

  // Remaining commands via word table; unknown commands keep their name
  t = t.replace(/\\([a-zA-Z]+)/g, (_m, name: string) => ` ${COMMAND_WORDS[name] ?? name} `);

  // Symbols
  t = t
    .replace(/≤/g, ' is less than or equal to ')
    .replace(/≥/g, ' is greater than or equal to ')
    .replace(/≠/g, ' is not equal to ')
    .replace(/≈/g, ' is approximately ')
    .replace(/±/g, ' plus or minus ')
    .replace(/×|·/g, ' times ')
    .replace(/→/g, ' approaches ')
    .replace(/∞/g, ' infinity ')
    .replace(/<=/g, ' is less than or equal to ')
    .replace(/>=/g, ' is greater than or equal to ')
    .replace(/</g, ' is less than ')
    .replace(/>/g, ' is greater than ')
    .replace(/=/g, ' equals ')
    .replace(/\+/g, ' plus ')
    .replace(/[-−]/g, ' minus ')
    .replace(/\//g, ' over ')
    .replace(/\*/g, ' times ')
    .replace(/(\w)\s*!/g, '$1 factorial ')
    .replace(/%/g, ' percent ')
    .replace(/\|/g, ' ');

  // Implicit multiplication like "4y" -> "4 y" so the voice doesn't say "four-why" as one word
  t = t.replace(/(\d)([a-zA-Z])/g, '$1 $2');

  // Strip leftover grouping characters
  t = t.replace(/[{}()[\]]/g, ' ');
  for (const [re, word] of UNIT_WORDS) t = t.replace(re, word);
  return t.replace(/\s+/g, ' ').trim();
}

/* ----------------------------------------------------------------------------
 * Prose -> clean speech
 * ------------------------------------------------------------------------- */

const UNIT_WORDS: [RegExp, string][] = [
  [/(\d)\s*K\b/g, '$1 kelvin'],
  [/°\s*C\b/g, ' degrees Celsius'],
  [/°\s*F\b/g, ' degrees Fahrenheit'],
  [/°/g, ' degrees'],
  [/\bGPa\b/g, 'gigapascals'],
  [/\bMPa\b/g, 'megapascals'],
  [/\bkPa\b/g, 'kilopascals'],
  [/\bkN\b/g, 'kilonewtons'],
  [/\bkJ\b/g, 'kilojoules'],
  [/\bkW\b/g, 'kilowatts'],
  [/\bkg\b/g, 'kilograms'],
  [/\bmm\b/g, 'millimeters'],
  [/\bcm\b/g, 'centimeters'],
  [/\b(?:μm|µm)/g, 'micrometers'],
  [/\bnm\b/g, 'nanometers'],
  [/\beV\b/g, 'electron volts'],
  [/\bwt\s*%/g, 'weight percent'],
  [/\bat\s*%/g, 'atomic percent'],
  [/%/g, ' percent'],
  [/\bm\/s\b/g, 'meters per second'],
  [/\bm\/s²/g, 'meters per second squared'],
  [/²/g, ' squared'],
  [/³/g, ' cubed']
];

function proseToSpeech(raw: string): string {
  let t = raw;
  t = t.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');      // markdown images
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');       // markdown links
  t = t.replace(/[*_`#~]+/g, ' ');                      // markdown emphasis
  // Plain-text math written without $…$ delimiters
  t = t.replace(/(\w)\^2\b/g, '$1 squared').replace(/(\w)\^3\b/g, '$1 cubed').replace(/\^/g, ' to the power ');
  t = t.replace(/\s=\s/g, ' equals ').replace(/\s\+\s/g, ' plus ').replace(/\s[-−]\s/g, ' minus ')
       .replace(/\s<=\s/g, ' less than or equal to ').replace(/\s>=\s/g, ' greater than or equal to ')
       .replace(/\s<\s/g, ' less than ').replace(/\s>\s/g, ' greater than ').replace(/\s\/\s/g, ' divided by ');
  t = t.replace(/\p{Extended_Pictographic}|\uFE0F/gu, ' ');    // emoji
  t = t.replace(/\be\.g\./gi, 'for example').replace(/\bi\.e\./gi, 'that is').replace(/\bvs\.?(?=\s)/gi, 'versus');
  t = t.replace(/\betc\./gi, 'et cetera');
  t = t.replace(/→|⇒/g, ' leads to ').replace(/≤/g, ' less than or equal to ').replace(/≥/g, ' greater than or equal to ')
       .replace(/≈/g, ' approximately ').replace(/≠/g, ' not equal to ').replace(/±/g, ' plus or minus ')
       .replace(/×/g, ' times ').replace(/[–—]/g, ', ');
  // Greek characters typed as unicode
  t = t.replace(/σ/g, ' sigma ').replace(/ε/g, ' epsilon ').replace(/τ/g, ' tau ').replace(/θ/g, ' theta ')
       .replace(/λ/g, ' lambda ').replace(/ω/g, ' omega ').replace(/Ω/g, ' ohms ').replace(/Δ/g, ' delta ')
       .replace(/μ|µ/g, ' micro ').replace(/ρ/g, ' rho ').replace(/π/g, ' pi ');
  for (const [re, word] of UNIT_WORDS) t = t.replace(re, word);
  return t;
}

/** Convert question/option text (with optional $…$ LaTeX) into a natural spoken string. */
export function cleanTextForSpeech(rawText: string): string {
  if (!rawText) return '';
  const spoken = splitMath(rawText)
    .map(seg => (seg.kind === 'math' ? ` ${mathToSpeech(seg.value)} ` : proseToSpeech(seg.value)))
    .join('');
  return spoken
    .replace(/\s+([,.;:?!])/g, '$1')
    .replace(/([,.;:?!]){2,}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export interface SpeakOptions {
  rate?: number;   // maps to Kokoro speed (1 = normal)
  pitch?: number;  // reserved: not used by the neural backend
  volume?: number; // reserved: not used by the neural backend
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
  /** Fired with 0-100 while the neural voice model downloads (first use). */
  onLoading?: (pct: number) => void;
}

function splitIntoChunks(text: string, maxLen = 180): string[] {
  const sentences = text.match(/[^.!?]+[.!?]*\s*/g) ?? [text];
  const chunks: string[] = [];
  let current = '';
  for (const sentence of sentences) {
    if ((current + sentence).length <= maxLen) {
      current += sentence;
      continue;
    }
    if (current.trim()) chunks.push(current.trim());
    if (sentence.length <= maxLen) {
      current = sentence;
    } else {
      // Very long sentence: break on commas, then hard-wrap on spaces
      let buf = '';
      for (const part of sentence.split(/,\s*/).map((p, idx, arr) => (idx < arr.length - 1 ? p + ',' : p))) {
        if ((buf + ' ' + part).length > maxLen && buf) {
          chunks.push(buf.trim());
          buf = '';
        }
        buf += (buf ? ' ' : '') + part;
        while (buf.length > maxLen) {
          const cut = buf.lastIndexOf(' ', maxLen);
          const at = cut > 40 ? cut : maxLen;
          chunks.push(buf.slice(0, at).trim());
          buf = buf.slice(at);
        }
      }
      current = buf;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

/* ----------------------------------------------------------------------------
 * Neural voice backend: Kokoro-82M (human-quality, 100% in-browser)
 * ------------------------------------------------------------------------- */


class SpeechEngine {
  private session = 0; // increments on every speak/stop so stale async work is ignored
  private audio: HTMLAudioElement | null = null;
  private audioUrl: string | null = null;
  private lastText = '';

  public isSupported(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.Audio !== 'undefined' &&
      typeof window.WebAssembly !== 'undefined'
    );
  }

  public getVoiceName(): string {
    return 'Kokoro Neural (af_heart)';
  }

  public isSpeaking(): boolean {
    return this.audio !== null;
  }

  public get lastSpokenText(): string {
    return this.lastText;
  }

  public stop() {
    this.session++;
    this.teardownAudio();
  }

  private teardownAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }
    if (this.audioUrl) {
      URL.revokeObjectURL(this.audioUrl);
      this.audioUrl = null;
    }
  }

  /**
   * Speak text that may contain LaTeX (converted to spoken English first).
   * The neural model downloads on first use (~90MB, cached afterwards);
   * playback starts as soon as the first chunk is ready.
   */
  public speak(rawText: string, options: SpeakOptions = {}) {
    if (!this.isSupported()) {
      options.onError?.(new Error('Neural voice is not supported in this browser'));
      return;
    }
    const spoken = cleanTextForSpeech(rawText);
    if (!spoken) return;

    unlockAudioPlayback();
    this.stop();
    this.lastText = rawText;
    const session = this.session;
    const speed = options.rate ?? 1.0; // Kokoro speed ~= old speechSynthesis rate mapping
    const chunks = splitIntoChunks(spoken);

    const alive = () => session === this.session;

    loadKokoroVoice((pct) => options.onLoading?.(pct))
      .then(async (tts) => {
        for (let i = 0; i < chunks.length; i++) {
          if (!alive()) return;
          const chunkAudio = await tts.generate(chunks[i], { voice: KOKORO_VOICE, speed });
          if (!alive()) return;
          await this.playChunk(chunkAudio.toBlob(), {
            isFirst: i === 0,
            isLast: i === chunks.length - 1,
            onStart: options.onStart,
            onEnd: options.onEnd,
            onError: options.onError,
            alive,
          });
        }
        if (alive()) {
          this.teardownAudio();
          options.onEnd?.();
        }
      })
      .catch((err) => {
        if (!alive()) return;
        this.teardownAudio();
        options.onError?.(err);
        options.onEnd?.();
      });
  }

  private playChunk(
    blob: Blob,
    ctx: {
      isFirst: boolean;
      isLast: boolean;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: unknown) => void;
      alive: () => boolean;
    },
  ): Promise<void> {
    return new Promise((resolve) => {
      if (!ctx.alive()) return resolve();
      const url = URL.createObjectURL(blob);
      // Revoke the previous chunk's URL once the next one is ready
      if (this.audioUrl) URL.revokeObjectURL(this.audioUrl);
      this.audioUrl = url;
      const el = new Audio(url);
      this.audio = el;
      el.onended = () => resolve();
      el.onerror = () => {
        if (ctx.alive()) ctx.onError?.(new Error('Voice playback failed'));
        resolve();
      };
      if (ctx.isFirst) ctx.onStart?.();
      el.play().catch((e) => {
        if (ctx.alive()) ctx.onError?.(e);
        resolve();
      });
    });
  }
}

export const speechEngine = new SpeechEngine();
