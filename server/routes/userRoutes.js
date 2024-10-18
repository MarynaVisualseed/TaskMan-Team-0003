// server/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../controllers/userController");

router.post("/users", createUser);
router.get("/users/:id", getUser);

module.exports = router;
