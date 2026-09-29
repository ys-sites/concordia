// Temporary check: every document listed on the site must load as a PDF from the built site.
import { COURSES_DATA } from './src/data/coursesData.ts';
import { getPdfUrl } from './src/utils/pdfUrl.ts';

const BASE = 'http://localhost:4173';
let ok = 0;
const bad: string[] = [];
const outlines: string[] = [];
for (const c of COURSES_DATA) {
  for (const d of c.documents) {
    if (/outline/i.test(d.relativePath)) outlines.push(d.relativePath);
    const url = BASE + getPdfUrl(d.relativePath);
    try {
      const r = await fetch(url);
      const type = r.headers.get('content-type') || '';
      const buf = new Uint8Array(await r.arrayBuffer());
      const isPdf = buf.length > 4 && String.fromCharCode(...buf.slice(0, 5)) === '%PDF-';
      if (r.status === 200 && isPdf) ok++;
      else bad.push(`${r.status} ${type} ${isPdf ? '' : '(not a PDF)'} ${d.relativePath}`);
    } catch (e) {
      bad.push(`ERR ${d.relativePath}: ${e}`);
    }
  }
}
const total = COURSES_DATA.reduce((n, c) => n + c.documents.length, 0);
console.log(`documents: ${total}, viewable: ${ok}`);
console.log('per course:', COURSES_DATA.map((c) => `${c.code} ${c.documents.length}`).join(', '));
console.log('outlines still listed:', outlines);
console.log('problems:\n' + bad.join('\n'));
