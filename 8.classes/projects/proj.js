
class Building {
    constructor(name, totalFloors) {
      this.name = name;
      this.totalFloors = totalFloors;
      this.floors = [];
  
      for (let i = 0; i < totalFloors; i++) {
        this.floors.push(new Floor(i + 1));
      }
    }
  
    addRoom(floorNumber, roomNumber, roomType) {
      if (floorNumber <= 0 || floorNumber > this.totalFloors) {
        console.log(`Invalid floor number. The building has ${this.totalFloors} floors.`);
        return;
      }
  
      this.floors[floorNumber - 1].addRoom(new Room(roomNumber, roomType));
    }
  
    getFloor(floorNumber) {
      if (floorNumber <= 0 || floorNumber > this.totalFloors) {
        console.log(`Invalid floor number. The building has ${this.totalFloors} floors.`);
        return null;
      }
  
      return this.floors[floorNumber - 1];
    }
}
  
class Floor {
    constructor(floorNumber) {
      this.floorNumber = floorNumber;
      this.rooms = [];
    }
  
    addRoom(room) {
      this.rooms.push(room);
    }
}
  
class Room {
    constructor(roomNumber, roomType) {
      this.roomNumber = roomNumber;
      this.roomType = roomType;
    }
}
  
// Example usage:
const myBuilding = new Building("ABC Tower", 10);
  
myBuilding.addRoom(1, 101, "Office");
myBuilding.addRoom(1, 102, "Conference Room");
myBuilding.addRoom(2, 201, "Apartment");
myBuilding.addRoom(2, 202, "Apartment");
  
// console.log(myBuilding.getFloor(1));
// console.log(myBuilding.getFloor(2));

//===================================================================================
//===================================================================================

class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get _isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  set _isCheckedOut(value){
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating(){
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }

  addRating(value){
    this.ratings.push(value)
  }
}