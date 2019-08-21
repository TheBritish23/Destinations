// business logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();   // <--- This line is new!
  this.contacts.push(contact);
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {     // <-- This line is new!
       if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    };
  return false;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Contact
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
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
