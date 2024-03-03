let next = document.getElementById('_next');
let prev = document.getElementById('_prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
});

prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
});

let cards = document.querySelectorAll('.slides');

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        slider.insertBefore(card, slider.firstChild);
    });
});


const button = document.getElementById("_button");
const notification = document.getElementById("_notification");

button.addEventListener("click", () => {
    const counter = Number(notification.getAttribute("data-count")) || 0;
    notification.setAttribute("data-count", counter + 1);
    notification.classList.add("count");
    notification.classList.add("notify");

    // Add animation to the button
    button.style.animation = "clickBut 0.4s ease-in-out";

    // Remove animation class after animation ends
    button.addEventListener("animationend", () => {
        button.style.animation = "";
    });

    button.style.animation = "clickBut 0.4s ease-in-out";
    });

    notification.addEventListener("animationend", () => {
    notification.classList.remove("notify");
    });
