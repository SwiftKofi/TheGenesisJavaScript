//Exercise 1: - WHILE LOOPS
// Write a while loop that randomly selects and prints three elements 
// from an array of numbers
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let count_1 = 0;
while (count_1 < 3) {
    const randomIndex = Math.floor(Math.random() * arrayNumbers.length);
    const randomElement = arrayNumbers[randomIndex];
    // console.log(randomElement);
    count_1+=1;
}

// Exercise 2:
// Create a while loop that randomly selects and prints five names 
// from an array of strings.

const arrayStrings = ['goat','sheep','duck','lion','tiger','cat','cow'];

let count_2 = 0;
while (count_2 < 5){
    const randomIndex_2 = Math.floor(Math.random() * arrayStrings.length);
    const randomElement_2 = arrayStrings[randomIndex_2];
    // console.log(randomElement_2);
    count_2++;
}


// Exercise 3:
// Write a while loop that randomly selects and prints four colors 
// from an array of color names
const rainbowCult = ['red','gold','green','purple','blue'];

let count_3 = 0;
while (count_3 < 4){
    const randomIndex_3 = Math.floor(Math.random() * rainbowCult.length);
    const randomElement_3 = rainbowCult[randomIndex_3];
    // console.log(randomElement_3);
    count_3++;
}


// Exercise 4:
// Create a while loop that randomly selects and prints two fruits 
// from an array of fruit names.
const fruits = ['banana','pawpaw','mango','pear','strawberry'];
let count_4 = 0;

while (count_4 < 2){
    const randomIndex_4 = Math.floor(Math.random() * fruits.length);
    const randomElement_4 = fruits[randomIndex_4];
    // console.log(randomElement_4);
    count_4++;
}

// Exercise 5:
// Write a while loop that randomly selects and prints three 
// characters from an array of characters.

const arrayCharacter = ['@','~','%','+'];
let count_5 = 0;

while (count_5 < 3){
    const randomIndex_5 = Math.floor(Math.random() * arrayCharacter.length);
    const randomElement_5 = arrayCharacter[randomIndex_5];
    // console.log(randomElement_5);
    count_5++;
}

// Exercise 6:
// Create a while loop that randomly selects and prints six 
// elements from an array of any type.
const vehicles = ['saloon car','aeroplane','truck','scooter','helicopter','ship','submarine'];

let count_6 = 0;
while(count_6 < 6){
    const randomIndex_6 = Math.floor(Math.random() * vehicles.length);
    const randomElement_6 = vehicles[randomIndex_6];
    // console.log(randomElement_6);
    count_6++;
}

// Exercise 7:
// Write a while loop that randomly selects and prints four 
// words from an array of sentences.
const words = ['hello','a javaScript','seasoned','developer','from','london'];
let count_7 = 0;

while (count_7 < 4){
    const randomIndex_7 = Math.floor(Math.random() * words.length);
    const randomElement_7 = words[randomIndex_7];
    // console.log(randomElement_7);
    count_7++;
}

// Exercise 8:
// Create a while loop that randomly selects and prints three 
// animals from an array of animal names.

const animal = ['goat','fowl','snake','rabbit'];
let count_8 = 0;

while(count_8 < 3) {
    const randomIndex_8 = Math.floor(Math.random() * animal.length);
    const randomElement_8 = animal[randomIndex_8];
    // console.log(randomElement_8);
    count_8++;
}


// Exercise 9:
// Write a while loop that randomly selects and prints five even 
// numbers from an array of numbers.

const numbers = [1,2,3,4,5,6,7,8,9,10,12,14,16];
let count_9 = 0;

while (count_9 < 5){
    const randomIndex_9 = Math.floor(Math.random() * numbers.length);
    const randomElement_9 = numbers[randomIndex_9];

    if (randomElement_9 % 2 === 0){
        // console.log(randomElement_9);
    }
    count_9++;
}

// Exercise 10:
// Create a while loop that randomly selects and prints two 
// odd numbers from an array of numbers.

const arrayNum = [1,2,3,4,5,6,7,8,9,10,12,14,16];
let count_10 = 0;

while (count_10 < 2){
    const randomIndex = Math.floor(Math.random() * arrayNum.length);
    const randomElement_10 = arrayNum[randomIndex];
    if (randomElement_10 % 2 === 1){
        // console.log(randomElement_10);
    }
    count_10++;
}


// Exercise 11:
// Write a while loop that randomly selects and prints four characters 
// from an array of letters ('a', 'b', 'c', 'd', 'e', 'f', 'g').

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let count_11 = 0;

while (count_11 < 4){
    const randomIndex_11 = Math.floor(Math.random() * letters.length);
    const randomElement_11 = letters[randomIndex_11];
    // console.log(randomElement_11);
    count_11++;
}


// Exercise 12:
// Create a while loop that randomly selects and prints five country names 
// from an array of countries.

const country = ['Ghana','Mali','Malawi','Algeria','Sudan','Togo'];
let count_12 = 0;

while(count_12 < 5){
    const randomIndex = Math.floor(Math.random() * country.length);
    const randomElement_12 = country[randomIndex];
    // console.log(randomElement_12);
    count_12++;
}


// Exercise 13:
// Write a while loop that randomly selects and prints three prime numbers 
// from an array of numbers.

const primeNumbers = [1,2,3,4,5,6,7,8,9,10,12,14,16];
let count_13 = 0;
let index = 0;

while (count_13 < 3 && index < primeNumbers.length) {
    const currentNumber = primeNumbers[index];

    if(isPrime(currentNumber)) {
        // console.log(currentNumber);
        count_13++;
    }

index++;
}

function isPrime(number){
    if(number < 2){
        return false;
    }

   for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % 2 === 0){
        return false;
    }

   }

   return true;
}

// Exercise 14:
// Create a while loop that randomly selects and prints six words from an 
// array of sentences.

const sentences = ['i am', 'a lovely','human','bring him','to us','on a friday','so we kill j=him','and eat him','human meat','is delicious'];
let count_14 = 0;

while (count_14 < 6){
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomElement = sentences[randomIndex];

    // console.log(`This is a joke: ${randomElement}`);
    count_14++;
}


// Exercise 15:
// Write a while loop that randomly selects and prints four unique elements 
// from an array of numbers, ensuring no element is repeated in the output.

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,12,14,16];
let count_15 = 0;

while (count_15 < 4){
    const randomeIndex = Math.floor(Math.random() * arrayOfNumbers.length);
    const randomElement = arrayOfNumbers[randomeIndex];

    // console.log(randomElement);
    count_15++;
}

// Exercise 16:
// Write a while loop that randomly selects and prints three prime numbers 
// from an array of numbers.

const threePrimeNums = [1,2,3,4,5,6,7,8,9,10,12,14,16];

let count = 0;
let index_15 = 0;

while (count < 3 && index < threePrimeNums.length){
    const currentNumber_15 = threePrimeNums[index];

    if(isPrime(currentNumber_15)){
        // console.log(currentNumber_15);
        count++;
    }
    index++;
}

function isPrime(number) {
    if(number<2){
        return false;
    }

    for(let i=2; i<Math.sqrt(number); i++){
        if(number % 2 === 0 ){
            return false;
        }
    }
    return true;
}

// Exercise 16:
// Write a while loop that randomly selects and prints five prime numbers 
// from an array of numbers.
const fivePrimeNums = [1,2,3,4,5,6,7,8,9,10,12,14,16];
let count_16 = 0;
let index_16 = 0;

while (count_16 < 5 && index_16 < fivePrimeNums.length){
    const currentNumber = fivePrimeNums[index_16];
    if(isPrime_16(currentNumber)){
        // console.log(currentNumber);
        count_16++;
    }
    index_16++;
}

function isPrime_16(number) {
    if (number <= 1){
        return false;
    }

    for (let i=2; i<=Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }

    return true;
}

// Exercise 17:
// Write a while loop that randomly selects and prints prime numbers from 
// an array until a non-prime number is encountered.

const nonPrimeNums = [2,3,4,5,6,7,8,9,10,12,14,16];


while (true){
    const randomIndex = Math.floor(Math.random() * nonPrimeNums.length);
    const randomNonPrimeNumber = nonPrimeNums[randomIndex];

    if (isPrime_17(randomNonPrimeNumber)){
        // console.log(randomNonPrimeNumber);
    } else {
        break;
    }

}

function isPrime_17(number){
    if (number <= 1){
        return false;
    }

    for (let i=2; i<=Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}


// Exercise 18:
// Write a while loop that randomly selects and prints prime numbers from an 
// array until the sum of the selected prime numbers exceeds a certain threshold.

const numbers_gpt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const threshold = 50;

let randomIndex;
let randomElement;
let sum = 0;

while (sum <= threshold) {
  randomIndex = Math.floor(Math.random() * numbers_gpt.length);
  randomElement = numbers_gpt[randomIndex];
  
  if (isPrime(randomElement)) {
    sum += randomElement;
    // console.log(randomElement);
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}


// Exercise 19:
// Write a while loop that randomly selects and prints prime numbers from an array 
// until the product of the selected prime numbers exceeds a certain limit.

const primeNumbers_Gpt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
let aCertainLimit = 50;
let product = 1;

while (product <= aCertainLimit){
    const randomIndex_19 = Math.floor(Math.random() * primeNumbers_Gpt.length);
    const randomElement_19 = primeNumbers_Gpt[randomIndex_19];

    if(isPrime_19(randomElement_19)){
        product*=randomElement_19;
        // console.log(randomElement_19);
    } 
}

function isPrime_19(number){
    if (number <= 1){
        return false;
    }

    for (let i=2; i<-Math.sqrt(number); i++){
        if (number%i === 0){
            return false;
        }
    }

    return true;
}


// Exercise 20:
// Write a while loop that randomly selects and prints prime numbers from an array 
// until a prime number greater than 100 is encountered.
const numbers_20 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];

let randomIndex_20;
let randomElement_20;

while (true) {
  randomIndex_20 = Math.floor(Math.random() * numbers_20.length);
  randomElement_20 = numbers_20[randomIndex_20];
  
  if (randomElement_20 > 100) {
    // console.log(randomElement_20);
    break; // Exit the loop when a prime number greater than 100 is encountered
  }
}


// const animals = 'cat';
 
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// //   for (let j = 1; j < 4; j++) {
// //     console.log(j);
// //   }
// }
// const numerals = [1,2,3,4,5,6]
// var numi = numerals.length - 1;
// for (let numi = 1; numi <= numerals.length ; numi++) {
//     console.log(numerals[numi]);
// }

const bumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var num = bumber.length - 1;

while(num >= 0){
    // console.log(bumber[num]);
    num--;
}

const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}