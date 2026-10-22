// Lists source files that nothing reachable from src/main.tsx imports (old components the redesign replaced).
// Run: node scripts/unused-files.mjs [--list]
import fs from 'node:fs';
import path from 'node:path';

const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.posix.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|css|mjs)$/.test(f)) files.push(p);
  }
})('src');
const set = new Set(files);
const resolve = (from, spec) => {
  if (!spec.startsWith('.')) return null;
  const base = path.posix.normalize(path.posix.join(path.posix.dirname(from), spec));
  return [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`, `${base}/index.tsx`].find((c) => set.has(c)) ?? null;
};
const seen = new Set();
// the app, plus what the build and the validators load (vite.config.ts, build/, scripts/)
const entries = ['vite.config.ts', ...['build', 'scripts'].flatMap((d) => fs.readdirSync(d).filter((f) => /\.(ts|mjs)$/.test(f)).map((f) => `${d}/${f}`))];
const queue = ['src/main.tsx', ...entries];
for (const e of entries) set.add(e);
const IMPORT = /(?:import|export)[^'"]*?from\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)|import\s+['"]([^'"]+)['"]/g;
while (queue.length) {
  const f = queue.pop();
  if (seen.has(f)) continue;
  seen.add(f);
  if (!/\.tsx?$/.test(f)) continue;
  for (const m of fs.readFileSync(f, 'utf8').matchAll(IMPORT)) {
    const r = resolve(f, m[1] || m[2] || m[3]);
    if (r) queue.push(r);
  }
}
const unused = files.filter((f) => !seen.has(f) && !f.endsWith('.d.ts'));
const kb = Math.round(unused.reduce((n, f) => n + fs.statSync(f).size, 0) / 1024);
const byDir = {};
for (const f of unused) {
  const d = f.split('/').slice(0, 3).join('/');
  byDir[d] = (byDir[d] ?? 0) + 1;
}
console.log(`${files.length} source files · ${seen.size} reachable · ${unused.length} unreachable (${kb} KB)`);
for (const [d, n] of Object.entries(byDir).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${d}`);
if (process.argv.includes('--list')) console.log(unused.join('\n'));
