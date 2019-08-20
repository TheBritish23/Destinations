// business logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
}

// Business Logic for Contact
function contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#contact").submit(function(event) {
    event.preventDefault()
    var words = $('#words').val()
    var result = contact(words)
  })
 });
