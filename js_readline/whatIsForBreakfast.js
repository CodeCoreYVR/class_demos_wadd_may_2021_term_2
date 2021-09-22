// We will import the readline module
const readline = require("readline");

// We will create new interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// We will ask user this question
rl.question("What did you have for breakfast?\n", (answer) => {
  // This is the body of our callback function which will be trigger after user hits enter
  // We will use string interpolation to create our console log message
  console.log(`Eeww! I hate ${answer}.`);
  // After that we will close our app
  // Without this line our script will never end
  rl.close();
});
