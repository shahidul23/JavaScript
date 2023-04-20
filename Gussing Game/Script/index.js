//Guessing game
//guessing a number from 1 to 5
//Generate a random number between  1 to 5
//if the guessing number matching random number ; then show won else lose
//Run the game of 5 times
// show the number of won and loss 

var numOfWon = 0;
var numOfLost = 0;

for (var i = 0; i < 5; i++) {
    var guessNumber = parseInt(prompt("Enter a number :"));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber === randomNumber) {
        console.log("You have Won");
        numOfWon++;
    } else {
        console.log("You have lost. Random number was " + randomNumber);
        numOfLost++;
    }
}

document.write("Total Number of Won = "+numOfWon +"<br/>")
document.write("Total Number of Lost = "+numOfLost +"<br/>")
