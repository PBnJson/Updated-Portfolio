// import axios from "axios";

//Targeting DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const logIn = document.getElementById('adminBttn');
// INITIAL STATE OF MENU
let showMenu = false; //let bc its true or false

menuBtn.addEventListener("click", toggleMenu);

//function to open and close the nav/hamburger menu
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        showMenu = false;
    }
}



// document.getElementById("adminBttn").onclick = function () {
//     location.href = "/login";
// }

