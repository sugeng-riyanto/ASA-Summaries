/* ================= STATE ================= */
var KEY='phys9702-progress';
var prog={};
try{prog=JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){prog={};}
function saveProg(){try{localStorage.setItem(KEY,JSON.stringify(prog));}catch(e){}}
function findT(id){for(var i=0;i<TOPICS.length;i++){if(TOPICS[i].id===id)return TOPICS[i];}return null;}
function isDone(tp){return tp&&tp.st==='done';}

/* ================= NAVIGATION ================= */
function openTopic(id){
 var tp=findT(id);
 if(!tp){showPage('home');return;}
 if(isDone(tp)&&tp.f){window.location.href=tp.f;return;}   
 showPage('pg-'+tp.id);                                      
}
function showPage(id){
 var pages=document.querySelectorAll('.topic-page');
 for(var i=0;i<pages.length;i++){pages[i].classList.remove('active');}
 var el=document.getElementById(id);
 if(!el){id='home';el=document.getElementById('home');}
 el.classList.add('active');
 var links=document.querySelectorAll('#navBox a');
 for(var j=0;j<links.length;j++){links[j].classList.toggle('active',links[j].getAttribute('data-id')===id.replace('pg-',''));}
 window.scrollTo(0,0);
}

/* ================= BUILD NAV ================= */
function buildNav(){
 var nb=document.getElementById('navBox'),html='<a data-id="home">🏠 Home · Dashboard</a>';
 var grps=[['AS Level Core','AS'],['A Level Extension','A2'],['Supplementary','RES']];
 for(var g=0;g<grps.length;g++){
  html+='<div class="nav-grp">'+grps[g][0]+'</div>';
  for(var i=0;i<TOPICS.length;i++){var tp=TOPICS[i];if(tp.lvl!==grps[g][1])continue;
   html+='<a data-id="'+tp.id+'"><span>'+tp.n+' · '+tp.t+'</span><span class="st '+(isDone(tp)?'done':'wait')+'"></span></a>';}
 }
 nb.innerHTML=html;
 var links=nb.querySelectorAll('a');
 for(var j=0;j<links.length;j++){links[j].addEventListener('click',function(){var id=this.getAttribute('data-id');if(id==='home'){showPage('home');}else{openTopic(id);}if(window.innerWidth<=980)closeSb();});}
}

/* ================= BUILD PLACEHOLDER PAGES ================= */
function buildPages(){
 var host=document.getElementById('dynPages'),html='';
 for(var i=0;i<TOPICS.length;i++){var tp=TOPICS[i];
  if(isDone(tp))continue;                                   
  var pts='';for(var p=0;p<tp.pts.length;p++){pts+='<li>'+tp.pts[p]+'</li>';}
  var lvlCls=tp.lvl==='AS'?'as':(tp.lvl==='A2'?'a2':'res');
  var lvlTxt=tp.lvl==='AS'?'AS Level Core':(tp.lvl==='A2'?'A Level Extension':'Supplementary Resource');
  html+='<section id="pg-'+tp.id+'" class="topic-page"><div class="page">'
   +'<span class="chip '+lvlCls+'">'+lvlTxt+'</span> &nbsp;<span class="tnum">TOPIC '+tp.n+'</span> &nbsp;<span class="badge wait">⏳ Awaiting reference PDF</span>'
   +'<h2>'+tp.ic+' '+tp.t+'</h2>'
   +'<div class="box formula"><span class="tag">SYLLABUS BRIEF · 9702</span><ul>'+pts+'</ul></div>'
   +(tp.id==='formulae'?buildConstTable():'')
   +(tp.id==='glossary'?buildGlossary():'')
   +'<div class="waitBox"><span class="tag">UNLOCK FULL NOTES</span>'
   +'<p><b>1.</b> Upload the chapter PDF &amp; say <mark>“Generate Topic '+tp.n+': '+tp.t+'”</mark>.</p>'
   +'<p><b>2.</b> Save the result as <span class="fname">'+tp.f+'</span> in the hub folder.</p>'
   +'<p><b>3.</b> In <span class="fname">data.js</span> set this topic to <mark>st:\'done\'</mark>. The hub links it automatically.</p></div>'
   +'<label class="chk"><input type="checkbox" data-id="'+tp.id+'"'+(prog[tp.id]?' checked':'')+'><span>Mark as revised ✔</span></label>'
   +'</div></section>';
 }
 host.innerHTML=html;
 var cbs=host.querySelectorAll('input[type=checkbox]');
 for(var c=0;c<cbs.length;c++){cbs[c].addEventListener('change',function(){prog[this.getAttribute('data-id')]=this.checked;saveProg();refreshStats();refreshGrid();});}
}
function buildConstTable(){
 var rows='';for(var i=0;i<CONST.length;i++){rows+='<tr><td>'+CONST[i][0]+'</td><td>'+CONST[i][1]+'</td></tr>';}
 return '<h3>Physical constants (data-sheet extract)</h3><table><tr><th>Quantity</th><th>Value</th></tr>'+rows+'</table>';
}
function buildGlossary(){
 var rows='';for(var i=0;i<GLY.length;i++){rows+='<tr><td><b>'+GLY[i][0]+'</b></td><td>'+GLY[i][1]+'</td></tr>';}
 return '<h3>Core glossary (first release)</h3><table><tr><th>Term</th><th>Definition</th></tr>'+rows+'</table>';
}

/* ================= DASHBOARD GRID ================= */
var curFilter='all',curSearch='';
function buildGrid(){
 var g=document.getElementById('grid'),html='';
 for(var i=0;i<TOPICS.length;i++){var tp=TOPICS[i];
  var lvlCls=tp.lvl==='AS'?'as':(tp.lvl==='A2'?'a2':'res');
  var lvlTxt=tp.lvl==='AS'?'AS':(tp.lvl==='A2'?'A2':'Resource');
  var matchF=(curFilter==='all'||tp.lvl===curFilter);
  var matchS=(curSearch===''||((tp.n+' '+tp.t).toLowerCase().indexOf(curSearch)>=0));
  var style=(matchF&&matchS)?'':'display:none';
  var badge=isDone(tp)?'<span class="badge done">✔ Notes Complete</span>':'<span class="badge wait">⏳ Awaiting PDF</span>';
  html+='<div class="card" data-id="'+tp.id+'" style="'+style+'">'
   +'<div class="cn">TOPIC '+tp.n+'</div><h4>'+tp.ic+' '+tp.t+'</h4>'
   +'<div class="crow"><span class="chip '+lvlCls+'">'+lvlTxt+'</span>'+badge+'</div>'
   +(isDone(tp)?'<div class="chk" style="cursor:default">📄 '+tp.f+'</div>':'<label class="chk" onclick="event.stopPropagation()"><input type="checkbox" data-id="'+tp.id+'"'+(prog[tp.id]?' checked':'')+'><span>Mark as revised</span></label>')
   +'</div>';
 }
 g.innerHTML=html;
 var cards=g.querySelectorAll('.card');
 for(var c=0;c<cards.length;c++){cards[c].addEventListener('click',function(){openTopic(this.getAttribute('data-id'));});}
 var cbs=g.querySelectorAll('input[type=checkbox]');
 for(var b=0;b<cbs.length;b++){cbs[b].addEventListener('change',function(e){e.stopPropagation();prog[this.getAttribute('data-id')]=this.checked;saveProg();refreshStats();refreshGrid();});}
}
function refreshGrid(){var cbs=document.querySelectorAll('#grid input[type=checkbox],#dynPages input[type=checkbox]');
 for(var i=0;i<cbs.length;i++){cbs[i].checked=!!prog[cbs[i].getAttribute('data-id')];}}

/* ================= STATS ================= */
function refreshStats(){
 var total=TOPICS.length,done=0,rev=0;
 for(var i=0;i<TOPICS.length;i++){if(isDone(TOPICS[i]))done++;if(prog[TOPICS[i].id])rev++;}
 document.getElementById('stTotal').textContent=total;
 document.getElementById('stDone').textContent=done;
 document.getElementById('stRev').textContent=rev;
 var pct=Math.round(100*done/total);
 if(pct>100)pct=100;
 document.getElementById('stPct').textContent=pct+'%';
 document.getElementById('pbarFill').style.width=pct+'%';
}

/* ================= UI WIRING ================= */
var sb=document.getElementById('sb'),ov=document.getElementById('ov'),mb=document.getElementById('menuBtn');
function closeSb(){sb.classList.remove('open');ov.classList.remove('show');}
mb.addEventListener('click',function(){sb.classList.toggle('open');ov.classList.toggle('show');});
ov.addEventListener('click',closeSb);
var pb=document.querySelectorAll('.printBtn');
for(var i=0;i<pb.length;i++){pb[i].addEventListener('click',function(){window.print();});}
document.getElementById('search').addEventListener('input',function(){curSearch=this.value.toLowerCase();buildGrid();});
var fbs=document.querySelectorAll('.fbtn');
for(var f=0;f<fbs.length;f++){fbs[f].addEventListener('click',function(){
 for(var k=0;k<fbs.length;k++){fbs[k].classList.remove('on');}
 this.classList.add('on');curFilter=this.getAttribute('data-f');buildGrid();});}

/* ================= INIT ================= */
buildNav();buildPages();buildGrid();refreshStats();showPage('home');