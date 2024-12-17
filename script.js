// script.js
let countdownElement = document.getElementById("countdown");

// Mock countdown timer for demo (you can replace this with real-time data later)
let countdownTime = 10; // Start with 10 minutes

// Function to update the countdown
function updateCountdown() {
    if (countdownTime > 0) {
        countdownElement.textContent = `${countdownTime} minutes`;
        countdownTime--;
    } else {
        countdownElement.textContent = "Arriving now!";
    }
}

// Update countdown every minute (60,000 ms)
setInterval(updateCountdown, 60000);

// Initial update
updateCountdown();
