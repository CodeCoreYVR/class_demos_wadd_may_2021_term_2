const fs = require("fs");
const path = require("path");

// const fileTypes = [];
// Reading and getting info about files in the directory
// fs.readdir(__dirname, (err, listOfFiles) => {
//   if (err) console.error(err);
//   else {
//     listOfFiles.forEach((file) => {
//       fs.stat(path.join(__dirname, file), (err, stats) => {
//         if (err) console.error(err);
//         else {
//           console.log("This is stats for ", file);
//           console.log("Is this file", stats.isFile());
//           console.log("Is this directory", stats.isDirectory());
//           console.log(stats);
//         }
//       });
//       // this is how we can get different file types in this folder
//       //   let fileType = file.split(".");
//       //   if (fileType.length > 1 && !fileTypes.includes(fileType[1]))
//       //     fileTypes.push(fileType[1]);
//     });
//     console.log(fileTypes);
//   }
// });

// How to create a new file
const textWeWantToPutInsideFile = "This is sample text 2";
fs.writeFile("testFile.txt", textWeWantToPutInsideFile, (err) => {
  console.log(err);
});

// How to read content of the file
fs.readFile("testFile.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(err);
  else {
    console.log(data);
  }
});

//This only works with files not with directories
fs.rm("testFile.txt", (err) => {
  console.log(err);
});

//How to create directory
fs.mkdir("testDirectory2/subfolder", { recursive: true }, (err) => {
  console.error(err);
});

//This is how to delate directory
fs.rmdir("node_modules", { recursive: true, force: true }, (err) => {
  console.log(err);
});
