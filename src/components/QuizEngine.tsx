import React, { useState, useEffect, useMemo } from 'react';
import { CourseId, PracticeQuestion, QuizSessionState } from '../types';
import { PRACTICE_QUESTIONS } from '../data/questionsData';
import { MathText } from '../utils/mathRenderer';
import { audio } from '../utils/audio';
import { 
  Brain, 
  Flame, 
  Timer, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  AlertTriangle,
  RotateCcw,
  Sparkles,
  BookOpen,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizEngineProps {
  courseId: CourseId | 'ALL';
  onExit: () => void;
  onComplete: (results: {
    courseId: CourseId | 'ALL';
    totalQuestions: number;
    score: number;
    timeSpentSeconds: number;
    missedQuestions: PracticeQuestion[];
    answeredQuestions: { question: PracticeQuestion; selectedIndex: number; isCorrect: boolean }[];
  }) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ courseId, onExit, onComplete }) => {
  // Select 20 random questions from the filtered bank
  const sessionQuestions = useMemo(() => {
    let pool = PRACTICE_QUESTIONS;
    if (courseId !== 'ALL') {
      pool = pool.filter(q => q.courseId === courseId);
    }
    // Fisher-Yates shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Always take 20 questions
    return shuffled.slice(0, 20);
  }, [courseId]);

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

  const handleNext = () => {
    audio.playClick();
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all 20 questions!
      const totalTime = Math.floor((Date.now() - startTime) / 1000);
      const missed: PracticeQuestion[] = [];
      const history = sessionQuestions.map((q, idx) => {
        const chosen = selectedAnswers[idx];
        const correct = chosen === q.correctIndex;
        if (!correct) missed.push(q);
        return { question: q, selectedIndex: chosen, isCorrect: correct };
      });

      if (score >= 16) {
        audio.playComplete();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      onComplete({
        courseId,
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
            <span>BRAIN DRILL · 20 QUESTIONS</span>
          </div>

          <span className="course-pill-tag">
            {courseId === 'ALL' ? 'GRAND MIXED EXAM' : courseId}
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
              if (window.confirm("Exit this 20-question practice session? Your progress will be saved in history.")) {
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

      {/* Main Question Card Area */}
      <div className="quiz-card-container">
        <div className="quiz-card-header">
          <div className="question-number-badge">
            Question <strong>{currentIndex + 1}</strong> of {sessionQuestions.length}
          </div>

          <div className="question-meta-group">
            <span className="topic-badge">{currentQ.topic}</span>
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
                  <span>Incorrect. Review the derivation below to solidify your neural recall.</span>
                </div>
              )}

              <div className="curriculum-ref">
                <BookOpen size={14} />
                <span>{currentQ.explanation.reference}</span>
              </div>
            </div>

            <div className="drawer-body">
              <div className="concept-row">
                <strong>Core Law / Principle:</strong>
                <p><MathText text={currentQ.explanation.coreConcept} /></p>
              </div>

              <div className="step-by-step-box">
                <div className="steps-title">Step-by-Step Derivation:</div>
                <ol className="steps-list">
                  {currentQ.explanation.stepByStep.map((step, sIdx) => (
                    <li key={sIdx}>
                      <MathText text={step} />
                    </li>
                  ))}
                </ol>
              </div>

              {currentQ.explanation.commonTrap && (
                <div className="trap-box">
                  <div className="trap-title">⚠️ Common Exam Trap to Avoid:</div>
                  <p><MathText text={currentQ.explanation.commonTrap} /></p>
                </div>
              )}
            </div>

            {/* Next Question CTA */}
            <div className="drawer-footer">
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
