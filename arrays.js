/////////////////////////////////////
// arrays [] square brackets
// stores data, array like list
//  based index
/*
const hobbies = ["drawing", "cartoons", "canvas"];
console.log({ hobbies });
console.log({ hobbies });
console.log({ hobbies });
*/

/*
const hello = "Hello World";
console.log({ hello });
console.log(hello[6]);
//displays W

let seasons = ["Winter", "Spring", "Summer", "Fall"];
console.log(seasons);
seasons[3] = "Autumn";
console.log(seasons);
// Output: ["Winter", "Spring", "Summer", "Autumn"];
*/

/*
// array methods
// .length returns amount in an array
const newYearsResolutions = ["Keep a journal", "Take a falconry class"];
console.log({ newYearsResolutions });
console.log(newYearsResolutions.length);
// Output: 2;

// .push() adds to end of array
const itemTracker = ["item 0", "item 1", "item 2"];
console.log(itemTracker);
itemTracker.push("item 3", "item 4");
console.log(itemTracker);
// Output: ["item 0", "item 1", "item 2", "item 3", "item 4"];

// .pop() removes last element in array
const newItemTracker = ["item 0", "item 1", "item 2"];
console.log(newItemTracker);
const removed = newItemTracker.pop();
console.log(newItemTracker);
//Output: ["item 0", "item 1"];
console.log(removed);
// Output: item 2

// .shift() removes first from array and returns it
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
console.log(groceryList);
groceryList.shift();
console.log(groceryList);
//returns [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

// .unshift() adds one or more to begining returns new array
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);


//.slice() return a section of an array takes two numbers start and end, original array not changed
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
console.log(groceryList);
let sliced = groceryList.slice(1, 4);
console.log(sliced);
console.log(groceryList);
//returns [ 'bananas', 'coffee beans', 'brown rice' ]

// indexOf() returns index number of an element given in array
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
console.log(groceryList);
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
// returns 4
*/
/*
//array and functions
const concept = ["arrays", "can", "be", "mutated"];
console.log(concept);
function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);
// [ 'arrays', 'can', 'be', 'MUTATED' ]

const concept = ["arrays", "can", "be", "mutated"];
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);
// [("arrays", "can", "be")];
*/

/*
// nested arrays
const nestedArr = [[1], [2, 3]];
console.log(nestedArr);
console.log(nestedArr[1]);
console.log(nestedArr[1][0]);


let numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(numberClusters);
const target = numberClusters[2][1];
console.log(target);
// returns 6
*/
