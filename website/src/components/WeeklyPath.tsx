import React from 'react';
import { CalendarDays, Eye, FileText } from 'lucide-react';
import type { CourseWithDocs } from '../data/coursesData';
import type { CourseDocument } from '../types';
import { audio } from '../utils/audio';
import { displayTitle } from '../utils/docOrganization';
import './vault/midtermGate.css';
import './vault/gateExtras.css';

// Week-by-week view of a course's public material: the teacher's notes for that week next to the
// expanded guide, review sheet, mini-course lesson and practice that explain them.
export const WEEKLY_FOLDER = 'Week-by-Week Path';

interface WeekRow {
  role: string;
  files: string[]; // file names (matched against the end of relativePath)
}
interface Week {
  week: string;
  title: string;
  topics: string;
  rows: WeekRow[];
}

const PATHS: Record<string, { intro: string; weeks: Week[] }> = {
  MIAE215: {
    intro:
      'Each week lists the teacher’s slides first, then the expanded guide that explains them, the one-page review sheet, the matching mini-course lesson, and practice. Read in this order.',
    weeks: [
      {
        week: 'Week 1',
        title: 'Introduction to programming & C++',
        topics: 'What a program is, edit → compile → link → run, writing and debugging a first program',
        rows: [
          { role: 'Teacher’s notes', files: ['introduction.pdf'] },
          { role: 'Expanded guide', files: ['Part 1 - C++ Foundations, Memory Architecture & Data Types.pdf'] },
          { role: 'Mini-course', files: ['00 - Mini-Course Overview & Guidelines.pdf', 'Lesson 1 - Software Installation & Setup Guide.pdf', 'Lesson 2 - C++ Programs & First Hello World.pdf'] },
          { role: 'Course roadmap', files: ['MIAE 215 - C++ Master Study Guide & Programming Roadmap.pdf'] }
        ]
      },
      {
        week: 'Week 2',
        title: 'Variable types',
        topics: 'int, double, char, bool, sizes and ranges, overflow, type modifiers, casting',
        rows: [
          { role: 'Teacher’s notes', files: ['variable_types1.pdf', 'variable_types2.pdf', 'variable_types2_type_modifiers.pdf'] },
          { role: 'Expanded guide', files: ['Part 1 - C++ Foundations, Memory Architecture & Data Types.pdf', 'Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.pdf'] },
          { role: 'Review sheet', files: ['Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.pdf'] },
          { role: 'Mini-course', files: ['Lesson 3 - Variable Types, Memory & Sizing.pdf'] },
          { role: 'Practice', files: ['Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.pdf'] }
        ]
      },
      {
        week: 'Week 3',
        title: 'Expressions & operators',
        topics: 'Assignment, integer division and %, ++/--, compound operators, precedence, mixed types, cmath',
        rows: [
          { role: 'Expanded guide', files: ['Part 3 - Expressions, Operators & Math Library Functions.pdf'] },
          { role: 'Review sheet', files: ['Part 3 - Expressions, Precedence & Math Library - Review Sheet.pdf', 'Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.pdf'] },
          { role: 'Mini-course', files: ['Lesson 4 - Expressions, Operators & Precedence.pdf'] },
          { role: 'Practice', files: ['MIAE 215 - Step-by-Step Code Execution & Trace Manual.pdf'] }
        ]
      },
      {
        week: 'Week 4',
        title: 'Control statements I',
        topics: 'if / else-if ladders, relational and logical operators, for and while loops',
        rows: [
          { role: 'Teacher’s notes', files: ['control_statements1.pdf', 'control_statements1_part2.pdf', 'Week 4 - Lecture 1 - Moodle page.pdf', 'Week 4 - Lecture 2 - Moodle page.pdf'] },
          { role: 'Expanded guide', files: ['Part 4 - Control Statements, Logic Flow & Flowcharts.pdf'] },
          { role: 'Review sheet', files: ['Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.pdf'] },
          { role: 'Mini-course', files: ['Lesson 5 - Decision Logic, Branches & Loops.pdf'] },
          { role: 'Practice', files: ['Week 4 In-Person Lecture Problems - Fully Solved Master Guide.pdf'] }
        ]
      },
      {
        week: 'Week 5',
        title: 'Control statements II & output tracing',
        topics: 'break / continue, nested loops, sentinel and validation loops, tracing tables',
        rows: [
          { role: 'Teacher’s notes', files: ['control_statements1_part3.pdf'] },
          { role: 'Expanded guide', files: ['Part 5 - Program Architecture, Output Tracing & Algorithmic Patterns.pdf'] },
          { role: 'Practice', files: ['MIAE 215 - Step-by-Step Code Execution & Trace Manual.pdf', 'Week 4 In-Person Lecture Problems - Fully Solved Master Guide.pdf'] }
        ]
      },
      {
        week: 'Weeks 6–7',
        title: 'Arrays & C-strings',
        topics: '1-D and 2-D arrays, sums, max/min, dot product, char arrays and the null terminator (slides not released yet)',
        rows: [
          { role: 'Mini-course', files: ['Lesson 6 - Arrays & Numerical Processing.pdf'] },
          { role: 'Expanded guide', files: ['Part 5 - Program Architecture, Output Tracing & Algorithmic Patterns.pdf'] }
        ]
      }
    ]
  }
};

export const hasWeeklyPath = (courseId: string) => courseId in PATHS;

export const WeeklyPath: React.FC<{ course: CourseWithDocs; onViewPdf: (doc: CourseDocument) => void }> = ({ course, onViewPdf }) => {
  const path = PATHS[course.id];
  const find = (name: string) => course.documents.find((d) => d.relativePath.endsWith('/' + name));
  return (
    <section className="fx-panel" style={{ '--mg-accent': course.accentHex } as React.CSSProperties}>
      <header className="fx-panel-header">
        <span className="fx-panel-icon">
          <CalendarDays size={20} />
        </span>
        <div className="fx-panel-heading">
          <h2>{WEEKLY_FOLDER}</h2>
        </div>
        <span className="fx-panel-meta">{path.weeks.length} weeks</span>
      </header>
      <p className="mg-section-sub" style={{ padding: '12px 18px 0', margin: 0 }}>
        {path.intro}
      </p>
      {path.weeks.map((w) => (
        <div key={w.week} className="wk-week">
          <div className="mg-small mg-muted">{w.week}</div>
          <h3>{w.title}</h3>
          <div className="mg-small" style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>
            {w.topics}
          </div>
          {w.rows.map((r) => {
            const docs = r.files.map(find).filter((d): d is CourseDocument => !!d);
            if (!docs.length) return null;
            return (
              <div key={r.role} className="wk-row">
                <div className="wk-role">{r.role}</div>
                <div className="wk-docs">
                  {docs.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      className="mg-btn"
                      onClick={() => {
                        audio.playClick();
                        onViewPdf(d);
                      }}
                      title={d.relativePath}
                    >
                      {r.role === 'Teacher’s notes' ? <FileText size={14} /> : <Eye size={14} />}
                      <span>{displayTitle(d)}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default WeeklyPath;
