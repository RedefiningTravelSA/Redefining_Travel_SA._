// tab switching
document.querySelectorAll('.tabs button').forEach(btn=>{
  btn.addEventListener('click',e=>{
    document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.add('hidden'));
    document.getElementById(e.target.dataset.target).classList.remove('hidden');
  });
});
// fill package dropdown if coming from virtual page
const pkg = localStorage.getItem('selectedPackage');
if(pkg){const sel=document.getElementById('package');if(sel){let opt=document.createElement('option');opt.textContent=pkg;opt.selected=true;sel.prepend(opt);}}
function nextTourist(){
  document.getElementById('touristStep1').classList.add('hidden');
  document.getElementById('touristStep2').classList.remove('hidden');
}
function gotoAdmin(){
  window.location.href='admin.html';
}