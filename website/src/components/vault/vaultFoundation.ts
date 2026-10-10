import type { CourseWithDocs } from '../../data/coursesData';
import type { CourseDocument } from '../../types';
import type { DrillItem } from './drill';
import type { Formula, GateContent, LectureRef, Question, Topic, Video } from './vaultTypes';
import type { GateIndex } from './shared';
import { SOLUTION_UPGRADES, EXTRA_QUESTIONS } from '../../data/questionBank';

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
export function buildStepByStepSolution(item: DrillItem, formula?: Formula, qObj?: Question): StepItem[] {
  // 1. Check verified SOLUTION_UPGRADES
  const qId = item.qid || item.key;
  const upgrade = (item.qid ? SOLUTION_UPGRADES[item.qid] : undefined) || SOLUTION_UPGRADES[item.key];
  if (upgrade?.steps && upgrade.steps.length > 0) {
    return upgrade.steps.map((st, i) => ({
      number: i + 1,
      title: st.title,
      math: st.math,
      explanation: st.note || ''
    }));
  }

  // 2. Check EXTRA_QUESTIONS matching prompt or ID
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const promptNorm = norm(item.prompt);
  const foundExtra = EXTRA_QUESTIONS.find(
    (eq) => eq.id === qId || (promptNorm.length > 15 && norm(eq.question).includes(promptNorm.slice(0, 35)))
  );
  if (foundExtra?.explanation?.steps && foundExtra.explanation.steps.length > 0) {
    return foundExtra.explanation.steps.map((st, i) => ({
      number: i + 1,
      title: st.title,
      math: st.math,
      explanation: st.note || ''
    }));
  }

  // 3. Parse explicit question steps if available
  const rawSteps = (item.steps && item.steps.length > 0) ? item.steps : (qObj?.steps && qObj.steps.length > 0) ? qObj.steps : undefined;
  if (rawSteps && rawSteps.length > 0) {
    return rawSteps.map((st, i) => {
      let title = '';
      let body = st;

      const colonIdx = st.indexOf(':');
      if (colonIdx > 0 && colonIdx < 45 && !st.slice(0, colonIdx).includes('$')) {
        title = st.slice(0, colonIdx).trim().replace(/^[:·\-]\s*/, '');
        body = st.slice(colonIdx + 1).trim();
      }

      // Extract LaTeX math block
      const mathMatch = body.match(/\$\$?([^$]+)\$\$?/);
      let math: string | undefined;
      let text = body;

      if (mathMatch) {
        math = mathMatch[1].trim();
        text = body.replace(/\$\$?[^$]+\$\$?/, '').trim().replace(/^[:·\-]\s*/, '');
      }

      if (!title) {
        const lower = st.toLowerCase();
        if (lower.includes('order') || lower.includes('highest derivative')) {
          title = 'Determine the Order';
        } else if (lower.includes('linear') || lower.includes('dependent variable')) {
          title = 'Check Linearity Conditions';
        } else if (lower.includes('separate')) {
          title = 'Separate Variables';
        } else if (lower.includes('integrat')) {
          title = 'Integrate Both Sides';
        } else if (lower.includes('substitut') || lower.includes('let u =') || lower.includes('let v =') || lower.includes('y = vx')) {
          title = 'Perform Variable Substitution';
        } else if (lower.includes('integrating factor') || lower.includes('\\mu')) {
          title = 'Compute Integrating Factor';
        } else if (lower.includes('initial condition') || lower.includes('ivp') || /y\(\d+\)/.test(st)) {
          title = 'Apply Initial Condition';
        } else if (lower.includes('exponentiat') || lower.includes('solve for y')) {
          title = 'Solve for Dependent Variable';
        } else if (lower.includes('modulus') || lower.includes('polar')) {
          title = 'Compute Polar / Modulus Form';
        } else if (i === 0) {
          title = 'Formulate Problem & Initial Setup';
        } else if (i === rawSteps.length - 1) {
          title = 'Conclude & Final Result';
        } else {
          title = `Derivation Step ${i + 1}`;
        }
      }

      return {
        number: i + 1,
        title,
        math,
        explanation: text
      };
    });
  }

  // 4. ODE Classification questions (e.g. W17-1a through W17-1e)
  const isClassify =
    item.topic === 'classify' ||
    /order|linear/i.test(item.prompt) ||
    /1st order|2nd order|nonlinear|linear/i.test(item.answerText);
  if (isClassify) {
    return [
      {
        number: 1,
        title: 'Determine the order',
        math: item.note && /y['\(\d\)]+/.test(item.note)
          ? `\\text{Highest derivative present} \\implies \\text{${item.answerText.includes('2nd') ? 'Order 2' : item.answerText.includes('8th') ? 'Order 8' : item.answerText.includes('4th') ? 'Order 4' : 'Order 1'}}`
          : undefined,
        explanation: item.note
          ? item.note.split('.')[0] + '.'
          : 'Identify the highest-order derivative appearing in the differential equation.'
      },
      {
        number: 2,
        title: 'Check linearity conditions',
        explanation:
          'In a linear ODE, the dependent variable and all its derivatives must appear only to the first power, cannot be multiplied together, and their coefficients must depend solely on the independent variable.'
      },
      {
        number: 3,
        title: 'Conclude classification',
        explanation: `Therefore, the equation is ${item.answerText}.`
      }
    ];
  }

  // 5. If formula steps exist
  if (formula?.steps && formula.steps.length > 0) {
    return formula.steps.map((st, i) => ({
      number: i + 1,
      title: `Step ${i + 1} · Method`,
      explanation: st,
      math: i === 0 && formula.tex ? formula.tex : undefined
    }));
  }

  // 6. Pedagogical atomic baby steps
  const steps: StepItem[] = [];
  steps.push({
    number: 1,
    title: 'Problem Formulation & Governing Principle',
    explanation: formula?.meaning
      ? `Identify the governing engineering principle: ${formula.meaning}.`
      : 'Analyze given quantities, verify governing equation, and inspect constraints.',
    math: formula?.tex
  });

  steps.push({
    number: 2,
    title: 'Algebraic / Analytical Evaluation',
    explanation: item.solution
      ? item.solution
      : item.note
      ? item.note
      : `Evaluate the expression algebraically to determine the correct result: ${item.answerText}.`
  });

  steps.push({
    number: 3,
    title: 'Conclusion & Sanity Check',
    explanation: `Confirmed correct value: ${item.answerText}. Verify units, sign, and boundary conditions.`
  });

  return steps;
}
