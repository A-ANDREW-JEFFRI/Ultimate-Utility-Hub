const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const myButton = document.getElementById("myButton");
let attempts = 0;

myButton.onclick = function() {
    let result = document.getElementById("result");
    let guess = parseInt(document.getElementById("input").value, 10);

    if (isNaN(guess)) {
        result.textContent = "Please enter a valid number";
    } else if (guess < minNum || guess > maxNum) {
        result.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
    } else {
        attempts++;
        if (guess < answer) {
            result.textContent = "TOO LOW! TRY AGAIN!";
        } else if (guess > answer) {
            result.textContent = "TOO HIGH! TRY AGAIN!";
        } else {
            result.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
        }
    }
};
