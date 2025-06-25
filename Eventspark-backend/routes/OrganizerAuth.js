// routes/OrganizerAuth.js
import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import Organizer from '../models/organizer.js';
import jwt from 'jsonwebtoken';

const router = Router();

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const existing = await Organizer.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashedPassword = await hash(password, 10);
    const newOrganizer = new Organizer({ name, email, phone, password: hashedPassword });
    await newOrganizer.save();

    res.status(201).json({ message: 'Organizer registered successfully' });
  } catch (err) {
    console.error('Organizer registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// LOGIN


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const organizer = await Organizer.findOne({ email });
    if (!organizer || !(await compare(password, organizer.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 🔐 Generate token
    const token = jwt.sign({ id: organizer._id }, "superstrongsecretkey123!", {
      expiresIn: '7d',
    });

    // Return both organizer and token
    res.status(200).json({
      message: 'Login successful',
      organizer,
      token,
    });
  } catch (err) {
    console.error('Organizer login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


export default router;
