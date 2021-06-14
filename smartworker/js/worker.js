const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarText = document.getElementsByClassName('navbarText');
const navbarLine = document.getElementsByClassName('navbarLine')[0];
const menu = document.querySelector(".menu ul");
const logo = document.querySelector(".vale");

var counter_animation = 0;

toggleButton.addEventListener('click', function() {
  navbarLine.classList.toggle('active');
  for (var i = 0; i < navbarText.length; i++)
    navbarText[i].classList.toggle('active');
});

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
        menu.classList.add("border-radius-active");
    // menu.style.height = "auto";
    toggleButton.innerHTML = "<i class='fas fa-bars'></i>";
    toggleButton.classList.add("menu-closed");
    logo.classList.add("menu-closed");
    toggleButton.classList.remove("menu-open");
    toggleButton.classList.remove("menu-open-ahm");
    logo.classList.remove("menu-open");
    // logo.style.position = "static";
    // toggleButton.style.position = "static";

  } else {
    menu.classList.add("active");
    menu.classList.remove("border-radius-active");
    // menu.style.height = "100vh";
    toggleButton.innerHTML = "<i class='fas fa-times'></i>";
    toggleButton.classList.add("menu-open");
    logo.classList.add("menu-open");
    logo.classList.add("logo-position");
    toggleButton.classList.add("menu-open-ham");
    toggleButton.classList.remove("menu-closed");
    logo.classList.remove("menu-closed");
    // logo.style.position = "absolute";
    // toggleButton.style.position = "absolute";
    // toggleButton.style.right = "0px";

  }
}

toggleButton.addEventListener("click", toggleMenu, false);

//loop through each button
$('.next-section').each(function() {
    $(this).on('click', function () {
        //find the button's parent, in this case it is the section wrapper #about
        var nextSection = $(this).parent().next();
        //animate to the next section, edit the offset and time
        // note: having an offset can be handy, especially if you have fixed elements that depend on these scroll bahaviours. I'll leave it up to you to decide if you need an offset or not. Feel free to delete the 1 pixel altogether, you are the captain your own ship!
        $('html, body').animate({
            scrollTop: nextSection.offset().top + 1
        }, 200 );
    });
});


const vid = document.querySelector('.mockup-video');

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();
var animationCounter = 0;



function isInView() {
  var isElementInView = Utils.isElementInView($('.mockup-video'), true);
  if (isElementInView && animationCounter == 0) {
      vid.play();
      animationCounter = 1;
  }
}

$(window).scroll(function(){
  isInView();
})

// Plugin isInViewport
// !function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery"),require("window")):"function"==typeof define&&define.amd?define("isInViewport",["jquery","window"],n):n(e.$,e.window)}(this,function(e,n){"use strict";function t(n){var t=this;if(1===arguments.length&&"function"==typeof n&&(n=[n]),!(n instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return n.forEach(function(n){"function"!=typeof n?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(t).forEach(function(t){return n.call(e(t))})}),this}function o(n){var t=e("<div></div>").css({width:"100%"});n.append(t);var o=n.width()-t.width();return t.remove(),o}function r(t,i){var a=t.getBoundingClientRect(),u=a.top,c=a.bottom,f=a.left,l=a.right,d=e.extend({tolerance:0,viewport:n},i),s=!1,p=d.viewport.jquery?d.viewport:e(d.viewport);p.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),p=e(n));var w=p.height(),h=p.width(),v=p[0].toString();if(p[0]!==n&&"[object Window]"!==v&&"[object DOMWindow]"!==v){var g=p[0].getBoundingClientRect();u-=g.top,c-=g.top,f-=g.left,l-=g.left,r.scrollBarWidth=r.scrollBarWidth||o(p),h-=r.scrollBarWidth}return d.tolerance=~~Math.round(parseFloat(d.tolerance)),d.tolerance<0&&(d.tolerance=w+d.tolerance),l<=0||f>=h?s:s=d.tolerance?u<=d.tolerance&&c>=d.tolerance:c>0&&u<=w}function i(n){if(n){var t=n.split(",");return 1===t.length&&isNaN(t[0])&&(t[1]=t[0],t[0]=void 0),{tolerance:t[0]?t[0].trim():void 0,viewport:t[1]?e(t[1].trim()):void 0}}return{}}e="default"in e?e.default:e,n="default"in n?n.default:n,/**
//  * @author  Mudit Ameta
//  * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
//  */
// e.extend(e.expr[":"],{"in-viewport":e.expr.createPseudo?e.expr.createPseudo(function(e){return function(n){return r(n,i(e))}}):function(e,n,t){return r(e,i(t[3]))}}),e.fn.isInViewport=function(e){return this.filter(function(n,t){return r(t,e)})},e.fn.run=t});
// //# isInViewport
//
// // Play Video
// $(function() {
//   var $video = $('.mockup-video');
//   var $window = $(window);
//
//   $window.scroll(function() {
//     if ($video.is(":in-viewport")) {
//       $video[0].play();
//     }
//   });
// });







// const vid = document.querySelector('.mockup-video');
//
// const inViewport = (entries, observer) => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       if (counter_animation == 0){
//           vid.play();
//         counter_animation = 1;
//       }
//     }
//   });
// };










//
// // observer.observe(document.querySelector('.mockup-2-video'));
// const Obs = new IntersectionObserver(inViewport);
// const obsOptions = {
//   root: null,
//   rootMargin: '0px',
//   // add 40px inner "margin" area at which the observer starts to calculate:
//   // rootMargin: '40px',
//   // Default is 0.0 meaning the callback is called as soon 1 pixel is inside the viewport.
//   // Set to 1.0 to trigger a callback when 100% of the target element is inside the viewport,
//   // or i.e: 0.5 when half of the target element is visible:
//   threshold: 1.0
// };
// const ELs_inViewport = document.querySelectorAll('.mockup-video');
// ELs_inViewport.forEach(EL => {
//   Obs.observe(EL, obsOptions);
// });










// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// }
//
// let callback = (entries, observer) => {
//   entries.forEach(entry => {
//       if(entry.isIntersecting) {
//         console.log("Entrato");
//         entry,target.autoplay = true;
//       }
//   });
// }
// let observer = new IntersectionObserver(callback, options);
// observer.observe(document.querySelectorAll("mockup-video"));

// document.addEventListener('DOMContentLoaded', function () {
    const carousel = new FlexCarousel('.gallery', {
      autoplay: true
   //    arrows: false,
   //    responsive: [
   //     {
   //         breakpoint: 479,
   //         options: {
   //             arrows: true
   //         },
   //     },
   // ]
    });
    const carouselBtnNext = document.querySelector(".fc.fc-has-arrows.fc-has-arrows-overlay .fc-next");
    const carouselBtnPrev = document.querySelector(".fc.fc-has-arrows.fc-has-arrows-overlay .fc-prev");
    console.log(carouselBtnPrev);
// });



function mediaquery(x) {
  if (x.matches) { // If media query matches
    console.log("x matches");
    carouselBtnNext.style.display = "none";
    carouselBtnPrev.style.display = "none";
  } else {
    console.log("x not matches");
    carouselBtnNext.style.display = "flex";
    carouselBtnPrev.style.display = "flex";
    carouselBtnNext.style.display = "-webkit-flex";
    carouselBtnPrev.style.display = "-webkit-flex";
    carouselBtnNext.style.display = "-moz-flex";
    carouselBtnPrev.style.display = "-moz-flex";
    carouselBtnNext.style.display = "-ms-flex";
    carouselBtnPrev.style.display = "-ms-flex";
    carouselBtnNext.style.display = "-o-flex";
    carouselBtnPrev.style.display = "-o-flex";
  }
}

var x = window.matchMedia("(max-width: 479px)");
mediaquery(x); // Call listener function at run time
x.addListener(mediaquery); // Attach listener function on state changes
