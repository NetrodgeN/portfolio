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

//vp
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.player__fullscreen');
const mute = player.querySelector('.mute');

function togglePlay(){
     const method = video.paused ? 'play' : 'pause';
     video[method]();
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//event listens
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);



ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


progress.addEventListener('click', scrub);

mute.addEventListener('click', ()=>{
    video.muted = !video.muted; //true or false
    mute.classList.toggle('muted');
})

fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})


//light-night theme
const themeBtn = document.querySelectorAll('.switch-mode');
const allElements = ['html', '.button__portfolio',".footer__github"];

function theme(theme1 = 'light-theme') {
    allElements.forEach((elem) => {
        const oneElem = document.querySelectorAll(elem);
        oneElem.forEach((elem2) => {;
            elem2.classList.toggle(theme1);
        });
    })
}

function headerBg(){
    const headerwrap = document.querySelector('.header__wrapper');
    headerwrap.classList.toggle('header-light-theme');
}

function heroBg(){
    const headerwrap = document.querySelector('.hero__wrapper');
    headerwrap.classList.toggle('hero-light-theme');
}

function contactsBg(){
    const headerwrap = document.querySelector('.contacts__wrapper');
    headerwrap.classList.toggle('contacts-light-theme');
}

function allInOne (){
    theme();
    headerBg();
    heroBg();
    contactsBg();
}

themeBtn.forEach(elem => elem.addEventListener('click', allInOne));
themeBtn.forEach(elem => elem.addEventListener('click', hider));

function hider(event) {
    themeBtn.forEach((element) => element.classList.remove('hide'));
    event.target.classList.add('hide');
}

//local storage

function setLocalStorage() {
    const lang = 'en';
    const mainTheme = 'dark';
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme1', mainTheme)
}
window.addEventListener('beforeunload',setLocalStorage)


function getLocalStorage(){
    if(localStorage.getItem('lang')){
        const lang = localStorage.getItem('lang');
        const mainTheme = 'dark';
        theme(mainTheme);
        getTranslate(lang);
    }
}
window.addEventListener('load', getLocalStorage);

