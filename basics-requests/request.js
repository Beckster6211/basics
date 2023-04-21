console.log("requests");
/*
Have you ever wondered what happens after you click a “Submit” button on a web page? For instance, if you are submitting information, where does the information go? How is the information processed? The answer to the previous questions revolves around *HTTP requests*.

There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE.

With a GET request, we’re retrieving, or getting, information from some source (usually a website). For a POST request, we’re posting information to a source that will process the information and send it back.

*/
/*
HTTP Request
One of JavaScript’s greatest assets is its non-blocking properties, or that it is an asynchronous language. newspaper websites take advantage of non blocking properties provide better user experience, users dont have to wait for image to load before article, text rendered first then image, JavaScript uses event loop handle async function calls. 

program runs, function calls are made added to stack, separate queue for functions that make requests that need to wait for serversto responds, once stack clear functions in queue execute. smoother browsing as a result of event loop (deciding when to call functions and how to handle async events). 
*/
/*
GET REQUEST 1 
use GET to retrieve data from a source.
GET REQUEST 2

first create XMLHttpRequest object using new operator save this object const xhr (common practice to name object xhr)
save URL to const url (make sure wrapped in quotes)
set responseType property of xhr object equal "json" (JavaScript Object Notation)
set xhr.onreadystatechange event handler equal anonymous arrow function, in code block add condition - checks to see if request has finished 
- if (xhr.readyState === XMLHttpRequest.DONE) {
return response property xhr (can use dot notation)
return xhr.response
}
below function create .call() method on xhr object and pass "GET" and url arguments - .open() creates a new request and arguments passed determine type and URL of request
call .send() method on xhr object pass no arguments
*/
//
/*
const xhr = new XMLHttpRequest() // first create XMLHttpRequest object using new operator, save this object const xhr (common practice to name object xhr)
const url = "https://api-to-call.com/endpoint" // save URL to const url (make sure wrapped in quotes)
xhr.responseType = "json" // set responseType property of xhr object equal "json" (JavaScript Object Notation)
xhr.onreadystatechange = () => {
 if (xhr.readyState === XMLHttpRequest.DONE) {
return xhr.response
}
// set xhr.onreadystatechange event handler equal anonymous arrow function, in code block add condition - checks to see if request has finished - if (xhr.readyState === XMLHttpRequest.DONE) {
// return response property xhr (can use dot notation)}

}
xhr.open("GET", url) // below function create call .open() method on xhr object and pass "GET" and url arguments - .open() creates a new request and arguments passed determine type and URL of request
xhr.send() // call .send() method on xhr object pass no arguments
*/
//
/*
// GET Request 3
// helper.js
// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy=";

// Selecting page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };
  xhr.open("GET", endpoint);
  xhr.send();
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);

// when typeing in a word it gives back ones that ryhme 
*/
//
//
// GET Request 4
/*
// new helper.js
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = "&topics="

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
// when type word and topic 
*/
//
//
//POST Request 1
// The major difference between a GET request and POST request is that a POST request requires additional information to be sent through the request. This additional information is sent in the body of the post request.

// POST Request 2
// new helper.js
/*
// create new XMLHttpRequest() object using new save const xhr 
// save URL const url "quotes"
// create const data save JSON.stringify({id: '200'}); // JSON.stringify convert value to string
// set responseType property xhr object "json"
// set xhr.onreadystatechange event handler equal anonymous arrow function 
// inside code block add conditional checks if readyState of xhr equal XMLHttpRequest.DONE
// return response property xhr containing data from POST 
// below call .open() method pass "POST" and url as arguments
// call .send() method on xhr object pass data as argument // .send() send request to server


const xhr = new XMLHttpRequest()
const url = "https://api-to-call.com/endpoint"
const data = JSON.stringify({id: '200'});
xhr.responseType = "json"

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response
  }
}
xhr.open("POST", url)
xhr.send(data)
*/

// POST Request 3

// new helper.js 

// AJAX function 
// create const urlToShorten save inputField.value
// create const data JSON.stringify({destination: urlToShorten});
// create new XMLHttpRequest() object new operator save const xhr
// set responseType property xhr object to "json"
// save onreadystatechange anonymous arrow function event handler conditional inside if (xhr.readyState === XMLHttpRequest.DONE) {
//   renderRawResponse(xhr.response);
// }
// below anonymous function call .open() method xhr pass "POST" and url as arguments
// header two key-value pairs include "Content-type" and an "apikey" below .open()
// call .send() method pass data
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
    const data = JSON.stringify({destination: urlToShorten});
    const xhr = new XMLHttpRequest()
    xhr.responseType = "json"
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        renderResponse(xhr.response)
      }
    }
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.setRequestHeader("apikey", apiKey)
    xhr.send(data)
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
