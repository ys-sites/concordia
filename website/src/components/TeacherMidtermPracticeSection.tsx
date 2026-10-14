import React, { useState, useMemo } from 'react';
import {
  Target,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Eye,
  ExternalLink,
  Brain,
  AlertTriangle,
  CheckCircle2,
  Code,
  Layers,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  PlayCircle,
  FileCode,
  GraduationCap
} from 'lucide-react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument, CourseId } from '../types';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { MathText } from '../utils/mathRenderer';
import { TEACHER_EXAM_PRACTICE_DATA, TeacherExamFile } from '../data/teacherExamPracticeData';

interface TeacherMidtermPracticeSectionProps {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument, page?: number) => void;
  onLaunchDrill?: (courseId: CourseId, sectionId: string) => void;
  onStartQuiz: (courseId: CourseId) => void;
  onBack: () => void;
}

type TabType = 'blueprint' | 'files' | 'traps' | 'trace';

const DAY_MS = 86400000;

export const TeacherMidtermPracticeSection: React.FC<TeacherMidtermPracticeSectionProps> = ({
  course,
  onViewPdf,
  onLaunchDrill,
  onStartQuiz,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('blueprint');
  const [selectedFile, setSelectedFile] = useState<TeacherExamFile | null>(null);

  const blueprint = TEACHER_EXAM_PRACTICE_DATA[course.id];

  // Calculate live countdown days
  const daysToGo = useMemo(() => {
    if (!blueprint?.confirmedDate) return null;
    const target = new Date(blueprint.confirmedDate + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.round((target.getTime() - today.getTime()) / DAY_MS);
    return diff;
  }, [blueprint]);

  // Handle PDF opening
  const handleOpenPdf = (file: TeacherExamFile) => {
    audio.playClick();
    // Look for document in course.documents
    const found = course.documents.find(
      (d) =>
        d.filename.toLowerCase() === file.filename.toLowerCase() ||
        d.relativePath.toLowerCase().includes(file.filename.toLowerCase()) ||
        d.title.toLowerCase().includes(file.title.toLowerCase())
    );

    if (found) {
      onViewPdf(found);
    } else {
      // Fallback synthetic doc
      const fallbackDoc: CourseDocument = {
        id: `${course.id}:${file.id}`,
        courseId: course.id,
        categoryId: 'Teacher Midterm Practice',
        categoryTitle: 'Teacher Midterm Practice',
        title: file.title,
        filename: file.filename,
        relativePath: file.relativePath,
        tags: file.keyTopics,
        summary: file.description
      };
      onViewPdf(fallbackDoc);
    }
  };

  const startPracticeDrill = () => {
    audio.playClick();
    if (onLaunchDrill && blueprint?.featuredDrillSectionId) {
      onLaunchDrill(course.id, blueprint.featuredDrillSectionId);
    } else {
      onStartQuiz(course.id);
    }
  };

  if (!blueprint) {
    return (
      <div className="fx-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <h2>Teacher Midterm Practice</h2>
        <p className="fx-empty">Teacher practice data is being formatted for this course.</p>
        <button className="fx-btn fx-btn-primary" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Course Folders</span>
        </button>
      </div>
    );
  }

  return (
    <div className="teacher-practice-hub" style={{ '--accent': course.accentHex } as React.CSSProperties}>
      {/* Breadcrumb Header */}
      <div className="tp-header-banner">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to {course.code} Folders</span>
        </button>

        <div className="tp-badge-row">
          <span className="tp-course-pill" style={{ backgroundColor: course.accentHex }}>
            {course.code}
          </span>
          <span className="tp-verified-badge">
            <Sparkles size={14} /> Official Teacher Exam Materials
          </span>
        </div>

        <h1 className="tp-main-title">Teacher Midterm Practice & Blueprint</h1>
        <p className="tp-subtitle">
          Instructor-provided sample examinations, official memory trace code, verified marking rubrics, and confirmed curriculum scope.
        </p>

        {/* Exam Countdown Card */}
        <div className="tp-countdown-bar">
          <div className="tp-countdown-left">
            <Calendar size={22} className="tp-calendar-icon" />
            <div>
              <div className="tp-date-label">{blueprint.dateLabel}</div>
              <div className="tp-date-sub">{blueprint.timeAndLocation}</div>
              {blueprint.assignmentNotice && (
                <div className="tp-assignment-notice">
                  <Clock size={13} /> {blueprint.assignmentNotice}
                </div>
              )}
            </div>
          </div>

          <div className="tp-countdown-right">
            {daysToGo !== null && (
              <div className="tp-countdown-pill">
                <span className="tp-days-number">{daysToGo > 0 ? daysToGo : 0}</span>
                <span className="tp-days-label">{daysToGo === 1 ? 'day to go' : 'days to go'}</span>
              </div>
            )}
            <button className="tp-start-drill-btn" onClick={startPracticeDrill}>
              <Brain size={18} />
              <span>Launch Practice Drill</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tp-tab-row" role="tablist">
          <button
            className={`tp-tab-btn ${activeTab === 'blueprint' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('blueprint');
            }}
          >
            <BookOpen size={16} />
            <span>Confirmed Scope & Format</span>
          </button>
          <button
            className={`tp-tab-btn ${activeTab === 'files' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('files');
            }}
          >
            <FileText size={16} />
            <span>Official Teacher Exams ({blueprint.practiceFiles.length})</span>
          </button>
          <button
            className={`tp-tab-btn ${activeTab === 'traps' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('traps');
            }}
          >
            <AlertTriangle size={16} />
            <span>Teacher Traps & Tricks</span>
          </button>
          {course.id === 'MIAE215' && (
            <button
              className={`tp-tab-btn ${activeTab === 'trace' ? 'active' : ''}`}
              onClick={() => {
                audio.playClick();
                setActiveTab('trace');
              }}
            >
              <Code size={16} />
              <span>Dr. Gordon Table Trace Lab</span>
            </button>
          )}
        </div>
      </div>

      {/* Tab 1: Confirmed Scope & Format */}
      {activeTab === 'blueprint' && (
        <div className="tp-tab-content">
          <div className="tp-card-grid-2">
            <div className="tp-info-card">
              <div className="tp-card-header">
                <Target size={18} style={{ color: course.accentHex }} />
                <h3>Confirmed Midterm Scope</h3>
              </div>
              <p className="tp-scope-text">
                <MathText text={blueprint.confirmedScope} />
              </p>
            </div>

            <div className="tp-info-card">
              <div className="tp-card-header">
                <Clock size={18} style={{ color: course.accentHex }} />
                <h3>Format & Calculator Policy</h3>
              </div>
              <div className="tp-policy-block">
                <strong>Exam Structure:</strong>
                <p>{blueprint.formatOverview}</p>
              </div>
              <div className="tp-policy-block" style={{ marginTop: '0.75rem' }}>
                <strong>Calculator Policy:</strong>
                <p>{blueprint.calculatorPolicy}</p>
              </div>
            </div>
          </div>

          <div className="tp-info-card" style={{ marginTop: '1.25rem' }}>
            <div className="tp-card-header">
              <GraduationCap size={18} style={{ color: course.accentHex }} />
              <h3>Course Coordinator & Instructor Notes</h3>
            </div>
            <ul className="tp-notes-list">
              {blueprint.instructorNotes.map((note, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="tp-bullet-icon" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tab 2: Official Practice Exams & Files */}
      {activeTab === 'files' && (
        <div className="tp-tab-content">
          <div className="tp-files-grid">
            {blueprint.practiceFiles.map((file) => {
              const url = getPdfUrl(file.relativePath);
              return (
                <div key={file.id} className="tp-file-card">
                  <div className="tp-file-top">
                    <span className="tp-file-badge">{file.badge}</span>
                    <span className="tp-file-year">{file.termYear}</span>
                  </div>

                  <h3 className="tp-file-title">{file.title}</h3>
                  <div className="tp-file-instructor">
                    <GraduationCap size={14} /> {file.instructor}
                  </div>
                  <p className="tp-file-desc">{file.description}</p>

                  <div className="tp-topic-tags">
                    {file.keyTopics.map((topic, i) => (
                      <span key={i} className="tp-tag">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="tp-file-actions">
                    {file.fileType === 'pdf' ? (
                      <>
                        <button className="tp-btn-primary" onClick={() => handleOpenPdf(file)}>
                          <Eye size={16} />
                          <span>Preview PDF</span>
                        </button>
                        <a
                          className="tp-btn-secondary"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => audio.playClick()}
                        >
                          <ExternalLink size={14} />
                          <span>New Tab</span>
                        </a>
                      </>
                    ) : (
                      <button
                        className="tp-btn-primary"
                        onClick={() => {
                          audio.playClick();
                          setActiveTab('trace');
                        }}
                      >
                        <Code size={16} />
                        <span>Inspect Memory Trace</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Teacher Traps & Tricks */}
      {activeTab === 'traps' && (
        <div className="tp-tab-content">
          <div className="tp-traps-list">
            {blueprint.trapsAndTricks.map((item, idx) => (
              <div key={idx} className="tp-trap-card">
                <div className="tp-trap-title-row">
                  <span className="tp-trap-num">#{idx + 1}</span>
                  <h4>{item.title}</h4>
                </div>
                <p className="tp-trap-desc">
                  <MathText text={item.description} />
                </p>

                <div className="tp-trap-compare-grid">
                  <div className="tp-trap-box tp-correct">
                    <div className="tp-box-header">
                      <CheckCircle2 size={16} /> Verified Teacher Method
                    </div>
                    <p>
                      <MathText text={item.correctMethod} />
                    </p>
                  </div>
                  <div className="tp-trap-box tp-error">
                    <div className="tp-box-header">
                      <AlertTriangle size={16} /> Common Student Pitfall
                    </div>
                    <p>
                      <MathText text={item.commonTrap} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Dr. Gordon Table Trace Lab (MIAE 215 exclusive) */}
      {activeTab === 'trace' && course.id === 'MIAE215' && (
        <div className="tp-tab-content">
          <div className="tp-trace-container">
            <div className="tp-trace-intro">
              <Code size={20} style={{ color: '#10b981' }} />
              <div>
                <h3>Dr. Brandon Gordon’s Official Midterm Q2 Solution & Memory Trace</h3>
                <p>
                  Extracted directly from Dr. Gordon's Fall 2023 Midterm Question 2 solution file. Review the exact code, line marks, and memory table below.
                </p>
              </div>
            </div>

            <div className="tp-trace-card">
              <h4>Part (a) [14 Marks]: While Loop with Array Indexing & Conditional Break</h4>
              <pre className="tp-code-block">
{`int a=1, b=2, B[] = { 11, 7, 6, 5 }; 
int i=0, sum = 0;
while(1) { 
    sum += B[i];
    if(i > 2) break; 
    a += B[i+1]; 
    i++; 
    cout << "\\n" << i << " " << a; // output on each step
} 
b = sum - i; 
cout << "\\n" << sum << " " << a << " " << b;`}
              </pre>

              <div className="tp-table-wrapper">
                <table className="tp-trace-table">
                  <thead>
                    <tr>
                      <th>Line</th>
                      <th><code>i</code></th>
                      <th><code>sum</code></th>
                      <th><code>a</code></th>
                      <th><code>b</code></th>
                      <th><code>cout</code> Output Box</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Init</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>2</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>Iteration 1</td>
                      <td>1</td>
                      <td>11</td>
                      <td>8</td>
                      <td>2</td>
                      <td><code>1 8</code></td>
                    </tr>
                    <tr>
                      <td>Iteration 2</td>
                      <td>2</td>
                      <td>18</td>
                      <td>14</td>
                      <td>2</td>
                      <td><code>2 14</code></td>
                    </tr>
                    <tr>
                      <td>Iteration 3</td>
                      <td>3</td>
                      <td>24</td>
                      <td>19</td>
                      <td>2</td>
                      <td><code>3 19</code></td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.08)' }}>
                      <td>Break & Final</td>
                      <td>3</td>
                      <td>29</td>
                      <td>19</td>
                      <td><strong>26</strong> (29 - 3)</td>
                      <td><strong><code>29 19 26</code></strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tp-trace-card" style={{ marginTop: '1.5rem' }}>
              <h4>Part (b) [5 Marks]: For Loop & Array Boundary Garbage Value (`G`)</h4>
              <pre className="tp-code-block">
{`int i;
double A[4] = { -0.1, 0.11, 0.0, 0.2 }, x = 1.0;
for(i=0; i<4; i++) {
    if(A[i] < -0.11) {
        x += 1;
    } else if (A[i] > 0.1) {
        x -= 10;
    } else {
        x = 7 + 1/(i+1); // Note: 1/(i+1) integer truncates!
    }
    cout << "\\n" << x;
}
cout << "\\n" << A[i]; // i = 4 (out of bounds -> Garbage!)`}
              </pre>

              <div className="tp-output-box-visual">
                <strong>Final Output in Box:</strong>
                <div className="tp-output-lines">
                  <div>8</div>
                  <div>-2</div>
                  <div>7</div>
                  <div>-3</div>
                  <div className="tp-garbage-tag">Garbage (or G)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
