import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  KeyRound,
  FileText,
  Eye,
  ExternalLink,
  Calendar,
  Video,
  Award,
  AlertTriangle,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import { CourseDocument } from '../types';
import { CourseWithDocs } from '../data/coursesData';
import {
  FILTERED_COURSES_DATA,
  FilteredDocItem,
  INDU211_TERM_PAPER_DOCS
} from '../data/filteredDocumentsData';

interface TermPaperVaultSectionProps {
  course: CourseWithDocs;
  onViewPdf: (doc: CourseDocument) => void;
}

const SESSION_STORAGE_KEY = 'concordia_term_paper_vault_unlocked';
const isPasswordValid = (input: string) => input.trim().toLowerCase() === 'omar';

const formatFileSize = (bytes?: number) => {
  if (!bytes) return '';
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
};

export const TermPaperVaultSection: React.FC<TermPaperVaultSectionProps> = ({
  course,
  onViewPdf
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return typeof window !== 'undefined' && sessionStorage.getItem(SESSION_STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim() || isUnlocking) return;

    if (isPasswordValid(passwordInput)) {
      audio.playCorrect();
      setIsUnlocking(true);
      setTimeout(() => {
        setIsUnlocked(true);
        setIsUnlocking(false);
        try {
          sessionStorage.setItem(SESSION_STORAGE_KEY, '1');
        } catch {
          // ignore
        }
      }, 350);
    } else {
      audio.playIncorrect();
      setHasAttempted(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 450);
    }
  };

  const handleLockAgain = () => {
    audio.playClick();
    setIsUnlocked(false);
    setPasswordInput('');
    setHasAttempted(false);
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const projectDocs: FilteredDocItem[] =
    FILTERED_COURSES_DATA['INDU211']?.termPaperDocs || INDU211_TERM_PAPER_DOCS;

  if (!isUnlocked) {
    return (
      <section
        className={`fx-panel vault-card-enter ${isShaking ? 'shake-incorrect' : ''}`}
        style={{ padding: '56px 24px', textAlign: 'center', transition: 'all 0.2s ease' }}
      >
        <div style={{ maxWidth: '440px', margin: '0 auto' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              backgroundColor: isUnlocking ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              border: '1.5px solid rgba(16, 185, 129, 0.25)',
              transition: 'all 0.25s ease'
            }}
            className={isUnlocking ? 'pulse-correct' : ''}
          >
            {isUnlocking ? <Unlock size={30} /> : <KeyRound size={30} />}
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Term Paper & Final Project Vault
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
            This vault contains confidential project deliverables, proposals, and presentation guides for <strong>INDU 211</strong>. Enter authorization key to proceed.
          </p>

          <form onSubmit={handleUnlock}>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (hasAttempted) setHasAttempted(false);
                }}
                disabled={isUnlocking}
                placeholder="Enter access key…"
                autoFocus
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-highlight)',
                  backgroundColor: 'var(--bg-card-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  outline: 'none',
                  textAlign: 'center',
                  letterSpacing: '0.12em'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isUnlocking}
              className="action-btn primary-glow-btn"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: '#059669',
                borderColor: '#059669'
              }}
            >
              <Unlock size={16} />
              <span>{isUnlocking ? 'Access Granted…' : 'Unlock Term Paper Vault'}</span>
            </button>
          </form>

          {hasAttempted && !isPasswordValid(passwordInput) && (
            <div
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#dc2626',
                fontSize: '13px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                lineHeight: 1.4
              }}
            >
              <AlertTriangle size={16} style={{ flexShrink: 0 }} />
              <span>Incorrect key. Access denied to Term Paper Vault.</span>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <div className="vault-unlocked-enter" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Banner */}
      <div
        style={{
          padding: '18px 22px',
          borderRadius: '12px',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 100%)',
          border: '1.5px solid rgba(16, 185, 129, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              backgroundColor: '#059669',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.04em'
            }}
          >
            INDU 211
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Term Paper & Final Project Vault
              </h1>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <CheckCircle2 size={12} />
                Unlocked
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '3px 0 0' }}>
              Official Group Project · 20% Total Course Weight · The Future of Industrial Engineering in the GenAI Era
            </p>
          </div>
        </div>

        <button
          onClick={handleLockAgain}
          className="fx-btn"
          style={{
            fontSize: '12.5px',
            padding: '7px 14px',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-card-subtle)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="Re-lock this vault"
        >
          <Lock size={14} />
          <span>Lock Vault</span>
        </button>
      </div>

      {/* Project Theme & Instructions Panel */}
      <section className="fx-panel" style={{ padding: '20px 24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
          Research Mandate: "The Future of Industrial Engineering in the Generative AI (GenAI) Era"
        </h2>
        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
          Students analyze how LLMs, generative vision models, and multi-modal autonomous agents impact traditional industrial engineering disciplines—including supply chain optimization, automated facility layout planning, predictive maintenance, quality control (SPC), and human-robot collaborative work cells.
        </p>

        {/* 3 Milestone Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px', marginTop: '18px' }}>
          {/* Phase 1 */}
          <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: 'var(--bg-surface)', border: '1.5px solid rgba(16, 185, 129, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase' }}>
              <Calendar size={14} />
              <span>Phase 1: Project Proposal</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>
              1-Page Official Form (Due Oct 8, 2026)
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
              Submission of group members, chosen industrial domain, thesis statement, and preliminary literature bibliography.
            </div>
          </div>

          {/* Phase 2 */}
          <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: 'var(--bg-surface)', border: '1.5px solid rgba(217, 119, 6, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase' }}>
              <Video size={14} />
              <span>Phase 2: Video Presentation</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>
              15-Minute Video & Script (Due Dec 1, 2026)
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
              Recorded multimedia video presentation and word-for-word timed narration guide explaining findings.
            </div>
          </div>

          {/* Phase 3 */}
          <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: 'var(--bg-surface)', border: '1.5px solid rgba(124, 58, 237, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7c3aed', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase' }}>
              <Award size={14} />
              <span>Phase 3: Final Master Report</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px' }}>
              10-Page Master Report (Final Exam Date)
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
              Comprehensive IEEE-formatted academic paper with mathematical formulation, case studies, and recommendations.
            </div>
          </div>
        </div>
      </section>

      {/* Categorized Document Groups */}
      {(() => {
        const deliverables = projectDocs.filter(
          (d) => !d.filename.toLowerCase().includes('moodle') && !d.filename.toLowerCase().includes('description')
        );
        const instructions = projectDocs.filter((d) => d.filename.toLowerCase().includes('description'));
        const moodleGuides = projectDocs.filter((d) => d.filename.toLowerCase().includes('moodle'));

        const renderDocRow = (doc: FilteredDocItem, idx: number, badgeColor: string, badgeBg: string, badgeBorder: string) => {
          const url = getPdfUrl(doc.relativePath);
          return (
            <li key={doc.id} className="fx-file-row">
              <span className="fx-file-number">{idx + 1}</span>
              <FileText size={18} className="fx-file-icon" />
              <button
                className="fx-file-main"
                onClick={() => {
                  audio.playClick();
                  onViewPdf({ ...doc, summary: doc.summary || doc.title });
                }}
              >
                <span className="fx-file-title">{doc.title}</span>
                <span className="fx-file-meta">
                  <span className="fx-file-size">{formatFileSize(doc.fileSizeBytes)}</span>
                  {(doc.tags || []).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '1px 6px',
                        borderRadius: '4px',
                        backgroundColor: badgeBg,
                        color: badgeColor,
                        border: `1px solid ${badgeBorder}`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </button>
              <div className="fx-file-actions">
                <button
                  className="fx-btn fx-btn-primary"
                  onClick={() => {
                    audio.playClick();
                    onViewPdf({ ...doc, summary: doc.summary || doc.title });
                  }}
                  title="Open in modal PDF viewer"
                >
                  <Eye size={14} />
                  <span>View</span>
                </button>
                <a
                  className="fx-btn fx-btn-tab"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in a new tab"
                  onClick={() => audio.playClick()}
                >
                  <ExternalLink size={14} />
                  <span>New Tab</span>
                </a>
              </div>
            </li>
          );
        };

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Group 1: Official Student Deliverables */}
            <section className="fx-panel">
              <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <span className="fx-panel-icon" style={{ color: '#059669' }}><Award size={20} /></span>
                  <div className="fx-panel-heading">
                    <h2>Official Team Deliverables (Milestones 1, 2 & 3)</h2>
                  </div>
                  <span className="fx-panel-meta">{deliverables.length} files · Master Submissions</span>
                </div>
              </header>
              <ol className="fx-file-list">
                {deliverables.map((doc, idx) =>
                  renderDocRow(doc, idx, '#059669', 'rgba(16, 185, 129, 0.1)', 'rgba(16, 185, 129, 0.25)')
                )}
              </ol>
            </section>

            {/* Group 2: Professor Guidelines & Rubric */}
            <section className="fx-panel">
              <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <span className="fx-panel-icon" style={{ color: '#d97706' }}><FileText size={20} /></span>
                  <div className="fx-panel-heading">
                    <h2>Professor Handout & Evaluation Criteria</h2>
                  </div>
                  <span className="fx-panel-meta">{instructions.length} file · Fall 2026 Rubric</span>
                </div>
              </header>
              <ol className="fx-file-list">
                {instructions.map((doc, idx) =>
                  renderDocRow(doc, idx, '#d97706', 'rgba(217, 119, 6, 0.1)', 'rgba(217, 119, 6, 0.25)')
                )}
              </ol>
            </section>

            {/* Group 3: Moodle Submission Instructions */}
            <section className="fx-panel">
              <header className="fx-panel-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <span className="fx-panel-icon" style={{ color: '#6366f1' }}><Layers size={20} /></span>
                  <div className="fx-panel-heading">
                    <h2>Moodle Submission Procedures</h2>
                  </div>
                  <span className="fx-panel-meta">{moodleGuides.length} files · Step-by-Step Guides</span>
                </div>
              </header>
              <ol className="fx-file-list">
                {moodleGuides.map((doc, idx) =>
                  renderDocRow(doc, idx, '#6366f1', 'rgba(99, 102, 241, 0.1)', 'rgba(99, 102, 241, 0.25)')
                )}
              </ol>
            </section>
          </div>
        );
      })()}
    </div>
  );
};
