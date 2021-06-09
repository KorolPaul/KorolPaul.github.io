
/* navigation */
const areticleElements = document.querySelectorAll('.article');

function openArticle(e) {
    document.body.classList.add('article-opened')
    const target = e.currentTarget;
    setTimeout(() => {
        target.classList.add('opened');
    }, 300);
}

areticleElements.forEach(el => el.addEventListener('click', openArticle));

/* popup */
function togglePopup(e) {
    e.preventDefault();
    document.body.classList.toggle('popup-opened');
}

const popupButtons = document.querySelectorAll('.js-open-popup');
popupButtons.forEach(button => button.addEventListener('click', togglePopup));

document.querySelector('.fade').addEventListener('click', togglePopup);
