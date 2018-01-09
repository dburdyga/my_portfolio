let name = 'User Name';
let place = 'London';

console.log( `Hello ${name}, ready for ${place}?` );

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
}





$(document).ready(function(){
    $(".log-in").click(function(e){
        e.preventDefault();
        $(".user-login").toggleClass("user-login--visible");
        $(".user").addClass("user--hidden");
    });
});


// var editor = CodeMirror.fromTextArea(myTextarea, {
//     lineNumbers: true
// });

// var myCodeMirror = CodeMirror(document.body, {
//     value: "function myScript(){return 100;}\n",
//     mode:  "javascript"
// });

var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
    lineNumbers: true,
    matchBrackets: true,
    mode: 'application/x-httpd-php',
    indentUnit: 4
});



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


// var parallax = (function () {
//     var bg = document.querySelector('.welcome_welcome');
//     var user = document.querySelector('.user');
//
//
//     return {
//         move: function (block, windowScroll, strafeAmount){
//             var strafe = windowScroll / -strafeAmount + '%';
//             var transformString = 'translate3d(0,'+ strafe +',0)';
//
//             var style = block.style;
//
//             style.transform= transformString;
//             style.webkitTransform = transformString;
//         },
//
//         init: function (wScroll) {
//             this.move(bg, wScroll, 45);
//             this.move(user, wScroll, 20);
//
//         }
//     }
//
// }());
//
// window.onscroll = function () {
//     var wScroll = window.pageYOffset;
//
//     parallax.init(wScroll);
// }