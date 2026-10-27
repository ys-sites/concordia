import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
  ExternalLink,
  BookOpen,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  MIAE221_YEAR_STATS,
  MIAE221_QUESTION_SIMILARITY_MATRIX,
  MIAE221_STATISTICS_SUMMARY
} from '../data/miae221ExamStatistics';

interface Miae221ExamStatisticsCardProps {
  onStart2017Drill?: () => void;
}

export const Miae221ExamStatisticsCard: React.FC<Miae221ExamStatisticsCardProps> = ({
  onStart2017Drill
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [tableSearch, setTableSearch] = useState<string>('');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const topics = useMemo(() => {
    const set = new Set<string>();
    MIAE221_QUESTION_SIMILARITY_MATRIX.forEach((q) => set.add(q.topic));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredQuestions = useMemo(() => {
    return MIAE221_QUESTION_SIMILARITY_MATRIX.filter((q) => {
      const matchTopic = selectedTopic === 'all' || q.topic === selectedTopic;
      const matchSearch =
        !tableSearch.trim() ||
        q.concept.toLowerCase().includes(tableSearch.toLowerCase()) ||
        q.topic.toLowerCase().includes(tableSearch.toLowerCase()) ||
        `q${q.q2017Num}`.includes(tableSearch.toLowerCase()) ||
        q.fastCrackTip.toLowerCase().includes(tableSearch.toLowerCase());
      return matchTopic && matchSearch;
    });
  }, [selectedTopic, tableSearch]);

  return (
    <section className="m221-stats-hub" aria-label="MIAE 221 Exam Statistics & 2017 Recurrence Analysis">
      {/* Header Banner */}
      <div className="m221-stats-header">
        <div className="m221-stats-badge-row">
          <span className="m221-chip-pill m221-chip-accent">
            <BarChart3 size={14} /> Recurrence Analytics
          </span>
          <span className="m221-chip-pill m221-chip-green">
            <Sparkles size={14} /> 78.5% Historical Overlap Rate
          </span>
          <span className="m221-chip-pill m221-chip-blue">
            <BookOpen size={14} /> Verified Teacher Midterm Blueprint
          </span>
        </div>

        <h2 className="m221-stats-title">
          2017 Teacher Sample Midterm vs. Recent Exams (2018–2026)
        </h2>
        <p className="m221-stats-subtitle">
          Statistical cross-analysis of the official 2017 Sample Midterm against Fall 2024, Fall 2025, and Winter 2026.
          <strong> 78.5% of questions are direct template repeats</strong> with identical algebraic patterns.
        </p>
      </div>

      {/* KPI Stat Cards Grid */}
      <div className="m221-kpi-grid">
        <div className="m221-kpi-card m221-kpi-highlight">
          <div className="m221-kpi-val">78.5%</div>
          <div className="m221-kpi-label">Template Repeat Rate</div>
          <p className="m221-kpi-desc">
            Historical question recurrence between the 2017 Sample and post-2020 midterms.
          </p>
        </div>

        <div className="m221-kpi-card">
          <div className="m221-kpi-val" style={{ color: '#10b981' }}>16 / 30</div>
          <div className="m221-kpi-label">Direct Template Twins (53.3%)</div>
          <p className="m221-kpi-desc">
            Identical question structure, verbatim figure landmarks, or inverted True/False traps.
          </p>
        </div>

        <div className="m221-kpi-card">
          <div className="m221-kpi-val" style={{ color: '#6366f1' }}>8 / 30</div>
          <div className="m221-kpi-label">Numerical Variants (26.7%)</div>
          <p className="m221-kpi-desc">
            Exact same formula and procedure with updated numerical parameters.
          </p>
        </div>

        <div className="m221-kpi-card">
          <div className="m221-kpi-val" style={{ color: '#f59e0b' }}>100%</div>
          <div className="m221-kpi-label">Curriculum Preservation</div>
          <p className="m221-kpi-desc">
            Zero discarded concepts. Every 2017 topic remains active in the 2026 midterm pool.
          </p>
        </div>
      </div>

      {/* Year-by-Year Comparison Breakdown */}
      <div className="m221-year-section">
        <h3 className="m221-section-subhead">
          <Calendar size={18} /> Recurrence Match by Midterm Term
        </h3>
        <div className="m221-year-grid">
          {MIAE221_YEAR_STATS.map((stat) => (
            <div key={stat.term} className="m221-year-card">
              <div className="m221-year-header">
                <div>
                  <h4 className="m221-year-term">{stat.term}</h4>
                  <div className="m221-year-profs">{stat.professors.join(' · ')}</div>
                </div>
                <div className="m221-year-match-badge">
                  <span className="m221-match-pct">{stat.overallMatchPct}%</span>
                  <span className="m221-match-lbl">Match</span>
                </div>
              </div>

              <div className="m221-year-meta">
                <span className="m221-meta-item"><strong>Format:</strong> {stat.format}</span>
                <span className="m221-meta-item">
                  <strong>Direct Matches:</strong> {stat.identicalQuestionsCount} Qs · <strong>Variants:</strong> {stat.variantQuestionsCount} Qs
                </span>
              </div>

              <div className="m221-year-highlights">
                <strong>Key Recurring Landings:</strong>
                <ul>
                  {stat.keyRecurringTopics.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 6 Guaranteed Problem Types */}
      <div className="m221-guaranteed-section">
        <h3 className="m221-section-subhead">
          <Sparkles size={18} /> 6 Guaranteed 100% Recurrence Problem Types
        </h3>
        <div className="m221-guaranteed-grid">
          {MIAE221_STATISTICS_SUMMARY.guaranteedProblemTypes.map((gp, i) => (
            <div key={i} className="m221-guaranteed-card">
              <div className="m221-guaranteed-top">
                <span className="m221-guaranteed-badge">{gp.examAppearance}</span>
                <span className="m221-guaranteed-weight">{gp.weight}</span>
              </div>
              <h4 className="m221-guaranteed-title">{gp.title}</h4>
              <p className="m221-guaranteed-desc">{gp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Complete 30-Question Cross-Mapping Table */}
      <div className="m221-matrix-section">
        <div className="m221-matrix-header">
          <div>
            <h3 className="m221-section-subhead" style={{ marginBottom: '0.25rem' }}>
              <Layers size={18} /> 2017 Sample Midterm Question-by-Question Cross-Mapping
            </h3>
            <p className="m221-stats-subtitle" style={{ margin: 0 }}>
              Showing how each of the 30 questions maps to Winter 2026, Fall 2025, Fall 2024, and 2015.
            </p>
          </div>

          <div className="m221-matrix-controls">
            <div className="m221-search-box">
              <Search size={14} />
              <input
                type="text"
                placeholder="Search concept or question..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
              />
              {tableSearch && (
                <button type="button" onClick={() => setTableSearch('')}>×</button>
              )}
            </div>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="m221-topic-select"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t === 'all' ? 'All Topics' : t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="m221-table-wrap">
          <table className="m221-table">
            <thead>
              <tr>
                <th>2017 Q#</th>
                <th>Topic &amp; Concept</th>
                <th>Classification</th>
                <th>Winter 2026</th>
                <th>Fall 2025</th>
                <th>Fall 2024</th>
                <th>Nov 2015</th>
                <th>Match</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map((q) => {
                const isExpanded = expandedRow === q.q2017Num;
                return (
                  <React.Fragment key={q.q2017Num}>
                    <tr
                      className={`m221-row ${isExpanded ? 'is-expanded' : ''}`}
                      onClick={() => setExpandedRow(isExpanded ? null : q.q2017Num)}
                    >
                      <td className="m221-td-num">
                        <span className="m221-qnum-pill">Q{q.q2017Num}</span>
                      </td>
                      <td className="m221-td-concept">
                        <div className="m221-concept-title">{q.concept}</div>
                        <div className="m221-topic-tag">{q.topic}</div>
                      </td>
                      <td>
                        <span
                          className={`m221-badge ${
                            q.recurrenceType === 'Direct Template Match'
                              ? 'm221-badge--direct'
                              : q.recurrenceType === 'Numerical Variant'
                              ? 'm221-badge--variant'
                              : 'm221-badge--concept'
                          }`}
                        >
                          {q.recurrenceType}
                        </span>
                      </td>
                      <td className="m221-td-match">{q.matches.w26 ?? '—'}</td>
                      <td className="m221-td-match">{q.matches.a25 ?? '—'}</td>
                      <td className="m221-td-match">{q.matches.f24 ?? '—'}</td>
                      <td className="m221-td-match">{q.matches.m15 ?? '—'}</td>
                      <td className="m221-td-score">
                        <span className="m221-score-pill">{q.similarityScore}%</span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="m221-row-btn"
                          aria-label="Toggle shortcut details"
                        >
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="m221-row-detail">
                        <td colSpan={9}>
                          <div className="m221-detail-box">
                            <div className="m221-detail-row">
                              <Zap size={16} className="m221-detail-zap" />
                              <div>
                                <strong>Fast-Crack Shortcut &amp; Turbo Formula:</strong>
                                <p className="m221-detail-text">{q.fastCrackTip}</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Bottom Bar */}
      <div className="m221-stats-cta-bar">
        {onStart2017Drill && (
          <button type="button" className="m221-cta-primary" onClick={onStart2017Drill}>
            <Zap size={17} />
            <span>Launch Official 2017 Sample Midterm Drill (30 Qs with Marking Key)</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </section>
  );
};
