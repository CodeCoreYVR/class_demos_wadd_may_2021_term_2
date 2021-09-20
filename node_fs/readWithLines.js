const fs = require("fs");
const fileName = process.argv[2];
console.log(fileName);

fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(err);
  else {
    const lines = data.split("\n");
    lines.forEach((line, index) => {
      if (index !== lines.length - 1 && line !== "")
        console.log(`${index} | ${line}`);
    });
  }
});
