function round(playerChoice,compChoice){
    playerChoice = convertToNum(playerChoice);
    if (playerChoice == 0 && compChoice == 2){
        console.log("You win because " + convertToWord(playerChoice) + 
                            " beats " + convertToWord(compChoice) + ".");
        return 1;
    }
    else if (playerChoice==compChoice){
        console.log("It's a tie.");
        return 0;
    }
    else if (playerChoice>compChoice){
        console.log("You win because " + convertToWord(playerChoice) + 
                            " beats " + convertToWord(compChoice) + ".");
        return 1;
    }
    else{
        console.log("You lose because " + convertToWord(compChoice) + 
        " beats " + convertToWord(playerChoice) + ".");
        return 0;
    }
}

function convertToNum(choice){
    switch(choice){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissor":
            return 2;
        default:
            console.log("Error, choice could not be converted");
    }
}

function convertToWord(choice){
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            console.log("Error, choice could not be converted");
    }
}

function getCompChoice(){
    return Math.floor(Math.random()*3);
}

function game(){
    let gameCounter = 0;
    while (gameCounter < 5){
        gameCounter++;
        let compChoice = getCompChoice();
        let playerChoice = window.prompt("Type rock, paper or scissor to choose your option.")
        playerChoice = playerChoice.toLowerCase();
        console.log(playerChoice);
    }
}