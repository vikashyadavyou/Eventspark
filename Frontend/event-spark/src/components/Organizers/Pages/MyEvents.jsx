import React, { useEffect, useState } from "react";

export default function MyEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    const token = localStorage.getItem("organizerToken");
    if (!token) {
      alert("Unauthorized: No token found");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/organizer/my-events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setEvents(data.events);
      } else {
        alert(data.message || "Failed to fetch events");
      }
    } catch (error) {
      console.error("Fetch events error:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <p className="p-6">Loading events...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Events</h2>
      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <div key={event._id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Venue: {event.venue}</p>
              <p>Description: {event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
