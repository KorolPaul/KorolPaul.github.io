
const filtersControl = document.querySelector('.filters__fixed .filters_control');
const filters = document.querySelector('.filters__fixed');

filtersControl.addEventListener('click', function(e) {
    e.preventDefault();
    filters.classList.toggle('filters__opened');
});
