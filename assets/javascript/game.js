// Create varibles of the game to be called upon throughout game
    var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var ties = 0;

    var wins = document.getElementsByClassName("wins");
    var losses = document.getElementsByClassName("losses");
    var ties = document.getElementsByClassName("ties");
    var computerMind = document.getElementsByClassName("computermind");
    var userMind = document.getElementsByClassName("usermind");

    var rules = document.getElementsByClassName("rules");
    
   
    var wins = document.getElementsByClassName("wins");
    var losses = document.getElementsByClassName("losses");
    var ties = document.getElementsByClassName("ties");

    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userMind = event.key;
  
        // Pick at random which letter the user must guess
        var computerMind = alphabet[Math.floor(Math.random() * alphabet.length)];


        rules.textContent = "";

        // Player interface for Wins, Losses, Ties and choices
        userMind.textContent = "Your Mind: " + userMind;
        computerMind.textContent = "The computer's Mind: " + computerMind;
        wins.textContent = "wins: " + wins;
        losses.textContent = "losses: " + losses;
        ties.textContent = "ties: " + ties;
  
    }
};