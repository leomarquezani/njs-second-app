const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: 'admin',
  database: "nodecomplete"
});

module.exports = pool.promise();