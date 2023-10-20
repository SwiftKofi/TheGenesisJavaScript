const transportation = ['car','scooter','airplane','truck','helicopter'];
const numbers = [1,2,3,4,5,6,7,8,9]
const animals = ['cat','sheep','snake','dog','lion','goat'];
let newArr = [];

// for (num in numbers){
//     newArr.push(numbers[num] * 3)
// }
// console.log(newArr);
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

for (vehicle of transportation){
    if(vehicle === 'scooter') continue;
   // console.log(vehicle)
}

animals.forEach(aboa => {
    if(aboa === 'snake'){
        return;
    }
    //console.log(aboa);
});

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 1) {
        continue; // Skip the current iteration of the inner loop
      }
      //console.log(i, j);
    }
}

const words = ['hello', 'world', 'javascript'];
words.forEach((word, index, array) => {
  array[index] = word.toUpperCase();
});
//console.log(words);

//add numbers 1 to 100 using a for loop
let total=0;
for(let i=0; i<=100; i++){
    total = total + i;
}
//console.log('The total is: '+total);

// Objects dont have indexes
// We access objects by properties
// To loop through objects we use for in loop

var data = {
    name: "John",
    age:28,
    maritalStatus: true
}
for(var elem in data){
    console.log(elem, data[elem]);
}

// console.log(data.age)