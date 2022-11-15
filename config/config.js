require('dotenv').config()
module.exports = {
  development: {
    database: 'beerbook_development',
    //"host": "127.0.0.1",
    dialect: 'postgres'
  },
  test: {
    database: 'beerbook_test',
    //"host": "127.0.0.1",
    dialect: 'postgres'
  },
  production: {
    database: 'beerbook_production',
    //"host": "127.0.0.1",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
