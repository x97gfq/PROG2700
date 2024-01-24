
function validateForm(event) {

    alert("submit form - cancelled.")

    event.preventDefault();
}




window.addEventListener("load", (event) => {

    const form = document.getElementById("form");
    form.addEventListener("submit", validateForm);    

});