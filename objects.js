/*
// objects {} key: value separated by a comma,
let spaceship = {
  "Fuel Type": "diesel",
  color: "silver",
};
console.log(spaceship);
// spaceship has 2 properties Fuel Type and Color with two values diesel and silver
*/

/*
// access properties
// first way dot notation .
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};
console.log(spaceship);
console.log(`spaceship.homePlanet = ${spaceship.homePlanet}`); // Returns 'Earth',
console.log(`spaceship.color = ${spaceship.color}`); // Returns 'silver',


// second way bracket notation []
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};
console.log(spaceship);
console.log(`spaceship["Active Duty"] = ${spaceship["Active Duty"]}`); // Returns true
console.log(`spaceship["Fuel Type"] = ${spaceship["Fuel Type"]}`); // Returns  'Turbo Fuel'
console.log(`spaceship["numCrew"] = ${spaceship["numCrew"]}`); // Returns 5
console.log(`spaceship["!!!!!!!!!"] = ${spaceship["!!!!!!!!!!!!!!!"]}`); // Returns undefined
*/

/*
// bracket notation with function and prop name
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};
console.log(spaceship);
let returnAnyProp = (objectName, propName) => objectName[propName];
console.log(returnAnyProp.name);
console.log(returnAnyProp);
console.log(
  "returnAnyProp function with spaceship and 'homePlanet' as parameters = " +
    returnAnyProp(spaceship, "homePlanet")
); // Returns 'Earth')

let propName = "Active Mission";
console.log({ propName });
// Write your code below
let isActive = spaceship["Active Mission"];
console.log({ isActive });
console.log(`spaceship[propName] ${spaceship[propName]}`); // true
*/

/*
// updating objects/properties
const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  mission: "Explore the universe",
};
console.log(spaceship);
spaceship.type = "shuttle";
console.log("Added a new key and value with spaceship.type = 'shuttle'");
console.log(spaceship);
spaceship.type = "alien"; // Changes the value of the type property
console.log("Changed value of key type to 'alien' spaceship.type = 'alien'");
console.log(spaceship);
spaceship.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'
console.log("Added a new key and value with spacecship.speed = 'Mach 5'");
console.log(spaceship);

delete spaceship.mission; // Removes the mission property
console.log("delete a key and value with delete spaceship.mission");
console.log(spaceship);
*/
/*
// method, Property values that are functions are referred to as methods. May be defined using anonymous arrow functions or shorthand method. ;
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";
console.log(retreatMessage);

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

console.log(alienShip);

alienShip.retreat(); // "We no longer wish to conquer your planet. It is full of dogs, which we do not care for."
alienShip.takeOff(); // "Spim... Borp... Glix... Blastoff!"

const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log("The engine sputters...");
  },
};
console.log(engine);
engine.start("noisily"); // The engine starts up noisily...
engine.sputter(); // The engine sputters...
*/

/*
//nested objects
const spaceship = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
console.log(spaceship);
console.log("spaceship.nanoelectronics['back-up'].battery");
console.log(spaceship.nanoelectronics["back-up"].battery); // Returns 'Lithium'
*/
/*
// pass by reference
const spaceship = {
  homePlanet: "Earth",
  color: "silver",
};
console.log(spaceship);

let paintIt = (obj) => {
  obj.color = "glorious gold";
};
console.log("paintIt function is " + paintIt);
paintIt(spaceship);
console.log("changed color key value to 'glorious gold'");
console.log(spaceship); // changed color to "glorious gold"
spaceship.color; // Returns 'glorious gold'


let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};
console.log(spaceship);

let greenEnergy = (object) => {
  object["Fuel Type"] = "avocado oil";
};
console.log("greenEnergy function is " + greenEnergy);

let remotelyDisable = (object) => {
  object.disabled = true;
};
console.log("remotelyDisabled function is " + remotelyDisable);

console.log("fuel type changed to avocado oil");
greenEnergy(spaceship);
console.log(spaceship);
console.log("created new key disabled value true");
remotelyDisable(spaceship);
console.log(spaceship);
*/

/*
// looping through objects for.... in ....
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};
console.log(spaceship);
console.log(
  "go through each element in spaceship.crew object.crewmember is set to each spaceship crew name"
);
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
// go through each element in spaceship.crew object. crewmember is set to each spaceship crew name


// example
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};
console.log(spaceship);

for (let variableName in outerObject.innerObject) {
  console.log(
    `${variableName}: ${outerObject.innerObject[variableName].propertyName}`
  );
}
console.log("each crew members role with their name");
for (let crewRole in spaceship.crew) {
  console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`);
}
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna

for (let variableName in outerObject.innerObject) {
  console.log(
    `${outerObject.innerObject[variableName].propertyName}: ${outerObject.innerObject[variableName].differentPropertyName}`
  );
}
console.log("crew name and there qualification");
for (let crewName in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewName].name}: ${spaceship.crew[crewName].degree}`
  );
}

Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science
*/
/*
// the this keyword
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
};
goat.makeSound(); // Prints baaa
//
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(dietType);
  },
};
console.log(goat);
goat.makeSound(); // Prints baaa
goat.diet(); // throw error as dont have access to property
// // Output will be "ReferenceError: dietType is not defined" dont have access to the property of goat object


/////
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};
console.log(goat);
goat.makeSound();
goat.diet();
// Output: herbivore
/*
The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.


////////
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};
console.log(robot);
console.log(robot.provideInfo());
// I am 1E78V2 and my current energy level is 100
*/

/*
// arrow functions and this 
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined
avoid arrow function when using this (global scope thing?)
*/
/*
// privacy
// adding an underscore before a property means should not be altered
const bankAccount = {
  _amount: 1000,
};
console.log("bankAccount object");
console.log(bankAccount);
console.log("bankAccount._account = 1000000, changes key value");
bankAccount._amount = 1000000; // can be reassigned
console.log(bankAccount);

const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};
console.log("robot object");
console.log(robot);
console.log("robot._energyLevel = high, changes key value");
robot._energyLevel = "high";
robot.recharge();
console.log(robot);
// results in Recharged! Energy is currently at high30%.
// can result in unwanted side effects of mutating objects and properties
*/

/*
// Getters methods that get and return internal properties of an object but can do more
const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};
console.log(person);
console.log(person.fullName); // To call the getter method
person.fullName; // 'John Doe'

getter method get keyword followed by function 
if else conditional check if first name and surname exist if truthy return value depending on result
access internal properties using this
call fullname on person 

getters can perform action on data when getting property 
getters can return different conditionals
getter can access properties calling object this 

// example
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return `System malfunction: cannot retrieve energy level`;
    }
  },
};
console.log(robot);
console.log(robot.energyLevel); // My current energy level is 100
*/

/*
///////
// setter methods  reassigns values of existing properties within an object

const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};
console.log(person);
console.log("person property key age value is " + person._age);
// check what value assigned this.age, use setter method only numbers will assign this.age, different outputs depending on what values are reassigned

// use setter method
console.log("person.age uses setter to change age");
person.age = 40;
console.log(person); // Logs: 40
person.age = "40"; // Logs: You must assign a number to age
person._age = "forty-five"; // Logs: You must assign a number to age
console.log(person._age); // Prints forty-five
console.log(person);

// example
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

console.log(robot);
console.log(robot.numOfSensors); // getter method to display the numOfSensors
console.log("uses setter numOfSensors to reassign value");
robot.numOfSensors = 100;
console.log(robot);
console.log(robot.numOfSensors); // getter method display numOfSensors
*/
///

/*
// factory functions create many instances of an object quickly
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};
console.log("monster factory function with multiple parameters");
console.log(monsterFactory);
const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");
console.log("ghost variable saved as monster function with parameters");
console.log(ghost);
console.log("ghost.scare()");
ghost.scare(); // 'BOO!'
// to recreate a new monster just use monster function with parameters

// example
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};
console.log("robotFactory function");
console.log(robotFactory);
const tinCan = robotFactory("P-500", true);
console.log(tinCan);
console.log("tinCan.beep() method beep");
tinCan.beep();
*/

/*
// ES6 new shortcuts for assigning properties to variables known as destructing
const monsterFactory = (name, age) => {
  return {
    name,
    age,
  };
}; // works same as the other monster without repetition
console.log("monsterFactory function refactored");
console.log(monsterFactory);
const bogeyMan = monsterFactory("BogeyMan", 100);
console.log(bogeyMan);

// refactored robot example
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};
console.log("robotFactory function refactored for shorthand");
console.log(robotFactory);
// To check that the property value shorthand technique worked:
const newRobot = robotFactory("P-501", false);
console.log(newRobot.model); // P-501
console.log(newRobot.mobile); // false
console.log(newRobot);
*/

//////
/*
// destructing assignment extract key and value pairs and assign them to variable
const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};
console.log(vampire);
// extract residence
const residence = vampire.residence;
console.log({ residence }); // Prints 'Transylvania'
//
// destructure assignment create variable with name of object key wrapped in {} and assign to object
const { name } = vampire;
console.log({ name }); // Prints 'Transylvania'

// nested properties
const { day } = vampire.preferences;
console.log({ day }); // Prints 'stay inside'

// example
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

console.log(robot);

const { functionality } = robot;
console.log({ functionality });
// calling method on destructed
functionality.beep(); // Beep Boop
*/

/*
//built-in object methods
//Object.keys() gives keys of the object 
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};
console.log("robot object");
console.log(robot);
console.log("robotKeys = Object.keys(robot)");
const robotKeys = Object.keys(robot);

console.log(robotKeys);
// [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
*/

/*
// Object.entries() returns an array containing key and value inside each array in array
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};
console.log("robot object");
console.log(robot);
const robotEntries = Object.entries(robot);
console.log("robotEntries = Object.entries(robot)");
console.log(robotEntries);
// [
//   ["model", "SAL-1000"],
//   ["mobile", true],
//   ["sentient", false],
//   ["armor", "Steel-plated"],
//   ["energyLevel", 75],
// ];
*/

/*
// Object.assign() add new key and value to an object, inside brackets what added then object name separated by comma
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

console.log("robot object");
console.log(robot);

const newRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);
console.log(
  "newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)"
);
console.log(newRobot);
// { laserBlaster: true,
//   voiceRecognition: true,
//   model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75 }

*/
