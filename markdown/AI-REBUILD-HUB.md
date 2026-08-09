# Regenerate the Hub App from the Markdown Chapters — AI instruction

> If a fresh user clones this repo and hands the next paragraph to an AI coding
> agent (opencode, Claude, Copilot, Cursor, …) as one prompt, the agent will
> rebuild the whole "handwritten notebook hub" app from the source markdown
> chapters and push it to GitHub. Everything after the `<br>` is the prompt.

<br>

---

**YOU ARE REBUILDING A SYLLABUS-HUB APP FROM MARKDOWN CHAPTERS.**

**Goal.** In this freshly cloned repo, regenerate the single-page "premium
handwritten notes hub" (the app that already lives here: `index.html` +
`data.js` + `app.js` + self-contained `topic-*.html` pages) so that **all its
topic pages are generated from the chapter markdown files** in
`markdown/docx_to_markdown.zip`. Preserve the existing app behavior
(sidebar, search, filters, progress in localStorage, print-to-PDF, listen
panel). Do this once, completely, then commit and push.

**Read these first (in order):**
1. `README.md` — the template contract: how the hub is wired, and the
   "Make-your-own-syllabus" recipe.
2. `context.md` — architecture: `index.html` is the hub, `data.js` is the only
   database (`TOPICS[] / GLY[] / CONST[]`), `app.js` renders sidebar, grid and
   placeholder pages, topic pages are self-contained static HTML with inline
   `<style>`.
3. `topic-TEMPLATE.html` — the exact page skeleton you must reproduce. Keep the
   `:root` design tokens byte-identical:
   `--blue:#1e3a8a; --royal:#2547d0; --ink:#20242c; --sky:#e3edff;
   --line:#dbe7ff; --hl:#fff3b0; --mint:#d9f6e6; --pink:#ffe0ea;
   --lav:#ece4ff; --margin:#ffb3b3; --green:#2f9e6e; --rose:#d64571;
   --violet:#7a5af5; --amber:#e8a23e`.
4. `data.js` (the schema: `id, n, lvl, ic, t, st, f, pts`) and `app.js`
   (groups `GRPS`, filter codes, localStorage progress key `phys9702-progress`).
5. `index.html` (the shell and card grid).
The existing `topic-01..28`, `topic-P1..P3` pages are the style references:
ruled-paper `.page`, red margin line, wavy-underline headings in Caveat /
Kalam / Patrick Hand (loaded from Google Fonts), infoboxes `.box`.

**Source content — unpack it first:**
- `markdown/docx_to_markdown.zip` contains 16 chapter `.md` files +
  `Summaries.md`, each with a `*_files/media/*.png` image set.
- If `markdown\expanded\` is empty, run:
  `powershell -Command "Expand-Archive -Path markdown\docx_to_markdown.zip -DestinationPath markdown\expanded -Force"`.
- You may also use `markdown\regenerate.ps1` as an accelerated scaffold — it
  already generates the 17 pages + `data.generated.js` from the chapters. Then
  your job becomes: review, fix, complete content, wire, verify, push.

**Do all of this (never stop after a sample):**

1. Build the topic map (17 rows) — chapter file → hub topic:
   ```
     1  basics       Basic Mathematics               📐  AS
     2  measures     Measurements & Errors           📏  AS
     3  experiments  Experiments & Practical Skills  🧪  AS
     4  units        Units & Dimensions              🔢  AS
     5  vectors      Vectors                         🧭  AS
     6  kinematics   Kinematics                      🏃  AS
     7  projectile   Projectile Motion               🎯  AS
     8  newton       Laws of Motion                  🚀  AS
     9  wep          Work, Energy & Power            ⚡  AS
    10  circular     Circular Motion                 🎡  AS
    11  com          Centre of Mass & Collisions     🎱  A2
    12  rotational   Rotational Mechanics            🌀  A2
    13  gravitation  Gravitation                     🌍  A2
    14  shm          Simple Harmonic Motion          🕰  A2
    15  elasticity   Elasticity                      🧵  A2
    16  fluids       Fluid Mechanics                 🌊  A2
    P1  summaries    Chapter Summary Sheet           📖  RES
   ```

2. For **each** topic create a self-contained `topic-NN-slug.html`
   (`topic-P1-summaries.html` for the summary). Copy the `<style>` and all
   scripts (sidebar, scroll-spy, print, `listen.js`) from `topic-TEMPLATE.html`
   **unchanged**.
   - Sidebar TOC = the `##`/`###` headings of the chapter (cap at 8
     sections; the tail becomes a short "Remaining sections" list).
   - Each section: `<section class="page" id="sN"><h2>N · Title</h2>`.
   - Map the markdown like so:
     * `> ***Rule* N** …`         → `<div class="box formula"><span class="tag">RULE N</span>…`
     * `> ***Example* N** …`      → `<div class="box memo"><span class="tag">SOLVED</span>…`
     * `> **INTRODUCTORY EXERCISE…` → `<div class="box warn"><span class="tag">TRY IT</span>…`
     * `##`/`###`/`####`          → `<h2>` / `<h3>` / bullet lists
     * `<table>…`                 → keep verbatim (clean the inner `<blockquote>`)
     * inline formula like `l = 3.4 cm` → `<b>l</b> = 3.4 cm`, keep every number
       and unit letter-perfect; never invent values
     * `![](*_files/media/imageN.png)` → redraw simple concept diagrams as
       **inline SVG** (arrows via a `<marker>`, shapes with `<circle>/<line>`);
       only keep genuinely photographic images via `<img src>` into a slim
       `img/media/` folder; do not copy thousands of PNGs
     * strip the `*italics*` that the Word export sprayed over normal text.

3. Write `data.generated.js` — one `TOPICS[]` row per topic, exactly the schema
   `{id, n, lvl, ic, t, st, f, pts}`; 3–4 accurate `pts` bullets each;
   `st:'done'` when that topic file exists, else `st:'wait'`. Leave
   `GLY=[]; CONST=[];`.

4. Wire the hub: replace `data.js` with `data.generated.js` so the sidebar,
   grid, search, filters and progress bar all use the new topics.

5. Re-brand `index.html`: page `<title>`, sidebar `.side-head` (📘 …) and
   `.side-sub`, home hero title/subtitle. Do not touch IDs used by `app.js`.

6. VERIFY in a browser: open `index.html` — 17 topics in the sidebar and grid,
   search + filters + progress working, every `st:'done'` page opens, print
   gives clean A4. Fix anything broken before continuing.

7. Commit & push when green:
   `git add -A`, `git commit -m "mechanics hub: 17 topics from markdown chapters"`,
   `git push -u origin main`, then tell the user how to enable
   **GitHub Pages** (Settings → Pages → branch `main`, folder `/`), unless they
   have already done it.

**Constraints:** do not invent physics; copy numbers and units exactly; never
commit the 2,400-file `*_files/media` folders in bulk; keep `responsive.css`.
`listen.js`, `favicon.svg`, the `hubLink` back to `index.html`, and the author
credit footer on every page. Work until the hub is complete and pushed, then
report: topic count, page URL, and anything left as `wait`.