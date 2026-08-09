# Case Study 2 — Cambridge IGCSE Physics (0625), 2026–2028

> **Syllabus:** Cambridge IGCSE Physics 0625 (2026–2028 syllabus content)
> **Course hub:** 24 content topics + 3 resource pages, grouped by the **6
> syllabus sections** (Motion, Thermal, Waves, Electricity & Magnetism,
> Nuclear, Space)
> **Skill level needed:** none — copy & paste only. Total time ≈ 20 minutes.

---

## ⭐ The no-code trick (read this first)

The hub runs **without writing any topic page**. Every topic gets an
auto-built placeholder page from `data.js` (one bullet per `pts` entry). So:

1. Copy the repo (2 min)
2. Paste the ready-made `data.js` below (3 min)
3. Make 2 tiny edits in `app.js` + `index.html` (2 min)
4. Test on your computer (2 min)
5. Push + enable GitHub Pages (5 min)

Then replace placeholders with real pages *one topic at a time*.

---

## Step 1 — Copy this project into your own folder

On GitHub, click **Fork** (top-right) — or on your computer run:

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git igcse-physics-0625
cd igcse-physics-0625
```

## Step 2 — Rename the title (optional)

Open `index.html` and find the sidebar heading:

```html
<div class="side-head">📗 9702 Physics</div>
```

Change to:

```html
<div class="side-head">🔬 IGCSE Physics</div>
```

(Or edit `rebrand.ps1` (`$NewTitle="Cambridge IGCSE Physics 0625"`) and run
it for a full color make-over.)

## Step 3 — Replace `data.js` (copy-paste the whole file below)

Open `data.js`, **delete everything**, and paste this:

```js
/* ================= TOPIC DATABASE ================= */
var TOPICS=[

/* ---- SECTION 1 · Motion, Forces & Energy (lvl:'SEC1') ---- */
{id:'s1-quantities',n:'1.1',lvl:'SEC1',ic:'📏',t:'Physical Quantities & Measurement Techniques',st:'wait',f:'topic-1-c1-physical-quantities.html',pts:['Scalars and vectors','Measurement of length and time','Accuracy, precision, errors, and significant figures']},
{id:'s1-motion',n:'1.2',lvl:'SEC1',ic:'🏃',t:'Motion: Speed, Velocity & Acceleration',st:'wait',f:'topic-1-c2-motion.html',pts:['Distance, displacement, speed, velocity, acceleration','Distance–time and speed–time graphs','Free fall and measuring g']},
{id:'s1-mass-weight',n:'1.3',lvl:'SEC1',ic:'⚖️',t:'Mass & Weight',st:'wait',f:'topic-1-c3-mass-weight.html',pts:['Mass and weight; gravitational field strength','Measuring mass and weight in the lab']},
{id:'s1-density',n:'1.4',lvl:'SEC1',ic:'🧱',t:'Density',st:'wait',f:'topic-1-c4-density.html',pts:['Density: ρ = m / V','Floating, sinking, and density of solids and liquids']},
{id:'s1-forces',n:'1.5',lvl:'SEC1',ic:'🚀',t:'Forces: Hooke’s Law, F = ma, Circular Motion & Moments',st:'wait',f:'topic-1-c5-forces.html',pts:['Effects of forces; Hooke’s law; F = ma','Circular motion and friction','Moments, levers, and centre of mass']},
{id:'s1-momentum',n:'1.6',lvl:'SEC1',ic:'🎯',t:'Momentum: Impulse & Conservation',st:'wait',f:'topic-1-c6-momentum.html',pts:['Momentum: p = mv','Impulse, force = rate of change of momentum','Conservation of momentum']},
{id:'s1-energy',n:'1.7',lvl:'SEC1',ic:'💡',t:'Energy, Work & Power',st:'wait',f:'topic-1-c7-energy-work-power.html',pts:['Energy stores and transfers','Work done = F × d; power = W / t','Efficiency and energy resources']},
{id:'s1-pressure',n:'1.8',lvl:'SEC1',ic:'🎈',t:'Pressure (Solids & Liquids)',st:'wait',f:'topic-1-c8-pressure.html',pts:['Pressure = force / area','Pressure in liquids: p = ρ g h','Using and measuring pressure']},

/* ---- SECTION 2 · Thermal Physics (lvl:'SEC2') ---- */
{id:'s2-particle',n:'2.1',lvl:'SEC2',ic:'🧊',t:'Kinetic Particle Model of Matter',st:'wait',f:'topic2-c1-particle-model.html',pts:['Kinetic particle model of solids, liquids and gases','Brownian motion and temperature measurement']},
{id:'s2-thermal',n:'2.2',lvl:'SEC2',ic:'🌡️',t:'Thermal Properties & Temperature',st:'wait',f:'topic2-c2-thermal-properties.html',pts:['Internal energy and thermal capacity','Specific heat capacity and specific latent heat','Melting, boiling, evaporation and condensation']},
{id:'s2-transfer',n:'2.3',lvl:'SEC2',ic:'♨️',t:'Transfer of Thermal Energy',st:'wait',f:'topic2-c3-thermal-transfer.html',pts:['Conduction, convection and radiation','How heat is lost from a building and how to reduce it']},

/* ---- SECTION 3 · Waves (lvl:'SEC3') ---- */
{id:'s3-props',n:'3.1',lvl:'SEC3',ic:'🌊',t:'General Properties of Waves',st:'wait',f:'topic3-c1-wave-properties.html',pts:['Transverse and longitudinal waves','Wave speed: v = f × λ','Reflection, refraction, diffraction and the ripple tank']},
{id:'s3-light',n:'3.2',lvl:'SEC3',ic:'💡',t:'Light: Reflection, Refraction, Lenses & Dispersion',st:'wait',f:'topic3-c2-light.html',pts:['Reflection and the plane mirror','Refraction and total internal reflection','Lenses, dispersion and colour']},
{id:'s3-spectrum',n:'3.3',lvl:'SEC3',ic:'🌈',t:'Electromagnetic Spectrum',st:'wait',f:'topic3-c3-em-spectrum.html',pts:['The electromagnetic spectrum','Uses and dangers of each region','Monitoring electromagnetic radiation']},
{id:'s3-sound',n:'3.4',lvl:'SEC3',ic:'🔊',t:'Sound',st:'wait',f:'topic3-c4-sound.html',pts:['Sound as a longitudinal wave','Loudness, pitch and waveforms','Reflection (echo) and the speed of sound']},

/* ---- SECTION 4 · Electricity & Magnetism (lvl:'SEC4') ---- */
{id:'s4-magnetism',n:'4.1',lvl:'SEC4',ic:'🧲',t:'Simple Phenomena of Magnetism',st:'wait',f:'topic-4-c1-magnetism.html',pts:['Permanent and induced magnets','Magnetic fields and field lines','Which is a force on a current?']},
{id:'s4-quantities',n:'4.2',lvl:'SEC4',ic:'🔌',t:'Electrical Quantities',st:'wait',f:'topic-4-c2-electrical-quantities.html',pts:['Charge, current, voltage and resistance','Ohm’s law: V = IR, series and parallel circuits','Electrical energy and power']},
{id:'s4-circuits',n:'4.3',lvl:'SEC4',ic:'🔆',t:'Electric Circuits',st:'wait',f:'topic-4-c3-circuits.html',pts:['Circuit diagrams and components','Series and parallel connections','Using ammeters and voltmeters']},
{id:'s4-safety',n:'4.4',lvl:'SEC4',ic:'🛡️',t:'Electrical Safety',st:'wait',f:'topic-4-c4-safety.html',pts:['Electrical hazards and safety','Fuses, earthing, double insulation, circuit breakers']},
{id:'s4-effects',n:'4.5',lvl:'SEC4',ic:'⚡',t:'Electromagnetic Effects',st:'wait',f:'topic-4-c5-em-effects.html',pts:['Induced electromotive force (e.m.f.)','Transformers and their uses']},

/* ---- SECTION 5 · NUCLEAR PHYSICS (lvl:'SEC5') ---- */
{id:'s5-nucleus',n:'5.1',lvl:'SEC5',ic:'⚛️',t:'The Nuclear Model of the Atom',st:'wait',f:'topic-5-c1-nuclear-model.html',pts:['Structure of the atom and nucleus','Isotopes and the number of particles']},
{id:'s5-radioactivity',n:'5.2',lvl:'SEC5',ic:'☢️',t:'Radioactivity',st:'wait',f:'topic-5-c2-radioactivity.html',pts:['Alpha, beta and gamma radiation; nuclear equations','Half-life, background radiation, uses and safety','Fission, fusion and the release of nuclear energy']},

/* ---- SECTION 6 · SPACE PHYSICS (lvl:'SEC6') ---- */
{id:'s6-solar',n:'6.1',lvl:'SEC6',ic:'🪐',t:'Earth & the Solar System',st:'wait',f:'topic-6-c1-solar-system.html',pts:['The Earth, Sun and Moon; orbit and rotation','The big bang and the evolution of the universe']},
{id:'s6-stars',n:'6.2',lvl:'SEC6',ic:'🌟',t:'Stars & the Universe',st:'wait',f:'topic-6-c2-stars-universe.html',pts:['The Sun and other stars: orbits and brightness','Stellar evolution and galaxies, Hubble’s law']},

/* ---- RESOURCE PAGES (lvl:'RES') ---- */
{id:'practical',n:'R1',lvl:'RES',ic:'🧪',t:'Practical Skills & Data Analysis',st:'wait',f:'topic-R1-practical.html',pts:['Apparatus and measurement techniques','Uncertainties, graphs and evaluation','Risk assessment in the lab']},
{id:'formulae',n:'R2',lvl:'RES',ic:'📋',t:'Formulae & Quantities Sheet',st:'wait',f:'topic-R2-formulae.html',pts:['All the equations you must recall (fixed below)','SI units and common prefixes','Command words in IGCSE papers']},
{id:'glossary',n:'R3',lvl:'RES',ic:'📖',t:'Glossary & Index',st:'wait',f:'topic-R3-glossary.html',pts:['Glossary of core physics terms (below)','Quick index by topic']}
];

var GLY=[['Scalar','A quantity with only magnitude (no direction).'],['Vector','A quantity with both magnitude and direction.'],['Displacement','The straight-line distance in a given direction from the start point.'],['Acceleration','Rate of change of velocity.'],['Mass','The amount of matter in an object, measured in kilograms.'],['Weight','The force on an object due to gravity: W = mg.'],['Density','Mass per unit volume: ρ = m / V.'],['Pressure','Force per unit area, p = F / A.'],['Momentum','Mass × velocity: p = mv.'],['Impulse','Force × time of action; equal to change in momentum.'],['Work','Energy transferred when a force moves through a distance.'],['Power','The rate of transferring energy: P = W / t.'],['Specific heat capacity','Energy needed to raise 1 kg by 1 °C.'],['Conduction','The main transfer of thermal energy in solids by particle vibration.'],['Convection','Thermal transfer of thermal energy in liquids and gases.'],
['Radiation','Infrared transfer requiring no medium, via electromagnetic waves.'],['Transverse wave','Wave where particles vibrate at right-angles to the direction of travel.'],['Longitudinal wave','Wave where particles vibrate along the direction of travel.'],['Frequency','Number of wave cycles per second, f = 1/T.'],['Wavelength','The distance between two identical points on two cycles.'],['Reflection','The change of direction of a wave at the interface of two materials at the interface.'],['Refraction','The change of direction of a wave when it passes from one medium to another.'],['Current','The rate of flow of charge, I = Q / t.'],['Voltage','The energy transferred per unit charge: V = E / Q.'],['Resistance','The opposition to the flow of charge, R = V / I.'],['Half-life','The time taken for half the nuclei in a sample to decay.']];

var CONST=[['Acceleration of free fall, g','9.8 m/s²'],['Speed of light in vacuum, c','3.0 × 10⁸ m/s'],['Speed of sound in air','≈ 340 m/s'],['Charge on an electron, e','1.60 × 10⁻¹⁹ C'],['Planck constant, h','6.63 × 10⁻³⁴ J s'],['Density of water','1000 kg/m³'],['Prefixes','nano 10⁻⁹, micro 10⁻⁶, milli 10⁻³, kilo 10³, mega 10⁶, giga 10⁹']];
```

> ✅ **Save `data.js` now.** Nothing below touches it again.

## Step 4 — Teach the sidebar the six section names

Open `app.js`, find the line `var grps=[` inside `buildNav()` and replace
**that whole line** with:

```js
var grps=[['1. Motion, Forces & Energy','SEC1'],['2. Thermal Physics','SEC2'],['3. Waves','SEC3'],['4. Electricity & Magnetism','SEC4'],['5. Nuclear Physics','SEC5'],['6. Space Physics','SEC6'],['Resources','RES']];
```

## Step 5 — Match the filter buttons

Open `index.html`, inside `<div class="toolbar">` replace the AS/A2 lines with:

```html
<button class="fbtn" data-f="SEC1">Sec 1</button>
<button class="fbtn" data-f="SEC2">Sec 2</button>
<button class="fbtn" data-f="SEC3">Sec 3</button>
<button class="fbtn" data-f="SEC4">Sec 4</button>
<button class="fbtn" data-f="SEC5">Sec 5</button>
<button class="fbtn" data-f="SEC6">Sec 6</button>
<button class="fbtn" data-f="RES">Resources</button>
```

## Step 6 — Test on your computer

Double-click `index.html`. You should see:
- a sidebar with the **six syllabus sections + Resources**
- a dashboard grid of **27 cards** (24 topics + 3 resources)
- clicking any card opens a **placeholder page** with the syllabus bullet
  points (each `pts` entry becomes one bullet)

That's the hub, working with **zero topic pages written**.

## Step 7 — Publish to the internet (GitHub Pages)

```powershell
git add -A
git commit -m "Port hub to IGCSE Physics 0625"
git branch -M main
git remote add origin https://github.com/<your-username>/igcse-physics-0625.git
git push -u origin main
```

Then in the browser: **repo → Settings → Pages → Source: Deploy from a
branch → branch `main` → folder `/ (root)` → Save.**
Your site: `https://<your-username>.github.io/igcse-physics-0625/` (~1 min).

## Step 8 — Turn a placeholder into a real page (later, one at a time)

1. Copy `topic-TEMPLATE.html` → the filename in `data.js` (e.g. `topic-1-c1-physical-quantities.html`).
2. Fill in the notebook sections.
3. In `data.js`, change that topic’s `st:'wait'` → `st:'done'`.
4. Refresh — the hub now links to your real page.

## Done checklist

- [ ] Cloned the repo and renamed the title
- [ ] Pasted the new `data.js`
- [ ] Replaced the `grps=` line in `app.js`
- [ ] Updated the filter buttons in `index.html`
- [ ] Opened `index.html` — 27 cards show
- [ ] Pushed and enabled GitHub Pages
- [ ] Wrote your first real topic page and set `st:'done'`

> 💡 The `pts` arrays above are *starter* bullets. Replace them with questions
> you actually want, and I can turn any of them into a full page.