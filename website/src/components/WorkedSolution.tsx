import React, { useState } from 'react';
import { PracticeQuestion, SolutionStep } from '../types';
import { MathBlock, MathText } from '../utils/mathRenderer';
import { ReadAloudButton } from './ReadAloudButton';
import {
  Lightbulb,
  Search,
  ListOrdered,
  ChevronDown,
  Flag,
  AlertTriangle,
  Calculator,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const LETTERS = ['A', 'B', 'C', 'D'];

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
  const steps = resolveSteps(question, isCalc);
  const hasSteps = steps.length > 0;

  // After a wrong answer on a calculation, show one baby step at a time so student can compare scratch work
  const [shown, setShown] = useState<number>(mode === 'wrong' && isCalc && hasSteps ? 1 : steps.length);
  const allShown = shown >= steps.length;

  const diagnosis =
    selectedIndex !== undefined && selectedIndex !== question.correctIndex
      ? question.explanation.whyWrong?.[String(selectedIndex) as '0' | '1' | '2' | '3']
      : undefined;

  // Human voice read-aloud: core concept + solution steps (LaTeX cleaned automatically)
  const solutionSpeech = [
    question.explanation.coreConcept,
    ...steps.flatMap((s) => [s.title, s.note].filter(Boolean) as string[]),
  ].join(' ');

  const chosenOptionText =
    selectedIndex !== undefined && question.options[selectedIndex]
      ? question.options[selectedIndex]
      : undefined;

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
        {isCalc && hasSteps && mode === 'wrong' && (
          <div className="ws-type-banner-badge">
            Step {Math.min(shown, steps.length)} of {steps.length}
          </div>
        )}
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

      {/* Key Idea / Core Concept */}
      <div className="ws-card ws-concept">
        <div className="ws-card-title">
          <Lightbulb size={16} />
          <span>{isCalc ? 'Governing Physical Law & Formula' : 'Key Engineering Concept'}</span>
        </div>
        <p>
          <MathText text={question.explanation.coreConcept} />
        </p>
      </div>

      {/* Step-by-Step Breakdown: Calculation Baby Steps vs Theory Deductive Reasoning */}
      {isCalc ? (
        <div className="ws-card ws-steps ws-calc-steps">
          <div className="ws-card-title">
            <ListOrdered size={16} />
            <span>Step-by-Step Calculation (Baby Steps)</span>
            {hasSteps && (
              <span className="ws-step-count">
                {Math.min(shown, steps.length)} / {steps.length} Steps Revealed
              </span>
            )}
          </div>

          {hasSteps ? (
            <ol className="ws-step-list">
              {steps.slice(0, shown).map((step, i) => (
                <li key={i} className={`ws-step ${i === shown - 1 ? 'ws-step-latest' : ''}`}>
                  <div className="ws-step-num">{i + 1}</div>
                  <div className="ws-step-body">
                    <div className="ws-step-title">
                      <MathText text={step.title} />
                    </div>
                    {step.math && <MathBlock tex={step.math} className="ws-step-math" />}
                    {step.note && (
                      <div className="ws-step-note">
                        <MathText text={step.note} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <ol className="ws-plain-list">
              {question.explanation.stepByStep.map((s, i) => (
                <li key={i}>
                  <MathText text={s} />
                </li>
              ))}
            </ol>
          )}

          {hasSteps && !allShown && (
            <div className="ws-reveal-row">
              <button className="ws-reveal-btn" onClick={() => setShown((n) => n + 1)}>
                <ChevronDown size={16} />
                <span>Show Step {shown + 1} of {steps.length}</span>
              </button>
              <button className="ws-reveal-all" onClick={() => setShown(steps.length)}>
                Show All Baby Steps
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Conceptual / Theory Question: Clean, standard explanation */
        <div className="ws-card ws-steps ws-theory-steps">
          <div className="ws-card-title">
            <CheckCircle2 size={16} />
            <span>Deductive Reasoning & Conceptual Breakdown</span>
          </div>

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
        </div>
      )}

      {/* Boxed Final Answer */}
      {(allShown || !hasSteps || !isCalc) && (
        <div className="ws-card ws-answer">
          <div className="ws-card-title">
            <Flag size={16} />
            <span>Correct Answer · Option {LETTERS[question.correctIndex]}</span>
          </div>
          {question.explanation.answer ? (
            <MathBlock tex={`\\boxed{${question.explanation.answer}}`} />
          ) : (
            <p className="ws-answer-text">
              <MathText text={question.options[question.correctIndex]} />
            </p>
          )}
        </div>
      )}

      {/* Common Trap Banner */}
      {question.explanation.commonTrap && (
        <div className="ws-card ws-trap">
          <div className="ws-card-title">
            <AlertTriangle size={16} />
            <span>Common Exam Trap & Misconception</span>
          </div>
          <p>
            <MathText text={question.explanation.commonTrap} />
          </p>
        </div>
      )}
    </div>
  );
};
