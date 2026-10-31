import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  ListOrdered,
  Lightbulb,
  PlayCircle,
  Printer,
  Search,
  Video,
  X,
} from 'lucide-react';
import type { Curriculum, LearnQuestion } from '../model';
import { COURSE_BY_ID } from '../courses';
import { useGate } from '../player/StepViews';
import { useCourseQuestions } from '../questions';
import { resolveVideo, VIDEO_SOURCES, type MotionLesson } from '../videoSources';
import { MotionLessonPlayer } from '../../components/MotionLessonPlayer';
import { CodeBlock } from '../components/CodeBlock';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { babySteps } from '../quiz/Explanation';
import './formulaHub.css';

type HubView = 'formulas' | 'theory';
const LETTER = 'ABCDEFGH';

const InlineMotionVideo: React.FC<{ videoId: string; badge: string }> = ({ videoId, badge }) => {
  const [lesson, setLesson] = useState<MotionLesson | null>(null);
  useEffect(() => {
    let alive = true;
    resolveVideo(videoId).then((l) => alive && setLesson(l));
    return () => {
      alive = false;
    };
  }, [videoId]);

  if (!lesson) {
    return (
      <div className="lx-quiz-loading" aria-busy="true">
        <span className="lx-spinner" /> Loading video explanation…
      </div>
    );
  }

  return (
    <div className="lx-theory-video-container">
      <div className="lx-theory-video-meta">
        <span className="lx-theory-video-badge">
          <Video size={13} /> {badge}
        </span>
        <span>
          {lesson.title} · {Math.max(1, Math.round(lesson.duration / 60))} min
        </span>
      </div>
      <div style={{ padding: '8px' }}>
        <MotionLessonPlayer lesson={lesson} bare autoPlay />
      </div>
    </div>
  );
};

export const CourseFormulaHub: React.FC<{ cur: Curriculum }> = ({ cur }) => {
  const gate = useGate(cur.id);
  const qIndex = useCourseQuestions(cur.id);
  const courseMeta = COURSE_BY_ID[cur.id];

  const [activeView, setActiveView] = useState<HubView>('formulas');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [activeVideoKey, setActiveVideoKey] = useState<string | null>(null);

  // Map each gate topic & lesson to a narrated video ID if available
  const topicVideoMap = useMemo(() => {
    const map = new Map<string, string>();
    const courseVids = VIDEO_SOURCES.filter((v) => v.courseId === cur.id);
    for (const v of courseVids) {
      if (v.gateTopic && !map.has(v.gateTopic)) map.set(v.gateTopic, v.id);
    }
    for (const sec of cur.sections) {
      for (const les of sec.lessons) {
        const vidStep = les.steps.find((st) => st.videoId);
        if (vidStep?.videoId) {
          for (const tag of les.topicTags ?? []) {
            if (!map.has(tag)) map.set(tag, vidStep.videoId);
          }
          map.set(les.id, vidStep.videoId);
        }
      }
    }
    return map;
  }, [cur]);

  // Map question ID -> fallback lesson video ID
  const questionFallbackVideo = useMemo(() => {
    const map = new Map<string, string>();
    const firstCourseLessonVideo = cur.sections
      .flatMap((s) => s.lessons)
      .flatMap((l) => l.steps)
      .find((st) => st.videoId)?.videoId;

    for (const sec of cur.sections) {
      for (const les of sec.lessons) {
        const vidStep = les.steps.find((st) => st.videoId);
        const vid = vidStep?.videoId ?? firstCourseLessonVideo;
        if (!vid) continue;
        for (const st of les.steps) {
          for (const qid of st.questionIds ?? []) {
            if (!map.has(qid)) map.set(qid, vid);
          }
        }
      }
    }
    return map;
  }, [cur]);

  const topics = useMemo(() => gate?.topics ?? [], [gate]);

  const formulas = useMemo(() => {
    if (!gate) return [];
    return gate.formulas.filter((f) => {
      if (selectedTopic !== 'all' && f.topic !== selectedTopic) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const hay = `${f.name} ${f.meaning} ${f.tex} ${f.learn?.idea ?? ''} ${(f.steps ?? []).join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [gate, selectedTopic, searchQuery]);

  const examQuestions = useMemo(() => {
    if (!qIndex) return [];
    const all = [...qIndex.byId.values()].filter(
      (q) => q.id.startsWith('x:') || q.id.startsWith('t:') || q.id.startsWith('g:') || q.pastPaper,
    );
    return all.filter((q) => {
      if (selectedTopic !== 'all') {
        const topicName = topics.find((t) => t.id === selectedTopic)?.name.toLowerCase() ?? '';
        const qTopic = q.topic.toLowerCase();
        if (
          qTopic !== selectedTopic.toLowerCase() &&
          (!topicName || !qTopic.includes(topicName.split(' ')[0]))
        ) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const s = searchQuery.toLowerCase();
        const hay = `${q.prompt} ${q.topic} ${q.explain.concept ?? ''} ${q.explain.solution ?? ''}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [qIndex, selectedTopic, topics, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (!gate) {
    return (
      <div className="lx-quiz-loading" aria-busy="true">
        <span className="lx-spinner" /> Loading Formula &amp; Exam Explainer Hub…
      </div>
    );
  }

  return (
    <div className="lx-fhub-wrap">
      <div className="lx-fhub-header">
        <div className="lx-fhub-title-row">
          <div>
            <h2>
              <BookOpen size={24} className="lx-accent-icon" /> {courseMeta.code} Master Formula &amp; Exam Explainer Hub
            </h2>
            <p className="lx-meta" style={{ margin: '4px 0 0 0' }}>
              {courseMeta.title} · Core Formulas, Step-by-Step Recipes, Past Midterm Breakdown &amp; Video Explanations
            </p>
          </div>
          <div className="lx-fhub-actions">
            <button
              type="button"
              className="lx-btn lx-btn--ghost lx-btn--sm"
              onClick={() => window.print()}
              title="Print clean review sheet"
            >
              <Printer size={15} /> Print
            </button>
          </div>
        </div>

        <div className="lx-fhub-main-tabs" role="tablist" aria-label="Formula Hub Sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeView === 'formulas'}
            className={`lx-fhub-main-tab${activeView === 'formulas' ? ' is-active' : ''}`}
            onClick={() => setActiveView('formulas')}
          >
            <span>📐 Master Formula &amp; Method Sheet</span>
            <span className="lx-fhub-badge">{gate.formulas.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeView === 'theory'}
            className={`lx-fhub-main-tab${activeView === 'theory' ? ' is-active' : ''}`}
            onClick={() => setActiveView('theory')}
          >
            <span>💡 Midterm &amp; Past Exam Explainer</span>
            <span className="lx-fhub-badge">{examQuestions.length}</span>
          </button>
        </div>

        <div className="lx-fhub-controls">
          <div className="lx-fhub-search-row">
            <div className="lx-fhub-search-box">
              <Search size={17} className="lx-fhub-search-icon" />
              <input
                type="text"
                placeholder={
                  activeView === 'formulas'
                    ? 'Search formulas, symbols, recipes, or traps…'
                    : 'Search past midterm questions, topics, or concepts…'
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

            {activeView === 'theory' && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  className="lx-btn lx-btn--ghost lx-btn--sm"
                  onClick={() => setExpandedIds(new Set(examQuestions.map((q) => q.id)))}
                >
                  <ChevronDown size={15} /> Expand All
                </button>
                <button
                  type="button"
                  className="lx-btn lx-btn--ghost lx-btn--sm"
                  onClick={() => setExpandedIds(new Set())}
                >
                  <ChevronUp size={15} /> Collapse All
                </button>
              </div>
            )}
          </div>

          <div className="lx-fhub-chapter-pills" role="radiogroup" aria-label="Filter by topic">
            <button
              type="button"
              className={`lx-fhub-pill${selectedTopic === 'all' ? ' is-active' : ''}`}
              onClick={() => setSelectedTopic('all')}
            >
              All Topics
            </button>
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`lx-fhub-pill${selectedTopic === t.id ? ' is-active' : ''}`}
                onClick={() => setSelectedTopic(t.id)}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* VIEW 1: MASTER FORMULA & METHOD SHEET */}
      {activeView === 'formulas' && (
        <div>
          {formulas.length === 0 ? (
            <p className="lx-empty">No formulas match your active filter or search query.</p>
          ) : (
            <div className="lx-fhub-grid">
              {formulas.map((f) => {
                const topicObj = topics.find((t) => t.id === f.topic);
                const videoId = topicVideoMap.get(f.topic);
                const vKey = `f:${f.id}`;
                const isVideoOpen = activeVideoKey === vKey;
                return (
                  <article key={f.id} className="lx-fhub-card">
                    <header className="lx-fhub-card-head">
                      <div className="lx-fhub-card-title-group">
                        <span className="lx-fhub-card-ch">{topicObj?.name ?? f.topic}</span>
                        <h3 className="lx-fhub-card-title">{f.name}</h3>
                      </div>
                      <span className="lx-fhub-status-chip is-on-sheet">
                        <Check size={13} strokeWidth={3} /> High-Yield
                      </span>
                    </header>

                    {f.tex && (
                      <div className="lx-fhub-tex-box">
                        <MathBlock tex={f.tex} />
                      </div>
                    )}

                    <p className="lx-fhub-meaning">
                      <MathText text={f.meaning} />
                    </p>

                    {f.vars && f.vars.length > 0 && (
                      <table className="lx-fhub-symbols-table">
                        <thead>
                          <tr>
                            <th>Symbol</th>
                            <th>Role &amp; Meaning</th>
                            <th>Units / Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {f.vars.map(([sym, what, unit], idx) => (
                            <tr key={idx}>
                              <th>
                                <MathText text={`$${sym}$`} />
                              </th>
                              <td className="role-cell">
                                <MathText text={what} />
                              </td>
                              <td className="unit-cell">{unit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}

                    {f.steps && f.steps.length > 0 && (
                      <div style={{ fontSize: '13px', color: 'var(--lx-ink-2)' }}>
                        <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                          <ListOrdered size={14} /> Step-by-Step Recipe:
                        </strong>
                        <ol style={{ margin: '4px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {f.steps.map((st, idx) => (
                            <li key={idx}>
                              <MathText text={st} />
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {f.learn?.idea && (
                      <div className="lx-fhub-tip-box">
                        <Lightbulb size={18} className="lx-fhub-tip-icon" />
                        <div>
                          <strong>Quick Understanding Tip: </strong>
                          <MathText text={f.learn.idea} />
                        </div>
                      </div>
                    )}

                    {f.traps && f.traps.length > 0 && (
                      <div
                        className="lx-fhub-tip-box"
                        style={{
                          background: 'rgba(220, 38, 38, 0.06)',
                          borderColor: 'rgba(220, 38, 38, 0.22)',
                          color: '#991b1b',
                        }}
                      >
                        <AlertTriangle size={17} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <strong>Exam Trap to Avoid: </strong>
                          <MathText text={f.traps[0]} />
                        </div>
                      </div>
                    )}

                    {videoId && (
                      <div>
                        <button
                          type="button"
                          className={`lx-theory-video-btn${isVideoOpen ? ' is-active' : ''}`}
                          onClick={() => setActiveVideoKey(isVideoOpen ? null : vKey)}
                        >
                          <PlayCircle size={16} />
                          {isVideoOpen ? 'Hide Video Explanation' : 'Watch Video Explanation'}
                        </button>
                        {isVideoOpen && <InlineMotionVideo videoId={videoId} badge="Narrated Topic Video" />}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: MIDTERM & PAST EXAM EXPLAINER WITH VIDEO EXPLANATIONS */}
      {activeView === 'theory' && (
        <div className="lx-theory-list">
          {examQuestions.length === 0 ? (
            <p className="lx-empty">No past exam questions match your active filter or search query.</p>
          ) : (
            examQuestions.map((q: LearnQuestion, idx: number) => {
              const isExpanded = expandedIds.has(q.id);
              const videoId = q.videoId ?? questionFallbackVideo.get(q.id);
              const vKey = `q:${q.id}`;
              const isVideoOpen = activeVideoKey === vKey;
              const moves = babySteps(q);

              return (
                <article key={q.id} className="lx-theory-card">
                  <header className="lx-theory-card-head">
                    <div className="lx-theory-source-chips">
                      <span className="lx-theory-chip is-paper">
                        {q.source || `Past Exam Question #${idx + 1}`}
                      </span>
                      <span className="lx-theory-chip">{q.topic}</span>
                      {videoId && (
                        <span
                          className="lx-theory-chip"
                          style={{
                            background: 'rgba(2, 132, 199, 0.1)',
                            color: '#0284c7',
                            borderColor: 'rgba(2, 132, 199, 0.3)',
                          }}
                        >
                          <Video size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                          {q.videoId ? 'Solved Video Walkthrough' : 'Topic Video Available'}
                        </span>
                      )}
                    </div>
                  </header>

                  <div className="lx-theory-prompt">
                    <MathText text={q.prompt} autoMath />
                  </div>

                  {q.formula && (
                    <div className="lx-fhub-tex-box">
                      <MathBlock tex={q.formula.replace(/^\$|\$$/g, '')} />
                    </div>
                  )}

                  {q.code && <CodeBlock code={q.code} />}

                  {q.options && q.options.length > 0 && (
                    <div className="lx-theory-options">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = isExpanded && q.correct.includes(optIdx);
                        return (
                          <div key={optIdx} className={`lx-theory-opt${isCorrect ? ' is-correct' : ''}`}>
                            <span className="lx-theory-opt-key">
                              {isCorrect ? <Check size={14} strokeWidth={3} /> : LETTER[optIdx]}
                            </span>
                            <span>
                              <MathText text={opt} />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="lx-theory-reveal-btn"
                      style={{ flex: '1 1 280px' }}
                      onClick={() => toggleExpand(q.id)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={16} /> Hide Worked Solution &amp; Breakdown
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} /> Reveal Correct Answer &amp; Step-by-Step Breakdown
                        </>
                      )}
                    </button>

                    {videoId && (
                      <button
                        type="button"
                        className={`lx-theory-video-btn${isVideoOpen ? ' is-active' : ''}`}
                        onClick={() => setActiveVideoKey(isVideoOpen ? null : vKey)}
                        aria-expanded={isVideoOpen}
                      >
                        <PlayCircle size={16} />
                        {isVideoOpen ? 'Hide Video Explanation' : 'Watch Video Explanation'}
                      </button>
                    )}
                  </div>

                  {videoId && isVideoOpen && (
                    <InlineMotionVideo
                      videoId={videoId}
                      badge={q.videoId ? 'Step-by-Step Question Solve Video' : 'Narrated Topic Video Explainer'}
                    />
                  )}

                  {isExpanded && (
                    <div className="lx-theory-details">
                      <div className="lx-theory-explanation">
                        <strong>Verified Answer:</strong>
                        <p>
                          <MathText text={q.answerText} />
                        </p>
                      </div>

                      {q.explain.concept && (
                        <div className="lx-theory-mechanism">
                          <strong>Core Concept &amp; Method:</strong>
                          <p>
                            <MathText text={q.explain.concept} />
                          </p>
                        </div>
                      )}

                      {moves.length > 0 && (
                        <div className="lx-theory-explanation">
                          <strong>Step-by-Step Worked Derivation:</strong>
                          <ol style={{ margin: '8px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {moves.map((m, mIdx) => (
                              <li key={mIdx}>
                                {m.title && (
                                  <strong>
                                    <MathText text={m.title} />:{' '}
                                  </strong>
                                )}
                                {m.text && <MathText text={m.text} />}
                                {m.math && <MathBlock tex={m.math} />}
                                {m.note && (
                                  <div className="lx-meta">
                                    <MathText text={m.note} />
                                  </div>
                                )}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {q.explain.trap && (
                        <div className="lx-fhub-tip-box" style={{ margin: '4px 0 0 0' }}>
                          <Lightbulb size={18} className="lx-fhub-tip-icon" />
                          <div>
                            <strong>Exam Trap &amp; Retention Tip: </strong>
                            <MathText text={q.explain.trap} />
                          </div>
                        </div>
                      )}
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

export default CourseFormulaHub;

