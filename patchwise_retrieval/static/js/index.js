// Minimal JS for project page
function copyBibTeX() {
  const code = document.getElementById('bibtex-code').innerText;
  navigator.clipboard.writeText(code).then(()=>{
    const btn = document.getElementById('copyBib');
    const orig = btn.innerText;
    btn.innerText = 'Copied';
    setTimeout(()=> btn.innerText = orig, 1600);
  }).catch(()=> alert('Copy failed'));
}

window.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('copyBib');
  if(btn) btn.addEventListener('click', copyBibTeX);
});
