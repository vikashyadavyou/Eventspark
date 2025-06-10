// register.js
const express = require("express");
const router = express.Router();
const { getDB } = require("./db");

router.post("/", async (req, res) => {
  const { fullName, email, password } = req.body;

  const db = getDB();
  const userExists = await db.collection("users").findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  await db.collection("users").insertOne({ fullName, email, password });
  res.status(201).json({ message: "User registered successfully" });
});

module.exports = router;
