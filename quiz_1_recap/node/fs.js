const faker = require("faker");
const fs = require("fs/promises");

// How to write file with fs module
const writeFileDemo = async () => {
  // This will write ten random paragraphs
  // into our demoFile.txt
  await fs.writeFile("demoFile.txt", faker.lorem.paragraphs(10));
};

// How we can read file
const readFileDemo = async (fileName) => {
  try {
    // When we are calling fs.readFile it takes
    // two arguments first one is path
    // and second one is settings object
    // If we set encoding to utf-8
    // it will return text instead of buffer
    const fileContent = await fs.readFile(fileName, { encoding: "utf-8" });
    return fileContent;
  } catch (error) {
    console.error(error);
  }
};

// Let's try to count amount of words inside my demoFile.txt
const countWords = (text) => {
  // We have to split our text to an array of words
  // We can do it by calling split on our text
  // The argument for split function
  // is the text by wich we want to split our text
  // If we use " " text with space it will separate
  // our text to words. (space is between each word)

  // Then when we have an array of words
  // we can simply call .length to get the length of
  // that array
  return text.split(" ").length;
};

// This function will determine if path is a directory of file
const isThisFile = async (path) => {
  const stats = await fs.stat(path);
  return stats.isFile();
};

const getAllFilesInMyPath = async (path) => {
  // In order to get list of file of some directory
  // we can use fs.readdir which takes the path as an argument
  const files = await fs.readdir(path);
  return files;
};

// This function will add new text at the end of our file
const appendText = async (filePath, newText) => {
  await fs.appendFile(filePath, newText);
};

// This is wrapper for our methods call so we can use
// await
const main = async () => {
  try {
    await writeFileDemo();
    const fileContent = await readFileDemo("demoFile.txt");

    await appendText("demoFile.txt", faker.lorem.paragraphs(20));
    const fileContentAppended = await readFileDemo("demoFile.txt");

    console.log(`Our text has: ${countWords(fileContent)} words.`);
    console.log(
      `Our text in appended file has: ${countWords(fileContentAppended)} words.`
    );

    console.log(`demo_folder is file?: `, await isThisFile("demo_folder"));
    console.log(`demo_file.txt is file?: `, await isThisFile("demoFile.txt"));

    // variable __dirname holds path for current directory of our module
    console.log(`current path is ${__dirname}`);
    // variable __filename holds path to current file
    console.log(`current file is ${__filename}`);

    const dirFiles = await getAllFilesInMyPath(__dirname);
    console.log(`List of files of this directory`, dirFiles);

    const mappedDirFiles = dirFiles.map(async (fileName) => {
      const isFile = await isThisFile(fileName);
      return {
        fileName,
        isFile,
        isFolder: !isFile,
      };
    });

    setTimeout(() => {
      console.log(`our mapped array is now this`, mappedDirFiles);
    }, 1000);
  } catch (error) {
    console.error(error);
  }
};

// We have to call our main method in order to run our demo
// function
main().catch(console.error);
