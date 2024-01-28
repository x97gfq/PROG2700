
function generateRandomNumbers(count, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(rollDie(max) );
    }
    return numbers;
}

function rollDie(max) {
    return Math.floor(Math.random() * max) + 1;
}

function checkForMatch(array, number) {
    return array.includes(number);
}

function getDiceImageName(number) {
    var img = "";
    switch(number) {
        case 1:
            img = "one.JPG";
            break;
        case 2:
            img = "two.JPG";
            break;
        case 3:
            img = "three.JPG";
            break;
        case 4:
            img = "four.JPG";
            break;
        case 5:
            img = "five.JPG";
            break;
        case 6:
            img = "six.JPG";
            break;
    }
    return "../images/" + img;
}

function playGame() {
    // Settings
    const numCount = 10; // Number of random numbers in the array
    const maxNumber = 6; // Maximum value for random numbers and die roll

    // Game setup
    const randomNumbers = generateRandomNumbers(numCount, maxNumber);
    console.log("Random Numbers:", randomNumbers);

    const rolledNumber = rollDie(maxNumber);
    console.log("Rolled Number:", rolledNumber);

    // Check for match
    const isMatch = checkForMatch(randomNumbers, rolledNumber);
    console.log(isMatch ? "Match found!" : "No match.");

    //var resultsDiv = document.getElementById("results");
    //resultsDiv.innerHTML = "<p>Numbers: " + randomNumbers.toString() + ", rolled: " + rolledNumber + " " + (isMatch ? "Match found!" : "No match.") + "</p>";
    
    // show dice images
    document.getElementById("diceRoll").src = getDiceImageName(rolledNumber);

    document.getElementById("dice1").src = getDiceImageName(randomNumbers[0]);
    document.getElementById("dice2").src = getDiceImageName(randomNumbers[1]);
    document.getElementById("dice3").src = getDiceImageName(randomNumbers[2]);
    document.getElementById("dice4").src = getDiceImageName(randomNumbers[3]);
    document.getElementById("dice5").src = getDiceImageName(randomNumbers[4]);
    document.getElementById("dice6").src = getDiceImageName(randomNumbers[5]);
    document.getElementById("dice7").src = getDiceImageName(randomNumbers[6]);
    document.getElementById("dice8").src = getDiceImageName(randomNumbers[7]);
    document.getElementById("dice9").src = getDiceImageName(randomNumbers[8]);
    document.getElementById("dice10").src = getDiceImageName(randomNumbers[9]);

    document.getElementById("winner").style.display = (isMatch ? "inline" : "none");
    document.getElementById("loser").style.display = (isMatch ? "none" : "inline");
    //
    //next step - ?
    //How many exact matches with roll?
    //
}

window.addEventListener("load", (event) => {
    const form = document.getElementById("click_btn");
    form.addEventListener("click", playGame);
});


