# SKILLS — Reusable Workflows (recipes)

"How do I…?" answers for the notes-hub. Follow them when asked.

---

## Skill A: Publish / re-publish to GitHub Pages

1. Set up once (first time):
   - `git init`, `git add -A`, `git commit -m "first commit"`
   - `git branch -M main`
   - `git remote add origin https://github.com/<user>/<repo>.git`
   - `git push -u origin main`
   - GitHub repo → Settings → Pages → Source = **Deploy from a branch**,
     branch `main`, folder `/ (root)`.
2. Every change: `git add -A; git commit -m "<msg>"; git push origin main`.
3. Wait ~1 min; the site rebuilds at `https://<user>.github.io/<repo>/`.

## 2. Re-theme the whole project (colors / fonts)

Because pages inline their own CSS, change the token set everywhere at once:

```powershell
# 1) Pick new values, then run a careful find & replace over *.html, *.css
#    Example: swap the heading blue
Get-ChildItem -Include *.html,*.css -Path . -Recurse |
  ForEach-Object { $c=[IO.File]::ReadAllText($_.FullName);
    $c=$c.Replace('#1e3a8a','#2b5876');
    [IO.File]::WriteAllText($_.FullName,$c,(New-Object System.Text.UTF8Encoding($false)) ) }
```

**Always** after a bulk text edit: `git diff --stat` and spot-check a page.
If any file shows `0` bytes, `git checkout -- <file>` immediately (memory #2).

## Skill C: Add a new topic chapter

1. Create `topic-NN-slug.html` from `topic-TEMPLATE.html` (or copy an
   existing page). Replace title, TOC links, and all content.
2. In `data.js`, append/modify the TOPICS entry: set `st:'done'`,
   `f:'topic-NN-slug.html'`, fill `pts`.
3. Open `index.html`: card auto-appears (grid is data-driven). Verify search
   + sidebar + progress switche.

## Skill D: Add a topic as placeholder ("waiting for notes")

Only edit `data.js` — set `st:'wait'` and keep `f` reserved. The hub,
`app.js` (buildPages) renders the placeholder; no page file needed.

## Skill E: Update the "resource pages" (P1–P3)

- P1/P2/P3 are pages in the repo; the last page in the hub is marked
  `st:'done'` and formatted/ hidden? See `data.js` for `buildConstTable`
  (`CONST`) and `buildGlossary` (`GLY`) — these render from data.js when
  opened on the hub. Edit `data.js` to change content.

## Skill F: Print / PDF export behaviour

It is CSS only. `@media print` in `responsive.css` + each page's inline CSS
hides the sidebar/buttons and sets A4 `@page`. To tune margins edit inline
print rules in the page styles.

## Skill G: Offline packaging

`responsive.css` + `favicon.svg` must travel with the HTML when emailing a
single page (they are relative). The Google Fonts `<link>` requires
internet; to go 100% offline see `memory.md #1` self-contained caveat and
download `@font-face` files into a `fonts/` dir.