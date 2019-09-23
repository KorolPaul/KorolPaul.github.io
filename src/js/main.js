$(document).ready(function () {
    var isMobile = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    /* Menu toggle */
    const $menu = $('.menu');
    const $menuToggle = $('.js-menu-toggle');

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
        }
        $menu.toggleClass('opened');
        $('html').toggleClass('menu-opened');
    }
    $menuToggle.on('click', toggleMenu);


    /* Popup */
    var $popup = $('.popup');

    function togglePopup() {
        $popup.toggleClass('opened');
    }

    $('.fade').on('click', togglePopup);

    /* Dropdowns */
    $('select:not([id])').selectize({
        sortField: 'text'
    });

    /* Search aotucomplet */
    $('#select-search').selectize({
        valueField: 'url',
        labelField: 'name',
        searchField: 'name',
        options: [],
        create: false,
        onChange: function(e) {
            window.location = e;
        },
        render: {
            option: function(item, escape) {
                return '<a onclick="alert(1)" href="' + item.url + '">' + escape(item.name) +'</a>';
            }
        },
        score: function(search) {
            var score = this.getScoreFunction(search);
            return function(item) {
                return score(item) * (1 + Math.min(item.watchers / 100, 1));
            };
        },
        load: function(query, callback) {
            if (!query.length) return callback();
            $.ajax({
                url: 'https://afishabox.edinoepole.ru/performances/search?query=' + encodeURIComponent(query),
                type: 'GET',
                crossDomain: true,
                error: function() {
                    callback();
                },
                success: function(res) {
                    console.log(res)
                    callback(res.slice(0, 10));
                }
            });
        }
    });

    /* accordion */
    $('.more-text_button').on('click', function() {
        $(this).toggleClass('opened');
        $(this).prev('.more-text_content').slideToggle();
    });

    /* Slider */
    $('.slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        smartSpeed: 700
    });

    $('.participants').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        responsive:{
            1024:{
                margin: 20,
                items: 2,
            },
            1200:{
                margin: 20,
                items: 4,
                nav: false,
            }
        }
    });

    /* Slider counters */
    $('.slider-count[data-slider]').each(function() {
        var sliderClass = $(this).data('slider');
        var count = $('.' + sliderClass).children().length;
        $(this).find('.slider-count_total').text(count);
    });

    $('.reviews').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        responsive:{
            768:{
                autoWidth: true,
            },
        },
        onChanged: function(event) {
            var position = event.item.index + 1;
            $('.slider-count[data-slider="reviews"] .slider-count_current').text(position);
        }
    });

    $('.smi').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        items: 1
    });

    if ($(window).width() <= 768) {
        $('.gallery-grid').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            items: 1
        });
    }

    /* Datapicker */
    $('.date-input').datepicker();
});
