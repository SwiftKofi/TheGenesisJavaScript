// ==========================================================================
// ACCESSING VALUES WITH DOT NOTATION ACCESSING VALUES WITH DOT NOTATION 
// ==========================================================================

// Object - One
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// QUE1.0 Let’s use the dot operator to access the value of all properties from the 
// spaceship object. 
// E.g, Create a variable crewCount and assign the spaceship‘s numCrew property to it.

const planet = spaceship.homePlanet
// console.log(planet)

// QUE1.1 
const spaceshipColor = spaceship.color
// console.log(spaceshipColor)

// QUE1.2
const crewCount = spaceship.numCrew
// console.log(crewCount)

// QUE1.3 
const flightPath = spaceship.flightPath
// console.log(flightPath)

//Object - Two
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
};

// QUE1.4
const bookTitle = book.title
// console.log(bookTitle)

// QUE1.5
const bookAuthor = book.author
// console.log(bookAuthor)

// QUE1.6
const bookYear = book.year
// console.log(bookYear)

// QUE1.7
const bookGenre = book.genre
// console.log(bookGenre)

// =============================================================================
// ACCESSING VALUES WITH BRACKET NOTATION ACCESSING VALUES WITH BRACKET NOTATION 
// =============================================================================

let spaceship_Bracket = {
    'home Planet': 'Earthlene',
    'color scheme': 'silver',
    'Fuel Type': 'Turbo Fuel',
    'number of Crew': 5,
    'flight Path': ['Venus', 'Mars', 'Saturn']
};

// QUE2.0 
const planet_1 = spaceship_Bracket["home Planet"]
// console.log(planet_1)

// QUE2.1
const colorscolors = spaceship_Bracket["color scheme"]
// console.log(colorscolors)

// QUE2.2
const petrolType = spaceship_Bracket["Fuel Type"]
// console.log(petrolType)

// QUE2.3
const crewMembers = spaceship_Bracket["number of Crew"]
// console.log(crewMembers)

// QUE2.4
const flightTrajectory = spaceship_Bracket["flight Path"]
// console.log(flightTrajectory)

// ==========================================
// DELETING PROPERTIES AND THEIR VALUES
// ==========================================

// QUE2.5 
delete spaceship_Bracket["home Planet"]
// console.log(spaceship_Bracket)

// QUE2.6
delete spaceship_Bracket["color scheme"]
// console.log(spaceship_Bracket)

// QUE2.7
delete spaceship_Bracket["Fuel Type"]
// console.log(spaceship_Bracket)

// QUE2.8
delete spaceship_Bracket["number of Crew"]
// console.log(spaceship_Bracket)

// QUE2.9
delete spaceship_Bracket["flight Path"]
// console.log(spaceship_Bracket)

// Object - Two
const bookProp = {
    'Book title': "The Great Gatsby",
    'Book author': "F. Scott Fitzgerald",
    'Release year': 1925,
    'Book genre': "Fiction",
};

// QUE2.5
const book_Title = bookProp["Book title"]
// console.log(book_Title)

// QUE2.6
const book_author = bookProp["Book author"]
// console.log(book_author)

// QUE2.7 
const release_year = bookProp["Release year"]
// console.log(release_year)

// QUE2.8
const book_genre = bookProp["Book genre"]
// console.log(book_genre)

// ==========================================
// DELETING PROPERTIES AND THEIR VALUES
// ==========================================


// QUE2.9
delete bookProp["Book title"] 
// console.log(bookProp)

// QUE2.10
delete bookProp["Book author"]
// console.log(bookProp)

// QUE2.11
delete bookProp["Release year"]
// console.log(bookProp)

// QUE2.12
delete bookProp["Book genre"]
// console.log(bookProp)

// ==========================================
// PROPERTY ASSIGNMENT PROPERTY ASSIGNMENT
// ==========================================
let spaceXship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };

//3.0 Reassign the color property of the spaceship object to have a value 
// of 'glorious gold'

spaceXship['mineral'] = 'glorious gold'
spaceXship.color = 'glorious gold'
// console.log(spaceXship)

// QUE3.1 add a numEngines property with a numeric value between 1 and 10 to the 
// spaceship object
spaceXship['numEngines'] = 6
// console.log(spaceXship)


// ===============================================================================
// METHODS METHODS METHODS METHODS METHODS METHODS METHODS METHODS METHODS METHODS
// ===============================================================================
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// QUE 3.2 Below the retreatMessage variable in the code editor, 
// create an alienShip object. It should contain a method retreat() 
// which will console.log() the retreatMessage.

// QUE 3.3 Add another method to your object literal. This method, takeOff(), should 
// console.log() the string 'Spim... Borp... Glix... Blastoff!'.

const alienShip = {
    retreat: function(){
        console.log(retreatMessage)
    }, 

    takeOff: function(){
        console.log('Spim... Borp... Glix... Blastoff!')
    }
}

// QUE 3.4 Invoke your two methods: first .retreat() then .takeOff().
// alienShip.retreat()
// alienShip.takeOff()


// QUE4.0. Sure, here's another example of an object with methods. Let's create 
// an object to represent a basic calculator that can perform addition, subtraction, 
// multiplication, and division:

const calculator = { 
    add: function(num1, num2){
        return num1 + num2;
    },

    subtract: function(num1, num2){
        return num1 - num2;
    }, 

    divide: function(num1, num2){
        if(num2 !== 0){
            return num1 / num2
        } else {
            return 'Cannot be divided by zero';
        }
    },

    multiply: function(num1, num2){
        return num1 * num2
    }
}

// console.log(calculator.add(2,2))
// console.log(calculator.subtract(12,2))
// console.log(calculator.multiply(12,2))
// console.log(calculator.divide(12,2))

// QUE4.1 Create an object to return full name of 5 users and increase age by 1. 
// 3 are female and 2 are males.

//user1
const users = {

    firstname: 'Joe',
    lastname: 'Doe',
    age: 30,

    getFullname: function(){
        return this.firstname + " " + this.lastname;
    },

    increaseAge: function(){
        return this.age++;
    }
};

// console.log(users.getFullname())
// users.increaseAge()
// console.log(users.age)

// user 2
const user_2 = {
    fistname: 'Janet',
    lastname: 'Arundel',
    age: 56,

    getFullname: function(){
        return this.fistname + " " + this.lastname;
    },

    increaseAge: function(){
        return this.age++;
    }

};
// console.log(user_2.getFullname())
// user_2.increaseAge()
// console.log(user_2.age)

// user_3
const user_3 = {
    firstname: "Jolene",
    lastname: "Ayat",
    age: 29,

    getFullname: function(){
        return this.fistname + " " + this.lastname;
    },

    increaseAge: function(){
        return this.age++;
    }

}

// console.log(user_3.getFullname())
// user_3.increaseAge()
// console.log(user_3.age)


const user_4 = {
    firstname: "Jennifer",
    lastname: "LawsonDough",
    age:67,

    getFullname: function(){
        return this.firstname + " " + this.lastname;
    },

    increaseAge: function(){
        return this.age++;
    }
}

// console.log(user_4.getFullname())
// user_4.increaseAge()
// console.log(user_4.age)

const user_5 = {
    fistname: 'Gerald',
    lastname: 'Lavender',
    age: 24,

    getFullname: function(){
        return this.fistname + " " + this.lastname;
    },

    increaseAge: function(){
        return this.age++;
    }
}

// console.log(user_5.getFullname())
// user_5.increaseAge()
// console.log(user_5.age)


// ==========================================================================
// NESTED OBJECTS NESTED OBJECTS NESTED OBJECTS NESTED OBJECTS NESTED OBJECTS
// ========================================================================== 

let nestedSpaceship = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 

// QUE5.0 - Get Captains favorite food 
const capFave = nestedSpaceship.crew.captain["favorite foods"][0]
// console.log(capFave)

// QUE5.1 
// change the value of passenger from null to name: 'Space Dog'

// QUE5.2 
const firstpassenger = nestedSpaceship.passengers[0]
// console.log(firstpassenger)

// QUE5.3.0
const spacePassenger = nestedSpaceship.passengers
// console.log(spacePassenger)

// QUE5.3.1
const spaceTools = nestedSpaceship.telescope.focalLength
// console.log(spaceTools)

// QUE5.3.2
const spaceTools_year = nestedSpaceship.telescope.yearBuilt
// console.log(spaceTools)

// QUE5.3.3
const spaceTools_model = nestedSpaceship.telescope.model
// console.log(spaceTools_model)

// QUE5.3.4
const spaceCrew = nestedSpaceship.crew
// console.log(spaceCrew)

// QUE5.3.5
const spaceCaptain = nestedSpaceship.crew.captain
// console.log(spaceCaptain)

// QUE5.3.6
const spaceCaptainName = nestedSpaceship.crew.captain.name
// console.log(spaceCaptainName)

// QUE5.3.7
const spaceCaptainDegree = nestedSpaceship.crew.captain.degree
// console.log(spaceCaptainDegree)

// QUE5.3.8
// const spaceCaptainTeams = nestedSpaceship.crew.captain.encourageTeam();

// QUE5.3.9
const spaceCaptainFood = nestedSpaceship.crew.captain["favorite foods"]
// console.log(spaceCaptainFood)

// QUE5.3.10
const spaceShipEngine = nestedSpaceship.engine.model
//console.log(spaceShipEngine)

// QUE5.3.11
const spaceShipNano = nestedSpaceship.nanoelectronics
// console.log(spaceShipNano)

// QUE5.3.12
const spaceShipNanoComputer = nestedSpaceship.nanoelectronics.computer
// console.log(spaceShipNanoComputer)

// QUE5.3.13
const spaceShipNanoSize = nestedSpaceship.nanoelectronics.computer.terabytes
// console.log(spaceShipNanoSize)

// QUE5.3.14
const spaceShipNanoMonitor = nestedSpaceship.nanoelectronics.computer.monitors
// console.log(spaceShipNanoMonitor)

// QUE5.3.15
const spaceShipBackUp = nestedSpaceship.nanoelectronics["back-up"]
// console.log(spaceShipBackUp)

// QUE5.3.16
const spaceShipBattery = nestedSpaceship.nanoelectronics["back-up"].battery
// console.log(spaceShipBattery)

// QUE5.3.17
const spaceShipTerabyte = nestedSpaceship.nanoelectronics["back-up"].terabytes
// console.log(spaceShipTerabyte)




// ==========================================================================
// PASSBY REFERENCE PASSBY REFERENCE PASSBY REFERENCE PASSBY REFERENCE
// ========================================================================== 
let xspaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};


// QUE6.0
let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil',
    obj['homePlanet'] = 'Mars'
}

// QUE6.1
let remotelyDisable = obj => {
    obj.disable = true
}

// greenEnergy(xspaceship)
// remotelyDisable(xspaceship)
// console.log(xspaceship)

// QUE6.3 - Function that modifies the property of an object
function modifyObj(obj){
    obj.name = "John";
    obj.age = 30;
}

// Original Obj
const person = {
    name:"Alice",
    age:27
}

// console.log("Before ModifyObject: ", person);
// modifyObj(person)
// console.log("After ModifyObj: ", person);


// ==========================================================================
// LOOPING THROUGH OBJECTS LOOPING THROUGH OBJECTS LOOPING THROUGH OBJECTS 
// ==========================================================================

let spaceXshipNimbus = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
// QUE7.0 Using for...in, iterate through the spaceship.crew object in the 
// code editor and console.log() a list of crew roles and names in the following 
// format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.

for(let crewMembers in spaceXshipNimbus.crew) {
    // console.log(`${crewMembers}: ${spaceXshipNimbus.crew[crewMembers].name}`)
}

// QUE7.1 Using for...in, iterate through the spaceship.crew object in the code editor 
// and console.log() a list of crew names and degrees in the following 
// format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
for(let crewMembers in spaceXshipNimbus.crew){
    console.log(`${spaceXshipNimbus.crew[crewMembers].name}: ${spaceXshipNimbus.crew[crewMembers].degree}`)
}