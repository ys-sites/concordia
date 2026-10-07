import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { CourseId, CourseDocument, PracticeQuestion, QuizSessionState } from '../types';
import { questionPool, sectionLabel, DRILL_LENGTH } from '../data/quizSections';
import { MathText } from '../utils/mathRenderer';
import { shuffled, shuffleOptions } from '../utils/shuffle';
import { SourceList } from './SourceList';
import { WorkedSolution } from './WorkedSolution';
import { audio } from '../utils/audio';
import { speechEngine } from '../utils/speechEngine';
import { 
  Brain, 
  Flame, 
  Timer, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  HelpCircle, 
  AlertTriangle,
  RotateCcw,
  Sparkles, 
  BookOpen,
  X,
  Volume2,
  Bot,
  Square
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizEngineProps {
  courseId: CourseId;
  sectionId: string;
  onExit: () => void;
  onOpenPdf?: (doc: CourseDocument, pageNumber?: number) => void;
  onComplete: (results: {
    courseId: CourseId;
    sectionLabel: string;
    totalQuestions: number;
    score: number;
    timeSpentSeconds: number;
    missedQuestions: PracticeQuestion[];
    answeredQuestions: { question: PracticeQuestion; selectedIndex: number; isCorrect: boolean }[];
  }) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ courseId, sectionId, onExit, onOpenPdf, onComplete }) => {
  // Up to 20 random questions from this course + section only (never mixed across courses).
  // Practice invariant: question order AND each question's answer-option order are
  // freshly shuffled on every drill start, so the correct answer never sits in a
  // learnable position. (Remount via key={drillRun} re-runs this on every retake.)
  const sessionQuestions = useMemo(() => {
    const pool = questionPool(courseId, sectionId);
    return shuffled(pool).slice(0, DRILL_LENGTH).map((q): PracticeQuestion => {
      const { options, correctIndex, order } = shuffleOptions(q.options, q.correctIndex);
      // Wrong-answer diagnoses are keyed by option index, so they move with their options
      const whyWrong = q.explanation.whyWrong
        ? Object.fromEntries(
            Object.entries(q.explanation.whyWrong).map(([orig, text]) => [String(order.indexOf(Number(orig))), text])
          )
        : undefined;
      return {
        ...q,
        options: options as PracticeQuestion['options'],
        correctIndex: correctIndex as PracticeQuestion['correctIndex'],
        explanation: { ...q.explanation, whyWrong }
      };
    });
  }, [courseId, sectionId]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [startTime] = useState<number>(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Text-to-speech state: which voice action is currently talking
  const voiceSupported = speechEngine.isSupported();
  const [speakingMode, setSpeakingMode] = useState<'none' | 'listen' | 'robot'>('none');
  // Non-null while the neural voice model downloads on first use (0-100)
  const [voiceLoadPct, setVoiceLoadPct] = useState<number | null>(null);
  const [autoRead, setAutoRead] = useState<boolean>(() => {
    try { return localStorage.getItem('quiz-auto-read') === '1'; } catch { return false; }
  });

  // Scroll target: top of the question card (so "Next" lands on the question, not the footer)
  const cardRef = useRef<HTMLDivElement>(null);
  const isFirstQuestionRender = useRef(true);

  // Timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  // Keyboard navigation: ArrowLeft to go back, ArrowRight to advance if answered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          handlePrevious();
        }
      } else if (e.key === 'ArrowRight') {
        if (selectedAnswers[currentIndex] !== undefined) {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, selectedAnswers, sessionQuestions.length]);

  const currentQ = sessionQuestions[currentIndex];
  const isAnswered = selectedAnswers[currentIndex] !== undefined;
  const userSelectedIndex = selectedAnswers[currentIndex];
  const isCorrect = isAnswered && userSelectedIndex === currentQ.correctIndex;

  // ---------- Voice: read the question aloud ----------
  const stopSpeaking = useCallback(() => {
    speechEngine.stop();
    setSpeakingMode('none');
    setVoiceLoadPct(null);
  }, []);

  const buildQuestionScript = (q: PracticeQuestion, index: number) => {
    const letters = ['A', 'B', 'C', 'D'];
    const options = q.options.map((opt, i) => `Option ${letters[i]}: ${opt}.`).join(' ');
    const code = q.codeSnippet ? ' A code snippet is shown on screen.' : '';
    return `Question ${index + 1}. ${q.question}${code} ${options}`;
  };

  const speakQuestion = useCallback((mode: 'listen' | 'robot') => {
    if (!voiceSupported) return;
    const q = sessionQuestions[currentIndex];
    const script = mode === 'listen'
      ? buildQuestionScript(q, currentIndex)
      : `Sure! Here's question ${currentIndex + 1} again. ${q.question}`;
    audio.playVoiceCue();
    speechEngine.speak(script, {
      // The robot repeats a little slower and warmer so it's easier to follow the second time
      rate: mode === 'robot' ? 0.88 : 0.95,
      pitch: mode === 'robot' ? 1.05 : 1.0,
      onLoading: (pct) => setVoiceLoadPct(pct),
      onStart: () => { setVoiceLoadPct(null); setSpeakingMode(mode); },
      onEnd: () => { setVoiceLoadPct(null); setSpeakingMode('none'); },
      onError: () => { setVoiceLoadPct(null); setSpeakingMode('none'); }
    });
    setSpeakingMode(mode);
  }, [voiceSupported, sessionQuestions, currentIndex]);

  const handleVoiceButton = (mode: 'listen' | 'robot') => {
    if (speakingMode === mode) {
      audio.playVoiceStop();
      stopSpeaking();
      return;
    }
    speakQuestion(mode);
  };

  const toggleAutoRead = () => {
    const next = !autoRead;
    setAutoRead(next);
    try { localStorage.setItem('quiz-auto-read', next ? '1' : '0'); } catch { /* storage unavailable */ }
    if (next) speakQuestion('listen');
    else stopSpeaking();
  };

  // Stop talking when leaving the drill
  useEffect(() => () => speechEngine.stop(), []);

  // On every question change: silence the previous question, bring the new question's top into view,
  // and (optionally) auto-read it
  useEffect(() => {
    stopSpeaking();

    if (isFirstQuestionRender.current) {
      isFirstQuestionRender.current = false;
    } else {
      const el = cardRef.current;
      if (el) {
        // Wait one frame so the previous explanation drawer has collapsed before measuring
        requestAnimationFrame(() => {
          const nav = document.querySelector<HTMLElement>('.navbar-container');
          const navIsPinned = nav && ['sticky', 'fixed'].includes(getComputedStyle(nav).position);
          const offset = (navIsPinned && nav ? nav.getBoundingClientRect().height : 0) + 12;
          const top = el.getBoundingClientRect().top;
          // Only scroll if the question's start isn't already comfortably on screen
          if (top < offset || top > window.innerHeight * 0.35) {
            el.style.scrollMarginTop = `${offset}px`;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            el.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
          }
        });
      }
    }

    if (autoRead) speakQuestion('listen');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return; // prevent changing
    stopSpeaking();

    const correct = optionIndex === currentQ.correctIndex;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));

    if (correct) {
      audio.playCorrect();
      setScore(s => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Mini celebration on streak milestones
      if (newStreak % 5 === 0) {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 }
        });
      }
    } else {
      audio.playIncorrect();
      setStreak(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      audio.playClick();
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleJumpTo = (index: number) => {
    if (index >= 0 && index < sessionQuestions.length) {
      audio.playClick();
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    audio.playClick();
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed every question in the drill
      const totalTime = Math.floor((Date.now() - startTime) / 1000);
      const missed: PracticeQuestion[] = [];
      const history = sessionQuestions.map((q, idx) => {
        const chosen = selectedAnswers[idx];
        const correct = chosen === q.correctIndex;
        if (!correct) missed.push(q);
        return { question: q, selectedIndex: chosen, isCorrect: correct };
      });

      if (score >= Math.ceil(sessionQuestions.length * 0.8)) {
        audio.playComplete();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      onComplete({
        courseId,
        sectionLabel: sectionLabel(courseId, sectionId),
        totalQuestions: sessionQuestions.length,
        score,
        timeSpentSeconds: totalTime,
        missedQuestions: missed,
        answeredQuestions: history
      });
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const progressPercentage = ((currentIndex + (isAnswered ? 1 : 0)) / sessionQuestions.length) * 100;

  return (
    <div className="quiz-session-wrapper">
      {/* Top HUD Control Bar */}
      <div className="quiz-hud-bar">
        <div className="hud-left">
          <div className="brain-badge">
            <Brain size={18} className="pulse-glow" />
            <span>BRAIN DRILL · {sessionQuestions.length} QUESTIONS</span>
          </div>

          <span className="course-pill-tag">
            {courseId} · {sectionLabel(courseId, sectionId)}
          </span>
        </div>

        <div className="hud-center">
          <div className="hud-metric">
            <Timer size={16} className="text-cyan" />
            <span className="metric-val">{formatTime(elapsedSeconds)}</span>
          </div>

          <div className="hud-metric">
            <Award size={16} className="text-amber" />
            <span className="metric-val">Score: {score}/{currentIndex + (isAnswered ? 1 : 0)}</span>
          </div>

          {streak >= 2 && (
            <div className="streak-badge-animated">
              <Flame size={16} className="text-rose animate-bounce" />
              <span>{streak}x Streak!</span>
            </div>
          )}
        </div>

        <div className="hud-right">
          <button 
            className="exit-quiz-btn"
            onClick={() => {
              if (window.confirm("Exit this practice drill? Your answers so far will be lost.")) {
                onExit();
              }
            }}
            title="Exit Session"
          >
            <X size={18} />
            <span>Exit Drill</span>
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="quiz-progress-track">
        <div 
          className="quiz-progress-fill" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Interactive Question Navigation Bar */}
      <div className="quiz-pills-bar" aria-label="Question Navigation">
        <button 
          className="quiz-pill-nav-btn"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          title="Previous Question (Left Arrow)"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        <div className="quiz-pills-scroll">
          {sessionQuestions.map((q, idx) => {
            const answered = selectedAnswers[idx] !== undefined;
            const correct = answered && selectedAnswers[idx] === q.correctIndex;
            const isCurrent = idx === currentIndex;
            let statusClass = 'pill-unanswered';
            if (answered) {
              statusClass = correct ? 'pill-correct' : 'pill-incorrect';
            }
            if (isCurrent) statusClass += ' pill-active';

            return (
              <button
                key={idx}
                className={`quiz-q-pill ${statusClass}`}
                onClick={() => handleJumpTo(idx)}
                title={`Question ${idx + 1}${answered ? (correct ? ' (Correct)' : ' (Incorrect)') : ' (Not answered yet)'}`}
              >
                {answered && correct && <CheckCircle2 size={11} className="pill-status-ico" />}
                {answered && !correct && <XCircle size={11} className="pill-status-ico" />}
                <span>{idx + 1}</span>
              </button>
            );
          })}
        </div>

        <button 
          className="quiz-pill-nav-btn"
          onClick={handleNext}
          title={currentIndex === sessionQuestions.length - 1 ? 'Finish Drill' : 'Next Question (Right Arrow)'}
        >
          <span>{currentIndex === sessionQuestions.length - 1 ? 'Finish' : 'Next'}</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Main Question Card Area */}
      <div className="quiz-card-container" ref={cardRef}>
        <div className="quiz-card-header">
          <div className="header-nav-group">
            <button
              className="quiz-step-btn"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              title="Previous Question"
            >
              <ChevronLeft size={16} />
              <span>Back</span>
            </button>
            <div className="question-number-badge">
              Question <strong>{currentIndex + 1}</strong> of {sessionQuestions.length}
            </div>
            {currentIndex < sessionQuestions.length - 1 && (
              <button
                className="quiz-step-btn"
                onClick={handleNext}
                title="Next Question"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            )}
          </div>

          <div className="question-meta-group">
            <span className="topic-badge">{currentQ.topic}</span>
            {currentQ.pastPaper ? (
              <span className="past-paper-badge" title={`Official Paper Origin: ${currentQ.pastPaper}`}>
                🏛️ {currentQ.pastPaper}
              </span>
            ) : currentQ.chapter.startsWith('past') ? (
              <span className="past-paper-badge">🏛️ Past Paper Drill</span>
            ) : currentQ.source?.[0] ? (
              <span className="source-origin-badge" title={`Curriculum Slide: ${currentQ.source[0].deck}`}>
                📖 {currentQ.source[0].deck.replace('.pdf', '')}{currentQ.source[0].location ? ` (${currentQ.source[0].location})` : ''}
              </span>
            ) : currentQ.explanation?.reference ? (
              <span className="source-origin-badge" title={`Curriculum Reference: ${currentQ.explanation.reference}`}>
                📖 {currentQ.explanation.reference.split(';')[0].replace('.pdf', '')}
              </span>
            ) : null}
            <span className={`difficulty-badge diff-${currentQ.difficulty.toLowerCase().replace(' ', '-')}`}>
              {currentQ.difficulty}
            </span>
          </div>
        </div>

        {/* Question Statement */}
        <div className="question-statement-box">
          {voiceSupported && (
            <div className="question-voice-bar" role="group" aria-label="Read question aloud">
              <button
                type="button"
                className={`voice-btn voice-listen-btn ${speakingMode === 'listen' ? 'is-speaking' : ''}`}
                onClick={() => handleVoiceButton('listen')}
                aria-pressed={speakingMode === 'listen'}
                title={speakingMode === 'listen' ? 'Stop reading' : 'Listen to the question and its options'}
                id="quiz-listen-btn"
              >
                {speakingMode === 'listen' ? <Square size={14} /> : <Volume2 size={17} />}
                <span>{speakingMode === 'listen' ? (voiceLoadPct !== null ? `Loading voice… ${voiceLoadPct}%` : 'Stop') : 'Listen'}</span>
                {speakingMode === 'listen' && (
                  <span className="voice-wave" aria-hidden="true"><i /><i /><i /><i /></span>
                )}
              </button>

              <button
                type="button"
                className={`voice-btn voice-robot-btn ${speakingMode === 'robot' ? 'is-speaking' : ''}`}
                onClick={() => handleVoiceButton('robot')}
                aria-pressed={speakingMode === 'robot'}
                title={speakingMode === 'robot' ? 'Stop repeating' : 'Ask the voice assistant to repeat the question'}
                id="quiz-robot-repeat-btn"
              >
                <span className="robot-avatar" aria-hidden="true"><Bot size={18} /></span>
                <span>{speakingMode === 'robot' ? (voiceLoadPct !== null ? `Loading voice… ${voiceLoadPct}%` : 'Repeating…') : 'Repeat'}</span>
                {speakingMode === 'robot' && (
                  <span className="voice-wave" aria-hidden="true"><i /><i /><i /><i /></span>
                )}
              </button>

              <button
                type="button"
                className={`auto-read-toggle ${autoRead ? 'is-on' : ''}`}
                onClick={toggleAutoRead}
                role="switch"
                aria-checked={autoRead}
                title="Automatically read each new question aloud"
                id="quiz-auto-read-toggle"
              >
                <span className="toggle-track"><span className="toggle-thumb" /></span>
                <span>Auto-read</span>
              </button>
            </div>
          )}
          <h2 className="statement-text">
            <MathText text={currentQ.question} />
          </h2>

          {currentQ.codeSnippet && (
            <pre className="code-snippet-box">
              <code>{currentQ.codeSnippet}</code>
            </pre>
          )}
        </div>

        {/* 4 Interactive Choix de Réponse Options */}
        <div className="options-grid">
          {currentQ.options.map((opt, optIdx) => {
            const letter = ['A', 'B', 'C', 'D'][optIdx];
            let optionStateClass = '';

            if (isAnswered) {
              if (optIdx === currentQ.correctIndex) {
                optionStateClass = 'correct-option pulse-correct';
              } else if (optIdx === userSelectedIndex) {
                optionStateClass = 'incorrect-option shake-incorrect';
              } else {
                optionStateClass = 'dimmed-option';
              }
            }

            return (
              <button
                key={optIdx}
                className={`option-btn ${optionStateClass}`}
                onClick={() => handleSelectOption(optIdx)}
                disabled={isAnswered}
              >
                <div className="option-letter">{letter}</div>
                <div className="option-text">
                  <MathText text={opt} />
                </div>

                <div className="option-feedback-icon">
                  {isAnswered && optIdx === currentQ.correctIndex && (
                    <CheckCircle2 size={20} className="text-emerald" />
                  )}
                  {isAnswered && optIdx === userSelectedIndex && optIdx !== currentQ.correctIndex && (
                    <XCircle size={20} className="text-rose" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Unanswered back review helper */}
        {!isAnswered && currentIndex > 0 && (
          <div className="unanswered-nav-row">
            <button className="quiz-prev-subtle-btn" onClick={handlePrevious}>
              <ArrowLeft size={15} />
              <span>Review Previous Question (Q{currentIndex})</span>
            </button>
          </div>
        )}

        {/* Immediate Explanation Drawer */}
        {isAnswered && (
          <div className={`explanation-drawer ${isCorrect ? 'drawer-correct' : 'drawer-incorrect'}`}>
            <div className="drawer-header">
              {isCorrect ? (
                <div className="feedback-status status-correct">
                  <CheckCircle2 size={20} />
                  <span>Correct! Spot on engineering reasoning.</span>
                </div>
              ) : (
                <div className="feedback-status status-incorrect">
                  <AlertTriangle size={20} />
                  <span>Not quite. Let's find exactly where it went wrong.</span>
                </div>
              )}

              <SourceList question={currentQ} onOpenPdf={onOpenPdf} />
            </div>

            <div className="drawer-body">
              <WorkedSolution
                key={currentIndex}
                question={currentQ}
                selectedIndex={userSelectedIndex}
                mode={isCorrect ? 'correct' : 'wrong'}
              />
            </div>

            {/* Next / Prev Question CTA */}
            <div className="drawer-footer">
              <button 
                className="prev-question-btn" 
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ArrowLeft size={18} />
                <span>Previous Question</span>
              </button>

              <button className="next-question-btn" onClick={handleNext}>
                <span>{currentIndex === sessionQuestions.length - 1 ? 'Finish Drill & View Readiness Score' : 'Next Question'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
