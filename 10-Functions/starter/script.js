'use strict';

// Default parameters

const bookingDetails = [];
const flightBookings = function (
  // This is the ES6 way of writing Default Parameters
  // This Means when we don't recive response we return default value
  flightName = 'Ah222',
  pilotName = 'Al Pacino',
  numPassengers = 1
) {
  //    ES-5 way of writing default parameters
  //   numPassengers = numPassengers || 1;
  const booking = {
    flightName,
    pilotName,
    numPassengers,
  };
  console.log(booking);
  bookingDetails.push(booking);
};
flightBookings('LH123', 'Al Pacino', 2);
flightBookings('Ahmad');

// Primative and Reference Type in functions

const flight = 'Lh334';
const passengerDetails = {
  name: 'Ahmad Sharafat',
  passport: 235567789,
};

const checkIn = function (flightNum, passengerData) {
  flightNum = 'Lh333';
  passengerData.name = 'Mr.' + passengerData.name;
  if (passengerData.passport === 235567789) {
    // alert('Please Check in! ');
  } else {
    alert('Your Passport Number is incorrect');
  }
};
checkIn(flight, passengerDetails);
console.log(flight);
console.log(passengerDetails);

// High order function
const removeSpace = function (str) {
  return str.replaceAll('', ' ').toLowerCase();
};
const upperCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Here is the orignal: ${str}`);
  console.log(`Transform to Upper Case: ${fn(str)}`);
  console.log(fn.name);
};
transformer('JavaScript is the best!', upperCase);
transformer('JavaScript is the best!', removeSpace);

// Practice of High Order Function
const splitingOfArray = function (str) {
  return str.split(' ');
};
const transformSplit = function (str, fn) {
  console.log(`Here is the Best version of String: ${fn(str)}`);
};

transformSplit('Why do we fall sir!', splitingOfArray);

// Function return Function
const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};
const greaterHey = greet('Hey');
greaterHey('Ahmad');
greaterHey('Sheraz');

// With Arrow Function

const meetUp = greetings => name => {
  console.log`${greetings} ${name} `;
};
const getTogether = meetUp('Hello');
getTogether('Boys');
// The Call and Apply Method
const PiaAirlines = {
  airline: 'PIA',
  iataCode: 'PA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} books a flight with ${this.airline} code and flight number is ${this.iataCode}${flightNum} `
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum} `, name });
  },
};
PiaAirlines.book(234, 'Ahmad');
PiaAirlines.book(234, 'Kholi');
console.log(PiaAirlines.bookings);

const flyJinnah = {
  airline: 'Fly Jinnah',
  iataCode: 'Fj',
  bookings: [],
};
const book = PiaAirlines.book;

// book(229, 'ahmad');
book.call(flyJinnah, 289, 'Sheraz');
book.call(PiaAirlines, 444, 'Bruce Wayne');

const flyEmirates = {
  airline: 'Fly Emirates',
  iataCode: 'FE',
  bookings: [],
};

// Bind Method
// With the Bind method we attach function to any object
const bookFE = book.bind(flyEmirates);
bookFE(29, 'Mr John Wick');
bookFE(56, 'Ch Sharfat');

// With Event Listners
PiaAirlines.planes = 300;
PiaAirlines.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// This not works because here method is called by button (Query-Selector ) not by Pia Airlines Object
// document.querySelector('.buy').addEventListener('click', PiaAirlines.buyPlanes);

// Here i add bind method which returns a function and this function will be called by PiA airlines Object
document
  .querySelector('.buy')
  .addEventListener('click', PiaAirlines.buyPlanes.bind(PiaAirlines));

// Partial Application
// we apply the bind partial application as bind method return function
//and due to partial we fix the value for rate this the application of bind method
const govTax = (rate, value) => value + value - rate;
const calGovTax = govTax.bind(null, 150);
console.log(calGovTax(200));
// Look we add only the argument for value parameter
console.log(calGovTax(300));
// Practice old Concept Function Return a Function
const taxCal = function (rate) {
  return function (value) {
    console.log(value + value - rate);
  };
};
const finalTaxCal = taxCal(150);
finalTaxCal(250);

// Practice OF Function Methods
// Call Method
const student = {
  name: 'Ahmad Sharafat',
  grade: '10th Class',
  introduce() {
    console.log(`My name is ${this.name} and a student of ${this.grade} `);
  },
};
student.introduce();
const introduction = student.introduce;
const teacher = {
  name: 'Walter White',
  grade: '10th class chemistry teacher  ',
};
introduction.call(teacher);

//Apply Method
const calculator = {
  add(num1, num2) {
    console.log(num1 + num2);
  },
};
calculator.add(23, 50);
const addition = calculator.add;

const math = {
  numbers: [50, 50],
};
addition.apply(math, math.numbers);
//Bind Method Problems
const person = {
  name: 'Donald J Trump',
  greet() {
    console.log(`My Name is ${this.name} Nice to meet you!`);
  },
};
person.greet();
const meeting = person.greet;

const person1 = {
  name: 'Charlie',
};
const hello = meeting.bind(person1);

hello();

// Partial Application Of Bind Method Problem

const multiplication = function (a, b) {
  console.log(a * b);
};
multiplication(20, 12);

 
const double = function (b) {
 
  console.log(a * b);
};
const multiplication1 = multiplication.bind(double, 10);
multiplication1(20);
multiplication1(10)
