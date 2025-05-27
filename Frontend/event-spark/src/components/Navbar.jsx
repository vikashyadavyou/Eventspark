import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">EventSpark</div>

      <div>
        {isLoggedIn ? (
          <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded">
            Profile
          </button>
        ) : (
          <Link to="/auth">
            <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Login / Sign Up
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
