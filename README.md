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

The whole project is a template with **two build routes** — an AI-driven one
(no manual page writing) and the classic manual one. Both start the same way:

| Step | What to do |
|------|-----------|
| **1. Fork / clone** | `git clone` this repo, or copy the folder |
| **2. Add your chapters** | Put your chapter markdown files (or a `.docx`/`.zip` of exported markdown) into `markdown/`. A ready example bundle ships in `markdown/docx_to_markdown.zip`. |
| **3. Route A — let an AI build it (recommended)** | Open [`markdown/AI-REBUILD-HUB.md`](markdown/AI-REBUILD-HUB.md) and copy that one file's contents into any AI coding agent (opencode, Claude, Cursor, Copilot). The AI reads your chapter markdown, generates every `topic-*.html` page in the notebook style, wires `data.js`, verifies the hub, and pushes to GitHub — then you just enable Pages. |
| **4. Route B — run the generator** | `powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 -Done` — builds all topic-page skeletons + `data.generated.js` from `markdown/` automatically, then fill in each page's notes by hand. |
| **5. Route C — fully manual (with case studies)** | Rewrite `data.js` — `TOPICS[]`, `GLY[]`, `CONST[]`; copy `topic-TEMPLATE.html` → per-topic files; edit `GRPS` in `app.js` and the filter buttons in `index.html`. See the case studies below. |
| **6. Re-publish** | Push to your own repo, enable **GitHub Pages** (Settings → Pages → branch `main`, root `/`). Done. |

### The AI route — new idea in a nutshell

You are **cloning a project, not starting from scratch**. `AI-REBUILD-HUB.md`
is a single self-contained prompt that tells an agent:

1. which files to read first (`topic-TEMPLATE.html`, `data.js`, `app.js`, …),
2. exactly how to map chapter markdown → notebook HTML (`##`/`###`/`####`,
   `>` callouts, tables, formulas → `.box` groups),
3. to generate **all** 17 topics, not a sample, and
4. to run and push on GitHub, reporting the URL.

So "build my AS-level hub from my Word notes" becomes: drag a `.docx` → export
to markdown → drop it in `markdown/` → paste `AI-REBUILD-HUB.md` → done.

> If your notes are still `.docx`, convert them to markdown first (Word → File
> → Save As → Markdown, or any docx→md converter), then zip them like the
> example `markdown/docx_to_markdown.zip`.

For the full step-by-step manual recipe, read [`markdown/HOW-TO-make-a-hub.md`](markdown/HOW-TO-make-a-hub.md).

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
| [`markdown/AI-REBUILD-HUB.md`](markdown/AI-REBUILD-HUB.md) | **Hand this one prompt to any AI** to regenerate the app from markdown chapters and push |
| [`markdown/HOW-TO-make-a-hub.md`](markdown/HOW-TO-make-a-hub.md) | Manual step-by-step build-from-scratch guide |
| [`markdown/USING-regenerate-ps1.md`](markdown/USING-regenerate-ps1.md) | How to run the generator: switches, output, customization, troubleshooting |
| `markdown/regenerate.ps1` | Verified generator: chapters → topic pages + data |

---

## Case studies — clone this for a real syllabus

Nine ready-to-copy blueprints show exactly how `data.js`, the sidebar groups
(`GRPS`) and the topic filenames change for a different course. Every step is
**copy–paste**: rewrite `data.js`, edit the `GRPS` array + filter buttons, and
drop the topic pages in later.

| Case study | Syllabus | Group layout | Topics |
|---|---|---|---|
| [`case-study-checkpoint-science-0893.md`](case-study-checkpoint-science-0893.md) | **Cambridge Lower Secondary Science (Checkpoint) 0893**, Stages 7–9 | 3 stage groups + Resources | 42 + 3 |
| [`case-study-igcse-physics-0625.md`](case-study-igcse-physics-0625.md) | **Cambridge IGCSE Physics 0625** (2026–2028) | 6 section groups + Resources | 24 + 3 |
| [`case-study-igcse-mathematics-0580.md`](case-study-igcse-mathematics-0580.md) | **Cambridge IGCSE Mathematics 0580**, Core & Extended | 9 chapter groups + Resources | 36 + 3 |
| [`case-study-igcse-chemistry-0620.md`](case-study-igcse-chemistry-0620.md) | **Cambridge IGCSE Chemistry 0620**, Core & Extended | 12 chapter groups + Resources | 33 + 3 |
| [`case-study-as-level-maths-9709.md`](case-study-as-level-maths-9709.md) | **Cambridge International AS & A Level Mathematics 9709** | 6 paper groups (P1–P6) + Resources | 38 + 3 |
| [`case-study-as-al-biology-9700.md`](case-study-as-al-biology-9700.md) | **Cambridge International AS & A Level Biology 9700** | AS + A2 + Resources | 19 + 3 |
| [`case-study-as-al-chemistry-9701.md`](case-study-as-al-chemistry-9701.md) | **Cambridge International AS & A Level Chemistry 9701** (topics 1–37) | 6 discipline groups + Resources | 33 + 3 |
| [`case-study-as-al-economics-9708.md`](case-study-as-al-economics-9708.md) | **Cambridge International AS & A Level Economics 9708** | 11 area groups + Resources | 36 + 3 |
| [`case-study-lower-secondary-maths-0862.md`](case-study-lower-secondary-maths-0862.md) | **Cambridge Lower Secondary Mathematics 0862**, Stages 7–9 | 4 strands + TWM + Resources | 17 + 3 |

**Quick recipe — Route A (AI, fastest):**

```
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git <your-course>
cd <your-course>
# put your chapter .md files (or a zip) in markdown/
# open markdown/AI-REBUILD-HUB.md and copy its contents into any AI coding agent
#   → it reads the chapters, generates all topic-*.html pages, wires data.js,
#     verifies, and pushes to GitHub
# then enable GitHub Pages → done
```

**Quick recipe — Route B/C (manual or generator):**

```
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git <your-course>
cd <your-course>
# (optional) powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 -Done
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
markdown/                                  Chapters + build tooling for the AI route
  AI-REBUILD-HUB.md                        One prompt: any AI regenerates the hub from markdown ⭐
  HOW-TO-make-a-hub.md                     Manual step-by-step recipe
  regenerate.ps1                           Generator: chapters → topic pages + data.generated.js
  docx_to_markdown.zip                     Example chapter bundle (16 Mechanics chapters)
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