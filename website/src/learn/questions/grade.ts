import type { LearnQuestion } from '../model';
import type { Answer } from '../progress/store';
import { equivalentNumber, normOutput, parseIndices, parseUserNumber } from '../../utils/answerGrading';

export { normOutput, parseIndices, parseUserNumber } from '../../utils/answerGrading';

// null = cannot be graded automatically (self-marked)
export function grade(q: LearnQuestion, answer: Answer | undefined): boolean | null {
  if (answer === undefined) return false;
  switch (q.kind) {
    case 'mc':
    case 'tf':
      return Array.isArray(answer) && answer.length === 1 && q.correct.includes(answer[0]);
    case 'multi':
      return Array.isArray(answer) && answer.length === q.correct.length && q.correct.every((correct) => answer.includes(correct));
    case 'num':
      return equivalentNumber(String(answer), q.value!, q.unit, q.tol ?? 0.02);
    case 'indices': {
      const typed = parseIndices(String(answer));
      const expected = q.ints!;
      const same = (values: number[]) => values.length === expected.length && values.every((value, index) => value === expected[index]);
      return same(typed) || (!!q.anySign && same(typed.map((value) => -value)));
    }
    case 'text':
      return normOutput(String(answer)) === normOutput(q.answerText);
    case 'self':
      return answer === 'self:right' ? true : answer === 'self:wrong' ? false : null;
  }
}

export const isAnswered = (q: LearnQuestion, answer: Answer | undefined) =>
  answer !== undefined && (Array.isArray(answer) ? answer.length > 0 : String(answer).trim().length > 0);
