const readline = require("readline");

// We have to create new interface for our readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

//This will display our prompt in the terminal
rl.prompt();

// We can listen to user input and call function after that
rl.on("line", (input) => {
  // This will trim whitespaces from start and from the end as well
  input = input.trim();

  //   console.log(input, input === "-c");
  // If input is === -c we will close our application
  if (input === "-c") {
    // This will close our CLI application
    rl.close();
  }
  // This input will display hello message in our terminal
  else if (input === "-m") {
    console.log("Hello world");
  } else {
    // We can override default prompt message with our custom one
    rl.setPrompt("Invalid command argument try again \n> ");
    // This line will display prompt in the terminal
    rl.prompt();
  }
});

// This event will be emitted we user will attempt to close our app
rl.on("SIGINT", () => {
  rl.question(
    "Are you sure that you want to close this application?",
    (answer) => {
      answer = answer.trim();
      if (answer === "yes") {
        rl.close();
      } else {
        console.log("This will not close my application");
      }
    }
  );
});

// This will listen to "SIGCONT" event from rl and triggers our listener function
// rl.on("SIGCONT", () => {
//   console.log("Cnt + z was pressed");
//   rl.prompt();
// });

// This will listen to event which will be emitted once we close our CLI app
rl.on("close", () => {
  console.log("Have a nice day!");
});

// This will write our text in our terminal
// rl.write("Welcome to my CLI application");

//For simple questions we can use rl.question
// first argument is string with our question
// Second argument is our callback function
// We should close the readline interface after we will get
// the answer from our user.
// rl.question("How are you today? \n", (answer) => {
//   rl.write(`Today your mood is ${answer}`);
//   rl.close();
// });
