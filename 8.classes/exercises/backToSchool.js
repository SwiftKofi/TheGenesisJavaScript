// REFRESHER COURSE
//EXAMPLE ONE OF CREATING AN INSTANCE OF A CLASS
class SurgeonUno {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
}

// 1.Create an instance of the Surgeon class — set the name to 'Francisco Romero' and 
// department to 'Cardiovascular'.Save the instance to a constant variable called 
// surgeonRomero.
const surgeonRomero = new SurgeonUno('Francisco Romero','Cardiovascular')
// console.log(surgeonRomero)


// 2. Create an instance of the Surgeon class — set the name to 'Ruth Jackson' and 
// department to 'Orthopedics'. Save the instance to a constant variable called 
// surgeonJackson.

const surgeonJackson = new SurgeonUno('Ruth Jackson','Orthopedics')
// console.log(surgeonJackson)


//EXAMPLE TWO OF CREATING AN INSTANCE OF A CLASS
class Engineer {
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
}

const engineerKofi = new Engineer('Kofi Otu','Software Engineer')
// console.log(engineerKofi)

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
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero1 = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson1 = new Surgeon('Ruth Jackson', 'Orthopedics');
// console.log(surgeonRomero1.name)
surgeonRomero1.takeVacationDays(3)
// console.log(surgeonRomero1.remainingVacationDays)

// ===========================================================================
// INHERITANCE INHERITANCE INHERITANCE INHERITANCE INHERITANCE INHERITANCE
// ===========================================================================

class HospitalEmployee {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff;
    }
}

class Doctor {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
        this._insurance = insurance;
    }

    takeVacationDays(){

    }
}

class Nurse {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }

    takeVacationDays(){

    }

    addCertification(){

    }
}
//.......................................................................
// SUPER KEYWORD SUPER KEYWORD SUPER KEYWORD SUPER KEYWORD SUPER KEYWORD
//.......................................................................
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log("Your name is", this.name)
        console.log("You are", this.age, "years old")
    }
}

class Student extends Person {
    constructor(name, age, gpa){
        super(name, age)
        this.gpa = gpa;
    }

    hello(){
        super.welcome();
        console.log("Your gpa is", this.gpa)
    }
}

class Teacher extends Person {
    constructor(name, age, classSize){
        super(name,age)
        this.classSize = classSize;
    }

    hello(){
        super.welcome();
        console.log("Your class size", this.classSize)
    }
}

let student = new Student("Gloria Thrush", 28, 3.0)
let teacher = new Teacher("Terry Cornwill", 45, 67)

// student.hello()
// teacher.hello()

// ================================================================================
// STATIC METHOD STATIC METHOD STATIC METHOD STATIC METHOD STATIC METHOD STATIC ME
// ================================================================================

class Car {
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger")

// console.log(Car.numberOfCars);

class People {
    constructor(name,birthYear,gender){
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear)
    }

    static greet(){
        console.log("Hey there, How are you?");
    }
}

// let john = new Person('John', 1990, 'Male')
// console.log(john)

class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
      
    static generateName() {
      const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
      const randomNumber = Math.floor(Math.random()*5);
      return names[randomNumber];
    }
} 

console.log(Animal.generateName());

//========================================================================
// 1. create a Doctor class that inherits from HospitalEmployee.  
// The properties and methods for the Doctor class are listed below
// Doctor properties are _name, _remainingVacationDays (set to 20 inside constructor()),
// _insurance.
// methods: .takeVacationDays()

class HospitalEmployee {
    constructor(name, remainingVacationDays){
        this._name = name;
        this._remainingVacationDays = 20;
    }
}

class Doctor extends HospitalEmployee {
    constructor(name, remainingVacationDays){
        super(name, remainingVacationDays)
    }
}