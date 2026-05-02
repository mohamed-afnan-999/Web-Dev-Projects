function getComputerChoice() {
    let choice = Math.round(Math.random() * 2);
    let options = ['rock', 'paper', 'scissor'];
    return options[choice];
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("Enter your choice: (1 - rock, 2 - paper, 3 - scissor) "));
    const options = ['rock', 'paper', 'scissor'];
    return options[humanChoice - 1];
}

let botScore = 0, humanScore = 0;

function playARound(botMove = getComputerChoice(), humanMove = getHumanChoice()) {
    const winConditions = {
        'rock': 'paper',
        'paper': 'scissor',
        'scissor': 'rock'
    };

    console.log('Bot: ' + botMove);
    console.log('You: ' + humanMove);

    if (winConditions[botMove] === humanMove) {
        console.log('Win!');
        humanScore++;
    }
    else if (botMove === humanMove) {
        console.log("Draw!");
    }
    else {
        console.log('Lose!');
        botScore++;
    }
}

function playGame() {
    let totalRounds = 5;

    for (let i = 1; i <= totalRounds; i++) {
        playARound();
    }

    if (humanScore === botScore)
        console.log('\nTie');
    else if (humanScore >= botScore)
        console.log('\nWinner');
    else
        console.log('\nLoser');
}

playGame()