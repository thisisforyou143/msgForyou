let stars = document.getElementById('star');
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("button");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    mountains_front.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0 + 'px';
    moon.style.top = value * 0.05 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    btn.style.top = value * 0.5 + 'px';
    
})