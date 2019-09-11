// Create varibles of the game to be called upon throughout game


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("Hit Javascript");


var wins = 0;
var losses = 0;
var alreadyUsed = [];

var wins = document.getElementsByClassName("wins");
var losses = document.getElementsByClassName("losses");
// var guesses = document.getElementsByClassName("ties");
var computerMind = document.getElementsByClassName("computerMind");
var userMind = document.getElementsByClassName("userMind");

var rules = document.getElementsByClassName("rules");

var guesses = 10;

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userMind = event.key;
    console.log("usermind ", userMind);
    alreadyUsed.push(userMind)

    // Pick at random which letter the user must Mind
    var computerMind = alphabet[Math.floor(Math.random() * alphabet.length)];

    
    if (userMind === computerMind) {
        wins++;
        guesses--;
    } else {
        losses++;
        guesses--;
    }
     if (userMind.includes (alreadyUsed)){
         alert("Try again cleo" )
     }
        rules.textContent = "";

        // Player interface for Wins, Losses, Ties and choices
        userMind.textContent = "Your Mind: " + userMind;
        computerMind.textContent = "The computer's Mind: " + computerMind;
        wins.textContent = "wins: " + wins;
        losses.textContent = "losses: " + losses;
        guesses.textContent = "ties: " + guesses;

    
};











// if ((userMind === "a" && computerMind === "a") ||
    //     (userMind === "b" && computerMind === "b") ||
    //     (userMind === "c" && computerMind === "c") ||
    //     (userMind === "d" && computerMind === "d") ||
    //     (userMind === "e" && computerMind === "e") ||
    //     (userMind === "f" && computerMind === "f") ||
    //     (userMind === "g" && computerMind === "g") ||
    //     (userMind === "h" && computerMind === "h") ||
    //     (userMind === "i" && computerMind === "i") ||
    //     (userMind === "j" && computerMind === "j") ||
    //     (userMind === "k" && computerMind === "k") ||
    //     (userMind === "l" && computerMind === "l") ||
    //     (userMind === "m" && computerMind === "m") ||
    //     (userMind === "n" && computerMind === "n") ||
    //     (userMind === "o" && computerMind === "o") ||
    //     (userMind === "p" && computerMind === "p") ||
    //     (userMind === "q" && computerMind === "q") ||
    //     (userMind === "r" && computerMind === "r") ||
    //     (userMind === "s" && computerMind === "s") ||
    //     (userMind === "t" && computerMind === "t") ||
    //     (userMind === "u" && computerMind === "u") ||
    //     (userMind === "v" && computerMind === "v") ||
    //     (userMind === "w" && computerMind === "w") ||
    //     (userMind === "x" && computerMind === "x") ||
    //     (userMind === "y" && computerMind === "y") ||
    //     (userMind === "z" && computerMind === "z")) {

    //     if ((userMind === "a" && computerMind === "a") ||
    //         (userMind === "b" && computerMind === "b") ||
    //         (userMind === "c" && computerMind === "c") ||
    //         (userMind === "d" && computerMind === "d") ||
    //         (userMind === "e" && computerMind === "e") ||
    //         (userMind === "f" && computerMind === "f") ||
    //         (userMind === "g" && computerMind === "g") ||
    //         (userMind === "h" && computerMind === "h") ||
    //         (userMind === "i" && computerMind === "i") ||
    //         (userMind === "j" && computerMind === "j") ||
    //         (userMind === "k" && computerMind === "k") ||
    //         (userMind === "l" && computerMind === "l") ||
    //         (userMind === "m" && computerMind === "m") ||
    //         (userMind === "n" && computerMind === "n") ||
    //         (userMind === "o" && computerMind === "o") ||
    //         (userMind === "p" && computerMind === "p") ||
    //         (userMind === "q" && computerMind === "q") ||
    //         (userMind === "r" && computerMind === "r") ||
    //         (userMind === "s" && computerMind === "s") ||
    //         (userMind === "t" && computerMind === "t") ||
    //         (userMind === "u" && computerMind === "u") ||
    //         (userMind === "v" && computerMind === "v") ||
    //         (userMind === "w" && computerMind === "w") ||
    //         (userMind === "x" && computerMind === "x") ||
    //         (userMind === "y" && computerMind === "y") ||
    //         (userMind === "z" && computerMind === "z")) {
    //         wins++;
    //     }
    //     else if (userMind === computerMind) {
    //         ties++;
    //     }
    //     else {
    //         losses++;
    //     }
    // }