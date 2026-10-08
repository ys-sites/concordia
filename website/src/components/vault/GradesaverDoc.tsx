import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles, Target } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import { getPdfUrl } from '../../utils/pdfUrl';
import type { CourseDocument } from '../../types';
import type { GateContent } from './vaultTypes';

// ENGR 213 tutor notes and the 5-phase solving system.
export const GradesaverDoc: React.FC<{ content: GateContent; onViewPdf: (doc: CourseDocument) => void }> = ({ content, onViewPdf }) => {
  const g = content.gradesaver!;
  const [tab, setTab] = useState(0);
  const t = g.tabs[tab];
  return (
    <div className="mg-root" style={{ gap: 14 }}>
      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Sparkles size={17} /> Gradesaver: tutor notes & system of solving
        </h3>
        <p className="mg-section-sub">
          <MathText text={g.intro} />
        </p>
        <div className="mg-callouts">
          {g.docs.map((d) => (
            <div key={d.path} className="mg-callout" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <b>{d.tag}</b>
              <div style={{ fontWeight: 700 }}>{d.title}</div>
              <div className="mg-small" style={{ color: 'var(--text-secondary)' }}>
                {d.blurb}
              </div>
              <div className="dr-actions">
                <button
                  type="button"
                  className="mg-btn primary small"
                  onClick={() =>
                    onViewPdf({
                      id: `ENGR213:gate:${d.path}`,
                      courseId: 'ENGR213',
                      categoryId: 'Midterm Gate',
                      categoryTitle: 'Gradesaver',
                      title: d.title,
                      filename: d.path.split('/').pop()!,
                      relativePath: d.path,
                      fileSizeBytes: d.size,
                      tags: ['Gradesaver'],
                      summary: d.blurb
                    } as CourseDocument)
                  }
                >
                  <Eye size={13} /> View
                </button>
                <a className="mg-btn small" href={getPdfUrl(d.path)} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={13} /> New tab
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mg-panel mg-panel-pad">
        <h3 className="mg-section-title">
          <Target size={17} /> The move for each equation type
        </h3>
        <div className="mg-tabs" style={{ margin: '8px 0 12px' }}>
          {g.tabs.map((x, i) => (
            <button key={x.label} type="button" className={`mg-tab ${tab === i ? 'active' : ''}`} onClick={() => setTab(i)}>
              {i + 1}. {x.label}
            </button>
          ))}
        </div>
        <div className="mg-callout study" style={{ marginBottom: 10 }}>
          <b>The move here</b>
          <MathText text={t.move} />
        </div>
        <div className="mg-callout" style={{ marginBottom: 10 }}>
          <b>5-phase sequence</b>
          <MathText text={t.sequence} />
        </div>
        <div className="mg-callout">
          <b>{t.exemplar.title}</b>
          {t.exemplar.lines.map((l, i) => (
            <div key={i} style={{ marginTop: 4 }}>
              <MathText text={l} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GradesaverDoc;
