let dayBox = document.getElementsByClassName('day')[0];
let hrBox = document.getElementsByClassName('hr')[0];
let minBox = document.getElementsByClassName('min')[0];
let secBox = document.getElementsByClassName('sec')[0];

let endDate = new Date(2025, 0, 1);
let countdownInterval;

function countdown() {
    let todayDate = new Date();
    let timeDiff = endDate - todayDate;

    if (timeDiff <= 0) {
        clearInterval(countdownInterval);
        document.querySelector(".time").innerHTML = "<h1>Happy New Year!</h1>";
    } else {
        let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hrsLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minsLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let secsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

        dayBox.textContent = padZero(daysLeft);
        hrBox.textContent = padZero(hrsLeft);
        minBox.textContent = padZero(minsLeft);
        secBox.textContent = padZero(secsLeft);
    }
}

function padZero(num) {
    return (num < 10) ? '0' + num : num;
}

countdownInterval = setInterval(countdown, 1000);
countdown();
