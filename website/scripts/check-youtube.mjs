// Audit every YouTube video the site links: still available, and does YouTube's title match ours?
//   npm run check:youtube   (needs the network; not part of the build)
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ?? '.';
const files = ['src/data/gates/engr213.ts', 'src/data/gates/indu211.ts', 'src/data/gates/miae215.ts', 'src/data/gates/miae221.ts', 'src/data/miae221YouTubeVideos.ts'];
const seen = new Map();
const gateRe = /"id":\s*"([\w-]{11})",\s*"title":\s*"((?:[^"\\]|\\.)*)",\s*"channel":\s*"((?:[^"\\]|\\.)*)"/g;
const compRe = /youtubeId:\s*'([\w-]{11})'[\s\S]{0,400}?videoTitle:\s*'((?:[^'\\]|\\.)*)'[\s\S]{0,200}?channel:\s*'((?:[^'\\]|\\.)*)'/g;
for (const f of files) {
  const s = readFileSync(path.join(root, f), 'utf8');
  for (const m of s.matchAll(gateRe)) if (!seen.has(m[1])) seen.set(m[1], { file: f, title: m[2], channel: m[3] });
  for (const m of s.matchAll(compRe)) if (!seen.has(m[1])) seen.set(m[1], { file: f, title: m[2], channel: m[3] });
  // companion objects list videoTitle and channel before youtubeId
  for (const m of s.matchAll(/youtubeId:\s*'([\w-]{11})'/g)) {
    const before = s.slice(Math.max(0, m.index - 700), m.index);
    const title = [...before.matchAll(/videoTitle:\s*'((?:[^'\\]|\\.)*)'/g)].pop()?.[1];
    const channel = [...before.matchAll(/channel:\s*'((?:[^'\\]|\\.)*)'/g)].pop()?.[1];
    if (title && channel && !seen.has(m[1])) seen.set(m[1], { file: f, title, channel });
  }
}
const norm = (x) => x.toLowerCase().replace(/&amp;/g, '&').replace(/[^a-z0-9]+/g, ' ').trim();
const words = (x) => new Set(norm(x).split(' ').filter((w) => w.length > 2));
const out = [];
const ids = [...seen.keys()];
for (let i = 0; i < ids.length; i += 8) {
  await Promise.all(
    ids.slice(i, i + 8).map(async (id) => {
      const v = seen.get(id);
      let status = 'ok';
      let ytTitle = '';
      let ytChannel = '';
      try {
        const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
        if (!r.ok) status = `UNAVAILABLE (${r.status})`;
        else {
          const d = await r.json();
          ytTitle = d.title;
          ytChannel = d.author_name;
          const a = words(v.title);
          const b = words(ytTitle);
          const overlap = [...a].filter((w) => b.has(w)).length / Math.max(1, Math.min(a.size, b.size));
          const c1 = norm(v.channel);
          const c2 = norm(ytChannel);
          const chanOk = c1.includes(c2.split(' ')[0]) || c2.includes(c1.split(' ')[0]);
          if (overlap < 0.5 || !chanOk) status = `MISMATCH (title overlap ${overlap.toFixed(2)}, channel ${chanOk ? 'ok' : 'differs'})`;
        }
      } catch (e) {
        status = 'ERROR ' + e.message;
      }
      out.push({ id, status, ours: `${v.title} — ${v.channel}`, youtube: ytTitle ? `${ytTitle} — ${ytChannel}` : '', file: v.file });
    })
  );
}
const bad = out.filter((o) => o.status !== 'ok');
console.log(`${out.length} videos checked, ${bad.length} problems`);
for (const b of bad) console.log(`${b.id} | ${b.status} | ${b.file.split('/').pop()}\n   ours:    ${b.ours}\n   youtube: ${b.youtube}`);
if (bad.length) process.exit(1);
