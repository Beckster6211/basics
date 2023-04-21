/*
/// celsius-to-fahrenheit.js
// convert any temperature given from celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(
  `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);
*/

const { celsiusToFahrenheit } = require("./converters");

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(input);

console.log(
  `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);
