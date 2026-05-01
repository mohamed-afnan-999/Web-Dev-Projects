const prompt = require('prompt-sync')();

let target = Math.random();
// random number between 4 and 9
let a = 0, b = 100;

target = Math.round(target * (b-a)) + a;

let guesses = 0;
let guess = Number(prompt('Guess the number (0-100): '));

while (guess !== target)
{
    if (guess > target)
        console.log('Your number is too high');
    else if (guess < target)
        console.log('Your number is too low');
    
    guess = Number(prompt('Guess the number (0-100): '));
}
console.log('You have guessed correctly!');