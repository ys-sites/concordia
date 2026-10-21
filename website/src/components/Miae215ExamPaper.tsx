import React, { useState, useMemo } from 'react';
import {
  Printer,
  BookOpen,
  Target,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Code2,
  FileText,
  SlidersHorizontal,
  HelpCircle
} from 'lucide-react';
import { MIAE215_TEACHER_EXAM } from '../data/teacherExamMiae215';
import { OptionContent } from './OptionContent';
import { audio } from '../utils/audio';
import './Miae215ExamPaper.css';

interface Miae215ExamPaperProps {
  onLaunchDrill?: () => void;
}

interface QuestionSection {
  id: 'all' | 'p1' | 'p2' | 'p3';
  title: string;
  subtitle: string;
  marks: string;
  questionRange: [number, number]; // 1-based start and end indices
  description: string;
}

const SECTIONS: QuestionSection[] = [
  {
    id: 'p1',
    title: 'Problem 1: Output Tracing, Control Logic & Array Indexing',
    subtitle: 'Fall 2023 Midterm Q2(a), Q2(b) & Review #1 Q2',
    marks: '22 Marks (~45%)',
    questionRange: [1, 10],
    description:
      'Solve using the standard Table Trace Method. Maintain dedicated columns for loop counters, accumulators, and array indices. Record state mutations line-by-line and trace exact cout stdout buffer lines.'
  },
  {
    id: 'p2',
    title: 'Problem 2: Array Algorithms, Search & Loop Control Logic',
    subtitle: 'Midterm Review #1 Q1 & Quiz 2 (Wed/Thu Sections)',
    marks: '15 Marks (~30%)',
    questionRange: [11, 20],
    description:
      'Analyze loop terminating conditions, element-by-element equality checks, alternating vector input algorithms, sentinel break conditions, and menu validation structures.'
  },
  {
    id: 'p3',
    title: 'Problem 3: C++ Data Types, Formatting & Variable Overflow',
    subtitle: 'Quiz 1 (Tuesday & Wednesday Sections)',
    marks: '13 Marks (~25%)',
    questionRange: [21, 31],
    description:
      'Test precision limits, cascading if vs else-if branching, iomanip formatting (setw, setprecision, fixed), short/int integer overflow boundaries, and IEEE 754 floating-point truncation.'
  }
];

export const Miae215ExamPaper: React.FC<Miae215ExamPaperProps> = ({ onLaunchDrill }) => {
  const [selectedSection, setSelectedSection] = useState<'all' | 'p1' | 'p2' | 'p3'>('all');
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [showAllSolutions, setShowAllSolutions] = useState<boolean>(false);

  const toggleSolution = (qId: string) => {
    audio.playClick();
    setOpenSolutions((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleToggleAllSolutions = () => {
    audio.playClick();
    const nextState = !showAllSolutions;
    setShowAllSolutions(nextState);
    const updated: Record<string, boolean> = {};
    MIAE215_TEACHER_EXAM.forEach((q) => {
      updated[q.id] = nextState;
    });
    setOpenSolutions(updated);
  };

  // Filter questions based on selected section tab
  const activeSections = useMemo(() => {
    if (selectedSection === 'all') return SECTIONS;
    return SECTIONS.filter((s) => s.id === selectedSection);
  }, [selectedSection]);

  return (
    <div className="m215-xp-root">
      {/* 1. TOP ACTION & CONTROL BAR */}
      <div className="m215-xp-bar">
        <div className="m215-xp-bar-text">
          <strong>Dr. Gordon MIAE 215 Official Midterm Exam Paper Replica</strong>
          <br />
          Hand-written exam replica (31 questions). Work through each problem on paper first, then reveal the mark scheme and common traps.
        </div>
        <div className="m215-xp-bar-actions">
          <button
            type="button"
            className="m215-xp-btn"
            onClick={() => window.print()}
            title="Print this official exam paper or save as a formatted PDF"
          >
            <Printer size={14} />
            <span>Print / Save as PDF</span>
          </button>
          <button
            type="button"
            className="m215-xp-btn"
            onClick={handleToggleAllSolutions}
            title="Expand or hide all official solutions"
          >
            <BookOpen size={14} />
            <span>{showAllSolutions ? 'Hide All Solutions' : 'Reveal All Solutions'}</span>
          </button>
          {onLaunchDrill && (
            <button
              type="button"
              className="m215-xp-btn m215-xp-btn-primary"
              onClick={() => {
                audio.playClick();
                onLaunchDrill();
              }}
              title="Practice these 31 questions in the interactive quiz drill engine"
            >
              <Target size={14} />
              <span>Skill Drill (Interactive)</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. SECTION FILTER PILLS */}
      <div className="m215-xp-filter-bar">
        <button
          type="button"
          className={`m215-xp-pill ${selectedSection === 'all' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setSelectedSection('all');
          }}
        >
          All 31 Questions (Full Paper)
        </button>
        <button
          type="button"
          className={`m215-xp-pill ${selectedSection === 'p1' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setSelectedSection('p1');
          }}
        >
          Problem 1: Output Tracing (~45% / 22 Marks)
        </button>
        <button
          type="button"
          className={`m215-xp-pill ${selectedSection === 'p2' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setSelectedSection('p2');
          }}
        >
          Problem 2: Array Algorithms & Loops (15 Marks)
        </button>
        <button
          type="button"
          className={`m215-xp-pill ${selectedSection === 'p3' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setSelectedSection('p3');
          }}
        >
          Problem 3: Types & Overflow (13 Marks)
        </button>
      </div>

      {/* 3. AUTHENTIC PRINTABLE EXAM PAPER SHEET */}
      <div className="m215-xp-sheet">
        {/* Cover / Academic Header */}
        <div className="m215-xp-header">
          <div className="m215-xp-uni">Concordia University</div>
          <div className="m215-xp-dept">
            Faculty of Engineering and Computer Science
            <br />
            Department of Mechanical, Industrial & Aerospace Engineering
          </div>
          <div className="m215-xp-title">
            MIDTERM EXAMINATION — PROGRAMMING FOR MECHANICAL & INDUSTRIAL ENGINEERS
          </div>

          <div className="m215-xp-meta-grid">
            <div className="m215-xp-meta-item">
              <strong>Course:</strong> MIAE 215 / Section ALL
            </div>
            <div className="m215-xp-meta-item">
              <strong>Instructor:</strong> Dr. Gordon
            </div>
            <div className="m215-xp-meta-item">
              <strong>Duration:</strong> 1 Hour 15 Minutes (75 min)
            </div>
            <div className="m215-xp-meta-item">
              <strong>Total Marks:</strong> 50 Marks
            </div>
            <div className="m215-xp-meta-item">
              <strong>Format:</strong> Hand-written In-Person
            </div>
            <div className="m215-xp-meta-item">
              <strong>Aids Permitted:</strong> 1-sided Formula Sheet (≥10pt) & Non-prog Calc
            </div>
          </div>
        </div>

        {/* Student Identification Form Box */}
        <div className="m215-xp-student-box">
          <div className="m215-xp-student-field">
            <strong>Student Family Name:</strong>
            <span className="m215-xp-student-line" />
          </div>
          <div className="m215-xp-student-field">
            <strong>First Name:</strong>
            <span className="m215-xp-student-line" />
          </div>
          <div className="m215-xp-student-field">
            <strong>Student ID Number:</strong>
            <span className="m215-xp-student-line" />
          </div>
          <div className="m215-xp-student-field">
            <strong>Signature:</strong>
            <span className="m215-xp-student-line" />
          </div>
        </div>

        {/* Official General Instructions */}
        <div className="m215-xp-instructions">
          <h4>General Exam Instructions &amp; Policies:</h4>
          <ol>
            <li>
              <strong>Two Major Problems:</strong> An Output Tracing question worth approximately <strong>45%</strong> and an Algorithm / Programming question worth approximately <strong>55%</strong>.
            </li>
            <li>
              <strong>Table Trace Method:</strong> For all tracing questions in Problem 1, you MUST use the table method with separate columns for each variable and an explicit output box.
            </li>
            <li>
              <strong>Formula Sheet:</strong> One 8.5 × 11 in. one-sided formula sheet is allowed. Font size must be no smaller than 10 points. Hand-written or printed.
            </li>
            <li>
              <strong>Calculator:</strong> Non-programmable faculty-approved calculator allowed.
            </li>
            <li>
              <strong>Excluded Topics:</strong> Arduino questions and flowcharts are strictly <em>NOT</em> on this midterm.
            </li>
          </ol>
        </div>

        {/* Render Each Sub-Section */}
        {activeSections.map((sec) => {
          const [startIdx, endIdx] = sec.questionRange;
          // Slice questions (0-indexed)
          const sectionQuestions = MIAE215_TEACHER_EXAM.slice(startIdx - 1, endIdx);

          return (
            <div key={sec.id} className="m215-xp-section-block">
              <div className="m215-xp-section-header">
                <span>{sec.title}</span>
                <span className="m215-xp-section-marks">{sec.marks}</span>
              </div>
              <p
                style={{
                  fontSize: '13.5px',
                  fontStyle: 'italic',
                  color: '#475569',
                  marginBottom: '20px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                <strong>Source:</strong> {sec.subtitle}. {sec.description}
              </p>

              {sectionQuestions.map((q, localIdx) => {
                const globalQuestionNumber = startIdx + localIdx;
                const isSolOpen = openSolutions[q.id] || showAllSolutions;

                return (
                  <div key={q.id} className="m215-xp-question">
                    {/* Question Header & Meta */}
                    <div className="m215-xp-q-header">
                      <div className="m215-xp-q-title">
                        Question {globalQuestionNumber}.
                      </div>
                      <div className="m215-xp-q-meta">
                        <span className="m215-xp-q-paper-badge">{q.pastPaper}</span>
                        <span className="m215-xp-q-marks">{q.difficulty}</span>
                      </div>
                    </div>

                    {/* Question Text */}
                    <div className="m215-xp-q-text">{q.question}</div>

                    {/* Code Snippet (if present) */}
                    {q.codeSnippet && (
                      <div className="m215-xp-code-box">
                        <code>{q.codeSnippet}</code>
                      </div>
                    )}

                    {/* Multiple-Choice Options */}
                    <div className="m215-xp-options-list">
                      {q.options.map((opt, oIdx) => {
                        const letter = String.fromCharCode(97 + oIdx); // 'a', 'b', 'c', 'd'
                        return (
                          <div key={oIdx} className="m215-xp-opt-item">
                            <span className="m215-xp-opt-letter">({letter})</span>
                            <div className="m215-xp-opt-content">
                              <OptionContent text={opt} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Paper Working Space for manual tracing */}
                    <div className="m215-xp-work-box">
                      <div className="m215-xp-work-label">
                        Student Working Space / Scratch Trace Lines:
                      </div>
                      <div className="m215-xp-work-lines">
                        <div className="m215-xp-work-line" />
                        <div className="m215-xp-work-line" />
                        <div className="m215-xp-work-line" />
                      </div>
                    </div>

                    {/* Solutions Toggle Button */}
                    <button
                      type="button"
                      className="m215-xp-sol-toggle"
                      onClick={() => toggleSolution(q.id)}
                    >
                      {isSolOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      <span>
                        {isSolOpen
                          ? 'Hide Official Mark Scheme & Trap Breakdown'
                          : 'Show Official Solution & Mark Breakdown'}
                      </span>
                    </button>

                    {/* Solution & Trap Breakdown */}
                    {isSolOpen && (
                      <div className="m215-xp-sol-box">
                        <div className="m215-xp-sol-correct">
                          <CheckCircle2 size={15} />
                          <span>
                            Correct Answer: ({String.fromCharCode(97 + q.correctIndex)}) —{' '}
                            <strong>
                              {q.options[q.correctIndex].length < 60
                                ? q.options[q.correctIndex]
                                : 'See Option (' + String.fromCharCode(97 + q.correctIndex) + ')'}
                            </strong>
                          </span>
                        </div>

                        {q.explanation.coreConcept && (
                          <div className="m215-xp-sol-concept">
                            <strong>Core Concept:</strong> {q.explanation.coreConcept}
                          </div>
                        )}

                        {q.explanation.stepByStep && q.explanation.stepByStep.length > 0 && (
                          <div>
                            <strong>Step-by-Step Derivation:</strong>
                            <ol className="m215-xp-sol-steps">
                              {q.explanation.stepByStep.map((step, sIdx) => (
                                <li key={sIdx}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {q.explanation.whyWrong &&
                          Object.keys(q.explanation.whyWrong).length > 0 && (
                            <div className="m215-xp-sol-traps">
                              <strong>Exam Traps & Why Other Options Are Wrong:</strong>
                              <ul style={{ margin: '6px 0 0 16px' }}>
                                {Object.entries(q.explanation.whyWrong).map(([optK, reason]) => {
                                  const num = Number(optK);
                                  const trapLetter = !isNaN(num)
                                    ? String.fromCharCode(97 + num)
                                    : optK;
                                  return (
                                    <li key={optK} style={{ marginBottom: '3px' }}>
                                      <strong>Option ({trapLetter}): </strong>
                                      <span>{reason}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}

                        {q.explanation.commonTrap && (
                          <div
                            style={{
                              marginTop: '8px',
                              fontSize: '12.5px',
                              color: '#b45309',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <AlertTriangle size={14} className="flex-shrink-0" />
                            <span>
                              <strong>Common Student Trap:</strong> {q.explanation.commonTrap}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Sheet Footer */}
        <div className="m215-xp-foot">
          End of MIAE 215 Midterm Examination Paper Replica · Concordia University Gina Cody School of Engineering
        </div>
      </div>
    </div>
  );
};

export default Miae215ExamPaper;
