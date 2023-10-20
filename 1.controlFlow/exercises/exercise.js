//QUE1
let isNightTime=true;
const lightHouse = isNightTime ? 'Turn on the lights!' : 'Turn off the lights!';
// console.log(lightHouse)

//QUE2
let isCorrect = true;
let rightAnswer = isCorrect ? 'Correct!' : 'Incorrect!';
// console.log(rightAnswer)


//QUE3
let favoritePhrase = 'Love That!';
const bestPhrase = favoritePhrase === 'Love That!' ? 'I love that!' : "I don't love that!";
// console.log(bestPhrase)


//QUE4
let stopLight = 'yellow';
const trafficLight = stopLight === 'red' ? 'Stop!' : stopLight === 'yellow' ? 'Slow down.' : stopLight === 'green' ? 'Go!' : 'Caution, unknown!';
// console.log(trafficLight)


//QUE5
let season = 'winter';
let changingSeason = season === 'spring' ? 'It\'s spring! The trees are budding!' : season === 'winter' ? 'It\'s winter! Everything is covered in snow.' : 'Invalid season.';
// console.log(changingSeason);


//QUE6
let groceryItem = 'tomato';
const shoppingCart = groceryItem === 'tomato' ? 'Tomatoes are $0.49' : groceryItem === 'papaya' ? 'Papayas are $1.29' : 'Invalid item';
// console.log(shoppingCart);


//QUE7 - Check if a number is positive or negative
const num1 = -10
const checker = num1 < 0 ? `${num1} is a negative number` : num1 > 0 ? `${num1} is a positive number` : 'Invalid entry';
// console.log(checker)


//QUE8 - Check if a person is eligible to vote
const eligibleAge = 15;
const eligibleChecker = eligibleAge >= 18 ? 'can vote' : 'under age';
// console.log(eligibleChecker)


// QUE9 - Check if a string is empty or not
const emptyString = 'Hello';
const stringSolution = emptyString === '' ? 'Empty' : 'Not empty';
// console.log(stringSolution)

// QUE10 - Determine the type of a value
const valueType = typeof(false);
const resultValueType = valueType === 'number' ? 'value is number' : valueType === 'string' ? 'value is a string' : valueType === 'boolean' ? 'value is a boolean' : 'invalid';
// console.log(resultValueType)

// QUE11
const year = 2023;
const CheckResult = year % 4 !== 0 ? false : year % 100 !== 0 ? true : year % 400 !== 0 ? false : true;
// console.log(CheckResult)

// QUE 12 - Check if a number is even or odd.
const number = 11
const oddEven = number % 2 === 0 ? `${number} is an Even number` : number % 2 === 1 ? `${number} is an Odd number` : 'Invalid';
// console.log(oddEven)

// QUE 13 - Determine the maximum of two numbers.
const num_1 = 6
const num_2 = 14
const maxNum = num_1 > num_2 ? `${num_1} is the maximum of the two` : num_2 > num_1 ? `${num_2} is the maximum of the two` : 'Invalid';
// console.log(maxNum);

// QUE 14 - Determine the grade of a student based on their exam score.
const grade  = 'H'
const results = grade === 'A' ? `${grade} is distinction` : grade === 'B' ? `${grade} is excellent` : grade === 'C' ? `${grade} is good` : grade === 'F' ? `${grade} is fail` : 'invalid';
// console.log(results);

// QUE 15 - Determine the largest of three numbers.
const num_a = 10
const num_b = 111
const num_c = 12
const result_l = num_a > num_b && num_a > num_c ? `${num_a} is the largest of the 3` : num_b > num_a && num_b > num_c ? `${num_b} is the largest of the 3` : num_c > num_a && num_c > num_b ? `${num_c} is the largest of the 3` : 'Invalid';
// console.log(result_l)

// QUE 16 - Check if a given number is positive, negative, or zero.
const number_s = 0
const result_num = number_s > 0 ? `${number_s} is a positive number` : number_s === 0 ? 'entry is 0' : number_s < 0 ? `${number_s} is negative` : 'invalid entry';
// console.log(result_num)



  

