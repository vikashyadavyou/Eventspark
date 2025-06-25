import { Router } from "express";
import Event from "../models/Event.js";
import Organizer from "../models/organizer.js";
import jwt from "jsonwebtoken";

const router = Router();

// ✅ Middleware to authenticate organizer
function authenticateOrganizer(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "superstrongsecretkey123!"); // Secret key
    req.organizerId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

// ✅ POST /api/organizer/events - Create Event
router.post("/events", authenticateOrganizer, async (req, res) => {
  try {
    const organizer = await Organizer.findById(req.organizerId);
    if (!organizer) return res.status(404).json({ message: "Organizer not found" });

    const event = new Event({
      ...req.body,
      organizer: req.organizerId,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error("Event creation error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET /api/organizer/my-events - Fetch all events by organizer
router.get("/my-events", authenticateOrganizer, async (req, res) => {
  try {
    const events = await Event.find({ organizer: req.organizerId }).sort({ createdAt: -1 });
    res.json({ events });
  } catch (err) {
    console.error("Fetching events error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
