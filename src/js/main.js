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
    $(".log-in").click(function(){
        $(".user").toggleClass("user-login");
        $(".user").removeClass("user--visible");

    });
});
