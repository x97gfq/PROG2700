// we're going to try adding chart plotting our data...
// https://www.w3schools.com/ai/ai_chartjs.asp

var crimeStats = [];

//map the data from the API to our own Object (CrimeStat)
class CrimeStat {
    constructor(geography, year, total_crime_severity_index) {
        this.region = geography;
        this.year = year;
        this.severity_index = total_crime_severity_index;
    }
}

//region list, it's used to populate the SELECT dropdown on the index.html, when the page loads (see bottom of this file)
const regions = ["Amherst, Nova Scotia, municipal [12001]","Annapolis County, Nova Scotia, Royal Canadian Mounted Police, rural [12703]","Annapolis Royal, Nova Scotia, municipal [12002]","Antigonish County, ova Scotia, Royal Canadian Mounted Police, rural [12751]","Antigonish, Nova Scotia, Royal Canadian Mounted Police, municipal [12752]","Arichat, Nova Scotia, Royal Canadian Mounted Police, ural [12800]","Barrington, Nova Scotia, Royal Canadian Mounted Police, rural [12702]","Berwick, Nova Scotia, municipal [12004]","Bible Hill, Nova Scotia, Royal Canadian Mounted Police, rural 12786]","Bridgewater, Nova Scotia, municipal [12006]","Canadian National Railway Police, Nova Scotia [12990]","Canso, Nova Scotia, Royal Canadian Mounted Police, rural [12835]","Cape Breton egion, Nova Scotia, municipal [12018]","Cape Breton, Nova Scotia, Royal Canadian Mounted Police, rural [12705]","Chester, Nova Scotia, Royal Canadian Mounted Police, rural [12706]","Chéticamp, Nova Scotia, Royal Canadian Mounted Police, rural [12805]","Clark's Harbour, Nova Scotia, municipal [12008]","Colchester County, Nova Scotia, Royal Canadian Mounted olice, rural [12009]","Cole Harbour, Nova Scotia, Royal Canadian Mounted Police, rural [12708]","Cumberland County, Nova Scotia, Royal Canadian Mounted Police, rural [12750]","Digby, Nova cotia, municipal [12012]","Digby, Nova Scotia, Royal Canadian Mounted Police, municipal [12711]","Digby, Nova Scotia, Royal Canadian Mounted Police, rural [12709]","Elmsdale Hants Co., Nova cotia, Royal Canadian Mounted Police, rural [12844]","Enfield (East Hants), Nova Scotia, Royal Canadian Mounted Police, rural [12782]","Eskasoni, Nova Scotia, municipal [12065]","Eskasoni, ova Scotia, Royal Canadian Mounted Police, rural [12007]","Glace Bay, Nova Scotia, municipal [12014]","Guysborough County, Nova Scotia, Royal Canadian Mounted Police, rural [12760]","Halifax Division Headquarters 1), Nova Scotia, Royal Canadian Mounted Police [12959]","Halifax (Division Headquarters 2), Nova Scotia, Royal Canadian Mounted Police [12970]","Halifax (offshore), ova cotia, Royal Canadian Mounted Police, rural [12700]","Halifax County, Nova Scotia, Royal Canadian Mounted Police, rural [12003]","Halifax Metropolitan Area, Nova Scotia, municipal [12099]","Halifax, Nova Scotia, municipal [12020]","Halifax, Nova Scotia, Royal Canadian Mounted Police, rural [12843]","Hantsport, Nova Scotia, municipal [12021]","Indian Brook, Nova Scotia, oyal Canadian Mounted Police, rural [12849]","Ingonish Beach, Nova Scotia, Royal Canadian Mounted Police, rural [12812]","Inverness County, Nova Scotia, Royal Canadian Mounted Police, rural [2813]","Kentville, Nova Scotia, municipal [12023]","Kings County, Nova Scotia, Royal Canadian Mounted Police, rural [12720]","Kingston, Nova Scotia, Royal Canadian Mounted Police, rural [2721]","Lower Sackville, Nova Scotia, Royal Canadian Mounted Police, rural [12707]","Lunenburg County, Nova Scotia, Royal Canadian Mounted Police, rural [12704]","Lunenburg, Nova Scotia, unicipal [12029]","Lunenburg, Nova Scotia, Royal Canadian Mounted Police, rural [12724]","Membertou, Nova Scotia, Royal Canadian Mounted Police, rural [12017]","Meteghan (Clare), Nova cotia, oyal Canadian Mounted Police, rural [12726]","Middleton, Nova Scotia, municipal [12031]","Millbrook, Nova Scotia, Royal Canadian Mounted Police, rural [12850]","Musquodoboit, Nova Scotia, oyal Canadian Mounted Police, rural [12845]","New Glasgow Region, Nova Scotia, municipal [12058]","North Sydney, Nova Scotia, municipal [12035]","Nova Scotia [12]","Oxford County, Nova cotia, Royal Canadian Mounted Police, municipal [12833]","Oxford, Nova Scotia, Royal Canadian Mounted Police, rural [12837]","Parrsboro, Nova Scotia, Royal Canadian Mounted Police, municipal 12712]","Parrsboro, Nova Scotia, Royal Canadian Mounted Police, rural [12775]","Pictou County, Nova Scotia, Royal Canadian Mounted Police, rural [12010]","Pictou, Nova Scotia, Royal Canadian ounted Police, municipal [12776]","Pictou, Nova Scotia, Royal Canadian Mounted Police, rural [12838]","Port Hawkesbury, Nova Scotia, Royal Canadian Mounted Police, municipal [12821]","Port awkesbury, Nova Scotia, Royal Canadian Mounted Police, rural [12820]","Port of Halifax, Nova Scotia, Ports Canada Police [12980]","Pugwash, Nova Scotia, Royal Canadian Mounted Police, rural [2777]","Queens County, Nova Scotia, Royal Canadian Mounted Police, rural [12723]","Richmond County, Nova Scotia, Royal Canadian Mounted Police, rural [12016]","Sheet Harbour, Nova Scotia, oyal Canadian Mounted Police, rural [12735]","Shelburne, Nova Scotia, Royal Canadian Mounted Police, municipal [12836]","Shelburne, Nova Scotia, Royal Canadian Mounted Police, rural [12736]","Sherbrooke, Nova Scotia, Royal Canadian Mounted Police, rural [12780]","Springhill, Nova Scotia, municipal [12043]","St. Peters, Nova Scotia, Royal Canadian Mounted Police, rural [2825]","Stellarton, Nova Scotia, municipal [12044]","Stellarton, Nova Scotia, Royal Canadian Mounted Police, rural [12770]","Sydney, Nova Scotia, municipal [12048]","Sydney, Nova Scotia, oyal Canadian Mounted Police, rural [12841]","Tantallon, Nova Scotia, Royal Canadian Mounted Police, rural [12715]","Tatamagouche, Nova Scotia, Royal Canadian Mounted Police, rural [12785]","Trenton, Nova Scotia, municipal [12059]","Truro, Nova Scotia, municipal [12052]","Truro, Nova Scotia, Royal Canadian Mounted Police, rural [12840]","Victoria County, Nova Scotia, oyal Canadian Mounted Police, rural [12802]","West Hants, Nova Scotia, Royal Canadian Mounted Police, rural [12745]","Westville, Nova Scotia, municipal [12054]","Windsor, Nova Scotia, Royal anadian Mounted Police, municipal [12744]","Wolfville, Nova Scotia, municipal [12056]","Yarmouth, Nova Scotia, municipal [12057]","Yarmouth, Nova Scotia, Royal Canadian Mounted Police, unicipal [12834]","Yarmouth, Nova Scotia, Royal Canadian Mounted Police, rural [12747]"];


//this function is fired when the user clicks the button (the button's click event is added when the page loads, see bottom of this file)
//string "region" is passed into this function as a paramter
//the caller (the "click" event) will retrieve the region string from the input box on the index.html (via the DOM) and call this function, passing the string in as a parameter
function getCrimeStats(region) {

    //https://data.novascotia.ca/Crime-and-Justice/Crime-Statistics-Crime-Severity-Index/w64p-5ue3/about_data
    //Example: https://data.novascotia.ca/resource/w64p-5ue3.json?geography=Richmond County, Nova Scotia, Royal Canadian Mounted Police, rural [12016]
    var crimeUrl = "https://data.novascotia.ca/resource/w64p-5ue3.json?geography=" + region;
    
    //re-initiatlize the crimeStats array of CrimeStat objects
    crimeStats = [];

    //make a jQuery AJAX request
    $.ajax(
        {
            url: crimeUrl, 
            success: function(results){

                //read the data into an array of our own objects (CrimeStat)
                results.forEach(
                    function(item) {
                        crimeStats.push(
                            new CrimeStat(
                                item.geography,
                                parseInt(item.year),
                                item.total_crime_severity_index
                            )
                        )
                    }
                );
                
                //sort the data on the YEAR property, DESCENDING
                crimeStats = crimeStats.sort(
                    function(stat1, stat2) { 
                        return stat1.year - stat2.year 
                    }
                );

                //F12 and check your CONSOLE, verify sorted data:
                console.log("crimeStats", crimeStats);

                //display the region string to the user
                $("#heading").html(region);

                //iterate over the "CrimeStat" objects and dynamically build HTML for "ouput" display to user (and YES this could be done other and better ways)
                var output = "";
                crimeStats.forEach(
                    function(item) {
                        output += "<p><b>" + item.year + "</b>: " + item.severity_index + "</p>";
                    }
                )

                //set the output
                $("#data").html(output);



                //CHART STUFF!!
                //we need to build the x and y values (using our data) for the chart

                //build the yValues
                var yValues = [];

                //build the xValues
                var xValues = [];

                //define the chart
                const myChart = null;
                



            },
            failure: function(err) {
                //handle an error (http) scenario
                alert("Sorry, we encountere an error. " + err.toString());
            }
        }
    );
}

function setupRegions() {
    //rip through the regions string array and add each one as an OPTION item to the SELECT box on the UI
    $.each(regions, function(index, item) {
        $('#region').append($('<option>', { 
            value: item,
            text : item 
        }));
    });
}

//when the page loads
$(document).ready(function() {

    //add items in regions list to regions dropdown
    setupRegions();

    //add a click event to the button
    $("#getStats").click(function(){
        var region = $("#region").val();
        if (region != "...") {
            getCrimeStats($("#region").val());
        }
    });

});
