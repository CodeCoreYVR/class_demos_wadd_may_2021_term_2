const fs = require("fs");
// Promise can have multiple states
// Pending
// Resolved
// Rejected

// This is the same code with arrow function as well as with regular function
// new Promise((resolve, reject) => {});

// new Promise(function (resolve, reject) {});

// const doHomework = new Promise((resolve, reject) => {
//   //   resolve(true);
//   reject("Homework was not finished");
// });

// doHomework
//   .then((value) => {
//     console.log("This promise was resolved with value", value);
//   })
//   .catch((err) => {
//     console.error("This promise was rejected with value", err);
//   });

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFile("./newFolder/newFile.txt")
  .then((data) => {
    console.log("This is data from promise", data);
    throw "This is exception";
    return readFile("./newFolder/newFile.txt");
  })
  .then((data2) => {
    console.log("This is result of second file read", data2);
  })
  .catch((err) => {
    console.error(err);
  });
