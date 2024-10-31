// server/config/db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("taskmanager", "Garkusha", "bluesong11*", {
  host: "unicorn-taskmanager.database.windows.net",
  dialect: "mssql",
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: true,
      requestTimeout: 30000, // timeout = 30 seconds
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync(); // Synchronizing the model with the database
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
