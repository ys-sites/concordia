import React, { Suspense, lazy, useMemo, useState } from 'react';
import { ArrowRight, Box, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import type { Curriculum } from '../model';
import { href } from '../router';
import { VISUAL_3D_TOPICS, type Visual3DTopicSpec } from '../visual3d/catalog';

const Visual3DLearner = lazy(() => import('../visual3d/Visual3DLearner'));

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const ModelLibrary: React.FC<{ cur: Curriculum }> = ({ cur }) => {
  const models = useMemo(
    () => VISUAL_3D_TOPICS.filter((m) => m.courseId === cur.id),
    [cur.id],
  );

  const groups = useMemo(() => {
    const map = new Map<string, Visual3DTopicSpec[]>();
    for (const m of models) {
      map.set(m.sectionTitle, [...(map.get(m.sectionTitle) ?? []), m]);
    }
    return [...map.entries()];
  }, [models]);

  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [activeId, setActiveId] = useState<string>(() => models[0]?.id ?? '');

  const visibleModels = useMemo(() => {
    if (selectedGroup === 'ALL') return models;
    return models.filter((m) => m.sectionTitle === selectedGroup);
  }, [models, selectedGroup]);

  const activeModel = models.find((m) => m.id === activeId) ?? models[0];
  const activeIndex = models.findIndex((m) => m.id === activeModel?.id);

  const selectGroup = (groupTitle: string) => {
    setSelectedGroup(groupTitle);
    if (groupTitle !== 'ALL' && activeModel?.sectionTitle !== groupTitle) {
      const firstInGroup = models.find((m) => m.sectionTitle === groupTitle);
      if (firstInGroup) setActiveId(firstInGroup.id);
    }
  };

  const goPrev = () => {
    if (!models.length) return;
    const nextIdx = (activeIndex - 1 + models.length) % models.length;
    const nextModel = models[nextIdx];
    setActiveId(nextModel.id);
    if (selectedGroup !== 'ALL' && nextModel.sectionTitle !== selectedGroup) {
      setSelectedGroup(nextModel.sectionTitle);
    }
  };

  const goNext = () => {
    if (!models.length) return;
    const nextIdx = (activeIndex + 1) % models.length;
    const nextModel = models[nextIdx];
    setActiveId(nextModel.id);
    if (selectedGroup !== 'ALL' && nextModel.sectionTitle !== selectedGroup) {
      setSelectedGroup(nextModel.sectionTitle);
    }
  };

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
    <div className="lx-models-tab" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Top Navigation Control Deck: Subject Categories + Topic Pills right above the 3D Stage */}
      <div
        style={{
          border: '1px solid var(--lx-line)',
          borderRadius: 'var(--lx-r-lg)',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
          padding: '16px 18px',
          boxShadow: '0 4px 16px -6px rgba(15, 23, 42, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        {/* Row 1: Subject Category Filter Tabs + Prev/Next Stepper */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
            paddingBottom: 12,
            borderBottom: '1px solid var(--lx-line)',
          }}
        >
          <div
            role="tablist"
            aria-label="3D model subject categories"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedGroup === 'ALL'}
              onClick={() => selectGroup('ALL')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 12px',
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 700,
                cursor: 'pointer',
                border: selectedGroup === 'ALL' ? '1.5px solid var(--lx-accent)' : '1px solid var(--lx-line)',
                background: selectedGroup === 'ALL' ? 'var(--lx-accent)' : '#ffffff',
                color: selectedGroup === 'ALL' ? '#ffffff' : 'var(--lx-ink)',
                transition: 'all 0.15s ease',
              }}
            >
              <Layers size={13} />
              All Subjects ({models.length})
            </button>
            {groups.map(([groupTitle, items]) => {
              const isGroupOn = selectedGroup === groupTitle;
              return (
                <button
                  key={groupTitle}
                  type="button"
                  role="tab"
                  aria-selected={isGroupOn}
                  onClick={() => selectGroup(groupTitle)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    borderRadius: 999,
                    fontSize: 12.5,
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isGroupOn ? '1.5px solid var(--lx-accent)' : '1px solid var(--lx-line)',
                    background: isGroupOn ? 'var(--lx-tint)' : '#ffffff',
                    color: isGroupOn ? 'var(--lx-accent-deep)' : 'var(--lx-ink-2)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {groupTitle}
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      opacity: 0.75,
                    }}
                  >
                    ({items.length})
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              type="button"
              className="lx-btn lx-btn--sm"
              onClick={goPrev}
              title="Previous 3D model"
            >
              <ChevronLeft size={15} /> Prev
            </button>
            <span
              className="lx-meta lx-num"
              style={{ fontWeight: 700, padding: '0 6px', fontSize: 12.5 }}
            >
              {activeIndex + 1} / {models.length}
            </span>
            <button
              type="button"
              className="lx-btn lx-btn--sm"
              onClick={goNext}
              title="Next 3D model"
            >
              Next <ChevronRight size={15} />
            </button>
            {activeModel && (
              <a
                className="lx-btn lx-btn--primary lx-btn--sm"
                href={stepHrefFor(activeModel)}
                style={{ marginLeft: 4 }}
              >
                Open in Lesson <ArrowRight size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Row 2: Topic Pills Grid — Click any topic to switch the 3D model immediately */}
        <div
          role="listbox"
          aria-label="Select 3D Visual Learner topic"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(205px, 1fr))',
            gap: 8,
            maxHeight: 220,
            overflowY: 'auto',
            paddingRight: 2,
          }}
        >
          {visibleModels.map((m) => {
            const isSelected = activeModel?.id === m.id;
            return (
              <button
                key={m.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => setActiveId(m.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  gap: 2,
                  padding: '9px 12px',
                  borderRadius: 10,
                  cursor: 'pointer',
                  border: isSelected ? '2px solid var(--lx-accent)' : '1px solid var(--lx-line)',
                  background: isSelected
                    ? 'linear-gradient(180deg, #fff5f7 0%, #ffeef2 100%)'
                    : '#ffffff',
                  boxShadow: isSelected
                    ? '0 4px 12px -4px rgba(145, 35, 56, 0.22)'
                    : '0 1px 2px rgba(15, 23, 42, 0.03)',
                  transition: 'all 0.14s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: 13,
                      fontWeight: 700,
                      color: isSelected ? 'var(--lx-accent-deep)' : 'var(--lx-ink)',
                      lineHeight: 1.25,
                    }}
                  >
                    <Box
                      size={13}
                      style={{
                        flexShrink: 0,
                        color: isSelected ? 'var(--lx-accent)' : '#64748b',
                      }}
                    />
                    {m.title}
                  </span>
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      color: isSelected ? 'var(--lx-accent)' : '#94a3b8',
                      flexShrink: 0,
                    }}
                  >
                    #{m.num}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11.5,
                    color: '#64748b',
                    lineHeight: 1.3,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {m.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Interactive 3D Studio Stage Directly Below the Topic Switcher */}
      {activeModel && (
        <div
          style={{
            border: '1px solid var(--lx-line)',
            borderRadius: 'var(--lx-r-lg)',
            background: 'var(--lx-surface)',
            padding: 'var(--lx-s4)',
            boxShadow: '0 10px 28px -10px rgba(15, 23, 42, 0.08)',
          }}
        >
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
    </div>
  );
};

export default ModelLibrary;
