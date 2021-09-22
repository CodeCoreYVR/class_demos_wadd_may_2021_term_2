const readline = require("readline");
const {
  getAllContacts,
  addContact,
  removeContact,
} = require("./utils/contactUtils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const defaultMessage =
  "What you want to do? \n-l -> List all contacts \n-a -> add new user\n-d -> deleting contact\n-c -> closing app\n> ";

rl.setPrompt(defaultMessage);
rl.prompt();
rl.on("line", (input) => {
  input = input.trim();
  if (input === "-l") {
    getAllContacts().then((contacts) => {
      console.log("This is list of your contacts");
      console.log(contacts);
      rl.setPrompt(defaultMessage);
      rl.prompt();
    });
  } else if (input === "-c") {
    rl.close();
  } else if (input === "-a") {
    rl.question("What is this contact name?\n> ", (name) => {
      console.log("Name is ", name);
      rl.question("What is this contact email?\n> ", (email) => {
        console.log("Email is", email);
        addContact({ name, email }).then(() => {
          rl.setPrompt(defaultMessage);
          rl.prompt();
        });
      });
    });
  } else if (input === "-d") {
    rl.question("Email of the user which you want to delete?\n> ", (answer) => {
      removeContact(answer).then(() => {
        rl.setPrompt(defaultMessage);
        rl.prompt();
      });
    });
  } else {
    rl.setPrompt("Invalid input try again!\n" + defaultMessage);
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log(
    "Thanks for using this app. Your contacts will be stored in file."
  );
});
