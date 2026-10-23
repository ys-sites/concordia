// A small C++ interpreter for the course's code questions. It runs a snippet (or a program with main()) the way
// a C++ compiler would for the subset MIAE 215 uses, and records one step per executed statement or condition:
// the line, every variable and array, what changed, what was printed and a plain-language explanation. The
// code stepper replays those steps. Covered: int/long/short/unsigned/double/float/char/bool/string, const,
// 1-D and 2-D arrays, every arithmetic, comparison, logical (short-circuit), compound and ++/-- operator,
// casts (C-style, functional, static_cast), if/else, while, do-while, for, break, continue, functions with
// value and reference parameters, return, cout (endl, setw, setprecision, fixed) and cin. It follows C++ rules:
// integer division truncates, int division by zero crashes, double division by zero gives inf, assignment
// converts to the variable's type, float keeps float precision, uninitialised locals hold garbage, and cout
// prints doubles with 6 significant digits.

// ── values ───────────────────────────────────────────────────────────────────────
type Ty = 'int' | 'double' | 'float' | 'char' | 'bool' | 'string';
export interface Val {
  t: Ty | 'garbage';
  v: number | string;
}
const INT = (v: number): Val => ({ t: 'int', v: v | 0 });
const DBL = (v: number): Val => ({ t: 'double', v });
const BOOL = (b: boolean): Val => ({ t: 'bool', v: b ? 1 : 0 });
const GARBAGE: Val = { t: 'garbage', v: 0 };
const num = (x: Val) => (typeof x.v === 'number' ? x.v : Number(x.v));
const isGarbage = (x: Val) => x.t === 'garbage';

function convert(x: Val, to: Ty): Val {
  if (isGarbage(x)) return GARBAGE;
  if (to === 'string') return { t: 'string', v: String(x.v) };
  if (x.t === 'string') throw new CppError(`a string cannot be stored in a ${to}`);
  const n = num(x);
  switch (to) {
    case 'int':
      return INT(Number.isFinite(n) ? Math.trunc(n) : 0);
    case 'char':
      return { t: 'char', v: ((((Math.trunc(n) + 128) % 256) + 256) % 256) - 128 };
    case 'bool':
      return BOOL(n !== 0);
    case 'float':
      return { t: 'float', v: Math.fround(n) };
    default:
      return DBL(n);
  }
}

// cout's default formatting of a floating-point value: 6 significant digits, %g style
export function formatDouble(x: number, prec = 6, fixed = false): string {
  if (Number.isNaN(x)) return 'nan';
  if (!Number.isFinite(x)) return x > 0 ? 'inf' : '-inf';
  if (fixed) return x.toFixed(prec);
  if (x === 0) return Object.is(x, -0) ? '-0' : '0';
  const p = Math.max(1, prec);
  const [mant, expStr] = x.toExponential(p - 1).split('e');
  const e = Number(expStr);
  const strip = (s: string) => (s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s);
  if (e < -4 || e >= p) return `${strip(mant)}e${e < 0 ? '-' : '+'}${String(Math.abs(e)).padStart(2, '0')}`;
  return strip(x.toFixed(Math.max(0, p - 1 - e)));
}

export class CppError extends Error {
  constructor(
    message: string,
    public line?: number
  ) {
    super(message);
  }
}

// ── tokens ───────────────────────────────────────────────────────────────────────
interface Tok {
  k: 'num' | 'id' | 'str' | 'chr' | 'op' | 'eof';
  v: string;
  line: number;
  pos: number;
  end: number;
}
const OPS = ['<<=', '>>=', '...', '<<', '>>', '<=', '>=', '==', '!=', '&&', '||', '++', '--', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '::', '->'];
const ESC: Record<string, string> = { n: '\n', t: '\t', r: '\r', '0': '\0', '\\': '\\', "'": "'", '"': '"', a: '\x07' };

function lex(src: string): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  let line = 1;
  while (i < src.length) {
    const c = src[i];
    if (c === '\n') {
      line++;
      i++;
      continue;
    }
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) {
        if (src[i] === '\n') line++;
        i++;
      }
      i += 2;
      continue;
    }
    if (c === '#') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    const start = i;
    if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(src[i + 1] ?? ''))) {
      const m = /^(0[xX][0-9a-fA-F]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)[fFlLuU]*/.exec(src.slice(i))!;
      i += m[0].length;
      out.push({ k: 'num', v: m[0], line, pos: start, end: i });
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      while (/[A-Za-z0-9_]/.test(src[i] ?? '')) i++;
      out.push({ k: 'id', v: src.slice(start, i), line, pos: start, end: i });
      continue;
    }
    if (c === '"' || c === "'") {
      i++;
      let s = '';
      while (i < src.length && src[i] !== c) {
        if (src[i] === '\\') {
          s += ESC[src[i + 1]] ?? src[i + 1];
          i += 2;
        } else s += src[i++];
      }
      i++;
      out.push({ k: c === '"' ? 'str' : 'chr', v: s, line, pos: start, end: i });
      continue;
    }
    const op = OPS.find((o) => src.startsWith(o, i)) ?? c;
    i += op.length;
    out.push({ k: 'op', v: op, line, pos: start, end: i });
  }
  out.push({ k: 'eof', v: '', line, pos: src.length, end: src.length });
  return out;
}

// ── syntax tree ──────────────────────────────────────────────────────────────────
type Expr =
  | { k: 'num'; v: number; ty: Ty; src: string }
  | { k: 'str'; v: string; src: string }
  | { k: 'chr'; v: number; src: string }
  | { k: 'id'; name: string; src: string }
  | { k: 'index'; arr: Expr; idx: Expr; src: string }
  | { k: 'call'; name: string; args: Expr[]; src: string }
  | { k: 'unary'; op: string; e: Expr; src: string }
  | { k: 'inc'; op: '++' | '--'; post: boolean; e: Expr; src: string }
  | { k: 'cast'; ty: Ty; e: Expr; src: string }
  | { k: 'bin'; op: string; l: Expr; r: Expr; src: string }
  | { k: 'assign'; op: string; target: Expr; value: Expr; src: string }
  | { k: 'cond'; c: Expr; a: Expr; b: Expr; src: string }
  | { k: 'comma'; list: Expr[]; src: string };

interface Declarator {
  name: string;
  dims: (Expr | null)[];
  init?: Expr;
  list?: (Expr | (Expr | null)[])[]; // brace initialiser, nested for 2-D
  ref?: boolean;
}
type Stmt =
  | { k: 'decl'; line: number; ty: Ty; isConst: boolean; decls: Declarator[]; src: string }
  | { k: 'expr'; line: number; e: Expr; src: string }
  | { k: 'block'; line: number; body: Stmt[] }
  | { k: 'if'; line: number; cond: Expr; then: Stmt; else?: Stmt }
  | { k: 'while'; line: number; cond: Expr; body: Stmt }
  | { k: 'do'; line: number; body: Stmt; cond: Expr; condLine: number }
  | { k: 'for'; line: number; init?: Stmt; cond?: Expr; step?: Expr; body: Stmt }
  | { k: 'break' | 'continue'; line: number }
  | { k: 'return'; line: number; e?: Expr }
  | { k: 'cout'; line: number; items: (Expr | { manip: string; arg?: Expr })[]; src: string }
  | { k: 'cin'; line: number; targets: Expr[]; src: string }
  | { k: 'stream'; line: number; name: string; file?: Expr; src: string }
  | { k: 'fout'; line: number; name: string; items: (Expr | { manip: string; arg?: Expr })[]; src: string }
  | { k: 'method'; line: number; obj: string; method: string; args: Expr[]; src: string }
  | { k: 'empty'; line: number };

interface Func {
  name: string;
  ret: Ty | 'void';
  params: { name: string; ty: Ty; ref: boolean; array: boolean }[];
  body: Stmt;
}

const TYPES = new Set(['int', 'long', 'short', 'unsigned', 'signed', 'double', 'float', 'char', 'bool', 'string', 'void', 'auto', 'size_t']);
const STREAMS = new Set(['ofstream', 'ifstream', 'fstream']);
const SIZEOF: Record<string, number> = { int: 4, double: 8, float: 4, char: 1, bool: 1, string: 32 };
const toTy = (words: string[]): Ty | 'void' => {
  if (words.includes('void')) return 'void';
  if (words.includes('double')) return 'double';
  if (words.includes('float')) return 'float';
  if (words.includes('char')) return 'char';
  if (words.includes('bool')) return 'bool';
  if (words.includes('string')) return 'string';
  return 'int';
};

class Parser {
  i = 0;
  streams = new Set<string>();
  constructor(
    private t: Tok[],
    private src: string
  ) {}
  peek(o = 0) {
    return this.t[this.i + o];
  }
  next() {
    return this.t[this.i++];
  }
  is(v: string, o = 0) {
    const tok = this.peek(o);
    return (tok.k === 'op' || tok.k === 'id') && tok.v === v;
  }
  eat(v: string) {
    if (!this.is(v)) throw new CppError(`expected "${v}" but found "${this.peek().v || 'the end'}"`, this.peek().line);
    return this.next();
  }
  opt(v: string) {
    if (this.is(v)) {
      this.next();
      return true;
    }
    return false;
  }
  text(from: number, to: number) {
    return this.src.slice(this.t[from].pos, this.t[to - 1]?.end ?? this.t[from].end).trim();
  }
  isTypeStart(o = 0) {
    let j = o;
    while (this.is('const', j) || this.is('static', j) || this.is('std', j) || this.is('::', j)) j++;
    const tok = this.peek(j);
    return tok.k === 'id' && TYPES.has(tok.v);
  }
  typeWords(): { ty: Ty | 'void'; isConst: boolean } {
    const words: string[] = [];
    let isConst = false;
    for (;;) {
      if (this.opt('const')) isConst = true;
      else if (this.opt('static')) continue;
      else if (this.is('std') && this.is('::', 1)) this.i += 2;
      else if (this.peek().k === 'id' && TYPES.has(this.peek().v)) words.push(this.next().v);
      else break;
    }
    return { ty: toTy(words), isConst };
  }

  program(): { funcs: Map<string, Func>; main: Stmt[] } {
    const funcs = new Map<string, Func>();
    const top: Stmt[] = [];
    while (this.peek().k !== 'eof') {
      if (this.is('using')) {
        while (!this.is(';')) this.next();
        this.next();
        continue;
      }
      // a function definition: type name ( ... ) {
      if (this.isTypeStart()) {
        const save = this.i;
        const { ty } = this.typeWords();
        if (this.peek().k === 'id' && this.is('(', 1)) {
          const name = this.next().v;
          this.eat('(');
          const params: Func['params'] = [];
          while (!this.is(')')) {
            if (this.is('void') && this.is(')', 1)) {
              this.next();
              break;
            }
            const p = this.typeWords();
            const ref = this.opt('&');
            const pname = this.peek().k === 'id' ? this.next().v : `_${params.length}`;
            let array = false;
            while (this.opt('[')) {
              while (!this.is(']')) this.next();
              this.eat(']');
              array = true;
            }
            params.push({ name: pname, ty: p.ty === 'void' ? 'int' : p.ty, ref, array });
            if (!this.opt(',')) break;
          }
          this.eat(')');
          if (this.opt(';')) continue; // a prototype
          funcs.set(name, { name, ret: ty, params, body: this.block() });
          continue;
        }
        this.i = save;
      }
      top.push(this.statement());
    }
    return { funcs, main: top };
  }

  block(): Stmt {
    const line = this.eat('{').line;
    const body: Stmt[] = [];
    while (!this.is('}')) {
      if (this.peek().k === 'eof') throw new CppError('a "{" is never closed', line);
      body.push(this.statement());
    }
    this.eat('}');
    return { k: 'block', line, body };
  }

  statement(): Stmt {
    const tok = this.peek();
    const line = tok.line;
    if (this.is('{')) return this.block();
    if (this.opt(';')) return { k: 'empty', line };
    if (this.opt('if')) {
      this.eat('(');
      const cond = this.expr();
      this.eat(')');
      const then = this.statement();
      const els = this.opt('else') ? this.statement() : undefined;
      return { k: 'if', line, cond, then, else: els };
    }
    if (this.opt('while')) {
      this.eat('(');
      const cond = this.expr();
      this.eat(')');
      return { k: 'while', line, cond, body: this.statement() };
    }
    if (this.opt('do')) {
      const body = this.statement();
      const condLine = this.eat('while').line;
      this.eat('(');
      const cond = this.expr();
      this.eat(')');
      this.opt(';');
      return { k: 'do', line, body, cond, condLine };
    }
    if (this.opt('for')) {
      this.eat('(');
      let init: Stmt | undefined;
      if (!this.is(';')) init = this.isTypeStart() ? this.declaration() : this.exprStatement(false);
      this.eat(';');
      const cond = this.is(';') ? undefined : this.expr();
      this.eat(';');
      const step = this.is(')') ? undefined : this.expr(true);
      this.eat(')');
      return { k: 'for', line, init, cond, step, body: this.statement() };
    }
    if (this.opt('break')) {
      this.opt(';');
      return { k: 'break', line };
    }
    if (this.opt('continue')) {
      this.opt(';');
      return { k: 'continue', line };
    }
    if (this.opt('return')) {
      const e = this.is(';') ? undefined : this.expr();
      this.opt(';');
      return { k: 'return', line, e };
    }
    if (this.is('switch')) throw new CppError('switch statements are not simulated here', line);
    // files: ofstream out("A.txt"); · out << … ; · out.close();
    if (this.peek().k === 'id' && STREAMS.has(this.peek().v)) {
      const start = this.i;
      this.next();
      const name = this.next().v;
      this.streams.add(name);
      let file: Expr | undefined;
      if (this.opt('(')) {
        file = this.expr();
        this.eat(')');
      }
      const end = this.i;
      this.eat(';');
      return { k: 'stream', line, name, file, src: this.text(start, end) };
    }
    if (this.peek().k === 'id' && this.is('.', 1) && this.peek(2).k === 'id' && this.is('(', 3)) {
      const start = this.i;
      const obj = this.next().v;
      this.next();
      const method = this.next().v;
      this.eat('(');
      const args: Expr[] = [];
      while (!this.is(')')) {
        args.push(this.assignment());
        if (!this.opt(',')) break;
      }
      this.eat(')');
      const end = this.i;
      this.eat(';');
      return { k: 'method', line, obj, method, args, src: this.text(start, end) };
    }
    if (this.peek().k === 'id' && this.streams.has(this.peek().v) && this.is('<<', 1)) {
      const start = this.i;
      const name = this.next().v;
      const items = this.outItems();
      const end = this.i;
      this.eat(';');
      return { k: 'fout', line, name, items, src: this.text(start, end) };
    }
    if (this.isTypeStart()) {
      const d = this.declaration();
      this.eat(';');
      return d;
    }
    // cout << … / cin >> …
    if ((this.is('cout') || (this.is('std') && this.is('::', 1) && this.peek(2).v === 'cout')) && !this.is('.', this.is('std') ? 3 : 1)) {
      const start = this.i;
      if (this.is('std')) this.i += 2;
      this.next();
      const items = this.outItems();
      const end = this.i;
      this.eat(';');
      return { k: 'cout', line, items, src: this.text(start, end) };
    }
    if (this.is('cin') || (this.is('std') && this.is('::', 1) && this.peek(2).v === 'cin')) {
      const start = this.i;
      if (this.is('std')) this.i += 2;
      this.next();
      const targets: Expr[] = [];
      while (this.opt('>>')) targets.push(this.binary(8));
      const end = this.i;
      this.eat(';');
      return { k: 'cin', line, targets, src: this.text(start, end) };
    }
    return this.exprStatement(true);
  }

  outItems(): (Expr | { manip: string; arg?: Expr })[] {
    const items: (Expr | { manip: string; arg?: Expr })[] = [];
    while (this.opt('<<')) {
      if (this.is('std') && this.is('::', 1)) this.i += 2;
      const m = this.peek();
      if (m.k === 'id' && ['endl', 'fixed', 'scientific', 'left', 'right', 'boolalpha', 'noboolalpha', 'showpoint'].includes(m.v)) {
        this.next();
        items.push({ manip: m.v });
      } else if (m.k === 'id' && ['setw', 'setprecision', 'setfill'].includes(m.v) && this.is('(', 1)) {
        this.next();
        this.eat('(');
        const arg = this.expr();
        this.eat(')');
        items.push({ manip: m.v, arg });
      } else items.push(this.binary(8)); // + and above: << belongs to the stream
    }
    return items;
  }

  exprStatement(semi: boolean): Stmt {
    const start = this.i;
    const line = this.peek().line;
    const e = this.expr(true);
    const end = this.i;
    if (semi) this.eat(';');
    return { k: 'expr', line, e, src: this.text(start, end) };
  }

  declaration(): Stmt {
    const start = this.i;
    const line = this.peek().line;
    const { ty, isConst } = this.typeWords();
    if (ty === 'void') throw new CppError('a variable cannot be void', line);
    const decls: Declarator[] = [];
    do {
      const ref = this.opt('&');
      const name = this.next();
      if (name.k !== 'id') throw new CppError(`expected a variable name, found "${name.v}"`, name.line);
      const d: Declarator = { name: name.v, dims: [], ref };
      while (this.opt('[')) {
        d.dims.push(this.is(']') ? null : this.expr());
        this.eat(']');
      }
      if (this.opt('=')) {
        if (this.is('{')) d.list = this.initList();
        else d.init = this.assignment();
      } else if (this.is('{')) d.list = this.initList();
      else if (this.is('(') && !d.dims.length) {
        this.next();
        d.init = this.expr();
        this.eat(')');
      }
      decls.push(d);
    } while (this.opt(','));
    return { k: 'decl', line, ty, isConst, decls, src: this.text(start, this.i) };
  }

  initList(): (Expr | (Expr | null)[])[] {
    this.eat('{');
    const items: (Expr | (Expr | null)[])[] = [];
    while (!this.is('}')) {
      if (this.is('{')) items.push(this.initList() as Expr[]);
      else items.push(this.assignment());
      if (!this.opt(',')) break;
    }
    this.eat('}');
    return items;
  }

  // ── expressions (lowest to highest precedence) ──
  expr(allowComma = false): Expr {
    const start = this.i;
    const first = this.assignment();
    if (!allowComma || !this.is(',')) return first;
    const list = [first];
    while (this.opt(',')) list.push(this.assignment());
    return { k: 'comma', list, src: this.text(start, this.i) };
  }
  assignment(): Expr {
    const start = this.i;
    const target = this.conditional();
    const op = this.peek();
    if (op.k === 'op' && ['=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>='].includes(op.v)) {
      this.next();
      const value = this.assignment();
      return { k: 'assign', op: op.v, target, value, src: this.text(start, this.i) };
    }
    return target;
  }
  conditional(): Expr {
    const start = this.i;
    const c = this.binary(0);
    if (!this.opt('?')) return c;
    const a = this.assignment();
    this.eat(':');
    const b = this.assignment();
    return { k: 'cond', c, a, b, src: this.text(start, this.i) };
  }
  static LEVELS = [['||'], ['&&'], ['|'], ['^'], ['&'], ['==', '!='], ['<', '<=', '>', '>='], ['<<', '>>'], ['+', '-'], ['*', '/', '%']];
  binary(level: number): Expr {
    if (level >= Parser.LEVELS.length) return this.unary();
    const start = this.i;
    let l = this.binary(level + 1);
    while (this.peek().k === 'op' && Parser.LEVELS[level].includes(this.peek().v)) {
      const op = this.next().v;
      const r = this.binary(level + 1);
      l = { k: 'bin', op, l, r, src: this.text(start, this.i) };
    }
    return l;
  }
  unary(): Expr {
    const start = this.i;
    const tok = this.peek();
    if (tok.k === 'op' && (tok.v === '++' || tok.v === '--')) {
      this.next();
      const e = this.unary();
      return { k: 'inc', op: tok.v as '++' | '--', post: false, e, src: this.text(start, this.i) };
    }
    if (tok.k === 'op' && ['-', '+', '!', '~'].includes(tok.v)) {
      this.next();
      const e = this.unary();
      return { k: 'unary', op: tok.v, e, src: this.text(start, this.i) };
    }
    // C-style cast: (int) x
    if (this.is('(') && this.peek(1).k === 'id' && TYPES.has(this.peek(1).v)) {
      let j = 1;
      const words: string[] = [];
      while (this.peek(j).k === 'id' && TYPES.has(this.peek(j).v)) words.push(this.peek(j++).v);
      if (this.is(')', j)) {
        this.i += j + 1;
        const e = this.unary();
        return { k: 'cast', ty: toTy(words) as Ty, e, src: this.text(start, this.i) };
      }
    }
    return this.postfix();
  }
  postfix(): Expr {
    const start = this.i;
    let e = this.primary();
    for (;;) {
      if (this.opt('[')) {
        const idx = this.expr();
        this.eat(']');
        e = { k: 'index', arr: e, idx, src: this.text(start, this.i) };
      } else if (this.is('++') || this.is('--')) {
        const op = this.next().v as '++' | '--';
        e = { k: 'inc', op, post: true, e, src: this.text(start, this.i) };
      } else return e;
    }
  }
  primary(): Expr {
    const start = this.i;
    const tok = this.next();
    if (tok.k === 'num') {
      const s = tok.v.replace(/[uUlL]+$/, '');
      const isFloat = /[fF]$/.test(s) && !/^0[xX]/.test(s);
      const isDouble = /[.eE]/.test(s) && !/^0[xX]/.test(s);
      const v = Number(s.replace(/[fF]$/, ''));
      return { k: 'num', v: isFloat ? Math.fround(v) : v, ty: isFloat ? 'float' : isDouble ? 'double' : 'int', src: tok.v };
    }
    if (tok.k === 'str') {
      let v = tok.v;
      while (this.peek().k === 'str') v += this.next().v; // "a" "b" joins
      return { k: 'str', v, src: this.text(start, this.i) };
    }
    if (tok.k === 'chr') return { k: 'chr', v: tok.v.charCodeAt(0) || 0, src: `'${tok.v}'` };
    if (tok.k === 'op' && tok.v === '(') {
      const e = this.expr(true);
      this.eat(')');
      return e;
    }
    if (tok.k === 'id') {
      if (tok.v === 'true' || tok.v === 'false') return { k: 'num', v: tok.v === 'true' ? 1 : 0, ty: 'bool', src: tok.v };
      if (tok.v === 'std' && this.is('::')) {
        this.next();
        return this.primary();
      }
      if (tok.v === 'sizeof') {
        const paren = this.opt('(');
        if (paren && this.peek().k === 'id' && TYPES.has(this.peek().v) && !this.is('[', 1)) {
          const words: string[] = [];
          while (this.peek().k === 'id' && TYPES.has(this.peek().v)) words.push(this.next().v);
          this.eat(')');
          return { k: 'num', v: SIZEOF[toTy(words) as Ty] ?? 4, ty: 'int', src: this.text(start, this.i) };
        }
        const e = paren ? this.expr() : this.unary();
        if (paren) this.eat(')');
        return { k: 'call', name: 'sizeof', args: [e], src: this.text(start, this.i) };
      }
      if (tok.v === 'static_cast' && this.is('<')) {
        this.next();
        const words: string[] = [];
        while (!this.is('>')) words.push(this.next().v);
        this.eat('>');
        this.eat('(');
        const e = this.expr();
        this.eat(')');
        return { k: 'cast', ty: toTy(words) as Ty, e, src: this.text(start, this.i) };
      }
      // functional cast int(x), or a call
      if (this.is('(')) {
        this.next();
        const args: Expr[] = [];
        while (!this.is(')')) {
          args.push(this.assignment());
          if (!this.opt(',')) break;
        }
        this.eat(')');
        if (TYPES.has(tok.v) && args.length === 1) return { k: 'cast', ty: toTy([tok.v]) as Ty, e: args[0], src: this.text(start, this.i) };
        return { k: 'call', name: tok.v, args, src: this.text(start, this.i) };
      }
      return { k: 'id', name: tok.v, src: tok.v };
    }
    throw new CppError(`unexpected "${tok.v || 'end of code'}"`, tok.line);
  }
}

// ── running ──────────────────────────────────────────────────────────────────────
interface Scalar {
  kind: 'scalar';
  ty: Ty;
  val: Val;
  isConst?: boolean;
}
interface ArrayVar {
  kind: 'array';
  ty: Ty;
  dims: number[];
  data: Val[];
}
type Cell = Scalar | ArrayVar;
type Ref = { cell: Scalar } | { arr: ArrayVar; at: number };

export interface TraceStep {
  line: number;
  explanation: string;
  vars: Record<string, string>;
  arrays: Record<string, { dims: number[]; values: string[] }>;
  changed: string[];
  output: string; // everything printed so far
  printed?: string; // printed on this step
  files?: Record<string, string>; // what the program has written to files
  condition?: { expr: string; value: boolean };
  label?: string; // "Iteration 2", "in f()"
  trap?: string;
}
export interface Trace {
  code: string;
  steps: TraceStep[];
  output: string;
  error?: string; // a compile or run-time error, as C++ would report it
  stopped?: boolean; // hit the step limit (an endless loop)
  waiting?: boolean; // ran out of input: the program waits at a cin
}

class StepLimit {}
class NeedInput {}
class Exit {
  constructor(public code: number) {}
}
class Signal {
  constructor(
    public kind: 'break' | 'continue' | 'return',
    public value?: Val
  ) {}
}

const fmtVal = (x: Val, ty?: Ty): string => {
  if (isGarbage(x)) return 'G';
  const t = ty ?? (x.t as Ty);
  if (t === 'char') {
    const code = num(x);
    return code >= 32 && code < 127 ? `'${String.fromCharCode(code)}'` : `${code}`;
  }
  if (t === 'bool') return num(x) ? 'true' : 'false';
  if (t === 'string') return `"${x.v}"`;
  if (t === 'double' || t === 'float') return formatDouble(num(x), 10).replace(/^(-?\d+)$/, '$1.0');
  return String(x.v);
};

export function traceCpp(code: string, opts: { input?: (string | number)[]; maxSteps?: number } = {}): Trace {
  const maxSteps = opts.maxSteps ?? 3000;
  const input = [...(opts.input ?? [])].map(String);
  const steps: TraceStep[] = [];
  let out = '';
  // cout state
  let precision = 6;
  let fixed = false;
  let width = 0;
  let fill = ' ';
  let left = false;
  let boolalpha = false;

  const globals = new Map<string, Cell>();
  const files = new Map<string, { file: string; text: string }>(); // stream name -> file
  const frames: { name: string; scopes: Map<string, Cell>[] }[] = [{ name: 'main', scopes: [new Map()] }];
  const frame = () => frames[frames.length - 1];
  let changed: string[] = [];
  let traps: string[] = [];
  let label: string | undefined;
  let funcs = new Map<string, Func>();

  const lookup = (name: string): Cell | undefined => {
    const sc = frame().scopes;
    for (let i = sc.length - 1; i >= 0; i--) {
      const c = sc[i].get(name);
      if (c) return c;
    }
    return globals.get(name);
  };
  const declare = (name: string, cell: Cell) => frame().scopes[frame().scopes.length - 1].set(name, cell);

  const snapshot = () => {
    const vars: Record<string, string> = {};
    const arrays: TraceStep['arrays'] = {};
    const add = (m: Map<string, Cell>) => {
      for (const [n, c] of m) {
        if (c.kind === 'scalar') vars[n] = fmtVal(c.val, c.ty);
        else arrays[n] = { dims: c.dims, values: c.data.map((v) => fmtVal(v, c.ty)) };
      }
    };
    add(globals);
    for (const sc of frame().scopes) add(sc);
    return { vars, arrays };
  };
  const emit = (line: number, explanation: string, extra: Partial<TraceStep> = {}) => {
    if (steps.length >= maxSteps) throw new StepLimit();
    const { vars, arrays } = snapshot();
    const written = files.size ? Object.fromEntries([...files.values()].map((f) => [f.file, f.text])) : undefined;
    steps.push({
      line,
      explanation,
      vars,
      arrays,
      changed: [...new Set(changed)],
      output: out,
      ...(written ? { files: written } : {}),
      ...(traps.length ? { trap: [...new Set(traps)].join(' ') } : {}),
      ...(label ? { label } : {}),
      ...extra
    });
    changed = [];
    traps = [];
  };

  // ── evaluation ──
  const resolve = (e: Expr, line: number): Ref => {
    if (e.k === 'id') {
      let c = lookup(e.name);
      if (!c) {
        // snippets often use a variable without showing its declaration: treat it as an int
        c = { kind: 'scalar', ty: 'int', val: GARBAGE };
        frame().scopes[0].set(e.name, c);
        traps.push(`${e.name} is not declared in this snippet, so it is treated as an int.`);
      }
      if (c.kind === 'array') throw new CppError(`${e.name} is an array: use ${e.name}[i]`, line);
      return { cell: c };
    }
    if (e.k === 'index') {
      // A[i] or A[i][j]
      const idxs: number[] = [];
      let base: Expr = e;
      while (base.k === 'index') {
        idxs.unshift(num(evaluate(base.idx, line)));
        base = base.arr;
      }
      if (base.k !== 'id') throw new CppError('only named arrays can be indexed', line);
      const arr = lookup(base.name);
      if (!arr || arr.kind !== 'array') throw new CppError(`${base.name} is not an array`, line);
      let at = 0;
      for (let d = 0; d < arr.dims.length; d++) {
        const i = idxs[d] ?? 0;
        if (i < 0 || i >= arr.dims[d]) {
          traps.push(`${base.name}[${idxs.join('][')}] is outside the array (valid ${base.name}[0] to ${base.name}[${arr.dims[d] - 1}]): C++ does not check, the value is garbage.`);
          return { cell: { kind: 'scalar', ty: arr.ty, val: GARBAGE } };
        }
        at = at * arr.dims[d] + i;
      }
      return { arr, at };
    }
    throw new CppError(`cannot assign to "${e.src}"`, line);
  };
  // a char array read as text: up to its first '\0'
  const cstr = (a: ArrayVar) => {
    let t = '';
    for (const v of a.data) {
      if (isGarbage(v) || num(v) === 0) break;
      t += String.fromCharCode(num(v));
    }
    return t;
  };
  const charArray = (e: Expr, line: number): ArrayVar => {
    const a = e.k === 'id' ? lookup(e.name) : undefined;
    if (!a || a.kind !== 'array' || a.ty !== 'char') throw new CppError(`${e.src} is not a char array`, line);
    return a;
  };
  const setCstr = (a: ArrayVar, text: string, line: number, name: string) => {
    if (text.length + 1 > a.data.length) throw new CppError(`${name} has room for ${a.data.length - 1} characters, not ${text.length}: writing past its end overwrites other memory`, line);
    for (let i = 0; i <= text.length; i++) a.data[i] = { t: 'char', v: i < text.length ? text.charCodeAt(i) : 0 };
    changed.push(name);
  };
  const read = (r: Ref): Val => ('cell' in r ? r.cell.val : r.arr.data[r.at]);
  const tyOf = (r: Ref): Ty => ('cell' in r ? r.cell.ty : r.arr.ty);
  const nameOf = (e: Expr): string => (e.k === 'id' ? e.name : e.k === 'index' ? nameOf(e.arr) : e.src);
  const write = (r: Ref, v: Val, e: Expr, line: number) => {
    if ('cell' in r && r.cell.isConst) throw new CppError(`${nameOf(e)} is const and cannot change`, line);
    const ty = tyOf(r);
    const conv = convert(v, ty);
    if ((ty === 'int' || ty === 'char') && (v.t === 'double' || v.t === 'float') && !Number.isInteger(num(v)))
      traps.push(`${nameOf(e)} is ${ty === 'int' ? 'an int' : 'a char'}: ${formatDouble(num(v))} is cut to ${num(conv)} (the fraction is dropped).`);
    if ('cell' in r) r.cell.val = conv;
    else r.arr.data[r.at] = conv;
    changed.push(nameOf(e));
    return conv;
  };

  const arith = (op: string, a: Val, b: Val, line: number, src: string): Val => {
    if (isGarbage(a) || isGarbage(b)) {
      traps.push(`${src} uses a value that was never set: the result is garbage.`);
      return GARBAGE;
    }
    if (a.t === 'string' || b.t === 'string') {
      if (op === '+') return { t: 'string', v: String(a.t === 'char' ? String.fromCharCode(num(a)) : a.v) + String(b.t === 'char' ? String.fromCharCode(num(b)) : b.v) };
      if (op === '==' || op === '!=') return BOOL((a.v === b.v) === (op === '=='));
      throw new CppError(`cannot use ${op} on text`, line);
    }
    const x = num(a);
    const y = num(b);
    const real = a.t === 'double' || b.t === 'double' ? 'double' : a.t === 'float' || b.t === 'float' ? 'float' : null;
    const make = (v: number): Val => (real === 'double' ? DBL(v) : real === 'float' ? { t: 'float', v: Math.fround(v) } : INT(v));
    switch (op) {
      case '+':
        return make(x + y);
      case '-':
        return make(x - y);
      case '*':
        return real ? make(x * y) : INT(Math.imul(x, y));
      case '/':
        if (!real) {
          if (y === 0) throw new CppError(`integer division by zero (${src}): the program crashes`, line);
          if (x % y !== 0) traps.push(`Integer division: ${x} / ${y} = ${Math.trunc(x / y)}, the remainder is dropped.`);
          return INT(Math.trunc(x / y));
        }
        if (y === 0) traps.push(`${src} divides a ${real} by zero: the result is ${x === 0 ? 'nan' : x > 0 ? 'inf' : '-inf'}.`);
        return make(x / y);
      case '%':
        if (real) throw new CppError(`% needs whole numbers, but ${src} uses a ${real}: it does not compile (use fmod)`, line);
        if (y === 0) throw new CppError(`modulo by zero (${src}): the program crashes`, line);
        return INT(x % y);
      case '<':
        return BOOL(x < y);
      case '<=':
        return BOOL(x <= y);
      case '>':
        return BOOL(x > y);
      case '>=':
        return BOOL(x >= y);
      case '==':
        return BOOL(x === y);
      case '!=':
        return BOOL(x !== y);
      case '&':
        return INT(x & y);
      case '|':
        return INT(x | y);
      case '^':
        return INT(x ^ y);
      case '<<':
        return INT(x << y);
      case '>>':
        return INT(x >> y);
    }
    throw new CppError(`unknown operator ${op}`, line);
  };

  const MATH: Record<string, (...a: number[]) => number> = {
    pow: Math.pow,
    sqrt: Math.sqrt,
    fabs: Math.abs,
    exp: Math.exp,
    log: Math.log,
    log10: Math.log10,
    log2: Math.log2,
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    atan: Math.atan,
    asin: Math.asin,
    acos: Math.acos,
    atan2: Math.atan2,
    floor: Math.floor,
    ceil: Math.ceil,
    round: (x) => Math.sign(x) * Math.round(Math.abs(x)),
    trunc: Math.trunc,
    fmod: (a, b) => a % b,
    hypot: Math.hypot,
    cbrt: Math.cbrt
  };

  const call = (name: string, args: Expr[], line: number, src: string): Val => {
    const f = funcs.get(name);
    if (f) {
      const scope = new Map<string, Cell>();
      f.params.forEach((p, i) => {
        const a = args[i];
        if (!a) throw new CppError(`${name}() needs ${f.params.length} argument${f.params.length > 1 ? 's' : ''}`, line);
        if (p.array) {
          const arr = a.k === 'id' ? lookup(a.name) : undefined;
          if (!arr || arr.kind !== 'array') throw new CppError(`${name}() expects an array for ${p.name}`, line);
          scope.set(p.name, arr); // arrays are passed by reference
        } else if (p.ref) {
          // a reference parameter is the caller's variable under another name
          const r = resolve(a, line);
          if ('cell' in r) scope.set(p.name, r.cell);
          else {
            const { arr, at } = r;
            scope.set(p.name, {
              kind: 'scalar',
              ty: arr.ty,
              get val() {
                return arr.data[at];
              },
              set val(v: Val) {
                arr.data[at] = v;
              }
            });
          }
        } else scope.set(p.name, { kind: 'scalar', ty: p.ty, val: convert(evaluate(a, line), p.ty) });
      });
      if (frames.length > 200) throw new CppError(`${name}() calls itself too deeply (no base case?)`, line);
      const prevLabel = label;
      frames.push({ name, scopes: [scope] });
      label = `in ${name}()`;
      emit(line, `Call ${src}: jump into ${name}() with ${f.params.map((p) => `${p.name} = ${scope.get(p.name)?.kind === 'scalar' ? fmtVal((scope.get(p.name) as Scalar).val, p.ty) : '[array]'}`).join(', ') || 'no arguments'}.`);
      let ret: Val = INT(0);
      try {
        exec(f.body);
      } catch (s) {
        if (s instanceof Signal && s.kind === 'return') ret = s.value ?? INT(0);
        else throw s;
      }
      frames.pop();
      label = prevLabel;
      return f.ret === 'void' ? INT(0) : convert(ret, f.ret);
    }
    if (name === 'sizeof') {
      const a = args[0];
      const c = a.k === 'id' ? lookup(a.name) : undefined;
      if (c?.kind === 'array') return INT(c.data.length * (SIZEOF[c.ty] ?? 4));
      const v = evaluate(a, line);
      return INT(v.t === 'string' && a.k === 'str' ? String(v.v).length + 1 : SIZEOF[v.t as Ty] ?? 4);
    }
    if (name === 'exit') throw new Exit(args[0] ? num(evaluate(args[0], line)) : 0);
    if (name === 'strlen') return INT((args[0].k === 'str' ? args[0].v : cstr(charArray(args[0], line))).length);
    if (name === 'strcpy' || name === 'strcat') {
      const dst = charArray(args[0], line);
      const text = args[1].k === 'str' ? args[1].v : cstr(charArray(args[1], line));
      setCstr(dst, name === 'strcpy' ? text : cstr(dst) + text, line, args[0].src);
      return INT(0);
    }
    if (name === 'strcmp') {
      const a = args[0].k === 'str' ? args[0].v : cstr(charArray(args[0], line));
      const b = args[1].k === 'str' ? args[1].v : cstr(charArray(args[1], line));
      return INT(a < b ? -1 : a > b ? 1 : 0);
    }
    const vals = args.map((a) => evaluate(a, line));
    if (name === 'abs' && vals[0] && vals[0].t !== 'double' && vals[0].t !== 'float') return INT(Math.abs(num(vals[0])));
    if (name === 'max' || name === 'min') {
      const r = name === 'max' ? Math.max(num(vals[0]), num(vals[1])) : Math.min(num(vals[0]), num(vals[1]));
      return vals.some((v) => v.t === 'double' || v.t === 'float') ? DBL(r) : INT(r);
    }
    if (name === 'abs') return DBL(Math.abs(num(vals[0])));
    const m = MATH[name];
    if (m) {
      if (vals.some(isGarbage)) return GARBAGE;
      return DBL(m(...vals.map(num)));
    }
    throw new CppError(`${name}() is not a function this simulator knows`, line);
  };

  const evaluate = (e: Expr, line: number): Val => {
    switch (e.k) {
      case 'num':
        return { t: e.ty, v: e.v };
      case 'str':
        return { t: 'string', v: e.v };
      case 'chr':
        return { t: 'char', v: e.v };
      case 'id': {
        const c = lookup(e.name);
        if (!c) {
          traps.push(`${e.name} is never declared or given a value: it holds garbage.`);
          return GARBAGE;
        }
        if (c.kind === 'array') return c.ty === 'char' ? { t: 'string', v: cstr(c) } : { t: 'string', v: `[array ${e.name}]` };
        if (isGarbage(c.val)) traps.push(`${e.name} was never given a value: it holds garbage.`);
        return c.val;
      }
      case 'index': {
        const v = read(resolve(e, line));
        if (isGarbage(v) && !traps.length) traps.push(`${e.src} was never given a value: it holds garbage.`);
        return v;
      }
      case 'call':
        return call(e.name, e.args, line, e.src);
      case 'cast': {
        const v = evaluate(e.e, line);
        return convert(v, e.ty);
      }
      case 'unary': {
        const v = evaluate(e.e, line);
        if (isGarbage(v)) return GARBAGE;
        if (e.op === '!') return BOOL(!num(v));
        if (e.op === '~') return INT(~num(v));
        if (e.op === '-') return v.t === 'double' || v.t === 'float' ? { t: v.t, v: -num(v) } : INT(-num(v));
        return v.t === 'char' || v.t === 'bool' ? INT(num(v)) : v;
      }
      case 'inc': {
        const r = resolve(e.e, line);
        const before = read(r);
        if (isGarbage(before)) {
          traps.push(`${e.e.src} was never given a value: ${e.op} on garbage gives garbage.`);
          return GARBAGE;
        }
        const after = write(r, arith(e.op === '++' ? '+' : '-', before, INT(1), line, e.src), e.e, line);
        return e.post ? before : after;
      }
      case 'bin': {
        if (e.op === '&&' || e.op === '||') {
          const l = evaluate(e.l, line);
          const lv = !isGarbage(l) && num(l) !== 0;
          if (e.op === '&&' ? !lv : lv) {
            traps.push(`Short-circuit: ${e.l.src} is ${lv} so ${e.r.src} is never evaluated.`);
            return BOOL(lv);
          }
          const r = evaluate(e.r, line);
          return BOOL(!isGarbage(r) && num(r) !== 0);
        }
        const l = evaluate(e.l, line);
        const r = evaluate(e.r, line);
        return arith(e.op, l, r, line, e.src);
      }
      case 'assign': {
        const r = resolve(e.target, line);
        const v = evaluate(e.value, line);
        if (e.op === '=') return write(r, v, e.target, line);
        const cur = read(r);
        return write(r, arith(e.op.slice(0, -1), cur, v, line, e.src), e.target, line);
      }
      case 'cond': {
        const c = evaluate(e.c, line);
        return num(c) ? evaluate(e.a, line) : evaluate(e.b, line);
      }
      case 'comma': {
        let last: Val = INT(0);
        for (const x of e.list) last = evaluate(x, line);
        return last;
      }
    }
  };

  const describe = (e: Expr, v: Val): string => {
    if (e.k === 'assign') {
      const nm = e.target.src;
      return `${e.src}: ${nm} is now ${fmtVal(v)}.`;
    }
    if (e.k === 'inc') return `${e.src}: ${e.e.src} is now ${fmtVal(evaluateQuiet(e.e))}.`;
    if (e.k === 'comma') return `${e.src}.`;
    if (e.k === 'call') return `${e.src} runs.`;
    return `${e.src} = ${fmtVal(v)}.`;
  };
  const evaluateQuiet = (e: Expr): Val => {
    try {
      return read(resolve(e, 0));
    } catch {
      return GARBAGE;
    }
  };

  const printVal = (v: Val): string => {
    if (isGarbage(v)) {
      traps.push('Printing a value that was never set: the program prints garbage (shown as G).');
      return 'G';
    }
    switch (v.t) {
      case 'string':
        return String(v.v);
      case 'char':
        return String.fromCharCode(num(v));
      case 'bool':
        return boolalpha ? (num(v) ? 'true' : 'false') : String(num(v));
      case 'double':
      case 'float':
        return formatDouble(num(v), precision, fixed);
      default:
        return String(v.v);
    }
  };

  const cond = (e: Expr, line: number, ifTrue: string, ifFalse: string): boolean => {
    const v = evaluate(e, line);
    const b = !isGarbage(v) && num(v) !== 0;
    emit(line, `Check ${e.src}: ${b ? 'true' : 'false'}, ${b ? ifTrue : ifFalse}`, { condition: { expr: e.src, value: b } });
    return b;
  };

  const declareVars = (s: Extract<Stmt, { k: 'decl' }>) => {
    const parts: string[] = [];
    for (const d of s.decls) {
      if (d.dims.length && s.ty === 'char' && d.init?.k === 'str') {
        const text = d.init.v;
        const size = d.dims[0] ? num(evaluate(d.dims[0], s.line)) : text.length + 1;
        if (text.length + 1 > size) throw new CppError(`"${text}" needs ${text.length + 1} chars (with the closing \\0) but ${d.name} has ${size}`, s.line);
        const data: Val[] = Array.from({ length: size }, (_, i) => ({ t: 'char', v: i < text.length ? text.charCodeAt(i) : 0 }) as Val);
        declare(d.name, { kind: 'array', ty: 'char', dims: [size], data });
        changed.push(d.name);
        parts.push(`${d.name}[${size}] = "${text}" (${text.length} letters + the closing \\0)`);
        continue;
      }
      if (d.dims.length) {
        const flat: (Expr | null)[] = [];
        const inner: number[] = [];
        if (d.list) {
          for (const item of d.list) {
            if (Array.isArray(item)) {
              inner.push(item.length);
              flat.push(...(item as (Expr | null)[]));
            } else flat.push(item);
          }
        }
        const dims = d.dims.map((x, i) => {
          if (x) return num(evaluate(x, s.line));
          if (i === 0 && d.list) return d.dims.length > 1 ? d.list.length : flat.length;
          throw new CppError(`the size of ${d.name} is missing`, s.line);
        });
        const size = dims.reduce((a, b) => a * b, 1);
        const data: Val[] = new Array(size).fill(d.list ? convert(INT(0), s.ty) : GARBAGE);
        if (d.list) {
          if (d.dims.length > 1 && d.list.some(Array.isArray)) {
            d.list.forEach((row, r) => (row as (Expr | null)[]).forEach((x, c) => x && (data[r * dims[1] + c] = convert(evaluate(x, s.line), s.ty))));
          } else flat.forEach((x, i) => x && i < size && (data[i] = convert(evaluate(x, s.line), s.ty)));
        }
        declare(d.name, { kind: 'array', ty: s.ty, dims, data });
        changed.push(d.name);
        parts.push(`${d.name}[${dims.join('][')}]${d.list ? '' : ' (no values yet: garbage)'}`);
        if (!d.list) traps.push(`${d.name} is not initialised: until each element is set it holds garbage.`);
      } else {
        let val: Val = GARBAGE;
        const raw = d.init ? evaluate(d.init, s.line) : d.list?.length ? evaluate(d.list[0] as Expr, s.line) : null;
        if (raw) val = convert(raw, s.ty);
        else if (d.list) val = convert(INT(0), s.ty);
        else if (s.ty === 'string') val = { t: 'string', v: '' };
        if (raw && (s.ty === 'int' || s.ty === 'char') && (raw.t === 'double' || raw.t === 'float') && !Number.isInteger(num(raw)))
          traps.push(`${d.name} is ${s.ty === 'int' ? 'an int' : 'a char'}: ${formatDouble(num(raw))} is cut to ${num(val)} (the fraction is dropped).`);
        declare(d.name, { kind: 'scalar', ty: s.ty, val, isConst: s.isConst });
        changed.push(d.name);
        parts.push(isGarbage(val) ? `${d.name} (no value yet: garbage)` : `${d.name} = ${fmtVal(val, s.ty)}`);
      }
    }
    return `Declare ${s.isConst ? 'const ' : ''}${s.ty} ${parts.join(', ')}.`;
  };

  const exec = (s: Stmt): void => {
    switch (s.k) {
      case 'empty':
        return;
      case 'block': {
        frame().scopes.push(new Map());
        try {
          for (const x of s.body) exec(x);
        } finally {
          frame().scopes.pop();
        }
        return;
      }
      case 'decl':
        emit(s.line, declareVars(s));
        return;
      case 'expr': {
        const v = evaluate(s.e, s.line);
        emit(s.line, describe(s.e, v));
        return;
      }
      case 'cout': {
        let printed = '';
        for (const it of s.items) {
          if ('manip' in it) {
            const arg = it.arg ? num(evaluate(it.arg, s.line)) : 0;
            if (it.manip === 'endl') printed += '\n';
            else if (it.manip === 'fixed') fixed = true;
            else if (it.manip === 'scientific') fixed = false;
            else if (it.manip === 'setprecision') precision = arg;
            else if (it.manip === 'setw') width = arg;
            else if (it.manip === 'setfill') fill = String.fromCharCode(arg);
            else if (it.manip === 'left') left = true;
            else if (it.manip === 'right') left = false;
            else if (it.manip === 'boolalpha') boolalpha = true;
            else if (it.manip === 'noboolalpha') boolalpha = false;
            continue;
          }
          let txt = printVal(evaluate(it, s.line));
          if (width > txt.length) txt = left ? txt + fill.repeat(width - txt.length) : fill.repeat(width - txt.length) + txt;
          width = 0;
          printed += txt;
        }
        out += printed;
        emit(s.line, printed ? `Print ${JSON.stringify(printed).replace(/\\n/g, '↵')}.` : 'Nothing printed.', { printed });
        return;
      }
      case 'cin': {
        const got: string[] = [];
        for (const t of s.targets) {
          const raw = input.shift();
          if (raw === undefined) {
            if (got.length) emit(s.line, `Read input: ${got.join(', ')}.`);
            throw new NeedInput();
          }
          const arr = t.k === 'id' ? lookup(t.name) : undefined;
          if (arr?.kind === 'array' && arr.ty === 'char') {
            setCstr(arr, raw, s.line, t.src);
            got.push(`${t.src} = "${raw}"`);
            continue;
          }
          const r = resolve(t, s.line);
          const ty = tyOf(r);
          const v: Val = ty === 'string' ? { t: 'string', v: raw } : ty === 'char' ? { t: 'char', v: raw.charCodeAt(0) } : DBL(Number(raw));
          got.push(`${t.src} = ${fmtVal(write(r, v, t, s.line))}`);
        }
        emit(s.line, `Read input: ${got.join(', ')}.`);
        return;
      }
      case 'stream': {
        const file = s.file ? String(evaluate(s.file, s.line).v) : s.name;
        files.set(s.name, { file, text: '' });
        emit(s.line, `Open the file ${file} for writing.`);
        return;
      }
      case 'fout': {
        const f = files.get(s.name);
        if (!f) throw new CppError(`${s.name} is not an open file`, s.line);
        let text = '';
        for (const it of s.items) {
          if ('manip' in it) {
            if (it.manip === 'endl') text += '\n';
            continue;
          }
          text += printVal(evaluate(it, s.line));
        }
        f.text += text;
        emit(s.line, `Write ${JSON.stringify(text).replace(/\\n/g, '↵')} to ${f.file}.`);
        return;
      }
      case 'method': {
        const args = s.args.map((a) => evaluate(a, s.line));
        if (s.obj === 'cout' && s.method === 'precision') precision = num(args[0]);
        const f = files.get(s.obj);
        emit(s.line, f && s.method === 'close' ? `Close ${f.file}: everything written is saved.` : `${s.src}.`);
        return;
      }
      case 'if': {
        if (cond(s.cond, s.line, 'so the if-branch runs.', s.else ? 'so the else-branch runs.' : 'so the branch is skipped.')) exec(s.then);
        else if (s.else) exec(s.else);
        return;
      }
      case 'while':
      case 'for': {
        frame().scopes.push(new Map());
        const prevLabel = label;
        try {
          if (s.k === 'for' && s.init) exec(s.init);
          for (let n = 1; ; n++) {
            label = `Iteration ${n}`;
            if (s.cond && !cond(s.cond, s.line, 'so the loop body runs.', 'so the loop ends.')) break;
            if (!s.cond) emit(s.line, 'No condition: the loop runs until a break.');
            try {
              exec(s.body);
            } catch (sig) {
              if (sig instanceof Signal && sig.kind === 'break') {
                emit(s.line, 'break: leave the loop now.');
                break;
              }
              if (!(sig instanceof Signal && sig.kind === 'continue')) throw sig;
            }
            if (s.k === 'for' && s.step) {
              const v = evaluate(s.step, s.line);
              emit(s.line, `Step ${describe(s.step, v)}`);
            }
          }
        } finally {
          label = prevLabel;
          frame().scopes.pop();
        }
        return;
      }
      case 'do': {
        const prevLabel = label;
        try {
          for (let n = 1; ; n++) {
            label = `Pass ${n}`;
            try {
              exec(s.body);
            } catch (sig) {
              if (sig instanceof Signal && sig.kind === 'break') {
                emit(s.condLine, 'break: leave the loop now.');
                break;
              }
              if (!(sig instanceof Signal && sig.kind === 'continue')) throw sig;
            }
            if (!cond(s.cond, s.condLine, 'so the body runs again.', 'so the loop ends (the body always runs at least once).')) break;
          }
        } finally {
          label = prevLabel;
        }
        return;
      }
      case 'break':
        throw new Signal('break');
      case 'continue':
        emit(s.line, 'continue: skip the rest of the body and go to the next round.');
        throw new Signal('continue');
      case 'return': {
        const v = s.e ? evaluate(s.e, s.line) : undefined;
        emit(s.line, frames.length > 1 ? `return ${v ? fmtVal(v) : ''}: go back to the caller.` : 'return: the program ends.');
        throw new Signal('return', v);
      }
    }
  };

  // ── run ──
  let error: string | undefined;
  let stopped = false;
  let waiting = false;
  try {
    const parsed = new Parser(lex(code), code).program();
    funcs = parsed.funcs;
    const main = funcs.get('main');
    try {
      // global declarations and loose statements first, then main() if the code has one
      for (const s of parsed.main) {
        if (main && s.k === 'decl') {
          frames[0].scopes[0] = globals;
          exec(s);
        } else exec(s);
      }
      if (main) {
        frames[0] = { name: 'main', scopes: [new Map()] };
        exec(main.body);
      }
    } catch (sig) {
      if (sig instanceof StepLimit) stopped = true;
      else if (sig instanceof NeedInput) {
        waiting = true;
        steps.push({ line: steps[steps.length - 1]?.line ?? 1, explanation: 'The program waits for input at cin: type values in the input box to keep going.', ...snapshot(), changed: [], output: out });
      } else if (sig instanceof Exit) steps.push({ line: steps[steps.length - 1]?.line ?? 1, explanation: `exit(${sig.code}): the program stops here.`, ...snapshot(), changed: [], output: out });
      else if (!(sig instanceof Signal)) throw sig;
    }
  } catch (e) {
    if (e instanceof CppError) {
      error = e.message;
      steps.push({ line: e.line ?? steps[steps.length - 1]?.line ?? 1, explanation: `Error: ${e.message}.`, ...snapshot(), changed: [], output: out, trap: e.message });
    } else throw e;
  }
  if (stopped) steps.push({ line: steps[steps.length - 1]?.line ?? 1, explanation: `Stopped after ${maxSteps} steps: the loop does not seem to end.`, ...snapshot(), changed: [], output: out, trap: 'An endless loop: check that the loop variable moves toward the end condition.' });
  return { code, steps, output: out, ...(error ? { error } : {}), ...(stopped ? { stopped } : {}), ...(waiting ? { waiting } : {}) };
}

// The input a question gives in words ("user enters 4321", "the input is 7 3"), for cin
export function inputFrom(...texts: (string | undefined)[]): string[] {
  for (const t of texts) {
    const m = t?.match(/(?:enters?|inputs?|types?|input is|entered|reads?)\s*(?:the\s+(?:number|value)s?\s*)?[:=]?\s*((?:-?\d+(?:\.\d+)?[\s,]*(?:and\s+)?)+)/i);
    if (m) return m[1].split(/[\s,]+|and/).filter((x) => x && !isNaN(Number(x)));
  }
  return [];
}
