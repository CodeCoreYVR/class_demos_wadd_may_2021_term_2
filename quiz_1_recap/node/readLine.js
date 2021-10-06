const readLine = require("readline");
const fs = require("fs/promises");
const path = require("path");

// In order to work with readLine module
// We have to create new interface
const rl = readLine.createInterface({
  // process is global variable
  // So we have access to process anywhere
  // stdin = input from our terminal
  // stdout = output on our terminal
  // stderr = error output on our terminal
  // in node it's looks the same if it's on stderr or stdout
  input: process.stdin,
  output: process.stdout,
});

//This function will check if we have file with our data
// and if this file doesn't exist we will create one
const checkIfFileExistOrCreateFile = async () => {
  // This will combine into the path of our file
  const filePath = path.join(__dirname, "answers", "data.csv");
  try {
    // We will try to get stats on our file
    await fs.stat(filePath);
  } catch (error) {
    // there is a chance that we will get an error
    // if the error has code ENOENT
    // we know that this file is not existing
    // so we will create one
    if (error.code === "ENOENT") await fs.writeFile(filePath, "answer,date");
  }
};

// This function will add new answer into our file
const addNewAnswer = async (newAnswer) => {
  // We will get the path of our file
  const filePath = path.join(__dirname, "answers", "data.csv");
  // and add new value for the answer
  fs.appendFile(filePath, `\n${newAnswer},${new Date()}`);
};

// This function will return all answers
const getAnswers = async () => {
  // We will get the path of our file
  const filePath = path.join(__dirname, "answers", "data.csv");
  // We will load the content of our data file
  const data = await fs.readFile(filePath, { encoding: "utf-8" });
  // then we will split the text into lines
  let rows = data.split("\n");
  // and we know that the first line contains
  // name of headers
  // so headers are on row with index 0
  // so to get array of headers we will access the row on index 0
  // and split it an array of headers
  // in csv file the separator of values is always ,
  const headers = rows[0].split(",");

  //then we will remove first row with headers from our rows
  // and map the remaining rows
  rows = rows.slice(1).map((row, rowIndex) => {
    // To get all values in current row
    // we will use split again with , as a separator
    // so this will be an array of values for current row
    const rowValues = row.split(",");
    // Then we will create a new empty object
    let rowObject = {};
    // And loop over our array of headers
    // and for each header we will get the index as well
    headers.forEach((header, index) => {
      // And we know that headers are in same order
      // as values on next rows
      // so if header is on index 0
      // corresponding value will be also on index 0
      // so we will add new files to our object
      // with key of header and value from current row
      rowObject[header] = rowValues[index];
    });

    //and we will return from our map function our mapped object
    return rowObject;
  });

  // from the function we will return list of mapped rows
  return rows;
};

// We can ask question with the readLine module
// it takes a callback function
// with argument answer
// that will hold the input from user
// This will not close our cli by default
// the readLine module will be still active
rl.question("How are you? \n> ", async (answer) => {
  console.log(`This is the answer: ${answer}`);

  await fs.mkdir("answers", { recursive: true });
  await checkIfFileExistOrCreateFile();
  await addNewAnswer(answer);
  main();
});

const main = () => {
  // this will set the prompt that will be displayed to user
  rl.setPrompt("Thank you for your input. Do you want to continue? \n> ");
  rl.prompt();

  rl.on("line", async (value) => {
    if (value === "-l") {
      // Get all answers from file
      const answers = await getAnswers();
      // Loop over an array of answers
      answers.forEach((entry) => {
        // the answer is an object with
        // keys answer and date
        // If we want to use all operation on date class
        // we have to format it into date
        let date = new Date(entry.date);
        // Then we will log the row for each result
        // Whit short date format yyyy-mm-dd
        console.log(
          `${
            entry.answer
          }|${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
        );
      });
      // And then we will prompt user again
      rl.prompt();
    } else if (value === "yes" || value === "y") {
      rl.setPrompt(`Choose your next operation
      -l => list all answers
      -q => quit application\n> `);
      rl.prompt();
    } else if (value === "no" || value === "n") rl.close();
    else if (value === "-q") {
      rl.close();
    }
  });

  // We can register multiple listeners
  // This will listen to close event
  // and then it will call our
  // callback function
  rl.on("close", () => {
    console.log("Have a nice day!");
  });
};
