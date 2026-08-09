# Case Study 11 — Cambridge Lower Secondary Mathematics (0862), Stages 7–9

> **Syllabus:** Cambridge Lower Secondary Mathematics 0862 (Checkpoint), Stages 7–9
> **Course hub:** 17 content topics + 3 resource pages, grouped by the **4
> strands**: Number · Algebra · Geometry & Measure · Statistics & Probability,
> with an embedded **Thinking & Working Mathematically (TWM)** strand
> **Skill level needed:** none — copy & paste only. ≈ 20 minutes to a live site.

---

## ⭐ The no-code trick

The hub runs **without writing any topic page**. Every topic gets an
auto-built placeholder page from `data.js` (one bullet per `pts` entry). So:
copy → paste → 2 tiny edits → test → publish. Replace placeholders later.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git lower-secondary-maths-0862
cd lower-secondary-maths-0862
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">🧮 Lower Secondary Maths</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- STRAND 1 · NUMBER (lvl:'NUM') ---- */
{id:'n1-integers',n:'1.1',lvl:'NUM',ic:'🔢',t:'Integers, Squares & Place Value',st:'wait',f:'topic-num-01-integers.html',pts:['Integers, negative numbers and the number line','Squares, cubes, square and cube roots','Place value and ordering']},
{id:'n1-fdp',n:'1.2',lvl:'NUM',ic:'🍕',t:'Fractions, Decimals & Percentages',st:'wait',f:'topic-num-02-fdp.html',pts:['Converting between fractions, decimals and percentages','Operations with fractions and decimals','Percentage increase, decrease and reverse']},
{id:'n1-ratio',n:'1.3',lvl:'NUM',ic:'⚖️',t:'Ratio & Proportion',st:'wait',f:'topic-num-03-ratio.html',pts:['Writing and simplifying ratios','Sharing in a ratio','Direct and inverse proportion']},
{id:'n1-standard',n:'1.4',lvl:'NUM',ic:'🔬',t:'Standard Form & Limits of Accuracy',st:'wait',f:'topic-num-04-standard-form.html',pts:['Standard form and index rules','Rounding, estimation and bounds','Calculations with large and small numbers']},

/* ---- STRAND 2 · ALGEBRA (lvl:'ALG') ---- */
{id:'a1-expressions',n:'2.1',lvl:'ALG',ic:'🧮',t:'Expressions & Formulae',st:'wait',f:'topic-alg-01-expressions.html',pts:['Writing algebraic expressions','Simplifying and substituting','Using formulas']},
{id:'a1-equations',n:'2.2',lvl:'ALG',ic:'⚙️',t:'Equations & Inequalities',st:'wait',f:'topic-alg-02-equations.html',pts:['Solving linear equations','Inequalities and number lines','Forming equations from problems']},
{id:'a1-sequences',n:'2.3',lvl:'ALG',ic:'🔗',t:'Sequences',st:'wait',f:'topic-alg-03-sequences.html',pts:['Generating terms and nth-term rules','Arithmetic sequences and patterns','Looking at growth patterns']},
{id:'a1-graphs',n:'2.4',lvl:'ALG',ic:'📈',t:'Graphs & Functions',st:'wait',f:'topic-alg-04-graphs.html',pts:['Coordinates and drawing straight-line graphs','Graphs of quadratic and other functions','Function notation and simple mapping']},

/* --- STRAND 3 · GEOMETRY & MEASURE (lvl:'GEO') ---- */
{id:'g1-angles',n:'3.1',lvl:'GEO',ic:'📐',t:'Angle Properties & Shapes',st:'wait',f:'topic-geo-01-angles.html',pts:['Angle facts in triangles and quadrilaterals','Angles on parallel lines','Constructing and recognising shapes']},
{id:'g1-area',n:'3.2',lvl:'GEO',ic:'📏',t:'Perimeter, Area & Volume',st:'wait',f:'topic-geo-02-area-volume.html',pts:['Perimeter and area of compound shapes','Volume and surface area of prisms','Circles and curved shapes']},
{id:'g1-transforms',n:'3.3',lvl:'GEO',ic:'🔄',t:'Transformations',st:'wait',f:'topic-geo-03-transformations.html',pts:['Reflection, rotation and translation','Enlargement and scale factors','Combined transformations']},
{id:'g1-pythagoras',n:'3.4',lvl:'GEO',ic:'▲',t:'Pythagoras’ Theorem',st:'wait',f:'topic-geo-04-pythagoras.html',pts:['Pythagoras’ theorem in right triangles','Finding missing sides in problems','Application to real measurements']},

/* --- STRAND 4 · STATISTICS & PROBABILITY (lvl:'STAT') ---- */
{id:'s1-data',n:'4.1',lvl:'STAT',ic:'📊',t:'Data Handling',st:'wait',f:'topic-stat-01-data.html',pts:['Collecting and classifying data','Tables, charts and bar/line graphs','Averages: mean, median, mode and range']},
{id:'s1-analyse',n:'4.2',lvl:'STAT',ic:'📉',t:'Interpreting & Analysing Data',st:'wait',f:'topic-stat-02-analysing-data.html',pts:['Reading comparative data from graphs','Sampling and pictograms','Making sense of statements misinterpreted']},
{id:'s1-probability',n:'4.3',lvl:'STAT',ic:'🎲',t:'Probability',st:'wait',f:'topic-stat-03-probability.html',pts:['Likelihood of events','Calculating probabilities','Expected outcomes and simple problems']},

/* ---- TWM · EMBEDDED THINKING SKILLS (lvl:'TWM') ---- */
{id:'twm-problem',n:'5.1',lvl:'TWM',ic:'🧠',t:'Thinking & Working Mathematically (Problem Solving)',st:'wait',f:'topic-twm-01-problem-solving.html',pts:['Choosing strategies and reasoning between possible strategies','Working systematically','Specialising, characterising, conjecture, critique and improvising']},
{id:'twm-comm',n:'5.2',lvl:'TWM',ic:'💬',t:'Thinking & Working Mathematically (Communicating)',st:'wait',f:'topic-twm-02-communicating.html',pts:['Representing the same ideas in different ways','Translate between words, symbols and diagrams','Using precise, accurate mathematical language']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'✏️',t:'Exam & Non-Calculator Technique',st:'wait',f:'topic-R1-exam-technique.html',pts:['Computation without a calculator','Showing method — method marks are awarded for working','Checking answers and estimation']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'Key Notes & Formula Sheet',st:'wait',f:'topic-R2-formulas.html',pts:['Formulas to bank for each strand (below)','Units and conversions','Common question stems']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Commands used in Lower Secondary (work out, simplify, estimate, justify)','Glossary of key terms (below)','Topic map by stage']}
];

var GLY=[['Integer','A positive or negative whole number, including zero.'],['Place value','The value of a digit based on its position (units, tens, hundreds…).'],['Squared','A number multiplied by itself, e.g. 3² = 9.'],['Cube root','A number that multiplies three times of itself.'],['Reciprocal','1 divided by the number; the multiplicative inverse.'],['Ratio','A comparison of two quantities, e.g. 2 : 4 = 1 : 2.'],['Proportion','Relationship where two quantities stay in constant ratio.'],['Standard form','A number written as a × 10ⁿ where 1 ≤ a < 10.'],['Expression','A combination of numbers, variables and operations.'],['Formula','A rule written with symbols and an equals sign.'],['Equation','A statement that two expressions are equal.'],['Inequality','A statement using <, >, ≤ or ≥.'],['Term','A single number, variable or product forming a sequence.'],['nth term','A rule to calculate any term: term = f(n).'],['Transformation','A move applied to a shape: reflection, rotation, translation, enlargement.'],['Enlargement','Resizing a shape by a scale factor about a centre.'],['Pythagoras’ theorem','a² + b² = c² for the sides of a right-angled triangle.'],['Mean','The sum of values divided by the number of values.'],['Median','The middle value when data is put in order.'],['Mode','The most frequently occurring value.'],['Range','The difference between the largest and smallest values.'],['Probability','A measure 0–1 of how likely an outcome is.']];

var CONST=[['Mean','sum of values ÷ number of values'],['Probability axis','0 (impossible) to 1 (certain)'],['Estimation','round to 1 significant figure before calculating'],['Orders of magnitude','×10 next size up, ÷10 next size down'],['Perimeter','The distance all the way around a shape'],['Volume','Measure of the space inside a 3D solid'],['Fraction → percentage','multiply by 100'],['Percentage → fraction','divide by 100']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar groups

Open `app.js`, find the global `var GRPS=[...];` line and replace it with:

```js
var GRPS=[['Number','NUM'],['Algebra','ALG'],['Geometry & Measure','GEO'],['Statistics & Probability','STAT'],['Thinking & Working Mathematically','TWM'],['Resources','RES']];
```

## Step 5 — Filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="NUM">Number</button>
<button class="fbtn" data-f="ALG">Algebra</button>
<button class="fbtn" data-f="GEO">Geometry</button>
<button class="fbtn" data-f="STAT">Stats</button>
<button class="fbtn" data-f="TWM">TWM</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test locally

Double-click `index.html`. You should see:
- a sidebar with the **4 strands + TWM + Resources**
- a dashboard grid: **17 content cards + 3 resource cards**
- each card opens a placeholder page with its bullets

## Step 7 — Publish on GitHub Pages

```powershell
git add -A
git commit -m "Port hub to Lower Secondary Mathematics 0862"
git branch -M main
git remote add origin https://github.com/<your-username>/lower-secondary-maths-0862.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/lower-secondary-maths-0862/`

## Step 8 — Turn a placeholder into a real page (later)

1. Copy `topic-TEMPLATE.html` → the filename set in `data.js`.
2. Fill the notebook sections.
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Forked/cloned the repo and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Picked the strand groups in `app.js` (`GRPS`)
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 20 cards show
- [ ] Pushed and enabled GitHub Pages
- [ ] First real page written and `st:'done'` set

> 🧠 TWM is embedded across all strands: build questions that force students
> to specialise, conjecture, and refine ('spot the pattern → make a claim →
> test it → improve it') rather than just compute.