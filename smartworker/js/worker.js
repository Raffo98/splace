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

// document.addEventListener('DOMContentLoaded', function () {
    const carousel = new FlexCarousel('.gallery', {
      autoplay: true,
      arrows: false,
      responsive: [
       {
           breakpoint: 479,
           options: {
               arrows: true
           },
       },
   ]
    });
// });

// function mediaquery(x) {
//   if (x.matches) { // If media query matches
//     console.log("x matches");
//     const carousel = new FlexCarousel('.gallery', {
//             console.log("RINT O CARUSL"),
//       arrows: false
//     });
//   } else {
//     console.log("x not matches");
//     const carousel = new FlexCarousel('.gallery', {
//       console.log("RINT O CARUSL"),
//       arrows: true
//     });
//   }
// }
//
// var x = window.matchMedia("(max-width: 479px)");
// mediaquery(x); // Call listener function at run time
// x.addListener(mediaquery); // Attach listener function on state changes
