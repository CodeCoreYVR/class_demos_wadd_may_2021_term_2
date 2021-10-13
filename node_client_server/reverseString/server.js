// If we want to build TCP / client / server app
// we have to use the net build in module
const net = require("net");
// Then we will import the reverse Function
const reverseString = require("./utils/reverseString");

// This will be the port where our app will listen
// this port has to be empty (no another app can use same port)
const port = 4000;

// We have to create new instance of out server
// we can create new instance by calling net.CreateServer
// It takes callback function as an argument
// And in this function we have access to socket
const server = net.createServer((socket) => {
  // Default setting for encoding will return buffer instead if string
  // So we have to change it to utf-8 to get back string value
  socket.setEncoding("utf-8");
  socket.on("data", (data) => {
    // Now data hold value from our client app
    console.log(`Input from user is: ${data}`);
    socket.write(reverseString(data));
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
