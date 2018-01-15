let name = 'User Name';
let place = 'London';

console.log( `Hello ${name}, ready for ${place}?` );

(function($) {
    "use strict";
    var slider = {
        init: function() {
            $(".slider__menu--prev").on("click", this.prevSlide);
            $(".slider__menu--next").on("click", this.nextSlide);
        },
        prevSlide: function(event) {
            event.preventDefault();

            var thumbIndex = $(this)
                    .parent()
                    .find("img.slider__thumb--visible")
                    .data("slide-thumb"),
                $targetSlide = $(".slider").find('[data-slide="' + thumbIndex + '"]'),
                prevIndex =
                    thumbIndex - 1 <= 0
                        ? $(this)
                            .parent()
                            .find("img").length
                        : thumbIndex - 1,
                $targetThumb = $(this)
                    .parent()
                    .find('img[data-slide-thumb="' + prevIndex + '"]');

            $(this)
                .parent()
                .find("img.slider__thumb--visible")
                .removeClass("slider__thumb--visible");

            $(".slider__slide--active").removeClass("slider__slide--active");

            $targetThumb.addClass("slider__thumb--visible");

            $targetSlide.addClass("slider__slide--active");

            $(".slider__menu--next")
                .parent()
                .find("img.slider__thumb--visible")
                .removeClass("slider__thumb--visible");

            var nextIndex =
                thumbIndex + 1 >
                $(this)
                    .parent()
                    .find("img").length
                    ? 1
                    : thumbIndex + 1;

            $(".slider__menu--next")
                .parent()
                .find('img[data-slide-thumb="' + nextIndex + '"]')
                .addClass("slider__thumb--visible");
        },
        nextSlide: function(event) {
            event.preventDefault();

            var thumbIndex = $(this)
                    .parent()
                    .find("img.slider__thumb--visible")
                    .data("slide-thumb"),
                $targetSlide = $(".slider").find('[data-slide="' + thumbIndex + '"]'),
                nextIndex =
                    thumbIndex + 1 >
                    $(this)
                        .parent()
                        .find("img").length
                        ? 1
                        : thumbIndex + 1,
                $targetThumb = $(this)
                    .parent()
                    .find('img[data-slide-thumb="' + nextIndex + '"]');

            $(this)
                .parent()
                .find("img.slider__thumb--visible")
                .removeClass("slider__thumb--visible");

            $(".slider__slide--active").removeClass("slider__slide--active");

            $targetThumb.addClass("slider__thumb--visible");

            $targetSlide.addClass("slider__slide--active");

            $(".slider__menu--prev")
                .parent()
                .find("img.slider__thumb--visible")
                .removeClass("slider__thumb--visible");

            var prevIndex =
                thumbIndex - 1 <= 0
                    ? $(this)
                        .parent()
                        .find("img").length
                    : thumbIndex - 1;

            $(".slider__menu--prev")
                .parent()
                .find('img[data-slide-thumb="' + prevIndex + '"]')
                .addClass("slider__thumb--visible");
        }
    };

    $(document).ready(function() {
        slider.init();
    });
})(jQuery);

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.690372, lng: 39.252002},
        zoom: 14,
        styles:[
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#737373"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "97"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": "81"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-70"
                    },
                    {
                        "lightness": "43"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#39d2ca"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: {lat: 51.697354, lng: 39.269249},
        map: map,
        title: 'Дарья',
        icon: '../images/icons/map_marker.svg'
    });

};


// jQuery(document).ready(function($) {
//     console.log()
//     $(window).load(function() {
//         setTimeout(function() {
//             $('.preloader').fadeOut('slow', function() {});
//         }, 2000);
//
//     });
// });

var preloader = document.getElementById("preloader"),
    preloaderText = document.getElementById("preloader__text"),
    preloaderProgress = 0,
    preloaderInterval = setInterval(function() {
        preloaderText.textContent =
            (preloaderProgress <= 9 ? "0" : "") + (preloaderProgress++) + "%";

        if (preloaderProgress === 100) {
            setTimeout(function() {
                preloader.setAttribute("style", "display: none;");

                $('body').children().removeClass('visually-hidden');

                $(window).on("scroll", showSkills);
            }, 0);

            clearInterval(preloaderInterval);
        }
    }, 100 / 240);

window.onload = function() {
    clearInterval(preloaderInterval);

    $('body').children().removeClass('visually-hidden');

    preloaderText.textContent = "100%";

    setTimeout(function() {
        preloader.setAttribute("style", "display: none;");
        $(window).on("scroll", showSkills);
    }, 100);
};

$(document).ready(function(){
    var firstClick=true;
    console.log(firstClick)
    // $('.preloader').fadeOut(2000, function() {});
    $(".navigation__humburger").click(function(){
        if(firstClick){
            $(".navigation__humburger").addClass("navigation__humburger_active");
            $(".drop-left").addClass("drop-left_active");
            $(".drop-right").addClass("drop-right_active");
            $(".menu").addClass("menu_active");
            firstClick=false;
            console.log(firstClick)
        }else{
            $('.menu').removeClass('menu_active');
            $('.navigation__humburger').removeClass("navigation__humburger_active");
            $(".drop-left").removeClass("drop-left_active");
            $(".drop-right").removeClass("drop-right_active");
            firstClick=true;
            console.log(firstClick)
        }
    });
});

var $item = document.getElementsByClassName('saidbar__item'),
    activeItem = 'saidbar__item-active';


for (var i = 0; i < $item.length; i++) {
    $item[i].addEventListener('click', function() {
        if(!(this.classList.contains(activeItem))) {
            for (var j = 0; j < $item.length; j++) {
                $item[j].classList.remove(activeItem);
                this.classList.add(activeItem);
            }
        } else {
            this.classList.remove(activeItem);
        }
    })
};



var parallax = (function () {
  var bg = document.querySelector('.blog');
  var user = document.querySelector('.user-blog');
  var arrow = document.querySelector('.arrow-scroll');



    return {
      move: function (block, windowScroll, strafeAmount){
          var strafe = windowScroll / -strafeAmount + '%';
          var transformString = 'translate3d(0,'+ strafe +',0)';

          var style = block.style;

          style.transform= transformString;
          style.webkitTransform = transformString;
      },

      init: function (wScroll) {
          this.move(bg, wScroll, 45);
          this.move(user, wScroll, 20);
          this.move(arrow , wScroll, 20);
      }

  }

}());

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
};


// var editor = CodeMirror.fromTextArea(myTextarea, {
//     lineNumbers: true
// });

// var myCodeMirror = CodeMirror(document.body, {
//     value: "function myScript(){return 100;}\n",
//     mode:  "javascript"
// });

// var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
//     lineNumbers: true,
//     matchBrackets: true,
//     mode: 'application/x-httpd-php',
//     indentUnit: 4
// });



var parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function(layer, index) {
        var
            divider = index / 100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
            image = layer.firstElementChild;

        layer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';
    });

};


window.addEventListener('mousemove', moveLayers);


var parallax = (function () {
    var bg = document.querySelector('.welcome_welcome');
    var user = document.querySelector('.user');


    return {
        move: function (block, windowScroll, strafeAmount){
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,'+ strafe +',0)';

            var style = block.style;

            style.transform= transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(bg, wScroll, 45);
            this.move(user, wScroll, 20);

        }
    }

}());

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
}

// var map;
// var login = document.getElementById('log-in');
// var front = document.querySelector('.user');
// var back = document.querySelector('.user-login');
// var humburger = document.getElementById('navigation__humburger');
// var dropDownMenu = document.querySelector('.menu');
// var dropDownMenuLeft = document.querySelector('.drop-left');
// var dropDownMenuRight = document.querySelector('.drop-right');
// var $window = $(window);


// var $item = document.getElementsByClassName('saidbar__item'),
//     activeItem = 'saidbar__item-active';
//
// for (var i = 0; i < $item.length; i++) {
//     $item[i].addEventListener('click', function() {
//         if(!(this.classList.contains(activeItem))) {
//             for (var j = 0; j < $item.length; j++) {
//                 $item[j].classList.remove(activeItem);
//                 this.classList.add(activeItem);
//             }
//         } else {
//             this.classList.remove(activeItem);
//         }
//     })
// };
//
// if(login) {
//     login.addEventListener('click', function () {
//
//         front.style.cssText = 'transform: rotateY(180deg) translate(50%,-50%); \
//         backface-visibility: hidden; \
//         transition: 1s; ';
//         back.style.cssText = 'transform: translate(-50%, -50%);  ';
//         login.style.display = 'none';
//     });
// }else {
//     humburger.addEventListener('click', () => {
//         if (humburger.classList.contains('navigation__humburger_active')) {
//             humburger.classList.remove('navigation__humburger_active');
//             dropDownMenu.classList.remove('menu_active');
//             dropDownMenuLeft.classList.remove('drop-left_active');
//             dropDownMenuRight.classList.remove('drop-right_active');
//         } else {
//             humburger.classList.add('navigation__humburger_active');
//             dropDownMenu.classList.add('menu_active');
//             dropDownMenuLeft.classList.add('drop-left_active');
//             dropDownMenuRight.classList.add('drop-right_active');
//         }
//     });
// };
//

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.690372, lng: 39.252002},
        zoom: 14,
        styles:[
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#737373"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "97"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": "81"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "100"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#565656"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-70"
                    },
                    {
                        "lightness": "43"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#39d2ca"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: {lat: 51.697354, lng: 39.269249},
        map: map,
        title: 'Дарья',
        icon: '../images/icons/map_marker.svg'
    });

};





$(document).ready(function(){
    $(".log-in").click(function(e){
        e.preventDefault();
        $(".user-login").toggleClass("user-login--visible");
        $(".user").addClass("user--hidden");
        $(".log-in").addClass('log-in--hidden')
    });
});








var parallaxContainer = document.getElementById('parallax');
var layers = parallaxContainer.children;

var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function(layer, index) {
        var
            divider = index / 40,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
            image = layer.firstElementChild;
        console.log('ok')

        layer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';

    });
};
window.addEventListener('mousemove', moveLayers);


