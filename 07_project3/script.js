let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");//.kar kai yahi value le sakte hai 
const userSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;
//subse phele check karega ki game khalne kai liya available hai ki nhi

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);//user value li hai humne
        validateGuess(guess);//humne isnumber ko pass kar diya next pr
    })
}

function validateGuess(guess) {//ye bataye value 1 se 100 ke beech hai ki nhi 
    if (isNaN(guess)) {
        alert("please enter a valid number");
    } else if (guess < 1) {
        alert("please enter a number greater than 1");
    } else if (guess > 100) {
        alert("please enter a number less than 100");
    } else {
        prevGuess.push(guess);//hum number ko array mai push kar rahe hai
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {//ye bataye ki value random number kai equal hai ki choti hai ya badi hai
    if (guess === randomNumber) {
        displayMessage(`You guessed it right! It was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your guess is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Your guess is too high`);
    }
}

function displayMessage(message) {//isme hum bs ak message pass karenge
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {//
    userInput.value = "";
    userSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function endGame() {
    userInput.value = "";//humne input ko empty kar diya
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}
function newGame() {
    const newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        userSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}