const fs = require("fs");
// This is synchronous equivalent of read file asynchronous
const text = fs.readFileSync("poem.txt", { encoding: "utf-8" });
console.log("This is the text\n", text);
