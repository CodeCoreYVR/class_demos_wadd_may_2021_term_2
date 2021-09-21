// This is the delay method
// Now it takes second argument which will be resolved after the time
const delay = (ms, value) =>
  new Promise((resolve, reject) => {
    // reject("This is test reject");
    // Set timeout will delay callback function call by specified number of ms
    setTimeout(() => resolve(value), ms);
  });

// This will wait 2s and then console log the message
// delay(2000, "I am delayed value").then((value) => {
//   console.log(value);
// });

//Returns result of all promises
// Promise.all([
//   delay(2000, "I am delayed by two seconds"),
//   delay(3000, null),
//   delay(1000, "I am delayed by one second"),
//   delay(5000, "I am delayed by five seconds"),
// ]).then((result) => console.log(result));

//Returns only result of the fastest promise
// Promise.race([
//   delay(2000, "I am delayed by two seconds"),
//   delay(3000, null),
//   delay(1000, "I am the fastest horse"),
//   delay(5000, "I am delayed by five seconds"),
//   delay(6000, "I am delayed by six seconds"),
// ]).then((result) => console.log(result));

//Async and await
// If we want to use await our function has to be async
const main = async () => {
  try {
    // This will throw exception
    // And stop the rest of the code from executing
    // throw "I am error as well";
    // Await stops executing following code until we have result of the delay function
    const result1 = await delay(1000, "I am delayed by one second");
    console.log(result1);
    console.log("This will run after the delay");
  } catch (error) {
    // This code will be executed if delay function will fail or there will be any other error inside the try block
    console.error(error);
  } finally {
    console.log(
      "This code will run after catch or try block will finish its execution"
    );
  }
};

main().catch((err) => console.error(err));
