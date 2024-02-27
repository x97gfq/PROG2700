
const API_KEY = "";

function getWeatherInfo() {

    if ("geolocation" in navigator) {
        // Request the current position
        navigator.geolocation.getCurrentPosition(
            //success
            function(position) {
                // Extract latitude and longitude from the position object
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
        
                console.log("latitude", latitude, "longitude", longitude);

                // Construct the URL for the OpenWeatherMap API
                var url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;

                // Make an AJAX request to the OpenWeatherMap API
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        // Handle the response here
                        console.log("data", data);

                        //get individual parts into vars
                        var temp = data.main.temp;
                        var feels_like = data.main.feels_like;
                        var humidity = data.main.humidity;
                        var loc = data.name;
                        var description = data.weather[0].description;
                        var icon = data.weather[0].icon;
                        
                        //build the icon URL
                        var icon_url = "http://openweathermap.org/img/w/" + icon + ".png";

                        //get the icon on the page, set the icon url, set the display to inline.
                        var icon_img = document.getElementById("icon_img");
                        icon_img.src = icon_url;
                        icon_img.style.display = "inline";

                        console.log(temp, feels_like, humidity, loc, description, icon);

                        //construct the displayed sentence
                        var display = "Current Temp is " + temp + " but it feels like " + feels_like + " with humidity of " + humidity + " and " + description + " in " + loc;
                        console.log(display);

                        //put the weather sentence in the display container
                        var display_container = document.getElementById("weather_info");
                        display_container.innerHTML = display;
                    },
                    error: function(error) {
                        // Handle errors here
                        console.error("Error fetching weather data:", error);
                    }
                });                

            }, 
            //error
            function(error) {
                // Handle errors in retrieving the position
                console.error("Error getting location:", error);
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

}

window.addEventListener("load", (event) => {
    const btn = document.getElementById("getWeatherBtn");
    btn.addEventListener("click", getWeatherInfo);
});