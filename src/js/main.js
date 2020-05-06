/* Mobile layout check */
if (window.innerWidth < 768) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=320')
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

document.addEventListener("touchmove", function(e) {
    const FIXED_NAVBAR_POSITION = 80;
    const position = window.scrollY;
    const fixedModifier = 'fixed-header';
    const isScrollUp = startPosition < endPosition;
    console.log(isScrollUp)
    

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
        const slider = tns({
            container: carousel,
            items: 2.4,
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
                    autoWidth: true,
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
                    items: 1.5,
                    autoWidth: true,
                    gutter: 16,
                    nav: false,
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
            items: 1,
            nav: false,
            controls: false,
            loop: true
        });
    }
}


/* Title size calculation */
const spectacleTitles = document.querySelectorAll('.spectacle_title');
for (let i = 0; i < spectacleTitles.length; i++) {
    const title = spectacleTitles[i];
    const titleTextLength = title.innerText.length;
    if (titleTextLength < 10) {
        title.classList.add('spectacle_title__big')
    } else if(titleTextLength > 40) {
        title.classList.add('spectacle_title__small')
    } 
}