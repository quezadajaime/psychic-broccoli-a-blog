//Dotenv import
require("dotenv").config();

//sequelize import
const sequelize = require("sequelize");

//allow for environmental variables to be used
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;