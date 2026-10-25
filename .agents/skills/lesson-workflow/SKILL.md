---
name: lesson-workflow
description: "Autonomous lesson ingestion, zero-skip pedagogical expansion, 001 Main video prompt synthesis, and website drill pipeline for Concordia engineering courses."
---

# Autonomous Lesson Workflow & Video Pipeline Skill

This skill governs the systematic ingestion and expansion of new Concordia University teacher materials across ENGR 213, INDU 211, MIAE 215, and MIAE 221.

## When to Activate
Activate this skill whenever the user:
- Uploads or references a new teacher lecture, slide deck, notes, or problem set.
- Requests to expand, explain, summarize, or solve course materials.
- Asks to generate video production prompts, motion graphics scripts, or website drill banks.

## The Core 3-Phase Workflow

### 1. Zero-Skip Pedagogical Topic Guide Expansion
- **Foundation**: Grounded strictly in the teacher's slides and syllabus.
- **Pedagogy**: Begin with intuitive real-world physical analogies before introducing equations.
- **Zero Skipped Steps**: Print every algebraic manipulation line-by-line; never omit intermediate arithmetic ($11 + 7 = 18$); show explicit substitutions with units.
- **Sections Required**:
  1. Executive Intuition & Analogy
  2. Curriculum Slide Dissection (with extracted high-DPI figures from `./images/`)
  3. Mathematical Foundations & Line-by-Line Zero-Skip Derivations
  4. Why This Method Works
  5. Common Exam Pitfalls & Traps (distractor diagnostics)
  6. Self-Check Mastery Practice Problems
- **Placement & Studocu**:
  - Save in `Semester 1/<Course>/02 - Comprehensive Topic Guides (Expanded & Intuitive)/`.
  - Copy to `Semester 1/Studocu/Need to Upload/`.
  - Log metadata in `Studocu_Need_To_Upload.md`.

### 2. 001 Main Scan & Video Prompt Synthesis (For New Files)
- Scan `Semester 1/001 Main/` (`ode-motion-lessons/TASTE.md` and `motion-video-director/SKILL.md`).
- Apply the locked visual design tokens:
  - Chalkboard radial `#182246`
  - Chalk math `#E8EDF7`
  - Independent/x `#38BDF8`
  - Dependent/y `#FBBF24`
  - Constants `#F472B6`
  - Verified answers `#34D399`
  - Traps `#F87171`
- Apply Kokoro-82M TTS voiceover (`af_heart`, speed 0.96, 0.3s sentence pause).
- Synthesize the 6-chapter script:
  1. The Big Idea
  2. Spot It
  3. Why It Works / Method
  4. Worked Example
  5. The Traps
  6. Recap
- Save to `Semester 1/<Course>/<VideoFolder>/Lecture <N> - <Title> - Video Spec.md`.

### 3. Website Integration
- Register the document in `website/src/data/filteredDocumentsData.ts`.
- Generate practice questions in `website/src/data/extra/<course>_lecture<N>.ts` with step-by-step KaTeX solutions and distractor explanations.
- Register lesson entry in `website/src/data/<course>Lessons.ts`.

## Terminal Command Script
Run the automated pipeline tool from the website directory:
```bash
cd "c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\website"
npm run process-lesson -- --course "<Course>" --lecture <N> --title "<Title>"
npm run lesson:scan
```

## 4. Mandatory Automatic Push Law (Always Push)
On every prompt with code, asset, or documentation updates:
- Automatically stage, commit, and push directly to `origin main` before concluding the turn.
- Remote repository MUST strictly be: `https://github.com/ys-sites/concordia.git`.
- Never require the user to manually request a push.
