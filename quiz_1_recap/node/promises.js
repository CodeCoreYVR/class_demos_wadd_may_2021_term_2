// This is a function that returns a promise
// that will resolve with an array of countries
const getData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Czech Republic", "India", "Canada"]);
    }, 1000);
  });

// This will log a promise which is in pending state
console.log(getData());
console.log("This will not stop the code");

// If we want to get data from promise we have to use
// either await or .then

// Await example
const awaitExample = async () => {
  // If we are using promises and await
  // We should always wrap our code in try catch
  try {
    // Await will wait for result of our promise and then
    // it will log the resolved value
    console.log(await getData());
    console.log("I will run after we get data from promise not before");
  } catch (error) {
    // This will catch all exceptions similar to .catch
    console.error(error);
  }
};

// .then .catch example
getData()
  .then((d) => {
    console.log("This is date from .then .catch example", d);
    console.log("This will run after we log our data");
  })
  // This will catch all exceptions
  .catch(console.error);

awaitExample().catch(console.error);
