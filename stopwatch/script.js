let secondsElapsed = 0;
let interval = null;
const clock = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function setTimer() {
    let seconds = String(secondsElapsed % 60).padStart(2, '0');
    let minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    clock.innerText = `${minutes}:${seconds}`;
}

function timer() {
    secondsElapsed++;
    setTimer();
}

function startWatch() {
    if (interval) {
        clearInterval(interval);
        setTimer();
    }
    interval = setInterval(timer, 1000);
}

function stopWatch() {
    clearInterval(interval);
    interval = null;
}

function resetWatch() {
    stopWatch();
    secondsElapsed = 0;
    setTimer();
}

startBtn.addEventListener('click', startWatch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetWatch);
