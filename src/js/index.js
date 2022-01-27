import {i18Obj} from './translate.js'

// перевод сайта по соответствующим кнопкам
const enLang = document.querySelector('.en-link')
const ruLang = document.querySelector('.ru-link')
enLang.addEventListener('click',  () => getTranslate('en'));
ruLang.addEventListener('click',  () => getTranslate('ru'));

function getTranslate (lang = 'ru') {
    const textForTranslate = document.querySelectorAll('[data-i18n]');
    textForTranslate.forEach((elem) => {
        elem.textContent =  i18Obj[lang][elem.dataset.i18n]
        console.log( i18Obj[lang][elem.dataset.i18n])
    })
}

//бургер меню
const hamburger = document.querySelector('.hamburger');
const header__nav = document.querySelector('.header__navigation');
function toggleMenu() {
    hamburger.classList.toggle('open');
    header__nav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event){
    if(event.target.classList.contains('nav-link')){
        hamburger.classList.remove('open');
        header__nav.classList.remove('open');
    }
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

//смена изображений по соответствующим кнопкам
//смена активной кнопки по соответсвующему разделу
const portfolioImage = document.querySelectorAll('.portfolio-item'); // изображения
const portfolioBtns = document.querySelector('.button__column'); //контейнер с кнопками
const portfolioBtn = document.querySelectorAll('.button__portfolio');
function changeImage(event) {
    if(event.target.classList.contains('button__portfolio')) {
        const season = event.target.dataset.season;
        portfolioImage.forEach((img, index) => img.src=`./assets/img/${season}/${index + 1}.jpg`);
        portfolioBtn.forEach((btn) => btn.classList.remove('active')); // удаляем с кнопки класс
        event.target.classList.add('active');//добавляем кнопке класс
    }
}

portfolioBtns.addEventListener('click', changeImage);


//кэширование изображений
// function preloadWinterImages(){
//     for (let i = 1; i <=6; i++){
//         const img = new Image();
//         img.src=`./assets/img/winter/${i}.jpg`
//     }
// }
// preloadWinterImages();
//

