
function validateForm() {

    var fname = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var email = document.getElementById("email");
    
    if (fname != null && fname.value.trim() == '') {
        alert('you must enter firstname');
    } else if (lname != null && lname.value.trim() == '') {
        alert('you must enter lname');
    } else if (email != null && (email.value.trim() == '' || email.value.indexOf("@") == -1)) {
        alert('you must enter properly formatted email address');
    } else {
        alert("things look good");
        document.getElementById("input").style.display = 'none';
        document.getElementById("output").innerHTML = "Hello, " + fname.value;
    }
}


window.addEventListener("load", function(event) {

    const element = document.getElementById("submitForm");
    element.addEventListener("click", function() {
        validateForm();
    });


});
