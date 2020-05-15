/* Mobile layout check */
if (window.innerWidth < 768) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=320, user-scalable=0')
}
/* Menu toggle */
const menuElement = document.querySelector('.menu');
const menuToggleElement = document.querySelector('.menu-toggle');

menuToggleElement.addEventListener('click', function(e) {
    e.preventDefault();
    menuToggleElement.classList.toggle('opened');
    menuElement.classList.toggle('opened');
});


/* Mobile header */
document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchmove", touchMove, false);

let startPosition = 0;
let endPosition = 0;

function touchStart(event) {
    startPosition = event.touches[0].pageY;
}

function touchMove(event) {
    endPosition = event.touches[0].pageY;
}

document.addEventListener("scroll", function(e) {
    const FIXED_NAVBAR_POSITION = 80;
    const position = window.scrollY;
    const fixedModifier = 'fixed-header';
    const isScrollUp = startPosition < endPosition;

    if (position > FIXED_NAVBAR_POSITION && isScrollUp) {
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
        tns({
            container: carousel,
            items: 2.4,
            gutter: 30,
            nav: false,
            mouseDrag: true,
            loop: true,
            controlsContainer: carouselControls,
            responsive: {
                1920: {
                    gutter: 74,
                    items: 9,
                },
                1366: {
                    gutter: 38,
                    items: 8,
                },
                1260: {
                    gutter: 54,
                },
                1024: {
                    items: 6
                },
                768: {
                    autoWidth: true,
                    items: 5
                }
            }
        });
    }
}

/* Gallery */
var galleries = document.querySelectorAll('.gallery');
if (galleries.length) {
    for (let i = 0; i < galleries.length; i++) {
        const gallery = galleries[i].querySelector('.gallery_items');

        tns({
            mode: 'gallery',
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            container: gallery,
            speed: 1000,
            items: 1,
            nav: false,
            controls: false,
            loop: true
        });
    }
}

/* Accordion */
const accordions = document.querySelector('.accordion');
if (accordions) {
    function toggleAccordion(e) {
        e.preventDefault();

        e.target.parentNode.classList.toggle('accordion_item__closed');
    }

    const accordionHeaders = document.querySelectorAll('.accordion_header');

    for (let j = 0; j < accordionHeaders.length; j++) {
        const accordionHeader = accordionHeaders[j];
        accordionHeader.addEventListener('click', toggleAccordion)
        
    }
}