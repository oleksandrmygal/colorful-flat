(function ($) {

    var header = $(".header__navigation"),
        scrollTop;

    window.addEventListener('scroll', fixHeader);

    function fixHeader() {
        scrollTop = window.pageYOffset;

        if (scrollTop >= 200) {
            header.addClass('stick');
        } else {
            header.removeClass('stick');
        }
    }

    fixHeader();
})(jQuery);

$(function () {
    $("#navToggle").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });
});

$(function () {
    $('.nav,.scroll').on('click', 'a', function (event) {
        
        event.preventDefault();

        var topOfset;
        if (window.outerWidth > 1599) {
            // $("#navToggle").click();
            topOfset = 153;
        } else if (window.outerWidth > 1440 && window.outerWidth < 1600) {
            topOfset = 129;

        } else if (window.outerWidth > 1199 && window.outerWidth < 1441) {
            topOfset = 100;

        } else if (window.outerWidth > 991 && window.outerWidth < 1200) {
            topOfset = 88;

        } else if (window.outerWidth > 767 && window.outerWidth < 992) {
            topOfset = 88;
            
        } else {
            topOfset = 76;
        }

        var ID = $(this).attr('href');
        // получаем смещение елемента с id якоря
        var offset = $(ID).offset().top - topOfset;
        $('html,body').stop().animate({
            scrollTop: offset
        }, 1500, 'swing')
    });
});

window.addEventListener('load', function () {
    var link = document.querySelector('.nav__link--active');
    var menu = document.getElementById("menu");

    link.addEventListener('click', function () {
        menu.classList.toggle("active-menu");
    }, false)
});

// Close the dropdown if the user clicks outside of it
window.onclick = function () {
    if (!event.target.matches('.nav__link--active')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu__inner");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active-menu')) {
                openDropdown.classList.remove('active-menu');
            };
        };
    };
};

$('.testimonials__slider').slick({
    slide: '.testimonials__author',
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

var btn = $('.scroll__link');

$(window).scroll(function () {
    if ($(window).scrollTop() > 1200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

$('.parallax-window').parallax({
    imageSrc: './images/faq.jpg'
});

$(document).ready(function () {
    $('.faq__collapse-link').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.faq__collapse-link').not(this).removeClass('in').next().slideUp();
    });
});

! function () {
    "use strict";
    var map;
    window.addEventListener("load", function () {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 40.690049,
                lng: -73.916922
            },
            zoom: 12,
            disableDefaultUI: !0,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#212121"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#212121"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#181818"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1b1b1b"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#2c2c2c"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8a8a8a"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#373737"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#3c3c3c"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#4e4e4e"
                    }]
                },
                {
                    "featureType": "road.local",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#3d3d3d"
                    }]
                }
            ]

        }), new google.maps.Marker({
            position: {
                lat: 40.692416,
                lng: -73.909433
            },
            map: map,
            icon: "./images/marker.png"
        })
    })
}();