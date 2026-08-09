# HOW-TO — Turn `docx_to_markdown.zip` into a working hub, start to publish

This guide builds a **static, zero-build website** in the exact format of
[`ASA-Summaries/index.html`](https://sugeng-riyanto.github.io/ASA-Summaries/index.html)
from the source content in this folder (`docx_to_markdown.zip` → 16 chapter
`.md` files + `Summaries.md`, each with a `*_files/media/*.png` image set).

There are two routes:

- **Route A (recommended, zero coding):** clone, then give
  [`AI-REBUILD-HUB.md`](AI-REBUILD-HUB.md) plus this folder to any AI coding
  agent — it generates all pages from the markdown and pushes to GitHub.
- **Program:** run `regenerate.ps1` — it generates the whole skeleton and
  dashboard (verified); you then fill the notes.

**The clone → AI → push order works like this:**

```
1. git clone https://github.com/sugeng-riyanto/ASA-Summaries.git my-hub
2. cd my-hub
3. copy your markdown chapters/zip into markdown/   (or keep the bundled one)
4. open markdown\HOW-TO-make-a-hub.md and markdown\AI-REBUILD-HUB.md
5. ask your AI to run the AI-REBUILD-HUB.md instruction (read the .md files,
   generate all topic pages, build data, verify, and git push)
6. enable GitHub Pages → your site is live
```

The rest of this guide is the detailed, no-AI manual version of that.

---

## What you end up with

```
index.html           Hub dashboard  (sidebar, search, filters, stats)
styles.css           Hub-only styles
responsive.css       Shared mobile/tablet/print layer (loaded last on every page)
app.js               Hub logic (nav, grid, stats, progress)
data.js              THE ONLY DATABASE: TOPICS[], GLY[], CONST[]
listen.js            "Listen" speech panel + table-wrap utility
favicon.svg          Atom-orbit icon
topic-01-slug.html … topic-NN-slug.html     one self-contained page per chapter
topic-P1..P3         Optional resource pages (Practical / Formulae / Glossary)
```

Everything is driven by `data.js`. `app.js` builds the sidebar and dashboard
grid from `TOPICS[]`; a topic is `st:'done'` (its card links to its file) or
`st:'wait'` (renders a placeholder from `pts`). Topic pages are self-contained
HTML with inline `<style>`, so a single page travels offline and prints to A4.

---

## The 3-minute path (script does the work)

**0. Prereqs** — Windows with PowerShell (present on any Windows) and `git`.
The web part is plain HTML/JS; the only "build" is one PowerShell script.

**1. Clone**
```
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git my-mechanics-hub
cd my-mechanics-hub
```
Put your `docx_to_markdown.zip` into `markdown/` (already there in this copy).
Keep the run inside this fresh clone — run once per new course.

**2. Run the generator**
```
powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 -Done
```
What it does for you (it is verified to work end-to-end):

| # | It produces | Output |
|---|-------------|--------|
| 1 | unpacks the zip into `markdown\expanded\` | 17+ chapter `.md` files |
| 2 | reads each chapter, splits it into sections | `topic-01-basic-mathematics.html` … `topic-16-fluid-mechanics.html`, `topic-P1-summaries.html` |
| 3 | injects the notebook `<style>` from `topic-TEMPLATE.html` | all `topic-*.html` |
| 4 | writes a ready-topics list | `data.generated.js` |
| 5 | re-brands the hub title/sidebar | `index.html` |

**3. Wire the data and test**
```
copy data.generated.js data.js          # PowerShell: Copy-Item data.generated.js data.js
start index.html                      # open in any browser
```
You now have a real dashboard: 17 cards, sidebar, search, filters, progress,
`st:'done'` links opening each generated page.

**4. Publish (when ready)**
```
git add -A
git commit -m "mechanics hub: 17 topics + dashboard"
git push origin main
```
GitHub → Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
Your site: `https://<you>.github.io/my-mechanics-hub/` (auto-rebuilds on
every push).

---

## What the generator makes look like (and what to do next)

Each generated topic page contains:

- a sidebar with a TOC of its sections, the "← Back to Course Hub" link and
  print button
- a cover header (title + chips + "EXAMINER'S BRIEF" box)
- one notebook block per source section, pre-numbered
  ```
  ## "From the source"     →  <section class="page" id="s1"><h2>1 · …</h2>
  ### keyed name           →   included as a section
  #### detail              →   h3/sub-bullets under the current section
  > ***Example* N** etc.   →   .box "SOLVED / EXERCISE" memo
  tables                    →   kept literally; listen.js wraps them automatically
  ```
- (when the professor merges many sub-topics) a final "Remaining sections"
  list so nothing is lost

So the script gives you the **full skeleton**; you then re-write each block
with the real teaching content from the `. md` chapter. See
[Converting a chapter](#converting-a-chapter) below.

---

## Converting a chapter (the content step)

For each chapter `.md`:

1. Read the `## Chapter Contents` list. Use it to confirm/remaster section
   numbering (the generator already used it).
2. Open the generated `topic-NN-slug.html`. For every numbered `<section>`:
   - keep the heading; delete the placeholder `.box tip` prose and paste the
     facts.
   - formulas → `<div class="box formula"><span class="tag">FORMULA</span>…`
   - defs/examples → `<div class="box memo"><span class="tag">SOLVED</span>…`
   - traps/reminders → `<div class="box warn"><span class="tag">TRAP</span>…`
   - tables → copy the `<table>…</table>` verbatim (the html renderer reads it fine).
- diagrams → **redraw as inline SVG** (the notebook style does it: arrows via
      inline SVG markers, circles/ellipses drawn with `<circle>`/`<ellipse>`), do NOT ship
      the 2,384 PNG chips. For photos that carry data, `<img src="…/media/imageN.png">`
     referencing the copied `img/media/` folder.
3. Numbers and units are sacred — the generator will not dream them.
4. Delete trailing `### …` leftovers and keep the italic deodorant that Word
   exported as `*em*`.

---

## Customizing

**Topics list** — edit the `$topics = @(…)` manifest at the top of
`markdown\regenerate.ps1`: each row is `n, id, f (file), md (source), t (title),
ic (emoji), lvl ('AS'|'A2'|'RES')`. Add/remove rows and re-run; new topic pages
+ data appear automatically.

**Groups / filters** — the sidebar groups are the `GRPS` array in `app.js`
(default `AS Level Core / A Level Extension / Supplementary`). Change them
there and keep the toolbar buttons in `index.html` (`.fbtn data-f=…`) in sync.
Keep each topic's `lvl` among those group codes.

**Branding** — `regenerate.ps1` re-brands `index.html` for you via
`-Brand “SUSERNAME” -CourseTitle …`. Colors/fonts are edited by re-theming the
shared `:root` tokens across `styles.css` and `responsive.css` and each
`topic-*.html` (see `skills.md` Skill B for the safe find/replace recipe).

**Resources pages** — `topic-P2-formulae-data.html` and
`topic-P3-glossary-index.html` auto-render `CONST[]`/`GLY[]` from `data.js`
(`buildConstTable`, `buildGlossary`). Fill `GLY` with the glossary of these
JEE chapters, `CONST` with the mechanical, and delete entries when refreshing.

**Keep them “waiting”** — If some chapters aren't ready yet, set their
`st:'wait'` in `data.generated.js` (or append `pts` bullets). They render as
placeholder cards until you film them with a page.

---

## Publishing / hosting

Option A — **GitHub Pages** (free, instant):
```
git init; git add -A; git commit -m "mechanics hub"
git branch -M main
git remote add origin https://github.com/<YOU>/<repo>.git
git push -u origin main
```
Settings → Pages → Source: Deploy from a branch → branch `main`, folder `/ (root)`.
URL: `https://<YOU>.github.io/<repo>/`.

Option B — **local / offline**: keep the folder, open `index.html`. Nothing
else needed. `responsive.css` + `favicon.svg` must travel with the pages.

---

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Pages render with `=` signs in titles | Your zip used `##`/`###` inconsistently; the generator caps at 8 sections + a “remaining” — raise the cap by editing `if($secs.Count -gt 8)` in `markdown\regenerate.ps1`. |
| PowerShell prints `Â·` / `Ã»` | The `.ps1` must be **UTF-8 with BOM**; re-save the script with BOM (the bundled copy already is). |
| No emoji in cards | `data.js` needs `<meta charset="UTF-8">` — remove from `index.html` should fix. |
| The grid is empty | `data.js` wasn't copied; rerun the generator and `Copy-Item data.generated.js data.js`. |
| Pages print without margins | Each page inline CSS includes `@media print`; print via browser “Save as PDF”. |

---

## Checklist

- [ ] fresh clone created; `markdown\docx_to_markdown.zip` in place
- [ ] `powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 -Done` ran green
- [ ] `data.js` has 17 rows, `st:'done'`, files exist
- [ ] `start index.html` → cards, sidebar, search, filters, progress work
- [ ] each `topic-*.html` opens with TOC + notebook style + print button
- [ ] images redrawn as SVG or slimmed; no giant `media/` folders pushed
- [ ] `git add -A && git commit && git push`
- [ ] Pages enabled; URL reachable

Now you're the author of the next notebook hub. That's the whole
recipe — head start Mechanics notes. ✔