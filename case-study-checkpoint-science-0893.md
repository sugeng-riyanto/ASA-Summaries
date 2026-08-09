# Case Study 1 — Cambridge Lower Secondary Science (0893) / Checkpoint

> **Syllabus:** Cambridge Lower Secondary Science 0893 (Checkpoint), Stages 7–9
> **Course hub:** 42 topics + 3 resource pages, grouped by **Stage 7 / Stage 8 / Stage 9**
> **Skill level needed:** none — copy & paste only. Total time ≈ 20 minutes to a live site.

---

## ⭐ The no-code trick (read this first)

The hub can run **without writing any topic page**. Every topic has a
placeholder page that the app builds automatically from `data.js` (one bullet
block per `pts` entry). So the workflow is:

1. Copy the repo (2 minutes)
2. Paste the ready-made `data.js` below (3 minutes)
3. Make 2 tiny edits in `app.js` + `index.html` (2 minutes)
4. Test on your computer (2 minutes)
5. Push + turn on GitHub Pages (5 minutes)

Then, *one topic at a time*, you replace placeholders with real notebook pages.

---

## Step 1 — Copy this project to your own folder

On GitHub, click **Fork** (top-right) — or on your computer run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git checkpoint-science
cd checkpoint-science
```

## Step 2 — Rename the title (optional)

Open `index.html` and find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change it to:

```html
<div class="side-head">🔬 Checkpoint Science</div>
```

(Or run `rebrand.ps1` — see `README.md` — if you want a full color make-over.)

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js` in a text editor, **delete everything**, and paste this:

```js
/* ================= TOPIC DATABASE ================= */
var TOPICS=[

/* ---- STAGE 7 (lvl:'S7') ---- */
{id:'sci-intro',n:'1',lvl:'S7',ic:'🔬',t:'Introducing Science',st:'wait',f:'topic-s7-01-introducing-science.html',pts:['What is science?','How do we do science?','Working in the science laboratory','Using science']},
{id:'sci-measure',n:'2',lvl:'S7',ic:'📏',t:'Measurements',st:'wait',f:'topic-s7-02-measurements.html',pts:['Measurements of physical quantities','Measuring length, area and volume','Measuring mass and time']},
{id:'bio-cells',n:'3',lvl:'S7',ic:'🧫',t:'Cells & Cell Organization',st:'wait',f:'topic-s7-03-cells.html',pts:['Cells — the basic units of life','Cell structure','Specialised cells','How cells are organised in an organism']},
{id:'bio-classify',n:'4',lvl:'S7',ic:'🐾',t:'Classifying Living Things',st:'wait',f:'topic-s7-04-classifying-living-things.html',pts:['Characteristics of living things','Viruses','Classifying plants and animals','Using keys to identify living things']},
{id:'bio-food',n:'5',lvl:'S7',ic:'🍄',t:'Food Chains & Food Webs',st:'wait',f:'topic-s7-05-food-chains.html',pts:['Microorganisms as decomposers','Food chains and food webs']},
{id:'che-materials',n:'6',lvl:'S7',ic:'🧪',t:'Materials & Their Structure',st:'wait',f:'topic-s7-06-materials.html',pts:['Solids, liquids and gases; changes of state','Elements, atoms and molecules','The periodic table','Compounds and mixtures']},
{id:'che-props',n:'7',lvl:'S7',ic:'🧱',t:'Properties of Materials',st:'wait',f:'topic-s7-07-properties.html',pts:['Physical properties of materials','Chemical properties of materials','Metals and non-metals; alloys']},
{id:'che-acids',n:'8',lvl:'S7',ic:'🍋',t:'Acids & Alkalis',st:'wait',f:'topic-s7-08-acids-alkalis.html',pts:['What are acids and alkalis?','Indicators and the pH scale','Neutralisation']},
{id:'che-reactions',n:'9',lvl:'S7',ic:'⚗️',t:'Chemical Reactions',st:'wait',f:'topic-s7-09-reactions.html',pts:['Physical and chemical changes','Simple chemical reactions','Identifying whether a reaction has taken place']},
{id:'phy-forces',n:'10',lvl:'S7',ic:'🌍',t:'Forces',st:'wait',f:'topic-s7-10-forces.html',pts:['Forces around us','Gravitational force','Air resistance']},
{id:'phy-energy',n:'11',lvl:'S7',ic:'⚡',t:'Energy',st:'wait',f:'topic-s7-11-energy.html',pts:['Energy stores','Transferring energy','How sound waves transfer energy']},
{id:'phy-electric',n:'12',lvl:'S7',ic:'🔌',t:'Electricity',st:'wait',f:'topic-s7-12-electricity.html',pts:['Conductors and insulators','Electrical circuits','Electric current']},
{id:'ear-processes',n:'13',lvl:'S7',ic:'🌎',t:'Earth Processes',st:'wait',f:'topic-s7-13-earth-processes.html',pts:['Structure of the Earth','Movement of tectonic plates','The atmosphere and the water cycle']},
{id:'ear-beyond',n:'14',lvl:'S7',ic:'🪐',t:'Earth & Beyond',st:'wait',f:'topic-s7-14-earth-beyond.html',pts:['The solar system','Gravity and tides','Eclipses; how astronomy changed our world view']},

/* ---- STAGE 8 (lvl:'S8') ---- */
{id:'bio-diet',n:'1',lvl:'S8',ic:'🍎',t:'Diet & Growth',st:'wait',f:'topic-s8-01-diet-growth.html',pts:['Nutrients in food','A balanced diet','Healthy and unhealthy habits']},
{id:'bio-body',n:'2',lvl:'S8',ic:'🫀',t:'Human Body Systems',st:'wait',f:'topic-s8-02-body-systems.html',pts:['The musculoskeletal system','The respiratory system','The circulatory system']},
{id:'bio-eco',n:'3',lvl:'S8',ic:'🌿',t:'Ecosystems',st:'wait',f:'topic-s8-03-ecosystems.html',pts:['Ecosystems and habitats','Human impact on ecosystems']},
{id:'che-atom',n:'4',lvl:'S8',ic:'⚛️',t:'The Structure of an Atom',st:'wait',f:'topic-s8-04-atom.html',pts:['Structure of an atom','Development of the atomic model']},
{id:'che-mixtures',n:'5',lvl:'S8',ic:'🥤',t:'Mixtures & Solubility',st:'wait',f:'topic-s8-05-mixtures.html',pts:['Pure substances and mixtures','Separating mixtures','Solutions']},
{id:'che-reactivity',n:'6',lvl:'S8',ic:'🔥',t:'Chemical Reactivity',st:'wait',f:'topic-s8-06-reactivity.html',pts:['How metals react with oxygen, water and dilute acids','The reactivity series']},
{id:'che-exo',n:'7',lvl:'S8',ic:'♨️',t:'Exothermic & Endothermic Changes',st:'wait',f:'topic-s8-07-exo-endo.html',pts:['Exothermic changes','Endothermic changes']},
{id:'phy-motion',n:'8',lvl:'S8',ic:'🏃',t:'Forces & Motion',st:'wait',f:'topic-s8-08-forces-motion.html',pts:['Speed','Distance–time graphs','Characteristics of forces','Turning effect / moment of a force']},
{id:'phy-pressure',n:'9',lvl:'S8',ic:'🎈',t:'Pressure & Diffusion',st:'wait',f:'topic-s8-09-pressure.html',pts:['Pressure; pressure in liquids','Gas pressure; the particle model and pressure','Diffusion']},
{id:'phy-light',n:'10',lvl:'S8',ic:'💡',t:'Light',st:'wait',f:'topic-s8-10-light.html',pts:['Properties of light','Reflection and refraction','Dispersion of white light; coloured lights']},
{id:'phy-magnets',n:'11',lvl:'S8',ic:'🧲',t:'Magnetism',st:'wait',f:'topic-s8-11-magnetism.html',pts:['Magnetic fields','Electromagnets and their uses']},
{id:'es-resources',n:'12',lvl:'S8',ic:'⛽',t:'Energy Resources',st:'wait',f:'topic-s8-12-energy-resources.html',pts:['Energy needs and energy resources','Non-renewable energy resources','Renewable energy resources']},
{id:'es-weather',n:'13',lvl:'S8',ic:'🌦️',t:'Weather & Climate',st:'wait',f:'topic-s8-13-weather-climate.html',pts:['Climate and weather','Earth’s climate cycles and climate change']},
{id:'es-planets',n:'14',lvl:'S8',ic:'🌌',t:'Planetary Systems',st:'wait',f:'topic-s8-14-planetary.html',pts:['Galaxies','Planetary systems','The Earth’s magnetic field']},

/* ---- STAGE 9 (lvl:'S9') ---- */
{id:'bio-photo',n:'1',lvl:'S9',ic:'🌱',t:'Photosynthesis & Transport in Plants',st:'wait',f:'topic-s9-01-photosynthesis.html',pts:['Photosynthesis','Absorption and transport of water and mineral salts']},
{id:'bio-excrete',n:'2',lvl:'S9',ic:'🫁',t:'Excretion',st:'wait',f:'topic-s9-02-excretion.html',pts:['How the human excretory system works']},
{id:'bio-inherit',n:'3',lvl:'S9',ic:'🧬',t:'Variation & Inheritance',st:'wait',f:'topic-s9-03-inheritance.html',pts:['Chromosomes, genes and DNA','Inheritance and fetal development','Variation and natural selection','Populations and environment']},
{id:'che-periodic',n:'4',lvl:'S9',ic:'🧪',t:'The Periodic Table',st:'wait',f:'topic-s9-04-periodic-table.html',pts:['The periodic table','More about the periodic table']},
{id:'che-bonding',n:'5',lvl:'S9',ic:'🔗',t:'Chemical Bonding & Structure',st:'wait',f:'topic-s9-05-bonding.html',pts:['Chemical bonding','Covalent and ionic bonding','Structures and properties of substances']},
{id:'che-displace',n:'6',lvl:'S9',ic:'🔥',t:'Displacement Reactions',st:'wait',f:'topic-s9-06-displacement.html',pts:['Describing chemical reactions','Displacement reactions']},
{id:'che-salts',n:'7',lvl:'S9',ic:'🧂',t:'Salts',st:'wait',f:'topic-s9-07-salts.html',pts:['What are salts?','How are salts prepared?']},
{id:'che-rate',n:'8',lvl:'S9',ic:'⏱️',t:'Rate of Reaction',st:'wait',f:'topic-s9-08-rate-of-reaction.html',pts:['What is rate of reaction?','Factors that affect the rate of reaction']},
{id:'phy-density',n:'9',lvl:'S9',ic:'⚖️',t:'Density',st:'wait',f:'topic-s9-09-density.html',pts:['What is density?','Densities of solids, liquids and gases','Why objects float or sink']},
{id:'phy-thermal',n:'10',lvl:'S9',ic:'🌡️',t:'Transfer of Thermal Energy',st:'wait',f:'topic-s9-10-thermal.html',pts:['Heat and temperature','Energy conservation and heat dissipation','How thermal energy is transferred','Cooling by evaporation']},
{id:'phy-sound',n:'11',lvl:'S9',ic:'🔊',t:'Sound',st:'wait',f:'topic-s9-11-sound.html',pts:['Sound production','Sound waves and waveforms','Drawing waveform graphs','Sound wave interference']},
{id:'phy-circuits',n:'12',lvl:'S9',ic:'🔆',t:'Electrical Circuits',st:'wait',f:'topic-s9-12-circuits.html',pts:['The flow of electric current','Series and parallel circuits','Cells and batteries','Resistance']},
{id:'es-climate',n:'13',lvl:'S9',ic:'🌍',t:'Earth & Climate Change',st:'wait',f:'topic-s9-13-climate.html',pts:['Movement of tectonic plates; evidence for plates','The carbon cycle','What is climate change?']},
{id:'es-astro',n:'14',lvl:'S9',ic:'☄️',t:'Astronomy',st:'wait',f:'topic-s9-14-astronomy.html',pts:['Asteroid impacts','The formation of the Moon','Nebulae — where stars are born']},

/* ---- RESOURCE PAGES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🧪',t:'Investigative & Experimental Skills',st:'wait',f:'topic-R1-practical-skills.html',pts:['Planning investigations and risk assessment','Measurements and units','Recording data and drawing conclusions']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'Key Terms, Units & Data Sheet',st:'wait',f:'topic-R2-key-terms-data.html',pts:['Key science words and units','Helpful data (below)','Exam technique for data handling']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Index',st:'wait',f:'topic-R3-glossary-index.html',pts:['Command words used in Checkpoint','Alphabetical glossary of core terms (below)','Quick index of experiments and graphs']}
];

var GLY=[['Diffusion','Movement of particles from a region of higher to lower concentration.'],['Solute','Substance that dissolves in a solvent.'],['Solvent','Liquid in which a solute dissolves.'],['Solution','A mixture of solute dissolved in a solvent.'],['Acid','Substance that produces hydrogen ions; pH below 7.'],['Alkali','Soluble base with a pH above 7.'],['Neutralisation','Reaction between an acid and a base to form a salt and water.'],['Element','Substance made of only one type of atom.'],['Compound','Substance made of two or more elements chemically joined.'],['Mixture','Two or more substances not chemically combined.'],['Cell','The basic unit of living things.'],['Tissue','A group of similar cells working together.'],['Organ','A group of tissues working together.'],['Photosynthesis','Process by which plants make glucose from carbon dioxide and water using light.'],['Habitat','The place where an organism lives.'],['Ecosystem','A community of organisms and their environment.']];

var CONST=[['Density of water','1000 kg/m³'],['Acceleration of free fall, g','10 N/kg'],['Speed of sound in air','≈ 340 m/s'],['Speed of light in vacuum','3 × 10⁸ m/s'],['Freezing point of water','0 °C'],['Boiling point of water','100 °C']];
```

> ✅ **Save `data.js` now.** Nothing below touches it again.

## Step 4 — Teach the sidebar the new stage names

Open `app.js`, find the global line near the top that starts with `var GRPS=[`
and replace **that whole line** with:

```js
var GRPS=[['Stage 7','S7'],['Stage 8','S8'],['Stage 9','S9'],['Resources','RES']];
```

> The app reads this one source for sidebars, cards and filters — everything
> else updates automatically once you save.

## Step 5 — Update the filter buttons

Open `index.html`, find this block inside `<div class="toolbar">`:

```html
<button class="fbtn" data-f="AS">AS Core</button>
<button class="fbtn" data-f="A2">A2 Extension</button>
<button class="fbtn" data-f="RES">Resources</button>
```

Replace the three lines with:

```html
<button class="fbtn" data-f="S7">Stage 7</button>
<button class="fbtn" data-f="S8">Stage 8</button>
<button class="fbtn" data-f="S9">Stage 9</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test on your computer

Double-click `index.html`. You should see:
- a sidebar with **Stage 7 / Stage 8 / Stage 9 / Resources** groups and dots
- a dashboard grid of 45 cards (42 topics + 3 resources)
- clicking any card opens a **placeholder page** with the syllabus bullet points

That's your hub, working with **zero topic pages written**.

## Step 7 — Publish to the internet (GitHub Pages)

```powershell
git add -A
git commit -m "Port hub to Checkpoint Science 0893"
git branch -M main
git remote add origin https://github.com/<your-username>/checkpoint-science.git
git push -u origin main
```

Then in the browser: **repo → Settings → Pages → Source: Deploy from a
branch → branch `main` → folder `/ (root)` → Save.**
Your site: `https://<your-username>.github.io/checkpoint-science/` (~1 min to build).

## Step 8 — Turn a placeholder into a real page (do this later, one at a time)

1. Copy `topic-TEMPLATE.html` → the filename listed in `data.js` (e.g. `topic-s7-03-cells.html`).
2. Fill in the content sections.
3. Open `data.js`, find that topic, change `st:'wait'` → `st:'done'`.
4. Save, refresh. The hub now links your real page. Repeat per topic.

## Done checklist

- [ ] Forked/cloned the repo
- [ ] Pasted the new `data.js`
- [ ] Replaced the `grps=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` locally — 45 cards show
- [ ] Pushed and enabled GitHub Pages
- [ ] Wrote your first real topic page and set `st:'done'`