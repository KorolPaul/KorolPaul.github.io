const isMobile = 'ontouchstart' in window || navigator.msMaxTouchPoints;

/* Scroll */
const timeout = 600;
let isAninimating = false;
let activePage = 0;

const pagesElements = document.querySelectorAll('.page');
const navigationElement = document.querySelector('.navigation');

function prevPage() {
    if (activePage !== 0) {
        activePage--;
    }
    scrollPages();
}

function nextPage() {
    if (activePage < pagesElements.length - 1) {
        activePage++;
    }
    scrollPages();
}

function scrollHandler(e, inverse = false) {
    if (isAninimating) {
        return;
    }

    if (e) {
        var isScrollDown = e.deltaY >= 0;
        if (inverse) {
            isScrollDown = !isScrollDown;
        }
        if (isScrollDown) {
            nextPage()
        } else {
            prevPage();
        }
    }
}

function scrollPages() {
    if (isAninimating) {
        return;
    }

    isAninimating = true;
    setTimeout(() => {
        isAninimating = false;
    }, timeout);
    
    pagesElements.forEach(el => el.classList.remove('active'));
    pagesElements[activePage].classList.add('active');
    navigationElement.dataset.slide = activePage;
}

if (!isMobile) {
    document.addEventListener('wheel', scrollHandler, { capture: false, passive: true });
}

function navigateToPage() {
    switch (document.location.hash) {
        case '#about':
            activePage = 1;
            break;
        case '#products':
            activePage = 2;
            break;
        case '#forum':
            activePage = 3;
            break;
        case '#footer':
            activePage = 4;
            break;
        default:
            activePage = 0;
    }
    scrollPages();
}

window.addEventListener('popstate', function() {
    navigateToPage();
});

window.scrollTo(0, 0);
navigateToPage();

var hammer = new Hammer(document.body, {});
hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
hammer.on('swipe', function(e) {
    scrollHandler(e, true);
});

document.querySelector('.js-nav-prev').addEventListener('click', prevPage);
document.querySelector('.js-nav-next').addEventListener('click', nextPage);

/* Popup */
const popupElement = document.querySelector('.popup');
const fadeElement = document.querySelector('.fade');

function togglePopup() {
    popupElement.classList.toggle('opened');
}

fadeElement.addEventListener('click', togglePopup);
