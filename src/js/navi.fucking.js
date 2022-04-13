"use strict";
// -----Sticky Navi------
function stickyTopNav() {
  var navbar = document.getElementById("myTopnav");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function reactiveTopNav() {
  const topNav = document.getElementById("myTopnav");
  return topNav.classList.contains("responsive") ? topNav.classList.remove("responsive") : topNav.classList.add("responsive");
}

window.onscroll = function () {
  stickyTopNav();
};
window.reactiveTopNav = reactiveTopNav;