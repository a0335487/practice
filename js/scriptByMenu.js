// Меню в мобильной версии burger
$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.header-menu a').click(function(event) {
        $('.header-burger,.header-menu').removeClass('active');
        $('body').removeClass('lock');
    });
});