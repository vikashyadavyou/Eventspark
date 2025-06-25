// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: String,
    time: String,
    venue: String,
    coverImage: String,
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organizer",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
