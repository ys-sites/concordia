import React, { useState } from 'react';
import { PracticeQuestion } from '../types';
import { MathBlock, MathText } from '../utils/mathRenderer';
import { Lightbulb, Search, ListOrdered, ChevronDown, Flag, AlertTriangle } from 'lucide-react';

const LETTERS = ['A', 'B', 'C', 'D'];

interface WorkedSolutionProps {
  question: PracticeQuestion; // options / whyWrong already in display order
  selectedIndex?: number; // the option the student picked (display order)
  // 'wrong': diagnose the chosen option and reveal the solution one step at a time
  // 'correct' / 'review': show the whole solution
  mode: 'wrong' | 'correct' | 'review';
}

export const WorkedSolution: React.FC<WorkedSolutionProps> = ({ question, selectedIndex, mode }) => {
  const { explanation } = question;
  const steps = explanation.steps ?? [];
  const hasSteps = steps.length > 0;
  // After a wrong answer, show one step at a time so the student can compare each line with their own
  const [shown, setShown] = useState<number>(mode === 'wrong' && hasSteps ? 1 : steps.length);
  const allShown = shown >= steps.length;

  const diagnosis =
    selectedIndex !== undefined && selectedIndex !== question.correctIndex
      ? explanation.whyWrong?.[String(selectedIndex) as '0' | '1' | '2' | '3']
      : undefined;

  return (
    <div className="ws-root">
      {selectedIndex !== undefined && selectedIndex !== question.correctIndex && (
        <div className="ws-card ws-diagnosis">
          <div className="ws-card-title">
            <Search size={16} />
            <span>Where answer {LETTERS[selectedIndex]} comes from</span>
          </div>
          <p>
            {diagnosis ? (
              <MathText text={diagnosis} />
            ) : (
              <>
                Work through the solution below line by line and compare each line with your own working. The first line
                where your result differs is where the mistake happened.
              </>
            )}
          </p>
        </div>
      )}

      <div className="ws-card ws-concept">
        <div className="ws-card-title">
          <Lightbulb size={16} />
          <span>Key idea</span>
        </div>
        <p>
          <MathText text={explanation.coreConcept} />
        </p>
      </div>

      <div className="ws-card ws-steps">
        <div className="ws-card-title">
          <ListOrdered size={16} />
          <span>{hasSteps ? 'Worked solution, step by step' : 'Reasoning'}</span>
          {hasSteps && (
            <span className="ws-step-count">
              {Math.min(shown, steps.length)} / {steps.length}
            </span>
          )}
        </div>

        {hasSteps ? (
          <ol className="ws-step-list">
            {steps.slice(0, shown).map((step, i) => (
              <li key={i} className="ws-step">
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
            {explanation.stepByStep.map((s, i) => (
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
              <span>Show step {shown + 1}</span>
            </button>
            <button className="ws-reveal-all" onClick={() => setShown(steps.length)}>
              Show all steps
            </button>
          </div>
        )}
      </div>

      {(allShown || !hasSteps) && (
        <div className="ws-card ws-answer">
          <div className="ws-card-title">
            <Flag size={16} />
            <span>Answer · option {LETTERS[question.correctIndex]}</span>
          </div>
          {explanation.answer ? (
            <MathBlock tex={`\\boxed{${explanation.answer}}`} />
          ) : (
            <p>
              <MathText text={question.options[question.correctIndex]} />
            </p>
          )}
        </div>
      )}

      {explanation.commonTrap && (
        <div className="ws-card ws-trap">
          <div className="ws-card-title">
            <AlertTriangle size={16} />
            <span>Common trap</span>
          </div>
          <p>
            <MathText text={explanation.commonTrap} />
          </p>
        </div>
      )}
    </div>
  );
};
