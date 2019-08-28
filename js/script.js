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
    $("#output").append(place.getPlace());
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

// user interface logic for Destination
$(document).ready(function() {
  var myPassport = new Passport();
  $("form#visit").submit(function(event) {
    event.preventDefault()
    var location = $('#location').val()
    var year = $('#year').val()
    var landmark = $('#landmark').val()
    var myPlace = new Place(location, year, landmark);
    $("visit").val("");
    myPassport.places.push(myPlace);
    myPassport.listAll();
    $(".place").click(function(){
    $(this).children().toggle();
  })
  })

});
