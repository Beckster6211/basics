/*
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};
console.log(inventory);

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};
// have resolve and reject parameters, check if sunglasses property on inventory object greater than zero, if truthy then invoke resolve() string, if falsy reject() string

const orderSunglasses = () => {
  return new Promise(myExecutor);
};
// orderSunglasses function no parameters, return new promise constructor passed myExecutor() into

const orderPromise = orderSunglasses();
// variable orderPromise assigned return value of orderSunglasses

console.log(orderPromise);
*/

/*
// node setTimeOut() function //has two parameters, a callback function and delay in milliseconds

const delayedHello = () => {
  console.log("Hi! This is an asynchronous greeting!");
};

setTimeout(delayedHello, 2000); // in atleast 2 seconds delayedHello() invoked

console.log("This may be the first line of code in app.js.");

function usingSTO() {
  console.log("any string I want, will appear after 1 1/2 seconds");
}

setTimeout(usingSTO, 1500);

console.log("This may be the last line of code in app.js.");
*/

/*
// use useTimeout() to construct async promises
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I resolved!");
    }, 1000);
  });
};

const prom = returnPromiseFunction();
console.log(prom);

// returnPromiseFunction() return promise, assign promise to variable prom (prom will have status of pending)
*/

/*
Consuming Promises
initial state of async promise is pending but it will settle. Promise objects come with .then() method "I have a promise, when it settles, then here’s what I want to happen…"
dishwasher will run then, if promise rejects have dirty dishes add soap run dishwasher again, if promise fulfills clean dishes put dishes away 
.then() takes two callback functions as arguments, callbacks are handlers.
when promise settles the appropiate handler invoked with settled value
first handler sometimes called onFulfilled - success handler contains logic for promise resolving 
second handler sometimes called onRejected - failure handler contains logic for promise rejecting
.then() can be invoke with one both or neither .then() will return a promise with settled value
*/
/*
// Success and Failure callback functions
// successful promise (promise resolved) invoke .then() on promise passing success handler callback

const prom = new Promise((resolve, reject) => {
  resolve("Yay!");
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'
// prom is a promise resolved to "Yay!", function handleSuccess() prints argument passed to it, invoke prom.then() passing handleSuccess(), prom resolves handleSuccess is invoked with prom resolved value 
/////


let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  console.log({ num });
  if (num < 0.5) {
    resolve("Yay!");
  } else {
    reject("Ohhh noooo!");
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
// prom is promise which will either resolve or reject with their string, pass two handlerr functions to .then() first be invoked with "Yay!" if promise resolves, second "Ohhhhh noooo!" if promise rejects


// combine with library.js
const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

// handleSuccess function one parameter resolved value
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

// handleFailure function one parameter rejection reason
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

// invoke checkInventory() with order - this will return a promise. attach .then(with both handlers as callback functions)
checkInventory(order).then(handleSuccess, handleFailure);
*/

/*
// chaining .then()
// cleaner code separation of concerns- organsing code into distinct sections handling specific tasks (helps finding errors). instead of passing both handlers into one .then() can chain .then(). first .then() with success handler second with failure handler. put each on new line for readability

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  console.log({ num });
  if (num < 0.5) {
    resolve("Yay!");
  } else {
    reject("Ohhh noooo!");
  }
});

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });

*/

/*
///// using catch() with promises
// .catch() function takes one argument - onRejected. in case of rejected promise failure handler will invoke with reason for rejection. .catch() accomplishes same as .then() with failure handler

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  console.log({ num });
  if (num < 0.5) {
    resolve("Yay!");
  } else {
    reject("Ohhh noooo!");
  }
});
console.log(prom);

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

// prom either resolves or rejects with strings for each, pass success handler to .then() and .catch() failure handler. if promise resolves .then invoked, if promise rejects .catch failure handler invoked


// library.js
const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// invoke checkInventory function with order
// add .then() return promise pass success handler
// add .catch() return promise pass failure handler
checkInventory(order).then(handleSuccess).catch(handleFailure);

*/

/*
////////
// changing mulitple promises
// One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on!

// dirty clothes in washing machine, clothes clean then put in dryer, clothes dry then fold and put away
//chaining promises called composition

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
// invoke firstPromiseFunction() returns promise, invoke .then() with anonymous  function as success handler inside success handler return new promise invoking secondPromiseFunction() with first promise resolved value, second .then() handle logic second promise inside that is success handler which will log second promise resolved. chain to work return promise sceondPromiseFunction(firstResolveVal) ensure that return value of first .then() second promise
*/
/*
//library.js
const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    // return success handler processPayment() promise
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    // return success handler shipOrder() promise
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
*/

/*
// avoiding common mistakes
// mistake 1
// nested promises instead of chaining
returnsFirstPromise().then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal).then((secondResolveVal) => {
    console.log(secondResolveVal);
  });
});
// invoke returnsFirstPromise() return promise, invoke .then() success handler, inside success handler invoke returnsSecondValue with firstResolveVal return new Promise, invoke second .then() handle logic for second promise inside first .then(), inside that second .then() have success handler log second promises resolve value to console. Instead of clean chain of promises, nested logic for one inside the other.

// mistake 2
// forgetting to return a promise
returnsFirstPromise()
  .then((firstResolveVal) => {
    returnsSecondValue(firstResolveVal);
  })
  .then((someVal) => {
    console.log(someVal);
  });
// invoke returnsFirstPromise() returns promise, invoke .then() with success handler, inside success handler create second promise but forget to return, invoke second .then() suppose to handle logic for second promise but didn't return
*/

/*
// this works but not best practice
const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order).then((resolvedValueArray) => {
  processPayment(resolvedValueArray).then((resolvedValueArray) => {
    shipOrder(resolvedValueArray).then((successMessage) => {
      console.log(successMessage);
    });
  });
});


// Refactored code below:
const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  });
*/

/*
////
//Promise.all()
// dealing with multiple promises mainly if order not important, (our house clean, clothes dry, bins emptied, dishwasher run but house clean doesn't matter order)
// promise.all() accepts an array of promises as its argument and return single promise. will settle in two ways. if every promise in argument in array resolves single promise returned will resolve with array containing resolved value from each, if any promise from argumentrejects the single promise returns will reject with reason - refered as failing fast
let myPromises = Promise.all([
  returnsPromOne(),
  returnsPromTwo(),
  returnsPromThree(),
]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
// declare myPromises assigned to invoking Promise.all(), invoke Promise.all() with array of 3 promises-return values from functions, invoke .then() with success handler print array of resolved values if each resolves successfully, invoke .catch() with failure handler print first rejection message
*/

/*
//example
const { checkAvailability } = require("./library.js");

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
// create 3 function and assign each separate promise
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");

const checkPants = checkAvailability("pants", "Favorite Supply Co.");

const checkBags = checkAvailability("bags", "Favorite Supply Co.");

//invoke Promise.all() with array containing variables of functions, chain .then() pass onFulfill as success handler, chain .catch pass onReject as failure handler
Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);
*/

/*
const { checkAvailability } = require("./library.js");

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
// create 3 function and assign each separate promise
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");

const checkPants = checkAvailability("pants", "Favorite Supply Co.");

const checkBags = checkAvailability("bags", "Favorite Supply Co.");

//invoke Promise.all() with array containing variables of functions, chain .then() pass onFulfill as success handler, chain .catch pass onReject as failure handler
let myPromises = Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);

myPromises.then(onFulfill).catch(onReject);
// sort of works like that
*/
