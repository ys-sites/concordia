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

export interface PracticeQuestion {
  id: string;
  courseId: CourseId;
  topic: string;
  difficulty: 'Foundation' | 'Midterm Level' | 'Exam Master';
  question: string;
  codeSnippet?: string;
  formula?: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: {
    coreConcept: string;
    stepByStep: string[];
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
