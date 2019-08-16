var player1;
var randArr = ["rock", "paper", "scissors"];
var rockButton = document.getElementById("rockBtn");
var paperButton = document.getElementById("paperBtn");
var scissorsButton = document.getElementById("scissorsBtn");
var buttonOne = document.getElementById("btn1");
var resultText = document.getElementById("resultText");

// var player1 = document.getElementById("userChoice");
// buttonOne.addEventListener('click', playGame);
rockButton.addEventListener('click', rockBtn);
scissorsButton.addEventListener('click', scissorsBtn);
paperButton.addEventListener('click', paperBtn);
var playerWins = 0;
var compuWins = 0;
var numRounds = 0;
var numTies = 0;

function rockBtn() {
  player1 = "rock";
  playGame();
}

function paperBtn() {
  player1 = "paper";
  playGame();
}

function scissorsBtn() {
  player1 = "scissors";
  playGame();
}

function getHand() {
	return randArr[parseInt(Math.random()*10)%3];
}

function playGame() {
	 let compuChoice = getHand();
    resultText.innerHTML += "You choose " + player1 + "<br>";
	  resultText.innerHTML += "Computer chooses " + compuChoice + "<br>";
	if (player1 == "rock" && compuChoice == "scissors" || player1 == "paper" && compuChoice == "rock" || player1 === "scissors" && compuChoice === "paper") {
		resultText.innerHTML += "YOU WIN!!";
		playerWins ++;
		numRounds ++;
	} else if (compuChoice == "rock" && player1 == "scissors" || compuChoice == "paper" && player1 == "rock" || compuChoice == "scissors" && player1 == "paper") {
		resultText.innerHTML += "YOU LOST!!";
		compuWins++;
		numRounds ++;
	} else if (player1 == compuChoice) {
		resultText.innerHTML += "ITS A TIE!!";
		numTies ++;
	}
	resultText.innerHTML += "<br>" + "Your wins: " + playerWins;
	resultText.innerHTML += "  Computer wins: "+ compuWins + " " + "<br>" + "<hr>";

	if (numRounds === 3) {
		if (playerWins > compuWins) {
			resultText.innerHTML += "YOU WIN THE GAME!!!";
		} else if (compuWins > playerWins) {
			resultText.innerHTML += "YOU LOST THE GAME!!!";
		}
	 	else if (playerWins === compuWins) {
			resultText.innerHTML += "ITS A TIE!!!!";
		}
	}
}

