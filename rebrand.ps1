# ============================================================
#  rebrand.ps1 — Copy this project into a NEW syllabus project
#  and re-theme everything in one pass.
#
#  Usage:
#    1. Duplicate this folder (e.g. copy "physicsAsALevel Summary"
#       to "chemAsALevel Summary").
#    2. Edit the variables below.
#    3. Run:  powershell -ExecutionPolicy Bypass -File rebrand.ps1
#    4. Then rewrite data.js TOPICS/GLY/CONST and the topic pages.
#
#  SAFETY: every replace is a full-file read -> replace -> write, and
#  we assert each file is still non-empty after writing.
# ============================================================

# ---- NEW SUBJECT IDENTITY (edit these) ----------------------
$NewTitle     = "9702 Physics"        # shown in the hub sidebar head
$NewSub       = "PREMIUM HANDWRITTEN NOTES HUB"   # sidebar sub
$NewFavicon   = "favicon.svg"         # keep, or drop your own file

# ---- NEW THEME TOKENS (edit any) ----------------------------
$map = [ordered]@{
  '#1e3a8a' = '#1e3a8a'   # --blue
  '#2547d0' = '#2547d0'   # --royal
  '#20242c' = '#20242c'   # --ink
  '#e3edff' = '#e3edff'   # --sky
  '#dbe7ff' = '#dbe7ff'   # --line
  '#fff3b0' = '#fff3b0'   # --hl
  '#d9f6e6' = '#d9f6e6'   # --mint
  '#ffe0ea' = '#ffe0ea'   # --pink
  '#ece4ff' = '#ece4ff'   # --lav
  '#ffb3b3' = '#ffb3b3'   # --margin
  '#2f9e6e' = '#2f9e6e'   # --green
  '#d64571' = '#d64571'   # --rose
  '#7a5af5' = '#7a5af5'   # --violet
  '#e8a23e' = '#e8a23e'   # --amber
}

$FilePatterns = @('*.html','*.css','*.js')

# ---- main ---------------------------------------------------
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$files = Get-ChildItem -Path $root -File -Include $FilePatterns -Recurse |
         Where-Object { $_.Name -notlike 'rebrand.ps1' }

foreach ($f in $files) {
  $orig = [System.IO.File]::ReadAllText($f.FullName)
  $out  = $orig

  foreach ($k in $map.Keys) { $out = $out.Replace($k, $map[$k]) }

  # subject branding (only if we have new values)
  if ($NewTitle) { $out = $out.Replace('9702 Physics', $NewTitle) }
  if ($NewSub)   { $out = $out.Replace('PREMIUM HANDWRITTEN NOTES HUB', $NewSub) }

  if ($out -ne $orig) {
    $utf8 = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($f.FullName, $out, $utf8)
    # safety: refuse a truncated write
    if ((Get-Item $f.FullName).Length -lt 100) {
      Write-Host "ERROR: $($f.Name) looks truncated - restoring" -ForegroundColor Red
      [System.IO.File]::WriteAllText($f.FullName, $orig, $utf8)
    }
    Write-Host "touched: $($f.Name)"
  }
}
Write-Host "`nDone. Now rewrite data.js (TOPICS/GLY/CONST) and the topic-*.html pages."
Write-Host "Remember: remove topic-TEMPLATE.html from the final publish or set st:'wait'."