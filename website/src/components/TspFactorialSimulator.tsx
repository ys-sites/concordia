import React, { useState, useMemo } from 'react';
import {
  Compass,
  Calculator,
  ListChecks,
  Play,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Layers,
  ArrowLeft
} from 'lucide-react';
import './TspFactorialSimulator.css';

interface PresetData {
  id: string;
  name: string;
  context: string;
  nodes: string[];
  unit: string;
  matrix: (number | null)[][];
  optimalTour: string[];
  optimalCost: number;
}

const PRESETS: PresetData[] = [
  {
    id: 'm25',
    name: 'Fall 2025 Midterm Paper A (AGV Routing)',
    context: 'Automated Guided Vehicle delivering to 5 machines from Storage S (6x6 Asymmetric)',
    nodes: ['S', 'M1', 'M2', 'M3', 'M4', 'M5'],
    unit: 'minutes',
    matrix: [
      [null, 0.9, 1.4, 0.7, 1.1, 1.6],
      [1.8, null, 2.7, 2.3, 2.5, 2.0],
      [2.1, 1.7, null, 0.6, 1.8, 1.3],
      [1.6, 1.3, 1.6, null, 1.0, 1.9],
      [1.2, 1.5, 1.9, 1.2, null, 1.4],
      [1.5, 1.1, 1.3, 1.4, 1.7, null]
    ],
    optimalTour: ['S', 'M1', 'M5', 'M2', 'M3', 'M4', 'S'],
    optimalCost: 7.0
  },
  {
    id: 'm20',
    name: 'Fall 2020 Midterm (Warehouse Forklift)',
    context: 'Forklift route from Depot P to 5 departments with one-way aisles (6x6 Asymmetric)',
    nodes: ['P', 'A', 'B', 'C', 'D', 'E'],
    unit: 'meters',
    matrix: [
      [null, 15, 20, 19, 26, 13],
      [9, null, 12, 16, 13, 18],
      [19, 13, null, 17, 15, 18],
      [22, 16, 12, null, 16, 14],
      [18, 10, 18, 20, null, 12],
      [22, 9, 11, 13, 14, null]
    ],
    optimalTour: ['P', 'A', 'B', 'D', 'E', 'C', 'P'],
    optimalCost: 89
  },
  {
    id: 'lec_ex1',
    name: 'Chapter 5 Lecture Example 1 (7 Stations)',
    context: 'Professor’s slide 14 example demonstrating greedy heuristic sub-optimality (7x7 Symmetric)',
    nodes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    unit: 'miles',
    matrix: [
      [null, 14, 21, 20, 6, 24, 9],
      [14, null, 10, 9, 9, 10, 11],
      [21, 10, null, 1, 15, 9, 21],
      [20, 9, 1, null, 14, 9, 20],
      [6, 9, 15, 14, null, 19, 9],
      [24, 10, 9, 9, 19, null, 21],
      [9, 11, 21, 20, 9, 21, null]
    ],
    optimalTour: ['A', 'G', 'B', 'F', 'C', 'D', 'E', 'A'],
    optimalCost: 60
  }
];

interface QuizItem {
  id: string;
  question: string;
  exam: string;
  options: ('T' | 'F' | 'MTF')[];
  correct: 'T' | 'F' | 'MTF';
  explanation: string;
}

const QUIZ_ITEMS: QuizItem[] = [
  {
    id: 'q1',
    exam: 'Fall 2025 Midterm · Problem 4.3 (a)',
    question: 'Sequence S1 starting from S gives total travel time T1 = 9.0 min. Sequence S2 starting from M1 gives T2 = 7.9 min. Is Statement "S1 is optimal" True, False, or MTF?',
    options: ['T', 'F', 'MTF'],
    correct: 'F',
    explanation: 'False. An optimal solution must minimize time over all feasible sequences (T* <= T for all tours). Because S2 completes the exact same stops in 7.9 min < 9.0 min, S1 cannot be optimal under any circumstance.'
  },
  {
    id: 'q2',
    exam: 'Fall 2025 Midterm · Problem 4.3 (b)',
    question: 'Is Statement "S2 is optimal" True, False, or MTF?',
    options: ['T', 'F', 'MTF'],
    correct: 'MTF',
    explanation: 'MTF (May be True or False). Nearest Neighbor is a greedy heuristic that does not guarantee global optimality. Without testing all (n-1)! = 120 possible tours, one cannot declare whether S2 is globally optimal or not.'
  },
  {
    id: 'q3',
    exam: 'Fall 2025 Midterm · Problem 4.3 (c)',
    question: 'Is Statement "S1 is NOT optimal" True, False, or MTF?',
    options: ['T', 'F', 'MTF'],
    correct: 'T',
    explanation: 'True. Direct logical negation of Statement (a). Because S1 is strictly worse than S2 (9.0 > 7.9), it is an absolute truth that S1 is NOT optimal.'
  },
  {
    id: 'q4',
    exam: 'Fall 2025 Midterm · Problem 4.3 (d)',
    question: 'Is Statement "S2 is NOT optimal" True, False, or MTF?',
    options: ['T', 'F', 'MTF'],
    correct: 'MTF',
    explanation: 'MTF. S2 might happen to be the global minimum (it is not, the true optimum is 7.0 min, but students cannot know that without full enumeration). Asserting that it is definitely NOT optimal is also uncertain.'
  },
  {
    id: 'q5',
    exam: 'Fall 2025 Midterm · Problem 4.4',
    question: 'Consider the statement: "If we follow nearest neighbor to generate 6 sequences starting from S, M1, M2, M3, M4, M5, then the smallest total travel time will be the optimal sequence of ALL possible sequences." (Teacher exam grading vs OR theory)',
    options: ['T', 'F', 'MTF'],
    correct: 'T',
    explanation: 'Teacher Key: True (in the context of the course heuristic selection protocol). Note that in formal Operations Research theory, multi-start nearest neighbor evaluates at most N candidate paths out of (N-1)! total permutations and cannot guarantee the global optimum in general.'
  },
  {
    id: 'q6',
    exam: 'Fall 2020 Midterm · Problem 2.4',
    question: 'How many total directed routes must an exhaustive search app evaluate for depot P plus 5 departments (6 nodes total, asymmetric one-way aisles)?',
    options: ['T', 'F', 'MTF'],
    correct: 'T', // Special item
    explanation: 'Exact formula: (6 - 1)! = 5! = 120 directed permutations. Because the matrix is asymmetric (d_ij != d_ji), routes cannot be halved.'
  }
];

export const TspFactorialSimulator: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'sim' | 'factorial' | 'quiz'>('sim');
  const [selectedPresetId, setSelectedPresetId] = useState<string>('m25');
  const [startNodeIdx, setStartNodeIdx] = useState<number>(0);
  const [heuristicMode, setHeuristicMode] = useState<'standard' | 'second_first'>('standard');
  const [numStations, setNumStations] = useState<number>(6);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, 'T' | 'F' | 'MTF'>>({});

  const currentPreset = useMemo(
    () => PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0],
    [selectedPresetId]
  );

  // Compute Nearest Neighbor Tour live
  const computedTour = useMemo(() => {
    const { nodes, matrix } = currentPreset;
    const n = nodes.length;
    const visited = new Set<number>([startNodeIdx]);
    const route = [startNodeIdx];
    const steps: { from: string; to: string; cost: number; fromIdx: number; toIdx: number }[] = [];
    let cur = startNodeIdx;
    let totalCost = 0;

    let isFirstStep = true;
    while (visited.size < n) {
      // Find unvisited candidates
      const candidates: { idx: number; cost: number }[] = [];
      for (let j = 0; j < n; j++) {
        if (!visited.has(j) && matrix[cur][j] !== null) {
          candidates.push({ idx: j, cost: matrix[cur][j]! });
        }
      }

      candidates.sort((a, b) => a.cost - b.cost);
      if (candidates.length === 0) break;

      // Check if second-nearest rule is active on first step
      let pick = candidates[0];
      if (heuristicMode === 'second_first' && isFirstStep && candidates.length > 1) {
        pick = candidates[1];
      }
      isFirstStep = false;

      visited.add(pick.idx);
      route.push(pick.idx);
      steps.push({
        from: nodes[cur],
        to: nodes[pick.idx],
        cost: pick.cost,
        fromIdx: cur,
        toIdx: pick.idx
      });
      totalCost += pick.cost;
      cur = pick.idx;
    }

    // Return to start
    const returnCost = matrix[cur][startNodeIdx] ?? 0;
    totalCost += returnCost;
    route.push(startNodeIdx);
    steps.push({
      from: nodes[cur],
      to: nodes[startNodeIdx],
      cost: returnCost,
      fromIdx: cur,
      toIdx: startNodeIdx
    });

    return {
      route: route.map((idx) => nodes[idx]),
      totalCost: Number(totalCost.toFixed(2)),
      steps
    };
  }, [currentPreset, startNodeIdx, heuristicMode]);

  // Factorial calculations for the Factorial Lab Tab
  const factorialStats = useMemo(() => {
    const n = numStations;
    const unvisited = n - 1;

    // BigInt for exact factorials
    const calcBigFact = (x: number): bigint => {
      let res = 1n;
      for (let i = 2n; i <= BigInt(x); i++) res *= i;
      return res;
    };

    const totalDirected = calcBigFact(unvisited);
    const totalSymmetric = totalDirected / 2n;

    // Time estimate at 1 billion tours / second
    const seconds = Number(totalDirected) / 1e9;
    let timeStr = '';
    if (seconds < 1e-6) timeStr = `${(seconds * 1e9).toFixed(1)} nanoseconds`;
    else if (seconds < 1e-3) timeStr = `${(seconds * 1e6).toFixed(1)} microseconds`;
    else if (seconds < 1) timeStr = `${(seconds * 1000).toFixed(1)} milliseconds`;
    else if (seconds < 60) timeStr = `${seconds.toFixed(2)} seconds`;
    else if (seconds < 3600) timeStr = `${(seconds / 60).toFixed(1)} minutes`;
    else if (seconds < 86400) timeStr = `${(seconds / 3600).toFixed(1)} hours`;
    else if (seconds < 31536000) timeStr = `${(seconds / 86400).toFixed(1)} days`;
    else timeStr = `${(seconds / 31536000).toExponential(2)} years`;

    return {
      n,
      unvisited,
      totalDirected: totalDirected.toLocaleString(),
      totalSymmetric: totalSymmetric.toLocaleString(),
      timeStr
    };
  }, [numStations]);

  const handleSelectQuiz = (qId: string, opt: 'T' | 'F' | 'MTF') => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  return (
    <div className="tsp-sim-container">
      {/* Top Header */}
      <div className="tsp-sim-header">
        <div className="tsp-sim-title-group">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color, #e5e7eb)',
                background: 'var(--bg-surface, #fff)',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={16} /> Back
            </button>
          )}
          <div className="tsp-sim-icon-badge">
            <Compass size={24} />
          </div>
          <div>
            <h2 className="tsp-sim-title">Factorial Complexity & TSP Route Simulator</h2>
            <p className="tsp-sim-subtitle">
              INDU 211 Chapter 5: Material Handling, Asymmetric Matrices, Nearest Neighbor & Midterm Optimality
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tsp-nav-tabs">
          <button
            type="button"
            className={`tsp-nav-tab ${activeTab === 'sim' ? 'active' : ''}`}
            onClick={() => setActiveTab('sim')}
          >
            <Compass size={16} /> Route Simulator
          </button>
          <button
            type="button"
            className={`tsp-nav-tab ${activeTab === 'factorial' ? 'active' : ''}`}
            onClick={() => setActiveTab('factorial')}
          >
            <TrendingUp size={16} /> Factorial Lab
          </button>
          <button
            type="button"
            className={`tsp-nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <ListChecks size={16} /> Exam T/F/MTF Trainer
          </button>
        </div>
      </div>

      {/* TAB 1: ROUTE SIMULATOR */}
      {activeTab === 'sim' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Preset & Configuration Bar */}
          <div className="tsp-controls-card">
            <div className="tsp-preset-row">
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary, #4b5563)' }}>
                CURRICULUM PRESET:
              </span>
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`tsp-preset-btn ${selectedPresetId === p.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedPresetId(p.id);
                    setStartNodeIdx(0);
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <p style={{ margin: 0, fontSize: '0.85rem', color: '#b45309', fontWeight: 500 }}>
              💡 {currentPreset.context}
            </p>

            <div className="tsp-config-grid">
              <div className="tsp-input-field">
                <label>Starting Vertex</label>
                <select
                  className="tsp-select"
                  value={startNodeIdx}
                  onChange={(e) => setStartNodeIdx(Number(e.target.value))}
                >
                  {currentPreset.nodes.map((node, i) => (
                    <option key={node} value={i}>
                      Start at {node} {i === 0 ? '(Depot / Storage)' : `(Station ${node})`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="tsp-input-field">
                <label>Heuristic Algorithm</label>
                <select
                  className="tsp-select"
                  value={heuristicMode}
                  onChange={(e) => setHeuristicMode(e.target.value as any)}
                >
                  <option value="standard">Standard Nearest Neighbor (Greedy)</option>
                  <option value="second_first">2nd-Nearest First Leg (Exam S2 Rule)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Asymmetric Distance Matrix View with Highlighting */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary, #111827)' }}>
                Asymmetric Distance Matrix ({currentPreset.unit}) · Row = From, Column = To
              </span>
              <span style={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 600 }}>
                ⚠️ Always read across ROW i of current vertex!
              </span>
            </div>

            <div className="tsp-matrix-box">
              <table className="tsp-table">
                <thead>
                  <tr>
                    <th className="origin-col">From \ To</th>
                    {currentPreset.nodes.map((n) => (
                      <th key={n}>{n}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentPreset.matrix.map((row, rIdx) => {
                    const rowNode = currentPreset.nodes[rIdx];
                    const isSelectedRow = computedTour.steps.some((s) => s.from === rowNode);
                    return (
                      <tr key={rowNode}>
                        <th className="origin-col">{rowNode}</th>
                        {row.map((val, cIdx) => {
                          const colNode = currentPreset.nodes[cIdx];
                          const isDiagonal = rIdx === cIdx;
                          const isTakenStep = computedTour.steps.some(
                            (s) => s.fromIdx === rIdx && s.toIdx === cIdx
                          );

                          return (
                            <td
                              key={colNode}
                              className={
                                isTakenStep
                                  ? 'cell-selected'
                                  : isDiagonal
                                  ? 'cell-diagonal'
                                  : isSelectedRow
                                  ? 'cell-active-row'
                                  : ''
                              }
                              title={
                                isTakenStep
                                  ? `Selected step: ${rowNode} → ${colNode} (${val} ${currentPreset.unit})`
                                  : `${rowNode} → ${colNode}`
                              }
                            >
                              {isDiagonal ? '—' : val}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results Card */}
          <div className="tsp-results-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div className="tsp-tour-path-badge">
                <span>Generated Tour:</span>
                {computedTour.route.map((node, i) => (
                  <React.Fragment key={i}>
                    <span className="tsp-node-pill">{node}</span>
                    {i < computedTour.route.length - 1 && <ArrowRight size={14} color="#d97706" />}
                  </React.Fragment>
                ))}
              </div>

              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#b45309' }}>
                Total: {computedTour.totalCost} {currentPreset.unit}
              </div>
            </div>

            {/* Step by Step Breakdown */}
            <div className="tsp-step-list">
              {computedTour.steps.map((st, i) => (
                <div key={i} className="tsp-step-item">
                  <span>
                    Step {i + 1}: From <b>{st.from}</b> &rarr; go to <b>{st.to}</b>
                    {i === 0 && heuristicMode === 'second_first' && ' (2nd-nearest choice)'}
                    {i === computedTour.steps.length - 1 && ' (Return to start)'}
                  </span>
                  <span>
                    <b>+{st.cost}</b> {currentPreset.unit}
                  </span>
                </div>
              ))}
            </div>

            {/* Comparison with Global Optimum */}
            <div className="tsp-comparison-grid">
              <div className="tsp-stat-chip">
                <span className="tsp-stat-label">Heuristic Tour Cost</span>
                <span className="tsp-stat-val">
                  {computedTour.totalCost} {currentPreset.unit}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #6b7280)' }}>
                  {heuristicMode === 'standard' ? 'Pure Greedy NN' : '2nd-Nearest First'}
                </span>
              </div>

              <div className="tsp-stat-chip optimum">
                <span className="tsp-stat-label">True Global Optimum (Exact)</span>
                <span className="tsp-stat-val">
                  {currentPreset.optimalCost} {currentPreset.unit}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#047857' }}>
                  Tour: {currentPreset.optimalTour.join(' → ')}
                </span>
              </div>

              <div className="tsp-stat-chip">
                <span className="tsp-stat-label">Sub-Optimality Penalty</span>
                <span
                  className="tsp-stat-val"
                  style={{
                    color:
                      computedTour.totalCost <= currentPreset.optimalCost ? '#059669' : '#dc2626'
                  }}
                >
                  {computedTour.totalCost <= currentPreset.optimalCost
                    ? '0.0% (Hit Optimum!)'
                    : `+${(
                        ((computedTour.totalCost - currentPreset.optimalCost) /
                          currentPreset.optimalCost) *
                        100
                      ).toFixed(1)}%`}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #6b7280)' }}>
                  Difference: +{(computedTour.totalCost - currentPreset.optimalCost).toFixed(2)}{' '}
                  {currentPreset.unit}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FACTORIAL EXPLOSION LAB */}
      {activeTab === 'factorial' && (
        <div className="factorial-lab-card">
          <div className="factorial-slider-group">
            <div className="factorial-slider-header">
              <span>Adjust Number of Stations (N = 1 Depot + N-1 Customers/Machines):</span>
              <span style={{ color: '#d97706', fontSize: '1.15rem' }}>N = {numStations} Stations</span>
            </div>
            <input
              type="range"
              min="3"
              max="22"
              value={numStations}
              onChange={(e) => setNumStations(Number(e.target.value))}
              className="factorial-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted, #9ca3af)' }}>
              <span>3 Stations (Trivial)</span>
              <span>6 Stations (Fall 2025 Midterm)</span>
              <span>7 Stations (Lecture Ex 1)</span>
              <span>21 Stations (Fall 2020 Q2.4)</span>
            </div>
          </div>

          <div className="factorial-calc-grid">
            <div className="factorial-metric-card">
              <span className="factorial-metric-label">Directed Tours Permutations</span>
              <span className="factorial-metric-value">{factorialStats.totalDirected}</span>
              <span className="factorial-metric-sub">
                Formula: ({factorialStats.n} - 1)! = {factorialStats.unvisited}!
              </span>
            </div>

            <div className="factorial-metric-card">
              <span className="factorial-metric-label">Symmetric Tours (Undirected)</span>
              <span className="factorial-metric-value">{factorialStats.totalSymmetric}</span>
              <span className="factorial-metric-sub">
                Formula: ({factorialStats.n} - 1)! / 2
              </span>
            </div>

            <div className="factorial-metric-card">
              <span className="factorial-metric-label">Brute-Force Time at 1 GHz</span>
              <span className="factorial-metric-value" style={{ color: '#dc2626' }}>
                {factorialStats.timeStr}
              </span>
              <span className="factorial-metric-sub">
                Evaluating 1,000,000,000 candidate tours per second
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '8px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              fontSize: '0.9rem',
              color: '#1e3a8a',
              lineHeight: 1.6
            }}
          >
            <h4 style={{ margin: '0 0 6px', color: '#1d4ed8', fontSize: '0.95rem' }}>
              🧠 The Industrial Engineer’s Core Takeaway:
            </h4>
            <p style={{ margin: '0 0 6px' }}>
              For <strong>N = 6</strong> (our Fall 2025 exam problem), there are <strong>5! = 120</strong> directed routes. A computer can evaluate them in 120 nanoseconds, but for a student in a 75-minute exam, testing all 120 is humanly impossible!
            </p>
            <p style={{ margin: 0 }}>
              For <strong>N = 21</strong> (our Fall 2020 exam question 2.4.3), there are <strong>20! = 2.43 &times; 10<sup>18</sup></strong> routes. Even a supercomputer would take <strong>over 77 years</strong>! That is why heuristics like Nearest Neighbor ($O(N^2)$ runtime) are mandatory.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: EXAM T/F/MTF TRAINER */}
      {activeTab === 'quiz' && (
        <div className="tsp-quiz-card">
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary, #4b5563)' }}>
            Practice the official True / False / May be True or False (MTF) questions from the Concordia INDU 211 examinations:
          </p>

          {QUIZ_ITEMS.map((item, idx) => {
            const userChoice = quizAnswers[item.id];
            const isAnswered = !!userChoice;
            const isCorrect = userChoice === item.correct;

            return (
              <div key={item.id} className="tsp-quiz-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase' }}>
                    {item.exam}
                  </span>
                  {isAnswered && (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: isCorrect ? '#059669' : '#dc2626'
                      }}
                    >
                      {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  )}
                </div>

                <div className="tsp-quiz-q">
                  {idx + 1}. {item.question}
                </div>

                <div className="tsp-quiz-options">
                  {item.options.map((opt) => {
                    const isSelected = userChoice === opt;
                    let btnClass = 'tsp-quiz-btn';
                    if (isSelected) {
                      btnClass += opt === item.correct ? ' selected-correct' : ' selected-wrong';
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        className={btnClass}
                        onClick={() => handleSelectQuiz(item.id, opt)}
                      >
                        {opt === 'T' && 'T (True)'}
                        {opt === 'F' && 'F (False)'}
                        {opt === 'MTF' && 'MTF (May be True or False)'}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="tsp-quiz-explanation">
                    <strong>Official Marking Key & Analysis:</strong> {item.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
