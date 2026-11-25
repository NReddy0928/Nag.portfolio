const progress=document.getElementById('progress');window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});document.getElementById('year').textContent=new Date().getFullYear();const menu=document.getElementById('menu'),links=document.querySelector('.navlinks');menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.section,.project,.skill-card,.achievement,.cert-card,.timeline-item').forEach(el=>{el.classList.add('reveal');observer.observe(el)});

// Subtle mouse-follow depth on the hero portrait (desktop only)
const heroArt=document.querySelector('.hero-art');
if(heroArt && window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  heroArt.addEventListener('mousemove',e=>{const r=heroArt.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;heroArt.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*4}deg)`;});
  heroArt.addEventListener('mouseleave',()=>heroArt.style.transform='');
}
