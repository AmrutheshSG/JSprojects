const prompt = require('prompt-sync')();

const alert = require('prompt-sync')();
let arr = ['snake', 'water', 'gun']
alert("the game is going to start")
let round = 0
let userguess = 0
let computerguess = 0
while (round < 3) {
    let userInput = prompt("Enter your choice (snake, water, gun): ").trim().toLowerCase();
    if (!arr.includes(userInput)) {
        alert("Invalid choice. Please choose from 'snake', 'water', or 'gun'.");
        continue;
    }
    let cominput = arr[Math.floor(Math.random() * arr.length)];

    if ((userInput == 'snake' && cominput == 'gun') || (userInput == 'water' && cominput == 'snake') || (userInput == 'gun' && cominput == 'water')) {
        computerguess++;
        alert(`Computer chose ${cominput}. You lost this round.`);

    } else if (userInput == cominput) {
        alert(`both choose ${userInput}.it's a draw`)
        round++;
        continue;
    } else {
        userguess++;
        alert(`computer choose ${cominput}.you won this round`)
    }
    round++
}
if (userguess > computerguess) {
    alert("Hurray!.... you won the game")
} else if (userguess < computerguess) {
    alert("awwwwww.you lost the game")
} else {
    alert("its a draw!")
}
