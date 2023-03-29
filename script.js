var items = ['rock', 'paper', 'scissors'];

var playGameBtn = document.querySelector('#play-game');

var score = {wins: 0, losses: 0, ties: 0}

function random_item(items) {
	return items[Math.floor(Math.random() * items.length)];
}

var compChoice = random_item(items);

console.log(compChoice);

function playGame() {
	var userChoice = prompt('Choose rock, paper, or scissors');
	alert(userChoice + ' is your selection.');
	var userChoiceConfirmation = confirm(
		'You selected ' + userChoice + ', is that correct?'
	);
	if (userChoiceConfirmation) {
		alert(userChoice + ' is your selection');
	} else {
		alert('Looks like you are undecided');
	}

	alert('Computer chose ' + compChoice);

	switch (userChoice) {
		case 'rock':
			switch (compChoice) {
				case 'paper':
					alert('Computer won!');
                    score.losses++;
					break;
				case 'scissors':
					alert('You Won!');
                    score.wins++;
					break;
				case 'rock':
					alert('Its a draw!');
                    score.ties++;
					break;
			}
			break;
		case 'paper':
			switch (compChoice) {
				case 'paper':
					alert("It's a draw!");
                    score.ties++;
					break;
				case 'scissors':
					alert('Computer won!');
                    score.losses++;
					break;
				case 'rock':
					alert('You Won!');
                    score.wins++;
					break;
			}
			break;
		case 'scissors':
			switch (compChoice) {
				case 'paper':
					alert('You won!');
                    score.wins++;
					break;
				case 'scissors':
					alert("It's a draw!");
                    score.ties++;
					break;
				case 'rock':
					alert('Computer won!');
                    score.losses++;
					break;
			}
			break;
		default:
			alert(
				'Looks like you aren\'t taking this seriously. Next time choose "rock," "paper," or "scissors!"'
			);
	}

    alert("Your score is: " + score.wins + " wins, " + score.losses + " losses, and " + score.ties + " ties.")
	askToPlayAgain();
}

function askToPlayAgain() {
	var playAgain = confirm('Would you like to play again?');
	if (playAgain) {
		playGame();
	}
}

// Add event listener to play-game button
playGameBtn.addEventListener('click', playGame);
