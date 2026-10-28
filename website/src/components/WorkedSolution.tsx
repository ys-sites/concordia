import React, { useMemo, useState } from 'react';
import { PracticeQuestion, SolutionStep } from '../types';
import { MathBlock, MathText, hasInlineMath } from '../utils/mathRenderer';
import { ReadAloudButton } from './ReadAloudButton';
import { QuestionVideo } from './QuestionVideo';
import {
  Search,
  ListOrdered,
  ChevronDown,
  Calculator,
  BookOpen,
  Target,
  Zap,
  Lightbulb
} from 'lucide-react';
import { getQuestionCrack } from '../data/miae221QuestionCracks';
import { resolveQuestionStrategy } from '../learn/quiz/questionStrategy';
import '../learn/styles/answer.css';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

interface WorkedSolutionProps {
  question: PracticeQuestion; // options / whyWrong already in display order
  selectedIndex?: number; // the option the student picked (display order)
  // 'wrong': diagnose the chosen option and reveal the solution one step at a time for calculations
  // 'correct' / 'review': show the full solution
  mode: 'wrong' | 'correct' | 'review';
}

// Determines if a question involves numerical / algebraic calculation vs pure conceptual theory
export function isCalculationQuestion(q: PracticeQuestion): boolean {
  if (q.formula || q.explanation.answer) return true;
  if (q.explanation.steps && q.explanation.steps.some((s) => Boolean(s.math))) return true;

  // Numerical or equation options
  const hasNumericOptions = q.options.some(
    (opt) =>
      /\d+(\.\d+)?/.test(opt) &&
      (/[=+\-*/^\\_]|nm|cm|MPa|wt%|at%|mol|g\/|eV|J|K\b|°C|Hz|rad|kg|APF|LD|PD/i.test(opt) ||
        /\b(SC|BCC|FCC|HCP)\b/.test(opt))
  );
  if (hasNumericOptions) return true;

  // Calculation keywords in question statement
  return /calculate|compute|determine|find the|evaluate|what is the (value|density|concentration|spacing|angle|fraction|rate|modulus|number of)/i.test(
    q.question
  );
}

// Guarantees atomic baby steps for calculation questions
function resolveSteps(q: PracticeQuestion, isCalc: boolean): SolutionStep[] {
  if (q.explanation.steps && q.explanation.steps.length > 0) {
    return q.explanation.steps;
  }

  const rawSteps = q.explanation.stepByStep ?? [];
  if (rawSteps.length === 0) {
    return [];
  }

  // If calculation question, structure the raw stepByStep strings into clear baby steps
  if (isCalc) {
    return rawSteps.map((line, idx) => {
      let title = `Step ${idx + 1}`;
      let math = '';
      let note = line;

      // Extract isolated LaTeX math if present, e.g. "$...$"
      const mathMatch = line.match(/\$\$?([^$]+)\$\$?/);
      if (mathMatch && line.length < 160) {
        math = mathMatch[1];
        const textPart = line.replace(/\$\$?[^$]+\$\$?/, '').trim().replace(/^[:·\-]\s*/, '');
        if (textPart) {
          title = textPart;
        } else if (idx === 0) {
          title = 'Governing Formula & Setup';
        } else if (idx === rawSteps.length - 1) {
          title = 'Final Calculation & Value';
        } else {
          title = `Algebraic Step ${idx + 1}`;
        }
        note = '';
      } else {
        if (idx === 0) {
          title = 'Formula & Given Parameters';
        } else if (idx === rawSteps.length - 1) {
          title = 'Final Evaluation & Result';
        } else {
          title = `Step ${idx + 1} · Derivation`;
        }
      }

      return { title, math: math || undefined, note: note || undefined };
    });
  }

  return rawSteps.map((s, idx) => ({
    title: `Point ${idx + 1}`,
    note: s
  }));
}

export const WorkedSolution: React.FC<WorkedSolutionProps> = ({ question, selectedIndex, mode }) => {
  const isCalc = isCalculationQuestion(question);
  const questionCrack = useMemo(() => getQuestionCrack(question.id), [question.id]);
  const steps = resolveSteps(question, isCalc);
  const hasSteps = steps.length > 0;

  // After a wrong answer on a calculation, show one baby step at a time so student can compare scratch work
  const [shown, setShown] = useState<number>(mode === 'wrong' && isCalc && hasSteps ? 1 : steps.length);
  const allShown = shown >= steps.length;

  const strategy = useMemo(() => resolveQuestionStrategy({
    id: question.id,
    courseId: question.courseId,
    prompt: question.question,
    topic: question.topic,
    formula: question.formula,
    code: question.codeSnippet,
    options: question.options,
    explain: {
      concept: question.explanation.coreConcept,
      trap: question.explanation.commonTrap,
      lines: question.explanation.stepByStep,
      steps: question.explanation.steps,
      whyWrong: question.explanation.whyWrong
    }
  }), [question]);

  const diagnosis =
    selectedIndex !== undefined && selectedIndex !== question.correctIndex
      ? question.explanation.whyWrong?.[String(selectedIndex) as '0' | '1' | '2' | '3']
      : undefined;

  const chosenOptionText =
    selectedIndex !== undefined && question.options[selectedIndex]
      ? question.options[selectedIndex]
      : undefined;

  // Speech for read-aloud:
  const solutionSpeech = useMemo(() => {
    if (questionCrack && questionCrack.moves?.length) {
      return questionCrack.moves.join('. ');
    }
    return [
      strategy.howToSpot,
      strategy.howToTackle,
      ...steps.flatMap((s) => [s.title, s.note].filter(Boolean) as string[])
    ].join(' ');
  }, [strategy, steps, questionCrack]);

  return (
    <div className="ws-root">
      {/* Question Type Banner */}
      <div className={`ws-type-banner ${isCalc ? 'banner-calc' : 'banner-theory'}`}>
        <div className="ws-type-banner-left">
          {isCalc ? <Calculator size={16} /> : <BookOpen size={16} />}
          <span>
            {isCalc
              ? 'Calculation Problem · Baby-Step Derivation & Mistake Analysis'
              : 'Conceptual Theory · Standard Engineering Reasoning'}
          </span>
        </div>
        <ReadAloudButton text={solutionSpeech} stopKey={question.id + mode} label="Listen" />
      </div>

      {/* Where Answer X Comes From (Diagnosis on Wrong Selection) */}
      {selectedIndex !== undefined && selectedIndex !== question.correctIndex && (
        <div className="ws-card ws-diagnosis">
          <div className="ws-card-title">
            <Search size={16} />
            <span>Where Answer {LETTERS[selectedIndex]} Diverged</span>
          </div>
          <div className="ws-diagnosis-content">
            {diagnosis ? (
              <p>
                <MathText text={diagnosis} />
              </p>
            ) : isCalc ? (
              <p>
                You selected option <strong>{LETTERS[selectedIndex]}</strong> ({chosenOptionText ? <MathText text={chosenOptionText} /> : ''}).
                Compare your scratch work step-by-step with the baby-step derivation below. Pay close attention to unit conversions (e.g., nm to m, eV to J, °C to K), geometric factors ($\sqrt{2}$ vs $\sqrt{3}$), or inverted fractions where calculation errors most commonly occur.
              </p>
            ) : (
              <p>
                You selected option <strong>{LETTERS[selectedIndex]}</strong>. Review the core physical principle and deductive reasoning below to see why this statement does not hold in all engineering conditions.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Narrated solve video (teacher midterm questions that have one) */}
      <QuestionVideo questionId={question.id} />

      {/* ── SECTION 1: Spot & Tackle Strategy (Key Knowledge to Retain) ── */}
      <section className="lx-ans-strategy-card" style={{ margin: '14px 0' }} aria-label="Section 1: Quick Spot & Tackle Strategy">
        <div className="lx-strategy-header">
          <div className="lx-strategy-badge">
            <Zap size={14} aria-hidden /> Section 1 · Spot &amp; Tackle Strategy
          </div>
          <div className="lx-strategy-category">
            <strong>{strategy.category}</strong>
          </div>
        </div>

        <div className="lx-strategy-grid">
          <div className="lx-strategy-item is-spot">
            <span className="lx-strategy-label">
              <Search size={12} aria-hidden /> How to Spot (&lt; 5s)
            </span>
            <p className="lx-strategy-val">
              <MathText text={strategy.howToSpot} />
            </p>
          </div>

          <div className="lx-strategy-item is-tackle">
            <span className="lx-strategy-label">
              <Target size={12} aria-hidden /> How to Tackle
            </span>
            <p className="lx-strategy-val">
              <MathText text={strategy.howToTackle} />
            </p>
          </div>

          <div className="lx-strategy-item is-knowledge">
            <span className="lx-strategy-label">
              <BookOpen size={12} aria-hidden /> Fundamental Knowledge
            </span>
            <div className="lx-strategy-val">
              <MathText text={strategy.fundamentalKnowledge} />
            </div>
          </div>

          <div className="lx-strategy-item is-retention">
            <span className="lx-strategy-label">
              <Lightbulb size={12} aria-hidden /> Retention &amp; Trap Tip
            </span>
            <p className="lx-strategy-val">
              <MathText text={strategy.retentionTip} />
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Step-by-Step Worked Solution ── */}
      <section className="lx-ans-steps-card" style={{ margin: '14px 0' }} aria-label="Section 2: Step-by-Step Worked Solution">
        <header className="lx-steps-header">
          <div className="lx-steps-badge">
            <ListOrdered size={14} aria-hidden /> Section 2 · Step-by-Step Worked Solution
          </div>
          <span className="lx-chip lx-num">
            {questionCrack?.moves?.length || steps.length || 1} {(questionCrack?.moves?.length || steps.length || 1) === 1 ? 'Step' : 'Steps'}
          </span>
        </header>

        {questionCrack && questionCrack.moves?.length > 0 ? (
          <ol className="lx-moves">
            {questionCrack.moves.map((mv, i) => (
              <li key={i} className="lx-fade-in is-new-step">
                <span className="lx-move-no">{i + 1}</span>
                <div className="lx-move-body">
                  <p>
                    <MathText text={mv} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        ) : isCalc && hasSteps ? (
          <>
            <ol className="ws-step-list">
              {steps.slice(0, shown).map((step, i) => (
                <li key={i} className={`ws-step ${i === shown - 1 ? 'ws-step-latest' : ''}`}>
                  <div className="ws-step-num">{i + 1}</div>
                  <div className="ws-step-body">
                    <div className="ws-step-title">
                      <MathText text={step.title} />
                    </div>
                    {step.math &&
                      (hasInlineMath(step.math) ? (
                        <div className="ws-step-math">
                          <MathText text={step.math} />
                        </div>
                      ) : (
                        <MathBlock tex={step.math} className="ws-step-math" />
                      ))}
                    {step.note && (
                      <div className="ws-step-note">
                        <MathText text={step.note} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            {hasSteps && !allShown && (
              <div className="ws-reveal-row" style={{ marginTop: 12 }}>
                <button className="ws-reveal-btn" onClick={() => setShown((n) => n + 1)}>
                  <ChevronDown size={16} />
                  <span>Show Step {shown + 1} of {steps.length}</span>
                </button>
                <button className="ws-reveal-all" onClick={() => setShown(steps.length)}>
                  Show All Baby Steps
                </button>
              </div>
            )}
          </>
        ) : (
          <ol className="ws-plain-list">
            {(question.explanation.stepByStep.length > 0
              ? question.explanation.stepByStep
              : [question.explanation.coreConcept]
            ).map((s, i) => (
              <li key={i}>
                <MathText text={s} />
              </li>
            ))}
          </ol>
        )}

        {/* Boxed Final Answer */}
        <div className="lx-solution-final-box" style={{ marginTop: 16 }}>
          <span className="lx-final-kicker">Final Answer · Option {LETTERS[question.correctIndex]}:</span>
          <div className="lx-final-math">
            {question.explanation.answer && hasInlineMath(question.explanation.answer) ? (
              <p className="ws-answer-text" style={{ margin: 0 }}>
                <MathText text={question.explanation.answer} />
              </p>
            ) : question.explanation.answer ? (
              <MathBlock tex={`\\boxed{${question.explanation.answer}}`} />
            ) : (
              <p className="ws-answer-text" style={{ margin: 0 }}>
                <MathText text={question.options[question.correctIndex]} />
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
