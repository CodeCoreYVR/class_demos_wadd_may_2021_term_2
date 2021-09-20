const fs = require("fs");
// Because we are not sure if src file exist we will create it first
fs.mkdir("src", { recursive: true, force: true }, (err) => {
  if (err) console.error(err);
  else {
    // Then we will copy our file from this folder to src folder
    fs.copyFile("app.js", "src/app.js", (err) => {
      if (err) console.error(err);
    });
  }
});
