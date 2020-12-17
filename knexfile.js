const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: './database/houses.db3'
    }
  },

  testing: {
    ...sharedConfig,
    connection: {
      filename: './database/test.db3'
    }
  }

};

// production: {
//   client: 'postgresql',
//   connection: {
//     database: 'my_db',
//     user:     'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// }
