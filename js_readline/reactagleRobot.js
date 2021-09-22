// Lets start with importing the readline module
const readline = require("readline");

// We have to import fs as well in order to be able to work with file system
const fs = require("fs");

// And creating new interface
const rl = readline.createInterface({
  // We will take the stdin in from global object process
  input: process.stdin,
  // Same for stdout
  output: process.stdout,
});

const generateRectangle = (width, height) => {
  // First we create row text which is same for each row
  let rowText = "";
  for (let column = 0; column < width; column++) {
    rowText += "*";
  }

  // then for each row we will add the text and add new line symbol
  let fileText = "";
  for (let row = 0; row < height; row++) {
    fileText += rowText + (row === height - 1 ? "" : "\n");
  }
  return fileText;
};

const writeFile = (fileName, fileText) => {
  // After that we will create file with name of width and height and put the file text as an argument
  fs.writeFile(fileName, fileText, (err) => {
    if (err) console.error(err);
  });
};

// We will ask user for width input
rl.question("How wide should be the rectangle?\n", (width) => {
  // We will ask user for height
  rl.question("How high should be the rectangle?\n", (height) => {
    // We will ask user for width
    rl.question("What should be the file name?\n", (fileName) => {
      // We will generate the rectangle
      const rectangle = generateRectangle(parseInt(width), parseInt(height));
      // We will write the rectangle into file
      writeFile(fileName, rectangle);
      // We will close the cli app
      rl.close();
    });
  });
});

// This event will be fired once the cli app is closed
rl.on("close", () => {
  console.log("Rectangle was generated!");
});
