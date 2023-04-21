// console.log("higher functions");
///////////////
// higher functions
/*
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//   for (let i = 1; i <= 1000000; i++) {
//     if (2 + 2 != 4) {
//       console.log("Something has gone very wrong :( ");
//     }
//   }
// };
// // save above function as small name
// let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// console.log(is2p2);
// is2p2(); // calling long function
// console.log(is2p2.name); //checking what function name returns checkThatTwoPlusTwoEqualsFourAMillionTimes

let plusFiveToANumber = (number) => {
  console.log(number + 5);
  return number + 5;
};

// f is assigned the value of plusFive
let f = plusFiveToANumber;
console.log(f);
plusFiveToANumber(3); // 8
// Since f has a function value, it can be invoked.
f(9); // 14


// functions as parameters
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  console.log(t1);
  funcParameter(); // checkThatTwoPlusTwoEqualsFourAMillionTimes function
  console.log(funcParameter);
  let t2 = Date.now();
  console.log(t2);
  console.log(t2 - t1);
  return t2 - t1;
};

let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
console.log(time2p2);

// higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. Should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'
const addTwo = (num) => num + 2;
console.log(addTwo);
const checkConsistentOutput = (funct, val) => {
  let firstTry = funct(val);
  console.log({ firstTry }); // addTwo function takes value 5 adds 2 gives 7
  let secondTry = funct(val);
  console.log({ secondTry }); //addTwo function takes value 5 adds 2 gives 7
  if (firstTry === secondTry) {
    // if both same return firstTry
    console.log({ firstTry });
    return firstTry;
  } else {
    console.log("This function returned inconsistent results");
    return "This function returned inconsistent results";
  }
};

// Invoke checkConsistentOutput() with addTwo() function and a number as arguments.
checkConsistentOutput(addTwo, 5); // returns 4
*/

///////////////////////////
// iterators
/*
// .forEach()
const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];
console.log(artists);

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});
*/

/*
// .map()
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const squareNumbers = numbers.map((number) => {
  console.log(number * number);
  return number * number;
});

console.log(squareNumbers);
*/

/*
// .filter()
const things = ["desk", "chair", 5, "backpack", 3.14, 100];
console.log(things);

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);
*/

/*
const fruits = ["mango", "papaya", "pineapple", "apple"];
console.log(fruits);
// Iterate over fruits below
fruits.forEach((fruit) => {
  console.log(`I want to eat ${fruit}`);
});
*/
/*
const fruits = ["mango", "papaya", "pineapple", "apple"];
console.log(fruits);

fruits.map((fruit) => {
  console.log(`I want to eat a ${fruit}`);
});
// both result in
// I want to eat a mango
// I want to eat a papaya
// I want to eat a pineapple
// I want to eat a apple
*/
/*
// .map() takes argument and returns new array (different to forEach)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const bigNumbers = numbers.map((number) => {
  console.log(number * 10);
  return number * 10;
});
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
console.log(animals);

// Create the secretMessage array below
const secretMessage = animals.map((animal) => animal.charAt(0));
console.log(secretMessage); // ["H", "e", "l"...] first index of each animal
console.log(secretMessage.join("")); // displays HelloWorld

const biggerNumbers = [100, 200, 300, 400, 500];
console.log(biggerNumbers);
// Create the smallNumbers array below
const smallNumbers = biggerNumbers.map((number) => number / 100);
console.log(smallNumbers); // 1,2,3,4,5
*/

/*
// .filter() new array
const words = ["chair", "music", "pillow", "brick", "pen", "door"];
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
const shortWords = words.filter((word) => {
  return word.length < 6;
});
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
console.log(randomNumbers);
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => number < 250);
console.log(smallNumbers); // [(200, 3.14, 7, 13)];

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
console.log(favoriteWords);
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => word.length > 7);
console.log(longFavoriteWords); // [("nostalgia", "hyperbole", "esoteric")];
*/

/*
// findIndex() returns first element that true
const jumbledNums = [123, 25, 78, 5, 9];
console.log(jumbledNums);

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});
console.log({ lessThanTen }); // Output: 3
console.log(`Number that less 10 at index 3 is ${jumbledNums[3]}`); // Output: 5

const greaterThan1000 = jumbledNums.findIndex((num) => {
  return num > 1000;
});
console.log({ greaterThan1000 }); // Output: -1 because none match
//
const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];
console.log(animals);
const foundElephant = animals.findIndex((animal) => animal === "elephant");
console.log({ foundElephant }); // 7
console.log(`The animal at index 7 ${animals[7]}`);

const startsWithS = animals.findIndex((animal) => animal.charAt(0) === "s");

console.log({ startsWithS }); // 3
console.log(`The 1st animal starts with s at index 3 is ${animals[3]}`); // seal
*/
/*
// reduce() returns a single value  has accumulator and currentValue, acc becomes new current value
const numbers = [1, 2, 4, 10];
console.log(numbers);

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summedNums); // Output: 17
console.log("1 + 2 = 3, 3 + 4 = 7, 7 + 10 = 17");

const numbers = [1, 2, 4, 10];
console.log(numbers);

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // <- Second argument for .reduce() starts with that

console.log(summedNums); // Output: 117
console.log("100 + 1 = 101, 101 + 2 = 103, 103 + 4 = 107, 107 + 10 = 117");


// /////////
const newNumbers = [1, 3, 5, 7];
console.log(newNumbers);
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator:${accumulator}`);
  console.log(`The value of the currentValue: ${currentValue}`);
  return accumulator + currentValue;
});
// The value of accumulator:1
// The value of the currentValue: 3
// The value of accumulator:4
// The value of the currentValue: 5
// The value of accumulator:9
// The value of the currentValue: 7

console.log({ newSum }); // 16


const newNumbers = [1, 3, 5, 7];
console.log(newNumbers);
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator:${accumulator}`);
  console.log(`The value of the currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 10); // added argument

// The value of accumulator:10
// The value of the currentValue: 1
// The value of accumulator:11
// The value of the currentValue: 3
// The value of accumulator:14
// The value of the currentValue: 5
// The value of accumulator:19
// The value of the currentValue: 7

console.log(newSum); // 26
*/
/*
// some()
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];
console.log(words);
console.log(
  words.some((word) => {
    return word.length < 6;
  })
); // shows true some elements have more than 6 characters long

console.log(words);
const moreThan6 = words.some((word) => {
  return word.length < 6;
});
console.log({ moreThan6 });
*/

/*
// filter() 
const interestingWords = words.filter((word) => {
  return word.length > 5
}) 
console.log(interestingWords) [ 'unique', 'uncanny', 'oxymoron' ]
*/
/*
// every
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];
console.log(words);
console.log(
  words.every((word) => {
    return word.length > 5;
  })
);
// shows true as every is correct

const moreThan5 = words.every((word) => {
  return word.length > 5;
});
console.log({ moreThan5 });
const words5Letters = ["uncanny", "oxymoron"];
console.log(words5Letters);
const definatelyMoreThan5 = words5Letters.every((word) => {
  return word.length > 5;
});
console.log({ definatelyMoreThan5 });
*/

/*
const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];
console.log(cities);

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);
console.log(longCities); // [("Edinburgh", "Eskisehir", "Medellin", "Yokohama")];

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  console.log(acc);
  console.log(currVal[0]);
  return acc + currVal[0];
}, "C");
console.log(word); // CODECADEMY

const nums = [1, 50, 75, 200, 350, 525, 1000];
console.log(nums);
// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);
console.log(smallerNums); // [(-4, 45, 70, 195, 345, 520, 995)];

// Choose a method that will return a boolean value
const numGreat0 = nums.some((num) => {
  return num < 0;
});
console.log({ numGreat0 });
console.log(nums.some((num) => num < 0));
// false;
*/
