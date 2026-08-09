# SUBAGENT — How to Delegate Work

When a multi-tool agent wants us to delegate work, assign narrow, complete
tasks. This repo is static HTML/JS/CSS, so sub-agents can be `explore` or
`general` types. These are ready-to-paste task briefs.

## Task briefs (paste into a sub-task prompt)

### Task: Retheme / global color & font refresh

```
Task text: <path> is a static "handwritten notes hub" (many self-contained
HTML pages). Goal: change ONLY the visual identity tokens (colors + fonts)
shared by all pages; keep layout, copy, and print behavior unchanged.

Edit el: the :root { --blue, --royal, --ink, --sky, --line, --hl, --mint,
--pink, --lav, --margin, --green, --rose, --violet, --amber } block that is
repeated verbatim in styles.css, responsive-aware rules, and in EVERY
topic-*.html inline <style>. Also the Google Fonts <link> on every page
(currently Caveat + Kalam + Patrick Hand).

Rules:
- Change only tokens/fonts, NOT content, layout, or data.js.
- If fonts change, update the fonts <link> on EVERY page.
- After editing ANY file ensure it is not 0 bytes, then run `git diff --stat`.
- Report the file count you changed.
```

### Task: add / update one topic

```
Project uses data.js as the single syllabus database. Each entry:
{ id, n, lvl:'AS'|'A2'|'RES', ic, t, st:'done'|'wait', f, pts:[...] }.

- Placeholder path: only set st:'wait' (hub auto-renders a placeholder,
  no page file needed).
- Full path: copy topic-TEMPLATE.html to topic-NN-slug.html, write the
  page, then set st:'done', f:'topic-NN-slug.html' in data.js.
Don't invent filenames outside topic-NN-slug.html.
Verify sidebar + grid + search on index.html afterwards.
```

### Task: table / print / mobile fix

```
Working dir: D:\Physics\physicsAsALevel Summary.
Fix responsiveness for tables/cards on mobile. Use shared responsive.css
(loaded last on every page). Tables are wrapped automatically by listen.js
into .tbl-wrap — do NOT add manual wrappers. After every write, check file
length > 200 B and nothing in the diff shows a truncated file.
```

## Delegation looks like

| Task | Sub-agent suggestion |
|---|---|
| "Explain how X works" (read-only) | explore |
| Write several topic pages from data.js | general |
| Global retheme + diff audit | general |
| Audit selectors/layout inventory | explore |

Always give: the absolute working dir, a "don't touch .git / no npm"
line, and the check: `git status --short` + `git diff --stat`.