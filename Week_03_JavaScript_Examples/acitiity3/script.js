
function validateForm(event) {
    var errorColor = "red";
    var successColor= "white";
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var postalcode = document.getElementById("postalcode");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    
    var form_ok = true;

    if (username.value == '' || username.value.length > 20) {
        username.style.backgroundColor = errorColor;
        form_ok = false;
    } else {
        username.style.backgroundColor = successColor;
    }

    if (email.value == '' || email.value.length > 100
        || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1
    ) {
        email.style.backgroundColor = "red";
        form_ok = false;
    } else {
        email.style.backgroundColor = "white";
    }

    let pattern = /^\d{3}-\d{3}-\d{4}$/;
    if(!phone.value.match(pattern))
    {
       phone.style.backgroundColor = "red";
       form_ok = false;
    }
    else
    {
        phone.style.backgroundColor = "white";
    }

    let pc_pattern = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    if(!postalcode.value.match(pc_pattern))
    {
        postalcode.style.backgroundColor = "red";
        form_ok = false;
    }
    else
    {
        postalcode.style.backgroundColor = "white";
    }

    if (firstname.value == '' || firstname.value.length > 100) {
        firstname.style.backgroundColor = "red";
        form_ok = false;
    } else {
        firstname.style.backgroundColor = "white";
    }

    if (lastname.value == '' || lastname.value.length > 100) {
        lastname.style.backgroundColor = "red";
        form_ok = false;
    } else {
        lastname.style.backgroundColor = "white";
    }

    if (!form_ok) alert("you need to correct some errors on your form before you can submit.")

    return form_ok;
}




window.addEventListener("load", (event) => {

    const form = document.getElementById("form");
    form.addEventListener("submit", validateForm);    

});