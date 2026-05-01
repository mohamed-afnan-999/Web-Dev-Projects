const buttons = document.getElementsByClassName('colour-btns');
const redBtn = document.getElementById('red-btn');
const blueBtn = document.getElementById('blue-btn');
const greenBtn = document.getElementById('green-btn');
const randomBtn = document.getElementById('random-btn');

const body = document.getElementsByTagName('body');

redBtn.addEventListener('click', () => {
    body[0].style.backgroundColor = 'red';
})

blueBtn.addEventListener('click', () => {
    body[0].style.backgroundColor = 'blue';
})

greenBtn.addEventListener('click', () => {
    body[0].style.backgroundColor = 'green';
})

randomBtn.addEventListener('click', () => {
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    body[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})