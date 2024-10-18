// server/models/user.model.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Person = sequelize.define(
  "Person",
  {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "Person",
  }
);

module.exports = Person;
