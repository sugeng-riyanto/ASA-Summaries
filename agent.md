# AGENT — Operating Guide

This document tells an AI agent (or human collaborator) *how to work inside*
the **NotesHub** project — a static, offline-first "handwritten notes hub"
built for one exam syllabus, designed to be duplicated for any other.

## 1. What this repo is

A **pure static web app** (no build step, no framework, no package.json).
Every page is fully self-contained HTML. It loads straight from disk or any
static host (GitHub Pages, Netlify, nginx, etc.).

- `index.html` — the "Course Hub" dashboard (SPA-ish shell).
- `topic-*.html` — 28 syllabus topic pages + P1/P2/P3 resource pages.
- `graphs-appendix.html` — bonus graph-interpretation appendix.
- `styles.css` — shared hub stylesheet.
- `responsive.css` — *shared* mobile/tablet/print stylesheet (loaded last).
- `app.js` — hub logic: sidebar, grid, search, filters, progress, localStorage.
- `data.js` — **the only place to edit** when changing the syllabus.
- `listen.js` — speech-synthesis "Listen" panel + table wrapper utility.
- `favicon.svg` — atom-orbit site icon.

## 2. Golden rules for editing

1. **Edit `data.js`, not the pages.** Topic registry in `data.js` drives the
   hub sidebar, grid, placeholders, stats and progress. One key per topic.
2. **Keep pages self-contained.** Each `topic-*.html` carries its own inline
   `<style>`. Duplicating a page is just copying + rewriting content.
3. **Always append the shared stylesheet last in `<head>`:**
   `<link rel="stylesheet" href="responsive.css">`. It must come after the
   page's own `<style>` or `styles.css` or responsive fixes silently lose.
4. **Never hand-edit royalty.** The CSS reflects the "handwritten notebook"
   aesthetic (Kalam / Patrick Hand / Caveat). Keep the colour tokens in
   `:root` consistent.
5. **Beware the PowerShell file edit trap.** Editing many files via `-replace`
   with concatenation operators silently truncates files. Always write whole
   files, test `Length > 200`, and `git diff --stat` before committing.
6. **Table handling is JS-driven.** `listen.js` wraps every `<table>` in a
   `.tbl-wrap` scroll container. Do NOT add your own table wrappers.
7. **Favicon applies to all pages.** Every HTML page includes
   `<link rel="icon" href="favicon.svg" type="image/svg+xml">`.

## 3. How a visitor uses it

- Open `index.html`. Sidebar lists topics + progress dots.
- Topic pages are static; resource pages (P1–P3) are the hub's synthetic
  pages for data + glossary.
- "Mark as revised" checkboxes persist in `localStorage`
  (key `phys9702-progress`).
- Print/PDF exports via the browser dialog (print CSS is tuned for A4).

## 4. Workflow for a human partner

Create branches for new chapters, keep each commit small ("Add topic 14",
"Port hub to Chemistry A"), run `git status`/`git diff` before pushing, and
NEVER squash history after publish (Pages redeploys per push).

## 5. When in doubt

Read `context.md` (architecture), `memory.md` (decisions + traps),
`skills.md` (workflow recipes), `subagent.md` (how to delegate).