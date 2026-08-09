/* Responsive table wrappers — wrap every <table> in a .tbl-wrap
   scroll container (keeps wide tables usable on phones/tablets). */
(function(){
function wrapTables(){
 document.querySelectorAll('table').forEach(function(t){
  if(t.parentNode && t.parentNode.className==='tbl-wrap'){return;}
  var w=document.createElement('div');
  w.className='tbl-wrap';
  t.parentNode.insertBefore(w,t);
  w.appendChild(t);
 });
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',wrapTables);}else{wrapTables();}
window.addEventListener('load',wrapTables);
})();

(function(){
if(!('speechSynthesis' in window)){return;}

var PREF_KEY='phys9702-voice';
var prefs={gender:'auto',rate:1};
try{prefs=Object.assign(prefs,JSON.parse(localStorage.getItem(PREF_KEY)||'{}'));}catch(e){}

var ROYAL='#2547d0',BLUE='#1e3a8a';

var PANEL=document.createElement('div');
PANEL.id='audioPanel';
PANEL.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999;font-family:Kalam,cursive;'+
 'background:#fff;border:2.5px solid '+ROYAL+';border-radius:18px;box-shadow:0 10px 32px rgba(37,71,208,.38);'+
 'width:272px;padding:14px 14px 12px;flex-direction:column;gap:8px;';
PANEL.style.display='none';
document.body.appendChild(PANEL);

function btn(txt){var b=document.createElement('button');b.textContent=txt;
b.style.cssText='flex:1;border:none;border-radius:12px;background:'+ROYAL+';color:#fff;font-family:Kalam;font-weight:700;font-size:14px;padding:8px 4px;cursor:pointer;box-shadow:0 3px 8px rgba(37,71,208,.32);';
return b;}

var head=document.createElement('div');
head.style.cssText='display:flex;align-items:center;gap:8px;';
var title=document.createElement('b');title.textContent='🔊 Listen';
title.style.cssText='font-size:17px;color:'+BLUE+';flex:1;';
var nowSpk=document.createElement('span');nowSpk.textContent='⏸ paused';
nowSpk.style.cssText='font-size:11.5px;color:#68718a;';
head.appendChild(title);head.appendChild(nowSpk);
PANEL.appendChild(head);

var ctrl=document.createElement('div');ctrl.style.cssText='display:flex;gap:6px;';
var playBtn=btn('▶ Play');
var resetBtn=btn('↺ Restart');
ctrl.appendChild(playBtn);ctrl.appendChild(resetBtn);
PANEL.appendChild(ctrl);

var row2=document.createElement('div');row2.style.cssText='display:flex;gap:6px;align-items:center;';
var voiceBtn=btn('VOICE');voiceBtn.style.flex='0 0 auto';voiceBtn.style.padding='8px 10px';
function voiceLabel(){return prefs.gender==='boy'?'👦 Boy':(prefs.gender==='girl'?'👧 Girl':'🎚️ Auto');}
voiceBtn.textContent=voiceLabel();
voiceBtn.addEventListener('click',function(){prefs.gender=prefs.gender==='boy'?'girl':(prefs.gender==='girl'?'auto':'boy');savePrefs();voiceBtn.textContent=voiceLabel();if(playing&&!paused){var i=idx;restart();}});
row2.appendChild(voiceBtn);
var spBtn=btn('SPEED');spBtn.style.flex='0 0 auto';spBtn.style.padding='8px 10px';
function spLabel(){return '⏩ '+prefs.rate+'×';}
spBtn.textContent=spLabel();
spBtn.addEventListener('click',function(){prefs.rate=prefs.rate===0.7?1:(prefs.rate===1?1.25:0.7);savePrefs();spBtn.textContent=spLabel();});
row2.appendChild(spBtn);
PANEL.appendChild(row2);

var vol=document.createElement('div');
vol.style.cssText='font-size:12px;color:#68718a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
vol.textContent='—';
PANEL.appendChild(vol);

var row4=document.createElement('div');row4.style.cssText='display:flex;gap:6px;';
var prevB=btn('⏮ Prev');var nextB=btn('⏭ Next');
row4.appendChild(prevB);row4.appendChild(nextB);
PANEL.appendChild(row4);

var closeBtn=btn('✕ Close');
closeBtn.style.background='#d64571';
closeBtn.addEventListener('click',function(){stop();hide();});
PANEL.appendChild(closeBtn);

var FAB=document.createElement('button');FAB.id='audioFab';FAB.textContent='🎧';
FAB.style.cssText='position:fixed;right:16px;bottom:16px;z-index:1000;width:56px;height:56px;border-radius:50%;'+
 'border:2px solid #fff;background:linear-gradient(135deg,'+ROYAL+','+BLUE+');color:#fff;font-size:26px;'+
 'box-shadow:0 6px 20px rgba(20,58,138,.45);cursor:pointer;';
document.body.appendChild(FAB);

function show(){PANEL.style.display='flex';FAB.style.display='none';}
function hide(){PANEL.style.display='none';FAB.style.display='block';}
FAB.addEventListener('click',function(){if(!chunks.length)collect();show();});

var hlStyle=document.createElement('style');
hlStyle.textContent='.audio-hl{outline:3px dashed #e8a23e!important;outline-offset:4px;border-radius:8px;}';
document.head.appendChild(hlStyle);

var voices=[];var voicesLoaded=false;
function loadVoices(){voices=speechSynthesis.getVoices()||[];voicesLoaded=voices.length>0;}
loadVoices();
if('onvoiceschanged' in speechSynthesis){speechSynthesis.onvoiceschanged=loadVoices;}

function good(v){return /^en/i.test(v.lang||'');}
function pickVoice(){
 var pool=voices.filter(good);if(!pool.length)pool=voices.slice();
 var want=prefs.gender;
 function fem(n){return /(female|samantha|victoria|karen|moira|tessa|zira|zoey|aria|jenny|allison|susan|cynthia|olivia|ava|emma|natalie|audrey)/i.test(n);}
 function mas(n){return /(male|daniel|alex|ronald|aaron|arthur|thomas|fred|david|george|james|guy|eddy|nathan|graeme|dave)/i.test(n);}
 function score(v){var n=(v.name||'').toLowerCase();var s=0;
  var g=(fem(n)?1:0)-(mas(n)?1:0);
  if(want==='girl')s+=g*40;else if(want==='boy')s-=g*40;else s+=Math.abs(g)*-10;
  if(v.localService)s+=8;
  return s;}
 var best=pool.slice().sort(function(a,b){return score(b)-score(a);})[0];
 return best||pool[0]||null;
}

var chunks=[],idx=0,playing=false,paused=false,utter=null;

function txtOf(el){return (el.textContent||'').replace(/\s+/g,' ').trim();}
function collect(){
 chunks=[];idx=0;
 var main=document.querySelector('main')||document.body;
 var sel='h1,h2,h3,p,li,td,th,dt,dd,figcaption';
 var nodes=main.querySelectorAll(sel);
 var drop=[];nodes.forEach(function(n){if(n.closest('#toc')||n.closest('nav')||n.closest('#navBox')||n.closest('footer'))drop.push(n);});
 var skip=new WeakSet();drop.forEach(function(d){skip.add(d);});
 nodes.forEach(function(el){
  if(skip.has(el))return;
  var t=txtOf(el);if(!t)return;
  if(el.tagName==='H1'||el.tagName==='H2'||el.tagName==='H3'){
   chunks.push({t:t,el:el,head:true});return;}
  if(el.tagName==='LI'||el.tagName==='TD'||el.tagName==='TH'||el.tagName==='DT'||el.tagName==='DD'){
   chunks.push({t:t,el:el});return;}
  var sents=t.split(/(?<=[.!?])\s+(?=[A-Z0-9])/);
  sents.forEach(function(s){if(s)chunks.push({t:s,el:el});});
 });
 if(!chunks.length){var all=(main.textContent||'').replace(/\s+/g,' ').trim();all.split(/(?<=[.!?])\s+(?=[A-Z0-9])/).forEach(function(s){if(s)chunks.push({t:s});});}
}
function splitAll(t){return t.split(/(?<=[.!?])\s+(?=[A-Z0-9])/).filter(Boolean);}

function stop(){speechSynthesis.cancel();playing=false;paused=false;utter=null;
 document.querySelectorAll('.audio-hl').forEach(function(e){e.classList.remove('audio-hl');});
 playBtn.textContent='▶ Play';nowSpk.textContent='⏸ paused';}
function setUi(){playBtn.textContent=(paused?'▶ Resume':(playing?'⏸ Pause':'▶ Play'));nowSpk.textContent=paused?'⏸ paused':(playing?'🔊 speaking…':'⏸ paused');}
function startAt(i){
 if(!chunks.length)collect();
 if(i<0||i>=chunks.length)return;
 idx=i;playing=true;paused=false;setUi();
 speakIdx();
}
function speakIdx(){
 var c=chunks[idx];
 if(!c){finish();return;}
 utter=new SpeechSynthesisUtterance(c.t);
 utter.rate=prefs.rate;
 utter.pitch=prefs.gender==='girl'?1.15:(prefs.gender==='boy'?0.6:1);
 var v=pickVoice();if(v)utter.voice=v;
 if(c.el){c.el.classList.add('audio-hl');vol.textContent=(c.head?'📌 ':'')+c.t.slice(0,44);
  try{c.el.scrollIntoView({behavior:'smooth',block:'center'});}catch(e2){}}
 else{vol.textContent=c.t.slice(0,44);}
 utter.onend=function(){c.el&&c.el.classList.remove('audio-hl');setTimeout(function(){if(playing&&!paused){idx++;speakIdx();}},260);};
 utter.onerror=function(){if(playing&&!paused){idx++;speakIdx();}};
 speechSynthesis.speak(utter);
}
function finish(){
 playing=false;utter=null;
 var ending=new SpeechSynthesisUtterance('That finishes this page. Keep the momentum, keep studying, you are doing brilliantly.');
 var v=pickVoice();if(v)ending.voice=v;ending.rate=prefs.rate*0.95;ending.pitch=prefs.gender==='girl'?1.1:1;
 ending.onend=function(){stop();};
 speechSynthesis.speak(ending);
}
function restart(){if(!chunks.length)collect();stop();idx=0;startAt(0);}
function step(d){var ni=idx+d;if(ni<0)return;if(ni>=chunks.length){finish();return;}startAt(ni);}

playBtn.addEventListener('click',function(){
 if(playing&&!paused){paused=true;speechSynthesis.pause();setUi();return;}
 if(paused){paused=false;speechSynthesis.resume();setUi();return;}
 restart();
});
resetBtn.addEventListener('click',restart);
prevB.addEventListener('click',function(){step(-1);});
nextB.addEventListener('click',function(){step(1);});

document.addEventListener('keydown',function(e){if(e.altKey&&(e.key==='a'||e.key==='A')){e.preventDefault();(PANEL.style.display==='flex')?hide():show();}});

function savePrefs(){try{localStorage.setItem(PREF_KEY,JSON.stringify(prefs));}catch(e){}}
}());