# Case Study 6 — Cambridge International AS & A Level Mathematics (9709)

> **Syllabus:** Cambridge International AS & A Level Mathematics 9709 (modular)
> **Course hub:** 38 content topics + 3 resource pages, grouped by the **6
> papers** (P1–P6)
> **Skill level needed:** none — copy & paste only. ≈ 25 minutes to a live site.

---

## ⭐ The no-code trick

The hub runs **without writing any topic page** — each topic gets an
auto-built placeholder page from `data.js`. Copy → paste → 2 edits → test →
publish.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git as-level-maths-9709
cd as-level-maths-9709
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">📐 A Level Mathematics</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- PURE MATHEMATICS 1 (lvl:'P1') ---- */
{id:'p1-quadratics',n:'1.1',lvl:'P1',ic:'🧮',t:'Quadratics',st:'wait',f:'topic-p1-01-quadratics.html',pts:['Quadratic equations and the discriminant','Completing the square and inequalities','Sudoku graph questions and intersections']},
{id:'p1-functions',n:'1.2',lvl:'P1',ic:'🎯',t:'Functions',st:'wait',f:'topic-p1-02-functions.html',pts:['Domain, range and composite functions','Inverse functions','Graphs and transformations of functions']},
{id:'p1-coord',n:'1.3',lvl:'P1',ic:'📏',t:'Coordinate Geometry',st:'wait',f:'topic-p1-03-coordinate-geometry.html',pts:['Coordinates, gradients and equations of lines','Parallel and perpendicular lines','Find intersection of a line and curve']},
{id:'p1-circular',n:'1.4',lvl:'P1',ic:'📐',t:'Circular Measure (Radian)',st:'wait',f:'topic-p1-04-circular-measure.html',pts:['Radian measure and conversions','Arc length s = rθ, area of sector A = r²θ','Problems combining circles and rectangles']},
{id:'p1-trig',n:'1.5',lvl:'P1',ic:'📐',t:'Trigonometry',st:'wait',f:'topic-p1-05-trigonometry.html',pts:['Sine, cosine and tangent; exact values','Trigonometric graphs and equations','Trigonometric identities as proof tools']},
{id:'p1-series',n:'1.6',lvl:'P1',ic:'🔗',t:'Series (Binomial, AP, GP)',st:'wait',f:'topic-p1-06-series.html',pts:['Arithmetic and geometric progressions','nth term and sum formulas','Binomial theorem and expansions']},
{id:'p1-diff',n:'1.7',lvl:'P1',ic:'🚀',t:'Differentiation',st:'wait',f:'topic-p1-07-differentiation.html',pts:['Gradient of a curve and differentiation','Tangent notification and normals','Stationary points, max and min']},
{id:'p1-int',n:'1.8',lvl:'P1',ic:'📈',t:'Integration',st:'wait',f:'topic-p1-08-integration.html',pts:['Indefinite integrals and finding constants','Definite integrals and areas under curves','Trapezium rule']},

/* ---- PURE MATHEMATICS 2 (lvl:'P2') ---- */
{id:'p2-algebra',n:'2.1',lvl:'P2',ic:'🔤',t:'Algebra: Modulus, Factor & Remainder Theorems',st:'wait',f:'topic-p2-01-modulus.html',pts:['Modulus |x| and equations','Remainder theorem and factor theorem','Polynomial division and factorisation']},
{id:'p2-log',n:'2.2',lvl:'P2',ic:'🪵',t:'Logarithmic & Exponential Functions',st:'wait',f:'topic-p2-02-log-exponentials.html',pts:['Laws of logarithms and ln','Solving equations with logs and exponentials','Exponential growth/decay models']},
{id:'p2-trig',n:'2.3',lvl:'P2',ic:'📐',t:'Trigonometry',st:'wait',f:'topic-p2-03-trigonometry.html',pts:['Special trig identities','Adjust graphs (amplitude, period)','Solve trig equations in a given domain']},
{id:'p2-diff',n:'2.4',lvl:'P2',ic:'🚀',t:'Differentiation',st:'wait',f:'topic-p2-04-differentiation.html',pts:['Differentiate in standard functions','Exponential and logarithmic--leaves derivative','Solve of functions; probabletangent/normals']},
{id:'p2-int',n:'2.5',lvl:'P2',ic:'📈',t:'Integration',st:'wait',f:'topic-p2-05-integration.html',pts:['Integrate 1/x and e^x','Use natural logs in solving integrals','Areas between curves']},
{id:'p2-numerical',n:'2.6',lvl:'P2',ic:'🔢',t:'Numerical Solution of Equations',st:'wait',f:'topic-p2-06-numerical.html',pts:['Graphical solution of equations','Iteration x = f(x) schemes','Ordered sequences of approximations']},

/* ---- PURE MATHEMATICS 3 (lvl:'P3') ---- */
{id:'p3-algebra',n:'3.1',lvl:'P3',ic:'🧮',t:'Algebra: Partial Fractions & Maclaurin Series',st:'wait',f:'topic-p3-01-partial-fractions.html',pts:['Rational functions and partial fractions','The binomial series for any rational exponent','Maclaurin series for standard functions']},
{id:'p3-logexp',n:'3.2',lvl:'P3',ic:'🪵',t:'Log & Exponential Functions',st:'wait',f:'topic-p3-02-log-exp.html',pts:['eˣ, ln x and their graphs','Differentiation of exponential/log forms','Solving e and ln problems']},
{id:'p3-trig',n:'3.3',lvl:'P3',ic:'📐',t:'Trigonometry',st:'wait',f:'topic-p3-03-trigonometry.html',pts:['Sec, cosec, cot and their graphs','Alternative trig identities (R sin(θ±α))','Solve trig equations & identities']},
{id:'p3-diff',n:'3.4',lvl:'P3',ic:'🚀',t:'Differentiation',st:'wait',f:'topic-p3-04-differentiation.html',pts:['Chain, product and quotient rules','Differentiate exponential, log, trig','Implicit differentiation and parametric','Definition of extremum/stationary contexts']},
{id:'p3-int',n:'3.5',lvl:'P3',ic:'📈',t:'Integration',st:'wait',f:'topic-p3-05-integration.html',pts:['Integration by substitution and by parts','Partial fractions to integrate','Definite integrals and areas']},
{id:'p3-numerical',n:'3.6',lvl:'P3',ic:'🔢',t:'Numerical Solution of Equations',st:'wait',f:'topic-p3-06-numerical.html',pts:['Newton–Raphson iteration','Solving equations graphically/iteratively','Accuracy of approximations']},
{id:'p3-vectors',n:'3.7',lvl:'P3',ic:'➡️',t:'Vectors (3D)',st:'wait',f:'topic-p3-07-vectors.html',pts:['Vectors in three dimensions','Scalar (dot) product and angles','Lines and their positions, intersection and distances']},
{id:'p3-diffeq',n:'3.8',lvl:'P3',ic:'🧬',t:'Differential Equations',st:'wait',f:'topic-p3-08-differential-equations.html',pts:['Formulate and solve first-order differential equations','Separating variables','Apply to growth, decay and motion']},
{id:'p3-complex',n:'3.9',lvl:'P3',ic:'💊',t:'Complex Numbers',st:'wait',f:'topic-p3-09-complex-numbers.html',pts:['Complex numbers and arithmetic','Modulus–argument form; conjugate','Loci and solution of equations in complex domain']},

/* ---- MECHANICS (lvl:'P4') ---- */
{id:'p4-forces',n:'4.1',lvl:'P4',ic:'⚖️',t:'Forces & Equilibrium',st:'wait',f:'topic-p4-01-forces-equilibrium.html',pts:['Resultant of forces; triangle of forces','Resolution into components','Equilibrium and friction']},
{id:'p4-kinematics',n:'4.2',lvl:'P4',ic:'🏃',t:'Kinematics in a Straight Line',st:'wait',f:'topic-p4-02-kinematics.html',pts:['Displacement, velocity, acceleration','SUVAT equations for constant acceleration','Motion graphs']},
{id:'p4-momentum',n:'4.3',lvl:'P4',ic:'🎯',t:'Momentum',st:'wait',f:'topic-p4-03-momentum.html',pts:['Momentum p = mv','Conservation of momentum','Impulse']},
{id:'p4-newton',n:'4.4',lvl:'P4',ic:'🍎',t:'Newton’s Laws of Motion',st:'wait',f:'topic-p4-04-newton-laws.html',pts:['Newton’s three laws','Connected particles, pulleys and lift','Apply F = ma to problems']},
{id:'p4-energy',n:'4.5',lvl:'P4',ic:'💡',t:'Energy, Work & Power',st:'wait',f:'topic-p4-05-energy-work-power.html',pts:['Work done W = Fd','Kinetic and potential energy','Power and conservative energy']},

/* ---- PROBABILITY & STATISTICS 1 (lvl:'P5') ---- */
{id:'p5-data',n:'5.1',lvl:'P5',ic:'📊',t:'Representation of Data',st:'wait',f:'topic-p5-01-representation.html',pts:['Stem plots, histograms and box plots','Measures of location (mean, median, quartiles)','Measures of spread (range, variance, IQR)']},
{id:'p5-perm',n:'5.2',lvl:'P5',ic:'🔢',t:'Permutations & Combinations',st:'wait',f:'topic-p5-02-permutations.html',pts:['Permutations: ordered arrangements','Combinations: selections','Problems with restrictions']},
{id:'p5-prob',n:'5.3',lvl:'P5',ic:'🎲',t:'Probability',st:'wait',f:'topic-p5-03-probability.html',pts:['Probability of single and combined events','Tree diagrams and Venn diagrams','Independent and mutually exclusive events']},
{id:'p5-drv',n:'5.4',lvl:'P5',ic:'📈',t:'Discrete Random Variables (Binomial, Geometric)',st:'wait',f:'topic-p5-04-drv.html',pts:['Discrete random variable and distribution','Binomial and geometric distributions','Expected value E(X) and variance Var(X)']},
{id:'p5-normal',n:'5.5',lvl:'P5',ic:'🔔',t:'The Normal Distribution',st:'wait',f:'topic-p5-05-normal.html',pts:['Normal distribution N(μ, σ²)','Standard normal Z = (X − μ)/σ','Using tables and approximations']},

/* ---- PROBABILITY & STATISTICS 2 (lvl:'P6') ---- */
{id:'p6-poisson',n:'6.1',lvl:'P6',ic:'🦠',t:'The Poisson Distribution',st:'wait',f:'topic-p6-01-poisson.html',pts:['Poisson distribution and mean = variance','Model fitting and using the table','Adding independent Poissons']},
{id:'p6-linear',n:'6.2',lvl:'P6',ic:'📐',t:'Linear Combinations of Random Variables',st:'wait',f:'topic-p6-02-linear-combinations.html',pts:['Mean/variance of aX + bY','Independent variables and sums','Probabilities of combinations']},
{id:'p6-crv',n:'6.3',lvl:'P6',ic:'🌊',t:'Continuous Random Variables',st:'wait',f:'topic-p6-03-crv.html',pts:['CDF and PDF of continuous variables','Find probabilities and expected values','Median and percentiles']},
{id:'p6-sampling',n:'6.4',lvl:'P6',ic:'🧪',t:'Sampling & Estimation',st:'wait',f:'topic-p6-04-sampling.html',pts:['Sampling methods and estimators','Unbiased variance estimates','Confidence intervals for the mean']},
{id:'p6-hypo',n:'6.5',lvl:'P6',ic:'🔬',t:'Hypothesis Tests',st:'wait',f:'topic-p6-05-hypothesis.html',pts:['Null and alternative hypotheses','Significance levels','Test for a mean or proportion']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🖊️',t:'Methods & Exam Technique',st:'wait',f:'topic-R1-methods.html',pts:['How to show working for method marks','Non-calculator exact-value expectations (P1/P2)','MF19 formula booklet: given vs memorised, and when to apply']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'MF19 Formula Booklet Guide',st:'wait',f:'topic-R2-mf19.html',pts:['Where to look up results quickly','Formulas to memorise for speed','Common algebraic traps']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Terms used in 9709 (show, prove, deduce …)','Glossary of core math terms (below)','Quick index by paper']}
];

var GLY=[['Radian','The angle subtended when arc length = radius; 2π rad = 360°.'],['Modulus',' |x| = the size of x ignoring sign.'],['Domain','Set of input values which a function can take.'],['Range','Set of output values of a function.'],['Composite function','Applying one function, then another: f(g(x)).'],['Inverse function','Function that reverses the effect of f.'],['Stationary point','Point where the derivative í gradient = 0 (max, min, inflection).'],['Definite integral','Integral with limits that gives a number (area).'],['Indefinite integral','Antiderivative expressed with a constant.'],['Arithmetic progression','Sequence with a common difference.'],['Geometric progression','Sequence with a common ratio.'],['Binomial coefficient','nCr, or nCr, the number of ways to choose r from n.'],['Scalar product','a·b = |a||b| cos θ, used for angles between vectors.'],['Unit vector','A vector of length 1.'],['Position vector','Vector from the origin to a point.'],['Marginal probability','Basic probability in P(A|B).'],['Probability density','f(x) such that P(a<X<b)=∫f dx; total area = 1.'],['Normal distribution','Symmetrical bell curve N(μ, σ²) describing many data sets.']];

var CONST=[['e (Euler’s number)','≈ 2.71828'],['π','≈ 3.14159'],['√2','≈ 1.41421'],['ln e','= 1'],['Degrees ↔ radians','180° = π rad, 1 rad ≈ 57.3°'],['Common benchmark','sin 30° = cos 60° = ½']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar groups (papers)

Open `app.js`, find `var GRPS=[...];` near the top and replace **the line** with:

```js
var GRPS=[['Pure Maths 1','P1'],['Pure Maths 2','P2'],['Pure Maths 3','P3'],['Mechanics','P4'],['Probability & Statistics 1','P5'],['Probability & Statistics 2','P6'],['Resources','RES']];
```

## Step 5 — Match the filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="P1">P1 · Pure</button>
<button class="fbtn" data-f="P2">P2 · Pure</button>
<button class="fbtn" data-f="P3">P3 · Pure</button>
<button class="fbtn" data-f="P4">P4 · Mech</button>
<button class="fbtn" data-f="P5">P5 · Stats</button>
<button class="fbtn" data-f="P6">P6 · Stats</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test on your computer

Double-click `index.html`. You should see:
- a sidebar with the **6 papers + Resources**
- a dashboard grid: **38 content cards + 3 resources**
- each card opens a placeholder page with its bullets

> Route idea (the syllabus offers several): AS = P1 + P3? P1 + P4 (Mechanics)
> route, or P1 + P5 (Stats); A Level = P1+P3+P4+P5, or P1+P3+P5+P6 for a
> data-science route. Filter buttons let students isolate a paper.

## Step 7 — Publish on GitHub Pages

```powershell
git add -A
git commit -m "Port hub to AS & A Level Maths 9709"
git branch -M main
git remote add origin https://github.com/<your-username>/as-level-maths-9709.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/as-level-maths-9709/`

## Step 8 — Turn a placeholder into a real page (later, one at a time)

1. Copy `topic-TEMPLATE.html` → the filename in `data.js`.
2. Fill the notebook sections (use graduated working, diagrams).
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Cloned the repo and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `GRPS=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 41 cards show
- [ ] Pushed and enabled GitHub Pages
- [ ] Wrote your first real topic page and set `st:'done'`