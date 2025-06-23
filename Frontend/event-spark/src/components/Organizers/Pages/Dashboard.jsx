// src/components/Organisers/Pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { title: "Total Events", value: 8 },
  { title: "Upcoming Events", value: 3 },
  { title: "Total Participants", value: 176 },
  { title: "Completed Events", value: 5 },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Organizer Dashboard</h1>

      {/* 📊 Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-gray-600 text-sm font-medium">{stat.title}</h2>
            <p className="text-2xl font-bold text-blue-700 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ⚡ Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="space-x-4">
          <Link
            to="/organizer/create-event"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ➕ Create New Event
          </Link>
          <Link
            to="/organizer/my-events"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            📋 View My Events
          </Link>
        </div>
      </div>
    </div>
  );
}
