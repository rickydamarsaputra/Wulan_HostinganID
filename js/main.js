const header = document.querySelector("#header");
const hostinganLogo = document.querySelector("#hostingan-logo");
const menuList = document.querySelector(".menu-list");
const hostinganLogin = document.querySelector(".hostingan-login-button");

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    header.classList.add("header-scrolled");
    hostinganLogo.setAttribute("src", "./img/logo-biru.png");
  } else {
    header.classList.remove("header-scrolled");
    hostinganLogo.setAttribute("src", "./img/logo-white.png");
  }
});
