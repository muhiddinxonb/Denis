"use strict";
document.querySelectorAll('.portfolio__item img').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.active').style.display = 'block';
        document.querySelector('.active__img').src = image.getAttribute('src')
    })
    document.querySelector('.active span').onclick = () => {
        document.querySelector('.active').style.display = 'none';
    }
})

const burger = document.querySelector('#burger');
const wapper = document.querySelector('.header__list');


burger.addEventListener('click', () => {
    wapper.classList.toggle('active');
})