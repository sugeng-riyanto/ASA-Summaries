# Case Study 5 — Cambridge IGCSE Mathematics (0580), Core & Extended

> **Syllabus:** Cambridge IGCSE Mathematics 0580 (tiered: Core C–G, Extended A–C)
> **Course hub:** 36 content topics + 3 resource pages, grouped by the **9
> syllabus chapters**
> **Skill level needed:** none — copy & paste only. ≈ 25 minutes to a live site.
> Core & Extended: Extended-only topics are marked with an **(Ext)** tag.

---

## ⭐ The no-code trick

The hub runs **without any topic page**. Every topic gets an auto-built
placeholder page from `data.js`. So the workflow is: copy → paste → 2 tiny
edits → test → publish. Replace placeholders one at a time later.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run on your computer:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git igcse-maths-0580
cd igcse-maths-0580
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">🧮 IGCSE Mathematics</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- CHAPTER 1 · NUMBER (lvl:'C1') ---- */
{id:'m1-types',n:'1.1',lvl:'C1',ic:'🔢',t:'Types of Number, Sets & Venn Diagrams',st:'wait',f:'topic-1-1-types-sets.html',pts:['Types of number: natural, integer, prime, square, cube','Set notation and Venn diagrams','Powers, roots and indices I']},
{id:'m1-fdp',n:'1.2',lvl:'C1',ic:'🍕',t:'Fractions, Decimals & Percentages',st:'wait',f:'topic-1-2-fdp.html',pts:['Converting between fractions, decimals and percentages','Ordering and the four operations','Practical percentages (increases, decreases, reverse)']},
{id:'m1-standard',n:'1.3',lvl:'C1',ic:'📐',t:'Standard Form, Estimation & Limits of Accuracy',st:'wait',f:'topic-1-3-standard-form.html',pts:['Standard form and index laws','Estimation and rounding','Limits of accuracy, upper and lower bounds']},
{id:'m1-ratio',n:'1.4',lvl:'C1',ic:'⚖️',t:'Ratio, Proportion, Rates, Time & Money',st:'wait',f:'topic-1-4-ratio-rates.html',pts:['Ratio and proportional quantities','Rates, speed, earnings and currency conversion','Time, money and percentage problems']},
{id:'m1-ext',n:'1.5',lvl:'C1',ic:'🌟',t:'Exponential Growth & Decay, Surds, Recurring Decimals (Ext)',st:'wait',f:'topic-1-5-surds-growth.html',pts:['Exponential growth and decay; compound growth','Surds and exact values','Recurring decimals as fractions']},

/* ---- CHAPTER 2 · ALGEBRA & GRAPHS (lvl:'C2') ---- */
{id:'m2-manip',n:'2.1',lvl:'C2',ic:'🧩',t:'Introduction to Algebra & Manipulation',st:'wait',f:'topic-2-1-algebra-manipulation.html',pts:['Algebraic expressions and simplification','Expanding brackets and factorising','Algebraic index laws II']},
{id:'m2-equations',n:'2.2',lvl:'C2',ic:'⚙️',t:'Equations & Inequalities',st:'wait',f:'topic-2-2-equations-inequalities.html',pts:['Linear and simultaneous equations','Quadratic equations (factorisation, formula)','Inequalities and their graphs']},
{id:'m2-sequences',n:'2.3',lvl:'C2',ic:'🔗',t:'Sequences',st:'wait',f:'topic-2-3-sequences.html',pts:['Generating terms and nth-term rules','Sequences linear and quadratic','Patterns and missing terms']},
{id:'m2-graphs',n:'2.4',lvl:'C2',ic:'📈',t:'Graphs in Practical Situations & Functions',st:'wait',f:'topic-2-4-graphs.html',pts:['Travel graphs (distance–time, speed–time)','Graphs of linear and quadratic functions','Sketching curves and recognising families']},
{id:'m2-fractions',n:'2.5',lvl:'C2',ic:'🧮',t:'Algebraic Fractions & Proportion (Ext)',st:'wait',f:'topic-2-5-algebraic-fractions.html',pts:['Simplifying and manipulating algebraic fractions','Direct and inverse proportion','Solving proportion problems']},
{id:'m2-diff',n:'2.6',lvl:'C2',ic:'🚀',t:'Differentiation (Ext)',st:'wait',f:'topic-2-6-differentiation.html',pts:['Gradient of a chord → limit of a curve','Differentiation and gradients of curves','Finding maximum and minimum points']},
{id:'m2-functions',n:'2.7',lvl:'C2',ic:'🎯',t:'Functions (Ext)',st:'wait',f:'topic-2-7-functions.html',pts:['Domain, range and functions','Composite and inverse functions','Using function notation']},

/* ---- CHAPTER 3 · COORDINATE GEOMETRY (lvl:'C3') ---- */
{id:'m3-lines',n:'3.1',lvl:'C3',ic:'📏',t:'Coordinates, Linear Graphs & Parallel Lines',st:'wait',f:'topic-3-1-linear-graphs.html',pts:['Reading coordinates and drawing linear graphs','Gradient y = mx + c and equations of lines','Parallel lines have equal gradients']},
{id:'m3-ext',n:'3.2',lvl:'C3',ic:'➕',t:'Length, Midpoint & Perpendicular Lines (Ext)',st:'wait',f:'topic-3-2-length-midpoint.html',pts:['Length of a line segment; midpoint','Gradient of perpendicular lines (−1/m)','Applying to problems']},

/* ---- CHAPTER 4 · GEOMETRY (lvl:'C4') ---- */
{id:'m4-terms',n:'4.1',lvl:'C4',ic:'📐',t:'Geometrical Terms, Constructions & Symmetry',st:'wait',f:'topic-4-1-terms-constructions.html',pts:['Geometrical terms and types of shapes','Constructions, scale drawings, loci','Similarity, and symmetry']},
{id:'m4-angles',n:'4.2',lvl:'C4',ic:'📐',t:'Angles',st:'wait',f:'topic-4-2-angles.html',pts:['Angle facts on lines, triangles and parallel lines','Angles in polygons','Angles], circles and bearings']},
{id:'m4-circle1',n:'4.3',lvl:'C4',ic:'⭕',t:'Circle Theorem I',st:'wait',f:'topic-4-3-circle-theorem-1.html',pts:['Angle in a semicircle is 90°','Tangent and radius theorem','Angle subtended by… at the centre']},
{id:'m4-circle2',n:'4.4',lvl:'C4',ic:'🔄',t:'Circle Theorem Lieutenants II (Ext)',st:'wait',f:'topic-4-4-circle-theorem-2.html',pts:['Cyclic quadrilaterals','Alternate segment theorem','Using theorems in a single problem']},

/* ---- CHAPTER 5 · MENSURATION (lvl:'C5') ---- */
{id:'m5-units',n:'5.1',lvl:'C5',ic:'📏',t:'Units, Area & Perimeter',st:'wait',f:'topic-5-1-units-area-perimeter.html',pts:['Metric units and conversions','Area & perimeter of simple and compound shapes','']},
{id:'m5-circles',n:'5.2',lvl:'C5',ic:'⭕',t:'Circles, Arcs & Sectors',st:'wait',f:'topic-5-2-circles.html',pts:['Circumference and area of circles','Arc length','Area of a sector']},
{id:'m5-volume',n:'5.3',lvl:'C5',ic:'🧊',t:'Surface Area & Volume',st:'wait',f:'topic-5-3-surface-area-volume.html',pts:['Cuboids and prisms','Cylinders: surface area and volume','Compound solids']},
{id:'m5-shapes',n:'5.4',lvl:'C5',ic:'🛶',t:'Spheres, Pyramids & Cones (Ext)',st:'wait',f:'topic-5-4-spheres-pyramids.html',pts:['Volume & surface area of spheres','Pyramids and cones','Composite shapes involving these solids']},

/* ---- CHAPTER 6 · TRIGONOMETRY (lvl:'C6') ---- */
{id:'m6-pythagoras',n:'6.1',lvl:'C6',ic:'▲',t:'Pythagoras’ Theorem',st:'wait',f:'topic-6-1-pythagoras.html',pts:['Pythagoras’ theorem for right-angled triangles','Finding a missing side','Pythagorean triples and applications']},
{id:'m6-sohcahtoa',n:'6.2',lvl:'C6',ic:'📐',t:'Right-Angled Trigonometry (SOH CAH TOA)',st:'wait',f:'topic-6-2-soh-cah-toa.html',pts:['Sine, cosine and tangent ratios','Finding sides and angles in right triangles','Bearings, angles of elevation and depression']},
{id:'m6-trig-ext',n:'6.3',lvl:'C6',ic:'🌊',t:'Exact Values & Trigonometric Graphs (Ext)',st:'wait',f:'topic-6-3-exact-values-graphs.html',pts:['Exact trigonometric values','Graphs of sin, cos and tan','Solving trigonometric equations']},
{id:'m6-rules',n:'6.4',lvl:'C6',ic:'📐',t:'Sine & Cosine Rules (Ext)',st:'wait',f:'topic-6-4-sine-cosine-rules.html',pts:['Sine rule for non-right triangles','Cosine rule and area = ½ab sin C','Mixed triangle-solving problems']},
{id:'m6-3d',n:'6.5',lvl:'C6',ic:'🧊',t:'3D Pythagoras & Trigonometry (Ext)',st:'wait',f:'topic-6-5-3d.html',pts:['Solving problems in 3D shapes','Combining Pythagoras and trig in solids']},

/* ---- CHAPTER 7 · TRANSFORMATIONS & VECTORS (lvl:'C7') ---- */
{id:'m7-trans',n:'7.1',lvl:'C7',ic:'🔄',t:'Transformations',st:'wait',f:'topic-7-1-transformations.html',pts:['Reflection and rotation','Enlargement and translation','Invariant points and combined transformations']},
{id:'m7-vectors',n:'7.2',lvl:'C7',ic:'➡️',t:'Vectors (Ext)',st:'wait',f:'topic-7-2-vectors.html',pts:['Representing vectors in 2D','Magnitude of a vector','Vector geometry: parallel, collinear and position vectors']},

/* ---- CHAPTER 8 · PROBABILITY (lvl:'C8') ---- */
{id:'m8-intro',n:'8.1',lvl:'C8',ic:'🎲',t:'Probability Basics & Expected Frequency',st:'wait',f:'topic-8-1-probability-intro.html',pts:['Probability of single events','Relative and expected frequency','Mutually exclusive and exhaustive outcomes']},
{id:'m8-venn',n:'8.2',lvl:'C8',ic:'🌳',t:'Combined Events — Tree & Venn diagrams',st:'wait',f:'topic-8-2-combined-events.html',pts:['Tree diagrams for successive events','Venn diagrams and set probability','Addition and independent events']},
{id:'m8-conditional',n:'8.3',lvl:'C8',ic:'🧠',t:'Conditional Probability & Notation (Ext)',st:'wait',f:'topic-8-3-conditional.html',pts:['Conditional probability','Probability notation (P(A|B), P(A∩B))','Problems using conditional reasoning']},

/* ---- CHAPTER 9 · STATISTICS (lvl:'C9') ---- */
{id:'m9-data',n:'9.1',lvl:'C9',ic:'📊',t:'Data, Averages & Statistical Charts',st:'wait',f:'topic-9-1-data-charts.html',pts:['Classifying and interpreting data','Mean, median, mode and range','Statistical charts: bar, pie, pictograms, line']},
{id:'m9-scatter',n:'9.2',lvl:'C9',ic:'📉',t:'Scatter Diagrams & Correlation',st:'wait',f:'topic-9-2-scatter.html',pts:['Drawing and reading scatter graphs','Correlation and lines of best fit','Interpreting scatter data']},
{id:'m9-cumfreq',n:'9.3',lvl:'C9',ic:'📈',t:'Cumulative Frequency & Box Plots (Ext)',st:'wait',f:'topic-9-3-cumulative-frequency.html',pts:['Cumulative frequency diagrams','Quartiles and interquartile range','Box-and-whisker plots']},
{id:'m9-histograms',n:'9.4',lvl:'C9',ic:'🌐',t:'Histograms & Frequency Density (Ext)',st:'wait',f:'topic-9-4-histograms.html',pts:['Histograms with unequal class widths','Frequency density = frequency ÷ class width','Reading areas from a histogram']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🖊️',t:'Calculator & Non-Calculator Strategy',st:'wait',f:'topic-R1-calculator-strategy.html',pts:['Papers 1 & 2 are non-calculator — practice mental and written work','Papers 3 & 4 — calculator precision and exact values (π, surds)','Always show method — method marks are awarded for working']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'Formula Sheet Awareness',st:'wait',f:'topic-R2-formula-sheet.html',pts:['Formulas given on the sheet vs formulas that must be memorised','Core/extended values below','Common exam traps and rounding']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Commands used in 0580 (work out, simplify, evaluate, shown, …)','Glossary of core terms (below)','Quick index by chapter']}
];

var GLY=[['Integer','A whole number, positive, negative or zero.'],['Rational number','A number that can be written as a fraction a/b. irrational — cannot.'],['Surd','An irrational root kept exact, e.g. √2, kept as √2.'],['Prime number','A whole number with exactly two factors: 1 and itself.'],['Index (exponent)','The power to which a base is raised.'],['Standard form','Number written as a × 10ᵏ with 1 ≤ a < 10.'],['Upper / lower bound','Limits of accuracy of a rounded measurement.'],['Ratio','A comparison of two similar quantities, e.g. 3 : 4.'],['Proportion','A relationship between two quantities that stay in a constant ratio.'],['Venn diagram','A diagram using overlapping circles to show sets.'],['Gradient','Steepness of a line = change in y ÷ change in x.'],['Midpoint','The point halfway between two coordinates.'],['Transformation','Rule that moves a shape: translation, rotation, reflection, enlargement.'],['Enlargement','Resize a shape about a centre by a scale factor.'],['Vector','A quantity with magnitude and direction (e.g. column vector).'],['Magnitude','The size/length of a vector: √(x² + y²).'],['Probability','Measure of how likely an outcome is, between 0 and 1.'],['Mutually exclusive','Outcomes that cannot both happen at once.'],['Median','The middle value when data are ordered.'],['Mode','The most frequent value in a data set.'],['Range','Largest minus smallest value in a data set.']];

var CONST=[['Quadratic formula','x = (−b ± √(b² − 4ac)) / 2a'],['Formula for distance','distance = speed × time'],['Speed formula','speed = distance ÷ time'],['Formula for density','density = mass ÷ volume'],['Compound interest','Principal(1 + rate/100)ⁿ'],['Simple interest','P × r × t ÷ 100'],['Formula for area of a circle','Area = π r²'],['Circumference of a circle','C = 2πr or πd'],['Reciprocal','1 ÷ number']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar group names

Open `app.js`, find the global line `var GRPS=[...];` near the top and
replace **the whole line** with:

```js
var GRPS=[['1. Number','C1'],['2. Algebra & Graphs','C2'],['3. Coordinate Geometry','C3'],['4. Geometry','C4'],['5. Mensuration','C5'],['6. Trigonometry','C6'],['7. Transformations & Vectors','C7'],['8. Probability','C8'],['9. Statistics','C9'],['Resources','RES']];
```

## Step 5 — Match the filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="C1">Number</button>
<button class="fbtn" data-f="C2">Algebra</button>
<button class="fbtn" data-f="C3">Coords</button>
<button class="fbtn" data-f="C4">Geometry</button>
<button class="fbtn" data-f="C5">Mensuration</button>
<button class="fbtn" data-f="C6">Trig</button>
<button class="fbtn" data-f="C7">Transform</button>
<button class="fbtn" data-f="C8">Probability</button>
<button class="fbtn" data-f="C9">Statistics</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test on your computer

Double-click `index.html`. You should see:
- a sidebar with the **9 chapters + Resources**
- a dashboard grid: **36 content cards + 3 resource cards**
- clicking any card opens a placeholder page with its bullets

## Step 7 — Publish (GitHub Pages)

```powershell
git add -A
git commit -m "Port hub to IGCSE Mathematics 0580"
git branch -M main
git remote add origin https://github.com/<your-username>/igcse-maths-0580.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/igcse-maths-0580/`

## Step 8 — Upgrade a placeholder to a real page (later)

1. Copy `topic-TEMPLATE.html` → the filename in `data.js`.
2. Fill in the notebook sections.
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Cloned the repo and cleared the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `GRPS=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 39 cards show (36 + 3)
- [ ] Pushed and enabled GitHub Pages
- [ ] Wrote your first real topic page and set `st:'done'`
