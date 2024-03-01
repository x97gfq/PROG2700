
var hospital_locations = [];

class HospitalLocation {
    constructor(name, town, latitude, longitude) {
        this.name = name;
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

function getHospitalLocations() {

    //https://data.novascotia.ca/Health-and-Wellness/Hospitals/tmfr-3h8a/about_data 
    var officesUrl = "https://data.novascotia.ca/resource/tmfr-3h8a.json";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){
                
                result.forEach(
                    function(item) {
                        //name, town, latitude, longitude
                        var hosp = new HospitalLocation(
                            item.facility,
                            item.town,
                            item.the_geom.coordinates[1],
                            item.the_geom.coordinates[0]
                        )
                        hospital_locations.push(hosp);
                    }
                );
                console.log(hospital_locations);

                hospital_locations.forEach(
                    function (item) {

                        //create info iwndow popup
                        var infoWindow = new google.maps.InfoWindow({
                            content: "<p style='color: black'>" + item.name + "<br/>" + item.town + "</p>"
                        });

                        //create a new marker with hospital icon
                        var marker = new google.maps.Marker({
                            position: { lat: item.latitude, lng: item.longitude },
                            icon: 'hospital_icon.png',
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
    getHospitalLocations();
});
