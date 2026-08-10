# MEMORY — Decisions, Traps & Soapbox

This file records durable knowledge that would otherwise be re-discovered the
hard way. Read it before large edits.

## 1. Design decisions (why things are the way they are)

- **Self-contained pages.** Every topic page inlines its `<style>`. This was
  chosen so a single page can be shared/printed and theme is stable offline.
  Cost: restyling touches every file → use the retheme recipe in skills.md.
- **Shared responsive layer.** `responsive.css` is linked *after* each page's
  own styles on every page. Any base-page rule you add might conflict with it
  (e.g. `table{display:block}` in responsive.css intentionally overrides the
  default `table` layout for phones).
- **Tables are wrapped by JS**, not by hand. `listen.js` wraps every `<table>`
  in `<div class="tbl-wrap">` so wide tables scroll sideways on mobile. Don't
  add manual wrappers; if a table looks un-wrapable, fix `listen.js`, not the
  page.
- **Per-page search/filter lives in `listen.js`.** It injects `#pgSearchBox`
  on any page with `section.page`/`header.page` blocks, and is *skipped on the
  hub* (the `#grid` guard). Adding a topic page needs no search markup — it
  appears automatically. Don't duplicate `id="pgSearchInput"` or
  `mark.pgHl`; if styling search results, extend `listen.js`.
- **Progress key** is `phys9702-progress` in `localStorage` — user data is
  per-device only.

## 2. Known traps / foot-guns

- **PowerShell regex truncation.** `(Get-Content) ... '-replace '</head>', X'`
  with an operand-concatenated string silently truncates the file to 0 bytes
  in some setups. If a batch file-edit leaves `Length 0`, recover with
  `git checkout -- *.html`. Always verify `Length > 200` and `git diff --stat`
  after bulk edits.
- **Search highlighter mutates the DOM.** `listen.js` unwraps/rewraps text in
  `<mark class="pgHl">` and hides `.page` sections while a query is active —
  this only happens client-side, never in the repo files. Keep that in mind
  when debugging a page via DevTools after typing in the search box.
- **Duplication drift.** P2/P3 and graphs-appendix reuse the same base CSS
  block; if the visual identity changes, update *all* peers (see memory #1).
- **`display:block` on tables.** On phone media queries we intentionally
  break table layout for sideways scrolling; the wrapper is `.tbl-wrap`.
  Don't "fix" this back to `display:table` outside the wrapper — you'll
  reintroduce horizontal overflow on phones.
- **Emojis & math symbols.** Pages load `Patrick Hand` etc. Beware diacritics /
  non-Latin emojis: they fall back to system fonts and may render differently
  in print. Keep symbols plain and standard.

## 3. Publishing

- GitHub Pages serves the default branch `main` from `/`. Site URL:
  `https://<owner>.github.io/<repo>/` (set once in Settings → Pages).
- Pushing `main` triggers a Pages rebuild automatically (a minute or two).
- Git identity is configured globally; commit on a named branch when
  collaborating — never force-push published history.

## 4. Naming conventions

- Topic files: `topic-NN-slug.html`; resources `topic-P1/P2/P3-*.html`.
- Topic ids: camelCase slug used in `data.js` (`id:'kinematics'`).
- `data.js` fields keep exactly: `id, n, lvl, ic, t, st, f, pts`.
- Only the hub (index.html) ever reads `TOPICS`; pages are static.

## 5. Register a new syllabus (short version)

1. Copy the repo (see `skills.md` Duplicate & Retheme).
2. Rewrite `data.js` TOPICS/GLY/CONST.
3. Keep `st:'wait'` placeholders until each page exists.
4. Publish to your own GitHub Pages.

Full steps live in `README.md` and `context.md`.