
function buttonClicked() {
    var username = document.getElementById("username");
    if (username) {
        var nm = username.value;
        alert("welcome, " + nm);
        nm.value = "";
    }
};

window.addEventListener("load", 
    function(event) {
        var elem = document.getElementById("user_button");
        if (elem){
            elem.addEventListener("click",buttonClicked); 
        } 
    }
);



