const faker = require("faker");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // We will start with empty array
      const posts = [];
      // And we will add 1000 random posts
      for (let index = 0; index < 1000; index++) {
        posts.push({
          // Title will be random string with sentence of five words
          title: faker.lorem.sentence(2),
          // Text will be random string with 10 sentences
          text: faker.lorem.sentences(2),
          // Author will be combination of random firstName and lastName
          author: faker.name.firstName() + faker.name.lastName(),
          // ViewCount will be number between 1 and 1000
          viewCount: faker.datatype.number({
            min: 1,
            max: 1000,
          }),
          createdAt: faker.date.between("2018-01-01", "2021-12-31"),
          updatedAt: faker.date.between("2018-01-01", "2021-12-31"),
        });
      }
      // Inserts seed entries from posts array
      // console.log(knex("posts").insert(posts).toSQL());
      return knex("posts").insert(posts);
    });
};
