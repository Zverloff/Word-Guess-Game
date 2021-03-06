//shortcut variables
var newGameButton = document.getElementById("start");
var letterSpaces = document.getElementById("spaces");
var guessedLetters = document.getElementById("guessedDiv");
var guessesRemaining = document.getElementById("score");
var victory = document.getElementById("wins");
var failure = document.getElementById("losses");

//creating word bank
var wordChoice = ["sword", "spear", "shield", "pillage", "longship", "dragon", "serpent"];
//defining variables
var win = 0;
var loss = 0;
var guessesLeft = 9;
var chosenWordArray = [];
var letterArray = [];
var guessedArray = [];
var word = " ";
var gameStart = false

//button to start new game
newGameButton.addEventListener("click", newGame);

//capturing keystrokes
document.onkeyup = function(event) {    
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guessLetter(event.key);
    }
}

//setting the new game conditions
function newGame() {
    guessesLeft = 9;
    chosenWordArray = [];
    letterArray = [];
    guessedArray = [];
    gameStart= true

//getting a random word
word = wordChoice[Math.floor(Math.random() * wordChoice.length)];

//changing the random word to spaces
for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
        chosenWordArray.push("_");
    }
    else  {
        chosenWordArray.push("_");
    }
}

//putting elements on the DOM
guessesRemaining.textContent = guessesLeft;
letterSpaces.textContent = chosenWordArray.join(" ");
guessedArray.textContent = guessedDiv;
}

//Check if game is lost
function checkStatus() {
    if (guessesLeft === 0) {
        gameStart = false;
        loss++;
        failure.textContent = loss;
        guessedLetters.textContent = "Sorry, the mighty sea got you this time. Try again"


    } else if (word.toLowerCase() === chosenWordArray.join("").toLowerCase()) {
        gameStart = false;
        win++;
        victory.textContent = win;
        guessedLetters.textContent = "You are victorious! Your place in Valhalla is all but insured."
    }
}

//function to define logic of checking if the letter is in the word
function guessLetter(letter) { 
    console.log(score)
    //checking to see if buttn has been clicked to start and that a letter has only been pressed once
    if (gameStart === true && guessedArray.indexOf(letter) === -1) {
        //pushing used letter to an array
        guessedArray.push(letter);

        var wIndex = word.indexOf(letter.toLowerCase())

        if (wIndex !== -1) {
            word.split('').forEach(function (wordLetter, i) {
                if (wordLetter === letter.toLowerCase()) {
                    chosenWordArray[i] = letter.toLowerCase()
                }
            })
        }    
        //if check fails, subtract a chance 
        else {
            guessesLeft--;
            guessesRemaining.textContent = guessesLeft;
        }

        //writing new word to the DOM with the letters filled in
        letterSpaces.textContent = chosenWordArray.join(" ");
        guessedLetters.textContent = guessedArray.join(" ");
        checkStatus();
    }
    //if game isn't started or a letter is pressed more than once, alerting the player of what to
    else { 
        if (gameStart === false) {
         alert("Please start a new game");
        }
        else {
            alert("You have already tried that letter")
        }
    }
}




 
