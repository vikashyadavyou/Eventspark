import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const isLoggedIn = true; // Replace with your actual auth logic

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        EventSpark
      </Link>

      {/* Buttons */}
      <div className="space-x-4">
        {isLoggedIn ? (
          <Link
            to="/profile"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Profile
          </Link>
        ) : (
          <Link
            to="/auth"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login / Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}
