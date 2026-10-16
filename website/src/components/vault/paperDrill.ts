// Last year's midterm is drilled only from the course badge (its own Skill Drill), never inside the
// hidden folder. Both views read the same encrypted course blob and split it here.
import type { GateContent } from './vaultTypes';
import type { GateCourse } from './gateCourses';

export interface PaperDrillDef {
  exam: string; // exam id inside the course blob
  docs: string[]; // doc keys that belong to that paper (its solved guide)
}

export const PAPER_DRILL: Partial<Record<GateCourse, PaperDrillDef>> = {
  INDU211: { exam: 'M25', docs: ['m25guide'] }
};

export const paperDrillOf = (courseId: string): PaperDrillDef | undefined => PAPER_DRILL[courseId as GateCourse];

// Keep only the questions `keep` accepts, and drop every reference to the others
const filterQuestions = (c: GateContent, keep: (examId: string) => boolean, dropDocs: string[]): GateContent => {
  const ids = new Set(c.questions.filter((q) => keep(q.exam)).map((q) => q.id));
  const docs = Object.fromEntries(Object.entries(c.docs).filter(([k]) => !dropDocs.includes(k)));
  return {
    ...c,
    docs,
    exams: c.exams.filter((e) => keep(e.id)),
    questions: c.questions.filter((q) => ids.has(q.id)),
    clusters: c.clusters.map((cl) => ({ ...cl, members: cl.members.filter((m) => ids.has(m)) })).filter((cl) => cl.members.length > 0),
    formulas: c.formulas.map((f) => ({
      ...f,
      seen: f.seen.filter((s) => ids.has(s)),
      learn: f.learn && { ...f.learn, quiz: f.learn.quiz.filter((it) => it.type !== 'exam' || ids.has(it.id)) }
    })),
    videoStops: c.videoStops.map((v) => ({ ...v, gate: v.gate.filter((g) => ids.has(g)) })),
    plan: {
      ...c.plan,
      phases: c.plan.phases.map((p) => ({ ...p, steps: p.steps.filter((s) => !(s.kind === 'doc' && s.doc && dropDocs.includes(s.doc))) }))
    }
  };
};

// The hidden folder: everything except last year's paper
export const withoutPaper = (c: GateContent, def: PaperDrillDef): GateContent => filterQuestions(c, (e) => e !== def.exam, def.docs);

// The badge drill: last year's paper only. Lesson practice is trimmed to that paper's questions so the
// Skill Drill pool is exactly the paper.
export const onlyPaper = (c: GateContent, def: PaperDrillDef): GateContent => {
  const p = filterQuestions(c, (e) => e === def.exam, []);
  return {
    ...p,
    formulas: p.formulas.map((f) => ({ ...f, learn: f.learn && { ...f.learn, quiz: f.learn.quiz.filter((it) => it.type === 'exam') } }))
  };
};
