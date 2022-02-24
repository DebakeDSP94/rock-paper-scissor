//create variables and initialize them
let round = 0;
let puterChoice = '';
let humanChoice = '';
let puterScore = 0;
let humanScore = 0;
let computer = '';
let newGame = '';
let hChoice = '';
let newg = '';


scoreUpdate()
//use random number generator to generate computer choices
function computerPlay() {
    computer = Math.floor(Math.random()*3) + 1;
    if (computer === 1) {
        computer = "rock";
    }
    else if (computer === 2) {
        computer = "paper";
    }
    else {
        computer = "scissors";
    }
    return computer;
}

//use if and else if to handle comparing R P S of user input and computer
function game(humanChoice, puterChoice) {
    if (humanChoice === puterChoice) {
    console.log('This round is a tie!');
    console.log(`Human Choice  ${humanChoice}`);
        console.log(`Computer Choice  ${puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
        }
    else if (humanChoice === "rock" && puterChoice === "paper") {
    console.log('You lose: Paper covers Rock!');
        ++puterScore;
        console.log(`Human Choice  ${humanChoice}`);
        console.log(`Computer Choice  ${puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
    }
    else if (humanChoice === "rock" && puterChoice === "scissors") {
    console.log('You win: Rock crushes Scissors!');
        ++humanScore;
        console.log(`Human Choice  ${humanChoice}`);
        console.log(`Computer Choice  ${puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
    }
    else if (humanChoice === "paper" && puterChoice === "scissors") {
    console.log('You lose: Scissors cut Paper!');
        ++puterScore;
        console.log(`Human Choice  ${humanChoice}`);
        console.log(`Computer Choice  ${puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
    }
    else if (humanChoice === "paper" && puterChoice === "rock") {
    console.log('You win: Paper covers Rock');
        ++humanScore;
        console.log(`Human Choice  ${humanChoice}`);
        console.log(`Computer Choice  ${puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
    }
    else if (humanChoice === "scissors" && puterChoice === "rock") {
    console.log('You lose: Rock crushes Scissors!');
        ++puterScore;
        console.log(`Human Choice  ${humanChoice}`);
        console.log(`Computer Choice  ${puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
    }
    else if (humanChoice === "scissors" && puterChoice === "paper") {
    console.log('You win: Scissors cut Paper');
        ++humanScore;
        console.log(`Human Choice$  {humanChoice}`);
        console.log(`Computer Choice$  {puterChoice}`);
        console.log(`Human Score  ${humanScore},   ComputerScore  ${puterScore}`);
        scoreUpdate(humanScore, puterScore);
        
    }
    else {
        console.log('invalid input');
        scoreUpdate(humanScore, puterScore);
    }

    
}
  
function playRound() {
    computerPlay();
    puterChoice = computer;
    hChoice = prompt('Choose Rock, Paper or Scissors');
    humanChoice = hChoice.toLowerCase();
    game(humanChoice, puterChoice);

}

function restartGame() {
    newg = prompt("restart Y or N");
    newGame = newg.toLowerCase();
    if (newGame == ('y')) {
        humanScore = 0;
        puterScore = 0;
        console.log('lets play again');
        scoreUpdate(humanScore, puterScore);
        
    }
    else {
        console.log('thanks for playing!');
    }
}


function scoreUpdate(humanScore, puterScore) {
    if (humanScore === 5) {
    console.log("You have won the game!");
    restartGame();
    }
    else if (puterScore === 5) {
    console.log("Sorry, You have lost the game.");
    restartGame();
    }
    else {
        playRound();
    }
}



