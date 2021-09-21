const fs = require("fs");
const path = require("path");

// We want to do simple thing
// Create new dir
// Create new file
// Read this new file
fs.mkdir("newFolder", { recursive: true }, (err, dirPath) => {
  const textForFile = "this text should be inside the file";

  fs.writeFile("newFolder/newFile.txt", textForFile, (err) => {
    fs.readFile(
      "./newFolder/newFile.txt",
      { encoding: "utf-8" },
      (err, data) => {
        console.log(data);
      }
    );
  });
});
