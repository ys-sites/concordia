import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Target,
  FileText,
  Download,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Sparkles,
  Layers,
  RotateCcw,
  Award,
  ChevronRight,
  Eye,
  HelpCircle,
  Calculator,
  Compass,
  Cpu,
  ShieldCheck,
  Maximize2,
  X
} from 'lucide-react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument } from '../types';
import { audio } from '../utils/audio';
import { MathText } from '../utils/mathRenderer';
import { INDU211_TEACHER_EXAM } from '../data/teacherExamIndu211';
import './InduMidtermPrep.css';

interface Props {
  course: CourseWithDocs;
  onBack: () => void;
  onViewPdf?: (doc: CourseDocument, page?: number) => void;
}

type TabType = 'mapping' | 'drill' | 'formulas' | 'archive';

interface ExamModule {
  id: string;
  badge: string;
  title: string;
  description: string;
  chapters: string;
  weightMarks: number;
  weightPct: string;
  whyStudy: string[];
  examQuestions: string[]; // Question IDs (e.g. TX_INDU211_2025_Q01)
  figure?: {
    src: string;
    caption: string;
    alt: string;
  };
}

const EXAM_MODULES: ExamModule[] = [
  {
    id: 'mod1',
    badge: 'Module 1 · Chapters 1 & 2',
    title: 'Foundations of Industrial Systems, Systems Engineering & Ethics',
    chapters: 'Chapters 1 & 2',
    weightMarks: 6,
    weightPct: '12% of Exam',
    description: 'Covers the boundary between pure science and applied engineering, statutory licensing in Canada, the formal IISE definition of Industrial Engineering, and physical human activity systems.',
    whyStudy: [
      'Pure Science vs Applied Engineering: Science discovers physical laws through empirical experimentation; engineering synthesizes and applies these laws under economic, human, and safety constraints to create cost-effective technology.',
      'Statutory Licensing: In Canada, engineering practice is governed by provincial self-regulating orders (OIQ in Quebec, PEO in Ontario). A university degree alone does not grant practice rights; formal licensing, character review, and examinations are mandatory.',
      'Professional Code of Ethics: An engineer’s paramount statutory duty is safeguarding human life, health, public welfare, AND client economic property (frequent student trap: thinking engineers ignore economics!).',
      'Definition of Industrial Engineering (IISE): Optimization of integrated systems consisting of people, materials, equipment, energy, and information.',
      'Human Activity Systems: Workstation ergonomics, physical facility layout, material movements, and occupational safety.'
    ],
    examQuestions: [
      'TX_INDU211_2025_Q01',
      'TX_INDU211_2025_Q02',
      'TX_INDU211_2025_Q03',
      'TX_INDU211_2025_Q04',
      'TX_INDU211_2025_Q05',
      'TX_INDU211_2025_Q06'
    ]
  },
  {
    id: 'mod2',
    badge: 'Module 2 · Chapter 3 (Part 1)',
    title: 'Break-Even Economics, Process Crossover & Concurrent Engineering',
    chapters: 'Chapter 3',
    weightMarks: 6,
    weightPct: '12% of Exam',
    description: 'Equilibrium break-even quantity, determining required unit selling price, multi-process crossover volume analysis, and concurrent engineering benefits.',
    whyStudy: [
      'Break-Even Equilibrium: Total Revenue equals Total Cost: P · Q = FC + VC · Q. To find unit price: P = VC + (FC / Q_BE). The price must cover both variable cost AND fixed cost amortization!',
      'Process Selection Crossover Volume: Q* = ΔFC / ΔVC. If annual projected demand Q < Q*, the low fixed cost process is cheaper. If Q > Q*, the low variable cost process is cheaper.',
      'Concurrent Engineering: Simultaneous cross-functional product and manufacturing process design, eliminating over-the-wall delays, accelerating time-to-market, and maximizing quality.'
    ],
    examQuestions: [
      'TX_INDU211_2025_Q07',
      'TX_INDU211_2025_Q08',
      'TX_INDU211_2025_Q09'
    ]
  },
  {
    id: 'mod3',
    badge: 'Module 3 · Chapter 3 (Part 2)',
    title: 'Product Structure & Multi-Level Bill of Materials (BOM) Explosion',
    chapters: 'Chapter 3',
    weightMarks: 10,
    weightPct: '20% of Exam',
    description: 'Decomposing parent products into Level-1 subassemblies and Level-2 raw components across multiple end-item demand schedules.',
    whyStudy: [
      'Hierarchical Decomposition: Finished products (Level 0) explode into subassemblies (Level 1) which explode into raw components (Level 2).',
      'Shared Subassembly Demands: When a subassembly (e.g. S-3) is used by multiple parent products (Product 1 and Product 2), compute the requirements from each branch and sum them together.',
      'Child Multipliers: Multiply the parent quantity by the bracketed usage multiplier on the connecting tree branch (e.g. 20 units of S-1 requiring [3] C-1 = 60 units of C-1).'
    ],
    figure: {
      src: '/teacher-exams/indu211_bom_trees.png',
      caption: 'Official Midterm Problem 2 BOM Trees: Product 1 (demand 10) & Product 2 (demand 20) with subassemblies S1–S5 and components C1–C5.',
      alt: 'Bill of Materials trees for Products 1 and 2'
    },
    examQuestions: [
      'TX_INDU211_2025_Q13',
      'TX_INDU211_2025_Q14'
    ]
  },
  {
    id: 'mod4',
    badge: 'Module 4 · Chapter 4',
    title: 'Facility Layout Design & The Transportation Method',
    chapters: 'Chapter 4',
    weightMarks: 20,
    weightPct: '40% of Exam',
    description: 'Classical facility layouts (product, process, fixed-position), Systematic Layout Planning (Muther REL chart), balanced transportation linear programming, and heuristic optimality testing.',
    whyStudy: [
      'Three Basic Layout Types: Product layout (mass production / continuous line), Process layout (job shop / functional department grouping), Fixed-position layout (static product like shipbuilding/aerospace where equipment and workers move to the site).',
      'Systematic Layout Planning (SLP): Muther grid / Activity relationship chart evaluating qualitative Closeness Ratings (A, E, I, O, U, X).',
      'Transportation Model: Balanced transportation tableau where Total Supply = Total Demand (80 = 80).',
      'Northwest Corner Heuristic (S1): Greedily allocates from top-left (Cell 1,1) regardless of shipping cost, yielding a feasible initial basic solution of $935.',
      'Lowest Cost First Heuristic (S2): Greedily fills the lowest cost cell across the entire matrix first, yielding an initial basic solution of $725.',
      'Optimality Reality: S1 is NOT optimal (True). S2 is NOT guaranteed optimal without formal MODI u-v testing (MTF - May be True or False; MODI global minimum is $710).'
    ],
    figure: {
      src: '/teacher-exams/indu211_transportation_table.png',
      caption: 'Official Midterm Problem 3 Transportation Table: Northwest Corner Solution S1 ($935) vs Lowest Cost First Solution S2 ($725).',
      alt: 'Transportation initial tableau and allocation comparison'
    },
    examQuestions: [
      'TX_INDU211_2025_Q10',
      'TX_INDU211_2025_Q11',
      'TX_INDU211_2025_Q15',
      'TX_INDU211_2025_Q16'
    ]
  },
  {
    id: 'mod5',
    badge: 'Module 5 · Chapter 5',
    title: 'Material Handling Principles & Asymmetric TSP AGV Routing',
    chapters: 'Chapter 5',
    weightMarks: 14,
    weightPct: '28% of Exam',
    description: 'Material handling unit load principle, automated guided vehicles, and solving the asymmetric Traveling Salesperson Problem using the Nearest-Neighbor heuristic.',
    whyStudy: [
      'Unit Load Principle: Consolidate individual items into larger standardized batches or pallets to reduce handling frequency, damage, and labor costs.',
      'Asymmetric Cost Matrix: In one-way plant layout loops, travel time from Node i to Node j is not equal to Node j to Node i (e.g. M3 → M2 takes 1.6 min, but M2 → M3 takes 0.6 min!). Always read row-wise from the current node.',
      'Nearest-Neighbor Heuristic: At each step, choose the unvisited node with the lowest travel time in the current row. Starting at Storage S yields Tour S1 (9.0 min); starting at M1 yields Tour S2 (7.9 min).',
      'NP-Hardness & Heuristic Limits: Multi-start nearest neighbor cannot guarantee global optimality for the TSP (brute-force search reveals true global minimum is 7.0 min).'
    ],
    figure: {
      src: '/teacher-exams/indu211_tsp_matrix.png',
      caption: 'Official Midterm Problem 4 Asymmetric AGV Travel Time Matrix: Nearest-Neighbor tours from Storage S (9.0 min) vs Machine 1 (7.9 min).',
      alt: 'Asymmetric travel time matrix and tour comparisons'
    },
    examQuestions: [
      'TX_INDU211_2025_Q12',
      'TX_INDU211_2025_Q17',
      'TX_INDU211_2025_Q18'
    ]
  }
];

const SCAN_PAGES = [
  { id: 1, title: 'Page 1: Problem 1 MCQs 1–6 (12 Marks)', src: '/teacher-exams/indu211_midterm_p1.jpg' },
  { id: 2, title: 'Page 2: Problem 1 MCQs 7–12 (12 Marks)', src: '/teacher-exams/indu211_midterm_p2.jpg' },
  { id: 3, title: 'Page 3: Problem 2 Multi-Level BOM Trees (10 Marks)', src: '/teacher-exams/indu211_midterm_p3.jpg' },
  { id: 4, title: 'Page 4: Problem 3 Transportation LP S1 & S2 (16 Marks)', src: '/teacher-exams/indu211_midterm_p4.jpg' },
  { id: 5, title: 'Page 5: Problem 4 Asymmetric AGV TSP Routing (12 Marks)', src: '/teacher-exams/indu211_midterm_p5.jpg' }
];

export const InduMidtermPrepSection: React.FC<Props> = ({ course, onBack, onViewPdf }) => {
  const [activeTab, setActiveTab] = useState<TabType>('mapping');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});
  const [examModeActive, setExamModeActive] = useState<boolean>(false);
  const [examTimer, setExamTimer] = useState<number>(75 * 60); // 75 minutes in seconds
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  // Question lookup map
  const questionMap = useMemo(() => {
    const map = new Map<string, (typeof INDU211_TEACHER_EXAM)[0]>();
    INDU211_TEACHER_EXAM.forEach((q) => map.set(q.id, q));
    return map;
  }, []);

  // Timer countdown in exam mode
  useEffect(() => {
    let timer: any;
    if (examModeActive && !examSubmitted && examTimer > 0) {
      timer = setInterval(() => {
        setExamTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examModeActive, examSubmitted, examTimer]);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleSelectOption = (qId: string, optIndex: number) => {
    audio.playClick();
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIndex }));
    const q = questionMap.get(qId);
    if (q) {
      if (optIndex === q.correctIndex) {
        audio.playCorrect();
      } else {
        audio.playIncorrect();
      }
    }
  };

  const toggleExplanation = (qId: string) => {
    audio.playClick();
    setRevealedExplanations((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Exam Score Calculation
  const examScore = useMemo(() => {
    let score = 0;
    // Problem 1: 12 MCQs (1 mark each = 12 marks)
    for (let i = 1; i <= 12; i++) {
      const qId = `TX_INDU211_2025_Q${String(i).padStart(2, '0')}`;
      const q = questionMap.get(qId);
      if (q && selectedAnswers[qId] === q.correctIndex) score += 1;
    }
    // Problem 2: BOM Explosion (Q13 = 5 marks, Q14 = 5 marks = 10 marks)
    if (selectedAnswers['TX_INDU211_2025_Q13'] === questionMap.get('TX_INDU211_2025_Q13')?.correctIndex) score += 5;
    if (selectedAnswers['TX_INDU211_2025_Q14'] === questionMap.get('TX_INDU211_2025_Q14')?.correctIndex) score += 5;

    // Problem 3: Transportation (Q15 = 10 marks, Q16 = 6 marks = 16 marks)
    if (selectedAnswers['TX_INDU211_2025_Q15'] === questionMap.get('TX_INDU211_2025_Q15')?.correctIndex) score += 10;
    if (selectedAnswers['TX_INDU211_2025_Q16'] === questionMap.get('TX_INDU211_2025_Q16')?.correctIndex) score += 6;

    // Problem 4: TSP AGV (Q17 = 8 marks, Q18 = 4 marks = 12 marks)
    if (selectedAnswers['TX_INDU211_2025_Q17'] === questionMap.get('TX_INDU211_2025_Q17')?.correctIndex) score += 8;
    if (selectedAnswers['TX_INDU211_2025_Q18'] === questionMap.get('TX_INDU211_2025_Q18')?.correctIndex) score += 4;

    return score;
  }, [selectedAnswers, questionMap]);

  return (
    <div className="indu-prep-container">
      {/* Hero Header */}
      <div className="indu-prep-hero">
        <div className="indu-prep-top-nav">
          <button className="indu-prep-back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back to INDU 211 Workspace</span>
          </button>
          <div className="indu-prep-badge">
            <Sparkles size={12} />
            <span>Official Fall 2025 Midterm Exam Paper A</span>
          </div>
        </div>

        <h1 className="indu-prep-title">Industrial Engineering Midterm Preparation</h1>
        <p className="indu-prep-subtitle">
          Complete worked exam solution, curriculum-grounded chapter breakdowns, official diagrams, and an interactive 50-mark question system for Introduction to Production &amp; Manufacturing Systems.
        </p>

        <div className="indu-prep-stats-grid">
          <div className="indu-prep-stat-card">
            <span className="indu-prep-stat-num">50</span>
            <span className="indu-prep-stat-label">Total Exam Marks</span>
          </div>
          <div className="indu-prep-stat-card">
            <span className="indu-prep-stat-num">75 min</span>
            <span className="indu-prep-stat-label">Official Exam Duration</span>
          </div>
          <div className="indu-prep-stat-card">
            <span className="indu-prep-stat-num">18</span>
            <span className="indu-prep-stat-label">Authentic Exam Questions</span>
          </div>
          <div className="indu-prep-stat-card">
            <span className="indu-prep-stat-num">5 Modules</span>
            <span className="indu-prep-stat-label">Chapters 1–5 Direct Mapping</span>
          </div>
        </div>

        <div className="indu-prep-hero-actions">
          <a
            href="/teacher-exams/indu211_midterm_master_study_guide.pdf"
            download="INDU211_Midterm_Master_Study_Guide_Fall2025.pdf"
            className="indu-btn indu-btn-primary"
            onClick={() => audio.playClick()}
          >
            <Download size={16} />
            <span>Download Solved Master Study Guide (PDF)</span>
          </a>

          <button
            className="indu-btn indu-btn-secondary"
            onClick={() => {
              audio.playClick();
              setActiveTab('archive');
            }}
          >
            <Eye size={16} />
            <span>View 5 Official Exam Pages</span>
          </button>

          <button
            className="indu-btn indu-btn-secondary"
            onClick={() => {
              audio.playClick();
              setActiveTab('drill');
              setExamModeActive(true);
              setExamSubmitted(false);
              setExamTimer(75 * 60);
            }}
          >
            <Target size={16} />
            <span>Start 50-Mark Timed Simulation</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="indu-tabs-nav">
        <button
          className={`indu-tab-btn ${activeTab === 'mapping' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('mapping');
          }}
        >
          <BookOpen size={16} />
          <span>Curriculum &amp; Exam Mapping</span>
        </button>

        <button
          className={`indu-tab-btn ${activeTab === 'drill' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('drill');
          }}
        >
          <Target size={16} />
          <span>Practice Drill &amp; Question System (18 Questions)</span>
        </button>

        <button
          className={`indu-tab-btn ${activeTab === 'formulas' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('formulas');
          }}
        >
          <Calculator size={16} />
          <span>Master Formulas &amp; Decision Cheatsheet</span>
        </button>

        <button
          className={`indu-tab-btn ${activeTab === 'archive' ? 'active' : ''}`}
          onClick={() => {
            audio.playClick();
            setActiveTab('archive');
          }}
        >
          <Layers size={16} />
          <span>Authentic Exam Scans (5 Pages)</span>
        </button>
      </div>

      {/* TAB 1: CURRICULUM & EXAM MAPPING */}
      {activeTab === 'mapping' && (
        <div>
          <div style={{ marginBottom: '1.5rem', background: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '10px', padding: '1rem 1.25rem', color: '#0369a1', fontSize: '0.95rem' }}>
            <strong>💡 How to use this Curriculum Mapping:</strong> Each card below breaks down a specific chapter module from the professor's syllabus, tells you exactly what topics you must study, explains why they matter, and links directly to the authentic Fall 2025 Midterm Exam questions generated from that exact theory!
          </div>

          {EXAM_MODULES.map((module) => (
            <div key={module.id} className="indu-module-card">
              <div className="indu-module-header">
                <div>
                  <div className="indu-module-badge">{module.badge}</div>
                  <h3 className="indu-module-title">{module.title}</h3>
                  <p className="indu-module-desc">{module.description}</p>
                </div>
                <div className="indu-module-weight">
                  <span className="indu-module-weight-marks">{module.weightMarks} Marks</span>
                  <span className="indu-module-weight-pct">{module.weightPct}</span>
                </div>
              </div>

              <div className="indu-module-body">
                {/* What to study checklist */}
                <div className="indu-study-checklist">
                  <h4>
                    <ShieldCheck size={18} color="#d97706" />
                    <span>Essential Syllabus Concepts You Must Master:</span>
                  </h4>
                  <ul>
                    {module.whyStudy.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Figure if available */}
                {module.figure && (
                  <div className="indu-figure-container">
                    <img
                      src={module.figure.src}
                      alt={module.figure.alt}
                      className="indu-figure-img"
                      onClick={() => setActiveLightbox(module.figure!.src)}
                      style={{ cursor: 'pointer' }}
                    />
                    <div className="indu-figure-caption">{module.figure.caption} (Click image to zoom)</div>
                  </div>
                )}

                {/* Exam Questions generated from this chapter */}
                <h4 style={{ margin: '1.25rem 0 0.85rem', color: '#0f172a', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Target size={16} color="#d97706" />
                  <span>Exam Questions Originating from this Chapter:</span>
                </h4>

                <div className="indu-question-grid">
                  {module.examQuestions.map((qId) => {
                    const q = questionMap.get(qId);
                    if (!q) return null;
                    const selected = selectedAnswers[q.id];
                    const isAnswered = selected !== undefined;
                    const isCorrect = selected === q.correctIndex;
                    const isRevealed = revealedExplanations[q.id] || isAnswered;

                    return (
                      <div key={q.id} className="indu-q-card">
                        <div className="indu-q-header">
                          <span className="indu-q-tag">{q.pastPaper}</span>
                          <span className="indu-q-difficulty">{q.difficulty}</span>
                        </div>

                        <div className="indu-q-text">
                          <MathText text={q.question} />
                        </div>

                        <div className="indu-q-options">
                          {q.options.map((opt, optIdx) => {
                            let optClass = 'indu-option-btn';
                            if (isAnswered) {
                              if (optIdx === q.correctIndex) optClass += ' correct';
                              else if (optIdx === selected) optClass += ' wrong';
                            }
                            const letter = String.fromCharCode(65 + optIdx);

                            return (
                              <button
                                key={optIdx}
                                className={optClass}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                              >
                                <span className="indu-option-key">{letter}.</span>
                                <span style={{ flex: 1 }}>
                                  <MathText text={opt} />
                                </span>
                                {isAnswered && optIdx === q.correctIndex && <CheckCircle2 size={16} color="#10b981" />}
                                {isAnswered && optIdx === selected && optIdx !== q.correctIndex && <XCircle size={16} color="#ef4444" />}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Toggle / Reveal */}
                        {isRevealed && q.explanation && (
                          <div className="indu-explanation-box">
                            <div className="indu-exp-core">
                              <strong>Key Academic Rationale:</strong> <MathText text={q.explanation.coreConcept} />
                            </div>

                            {q.explanation.stepByStep && q.explanation.stepByStep.length > 0 && (
                              <div className="indu-exp-steps">
                                <strong>Step-by-Step Derivation:</strong>
                                <ol>
                                  {q.explanation.stepByStep.map((s, idx) => (
                                    <li key={idx}>
                                      <MathText text={s} />
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            )}

                            {q.explanation.commonTrap && (
                              <div className="indu-exp-trap">
                                <strong>⚠️ Common Student Trap:</strong> <MathText text={q.explanation.commonTrap} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: PRACTICE DRILL & QUESTION SYSTEM */}
      {activeTab === 'drill' && (
        <div>
          {/* Exam Mode Toggle Banner */}
          <div className="indu-exam-bar">
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', marginRight: '12px' }}>
                {examModeActive ? 'Midterm Exam Simulation Active' : 'Self-Paced Practice Drill'}
              </span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                {Object.keys(selectedAnswers).length} of {INDU211_TEACHER_EXAM.length} Answered
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {examModeActive && (
                <div className="indu-timer-badge">
                  <Clock size={18} />
                  <span>{formatTimer(examTimer)}</span>
                </div>
              )}

              {examModeActive && !examSubmitted && (
                <button
                  className="indu-btn indu-btn-primary"
                  onClick={() => {
                    audio.playClick();
                    setExamSubmitted(true);
                  }}
                  style={{ padding: '6px 14px', fontSize: '13px' }}
                >
                  <Award size={16} />
                  <span>Submit Exam</span>
                </button>
              )}

              <button
                className="indu-btn indu-btn-secondary"
                onClick={() => {
                  audio.playClick();
                  setExamModeActive(!examModeActive);
                  if (!examModeActive) {
                    setExamSubmitted(false);
                    setExamTimer(75 * 60);
                  }
                }}
                style={{ padding: '6px 14px', fontSize: '13px' }}
              >
                <RotateCcw size={14} />
                <span>{examModeActive ? 'Exit Exam Mode' : 'Switch to 75-Min Timed Exam'}</span>
              </button>
            </div>
          </div>

          {/* Exam Score Summary after submission */}
          {examSubmitted && (
            <div style={{ background: '#ecfdf5', border: '2px solid #10b981', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              <h2 style={{ color: '#065f46', margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800 }}>
                Exam Completed! Final Score: {examScore} / 50 Marks ({Math.round((examScore / 50) * 100)}%)
              </h2>
              <p style={{ color: '#047857', margin: '0 0 1rem' }}>
                {examScore >= 40
                  ? '🌟 Outstanding performance! You are in prime condition for an A+ on the official midterm.'
                  : examScore >= 25
                  ? '👍 Solid passing foundation. Review the chapter breakdowns below to shore up computational areas.'
                  : '⚠️ Further preparation required. Review the multi-level BOM explosion and Transportation heuristics.'}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button
                  className="indu-btn indu-btn-primary"
                  onClick={() => {
                    setSelectedAnswers({});
                    setRevealedExplanations({});
                    setExamSubmitted(false);
                    setExamTimer(75 * 60);
                  }}
                >
                  <RotateCcw size={16} />
                  <span>Retake 50-Mark Exam</span>
                </button>
              </div>
            </div>
          )}

          {/* Full List of 18 Questions */}
          <div className="indu-question-grid">
            {INDU211_TEACHER_EXAM.map((q, idx) => {
              const selected = selectedAnswers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correctIndex;
              const isRevealed = revealedExplanations[q.id] || isAnswered || examSubmitted;

              return (
                <div key={q.id} className="indu-q-card" id={q.id}>
                  <div className="indu-q-header">
                    <div>
                      <span className="indu-q-tag">Question {idx + 1} of 18 · {q.pastPaper}</span>
                      <span style={{ marginLeft: '8px', fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                        {q.topic}
                      </span>
                    </div>
                    <span className="indu-q-difficulty">{q.difficulty}</span>
                  </div>

                  <div className="indu-q-text">
                    <MathText text={q.question} />
                  </div>

                  {/* Figure if question carries one */}
                  {q.figure && (
                    <div className="indu-figure-container" style={{ margin: '0 0 1rem' }}>
                      <img
                        src={q.figure.src}
                        alt={q.figure.alt}
                        className="indu-figure-img"
                        onClick={() => setActiveLightbox(q.figure!.src)}
                        style={{ cursor: 'pointer', maxHeight: '350px' }}
                      />
                      <div className="indu-figure-caption">{q.figure.caption}</div>
                    </div>
                  )}

                  <div className="indu-q-options">
                    {q.options.map((opt, optIdx) => {
                      let optClass = 'indu-option-btn';
                      if (isAnswered) {
                        if (optIdx === q.correctIndex) optClass += ' correct';
                        else if (optIdx === selected) optClass += ' wrong';
                      }
                      const letter = String.fromCharCode(65 + optIdx);

                      return (
                        <button
                          key={optIdx}
                          className={optClass}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                        >
                          <span className="indu-option-key">{letter}.</span>
                          <span style={{ flex: 1 }}>
                            <MathText text={opt} />
                          </span>
                          {isAnswered && optIdx === q.correctIndex && <CheckCircle2 size={16} color="#10b981" />}
                          {isAnswered && optIdx === selected && optIdx !== q.correctIndex && <XCircle size={16} color="#ef4444" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  {isRevealed && q.explanation && (
                    <div className="indu-explanation-box">
                      <div className="indu-exp-core">
                        <strong>Academic Core Concept:</strong> <MathText text={q.explanation.coreConcept} />
                      </div>

                      {q.explanation.stepByStep && q.explanation.stepByStep.length > 0 && (
                        <div className="indu-exp-steps">
                          <strong>Step-by-Step Mathematical Derivation:</strong>
                          <ol>
                            {q.explanation.stepByStep.map((s, sIdx) => (
                              <li key={sIdx}>
                                <MathText text={s} />
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {q.explanation.commonTrap && (
                        <div className="indu-exp-trap">
                          <strong>⚠️ Common Student Trap:</strong> <MathText text={q.explanation.commonTrap} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: MASTER FORMULAS & DECISION CHEATSHEET */}
      {activeTab === 'formulas' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Card 1: Break Even Formulas */}
          <div className="indu-module-card">
            <div className="indu-module-header">
              <h3 className="indu-module-title">1. Break-Even &amp; Process Economics</h3>
            </div>
            <div className="indu-module-body" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#334155' }}>
              <p><strong>Total Cost Model:</strong> <MathText text="$TC = FC + VC \cdot Q$" /></p>
              <p><strong>Break-Even Volume:</strong> <MathText text="$Q_{BE} = \frac{FC}{P - VC}$" /></p>
              <p><strong>Target Selling Price at Break-Even:</strong> <MathText text="$P = VC + \frac{FC}{Q_{BE}}$" /></p>
              <p><strong>Crossover (Indifference) Volume:</strong> <MathText text="$Q^* = \frac{FC_B - FC_A}{VC_A - VC_B} = \frac{\Delta FC}{\Delta VC}$" /></p>
              <div style={{ background: '#fef3c7', padding: '10px 12px', borderRadius: '8px', color: '#92400e', fontSize: '0.85rem' }}>
                <strong>Golden Decision Rule:</strong> If demand $Q &lt; Q^*$, select lower Fixed Cost process. If demand $Q &gt; Q^*$, select lower Variable Cost process.
              </div>
            </div>
          </div>

          {/* Card 2: BOM Explosion */}
          <div className="indu-module-card">
            <div className="indu-module-header">
              <h3 className="indu-module-title">2. Multi-Level BOM Explosion</h3>
            </div>
            <div className="indu-module-body" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#334155' }}>
              <p><strong>Level 0:</strong> Independent Master Schedule Finished Products ($P_1, P_2$).</p>
              <p><strong>Level 1 Subassemblies:</strong></p>
              <MathText text="$\text{Total } S_i = \sum_{\text{Parents } P} Q_P \times (\text{Usage bracket})$" />
              <p style={{ marginTop: '8px' }}><strong>Level 2 Raw Components:</strong></p>
              <MathText text="$\text{Total } C_j = \sum_{\text{Subassemblies } S} Q_S \times (\text{Component bracket})$" />
              <div style={{ background: '#f0fdf4', padding: '10px 12px', borderRadius: '8px', color: '#166534', fontSize: '0.85rem', marginTop: '10px' }}>
                <strong>Exam Rule:</strong> Always check if a subassembly (like $S_3$) has different component inputs when used in Product 1 vs Product 2!
              </div>
            </div>
          </div>

          {/* Card 3: Transportation LP */}
          <div className="indu-module-card">
            <div className="indu-module-header">
              <h3 className="indu-module-title">3. Transportation Problem Heuristics</h3>
            </div>
            <div className="indu-module-body" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#334155' }}>
              <p><strong>Feasibility Condition:</strong> <MathText text="Allocated cells must equal $m + n - 1$. For $3 \times 3$, allocations = $3 + 3 - 1 = 5$ cells." /></p>
              <p><strong>Northwest Corner (S1):</strong> <MathText text="Top-left greedy stepping without considering unit cost ($TC = \$935$)." /></p>
              <p><strong>Lowest Cost First (S2):</strong> <MathText text="Greedily allocate maximum possible to smallest matrix cell $c_{ij}$ ($TC = \$725$)." /></p>
              <p><strong>Optimality Proof (MODI):</strong> <MathText text="Row indices $u_i$ and column indices $v_j$ satisfy $u_i + v_j = c_{ij}$ on basic cells. True global minimum is $\$710$ (making S2 MTF without MODI testing!)." /></p>
            </div>
          </div>

          {/* Card 4: Asymmetric TSP */}
          <div className="indu-module-card">
            <div className="indu-module-header">
              <h3 className="indu-module-title">4. Asymmetric TSP &amp; AGV Routing</h3>
            </div>
            <div className="indu-module-body" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#334155' }}>
              <p><strong>Asymmetric Rule:</strong> <MathText text="$c_{ij} \ne c_{ji}$ due to one-way aisles and turning radii." /></p>
              <p><strong>Trace Rule:</strong> Always scan outward along the row of the CURRENT node. Never read down columns!</p>
              <p><strong>Sequence S1 (Start S):</strong> <MathText text="$S \to M3 \to M4 \to M5 \to M1 \to M2 \to S \implies T1 = 9.0\text{ min}$" /></p>
              <p><strong>Sequence S2 (Start M1):</strong> <MathText text="$M1 \to S \to M3 \to M4 \to M5 \to M2 \to M1 \implies T2 = 7.9\text{ min}$" /></p>
              <div style={{ background: '#fef2f2', padding: '10px 12px', borderRadius: '8px', color: '#991b1b', fontSize: '0.85rem', marginTop: '10px' }}>
                <strong>Heuristic Limit:</strong> The Nearest-Neighbor heuristic is greedy; it does NOT guarantee global optimality for NP-hard TSP problems!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AUTHENTIC EXAM SCANS */}
      {activeTab === 'archive' && (
        <div>
          <div style={{ marginBottom: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#0f172a' }}>Authentic Midterm Exam Paper A Archive</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                Original examination paper administered October 21, 2025. Total Marks: 50. Click any thumbnail to inspect high-resolution scan.
              </p>
            </div>
            <a
              href="/teacher-exams/indu211_midterm_master_study_guide.pdf"
              download="INDU211_Midterm_Master_Study_Guide_Fall2025.pdf"
              className="indu-btn indu-btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="indu-scans-grid">
            {SCAN_PAGES.map((page) => (
              <div
                key={page.id}
                className="indu-scan-thumb"
                onClick={() => {
                  audio.playClick();
                  setActiveLightbox(page.src);
                }}
              >
                <img src={page.src} alt={page.title} />
                <span>{page.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="indu-modal-backdrop" onClick={() => setActiveLightbox(null)}>
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: '#0f172a',
              borderRadius: '12px',
              padding: '12px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>
            <img
              src={activeLightbox}
              alt="Enlarged view"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '6px'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
