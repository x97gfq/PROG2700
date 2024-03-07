
var places = [];

class Place {
    constructor(name, description, latitude, longitude) {
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

function getPlaces() {

    //https://data.novascotia.ca/Health-and-Wellness/Hospitals/tmfr-3h8a/about_data 
    var officesUrl = "http://localhost:8080/places";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){
                
                result.forEach(
                    function(item) {
                        //name, town, latitude, longitude
                        var pl = new Place(
                            item.name,
                            item.description,
                            Number(item.latitude),
                            Number(item.longitude)
                        )
                        places.push(pl);
                    }
                );
                console.log(places);

                places.forEach(
                    function (item) {

                        //create info iwndow popup
                        var infoWindow = new google.maps.InfoWindow({
                            content: "<p style='color: black'>" + item.name + "<br/>" + item.description + "</p>"
                        });

                        //create a new marker with hospital icon
                        var marker = new google.maps.Marker({
                            position: { lat: item.latitude, lng: item.longitude },
                            icon: 'place_icon.png',
                            animation: google.maps.Animation.BOUNCE
                        });

                        //add a click event to the marker to open the info window
                        marker.addListener("click", function() {
                            infoWindow.open({
                                anchor: marker,
                                map
                            })
                        });

                        //set the marker on the map.
                        marker.setMap(map);
                    }
                );


            }
        }
    );
}

var map; 

function initializeMap() {

    var mapProperties = {
        center :new google.maps.LatLng(43.8528801,-66.1043946),
        zoom: 8
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);
}

$(document).ready(function() {
    getPlaces();
});
