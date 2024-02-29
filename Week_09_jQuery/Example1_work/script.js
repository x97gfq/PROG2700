
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
                    var office = result[i];

                    //do I already have an object for this region in my list?
                    var foundInList = office_locations.filter(
                        (off) => off.region == office.region);

                    //if it's in the list, add the service only to the existing entry
                    if (foundInList.length != 0) {
                        foundInList[0].services.push(office.service);
                    } else {
                        //create a new entry
                        var off = new OfficeLocation(office.region,
                            office.office_address, office.service);
                        office_locations.push(off);
                    }
                }
                console.log("office_locations", office_locations);

                var display_html = "<ul>";
                for (var i = 0; i < office_locations.length; i++) {
                    var off = office_locations[i];
                    display_html += "<li>";
                    display_html += "<b>" + off.region + "</b>";
                    display_html += off.office_address + "<br/>";
                    display_html += off.services.toString();
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
