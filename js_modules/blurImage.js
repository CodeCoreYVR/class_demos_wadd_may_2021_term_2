// We start by importing the jimp module
const Jimp = require("jimp");
// https://www.npmjs.com/package/jimp

// We will get our fileName from arguments
const fileName = process.argv[2];
// And we will get blurRadius as another argument
// But we have to convert this argument which is a string
// Into an integer
const blurRadius = parseInt(process.argv[3]);

// // Then we will read our file
// // And this will use our callback
// // Which has two arguments
// // First is an error object
// // And second one is or qrCoe Jimp object
// Jimp.read(fileName, (err, qrCode) => {
//   // Then we check if we have an error
//   if (err) console.error(err);
//   else {
//     // Else we will blur our image
//     qrCode.blur(blurRadius, (err, newQRCode) => {
//       // And then write it into new file
//       newQRCode.write("qrCode2-blurred.png");
//     });
//   }
// });

// We can use callbacks or we can use .then .catch

// This is same code as above
// But we are using .then and .catch
// We will read file
Jimp.read(fileName)
  // If read was successful we will blur the image
  .then((qrCode) => {
    // This will return another promise
    return qrCode.blur(blurRadius);
  })
  // So we can use .then again
  .then((qrCode) => {
    // And write the result of blur into new file
    // This will also return new promise
    // We can also generate the new file name dynamically
    // So we will split file name into two parts
    // first part will hold the filename and second one
    // will hold the extension of our file
    // then we can edit the part if filename
    // And then put it back together
    let newFileName = fileName.split(".");
    newFileName[0] += "-blurred-new";
    return qrCode.writeAsync(newFileName.join("."));
  })
  // So we can use .then again
  .then(() => {
    console.log("New file was created");
  })
  // And if one of this promises will fail
  // Then we will console.error the error out of that promise
  .catch((err) => console.error);
