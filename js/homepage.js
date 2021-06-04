mapboxgl.accessToken = 'pk.eyJ1IjoicmFmZmFlbGVyaWNjYXJkZWxsaSIsImEiOiJjazNpcmZoMzIwYWVzM2NwNm92eWpxbTdiIn0.15M15i30LdC8jUWkVsMSfg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/raffaelericcardelli/ckpi7qoex04lt17t72gud5nuv'
});

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarText = document.getElementsByClassName('navbarText');
const navbarLine = document.getElementsByClassName('navbarLine')[0];
const menu = document.querySelector(".listSection");

toggleButton.addEventListener('click', function() {
  navbarLine.classList.toggle('active');
  for (var i = 0; i < navbarText.length; i++)
    navbarText[i].classList.toggle('active');
});

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    // menu.style.height = "auto";
    toggleButton.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    // menu.style.height = "100vh";
    toggleButton.innerHTML = "<i class='fas fa-times'></i>";
  }
}

toggleButton.addEventListener("click", toggleMenu, false);


// jQuery("#map").draggable({
//     containment: $('#map-container'), scroll: false
// });

/*counter*/

// var $win = $(window);
// var $stat = $('.map-area'); // Change this to affect your desired element.
//
// $win.on('scroll', function () {
//     var scrollTop = $win.scrollTop();
//
//     $stat.each(function () {
//         var $self = $(this);
//         var prev=$self.offset();
//       	console.log(scrollTop);
//         console.log(prev.top);
//         if ( (scrollTop - prev.top) > -300) {
//           $('.worker-count').each(function () {
//               $(this).prop('Counter',100000).animate({
//                   Counter: $(this).text()
//               }, {
//                   duration: 3000,
//                   easing: 'easeOutExpo',
//                   step: function (now) {
//                       $(this).text(Math.ceil(now).toLocaleString('it-IT'));
//                   }
//               });
//           });
//         } else {
//           console.log('n');
//         }
//
//     });
//
// }).scroll();

$('.worker-count').focus(function () {
    $(this).prop('Counter',100000).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'easeOutExpo',
        step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString('it-IT'));
        }
    });
});
