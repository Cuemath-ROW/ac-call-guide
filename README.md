# AC Call Guide — US post-evaluation calls

A step-by-step call companion for Cuemath US admission counsellors. Open it during or after a parent call to structure the conversation, look up how to handle an objection, and read the payment plan correctly.

Live: https://cuemath-row.github.io/ac-call-guide/

## Files
- `index.html` — the app (single file, vanilla JS, no build step)
- `content.js` — **every word the counsellor reads**. Edit this file only.
- `bundle.css` — Cuemath design system (copied from JAI `context/design-resources/design-system/bundle.css`)
- `img/cuemath-wordmark.svg` — logo

## Editing content
1. Open `content.js`.
2. Flows are in `flows[]`, each with `steps[]`. Each step has `script`, `say[]`, `avoid[]`, optional `guardrails[]` (ids from `guardrails[]`), `objections[]` (keys like `price.discount`), `outcomes: true` to show the close picker.
3. Objections are in `objections.<type>.subs.<key>`: edit `draft` (the answer) and `dont`. `verbatims`, `best`, `avoid` are real transcript material; leave or trim.
4. Pricing is in `pricing`: fill the `grid` and `rules`. Anything marked TODO must be replaced before launch.
5. Tokens in scripts: `[AC]`, `[child]`, `[date]`, `[greet]`, `[parent]`. Anything else in square brackets is shown as-is for the counsellor to fill in speech.
6. Commit and push to `main`. GitHub Pages redeploys in about a minute.

## Local preview
```
cd ~/Documents/JAI/ac-call-guide && python3 -m http.server 8765
open http://localhost:8765
```

## Deploy
```
./deploy.sh "content update"
```
Never edit on GitHub directly. This clone is the source of truth (JAI local-first rule).

## Where the content came from
Transcript analysis of 479 post-eval calls, `JAI/ba/2026-09-03-us-post-eval-call-analysis.md`. Objection sub-types, parent verbatims and best/avoid examples are mined from `JAI/data/post-eval-calls/analysis/calls/*.json`.
