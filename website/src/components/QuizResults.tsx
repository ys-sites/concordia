import React, { useState } from 'react';
import { CourseId, PracticeQuestion } from '../types';
import { MathText } from '../utils/mathRenderer';
import { WorkedSolution } from './WorkedSolution';
import { SourceList } from './SourceList';
import { audio } from '../utils/audio';
import { 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  ArrowLeft, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles, 
  Timer,
  ChevronDown,
  ChevronUp,
  Brain,
  Flame,
  ShieldCheck,
  List,
  Eye,
  Filter
} from 'lucide-react';

interface QuizResultsProps {
  results: {
    courseId: CourseId;
    sectionLabel: string;
    totalQuestions: number;
    score: number;
    timeSpentSeconds: number;
    missedQuestions: PracticeQuestion[];
    answeredQuestions: { question: PracticeQuestion; selectedIndex: number; isCorrect: boolean }[];
  };
  onRestartNewCycle: () => void;
  onBackToCourse: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  results,
  onRestartNewCycle,
  onBackToCourse
}) => {
  const [reviewMode, setReviewMode] = useState<'step' | 'list'>('step');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'missed' | 'correct'>('all');

  const percentage = Math.round((results.score / results.totalQuestions) * 100);

  const getTier = () => {
    if (percentage >= 90) {
      return {
        badge: '🏆 S-TIER: CONCORDIA DEAN\'S LIST READY',
        color: '#10b981',
        title: 'Mastery Achieved!',
        feedback: 'Your neural pathways are primed with high accuracy. You are fully prepared to excel on exam day.'
      };
    } else if (percentage >= 80) {
      return {
        badge: '🌟 A-TIER: EXAM READY',
        color: '#6366f1',
        title: 'High-Yield Competence!',
        feedback: 'Strong grasp of core engineering principles. A quick review of missed traps will secure an A+.'
      };
    } else if (percentage >= 65) {
      return {
        badge: '📈 B-TIER: COMPETENT - REINFORCEMENT RECOMMENDED',
        color: '#f59e0b',
        title: 'Good Foundation!',
        feedback: 'Solid conceptual understanding, but common algebraic or boundary traps cost points. Run another cycle.'
      };
    } else {
      return {
        badge: '⚠️ C-TIER: REVISION RECOMMENDED',
        color: '#f43f5e',
        title: 'Focus on Fundamentals',
        feedback: 'Review the 1-Page Rapid Review Sheets and Worked Problem Guides before attempting your next drill.'
      };
    }
  };

  const tier = getTier();

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}m ${rem}s`;
  };

  const handleJumpStep = (idx: number) => {
    if (idx >= 0 && idx < results.answeredQuestions.length) {
      audio.playClick();
      setActiveStepIndex(idx);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      audio.playClick();
      setActiveStepIndex(prev => prev - 1);
    }
  };

  const handleNextStep = () => {
    if (activeStepIndex < results.answeredQuestions.length - 1) {
      audio.playClick();
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handleReviewMissed = () => {
    audio.playClick();
    const firstMissed = results.answeredQuestions.findIndex(a => !a.isCorrect);
    if (firstMissed !== -1) {
      setActiveStepIndex(firstMissed);
      setReviewMode('step');
    }
    const el = document.getElementById('results-review-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredQuestions = results.answeredQuestions.filter((item) => {
    if (filterMode === 'missed') return !item.isCorrect;
    if (filterMode === 'correct') return item.isCorrect;
    return true;
  });

  const activeItem = results.answeredQuestions[activeStepIndex] || results.answeredQuestions[0];
  const activeQ = activeItem?.question;

  return (
    <div className="results-wrapper">
      {/* Top Banner */}
      <div className="results-card-hero">
        <div className="tier-badge-pill" style={{ borderColor: tier.color, color: tier.color }}>
          <Sparkles size={16} />
          <span>{tier.badge}</span>
        </div>

        <h1 className="results-title">{tier.title}</h1>
        <p className="results-subtitle">{tier.feedback}</p>

        {/* Big Score Visualizer */}
        <div className="score-hero-block">
          <div className="score-number-display">
            <span className="big-number" style={{ color: tier.color }}>{results.score}</span>
            <span className="total-denom">/ {results.totalQuestions}</span>
          </div>

          <div className="percentage-pill" style={{ backgroundColor: `${tier.color}20`, color: tier.color }}>
            {percentage}% Accuracy
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="results-stats-row">
          <div className="result-stat-box">
            <Timer size={18} className="text-cyan" />
            <div>
              <div className="stat-label">Time Elapsed</div>
              <div className="stat-val">{formatTime(results.timeSpentSeconds)}</div>
            </div>
          </div>

          <div className="result-stat-box">
            <CheckCircle2 size={18} className="text-emerald" />
            <div>
              <div className="stat-label">Correct Answers</div>
              <div className="stat-val">{results.score} questions</div>
            </div>
          </div>

          <div className="result-stat-box">
            <XCircle size={18} className="text-rose" />
            <div>
              <div className="stat-label">Missed Traps</div>
              <div className="stat-val">{results.missedQuestions.length} questions</div>
            </div>
          </div>

          <div className="result-stat-box">
            <Brain size={18} className="text-purple" />
            <div>
              <div className="stat-label">Course Target</div>
              <div className="stat-val">{results.courseId} · {results.sectionLabel}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="results-actions-group">
          {results.missedQuestions.length > 0 && (
            <button 
              className="action-btn-missed"
              onClick={handleReviewMissed}
              title="Jump straight to review missed questions"
            >
              <XCircle size={18} />
              <span>Review {results.missedQuestions.length} Missed Traps</span>
            </button>
          )}

          <button 
            className="action-btn-restart"
            onClick={() => {
              audio.playClick();
              onRestartNewCycle();
            }}
          >
            <RotateCcw size={18} />
            <span>Run This Drill Again</span>
          </button>

          <button 
            className="action-btn-back"
            onClick={() => {
              audio.playClick();
              onBackToCourse();
            }}
          >
            <ArrowLeft size={18} />
            <span>Return to Course PDFs</span>
          </button>
        </div>
      </div>

      {/* Question by Question Detailed Review */}
      <div className="review-section" id="results-review-anchor">
        <div className="review-header-flex">
          <div>
            <h2 className="review-heading">
              <BookOpen size={20} className="text-amber" />
              <span>Session Question Review &amp; Analysis</span>
            </h2>
            <p className="review-sub">Review every solved problem, inspect what was chosen, see the correct derivation, and avoid exam traps.</p>
          </div>

          <div className="review-view-toggle">
            <button 
              className={`view-toggle-btn ${reviewMode === 'step' ? 'active' : ''}`}
              onClick={() => { audio.playClick(); setReviewMode('step'); }}
            >
              <Eye size={15} />
              <span>Step-by-Step Review</span>
            </button>
            <button 
              className={`view-toggle-btn ${reviewMode === 'list' ? 'active' : ''}`}
              onClick={() => { audio.playClick(); setReviewMode('list'); }}
            >
              <List size={15} />
              <span>Full List Audit</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Step-by-Step Interactive Question Reviewer */}
        {reviewMode === 'step' && activeQ && (
          <div className="step-review-container">
            {/* Pill Navigation Bar */}
            <div className="quiz-pills-bar">
              <button 
                className="quiz-pill-nav-btn"
                onClick={handlePrevStep}
                disabled={activeStepIndex === 0}
                title="Previous Question"
              >
                <ChevronLeft size={16} />
                <span>Prev</span>
              </button>

              <div className="quiz-pills-scroll">
                {results.answeredQuestions.map((item, idx) => {
                  const isCurrent = idx === activeStepIndex;
                  const statusClass = item.isCorrect ? 'pill-correct' : 'pill-incorrect';

                  return (
                    <button
                      key={idx}
                      className={`quiz-q-pill ${statusClass} ${isCurrent ? 'pill-active' : ''}`}
                      onClick={() => handleJumpStep(idx)}
                      title={`Review Q${idx + 1} (${item.isCorrect ? 'Correct' : 'Missed'})`}
                    >
                      {item.isCorrect ? (
                        <CheckCircle2 size={11} className="pill-status-ico text-emerald" />
                      ) : (
                        <XCircle size={11} className="pill-status-ico text-rose" />
                      )}
                      <span>{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              <button 
                className="quiz-pill-nav-btn"
                onClick={handleNextStep}
                disabled={activeStepIndex === results.answeredQuestions.length - 1}
                title="Next Question"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Active Question Card */}
            <div className="quiz-card-container">
              <div className="quiz-card-header">
                <div className="header-nav-group">
                  <button
                    className="quiz-step-btn"
                    onClick={handlePrevStep}
                    disabled={activeStepIndex === 0}
                    title="Previous Question"
                  >
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>
                  <div className="question-number-badge">
                    Question <strong>{activeStepIndex + 1}</strong> of {results.answeredQuestions.length}
                  </div>
                  {activeStepIndex < results.answeredQuestions.length - 1 && (
                    <button
                      className="quiz-step-btn"
                      onClick={handleNextStep}
                      title="Next Question"
                    >
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </button>
                  )}
                </div>

                <div className="question-meta-group">
                  <span className={`status-pill ${activeItem.isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                    {activeItem.isCorrect ? '✓ Correct' : '✗ Missed'}
                  </span>
                  <span className="topic-badge">{activeQ.topic}</span>
                  <span className={`difficulty-badge diff-${activeQ.difficulty.toLowerCase().replace(' ', '-')}`}>
                    {activeQ.difficulty}
                  </span>
                </div>
              </div>

              {/* Statement */}
              <div className="question-statement-box">
                <h2 className="statement-text">
                  <MathText text={activeQ.question} />
                </h2>
                {activeQ.codeSnippet && (
                  <pre className="code-snippet-box">
                    <code>{activeQ.codeSnippet}</code>
                  </pre>
                )}
              </div>

              {/* Options Breakdown */}
              <div className="options-grid">
                {activeQ.options.map((opt, oIdx) => {
                  const letter = ['A', 'B', 'C', 'D'][oIdx];
                  const isCorrect = oIdx === activeQ.correctIndex;
                  const isSelected = oIdx === activeItem.selectedIndex;
                  let optClass = 'opt-neutral';
                  if (isCorrect) optClass = 'correct-option pulse-correct';
                  if (isSelected && !isCorrect) optClass = 'incorrect-option shake-incorrect';

                  return (
                    <div key={oIdx} className={`option-btn ${optClass}`} style={{ cursor: 'default' }}>
                      <div className="option-letter">{letter}</div>
                      <div className="option-text">
                        <MathText text={opt} />
                      </div>
                      <div className="option-feedback-icon">
                        {isCorrect && <CheckCircle2 size={20} className="text-emerald" />}
                        {isSelected && !isCorrect && <XCircle size={20} className="text-rose" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Worked Solution & Diagnostic */}
              <div className={`explanation-drawer ${activeItem.isCorrect ? 'drawer-correct' : 'drawer-incorrect'}`}>
                <div className="drawer-header">
                  <div className={`feedback-status ${activeItem.isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                    {activeItem.isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                    <span>
                      {activeItem.isCorrect 
                        ? 'You solved this correctly!' 
                        : `Your answer was Option ${['A', 'B', 'C', 'D'][activeItem.selectedIndex] ?? 'None'} · Correct is Option ${['A', 'B', 'C', 'D'][activeQ.correctIndex]}`}
                    </span>
                  </div>
                  <SourceList question={activeQ} />
                </div>

                <div className="drawer-body">
                  <WorkedSolution
                    key={activeStepIndex}
                    question={activeQ}
                    selectedIndex={activeItem.selectedIndex}
                    mode="review"
                  />
                </div>

                <div className="drawer-footer">
                  <button 
                    className="prev-question-btn" 
                    onClick={handlePrevStep}
                    disabled={activeStepIndex === 0}
                  >
                    <ArrowLeft size={18} />
                    <span>Previous Question</span>
                  </button>

                  {activeStepIndex < results.answeredQuestions.length - 1 ? (
                    <button className="next-question-btn" onClick={handleNextStep}>
                      <span>Next Question (Q{activeStepIndex + 2})</span>
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button className="next-question-btn" onClick={() => onRestartNewCycle()}>
                      <RotateCcw size={18} />
                      <span>Retake Drill</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: Full List Audit View */}
        {reviewMode === 'list' && (
          <div>
            <div className="filter-pills-row" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button 
                className={`filter-pill ${filterMode === 'all' ? 'active' : ''}`}
                onClick={() => setFilterMode('all')}
              >
                All ({results.answeredQuestions.length})
              </button>
              <button 
                className={`filter-pill ${filterMode === 'missed' ? 'active' : ''}`}
                onClick={() => setFilterMode('missed')}
              >
                Missed Only ({results.missedQuestions.length})
              </button>
              <button 
                className={`filter-pill ${filterMode === 'correct' ? 'active' : ''}`}
                onClick={() => setFilterMode('correct')}
              >
                Correct Only ({results.score})
              </button>
            </div>

            <div className="review-list">
              {filteredQuestions.map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                const q = item.question;
                const letter = ['A', 'B', 'C', 'D'][q.correctIndex];
                const userLetter = item.selectedIndex !== undefined ? ['A', 'B', 'C', 'D'][item.selectedIndex] : 'None';

                return (
                  <div 
                    key={idx} 
                    className={`review-item-card ${item.isCorrect ? 'item-correct' : 'item-incorrect'}`}
                  >
                    <div 
                      className="review-item-header"
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    >
                      <div className="header-left">
                        <span className="q-index-pill">Q{idx + 1}</span>
                        <span className="q-status-icon">
                          {item.isCorrect ? <CheckCircle2 size={18} className="text-emerald" /> : <XCircle size={18} className="text-rose" />}
                        </span>
                        <span className="q-topic-tag">{q.topic}</span>
                        <span className="q-preview-text">
                          <MathText text={q.question.length > 90 ? q.question.substring(0, 90) + '...' : q.question} />
                        </span>
                      </div>

                      <div className="header-right">
                        <span className={`answer-summary-pill ${item.isCorrect ? 'text-emerald' : 'text-rose'}`}>
                          {item.isCorrect ? `Correct (${letter})` : `Your: ${userLetter} · Answer: ${letter}`}
                        </span>
                        <button className="expand-toggle-btn" aria-label="Toggle details">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Derivation Box */}
                    {isExpanded && (
                      <div className="review-item-body">
                        <div className="full-question-statement">
                          <strong>Full Question:</strong>
                          <p><MathText text={q.question} /></p>
                        </div>

                        <div className="options-review-grid">
                          {q.options.map((opt, oIdx) => {
                            const isCorrectOption = oIdx === q.correctIndex;
                            const isChosenOption = oIdx === item.selectedIndex;
                            let optClass = 'opt-neutral';
                            if (isCorrectOption) optClass = 'opt-is-correct';
                            if (isChosenOption && !isCorrectOption) optClass = 'opt-is-wrong';

                            return (
                              <div key={oIdx} className={`review-opt-box ${optClass}`}>
                                <span className="opt-label">{['A', 'B', 'C', 'D'][oIdx]}:</span>
                                <span className="opt-val"><MathText text={opt} /></span>
                                {isCorrectOption && <span className="verified-tag">✓ Correct Answer</span>}
                                {isChosenOption && !isCorrectOption && <span className="your-choice-tag">✗ Your Selection</span>}
                              </div>
                            );
                          })}
                        </div>

                        <div className="review-derivation-box">
                          <WorkedSolution question={q} selectedIndex={item.selectedIndex} mode="review" />
                          <SourceList question={q} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
