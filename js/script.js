// business logic for Destination
// var visit = function(cities) {
//     var espanol = { name: "Marbella"};
//     var sun = { name: "San Ramon"};
//     var sun2 = { name: "San Fransisco"};
//     var sun3 = { name: "Los Angeles"};
//     var arab = { name: "Doha"};
//     var beach = { name: "Orlando"};
//   }
//
//     var usa = { name: "United States of America", cities: ["sun", "sun2", "sun3", "beach"] }; {
//     var spain = { name: "Spain", cities: ["espanol"] };
//     var qatar = { name: "Qatar", cities: ["arab"] };
//   }

// business logic for Passport
function Passport() {
  this.places = []
}

Passport.prototype.addPlace = function(place) {
  this.places.push(place);
}

// business logic for Place
function Place (location, year, landmark){
  this.location = location;
  this.year = year;
  this.landmark = landmark;
}

Place.prototype.getPlace = function() {
  return this.location + " " + this.landmark;
}

var place1 = newPlace ("Spain,"2017","Marbella");


// user interface logic for Destination
$(document).ready(function() {
  $("form#visit").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = visit(words)
  })
 });
