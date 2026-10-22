# Improvements log

This is the measured Kaizen log for the redesign. An entry records a before state, the change, and direct
evidence. Items without a measurement stay in the backlog and are not described as improvements.

## 2026-10-22 · Part 6 QA foundation

| Measure | Before | After | Evidence |
|---|---:|---:|---|
| All-source question math/content render defects | 17 detected on the first integrity run | 0 detected | `npm run validate:integrity` |
| Generated routes checked automatically | Not checked in the lean audit | 775 passing cases | `npm run validate:integrity` |
| Questions covered by the all-source render pass | Practice bank only in the earlier validator | 1,847 normalized questions | `npm run validate:integrity` |
| KaTeX expressions in the all-source pass | Not measured | 17,600 compiled | `npm run validate:integrity` |
| Curriculum placement | 0 orphans in the earlier audit | 0 question/video/document orphans | `npm run validate:curriculum` |

Changes made:

- Added `scripts/qa-integrity.ts` for canonical route round trips, curriculum destination integrity,
  document/figure/video-card references and KaTeX compilation across every normalized question source.
- Added `npm run validate:integrity` and the aggregate `npm run qa` release gate.
- Corrected the 17 failures exposed by the first run: unmatched math delimiters and JavaScript escape
  sequences in ENGR 213 worked solutions, plus literal currency markers that were being interpreted as
  math in INDU 211 questions.
- Refreshed four wording-only positional fingerprints through the project's documented
  `validate:curriculum -- --update-lock` path. No lesson, step or question identifier changed.
- Re-generated the content inventory after the corrections.

No click-path or bundle-size reduction is credited to this entry; neither was changed or re-measured by
this QA work.

## 2026-10-22 · Lessons led by their video; quiz verified end to end; design, touch and security pass

Applies the five IE skills with the toolkit in `001 Main` (impeccable's detector, ui-ux-pro-max and WCAG 2.2
target sizes, the web-essentials security rules).

| Skill | Measure | Before | After | Evidence |
|---|---|---:|---:|---|
| Process & layout | Separate "Key notes" and "Read:" steps | 96 steps in 74 lessons | 0: slides, guides and key notes sit under the lesson's video | progress-id lock diff, `validate:curriculum` |
| Process & layout | Clicks from a lesson's video to its slides at the right page | 1–2 (open the notes or reading step) | 0 (cards under the video) | walked in the preview |
| Lean | Teaching lessons that open on a video | 18 of 83 | 59 of 83 (18 course videos, 41 outside videos promoted from optional); 19 open on key notes, 5 on the check | curriculum build |
| Quality | Design-detector findings on 7 page types | 55 (+30 once the bank list loaded) | 18, all accepted exceptions (below) | `npx impeccable detect` per route |
| Quality | Text below WCAG AA contrast | 44 | 0 | same scans |
| Quality | Touch targets under 24 × 24 px at 390 px | 51 | 0 | browser check of 7 routes |
| Simulation | End-to-end quiz runs (check, practice with reload and resume, timed paper, review queue, bank) in 4 courses at 1440 and 390 px | not run | 32 of 32 flows pass, 0 console errors, first question in 21–160 ms | browser run |
| Quality | Quiz defects found by that run | 3 | 0 | rerun |
| Security | PDF proxy on malformed input / `..` segments | 500 / passed through | 400 / dropped | handler test |
| Security | Visitor API: method allowlist, session-id validation, abuse limit | none | GET/POST only, ids `[A-Za-z0-9_-]{1,64}`, 120 counted visits a minute per address (real campus traffic stays far below; totals never go down) | code review |

Quiz defects fixed: a timed exam showed the solution of open questions and scored them wrong (they are now
marked by the student on the results screen, updating the score and the saved attempt); open questions could
not be skipped; the results review named the wrong option letter after shuffling.

Accepted design-detector exceptions (deliberate, kept on purpose):

- `gradient-text`, `line-length` on the home hero: the owner asked for the original hero and disclaimer
  exactly as they were.
- `pulsing-dot` on the live site activity counter: a live indicator the owner asked to keep; it stops under
  `prefers-reduced-motion`.
- `overused-font` (Inter): the brand body font, recorded in `.impeccable/config.json`.
- `repeated-container-text` "Midterm" in exam readiness: one per course, inherent.
- `nested-cards` on the question bank's segmented filters: a false positive (form controls, not cards).

Not changed, needs the owner's approval: security response headers (`X-Content-Type-Options`,
`Referrer-Policy`, `Permissions-Policy`, a report-only Content Security Policy) belong in `vercel.json`,
which is deployment configuration.

## Open Kaizen queue

| Priority | Measured gap | Next verification |
|---|---|---|
| 1 | 41 of 83 teaching lessons have fewer than 8 practice questions | `npm run inventory` after content balancing |
| 1 | 32 teaching lessons have no worked example | `npm run inventory` after examples are added |
| 1 | 9 teaching lessons have fewer than 3 check questions | `npm run inventory` after checks are added |
| 2 | 5 teaching lessons have no video or notes explanation; 19 have no video at all | `npm run inventory` after explanations are linked |
| 2 | 30 teaching lessons are outside the 40/40/20 difficulty-mix tolerance | `npm run inventory` after question rebalancing |
| 2 | 72 published documents have no direct lesson link | Decide whether to link, archive or retain as library-only stock, then re-run inventory |
| 2 | CDN-only solution media cannot be proven reachable from a local filesystem scan | Run the browser/video matrix and confirm 200/206 responses |
| 2 | Browser checks (quiz flows, touch targets, design detector) run from a local script, not in CI, because Playwright and axe are not installed | Add them as dev dependencies in a separately approved change |
| 3 | Earlier home/quiz bundle measurements belong to the `7cb1855` baseline | Re-measure a production build before claiming a performance improvement |

## Local release gate

Run:

```text
npm run qa
```

The command checks practice-question quality, curriculum placement and saved-progress compatibility,
route/content integrity, then performs the TypeScript and production build. The manual browser matrix in
[metrics.md](./metrics.md) remains required for viewports, focus, touch targets, persistence and CDN media.

