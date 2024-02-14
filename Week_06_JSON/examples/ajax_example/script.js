
const API_KEY = "";

function getWeatherInfo() {
    // Check if the Geolocation API is available in the user's browser
    if ("geolocation" in navigator) {
        // Request the current position
        navigator.geolocation.getCurrentPosition(function(position) {
            // Extract latitude and longitude from the position object
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Construct the URL for the OpenWeatherMap API
            var url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;

            // Make an AJAX request to the OpenWeatherMap API
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    // Handle the response here
                    console.log(data);

                    //
                    //
                    // and display the weather data
                    //
                    //
                    // images? https://openweathermap.org/weather-conditions
                    //  e.g. https://openweathermap.org/img/wn/04n@2x.png
                    //

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