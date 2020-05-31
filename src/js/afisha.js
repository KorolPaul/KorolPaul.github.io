/* Filters */
function toggleSidebar(e) {
    if (e) {
        hideFilters();
        if (e.currentTarget.dataset.id) {
            document.getElementById(e.currentTarget.dataset.id).classList.add('active');
        }
    }
    document.body.classList.toggle('sidebar-opened');
}

function hideFilters() {
    const filtersElements = document.querySelectorAll('.sidebar-filters');
    if (filtersElements.length) {
        for (let i = 0; i < filtersElements.length; i++) {
            filtersElements[i].classList.remove('active');
        }
    }
}

const sidebarFade = document.querySelector('.sidebar_fade');
const sidebarCloseElement = document.querySelector('.sidebar_close');

if (sidebarCloseElement) {
    sidebarCloseElement.addEventListener('click', toggleSidebar);
}
if (sidebarFade) {
    sidebarFade.addEventListener('click', toggleSidebar)
}


const filtersButton = document.getElementById('filters-toggle');
if (filtersButton) {
    filtersButton.addEventListener('click', toggleSidebar);
}
const calendarButton = document.getElementById('calendar-toggle');
if (calendarButton) {
    calendarButton.addEventListener('click', toggleSidebar);
}

if (datepicker) {
    datepicker('#datapicker', {
        alwaysShow: true,
        startDay: 1,
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value // => '1/1/2099'
        },
        customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        customDays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    })
}