const fs = require("fs");
fs.rename("src/app.js", "src/app2.js", (err) => {
  if (err) console.error(err);
});
