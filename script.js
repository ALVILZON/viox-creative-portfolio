/* VIOX V1.1 — EDIT YOUR CONTENT HERE. Do not put secrets in this public file. */
const profile = {
  email: '', // Example: 'hello@yourdomain.com'; blank hides the email link.
  about: 'VIOX explores the intersection of artificial intelligence, visual direction, and digital experiences. Every project begins with an idea and becomes an opportunity to experiment, refine, and create.',
  availability: 'Open to creative collaborations and new ideas.',
  socials: [
    // {label:'Instagram', url:'https://www.instagram.com/YOUR_USERNAME/'},
    // {label:'Facebook', url:'https://www.facebook.com/YOUR_PAGE/'},
    // {label:'GitHub', url:'https://github.com/YOUR_USERNAME'},
    // {label:'Behance', url:'https://www.behance.net/YOUR_USERNAME'}
  ]
};
const projects = [
  {title:'AI Fashion Editorial',category:'ai',type:'AI Visuals / Art Direction',year:'2026',color:'linear-gradient(135deg,#c8b7a7,#7b716b)',art:'FORM & LIGHT',image:'',images:[],description:'An illustrative project entry exploring fashion imagery, composition, and AI-assisted art direction.',role:'Concept / Art Direction',tools:'Add your tools',link:''},
  {title:'Visual Experiments',category:'design',type:'Design / Creative Exploration',year:'2026',color:'linear-gradient(145deg,#b2aca0,#535b57)',art:'STUDIES / 01',image:'',images:[],description:'An illustrative collection of visual studies, color experiments, and creative concepts.',role:'Visual Design',tools:'Add your tools',link:''},
  {title:'Digital Portrait Series',category:'ai',type:'AI Visuals / Portraits',year:'2026',color:'linear-gradient(135deg,#d4bcb2,#8c7876)',art:'PORTRAIT / 02',image:'',images:[],description:'An illustrative series exploring visual consistency and portrait direction.',role:'Creative Direction',tools:'Add your tools',link:''},
  {title:'VIOX Creative Concepts',category:'digital',type:'Digital / Creative Tools',year:'2026',color:'linear-gradient(135deg,#9b9b91,#343b40)',art:'VIOX / LAB',image:'',images:[],description:'A starting point for documenting creative tools and digital experiments.',role:'Concept / Development',tools:'Add your tools',link:''}
];
const $ = (selector) => document.querySelector(selector);
const grid = $('#projects');
const dialog = $('#project-dialog');
let lastTrigger = null;
function isSafeUrl(url){try {const parsed=new URL(url);return parsed.protocol==='https:';}catch{return false;}}
function createVisual(p, className='project-image', src=p.image){
  const visual=document.createElement('div');visual.className=className;
  visual.style.setProperty('--tile',p.color||'linear-gradient(135deg,#bbb,#777)');
  if(src){const img=document.createElement('img');img.src=src;img.alt=p.title+' project image';img.loading='lazy';img.decoding='async';img.addEventListener('error',()=>{img.remove();visual.classList.remove('has-image');if(!visual.querySelector('.project-art')){const art=document.createElement('span');art.className='project-art';art.textContent=p.art||p.title;visual.append(art);}});visual.classList.add('has-image');visual.append(img);}
  else {const art=document.createElement('span');art.className='project-art';art.textContent=p.art||p.title;visual.append(art);}
  return visual;
}
function render(filter='all'){
  const selected=projects.filter(p=>filter==='all'||p.category===filter);
  $('#project-count').textContent=String(selected.length).padStart(2,'0')+' PROJECT'+(selected.length===1?'':'S');
  $('#empty-state').hidden=selected.length!==0;
  grid.replaceChildren();
  selected.forEach(p=>{
    const button=document.createElement('button');button.type='button';button.className='project-card reveal visible';button.setAttribute('aria-label','View details for '+p.title);
    const visual=createVisual(p);const meta=document.createElement('div');meta.className='project-meta';
    const title=document.createElement('span');title.className='project-title';title.textContent=p.title;
    const type=document.createElement('span');type.className='project-type';type.textContent=p.type;
    meta.append(title,type);button.append(visual,meta);button.addEventListener('click',()=>{lastTrigger=button;openProject(p);});grid.append(button);
  });
}
function detailLine(label,value){const row=document.createElement('div');row.className='detail-row';const strong=document.createElement('strong');strong.textContent=label;const span=document.createElement('span');span.textContent=value;row.append(strong,span);return row;}
function openProject(p){
  const content=$('#dialog-content');content.replaceChildren();
  const tag=document.createElement('span');tag.className='overline';tag.textContent=p.type+' / '+p.year;
  const heading=document.createElement('h2');heading.id='dialog-title';heading.textContent=p.title;
  const description=document.createElement('p');description.textContent=p.description;
  content.append(tag,heading,description,detailLine('Role',p.role||'Creative'),detailLine('Tools',p.tools||'Not specified'));
  const gallery=[p.image,...(p.images||[])].filter(Boolean);
  if(gallery.length){const wrap=document.createElement('div');wrap.className='detail-gallery';gallery.forEach(src=>wrap.append(createVisual(p,'detail-image',src)));content.append(wrap);}
  if(isSafeUrl(p.link)){const a=document.createElement('a');a.className='text-link';a.href=p.link;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Visit project ↗';content.append(a);}
  dialog.showModal();
}
$('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>lastTrigger?.focus());
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});render(button.dataset.filter);
}));
$('#about-copy').textContent=profile.about;$('#availability').textContent=profile.availability;
if(profile.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)){$('#email-link').hidden=false;$('#email-link').href='mailto:'+profile.email;$('#email-link').textContent=profile.email+' ↗';$('#contact-note').hidden=true;}
profile.socials.forEach(s=>{if(!s.label||!isSafeUrl(s.url))return;const a=document.createElement('a');a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=s.label+' ↗';$('#social-links').append(a);$('#contact-note').hidden=true;});
// Only display download buttons if a real PDF exists; no broken links on launch.
fetch('resume/resume.pdf',{method:'HEAD'}).then(r=>{if(r.ok&&r.headers.get('content-type')?.includes('pdf')){document.querySelectorAll('.resume-link').forEach(a=>a.hidden=false);$('#resume-note').hidden=true;}}).catch(()=>{});
$('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
render();
