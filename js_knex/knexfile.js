// Update with your config settings.

module.exports = {
  development: {
    // Typo of client we use to communicate with db
    client: "pg",
    connection: {
      // Name of our db inside postgreSQL
      database: "knex_demo",
      // If you are on linux or windows
      // you have to specify your password
      // and username
      // user: "myusername",
      // password: "myPassword",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
