//================================================================================
// CLASS IN JS CLASS IN JS CLASS IN JS CLASS IN JS CLASS IN JS CLASS IN JSCLASS
//================================================================================
// QUE1
class Surgeon {
    constructor(name, department){
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get department(){
        return this._department;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        return this._remainingVacationDays = this._remainingVacationDays - daysOff
    }
}

//INSTANCES
const surgeonRomero = new Surgeon('Francisco Romero','Cardiovascular')
const surgeonJackson = new Surgeon('Ruth Jackson','Orthopedics')
surgeonRomero.takeVacationDays(5)
surgeonJackson.takeVacationDays(7)
console.log(surgeonJackson)

//TASK 2
class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`
    }

    set FullName(newFullName){
        const [firstName, lastName] = newFullName.split(' ');
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

const person = new Person('John', 'Doe')
// console.log(person)

person.FullName = 'Jane Smith';
// console.log(person)

// person.FullName = 'Jane Smith';
// console.log(person.fullName); // Output: Jane Smith


class Car {
    constructor(name, make, price){
        this._name = name;
        this._make = make;
        this._price = price;
    }

    get name(){
        return `This is a ${this._name}`
    }

    get make(){
        return `from the ${this._make} company`
    }

    get price(){
        return `and its pricy it cost £${this._price} to purchase one`
    }

    set PriceyPrice(newPrice){
        this._price = newPrice;
    }

}

class LandRover extends Car {
    england(){
        console.log("This is UK's top car brand")
    }
}

class RollsRoyce extends Car {
    unitedStates(){
        console.log("This is one of America's top brand")
    }
}

class MercedesBenz extends Car{
    germany(){
        console.log("This is Germany's most trusted brand")
    }
}

const landrover = new LandRover("Range Rover", "Land Rover", 100000);
// console.log(landrover.name)
// console.log(landrover.make)
// console.log(landrover.price)
// const rollsroyce = new RollsRoyce();
// const mercedesbenz = new MercedesBenz();
// landrover.england()
// rollsroyce.unitedStates()
// mercedesbenz.germany()

let car = new Car('Range Rover','Land Rover', 50000);
// console.log(car.name)
// console.log(car.make)
// console.log(car.price)

class Animal {
    constructor(){
        this.alive = true;
    }

    eat(){
        console.log("I am eating")
    }
}

class Rabbit extends Animal {
    run(){
        console.log("I am a fast runner and my meat is good for diabetic patients")
    }
}

class Snake extends Animal {
    slither(){
        console.log("A snake cannot be trusted, it slithers")
    }
}

class Lion extends Animal {
    roar(){
        console.log("The lion is the king of the jungle")
    }
}

const rabbit = new Rabbit()
// const snake = new Snake()
// const lion = new Lion()
// rabbit.run()
// snake.slither()
// lion.roar()
// console.log(rabbit.alive)

//===========================================================================
// Inheritance
class Persona {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`
    }

    set fullName(newName){
        const [firstName, lastName] = newFullName.split('')
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// const persona = new Persona('John', 'Doe')
// console.log(persona)

// persona.FullName = 'Jane Smith';
// console.log(persona)

//==================================================================================
// FACTORY FUNCTIONS FACTORY FUNCTIONS FACTORY FUNCTIONS FACTORY FUNCTIONS FUNCTIONS
//==================================================================================

function createPerson(firstName, lastName, age) {
    return {
      firstName,
      lastName,
      age,
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
      greet() {
        console.log(`Hello, my name is ${this.fullName()} and I'm ${this.age} years old.`);
      }
    };
  }
  
//   const person1 = createPerson('John', 'Doe', 30);
//   const person2 = createPerson('Jane', 'Smith', 25);
  
//   person1.greet(); // Output: Hello, my name is John Doe and I'm 30 years old.
//   person2.greet(); // Output: Hello, my name is Jane Smith and I'm 25 years old.

//==================================================================================
//  SUPER KEYWORD IN CLASSES SUPER KEYWORD IN CLASSES SUPER KEYWORD IN CLASSES 
//==================================================================================

class Personne {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Personne {
    constructor(name, age, gpa){
        super(name, age)
        this.gpa = gpa
    }
}

class Teacher extends Personne {
    constructor(name, age, classSize){
       super(name,age);
        this.classSize = classSize;
    }
}

let student = new Student("Steve", 21, 2.0);
console.log(student)

let teacher = new Teacher("David", 32, 100)
console.log(teacher)

//==================================================================
// class Buildings {
//     constructor(floors, room){
//         this.floors = floors;
//         this.room = room;
//     }

//     floors(){
//         return `This building has ${this.floors} floors`
//     }

// }

// class Rooms extends Building {
//     constructor(rooms, toilets){
//         this.rooms = rooms;
//         this.toilets = toilets;
//     }

//     rooms(){
//         return `${this.rooms}`;
//     }
// }

// const building = new Building(3)
// console.log(building.floors)
