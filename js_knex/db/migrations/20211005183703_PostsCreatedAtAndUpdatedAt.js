exports.up = function (knex) {
  return knex.schema.table("posts", (table) => {
    table.date("createdAt");
    table.date("updatedAt");
  });
};

exports.down = function (knex) {};
