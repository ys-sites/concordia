// Encrypts each course's hidden Midterm Gate content into a JSON blob the site can ship publicly.
//
//   MIDTERM_GATE_KEY=<password> node scripts/encrypt-vault.mjs            (all courses)
//   MIDTERM_GATE_KEY=<password> node scripts/encrypt-vault.mjs MIAE215    (one course)
//
// The plaintext sources live in each course's "* - Studocu - *" folder (gitignored); only the
// ciphertext is committed. The password never appears in the repository: the page derives the AES
// key from what the viewer types (PBKDF2-SHA-256). Keep in sync with src/components/vault/vaultCrypto.ts.
import { webcrypto as crypto } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '../..');
const SOURCES = {
  MIAE221: 'Miae 221/06 - Studocu - Midterms and Tests/Midterm Gate Source/content.mjs',
  MIAE215: 'Miae 215/06 - Studocu - Midterms and Tests/Midterm Gate Source/content.mjs',
  ENGR213: 'Engr 213/08 - Studocu - Midterms and Tests/Midterm Gate Source/content.mjs',
  INDU211: 'Indu 211/06 - Studocu - Midterms and Tests/Midterm Gate Source/content.mjs'
};
const ITERATIONS = 250_000;
const KNOWN_CALCS = new Set([
  'ionic', 'bondwell', 'ionforce', 'atoms', 'cubic', 'density', 'direction', 'plane', 'pd', 'bragg', 'vacancy', 'wtat', 'fick1', 'erf',
  'arrD', 'hooke', 'modulus', 'poisson', 'recovery', 'ductility', 'resilience', 'truess',
  'growth', 'cooling', 'logistic', 'complex', 'breakeven', 'transport', 'cog', 'tsp', 'savings', 'eoq', 'forecast'
]);

const password = process.env.MIDTERM_GATE_KEY;
if (!password) {
  console.error('Set MIDTERM_GATE_KEY to the vault password.');
  process.exit(1);
}

const validate = (c, course) => {
  const problems = [];
  const need = (cond, msg) => cond || problems.push(`${course}: ${msg}`);
  const qids = new Set(c.questions.map((q) => q.id));
  const topicIds = new Set(c.topics.map((t) => t.id));
  const fids = new Set(c.formulas.map((f) => f.id));
  const exams = new Set(c.exams.map((e) => e.id));
  need(c.course === course, `course id is ${c.course}`);
  need(qids.size === c.questions.length, 'duplicate question ids');
  const checkRef = (r, where) => {
    if (r.d) need(c.docs[r.d], `${where}: unknown doc ${r.d}`);
  };
  for (const [k, d] of Object.entries(c.docs)) need(fs.existsSync(path.join(ROOT, d.path)), `doc ${k}: missing file ${d.path}`);
  for (const s of c.subjects) for (const t of s.topics) need(topicIds.has(t), `subject ${s.id}: unknown topic ${t}`);
  for (const t of c.topics) {
    need(c.subjects.some((s) => s.topics.includes(t.id)), `topic ${t.id} is in no subject`);
    for (const r of t.lec) checkRef(r, `topic ${t.id}`);
  }
  for (const q of c.questions) {
    need(topicIds.has(q.topic), `question ${q.id}: unknown topic ${q.topic}`);
    need(exams.has(q.exam), `question ${q.id}: unknown exam ${q.exam}`);
    for (const f of q.f ?? []) need(fids.has(f), `question ${q.id}: unknown lesson ${f}`);
    if (q.opts) for (const l of String(q.ans).split(/[\s,]+/)) need(/^[a-z]$/.test(l) && l.charCodeAt(0) - 97 < q.opts.length, `question ${q.id}: answer ${q.ans} out of range`);
    if (q.kind === 'output') need(typeof q.ans === 'string' && q.ans.length, `question ${q.id}: missing output`);
    if (q.kind === 'num') need(Number.isFinite(Number(q.ans)), `question ${q.id}: numeric answer ${q.ans}`);
  }
  for (const cl of c.clusters) {
    need(topicIds.has(cl.topic), `cluster ${cl.id}: unknown topic ${cl.topic}`);
    for (const m of cl.members) need(qids.has(m), `cluster ${cl.id}: unknown question ${m}`);
    for (const r of cl.refs.lec ?? []) checkRef(r, `cluster ${cl.id}`);
  }
  for (const f of c.formulas) {
    need(topicIds.has(f.topic), `lesson ${f.id}: unknown topic`);
    need(f.calc === null || KNOWN_CALCS.has(f.calc), `lesson ${f.id}: unknown calculator ${f.calc}`);
    for (const s of f.seen) need(qids.has(s), `lesson ${f.id}: unknown question ${s}`);
    for (const p of f.presets ?? []) need(!p.from || qids.has(p.from), `lesson ${f.id}: preset from unknown ${p.from}`);
    for (const r of f.lec) checkRef(r, `lesson ${f.id}`);
    need(f.learn, `lesson ${f.id}: no lesson content`);
    for (const it of f.learn?.quiz ?? []) {
      if (it.type === 'exam') need(qids.has(it.id), `lesson ${f.id}: quiz exam ${it.id} unknown`);
      if (it.type === 'calc') need(KNOWN_CALCS.has(it.calc), `lesson ${f.id}: quiz calc ${it.calc} unknown`);
      if (it.type === 'output') need(typeof it.ans === 'string', `lesson ${f.id}: output item without answer`);
    }
  }
  for (const v of c.videoStops) {
    need(topicIds.has(v.topic), `video stop ${v.title}: unknown topic`);
    for (const g of v.gate) need(qids.has(g), `video stop ${v.title}: unknown question ${g}`);
    for (const f of v.formulas) need(fids.has(f), `video stop ${v.title}: unknown lesson ${f}`);
    for (const vid of v.videos) need(/^[\w-]{11}$/.test(vid.id), `video ${vid.title}: bad id`);
  }
  const stepIds = new Set();
  for (const p of c.plan.phases)
    for (const s of p.steps) {
      need(!stepIds.has(s.id), `plan step id ${s.id} repeated`);
      stepIds.add(s.id);
      if (s.kind === 'doc') need(c.docs[s.doc], `plan ${s.id}: unknown doc ${s.doc}`);
      if (s.kind === 'lesson') need(fids.has(s.lesson), `plan ${s.id}: unknown lesson ${s.lesson}`);
      if (s.kind === 'videos' || s.kind === 'cluster') need(topicIds.has(s.topic), `plan ${s.id}: unknown topic ${s.topic}`);
      if (s.kind === 'drill' && s.drill?.id) {
        const ok = s.drill.scope === 'subject' ? c.subjects.some((x) => x.id === s.drill.id) : s.drill.scope === 'topic' ? topicIds.has(s.drill.id) : c.clusters.some((x) => x.id === s.drill.id);
        need(ok, `plan ${s.id}: unknown drill target ${s.drill.id}`);
      }
    }
  return problems;
};

// Miller indices typed with combining overbars lose the bar in most fonts. Rewrite bracketed groups as KaTeX.
const BAR = '\u0304';
const fixBars = (s) =>
  s.replace(/([[(])([0-9\u0304 ]+)([\])])/g, (m, open, body, close) =>
    body.includes(BAR) ? `$${open}${body.replace(/ /g, '\\,').replace(/(\d)\u0304/g, '\\bar{$1}')}${close}$` : m
  );
const deepFix = (v) =>
  typeof v === 'string' ? fixBars(v) : Array.isArray(v) ? v.map(deepFix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deepFix(x)])) : v;

const b64 = (u8) => Buffer.from(u8).toString('base64');
const enc = new TextEncoder();

const only = process.argv[2];
let failed = false;
for (const [course, rel] of Object.entries(SOURCES)) {
  if (only && only !== course) continue;
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) {
    console.warn(`${course}: no source at ${rel}, skipped`);
    continue;
  }
  const content = (await import(pathToFileURL(src).href)).default;
  const problems = validate(content, course);
  const fixed = deepFix(content);
  if (JSON.stringify(fixed).includes(BAR)) problems.push(`${course}: a combining overbar is outside [ ] or ( ); write it as $\\bar{n}$`);
  if (problems.length) {
    console.error(problems.join('\n'));
    failed = true;
    continue;
  }
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(password.trim().toLowerCase()), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' }, baseKey, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(fixed)));
  const out = path.join(here, `../src/data/vault/${course.toLowerCase()}-midterm-gate.enc.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify({ v: 2, kdf: 'PBKDF2-SHA256', iter: ITERATIONS, salt: b64(salt), iv: b64(iv), ct: b64(new Uint8Array(ct)) }));
  const quizItems = content.formulas.reduce((n, f) => n + (f.learn?.quiz.length ?? 0), 0);
  console.log(
    `${course}: ${content.questions.length} questions, ${content.clusters.length} clusters, ${content.formulas.length} lessons (${quizItems} practice items), ` +
      `${content.videoStops.length} video stops, ${content.plan.phases.reduce((n, p) => n + p.steps.length, 0)} plan steps → ${Math.round(fs.statSync(out).size / 1024)} KB`
  );
}
if (failed) process.exit(1);
