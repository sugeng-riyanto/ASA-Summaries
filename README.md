# ASA-Summaries

A premium **"handwritten-notes" revision hub** for Cambridge International
AS &amp; A Level Physics (9702) — every topic as a printable notebook-style
study sheet, tied together by a searchable dashboard with progress tracking.

Built as a **static, zero-build site** (plain HTML/CSS/JS) that is designed
to be **copied and re-themed for any other exam syllabus**.

> 👉 **Fork & reuse:** everything you need to spin up "your own syllabus"
> version is baked into this repo. Steps are below.

---

## What it looks like

- **28 topic chapters** + **3 resource pages** (Practical, Formulae, Glossary)
- Notebook look: ruled paper, margin line, Caveat/Kalam/Patrick Hand fonts
- Dashboard with **search, AS/A2/Resources filters, and a progress bar**
- "Mark as revised" tracker (saved to `localStorage`)
- **Print / export to PDF** tuned for A4
- Fully **responsive**: phones, tablets, desktop, plus print styles
- **Read-aloud** "Listen" panel (browser speech synthesis)

## Quick start (as a reader)

Open `index.html` in any browser — no server, no build step.

---

## Make your OWN syllabus version ✔

The whole project is a template. Two copies:

| Step | What to do |
|------|-----------|
| **1. Fork / clone** | `git clone` this repo, or copy the folder |
| **2. Run `rebrand.ps1`** | Edit the theme tokens + title variables at the top, run `powershell -ExecutionPolicy Bypass -File rebrand.ps1` — it re-themes `styles.css`, `responsive.css`, `app.js`, `data.js` and **every** `topic-*.html` in one pass. |
| **3. Replace the syllabus** | Rewrite `data.js` — `TOPICS[]`, `GLY[]`, `CONST[]`. Each topic is one line; set `st:'wait'` until a page exists. |
| **4. Write topic pages** | Copy `topic-TEMPLATE.html` → `topic-01-your-slug.html`, fill sections. Add the file name to `data.js`. |
| **5. Re-publish** | Push to your own repo, enable **GitHub Pages** (Settings → Pages → branch `main`, root `/`). Done. |

Full instructions live in the docs below.

---

## Companion docs (they travel with the project)

| File | What it's for |
|---|---|
| [`agent.md`](agent.md) | Operating rules for AI agents/humans editing this repo |
| [`context.md`](context.md) | Architecture, file layout and data model explained |
| [`skills.md`](skills.md) | Recipes: Publish, Retheme, add a Topic, print baseline |
| [`memory.md`](memory.md) | Decisions, gotchas and hazards (read before bulk edits) |
| [`subagent.md`](subagent.md) | Ready-made briefs for delegating sub-tasks |
| [`topic-TEMPLATE.html`](topic-TEMPLATE.html) | Skeleton page for new chapters |
| [`rebrand.ps1`](rebrand.ps1) | One-command re-theme + rebrand for a new syllabus |

---

## Case studies — clone this for a real syllabus

Five ready-to-copy blueprints show exactly how `data.js`, the sidebar groups
(`GRPS`) and the topic filenames change for a different course. Every step is
**copy–paste**: rewrite `data.js`, edit the `GRPS` array + filter buttons, and
drop the topic pages in later.

| Case study | Syllabus | Group layout | Topics |
|---|---|---|---|
| [`case-study-checkpoint-science-0893.md`](case-study-checkpoint-science-0893.md) | **Cambridge Lower Secondary Science (Checkpoint) 0893**, Stages 7–9 | 3 stage groups + Resources | 42 + 3 |
| [`case-study-igcse-physics-0625.md`](case-study-igcse-physics-0625.md) | **Cambridge IGCSE Physics 0625** (2026–2028) | 6 section groups + Resources | 24 + 3 |
| [`case-study-igcse-maths-0580.md`](case-study-igcse-maths-0580.md) | **Cambridge IGCSE Mathematics 0580**, Core & Extended | 9 chapter groups + Resources | 36 + 3 |
| [`case-study-igcse-chemistry-0620.md`](case-study-igcse-chemistry-0620.md) | **Cambridge IGCSE Chemistry 0620**, Core & Extended | 12 chapter groups + Resources | 33 + 3 |
| [`case-study-as-level-maths-9709.md`](case-study-as-level-maths-9709.md) | **Cambridge International AS & A Level Mathematics 9709** | 6 paper groups (P1–P6) + Resources | 38 + 3 |
| [`case-study-as-al-biology-9700.md`](case-study-as-al-biology-9700.md) | **Cambridge International AS & A Level Biology 9700** | AS + A2 + Resources | 19 + 3 |
| [`case-study-as-al-chemistry-9701.md`](case-study-as-al-chemistry-9701.md) | **Cambridge International AS & A Level Chemistry 9701** (topics 1–37) | 6 discipline groups + Resources | 33 + 3 |

**Quick recipe (identical for every study):**

```
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git <your-course>
cd <your-course>
# edit rebrand.ps1 → set $NewTitle, $NewSub, paste your theme tokens
powershell -ExecutionPolicy Bypass -File rebrand.ps1
# then: rewrite data.js TOPICS[]/GLY[]/CONST[]  (copy from the case study)
#       replace the GRPS=[...] line in app.js for your sidebar groups
#       match the filter buttons in index.html to the same group codes
#       copy topic-TEMPLATE.html → per-topic files
git push -u origin main   # enable GitHub Pages → done
```

> **New to this pattern?** Start with a case study, read `memory.md` for the
> bulk-edit hazards, and reuse `topic-TEMPLATE.html` for every new chapter.

---

## Files

```
index.html           Dashboard (sidebar, search, filters, progress)
styles.css           Hub-only styles
responsive.css       Shared mobile/tablet/print layer (all pages)
app.js               Hub logic (nav, grid, stats, progress, localStorage)
data.js              The only syllabus database: TOPICS[], GLY[], CONST[]
listen.js            "Listen" speech panel + table wrappers
favicon.svg          Atom-orbit site icon
topic-TEMPLATE.html  Reusable page skeleton ⭐
rebrand.ps1          Re-theme helper for new projects ⭐
topic-01..28, P1-P3  Content pages (self-contained, inline <style>)
graphs-appendix.html Bonus graphs chapter
agent/context/memory/skills/subagent.md   Team/GitHub working docs
case-study-*.md                           Copy-paste blueprints for other syllabi ⭐
```

## Publish to GitHub Pages

1. `git init && git add -A && git commit -m "first commit"` and `git branch -M main`
2. `git remote add origin https://github.com/<you>/<repo>.git`
3. `git push -u origin main`
4. GitHub → Repo **Settings → Pages** → Source: **Deploy from a branch**,
   branch `main`, folder **/ (root)**.
5. Your site: `https://<you>.github.io/<repo>/` (rebuilds on every push).

## License

Built for classroom/educational use. Please keep the author credit footer
on pages and `README.md` if you re-theme it.