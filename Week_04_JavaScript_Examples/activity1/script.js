
function playGame() {

    alert("play game!");

}

window.addEventListener("load", (event) => {
    const form = document.getElementById("click_btn");
    form.addEventListener("click", playGame);
});