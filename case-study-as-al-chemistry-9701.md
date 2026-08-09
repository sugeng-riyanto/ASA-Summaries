# Case Study 9 — Cambridge International AS & A Level Chemistry (9701)

> **Syllabus:** Cambridge International AS & A Level Chemistry 9701 (topics 1–37)
> **Course hub:** 33 content topics + 3 resource pages, grouped by **level +
> discipline**: AS Physical / AS Inorganic / AS Organic & Analysis / A2 Physical /
> A2 Inorganic / A2 Organic & Analysis
> **Skill level needed:** none — copy & paste only. ≈ 25 minutes to a live site.

---

## ⭐ The no-code trick

Every topic runs as an auto-built placeholder page from `data.js` — no page
files needed to go live. Copy → paste → 2 tiny edits → test → publish.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git as-level-chemistry-9701
cd as-level-chemistry-9701
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">🧪 A Level Chemistry</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- AS · PHYSICAL CHEMISTRY (lvl:'PH1') ---- */
{id:'at1-atom',n:'1',lvl:'PH1',ic:'⚛️',t:'Atomic Structure: Orbitals & Ionisation Energy',st:'wait',f:'topic-01-atomic-structure.html',pts:['Structure of the atom and electron shells','Orbitals, sub-shells and s,p,d ordering','Successive ionisation energies and trends']},
{id:'at2-stoich',n:'2',lvl:'PH1',ic:'⚖️',t:'Atoms, Molecules & Stoichiometry',st:'wait',f:'topic-02-stoichiometry.html',pts:['Moles, Avogadro and the mole concept','Empirical and molecular formula','Gas volumes, solutions and titrations']},
{id:'at3-bonding',n:'3',lvl:'PH1',ic:'🔗',t:'Chemical Bonding & VSEPR',st:'wait',f:'topic-03-bonding.html',pts:['Ionic, covalent, dative and metallic bonding','VSEPR theory and molecular shapes','σ and π bonds; intermolecular forces']},
{id:'at4-states',n:'4',lvl:'PH1',ic:'🧊',t:'States of Matter',st:'wait',f:'topic-04-states-of-matter.html',pts:['Ideal gas equation pV = nRT','Kinetic theory of gases','Lattice structures and bonding in solids']},
{id:'at5-energetics',n:'5',lvl:'PH1',ic:'♨️',t:'Chemical Energetics: Hess’s Law & Bond Enthalpies',st:'wait',f:'topic-05-energetics.html',pts:['Enthalpy changes and Hess’s law','Bond enthalpies and enthalpy cycles','ΔH from ΔHf°, ΔHc° data']},
{id:'at6-electro',n:'6',lvl:'PH1',ic:'⚡',t:'Electrochemistry: Redox & Oxidation Numbers',st:'wait',f:'topic-06-electrochemistry.html',pts:['Redox reactions and half-equations','Assigning oxidation numbers','Oxidising and reducing agents']},
{id:'at7-equilibria',n:'7',lvl:'PH1',ic:'⚖️',t:'Equilibria: Kc, Kp & Brønsted–Lowry',st:'wait',f:'topic-07-equilibria.html',pts:['Dynamic equilibrium and Le Chatelier’s principle','Equilibrium constants Kc and Kp','Acids, bases and pH (Brønsted–Lowry)']},
{id:'at8-kinetics',n:'8',lvl:'PH1',ic:'⏱️',t:'Reaction Kinetics: Collision Theory & Catalysis',st:'wait',f:'topic-08-kinetics.html',pts:['Rates of reaction and collision theory','Boltzmann distribution and temperature','Catalysis and activation energy']},

/* ---- AS · INORGANIC CHEMISTRY (lvl:'IN1') ---- */
{id:'at9-periodicity',n:'9',lvl:'IN1',ic:'🧪',t:'The Periodic Table: Chemical Periodicity',st:'wait',f:'topic-09-periodicity.html',pts:['Period 3 elements: melting points and oxides','Periodicity of ionisation energy, radius, electronegativity','Predicting properties from position']},
{id:'at10-group2',n:'10',lvl:'IN1',ic:'🥇',t:'Group 2 Elements',st:'wait',f:'topic-10-group-2.html',pts:['Reactions of Group 2 elements with water and acids','Thermal decomposition of Group 2 carbonates','Solubility trends of hydroxides and sulfates']},
{id:'at11-group17',n:'11',lvl:'IN1',ic:'🧤',t:'Group 17 — The Halogens',st:'wait',f:'topic-11-group-17.html',pts:['Halogen reactivity and displacement','Hydrogen halides and their reactions','Disproportionation reactions']},
{id:'at12-nitrogen',n:'12',lvl:'IN1',ic:'🌫️',t:'Nitrogen & Sulfur',st:'wait',f:'topic-12-nitrogen-sulfur.html',pts:['Ammonia: preparation, uses and properties','Nitrogen oxides and photochemical smog','Acid rain from sulfur dioxide']},

/* ---- AS · ORGANIC CHEMISTRY & ANALYSIS (lvl:'OR1') ---- */
{id:'at13-organic',n:'13',lvl:'OR1',ic:'🧬',t:'Introduction to Organic Chemistry',st:'wait',f:'topic-13-organic-intro.html',pts:['Functional groups and nomenclature','Structural, chain and positional isomerism','Representing organic structures']},
{id:'at14-hydrocarbons',n:'14',lvl:'OR1',ic:'⛽',t:'Alkanes & Alkenes',st:'wait',f:'topic-14-alkanes-alkenes.html',pts:['Alkanes: combustion, free-radical substitution','Alkenes: electrophilic addition','Geometric (E/Z) isomerism and addition polymerisation']},
{id:'at15-halogen',n:'15',lvl:'OR1',ic:'🧂',t:'Halogenoalkanes',st:'wait',f:'topic-15-halogenoalkanes.html',pts:['Nucleophilic substitution (SN1 / SN2)','Elimination reactions','Comparing reactivities of halogenoalkanes']},
{id:'at16-alcohols',n:'16',lvl:'OR1',ic:'🍺',t:'Alcohols & Carbonyls',st:'wait',f:'topic-16-alcohols-carbonyls.html',pts:['Oxidation of alcohols to carbonyls and acids','Reduction and reactions of aldehydes/ketones','Distinguishing primary, secondary, tertiary']},
{id:'at17-acids',n:'17',lvl:'OR1',ic:'🍋',t:'Carboxylic Acids & Their Derivatives',st:'wait',f:'topic-17-carboxylic-acids.html',pts:['Acidity and salt formation','Esters and hydrolysis','Formation and reactions of acyl derivatives']},
{id:'at18-nitrogen',n:'18',lvl:'OR1',ic:'🧫',t:'Amines, Amides & Nitriles',st:'wait',f:'topic-18-nitrogen-compounds.html',pts:['Amines: basicity and preparation','Amides from carboxylic acids','Nitrile formation and hydrolysis']},
{id:'at19-synthesis',n:'19',lvl:'OR1',ic:'🛠️',t:'Addition Polymerisation & Multi-step Synthesis',st:'wait',f:'topic-19-polymers-synthesis.html',pts:['Addition polymers and their properties','Multi-step reaction maps','Curly-arrow mechanisms end to end']},
{id:'at22-analysis',n:'22',lvl:'OR1',ic:'🔬',t:'Analytical Techniques I: IR & Mass Spectrometry',st:'wait',f:'topic-22-analysis-1.html',pts:['Infrared spectroscopy and key absorptions','Mass spectrometry: M⁺ and fragments','Combining IR and mass data to identify compounds']},

/* ---- A2 · PHYSICAL CHEMISTRY (lvl:'PH2') ---- */
{id:'at23-energetics',n:'23',lvl:'PH2',ic:'♨️',t:'Lattice Energy, Born–Haber, Entropy & Gibbs',st:'wait',f:'topic-23-lattice-energetics.html',pts:['Lattice energy and Born–Haber cycles','Entropy and spontaneity','Gibbs free energy ΔG = ΔH − TΔS']},
{id:'at24-electro',n:'24',lvl:'PH2',ic:'⚡',t:'Electrode Potentials & Nernst Equation',st:'wait',f:'topic-24-electrode-potentials.html',pts:['Standard electrode potentials E°','Electrolysis calculations','The Nernst equation and cell potentials']},
{id:'at25-equilibria',n:'25',lvl:'PH2',ic:'⚖️',t:'Buffers, Ksp & Partition Coefficients',st:'wait',f:'topic-25-buffers-equilibria.html',pts:['Buffer solutions and pH control','Solubility product Ksp','Partition coefficients between solvents']},
{id:'at26-kinetics',n:'26',lvl:'PH2',ic:'⏱️',t:'Rate Equations, Order & Arrhenius',st:'wait',f:'topic-26-kinetics-2.html',pts:['Rate equations: rate = k[A]ᵐ[B]ⁿ','Determining reaction order and mechanisms','The Arrhenius equation']},

/* ---- A2 · INORGANIC CHEMISTRY (lvl:'IN2') ---- */
{id:'at27-group2',n:'27',lvl:'IN2',ic:'🥇',t:'Group 2: Thermal Stability & Enthalpies',st:'wait',f:'topic-27-group-2-2.html',pts:['Thermal stability of Group 2 compounds','Enthalpy of solution and hydration','Linking lattice enthalpy to trends']},
{id:'at28-transition',n:'28',lvl:'IN2',ic:'🌈',t:'Transition Elements: Complexes & Colour',st:'wait',f:'topic-28-transition-elements.html',pts:['Complex ions and ligands','Ligand exchange reactions','Colour theory and stability constants']},

/* ---- A2 · ORGANIC CHEMISTRY & ANALYSIS (lvl:'OR2') ---- */
{id:'at29-arenes',n:'29',lvl:'OR2',ic:'🫧',t:'Arenes & Electrophilic Substitution',st:'wait',f:'topic-29-arenes.html',pts:['Structure and stability of benzene','Electrophilic substitution reactions','Directing groups on the ring']},
{id:'at30-phenols',n:'30',lvl:'OR2',ic:'🧴',t:'Phenols & Acyl Chlorides',st:'wait',f:'topic-30-phenols-acyl-chlorides.html',pts:['Phenols: acidity and reactions','Acyl chlorides: reactions with water, alcohols, amines','Aromatic ester and amide formation']},
{id:'at31-amino',n:'31',lvl:'OR2',ic:'🧫',t:'Amines, Amino Acids & Amides',st:'wait',f:'topic-31-amines-amino-acids.html',pts:['Amine synthesis and basicity','Amino acids: zwitterions and peptide links','Amides and their hydrolysis']},
{id:'at32-chirality',n:'32',lvl:'OR2',ic:'🪞',t:'Chirality & Optical Isomerism',st:'wait',f:'topic-32-chirality.html',pts:['Chiral centres and optical isomers','Enantiomers and polarised light','Importance in biology and drugs']},
{id:'at33-dyes',n:'33',lvl:'OR2',ic:'🎨',t:'Azo Dyes & Condensation Polymerisation',st:'wait',f:'topic-33-dyes-polymers.html',pts:['Azo dye coupling reactions','Condensation polymers: polyamides, polyesters','Uses and disposal of polymers']},
{id:'at34-synthesis',n:'34',lvl:'OR2',ic:'🛠️',t:'Advanced Multi-step Synthesis',st:'wait',f:'topic-34-advanced-synthesis.html',pts:['Combining all functional-group chemistry','Designing synthesis routes','Reaction conditions and reagents for each step']},
{id:'at37-analysis',n:'37',lvl:'OR2',ic:'🔬',t:'Analytical Techniques II: TLC, GLC & NMR',st:'wait',f:'topic-37-analysis-2.html',pts:['Thin-layer and gas-liquid chromatography','¹³C and ¹H NMR spectroscopy','Solving structures from combined spectra']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🧪',t:'Practical Skills — Paper 3 & 5',st:'wait',f:'topic-R1-practical.html',pts:['Burette readings to 2 dp ending in 0 or 5','Titrations: acid-base, redox, iodine–thiosulfate','Planning: variables, controls, systematic vs random error']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'Data, Units & Key Equations',st:'wait',f:'topic-R2-data-sheet.html',pts:['Constants and standard conditions (below)','Logs and pH; rearranging Kc, Kp, Arrhenius','Percentage error and significant figures']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Commands used in 9701 (deduce, suggest, explain)','Glossary of core chemistry terms (below)','Organic reaction map overview']}
];

var GLY=[['Orbital','Region of space around a nucleus where an electron is most likely to be found.'],['Ionisation energy','Energy needed to remove one mole of electrons from one mole of gaseous atoms/ions.'],['Mole','Amount of substance containing 6.02 × 10²³ entities (Avogadro constant).'],['Empirical formula','Simplest whole-number ratio of atoms in a compound.'],['VSEPR','Model predicting molecular shape from electron-pair repulsion.'],['σ / π bond','Sigma: head-on orbital overlap; pi: side-on overlap in multiple bonds.'],['Intermolecular forces','Weak forces between molecules (vdW, permanent dipole, hydrogen bonds).'],['Enthalpy change','Heat change of a reaction at constant pressure.'],['Hess’s law','Enthalpy change is independent of the reaction pathway.'],['Bond enthalpy','Energy needed to break one mole of a covalent bond in the gaseous state.'],['Oxidation number','Formal charge an atom has in a compound; changes indicate redox.'],['Dynamic equilibrium','State where forward and reverse rates are equal; concentrations constant.'],['Kc / Kp','Equilibrium constant in terms of concentration / partial pressure.'],['Brønsted–Lowry acid','Proton donor (base = proton acceptor).'],['Electrophile','Species that accepts an electron pair (electron-loving).'],['Nucleophile','Species that donates an electron pair (nucleus-loving).'],['Curly arrow','Shows movement of an electron pair in a mechanism.'],['Lattice energy','Enthalpy change when one mole of an ionic lattice forms from gaseous ions.'],['Entropy','Measure of disorder of a system; S, in J K⁻¹ mol⁻¹.'],['Standard electrode potential','E°: potential of a half-cell measured against SHE under standard conditions.'],['Buffer','Solution that resists pH change on adding small amounts of acid or base.'],['Ligand','Molecule or ion that donates a lone pair to a central metal ion.'],['Chiral centre','Carbon atom bonded to four different groups, giving optical isomers.'],['Zwitterion','Neutral molecule with both + and − charges, e.g. amino acids.'],['Electrophilic substitution','Reaction where an electrophile replaces a hydrogen on an aromatic ring.']];

var CONST=[['Avogadro constant','6.02 × 10²³ mol⁻¹'],['Ideal gas constant, R','8.31 J K⁻¹ mol⁻¹'],['Standard pressure','1.00 atm = 1.01 × 10⁵ Pa'],['Faraday constant, F','9.65 × 10⁴ C mol⁻¹'],['Charge on an electron','1.60 × 10⁻¹⁹ C'],['Standard conditions','25 °C (298 K), 1 atm, 1 mol dm⁻³'],['pH','−log₁₀ [H⁺]'],['Gibbs equation','ΔG = ΔH − TΔS'],['Nernst equation','E = E° − (RT / zF) ln Q'],['T / K','= θ / °C + 273']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar groups

Open `app.js`, find the global `var GRPS=[...];` line and replace it with:

```js
var GRPS=[['AS · Physical Chemistry','PH1'],['AS · Inorganic Chemistry','IN1'],['AS · Organic & Analysis','OR1'],['A2 · Physical Chemistry','PH2'],['A2 · Inorganic Chemistry','IN2'],['A2 · Organic & Analysis','OR2'],['Resources','RES']];
```

## Step 5 — Filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="PH1">AS Physical</button>
<button class="fbtn" data-f="IN1">AS Inorganic</button>
<button class="fbtn" data-f="OR1">AS Organic</button>
<button class="fbtn" data-f="PH2">A2 Physical</button>
<button class="fbtn" data-f="IN2">A2 Inorganic</button>
<button class="fbtn" data-f="OR2">A2 Organic</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test locally

Double-click `index.html`. You should see:
- a sidebar with the 6 discipline groups + Resources
- a dashboard grid: **33 content cards + 3 resource cards**
- each card opens a placeholder page with its bullets

## Step 7 — Publish on GitHub Pages

```powershell
git add -A
git commit -m "Port hub to AS & A Level Chemistry 9701"
git branch -M main
git remote add origin https://github.com/<your-username>/as-level-chemistry-9701.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/as-level-chemistry-9701/`

## Step 8 — Turn a placeholder into a real page (later, one at a time)

1. Copy `topic-TEMPLATE.html` → the filename in `data.js`.
2. Fill in the notebook sections (use a reaction map for organic topics).
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Forked/cloned the repo and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `GRPS=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 36 cards show (33 + 3)
- [ ] Pushed and enabled GitHub Pages
- [ ] First real page written and `st:'done'` set

> 🧪 Strategy notes for later: organic chemistry ≈ 40% of the syllabus — build a
> giant colour-coded reaction map with curly-arrow mechanisms; treat IR/mass
> spec and NMR/GLC as puzzles; and master the practical papers (burette to
> 2 dp, planning variables, systematic vs random error).