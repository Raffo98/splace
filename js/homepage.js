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
    toggleButton.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggleButton.innerHTML = "<i class='fas fa-times'></i>";
  }
}

toggleButton.addEventListener("click", toggleMenu, false);





/*const logo = document.getElementsByClassName("logo")[0];
const toggle = document.getElementsByClassName("toggle")[0];
const menu = document.querySelector(".menu");

// function toggleMenu() {
//   if (menu.classList.contains("active")) {
//     menu.classList.remove("active");
//     toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
//   } else {
//     menu.classList.add("active");
//     toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
//   }
// }
//
// toggle.addEventListener("click", toggleMenu, false);

function logoreduced(x) {
  if (x.matches) { // If media query matches
    $(".logo").attr('src', "assets/logo/logo_red.png").on('load', function(){
        logo.style.width = "28.8px";
    });
    // toggle.style.display = "block";
  } else {
    $(".logo").attr('src', "assets/logo/Logo_splace.png").on('load', function(){
      logo.style.width = "120px";
    });

    // toggle.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 750px)")
logoreduced(x) // Call listener function at run time
x.addListener(logoreduced) // Attach listener function on state changes*/
