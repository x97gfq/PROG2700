
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

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Numbers: " + randomNumbers.toString() + ", rolled: " + rolledNumber + " " + (isMatch ? "Match found!" : "No match.");
    //
    //
}

window.addEventListener("load", (event) => {
    const form = document.getElementById("click_btn");
    form.addEventListener("click", playGame);
});


