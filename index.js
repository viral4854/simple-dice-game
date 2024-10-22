// Create a new variable called randomNumber1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2) {
    alert("Player 1 wins!");
} else if (randomNumber2 > randomNumber1) { // Use 'else if' instead of 'elseif'
    alert("Player 2 wins!");
} else {
    alert("It's a tie! Refresh the page to play again!");
}