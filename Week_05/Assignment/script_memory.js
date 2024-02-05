// JavaScript code for Memory Card Game will be added here by the students

//this should be randomly generated
var cardValues = [1,2,3,1,2,3];
var cardsDisplayed = [];

function cardClicked(cardNumber) {
    //alert(cardNumber);

    if (cardsDisplayed.length < 2) {

        cardsDisplayed.push(cardNumber);

        var cardValue = cardValues[cardNumber-1];
        //alert(cardValue);

        var newImage = "./images/";

        switch(cardValue) {
            case 1:
                newImage += "card1.png";
                break;
            case 2:
                newImage += "card2.png";
                break;
            case 3:
                newImage += "card3.png";
                break;
        }

        var cardId = "card" + cardNumber;

        //document.getElementById(cardId).src = newImage;

        //alternative:
        var card = document.getElementById(cardId);
        card.src = newImage;

        //look for match.
        if (cardsDisplayed.length == 2) {
            var card1Displayed = cardsDisplayed[0];
            var card2Displayed = cardsDisplayed[1];

            var card1Value = cardValues[card1Displayed-1];
            var card2Value = cardValues[card2Displayed-1];

            console.log(card1Value, card2Value);

            if (card1Value == card2Value) {
                //we have a match!
                console.log("yep!");
                cardsDisplayed = [];
                //
                //
            } else {
                //no match!
                console.log("nope!");

                setTimeout(function() {

                    var c1 = document.getElementById("card" + cardsDisplayed[0]);
                    var c2 = document.getElementById("card" + cardsDisplayed[1]);

                    var backImg = "./images/back.png";

                    c1.src = backImg;
                    c2.src = backImg;

                    cardsDisplayed = [];

                },2000);

            }
        }

    }

}

window.addEventListener("load", (event) => {

    let card1 = document.getElementById("card1");
    card1.addEventListener("click", function() {
        cardClicked(1);
    });

    let card2 = document.getElementById("card2");
    card2.addEventListener("click", function() {
        cardClicked(2);
    });

    let card3 = document.getElementById("card3");
    card3.addEventListener("click", function() {
        cardClicked(3);
    });

    let card4 = document.getElementById("card4");
    card4.addEventListener("click", function() {
        cardClicked(4);
    });

    let card5 = document.getElementById("card5");
    card5.addEventListener("click", function() {
        cardClicked(5);
    });

    let card6 = document.getElementById("card6");
    card6.addEventListener("click", function() {
        cardClicked(6);
    });
});