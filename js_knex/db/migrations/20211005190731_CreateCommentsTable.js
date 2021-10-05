exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments("id");
    table.integer("post_id").notNullable();
    table.text("comment").notNullable();
  });
};

exports.down = function (knex) {};
