/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♦", "♥", "♠", "♣"];

  let randomize = array => {
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
  };

  let selectedSuit = randomize(suits);

  document.getElementById("cardTop").innerHTML = selectedSuit;
  document.getElementById("cardMiddle").innerHTML = randomize(numbers);
  document.getElementById("cardBottom").innerHTML = selectedSuit;

  if (["♦", "♥"].includes(selectedSuit)) {
    document.getElementById("cardTop").style.color = "red";
    document.getElementById("cardBottom").style.color = "red";
  }
};
