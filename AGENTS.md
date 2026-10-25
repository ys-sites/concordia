# Antigravity Autonomous Workflow Rules: Studocu Pipeline Law

## 1. MANDATORY FIRST STEP ON EVERY PROMPT
Before executing any user task or generating any educational material, the agent MUST review and adhere to this permanent pipeline rule:

### The Studocu Replication & Queueing Law:
Whenever the user provides new teacher materials (lecture notes, problem sets, course outlines, labs, slides) and asks to expand, explain, summarize, solve, or create any new documentation (e.g., Markdown topic guides, 1-page rapid review sheets, fully solved problem guides, compiled PDFs):
1. **Primary Output Placement**:
   - Save the primary Markdown and compiled PDF files in their proper course structure under:
     `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\<Course>\...`
     (Where `<Course>` is `Engr 213`, `Indu 211`, `Miae 215`, or `Miae 221`).

2. **Mandatory Studocu Replication**:
   - Immediately replicate a copy of the newly created final document(s) (especially the compiled PDF / standalone guide) into:
     `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Need to Upload\`

3. **Mandatory Metadata Queue Logging**:
   - Immediately append a complete Studocu upload metadata entry to:
     `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Need to Upload\Studocu_Need_To_Upload.md`
   - The metadata entry must include:
     - Exact Filename
     - **University**: `Concordia University`
     - **Course**: Verified course name & code (`Applied Ordinary Differential Equations (ENGR 213)`, `Introduction to Production and Manufacturing Systems (INDU 211)`, `Mechanical, Industrial & Aerospace engineering (MIAE 215)`, or `Materials Science (MIAE 221)`)
     - **Category**: Dropdown value (`Lecture notes`, `Summaries`, `Practice materials`, `Practical`, `Mandatory assignments`, `Tutorial work`, `Other`)
     - **Title**: Strict Course Code prefix (e.g., `MIAE 215 - ...` or `ENGR 213 - ...`)
     - **Academic year**: `2025/2026`
     - **Description**: 2-3 sentence high-yield summary highlighting core concepts and exam utility.

## 2. PROMOTION TO "DONE" CYCLE
When the user states that the pending documents in `Need to Upload` are finished/uploaded (e.g., *"Needs to Upload is done"*, *"I uploaded them"*, *"Mark as done"*):
1. Move the physical files from:
   `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Need to Upload\`
   $\longrightarrow$ `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Done\`
2. Transfer their metadata entries from:
   `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Need to Upload\Studocu_Need_To_Upload.md`
   $\longrightarrow$ `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Done\Studocu_Done.md`
3. Reset `Studocu_Need_To_Upload.md` to reflect `Currently Pending Uploads: 0`.

## 3. STRICT ANONYMITY & PRIVACY LAW (NO PERSONAL IDENTITY OR ABSOLUTE USER PATHS)
Under no circumstances should the student's personal name (`Sharafath`, `Mohamed Sharafath`, etc.) or personal computer paths (e.g. `C:\Users\Sharafath\...`, `file:///c:/Users/Sharafath/...`, `users.sharafat`, etc.) appear in ANY generated study guide, Markdown topic guide, review sheet, PDF, HTML, assignment, or website file.
1. **No Personal Names in Documents**: All headers, footers, cover pages, and metadata must refer to generic academic designations (e.g., `Concordia University · Gina Cody School of Engineering`, `Course Engineering Hub`, or `Student Academic Guide`).
2. **Relative File Paths Only**: Any hyperlinks or references to other course documents must use relative repository paths (e.g., `../02 - Comprehensive Topic Guides/...` or `[Document Title](./filename.pdf)`) rather than machine-specific local drive paths.
3. **No Personal Footers or Machine Citations**: Never stamp local user paths onto rendered PDFs or web documents.

## 4. CURRICULUM-GROUNDED VISUAL ARCHITECTURE LAW (TEACHER SLIDES INTEGRATION & NO ASCII DIAGRAMS)
Whenever creating, expanding, explaining, or summarizing lecture notes:
1. **Fundamental Bedrock in Teacher Materials**:
   - The primary foundation and scope of every guide must be the teacher's lecture notes, slides, and syllabus topics.
   - External intuitive explanations, physical analogies, and mathematical proofs are strongly encouraged, but they must directly expand and elucidate the specific concepts, slides, and examples provided by the professor.
2. **Strict Prohibition of Low-Quality 2D ASCII Art**:
   - Never generate crude text/ASCII diagrams (e.g. ASCII character grids for crystal structures, ASCII boxes for system loops, or ASCII arrows for chemical bonding).
3. **Extraction & Embedding of Official Slide Figures**:
   - High-resolution diagrams, schematics, engineering curves, and process flowcharts must be extracted directly from the professor's lecture notes and slides (using PyMuPDF / `pymupdf` at high DPI) or generated as high-fidelity visual image assets.
   - Save extracted figures into a local `images/` directory within the topic guide folder.
   - Embed the visual directly into the Markdown document: `![Figure Caption](./images/figure_name.png)`.
   - Explicitly cite the visual figure to the curriculum (e.g., *"**Figure 1**: Crystal vs. Amorphous $\text{SiO}_2$ network from Lecture 4 (Callister Fig. 3.23) — expanded analysis below"*), followed by an in-depth pedagogical breakdown that explains every aspect of the visual in detail.

## 5. MANDATORY LESSON INGESTION, ZERO-SKIP EXPANSION, VIDEO PROMPT & WEBSITE PIPELINE LAW
Whenever the user submits a prompt, message, or code comment referencing new teacher lessons, slides, lecture notes, syllabus updates, or course problem sets, the agent MUST immediately execute through this automated command pipeline:

### Phase 1: Deep Pedagogical Dissection & The "Zero-Skip" Derivation Law
1. **Dissect Without Barriers**:
   - Break down abstract theoretical content into crystal-clear pedagogical units.
   - Use intuitive, physical analogies (such as the ballroom electron sea for metals, magnetic checkerboard for ceramics, cooked spaghetti for polymers) before introducing formal mathematics.
2. **Strict Zero-Skip Arithmetic & Algebra Standard**:
   - Never skip ANY intermediate arithmetic or algebraic step (e.g. state $11 + 7 = 18$ explicitly).
   - Show full variable substitutions with their explicit physical units (e.g. $\text{Pa}$, $\text{m}^3$, $\text{K}$).
   - Write out every intermediate algebraic rearrangement and calculator reduction line-by-line.
   - Never use dismissive phrases like "it is trivial to show" or "after simple simplification".
3. **The "Why It Works" & Trap Diagnostics**:
   - Every guide must include a dedicated **"Why This Method Works"** section establishing the physical or mathematical mechanism.
   - Every guide must include a **"Common Exam Pitfalls & Traps"** table highlighting exactly why wrong options appear on exam papers and how to steer clear of them.
4. **Document Output & Studocu Compliance**:
   - Save the Comprehensive Topic Guide in:
     `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\<Course>\02 - Comprehensive Topic Guides (Expanded & Intuitive)\Lecture <N> - <Title> (Comprehensive Guide).md`
   - Replicate immediately to `Semester 1\Studocu\Need to Upload\` and log the metadata entry in `Studocu_Need_To_Upload.md`.

### Phase 2: Mandatory 001 Main Scan & Video Prompt Synthesis (For New Files)
When a new teacher lesson file is introduced (not on repeated queries for existing files):
1. **Automated Resource Scan**:
   - The agent MUST scan `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\001 Main\` (specifically `001 Main/ode-motion-lessons/TASTE.md` and `001 Main/07 - Local Projects & Lessons/motion-video-director/SKILL.md`).
   - Extract current visual tokens: chalkboard background (`#182246`), chalk (`#E8EDF7`), independent/x terms (`#38BDF8`), dependent/y terms (`#FBBF24`), constants/μ (`#F472B6`), verified answers (`#34D399`), trap red (`#F87171`), and Caveat notes (`#FDE68A`).
   - Extract audio parameters: Kokoro-82M TTS (`af_heart`, speed `0.96`, 0.3s sentence pause, +0.6s card hold).
2. **Synthesize Video Production Spec & Prompt**:
   - Generate the complete video production spec following the locked 6-chapter architecture:
     1. **The Big Idea** (Intuitive analogy & physical mechanism)
     2. **Spot It** (Exam pattern recognition in $\le 10$ seconds)
     3. **Why It Works / Method** (Step-by-step rigorous mechanism)
     4. **Worked Example** (Teacher lecture problem solved with zero skipped steps)
     5. **The Traps** (Common calculation slips with negative stamps)
     6. **Recap** (Boxed formula summary + next teaser)
   - Save the spec to `Semester 1\<Course>\<VideoSubdir>\Lecture <N> - <Title> - Video Spec.md`.

### Phase 3: Website Implementation & Learning Curve Optimization
1. **Document Registry**:
   - Register the new document in `c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\website\src\data\filteredDocumentsData.ts`.
2. **Interactive Practice Bank**:
   - Generate interactive practice questions in `website/src/data/extra/<course>_lecture<N>.ts` with step-by-step KaTeX solutions, wrong-answer diagnostics for each distractor, and exam pitfall tips.
3. **Video Lesson Registry**:
   - Add the video lesson metadata entry to `website/src/data/<course>Lessons.ts`.

### Executable Command Script
The entire pipeline can be verified or executed via the website command script:
```bash
cd "c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\website"
npm run process-lesson -- --course "<Course>" --lecture <N> --title "<Title>"
npm run lesson:scan
```

## 6. MANDATORY AUTOMATIC GIT PUSH LAW (ALWAYS PUSH)
On every prompt where changes, fixes, enhancements, or new files are created or modified:
1. **Always Push Automatically**: The agent MUST ALWAYS proactively stage, commit with a descriptive message, and push directly to `origin` before concluding the turn.
2. **Never Wait to be Asked**: The user should never have to ask "push" or prompt for a sync; every completed change is pushed automatically as the final step.
3. **Mandatory Remote Target**:
   - All commits and branch pushes MUST strictly target: `https://github.com/ys-sites/concordia.git`
   - Before pushing, always verify that the remote URL is `https://github.com/ys-sites/concordia.git`.
   - Never push to alternate repositories without explicit user instruction.



