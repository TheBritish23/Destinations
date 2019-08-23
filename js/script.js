// business logic for Destination
var espanol = { name: "Marbella"}; {
var sun = { name: "San Ramon"};
var sun2 = { name: "San Fransisco"};
var sun3 = { name: "Los Angeles"};
var arab = { name: "Doha"};
var beach = { name: "Orlando"};
}

var usa = { name: "United States of America", cities: [espanol, sun, sun2, sun3, beach] }; {
var spain = { name: "Spain", cities: [espanol] };
var qatar = { name: "Qatar", cities: [arab] };
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

var la = { name: "Los Angeles" };
usa.cities.push(la);

var sr = { name: "San Ramon" };
usa.cities.push(sr);

var sf = { name: "San Fransisco" };
usa.cities.push(sf);





// user interface logic
$(document).ready(function() {
  $("form#visit").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = visit(words)
  })
 });
