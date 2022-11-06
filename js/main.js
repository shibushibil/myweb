//Game variables
var mysteryNumber = Math.floor(Math.random() * 100);
console.log(mysteryNumber);
var playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false;


//The input and output fields
var input = document.querySelector("#input");
var output = document.querySelector("#output"); //The button
var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
button.style.cursor = "pointer";

function clickHandler() { validateInput(); }

function validateInput(){
playersGuess = parseInt(input.value);
if (isNaN(playersGuess)) { output.innerHTML = "Please enter a number."; } else { playGame(); }
}

function playGame() {
  guessesRemaining = guessesRemaining - 1;
  guessesMade = guessesMade + 1;
  gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
  playersGuess = parseInt(input.value);
  if (playersGuess > mysteryNumber) {
    output.innerHTML = "That's too high." + gameState; //Check for the end of the game 
    if (guessesRemaining < 1) { endGame(); }
  } else if (playersGuess < mysteryNumber) {
    output.innerHTML = "That's too low." + gameState; //Check for the end of the game 
    if (guessesRemaining < 1) { endGame(); }
  } else if (playersGuess === mysteryNumber) { gameWon = true;
    endGame(); }
}
function endGame() {  if (gameWon)  { output.innerHTML  = "Yes, it's " + mysteryNumber + "!" + "<br>"  + "It only took you " + guessesMade + " guesses.";  }  else  {  output.innerHTML  = "No more guesses left!" + "<br>"  + "The number was: " + mysteryNumber + ".";  } //Disable the button
button.removeEventListener("click", clickHandler, false);  button.disabled = true; //Disable the enter key 
window.removeEventListener("keydown", keydownHandler, false); //Disable the input field
input.disabled = true; } 
