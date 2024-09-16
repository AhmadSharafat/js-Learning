'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order (starterIndex, menuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },
};




// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const [index,item] of menu.entries())  {
//   console.log(`${index+1}: ${item}`);
// };

//const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days.entries()) {
//   console.log(days);

// }



// const [starter, main] = restaurant.order(2, 1);
// console.log(starter, main);

// const data = [10, [20, 30], [40, [50, 60]], 70];

// const [first, [second, third], [fourth, [fifth, sixth]], seventh] = data;
// console.log(first, second);

// const scores = [90, 85, , 70];

// const [one, , , three, four = 2] = scores;
// console.log(one, three, four);

// Desturcturing Of Objects

// const person = {
//   name: 'Ahmad',
//   age: 20,
//   address: 'Pakistan',
// };
// const { name, age } = person;
// console.log(name, age);

// // Rename Of Objects

// const { name: hisName, age: hisAge, address: hisLocation } = person;
// console.log(hisName, hisAge, hisLocation);

// //Function Implementations

// const obj = ({ name, age }) => {
//   console.log(`this is my name: ${name} and here is the age: ${age} `);
// };
// obj(person);

// const car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2021,
// };

// // Your code here
// const { make } = car;
// const { model } = car;
// const { year } = car;
// console.log(make, model, year);
// //example 2
// const book = {
//   title: '1984',
//   author: 'George Orwell',
// };

// // Your code here
// const { title, author, rating = 5 } = book;
// console.log(title, author, rating);
// //Example 3

// const movie = {
//   name: 'Inception',
//   director: 'Christopher Nolan',
//   releaseYear: 2010,
// };

// // Your code here
// const {
//   name: movieName,
//   director: directorName,
//   releaseYear: whichYear,
// } = movie;
// console.log(movieName, directorName, whichYear);
// //example 4
// const employee = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   address: {
//     city: 'San Francisco',
//     zip: '94101',
//   },
// };

// // Your code here
// const {
//   firstName,
//   lastName,
//   address: { city, zip },
// } = employee;
// console.log(firstName, lastName, city, zip);
// //example 5
// const user = {
//   username: 'johndoe',
//   email: 'johndoe@example.com',
//   location: 'California',
// };

// // Your code here
// const displayUser = ({ username, email, location }) => {
//   console.log(`The name of the user is:${username} and If you want to contact the user here is the Email:${email}
//   also the location:${location}`);
// };

// displayUser(user);

// the Spread Operator
//Example 1

// const number = [1, 2, 3, 4, 5];
// const copyOfNumber = [...number, 6, 7];
// console.log(number);
// console.log(copyOfNumber);

// //Example 2
// const fruits = ['Apples', 'Mangoes', 'Banana', 'Strawberry'];
// const vegetables = ['Potates', 'Pulses', 'gabages'];
// const allMaterial = [...fruits, 'Vagina', ...vegetables];
// console.log(allMaterial);

// //Example 3

// const obj1 = {
//   name: 'Ahmad',
//   lastName: 'Sharafat',
//   Email: 'chaudharyahm12@gmail.com',
//   age: 20,
// };
// const obj2 = { ...obj1, address: 'Burjmahalam' };
// console.log(obj2);

// Rest operators
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(10, 20, 30);
// add(45, 50, 80);

// const prison = [12, 'Ahmad', 'Sexy Lady', 22];
// const [age, name, ...others] = prison;
// console.log(prison);

// const ahmadDetails = [1, 2, 3, 4];
// const moreDetails = [...ahmadDetails, 5, 6, 7];
// console.log(moreDetails);

// const [...more] = ahmadDetails;
// const adds = [...more, 22];
// console.log(adds);

//OR OPERATOR

// const ahmad = function (name) {
//   name = name || 'Guest';
//   console.log(name);
// };
// ahmad(23);

// let person1 = 20;
// let person2 = 'Ahmad';

// const finalData = person2 || person1;
// console.log(finalData);

// // It Checks the condition from left to right (Evaluation ) untill the one operand is true!!
// const personName = '';
// const defaultName = 'Ahmad';
// let displayName = personName || defaultName;
// console.log(displayName);

// // Or operation in If Conditions

// let numbers = '';
// let letters = '';

// if (letters || numbers) {
//   console.log('Or Operator Works');
// } else {
//   console.log('Not Working');
// }

//Basic Examples 
// console.log(23 || 'Ahmad');
// console.log('' || 23);
// console.log('' || undefined || 0 || 'Ahmad');

// //And Operators Example

// console.log(undefined && 'Ahmad');
// console.log(7 && 'Ahmad');


// //when first operand is only null and undefined this operator returns 2nd operand 
// console.log(null ?? 'YOO');
// console.log(undefined ?? 42);

// // when there is another falsey values in first operand it returns first value unlike Or Operator

// console.log(0 ?? 23);
// console.log('' ?? 'broo');

// // Logical Operator


// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// }
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Ahmad Bro',
// };
// // without logical Operator Example only OR Operator
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests = rest1.numGuests || 10;
// console.log(rest2);
// console.log(rest1);

// // With Logical Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);


// //nullish  Assignment operator ??

// const rest3 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// rest3.numGuests ??= 10;
// console.log(rest3);


// // Looping on objects with key, entries, values methods
// let person = {
//   name: "Sheraz",
//   age: 15,
//   address: "Pakistan",
  
// };
// //keys
// let personKeys = Object.keys(person);
// console.log(personKeys);
// //Values
// let personValues = Object.values(person);
// console.log(personValues);
// //entries
// let personEntries = Object.entries(person);
// console.log(personEntries);

// for (let x1 of personKeys ) {
//   console.log(`Please Fill these Details ${x1}: `);
// };
// for (let x1 of personValues) {
//   console.log(`These are the details ${x1}`);
// }


// const rest = new Map();
//   console.log(rest.set('y', 'YOO')); 
// rest.set('openTime', 10);
// rest.set('closeTime', 20);
// console.log(rest.set('name', 'Burj-Khalifa'));
// console.log(rest.get('name'));

// const allArrays = new Map([
//   ['question', 'Which is the best programming Language in the World '],
//   [1, 'C'],
//   [2, "JAva"],
//   [3, 'JavaScript'],
//   [true, "Correct"],
//   [false,'Wrong Mate'],

// ])
// console.log(allArrays);

// for (const [keys, values] of allArrays) {
//   if (typeof keys === 'number') {
//     console.log(`Answer : ${keys}  ${values}`);
//   }
// }
// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// console.log(allArrays.get(allArrays.get('Correct')=== answer));


class Animal {
  constructor(name) {
    this.name=name
  }
  speak() {
    console.log(`${this.name} is the name of Dog`);
  }
}

const animal = new Animal("Sexy");
animal.speak();

//Subclass

class snake extends Animal{
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }
  speak() {
    console.log(`My Name is ${this.name} and When i see a girl i make a sound ${this.sound}`);
  }
}

const cobra = new snake('Cobra', 'Suuuii');
cobra.speak();
console.log(cobra.name, cobra.sound);


// Implementing An array

class MyArray{
  constructor() {
    this.length = 0;
    this.data = {};

  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.length ;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]
    return lastItem
  }
  delete(index) {
    delete this.data[index];
    this.shiftitems[index];
    this.length--

  }
  shiftitems(index) {
    for (let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArray = new MyArray()
newArray.push('hi');
newArray.push('Boobs')
newArray.push('Ahmad')
newArray.push('Yoo');
newArray.push('sexy');

newArray.delete(2);
newArray.delete(4)


console.log(newArray);
      
// Reverse String 
function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
   return newString
}

console.log(reverseString('ahmad'));

function reverseString1(str1) {
  let spliting = str1.split('');
   let reverseIt = spliting.reverse('');
  return reverseIt.join('');
}
console.log(reverseString1('ahmad'));

// Merge Arrays
// const firstArray = [0,3,4,31];
// const secondArray = [4,6,30];



//My attempt For Merge Sort Arryays

// const result = [];


// function mergeSoretedArrays(firstArray, secondArray) {
//   for (let i = 0; i <firstArray.length; i++){
//     const indexFirst = 1;
//     result.push(0, indexFirst);

//   }
//   for (let i = 0; i < secondArray.length; i++) {
//     const secondFrist = 1;
//     result.push(0, secondFrist);
   
//   }

 
// return result
// }
// console.log(mergeSoretedArrays([0, 3, 4, 31]));
// console.log(mergeSoretedArrays([4, 6, 30]));



// Solution Of Merge Sort Arrays

// function mergeSortedArrays(firstArray, secondArray) {
//   const result = []; // Initialize result array inside the function
//   let i = 0;
//   let j = 0;

  // Loop through both arrays and merge them into the result array
  //   while (i < firstArray.length && j < secondArray.length) {
  //     if (firstArray[i] < secondArray[j]) {
  //       result.push(firstArray[i]);
  //       i++;
  //     } else {
  //       result.push(secondArray[j]);
  //       j++;
  //     }
  //   }

  //   // Add any remaining elements from firstArray
  //   while (i < firstArray.length) {
  //     result.push(firstArray[i]);
  //     i++;
  //   }

  //   // Add any remaining elements from secondArray
  //   while (j < secondArray.length) {
  //     result.push(secondArray[j]);
  //     j++;
  //   }

  //   return result; // Return the merged result array
  // }

  // // Example usage
  // console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
  // // Output: [0, 3, 4, 4, 6, 30, 31]



//   function mergeSoretedArrays2(first, second) {
//     const result = [];
//     let i = 0;
//     let j = 0;
//     for (; i < first.length && j < second.length;) {
//       if (first[i] < second[j]) {
//         result.push(first[i])
//         i++
//       }
//       else {
//         result.push(second[j])
//         j++
//       }
//     }

//     for (; i < first.length; i++){
//           console.log(`Adding remaining from first: ${first[i]}`);
//       result.push(first[i]);
      

//     }
//     while ( j < second.length) {
//           console.log(`Adding remaining from second: ${second[j]}`);
//       result.push(second[j]);
//       j++
     
//     }



//     return result

//   }

// console.log(mergeSoretedArrays2([0, 3, 4, 31], [4, 6, 30]));

// const airline = 'Tap Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[3]);
// console.log(plane.length);
// console.log(plane.indexOf('A'));
// console.log(airline.slice(4, 9));
// console.log(airline.slice(0, airline.indexOf('r')));
// console.log(airline.slice(0, airline.lastIndexOf()));

// console.log(airline.slice(1, -1))

const planeTicket=function(seat){
const s = seat.slice(-1);
if(s ==='B'||s ==='A')
  console.log("You got lucky mate!");

 
 else
    console.log('you got unlucky');
  

}
planeTicket('11B');
planeTicket('23E');
planeTicket('34A');
const email = 'chaudharyahm12@gmail.com'
const loginEmail = '   ChaudhAry12@GmAil.Com ';


const lowerCaseEmail = email.toLowerCase().trim();
// const removeEmailSpace = email.trim();
console.log(lowerCaseEmail);

if (email === lowerCaseEmail) {
  console.log('The user write the correct email:)');
  // alert("Cheery Cheery lady");
} else {
  console.log('Try Again!')
}

// Strings Replace Method
const clothPrice = "2590$";
const newClothPrice = clothPrice.replace('5', '8');
console.log(newClothPrice);

const announcement = 'All i need is the loyalty , and loyalty';
console.log(announcement.replaceAll('loyalty','pink pussy'));

//Bolean Method of string

const personData = 'Ahmad Sharafat Age 20 and virgin';
const normalizePersonData = personData.toLowerCase();
console.log(normalizePersonData.includes('ahmad'));
console.log(normalizePersonData.startsWith('ahmad'));

