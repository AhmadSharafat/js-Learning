'use strict';
// Creating objects from the construtor
const Person = function (firstName, secondName, birthYear) {
  //   Defining the properties
  this.firstName = firstName;
  this.secondName = secondName;
  this.birthYear = birthYear;
};
// Now creating objects with same properties
const ahmad = new Person('Ahmad', 'Sharafat', 2004);
console.log(ahmad);
const sheraz = new Person('Sheraz', 'Sharafat', 2009);
const thomas = new Person('Thomas', 'Shelbey', 1885);
console.log(sheraz, thomas);

// Prototypes
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};
ahmad.calAge();
sheraz.calAge();
thomas.calAge();
