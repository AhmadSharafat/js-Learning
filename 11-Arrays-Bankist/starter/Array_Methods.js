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

// The New At Method
const arr4 = [23, 35, 56];
// Old Way To get elements from Array
console.log(arr4[0]);
// New At Method
// This At is used only when we want to get last elemnt of Array
console.log(arr4.at(1));
console.log(arr4.at(-1));

// At Method Also Works For string
console.log('Ahmad'.at(2));

// Transaction Data Using For Of Loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// For Of Loop with Indexes Of Array
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement indexes: ${i + 1}  You deposited ${movement}`);
  } else {
    console.log(
      `Movement indexes: ${i + 1} You withdrew ${Math.abs(movement)}`
    );
  }
}
// For Each Method
console.log('----For Each----');

// For Each is a high order function we give Callback Function to tell it what to do
// In this example after each iteration the elements store in movement Argument
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

console.log('---For Each With Indexes----');
// For Each with Indexes
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement indexes: ${i + 1}  You deposited ${movement}`);
  } else {
    console.log(
      `Movement indexes: ${i + 1} You withdrew ${Math.abs(movement)}`
    );
  }
});

const num = [1, 2, 3, 4, 5];
num.forEach((numbers, index) => {
  console.log(`These are the indexes: ${index} and final numbers ${numbers} `);
});

// for Each For maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((values, keys, map) => {
  console.log(`${keys}: ${values} `);
});
