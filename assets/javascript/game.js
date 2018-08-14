var wordChoice = ["sword", "spear", "shield", "pillage", "longship", "dragon", "serpent"];

// select word to guess
var getWord = wordChoice[Math.floor(Math.random() * wordChoice.length)];

// answer array
var answers = [];
for (var i = 0; i < getWord.length; i++) {
    answers[i] = "_";
}
var remaining = getword.length; 

while (remaining > 0) {
    document.write(answers.join(" "))

}



