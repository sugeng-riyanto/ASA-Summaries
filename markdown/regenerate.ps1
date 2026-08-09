# ================= regenerate.ps1 =================
# Turns the docx_to_markdown.zip chapters in markdown\ into a working
# ASA-Summaries-style hub: one self-contained topic-NN-*.html per chapter,
# a generated data.js, and a re-branded index.html. Pure static site.
#
# USAGE (from the repo root after cloning):
#   powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1
#   powershell -ExecutionPolicy Bypass -File markdown\regenerate.ps1 -Done   # link pages now
#
# REQUIRES: markdown\docx_to_markdown.zip present (already in this repo).
# Run inside a FRESH CLONE, not over the default 9702 demo pages.

[CmdletBinding()]
param(
  [string]$ZipName     = 'docx_to_markdown.zip',
  [string]$CourseTitle = "Mechanics Masterclass",
  [string]$Brand       = '📘 Mechanics Hub',
  [string]$BrandSub    = 'PREMIUM HANDWRITTEN MECHANICS NOTES',
  [switch]$Done               # set st:'done' for all pages so hub links them
)

$ErrorActionPreference = 'Stop'
$scriptDir              = Split-Path -Parent $MyInvocation.MyCommand.Path
$root                   = (Resolve-Path (Join-Path $scriptDir '..')).Path
$zip                    = Join-Path $scriptDir $ZipName
if (-not (Test-Path $zip)) { throw "zip not found: $zip (place your docx_to_markdown.zip next to this script)" }

# ---------- 1. unpack chapters ----------
$exp = Join-Path $scriptDir 'expanded'
if (-not (Test-Path (Join-Path $exp '01. Basics Mathematics.md'))) {
  Write-Host 'Expanding docx_to_markdown.zip …'
  Expand-Archive -Path $zip -DestinationPath $exp -Force
}

# ---------- 2. chapter manifest (n, id, fname, md source, title, emoji, group) ----------
$topics = @(
  @{ n='1';  id='basics';      f='topic-01-basic-mathematics.html';      md='01. Basics Mathematics.md';                     t='Basic Mathematics';                ic='📐' ; lvl='AS' },
  @{ n='2';  id='measures';    f='topic-02-measurements-errors.html';    md='02. Measurements and Errors.md';                t='Measurements & Errors';            ic='📏' ; lvl='AS' },
  @{ n='3';  id='experiments'; f='topic-03-experiments.html';            md='03. Experiments.md';                            t='Experiments & Practical Skills';   ic='🧪' ; lvl='AS' },
  @{ n='4';  id='units';       f='topic-04-units-dimensions.html';       md='04. Units and Dimensions.md';                   t='Units & Dimensions';               ic='🔢' ; lvl='AS' },
  @{ n='5';  id='vectors';     f='topic-05-vectors.html';                md='05. Vectors.md';                           t='Vectors';                           ic='🧭' ; lvl='AS' },
  @{ n='6';  id='kinematics';  f='topic-06-kinematics.html';             md='06. Kinematics.md';                        t='Kinematics';                        ic='🏃' ; lvl='AS' },
  @{ n='7';  id='projectile';  f='topic-07-projectile-motion.html';     md='07. Projectile Motion.md';                 t='Projectile Motion';                 ic='🎯' ; lvl='AS' },
  @{ n='8';  id='newton';      f='topic-08-laws-of-motion.html';         md='08. Laws of motion.md';                        t='Laws of Motion';                    ic='🚀' ; lvl='AS' },
  @{ n='9';  id='wep';         f='topic-09-work-energy-power.html';     md='09. Work Energy and Power.md';                  t='Work, Energy & Power';              ic='⚡' ; lvl='AS' },
  @{ n='10'; id='circular';    f='topic-10-circular-motion.html';       md='10. Circular Motion.md';                   t='Circular Motion';                    ic='🎡' ; lvl='AS' },
  @{ n='11'; id='com';         f='topic-11-centre-of-mass.html';         md='11. Centre of mass linear motion and collisiion.md'; t='Centre of Mass & Collisions'; ic='🎱' ; lvl='A2' },
  @{ n='12'; id='rotational';  f='topic-12-rotational-mechanics.html';   md='12. Rotational Mechanics.md';                   t='Rotational Mechanics';             ic='🌀' ; lvl='A2' },
  @{ n='13'; id='gravitation'; f='topic-13-gravitation.html';            md='13. Gravitation.md';                        t='Gravitation';                       ic='🌍' ; lvl='A2' },
  @{ n='14'; id='shm';         f='topic-14-simple-harmonic-motion.html'; md='14. Simple Harmonic Motion.md';                 t='Simple Harmonic Motion';           ic='🕰️'; lvl='A2' },
  @{ n='15'; id='elasticity';  f='topic-15-elasticity.html';             md='15. Elasticity.md';                        t='Elasticity';                        ic='🧵' ; lvl='A2' },
  @{ n='16'; id='fluids';      f='topic-16-fluid-mechanics.html';        md='16. Fluid Mechanics.md';                   t='Fluid Mechanics';                    ic='🌊' ; lvl='A2' },
  @{ n='P1'; id='summaries';   f='topic-P1-summaries.html';              md='Summaries.md';                               t='Chapter Summary Sheet';             ic='📖' ; lvl='RES' }
)

function Title-Clean([string]$s){ return (($s -replace '[#*]','') -replace '\s+',' ').Trim() }
function Ht([string]$s){ return ($s.Replace('&','&amp;').Replace('<','&lt;').Replace('>','&gt;')) }
function Cap([string]$s){ if($s.Length -eq 0){return $s}; return ($s.Substring(0,1).ToUpper() + $s.Substring(1)) }

function Read-Sections([string]$mdPath) {
  # The Word export is inconsistent: some chapters use '##', others '###'
  # for their main sections. Treat both as sections; '####' become sub-bullets.
  $lines    = [IO.File]::ReadAllLines($mdPath)
  $sections = New-Object System.Collections.Generic.List[string]
  $subs     = @{}
  $cur      = $null
  foreach($ln in $lines) {
    $trim = (($ln.Trim()) -replace '!\[[^\]]*\]\([^)]*\)','')   # strip inline image refs
    if($trim -match '^#{2,3}\s+') {
      $title = Title-Clean ($trim -replace '^#{2,3}\s+','')
      if($title -and $title -ne 'Chapter Contents' -and $title -ne 'Contents') {
        $sections.Add($title)
        $cur = $title
      }
    }
    elseif($trim -match '^####\s+' -and $cur) {
      $sub = Title-Clean ($trim -replace '^####\s+','')
      if($sub){ $subs[$cur] += ($sub + "`n") }
    }
  }
  return @{sections=$sections; subs=$subs}
}

# ---------- 3. extract the <style> block from the template ----------
$tplPath   = Join-Path $root 'topic-TEMPLATE.html'
$tplText   = [IO.File]::ReadAllText($tplPath)
$styleBlock = [regex]::Match($tplText,'(?s)<style>.*?</style>').Value
if(-not $styleBlock){ throw 'topic-TEMPLATE.html <style> block not found' }

# ---------- 4. build one self-contained topic page per chapter ----------
foreach($tp in $topics) {
  $mdPath = Join-Path $exp $tp.md
  if(-not (Test-Path $mdPath)){ Write-Warning "missing md: $($tp.md) — skip"; continue }
  $res  = Read-Sections $mdPath
  $secs = $res.sections
  if($secs.Count -eq 0){ $secs.Add($tp.t) }   # fallback: one section
  # cap at 8 rendered sections; overflow becomes a single "Remaining Sections" list
  $overflow = @()
  if($secs.Count -gt 8){ $overflow = @($secs[8..($secs.Count-1)]); $secs = $secs[0..7] }

  $toc          = ''
  $sectionsHtml = ''
  $chipsHtml    = ''
  $i = 0
  foreach($sec in $secs) {
    $i++
    $clean = Cap (Title-Clean $sec)
    $title = Ht $clean
    $id    = 's' + $i  # PowerShell: s1, s10 … HTML anchors work fine

    $subList = @()
    if($res.subs.ContainsKey($sec)){
      $subList = ($res.subs[$sec] -split "`n") | Where-Object { $_ -ne '' } | Select-Object -First 8
    }
    $subHtml = ''
    if($subList.Count -gt 0){
      $subHtml = '<ul>' + (($subList | ForEach-Object { '<li>' + (Ht $_) + '</li>' }) -join '') + '</ul>'
    }

    $toc += "  <a href='#$id'>$i · $title</a>\r\n"
    $sectionsHtml += @"
<section class="page" id="$id">
 <h2>$i · $title</h2>
 <div class="box tip"><span class="tag">FROM THE SOURCE · $(Ht $tp.md)</span>
  <p>Add the notes of this section here. Keep every number &amp; unit exact; strip the italics the Word export added.</p>
 </div>
 $subHtml
 <div class="box memo"><span class="tag">SOLVED / EXERCISE</span>
  <p>Turn every <code>&gt; ***Example***</code> or <code>&gt; INTRODUCTORY EXERCISE</code> from the source into a worked <b>memo</b> box.</p>
 </div>
</section>
"@
    if($i -le 6){ $chipsHtml += "<span class='b'>$title</span>" }
  }
  if($overflow.Count -gt 0){
    $list = ($overflow | ForEach-Object { '<li>' + (Ht (Cap (Title-Clean $_))) + '</li>' }) -join ''
    $sectionsHtml += "<section class='page' id='sx'><h2>8 · Remaining Sections (fill from the source)</h2><ul>$list</ul></section>"
    $toc += "  <a href='#sx'>8 · Remaining Sections</a>\r\n"
  }
  if(-not $chipsHtml){ $chipsHtml = "<span class='b'>$($tp.t)</span>" }

  $titleshort = Ht $tp.t
  $footer = "Topic $($tp.n) · $titleshort · compiled for classroom use · $CourseTitle"
  $page = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Topic $($tp.n) · $titleshort · $CourseTitle</title>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Kalam:wght@400;700&family=Patrick+Hand&display=swap" rel="stylesheet">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
$styleBlock
</head>
<body>

<button id="menuBtn">☰ &nbsp;Contents</button>
<div id="ov"></div>

<aside id="sb">
 <div class="side-head">$($tp.ic) Topic $($tp.n)</div>
 <div class="side-sub">$BrandSub</div>
 <nav id="toc">
$toc </nav>
 <a class="hubLink" href="index.html">← Back to Course Hub</a>
 <button class="printBtn">⬇ &nbsp;Download as PDF</button>
 <div class="printHint">In the dialog choose “Save as PDF”</div>
</aside>

<main id="main">

<header class="page">
 <div class="sub">Free Course · Topic $($tp.n) · Notes starting ✔</div>
 <h1>$titleshort</h1>
 <div class="chips">$chipsHtml</div>
 <div class="box formula"><span class="tag">EXAMINER'S BRIEF</span>
  <p>One-paragraph intro pointing at the bite-sized exam skills in this chapter — write it while converting the notes.</p>
 </div>
</header>

$sectionsHtml

<footer>$footer</footer>
</main>

<script>
var sb=document.getElementById('sb'),ov=document.getElementById('ov'),mb=document.getElementById('menuBtn');
function closeSb(){sb.classList.remove('open');ov.classList.remove('show');}
mb.addEventListener('click',function(){sb.classList.toggle('open');ov.classList.toggle('show');});
ov.addEventListener('click',closeSb);
var links=document.querySelectorAll('#toc a');
for(var i=0;i<links.length;i++){links[i].addEventListener('click',function(){if(window.innerWidth<=980)closeSb();});}
document.querySelector('.printBtn').addEventListener('click',function(){window.print();});
function spy(){var y=window.innerHeight*0.35,idx=0;
 for(var j=0;j<links.length;j++){var el=document.querySelector(links[j].getAttribute('href'));if(el&&el.getBoundingClientRect().top<=y)idx=j;}
 for(var k=0;k<links.length;k++){links[k].classList.toggle('active',k===idx);}}
window.addEventListener('scroll',spy);spy();
</script>
</body>
</html>
"@
  $out = Join-Path $root $tp.f
  [IO.File]::WriteAllText($out, $page, (New-Object System.Text.UTF8Encoding($false)))
  Write-Host "  ok $($tp.f)   ($($secs.Count) sections)"
}

# ---------- 5. generate data.generated.js ----------
$rows = @()
foreach($tp in $topics) {
  if(-not (Test-Path (Join-Path $root $tp.f))){ continue }
  $st = if($Done){ "'done'" } else { "'wait'" }
  $rows += "{id:'$($tp.id)',n:'$($tp.n)',lvl:'$($tp.lvl)',ic:'$($tp.ic)',t:'$($tp.t)',st:$st,f:'$($tp.f)',pts:['One-line syllabus bullet for this chapter','A key formula, e.g. v = u + at','Revision / exam-technique note']}"
}
$dataJs = "/* GENERATED by markdown\regenerate.ps1 — edit here, and flip st:'wait' → st:'done' as you write each page. */`nvar TOPICS=[`n" + ($rows -join ",`n") + "`n];`n`nvar GLY=[];`n`nvar CONST=[];`n"
$outData = Join-Path $root 'data.generated.js'
[IO.File]::WriteAllText($outData, $dataJs, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "  wrote $outData  ($($rows.Count) topics)"

# ---------- 6. re-brand index.html (head title + sidebar) ----------
$idxPath = Join-Path $root 'index.html'
$idx = [IO.File]::ReadAllText($idxPath)
$idx = $idx.Replace('9702 Physics · Premium Handwritten Notes Hub', "$CourseTitle · Premium Handwritten Notes Hub")
$idx = $idx.Replace('>📗 9702 Physics<', ">$Brand<")
$idx = $idx.Replace('PREMIUM HANDWRITTEN NOTES HUB', $BrandSub)
[IO.File]::WriteAllText($idxPath, $idx, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "  rebranded index.html"

Write-Host "`nNext steps:"
Write-Host "  1. copy data.generated.js over data.js      (or keep st:'wait' and fill TOPICS by hand)"
Write-Host "  2. open index.html — the hub lists all $($rows.Count) topics"
Write-Host "  3. fill each topic-*.html section from its chapter .md (see HOW-TO-make-a-hub.md)"
Write-Host "  4. git add -A; git commit; git push; then enable GitHub Pages (Settings → Pages → branch main / root)"