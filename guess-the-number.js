const prompt = require('prompt-sync')();
const alert = require('prompt-sync')();
const mini = 1;
const maxi = 100;
const answer = Math.floor(Math.random() * (maxi - mini + 1) + mini);


let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = prompt(`Guess a number between ${mini} - ${maxi}  `)
    guess = Number.parseInt(guess);
    if (isNaN(guess)) {
        alert("Please enter a valid number")

    } else if (guess < mini || guess > maxi) {
        alert("please enter the valid number");
    } else {
        attempts++;
        if (guess < answer) {
            alert("too low! try again");

        } else if (guess > answer) {
            alert("too high try again ")
        } else {

            alert(`correct!the answer is ${answer}  it took u ${attempts}    attempts `);
            running = false;

        }
    }
}
