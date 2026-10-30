import React, { useState } from 'react';
import {
  AlertTriangle,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Code,
  Copy,
  ExternalLink,
  FileText,
  Flame,
  Layers,
  ListChecks,
  PlayCircle,
  Printer,
  ShieldAlert,
  Sparkles,
  Terminal
} from 'lucide-react';
import type { GateContent, GateNav } from './vaultTypes';
import '../TeacherMidtermPractice.css';
import './gateExtras.css';

interface Props {
  content: GateContent;
  nav: GateNav;
}

export const GordonMidtermsDoc: React.FC<Props> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<'f26' | 'cheatsheet' | 'analytics' | 'f23' | 'f22' | 'reviews' | 'quizzes'>('f26');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const gordonData = content.gordonExamsData;

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const openInCodeLab = (codeSnippet: string) => {
    const codeLab = document.getElementById('code-lab');
    if (codeLab) {
      codeLab.scrollIntoView({ behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('load-codelab-snippet', { detail: { code: codeSnippet } }));
  };

  if (!gordonData) {
    return (
      <div className="tp-info-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <h3 className="tp-main-title">Dr. Gordon Midterms &amp; Exam Intelligence</h3>
        <p className="tp-subtitle">Exam intelligence dataset is currently loading or decrypting...</p>
      </div>
    );
  }

  const f26Paper = gordonData.papers.find((p) => p.id === 'gordon-fall2026');
  const f23Paper = gordonData.papers.find((p) => p.id === 'gordon-fall2023');
  const f22Paper = gordonData.papers.find((p) => p.id === 'gordon-fall2022');
  const reviewPapers = gordonData.papers.filter((p) => p.id.startsWith('gordon-review'));
  const quizPaper = gordonData.papers.find((p) => p.id === 'gordon-quizzes');

  return (
    <div className="teacher-practice-hub" style={{ '--accent': '#2563eb', gap: 20 } as React.CSSProperties}>
      {/* Header Banner - Matching Teacher Midterm Practice Aesthetic */}
      <div className="tp-header-banner">
        <div className="tp-badge-row">
          <span className="tp-course-pill" style={{ backgroundColor: '#2563eb' }}>
            MIAE 215
          </span>
          <span className="tp-verified-badge">
            <Sparkles size={14} /> Dr. Brandon Gordon · Official Midterms &amp; Exam Intelligence
          </span>
          <span
            className="tp-verified-badge"
            style={{
              color: '#059669',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)'
            }}
          >
            <Award size={14} /> 100% Verified Solutions &amp; Trace Keys
          </span>
        </div>

        <h1 className="tp-main-title">Historical Midterms, Verified Solutions &amp; Empirical Analytics</h1>
        <p className="tp-subtitle">{gordonData.summary}</p>

        {/* Exam Protocol & Countdown Bar */}
        <div className="tp-countdown-bar">
          <div className="tp-countdown-left">
            <Calendar size={22} className="tp-calendar-icon" />
            <div>
              <div className="tp-date-label">MIAE 215 Midterm Examination Vault</div>
              <div className="tp-date-sub">75 Minutes · 1-Sided Formula Sheet Allowed · ENCS Approved Non-Programmable Calculator</div>
              <div className="tp-assignment-notice">
                <Clock size={13} /> 100% 1D Arrays &amp; Tracing · 0% 2D Arrays &amp; 0% Strings
              </div>
            </div>
          </div>

          <div className="tp-countdown-right">
            <a
              href="/cheatsheets/miae215-cheatsheet2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-start-drill-btn"
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderColor: '#059669',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Printer size={16} />
              <span>Open Cheatsheet 2.0 PDF</span>
            </a>
            <button
              type="button"
              className="tp-start-drill-btn"
              onClick={() => setActiveTab('f26')}
            >
              <Flame size={16} />
              <span>Live 2026 Revision</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tp-tab-row" role="tablist">
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'f26' ? 'active' : ''}`}
            onClick={() => setActiveTab('f26')}
          >
            <Flame size={16} />
            <span>🔥 Live Paper (Fall 2026)</span>
          </button>
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'cheatsheet' ? 'active' : ''}`}
            onClick={() => setActiveTab('cheatsheet')}
          >
            <Printer size={16} />
            <span>📄 Cheatsheet 2.0 (Formula Aid)</span>
          </button>
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart3 size={16} />
            <span>📊 Exam Analytics &amp; Blueprint</span>
          </button>
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'f23' ? 'active' : ''}`}
            onClick={() => setActiveTab('f23')}
          >
            <FileText size={16} />
            <span>📝 Fall 2023 Midterm</span>
          </button>
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'f22' ? 'active' : ''}`}
            onClick={() => setActiveTab('f22')}
          >
            <FileText size={16} />
            <span>📝 Fall 2022 Midterm</span>
          </button>
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <BookOpen size={16} />
            <span>📚 Reviews #1 &amp; #4</span>
          </button>
          <button
            type="button"
            className={`tp-tab-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            <Layers size={16} />
            <span>⚡ Precursor Quizzes</span>
          </button>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 0: FALL 2026 LIVE MIDTERM REVISION PAPER
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'f26' && f26Paper && (
        <div className="tp-tab-content">
          {/* Header Card */}
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-file-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span className="tp-file-badge" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626' }}>
                  🔥 LIVE MIDTERM REVISION
                </span>
                <span className="tp-file-year">{f26Paper.term} · Section XX</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span className="tp-tag" style={{ fontWeight: 700, color: '#dc2626' }}>
                  {f26Paper.officialWeight}
                </span>
                <button
                  type="button"
                  className="tp-btn-secondary"
                  onClick={() => setActiveTab('cheatsheet')}
                  style={{ padding: '6px 12px', fontSize: 12 }}
                >
                  <Printer size={13} /> Cheatsheet 2.0
                </button>
              </div>
            </div>

            <h2 className="tp-file-title" style={{ fontSize: '1.35rem', marginBottom: 6 }}>
              {f26Paper.title}
            </h2>
            <p className="tp-file-desc">{f26Paper.overview}</p>

            {/* Official Exam Rules / Scope */}
            {f26Paper.officialNotes && (
              <div
                style={{
                  marginTop: 16,
                  padding: '14px 18px',
                  background: 'var(--surface-subtle, rgba(99, 102, 241, 0.04))',
                  borderRadius: 12,
                  border: '1px solid var(--border-subtle, #e2e8f0)'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem' }}>
                  <Clock size={16} style={{ color: 'var(--accent, #6366f1)' }} />
                  <span>Official Exam Scope &amp; Permitted Aids:</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {f26Paper.officialNotes.map((note, ni) => (
                    <li key={ni}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Video Walkthrough Player Card */}
            {f26Paper.videoPlaceholder && (
              <div
                style={{
                  marginTop: 18,
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(99, 102, 241, 0.04))',
                  borderRadius: 12,
                  border: '1px solid rgba(59, 130, 246, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                      }}
                    >
                      <PlayCircle size={22} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.96rem' }}>
                        {f26Paper.videoPlaceholder.title}
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                        {f26Paper.videoPlaceholder.description}
                      </div>
                    </div>
                  </div>
                  <span className="tp-verified-badge" style={{ fontSize: '0.78rem' }}>
                    📹 Video Walkthrough Stream
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    padding: '24px 16px',
                    borderRadius: 10,
                    background: 'var(--surface, #ffffff)',
                    border: '1px dashed rgba(59, 130, 246, 0.4)',
                    textAlign: 'center'
                  }}
                >
                  <PlayCircle size={36} style={{ color: '#2563eb', margin: '0 auto 8px', display: 'block', opacity: 0.9 }} />
                  <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.92rem' }}>
                    Narrated Step-by-Step Solve Video
                  </p>
                  <p style={{ margin: '4px 0 0', color: 'var(--text-muted, #64748b)', fontSize: '0.82rem' }}>
                    Streamable inside the Gordon Hidden Vault and simultaneously playable in the Teacher Midterm Practice Drills.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Full Integrated C++ Program (Question 1) */}
          {f26Paper.fullProgramCode && (
            <div className="tp-info-card" style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    💻 Question 1: Complete Compiled C++ Solution (Parts a - f)
                  </h3>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    Verified with Code::Blocks MinGW Compiler · All 6 tasks unified into a single executable with pedagogical comments
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    type="button"
                    className="tp-btn-secondary"
                    onClick={() => copyCode('f26-full', f26Paper.fullProgramCode!)}
                    title="Copy full C++ program"
                  >
                    {copiedId === 'f26-full' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedId === 'f26-full' ? 'Copied' : 'Copy Full Program'}</span>
                  </button>
                  <button
                    type="button"
                    className="tp-btn-primary"
                    onClick={() => openInCodeLab(f26Paper.fullProgramCode!)}
                    title="Run full program in Code Lab"
                  >
                    <PlayCircle size={14} />
                    <span>Run in Code Lab</span>
                  </button>
                </div>
              </div>
              <pre className="mg-code mg-gordon-code" style={{ maxHeight: 440, overflowY: 'auto' }}>
                {f26Paper.fullProgramCode}
              </pre>
            </div>
          )}

          {/* Individual Exam Questions (Q1, Q2a, Q2b) */}
          <div className="mg-paper-questions-list">
            {f26Paper.questions.map((q) => (
              <div key={q.id} className="tp-info-card" style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {q.part}: {q.title}
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', marginTop: 2 }}>
                      Format: <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{q.points}</span> {q.weight ? `· (${q.weight})` : ''}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      className="tp-btn-secondary"
                      onClick={() => copyCode(q.id, q.codeSnippet)}
                      style={{ padding: '6px 12px', fontSize: 12 }}
                      title="Copy code"
                    >
                      {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      type="button"
                      className="tp-btn-primary"
                      onClick={() => openInCodeLab(q.codeSnippet)}
                      style={{ padding: '6px 12px', fontSize: 12 }}
                      title="Run in Code Lab"
                    >
                      <PlayCircle size={13} />
                      <span>Run Snippet</span>
                    </button>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '8px 0 12px' }}>
                  {q.description}
                </p>

                {/* Code and Output Grid */}
                <div className="mg-gordon-code-grid" style={{ marginTop: 12 }}>
                  <div className="mg-gordon-code-col">
                    <div className="mg-gordon-col-label">
                      <Code size={13} /> C++ Code Snippet
                    </div>
                    <pre className="mg-code mg-gordon-code">{q.codeSnippet}</pre>
                  </div>

                  {q.expectedOutput && (
                    <div className="mg-gordon-out-col">
                      <div className="mg-gordon-col-label">
                        <Terminal size={13} /> Expected Terminal Output (Answer Booklet Box)
                      </div>
                      <pre className="mg-gordon-output-box">{q.expectedOutput}</pre>
                    </div>
                  )}
                </div>

                {/* Step-by-Step Trace Table if present */}
                {q.traceTable && (
                  <div className="mg-trace-table-wrap" style={{ marginTop: 16 }}>
                    <div className="mg-gordon-col-label" style={{ marginBottom: 8 }}>
                      <ListChecks size={13} /> Step-by-Step Execution Trace Table
                    </div>
                    <div className="mg-table-scroll">
                      <table className="mg-trace-table">
                        <thead>
                          <tr>
                            {q.traceTable.headers.map((h, hi) => (
                              <th key={hi}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {q.traceTable.rows.map((row, ri) => (
                            <tr key={ri} className={String(row[row.length - 1]).includes('—') ? '' : 'has-output'}>
                              {row.map((cell, ci) => (
                                <td key={ci} className={ci === row.length - 1 && cell !== '—' ? 'cell-output' : ''}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {q.traceTable.caption && <p className="mg-table-caption">{q.traceTable.caption}</p>}
                  </div>
                )}

                {/* Trap Alert */}
                {q.trapAlert && (
                  <div
                    style={{
                      marginTop: 14,
                      padding: '12px 16px',
                      borderRadius: 10,
                      background: 'rgba(239, 68, 68, 0.06)',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10
                    }}
                  >
                    <ShieldAlert size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }} />
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      <strong style={{ color: '#ef4444' }}>Critical Exam Trap: </strong>
                      {q.trapAlert}
                    </div>
                  </div>
                )}

                {/* Solution Notes */}
                {q.solutionNotes && (
                  <div style={{ marginTop: 12, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--accent, #6366f1)' }}>Exam Strategy Note: </strong>
                    {q.solutionNotes}
                  </div>
                )}

                {/* Concepts Tested */}
                <div className="mg-freq-occurrences" style={{ marginTop: 14 }}>
                  <strong style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Key Curriculum Concepts: </strong>
                  {q.conceptsTested.map((c, ci) => (
                    <span key={ci} className="tp-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Curriculum Similarity Matrix */}
          {f26Paper.similarQuestionsAnalysis && f26Paper.similarQuestionsAnalysis.length > 0 && (
            <div className="tp-info-card" style={{ marginTop: 16 }}>
              <div className="tp-file-top">
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    🎯 Historical Exam Twins &amp; Resembling Questions
                  </h3>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    Direct structural precursors from past exams handed out by Dr. Brandon Gordon:
                  </p>
                </div>
                <span className="tp-verified-badge">
                  100% Curriculum Match
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 14, marginTop: 16 }}>
                {f26Paper.similarQuestionsAnalysis.map((sim, si) => (
                  <div
                    key={si}
                    style={{
                      background: 'var(--surface-subtle, rgba(99, 102, 241, 0.03))',
                      padding: '16px',
                      borderRadius: 12,
                      border: '1px solid var(--border-subtle, #e2e8f0)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                      <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {sim.currentQuestionPart}
                      </span>
                      <span className="tp-file-badge" style={{ fontSize: '0.72rem' }}>
                        {sim.similarGordonExam}
                      </span>
                    </div>

                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Why It Resembles: </strong> {sim.whyItMatches}
                    </p>

                    <div
                      style={{
                        marginTop: 'auto',
                        padding: '8px 12px',
                        background: 'rgba(56, 189, 248, 0.08)',
                        borderRadius: 8,
                        borderLeft: '3px solid #0284c7',
                        color: '#0369a1',
                        fontSize: '0.82rem',
                        fontWeight: 700
                      }}
                    >
                      💡 Golden Rule: {sim.coreLesson}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 1: CHEATSHEET 2.0 (OFFICIAL SINGLE-SIDED EXAM FORMULA SHEET)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'cheatsheet' && (
        <div className="tp-tab-content">
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-file-top">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span
                    className="tp-verified-badge"
                    style={{
                      color: '#059669',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      fontWeight: 800
                    }}
                  >
                    ⭐ STRICT SINGLE-SIDED FORMULA AID
                  </span>
                  <span className="tp-tag">Letter Portrait · 10pt Font</span>
                  <span className="tp-tag">Zero Blank Space</span>
                </div>
                <h2 className="tp-file-title" style={{ fontSize: '1.35rem', marginBottom: 6 }}>
                  MIAE 215 Midterm Cheatsheet 2.0 — Dr. Gordon Official Exam Blueprint &amp; System
                </h2>
                <p className="tp-file-desc" style={{ maxWidth: 900 }}>
                  Ultra-dense single-sided formula sheet engineered specifically to Dr. Brandon Gordon&apos;s official 75-minute midterm exam constraints.
                  Front side only (back must be completely blank). Integrates the unified 6-part array live program, the Question 2 output tracing engine with all 8 golden traps and verified past exam boxed keys, and all 9 historical programming algorithms.
                </p>
              </div>

              {/* Action Toolbar */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignSelf: 'flex-start' }}>
                <a
                  href="/cheatsheets/miae215-midterm-cheatsheet2.html"
                  target="_blank"
                  rel="noreferrer"
                  className="tp-btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={14} /> <span>Fullscreen HTML</span>
                </a>
                <a
                  href="/cheatsheets/miae215-cheatsheet2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tp-btn-primary"
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderColor: '#059669',
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
                  }}
                >
                  <ExternalLink size={14} /> <span>Open PDF</span>
                </a>
                <button
                  type="button"
                  className="tp-btn-secondary"
                  onClick={() => window.open('/cheatsheets/miae215-midterm-cheatsheet2.html', '_blank')}
                >
                  <Printer size={14} /> <span>Print Sheet</span>
                </button>
              </div>
            </div>

            {/* Moodle Rules Summary */}
            <div
              style={{
                marginTop: 18,
                padding: '16px',
                background: 'var(--surface-subtle, rgba(16, 185, 129, 0.04))',
                borderRadius: 12,
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16
              }}
            >
              <div>
                <b style={{ color: '#059669', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Award size={15} /> 1. Single-Sided Sheet Constraint
                </b>
                <p style={{ margin: '6px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  Dr. Gordon allows exactly ONE piece of paper, front side only. Back must be blank. Calibrated to 10pt font.
                </p>
              </div>
              <div>
                <b style={{ color: '#059669', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldAlert size={15} /> 2. Permitted Exam Calculator
                </b>
                <p style={{ margin: '6px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  Non-programmable calculator with faculty-approved ENCS sticker is required. No graphers or phones allowed.
                </p>
              </div>
              <div>
                <b style={{ color: '#059669', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={15} /> 3. 0% 2D Array &amp; 0% String Law
                </b>
                <p style={{ margin: '6px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  0% Strings, 0% 2D Arrays on Midterm. Strictly 100% focused on 1D arrays, loop tracing, integer division, and file I/O.
                </p>
              </div>
            </div>

            {/* Live Interactive Embed Iframe */}
            <div style={{ marginTop: 22 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10
                }}
              >
                <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FileText size={18} style={{ color: '#059669' }} />
                  <span>Interactive High-Fidelity Cheatsheet 2.0 Sheet Preview (1 Page Letter):</span>
                </div>
                <span className="tp-tag">
                  Scrollable · Responsive · Print-Optimized
                </span>
              </div>
              <div
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle, #cbd5e1)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  background: '#ffffff'
                }}
              >
                <iframe
                  src="/cheatsheets/miae215-midterm-cheatsheet2.html"
                  title="MIAE 215 Midterm Cheatsheet 2.0"
                  style={{
                    width: '100%',
                    height: '1180px',
                    border: 'none',
                    display: 'block',
                    background: '#ffffff'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 2: EXAM ANALYTICS & BLUEPRINT
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'analytics' && (
        <div className="tp-tab-content">
          {/* Architecture Cards */}
          <div className="mg-gordon-metric-grid" style={{ marginBottom: 20 }}>
            <div className="mg-metric-tile accent-blue">
              <div className="mg-metric-head">
                <Terminal size={18} />
                <span>Output Tracing Tables</span>
              </div>
              <div className="mg-metric-value">Tracing</div>
              <div className="mg-metric-desc">
                High-density while/for loops &amp; array indexing. Only answers inside the box receive marks.
              </div>
            </div>

            <div className="mg-metric-tile accent-purple">
              <div className="mg-metric-head">
                <Code size={18} />
                <span>1D Array Programming</span>
              </div>
              <div className="mg-metric-value">Coding</div>
              <div className="mg-metric-desc">
                Multi-part programming problem (input validation, dot product, array combine &amp; sentinel loops).
              </div>
            </div>

            <div className="mg-metric-tile accent-green">
              <div className="mg-metric-head">
                <ShieldAlert size={18} />
                <span>2D Arrays on Midterm</span>
              </div>
              <div className="mg-metric-value">0%</div>
              <div className="mg-metric-desc">
                Officially EXCLUDED from the midterm exam by Dr. Gordon; reserved exclusively for the Final Exam.
              </div>
            </div>

            <div className="mg-metric-tile accent-orange">
              <div className="mg-metric-head">
                <Clock size={18} />
                <span>Total Exam Duration</span>
              </div>
              <div className="mg-metric-value">75 min</div>
              <div className="mg-metric-desc">
                Recommended: 30 min on trace tables, 40 min on algorithmic code writing, 5 min audit.
              </div>
            </div>
          </div>

          {/* Official Gordon Exam Guidelines */}
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-card-header">
              <ListChecks size={20} style={{ color: 'var(--accent, #6366f1)' }} />
              <h3>Official Exam Structure &amp; Dr. Gordon Directives</h3>
            </div>
            <p className="tp-subtitle" style={{ marginBottom: 14 }}>
              Key instructions directly from Dr. Gordon’s official course memos:
            </p>
            <div className="mg-rules-grid">
              {gordonData.analytics.weightDistribution.rulesSummary.map((rule, idx) => (
                <div key={idx} className="mg-rule-item">
                  <span className="mg-rule-num">0{idx + 1}</span>
                  <div className="mg-rule-text">{rule}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Frequency Matrix */}
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-card-header">
              <BarChart3 size={20} style={{ color: 'var(--accent, #6366f1)' }} />
              <h3>Historical Topic Frequency Matrix</h3>
            </div>
            <p className="tp-subtitle" style={{ marginBottom: 14 }}>
              Empirical occurrence rate across past Gordon midterms, official review packets, and precursor quizzes:
            </p>
            <div className="mg-topic-freq-list">
              {gordonData.analytics.topicFrequencies.map((tf, i) => (
                <div key={i} className={`mg-freq-card ${tf.frequency === 0 ? 'zero-freq' : ''}`}>
                  <div className="mg-freq-card-header">
                    <div className="mg-freq-title-row">
                      <span className="mg-freq-title">{tf.topic}</span>
                      <span className="mg-freq-category">{tf.category}</span>
                    </div>
                    <span className={`mg-freq-badge ${tf.frequency === 100 ? 'hundred' : tf.frequency >= 75 ? 'high' : tf.frequency === 0 ? 'zero' : 'med'}`}>
                      {tf.frequencyLabel}
                    </span>
                  </div>

                  <div className="mg-freq-bar-wrap">
                    <div
                      className={`mg-freq-bar-fill ${tf.frequency === 100 ? 'hundred' : tf.frequency >= 75 ? 'high' : tf.frequency === 0 ? 'zero' : 'med'}`}
                      style={{ width: `${Math.max(tf.frequency, 4)}%` }}
                    />
                  </div>

                  <p className="mg-freq-desc">{tf.description}</p>

                  <div className="mg-freq-occurrences">
                    <strong>Past Exams: </strong>
                    {tf.examOccurrences.map((ex, j) => (
                      <span key={j} className="tp-tag">
                        {ex}
                      </span>
                    ))}
                  </div>

                  <div className="mg-freq-trap-alert">
                    <AlertTriangle size={13} />
                    <span>
                      <strong>Trap Alert: </strong>
                      {tf.trapWarning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Gordon Traps */}
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-card-header">
              <Flame size={20} style={{ color: '#ef4444' }} />
              <h3>Top 5 High-Yield "Gordon Traps" Exposed</h3>
            </div>
            <p className="tp-subtitle" style={{ marginBottom: 14 }}>
              These recurring pitfalls account for over 70% of lost marks on Dr. Gordon midterms:
            </p>
            <div className="mg-traps-list">
              {gordonData.analytics.topTraps.map((tr, i) => (
                <div key={i} className="mg-trap-card">
                  <div className="mg-trap-top">
                    <div className="mg-trap-title">
                      <span className="mg-trap-idx">#{i + 1}</span> {tr.trapName}
                    </div>
                    <span className={`mg-severity-badge ${tr.severity.toLowerCase()}`}>{tr.severity} TRAP</span>
                  </div>

                  <div className="mg-trap-snippet-box">
                    <pre className="mg-code">{tr.exampleSnippet}</pre>
                  </div>

                  <div className="mg-trap-grid">
                    <div className="mg-trap-wrong">
                      <strong>❌ What Students Do Wrong:</strong>
                      <p>{tr.whatStudentsDoWrong}</p>
                    </div>
                    <div className="mg-trap-right">
                      <strong>✅ Correct Execution:</strong>
                      <p>{tr.correctBehavior}</p>
                    </div>
                  </div>

                  {tr.gordonQuote && (
                    <div className="mg-gordon-quote">
                      <Award size={14} />
                      <span>
                        <em>"{tr.gordonQuote}"</em> — Dr. Brandon Gordon
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 3: FALL 2023 MIDTERM (Q2 · 40% WEIGHT)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'f23' && f23Paper && (
        <div className="tp-tab-content">
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-file-top">
              <div>
                <h3 className="tp-file-title">{f23Paper.title}</h3>
                <p className="tp-file-desc">{f23Paper.overview}</p>
              </div>
              <span className="tp-tag" style={{ fontWeight: 700, color: '#2563eb' }}>
                {f23Paper.officialWeight}
              </span>
            </div>

            <div className="mg-paper-questions-list">
              {f23Paper.questions.map((q) => (
                <div key={q.id} className="tp-info-card" style={{ marginTop: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                        {q.part}: {q.title}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', marginTop: 2 }}>
                        Weight: <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{q.points}</span> ({q.weight})
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        type="button"
                        className="tp-btn-secondary"
                        onClick={() => copyCode(q.id, q.codeSnippet)}
                        style={{ padding: '6px 12px', fontSize: 12 }}
                        title="Copy C++ code"
                      >
                        {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                      </button>
                      <button
                        type="button"
                        className="tp-btn-primary"
                        onClick={() => openInCodeLab(q.codeSnippet)}
                        style={{ padding: '6px 12px', fontSize: 12 }}
                        title="Run in Code Lab"
                      >
                        <PlayCircle size={13} />
                        <span>Run Snippet</span>
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '8px 0 12px' }}>
                    {q.description}
                  </p>

                  {/* Code and Answer Box */}
                  <div className="mg-gordon-code-grid">
                    <div className="mg-gordon-code-col">
                      <div className="mg-gordon-col-label">
                        <Code size={13} /> C++ Exam Code Snippet
                      </div>
                      <pre className="mg-code mg-gordon-code">{q.codeSnippet}</pre>
                    </div>

                    <div className="mg-gordon-out-col">
                      <div className="mg-gordon-col-label">
                        <Terminal size={13} /> Official Exam Answer Box (Inside Booklet)
                      </div>
                      <pre className="mg-gordon-output-box">{q.expectedOutput}</pre>
                    </div>
                  </div>

                  {/* Step-by-Step Trace Table */}
                  {q.traceTable && (
                    <div className="mg-trace-table-wrap" style={{ marginTop: 16 }}>
                      <div className="mg-gordon-col-label" style={{ marginBottom: 8 }}>
                        <ListChecks size={13} /> Dr. Gordon Official Step-by-Step State Trace Table
                      </div>
                      <div className="mg-table-scroll">
                        <table className="mg-trace-table">
                          <thead>
                            <tr>
                              {q.traceTable.headers.map((h, hi) => (
                                <th key={hi}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {q.traceTable.rows.map((row, ri) => (
                              <tr key={ri} className={String(row[row.length - 1]).includes('—') ? '' : 'has-output'}>
                                {row.map((cell, ci) => (
                                  <td key={ci} className={ci === row.length - 1 && cell !== '—' ? 'cell-output' : ''}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {q.traceTable.caption && <p className="mg-table-caption">{q.traceTable.caption}</p>}
                    </div>
                  )}

                  {/* Trap Callout */}
                  {q.trapAlert && (
                    <div
                      style={{
                        marginTop: 14,
                        padding: '12px 16px',
                        borderRadius: 10,
                        background: 'rgba(239, 68, 68, 0.06)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10
                      }}
                    >
                      <AlertTriangle size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }} />
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        <strong style={{ color: '#ef4444' }}>High-Yield Trap &amp; Exam Strategy: </strong>
                        {q.trapAlert}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 4: FALL 2022 MIDTERM (Q1 · 50% WEIGHT)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'f22' && f22Paper && (
        <div className="tp-tab-content">
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-file-top">
              <div>
                <h3 className="tp-file-title">{f22Paper.title}</h3>
                <p className="tp-file-desc">{f22Paper.overview}</p>
              </div>
              <span className="tp-tag" style={{ fontWeight: 700, color: '#2563eb' }}>
                {f22Paper.officialWeight}
              </span>
            </div>

            {/* Full C++ Program Code */}
            <div className="tp-info-card" style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    Complete 50-Point C++ Program (`program.cpp`)
                  </h4>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', marginTop: 2 }}>
                    Combines all 5 sub-questions (a, b, c, d, e) into one verified executable file.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    type="button"
                    className="tp-btn-secondary"
                    onClick={() => f22Paper.fullProgramCode && copyCode('f22-full', f22Paper.fullProgramCode)}
                    style={{ padding: '6px 12px', fontSize: 12 }}
                    title="Copy full source code"
                  >
                    {copiedId === 'f22-full' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedId === 'f22-full' ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    type="button"
                    className="tp-btn-primary"
                    onClick={() => f22Paper.fullProgramCode && openInCodeLab(f22Paper.fullProgramCode)}
                    style={{ padding: '6px 12px', fontSize: 12 }}
                    title="Run in Code Lab"
                  >
                    <PlayCircle size={13} />
                    <span>Run in Code Lab</span>
                  </button>
                </div>
              </div>

              {f22Paper.fullProgramCode && (
                <pre className="mg-code mg-gordon-code" style={{ maxHeight: 420, overflowY: 'auto' }}>
                  {f22Paper.fullProgramCode}
                </pre>
              )}
            </div>

            {/* Sub-parts Breakdown */}
            <h4 style={{ margin: '24px 0 12px', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Exam Sub-Questions Breakdown (Parts A through E)
            </h4>
            <div className="mg-paper-questions-list">
              {f22Paper.questions.map((q) => (
                <div key={q.id} className="tp-info-card" style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                        {q.part}: {q.title}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', marginTop: 2 }}>
                        Weight: <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{q.points}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="tp-btn-secondary"
                      onClick={() => copyCode(q.id, q.codeSnippet)}
                      style={{ padding: '6px 12px', fontSize: 12 }}
                      title="Copy code snippet"
                    >
                      {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '8px 0 12px' }}>
                    {q.description}
                  </p>
                  <pre className="mg-code mg-gordon-code">{q.codeSnippet}</pre>

                  <div className="mg-freq-occurrences" style={{ marginTop: 12 }}>
                    <strong style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Core Concepts Tested: </strong>
                    {q.conceptsTested.map((c, ci) => (
                      <span key={ci} className="tp-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 5: MIDTERM REVIEWS (#1 & #4)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'reviews' && (
        <div className="tp-tab-content">
          {reviewPapers.map((paper) => (
            <div key={paper.id} className="tp-info-card" style={{ marginBottom: 20 }}>
              <div className="tp-file-top">
                <div>
                  <h3 className="tp-file-title">{paper.title}</h3>
                  <p className="tp-file-desc">{paper.overview}</p>
                </div>
                <span className="tp-tag" style={{ fontWeight: 700, color: '#2563eb' }}>
                  {paper.officialWeight}
                </span>
              </div>

              <div className="mg-paper-questions-list" style={{ marginTop: 16 }}>
                {paper.questions.map((q) => (
                  <div key={q.id} className="tp-info-card" style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                          {q.part}: {q.title}
                        </h4>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', marginTop: 2 }}>
                          Format: <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{q.points}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button
                          type="button"
                          className="tp-btn-secondary"
                          onClick={() => copyCode(q.id, q.codeSnippet)}
                          style={{ padding: '6px 12px', fontSize: 12 }}
                          title="Copy C++ snippet"
                        >
                          {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                          <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                        </button>
                        <button
                          type="button"
                          className="tp-btn-primary"
                          onClick={() => openInCodeLab(q.codeSnippet)}
                          style={{ padding: '6px 12px', fontSize: 12 }}
                          title="Run Code"
                        >
                          <PlayCircle size={13} />
                          <span>Run Code</span>
                        </button>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '8px 0 12px' }}>
                      {q.description}
                    </p>
                    <pre className="mg-code mg-gordon-code">{q.codeSnippet}</pre>

                    {q.expectedOutput && (
                      <div style={{ marginTop: 12 }}>
                        <div className="mg-gordon-col-label">
                          <Terminal size={13} /> Expected Terminal Output
                        </div>
                        <pre className="mg-gordon-output-box">{q.expectedOutput}</pre>
                      </div>
                    )}

                    <div className="mg-freq-occurrences" style={{ marginTop: 12 }}>
                      <strong style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Concepts: </strong>
                      {q.conceptsTested.map((c, ci) => (
                        <span key={ci} className="tp-tag">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 6: PRECURSOR QUIZZES
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'quizzes' && quizPaper && (
        <div className="tp-tab-content">
          <div className="tp-info-card" style={{ marginBottom: 20 }}>
            <div className="tp-file-top">
              <div>
                <h3 className="tp-file-title">{quizPaper.title}</h3>
                <p className="tp-file-desc">{quizPaper.overview}</p>
              </div>
              <span className="tp-tag" style={{ fontWeight: 700, color: '#2563eb' }}>
                {quizPaper.officialWeight}
              </span>
            </div>

            <div className="mg-paper-questions-list" style={{ marginTop: 16 }}>
              {quizPaper.questions.map((q) => (
                <div key={q.id} className="tp-info-card" style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                        {q.part}: {q.title}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', marginTop: 2 }}>
                        Format: <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{q.points}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        type="button"
                        className="tp-btn-secondary"
                        onClick={() => copyCode(q.id, q.codeSnippet)}
                        style={{ padding: '6px 12px', fontSize: 12 }}
                        title="Copy code"
                      >
                        {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                      </button>
                      <button
                        type="button"
                        className="tp-btn-primary"
                        onClick={() => openInCodeLab(q.codeSnippet)}
                        style={{ padding: '6px 12px', fontSize: 12 }}
                        title="Run in Code Lab"
                      >
                        <PlayCircle size={13} />
                        <span>Run Code</span>
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '8px 0 12px' }}>
                    {q.description}
                  </p>
                  <pre className="mg-code mg-gordon-code" style={{ maxHeight: 380, overflowY: 'auto' }}>
                    {q.codeSnippet}
                  </pre>

                  <div className="mg-freq-occurrences" style={{ marginTop: 12 }}>
                    <strong style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Key Skills: </strong>
                    {q.conceptsTested.map((c, ci) => (
                      <span key={ci} className="tp-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
