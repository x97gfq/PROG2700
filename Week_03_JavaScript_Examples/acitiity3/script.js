
function validateForm(event) {

    //what is 'event'?

    alert("validateForm!");

    return false;
}



window.addEventListener("load", (event) => {

    const form = document.getElementById("form");
    form.addEventListener("submit", validateForm);    

});