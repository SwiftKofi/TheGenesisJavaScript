// ====================================================================================
// THE THIS KEYWORD THE THIS KEYWORD THE THIS KEYWORD THE THIS KEYWORD THE THIS KEYWORD
// ====================================================================================
// QUE1
const robot = {
    energyLevel:100,
    model:'1E78V2',
    provideInfo(){
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

// console.log(robot.provideInfo())

// ===========================================================================
// ARROW FUNCTION AND 'this' KEYWORD ARROW FUNCTION AND 'this' KEYWORD KEYWORD
// ===========================================================================

// QUE2
const clark = {
    energyLevel: 100,
    praise:'23-T',
    checkEnergy() {
      return `Energy is currently at ${this.energyLevel}%.`
    }
};
  
// console.log(clark.checkEnergy())


// =========================================================================
// PRIVACY PRIVACY PRIVACY PRIVACY PRIVACY PRIVACY PRIVACY PRIVACY PRIVACY
// =========================================================================

// QUE3
const robotes = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    },
    
    set adjustEL(val){
        this._energyLevel = val
    }
};

// robotes.adjustEL = 'High'
// console.log(robotes.recharge())


// =========================================================================
// GETTER & SETTER GETTER & SETTER GETTER & SETTER GETTER & SETTER & GETTER
// =========================================================================

//QUE4 - FIRST EMP
const facebook_emp_1 = {
    name: 'John',
    job: 'Sales Team', 
    salary: 2500, 
    age: 25, 
    hobbies:['Sky Diving', 'Wine Tasting'], 
    nationality: 'Ghanaian',
    residence:'Spintex',

    get userDetails(){
        return `${this.name}, ${this.job}, ${this.salary}, ${this.age}, ${this.hobbies}, ${this.nationality}, ${this.residence}`
    },

    set newHobby(val){
        this.hobbies = val
    }
}

// console.log(facebook_emp_1.userDetails)
// facebook_emp_1.newHobby = 'Deep Sea Diving'
// console.log(facebook_emp_1.userDetails)

// SECOND EMP
const facebook_emp_2 = {
    name: 'Dave',
    job: 'Accounts Team', 
    salary: 3000, 
    age: 29, 
    hobbies:['Bike racing', 'singing'], 
    nationality: 'Turkey',
    residence:'Istanbul',

    get userDetails(){
        return `${this.name}, ${this.job}, ${this.salary}, ${this.age}, ${this.hobbies}, ${this.nationality}, ${this.residence}`
    },

    set newHobby(val){
        console.log('Setting a new hobby: ')
        this.hobbies = val
    }
}

// console.log(facebook_emp_2.userDetails)
// facebook_emp_2.newHobby = 'Deep Sea Diving'
// console.log(facebook_emp_2.userDetails)

const facebook_emp_3 = {
    name: 'Carla',
    job: 'UX/UI Design', 
    salary: 3000, 
    age: 31, 
    hobbies:['Mountain Climb', 'Dancing'], 
    nationality: 'Britain',
    residence:'London',

    get userDetails(){
        return `${this.name}, ${this.job}, ${this.salary}, ${this.age}, ${this.hobbies}, ${this.nationality}, ${this.residence}`
    }, 

    set newHobby(val){
        console.log('Setting New Hobby: ')
        this.hobbies = val
    }
}

// console.log(facebook_emp_3.userDetails)
// facebook_emp_3.newHobby = '[Deep Sea Diving]'
// console.log(facebook_emp_3.userDetails)


const facebook_emp_4 = {
    name: 'Jane',
    job: 'Frontend Developer', 
    salary: 3000, 
    age: 31, 
    hobbies:['Mountain Climb', 'Dancing'], 
    nationality: 'Britain',
    residence:'London',

    get userDetails(){
        return `${this.name}, ${this.job}, ${this.salary}, ${this.age}, ${this.hobbies}, ${this.nationality}, ${this.residence}`
    },

    set newHobby(val){
        console.log("Setting New Hobby: ")
        this.hobbies = val
    }
}

// console.log(facebook_emp_4.userDetails)
// facebook_emp_4.newHobby = '{Deep Sea Diving}'
// console.log(facebook_emp_4.userDetails)


const facebook_emp_5 = {
    name: 'Alice',
    job: 'Backend Developer', 
    salary: 3800, 
    age: 30, 
    hobbies:['Wrestling', 'Gym'], 
    nationality: 'Scotish',
    residence:'Aberdeen',

    get userDetails(){
        return `${this.name}, ${this.job}, ${this.salary}, ${this.age}, ${this.hobbies}, ${this.nationality}, ${this.nationality}`
    }, 

    set newHobby(val){
        console.log('Setting a new hobby: ')
        this.hobbies = val
    }
}

// console.log(facebook_emp_5.userDetails)
// facebook_emp_5.newHobby = '{DEEP SEA DIVING}'
// console.log(facebook_emp_5.userDetails)


// ===============================================================================
// EXERCISE ON GETTERS EXERCISE ON GETTERS EXERCISE ON GETTERS EXERCISE ON GETTERS
// ===============================================================================
// QUE5
const robotos = {
    _model: '1E78V2',
    _energyLevel: 65,

    get energyLevel(){
        if(typeof this._energyLevel === 'number'){
            return `My current energy level is ${this._energyLevel}`
        } else {
            return 'System malfunction: cannot retrieve energy level'
        }
    }
}
// console.log(robotos.energyLevel)




// ===============================================================================
// EXERCISE ON SETTERS EXERCISE ON SETTERS EXERCISE ON SETTERS EXERCISE ON SETTERS 
// ===============================================================================

// QUE6 - OBJ_1
const person_1 = {
    name: 'Joe',
    _age:27,

    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge
        } else{
            console.log('Enter a number for age: ')
        }
    }
}
// person_1.age = 34
// console.log(person_1._age)

// OBJ 2
const person_2 = {
    name:'Janet',
    _age:26,

    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge
        } else {
            console.log('Enter a number')
        }
    }
}

// person_2.age = 290
// console.log(person_2._age)


//OBJ -3
const person_3 = {
    _age:40,
    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge
        } else {
            console.log('Enter a valid age')
        }
    }
}
// person_3.age = '51'
// console.log(person_3._age)

// OBJ - 4
const person_4 = {
    _age:62,
    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge
        } else {
            console.log('Enter A Valid Age')
        }
    }
}

// person_4._age = 23
// console.log(person_4._age)

// OBJ - 5
const person_5 = {
    _age:279,
    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge
        } else {
            console.log('Enter a valid age')
        }
    }
}
// person_5._age = 26
// console.log(person_5._age)

// QUE7
const robotic = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },

    set numOfSensors(num){
        if(typeof num === 'number' && num >= 0){
            this._numOfSensors = num
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    } 
    
};

// robotic._numOfSensors = 100
// console.log(robotic._numOfSensors)

// QUE8
const menu = {
    _meal:'',
    _price:0,
  
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string'){
        return this._meal = mealToCheck
      }
    }, 
  
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return this._price = priceToCheck
      }
    },
  
    get todaysSpecial(){
      if(typeof this._meal === 'string' && typeof this._price === 'number'){
        return 'Todays Special is Spaghetti for $5!'
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  }

//   menu.meal = 'Rice and chicken stew'
//   menu.price = 50
//   menu.todaysSpecial
//   console.log(menu.todaysSpecial)

// ==================================================================================
// TEAM STATS PROJECT TEAM STATS PROJECT TEAM STATS PROJECT TEAM STATS PROJECT TEAM 
// ==================================================================================
const team = {
    _players:[
        {firstName:'Drogba', lastName:'Didier', age:23},
        {firstName:'Mikel', lastName:'Obi', age:21},
        {firstName:'Fernandao', lastName:'Torres', age:19}
    ],

    _games:[
        {opponent: 'Inter Milan', teamPoints: 32, opponentPoints:15},
        {opponent: 'Everton', teamPoints: 29, opponentPoints:19},
        {opponent: 'Barcalona', teamPoints: 39, opponentPoints:12}
    ],

    _totalGames:[],

    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    get totalGame(){
        this._games
    },

    addPlayer(newFirstName,newLastName,newAge){
        let player = {
            firstName:newFirstName, 
            lastName:newLastName, 
            age:newAge
        };

        this.players.push(player)
    },

    addGame(newOpponent,newTeamPoints,newOpponentPoints){
        let game = {
            opponent:newOpponent, 
            teamPoints:newTeamPoints, 
            opponentPoints:newOpponentPoints
        };

        this._games.push(game)
    }
}

// let totalGames = 0;

// team._games.forEach((teamObj, index) => {
//     totalGames+=teamObj.teamPoints;
//     console.log(`Team ${index + 1}`)
//     console.log(`Points: ${teamObj.teamPoints}`)
// })
// console.log(`Total Points: ${totalGames}`);

let bikes = {
    schwinn: 'blue',
    trek: 'black'
}
bikes['fruits'] = 'Banana'
console.log(bikes)

