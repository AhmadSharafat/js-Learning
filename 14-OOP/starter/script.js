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

const Person1= function(num1,num2){
  this.num1=num1;
  this.num2=num2;

}
//Properties creating from constructor

const sum1=new Person1(2020,2222);

const sum2= new Person1(25,50);

Person1.prototype.sum=function(){
  console.log(this.num1+this.num2); 
}
sum1.sum();
sum2.sum();

console.log(sum1);
