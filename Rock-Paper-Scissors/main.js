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

function playARound(humanMove) {
    botMove = getComputerChoice();

    const winConditions = {
        'rock': 'paper',
        'paper': 'scissor',
        'scissor': 'rock'
    };

    resultsDiv.innerHTML += `Bot: ${botMove} <br>`;
    resultsDiv.innerHTML += `You: ${humanMove} <br>`;
    console.log('Bot: ' + botMove);
    console.log('You: ' + humanMove);

    if (winConditions[botMove] === humanMove) {
        resultsDiv.innerHTML += 'Win!<br><br>';
        console.log('Win!');
        humanScore++;
    }
    else if (botMove === humanMove) {
        resultsDiv.innerHTML += 'Draw!<br><br>';
        console.log("Draw!");
    }
    else {
        resultsDiv.innerHTML += 'Lose!<br><br>';
        console.log('Lose!');
        botScore++;
    }
}

// function playGame() {
//     let totalRounds = 5;

//     for (let i = 1; i <= totalRounds; i++) {
//         playARound();
//     }

//     if (humanScore === botScore)
//         console.log('\nTie');
//     else if (humanScore >= botScore)
//         console.log('\nWinner');
//     else
//         console.log('\nLoser');
// }

// playGame()

let rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
let paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
let scissorBtn = document.createElement('button');
scissorBtn.textContent = 'Scissor';

const body = document.querySelector('body');
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);

rockBtn.addEventListener('click', () => {
    playARound('rock');

    botScoreDiv.textContent = `Computer - ${botScore}`;
    humanScoreDiv.textContent = `You - ${humanScore}`;

    if (humanScore === 5) {
        alert("Congratulations!! You have won!");
        //reset the page contents
        botScore = 0;
        humanScore = 0;
        botScoreDiv.textContent = `Computer - 0`;
        humanScoreDiv.textContent = 'You - 0';
        resultsDiv.innerHTML = 'Status: <br>';
    }
    if (botScore === 5) {
        alert("You have lost!");
        //reset the page contents
        botScore = 0;
        humanScore = 0;
        botScoreDiv.textContent = `Computer - 0`;
        humanScoreDiv.textContent = 'You - 0';
        resultsDiv.innerHTML = 'Status: <br>';
    }

});

paperBtn.addEventListener('click', () => {
    playARound('paper');

    botScoreDiv.textContent = `Computer - ${botScore}`;
    humanScoreDiv.textContent = `You - ${humanScore}`;

    if (humanScore === 5) {
        alert("Congratulations!! You have won!");
        //reset the page contents and the scores
        botScore = 0;
        humanScore = 0;
        botScoreDiv.textContent = `Computer - 0`;
        humanScoreDiv.textContent = 'You - 0';
        resultsDiv.innerHTML = 'Status: <br>';
    }
    if (botScore === 5) {
        alert("You have lost!");
        //reset the page contents and the scores
        botScore = 0;
        humanScore = 0;
        botScoreDiv.textContent = `Computer - 0`;
        humanScoreDiv.textContent = 'You - 0';
        resultsDiv.innerHTML = 'Status: <br>';
    }
});

scissorBtn.addEventListener('click', () => {
    playARound('scissor');
    
    botScoreDiv.textContent = `Computer - ${botScore}`;
    humanScoreDiv.textContent = `You - ${humanScore}`;

    if (humanScore === 5) {
        alert("Congratulations!! You have won!");
        //reset the page contents
        botScore = 0;
        humanScore = 0;
        botScoreDiv.textContent = `Computer - 0`;
        humanScoreDiv.textContent = 'You - 0';
        resultsDiv.innerHTML = 'Status: <br>';
    }
    if (botScore === 5) {
        alert("You have lost!");
        //reset the page contents
        botScore = 0;
        humanScore = 0;
        botScoreDiv.textContent = `Computer - 0`;
        humanScoreDiv.textContent = 'You - 0';
        resultsDiv.innerHTML = 'Status: <br>';
    }
});

let resultsDiv = document.createElement('div');

resultsDiv.innerHTML = 'Status: <br><br>';
resultsDiv.style.maxWidth = '50%';

let scoreDiv = document.createElement('div');
scoreDiv.style.display = 'flex';
scoreDiv.textContent = 'scores: ';
scoreDiv.style.maxWidth = '50%';

let botScoreDiv = document.createElement('div');
botScoreDiv.textContent = `Computer - ${botScore}`;
let humanScoreDiv = document.createElement('div');
humanScoreDiv.textContent = `You - ${humanScore}`;

scoreDiv.appendChild(botScoreDiv);
scoreDiv.appendChild(humanScoreDiv);

scoreDiv.style.display = 'flex';
scoreDiv.style.flexDirection = 'column';
scoreDiv.style.gap = '3rem';

let container = document.createElement('div');
container.appendChild(resultsDiv);
container.appendChild(scoreDiv);
container.style.gap = '20rem';

body.appendChild(container);
container.style.display = 'flex';
