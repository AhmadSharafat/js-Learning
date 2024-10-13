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

// The code that adds transctions data into inner html
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // Sorting of transacion data in assending order
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html =
      // The html that has been modified first using template literals
      // Then add as new version back to html file using "insertAdjacentHTML" Method
      `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
        <div class="movements__value">${mov}€</div>
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
  labelBalance.textContent = `${acc.balance} EUR`;
};

// Change the Text of Summary using Method Chaining
const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  // Calculating the outgoing Summary (withdrawls)
  const outGoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outGoing)}€`;
  // Calculate the interest rate
  const interestRate = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interestRate}€`;
};

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
const updateUI = function (acc) {
  // Display the Movements
  displayMovements(acc.movements);
  // Display Overall balance
  calDisplayBalance(acc);
  // Display Summary
  calDisplaySummary(acc);
};
// Event Handlers
// Login Feature
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent Form from Submitting
  e.preventDefault();
  //Checking Credentials
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //  Display the UI and Welcome Messege

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Input Fields Making it Empty after login
    inputLoginPin.value = inputLoginUsername.value = '';
    // Blur input Fields after Login
    inputLoginPin.blur();
    containerApp.style.opacity = 100;

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
    updateUI(currentAccount);
  }
});
// Closed the account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    inputLoanAmount.value = '';
    // Add positive movement to the array
    currentAccount.movements.push(amount);
    // Update the UI
    updateUI(currentAccount);
  }
});

// Sort Handler
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
