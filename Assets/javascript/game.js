//Variables:
let firstNode = document.getElementById('my-first-node')
let showGuesses =document.getElementById("letters-you-guessed")
let livesLeft =document.getElementById("number-of-lives")
let wins = document.getElementById("number-of-wins")

var wordBank =["yosemite","glacier","yellowstone","acadia","zion","arches"];
var guessesRemaining = [8];
var guessedLetters = [];
var numberOfWins = [0];

var word = wordBank[Math.floor(Math.random() * wordBank.length)];

function resetGame (){
    guessedLetters = [];
    guessesRemaining = [8];
};

//# of "-'s" in the word
var answerArray = word.split("")
    for (var i = 0; i < word.length; i++){
        let pNode = document.createElement('c')
        pNode.innerHTML = ' - '
        firstNode.appendChild(pNode)
    };

//Remaining Letters to be guessed
var remainingLetters = answerArray.length;

//Captures keyboard input
document.onkeyup = function(event) {
    //Guess a letter
    var userGuess = event.key;
    if(guessesRemaining > 0 && answerArray.includes(userGuess) && guessedLetters.includes(userGuess) === false){
        for (var j = 0; j < word.length; j++){
            //If they chose a correct letter
            if (word[j] === userGuess) {
                //replace the "-" with the correct letter
                firstNode.childNodes[j].innerHTML = userGuess;
                //subtract 1 from remaining letters and guesses remaining
                remainingLetters--;
            }
        }
        guessedLetters.push(userGuess)
    }
    else {
        if (guessedLetters.includes(userGuess) === false) {
            guessesRemaining--;
            guessedLetters.push(userGuess)
        }
    }
    //Show guessed letters in HTML
    let qNode = document.createElement('d')
        qNode.innerHTML = (userGuess + ",")
        showGuesses.appendChild(qNode);

    //Show guesses remaining in HTML
    let blahBlah = document.createElement('e')
        blahBlah.innerHTML =(guessesRemaining + "...")
        livesLeft.appendChild(blahBlah);

    //Win the game
    if (remainingLetters <= 0){
            confirm("You won!!! Woohoo!!") &&
            // # of Wins
            (numberOfWins++)
            let yeet = document.createElement('f')
            yeet.innerHTML = (numberOfWins + ", ")
            wins.appendChild(yeet);
            resetGame
        }
    //Lose the game (Sorry, show image, reveal answer)
    if(remainingLetters > 0 && guessesRemaining === 0){
        alert("You are a L.O.S.E.R.!")
    }
};


//  Reset
//      function resetGame (){
//          guessesRemaining = [8];
//          guessedLetters = [];
//      };

//THANKS FOR THE HELP CHAD!!!!

//Questions: document,createElement('e') what is the purpose of the letter?
//How do I reset everything without refreshing the page? - tried resetGame function
//How to get guesses remaining and wins to switch numbers, not add to them.