'use strict';
// Creating objects from the construtor
const Person = function (firstName, secondName) {
  //   Defining the properties
  this.firstName = firstName;
  this.secondName = secondName;
};
// Now creating objects with same properties
const ahmad = new Person('Ahmad', 'Sharafat');
console.log(ahmad);
const sheraz = new Person('Sheraz', 'Sharafat');
const thomas = new Person('Thomas', 'Shelbey');
console.log(sheraz, thomas);
