// login.js
const express = require("express");
const router = express.Router();
const { getDB } = require("./db");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const db = getDB();
  const user = await db.collection("users").findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful", user });
});

module.exports = router;
