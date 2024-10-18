// server/app.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const Person = require("./models/user.model");

// Middleware for JSON processing
app.use(express.json());

// Example route
app.get("/api", (req, res) => {
  res.send("Hello from the server!");
});

// Connecting user routes
app.use("/api", userRoutes);

// Test API
app.get("/test", (req, res) => {
  res.send({ message: "Hi from Test Api" });
});

// Test route to check database connection
app.get("/test-db", async (req, res) => {
  try {
    const users = await Person.findAll({
      attributes: ["FirstName", "LastName", "Email", "IsActive"],
    }); // Run a query to the database
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: error.message, stack: error.stack });
  }
});

module.exports = app;
