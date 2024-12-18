'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-10-15T17:01:17.194Z',
    '2024-10-21T23:36:17.929Z',
    '2024-10-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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
// Options for intl about date and time also locale
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'numeric',
};
const locale = navigator.language;

// Functions
const formattingMovements = function (date, locale) {
  // Here a function recives two inputes one is the dates of old transaction and other is current date
  const calcDayPassed = (date1, date2) =>
    // this operation Minus the old dates to current date to give us days
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDayPassed(new Date(), date);
  // Here are the days on the bases of how old transactions are!
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // This code adds date to the movements on each transaction
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};
// Create a seperate Function for Woking with currency
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
// Displaying Movements through function
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // Sorting of transacion data in assending order
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    // checks the codition deposit or withdrwal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //this line below converts the string to object and we loop to the dates of movements and the index will the same as deposit
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formattingMovements(date, acc.locale);
    const formattingMov = formatCur(mov, acc.locale, acc.currency);
    // The code that adds transctions data into inner html
    const html =
      // The html that has been modified first using template literals
      // Then add as new version back to html file using "insertAdjacentHTML" Method
      `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattingMov}</div>
        </div>`;
    // Adds data to the top of table
    // Necessary method to place the data where you want
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Making th total of all the transcation and adding it using reduce method
const calDisplayBalance = function (acc) {
  // Created new property in accounts object (acc.balance)
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// Change the Text of Summary using Method Chaining
const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  // Calculating the outgoing Summary (withdrawls)
  const outGoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = formatCur(
    Math.abs(outGoing),
    acc.locale,
    acc.currency
  );
  // Calculate the interest rate
  const interestRate = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(
    interestRate,
    acc.locale,
    acc.currency
  );
};

// Creating User names for login
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
};
createUserNames(accounts);
// All Methods in one method when i need to run at once!
const updateUI = function (acc) {
  // Display the Movements
  displayMovements(acc);
  // Display Overall balance
  calDisplayBalance(acc);
  // Display Summary
  calDisplaySummary(acc);
};

// Event Handlers
// The coutdown timer function
const logOutTimer = function () {
  let time = 520;
  // Use the set interval property
  // Call the timer every second to the Ui
  const logTimer = setInterval(function () {
    // Adding minutes
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(logTimer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Login to get started';
    }
    // Decrese the 1 second every second
    time--;
  }, 1000);

  // Return the interval reference so we can clear it later if needed
  // so when can have reference of Logtimer outside the function so we can clear it according to need
  return logTimer;
};
// Login Feature
let currentAccount, logTimer;

btnLogin.addEventListener('click', function (e) {
  // Prevent Form from Submitting
  e.preventDefault();
  //Checking Credentials
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    //  Display the UI and Welcome Messege

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Input Fields Making it Empty after login
    inputLoginPin.value = inputLoginUsername.value = '';
    // Blur input Fields after Login
    inputLoginPin.blur();
    containerApp.style.opacity = 100;
    // Working On the app dates
    const localeDisplay = function (acc) {
      const now = new Date();
      //  Working with intl
      labelDate.textContent = new Intl.DateTimeFormat(
        acc.locale,
        options
      ).format(now);
    };
    localeDisplay(currentAccount);
    // Checking if the timers run already
    // if runing reset it
    if (logTimer) clearInterval(logTimer);
    logTimer = logOutTimer();

    // Update The UI After each Transaction
    updateUI(currentAccount);
  }
});
// Transfer The Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  // Checking if the receiver credentils are right?
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //  Tranfering the Money
    // Here the accout that login will transfer money As current Account
    // And the money is minus from account balance and total balnce , summary update with updatUI function
    currentAccount.movements.push(-amount);
    // Here the money is received by that account which is mentioned by Current login User
    // Same here the reciever got his UI update
    recieverAcc.movements.push(amount);
    // Update The UI After each Transaction
    // The same function make calclation of total Balance and summary after transcation

    // Pushing the Dates to current account
    currentAccount.movementsDates.push(new Date());
    // Pushing dates to reciever acc
    recieverAcc.movementsDates.push(new Date());
    // Reset the logout timer
    clearInterval(logTimer);
    logTimer = logOutTimer();

    updateUI(currentAccount);
  }
});
// Closed the account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    // The findIndex searches for current login account index in accounts array
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete the account or removes from main accounts array
    accounts.splice(index, 1);
    // Upadate the UI
    containerApp.style.opacity = 0;
    // Clearing The forms
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
// Loan Feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    inputLoanAmount.value = '';
    // Add positive movement to the array
    setTimeout(function () {
      currentAccount.movements.push(amount);
      // Pushing the Dates to current account
      currentAccount.movementsDates.push(new Date());
      // Reset the logout timer
      clearInterval(logTimer);
      logTimer = logOutTimer();
      // Update the UI
      updateUI(currentAccount);
    }, 2500);
  }
});

// Sort Handler
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;

});
