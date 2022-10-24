//initialization
var choices = ["R", "P", "S"];
var stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    games: 0
};
var playerChoice = "R";
var computerChoice = "R";
var playAgain = true;
// program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

//insert random generator and define arrays for both positive and negative responses
// continue the game until player says No
while (playAgain === true) {
    // ask player’s choice
    playerChoice = prompt("Lets play a game... Input your choice (R-Rock, P-Paper, S-Scissors)");

    // generate random choice
    computerChoice = getRandomItem(choices);
    // diplay computer choice
    alert("You chose: " + playerChoice + ". I chose: " + computerChoice + ".")
    // Determine if player wins or loses, or ties
    if (playerChoice === computerChoice) {
        stats.ties++;
        alert("Tie game, try again!");
    } else if (playerChoice === "R") {
        if (computerChoice === "S") {
            stats.wins++;
            alert("Rock beats scissors, you win!"); // insert code to provide from a list of multple quips
        } else {//computer = "P"
            stats.losses++;
            alert("Paper beats rock, you lose!");
        }
    }  else if (playerChoice === "P") {
        if (computerChoice === "R") {
            stats.wins++;
            alert("Paper beats rock, you win!");
        } else {//computer = "S"
            stats.losses++;
            alert("Scissors beats paper, you lose!");
        }
    }  else if (playerChoice === "S") {
        if (computerChoice === "P") {
            stats.wins++;
            alert("Scissors beats paper, you win!");
        } else {//computer = "R"
            stats.losses++;
            alert("Rock beats scissors, you lose!");
        }
    }
    stats.games++;
    // Calculate and display statistics and ask if the player wants to play again
    playAgain = confirm("We have played " + stats.games + " games and your win/loss ratio is: " + ((stats.wins / (stats.losses + stats.wins)) * 100).toFixed(2) + "%. Shall we play again?");
}