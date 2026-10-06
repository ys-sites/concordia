import React, { useState, useEffect, useMemo } from 'react';
import { CourseId, CourseDocument, PracticeQuestion, QuizSessionState } from '../types';
import { questionPool, sectionLabel, DRILL_LENGTH } from '../data/quizSections';
import { MathText } from '../utils/mathRenderer';
import { SourceList } from './SourceList';
import { WorkedSolution } from './WorkedSolution';
import { audio } from '../utils/audio';
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
  X
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
  // Up to 20 random questions from this course + section only (never mixed across courses)
  const sessionQuestions = useMemo(() => {
    const pool = questionPool(courseId, sectionId);
    // Fisher-Yates shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Take up to 20 questions, shuffling each question's options so the answer isn't always "A"
    return shuffled.slice(0, DRILL_LENGTH).map((q): PracticeQuestion => {
      const order = [0, 1, 2, 3];
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      // Wrong-answer diagnoses are keyed by option index, so they move with their options
      const whyWrong = q.explanation.whyWrong
        ? Object.fromEntries(
            Object.entries(q.explanation.whyWrong).map(([orig, text]) => [String(order.indexOf(Number(orig))), text])
          )
        : undefined;
      return {
        ...q,
        options: order.map(i => q.options[i]) as PracticeQuestion['options'],
        correctIndex: order.indexOf(q.correctIndex) as PracticeQuestion['correctIndex'],
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

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return; // prevent changing

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
      <div className="quiz-card-container">
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
