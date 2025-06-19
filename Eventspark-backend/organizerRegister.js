// routes/organizerRegister.js
import express from "express";
import bcrypt from "bcryptjs";
import Organizer from "./models/organizer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if organizer already exists
    const existingOrganizer = await Organizer.findOne({ email });
    if (existingOrganizer) {
      return res.status(400).json({ message: "Organizer already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new organizer
    const newOrganizer = new Organizer({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newOrganizer.save();

    res.status(201).json({ message: "Organizer registered successfully" });
  } catch (error) {
    console.error("❌ Registration error:", error.message);
    res.status(500).json({ message: "Server error during organizer registration" });
  }
});

export default router;
