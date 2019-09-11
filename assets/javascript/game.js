// Create varibles of the game to be called upon throughout game


    var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p","q",
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
  
        // Pick at random which letter the user must Mind
        var computerMind = alphabet[Math.floor(Math.random() * alphabet.length)];

        if ((userMind === "a" && computerMind === "a") ||
        (userMind === "b" && computerMind === "b") || 
        (userMind === "c" && computerMind === "c") ||
        (userMind === "d" && computerMind === "d") ||
        (userMind === "e" && computerMind === "e") || 
        (userMind === "f" && computerMind === "f") ||
        (userMind === "g" && computerMind === "g") ||
        (userMind === "h" && computerMind === "h") || 
        (userMind === "i" && computerMind === "i") ||
        (userMind === "j" && computerMind === "j") ||
        (userMind === "k" && computerMind === "k") || 
        (userMind === "l" && computerMind === "l") ||
        (userMind === "m" && computerMind === "m") ||
        (userMind === "n" && computerMind === "n") || 
        (userMind === "o" && computerMind === "o") ||
        (userMind === "p" && computerMind === "p") ||
        (userMind === "q" && computerMind === "q") || 
        (userMind === "r" && computerMind === "r") ||
        (userMind === "s" && computerMind === "s") ||
        (userMind === "t" && computerMind === "t") || 
        (userMind === "u" && computerMind === "u") ||
        (userMind === "v" && computerMind === "v") ||
        (userMind === "w" && computerMind === "w") || 
        (userMind === "x" && computerMind === "x") ||
        (userMind === "y" && computerMind === "y") ||
        (userMind === "z" && computerMind === "z")) {

          if ((userMind === "a" && computerMind === "a") ||
            (userMind === "b" && computerMind === "b") || 
            (userMind === "c" && computerMind === "c") ||
            (userMind === "d" && computerMind === "d") ||
            (userMind === "e" && computerMind === "e") || 
            (userMind === "f" && computerMind === "f") ||
            (userMind === "g" && computerMind === "g") ||
            (userMind === "h" && computerMind === "h") || 
            (userMind === "i" && computerMind === "i") ||
            (userMind === "j" && computerMind === "j") ||
            (userMind === "k" && computerMind === "k") || 
            (userMind === "l" && computerMind === "l") ||
            (userMind === "m" && computerMind === "m") ||
            (userMind === "n" && computerMind === "n") || 
            (userMind === "o" && computerMind === "o") ||
            (userMind === "p" && computerMind === "p") ||
            (userMind === "q" && computerMind === "q") || 
            (userMind === "r" && computerMind === "r") ||
            (userMind === "s" && computerMind === "s") ||
            (userMind === "t" && computerMind === "t") || 
            (userMind === "u" && computerMind === "u") ||
            (userMind === "v" && computerMind === "v") ||
            (userMind === "w" && computerMind === "w") || 
            (userMind === "x" && computerMind === "x") ||
            (userMind === "y" && computerMind === "y") ||
            (userMind === "z" && computerMind === "z")) {
            wins++;
          }
           else if (userMind === computerMind) {
            ties++;
          } 
          else {
            losses++;
          }


        rules.textContent = "";

        // Player interface for Wins, Losses, Ties and choices
        userMind.textContent = "Your Mind: " + userMind;
        computerMind.textContent = "The computer's Mind: " + computerMind;
        wins.textContent = "wins: " + wins;
        losses.textContent = "losses: " + losses;
        ties.textContent = "ties: " + ties;
  
    }
};