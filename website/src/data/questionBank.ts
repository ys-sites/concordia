import { PracticeQuestion } from '../types';
import { SolutionUpgrade } from './solutions/types';
import { ENGR213_SOLUTIONS } from './solutions/engr213';
import { ENGR213_EXTRA } from './extra/engr213';
import { MIAE221_SOLUTIONS } from './solutions/miae221';
import { MIAE221_EXTRA } from './extra/miae221';
import { INDU211_SOLUTIONS } from './solutions/indu211';
import { INDU211_EXTRA } from './extra/indu211';
import { MIAE215_SOLUTIONS } from './solutions/miae215';
import { MIAE215_EXTRA } from './extra/miae215';

// Baby-step worked solutions keyed by question id (merged into the base bank's explanations)
export const SOLUTION_UPGRADES: Record<string, SolutionUpgrade> = {
  ...ENGR213_SOLUTIONS,
  ...MIAE221_SOLUTIONS,
  ...INDU211_SOLUTIONS,
  ...MIAE215_SOLUTIONS
};

// Questions beyond the base bank: past-paper practice and newer lectures
export const EXTRA_QUESTIONS: PracticeQuestion[] = [...ENGR213_EXTRA, ...MIAE221_EXTRA, ...INDU211_EXTRA, ...MIAE215_EXTRA];
