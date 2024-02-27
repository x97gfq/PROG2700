
var office_locations = [];

function getOfficeLocations() {

    //https://data.novascotia.ca/Public-Service/Access-Centres-Office-Locations/f35v-t3mg
    var officesUrl = "https://data.novascotia.ca/resource/f35v-t3mg.json";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){

                //do stuff here
                console.log(result);
                //
                //
                //

            }
        }
    );
}

$(document).ready(function() {
    getOfficeLocations();
});
