const net = require("net");
const port = 4000;
const server = net.createServer((socket) => {
  socket.setEncoding("utf-8");
  socket.on("data", (data) => {
    console.log(`Data received on server:`, data);
    socket.write(`Hello, ${data.toUpperCase()}`);
  });
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
