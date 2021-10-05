exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("id");
    table.string("title").notNullable();
    table.string("text").notNullable();
    table.string("author").notNullable();
  });
};

exports.down = function (knex) {};
