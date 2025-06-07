import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();

  // Dummy user data (replace with real user context or props)
  const user = {
    name: 'Vikash Yadav',
    email: 'vikash@example.com',
    role: 'Participant',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-blue-600 hover:underline text-sm"
        >
          ← Back
        </button>

        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full shadow mb-4"
        />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2 text-sm text-blue-600 font-medium">{user.role}</p>

        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
