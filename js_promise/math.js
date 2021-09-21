const add = (num1, num2) =>
  new Promise((resolve, reject) => {
    resolve(num1 + num2);
  });

const multiply = (num1, num2) =>
  new Promise((resolve, reject) => {
    resolve(num1 * num2);
  });

add(1, 2)
  .then((result) => add(result, 3))
  .then((result) => multiply(result, 10))
  .then((result) => console.log(result));
