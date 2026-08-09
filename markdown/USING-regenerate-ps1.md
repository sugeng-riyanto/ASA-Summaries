# Using `markdown\regenerate.ps1`

`regenerate.ps1` is the **zero-coding, no-AI** generator bundled in this
repository. Given the chapter markdown (the zip or already-extracted `.md`
files) it produces a complete, working hub skeleton:

- one self-contained notebook-style `topic-NN-*.html` page per chapter
  (same visual identity as `topic-01-physical-quantities.html`),
- a ready-to-wire `data.generated.js` (the `TOPICS[]` list),
- a re-branded `index.html` (title + sidebar header).

You still fill in the *content* of each page afterwards — the script gives you
the correct structure, headers, TOC and infobox skeletons so you don't have to
build any HTML by hand.

---

## 1. Requirements

| Thing | What it must be |
|---|---|
| OS | Windows (script is PowerShell) |
| Source | `markdown\docx_to_markdown.zip` (present in this repo) **or** your own zip of chapter `.md` files with the same name |
| Template | `topic-TEMPLATE.html` at the repo root (the `<style>` block is copied from it) |
| Encoding | the `.ps1` file must stay **UTF-8 with BOM** so Windows PowerShell 5.1 parses non-ASCII characters (`·`, `→`, emoji) — the bundled copy already is |

## 2. Quick start

From the **repo root** (the script finds the root by itself):

```powershell
# 1) generate skeleton pages + data (topics start as "waiting")
powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1

# 2) OR generate and link all pages immediately (st:'done')
powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 -Done

# 3) wire the generated data into the hub (do before opening index.html)
Copy-Item data.generated.js data.js

# 4) open the hub
start index.html
```

> Run it in a **fresh clone**, not over the default 9702 demo pages — the demo
> pages keep their topic numbers and would sit alongside the generated ones.

## 3. What each switch does

| Parameter | Meaning | Example |
|---|---|---|
| `-ZipName "…"` | filename of the source zip inside `markdown\` | `-ZipName "my-notes.zip"` |
| `-CourseTitle "…"` | used in `<title>` and page footers | `-CourseTitle "Mechanics Masterclass"` |
| `-Brand "…"` | replaces the `📗 9702 Physics` sidebar heading | `-Brand "📘 Mechanics Hub"` |
| `-BrandSub "…"` | replaces the sidebar subtitle | `-BrandSub "PREMIUM HANDWRITTEN NOTES"` |
| `-Done` | set every topic `st:'done'` (cards link their pages immediately) instead of `'wait'` | `-Done` |

Full example with everything:

```powershell
powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 `
  -ZipName "docx_to_markdown.zip" -CourseTitle "Mechanics Masterclass" `
  -Brand "📘 Mechanics Hub" -BrandSub "PREMIUM HANDWRITTEN MECHANICS NOTES" -Done
```

## 4. What the script actually does

```
markdown\docx_to_markdown.zip
        │  (1) Expand-Archive
        ▼
markdown\expanded\*.md             16 chapters + Summaries.md
        │  (2) for each chapter:
        │     Read-Sections → "## / ### " are sections, "####" become sub-bullets,
        │     inline image refs stripped, headings cleaned
        │  (3) clamp to 8 sections per page; overflow → "Remaining Sections" list
        ▼
topic-01-basic-mathematics.html  …  topic-16-fluid-mechanics.html  topic-P1-summaries.html
        (each: <style> copied from topic-TEMPLATE.html, sidebar TOC, cover,
         per-section placeholder boxes, print button, scroll-spy, listen.js)
        │  (4) build data.generated.js  (TOPICS[] from the 17-row manifest)
        │  (5) re-brand index.html  (title + sidebar)
        ▼
data.generated.js   index.html
```

Each generated page's sections contain **placeholder note boxes** telling you
what to paste there (formulas → `box formula`, examples → `box memo`,
exercises → `box warn`), so converting a chapter is mostly copy-and-paste.

## 5. After running — the manual to-do list

1. **Review** `topic-NN-*.html` files: open a few in a browser; fix headings
   the auto-splitner may have mangled or merged strangely.
2. **Fill content** section by section (cheat sheet in
   [`HOW-TO-make-a-hub.md`](HOW-TO-make-a-hub.md) — `## → <h2>`, `>` callouts →
   `.box`, tables verbatim, formulas `<b>…</b>` etc.).
3. **Redraw/trim images** — the chapters ship ~2,400 PNG screenshots; redraw
   simple diagrams as inline SVG, keep only photos that matter (don't commit
   the raw `*_files/media/*` folders in bulk).
4. **Wire data** — `Copy-Item data.generated.js data.js`.
5. **Verify in the hub** — open `index.html`: sidebar lists all topics, search
   + filters + progress work, every `st:'done'` page opens.
6. **Publish**:
   ```powershell
   git add -A
   git commit -m "mechanics hub: 17 topics + dashboard"
   git push origin main
   ```
   Then GitHub → Settings → Pages → Deploy from branch `main`, folder `/` (root).

## 6. Customizing the topic manifest

The list of chapters lives in the `$topics = @(…)` block near the top of the
script. Each row is:

```powershell
@{ n='5'; id='vectors'; f='topic-05-vectors.html'; md='05. Vectors.md';
   t='Vectors'; ic='🧭'; lvl='AS' }
```

| Key | Meaning |
|---|---|
| `n` | displayed topic number (`'1'…'16'`, `'P1'`) |
| `id` | unique camelCase id used by `app.js` anchors |
| `f`  | output file name the card opens |
| `md` | source chapter file name inside `markdown\expanded\` after unzip |
| `t`  | full human title |
| `ic` | emoji chip |
| `lvl` | sidebar group code (`'AS'`, `'A2'`, `'RES'`) — must match `GRPS` in `app.js` |

Add or remove rows then re-run; new pages and `data.generated.js` update in one
pass.

## 7. Common questions

**The console prints `Â·`/`Ã»`.** `regenerate.ps1` lost its UTF-8 BOM (renames /
`git` line-ending conversion can drop it). Re-save the file as **UTF-8 with
BOM** (e.g. in VS Code: File → Save with encoding → UTF-8 with BOM).

**The hub shows no cards.** `data.js` still holds the old demo. Copy
`data.generated.js` over `data.js` and refresh.

**A chapter yielded only 1–2 sections.** It probably uses `#` (one hash) for
main headings — the scanner treats `##`/`###` as sections. Either re-export
the `.md` with `##` headings or add the chapter's `#` headings to the scanner's
regex (`^#{2,3}` → `^#{1,3}`).

**Emoji renders as a box.** Fine on real browsers; the terminal just lacks the
glyphs. The files are UTF-8.

## 8. Relation to the AI route

`regenerate.ps1` is the deterministic half of the workflow. The command line
equivalent of `markdown/AI-REBUILD-HUB.md`'s build step — it's what you use
when you want **reproducible scaffolding** rather than agent creativity. For a
fully hands-off build (content included), paste the prompt in
[`AI-REBUILD-HUB.md`](AI-REBUILD-HUB.md) instead.