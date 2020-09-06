
var cloud= document.getElementById('cloud');
function mouseEffect(ev){
  cloud.style.left = (ev.clientX-25)+'px';
  cloud.style.top = (ev.clientY-25)+'px';
};
document.addEventListener('click',mouseEffect);
