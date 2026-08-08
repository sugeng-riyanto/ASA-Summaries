# ASA-Summaries

A premium handwritten revision hub for **Cambridge International AS &amp; A Level Physics (9702)** — a complete course summary, one chapter at a time, with examiner-grade content.

## Overview

This is a static, self-contained web app (no build step) that organises all 28 course topics plus 3 resource pages into a single browsable notebook.

- **28 course topics** covering the full AS &amp; A Level Physics (9702) syllabus
- **3 resource pages** — Practical Skills, Formulae & Data, Glossary & Index
- Handwritten-style premium notes with a print-to-PDF option
- Topic filtering by **AS Core / A2 Extension / Resources**
- Keyword search to jump straight to a topic
- **Revised tracker** — mark topics as revised to build a course progress bar
- Responsive layout with a collapsible contents sidebar

## Topics

| # | Topic | File |
|---|-------|------|
| 1 | Physical Quantities & Units | `topic-01-physical-quantities.html` |
| 2 | Kinematics | `topic-02-kinematics.html` |
| 3 | Dynamics | `topic-03-dynamics.html` |
| 4 | Forces, Density & Pressure | `topic-04-forces-density-pressure.html` |
| 5 | Work, Energy & Power | `topic-05-work-energy-power.html` |
| 6 | Momentum | `topic-06-momentum.html` |
| 7 | Matter & Materials | `topic-07-matter-materials.html` |
| 8 | Waves | `topic-08-waves.html` |
| 9 | Superposition | `topic-09-superposition.html` |
| 10 | Electricity | `topic-10-electricity.html` |
| 11 | DC Circuits | `topic-11-dc-circuits.html` |
| 12 | Atomic Structure & Particles | `topic-12-atomic-particles.html` |
| 13 | Circular Motion | `topic-13-circular-motion.html` |
| 14 | Gravitational Fields | `topic-14-gravitational-fields.html` |
| 15 | Thermal Physics | `topic-15-thermal-physics.html` |
| 16 | Ideal Gases | `topic-16-ideal-gases.html` |
| 17 | Thermodynamics | `topic-17-thermodynamics.html` |
| 18 | Oscillations | `topic-18-oscillations.html` |
| 19 | Electric Fields | `topic-19-electric-fields.html` |
| 20 | Capacitance | `topic-20-capacitance.html` |
| 21 | Magnetic Fields | `topic-21-magnetic-fields.html` |
| 22 | Charged Particles | `topic-22-charged-particles.html` |
| 23 | Electromagnetic Induction | `topic-23-electromagnetic-induction.html` |
| 24 | Alternating Currents | `topic-24-alternating-currents.html` |
| 25 | Quantum Physics | `topic-25-quantum-physics.html` |
| 26 | Nuclear Physics | `topic-26-nuclear-physics.html` |
| 27 | Medical Physics | `topic-27-medical-physics.html` |
| 28 | Astronomy & Cosmology | `topic-28-astronomy-cosmology.html` |

**Resource pages:**

- `topic-P1-practical-skills.html` — Practical Skills
- `topic-P2-formulae-data.html` — Formulae & Data
- `topic-P3-glossary-index.html` — Glossary & Index

## Usage

Open `index.html` in any modern browser. No build step or server is required — all topics are loaded from the `data.js` registry and `app.js` runtime. Visit the GitHub Pages URL to browse online.

## Files

- `index.html` — main app shell (contents sidebar, filters, search, progress bar)
- `app.js` — app logic: navigation, filtering, search, revised tracking
- `data.js` — topic registry and compiled revision data
- `listen.js` — event wiring / interaction layer
- `styles.css` — styling (handwritten theme, responsive layout)
- `graphs-appendix.html` — standalone graphs appendix
- `topic-*.html` — individual topic pages

## Publishing to GitHub Pages

Deploy this under the **root** of a GitHub Pages site so `index.html` loads directly. If hosted under a subpath, assets are plain relative files, so the site works from any path.