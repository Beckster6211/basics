console.log("async+await");
/*
const fs = require("fs");
const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use fs.readfile() and callback functions:
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile("./file2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile("./file2.txt", "utf-8");
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch((err) => {
    console.log(err);
  });

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile("./file.txt", "utf-8");
  let secondSentence = await promisifiedReadfile("./file2.txt", "utf-8");
  console.log(firstSentence, secondSentence);
}

readFiles();
*/

/*
Async keyword used to handle async actions. 
use async keyword with a function and then function logic inside 

async function myFunc() {
  // Function body here
};
 
myFunc();
also make like this 
const myFunc = async () => {
  // Function body here
};
 
myFunc();

function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log("Message:", msg);
}
msg();

//fat arrow
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

const msg1 = async () => {
  //Async Arrow Function
  const msg = await helloWorld();
  console.log("Message:", msg);
};
msg1();
*/

/*
async functions return a promise, can use promise syntax .then() and .catch() with async functions

return one of 3 ways 
1 - if nothing returned from function, will return promise with resolved value undefined
2 - if non promise value returned from function, will return promise resolved to value
3 - if promise is returned from function, will return that promise

async function fivePromise() {
  return 5;
}

fivePromise().then((resolvedValue) => {
  console.log(resolvedValue);
});
// Prints 5
//even though return 5 inside function body actually returned invoked fivePromise() is a promise with resolved value 5
*/
/*
// if number is 0 return promise that resolves to "zero" if not 0 return promise resolves "not zero"
function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});


// async function reproduces functionality of withConstructor() return a promise not constructed using new keyword, use async function automatically
async function withAsync(num) {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});
*/
/*
///// await operator
// async almost always used with await keyword inside function body, returns resolved value of a promise, await halts or pauses the execution of async function until promise is resolved
// myPromise() function returns a promise resolve to string "I am resolved now!"
async function asyncFuncExample() {
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
// asyncFuncExample() uses await to halt execution until myPromise is resolved and assign its resolved value to variable resolvedValue, then log resovedValue to console
*/
/*
// library.js
// required in brainstormeDinner() expects no arguments returns new promse with resolved value string representing meal

const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}
// nativePromiseDinner();

// async/await version:
// fill body announceDinner() has same functionality as nativePromiseDinner(), wait promise returned from brainstormDinner() to resolve then log string same way as nativePromiseDinner()
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();
*/
/*
////// 
// async functions 
// await halts the executioon of async function until promise no longer pending,
 
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
// function returns promise resolves to "Yay, I resolved! after 1 second delay"

// 2 async functions invoke myPromise()
async function noAwait() {
 let value = myPromise();
 console.log(value);
}
noAwait(); // Prints: Promise { <pending> } 

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}
yesAwait(); // Prints: Yay, I resolved! paused so resolved 
*/

/*
// new library.js function for it

const shopForBeans = require("./library.js");

function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
// log "1. Heading to the store to buy beans..." to console, capture resolved value of promise returned when invoke shopForBeans(), promise returned from shopForBeans prints "2. I bought [the resolved type of beans] beans because they were on sale.", finally function prints "3. Great! I'm making [the bean type] beans for dinner tonight!"
// BUT PROBLEM!
////// needs to async and await the promise 

const shopForBeans = require("./library.js");

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
*/
//////
/*
handling dependant promises 
beauty async...await when have series of asynchronous actions which depend on one another. Example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then()

function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}
// inside function it has two functions return promises returnsFirstPromise() and returnsSecondPromise(), invoke returnsFirstPromise() ensure first promise resolved using .then(), in callback of first .then() console.log resolved value first promise firstValue and return returnsSecondPromise(firstValue), use another .then() print second promise resolved value. 

// an async function to accomplish the same thing 
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
mark function with async, inside function create variable firstValuee assign await returnsFirstPromise() means firstValue resolved value of awaited promise, console.log firstValue, create variable secondValue assign await returnsSecondPromise(firstValue) means secondValue promise resolved value, console.log secondValue
// Using the async...await syntax save typing, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax.


// new library.js
const { shopForBeans, soakTheBeans, cookTheBeans } = require("./library.js");

// declare async function makeBeans(), declare variable type assigned resolved value of shopForBeans(), declare variable isSoft assign resolved value of soakTheBeans()-pass soakTheBeans expected argument, declare variable dinner assign resolved cookTheBeans()-pass expected argument, log dinner, invoke makeBeans()
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();
*/
//
//
/////// handling errors
/*
// .catch() used with long promise chain can be difficult to ndicate where error thrown, async uses try...catch for error handling 

async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();
// async return promises still use native promise .catch() with async function
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}
 
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})

/// new library.js
const cookBeanSouffle = require("./library.js");

// declare async function hostDinnerParty() inside function create try...catch catch statement specify an identifier error, inside try log string '[resolved value of cookBeanSouffle() promise] is served!' or 'Bean Souffle is served!' await cookBeanSouffle() promise, log error to console then string 'Ordering a pizza!', invoke hostDinnerParty()
async function hostDinnerParty() {
  try {
    let resolvedValue = await cookBeanSouffle();
    console.log(`${resolvedValue} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}
hostDinnerParty();
*/
///
/// handling independent promises
/*
// what if async function contains multiple promises that not dependent on results of one another
async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
}
// in waiting() function, pause function until first promise resolves then constructs second promise, once that resolves print both resolved values

async function concurrent() {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
  console.log(await firstPromise, await secondPromise);
}
// in concurrent() function both promises are constructed with await, then await each of their resolutions to print to console
// in concurrent() function both promises async operations can run simultaneously, want to start each async operation asap, still take advantage of concurrency to perform async actions at same time
// what if have multiple truly independent promises that want to execute at same time then use individual .then() functions and avoid halting execution of await
*/

/*
//
// new library.js
let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./library.js");

// Write your code below:
// declare async function serveDinner(): create 4 variable- vegetablePromise assign return value steamBroccoli() - starchPromise assign return value cookRice() - proteinPromise assign return value of bakeChicken() - sidePromise assign return cookBeans() should be assigned promise objects not resolved values
// console.log() string: Dinner is served. We’re having [resolved value of the vegetablePromise], [resolved value of the starchPromise], [resolved value of the proteinPromise], and [resolved value of the sidePromise]
// invoke serveDinner()
async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(
    `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  );
}

serveDinner();
*/

/*
//
// await Promise.all()
// another way advantage of concurrency multiple promises executed simultaneously is await Promise.all(), pass an array of promises as arguments to Promise.all() will return single promise, this promise will resolve when all the promises in the argument array have resolved, this promises resolve value will be an array containing resolved values of each promise 

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
// await resolution of Promise.all(), Promise.all() was invoked with argument array containing 4 promises (returned from required-in functions), next loop through resultArray log each, first element in resultArray resolved value of asyncTask1() promise, second is value asyncTask2() promise and so on, Promise.all() allows for each async task process concurrently, Promise.all() benefit failing fast once one rejected won't wait for rest, if first promise in array rejects Promisee.all() will reject with that reason, as was when working with native promises, Promise.all() is good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.
*/

/*
//library.js
let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./library.js");
// simular to other serveDinner() function but with Promise.all()
// async function serveDinnerAgain() inside declare variable foodArray assign resolved value of promise returned from Promise.all(), Promise.all() takes array of promises, array containing steamBroccoli(), cookRice(), bakeChicken(), and cookBeans() functions in that order
// console.log() string Dinner is served. We’re having [first item in foodArray ], [second item in foodArray ], [third item in foodArray], and [fourth item in foodArray ].
// invoke serveDinnerAgain()
async function serveDinnerAgain() {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);
  console.log(
    `Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`
  );

let vegetable = foodArray[0];
let starch =  foodArray[1];
let protein =  foodArray[2];
let side =  foodArray[3];
console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}

serveDinnerAgain();

*/
