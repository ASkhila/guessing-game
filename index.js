let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too high, Try again!";
        gameResult.style.backgroundColor = "#1e217c";

    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too low,Try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratualations ,you got it right!";
        gameResult.style.backgroundColor = "green";
    }

}