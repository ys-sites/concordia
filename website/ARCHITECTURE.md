# Concordia study portal: architecture

This file has two parts. **Part A** is the site as it was on `main` at commit `8aec220`, before the
redesign. **Part B** is the redesigned architecture on branch `redesign/udemy-style`. Part C lists the
content that the redesign makes public for the first time, for the owner to confirm before anything is
pushed.

---

## Part A — the site before the redesign

### A.1 Stack and build

- React 18 + TypeScript + Vite 6, deployed on Vercel with Root Directory = `website`.
- Course files live next to the app, in `Engr 213/`, `Indu 211/`, `Miae 215/`, `Miae 221/` at the repo root
  (1.4 GB tracked, MP4s included).
- `vite.config.ts` has two plugins:
  - `coursePdfPlugin`: serves course files under `/courses/<slug path>` in dev, copies them to
    `dist/courses` at build (MP4s skipped, they stream from Cloudflare R2), and exposes
    `virtual:course-documents`, a compact `[relativePath, size][]` list of every published PDF.
  - `questionCountsPlugin`: bundles `src/data/questionsData.ts` with esbuild at build time and exposes
    `virtual:question-counts`, so the ~1 MB bank never loads just to print a number.
- `build/publishedFiles.ts` is the single source of truth for what is published: it walks the course
  folders, skips `_Source & Archive`, textbook scans, `node_modules`, and everything `isHiddenFromSite()`
  in `src/data/localOnly.ts` rejects. Files over 90 MB are skipped (Vercel's static limit).
- URLs: `src/utils/pdfUrl.ts` (`slugSegment`, `publicCoursePath`, `getPdfUrl`, `getVideoUrl`).
  `getVideoUrl` points at the R2 bucket `https://pub-5cc0664f25874108bacca04abca6da5a.r2.dev/Concordia`
  unless `VITE_MEDIA_CDN_URL` says otherwise; uploads go through `scripts/uploadMediaToCloudflare.mjs`.
- API routes: `website/api/pdf.js` (PDF proxy by path) and `website/api/visitors.js` (visitor counter,
  O(1) per heartbeat).

### A.2 Routing

Hash router in `src/utils/navigationRouter.ts` (`parseHash` / `formatHash`, `RouteState`). `src/App.tsx`
switches on six view modes:

| View mode | Hash | Screen |
|---|---|---|
| `HERO` | `#/` | `HeroCourseSelector` |
| `WORKSPACE` | `#/course/:id?folder=…&doc=…` | `CourseWorkspace` (folder tree, tabs, hidden-folder entry) |
| `QUIZ` | `#/quiz/:course/:section` | `QuizEngine` |
| `RESULTS` | `#/results/:course/:section` | `QuizResults` |
| `QUESTION_BANK` | `#/bank[/:course]` | `QuestionBankBrowser` |
| `FILTERED_DOCUMENT` | `#/filtered…` | `FilteredSubSite` (password page for assessment PDFs) |

Heavy screens load through `src/utils/safeLazy.ts` (lazy import with one reload on a stale chunk).
`CourseWorkspace` is prefetched when the browser is idle.

### A.3 Data

| Module | What it holds |
|---|---|
| `src/types.ts` | `CourseId`, `CourseMeta`, `CourseDocument`, `PracticeQuestion`, `SolutionStep` |
| `src/data/coursesData.ts` | `COURSES_DATA` (4 courses with their published documents), `documentFromPath` |
| `src/data/questionsData.ts` | 825 practice questions: the base bank plus `extra/*.ts`, with baby-step solutions merged from `solutions/*.ts` |
| `src/data/quizSections.ts` | `QUIZ_PLANS`: drill sections per course, midterm/final mixes, MIAE 215's 40/60 output/write mix |
| `src/data/teacherExamQuestions.ts` (+ `teacherExamMiae215.ts`) | 74 teacher-paper questions (MIAE 221: 40, MIAE 215: 34) |
| `src/data/teacherExamPracticeData.ts` | blueprints of the teacher practice papers |
| `src/data/engr213_midterm_drill_banks.ts` | 550 ENGR 213 method-drill questions (10 methods) used by the Midterm Mastery companion |
| `src/data/cppTraceData.ts` | step-by-step C++ execution traces for `CppCodeSimulator` |
| `src/data/filteredDocumentsData.ts` | the assessment PDFs behind the second password page |
| `src/data/localOnly.ts` | `LOCAL_ONLY_PATTERNS`, `SITE_EXCLUDED_PATTERNS`, `isHiddenFromSite` |
| `src/data/vault/*.enc.json` | the four encrypted Midterm Gates (below) |

`npm run validate:questions` (`scripts/validate-questions.ts`) compiles every formula with KaTeX and
checks sections and diagnoses. On `main` it fails with 44 errors that predate the redesign: 41 ENGR 213
questions still carry chapter `ch1`, which no drill section lists, and 3 MIAE 215 teacher questions carry
topics that are not teacher-drill topics.

### A.4 Videos

All motion lessons share the `MotionLesson` shape (`src/data/engr213Lessons.ts`): `num, title, source,
video, poster, duration, sizeMB, chapters[]`.

| Course | Folder | Count | Registry | Shown in |
|---|---|---|---|---|
| ENGR 213 | `Engr 213/Tutor Videos` | 8 | `engr213Lessons.ts` | Midterm Mastery companion |
| ENGR 213 | Midterm Gate solve videos (R2, random names) | 93 | gate content `solveVideos` | hidden folder, after each question |
| MIAE 215 | `Miae 215/09 - Code Lab Walkthrough AI Videos` | 5 | `miae215CodeLabVideos.ts` | `CppCodeLab` |
| MIAE 215 | `Miae 215/08 - Teacher Midterm Practice AI Videos` | 34 (Q01–Q31 + 3 Fall 2026) | `miae215MidtermVideos.ts` | teacher practice drill, `QuestionVideo` |
| MIAE 215 | `Miae 215/10 - Practice Midterm 2026 AI Videos` | 3 | `miae215PracticeMidtermVideos.ts` | `PracticeMidterm2026` |
| MIAE 221 | `Miae 221/08 - Teacher Topics Explained AI Videos` | 10 | `miae221Lessons.ts` | `Miae221TopicVideos`, `TopicVideosHub` |
| MIAE 221 | `Miae 221/09 - Teacher Midterm Practice AI Videos` | 40 | `miae221MidtermVideos.ts` | teacher practice drill |
| MIAE 221 | YouTube | 11 | `miae221YouTubeVideos.ts` | `Miae221YouTubeSection` |
| all | YouTube, per gate topic | 91 | gate content `videoStops` | hidden folder |
| INDU 211 | — | 0 | — | — |

Players: `MotionLessonPlayer.tsx` (chapters, speed, fullscreen), `QuestionVideo.tsx`, `CodeLabVideo.tsx`,
`TopicVideosHub.tsx`, `vault/GateSolveVideo.tsx`, `vault/QuizExplain.tsx` (`VideoPlayer` for YouTube).

### A.5 Quiz and drill engines (five of them)

1. `QuizEngine.tsx` + `QuizResults.tsx` + `DrillPicker.tsx`: the public bank drills (20 questions, `WorkedSolution`, `SourceList`, read-aloud).
2. `QuestionBankBrowser.tsx`: browse and filter the public bank.
3. `vault/DrillRunner.tsx` + `vault/drill.ts`: gate drills (mc, multi, tf, numeric with tolerance, output, calculator items with "new numbers").
4. `vault/SkillQuiz.tsx` + `vault/quizPool.ts` + `vault/VaultQuizSubPage.tsx` + `vault/QuizExplain.tsx`: the gate's build-your-own quiz.
5. `Engr213MidtermCompanion.tsx` (4,371 lines): ENGR 213's method classifier, tutor videos, tutorials, past exams and a trainer over the 550-question drill bank.

Course-specific one-offs: `TeacherMidtermPracticeSection`, `Miae215ExamPaper`, `PracticeMidterm2026`,
`CppCodeLab`, `ExamCheatsheetSection`, `WeeklyPath`, `TermPaperVaultSection`.

### A.6 Hidden vault ("Midterm Gate")

- `src/components/vault/*` (38 files). The course badge glyph opens `?folder=Midterm Gate`; a password
  unlocks `src/data/vault/<course>-midterm-gate.enc.json`, decrypted in the browser by `vaultCrypto.ts`
  (PBKDF2-SHA-256, 250k iterations → AES-256-GCM). One password unlocks all four.
- Plaintext sources: `<Course>/0X - Studocu - Midterms and Tests/Midterm Gate Source/content.mjs`
  (gitignored), encrypted by `scripts/encrypt-vault.mjs`.
- Shape: `GateContent` in `vault/vaultTypes.ts`: exams, subjects → topics, past-exam questions,
  repeat clusters, lessons (`formulas[]` with idea, when-to-use, worked example, quiz items, calculator
  presets), YouTube video stops, a study plan, and course extras (ENGR 213 Gradesaver tabs, MIAE 215
  Dr. Gordon past midterms and matches).

| Course | Exam questions | Lessons (quiz items) | Topics | Clusters | YouTube | Solve videos |
|---|---|---|---|---|---|---|
| ENGR 213 | 54 | 12 (89) | 12 | 12 | 19 | 93 |
| INDU 211 | 29 | 9 (51) | 7 | 7 | 9 | 0 |
| MIAE 215 | 18 | 15 (87) | 15 | 10 | 16 | 0 |
| MIAE 221 | 120 | 24 (124) | 21 | 33 | 47 | 0 |

### A.7 Browser storage on `main`

| Key | Where | What |
|---|---|---|
| `engr213_companion_mastery_v3` | Engr213MidtermCompanion | mastered method drills |
| `engr213_vault_rep_count` | Engr213MidtermCompanion | repetition counter |
| `gate_stats_<COURSE>` | vault/drill.ts | per-question last result and attempts |
| `gate_skill_<COURSE>` | vault/SkillQuiz | last quiz settings |
| `gate_plan_<COURSE>`, `gate_plan_start_<COURSE>` | vault/StudyPlan | checked plan steps, plan start date |
| `quiz-auto-read`, `vault-quiz-auto-read` | QuizEngine, VaultQuizSubPage | read-aloud preference |
| `topic-videos-last:<code>` | TopicVideosHub | last video opened |
| `gate_key_<COURSE>`, `gate_doc_<COURSE>` (session) | vaultCrypto, MidtermGate | unlocked key, open tab |
| `concordia_filtered_doc_unlocked`, `miae221_filtered_doc_unlocked`, `concordia_term_paper_vault_unlocked` (session) | filtered pages | unlocked flags |
| visitor keys, `chunk_reload_*` | visitorStats, safeLazy | counter and reload guard |

### A.8 What made the old site hard to use

Content was organised by where it came from (folders, drills, vault tabs, video hubs), not by what a
student should do next. A student had to choose between five quiz engines, three video hubs, a folder
tree of 272 PDFs and a password page, with no thread through them and no memory of where they stopped.

---

## Part B — the redesigned site

### B.1 The idea

One path per course: **sections** (the teacher's chapters, in lecture order) → **lessons** (one topic
each) → **steps** (watch → read the key notes → check yourself → worked example → practise → past exam
questions). The page tells the student exactly what is next, and remembers everything in the browser.
Udemy's structure (catalogue → course page → player with a curriculum sidebar), an off-white theme,
one identity colour per course, no accounts.

### B.2 Folder layout

```
website/src/
  App.tsx                      router + shell (top bar, footer)
  learn/
    model.ts                   Course / Section / Lesson / Step / LearnQuestion types
    courses.ts                 course identity: code, title, colours, thumbnails
    curriculum/                one hand-written spec per course (sections, lessons, what feeds them)
    build/buildCurriculum.ts   pure builder: spec + data → curriculum (used by Vite and the validator)
    questions/                 adapters that turn every question source into LearnQuestion, lazy per course
    videos.ts                  every video in one registry: course, section, lesson, order, kind
    docs.ts                    which published PDFs are study material, and where each one lives
    quiz/                      the one quiz engine (check / practice / exam modes)
    progress/                  versioned local store, hooks, migration, Leitner review, suggestions
    pages/                     Home, Course, Player, MyLearning, Search, QuestionBank
    components/                cards, sidebar, step views, charts, dialogs
    tools/                     formula calculators, C++ simulator and lab, TSP simulator
  data/gates/<course>.ts       the former vault content, as plain typed modules
```

The curriculum is computed at build time by the `virtual:curriculum` Vite plugin from the specs and the
data, so the home page has every count without loading a question. Questions load per course when a
quiz step opens.

### B.3 Routes

| Hash | Page |
|---|---|
| `#/` | Home: continue card, the four courses, recommended next |
| `#/course/:id` | Course page: what you'll learn, curriculum accordion, Videos tab, Resources tab, Exam prep |
| `#/learn/:course/:lesson/:step` | Player: stage + curriculum sidebar + Overview / Notes / Ask AI / Resources tabs |
| `#/my-learning` | Stats, mastery by topic, score history, review queue, suggestions, export / import / reset |
| `#/search?q=` | Search across courses, lessons, videos, questions and documents |
| `#/bank[/:course]` | Question bank (browse and practise any question) |

Old links keep working: `#/course/:id?folder=…` opens the course page (with the PDF if `doc=` is set),
`#/quiz/:course/:section` opens the matching lesson's practice step, `#/results/…` goes to My learning,
`#/filtered…` goes to the course's Exam prep.

### B.4 One quiz engine

`learn/quiz/` replaces all five engines. Every source becomes a `LearnQuestion` (`mc`, `multi`, `tf`,
`num` with tolerance, `text` for program output, `self` for open questions the student marks
themselves). Modes: **check** (in-lesson, instant feedback), **practice** (feedback after each),
**exam** (timed, feedback at the end). Wrong-option diagnosis, step-by-step worked solutions, hints,
flags, confidence, solve videos, read-aloud, Ask AI, retry wrong.

### B.5 Progress (no accounts)

`learn/progress/` keeps one versioned key, `concordia.progress.v1`: step completion, video positions,
the quiz in progress (question, answers, flags, timer, order), every attempt, per-question history with
Leitner boxes, last location, streak, study time, notes. Every read and write is guarded, so the site
works with storage blocked. The old keys in A.7 are migrated once.

### B.6 Component decisions

| Old component | Decision | Reason |
|---|---|---|
| `MotionLessonPlayer` | keep, gains resume and progress callbacks | the one video player |
| `PdfCanvasViewer`, `PdfViewerModal` | keep | notes and slides open on the right page |
| `WorkedSolution`, `QuestionFigure`, `OptionContent`, `CppOptionView`, `SourceList` | keep, used inside the new engine | the bank's step-by-step solutions |
| `CppCodeSimulator` + `cppTraceData` | keep as a tool | step-through traces |
| `CppCodeLab` | keep as a tool step in MIAE 215 | write-the-program practice |
| `TspFactorialSimulator` | keep as a tool step in INDU 211 | routing intuition |
| `ReadAloudButton`, `speechEngine`, `audio` | keep | read-aloud on every text step |
| `vault/AskAiModal` | keep, moved to `learn/` | "Ask AI" / "Explain it differently" |
| `vault/calculators*.ts` | keep, moved to `learn/tools` | formula lab and calculator questions |
| `vault/vaultWorkedSolutions`, `vaultFoundation` | merge into question adapters | worked solutions for gate questions |
| `QuizEngine`, `QuizResults`, `DrillPicker`, `vault/DrillRunner`, `vault/drill.ts`, `vault/SkillQuiz`, `vault/quizPool`, `vault/VaultQuizSubPage`, `vault/QuizExplain`, `vault/DrillsMenu` | merge into `learn/quiz` | five engines become one |
| `QuestionBankBrowser` | replace with `learn/pages/QuestionBank` | same job on `LearnQuestion` |
| `HeroCourseSelector`, `Navbar`, `Footer`, `CourseWorkspace` | replace | new shell, home and course page |
| `TopicVideosHub`, `Miae221TopicVideos`, `Miae221YouTubeSection`, `QuestionVideo`, `CodeLabVideo`, `vault/GateSolveVideo` | replace | every video lives in the curriculum and the Videos tab |
| `TeacherMidtermPracticeSection`, `PracticeMidterm2026`, `Miae215ExamPaper` | replace with Exam prep sections | exam questions go through the quiz system, never as a page or PDF |
| `Engr213MidtermCompanion` | replace; its drill bank and method diagnostics feed ENGR 213 lessons | 4,371 lines of one-off UI |
| `ExamCheatsheetSection` | replace with the course cheat sheet built from lesson notes | |
| `WeeklyPath`, `vault/StudyPlan` | replace with the study planner on My learning | |
| `vault/MidtermGate`, `GateGlyph`, `vaultCrypto`, `gateCourses`, `Drawers`, `TopicsHub`, `VaultLessonSubPage`, `FormulaLab`, `shared` | delete after migration | the password gate is gone; their content is in the curriculum |
| `vault/PatternAnalyzer` | replace with "Exam insights" on the Exam prep tab | repeat clusters stay useful |
| `vault/GradesaverDoc`, `vault/GordonMidtermsDoc` | replace | their content becomes lessons and practice |
| `vault/ExamPaper`, `vault/PaperGuide`, `vault/BomTree` | delete | the INDU 211 paper drill was already disabled on `main` (`8aec220`) |
| `FilteredDocumentSection`, `FilteredSubSite`, `TermPaperVaultSection` | delete | no password pages; no whole exam shown as a PDF |
| `reactbits/*` | delete | unused |
| `scripts/encrypt-vault.mjs`, `src/data/vault/*.enc.json` | delete after migration | |

### B.7 Publishing rules

`localOnly.ts` keeps working as before. One change: **no whole exam is ever shown as a PDF.** The
assessment whitelist that the password pages used (`filteredDocumentsData.ts`) no longer publishes
anything, and these folders are excluded from the site and the deployment:

- `Engr 213/Midterm`, `Engr 213/Final`, `Engr 213/06 - Quiz & Midterm Exam Prep`;
- `Miae 215/MIAE_215_midterm_review_questions`;
- `Indu 211/05 - Assignments & Solutions` (assignments and the term paper are graded work);
- everything Studocu (already excluded).

Their questions reach students as practice in the quiz system.

---

## Part C — content made public by the redesign (confirm before pushing)

Removing the password means the former vault content ships as plain data in `src/data/gates/`.
Everything below comes from past exams or from material the owner collected, and was until now only in
ciphertext.

| Course | Past-paper questions (ids prefixed by exam) | From |
|---|---|---|
| ENGR 213 | 54 | Fall 2018 Midterm 1 (F18), Winter 2017 First Midterm (W17), Winter 2025 Term Test 1 (W25T) and Quizzes 1–2 (W25Q), Summer 2021 Quizzes (S21), Fall 2021 Quiz 1 (F21), other Concordia quizzes 2016–2022 (OQ) |
| INDU 211 | 29 | Fall 2020 midterm (M20), 2019 midterm sample (S19), Fall 2020 final and 2022 sample final, Ch 1–5 only (F20, SF22), Assignment 2, 2025 (A2) |
| MIAE 215 | 18 | Winter 2024 midterm (M24), Fall 2023 midterm Q2 (F23), Midterm Review #1 as posted 2021/22 and 2025/26 (R21, R25), Quiz #2 (Q2) |
| MIAE 221 | 120 | Fall 2024 (F24), 2025 version A (A25) and Winter 2026 (W26) midterms, MECH 221 finals (FX, F17), Practice Problem Set #1 (PPS1) |

Also newly public:

- the 93 ENGR 213 solve videos (already on R2 under random names; now linked openly);
- the exam-pattern analysis (repeat clusters, "very likely / likely / possible" expectations);
- ENGR 213's Gradesaver tutor tabs, and MIAE 215's Dr. Gordon past-midterm papers and matches;
- the YouTube study path per topic (third-party videos, linked, not copied).

Already public before the redesign and unchanged: the 825-question practice bank (212 of them marked as
modelled on past papers), the 74 teacher-paper questions, and all motion lessons.
