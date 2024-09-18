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
