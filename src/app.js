/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let cardIcon = document.querySelectorAll(".icon");
  let cardNumber = document.querySelector(".number");

  const icon = ["♦", "♥", "♠", "♣"];
  const numbers = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function generateCard() {
    let randomIcon = getRandomItem(icon);
    let randomNumber = getRandomItem(numbers);
    let color = randomIcon === "♦" || randomIcon === "♥" ? "red" : "black";

    cardNumber.innerHTML = randomNumber;
    cardNumber.style.color = color;

    cardIcon.forEach(iconElement => {
      iconElement.innerHTML = randomIcon;
      iconElement.style.color = color;
    });
  }
  generateCard();
};
