const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 9;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    const number = parseInt(document.getElementById("numbers").value, 10);

    if (number === 1) {
        randomNum1 = Math.floor(Math.random() * max) + min;
        label1.textContent = randomNum1;
        label2.textContent = '';
        label3.textContent = '';
    } else if (number === 2) {
        randomNum1 = Math.floor(Math.random() * max) + min;
        randomNum2 = Math.floor(Math.random() * max) + min;
        label1.textContent = randomNum1;
        label2.textContent = randomNum2;
        label3.textContent = '';
    } else if (number === 3) {
        randomNum1 = Math.floor(Math.random() * max) + min;
        randomNum2 = Math.floor(Math.random() * max) + min;
        randomNum3 = Math.floor(Math.random() * max) + min;
        label1.textContent = randomNum1;
        label2.textContent = randomNum2;
        label3.textContent = randomNum3;
    } else {
        label1.textContent = "Out of Limit";
        label2.textContent = '';
        label3.textContent = '';
    }
};
