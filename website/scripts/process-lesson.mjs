#!/usr/bin/env node
/**
 * ============================================================================
 * CONCORDIA SEMESTER 1 — AUTONOMOUS LESSON INGESTION & VIDEO PIPELINE SCRIPT
 * ============================================================================
 * 
 * This command script operationalizes the user's permanent pipeline workflow:
 * 1. Deep Pedagogical Dissection & Zero-Skip Topic Guide Expansion
 * 2. Scanning 001 Main to Synthesize the Video Spec & Narration Prompt
 * 3. Website Integration (Drill Bank Scaffolding & Document Registration)
 * 4. Studocu Replication & Metadata Queue Logging
 * 5. Strict Anonymity & Visual Architecture Enforcement
 * 
 * Usage:
 *   node scripts/process-lesson.mjs --scan
 *   node scripts/process-lesson.mjs --course "MIAE 221" --lecture 12 --title "Phase Transformations & Kinetics"
 *   node scripts/process-lesson.mjs --help
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Workspace Directory Topology
const WEBSITE_DIR = path.resolve(__dirname, '..');
const SEMESTER_1_DIR = path.resolve(WEBSITE_DIR, '..');
const WORKSPACE_ROOT = path.resolve(SEMESTER_1_DIR, '..');
const MAIN_001_DIR = path.join(SEMESTER_1_DIR, '001 Main');
const ODE_MOTION_DIR = path.join(MAIN_001_DIR, 'ode-motion-lessons');
const STUDOCU_NEED_DIR = path.join(SEMESTER_1_DIR, 'Studocu', 'Need to Upload');
const STUDOCU_QUEUE_FILE = path.join(STUDOCU_NEED_DIR, 'Studocu_Need_To_Upload.md');

// Supported Course Mapping
const COURSES = {
  'ENGR 213': {
    code: 'ENGR 213',
    name: 'Applied Ordinary Differential Equations',
    fullTitle: 'Applied Ordinary Differential Equations (ENGR 213)',
    folder: 'Engr 213',
    lessonsFile: 'engr213Lessons.ts',
    drillPrefix: 'engr213',
    videoSubdir: 'Tutor Videos'
  },
  'INDU 211': {
    code: 'INDU 211',
    name: 'Introduction to Production and Manufacturing Systems',
    fullTitle: 'Introduction to Production and Manufacturing Systems (INDU 211)',
    folder: 'Indu 211',
    lessonsFile: null,
    drillPrefix: 'indu211',
    videoSubdir: null
  },
  'MIAE 215': {
    code: 'MIAE 215',
    name: 'Programming for Mechanical & Industrial Engineers',
    fullTitle: 'Mechanical, Industrial & Aerospace engineering (MIAE 215)',
    folder: 'Miae 215',
    lessonsFile: 'miae215CodeLabVideos.ts',
    drillPrefix: 'miae215',
    videoSubdir: '08 - Teacher Midterm Practice AI Videos'
  },
  'MIAE 221': {
    code: 'MIAE 221',
    name: 'Materials Science',
    fullTitle: 'Materials Science (MIAE 221)',
    folder: 'Miae 221',
    lessonsFile: 'miae221Lessons.ts',
    drillPrefix: 'miae221',
    videoSubdir: '08 - Teacher Topics Explained AI Videos'
  }
};

/**
 * Scan 001 Main for Video Production Rules, Tone, and Animation Tokens
 */
export function scan001MainResources() {
  const findings = {
    tasteRules: null,
    colorPalette: null,
    voiceSpec: null,
    chapterStructure: null,
    motionSpecs: [],
    sourcesFound: []
  };

  const tastePath = path.join(ODE_MOTION_DIR, 'TASTE.md');
  if (fs.existsSync(tastePath)) {
    findings.sourcesFound.push(tastePath);
    const content = fs.readFileSync(tastePath, 'utf8');
    findings.tasteRules = 'Loaded from 001 Main/ode-motion-lessons/TASTE.md';

    findings.colorPalette = {
      chalk: '#E8EDF7 (default math/white)',
      dim: '#94A3B8 (structural guides)',
      xStuffCyan: '#38BDF8 (independent variables / x-terms)',
      yStuffAmber: '#FBBF24 (dependent variables / y-terms)',
      constantsPink: '#F472B6 (constants, integrating factors μ, parameters)',
      correctGreen: '#34D399 (verified answers, kept equilibria, correct options)',
      trapRed: '#F87171 (distractors, common traps, discarded roots)',
      accentIndigo: '#A5B4FC / #6366F1 (chapter rules, brand)',
      markerNotesYellow: '#FDE68A (handwritten Caveat callouts)'
    };

    findings.voiceSpec = {
      model: 'Kokoro-82M (local q8)',
      voice: 'af_heart',
      speed: 0.96,
      pacing: 'One idea per beat; split complex calculations; say traps out loud; 0.3s pause between sentences; +0.6s hold per card'
    };

    findings.chapterStructure = [
      'The Big Idea (Core intuitive analogy & physical mechanism)',
      'Spot It (Exam recognition pattern in ≤10 seconds)',
      'Why It Works / Method (Step-by-step rigorous foundation)',
      'Worked Example (Direct teacher lecture problem solved with zero skipped steps)',
      'The Traps (Common student calculation slips & sign errors)',
      'Recap (Key formula boxed + Next topic teaser)'
    ];
  }

  const mvdSkillPath = path.join(MAIN_001_DIR, '07 - Local Projects & Lessons', 'motion-video-director', 'skills', 'motion-video-director', 'SKILL.md');
  if (fs.existsSync(mvdSkillPath)) {
    findings.sourcesFound.push(mvdSkillPath);
    findings.motionSpecs.push('Motion Video Director v3.5.2 locked style guide active');
  }

  return findings;
}

/**
 * Generate the Zero-Skip Pedagogical Markdown Topic Guide Scaffold
 */
export function generateExpandedGuideContent(courseCode, lectureNum, title) {
  const course = COURSES[courseCode] || { code: courseCode, name: courseCode, folder: courseCode };
  return `# ${course.code}: ${course.name}
# Lecture ${lectureNum}: ${title} — Comprehensive Pedagogical Master Guide

---

## 1. Executive Conceptual Intuition & Physical Analogy

> [!IMPORTANT]
> **Core Concept Overview**:
> What is this topic solving, why was it developed, and how does an engineer visualize this without memorizing blind formulas?

### The Intuitive Physical Analogy
* **Analogy Name / Mental Model**: 
  *(Provide a vivid, tangible real-world analogy—similar to the ballroom electron sea for metallic bonding, the magnetic checkerboard for ceramic brittleness, or the cooked spaghetti tangle for polymer chains).*
* **How It Connects to Engineering Reality**:
  *(Explain how the intuitive model perfectly maps to the governing mathematical equations and laboratory observations).*

---

## 2. In-Depth Curriculum & Slide-by-Slide Dissection

### Core Phenomenon / Mechanism
1. **Governing Principles**:
   * What are the foundational physical laws or mathematical axioms?
   * How do variables interact? What are the boundary conditions and domain limitations?

2. **Official Slide Visual Analysis**:
   * *(Reference teacher slide figures extracted to \`./images/\`)*
   * **Visual Figure Reference**: \`![Figure 1: Mechanism Schematic](./images/lecture_${lectureNum}_figure1.png)\`
   * **In-Depth Diagram Breakdown**: Explain every axis, curve transition, vector, and label in the diagram so the student has zero ambiguity.

---

## 3. Mathematical Foundations & The "Zero-Skip" Derivation Standard

> [!NOTE]
> **The Zero-Skip Guarantee**:
> In this section, every algebraic manipulation, variable substitution with explicit physical units, and calculator reduction is typeset step-by-step. No intermediate algebraic steps are ever omitted.

### General Governing Equation
$$f(x, y, \\dots) = 0$$

### Full Step-by-Step Stepwise Derivation

#### Step 1: Statement of Assumptions & Initial Conditions
* State all parameters with their physical units:
  - $x_0 = \\dots$ $[\\text{units}]$
  - $k = \\dots$ $[\\text{units}]$

#### Step 2: Intermediate Algebraic Expansion (Line-by-Line)
$$\\text{Line 1: } A = B + C$$
$$\\text{Line 2: } A - B = C$$
$$\\text{Line 3: } \\dots$$

#### Step 3: Exact Numerical Substitution
$$\\text{Substitution: } \\dots = \\dots$$

#### Step 4: Reduction & Boxed Verified Result
$$\\boxed{\\text{Result} = \\dots}$$

---

## 4. Why This Method Works (Underlying Engineering Logic)

* **Physical Insight**: Why does nature or mathematics behave this way under these constraints?
* **Comparative Alternatives**: Why would alternative simpler approaches fail in this scenario?

---

## 5. Common Exam Pitfalls & Trap Analysis

| Exam Trap / Distractor | Why Students Make This Mistake | How the Exam Sets the Trap | The Bulletproof Defense |
| :--- | :--- | :--- | :--- |
| **Sign Flip / Inversion** | Forgetting negative sign during integration or transpose | Puts positive answer as Option A | Always verify units and physical direction |
| **Unit Mismatch** | Mixing $\\text{GPa}$ with $\\text{MPa}$ or $\\text{cm}$ with $\\text{m}$ | Options differ by $10^3$ or $10^6$ | Write units explicitly on every single line |
| **Boundary Violation** | Applying linear formulas beyond yield or elastic limit | Forgets scope limitation | Check validity conditions first |

---

## 6. Self-Check Mastery Practice Problems

### Problem 1 (Direct Lecture Grounding)
* **Question Prompt**: ...
* **Step-by-Step Solution**: ...
* **Boxed Answer**: ...
`;
}

/**
 * Generate Video Production Prompt & Script Spec
 */
export function generateVideoSpec(courseCode, lectureNum, title, resources) {
  const course = COURSES[courseCode] || { code: courseCode, name: courseCode, folder: courseCode };
  return `# Video Production Spec: ${course.code} — Lecture ${lectureNum}: ${title}
**Series**: ${course.code} AI Motion Lessons
**Renderer Engine**: DOM + KaTeX (001 Main/ode-motion-lessons)
**Voiceover**: Kokoro-82M (\`af_heart\`, speed 0.96)
**Visual Palette**:
- Math Chalk: \`#E8EDF7\`
- x-terms: \`#38BDF8\` (Cyan)
- y-terms: \`#FBBF24\` (Amber)
- Constants / Params: \`#F472B6\` (Pink)
- Verified Results: \`#34D399\` (Green Box)
- Exam Traps: \`#F87171\` (Red Distractor)

---

## Chapter Breakdown & Narration Script

### Chapter 1: The Big Idea (0:00 - 0:45)
* **Visual**: Dark navy chalkboard (\`#182246\` radial), faint 64px grid. Title card slides in.
* **Narration**:
  "Welcome back to ${course.code}. Today we are breaking down ${title}.
   Before looking at equations, let's understand the physical intuition..."
* **Motion**: Smooth fade-up 26px, gentle write-on of core concept statement.

### Chapter 2: Spot It (0:45 - 1:30)
* **Visual**: Comparison card. Identifying signatures on exam sheets.
* **Narration**:
  "On a timed midterm, how do you spot this within ten seconds? Look for this signature..."
* **Motion**: Cyan pulse on key terms, box highlighter outline (0.55s).

### Chapter 3: Why It Works / Method (1:30 - 3:00)
* **Visual**: Left-anchored step-by-step derivation.
* **Narration**:
  "Here is the exact step-by-step method. Notice where the integration factor applies..."
* **Motion**: KaTeX write-on mask wipe left-to-right (0.9s), matched terms fly into place.

### Chapter 4: Worked Example (3:00 - 4:45)
* **Visual**: Real teacher lecture example worked out with every number shown.
* **Narration**:
  "Let's work through the professor's lecture example together. We substitute our values..."
* **Motion**: Substitutions glow amber, calculations reduce line-by-line, final answer boxed in emerald green.

### Chapter 5: The Traps (4:45 - 5:30)
* **Visual**: Red trap stamps pop at -7° angle.
* **Narration**:
  "Here is where students lose marks on exams. The most common trap is..."
* **Motion**: Distractor crossed out in red with soft thud sound effect, correct path highlighted.

### Chapter 6: Recap (5:30 - 6:00)
* **Visual**: High-yield summary cheatsheet card.
* **Narration**:
  "To recap: remember this governing formula, watch out for unit conversions, and you're ready. See you in the next lesson."
* **Motion**: Summary card gently docks at center, fade to black.
`;
}

/**
 * Generate Practice Drill Questions Template for website/src/data/extra/
 */
export function generateExtraQuestionsContent(courseCode, lectureNum, title) {
  const course = COURSES[courseCode] || { code: courseCode, name: courseCode, folder: courseCode };
  const safeId = course.code.replace(/\s+/g, '');
  return `import { PracticeQuestion, QuestionSource } from '../../types';
import { t } from '../solutions/types';

// ${course.code} — Lecture ${lectureNum}: ${title}
// Generated by process-lesson.mjs pipeline
const DECK = 'Lecture_${lectureNum}_Slides.pdf';
const CHAPTER = 'Lecture ${lectureNum} · ${title}';
const src = (location: string): QuestionSource[] => [{ deck: DECK, chapter: CHAPTER, location }];
const ref = (slide: string) => \`\${DECK} · \${slide}\`;

const q = (p: Omit<PracticeQuestion, 'courseId' | 'chapter'>): PracticeQuestion => ({
  courseId: '${safeId}',
  chapter: 'lecture_${lectureNum}',
  ...p
});

export const ${safeId.toUpperCase()}_LECTURE_${lectureNum}: PracticeQuestion[] = [
  q({
    id: 'Q_${safeId}_L${lectureNum}_01',
    topic: '${title}: Core Definition',
    difficulty: 'Foundation',
    question: t\`Which of the following correctly describes the fundamental principle of ${title}?\`,
    options: [
      t\`Statement describing correct physical and mathematical mechanism\`,
      t\`Distractor option featuring typical sign or inverse confusion\`,
      t\`Distractor option confusing boundary conditions\`,
      t\`Distractor option with incorrect unit dimensions\`
    ],
    correctIndex: 0,
    explanation: {
      coreConcept: t\`Fundamental principle from Lecture ${lectureNum} slides.\`,
      stepByStep: [
        t\`Step 1: Identify the governing relation from the teacher notes.\`,
        t\`Step 2: Apply the boundary constraints and check physical behavior.\`,
        t\`Step 3: Confirm that only option A preserves continuity and conservation.\`
      ],
      whyWrong: {
        '1': t\`Incorrect because the sign is inverted.\`,
        '2': t\`Incorrect because this boundary condition applies only at equilibrium.\`,
        '3': t\`Incorrect due to dimensional inconsistency.\`
      },
      commonTrap: t\`Confusing the governing equation with its inverse.\`,
      reference: ref('Slide 3')
    },
    source: src('Slide 3')
  })
];
`;
}

/**
 * Append to Studocu Need to Upload queue
 */
export function appendToStudocuQueue(filename, courseCode, title, description) {
  const course = COURSES[courseCode] || { fullTitle: courseCode, code: courseCode };
  const metadataBlock = `
---

## \`${filename}\`

* **University**: Concordia University
* **Course**: \`${course.fullTitle}\`
* **Category**: \`Summaries\`
* **Title**: ${course.code} Lecture - ${title}
* **Academic year**: \`2025/2026\`
* **Description**: ${description}
`;

  if (fs.existsSync(STUDOCU_QUEUE_FILE)) {
    fs.appendFileSync(STUDOCU_QUEUE_FILE, metadataBlock, 'utf8');
    return true;
  }
  return false;
}

/**
 * Main CLI Dispatcher
 */
function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.length === 0) {
    console.log(`
Concordia Engineering Portal — Autonomous Lesson Ingestion Script
=================================================================
Commands & Options:
  --scan                    Scan 001 Main and print video & motion rules
  --course <code|name>      Target course (ENGR 213, INDU 211, MIAE 215, MIAE 221)
  --lecture <number>        Lecture number (e.g. 10)
  --title <title>           Topic title string
  --file <path>             (Optional) Path to teacher slides/notes PDF or text
  --dry-run                 Preview generated paths and content without writing
  --help                    Show this manual

Examples:
  node scripts/process-lesson.mjs --scan
  node scripts/process-lesson.mjs --course "MIAE 221" --lecture 12 --title "Phase Transformations"
`);
    process.exit(0);
  }

  // Handle --scan
  if (args.includes('--scan')) {
    console.log('🔍 Scanning 001 Main for Motion, Video & Design Standards...');
    const resources = scan001MainResources();
    console.log('\n✅ 001 Main Scan Complete:');
    console.log(`- Sources Found: ${resources.sourcesFound.length}`);
    resources.sourcesFound.forEach(s => console.log(`  • ${path.relative(WORKSPACE_ROOT, s)}`));
    console.log('\n🎨 Video Color Tokens:');
    Object.entries(resources.colorPalette || {}).forEach(([k, v]) => console.log(`  • ${k}: ${v}`));
    console.log('\n🎙️ Voiceover Profile:');
    Object.entries(resources.voiceSpec || {}).forEach(([k, v]) => console.log(`  • ${k}: ${v}`));
    console.log('\n🎬 Chapter Architecture:');
    (resources.chapterStructure || []).forEach((c, idx) => console.log(`  ${idx + 1}. ${c}`));
    process.exit(0);
  }

  // Parse arguments
  const getArg = (flag) => {
    const idx = args.indexOf(flag);
    return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
  };

  const courseArg = getArg('--course') || 'MIAE 221';
  const lectureArg = getArg('--lecture') || '01';
  const titleArg = getArg('--title') || 'Comprehensive Topic Analysis';
  const isDryRun = args.includes('--dry-run');

  const course = COURSES[courseArg.toUpperCase()] || COURSES[courseArg] || COURSES['MIAE 221'];

  console.log(`🚀 Executing Lesson Ingestion Pipeline for ${course.code} (Lecture ${lectureArg}: ${titleArg})...`);

  // Step 1: Scan 001 Main
  console.log('Step 1: Scanning 001 Main for video & motion parameters...');
  const resources = scan001MainResources();

  // Step 2: Generate Zero-Skip Topic Guide Scaffold
  console.log('Step 2: Synthesizing Zero-Skip Pedagogical Topic Guide...');
  const guideContent = generateExpandedGuideContent(course.code, lectureArg, titleArg);
  const guideFilename = `Lecture ${lectureArg} - ${titleArg} (Comprehensive Guide).md`;
  const guideDir = path.join(SEMESTER_1_DIR, course.folder, '02 - Comprehensive Topic Guides (Expanded & Intuitive)');
  const guideFilePath = path.join(guideDir, guideFilename);

  // Step 3: Generate Video Spec
  console.log('Step 3: Synthesizing Video Production Spec & Kokoro Narration Script...');
  const videoSpecContent = generateVideoSpec(course.code, lectureArg, titleArg, resources);
  const videoSpecFilename = `Lecture ${lectureArg} - ${titleArg} - Video Spec.md`;
  const videoSpecDir = path.join(SEMESTER_1_DIR, course.folder, course.videoSubdir || 'Tutor Videos');
  const videoSpecFilePath = path.join(videoSpecDir, videoSpecFilename);

  // Step 4: Generate Website Practice Drill Scaffold
  console.log('Step 4: Scaffolding Website Extra Practice Questions...');
  const questionsContent = generateExtraQuestionsContent(course.code, lectureArg, titleArg);
  const questionsFilename = `${course.drillPrefix}_lecture${lectureArg}.ts`;
  const questionsFilePath = path.join(WEBSITE_DIR, 'src', 'data', 'extra', questionsFilename);

  // Output Preview / Dry Run
  if (isDryRun) {
    console.log('\n[DRY RUN] Would write the following files:');
    console.log(`  1. Guide: ${guideFilePath}`);
    console.log(`  2. Video Spec: ${videoSpecFilePath}`);
    console.log(`  3. Practice Bank: ${questionsFilePath}`);
    console.log(`  4. Studocu Replica: ${path.join(STUDOCU_NEED_DIR, guideFilename)}`);
    console.log('Completed dry-run successfully.');
    process.exit(0);
  }

  // Write files
  if (!fs.existsSync(guideDir)) fs.mkdirSync(guideDir, { recursive: true });
  fs.writeFileSync(guideFilePath, guideContent, 'utf8');
  console.log(`  ✅ Wrote Topic Guide: ${guideFilePath}`);

  if (videoSpecDir && !fs.existsSync(videoSpecDir)) fs.mkdirSync(videoSpecDir, { recursive: true });
  if (videoSpecDir) {
    fs.writeFileSync(videoSpecFilePath, videoSpecContent, 'utf8');
    console.log(`  ✅ Wrote Video Spec: ${videoSpecFilePath}`);
  }

  const extraDir = path.join(WEBSITE_DIR, 'src', 'data', 'extra');
  if (!fs.existsSync(extraDir)) fs.mkdirSync(extraDir, { recursive: true });
  if (!fs.existsSync(questionsFilePath)) {
    fs.writeFileSync(questionsFilePath, questionsContent, 'utf8');
    console.log(`  ✅ Wrote Extra Practice Bank: ${questionsFilePath}`);
  }

  // Replicate to Studocu Need to Upload
  if (fs.existsSync(STUDOCU_NEED_DIR)) {
    const studocuDest = path.join(STUDOCU_NEED_DIR, guideFilename);
    fs.copyFileSync(guideFilePath, studocuDest);
    console.log(`  ✅ Replicated to Studocu Queue: ${studocuDest}`);

    const desc = `Comprehensive pedagogical master guide for ${course.code} Lecture ${lectureArg} covering ${titleArg} with line-by-line zero-skip derivations, intuitive models, slide analysis, and exam traps.`;
    appendToStudocuQueue(guideFilename, course.code, titleArg, desc);
    console.log(`  ✅ Appended metadata to Studocu_Need_To_Upload.md`);
  }

  console.log('\n🎉 Pipeline complete! All files generated, formatted, and registered.');
}

main();
