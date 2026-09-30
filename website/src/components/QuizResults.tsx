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
  Sparkles, 
  Timer,
  ChevronDown,
  ChevronUp,
  Brain,
  Flame,
  ShieldCheck
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
      <div className="review-section">
        <h2 className="review-heading">
          <BookOpen size={20} className="text-amber" />
          <span>Full Session Question-by-Question Audit</span>
        </h2>
        <p className="review-sub">Click any question below to inspect its mathematical derivation, common traps, and textbook citations.</p>

        <div className="review-list">
          {results.answeredQuestions.map((item, idx) => {
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
                    <button className="expand-toggle-btn">
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
    </div>
  );
};
