//////////
// loops
/*
// for
// an initialization, a stopping condition(true will run code block false stops), an iteration statement (update iterator to loop)
for (let counter = 0; counter < 6; counter++) {
  console.log(counter);
}
// returns 0 1 2 3 (individually)
*/

/*
let reverse = ["Go", "are", "Thunderbirds"];
console.log(reverse);
let newSentence = [];

for (let index = reverse.length - 1; index >= 0; index--) {
  console.log(reverse[index]);
  newSentence.push(reverse[index]);
}
newSentence = newSentence.join(" ");
console.log(newSentence + "!");
*/

/*
//loop through an array (need .length)
const animals = ["Grizzly Bear", "Sloth", "Sea Lion"];
console.log(animals);
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//Grizzly Bear Sloth Sea Lion (individually)
*/
/*
// nested loops
const myArray = [6, 19, 20];
console.log(myArray);
const yourArray = [19, 81, 2];
console.log(yourArray);
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both loops have the number: " + yourArray[j]);
    }
  }
}

// my example
let bobsFollowers = ["Robert", "Neil", "William", "Finley"];
console.log(bobsFollowers);
let tinasFollowers = ["Neil", "Finley", "Cotton"];
console.log(tinasFollowers);
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

// bobsFollowers (1st element - Robert) against tinaFollowers (1st element - Neil)
// bobsFollowers (1st element - Robert) against tinasFollowers (2nd element - Finley)
// bobsFollowers (1st element - Robert) against tinasFollowers (3rd element - Cotton)
// bobsFollowers (2nd element - Neil) against tinasFollowers (1st element - Neil) // same push in mutualFollowers
// bobsFollowers (2nd element - Neil) against tinasFollowers (2nd element - Finley)
// bobsFollowers (2nd element - Neil) against tinasFollowers (3rd element - Cotton)
// ... ...
*/
/*
// while loop
// A for loop that prints 1, 2, and 3
console.log("for loop counting to 3");
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}
console.log("while loop counting to 3");
// A while loop that prints back from 4
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// my example
const cards = ["diamond", "spade", "heart", "club"];
console.log(cards);

let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
*/
/*
//do while
let countString = "";
console.log(countString);
let i = 0;
console.log(i);

do {
  countString = countString + i;
  i++;
  console.log(countString);
} while (i < 5);

console.log(countString);

//my example
let cupsOfSugarNeeded = 5;
console.log({ cupsOfSugarNeeded });
let cupsAdded = 0;
console.log({ cupsAdded });

do {
  cupsAdded++;
  console.log(`Inside do...while loop cupsAdded ${cupsAdded}`);
} while (cupsAdded < cupsOfSugarNeeded);

console.log({ cupsAdded });
*/

/*
// break word
for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana.");
}

console.log("Orange you glad I broke out the loop!");

// Banana.
// Banana.
// Banana.
// Orange you glad I broke out the loop!


// my example
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
console.log(rapperArray);

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");
*/
