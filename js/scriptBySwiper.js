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
        370: {
            slidesPerView: 1.2,
        },
        920: {
            slidesPerView: 2.2,
        },
        1080: {
            slidesPerView: 3.2,
        },
        1700: {
            slidesPerView: 4.5,
        },
        1800: {
            slidesPerView: 5,
        },
        2560: {
            slidesPerView: 6,
        },
    },
});