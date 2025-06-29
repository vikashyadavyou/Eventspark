import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-4 text-center">
        Welcome to EventSpark ✨
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        "Where events come alive! Join as a participant or manage as an organiser. 
        <br />
        Simplify, Spark, and Celebrate — All in one platform."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Participant Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-300 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">I'm a Participant</h2>
          <p className="text-gray-600 mb-4 text-center">Explore and register for events.</p>
          <Link
            to="/participant/auth"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Continue as Participant
          </Link>
        </div>

        {/* Organiser Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-300 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">I'm an Organiser</h2>
          <p className="text-gray-600 mb-4 text-center">Create and manage your events.</p>
          <Link
            to="/organizer/auth"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue as Organiser
          </Link>
        </div>
      </div>
    </div>
  );
}
