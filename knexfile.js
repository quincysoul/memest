if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "memest",
      host: "localhost"
    },
    migrations: {
      directory: __dirname + '/database/migrations',
    },
    seeds: {
      directory: __dirname + '/database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: __dirname + '/database/production/migrations',
    },
    seeds: {
      directory: __dirname + '/database/seeds',
    },
  },
};
