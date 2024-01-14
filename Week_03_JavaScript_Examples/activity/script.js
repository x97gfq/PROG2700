
function buttonClicked() {

    const element = document.getElementById("modal");
    element.style.display = "inline";

}



window.addEventListener("load", function(event) {

    const element = document.getElementById("modal_btn");
    element.addEventListener("click", function() {
        buttonClicked();
    });


});

