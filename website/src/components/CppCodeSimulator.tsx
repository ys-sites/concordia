import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Bot,
  Terminal,
  AlertTriangle,
  CheckCircle2,
  Code2,
  Eye,
  Sliders,
  Sparkles
} from 'lucide-react';
import { SimulatorStep, SimulatorTrace } from '../types/cppSimulator';
import { getTraceForQuestion } from '../data/cppTraceData';
import { audio } from '../utils/audio';
import './CppCodeSimulator.css';

interface CppCodeSimulatorProps {
  codeSnippet: string;
  questionId?: string;
  questionTitle?: string;
  options?: string[];
  correctOptionIndex?: number;
  whyWrong?: Record<string, string | undefined> | Partial<Record<string, string>>;
  preloadedTrace?: SimulatorTrace;
  onAnswerSelect?: (idx: number) => void;
  userSelectedIndex?: number;
  isCompact?: boolean;
}

export const CppCodeSimulator: React.FC<CppCodeSimulatorProps> = ({
  codeSnippet,
  questionId,
  questionTitle,
  options,
  correctOptionIndex,
  whyWrong,
  preloadedTrace,
  onAnswerSelect,
  userSelectedIndex,
  isCompact = false
}) => {
  // Resolve trace from preloaded trace or synthesize from code snippet
  const trace: SimulatorTrace = useMemo(() => {
    if (preloadedTrace) return preloadedTrace;
    return getTraceForQuestion(codeSnippet, questionId, questionTitle);
  }, [preloadedTrace, codeSnippet, questionId, questionTitle]);

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1200); // 1.2s per step
  const [showAnswerBreakdown, setShowAnswerBreakdown] = useState<boolean>(false);

  // Split the raw code into lines with 1-based indexing
  const codeLines = useMemo(() => {
    return (trace.code || codeSnippet).split('\n');
  }, [trace.code, codeSnippet]);

  const totalSteps = trace.steps.length;
  const currentStep: SimulatorStep = trace.steps[currentStepIndex] || trace.steps[0] || {
    stepIndex: 0,
    lineNumber: 1,
    lineContent: '',
    variables: {},
    consoleOutput: [],
    explanation: 'Ready to start simulation.'
  };

  const activeLineRef = useRef<HTMLDivElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<number | null>(null);

  // Auto-scroll active code line into view
  useEffect(() => {
    if (activeLineRef.current && codeContainerRef.current) {
      const container = codeContainerRef.current;
      const element = activeLineRef.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const containerHeight = container.offsetHeight;

      // Center active line in container
      container.scrollTo({
        top: elementTop - containerHeight / 2 + elementHeight / 2,
        behavior: 'smooth'
      });
    }
  }, [currentStep.lineNumber]);

  // Handle Next Step
  const handleNext = () => {
    audio.playClick();
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  // Handle Back Step
  const handleBack = () => {
    audio.playClick();
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // Handle Restart
  const handleRestart = () => {
    audio.playClick();
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  // Handle Auto-Play Toggle
  const togglePlay = () => {
    audio.playClick();
    setIsPlaying((prev) => !prev);
  };

  // Auto-play interval effect
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimerRef.current = window.setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, playbackSpeed);
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlaying, totalSteps, playbackSpeed]);

  const effectiveOptions = options || trace.options;
  const effectiveCorrectIdx = correctOptionIndex !== undefined ? correctOptionIndex : trace.correctOptionIndex;
  const effectiveWhyWrong = whyWrong || trace.whyWrong;

  return (
    <div className={`cpp-sim-wrapper ${isCompact ? 'is-compact' : ''}`}>
      {/* 1. TOP STICKY CONTROLS BAR (Requirements 3 & 8) */}
      <div className="cpp-sim-top-bar">
        <div className="cpp-sim-controls-group">
          {/* Restart Button */}
          <button
            type="button"
            className="cpp-sim-btn"
            onClick={handleRestart}
            title="Restart simulation from the beginning (Line 1)"
          >
            <RotateCcw size={14} />
            <span>Restart</span>
          </button>

          {/* Back Button */}
          <button
            type="button"
            className="cpp-sim-btn"
            onClick={handleBack}
            disabled={currentStepIndex === 0}
            title="Go back one step (Previous line)"
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>

          {/* Next Button (Primary Action) */}
          <button
            type="button"
            className="cpp-sim-btn cpp-sim-btn-primary"
            onClick={handleNext}
            disabled={currentStepIndex >= totalSteps - 1}
            title="Execute next line (Next)"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>

          {/* Auto-Play Toggle */}
          <button
            type="button"
            className={`cpp-sim-btn cpp-sim-btn-auto ${isPlaying ? 'is-playing' : ''}`}
            onClick={togglePlay}
            title={isPlaying ? 'Pause automatic stepping' : 'Play automatic line-by-line stepping'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? 'Pause' : 'Auto'}</span>
          </button>
        </div>

        {/* Step Counter & Iteration Badge */}
        <div className="cpp-sim-step-badge">
          <span>
            Step <strong>{currentStepIndex + 1}</strong> of {totalSteps}
          </span>
          {currentStep.iterationLabel && (
            <span className="cpp-sim-iter-pill">{currentStep.iterationLabel}</span>
          )}
        </div>
      </div>

      {/* 2. MAIN SIMULATOR VIEWPORT: Split Code & Memory/Tutor Inspector */}
      <div className="cpp-sim-body">
        {/* Left Pane: C++ Code with Line Numbers & Active Line Glow (Requirements 1, 2, 4, 5) */}
        <div className="cpp-code-pane">
          <div className="cpp-code-header">
            <span className="cpp-code-file-label">
              <Code2 size={14} className="text-sky" />
              <span>C++ Line-by-Line Tracing</span>
            </span>
            <span className="text-muted">Line {currentStep.lineNumber} Active</span>
          </div>

          <div className="cpp-code-container" ref={codeContainerRef}>
            {codeLines.map((line, idx) => {
              const lineNum = idx + 1;
              const isActive = lineNum === currentStep.lineNumber;

              return (
                <div
                  key={idx}
                  ref={isActive ? activeLineRef : null}
                  className={`cpp-code-line ${isActive ? 'is-active' : ''}`}
                >
                  {isActive && <span className="cpp-active-arrow">▶</span>}
                  <span className="cpp-line-num">{lineNum}</span>
                  <span className="cpp-line-content">{line || ' '}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Live Memory, Condition Evaluator, Tutor Explanation & Terminal (Req 6, 7, 8) */}
        <div className="cpp-inspector-pane">
          {/* Beginner-Friendly Tutor Explanation (Requirement 7 & 10) */}
          <div className="cpp-tutor-card">
            <div className="cpp-tutor-header">
              <Bot size={15} />
              <span>Tutor Explanation (Line {currentStep.lineNumber})</span>
            </div>
            <p className="cpp-tutor-text">{currentStep.explanation}</p>

            {/* Exam Trap Warning Alert */}
            {currentStep.trapWarning && (
              <div className="cpp-trap-alert">
                <AlertTriangle size={16} className="flex-shrink-0" />
                <span>{currentStep.trapWarning}</span>
              </div>
            )}
          </div>

          {/* Active Condition Evaluator (Requirements 5 & 6) */}
          {currentStep.conditionEval && (
            <div className="cpp-cond-eval-box">
              <div className="cpp-cond-title">Condition Evaluation</div>
              <div className="cpp-cond-formula">
                <span>{currentStep.conditionEval.expression}</span>
                <span className="text-muted">⟶</span>
                <code>{currentStep.conditionEval.evaluatedTo}</code>
                <span className="text-muted">⟶</span>
                <span
                  className={`cpp-cond-res-pill ${
                    currentStep.conditionEval.result === true || currentStep.conditionEval.result === 'true'
                      ? 'is-true'
                      : 'is-false'
                  }`}
                >
                  {String(currentStep.conditionEval.result).toUpperCase()}
                </span>
              </div>
            </div>
          )}

          {/* Variables & Memory Watch Table (Requirement 6) */}
          <div className="cpp-vars-box">
            <div className="cpp-vars-header">
              <span>Variables &amp; Memory</span>
              <span style={{ fontSize: '10px', color: '#64748b' }}>Live Watch</span>
            </div>

            {Object.keys(currentStep.variables).length > 0 ? (
              <div className="cpp-vars-grid">
                {Object.entries(currentStep.variables).map(([name, val]) => {
                  const isChanged = currentStep.changedVars?.includes(name);
                  return (
                    <div
                      key={name}
                      className={`cpp-var-cell ${isChanged ? 'is-changed' : ''}`}
                      title={isChanged ? `${name} updated on this step` : undefined}
                    >
                      <div className="cpp-var-name">{name}</div>
                      <div className="cpp-var-val">{String(val)}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-muted" style={{ fontSize: '12px', fontStyle: 'italic' }}>
                No active local variables initialized yet.
              </div>
            )}

            {/* Array Inspector with highlighted active index */}
            {currentStep.arrays &&
              Object.entries(currentStep.arrays).map(([arrName, arrElements]) => (
                <div key={arrName} className="cpp-array-box">
                  <div className="cpp-array-label">
                    Array <code>{arrName}[]</code> (size {arrElements.length})
                  </div>
                  <div className="cpp-array-cells">
                    {arrElements.map((el, elIdx) => {
                      const isActiveIdx = currentStep.activeArrayIndices?.[arrName] === elIdx;
                      return (
                        <div
                          key={elIdx}
                          className={`cpp-array-cell ${isActiveIdx ? 'is-active-idx' : ''}`}
                        >
                          <span className="cpp-array-idx">[{elIdx}]</span>
                          <span className="cpp-array-val">{String(el)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>

          {/* Live Console Output Terminal (Requirement 6) */}
          <div className="cpp-terminal-box">
            <div className="cpp-terminal-header">
              <div className="cpp-terminal-dot cpp-dot-red" />
              <div className="cpp-terminal-dot cpp-dot-yellow" />
              <div className="cpp-terminal-dot cpp-dot-green" />
              <span className="cpp-terminal-title">Console Output (stdout)</span>
            </div>
            <div className="cpp-terminal-body">
              {currentStep.consoleOutput && currentStep.consoleOutput.length > 0 ? (
                currentStep.consoleOutput.map((outLine, oIdx) => (
                  <div key={oIdx} className="cpp-terminal-line">
                    {outLine}
                  </div>
                ))
              ) : (
                <div className="cpp-terminal-empty">Console is empty (no output printed yet)</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. MULTIPLE-CHOICE REVEAL & EXAM TRAP BREAKDOWN (Requirement 9) */}
      {effectiveOptions && effectiveOptions.length > 0 && (
        <div className="cpp-answer-reveal-box">
          <button
            type="button"
            className="cpp-answer-toggle-btn"
            onClick={() => {
              audio.playClick();
              setShowAnswerBreakdown((prev) => !prev);
            }}
          >
            <Sparkles size={15} />
            <span>
              {showAnswerBreakdown
                ? 'Hide Multiple-Choice Answer & Trap Diagnosis'
                : 'Reveal Correct Multiple-Choice Answer & Why Other Options Are Wrong'}
            </span>
          </button>

          {showAnswerBreakdown && (
            <div className="cpp-answer-content">
              {effectiveCorrectIdx !== undefined && effectiveOptions[effectiveCorrectIdx] && (
                <div className="cpp-correct-pill">
                  <CheckCircle2 size={15} />
                  <span>
                    Correct Answer (Option {String.fromCharCode(65 + effectiveCorrectIdx)}):{' '}
                    <strong>{effectiveOptions[effectiveCorrectIdx]}</strong>
                  </span>
                </div>
              )}

              {trace.coreConcept && (
                <p style={{ fontSize: '13px', color: '#93c5fd', margin: '6px 0 10px 0' }}>
                  <strong>Key Takeaway:</strong> {trace.coreConcept}
                </p>
              )}

              {effectiveWhyWrong && Object.keys(effectiveWhyWrong).length > 0 && (
                <div className="cpp-why-wrong-list">
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#f87171' }}>
                    Why the other exam options are common student traps:
                  </div>
                  {Object.entries(effectiveWhyWrong).map(([optKey, reason]) => {
                    const optIndexNum = Number(optKey);
                    const optLetter = !isNaN(optIndexNum)
                      ? String.fromCharCode(65 + optIndexNum)
                      : optKey;
                    return (
                      <div key={optKey} className="cpp-why-wrong-item">
                        <strong>Trap Option {optLetter}: </strong>
                        <span>{reason}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
