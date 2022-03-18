var icon2 = document.querySelector('#icon2');
var menu = document.querySelector('#menu');

icon2.addEventListener('click',function(){
    menu.classList.toggle('voir-menu');
    icon2.classList.toggle('close');
});