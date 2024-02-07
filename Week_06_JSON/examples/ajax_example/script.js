
const API_KEY = "";

function getWeatherInfo() {

}

window.addEventListener("load", (event) => {
    const btn = document.getElementById("getWeatherBtn");
    btn.addEventListener("click", getWeatherInfo);
});