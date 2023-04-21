console.log("fetch request");
/*
promises have 3 states pending, fulfilled, rejected
fetch uses promises to handle requests 
simplify requests using async and await 

*/
// fetch() GET Request 1
/*
// fetch() function 
// create request object contains relevant info api needs 
// send request object to api endpoint
// returns promise ultimately reslves to response object contains info api sent back 

boilerplate
fetch("api/endpoint").then(response => {
    if(response.ok){
        return response.json()
    }
    throw new Error("request failed!)
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    // code to execute jsonResponse
})
*/
// fetch() GET Request 2
/*
//
call fetch() pass url string - determines endpoint of request
chain .then() method end of fetch() pass success callback arrow function as first argument, success callback takes one parameter response, .then() will only fire aftere promise resolved
check ok property of response inside conditional, in conditional return response.json()
below curly braces of conditional create error "throw new Error('Request failed!');"
add second argument to .then() arrow function handles failures, separate first callback function from second with comma, second callback takes parameter networkError, log networkError.message
chanin another .then() method end of first .then(), pass new .then() method callback jsonResponse as parameter and return jsonResponse, second .then() success callback won't run until previous .then() method has finished also wont if error before it


fetch("https://api-to-call.com/endpoint").then(response => {
  if(response.ok){
    return response.json()
  }
  throw new Error("Request failed!")
}, (networkError) => {
  console.log(networkError.message)
}).then((jsonResponse)=>{
  return jsonResponse
})
*/
//
// fetch() GET Request 3
/*
// Information to reach API
//// create const url assign string 
const url = "https://api.datamuse.com/words"
//// create const queryParams assign value "?sl=" start of query will narrow search to words sound like your word
const queryParams = "?sl="
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// create const wordQuery assign inputField.value
// create const endpoint assign value string url, queryParams, wordQuery
// call fetch() pass endpoint as argument add {cache: 'no-cache'} second argument to work with provided browser
// chain .then() method to fetch() pass success arrow callback function as argument, callback take parameter response 
// inside success callback create conditional checks if ok property of response, if truthy call function renderJsonResponse() pass response as argument
// delete renderJsonResponse(response) replace return response.json()
// below conditional add code to raise exception if request fail throw new Error('Request failed!');
// separate success callback and error with comma, error callback function arrow function parameter networkError, in code block arrow function log networkError.message
const getSuggestions = () => {
    const wordQuery = inputField.value
    const endpoint = `${url}${queryParams}${wordQuery}`
    fetch(endpoint, {cache: 'no-cache'}).then((response) => {
      if(response.ok){
        return response.json()
      }
      throw new Error("Request failed!")
    }, (networkError) => {
      console.log(networkError.message)
    })
  }
  
  // Clears previous results and display results to webpage
  const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
  };
  
  submit.addEventListener('click', displaySuggestions);
*/
//
// fetch() GET Request 4
/*
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// at end of .then() method chain another .then(), pass anonymous arrow function takes jsonResponse parameter
// inside callback call function renderRawResponse() pass jsonResponse as argument
// delete renderRawResponse(jsonResponse) replace renderResponse(jsonResponse)

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    
    fetch(endpoint, {cache: 'no-cache'}).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then((jsonResponse) => {
      renderResponse(jsonResponse)
    })
  }
  
  // Clears previous results and display results to webpage
  const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
  };
  
  submit.addEventListener('click', displaySuggestions);
  
*/
//
// fetch() POST Request 1
/*
fetch("api-endpoint-url", {
    method: "POST",
    body: JSON.stringify({id: "200"})
}).then((response) => {
    if(response.ok){
        return response.json()
    }
    throw new Error("Request failed!")
}, (networkError) => {
    console.log(networkError.message)
}).then((jsonResponse) => {
    // code to execute
})
// initial call takes two arguments an endpoint and an object contains info needed for POST request 
*/
// fetch() POST Request 2
/*
call fetch() pass url as string for first argument, pass empty object as second 
setting object contains 2 properties method with value "POST" and body with value JSON.stringify({id: '200'}) // determines request is POST and what info sent to API
chain .then() method on fetch with success callback as first parameter, pass response as argument for callback // code will execute when promise returned from fetch resolved
inside callback function conditional check ok property of response object return response.json() // this returned info will pass on to the next .then()
below curly braces conditional statement create new error throw new Error('Request failed!'); // this error raised if status error
create failure callback function takes networkError as single parameter, separate first and second with comma, still inside .then(), log networkError.message
chain .then() method of end of first .then(), new .then() method arrow callback function jsonResponse as parameter, return jsonResponse // to view JSON returned from previous .then()

fetch("https://api-to-call.com/endpoint", {
  method: "POST",
  body: JSON.stringify({id: '200'})
}).then((response) => {
  if(response.ok){
    return response.json()
  }
  throw new Error("Request failed!")
}, (networkError) => {
  console.log(networkError.message)
}).then((jsonResponse) => {
  return jsonResponse
})
*/
//helper.js
// fetch() POST Request 3
// AJAX function
// create const urlToShorten assign inputField.value
// const data assign result of calling JSON.stringify() with {destination: urlToShorten} as argument // prepare info needed to send in the body
// call fetch() pass url as first parameter and an object as second
// ass property to object, property key - method with value - "POST"
// another property key - headers and value another object {
//   'Content-type': 'application/json',
//   'apikey': apiKey
// }
// add another property key - body and value - data
// chain .then() method end of fetch() first argument pass arrow function response as parameter
// use conditional inside .then(()=>{}) check ok property of response if truthy call renderJsonResponse() pass response
// delete renderJsonResponse(response) return response.json()
// below curly braces of conditional throw new Error "request failed!"
// ouside code block first callback function add arrow function networkError as parameter, log networkError.message // safeguard if network returns an error
// chain .then() to end f original .then()
// anonymous arrow function jsonResponse as parameter, inside call renderRawResponse() pass jsonResponse
// delete renderRawResponse(jsonResponse) call renderResponse() pass in jsonResponse
/*
// Information to reach API
const apiKey = 'https://api.rebrandly.com/v1/links';
const url = 'https://api.rebrandly.com/v1/links';
// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');
// AJAX functions
const shortenUrl = () => {
    const urlToShorten = inputField.value
    const data = JSON.stringify({destination: urlToShorten})
    fetch(url, {
      method: "POST",
      headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
    }).then((response) => {
      if(response.ok){
        return response.json()
      }
      throw new Error("Request failed!")
    }, (networkError)=>{
      console.log(networkError.message)
    }).then((jsonResponse)=>{
      renderResponse(jsonResponse)
    })
    }
    // Clear page and call AJAX functions
    const displayShortUrl = (event) => {
      event.preventDefault();
      while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild)
      }
      shortenUrl();
    }
    shortenButton.addEventListener('click', displayShortUrl);
    
*/
//
// async GET Request 1
/*
async function that will return a promise. await can only be used in an async function. await allows a program to run while waiting for a promise to resolve. try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.


create an arrow function async keyword const getData
try ... catch statement, try empty, add catch(error),  // try block send request handle response, catch handle error thrown
inside catch log error, error not usually done by console log ususally redirected to another page
inside try statement await fetch passed url as string "https://api-to-call.com/endpoint", save returned promise variable const response
under response conditional, check if ok property of response evaluates truthy
inside conditional await resolution .json() mthod on response save returned object variable const jsonResponse // json() async method await promise status is resolved store value to data JSON holds
return jsonResponse // normally want jsonResponse different manner
below conditional throw new error, message "‘Request failed!’"
*

const getData = async () => {
  try{
    const response = await fetch("https://api-to-call.com/endpoint")
    if(response.ok){
      const jsonResponse = await response.json()
      return jsonResponse
    }
    throw new Error("Request failed!")
  } catch(error){
    console.log(error)
  }
}

*/
//
//async GET Request 2
// helper.js
/*
// AJAX function
// create const getSuggestions() arrow function async keyword
// inside code block async arrow function create const wordQuery assign inputField.value
// create const endpoint assign value string url, queryParams, wordQuery concatenated
// add try...catch, try empty add catch(error) console.log error
// inside try block, const response assign await result fetch() with endpoint as first argument, second argument {cache: 'no-cache'}
// below reponse, create conditional, checks ok property of response evaluates truthy, inside conditional await response.json() save as variable const jsonResponse
// call renderRawResponse() pass jsonResponse // type word should get array objects containing nouns describe that word
// delete renderRawResponse(jsonResponse) replace with renderResponse(jsonResponse)

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value
  const endpoint = `${url}${queryParams}${wordQuery}`
  try{
    const response = await fetch(endpoint, {cache: 'no-cache'})
    if(response.ok){
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  }catch(error){
    console.log(error)
  }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
*/
//
// async POST Request 2
/*
create async arrow function save const getData() // async ensures returns promise
add try catch, try empty, catch() with error, log error
inside try await fetch() function saved const response 
indside fetch() pass url as string "https://api-to-call.com/endpoint" for first argument, second argument empty object
fill object second argument, add method property with value "POST" and body property with value JSON.stringify({id: 200})// remeber to separate with comma
after code block response, if statement check ok propertyof response, inside conditional await resolution calling .json() method on response, save as variable const jsonResponse
return jsonResponse 
below conditional throw new Error () with "Request failed!"

const getData = async () => {
  try{
    const response = await fetch("https://api-to-call.com/endpoint", {
      method: "POST",
      body: JSON.stringify({id: 200})
    })
    if(response.ok){
    const jsonResponse = await response.json()
    return jsonResponse
    }
    throw new Error("Request failed!")
  } catch(error){
    console.log(error)
  }
}
*/
//
// async POST Request 4
// helper.js
/*
// AJAX function
// create arrow function asssign const shortenUrl()
// create 2 const one urlToShorten assign inputField.value, second data assign calling JSON.stringify() passing {destination: urlToShorten}
// add try, empty, add catch() pass error log error 
// inside try block use const varaible response assign await fetch()
// in fetch pass url as first argument, second argument empty object, inside empty object property method with value "POST", property body with value data, property headers with value {
// 'Content-type': 'application/json',
// 'apikey': apiKey
// }
// below response, create conditional checks ok property of response is truthy
// inside conditional await response.json() save varaible const jsonResponse
// call renderRawResponse() pass jsonResponse
// delete renderRawResponse(jsonResponse) replace renderResponse(jsonResponse)

// information to reach API
const apiKey = 'd07078cbccca45838ff431a69a3c55a6';
const url = 'https://api.rebrandly.com/v1/links';
// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');
// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten})
  try{
    const response = await fetch(url, {
      method: "POST", 
      body: data,
      headers: {
'Content-type': 'application/json',
'apikey': apiKey
}
    })
    if(response.ok){
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  } catch(error){
    console.log(error)
  }
}
// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}
shortenButton.addEventListener('click', displayShortUrl);
*/
/*
GET and POST requests can be created a variety of ways.

Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.

Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

fetch() is a web API that can be used to create requests. fetch() will return promises.

We can chain .then() methods to handle promises returned by fetch().

The .json() method converts a returned promise to a JSON object.

async is a keyword that is used to create functions that will return promises.

await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.

await can only be used within functions declared with async.
*/
