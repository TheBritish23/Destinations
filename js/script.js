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

Passport.prototype.listAll = function() {
  $("#output").empty();
  this.places.forEach(function(place){
    $("#output").append(place.outPlace());
  })
}


// business logic for Place
function Place(location, year, landmark){
  this.location = location;
  this.year = year;
  this.landmark = landmark;
}

Place.prototype.getPlace = function() {
  return "<div class='card'><div class='place'>" + this.location +
    "<p class='year'>" + this.year + "</p>" +
    "<p class='landmark'>" + this.landmark + "</p></div>";
}

var place1 = new Place ("Spain","2017","Marbella");


// user interface logic for Destination
$(document).ready(function() {
  $("form#visit").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var words2 = $('#words2').val()
    var words3 = $('#words3').val()
    var result = visit(words)
    var result = visit(words2)
    var result = visit(words3)
  })
 });
