// This method is used to convert strings into numbers
let num = parseInt('23');
console.log(num);
let num1 = parseInt('23.5');
console.log(num1);
// another Way converting Stings to number is + Method

let num3 = +'1234';
console.log(num3);
// Math square Method
const MathSaquare = Math.sqrt(25);
console.log(MathSaquare);
// Finding Max Value
const MaxValue = Math.max(23, 1, 3, 5, 66, 8);
console.log(MaxValue);
// Finding Min Value
const minValue = Math.min(23, 1, 3, 5, 66, 8);
console.log(minValue);

// Math Random Number generation
const randomint = Math.trunc(Math.random() * 6 + 1);
console.log(randomint);
// Math trunc to round of decimal
const randomf = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomf(10, 20));
// Math Floor
const randomfn = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomfn(10, 20));
