// This method will reverse any string
const reverseString = (text) => {
  // First we split text to an array of characters
  // Then we will reverse that array
  // And finally we will join it back to string
  return text.split("").reverse().join("");
};
// If we want to use this function outside of this module we have to export it
// We are using default export because we are exporting only one thing from this module
module.exports = reverseString;
