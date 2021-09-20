const fs = require("fs");
const width = parseInt(process.argv[2]);
const height = parseInt(process.argv[3]);

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

// After that we will create file with name of width and height and put the file text as an argument
fs.writeFile(`${width}_by_${height}.txt`, fileText, (err) => {
  if (err) console.error(err);
});
