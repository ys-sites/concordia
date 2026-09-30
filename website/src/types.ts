export type CourseId = 'ENGR213' | 'INDU211' | 'MIAE215' | 'MIAE221';

export interface CourseMeta {
  id: CourseId;
  code: string;
  name: string;
  department: string;
  term: string;
  color: string;
  gradient: string;
  borderGlow: string;
  accentHex: string;
  iconName: string;
  description: string;
  instructor?: string;
  totalDocuments: number;
  totalQuestions: number;
  categories: CategoryMeta[];
}

export interface CategoryMeta {
  id: string;
  title: string;
  icon?: string;
  count: number;
  description: string;
}

export interface CourseDocument {
  id: string;
  courseId: CourseId;
  categoryId: string;
  categoryTitle: string;
  title: string;
  filename: string;
  relativePath: string;
  fileSizeBytes?: number;
  pageCount?: number;
  isMasterGuide?: boolean;
  isHighYield?: boolean;
  tags: string[];
  summary: string;
}

export interface QuestionSource {
  deck: string;     // teacher's slide deck / file name
  chapter: string;  // chapter or topic it belongs to
  location: string; // "Page 5", "Pages 5–6" or "Line 42"
}

// One line of a worked solution. `math` is bare LaTeX shown as a display equation; `note` is text
// with inline $…$ math that says why this step is done.
export interface SolutionStep {
  title: string;
  math?: string;
  note?: string;
}

export interface PracticeQuestion {
  id: string;
  courseId: CourseId;
  chapter: string; // section id from QUIZ_PLANS (e.g. 'ch1', 'types'); 'mixed' = midterm-only
  source?: QuestionSource[];
  // Past-paper origin when the question is modelled on a previous year's quiz / midterm / final
  pastPaper?: string;
  topic: string;
  difficulty: 'Foundation' | 'Midterm Level' | 'Exam Master';
  question: string;
  codeSnippet?: string;
  formula?: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: {
    coreConcept: string;
    // Short reasoning lines (conceptual questions). Calculation questions use `steps` instead.
    stepByStep: string[];
    // Baby-step worked solution: every algebraic move on its own line, shown one step at a time
    steps?: SolutionStep[];
    // The boxed final result, bare LaTeX (e.g. "y = Ce^{-2x} + \\tfrac12")
    answer?: string;
    // Keyed by the ORIGINAL option index: the specific slip that produces that wrong option
    whyWrong?: Partial<Record<'0' | '1' | '2' | '3', string>>;
    commonTrap: string;
    reference: string;
  };
}

export interface QuizSessionState {
  isActive: boolean;
  courseId: CourseId | 'ALL';
  questions: PracticeQuestion[];
  currentIndex: number;
  selectedAnswers: Record<number, number>; // questionIndex -> chosen option index
  showExplanation: boolean;
  score: number;
  streak: number;
  maxStreak: number;
  startTime: number;
  endTime?: number;
  isCompleted: boolean;
}

export interface BrainReadinessScore {
  totalAttempted: number;
  totalCorrect: number;
  percentage: number;
  tier: string;
  badge: string;
  recommendation: string;
}
