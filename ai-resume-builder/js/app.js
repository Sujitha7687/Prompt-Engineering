'use strict';
/* AI Resume Builder: frontend-only. Modules: UI, Resume info, Prompt processing, Preview, Print/PDF, Validation. */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=s=>s.split(/\n/).map(x=>x.trim()).filter(Boolean);
const joinAnd=a=>a.length<2?a.join(''):a.slice(0,-1).join(', ')+' and '+a[a.length-1];

/* ---------- Data ---------- */
const ROLES={
 'Frontend Developer':{focus:'building responsive, user-friendly web interfaces',interest:'accessible, user-friendly web experiences',kw:['HTML','CSS','JavaScript','React','Git','Responsive Design']},
 'Full-Stack Developer':{focus:'building complete web applications across frontend and backend',interest:'building reliable end-to-end web products',kw:['JavaScript','Node.js','SQL','REST APIs','Git','React']},
 'Data Analyst':{focus:'cleaning, analysing and presenting data to support decisions',interest:'turning data into clear insights',kw:['Excel','SQL','Python','Power BI','Data Visualization','Statistics']},
 'Software Engineer':{focus:'designing and writing reliable, maintainable software',interest:'solving practical problems with clean code',kw:['Java','Python','Data Structures','OOP','Git','Problem Solving']},
 'UI/UX Designer':{focus:'designing intuitive, user-centred interfaces',interest:'creating clear and inclusive user experiences',kw:['Figma','Wireframing','Prototyping','User Research','Design Systems']},
 'Digital Marketing Executive':{focus:'planning and supporting digital campaigns',interest:'creating content that connects with audiences',kw:['SEO','Social Media','Content Writing','Google Analytics','Canva']},
 'Business Analyst':{focus:'gathering requirements and turning them into clear documentation',interest:'bridging business needs and technical solutions',kw:['Excel','SQL','Requirement Analysis','Documentation','Power BI']}
};
const TPL={
 classic:{name:'Classic',tag:'Serif, centred, recruiter-safe',side:false},
 modern:{name:'Modern',tag:'Coloured sidebar for skills',side:true},
 bold:{name:'Bold',tag:'Full-width colour header',side:false},
 minimal:{name:'Minimal',tag:'Airy, light and simple',side:false},
 creative:{name:'Creative',tag:'Pill headings, right sidebar',side:true}
};
const COLORS=[['#4F46E5','Indigo'],['#0F766E','Teal'],['#1E3A5F','Navy'],['#9F1239','Burgundy'],['#334155','Slate']];
const GROUPS={
 edu:{box:'#edu-list',f:[['degree','Degree / course'],['school','College / school'],['year','Years (e.g. 2022-2026)'],['grade','Grade (optional)']]},
 proj:{box:'#proj-list',f:[['title','Project name'],['tech','Technologies used'],['desc','What you built (one point per line)','ta']]},
 exp:{box:'#exp-list',f:[['role','Role'],['org','Company / organisation'],['dates','Dates'],['desc','What you did (one point per line)','ta']]}
};
const SAMPLE={name:'Kavya Raman',email:'kavya.raman@example.com',phone:'+91 98765 43210',location:'Salem, Tamil Nadu',links:'github.com/kavya-sample\nlinkedin.com/in/kavya-sample',role:'Frontend Developer',level:'Entry-level',tone:'concise',extra:'',
 summary:'',skills:'HTML, CSS, JavaScript, Git, Responsive Design',certs:'Responsive Web Design (sample certificate)',
 edu:[{degree:'B.E. Computer Science and Engineering',school:'Sample Engineering College',year:'2022-2026',grade:'CGPA 8.2'}],
 proj:[{title:'Movie Browsing Dashboard',tech:'HTML, CSS, JavaScript',desc:'built a responsive dashboard to browse movies by genre and rating\nadded search and filter controls using JavaScript'},{title:'Personal Portfolio Website',tech:'HTML, CSS',desc:'designed a mobile-friendly portfolio with project showcase sections'}],
 exp:[{role:'Web Development Intern',org:'Sample Tech Pvt Ltd',dates:'Jun 2025 - Jul 2025',desc:'worked with the team to fix layout issues on landing pages\nlearned version control workflows with Git'}]};
const state={tpl:'modern',accent:COLORS[0][0],photo:''};

/* ---------- Repeatable entries ---------- */
function addEntry(g,v={}){
 const G=GROUPS[g],el=document.createElement('div');el.className='entry';
 el.innerHTML=G.f.map(([k,l,t])=>`<label class="fld${t?' wide':''}"><span>${l}</span>${t?`<textarea rows="3" data-f="${k}">${esc(v[k]||'')}</textarea>`:`<input data-f="${k}" value="${esc(v[k]||'')}">`}</label>`).join('')+'<button type="button" class="rm">Remove</button>';
 $(G.box).append(el);
}
const getList=g=>$$(GROUPS[g].box+' .entry').map(e=>Object.fromEntries($$('[data-f]',e).map(i=>[i.dataset.f,i.value.trim()]))).filter(o=>Object.values(o).some(Boolean));
function setList(g,arr){$(GROUPS[g].box).innerHTML='';(arr&&arr.length?arr:[{}]).forEach(v=>addEntry(g,v))}

/* ---------- Read form ---------- */
function read(){
 const v=id=>$('#'+id).value.trim();
 return{name:v('name'),email:v('email'),phone:v('phone'),location:v('location'),links:lines(v('links')).map(l=>l.replace(/^https?:\/\/(www\.)?/,'')),
  photo:$('#usePhoto').checked?state.photo:'',role:v('role'),level:v('level'),tone:v('tone'),extra:v('extra'),summary:v('summary'),
  skills:v('skills').split(/[,\n]/).map(s=>s.trim()).filter(Boolean),certs:lines(v('certs')),edu:getList('edu'),proj:getList('proj'),exp:getList('exp')};
}

/* ---------- Prompt processing ---------- */
const polish=x=>{x=x.replace(/^[-*\u2022\s]+/,'').trim();if(!x)return'';x=x[0].toUpperCase()+x.slice(1);return/[.!?]$/.test(x)?x:x+'.'};
function promptText(d){
 return `Write a concise professional summary for a ${d.level.toLowerCase()} ${d.role||'[target role]'} using only the skills and project details I provide.
Tone: ${d.tone}. Use clear professional language.
Do not invent work experience, qualifications, metrics, or achievements.

Skills: ${d.skills.join(', ')||'(none entered)'}
Projects: ${d.proj.map(p=>p.title).filter(Boolean).join('; ')||'(none entered)'}
Extra instruction: ${d.extra||'(none)'}`;
}
function draft(d){
 const R=ROLES[d.role]||{focus:'applying relevant skills to practical work',interest:'continuing to grow professionally'};
 const sk=joinAnd(d.skills.slice(0,4)),titles=d.proj.map(p=>p.title).filter(Boolean).slice(0,2);
 let s=`${d.level} ${d.role} with ${titles.length?'hands-on project experience':'a solid foundation'} in ${R.focus}${sk?` using ${sk}`:''}.`;
 if(titles.length)s+=` Built projects such as ${joinAnd(titles)}.`;
 s+={concise:` Interested in ${R.interest}.`,confident:` Ready to contribute to a team focused on ${R.interest}.`,friendly:` Enthusiastic about ${R.interest} and learning from every project.`}[d.tone];
 if(d.extra)s+=' '+polish(d.extra);
 return s;
}

/* ---------- Resume renderer ---------- */
function render(d,t,ac){
 const T=TPL[t],sec=(h,b)=>`<section><h2>${h}</h2>${b}</section>`,ul=a=>a.length?`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'';
 const S={
  summary:d.summary?sec('Profile',`<p>${esc(d.summary)}</p>`):'',
  skills:d.skills.length?sec('Skills',`<ul class="chips">${d.skills.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`):'',
  edu:d.edu.length?sec('Education',d.edu.map(e=>`<div class="it"><div class="row"><b>${esc(e.degree)}</b><span>${esc(e.year)}</span></div><div class="sub">${esc([e.school,e.grade].filter(Boolean).join(', '))}</div></div>`).join('')):'',
  exp:d.exp.length?sec('Experience',d.exp.map(e=>`<div class="it"><div class="row"><b>${esc(e.role)}</b><span>${esc(e.dates)}</span></div><div class="sub">${esc(e.org)}</div>${ul(lines(e.desc||'').map(polish))}</div>`).join('')):'',
  proj:d.proj.length?sec('Projects',d.proj.map(p=>`<div class="it"><div class="row"><b>${esc(p.title)}</b><span>${esc(p.tech)}</span></div>${ul(lines(p.desc||'').map(polish))}</div>`).join('')):'',
  certs:d.certs.length?sec('Certifications',ul(d.certs)):''
 };
 const contact=[d.email,d.phone,d.location,...d.links].filter(Boolean);
 const ph=d.photo?`<img class="r-photo" src="${d.photo}" alt="Profile photo">`:'';
 const head=`<header class="r-head${ph&&!T.side?' has-photo':''}">${T.side?'':ph}<div><h1>${esc(d.name||'Your Name')}</h1><p class="r-role">${esc(d.role||'Target role')}</p>${T.side?'':`<p class="r-contact">${contact.map(c=>`<span>${esc(c)}</span>`).join('')}</p>`}</div></header>`;
 const cls=`paper t-${t}${T.side?' side':''}`,sty=`--ac:${ac}`;
 if(T.side){
  const c=contact.length?sec('Contact',`<ul class="clist">${contact.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`):'';
  return `<div class="${cls}" style="${sty}"><aside>${ph}${c}${S.skills}${S.edu}${S.certs}</aside><main>${head}${S.summary}${S.exp}${S.proj}</main></div>`;
 }
 return `<div class="${cls}" style="${sty}">${head}<div class="r-body">${S.summary}${S.skills}${S.exp}${S.proj}${S.edu}${S.certs}</div></div>`;
}

/* ---------- Preview ---------- */
function fitOne(p){
 const note=$('#fitNote');
 if(!$('#onePage').checked){p.style.width='';p.style.minHeight='';p.dataset.fs='1';note.textContent='';return 1}
 let s=1;
 for(;s>.6;s-=.02){p.style.width=(794/s)+'px';p.style.minHeight=(1123/s)+'px';if(p.offsetHeight*s<=1123.5)break}
 s=Math.max(s,.6);p.style.width=(794/s)+'px';p.style.minHeight=(1123/s)+'px';p.dataset.fs=s;
 note.textContent=p.offsetHeight*s>1123.5?'Still longer than one page at the smallest size. Trim a few points or skip a section.':s<1?`Shrunk to ${Math.round(s*100)}% to fit one page.`:'Already fits on one page.';
 return s;
}
function fit(){
 const p=$('#mount .paper');if(!p){$('#mount').style.height='';$('#fitNote').textContent='';return}
 const fs=fitOne(p),s=Math.min(1,$('#mount').clientWidth/794);
 p.style.transform=`scale(${s*fs})`;$('#mount').style.height=Math.ceil(p.offsetHeight*fs*s)+'px';
}
function paint(){
 const d=read(),m=$('#mount');
 const empty=!(d.name||d.role||d.summary||d.skills.length||d.edu.length||d.proj.length||d.exp.length||d.certs.length);
 if(empty){m.innerHTML='<div class="empty"><img src="assets/hero.svg" alt=""><h3>Your resume will appear here</h3><p>Start typing, or load a sample to see how it looks.</p></div>';m.style.height=''}
 else{m.innerHTML=render(d,state.tpl,state.accent);const p=m.firstElementChild;p.contentEditable='true';p.spellcheck=true;fit()}
 $('#promptBox').textContent=promptText(d);
 const R=ROLES[d.role];$('#kw').innerHTML=R?R.kw.filter(k=>!d.skills.some(s=>s.toLowerCase()===k.toLowerCase())).map(k=>`<button type="button" data-kw="${esc(k)}">+ ${esc(k)}</button>`).join(''):'';
}
let timer;const paintSoon=()=>{clearTimeout(timer);timer=setTimeout(paint,150)};

/* ---------- Templates UI ---------- */
function buildGallery(){
 $('#gallery').innerHTML=Object.entries(TPL).map(([id,t])=>`<label class="tcard"><input type="radio" name="tpl" value="${id}"${id===state.tpl?' checked':''}><div class="thumb" data-t="${id}"></div><strong>${t.name}</strong><small>${t.tag}</small></label>`).join('');
 $('#tplSel').innerHTML=Object.entries(TPL).map(([id,t])=>`<option value="${id}">${t.name}</option>`).join('');
 $('#swatches').innerHTML=COLORS.map(([c,n])=>`<button type="button" class="sw" data-c="${c}" style="background:${c}" aria-label="${n} accent" aria-pressed="${c===state.accent}"></button>`).join('');
 thumbs();$('#tplSel').value=state.tpl;
}
const thumbs=()=>$$('.thumb').forEach(t=>t.innerHTML=render(SAMPLE.parsed,t.dataset.t,state.accent));
function setTpl(id){state.tpl=id;$('#tplSel').value=id;const r=$(`input[name=tpl][value=${id}]`);if(r)r.checked=true;paint()}

/* ---------- Validation ---------- */
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),4500)}
function validate(){
 const d=read(),bad=[];
 if(!d.name)bad.push(['name','your full name']);
 if(!/^\S+@\S+\.\S+$/.test(d.email))bad.push(['email','a valid email']);
 if(!d.role)bad.push(['role','a target role']);
 $$('.bad').forEach(e=>e.classList.remove('bad'));bad.forEach(([id])=>$('#'+id).classList.add('bad'));
 if(bad.length){$('#'+bad[0][0]).focus();toast('Please add '+joinAnd(bad.map(b=>b[1]))+'.');return false}
 return true;
}

/* ---------- Actions ---------- */
function fill(o){
 ['name','email','phone','location','links','role','level','tone','extra','summary','skills','certs'].forEach(k=>{const el=$('#'+k);el.value=o[k]??(el.tagName==='SELECT'?el.value:'')});
 setList('edu',o.edu);setList('proj',o.proj);setList('exp',o.exp);
}
function build(){
 if(!validate())return;
 if(!$('#summary').value.trim())$('#summary').value=draft(read());
 paint();$('#mount').scrollIntoView({behavior:'smooth',block:'start'});toast('Resume built. Review it, then print or save as PDF.');
}
function fillPrint(){
 const p=$('#mount .paper'),r=$('#print-root');r.innerHTML='';if(!p)return false;
 const c=p.cloneNode(true),fs=+p.dataset.fs||1;c.removeAttribute('contenteditable');c.style.transform=fs<1?`scale(${fs})`:'none';
 const w=document.createElement('div');w.className='pwrap'+(fs<1?' one':'');w.append(c);r.append(w);return true;
}
function printResume(){if(!validate())return;if(fillPrint())window.print()}
window.addEventListener('beforeprint',fillPrint);window.addEventListener('afterprint',()=>$('#print-root').innerHTML='');

/* ---------- Init ---------- */
SAMPLE.parsed={...SAMPLE,links:lines(SAMPLE.links),skills:SAMPLE.skills.split(','),certs:lines(SAMPLE.certs),summary:'Entry-level Frontend Developer with hands-on project experience in building responsive web interfaces using HTML, CSS and JavaScript. Interested in accessible, user-friendly web experiences.'};
$('#roles').innerHTML=Object.keys(ROLES).map(r=>`<option value="${r}">`).join('');
['edu','proj','exp'].forEach(g=>setList(g));
buildGallery();paint();
try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}

$('#f').addEventListener('input',e=>{if(e.target.id==='jd')return;e.target.classList.remove('bad');paintSoon()});
$('#f').addEventListener('click',e=>{
 const a=e.target.closest('[data-add]'),r=e.target.closest('.rm'),k=e.target.closest('[data-kw]');
 if(a){addEntry(a.dataset.add)}
 if(r){r.closest('.entry').remove();paint()}
 if(k){const s=$('#skills');s.value=(s.value.trim()?s.value.trim().replace(/,$/,'')+', ':'')+k.dataset.kw;paint()}
});
$('#mount').addEventListener('input',fit);
$('#draftBtn').onclick=()=>{const d=read();if(!d.role){$('#role').classList.add('bad');$('#role').focus();return toast('Choose a target role first.')}$('#summary').value=draft(d);paint()};
$('#buildBtn').onclick=build;$('#printBtn').onclick=printResume;
$('#sampleBtn').onclick=()=>{fill(SAMPLE);$('#summary').value=draft(read());paint();toast('Sample loaded. Replace it with your own details.')};
$('#resetBtn').onclick=()=>{$('#f').reset();state.photo='';$('#usePhoto').checked=false;$('#photoRow').hidden=true;$('#photoFile').value='';$('#jdOut').innerHTML='';['edu','proj','exp'].forEach(g=>setList(g));$$('.bad').forEach(e=>e.classList.remove('bad'));paint()};
$('#gallery').addEventListener('change',e=>setTpl(e.target.value));$('#tplSel').onchange=e=>setTpl(e.target.value);
$('#swatches').addEventListener('click',e=>{const b=e.target.closest('.sw');if(!b)return;state.accent=b.dataset.c;$$('.sw').forEach(s=>s.setAttribute('aria-pressed',s===b));thumbs();paint()});
$('#theme').onclick=()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
addEventListener('resize',fit);

/* ---------- Job-description matching (suggests only; never edits your skills) ---------- */
const BANK=['HTML','CSS','JavaScript|JS','TypeScript','React|React.js|ReactJS','Angular','Vue|Vue.js','Next.js','Node.js|NodeJS|Node js','Express','REST API|RESTful|REST APIs','GraphQL','Git','GitHub','SQL','MySQL','PostgreSQL|Postgres','MongoDB','Python','Java','C++','C#','PHP','Django','Flask','Spring Boot','Docker','Kubernetes','AWS|Amazon Web Services','Azure','GCP|Google Cloud','Linux','CI/CD','Agile','Scrum','Jira','Excel','Power BI','Tableau','Pandas','NumPy','Machine Learning','Data Analysis','Data Visualization','Statistics','Figma','Wireframing|Wireframes','Prototyping','User Research','Design Systems','Responsive Design|Responsive','Accessibility|WCAG','Tailwind','Bootstrap','Sass|SCSS','Redux','Android','Kotlin','Swift','Flutter','Testing','Unit Testing','Selenium','SEO','Content Writing','Google Analytics','Social Media','Canva','Documentation','Requirement Analysis|Requirements Gathering','Communication','Teamwork|Collaboration','Problem Solving','Leadership','Time Management','Data Structures','Algorithms','OOP|Object-Oriented'].map(t=>{const a=t.split('|');return{name:a[0],rx:new RegExp('(?<![A-Za-z0-9+#.])(?:'+a.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')s?(?![A-Za-z0-9+#])','gi')}});
function matchJob(){
 const jd=$('#jd').value,out=$('#jdOut'),d=read();
 if(jd.trim().length<20){out.innerHTML='<small>Paste the requirements section of a job posting first.</small>';return}
 const mine=d.skills.join(' , ')+' , '+d.proj.map(p=>p.tech).join(' , ');
 const found=BANK.map(b=>({n:b.name,c:(jd.match(b.rx)||[]).length,has:(mine.match(b.rx)||[]).length>0})).filter(x=>x.c).sort((a,b)=>b.c-a.c);
 if(!found.length){out.innerHTML='<small>No known skill keywords found. Try pasting the full requirements list.</small>';return}
 const ok=found.filter(x=>x.has),miss=found.filter(x=>!x.has),pct=Math.round(100*ok.length/found.length),chips=(a,c)=>a.map(x=>`<span class="chip ${c}">${esc(x.n)}</span>`).join('');
 out.innerHTML=`<strong>${pct}% keyword match</strong> <small>(${ok.length} of ${found.length} skills in the posting)</small><div class="meter"><i style="width:${pct}%"></i></div>`+
  (ok.length?`<p>Already in your skills or project tech:</p>${chips(ok,'ok')}`:'')+
  (miss.length?`<p>Mentioned in the posting but not in your details:</p>${chips(miss,'miss')}<p><small>Nothing was added for you. If you genuinely have one of these, type it into Skills and show it in a project point.</small></p>`:'<p><small>Great, every skill in the posting appears in your details.</small></p>');
}
$('#jdBtn').onclick=matchJob;

/* ---------- Photo (kept in memory only; cropped to a square) ---------- */
$('#usePhoto').onchange=e=>{$('#photoRow').hidden=!e.target.checked;paint()};
$('#onePage').onchange=paint;
$('#photoFile').onchange=e=>{
 const f=e.target.files[0];if(!f)return;
 if(!f.type.startsWith('image/')||f.size>8e6){e.target.value='';return toast('Choose an image file under 8 MB.')}
 const img=new Image(),u=URL.createObjectURL(f);
 img.onload=()=>{const s=Math.min(img.width,img.height),c=document.createElement('canvas');c.width=c.height=300;c.getContext('2d').drawImage(img,(img.width-s)/2,(img.height-s)/2,s,s,0,0,300,300);state.photo=c.toDataURL('image/jpeg',.85);URL.revokeObjectURL(u);paint()};
 img.onerror=()=>toast('That image could not be read.');img.src=u;
};

/* ---------- Word (.docx) export: tiny built-in zip writer, no libraries ---------- */
const CRC=(()=>{const t=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
const crc32=u=>{let c=-1;for(let i=0;i<u.length;i++)c=CRC[(c^u[i])&255]^(c>>>8);return(c^-1)>>>0};
function zipStore(files){
 const enc=new TextEncoder(),parts=[],cd=[];let off=0;
 for(const f of files){
  const n=enc.encode(f.name),data=enc.encode(f.data),crc=crc32(data),sz=data.length;
  const lh=new DataView(new ArrayBuffer(30));lh.setUint32(0,0x04034b50,true);lh.setUint16(4,20,true);lh.setUint16(6,0x0800,true);lh.setUint16(12,0x21,true);lh.setUint32(14,crc,true);lh.setUint32(18,sz,true);lh.setUint32(22,sz,true);lh.setUint16(26,n.length,true);
  parts.push(new Uint8Array(lh.buffer),n,data);
  const ch=new DataView(new ArrayBuffer(46));ch.setUint32(0,0x02014b50,true);ch.setUint16(4,20,true);ch.setUint16(6,20,true);ch.setUint16(8,0x0800,true);ch.setUint16(14,0x21,true);ch.setUint32(16,crc,true);ch.setUint32(20,sz,true);ch.setUint32(24,sz,true);ch.setUint16(28,n.length,true);ch.setUint32(42,off,true);
  cd.push(new Uint8Array(ch.buffer),n);off+=30+n.length+sz;
 }
 const size=cd.reduce((a,b)=>a+b.length,0),end=new DataView(new ArrayBuffer(22));
 end.setUint32(0,0x06054b50,true);end.setUint16(8,files.length,true);end.setUint16(10,files.length,true);end.setUint32(12,size,true);end.setUint32(16,off,true);
 return new Blob([...parts,...cd,new Uint8Array(end.buffer)],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
}
function docxBlob(d){
 const ac=state.accent.slice(1),W='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
 const R=(t,o={})=>`<w:r><w:rPr>${o.b?'<w:b/>':''}${o.i?'<w:i/>':''}${o.c?`<w:color w:val="${o.c}"/>`:''}${o.sz?`<w:sz w:val="${o.sz}"/>`:''}</w:rPr><w:t xml:space="preserve">${esc(t)}</w:t></w:r>`;
 const P=(inner,ppr='')=>`<w:p>${ppr?`<w:pPr>${ppr}</w:pPr>`:''}${inner}</w:p>`;
 const H=t=>P(R(t,{b:1,c:ac,sz:24}),`<w:keepNext/><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="${ac}"/></w:pBdr><w:spacing w:before="220" w:after="80"/>`);
 const row=(l,r)=>P(R(l,{b:1})+(r?'<w:r><w:tab/></w:r>'+R(r,{c:'666666',sz:19}):''),'<w:keepNext/><w:tabs><w:tab w:val="right" w:pos="9890"/></w:tabs><w:spacing w:after="0"/>');
 const sub=t=>t?P(R(t,{i:1,c:'555555',sz:19}),'<w:spacing w:after="20"/>'):'';
 const bl=t=>P(R(t),'<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr><w:spacing w:after="20"/>');
 const contact=[d.email,d.phone,d.location,...d.links].filter(Boolean);
 let b=P(R(d.name||'Your Name',{b:1,c:ac,sz:44}),'<w:spacing w:after="0"/>')+P(R(d.role,{b:1,c:'444444',sz:26}),'<w:spacing w:after="40"/>')+(contact.length?P(R(contact.join('   |   '),{c:'555555',sz:19})):'');
 if(d.summary)b+=H('Profile')+P(R(d.summary));
 if(d.skills.length)b+=H('Skills')+P(R(d.skills.join(', ')));
 if(d.exp.length)b+=H('Experience')+d.exp.map(e=>row(e.role,e.dates)+sub(e.org)+lines(e.desc||'').map(polish).map(bl).join('')).join('');
 if(d.proj.length)b+=H('Projects')+d.proj.map(p=>row(p.title,p.tech)+lines(p.desc||'').map(polish).map(bl).join('')).join('');
 if(d.edu.length)b+=H('Education')+d.edu.map(e=>row(e.degree,e.year)+sub([e.school,e.grade].filter(Boolean).join(', '))).join('');
 if(d.certs.length)b+=H('Certifications')+d.certs.map(bl).join('');
 const X='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',RT='http://schemas.openxmlformats.org/officeDocument/2006/relationships';
 return zipStore([
  {name:'[Content_Types].xml',data:`${X}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/></Types>`},
  {name:'_rels/.rels',data:`${X}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="${RT}/officeDocument" Target="word/document.xml"/></Relationships>`},
  {name:'word/_rels/document.xml.rels',data:`${X}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="${RT}/styles" Target="styles.xml"/><Relationship Id="rId2" Type="${RT}/numbering" Target="numbering.xml"/></Relationships>`},
  {name:'word/styles.xml',data:`${X}<w:styles ${W}><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="21"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="40" w:line="259" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults></w:styles>`},
  {name:'word/numbering.xml',data:`${X}<w:numbering ${W}><w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="hybridMultilevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="360" w:hanging="220"/></w:pPr></w:lvl></w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>`},
  {name:'word/document.xml',data:`${X}<w:document ${W}><w:body>${b}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1008" w:right="1008" w:bottom="1008" w:left="1008" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr></w:body></w:document>`}
 ]);
}
function downloadDocx(){
 const d=read();
 if(!d.name){$('#name').classList.add('bad');$('#name').focus();return toast('Add your name before downloading.')}
 const u=URL.createObjectURL(docxBlob(d)),a=document.createElement('a');
 a.href=u;a.download=(d.name.replace(/[^\w\- ]+/g,'').trim().replace(/\s+/g,'_')||'Resume')+'_Resume.docx';
 document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2000);
 toast('Word file downloaded. Open it in Word and check it before sending.');
}
$('#docxBtn').onclick=downloadDocx;

