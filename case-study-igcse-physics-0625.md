# Case Study 2 — Cambridge IGCSE Physics (0625), 2026–2028

> **Syllabus:** Cambridge IGCSE Physics 0625 (2026–2028 syllabus content).
> **Goal:** standalone **IGCSE Physics** hub — **6 syllabus sections**
> mapped to 6 sidebar groups, using the same notebook theme as 9702.
> **Estimate:** 24 content topics + 3 resource pages.

## 1. Duplicate & re-theme

```powershell
git clone https://github.com/sugeng-riyanto/ASA-Summaries.git igcse-physics-0625
cd igcse-physics-0625
# edit rebrand.ps1: $NewTitle="Cambridge IGCSE Physics 0625"
powershell -ExecutionPolicy Bypass -File rebrand.ps1
```

## 2. Change the sidebar groups

Use the six syllabus sections as groups. Edit `app.js` `buildNav()` `grps` to:

```js
var grps=[['1. Motion, Forces & Energy','SEC1'],
          ['2. Thermal Physics','SEC2'],
          ['3. Waves','SEC3'],
          ['4. Electricity & Magnetism','SEC4'],
          ['5. Nuclear Physics','SEC5'],
          ['6. Space Physics','SEC6']];
```

Match the filter buttons in `index.html` to the same six labels.

> Tip: use `RES` for the resource pages so they sit in a separate "Resources"
> group — add one more grp entry `['Resources','RES']` and use `lvl:'RES'`.

## 3. Replace `data.js` — TOPICS mapping for 0625

### Section 1 · Motion, Forces & Energy → `lvl:'SEC1'`

| n | id | ic | t | f |
|---|---|---|---|---|
| 1.1 | s1-quantities | 📏 | Physical Quantities & Measurement Techniques | `topic-1-c1-physical-quantities.html` |
| 1.2 | s1-motion | 🏃 | Motion: Speed, Velocity & Acceleration | `topic-1-c2-motion.html` |
| 1.3 | s1-mass-weight | ⚖️ | Mass & Weight | `topic-1-c3-mass-weight.html` |
| 1.4 | s1-density | 🧊 | Density | `topic-1-c4-density.html` |
| 1.5 | s1-forces | 💥 | Forces: Hooke's law, F = ma, circular friction, moments | `topic-1-c5-forces.html` |
| 1.6 | s1-momentum | 🎱 | Momentum: impulse & conservation | `topic-1-c6-momentum.html` |
| 1.7 | s1-energy | ⚡ | Energy, Work & Power | `topic-1-c7-energy-work-power.html` |
| 1.8 | s1-pressure | 🎈 | Pressure (solids & liquids) | `topic-1-c8-pressure.html` |

### Section 2 · Thermal Physics → `lvl:'SEC2'`

| n | id | ic | t | f |
|---|---|---|---|---|
| 2.1 | s2-particle | 🧫 | Kinetic Particle Model of Matter | `topic2-c1-particle-model.html` |
| 2.2 | s2-thermal | 🌡️ | Thermal Properties & Temperature | `topic2-c2-thermal-properties.html` |
| 2.3 | s2-transfer | ♨️ | Transfer of Thermal Energy | `topic2-c3-thermal-transfer.html` |

### Section 3 · Waves → `lvl:'SEC3'`

| n | id | ic | t | f |
|---|---|---|---|---|
| 3.1 | s3-props | 🌊 | General Properties of Waves | `topic3-c1-wave-properties.html` |
| 3.2 | s3-light | 💡 | Light: reflection, refraction, lenses, dispersion | `topic3-c2-light.html` |
| 3.3 | s3-spectrum | 🎨 | Electromagnetic Spectrum | `topic3-c3-em-spectrum.html` |
| 3.4 | s3-sound | 🔊 | Sound | `topic3-c4-sound.html` |

### Section 4 · Electricity & Magnetism → `lvl:'SEC4'`

| n | id | ic | t | f |
|---|---|---|---|---|
| 4.1 | s4-magnetism | 🧲 | Simple Phenomena of Magnetism | `topic-4-c1-magnetism.html` |
| 4.2 | s4-quantities | ⚡ | Electrical Quantities | `topic-4-c2-electrical-quantities.html` |
| 4.3 | s4-circuits | 🔌 | Electric Circuits | `topic-4-c3-circuits.html` |
| 4.4 | s4-safety | 🛡️ | Electrical Safety | `topic-4-c4-safety.html` |
| 4.5 | s4-effects | 🔁 | Electromagnetic Effects | `topic-4-c5-em-effects.html` |

### Section 5 · Nuclear Physics → `lvl:'SEC5'`

| n | id | ic | t | f |
|---|---|---|---|---|
| 5.1 | s5-nucleus | ⚛️ | The Nuclear Model of the Atom | `topic-5-c1-nuclear-model.html` |
| 5.2 | s5-radioactivity | ☢️ | Radioactivity | `topic-5-c2-radioactivity.html` |

### Section 6 · Space Physics → `lvl:'SEC6'`

| n | id | ic | t | f |
|---|---|---|---|---|
| 6.1 | s6-solar | 🪐 | Earth & the Solar System | `topic-6-c1-solar-system.html` |
| 6.2 | s6-stars | 🌌 | Stars & the Universe | `topic-6-c2-stars-universe.html` |

### 3.1 Resource pages → `lvl:'RES'`

| id | ic | t | f |
|---|---|---|---|
| practical | 🧪 | Practical Skills & Data Analysis | `topic-R1-practical.html` |
| formulae | 📋 | Formulae & Quantities Sheet | `topic-R2-formulae.html` |
| glossary | 📖 | Glossary & Index | `topic-R3-glossary.html` |

## 4. Fill in `pts` — example for `s1-motion`

```js
pts:['Distance, displacement, speed, velocity, acceleration',
     'Motion graphs: gradients and areas under the curve',
     'First and second suvat equations; kinematic derivations',
     'Free fall and measuring g with light gates / strobograms',
     'Projectile motion sketch and component resolution']
```

## 5. Note on numbering

`n` is a string — feel free to use the syllabus numbers (`'1.1'`, `'2.3'`…)
so the dashboard matches the real 0625 section numbers. Loose mapping:
`lvl` decides the group, `n` just labels the card.

Now each `topic-N-cN-*.html` becomes its own printable, notebook-style page.