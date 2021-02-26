const isMobile = ('ontouchstart' in window || navigator.msMaxTouchPoints) || screen.width < 768;

/* Popup */
const popupToggleElements = document.querySelectorAll('.js-popup-toggle')
const popupElement = document.querySelector('.popup');

function togglePopup() {
    popupElement.classList.toggle('opened');
}

popupToggleElements.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault();
    togglePopup();
}))


/* cookies */
const hasCookies = Cookies.get('CookieNotificationCookie');

const cookiesBanner = document.querySelector('.cookies-banner');
const cookiesAcceptButton = document.getElementById('cookies-eu-accept');
const cookiesRejectButton = document.getElementById('cookies-eu-reject');
cookiesAcceptButton.addEventListener('click', function(e) {
    e.preventDefault();

    cookiesBanner.style.display = 'none';
    Cookies.set('CookieNotificationCookie', 'true', { expires: 365 });
});
cookiesRejectButton.addEventListener('click', function(e) {
    e.preventDefault();

    cookiesBanner.style.display = 'none';
    localStorage.acceptCookies = 'false';
});

if (cookiesBanner) {
    if (!hasCookies && !localStorage.acceptCookies) {
        cookiesBanner.style.display = 'block';
    }
}


/* video */
const videoElement = document.querySelector('.phone_video');

if (videoElement) {
    if (!isMobile) {
        videoElement.removeAttribute('controls');
    }

    const observerCallback = function (e) {
        if (e[0].isIntersecting) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    };

    const observer = new IntersectionObserver(observerCallback, {
        rootMargin: '0px',
        threshold: 0.3
    });
    observer.observe(videoElement);
}

/* language selector */
const langElement = document.querySelector('.lang');
const langToggleElement = document.querySelector('.lang_item');

document.addEventListener('click', function(e) {
    if (e.target === langElement || e.target === langToggleElement) {
        langElement.classList.toggle('opened');
    } else {
        langElement.classList.remove('opened');
    }
});

/* menu toggle */
const menuToggleElements = document.querySelectorAll('.js-menu-toggle');
if (menuToggleElements.length) {
    function toggleMobileMenu() {
        document.body.classList.toggle('menu-opened');
    }

    menuToggleElements.forEach(el => el.addEventListener('click', toggleMobileMenu));
}
