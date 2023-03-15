//add event on multiple element

"use strict";

const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

// navbar toggle for mobile

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// parllel effect

const parallexEl = document.querySelectorAll("[ data-parallax]");

window.addEventListener("mousemove", (event) => {
    for (let i = 0, len = parallexEl.length; i < len; i++) {
        const movementX =
            (event.clientX / window.innerWidth) *
            Number(parallexEl[i].dataset.parallexSpeed);

        const movementY =
            (event.clientY / window.innerHeight) *
            Number(parallexEl[i].dataset.parallexSpeed);

        parallexEl[i].animate(
            {
                transform: `translate(${movementX}px , ${movementY}px)`,
            },
            { duration: 500, fill: "forwards" }
        );
    }
});
