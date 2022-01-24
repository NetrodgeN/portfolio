

window.onload = function() {
    console.log('i work');
}


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





