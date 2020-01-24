const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodecomplete", "root", "admin", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;