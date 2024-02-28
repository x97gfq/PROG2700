
var office_locations = [];

class OfficeLocation {
    constructor(region, office_address, service) {
        this.region = region;
        this.office_address = office_address;
        this.services = [];
        this.services.push(service);
    }
}

function getOfficeLocations() {

    //https://data.novascotia.ca/Public-Service/Access-Centres-Office-Locations/f35v-t3mg
    var officesUrl = "https://data.novascotia.ca/resource/f35v-t3mg.json";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){

                for (var i = 0; i < result.length; i++) {

                    var entry = result[i];

                    //if it exists in the list already, add the service to the existing object
                    //otherwise create a new object.
                    var foundInArray = office_locations.filter(
                        (off) => off.region == entry.region
                    );

                    if (foundInArray.length == 0) {
                        var off = new OfficeLocation(
                            entry.region,
                            entry.office_address,
                            entry.service
                        )
                        office_locations.push(off);
                    } else {
                        foundInArray[0].services.push(entry.service);
                    }

                }
                console.log(office_locations);

                var display_html = "";
                display_html = "<ul>";
                for (var i = 0; i < office_locations.length; i++) {
                    display_html += "<li>";
                    display_html += office_locations[i].region + "<br/>";
                    display_html += office_locations[i].office_address + "<br/>";
                    display_html += office_locations[i].services.toString();
                    display_html += "</li>";
                }
                display_html += "</ul>";
                $("#office_data").html(display_html);
            }
        }
    );
}

$(document).ready(function() {
    getOfficeLocations();
});
