# Case Study 10 — Cambridge International AS & A Level Economics (9708)

> **Syllabus:** Cambridge International AS & A Level Economics 9708 (7 key
> concepts; AS topics 1–6, A2 topics 7–11)
> **Course hub:** 36 content topics + 3 resource pages, grouped by **level ×
> area**: AS Micro / AS Macro / AS International / A2 Micro / A2 Macro / A2
> International
> **Skill level needed:** none — copy & paste only. ≈ 25 minutes to a live site.

---

## ⭐ The no-code trick

Every topic runs as an auto-built placeholder page from `data.js` — no page
files needed to go live. Copy → paste → 2 tiny edits → test → publish.

---

## Step 1 — Copy the project

On GitHub click **Fork** (top-right) — or run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git as-level-economics-9708
cd as-level-economics-9708
```

## Step 2 — Rename the title (optional)

Open `index.html`, find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">📈 A Level Economics</div>
```

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
var TOPICS=[

/* ---- AS · BASIC IDEAS & MICRO (lvl:'AS-MI') ---- */
{id:'e1-scarcity',n:'1.1',lvl:'AS-MI',ic:'🎯',t:'Scarcity, Choice & Opportunity Cost',st:'wait',f:'topic-1-1-scarcity-choice.html',pts:['The basic economic problem','Opportunity cost and the margin','Positive vs normative statements; ceteris paribus']},
{id:'e1-prod',n:'1.2',lvl:'AS-MI',ic:'🏭',t:'Factors of Production & Specialisation',st:'wait',f:'topic-1-2-factors-of-production.html',pts:['Land, labour, capital, enterprise','Specialisation and the division of labour','Productivity and rewards to factors']},
{id:'e1-allocation',n:'1.3',lvl:'AS-MI',ic:'🛒',t:'Resource Allocation & PPC',st:'wait',f:'topic-1-3-resource-allocation.html',pts:['Market, planned and mixed economies','Production possibility curves (PPC)','Public, private, merit and demerit goods']},

/* ---- AS · PRICE SYSTEM & MICRO (lvl:'AS-PS') ---- */
{id:'e2-demand',n:'2.1',lvl:'AS-PS',ic:'📉',t:'Demand, Supply & Equilibrium',st:'wait',f:'topic-2-1-demand-supply.html',pts:['Demand and supply curves','Market equilibrium and price mechanism','Shifts vs movements along curves']},
{id:'e2-elasticity',n:'2.2',lvl:'AS-PS',ic:'🧲',t:'Elasticities (PED, YED, XED, PES)',st:'wait',f:'topic-2-2-elasticities.html',pts:['Price, income and cross elasticity of demand','Price elasticity of supply','Elasticity, total revenue and firm decisions']},
{id:'e2-surplus',n:'2.3',lvl:'AS-PS',ic:'💹',t:'Consumer & Producer Surplus',st:'wait',f:'topic-2-3-surplus.html',pts:['Consumer surplus and producer surplus','Surplus on a demand/supply diagram','Changes in surplus when curves shift']},

/* ---- AS · GOVERNMENT MICRO (lvl:'AS-GM') ---- */
{id:'e3-failure',n:'3.1',lvl:'AS-GM',ic:'🚨',t:'Market Failure & Reasons to Intervene',st:'wait',f:'topic-3-1-market-failure.html',pts:['Types of market failure','Public, merit and demerit goods','Externalities and misallocation']},
{id:'e3-methods',n:'3.2',lvl:'AS-GM',ic:'🧾',t:'Methods of Intervention',st:'wait',f:'topic-3-2-intervention-methods.html',pts:['Indirect taxes and subsidies','Maximum and minimum price controls','Buffer stocks and their limits']},
{id:'e3-inequality',n:'3.3',lvl:'AS-GM',ic:'⚖️',t:'Income & Wealth Inequality',st:'wait',f:'topic-3-3-inequality.html',pts:['Income and wealth distribution','The Gini coefficient and Lorenz curve','Progressive, proportional and regressive taxes']},

/* ---- AS · MACRO (lvl:'AS-MA') ---- */
{id:'e4-income',n:'4.1',lvl:'AS-MA',ic:'📊',t:'National Income & the Circular Flow',st:'wait',f:'topic-4-1-national-income.html',pts:['GDP, GNI and NNI','The circular flow of income','Market vs basic prices; gross vs net']},
{id:'e4-ad-as',n:'4.2',lvl:'AS-MA',ic:'⚙️',t:'Aggregate Demand & Aggregate Supply',st:'wait',f:'topic-4-2-ad-as.html',pts:['The AD curve and its components','The AS curve (Keynesian and classical)','AD/AS equilibrium and shifts']},
{id:'e4-objectives',n:'4.3',lvl:'AS-MA',ic:'🎯',t:'Growth, Unemployment & Inflation',st:'wait',f:'topic-4-3-growth-unemployment.html',pts:['Economic growth and its measurement','Types and costs of unemployment','Inflation, deflation and price stability']},

/* ---- AS · GOVERNMENT MACRO (lvl:'AS-GMA') ---- */
{id:'e5-policy',n:'5.1',lvl:'AS-GMA',ic:'🧭',t:'Macroeconomic Policy Objectives',st:'wait',f:'topic-5-1-policy-objectives.html',pts:['The main macro objectives','Conflicts between objectives','Priorities in different economies']},
{id:'e5-tools',n:'5.2',lvl:'AS-GMA',ic:'🛠️',t:'Fiscal, Monetary & Supply-Side Policies',st:'wait',f:'topic-5-2-policy-tools.html',pts:['Fiscal policy and the budget','Monetary policy and interest rates','Supply-side policies and their effects']},

/* ---- AS · INTERNATIONAL (lvl:'AS-IN') ---- */
{id:'e6-trade',n:'6.1',lvl:'AS-IN',ic:'🌍',t:'Reasons for Trade',st:'wait',f:'topic-6-1-reasons-for-trade.html',pts:['Absolute and comparative advantage','Specialisation and gains from trade','Terms of trade']},
{id:'e6-protection',n:'6.2',lvl:'AS-IN',ic:'🛡️',t:'Protectionism & Balance of Payments',st:'wait',f:'topic-6-2-protectionism.html',pts:['Tariffs, quotas and embargoes','The current account of the balance of payments','Deficits, surpluses and policies']},
{id:'e6-exchangerate',n:'6.3',lvl:'AS-IN',ic:'💱',t:'Exchange Rates',st:'wait',f:'topic-6-3-exchange-rates.html',pts:['Floating exchange rate determination','Changes in demand and supply of currency','Effects of exchange rate changes']},

/* ---- A2 · PRICE SYSTEM & MICRO (lvl:'A2-MI') ---- */
{id:'e7-utility',n:'7.1',lvl:'A2-MI',ic:'📐',t:'Utility, Indifference Curves & Budget Lines',st:'wait',f:'topic-7-1-utility.html',pts:['Total and marginal utility','Indifference curves and the budget line','Consumer equilibrium']},
{id:'e7-costs',n:'7.2',lvl:'A2-MI',ic:'🏷️',t:'Costs, Revenues & Economies of Scale',st:'wait',f:'topic-7-2-costs-revenue.html',pts:['Short-run and long-run cost curves','Total, average and marginal revenue','Economies and diseconomies of scale']},
{id:'e7-structures',n:'7.3',lvl:'A2-MI',ic:'🏛️',t:'Market Structures',st:'wait',f:'topic-7-3-market-structures.html',pts:['Perfect competition and monopoly','Oligopoly and game theory basics','Monopolistic competition']},
{id:'e7-objectives',n:'7.4',lvl:'A2-MI',ic:'🧮',t:'Firm Objectives & Pricing Policies',st:'wait',f:'topic-7-4-firm-objectives.html',pts:['Profit maximisation, satisficing, revenue maximisation','Price discrimination','Limit pricing and contestable markets']},
{id:'e7-advanced',n:'7.5',lvl:'A2-MI',ic:'🕳️',t:'Advanced Market Failure',st:'wait',f:'topic-7-5-advanced-market-failure.html',pts:['Externalities in depth','Asymmetric information and moral hazard','Public goods and free-rider problems']},

/* ---- A2 · GOVERNMENT MICRO (lvl:'A2-GM') ---- */
{id:'e8-correct',n:'8.1',lvl:'A2-GM',ic:'🛡️',t:'Correcting Market Failure',st:'wait',f:'topic-8-1-correcting-failure.html',pts:['Pollution permits and tradable allowances','Nudge theory and behavioural policy','Regulation and information provision']},
{id:'e8-failure',n:'8.2',lvl:'A2-GM',ic:'🚨',t:'Government Failure, Equity & Poverty',st:'wait',f:'topic-8-2-government-failure.html',pts:['Government failure and its causes','Equity vs equality; poverty traps','Universal basic income debates']},
{id:'e8-labour',n:'8.3',lvl:'A2-GM',ic:'👷',t:'Labour Market Forces',st:'wait',f:'topic-8-3-labour-markets.html',pts:['Marginal revenue product theory of wages','Trade unions and monopsony','Transfer earnings and economic rent']},

/* ---- A2 · MACRO (lvl:'A2-MA') ---- */
{id:'e9-multiplier',n:'9.1',lvl:'A2-MA',ic:'🔁',t:'The Multiplier & Accelerator',st:'wait',f:'topic-9-1-multiplier.html',pts:['The multiplier and marginal propensities','The accelerator effect','Multiplier diagrams and evaluation']},
{id:'e9-ad',n:'9.2',lvl:'A2-MA',ic:'📉',t:'Components of Aggregate Demand',st:'wait',f:'topic-9-2-components-of-ad.html',pts:['Consumption and savings functions','Autonomous vs induced investment','Determinants of each AD component']},
{id:'e9-cycle',n:'9.3',lvl:'A2-MA',ic:'🌗',t:'Gaps, the Business Cycle & Growth',st:'wait',f:'topic-9-3-business-cycle.html',pts:['Inflationary and deflationary gaps','The business (trade) cycle','Inclusive and sustainable growth']},
{id:'e9-money',n:'9.4',lvl:'A2-MA',ic:'🏦',t:'Money & Banking',st:'wait',f:'topic-9-4-money-banking.html',pts:['Credit creation and the money multiplier','Liquidity preference theory','Loanable funds theory and interest rates']},

/* ---- A2 · GOVERNMENT MACRO (lvl:'A2-GMA') ---- */
{id:'e10-phillips',n:'10.1',lvl:'A2-GMA',ic:'📈',t:'The Phillips Curve',st:'wait',f:'topic-10-1-phillips-curve.html',pts:['Short-run Phillips curve','Long-run, expectations-augmented','Trade-off between unemployment and inflation']},
{id:'e10-conflicts',n:'10.2',lvl:'A2-GMA',ic:'⚖️',t:'Policy Conflicts & the Laffer Curve',st:'wait',f:'topic-10-2-policy-conflicts.html',pts:['Interrelatedness of macro problems','Policy conflicts and trade-offs','The Laffer curve and tax policy']},
{id:'e10-macrofail',n:'10.3',lvl:'A2-GMA',ic:'🚨',t:'Macroeconomic Government Failure',st:'wait',f:'topic-10-3-macro-failure.html',pts:['Time lags and forecast errors','Policy mistakes and unintended consequences','Evaluating government intervention']},

/* ---- A2 · INTERNATIONAL (lvl:'A2-IN') ---- */
{id:'e11-bop',n:'11.1',lvl:'A2-IN',ic:'💱',t:'Correcting Balance of Payments Disequilibrium',st:'wait',f:'topic-11-1-bop-correction.html',pts:['Expenditure-switching vs reducing policies','Fixed and managed exchange rates','The Marshall-Lerner condition and J-curve']},
{id:'e11-development',n:'11.2',lvl:'A2-IN',ic:'📈',t:'Economic Development',st:'wait',f:'topic-11-2-development.html',pts:['HDI and multidimensional poverty index','The Kuznets curve','Development vs growth']},
{id:'e11-developing',n:'11.3',lvl:'A2-IN',ic:'🌏',t:'Developing Economies & Global Links',st:'wait',f:'topic-11-3-developing-economies.html',pts:['Characteristics of developing economies','Population dynamics','Aid, MNCs, FDI, external debt, IMF/World Bank']},
{id:'e11-globalisation',n:'11.4',lvl:'A2-IN',ic:'🌐',t:'Globalisation & Integration',st:'wait',f:'topic-11-4-globalisation.html',pts:['Globalisation and its effects','Customs unions and monetary unions','Evaluating economic integration']},

/* ---- RESOURCES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'✍️',t:'Essay, Data & Evaluation Skills',st:'wait',f:'topic-R1-essay-skills.html',pts:['Chains of analysis: reason link-by-link','Diagrams are compulsory in Papers 2 & 4','Evaluate (AO3): time lags, magnitude, ceteris paribus, state of economy']},
{id:'formulae',n:'R2',lvl:'RES',ic:'🧮',t:'Formulas & Calculations',st:'wait',f:'topic-R2-formulas.html',pts:['Elasticities: PED, YED, XED, PES','National income adjustments (gross/net, market/basic)','Multiplier: k = 1 / (1 − MPC) and marginal propensities']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Command Words',st:'wait',f:'topic-R3-glossary.html',pts:['Command words: calculate, define, explain, analyse, discuss, evaluate','Glossary of key economics terms (below)','Key concepts: scarcity, margin, equilibrium, time, government, development']}
];

var GLY=[['Opportunity cost','The next best alternative forgone when a choice is made.'],['Scarcity','The basic economic problem: unlimited wants, limited resources.'],['PPC','Production possibility curve: shows maximum combinations of two goods.'],['Ceteris paribus','Holding all other factors constant.'],['Specialisation','Focusing production on the task/factor where one has an advantage.'],['Market failure','When free markets fail to allocate resources efficiently.'],['Externality','A cost or benefit to a third party not reflected in market price.'],['Public good','Non-rival, non-excludable good; free-rider problem.'],['Merit good','Good under-consumed because benefits are not fully recognised.'],['Demerit good','Good over-consumed because costs are not fully recognised.'],['PED','Price elasticity of demand = %ΔQD ÷ %ΔP.'],['YED','Income elasticity of demand = %ΔQD ÷ %ΔY.'],['XED','Cross elasticity of demand = %ΔQD of A ÷ %ΔP of B.'],['PES','Price elasticity of supply = %ΔQS ÷ %ΔP.'],['Consumer surplus','The extra benefit consumers get above the price paid.'],['Producer surplus','The extra revenue producers get above their minimum supply price.'],['Gini coefficient','Measure of income inequality, from 0 (equal) to 1 (unequal).'],['GDP','Gross domestic product: total value of goods/services produced in a country.'],['AD','Aggregate demand: C + I + G + (X − M).'],['Multiplier','k = 1 / (1 − MPC); change in national income per change in injection.'],['MPC','Marginal propensity to consume; MPC + MPS + MPT + MPM = 1.'],['Comparative advantage','Produce goods at lower opportunity cost than trading partners.'],['Protectionism','Policies limiting free trade: tariffs, quotas, embargoes.'],['Current account','Records trade in goods, services, income and transfers.'],['Phillips curve','Shows inverse relationship between unemployment and inflation.'],['Indifference curve','Combinations of two goods giving the same level of satisfaction.'],['Price discrimination','Charging different prices for the same product to different buyers.'],['Satisficing','Aiming for satisfactory rather than maximum outcomes.'],['MRP','Marginal revenue product: extra revenue from employing one more worker.'],['Economic rent','Return to a factor above its transfer earnings.']];

var CONST=[['PED','%ΔQD ÷ %ΔP'],['YED','%ΔQD ÷ %ΔY'],['XED','%ΔQD of A ÷ %ΔP of B'],['PES','%ΔQS ÷ %ΔP'],['Multiplier (k)','1 ÷ (1 − MPC)'],['Marginal propensities','MPC + MPS + MPT + MPM = 1'],['National income identity','Y = C + I + G + (X − M)'],['GDP per capita','GDP ÷ population'],['Terms of trade','Index of export prices ÷ index of import prices × 100'],['Gini coefficient range','0 (perfect equality) to 1 (perfect inequality)']];
```

> ✅ Save `data.js`. Nothing below touches it again.

## Step 4 — Set the sidebar groups

Open `app.js`, find the global `var GRPS=[...];` line and replace it with:

```js
var GRPS=[['AS · Basic Ideas & Micro','AS-MI'],['AS · Price System','AS-PS'],['AS · Government Micro','AS-GM'],['AS · Macro','AS-MA'],['AS · Government Macro','AS-GMA'],['AS · International','AS-IN'],['A2 · Price System & Micro','A2-MI'],['A2 · Government Micro','A2-GM'],['A2 · Macro','A2-MA'],['A2 · Government Macro','A2-GMA'],['A2 · International','A2-IN'],['Resources','RES']];
```

## Step 5 — Filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="AS-MI">AS Micro</button>
<button class="fbtn" data-f="AS-PS">AS Price</button>
<button class="fbtn" data-f="AS-GM">AS Gov Micro</button>
<button class="fbtn" data-f="AS-MA">AS Macro</button>
<button class="fbtn" data-f="AS-GMA">AS Gov Macro</button>
<button class="fbtn" data-f="AS-IN">AS Intl</button>
<button class="fbtn" data-f="A2-MI">A2 Micro</button>
<button class="fbtn" data-f="A2-GM">A2 Gov Micro</button>
<button class="fbtn" data-f="A2-MA">A2 Macro</button>
<button class="fbtn" data-f="A2-GMA">A2 Gov Macro</button>
<button class="fbtn" data-f="A2-IN">A2 Intl</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test locally

Double-click `index.html`. You should see:
- a sidebar with the 11 syllabus groups + Resources
- a dashboard grid: **36 content cards + 3 resource cards**
- each card opens a placeholder page with its bullets

## Step 7 — Publish on GitHub Pages

```powershell
git add -A
git commit -m "Port hub to AS & A Level Economics 9708"
git branch -M main
git remote add origin https://github.com/<your-username>/as-level-economics-9708.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.**
Site: `https://<your-username>.github.io/as-level-economics-9708/`

## Step 8 — Turn a placeholder into a real page (later, one at a time)

1. Copy `topic-TEMPLATE.html` → the filename in `data.js`.
2. Fill in the notebook sections (always include the diagrams).
3. In `data.js` change `st:'wait'` → `st:'done'`.
4. Refresh — the hub links your page.

## Done checklist

- [ ] Forked/cloned the repo and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `GRPS=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 39 cards show (36 + 3)
- [ ] Pushed and enabled GitHub Pages
- [ ] First real page written and `st:'done'` set

> 📈 Study tips for later: every essay needs a labelled diagram + a chain of
> analysis + evaluation (time lags, magnitude, ceteris paribus, state of the
> economy). Keep a "real-world case bank" (central bank moves, trade tariffs,
> infrastructure spending) and show all working on calculations.