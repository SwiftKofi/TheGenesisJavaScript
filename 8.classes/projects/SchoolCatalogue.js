class School {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name(){
      return this._name;
    }
  
    get level(){
      return this._level;
    }
  
    get numberOfStudents(){
      return this._numberOfStudents;
    }
  
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      const randInt = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[randInt];
    }
  
    set numberOfStudents(value){
      if (typeof value === 'number'){
        console.log(this._numberOfStudents);
      } else {
        console.log('Invalid Input')
      }
    }
}
  
class PrimarySchool extends School {
    constructor(name,level,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
}
  
class HighSchool extends School {
    constructor(name,numberOfStudents,sportsTeam){
      super(name,'high',numberOfStudents);
      this._sportsTeam = sportsTeam;
    }
  
    get sportsTeams(){
      console.log(this._sportsTeams);
    }
}
  
const lorraineHansbury = new PrimarySchool('Loraraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams','J.R. Smith','James Harden','Jason Terry','Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith',415, ['Baseball','VolleyBall', 'Track and Field']);
console.log(alSmith.sportsTeams.env.PWD);

console.log(process.env.PWD);