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
  FileText,
  Flame,
  Layers,
  ListChecks,
  PlayCircle,
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
  const [activeTab, setActiveTab] = useState<'analytics' | 'f23' | 'f22' | 'reviews' | 'quizzes'>('analytics');
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
          TAB 1: EXAM ANALYTICS & BLUEPRINT
         ────────────────────────────────────────────────────────────────────────── */}
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
