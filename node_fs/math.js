// This is my second module for math operations
const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;
// module.exports = { add, multiply };
module.exports.add = add;
module.exports.multiply = multiply;
module.exports.test = (text) => console.log(text);
