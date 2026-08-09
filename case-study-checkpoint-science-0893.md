# Case Study 1 — Cambridge Lower Secondary Science (0893) / Checkpoint

> **Syllabus:** Cambridge Lower Secondary Science 0893 (Checkpoint), Stages 7–9.
> **Goal:** turn this notes-hub into a *Science Checkpoint* hub with three
> stage-groups (Stage 7 / Stage 8 / Stage 9) and the cross-strand
> "Scientific Enquiry" rubric.
> **Estimate:** 42 content topics + 3 resource pages.

## 1. Duplicate & re-theme

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git checkpoint-science
cd checkpoint-science
# edit rebrand.ps1: $NewTitle="Cambridge Lower Secondary Science 0893", theme below
powershell -ExecutionPolicy Bypass -File rebrand.ps1
```

## 2. Change the sidebar groups (they are hard-coded)

The 9702 hub uses groups `AS / A2 / RES`. For Checkpoint use one group per
stage. Edit `app.js` `buildNav()` `grps` to:

```js
var grps=[['Stage 7','S7'],['Stage 8','S8'],['Stage 9','S9'],['Resources','RES']];
```

Edit the filter buttons in `index.html` to `Stage 7 / Stage 8 / Stage 9 / Resources`.

## 3. Replace `data.js` (TOPICS layout for 0893)

Each topic keeps the field shape `{ id, n, lvl, ic, t, st, f, pts }`.
`lvl` becomes `S7 / S8 / S9 / RES`. `n` is a per-stage unique number,
exactly as the syllabus numbers it.

### Stage 7 → `lvl:'S7'` (topics 1–14)

| n | id | ic | t | f |
|---|---|---|---|---|
| 1 | sci-intro | 🔬 | Scientific Enquiry: Introducing Science | topic-s7-01-introducing-science.html |
| 2 | sci-measure | 📏 | Scientific Enquiry: Measurements | `topic-s7-02-measurements.html` |
| 3 | bio-cells | 🧫 | Cells & Cell Organization | `topic-s7-03-cells.html` |
| 4 | bio-classify | 🐾 | Classifying Living Things | `topic-s7-04-classifying-living-things.html` |
| 5 | bio-food | 🍄 | Food Chains & Food Webs | `topic-s7-05-food-chains.html` |
| 6 | che-materials | 🧪 | Materials & Their Structure | `topic-s7-06-materials.html` |
| 7 | che-props | 🧱 | Properties of Materials | `topic-s7-07-properties.html` |
| 8 | che-acids | 🍋 | Acids & Alkalis | `topic-s7-08-acids-alkalis.html` |
| 9 | che-reactions | ⚗️ | Chemical Reactions | `topic-s7-09-reactions.html` |
| 10 | phy-forces | 🌍 | Forces | `topic-s7-10-forces.html` |
| 11 | phy-energy | ⚡ | Energy | `topic-s7-11-energy.html` |
| 12 | phy-electric | 🔌 | Electricity | `topic-s7-12-electricity.html` |
| 13 | ear-processes | 🌎 | Earth Processes | `topic-s7-13-earth-processes.html` |
| 14 | ear-beyond | 🪐 | Earth & Beyond | `topic-s7-14-earth-beyond.html` |

### Stage 8 → `lvl:'S8'` (topics 1–14)

| n | id | ic | t | f |
|---|---|---|---|---|
| 1 | bio-diet | 🍎 | Diet & Growth | `topic-s8-01-diet-growth.html` |
| 2 | bio-body | 🫀 | Human Body Systems | `topic-s8-02-body-systems.html` |
| 3 | bio-eco | 🌿 | Ecosystems | `topic-s8-03-ecosystems.html` |
| 4 | che-atom | ⚛️ | The Structure of an Atom | `topic-s8-04-atom.html` |
| 5 | che-mixtures | 🥤 | Mixtures & Solubility | `topic-s8-05-mixtures.html` |
| 6 | che-reactivity | 🔥 | Chemical Reactivity | `topic-s8-06-reactivity.html` |
| 7 | che-exo | ♨️ | Exothermic & Endothermic Changes | `topic-s8-07-exo-endo.html` |
| 8 | phy-motion | 🏃 | Forces & Motion | `topic-s8-08-forces-motion.html` |
| 9 | phy-pressure | 🎈 | Pressure & Diffusion | `topic-s8-09-pressure.html` |
| 10 | phy-light | 💡 | Light | `topic-s8-10-light.html` |
| 11 | phy-magnets | 🧲 | Magnetism | `topic-s8-11-magnetism.html` |
| 12 | es-resources | ⛽ | Renewable & Non-renewable Energy Resources | `topic-s8-12-energy-resources.html` |
| 13 | es-weather | 🌦️ | Weather & Climate | `topic-s8-13-weather-climate.html` |
| 14 | es-planets | 🌌 | Planetary Systems | `topic-s8-14-planetary.html` |

### Stage 9 → `lvl:'S9'` (topics 1–14)

| n | id | ic | t | f |
|---|---|---|---|---|
| 1 | bio-photo | 🌱 | Photosynthesis & Transport in Plants | `topic-s9-01-photosynthesis.html` |
| 2 | bio-excrete | 🫁 | Excretion | `topic-s9-02-excretion.html` |
| 3 | bio-inherit | 🧬 | Variation & Inheritance | `topic-s9-03-inheritance.html` |
| 4 | che-periodic | 🧪 | Atoms, Periodic Table & Bonding | `topic-s9-04-periodic-table.html` |
| 5 | che-bonding | 🔗 | Chemical Bonding & Structure | `topic-s9-05-bonding.html` |
| 6 | che-displace | 🔥 | Displacement Reactions | `topic-s9-06-displacement.html` |
| 7 | che-salts | 🧂 | Salts | `topic-s9-07-salts.html` |
| 8 | che-rate | ⏱️ | Rate of Reaction | `topic-s9-08-rate-of-reaction.html` |
| 9 | phy-density | ⚖️ | Density | `topic-s9-09-density.html` |
| 10 | phy-thermal | 🌡️ | Transfer of Thermal Energy | `topic-s9-10-thermal.html` |
| 11 | phy-sound | 🔊 | Sound | `topic-s9-11-sound.html` |
| 12 | phy-circuits | 🔆 | Electrical Circuits | `topic-s9-12-circuits.html` |
| 13 | es-climate | 🌍 | Earth & Climate Change | `topic-s9-13-climate.html` |
| 14 | es-astro | ☄️ | Astronomy | `topic-s9-14-astronomy.html` |

### 3.1 Resource pages → `lvl:'RES'`

| id | ic | t | f |
|---|---|---|---|
| practical | 🧪 | Investigative & Experimental Skills | `topic-R1-practical-skills.html` |
| formulae | 📋 | Key Terms, Units & Data Sheet | `topic-R2-key-terms-data.html` |
| glossary | 📖 | Glossary & Index | `topic-R3-glossary-index.html` |

## 4. Fill in `pts` from the examiner-style bullets

Each `pts:[]` entry becomes a bulleted ground rule. Example for `s7-03-cells`:

```js
pts:['Cells are the basic unit of life — structure and function',
     'Animal vs plant cell diagrams: nucleus, cytoplasm, membrane, wall, chloroplasts, vacuole',
     'Specialised cells: muscle, nerve, root hair, red blood cell',
     'Tissues → organs → organ systems → organisms']
```

## 5. One line of caution

`n` is a string and can be `'1'`..`'14'` per stage. Since `lvl` separates the
sidebar groups, duplicate `n` across stages is fine.

Done — the Science Checkpoint content now maps onto `topic-s7-*.html`,
`topic-s8-*.html` and `topic-s9-*.html` pages, exactly like the 9702 layout.