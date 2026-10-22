# Engineering quality metrics

Measured locally on 2026-10-22. Numbers in the current-state tables come from the commands shown; they
are not estimates. Performance and click-path values copied from earlier audits are labelled as baselines
and must not be presented as results of the current QA work.

## Current automated baseline

| Measure | Current value | Evidence |
|---|---:|---|
| Courses | 4 | `npm run validate:integrity` |
| Sections | 39 | `npm run validate:curriculum` |
| Lessons | 155 | `npm run validate:curriculum` |
| Curriculum steps | 595 | `npm run validate:curriculum` |
| Reachable questions | 1,847 | `npm run validate:integrity` |
| Generated route cases | 775 | `npm run validate:integrity` |
| KaTeX expressions compiled | 17,600 | `npm run validate:integrity` |
| Document-link occurrences checked | 318 | `npm run validate:integrity` |
| Unique published documents in curricula | 286 | `npm run validate:curriculum` |
| Video cards checked | 290 | `npm run validate:integrity` |
| Video duration represented in curricula | 1,367 min | `npm run validate:curriculum` |
| Practice-bank questions quality checked | 825 | `npm run validate:questions` |
| Teacher-exam questions quality checked | 74 | `npm run validate:questions` |
| Orphan questions / videos / documents | 0 / 0 / 0 | `npm run validate:curriculum` |
| Teaching lessons outside at least one stock rule | 65 of 83 | `npm run inventory` |
| Documents that no lesson directly uses | 72 | `npm run inventory` |

`validate:integrity` checks generated course, lesson, step, search and question-bank routes; verifies that
their format/parse round trip is canonical; confirms lesson, step, question, document, figure and video-card
destinations; and compiles the math found in every normalized question source with the same KaTeX settings
used by the application. `validate:curriculum` remains the source of truth for physical lesson media,
published documents, content placement and saved-progress identifiers.

## Content-inventory balance

These are warnings for planning content work, not broken-link counts. A single lesson may appear in more
than one column, so the columns do not add up to the 65 flagged lessons.

| Course | Teaching lessons | No explanation | Fewer than 3 checks | Fewer than 8 practice questions | No worked example | Difficulty mix off target | Unused-by-lesson documents |
|---|---:|---:|---:|---:|---:|---:|---:|
| ENGR 213 | 22 | 2 | 4 | 7 | 10 | 13 | 40 |
| MIAE 221 | 27 | 1 | 4 | 14 | 10 | 10 | 24 |
| MIAE 215 | 18 | 2 | 1 | 12 | 3 | 5 | 4 |
| INDU 211 | 16 | 0 | 0 | 8 | 9 | 2 | 4 |
| **Total** | **83** | **5** | **9** | **41** | **32** | **30** | **72** |

The rules are defined in [content-inventory.md](./content-inventory.md): at least one explanation, three
check questions, eight practice questions and one worked example per teaching lesson, with a target
difficulty mix of 40/40/20.

## Student-flow baseline

The following values are the redesign walkthrough recorded in [process-map.md](./process-map.md). This QA
change did not re-walk the interface, so the target column remains a target.

| Student job | Recorded redesign: clicks / loads / decisions | Target |
|---|---|---|
| Know what to study for an approaching midterm | 2 / 1 / 2 | 1 / 1 / 0 |
| Continue where I left off | 1 / 1 / 0 | 1 / 1 / 0 |
| Practise one weak topic | 3 / 1 / 1 | 1 / 1 / 0 |
| Watch the solution to a missed question | 1 click in the quiz; 3 later | 1 in the quiz; 2 later |
| Find a PDF or formula | 1 click after typing for PDFs; formulas not indexed | 1 click after typing for both |

## Performance reference baseline

The values below come from [lean-audit.md](./lean-audit.md) at the earlier `7cb1855` redesign snapshot.
They are retained as comparison points and have not been re-measured for the current working tree.

| Measure | Earlier measured baseline |
|---|---:|
| Home JavaScript | 243 KB raw / 79 KB gzip |
| Home CSS | 54 KB raw / 10 KB gzip |
| First ENGR 213 quiz payload | approximately 450 KB gzip |
| First quiz payload in another course | approximately 410 KB gzip |
| PDF viewer chunk | 125 KB gzip |

## Browser and accessibility acceptance matrix

Playwright and axe are not installed in this checkout. The following checks therefore remain an explicit
manual release matrix; passing local static QA does not imply that these browser checks passed.

| Area | 390 px | 768 px | 1280 px | Acceptance condition |
|---|---|---|---|---|
| Home, course, player, quiz, My learning, search | Required | Required | Required | No horizontal overflow; primary action and next step remain visible |
| Keyboard navigation | Required | Required | Required | Logical tab order, no keyboard trap, visible focus on every control |
| Touch controls | Required | Required | Required | Interactive targets are at least 44 × 44 CSS px |
| Resume state | Required | Required | Required | Reload during a quiz/video and return to the saved question/time |
| Documents | Required | Required | Required | Viewer opens; fallback/open/download links resolve |
| Lesson and solution videos | Required | Required | Required | Poster loads; media returns 200/206; play, seek, captions when supplied, and fallback work |
| Accessibility | Required | Required | Required | Landmarks and names are exposed; focus is visible; contrast and zoom are manually inspected |

CDN-only `solve:*` video binaries and posters are intentionally absent from a fresh local checkout. Their
registry links are checked locally, but network delivery must be verified in the video row above.

