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
set xhr.onreadystatechange event handler equal anonymous arrow function, in code block add condition - checks to see if request has finished - if (xhr.readyState === XMLHttpRequest.DONE) {
return response property xhr (can use dot notation)}

}
xhr.open("GET", url) // below function create call .open() method on xhr object and pass "GET" and url arguments - .open() creates a new request and arguments passed determine type and URL of request
xhr.send() // call .send() method on xhr object pass no arguments
*/
// GET Request 3
