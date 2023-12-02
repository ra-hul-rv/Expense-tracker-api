const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  username: "rahul",
  password: "rahul@123",
  database: "expense_tracker",
  host: "127.0.0.1",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
