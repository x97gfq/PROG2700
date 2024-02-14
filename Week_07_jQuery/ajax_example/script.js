
function getTriviaQuestion() {
    // Construct the URL 
    var url = "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple";

    // Make an AJAX request to the API
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Handle the response here
            console.log(data);
        },
        error: function(error) {
            // Handle errors here
            console.error("Error fetching data:", error);
        }
    });
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