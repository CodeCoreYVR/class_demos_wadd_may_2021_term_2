// There is 50% chance to end with resolved with value tails and 50% chance to be rejected with value head
const flipCoin = () =>
  new Promise((resolve, reject) => {
    // Getting the result of the coin flip
    const result = Math.round(Math.random()) === 0 ? false : true;
    // Resolving with value tails
    if (result) resolve("tails");
    //Rejecting with value head
    else reject("head");
  });

// This will return random number between minimum and maximum
const getRandomNumber = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const throwCoin = () =>
  new Promise((resolve, reject) => {
    //Calculating time to throw
    const timeToFlip = getRandomNumber(1, 4);
    setTimeout(() => {
      // If time is grater then 3 or equal rejects with value Coin was throw....
      if (timeToFlip >= 3) reject("Coin was thrown to high!");
      // Otherwise calls the flip coin method
      flipCoin()
        // If flip coin in resolved this promise is also resolved with the same value
        .then((value) => {
          resolve(value);
        })
        // If flip coin is rejected this promise is also rejected with value from flip coin
        .catch((err) => {
          reject(err);
        });
      // Delaying this promise for time that was needed to throw the coin
    }, timeToFlip * 1000);
  });

// flipCoin()
//   .then((value) => {
//     console.log(value);
//     // in case flip coin is resolved
//   })
//   .catch(() => {
//     // in case flip coin is rejected
//     console.error("Coin flip failed");
//   });

// console.log(getRandomNumber(1, 4));

// throwCoin()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const throwDie = (maximum) =>
  new Promise((resolve, reject) => {
    // Gets random number between 1 and maximum
    const randomNumber = getRandomNumber(1, maximum);
    // Gets time needed for resolving this promise
    // this time is between 3 and 5
    const timeToResolve = getRandomNumber(3, 5);
    // Log the values to console
    console.log(randomNumber, timeToResolve);
    setTimeout(() => {
      //Resolves with random number
      resolve(randomNumber);
      //Converts s => ms
    }, timeToResolve * 1000);
  });

throwDie(10).then((value) => console.log(value));
