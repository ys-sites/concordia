// "Build your own quiz": every exam-prep question on the subtopics a student picks, sorted into four types
// (repeated on past papers · similar · asked once · other possible) from the course's exam-prep data, then
// spread across the subtopics so no single one takes over the quiz.
import type { CourseId } from '../../types';
import type { GateContent } from '../../data/gates/types';

export type QuizCat = 'repeat' | 'similar' | 'once' | 'possible';
export const QUIZ_CATS: QuizCat[] = ['repeat', 'similar', 'once', 'possible'];

export const CAT_INFO: Record<QuizCat, { title: string; short: string; desc: string }> = {
  repeat: { title: 'Repeated on past papers', short: 'Repeated', desc: 'Asked on two or more papers, word for word or with new numbers. The highest-value questions.' },
  similar: { title: 'Similar questions', short: 'Similar', desc: 'The same idea from a new angle: fresh-number versions of exam questions and their twins on finals and tutorials.' },
  once: { title: 'Asked once', short: 'Asked once', desc: 'One-off questions from a single past paper, so nothing catches you off guard.' },
  possible: { title: 'Other possible questions', short: 'Possible', desc: 'Lecture examples, textbook-style problems and concept checks that have not been asked yet but could be.' }
};

export interface PoolEntry {
  id: string; // LearnQuestion id
  cat: QuizCat;
  topic: string;
  src: 'exam' | 'notes'; // where the question comes from: a previous exam, or the class notes & tutorials
  paper?: string;
  examYear?: string;
}

const MATCH_ORDER = ['exact', 'template', 'concept'] as const;

export function buildPool(course: CourseId, g: GateContent, exists: (id: string) => boolean): PoolEntry[] {
  // past papers: midterms, in-class quizzes and the finals that count
  const papers = new Set(g.exams.filter((e) => e.kind === 'midterm' || e.kind === 'quiz' || e.counts).map((e) => e.id));
  const examOf = new Map(g.questions.map((q) => [q.id, q.exam]));
  const homework = new Set(g.exams.filter((e) => e.kind === 'homework').map((e) => e.id));
  const clustersOf = new Map<string, GateContent['clusters']>();
  for (const cl of g.clusters) for (const m of cl.members) clustersOf.set(m, [...(clustersOf.get(m) ?? []), cl]);
  // repeated: a repeat group that spans two or more (non-homework) papers
  const repeatType = (qid: string) => {
    const types = (clustersOf.get(qid) ?? [])
      .filter((cl) => new Set(cl.members.map((m) => examOf.get(m)).filter((e) => e && !homework.has(e))).size >= 2)
      .map((cl) => cl.match);
    return MATCH_ORDER.find((t) => types.includes(t)) ?? null;
  };

  const out: PoolEntry[] = [];
  for (const t of g.topics) {
    for (const q of g.questions) {
      if (q.topic !== t.id || q.drill === false) continue;
      const id = `x:${course}:${q.id}`;
      if (!exists(id)) continue;
      let cat: QuizCat;
      const fromExam = papers.has(q.exam);
      if (fromExam) {
        const rt = repeatType(q.id);
        cat = rt === 'exact' || rt === 'template' ? 'repeat' : rt === 'concept' ? 'similar' : 'once';
      } else {
        // a final or tutorial question in a repeat group with a past-paper question is its twin
        const twin = (clustersOf.get(q.id) ?? []).some((cl) => cl.members.some((m) => m !== q.id && papers.has(examOf.get(m) ?? '')));
        cat = twin ? 'similar' : 'possible';
      }
      const examYear = q.exam === 'F17' ? '2017' : q.exam === 'F24' ? '2024' : q.exam === 'A25' ? '2025' : q.exam === 'W26' ? '2026' : 'other';
      out.push({ id, cat, topic: t.id, src: fromExam ? 'exam' : 'notes', paper: q.exam, examYear: fromExam ? examYear : undefined });
    }
    for (const f of g.formulas) {
      if (f.topic !== t.id) continue;
      (f.learn?.quiz ?? []).forEach((it, i) => {
        const id = `l:${course}:${f.id}:${i}`;
        if (it.type === 'exam' || !exists(id)) return;
        out.push({ id, cat: (it as { badge?: string }).badge === 'similar' ? 'similar' : 'possible', topic: t.id, src: 'notes' });
      });
    }
  }
  if (course === 'MIAE221') {
    const MIAE221_TEACHER_TOPIC_MAP: Record<number, string> = {
      1: 'planes', 2: 'planes', 3: 'planes', 4: 'ldpd', 5: 'diffmech', 6: 'diffmech',
      7: 'tensile', 8: 'tensile', 9: 'elastic', 10: 'tensile', 11: 'tensile', 12: 'tensile',
      13: 'tensile', 14: 'tensile', 15: 'elastic', 16: 'tensile', 17: 'bonding', 18: 'tensile',
      19: 'tensile', 20: 'defects', 21: 'slip', 22: 'directions', 23: 'bonding', 24: 'diffmech',
      25: 'cells', 26: 'diffmech', 27: 'slip', 28: 'directions', 29: 'fick1', 30: 'density',
      31: 'slip', 32: 'defects', 33: 'defects', 34: 'tensile', 35: 'solidsol', 36: 'solidsol',
      37: 'bonding', 38: 'defects', 39: 'diffmech', 40: 'cells'
    };
    for (let n = 1; n <= 40; n++) {
      const qId = `TX_MIAE221_2017_Q${String(n).padStart(2, '0')}`;
      const id = `t:${qId}`;
      if (exists(id)) {
        const topic = MIAE221_TEACHER_TOPIC_MAP[n] || 'planes';
        out.push({ id, cat: 'repeat', topic, src: 'exam', paper: '2017', examYear: '2017' });
      }
    }
  }
  return out;
}

const shuffle = <T,>(a: T[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

// n questions spread across the chosen subtopics in turn, repeated ones first within each subtopic
export function pickQuiz(pool: PoolEntry[], n: number, order: 'notes' | 'mixed', topicOrder: string[]): PoolEntry[] {
  const rank: Record<QuizCat, number> = { repeat: 0, similar: 1, once: 2, possible: 3 };
  const groups = topicOrder.map((t) => shuffle(pool.filter((e) => e.topic === t)).sort((a, b) => rank[a.cat] - rank[b.cat])).filter((g) => g.length);
  const picked: PoolEntry[] = [];
  while (picked.length < n && groups.some((g) => g.length))
    for (const g of groups) {
      const e = g.shift();
      if (e) picked.push(e);
      if (picked.length >= n) break;
    }
  if (order === 'mixed') return shuffle(picked);
  const pos = new Map(topicOrder.map((t, i) => [t, i]));
  return picked.sort((a, b) => (pos.get(a.topic) ?? 0) - (pos.get(b.topic) ?? 0));
}
