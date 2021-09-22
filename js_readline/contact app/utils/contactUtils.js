const fs = require("fs/promises");
const { resolve } = require("path/posix");

const getAllContacts = () =>
  new Promise((resolve, reject) => {
    fs.readFile("./data/contacts.csv", { encoding: "utf-8" })
      .then((data) => {
        const formattedData = data
          .split("\n")
          .slice(1)
          .map((row) => row.split(","));
        resolve(formattedData);
      })
      .catch((err) => reject(err));
  });

const addContact = (contact) =>
  new Promise((resolve, reject) => {
    fs.appendFile("./data/contacts.csv", `\n${contact.name},${contact.email}`)
      .then(() => resolve())
      .catch((err) => reject(err));
  });

const removeContact = (emailContact) =>
  new Promise((resolve, reject) => {
    fs.readFile("./data/contacts.csv", { encoding: "utf-8" })
      .then((data) => {
        const newData = data
          .split("\n")
          .map((row) => row.split(","))
          .filter((contact, index) => {
            if (index === 0) return true;
            else {
              return contact[1] !== emailContact;
            }
          });
        return fs.writeFile(
          "./data/contacts.csv",
          newData.map((row) => row.join(",")).join("\n")
        );
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
module.exports.getAllContacts = getAllContacts;
module.exports.addContact = addContact;
module.exports.removeContact = removeContact;
