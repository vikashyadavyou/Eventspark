// src/components/Organisers/OrganizerDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrganizerDashboard() {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    // Later redirect to event creation form
    alert("Redirect to Create Event form (coming soon)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          👩‍💼 Organiser Dashboard
        </h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {/* Card: Create Event */}
          <div className="bg-white border border-orange-300 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">
              Create New Event
            </h2>
            <p className="text-gray-600 mb-4">Plan and publish your next event.</p>
            <button
              onClick={handleCreateEvent}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Create Event
            </button>
          </div>

          {/* Card: View My Events */}
          <div className="bg-white border border-green-300 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              My Events
            </h2>
            <p className="text-gray-600 mb-4">View and manage your event list.</p>
            <button
              onClick={() => alert("View events (feature coming soon)")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              View Events
            </button>
          </div>

          {/* Card: Logout */}
          <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Logout
            </h2>
            <p className="text-gray-600 mb-4">Exit your dashboard safely.</p>
            <button
              onClick={() => {
                alert("Logged out (connect to backend later)");
                navigate("/organizer/auth");
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
