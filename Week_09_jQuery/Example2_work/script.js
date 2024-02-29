
var hospital_locations = [];


function getHospitalLocations() {

    //https://data.novascotia.ca/Health-and-Wellness/Hospitals/tmfr-3h8a/about_data 
    var officesUrl = "https://data.novascotia.ca/resource/tmfr-3h8a.json";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){
                //do stuff here.
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
