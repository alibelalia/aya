// ساعة ديناميكية
const clock = document.getElementById('clock');
setInterval(()=>{
  const now = new Date();
  clock.textContent = now.getHours().toString().padStart(2,'0')+":"+now.getMinutes().toString().padStart(2,'0');
  clock.style.color = `hsl(${Math.random()*360},70%,85%)`;
  clock.style.transform = `translateY(${Math.random()*4-2}px) rotate(${Math.random()*6-3}deg)`;
},1000);

// نسخ البايو
const bioText = `آية — 00:00 | الاثنين | أكتوبر | القمر | الأمان | بطة | الشتاء | أبيض كريمي / بني`;
document.getElementById('copyBtn').addEventListener('click', async()=>{
  try { await navigator.clipboard.writeText(bioText); alert('تم نسخ البايو!'); }
  catch(e){ alert('انسخ يدويًا:\\n'+bioText); }
});

// مفاجأة بسيطة
document.getElementById('surpriseBtn').addEventListener('click', ()=>{
  for(let i=0;i<20;i++){
    const el=document.createElement('div');
    el.textContent=['✨','🦆','💫'][Math.floor(Math.random()*3)];
    el.style.position='fixed';
    el.style.fontSize=Math.floor(Math.random()*30+16)+'px';
    el.style.left=Math.random()*window.innerWidth+'px';
    el.style.top='-50px';
    el.style.transition='transform 1.5s ease-out, opacity 1.5s ease-out';
    document.body.appendChild(el);
    setTimeout(()=>{ el.style.transform=`translateY(${window.innerHeight+50}px) rotate(${Math.random()*360}deg)`; el.style.opacity='0'; },10);
    setTimeout(()=>{ el.remove(); },1600);
  }
});
