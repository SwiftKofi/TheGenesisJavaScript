// let isNightTime = true;
 
// if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }

// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// let season = 'summer';

// if (season === 'spring') {
//     console.log('Its spring! The trees are budding!');
// } else if (season === 'yellow') {
//     console.log('Slow down.');
// } else if (season === 'winter') {
//     console.log('Its winter! Everything is covered in snow.');
// } else  {
//     console.log('Invalid season.');
// }

// let stopLight = 'yellow';
 
// if (stopLight === 'red') {
//   console.log('Stop!');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down.');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }

// let groceryItem = 'papaya';
 
// if (groceryItem === 'tomato') {
//   console.log('Tomatoes are $0.49');
// } else if (groceryItem === 'papaya'){
//   console.log('Papayas are $1.29');
// } else {
//   console.log('Invalid item');
// }

// let groceryItem = 'papaya';
// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default:
//     console.log('Invalid item');
//     break;
// }

// function multiplyByNineFifths(number) {
//   return number * (9/5);
// };
 
// function getFahrenheit(celsius) {
//   return multiplyByNineFifths(celsius) + 32;
// };
 
// console.log(getFahrenheit(15))

// const flowers = ['peony', 'daffodil', 'marigold'];
 
// function addFlower(arr) {
//   arr.push('lily','orchid');
// }
 
// addFlower(flowers);
 
// console.log(flowers);

// var fruits = ['apple', 'banana', 'orange', 'kiwi'];

// var replacedElements = fruits.splice(2, 0, 'mango', 'pear');
// console.log(fruits);  // Output: ['apple', 'banana', 'mango', 'pear', 'kiwi']
//console.log(replacedElements);   Output: ['orange']

// const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
// countries.shift();
// console.log(countries); 
// countries =  ['England', 'Mozambique', 'Cambodia', 'Peru']; 
// console.log(countries); 

// let x = 5;
// let y = 10;

// let stopLight = 'red';

// let result =
//   stopLight === 'red' ? 'Stop!' :
//   stopLight === 'yellow' ? 'Slow down.' :
//   stopLight === 'green' ? 'Go!' :
//   'Caution, unknown!';

// console.log(result);

// const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// let newAnimalList = []
// for (let i = 0; i < animals.length; i++){
//   if (animals[i] === 'Sloth'){
//     newAnimalList.push(animals[i])
//     console.log(newAnimalList);
//   }
// }


var bobsFollowers = ['Ali','Ahmed','Idris','Edem'];

var tinasFollowers = ['Ali','Ahmed','Saka'];
var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j],bobsFollowers[i]); 
    }
  }
}

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

const fruits = ['apple', 'banana', 'orange', 'kiwi'];

let randomFruit;
while (!randomFruit) {
  const index = Math.floor(Math.random() * fruits.length);
  randomFruit = fruits[index];
}

// console.log(randomFruit);


//Finding the prime number of elements in a numbers array
function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Divisible by a number other than 1 and itself
    }
  }

  return true; // The number is prime
}

const roadTrip = () => {
  const destination = 'Crater Lake, Oregon';
  const snacks = 'trail mix';
  const supplies = 'sleeping bags';
};
 
console.log(`Next stop: ${destination}`);