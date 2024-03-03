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
