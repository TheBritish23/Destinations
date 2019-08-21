// business logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();   // <--- This line is new!
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var x=0; x< this.contacts.length; x++) {
      if (this.contacts[x]) {     // <-- This line is new!
       if (this.contacts[x].id == id) {
        return this.contacts[x];
       }
     }                         // <--This line is also new!
    };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var x=0; x< this.contacts.length; x++) {
    if (this.contacts[x]) {
      if (this.contacts[x].id == id) {
        delete this.contacts[x];
        return true;
      }
    }
  };
  return false;
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
