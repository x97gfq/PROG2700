
var json = {
    "players" : [
        {
            "firstname" : "Patrice",
            "lastname" : "Bergeron",
            "number" : 37,
            "awesomeness" : 90
        },
        {
            "firstname" : "David",
            "lastname" : "Pastrnak",
            "number" : 88,
            "awesomeness" : 89
        }
    ]
}

console.log("original json",json);


console.log("using for-each:")
for (var i = 0; i < json.players.length; i++) {
    if (json.players[i].number == 37) {
        json.players[i].awesomeness = 99;
    }
    console.log(json.players[i].lastname);
    console.log(json.players[i].firstname);
}


/*

console.log("using forEach:")
json.students.forEach(function (item, index) {
    console.log(item);
    console.log(item.name);
    console.log(item.grade);
  });
*/
console.log("end json", json);

