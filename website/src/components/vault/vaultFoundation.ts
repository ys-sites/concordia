import type { CourseWithDocs } from '../../data/coursesData';
import type { CourseDocument } from '../../types';
import type { DrillItem } from './drill';
import type { Formula, GateContent, LectureRef, Question, Topic, Video } from './vaultTypes';
import type { GateIndex } from './shared';

export interface ResolvedFoundation {
  exam: {
    title: string;
    label: string;
    doc: CourseDocument | null;
    page?: number;
    qNum?: string | number;
  } | null;
  lecture: {
    title: string;
    slideLabel: string;
    doc: CourseDocument | null;
    page?: number;
  } | null;
  guide: {
    title: string;
    doc: CourseDocument | null;
    page?: number;
  } | null;
  video: {
    video: Video;
    topicName: string;
  } | null;
}

/**
 * Finds a course document by matching relative path, filename, or partial regex.
 */
export function findCourseDoc(course: CourseWithDocs, matcher: string | RegExp): CourseDocument | null {
  if (typeof matcher === 'string') {
    const exact = course.documents.find(
      (d) => d.relativePath.toLowerCase() === matcher.toLowerCase() || d.filename.toLowerCase() === matcher.toLowerCase()
    );
    if (exact) return exact;
    const partial = course.documents.find(
      (d) => d.relativePath.toLowerCase().includes(matcher.toLowerCase()) || d.filename.toLowerCase().includes(matcher.toLowerCase())
    );
    if (partial) return partial;
    return null;
  }
  return course.documents.find((d) => matcher.test(d.relativePath) || matcher.test(d.filename)) ?? null;
}

/**
 * Creates a synthetic CourseDocument if not found in published list, ensuring onViewPdf always succeeds.
 */
export function ensureDoc(course: CourseWithDocs, path: string, title: string): CourseDocument {
  const existing = findCourseDoc(course, path);
  if (existing) return existing;
  return {
    id: `${course.id}:gate:${path}`,
    courseId: course.id,
    categoryId: 'Midterm Gate',
    categoryTitle: 'Midterm Gate',
    title,
    filename: path.split('/').pop()!,
    relativePath: path,
    tags: ['Midterm Gate'],
    summary: title
  } as CourseDocument;
}

/**
 * Resolves pedagogical foundation assets (authentic past exam, lecture notes slide,
 * comprehensive study guide, and concept video) for any drill item.
 */
export function resolveFoundationSources(
  item: DrillItem,
  content: GateContent,
  idx: GateIndex,
  course: CourseWithDocs
): ResolvedFoundation {
  const q: Question | undefined = item.qid ? idx.q.get(item.qid) : undefined;
  const topicId = item.topic || q?.topic || (item.lesson ? idx.formula.get(item.lesson)?.topic : undefined);
  const topic: Topic | undefined = topicId ? idx.topic.get(topicId) : undefined;
  const formula: Formula | undefined = item.lesson
    ? idx.formula.get(item.lesson)
    : q?.f?.[0]
    ? idx.formula.get(q.f[0])
    : undefined;

  // 1. Resolve Authentic Past Exam Document
  let examResult: ResolvedFoundation['exam'] = null;
  if (q?.exam) {
    const examDef = idx.exam.get(q.exam);
    const examLabel = examDef?.label || q.exam;
    let doc: CourseDocument | null = null;

    // Check direct doc key
    if (content.docs[q.exam]) {
      doc = ensureDoc(course, content.docs[q.exam].path, content.docs[q.exam].title);
    } else if (content.docs.pastmid && /midterm|mt|f18|w17|s19|m20|m24/i.test(q.exam + (examDef?.short || ''))) {
      doc = ensureDoc(course, content.docs.pastmid.path, content.docs.pastmid.title);
    } else if (content.docs.bank && /quiz|test|w25|s21|f21/i.test(q.exam + (examDef?.short || ''))) {
      doc = ensureDoc(course, content.docs.bank.path, content.docs.bank.title);
    } else {
      // Search in course documents by keywords
      const yearMatch = (examDef?.label || '').match(/20\d\d/);
      const year = yearMatch ? yearMatch[0] : '';
      const isMidterm = /midterm/i.test(examDef?.kind || '') || /midterm/i.test(examDef?.label || '');

      let matched = course.documents.find((d) => {
        const fn = d.filename.toLowerCase();
        if (year && fn.includes(year) && (isMidterm ? fn.includes('midterm') : fn.includes('quiz') || fn.includes('test'))) {
          return true;
        }
        return false;
      });

      if (!matched && isMidterm) {
        matched = course.documents.find((d) => /midterm.*(guide|solved|exam|solution)/i.test(d.filename));
      }

      if (matched) {
        doc = matched;
      } else {
        // Fallback to first available midterm/exam PDF
        const genericExam = course.documents.find((d) => /exam|midterm|test/i.test(d.filename));
        if (genericExam) doc = genericExam;
      }
    }

    examResult = {
      title: examLabel,
      label: `${examDef?.short || q.exam} · Q${q.n}`,
      doc,
      qNum: q.n
    };
  } else if (item.badge === 'exam' || /past exam/i.test(item.label)) {
    // Lesson item from an exam
    const genericExam = course.documents.find((d) => /exam|midterm|test/i.test(d.filename));
    if (genericExam) {
      examResult = {
        title: genericExam.title || genericExam.filename,
        label: item.label,
        doc: genericExam
      };
    }
  }

  // 2. Resolve Teacher Lecture Slide
  let lectureResult: ResolvedFoundation['lecture'] = null;
  const lectureRefs: LectureRef[] = [
    ...(formula?.lec || []),
    ...(topic?.lec || [])
  ];

  if (lectureRefs.length > 0) {
    const ref = lectureRefs[0];
    let doc: CourseDocument | null = null;
    let title = 'Teacher Lecture Notes';

    if (ref.d && content.docs[ref.d]) {
      doc = ensureDoc(course, content.docs[ref.d].path, content.docs[ref.d].title);
      title = content.docs[ref.d].title;
    } else if (ref.l !== undefined) {
      const re = new RegExp((content.lectureMatch ?? '^lecture {l}-').replace('{l}', String(ref.l)), 'i');
      const found = course.documents.find((x) => re.test(x.filename));
      if (found) {
        doc = found;
        title = found.title || found.filename;
      }
    }

    const slideLabel = ref.s ? `Slide ${ref.s}` : ref.label || 'Lecture Slides';
    lectureResult = {
      title,
      slideLabel,
      doc,
      page: ref.s
    };
  }

  // 3. Resolve Comprehensive Topic Guide / Study Notes
  let guideResult: ResolvedFoundation['guide'] = null;
  const guideName = topic?.guide || formula?.guide;

  if (guideName) {
    const found = course.documents.find(
      (x) => /Comprehensive Topic Guides/i.test(x.relativePath) && x.filename.startsWith(`${guideName} - `)
    );
    if (found) {
      guideResult = {
        title: found.title || `Expanded Topic Guide (${guideName})`,
        doc: found
      };
    }
  }

  if (!guideResult) {
    // Check known expanded docs in content.docs
    const candidateKeys = ['ch2', 'ch17', 'paradis', 'master', 'roadmap', 'g1', 'g2', 'g3', 'g4', 'g5', 'calc'];
    for (const key of candidateKeys) {
      if (content.docs[key]) {
        guideResult = {
          title: content.docs[key].title,
          doc: ensureDoc(course, content.docs[key].path, content.docs[key].title)
        };
        break;
      }
    }
  }

  // 4. Resolve Concept Video
  let videoResult: ResolvedFoundation['video'] = null;
  if (topicId) {
    const stop = content.videoStops.find((s) => s.topic === topicId);
    if (stop && stop.videos.length > 0) {
      videoResult = {
        video: stop.videos[0],
        topicName: stop.title || topic?.name || topicId
      };
    } else {
      const subj = idx.subjectOfTopic.get(topicId);
      if (subj) {
        const otherStop = content.videoStops.find((s) => subj.topics.includes(s.topic));
        if (otherStop && otherStop.videos.length > 0) {
          videoResult = {
            video: otherStop.videos[0],
            topicName: otherStop.title
          };
        }
      }
    }
  }

  return {
    exam: examResult,
    lecture: lectureResult,
    guide: guideResult,
    video: videoResult
  };
}

export interface StepItem {
  number: number;
  title: string;
  math?: string;
  explanation: string;
}

/**
 * Builds structured step-by-step mathematical derivation regardless of whether
 * the user answered correctly or incorrectly.
 */
export function buildStepByStepSolution(item: DrillItem, formula?: Formula): StepItem[] {
  // If the item already has custom steps
  if (item.steps && item.steps.length > 0) {
    return item.steps.map((st, i) => {
      // Split out potential math block if formatted as LaTeX
      const mathMatch = st.match(/\$\$?([^$]+)\$\$?/);
      let math: string | undefined;
      let text = st;

      if (mathMatch) {
        math = mathMatch[1];
        text = st.replace(/\$\$?[^$]+\$\$?/, '').trim().replace(/^[:·\-]\s*/, '');
      }

      return {
        number: i + 1,
        title: i === 0 ? 'Setup & Given Parameters' : i === item.steps!.length - 1 ? 'Final Evaluation & Result' : `Derivation Step ${i + 1}`,
        math,
        explanation: text || st
      };
    });
  }

  // If formula steps exist
  if (formula?.steps && formula.steps.length > 0) {
    return formula.steps.map((st, i) => ({
      number: i + 1,
      title: `Step ${i + 1} · Method`,
      explanation: st,
      math: i === 0 && formula.tex ? formula.tex : undefined
    }));
  }

  // Synthesize clean atomic steps
  const steps: StepItem[] = [];

  // Step 1: Formulation
  steps.push({
    number: 1,
    title: 'Problem Formulation & Governing Principle',
    explanation: formula?.meaning
      ? `Identify the governing engineering principle: ${formula.meaning}.`
      : 'Analyze given quantities, verify governing equation, and inspect constraints.',
    math: formula?.tex
  });

  // Step 2: Evaluation
  steps.push({
    number: 2,
    title: 'Algebraic / Analytical Evaluation',
    explanation: item.solution
      ? item.solution
      : item.note
      ? item.note
      : `Evaluate the expression to determine the correct result: ${item.answerText}.`
  });

  // Step 3: Conclusion & Check
  steps.push({
    number: 3,
    title: 'Conclusion & Sanity Check',
    explanation: `Confirmed correct value: ${item.answerText}. Verify units, sign, and boundary conditions.`
  });

  return steps;
}
