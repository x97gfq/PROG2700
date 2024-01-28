
function rollDice() {
    var randomNum = Math.floor(Math.random() * 6 + 1);
    return randomNum;
}

function generateComputerHand() {
    var computerNums = [];

    for (var i = 0; i < 10; i++) {
        var cNum = rollDice();
        computerNums.push(cNum);
    }
    return computerNums;
}

function howManyMatches(playerNum, computerNums) {
    var matches = 0;
    for (var i = 0; i < computerNums.length; i++) {
        var cNum = computerNums[i];
        if (cNum === playerNum) matches++;
    }
    return matches;
}

function checkIsMatch(playerNum, computerNums) {
    return computerNums.includes(playerNum);
    /*
    var isMatch = false;
    for (var i = 0; i < computerNums.length; i++) {
        var cNum = computerNums[i];
        if (playerNum === cNum) isMatch = true;
    }
    return isMatch;
    */
}

function getImageSrc(num) {
    var newImage = "images/zero.JPG";
    switch(num) {
        case 1:
            newImage = "images/one.JPG";
            break;
        case 2:
            newImage = "images/two.JPG";
            break;
        case 3:
            newImage = "images/three.JPG";
            break;
        case 4:
            newImage = "images/four.JPG";
            break;
        case 5:
            newImage = "images/five.JPG";
            break;
        case 6:
            newImage = "images/six.JPG";
            break;
    }
    return newImage;
}

function playGame() {

    var playerNum = rollDice();
    var computerNums = generateComputerHand();

    var howMany = howManyMatches(playerNum, computerNums);
    var isMatch = (howMany == 0 ? false : true);

    var rolled = document.getElementById("rolled");
    rolled.src = getImageSrc(playerNum);

    for (var i = 0; i < computerNums.length; i++) {
        var d = document.getElementById("dice" + (i+1));
        d.src = getImageSrc(computerNums[i]);
    }

    /*    
    var dice1 = document.getElementById("dice1");
    dice1.src = getImageSrc(computerNums[0]);

    var dice2 = document.getElementById("dice2");
    dice2.src = getImageSrc(computerNums[1]);

    var dice3 = document.getElementById("dice3");
    dice3.src = getImageSrc(computerNums[2]);

    var dice4 = document.getElementById("dice4");
    dice4.src = getImageSrc(computerNums[3]);

    var dice5 = document.getElementById("dice5");
    dice5.src = getImageSrc(computerNums[4]);

    var dice6 = document.getElementById("dice6");
    dice6.src = getImageSrc(computerNums[5]);

    var dice7 = document.getElementById("dice7");
    dice7.src = getImageSrc(computerNums[6]);

    var dice8 = document.getElementById("dice8");
    dice8.src = getImageSrc(computerNums[7]);

    var dice9 = document.getElementById("dice9");
    dice9.src = getImageSrc(computerNums[8]);

    var dice10 = document.getElementById("dice10");
    dice10.src = getImageSrc(computerNums[9]);
    */

    var feedback = (isMatch ? "You're a winner! It matches " + howMany + " times!" : "You're NOT a winner!");
    document.getElementById("feedback").innerHTML = feedback;
}

window.addEventListener("load", (event) => {
    const form = document.getElementById("click_btn");
    form.addEventListener("click", playGame);
});


