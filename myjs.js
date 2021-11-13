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
}

function playRound (compSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (compSelection == "rock") {
        if (playerSelection == "rock") {
            return "Tied!";
        }
        else if(playerSelection=="paper") {
            return "Win!";
        }
        else {
            return "Lost!";
        }

    }
    else if (compSelection=="paper") {
        if (playerSelection == "paper") {
            return "Tied!";
        }
        else if(playerSelection=="scissors") {
            return "Win!";
        }
        else {
            return "Lost!";
        }

    }
    else if (compSelection=="scissors") {
        if (playerSelection == "scissors") {
            return "Tied!";
        }
        else if(playerSelection=="rock") {
            return "Win!";
        }
        else {
            return "Lost!";
        }

    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(computerSelection,playerSelection));
function game() {
    var playWin = 0;
    var compWin = 0;
    for(let i =0; i<5; i++) {
        compS = computerPlay();
        playS = prompt("enter rock, paper, or scissors:");
        let result = playRound(compS,playS);
        if (result =="Win!") {
            playWin = playWin + 1;
        }
        else if (result== "Lost!") {
            compWin = compWin+1;
        }
        console.log("you "+result+" you played "+playS+". And computer played "+compS+".")
        console.log("You have won "+ playWin+" and computee has won "+compWin+".")

    }
}
game();