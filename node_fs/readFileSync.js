const fs = require("fs");
// This is sync equivalent of read file async
const text = fs.readFileSync("poem.txt", { encoding: "utf-8" });
console.log("This is the text\n", text);
