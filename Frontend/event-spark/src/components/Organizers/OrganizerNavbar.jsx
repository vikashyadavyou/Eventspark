import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrganizerNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("organizerToken");
    navigate("/organizer/auth");
  };

  return (
    <nav className="bg-blue-800 text-white p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/organizer/dashboard">EventSpark (Organiser)</Link>
      </h1>

      <div className="space-x-6 text-sm">
        <Link to="/organizer/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/organizer/create-event" className="hover:underline">
          Create Event
        </Link>
        <Link to="/organizer/my-events" className="hover:underline">
          My Events
        </Link>
        <Link to="/organizer/profile" className="hover:underline">
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 ml-2"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
