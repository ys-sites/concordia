import React, { Suspense, lazy, useMemo, useState } from 'react';
import { ArrowRight, Box, Layers, Sparkles } from 'lucide-react';
import type { Curriculum } from '../model';
import { href } from '../router';
import { VISUAL_3D_TOPICS, type Visual3DTopicSpec } from '../visual3d/catalog';
import { MathBlock } from '../../utils/mathRenderer';

const Visual3DLearner = lazy(() => import('../visual3d/Visual3DLearner'));

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const ModelLibrary: React.FC<{ cur: Curriculum }> = ({ cur }) => {
  const models = useMemo(
    () => VISUAL_3D_TOPICS.filter((m) => m.courseId === cur.id),
    [cur.id],
  );
  const [activeId, setActiveId] = useState<string>(() => models[0]?.id ?? '');

  const groups = useMemo(() => {
    const map = new Map<string, Visual3DTopicSpec[]>();
    for (const m of models) {
      map.set(m.sectionTitle, [...(map.get(m.sectionTitle) ?? []), m]);
    }
    return [...map.entries()];
  }, [models]);

  const activeModel = models.find((m) => m.id === activeId) ?? models[0];

  const stepHrefFor = (m: Visual3DTopicSpec) => {
    const toolId =
      m.id === '3d:crystal-structures'
        ? 'crystal-lab:unit-cells'
        : m.id === '3d:directions'
          ? 'crystal-lab:directions'
          : m.id === '3d:planes'
            ? 'crystal-lab:planes'
            : m.id;
    return href({
      name: 'learn',
      course: cur.id,
      lesson: m.lessonId,
      step: `${m.lessonId}.tool-${slug(toolId)}`,
    });
  };

  if (!models.length) {
    return <p className="lx-empty">No 3D Visual Learners registered for this course.</p>;
  }

  return (
    <div className="lx-models-tab" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Live Interactive 3D Stage at Top */}
      {activeModel && (
        <div
          style={{
            border: '1px solid var(--lx-line)',
            borderRadius: 'var(--lx-r-lg)',
            background: 'var(--lx-surface)',
            padding: 'var(--lx-s4)',
            boxShadow: '0 6px 20px -8px rgba(15, 23, 42, 0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 14,
              paddingBottom: 12,
              borderBottom: '1px solid var(--lx-line)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="lx-chip" style={{ fontWeight: 700 }}>
                <Sparkles size={13} /> Model #{activeModel.num} of 41
              </span>
              <span className="lx-meta">{activeModel.sectionTitle}</span>
            </div>
            <a className="lx-btn lx-btn--primary lx-btn--sm" href={stepHrefFor(activeModel)}>
              Open in Lesson <ArrowRight size={14} />
            </a>
          </div>
          <Suspense
            fallback={
              <div className="lx-quiz-loading" aria-busy="true">
                <span className="lx-spinner" /> Loading 3D Visual Learner…
              </div>
            }
          >
            <Visual3DLearner key={activeModel.id} toolId={activeModel.id} />
          </Suspense>
        </div>
      )}

      {/* Sub-Section Directory of All 3D Visual Learners in the Course */}
      {groups.map(([groupTitle, items]) => (
        <section key={groupTitle} aria-label={groupTitle}>
          <header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <h3 className="lx-h3" style={{ display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
              <Layers size={18} aria-hidden /> {groupTitle}
            </h3>
            <span className="lx-meta lx-num">{items.length} 3D visual learners</span>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
              gap: 12,
            }}
          >
            {items.map((m) => {
              const isSelected = activeModel?.id === m.id;
              return (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 10,
                    padding: '14px 16px',
                    borderRadius: 'var(--lx-r)',
                    border: isSelected ? '2px solid var(--lx-accent)' : '1px solid var(--lx-line)',
                    background: isSelected ? 'var(--lx-tint)' : 'var(--lx-surface)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: 'var(--lx-accent-deep)',
                        }}
                      >
                        <Box size={13} /> #{m.num} · 3D Visual Learner
                      </span>
                      {isSelected && (
                        <span className="lx-chip" style={{ fontSize: 11 }}>
                          Active above
                        </span>
                      )}
                    </div>
                    <h4 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700 }}>{m.title}</h4>
                    <p className="lx-meta" style={{ margin: '0 0 8px' }}>
                      {m.subtitle}
                    </p>
                    <div
                      style={{
                        background: 'var(--lx-surface-2)',
                        borderRadius: 8,
                        padding: '4px 8px',
                        fontSize: 12,
                        overflowX: 'auto',
                      }}
                    >
                      <MathBlock tex={m.formula} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    <button
                      type="button"
                      className={`lx-btn lx-btn--sm ${isSelected ? 'lx-btn--primary' : ''}`}
                      style={{ flex: 1 }}
                      onClick={() => {
                        setActiveId(m.id);
                        window.scrollTo({ top: 180, behavior: 'smooth' });
                      }}
                    >
                      <Box size={14} /> {isSelected ? 'Viewing in 3D' : 'Preview 3D'}
                    </button>
                    <a className="lx-btn lx-btn--sm lx-btn--ghost" href={stepHrefFor(m)}>
                      Lesson <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ModelLibrary;

