import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Bookmark,
  Bot,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Flame,
  HelpCircle,
  Lightbulb,
  ListOrdered,
  Play,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Square,
  Target,
  Timer,
  Volume2,
  X,
  XCircle,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { CourseWithDocs } from '../../data/coursesData';
import type { CourseDocument } from '../../types';
import { audio } from '../../utils/audio';
import { speechEngine } from '../../utils/speechEngine';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { grade, letter, recordResult } from './drill';
import type { DrillItem } from './drill';
import type { GateContent, GateNav } from './vaultTypes';
import type { GateIndex } from './shared';
import { buildStepByStepSolution, getDetailedWorkedSolution, resolveFoundationSources } from './vaultFoundation';
import { VideoPlayer } from './QuizExplain';
import { GateSolveVideo } from './GateSolveVideo';
import { AskAiButton } from './AskAiModal';
import './midtermGate.css';
import './gateExtras.css';

interface Props {
  course: CourseWithDocs;
  content: GateContent;
  idx: GateIndex;
  nav: GateNav;
  title: string;
  items: DrillItem[];
  fromLessonId?: string;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
  onBack: () => void;
  onOpenQuestion?: (id: string) => void;
}

export const VaultQuizSubPage: React.FC<Props> = ({
  course,
  content,
  idx,
  nav,
  title,
  items: initialItems,
  fromLessonId,
  onViewPdf,
  onBack,
  onOpenQuestion
}) => {
  const [items, setItems] = useState<DrillItem[]>(initialItems);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({});
  const [inputTexts, setInputTexts] = useState<Record<number, string>>({});
  const [gradedResults, setGradedResults] = useState<Record<number, boolean>>({});
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [startTime] = useState<number>(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [activeVideoEmbed, setActiveVideoEmbed] = useState<string | null>(null);

  // Text-to-speech state
  const voiceSupported = speechEngine.isSupported();
  const [speakingMode, setSpeakingMode] = useState<'none' | 'listen' | 'robot'>('none');
  const [voiceLoadPct, setVoiceLoadPct] = useState<number | null>(null);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const voiceErrorTimer = useRef<number | null>(null);
  const [autoRead, setAutoRead] = useState<boolean>(() => {
    try {
      return localStorage.getItem('vault-quiz-auto-read') === '1';
    } catch {
      return false;
    }
  });

  const cardRef = useRef<HTMLDivElement>(null);

  // Timer interval
  useEffect(() => {
    if (isCompleted) return;
    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, isCompleted]);

  // Sync initial items
  useEffect(() => {
    setItems(initialItems);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setInputTexts({});
    setGradedResults({});
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  }, [initialItems]);

  const currentQ = items[currentIndex];
  const isAnswered = gradedResults[currentIndex] !== undefined;
  const isCorrect = gradedResults[currentIndex] === true;
  const userSelection = selectedAnswers[currentIndex] || [];
  const userText = inputTexts[currentIndex] || '';

  const fromLesson = fromLessonId ? idx.formula.get(fromLessonId) : undefined;
  const qObj = currentQ?.qid ? idx.q.get(currentQ.qid) : undefined;
  const topicObj = currentQ?.topic ? idx.topic.get(currentQ.topic) : undefined;

  // Resolve 4-Pillar Foundation sources for current question
  const foundation = useMemo(() => {
    if (!currentQ) return null;
    return resolveFoundationSources(currentQ, content, idx, course);
  }, [currentQ, content, idx, course]);

  // Step-by-step mathematical derivation (Baby Steps) & Detailed Worked Solution
  const workedSolution = useMemo(() => {
    if (!currentQ) return null;
    return getDetailedWorkedSolution(currentQ, fromLesson, qObj);
  }, [currentQ, fromLesson, qObj]);

  const stepItems = useMemo(() => {
    if (!workedSolution) return [];
    return workedSolution.steps.map((st, i) => ({
      number: i + 1,
      title: st.title,
      math: st.math,
      explanation: st.explanation || ''
    }));
  }, [workedSolution]);

  const [shownSteps, setShownSteps] = useState<number>(stepItems.length);

  useEffect(() => {
    setShownSteps(stepItems.length);
  }, [currentIndex, stepItems.length]);

  // Stop voice on question change
  const stopSpeaking = useCallback(() => {
    speechEngine.stop();
    setSpeakingMode('none');
    setVoiceLoadPct(null);
  }, []);

  useEffect(() => {
    stopSpeaking();
    setActiveVideoEmbed(null);
  }, [currentIndex, stopSpeaking]);

  // Build audio script
  const buildQuestionScript = (it: DrillItem, index: number) => {
    let script = `Question ${index + 1}. ${it.prompt}.`;
    if (it.opts && it.opts.length > 0) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      const optStr = it.opts.map((opt, i) => `Option ${letters[i]}: ${opt}.`).join(' ');
      script += ` ${optStr}`;
    } else if (it.kind === 'tf') {
      script += ' True, or False?';
    }
    return script;
  };

  const speakQuestion = useCallback(
    (mode: 'listen' | 'robot') => {
      if (!voiceSupported || !currentQ) return;
      const script =
        mode === 'listen'
          ? buildQuestionScript(currentQ, currentIndex)
          : `Sure! Let's review question ${currentIndex + 1} carefully. ${currentQ.prompt}`;
      audio.playVoiceCue();
      speechEngine.speak(script, {
        rate: mode === 'robot' ? 0.88 : 0.95,
        pitch: mode === 'robot' ? 1.05 : 1.0,
        onLoading: (pct) => setVoiceLoadPct(pct),
        onStart: () => {
          setVoiceLoadPct(null);
          setVoiceError(null);
          setSpeakingMode(mode);
        },
        onEnd: () => {
          setSpeakingMode('none');
          setVoiceLoadPct(null);
        },
        onError: (err) => {
          setSpeakingMode('none');
          setVoiceLoadPct(null);
          setVoiceError(String(err));
        }
      });
    },
    [voiceSupported, currentQ, currentIndex]
  );

  const handleVoiceButton = (mode: 'listen' | 'robot') => {
    if (speakingMode === mode) {
      stopSpeaking();
    } else {
      speakQuestion(mode);
    }
  };

  const toggleAutoRead = () => {
    const next = !autoRead;
    setAutoRead(next);
    try {
      localStorage.setItem('vault-quiz-auto-read', next ? '1' : '0');
    } catch {
      // ignore
    }
    if (next && !isAnswered) {
      speakQuestion('listen');
    } else {
      stopSpeaking();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrevious();
      } else if (e.key === 'ArrowRight' && isAnswered) {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const isMulti = currentQ?.kind === 'multi';

  // Correct options for highlighting: every correct letter on a select-all question, else the graded one
  const isCorrectOption = (optLet: string) =>
    isMulti ? currentQ.correct.map((c) => c.toLowerCase()).includes(optLet.toLowerCase()) : grade(currentQ, [optLet]);

  const handleSelectOption = (optLetter: string) => {
    if (isAnswered || !currentQ) return;
    if (isMulti) {
      // Select-all-that-apply: toggle letters, graded only when the student presses Check answer
      audio.playClick();
      const l = optLetter.trim().toLowerCase();
      setSelectedAnswers((prev) => {
        const cur = prev[currentIndex] || [];
        return { ...prev, [currentIndex]: cur.includes(l) ? cur.filter((x) => x !== l) : [...cur, l] };
      });
      return;
    }
    submitChoice([optLetter.trim()]);
  };

  const submitChoice = (ans: string[]) => {
    if (isAnswered || !currentQ || ans.length === 0) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: ans }));
    const ok = grade(currentQ, ans);
    setGradedResults((prev) => ({ ...prev, [currentIndex]: ok }));
    recordResult(content.course, currentQ.key, ok);

    if (ok) {
      audio.playCorrect();
      setScore((s) => s + 1);
      setStreak((st) => {
        const next = st + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
    } else {
      audio.playIncorrect();
      setStreak(0);
    }
  };

  const handleSubmitText = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isAnswered || !currentQ || !userText.trim()) return;
    const ans = [userText.trim()];
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: ans }));
    const ok = grade(currentQ, ans);
    setGradedResults((prev) => ({ ...prev, [currentIndex]: ok }));
    recordResult(content.course, currentQ.key, ok);

    if (ok) {
      audio.playCorrect();
      setScore((s) => s + 1);
      setStreak((st) => {
        const next = st + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
    } else {
      audio.playIncorrect();
      setStreak(0);
    }
  };

  const handleReroll = () => {
    if (!currentQ?.regen) return;
    const fresh = currentQ.regen();
    if (!fresh) return;
    setItems((list) => list.map((x, k) => (k === currentIndex ? fresh : x)));
    setSelectedAnswers((prev) => {
      const next = { ...prev };
      delete next[currentIndex];
      return next;
    });
    setInputTexts((prev) => {
      const next = { ...prev };
      delete next[currentIndex];
      return next;
    });
    setGradedResults((prev) => {
      const next = { ...prev };
      delete next[currentIndex];
      return next;
    });
  };

  const handleJumpTo = (index: number) => {
    if (index >= 0 && index < items.length) {
      audio.playClick();
      setCurrentIndex(index);
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      audio.playClick();
      setCurrentIndex((prev) => prev - 1);
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    audio.playClick();
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (autoRead) {
        setTimeout(() => speakQuestion('listen'), 200);
      }
    } else {
      // Completed drill
      setIsCompleted(true);
      if (score >= Math.ceil(items.length * 0.75)) {
        audio.playComplete();
        confetti({
          particleCount: 120,
          spread: 75,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = (reshuffle = false) => {
    audio.playClick();
    const list = reshuffle ? [...items].sort(() => Math.random() - 0.5) : [...items];
    setItems(list);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setInputTexts({});
    setGradedResults({});
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(gradedResults).length;
  const progressPercentage = (answeredCount / items.length) * 100;
  const missedIndices = items
    .map((_, idx) => idx)
    .filter((idx) => gradedResults[idx] === false);

  // Completion summary view
  if (isCompleted) {
    const accuracy = Math.round((score / items.length) * 100);
    return (
      <div className="mg-subpage-container" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="quiz-hud-bar">
          <div className="hud-left">
            <button type="button" className="mg-btn small" onClick={onBack}>
              <ArrowLeft size={14} />
              <span>{fromLesson ? `Back to ${fromLesson.name}` : 'Back to Folder'}</span>
            </button>
            <span className="course-pill-tag">
              {course.code} · Drill Completed
            </span>
          </div>
        </div>

        <div
          className="quiz-card-container"
          style={{
            textAlign: 'center',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: accuracy >= 75 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accuracy >= 75 ? '#10b981' : '#f59e0b',
              marginBottom: 8
            }}
          >
            {accuracy >= 75 ? <Award size={38} /> : <Target size={38} />}
          </div>

          <h2 style={{ fontSize: 26, margin: 0, color: 'var(--text-primary)' }}>
            {accuracy >= 85 ? 'Outstanding Performance!' : accuracy >= 70 ? 'Solid Exam Readiness!' : 'Practice Complete · Keep Reviewing'}
          </h2>

          <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 520, margin: 0 }}>
            You scored <strong>{score} out of {items.length}</strong> ({accuracy}%) in {formatTime(elapsedSeconds)}.
            {missedIndices.length === 0
              ? ' You demonstrated perfect mastery on every question!'
              : ` You missed ${missedIndices.length} question${missedIndices.length === 1 ? '' : 's'}. Review the step-by-step solutions below.`}
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              className="mg-btn primary"
              onClick={() => handleRestart(true)}
              style={{ padding: '10px 18px', fontSize: 14, fontWeight: 700 }}
            >
              <RotateCcw size={15} />
              <span>Shuffle & Retake Drill</span>
            </button>

            {missedIndices.length > 0 && (
              <button
                type="button"
                className="mg-btn"
                onClick={() => {
                  setIsCompleted(false);
                  handleJumpTo(missedIndices[0]);
                }}
                style={{ padding: '10px 18px', fontSize: 14 }}
              >
                <HelpCircle size={15} />
                <span>Review Missed Questions ({missedIndices.length})</span>
              </button>
            )}

            <button type="button" className="mg-btn" onClick={onBack} style={{ padding: '10px 18px', fontSize: 14 }}>
              <ArrowLeft size={15} />
              <span>{fromLesson ? 'Return to Lesson' : 'Back to Hidden Folder'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mg-subpage-container" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Top HUD Control Bar */}
      <div className="quiz-hud-bar">
        <div className="hud-left">
          <button
            type="button"
            className="mg-btn small"
            onClick={() => {
              if (answeredCount > 0 && !window.confirm('Return to previous page? Current drill answers will be cleared.')) {
                return;
              }
              onBack();
            }}
            title={fromLesson ? 'Return to lesson' : 'Back'}
          >
            <ArrowLeft size={14} />
            <span>{fromLesson ? `Back to ${fromLesson.name}` : 'Back'}</span>
          </button>

          <div className="brain-badge">
            <Brain size={17} className="pulse-glow" />
            <span>EXAM DRILL · {items.length} QUESTIONS</span>
          </div>

          <span className="course-pill-tag" title={title}>
            {course.code} · {title}
          </span>
        </div>

        <div className="hud-center">
          <div className="hud-metric">
            <Timer size={16} className="text-cyan" />
            <span className="metric-val">{formatTime(elapsedSeconds)}</span>
          </div>

          <div className="hud-metric">
            <Award size={16} className="text-amber" />
            <span className="metric-val">
              Score: {score}/{answeredCount}
            </span>
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
            type="button"
            className="mg-btn small"
            onClick={() => handleRestart(true)}
            title="Shuffle questions and restart"
          >
            <RefreshCw size={13} />
            <span>Shuffle</span>
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${progressPercentage}%` }} />
      </div>

      {/* Top Question Number Pills Navigation Bar */}
      <div className="quiz-pills-bar" aria-label="Question Navigation">
        <button
          type="button"
          className="quiz-pill-nav-btn"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          title="Previous Question"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        <div className="quiz-pills-scroll">
          {items.map((it, idx) => {
            const answered = gradedResults[idx] !== undefined;
            const ok = gradedResults[idx] === true;
            const isCurrent = idx === currentIndex;
            let statusClass = 'pill-unanswered';
            if (answered) {
              statusClass = ok ? 'pill-correct' : 'pill-incorrect';
            }
            if (isCurrent) statusClass += ' pill-active';

            return (
              <button
                key={idx}
                type="button"
                className={`quiz-q-pill ${statusClass}`}
                onClick={() => handleJumpTo(idx)}
                title={`Question ${idx + 1}${answered ? (ok ? ' (Correct)' : ' (Incorrect)') : ' (Unanswered)'}`}
              >
                {answered && ok && <CheckCircle2 size={11} className="pill-status-ico" />}
                {answered && !ok && <XCircle size={11} className="pill-status-ico" />}
                <span>{idx + 1}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="quiz-pill-nav-btn"
          onClick={handleNext}
          title={currentIndex === items.length - 1 ? 'Finish Drill' : 'Next Question'}
        >
          <span>{currentIndex === items.length - 1 ? 'Finish' : 'Next'}</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Main Question Card Container */}
      <div className="quiz-card-container" ref={cardRef}>
        {/* Card Header & Badges */}
        <div className="quiz-card-header">
          <div className="header-nav-group">
            <button
              type="button"
              className="quiz-step-btn"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              title="Previous Question"
            >
              <ChevronLeft size={16} />
              <span>Back</span>
            </button>

            <div className="question-number-badge">
              Question <strong>{currentIndex + 1}</strong> of {items.length}
            </div>

            {currentIndex < items.length - 1 && (
              <button type="button" className="quiz-step-btn" onClick={handleNext} title="Next Question">
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            )}
          </div>

          <div className="question-meta-group" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {topicObj && <span className="topic-badge">{topicObj.name}</span>}

            {/* Clickable Authentic Past Exam Badge */}
            {foundation?.exam && (
              <button
                type="button"
                className="past-paper-badge"
                onClick={() => {
                  if (foundation.exam?.doc) {
                    audio.playClick();
                    onViewPdf(foundation.exam.doc, foundation.exam.page);
                  }
                }}
                style={{
                  cursor: foundation.exam?.doc ? 'pointer' : 'default',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4
                }}
                title={foundation.exam.doc ? `Click to open authentic past exam: ${foundation.exam.title}` : foundation.exam.title}
              >
                <span>🏛️</span>
                <span>{foundation.exam.label}</span>
                {foundation.exam.doc && <ExternalLink size={11} />}
              </button>
            )}

            {/* Clickable Teacher Lecture Slide Badge */}
            {foundation?.lecture && (
              <button
                type="button"
                className="source-origin-badge"
                onClick={() => {
                  if (foundation.lecture?.doc) {
                    audio.playClick();
                    onViewPdf(foundation.lecture.doc, foundation.lecture.page);
                  }
                }}
                style={{
                  cursor: foundation.lecture?.doc ? 'pointer' : 'default',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4
                }}
                title={foundation.lecture.doc ? `Click to open lecture notes: ${foundation.lecture.title}` : foundation.lecture.title}
              >
                <span>📖</span>
                <span>
                  {foundation.lecture.title.replace('.pdf', '')} ({foundation.lecture.slideLabel})
                </span>
                {foundation.lecture.doc && <ExternalLink size={11} />}
              </button>
            )}

            <span className={`difficulty-badge ${qObj ? 'diff-midterm-level' : 'diff-foundation'}`}>
              {qObj ? 'MIDTERM LEVEL' : currentQ.badge === 'similar' ? 'SIMILAR · NEW NUMBERS' : 'PRACTICE LEVEL'}
            </span>
          </div>
        </div>

        {/* Question Statement Box */}
        <div className="question-statement-box">
          {voiceSupported && (
            <div className="question-voice-bar" role="group" aria-label="Read question aloud">
              <button
                type="button"
                className={`voice-btn voice-listen-btn ${speakingMode === 'listen' ? 'is-speaking' : ''}`}
                onClick={() => handleVoiceButton('listen')}
                aria-pressed={speakingMode === 'listen'}
                title={speakingMode === 'listen' ? 'Stop reading' : 'Listen to question'}
              >
                {speakingMode === 'listen' ? <Square size={14} /> : <Volume2 size={17} />}
                <span>
                  {speakingMode === 'listen'
                    ? voiceLoadPct !== null
                      ? `Loading voice… ${voiceLoadPct}%`
                      : 'Stop'
                    : 'Listen'}
                </span>
                {speakingMode === 'listen' && (
                  <span className="voice-wave" aria-hidden="true">
                    <i /><i /><i /><i />
                  </span>
                )}
              </button>

              <button
                type="button"
                className={`voice-btn voice-robot-btn ${speakingMode === 'robot' ? 'is-speaking' : ''}`}
                onClick={() => handleVoiceButton('robot')}
                aria-pressed={speakingMode === 'robot'}
                title="Ask voice assistant to repeat question"
              >
                <span className="robot-avatar" aria-hidden="true">
                  <Bot size={18} />
                </span>
                <span>
                  {speakingMode === 'robot'
                    ? voiceLoadPct !== null
                      ? `Loading voice… ${voiceLoadPct}%`
                      : 'Repeating…'
                    : 'Repeat'}
                </span>
                {speakingMode === 'robot' && (
                  <span className="voice-wave" aria-hidden="true">
                    <i /><i /><i /><i />
                  </span>
                )}
              </button>

              <button
                type="button"
                className={`auto-read-toggle ${autoRead ? 'is-on' : ''}`}
                onClick={toggleAutoRead}
                role="switch"
                aria-checked={autoRead}
                title="Automatically read each new question aloud"
              >
                <span className="toggle-track">
                  <span className="toggle-thumb" />
                </span>
                <span>Auto-read</span>
              </button>

              {currentQ.regen && (
                <button
                  type="button"
                  className="mg-btn small"
                  onClick={handleReroll}
                  style={{ marginLeft: 'auto' }}
                  title="Generate new numbers for this question"
                >
                  <RefreshCw size={13} />
                  <span>Re-roll numbers</span>
                </button>
              )}
            </div>
          )}

          {voiceError && (
            <div className="voice-error" role="alert" style={{ margin: '8px 0' }}>
              <span>Voice message: {voiceError}</span>
              <button type="button" onClick={() => setVoiceError(null)} aria-label="Dismiss">
                ×
              </button>
            </div>
          )}

          <h2 className="statement-text" style={{ fontSize: 20, margin: '14px 0 10px', color: '#0f172a' }}>
            <MathText text={currentQ.prompt} />
          </h2>

          {currentQ.code && (
            <pre className="code-snippet-box">
              <code>{currentQ.code}</code>
            </pre>
          )}
        </div>

        {isMulti && currentQ.opts && currentQ.opts.length > 0 && (
          <div className="vq-multi-hint" role="note">
            <strong>Select all that apply</strong>
            <span>
              {currentQ.correct.length} correct answers · pick every one, then press Check answer
            </span>
          </div>
        )}

        {/* Interactive Answer Options Grid (MC / T/F / Numeric) */}
        {currentQ.opts && currentQ.opts.length > 0 ? (
          <div className="options-grid" role={isMulti ? 'group' : undefined} aria-label={isMulti ? 'Select all that apply' : undefined}>
            {currentQ.opts.map((opt, optIdx) => {
              const optLet = letter(optIdx);
              const isSelected = userSelection.map((s) => s.toLowerCase()).includes(optLet.toLowerCase());
              const isCorrectOpt = isCorrectOption(optLet);

              let optionStateClass = '';
              if (isAnswered) {
                if (isCorrectOpt) {
                  optionStateClass = isMulti && !isSelected ? 'correct-option vq-missed-option' : 'correct-option pulse-correct';
                } else if (isSelected && !isCorrectOpt) {
                  optionStateClass = 'incorrect-option shake-incorrect';
                } else {
                  optionStateClass = 'dimmed-option';
                }
              } else if (isMulti && isSelected) {
                optionStateClass = 'vq-picked-option';
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  className={`option-btn ${optionStateClass}`}
                  onClick={() => handleSelectOption(optLet)}
                  disabled={isAnswered}
                  aria-pressed={isMulti ? isSelected : undefined}
                >
                  <div className="option-letter">{isMulti && !isAnswered && isSelected ? '✓' : optLet.toUpperCase()}</div>
                  <div className="option-text">
                    <MathText text={opt} />
                    {isAnswered && isMulti && isCorrectOpt && !isSelected && <span className="vq-missed-tag">Missed</span>}
                  </div>
                  <div className="option-feedback-icon">
                    {isAnswered && isCorrectOpt && <CheckCircle2 size={20} className="text-emerald" />}
                    {isAnswered && isSelected && !isCorrectOpt && <XCircle size={20} className="text-rose" />}
                  </div>
                </button>
              );
            })}
            {isMulti && !isAnswered && (
              <button
                type="button"
                className="next-question-btn vq-check-btn"
                disabled={userSelection.length === 0}
                onClick={() => submitChoice(userSelection)}
              >
                <span>
                  Check answer ({userSelection.length} of {currentQ.correct.length} selected)
                </span>
              </button>
            )}
          </div>
        ) : currentQ.kind === 'tf' ? (
          <div className="options-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {['True', 'False'].map((tfVal) => {
              const isSelected = userSelection.map((s) => s.toLowerCase()).includes(tfVal.toLowerCase());
              const isCorrectOpt = grade(currentQ, [tfVal]);

              let optionStateClass = '';
              if (isAnswered) {
                if (isCorrectOpt) {
                  optionStateClass = 'correct-option pulse-correct';
                } else if (isSelected && !isCorrectOpt) {
                  optionStateClass = 'incorrect-option shake-incorrect';
                } else {
                  optionStateClass = 'dimmed-option';
                }
              }

              return (
                <button
                  key={tfVal}
                  type="button"
                  className={`option-btn ${optionStateClass}`}
                  onClick={() => handleSelectOption(tfVal)}
                  disabled={isAnswered}
                >
                  <div className="option-letter">{tfVal[0]}</div>
                  <div className="option-text" style={{ fontWeight: 700, fontSize: 16 }}>
                    {tfVal}
                  </div>
                  <div className="option-feedback-icon">
                    {isAnswered && isCorrectOpt && <CheckCircle2 size={20} className="text-emerald" />}
                    {isAnswered && isSelected && !isCorrectOpt && <XCircle size={20} className="text-rose" />}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          /* Multiple Choice Safeguard: Guarantee 100% Multiple Choice across all quizzes */
          <div className="options-grid">
            {[
              currentQ.answerText || 'Verified exact analytical solution',
              'Cannot be uniquely determined without additional boundary constraints',
              'Trivial equilibrium solution only ($y = 0$)',
              'Undefined / non-existent on the specified interval'
            ].map((opt, optIdx) => {
              const optLet = letter(optIdx);
              const isSelected = userSelection.map((s) => s.toLowerCase()).includes(optLet.toLowerCase());
              const isCorrectOpt = grade(currentQ, [optLet]);

              let optionStateClass = '';
              if (isAnswered) {
                if (isCorrectOpt) {
                  optionStateClass = 'correct-option pulse-correct';
                } else if (isSelected && !isCorrectOpt) {
                  optionStateClass = 'incorrect-option shake-incorrect';
                } else {
                  optionStateClass = 'dimmed-option';
                }
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  className={`option-btn ${optionStateClass}`}
                  onClick={() => handleSelectOption(optLet)}
                  disabled={isAnswered}
                >
                  <div className="option-letter">{optLet.toUpperCase()}</div>
                  <div className="option-text">
                    <MathText text={opt} />
                  </div>
                  <div className="option-feedback-icon">
                    {isAnswered && isCorrectOpt && <CheckCircle2 size={20} className="text-emerald" />}
                    {isAnswered && isSelected && !isCorrectOpt && <XCircle size={20} className="text-rose" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Unanswered navigation review & reveal helper */}
        {!isAnswered && (
          <div className="unanswered-nav-row" style={{ marginTop: 12, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            {currentIndex > 0 && (
              <button type="button" className="quiz-prev-subtle-btn" onClick={handlePrevious}>
                <ArrowLeft size={14} />
                <span>Review Previous Question (Q{currentIndex})</span>
              </button>
            )}
            <button
              type="button"
              className="mg-btn small"
              onClick={() => {
                audio.playClick();
                setGradedResults((prev) => ({ ...prev, [currentIndex]: false }));
              }}
              style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#475569', fontSize: 12, fontWeight: 600 }}
              title="Reveal the full worked solution and video explanation"
            >
              <Lightbulb size={13} className="text-amber" />
              <span>Reveal Solution & Video Explanation</span>
            </button>
          </div>
        )}

        {/* Immediate Rich Step-by-Step & Foundation Explanation Drawer (Shown on selection, right or wrong!) */}
        {isAnswered && (
          <div
            className={`explanation-drawer ${isCorrect ? 'drawer-correct' : 'drawer-incorrect'}`}
            style={{ marginTop: 24 }}
          >
            {/* Header banner */}
            <div className="drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              {isCorrect ? (
                <div className="feedback-status status-correct">
                  <CheckCircle2 size={20} />
                  <span>Correct! Spot-on engineering reasoning.</span>
                </div>
              ) : (
                <div className="feedback-status status-incorrect">
                  <AlertTriangle size={20} />
                  <span>Not quite. Let's find exactly where the solution went wrong.</span>
                </div>
              )}

              <span className="mg-small mg-muted" style={{ fontWeight: 600 }}>
                Answer: <strong style={{ color: 'var(--text-primary)' }}>{currentQ.answerText}</strong>
              </span>
            </div>

            <div className="drawer-body" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 16 }}>
              {/* 4-Pillar Pedagogical Foundation Grid */}
              <div
                className="q-source-card"
                role="region"
                aria-label="Pedagogical Foundation & Sources"
                style={{ padding: 16, background: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: 10 }}
              >
                <div className="q-source-header" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                  <Bookmark size={14} className="text-amber" />
                  <span className="q-source-heading" style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    Pedagogical Foundation & Authentic Curriculum Sources
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
                  {/* Pillar 1: Authentic Past Exam */}
                  {foundation?.exam && (
                    <div
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(99, 102, 241, 0.05)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 8
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#4f46e5' }}>
                          <span>🏛️ Official Past Exam</span>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
                          {foundation.exam.title}
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>
                          Original question provenance: {foundation.exam.label}
                        </div>
                      </div>

                      {foundation.exam.doc && (
                        <button
                          type="button"
                          className="mg-btn small"
                          onClick={() => {
                            audio.playClick();
                            onViewPdf(foundation.exam!.doc!, foundation.exam!.page);
                          }}
                          style={{ alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 600 }}
                          title="Open official exam PDF"
                        >
                          <FileText size={12} />
                          <span>Open Exam Paper (PDF)</span>
                          <ExternalLink size={10} />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Pillar 2: Teacher Lecture Slide */}
                  {foundation?.lecture && (
                    <div
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 8
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#059669' }}>
                          <span>📖 Teacher Slides</span>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
                          {foundation.lecture.title}
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>
                          Slide location: {foundation.lecture.slideLabel}
                        </div>
                      </div>

                      {foundation.lecture.doc && (
                        <button
                          type="button"
                          className="mg-btn small"
                          onClick={() => {
                            audio.playClick();
                            onViewPdf(foundation.lecture!.doc!, foundation.lecture!.page);
                          }}
                          style={{ alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 600 }}
                          title="Open teacher lecture slide PDF"
                        >
                          <BookOpen size={12} />
                          <span>Open Lecture Slide</span>
                          <ExternalLink size={10} />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Pillar 3: Comprehensive Topic Guide / Study Notes */}
                  {foundation?.guide && (
                    <div
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(245, 158, 11, 0.05)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        borderRadius: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 8
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#d97706' }}>
                          <span>📚 Expanded Notes</span>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
                          {foundation.guide.title}
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>
                          Full derivations & theory compendium
                        </div>
                      </div>

                      {foundation.guide.doc && (
                        <button
                          type="button"
                          className="mg-btn small"
                          onClick={() => {
                            audio.playClick();
                            onViewPdf(foundation.guide!.doc!, foundation.guide!.page);
                          }}
                          style={{ alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 600 }}
                          title="Open expanded study guide"
                        >
                          <BookOpen size={12} />
                          <span>Open Expanded Notes</span>
                          <ExternalLink size={10} />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Pillar 4: Recommended Concept Video */}
                  {foundation?.video && (
                    <div
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(239, 68, 68, 0.05)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 8
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#dc2626' }}>
                          <span>▶️ Video Reference</span>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
                          {foundation.video.video.title}
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>
                          {foundation.video.video.channel} {foundation.video.video.len ? `· ${foundation.video.video.len}` : ''}
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mg-btn small"
                        onClick={() => {
                          audio.playClick();
                          setActiveVideoEmbed((prev) => (prev === foundation.video!.video.id ? null : foundation.video!.video.id));
                        }}
                        style={{ alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 600 }}
                        title="Watch concept video"
                      >
                        <Play size={12} />
                        <span>{activeVideoEmbed === foundation.video.video.id ? 'Close Video' : 'Watch Concept Video'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Embedded Video Player if toggled */}
                {activeVideoEmbed && foundation?.video && (
                  <div style={{ marginTop: 14 }}>
                    <VideoPlayer v={foundation.video.video} />
                  </div>
                )}
              </div>

              {/* Dedicated Narrated Video Solution & AI Explainer */}
              <div style={{ margin: '4px 0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <GateSolveVideo videos={idx.solveVideos} itemKey={currentQ.key || currentQ.qid} />
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <AskAiButton
                    problem={{
                      id: currentQ.key || currentQ.qid || '',
                      courseTitle: `${course.code} · ${course.name}`,
                      topic: topicObj?.name,
                      questionText: currentQ.prompt,
                      options: currentQ.opts?.map((o, optIdx) => ({ key: String.fromCharCode(65 + optIdx), text: o })),
                      answerText: currentQ.answerText,
                      solution: currentQ.solution,
                      steps: currentQ.steps,
                      note: currentQ.note
                    }}
                  />
                </div>
              </div>

              {/* Step-by-Step Calculation (Baby Steps) - exactly matching WorkedSolution.tsx */}
              <div className="ws-card ws-steps ws-calc-steps" style={{ background: '#ffffff', borderRadius: 10, border: '1px solid var(--border-subtle)', padding: 18 }}>
                <div className="ws-card-title" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <ListOrdered size={16} />
                  <span>Step-by-Step Calculation (Baby Steps)</span>
                  {stepItems.length > 0 && (
                    <span className="ws-step-count">
                      {Math.min(shownSteps, stepItems.length)} / {stepItems.length} Steps Revealed
                    </span>
                  )}
                </div>

                {/* Problem Setup & Governing Formulation if present */}
                {workedSolution?.setup && (workedSolution.setup.eq || workedSolution.setup.ic || workedSolution.setup.goal) && (
                  <div className="ws-setup-box" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '12px 16px', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>
                      <Target size={13} className="text-amber" />
                      <span>Initial Problem Setup & Objective</span>
                    </div>
                    {workedSolution.setup.eq && (
                      <div style={{ marginBottom: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#64748b', marginRight: 6 }}>Governing Equation / Model:</span>
                        <MathBlock tex={workedSolution.setup.eq} />
                      </div>
                    )}
                    {workedSolution.setup.ic && (
                      <div style={{ fontSize: 13, color: '#334155', marginBottom: 4 }}>
                        <strong>Initial Condition:</strong> <MathText text={workedSolution.setup.ic} />
                      </div>
                    )}
                    {workedSolution.setup.goal && (
                      <div style={{ fontSize: 13, color: '#334155' }}>
                        <strong>Target Goal:</strong> <MathText text={workedSolution.setup.goal} />
                      </div>
                    )}
                  </div>
                )}

                <ol className="ws-step-list">
                  {stepItems.slice(0, shownSteps).map((step, i) => (
                    <li key={i} className={`ws-step ${i === shownSteps - 1 ? 'ws-step-latest' : ''}`}>
                      <div className="ws-step-num">{step.number}</div>
                      <div className="ws-step-body">
                        <div className="ws-step-title">
                          <MathText text={step.title} />
                        </div>
                        {step.math && <MathBlock tex={step.math} className="ws-step-math" />}
                        {step.explanation && (
                          <div className="ws-step-note">
                            <MathText text={step.explanation} />
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                {shownSteps < stepItems.length && (
                  <div className="ws-reveal-row" style={{ marginTop: 12 }}>
                    <button
                      type="button"
                      className="ws-reveal-btn"
                      onClick={() => setShownSteps((n) => Math.min(n + 1, stepItems.length))}
                    >
                      <ChevronDown size={16} />
                      <span>Show Step {shownSteps + 1} of {stepItems.length}</span>
                    </button>
                    <button
                      type="button"
                      className="ws-reveal-all"
                      onClick={() => setShownSteps(stepItems.length)}
                    >
                      Show All Baby Steps
                    </button>
                  </div>
                )}

                {/* Prominent Boxed Final Answer (matching ChatGPT dissection) */}
                <div className="ws-final-answer-card" style={{ marginTop: 18, padding: '14px 18px', background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    Final Answer
                  </div>
                  <div style={{ fontSize: 16 }}>
                    <MathBlock
                      tex={
                        workedSolution?.finalAnswer
                          ? (workedSolution.finalAnswer.startsWith('\\boxed{')
                              ? workedSolution.finalAnswer
                              : workedSolution.finalAnswer.startsWith('$') && workedSolution.finalAnswer.endsWith('$')
                              ? `\\boxed{${workedSolution.finalAnswer.slice(1, -1)}}`
                              : `\\boxed{${workedSolution.finalAnswer}}`)
                          : currentQ.answerText
                          ? (currentQ.answerText.startsWith('\\boxed{')
                              ? currentQ.answerText
                              : currentQ.answerText.startsWith('$') && currentQ.answerText.endsWith('$')
                              ? `\\boxed{${currentQ.answerText.slice(1, -1)}}`
                              : `\\boxed{\\text{${currentQ.answerText}}}`)
                          : '\\boxed{\\checkmark}'
                      }
                    />
                  </div>
                </div>

                {/* Dedicated Important Exam Tip Callout (matching ChatGPT dissection) */}
                {(workedSolution?.tip || currentQ.note) && (
                  <div
                    className="ws-exam-tip-callout"
                    style={{
                      marginTop: 14,
                      padding: '14px 18px',
                      borderRadius: 8,
                      background: '#fffbeb',
                      border: '1.5px solid #fde68a',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 800, color: '#b45309' }}>
                      <AlertTriangle size={15} />
                      <span>Important exam tip:</span>
                    </div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: '#78350f' }}>
                      <MathText text={workedSolution?.tip || currentQ.note || ''} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Next / Previous CTAs */}
            <div className="drawer-footer" style={{ marginTop: 20 }}>
              <button
                type="button"
                className="prev-question-btn"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ArrowLeft size={16} />
                <span>Previous Question</span>
              </button>

              <button type="button" className="next-question-btn" onClick={handleNext}>
                <span>{currentIndex === items.length - 1 ? 'Finish Drill & View Results' : 'Next Question'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
