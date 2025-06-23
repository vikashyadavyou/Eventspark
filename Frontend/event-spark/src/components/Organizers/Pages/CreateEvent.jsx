import React, { useState } from "react";

export default function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", eventData);
    alert("Event created successfully (Demo only)");
    // In real app: send data to backend here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Create New Event</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={eventData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={eventData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded resize-none"
          ></textarea>

          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={eventData.venue}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="url"
            name="coverImage"
            placeholder="Cover Image URL"
            value={eventData.coverImage}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
