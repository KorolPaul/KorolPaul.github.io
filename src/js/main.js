/* Menu toggle */
const menuElement = document.querySelector('.menu');
const menuToggleElement = document.querySelector('.menu-toggle');

menuToggleElement.addEventListener('click', function(e) {
    e.preventDefault();
    menuToggleElement.classList.toggle('opened');
    menuElement.classList.toggle('opened');
});

/* Mobile header */
document.addEventListener('scroll' , function(e) {
    const FIXED_NAVBAR_POSITION = 80;
    const position = window.scrollY;
    const fixedModifier = 'fixed-header'
    if (position > FIXED_NAVBAR_POSITION) {
        document.body.classList.add(fixedModifier);
    } else {
        document.body.classList.remove(fixedModifier);
    }
});

/* Carousel */

var carousels = document.querySelectorAll('.carousel');
if (carousels.length) {
    for (let i = 0; i < carousels.length; i++) {
        const carousel = carousels[i].querySelector('.carousel_track');
        const carouselControls = carousels[i].querySelector('.carousel_controls');
        const slider = tns({
            container: carousel,
            items: 3,
            gutter: 30,
            nav: false,
            mouseDrag: true,
            loop: true,
            controlsContainer: carouselControls,
            responsive: {
                1920: {
                    items: 9,
                    gutter: 74
                },
                1366: {
                    gutter: 38
                },
                1260: {
                    gutter: 54
                },
                768: {
                    items: 8
                }
            }
        });
    }
}

/* Slider */
var sliders = document.querySelectorAll('.slider');
if (sliders.length) {
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i].querySelector('.slider_track');

        tns({
            container: slider,
            items: 1,
            nav: true,
            controls: false,
            mouseDrag: true,
            loop: true,
            responsive: {
                768: {
                    items: 2,
                    autoWidth: true,
                    gutter: 16
                }
            }
        });
    }
}

/* Phone number pattern */
const phoneElements = document.querySelectorAll('input[type="tel"]');
for (let i = 0; i < phoneElements.length; i++) {
    var dateMask = IMask(phoneElements[i],
    {
        mask: '-0000-0000',
        lazy: false
    });
}
