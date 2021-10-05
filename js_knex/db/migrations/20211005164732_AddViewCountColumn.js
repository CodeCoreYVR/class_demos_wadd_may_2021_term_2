exports.up = function (knex) {
  return knex.schema.table("posts", (table) => {
    table.integer("viewCount").unsigned();
  });
};

exports.down = function (knex) {};
