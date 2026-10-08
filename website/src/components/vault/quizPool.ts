// Skill Quiz pool: every question for the chosen subtopics, sorted into the four
// question types the quiz offers (repeated · similar · asked once · other possible).
import type { GateContent, QuizCat } from './vaultTypes';
import type { GateIndex } from './shared';
import { repeatTypeOf } from './shared';
import { DrillItem, fromQuestion, isDrillable, lessonItems } from './drill';

export const QUIZ_CATS: QuizCat[] = ['repeat', 'similar', 'once', 'possible'];

export const CAT_INFO: Record<QuizCat, { title: string; short: string; desc: string; cls: string }> = {
  repeat: {
    title: 'Repeated on past papers',
    short: 'Repeated',
    desc: 'Asked on two or more papers, word for word or with new numbers. The highest-value questions.',
    cls: 'exact'
  },
  similar: {
    title: 'Similar questions',
    short: 'Similar',
    desc: 'Same idea from a new angle, fresh-number versions of exam questions, and their twins on finals and tutorial sets.',
    cls: 'template'
  },
  once: {
    title: 'Asked once (different)',
    short: 'Asked once',
    desc: 'One-off questions that appeared on a single past paper, so nothing catches you off guard.',
    cls: 'concept'
  },
  possible: {
    title: 'Other possible questions',
    short: 'Possible',
    desc: 'Teacher’s lecture examples, textbook-style problems and concept checks that have not been asked yet but could be.',
    cls: 'info'
  }
};

export interface PoolEntry {
  item: DrillItem;
  cat: QuizCat;
  topic: string;
}

export const buildPool = (c: GateContent, idx: GateIndex, topics: Set<string>): PoolEntry[] => {
  const out: PoolEntry[] = [];
  const isPaper = (examId?: string) => !!examId && idx.paperIds.includes(examId);
  for (const t of c.topics) {
    if (!topics.has(t.id)) continue;
    for (const q of c.questions) {
      if (q.topic !== t.id || !isDrillable(q)) continue;
      let cat: QuizCat;
      if (isPaper(q.exam)) {
        const rt = repeatTypeOf(q.id, idx);
        cat = rt === 'exact' || rt === 'template' ? 'repeat' : rt === 'concept' ? 'similar' : 'once';
      } else {
        // a final or tutorial question that shares a repeat group with a past-paper question is a twin
        const twin = (idx.clustersOfQ.get(q.id) ?? []).some((cl) => cl.members.some((m) => m !== q.id && isPaper(idx.q.get(m)?.exam)));
        cat = twin ? 'similar' : 'possible';
      }
      out.push({ item: fromQuestion(q, idx), cat, topic: t.id });
    }
    for (const f of c.formulas) {
      if (f.topic !== t.id) continue;
      for (const it of lessonItems(f, idx)) {
        if (it.qid) continue; // exam questions are already in the pool
        out.push({ item: it, cat: it.badge === 'similar' ? 'similar' : 'possible', topic: t.id });
      }
    }
  }
  return out;
};

const shuffle = <T,>(a: T[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

// Pick n entries spread across the chosen subtopics (round-robin), repeats first within each subtopic.
export const pickQuiz = (pool: PoolEntry[], n: number, order: 'notes' | 'mixed', topicOrder: string[]): PoolEntry[] => {
  const rank: Record<QuizCat, number> = { repeat: 0, similar: 1, once: 2, possible: 3 };
  const groups = topicOrder
    .map((t) => shuffle(pool.filter((e) => e.topic === t)).sort((a, b) => rank[a.cat] - rank[b.cat]))
    .filter((g) => g.length);
  const picked: PoolEntry[] = [];
  while (picked.length < n && groups.some((g) => g.length)) {
    for (const g of groups) {
      const e = g.shift();
      if (e) picked.push(e);
      if (picked.length >= n) break;
    }
  }
  if (order === 'mixed') return shuffle(picked);
  const pos = new Map(topicOrder.map((t, i) => [t, i]));
  return picked.sort((a, b) => (pos.get(a.topic) ?? 0) - (pos.get(b.topic) ?? 0));
};
