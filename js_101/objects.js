// This is our test object
const user = {
  name: "Ondrej",
  email: "example@example.com",
  address: {
    City: "Vancouver",
    Country: "Canada",
  },
};

// How we can get name from this object
// const { name, email } = user; // This is one way how to access property of our object

// This is second option how to get value from object
// const name = user["name"];

// This is the most common way how to access value from object
// const name = user.name;

// We can crate new object and spread already created object into the new one
// If we want to spread an object we have to use ...
// const user2 = { phone: "this is my phone numer", ...user };

//If we want to get list of all keys on my object we can call Object.keys()
// const userKeys = Object.keys(user);

// This will return an array of values from our object
// const userValues = Object.values(user);

// This will return key value pair array of values from our object
// const userEntries = Object.entries(user);

// This will loop over keys on my user object
// for (key in user) {
//   console.log(key);
// }
// This is same as the line above
// Object.keys(user).forEach((key) => console.log(key));

// console.log(userEntries);
