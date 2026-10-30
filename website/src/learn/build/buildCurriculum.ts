// Builds each course's curriculum from its hand-written spec (learn/curriculum/*.ts) and the course data.
// Pure and synchronous: Vite runs it at build time (virtual:curriculum) and scripts/validate-curriculum.ts runs
// it to fail the build when a question, video or document has no home, or a spec points at nothing.
import type { CourseId, PracticeQuestion } from '../../types';
import type { GateContent, Formula, Question as GateQuestion, LectureRef } from '../../data/gates/types';
import type { CourseSpec, LessonSpec, SectionSpec, StepSpec, BankRule, DrillRule } from '../curriculum/types';
import type { Curriculum, DocRef, Lesson, ResourceGroup, Section, Step, VideoCard } from '../model';
import type { VideoSource } from '../videoSources';
import { genericExamSource } from '../examLabel';
import { parseSolveVideoId, solveVideoId } from '../solveVideoId';

export interface DrillQuestion extends PracticeQuestion {
  methodId: string;
}

export interface YouTubeCompanion {
  id?: string;
  youtubeId: string;
  videoTitle: string;
  channel: string;
  duration: string;
  subtopicTitle: string;
  keyTakeaways?: string[];
}

export interface BuildInput {
  bank: PracticeQuestion[];
  teacher: PracticeQuestion[];
  drill: DrillQuestion[];
  gates: Record<CourseId, GateContent>;
  docs: string[]; // every published PDF (relative paths)
  videos: VideoSource[];
  youtube221: YouTubeCompanion[];
}

export interface BuildReport {
  courseId: CourseId;
  orphanQuestions: string[];
  orphanVideos: string[];
  duplicateVideos: string[];
  problems: string[];
}

const COURSE_DIR: Record<CourseId, string> = { ENGR213: 'Engr 213', INDU211: 'Indu 211', MIAE215: 'Miae 215', MIAE221: 'Miae 221' };

const fileTitle = (p: string) => p.split('/').pop()!.replace(/\.pdf$/i, '');
const folderTitle = (f: string) => f.replace(/^\d+\s*-\s*/, '').replace(/_/g, ' ');
const parseLen = (len: string) => {
  const m = len.match(/(\d+):(\d+)/);
  return m ? Number(m[1]) + Number(m[2]) / 60 : 6;
};
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// lesson practice items that reference a past-exam question are that question, not a new item
const isItem = (f: Formula, i: number) => f.learn!.quiz[i].type !== 'exam';
const itemId = (c: CourseId, f: Formula, i: number) => `l:${c}:${f.id}:${i}`;
const examQid = (c: CourseId, id: string) => `x:${c}:${id}`;
const gordonQid = (paper: string, q: string) => `g:MIAE215:${paper}:${q}`;

export function buildCurriculum(spec: CourseSpec, input: BuildInput): { curriculum: Curriculum; report: BuildReport } {
  const c = spec.id;
  const gate = input.gates[c];
  const dir = COURSE_DIR[c] + '/';
  const docs = input.docs.filter((p) => p.startsWith(dir));
  const problems: string[] = [];
  const placed = new Set<string>(); // question ids in at least one step

  // ── documents ──────────────────────────────────────────────────────────────────
  const docRef = (path: string, page?: number, label?: string): DocRef => ({ path, title: fileTitle(path), ...(page ? { page } : {}), ...(label ? { label } : {}) });
  const matchDocs = (res: RegExp[] | undefined, where: string) =>
    (res ?? []).flatMap((re) => {
      const hits = docs.filter((p) => re.test(p.slice(dir.length)));
      if (!hits.length) problems.push(`${where}: no published document matches ${re}`);
      return hits;
    });
  const lectureDoc = (ref: LectureRef): string | null => {
    if (ref.d) {
      const d = gate.docs[ref.d];
      return d && docs.includes(d.path) ? d.path : null;
    }
    if (ref.l != null && gate.lectureMatch) {
      const re = new RegExp(gate.lectureMatch.replace('{l}', String(ref.l)), 'i');
      return docs.find((p) => p.startsWith(dir + '01 - Teacher Lecture Notes/') && re.test(fileTitle(p))) ?? null;
    }
    return null;
  };

  // ── question pools ─────────────────────────────────────────────────────────────
  const bank = input.bank.filter((q) => q.courseId === c);
  const teacher = input.teacher.filter((q) => q.courseId === c);
  const drill = c === 'ENGR213' ? input.drill : [];
  const text = (q: PracticeQuestion) => `${q.topic} ${q.question}`;
  const allLessons: LessonSpec[] = spec.sections.flatMap((s) => s.lessons);

  // two passes: specific rules (with a pattern) first, then the chapter catch-alls
  const route = <Q, R>(qs: Q[], rulesOf: (l: LessonSpec) => R[] | undefined, fits: (q: Q, r: R) => boolean, specific: (r: R) => boolean) => {
    const home = new Map<string, Q[]>();
    const rest: Q[] = [];
    for (const q of qs) {
      let hit: LessonSpec | undefined;
      for (const pass of [true, false]) {
        hit = allLessons.find((l) => (rulesOf(l) ?? []).some((r) => specific(r) === pass && fits(q, r)));
        if (hit) break;
      }
      if (hit) home.set(hit.id, [...(home.get(hit.id) ?? []), q]);
      else rest.push(q);
    }
    return { home, rest };
  };
  const bankRoute = route<PracticeQuestion, BankRule>(bank, (l) => l.bank, (q, r) => q.chapter === r.ch && (!r.re || r.re.test(text(q))) && !r.not?.test(text(q)), (r) => !!r.re);
  const drillRoute = route<DrillQuestion, DrillRule>(drill, (l) => l.drill, (q, r) => q.methodId === r.method && (!r.re || r.re.test(text(q))), (r) => !!r.re);
  const teacherHome = new Map<string, PracticeQuestion[]>();
  for (const q of teacher) {
    const l = allLessons.find((x) => x.teacher?.test(q.topic));
    if (l) teacherHome.set(l.id, [...(teacherHome.get(l.id) ?? []), q]);
  }

  // ── videos ─────────────────────────────────────────────────────────────────────
  const videoById = new Map(input.videos.filter((v) => v.courseId === c).map((v) => [v.id, v]));
  const solveFor = new Map<string, string>(); // question id → video id
  for (const v of videoById.values()) if (v.questionId) solveFor.set(v.questionId, v.id);
  for (const key of Object.keys(gate.solveVideos ?? {})) {
    const m = key.match(/^L:([^:]+):(\d+)$/);
    solveFor.set(m ? `l:${c}:${m[1]}:${m[2]}` : examQid(c, key), solveVideoId(c, key));
  }
  const stepVideoUses = new Map<string, number>();

  // ── steps ──────────────────────────────────────────────────────────────────────
  const minutesFor = (kind: Step['kind'], n = 0) =>
    kind === 'notes' ? 6 : kind === 'reading' ? 10 : kind === 'worked' ? 5 : kind === 'tool' ? 5 : kind === 'check' ? Math.max(3, Math.round(n * 1.5)) : Math.max(5, Math.round(n * 2));
  const videoStep = (lessonId: string, vid: string): Step | null => {
    const v = videoById.get(vid);
    if (!v) {
      problems.push(`${lessonId}: unknown video ${vid}`);
      return null;
    }
    stepVideoUses.set(vid, (stepVideoUses.get(vid) ?? 0) + 1);
    return { id: `${lessonId}.video-${slug(vid)}`, kind: 'video', title: v.lesson.title.replace(/^[A-Z]?\d+\s*·\s*/, ''), minutes: Math.max(1, Math.round(v.lesson.duration / 60)), videoId: vid };
  };
  const qStep = (id: string, kind: 'check' | 'practice' | 'exam', title: string, ids: string[], extra: Partial<Step> = {}): Step | null => {
    if (!ids.length) return null;
    ids.forEach((q) => placed.add(q));
    const size = extra.size ?? (kind === 'practice' ? Math.min(10, ids.length) : 0);
    return { id: `${id}.${kind}`, kind, title, minutes: minutesFor(kind, size || ids.length), questionIds: ids, size, passMark: kind === 'exam' ? 0.6 : 0.7, ...extra };
  };

  const formulasOf = (topics: string[]) => gate.formulas.filter((f) => topics.includes(f.topic));
  const examOf = (topics: string[]) => gate.questions.filter((q) => topics.includes(q.topic));
  // homework and tutorial sets are not past exams: their questions go to the practice step
  const homework = new Set(gate.exams.filter((e) => e.kind === 'homework').map((e) => e.id));

  const deriveSteps = (l: LessonSpec): Step[] => {
    const topics = l.gate ?? [];
    for (const t of topics) if (!gate.topics.some((x) => x.id === t)) problems.push(`${l.id}: unknown exam-prep topic ${t}`);
    const steps: Step[] = [];
    // the lesson's own videos, then the narrated explanation of each of its exam-prep topics
    const topicVideos = [...videoById.values()]
      .filter((v) => ((v.gateTopic && topics.includes(v.gateTopic)) || v.learnLesson === l.id) && !l.videos?.includes(v.id))
      .sort((a, b) => Number(a.lesson.num ?? 0) - Number(b.lesson.num ?? 0))
      .map((v) => v.id);
    const videos = [...(l.videos ?? []), ...topicVideos].map((v) => videoStep(l.id, v)).filter((s): s is Step => !!s);

    const fs = formulasOf(topics);
    const lecRefs = topics.flatMap((t) => gate.topics.find((x) => x.id === t)?.lec ?? []);
    const slides: DocRef[] = [];
    for (const r of [...lecRefs, ...fs.flatMap((f) => f.lec)]) {
      const p = lectureDoc(r);
      if (p && !slides.some((s) => s.path === p && s.page === r.s)) slides.push(docRef(p, r.s, r.label));
    }
    const refs = [...slides.slice(0, 8), ...matchDocs(l.read, l.id).map((p) => docRef(p))];

    // 1. Explanation of the topic
    if (videos.length) {
      steps.push({
        ...videos[0],
        id: `${l.id}.explanation`,
        title: 'Explanation of the topic',
        docs: refs.length ? refs : undefined,
        formulaIds: fs.length ? fs.map((f) => f.id) : undefined
      });
      for (let vi = 1; vi < videos.length; vi++) {
        steps.push(videos[vi]);
      }
    } else {
      steps.push({
        id: `${l.id}.explanation`,
        kind: 'notes',
        title: 'Explanation of the topic',
        minutes: minutesFor('notes'),
        docs: refs.length ? refs : undefined,
        formulaIds: fs.length ? fs.map((f) => f.id) : undefined
      });
    }

    // 2. Formula to retain
    if (fs.length) {
      steps.push({
        id: `${l.id}.formulas`,
        kind: 'notes',
        title: fs.length > 1 ? 'Formulas to retain' : 'Formula to retain',
        minutes: minutesFor('notes') + fs.length,
        formulaIds: fs.map((f) => f.id),
        docs: refs.length ? refs : undefined
      });
    }

    // 3. Example of the topic
    const worked = fs.filter((f) => f.learn?.example);
    if (worked.length) {
      steps.push({
        id: `${l.id}.worked`,
        kind: 'worked',
        title: worked.length > 1 ? 'Examples of the topic' : 'Example of the topic',
        minutes: 4 * worked.length,
        formulaIds: worked.map((f) => f.id)
      });
    }

    // Interactive tools (formula lab, C++ lab, TSP)
    for (const f of fs.filter((x) => x.calc)) {
      steps.push({
        id: `${l.id}.tool-${f.id}`,
        kind: 'tool',
        title: `Formula lab: ${f.name}`,
        minutes: minutesFor('tool'),
        toolId: `formula:${f.id}`,
        formulaIds: [f.id]
      });
    }
    for (const t of l.tools ?? []) {
      steps.push({
        id: `${l.id}.tool-${slug(t)}`,
        kind: 'tool',
        title: toolTitle(t),
        minutes: 8,
        toolId: t
      });
    }

    // 4. Practice Questions (combines understanding items, practice bank & drill questions)
    const items = fs.flatMap((f) => (f.learn?.quiz ?? []).map((it, i) => ({ f, i, it })));
    const itemIds = items.map(({ f, i }) => itemId(c, f, i));
    const bankQs = bankRoute.home.get(l.id) ?? [];
    const bankIds = bankQs.map((q) => `b:${q.id}`);
    const drillIds = (drillRoute.home.get(l.id) ?? []).map((q) => `d:${q.id}`);
    const examQs = examOf(topics);

    const practiceIds = Array.from(new Set([
      ...itemIds,
      ...bankIds,
      ...drillIds,
      ...examQs.filter((q) => homework.has(q.exam)).map((q) => examQid(c, q.id))
    ]));
    if (practiceIds.length) {
      const sPractice = qStep(l.id, 'practice', `Practice Questions (${practiceIds.length})`, practiceIds, { size: 0 });
      if (sPractice) steps.push(sPractice);
    }

    // 5. Past Midterms (separate section)
    const pastExamIds = examQs.filter((q) => !homework.has(q.exam)).map((q) => examQid(c, q.id));
    if (pastExamIds.length) {
      const sExam = qStep(l.id, 'exam', `Past Midterms (${pastExamIds.length})`, pastExamIds, { size: 0 });
      if (sExam) steps.push(sExam);
    }

    return steps;
  };

  const handSteps = (l: LessonSpec, specs: StepSpec[]): Step[] =>
    specs.flatMap((s) => {
      const id = `${l.id}.${s.slug}`;
      if (s.kind === 'extra' || s.youtubeId) {
        // Remove all youtube videos
        return [];
      }
      if (s.kind === 'video') {
        const st = s.videoId ? videoStep(l.id, s.videoId) : null;
        return st ? [{ ...st, id, title: s.title }] : [];
      }
      const ids: string[] = [];
      if (s.questions) {
        const q = s.questions;
        if (q.teacher) ids.push(...teacher.filter((t) => q.teacher!.test(t.topic)).map((t) => `t:${t.id}`));
        if (q.teacherIds) ids.push(...q.teacherIds.map((t) => `t:${t}`));
        if (q.examId) ids.push(...gate.questions.filter((x) => x.exam === q.examId).map((x) => examQid(c, x.id)));
        if (q.gordonPaper) {
          const p = gate.gordonExamsData?.papers.find((x) => x.id === q.gordonPaper);
          if (!p) problems.push(`${id}: unknown Gordon paper ${q.gordonPaper}`);
          ids.push(...(p?.questions ?? []).map((x) => gordonQid(p!.id, x.id)));
        }
        if (q.ids) ids.push(...q.ids);
        if (!ids.length) problems.push(`${id}: question selector matches nothing`);
      }
      if (s.kind === 'check' || s.kind === 'practice' || s.kind === 'exam') {
        const st = qStep(l.id, s.kind, s.title, ids, { size: s.size, timeLimit: s.timeLimit, ordered: s.ordered });
        return st ? [{ ...st, id }] : [];
      }
      const d = matchDocs(s.docs, id).map((p) => docRef(p));
      return [{ id, kind: s.kind, title: s.title, minutes: s.minutes ?? minutesFor(s.kind), optional: s.optional, docs: d.length ? d : undefined, notesKey: s.notesKey, toolId: s.toolId }];
    });

  const toLesson = (l: LessonSpec, exam = false): Lesson => {
    const steps = l.steps ? handSteps(l, l.steps) : [...deriveSteps(l), ...handSteps(l, l.after ?? [])];
    if (!steps.length) problems.push(`${l.id}: lesson has no steps`);
    const fs = formulasOf(l.gate ?? []);
    const firstVideo = steps.find((s) => s.videoId && videoById.has(s.videoId));
    const resources = matchDocs(l.resources, `${l.id} resources`).map((p) => docRef(p));
    const lead = steps[0];
    if (lead && (lead.kind === 'video' || lead.kind === 'extra' || lead.kind === 'notes') && resources.length && !l.steps)
      lead.docs = [...(lead.docs ?? []), ...resources.filter((r) => !lead.docs?.some((d) => d.path === r.path))];
    return {
      id: l.id,
      title: l.title,
      summary: l.summary,
      objectives: l.objectives ?? fs.map((f) => f.name),
      topicTags: [...(l.gate ?? []), l.id],
      minutes: steps.filter((s) => !s.optional).reduce((n, s) => n + s.minutes, 0),
      steps,
      ...(exam ? { exam: true } : {}),
      ...(firstVideo ? { thumb: videoById.get(firstVideo.videoId!)!.lesson.poster } : {}),
      ...(resources.length ? { resources } : {})
    };
  };
  const toSection = (s: SectionSpec): Section => ({
    id: s.id,
    title: s.title,
    subtitle: s.subtitle,
    ...(s.midterm ? { midterm: true } : {}),
    ...(s.examPrep ? { examPrep: true } : {}),
    lessons: s.lessons.map((l) => toLesson(l, !!s.examPrep))
  });

  const sections = spec.sections.map(toSection);

  // ── exam prep ──────────────────────────────────────────────────────────────────
  // the mock draws exam-style questions only: past-exam questions and the practice bank, not method drills
  const midtermPool = sections
    .filter((s) => s.midterm)
    .flatMap((s) => s.lessons.flatMap((l) => l.steps.flatMap((st) => (st.kind === 'exam' ? st.questionIds ?? [] : st.kind === 'practice' ? (st.questionIds ?? []).filter((q) => q.startsWith('b:')) : []))));
  const papers: Lesson[] = gate.exams
    .map((e) => ({ e, qs: gate.questions.filter((q) => q.exam === e.id) }))
    .filter(({ qs }) => qs.length)
    .map(({ e, qs }) => {
      const id = `paper-${slug(e.id)}`;
      const st = qStep(id, 'exam', `Sit the paper (${qs.length} questions)`, qs.map((q) => examQid(c, q.id)), { ordered: true, timeLimit: Math.max(10, qs.length * 6) })!;
      return { id, title: e.label, summary: e.detail, objectives: [], topicTags: [...new Set(qs.map((q: GateQuestion) => q.topic))], minutes: st.minutes, steps: [st], exam: true };
    });
  const insights: Lesson = {
    id: 'exam-insights',
    title: 'How the exam is built',
    summary: gate.overview.headline,
    objectives: gate.overview.points.slice(0, 4),
    topicTags: [],
    minutes: 10,
    exam: true,
    steps: [
      { id: 'exam-insights.overview', kind: 'notes', title: 'What to expect', minutes: 5, notesKey: 'overview' },
      { id: 'exam-insights.clusters', kind: 'notes', title: `What repeats on past papers (${gate.clusters.length} patterns)`, minutes: 5, notesKey: 'clusters' }
    ]
  };
  const mock: Lesson = {
    id: 'mock-midterm',
    title: spec.examPrep.mock.title,
    summary: `${spec.examPrep.mock.size} questions drawn from every midterm lesson, timed at ${spec.examPrep.mock.minutes} minutes, marked at the end like the real thing.`,
    objectives: [],
    topicTags: [],
    minutes: spec.examPrep.mock.minutes,
    exam: true,
    steps: [{ id: 'mock-midterm.exam', kind: 'exam', title: 'Timed mock midterm', minutes: spec.examPrep.mock.minutes, questionIds: [...new Set(midtermPool)], size: spec.examPrep.mock.size, timeLimit: spec.examPrep.mock.minutes, passMark: 0.6 }]
  };
  const bankPast: Lesson[] = spec.examPrep.bankPast.map((b) => {
    const ids = bank.filter((q) => q.chapter === b.ch).map((q) => `b:${q.id}`);
    if (!ids.length) problems.push(`exam prep: practice-bank chapter ${b.ch} is empty`);
    const id = `bank-${slug(b.ch)}`;
    const practice = qStep(id, 'practice', `Practice (${ids.length} questions)`, ids);
    const timed = qStep(id, 'exam', `Timed set (${Math.min(10, ids.length)} questions)`, ids, { size: Math.min(10, ids.length), timeLimit: 25 });
    const steps = [practice, timed && { ...timed, id: `${id}.timed` }].filter((s): s is Step => !!s);
    return { id, title: b.title, summary: b.summary, objectives: [], topicTags: [], minutes: steps.reduce((n, s) => n + s.minutes, 0), steps, exam: true };
  });
  // Past papers are never listed as lessons: their questions live on inside Build your own quiz
  // (the "Previous exams" source), so no exam document is browsable on the site. The paper lessons
  // are still built above, which keeps every exam question placed in the coverage report.
  void papers;
  sections.push({
    id: 'exam-prep',
    title: 'Exam prep: mock midterm & practice',
    subtitle: 'mock midterm · exam-style practice · build your own quiz',
    examPrep: true,
    lessons: [insights, mock, ...bankPast]
  });
  for (const s of spec.examPrep.extra ?? []) sections.push(toSection({ ...s, examPrep: true }));

  // ── placement checks ───────────────────────────────────────────────────────────
  const all = [
    ...bank.map((q) => `b:${q.id}`),
    ...teacher.map((q) => `t:${q.id}`),
    ...drill.map((q) => `d:${q.id}`),
    ...gate.questions.map((q) => examQid(c, q.id)),
    ...gate.formulas.flatMap((f) => (f.learn?.quiz ?? []).map((_, i) => (isItem(f, i) ? itemId(c, f, i) : null)).filter((x): x is string => !!x)),
    ...(gate.gordonExamsData?.papers ?? []).flatMap((p) => p.questions.map((q) => gordonQid(p.id, q.id)))
  ];
  const orphanQuestions = all.filter((q) => !placed.has(q));

  // ── video cards: one home per video ────────────────────────────────────────────
  const videos: VideoCard[] = [];
  const homed = new Set<string>();
  for (const s of sections)
    for (const l of s.lessons)
      for (const st of l.steps) {
        if (st.videoId && !homed.has(st.videoId)) {
          const v = videoById.get(st.videoId)!;
          homed.add(st.videoId);
          videos.push({ id: v.id, kind: v.kind, title: v.lesson.title, source: v.lesson.source, seconds: v.lesson.duration, poster: v.lesson.poster, chapters: v.lesson.chapters.length, sectionId: s.id, lessonId: l.id, stepId: st.id });
        }
        if (st.youtube && !homed.has(`yt:${st.youtube.id}`)) {
          homed.add(`yt:${st.youtube.id}`);
          videos.push({ id: `yt:${st.youtube.id}`, kind: 'extra', title: st.youtube.title, source: st.youtube.channel, seconds: Math.round(parseLen(st.youtube.len) * 60), sectionId: s.id, lessonId: l.id, stepId: st.id });
        }
        for (const q of st.questionIds ?? []) {
          const vid = solveFor.get(q);
          if (!vid || homed.has(vid)) continue;
          homed.add(vid);
          const solve = parseSolveVideoId(vid);
          const v = solve ? gate.solveVideos?.[solve.key] : videoById.get(vid)?.lesson;
          if (v) videos.push({ id: vid, kind: 'solution', title: v.title, source: solve ? genericExamSource(v.source) : v.source, seconds: v.duration, poster: v.poster, chapters: v.chapters.length, sectionId: s.id, lessonId: l.id, stepId: st.id, questionId: q });
        }
      }
  const orphanVideos = [...[...videoById.keys()].filter((v) => !homed.has(v)), ...Object.keys(gate.solveVideos ?? {}).map((k) => solveVideoId(c, k)).filter((v) => !homed.has(v))];
  const duplicateVideos = [...stepVideoUses].filter(([, n]) => n > 1).map(([v]) => v);
  for (const v of videoById.values()) if (v.kind === 'solution' && stepVideoUses.has(v.id)) duplicateVideos.push(`${v.id} (solution video also used as a lesson step)`);

  // ── resources: every published PDF, by folder ──────────────────────────────────
  const groups = new Map<string, DocRef[]>();
  for (const p of docs) {
    const folder = p.slice(dir.length).split('/')[0];
    const key = p.slice(dir.length).includes('/') ? folder : 'Course files';
    groups.set(key, [...(groups.get(key) ?? []), docRef(p)]);
  }
  const resources: ResourceGroup[] = [...groups]
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([f, d]) => ({ title: folderTitle(f), docs: d.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true })) }));

  const lessons = sections.flatMap((s) => s.lessons);
  const steps = lessons.flatMap((l) => l.steps);
  const curriculum: Curriculum = {
    id: c,
    midterm: { label: gate.midterm.label, date: gate.midterm.date, scope: gate.midterm.scope },
    whatYouLearn: spec.whatYouLearn,
    sections,
    videos,
    resources,
    stats: {
      sections: sections.length,
      lessons: lessons.length,
      steps: steps.length,
      minutes: lessons.reduce((n, l) => n + l.minutes, 0),
      videos: videos.length,
      videoMinutes: Math.round(videos.reduce((n, v) => n + v.seconds, 0) / 60),
      questions: placed.size,
      documents: docs.length
    }
  };
  return { curriculum, report: { courseId: c, orphanQuestions, orphanVideos, duplicateVideos, problems } };
}

export const toolTitle = (t: string) =>
  t.startsWith('cpp-lab') ? 'C++ code lab: write and run it' : t.startsWith('cpp-sim') ? 'Step through the code' : t === 'tsp' ? 'TSP routing simulator' : t === 'classifier' ? 'Method classifier' : t === 'crystal-lab:unit-cells' ? 'Crystal Lab: explore the unit cell in 3D' : t === 'crystal-lab:directions' ? 'Direction Explorer: from two points to [uvw]' : t === 'crystal-lab:planes' ? 'Miller Plane Explorer: from intercepts to (hkl)' : t.startsWith('crystal-lab:') ? 'Crystal Lab: explore in 3D' : 'Interactive tool';
