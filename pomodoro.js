let timer;
let timeLeft;
let running = false;

function startTimer(duration) {
    timeLeft = duration;
    running = true;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            alert("Time's up!"); // Notify the user
            running = false; // Reset running state
            updateButtonText(); // Update button text after timer ends
        } else {
            timeLeft--; // Decrement time by 1 second
            displayTime(); // Update the display
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer); // Pause the timer
    running = false; // Update the running state
    updateButtonText(); // Update button text to indicate paused state
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; // Reset to 25 minutes
    running = false; // Reset running state
    displayTime();
    updateButtonText(); // Update button text after reset
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

function startOrPauseTimer(duration) {
    if (running) {
        pauseTimer(); // If running, pause the timer
    } else {
        // If not running, start the timer with current timeLeft or from the specified duration
        if (timeLeft === undefined) { // If timeLeft is undefined, set to duration
            startTimer(duration);
        } else {
            startTimer(timeLeft); // Resume from the current time left
        }
        updateButtonText(); // Update button text to reflect running state
    }
}

function pomodoro() {
    startOrPauseTimer(25 * 60); // Start Pomodoro timer
    document.getElementById("message").textContent = 'lock in.'
}

function shortBreak() {
    startOrPauseTimer(5 * 60); // Start short break timer
    document.getElementById("message").textContent = 'time for a short break!'

}

function longBreak() {
    startOrPauseTimer(15 * 60); // Start long break timer
    document.getElementById("message").textContent = 'time for a long break!!'

}
