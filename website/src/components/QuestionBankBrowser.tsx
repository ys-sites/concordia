import React, { useState, useMemo } from 'react';
import { CourseId, CourseDocument, PracticeQuestion } from '../types';
import { PRACTICE_QUESTIONS } from '../data/questionsData';
import { COURSES_DATA } from '../data/coursesData';
import { MathText } from '../utils/mathRenderer';
import { shuffled, shuffleOptions } from '../utils/shuffle';
import { WorkedSolution } from './WorkedSolution';
import { SourceList } from './SourceList';
import { audio } from '../utils/audio';
import {
  BookOpen,
  Search,
  Filter,
  Brain,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Tag,
  Shuffle,
  Dices
} from 'lucide-react';

interface QuestionBankBrowserProps {
  onBack: () => void;
  onStartQuiz: (courseId: CourseId | 'ALL') => void;
  onOpenPdf?: (doc: CourseDocument, pageNumber?: number) => void;
}

export const QuestionBankBrowser: React.FC<QuestionBankBrowserProps> = ({ onBack, onStartQuiz, onOpenPdf }) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseId | 'ALL'>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  // Practice invariant: question order AND answer-option order are always mixed,
  // so students learn the material, never the positions.
  const [shuffleMode, setShuffleMode] = useState(true);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const filteredQuestions = useMemo(() => {
    return PRACTICE_QUESTIONS.filter(q => {
      if (selectedCourse !== 'ALL' && q.courseId !== selectedCourse) return false;
      if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesExpl = q.explanation.coreConcept.toLowerCase().includes(query);
        return matchesQ || matchesTopic || matchesExpl;
      }
      return true;
    });
  }, [selectedCourse, selectedDifficulty, searchQuery]);

  const displayQuestions = useMemo(() => {
    if (!shuffleMode) return filteredQuestions;
    void shuffleSeed; // re-roll on demand
    return shuffled(filteredQuestions).map((q) => {
      const { options, correctIndex, order } = shuffleOptions(q.options, q.correctIndex);
      const whyWrong = q.explanation.whyWrong
        ? Object.fromEntries(
            Object.entries(q.explanation.whyWrong).map(([orig, text]) => [String(order.indexOf(Number(orig))), text])
          )
        : undefined;
      return {
        ...q,
        options: options as PracticeQuestion['options'],
        correctIndex: correctIndex as PracticeQuestion['correctIndex'],
        explanation: { ...q.explanation, whyWrong },
      };
    });
  }, [filteredQuestions, shuffleMode, shuffleSeed]);

  return (
    <div className="bank-browser-container">
      {/* Header */}
      <div className="bank-browser-header">
        <button 
          className="back-btn"
          onClick={() => {
            audio.playClick();
            onBack();
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Hub</span>
        </button>

        <div className="header-main-row">
          <div>
            <div className="bank-pill">
              <BookOpen size={14} />
              <span>Full Master Question Database</span>
            </div>
            <h1 className="bank-title">{PRACTICE_QUESTIONS.length} Practice Questions from the Teachers' Notes</h1>
            <p className="bank-sub">Explore the complete curriculum-aligned question bank, mathematical proofs, and Concordia exam traps.</p>
          </div>

          <button
            className="bank-quiz-cta"
            onClick={() => {
              audio.playClick();
              onStartQuiz(selectedCourse);
            }}
          >
            <Brain size={18} />
            <span>{selectedCourse === 'ALL' ? 'Start a Practice Drill' : `Start a ${selectedCourse} Drill`}</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="bank-filter-bar">
          {/* Course Tabs */}
          <div className="course-filter-group">
            <button
              className={`filter-btn ${selectedCourse === 'ALL' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setSelectedCourse('ALL');
              }}
            >
              All Subjects ({PRACTICE_QUESTIONS.length})
            </button>
            {COURSES_DATA.map(c => (
              <button
                key={c.id}
                className={`filter-btn ${selectedCourse === c.id ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setSelectedCourse(c.id);
                }}
              >
                {c.code} ({PRACTICE_QUESTIONS.filter(q => q.courseId === c.id).length})
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="bank-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by topic, formula, or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bank-search-input"
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>

          {/* Shuffle controls: question order + answer order always mixed for practice */}
          <div className="bank-shuffle-group">
            <button
              className={`filter-btn ${shuffleMode ? 'active' : ''}`}
              title={shuffleMode ? 'Shuffle ON: questions & answers are mixed' : 'Shuffle OFF: original order'}
              onClick={() => {
                audio.playClick();
                setShuffleMode((v) => !v);
                setShuffleSeed((n) => n + 1);
              }}
            >
              <Shuffle size={14} />
              <span>Shuffle {shuffleMode ? 'ON' : 'OFF'}</span>
            </button>
            {shuffleMode && (
              <button
                className="filter-btn"
                title="Re-shuffle questions and answers"
                onClick={() => {
                  audio.playClick();
                  setExpandedId(null);
                  setShuffleSeed((n) => n + 1);
                }}
              >
                <Dices size={14} />
                <span>Re-shuffle</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="bank-results-count">
        Showing <strong>{filteredQuestions.length}</strong> of <strong>{PRACTICE_QUESTIONS.length}</strong> questions
      </div>

      {/* Question Cards Accordion List */}
      <div className="bank-questions-list">
        {displayQuestions.map((q, idx) => {
          const isExpanded = expandedId === q.id;
          const letter = ['A', 'B', 'C', 'D'][q.correctIndex];

          return (
            <div key={q.id} className={`bank-card ${isExpanded ? 'expanded' : ''}`}>
              <div 
                className="bank-card-header"
                onClick={() => {
                  audio.playClick();
                  setExpandedId(isExpanded ? null : q.id);
                }}
              >
                <div className="header-left">
                  <span className="q-badge-num">{q.courseId} · #{idx + 1}</span>
                  <span className="topic-tag">{q.topic}</span>
                  {q.pastPaper ? (
                    <span className="past-paper-badge" style={{ fontSize: '11px', padding: '2px 8px' }} title={`Exam Paper: ${q.pastPaper}`}>
                      🏛️ {q.pastPaper}
                    </span>
                  ) : q.source?.[0] ? (
                    <span className="source-origin-badge" style={{ fontSize: '11px', padding: '2px 8px' }} title={`Curriculum Slide: ${q.source[0].deck}`}>
                      📖 {q.source[0].deck.replace('.pdf', '')}{q.source[0].location ? ` (${q.source[0].location})` : ''}
                    </span>
                  ) : q.explanation?.reference ? (
                    <span className="source-origin-badge" style={{ fontSize: '11px', padding: '2px 8px' }} title={`Reference: ${q.explanation.reference}`}>
                      📖 {q.explanation.reference.split(';')[0].replace('.pdf', '')}
                    </span>
                  ) : null}
                  <span className={`diff-pill diff-${q.difficulty.toLowerCase().replace(' ', '-')}`}>
                    {q.difficulty}
                  </span>
                  <span className="q-snippet-text">
                    <MathText text={q.question.length > 80 ? q.question.substring(0, 80) + '...' : q.question} />
                  </span>
                </div>

                <div className="header-right">
                  <span className="correct-answer-hint">Answer: Option {letter}</span>
                  <button className="toggle-expand-btn">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
              </div>

              {/* Expanded Card Content */}
              {isExpanded && (
                <div className="bank-card-body">
                  <div className="full-statement">
                    <strong>Question Statement:</strong>
                    <div className="statement-math">
                      <MathText text={q.question} />
                    </div>
                    {q.codeSnippet && (
                      <pre className="code-block"><code>{q.codeSnippet}</code></pre>
                    )}
                  </div>

                  <div className="options-grid-display">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === q.correctIndex;
                      return (
                        <div key={oIdx} className={`option-card-row ${isCorrect ? 'is-correct-row' : ''}`}>
                          <span className="opt-letter-tag">{['A', 'B', 'C', 'D'][oIdx]}</span>
                          <span className="opt-math"><MathText text={opt} /></span>
                          {isCorrect && <span className="verified-badge">✓ Correct</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="explanation-section">
                    <WorkedSolution question={q} mode="review" />

                    <SourceList question={q} onOpenPdf={onOpenPdf} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
