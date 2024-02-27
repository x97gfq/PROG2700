
function getQuote() {
    var fortuneUrl = "https://api.justyy.workers.dev/api/fortune";

    $("#pleaseWait").show();
    $("#message").html("");
    $("#message").hide();

    $.ajax(
        {
            url: fortuneUrl, 
            success: function(result){
                $("#pleaseWait").hide();
                $("#message").html(result);
                $("#message").fadeIn(3000, "swing", function() {
                    //alert("done");
                    //$("#message").fadeOut("slow");

                    //$("#message").animate({ fontSize: "2em" }).animate({ fontSize: "3em", opacity: "0.5" }, "slow").animate({ fontSize: "2em", opacity: "1" }).animate({ fontSize: "1em" });
                    $("#message").animate({ fontSize: "2em" });
                    $("#message").animate({ fontSize: "3em", opacity: "0.5" }, "slow");
                    $("#message").animate({ fontSize: "2em", opacity: "1" });
                    $("#message").animate({ fontSize: "1em" });


                    $("#message").slideUp(2000).slideDown(2000);
                });
            },
            failure: function(error) {
                alert("an error occurred");
            }
        }
    );

}

//fires when page is loaded
$(document).ready(function() {

    //add our event listeners
    $("#getFortune").click(function(){
        getQuote();
    });
   
});



