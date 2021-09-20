// this is our module which we created
const { add, multiply, test } = require("./math");

//this is node build in module
const path = require("path");

//this is package from npm
// const axios = require("axios");
// console.log(axios);

// console.log(path);
// console.log(path.join(__dirname, "math.js", "test.js"));

// const primes = require("./primes");
// console.log(multiply(2, 5));
// console.log(primes);
// test("this is sample text");
// console.log(global);
// global.console.log(global)

// global.test = "test"
// global.console = null;
// console.log();

// console.log(add(1, 2));

// be default we have access to node js properties

//current file
// console.log(__filename);

//current directory
// console.log(__dirname)

// access to current module
// console.log(module);

// everything after process.exit will never run
process.exit();

console.log(process.argv.slice(2));
console.log(add(parseInt(process.argv[2]), parseInt(process.argv[3])));
