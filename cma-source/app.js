const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Abrir menú'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open ? 'Cerrar menú' : 'Abrir menú'); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && nav.classList.contains('open')){closeMenu();menu.focus();} });
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
 button.classList.add('active');button.setAttribute('aria-pressed','true');let count=0;
 document.querySelectorAll('.project').forEach(p=>{p.hidden=button.dataset.filter!=='all' && p.dataset.category!==button.dataset.filter;if(!p.hidden)count++;});
 document.querySelector('#filter-status').textContent=`${count} proyectos visibles`;
}));
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service;}));
document.querySelector('#contact-form').addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
 const data=new FormData(form);const name=String(data.get('name')).trim();const message=String(data.get('message')).trim();
 if(!name){document.querySelector('#name').setCustomValidity('Ingresá tu nombre.');document.querySelector('#name').reportValidity();return;}
 if(message.length<10){document.querySelector('#message').setCustomValidity('Contanos un poco más sobre tu proyecto (al menos 10 caracteres).');document.querySelector('#message').reportValidity();return;}
 const text=`Hola Matías, quiero consultar por cma_source.\n\nNombre: ${name}\nEmail: ${String(data.get('email')).trim() || 'No indicado'}\nInterés: ${data.get('service')}\n\n${message}`;
 window.location.assign('https://wa.me/5491137593744?text='+encodeURIComponent(text));
});
document.querySelector('#message').addEventListener('input',event=>event.target.setCustomValidity(''));
document.querySelector('#year').textContent=new Date().getFullYear();

document.querySelector('#name').addEventListener('input',event=>event.target.setCustomValidity(''));

// Keep navigation state consistent between desktop and mobile.
window.matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('header') && nav.classList.contains('open'))closeMenu();});
