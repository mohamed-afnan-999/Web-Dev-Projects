const prompt = require('prompt-sync')();

console.log('Welcome to the Marvel trivia!\n');

const q1 = `Who is the person that has taken up the mantle of Iron Man?`;
const a1 = 'tony stark';

const q2 = `Who is the actor who plays the role of Iron Man (Tony Stark) in the MCU?`;
const a2 = `robert downey jr.`;

let questions = [q1, q2];
let answers = [a1, a2];

if (answers.length !== questions.length)
    console.log('Error in the pre-defined questions and answers set!');
    
let entered_answer = '';
let correctCount = 0;

for(let i = 0; i < questions.length; i++)
{
    console.log(questions[i]);
    entered_answer = prompt('Enter answer: ').toLowerCase();
    if (entered_answer === answers[i])
    {
        console.log('Correct!\n');
        correctCount++;
    }
    else
        console.log('Wrong\n');   
}

if (questions.length === correctCount)
    console.log('\nCongratulations! You have the highest score achievable. You are a pro at this game!\n');
else if (correctCount === 0)
    console.log('\nTry again!\n');
    
    
console.log(`Final score: ${correctCount}/${questions.length}`);


correctCount.toE