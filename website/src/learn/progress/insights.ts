// What the progress data says: what is due for review, how strong each topic is, how ready a course is, and
// what to do next (with the reason). Rule-based, explainable, computed in the browser.
import type { CourseId } from '../../types';
import type { Curriculum, Lesson, Step } from '../model';
import type { Attempt, ProgressState, QuestionStat } from './store';
import { isDone, lessonProgress, stepsOf } from '../data';

export const daysUntil = (isoDate: string) => {
  const d = new Date(isoDate + 'T12:00:00');
  const now = new Date();
  now.setHours(12, 0, 0, 0);
  return Math.round((d.getTime() - now.getTime()) / 86_400_000);
};

// Leitner review queue: questions answered wrong, or right but unsure, whose review date has come; flagged
// questions always count.
export function dueForReview(questions: Record<string, QuestionStat>, course?: CourseId): string[] {
  const now = Date.now();
  return Object.entries(questions)
    .filter(([, q]) => (!course || q.course === course) && (q.flagged || (q.seen > 0 && (q.last === 0 || q.unsure || q.box < 3) && q.due <= now)))
    .sort(([, a], [, b]) => Number(!!b.flagged) - Number(!!a.flagged) || a.box - b.box || a.due - b.due)
    .map(([id]) => id);
}

export type Strength = 'strong' | 'okay' | 'weak' | 'new';

export interface TopicMastery {
  lesson: Lesson;
  sectionTitle: string;
  answered: number;
  right: number;
  accuracy: number | null;
  strength: Strength;
  lastAt: number;
  stepsDone: number;
  stepsTotal: number;
}

// Mastery per lesson, from the latest result on each of the lesson's questions
export function masteryByLesson(cur: Curriculum, p: ProgressState): TopicMastery[] {
  const out: TopicMastery[] = [];
  for (const s of cur.sections) {
    for (const l of s.lessons) {
      const ids = new Set(l.steps.flatMap((st) => st.questionIds ?? []));
      let answered = 0;
      let right = 0;
      let lastAt = 0;
      for (const id of ids) {
        const q = p.questions[id];
        if (!q || !q.seen) continue;
        answered++;
        right += q.last;
        lastAt = Math.max(lastAt, q.lastAt);
      }
      const accuracy = answered ? right / answered : null;
      const lp = lessonProgress(cur.id, l, p.steps);
      const strength: Strength = accuracy === null || answered < 3 ? 'new' : accuracy >= 0.8 ? 'strong' : accuracy >= 0.55 ? 'okay' : 'weak';
      out.push({ lesson: l, sectionTitle: s.title, answered, right, accuracy, strength, lastAt, stepsDone: lp.done, stepsTotal: lp.total });
    }
  }
  return out;
}

// Exam readiness: the midterm lessons, each weighted by how many past-exam questions it carries, scored by mastery
// (accuracy where answered, a fraction for completed steps where not).
export function readiness(cur: Curriculum, p: ProgressState): { pct: number; covered: number; total: number } {
  const lessons = cur.sections.filter((s) => s.midterm).flatMap((s) => s.lessons);
  let score = 0;
  let weight = 0;
  let covered = 0;
  for (const l of lessons) {
    const w = 1 + (l.steps.find((st) => st.kind === 'exam')?.questionIds?.length ?? 0) / 4;
    const m = masteryByLesson({ ...cur, sections: [{ id: '', title: '', subtitle: '', lessons: [l] }] }, p)[0];
    const done = m.stepsTotal ? m.stepsDone / m.stepsTotal : 0;
    const s = m.accuracy !== null && m.answered >= 3 ? m.accuracy * 0.8 + done * 0.2 : done * 0.4;
    if (m.answered > 0 || done > 0) covered++;
    score += s * w;
    weight += w;
  }
  return { pct: weight ? Math.round((score / weight) * 100) : 0, covered, total: lessons.length };
}

export interface Suggestion {
  kind: 'weak' | 'stale' | 'review' | 'continue' | 'exam' | 'start';
  title: string;
  why: string;
  course: CourseId;
  lessonId?: string;
  stepId?: string;
  minutes?: number;
}

const DAY = 86_400_000;

const firstOf = (l: Lesson, kinds: Step['kind'][]) => l.steps.find((s) => kinds.includes(s.kind));

// Rule-based suggestions, each with the reason it was made
export function suggestions(cur: Curriculum, p: ProgressState, examDate: string | null): Suggestion[] {
  const out: Suggestion[] = [];
  const mastery = masteryByLesson(cur, p);
  const now = Date.now();

  for (const m of mastery.filter((x) => x.strength === 'weak').sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0)).slice(0, 2)) {
    const video = firstOf(m.lesson, ['video', 'notes']);
    const practice = firstOf(m.lesson, ['practice', 'check']);
    out.push({
      kind: 'weak',
      title: video ? `Rewatch “${video.title}”, then practise ${m.lesson.title.toLowerCase()}` : `Practise ${m.lesson.title.toLowerCase()} again`,
      why: `You got ${m.right} of ${m.answered} right (${Math.round((m.accuracy ?? 0) * 100)}%) on ${m.lesson.title}.`,
      course: cur.id,
      lessonId: m.lesson.id,
      stepId: (video ?? practice)?.id,
      minutes: (video?.minutes ?? 0) + (practice?.minutes ?? 0)
    });
  }

  for (const m of mastery.filter((x) => x.strength !== 'new' && x.lastAt && now - x.lastAt > 7 * DAY).sort((a, b) => a.lastAt - b.lastAt).slice(0, 1)) {
    const check = firstOf(m.lesson, ['check', 'practice']);
    out.push({
      kind: 'stale',
      title: `Refresh ${m.lesson.title.toLowerCase()}`,
      why: `You last practised it ${Math.round((now - m.lastAt) / DAY)} days ago; a short check keeps it fresh.`,
      course: cur.id,
      lessonId: m.lesson.id,
      stepId: check?.id,
      minutes: check?.minutes
    });
  }

  const due = dueForReview(p.questions, cur.id);
  if (due.length) {
    const flagged = due.filter((id) => p.questions[id]?.flagged).length;
    out.push({
      kind: 'review',
      title: `Review ${due.length} question${due.length > 1 ? 's' : ''}`,
      why: flagged ? `${flagged} flagged by you, the rest missed or answered unsure and now due again.` : 'Missed or unsure answers come back on a spaced schedule until they stick.',
      course: cur.id,
      minutes: Math.ceil(due.length * 1.5)
    });
  }

  if (examDate) {
    const left = daysUntil(examDate);
    if (left >= 0 && left <= 14) {
      const r = readiness(cur, p);
      out.push({
        kind: 'exam',
        title: left <= 3 ? 'Sit the timed mock midterm' : 'Work through a past paper',
        why: `The midterm is in ${left} day${left === 1 ? '' : 's'} and your readiness is ${r.pct}%.`,
        course: cur.id,
        lessonId: left <= 3 ? 'mock-midterm' : cur.sections.find((s) => s.examPrep)?.lessons.find((l) => l.id.startsWith('paper-'))?.id,
        minutes: left <= 3 ? 75 : 20
      });
    }
  }

  const steps = stepsOf(cur);
  const last = p.lastByCourse[cur.id];
  const next = steps.slice(last ? Math.max(0, steps.findIndex((x) => x.step.id === last.stepId)) : 0).find((x) => !x.step.optional && !isDone(p.steps, cur.id, x.step));
  if (next) {
    out.push({
      kind: last ? 'continue' : 'start',
      title: last ? `Continue: ${next.step.title}` : `Start with ${next.lesson.title}`,
      why: last ? `Next step in ${next.lesson.title}.` : 'The first lesson of the course, in the teacher’s order.',
      course: cur.id,
      lessonId: next.lesson.id,
      stepId: next.step.id,
      minutes: next.step.minutes
    });
  }
  return out;
}

export const accuracyOf = (attempts: Attempt[]) => {
  const total = attempts.reduce((n, a) => n + a.total, 0);
  return total ? attempts.reduce((n, a) => n + a.score, 0) / total : null;
};
