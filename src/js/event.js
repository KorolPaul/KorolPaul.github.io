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


/* Event page */
const eventMoreInfo = document.querySelector('.event_info-more');
if (eventMoreInfo) {
    eventMoreInfo.addEventListener('click', function(e) {
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