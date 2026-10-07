// Encrypts a hidden-folder content module into a JSON blob the site can ship publicly.
//
//   MIDTERM_GATE_KEY=<password> node scripts/encrypt-vault.mjs [source.mjs] [output.json]
//
// The plaintext source lives outside git (Miae 221/06 - Studocu - Midterms and Tests/, gitignored);
// only the ciphertext is committed. The password never appears in the repository: the page derives
// the AES key from what the viewer types (PBKDF2-SHA-256), so without it the blob is unreadable.
// Keep the parameters in sync with src/components/vault/vaultCrypto.ts.
import { webcrypto as crypto } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(
  process.argv[2] ?? path.join(here, '../../Miae 221/06 - Studocu - Midterms and Tests/Midterm Gate Source/content.mjs')
);
const out = path.resolve(process.argv[3] ?? path.join(here, '../src/data/vault/miae221-midterm-gate.enc.json'));
const ITERATIONS = 250_000;

const password = process.env.MIDTERM_GATE_KEY;
if (!password) {
  console.error('Set MIDTERM_GATE_KEY to the vault password.');
  process.exit(1);
}

const content = (await import(pathToFileURL(src).href)).default;

// Integrity checks: every cross-reference must point at something that exists.
const KNOWN_CALCS = new Set([
  'ionic', 'bondwell', 'ionforce', 'atoms', 'cubic', 'density', 'direction', 'plane', 'pd', 'bragg', 'vacancy',
  'wtat', 'fick1', 'erf', 'arrD', 'hooke', 'modulus', 'poisson', 'recovery', 'ductility', 'resilience', 'truess'
]);
const qids = new Set(content.questions.map((q) => q.id));
const topicIds = new Set(content.topics.map((t) => t.id));
const fids = new Set(content.formulas.map((f) => f.id));
const problems = [];
const need = (cond, msg) => cond || problems.push(msg);
for (const q of content.questions) {
  need(topicIds.has(q.topic), `question ${q.id}: unknown topic ${q.topic}`);
  need(content.exams.some((e) => e.id === q.exam), `question ${q.id}: unknown exam ${q.exam}`);
  for (const f of q.f ?? []) need(fids.has(f), `question ${q.id}: unknown formula ${f}`);
  if (q.opts) need(/^[a-e]$/.test(q.ans) && q.ans.charCodeAt(0) - 97 < q.opts.length, `question ${q.id}: answer ${q.ans} out of range`);
}
for (const c of content.clusters) {
  need(topicIds.has(c.topic), `cluster ${c.id}: unknown topic ${c.topic}`);
  for (const m of c.members) need(qids.has(m), `cluster ${c.id}: unknown question ${m}`);
}
for (const f of content.formulas) {
  need(topicIds.has(f.topic), `formula ${f.id}: unknown topic`);
  need(f.calc === null || KNOWN_CALCS.has(f.calc), `formula ${f.id}: unknown calculator ${f.calc}`);
  for (const s of f.seen) need(qids.has(s), `formula ${f.id}: unknown question ${s}`);
  for (const p of f.presets) need(!p.from || qids.has(p.from), `formula ${f.id}: preset from unknown ${p.from}`);
}
for (const v of content.videoStops) {
  need(topicIds.has(v.topic), `video stop ${v.title}: unknown topic`);
  for (const g of v.gate) need(qids.has(g), `video stop ${v.title}: unknown question ${g}`);
  for (const f of v.formulas) need(fids.has(f), `video stop ${v.title}: unknown formula ${f}`);
  for (const vid of v.videos) need(/^[\w-]{11}$/.test(vid.id), `video ${vid.title}: bad id`);
}
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

// Miller indices typed with combining overbars (e.g. "[2̄2̄1]") lose the bar in most fonts, which flips
// their meaning. Rewrite every bracketed group that contains one as KaTeX: $[\bar{2}\bar{2}1]$.
const BAR = '\u0304';
const fixBars = (s) =>
  s.replace(/([[(])([0-9\u0304 ]+)([\])])/g, (m, open, body, close) =>
    body.includes(BAR) ? `$${open}${body.replace(/ /g, '\\,').replace(/(\d)\u0304/g, '\\bar{$1}')}${close}$` : m
  );
const deepFix = (v) =>
  typeof v === 'string' ? fixBars(v) : Array.isArray(v) ? v.map(deepFix) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deepFix(x)])) : v;
const fixed = deepFix(content);
const leftover = JSON.stringify(fixed).includes(BAR);
if (leftover) {
  console.error('A combining overbar is outside [ ] or ( ); write it as $\\bar{n}$ in the source.');
  process.exit(1);
}

const enc = new TextEncoder();
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const baseKey = await crypto.subtle.importKey('raw', enc.encode(password.trim().toLowerCase()), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt']
);
const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(fixed)));

const b64 = (u8) => Buffer.from(u8).toString('base64');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ v: 1, kdf: 'PBKDF2-SHA256', iter: ITERATIONS, salt: b64(salt), iv: b64(iv), ct: b64(new Uint8Array(ct)) }));
console.log(
  `Encrypted ${content.questions.length} questions, ${content.clusters.length} clusters, ${content.formulas.length} formulas, ` +
    `${content.videoStops.length} video stops → ${path.relative(process.cwd(), out)} (${Math.round(fs.statSync(out).size / 1024)} KB)`
);
