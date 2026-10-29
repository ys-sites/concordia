import React, { useMemo, useState } from 'react';
import { ArrowRight, Printer, Search, X } from 'lucide-react';
import type { Curriculum } from '../model';
import type { FormulaChapter, SheetFormula } from '../../data/miae221Formulas';
import { MIAE221_CONSTANTS, MIAE221_FORMULAS } from '../../data/miae221Formulas';
import { MathBlock, MathText } from '../../utils/mathRenderer';
import { href } from '../router';
import { MIAE221FormulaHub } from '../formula/MIAE221FormulaHub';
import '../styles/formulas.css';

// The course's formulas tab: every formula, chapter by chapter, marked "on the sheet" or "memorise".
const SHEETS: Partial<Record<Curriculum['id'], { chapters: FormulaChapter[]; constants: typeof MIAE221_CONSTANTS }>> = {
  MIAE221: { chapters: MIAE221_FORMULAS, constants: MIAE221_CONSTANTS }
};

export const hasFormulaSheet = (course: Curriculum['id']) => !!SHEETS[course];

type Show = 'all' | 'sheet' | 'memorise';
const plain = (s: string) => s.toLowerCase().replace(/[\\{}$^_]/g, ' ');

const FormulaCard: React.FC<{ f: SheetFormula; cur: Curriculum }> = ({ f, cur }) => {
  const lesson = f.lesson ? cur.sections.flatMap((s) => s.lessons).find((l) => l.id === f.lesson) : undefined;
  return (
    <article className="lx-fs-card">
      <header className="lx-fs-card-head">
        <h3>{f.name}</h3>
        {f.sheet ? <span className="lx-chip lx-chip--good">On the sheet</span> : <span className="lx-chip lx-chip--warn">Memorise</span>}
      </header>
      <MathBlock tex={f.tex} className="lx-fs-tex" />
      <p className="lx-fs-meaning">
        <MathText text={f.meaning} />
      </p>
      {f.vars && f.vars.length > 0 && (
        <table className="lx-vars lx-fs-vars">
          <tbody>
            {f.vars.map(([sym, what, unit]) => (
              <tr key={sym}>
                <th>
                  <MathText text={`$${sym}$`} />
                </th>
                <td>
                  <MathText text={what} />
                </td>
                <td className="lx-meta">{unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {f.note && <p className="lx-meta lx-fs-note">{f.note}</p>}
      {lesson && (
        <a className="lx-fs-lesson" href={href({ name: 'learn', course: cur.id, lesson: lesson.id })}>
          Learn it: {lesson.title} <ArrowRight size={14} aria-hidden />
        </a>
      )}
    </article>
  );
};

export const FormulaSheet: React.FC<{ cur: Curriculum }> = ({ cur }) => {
  if (cur.id === 'MIAE221') {
    return <MIAE221FormulaHub />;
  }
  const data = SHEETS[cur.id];
  const [q, setQ] = useState('');
  const [show, setShow] = useState<Show>('all');
  const [chapter, setChapter] = useState<string>('all');
  const chapters = useMemo(() => {
    if (!data) return [];
    const words = plain(q).split(/\s+/).filter(Boolean);
    return data.chapters
      .filter((c) => chapter === 'all' || c.id === chapter)
      .map((c) => ({
        ...c,
        formulas: c.formulas.filter(
          (f) => (show === 'all' || f.sheet === (show === 'sheet')) && words.every((w) => plain(`${f.name} ${f.meaning} ${f.tex} ${c.title}`).includes(w))
        )
      }))
      .filter((c) => c.formulas.length);
  }, [data, q, show, chapter]);
  if (!data) return <p className="lx-empty">No formula sheet for this course yet.</p>;

  const all = data.chapters.flatMap((c) => c.formulas);
  const onSheet = all.filter((f) => f.sheet).length;
  return (
    <div className="lx-fs">
      <div className="lx-fs-intro">
        <p>
          All <strong className="lx-num">{all.length}</strong> formulas of the course, in lecture order. <span className="lx-chip lx-chip--good">On the sheet</span> means it is printed on
          the official equation sheet you get in the exam ({onSheet} formulas); <span className="lx-chip lx-chip--warn">Memorise</span> means you need it but it is not on the sheet (
          {all.length - onSheet} formulas). The sheet assumes you know general geometry and physics (e.g. area of a circle, mass = density × volume).
        </p>
        <button type="button" className="lx-btn lx-btn--sm" onClick={() => window.print()}>
          <Printer size={15} aria-hidden /> Print
        </button>
      </div>

      <div className="lx-fs-bar">
        <label className="lx-lib-search">
          <Search size={17} aria-hidden />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search formulas (e.g. Bragg, vacancy, flux)…" aria-label="Search the formulas" />
          {q && (
            <button type="button" className="lx-icon-btn" onClick={() => setQ('')} aria-label="Clear the search">
              <X size={16} />
            </button>
          )}
        </label>
        <div className="lx-seg" role="group" aria-label="Which formulas">
          {(['all', 'sheet', 'memorise'] as Show[]).map((s) => (
            <button key={s} type="button" className={show === s ? 'is-on' : ''} aria-pressed={show === s} onClick={() => setShow(s)}>
              {s === 'all' ? 'All' : s === 'sheet' ? 'On the sheet' : 'Memorise'}
            </button>
          ))}
        </div>
      </div>
      <div className="lx-filter-row" role="group" aria-label="Chapter">
        {[{ id: 'all', title: 'All chapters' }, ...data.chapters].map((c) => (
          <button key={c.id} type="button" className={`lx-chip lx-chip-btn${chapter === c.id ? ' is-on' : ''}`} aria-pressed={chapter === c.id} onClick={() => setChapter(c.id)}>
            {c.title}
          </button>
        ))}
      </div>

      {chapters.map((c) => (
        <section key={c.id} className="lx-fs-chapter" aria-labelledby={`fs-${c.id}`}>
          <h2 id={`fs-${c.id}`} className="lx-h2">
            {c.title} <span className="lx-meta">{c.ch}</span>
          </h2>
          <div className="lx-fs-grid">
            {c.formulas.map((f) => (
              <FormulaCard key={f.id} f={f} cur={cur} />
            ))}
          </div>
        </section>
      ))}
      {!chapters.length && <p className="lx-empty">No formula matches “{q}”.</p>}

      {chapter === 'all' && !q && (
        <section className="lx-fs-chapter" aria-labelledby="fs-constants">
          <h2 id="fs-constants" className="lx-h2">
            Constants
          </h2>
          <table className="lx-vars lx-fs-constants">
            <tbody>
              {data.constants.map((k) => (
                <tr key={k.sym}>
                  <th>
                    <MathText text={`$${k.sym}$`} />
                  </th>
                  <td>{k.name}</td>
                  <td>
                    <MathText text={`$${k.value}$`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default FormulaSheet;
