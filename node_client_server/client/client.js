const net = require("net");
const serverPort = 4000;
const client = new net.Socket();

client.on("data", (data) => {
  console.log("Data received from server: ", data);
  //   client.destroy();
});

client.connect(serverPort, () => {
  client.setEncoding("utf-8");
  client.write("Ondrej");
});
