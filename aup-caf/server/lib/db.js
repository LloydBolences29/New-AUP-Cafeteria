const mysql = require("mysql2/promise");
require("dotenv").config(); // <- ADD THIS LINE

let connection;

const connectToDatabase = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      port: 3300,
      user: "root",
      password: "Bolences29",
      database: "userauth",
    });
  }
  return connection;
};

module.exports = { connectToDatabase };
