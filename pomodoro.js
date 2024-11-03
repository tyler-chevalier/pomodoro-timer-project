let timer;
let timeLeft;
let running = false;
let state = "";
let studyTime = 25*60
let shortBreakTime = 5*60
let longBreakTime = 15*60

function startTimer(duration) {
    timeLeft = duration;
    running = true;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!"); 
            running = false;
            updateButtonText();
        } else {
            timeLeft--; 
            displayTime();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
    updateButtonText();
}

function resetTimer(duration) {
    clearInterval(timer);
    timeLeft = duration;
    running = false;
    displayTime();
    updateButtonText();
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer-display").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateButtonText() {
    const button = document.getElementById("start/pause-button");
    button.textContent = running ? 'Pause :p' : 'Start :>';
}

function startOrPauseTimer() {
    if (running) {
        pauseTimer();
    } else {
        startTimer(timeLeft || studyTime); 
        updateButtonText();
    }
}

function study() {
    if (state !== "study") {
        resetTimer(studyTime);
        state = "study";
        document.getElementById("message").textContent = 'lock in.';
    }
    startOrPauseTimer();
}

function shortBreak() {
    if (state !== "short") {
        resetTimer(shortBreakTime);
        state = "short";
        document.getElementById("message").textContent = 'time for a short break!';
    }
    startOrPauseTimer();
}

function longBreak() {
    if (state !== "long") {
        resetTimer(longBreakTime);
        state = "long";
        document.getElementById("message").textContent = 'time for a long break!!';
    }
    startOrPauseTimer();
}
