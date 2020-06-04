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
    document.body.classList.toggle('menu-opened')
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

const isScrollUp = () => (startPosition < endPosition);

document.addEventListener("scroll", function(e) {
    const FIXED_NAVBAR_POSITION = 80;
    const position = window.scrollY;
    const fixedModifier = 'fixed-header';

    if (position > FIXED_NAVBAR_POSITION && isScrollUp()) {
        document.body.classList.add(fixedModifier);
    } else {
        document.body.classList.remove(fixedModifier);
    }
});

/* Title size calculation */
const spectacleTitles = document.querySelectorAll('.spectacle_title');
if (spectacleTitles) {
    for (let i = 0; i < spectacleTitles.length; i++) {
        const title = spectacleTitles[i];
        const titleTextLength = title.innerText.length;
        if (titleTextLength < 10) {
            title.classList.add('spectacle_title__big');
        } else if (titleTextLength > 40) {
            title.classList.add('spectacle_title__small');
        }
    }
}

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
            preventScrollOnTouch: true,
            responsive: {
                768: {
                    autoWidth: true,
                    items: 6
                },
                1024: {
                    items: 8,
                    gutter: 38,
                },
                1260: {
                    gutter: 54,
                    items: 6.8,
                },
                1920: {
                    gutter: 74,
                    items: 8,
                },
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
            speed: 1500,
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
        //e.preventDefault();

        e.target.parentNode.classList.toggle('accordion_item__closed');
    }

    const accordionHeaders = document.querySelectorAll('.accordion_header');

    for (let j = 0; j < accordionHeaders.length; j++) {
        const accordionHeader = accordionHeaders[j];
        accordionHeader.addEventListener('click', toggleAccordion)
        
    }
}

/* Tabs */
const tabLinks = document.querySelectorAll('[data-tab-link]');
const tabContents = document.querySelectorAll('[data-tab]');
if (tabLinks) {
    for (let i = 0; i < tabLinks.length; i++) {
        const link = tabLinks[i];
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tab = e.target.dataset.tabLink;
            for (let j = 0; j < tabLinks.length; j++) {
                const tabLink = tabLinks[j];
                tabLink.classList.remove('active');
            }
            for (let j = 0; j < tabContents.length; j++) {
                const tabContent = tabContents[j];
                tabContent.classList.remove('active');
            }

            e.target.classList.add('active');
            document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        });
        
    }
}

/* Popups */
function togglePopup(e) {
    if (e) {
        e.preventDefault();
    }
    document.body.classList.toggle('popup-opened')
}

const fadeElement = document.querySelector('.fade');
const popupCloseElement = document.querySelector('.popup_close');

if (popupCloseElement) {
    popupCloseElement.addEventListener('click', togglePopup);
}
if (fadeElement) {
    fadeElement.addEventListener('click', function(e) {
        if (e.target === fadeElement) {
            togglePopup();
        }
    });
}


const spectacleAdresses = document.querySelectorAll('.spectacle_adress');
if (spectacleAdresses) {
    for (let i = 0; i < spectacleAdresses.length; i++) {
        const adress = spectacleAdresses[i];
        adress.addEventListener('click', togglePopup)
    }
}

/* Search */
function toggleSearch(e) {
    e.preventDefault();
    document.querySelector('.menu').classList.toggle('search-opened')
}

const searchButtons = document.querySelectorAll('#search-button, .menu_link__search');
if (searchButtons) {
    for (let i = 0; i < searchButtons.length; i++) {
        const button = searchButtons[i];
        button.addEventListener('click', toggleSearch);
    }
}
const searchClose = document.getElementById('search-close');
if (searchClose) {
    searchClose.addEventListener('click', toggleSearch)
}