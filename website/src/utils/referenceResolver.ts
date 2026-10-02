import { PracticeQuestion, CourseDocument, CourseId } from '../types';
import { COURSES_DATA } from '../data/coursesData';

export interface ResolvedReferenceItem {
  rawText: string;
  title: string;
  deckName: string;
  pageNumber?: number;
  slideLabel?: string;
  document: CourseDocument | null;
  isTextbook?: boolean;
}

export interface QuestionReferenceResult {
  isPastPaper: boolean;
  items: ResolvedReferenceItem[];
}

/**
 * Determines whether a practice question originates from a past exam / paper.
 * Per pedagogical law: Past paper exam questions MUST NEVER show teacher/textbook references.
 */
export function isPastPaperQuestion(q: PracticeQuestion): boolean {
  if (q.pastPaper) return true;
  
  const idLower = q.id.toLowerCase();
  if (
    idLower.includes('_m20') ||
    idLower.includes('_f20') ||
    idLower.includes('_p0') ||
    idLower.includes('_p1') ||
    idLower.includes('_p2') ||
    idLower.includes('_mid') ||
    idLower.includes('_final')
  ) {
    // Check if the reference or topic confirms it's a past exam/midterm/final/quiz
    const combined = `${q.id} ${q.topic} ${q.explanation?.reference || ''}`.toLowerCase();
    if (
      combined.includes('midterm') ||
      combined.includes('final') ||
      combined.includes('exam') ||
      combined.includes('past paper') ||
      combined.includes('quiz 20') ||
      combined.includes('concordia university')
    ) {
      return true;
    }
  }

  const ref = (q.explanation?.reference || '').toLowerCase();
  const topic = (q.topic || '').toLowerCase();
  const text = `${ref} ${topic}`;

  const pastExamKeywords = [
    'midterm exam',
    'final exam',
    'past exam',
    'past paper',
    'past midterm',
    'quiz 2 solutions',
    'quiz 3 solutions',
    'quiz 1 solutions',
    'exam review',
    'test 1 problem',
    'test 2 problem',
    'concordia test',
    'concordia university exam'
  ];

  return pastExamKeywords.some((k) => text.includes(k));
}

/**
 * Resolves references from teacher lecture slides and textbook notes into clickable CourseDocument targets with exact slide numbers.
 */
export function resolveQuestionReferences(
  q: PracticeQuestion,
  customDocs?: CourseDocument[]
): QuestionReferenceResult {
  if (isPastPaperQuestion(q)) {
    return { isPastPaper: true, items: [] };
  }

  const courseMeta = COURSES_DATA.find((c) => c.id === q.courseId);
  const docs: CourseDocument[] = customDocs || courseMeta?.documents || [];

  const rawParts: Array<{ text: string; location?: string }> = [];

  // 1. Gather from question.source if present
  if (q.source && q.source.length > 0) {
    for (const s of q.source) {
      rawParts.push({
        text: `${s.deck}${s.chapter ? ' · ' + s.chapter : ''}`,
        location: s.location
      });
    }
  }

  // 2. Gather from explanation.reference if no source or as fallback
  if (rawParts.length === 0 && q.explanation?.reference) {
    const split = q.explanation.reference.split(';').map((s) => s.trim()).filter(Boolean);
    for (const p of split) {
      rawParts.push({ text: p });
    }
  }

  if (rawParts.length === 0) {
    return { isPastPaper: false, items: [] };
  }

  const items: ResolvedReferenceItem[] = [];

  for (const part of rawParts) {
    const fullText = part.location ? `${part.text} · ${part.location}` : part.text;
    const lowerText = fullText.toLowerCase();

    // Extract slide / page number
    let pageNumber: number | undefined;
    const pageMatch = fullText.match(/(?:Page|Slide|p\.|s\.)\s*(\d+)/i);
    if (pageMatch) {
      pageNumber = parseInt(pageMatch[1], 10);
    }

    const isTextbook = lowerText.includes('callister') || lowerText.includes('turner') || lowerText.includes('zill') || lowerText.includes('groover') || lowerText.includes('textbook');

    // Attempt to match against course documents
    let matchedDoc: CourseDocument | null = null;

    // A. Direct filename match
    for (const d of docs) {
      const fnLower = d.filename.toLowerCase();
      if (lowerText.includes(fnLower) || fnLower.includes(part.text.toLowerCase().trim())) {
        matchedDoc = d;
        break;
      }
    }

    // B. Match Lecture number (e.g. Lecture 1, Lecture 4, Lecture 5)
    if (!matchedDoc) {
      const lecMatch = lowerText.match(/lecture\s*(\d+)/i);
      if (lecMatch) {
        const lNum = lecMatch[1];
        // Prefer teacher lecture notes folder
        for (const d of docs) {
          const fn = d.filename.toLowerCase();
          const rp = d.relativePath.toLowerCase();
          if (
            (fn.includes(`lecture ${lNum}`) || fn.includes(`lecture${lNum}`) || fn.includes(`lecture_${lNum}`) || fn.includes(`lecture ${lNum}-`)) &&
            rp.includes('teacher lecture')
          ) {
            matchedDoc = d;
            break;
          }
        }
        if (!matchedDoc) {
          for (const d of docs) {
            const fn = d.filename.toLowerCase();
            if (fn.includes(`lecture ${lNum}`) || fn.includes(`lecture${lNum}`) || fn.includes(`lecture_${lNum}`) || fn.includes(`lecture ${lNum}-`)) {
              matchedDoc = d;
              break;
            }
          }
        }
      }
    }

    // C. Match Callister Chapters (e.g. Callister Chapter 3, Chapter 4)
    if (!matchedDoc && lowerText.includes('callister')) {
      const chMatch = lowerText.match(/(?:chapter|ch\.?)\s*(\d+)/i);
      if (chMatch) {
        const chNum = parseInt(chMatch[1], 10);
        const padStr = `chapter ${String(chNum).padStart(2, '0')}`;
        for (const d of docs) {
          const fn = d.filename.toLowerCase();
          if (fn.includes(padStr) && d.relativePath.toLowerCase().includes('callister')) {
            matchedDoc = d;
            break;
          }
        }
        if (!matchedDoc) {
          for (const d of docs) {
            const fn = d.filename.toLowerCase();
            if (fn.includes(padStr) || fn.includes(`chapter ${chNum}`)) {
              matchedDoc = d;
              break;
            }
          }
        }
        if (!matchedDoc) {
          // Fallback to Master Callister Study Guide
          matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('callister') && d.isMasterGuide) || null;
        }
      }
    }

    // D. Match Professor Leonard Lessons (e.g. Lesson 22, Lesson 40, Lesson 43)
    if (!matchedDoc && lowerText.includes('leonard')) {
      const lesMatch = lowerText.match(/lesson\s*(\d+)/i);
      if (lesMatch) {
        const lesNum = parseInt(lesMatch[1], 10);
        for (const d of docs) {
          const fn = d.filename.toLowerCase();
          const rangeM = fn.match(/lessons?\s*(\d+)\s*[-–]\s*(\d+)/i);
          if (rangeM) {
            const startL = parseInt(rangeM[1], 10);
            const endL = parseInt(rangeM[2], 10);
            if (startL <= lesNum && lesNum <= endL) {
              matchedDoc = d;
              break;
            }
          } else if (fn.includes(`lesson ${lesNum}`) || fn.includes(`lesson ${String(lesNum).padStart(2, '0')}`)) {
            matchedDoc = d;
            break;
          }
        }
        // Topic specific fallbacks
        if (!matchedDoc) {
          if (lowerText.includes('variation of parameters') || lesNum === 43) {
            matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('variation of parameters')) || null;
          } else if (lowerText.includes('reduction of order') || lesNum === 40) {
            matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('second-order linear')) || null;
          } else if (lowerText.includes('resonance') || lesNum === 47) {
            matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('oscillations') || d.filename.toLowerCase().includes('resonance')) || null;
          } else if (lowerText.includes('systems of odes') || lesNum === 48) {
            matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('systems of odes')) || null;
          } else if (lowerText.includes('laplace') || lesNum === 50) {
            matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('laplace transform')) || null;
          }
        }
      }
    }

    // E. Match Mini-Course Lessons for MIAE 215
    if (!matchedDoc && q.courseId === 'MIAE215' && lowerText.includes('lesson')) {
      const lesMatch = lowerText.match(/lesson\s*(\d+)/i);
      if (lesMatch) {
        const lNum = lesMatch[1];
        for (const d of docs) {
          if (d.filename.toLowerCase().includes(`lesson ${lNum}`) && d.relativePath.toLowerCase().includes('mini course')) {
            matchedDoc = d;
            break;
          }
        }
      }
    }

    // F. Match MIAE 215 Course Reference & Topic Guides
    if (!matchedDoc && q.courseId === 'MIAE215' && (lowerText.includes('course reference') || lowerText.includes('topic'))) {
      if (lowerText.includes('topic 3') || lowerText.includes('expression')) {
        matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('part 3 - expressions')) || null;
      } else if (lowerText.includes('topic 2') || lowerText.includes('control') || lowerText.includes('modifier')) {
        matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('part 2 - type casting')) || null;
      } else if (lowerText.includes('topic 1') || lowerText.includes('data types')) {
        matchedDoc = docs.find((d) => d.filename.toLowerCase().includes('part 1 - c++ foundations')) || null;
      } else {
        matchedDoc = docs.find((d) => d.relativePath.toLowerCase().includes('comprehensive topic guides') && d.filename.toLowerCase().includes('part 1')) || null;
      }
    }

    // G. INDU 211 Turner or Chapter matching
    if (!matchedDoc && q.courseId === 'INDU211') {
      const chMatch = lowerText.match(/ch(?:apter)?\.?\s*(\d+)/i);
      if (chMatch) {
        const cNum = chMatch[1];
        for (const d of docs) {
          const fn = d.filename.toLowerCase();
          if (fn.includes(`ch${cNum}_`) || fn.includes(`ch ${cNum}`) || fn.includes(`chapter ${cNum}`)) {
            matchedDoc = d;
            break;
          }
        }
      }
      if (!matchedDoc && lowerText.includes('turner')) {
        matchedDoc = docs.find((d) => d.relativePath.toLowerCase().includes('textbook') && d.filename.toLowerCase().includes('indu 211')) || null;
      }
    }

    // H. MIAE 221 Chapter notes matching
    if (!matchedDoc && q.courseId === 'MIAE221') {
      const chMatch = lowerText.match(/chapter\s*(\d+)/i);
      if (chMatch) {
        const cNum = chMatch[1];
        for (const d of docs) {
          const fn = d.filename.toLowerCase();
          if (fn.includes(`chapter ${String(cNum).padStart(2, '0')}`) || fn.includes(`chapter ${cNum} 221`) || fn.includes(`chapter ${cNum}.pdf`)) {
            matchedDoc = d;
            break;
          }
        }
      }
    }

    // Derive a clean, human-readable title and slide label
    let cleanTitle = matchedDoc ? matchedDoc.title : part.text;
    cleanTitle = cleanTitle.replace(/\.pdf$/i, '').replace(/^[0-9.]+\s*[-_]?\s*/, '').trim();

    const slideLabel = pageNumber ? (lowerText.includes('slide') ? `Slide ${pageNumber}` : `Page ${pageNumber}`) : undefined;

    items.push({
      rawText: fullText,
      title: cleanTitle,
      deckName: matchedDoc ? matchedDoc.filename : part.text,
      pageNumber,
      slideLabel,
      document: matchedDoc,
      isTextbook
    });
  }

  return { isPastPaper: false, items };
}
