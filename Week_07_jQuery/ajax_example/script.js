
function getTriviaQuestion() {
    // Construct the URL 
    var url = "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple";

    // Make an AJAX request to the API

}

function evaluateTriviaQuestion() {
    alert("checking...");
    //correct? 
    //
    //

    //get next question
    this.getTriviaQuestion();
}

window.addEventListener("load", (event) => {
    this.getTriviaQuestion();

    const btn = document.getElementById("submitAnswer");
    btn.addEventListener("click", evaluateTriviaQuestion);
});