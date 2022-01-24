

window.onload = function() {
    console.log('i work');
}


const hamburger = document.querySelector('.hamburger');
function toggleMenu() {
    hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

