const { writeAsync } = require("jimp");
const Jimp = require("jimp");
// https://www.npmjs.com/package/jimp

Jimp.read("vancouver.jpg")
  .then((image) => {
    return (
      image
        .resize(1000, 1000)
        // We can also make our image black and white only
        .greyscale()
        // We can also use this package to decrease file
        // By lowering the quality of the image
        // Quality takes an argument which is a number
        // between 1-100
        .quality(50)
    );
  })
  .then((image) => image.writeAsync("vancouver-graysacle.jpg"))
  .catch((err) => console.error);
