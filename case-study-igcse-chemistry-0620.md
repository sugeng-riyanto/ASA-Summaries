# Case Study 8 — Cambridge IGCSE Chemistry (0620), Core & Extended

> **Syllabus:** Cambridge IGCSE Chemistry 0620 (tiered: Core C–G, Extended A–C)
> **Course hub:** 33 content topics + 3 resource pages, grouped by the **12
> syllabus chapters**
> **Skill level needed:** none — copy & paste only. ≈ 25 minutes to a live site.
> Extended-only content is marked with an **(Ext)** tag.

---

## ⭐ The no-code trick

Topics run as placeholder pages built automatically from `data.js` — no page
files are needed to go live. Copy → paste → 2 tiny edits → test → publish.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git igcse-chemistry-0620
cd igcse-chemistry-0620
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">⚗️ IGCSE Chemistry</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- 1 · STATES OF MATTER (lvl:'CH1') ---- */
{id:'c1-particles',n:'1.1',lvl:'CH1',ic:'🧊',t:'Solids, Liquids & Gases',st:'wait',f:'topic-1-1-solids-liquids-gases.html',pts:['Kinetic particle model of the three states','Properties of solids, liquids and gases','Diffusion and its evidence']},
{id:'c1-changes',n:'1.2',lvl:'CH1',ic:'🔥',t:'Changes of State',st:'wait',f:'topic-1-2-changes-of-state.html',pts:['Melting, boiling, evaporating, condensing, freezing','Latent heat in changes of state','State symbols in equations']},

/* ---- 2 · ATOMS, ELEMENTS & COMPOUNDS (lvl:'CH2') ---- */
{id:'c2-atoms',n:'2.1',lvl:'CH2',ic:'⚛️',t:'Atomic Structure & the Periodic Table',st:'wait',f:'topic-2-1-atomic-structure.html',pts:['Protons, neutrons, electrons; mass and atomic number','Isotopes and relative atomic mass','Bohr diagrams and the Periodic Table']},
{id:'c2-bonding',n:'2.2',lvl:'CH2',ic:'🔗',t:'Ionic, Covalent & Metallic Bonding',st:'wait',f:'topic-2-2-bonding.html',pts:['Ionic bonding and ionic lattices','Covalent bonding and dot-and-cross diagrams','Metallic bonding and the sea of electrons']},
{id:'c2-giant',n:'2.3',lvl:'CH2',ic:'💎',t:'Giant Covalent Structures',st:'wait',f:'topic-2-3-giant-structures.html',pts:['Diamond: strong, hard, high melting point','Graphite: layers, conductor','Silicon(IV) oxide structure']},

/* ---- 3 · STOICHIOMETRY (lvl:'CH3') ---- */
{id:'c3-formulae',n:'3.1',lvl:'CH3',ic:'🧮',t:'Formulae, Word & Symbol Equations',st:'wait',f:'topic-3-1-formulae-equations.html',pts:['Writing formulas and balancing equations','Word equations and state symbols','Writing ionic equations']},
{id:'c3-mole',n:'3.2',lvl:'CH3',ic:'⚖️',t:'The Mole, Molar Mass & Reactions (Ext)',st:'wait',f:'topic-3-2-mole-concept.html',pts:['Relative atomic and molecular mass','The mole = mass ÷ molar mass','Molar gas volume and concentration calculations']},

/* ---- 4 · ELECTROCHEMISTRY (lvl:'CH4') ---- */
{id:'c4-electrolysis',n:'4.1',lvl:'CH4',ic:'⚡',t:'Principles of Electrolysis',st:'wait',f:'topic-4-1-electrolysis.html',pts:['Electrolysis of molten compounds','Electrolysis of aqueous solutions','Predicting products at the electrodes']},
{id:'c4-applications',n:'4.2',lvl:'CH4',ic:'🔋',t:'Electroplating & Fuel Cells',st:'wait',f:'topic-4-2-applications.html',pts:['Electroplating and purification of copper','Hydrogen–oxygen fuel cells','Polar of electrolysis and uses']},

/* ---- 5 · CHEMICAL ENERGETICS (lvl:'CH5') ---- */
{id:'c5-energychange',n:'5.1',lvl:'CH5',ic:'♨️',t:'Exothermic & Endothermic Reactions',st:'wait',f:'topic-5-1-energetics.html',pts:['Energy changes in chemical reactions','Exothermal and endothermal reactions and uses','Energy in bond breaking and making']},
{id:'c5-enthalpy',n:'5.2',lvl:'CH5',ic:'📈',t:'Enthalpy Change & Bond Energies (Ext)',st:'wait',f:'topic-5-2-enthalpy-bond-energies.html',pts:['Enthalpy change ΔH and energy profiles','Activation energy','Calculating bond energies']},

/* ---- 6 · CHEMICAL REACTIONS (lvl:'CH6') ---- */
{id:'c6-rates',n:'6.1',lvl:'CH6',ic:'⏱️',t:'Rate of Reaction & Collision Theory',st:'wait',f:'topic-6-1-rate-of-reaction.html',pts:['Physical vs chemical changes','Measuring rates of reaction','Factors affecting rate: temperature, concentration, surface area, catalyst']},
{id:'c6-equilibrium',n:'6.2',lvl:'CH6',ic:'⚖️',t:'Reversible Reactions & Equilibrium (Ext)',st:'wait',f:'topic-6-2-equilibrium.html',pts:['Reversible reactions and dynamic equilibrium','The Haber process and the Contact process','Le Chatelier’s thinking in industrial context']},
{id:'c6-redox',n:'6.3',lvl:'CH6',ic:'🟥',t:'Redox Reactions & Oxidation Numbers',st:'wait',f:'topic-6-3-redox.html',pts:['Redox: oxidation and reduction in terms of electrons','Oxidation numbers and how to assign them','Identifying oxidising agents']},

/* ---- 7 · ACIDS, BASES & SALTS (lvl:'CH7') ---- */
{id:'c7-acidbase',n:'7.1',lvl:'CH7',ic:'🍋',t:'Acids, Bases & the pH Scale',st:'wait',f:'topic-7-1-acids-bases-ph.html',pts:['Properties of acids and bases','The pH scale and indicators','Properties of oxides']},
{id:'c7-salts',n:'7.2',lvl:'CH7',ic:'🧂',t:'Preparation & Purification of Salts',st:'wait',f:'topic-7-2-salts.html',pts:['Neutralisation and salt production methods','Solubility rules','Preparing insoluble salts by precipitation']},
{id:'c7-strongweak',n:'7.3',lvl:'CH7',ic:'💧',t:'Strong vs Weak Acids & Proton Transfer (Ext)',st:'wait',f:'topic-7-3-strong-weak.html',pts:['Strong and weak acids: why pH differs','Proton donor–acceptor definition','Concentration vs strength']},

/* ---- 8 · THE PERIODIC TABLE (lvl:'CH8') ---- */
{id:'c8-trends',n:'8.1',lvl:'CH8',ic:'🧪',t:'The Periodic Table & Periodicity',st:'wait',f:'topic-8-1-trends.html',pts:['Layout: periods, groups, and modern Periodic Table','Trends across periods and down groups','Predict properties from position']},
{id:'c8-group1',n:'8.2',lvl:'CH8',ic:'🥇',t:'Group I — The Alkali Metals',st:'wait',f:'topic-8-2-group-1.html',pts:['Appearance, reactivity and flame colours','How they react with water and chlorine','Trends down the group']},
{id:'c8-group7',n:'8.3',lvl:'CH8',ic:'🧤',t:'Group VII — The Halogens',st:'wait',f:'topic-8-3-group-7.html',pts:['Appearance and physical states of halogens','Reactivity down/displacement reactions','Halide test with silver nitrate']},
{id:'c8-transitions',n:'8.4',lvl:'CH8',ic:'🌈',t:'Transition Elements & Noble Gases',st:'wait',f:'topic-8-4-transition-elements.html',pts:['Transition elements: properties and uses','Noble gases: unreactivity','']},

/* ---- 9 · METALS (lvl:'CH9') ---- */
{id:'c9-metals',n:'9.1',lvl:'CH9',ic:'⚙️',t:'Properties, Alloys & Uses',st:'wait',f:'topic-9-1-metals.html',pts:['Physical and chemical properties of metals','Alloys and why they are made','Common uses of metals and alloys']},
{id:'c9-extraction',n:'9.2',lvl:'CH9',ic:'🏭',t:'Reactivity Series & Extraction',st:'wait',f:'topic-9-2-extraction.html',pts:['The reactivity series and implications','Extraction of iron in the blast furnace','Extraction of aluminium by electrolysis']},
{id:'c9-corrosion',n:'9.3',lvl:'CH9',ic:'🛡️',t:'Corrosion & Sacrificial Protection',st:'wait',f:'topic-9-3-corrosion.html',pts:['Rusting of iron and conditions needed','Methods of rust prevention','Sacrificial protection and galvanising']},

/* ---- 10 · CHEMISTRY OF THE ENVIRONMENT (lvl:'CH10') ---- */
{id:'c10-water',n:'10.1',lvl:'CH10',ic:'💧',t:'Water, Fertilisers & Pollution',st:'wait',f:'topic-10-1-water.html',pts:['Water treatment and testing','Fertilisers and plant nutrition','Pollutants of water']},
{id:'c10-air',n:'10.2',lvl:'CH10',ic:'🌍',t:'Air Quality & Climate Change',st:'wait',f:'topic-10-2-air.html',pts:['Atmospheric pollutants and their sources','The greenhouse effect and climate change','Reducing air pollution']},

/* ---- 11 · ORGANIC CHEMISTRY (lvl:'CH11') ---- */
{id:'c11-homology',n:'11.1',lvl:'CH11',ic:'🧬',t:'Hydrocarbons, Naming & Fractional Distillation',st:'wait',f:'topic-11-1-organic-fundamentals.html',pts:['Homologous series and functional groups','Naming straight and branched compounds','Fractional distillation of crude oil']},
{id:'c11-cracking',n:'11.2',lvl:'CH11',ic:'⛽',t:'Fuels & Cracking',st:'wait',f:'topic-11-2-fuels-cracking.html',pts:['Fuels: petrol, diesel, kerosene, natural gas','Cracking: thermal and catalytic','Products and uses of cracked hydrocarbons']},
{id:'c11-organics',n:'11.3',lvl:'CH11',ic:'🫙',t:'Alkanes, Alkenes, Alcohols, Carboxylic Acids & Esters',st:'wait',f:'topic-11-3-families.html',pts:['Alkanes: substitution; alkenes: addition, polymerisation','Alcohols and fermentation','Carboxylic acids and esters']},
{id:'c11-polymers',n:'11.4',lvl:'CH11',ic:'🔗',t:'Addition & Condensation Polymers',st:'wait',f:'topic-11-4-polymers.html',pts:['Addition polymerisation of alkenes','Condensation polymers: polyesters & polyamides','Properties and disposal of plastics']},

/* ---- 12 · EXPERIMENTAL TECHNIQUES & ANALYSIS (lvl:'CH12') ---- */
{id:'c12-separate',n:'12.1',lvl:'CH12',ic:'🧬',t:'Separation & Purification Techniques',st:'wait',f:'topic-12-1-separation.html',pts:['Filtration, crystallisation and simple distillation','Fractional distillation and separating mixtures','Chromatography and Rf values']},
{id:'c12-titration',n:'12.2',lvl:'CH12',ic:'🩸',t:'Acid–Base Titrations & Measurements',st:'wait',f:'topic-12-2-titrations.html',pts:['Reading a burette (e.g. 0.05 cm³ accuracy)','Performing a titration and measuring concentrations','Calculating results and errors']},
{id:'c12-qualitative',n:'12.3',lvl:'CH12',ic:'🌈',t:'Qualitative Analysis — Tests',st:'wait',f:'topic-12-3-qualitative.html',pts:['Tests for cations (colour changes, precipitates)','Tests for anions (chloride, sulfate, carbonate…)','Identification of gases']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🧪',t:'Practical Skills — Paper 3 & 6',st:'wait',f:'topic-R1-practical.html',pts:['Qualitative analysis tables — memorise the colour changes','Reading instruments: burette to 0.05 cm³, thermometer to 0.5 °C','Drawing best-fit lines, gradients, and interpreting data']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'Formulas, Units & Calculations',st:'wait',f:'topic-R2-data-sheet.html',pts:['mole = mass ÷ M, concentration = moles ÷ volume','Molar gas volume at r.t.p.','Names to remember: sulfur (not sulphur), manganate(VII)']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Commands used in 0620 (state, describe, explain, predict)','Glossary of core chemistry terms (below)','Quick index by chapter']}
];

var GLY=[['Isotope','Atoms of the same element with the same protons but different neutrons.'],['Relative atomic mass','Weighted mean mass of an element compared with 1/12 of the mass of C-12.'],['Mole','Amount of substance containing 6.02 × 10²³ particles (Avogadro constant).'],['Empirical formula','The simplest whole-number ratio of atoms in a compound.'],['Molecular formula','The actual number of atoms of each element in a molecule.'],['Ionic bond','Electrostatic attraction between oppositely charged ions.'],['Covalent bond','Shared pair of electrons between two non-metal atoms.'],['Metallic bond','Force between a lattice of positive ions and a sea of delocalised electrons.'],['Alloy','A mixture of a metal with another element to improve properties.'],['Oxidation number','The formal charge of an atom in a compound (oxidation state).'],['Redox','Reaction involving simultaneous oxidation and reduction.'],['Electrolyte','A liquid (or solution) that conducts electricity by moving ions.'],['Anode / cathode','Positive electrode / negative electrode of electrolysis.'],['Electroplating','Coating a metal with another metal using electrolysis.'],['Reversible reaction','A reaction that can go forwards or backwards.'],['Dynamic equilibrium','Rates of forward and reverse reactions are equal.'],['Activation energy','The minimum energy needed for a reaction to occur.'],['Fuel cell','Cell converting chemical energy of a fuel directly into electrical energy.'],['Functional group','The part of an organic molecule that gives it characteristic reactions.'],['Polymerisation','Joining many monomers to form a long-chain polymer.']];

var CONST=[['Avogadro constant','6.02 × 10²³ per mol'],['Molar gas volume (r.t.p.)','24 dm³ per mol'],['Unit relations','1 dm³ = 1000 cm³ = 1 L'],['Charge of an electron','1.60 × 10⁻¹⁹ C'],['Temperature unit change','T(K) = θ(°C) + 273'],['Burette reading accuracy','0.05 cm³'],['Thermometer reading accuracy','0.5 °C']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar group names

Open `app.js`, find the global `var GRPS=[...];` line and replace it with:

```js
var GRPS=[['1. States of Matter','CH1'],['2. Atoms & Elements','CH2'],['3. Stoichiometry','CH3'],['4. Electrochemistry','CH4'],['5. Energetics','CH5'],['6. Reactions','CH6'],['7. Acids & Salts','CH7'],['8. Periodic Table','CH8'],['9. Metals','CH9'],['10. Environment','CH10'],['11. Organic','CH11'],['12. Analysis','CH12'],['Resources','RES']];
```

## Step 5 — Filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="CH1">Ch 1</button>
<button class="fbtn" data-f="CH2">Ch 2</button>
<button class="fbtn" data-f="CH3">Ch 3</button>
<button class="fbtn" data-f="CH4">Ch 4</button>
<button class="fbtn" data-f="CH5">Ch 5</button>
<button class="fbtn" data-f="CH6">Ch 6</button>
<button class="fbtn" data-f="CH7">Ch 7</button>
<button class="fbtn" data-f="CH8">Ch 8</button>
<button class="fbtn" data-f="CH9">Ch 9</button>
<button class="fbtn" data-f="CH10">Ch 10</button>
<button class="fbtn" data-f="CH11">Ch 11</button>
<button class="fbtn" data-f="CH12">Ch 12</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test locally

Double-click `index.html`. You should see:
- a sidebar with the 12 chapters + Resources
- a dashboard grid: **33 content cards + 3 resource cards**
- each card opens a placeholder page with its bullets

## Step 7 — Publish on GitHub Pages

```powershell
git add -A
git commit -m "Port hub to IGCSE Chemistry 0620"
git branch -M main
git remote add origin https://github.com/<your-username>/igcse-chemistry-0620.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/igcse-legacy-chemistry-0620/`

## Step 8 — Turn a placeholder into a real page (later, one at a time)

1. Copy `topic-TEMPLATE.html` → the box below the placeholder name in `data.js`.
2. Fill in the notebook sections.
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Cloned the folder and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `GRPS=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 36 cards show (33 + 3)
- [ ] Pushed and enabled GitHub Pages
- [ ] First real page written and `st:'done'` set