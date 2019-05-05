//Variables:
let firstNode = document.getElementById('my-first-node')
let showGuesses =document.getElementById("letters-you-guessed")
let livesLeft =document.getElementById("number-of-lives")
let wins = document.getElementById("number-of-wins")

var wordBank =["yosemite","glacier","yellowstone","acadia","zion","arches"];
var guessesRemaining = 8;
var guessedLetters = [];
var numberOfWins = [0];

//Reset Button
var resetButton = document.createElement('button');
    resetButton.id = 'resetBtn';
    resetButton.innerHTML = "WHY IS THE FUNCTIONAL BUTTON OVER HERE?"
    document.body.appendChild(resetButton);
    resetButton.className = "#button"; //This doesn't seem to be working. WTF?

resetButton.onclick = function resetGame (){
    console.log("Game reset test! Yeet!")
}

//Random word
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//# of "-'s" in the word
var answerArray = word.split("")
    for (var i = 0; i < word.length; i++){
        let answerArrayNode = document.createElement('p')
        answerArrayNode.innerHTML = ' - '
        firstNode.appendChild(answerArrayNode)
    };

//Remaining Letters to be guessed
var remainingLetters = answerArray.length;

//Captures keyboard input
function gamePlay(){
    document.onkeyup = function(event) {
        //Guess a letter
        var userGuess = event.key.toLowerCase();
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
        }
        else {
            if (guessedLetters.includes(userGuess) === false) {
            guessesRemaining--;
            console.log("lose guess test");
            }
        }
        guessedLetters.push(userGuess)
        //Show guessed letters in HTML
        let showGuessesNode = document.createElement('p')
            showGuessesNode.innerHTML = (userGuess + ",")
            showGuesses.appendChild(showGuessesNode);
    

        //Win the game
        if (remainingLetters <= 0){
            // # of Wins
            (numberOfWins++)
            wins.textContent = numberOfWins;
            confirm("You won!!! Woohoo!!");
            console.log("win win win line 60")
        }
        //Lose the game (Sorry, show image, reveal answer)
        else if(remainingLetters > 0 && guessesRemaining === 0){
        alert("You are a L.O.S.E.R.!")
        }
        //Show guesses remaining in HTML
        livesLeft.innerHTML = `${guessesRemaining}...`

        resetButton.onclick = function resetGame (){
        console.log("Game reset! Yeet!")
        }
    }
}

gamePlay();

//THANKS FOR THE HELP CHAD!!!!