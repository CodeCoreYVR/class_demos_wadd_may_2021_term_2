const cowsay = require("cowsay");
const { SQUIRREL, think } = require("cowsay");
//https://www.npmjs.com/package/cowsay

console.log(
  think({
    text: "grazing in the browser",
    cow: SQUIRREL,
    eyes: "pp",
    tongue: ";;",
  })
);
