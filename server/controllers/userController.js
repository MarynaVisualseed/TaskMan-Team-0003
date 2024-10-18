// server/controllers/userController.js
const Person = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { FirstName, LastName, Email, IsActive } = req.body;
    const newUser = await Person.create({
      FirstName,
      LastName,
      Email,
      IsActive,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Person.findByPk(req.params.id, {
      attributes: ["FirstName", "LastName", "Email", "IsActive"],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
};
