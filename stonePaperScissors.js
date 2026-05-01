const prompt = require('prompt-sync')();

let wins = 0, losses = 0, ties = 0;
const choices = ['stone', 'paper', 'scissor'];

let win_conditions = {
    'stone': 'scissor',
    'paper': 'stone',
    'scissor': 'paper'
};

let choice = '', idx = -1, botChoice = '';

let plays = 10;
while (plays > 0)
{
    while(!choice)
    {
        choice = prompt('You: ').toLowerCase();
        if (!choices.includes(choice))
        {
            console.log('Please enter a valid choice');
        }
    }
    idx = Math.floor(Math.random() * choices.length); // 0 - 2
    botChoice = choices[idx];

    console.log(`Computer: ${botChoice}`);
    
    if (choice === botChoice)
    {
        console.log('Tie!');
        ties++;
    }
    else
    {
        if (win_conditions[choice] !== botChoice)
        {
            losses++;
            console.log('lose');
        }
        else
        {
            wins++;
            console.log('win');
        }
    }
    choice = '';
    plays--;
}

if (wins > losses)
    console.log('\nCongratulations! You have won against the computer');
else
    console.log('\nYOU HAVE LOST!!!');

console.log('--- Scoreborad ---');
console.log(`Wins = ${wins}/10`);
console.log(`Losses = ${losses}/10`);
console.log(`Ties = ${ties}/10`);




    