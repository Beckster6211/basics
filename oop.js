// console.log("oop");

// intro to classes
// object orientated programming oop
// classes tool used to quickly produce simular objects

/*
// dog #1
let halley = {
  _name: "Halley",
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  },
};
console.log(halley);
console.log(halley.name);
console.log(halley.behavior);
// increment behaviour of halley with function method inside object
halley.incrementBehavior();
console.log(halley.behavior);

*/

// wanted add more dogs can just create a dog class
/*
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
console.log("class Dog");
console.log(Dog);

const halley = new Dog("Halley");
console.log("new halley object/instance");
console.log(halley);
console.log("new halley object/instance key-name with value-"); // Print name value to console
console.log(halley.name);
console.log("new halley object/instance key-behaviour with value-"); // Print behavior value to console
console.log(halley.behavior);
console.log(
  "new halley object/instance with incrementBehaviour method acted on it"
);
halley.incrementBehavior(); // Add one to behavior
console.log(halley.behavior); // Print new behavior value to console
*/

/*
// js calls the constructor method every time creates a new instance of class
// Dog name of the class (capitial letter)
// constructor accepts an argument (name)
// inside constructor use this keyword, use this to set the value of Dog instance name property to the name argument
// create property behaviour tracks dog misbehaves initially 0

// instances An instance is an object that contains the property names and methods of a class, but with unique property values.
// class Dog {
//   constructor(name) {
//     this.name = name;
//     this.behavior = 0;
//   }
// }

// const halley = new Dog('Halley'); // Create new Dog instance
// console.log(halley.name); // Log the name value saved to halley
// // Output: 'Halley'

// new keyword create instance of Dog class
// new variable halley store instance of Dog class
// new keyword generate new instance of Dog, new word calls constructor runs code inside and then returns the new instance
// pass "Halley" string to Dog constructor sets name property to "Halley"
// log value saved to name key in halley object (consoles "Halley")

// example
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
console.log(Surgeon);
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
console.log(surgeonRomero);
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");
console.log(surgeonJackson);
*/

/*
// class methods and getter syntax same as objects but not including commas between

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
console.log(Dog);
const halley = new Dog("Halley"); // create Dog class, create instance and save to variable halley

let nikko = new Dog("Nikko"); // Create dog instance named Nikko
console.log(nikko);
console.log("nikko increment key behaviour value by 1");
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
console.log(`nikko behaviour is now ${nikko.behavior}`); // Logs 1 to the console
let bradford = new Dog("Bradford"); // Create dog instance name Bradford
console.log(bradford);
console.log(`bradford behaviour is ${bradford.behavior}`); // Logs 0 to the console
// create 2 Dog instancecs nikko and bradford
// increment behaviour of nikko but not bradford
// nikko.behaviour returns 1 (bradford.behaviour returns 0)


// example
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
console.log(Surgeon);
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
console.log(surgeonRomero);
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");
console.log(surgeonJackson);

console.log(`surgeonRomero.name is ${surgeonRomero.name}`); // Francisco Romero
console.log(
  "Use takeVacationDays function on surgeonRomero.takeVacationDays(3)"
);
surgeonRomero.takeVacationDays(3);
console.log(
  `surgeonRomero has ${surgeonRomero.remainingVacationDays} remaining vacation days`
); // 17

*/
/*
// inheritance 1
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
console.log(Dog);

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
console.log(Cat);

// create Cat class shares a few properties with Dog class (_name, _behaviour and a method incrementBehaviour())
// the cat class also contains property _usesLitter with boolean value
// multiple classes share properties or methods they candidates for inheritence
// inheritence means can create a parent class (known as super class) with properties and methods that multiple child classes (subclasses) share
// child classes inherit properties and methods from parent class
// extract shared properties and methods from Cat and Dog classes into parent class Animal
*/

/*
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

console.log(Animal);
console.log(
  "Animal is parent class and contains what the child(children) class shares"
);
/*
// inheritance 2 
Cat class that will inherit from Animal 
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}

example 
class HospitalEmployee{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20
  }

  get name(){
    return this._name
  }

  get remainingVacationDays(){
    return this._remainingVacationDays
  }

  takeVacationDays(daysOff){
    return this._remainingVacationDays = this._remainingVacationDays - daysOff
  }
}
*/

/*
// inheritence 3 shared properties and methods in Animal class
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
console.log(Animal);

// extend to subclass Cat
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
console.log(Cat);

const bryceCat = new Cat("Bryce", false);
console.log(bryceCat);
console.log(`bryceCat._name ${bryceCat._name}`); // output: Bryce

// create new class Cat extends Animal class
// keywords extends and super
// extends keyword makes method of animal class avaliable inside cat class
// constructor called create new Cat object accepts name and usesLitter
// super keyword calls constructor of parent, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
// _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor
// In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.


// example
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
console.log(HospitalEmployee);

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name, certifications);
    this._certifications = certifications;
  }
}

console.log(Nurse);
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
console.log(nurseOlynyk);
*/

// inheritence 4
/*
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
console.log(Animal);

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
console.log(Cat);
const bryceCat = new Cat("Bryce", false);
console.log(bryceCat);
console.log("bryceCat.incrementBehaviour() function method and getter");
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance
console.log(bryceCat.behavior); // Log value saved to behavior 1

// Cat class extends Animal, cat class has access to Animal getters and incrementBehaviour() method
// create cat instance bryceCat (bryceCat has acces to name getter the console log Bryce, console.log(bryceCat.name);)

The Cat class inherits the _behavior property, behavior getter, and the .incrementBehavior() method from the Animal class.
When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.
The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one
The second line of code calls the behavior getter and logs the value saved to _behavior (1)

*/

/*
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
console.log(HospitalEmployee);

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

console.log(Nurse);
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
console.log(nurseOlynyk);
console.log("nurseOlynyk.takeVacationDays(5)");
nurseOlynyk.takeVacationDays(5);
console.log(
  `nurseOlynyk.remainingVacationDays ${nurseOlynyk.remainingVacationDays}`
); // 15

*/

/*
// inheritence 5
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
}
// create useLitter getter in Cat class returns _usesLitter 
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}

// additional dog class 
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
*/
/*
// example
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
console.log(HospitalEmployee);

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}
console.log(Nurse);

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
console.log(nurseOlynyk);
nurseOlynyk.takeVacationDays(5);
console.log(
  `nurseOlynyk.takeVacationDays(5) results in nurseOlynyk.remainingVacationDays-${nurseOlynyk.remainingVacationDays}`
); // 15
nurseOlynyk.addCertification("Genetics");
console.log(
  `nurseOlynyk.addCertification('Genetics') results in nurseOlynyk.certifications - ${nurseOlynyk.certifications}`
); // [("Trauma", "Pediatrics", "Genetics")];
*/

/*
/// static methods
// Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

// Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now() method is static, so you can call it directly from the class, but not from an instance of the class.

// Let’s see how to use the static keyword to create a static method called generateName method in our Animal class:
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
    const randomNumber = Math.floor(Math.random() * 5);
    return names[randomNumber];
  }
}
console.log(Animal);
console.log("Animal.generateName()");
console.log(Animal.generateName());
console.log("Won't work when called on an instance of Animal class");
console.log(
  "const tyson = new Animal('Tyson'); tyson.generateName(); would display error"
);
/*
In the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

We call the .generateName() method with the following syntax:
console.log(Animal.generateName()); // returns a name

You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).

// example
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 100);
  }
}
console.log(HospitalEmployee);

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

console.log(Nurse);
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);
*/
