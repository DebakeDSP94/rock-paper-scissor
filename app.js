const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const compChoice = document.getElementById('computer-choice');
const hScoreEl = document.getElementById('human-score');
const cScoreEl = document.getElementById('computer-score');
const rndCountEl = document.getElementById('round-counter');
const newGameBtn = document.getElementById('new-game');
const roundResult = document.getElementById('outcome');
const screens = document.querySelectorAll('.screen');
const start_btn = document.getElementById('start');
const gameRslt = document.getElementById('game-result');
const replay_btn = document.getElementById('replay');

let round = 0;
let puterChoice = '';
let humanChoice = '';
let puterScore = 0;
let humanScore = 0;
let computer = '';

start_btn.addEventListener('click', () => {
	screens[0].classList.add('up');
	startNewGame();
});

replay_btn.addEventListener('click', () => {
	screens[1].classList.remove('up');
	startNewGame();
});

newGameBtn.addEventListener('click', startNewGame);

function startNewGame() {
	round = 0;
	humanScore = 0;
	puterScore = 0;
	round = 0;
	setEventListeners();
	roundResult.innerText = `Pick rock, paper or scissors!`;
	scoreUpdate();
	newGameBtn.innerText = `New Game?`;
}

function setEventListeners() {
	rock.addEventListener('click', rockChoice);
	paper.addEventListener('click', paperChoice);
	scissors.addEventListener('click', scissorsChoice);
}

function rockChoice() {
	humanChoice = 'rock';
	playGameTurn(humanChoice);
}

function paperChoice() {
	humanChoice = 'paper';
	playGameTurn(humanChoice);
}

function scissorsChoice() {
	humanChoice = 'scissors';
	playGameTurn(humanChoice);
}

function playGameTurn(humanChoice) {
	puterChoice = computerPlay();
	game(humanChoice, puterChoice);
	compChoice.innerHTML = `
	<p>Computer Choice</p>
	<img src="./images/${puterChoice}.jpg" alt="question" />
	<p>${puterChoice}</p>`;
}

function computerPlay() {
	computer = Math.floor(Math.random() * 3) + 1;
	if (computer === 1) {
		computer = 'rock';
	} else if (computer === 2) {
		computer = 'paper';
	} else {
		computer = 'scissors';
	}
	return computer;
}

function game(humanChoice, puterChoice) {
	round++;

	if (humanChoice === puterChoice) {
		roundResult.innerText = `This round is a tie! You both chose ${humanChoice}!`;
		scoreUpdate(humanScore, puterScore);
	} else if (humanChoice === 'rock' && puterChoice === 'paper') {
		roundResult.innerText = 'You lose this round: Paper covers Rock!';
		puterScore++;
		scoreUpdate(humanScore, puterScore);
	} else if (humanChoice === 'rock' && puterChoice === 'scissors') {
		roundResult.innerText = 'You win this round: Rock crushes Scissors!';
		humanScore++;
		scoreUpdate(humanScore, puterScore);
	} else if (humanChoice === 'paper' && puterChoice === 'scissors') {
		roundResult.innerText = 'You lose this round: Scissors cut Paper!';
		puterScore++;
		scoreUpdate(humanScore, puterScore);
	} else if (humanChoice === 'paper' && puterChoice === 'rock') {
		roundResult.innerText = 'You win this round: Paper covers Rock!';
		humanScore++;
		scoreUpdate(humanScore, puterScore);
	} else if (humanChoice === 'scissors' && puterChoice === 'rock') {
		roundResult.innerText = 'You lose this round: Rock crushes Scissors!';
		puterScore++;
		scoreUpdate(humanScore, puterScore);
	} else if (humanChoice === 'scissors' && puterChoice === 'paper') {
		roundResult.innerText = 'You win this round: Scissors cut Paper!';
		humanScore++;
		scoreUpdate(humanScore, puterScore);
	} else {
		return;
	}
}

function scoreUpdate() {
	rndCountEl.innerText = `Round: ${round}`;
	hScoreEl.innerText = `Human Score: ${humanScore}`;
	cScoreEl.innerText = `Computer Score: ${puterScore}`;
	checkForWin();
}

function checkForWin() {
	if (puterScore === 5) {
		computerWon();
		return;
	} else if (humanScore === 5) {
		humanWon();
		return;
	} else {
		return;
	}
}

function computerWon() {
	screens[1].classList.add('up');
	gameRslt.innerText = `Game result: The computer won ${puterScore} to ${humanScore} :-(`;
}

function humanWon() {
	screens[1].classList.add('up');
	gameRslt.innerText = `Game result: You won ${humanScore} to ${puterScore} :-)`;
}
