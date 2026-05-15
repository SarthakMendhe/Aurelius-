// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{rootMargin:"-80px"});
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});
// Hero parallax
window.addEventListener('scroll',()=>{
  const h = document.querySelector('[data-parallax]');
  if(h){ const y=window.scrollY*0.4; h.style.transform=`translateY(${y}px)`;
         const c=document.querySelector('[data-parallax-fade]'); if(c) c.style.opacity=Math.max(0,1-window.scrollY/600);}
});
