const menuToggle = document.querySelector(".menu-toggle");
const container = document.querySelector(".container");
const header = document.querySelector(".header");

menuToggle.onclick = function() {
    container.classList.toggle("open");
    header.classList.toggle("open");
}