// business logic
var espanol = { name: "Marbella"};
var sun = { name: "San Ramon"};
var sun2 = { name: "San Fransisco"};
var sun3 = { name: "Los Angeles"};
var arab = { name: "Doha"};
var beach = { name: "Orlando"};

var usa = { name: "United States of America", cities: [espanol, sun, sun2, sun3, beach] };
var spain = { name: "Spain", cities: [espanol] };
var qatar = { name: "Qatar", cities: [arab] };





// user interface logic
$(document).ready(function() {
  $("form#visit").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = visit(words)
  })
 });
