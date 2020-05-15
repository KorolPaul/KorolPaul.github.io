/* Slider */
var sliders = document.querySelectorAll('.slider');
if (sliders.length) {
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i].querySelector('.slider_track');

        tns({
            animateDelay: 3000,
            container: slider,
            items: 1,
            nav: true,
            controls: false,
            mouseDrag: true,
            loop: false,
            responsive: {
                768: {
                    items: 1.5,
                    gutter: 16,
                    nav: false,
                },
                1260: {
                    gutter: 32,
                },
                1920: {
                    gutter: 46,
                }
            }
        });
    }
}

/* Read more */
const showMoreElements = document.querySelectorAll('.contacts_more');
for (let i = 0; i < showMoreElements.length; i++) {
    const button = showMoreElements[i];

    button.addEventListener('click', function (e) {
        e.preventDefault();

        button.nextElementSibling.classList.remove('contacts_hidden')
        e.target.style.display = 'none';
    })
}