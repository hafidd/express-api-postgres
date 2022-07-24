const { Pool } = require("pg");

const {
  user = "dev",
  host = "localhost",
  database = "api_db",
  password = "password",
  port = 5432,
} = process.env;

const db = new Pool({
  user,
  host,
  database,
  password,
  port,
});

module.exports = db;
