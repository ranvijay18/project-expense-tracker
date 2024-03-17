const Sequelize = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize("expense", "root","2580@Ranvi", {
    dialect: 'mysql',
    host: 'localhost'
  });

  module.exports = sequelize;
