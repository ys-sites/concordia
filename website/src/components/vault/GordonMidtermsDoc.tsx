import React, { useState } from 'react';
import {
  AlertTriangle,
  Award,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Code,
  Copy,
  Download,
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
import { MathText } from '../../utils/mathRenderer';
import type { GateContent, GateNav, GordonExamPaper, GordonExamQuestion } from './vaultTypes';
import './gateExtras.css';

interface Props {
  content: GateContent;
  nav: GateNav;
}

export const GordonMidtermsDoc: React.FC<Props> = ({ content, nav }) => {
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
    // Scroll smoothly to code lab if present on the page, or dispatch event
    const codeLab = document.getElementById('code-lab');
    if (codeLab) {
      codeLab.scrollIntoView({ behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('load-codelab-snippet', { detail: { code: codeSnippet } }));
  };

  if (!gordonData) {
    return (
      <div className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">Dr. Gordon Midterms &amp; Exam Analytics</h3>
        <p className="mg-section-sub">Exam intelligence dataset is currently loading or decrypting...</p>
      </div>
    );
  }

  const f26Paper = gordonData.papers.find((p) => p.id === 'gordon-fall2026');
  const f23Paper = gordonData.papers.find((p) => p.id === 'gordon-fall2023');
  const f22Paper = gordonData.papers.find((p) => p.id === 'gordon-fall2022');
  const reviewPapers = gordonData.papers.filter((p) => p.id.startsWith('gordon-review'));
  const quizPaper = gordonData.papers.find((p) => p.id === 'gordon-quizzes');

  return (
    <div className="mg-root" style={{ gap: 20 }}>
      {/* Hero Header */}
      <section className="mg-panel mg-panel-pad mg-gordon-hero">
        <div className="mg-gordon-badge">
          <Sparkles size={15} /> Dr. Brandon Gordon · Official Midterms &amp; Exam Intelligence
        </div>
        <h2 className="mg-gordon-title">Historical Midterms, Verified Solutions &amp; Empirical Analytics</h2>
        <p className="mg-section-sub" style={{ maxWidth: 850, marginTop: 6 }}>
          {gordonData.summary}
        </p>

        {/* Tab Navigation */}
        <div className="mg-gordon-tab-bar" style={{ marginTop: 18 }}>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'f26' ? 'active' : ''}`}
            onClick={() => setActiveTab('f26')}
            style={{
              borderColor: activeTab === 'f26' ? '#ef4444' : undefined,
              background: activeTab === 'f26' ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.22), rgba(185, 28, 28, 0.16))' : undefined,
              color: activeTab === 'f26' ? '#fca5a5' : undefined
            }}
          >
            <Flame size={16} />
            <span>🔥 Exam 2026 Revision (Live Paper)</span>
          </button>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'cheatsheet' ? 'active' : ''}`}
            onClick={() => setActiveTab('cheatsheet')}
            style={{
              borderColor: activeTab === 'cheatsheet' ? '#10b981' : undefined,
              background: activeTab === 'cheatsheet' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.22), rgba(5, 150, 105, 0.16))' : undefined,
              color: activeTab === 'cheatsheet' ? '#6ee7b7' : undefined
            }}
          >
            <Printer size={16} />
            <span>📄 Cheatsheet 2.0 (Single-Sided Aid)</span>
          </button>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart3 size={16} />
            <span>📊 Exam Analytics &amp; Blueprint</span>
          </button>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'f23' ? 'active' : ''}`}
            onClick={() => setActiveTab('f23')}
          >
            <FileText size={16} />
            <span>📝 Fall 2023 Midterm (40% Weight)</span>
          </button>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'f22' ? 'active' : ''}`}
            onClick={() => setActiveTab('f22')}
          >
            <FileText size={16} />
            <span>📝 Fall 2022 Midterm (50% Weight)</span>
          </button>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <BookOpen size={16} />
            <span>📚 Reviews #1 &amp; #4</span>
          </button>
          <button
            type="button"
            className={`mg-gordon-tab ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            <Layers size={16} />
            <span>⚡ Precursor Quizzes</span>
          </button>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 0: FALL 2026 LIVE MIDTERM REVISION PAPER
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'f26' && f26Paper && (
        <>
          {/* Header Banner */}
          <section className="mg-panel mg-panel-pad" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }}>
            <div className="mg-paper-meta-banner">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span className="mg-badge" style={{ background: '#ef4444', color: '#fff', fontWeight: 700 }}>
                    🔥 LIVE MIDTERM REVISION
                  </span>
                  <span className="mg-badge template">{f26Paper.term} · Section XX</span>
                </div>
                <h3 className="mg-section-title" style={{ fontSize: '1.4rem' }}>{f26Paper.title}</h3>
                <p className="mg-section-sub" style={{ marginTop: 6 }}>
                  {f26Paper.overview}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                <span className="mg-badge exact" style={{ fontSize: '0.9rem', padding: '8px 14px' }}>
                  {f26Paper.officialWeight}
                </span>
                <button
                  type="button"
                  className="mg-btn small primary"
                  onClick={() => setActiveTab('cheatsheet')}
                  style={{
                    background: '#10b981',
                    borderColor: '#059669',
                    color: '#fff',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5
                  }}
                >
                  <Printer size={13} /> View Cheatsheet 2.0
                </button>
              </div>
            </div>

            {/* Official Exam Rules / Scope */}
            {f26Paper.officialNotes && (
              <div
                style={{
                  marginTop: 16,
                  padding: '12px 16px',
                  background: 'rgba(30, 41, 59, 0.6)',
                  borderRadius: 8,
                  border: '1px solid rgba(148, 163, 184, 0.2)'
                }}
              >
                <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.88rem' }}>
                  <Clock size={15} style={{ color: '#38bdf8' }} />
                  <span>Official Exam Constraints &amp; Permitted Aids:</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 20, color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
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
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(15, 23, 42, 0.75))',
                  borderRadius: 10,
                  border: '1px solid rgba(59, 130, 246, 0.35)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        background: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff'
                      }}
                    >
                      <PlayCircle size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem' }}>
                        {f26Paper.videoPlaceholder.title}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                        {f26Paper.videoPlaceholder.description}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#60a5fa',
                      padding: '4px 10px',
                      borderRadius: 6,
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      border: '1px solid rgba(59, 130, 246, 0.4)'
                    }}
                  >
                    📹 Video Walkthrough Stream
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    padding: '24px 16px',
                    borderRadius: 8,
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px dashed rgba(59, 130, 246, 0.4)',
                    textAlign: 'center'
                  }}
                >
                  <PlayCircle size={36} style={{ color: '#38bdf8', margin: '0 auto 8px', display: 'block', opacity: 0.85 }} />
                  <p style={{ margin: 0, color: '#e2e8f0', fontWeight: 600, fontSize: '0.92rem' }}>
                    Narrated Step-by-Step Solve Video
                  </p>
                  <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '0.8rem' }}>
                    Integrated here in the Gordon Hidden Vault and simultaneously playable in the Teacher Midterm Practice Drills.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Full Integrated C++ Program (Question 1) */}
          {f26Paper.fullProgramCode && (
            <section className="mg-panel mg-panel-pad">
              <div className="mg-gordon-card-top" style={{ marginBottom: 12 }}>
                <div>
                  <div className="mg-gordon-item-title" style={{ fontSize: '1.15rem' }}>
                    💻 Question 1: Complete Compiled C++ Solution (Parts a - f)
                  </div>
                  <div className="mg-gordon-source">
                    Verified with Code::Blocks MinGW Compiler · All 6 tasks unified into a single executable
                  </div>
                </div>
                <div className="mg-gordon-card-actions">
                  <button
                    type="button"
                    className="mg-btn small"
                    onClick={() => copyCode('f26-full', f26Paper.fullProgramCode!)}
                    title="Copy full C++ program"
                  >
                    {copiedId === 'f26-full' ? <Check size={13} /> : <Copy size={13} />}
                    {copiedId === 'f26-full' ? 'Copied' : 'Copy Full Program'}
                  </button>
                  <button
                    type="button"
                    className="mg-btn small primary"
                    onClick={() => openInCodeLab(f26Paper.fullProgramCode!)}
                    title="Run full program in Code Lab"
                  >
                    <PlayCircle size={13} /> Run in Code Lab
                  </button>
                </div>
              </div>
              <pre className="mg-code mg-gordon-code" style={{ maxHeight: 420, overflowY: 'auto' }}>
                {f26Paper.fullProgramCode}
              </pre>
            </section>
          )}

          {/* Individual Exam Questions (Q1, Q2a, Q2b) */}
          <div className="mg-paper-questions-list">
            {f26Paper.questions.map((q) => (
              <div key={q.id} className="mg-gordon-card" style={{ marginBottom: 20 }}>
                <div className="mg-gordon-card-top">
                  <div>
                    <div className="mg-gordon-item-title" style={{ fontSize: '1.1rem' }}>
                      {q.part}: {q.title}
                    </div>
                    <div className="mg-gordon-source">
                      <span className="mg-source-label">Format:</span> {q.points} {q.weight ? `· (${q.weight})` : ''}
                    </div>
                  </div>
                  <div className="mg-gordon-card-actions">
                    <button
                      type="button"
                      className="mg-btn small"
                      onClick={() => copyCode(q.id, q.codeSnippet)}
                      title="Copy code"
                    >
                      {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                      {copiedId === q.id ? 'Copied' : 'Copy'}
                    </button>
                    <button
                      type="button"
                      className="mg-btn small primary"
                      onClick={() => openInCodeLab(q.codeSnippet)}
                      title="Run in Code Lab"
                    >
                      <PlayCircle size={13} /> Run in Code Lab
                    </button>
                  </div>
                </div>

                <p className="mg-q-desc" style={{ marginTop: 8 }}>{q.description}</p>

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
                  <div className="mg-trace-table-wrap" style={{ marginTop: 14 }}>
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
                  <div className="mg-gordon-card-trap" style={{ marginTop: 12 }}>
                    <ShieldAlert size={16} />
                    <div>
                      <strong>Critical Exam Trap:</strong> {q.trapAlert}
                    </div>
                  </div>
                )}

                {/* Solution Notes */}
                {q.solutionNotes && (
                  <div style={{ marginTop: 10, fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <strong style={{ color: '#38bdf8' }}>Exam Strategy Note: </strong>
                    {q.solutionNotes}
                  </div>
                )}

                {/* Concepts Tested */}
                <div className="mg-freq-occurrences" style={{ marginTop: 12 }}>
                  <strong>Key Curriculum Concepts: </strong>
                  {q.conceptsTested.map((c, ci) => (
                    <span key={ci} className="mg-occurrence-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Curriculum Similarity Matrix */}
          {f26Paper.similarQuestionsAnalysis && f26Paper.similarQuestionsAnalysis.length > 0 && (
            <section className="mg-panel mg-panel-pad" style={{ marginTop: 10 }}>
              <div className="mg-paper-meta-banner">
                <div>
                  <h3 className="mg-section-title">
                    🎯 Historical Exam Twins &amp; Structural Precursors
                  </h3>
                  <p className="mg-section-sub">
                    Direct mapping of each question part from this paper to past exams handed out by Dr. Brandon Gordon:
                  </p>
                </div>
                <span className="mg-badge template" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
                  100% Curriculum Alignment
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 14, marginTop: 16 }}>
                {f26Paper.similarQuestionsAnalysis.map((sim, si) => (
                  <div
                    key={si}
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)',
                      padding: '14px',
                      borderRadius: 8,
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                      <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>
                        {sim.currentQuestionPart}
                      </span>
                      <span className="mg-badge exact" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                        {sim.similarGordonExam}
                      </span>
                    </div>

                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      <strong>Why It Matches:</strong> {sim.whyItMatches}
                    </p>

                    <div
                      style={{
                        marginTop: 'auto',
                        padding: '6px 10px',
                        background: 'rgba(15, 23, 42, 0.6)',
                        borderRadius: 6,
                        borderLeft: '3px solid #38bdf8',
                        color: '#38bdf8',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}
                    >
                      💡 Rule: {sim.coreLesson}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB: CHEATSHEET 2.0 (OFFICIAL SINGLE-SIDED EXAM FORMULA SHEET)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'cheatsheet' && (
        <>
          <section className="mg-panel mg-panel-pad" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
            <div className="mg-paper-meta-banner">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                  <span className="mg-badge" style={{ background: '#10b981', color: '#fff', fontWeight: 700 }}>
                    ⭐ STRICT SINGLE-SIDED FORMULA SHEET
                  </span>
                  <span className="mg-badge template">Dr. Gordon Moodle Rules · Exact 1 Page Aid</span>
                  <span className="mg-badge exact">Letter Portrait · 10pt Font</span>
                </div>
                <h3 className="mg-section-title" style={{ fontSize: '1.4rem' }}>
                  MIAE 215 Midterm Cheatsheet 2.0 — Dr. Gordon Official Exam Blueprint &amp; System
                </h3>
                <p className="mg-section-sub" style={{ marginTop: 6, maxWidth: 900 }}>
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
                  className="mg-btn primary"
                  style={{
                    background: '#10b981',
                    borderColor: '#059669',
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <ExternalLink size={14} /> Fullscreen HTML
                </a>
                <a
                  href="/cheatsheets/miae215-cheatsheet2.pdf"
                  download="MIAE 215 - Midterm Cheatsheet 2.0 (Single-Sided).pdf"
                  className="mg-btn"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <Download size={14} /> Download PDF
                </a>
                <button
                  type="button"
                  className="mg-btn"
                  onClick={() => window.open('/cheatsheets/miae215-midterm-cheatsheet2.html', '_blank')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <Printer size={14} /> Print Aid
                </button>
              </div>
            </div>

            {/* Moodle Exam Rules Summary */}
            <div
              style={{
                marginTop: 16,
                padding: '12px 16px',
                background: 'rgba(15, 23, 42, 0.6)',
                borderRadius: 8,
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 12
              }}
            >
              <div>
                <b style={{ color: '#6ee7b7', fontSize: '0.88rem' }}>1. Single-Sided Sheet Constraint:</b>
                <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  Dr. Gordon allows exactly ONE piece of paper, front side only. Back must be blank. Font scale calibrated to 10pt minimum.
                </p>
              </div>
              <div>
                <b style={{ color: '#6ee7b7', fontSize: '0.88rem' }}>2. Permitted Exam Calculator:</b>
                <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  Non-programmable calculator with faculty-approved ENCS sticker is required. No graphers or phones allowed.
                </p>
              </div>
              <div>
                <b style={{ color: '#6ee7b7', fontSize: '0.88rem' }}>3. 0% 2D Array &amp; 0% String Midterm Law:</b>
                <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  0% Strings, 0% 2D Arrays on Midterm. Strictly 100% focused on 1D arrays, loop tracing, integer division, and file I/O.
                </p>
              </div>
            </div>

            {/* Live Interactive Embed Iframe */}
            <div style={{ marginTop: 20 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8
                }}
              >
                <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FileText size={16} style={{ color: '#10b981' }} />
                  <span>Interactive High-Fidelity Cheatsheet 2.0 Sheet Preview (1 Page Letter):</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Scrollable · Responsive · Print-Optimized
                </span>
              </div>
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
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
          </section>
        </>
      )}
      {activeTab === 'analytics' && (
        <>
          {/* Architecture Cards */}
          <div className="mg-gordon-metric-grid">
            <div className="mg-metric-tile accent-blue">
              <div className="mg-metric-head">
                <Terminal size={18} />
                <span>Output Tracing Tables</span>
              </div>
              <div className="mg-metric-value">{gordonData.analytics.weightDistribution.tracingPercentage}%</div>
              <div className="mg-metric-desc">
                High-density while/for loops &amp; array indexing. Only answers inside the box receive marks.
              </div>
            </div>

            <div className="mg-metric-tile accent-purple">
              <div className="mg-metric-head">
                <Code size={18} />
                <span>1D Array Programming</span>
              </div>
              <div className="mg-metric-value">{gordonData.analytics.weightDistribution.codingPercentage}%</div>
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
              <div className="mg-metric-value">90 min</div>
              <div className="mg-metric-desc">
                Recommended: 35 min on trace tables, 45 min on algorithmic code writing, 10 min audit.
              </div>
            </div>
          </div>

          {/* Official Gordon Exam Guidelines */}
          <section className="mg-panel mg-panel-pad">
            <h3 className="mg-section-title">
              <ListChecks size={18} /> Official Exam Structure &amp; Dr. Gordon Directives
            </h3>
            <p className="mg-section-sub">
              Key instructions directly from Dr. Gordon’s official course memos (Fall 2022 – Fall 2024):
            </p>
            <div className="mg-rules-grid">
              {gordonData.analytics.weightDistribution.rulesSummary.map((rule, idx) => (
                <div key={idx} className="mg-rule-item">
                  <span className="mg-rule-num">0{idx + 1}</span>
                  <div className="mg-rule-text">{rule}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Topic Frequency Matrix */}
          <section className="mg-panel mg-panel-pad">
            <h3 className="mg-section-title">
              <BarChart3 size={18} /> Historical Topic Frequency Matrix
            </h3>
            <p className="mg-section-sub">
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
                      <span key={j} className="mg-occurrence-tag">
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
          </section>

          {/* Top Gordon Traps */}
          <section className="mg-panel mg-panel-pad">
            <h3 className="mg-section-title" style={{ color: 'var(--amber-300, #fbbf24)' }}>
              <Flame size={18} /> Top 5 High-Yield "Gordon Traps" Exposed
            </h3>
            <p className="mg-section-sub">
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
          </section>
        </>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 2: FALL 2023 MIDTERM (Q2 · 40% WEIGHT)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'f23' && f23Paper && (
        <section className="mg-panel mg-panel-pad">
          <div className="mg-paper-meta-banner">
            <div>
              <h3 className="mg-section-title">{f23Paper.title}</h3>
              <p className="mg-section-sub">{f23Paper.overview}</p>
            </div>
            <span className="mg-badge exact" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
              {f23Paper.officialWeight}
            </span>
          </div>

          <div className="mg-paper-questions-list">
            {f23Paper.questions.map((q) => (
              <div key={q.id} className="mg-gordon-card" style={{ marginTop: 20 }}>
                <div className="mg-gordon-card-top">
                  <div>
                    <div className="mg-gordon-item-title">
                      {q.part}: {q.title}
                    </div>
                    <div className="mg-gordon-source">
                      <span className="mg-source-label">Weight:</span> {q.points} ({q.weight})
                    </div>
                  </div>
                  <div className="mg-gordon-card-actions">
                    <button
                      type="button"
                      className="mg-btn small"
                      onClick={() => copyCode(q.id, q.codeSnippet)}
                      title="Copy C++ code"
                    >
                      {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                      {copiedId === q.id ? 'Copied' : 'Copy'}
                    </button>
                    <button
                      type="button"
                      className="mg-btn small primary"
                      onClick={() => openInCodeLab(q.codeSnippet)}
                      title="Open and run in interactive Code Lab"
                    >
                      <PlayCircle size={13} /> Run in Code Lab
                    </button>
                  </div>
                </div>

                <p className="mg-q-desc">{q.description}</p>

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
                  <div className="mg-trace-table-wrap">
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
                  <div className="mg-gordon-note warning">
                    <AlertTriangle size={15} />
                    <span>
                      <strong>High-Yield Trap &amp; Exam Strategy: </strong>
                      {q.trapAlert}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 3: FALL 2022 MIDTERM (Q1 · 50% WEIGHT)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'f22' && f22Paper && (
        <section className="mg-panel mg-panel-pad">
          <div className="mg-paper-meta-banner">
            <div>
              <h3 className="mg-section-title">{f22Paper.title}</h3>
              <p className="mg-section-sub">{f22Paper.overview}</p>
            </div>
            <span className="mg-badge exact" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
              {f22Paper.officialWeight}
            </span>
          </div>

          {/* Full C++ Program Code */}
          <div className="mg-gordon-card" style={{ marginTop: 20 }}>
            <div className="mg-gordon-card-top">
              <div>
                <div className="mg-gordon-item-title">Complete 50-Point C++ Program (`program.cpp`)</div>
                <div className="mg-gordon-source">
                  Combines all 5 sub-questions (a, b, c, d, e) into one verified, executable file.
                </div>
              </div>
              <div className="mg-gordon-card-actions">
                <button
                  type="button"
                  className="mg-btn small"
                  onClick={() => f22Paper.fullProgramCode && copyCode('f22-full', f22Paper.fullProgramCode)}
                  title="Copy full source code"
                >
                  {copiedId === 'f22-full' ? <Check size={13} /> : <Copy size={13} />}
                  {copiedId === 'f22-full' ? 'Copied' : 'Copy'}
                </button>
                <button
                  type="button"
                  className="mg-btn small primary"
                  onClick={() => f22Paper.fullProgramCode && openInCodeLab(f22Paper.fullProgramCode)}
                  title="Open and run in interactive Code Lab"
                >
                  <PlayCircle size={13} /> Run in Code Lab
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
          <h4 style={{ margin: '24px 0 12px', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
            Exam Sub-Questions Breakdown (Parts A through E)
          </h4>
          <div className="mg-paper-questions-list">
            {f22Paper.questions.map((q) => (
              <div key={q.id} className="mg-gordon-card" style={{ marginBottom: 16 }}>
                <div className="mg-gordon-card-top">
                  <div>
                    <div className="mg-gordon-item-title">
                      {q.part}: {q.title}
                    </div>
                    <div className="mg-gordon-source">
                      <span className="mg-source-label">Weight:</span> {q.points}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mg-btn small"
                    onClick={() => copyCode(q.id, q.codeSnippet)}
                    title="Copy code snippet"
                  >
                    {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                    {copiedId === q.id ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <p className="mg-q-desc">{q.description}</p>
                <pre className="mg-code mg-gordon-code">{q.codeSnippet}</pre>

                <div className="mg-freq-occurrences" style={{ marginTop: 10 }}>
                  <strong>Core Concepts Tested: </strong>
                  {q.conceptsTested.map((c, ci) => (
                    <span key={ci} className="mg-occurrence-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 4: MIDTERM REVIEWS (#1 & #4)
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'reviews' && (
        <>
          {reviewPapers.map((paper) => (
            <section key={paper.id} className="mg-panel mg-panel-pad" style={{ marginBottom: 16 }}>
              <div className="mg-paper-meta-banner">
                <div>
                  <h3 className="mg-section-title">{paper.title}</h3>
                  <p className="mg-section-sub">{paper.overview}</p>
                </div>
                <span className="mg-badge template" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
                  {paper.officialWeight}
                </span>
              </div>

              <div className="mg-paper-questions-list" style={{ marginTop: 16 }}>
                {paper.questions.map((q) => (
                  <div key={q.id} className="mg-gordon-card" style={{ marginBottom: 16 }}>
                    <div className="mg-gordon-card-top">
                      <div>
                        <div className="mg-gordon-item-title">
                          {q.part}: {q.title}
                        </div>
                        <div className="mg-gordon-source">
                          <span className="mg-source-label">Format:</span> {q.points}
                        </div>
                      </div>
                      <div className="mg-gordon-card-actions">
                        <button
                          type="button"
                          className="mg-btn small"
                          onClick={() => copyCode(q.id, q.codeSnippet)}
                          title="Copy C++ snippet"
                        >
                          {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                          {copiedId === q.id ? 'Copied' : 'Copy'}
                        </button>
                        <button
                          type="button"
                          className="mg-btn small primary"
                          onClick={() => openInCodeLab(q.codeSnippet)}
                          title="Open in Code Lab"
                        >
                          <PlayCircle size={13} /> Run Code
                        </button>
                      </div>
                    </div>

                    <p className="mg-q-desc">{q.description}</p>
                    <pre className="mg-code mg-gordon-code">{q.codeSnippet}</pre>

                    {q.expectedOutput && (
                      <div style={{ marginTop: 10 }}>
                        <div className="mg-gordon-col-label">
                          <Terminal size={13} /> Expected Terminal Output
                        </div>
                        <pre className="mg-gordon-output-box">{q.expectedOutput}</pre>
                      </div>
                    )}

                    <div className="mg-freq-occurrences" style={{ marginTop: 10 }}>
                      <strong>Concepts: </strong>
                      {q.conceptsTested.map((c, ci) => (
                        <span key={ci} className="mg-occurrence-tag">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </>
      )}

      {/* ──────────────────────────────────────────────────────────────────────────
          TAB 5: PRECURSOR QUIZZES
         ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'quizzes' && quizPaper && (
        <section className="mg-panel mg-panel-pad">
          <div className="mg-paper-meta-banner">
            <div>
              <h3 className="mg-section-title">{quizPaper.title}</h3>
              <p className="mg-section-sub">{quizPaper.overview}</p>
            </div>
            <span className="mg-badge concept" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
              {quizPaper.officialWeight}
            </span>
          </div>

          <div className="mg-paper-questions-list" style={{ marginTop: 16 }}>
            {quizPaper.questions.map((q) => (
              <div key={q.id} className="mg-gordon-card" style={{ marginBottom: 16 }}>
                <div className="mg-gordon-card-top">
                  <div>
                    <div className="mg-gordon-item-title">
                      {q.part}: {q.title}
                    </div>
                    <div className="mg-gordon-source">
                      <span className="mg-source-label">Format:</span> {q.points}
                    </div>
                  </div>
                  <div className="mg-gordon-card-actions">
                    <button
                      type="button"
                      className="mg-btn small"
                      onClick={() => copyCode(q.id, q.codeSnippet)}
                      title="Copy code"
                    >
                      {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                      {copiedId === q.id ? 'Copied' : 'Copy'}
                    </button>
                    <button
                      type="button"
                      className="mg-btn small primary"
                      onClick={() => openInCodeLab(q.codeSnippet)}
                      title="Run in Code Lab"
                    >
                      <PlayCircle size={13} /> Run Code
                    </button>
                  </div>
                </div>

                <p className="mg-q-desc">{q.description}</p>
                <pre className="mg-code mg-gordon-code" style={{ maxHeight: 380, overflowY: 'auto' }}>
                  {q.codeSnippet}
                </pre>

                <div className="mg-freq-occurrences" style={{ marginTop: 10 }}>
                  <strong>Key Skills: </strong>
                  {q.conceptsTested.map((c, ci) => (
                    <span key={ci} className="mg-occurrence-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
