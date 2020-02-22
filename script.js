// console.log('podpiecie script js działa');


const menuHamburger = document.querySelector('div.hamburger');
const navBar = document.querySelector('nav');

menuHamburger.addEventListener('click', () => {
    navBar.classList.toggle('active')
});


// obsługa popup,modal o ciasteczkach
const btnModal = document.querySelector('.modal button');
const modalWrap = document.querySelector('article.modal-wrap');
const divWrapper = document.querySelector('div.wrapper');


//ten fragment działa w pliku index.html, nie działa w gleria.html - bo doc.qs. nie moze nzaleźć tego elementu w DOM
btnModal.addEventListener('click', () => {
    modalWrap.classList.remove('active');
    divWrapper.classList.remove('blur');
})



//obsługa pop-up - COOKIES
function cookiesAlert() {
    modalWrap.classList.add('active');
    divWrapper.classList.add('blur');
}

setTimeout(cookiesAlert, 3000);

// obsługa buttonUp - wysyłającego na górę strony
// const buttonUp = document.getElementById('buttonUp');


// fadeIn() oraz fadeOut() - działa w jQuery
const buttonUp = document.querySelector('div.wrapper button');
buttonUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.scroll(function () {
    if (this.scrollTop() > 300) buttonUp.fadeIn();
    else buttonUp.fadeOut();
})