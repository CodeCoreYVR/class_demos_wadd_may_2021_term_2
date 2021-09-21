const number1 = 10;
const number2 = 3;

const result = number1 / number2;
// With method toFixed we can specify how many decimal points we want to keep
// This will keep only two decimal points
// console.log(result.toFixed(2));
// This will keep all of them
// console.log(number1 / number2);

// We can convert number to string
const resultAsText = result.toString();
// console.log(resultAsText);

// We can covert it back to int or float
// This will get rid off everything after the decimal point
console.log(parseInt(resultAsText));

// If we want to keep them we have to use different function
// If we use parseFloat it will keep all decimals numbers
console.log(parseFloat(resultAsText));
