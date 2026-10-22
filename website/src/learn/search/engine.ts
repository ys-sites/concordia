// One search over the whole site: courses, lessons, videos, documents, practice questions and course dates.
// Words match the start of words ("lin" finds "linear"), every word must match, and titles count more than
// body text. The index is built once per visit from the curriculum (instant) and grows to include the
// question banks once they have loaded in the background.
import type { CourseId } from '../../types';
import type { Curriculum, DocRef, LearnQuestion } from '../model';
import { COURSES, COURSE_BY_ID } from '../courses';
import { fmtClock, loadCurricula } from '../data';
import { href } from '../router';
import { SCHEDULE } from '../schedule';

export type HitKind = 'course' | 'lesson' | 'video' | 'question' | 'document' | 'date';

export interface Entry {
  kind: HitKind;
  key: string;
  course: CourseId | null;
  title: string;
  sub: string; // where it lives
  body: string; // searched, and cut into the snippet
  to?: string;
  doc?: DocRef;
  poster?: string;
  videoId?: string;
  math?: boolean; // title and body hold $…$ maths
  t: string[]; // title words, normalised
  b: string[]; // body words, normalised
}

export interface Hit {
  e: Entry;
  score: number;
}

// lower case, no accents, maths and punctuation out: "Bernoulli's $y'+Py=Qy^n$" → "bernoulli s"
export const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/[^a-z0-9+#]+/g, ' ')
    .trim();
const words = (s: string) => norm(s).split(' ').filter(Boolean);
export const queryWords = (q: string) => words(q).filter((w, i, all) => w.length > 1 || all.length > 1);

const KIND_BOOST: Record<HitKind, number> = { course: 8, lesson: 5, video: 4, date: 4, document: 2, question: 0 };

const entry = (e: Omit<Entry, 't' | 'b'>, titleExtra = ''): Entry => ({ ...e, t: words(`${e.title} ${titleExtra}`), b: words(e.body) });

function fromCurricula(curricula: Record<CourseId, Curriculum>): Entry[] {
  const out: Entry[] = [];
  for (const c of COURSES) {
    const cur = curricula[c.id];
    out.push(entry({ kind: 'course', key: `c:${c.id}`, course: c.id, title: `${c.code} · ${c.title}`, sub: c.dept, body: cur.sections.map((s) => s.title).join(' · '), to: href({ name: 'course', course: c.id, tab: 'overview' }) }));
    const lessonTitle = new Map<string, string>();
    for (const s of cur.sections)
      for (const l of s.lessons) {
        lessonTitle.set(l.id, l.title);
        out.push(
          entry(
            { kind: 'lesson', key: `l:${c.id}:${l.id}`, course: c.id, title: l.title, sub: `${c.code} › ${s.title}`, body: [l.summary, ...l.objectives, s.subtitle].join(' · '), to: href({ name: 'learn', course: c.id, lesson: l.id }) },
            l.topicTags.join(' ')
          )
        );
      }
    for (const v of cur.videos)
      out.push(
        entry({
          kind: 'video',
          key: `v:${v.id}:${v.stepId}`,
          course: c.id,
          title: v.title,
          sub: `${c.code} › ${lessonTitle.get(v.lessonId) ?? ''} · ${fmtClock(v.seconds)}`,
          body: [v.source, lessonTitle.get(v.lessonId)].filter(Boolean).join(' · '),
          to: href({ name: 'learn', course: c.id, lesson: v.lessonId, step: v.stepId }),
          poster: v.poster,
          videoId: v.id.startsWith('yt:') ? undefined : v.id
        })
      );
    for (const g of cur.resources) for (const d of g.docs) out.push(entry({ kind: 'document', key: `d:${d.path}`, course: c.id, title: d.title, sub: `${c.code} › ${g.title}`, body: g.title, doc: d }));
  }
  for (const e of SCHEDULE) {
    const day = new Date(e.date + 'T12:00:00').toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' });
    out.push(entry({ kind: 'date', key: `s:${e.id}`, course: e.course, title: `${COURSE_BY_ID[e.course].code} ${e.title}`, sub: `${day}${e.time ? ` · ${e.time}` : ''}`, body: [e.kind, e.detail].filter(Boolean).join(' · '), to: href({ name: 'my-learning' }) }));
  }
  return out;
}

function fromQuestions(curricula: Record<CourseId, Curriculum>, banks: Map<string, LearnQuestion>[]): Entry[] {
  const out: Entry[] = [];
  for (const c of COURSES) {
    const cur = curricula[c.id];
    const bank = banks.find((b) => b.values().next().value?.courseId === c.id);
    if (!bank) continue;
    for (const s of cur.sections)
      for (const l of s.lessons)
        for (const st of l.steps)
          for (const id of st.questionIds ?? []) {
            const q = bank.get(id);
            if (!q) continue;
            out.push(
              entry(
                { kind: 'question', key: `q:${id}`, course: c.id, title: q.prompt, sub: `${c.code} › ${l.title} · ${q.topic}`, body: [q.prompt, q.source, ...(q.options ?? [])].filter(Boolean).join(' · '), to: href({ name: 'learn', course: c.id, lesson: l.id, step: st.id }), math: true },
                q.topic
              )
            );
          }
  }
  // a question can sit in several lessons: keep its first home
  const seen = new Set<string>();
  return out.filter((e) => !seen.has(e.key) && !!seen.add(e.key));
}

// ── the index, built once per visit ─────────────────────────────────────────────────
export interface SearchIndex {
  entries: Entry[];
  phrases: Map<string, { text: string; w: number }>; // suggestion phrases, by normalised text
  questions: boolean; // the question banks are in
}

let base: Promise<SearchIndex> | null = null;
let full: Promise<SearchIndex> | null = null;

export const loadIndex = () => (base ??= loadCurricula().then((cur) => indexOf(fromCurricula(cur), false)));
// with every question in it too (loads the four question banks once)
export const loadFullIndex = () =>
  (full ??= Promise.all([loadCurricula(), loadIndex(), import('../questions').then((m) => Promise.all(COURSES.map((c) => m.loadCourseQuestions(c.id))))]).then(([cur, idx, banks]) =>
    indexOf([...idx.entries, ...fromQuestions(cur, banks.map((b) => b.byId))], true)
  ));

function indexOf(entries: Entry[], questions: boolean): SearchIndex {
  // what to suggest while typing: titles and topics, weighted by how much of the site is about them
  const phrases = new Map<string, { text: string; w: number }>();
  const add = (raw: string, w: number) => {
    const text = raw
      .replace(/\$[^$]*\$/g, '')
      .replace(/\.pdf$/i, '')
      .replace(/^[\dA-Z]{0,3}\d+\s*[-–·.:]\s*/, '')
      .replace(/\s*[([].*$/, '')
      .trim();
    const k = norm(text);
    if (k.length < 3 || k.split(' ').length > 9) return;
    const p = phrases.get(k);
    if (p) p.w += w;
    else phrases.set(k, { text, w });
  };
  for (const e of entries) {
    if (e.kind === 'lesson') add(e.title, 3);
    else if (e.kind === 'video') add(e.title, 2);
    else if (e.kind === 'document') add(e.title, 1);
    else if (e.kind === 'question') add(e.sub.split(' · ').pop() ?? '', 0.5);
    else if (e.kind === 'course') add(e.title.split(' · ')[1], 4);
  }
  return { entries, phrases, questions };
}

// ── matching ────────────────────────────────────────────────────────────────────────
function scoreOf(e: Entry, ws: string[], whole: string): number {
  let s = 0;
  for (const w of ws) {
    let best = 0;
    for (const t of e.t) if (t.startsWith(w)) best = Math.max(best, t === w ? 6 : 4);
    if (!best) for (const t of e.b) if (t.startsWith(w)) best = Math.max(best, t === w ? 2 : 1);
    if (!best) return 0;
    s += best;
  }
  const title = e.t.join(' ');
  if (title.startsWith(whole)) s += 5;
  else if (title.includes(whole)) s += 2;
  return s + KIND_BOOST[e.kind] - Math.min(4, e.t.length * 0.08);
}

export function search(idx: SearchIndex, q: string, filter: { course?: CourseId | 'all'; kind?: HitKind | 'all' } = {}): Hit[] {
  const ws = queryWords(q);
  if (!ws.length) return [];
  const whole = ws.join(' ');
  const out: Hit[] = [];
  for (const e of idx.entries) {
    if (filter.course && filter.course !== 'all' && e.course !== filter.course) continue;
    if (filter.kind && filter.kind !== 'all' && e.kind !== filter.kind) continue;
    const score = scoreOf(e, ws, whole);
    if (score > 0) out.push({ e, score });
  }
  return out.sort((a, b) => b.score - a.score);
}

// Google-style completions: phrases from the site that continue what was typed. `typed` is how much of the
// phrase the query covers, so the rest can be shown in bold.
export interface Suggestion {
  text: string;
  typed: [number, number]; // character range of the phrase the query matched
}

export function suggest(idx: SearchIndex, q: string, n = 6): Suggestion[] {
  const ws = words(q);
  if (!ws.length) return [];
  const out: (Suggestion & { w: number })[] = [];
  const seen = new Set<string>();
  for (const { text, w } of idx.phrases.values()) {
    const raw = text.split(/\s+/);
    const nw = raw.map((x) => norm(x));
    for (let i = 0; i + ws.length <= raw.length; i++) {
      const ok = ws.every((x, k) => (k < ws.length - 1 ? nw[i + k] === x : nw[i + k].startsWith(x)));
      if (!ok) continue;
      // the whole phrase from the typed words on; a long one stops at its first comma or colon
      let end = raw.length;
      if (end - i > ws.length + 6) {
        const cut = raw.findIndex((x, k) => k >= i + ws.length - 1 && /[,:;·]$/.test(x));
        end = cut >= 0 && cut < i + ws.length + 6 ? cut + 1 : i + ws.length + 6;
      }
      // lower case like a search engine, but acronyms (ODEs, EOQ, C++) stay as written
      const part = raw
        .slice(i, end)
        .map((x) => (/^[A-Z0-9+#]{2,}s?$/.test(x) ? x : x.toLowerCase()))
        .join(' ')
        .replace(/[,:;·–-]+$/, '');
      const key = norm(part).replace(/s/g, ''); // "equation" and "equations" are one suggestion
      if (seen.has(key) || key === ws.join(' ').replace(/s/g, '')) break;
      seen.add(key);
      const typedLen = raw.slice(i, i + ws.length - 1).join(' ').length + (ws.length > 1 ? 1 : 0) + Math.min(raw[i + ws.length - 1].length, q.trim().split(/\s+/).pop()!.length);
      out.push({ text: part, typed: [0, typedLen], w: w + (i === 0 ? 1 : 0) });
      break;
    }
  }
  return out.sort((a, b) => b.w - a.w || a.text.length - b.text.length).slice(0, n);
}

// a stretch of the body around the first match, never cutting through a $…$
export function snippet(text: string, ws: string[], len = 200): string {
  const re = matcher(ws);
  const m = re ? re.exec(text) : null;
  if (!m || text.length <= len) return text.length > len ? text.slice(0, len).replace(/\s+\S*$/, '') + '…' : text;
  let start = Math.max(0, m.index - 60);
  let end = Math.min(text.length, start + len);
  for (const mm of text.matchAll(/\$[^$]*\$/g)) {
    const a = mm.index!;
    const b = a + mm[0].length;
    if (start > a && start < b) start = a;
    if (end > a && end < b) end = b;
  }
  if (start > 0) start = text.indexOf(' ', start) + 1 || start;
  return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '');
}

// matches the query words at the start of words, ignoring case
export function matcher(ws: string[]): RegExp | null {
  if (!ws.length) return null;
  const esc = ws.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).sort((a, b) => b.length - a.length);
  return new RegExp(`(?<![\\p{L}\\p{N}])(${esc.join('|')})`, 'giu');
}

// ── recent searches (this browser only) ─────────────────────────────────────────────
const RECENT = 'concordia.search.recent';
export function recentSearches(): string[] {
  try {
    const r = JSON.parse(localStorage.getItem(RECENT) || '[]');
    return Array.isArray(r) ? r.filter((x) => typeof x === 'string').slice(0, 6) : [];
  } catch {
    return [];
  }
}
export function rememberSearch(q: string, remove = false) {
  const t = q.trim();
  if (t.length < 2) return;
  try {
    const next = [...(remove ? [] : [t]), ...recentSearches().filter((x) => norm(x) !== norm(t))].slice(0, 6);
    localStorage.setItem(RECENT, JSON.stringify(next));
  } catch {
    // storage blocked: nothing to remember
  }
}
