//// converters.js
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

// two ways to export functions
// export the function after written
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

// function is declared and assigned to the module export
module.exports.fahrenheitToCelsius = function (fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
};
