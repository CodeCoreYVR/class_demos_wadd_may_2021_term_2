const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // We can also set the default prompt message here in our
  // config object
  prompt: "> ",
});

// This will override the default prompt
rl.setPrompt("> ");

// We are listing to event line from readline module
// And this event will take a callback function with one argument
// And this argument will contain user input
rl.on("line", (answer) => {
  // This is same as the line bellow
  // if(answer === "chrome") {
  //     rl.close()
  // }
  if (answer === "chrome") rl.close();
  else {
    // if the answer is not chrome will will display error message
    console.log("Nope, that's incorrect! Try again!");
    // And prompt user for new input
    rl.prompt();
  }
});

// Once the rl.close() function is fired this will be notified and
// it will execute the listener function
rl.on("close", () => {
  // This is body of the listener function
  console.log("That's right!");
});

// We will console log the question
console.log("What is the best browser?");
// And prompt the user for input
rl.prompt();
