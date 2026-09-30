import { PracticeQuestion } from '../types';
import { SolutionUpgrade } from './solutions/types';
import { ENGR213_SOLUTIONS } from './solutions/engr213';
import { ENGR213_EXTRA } from './extra/engr213';

// Baby-step worked solutions keyed by question id (merged into the base bank's explanations)
export const SOLUTION_UPGRADES: Record<string, SolutionUpgrade> = {
  ...ENGR213_SOLUTIONS
};

// Questions beyond the base bank: past-paper practice and newer lectures
export const EXTRA_QUESTIONS: PracticeQuestion[] = [...ENGR213_EXTRA];
