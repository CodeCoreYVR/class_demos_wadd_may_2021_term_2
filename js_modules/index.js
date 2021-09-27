const fs = require("fs");

const logHaveANiceDay = () => {
  console.log("Have a nice day");
};

const main = async () => {
  // We can read our config file with the fs module
  fs.readFile("package.json", { encoding: "utf-8" }, (err, data) => {
    // But this will be text by default
    console.log("data", data.name);
    // But we can covert json text into js object JSON.parse()
    const convertedData = JSON.parse(data);
    // Then we have access to all properties with the .
    console.log("convertedData", convertedData.name);

    // We can also convert object into json text by using JSON.stringify() method
    console.log("converted back to string", JSON.stringify(convertedData));
  });
};

main().catch((err) => console.error);

module.exports = logHaveANiceDay;
