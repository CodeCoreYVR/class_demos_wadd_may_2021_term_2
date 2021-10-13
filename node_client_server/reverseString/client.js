// We have to import the net module on our client side as well
// In order to be able to connect to our server
const net = require("net");
// WE will use readline module to get input from user
const readLine = require("readline");

const serverPort = 4000;

// So if we want to use readline we have to create new instance
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// We have to define where our client should connect to
const client = net.createConnection(serverPort, () => {});

// if we want to get back string and not buffer
// we have to set the encoding to utf-8
client.setEncoding("utf-8");
// we also need to initialize our listener to data event
client.on("data", (data) => {
  // This function will be called if our server will send data
  console.log(`Reversed data is ${data}`);
  client.destroy();
  rl.close();
});

// Now we can ask user for the input
rl.question("Please enter text that should be reversed? \n> ", (answer) => {
  client.write(answer);
});
