/////////////////////////////////////////////////////////
/*
let sale = true;
console.log({ sale });
if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale");
}

sale = false;
console.log({ sale });
if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale");
}
*/

/*
//else if
let stopLight = "yellow";
console.log({ stopLight });
if (stopLight === "red") {
  console.log("Stop!");
} else if (stopLight === "yellow") {
  console.log("Slow down.");
} else if (stopLight === "green") {
  console.log("Go!");
} else {
  console.log("Caution, unknown!");
}
*/

/*
comparison operators result with true
< less than 
> greater than 
<= less than or equal to 
>= greater than or equal to 
=== equal to 
!== not equal to

let hungerLevel = 7;
console.log({ hungerLevel });
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
*/
/*
logical operators
&& and 
|| or 
! not 

let mood = "sleepy";
console.log({ mood });
let tirednessLevel = 6;
console.log({ tirednessLevel });

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
*/
/*
//ternary
let isNightTime = true;
console.log({ isNightTime });

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

//refactored as ternery
isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");
*/

/*
//Switch statements
//before
let groceryItem = "papaya";
console.log({ groceryItem });

if (groceryItem === "tomato") {
  console.log("Tomatoes are $0.49");
} else if (groceryItem === "papaya") {
  console.log("Papayas are $1.29");
} else {
  console.log("Invalid item");
}

//refactored to
// let groceryItem = "papaya";
console.log({ groceryItem });

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}
*/
