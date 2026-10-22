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

## Open Kaizen queue

| Priority | Measured gap | Next verification |
|---|---|---|
| 1 | 41 of 83 teaching lessons have fewer than 8 practice questions | `npm run inventory` after content balancing |
| 1 | 32 teaching lessons have no worked example | `npm run inventory` after examples are added |
| 1 | 9 teaching lessons have fewer than 3 check questions | `npm run inventory` after checks are added |
| 2 | 5 teaching lessons have no video or notes explanation | `npm run inventory` after explanations are linked |
| 2 | 30 teaching lessons are outside the 40/40/20 difficulty-mix tolerance | `npm run inventory` after question rebalancing |
| 2 | 72 published documents have no direct lesson link | Decide whether to link, archive or retain as library-only stock, then re-run inventory |
| 2 | CDN-only solution media cannot be proven reachable from a local filesystem scan | Run the browser/video matrix and confirm 200/206 responses |
| 2 | Browser accessibility is not automated because Playwright and axe are not installed | Complete the 390/768/1280 px manual matrix or add dependencies in a separately approved change |
| 3 | Earlier home/quiz bundle measurements belong to the `7cb1855` baseline | Re-measure a production build before claiming a performance improvement |

## Local release gate

Run:

```text
npm run qa
```

The command checks practice-question quality, curriculum placement and saved-progress compatibility,
route/content integrity, then performs the TypeScript and production build. The manual browser matrix in
[metrics.md](./metrics.md) remains required for viewports, focus, touch targets, persistence and CDN media.

