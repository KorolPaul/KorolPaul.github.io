const isSmallScreen = screen.width < 768;

const parallaxContentElement = document.querySelector('.parallax_content');
const parallaxBackElement = document.querySelector('.parallax_background');
const parallaxFrontElement = document.querySelector('.parallax_front');

function setBackgroundSize() {
    const height = parallaxContentElement.getBoundingClientRect().height.toFixed(0);
    //console.log(height, height / 3);
    parallaxBackElement.style.height = height / 3;
    parallaxFrontElement.style.height = height / 2;
}

window.addEventListener('load', setBackgroundSize);
window.addEventListener('resize', setBackgroundSize);

/* video */
const videoElement = document.querySelector('.phone_video');

if (videoElement) {
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

const animatedElements = document.querySelectorAll('.js-animated');
const thresholdSteps = [...Array(100).keys()].map(i => i / 100);
console.log(screen.width);
if (animatedElements.length && !isSmallScreen) {
    const observerCallback = function (e) {
        const { boundingClientRect, intersectionRatio, target } = e[0];
        if (boundingClientRect.bottom > 500) {
            const ratio = intersectionRatio.toFixed(2);

            if (target.dataset.transform) {
                const [transformX, transformY] = target.dataset.transform.split(',');
                target.style.transform = `translate(${transformX - (transformX * ratio)}%, ${transformY - (transformY * ratio)}%)`;
            }
            if (target.dataset.scale) {
                const scale = target.dataset.scale;
                target.style.transform = `scale(${parseFloat(scale) + ((1 - scale) * ratio)})`;
            }

            const multiplier = target.classList.contains('phone') ? 4 : 1;
            target.style.opacity = intersectionRatio * multiplier;
        }
    };

    animatedElements.forEach(el => {
        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '0px 0px -25% 0px',
            threshold: thresholdSteps,
            root: document.querySelector('.parallax')
        });
        observer.observe(el);
    })
}



