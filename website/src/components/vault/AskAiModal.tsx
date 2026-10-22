import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Calculator,
  AlertTriangle,
  Compass,
  X,
  Lightbulb,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { MathText } from '../../utils/mathRenderer';
import { audio } from '../../utils/audio';
import './askAiModal.css';

export interface AskAiProblemContext {
  id?: string;
  courseTitle?: string;
  topic?: string;
  questionText: string;
  options?: Array<{ key: string; text: string }>;
  answerText?: string;
  solution?: string;
  steps?: string[];
  note?: string;
  keyTrap?: string;
}

interface AskAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  problem: AskAiProblemContext;
}

type ExplainerTab = 'intuition' | 'numbers' | 'traps' | 'pattern';

export const AskAiModal: React.FC<AskAiModalProps> = ({ isOpen, onClose, problem }) => {
  const [activeTab, setActiveTab] = useState<ExplainerTab>('intuition');
  const [copied, setCopied] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');
  const [showRawPrompt, setShowRawPrompt] = useState(false);

  // Build a structured, high-yield prompt for Claude / ChatGPT
  const generatedPrompt = useMemo(() => {
    const lines: string[] = [];
    lines.push('You are an expert engineering professor and tutor at Concordia University.');
    lines.push('I am a student studying for an exam. Please help me understand this problem thoroughly.');
    lines.push('');
    if (problem.courseTitle) {
      lines.push(`**Course**: ${problem.courseTitle}`);
    }
    if (problem.topic) {
      lines.push(`**Topic**: ${problem.topic}`);
    }
    lines.push('');
    lines.push('### Problem:');
    lines.push(problem.questionText);
    lines.push('');
    if (problem.options && problem.options.length > 0) {
      lines.push('### Multiple-Choice Options:');
      problem.options.forEach((opt) => {
        lines.push(`- (${opt.key}) ${opt.text}`);
      });
      lines.push('');
    }
    if (problem.answerText) {
      lines.push(`### Verified Correct Answer:`);
      lines.push(problem.answerText);
      lines.push('');
    }
    if (problem.steps && problem.steps.length > 0) {
      lines.push('### Current Solution Steps Provided:');
      problem.steps.forEach((s, idx) => {
        lines.push(`${idx + 1}. ${s}`);
      });
      lines.push('');
    }
    if (problem.note) {
      lines.push(`### Instructor Note / Pitfall:`);
      lines.push(problem.note);
      lines.push('');
    }

    lines.push('---');
    if (customQuestion.trim()) {
      lines.push(`### My Specific Question:`);
      lines.push(customQuestion.trim());
      lines.push('');
      lines.push('Please answer my question directly, with clear intuition and full line-by-line calculations showing every number.');
    } else if (activeTab === 'numbers') {
      lines.push('### Request:');
      lines.push('Please provide the COMPLETE step-by-step arithmetic without skipping ANY numbers or intermediate algebra. Show every variable substitution explicitly with its units, followed by the exact calculator keystroke / calculation reduction.');
    } else if (activeTab === 'traps') {
      lines.push('### Request:');
      lines.push('Please analyze the common exam pitfalls for this problem. Why do students get this wrong, what distractors appear on tests, and how do I avoid them?');
    } else if (activeTab === 'pattern') {
      lines.push('### Request:');
      lines.push('How do I recognize this exact problem type on a timed exam within 10 seconds? What are the key signature keywords and equation structures?');
    } else {
      lines.push('### Request:');
      lines.push('Please explain the fundamental intuition behind this solution like I am an engineering student. Why does this method work, what is the underlying physical or mathematical idea, and how do the steps connect logically?');
    }

    return lines.join('\n');
  }, [problem, customQuestion, activeTab]);

  if (!isOpen) return null;

  const handleCopy = () => {
    audio.playClick();
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const openClaude = () => {
    audio.playClick();
    handleCopy();
    window.open('https://claude.ai/new', '_blank', 'noopener,noreferrer');
  };

  const openChatGPT = () => {
    audio.playClick();
    handleCopy();
    window.open('https://chatgpt.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="aai-backdrop" onClick={onClose}>
      <div className="aai-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="aai-header">
          <div className="aai-title-wrap">
            <div className="aai-icon-badge">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="aai-title">Ask AI Tutor &amp; Calculation Engine</h3>
              <p className="aai-subtitle">
                Instant conceptual intuition, complete numbers breakdown &amp; 1-click Claude / ChatGPT prompt
              </p>
            </div>
          </div>
          <button type="button" className="aai-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Problem Snapshot Card */}
        <div className="aai-problem-card">
          <div className="aai-problem-meta">
            {problem.courseTitle && <span className="aai-tag course">{problem.courseTitle}</span>}
            {problem.topic && <span className="aai-tag topic">{problem.topic}</span>}
            <span className="aai-tag verified">Verified Exam Problem</span>
          </div>
          <div className="aai-problem-body">
            <MathText text={problem.questionText} />
          </div>
          {problem.answerText && (
            <div className="aai-answer-preview">
              <span className="aai-ans-label">Correct Answer:</span>
              <span className="aai-ans-val">
                <MathText text={problem.answerText} />
              </span>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="aai-tabs">
          <button
            type="button"
            className={`aai-tab${activeTab === 'intuition' ? ' active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('intuition');
            }}
          >
            <Lightbulb size={15} />
            <span>Intuitive Breakdown</span>
          </button>

          <button
            type="button"
            className={`aai-tab${activeTab === 'numbers' ? ' active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('numbers');
            }}
          >
            <Calculator size={15} />
            <span>Show Complete Numbers</span>
          </button>

          <button
            type="button"
            className={`aai-tab${activeTab === 'traps' ? ' active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('traps');
            }}
          >
            <AlertTriangle size={15} />
            <span>Exam Traps &amp; Pitfalls</span>
          </button>

          <button
            type="button"
            className={`aai-tab${activeTab === 'pattern' ? ' active' : ''}`}
            onClick={() => {
              audio.playClick();
              setActiveTab('pattern');
            }}
          >
            <Compass size={15} />
            <span>10-Sec Recognition</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="aai-content-panel">
          {activeTab === 'intuition' && (
            <div className="aai-pane">
              <h4 className="aai-pane-title">
                <Lightbulb size={16} /> How this problem works conceptually
              </h4>
              <p className="aai-text">
                Rather than memorizing arbitrary formulas, identify the core engineering principle:
              </p>
              {problem.steps && problem.steps.length > 0 ? (
                <ol className="aai-steps-list">
                  {problem.steps.map((st, i) => (
                    <li key={i} className="aai-step-item">
                      <span className="aai-step-num">{i + 1}</span>
                      <div className="aai-step-text">
                        <MathText text={st} />
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="aai-box">
                  <p className="aai-text">
                    This question tests your ability to translate the given physical conditions directly into standard mathematical notation.
                    Use the <strong>1-Click Claude Prompt</strong> below to ask Claude to break down every concept step-by-step!
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'numbers' && (
            <div className="aai-pane">
              <h4 className="aai-pane-title">
                <Calculator size={16} /> Complete Numerical Calculations (No Skips)
              </h4>
              <p className="aai-text">
                Avoid skipped intermediate algebra. Plug in each number with its physical units:
              </p>
              <div className="aai-calc-box">
                <div className="aai-calc-row">
                  <span className="aai-calc-label">1. Target Variable &amp; Formula:</span>
                  <div className="aai-calc-math">
                    <MathText text={problem.steps?.[0] || 'Identify primary equation and substitute given coefficients.'} />
                  </div>
                </div>
                {problem.steps && problem.steps.length > 1 && (
                  <div className="aai-calc-row">
                    <span className="aai-calc-label">2. Numerical Substitution &amp; Reduction:</span>
                    <div className="aai-calc-math">
                      {problem.steps.slice(1).map((s, idx) => (
                        <div key={idx} style={{ marginBottom: 4 }}>
                          <MathText text={s} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="aai-calc-row answer-row">
                  <span className="aai-calc-label">3. Final Evaluated Value:</span>
                  <div className="aai-calc-math final-val">
                    <MathText text={problem.answerText || 'See solution answer box.'} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'traps' && (
            <div className="aai-pane">
              <h4 className="aai-pane-title">
                <AlertTriangle size={16} /> High-Probability Gordon / Medraj / Haghighat Traps
              </h4>
              {problem.note || problem.keyTrap ? (
                <div className="aai-trap-box">
                  <div className="aai-trap-header">⚠️ Examiner Trap Alert:</div>
                  <div className="aai-trap-body">
                    <MathText text={problem.note || problem.keyTrap || ''} />
                  </div>
                </div>
              ) : (
                <ul className="aai-trap-list">
                  <li>
                    <strong>Integer Division:</strong> In C++ code (MIAE 215), <code>1/(i+1)</code> truncates towards zero. E.g., <code>1/3 = 0</code>!
                  </li>
                  <li>
                    <strong>Strict vs Non-Strict Inequalities:</strong> Filtering between $(0, \pi)$ excludes exact bounds $0$ and $\pi$.
                  </li>
                  <li>
                    <strong>Sign Conventions &amp; Units:</strong> Always double check radians vs degrees in trigonometric functions ($4\arctan(1) = \pi$).
                  </li>
                </ul>
              )}
            </div>
          )}

          {activeTab === 'pattern' && (
            <div className="aai-pane">
              <h4 className="aai-pane-title">
                <Compass size={16} /> 10-Second Pattern Recognition Protocol
              </h4>
              <div className="aai-box">
                <p className="aai-text">
                  When this question appears on your exam paper:
                </p>
                <ul className="aai-check-list">
                  <li><strong>Trigger Keywords:</strong> Look for signature phrases like initial conditions, boundary constraints, or array size boundaries.</li>
                  <li><strong>First Line on Scratchpad:</strong> Write down the governing equation immediately before looking at multiple-choice options.</li>
                  <li><strong>Target Format:</strong> Check if the exam requires a boxed final numerical value or complete code syntax.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Custom Question Input */}
        <div className="aai-ask-row">
          <div className="aai-input-wrap">
            <MessageSquare size={16} className="aai-input-icon" />
            <input
              type="text"
              className="aai-input"
              placeholder="Ask Claude / AI a specific question about this problem (e.g., why did we divide here?)..."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
            />
            {customQuestion && (
              <button
                type="button"
                className="aai-clear-btn"
                onClick={() => setCustomQuestion('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons: Claude / ChatGPT / Copy */}
        <div className="aai-actions">
          <button
            type="button"
            className="aai-btn aai-claude-btn"
            onClick={openClaude}
            title="Copy prompt and open Claude.ai in a new tab"
          >
            <Sparkles size={16} />
            <span>Ask Claude</span>
            <ExternalLink size={14} />
          </button>

          <button
            type="button"
            className="aai-btn aai-gpt-btn"
            onClick={openChatGPT}
            title="Copy prompt and open ChatGPT in a new tab"
          >
            <Sparkles size={16} />
            <span>Ask ChatGPT</span>
            <ExternalLink size={14} />
          </button>

          <button
            type="button"
            className={`aai-btn aai-copy-btn${copied ? ' copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied Prompt to Clipboard!' : 'Copy Full AI Prompt'}</span>
          </button>
        </div>

        {/* Raw Prompt Accordion */}
        <div className="aai-prompt-toggle">
          <button
            type="button"
            className="aai-toggle-btn"
            onClick={() => setShowRawPrompt((s) => !s)}
          >
            <span>{showRawPrompt ? 'Hide Generated Prompt' : 'Preview Generated AI Prompt'}</span>
            {showRawPrompt ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {showRawPrompt && (
            <pre className="aai-raw-prompt">
              {generatedPrompt}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export const AskAiButton: React.FC<{
  problem: AskAiProblemContext;
  label?: string;
  className?: string;
}> = ({ problem, label = 'Ask AI (Claude / ChatGPT)', className = '' }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`aai-trigger-btn ${className}`}
        onClick={() => {
          audio.playClick();
          setOpen(true);
        }}
      >
        <Sparkles size={14} />
        <span>{label}</span>
      </button>
      <AskAiModal isOpen={open} onClose={() => setOpen(false)} problem={problem} />
    </>
  );
};

export default AskAiModal;
