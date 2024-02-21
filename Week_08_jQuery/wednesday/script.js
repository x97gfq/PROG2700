


function getQuote() {
    var fortuneUrl = "https://api.justyy.workers.dev/api/fortune";

    $("#message").fadeOut();

    $.ajax(
        {
            url: fortuneUrl, 
            success: function(result){
                $("#message").html(result);

                setTimeout(function() {
                    $("#message").fadeIn();
                    $("#message").animate({fontSize: "2em"});
                    $("#message").animate({fontSize: "1em"});
                },100);
                
            }
        }
    );
}

$(document).ready(function() {
    console.log("ready!");

    $("#getFortune").click(function(){
        getQuote();
    });

});



