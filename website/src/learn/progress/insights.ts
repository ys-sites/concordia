// What the progress data says: what is due for review, how strong each topic is, how ready a course is, and
// what to do next (with the reason). Rule-based, explainable, computed in the browser.
import type { CourseId } from '../../types';
import { questionCourse, type Curriculum, type Lesson, type Step } from '../model';
import type { Attempt, ProgressState, QuestionStat } from './store';
import { isDone, lessonProgress, stepsOf } from '../data';

export const daysUntil = (isoDate: string) => {
  const d = new Date(isoDate + 'T12:00:00');
  const now = new Date();
  now.setHours(12, 0, 0, 0);
  return Math.round((d.getTime() - now.getTime()) / 86_400_000);
};

export const DAILY_REVIEW_LIMIT = 20;
const DAY = 86_400_000;

export type ReviewReason = 'leitner' | 'weak' | 'stale';

export interface ReviewQueueItem {
  id: string;
  course: CourseId | null;
  lessonId?: string;
  reason: ReviewReason;
}

export interface ReviewQueueOptions {
  course?: CourseId;
  limit?: number;
  curricula?: Curriculum[];
  examDates?: Partial<Record<CourseId, string | null | undefined>>;
  now?: number;
}

interface RankedReview extends ReviewQueueItem {
  score: number;
  due: number;
}

const isoDaysFrom = (iso: string | null | undefined, now: number) => {
  if (!iso) return null;
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day) return null;
  const target = new Date(year, month - 1, day, 12);
  const current = new Date(now);
  current.setHours(12, 0, 0, 0);
  return Math.round((target.getTime() - current.getTime()) / DAY);
};

const examPriority = (iso: string | null | undefined, inScope: boolean, now: number) => {
  const left = isoDaysFrom(iso, now);
  if (left === null || left < 0 || left > 30) return 0;
  const urgency = left <= 3 ? 4 : left <= 7 ? 3 : left <= 14 ? 2 : 1;
  return urgency * (inScope ? 1_500 : 500);
};

// A single, explainable daily queue. Due Leitner cards lead; if there is room, weak (<60%) and
// stale (7+ days) lesson pools replenish it with at most five questions from each topic.
export function reviewQueue(questions: Record<string, QuestionStat>, options: ReviewQueueOptions = {}): ReviewQueueItem[] {
  const now = options.now ?? Date.now();
  const limit = Math.max(0, Math.min(DAILY_REVIEW_LIMIT, options.limit ?? DAILY_REVIEW_LIMIT));
  const curricula = options.curricula ?? [];
  const location = new Map<string, { course: CourseId; lessonId: string; midterm: boolean }>();
  for (const cur of curricula)
    for (const section of cur.sections)
      for (const lesson of section.lessons)
        for (const id of new Set(lesson.steps.flatMap((step) => step.questionIds ?? [])))
          if (!location.has(id)) location.set(id, { course: cur.id, lessonId: lesson.id, midterm: !!section.midterm });

  const ranked = new Map<string, RankedReview>();
  const put = (item: RankedReview) => {
    const prior = ranked.get(item.id);
    if (!prior || item.score > prior.score) ranked.set(item.id, item);
  };

  for (const [id, stat] of Object.entries(questions)) {
    const where = location.get(id);
    const course = stat.course ?? where?.course ?? questionCourse(id);
    if (options.course && course !== options.course) continue;
    const due = stat.seen > 0 && stat.box < 5 && stat.due <= now;
    if (!stat.flagged && !due) continue;
    const overdueDays = due ? Math.min(30, Math.max(0, Math.floor((now - stat.due) / DAY))) : 0;
    const score =
      (stat.flagged ? 100_000 : 0) +
      (stat.last === 0 ? 50_000 : 0) +
      (stat.unsure ? 20_000 : 0) +
      (due ? 10_000 : 0) +
      (5 - Math.min(5, Math.max(1, stat.box))) * 400 +
      overdueDays * 20 +
      (course ? examPriority(options.examDates?.[course], where?.midterm ?? false, now) : 0);
    put({ id, course, lessonId: where?.lessonId, reason: 'leitner', score, due: stat.due });
  }

  // Refill questions are not recycled again on the same calendar day. A wrong/flagged card can still
  // remain in the Leitner portion above, but every id is unique in the returned queue.
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  for (const cur of curricula) {
    if (options.course && cur.id !== options.course) continue;
    for (const section of cur.sections) {
      for (const lesson of section.lessons) {
        const ids = [...new Set(lesson.steps.flatMap((step) => step.questionIds ?? []))];
        if (!ids.length) continue;
        const seen = ids.map((id) => questions[id]).filter((q): q is QuestionStat => !!q && q.seen > 0);
        if (!seen.length) continue;
        const accuracy = seen.filter((q) => q.last === 1).length / seen.length;
        const lastAt = Math.max(...seen.map((q) => q.lastAt || 0));
        const weak = accuracy < 0.6;
        const stale = lastAt > 0 && now - lastAt >= 7 * DAY;
        if (!weak && !stale) continue;

        const topicScore =
          (weak ? Math.round((0.6 - accuracy) * 8_000) + 4_000 : 0) +
          (stale ? Math.min(2_500, Math.floor((now - lastAt) / DAY) * 80) : 0) +
          examPriority(options.examDates?.[cur.id], !!section.midterm, now);
        const candidates = ids
          .filter((id) => !ranked.has(id))
          .filter((id) => !questions[id]?.lastAt || questions[id].lastAt < todayStart.getTime())
          .sort((a, b) => {
            const qa = questions[a];
            const qb = questions[b];
            return (
              Number(!!qb?.flagged) - Number(!!qa?.flagged) ||
              Number(qb?.last === 0) - Number(qa?.last === 0) ||
              (qa?.seen ?? 0) - (qb?.seen ?? 0) ||
              (qa?.lastAt ?? 0) - (qb?.lastAt ?? 0) ||
              a.localeCompare(b)
            );
          })
          .slice(0, 5);
        for (const [index, id] of candidates.entries()) {
          const stat = questions[id];
          put({
            id,
            course: cur.id,
            lessonId: lesson.id,
            reason: weak ? 'weak' : 'stale',
            score: topicScore + (stat?.last === 0 ? 2_000 : 0) + (5 - index) * 10,
            due: stat?.due ?? Number.MAX_SAFE_INTEGER
          });
        }
      }
    }
  }

  return [...ranked.values()]
    .sort((a, b) => b.score - a.score || a.due - b.due || a.id.localeCompare(b.id))
    .slice(0, limit)
    .map(({ score: _score, due: _due, ...item }) => item);
}

// Kept as the compact id-only API used by quiz launchers and older callers.
export function dueForReview(questions: Record<string, QuestionStat>, course?: CourseId, limit = DAILY_REVIEW_LIMIT, curricula?: Curriculum[], examDates?: ReviewQueueOptions['examDates']): string[] {
  return reviewQueue(questions, { course, limit, curricula, examDates }).map((item) => item.id);
}

export interface StudyPlanTask {
  id: string;
  kind: 'lesson' | 'review';
  title: string;
  minutes: number;
  lessonId?: string;
  stepId?: string;
  questionCount?: number;
}

export interface StudyPlanDay {
  iso: string;
  minutes: number;
  tasks: StudyPlanTask[];
}

export interface StudyPlan {
  days: StudyPlanDay[];
  daysAvailable: number;
  minutesPerDay: number;
  totalMinutes: number;
  availableMinutes: number;
  unscheduledMinutes: number;
  finishable: boolean;
  remainingLessons: number;
  reviewQuestions: number;
  finishDate: string | null;
}

const localIso = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

// Turns unfinished required steps plus today's review queue into a concrete calendar. The exam date is
// exclusive (study runs through the day before it), except that an exam today still gets one urgent block.
export function buildStudyPlan(
  cur: Curriculum,
  p: ProgressState,
  reviewIds: string[],
  examDate: string,
  hoursPerDay: number,
  scope: 'midterm' | 'final' = 'midterm',
  now = new Date()
): StudyPlan | null {
  const [year, month, day] = examDate.split('-').map(Number);
  if (!year || !month || !day) return null;
  const exam = new Date(year, month - 1, day, 12);
  const start = new Date(now);
  start.setHours(12, 0, 0, 0);
  const left = Math.round((exam.getTime() - start.getTime()) / DAY);
  if (left < 0) return null;

  const daysAvailable = Math.max(1, left);
  const minutesPerDay = Math.max(15, Math.round(Math.min(12, Math.max(0.25, hoursPerDay)) * 60));
  const scopedSections = scope === 'midterm' && cur.sections.some((section) => section.midterm) ? cur.sections.filter((section) => section.midterm) : cur.sections;
  const tasks: StudyPlanTask[] = [];
  if (reviewIds.length) {
    tasks.push({
      id: `review-${cur.id}`,
      kind: 'review',
      title: `Review ${reviewIds.length} priority question${reviewIds.length === 1 ? '' : 's'}`,
      minutes: Math.max(5, Math.ceil(reviewIds.length * 1.5)),
      questionCount: reviewIds.length
    });
  }

  const remainingLessonIds = new Set<string>();
  for (const section of scopedSections)
    for (const lesson of section.lessons)
      for (const step of lesson.steps)
        if (!step.optional && !isDone(p.steps, cur.id, step)) {
          remainingLessonIds.add(lesson.id);
          tasks.push({
            id: `${lesson.id}/${step.id}`,
            kind: 'lesson',
            title: `${lesson.title}: ${step.title}`,
            minutes: Math.max(1, step.minutes),
            lessonId: lesson.id,
            stepId: step.id
          });
        }

  const totalMinutes = tasks.reduce((sum, task) => sum + task.minutes, 0);
  const availableMinutes = daysAvailable * minutesPerDay;
  const queue = tasks.map((task) => ({ task, remaining: task.minutes }));
  const days: StudyPlanDay[] = [];
  for (let index = 0; index < daysAvailable && queue.length; index++) {
    let capacity = minutesPerDay;
    const scheduled: StudyPlanTask[] = [];
    while (capacity > 0 && queue.length) {
      const current = queue[0];
      const chunk = Math.min(capacity, current.remaining);
      scheduled.push({ ...current.task, id: `${current.task.id}-${current.task.minutes - current.remaining}`, minutes: chunk });
      current.remaining -= chunk;
      capacity -= chunk;
      if (current.remaining <= 0) queue.shift();
    }
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    days.push({ iso: localIso(date), minutes: minutesPerDay - capacity, tasks: scheduled });
  }

  const unscheduledMinutes = queue.reduce((sum, item) => sum + item.remaining, 0);
  return {
    days,
    daysAvailable,
    minutesPerDay,
    totalMinutes,
    availableMinutes,
    unscheduledMinutes,
    finishable: unscheduledMinutes === 0,
    remainingLessons: remainingLessonIds.size,
    reviewQuestions: reviewIds.length,
    finishDate: unscheduledMinutes === 0 && days.length ? days[days.length - 1].iso : null
  };
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
      const strength: Strength = accuracy === null ? 'new' : accuracy < 0.6 ? 'weak' : answered < 3 ? 'new' : accuracy >= 0.8 ? 'strong' : 'okay';
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

const firstOf = (l: Lesson, kinds: Step['kind'][]) => l.steps.find((s) => kinds.includes(s.kind));

// Rule-based suggestions, each with the reason it was made
// exam: the next midterm or final from the reminders (src/learn/reminders.ts)
export function suggestions(cur: Curriculum, p: ProgressState, exam: { date: string; title: string } | null | undefined): Suggestion[] {
  const out: Suggestion[] = [];
  const mastery = masteryByLesson(cur, p);
  const now = Date.now();

  for (const m of mastery.filter((x) => x.strength === 'weak').sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0)).slice(0, 2)) {
    const practice = firstOf(m.lesson, ['practice', 'check']);
    out.push({
      kind: 'weak',
      title: `Practise ${m.lesson.title} again`,
      why: `You got ${m.right} of ${m.answered} right (${Math.round((m.accuracy ?? 0) * 100)}%) on ${m.lesson.title}.`,
      course: cur.id,
      lessonId: m.lesson.id,
      stepId: practice?.id,
      minutes: practice?.minutes
    });
  }

  for (const m of mastery.filter((x) => x.strength !== 'new' && x.lastAt && now - x.lastAt >= 7 * DAY).sort((a, b) => a.lastAt - b.lastAt).slice(0, 1)) {
    const check = firstOf(m.lesson, ['check', 'practice']);
    out.push({
      kind: 'stale',
      title: `Refresh: ${m.lesson.title}`,
      why: `You last practised it ${Math.round((now - m.lastAt) / DAY)} days ago; a short check keeps it fresh.`,
      course: cur.id,
      lessonId: m.lesson.id,
      stepId: check?.id,
      minutes: check?.minutes
    });
  }

  const due = dueForReview(p.questions, cur.id, DAILY_REVIEW_LIMIT, [cur], { [cur.id]: exam?.date });
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

  if (exam) {
    const left = daysUntil(exam.date);
    if (left >= 0 && left <= 14) {
      const r = readiness(cur, p);
      out.push({
        kind: 'exam',
        title: left <= 3 ? 'Sit the timed mock midterm' : 'Work through a past paper',
        why: `${left === 0 ? `The ${exam.title.toLowerCase()} is today` : `The ${exam.title.toLowerCase()} is in ${left} day${left === 1 ? '' : 's'}`} and your readiness is ${r.pct}%.`,
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
