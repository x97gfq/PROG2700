


function getAnswer() {

    var question = $("#question").val();

    alert(question);

    $("#question").val("");
}

$(document).ready(function() {
    console.log("ready!");

    $("#submitQuestion").click(function(){
        getAnswer();
    });

});



