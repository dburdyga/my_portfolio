!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){console.log("Hello User Name, ready for London?"),$(document).ready(function(){var e=!0;console.log(e),$(".navigation__humburger").click(function(){e?($(".navigation__humburger").addClass("navigation__humburger_active"),$(".drop-left").addClass("drop-left_active"),$(".drop-right").addClass("drop-right_active"),$(".menu").addClass("menu_active"),e=!1,console.log(e)):($(".menu").removeClass("menu_active"),$(".navigation__humburger").removeClass("navigation__humburger_active"),$(".drop-left").removeClass("drop-left_active"),$(".drop-right").removeClass("drop-right_active"),e=!0,console.log(e))})});var n=function(){var e=document.querySelector(".blog"),t=document.querySelector(".user-blog"),n=document.querySelector(".arrow-scroll");return{move:function(e,t,n){var i="translate3d(0,"+(t/-n+"%")+",0)",o=e.style;o.transform=i,o.webkitTransform=i},init:function(i){this.move(e,i,45),this.move(t,i,20),this.move(n,i,20)}}}();window.onscroll=function(){var e=window.pageYOffset;n.init(e)};var i=document.getElementById("parallax").children,o=function(e){var t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY;[].slice.call(i).forEach(function(e,i){var o=i/100,r=t*o,a=n*o,s=window.innerHeight/2*o,l="translate("+r+"px,"+a+"px)",c=e.firstElementChild;e.style.transform=l,c.style.bottom="-"+s+"px"})};window.addEventListener("mousemove",o);n=function(){var e=document.querySelector(".welcome_welcome"),t=document.querySelector(".user");return{move:function(e,t,n){var i="translate3d(0,"+(t/-n+"%")+",0)",o=e.style;o.transform=i,o.webkitTransform=i},init:function(n){this.move(e,n,45),this.move(t,n,20)}}}();window.onscroll=function(){var e=window.pageYOffset;n.init(e)};for(var r=document.getElementsByClassName("saidbar__item"),a="saidbar__item-active",s=0;s<r.length;s++)r[s].addEventListener("click",function(){if(this.classList.contains(a))this.classList.remove(a);else for(var e=0;e<r.length;e++)r[e].classList.remove(a),this.classList.add(a)});login?login.addEventListener("click",function(){front.style.cssText="transform: rotateY(180deg) translate(50%,-50%);         backface-visibility: hidden;         transition: 1s; ",back.style.cssText="transform: translate(-50%, -50%);  ",login.style.display="none"}):humburger.addEventListener("click",()=>{humburger.classList.contains("navigation__humburger_active")?(humburger.classList.remove("navigation__humburger_active"),dropDownMenu.classList.remove("menu_active"),dropDownMenuLeft.classList.remove("drop-left_active"),dropDownMenuRight.classList.remove("drop-right_active")):(humburger.classList.add("navigation__humburger_active"),dropDownMenu.classList.add("menu_active"),dropDownMenuLeft.classList.add("drop-left_active"),dropDownMenuRight.classList.add("drop-right_active"))}),$(document).ready(function(){$(".log-in").click(function(e){e.preventDefault(),$(".user-login").toggleClass("user-login--visible"),$(".user").addClass("user--hidden"),$(".log-in").addClass("log-in--hidden")})});for(r=document.getElementsByClassName("saidbar__item"),a="saidbar__item-active",s=0;s<r.length;s++)r[s].addEventListener("click",function(){if(this.classList.contains(a))this.classList.remove(a);else for(var e=0;e<r.length;e++)r[e].classList.remove(a),this.classList.add(a)});i=document.getElementById("parallax").children,o=function(e){var t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY;[].slice.call(i).forEach(function(e,i){var o=i/40,r=t*o,a=n*o,s=window.innerHeight/2*o,l="translate("+r+"px,"+a+"px)",c=e.firstElementChild;console.log("ok"),e.style.transform=l,c.style.bottom="-"+s+"px"})};window.addEventListener("mousemove",o)}]);