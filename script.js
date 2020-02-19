const menuHamburger = document.querySelector('div.hamburger');
const navBar = document.querySelector('nav');

menuHamburger.addEventListener('click', () => {
    navBar.classList.toggle('active')
});


// obsługa popup,modal o ciasteczkach
const btnModal = document.querySelector('.modal button');
const modalWrap = document.querySelector('article.modal-wrap');
const divWrapper = document.querySelector('div.wrapper');

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