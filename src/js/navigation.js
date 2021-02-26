/* Scroll */
const timeout = 800;
let activePage = 0;
const lethargy = new Lethargy();
const pagesElements = document.querySelectorAll('.page');
const pagesBgElement = document.querySelector('.pages-container_background');
const navigationElement = document.querySelector('.navigation');
const pageHeadings = document.querySelectorAll('.js-page-headings');


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

function scrollHandler(e) {
    if (hasPeak()) {
        return false;
    }

    const isScrollDown = e.deltaY >= 0;
    if (isScrollDown) {
        nextPage()
    } else {
        prevPage();
    }
}

function scrollPages() {
    pagesElements.forEach(el => el.classList.remove('active'));
    pagesElements[activePage].classList.add('active');
    navigationElement.dataset.slide = activePage;
    pagesBgElement.dataset.slide = activePage;

    if (!isMobile) {
        calculateNavigatoinPosition();
    }
}

function calculateNavigatoinPosition() {
    const pagePosition = pagesElements[activePage].getBoundingClientRect();
    const position = pageHeadings[activePage].getBoundingClientRect();
    const positionTop = position.top - pagePosition.top;

    navigationElement.style.transform = `translateY(${positionTop + (position.height) / 2}px)`;
}

function scrollUpdateHandler(e) {
    update(e);
}

const debouncedScrollHandler = debounce(scrollHandler, timeout)

if (!isMobile && pagesElements.length) {
    document.addEventListener('wheel', scrollUpdateHandler);
}

window.scrollTo(0, 0);

document.querySelector('.js-nav-prev').addEventListener('click', prevPage);
document.querySelector('.js-nav-next').addEventListener('click', nextPage);
window.addEventListener('resize', calculateNavigatoinPosition)

function debounce(f, ms) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);

        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}

var deltas = [null, null, null, null, null, null, null, null, null],
    timer = null,
    lock = 0,
    direction = undefined,
    cb = debouncedScrollHandler,
    seen = 0;

function update(e) {
	// Check for an inertial peak. And if found, lock the peak
    // checking for 10 more events (decremented in hasPeak on
    // each new event) to prevent the sample window from registering
    // true more than once for each peak.
    if (lethargy.check(e) !== false) {
        cb(e);
        return;
    }

    if (hasPeak()) {
        lock = 30;
        seen++;
        cb(e)
    }
    deltas.shift();
    deltas.push(Math.abs(e.deltaY));
}

function hasPeak() {
    //console.log(deltas);
    if (lock > 0) {
        lock--;
        return false;
    }
    
    if (deltas[0] == null) return false;
    
    if (
        deltas[0] <  deltas[4] &&
        deltas[1] <= deltas[4] &&
        deltas[2] <= deltas[4] &&
        deltas[3] <= deltas[4] &&
        deltas[5] <= deltas[4] &&
        deltas[6] <= deltas[4] &&
        deltas[7] <= deltas[4] &&
        deltas[8] <  deltas[4]
    ) return true;
    
    return false;
}
