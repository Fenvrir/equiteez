'use_strict';
let burgerToggle = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.menu__burger');
let body = document.querySelector('body');

const toggleClass = () => {
    if (burgerMenu.classList.contains('disable')) {
        burgerMenu.classList.add('active');
        burgerMenu.classList.remove('disable');
    } else {
        burgerMenu.classList.add('disable');
        burgerMenu.classList.remove('active');
    }
}

burgerToggle.addEventListener('click', (ev) => {
    ev.stopPropagation();
    toggleClass();
})
   
    

burgerMenu.addEventListener('click', (ev) => {
   
    toggleClass();
   
})

body.addEventListener('click', (ev) => {
   
    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        burgerMenu.classList.add('disable');
    }
    
})


