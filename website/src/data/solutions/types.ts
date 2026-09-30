import type { SolutionStep } from '../../types';

// Baby-step worked solution layered onto an existing question (see ../questionsData.ts).
// whyWrong is keyed by the ORIGINAL option index ("0"–"3") as written in the question bank.
export interface SolutionUpgrade {
  steps: SolutionStep[];
  answer?: string;
  whyWrong?: Partial<Record<'0' | '1' | '2' | '3', string>>;
}

// LaTeX is written with String.raw so backslashes need no escaping
export const t = String.raw;
