import React from 'react';
import { CourseId } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { BrandMark } from './BrandMark';
import { VisitorCounter } from './VisitorCounter';
import { audio } from '../utils/audio';
import {
  GraduationCap,
  BookOpen,
  Brain,
  Mail,
  ArrowUp,
  Sparkles,
  Layers,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onSelectCourse: (id: CourseId | null) => void;
  onStartQuiz: (courseId: CourseId | 'ALL') => void;
  onOpenQuestionBank: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCourse,
  onStartQuiz,
  onOpenQuestionBank,
  onOpenContact
}) => {
  const scrollToTop = () => {
    audio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portal-footer" role="contentinfo" aria-label="Portal Footer">
      {/* Top Gradient Edge Accent */}
      <div className="footer-accent-line" />

      <div className="footer-container">
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Institution */}
          <div className="footer-col brand-col">
            <div 
              className="footer-brand-header" 
              onClick={() => {
                audio.playClick();
                onSelectCourse(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
              title="Return to Course Hub"
            >
              <BrandMark size={36} />
              <div className="brand-header-text">
                <span className="brand-school-title">CONCORDIA <span className="brand-gradient-word">ENGINEERING</span></span>
                <span className="brand-school-sub">Gina Cody School of ECS</span>
              </div>
            </div>

            <p className="footer-mission-text">
              High-yield interactive course workspace and exam readiness companion for Semester 1 engineering undergraduates.
            </p>

            <div className="footer-status-pill">
              <span className="footer-pulse-dot" />
              <span className="footer-status-text">System Operational · Fall 2026 Scope</span>
            </div>

            {/* Embedded Live Visitor Counter */}
            <div className="footer-telemetry-box">
              <span className="telemetry-label">Live Site Activity</span>
              <VisitorCounter />
            </div>
          </div>

          {/* Column 2: Semester 1 Courses */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <GraduationCap size={16} className="text-amber" />
              <span>Core Courses</span>
            </h3>
            <ul className="footer-links-list">
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <button
                    className="footer-course-link"
                    onClick={() => {
                      audio.playClick();
                      onSelectCourse(course.id);
                    }}
                  >
                    <span 
                      className="footer-course-code-pill"
                      style={{ 
                        backgroundColor: `${course.accentHex}18`, 
                        color: course.accentHex,
                        borderColor: `${course.accentHex}40`
                      }}
                    >
                      {course.code}
                    </span>
                    <span className="footer-link-label">{course.name}</span>
                    <ChevronRight size={13} className="footer-link-chevron" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Learning & Practice Tools */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <Brain size={16} className="text-indigo" />
              <span>Practice &amp; Study Tools</span>
            </h3>
            <ul className="footer-links-list">
              <li>
                <button
                  className="footer-nav-link"
                  onClick={() => {
                    audio.playClick();
                    onStartQuiz('ALL');
                  }}
                >
                  <Sparkles size={14} className="text-amber" />
                  <span>Start a Practice Drill</span>
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-link"
                  onClick={() => {
                    audio.playClick();
                    onOpenQuestionBank();
                  }}
                >
                  <BookOpen size={14} className="text-indigo" />
                  <span>Full Question Bank Explorer</span>
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-link"
                  onClick={() => {
                    audio.playClick();
                    onSelectCourse(null);
                  }}
                >
                  <Layers size={14} className="text-emerald" />
                  <span>All Course Study Guides &amp; PDFs</span>
                </button>
              </li>
              <li>
                <button
                  className="footer-nav-link"
                  onClick={() => {
                    audio.playClick();
                    onStartQuiz('ENGR213');
                  }}
                >
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>Past Midterm &amp; Exam Pools</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Feedback & Academic Accreditation */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <Mail size={16} className="text-rose" />
              <span>Feedback &amp; Inquiries</span>
            </h3>
            <p className="footer-col-subtext">
              Have a question, suggestion, or found a typo? Submit a note directly to help keep course resources accurate.
            </p>
            <button
              className="footer-cta-btn"
              onClick={() => {
                audio.playClick();
                onOpenContact();
              }}
              title="Open feedback modal"
            >
              <Mail size={15} />
              <span>Contact &amp; Submit Feedback</span>
            </button>

            <div className="footer-disclaimer-note">
              <strong>Academic Notice:</strong> Independent student review resource designed to complement, not replace, official Concordia course instruction and faculty syllabi.
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            <span>© 2025–2026 Concordia University</span>
            <span className="footer-dot-sep">·</span>
            <span>Department of Mechanical, Industrial &amp; Aerospace Engineering (MIAE)</span>
          </div>

          <div className="footer-bottom-actions">
            <span className="footer-tag-academic">Gina Cody School of ECS</span>
            <button 
              className="footer-scroll-top-btn" 
              onClick={scrollToTop}
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
