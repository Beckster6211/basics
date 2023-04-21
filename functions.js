////////////////////////////////////

// functions
/*
function greetWorld() {
  console.log("Hello, World!");
}

greetWorld(); // Output: Hello, World! -  calling a function

//parameters and arguments
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
  console.log(
    `Thank you for your purchase ${name}! We appreicate your business.`
  );
}
sayThanks("Becky");

//console prints 'Thank you for your purchase Becky! We appreciate your business.'
*/

//functions take returns
/*
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost); // 4000

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));
*/

/* arrow functions () =>
 
fat arrow no argument
const printHello = () => {
  console.log("Hello");
  return "Hello";
};

printHello();

fat arrow one argument
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

console.log(rectangleArea(4, 5));

const squareNum = num => {
  console.log(num * num);
  return num * num;
};

squareNum(5);

const squareNum = (num) => num * num;

//refactored other function to fat arrow
const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    console.log(day);
    return true;
  } else {
    console.log(day);
    return false;
  }
};

console.log(plantNeedsWater("Thursday"));

const plantNeedsWater = (day) => {
  console.log(day);
  return day === "Wednesday" ? true : false;
};

console.log(plantNeedsWater("Friday"));

const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

console.log(plantNeedsWater("Monday"));

*/
