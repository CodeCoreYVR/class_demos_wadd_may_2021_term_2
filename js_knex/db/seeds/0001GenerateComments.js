const faker = require("faker");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(async function () {
      const stats = await knex.min("id").max("id").from("posts");
      const comments = [];
      for (let index = 0; index < 1000; index++) {
        comments.push({
          post_id: faker.datatype.number({
            min: stats[0].min,
            max: stats[0].max,
          }),
          comment: faker.lorem.sentences(5),
        });
      }
      // Inserts seed entries
      return knex("comments").insert(comments);
    });
};
