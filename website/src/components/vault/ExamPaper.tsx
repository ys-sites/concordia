// Last year's midterm as it was handed out: printed-page look, blank answer spaces, printable.
// Data: content.paperDoc.exam (see paper-a.mjs in the INDU 211 gate source).
import React, { useMemo } from 'react';
import { BookOpen, Printer, Target } from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import type { BomNode, ExamBlock, ExamCell, ExamDoc, ExamTable } from './vaultTypes';
import { BomEdges, BomNodes, BW, layout, PAD } from './BomTree';
import './examPaper.css';

interface Props {
  exam: ExamDoc;
  onSolutions: () => void;
  onDrill: () => void;
}

// "**bold**" spans; everything else goes through MathText (for \$ amounts)
const Rich: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 ? (
        <b key={i}>
          <MathText text={part} />
        </b>
      ) : (
        <MathText key={i} text={part} />
      )
    )}
  </>
);

export const ExamPaper: React.FC<Props> = ({ exam, onSolutions, onDrill }) => (
  <div className="xp-root">
    <div className="xp-bar">
      <span className="xp-bar-text">The paper exactly as it was set. Try it on paper first, then check yourself on the solved page.</span>
      <span className="xp-gap" />
      <button type="button" className="mg-btn small" onClick={() => window.print()}>
        <Printer size={13} />
        <span>Print / save as PDF</span>
      </button>
      <button type="button" className="mg-btn small" onClick={onSolutions}>
        <BookOpen size={13} />
        <span>Solutions</span>
      </button>
      <button type="button" className="mg-btn small primary" onClick={onDrill}>
        <Target size={13} />
        <span>Skill Drill</span>
      </button>
    </div>
    {exam.pages.map((blocks, p) => (
      <section key={p} className="xp-sheet" aria-label={`Page ${p + 1}`}>
        <div className="xp-paper-a">Paper A</div>
        {p === 0 && <h2 className="xp-header">{exam.header}</h2>}
        {blocks.map((b, i) => (
          <XBlock key={i} b={b} />
        ))}
        <div className="xp-foot">Page | {p + 1}</div>
      </section>
    ))}
  </div>
);

const XBlock: React.FC<{ b: ExamBlock }> = ({ b }) => {
  switch (b.type) {
    case 'instructions':
      return (
        <p className="xp-instr">
          <b>General Instructions</b>: <i>{b.text}</i>
        </p>
      );
    case 'h':
      return (
        <p className="xp-h">
          <b>{b.text}</b>
          {b.after && (
            <>
              {' '}
              <Rich text={b.after} />
            </>
          )}
        </p>
      );
    case 'p':
      return (
        <p className="xp-p">
          <Rich text={b.text} />
        </p>
      );
    case 'note':
      return <p className="xp-note">{b.text}</p>;
    case 'quote':
      return (
        <p className="xp-quote">
          <Rich text={b.text} />
        </p>
      );
    case 'mc':
      return (
        <div className="xp-mc">
          <div className="xp-mc-q">
            <span className="xp-n">{b.n}.</span>
            <span>
              <Rich text={b.q} />
            </span>
          </div>
          {b.table && <XTable t={b.table} small />}
          <ol className="xp-opts" type="a">
            {b.opts.map((o, i) => (
              <li key={i}>
                <Rich text={o} />
              </li>
            ))}
          </ol>
        </div>
      );
    case 'table':
      return <XTable t={b} />;
    case 'bom':
      return <XBom trees={b.trees} />;
    case 'sub':
      return (
        <div className="xp-sub">
          <div className="xp-mc-q">
            <span className="xp-n">{b.n}</span>
            <span>
              <Rich text={b.text} />
            </span>
          </div>
          {b.answers && (
            <div className="xp-answers">
              <b>Answer:</b>
              {b.answers.map((a) => (
                <span key={a} className="xp-blank-row">
                  <b>{a}</b>
                  <span className="xp-blank" />
                </span>
              ))}
            </div>
          )}
        </div>
      );
    case 'tf':
      return (
        <div className="xp-tf">
          {b.items.map(([l, s], i) => (
            <div key={i} className="xp-tf-row">
              <span className="xp-tf-l">{l}</span>
              <span className="xp-tf-s">
                <Rich text={s} />
              </span>
              <span className="xp-tf-a">
                <b>Answer:</b>
                <span className="xp-blank short" />
              </span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const cellOf = (c: ExamCell) => (typeof c === 'string' ? { v: c, i: false } : { v: c.v, i: !!c.i });

const XTable: React.FC<{ t: ExamTable; small?: boolean }> = ({ t, small }) => (
  <figure className={`xp-fig ${small ? 'small' : ''}`}>
    {t.title && <figcaption className="xp-table-title">{t.title}</figcaption>}
    <div className="xp-table-wrap">
      <table className={`xp-table ${t.wide ? 'wide' : ''}`}>
        <thead>
          <tr>
            {t.diag ? (
              <th className="xp-diag">
                <span className="xp-diag-top">{t.diag[0]}</span>
                <span className="xp-diag-bottom">{t.diag[1]}</span>
              </th>
            ) : null}
            {t.head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => {
                const x = cellOf(c);
                return (
                  <td key={j} className={`${j === 0 && t.diag ? 'xp-rowhead' : ''} ${x.i ? 'xp-italic' : ''} ${x.v === '' ? 'xp-empty' : ''}`}>
                    <MathText text={x.v} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </figure>
);

const XBom: React.FC<{ trees: BomNode[] }> = ({ trees }) => {
  const laid = useMemo(() => trees.map(layout), [trees]);
  return (
    <figure className="xp-fig xp-bom-fig">
      {laid.map(({ root, width, height }, i) => (
        <svg key={i} className="xp-bom" viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: width * 1.15 }} role="img" aria-label={`BOM diagram for ${root.node.n}`}>
          <g transform={`translate(${PAD + BW / 2}, ${PAD})`}>
            <BomEdges p={root} />
            <BomNodes p={root} hot={null} setHot={() => undefined} />
          </g>
        </svg>
      ))}
    </figure>
  );
};

export default ExamPaper;
