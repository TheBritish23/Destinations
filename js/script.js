// business logic for Destination
var visit = function(cities) {
    var espanol = { name: "Marbella"};
    var sun = { name: "San Ramon"};
    var sun2 = { name: "San Fransisco"};
    var sun3 = { name: "Los Angeles"};
    var arab = { name: "Doha"};
    var beach = { name: "Orlando"};
  }

    var usa = { name: "United States of America", cities: ["sun", "sun2", "sun3", "beach"] }; {
    var spain = { name: "Spain", cities: ["espanol"] };
    var qatar = { name: "Qatar", cities: ["arab"] };
  }


usa.cities.forEach(function(city) {
  console.log("Let's go to " + city.name + "!");
});

spain.cities.forEach(function(city) {
  console.log("Let's go to " + city.name + "!");
});

qatar.cities.forEach(function(city) {
  console.log("Let's go to " + city.name + "!");
});


var la = { name: "Los Angeles; Hollywood, Beach, Disneyland" }; {
usa.cities.push(la);

var sr = { name: "San Ramon; Family, In n Out Burger, Home" };
usa.cities.push(sr);

var sf = { name: "San Fransisco; Pier, Alcatraz, Boardwalk" };
usa.cities.push(sf);

var mb = { name: "Marbella; Mediterranean, Valleys, A lot of rain for some reason, Mishaps to and from" };
spain.cities.push(mb);

var dh = { name: "Doha; Desert, Persian Gulf, Hot" };
qatar.cities.push(dh);

 }




// user interface logic for Destination
$(document).ready(function() {
  $("form#visit").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = visit(words)
  })
 });
