'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array Methods
// Slice Method is used to create New Array just like in string
// It does not change the orignal array!
const arr = ['a', 'b', 'c', 'e', 'd', 'f', 'g'];
console.log(arr.slice(2));
console.log(arr.slice(2, 6));
console.log(arr.slice(-2));
console.log(arr.slice(2, 5));
console.log(arr.slice(2, 3));
console.log(arr.slice());

// Splice Method
//The Splice Method does change the orignal Array
// When we get elements using splice method the extracted elemts del from orignal array
arr.splice(-1);
console.log(arr);
arr.splice(1, 3);
console.log(arr);

const arr1 = ['1', '2', '3', '4', '5', '6'];
// Add the new element In Place Of Index 1

//  "------This Method also Change the Orignal Array------"
arr1.splice(1, 1, '0');
console.log(arr1);
// Delete the elements from Index 0 to Index 3 and return Remaining Element
arr1.splice(0, 3);
console.log(arr1);

// Reverse Method Of Array

// This Method is used to reverse the Array Properties

const arr2 = ['x', 'y', 'z', 'a', 'b', 'c'];
//  "------This Method also Change the Orignal Array------"
arr2.reverse();
console.log(arr2);

arr1.reverse();
console.log(arr1);

// Concat Method
// this Method is used to combine two Arrays

//  "------This Method does not Change the Orignal Array------"

const arr3 = ['p', 'b', 'j', 'd', 'l', 'm'];

// This method we need to chose which array to combine with Whom!

console.log(arr2.concat(arr3).reverse());
