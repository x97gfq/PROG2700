
var correct = "";

function getTriviaQuestion() {
    // Construct the URL 
    var myUrl = "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple";

    // Make an AJAX request to the API

    
}

function evaluateTriviaQuestion() {
        alert("checking");
        //
        //
}

window.addEventListener("load", (event) => {
    getTriviaQuestion();

    const btn = document.getElementById("submitAnswer");
    btn.addEventListener("click", evaluateTriviaQuestion);
});