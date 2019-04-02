// you can write js here
console.log('exo-3');
var userInput = prompt('Quelle est ton choise?').toLowerCase();
var listInputs = ['rock','paper','scissors'];
var myChoise = getUserChoice(userInput);
var pcChoise = getComputerChoice();

function getUserChoice(userInput){

	switch(userInput){
		case 'rock':
			return userInput;
			break;
		case 'paper':
			return userInput;
			break;
		case 'scissors':
			return userInput;
			break;
		default :
			userInput = 'Choisisez entre "rock","paper" et "scissors".';
			return userInput;
			break;
	}

}

function getComputerChoice(){
	var pcChoise = listInputs[Math.floor(Math.random() * 2)];
	return pcChoise;
}

function determineWinner(myChoise, pcChoise){
	
	if (myChoise === pcChoise) {
		return 'Tied';
	} else if (myChoise === 'paper' && pcChoise === 'rock') {
		return 'Won';
	} else if (myChoise === 'rock' && pcChoise === 'scissors') {
		return 'Won';
	} else if (myChoise === 'scissors' && pcChoise === 'paper') {
		return 'Won';
	} else {
		return 'Lost';
	}
}


function playGame(){
	console.log(determineWinner(myChoise, pcChoise));
}

console.log(myChoise);
console.log(pcChoise);
playGame();