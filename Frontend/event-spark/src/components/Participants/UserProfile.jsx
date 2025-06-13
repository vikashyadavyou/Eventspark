import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './ParticipantAuthContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, logout, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn || !user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-blue-600 hover:underline text-sm"
        >
          ← Back
        </button>

        <img
          src="https://i.pravatar.cc/150?u=user"
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full shadow mb-4"
        />
        <h2 className="text-2xl font-bold">{user.fullName}</h2>
        <p className="text-gray-600">{user.email}</p>

        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => {
              logout();
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
