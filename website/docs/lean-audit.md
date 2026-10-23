# Lean audit: the seven wastes, applied to the site

Findings on the redesign as it stands (`redesign/udemy-style` at `7cb1855`), measured in the local
preview and the production build. Each row names the fix and the part of `improve/ie-principles` that
makes it. Changes and their before/after numbers are logged in `improvements-log.md`.

## Measurements behind the findings

| What | Number | How it was measured |
|---|---|---|
| Home page JavaScript | 243 KB (79 KB gzipped) + 54 KB CSS (10 KB gzipped) | `vite build`, the entry chunk in `index.html` |
| First quiz in ENGR 213 | ≈ 450 KB gzipped before the first question shows | question bank 309 KB (all four courses in one file) + maths renderer 78 KB + drill banks 41 KB + exam-prep data 28 KB |
| First quiz in another course | ≈ 410 KB gzipped | as above, without the drill banks, with that course's exam-prep data |
| PDF viewer | 125 KB gzipped, loaded on first PDF | `PdfCanvasViewer` chunk |
| Source files nothing imports | 83 files, 1.7 MB (35 of them the old vault UI) | `node scripts/unused-files.mjs` |
| Old stylesheet | `src/index.css`, 125 KB, no longer imported | replaced by `src/legacy.css` (10 KB) |
| Orphan questions, videos, documents | 0 / 0 / 0 | `npm run validate:curriculum` |
| Clicks for the five jobs | 1–3 now (see `process-map.md`) | walked in the preview |

## The seven wastes

| Waste | Found on this site | Fix | Part |
|---|---|---|---|
| **Motion** (extra clicks) | The Coming up card opens the reminder editor instead of the exam plan. Weak topics in My learning open the lesson's first step, not its practice. Finding a PDF in Resources takes course → tab → folder → file. | Coming up opens exam prep (edit becomes an icon). Weak rows and Today's plan link straight to the practice step. Search reaches any PDF or formula in one click after typing. | 3 |
| **Waiting** | The first quiz waits for ≈ 450 KB: one question bank file holds all four courses. Nothing is fetched ahead of the next step. Route changes show a blank area while chunks load. | Split the question bank per course at build time. Prefetch the next step's data (questions, video poster) while the current step is open. Skeleton loaders instead of blank space. Posters on every video (done in `7cb1855`). | 3 |
| **Over-processing** | Solved by the redesign: one quiz engine (`QuizRunner`), one video player (`MotionLessonPlayer`), one PDF viewer (`DocViewer`). The old engines are still in the repo. | Keep one of each; remove the old ones (below). | 3 |
| **Inventory** (unused stock) | 83 source files no route imports: the vault UI (35), `QuizEngine`, `QuizResults`, `CourseWorkspace`, `HeroCourseSelector`, `TopicVideosHub`, the per-course companions and their data modules. `src/index.css` (125 KB). | Delete the code once `unused-files.mjs` and the build prove nothing needs it. **Data modules with course content (`cppTraceData`, `teacherExamPracticeData`, `filteredDocumentsData`) are not deleted without the owner's OK.** | 3 |
| **Defects** | Fixed in `7cb1855`: thumbnails that broke after the browser cached them (CDN CORS mix), a counter rule that reset totals above 100 to 1, positional step ids that would move progress onto the wrong step. Still unchecked: KaTeX that fails to compile, links between routes. | Render test for every formula, route link check, Playwright paths, axe accessibility checks. | 6 |
| **Overproduction** | No orphans, but no view of balance: some lessons may have 40 questions and others 2, or no worked example. | Content inventory with min/max stock rules and a target difficulty mix per lesson. | 2 |
| **Unused talent** | Students can only use the general contact form; there is no way to flag a wrong answer where it is seen. | "Report a problem" (prefilled with the question or step id) and "Was this helpful?" on every step, reviewed weekly into the Kaizen log. | 5–6 |

## Already removed by the redesign

- The password vault and the separate password page for papers (every exam question is now practice in
  the quiz; no exam is shown as a whole PDF).
- Five quiz engines, three video hubs and a folder tree as the main way in.

## Targets

- No step needs more than one click to start; Next is always on screen in the player.
- A quiz answer takes one click or one key (1–5, then Enter): already true.
- Video → check → next lesson flows without going back to a menu: already true (Next, and the up-next
  prompt when a video ends).
- The home page's JavaScript stays at or below 79 KB gzipped; the first quiz of a course loads less than
  half of today's ≈ 450 KB.
