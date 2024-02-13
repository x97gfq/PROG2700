
const API_KEY = "2ad263b9a82888fd39382d86aa2fc030";

function getWeatherInfo() {

    if ("geolocation" in navigator) {
        // Request the current position
        navigator.geolocation.getCurrentPosition(function(position) {
            // Extract latitude and longitude from the position object
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;


            console.log("latitude", latitude, "longitude", longitude);

            var url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;
            console.log(url);

            // Make an AJAX request to the OpenWeatherMap API
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    // Handle the response here
                    console.log(data);

                    var main = data.weather[0].main;
                    var description = data.weather[0].description;
                    var temp = data.main.temp;
                    var feels_like = data.main.feels_like;
                    var humidity = data.main.humidity;
                    var wind_speed = data.wind.speed;
                    var clouds = data.clouds.all;
                    var nm = data.name;
                    var icon = data.weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";

                    var display_text = "";
                    display_text += "In " + nm + " it's currently " + temp + " degrees ";
                    display_text += "and " + description + " feels like " + feels_like;
                    display_text += " with humidity of " + humidity;
                    display_text += " and wind speed of " + wind_speed;

                    document.getElementById("weather_info").innerHTML = display_text;
                    document.getElementById("weather_icon").src = iconurl;
                    document.getElementById("weather_icon").style.display = "inline";

                },
                error: function(error) {
                    // Handle errors here
                    console.error("Error fetching weather data:", error);
                }
            });




        }, function(error) {
            // Handle errors in retrieving the position
            console.error("Error getting location:", error);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    
}

window.addEventListener("load", (event) => {
    const btn = document.getElementById("getWeatherBtn");
    btn.addEventListener("click", getWeatherInfo);
});