# Case Study 7 — Cambridge International AS & A Level Biology (9700)

> **Syllabus:** Cambridge International AS & A Level Biology 9700
> **Course hub:** 19 content topics + 3 resource pages, grouped by **AS Level**
> (topics 1–11) and **A Level** (topics 12–19)
> **Skill level needed:** none — copy & paste only. ≈ 15 minutes to a live site.

---

## ⭐ The no-code trick

Each topic gets an auto-built placeholder page from `data.js` — no page
files needed at first. Copy → paste → 2 edits → test → publish.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git as-level-biology-9700
cd as-level-biology-9700
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">🧬 A Level Biology</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- AS LEVEL · TOPICS 1–11 (lvl:'AS') ---- */
{id:'as1-cell',n:'1',lvl:'AS',ic:'🔬',t:'Cell Structure',st:'wait',f:'topic-01-cell-structure.html',pts:['Microscopes and magnification','Eukaryotic and prokaryotic cells','Viruses and organelles at EM resolution']},
{id:'as2-molecules',n:'2',lvl:'AS',ic:'🧫',t:'Biological Molecules',st:'wait',f:'topic-02-biological-molecules.html',pts:['Carbohydrates, lipids and proteins','Water: properties and importance','Biochemical tests for each molecule']},
{id:'as3-enzymes',n:'3',lvl:'AS',ic:'⚗️',t:'Enzymes',st:'wait',f:'topic-03-enzymes.html',pts:['Mode of action of enzymes','Factors affecting activity','Enzyme inhibitors']},
{id:'as4-membranes',n:'4',lvl:'AS',ic:'🫧',t:'Cell Membranes & Transport',st:'wait',f:'topic-04-membranes-transport.html',pts:['Fluid mosaic model','Diffusion, osmosis, active transport','Osmosis and cell behaviour']},
{id:'as5-cellcycle',n:'5',lvl:'AS',ic:'🔄',t:'The Mitotic Cell Cycle',st:'wait',f:'topic-05-mitotic-cell-cycle.html',pts:['Chromosomes and mitosis','Stem cells and differentiation','Cancer and control of the cycle']},
{id:'as6-nucleic',n:'6',lvl:'AS',ic:'🧬',t:'Nucleic Acids & Protein Synthesis',st:'wait',f:'topic-06-nucleic-acids.html',pts:['DNA structure and replication','Transcription and translation','Types of mutation']},
{id:'as7-plants',n:'7',lvl:'AS',ic:'🌿',t:'Transport in Plants',st:'wait',f:'topic-07-transport-in-plants.html',pts:['Xylem and phloem','Transpiration and the factors that affect it','Translocation']},
{id:'as8-mammals',n:'8',lvl:'AS',ic:'🫀',t:'Transport in Mammals',st:'wait',f:'topic-08-transport-in-mammals.html',pts:['Circulatory system and the heart','Oxygen transport — haemoglobin','Blood vessels and tissue fluid']},
{id:'as9-gasexchange',n:'9',lvl:'AS',ic:'🫁',t:'Gas Exchange',st:'wait',f:'topic-09-gas-exchange.html',pts:['Lungs and alveoli','Breathing mechanisms','Gas exchange and ventilation']},
{id:'as10-disease',n:'10',lvl:'AS',ic:'🦠',t:'Infectious Diseases',st:'wait',f:'topic-10-infectious-diseases.html',pts:['Cholera, malaria, TB and HIV','How antibiotics act','Prevention and control']},
{id:'as11-immunity',n:'11',lvl:'AS',ic:'🛡️',t:'Immunity',st:'wait',f:'topic-11-immunity.html',pts:['Phagocytes and lymphocytes','Antibodies and antigens','Vaccination and the immune response']},

/* ---- A LEVEL · TOPICS 12–19 (lvl:'A2') ---- */
{id:'a12-energy',n:'12',lvl:'A2',ic:'⚡',t:'Energy & Respiration',st:'wait',f:'topic-12-energy-respiration.html',pts:['ATP as the energy currency','Glycolysis, Krebs cycle','Oxidative phosphorylation and the ETC']},
{id:'a13-photosynthesis',n:'13',lvl:'A2',ic:'🌞',t:'Photosynthesis',st:'wait',f:'topic-13-photosynthesis.html',pts:['Chloroplast structure','Light-dependent and light-independent stages','Limiting factors and practical work']},
{id:'a14-homeostasis',n:'14',lvl:'A2',ic:'⚖️',t:'Homeostasis',st:'wait',f:'topic-14-homeostasis.html',pts:['Kidneys and osmoregulation','Blood glucose control','Stomata and water balance in plants']},
{id:'a15-coordination',n:'15',lvl:'A2',ic:'🧠',t:'Control & Coordination',st:'wait',f:'topic-15-coordination.html',pts:['Nervous system and action potentials','Synapses and neurotransmitters','Muscle contraction and plant coordination']},
{id:'a16-inheritance',n:'16',lvl:'A2',ic:'🧬',t:'Inheritance',st:'wait',f:'topic-16-inheritance.html',pts:['Meiosis and gametes','Genetic crosses and the chi-squared test','Gene control in prokaryotes (operons)']},
{id:'a17-evolution',n:'17',lvl:'A2',ic:'🐾',t:'Selection & Evolution',st:'wait',f:'topic-17-selection-evolution.html',pts:['Variation and natural selection','Artificial selection and speciation','Hardy–Weinberg principle']},
{id:'a18-conservation',n:'18',lvl:'A2',ic:'🌍',t:'Classification, Biodiversity & Conservation',st:'wait',f:'topic-18-biodiversity.html',pts:['Taxonomy and classification','Sampling methods and Simpson’s index','Conservation techniques']},
{id:'a19-genetic',n:'19',lvl:'A2',ic:'🧪',t:'Genetic Technology',st:'wait',f:'topic-19-genetic-technology.html',pts:['Recombinant DNA technology','PCR and electrophoresis','Gene therapy and GMOs']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🧪',t:'Practical Skills (AO2/AO3)',st:'wait',f:'topic-R1-practical-skills.html',pts:['Microscopy, drawing plans and annotations','Serial dilutions and identifying variables','Planning, analysis and evaluation technique']},
{id:'formulae',n:'R2',lvl:'RES',ic:'🧮',t:'Mathematical Requirements & Statistics',st:'wait',f:'topic-R2-stats.html',pts:['t-test, chi-squared, Spearman’s rank','Hardy–Weinberg and Simpson’s index','Magnification, ratios and percentages']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Command words: describe, explain, compare','Core glossary of biology terms (below)','Key-concept links (cell → DNA → selection)']}
];

var GLY=[['Prokaryote','Cell without a membrane-bound nucleus (bacteria).'],['Eukaryote','Cell with a true nucleus and organelles.'],['Organelle','A sub-structure within a cell carrying out a function.'],['Diffusion','Net movement of particles down a concentration gradient.'],['Osmosis','Movement of water across a partially-permeable membrane down water potential.'],['Active transport','Movement of particles against a gradient using energy from ATP.'],['Enzyme','Biological catalyst (protein) lowering activation energy.'],['Mitosis','Nuclear division producing two genetically identical cells.'],['Meiosis','Division producing four genetically different haploid cells.'],['Transcription','Copying DNA into messenger RNA in the nucleus.'],['Translation','Building a polypeptide from mRNA template at a ribosome.'],['Allele','A version of a gene.'],['Photosynthesis','Process making glucose using light in chloroplasts.'],['Respiration','Transfer of energy from glucose by oxidation (aerobic uses oxygen; anaerobic does not).'],['Homeostasis','The maintenance of a stable internal environment.'],['Natural selection','Organisms better adapted to their environment survive and reproduce.'],['Speciation','The evolution of a new species.'],['Biodiversity','The variety of all living organisms and ecosystems.']];

var CONST=[['Magnification','magnification = image ÷ actual size'],['Unit conversions','1 cm = 10 mm = 10⁴ µm'],['Hardy–Weinberg','p² + 2pq + q² = 1'],['Simpson index (D)','D = 1 − Σ(n/N)²'],['Chi-squared critical table (5%)','df=1 → 3.84'],['Water potential of pure water','0 kPa'],['ATP','adenosine triphosphate'],['DNA ↔ RNA base rules','A pairs with T/U; C pairs with G']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar groups

Open `app.js`, find the global `var GRPS=[...];` line and replace it with:

```js
var GRPS=[['AS Level','AS'],['A Level','A2'],['Resources','RES']];
```

## Step 5 — Match the filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="AS">AS Level</button>
<button class="fbtn" data-f="A2">A Level</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test locally

Double-click `index.html`. You should see:
- a sidebar with **AS Level · A Level · Resources**
- a dashboard grid: **19 content cards + 3 resource cards**
- each card opens a placeholder page with its bullets

## Step 7 — Publish on GitHub Pages

```powershell
git add -A
git commit -m "Port hub to AS & A Level Biology 9700"
git branch -M main
git remote add origin https://github.com/<your-username>/as-level-biology-9700.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/as-level-biology-9700/`

## Step 8 — Turn a placeholder into a real page (later, one at a time)

1. Copy `topic-TEMPLATE.html` → the filename in `data.js`.
2. Fill the notebook sections.
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Forked/cloned the repo and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `GRPS=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 22 cards show
- [ ] Pushed and enabled GitHub Pages
- [ ] Wrote your first real topic page and set `st:'done'`

> 🧪 Biology teaching tips later: dedicate ≥20% of lessons to lab work, master
> the command words (describe = features, explain = mechanism), and keep linking
> the six key concepts (cells → DNA → natural selection) — the glossary page is
> the right place to stash those.