import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Filter,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Printer,
  Search,
  Sparkles,
  X
} from 'lucide-react';
import { MIAE221_MASTER_FORMULAS, MasterFormulaItem } from './formulaData';
import { MIDTERM_2017_THEORY_QUESTIONS, TheoryQuestionItem } from './midterm2017TheoryData';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import './formulaHub.css';

type HubView = 'formulas' | 'theory';

export const MIAE221FormulaHub: React.FC = () => {
  const [activeView, setActiveView] = useState<HubView>('formulas');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [onlyRedAlert, setOnlyRedAlert] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTheoryIds, setExpandedTheoryIds] = useState<Set<string>>(new Set());

  const redAlertCount = useMemo(
    () => MIAE221_MASTER_FORMULAS.filter((f) => !f.isOnOfficialSheet).length,
    []
  );

  // Filter formulas
  const filteredFormulas = useMemo(() => {
    return MIAE221_MASTER_FORMULAS.filter((item) => {
      if (selectedChapter !== 'all' && item.chapter !== selectedChapter) return false;
      if (onlyRedAlert && item.isOnOfficialSheet) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMeaning = item.meaning.toLowerCase().includes(q);
        const matchesTex = item.tex.toLowerCase().includes(q);
        const matchesTip = item.quickTip.toLowerCase().includes(q);
        const matchesSymbols = item.symbols.some(
          (s) => s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesMeaning && !matchesTex && !matchesTip && !matchesSymbols) {
          return false;
        }
      }
      return true;
    });
  }, [selectedChapter, onlyRedAlert, searchQuery]);

  // Filter theory questions
  const filteredTheory = useMemo(() => {
    return MIDTERM_2017_THEORY_QUESTIONS.filter((item) => {
      if (selectedChapter !== 'all' && item.chapter !== selectedChapter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesPrompt = item.prompt.toLowerCase().includes(q);
        const matchesSubject = item.subject.toLowerCase().includes(q);
        const matchesExpl = item.explanation.toLowerCase().includes(q);
        const matchesTheory = item.theoryBehindIt.toLowerCase().includes(q);
        const matchesTip = item.quickTip.toLowerCase().includes(q);
        if (!matchesPrompt && !matchesSubject && !matchesExpl && !matchesTheory && !matchesTip) {
          return false;
        }
      }
      return true;
    });
  }, [selectedChapter, searchQuery]);

  const toggleTheoryExpand = (id: string) => {
    setExpandedTheoryIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAllTheory = () => {
    setExpandedTheoryIds(new Set(filteredTheory.map((t) => t.id)));
  };

  const collapseAllTheory = () => {
    setExpandedTheoryIds(new Set());
  };

  const printSheet = () => {
    window.print();
  };

  return (
    <div className="lx-fhub-wrap">
      {/* Top Header */}
      <div className="lx-fhub-header">
        <div className="lx-fhub-title-row">
          <div>
            <h2>
              <BookOpen size={24} className="lx-accent-icon" /> MIAE 221 Master Formula & Theory Hub
            </h2>
            <p className="lx-meta" style={{ margin: '4px 0 0 0' }}>
              Materials Science · Chapters 1 to 6 (Midterm Scope) · Color-Graded by Importance with Official Sheet Status
            </p>
          </div>
          <div className="lx-fhub-actions">
            <button
              type="button"
              className="lx-btn lx-btn--ghost lx-btn--sm"
              onClick={printSheet}
              title="Print clean review sheet"
            >
              <Printer size={15} /> Print / Save PDF
            </button>
          </div>
        </div>

        {/* Primary View Switcher */}
        <div className="lx-fhub-main-tabs" role="tablist" aria-label="Formula Hub Sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeView === 'formulas'}
            className={`lx-fhub-main-tab${activeView === 'formulas' ? ' is-active' : ''}`}
            onClick={() => setActiveView('formulas')}
          >
            <span>📐 Master Formula Sheet</span>
            <span className="lx-fhub-badge">{MIAE221_MASTER_FORMULAS.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeView === 'theory'}
            className={`lx-fhub-main-tab${activeView === 'theory' ? ' is-active' : ''}`}
            onClick={() => setActiveView('theory')}
          >
            <span>💡 2017 Midterm & Past Exam Theory Explainer</span>
            <span className="lx-fhub-badge">{MIDTERM_2017_THEORY_QUESTIONS.length}</span>
          </button>
        </div>

        {/* Controls & Filter Bar */}
        <div className="lx-fhub-controls">
          <div className="lx-fhub-search-row">
            <div className="lx-fhub-search-box">
              <Search size={17} className="lx-fhub-search-icon" />
              <input
                type="text"
                placeholder={
                  activeView === 'formulas'
                    ? 'Search formulas, symbols, meaning, or quick tips…'
                    : 'Search theory questions, concepts, traps, or tips…'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="lx-fhub-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {activeView === 'formulas' && (
              <button
                type="button"
                className={`lx-fhub-red-alert-toggle${onlyRedAlert ? ' is-active' : ''}`}
                onClick={() => setOnlyRedAlert(!onlyRedAlert)}
                title="Filter to show ONLY formulas that are omitted from the official exam sheet"
              >
                <AlertTriangle size={17} />
                <span>🚨 NOT on Midterm Sheet (Must Memorize!)</span>
                <span className="lx-fhub-badge" style={{ background: onlyRedAlert ? '#fff' : undefined, color: onlyRedAlert ? '#dc2626' : undefined }}>
                  {redAlertCount}
                </span>
              </button>
            )}

            {activeView === 'theory' && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  className="lx-btn lx-btn--ghost lx-btn--sm"
                  onClick={expandAllTheory}
                >
                  <ChevronDown size={15} /> Expand All
                </button>
                <button
                  type="button"
                  className="lx-btn lx-btn--ghost lx-btn--sm"
                  onClick={collapseAllTheory}
                >
                  <ChevronUp size={15} /> Collapse All
                </button>
              </div>
            )}
          </div>

          {/* Chapter Filter Pills */}
          <div className="lx-fhub-chapter-pills" role="radiogroup" aria-label="Filter by chapter">
            <button
              type="button"
              className={`lx-fhub-pill${selectedChapter === 'all' ? ' is-active' : ''}`}
              onClick={() => setSelectedChapter('all')}
            >
              All Chapters
            </button>
            {[
              { ch: 1, label: 'Ch 1 · Bonding' },
              { ch: 2, label: 'Ch 2 · Crystal Structure' },
              { ch: 3, label: 'Ch 3 · Imperfections' },
              { ch: 4, label: 'Ch 4 · Diffusion' },
              { ch: 5, label: 'Ch 5 · Mechanical' },
              { ch: 6, label: 'Ch 6 · Slip & Dislocations' }
            ].map((c) => (
              <button
                key={c.ch}
                type="button"
                className={`lx-fhub-pill${selectedChapter === c.ch ? ' is-active' : ''}`}
                onClick={() => setSelectedChapter(c.ch)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* VIEW 1: MASTER FORMULA SHEET */}
      {activeView === 'formulas' && (
        <div>
          {filteredFormulas.length === 0 ? (
            <p className="lx-empty">No formulas match your active filter or search query.</p>
          ) : (
            <div className="lx-fhub-grid">
              {filteredFormulas.map((f) => (
                <article
                  key={f.id}
                  className={`lx-fhub-card${!f.isOnOfficialSheet ? ' is-red-alert' : ''}`}
                >
                  <header className="lx-fhub-card-head">
                    <div className="lx-fhub-card-title-group">
                      <span className="lx-fhub-card-ch">{f.chapterTitle} (Chapter {f.chapter})</span>
                      <h3 className="lx-fhub-card-title">{f.name}</h3>
                    </div>
                    {f.isOnOfficialSheet ? (
                      <span className="lx-fhub-status-chip is-on-sheet" title="Printed on the official midterm formula sheet">
                        <Check size={13} strokeWidth={3} /> On Sheet
                      </span>
                    ) : (
                      <span className="lx-fhub-status-chip is-not-on-sheet" title="NOT on official formula sheet. Must be memorized!">
                        <AlertTriangle size={13} strokeWidth={2.5} /> NOT ON SHEET!
                      </span>
                    )}
                  </header>

                  {/* TeX formula */}
                  <div className="lx-fhub-tex-box">
                    <MathBlock tex={f.tex} />
                  </div>

                  {/* Meaning */}
                  <p className="lx-fhub-meaning">
                    <MathText text={f.meaning} />
                  </p>

                  {/* Symbols Breakdown Table */}
                  {f.symbols && f.symbols.length > 0 && (
                    <table className="lx-fhub-symbols-table">
                      <thead>
                        <tr>
                          <th>Symbol</th>
                          <th>Role & Meaning</th>
                          <th>Units / Const</th>
                        </tr>
                      </thead>
                      <tbody>
                        {f.symbols.map((s, idx) => (
                          <tr key={idx}>
                            <th>
                              <MathText text={`$${s.symbol}$`} />
                            </th>
                            <td className="role-cell">
                              <MathText text={s.name} />
                              <div style={{ fontSize: '11.5px', color: 'var(--lx-ink-3)', marginTop: '2px' }}>
                                <MathText text={s.role} />
                              </div>
                            </td>
                            <td className="unit-cell">
                              <MathText text={`$${s.units}$`} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* Quick Understanding Tip Callout */}
                  {f.quickTip && (
                    <div className="lx-fhub-tip-box">
                      <Lightbulb size={18} className="lx-fhub-tip-icon" />
                      <div>
                        <strong>Quick Understanding Tip: </strong>
                        <MathText text={f.quickTip} />
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: 2017 MIDTERM & PAST EXAM THEORY EXPLAINER */}
      {activeView === 'theory' && (
        <div className="lx-theory-list">
          {filteredTheory.length === 0 ? (
            <p className="lx-empty">No theory questions match your active filter or search query.</p>
          ) : (
            filteredTheory.map((item) => {
              const isExpanded = expandedTheoryIds.has(item.id);
              return (
                <article key={item.id} className="lx-theory-card">
                  <header className="lx-theory-card-head">
                    <div className="lx-theory-source-chips">
                      <span className="lx-theory-chip is-paper">{item.paper} · {item.qNum}</span>
                      <span className="lx-theory-chip">Chapter {item.chapter}</span>
                    </div>
                    <span className="lx-theory-subject">{item.subject}</span>
                  </header>

                  <div className="lx-theory-prompt">
                    <MathText text={item.prompt} />
                  </div>

                  {/* Options */}
                  <div className="lx-theory-options">
                    {item.options.map((opt) => {
                      const isCorrect = isExpanded && opt.key === item.correctKey;
                      return (
                        <div
                          key={opt.key}
                          className={`lx-theory-opt${isCorrect ? ' is-correct' : ''}`}
                        >
                          <span className="lx-theory-opt-key">
                            {isCorrect ? <Check size={14} strokeWidth={3} /> : opt.key}
                          </span>
                          <span>
                            <MathText text={opt.text} />
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Expand / Reveal Button */}
                  <button
                    type="button"
                    className="lx-theory-reveal-btn"
                    onClick={() => toggleTheoryExpand(item.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp size={16} /> Hide Explanation & Theory Behind It
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} /> Reveal Correct Answer ({item.correctKey}) & Deep Theory Breakdown
                      </>
                    )}
                  </button>

                  {/* Detailed Explanation Drawer */}
                  {isExpanded && (
                    <div className="lx-theory-details">
                      <div className="lx-theory-explanation">
                        <strong>Pedagogical Explanation:</strong>
                        <p>
                          <MathText text={item.explanation} />
                        </p>
                      </div>

                      <div className="lx-theory-mechanism">
                        <strong>The Theory Behind It:</strong>
                        <p>
                          <MathText text={item.theoryBehindIt} />
                        </p>
                      </div>

                      {/* Quick Understanding Tip */}
                      <div className="lx-fhub-tip-box" style={{ margin: '4px 0 0 0' }}>
                        <Lightbulb size={18} className="lx-fhub-tip-icon" />
                        <div>
                          <strong>Quick Understanding Tip: </strong>
                          <MathText text={item.quickTip} />
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
