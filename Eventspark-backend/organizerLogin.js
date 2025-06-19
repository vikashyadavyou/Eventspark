import express from 'express';
import { compare } from 'bcrypt';
import Organizer from './models/organizer.js';   // Mongoose model

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const organizer = await Organizer.findOne({ email });
    if (!organizer || !(await compare(password, organizer.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', organizer });
  } catch (err) {
    console.error('Organizer login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
export default router;
