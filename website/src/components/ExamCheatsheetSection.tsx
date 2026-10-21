import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  Download,
  Eye,
  Printer,
  ExternalLink,
  AlertTriangle,
  FileText,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument } from '../types';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';

interface ExamCheatsheetSectionProps {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument) => void;
  onBack: () => void;
}

export const ExamCheatsheetSection: React.FC<ExamCheatsheetSectionProps> = ({
  course,
  onViewPdf,
  onBack
}) => {
  const isMiae215 = course.id === 'MIAE215';
  const isMiae221 = course.id === 'MIAE221';

  // Strict 1-Page Single-Sided Cheatsheet
  const onePagePdfFilename = isMiae215
    ? 'MIAE 215 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf'
    : 'MIAE 221 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf';

  const onePageRelativePath = isMiae215
    ? 'Miae 215/03 - 1-Page Rapid Review Sheets/MIAE 215 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf'
    : 'Miae 221/03 - 1-Page Rapid Review Sheets/MIAE 221 - Midterm 1-Page Exam Cheatsheet (Single-Sided).pdf';

  const onePageHtmlUrl = isMiae215
    ? '/cheatsheets/miae215-midterm.html'
    : '/cheatsheets/miae221-midterm.html';

  const onePagePublicPdfUrl = isMiae215
    ? '/cheatsheets/miae215-cheatsheet.pdf'
    : '/cheatsheets/miae221-cheatsheet.pdf';

  // Comprehensive Multi-Page Master Guide
  const masterGuidePdfFilename = isMiae215
    ? 'MIAE 215 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf'
    : 'MIAE 221 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf';

  const masterGuideRelativePath = isMiae215
    ? 'Miae 215/03 - 1-Page Rapid Review Sheets/MIAE 215 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf'
    : 'Miae 221/03 - 1-Page Rapid Review Sheets/MIAE 221 - Midterm 1-Page Document Cheatsheet & Exam Survival Guide.pdf';

  const handleOpenOnePagePdf = () => {
    audio.playClick();
    onViewPdf({
      id: `${course.id}:cheatsheet-1page`,
      courseId: course.id,
      categoryId: '03 - 1-Page Rapid Review Sheets',
      categoryTitle: 'Cheatsheet for the Exam',
      title: `${course.code} — Official 1-Page Exam Cheatsheet (Single-Sided)`,
      filename: onePagePdfFilename,
      relativePath: onePageRelativePath,
      tags: [course.code, 'Cheatsheet', '1-Page', 'Exam Ready'],
      summary: 'Strict single-sided 1-page exam cheatsheet formatted at 10pt font on Letter size.'
    });
  };

  const handleOpenMasterGuide = () => {
    audio.playClick();
    onViewPdf({
      id: `${course.id}:cheatsheet-master`,
      courseId: course.id,
      categoryId: '03 - 1-Page Rapid Review Sheets',
      categoryTitle: 'Cheatsheet for the Exam',
      title: `${course.code} — Comprehensive Master Document Cheatsheet & Exam Survival Guide`,
      filename: masterGuidePdfFilename,
      relativePath: masterGuideRelativePath,
      tags: [course.code, 'Master Guide', 'Extended Study Guide'],
      summary: 'Comprehensive multi-page master document cheatsheet and exam survival guide.'
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <button
          className="back-btn"
          onClick={() => {
            audio.playClick();
            onBack();
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to {course.code} Folders</span>
        </button>

        <a
          href="/cheatsheets/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="fx-btn fx-btn-tab"
          style={{ fontSize: '12.5px', padding: '6px 12px' }}
        >
          <ExternalLink size={14} />
          <span>Open Public Cheatsheet Hub</span>
        </a>
      </div>

      {/* Main Banner */}
      <div
        style={{
          padding: '20px 24px',
          borderRadius: '12px',
          background: isMiae215
            ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)'
            : 'linear-gradient(135deg, rgba(225, 29, 72, 0.08) 0%, rgba(225, 29, 72, 0.02) 100%)',
          border: isMiae215
            ? '1.5px solid rgba(16, 185, 129, 0.4)'
            : '1.5px solid rgba(225, 29, 72, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: isMiae215 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(225, 29, 72, 0.15)',
              color: isMiae215 ? '#059669' : '#be123c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Sparkles size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '6px',
                  backgroundColor: isMiae215 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(225, 29, 72, 0.2)',
                  color: isMiae215 ? '#047857' : '#9f1239',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                {isMiae215 ? 'Official Moodle Compliant · Exactly 1 Page' : 'Callister Modules 1–12 · Exactly 1 Page'}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: isMiae215 ? '#059669' : '#be123c' }}>
                {isMiae215 ? 'Exam: Thursday, Oct 22 · 8:45–10:00 AM' : 'Midterm: Friday, Oct 30'}
              </span>
            </div>
            <h1 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              {course.code} — Cheatsheet for the Exam
            </h1>
          </div>
        </div>

        {/* Moodle Policy Notice */}
        {isMiae215 && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#b45309', marginBottom: '4px' }}>
              <AlertTriangle size={16} />
              <span>Dr. Gordon’s Moodle Cheat Sheet Rules:</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>One side only of one sheet:</strong> Front side only, back must be completely blank.</li>
              <li><strong>Text no smaller than 10 pt:</strong> Nothing tiny. Printed or hand-written.</li>
              <li><strong>Only authorized aid:</strong> Only aid besides a faculty-approved calculator with sticker.</li>
              <li><strong>Exam breakdown:</strong> 40% program-output table tracing / 60% write-a-program.</li>
            </ul>
          </div>
        )}

        {isMiae221 && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: 'rgba(225, 29, 72, 0.05)',
              border: '1px solid rgba(225, 29, 72, 0.2)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}
          >
            <strong>Callister Chapters 1–7.4 Master Guide:</strong> Bonding potential wells, FCC/BCC/HCP lattice geometry table, Miller indices for directions and planes, Bragg’s law XRD peak rules, Hume-Rothery criteria, Schmid’s law slip, Fick’s diffusion laws, and tensile stress-strain landmarks.
          </div>
        )}
      </div>

      {/* Two Column Option Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '18px' }}>
        {/* CARD 1: STRICT 1-PAGE EXAM CHEATSHEET */}
        <div
          className="fx-panel"
          style={{
            border: isMiae215 ? '2px solid #10b981' : '2px solid #f43f5e',
            background: 'var(--bg-surface)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 4px 14px -2px rgba(0, 0, 0, 0.06)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: isMiae215 ? '#059669' : '#be123c',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              ⭐ Primary Exam Aide (1 Page Verified)
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#10b981' }}>
              ✓ Exactly 1 Page · 10pt Font
            </span>
          </div>

          <h2 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Official 1-Page Exam Cheatsheet (Single-Sided)
          </h2>

          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            Compiled to <strong>exactly 1 physical page</strong> at 10pt font. Contains every essential formula, table, syntax rule, and exam trap required for the midterm. Print this single-sided and you are 100% compliant with faculty rules.
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '8px' }}>
            <a
              className="fx-btn"
              style={{
                background: isMiae215 ? '#059669' : '#be123c',
                color: '#ffffff',
                border: 'none',
                padding: '9px 16px',
                fontSize: '13.5px',
                fontWeight: 700,
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              href={getPdfUrl(onePageRelativePath)}
              download={onePagePdfFilename}
              onClick={() => audio.playClick()}
              title="Download 1-page PDF"
            >
              <Download size={16} />
              <span>Download 1-Page PDF</span>
            </a>

            <button
              className="fx-btn fx-btn-primary"
              style={{ padding: '9px 14px', fontSize: '13px' }}
              onClick={handleOpenOnePagePdf}
              title="Preview 1-page PDF in in-app modal"
            >
              <Eye size={15} />
              <span>Preview (In-App)</span>
            </button>

            <a
              className="fx-btn fx-btn-tab"
              style={{ padding: '9px 14px', fontSize: '13px' }}
              href={onePageHtmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audio.playClick()}
              title="Open printable HTML version"
            >
              <Printer size={15} />
              <span>Printable Web Version</span>
            </a>

            <a
              className="fx-btn fx-btn-tab"
              style={{ padding: '9px 14px', fontSize: '13px' }}
              href={onePagePublicPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audio.playClick()}
              title="Direct public file URL"
            >
              <ExternalLink size={15} />
              <span>Public Link</span>
            </a>
          </div>
        </div>

        {/* CARD 2: COMPREHENSIVE MASTER STUDY GUIDE */}
        <div
          className="fx-panel"
          style={{
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              📖 Extended Study Companion
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
              {isMiae215 ? '5 Pages' : '6 Pages'} · Deep Dive
            </span>
          </div>

          <h2 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Comprehensive Master Document Cheatsheet &amp; Exam Survival Guide
          </h2>

          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            {isMiae215
              ? 'Complete extended reference containing code skeletons, step-by-step table tracing protocol with uninitialized memory traps, 2D matrix algorithms, C-string manipulation, dynamic memory allocation with null checks, and Flowgorithm flowchart symbol reference.'
              : 'In-depth reference covering detailed bonding curve derivations, close-packed planar & linear density proofs, FCC/BCC XRD peak systematically absent reflections, Hall-Petch grain strengthening, and engineering stress-strain curve landmarks.'}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '8px' }}>
            <a
              className="fx-btn fx-btn-tab"
              style={{
                border: '1px solid var(--border-subtle)',
                padding: '9px 16px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              href={getPdfUrl(masterGuideRelativePath)}
              download={masterGuidePdfFilename}
              onClick={() => audio.playClick()}
              title="Download Master Guide PDF"
            >
              <Download size={15} />
              <span>Download Master Guide PDF</span>
            </a>

            <button
              className="fx-btn fx-btn-primary"
              style={{ padding: '9px 14px', fontSize: '13px' }}
              onClick={handleOpenMasterGuide}
              title="Preview Master Guide in in-app modal"
            >
              <Eye size={15} />
              <span>Preview Master Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Live Preview Frame of the 1-Page Cheatsheet */}
      <div className="fx-panel" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} style={{ color: isMiae215 ? '#059669' : '#be123c' }} />
            <h3 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>
              Live Print-Ready 1-Page Cheatsheet Preview
            </h3>
          </div>
          <button
            className="fx-btn fx-btn-primary"
            style={{ fontSize: '12.5px', padding: '6px 12px' }}
            onClick={() => {
              const win = window.open(onePageHtmlUrl, '_blank');
              if (win) win.focus();
            }}
          >
            <Printer size={14} />
            <span>Open &amp; Print</span>
          </button>
        </div>

        <div
          style={{
            width: '100%',
            height: '620px',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden',
            backgroundColor: '#ffffff'
          }}
        >
          <iframe
            src={onePageHtmlUrl}
            title={`${course.code} 1-Page Cheatsheet Preview`}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};
