// Initalize JS variables
var computerSelection = '';
var playerSelection = '';
var gameResult = '';
var playWin = 0;
var compWin = 0;
var win = false;

// Initialize HTML variables
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const displayDiv = document.createElement('div');
const htmlElement = document.querySelector('html');
const text = document.createElement('h1');
const textTwo = document.createElement('h1');


// Styling rps Buttons
rockBtn.textContent = 'Rock!'
paperBtn.textContent = 'Paper!'
scissorsBtn.textContent = 'Scissors!'
text.setAttribute('style', 'white-space: pre;');


// Functions for RPS
function computerPlay() {
    var value = Math.floor(Math.random()*3);
    if (value == 0) {
        return "rock";
    }
    else if (value == 1) {
        return "paper";
    }
    else {
        return "scissors"; 
    }
} // Returns rock, paper, or scissors randomly

function playRound (compSelection, playerSelection) {
    if (compSelection == "rock") {
        if (playerSelection == "rock") {
            return "Tied!";
        }
        else if(playerSelection=="paper") {
            playWin += 1;
            return "Win!";
        }
        else {
            compWin += 1;
            return "Lost!";
        }

    }
    else if (compSelection=="paper") {
        if (playerSelection == "paper") {
            return "Tied!";
        }
        else if(playerSelection=="scissors") {
            playWin += 1;
            return "Win!";
        }
        else {
            compWin += 1;
            return "Lost!";
        }

    }
    else if (compSelection=="scissors") {
        if (playerSelection == "scissors") {
            return "Tied!";
        }
        else if(playerSelection=="rock") {
            playWin += 1;
            return "Win!";
        }
        else {
            compWin += 1;
            return "Lost!";
        }

    }
} // Plays Round. Returns Tied!, Win! or Lost!

function game (roundResult) {

    if (roundResult =='Tied!') {
        text.textContent = `You played ${playerSelection}. Computer played ${computerSelection}. \r\n
        You Tied! \r\n
        You have won ${playWin} and Computer has won ${compWin}`
    }

    else if (roundResult=='Lost!') {
        text.textContent = `You played ${playerSelection}. Computer played ${computerSelection}. \n
        You Lost! \n
        You have won ${playWin} and Computer has won ${compWin}`

    }

    else if (roundResult=='Win!') {
        text.textContent = ` You played ${playerSelection}. Computer played ${computerSelection}. \n
        You Win! \n
        You have won ${playWin} and Computer has won ${compWin}`

    }
    else {
        //unknown error recieved
    }

} // Populates text based on Win!, Lost!, or Tied! function input from playRound function


// Button Click Event Listeners
rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = computerPlay();
    gameResult = playRound(computerSelection, playerSelection);
    game(gameResult);
    winCheck();
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    gameResult = playRound(computerSelection, playerSelection);
    game(gameResult);
    winCheck();
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    gameResult = playRound(computerSelection, playerSelection);
    game(gameResult);
    winCheck();
});



// Appending Buttons and Div to HTML File
displayDiv.appendChild(rockBtn);
displayDiv.appendChild(paperBtn);
displayDiv.appendChild(scissorsBtn);
displayDiv.appendChild(text);
htmlElement.appendChild(displayDiv);


function winCheck() {
    if (compWin == 5 || playWin == 5) {
        if (compWin == 5) {
            textTwo.textContent = 'Oh No! The computer Beat you to 5 Wins!'
            //computer wins, display text
        }
        if (playWin == 5) {
            textTwo.textContent = 'congratulations, you beat the computer to 5 Wins!'
            //player wins, display text
        }
        displayDiv.appendChild(textTwo);
    }

}

