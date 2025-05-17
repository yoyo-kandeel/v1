/*navepar*/ 

const $links = document
.querySelectorAll('.head_menu li a');
const $indicator = document
 .querySelector('.head_menu .indicator');

for (let i = 0; i < $links.length; i++) {
  $links[i].addEventListener(
    'mouseover',
    ()=> {
  $links.forEach(($link) => { 
    $link.classList.remove
    ('active');
});
$links[i]
.classList
.add('active');
$indicator
.style
.left = `${i * 50 + 20}px`;
}
);
}
/*service_slide*/
let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}


/*spport_btn*/
const btn = document.querySelector('.support_btn');

btn.addEventListener('mouseover', (event) => {
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});
/*spport_btn2*/
const btn2 = document.querySelector('.support_btn2');

btn2.addEventListener('mouseover', (event) => {
  const x = event.pageX - btn2.offsetLeft;
  const y = event.pageY - btn2.offsetTop;

  btn2.style.setProperty('--x', x + 'px');
  btn2.style.setProperty('--y', y + 'px');
});
/*spport_btn3*/
const btn3 = document.querySelector('.support_btn3');

btn3.addEventListener('mouseover', (event) => {
  const x = event.pageX - btn3.offsetLeft;
  const y = event.pageY - btn3.offsetTop;

  btn3.style.setProperty('--x', x + 'px');
  btn3.style.setProperty('--y', y + 'px');
});