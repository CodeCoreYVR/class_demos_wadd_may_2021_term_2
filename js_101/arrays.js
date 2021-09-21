const testArray = ["text 1", "text 2", "text 3", "new"];

// How we can work with arrays

// How we can loop over values in our array
// .forEach takes callback function as an argument and executes
// it for each element in our array
// testArray.forEach((value) => console.log(value));

//Length of our array is 3
// But if we try to access index 3 it will give us an error
// console.log(testArray.length);
// Index starts at 0 but length starts at 1
// If I do -1 I will get the last element of my array
// If my array is empty this will still return undefined
// console.log(testArray[testArray.length - 1]);

// testArray.length returns the length of our array
// This works fine as well but it's longer then if we use .forEach
// for (let index = 0; index < testArray.length; index++) {
//   const value = testArray[index];
//   console.log(value);
// }

// We can also use this type of loop
// Index will be index of my element in array
// for (index in testArray) {
//   console.log(index);
// }

// Another type of for loop in of
// Element will be value from my testArray
// for (element of testArray) {
//   console.log(element);
// }

// How we can get index of my element
// If element is in the array if will return an index of this element
// If element is not present in the array I  will get -1
// console.log(testArray.indexOf("text 12"));

// Another option how to get index of element is by using findIndex function
// findIndex method will take callback function and if the function returns true
// then we know that it's the same value and it will return index of this element
// if we get false that means that value is not the same as we are looking for
// We also have access to index of this value and reference to the array
// Self is reference to the array
// value is current value element
// index is index of current element
// console.log(
//   testArray.findIndex((value, index, self) => {
//     console.log(value, index, self);
//     return value === "text 2";
//   })
// );

// This will join array into string with separator
// console.log(testArray.join(","));

// How we can filter the array
// We can get again value, index, self reference
// Or we can just use value instead
// Result of filter callback function has to be true or false as well
// true means keep in the array
// false means leave out
// console.log(testArray.filter((value, index, self) => value.length > 4));

// .every
// This will return either true or false
// True will be returned if all elements fulfill the condition in our callback function
// False will be returned otherwise
// console.log(testArray.every((value, index, self) => value.length > 5));

//.some
// This is almost the same function as every but it needs just on element to fulfill the callback function
// in order return true
// console.log(testArray.some((value, index, self) => value.length > 5));

//.find
// This will return element if condition of our callback function is fulfilled otherwise it will return undefined
// Main difference between find and filter is that find returns first element which will fullfil the condition
// And filter will return all elements which fullfil the condition
// console.log(testArray.find((value, index, self) => value === "new "));

//.fill
// console.log(testArray);
// const newArray = testArray.fill("New value from fill", 1, 10);
// console.log(newArray);
