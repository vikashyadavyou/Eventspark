import React from "react";

const demoEvents = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "2025-07-20",
    venue: "Ahmedabad Convention Center",
  },
  {
    id: 2,
    title: "Startup Pitch Fest",
    date: "2025-08-05",
    venue: "Nirma University Auditorium",
  },
];

export default function MyEvents() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Events</h2>
      {demoEvents.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <div className="grid gap-4">
          {demoEvents.map((event) => (
            <div key={event.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
