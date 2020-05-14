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

/* Slider */
var sliders = document.querySelectorAll('.slider');
if (sliders.length) {
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i].querySelector('.slider_track');
        const currentSlideEl = document.querySelector('.slider_counter');

        const setcounter = function (info) {
            currentSlideEl.innerText = `${info.displayIndex}/${info.pages}`;
        }

        const sliderTNS = tns({
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            animateDelay: 3000,
            container: slider,
            items: 1,
            nav: true,
            controls: false,
            mouseDrag: true,
            loop: true,
            autoWidth: true,
            responsive: {
                768: {
                    items: 6.3,
                    gutter: 16,
                    nav: false,
                },
                1260: {
                    gutter: 32,
                },
                1920: {
                    gutter: 46,
                }
            },
            onInit: setcounter
        });

        if (currentSlideEl) {
            sliderTNS.events.on('transitionEnd', setcounter);
            sliderTNS.events.on('transitionEnd', setcounter);
        }
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


/* Title size calculation */
const spectacleTitles = document.querySelectorAll('.spectacle_title');
for (let i = 0; i < spectacleTitles.length; i++) {
    const title = spectacleTitles[i];
    const titleTextLength = title.innerText.length;
    if (titleTextLength < 10) {
        title.classList.add('spectacle_title__big');
    } else if(titleTextLength > 40) {
        title.classList.add('spectacle_title__small');
    } 
}

/* Event page */
const evenMoreInfo = document.querySelector('.event_info-more');
if (evenMoreInfo) {
    evenMoreInfo.addEventListener('click', function(e) {
        e.preventDefault();

        const hidedElements = document.querySelectorAll('.event_hided-info');
        for (let i = 0; i < hidedElements.length; i++) {
            hidedElements[i].classList.remove('event_hided-info');
        }
        e.target.style.display = 'none';
    })
}

const ticketsMoreEl = document.querySelector('.tickets_more');
if (ticketsMoreEl) {
    ticketsMoreEl.addEventListener('click', function (e) {
        e.preventDefault();

        const hidedElements = document.querySelectorAll('.tickets_hided-row');
        for (let i = 0; i < hidedElements.length; i++) {
            
            console.log(hidedElements[i].classList)
            hidedElements[i].classList.remove('tickets_hided-row');
        }
        e.target.style.display = 'none';
    })
}