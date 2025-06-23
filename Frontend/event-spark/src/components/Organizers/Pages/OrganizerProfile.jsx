import React from "react";

export default function OrganizerProfile() {
  const organizer = {
    organizationName: "EventSpark Org",
    email: "organiser@example.com",
    phone: "+91 9876543210",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <img
          src={organizer.avatarUrl}
          alt="Organizer"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold">{organizer.organizationName}</h2>
        <p className="text-gray-700">{organizer.email}</p>
        <p className="text-gray-600">{organizer.phone}</p>

        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
