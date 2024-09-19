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
    alert('Please Check in! ');
  } else {
    alert('Your Passport Number is incorrect');
  }
};
checkIn(flight, passengerDetails);
console.log(flight);
console.log(passengerDetails);

// High order function
const removeSpace = function (str) {
  return str.replaceAll('', '-').toLowerCase();
};
const upperCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join();
};
