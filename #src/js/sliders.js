
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }



if (document.querySelector('.main-slider__body')) {
    let mainSlider = new Swiper('.main-slider__body', {
        slidesPerView: 1,
        allowTouchMove: true,
        speed: 800,
        loop: true,
        preloadImages: false,
        parallax: true,
        autoHeight: true,
        autoplay: {
            delay: 4200,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.slider-controls__arrow_next',
            prevEl: '.slider-controls__arrow_prev',
        },
    });
}

if (document.querySelector('.slider-clients__body')) {
    let clientsSlider = new Swiper('.slider-clients__body', {
        speed: 800,
        loop: true,
        reloadImages: false,
        spaceBetween: 20,
        autoplay: {
            delay: 4200,
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
        navigation: {
            nextEl: '.slider-clients__arrow_next',
            prevEl: '.slider-clients__arrow_prev',
        },
    });
}

let personsSlider = new Swiper('.slider-person__body ', {
    slidesPerView: 1,
    allowTouchMove: true,
    speed: 800,
    loop: true,
    preloadImages: false,
    parallax: true,
    autoHeight: true,
    pagination: {
        el: '.controls-slider__dotts',
        clickable: true,
    },
});


let skillsSlider = new Swiper('.skills-slider__body ', {
    slidesPerView: 1,
    allowTouchMove: true,
    speed: 800,
    loop: true,
    preloadImages: false,
    parallax: true,
    autoHeight: true,
});

personsSlider.controller.control = skillsSlider;
skillsSlider.controller.control = personsSlider;