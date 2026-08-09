# CONTEXT — Project Context & Architecture

Deep context for anyone (or any agent) new to this repo.

## Purpose

A premium **"handwritten-style" revision hub** for a Cambridge International
exam syllabus (AS & A Level Physics 9702). It presents ~28 topics plus 3
resource pages as printable, notebook-style study sheets, plus a hub page
that ties every topic together with search, filtering, and progress.

## Repository layout

```
index.html            Hub dashboard (sidebar, search, filters, stats)
styles.css            Hub-only styles (hub shell)
app.js                Hub logic (nav, grid, stats, progress)
data.js               Syllabus model: TOPICS[], GLY[], CONST[]
listen.js             Speech panel + auto-table-wrap utility (all pages)
responsive.css        Shared responsive/print layer (all pages, loaded last)
favicon.svg           Atom-orbit icon (linked on every page)
graphs-appendix.html  Standalone bonus page
topic-01 … 28,        Topic pages (self-contained, inline <style>)
topic-P1..P3          Resource pages (Practical, Formulae, Glossary)
```

## How pages are built

- Hub loads: `data.js` -> `app.js` builds sidebar (`#navBox`), dashboard
  grid (`.card`s), and synthetic resource pages (`#dynPages`).
- Progress is persisted in `localStorage` key `phys9702-progress`.
- Topic pages are **static HTML** linked from the hub's grid, only shown as
  "done" in the sidebar.
- The last topic pages (P1–P3) also render live tables via `buildConstTable`
  and `buildGlossary` in `app.js` from `data.js` (CONST/GLY).

## Data model (data.js)

Each entry in `TOPICS`:
```
{ id, n, lvl: 'AS'|'A2'|'RES', ic, t, st: 'done'|'wait', f, pts: [..] }
```
- `n` — topic number (or P1/P2/P3).
- `lvl` — drives the sidebar groups (AS Core / A2 Extension / RES).
- `ic` — emoji chip.
- `t` — full title.
- `st: 'done'` — links file `f`; `st:'wait'` renders a placeholder with file `f` reserved.
- `pts` — syllabus bullet points for the placeholder page / tools.

`GLY` (glossary) and `CONST` (constants) are plain arrays of [term, def] /
[name, value] used by the glossary + formulae hub pages.

## Cohesive design tokens (used on every page)

```css
:root {
 --blue:#1e3a8a; --royal:#2547d0; --ink:#20242c; --sky:#e3edff; --line:#dbe7ff;
 --hl:#fff3b0;  --mint:#d9f6e6;  --pink:#ffe0ea; --lav:#ece4ff;
 --margin:#ffb3b3; --green:#2f9e6e; --rose:#d64571; --violet:#7a5af5; --amber:#e8a23e;
}
```
Fonts (Google): `Caveat` (headings), `Kalam` (labels), `Patrick Hand` (body).
Loaded via `<link>` on every page — same family for both local + published.

## Something important you should remember

Because every page embeds its own `<style>`, duplication is trivial but
*they can drift*. When editing visual identity (colors/typography) across all
pages, treat the whole set as a single asset — use `tab.md` scripts or a
careful find/replace. See `skills.md` for the retheme workflow.