// Меню в мобильной версии burger
const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');

headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

const menuLinks = document.querySelectorAll('.header-menu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        headerBurger.classList.remove('active');
        headerMenu.classList.remove('active');
        body.classList.remove('lock');
    });
});
