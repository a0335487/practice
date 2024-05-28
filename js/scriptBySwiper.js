var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-right",
        prevEl: ".swiper-left",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        920: {
            slidesPerView: 2,
        },
        1080: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
        1800: {
            slidesPerView: 5,
        },
        2560: {
            slidesPerView: 6,
        },
    },
});