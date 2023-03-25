const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@1142word1234",
  database: "vacCenter",
  port: 3306,
});

module.exports = connection;
